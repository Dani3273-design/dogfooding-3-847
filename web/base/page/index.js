/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 154:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1917);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

/* harmony default export */ __webpack_exports__.A = (cloneBuffer);


/***/ }),

/***/ 241:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1917);


/** Built-in value references. */
var Symbol = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Symbol;

/* harmony default export */ __webpack_exports__.A = (Symbol);


/***/ }),

/***/ 367:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

/* harmony default export */ __webpack_exports__.A = (overArg);


/***/ }),

/***/ 407:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _initCloneObject; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
;// ./node_modules/lodash-es/_baseCreate.js


/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!(0,isObject/* default */.A)(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

/* harmony default export */ var _baseCreate = (baseCreate);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getPrototype.js
var _getPrototype = __webpack_require__(5647);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__(7271);
;// ./node_modules/lodash-es/_initCloneObject.js




/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !(0,_isPrototype/* default */.A)(object))
    ? _baseCreate((0,_getPrototype/* default */.A)(object))
    : {};
}

/* harmony default export */ var _initCloneObject = (initCloneObject);


/***/ }),

/***/ 565:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3988);


/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(result).set(new _Uint8Array_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A(arrayBuffer));
  return result;
}

/* harmony default export */ __webpack_exports__.A = (cloneArrayBuffer);


/***/ }),

/***/ 799:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./node_modules/react-dom/client.js
var client = __webpack_require__(5338);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./Code/Common/Tools/Tools.js + 9 modules
var Tools = __webpack_require__(6543);
// EXTERNAL MODULE: ./Code/Common/Logger/Logger.js
var Logger = __webpack_require__(5507);
;// ./node_modules/immer/dist/immer.mjs
// src/utils/env.ts
var NOTHING = Symbol.for("immer-nothing");
var DRAFTABLE = Symbol.for("immer-draftable");
var DRAFT_STATE = Symbol.for("immer-state");

// src/utils/errors.ts
var errors =  false ? 0 : [];
function die(error, ...args) {
  if (false) {}
  throw new Error(
    `[Immer] minified error nr: ${error}. Full error at: https://bit.ly/3cXEKWf`
  );
}

// src/utils/common.ts
var getPrototypeOf = Object.getPrototypeOf;
function isDraft(value) {
  return !!value && !!value[DRAFT_STATE];
}
function isDraftable(value) {
  if (!value)
    return false;
  return isPlainObject(value) || Array.isArray(value) || !!value[DRAFTABLE] || !!value.constructor?.[DRAFTABLE] || isMap(value) || isSet(value);
}
var objectCtorString = Object.prototype.constructor.toString();
function isPlainObject(value) {
  if (!value || typeof value !== "object")
    return false;
  const proto = getPrototypeOf(value);
  if (proto === null) {
    return true;
  }
  const Ctor = Object.hasOwnProperty.call(proto, "constructor") && proto.constructor;
  if (Ctor === Object)
    return true;
  return typeof Ctor == "function" && Function.toString.call(Ctor) === objectCtorString;
}
function original(value) {
  if (!isDraft(value))
    die(15, value);
  return value[DRAFT_STATE].base_;
}
function each(obj, iter) {
  if (getArchtype(obj) === 0 /* Object */) {
    Reflect.ownKeys(obj).forEach((key) => {
      iter(key, obj[key], obj);
    });
  } else {
    obj.forEach((entry, index) => iter(index, entry, obj));
  }
}
function getArchtype(thing) {
  const state = thing[DRAFT_STATE];
  return state ? state.type_ : Array.isArray(thing) ? 1 /* Array */ : isMap(thing) ? 2 /* Map */ : isSet(thing) ? 3 /* Set */ : 0 /* Object */;
}
function has(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.has(prop) : Object.prototype.hasOwnProperty.call(thing, prop);
}
function get(thing, prop) {
  return getArchtype(thing) === 2 /* Map */ ? thing.get(prop) : thing[prop];
}
function set(thing, propOrOldValue, value) {
  const t = getArchtype(thing);
  if (t === 2 /* Map */)
    thing.set(propOrOldValue, value);
  else if (t === 3 /* Set */) {
    thing.add(value);
  } else
    thing[propOrOldValue] = value;
}
function is(x, y) {
  if (x === y) {
    return x !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}
function isMap(target) {
  return target instanceof Map;
}
function isSet(target) {
  return target instanceof Set;
}
function latest(state) {
  return state.copy_ || state.base_;
}
function shallowCopy(base, strict) {
  if (isMap(base)) {
    return new Map(base);
  }
  if (isSet(base)) {
    return new Set(base);
  }
  if (Array.isArray(base))
    return Array.prototype.slice.call(base);
  const isPlain = isPlainObject(base);
  if (strict === true || strict === "class_only" && !isPlain) {
    const descriptors = Object.getOwnPropertyDescriptors(base);
    delete descriptors[DRAFT_STATE];
    let keys = Reflect.ownKeys(descriptors);
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i];
      const desc = descriptors[key];
      if (desc.writable === false) {
        desc.writable = true;
        desc.configurable = true;
      }
      if (desc.get || desc.set)
        descriptors[key] = {
          configurable: true,
          writable: true,
          // could live with !!desc.set as well here...
          enumerable: desc.enumerable,
          value: base[key]
        };
    }
    return Object.create(getPrototypeOf(base), descriptors);
  } else {
    const proto = getPrototypeOf(base);
    if (proto !== null && isPlain) {
      return { ...base };
    }
    const obj = Object.create(proto);
    return Object.assign(obj, base);
  }
}
function freeze(obj, deep = false) {
  if (isFrozen(obj) || isDraft(obj) || !isDraftable(obj))
    return obj;
  if (getArchtype(obj) > 1) {
    obj.set = obj.add = obj.clear = obj.delete = dontMutateFrozenCollections;
  }
  Object.freeze(obj);
  if (deep)
    Object.entries(obj).forEach(([key, value]) => freeze(value, true));
  return obj;
}
function dontMutateFrozenCollections() {
  die(2);
}
function isFrozen(obj) {
  return Object.isFrozen(obj);
}

// src/utils/plugins.ts
var plugins = {};
function getPlugin(pluginKey) {
  const plugin = plugins[pluginKey];
  if (!plugin) {
    die(0, pluginKey);
  }
  return plugin;
}
function loadPlugin(pluginKey, implementation) {
  if (!plugins[pluginKey])
    plugins[pluginKey] = implementation;
}

// src/core/scope.ts
var currentScope;
function getCurrentScope() {
  return currentScope;
}
function createScope(parent_, immer_) {
  return {
    drafts_: [],
    parent_,
    immer_,
    // Whenever the modified draft contains a draft from another scope, we
    // need to prevent auto-freezing so the unowned draft can be finalized.
    canAutoFreeze_: true,
    unfinalizedDrafts_: 0
  };
}
function usePatchesInScope(scope, patchListener) {
  if (patchListener) {
    getPlugin("Patches");
    scope.patches_ = [];
    scope.inversePatches_ = [];
    scope.patchListener_ = patchListener;
  }
}
function revokeScope(scope) {
  leaveScope(scope);
  scope.drafts_.forEach(revokeDraft);
  scope.drafts_ = null;
}
function leaveScope(scope) {
  if (scope === currentScope) {
    currentScope = scope.parent_;
  }
}
function enterScope(immer2) {
  return currentScope = createScope(currentScope, immer2);
}
function revokeDraft(draft) {
  const state = draft[DRAFT_STATE];
  if (state.type_ === 0 /* Object */ || state.type_ === 1 /* Array */)
    state.revoke_();
  else
    state.revoked_ = true;
}

// src/core/finalize.ts
function processResult(result, scope) {
  scope.unfinalizedDrafts_ = scope.drafts_.length;
  const baseDraft = scope.drafts_[0];
  const isReplaced = result !== void 0 && result !== baseDraft;
  if (isReplaced) {
    if (baseDraft[DRAFT_STATE].modified_) {
      revokeScope(scope);
      die(4);
    }
    if (isDraftable(result)) {
      result = finalize(scope, result);
      if (!scope.parent_)
        maybeFreeze(scope, result);
    }
    if (scope.patches_) {
      getPlugin("Patches").generateReplacementPatches_(
        baseDraft[DRAFT_STATE].base_,
        result,
        scope.patches_,
        scope.inversePatches_
      );
    }
  } else {
    result = finalize(scope, baseDraft, []);
  }
  revokeScope(scope);
  if (scope.patches_) {
    scope.patchListener_(scope.patches_, scope.inversePatches_);
  }
  return result !== NOTHING ? result : void 0;
}
function finalize(rootScope, value, path) {
  if (isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  if (!state) {
    each(
      value,
      (key, childValue) => finalizeProperty(rootScope, state, value, key, childValue, path)
    );
    return value;
  }
  if (state.scope_ !== rootScope)
    return value;
  if (!state.modified_) {
    maybeFreeze(rootScope, state.base_, true);
    return state.base_;
  }
  if (!state.finalized_) {
    state.finalized_ = true;
    state.scope_.unfinalizedDrafts_--;
    const result = state.copy_;
    let resultEach = result;
    let isSet2 = false;
    if (state.type_ === 3 /* Set */) {
      resultEach = new Set(result);
      result.clear();
      isSet2 = true;
    }
    each(
      resultEach,
      (key, childValue) => finalizeProperty(rootScope, state, result, key, childValue, path, isSet2)
    );
    maybeFreeze(rootScope, result, false);
    if (path && rootScope.patches_) {
      getPlugin("Patches").generatePatches_(
        state,
        path,
        rootScope.patches_,
        rootScope.inversePatches_
      );
    }
  }
  return state.copy_;
}
function finalizeProperty(rootScope, parentState, targetObject, prop, childValue, rootPath, targetIsSet) {
  if (false)
    {}
  if (isDraft(childValue)) {
    const path = rootPath && parentState && parentState.type_ !== 3 /* Set */ && // Set objects are atomic since they have no keys.
    !has(parentState.assigned_, prop) ? rootPath.concat(prop) : void 0;
    const res = finalize(rootScope, childValue, path);
    set(targetObject, prop, res);
    if (isDraft(res)) {
      rootScope.canAutoFreeze_ = false;
    } else
      return;
  } else if (targetIsSet) {
    targetObject.add(childValue);
  }
  if (isDraftable(childValue) && !isFrozen(childValue)) {
    if (!rootScope.immer_.autoFreeze_ && rootScope.unfinalizedDrafts_ < 1) {
      return;
    }
    finalize(rootScope, childValue);
    if ((!parentState || !parentState.scope_.parent_) && typeof prop !== "symbol" && Object.prototype.propertyIsEnumerable.call(targetObject, prop))
      maybeFreeze(rootScope, childValue);
  }
}
function maybeFreeze(scope, value, deep = false) {
  if (!scope.parent_ && scope.immer_.autoFreeze_ && scope.canAutoFreeze_) {
    freeze(value, deep);
  }
}

// src/core/proxy.ts
function createProxyProxy(base, parent) {
  const isArray = Array.isArray(base);
  const state = {
    type_: isArray ? 1 /* Array */ : 0 /* Object */,
    // Track which produce call this is associated with.
    scope_: parent ? parent.scope_ : getCurrentScope(),
    // True for both shallow and deep changes.
    modified_: false,
    // Used during finalization.
    finalized_: false,
    // Track which properties have been assigned (true) or deleted (false).
    assigned_: {},
    // The parent draft state.
    parent_: parent,
    // The base state.
    base_: base,
    // The base proxy.
    draft_: null,
    // set below
    // The base copy with any updated values.
    copy_: null,
    // Called by the `produce` function.
    revoke_: null,
    isManual_: false
  };
  let target = state;
  let traps = objectTraps;
  if (isArray) {
    target = [state];
    traps = arrayTraps;
  }
  const { revoke, proxy } = Proxy.revocable(target, traps);
  state.draft_ = proxy;
  state.revoke_ = revoke;
  return proxy;
}
var objectTraps = {
  get(state, prop) {
    if (prop === DRAFT_STATE)
      return state;
    const source = latest(state);
    if (!has(source, prop)) {
      return readPropFromProto(state, source, prop);
    }
    const value = source[prop];
    if (state.finalized_ || !isDraftable(value)) {
      return value;
    }
    if (value === peek(state.base_, prop)) {
      prepareCopy(state);
      return state.copy_[prop] = createProxy(value, state);
    }
    return value;
  },
  has(state, prop) {
    return prop in latest(state);
  },
  ownKeys(state) {
    return Reflect.ownKeys(latest(state));
  },
  set(state, prop, value) {
    const desc = getDescriptorFromProto(latest(state), prop);
    if (desc?.set) {
      desc.set.call(state.draft_, value);
      return true;
    }
    if (!state.modified_) {
      const current2 = peek(latest(state), prop);
      const currentState = current2?.[DRAFT_STATE];
      if (currentState && currentState.base_ === value) {
        state.copy_[prop] = value;
        state.assigned_[prop] = false;
        return true;
      }
      if (is(value, current2) && (value !== void 0 || has(state.base_, prop)))
        return true;
      prepareCopy(state);
      markChanged(state);
    }
    if (state.copy_[prop] === value && // special case: handle new props with value 'undefined'
    (value !== void 0 || prop in state.copy_) || // special case: NaN
    Number.isNaN(value) && Number.isNaN(state.copy_[prop]))
      return true;
    state.copy_[prop] = value;
    state.assigned_[prop] = true;
    return true;
  },
  deleteProperty(state, prop) {
    if (peek(state.base_, prop) !== void 0 || prop in state.base_) {
      state.assigned_[prop] = false;
      prepareCopy(state);
      markChanged(state);
    } else {
      delete state.assigned_[prop];
    }
    if (state.copy_) {
      delete state.copy_[prop];
    }
    return true;
  },
  // Note: We never coerce `desc.value` into an Immer draft, because we can't make
  // the same guarantee in ES5 mode.
  getOwnPropertyDescriptor(state, prop) {
    const owner = latest(state);
    const desc = Reflect.getOwnPropertyDescriptor(owner, prop);
    if (!desc)
      return desc;
    return {
      writable: true,
      configurable: state.type_ !== 1 /* Array */ || prop !== "length",
      enumerable: desc.enumerable,
      value: owner[prop]
    };
  },
  defineProperty() {
    die(11);
  },
  getPrototypeOf(state) {
    return getPrototypeOf(state.base_);
  },
  setPrototypeOf() {
    die(12);
  }
};
var arrayTraps = {};
each(objectTraps, (key, fn) => {
  arrayTraps[key] = function() {
    arguments[0] = arguments[0][0];
    return fn.apply(this, arguments);
  };
});
arrayTraps.deleteProperty = function(state, prop) {
  if (false)
    {}
  return arrayTraps.set.call(this, state, prop, void 0);
};
arrayTraps.set = function(state, prop, value) {
  if (false)
    {}
  return objectTraps.set.call(this, state[0], prop, value, state[0]);
};
function peek(draft, prop) {
  const state = draft[DRAFT_STATE];
  const source = state ? latest(state) : draft;
  return source[prop];
}
function readPropFromProto(state, source, prop) {
  const desc = getDescriptorFromProto(source, prop);
  return desc ? `value` in desc ? desc.value : (
    // This is a very special case, if the prop is a getter defined by the
    // prototype, we should invoke it with the draft as context!
    desc.get?.call(state.draft_)
  ) : void 0;
}
function getDescriptorFromProto(source, prop) {
  if (!(prop in source))
    return void 0;
  let proto = getPrototypeOf(source);
  while (proto) {
    const desc = Object.getOwnPropertyDescriptor(proto, prop);
    if (desc)
      return desc;
    proto = getPrototypeOf(proto);
  }
  return void 0;
}
function markChanged(state) {
  if (!state.modified_) {
    state.modified_ = true;
    if (state.parent_) {
      markChanged(state.parent_);
    }
  }
}
function prepareCopy(state) {
  if (!state.copy_) {
    state.copy_ = shallowCopy(
      state.base_,
      state.scope_.immer_.useStrictShallowCopy_
    );
  }
}

// src/core/immerClass.ts
var Immer2 = class {
  constructor(config) {
    this.autoFreeze_ = true;
    this.useStrictShallowCopy_ = false;
    /**
     * The `produce` function takes a value and a "recipe function" (whose
     * return value often depends on the base state). The recipe function is
     * free to mutate its first argument however it wants. All mutations are
     * only ever applied to a __copy__ of the base state.
     *
     * Pass only a function to create a "curried producer" which relieves you
     * from passing the recipe function every time.
     *
     * Only plain objects and arrays are made mutable. All other objects are
     * considered uncopyable.
     *
     * Note: This function is __bound__ to its `Immer` instance.
     *
     * @param {any} base - the initial state
     * @param {Function} recipe - function that receives a proxy of the base state as first argument and which can be freely modified
     * @param {Function} patchListener - optional function that will be called with all the patches produced here
     * @returns {any} a new state, or the initial state if nothing was modified
     */
    this.produce = (base, recipe, patchListener) => {
      if (typeof base === "function" && typeof recipe !== "function") {
        const defaultBase = recipe;
        recipe = base;
        const self = this;
        return function curriedProduce(base2 = defaultBase, ...args) {
          return self.produce(base2, (draft) => recipe.call(this, draft, ...args));
        };
      }
      if (typeof recipe !== "function")
        die(6);
      if (patchListener !== void 0 && typeof patchListener !== "function")
        die(7);
      let result;
      if (isDraftable(base)) {
        const scope = enterScope(this);
        const proxy = createProxy(base, void 0);
        let hasError = true;
        try {
          result = recipe(proxy);
          hasError = false;
        } finally {
          if (hasError)
            revokeScope(scope);
          else
            leaveScope(scope);
        }
        usePatchesInScope(scope, patchListener);
        return processResult(result, scope);
      } else if (!base || typeof base !== "object") {
        result = recipe(base);
        if (result === void 0)
          result = base;
        if (result === NOTHING)
          result = void 0;
        if (this.autoFreeze_)
          freeze(result, true);
        if (patchListener) {
          const p = [];
          const ip = [];
          getPlugin("Patches").generateReplacementPatches_(base, result, p, ip);
          patchListener(p, ip);
        }
        return result;
      } else
        die(1, base);
    };
    this.produceWithPatches = (base, recipe) => {
      if (typeof base === "function") {
        return (state, ...args) => this.produceWithPatches(state, (draft) => base(draft, ...args));
      }
      let patches, inversePatches;
      const result = this.produce(base, recipe, (p, ip) => {
        patches = p;
        inversePatches = ip;
      });
      return [result, patches, inversePatches];
    };
    if (typeof config?.autoFreeze === "boolean")
      this.setAutoFreeze(config.autoFreeze);
    if (typeof config?.useStrictShallowCopy === "boolean")
      this.setUseStrictShallowCopy(config.useStrictShallowCopy);
  }
  createDraft(base) {
    if (!isDraftable(base))
      die(8);
    if (isDraft(base))
      base = current(base);
    const scope = enterScope(this);
    const proxy = createProxy(base, void 0);
    proxy[DRAFT_STATE].isManual_ = true;
    leaveScope(scope);
    return proxy;
  }
  finishDraft(draft, patchListener) {
    const state = draft && draft[DRAFT_STATE];
    if (!state || !state.isManual_)
      die(9);
    const { scope_: scope } = state;
    usePatchesInScope(scope, patchListener);
    return processResult(void 0, scope);
  }
  /**
   * Pass true to automatically freeze all copies created by Immer.
   *
   * By default, auto-freezing is enabled.
   */
  setAutoFreeze(value) {
    this.autoFreeze_ = value;
  }
  /**
   * Pass true to enable strict shallow copy.
   *
   * By default, immer does not copy the object descriptors such as getter, setter and non-enumrable properties.
   */
  setUseStrictShallowCopy(value) {
    this.useStrictShallowCopy_ = value;
  }
  applyPatches(base, patches) {
    let i;
    for (i = patches.length - 1; i >= 0; i--) {
      const patch = patches[i];
      if (patch.path.length === 0 && patch.op === "replace") {
        base = patch.value;
        break;
      }
    }
    if (i > -1) {
      patches = patches.slice(i + 1);
    }
    const applyPatchesImpl = getPlugin("Patches").applyPatches_;
    if (isDraft(base)) {
      return applyPatchesImpl(base, patches);
    }
    return this.produce(
      base,
      (draft) => applyPatchesImpl(draft, patches)
    );
  }
};
function createProxy(value, parent) {
  const draft = isMap(value) ? getPlugin("MapSet").proxyMap_(value, parent) : isSet(value) ? getPlugin("MapSet").proxySet_(value, parent) : createProxyProxy(value, parent);
  const scope = parent ? parent.scope_ : getCurrentScope();
  scope.drafts_.push(draft);
  return draft;
}

// src/core/current.ts
function current(value) {
  if (!isDraft(value))
    die(10, value);
  return currentImpl(value);
}
function currentImpl(value) {
  if (!isDraftable(value) || isFrozen(value))
    return value;
  const state = value[DRAFT_STATE];
  let copy;
  if (state) {
    if (!state.modified_)
      return state.base_;
    state.finalized_ = true;
    copy = shallowCopy(value, state.scope_.immer_.useStrictShallowCopy_);
  } else {
    copy = shallowCopy(value, true);
  }
  each(copy, (key, childValue) => {
    set(copy, key, currentImpl(childValue));
  });
  if (state) {
    state.finalized_ = false;
  }
  return copy;
}

// src/plugins/patches.ts
function enablePatches() {
  const errorOffset = 16;
  if (false) {}
  const REPLACE = "replace";
  const ADD = "add";
  const REMOVE = "remove";
  function generatePatches_(state, basePath, patches, inversePatches) {
    switch (state.type_) {
      case 0 /* Object */:
      case 2 /* Map */:
        return generatePatchesFromAssigned(
          state,
          basePath,
          patches,
          inversePatches
        );
      case 1 /* Array */:
        return generateArrayPatches(state, basePath, patches, inversePatches);
      case 3 /* Set */:
        return generateSetPatches(
          state,
          basePath,
          patches,
          inversePatches
        );
    }
  }
  function generateArrayPatches(state, basePath, patches, inversePatches) {
    let { base_, assigned_ } = state;
    let copy_ = state.copy_;
    if (copy_.length < base_.length) {
      ;
      [base_, copy_] = [copy_, base_];
      [patches, inversePatches] = [inversePatches, patches];
    }
    for (let i = 0; i < base_.length; i++) {
      if (assigned_[i] && copy_[i] !== base_[i]) {
        const path = basePath.concat([i]);
        patches.push({
          op: REPLACE,
          path,
          // Need to maybe clone it, as it can in fact be the original value
          // due to the base/copy inversion at the start of this function
          value: clonePatchValueIfNeeded(copy_[i])
        });
        inversePatches.push({
          op: REPLACE,
          path,
          value: clonePatchValueIfNeeded(base_[i])
        });
      }
    }
    for (let i = base_.length; i < copy_.length; i++) {
      const path = basePath.concat([i]);
      patches.push({
        op: ADD,
        path,
        // Need to maybe clone it, as it can in fact be the original value
        // due to the base/copy inversion at the start of this function
        value: clonePatchValueIfNeeded(copy_[i])
      });
    }
    for (let i = copy_.length - 1; base_.length <= i; --i) {
      const path = basePath.concat([i]);
      inversePatches.push({
        op: REMOVE,
        path
      });
    }
  }
  function generatePatchesFromAssigned(state, basePath, patches, inversePatches) {
    const { base_, copy_ } = state;
    each(state.assigned_, (key, assignedValue) => {
      const origValue = get(base_, key);
      const value = get(copy_, key);
      const op = !assignedValue ? REMOVE : has(base_, key) ? REPLACE : ADD;
      if (origValue === value && op === REPLACE)
        return;
      const path = basePath.concat(key);
      patches.push(op === REMOVE ? { op, path } : { op, path, value });
      inversePatches.push(
        op === ADD ? { op: REMOVE, path } : op === REMOVE ? { op: ADD, path, value: clonePatchValueIfNeeded(origValue) } : { op: REPLACE, path, value: clonePatchValueIfNeeded(origValue) }
      );
    });
  }
  function generateSetPatches(state, basePath, patches, inversePatches) {
    let { base_, copy_ } = state;
    let i = 0;
    base_.forEach((value) => {
      if (!copy_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: REMOVE,
          path,
          value
        });
        inversePatches.unshift({
          op: ADD,
          path,
          value
        });
      }
      i++;
    });
    i = 0;
    copy_.forEach((value) => {
      if (!base_.has(value)) {
        const path = basePath.concat([i]);
        patches.push({
          op: ADD,
          path,
          value
        });
        inversePatches.unshift({
          op: REMOVE,
          path,
          value
        });
      }
      i++;
    });
  }
  function generateReplacementPatches_(baseValue, replacement, patches, inversePatches) {
    patches.push({
      op: REPLACE,
      path: [],
      value: replacement === NOTHING ? void 0 : replacement
    });
    inversePatches.push({
      op: REPLACE,
      path: [],
      value: baseValue
    });
  }
  function applyPatches_(draft, patches) {
    patches.forEach((patch) => {
      const { path, op } = patch;
      let base = draft;
      for (let i = 0; i < path.length - 1; i++) {
        const parentType = getArchtype(base);
        let p = path[i];
        if (typeof p !== "string" && typeof p !== "number") {
          p = "" + p;
        }
        if ((parentType === 0 /* Object */ || parentType === 1 /* Array */) && (p === "__proto__" || p === "constructor"))
          die(errorOffset + 3);
        if (typeof base === "function" && p === "prototype")
          die(errorOffset + 3);
        base = get(base, p);
        if (typeof base !== "object")
          die(errorOffset + 2, path.join("/"));
      }
      const type = getArchtype(base);
      const value = deepClonePatchValue(patch.value);
      const key = path[path.length - 1];
      switch (op) {
        case REPLACE:
          switch (type) {
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              die(errorOffset);
            default:
              return base[key] = value;
          }
        case ADD:
          switch (type) {
            case 1 /* Array */:
              return key === "-" ? base.push(value) : base.splice(key, 0, value);
            case 2 /* Map */:
              return base.set(key, value);
            case 3 /* Set */:
              return base.add(value);
            default:
              return base[key] = value;
          }
        case REMOVE:
          switch (type) {
            case 1 /* Array */:
              return base.splice(key, 1);
            case 2 /* Map */:
              return base.delete(key);
            case 3 /* Set */:
              return base.delete(patch.value);
            default:
              return delete base[key];
          }
        default:
          die(errorOffset + 1, op);
      }
    });
    return draft;
  }
  function deepClonePatchValue(obj) {
    if (!isDraftable(obj))
      return obj;
    if (Array.isArray(obj))
      return obj.map(deepClonePatchValue);
    if (isMap(obj))
      return new Map(
        Array.from(obj.entries()).map(([k, v]) => [k, deepClonePatchValue(v)])
      );
    if (isSet(obj))
      return new Set(Array.from(obj).map(deepClonePatchValue));
    const cloned = Object.create(getPrototypeOf(obj));
    for (const key in obj)
      cloned[key] = deepClonePatchValue(obj[key]);
    if (has(obj, DRAFTABLE))
      cloned[DRAFTABLE] = obj[DRAFTABLE];
    return cloned;
  }
  function clonePatchValueIfNeeded(obj) {
    if (isDraft(obj)) {
      return deepClonePatchValue(obj);
    } else
      return obj;
  }
  loadPlugin("Patches", {
    applyPatches_,
    generatePatches_,
    generateReplacementPatches_
  });
}

// src/plugins/mapset.ts
function enableMapSet() {
  class DraftMap extends Map {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 2 /* Map */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        assigned_: void 0,
        base_: target,
        draft_: this,
        isManual_: false,
        revoked_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(key) {
      return latest(this[DRAFT_STATE]).has(key);
    }
    set(key, value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!latest(state).has(key) || latest(state).get(key) !== value) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_.set(key, true);
        state.copy_.set(key, value);
        state.assigned_.set(key, true);
      }
      return this;
    }
    delete(key) {
      if (!this.has(key)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareMapCopy(state);
      markChanged(state);
      if (state.base_.has(key)) {
        state.assigned_.set(key, false);
      } else {
        state.assigned_.delete(key);
      }
      state.copy_.delete(key);
      return true;
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareMapCopy(state);
        markChanged(state);
        state.assigned_ = /* @__PURE__ */ new Map();
        each(state.base_, (key) => {
          state.assigned_.set(key, false);
        });
        state.copy_.clear();
      }
    }
    forEach(cb, thisArg) {
      const state = this[DRAFT_STATE];
      latest(state).forEach((_value, key, _map) => {
        cb.call(thisArg, this.get(key), key, this);
      });
    }
    get(key) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      const value = latest(state).get(key);
      if (state.finalized_ || !isDraftable(value)) {
        return value;
      }
      if (value !== state.base_.get(key)) {
        return value;
      }
      const draft = createProxy(value, state);
      prepareMapCopy(state);
      state.copy_.set(key, draft);
      return draft;
    }
    keys() {
      return latest(this[DRAFT_STATE]).keys();
    }
    values() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.values(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value
          };
        }
      };
    }
    entries() {
      const iterator = this.keys();
      return {
        [Symbol.iterator]: () => this.entries(),
        next: () => {
          const r = iterator.next();
          if (r.done)
            return r;
          const value = this.get(r.value);
          return {
            done: false,
            value: [r.value, value]
          };
        }
      };
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.entries();
    }
  }
  function proxyMap_(target, parent) {
    return new DraftMap(target, parent);
  }
  function prepareMapCopy(state) {
    if (!state.copy_) {
      state.assigned_ = /* @__PURE__ */ new Map();
      state.copy_ = new Map(state.base_);
    }
  }
  class DraftSet extends Set {
    constructor(target, parent) {
      super();
      this[DRAFT_STATE] = {
        type_: 3 /* Set */,
        parent_: parent,
        scope_: parent ? parent.scope_ : getCurrentScope(),
        modified_: false,
        finalized_: false,
        copy_: void 0,
        base_: target,
        draft_: this,
        drafts_: /* @__PURE__ */ new Map(),
        revoked_: false,
        isManual_: false
      };
    }
    get size() {
      return latest(this[DRAFT_STATE]).size;
    }
    has(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!state.copy_) {
        return state.base_.has(value);
      }
      if (state.copy_.has(value))
        return true;
      if (state.drafts_.has(value) && state.copy_.has(state.drafts_.get(value)))
        return true;
      return false;
    }
    add(value) {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (!this.has(value)) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.add(value);
      }
      return this;
    }
    delete(value) {
      if (!this.has(value)) {
        return false;
      }
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      markChanged(state);
      return state.copy_.delete(value) || (state.drafts_.has(value) ? state.copy_.delete(state.drafts_.get(value)) : (
        /* istanbul ignore next */
        false
      ));
    }
    clear() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      if (latest(state).size) {
        prepareSetCopy(state);
        markChanged(state);
        state.copy_.clear();
      }
    }
    values() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.values();
    }
    entries() {
      const state = this[DRAFT_STATE];
      assertUnrevoked(state);
      prepareSetCopy(state);
      return state.copy_.entries();
    }
    keys() {
      return this.values();
    }
    [(DRAFT_STATE, Symbol.iterator)]() {
      return this.values();
    }
    forEach(cb, thisArg) {
      const iterator = this.values();
      let result = iterator.next();
      while (!result.done) {
        cb.call(thisArg, result.value, result.value, this);
        result = iterator.next();
      }
    }
  }
  function proxySet_(target, parent) {
    return new DraftSet(target, parent);
  }
  function prepareSetCopy(state) {
    if (!state.copy_) {
      state.copy_ = /* @__PURE__ */ new Set();
      state.base_.forEach((value) => {
        if (isDraftable(value)) {
          const draft = createProxy(value, state);
          state.drafts_.set(value, draft);
          state.copy_.add(draft);
        } else {
          state.copy_.add(value);
        }
      });
    }
  }
  function assertUnrevoked(state) {
    if (state.revoked_)
      die(3, JSON.stringify(latest(state)));
  }
  loadPlugin("MapSet", { proxyMap_, proxySet_ });
}

// src/immer.ts
var immer = new Immer2();
var produce = immer.produce;
var produceWithPatches = immer.produceWithPatches.bind(
  immer
);
var setAutoFreeze = immer.setAutoFreeze.bind(immer);
var setUseStrictShallowCopy = immer.setUseStrictShallowCopy.bind(immer);
var applyPatches = immer.applyPatches.bind(immer);
var createDraft = immer.createDraft.bind(immer);
var finishDraft = immer.finishDraft.bind(immer);
function castDraft(value) {
  return value;
}
function castImmutable(value) {
  return value;
}

//# sourceMappingURL=immer.mjs.map
;// ./node_modules/use-immer/dist/use-immer.module.mjs
function i(f){var u=(0,react.useState)(function(){return freeze("function"==typeof f?f():f,!0)}),i=u[1];return[u[0],(0,react.useCallback)(function(t){i("function"==typeof t?produce(t):freeze(t))},[])]}function e(n,t,o){var i=f(function(){return r(n)},[n]);return u(i,t,o)}
//# sourceMappingURL=use-immer.module.mjs.map

// EXTERNAL MODULE: ./node_modules/react-i18next/dist/es/index.js + 15 modules
var es = __webpack_require__(2389);
// EXTERNAL MODULE: ./Code/Common/Theme/Theme.js
var Theme = __webpack_require__(7589);
;// ./node_modules/clsx/dist/clsx.mjs
function clsx_r(e){var t,f,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e)){var o=e.length;for(t=0;t<o;t++)e[t]&&(f=clsx_r(e[t]))&&(n&&(n+=" "),n+=f)}else for(f in e)e[f]&&(n&&(n+=" "),n+=f);return n}function clsx(){for(var e,t,f=0,n="",o=arguments.length;f<o;f++)(e=arguments[f])&&(t=clsx_r(e))&&(n&&(n+=" "),n+=t);return n}/* harmony default export */ var dist_clsx = (clsx);
// EXTERNAL MODULE: ./Code/Common/Config/Config.js
var Config = __webpack_require__(519);
;// ./Code/Component/_BoxPage/_BoxPageAction.js





// function Action(moduleParam, passParam, data, state, setState, element, event, parentContext){
//     //STEP::Get setting
//     const _key = Tools.ParamRead("_key", "", moduleParam, passParam);
//     console.debug(Logger.Header(), "Component-_BoxPage Action, _key",_key);
// }

//Default setting for "data"
const _BoxPageActionDefault = Tools/* Merge */.HU(Config/* default */.A.componentAction._BoxPage, {
  "_id": "",
  "_data": null,
  "innerLoad": {
    "id": "",
    "_src": "",
    "_srcError": "",
    "_isBaseUrl": "",
    "_excludeFile": [],
    "load": "",
    "abortController": null,
    "documentShadow": null,
    "windowShadow": null,
    "windowSet": []
  }
});

//TIPS::Action processing entrance
function _BoxPageAction(param, handler) {
  let event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    let moduleParam = "moduleParam" in param ? param["moduleParam"] : param;
    let passParam = "passParam" in param ? param["passParam"] : null;
    passParam = passParam === null && event !== null ? {
      event: event
    } : passParam;
    console.debug(Logger/* default */.A.Header(), "Component-_BoxPage start moduleParam:", moduleParam, "passParam:", passParam, "handler:", handler, "event:", event);
    const data = handler["data"];
    const state = handler["state"];
    const setState = handler["setState"];
    const element = handler["element"].current;
    const parentContext = handler["parentContext"];
    const templateMark = handler["templateMark"];
    const _action = Tools/* ParamRead */.A2("_action", "", moduleParam, passParam);
    switch (_action) {
      case "event":
        Tools/* CompActEvent */._R(moduleParam, passParam, data, state, setState, element, event, parentContext, "_BoxPage");
        break;
      case "get":
        Tools/* CompActGet */.Yw(moduleParam, passParam, data, state, setState, element, event, parentContext, "_BoxPage");
        break;
      case "set":
      default:
        Tools/* CompActSet */.IC(moduleParam, passParam, data, state, setState, element, event, parentContext, "_BoxPage", _BoxPageActionDefault, _BoxPageUIDefault, templateMark);
    }
    console.debug(Logger/* default */.A.Header(), "Component-_BoxPage end");
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Component-_BoxPage exception", e);
    return false;
  }
  return true;
}
// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/defineProperty.js + 3 modules
var defineProperty = __webpack_require__(4705);
;// ./Code/Component/_BoxPage/__SandBox.js

function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }


function SandboxClean(element, innerLoad) {
  //STEP::Check whether page has been loaded
  if (innerLoad.windowShadow === null || !innerLoad.windowShadow.hasOwnProperty("TrickAPPRoot")) return;

  //STEP::Clean React UI
  innerLoad.windowShadow["TrickAPPRoot"].unmount();

  //STEP::Abort event listener
  innerLoad.abortcontroller.abort();
  innerLoad.abortcontroller = new AbortController();

  //STEP::Clean shadowRoot
  if (element.current) element.current.shadowRoot.innerHTML = "";

  //STEP::Delete mark
  const topWindow = parent ? parent : window;
  if (topWindow.hasOwnProperty("Trick-Comp-_BoxPage") && topWindow["Trick-Comp-_BoxPage"].hasOwnProperty(innerLoad.id)) {
    delete topWindow["Trick-Comp-_BoxPage"][innerLoad.id];
  }
}
function SandboxLoad_JumpListen(event) {
  //STEP::Check whether it clicked by <a>
  const target = event.target.closest('a');
  if (!target) return;

  //STEP::Get <a> attribute
  const href = target.getAttribute('href');
  const targetAttr = target.getAttribute('target');
  if (!href || href === "") return;

  //WHEN::Open new window
  if (href.startsWith("http") || targetAttr === "_blank") return;

  //WHEN::Jump page
  if (target.href !== window.location.href) window.history.pushState({}, '', href);
  window.dispatchEvent(new Event('trick-pushState')); //Need to use _OperRoute(Module) 'action::listen' to listen history change
  event.preventDefault();
}
function SandboxLoad(element, src, isCatchHref, isChangeTitle, excludeFile, innerLoad) {
  if (src === "" || !element.current) return;
  try {
    fetch(src).then(response => {
      if (!response.ok) {
        throw new Error(`status code: ${response.status}`);
      }
      return response.text();
    }).then(htmlContent => {
      //STEP::Check shadowRoot
      if (!element.current || !element.current.shadowRoot) return;

      //STEP::Check load
      if (src === innerLoad.load) return;else innerLoad.load = src;
      console.debug(Logger/* default */.A.Header(), "Component-_BoxPage SandboxLoad src", src);

      //STEP::Clean last page
      SandboxClean(element, innerLoad);

      //STEP::Convert text to dom tree
      const parser = new DOMParser();
      const page = parser.parseFromString(htmlContent, 'text/html');

      //STEP::Insert css link to shadow dom
      const cssLinks = page.head.querySelectorAll('link[rel="stylesheet"]');
      cssLinks.forEach(link => {
        let isInclude = true;
        if (link.href) for (const key in excludeFile) if (link.href.includes(excludeFile[key])) {
          isInclude = false;
          break;
        }
        if (isInclude) element.current.shadowRoot.appendChild(link);
      });

      //STEP::Insert body to shadow dom
      if (isCatchHref) {
        const {
          signal
        } = innerLoad.abortcontroller;
        let option = {
          signal
        };
        element.current.shadowRoot.addEventListener('click', SandboxLoad_JumpListen, option);
      }

      //STEP::Insert body to shadow dom
      element.current.shadowRoot.appendChild(page.body.children[0]);

      //STEP::Generate id
      const topWindow = parent ? parent : window;
      if (!topWindow.hasOwnProperty("Trick-Comp-_BoxPage")) topWindow["Trick-Comp-_BoxPage"] = {};
      let id = Tools/* StrRandom */.dJ();
      while (topWindow["Trick-Comp-_BoxPage"].hasOwnProperty(id)) {
        id = Tools/* StrRandom */.dJ();
      }
      topWindow["Trick-Comp-_BoxPage"][id] = {};
      innerLoad.id = id;

      //STEP::Insert Js to iframe sandbox
      const scripts = page.querySelectorAll('script');
      const iframe = element.current.querySelector('iframe');
      let scriptsContent = '<head>';
      scriptsContent += `<script>var trickAPP = parent["Trick-Comp-_BoxPage"]["${innerLoad.id}"];</script>`;
      scripts.forEach(script => {
        scriptsContent += script.outerHTML;
      });
      scriptsContent += '<head><body></body>';
      if ('srcdoc' in iframe) iframe.srcdoc = scriptsContent;else {
        const sandbox = iframe.contentDocument || iframe.contentWindow.document;
        sandbox.open();
        sandbox.write(scriptsContent);
        sandbox.close();
      }
      const windowShadow = iframe.contentWindow;
      innerLoad.windowShadow = windowShadow;
      const documentShadow = element.current.shadowRoot;
      innerLoad.documentShadow = documentShadow;
      innerLoad.windowSet = [];

      //STEP-IN::Create windowProxy
      const windowProxy = new Proxy(window, {
        get(origin, key, receiver) {
          //WHEN::Listener, add single(abort) to all listener
          if (key === "addEventListener") return function () {
            for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
              args[_key] = arguments[_key];
            }
            if (args[0] === "beforeunload") return Reflect.apply(windowShadow[key], windowShadow, args);
            const {
              signal
            } = innerLoad.abortcontroller;
            let option = {
              signal
            };
            if (args.length > 2 && typeof args[2] !== 'object') option = _objectSpread(_objectSpread({}, args[2]), option);else if (args.length > 2) option["useCapture"] = args[2];
            args[2] = option;
            return Reflect.apply(window[key], window, args);
          };
          if (key === "removeEventListener" || key === "dispatchEvent") return function () {
            for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
              args[_key2] = arguments[_key2];
            }
            return Reflect.apply(window[key], window, args);
          };
          //WHEN::Use sandbox window
          if (key === "PubSub" || innerLoad.windowSet.includes(key) || !origin.hasOwnProperty(key)) {
            if (typeof windowShadow[key] === 'function') return function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }
              return Reflect.apply(windowShadow[key], windowShadow, args);
            };
            return windowShadow[key];
          }
          //WHEN::Use host window
          if (typeof origin[key] === 'function') return function () {
            for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
              args[_key4] = arguments[_key4];
            }
            return Reflect.apply(origin[key], origin, args);
          };
          return origin[key];
        },
        set: function (origin, key, value) {
          if (key === "onscroll" || key === "onresize") {
            const {
              signal
            } = innerLoad.abortcontroller;
            let option = {
              signal
            };
            window.addEventListener(key.substring("on".length), value, option);
            return true;
          }
          innerLoad.windowSet.push(key);
          windowShadow[key] = value;
          return true;
        }
      });

      //STEP-IN::Create documentProxy
      const documentProxy = new Proxy(document, {
        get(origin, key, receiver) {
          //WHEN::Listener, add single(abort) to all listener
          if (key === "addEventListener") return function () {
            const {
              signal
            } = innerLoad.abortcontroller;
            let option = {
              signal
            };
            for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
              args[_key5] = arguments[_key5];
            }
            if (args.length > 2 && typeof args[2] !== 'object') option = _objectSpread(_objectSpread({}, args[2]), option);else if (args.length > 2) option["useCapture"] = args[2];
            args[2] = option;
            return Reflect.apply(document[key], document, args);
          };
          if (key === "removeEventListener" || key === "dispatchEvent") return function () {
            for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
              args[_key6] = arguments[_key6];
            }
            return Reflect.apply(document[key], document, args);
          };
          //WHEN::Limit to use shadow dom
          if ((key.startsWith("get") || key.startsWith("create") || key.startsWith("query")) && typeof documentShadow[key] === 'function') {
            return function () {
              for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
                args[_key7] = arguments[_key7];
              }
              return Reflect.apply(documentShadow[key], documentShadow, args);
            };
          }
          if (key === "body" || key === "head" || key === "all") return documentShadow;
          if (key === "defaultView") return windowProxy;
          //WHEN::Use host document
          if (typeof origin[key] === 'function') {
            return function () {
              for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
                args[_key8] = arguments[_key8];
              }
              return Reflect.apply(origin[key], origin, args);
            };
          }
          return origin[key];
        },
        set: function (origin, key, value) {
          documentShadow[key] = value;
          return true;
        }
      });

      //STEP::Mark down handler
      topWindow["Trick-Comp-_BoxPage"][innerLoad.id] = {
        "documentProxy": documentProxy,
        "windowProxy": windowProxy,
        "rootProxy": windowProxy,
        "HTMLDocument": HTMLDocument,
        "HTMLElement": HTMLElement,
        "HTMLCollection": HTMLCollection,
        "Document": Document,
        "Node": Node,
        "Element": Element,
        "NodeList": NodeList
      };

      //STEP::Set title
      if (isChangeTitle) document.title = page.title;
    }).catch(error => {
      console.debug(Logger/* default */.A.Header(), "Component-_BoxPage SandboxLoad load fail", src, error);
      SandboxLoad_Error(innerLoad, element);
    });
  } catch (error) {
    console.debug(Logger/* default */.A.Header(), "Component-_BoxPage SandboxLoad load exception", src, error);
    SandboxLoad_Error(innerLoad, element);
  }
}
function SandboxLoad_Error(innerLoad, element) {
  SandboxLoad(element, innerLoad._srcError, innerLoad._isCatchHref, innerLoad._isChangeTitle, innerLoad._excludeFile, innerLoad);
}
function SandboxDestroy(element, data) {
  SandboxClean(element, data.current.innerLoad);
}
function SandboxCreate(element, data) {
  if (!element.current) return;
  if (!element.current.shadowRoot) element.current.attachShadow({
    mode: 'open'
  });
  const innerLoad = data.current.innerLoad;
  innerLoad.abortcontroller = new AbortController();
  SandboxLoad(element, innerLoad._src, innerLoad._isCatchHref, innerLoad._isChangeTitle, innerLoad._excludeFile, innerLoad);
}
function SandboxUpdate(element, src, srcError, isCatchHref, isChangeTitle, excludeFile, handler) {
  const innerLoad = handler["data"].current.innerLoad;
  innerLoad._isCatchHref = isCatchHref;
  innerLoad._excludeFile = excludeFile;
  innerLoad._isChangeTitle = isChangeTitle;
  innerLoad._srcError = srcError;
  if (innerLoad._src !== src) {
    SandboxDestroy(element, handler["data"]);
    innerLoad._src = src;
    SandboxLoad(element, src, isCatchHref, isChangeTitle, excludeFile, innerLoad);
  }
}
;// ./Code/Component/_BoxPage/_BoxPageUI.js











//TIPS::Default setting for "state"
const _BoxPageUIDefault = Tools/* Merge */.HU(Config/* default */.A.componentUI._BoxPage, {
  "_src": "",
  "_srcError": "",
  "_isCatchHref": true,
  "_isChangeTitle": false,
  "_excludeFile": ["/config/theme.css"],
  "_class": ""
});

//TIPS::JSX UI render
function _BoxPageUI(state, children, element, handler, theme, langDir) {
  //TIPS::Call real action function
  function Call() {
    let param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let isCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Tools/* CompActCall */.M8(_BoxPageAction, handler, param, isCall);
  }

  //STEP::Load target url
  SandboxUpdate(element, state._src, state._srcError, state._isCatchHref, state._isChangeTitle, state._excludeFile, handler);
  return /*#__PURE__*/react.createElement("div", {
    ref: element,
    className: dist_clsx("_BoxPage-Body", state._class),
    "trick-theme": theme,
    dir: langDir
  }, /*#__PURE__*/react.createElement("iframe", {
    src: "about:blank",
    className: "hidden",
    allow: "camera; microphone; fullscreen; clipboard-write; clipboard-read; geolocation; *"
  }));
}
// EXTERNAL MODULE: ./Code/Common/Lang/Lang.js
var Lang = __webpack_require__(7803);
;// ./Code/Component/_BoxPage/_BoxPage.js










function _BoxPage(_ref) {
  let {
    config,
    children
  } = _ref;
  //STEP::Make react hook
  const stateConfig = (0,react.useMemo)(() => Tools/* MergeDefault */.di(config, _BoxPageUIDefault), [config]);
  const dataConfig = (0,react.useMemo)(() => Tools/* MergeDefault */.di(config, _BoxPageActionDefault), [config]);
  const [state, setState] = i(stateConfig);
  const data = (0,react.useRef)(dataConfig);
  const element = (0,react.useRef)(null);
  const parentContext = (0,react.useContext)(Tools/* CompContext */.zP);
  const templateMark = (0,react.useRef)({});
  const handler = {
    "data": data,
    "state": state,
    "setState": setState,
    "element": element,
    "parentContext": parentContext,
    "templateMark": templateMark
  };
  console.debug(Logger/* default */.A.Header(), "Component-_BoxPage refresh, handler", handler);

  //WHEN::Config change(not init), update state and data
  const isFirstRender = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.debug(Logger/* default */.A.Header(), "Component-_BoxPage config change, stateConfig:", stateConfig, "dataConfig", dataConfig);
    Tools/* CompConfigSet */._q(stateConfig, setState, dataConfig, data);
  }, [config]);

  //WHEN::Created and destroy component
  const channelToken = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    //STEP::Subscribe
    const _id = Tools/* ParamRead */.A2("_id", "", config);
    console.debug(Logger/* default */.A.Header(), "Component-_BoxPage created, subscribe:", _id);
    channelToken.current = Tools/* PubSubListen */.XB(_id, _BoxPageAction, handler);

    //STEP::Create sandbox
    SandboxCreate(element, data);
    return () => {
      //STEP::Unsubscribe
      console.debug(Logger/* default */.A.Header(), "Component-_BoxPage destroy");
      channelToken.current = Tools/* PubSubCancel */.w1(channelToken.current);

      //STEP::Destroy sandbox
      SandboxDestroy(element, data);
    };
  }, []);

  //STEP::Auto change template, translate text/img
  const {
    t
  } = (0,es/* useTranslation */.Bd)();
  const theme = (0,Theme/* useTheme */.D)();
  const langDir = (0,Lang/* useLangDir */.rs)();
  const newState = Tools/* CompTemplGet */.eA(state, templateMark.current, children, t);
  console.debug(Logger/* default */.A.Header(), "Component-_BoxPage auto change template, state", newState, "theme", theme, "langDir", langDir);

  //STEP::UI render
  return _BoxPageUI(newState, children, element, handler, theme, langDir);
}
;// ./Code/Component/_CompTop/_CompTopAction.js





// function Action(moduleParam, passParam, data, state, setState, element, event, parentContext){
//     //STEP::Get setting
//     const _key = Tools.ParamRead("_key", "", moduleParam, passParam);
//     console.debug(Logger.Header(), "Component-_CompTop Action, _key",_key);
// }

//Default setting for "data"
const _CompTopActionDefault = Tools/* Merge */.HU(Config/* default */.A.componentAction._CompTop, {
  "_id": "",
  "_data": null
});

//TIPS::Action processing entrance
function _CompTopAction(param, handler) {
  let event = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
  try {
    let moduleParam = "moduleParam" in param ? param["moduleParam"] : param;
    let passParam = "passParam" in param ? param["passParam"] : null;
    passParam = passParam === null && event !== null ? {
      event: event
    } : passParam;
    console.debug(Logger/* default */.A.Header(), "Component-_CompTop start moduleParam:", moduleParam, "passParam:", passParam, "handler:", handler, "event:", event);
    const data = handler["data"];
    const state = handler["state"];
    const setState = handler["setState"];
    const element = handler["element"].current;
    const parentContext = handler["parentContext"];
    const templateMark = handler["templateMark"];
    const _action = Tools/* ParamRead */.A2("_action", "", moduleParam, passParam);
    switch (_action) {
      case "event":
        Tools/* CompActEvent */._R(moduleParam, passParam, data, state, setState, element, event, parentContext, "_CompTop");
        break;
      case "get":
        Tools/* CompActGet */.Yw(moduleParam, passParam, data, state, setState, element, event, parentContext, "_CompTop");
        break;
      case "set":
      default:
        Tools/* CompActSet */.IC(moduleParam, passParam, data, state, setState, element, event, parentContext, "_CompTop", _CompTopActionDefault, _CompTopUIDefault, templateMark);
    }
    console.debug(Logger/* default */.A.Header(), "Component-_CompTop end");
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Component-_CompTop exception", e);
    return false;
  }
  return true;
}
;// ./node_modules/@heroicons/react/20/solid/esm/ChevronUpIcon.js

function ChevronUpIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/react.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    viewBox: "0 0 20 20",
    fill: "currentColor",
    "aria-hidden": "true",
    "data-slot": "icon",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/react.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/react.createElement("path", {
    fillRule: "evenodd",
    d: "M9.47 6.47a.75.75 0 0 1 1.06 0l4.25 4.25a.75.75 0 1 1-1.06 1.06L10 8.06l-3.72 3.72a.75.75 0 0 1-1.06-1.06l4.25-4.25Z",
    clipRule: "evenodd"
  }));
}
const ForwardRef = /*#__PURE__*/ react.forwardRef(ChevronUpIcon);
/* harmony default export */ var esm_ChevronUpIcon = (ForwardRef);
;// ./Code/Component/_CompTop/_CompTopUI.js

function _CompTopUI_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _CompTopUI_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? _CompTopUI_ownKeys(Object(t), !0).forEach(function (r) { (0,defineProperty/* default */.A)(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : _CompTopUI_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }











//TIPS::Default setting for "state"
const _CompTopUIDefault = Tools/* Merge */.HU(Config/* default */.A.componentUI._CompTop, {
  "_class": "",
  "_templ": null,
  "_query": ""
});

//TIPS::JSX UI render
function _CompTopUI(state, children, element, handler, isVisible) {
  //TIPS::Call real action function
  function Call() {
    let param = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    let isCall = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
    return Tools/* CompActCall */.M8(_CompTopAction, handler, param, isCall);
  }
  function Top() {
    let target = state._query === "" ? element.current.parentElement : document.querySelector(state._query);
    target = state._query === "window" ? document.documentElement : target;
    target.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  return /*#__PURE__*/react.createElement("div", {
    ref: element,
    className: dist_clsx("_CompTop-Body", state._class),
    onClick: Top,
    style: _CompTopUI_objectSpread({}, isVisible ? {} : {
      opacity: 0
    })
  }, state._templ === undefined ? /*#__PURE__*/react.createElement(esm_ChevronUpIcon, null) : state._templ);
}
;// ./Code/Component/_CompTop/_CompTop.js








function _CompTop(_ref) {
  let {
    config,
    children
  } = _ref;
  //STEP::Make react hook
  const stateConfig = (0,react.useMemo)(() => Tools/* MergeDefault */.di(config, _CompTopUIDefault), [config]);
  const dataConfig = (0,react.useMemo)(() => Tools/* MergeDefault */.di(config, _CompTopActionDefault), [config]);
  const [state, setState] = i(stateConfig);
  const data = (0,react.useRef)(dataConfig);
  const element = (0,react.useRef)(null);
  const parentContext = (0,react.useContext)(Tools/* CompContext */.zP);
  const templateMark = (0,react.useRef)({});
  const [isVisible, setIsVisible] = i(false);
  const handler = {
    "data": data,
    "state": state,
    "setState": setState,
    "element": element,
    "parentContext": parentContext,
    "templateMark": templateMark
  };
  console.debug(Logger/* default */.A.Header(), "Component-_CompTop refresh, handler", handler);

  //WHEN::Config change(not init), update state and data
  const isFirstRender = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    console.debug(Logger/* default */.A.Header(), "Component-_CompTop config change, stateConfig:", stateConfig, "dataConfig", dataConfig);
    Tools/* CompConfigSet */._q(stateConfig, setState, dataConfig, data);
  }, [config]);

  //WHEN::Created and destroy component
  const channelToken = (0,react.useRef)(null);
  (0,react.useEffect)(() => {
    //STEP::Subscribe
    const _id = Tools/* ParamRead */.A2("_id", "", config);
    console.debug(Logger/* default */.A.Header(), "Component-_CompTop created, subscribe:", _id);
    channelToken.current = Tools/* PubSubListen */.XB(_id, _CompTopAction, handler);

    //STEP::Listen scroll
    let target = state._query === "" ? element.current.parentElement : document.querySelector(state._query);
    target = state._query === "window" ? window : target;
    const judgeTarget = state._query === "window" ? document.documentElement : target;
    const handleScroll = () => {
      const isAtTop = judgeTarget.scrollTop === 0;
      const isAtBottom = judgeTarget.scrollHeight - judgeTarget.scrollTop === judgeTarget.clientHeight;
      setIsVisible(draft => {
        return !(isAtTop || isAtBottom);
      });
    };
    target.addEventListener('scroll', handleScroll);
    return () => {
      //STEP::Unsubscribe
      console.debug(Logger/* default */.A.Header(), "Component-_CompTop destroy");
      channelToken.current = Tools/* PubSubCancel */.w1(channelToken.current);

      //STEP::Remove listener
      target.removeEventListener('scroll', handleScroll);
    };
  }, []);

  //STEP::Auto change template, translate text/img
  const {
    t
  } = (0,es/* useTranslation */.Bd)();
  const theme = (0,Theme/* useTheme */.D)();
  const newState = Tools/* CompTemplGet */.eA(state, templateMark.current, children, t);
  console.debug(Logger/* default */.A.Header(), "Component-_CompTop auto change template, state", newState, "theme", theme);

  //STEP::UI render
  return _CompTopUI(newState, children, element, handler, isVisible);
}
;// ./Code/Component/Component.js
//此文件由Christmas>>MergeCode>>LinkModule生成，请不要手动修改
//This file is generated by Christmas>>MergeCode>>LinkModule. Please do not modify it manually


;// ./Code/Page/index/indexUI.js
//此文件由Christmas根据xxxUI.json生成，请不要手动修改
//This file is generated by Christmas according to xxxUI.json. Please do not modify it manually










//STEP::Init lang and theme
Lang/* default */.Ay.Init("index");
Theme/* Theme */.S.Init();

//TIPS::Layout Start
const Start = function () {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(Body, {
    config: {},
    className: ""
  }), /*#__PURE__*/react.createElement(Top, {
    config: {},
    className: "backToTop"
  }));
};
Tools/* TemplAdd */.Af("Start", Start);

//TIPS::Layout Body
const Body = function () {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(_BoxPage, {
    config: {
      "_id": "comp##_BoxPage<<Body",
      "_src": "",
      "_srcError": "/test/home.html",
      "_class": "Page-Main"
    },
    className: ""
  }));
};
Tools/* TemplAdd */.Af("Body", Body);

//TIPS::Layout Top
const Top = function () {
  return /*#__PURE__*/react.createElement(react.Fragment, null, /*#__PURE__*/react.createElement(_CompTop, {
    config: {
      "_query": "window",
      "_class": "Page-Top"
    },
    className: ""
  }));
};
Tools/* TemplAdd */.Af("Top", Top);
Tools/* TemplMark */.Sy({});

//STEP::Render dom
window.TrickAPPRoot = client.createRoot(document.getElementById("id_body"));
window.TrickAPPRoot.render(/*#__PURE__*/react.createElement(react.StrictMode, null, /*#__PURE__*/react.createElement(react.Suspense, {
  fallback: ""
}, /*#__PURE__*/react.createElement(Start, null))));

/***/ }),

/***/ 961:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


function checkDCE() {
  /* global __REACT_DEVTOOLS_GLOBAL_HOOK__ */
  if (
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined' ||
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== 'function'
  ) {
    return;
  }
  if (false) {}
  try {
    // Verify that the code above has been dead code eliminated (DCE'd).
    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
  } catch (err) {
    // DevTools shouldn't crash React, no matter what.
    // We should still report in case we break this code.
    console.error(err);
  }
}

if (true) {
  // DCE check should happen before ReactDOM bundle executes so that
  // DevTools can report bad minification during injection.
  checkDCE();
  module.exports = __webpack_require__(2551);
} else {}


/***/ }),

/***/ 1121:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

/* harmony default export */ __webpack_exports__.A = (toSource);


/***/ }),

/***/ 1200:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_isBuffer; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(1917);
;// ./node_modules/lodash-es/stubFalse.js
/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

/* harmony default export */ var lodash_es_stubFalse = (stubFalse);

;// ./node_modules/lodash-es/isBuffer.js



/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? _root/* default */.A.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || lodash_es_stubFalse;

/* harmony default export */ var lodash_es_isBuffer = (isBuffer);


/***/ }),

/***/ 1347:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ esm; }
});

;// ./node_modules/i18next-http-backend/esm/utils.js
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
var arr = [];
var each = arr.forEach;
var slice = arr.slice;
function defaults(obj) {
  each.call(slice.call(arguments, 1), function (source) {
    if (source) {
      for (var prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}
function hasXMLHttpRequest() {
  return typeof XMLHttpRequest === 'function' || (typeof XMLHttpRequest === "undefined" ? "undefined" : _typeof(XMLHttpRequest)) === 'object';
}
function isPromise(maybePromise) {
  return !!maybePromise && typeof maybePromise.then === 'function';
}
function makePromise(maybePromise) {
  if (isPromise(maybePromise)) {
    return maybePromise;
  }
  return Promise.resolve(maybePromise);
}
// EXTERNAL MODULE: ./node_modules/i18next-http-backend/esm/getFetch.cjs
var getFetch = __webpack_require__(5178);
var getFetch_namespaceObject = /*#__PURE__*/__webpack_require__.t(getFetch, 2);
;// ./node_modules/i18next-http-backend/esm/request.js
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == request_typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != request_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != request_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function request_typeof(o) { "@babel/helpers - typeof"; return request_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, request_typeof(o); }


var fetchApi = typeof fetch === 'function' ? fetch : undefined;
if (typeof global !== 'undefined' && global.fetch) {
  fetchApi = global.fetch;
} else if (typeof window !== 'undefined' && window.fetch) {
  fetchApi = window.fetch;
}
var XmlHttpRequestApi;
if (hasXMLHttpRequest()) {
  if (typeof global !== 'undefined' && global.XMLHttpRequest) {
    XmlHttpRequestApi = global.XMLHttpRequest;
  } else if (typeof window !== 'undefined' && window.XMLHttpRequest) {
    XmlHttpRequestApi = window.XMLHttpRequest;
  }
}
var ActiveXObjectApi;
if (typeof ActiveXObject === 'function') {
  if (typeof global !== 'undefined' && global.ActiveXObject) {
    ActiveXObjectApi = global.ActiveXObject;
  } else if (typeof window !== 'undefined' && window.ActiveXObject) {
    ActiveXObjectApi = window.ActiveXObject;
  }
}
if (!fetchApi && getFetch_namespaceObject && !XmlHttpRequestApi && !ActiveXObjectApi) fetchApi = getFetch || getFetch_namespaceObject;
if (typeof fetchApi !== 'function') fetchApi = undefined;
var addQueryString = function addQueryString(url, params) {
  if (params && request_typeof(params) === 'object') {
    var queryString = '';
    for (var paramName in params) {
      queryString += '&' + encodeURIComponent(paramName) + '=' + encodeURIComponent(params[paramName]);
    }
    if (!queryString) return url;
    url = url + (url.indexOf('?') !== -1 ? '&' : '?') + queryString.slice(1);
  }
  return url;
};
var fetchIt = function fetchIt(url, fetchOptions, callback, altFetch) {
  var resolver = function resolver(response) {
    if (!response.ok) return callback(response.statusText || 'Error', {
      status: response.status
    });
    response.text().then(function (data) {
      callback(null, {
        status: response.status,
        data: data
      });
    }).catch(callback);
  };
  if (altFetch) {
    var altResponse = altFetch(url, fetchOptions);
    if (altResponse instanceof Promise) {
      altResponse.then(resolver).catch(callback);
      return;
    }
  }
  if (typeof fetch === 'function') {
    fetch(url, fetchOptions).then(resolver).catch(callback);
  } else {
    fetchApi(url, fetchOptions).then(resolver).catch(callback);
  }
};
var omitFetchOptions = false;
var requestWithFetch = function requestWithFetch(options, url, payload, callback) {
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  var headers = _objectSpread({}, typeof options.customHeaders === 'function' ? options.customHeaders() : options.customHeaders);
  if (typeof window === 'undefined' && typeof global !== 'undefined' && typeof global.process !== 'undefined' && global.process.versions && global.process.versions.node) {
    headers['User-Agent'] = "i18next-http-backend (node/".concat(global.process.version, "; ").concat(global.process.platform, " ").concat(global.process.arch, ")");
  }
  if (payload) headers['Content-Type'] = 'application/json';
  var reqOptions = typeof options.requestOptions === 'function' ? options.requestOptions(payload) : options.requestOptions;
  var fetchOptions = _objectSpread({
    method: payload ? 'POST' : 'GET',
    body: payload ? options.stringify(payload) : undefined,
    headers: headers
  }, omitFetchOptions ? {} : reqOptions);
  var altFetch = typeof options.alternateFetch === 'function' && options.alternateFetch.length >= 1 ? options.alternateFetch : undefined;
  try {
    fetchIt(url, fetchOptions, callback, altFetch);
  } catch (e) {
    if (!reqOptions || Object.keys(reqOptions).length === 0 || !e.message || e.message.indexOf('not implemented') < 0) {
      return callback(e);
    }
    try {
      Object.keys(reqOptions).forEach(function (opt) {
        delete fetchOptions[opt];
      });
      fetchIt(url, fetchOptions, callback, altFetch);
      omitFetchOptions = true;
    } catch (err) {
      callback(err);
    }
  }
};
var requestWithXmlHttpRequest = function requestWithXmlHttpRequest(options, url, payload, callback) {
  if (payload && request_typeof(payload) === 'object') {
    payload = addQueryString('', payload).slice(1);
  }
  if (options.queryStringParams) {
    url = addQueryString(url, options.queryStringParams);
  }
  try {
    var x;
    if (XmlHttpRequestApi) {
      x = new XmlHttpRequestApi();
    } else {
      x = new ActiveXObjectApi('MSXML2.XMLHTTP.3.0');
    }
    x.open(payload ? 'POST' : 'GET', url, 1);
    if (!options.crossDomain) {
      x.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
    }
    x.withCredentials = !!options.withCredentials;
    if (payload) {
      x.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    }
    if (x.overrideMimeType) {
      x.overrideMimeType('application/json');
    }
    var h = options.customHeaders;
    h = typeof h === 'function' ? h() : h;
    if (h) {
      for (var i in h) {
        x.setRequestHeader(i, h[i]);
      }
    }
    x.onreadystatechange = function () {
      x.readyState > 3 && callback(x.status >= 400 ? x.statusText : null, {
        status: x.status,
        data: x.responseText
      });
    };
    x.send(payload);
  } catch (e) {
    console && console.log(e);
  }
};
var request = function request(options, url, payload, callback) {
  if (typeof payload === 'function') {
    callback = payload;
    payload = undefined;
  }
  callback = callback || function () {};
  if (fetchApi && url.indexOf('file:') !== 0) {
    return requestWithFetch(options, url, payload, callback);
  }
  if (hasXMLHttpRequest() || typeof ActiveXObject === 'function') {
    return requestWithXmlHttpRequest(options, url, payload, callback);
  }
  callback(new Error('No fetch and no xhr implementation found!'));
};
/* harmony default export */ var esm_request = (request);
;// ./node_modules/i18next-http-backend/esm/index.js
function esm_typeof(o) { "@babel/helpers - typeof"; return esm_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, esm_typeof(o); }
function esm_ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function esm_objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? esm_ownKeys(Object(t), !0).forEach(function (r) { esm_defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : esm_ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, esm_toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function esm_defineProperty(e, r, t) { return (r = esm_toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function esm_toPropertyKey(t) { var i = esm_toPrimitive(t, "string"); return "symbol" == esm_typeof(i) ? i : i + ""; }
function esm_toPrimitive(t, r) { if ("object" != esm_typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != esm_typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }


var getDefaults = function getDefaults() {
  return {
    loadPath: '/locales/{{lng}}/{{ns}}.json',
    addPath: '/locales/add/{{lng}}/{{ns}}',
    parse: function parse(data) {
      return JSON.parse(data);
    },
    stringify: JSON.stringify,
    parsePayload: function parsePayload(namespace, key, fallbackValue) {
      return esm_defineProperty({}, key, fallbackValue || '');
    },
    parseLoadPayload: function parseLoadPayload(languages, namespaces) {
      return undefined;
    },
    request: esm_request,
    reloadInterval: typeof window !== 'undefined' ? false : 60 * 60 * 1000,
    customHeaders: {},
    queryStringParams: {},
    crossDomain: false,
    withCredentials: false,
    overrideMimeType: false,
    requestOptions: {
      mode: 'cors',
      credentials: 'same-origin',
      cache: 'default'
    }
  };
};
var Backend = function () {
  function Backend(services) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    _classCallCheck(this, Backend);
    this.services = services;
    this.options = options;
    this.allOptions = allOptions;
    this.type = 'backend';
    this.init(services, options, allOptions);
  }
  return _createClass(Backend, [{
    key: "init",
    value: function init(services) {
      var _this = this;
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var allOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      this.services = services;
      this.options = esm_objectSpread(esm_objectSpread(esm_objectSpread({}, getDefaults()), this.options || {}), options);
      this.allOptions = allOptions;
      if (this.services && this.options.reloadInterval) {
        var timer = setInterval(function () {
          return _this.reload();
        }, this.options.reloadInterval);
        if (esm_typeof(timer) === 'object' && typeof timer.unref === 'function') timer.unref();
      }
    }
  }, {
    key: "readMulti",
    value: function readMulti(languages, namespaces, callback) {
      this._readAny(languages, languages, namespaces, namespaces, callback);
    }
  }, {
    key: "read",
    value: function read(language, namespace, callback) {
      this._readAny([language], language, [namespace], namespace, callback);
    }
  }, {
    key: "_readAny",
    value: function _readAny(languages, loadUrlLanguages, namespaces, loadUrlNamespaces, callback) {
      var _this2 = this;
      var loadPath = this.options.loadPath;
      if (typeof this.options.loadPath === 'function') {
        loadPath = this.options.loadPath(languages, namespaces);
      }
      loadPath = makePromise(loadPath);
      loadPath.then(function (resolvedLoadPath) {
        if (!resolvedLoadPath) return callback(null, {});
        var url = _this2.services.interpolator.interpolate(resolvedLoadPath, {
          lng: languages.join('+'),
          ns: namespaces.join('+')
        });
        _this2.loadUrl(url, callback, loadUrlLanguages, loadUrlNamespaces);
      });
    }
  }, {
    key: "loadUrl",
    value: function loadUrl(url, callback, languages, namespaces) {
      var _this3 = this;
      var lng = typeof languages === 'string' ? [languages] : languages;
      var ns = typeof namespaces === 'string' ? [namespaces] : namespaces;
      var payload = this.options.parseLoadPayload(lng, ns);
      this.options.request(this.options, url, payload, function (err, res) {
        if (res && (res.status >= 500 && res.status < 600 || !res.status)) return callback('failed loading ' + url + '; status code: ' + res.status, true);
        if (res && res.status >= 400 && res.status < 500) return callback('failed loading ' + url + '; status code: ' + res.status, false);
        if (!res && err && err.message) {
          var errorMessage = err.message.toLowerCase();
          var isNetworkError = ['failed', 'fetch', 'network', 'load'].find(function (term) {
            return errorMessage.indexOf(term) > -1;
          });
          if (isNetworkError) {
            return callback('failed loading ' + url + ': ' + err.message, true);
          }
        }
        if (err) return callback(err, false);
        var ret, parseErr;
        try {
          if (typeof res.data === 'string') {
            ret = _this3.options.parse(res.data, languages, namespaces);
          } else {
            ret = res.data;
          }
        } catch (e) {
          parseErr = 'failed parsing ' + url + ' to json';
        }
        if (parseErr) return callback(parseErr, false);
        callback(null, ret);
      });
    }
  }, {
    key: "create",
    value: function create(languages, namespace, key, fallbackValue, callback) {
      var _this4 = this;
      if (!this.options.addPath) return;
      if (typeof languages === 'string') languages = [languages];
      var payload = this.options.parsePayload(namespace, key, fallbackValue);
      var finished = 0;
      var dataArray = [];
      var resArray = [];
      languages.forEach(function (lng) {
        var addPath = _this4.options.addPath;
        if (typeof _this4.options.addPath === 'function') {
          addPath = _this4.options.addPath(lng, namespace);
        }
        var url = _this4.services.interpolator.interpolate(addPath, {
          lng: lng,
          ns: namespace
        });
        _this4.options.request(_this4.options, url, payload, function (data, res) {
          finished += 1;
          dataArray.push(data);
          resArray.push(res);
          if (finished === languages.length) {
            if (typeof callback === 'function') callback(dataArray, resArray);
          }
        });
      });
    }
  }, {
    key: "reload",
    value: function reload() {
      var _this5 = this;
      var _this$services = this.services,
        backendConnector = _this$services.backendConnector,
        languageUtils = _this$services.languageUtils,
        logger = _this$services.logger;
      var currentLanguage = backendConnector.language;
      if (currentLanguage && currentLanguage.toLowerCase() === 'cimode') return;
      var toLoad = [];
      var append = function append(lng) {
        var lngs = languageUtils.toResolveHierarchy(lng);
        lngs.forEach(function (l) {
          if (toLoad.indexOf(l) < 0) toLoad.push(l);
        });
      };
      append(currentLanguage);
      if (this.allOptions.preload) this.allOptions.preload.forEach(function (l) {
        return append(l);
      });
      toLoad.forEach(function (lng) {
        _this5.allOptions.ns.forEach(function (ns) {
          backendConnector.read(lng, ns, 'read', null, null, function (err, data) {
            if (err) logger.warn("loading namespace ".concat(ns, " for language ").concat(lng, " failed"), err);
            if (!err && data) logger.log("loaded namespace ".concat(ns, " for language ").concat(lng), data);
            backendConnector.loaded("".concat(lng, "|").concat(ns), err, data);
          });
        });
      });
    }
  }]);
}();
Backend.type = 'backend';
/* harmony default export */ var esm = (Backend);

/***/ }),

/***/ 1801:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(565);


/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

/* harmony default export */ __webpack_exports__.A = (cloneTypedArray);


/***/ }),

/***/ 1879:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2383);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3098);



/** `Object#toString` result references. */
var numberTag = '[object Number]';

/**
 * Checks if `value` is classified as a `Number` primitive or object.
 *
 * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are
 * classified as numbers, use the `_.isFinite` method.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a number, else `false`.
 * @example
 *
 * _.isNumber(3);
 * // => true
 *
 * _.isNumber(Number.MIN_VALUE);
 * // => true
 *
 * _.isNumber(Infinity);
 * // => true
 *
 * _.isNumber('3');
 * // => false
 */
function isNumber(value) {
  return typeof value == 'number' ||
    ((0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) == numberTag);
}

/* harmony default export */ __webpack_exports__.A = (isNumber);


/***/ }),

/***/ 1917:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2136);


/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A || freeSelf || Function('return this')();

/* harmony default export */ __webpack_exports__.A = (root);


/***/ }),

/***/ 2031:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _assignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2851);
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2528);



/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, key, newValue);
    } else {
      (0,_assignValue_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object, key, newValue);
    }
  }
  return object;
}

/* harmony default export */ __webpack_exports__.A = (copyObject);


/***/ }),

/***/ 2049:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

/* harmony default export */ __webpack_exports__.A = (isArray);


/***/ }),

/***/ 2050:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _MapCache; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(8562);
;// ./node_modules/lodash-es/_nativeCreate.js


/* Built-in method references that are verified to be native. */
var nativeCreate = (0,_getNative/* default */.A)(Object, 'create');

/* harmony default export */ var _nativeCreate = (nativeCreate);

;// ./node_modules/lodash-es/_hashClear.js


/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = _nativeCreate ? _nativeCreate(null) : {};
  this.size = 0;
}

/* harmony default export */ var _hashClear = (hashClear);

;// ./node_modules/lodash-es/_hashDelete.js
/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _hashDelete = (hashDelete);

;// ./node_modules/lodash-es/_hashGet.js


/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashGet_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (_nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return _hashGet_hasOwnProperty.call(data, key) ? data[key] : undefined;
}

/* harmony default export */ var _hashGet = (hashGet);

;// ./node_modules/lodash-es/_hashHas.js


/** Used for built-in method references. */
var _hashHas_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _hashHas_hasOwnProperty = _hashHas_objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return _nativeCreate ? (data[key] !== undefined) : _hashHas_hasOwnProperty.call(data, key);
}

/* harmony default export */ var _hashHas = (hashHas);

;// ./node_modules/lodash-es/_hashSet.js


/** Used to stand-in for `undefined` hash values. */
var _hashSet_HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (_nativeCreate && value === undefined) ? _hashSet_HASH_UNDEFINED : value;
  return this;
}

/* harmony default export */ var _hashSet = (hashSet);

;// ./node_modules/lodash-es/_Hash.js






/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = _hashClear;
Hash.prototype['delete'] = _hashDelete;
Hash.prototype.get = _hashGet;
Hash.prototype.has = _hashHas;
Hash.prototype.set = _hashSet;

/* harmony default export */ var _Hash = (Hash);

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(9469);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(8335);
;// ./node_modules/lodash-es/_mapCacheClear.js




/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new _Hash,
    'map': new (_Map/* default */.A || _ListCache/* default */.A),
    'string': new _Hash
  };
}

/* harmony default export */ var _mapCacheClear = (mapCacheClear);

;// ./node_modules/lodash-es/_isKeyable.js
/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

/* harmony default export */ var _isKeyable = (isKeyable);

;// ./node_modules/lodash-es/_getMapData.js


/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return _isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

/* harmony default export */ var _getMapData = (getMapData);

;// ./node_modules/lodash-es/_mapCacheDelete.js


/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = _getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

/* harmony default export */ var _mapCacheDelete = (mapCacheDelete);

;// ./node_modules/lodash-es/_mapCacheGet.js


/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return _getMapData(this, key).get(key);
}

/* harmony default export */ var _mapCacheGet = (mapCacheGet);

;// ./node_modules/lodash-es/_mapCacheHas.js


/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return _getMapData(this, key).has(key);
}

/* harmony default export */ var _mapCacheHas = (mapCacheHas);

;// ./node_modules/lodash-es/_mapCacheSet.js


/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = _getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

/* harmony default export */ var _mapCacheSet = (mapCacheSet);

;// ./node_modules/lodash-es/_MapCache.js






/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = _mapCacheClear;
MapCache.prototype['delete'] = _mapCacheDelete;
MapCache.prototype.get = _mapCacheGet;
MapCache.prototype.has = _mapCacheHas;
MapCache.prototype.set = _mapCacheSet;

/* harmony default export */ var _MapCache = (MapCache);


/***/ }),

/***/ 2080:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _Stack; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_ListCache.js + 6 modules
var _ListCache = __webpack_require__(9469);
;// ./node_modules/lodash-es/_stackClear.js


/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new _ListCache/* default */.A;
  this.size = 0;
}

/* harmony default export */ var _stackClear = (stackClear);

;// ./node_modules/lodash-es/_stackDelete.js
/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

/* harmony default export */ var _stackDelete = (stackDelete);

;// ./node_modules/lodash-es/_stackGet.js
/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

/* harmony default export */ var _stackGet = (stackGet);

;// ./node_modules/lodash-es/_stackHas.js
/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

/* harmony default export */ var _stackHas = (stackHas);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(8335);
// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__(2050);
;// ./node_modules/lodash-es/_stackSet.js




/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof _ListCache/* default */.A) {
    var pairs = data.__data__;
    if (!_Map/* default */.A || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new _MapCache/* default */.A(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

/* harmony default export */ var _stackSet = (stackSet);

;// ./node_modules/lodash-es/_Stack.js







/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new _ListCache/* default */.A(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = _stackClear;
Stack.prototype['delete'] = _stackDelete;
Stack.prototype.get = _stackGet;
Stack.prototype.has = _stackHas;
Stack.prototype.set = _stackSet;

/* harmony default export */ var _Stack = (Stack);


/***/ }),

/***/ 2136:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/* harmony default export */ __webpack_exports__.A = (freeGlobal);


/***/ }),

/***/ 2383:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _baseGetTag; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(241);
;// ./node_modules/lodash-es/_getRawTag.js


/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _getRawTag_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol/* default */.A ? _Symbol/* default */.A.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = _getRawTag_hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

/* harmony default export */ var _getRawTag = (getRawTag);

;// ./node_modules/lodash-es/_objectToString.js
/** Used for built-in method references. */
var _objectToString_objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var _objectToString_nativeObjectToString = _objectToString_objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return _objectToString_nativeObjectToString.call(value);
}

/* harmony default export */ var _objectToString = (objectToString);

;// ./node_modules/lodash-es/_baseGetTag.js




/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var _baseGetTag_symToStringTag = _Symbol/* default */.A ? _Symbol/* default */.A.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (_baseGetTag_symToStringTag && _baseGetTag_symToStringTag in Object(value))
    ? _getRawTag(value)
    : _objectToString(value);
}

/* harmony default export */ var _baseGetTag = (baseGetTag);


/***/ }),

/***/ 2389:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  r9: function() { return /* reexport */ initReactI18next; },
  Bd: function() { return /* reexport */ useTranslation_useTranslation; }
});

// UNUSED EXPORTS: I18nContext, I18nextProvider, Trans, TransWithoutContext, Translation, composeInitialProps, date, getDefaults, getI18n, getInitialProps, number, plural, select, selectOrdinal, setDefaults, setI18n, time, useSSR, withSSR, withTranslation

// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(6540);
// EXTERNAL MODULE: ./node_modules/void-elements/index.js
var void_elements = __webpack_require__(4915);
var void_elements_default = /*#__PURE__*/__webpack_require__.n(void_elements);
;// ./node_modules/html-parse-stringify/dist/html-parse-stringify.module.js
var t=/\s([^'"/\s><]+?)[\s/>]|([^\s=]+)=\s?(".*?"|'.*?')/g;function n(n){var r={type:"tag",name:"",voidElement:!1,attrs:{},children:[]},i=n.match(/<\/?([^\s]+?)[/\s>]/);if(i&&(r.name=i[1],((void_elements_default())[i[1]]||"/"===n.charAt(n.length-2))&&(r.voidElement=!0),r.name.startsWith("!--"))){var s=n.indexOf("--\x3e");return{type:"comment",comment:-1!==s?n.slice(4,s):""}}for(var a=new RegExp(t),c=null;null!==(c=a.exec(n));)if(c[0].trim())if(c[1]){var o=c[1].trim(),l=[o,""];o.indexOf("=")>-1&&(l=o.split("=")),r.attrs[l[0]]=l[1],a.lastIndex--}else c[2]&&(r.attrs[c[2]]=c[3].trim().substring(1,c[3].length-1));return r}var r=/<[a-zA-Z0-9\-\!\/](?:"[^"]*"|'[^']*'|[^'">])*>/g,i=/^\s*$/,s=Object.create(null);function a(e,t){switch(t.type){case"text":return e+t.content;case"tag":return e+="<"+t.name+(t.attrs?function(e){var t=[];for(var n in e)t.push(n+'="'+e[n]+'"');return t.length?" "+t.join(" "):""}(t.attrs):"")+(t.voidElement?"/>":">"),t.voidElement?e:e+t.children.reduce(a,"")+"</"+t.name+">";case"comment":return e+"\x3c!--"+t.comment+"--\x3e"}}var c={parse:function(e,t){t||(t={}),t.components||(t.components=s);var a,c=[],o=[],l=-1,m=!1;if(0!==e.indexOf("<")){var u=e.indexOf("<");c.push({type:"text",content:-1===u?e:e.substring(0,u)})}return e.replace(r,function(r,s){if(m){if(r!=="</"+a.name+">")return;m=!1}var u,f="/"!==r.charAt(1),h=r.startsWith("\x3c!--"),p=s+r.length,d=e.charAt(p);if(h){var v=n(r);return l<0?(c.push(v),c):((u=o[l]).children.push(v),c)}if(f&&(l++,"tag"===(a=n(r)).type&&t.components[a.name]&&(a.type="component",m=!0),a.voidElement||m||!d||"<"===d||a.children.push({type:"text",content:e.slice(p,e.indexOf("<",p))}),0===l&&c.push(a),(u=o[l-1])&&u.children.push(a),o[l]=a),(!f||a.voidElement)&&(l>-1&&(a.voidElement||a.name===r.slice(2,-1))&&(l--,a=-1===l?c:o[l]),!m&&"<"!==d&&d)){u=-1===l?c:o[l].children;var x=e.indexOf("<",p),g=e.slice(p,-1===x?void 0:x);i.test(g)&&(g=" "),(x>-1&&l+u.length>=0||" "!==g)&&u.push({type:"text",content:g})}}),c},stringify:function(e){return e.reduce(function(e,t){return e+a("",t)},"")}};/* harmony default export */ var html_parse_stringify_module = ((/* unused pure expression or super */ null && (c)));
//# sourceMappingURL=html-parse-stringify.module.js.map

;// ./node_modules/react-i18next/dist/es/utils.js
const utils_warn = (i18n, code, msg, rest) => {
  const args = [msg, {
    code,
    ...(rest || {})
  }];
  if (i18n?.services?.logger?.forward) {
    return i18n.services.logger.forward(args, 'warn', 'react-i18next::', true);
  }
  if (utils_isString(args[0])) args[0] = `react-i18next:: ${args[0]}`;
  if (i18n?.services?.logger?.warn) {
    i18n.services.logger.warn(...args);
  } else if (console?.warn) {
    console.warn(...args);
  }
};
const alreadyWarned = {};
const utils_warnOnce = (i18n, code, msg, rest) => {
  if (utils_isString(msg) && alreadyWarned[msg]) return;
  if (utils_isString(msg)) alreadyWarned[msg] = new Date();
  utils_warn(i18n, code, msg, rest);
};
const loadedClb = (i18n, cb) => () => {
  if (i18n.isInitialized) {
    cb();
  } else {
    const initialized = () => {
      setTimeout(() => {
        i18n.off('initialized', initialized);
      }, 0);
      cb();
    };
    i18n.on('initialized', initialized);
  }
};
const loadNamespaces = (i18n, ns, cb) => {
  i18n.loadNamespaces(ns, loadedClb(i18n, cb));
};
const loadLanguages = (i18n, lng, ns, cb) => {
  if (utils_isString(ns)) ns = [ns];
  if (i18n.options.preload && i18n.options.preload.indexOf(lng) > -1) return loadNamespaces(i18n, ns, cb);
  ns.forEach(n => {
    if (i18n.options.ns.indexOf(n) < 0) i18n.options.ns.push(n);
  });
  i18n.loadLanguages(lng, loadedClb(i18n, cb));
};
const hasLoadedNamespace = (ns, i18n, options = {}) => {
  if (!i18n.languages || !i18n.languages.length) {
    utils_warnOnce(i18n, 'NO_LANGUAGES', 'i18n.languages were undefined or empty', {
      languages: i18n.languages
    });
    return true;
  }
  return i18n.hasLoadedNamespace(ns, {
    lng: options.lng,
    precheck: (i18nInstance, loadNotPending) => {
      if (options.bindI18n?.indexOf('languageChanging') > -1 && i18nInstance.services.backendConnector.backend && i18nInstance.isLanguageChangingTo && !loadNotPending(i18nInstance.isLanguageChangingTo, ns)) return false;
    }
  });
};
const utils_getDisplayName = Component => Component.displayName || Component.name || (utils_isString(Component) && Component.length > 0 ? Component : 'Unknown');
const utils_isString = obj => typeof obj === 'string';
const utils_isObject = obj => typeof obj === 'object' && obj !== null;
;// ./node_modules/react-i18next/dist/es/unescape.js
const matchHtmlEntity = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34|nbsp|#160|copy|#169|reg|#174|hellip|#8230|#x2F|#47);/g;
const htmlEntities = {
  '&amp;': '&',
  '&#38;': '&',
  '&lt;': '<',
  '&#60;': '<',
  '&gt;': '>',
  '&#62;': '>',
  '&apos;': "'",
  '&#39;': "'",
  '&quot;': '"',
  '&#34;': '"',
  '&nbsp;': ' ',
  '&#160;': ' ',
  '&copy;': '©',
  '&#169;': '©',
  '&reg;': '®',
  '&#174;': '®',
  '&hellip;': '…',
  '&#8230;': '…',
  '&#x2F;': '/',
  '&#47;': '/'
};
const unescapeHtmlEntity = m => htmlEntities[m];
const unescape_unescape = text => text.replace(matchHtmlEntity, unescapeHtmlEntity);
;// ./node_modules/react-i18next/dist/es/defaults.js

let defaultOptions = {
  bindI18n: 'languageChanged',
  bindI18nStore: '',
  transEmptyNodeValue: '',
  transSupportBasicHtmlNodes: true,
  transWrapTextNodes: '',
  transKeepBasicHtmlNodesFor: ['br', 'strong', 'i', 'p'],
  useSuspense: true,
  unescape: unescape_unescape
};
const setDefaults = (options = {}) => {
  defaultOptions = {
    ...defaultOptions,
    ...options
  };
};
const defaults_getDefaults = () => defaultOptions;
;// ./node_modules/react-i18next/dist/es/TransWithoutContext.js





const hasChildren = (node, checkLength) => {
  if (!node) return false;
  const base = node.props?.children ?? node.children;
  if (checkLength) return base.length > 0;
  return !!base;
};
const getChildren = node => {
  if (!node) return [];
  const children = node.props?.children ?? node.children;
  return node.props?.i18nIsDynamicList ? getAsArray(children) : children;
};
const hasValidReactChildren = children => Array.isArray(children) && children.every(isValidElement);
const getAsArray = data => Array.isArray(data) ? data : [data];
const mergeProps = (source, target) => {
  const newTarget = {
    ...target
  };
  newTarget.props = Object.assign(source.props, target.props);
  return newTarget;
};
const nodesToString = (children, i18nOptions, i18n, i18nKey) => {
  if (!children) return '';
  let stringNode = '';
  const childrenArray = getAsArray(children);
  const keepArray = i18nOptions?.transSupportBasicHtmlNodes ? i18nOptions.transKeepBasicHtmlNodesFor ?? [] : [];
  childrenArray.forEach((child, childIndex) => {
    if (isString(child)) {
      stringNode += `${child}`;
      return;
    }
    if (isValidElement(child)) {
      const {
        props,
        type
      } = child;
      const childPropsCount = Object.keys(props).length;
      const shouldKeepChild = keepArray.indexOf(type) > -1;
      const childChildren = props.children;
      if (!childChildren && shouldKeepChild && !childPropsCount) {
        stringNode += `<${type}/>`;
        return;
      }
      if (!childChildren && (!shouldKeepChild || childPropsCount) || props.i18nIsDynamicList) {
        stringNode += `<${childIndex}></${childIndex}>`;
        return;
      }
      if (shouldKeepChild && childPropsCount === 1 && isString(childChildren)) {
        stringNode += `<${type}>${childChildren}</${type}>`;
        return;
      }
      const content = nodesToString(childChildren, i18nOptions, i18n, i18nKey);
      stringNode += `<${childIndex}>${content}</${childIndex}>`;
      return;
    }
    if (child === null) {
      warn(i18n, 'TRANS_NULL_VALUE', `Passed in a null value as child`, {
        i18nKey
      });
      return;
    }
    if (isObject(child)) {
      const {
        format,
        ...clone
      } = child;
      const keys = Object.keys(clone);
      if (keys.length === 1) {
        const value = format ? `${keys[0]}, ${format}` : keys[0];
        stringNode += `{{${value}}}`;
        return;
      }
      warn(i18n, 'TRANS_INVALID_OBJ', `Invalid child - Object should only have keys {{ value, format }} (format is optional).`, {
        i18nKey,
        child
      });
      return;
    }
    warn(i18n, 'TRANS_INVALID_VAR', `Passed in a variable like {number} - pass variables for interpolation as full objects like {{number}}.`, {
      i18nKey,
      child
    });
  });
  return stringNode;
};
const renderNodes = (children, targetString, i18n, i18nOptions, combinedTOpts, shouldUnescape) => {
  if (targetString === '') return [];
  const keepArray = i18nOptions.transKeepBasicHtmlNodesFor || [];
  const emptyChildrenButNeedsHandling = targetString && new RegExp(keepArray.map(keep => `<${keep}`).join('|')).test(targetString);
  if (!children && !emptyChildrenButNeedsHandling && !shouldUnescape) return [targetString];
  const data = {};
  const getData = childs => {
    const childrenArray = getAsArray(childs);
    childrenArray.forEach(child => {
      if (isString(child)) return;
      if (hasChildren(child)) getData(getChildren(child));else if (isObject(child) && !isValidElement(child)) Object.assign(data, child);
    });
  };
  getData(children);
  const ast = HTML.parse(`<0>${targetString}</0>`);
  const opts = {
    ...data,
    ...combinedTOpts
  };
  const renderInner = (child, node, rootReactNode) => {
    const childs = getChildren(child);
    const mappedChildren = mapAST(childs, node.children, rootReactNode);
    return hasValidReactChildren(childs) && mappedChildren.length === 0 || child.props?.i18nIsDynamicList ? childs : mappedChildren;
  };
  const pushTranslatedJSX = (child, inner, mem, i, isVoid) => {
    if (child.dummy) {
      child.children = inner;
      mem.push(cloneElement(child, {
        key: i
      }, isVoid ? undefined : inner));
    } else {
      mem.push(...Children.map([child], c => {
        const props = {
          ...c.props
        };
        delete props.i18nIsDynamicList;
        return createElement(c.type, {
          ...props,
          key: i,
          ref: c.ref
        }, isVoid ? null : inner);
      }));
    }
  };
  const mapAST = (reactNode, astNode, rootReactNode) => {
    const reactNodes = getAsArray(reactNode);
    const astNodes = getAsArray(astNode);
    return astNodes.reduce((mem, node, i) => {
      const translationContent = node.children?.[0]?.content && i18n.services.interpolator.interpolate(node.children[0].content, opts, i18n.language);
      if (node.type === 'tag') {
        let tmp = reactNodes[parseInt(node.name, 10)];
        if (rootReactNode.length === 1 && !tmp) tmp = rootReactNode[0][node.name];
        if (!tmp) tmp = {};
        const child = Object.keys(node.attrs).length !== 0 ? mergeProps({
          props: node.attrs
        }, tmp) : tmp;
        const isElement = isValidElement(child);
        const isValidTranslationWithChildren = isElement && hasChildren(node, true) && !node.voidElement;
        const isEmptyTransWithHTML = emptyChildrenButNeedsHandling && isObject(child) && child.dummy && !isElement;
        const isKnownComponent = isObject(children) && Object.hasOwnProperty.call(children, node.name);
        if (isString(child)) {
          const value = i18n.services.interpolator.interpolate(child, opts, i18n.language);
          mem.push(value);
        } else if (hasChildren(child) || isValidTranslationWithChildren) {
          const inner = renderInner(child, node, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (isEmptyTransWithHTML) {
          const inner = mapAST(reactNodes, node.children, rootReactNode);
          pushTranslatedJSX(child, inner, mem, i);
        } else if (Number.isNaN(parseFloat(node.name))) {
          if (isKnownComponent) {
            const inner = renderInner(child, node, rootReactNode);
            pushTranslatedJSX(child, inner, mem, i, node.voidElement);
          } else if (i18nOptions.transSupportBasicHtmlNodes && keepArray.indexOf(node.name) > -1) {
            if (node.voidElement) {
              mem.push(createElement(node.name, {
                key: `${node.name}-${i}`
              }));
            } else {
              const inner = mapAST(reactNodes, node.children, rootReactNode);
              mem.push(createElement(node.name, {
                key: `${node.name}-${i}`
              }, inner));
            }
          } else if (node.voidElement) {
            mem.push(`<${node.name} />`);
          } else {
            const inner = mapAST(reactNodes, node.children, rootReactNode);
            mem.push(`<${node.name}>${inner}</${node.name}>`);
          }
        } else if (isObject(child) && !isElement) {
          const content = node.children[0] ? translationContent : null;
          if (content) mem.push(content);
        } else {
          pushTranslatedJSX(child, translationContent, mem, i, node.children.length !== 1 || !translationContent);
        }
      } else if (node.type === 'text') {
        const wrapTextNodes = i18nOptions.transWrapTextNodes;
        const content = shouldUnescape ? i18nOptions.unescape(i18n.services.interpolator.interpolate(node.content, opts, i18n.language)) : i18n.services.interpolator.interpolate(node.content, opts, i18n.language);
        if (wrapTextNodes) {
          mem.push(createElement(wrapTextNodes, {
            key: `${node.name}-${i}`
          }, content));
        } else {
          mem.push(content);
        }
      }
      return mem;
    }, []);
  };
  const result = mapAST([{
    dummy: true,
    children: children || []
  }], ast, getAsArray(children || []));
  return getChildren(result[0]);
};
const fixComponentProps = (component, index, translation) => {
  const componentKey = component.key || index;
  const comp = cloneElement(component, {
    key: componentKey
  });
  if (!comp.props || !comp.props.children || translation.indexOf(`${index}/>`) < 0 && translation.indexOf(`${index} />`) < 0) {
    return comp;
  }
  function Componentized() {
    return createElement(Fragment, null, comp);
  }
  return createElement(Componentized, {
    key: componentKey
  });
};
const generateArrayComponents = (components, translation) => components.map((c, index) => fixComponentProps(c, index, translation));
const generateObjectComponents = (components, translation) => {
  const componentMap = {};
  Object.keys(components).forEach(c => {
    Object.assign(componentMap, {
      [c]: fixComponentProps(components[c], c, translation)
    });
  });
  return componentMap;
};
const generateComponents = (components, translation, i18n, i18nKey) => {
  if (!components) return null;
  if (Array.isArray(components)) {
    return generateArrayComponents(components, translation);
  }
  if (isObject(components)) {
    return generateObjectComponents(components, translation);
  }
  warnOnce(i18n, 'TRANS_INVALID_COMPONENTS', `<Trans /> "components" prop expects an object or array`, {
    i18nKey
  });
  return null;
};
function Trans({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const i18n = i18nFromProps || getI18n();
  if (!i18n) {
    warnOnce(i18n, 'NO_I18NEXT_INSTANCE', `Trans: You need to pass in an i18next instance using i18nextReactModule`, {
      i18nKey
    });
    return children;
  }
  const t = tFromProps || i18n.t.bind(i18n) || (k => k);
  const reactI18nextOptions = {
    ...getDefaults(),
    ...i18n.options?.react
  };
  let namespaces = ns || t.ns || i18n.options?.defaultNS;
  namespaces = isString(namespaces) ? [namespaces] : namespaces || ['translation'];
  const nodeAsString = nodesToString(children, reactI18nextOptions, i18n, i18nKey);
  const defaultValue = defaults || nodeAsString || reactI18nextOptions.transEmptyNodeValue || i18nKey;
  const {
    hashTransKey
  } = reactI18nextOptions;
  const key = i18nKey || (hashTransKey ? hashTransKey(nodeAsString || defaultValue) : nodeAsString || defaultValue);
  if (i18n.options?.interpolation?.defaultVariables) {
    values = values && Object.keys(values).length > 0 ? {
      ...values,
      ...i18n.options.interpolation.defaultVariables
    } : {
      ...i18n.options.interpolation.defaultVariables
    };
  }
  const interpolationOverride = values || count !== undefined && !i18n.options?.interpolation?.alwaysFormat || !children ? tOptions.interpolation : {
    interpolation: {
      ...tOptions.interpolation,
      prefix: '#$?',
      suffix: '?$#'
    }
  };
  const combinedTOpts = {
    ...tOptions,
    context: context || tOptions.context,
    count,
    ...values,
    ...interpolationOverride,
    defaultValue,
    ns: namespaces
  };
  const translation = key ? t(key, combinedTOpts) : defaultValue;
  const generatedComponents = generateComponents(components, translation, i18n, i18nKey);
  const content = renderNodes(generatedComponents || children, translation, i18n, reactI18nextOptions, combinedTOpts, shouldUnescape);
  const useAsParent = parent ?? reactI18nextOptions.defaultTransParent;
  return useAsParent ? createElement(useAsParent, additionalProps, content) : content;
}
;// ./node_modules/react-i18next/dist/es/i18nInstance.js
let i18nInstance;
const setI18n = instance => {
  i18nInstance = instance;
};
const i18nInstance_getI18n = () => i18nInstance;
;// ./node_modules/react-i18next/dist/es/initReactI18next.js


const initReactI18next = {
  type: '3rdParty',
  init(instance) {
    setDefaults(instance.options.react);
    setI18n(instance);
  }
};
;// ./node_modules/react-i18next/dist/es/context.js





const context_I18nContext = (0,react.createContext)();
class ReportNamespaces {
  constructor() {
    this.usedNamespaces = {};
  }
  addUsedNamespaces(namespaces) {
    namespaces.forEach(ns => {
      if (!this.usedNamespaces[ns]) this.usedNamespaces[ns] = true;
    });
  }
  getUsedNamespaces() {
    return Object.keys(this.usedNamespaces);
  }
}
const context_composeInitialProps = ForComponent => async ctx => {
  const componentsInitialProps = (await ForComponent.getInitialProps?.(ctx)) ?? {};
  const i18nInitialProps = getInitialProps();
  return {
    ...componentsInitialProps,
    ...i18nInitialProps
  };
};
const getInitialProps = () => {
  const i18n = getI18n();
  const namespaces = i18n.reportNamespaces?.getUsedNamespaces() ?? [];
  const ret = {};
  const initialI18nStore = {};
  i18n.languages.forEach(l => {
    initialI18nStore[l] = {};
    namespaces.forEach(ns => {
      initialI18nStore[l][ns] = i18n.getResourceBundle(l, ns) || {};
    });
  });
  ret.initialI18nStore = initialI18nStore;
  ret.initialLanguage = i18n.language;
  return ret;
};
;// ./node_modules/react-i18next/dist/es/Trans.js




function Trans_Trans({
  children,
  count,
  parent,
  i18nKey,
  context,
  tOptions = {},
  values,
  defaults,
  components,
  ns,
  i18n: i18nFromProps,
  t: tFromProps,
  shouldUnescape,
  ...additionalProps
}) {
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  const t = tFromProps || i18n?.t.bind(i18n);
  return TransWithoutContext({
    children,
    count,
    parent,
    i18nKey,
    context,
    tOptions,
    values,
    defaults,
    components,
    ns: ns || t?.ns || defaultNSFromContext || i18n?.options?.defaultNS,
    i18n,
    t: tFromProps,
    shouldUnescape,
    ...additionalProps
  });
}
;// ./node_modules/react-i18next/dist/es/useTranslation.js



const usePrevious = (value, ignore) => {
  const ref = (0,react.useRef)();
  (0,react.useEffect)(() => {
    ref.current = ignore ? ref.current : value;
  }, [value, ignore]);
  return ref.current;
};
const alwaysNewT = (i18n, language, namespace, keyPrefix) => i18n.getFixedT(language, namespace, keyPrefix);
const useMemoizedT = (i18n, language, namespace, keyPrefix) => (0,react.useCallback)(alwaysNewT(i18n, language, namespace, keyPrefix), [i18n, language, namespace, keyPrefix]);
const useTranslation_useTranslation = (ns, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext,
    defaultNS: defaultNSFromContext
  } = (0,react.useContext)(context_I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || i18nInstance_getI18n();
  if (i18n && !i18n.reportNamespaces) i18n.reportNamespaces = new ReportNamespaces();
  if (!i18n) {
    utils_warnOnce(i18n, 'NO_I18NEXT_INSTANCE', 'useTranslation: You will need to pass in an i18next instance by using initReactI18next');
    const notReadyT = (k, optsOrDefaultValue) => {
      if (utils_isString(optsOrDefaultValue)) return optsOrDefaultValue;
      if (utils_isObject(optsOrDefaultValue) && utils_isString(optsOrDefaultValue.defaultValue)) return optsOrDefaultValue.defaultValue;
      return Array.isArray(k) ? k[k.length - 1] : k;
    };
    const retNotReady = [notReadyT, {}, false];
    retNotReady.t = notReadyT;
    retNotReady.i18n = {};
    retNotReady.ready = false;
    return retNotReady;
  }
  if (i18n.options.react?.wait) utils_warnOnce(i18n, 'DEPRECATED_OPTION', 'useTranslation: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.');
  const i18nOptions = {
    ...defaults_getDefaults(),
    ...i18n.options.react,
    ...props
  };
  const {
    useSuspense,
    keyPrefix
  } = i18nOptions;
  let namespaces = ns || defaultNSFromContext || i18n.options?.defaultNS;
  namespaces = utils_isString(namespaces) ? [namespaces] : namespaces || ['translation'];
  i18n.reportNamespaces.addUsedNamespaces?.(namespaces);
  const ready = (i18n.isInitialized || i18n.initializedStoreOnce) && namespaces.every(n => hasLoadedNamespace(n, i18n, i18nOptions));
  const memoGetT = useMemoizedT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const getT = () => memoGetT;
  const getNewT = () => alwaysNewT(i18n, props.lng || null, i18nOptions.nsMode === 'fallback' ? namespaces : namespaces[0], keyPrefix);
  const [t, setT] = (0,react.useState)(getT);
  let joinedNS = namespaces.join();
  if (props.lng) joinedNS = `${props.lng}${joinedNS}`;
  const previousJoinedNS = usePrevious(joinedNS);
  const isMounted = (0,react.useRef)(true);
  (0,react.useEffect)(() => {
    const {
      bindI18n,
      bindI18nStore
    } = i18nOptions;
    isMounted.current = true;
    if (!ready && !useSuspense) {
      if (props.lng) {
        loadLanguages(i18n, props.lng, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      } else {
        loadNamespaces(i18n, namespaces, () => {
          if (isMounted.current) setT(getNewT);
        });
      }
    }
    if (ready && previousJoinedNS && previousJoinedNS !== joinedNS && isMounted.current) {
      setT(getNewT);
    }
    const boundReset = () => {
      if (isMounted.current) setT(getNewT);
    };
    if (bindI18n) i18n?.on(bindI18n, boundReset);
    if (bindI18nStore) i18n?.store.on(bindI18nStore, boundReset);
    return () => {
      isMounted.current = false;
      if (i18n) bindI18n?.split(' ').forEach(e => i18n.off(e, boundReset));
      if (bindI18nStore && i18n) bindI18nStore.split(' ').forEach(e => i18n.store.off(e, boundReset));
    };
  }, [i18n, joinedNS]);
  (0,react.useEffect)(() => {
    if (isMounted.current && ready) {
      setT(getT);
    }
  }, [i18n, keyPrefix, ready]);
  const ret = [t, i18n, ready];
  ret.t = t;
  ret.i18n = i18n;
  ret.ready = ready;
  if (ready) return ret;
  if (!ready && !useSuspense) return ret;
  throw new Promise(resolve => {
    if (props.lng) {
      loadLanguages(i18n, props.lng, namespaces, () => resolve());
    } else {
      loadNamespaces(i18n, namespaces, () => resolve());
    }
  });
};
;// ./node_modules/react-i18next/dist/es/withTranslation.js



const withTranslation = (ns, options = {}) => function Extend(WrappedComponent) {
  function I18nextWithTranslation({
    forwardedRef,
    ...rest
  }) {
    const [t, i18n, ready] = useTranslation(ns, {
      ...rest,
      keyPrefix: options.keyPrefix
    });
    const passDownProps = {
      ...rest,
      t,
      i18n,
      tReady: ready
    };
    if (options.withRef && forwardedRef) {
      passDownProps.ref = forwardedRef;
    } else if (!options.withRef && forwardedRef) {
      passDownProps.forwardedRef = forwardedRef;
    }
    return createElement(WrappedComponent, passDownProps);
  }
  I18nextWithTranslation.displayName = `withI18nextTranslation(${getDisplayName(WrappedComponent)})`;
  I18nextWithTranslation.WrappedComponent = WrappedComponent;
  const forwardRef = (props, ref) => createElement(I18nextWithTranslation, Object.assign({}, props, {
    forwardedRef: ref
  }));
  return options.withRef ? forwardRefReact(forwardRef) : I18nextWithTranslation;
};
;// ./node_modules/react-i18next/dist/es/Translation.js

const Translation = ({
  ns,
  children,
  ...options
}) => {
  const [t, i18n, ready] = useTranslation(ns, options);
  return children(t, {
    i18n,
    lng: i18n.language
  }, ready);
};
;// ./node_modules/react-i18next/dist/es/I18nextProvider.js


function I18nextProvider({
  i18n,
  defaultNS,
  children
}) {
  const value = useMemo(() => ({
    i18n,
    defaultNS
  }), [i18n, defaultNS]);
  return createElement(I18nContext.Provider, {
    value
  }, children);
}
;// ./node_modules/react-i18next/dist/es/useSSR.js


const useSSR_useSSR = (initialI18nStore, initialLanguage, props = {}) => {
  const {
    i18n: i18nFromProps
  } = props;
  const {
    i18n: i18nFromContext
  } = useContext(I18nContext) || {};
  const i18n = i18nFromProps || i18nFromContext || getI18n();
  if (i18n.options?.isClone) return;
  if (initialI18nStore && !i18n.initializedStoreOnce) {
    i18n.services.resourceStore.data = initialI18nStore;
    i18n.options.ns = Object.values(initialI18nStore).reduce((mem, lngResources) => {
      Object.keys(lngResources).forEach(ns => {
        if (mem.indexOf(ns) < 0) mem.push(ns);
      });
      return mem;
    }, i18n.options.ns);
    i18n.initializedStoreOnce = true;
    i18n.isInitialized = true;
  }
  if (initialLanguage && !i18n.initializedLanguageOnce) {
    i18n.changeLanguage(initialLanguage);
    i18n.initializedLanguageOnce = true;
  }
};
;// ./node_modules/react-i18next/dist/es/withSSR.js




const withSSR = () => function Extend(WrappedComponent) {
  function I18nextWithSSR({
    initialI18nStore,
    initialLanguage,
    ...rest
  }) {
    useSSR(initialI18nStore, initialLanguage);
    return createElement(WrappedComponent, {
      ...rest
    });
  }
  I18nextWithSSR.getInitialProps = composeInitialProps(WrappedComponent);
  I18nextWithSSR.displayName = `withI18nextSSR(${getDisplayName(WrappedComponent)})`;
  I18nextWithSSR.WrappedComponent = WrappedComponent;
  return I18nextWithSSR;
};
;// ./node_modules/react-i18next/dist/es/index.js












const date = () => '';
const time = () => '';
const number = () => '';
const es_select = () => '';
const plural = () => '';
const selectOrdinal = () => '';

/***/ }),

/***/ 2505:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _arrayLikeKeys; }
});

;// ./node_modules/lodash-es/_baseTimes.js
/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

/* harmony default export */ var _baseTimes = (baseTimes);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__(5175);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(2049);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(1200);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(5353);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__(4749);
;// ./node_modules/lodash-es/_arrayLikeKeys.js







/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _arrayLikeKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = (0,isArray/* default */.A)(value),
      isArg = !isArr && (0,isArguments/* default */.A)(value),
      isBuff = !isArr && !isArg && (0,isBuffer/* default */.A)(value),
      isType = !isArr && !isArg && !isBuff && (0,isTypedArray/* default */.A)(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? _baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || _arrayLikeKeys_hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           (0,_isIndex/* default */.A)(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _arrayLikeKeys = (arrayLikeKeys);


/***/ }),

/***/ 2528:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4171);


/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && _defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A) {
    (0,_defineProperty_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

/* harmony default export */ __webpack_exports__.A = (baseAssignValue);


/***/ }),

/***/ 2789:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

/* harmony default export */ __webpack_exports__.A = (baseUnary);


/***/ }),

/***/ 2851:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2528);
/* harmony import */ var _eq_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6984);



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && (0,_eq_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(objValue, value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(object, key, value);
  }
}

/* harmony default export */ __webpack_exports__.A = (assignValue);


/***/ }),

/***/ 3098:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

/* harmony default export */ __webpack_exports__.A = (isObjectLike);


/***/ }),

/***/ 3149:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

/* harmony default export */ __webpack_exports__.A = (isObject);


/***/ }),

/***/ 3153:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

/* harmony default export */ __webpack_exports__.A = (stubArray);


/***/ }),

/***/ 3224:
/***/ (function(module, exports, __webpack_require__) {

/* module decorator */ module = __webpack_require__.nmd(module);
/**
 * Copyright (c) 2010,2011,2012,2013,2014 Morgan Roderick http://roderick.dk
 * License: MIT - http://mrgnrdrck.mit-license.org
 *
 * https://github.com/mroderick/PubSubJS
 */

(function (root, factory){
    'use strict';

    var PubSub = {};

    if (root.PubSub) {
        PubSub = root.PubSub;
        console.warn("PubSub already loaded, using existing version");
    } else {
        root.PubSub = PubSub;
        factory(PubSub);
    }
    // CommonJS and Node.js module support
    if (true){
        if (module !== undefined && module.exports) {
            exports = module.exports = PubSub; // Node.js specific `module.exports`
        }
        exports.PubSub = PubSub; // CommonJS module 1.1.1 spec
        module.exports = exports = PubSub; // CommonJS
    }
    // AMD support
    /* eslint-disable no-undef */
    else {}

}(( typeof window === 'object' && window ) || this || __webpack_require__.g, function (PubSub){
    'use strict';

    var messages = {},
        lastUid = -1,
        ALL_SUBSCRIBING_MSG = '*';

    function hasKeys(obj){
        var key;

        for (key in obj){
            if ( Object.prototype.hasOwnProperty.call(obj, key) ){
                return true;
            }
        }
        return false;
    }

    /**
     * Returns a function that throws the passed exception, for use as argument for setTimeout
     * @alias throwException
     * @function
     * @param { Object } ex An Error object
     */
    function throwException( ex ){
        return function reThrowException(){
            throw ex;
        };
    }

    function callSubscriberWithDelayedExceptions( subscriber, message, data ){
        try {
            subscriber( message, data );
        } catch( ex ){
            setTimeout( throwException( ex ), 0);
        }
    }

    function callSubscriberWithImmediateExceptions( subscriber, message, data ){
        subscriber( message, data );
    }

    function deliverMessage( originalMessage, matchedMessage, data, immediateExceptions ){
        var subscribers = messages[matchedMessage],
            callSubscriber = immediateExceptions ? callSubscriberWithImmediateExceptions : callSubscriberWithDelayedExceptions,
            s;

        if ( !Object.prototype.hasOwnProperty.call( messages, matchedMessage ) ) {
            return;
        }

        for (s in subscribers){
            if ( Object.prototype.hasOwnProperty.call(subscribers, s)){
                callSubscriber( subscribers[s], originalMessage, data );
            }
        }
    }

    function createDeliveryFunction( message, data, immediateExceptions ){
        return function deliverNamespaced(){
            var topic = String( message ),
                position = topic.lastIndexOf( '.' );

            // deliver the message as it is now
            deliverMessage(message, message, data, immediateExceptions);

            // trim the hierarchy and deliver message to each level
            while( position !== -1 ){
                topic = topic.substr( 0, position );
                position = topic.lastIndexOf('.');
                deliverMessage( message, topic, data, immediateExceptions );
            }

            deliverMessage(message, ALL_SUBSCRIBING_MSG, data, immediateExceptions);
        };
    }

    function hasDirectSubscribersFor( message ) {
        var topic = String( message ),
            found = Boolean(Object.prototype.hasOwnProperty.call( messages, topic ) && hasKeys(messages[topic]));

        return found;
    }

    function messageHasSubscribers( message ){
        var topic = String( message ),
            found = hasDirectSubscribersFor(topic) || hasDirectSubscribersFor(ALL_SUBSCRIBING_MSG),
            position = topic.lastIndexOf( '.' );

        while ( !found && position !== -1 ){
            topic = topic.substr( 0, position );
            position = topic.lastIndexOf( '.' );
            found = hasDirectSubscribersFor(topic);
        }

        return found;
    }

    function publish( message, data, sync, immediateExceptions ){
        message = (typeof message === 'symbol') ? message.toString() : message;

        var deliver = createDeliveryFunction( message, data, immediateExceptions ),
            hasSubscribers = messageHasSubscribers( message );

        if ( !hasSubscribers ){
            return false;
        }

        if ( sync === true ){
            deliver();
        } else {
            setTimeout( deliver, 0 );
        }
        return true;
    }

    /**
     * Publishes the message, passing the data to it's subscribers
     * @function
     * @alias publish
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publish = function( message, data ){
        return publish( message, data, false, PubSub.immediateExceptions );
    };

    /**
     * Publishes the message synchronously, passing the data to it's subscribers
     * @function
     * @alias publishSync
     * @param { String } message The message to publish
     * @param {} data The data to pass to subscribers
     * @return { Boolean }
     */
    PubSub.publishSync = function( message, data ){
        return publish( message, data, true, PubSub.immediateExceptions );
    };

    /**
     * Subscribes the passed function to the passed message. Every returned token is unique and should be stored if you need to unsubscribe
     * @function
     * @alias subscribe
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { String }
     */
    PubSub.subscribe = function( message, func ){
        if ( typeof func !== 'function'){
            return false;
        }

        message = (typeof message === 'symbol') ? message.toString() : message;

        // message is not registered yet
        if ( !Object.prototype.hasOwnProperty.call( messages, message ) ){
            messages[message] = {};
        }

        // forcing token as String, to allow for future expansions without breaking usage
        // and allow for easy use as key names for the 'messages' object
        var token = 'uid_' + String(++lastUid);
        messages[message][token] = func;

        // return token for unsubscribing
        return token;
    };

    PubSub.subscribeAll = function( func ){
        return PubSub.subscribe(ALL_SUBSCRIBING_MSG, func);
    };

    /**
     * Subscribes the passed function to the passed message once
     * @function
     * @alias subscribeOnce
     * @param { String } message The message to subscribe to
     * @param { Function } func The function to call when a new message is published
     * @return { PubSub }
     */
    PubSub.subscribeOnce = function( message, func ){
        var token = PubSub.subscribe( message, function(){
            // before func apply, unsubscribe message
            PubSub.unsubscribe( token );
            func.apply( this, arguments );
        });
        return PubSub;
    };

    /**
     * Clears all subscriptions
     * @function
     * @public
     * @alias clearAllSubscriptions
     */
    PubSub.clearAllSubscriptions = function clearAllSubscriptions(){
        messages = {};
    };

    /**
     * Clear subscriptions by the topic
     * @function
     * @public
     * @alias clearAllSubscriptions
     * @return { int }
     */
    PubSub.clearSubscriptions = function clearSubscriptions(topic){
        var m;
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                delete messages[m];
            }
        }
    };

    /**
       Count subscriptions by the topic
     * @function
     * @public
     * @alias countSubscriptions
     * @return { Array }
    */
    PubSub.countSubscriptions = function countSubscriptions(topic){
        var m;
        // eslint-disable-next-line no-unused-vars
        var token;
        var count = 0;
        for (m in messages) {
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0) {
                for (token in messages[m]) {
                    count++;
                }
                break;
            }
        }
        return count;
    };


    /**
       Gets subscriptions by the topic
     * @function
     * @public
     * @alias getSubscriptions
    */
    PubSub.getSubscriptions = function getSubscriptions(topic){
        var m;
        var list = [];
        for (m in messages){
            if (Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0){
                list.push(m);
            }
        }
        return list;
    };

    /**
     * Removes subscriptions
     *
     * - When passed a token, removes a specific subscription.
     *
	 * - When passed a function, removes all subscriptions for that function
     *
	 * - When passed a topic, removes all subscriptions for that topic (hierarchy)
     * @function
     * @public
     * @alias subscribeOnce
     * @param { String | Function } value A token, function or topic to unsubscribe from
     * @example // Unsubscribing with a token
     * var token = PubSub.subscribe('mytopic', myFunc);
     * PubSub.unsubscribe(token);
     * @example // Unsubscribing with a function
     * PubSub.unsubscribe(myFunc);
     * @example // Unsubscribing from a topic
     * PubSub.unsubscribe('mytopic');
     */
    PubSub.unsubscribe = function(value){
        var descendantTopicExists = function(topic) {
                var m;
                for ( m in messages ){
                    if ( Object.prototype.hasOwnProperty.call(messages, m) && m.indexOf(topic) === 0 ){
                        // a descendant of the topic exists:
                        return true;
                    }
                }

                return false;
            },
            isTopic    = typeof value === 'string' && ( Object.prototype.hasOwnProperty.call(messages, value) || descendantTopicExists(value) ),
            isToken    = !isTopic && typeof value === 'string',
            isFunction = typeof value === 'function',
            result = false,
            m, message, t;

        if (isTopic){
            PubSub.clearSubscriptions(value);
            return;
        }

        for ( m in messages ){
            if ( Object.prototype.hasOwnProperty.call( messages, m ) ){
                message = messages[m];

                if ( isToken && message[value] ){
                    delete message[value];
                    result = value;
                    // tokens are unique, so we can just stop here
                    break;
                }

                if (isFunction) {
                    for ( t in message ){
                        if (Object.prototype.hasOwnProperty.call(message, t) && message[t] === value){
                            delete message[t];
                            result = true;
                        }
                    }
                }
            }
        }

        return result;
    };
}));


/***/ }),

/***/ 3831:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _arrayPush_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6912);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2049);



/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return (0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object) ? result : (0,_arrayPush_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(result, symbolsFunc(object));
}

/* harmony default export */ __webpack_exports__.A = (baseGetAllKeys);


/***/ }),

/***/ 3988:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1917);


/** Built-in value references. */
var Uint8Array = _root_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.Uint8Array;

/* harmony default export */ __webpack_exports__.A = (Uint8Array);


/***/ }),

/***/ 4098:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_uniq; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(8300);
;// ./node_modules/lodash-es/_baseFindIndex.js
/**
 * The base implementation of `_.findIndex` and `_.findLastIndex` without
 * support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} predicate The function invoked per iteration.
 * @param {number} fromIndex The index to search from.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseFindIndex(array, predicate, fromIndex, fromRight) {
  var length = array.length,
      index = fromIndex + (fromRight ? 1 : -1);

  while ((fromRight ? index-- : ++index < length)) {
    if (predicate(array[index], index, array)) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ var _baseFindIndex = (baseFindIndex);

;// ./node_modules/lodash-es/_baseIsNaN.js
/**
 * The base implementation of `_.isNaN` without support for number objects.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.
 */
function baseIsNaN(value) {
  return value !== value;
}

/* harmony default export */ var _baseIsNaN = (baseIsNaN);

;// ./node_modules/lodash-es/_strictIndexOf.js
/**
 * A specialized version of `_.indexOf` which performs strict equality
 * comparisons of values, i.e. `===`.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function strictIndexOf(array, value, fromIndex) {
  var index = fromIndex - 1,
      length = array.length;

  while (++index < length) {
    if (array[index] === value) {
      return index;
    }
  }
  return -1;
}

/* harmony default export */ var _strictIndexOf = (strictIndexOf);

;// ./node_modules/lodash-es/_baseIndexOf.js




/**
 * The base implementation of `_.indexOf` without `fromIndex` bounds checks.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} value The value to search for.
 * @param {number} fromIndex The index to search from.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function baseIndexOf(array, value, fromIndex) {
  return value === value
    ? _strictIndexOf(array, value, fromIndex)
    : _baseFindIndex(array, _baseIsNaN, fromIndex);
}

/* harmony default export */ var _baseIndexOf = (baseIndexOf);

;// ./node_modules/lodash-es/_arrayIncludes.js


/**
 * A specialized version of `_.includes` for arrays without support for
 * specifying an index to search from.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludes(array, value) {
  var length = array == null ? 0 : array.length;
  return !!length && _baseIndexOf(array, value, 0) > -1;
}

/* harmony default export */ var _arrayIncludes = (arrayIncludes);

;// ./node_modules/lodash-es/_arrayIncludesWith.js
/**
 * This function is like `arrayIncludes` except that it accepts a comparator.
 *
 * @private
 * @param {Array} [array] The array to inspect.
 * @param {*} target The value to search for.
 * @param {Function} comparator The comparator invoked per element.
 * @returns {boolean} Returns `true` if `target` is found, else `false`.
 */
function arrayIncludesWith(array, value, comparator) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (comparator(value, array[index])) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arrayIncludesWith = (arrayIncludesWith);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(4099);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(9857);
;// ./node_modules/lodash-es/noop.js
/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

/* harmony default export */ var lodash_es_noop = (noop);

// EXTERNAL MODULE: ./node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(9959);
;// ./node_modules/lodash-es/_createSet.js




/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Creates a set object of `values`.
 *
 * @private
 * @param {Array} values The values to add to the set.
 * @returns {Object} Returns the new set.
 */
var createSet = !(_Set/* default */.A && (1 / (0,_setToArray/* default */.A)(new _Set/* default */.A([,-0]))[1]) == INFINITY) ? lodash_es_noop : function(values) {
  return new _Set/* default */.A(values);
};

/* harmony default export */ var _createSet = (createSet);

;// ./node_modules/lodash-es/_baseUniq.js







/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * The base implementation of `_.uniqBy` without support for iteratee shorthands.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {Function} [iteratee] The iteratee invoked per element.
 * @param {Function} [comparator] The comparator invoked per element.
 * @returns {Array} Returns the new duplicate free array.
 */
function baseUniq(array, iteratee, comparator) {
  var index = -1,
      includes = _arrayIncludes,
      length = array.length,
      isCommon = true,
      result = [],
      seen = result;

  if (comparator) {
    isCommon = false;
    includes = _arrayIncludesWith;
  }
  else if (length >= LARGE_ARRAY_SIZE) {
    var set = iteratee ? null : _createSet(array);
    if (set) {
      return (0,_setToArray/* default */.A)(set);
    }
    isCommon = false;
    includes = _cacheHas/* default */.A;
    seen = new _SetCache/* default */.A;
  }
  else {
    seen = iteratee ? [] : result;
  }
  outer:
  while (++index < length) {
    var value = array[index],
        computed = iteratee ? iteratee(value) : value;

    value = (comparator || value !== 0) ? value : 0;
    if (isCommon && computed === computed) {
      var seenIndex = seen.length;
      while (seenIndex--) {
        if (seen[seenIndex] === computed) {
          continue outer;
        }
      }
      if (iteratee) {
        seen.push(computed);
      }
      result.push(value);
    }
    else if (!includes(seen, computed, comparator)) {
      if (seen !== result) {
        seen.push(computed);
      }
      result.push(value);
    }
  }
  return result;
}

/* harmony default export */ var _baseUniq = (baseUniq);

;// ./node_modules/lodash-es/uniq.js


/**
 * Creates a duplicate-free version of an array, using
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons, in which only the first occurrence of each element
 * is kept. The order of result values is determined by the order they occur
 * in the array.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Array
 * @param {Array} array The array to inspect.
 * @returns {Array} Returns the new duplicate free array.
 * @example
 *
 * _.uniq([2, 1, 2]);
 * // => [2, 1]
 */
function uniq(array) {
  return (array && array.length) ? _baseUniq(array) : [];
}

/* harmony default export */ var lodash_es_uniq = (uniq);


/***/ }),

/***/ 4099:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

/* harmony default export */ __webpack_exports__.A = (cacheHas);


/***/ }),

/***/ 4171:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8562);


var defineProperty = (function() {
  try {
    var func = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__.A = (defineProperty);


/***/ }),

/***/ 4705:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _defineProperty; }
});

;// ./node_modules/@babel/runtime/helpers/esm/typeof.js
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPrimitive.js

function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}

;// ./node_modules/@babel/runtime/helpers/esm/toPropertyKey.js


function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}

;// ./node_modules/@babel/runtime/helpers/esm/defineProperty.js

function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}


/***/ }),

/***/ 4749:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_isTypedArray; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(2383);
// EXTERNAL MODULE: ./node_modules/lodash-es/isLength.js
var isLength = __webpack_require__(5254);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(3098);
;// ./node_modules/lodash-es/_baseIsTypedArray.js




/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return (0,isObjectLike/* default */.A)(value) &&
    (0,isLength/* default */.A)(value.length) && !!typedArrayTags[(0,_baseGetTag/* default */.A)(value)];
}

/* harmony default export */ var _baseIsTypedArray = (baseIsTypedArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__(2789);
// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(4841);
;// ./node_modules/lodash-es/isTypedArray.js




/* Node.js helper references. */
var nodeIsTypedArray = _nodeUtil/* default */.A && _nodeUtil/* default */.A.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? (0,_baseUnary/* default */.A)(nodeIsTypedArray) : _baseIsTypedArray;

/* harmony default export */ var lodash_es_isTypedArray = (isTypedArray);


/***/ }),

/***/ 4841:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2136);


/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && _freeGlobal_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

/* harmony default export */ __webpack_exports__.A = (nodeUtil);


/***/ }),

/***/ 4915:
/***/ (function(module) {

/**
 * This file automatically generated from `pre-publish.js`.
 * Do not manually edit.
 */

module.exports = {
  "area": true,
  "base": true,
  "br": true,
  "col": true,
  "embed": true,
  "hr": true,
  "img": true,
  "input": true,
  "link": true,
  "meta": true,
  "param": true,
  "source": true,
  "track": true,
  "wbr": true
};


/***/ }),

/***/ 4945:
/***/ (function(module, exports, __webpack_require__) {

// Save global object in a variable
var __global__ =
(typeof globalThis !== 'undefined' && globalThis) ||
(typeof self !== 'undefined' && self) ||
(typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g);
// Create an object that extends from __global__ without the fetch function
var __globalThis__ = (function () {
function F() {
this.fetch = false;
this.DOMException = __global__.DOMException
}
F.prototype = __global__; // Needed for feature detection on whatwg-fetch's code
return new F();
})();
// Wraps whatwg-fetch with a function scope to hijack the global object
// "globalThis" that's going to be patched
(function(globalThis) {

var irrelevant = (function (exports) {

  var global =
    (typeof globalThis !== 'undefined' && globalThis) ||
    (typeof self !== 'undefined' && self) ||
    (typeof global !== 'undefined' && global);

  var support = {
    searchParams: 'URLSearchParams' in global,
    iterable: 'Symbol' in global && 'iterator' in Symbol,
    blob:
      'FileReader' in global &&
      'Blob' in global &&
      (function() {
        try {
          new Blob();
          return true
        } catch (e) {
          return false
        }
      })(),
    formData: 'FormData' in global,
    arrayBuffer: 'ArrayBuffer' in global
  };

  function isDataView(obj) {
    return obj && DataView.prototype.isPrototypeOf(obj)
  }

  if (support.arrayBuffer) {
    var viewClasses = [
      '[object Int8Array]',
      '[object Uint8Array]',
      '[object Uint8ClampedArray]',
      '[object Int16Array]',
      '[object Uint16Array]',
      '[object Int32Array]',
      '[object Uint32Array]',
      '[object Float32Array]',
      '[object Float64Array]'
    ];

    var isArrayBufferView =
      ArrayBuffer.isView ||
      function(obj) {
        return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1
      };
  }

  function normalizeName(name) {
    if (typeof name !== 'string') {
      name = String(name);
    }
    if (/[^a-z0-9\-#$%&'*+.^_`|~!]/i.test(name) || name === '') {
      throw new TypeError('Invalid character in header field name: "' + name + '"')
    }
    return name.toLowerCase()
  }

  function normalizeValue(value) {
    if (typeof value !== 'string') {
      value = String(value);
    }
    return value
  }

  // Build a destructive iterator for the value list
  function iteratorFor(items) {
    var iterator = {
      next: function() {
        var value = items.shift();
        return {done: value === undefined, value: value}
      }
    };

    if (support.iterable) {
      iterator[Symbol.iterator] = function() {
        return iterator
      };
    }

    return iterator
  }

  function Headers(headers) {
    this.map = {};

    if (headers instanceof Headers) {
      headers.forEach(function(value, name) {
        this.append(name, value);
      }, this);
    } else if (Array.isArray(headers)) {
      headers.forEach(function(header) {
        this.append(header[0], header[1]);
      }, this);
    } else if (headers) {
      Object.getOwnPropertyNames(headers).forEach(function(name) {
        this.append(name, headers[name]);
      }, this);
    }
  }

  Headers.prototype.append = function(name, value) {
    name = normalizeName(name);
    value = normalizeValue(value);
    var oldValue = this.map[name];
    this.map[name] = oldValue ? oldValue + ', ' + value : value;
  };

  Headers.prototype['delete'] = function(name) {
    delete this.map[normalizeName(name)];
  };

  Headers.prototype.get = function(name) {
    name = normalizeName(name);
    return this.has(name) ? this.map[name] : null
  };

  Headers.prototype.has = function(name) {
    return this.map.hasOwnProperty(normalizeName(name))
  };

  Headers.prototype.set = function(name, value) {
    this.map[normalizeName(name)] = normalizeValue(value);
  };

  Headers.prototype.forEach = function(callback, thisArg) {
    for (var name in this.map) {
      if (this.map.hasOwnProperty(name)) {
        callback.call(thisArg, this.map[name], name, this);
      }
    }
  };

  Headers.prototype.keys = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push(name);
    });
    return iteratorFor(items)
  };

  Headers.prototype.values = function() {
    var items = [];
    this.forEach(function(value) {
      items.push(value);
    });
    return iteratorFor(items)
  };

  Headers.prototype.entries = function() {
    var items = [];
    this.forEach(function(value, name) {
      items.push([name, value]);
    });
    return iteratorFor(items)
  };

  if (support.iterable) {
    Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
  }

  function consumed(body) {
    if (body.bodyUsed) {
      return Promise.reject(new TypeError('Already read'))
    }
    body.bodyUsed = true;
  }

  function fileReaderReady(reader) {
    return new Promise(function(resolve, reject) {
      reader.onload = function() {
        resolve(reader.result);
      };
      reader.onerror = function() {
        reject(reader.error);
      };
    })
  }

  function readBlobAsArrayBuffer(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsArrayBuffer(blob);
    return promise
  }

  function readBlobAsText(blob) {
    var reader = new FileReader();
    var promise = fileReaderReady(reader);
    reader.readAsText(blob);
    return promise
  }

  function readArrayBufferAsText(buf) {
    var view = new Uint8Array(buf);
    var chars = new Array(view.length);

    for (var i = 0; i < view.length; i++) {
      chars[i] = String.fromCharCode(view[i]);
    }
    return chars.join('')
  }

  function bufferClone(buf) {
    if (buf.slice) {
      return buf.slice(0)
    } else {
      var view = new Uint8Array(buf.byteLength);
      view.set(new Uint8Array(buf));
      return view.buffer
    }
  }

  function Body() {
    this.bodyUsed = false;

    this._initBody = function(body) {
      /*
        fetch-mock wraps the Response object in an ES6 Proxy to
        provide useful test harness features such as flush. However, on
        ES5 browsers without fetch or Proxy support pollyfills must be used;
        the proxy-pollyfill is unable to proxy an attribute unless it exists
        on the object before the Proxy is created. This change ensures
        Response.bodyUsed exists on the instance, while maintaining the
        semantic of setting Request.bodyUsed in the constructor before
        _initBody is called.
      */
      this.bodyUsed = this.bodyUsed;
      this._bodyInit = body;
      if (!body) {
        this._bodyText = '';
      } else if (typeof body === 'string') {
        this._bodyText = body;
      } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
        this._bodyBlob = body;
      } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
        this._bodyFormData = body;
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this._bodyText = body.toString();
      } else if (support.arrayBuffer && support.blob && isDataView(body)) {
        this._bodyArrayBuffer = bufferClone(body.buffer);
        // IE 10-11 can't handle a DataView body.
        this._bodyInit = new Blob([this._bodyArrayBuffer]);
      } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
        this._bodyArrayBuffer = bufferClone(body);
      } else {
        this._bodyText = body = Object.prototype.toString.call(body);
      }

      if (!this.headers.get('content-type')) {
        if (typeof body === 'string') {
          this.headers.set('content-type', 'text/plain;charset=UTF-8');
        } else if (this._bodyBlob && this._bodyBlob.type) {
          this.headers.set('content-type', this._bodyBlob.type);
        } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
          this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
        }
      }
    };

    if (support.blob) {
      this.blob = function() {
        var rejected = consumed(this);
        if (rejected) {
          return rejected
        }

        if (this._bodyBlob) {
          return Promise.resolve(this._bodyBlob)
        } else if (this._bodyArrayBuffer) {
          return Promise.resolve(new Blob([this._bodyArrayBuffer]))
        } else if (this._bodyFormData) {
          throw new Error('could not read FormData body as blob')
        } else {
          return Promise.resolve(new Blob([this._bodyText]))
        }
      };

      this.arrayBuffer = function() {
        if (this._bodyArrayBuffer) {
          var isConsumed = consumed(this);
          if (isConsumed) {
            return isConsumed
          }
          if (ArrayBuffer.isView(this._bodyArrayBuffer)) {
            return Promise.resolve(
              this._bodyArrayBuffer.buffer.slice(
                this._bodyArrayBuffer.byteOffset,
                this._bodyArrayBuffer.byteOffset + this._bodyArrayBuffer.byteLength
              )
            )
          } else {
            return Promise.resolve(this._bodyArrayBuffer)
          }
        } else {
          return this.blob().then(readBlobAsArrayBuffer)
        }
      };
    }

    this.text = function() {
      var rejected = consumed(this);
      if (rejected) {
        return rejected
      }

      if (this._bodyBlob) {
        return readBlobAsText(this._bodyBlob)
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer))
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as text')
      } else {
        return Promise.resolve(this._bodyText)
      }
    };

    if (support.formData) {
      this.formData = function() {
        return this.text().then(decode)
      };
    }

    this.json = function() {
      return this.text().then(JSON.parse)
    };

    return this
  }

  // HTTP methods whose capitalization should be normalized
  var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

  function normalizeMethod(method) {
    var upcased = method.toUpperCase();
    return methods.indexOf(upcased) > -1 ? upcased : method
  }

  function Request(input, options) {
    if (!(this instanceof Request)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }

    options = options || {};
    var body = options.body;

    if (input instanceof Request) {
      if (input.bodyUsed) {
        throw new TypeError('Already read')
      }
      this.url = input.url;
      this.credentials = input.credentials;
      if (!options.headers) {
        this.headers = new Headers(input.headers);
      }
      this.method = input.method;
      this.mode = input.mode;
      this.signal = input.signal;
      if (!body && input._bodyInit != null) {
        body = input._bodyInit;
        input.bodyUsed = true;
      }
    } else {
      this.url = String(input);
    }

    this.credentials = options.credentials || this.credentials || 'same-origin';
    if (options.headers || !this.headers) {
      this.headers = new Headers(options.headers);
    }
    this.method = normalizeMethod(options.method || this.method || 'GET');
    this.mode = options.mode || this.mode || null;
    this.signal = options.signal || this.signal;
    this.referrer = null;

    if ((this.method === 'GET' || this.method === 'HEAD') && body) {
      throw new TypeError('Body not allowed for GET or HEAD requests')
    }
    this._initBody(body);

    if (this.method === 'GET' || this.method === 'HEAD') {
      if (options.cache === 'no-store' || options.cache === 'no-cache') {
        // Search for a '_' parameter in the query string
        var reParamSearch = /([?&])_=[^&]*/;
        if (reParamSearch.test(this.url)) {
          // If it already exists then set the value with the current time
          this.url = this.url.replace(reParamSearch, '$1_=' + new Date().getTime());
        } else {
          // Otherwise add a new '_' parameter to the end with the current time
          var reQueryString = /\?/;
          this.url += (reQueryString.test(this.url) ? '&' : '?') + '_=' + new Date().getTime();
        }
      }
    }
  }

  Request.prototype.clone = function() {
    return new Request(this, {body: this._bodyInit})
  };

  function decode(body) {
    var form = new FormData();
    body
      .trim()
      .split('&')
      .forEach(function(bytes) {
        if (bytes) {
          var split = bytes.split('=');
          var name = split.shift().replace(/\+/g, ' ');
          var value = split.join('=').replace(/\+/g, ' ');
          form.append(decodeURIComponent(name), decodeURIComponent(value));
        }
      });
    return form
  }

  function parseHeaders(rawHeaders) {
    var headers = new Headers();
    // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
    // https://tools.ietf.org/html/rfc7230#section-3.2
    var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
    // Avoiding split via regex to work around a common IE11 bug with the core-js 3.6.0 regex polyfill
    // https://github.com/github/fetch/issues/748
    // https://github.com/zloirock/core-js/issues/751
    preProcessedHeaders
      .split('\r')
      .map(function(header) {
        return header.indexOf('\n') === 0 ? header.substr(1, header.length) : header
      })
      .forEach(function(line) {
        var parts = line.split(':');
        var key = parts.shift().trim();
        if (key) {
          var value = parts.join(':').trim();
          headers.append(key, value);
        }
      });
    return headers
  }

  Body.call(Request.prototype);

  function Response(bodyInit, options) {
    if (!(this instanceof Response)) {
      throw new TypeError('Please use the "new" operator, this DOM object constructor cannot be called as a function.')
    }
    if (!options) {
      options = {};
    }

    this.type = 'default';
    this.status = options.status === undefined ? 200 : options.status;
    this.ok = this.status >= 200 && this.status < 300;
    this.statusText = options.statusText === undefined ? '' : '' + options.statusText;
    this.headers = new Headers(options.headers);
    this.url = options.url || '';
    this._initBody(bodyInit);
  }

  Body.call(Response.prototype);

  Response.prototype.clone = function() {
    return new Response(this._bodyInit, {
      status: this.status,
      statusText: this.statusText,
      headers: new Headers(this.headers),
      url: this.url
    })
  };

  Response.error = function() {
    var response = new Response(null, {status: 0, statusText: ''});
    response.type = 'error';
    return response
  };

  var redirectStatuses = [301, 302, 303, 307, 308];

  Response.redirect = function(url, status) {
    if (redirectStatuses.indexOf(status) === -1) {
      throw new RangeError('Invalid status code')
    }

    return new Response(null, {status: status, headers: {location: url}})
  };

  exports.DOMException = global.DOMException;
  try {
    new exports.DOMException();
  } catch (err) {
    exports.DOMException = function(message, name) {
      this.message = message;
      this.name = name;
      var error = Error(message);
      this.stack = error.stack;
    };
    exports.DOMException.prototype = Object.create(Error.prototype);
    exports.DOMException.prototype.constructor = exports.DOMException;
  }

  function fetch(input, init) {
    return new Promise(function(resolve, reject) {
      var request = new Request(input, init);

      if (request.signal && request.signal.aborted) {
        return reject(new exports.DOMException('Aborted', 'AbortError'))
      }

      var xhr = new XMLHttpRequest();

      function abortXhr() {
        xhr.abort();
      }

      xhr.onload = function() {
        var options = {
          status: xhr.status,
          statusText: xhr.statusText,
          headers: parseHeaders(xhr.getAllResponseHeaders() || '')
        };
        options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
        var body = 'response' in xhr ? xhr.response : xhr.responseText;
        setTimeout(function() {
          resolve(new Response(body, options));
        }, 0);
      };

      xhr.onerror = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.ontimeout = function() {
        setTimeout(function() {
          reject(new TypeError('Network request failed'));
        }, 0);
      };

      xhr.onabort = function() {
        setTimeout(function() {
          reject(new exports.DOMException('Aborted', 'AbortError'));
        }, 0);
      };

      function fixUrl(url) {
        try {
          return url === '' && global.location.href ? global.location.href : url
        } catch (e) {
          return url
        }
      }

      xhr.open(request.method, fixUrl(request.url), true);

      if (request.credentials === 'include') {
        xhr.withCredentials = true;
      } else if (request.credentials === 'omit') {
        xhr.withCredentials = false;
      }

      if ('responseType' in xhr) {
        if (support.blob) {
          xhr.responseType = 'blob';
        } else if (
          support.arrayBuffer &&
          request.headers.get('Content-Type') &&
          request.headers.get('Content-Type').indexOf('application/octet-stream') !== -1
        ) {
          xhr.responseType = 'arraybuffer';
        }
      }

      if (init && typeof init.headers === 'object' && !(init.headers instanceof Headers)) {
        Object.getOwnPropertyNames(init.headers).forEach(function(name) {
          xhr.setRequestHeader(name, normalizeValue(init.headers[name]));
        });
      } else {
        request.headers.forEach(function(value, name) {
          xhr.setRequestHeader(name, value);
        });
      }

      if (request.signal) {
        request.signal.addEventListener('abort', abortXhr);

        xhr.onreadystatechange = function() {
          // DONE (success or failure)
          if (xhr.readyState === 4) {
            request.signal.removeEventListener('abort', abortXhr);
          }
        };
      }

      xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
    })
  }

  fetch.polyfill = true;

  if (!global.fetch) {
    global.fetch = fetch;
    global.Headers = Headers;
    global.Request = Request;
    global.Response = Response;
  }

  exports.Headers = Headers;
  exports.Request = Request;
  exports.Response = Response;
  exports.fetch = fetch;

  return exports;

})({});
})(__globalThis__);
// This is a ponyfill, so...
__globalThis__.fetch.ponyfill = true;
delete __globalThis__.fetch.polyfill;
// Choose between native implementation (__global__) or custom implementation (__globalThis__)
var ctx = __global__.fetch ? __global__ : __globalThis__;
exports = ctx.fetch // To enable: import fetch from 'cross-fetch'
exports["default"] = ctx.fetch // For TypeScript consumers without esModuleInterop.
exports.fetch = ctx.fetch // To enable: import {fetch} from 'cross-fetch'
exports.Headers = ctx.Headers
exports.Request = ctx.Request
exports.Response = ctx.Response
module.exports = exports


/***/ }),

/***/ 4963:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2383);
/* harmony import */ var _getPrototype_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5647);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3098);




/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) || (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) != objectTag) {
    return false;
  }
  var proto = (0,_getPrototype_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

/* harmony default export */ __webpack_exports__.A = (isPlainObject);


/***/ }),

/***/ 4997:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: function() { return /* binding */ Browser; }
/* harmony export */ });
const {
  slice,
  forEach
} = [];
function defaults(obj) {
  forEach.call(slice.call(arguments, 1), source => {
    if (source) {
      for (const prop in source) {
        if (obj[prop] === undefined) obj[prop] = source[prop];
      }
    }
  });
  return obj;
}

// eslint-disable-next-line no-control-regex
const fieldContentRegExp = /^[\u0009\u0020-\u007e\u0080-\u00ff]+$/;
const serializeCookie = function (name, val) {
  let options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
    path: '/'
  };
  const opt = options;
  const value = encodeURIComponent(val);
  let str = `${name}=${value}`;
  if (opt.maxAge > 0) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge)) throw new Error('maxAge should be a Number');
    str += `; Max-Age=${Math.floor(maxAge)}`;
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError('option domain is invalid');
    }
    str += `; Domain=${opt.domain}`;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError('option path is invalid');
    }
    str += `; Path=${opt.path}`;
  }
  if (opt.expires) {
    if (typeof opt.expires.toUTCString !== 'function') {
      throw new TypeError('option expires is invalid');
    }
    str += `; Expires=${opt.expires.toUTCString()}`;
  }
  if (opt.httpOnly) str += '; HttpOnly';
  if (opt.secure) str += '; Secure';
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === 'string' ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true:
        str += '; SameSite=Strict';
        break;
      case 'lax':
        str += '; SameSite=Lax';
        break;
      case 'strict':
        str += '; SameSite=Strict';
        break;
      case 'none':
        str += '; SameSite=None';
        break;
      default:
        throw new TypeError('option sameSite is invalid');
    }
  }
  return str;
};
const cookie = {
  create(name, value, minutes, domain) {
    let cookieOptions = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : {
      path: '/',
      sameSite: 'strict'
    };
    if (minutes) {
      cookieOptions.expires = new Date();
      cookieOptions.expires.setTime(cookieOptions.expires.getTime() + minutes * 60 * 1000);
    }
    if (domain) cookieOptions.domain = domain;
    document.cookie = serializeCookie(name, encodeURIComponent(value), cookieOptions);
  },
  read(name) {
    const nameEQ = `${name}=`;
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) === ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  },
  remove(name) {
    this.create(name, '', -1);
  }
};
var cookie$1 = {
  name: 'cookie',
  // Deconstruct the options object and extract the lookupCookie property
  lookup(_ref) {
    let {
      lookupCookie
    } = _ref;
    if (lookupCookie && typeof document !== 'undefined') {
      return cookie.read(lookupCookie) || undefined;
    }
    return undefined;
  },
  // Deconstruct the options object and extract the lookupCookie, cookieMinutes, cookieDomain, and cookieOptions properties
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupCookie,
      cookieMinutes,
      cookieDomain,
      cookieOptions
    } = _ref2;
    if (lookupCookie && typeof document !== 'undefined') {
      cookie.create(lookupCookie, lng, cookieMinutes, cookieDomain, cookieOptions);
    }
  }
};

var querystring = {
  name: 'querystring',
  // Deconstruct the options object and extract the lookupQuerystring property
  lookup(_ref) {
    let {
      lookupQuerystring
    } = _ref;
    let found;
    if (typeof window !== 'undefined') {
      let {
        search
      } = window.location;
      if (!window.location.search && window.location.hash?.indexOf('?') > -1) {
        search = window.location.hash.substring(window.location.hash.indexOf('?'));
      }
      const query = search.substring(1);
      const params = query.split('&');
      for (let i = 0; i < params.length; i++) {
        const pos = params[i].indexOf('=');
        if (pos > 0) {
          const key = params[i].substring(0, pos);
          if (key === lookupQuerystring) {
            found = params[i].substring(pos + 1);
          }
        }
      }
    }
    return found;
  }
};

let hasLocalStorageSupport = null;
const localStorageAvailable = () => {
  if (hasLocalStorageSupport !== null) return hasLocalStorageSupport;
  try {
    hasLocalStorageSupport = typeof window !== 'undefined' && window.localStorage !== null;
    if (!hasLocalStorageSupport) {
      return false;
    }
    const testKey = 'i18next.translate.boo';
    window.localStorage.setItem(testKey, 'foo');
    window.localStorage.removeItem(testKey);
  } catch (e) {
    hasLocalStorageSupport = false;
  }
  return hasLocalStorageSupport;
};
var localStorage = {
  name: 'localStorage',
  // Deconstruct the options object and extract the lookupLocalStorage property
  lookup(_ref) {
    let {
      lookupLocalStorage
    } = _ref;
    if (lookupLocalStorage && localStorageAvailable()) {
      return window.localStorage.getItem(lookupLocalStorage) || undefined; // Undefined ensures type consistency with the previous version of this function
    }
    return undefined;
  },
  // Deconstruct the options object and extract the lookupLocalStorage property
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupLocalStorage
    } = _ref2;
    if (lookupLocalStorage && localStorageAvailable()) {
      window.localStorage.setItem(lookupLocalStorage, lng);
    }
  }
};

let hasSessionStorageSupport = null;
const sessionStorageAvailable = () => {
  if (hasSessionStorageSupport !== null) return hasSessionStorageSupport;
  try {
    hasSessionStorageSupport = typeof window !== 'undefined' && window.sessionStorage !== null;
    if (!hasSessionStorageSupport) {
      return false;
    }
    const testKey = 'i18next.translate.boo';
    window.sessionStorage.setItem(testKey, 'foo');
    window.sessionStorage.removeItem(testKey);
  } catch (e) {
    hasSessionStorageSupport = false;
  }
  return hasSessionStorageSupport;
};
var sessionStorage = {
  name: 'sessionStorage',
  lookup(_ref) {
    let {
      lookupSessionStorage
    } = _ref;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      return window.sessionStorage.getItem(lookupSessionStorage) || undefined;
    }
    return undefined;
  },
  cacheUserLanguage(lng, _ref2) {
    let {
      lookupSessionStorage
    } = _ref2;
    if (lookupSessionStorage && sessionStorageAvailable()) {
      window.sessionStorage.setItem(lookupSessionStorage, lng);
    }
  }
};

var navigator$1 = {
  name: 'navigator',
  lookup(options) {
    const found = [];
    if (typeof navigator !== 'undefined') {
      const {
        languages,
        userLanguage,
        language
      } = navigator;
      if (languages) {
        // chrome only; not an array, so can't use .push.apply instead of iterating
        for (let i = 0; i < languages.length; i++) {
          found.push(languages[i]);
        }
      }
      if (userLanguage) {
        found.push(userLanguage);
      }
      if (language) {
        found.push(language);
      }
    }
    return found.length > 0 ? found : undefined;
  }
};

var htmlTag = {
  name: 'htmlTag',
  // Deconstruct the options object and extract the htmlTag property
  lookup(_ref) {
    let {
      htmlTag
    } = _ref;
    let found;
    const internalHtmlTag = htmlTag || (typeof document !== 'undefined' ? document.documentElement : null);
    if (internalHtmlTag && typeof internalHtmlTag.getAttribute === 'function') {
      found = internalHtmlTag.getAttribute('lang');
    }
    return found;
  }
};

var path = {
  name: 'path',
  // Deconstruct the options object and extract the lookupFromPathIndex property
  lookup(_ref) {
    let {
      lookupFromPathIndex
    } = _ref;
    if (typeof window === 'undefined') return undefined;
    const language = window.location.pathname.match(/\/([a-zA-Z-]*)/g);
    if (!Array.isArray(language)) return undefined;
    const index = typeof lookupFromPathIndex === 'number' ? lookupFromPathIndex : 0;
    return language[index]?.replace('/', '');
  }
};

var subdomain = {
  name: 'subdomain',
  lookup(_ref) {
    let {
      lookupFromSubdomainIndex
    } = _ref;
    // If given get the subdomain index else 1
    const internalLookupFromSubdomainIndex = typeof lookupFromSubdomainIndex === 'number' ? lookupFromSubdomainIndex + 1 : 1;
    // get all matches if window.location. is existing
    // first item of match is the match itself and the second is the first group match which should be the first subdomain match
    // is the hostname no public domain get the or option of localhost
    const language = typeof window !== 'undefined' && window.location?.hostname?.match(/^(\w{2,5})\.(([a-z0-9-]{1,63}\.[a-z]{2,6})|localhost)/i);

    // if there is no match (null) return undefined
    if (!language) return undefined;
    // return the given group match
    return language[internalLookupFromSubdomainIndex];
  }
};

// some environments, throws when accessing document.cookie
let canCookies = false;
try {
  // eslint-disable-next-line no-unused-expressions
  document.cookie;
  canCookies = true;
  // eslint-disable-next-line no-empty
} catch (e) {}
const order = ['querystring', 'cookie', 'localStorage', 'sessionStorage', 'navigator', 'htmlTag'];
if (!canCookies) order.splice(1, 1);
const getDefaults = () => ({
  order,
  lookupQuerystring: 'lng',
  lookupCookie: 'i18next',
  lookupLocalStorage: 'i18nextLng',
  lookupSessionStorage: 'i18nextLng',
  // cache user language
  caches: ['localStorage'],
  excludeCacheFor: ['cimode'],
  // cookieMinutes: 10,
  // cookieDomain: 'myDomain'

  convertDetectedLanguage: l => l
});
class Browser {
  constructor(services) {
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.type = 'languageDetector';
    this.detectors = {};
    this.init(services, options);
  }
  init() {
    let services = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      languageUtils: {}
    };
    let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    let i18nOptions = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    this.services = services;
    this.options = defaults(options, this.options || {}, getDefaults());
    if (typeof this.options.convertDetectedLanguage === 'string' && this.options.convertDetectedLanguage.indexOf('15897') > -1) {
      this.options.convertDetectedLanguage = l => l.replace('-', '_');
    }

    // backwards compatibility
    if (this.options.lookupFromUrlIndex) this.options.lookupFromPathIndex = this.options.lookupFromUrlIndex;
    this.i18nOptions = i18nOptions;
    this.addDetector(cookie$1);
    this.addDetector(querystring);
    this.addDetector(localStorage);
    this.addDetector(sessionStorage);
    this.addDetector(navigator$1);
    this.addDetector(htmlTag);
    this.addDetector(path);
    this.addDetector(subdomain);
  }
  addDetector(detector) {
    this.detectors[detector.name] = detector;
    return this;
  }
  detect() {
    let detectionOrder = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.options.order;
    let detected = [];
    detectionOrder.forEach(detectorName => {
      if (this.detectors[detectorName]) {
        let lookup = this.detectors[detectorName].lookup(this.options);
        if (lookup && typeof lookup === 'string') lookup = [lookup];
        if (lookup) detected = detected.concat(lookup);
      }
    });
    detected = detected.map(d => this.options.convertDetectedLanguage(d));
    if (this.services && this.services.languageUtils && this.services.languageUtils.getBestMatchFromCodes) return detected; // new i18next v19.5.0
    return detected.length > 0 ? detected[0] : null; // a little backward compatibility
  }
  cacheUserLanguage(lng) {
    let caches = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : this.options.caches;
    if (!caches) return;
    if (this.options.excludeCacheFor && this.options.excludeCacheFor.indexOf(lng) > -1) return;
    caches.forEach(cacheName => {
      if (this.detectors[cacheName]) this.detectors[cacheName].cacheUserLanguage(lng, this.options);
    });
  }
}
Browser.type = 'languageDetector';




/***/ }),

/***/ 5010:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_isEqual; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(2080);
// EXTERNAL MODULE: ./node_modules/lodash-es/_SetCache.js + 2 modules
var _SetCache = __webpack_require__(8300);
;// ./node_modules/lodash-es/_arraySome.js
/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

/* harmony default export */ var _arraySome = (arraySome);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cacheHas.js
var _cacheHas = __webpack_require__(4099);
;// ./node_modules/lodash-es/_equalArrays.js




/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new _SetCache/* default */.A : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!_arraySome(other, function(othValue, othIndex) {
            if (!(0,_cacheHas/* default */.A)(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalArrays = (equalArrays);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(241);
// EXTERNAL MODULE: ./node_modules/lodash-es/_Uint8Array.js
var _Uint8Array = __webpack_require__(3988);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(6984);
;// ./node_modules/lodash-es/_mapToArray.js
/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

/* harmony default export */ var _mapToArray = (mapToArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/_setToArray.js
var _setToArray = __webpack_require__(9959);
;// ./node_modules/lodash-es/_equalByTag.js







/** Used to compose bitmasks for value comparisons. */
var _equalByTag_COMPARE_PARTIAL_FLAG = 1,
    _equalByTag_COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.A ? _Symbol/* default */.A.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new _Uint8Array/* default */.A(object), new _Uint8Array/* default */.A(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return (0,eq/* default */.A)(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = _mapToArray;

    case setTag:
      var isPartial = bitmask & _equalByTag_COMPARE_PARTIAL_FLAG;
      convert || (convert = _setToArray/* default */.A);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= _equalByTag_COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = _equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

/* harmony default export */ var _equalByTag = (equalByTag);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getAllKeys.js
var _getAllKeys = __webpack_require__(9042);
;// ./node_modules/lodash-es/_equalObjects.js


/** Used to compose bitmasks for value comparisons. */
var _equalObjects_COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _equalObjects_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & _equalObjects_COMPARE_PARTIAL_FLAG,
      objProps = (0,_getAllKeys/* default */.A)(object),
      objLength = objProps.length,
      othProps = (0,_getAllKeys/* default */.A)(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : _equalObjects_hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

/* harmony default export */ var _equalObjects = (equalObjects);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 3 modules
var _getTag = __webpack_require__(9137);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(2049);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(1200);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__(4749);
;// ./node_modules/lodash-es/_baseIsEqualDeep.js









/** Used to compose bitmasks for value comparisons. */
var _baseIsEqualDeep_COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var _baseIsEqualDeep_objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseIsEqualDeep_hasOwnProperty = _baseIsEqualDeep_objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = (0,isArray/* default */.A)(object),
      othIsArr = (0,isArray/* default */.A)(other),
      objTag = objIsArr ? arrayTag : (0,_getTag/* default */.A)(object),
      othTag = othIsArr ? arrayTag : (0,_getTag/* default */.A)(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && (0,isBuffer/* default */.A)(object)) {
    if (!(0,isBuffer/* default */.A)(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new _Stack/* default */.A);
    return (objIsArr || (0,isTypedArray/* default */.A)(object))
      ? _equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : _equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & _baseIsEqualDeep_COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && _baseIsEqualDeep_hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && _baseIsEqualDeep_hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new _Stack/* default */.A);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new _Stack/* default */.A);
  return _equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

/* harmony default export */ var _baseIsEqualDeep = (baseIsEqualDeep);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(3098);
;// ./node_modules/lodash-es/_baseIsEqual.js



/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!(0,isObjectLike/* default */.A)(value) && !(0,isObjectLike/* default */.A)(other))) {
    return value !== value && other !== other;
  }
  return _baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

/* harmony default export */ var _baseIsEqual = (baseIsEqual);

;// ./node_modules/lodash-es/isEqual.js


/**
 * Performs a deep comparison between two values to determine if they are
 * equivalent.
 *
 * **Note:** This method supports comparing arrays, array buffers, booleans,
 * date objects, error objects, maps, numbers, `Object` objects, regexes,
 * sets, strings, symbols, and typed arrays. `Object` objects are compared
 * by their own, not inherited, enumerable properties. Functions and DOM
 * nodes are compared by strict equality, i.e. `===`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.isEqual(object, other);
 * // => true
 *
 * object === other;
 * // => false
 */
function isEqual(value, other) {
  return _baseIsEqual(value, other);
}

/* harmony default export */ var lodash_es_isEqual = (isEqual);


/***/ }),

/***/ 5175:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_isArguments; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(2383);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(3098);
;// ./node_modules/lodash-es/_baseIsArguments.js



/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,_baseGetTag/* default */.A)(value) == argsTag;
}

/* harmony default export */ var _baseIsArguments = (baseIsArguments);

;// ./node_modules/lodash-es/isArguments.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var isArguments_hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = _baseIsArguments(function() { return arguments; }()) ? _baseIsArguments : function(value) {
  return (0,isObjectLike/* default */.A)(value) && isArguments_hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

/* harmony default export */ var lodash_es_isArguments = (isArguments);


/***/ }),

/***/ 5178:
/***/ (function(module, exports, __webpack_require__) {

var fetchApi = typeof fetch === 'function' ? fetch : undefined
if (typeof __webpack_require__.g !== 'undefined' && __webpack_require__.g.fetch) {
  fetchApi = __webpack_require__.g.fetch
} else if (typeof window !== 'undefined' && window.fetch) {
  fetchApi = window.fetch
}

if ( true && typeof window === 'undefined') {
  var f = fetchApi || __webpack_require__(4945)
  if (f.default) f = f.default
  exports["default"] = f
  module.exports = exports.default
}


/***/ }),

/***/ 5254:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

/* harmony default export */ __webpack_exports__.A = (isLength);


/***/ }),

/***/ 5287:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return"function"===typeof a?a:null}
var B={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}E.prototype.isReactComponent={};
E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState")};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate")};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B}var H=G.prototype=new F;
H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return{$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
function N(a,b){return{$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return"object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return"$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return"object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c)}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b});-1===a._status&&(a._status=0,a._result=b)}if(1===a._status)return a._result.default;throw a._result;}
var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
exports.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments)},e)},count:function(a){var b=0;S(a,function(){b++});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};exports.Component=E;exports.Fragment=p;exports.Profiler=r;exports.PureComponent=G;exports.StrictMode=q;exports.Suspense=w;
exports.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;exports.act=X;
exports.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f])}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g}return{$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};exports.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};exports.createElement=M;exports.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};exports.createRef=function(){return{current:null}};
exports.forwardRef=function(a){return{$$typeof:v,render:a}};exports.isValidElement=O;exports.lazy=function(a){return{$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};exports.memo=function(a,b){return{$$typeof:x,type:a,compare:void 0===b?null:b}};exports.startTransition=function(a){var b=V.transition;V.transition={};try{a()}finally{V.transition=b}};exports.unstable_act=X;exports.useCallback=function(a,b){return U.current.useCallback(a,b)};exports.useContext=function(a){return U.current.useContext(a)};
exports.useDebugValue=function(){};exports.useDeferredValue=function(a){return U.current.useDeferredValue(a)};exports.useEffect=function(a,b){return U.current.useEffect(a,b)};exports.useId=function(){return U.current.useId()};exports.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};exports.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};exports.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
exports.useMemo=function(a,b){return U.current.useMemo(a,b)};exports.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};exports.useRef=function(a){return U.current.useRef(a)};exports.useState=function(a){return U.current.useState(a)};exports.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};exports.useTransition=function(){return U.current.useTransition()};exports.version="18.3.1";


/***/ }),

/***/ 5338:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";


var m = __webpack_require__(961);
if (true) {
  exports.createRoot = m.createRoot;
  exports.hydrateRoot = m.hydrateRoot;
} else { var i; }


/***/ }),

/***/ 5353:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

/* harmony default export */ __webpack_exports__.A = (isIndex);


/***/ }),

/***/ 5647:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _overArg_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(367);


/** Built-in value references. */
var getPrototype = (0,_overArg_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(Object.getPrototypeOf, Object);

/* harmony default export */ __webpack_exports__.A = (getPrototype);


/***/ }),

/***/ 6338:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_merge; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(2080);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseAssignValue.js
var _baseAssignValue = __webpack_require__(2528);
// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(6984);
;// ./node_modules/lodash-es/_assignMergeValue.js



/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !(0,eq/* default */.A)(object[key], value)) ||
      (value === undefined && !(key in object))) {
    (0,_baseAssignValue/* default */.A)(object, key, value);
  }
}

/* harmony default export */ var _assignMergeValue = (assignMergeValue);

;// ./node_modules/lodash-es/_createBaseFor.js
/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

/* harmony default export */ var _createBaseFor = (createBaseFor);

;// ./node_modules/lodash-es/_baseFor.js


/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = _createBaseFor();

/* harmony default export */ var _baseFor = (baseFor);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__(154);
// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneTypedArray.js
var _cloneTypedArray = __webpack_require__(1801);
// EXTERNAL MODULE: ./node_modules/lodash-es/_copyArray.js
var _copyArray = __webpack_require__(9759);
// EXTERNAL MODULE: ./node_modules/lodash-es/_initCloneObject.js + 1 modules
var _initCloneObject = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArguments.js + 1 modules
var isArguments = __webpack_require__(5175);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(2049);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(8446);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(3098);
;// ./node_modules/lodash-es/isArrayLikeObject.js



/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,isArrayLike/* default */.A)(value);
}

/* harmony default export */ var lodash_es_isArrayLikeObject = (isArrayLikeObject);

// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(1200);
// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(9610);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
// EXTERNAL MODULE: ./node_modules/lodash-es/isPlainObject.js
var isPlainObject = __webpack_require__(4963);
// EXTERNAL MODULE: ./node_modules/lodash-es/isTypedArray.js + 1 modules
var isTypedArray = __webpack_require__(4749);
;// ./node_modules/lodash-es/_safeGet.js
/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

/* harmony default export */ var _safeGet = (safeGet);

// EXTERNAL MODULE: ./node_modules/lodash-es/_copyObject.js
var _copyObject = __webpack_require__(2031);
// EXTERNAL MODULE: ./node_modules/lodash-es/keysIn.js + 2 modules
var keysIn = __webpack_require__(9999);
;// ./node_modules/lodash-es/toPlainObject.js



/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return (0,_copyObject/* default */.A)(value, (0,keysIn/* default */.A)(value));
}

/* harmony default export */ var lodash_es_toPlainObject = (toPlainObject);

;// ./node_modules/lodash-es/_baseMergeDeep.js
















/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = _safeGet(object, key),
      srcValue = _safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    _assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = (0,isArray/* default */.A)(srcValue),
        isBuff = !isArr && (0,isBuffer/* default */.A)(srcValue),
        isTyped = !isArr && !isBuff && (0,isTypedArray/* default */.A)(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if ((0,isArray/* default */.A)(objValue)) {
        newValue = objValue;
      }
      else if (lodash_es_isArrayLikeObject(objValue)) {
        newValue = (0,_copyArray/* default */.A)(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = (0,_cloneBuffer/* default */.A)(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = (0,_cloneTypedArray/* default */.A)(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if ((0,isPlainObject/* default */.A)(srcValue) || (0,isArguments/* default */.A)(srcValue)) {
      newValue = objValue;
      if ((0,isArguments/* default */.A)(objValue)) {
        newValue = lodash_es_toPlainObject(objValue);
      }
      else if (!(0,isObject/* default */.A)(objValue) || (0,isFunction/* default */.A)(objValue)) {
        newValue = (0,_initCloneObject/* default */.A)(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  _assignMergeValue(object, key, newValue);
}

/* harmony default export */ var _baseMergeDeep = (baseMergeDeep);

;// ./node_modules/lodash-es/_baseMerge.js








/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  _baseFor(source, function(srcValue, key) {
    stack || (stack = new _Stack/* default */.A);
    if ((0,isObject/* default */.A)(srcValue)) {
      _baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(_safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      _assignMergeValue(object, key, newValue);
    }
  }, keysIn/* default */.A);
}

/* harmony default export */ var _baseMerge = (baseMerge);

;// ./node_modules/lodash-es/identity.js
/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

/* harmony default export */ var lodash_es_identity = (identity);

;// ./node_modules/lodash-es/_apply.js
/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

/* harmony default export */ var _apply = (apply);

;// ./node_modules/lodash-es/_overRest.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return _apply(func, this, otherArgs);
  };
}

/* harmony default export */ var _overRest = (overRest);

;// ./node_modules/lodash-es/constant.js
/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

/* harmony default export */ var lodash_es_constant = (constant);

// EXTERNAL MODULE: ./node_modules/lodash-es/_defineProperty.js
var _defineProperty = __webpack_require__(4171);
;// ./node_modules/lodash-es/_baseSetToString.js




/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !_defineProperty/* default */.A ? lodash_es_identity : function(func, string) {
  return (0,_defineProperty/* default */.A)(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': lodash_es_constant(string),
    'writable': true
  });
};

/* harmony default export */ var _baseSetToString = (baseSetToString);

;// ./node_modules/lodash-es/_shortOut.js
/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

/* harmony default export */ var _shortOut = (shortOut);

;// ./node_modules/lodash-es/_setToString.js



/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = _shortOut(_baseSetToString);

/* harmony default export */ var _setToString = (setToString);

;// ./node_modules/lodash-es/_baseRest.js




/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return _setToString(_overRest(func, start, lodash_es_identity), func + '');
}

/* harmony default export */ var _baseRest = (baseRest);

// EXTERNAL MODULE: ./node_modules/lodash-es/_isIndex.js
var _isIndex = __webpack_require__(5353);
;// ./node_modules/lodash-es/_isIterateeCall.js





/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!(0,isObject/* default */.A)(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? ((0,isArrayLike/* default */.A)(object) && (0,_isIndex/* default */.A)(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return (0,eq/* default */.A)(object[index], value);
  }
  return false;
}

/* harmony default export */ var _isIterateeCall = (isIterateeCall);

;// ./node_modules/lodash-es/_createAssigner.js



/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return _baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && _isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

/* harmony default export */ var _createAssigner = (createAssigner);

;// ./node_modules/lodash-es/merge.js



/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = _createAssigner(function(object, source, srcIndex) {
  _baseMerge(object, source, srcIndex);
});

/* harmony default export */ var lodash_es_merge = (merge);


/***/ }),

/***/ 6471:
/***/ (function(__unused_webpack_module, __unused_webpack___webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: ./Code/Common/Tools/Tools.js + 9 modules
var Tools = __webpack_require__(6543);
// EXTERNAL MODULE: ./Code/Common/Logger/Logger.js
var Logger = __webpack_require__(5507);
// EXTERNAL MODULE: ./Code/Common/ErrorCode/ErrorCode.js
var ErrorCode = __webpack_require__(6221);
// EXTERNAL MODULE: ./node_modules/lodash-es/isString.js
var isString = __webpack_require__(9703);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
// EXTERNAL MODULE: ./Code/Common/Lang/Lang.js
var Lang = __webpack_require__(7803);
// EXTERNAL MODULE: ./Code/Common/Theme/Theme.js
var Theme = __webpack_require__(7589);
// EXTERNAL MODULE: ./Code/Common/Config/Config.js
var Config = __webpack_require__(519);
// EXTERNAL MODULE: ./node_modules/expired-storage/dist/expired_storage.js
var expired_storage = __webpack_require__(9000);
var expired_storage_default = /*#__PURE__*/__webpack_require__.n(expired_storage);
;// ./Code/Module/_DataFilling/_DataFilling.js









const _DataFilling_Config = Tools/* Merge */.HU(Config/* default */.A.module._DataFilling, {});
const storageLocal = new (expired_storage_default())(localStorage);
const storageSession = new (expired_storage_default())(sessionStorage);
function FillingData(setting, param, passParam, _isStorageNullError, listIndex) {
  if (setting === "") return setting;

  //WHEN-IN::[xxx] in setting
  if (/\[(.+?)\]/.test(setting)) {
    const matches = setting.match(/\[(.+?)\]/g);
    matches.forEach(item => {
      let tempParam = item.slice(1, -1);
      let tempValue = FillingData(tempParam, param, passParam, _isStorageNullError, listIndex);
      tempValue = typeof tempValue === 'object' ? JSON.stringify(tempValue) : tempValue;
      if (tempParam !== tempValue) setting = setting.replace(item, tempValue);
    });
  }
  const pieceArr = setting.split("+");
  let result = "";
  const pieceCount = pieceArr.length;

  //pieceArr.forEach(item=>{
  for (const item of pieceArr) {
    //WHEN::Empty("") means '+'
    if (item === "") {
      result += "+";
    }

    //STEP::Split function & setting
    const tempArr = item.split("##");
    const method = tempArr[0];
    let setting = "";
    if (tempArr.length > 1) setting = item.substring(`${method}##`.length);

    //STEP::Execute function filling
    switch (method) {
      case "uuid":
        result += crypto.randomUUID().replaceAll("-", "");
        break;
      case "random id":
        result += Tools/* StrRandom */.dJ(setting);
        break;
      case "get":
        let tempResult = "null";
        if (setting === "self") {
          tempResult = param;
        } else if (setting === "lang") {
          const temp = Lang/* default */.Ay.GetLanguage();
          if (temp !== undefined && temp !== false) tempResult = temp;
        } else if (setting === "theme") {
          tempResult = Theme/* Theme */.S.GetTheme();
        } else if (setting in passParam) {
          tempResult = passParam[setting];
        } else {
          let isLen = false;
          if (setting.startsWith("len##")) {
            setting = setting.substring("len##".length);
            isLen = true;
          }
          const regex = /(?<=>>)(-\d+)(?=>>)|(?<=>>)(-\d+)$/g;
          const replaced = setting.replace(regex, (match, g1, g2) => {
            let count = parseInt(g1 || g2);
            const temp = listIndex.at(count);
            if (temp !== undefined) count = temp;
            return `${count}`;
          });
          tempResult = Tools/* JsonPathValue */.xG(replaced, passParam);
          tempResult = tempResult === undefined ? "null" : tempResult;
          if (isLen) tempResult = Array.isArray(tempResult) ? tempResult.length : 0;
        }
        if (pieceCount === 1) return tempResult;else result += typeof tempResult === 'object' ? JSON.stringify(tempResult) : `${tempResult}`;
        break;
      case "trans":
        result += Lang/* default */.Ay.TransText(setting);
        break;
      case "time":
        result += Tools/* StrDate */.Ih(new Date(), setting === "" ? "yyyy-MM-dd hh:mm:ss" : setting);
        break;
      case "url":
        if (setting === "path") result += window.location.pathname;else if (setting === "protocol") result += window.location.protocol;else if (setting === "hostname") result += window.location.hostname;else if (setting === "port") result += window.location.port;else if (setting === "query") {
          const value = window.location.search;
          result += value.startsWith('?') ? value.substring(1) : value;
        } else if (setting === "hash") {
          const value = window.location.hash;
          result += value.startsWith('#') ? value.substring(1) : value;
        } else {
          const urlWithoutProtocolHostPort = window.location.pathname + window.location.search + window.location.hash;
          result += urlWithoutProtocolHostPort;
        }
        break;
      case "url param":
        const query = new URLSearchParams(window.location.search);
        let value = query.getAll(setting);
        if (value.length === 0) value = "null";else if (value.length === 1) value = value[0];
        if (pieceCount === 1) result = value;else result += value;
        break;
      case "storage":
        let dataLocal = storageLocal.getItem(setting);
        if (dataLocal === null && _isStorageNullError) {
          console.debug(Logger/* default */.A.Header(), "Module-_DataFilling FillingData local storage get fail, key:", setting);
          return ErrorCode/* default */.A.ERR_Module__DataFilling_LocalStorage_Null;
        }
        if (pieceCount === 1 && dataLocal !== null) {
          try {
            return JSON.parse(dataLocal);
          } catch (e) {
            return dataLocal;
          }
        }
        dataLocal = dataLocal === null ? "null" : dataLocal;
        result += dataLocal;
        break;
      case "session":
        let dataSession = storageSession.getItem(setting);
        if (dataSession === null && _isStorageNullError) {
          console.debug(Logger/* default */.A.Header(), "Module-_DataFilling FillingData session storage get fail, key:", setting);
          return ErrorCode/* default */.A.ERR_Module__DataFilling_SessionStorage_Null;
        }
        if (pieceCount === 1 && dataSession !== null) {
          try {
            return JSON.parse(dataSession);
          } catch (e) {
            return dataSession;
          }
        }
        dataSession = dataSession === null ? "null" : dataSession;
        result += dataSession;
        break;
      case "value":
        result += setting;
        break;
      default:
        result += item;
    }
  }
  return result;
}
function SwitchData(setting, param, _isSwitchNullError, passParam, _isStorageNullError, listIndex) {
  const judgeParam = typeof param === 'object' ? JSON.stringify(param) : `${param}`;
  for (let key in setting) {
    if (key === "") continue;
    let value = setting[key];
    value = (0,isString/* default */.A)(value) ? FillingData(value, param, passParam, _isStorageNullError, listIndex) : value;
    if (key === judgeParam) {
      return (0,isString/* default */.A)(value) ? FillingData(value, param, passParam, _isStorageNullError, listIndex) : value;
    }
    if (key.startsWith("reg##")) {
      key = key.substring("reg##".length);
      const regex = new RegExp(key);
      if (regex.test(judgeParam)) {
        return (0,isString/* default */.A)(value) ? FillingData(value, param, passParam, _isStorageNullError, listIndex) : value;
      }
    }
  }
  if (setting.hasOwnProperty("")) {
    const value = setting[""];
    return (0,isString/* default */.A)(value) ? FillingData(value, param, passParam, _isStorageNullError, listIndex) : value;
  }
  if (_isSwitchNullError) {
    console.debug(Logger/* default */.A.Header(), "Module-_DataFilling SwitchData get fail");
    return ErrorCode/* default */.A.ERR_Module__DataFilling_Switch_Null;
  }
  return param;
}
function TraverseJson_CreateNewByJsonPath(target, value, keyList) {
  if (keyList.length === 0) {
    return value;
  }

  // STEP::Get key
  const key = keyList.shift();

  // WHEN::Number index illegal
  if (/^(0|[1-9][0-9]*)$/.test(key)) {
    const index = parseInt(key);
    if (Array.isArray(target) && index < target.length) {
      const result = TraverseJson_CreateNewByJsonPath(target[index], value, keyList);
      target.splice(index, 1, result);
      return target;
    }
  }

  // WHEN::Other cases
  if (!Array.isArray(target) && typeof target !== 'object') {
    target = {};
  }
  if (!(key in target)) {
    target[key] = "";
  }
  const result = TraverseJson_CreateNewByJsonPath(target[key], value, keyList);
  target[key] = result;
  return target;
}
function TraverseJson(param, setting, passParam, _isStorageNullError, _isSwitchNullError, _isNullDelete, listIndex) {
  let arrayIndex = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;
  //WHEN::Set value
  if (!(setting instanceof Array || setting instanceof Object)) {
    if (typeof setting !== 'string') {
      return setting;
    }
    return FillingData(setting, param, passParam, _isStorageNullError, listIndex);
  }

  //WHEN::Setting is []
  if (Array.isArray(setting)) {
    if (param === undefined && arrayIndex[1] === 0) return undefined;
    if (!Array.isArray(param)) {
      param = [];
    }

    //STEP::Get start/end
    let start = arrayIndex !== null ? arrayIndex[0] : -2;
    start = start === -1 ? param.length : start;
    let len = arrayIndex !== null ? arrayIndex[1] : -2;
    len = len === -1 ? setting.length : len;
    len = len === 0 ? param.length : len;
    //WHEN::Cover list
    if (start === -2 && len === -2) {
      start = 0;
      len = setting.length;
      param = [];
    } else if (len === 0) return param;

    //STEP::Deal list setting
    const end = start + (len === 0 ? len : len - 1);
    for (let i = 0; i < setting.length; i++) {
      const paramIndex = i + start;
      if (paramIndex > end) break;
      while (param.length <= paramIndex) param.push("null");
      listIndex.push(paramIndex);
      const tempParam = TraverseJson(param[paramIndex], setting[i], passParam, _isStorageNullError, _isSwitchNullError, _isNullDelete, listIndex);
      listIndex.pop();
      if (ErrorCode/* default */.A.IsErrorCode(tempParam)) return tempParam;
      param[paramIndex] = tempParam;
      if (setting.length - 1 === i) {
        start = start + setting.length;
        i = -1;
      }
    }
    return param;
  }

  //WHEN::Setting is {}
  if (setting instanceof Object) {
    if (!(param instanceof Object)) {
      param = {};
    }
    for (let key in setting) {
      let settingValue = setting[key];
      //STEP-IN::Get whether cover param
      let isOption = false;
      if (key.startsWith("opt##")) {
        isOption = true;
        key = key.substring("opt##".length);
      } else if (key.startsWith("nec##")) {
        isOption = false;
        key = key.substring("nec##".length);
      }

      //WHEN-IN::[xxx] in key
      if (!(key in param) && /\[(.+?)\]/.test(key)) {
        const matches = key.match(/\[(.+?)\]/g);
        matches.forEach(item => {
          let tempParam = item.slice(1, -1);
          let tempValue = FillingData(tempParam, param, passParam, _isStorageNullError, listIndex);
          tempValue = typeof tempValue === 'object' ? JSON.stringify(tempValue) : tempValue;
          if (tempParam !== tempValue) key = key.replace(item, tempValue);
        });
      }

      //STEP-IN::Get whether push list / select value
      let isPush = false;
      let isSelect = false;
      let arrayIndex = [-2, -2];
      if (key.startsWith("push##") && Array.isArray(settingValue)) {
        let tempKey = key.substring("push##".length);
        let match;
        isPush = true;
        if ((match = /^(\d+)##(\d+)##/.exec(tempKey)) !== null) {
          tempKey = tempKey.substring(match[0].length);
          arrayIndex[0] = parseInt(match[2]);
          arrayIndex[1] = parseInt(match[1]);
        } else if ((match = /^0##/.exec(tempKey)) !== null) {
          tempKey = tempKey.substring(match[0].length);
          arrayIndex[0] = 0;
          arrayIndex[1] = 0;
        } else if ((match = /^(\d+)##/.exec(tempKey)) !== null) {
          tempKey = tempKey.substring(match[0].length);
          arrayIndex[0] = -1;
          arrayIndex[1] = parseInt(match[1]);
        } else {
          arrayIndex[0] = -1;
          arrayIndex[1] = -1;
        }
        key = tempKey;
      } else if (key.startsWith("switch##")) {
        const tempKey = key.substring("switch##".length);
        if ((0,isObject/* default */.A)(settingValue)) {
          isSelect = true;
          key = tempKey;
        }
      }

      //STEP-IN::Check whether param[key] exists
      let tempListIndex = [];
      let isExists = false;
      let isFromJsonPath = false;
      let paramData = "null";
      if (key in param) {
        isExists = true;
        paramData = param[key];
      } else {
        if (Tools/* JsonPathValue */.xG(key, param) !== undefined) {
          isExists = true;
          isFromJsonPath = true;
          paramData = Tools/* JsonPathValue */.xG(key, param, tempListIndex);
        } else if (key.includes(">>")) {
          isFromJsonPath = true;
        }
      }
      if (isExists && isOption) continue;
      if (!isExists && isSelect) continue;
      if (!isExists && isPush) paramData = undefined;

      //STEP-IN::Null means delete
      if (settingValue === null && isExists && _isNullDelete) {
        if (!isFromJsonPath) {
          delete param[key];
        } else {
          Tools/* JsonPathSet */.I7(key, param);
        }
        continue;
      }

      //STEP-IN::Traverse json
      const newList = [...listIndex, ...tempListIndex];
      const tempParam = isSelect ? SwitchData(settingValue, paramData, _isSwitchNullError, passParam, _isStorageNullError, newList) : TraverseJson(paramData, settingValue, passParam, _isStorageNullError, _isSwitchNullError, _isNullDelete, newList, isPush ? arrayIndex : null);
      if (ErrorCode/* default */.A.IsErrorCode(tempParam)) {
        return tempParam;
      }
      if (tempParam !== undefined) if (!isFromJsonPath) {
        //console.debug(Logger.Header(), "Module-_DataFilling TraverseJson set value, key:", key, "value:", tempParam);
        param[key] = tempParam;
      } else {
        //console.debug(Logger.Header(), "Module-_DataFilling TraverseJson set deep value, key:", key, "value:", tempParam);
        TraverseJson_CreateNewByJsonPath(param, tempParam, key.split(">>"));
      }
    }
    return param;
  }
  return param;
}
function DoStart(moduleParam, passParam, result) {
  try {
    //STEP::Get setting
    const _setting = Tools/* ParamRead */.A2("_setting", {}, moduleParam, passParam);
    const _isStorageNullError = Tools/* ParamRead */.A2("_isStorageNullError", true, moduleParam, passParam);
    const _isSwitchNullError = Tools/* ParamRead */.A2("_isSwitchNullError", true, moduleParam, passParam);
    const _isNullDelete = Tools/* ParamRead */.A2("_isNullDelete", true, moduleParam, passParam);
    console.debug(Logger/* default */.A.Header(), "Module-_DataFilling DoStart _setting:", _setting);
    console.debug(Logger/* default */.A.Header(), "Module-_DataFilling DoStart _isStorageNullError:", _isStorageNullError);
    console.debug(Logger/* default */.A.Header(), "Module-_DataFilling DoStart _isSwitchNullError:", _isSwitchNullError);
    console.debug(Logger/* default */.A.Header(), "Module-_DataFilling DoStart _isNullDelete:", _isNullDelete);

    //STEP::Filling data
    const listIndex = [];
    const tempResult = TraverseJson(passParam, _setting, passParam, _isStorageNullError, _isSwitchNullError, _isNullDelete, listIndex);
    if (ErrorCode/* default */.A.IsErrorCode(tempResult)) {
      return tempResult;
    }
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Module-_DataFilling DoStart exception", e);
    return ErrorCode/* default */.A.ERR_Module__DataFilling_Exception;
  }
  return result;
}
function _DataFilling(moduleParam, passParam) {
  console.debug(Logger/* default */.A.Header(), "Module-_DataFilling start, moduleParam:", moduleParam, "passParam:", passParam);
  let result = ErrorCode/* default */.A.ERR_OK;
  result = DoStart(moduleParam, passParam, result);
  console.debug(Logger/* default */.A.Header(), "Module-_DataFilling end, moduleParam:", moduleParam, "passParam:", passParam);
  return result;
}
;// ./Code/Module/ExtendJS/ExtendJS.js




const ExtendJS_Config = Tools/* Merge */.HU(Config/* default */.A.module.ExtendJS, {});
function Top(moduleParam, passParam, result) {
  window.scrollTo({
    top: 0,
    behavior: 'instant'
  });
  return result;
}
function ExtendJS_DoStart(moduleParam, passParam, result) {
  try {
    //STEP::Get setting
    const _action = Tools/* ParamRead */.A2("_action", "", moduleParam, passParam);
    console.debug(Logger/* default */.A.Header(), "Module-ExtendJS DoStart _action:", _action);

    //STEP::Action
    switch (_action) {
      case "top":
        result = Top(moduleParam, passParam, result);
        break;
      default:
        console.debug(Logger/* default */.A.Header(), "Module-ExtendJS DoStart lack action:", _action);
        return ErrorCode/* default */.A.ERR_Module_ExtendJS_Action_Lack;
    }
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Module-ExtendJS DoStart exception", e);
    return ErrorCode/* default */.A.ERR_Module_ExtendJS_Exception;
  }
  return result;
}
function ExtendJS(moduleParam, passParam) {
  console.debug(Logger/* default */.A.Header(), "Module-ExtendJS start, moduleParam:", moduleParam, "passParam:", passParam);
  let result = ErrorCode/* default */.A.ERR_OK;
  result = ExtendJS_DoStart(moduleParam, passParam, result);
  console.debug(Logger/* default */.A.Header(), "Module-ExtendJS end, moduleParam:", moduleParam, "passParam:", passParam);
  return result;
}
;// ./Code/Module/_OperRoute/_OperRoute.js






const _OperRoute_Config = Tools/* Merge */.HU(Config/* default */.A.module._OperRoute, {});
function ACatch_Listen(event) {
  //STEP::Check whether it clicked by <a>
  const target = event.target.closest('a');
  if (!target) return;

  //STEP::Get <a> attribute
  const href = target.getAttribute('href');
  const targetAttr = target.getAttribute('target');

  //WHEN::Open new window
  if (href.startsWith("http") || targetAttr === "_blank") return;

  //WHEN::Jump page
  window.history.pushState({}, '', href);
  window.dispatchEvent(new Event('trick-pushState'));
  event.preventDefault();
}
let hasACatch = false;
function ACatch(moduleParam, passParam, result) {
  //STEP::Get setting
  const _isRemove = Tools/* ParamRead */.A2("_isRemove", false, moduleParam, passParam);
  console.debug(Logger/* default */.A.Header(), "Module-_OperCss ACatch _isRemove:", _isRemove);

  //STEP::Listen or remove click
  if (_isRemove) document.removeEventListener('click', ACatch_Listen);else if (!hasACatch) {
    hasACatch = true;
    document.addEventListener('click', ACatch_Listen);
  }
  return result;
}
let hasRouteListen = false;
const RoutCallback = [];
const LimitPath = [];
const LocalPath = window.location.pathname;
function RouteListen_Call(event) {
  Logger/* default */.A.SetId();
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute RouteListen_Call");
  const data = {
    "url": window.location.href
  };
  RoutCallback.map((item, index) => {
    if (LimitPath[index] && window.location.pathname !== LocalPath) return;
    Tools/* CallBack */.U_(item, data, event, null, false, true, false);
  });
}
function RouteListen(moduleParam, passParam, result) {
  //STEP::Get setting
  const _call = Tools/* ParamRead */.A2("_call", null, moduleParam, passParam);
  const _isRemove = Tools/* ParamRead */.A2("_isRemove", false, moduleParam, passParam);
  const _isLimitPath = Tools/* ParamRead */.A2("_isLimitPath", false, moduleParam, passParam);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute RouteListen _call:", _call);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute RouteListen _isRemove:", _isRemove);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute RouteListen _isLimitPath:", _isLimitPath);

  //STEP::Check _call
  if (!((0,isObject/* default */.A)(_call) || (0,isString/* default */.A)(_call) || _call instanceof Function)) return ErrorCode/* default */.A.ERR_Module__OperRoute_RouteListen_Illegal;

  //WHEN::Remove listen
  if (_isRemove) {
    let index = RoutCallback.indexOf(_call);
    if (index !== -1) {
      RoutCallback.splice(index, 1);
      LimitPath.splice(index, 1);
    }
    if (RoutCallback.length === 0) {
      hasRouteListen = false;
      window.removeEventListener('popstate', RouteListen_Call);
      window.removeEventListener('trick-pushState', RouteListen_Call);
    }
    return result;
  }

  //WHEN::Add listen
  if (!RoutCallback.includes(_call)) {
    RoutCallback.push(_call);
    LimitPath.push(_isLimitPath);
  }

  //STEP::Listen or remove popstate
  if (!hasRouteListen) {
    hasRouteListen = true;
    window.addEventListener('popstate', RouteListen_Call);
    window.addEventListener('trick-pushState', RouteListen_Call);
  }
  return result;
}
function Jump(moduleParam, passParam, result) {
  //STEP::Get setting
  const _url = Tools/* ParamRead */.A2("_url", "", moduleParam, passParam);
  const _isReplace = Tools/* ParamRead */.A2("_isReplace", false, moduleParam, passParam);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute Jump _url:", _url);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute Jump _isReplace:", _isReplace);

  //STEP::Change url
  if (_isReplace) window.history.replaceState({}, '', _url);else window.history.pushState({}, '', _url);
  window.dispatchEvent(new Event('trick-pushState'));
  return result;
}
function _OperRoute_DoStart(moduleParam, passParam, result) {
  try {
    //STEP::Get setting
    const _action = Tools/* ParamRead */.A2("_action", "", moduleParam, passParam);
    console.debug(Logger/* default */.A.Header(), "Module-_OperRoute DoStart _action:", _action);

    //STEP::Action
    switch (_action) {
      case "catch":
        result = ACatch(moduleParam, passParam, result);
        break;
      case "listen":
        result = RouteListen(moduleParam, passParam, result);
        break;
      case "jump":
        result = Jump(moduleParam, passParam, result);
        break;
      default:
        console.debug(Logger/* default */.A.Header(), "Module-_OperRoute DoStart lack action:", _action);
        return ErrorCode/* default */.A.ERR_Module__OperRoute_Action_Lack;
    }
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Module-_OperRoute DoStart exception", e);
    return ErrorCode/* default */.A.ERR_Module__OperRoute_Exception;
  }
  return result;
}
function _OperRoute(moduleParam, passParam) {
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute start, moduleParam:", moduleParam, "passParam:", passParam);
  let result = ErrorCode/* default */.A.ERR_OK;
  result = _OperRoute_DoStart(moduleParam, passParam, result);
  console.debug(Logger/* default */.A.Header(), "Module-_OperRoute end, moduleParam:", moduleParam, "passParam:", passParam);
  return result;
}
;// ./Code/Module/_BrokerUI/_BrokerUI.js




const _BrokerUI_Config = Tools/* Merge */.HU(Config/* default */.A.module._BrokerUI, {});
function _BrokerUI_DoStart(moduleParam, passParam, result) {
  try {
    //STEP::Get setting
    const _id = Tools/* ParamRead */.A2("_id", "", moduleParam, passParam);
    const _config = Tools/* ParamRead */.A2("_config", {}, moduleParam, passParam);
    const _isSync = Tools/* ParamRead */.A2("_isSync", false, moduleParam, passParam);
    const _isNullError = Tools/* ParamRead */.A2("_isNullError", true, moduleParam, passParam);
    const _isFailResend = Tools/* ParamRead */.A2("_isFailResend", true, moduleParam, passParam);
    console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart _id:", _id);
    console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart _config:", _config);
    console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart _isSync:", _isSync);
    console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart _isNullError:", _isNullError);
    console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart _isFailResend:", _isFailResend);

    //STEP::Action
    const passData = {
      "moduleParam": _config,
      "passParam": passParam
    };
    const ret = Tools/* PubSubSend */.Id(_id, passData, _isSync, _isFailResend);
    if (_isNullError && ret === false) {
      console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart fail, there is not listen:", _id);
      return ErrorCode/* default */.A.ERR_Module__BrokerUI_NoListen;
    }
  } catch (e) {
    console.error(Logger/* default */.A.Header(), "Module-_BrokerUI DoStart exception", e);
    return ErrorCode/* default */.A.ERR_Module__BrokerUI_Exception;
  }
  return result;
}
function _BrokerUI(moduleParam, passParam) {
  console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI start, moduleParam:", moduleParam, "passParam:", passParam);
  let result = ErrorCode/* default */.A.ERR_OK;
  result = _BrokerUI_DoStart(moduleParam, passParam, result);
  console.debug(Logger/* default */.A.Header(), "Module-_BrokerUI end, moduleParam:", moduleParam, "passParam:", passParam);
  return result;
}
;// ./Code/Module/Module.js
//此文件由Christmas>>MergeCode>>LinkModule生成，请不要手动修改
//This file is generated by Christmas>>MergeCode>>LinkModule. Please do not modify it manually




;// ./Code/Page/index/indexAction.js
//此文件由Christmas根据xxxAction.json生成，请不要手动修改
//This file is generated by Christmas according to xxxAction.json. Please do not modify it manually




async function Start() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  //STEP::Init data pool
  let result = ErrorCode/* default */.A.ERR_OK;
  let moduleParam = {};
  const passParam = Tools/* ObjectClone */.tV(data);
  const selectorRetryData = [];
  console.debug(Logger/* default */.A.Header(), "Action Start start, moduleParam:", moduleParam, "passParam:", passParam);
  try {
    //STEP::Run task
    do {
      //STEP-IN::Call ACT function
      result = await Load(passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }

      //STEP-IN::Call Module
      moduleParam = {
        "_action": "listen",
        "_call": "act##Load"
      };
      result = await _OperRoute(moduleParam, passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }
    } while (false);
  } finally {
    console.debug(Logger/* default */.A.Header(), "Action Start end, result:", result, "passParam:", passParam);
  }
  return result;
}
Tools/* PubSubListen */.XB("act##Start", Start);
async function Load() {
  let data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  //STEP::Init data pool
  let result = ErrorCode/* default */.A.ERR_OK;
  let moduleParam = {};
  const passParam = Tools/* ObjectClone */.tV(data);
  const selectorRetryData = [];
  console.debug(Logger/* default */.A.Header(), "Action Load start, moduleParam:", moduleParam, "passParam:", passParam);
  try {
    //STEP::Run task
    do {
      //STEP-IN::Call Module
      moduleParam = {
        "_action": "top"
      };
      result = await ExtendJS(moduleParam, passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }

      //STEP-IN::Call Module
      moduleParam = {
        "_setting": {
          "$path": "/web+url##path+.html"
        }
      };
      result = await _DataFilling(moduleParam, passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }

      //STEP-IN::Call Module
      moduleParam = {
        "_setting": {
          "switch##$path": {
            "/web/.html": "/web/official/portal.html",
            "": "get##self"
          }
        }
      };
      result = await _DataFilling(moduleParam, passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }

      //STEP-IN::Call Module
      moduleParam = {
        "_id": "comp##_BoxPage<<Body",
        "_config": {
          "_src": "get##$path"
        }
      };
      result = await _BrokerUI(moduleParam, passParam);
      if (ErrorCode/* default */.A.IsError(result, [])) {
        continue;
      }
    } while (false);
  } finally {
    console.debug(Logger/* default */.A.Header(), "Action Load end, result:", result, "passParam:", passParam);
  }
  return result;
}
Tools/* PubSubListen */.XB("act##Load", Load);
try {
  Start();
} catch (e) {}

/***/ }),

/***/ 6489:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _getSymbols; }
});

;// ./node_modules/lodash-es/_arrayFilter.js
/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

/* harmony default export */ var _arrayFilter = (arrayFilter);

// EXTERNAL MODULE: ./node_modules/lodash-es/stubArray.js
var stubArray = __webpack_require__(3153);
;// ./node_modules/lodash-es/_getSymbols.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray/* default */.A : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return _arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

/* harmony default export */ var _getSymbols = (getSymbols);


/***/ }),

/***/ 6540:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(5287);
} else {}


/***/ }),

/***/ 6912:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__.A = (arrayPush);


/***/ }),

/***/ 6984:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

/* harmony default export */ __webpack_exports__.A = (eq);


/***/ }),

/***/ 7271:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

/* harmony default export */ __webpack_exports__.A = (isPrototype);


/***/ }),

/***/ 7405:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_keys; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js + 1 modules
var _arrayLikeKeys = __webpack_require__(2505);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__(7271);
// EXTERNAL MODULE: ./node_modules/lodash-es/_overArg.js
var _overArg = __webpack_require__(367);
;// ./node_modules/lodash-es/_nativeKeys.js


/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = (0,_overArg/* default */.A)(Object.keys, Object);

/* harmony default export */ var _nativeKeys = (nativeKeys);

;// ./node_modules/lodash-es/_baseKeys.js



/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeys_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!(0,_isPrototype/* default */.A)(object)) {
    return _nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (_baseKeys_hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeys = (baseKeys);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(8446);
;// ./node_modules/lodash-es/keys.js




/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return (0,isArrayLike/* default */.A)(object) ? (0,_arrayLikeKeys/* default */.A)(object) : _baseKeys(object);
}

/* harmony default export */ var lodash_es_keys = (keys);


/***/ }),

/***/ 7463:
/***/ (function(__unused_webpack_module, exports) {

"use strict";
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()}}else{var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q}}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t)}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else{var b=h(t);null!==b&&K(H,b.startTime-a)}}
function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b)}else k(r);v=h(r)}if(null!==v)var w=!0;else{var m=h(t);null!==m&&K(H,m.startTime-b);w=!1}return w}finally{v=null,y=c,z=!1}}var N=!1,O=null,L=-1,P=5,Q=-1;
function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a)}finally{b?S():(N=!1,O=null)}}else N=!1}var S;if("function"===typeof F)S=function(){F(R)};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null)}}else S=function(){D(R,0)};function I(a){O=a;N||(N=!0,S())}function K(a,b){L=D(function(){a(exports.unstable_now())},b)}
exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J))};
exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y}var c=y;y=b;try{return a()}finally{y=c}};exports.unstable_pauseExecution=function(){};
exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3}var c=y;y=a;try{return b()}finally{y=c}};
exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c}}};


/***/ }),

/***/ 8300:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _SetCache; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_MapCache.js + 14 modules
var _MapCache = __webpack_require__(2050);
;// ./node_modules/lodash-es/_setCacheAdd.js
/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

/* harmony default export */ var _setCacheAdd = (setCacheAdd);

;// ./node_modules/lodash-es/_setCacheHas.js
/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

/* harmony default export */ var _setCacheHas = (setCacheHas);

;// ./node_modules/lodash-es/_SetCache.js




/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new _MapCache/* default */.A;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = _setCacheAdd;
SetCache.prototype.has = _setCacheHas;

/* harmony default export */ var _SetCache = (SetCache);


/***/ }),

/***/ 8335:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8562);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1917);



/* Built-in method references that are verified to be native. */
var Map = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'Map');

/* harmony default export */ __webpack_exports__.A = (Map);


/***/ }),

/***/ 8446:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _isFunction_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9610);
/* harmony import */ var _isLength_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5254);



/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && (0,_isLength_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value.length) && !(0,_isFunction_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);
}

/* harmony default export */ __webpack_exports__.A = (isArrayLike);


/***/ }),

/***/ 8562:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _getNative; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/isFunction.js
var isFunction = __webpack_require__(9610);
// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(1917);
;// ./node_modules/lodash-es/_coreJsData.js


/** Used to detect overreaching core-js shims. */
var coreJsData = _root/* default */.A['__core-js_shared__'];

/* harmony default export */ var _coreJsData = (coreJsData);

;// ./node_modules/lodash-es/_isMasked.js


/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(_coreJsData && _coreJsData.keys && _coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

/* harmony default export */ var _isMasked = (isMasked);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(1121);
;// ./node_modules/lodash-es/_baseIsNative.js





/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var _baseIsNative_hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(_baseIsNative_hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!(0,isObject/* default */.A)(value) || _isMasked(value)) {
    return false;
  }
  var pattern = (0,isFunction/* default */.A)(value) ? reIsNative : reIsHostCtor;
  return pattern.test((0,_toSource/* default */.A)(value));
}

/* harmony default export */ var _baseIsNative = (baseIsNative);

;// ./node_modules/lodash-es/_getValue.js
/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

/* harmony default export */ var _getValue = (getValue);

;// ./node_modules/lodash-es/_getNative.js



/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = _getValue(object, key);
  return _baseIsNative(value) ? value : undefined;
}

/* harmony default export */ var _getNative = (getNative);


/***/ }),

/***/ 8592:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_cloneDeep; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_Stack.js + 5 modules
var _Stack = __webpack_require__(2080);
;// ./node_modules/lodash-es/_arrayEach.js
/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

/* harmony default export */ var _arrayEach = (arrayEach);

// EXTERNAL MODULE: ./node_modules/lodash-es/_assignValue.js
var _assignValue = __webpack_require__(2851);
// EXTERNAL MODULE: ./node_modules/lodash-es/_copyObject.js
var _copyObject = __webpack_require__(2031);
// EXTERNAL MODULE: ./node_modules/lodash-es/keys.js + 2 modules
var keys = __webpack_require__(7405);
;// ./node_modules/lodash-es/_baseAssign.js



/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && (0,_copyObject/* default */.A)(source, (0,keys/* default */.A)(source), object);
}

/* harmony default export */ var _baseAssign = (baseAssign);

// EXTERNAL MODULE: ./node_modules/lodash-es/keysIn.js + 2 modules
var keysIn = __webpack_require__(9999);
;// ./node_modules/lodash-es/_baseAssignIn.js



/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && (0,_copyObject/* default */.A)(source, (0,keysIn/* default */.A)(source), object);
}

/* harmony default export */ var _baseAssignIn = (baseAssignIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneBuffer.js
var _cloneBuffer = __webpack_require__(154);
// EXTERNAL MODULE: ./node_modules/lodash-es/_copyArray.js
var _copyArray = __webpack_require__(9759);
// EXTERNAL MODULE: ./node_modules/lodash-es/_getSymbols.js + 1 modules
var _getSymbols = __webpack_require__(6489);
;// ./node_modules/lodash-es/_copySymbols.js



/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return (0,_copyObject/* default */.A)(source, (0,_getSymbols/* default */.A)(source), object);
}

/* harmony default export */ var _copySymbols = (copySymbols);

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayPush.js
var _arrayPush = __webpack_require__(6912);
// EXTERNAL MODULE: ./node_modules/lodash-es/_getPrototype.js
var _getPrototype = __webpack_require__(5647);
// EXTERNAL MODULE: ./node_modules/lodash-es/stubArray.js
var stubArray = __webpack_require__(3153);
;// ./node_modules/lodash-es/_getSymbolsIn.js





/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray/* default */.A : function(object) {
  var result = [];
  while (object) {
    (0,_arrayPush/* default */.A)(result, (0,_getSymbols/* default */.A)(object));
    object = (0,_getPrototype/* default */.A)(object);
  }
  return result;
};

/* harmony default export */ var _getSymbolsIn = (getSymbolsIn);

;// ./node_modules/lodash-es/_copySymbolsIn.js



/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return (0,_copyObject/* default */.A)(source, _getSymbolsIn(source), object);
}

/* harmony default export */ var _copySymbolsIn = (copySymbolsIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getAllKeys.js
var _getAllKeys = __webpack_require__(9042);
// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetAllKeys.js
var _baseGetAllKeys = __webpack_require__(3831);
;// ./node_modules/lodash-es/_getAllKeysIn.js




/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return (0,_baseGetAllKeys/* default */.A)(object, keysIn/* default */.A, _getSymbolsIn);
}

/* harmony default export */ var _getAllKeysIn = (getAllKeysIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/_getTag.js + 3 modules
var _getTag = __webpack_require__(9137);
;// ./node_modules/lodash-es/_initCloneArray.js
/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _initCloneArray_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && _initCloneArray_hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

/* harmony default export */ var _initCloneArray = (initCloneArray);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneArrayBuffer.js
var _cloneArrayBuffer = __webpack_require__(565);
;// ./node_modules/lodash-es/_cloneDataView.js


/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? (0,_cloneArrayBuffer/* default */.A)(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

/* harmony default export */ var _cloneDataView = (cloneDataView);

;// ./node_modules/lodash-es/_cloneRegExp.js
/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/* harmony default export */ var _cloneRegExp = (cloneRegExp);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Symbol.js
var _Symbol = __webpack_require__(241);
;// ./node_modules/lodash-es/_cloneSymbol.js


/** Used to convert symbols to primitives and strings. */
var symbolProto = _Symbol/* default */.A ? _Symbol/* default */.A.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

/* harmony default export */ var _cloneSymbol = (cloneSymbol);

// EXTERNAL MODULE: ./node_modules/lodash-es/_cloneTypedArray.js
var _cloneTypedArray = __webpack_require__(1801);
;// ./node_modules/lodash-es/_initCloneByTag.js






/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return (0,_cloneArrayBuffer/* default */.A)(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return _cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return (0,_cloneTypedArray/* default */.A)(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return _cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return _cloneSymbol(object);
  }
}

/* harmony default export */ var _initCloneByTag = (initCloneByTag);

// EXTERNAL MODULE: ./node_modules/lodash-es/_initCloneObject.js + 1 modules
var _initCloneObject = __webpack_require__(407);
// EXTERNAL MODULE: ./node_modules/lodash-es/isArray.js
var isArray = __webpack_require__(2049);
// EXTERNAL MODULE: ./node_modules/lodash-es/isBuffer.js + 1 modules
var isBuffer = __webpack_require__(1200);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObjectLike.js
var isObjectLike = __webpack_require__(3098);
;// ./node_modules/lodash-es/_baseIsMap.js



/** `Object#toString` result references. */
var _baseIsMap_mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,_getTag/* default */.A)(value) == _baseIsMap_mapTag;
}

/* harmony default export */ var _baseIsMap = (baseIsMap);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseUnary.js
var _baseUnary = __webpack_require__(2789);
// EXTERNAL MODULE: ./node_modules/lodash-es/_nodeUtil.js
var _nodeUtil = __webpack_require__(4841);
;// ./node_modules/lodash-es/isMap.js




/* Node.js helper references. */
var nodeIsMap = _nodeUtil/* default */.A && _nodeUtil/* default */.A.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? (0,_baseUnary/* default */.A)(nodeIsMap) : _baseIsMap;

/* harmony default export */ var lodash_es_isMap = (isMap);

// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
;// ./node_modules/lodash-es/_baseIsSet.js



/** `Object#toString` result references. */
var _baseIsSet_setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return (0,isObjectLike/* default */.A)(value) && (0,_getTag/* default */.A)(value) == _baseIsSet_setTag;
}

/* harmony default export */ var _baseIsSet = (baseIsSet);

;// ./node_modules/lodash-es/isSet.js




/* Node.js helper references. */
var nodeIsSet = _nodeUtil/* default */.A && _nodeUtil/* default */.A.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? (0,_baseUnary/* default */.A)(nodeIsSet) : _baseIsSet;

/* harmony default export */ var lodash_es_isSet = (isSet);

;// ./node_modules/lodash-es/_baseClone.js























/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    _baseClone_boolTag = '[object Boolean]',
    _baseClone_dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    _baseClone_mapTag = '[object Map]',
    _baseClone_numberTag = '[object Number]',
    objectTag = '[object Object]',
    _baseClone_regexpTag = '[object RegExp]',
    _baseClone_setTag = '[object Set]',
    _baseClone_stringTag = '[object String]',
    _baseClone_symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var _baseClone_arrayBufferTag = '[object ArrayBuffer]',
    _baseClone_dataViewTag = '[object DataView]',
    _baseClone_float32Tag = '[object Float32Array]',
    _baseClone_float64Tag = '[object Float64Array]',
    _baseClone_int8Tag = '[object Int8Array]',
    _baseClone_int16Tag = '[object Int16Array]',
    _baseClone_int32Tag = '[object Int32Array]',
    _baseClone_uint8Tag = '[object Uint8Array]',
    _baseClone_uint8ClampedTag = '[object Uint8ClampedArray]',
    _baseClone_uint16Tag = '[object Uint16Array]',
    _baseClone_uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[_baseClone_arrayBufferTag] = cloneableTags[_baseClone_dataViewTag] =
cloneableTags[_baseClone_boolTag] = cloneableTags[_baseClone_dateTag] =
cloneableTags[_baseClone_float32Tag] = cloneableTags[_baseClone_float64Tag] =
cloneableTags[_baseClone_int8Tag] = cloneableTags[_baseClone_int16Tag] =
cloneableTags[_baseClone_int32Tag] = cloneableTags[_baseClone_mapTag] =
cloneableTags[_baseClone_numberTag] = cloneableTags[objectTag] =
cloneableTags[_baseClone_regexpTag] = cloneableTags[_baseClone_setTag] =
cloneableTags[_baseClone_stringTag] = cloneableTags[_baseClone_symbolTag] =
cloneableTags[_baseClone_uint8Tag] = cloneableTags[_baseClone_uint8ClampedTag] =
cloneableTags[_baseClone_uint16Tag] = cloneableTags[_baseClone_uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!(0,isObject/* default */.A)(value)) {
    return value;
  }
  var isArr = (0,isArray/* default */.A)(value);
  if (isArr) {
    result = _initCloneArray(value);
    if (!isDeep) {
      return (0,_copyArray/* default */.A)(value, result);
    }
  } else {
    var tag = (0,_getTag/* default */.A)(value),
        isFunc = tag == funcTag || tag == genTag;

    if ((0,isBuffer/* default */.A)(value)) {
      return (0,_cloneBuffer/* default */.A)(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : (0,_initCloneObject/* default */.A)(value);
      if (!isDeep) {
        return isFlat
          ? _copySymbolsIn(value, _baseAssignIn(result, value))
          : _copySymbols(value, _baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = _initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new _Stack/* default */.A);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (lodash_es_isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (lodash_es_isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? _getAllKeysIn : _getAllKeys/* default */.A)
    : (isFlat ? keysIn/* default */.A : keys/* default */.A);

  var props = isArr ? undefined : keysFunc(value);
  _arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    (0,_assignValue/* default */.A)(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

/* harmony default export */ var _baseClone = (baseClone);

;// ./node_modules/lodash-es/cloneDeep.js


/** Used to compose bitmasks for cloning. */
var cloneDeep_CLONE_DEEP_FLAG = 1,
    cloneDeep_CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return _baseClone(value, cloneDeep_CLONE_DEEP_FLAG | cloneDeep_CLONE_SYMBOLS_FLAG);
}

/* harmony default export */ var lodash_es_cloneDeep = (cloneDeep);


/***/ }),

/***/ 9000:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;(function(root) {

    "use strict";

    /**
     * ExpiredStorage
     * A class to manage local storage with expiration time (like cookies).
     *
     * @param storage: Optional storage base class to use (must implement the 'localStorage' API). If not defined, 'localStorage' will be used as a default.
     **/
    function ExpiredStorage(storage) {

        // set default storage to localStorage
        storage = storage || (typeof localStorage !== "undefined" ? localStorage : null);

        // sanity check1: make sure we have a valid storage class to use.
        if (!storage) {
            throw new Error("ExpiredStorage: No storage base class provided and 'localStorage' is undefined! Please provide a valid base storage class.");
        }

        // sanity check2: make sure the storage class provide the required API.
        if (!(storage.setItem && storage.getItem && storage.removeItem && storage.clear)) {
            throw new Error("ExpiredStorage: Storage class  don't support one or more of the required API functions: getItem, setItem, removeItem or clear.");
        }

        // set storage class
        this._storage = storage;
    }

    /**
     * Define expired storage prototype.
     */
    ExpiredStorage.prototype = {

        // base storage class to use, must implement the localStorage API.
        _storage: null,

        // prefix to use when storing items timestamp
        _expiration_key_prefix: "__expired_storage_ts__",

        /**
         * Get current timestamp in seconds.
         **/
        getTimestamp: function() {
            return Math.floor(((new Date).getTime()) / 1000);
        },

        /**
         * Set item.
         * @param key: Item key to set (string).
         * @param value: Value to store (string).
         * @param expiration: Expiration time, in seconds. If not provided, will not set expiration time.
         * @param return: Storage.setItem() return code.
         **/
        setItem: function(key, value, expiration) {

            // set item
            var ret = this._storage.setItem(key, value);

            // set expiration timestamp (only if defined)
            if (expiration) {
                this.updateExpiration(key, expiration);
            }

            // return set value return value
            return ret;
        },

        /**
         * Get item.
         * @param key: Item key to get (string).
         * @return: Stored value, or undefined if not set / expired.
         */
        getItem: function(key) {

            // if expired remove item and return null
            if (this.isExpired(key)) {
                this.removeItem(key);
                return null;
            }

            // try to fetch and return item value
            return this._storage.getItem(key);
        },

        /**
        * Get item + metadata such as time left and if expired.
        * Even if item expired, will not remove it.
        * @param key: Item key to get (string).
        * @return: Dictionary with: {value, timeLeft, isExpired}
        */
        peek: function(key) {

            // get value and time left
            var ret = {
                value: this._storage.getItem(key),
                timeLeft: this.getTimeLeft(key),
            };

            // set if expired
            ret.isExpired = ret.timeLeft !== null && ret.timeLeft <= 0;

            // return data
            return ret;
        },

        /**
         * Get item time left to live.
         * @param key: Item key to get (string).
         * @return: Time left to expire (in seconds), or null if don't have expiration date.
         */
        getTimeLeft: function(key) {

            // try to fetch expiration time for key
            var expireTime = parseInt(this._storage.getItem(this._expiration_key_prefix + key));

            // if got expiration time return how much left to live
            if (expireTime && !isNaN(expireTime)) {

                return expireTime - this.getTimestamp();
            }

            // if don't have expiration time return null
            return null;
        },

        /**
         * Return if an item is expired (don't remove it, even if expired).
         * @param key: Item key to check (string).
         * @return: True if expired, False otherwise.
         */
        isExpired: function(key) {

            // get time left for item
            var timeLeft = this.getTimeLeft(key);

            // return if expired
            return timeLeft !== null && timeLeft <= 0;
        },

        /**
         * Update expiration time for an item (note: doesn't validate that the item is set).
         * @param key: Item key to update expiration for (string).
         * @param expiration: New expiration time in seconds to set.
         * @return: Storage.setItem() return code for setting new expiration.
         **/
        updateExpiration: function(key, expiration) {
            return this._storage.setItem(this._expiration_key_prefix + key, this.getTimestamp() + expiration);
        },

        /**
         * Remove an item.
         * @param key: Item key to remove (string).
         * @return: Storage.removeItem() return code.
         */
        removeItem: function(key) {

            // remove the item itself and its expiration time
            var ret = this._storage.removeItem(key);
            this._storage.removeItem(this._expiration_key_prefix + key);

            // return optional return code
            return ret;
        },

        /**
         * Set a json serializable value. This basically calls JSON.stringify on 'val' before setting it.
         * @param key: Item key to set (string).
         * @param value: Value to store (object, will be stringified).
         * @param expiration: Expiration time, in seconds. If not provided, will not set expiration time.
         * @param return: Storage.setItem() return code.
         **/
        setJson: function(key, val, expiration)
        {
            // special case - make sure not undefined, because it would just write "undefined" and crash on reading.
            if (val === undefined) {
                throw new Error("Cannot set undefined value as JSON!");
            }

            // set stringified value
            return this.setItem(key, JSON.stringify(val), expiration);
        },

        /**
         * Get a json serializable value. This basically calls JSON.parse on the returned value.
         * @param key: Item key to get (string).
         * @return: Stored value, or undefined if not set / expired.
         **/
        getJson: function(key)
        {
            // get value
            var val = this.getItem(key);

            // if null, return null
            if (val === null) {
                return null;
            }

            // parse and return value
            return JSON.parse(val);
        },

        /**
         * Get all keys in storage, not including internal keys used to store expiration.
         * @param: includeExpired: if true, will also include expired keys.
         * @return: Array with keys.
         */
        keys: function(includeExpired) {
            // create list to return
            var ret = [];

            // iterate over storage keys to find all non-expiration keys
            var that = this;
            this._iterKeys(function(storageKey) {

                // if its not a timestamp key, skip it
                if (storageKey.indexOf(that._expiration_key_prefix) !== 0) {

                    // add to return list, but only if including expired keys or if not expired yet
                    if (includeExpired || !that.isExpired(storageKey)) {
                        ret.push(storageKey);
                    }
                }
            });

            // return keys
            return ret;
        },

        /**
         * Iterate all keys in storage class.
         * @param callback: Function to call for every key, with a single param: key.
         */
        _iterKeys: function(callback) {

            // first check if storage define a 'keys()' function. if it does, use it
            if (typeof this._storage.keys === "function") {
                var keys = this._storage.keys();
                for (var i = 0; i < keys.length; ++i) {
                    callback(keys[i]);
                }
            }

            // if not supported try to use object.keys
            else if (typeof Object === "function" && Object.keys) {
                var keys = Object.keys(this._storage);
                for (var i = 0; i < keys.length; ++i) {
                    callback(keys[i]);
                }
            }

            // if not supported try to use iteration via length
            else if (this._storage.length !== undefined && typeof this._storage.key === "function") {

                // first build keys array, so this function will be delete-safe (eg if callback remove keys it won't cause problems due to index change)
                var keys = [];
                for (var i = 0, len = this._storage.length; i < len; ++i) {
                    keys.push(this._storage.key(i));
                }
                // now actually iterate keys
                for (var i = 0; i < keys.length; ++i) {
                    callback(keys[i]);
                }
            }

            // if both methods above didn't work, iterate on all keys in storage class hoping for the best..
            else {
                for (var storageKey in this._storage) {
                    callback(storageKey);
                }
            }
        },

        /**
         * Clear the entire storage and all keys in it.
         */
        clear: function() {
            this._storage.clear();
        },

        /**
         * Clear expired keys.
         * If you never call this function, expired keys will remain until you try to get them / reset a new value.
         *
         * @param return: List of removed keys due to expiration.
         */
        clearExpired: function() {

            // return list
            var ret = [];

            // get current timestamp
            var timestamp = this.getTimestamp();

            // iterate over storage keys to find all counters
            var that = this;
            this._iterKeys(function(storageKey) {

                // if its not a timestamp key, skip it
                if (storageKey.indexOf(that._expiration_key_prefix) === 0) {

                    // get item key
                    var itemKey = storageKey.substr(that._expiration_key_prefix.length);

                    // if expired remove it + the item
                    if (that.isExpired(itemKey)) {

                        that.removeItem(itemKey);
                        ret.push(itemKey);
                    }
                }
            });

            // return list with removed keys
            return ret;
        },
    };

    // add some api params
    ExpiredStorage.version = "1.0.2";
    ExpiredStorage.author = "Ronen Ness";
    ExpiredStorage.gitUrl = "https://github.com/RonenNess/ExpiredStorage";

    // AMD support.
    if (true) {
        !(__WEBPACK_AMD_DEFINE_RESULT__ = (function() {
            "use strict";
            return ExpiredStorage;
        }).call(exports, __webpack_require__, exports, module),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    }

    // support in CommonJS with module object
    else {}

    // also return the API object
    return ExpiredStorage;

})(this);

/***/ }),

/***/ 9042:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3831);
/* harmony import */ var _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6489);
/* harmony import */ var _keys_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7405);




/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return (0,_baseGetAllKeys_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(object, _keys_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, _getSymbols_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A);
}

/* harmony default export */ __webpack_exports__.A = (getAllKeys);


/***/ }),

/***/ 9137:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _getTag; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_getNative.js + 4 modules
var _getNative = __webpack_require__(8562);
// EXTERNAL MODULE: ./node_modules/lodash-es/_root.js
var _root = __webpack_require__(1917);
;// ./node_modules/lodash-es/_DataView.js



/* Built-in method references that are verified to be native. */
var DataView = (0,_getNative/* default */.A)(_root/* default */.A, 'DataView');

/* harmony default export */ var _DataView = (DataView);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Map.js
var _Map = __webpack_require__(8335);
;// ./node_modules/lodash-es/_Promise.js



/* Built-in method references that are verified to be native. */
var Promise = (0,_getNative/* default */.A)(_root/* default */.A, 'Promise');

/* harmony default export */ var _Promise = (Promise);

// EXTERNAL MODULE: ./node_modules/lodash-es/_Set.js
var _Set = __webpack_require__(9857);
;// ./node_modules/lodash-es/_WeakMap.js



/* Built-in method references that are verified to be native. */
var WeakMap = (0,_getNative/* default */.A)(_root/* default */.A, 'WeakMap');

/* harmony default export */ var _WeakMap = (WeakMap);

// EXTERNAL MODULE: ./node_modules/lodash-es/_baseGetTag.js + 2 modules
var _baseGetTag = __webpack_require__(2383);
// EXTERNAL MODULE: ./node_modules/lodash-es/_toSource.js
var _toSource = __webpack_require__(1121);
;// ./node_modules/lodash-es/_getTag.js








/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = (0,_toSource/* default */.A)(_DataView),
    mapCtorString = (0,_toSource/* default */.A)(_Map/* default */.A),
    promiseCtorString = (0,_toSource/* default */.A)(_Promise),
    setCtorString = (0,_toSource/* default */.A)(_Set/* default */.A),
    weakMapCtorString = (0,_toSource/* default */.A)(_WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = _baseGetTag/* default */.A;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((_DataView && getTag(new _DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (_Map/* default */.A && getTag(new _Map/* default */.A) != mapTag) ||
    (_Promise && getTag(_Promise.resolve()) != promiseTag) ||
    (_Set/* default */.A && getTag(new _Set/* default */.A) != setTag) ||
    (_WeakMap && getTag(new _WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = (0,_baseGetTag/* default */.A)(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? (0,_toSource/* default */.A)(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

/* harmony default export */ var _getTag = (getTag);


/***/ }),

/***/ 9469:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ _ListCache; }
});

;// ./node_modules/lodash-es/_listCacheClear.js
/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

/* harmony default export */ var _listCacheClear = (listCacheClear);

// EXTERNAL MODULE: ./node_modules/lodash-es/eq.js
var eq = __webpack_require__(6984);
;// ./node_modules/lodash-es/_assocIndexOf.js


/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if ((0,eq/* default */.A)(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

/* harmony default export */ var _assocIndexOf = (assocIndexOf);

;// ./node_modules/lodash-es/_listCacheDelete.js


/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

/* harmony default export */ var _listCacheDelete = (listCacheDelete);

;// ./node_modules/lodash-es/_listCacheGet.js


/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

/* harmony default export */ var _listCacheGet = (listCacheGet);

;// ./node_modules/lodash-es/_listCacheHas.js


/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return _assocIndexOf(this.__data__, key) > -1;
}

/* harmony default export */ var _listCacheHas = (listCacheHas);

;// ./node_modules/lodash-es/_listCacheSet.js


/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = _assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

/* harmony default export */ var _listCacheSet = (listCacheSet);

;// ./node_modules/lodash-es/_ListCache.js






/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = _listCacheClear;
ListCache.prototype['delete'] = _listCacheDelete;
ListCache.prototype.get = _listCacheGet;
ListCache.prototype.has = _listCacheHas;
ListCache.prototype.set = _listCacheSet;

/* harmony default export */ var _ListCache = (ListCache);


/***/ }),

/***/ 9610:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2383);
/* harmony import */ var _isObject_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3149);



/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!(0,_isObject_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

/* harmony default export */ __webpack_exports__.A = (isFunction);


/***/ }),

/***/ 9703:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2383);
/* harmony import */ var _isArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2049);
/* harmony import */ var _isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3098);




/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!(0,_isArray_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(value) && (0,_isObjectLike_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A)(value) && (0,_baseGetTag_js__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .A)(value) == stringTag);
}

/* harmony default export */ __webpack_exports__.A = (isString);


/***/ }),

/***/ 9759:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

/* harmony default export */ __webpack_exports__.A = (copyArray);


/***/ }),

/***/ 9857:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _getNative_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8562);
/* harmony import */ var _root_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1917);



/* Built-in method references that are verified to be native. */
var Set = (0,_getNative_js__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .A)(_root_js__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .A, 'Set');

/* harmony default export */ __webpack_exports__.A = (Set);


/***/ }),

/***/ 9959:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__) {

"use strict";
/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

/* harmony default export */ __webpack_exports__.A = (setToArray);


/***/ }),

/***/ 9982:
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

"use strict";


if (true) {
  module.exports = __webpack_require__(7463);
} else {}


/***/ }),

/***/ 9999:
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: function() { return /* binding */ lodash_es_keysIn; }
});

// EXTERNAL MODULE: ./node_modules/lodash-es/_arrayLikeKeys.js + 1 modules
var _arrayLikeKeys = __webpack_require__(2505);
// EXTERNAL MODULE: ./node_modules/lodash-es/isObject.js
var isObject = __webpack_require__(3149);
// EXTERNAL MODULE: ./node_modules/lodash-es/_isPrototype.js
var _isPrototype = __webpack_require__(7271);
;// ./node_modules/lodash-es/_nativeKeysIn.js
/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _nativeKeysIn = (nativeKeysIn);

;// ./node_modules/lodash-es/_baseKeysIn.js




/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var _baseKeysIn_hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!(0,isObject/* default */.A)(object)) {
    return _nativeKeysIn(object);
  }
  var isProto = (0,_isPrototype/* default */.A)(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !_baseKeysIn_hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

/* harmony default export */ var _baseKeysIn = (baseKeysIn);

// EXTERNAL MODULE: ./node_modules/lodash-es/isArrayLike.js
var isArrayLike = __webpack_require__(8446);
;// ./node_modules/lodash-es/keysIn.js




/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return (0,isArrayLike/* default */.A)(object) ? (0,_arrayLikeKeys/* default */.A)(object, true) : _baseKeysIn(object);
}

/* harmony default export */ var lodash_es_keysIn = (keysIn);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	!function() {
/******/ 		var deferred = [];
/******/ 		__webpack_require__.O = function(result, chunkIds, fn, priority) {
/******/ 			if(chunkIds) {
/******/ 				priority = priority || 0;
/******/ 				for(var i = deferred.length; i > 0 && deferred[i - 1][2] > priority; i--) deferred[i] = deferred[i - 1];
/******/ 				deferred[i] = [chunkIds, fn, priority];
/******/ 				return;
/******/ 			}
/******/ 			var notFulfilled = Infinity;
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				var chunkIds = deferred[i][0];
/******/ 				var fn = deferred[i][1];
/******/ 				var priority = deferred[i][2];
/******/ 				var fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if ((priority & 1 === 0 || notFulfilled >= priority) && Object.keys(__webpack_require__.O).every(function(key) { return __webpack_require__.O[key](chunkIds[j]); })) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 						if(priority < notFulfilled) notFulfilled = priority;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					var r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	!function() {
/******/ 		var getProto = Object.getPrototypeOf ? function(obj) { return Object.getPrototypeOf(obj); } : function(obj) { return obj.__proto__; };
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(function(key) { def[key] = function() { return value[key]; }; });
/******/ 			}
/******/ 			def['default'] = function() { return value; };
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	!function() {
/******/ 		__webpack_require__.nmd = function(module) {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	!function() {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			57: 0,
/******/ 			646: 0,
/******/ 			783: 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = function(chunkId) { return installedChunks[chunkId] === 0; };
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = function(parentChunkLoadingFunction, data) {
/******/ 			var chunkIds = data[0];
/******/ 			var moreModules = data[1];
/******/ 			var runtime = data[2];
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some(function(id) { return installedChunks[id] !== 0; })) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	}();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	__webpack_require__.O(undefined, [170,303,646,783,975,58], function() { return __webpack_require__(799); })
/******/ 	var __webpack_exports__ = __webpack_require__.O(undefined, [170,303,646,783,975,58], function() { return __webpack_require__(6471); })
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;