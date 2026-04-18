# 组件通知机制分析报告

## 一、基础库介绍

### 1.1 使用的库：PubSubJS

**库信息：**
- 名称：PubSubJS
- GitHub：https://github.com/mroderick/PubSubJS
- 位置：[web/base/page/index.js:4560-4900](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L4560-L4900)

**核心API：**

| 方法 | 说明 |
|------|------|
| `PubSub.subscribe(message, func)` | 订阅消息，返回唯一token |
| `PubSub.publish(message, data)` | 异步发布消息 |
| `PubSub.publishSync(message, data)` | 同步发布消息 |
| `PubSub.unsubscribe(token)` | 取消订阅 |

**使用示例：**
```javascript
// 订阅
var token = PubSub.subscribe('myTopic', function(msg, data) {
    console.log(data);
});

// 发布
PubSub.publish('myTopic', { key: 'value' });

// 取消订阅
PubSub.unsubscribe(token);
```

---

## 二、完整调用链路

### 2.1 入口函数

**页面入口：** [web/base/index.html:1](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/index.html#L1)

**JavaScript入口：** [web/base/page/index.js:8859](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L8859)
```javascript
Tools.PubSubListen("act##Start", Start);
```

### 2.2 调用链路图

```
┌─────────────────────────────────────────────────────────────────┐
│                        应用启动流程                              │
├─────────────────────────────────────────────────────────────────┤
│  1. 页面加载                                                     │
│     └─> index.html 加载 index.js                                │
│                                                                 │
│  2. Action注册 (indexAction.js:8859)                            │
│     └─> PubSubListen("act##Start", Start)                       │
│     └─> PubSubListen("act##Load", Load)                         │
│                                                                 │
│  3. 触发执行                                                     │
│     └─> Start() 被调用                                          │
│         └─> Load()                                              │
│             └─> _BrokerUI() 发送消息                            │
│                 └─> PubSubSend("comp##_BoxPage<<Body", data)    │
└─────────────────────────────────────────────────────────────────┘
                              ↓
┌─────────────────────────────────────────────────────────────────┐
│                      组件订阅流程                                │
├─────────────────────────────────────────────────────────────────┤
│  1. React组件创建 (_BoxPage.js:1826)                            │
│     └─> useEffect(() => {                                       │
│           channelToken = PubSubListen(_id, _BoxPageAction)      │
│         })                                                      │
│                                                                 │
│  2. 消息接收                                                     │
│     └─> _BoxPageAction(param, handler) 被调用                   │
│         └─> CompActSet() 更新state/data                         │
│             └─> setState() 触发重渲染                           │
│                                                                 │
│  3. 组件销毁                                                     │
│     └─> PubSubCancel(channelToken)                              │
└─────────────────────────────────────────────────────────────────┘
```

### 2.3 关键代码路径

**发送端（Module层）：**

| 步骤 | 文件位置 | 函数 |
|------|----------|------|
| 1 | [index.js:8796](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L8796) | `Tools.PubSubListen("act##Start", Start)` |
| 2 | [index.js:8732](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L8732) | `_BrokerUI` 调用 `PubSubSend(_id, passData)` |
| 3 | [common.js:641](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/common/common.js#L641) | `PubSubSend` 封装函数 |
| 4 | [index.js:4722](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L4722) | `PubSub.publish()` 原生API |

**接收端（Component层）：**

| 步骤 | 文件位置 | 函数 |
|------|----------|------|
| 1 | [index.js:1826](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L1826) | `PubSubListen(_id, _BoxPageAction, handler)` |
| 2 | [common.js:600](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/common/common.js#L600) | `PubSubListen` 封装函数 |
| 3 | [index.js:4746](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L4746) | `PubSub.subscribe()` 原生API |
| 4 | [index.js:1420](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L1420) | `_BoxPageAction` 处理消息 |
| 5 | [common.js:1150](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/common/common.js#L1150) | `CompActSet` 更新状态 |

### 2.4 工作原理

```
┌──────────────┐    PubSubSend     ┌──────────────┐    publish     ┌──────────────┐
│   Module     │ ───────────────> │   PubSubJS   │ ─────────────> │  Component   │
│  (_BrokerUI) │                   │   (消息中心)  │                │  (_BoxPage)  │
└──────────────┘                   └──────────────┘                └──────────────┘
       │                                  │                               │
       │ 1. 构建消息数据                   │                               │
       │ 2. 调用PubSubSend                │                               │
       │                                  │                               │
       └──────────────────────────────────┼───────────────────────────────┘
                                          │
                                          ↓
                              ┌───────────────────────┐
                              │  messages = {         │
                              │    "topic1": {        │
                              │      token1: callback │
                              │      token2: callback │
                              │    }                  │
                              │  }                    │
                              └───────────────────────┘
```

**核心流程：**
1. **订阅阶段**：组件mount时，通过`PubSubListen`订阅特定ID，PubSubJS存储token与回调映射
2. **发布阶段**：业务逻辑调用`PubSubSend`，PubSubJS查找对应订阅者并执行回调
3. **取消订阅**：组件unmount时，通过`PubSubCancel`清理订阅

---

## 三、相同组件多处出现的问题分析

### 3.1 当前实现方式

组件通过`_id`配置项订阅消息：

```javascript
// index.js:1826
const _id = Tools.ParamRead("_id", "", config);
channelToken.current = Tools.PubSubListen(_id, _BoxPageAction, handler);
```

### 3.2 问题分析

| 场景 | 是否有问题 | 说明 |
|------|------------|------|
| 相同组件，不同`_id` | ✅ 无问题 | 各自独立订阅，互不干扰 |
| 相同组件，相同`_id` | ⚠️ 有问题 | 所有实例同时响应同一消息 |

**问题示例：**
```jsx
// 两个组件实例使用相同的_id
<_BoxPage config={{ "_id": "comp##BoxPage" }} />
<_BoxPage config={{ "_id": "comp##BoxPage" }} />

// 发送消息时，两个组件都会收到
PubSubSend("comp##BoxPage", data);  // 两个组件同时响应
```

### 3.3 解决方案

**方案一：使用唯一ID（推荐）**
```jsx
<_BoxPage config={{ "_id": "comp##BoxPage_1" }} />
<_BoxPage config={{ "_id": "comp##BoxPage_2" }} />
```

**方案二：使用PubSubJS的层级topic**
```javascript
// 订阅
PubSub.subscribe("comp##BoxPage.instance1", callback);
PubSub.subscribe("comp##BoxPage.instance2", callback);

// 发布到所有实例
PubSub.publish("comp##BoxPage", data);  // 两个实例都收到
```

---

## 四、为什么不用React Hook

### 4.1 当前架构特点

```
┌─────────────────────────────────────────────────────────────┐
│                      架构分层                                │
├─────────────────────────────────────────────────────────────┤
│  Page层 (indexAction.js)                                    │
│     └─> 独立的业务逻辑，不依赖React生命周期                  │
│                                                             │
│  Module层 (_BrokerUI, _OperRoute等)                         │
│     └─> 纯函数模块，可被任何地方调用                         │
│                                                             │
│  Component层 (_BoxPage, _CompTop等)                         │
│     └─> React组件，通过PubSub接收消息                       │
└─────────────────────────────────────────────────────────────┘
```

### 4.2 PubSub vs React Hook 对比

| 维度 | PubSubJS | React Hook (useState/useContext) |
|------|----------|----------------------------------|
| **跨组件通信** | ✅ 任意组件间直接通信 | ❌ 需要Context逐层传递 |
| **生命周期解耦** | ✅ 业务逻辑独立于React | ❌ 必须在React组件内 |
| **动态加载** | ✅ 支持组件未加载时缓存消息 | ❌ 组件必须已挂载 |
| **调试追踪** | ✅ 消息流清晰可追踪 | ⚠️ 状态变化难以追踪 |
| **性能** | ⚠️ 每次发布都触发回调 | ✅ 精确控制重渲染 |
| **类型安全** | ❌ 弱类型 | ✅ TypeScript友好 |

### 4.3 选择PubSub的原因

**1. 动态组件加载场景**
```javascript
// common.js:608 - 消息缓存机制
if (id in _PubSubQueue) {
    setTimeout(() => {
        for (const item of _PubSubQueue[id]) {
            pubsub.publish(id, item);  // 重发缓存的消息
        }
    });
}
```
组件可能尚未加载，消息先被缓存，组件加载后重发。

**2. 业务逻辑与UI解耦**
```javascript
// index.js:8796 - Module层直接调用
_BrokerUI(moduleParam, passParam);  // 不依赖React组件存在
```

**3. 跨层级通信**
```
Page层 ──────┐
             ├──> PubSub ────> Component层
Module层 ────┘
```
无需Context Provider包裹，任意层级直接通信。

### 4.4 适用场景总结

| 场景 | 推荐方案 |
|------|----------|
| 父子组件通信 | React Hook (props/callback) |
| 兄弟组件通信 | React Hook (Context) 或 PubSub |
| 跨多层组件 | PubSub |
| 动态加载组件 | PubSub |
| 需要消息缓存 | PubSub |
| 简单状态管理 | React Hook (useState) |
| 复杂状态管理 | Redux / Zustand / PubSub |

---

## 五、总结

### 5.1 核心机制

本项目采用 **PubSubJS** 作为组件通知机制的基础库，实现了：

1. **发布-订阅模式**：Module层发布消息，Component层订阅处理
2. **消息缓存机制**：组件未加载时缓存消息，加载后重发
3. **生命周期绑定**：订阅在`useEffect`中创建，unmount时自动取消

### 5.2 关键文件

| 文件 | 作用 |
|------|------|
| [common.js:588-672](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/common/common.js#L588-L672) | PubSub封装函数 |
| [index.js:4560-4900](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L4560-L4900) | PubSubJS源码 |
| [index.js:8700-8732](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L8700-L8732) | _BrokerUI模块 |
| [index.js:1800-1833](file:///Users/yiigaa/work/dogfooding-3-847/glm/web/base/page/index.js#L1800-L1833) | 组件订阅实现 |

### 5.3 注意事项

1. **相同组件多处使用时，必须使用不同的`_id`**
2. **消息发送是异步的（默认），需要同步时使用`_isSync: true`**
3. **组件销毁时会自动取消订阅，无需手动处理**
