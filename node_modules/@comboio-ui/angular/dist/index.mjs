var __create = Object.create;
var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result)
    __defProp(target, key, result);
  return result;
};

// ../tokens/dist/index.js
var require_dist = __commonJS({
  "../tokens/dist/index.js"(exports, module) {
    "use strict";
    var __defProp2 = Object.defineProperty;
    var __getOwnPropDesc2 = Object.getOwnPropertyDescriptor;
    var __getOwnPropNames2 = Object.getOwnPropertyNames;
    var __hasOwnProp2 = Object.prototype.hasOwnProperty;
    var __export = (target, all) => {
      for (var name in all)
        __defProp2(target, name, { get: all[name], enumerable: true });
    };
    var __copyProps2 = (to, from, except, desc) => {
      if (from && typeof from === "object" || typeof from === "function") {
        for (let key of __getOwnPropNames2(from))
          if (!__hasOwnProp2.call(to, key) && key !== except)
            __defProp2(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc2(from, key)) || desc.enumerable });
      }
      return to;
    };
    var __toCommonJS = (mod) => __copyProps2(__defProp2({}, "__esModule", { value: true }), mod);
    var src_exports = {};
    __export(src_exports, {
      colors: () => colors2,
      fontSizes: () => fontSizes,
      fontWeights: () => fontWeights,
      fonts: () => fonts,
      lineHeights: () => lineHeights,
      radii: () => radii,
      space: () => space
    });
    module.exports = __toCommonJS(src_exports);
    var colors2 = {
      white: "#FFF",
      black: "#000",
      teste: "#044040",
      gray100: "#FCFCFC",
      gray200: "#E0E1E9",
      gray400: "#484949",
      gray500: "#1A1B1C",
      gray600: "#181919",
      gray700: "#0B0B0C",
      primary50: "#E4EBFD",
      primary300: "#6B94F2",
      primary400: "#2B65EC",
      primary500: "#0046EB"
    };
    var space = {
      1: "0.25rem",
      2: "0.5rem",
      3: "0.75rem",
      4: "1rem",
      5: "1.25rem",
      6: "1.5rem",
      7: "1.75rem",
      8: "2rem",
      10: "2.5rem",
      12: "3rem",
      16: "4rem",
      20: "5rem",
      40: "10rem",
      64: "16rem",
      80: "20rem"
    };
    var radii = {
      px: "1px",
      xs: "4px",
      sm: "6px",
      md: "8px",
      lg: "16px",
      full: "99999px"
    };
    var fonts = {
      default: "Poppins, sans-serif",
      code: "monospace"
    };
    var fontSizes = {
      xxs: "0.625rem",
      xs: "0.75rem",
      sm: "0.875rem",
      md: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "3rem",
      "7xl": "4rem",
      "8xl": "4.5rem",
      "9xl": "6rem"
    };
    var fontWeights = {
      regular: "400",
      medium: "500",
      bold: "700"
    };
    var lineHeights = {
      shorter: "125%",
      short: "140%",
      base: "160%",
      tall: "180%"
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isFunction.js
var require_isFunction = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isFunction.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isFunction = void 0;
    function isFunction(value) {
      return typeof value === "function";
    }
    exports.isFunction = isFunction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js
var require_createErrorClass = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/createErrorClass.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createErrorClass = void 0;
    function createErrorClass(createImpl) {
      var _super = function(instance) {
        Error.call(instance);
        instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
    }
    exports.createErrorClass = createErrorClass;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js
var require_UnsubscriptionError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/UnsubscriptionError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.UnsubscriptionError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.UnsubscriptionError = createErrorClass_1.createErrorClass(function(_super) {
      return function UnsubscriptionErrorImpl(errors) {
        _super(this);
        this.message = errors ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function(err, i) {
          return i + 1 + ") " + err.toString();
        }).join("\n  ") : "";
        this.name = "UnsubscriptionError";
        this.errors = errors;
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/arrRemove.js
var require_arrRemove = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/arrRemove.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.arrRemove = void 0;
    function arrRemove(arr, item) {
      if (arr) {
        var index = arr.indexOf(item);
        0 <= index && arr.splice(index, 1);
      }
    }
    exports.arrRemove = arrRemove;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Subscription.js
var require_Subscription = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Subscription.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isSubscription = exports.EMPTY_SUBSCRIPTION = exports.Subscription = void 0;
    var isFunction_1 = require_isFunction();
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    var arrRemove_1 = require_arrRemove();
    var Subscription2 = function() {
      function Subscription3(initialTeardown) {
        this.initialTeardown = initialTeardown;
        this.closed = false;
        this._parentage = null;
        this._finalizers = null;
      }
      Subscription3.prototype.unsubscribe = function() {
        var e_1, _a2, e_2, _b;
        var errors;
        if (!this.closed) {
          this.closed = true;
          var _parentage = this._parentage;
          if (_parentage) {
            this._parentage = null;
            if (Array.isArray(_parentage)) {
              try {
                for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                  var parent_1 = _parentage_1_1.value;
                  parent_1.remove(this);
                }
              } catch (e_1_1) {
                e_1 = { error: e_1_1 };
              } finally {
                try {
                  if (_parentage_1_1 && !_parentage_1_1.done && (_a2 = _parentage_1.return))
                    _a2.call(_parentage_1);
                } finally {
                  if (e_1)
                    throw e_1.error;
                }
              }
            } else {
              _parentage.remove(this);
            }
          }
          var initialFinalizer = this.initialTeardown;
          if (isFunction_1.isFunction(initialFinalizer)) {
            try {
              initialFinalizer();
            } catch (e) {
              errors = e instanceof UnsubscriptionError_1.UnsubscriptionError ? e.errors : [e];
            }
          }
          var _finalizers = this._finalizers;
          if (_finalizers) {
            this._finalizers = null;
            try {
              for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                var finalizer = _finalizers_1_1.value;
                try {
                  execFinalizer(finalizer);
                } catch (err) {
                  errors = errors !== null && errors !== void 0 ? errors : [];
                  if (err instanceof UnsubscriptionError_1.UnsubscriptionError) {
                    errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                  } else {
                    errors.push(err);
                  }
                }
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return))
                  _b.call(_finalizers_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
          if (errors) {
            throw new UnsubscriptionError_1.UnsubscriptionError(errors);
          }
        }
      };
      Subscription3.prototype.add = function(teardown) {
        var _a2;
        if (teardown && teardown !== this) {
          if (this.closed) {
            execFinalizer(teardown);
          } else {
            if (teardown instanceof Subscription3) {
              if (teardown.closed || teardown._hasParent(this)) {
                return;
              }
              teardown._addParent(this);
            }
            (this._finalizers = (_a2 = this._finalizers) !== null && _a2 !== void 0 ? _a2 : []).push(teardown);
          }
        }
      };
      Subscription3.prototype._hasParent = function(parent) {
        var _parentage = this._parentage;
        return _parentage === parent || Array.isArray(_parentage) && _parentage.includes(parent);
      };
      Subscription3.prototype._addParent = function(parent) {
        var _parentage = this._parentage;
        this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription3.prototype._removeParent = function(parent) {
        var _parentage = this._parentage;
        if (_parentage === parent) {
          this._parentage = null;
        } else if (Array.isArray(_parentage)) {
          arrRemove_1.arrRemove(_parentage, parent);
        }
      };
      Subscription3.prototype.remove = function(teardown) {
        var _finalizers = this._finalizers;
        _finalizers && arrRemove_1.arrRemove(_finalizers, teardown);
        if (teardown instanceof Subscription3) {
          teardown._removeParent(this);
        }
      };
      Subscription3.EMPTY = function() {
        var empty = new Subscription3();
        empty.closed = true;
        return empty;
      }();
      return Subscription3;
    }();
    exports.Subscription = Subscription2;
    exports.EMPTY_SUBSCRIPTION = Subscription2.EMPTY;
    function isSubscription(value) {
      return value instanceof Subscription2 || value && "closed" in value && isFunction_1.isFunction(value.remove) && isFunction_1.isFunction(value.add) && isFunction_1.isFunction(value.unsubscribe);
    }
    exports.isSubscription = isSubscription;
    function execFinalizer(finalizer) {
      if (isFunction_1.isFunction(finalizer)) {
        finalizer();
      } else {
        finalizer.unsubscribe();
      }
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/config.js
var require_config = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/config.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.config = void 0;
    exports.config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: void 0,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js
var require_timeoutProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/timeoutProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeoutProvider = void 0;
    exports.timeoutProvider = {
      setTimeout: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.timeoutProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setTimeout) {
          return delegate.setTimeout.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setTimeout.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function(handle) {
        var delegate = exports.timeoutProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js
var require_reportUnhandledError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/reportUnhandledError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reportUnhandledError = void 0;
    var config_1 = require_config();
    var timeoutProvider_1 = require_timeoutProvider();
    function reportUnhandledError(err) {
      timeoutProvider_1.timeoutProvider.setTimeout(function() {
        var onUnhandledError = config_1.config.onUnhandledError;
        if (onUnhandledError) {
          onUnhandledError(err);
        } else {
          throw err;
        }
      });
    }
    exports.reportUnhandledError = reportUnhandledError;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/noop.js
var require_noop = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/noop.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.noop = void 0;
    function noop2() {
    }
    exports.noop = noop2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/NotificationFactories.js
var require_NotificationFactories = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/NotificationFactories.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createNotification = exports.nextNotification = exports.errorNotification = exports.COMPLETE_NOTIFICATION = void 0;
    exports.COMPLETE_NOTIFICATION = function() {
      return createNotification("C", void 0, void 0);
    }();
    function errorNotification(error) {
      return createNotification("E", void 0, error);
    }
    exports.errorNotification = errorNotification;
    function nextNotification(value) {
      return createNotification("N", value, void 0);
    }
    exports.nextNotification = nextNotification;
    function createNotification(kind, value, error) {
      return {
        kind,
        value,
        error
      };
    }
    exports.createNotification = createNotification;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/errorContext.js
var require_errorContext = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/errorContext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.captureError = exports.errorContext = void 0;
    var config_1 = require_config();
    var context = null;
    function errorContext(cb) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        var isRoot = !context;
        if (isRoot) {
          context = { errorThrown: false, error: null };
        }
        cb();
        if (isRoot) {
          var _a2 = context, errorThrown = _a2.errorThrown, error = _a2.error;
          context = null;
          if (errorThrown) {
            throw error;
          }
        }
      } else {
        cb();
      }
    }
    exports.errorContext = errorContext;
    function captureError(err) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling && context) {
        context.errorThrown = true;
        context.error = err;
      }
    }
    exports.captureError = captureError;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Subscriber.js
var require_Subscriber = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Subscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EMPTY_OBSERVER = exports.SafeSubscriber = exports.Subscriber = void 0;
    var isFunction_1 = require_isFunction();
    var Subscription_1 = require_Subscription();
    var config_1 = require_config();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var noop_1 = require_noop();
    var NotificationFactories_1 = require_NotificationFactories();
    var timeoutProvider_1 = require_timeoutProvider();
    var errorContext_1 = require_errorContext();
    var Subscriber = function(_super) {
      __extends(Subscriber2, _super);
      function Subscriber2(destination) {
        var _this = _super.call(this) || this;
        _this.isStopped = false;
        if (destination) {
          _this.destination = destination;
          if (Subscription_1.isSubscription(destination)) {
            destination.add(_this);
          }
        } else {
          _this.destination = exports.EMPTY_OBSERVER;
        }
        return _this;
      }
      Subscriber2.create = function(next, error, complete) {
        return new SafeSubscriber(next, error, complete);
      };
      Subscriber2.prototype.next = function(value) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.nextNotification(value), this);
        } else {
          this._next(value);
        }
      };
      Subscriber2.prototype.error = function(err) {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.errorNotification(err), this);
        } else {
          this.isStopped = true;
          this._error(err);
        }
      };
      Subscriber2.prototype.complete = function() {
        if (this.isStopped) {
          handleStoppedNotification(NotificationFactories_1.COMPLETE_NOTIFICATION, this);
        } else {
          this.isStopped = true;
          this._complete();
        }
      };
      Subscriber2.prototype.unsubscribe = function() {
        if (!this.closed) {
          this.isStopped = true;
          _super.prototype.unsubscribe.call(this);
          this.destination = null;
        }
      };
      Subscriber2.prototype._next = function(value) {
        this.destination.next(value);
      };
      Subscriber2.prototype._error = function(err) {
        try {
          this.destination.error(err);
        } finally {
          this.unsubscribe();
        }
      };
      Subscriber2.prototype._complete = function() {
        try {
          this.destination.complete();
        } finally {
          this.unsubscribe();
        }
      };
      return Subscriber2;
    }(Subscription_1.Subscription);
    exports.Subscriber = Subscriber;
    var _bind = Function.prototype.bind;
    function bind(fn, thisArg) {
      return _bind.call(fn, thisArg);
    }
    var ConsumerObserver = function() {
      function ConsumerObserver2(partialObserver) {
        this.partialObserver = partialObserver;
      }
      ConsumerObserver2.prototype.next = function(value) {
        var partialObserver = this.partialObserver;
        if (partialObserver.next) {
          try {
            partialObserver.next(value);
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      ConsumerObserver2.prototype.error = function(err) {
        var partialObserver = this.partialObserver;
        if (partialObserver.error) {
          try {
            partialObserver.error(err);
          } catch (error) {
            handleUnhandledError(error);
          }
        } else {
          handleUnhandledError(err);
        }
      };
      ConsumerObserver2.prototype.complete = function() {
        var partialObserver = this.partialObserver;
        if (partialObserver.complete) {
          try {
            partialObserver.complete();
          } catch (error) {
            handleUnhandledError(error);
          }
        }
      };
      return ConsumerObserver2;
    }();
    var SafeSubscriber = function(_super) {
      __extends(SafeSubscriber2, _super);
      function SafeSubscriber2(observerOrNext, error, complete) {
        var _this = _super.call(this) || this;
        var partialObserver;
        if (isFunction_1.isFunction(observerOrNext) || !observerOrNext) {
          partialObserver = {
            next: observerOrNext !== null && observerOrNext !== void 0 ? observerOrNext : void 0,
            error: error !== null && error !== void 0 ? error : void 0,
            complete: complete !== null && complete !== void 0 ? complete : void 0
          };
        } else {
          var context_1;
          if (_this && config_1.config.useDeprecatedNextContext) {
            context_1 = Object.create(observerOrNext);
            context_1.unsubscribe = function() {
              return _this.unsubscribe();
            };
            partialObserver = {
              next: observerOrNext.next && bind(observerOrNext.next, context_1),
              error: observerOrNext.error && bind(observerOrNext.error, context_1),
              complete: observerOrNext.complete && bind(observerOrNext.complete, context_1)
            };
          } else {
            partialObserver = observerOrNext;
          }
        }
        _this.destination = new ConsumerObserver(partialObserver);
        return _this;
      }
      return SafeSubscriber2;
    }(Subscriber);
    exports.SafeSubscriber = SafeSubscriber;
    function handleUnhandledError(error) {
      if (config_1.config.useDeprecatedSynchronousErrorHandling) {
        errorContext_1.captureError(error);
      } else {
        reportUnhandledError_1.reportUnhandledError(error);
      }
    }
    function defaultErrorHandler(err) {
      throw err;
    }
    function handleStoppedNotification(notification, subscriber) {
      var onStoppedNotification = config_1.config.onStoppedNotification;
      onStoppedNotification && timeoutProvider_1.timeoutProvider.setTimeout(function() {
        return onStoppedNotification(notification, subscriber);
      });
    }
    exports.EMPTY_OBSERVER = {
      closed: true,
      next: noop_1.noop,
      error: defaultErrorHandler,
      complete: noop_1.noop
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/symbol/observable.js
var require_observable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/symbol/observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observable = void 0;
    exports.observable = function() {
      return typeof Symbol === "function" && Symbol.observable || "@@observable";
    }();
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/identity.js
var require_identity = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/identity.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.identity = void 0;
    function identity(x) {
      return x;
    }
    exports.identity = identity;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/pipe.js
var require_pipe = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/pipe.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pipeFromArray = exports.pipe = void 0;
    var identity_1 = require_identity();
    function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
    }
    exports.pipe = pipe;
    function pipeFromArray(fns) {
      if (fns.length === 0) {
        return identity_1.identity;
      }
      if (fns.length === 1) {
        return fns[0];
      }
      return function piped(input) {
        return fns.reduce(function(prev, fn) {
          return fn(prev);
        }, input);
      };
    }
    exports.pipeFromArray = pipeFromArray;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Observable.js
var require_Observable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Observable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Observable = void 0;
    var Subscriber_1 = require_Subscriber();
    var Subscription_1 = require_Subscription();
    var observable_1 = require_observable();
    var pipe_1 = require_pipe();
    var config_1 = require_config();
    var isFunction_1 = require_isFunction();
    var errorContext_1 = require_errorContext();
    var Observable2 = function() {
      function Observable3(subscribe) {
        if (subscribe) {
          this._subscribe = subscribe;
        }
      }
      Observable3.prototype.lift = function(operator) {
        var observable = new Observable3();
        observable.source = this;
        observable.operator = operator;
        return observable;
      };
      Observable3.prototype.subscribe = function(observerOrNext, error, complete) {
        var _this = this;
        var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new Subscriber_1.SafeSubscriber(observerOrNext, error, complete);
        errorContext_1.errorContext(function() {
          var _a2 = _this, operator = _a2.operator, source = _a2.source;
          subscriber.add(operator ? operator.call(subscriber, source) : source ? _this._subscribe(subscriber) : _this._trySubscribe(subscriber));
        });
        return subscriber;
      };
      Observable3.prototype._trySubscribe = function(sink) {
        try {
          return this._subscribe(sink);
        } catch (err) {
          sink.error(err);
        }
      };
      Observable3.prototype.forEach = function(next, promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var subscriber = new Subscriber_1.SafeSubscriber({
            next: function(value) {
              try {
                next(value);
              } catch (err) {
                reject(err);
                subscriber.unsubscribe();
              }
            },
            error: reject,
            complete: resolve
          });
          _this.subscribe(subscriber);
        });
      };
      Observable3.prototype._subscribe = function(subscriber) {
        var _a2;
        return (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber);
      };
      Observable3.prototype[observable_1.observable] = function() {
        return this;
      };
      Observable3.prototype.pipe = function() {
        var operations = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          operations[_i] = arguments[_i];
        }
        return pipe_1.pipeFromArray(operations)(this);
      };
      Observable3.prototype.toPromise = function(promiseCtor) {
        var _this = this;
        promiseCtor = getPromiseCtor(promiseCtor);
        return new promiseCtor(function(resolve, reject) {
          var value;
          _this.subscribe(function(x) {
            return value = x;
          }, function(err) {
            return reject(err);
          }, function() {
            return resolve(value);
          });
        });
      };
      Observable3.create = function(subscribe) {
        return new Observable3(subscribe);
      };
      return Observable3;
    }();
    exports.Observable = Observable2;
    function getPromiseCtor(promiseCtor) {
      var _a2;
      return (_a2 = promiseCtor !== null && promiseCtor !== void 0 ? promiseCtor : config_1.config.Promise) !== null && _a2 !== void 0 ? _a2 : Promise;
    }
    function isObserver(value) {
      return value && isFunction_1.isFunction(value.next) && isFunction_1.isFunction(value.error) && isFunction_1.isFunction(value.complete);
    }
    function isSubscriber(value) {
      return value && value instanceof Subscriber_1.Subscriber || isObserver(value) && Subscription_1.isSubscription(value);
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/lift.js
var require_lift = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/lift.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.operate = exports.hasLift = void 0;
    var isFunction_1 = require_isFunction();
    function hasLift(source) {
      return isFunction_1.isFunction(source === null || source === void 0 ? void 0 : source.lift);
    }
    exports.hasLift = hasLift;
    function operate(init) {
      return function(source) {
        if (hasLift(source)) {
          return source.lift(function(liftedSource) {
            try {
              return init(liftedSource, this);
            } catch (err) {
              this.error(err);
            }
          });
        }
        throw new TypeError("Unable to lift unknown Observable type");
      };
    }
    exports.operate = operate;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js
var require_OperatorSubscriber = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/OperatorSubscriber.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.OperatorSubscriber = exports.createOperatorSubscriber = void 0;
    var Subscriber_1 = require_Subscriber();
    function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
    }
    exports.createOperatorSubscriber = createOperatorSubscriber;
    var OperatorSubscriber = function(_super) {
      __extends(OperatorSubscriber2, _super);
      function OperatorSubscriber2(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
        var _this = _super.call(this, destination) || this;
        _this.onFinalize = onFinalize;
        _this.shouldUnsubscribe = shouldUnsubscribe;
        _this._next = onNext ? function(value) {
          try {
            onNext(value);
          } catch (err) {
            destination.error(err);
          }
        } : _super.prototype._next;
        _this._error = onError ? function(err) {
          try {
            onError(err);
          } catch (err2) {
            destination.error(err2);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._error;
        _this._complete = onComplete ? function() {
          try {
            onComplete();
          } catch (err) {
            destination.error(err);
          } finally {
            this.unsubscribe();
          }
        } : _super.prototype._complete;
        return _this;
      }
      OperatorSubscriber2.prototype.unsubscribe = function() {
        var _a2;
        if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
          var closed_1 = this.closed;
          _super.prototype.unsubscribe.call(this);
          !closed_1 && ((_a2 = this.onFinalize) === null || _a2 === void 0 ? void 0 : _a2.call(this));
        }
      };
      return OperatorSubscriber2;
    }(Subscriber_1.Subscriber);
    exports.OperatorSubscriber = OperatorSubscriber;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/refCount.js
var require_refCount = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/refCount.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.refCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function refCount() {
      return lift_1.operate(function(source, subscriber) {
        var connection = null;
        source._refCount++;
        var refCounter = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, void 0, function() {
          if (!source || source._refCount <= 0 || 0 < --source._refCount) {
            connection = null;
            return;
          }
          var sharedConnection = source._connection;
          var conn = connection;
          connection = null;
          if (sharedConnection && (!conn || sharedConnection === conn)) {
            sharedConnection.unsubscribe();
          }
          subscriber.unsubscribe();
        });
        source.subscribe(refCounter);
        if (!refCounter.closed) {
          connection = source.connect();
        }
      });
    }
    exports.refCount = refCount;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js
var require_ConnectableObservable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/ConnectableObservable.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ConnectableObservable = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var refCount_1 = require_refCount();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    var ConnectableObservable = function(_super) {
      __extends(ConnectableObservable2, _super);
      function ConnectableObservable2(source, subjectFactory) {
        var _this = _super.call(this) || this;
        _this.source = source;
        _this.subjectFactory = subjectFactory;
        _this._subject = null;
        _this._refCount = 0;
        _this._connection = null;
        if (lift_1.hasLift(source)) {
          _this.lift = source.lift;
        }
        return _this;
      }
      ConnectableObservable2.prototype._subscribe = function(subscriber) {
        return this.getSubject().subscribe(subscriber);
      };
      ConnectableObservable2.prototype.getSubject = function() {
        var subject = this._subject;
        if (!subject || subject.isStopped) {
          this._subject = this.subjectFactory();
        }
        return this._subject;
      };
      ConnectableObservable2.prototype._teardown = function() {
        this._refCount = 0;
        var _connection = this._connection;
        this._subject = this._connection = null;
        _connection === null || _connection === void 0 ? void 0 : _connection.unsubscribe();
      };
      ConnectableObservable2.prototype.connect = function() {
        var _this = this;
        var connection = this._connection;
        if (!connection) {
          connection = this._connection = new Subscription_1.Subscription();
          var subject_1 = this.getSubject();
          connection.add(this.source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subject_1, void 0, function() {
            _this._teardown();
            subject_1.complete();
          }, function(err) {
            _this._teardown();
            subject_1.error(err);
          }, function() {
            return _this._teardown();
          })));
          if (connection.closed) {
            this._connection = null;
            connection = Subscription_1.Subscription.EMPTY;
          }
        }
        return connection;
      };
      ConnectableObservable2.prototype.refCount = function() {
        return refCount_1.refCount()(this);
      };
      return ConnectableObservable2;
    }(Observable_1.Observable);
    exports.ConnectableObservable = ConnectableObservable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js
var require_performanceTimestampProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/performanceTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.performanceTimestampProvider = void 0;
    exports.performanceTimestampProvider = {
      now: function() {
        return (exports.performanceTimestampProvider.delegate || performance).now();
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js
var require_animationFrameProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrameProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrameProvider = void 0;
    var Subscription_1 = require_Subscription();
    exports.animationFrameProvider = {
      schedule: function(callback) {
        var request = requestAnimationFrame;
        var cancel = cancelAnimationFrame;
        var delegate = exports.animationFrameProvider.delegate;
        if (delegate) {
          request = delegate.requestAnimationFrame;
          cancel = delegate.cancelAnimationFrame;
        }
        var handle = request(function(timestamp) {
          cancel = void 0;
          callback(timestamp);
        });
        return new Subscription_1.Subscription(function() {
          return cancel === null || cancel === void 0 ? void 0 : cancel(handle);
        });
      },
      requestAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.requestAnimationFrame) || requestAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      cancelAnimationFrame: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.animationFrameProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.cancelAnimationFrame) || cancelAnimationFrame).apply(void 0, __spreadArray([], __read(args)));
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js
var require_animationFrames = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/dom/animationFrames.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrames = void 0;
    var Observable_1 = require_Observable();
    var performanceTimestampProvider_1 = require_performanceTimestampProvider();
    var animationFrameProvider_1 = require_animationFrameProvider();
    function animationFrames(timestampProvider) {
      return timestampProvider ? animationFramesFactory(timestampProvider) : DEFAULT_ANIMATION_FRAMES;
    }
    exports.animationFrames = animationFrames;
    function animationFramesFactory(timestampProvider) {
      return new Observable_1.Observable(function(subscriber) {
        var provider = timestampProvider || performanceTimestampProvider_1.performanceTimestampProvider;
        var start = provider.now();
        var id = 0;
        var run = function() {
          if (!subscriber.closed) {
            id = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function(timestamp) {
              id = 0;
              var now = provider.now();
              subscriber.next({
                timestamp: timestampProvider ? now : timestamp,
                elapsed: now - start
              });
              run();
            });
          }
        };
        run();
        return function() {
          if (id) {
            animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          }
        };
      });
    }
    var DEFAULT_ANIMATION_FRAMES = animationFramesFactory();
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js
var require_ObjectUnsubscribedError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/ObjectUnsubscribedError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ObjectUnsubscribedError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ObjectUnsubscribedError = createErrorClass_1.createErrorClass(function(_super) {
      return function ObjectUnsubscribedErrorImpl() {
        _super(this);
        this.name = "ObjectUnsubscribedError";
        this.message = "object unsubscribed";
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Subject.js
var require_Subject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Subject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnonymousSubject = exports.Subject = void 0;
    var Observable_1 = require_Observable();
    var Subscription_1 = require_Subscription();
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    var arrRemove_1 = require_arrRemove();
    var errorContext_1 = require_errorContext();
    var Subject2 = function(_super) {
      __extends(Subject3, _super);
      function Subject3() {
        var _this = _super.call(this) || this;
        _this.closed = false;
        _this.currentObservers = null;
        _this.observers = [];
        _this.isStopped = false;
        _this.hasError = false;
        _this.thrownError = null;
        return _this;
      }
      Subject3.prototype.lift = function(operator) {
        var subject = new AnonymousSubject(this, this);
        subject.operator = operator;
        return subject;
      };
      Subject3.prototype._throwIfClosed = function() {
        if (this.closed) {
          throw new ObjectUnsubscribedError_1.ObjectUnsubscribedError();
        }
      };
      Subject3.prototype.next = function(value) {
        var _this = this;
        errorContext_1.errorContext(function() {
          var e_1, _a2;
          _this._throwIfClosed();
          if (!_this.isStopped) {
            if (!_this.currentObservers) {
              _this.currentObservers = Array.from(_this.observers);
            }
            try {
              for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                var observer = _c.value;
                observer.next(value);
              }
            } catch (e_1_1) {
              e_1 = { error: e_1_1 };
            } finally {
              try {
                if (_c && !_c.done && (_a2 = _b.return))
                  _a2.call(_b);
              } finally {
                if (e_1)
                  throw e_1.error;
              }
            }
          }
        });
      };
      Subject3.prototype.error = function(err) {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.hasError = _this.isStopped = true;
            _this.thrownError = err;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().error(err);
            }
          }
        });
      };
      Subject3.prototype.complete = function() {
        var _this = this;
        errorContext_1.errorContext(function() {
          _this._throwIfClosed();
          if (!_this.isStopped) {
            _this.isStopped = true;
            var observers = _this.observers;
            while (observers.length) {
              observers.shift().complete();
            }
          }
        });
      };
      Subject3.prototype.unsubscribe = function() {
        this.isStopped = this.closed = true;
        this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject3.prototype, "observed", {
        get: function() {
          var _a2;
          return ((_a2 = this.observers) === null || _a2 === void 0 ? void 0 : _a2.length) > 0;
        },
        enumerable: false,
        configurable: true
      });
      Subject3.prototype._trySubscribe = function(subscriber) {
        this._throwIfClosed();
        return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject3.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._checkFinalizedStatuses(subscriber);
        return this._innerSubscribe(subscriber);
      };
      Subject3.prototype._innerSubscribe = function(subscriber) {
        var _this = this;
        var _a2 = this, hasError = _a2.hasError, isStopped = _a2.isStopped, observers = _a2.observers;
        if (hasError || isStopped) {
          return Subscription_1.EMPTY_SUBSCRIPTION;
        }
        this.currentObservers = null;
        observers.push(subscriber);
        return new Subscription_1.Subscription(function() {
          _this.currentObservers = null;
          arrRemove_1.arrRemove(observers, subscriber);
        });
      };
      Subject3.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, isStopped = _a2.isStopped;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped) {
          subscriber.complete();
        }
      };
      Subject3.prototype.asObservable = function() {
        var observable = new Observable_1.Observable();
        observable.source = this;
        return observable;
      };
      Subject3.create = function(destination, source) {
        return new AnonymousSubject(destination, source);
      };
      return Subject3;
    }(Observable_1.Observable);
    exports.Subject = Subject2;
    var AnonymousSubject = function(_super) {
      __extends(AnonymousSubject2, _super);
      function AnonymousSubject2(destination, source) {
        var _this = _super.call(this) || this;
        _this.destination = destination;
        _this.source = source;
        return _this;
      }
      AnonymousSubject2.prototype.next = function(value) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.next) === null || _b === void 0 ? void 0 : _b.call(_a2, value);
      };
      AnonymousSubject2.prototype.error = function(err) {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.error) === null || _b === void 0 ? void 0 : _b.call(_a2, err);
      };
      AnonymousSubject2.prototype.complete = function() {
        var _a2, _b;
        (_b = (_a2 = this.destination) === null || _a2 === void 0 ? void 0 : _a2.complete) === null || _b === void 0 ? void 0 : _b.call(_a2);
      };
      AnonymousSubject2.prototype._subscribe = function(subscriber) {
        var _a2, _b;
        return (_b = (_a2 = this.source) === null || _a2 === void 0 ? void 0 : _a2.subscribe(subscriber)) !== null && _b !== void 0 ? _b : Subscription_1.EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject2;
    }(Subject2);
    exports.AnonymousSubject = AnonymousSubject;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js
var require_BehaviorSubject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/BehaviorSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.BehaviorSubject = void 0;
    var Subject_1 = require_Subject();
    var BehaviorSubject2 = function(_super) {
      __extends(BehaviorSubject3, _super);
      function BehaviorSubject3(_value) {
        var _this = _super.call(this) || this;
        _this._value = _value;
        return _this;
      }
      Object.defineProperty(BehaviorSubject3.prototype, "value", {
        get: function() {
          return this.getValue();
        },
        enumerable: false,
        configurable: true
      });
      BehaviorSubject3.prototype._subscribe = function(subscriber) {
        var subscription = _super.prototype._subscribe.call(this, subscriber);
        !subscription.closed && subscriber.next(this._value);
        return subscription;
      };
      BehaviorSubject3.prototype.getValue = function() {
        var _a2 = this, hasError = _a2.hasError, thrownError = _a2.thrownError, _value = _a2._value;
        if (hasError) {
          throw thrownError;
        }
        this._throwIfClosed();
        return _value;
      };
      BehaviorSubject3.prototype.next = function(value) {
        _super.prototype.next.call(this, this._value = value);
      };
      return BehaviorSubject3;
    }(Subject_1.Subject);
    exports.BehaviorSubject = BehaviorSubject2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js
var require_dateTimestampProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/dateTimestampProvider.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dateTimestampProvider = void 0;
    exports.dateTimestampProvider = {
      now: function() {
        return (exports.dateTimestampProvider.delegate || Date).now();
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/ReplaySubject.js
var require_ReplaySubject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/ReplaySubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ReplaySubject = void 0;
    var Subject_1 = require_Subject();
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var ReplaySubject = function(_super) {
      __extends(ReplaySubject2, _super);
      function ReplaySubject2(_bufferSize, _windowTime, _timestampProvider) {
        if (_bufferSize === void 0) {
          _bufferSize = Infinity;
        }
        if (_windowTime === void 0) {
          _windowTime = Infinity;
        }
        if (_timestampProvider === void 0) {
          _timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
        }
        var _this = _super.call(this) || this;
        _this._bufferSize = _bufferSize;
        _this._windowTime = _windowTime;
        _this._timestampProvider = _timestampProvider;
        _this._buffer = [];
        _this._infiniteTimeWindow = true;
        _this._infiniteTimeWindow = _windowTime === Infinity;
        _this._bufferSize = Math.max(1, _bufferSize);
        _this._windowTime = Math.max(1, _windowTime);
        return _this;
      }
      ReplaySubject2.prototype.next = function(value) {
        var _a2 = this, isStopped = _a2.isStopped, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow, _timestampProvider = _a2._timestampProvider, _windowTime = _a2._windowTime;
        if (!isStopped) {
          _buffer.push(value);
          !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
        }
        this._trimBuffer();
        _super.prototype.next.call(this, value);
      };
      ReplaySubject2.prototype._subscribe = function(subscriber) {
        this._throwIfClosed();
        this._trimBuffer();
        var subscription = this._innerSubscribe(subscriber);
        var _a2 = this, _infiniteTimeWindow = _a2._infiniteTimeWindow, _buffer = _a2._buffer;
        var copy = _buffer.slice();
        for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
          subscriber.next(copy[i]);
        }
        this._checkFinalizedStatuses(subscriber);
        return subscription;
      };
      ReplaySubject2.prototype._trimBuffer = function() {
        var _a2 = this, _bufferSize = _a2._bufferSize, _timestampProvider = _a2._timestampProvider, _buffer = _a2._buffer, _infiniteTimeWindow = _a2._infiniteTimeWindow;
        var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
        _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
        if (!_infiniteTimeWindow) {
          var now = _timestampProvider.now();
          var last = 0;
          for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
            last = i;
          }
          last && _buffer.splice(0, last + 1);
        }
      };
      return ReplaySubject2;
    }(Subject_1.Subject);
    exports.ReplaySubject = ReplaySubject;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/AsyncSubject.js
var require_AsyncSubject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/AsyncSubject.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncSubject = void 0;
    var Subject_1 = require_Subject();
    var AsyncSubject = function(_super) {
      __extends(AsyncSubject2, _super);
      function AsyncSubject2() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._value = null;
        _this._hasValue = false;
        _this._isComplete = false;
        return _this;
      }
      AsyncSubject2.prototype._checkFinalizedStatuses = function(subscriber) {
        var _a2 = this, hasError = _a2.hasError, _hasValue = _a2._hasValue, _value = _a2._value, thrownError = _a2.thrownError, isStopped = _a2.isStopped, _isComplete = _a2._isComplete;
        if (hasError) {
          subscriber.error(thrownError);
        } else if (isStopped || _isComplete) {
          _hasValue && subscriber.next(_value);
          subscriber.complete();
        }
      };
      AsyncSubject2.prototype.next = function(value) {
        if (!this.isStopped) {
          this._value = value;
          this._hasValue = true;
        }
      };
      AsyncSubject2.prototype.complete = function() {
        var _a2 = this, _hasValue = _a2._hasValue, _value = _a2._value, _isComplete = _a2._isComplete;
        if (!_isComplete) {
          this._isComplete = true;
          _hasValue && _super.prototype.next.call(this, _value);
          _super.prototype.complete.call(this);
        }
      };
      return AsyncSubject2;
    }(Subject_1.Subject);
    exports.AsyncSubject = AsyncSubject;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/Action.js
var require_Action = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/Action.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Action = void 0;
    var Subscription_1 = require_Subscription();
    var Action = function(_super) {
      __extends(Action2, _super);
      function Action2(scheduler, work) {
        return _super.call(this) || this;
      }
      Action2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return this;
      };
      return Action2;
    }(Subscription_1.Subscription);
    exports.Action = Action;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js
var require_intervalProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/intervalProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.intervalProvider = void 0;
    exports.intervalProvider = {
      setInterval: function(handler, timeout) {
        var args = [];
        for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
        }
        var delegate = exports.intervalProvider.delegate;
        if (delegate === null || delegate === void 0 ? void 0 : delegate.setInterval) {
          return delegate.setInterval.apply(delegate, __spreadArray([handler, timeout], __read(args)));
        }
        return setInterval.apply(void 0, __spreadArray([handler, timeout], __read(args)));
      },
      clearInterval: function(handle) {
        var delegate = exports.intervalProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearInterval) || clearInterval)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js
var require_AsyncAction = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncAction = void 0;
    var Action_1 = require_Action();
    var intervalProvider_1 = require_intervalProvider();
    var arrRemove_1 = require_arrRemove();
    var AsyncAction = function(_super) {
      __extends(AsyncAction2, _super);
      function AsyncAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.pending = false;
        return _this;
      }
      AsyncAction2.prototype.schedule = function(state, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (this.closed) {
          return this;
        }
        this.state = state;
        var id = this.id;
        var scheduler = this.scheduler;
        if (id != null) {
          this.id = this.recycleAsyncId(scheduler, id, delay);
        }
        this.pending = true;
        this.delay = delay;
        this.id = (_a2 = this.id) !== null && _a2 !== void 0 ? _a2 : this.requestAsyncId(scheduler, this.id, delay);
        return this;
      };
      AsyncAction2.prototype.requestAsyncId = function(scheduler, _id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return intervalProvider_1.intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction2.prototype.recycleAsyncId = function(_scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && this.delay === delay && this.pending === false) {
          return id;
        }
        if (id != null) {
          intervalProvider_1.intervalProvider.clearInterval(id);
        }
        return void 0;
      };
      AsyncAction2.prototype.execute = function(state, delay) {
        if (this.closed) {
          return new Error("executing a cancelled action");
        }
        this.pending = false;
        var error = this._execute(state, delay);
        if (error) {
          return error;
        } else if (this.pending === false && this.id != null) {
          this.id = this.recycleAsyncId(this.scheduler, this.id, null);
        }
      };
      AsyncAction2.prototype._execute = function(state, _delay) {
        var errored = false;
        var errorValue;
        try {
          this.work(state);
        } catch (e) {
          errored = true;
          errorValue = e ? e : new Error("Scheduled action threw falsy error");
        }
        if (errored) {
          this.unsubscribe();
          return errorValue;
        }
      };
      AsyncAction2.prototype.unsubscribe = function() {
        if (!this.closed) {
          var _a2 = this, id = _a2.id, scheduler = _a2.scheduler;
          var actions = scheduler.actions;
          this.work = this.state = this.scheduler = null;
          this.pending = false;
          arrRemove_1.arrRemove(actions, this);
          if (id != null) {
            this.id = this.recycleAsyncId(scheduler, id, null);
          }
          this.delay = null;
          _super.prototype.unsubscribe.call(this);
        }
      };
      return AsyncAction2;
    }(Action_1.Action);
    exports.AsyncAction = AsyncAction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/Immediate.js
var require_Immediate = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/Immediate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TestTools = exports.Immediate = void 0;
    var nextHandle = 1;
    var resolved;
    var activeHandles = {};
    function findAndClearHandle(handle) {
      if (handle in activeHandles) {
        delete activeHandles[handle];
        return true;
      }
      return false;
    }
    exports.Immediate = {
      setImmediate: function(cb) {
        var handle = nextHandle++;
        activeHandles[handle] = true;
        if (!resolved) {
          resolved = Promise.resolve();
        }
        resolved.then(function() {
          return findAndClearHandle(handle) && cb();
        });
        return handle;
      },
      clearImmediate: function(handle) {
        findAndClearHandle(handle);
      }
    };
    exports.TestTools = {
      pending: function() {
        return Object.keys(activeHandles).length;
      }
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js
var require_immediateProvider = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/immediateProvider.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.immediateProvider = void 0;
    var Immediate_1 = require_Immediate();
    var setImmediate = Immediate_1.Immediate.setImmediate;
    var clearImmediate = Immediate_1.Immediate.clearImmediate;
    exports.immediateProvider = {
      setImmediate: function() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.setImmediate) || setImmediate).apply(void 0, __spreadArray([], __read(args)));
      },
      clearImmediate: function(handle) {
        var delegate = exports.immediateProvider.delegate;
        return ((delegate === null || delegate === void 0 ? void 0 : delegate.clearImmediate) || clearImmediate)(handle);
      },
      delegate: void 0
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js
var require_AsapAction = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsapAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var immediateProvider_1 = require_immediateProvider();
    var AsapAction = function(_super) {
      __extends(AsapAction2, _super);
      function AsapAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AsapAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = immediateProvider_1.immediateProvider.setImmediate(scheduler.flush.bind(scheduler, void 0)));
      };
      AsapAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
          immediateProvider_1.immediateProvider.clearImmediate(id);
          if (scheduler._scheduled === id) {
            scheduler._scheduled = void 0;
          }
        }
        return void 0;
      };
      return AsapAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AsapAction = AsapAction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Scheduler.js
var require_Scheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Scheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Scheduler = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var Scheduler = function() {
      function Scheduler2(schedulerActionCtor, now) {
        if (now === void 0) {
          now = Scheduler2.now;
        }
        this.schedulerActionCtor = schedulerActionCtor;
        this.now = now;
      }
      Scheduler2.prototype.schedule = function(work, delay, state) {
        if (delay === void 0) {
          delay = 0;
        }
        return new this.schedulerActionCtor(this, work).schedule(state, delay);
      };
      Scheduler2.now = dateTimestampProvider_1.dateTimestampProvider.now;
      return Scheduler2;
    }();
    exports.Scheduler = Scheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js
var require_AsyncScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AsyncScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsyncScheduler = void 0;
    var Scheduler_1 = require_Scheduler();
    var AsyncScheduler = function(_super) {
      __extends(AsyncScheduler2, _super);
      function AsyncScheduler2(SchedulerAction, now) {
        if (now === void 0) {
          now = Scheduler_1.Scheduler.now;
        }
        var _this = _super.call(this, SchedulerAction, now) || this;
        _this.actions = [];
        _this._active = false;
        return _this;
      }
      AsyncScheduler2.prototype.flush = function(action) {
        var actions = this.actions;
        if (this._active) {
          actions.push(action);
          return;
        }
        var error;
        this._active = true;
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while (action = actions.shift());
        this._active = false;
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsyncScheduler2;
    }(Scheduler_1.Scheduler);
    exports.AsyncScheduler = AsyncScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js
var require_AsapScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AsapScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AsapScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AsapScheduler = function(_super) {
      __extends(AsapScheduler2, _super);
      function AsapScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AsapScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AsapScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AsapScheduler = AsapScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/asap.js
var require_asap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/asap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.asap = exports.asapScheduler = void 0;
    var AsapAction_1 = require_AsapAction();
    var AsapScheduler_1 = require_AsapScheduler();
    exports.asapScheduler = new AsapScheduler_1.AsapScheduler(AsapAction_1.AsapAction);
    exports.asap = exports.asapScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/async.js
var require_async = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/async.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.async = exports.asyncScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var AsyncScheduler_1 = require_AsyncScheduler();
    exports.asyncScheduler = new AsyncScheduler_1.AsyncScheduler(AsyncAction_1.AsyncAction);
    exports.async = exports.asyncScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js
var require_QueueAction = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueueAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var QueueAction = function(_super) {
      __extends(QueueAction2, _super);
      function QueueAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      QueueAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay > 0) {
          return _super.prototype.schedule.call(this, state, delay);
        }
        this.delay = delay;
        this.state = state;
        this.scheduler.flush(this);
        return this;
      };
      QueueAction2.prototype.execute = function(state, delay) {
        return delay > 0 || this.closed ? _super.prototype.execute.call(this, state, delay) : this._execute(state, delay);
      };
      QueueAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null && delay > 0 || delay == null && this.delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.flush(this);
        return 0;
      };
      return QueueAction2;
    }(AsyncAction_1.AsyncAction);
    exports.QueueAction = QueueAction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js
var require_QueueScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/QueueScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.QueueScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var QueueScheduler = function(_super) {
      __extends(QueueScheduler2, _super);
      function QueueScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      return QueueScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.QueueScheduler = QueueScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/queue.js
var require_queue = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/queue.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.queue = exports.queueScheduler = void 0;
    var QueueAction_1 = require_QueueAction();
    var QueueScheduler_1 = require_QueueScheduler();
    exports.queueScheduler = new QueueScheduler_1.QueueScheduler(QueueAction_1.QueueAction);
    exports.queue = exports.queueScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js
var require_AnimationFrameAction = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameAction.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationFrameAction = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var animationFrameProvider_1 = require_animationFrameProvider();
    var AnimationFrameAction = function(_super) {
      __extends(AnimationFrameAction2, _super);
      function AnimationFrameAction2(scheduler, work) {
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        return _this;
      }
      AnimationFrameAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (delay !== null && delay > 0) {
          return _super.prototype.requestAsyncId.call(this, scheduler, id, delay);
        }
        scheduler.actions.push(this);
        return scheduler._scheduled || (scheduler._scheduled = animationFrameProvider_1.animationFrameProvider.requestAnimationFrame(function() {
          return scheduler.flush(void 0);
        }));
      };
      AnimationFrameAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        var _a2;
        if (delay === void 0) {
          delay = 0;
        }
        if (delay != null ? delay > 0 : this.delay > 0) {
          return _super.prototype.recycleAsyncId.call(this, scheduler, id, delay);
        }
        var actions = scheduler.actions;
        if (id != null && ((_a2 = actions[actions.length - 1]) === null || _a2 === void 0 ? void 0 : _a2.id) !== id) {
          animationFrameProvider_1.animationFrameProvider.cancelAnimationFrame(id);
          scheduler._scheduled = void 0;
        }
        return void 0;
      };
      return AnimationFrameAction2;
    }(AsyncAction_1.AsyncAction);
    exports.AnimationFrameAction = AnimationFrameAction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js
var require_AnimationFrameScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/AnimationFrameScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.AnimationFrameScheduler = void 0;
    var AsyncScheduler_1 = require_AsyncScheduler();
    var AnimationFrameScheduler = function(_super) {
      __extends(AnimationFrameScheduler2, _super);
      function AnimationFrameScheduler2() {
        return _super !== null && _super.apply(this, arguments) || this;
      }
      AnimationFrameScheduler2.prototype.flush = function(action) {
        this._active = true;
        var flushId = this._scheduled;
        this._scheduled = void 0;
        var actions = this.actions;
        var error;
        action = action || actions.shift();
        do {
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        } while ((action = actions[0]) && action.id === flushId && actions.shift());
        this._active = false;
        if (error) {
          while ((action = actions[0]) && action.id === flushId && actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      return AnimationFrameScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.AnimationFrameScheduler = AnimationFrameScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js
var require_animationFrame = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/animationFrame.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.animationFrame = exports.animationFrameScheduler = void 0;
    var AnimationFrameAction_1 = require_AnimationFrameAction();
    var AnimationFrameScheduler_1 = require_AnimationFrameScheduler();
    exports.animationFrameScheduler = new AnimationFrameScheduler_1.AnimationFrameScheduler(AnimationFrameAction_1.AnimationFrameAction);
    exports.animationFrame = exports.animationFrameScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js
var require_VirtualTimeScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduler/VirtualTimeScheduler.js"(exports) {
    "use strict";
    var __extends = exports && exports.__extends || function() {
      var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(d2, b2) {
          d2.__proto__ = b2;
        } || function(d2, b2) {
          for (var p in b2)
            if (Object.prototype.hasOwnProperty.call(b2, p))
              d2[p] = b2[p];
        };
        return extendStatics(d, b);
      };
      return function(d, b) {
        if (typeof b !== "function" && b !== null)
          throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() {
          this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
      };
    }();
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.VirtualAction = exports.VirtualTimeScheduler = void 0;
    var AsyncAction_1 = require_AsyncAction();
    var Subscription_1 = require_Subscription();
    var AsyncScheduler_1 = require_AsyncScheduler();
    var VirtualTimeScheduler = function(_super) {
      __extends(VirtualTimeScheduler2, _super);
      function VirtualTimeScheduler2(schedulerActionCtor, maxFrames) {
        if (schedulerActionCtor === void 0) {
          schedulerActionCtor = VirtualAction;
        }
        if (maxFrames === void 0) {
          maxFrames = Infinity;
        }
        var _this = _super.call(this, schedulerActionCtor, function() {
          return _this.frame;
        }) || this;
        _this.maxFrames = maxFrames;
        _this.frame = 0;
        _this.index = -1;
        return _this;
      }
      VirtualTimeScheduler2.prototype.flush = function() {
        var _a2 = this, actions = _a2.actions, maxFrames = _a2.maxFrames;
        var error;
        var action;
        while ((action = actions[0]) && action.delay <= maxFrames) {
          actions.shift();
          this.frame = action.delay;
          if (error = action.execute(action.state, action.delay)) {
            break;
          }
        }
        if (error) {
          while (action = actions.shift()) {
            action.unsubscribe();
          }
          throw error;
        }
      };
      VirtualTimeScheduler2.frameTimeFactor = 10;
      return VirtualTimeScheduler2;
    }(AsyncScheduler_1.AsyncScheduler);
    exports.VirtualTimeScheduler = VirtualTimeScheduler;
    var VirtualAction = function(_super) {
      __extends(VirtualAction2, _super);
      function VirtualAction2(scheduler, work, index) {
        if (index === void 0) {
          index = scheduler.index += 1;
        }
        var _this = _super.call(this, scheduler, work) || this;
        _this.scheduler = scheduler;
        _this.work = work;
        _this.index = index;
        _this.active = true;
        _this.index = scheduler.index = index;
        return _this;
      }
      VirtualAction2.prototype.schedule = function(state, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        if (Number.isFinite(delay)) {
          if (!this.id) {
            return _super.prototype.schedule.call(this, state, delay);
          }
          this.active = false;
          var action = new VirtualAction2(this.scheduler, this.work);
          this.add(action);
          return action.schedule(state, delay);
        } else {
          return Subscription_1.Subscription.EMPTY;
        }
      };
      VirtualAction2.prototype.requestAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        this.delay = scheduler.frame + delay;
        var actions = scheduler.actions;
        actions.push(this);
        actions.sort(VirtualAction2.sortActions);
        return 1;
      };
      VirtualAction2.prototype.recycleAsyncId = function(scheduler, id, delay) {
        if (delay === void 0) {
          delay = 0;
        }
        return void 0;
      };
      VirtualAction2.prototype._execute = function(state, delay) {
        if (this.active === true) {
          return _super.prototype._execute.call(this, state, delay);
        }
      };
      VirtualAction2.sortActions = function(a, b) {
        if (a.delay === b.delay) {
          if (a.index === b.index) {
            return 0;
          } else if (a.index > b.index) {
            return 1;
          } else {
            return -1;
          }
        } else if (a.delay > b.delay) {
          return 1;
        } else {
          return -1;
        }
      };
      return VirtualAction2;
    }(AsyncAction_1.AsyncAction);
    exports.VirtualAction = VirtualAction;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/empty.js
var require_empty = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/empty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.empty = exports.EMPTY = void 0;
    var Observable_1 = require_Observable();
    exports.EMPTY = new Observable_1.Observable(function(subscriber) {
      return subscriber.complete();
    });
    function empty(scheduler) {
      return scheduler ? emptyScheduled(scheduler) : exports.EMPTY;
    }
    exports.empty = empty;
    function emptyScheduled(scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        return scheduler.schedule(function() {
          return subscriber.complete();
        });
      });
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isScheduler.js
var require_isScheduler = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isScheduler.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isScheduler = void 0;
    var isFunction_1 = require_isFunction();
    function isScheduler(value) {
      return value && isFunction_1.isFunction(value.schedule);
    }
    exports.isScheduler = isScheduler;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/args.js
var require_args = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/args.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.popNumber = exports.popScheduler = exports.popResultSelector = void 0;
    var isFunction_1 = require_isFunction();
    var isScheduler_1 = require_isScheduler();
    function last(arr) {
      return arr[arr.length - 1];
    }
    function popResultSelector(args) {
      return isFunction_1.isFunction(last(args)) ? args.pop() : void 0;
    }
    exports.popResultSelector = popResultSelector;
    function popScheduler(args) {
      return isScheduler_1.isScheduler(last(args)) ? args.pop() : void 0;
    }
    exports.popScheduler = popScheduler;
    function popNumber(args, defaultValue) {
      return typeof last(args) === "number" ? args.pop() : defaultValue;
    }
    exports.popNumber = popNumber;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js
var require_isArrayLike = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isArrayLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isArrayLike = void 0;
    exports.isArrayLike = function(x) {
      return x && typeof x.length === "number" && typeof x !== "function";
    };
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isPromise.js
var require_isPromise = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isPromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isPromise = void 0;
    var isFunction_1 = require_isFunction();
    function isPromise2(value) {
      return isFunction_1.isFunction(value === null || value === void 0 ? void 0 : value.then);
    }
    exports.isPromise = isPromise2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js
var require_isInteropObservable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isInteropObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isInteropObservable = void 0;
    var observable_1 = require_observable();
    var isFunction_1 = require_isFunction();
    function isInteropObservable(input) {
      return isFunction_1.isFunction(input[observable_1.observable]);
    }
    exports.isInteropObservable = isInteropObservable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js
var require_isAsyncIterable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isAsyncIterable = void 0;
    var isFunction_1 = require_isFunction();
    function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj[Symbol.asyncIterator]);
    }
    exports.isAsyncIterable = isAsyncIterable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js
var require_throwUnobservableError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/throwUnobservableError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createInvalidObservableTypeError = void 0;
    function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === "object" ? "an invalid object" : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
    }
    exports.createInvalidObservableTypeError = createInvalidObservableTypeError;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/symbol/iterator.js
var require_iterator = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/symbol/iterator.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.iterator = exports.getSymbolIterator = void 0;
    function getSymbolIterator() {
      if (typeof Symbol !== "function" || !Symbol.iterator) {
        return "@@iterator";
      }
      return Symbol.iterator;
    }
    exports.getSymbolIterator = getSymbolIterator;
    exports.iterator = getSymbolIterator();
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isIterable.js
var require_isIterable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isIterable = void 0;
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    function isIterable(input) {
      return isFunction_1.isFunction(input === null || input === void 0 ? void 0 : input[iterator_1.iterator]);
    }
    exports.isIterable = isIterable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js
var require_isReadableStreamLike = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isReadableStreamLike.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __await = exports && exports.__await || function(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    };
    var __asyncGenerator = exports && exports.__asyncGenerator || function(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []), i, q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i;
      function verb(n) {
        if (g[n])
          i[n] = function(v) {
            return new Promise(function(a, b) {
              q.push([n, v, a, b]) > 1 || resume(n, v);
            });
          };
      }
      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }
      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }
      function fulfill(value) {
        resume("next", value);
      }
      function reject(value) {
        resume("throw", value);
      }
      function settle(f, v) {
        if (f(v), q.shift(), q.length)
          resume(q[0][0], q[0][1]);
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isReadableStreamLike = exports.readableStreamLikeToAsyncGenerator = void 0;
    var isFunction_1 = require_isFunction();
    function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
        var reader, _a2, value, done;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              reader = readableStream.getReader();
              _b.label = 1;
            case 1:
              _b.trys.push([1, , 9, 10]);
              _b.label = 2;
            case 2:
              if (false)
                return [3, 8];
              return [4, __await(reader.read())];
            case 3:
              _a2 = _b.sent(), value = _a2.value, done = _a2.done;
              if (!done)
                return [3, 5];
              return [4, __await(void 0)];
            case 4:
              return [2, _b.sent()];
            case 5:
              return [4, __await(value)];
            case 6:
              return [4, _b.sent()];
            case 7:
              _b.sent();
              return [3, 2];
            case 8:
              return [3, 10];
            case 9:
              reader.releaseLock();
              return [7];
            case 10:
              return [2];
          }
        });
      });
    }
    exports.readableStreamLikeToAsyncGenerator = readableStreamLikeToAsyncGenerator;
    function isReadableStreamLike(obj) {
      return isFunction_1.isFunction(obj === null || obj === void 0 ? void 0 : obj.getReader);
    }
    exports.isReadableStreamLike = isReadableStreamLike;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js
var require_innerFrom = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/innerFrom.js"(exports) {
    "use strict";
    var __awaiter = exports && exports.__awaiter || function(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
          resolve(value);
        });
      }
      return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }
        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }
        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    };
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    var __asyncValues = exports && exports.__asyncValues || function(o) {
      if (!Symbol.asyncIterator)
        throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator], i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
      }, i);
      function verb(n) {
        i[n] = o[n] && function(v) {
          return new Promise(function(resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }
      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v2) {
          resolve({ value: v2, done: d });
        }, reject);
      }
    };
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromReadableStreamLike = exports.fromAsyncIterable = exports.fromIterable = exports.fromPromise = exports.fromArrayLike = exports.fromInteropObservable = exports.innerFrom = void 0;
    var isArrayLike_1 = require_isArrayLike();
    var isPromise_1 = require_isPromise();
    var Observable_1 = require_Observable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isIterable_1 = require_isIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var isFunction_1 = require_isFunction();
    var reportUnhandledError_1 = require_reportUnhandledError();
    var observable_1 = require_observable();
    function innerFrom(input) {
      if (input instanceof Observable_1.Observable) {
        return input;
      }
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return fromInteropObservable(input);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return fromArrayLike(input);
        }
        if (isPromise_1.isPromise(input)) {
          return fromPromise(input);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return fromAsyncIterable(input);
        }
        if (isIterable_1.isIterable(input)) {
          return fromIterable(input);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return fromReadableStreamLike(input);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports.innerFrom = innerFrom;
    function fromInteropObservable(obj) {
      return new Observable_1.Observable(function(subscriber) {
        var obs = obj[observable_1.observable]();
        if (isFunction_1.isFunction(obs.subscribe)) {
          return obs.subscribe(subscriber);
        }
        throw new TypeError("Provided object does not correctly implement Symbol.observable");
      });
    }
    exports.fromInteropObservable = fromInteropObservable;
    function fromArrayLike(array) {
      return new Observable_1.Observable(function(subscriber) {
        for (var i = 0; i < array.length && !subscriber.closed; i++) {
          subscriber.next(array[i]);
        }
        subscriber.complete();
      });
    }
    exports.fromArrayLike = fromArrayLike;
    function fromPromise(promise2) {
      return new Observable_1.Observable(function(subscriber) {
        promise2.then(function(value) {
          if (!subscriber.closed) {
            subscriber.next(value);
            subscriber.complete();
          }
        }, function(err) {
          return subscriber.error(err);
        }).then(null, reportUnhandledError_1.reportUnhandledError);
      });
    }
    exports.fromPromise = fromPromise;
    function fromIterable(iterable) {
      return new Observable_1.Observable(function(subscriber) {
        var e_1, _a2;
        try {
          for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
            var value = iterable_1_1.value;
            subscriber.next(value);
            if (subscriber.closed) {
              return;
            }
          }
        } catch (e_1_1) {
          e_1 = { error: e_1_1 };
        } finally {
          try {
            if (iterable_1_1 && !iterable_1_1.done && (_a2 = iterable_1.return))
              _a2.call(iterable_1);
          } finally {
            if (e_1)
              throw e_1.error;
          }
        }
        subscriber.complete();
      });
    }
    exports.fromIterable = fromIterable;
    function fromAsyncIterable(asyncIterable) {
      return new Observable_1.Observable(function(subscriber) {
        process(asyncIterable, subscriber).catch(function(err) {
          return subscriber.error(err);
        });
      });
    }
    exports.fromAsyncIterable = fromAsyncIterable;
    function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(readableStream));
    }
    exports.fromReadableStreamLike = fromReadableStreamLike;
    function process(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a2;
      return __awaiter(this, void 0, void 0, function() {
        var value, e_2_1;
        return __generator(this, function(_b) {
          switch (_b.label) {
            case 0:
              _b.trys.push([0, 5, 6, 11]);
              asyncIterable_1 = __asyncValues(asyncIterable);
              _b.label = 1;
            case 1:
              return [4, asyncIterable_1.next()];
            case 2:
              if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done))
                return [3, 4];
              value = asyncIterable_1_1.value;
              subscriber.next(value);
              if (subscriber.closed) {
                return [2];
              }
              _b.label = 3;
            case 3:
              return [3, 1];
            case 4:
              return [3, 11];
            case 5:
              e_2_1 = _b.sent();
              e_2 = { error: e_2_1 };
              return [3, 11];
            case 6:
              _b.trys.push([6, , 9, 10]);
              if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a2 = asyncIterable_1.return)))
                return [3, 8];
              return [4, _a2.call(asyncIterable_1)];
            case 7:
              _b.sent();
              _b.label = 8;
            case 8:
              return [3, 10];
            case 9:
              if (e_2)
                throw e_2.error;
              return [7];
            case 10:
              return [7];
            case 11:
              subscriber.complete();
              return [2];
          }
        });
      });
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js
var require_executeSchedule = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/executeSchedule.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.executeSchedule = void 0;
    function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === void 0) {
        delay = 0;
      }
      if (repeat === void 0) {
        repeat = false;
      }
      var scheduleSubscription = scheduler.schedule(function() {
        work();
        if (repeat) {
          parentSubscription.add(this.schedule(null, delay));
        } else {
          this.unsubscribe();
        }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
        return scheduleSubscription;
      }
    }
    exports.executeSchedule = executeSchedule;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/observeOn.js
var require_observeOn = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/observeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observeOn = void 0;
    var executeSchedule_1 = require_executeSchedule();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function observeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.next(value);
          }, delay);
        }, function() {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.complete();
          }, delay);
        }, function(err) {
          return executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            return subscriber.error(err);
          }, delay);
        }));
      });
    }
    exports.observeOn = observeOn;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js
var require_subscribeOn = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/subscribeOn.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.subscribeOn = void 0;
    var lift_1 = require_lift();
    function subscribeOn(scheduler, delay) {
      if (delay === void 0) {
        delay = 0;
      }
      return lift_1.operate(function(source, subscriber) {
        subscriber.add(scheduler.schedule(function() {
          return source.subscribe(subscriber);
        }, delay));
      });
    }
    exports.subscribeOn = subscribeOn;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js
var require_scheduleObservable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleObservable = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function scheduleObservable(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports.scheduleObservable = scheduleObservable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js
var require_schedulePromise = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/schedulePromise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.schedulePromise = void 0;
    var innerFrom_1 = require_innerFrom();
    var observeOn_1 = require_observeOn();
    var subscribeOn_1 = require_subscribeOn();
    function schedulePromise(input, scheduler) {
      return innerFrom_1.innerFrom(input).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
    }
    exports.schedulePromise = schedulePromise;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js
var require_scheduleArray = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleArray = void 0;
    var Observable_1 = require_Observable();
    function scheduleArray(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var i = 0;
        return scheduler.schedule(function() {
          if (i === input.length) {
            subscriber.complete();
          } else {
            subscriber.next(input[i++]);
            if (!subscriber.closed) {
              this.schedule();
            }
          }
        });
      });
    }
    exports.scheduleArray = scheduleArray;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js
var require_scheduleIterable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleIterable = void 0;
    var Observable_1 = require_Observable();
    var iterator_1 = require_iterator();
    var isFunction_1 = require_isFunction();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleIterable(input, scheduler) {
      return new Observable_1.Observable(function(subscriber) {
        var iterator;
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          iterator = input[iterator_1.iterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            var _a2;
            var value;
            var done;
            try {
              _a2 = iterator.next(), value = _a2.value, done = _a2.done;
            } catch (err) {
              subscriber.error(err);
              return;
            }
            if (done) {
              subscriber.complete();
            } else {
              subscriber.next(value);
            }
          }, 0, true);
        });
        return function() {
          return isFunction_1.isFunction(iterator === null || iterator === void 0 ? void 0 : iterator.return) && iterator.return();
        };
      });
    }
    exports.scheduleIterable = scheduleIterable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js
var require_scheduleAsyncIterable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleAsyncIterable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleAsyncIterable = void 0;
    var Observable_1 = require_Observable();
    var executeSchedule_1 = require_executeSchedule();
    function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
        throw new Error("Iterable cannot be null");
      }
      return new Observable_1.Observable(function(subscriber) {
        executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
          var iterator = input[Symbol.asyncIterator]();
          executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            iterator.next().then(function(result) {
              if (result.done) {
                subscriber.complete();
              } else {
                subscriber.next(result.value);
              }
            });
          }, 0, true);
        });
      });
    }
    exports.scheduleAsyncIterable = scheduleAsyncIterable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js
var require_scheduleReadableStreamLike = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduleReadableStreamLike.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduleReadableStreamLike = void 0;
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable_1.scheduleAsyncIterable(isReadableStreamLike_1.readableStreamLikeToAsyncGenerator(input), scheduler);
    }
    exports.scheduleReadableStreamLike = scheduleReadableStreamLike;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js
var require_scheduled = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/scheduled/scheduled.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scheduled = void 0;
    var scheduleObservable_1 = require_scheduleObservable();
    var schedulePromise_1 = require_schedulePromise();
    var scheduleArray_1 = require_scheduleArray();
    var scheduleIterable_1 = require_scheduleIterable();
    var scheduleAsyncIterable_1 = require_scheduleAsyncIterable();
    var isInteropObservable_1 = require_isInteropObservable();
    var isPromise_1 = require_isPromise();
    var isArrayLike_1 = require_isArrayLike();
    var isIterable_1 = require_isIterable();
    var isAsyncIterable_1 = require_isAsyncIterable();
    var throwUnobservableError_1 = require_throwUnobservableError();
    var isReadableStreamLike_1 = require_isReadableStreamLike();
    var scheduleReadableStreamLike_1 = require_scheduleReadableStreamLike();
    function scheduled(input, scheduler) {
      if (input != null) {
        if (isInteropObservable_1.isInteropObservable(input)) {
          return scheduleObservable_1.scheduleObservable(input, scheduler);
        }
        if (isArrayLike_1.isArrayLike(input)) {
          return scheduleArray_1.scheduleArray(input, scheduler);
        }
        if (isPromise_1.isPromise(input)) {
          return schedulePromise_1.schedulePromise(input, scheduler);
        }
        if (isAsyncIterable_1.isAsyncIterable(input)) {
          return scheduleAsyncIterable_1.scheduleAsyncIterable(input, scheduler);
        }
        if (isIterable_1.isIterable(input)) {
          return scheduleIterable_1.scheduleIterable(input, scheduler);
        }
        if (isReadableStreamLike_1.isReadableStreamLike(input)) {
          return scheduleReadableStreamLike_1.scheduleReadableStreamLike(input, scheduler);
        }
      }
      throw throwUnobservableError_1.createInvalidObservableTypeError(input);
    }
    exports.scheduled = scheduled;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/from.js
var require_from = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/from.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.from = void 0;
    var scheduled_1 = require_scheduled();
    var innerFrom_1 = require_innerFrom();
    function from(input, scheduler) {
      return scheduler ? scheduled_1.scheduled(input, scheduler) : innerFrom_1.innerFrom(input);
    }
    exports.from = from;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/of.js
var require_of = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/of.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.of = void 0;
    var args_1 = require_args();
    var from_1 = require_from();
    function of2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return from_1.from(args, scheduler);
    }
    exports.of = of2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/throwError.js
var require_throwError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/throwError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throwError = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function throwError2(errorOrErrorFactory, scheduler) {
      var errorFactory = isFunction_1.isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function() {
        return errorOrErrorFactory;
      };
      var init = function(subscriber) {
        return subscriber.error(errorFactory());
      };
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        return scheduler.schedule(init, 0, subscriber);
      } : init);
    }
    exports.throwError = throwError2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/Notification.js
var require_Notification = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/Notification.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.observeNotification = exports.Notification = exports.NotificationKind = void 0;
    var empty_1 = require_empty();
    var of_1 = require_of();
    var throwError_1 = require_throwError();
    var isFunction_1 = require_isFunction();
    var NotificationKind;
    (function(NotificationKind2) {
      NotificationKind2["NEXT"] = "N";
      NotificationKind2["ERROR"] = "E";
      NotificationKind2["COMPLETE"] = "C";
    })(NotificationKind = exports.NotificationKind || (exports.NotificationKind = {}));
    var Notification = function() {
      function Notification2(kind, value, error) {
        this.kind = kind;
        this.value = value;
        this.error = error;
        this.hasValue = kind === "N";
      }
      Notification2.prototype.observe = function(observer) {
        return observeNotification(this, observer);
      };
      Notification2.prototype.do = function(nextHandler, errorHandler, completeHandler) {
        var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
        return kind === "N" ? nextHandler === null || nextHandler === void 0 ? void 0 : nextHandler(value) : kind === "E" ? errorHandler === null || errorHandler === void 0 ? void 0 : errorHandler(error) : completeHandler === null || completeHandler === void 0 ? void 0 : completeHandler();
      };
      Notification2.prototype.accept = function(nextOrObserver, error, complete) {
        var _a2;
        return isFunction_1.isFunction((_a2 = nextOrObserver) === null || _a2 === void 0 ? void 0 : _a2.next) ? this.observe(nextOrObserver) : this.do(nextOrObserver, error, complete);
      };
      Notification2.prototype.toObservable = function() {
        var _a2 = this, kind = _a2.kind, value = _a2.value, error = _a2.error;
        var result = kind === "N" ? of_1.of(value) : kind === "E" ? throwError_1.throwError(function() {
          return error;
        }) : kind === "C" ? empty_1.EMPTY : 0;
        if (!result) {
          throw new TypeError("Unexpected notification kind " + kind);
        }
        return result;
      };
      Notification2.createNext = function(value) {
        return new Notification2("N", value);
      };
      Notification2.createError = function(err) {
        return new Notification2("E", void 0, err);
      };
      Notification2.createComplete = function() {
        return Notification2.completeNotification;
      };
      Notification2.completeNotification = new Notification2("C");
      return Notification2;
    }();
    exports.Notification = Notification;
    function observeNotification(notification, observer) {
      var _a2, _b, _c;
      var _d = notification, kind = _d.kind, value = _d.value, error = _d.error;
      if (typeof kind !== "string") {
        throw new TypeError('Invalid notification, missing "kind"');
      }
      kind === "N" ? (_a2 = observer.next) === null || _a2 === void 0 ? void 0 : _a2.call(observer, value) : kind === "E" ? (_b = observer.error) === null || _b === void 0 ? void 0 : _b.call(observer, error) : (_c = observer.complete) === null || _c === void 0 ? void 0 : _c.call(observer);
    }
    exports.observeNotification = observeNotification;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isObservable.js
var require_isObservable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isObservable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isObservable = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    function isObservable(obj) {
      return !!obj && (obj instanceof Observable_1.Observable || isFunction_1.isFunction(obj.lift) && isFunction_1.isFunction(obj.subscribe));
    }
    exports.isObservable = isObservable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/EmptyError.js
var require_EmptyError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/EmptyError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EmptyError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.EmptyError = createErrorClass_1.createErrorClass(function(_super) {
      return function EmptyErrorImpl() {
        _super(this);
        this.name = "EmptyError";
        this.message = "no elements in sequence";
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/lastValueFrom.js
var require_lastValueFrom = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/lastValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.lastValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    function lastValueFrom(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve, reject) {
        var _hasValue = false;
        var _value;
        source.subscribe({
          next: function(value) {
            _value = value;
            _hasValue = true;
          },
          error: reject,
          complete: function() {
            if (_hasValue) {
              resolve(_value);
            } else if (hasConfig) {
              resolve(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
      });
    }
    exports.lastValueFrom = lastValueFrom;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/firstValueFrom.js
var require_firstValueFrom = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/firstValueFrom.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.firstValueFrom = void 0;
    var EmptyError_1 = require_EmptyError();
    var Subscriber_1 = require_Subscriber();
    function firstValueFrom(source, config) {
      var hasConfig = typeof config === "object";
      return new Promise(function(resolve, reject) {
        var subscriber = new Subscriber_1.SafeSubscriber({
          next: function(value) {
            resolve(value);
            subscriber.unsubscribe();
          },
          error: reject,
          complete: function() {
            if (hasConfig) {
              resolve(config.defaultValue);
            } else {
              reject(new EmptyError_1.EmptyError());
            }
          }
        });
        source.subscribe(subscriber);
      });
    }
    exports.firstValueFrom = firstValueFrom;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js
var require_ArgumentOutOfRangeError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/ArgumentOutOfRangeError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ArgumentOutOfRangeError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.ArgumentOutOfRangeError = createErrorClass_1.createErrorClass(function(_super) {
      return function ArgumentOutOfRangeErrorImpl() {
        _super(this);
        this.name = "ArgumentOutOfRangeError";
        this.message = "argument out of range";
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js
var require_NotFoundError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/NotFoundError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.NotFoundError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.NotFoundError = createErrorClass_1.createErrorClass(function(_super) {
      return function NotFoundErrorImpl(message) {
        _super(this);
        this.name = "NotFoundError";
        this.message = message;
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/SequenceError.js
var require_SequenceError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/SequenceError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.SequenceError = void 0;
    var createErrorClass_1 = require_createErrorClass();
    exports.SequenceError = createErrorClass_1.createErrorClass(function(_super) {
      return function SequenceErrorImpl(message) {
        _super(this);
        this.name = "SequenceError";
        this.message = message;
      };
    });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/isDate.js
var require_isDate = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/isDate.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isValidDate = void 0;
    function isValidDate(value) {
      return value instanceof Date && !isNaN(value);
    }
    exports.isValidDate = isValidDate;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/timeout.js
var require_timeout = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/timeout.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeout = exports.TimeoutError = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var createErrorClass_1 = require_createErrorClass();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    exports.TimeoutError = createErrorClass_1.createErrorClass(function(_super) {
      return function TimeoutErrorImpl(info) {
        if (info === void 0) {
          info = null;
        }
        _super(this);
        this.message = "Timeout has occurred";
        this.name = "TimeoutError";
        this.info = info;
      };
    });
    function timeout(config, schedulerArg) {
      var _a2 = isDate_1.isValidDate(config) ? { first: config } : typeof config === "number" ? { each: config } : config, first2 = _a2.first, each = _a2.each, _b = _a2.with, _with = _b === void 0 ? timeoutErrorFactory : _b, _c = _a2.scheduler, scheduler = _c === void 0 ? schedulerArg !== null && schedulerArg !== void 0 ? schedulerArg : async_1.asyncScheduler : _c, _d = _a2.meta, meta = _d === void 0 ? null : _d;
      if (first2 == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return lift_1.operate(function(source, subscriber) {
        var originalSourceSubscription;
        var timerSubscription;
        var lastValue = null;
        var seen = 0;
        var startTimer = function(delay) {
          timerSubscription = executeSchedule_1.executeSchedule(subscriber, scheduler, function() {
            try {
              originalSourceSubscription.unsubscribe();
              innerFrom_1.innerFrom(_with({
                meta,
                lastValue,
                seen
              })).subscribe(subscriber);
            } catch (err) {
              subscriber.error(err);
            }
          }, delay);
        };
        originalSourceSubscription = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          seen++;
          subscriber.next(lastValue = value);
          each > 0 && startTimer(each);
        }, void 0, void 0, function() {
          if (!(timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.closed)) {
            timerSubscription === null || timerSubscription === void 0 ? void 0 : timerSubscription.unsubscribe();
          }
          lastValue = null;
        }));
        !seen && startTimer(first2 != null ? typeof first2 === "number" ? first2 : +first2 - scheduler.now() : each);
      });
    }
    exports.timeout = timeout;
    function timeoutErrorFactory(info) {
      throw new exports.TimeoutError(info);
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/map.js
var require_map = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/map.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.map = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function map(project, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(project.call(thisArg, value, index++));
        }));
      });
    }
    exports.map = map;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js
var require_mapOneOrManyArgs = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/mapOneOrManyArgs.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapOneOrManyArgs = void 0;
    var map_1 = require_map();
    var isArray = Array.isArray;
    function callOrApply(fn, args) {
      return isArray(args) ? fn.apply(void 0, __spreadArray([], __read(args))) : fn(args);
    }
    function mapOneOrManyArgs(fn) {
      return map_1.map(function(args) {
        return callOrApply(fn, args);
      });
    }
    exports.mapOneOrManyArgs = mapOneOrManyArgs;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js
var require_bindCallbackInternals = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/bindCallbackInternals.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindCallbackInternals = void 0;
    var isScheduler_1 = require_isScheduler();
    var Observable_1 = require_Observable();
    var subscribeOn_1 = require_subscribeOn();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var observeOn_1 = require_observeOn();
    var AsyncSubject_1 = require_AsyncSubject();
    function bindCallbackInternals(isNodeStyle, callbackFunc, resultSelector, scheduler) {
      if (resultSelector) {
        if (isScheduler_1.isScheduler(resultSelector)) {
          scheduler = resultSelector;
        } else {
          return function() {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
              args[_i] = arguments[_i];
            }
            return bindCallbackInternals(isNodeStyle, callbackFunc, scheduler).apply(this, args).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
          };
        }
      }
      if (scheduler) {
        return function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return bindCallbackInternals(isNodeStyle, callbackFunc).apply(this, args).pipe(subscribeOn_1.subscribeOn(scheduler), observeOn_1.observeOn(scheduler));
        };
      }
      return function() {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
        }
        var subject = new AsyncSubject_1.AsyncSubject();
        var uninitialized = true;
        return new Observable_1.Observable(function(subscriber) {
          var subs = subject.subscribe(subscriber);
          if (uninitialized) {
            uninitialized = false;
            var isAsync_1 = false;
            var isComplete_1 = false;
            callbackFunc.apply(_this, __spreadArray(__spreadArray([], __read(args)), [
              function() {
                var results = [];
                for (var _i2 = 0; _i2 < arguments.length; _i2++) {
                  results[_i2] = arguments[_i2];
                }
                if (isNodeStyle) {
                  var err = results.shift();
                  if (err != null) {
                    subject.error(err);
                    return;
                  }
                }
                subject.next(1 < results.length ? results : results[0]);
                isComplete_1 = true;
                if (isAsync_1) {
                  subject.complete();
                }
              }
            ]));
            if (isComplete_1) {
              subject.complete();
            }
            isAsync_1 = true;
          }
          return subs;
        });
      };
    }
    exports.bindCallbackInternals = bindCallbackInternals;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js
var require_bindCallback = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/bindCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(false, callbackFunc, resultSelector, scheduler);
    }
    exports.bindCallback = bindCallback;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js
var require_bindNodeCallback = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/bindNodeCallback.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bindNodeCallback = void 0;
    var bindCallbackInternals_1 = require_bindCallbackInternals();
    function bindNodeCallback(callbackFunc, resultSelector, scheduler) {
      return bindCallbackInternals_1.bindCallbackInternals(true, callbackFunc, resultSelector, scheduler);
    }
    exports.bindNodeCallback = bindNodeCallback;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js
var require_argsArgArrayOrObject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/argsArgArrayOrObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argsArgArrayOrObject = void 0;
    var isArray = Array.isArray;
    var getPrototypeOf = Object.getPrototypeOf;
    var objectProto = Object.prototype;
    var getKeys = Object.keys;
    function argsArgArrayOrObject(args) {
      if (args.length === 1) {
        var first_1 = args[0];
        if (isArray(first_1)) {
          return { args: first_1, keys: null };
        }
        if (isPOJO(first_1)) {
          var keys = getKeys(first_1);
          return {
            args: keys.map(function(key) {
              return first_1[key];
            }),
            keys
          };
        }
      }
      return { args, keys: null };
    }
    exports.argsArgArrayOrObject = argsArgArrayOrObject;
    function isPOJO(obj) {
      return obj && typeof obj === "object" && getPrototypeOf(obj) === objectProto;
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/createObject.js
var require_createObject = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/createObject.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createObject = void 0;
    function createObject(keys, values) {
      return keys.reduce(function(result, key, i) {
        return result[key] = values[i], result;
      }, {});
    }
    exports.createObject = createObject;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js
var require_combineLatest = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/combineLatest.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestInit = exports.combineLatest = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var from_1 = require_from();
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var args_1 = require_args();
    var createObject_1 = require_createObject();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var executeSchedule_1 = require_executeSchedule();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var resultSelector = args_1.popResultSelector(args);
      var _a2 = argsArgArrayOrObject_1.argsArgArrayOrObject(args), observables = _a2.args, keys = _a2.keys;
      if (observables.length === 0) {
        return from_1.from([], scheduler);
      }
      var result = new Observable_1.Observable(combineLatestInit(observables, scheduler, keys ? function(values) {
        return createObject_1.createObject(keys, values);
      } : identity_1.identity));
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports.combineLatest = combineLatest;
    function combineLatestInit(observables, scheduler, valueTransform) {
      if (valueTransform === void 0) {
        valueTransform = identity_1.identity;
      }
      return function(subscriber) {
        maybeSchedule(scheduler, function() {
          var length = observables.length;
          var values = new Array(length);
          var active = length;
          var remainingFirstValues = length;
          var _loop_1 = function(i2) {
            maybeSchedule(scheduler, function() {
              var source = from_1.from(observables[i2], scheduler);
              var hasFirstValue = false;
              source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
                values[i2] = value;
                if (!hasFirstValue) {
                  hasFirstValue = true;
                  remainingFirstValues--;
                }
                if (!remainingFirstValues) {
                  subscriber.next(valueTransform(values.slice()));
                }
              }, function() {
                if (!--active) {
                  subscriber.complete();
                }
              }));
            }, subscriber);
          };
          for (var i = 0; i < length; i++) {
            _loop_1(i);
          }
        }, subscriber);
      };
    }
    exports.combineLatestInit = combineLatestInit;
    function maybeSchedule(scheduler, execute, subscription) {
      if (scheduler) {
        executeSchedule_1.executeSchedule(subscription, scheduler, execute);
      } else {
        execute();
      }
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js
var require_mergeInternals = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeInternals = void 0;
    var innerFrom_1 = require_innerFrom();
    var executeSchedule_1 = require_executeSchedule();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function() {
        if (isComplete && !buffer.length && !active) {
          subscriber.complete();
        }
      };
      var outerNext = function(value) {
        return active < concurrent ? doInnerSub(value) : buffer.push(value);
      };
      var doInnerSub = function(value) {
        expand && subscriber.next(value);
        active++;
        var innerComplete = false;
        innerFrom_1.innerFrom(project(value, index++)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
          onBeforeNext === null || onBeforeNext === void 0 ? void 0 : onBeforeNext(innerValue);
          if (expand) {
            outerNext(innerValue);
          } else {
            subscriber.next(innerValue);
          }
        }, function() {
          innerComplete = true;
        }, void 0, function() {
          if (innerComplete) {
            try {
              active--;
              var _loop_1 = function() {
                var bufferedValue = buffer.shift();
                if (innerSubScheduler) {
                  executeSchedule_1.executeSchedule(subscriber, innerSubScheduler, function() {
                    return doInnerSub(bufferedValue);
                  });
                } else {
                  doInnerSub(bufferedValue);
                }
              };
              while (buffer.length && active < concurrent) {
                _loop_1();
              }
              checkComplete();
            } catch (err) {
              subscriber.error(err);
            }
          }
        }));
      };
      source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, outerNext, function() {
        isComplete = true;
        checkComplete();
      }));
      return function() {
        additionalFinalizer === null || additionalFinalizer === void 0 ? void 0 : additionalFinalizer();
      };
    }
    exports.mergeInternals = mergeInternals;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js
var require_mergeMap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    var isFunction_1 = require_isFunction();
    function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap(function(a, i) {
          return map_1.map(function(b, ii) {
            return resultSelector(a, b, i, ii);
          })(innerFrom_1.innerFrom(project(a, i)));
        }, concurrent);
      } else if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent);
      });
    }
    exports.mergeMap = mergeMap;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js
var require_mergeAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeAll = void 0;
    var mergeMap_1 = require_mergeMap();
    var identity_1 = require_identity();
    function mergeAll(concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return mergeMap_1.mergeMap(identity_1.identity, concurrent);
    }
    exports.mergeAll = mergeAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/concatAll.js
var require_concatAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/concatAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatAll = void 0;
    var mergeAll_1 = require_mergeAll();
    function concatAll() {
      return mergeAll_1.mergeAll(1);
    }
    exports.concatAll = concatAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/concat.js
var require_concat = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/concat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = void 0;
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return concatAll_1.concatAll()(from_1.from(args, args_1.popScheduler(args)));
    }
    exports.concat = concat;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/defer.js
var require_defer = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/defer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defer = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    function defer(observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        innerFrom_1.innerFrom(observableFactory()).subscribe(subscriber);
      });
    }
    exports.defer = defer;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/connectable.js
var require_connectable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/connectable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connectable = void 0;
    var Subject_1 = require_Subject();
    var Observable_1 = require_Observable();
    var defer_1 = require_defer();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      },
      resetOnDisconnect: true
    };
    function connectable(source, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connection = null;
      var connector = config.connector, _a2 = config.resetOnDisconnect, resetOnDisconnect = _a2 === void 0 ? true : _a2;
      var subject = connector();
      var result = new Observable_1.Observable(function(subscriber) {
        return subject.subscribe(subscriber);
      });
      result.connect = function() {
        if (!connection || connection.closed) {
          connection = defer_1.defer(function() {
            return source;
          }).subscribe(subject);
          if (resetOnDisconnect) {
            connection.add(function() {
              return subject = connector();
            });
          }
        }
        return connection;
      };
      return result;
    }
    exports.connectable = connectable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js
var require_forkJoin = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/forkJoin.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.forkJoin = void 0;
    var Observable_1 = require_Observable();
    var argsArgArrayOrObject_1 = require_argsArgArrayOrObject();
    var innerFrom_1 = require_innerFrom();
    var args_1 = require_args();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var createObject_1 = require_createObject();
    function forkJoin() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var _a2 = argsArgArrayOrObject_1.argsArgArrayOrObject(args), sources = _a2.args, keys = _a2.keys;
      var result = new Observable_1.Observable(function(subscriber) {
        var length = sources.length;
        if (!length) {
          subscriber.complete();
          return;
        }
        var values = new Array(length);
        var remainingCompletions = length;
        var remainingEmissions = length;
        var _loop_1 = function(sourceIndex2) {
          var hasValue = false;
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (!hasValue) {
              hasValue = true;
              remainingEmissions--;
            }
            values[sourceIndex2] = value;
          }, function() {
            return remainingCompletions--;
          }, void 0, function() {
            if (!remainingCompletions || !hasValue) {
              if (!remainingEmissions) {
                subscriber.next(keys ? createObject_1.createObject(keys, values) : values);
              }
              subscriber.complete();
            }
          }));
        };
        for (var sourceIndex = 0; sourceIndex < length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
      });
      return resultSelector ? result.pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : result;
    }
    exports.forkJoin = forkJoin;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js
var require_fromEvent = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/fromEvent.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEvent = void 0;
    var innerFrom_1 = require_innerFrom();
    var Observable_1 = require_Observable();
    var mergeMap_1 = require_mergeMap();
    var isArrayLike_1 = require_isArrayLike();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var nodeEventEmitterMethods = ["addListener", "removeListener"];
    var eventTargetMethods = ["addEventListener", "removeEventListener"];
    var jqueryMethods = ["on", "off"];
    function fromEvent(target, eventName, options, resultSelector) {
      if (isFunction_1.isFunction(options)) {
        resultSelector = options;
        options = void 0;
      }
      if (resultSelector) {
        return fromEvent(target, eventName, options).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      var _a2 = __read(isEventTarget(target) ? eventTargetMethods.map(function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler, options);
        };
      }) : isNodeStyleEventEmitter(target) ? nodeEventEmitterMethods.map(toCommonHandlerRegistry(target, eventName)) : isJQueryStyleEventEmitter(target) ? jqueryMethods.map(toCommonHandlerRegistry(target, eventName)) : [], 2), add = _a2[0], remove2 = _a2[1];
      if (!add) {
        if (isArrayLike_1.isArrayLike(target)) {
          return mergeMap_1.mergeMap(function(subTarget) {
            return fromEvent(subTarget, eventName, options);
          })(innerFrom_1.innerFrom(target));
        }
      }
      if (!add) {
        throw new TypeError("Invalid event target");
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var args = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
          }
          return subscriber.next(1 < args.length ? args : args[0]);
        };
        add(handler);
        return function() {
          return remove2(handler);
        };
      });
    }
    exports.fromEvent = fromEvent;
    function toCommonHandlerRegistry(target, eventName) {
      return function(methodName) {
        return function(handler) {
          return target[methodName](eventName, handler);
        };
      };
    }
    function isNodeStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.addListener) && isFunction_1.isFunction(target.removeListener);
    }
    function isJQueryStyleEventEmitter(target) {
      return isFunction_1.isFunction(target.on) && isFunction_1.isFunction(target.off);
    }
    function isEventTarget(target) {
      return isFunction_1.isFunction(target.addEventListener) && isFunction_1.isFunction(target.removeEventListener);
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js
var require_fromEventPattern = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/fromEventPattern.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromEventPattern = void 0;
    var Observable_1 = require_Observable();
    var isFunction_1 = require_isFunction();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    function fromEventPattern(addHandler, removeHandler, resultSelector) {
      if (resultSelector) {
        return fromEventPattern(addHandler, removeHandler).pipe(mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector));
      }
      return new Observable_1.Observable(function(subscriber) {
        var handler = function() {
          var e = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            e[_i] = arguments[_i];
          }
          return subscriber.next(e.length === 1 ? e[0] : e);
        };
        var retValue = addHandler(handler);
        return isFunction_1.isFunction(removeHandler) ? function() {
          return removeHandler(handler, retValue);
        } : void 0;
      });
    }
    exports.fromEventPattern = fromEventPattern;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/generate.js
var require_generate = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/generate.js"(exports) {
    "use strict";
    var __generator = exports && exports.__generator || function(thisArg, body) {
      var _ = { label: 0, sent: function() {
        if (t[0] & 1)
          throw t[1];
        return t[1];
      }, trys: [], ops: [] }, f, y, t, g;
      return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
      }), g;
      function verb(n) {
        return function(v) {
          return step([n, v]);
        };
      }
      function step(op) {
        if (f)
          throw new TypeError("Generator is already executing.");
        while (_)
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
              return t;
            if (y = 0, t)
              op = [op[0] & 2, t.value];
            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;
              case 4:
                _.label++;
                return { value: op[1], done: false };
              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;
              case 7:
                op = _.ops.pop();
                _.trys.pop();
                continue;
              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }
                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }
                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }
                if (t && _.label < t[2]) {
                  _.label = t[2];
                  _.ops.push(op);
                  break;
                }
                if (t[2])
                  _.ops.pop();
                _.trys.pop();
                continue;
            }
            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        if (op[0] & 5)
          throw op[1];
        return { value: op[0] ? op[1] : void 0, done: true };
      }
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.generate = void 0;
    var identity_1 = require_identity();
    var isScheduler_1 = require_isScheduler();
    var defer_1 = require_defer();
    var scheduleIterable_1 = require_scheduleIterable();
    function generate(initialStateOrOptions, condition, iterate, resultSelectorOrScheduler, scheduler) {
      var _a2, _b;
      var resultSelector;
      var initialState;
      if (arguments.length === 1) {
        _a2 = initialStateOrOptions, initialState = _a2.initialState, condition = _a2.condition, iterate = _a2.iterate, _b = _a2.resultSelector, resultSelector = _b === void 0 ? identity_1.identity : _b, scheduler = _a2.scheduler;
      } else {
        initialState = initialStateOrOptions;
        if (!resultSelectorOrScheduler || isScheduler_1.isScheduler(resultSelectorOrScheduler)) {
          resultSelector = identity_1.identity;
          scheduler = resultSelectorOrScheduler;
        } else {
          resultSelector = resultSelectorOrScheduler;
        }
      }
      function gen() {
        var state;
        return __generator(this, function(_a3) {
          switch (_a3.label) {
            case 0:
              state = initialState;
              _a3.label = 1;
            case 1:
              if (!(!condition || condition(state)))
                return [3, 4];
              return [4, resultSelector(state)];
            case 2:
              _a3.sent();
              _a3.label = 3;
            case 3:
              state = iterate(state);
              return [3, 1];
            case 4:
              return [2];
          }
        });
      }
      return defer_1.defer(scheduler ? function() {
        return scheduleIterable_1.scheduleIterable(gen(), scheduler);
      } : gen);
    }
    exports.generate = generate;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/iif.js
var require_iif = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/iif.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.iif = void 0;
    var defer_1 = require_defer();
    function iif(condition, trueResult, falseResult) {
      return defer_1.defer(function() {
        return condition() ? trueResult : falseResult;
      });
    }
    exports.iif = iif;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/timer.js
var require_timer = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/timer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timer = void 0;
    var Observable_1 = require_Observable();
    var async_1 = require_async();
    var isScheduler_1 = require_isScheduler();
    var isDate_1 = require_isDate();
    function timer(dueTime, intervalOrScheduler, scheduler) {
      if (dueTime === void 0) {
        dueTime = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.async;
      }
      var intervalDuration = -1;
      if (intervalOrScheduler != null) {
        if (isScheduler_1.isScheduler(intervalOrScheduler)) {
          scheduler = intervalOrScheduler;
        } else {
          intervalDuration = intervalOrScheduler;
        }
      }
      return new Observable_1.Observable(function(subscriber) {
        var due = isDate_1.isValidDate(dueTime) ? +dueTime - scheduler.now() : dueTime;
        if (due < 0) {
          due = 0;
        }
        var n = 0;
        return scheduler.schedule(function() {
          if (!subscriber.closed) {
            subscriber.next(n++);
            if (0 <= intervalDuration) {
              this.schedule(void 0, intervalDuration);
            } else {
              subscriber.complete();
            }
          }
        }, due);
      });
    }
    exports.timer = timer;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/interval.js
var require_interval = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/interval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interval = void 0;
    var async_1 = require_async();
    var timer_1 = require_timer();
    function interval(period, scheduler) {
      if (period === void 0) {
        period = 0;
      }
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      if (period < 0) {
        period = 0;
      }
      return timer_1.timer(period, period, scheduler);
    }
    exports.interval = interval;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/merge.js
var require_merge = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/merge.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var mergeAll_1 = require_mergeAll();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      var sources = args;
      return !sources.length ? empty_1.EMPTY : sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : mergeAll_1.mergeAll(concurrent)(from_1.from(sources, scheduler));
    }
    exports.merge = merge2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/never.js
var require_never = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/never.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.never = exports.NEVER = void 0;
    var Observable_1 = require_Observable();
    var noop_1 = require_noop();
    exports.NEVER = new Observable_1.Observable(noop_1.noop);
    function never() {
      return exports.NEVER;
    }
    exports.never = never;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js
var require_argsOrArgArray = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/argsOrArgArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.argsOrArgArray = void 0;
    var isArray = Array.isArray;
    function argsOrArgArray(args) {
      return args.length === 1 && isArray(args[0]) ? args[0] : args;
    }
    exports.argsOrArgArray = argsOrArgArray;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js
var require_onErrorResumeNext = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/onErrorResumeNext.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onErrorResumeNext = void 0;
    var Observable_1 = require_Observable();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function onErrorResumeNext() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return new Observable_1.Observable(function(subscriber) {
        var sourceIndex = 0;
        var subscribeNext = function() {
          if (sourceIndex < nextSources.length) {
            var nextSource = void 0;
            try {
              nextSource = innerFrom_1.innerFrom(nextSources[sourceIndex++]);
            } catch (err) {
              subscribeNext();
              return;
            }
            var innerSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, void 0, noop_1.noop, noop_1.noop);
            nextSource.subscribe(innerSubscriber);
            innerSubscriber.add(subscribeNext);
          } else {
            subscriber.complete();
          }
        };
        subscribeNext();
      });
    }
    exports.onErrorResumeNext = onErrorResumeNext;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/pairs.js
var require_pairs = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/pairs.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pairs = void 0;
    var from_1 = require_from();
    function pairs(obj, scheduler) {
      return from_1.from(Object.entries(obj), scheduler);
    }
    exports.pairs = pairs;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/util/not.js
var require_not = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/util/not.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.not = void 0;
    function not(pred, thisArg) {
      return function(value, index) {
        return !pred.call(thisArg, value, index);
      };
    }
    exports.not = not;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/filter.js
var require_filter = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/filter.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.filter = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function filter(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return predicate.call(thisArg, value, index++) && subscriber.next(value);
        }));
      });
    }
    exports.filter = filter;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/partition.js
var require_partition = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    var innerFrom_1 = require_innerFrom();
    function partition(source, predicate, thisArg) {
      return [filter_1.filter(predicate, thisArg)(innerFrom_1.innerFrom(source)), filter_1.filter(not_1.not(predicate, thisArg))(innerFrom_1.innerFrom(source))];
    }
    exports.partition = partition;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/race.js
var require_race = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/race.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.raceInit = exports.race = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function race() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      sources = argsOrArgArray_1.argsOrArgArray(sources);
      return sources.length === 1 ? innerFrom_1.innerFrom(sources[0]) : new Observable_1.Observable(raceInit(sources));
    }
    exports.race = race;
    function raceInit(sources) {
      return function(subscriber) {
        var subscriptions = [];
        var _loop_1 = function(i2) {
          subscriptions.push(innerFrom_1.innerFrom(sources[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (subscriptions) {
              for (var s = 0; s < subscriptions.length; s++) {
                s !== i2 && subscriptions[s].unsubscribe();
              }
              subscriptions = null;
            }
            subscriber.next(value);
          })));
        };
        for (var i = 0; subscriptions && !subscriber.closed && i < sources.length; i++) {
          _loop_1(i);
        }
      };
    }
    exports.raceInit = raceInit;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/range.js
var require_range = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/range.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.range = void 0;
    var Observable_1 = require_Observable();
    var empty_1 = require_empty();
    function range(start, count, scheduler) {
      if (count == null) {
        count = start;
        start = 0;
      }
      if (count <= 0) {
        return empty_1.EMPTY;
      }
      var end = count + start;
      return new Observable_1.Observable(scheduler ? function(subscriber) {
        var n = start;
        return scheduler.schedule(function() {
          if (n < end) {
            subscriber.next(n++);
            this.schedule();
          } else {
            subscriber.complete();
          }
        });
      } : function(subscriber) {
        var n = start;
        while (n < end && !subscriber.closed) {
          subscriber.next(n++);
        }
        subscriber.complete();
      });
    }
    exports.range = range;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/using.js
var require_using = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/using.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.using = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var empty_1 = require_empty();
    function using(resourceFactory, observableFactory) {
      return new Observable_1.Observable(function(subscriber) {
        var resource = resourceFactory();
        var result = observableFactory(resource);
        var source = result ? innerFrom_1.innerFrom(result) : empty_1.EMPTY;
        source.subscribe(subscriber);
        return function() {
          if (resource) {
            resource.unsubscribe();
          }
        };
      });
    }
    exports.using = using;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/zip.js
var require_zip = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zip = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var empty_1 = require_empty();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var args_1 = require_args();
    function zip() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      var sources = argsOrArgArray_1.argsOrArgArray(args);
      return sources.length ? new Observable_1.Observable(function(subscriber) {
        var buffers = sources.map(function() {
          return [];
        });
        var completed = sources.map(function() {
          return false;
        });
        subscriber.add(function() {
          buffers = completed = null;
        });
        var _loop_1 = function(sourceIndex2) {
          innerFrom_1.innerFrom(sources[sourceIndex2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            buffers[sourceIndex2].push(value);
            if (buffers.every(function(buffer) {
              return buffer.length;
            })) {
              var result = buffers.map(function(buffer) {
                return buffer.shift();
              });
              subscriber.next(resultSelector ? resultSelector.apply(void 0, __spreadArray([], __read(result))) : result);
              if (buffers.some(function(buffer, i) {
                return !buffer.length && completed[i];
              })) {
                subscriber.complete();
              }
            }
          }, function() {
            completed[sourceIndex2] = true;
            !buffers[sourceIndex2].length && subscriber.complete();
          }));
        };
        for (var sourceIndex = 0; !subscriber.closed && sourceIndex < sources.length; sourceIndex++) {
          _loop_1(sourceIndex);
        }
        return function() {
          buffers = completed = null;
        };
      }) : empty_1.EMPTY;
    }
    exports.zip = zip;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/types.js
var require_types = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/types.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/audit.js
var require_audit = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/audit.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.audit = void 0;
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function audit(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var isComplete = false;
        var endDuration = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
          isComplete && subscriber.complete();
        };
        var cleanupDuration = function() {
          durationSubscriber = null;
          isComplete && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
          if (!durationSubscriber) {
            innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, endDuration, cleanupDuration));
          }
        }, function() {
          isComplete = true;
          (!hasValue || !durationSubscriber || durationSubscriber.closed) && subscriber.complete();
        }));
      });
    }
    exports.audit = audit;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/auditTime.js
var require_auditTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/auditTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.auditTime = void 0;
    var async_1 = require_async();
    var audit_1 = require_audit();
    var timer_1 = require_timer();
    function auditTime(duration, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return audit_1.audit(function() {
        return timer_1.timer(duration, scheduler);
      });
    }
    exports.auditTime = auditTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/buffer.js
var require_buffer = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/buffer.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.buffer = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function buffer(closingNotifier) {
      return lift_1.operate(function(source, subscriber) {
        var currentBuffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return currentBuffer.push(value);
        }, function() {
          subscriber.next(currentBuffer);
          subscriber.complete();
        }));
        innerFrom_1.innerFrom(closingNotifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          var b = currentBuffer;
          currentBuffer = [];
          subscriber.next(b);
        }, noop_1.noop));
        return function() {
          currentBuffer = null;
        };
      });
    }
    exports.buffer = buffer;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js
var require_bufferCount = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/bufferCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferCount = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    function bufferCount(bufferSize, startBufferEvery) {
      if (startBufferEvery === void 0) {
        startBufferEvery = null;
      }
      startBufferEvery = startBufferEvery !== null && startBufferEvery !== void 0 ? startBufferEvery : bufferSize;
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        var count = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2, e_2, _b;
          var toEmit = null;
          if (count++ % startBufferEvery === 0) {
            buffers.push([]);
          }
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
              if (bufferSize <= buffer.length) {
                toEmit = toEmit !== null && toEmit !== void 0 ? toEmit : [];
                toEmit.push(buffer);
              }
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a2 = buffers_1.return))
                _a2.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          if (toEmit) {
            try {
              for (var toEmit_1 = __values(toEmit), toEmit_1_1 = toEmit_1.next(); !toEmit_1_1.done; toEmit_1_1 = toEmit_1.next()) {
                var buffer = toEmit_1_1.value;
                arrRemove_1.arrRemove(buffers, buffer);
                subscriber.next(buffer);
              }
            } catch (e_2_1) {
              e_2 = { error: e_2_1 };
            } finally {
              try {
                if (toEmit_1_1 && !toEmit_1_1.done && (_b = toEmit_1.return))
                  _b.call(toEmit_1);
              } finally {
                if (e_2)
                  throw e_2.error;
              }
            }
          }
        }, function() {
          var e_3, _a2;
          try {
            for (var buffers_2 = __values(buffers), buffers_2_1 = buffers_2.next(); !buffers_2_1.done; buffers_2_1 = buffers_2.next()) {
              var buffer = buffers_2_1.value;
              subscriber.next(buffer);
            }
          } catch (e_3_1) {
            e_3 = { error: e_3_1 };
          } finally {
            try {
              if (buffers_2_1 && !buffers_2_1.done && (_a2 = buffers_2.return))
                _a2.call(buffers_2);
            } finally {
              if (e_3)
                throw e_3.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffers = null;
        }));
      });
    }
    exports.bufferCount = bufferCount;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js
var require_bufferTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/bufferTime.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferTime = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var async_1 = require_async();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function bufferTime(bufferTimeSpan) {
      var _a2, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a2 = args_1.popScheduler(otherArgs)) !== null && _a2 !== void 0 ? _a2 : async_1.asyncScheduler;
      var bufferCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxBufferSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var bufferRecords = [];
        var restartOnEmit = false;
        var emit = function(record) {
          var buffer = record.buffer, subs = record.subs;
          subs.unsubscribe();
          arrRemove_1.arrRemove(bufferRecords, record);
          subscriber.next(buffer);
          restartOnEmit && startBuffer();
        };
        var startBuffer = function() {
          if (bufferRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var buffer = [];
            var record_1 = {
              buffer,
              subs
            };
            bufferRecords.push(record_1);
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return emit(record_1);
            }, bufferTimeSpan);
          }
        };
        if (bufferCreationInterval !== null && bufferCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startBuffer, bufferCreationInterval, true);
        } else {
          restartOnEmit = true;
        }
        startBuffer();
        var bufferTimeSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a3;
          var recordsCopy = bufferRecords.slice();
          try {
            for (var recordsCopy_1 = __values(recordsCopy), recordsCopy_1_1 = recordsCopy_1.next(); !recordsCopy_1_1.done; recordsCopy_1_1 = recordsCopy_1.next()) {
              var record = recordsCopy_1_1.value;
              var buffer = record.buffer;
              buffer.push(value);
              maxBufferSize <= buffer.length && emit(record);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (recordsCopy_1_1 && !recordsCopy_1_1.done && (_a3 = recordsCopy_1.return))
                _a3.call(recordsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (bufferRecords === null || bufferRecords === void 0 ? void 0 : bufferRecords.length) {
            subscriber.next(bufferRecords.shift().buffer);
          }
          bufferTimeSubscriber === null || bufferTimeSubscriber === void 0 ? void 0 : bufferTimeSubscriber.unsubscribe();
          subscriber.complete();
          subscriber.unsubscribe();
        }, void 0, function() {
          return bufferRecords = null;
        });
        source.subscribe(bufferTimeSubscriber);
      });
    }
    exports.bufferTime = bufferTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js
var require_bufferToggle = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/bufferToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferToggle = void 0;
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function bufferToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffers = [];
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var buffer = [];
          buffers.push(buffer);
          var closingSubscription = new Subscription_1.Subscription();
          var emitBuffer = function() {
            arrRemove_1.arrRemove(buffers, buffer);
            subscriber.next(buffer);
            closingSubscription.unsubscribe();
          };
          closingSubscription.add(innerFrom_1.innerFrom(closingSelector(openValue)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, emitBuffer, noop_1.noop)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          try {
            for (var buffers_1 = __values(buffers), buffers_1_1 = buffers_1.next(); !buffers_1_1.done; buffers_1_1 = buffers_1.next()) {
              var buffer = buffers_1_1.value;
              buffer.push(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffers_1_1 && !buffers_1_1.done && (_a2 = buffers_1.return))
                _a2.call(buffers_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (buffers.length > 0) {
            subscriber.next(buffers.shift());
          }
          subscriber.complete();
        }));
      });
    }
    exports.bufferToggle = bufferToggle;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js
var require_bufferWhen = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/bufferWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.bufferWhen = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function bufferWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var buffer = null;
        var closingSubscriber = null;
        var openBuffer = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          var b = buffer;
          buffer = [];
          b && subscriber.next(b);
          innerFrom_1.innerFrom(closingSelector()).subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openBuffer, noop_1.noop));
        };
        openBuffer();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return buffer === null || buffer === void 0 ? void 0 : buffer.push(value);
        }, function() {
          buffer && subscriber.next(buffer);
          subscriber.complete();
        }, void 0, function() {
          return buffer = closingSubscriber = null;
        }));
      });
    }
    exports.bufferWhen = bufferWhen;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/catchError.js
var require_catchError = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/catchError.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.catchError = void 0;
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var lift_1 = require_lift();
    function catchError(selector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub = null;
        var syncUnsub = false;
        var handledResult;
        innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
          handledResult = innerFrom_1.innerFrom(selector(err, catchError(selector)(source)));
          if (innerSub) {
            innerSub.unsubscribe();
            innerSub = null;
            handledResult.subscribe(subscriber);
          } else {
            syncUnsub = true;
          }
        }));
        if (syncUnsub) {
          innerSub.unsubscribe();
          innerSub = null;
          handledResult.subscribe(subscriber);
        }
      });
    }
    exports.catchError = catchError;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js
var require_scanInternals = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/scanInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scanInternals = void 0;
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function scanInternals(accumulator, seed, hasSeed, emitOnNext, emitBeforeComplete) {
      return function(source, subscriber) {
        var hasState = hasSeed;
        var state = seed;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          state = hasState ? accumulator(state, value, i) : (hasState = true, value);
          emitOnNext && subscriber.next(state);
        }, emitBeforeComplete && function() {
          hasState && subscriber.next(state);
          subscriber.complete();
        }));
      };
    }
    exports.scanInternals = scanInternals;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/reduce.js
var require_reduce = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/reduce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.reduce = void 0;
    var scanInternals_1 = require_scanInternals();
    var lift_1 = require_lift();
    function reduce(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, false, true));
    }
    exports.reduce = reduce;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/toArray.js
var require_toArray = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/toArray.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.toArray = void 0;
    var reduce_1 = require_reduce();
    var lift_1 = require_lift();
    var arrReducer = function(arr, value) {
      return arr.push(value), arr;
    };
    function toArray() {
      return lift_1.operate(function(source, subscriber) {
        reduce_1.reduce(arrReducer, [])(source).subscribe(subscriber);
      });
    }
    exports.toArray = toArray;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js
var require_joinAllInternals = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/joinAllInternals.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.joinAllInternals = void 0;
    var identity_1 = require_identity();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var mergeMap_1 = require_mergeMap();
    var toArray_1 = require_toArray();
    function joinAllInternals(joinFn, project) {
      return pipe_1.pipe(toArray_1.toArray(), mergeMap_1.mergeMap(function(sources) {
        return joinFn(sources);
      }), project ? mapOneOrManyArgs_1.mapOneOrManyArgs(project) : identity_1.identity);
    }
    exports.joinAllInternals = joinAllInternals;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js
var require_combineLatestAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestAll = void 0;
    var combineLatest_1 = require_combineLatest();
    var joinAllInternals_1 = require_joinAllInternals();
    function combineLatestAll(project) {
      return joinAllInternals_1.joinAllInternals(combineLatest_1.combineLatest, project);
    }
    exports.combineLatestAll = combineLatestAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/combineAll.js
var require_combineAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/combineAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineAll = void 0;
    var combineLatestAll_1 = require_combineLatestAll();
    exports.combineAll = combineLatestAll_1.combineLatestAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js
var require_combineLatest2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/combineLatest.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatest = void 0;
    var combineLatest_1 = require_combineLatest();
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mapOneOrManyArgs_1 = require_mapOneOrManyArgs();
    var pipe_1 = require_pipe();
    var args_1 = require_args();
    function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var resultSelector = args_1.popResultSelector(args);
      return resultSelector ? pipe_1.pipe(combineLatest.apply(void 0, __spreadArray([], __read(args))), mapOneOrManyArgs_1.mapOneOrManyArgs(resultSelector)) : lift_1.operate(function(source, subscriber) {
        combineLatest_1.combineLatestInit(__spreadArray([source], __read(argsOrArgArray_1.argsOrArgArray(args))))(subscriber);
      });
    }
    exports.combineLatest = combineLatest;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js
var require_combineLatestWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/combineLatestWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.combineLatestWith = void 0;
    var combineLatest_1 = require_combineLatest2();
    function combineLatestWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return combineLatest_1.combineLatest.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.combineLatestWith = combineLatestWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/concatMap.js
var require_concatMap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/concatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function concatMap(project, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? mergeMap_1.mergeMap(project, resultSelector, 1) : mergeMap_1.mergeMap(project, 1);
    }
    exports.concatMap = concatMap;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js
var require_concatMapTo = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/concatMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatMapTo = void 0;
    var concatMap_1 = require_concatMap();
    var isFunction_1 = require_isFunction();
    function concatMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? concatMap_1.concatMap(function() {
        return innerObservable;
      }, resultSelector) : concatMap_1.concatMap(function() {
        return innerObservable;
      });
    }
    exports.concatMapTo = concatMapTo;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/concat.js
var require_concat2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/concat.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concat = void 0;
    var lift_1 = require_lift();
    var concatAll_1 = require_concatAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      return lift_1.operate(function(source, subscriber) {
        concatAll_1.concatAll()(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports.concat = concat;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/concatWith.js
var require_concatWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/concatWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.concatWith = void 0;
    var concat_1 = require_concat2();
    function concatWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return concat_1.concat.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.concatWith = concatWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js
var require_fromSubscribable = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/observable/fromSubscribable.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.fromSubscribable = void 0;
    var Observable_1 = require_Observable();
    function fromSubscribable(subscribable) {
      return new Observable_1.Observable(function(subscriber) {
        return subscribable.subscribe(subscriber);
      });
    }
    exports.fromSubscribable = fromSubscribable;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/connect.js
var require_connect = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/connect.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.connect = void 0;
    var Subject_1 = require_Subject();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var fromSubscribable_1 = require_fromSubscribable();
    var DEFAULT_CONFIG = {
      connector: function() {
        return new Subject_1.Subject();
      }
    };
    function connect(selector, config) {
      if (config === void 0) {
        config = DEFAULT_CONFIG;
      }
      var connector = config.connector;
      return lift_1.operate(function(source, subscriber) {
        var subject = connector();
        innerFrom_1.innerFrom(selector(fromSubscribable_1.fromSubscribable(subject))).subscribe(subscriber);
        subscriber.add(source.subscribe(subject));
      });
    }
    exports.connect = connect;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/count.js
var require_count = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/count.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.count = void 0;
    var reduce_1 = require_reduce();
    function count(predicate) {
      return reduce_1.reduce(function(total, value, i) {
        return !predicate || predicate(value, i) ? total + 1 : total;
      }, 0);
    }
    exports.count = count;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/debounce.js
var require_debounce = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/debounce.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debounce = void 0;
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function debounce(durationSelector) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        var durationSubscriber = null;
        var emit = function() {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          durationSubscriber = null;
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          durationSubscriber === null || durationSubscriber === void 0 ? void 0 : durationSubscriber.unsubscribe();
          hasValue = true;
          lastValue = value;
          durationSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, emit, noop_1.noop);
          innerFrom_1.innerFrom(durationSelector(value)).subscribe(durationSubscriber);
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = durationSubscriber = null;
        }));
      });
    }
    exports.debounce = debounce;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js
var require_debounceTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/debounceTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.debounceTime = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function debounceTime(dueTime, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var activeTask = null;
        var lastValue = null;
        var lastTime = null;
        var emit = function() {
          if (activeTask) {
            activeTask.unsubscribe();
            activeTask = null;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        };
        function emitWhenIdle() {
          var targetTime = lastTime + dueTime;
          var now = scheduler.now();
          if (now < targetTime) {
            activeTask = this.schedule(void 0, targetTime - now);
            subscriber.add(activeTask);
            return;
          }
          emit();
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          lastValue = value;
          lastTime = scheduler.now();
          if (!activeTask) {
            activeTask = scheduler.schedule(emitWhenIdle, dueTime);
            subscriber.add(activeTask);
          }
        }, function() {
          emit();
          subscriber.complete();
        }, void 0, function() {
          lastValue = activeTask = null;
        }));
      });
    }
    exports.debounceTime = debounceTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js
var require_defaultIfEmpty = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/defaultIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.defaultIfEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function defaultIfEmpty(defaultValue) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          if (!hasValue) {
            subscriber.next(defaultValue);
          }
          subscriber.complete();
        }));
      });
    }
    exports.defaultIfEmpty = defaultIfEmpty;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/take.js
var require_take = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/take.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.take = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function take(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (++seen <= count) {
            subscriber.next(value);
            if (count <= seen) {
              subscriber.complete();
            }
          }
        }));
      });
    }
    exports.take = take;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js
var require_ignoreElements = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/ignoreElements.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.ignoreElements = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    function ignoreElements() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, noop_1.noop));
      });
    }
    exports.ignoreElements = ignoreElements;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mapTo.js
var require_mapTo = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mapTo = void 0;
    var map_1 = require_map();
    function mapTo(value) {
      return map_1.map(function() {
        return value;
      });
    }
    exports.mapTo = mapTo;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js
var require_delayWhen = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/delayWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delayWhen = void 0;
    var concat_1 = require_concat();
    var take_1 = require_take();
    var ignoreElements_1 = require_ignoreElements();
    var mapTo_1 = require_mapTo();
    var mergeMap_1 = require_mergeMap();
    var innerFrom_1 = require_innerFrom();
    function delayWhen(delayDurationSelector, subscriptionDelay) {
      if (subscriptionDelay) {
        return function(source) {
          return concat_1.concat(subscriptionDelay.pipe(take_1.take(1), ignoreElements_1.ignoreElements()), source.pipe(delayWhen(delayDurationSelector)));
        };
      }
      return mergeMap_1.mergeMap(function(value, index) {
        return innerFrom_1.innerFrom(delayDurationSelector(value, index)).pipe(take_1.take(1), mapTo_1.mapTo(value));
      });
    }
    exports.delayWhen = delayWhen;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/delay.js
var require_delay = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/delay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.delay = void 0;
    var async_1 = require_async();
    var delayWhen_1 = require_delayWhen();
    var timer_1 = require_timer();
    function delay(due, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration = timer_1.timer(due, scheduler);
      return delayWhen_1.delayWhen(function() {
        return duration;
      });
    }
    exports.delay = delay;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js
var require_dematerialize = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/dematerialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.dematerialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function dematerialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(notification) {
          return Notification_1.observeNotification(notification, subscriber);
        }));
      });
    }
    exports.dematerialize = dematerialize;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/distinct.js
var require_distinct = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/distinct.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinct = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function distinct(keySelector, flushes) {
      return lift_1.operate(function(source, subscriber) {
        var distinctKeys = /* @__PURE__ */ new Set();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var key = keySelector ? keySelector(value) : value;
          if (!distinctKeys.has(key)) {
            distinctKeys.add(key);
            subscriber.next(value);
          }
        }));
        flushes && innerFrom_1.innerFrom(flushes).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return distinctKeys.clear();
        }, noop_1.noop));
      });
    }
    exports.distinct = distinct;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js
var require_distinctUntilChanged = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinctUntilChanged = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function distinctUntilChanged2(comparator, keySelector) {
      if (keySelector === void 0) {
        keySelector = identity_1.identity;
      }
      comparator = comparator !== null && comparator !== void 0 ? comparator : defaultCompare;
      return lift_1.operate(function(source, subscriber) {
        var previousKey;
        var first2 = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var currentKey = keySelector(value);
          if (first2 || !comparator(previousKey, currentKey)) {
            first2 = false;
            previousKey = currentKey;
            subscriber.next(value);
          }
        }));
      });
    }
    exports.distinctUntilChanged = distinctUntilChanged2;
    function defaultCompare(a, b) {
      return a === b;
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js
var require_distinctUntilKeyChanged = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/distinctUntilKeyChanged.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.distinctUntilKeyChanged = void 0;
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    function distinctUntilKeyChanged(key, compare) {
      return distinctUntilChanged_1.distinctUntilChanged(function(x, y) {
        return compare ? compare(x[key], y[key]) : x[key] === y[key];
      });
    }
    exports.distinctUntilKeyChanged = distinctUntilKeyChanged;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js
var require_throwIfEmpty = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/throwIfEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throwIfEmpty = void 0;
    var EmptyError_1 = require_EmptyError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function throwIfEmpty(errorFactory) {
      if (errorFactory === void 0) {
        errorFactory = defaultErrorFactory;
      }
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          subscriber.next(value);
        }, function() {
          return hasValue ? subscriber.complete() : subscriber.error(errorFactory());
        }));
      });
    }
    exports.throwIfEmpty = throwIfEmpty;
    function defaultErrorFactory() {
      return new EmptyError_1.EmptyError();
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/elementAt.js
var require_elementAt = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/elementAt.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.elementAt = void 0;
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    var filter_1 = require_filter();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var take_1 = require_take();
    function elementAt(index, defaultValue) {
      if (index < 0) {
        throw new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
      }
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(filter_1.filter(function(v, i) {
          return i === index;
        }), take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new ArgumentOutOfRangeError_1.ArgumentOutOfRangeError();
        }));
      };
    }
    exports.elementAt = elementAt;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/endWith.js
var require_endWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/endWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.endWith = void 0;
    var concat_1 = require_concat();
    var of_1 = require_of();
    function endWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      return function(source) {
        return concat_1.concat(source, of_1.of.apply(void 0, __spreadArray([], __read(values))));
      };
    }
    exports.endWith = endWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/every.js
var require_every = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/every.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.every = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function every(predicate, thisArg) {
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (!predicate.call(thisArg, value, index++, source)) {
            subscriber.next(false);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports.every = every;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js
var require_exhaustMap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/exhaustMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaustMap = void 0;
    var map_1 = require_map();
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function exhaustMap(project, resultSelector) {
      if (resultSelector) {
        return function(source) {
          return source.pipe(exhaustMap(function(a, i) {
            return innerFrom_1.innerFrom(project(a, i)).pipe(map_1.map(function(b, ii) {
              return resultSelector(a, b, i, ii);
            }));
          }));
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        var innerSub = null;
        var isComplete = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(outerValue) {
          if (!innerSub) {
            innerSub = OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
              innerSub = null;
              isComplete && subscriber.complete();
            });
            innerFrom_1.innerFrom(project(outerValue, index++)).subscribe(innerSub);
          }
        }, function() {
          isComplete = true;
          !innerSub && subscriber.complete();
        }));
      });
    }
    exports.exhaustMap = exhaustMap;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js
var require_exhaustAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/exhaustAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaustAll = void 0;
    var exhaustMap_1 = require_exhaustMap();
    var identity_1 = require_identity();
    function exhaustAll() {
      return exhaustMap_1.exhaustMap(identity_1.identity);
    }
    exports.exhaustAll = exhaustAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/exhaust.js
var require_exhaust = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/exhaust.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.exhaust = void 0;
    var exhaustAll_1 = require_exhaustAll();
    exports.exhaust = exhaustAll_1.exhaustAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/expand.js
var require_expand = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/expand.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.expand = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function expand(project, concurrent, scheduler) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      concurrent = (concurrent || 0) < 1 ? Infinity : concurrent;
      return lift_1.operate(function(source, subscriber) {
        return mergeInternals_1.mergeInternals(source, subscriber, project, concurrent, void 0, true, scheduler);
      });
    }
    exports.expand = expand;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/finalize.js
var require_finalize = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/finalize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.finalize = void 0;
    var lift_1 = require_lift();
    function finalize(callback) {
      return lift_1.operate(function(source, subscriber) {
        try {
          source.subscribe(subscriber);
        } finally {
          subscriber.add(callback);
        }
      });
    }
    exports.finalize = finalize;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/find.js
var require_find = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/find.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.createFind = exports.find = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function find(predicate, thisArg) {
      return lift_1.operate(createFind(predicate, thisArg, "value"));
    }
    exports.find = find;
    function createFind(predicate, thisArg, emit) {
      var findIndex = emit === "index";
      return function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var i = index++;
          if (predicate.call(thisArg, value, i, source)) {
            subscriber.next(findIndex ? i : value);
            subscriber.complete();
          }
        }, function() {
          subscriber.next(findIndex ? -1 : void 0);
          subscriber.complete();
        }));
      };
    }
    exports.createFind = createFind;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/findIndex.js
var require_findIndex = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/findIndex.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.findIndex = void 0;
    var lift_1 = require_lift();
    var find_1 = require_find();
    function findIndex(predicate, thisArg) {
      return lift_1.operate(find_1.createFind(predicate, thisArg, "index"));
    }
    exports.findIndex = findIndex;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/first.js
var require_first = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/first.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.first = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var take_1 = require_take();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var identity_1 = require_identity();
    function first2(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, take_1.take(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports.first = first2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/groupBy.js
var require_groupBy = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/groupBy.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.groupBy = void 0;
    var Observable_1 = require_Observable();
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function groupBy(keySelector, elementOrOptions, duration, connector) {
      return lift_1.operate(function(source, subscriber) {
        var element;
        if (!elementOrOptions || typeof elementOrOptions === "function") {
          element = elementOrOptions;
        } else {
          duration = elementOrOptions.duration, element = elementOrOptions.element, connector = elementOrOptions.connector;
        }
        var groups = /* @__PURE__ */ new Map();
        var notify = function(cb) {
          groups.forEach(cb);
          cb(subscriber);
        };
        var handleError2 = function(err) {
          return notify(function(consumer) {
            return consumer.error(err);
          });
        };
        var activeGroups = 0;
        var teardownAttempted = false;
        var groupBySourceSubscriber = new OperatorSubscriber_1.OperatorSubscriber(subscriber, function(value) {
          try {
            var key_1 = keySelector(value);
            var group_1 = groups.get(key_1);
            if (!group_1) {
              groups.set(key_1, group_1 = connector ? connector() : new Subject_1.Subject());
              var grouped = createGroupedObservable(key_1, group_1);
              subscriber.next(grouped);
              if (duration) {
                var durationSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(group_1, function() {
                  group_1.complete();
                  durationSubscriber_1 === null || durationSubscriber_1 === void 0 ? void 0 : durationSubscriber_1.unsubscribe();
                }, void 0, void 0, function() {
                  return groups.delete(key_1);
                });
                groupBySourceSubscriber.add(innerFrom_1.innerFrom(duration(grouped)).subscribe(durationSubscriber_1));
              }
            }
            group_1.next(element ? element(value) : value);
          } catch (err) {
            handleError2(err);
          }
        }, function() {
          return notify(function(consumer) {
            return consumer.complete();
          });
        }, handleError2, function() {
          return groups.clear();
        }, function() {
          teardownAttempted = true;
          return activeGroups === 0;
        });
        source.subscribe(groupBySourceSubscriber);
        function createGroupedObservable(key, groupSubject) {
          var result = new Observable_1.Observable(function(groupSubscriber) {
            activeGroups++;
            var innerSub = groupSubject.subscribe(groupSubscriber);
            return function() {
              innerSub.unsubscribe();
              --activeGroups === 0 && teardownAttempted && groupBySourceSubscriber.unsubscribe();
            };
          });
          result.key = key;
          return result;
        }
      });
    }
    exports.groupBy = groupBy;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js
var require_isEmpty = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/isEmpty.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.isEmpty = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function isEmpty() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          subscriber.next(false);
          subscriber.complete();
        }, function() {
          subscriber.next(true);
          subscriber.complete();
        }));
      });
    }
    exports.isEmpty = isEmpty;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/takeLast.js
var require_takeLast = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/takeLast.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeLast = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeLast(count) {
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var buffer = [];
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          buffer.push(value);
          count < buffer.length && buffer.shift();
        }, function() {
          var e_1, _a2;
          try {
            for (var buffer_1 = __values(buffer), buffer_1_1 = buffer_1.next(); !buffer_1_1.done; buffer_1_1 = buffer_1.next()) {
              var value = buffer_1_1.value;
              subscriber.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (buffer_1_1 && !buffer_1_1.done && (_a2 = buffer_1.return))
                _a2.call(buffer_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          subscriber.complete();
        }, void 0, function() {
          buffer = null;
        }));
      });
    }
    exports.takeLast = takeLast;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/last.js
var require_last = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/last.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.last = void 0;
    var EmptyError_1 = require_EmptyError();
    var filter_1 = require_filter();
    var takeLast_1 = require_takeLast();
    var throwIfEmpty_1 = require_throwIfEmpty();
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    var identity_1 = require_identity();
    function last(predicate, defaultValue) {
      var hasDefaultValue = arguments.length >= 2;
      return function(source) {
        return source.pipe(predicate ? filter_1.filter(function(v, i) {
          return predicate(v, i, source);
        }) : identity_1.identity, takeLast_1.takeLast(1), hasDefaultValue ? defaultIfEmpty_1.defaultIfEmpty(defaultValue) : throwIfEmpty_1.throwIfEmpty(function() {
          return new EmptyError_1.EmptyError();
        }));
      };
    }
    exports.last = last;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/materialize.js
var require_materialize = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/materialize.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.materialize = void 0;
    var Notification_1 = require_Notification();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function materialize() {
      return lift_1.operate(function(source, subscriber) {
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          subscriber.next(Notification_1.Notification.createNext(value));
        }, function() {
          subscriber.next(Notification_1.Notification.createComplete());
          subscriber.complete();
        }, function(err) {
          subscriber.next(Notification_1.Notification.createError(err));
          subscriber.complete();
        }));
      });
    }
    exports.materialize = materialize;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/max.js
var require_max = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/max.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.max = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function max(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) > 0 ? x : y;
      } : function(x, y) {
        return x > y ? x : y;
      });
    }
    exports.max = max;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/flatMap.js
var require_flatMap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/flatMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.flatMap = void 0;
    var mergeMap_1 = require_mergeMap();
    exports.flatMap = mergeMap_1.mergeMap;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js
var require_mergeMapTo = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeMapTo = void 0;
    var mergeMap_1 = require_mergeMap();
    var isFunction_1 = require_isFunction();
    function mergeMapTo(innerObservable, resultSelector, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      if (isFunction_1.isFunction(resultSelector)) {
        return mergeMap_1.mergeMap(function() {
          return innerObservable;
        }, resultSelector, concurrent);
      }
      if (typeof resultSelector === "number") {
        concurrent = resultSelector;
      }
      return mergeMap_1.mergeMap(function() {
        return innerObservable;
      }, concurrent);
    }
    exports.mergeMapTo = mergeMapTo;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js
var require_mergeScan = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeScan = void 0;
    var lift_1 = require_lift();
    var mergeInternals_1 = require_mergeInternals();
    function mergeScan(accumulator, seed, concurrent) {
      if (concurrent === void 0) {
        concurrent = Infinity;
      }
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        return mergeInternals_1.mergeInternals(source, subscriber, function(value, index) {
          return accumulator(state, value, index);
        }, concurrent, function(value) {
          state = value;
        }, false, void 0, function() {
          return state = null;
        });
      });
    }
    exports.mergeScan = mergeScan;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/merge.js
var require_merge2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/merge.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.merge = void 0;
    var lift_1 = require_lift();
    var argsOrArgArray_1 = require_argsOrArgArray();
    var mergeAll_1 = require_mergeAll();
    var args_1 = require_args();
    var from_1 = require_from();
    function merge2() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(args);
      var concurrent = args_1.popNumber(args, Infinity);
      args = argsOrArgArray_1.argsOrArgArray(args);
      return lift_1.operate(function(source, subscriber) {
        mergeAll_1.mergeAll(concurrent)(from_1.from(__spreadArray([source], __read(args)), scheduler)).subscribe(subscriber);
      });
    }
    exports.merge = merge2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js
var require_mergeWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/mergeWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeWith = void 0;
    var merge_1 = require_merge2();
    function mergeWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return merge_1.merge.apply(void 0, __spreadArray([], __read(otherSources)));
    }
    exports.mergeWith = mergeWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/min.js
var require_min = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/min.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.min = void 0;
    var reduce_1 = require_reduce();
    var isFunction_1 = require_isFunction();
    function min(comparer) {
      return reduce_1.reduce(isFunction_1.isFunction(comparer) ? function(x, y) {
        return comparer(x, y) < 0 ? x : y;
      } : function(x, y) {
        return x < y ? x : y;
      });
    }
    exports.min = min;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/multicast.js
var require_multicast = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/multicast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.multicast = void 0;
    var ConnectableObservable_1 = require_ConnectableObservable();
    var isFunction_1 = require_isFunction();
    var connect_1 = require_connect();
    function multicast(subjectOrSubjectFactory, selector) {
      var subjectFactory = isFunction_1.isFunction(subjectOrSubjectFactory) ? subjectOrSubjectFactory : function() {
        return subjectOrSubjectFactory;
      };
      if (isFunction_1.isFunction(selector)) {
        return connect_1.connect(selector, {
          connector: subjectFactory
        });
      }
      return function(source) {
        return new ConnectableObservable_1.ConnectableObservable(source, subjectFactory);
      };
    }
    exports.multicast = multicast;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js
var require_onErrorResumeNextWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/onErrorResumeNextWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.onErrorResumeNext = exports.onErrorResumeNextWith = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    function onErrorResumeNextWith() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      var nextSources = argsOrArgArray_1.argsOrArgArray(sources);
      return function(source) {
        return onErrorResumeNext_1.onErrorResumeNext.apply(void 0, __spreadArray([source], __read(nextSources)));
      };
    }
    exports.onErrorResumeNextWith = onErrorResumeNextWith;
    exports.onErrorResumeNext = onErrorResumeNextWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/pairwise.js
var require_pairwise = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/pairwise.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pairwise = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function pairwise() {
      return lift_1.operate(function(source, subscriber) {
        var prev;
        var hasPrev = false;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var p = prev;
          prev = value;
          hasPrev && subscriber.next([p, value]);
          hasPrev = true;
        }));
      });
    }
    exports.pairwise = pairwise;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/pluck.js
var require_pluck = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/pluck.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.pluck = void 0;
    var map_1 = require_map();
    function pluck() {
      var properties = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        properties[_i] = arguments[_i];
      }
      var length = properties.length;
      if (length === 0) {
        throw new Error("list of properties cannot be empty.");
      }
      return map_1.map(function(x) {
        var currentProp = x;
        for (var i = 0; i < length; i++) {
          var p = currentProp === null || currentProp === void 0 ? void 0 : currentProp[properties[i]];
          if (typeof p !== "undefined") {
            currentProp = p;
          } else {
            return void 0;
          }
        }
        return currentProp;
      });
    }
    exports.pluck = pluck;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/publish.js
var require_publish = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/publish.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publish = void 0;
    var Subject_1 = require_Subject();
    var multicast_1 = require_multicast();
    var connect_1 = require_connect();
    function publish(selector) {
      return selector ? function(source) {
        return connect_1.connect(selector)(source);
      } : function(source) {
        return multicast_1.multicast(new Subject_1.Subject())(source);
      };
    }
    exports.publish = publish;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js
var require_publishBehavior = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/publishBehavior.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishBehavior = void 0;
    var BehaviorSubject_1 = require_BehaviorSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishBehavior(initialValue) {
      return function(source) {
        var subject = new BehaviorSubject_1.BehaviorSubject(initialValue);
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports.publishBehavior = publishBehavior;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/publishLast.js
var require_publishLast = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/publishLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishLast = void 0;
    var AsyncSubject_1 = require_AsyncSubject();
    var ConnectableObservable_1 = require_ConnectableObservable();
    function publishLast() {
      return function(source) {
        var subject = new AsyncSubject_1.AsyncSubject();
        return new ConnectableObservable_1.ConnectableObservable(source, function() {
          return subject;
        });
      };
    }
    exports.publishLast = publishLast;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js
var require_publishReplay = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/publishReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.publishReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var multicast_1 = require_multicast();
    var isFunction_1 = require_isFunction();
    function publishReplay(bufferSize, windowTime, selectorOrScheduler, timestampProvider) {
      if (selectorOrScheduler && !isFunction_1.isFunction(selectorOrScheduler)) {
        timestampProvider = selectorOrScheduler;
      }
      var selector = isFunction_1.isFunction(selectorOrScheduler) ? selectorOrScheduler : void 0;
      return function(source) {
        return multicast_1.multicast(new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, timestampProvider), selector)(source);
      };
    }
    exports.publishReplay = publishReplay;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/raceWith.js
var require_raceWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/raceWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.raceWith = void 0;
    var race_1 = require_race();
    var lift_1 = require_lift();
    var identity_1 = require_identity();
    function raceWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherSources[_i] = arguments[_i];
      }
      return !otherSources.length ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        race_1.raceInit(__spreadArray([source], __read(otherSources)))(subscriber);
      });
    }
    exports.raceWith = raceWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/repeat.js
var require_repeat = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/repeat.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.repeat = void 0;
    var empty_1 = require_empty();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var timer_1 = require_timer();
    function repeat(countOrConfig) {
      var _a2;
      var count = Infinity;
      var delay;
      if (countOrConfig != null) {
        if (typeof countOrConfig === "object") {
          _a2 = countOrConfig.count, count = _a2 === void 0 ? Infinity : _a2, delay = countOrConfig.delay;
        } else {
          count = countOrConfig;
        }
      }
      return count <= 0 ? function() {
        return empty_1.EMPTY;
      } : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var sourceSub;
        var resubscribe = function() {
          sourceSub === null || sourceSub === void 0 ? void 0 : sourceSub.unsubscribe();
          sourceSub = null;
          if (delay != null) {
            var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(soFar));
            var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              notifierSubscriber_1.unsubscribe();
              subscribeToSource();
            });
            notifier.subscribe(notifierSubscriber_1);
          } else {
            subscribeToSource();
          }
        };
        var subscribeToSource = function() {
          var syncUnsub = false;
          sourceSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            if (++soFar < count) {
              if (sourceSub) {
                resubscribe();
              } else {
                syncUnsub = true;
              }
            } else {
              subscriber.complete();
            }
          }));
          if (syncUnsub) {
            resubscribe();
          }
        };
        subscribeToSource();
      });
    }
    exports.repeat = repeat;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js
var require_repeatWhen = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/repeatWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.repeatWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function repeatWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var completions$;
        var isNotifierComplete = false;
        var isMainComplete = false;
        var checkComplete = function() {
          return isMainComplete && isNotifierComplete && (subscriber.complete(), true);
        };
        var getCompletionSubject = function() {
          if (!completions$) {
            completions$ = new Subject_1.Subject();
            innerFrom_1.innerFrom(notifier(completions$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
              if (innerSub) {
                subscribeForRepeatWhen();
              } else {
                syncResub = true;
              }
            }, function() {
              isNotifierComplete = true;
              checkComplete();
            }));
          }
          return completions$;
        };
        var subscribeForRepeatWhen = function() {
          isMainComplete = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, function() {
            isMainComplete = true;
            !checkComplete() && getCompletionSubject().next();
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRepeatWhen();
          }
        };
        subscribeForRepeatWhen();
      });
    }
    exports.repeatWhen = repeatWhen;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/retry.js
var require_retry = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/retry.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retry = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    var timer_1 = require_timer();
    var innerFrom_1 = require_innerFrom();
    function retry(configOrCount) {
      if (configOrCount === void 0) {
        configOrCount = Infinity;
      }
      var config;
      if (configOrCount && typeof configOrCount === "object") {
        config = configOrCount;
      } else {
        config = {
          count: configOrCount
        };
      }
      var _a2 = config.count, count = _a2 === void 0 ? Infinity : _a2, delay = config.delay, _b = config.resetOnSuccess, resetOnSuccess = _b === void 0 ? false : _b;
      return count <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var soFar = 0;
        var innerSub;
        var subscribeForRetry = function() {
          var syncUnsub = false;
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            if (resetOnSuccess) {
              soFar = 0;
            }
            subscriber.next(value);
          }, void 0, function(err) {
            if (soFar++ < count) {
              var resub_1 = function() {
                if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  subscribeForRetry();
                } else {
                  syncUnsub = true;
                }
              };
              if (delay != null) {
                var notifier = typeof delay === "number" ? timer_1.timer(delay) : innerFrom_1.innerFrom(delay(err, soFar));
                var notifierSubscriber_1 = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                  notifierSubscriber_1.unsubscribe();
                  resub_1();
                }, function() {
                  subscriber.complete();
                });
                notifier.subscribe(notifierSubscriber_1);
              } else {
                resub_1();
              }
            } else {
              subscriber.error(err);
            }
          }));
          if (syncUnsub) {
            innerSub.unsubscribe();
            innerSub = null;
            subscribeForRetry();
          }
        };
        subscribeForRetry();
      });
    }
    exports.retry = retry;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js
var require_retryWhen = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/retryWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.retryWhen = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function retryWhen(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var innerSub;
        var syncResub = false;
        var errors$;
        var subscribeForRetryWhen = function() {
          innerSub = source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, void 0, void 0, function(err) {
            if (!errors$) {
              errors$ = new Subject_1.Subject();
              innerFrom_1.innerFrom(notifier(errors$)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
                return innerSub ? subscribeForRetryWhen() : syncResub = true;
              }));
            }
            if (errors$) {
              errors$.next(err);
            }
          }));
          if (syncResub) {
            innerSub.unsubscribe();
            innerSub = null;
            syncResub = false;
            subscribeForRetryWhen();
          }
        };
        subscribeForRetryWhen();
      });
    }
    exports.retryWhen = retryWhen;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/sample.js
var require_sample = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/sample.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sample = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var noop_1 = require_noop();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function sample(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var lastValue = null;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          lastValue = value;
        }));
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          if (hasValue) {
            hasValue = false;
            var value = lastValue;
            lastValue = null;
            subscriber.next(value);
          }
        }, noop_1.noop));
      });
    }
    exports.sample = sample;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js
var require_sampleTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/sampleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sampleTime = void 0;
    var async_1 = require_async();
    var sample_1 = require_sample();
    var interval_1 = require_interval();
    function sampleTime(period, scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return sample_1.sample(interval_1.interval(period, scheduler));
    }
    exports.sampleTime = sampleTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/scan.js
var require_scan = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/scan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.scan = void 0;
    var lift_1 = require_lift();
    var scanInternals_1 = require_scanInternals();
    function scan(accumulator, seed) {
      return lift_1.operate(scanInternals_1.scanInternals(accumulator, seed, arguments.length >= 2, true));
    }
    exports.scan = scan;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js
var require_sequenceEqual = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/sequenceEqual.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.sequenceEqual = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function sequenceEqual(compareTo, comparator) {
      if (comparator === void 0) {
        comparator = function(a, b) {
          return a === b;
        };
      }
      return lift_1.operate(function(source, subscriber) {
        var aState = createState();
        var bState = createState();
        var emit = function(isEqual) {
          subscriber.next(isEqual);
          subscriber.complete();
        };
        var createSubscriber = function(selfState, otherState) {
          var sequenceEqualSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(a) {
            var buffer = otherState.buffer, complete = otherState.complete;
            if (buffer.length === 0) {
              complete ? emit(false) : selfState.buffer.push(a);
            } else {
              !comparator(a, buffer.shift()) && emit(false);
            }
          }, function() {
            selfState.complete = true;
            var complete = otherState.complete, buffer = otherState.buffer;
            complete && emit(buffer.length === 0);
            sequenceEqualSubscriber === null || sequenceEqualSubscriber === void 0 ? void 0 : sequenceEqualSubscriber.unsubscribe();
          });
          return sequenceEqualSubscriber;
        };
        source.subscribe(createSubscriber(aState, bState));
        innerFrom_1.innerFrom(compareTo).subscribe(createSubscriber(bState, aState));
      });
    }
    exports.sequenceEqual = sequenceEqual;
    function createState() {
      return {
        buffer: [],
        complete: false
      };
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/share.js
var require_share = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/share.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.share = void 0;
    var innerFrom_1 = require_innerFrom();
    var Subject_1 = require_Subject();
    var Subscriber_1 = require_Subscriber();
    var lift_1 = require_lift();
    function share2(options) {
      if (options === void 0) {
        options = {};
      }
      var _a2 = options.connector, connector = _a2 === void 0 ? function() {
        return new Subject_1.Subject();
      } : _a2, _b = options.resetOnError, resetOnError = _b === void 0 ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === void 0 ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === void 0 ? true : _d;
      return function(wrapperSource) {
        var connection;
        var resetConnection;
        var subject;
        var refCount = 0;
        var hasCompleted = false;
        var hasErrored = false;
        var cancelReset = function() {
          resetConnection === null || resetConnection === void 0 ? void 0 : resetConnection.unsubscribe();
          resetConnection = void 0;
        };
        var reset = function() {
          cancelReset();
          connection = subject = void 0;
          hasCompleted = hasErrored = false;
        };
        var resetAndUnsubscribe = function() {
          var conn = connection;
          reset();
          conn === null || conn === void 0 ? void 0 : conn.unsubscribe();
        };
        return lift_1.operate(function(source, subscriber) {
          refCount++;
          if (!hasErrored && !hasCompleted) {
            cancelReset();
          }
          var dest = subject = subject !== null && subject !== void 0 ? subject : connector();
          subscriber.add(function() {
            refCount--;
            if (refCount === 0 && !hasErrored && !hasCompleted) {
              resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
            }
          });
          dest.subscribe(subscriber);
          if (!connection && refCount > 0) {
            connection = new Subscriber_1.SafeSubscriber({
              next: function(value) {
                return dest.next(value);
              },
              error: function(err) {
                hasErrored = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnError, err);
                dest.error(err);
              },
              complete: function() {
                hasCompleted = true;
                cancelReset();
                resetConnection = handleReset(reset, resetOnComplete);
                dest.complete();
              }
            });
            innerFrom_1.innerFrom(source).subscribe(connection);
          }
        })(wrapperSource);
      };
    }
    exports.share = share2;
    function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
      }
      if (on === true) {
        reset();
        return;
      }
      if (on === false) {
        return;
      }
      var onSubscriber = new Subscriber_1.SafeSubscriber({
        next: function() {
          onSubscriber.unsubscribe();
          reset();
        }
      });
      return innerFrom_1.innerFrom(on.apply(void 0, __spreadArray([], __read(args)))).subscribe(onSubscriber);
    }
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js
var require_shareReplay = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/shareReplay.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.shareReplay = void 0;
    var ReplaySubject_1 = require_ReplaySubject();
    var share_1 = require_share();
    function shareReplay(configOrBufferSize, windowTime, scheduler) {
      var _a2, _b, _c;
      var bufferSize;
      var refCount = false;
      if (configOrBufferSize && typeof configOrBufferSize === "object") {
        _a2 = configOrBufferSize.bufferSize, bufferSize = _a2 === void 0 ? Infinity : _a2, _b = configOrBufferSize.windowTime, windowTime = _b === void 0 ? Infinity : _b, _c = configOrBufferSize.refCount, refCount = _c === void 0 ? false : _c, scheduler = configOrBufferSize.scheduler;
      } else {
        bufferSize = configOrBufferSize !== null && configOrBufferSize !== void 0 ? configOrBufferSize : Infinity;
      }
      return share_1.share({
        connector: function() {
          return new ReplaySubject_1.ReplaySubject(bufferSize, windowTime, scheduler);
        },
        resetOnError: true,
        resetOnComplete: false,
        resetOnRefCountZero: refCount
      });
    }
    exports.shareReplay = shareReplay;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/single.js
var require_single = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/single.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.single = void 0;
    var EmptyError_1 = require_EmptyError();
    var SequenceError_1 = require_SequenceError();
    var NotFoundError_1 = require_NotFoundError();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function single(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var hasValue = false;
        var singleValue;
        var seenValue = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          seenValue = true;
          if (!predicate || predicate(value, index++, source)) {
            hasValue && subscriber.error(new SequenceError_1.SequenceError("Too many matching values"));
            hasValue = true;
            singleValue = value;
          }
        }, function() {
          if (hasValue) {
            subscriber.next(singleValue);
            subscriber.complete();
          } else {
            subscriber.error(seenValue ? new NotFoundError_1.NotFoundError("No matching values") : new EmptyError_1.EmptyError());
          }
        }));
      });
    }
    exports.single = single;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/skip.js
var require_skip = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/skip.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skip = void 0;
    var filter_1 = require_filter();
    function skip(count) {
      return filter_1.filter(function(_, index) {
        return count <= index;
      });
    }
    exports.skip = skip;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/skipLast.js
var require_skipLast = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/skipLast.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipLast = void 0;
    var identity_1 = require_identity();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipLast(skipCount) {
      return skipCount <= 0 ? identity_1.identity : lift_1.operate(function(source, subscriber) {
        var ring = new Array(skipCount);
        var seen = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var valueIndex = seen++;
          if (valueIndex < skipCount) {
            ring[valueIndex] = value;
          } else {
            var index = valueIndex % skipCount;
            var oldValue = ring[index];
            ring[index] = value;
            subscriber.next(oldValue);
          }
        }));
        return function() {
          ring = null;
        };
      });
    }
    exports.skipLast = skipLast;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js
var require_skipUntil = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/skipUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function skipUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var skipSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          skipSubscriber === null || skipSubscriber === void 0 ? void 0 : skipSubscriber.unsubscribe();
          taking = true;
        }, noop_1.noop);
        innerFrom_1.innerFrom(notifier).subscribe(skipSubscriber);
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return taking && subscriber.next(value);
        }));
      });
    }
    exports.skipUntil = skipUntil;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js
var require_skipWhile = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/skipWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.skipWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function skipWhile(predicate) {
      return lift_1.operate(function(source, subscriber) {
        var taking = false;
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return (taking || (taking = !predicate(value, index++))) && subscriber.next(value);
        }));
      });
    }
    exports.skipWhile = skipWhile;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/startWith.js
var require_startWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/startWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.startWith = void 0;
    var concat_1 = require_concat();
    var args_1 = require_args();
    var lift_1 = require_lift();
    function startWith() {
      var values = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        values[_i] = arguments[_i];
      }
      var scheduler = args_1.popScheduler(values);
      return lift_1.operate(function(source, subscriber) {
        (scheduler ? concat_1.concat(values, source, scheduler) : concat_1.concat(values, source)).subscribe(subscriber);
      });
    }
    exports.startWith = startWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/switchMap.js
var require_switchMap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/switchMap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchMap = void 0;
    var innerFrom_1 = require_innerFrom();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function switchMap2(project, resultSelector) {
      return lift_1.operate(function(source, subscriber) {
        var innerSubscriber = null;
        var index = 0;
        var isComplete = false;
        var checkComplete = function() {
          return isComplete && !innerSubscriber && subscriber.complete();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          innerSubscriber === null || innerSubscriber === void 0 ? void 0 : innerSubscriber.unsubscribe();
          var innerIndex = 0;
          var outerIndex = index++;
          innerFrom_1.innerFrom(project(value, outerIndex)).subscribe(innerSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(innerValue) {
            return subscriber.next(resultSelector ? resultSelector(value, innerValue, outerIndex, innerIndex++) : innerValue);
          }, function() {
            innerSubscriber = null;
            checkComplete();
          }));
        }, function() {
          isComplete = true;
          checkComplete();
        }));
      });
    }
    exports.switchMap = switchMap2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/switchAll.js
var require_switchAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/switchAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchAll = void 0;
    var switchMap_1 = require_switchMap();
    var identity_1 = require_identity();
    function switchAll() {
      return switchMap_1.switchMap(identity_1.identity);
    }
    exports.switchAll = switchAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js
var require_switchMapTo = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/switchMapTo.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchMapTo = void 0;
    var switchMap_1 = require_switchMap();
    var isFunction_1 = require_isFunction();
    function switchMapTo(innerObservable, resultSelector) {
      return isFunction_1.isFunction(resultSelector) ? switchMap_1.switchMap(function() {
        return innerObservable;
      }, resultSelector) : switchMap_1.switchMap(function() {
        return innerObservable;
      });
    }
    exports.switchMapTo = switchMapTo;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/switchScan.js
var require_switchScan = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/switchScan.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.switchScan = void 0;
    var switchMap_1 = require_switchMap();
    var lift_1 = require_lift();
    function switchScan(accumulator, seed) {
      return lift_1.operate(function(source, subscriber) {
        var state = seed;
        switchMap_1.switchMap(function(value, index) {
          return accumulator(state, value, index);
        }, function(_, innerValue) {
          return state = innerValue, innerValue;
        })(source).subscribe(subscriber);
        return function() {
          state = null;
        };
      });
    }
    exports.switchScan = switchScan;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js
var require_takeUntil = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/takeUntil.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeUntil = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var noop_1 = require_noop();
    function takeUntil(notifier) {
      return lift_1.operate(function(source, subscriber) {
        innerFrom_1.innerFrom(notifier).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          return subscriber.complete();
        }, noop_1.noop));
        !subscriber.closed && source.subscribe(subscriber);
      });
    }
    exports.takeUntil = takeUntil;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js
var require_takeWhile = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/takeWhile.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.takeWhile = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function takeWhile(predicate, inclusive) {
      if (inclusive === void 0) {
        inclusive = false;
      }
      return lift_1.operate(function(source, subscriber) {
        var index = 0;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var result = predicate(value, index++);
          (result || inclusive) && subscriber.next(value);
          !result && subscriber.complete();
        }));
      });
    }
    exports.takeWhile = takeWhile;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/tap.js
var require_tap = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/tap.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.tap = void 0;
    var isFunction_1 = require_isFunction();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var identity_1 = require_identity();
    function tap(observerOrNext, error, complete) {
      var tapObserver = isFunction_1.isFunction(observerOrNext) || error || complete ? { next: observerOrNext, error, complete } : observerOrNext;
      return tapObserver ? lift_1.operate(function(source, subscriber) {
        var _a2;
        (_a2 = tapObserver.subscribe) === null || _a2 === void 0 ? void 0 : _a2.call(tapObserver);
        var isUnsub = true;
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var _a3;
          (_a3 = tapObserver.next) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, value);
          subscriber.next(value);
        }, function() {
          var _a3;
          isUnsub = false;
          (_a3 = tapObserver.complete) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
          subscriber.complete();
        }, function(err) {
          var _a3;
          isUnsub = false;
          (_a3 = tapObserver.error) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver, err);
          subscriber.error(err);
        }, function() {
          var _a3, _b;
          if (isUnsub) {
            (_a3 = tapObserver.unsubscribe) === null || _a3 === void 0 ? void 0 : _a3.call(tapObserver);
          }
          (_b = tapObserver.finalize) === null || _b === void 0 ? void 0 : _b.call(tapObserver);
        }));
      }) : identity_1.identity;
    }
    exports.tap = tap;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/throttle.js
var require_throttle = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/throttle.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throttle = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function throttle(durationSelector, config) {
      return lift_1.operate(function(source, subscriber) {
        var _a2 = config !== null && config !== void 0 ? config : {}, _b = _a2.leading, leading = _b === void 0 ? true : _b, _c = _a2.trailing, trailing = _c === void 0 ? false : _c;
        var hasValue = false;
        var sendValue = null;
        var throttled = null;
        var isComplete = false;
        var endThrottling = function() {
          throttled === null || throttled === void 0 ? void 0 : throttled.unsubscribe();
          throttled = null;
          if (trailing) {
            send();
            isComplete && subscriber.complete();
          }
        };
        var cleanupThrottling = function() {
          throttled = null;
          isComplete && subscriber.complete();
        };
        var startThrottle = function(value) {
          return throttled = innerFrom_1.innerFrom(durationSelector(value)).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, endThrottling, cleanupThrottling));
        };
        var send = function() {
          if (hasValue) {
            hasValue = false;
            var value = sendValue;
            sendValue = null;
            subscriber.next(value);
            !isComplete && startThrottle(value);
          }
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          hasValue = true;
          sendValue = value;
          !(throttled && !throttled.closed) && (leading ? send() : startThrottle(value));
        }, function() {
          isComplete = true;
          !(trailing && hasValue && throttled && !throttled.closed) && subscriber.complete();
        }));
      });
    }
    exports.throttle = throttle;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js
var require_throttleTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/throttleTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.throttleTime = void 0;
    var async_1 = require_async();
    var throttle_1 = require_throttle();
    var timer_1 = require_timer();
    function throttleTime(duration, scheduler, config) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      var duration$ = timer_1.timer(duration, scheduler);
      return throttle_1.throttle(function() {
        return duration$;
      }, config);
    }
    exports.throttleTime = throttleTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js
var require_timeInterval = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/timeInterval.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TimeInterval = exports.timeInterval = void 0;
    var async_1 = require_async();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function timeInterval(scheduler) {
      if (scheduler === void 0) {
        scheduler = async_1.asyncScheduler;
      }
      return lift_1.operate(function(source, subscriber) {
        var last = scheduler.now();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var now = scheduler.now();
          var interval = now - last;
          last = now;
          subscriber.next(new TimeInterval(value, interval));
        }));
      });
    }
    exports.timeInterval = timeInterval;
    var TimeInterval = function() {
      function TimeInterval2(value, interval) {
        this.value = value;
        this.interval = interval;
      }
      return TimeInterval2;
    }();
    exports.TimeInterval = TimeInterval;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js
var require_timeoutWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/timeoutWith.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timeoutWith = void 0;
    var async_1 = require_async();
    var isDate_1 = require_isDate();
    var timeout_1 = require_timeout();
    function timeoutWith(due, withObservable, scheduler) {
      var first2;
      var each;
      var _with;
      scheduler = scheduler !== null && scheduler !== void 0 ? scheduler : async_1.async;
      if (isDate_1.isValidDate(due)) {
        first2 = due;
      } else if (typeof due === "number") {
        each = due;
      }
      if (withObservable) {
        _with = function() {
          return withObservable;
        };
      } else {
        throw new TypeError("No observable provided to switch to");
      }
      if (first2 == null && each == null) {
        throw new TypeError("No timeout provided.");
      }
      return timeout_1.timeout({
        first: first2,
        each,
        scheduler,
        with: _with
      });
    }
    exports.timeoutWith = timeoutWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/timestamp.js
var require_timestamp = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/timestamp.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.timestamp = void 0;
    var dateTimestampProvider_1 = require_dateTimestampProvider();
    var map_1 = require_map();
    function timestamp(timestampProvider) {
      if (timestampProvider === void 0) {
        timestampProvider = dateTimestampProvider_1.dateTimestampProvider;
      }
      return map_1.map(function(value) {
        return { value, timestamp: timestampProvider.now() };
      });
    }
    exports.timestamp = timestamp;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/window.js
var require_window = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/window.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.window = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var innerFrom_1 = require_innerFrom();
    function window2(windowBoundaries) {
      return lift_1.operate(function(source, subscriber) {
        var windowSubject = new Subject_1.Subject();
        subscriber.next(windowSubject.asObservable());
        var errorHandler = function(err) {
          windowSubject.error(err);
          subscriber.error(err);
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.next(value);
        }, function() {
          windowSubject.complete();
          subscriber.complete();
        }, errorHandler));
        innerFrom_1.innerFrom(windowBoundaries).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function() {
          windowSubject.complete();
          subscriber.next(windowSubject = new Subject_1.Subject());
        }, noop_1.noop, errorHandler));
        return function() {
          windowSubject === null || windowSubject === void 0 ? void 0 : windowSubject.unsubscribe();
          windowSubject = null;
        };
      });
    }
    exports.window = window2;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/windowCount.js
var require_windowCount = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/windowCount.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowCount = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    function windowCount(windowSize, startWindowEvery) {
      if (startWindowEvery === void 0) {
        startWindowEvery = 0;
      }
      var startEvery = startWindowEvery > 0 ? startWindowEvery : windowSize;
      return lift_1.operate(function(source, subscriber) {
        var windows = [new Subject_1.Subject()];
        var starts = [];
        var count = 0;
        subscriber.next(windows[0].asObservable());
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          try {
            for (var windows_1 = __values(windows), windows_1_1 = windows_1.next(); !windows_1_1.done; windows_1_1 = windows_1.next()) {
              var window_1 = windows_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windows_1_1 && !windows_1_1.done && (_a2 = windows_1.return))
                _a2.call(windows_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
          var c = count - windowSize + 1;
          if (c >= 0 && c % startEvery === 0) {
            windows.shift().complete();
          }
          if (++count % startEvery === 0) {
            var window_2 = new Subject_1.Subject();
            windows.push(window_2);
            subscriber.next(window_2.asObservable());
          }
        }, function() {
          while (windows.length > 0) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, function(err) {
          while (windows.length > 0) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        }, function() {
          starts = null;
          windows = null;
        }));
      });
    }
    exports.windowCount = windowCount;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/windowTime.js
var require_windowTime = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/windowTime.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowTime = void 0;
    var Subject_1 = require_Subject();
    var async_1 = require_async();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var arrRemove_1 = require_arrRemove();
    var args_1 = require_args();
    var executeSchedule_1 = require_executeSchedule();
    function windowTime(windowTimeSpan) {
      var _a2, _b;
      var otherArgs = [];
      for (var _i = 1; _i < arguments.length; _i++) {
        otherArgs[_i - 1] = arguments[_i];
      }
      var scheduler = (_a2 = args_1.popScheduler(otherArgs)) !== null && _a2 !== void 0 ? _a2 : async_1.asyncScheduler;
      var windowCreationInterval = (_b = otherArgs[0]) !== null && _b !== void 0 ? _b : null;
      var maxWindowSize = otherArgs[1] || Infinity;
      return lift_1.operate(function(source, subscriber) {
        var windowRecords = [];
        var restartOnClose = false;
        var closeWindow = function(record) {
          var window2 = record.window, subs = record.subs;
          window2.complete();
          subs.unsubscribe();
          arrRemove_1.arrRemove(windowRecords, record);
          restartOnClose && startWindow();
        };
        var startWindow = function() {
          if (windowRecords) {
            var subs = new Subscription_1.Subscription();
            subscriber.add(subs);
            var window_1 = new Subject_1.Subject();
            var record_1 = {
              window: window_1,
              subs,
              seen: 0
            };
            windowRecords.push(record_1);
            subscriber.next(window_1.asObservable());
            executeSchedule_1.executeSchedule(subs, scheduler, function() {
              return closeWindow(record_1);
            }, windowTimeSpan);
          }
        };
        if (windowCreationInterval !== null && windowCreationInterval >= 0) {
          executeSchedule_1.executeSchedule(subscriber, scheduler, startWindow, windowCreationInterval, true);
        } else {
          restartOnClose = true;
        }
        startWindow();
        var loop = function(cb) {
          return windowRecords.slice().forEach(cb);
        };
        var terminate = function(cb) {
          loop(function(_a3) {
            var window2 = _a3.window;
            return cb(window2);
          });
          cb(subscriber);
          subscriber.unsubscribe();
        };
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          loop(function(record) {
            record.window.next(value);
            maxWindowSize <= ++record.seen && closeWindow(record);
          });
        }, function() {
          return terminate(function(consumer) {
            return consumer.complete();
          });
        }, function(err) {
          return terminate(function(consumer) {
            return consumer.error(err);
          });
        }));
        return function() {
          windowRecords = null;
        };
      });
    }
    exports.windowTime = windowTime;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js
var require_windowToggle = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/windowToggle.js"(exports) {
    "use strict";
    var __values = exports && exports.__values || function(o) {
      var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
      if (m)
        return m.call(o);
      if (o && typeof o.length === "number")
        return {
          next: function() {
            if (o && i >= o.length)
              o = void 0;
            return { value: o && o[i++], done: !o };
          }
        };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowToggle = void 0;
    var Subject_1 = require_Subject();
    var Subscription_1 = require_Subscription();
    var lift_1 = require_lift();
    var innerFrom_1 = require_innerFrom();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var noop_1 = require_noop();
    var arrRemove_1 = require_arrRemove();
    function windowToggle(openings, closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var windows = [];
        var handleError2 = function(err) {
          while (0 < windows.length) {
            windows.shift().error(err);
          }
          subscriber.error(err);
        };
        innerFrom_1.innerFrom(openings).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(openValue) {
          var window2 = new Subject_1.Subject();
          windows.push(window2);
          var closingSubscription = new Subscription_1.Subscription();
          var closeWindow = function() {
            arrRemove_1.arrRemove(windows, window2);
            window2.complete();
            closingSubscription.unsubscribe();
          };
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector(openValue));
          } catch (err) {
            handleError2(err);
            return;
          }
          subscriber.next(window2.asObservable());
          closingSubscription.add(closingNotifier.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, closeWindow, noop_1.noop, handleError2)));
        }, noop_1.noop));
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          var e_1, _a2;
          var windowsCopy = windows.slice();
          try {
            for (var windowsCopy_1 = __values(windowsCopy), windowsCopy_1_1 = windowsCopy_1.next(); !windowsCopy_1_1.done; windowsCopy_1_1 = windowsCopy_1.next()) {
              var window_1 = windowsCopy_1_1.value;
              window_1.next(value);
            }
          } catch (e_1_1) {
            e_1 = { error: e_1_1 };
          } finally {
            try {
              if (windowsCopy_1_1 && !windowsCopy_1_1.done && (_a2 = windowsCopy_1.return))
                _a2.call(windowsCopy_1);
            } finally {
              if (e_1)
                throw e_1.error;
            }
          }
        }, function() {
          while (0 < windows.length) {
            windows.shift().complete();
          }
          subscriber.complete();
        }, handleError2, function() {
          while (0 < windows.length) {
            windows.shift().unsubscribe();
          }
        }));
      });
    }
    exports.windowToggle = windowToggle;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js
var require_windowWhen = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/windowWhen.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.windowWhen = void 0;
    var Subject_1 = require_Subject();
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    function windowWhen(closingSelector) {
      return lift_1.operate(function(source, subscriber) {
        var window2;
        var closingSubscriber;
        var handleError2 = function(err) {
          window2.error(err);
          subscriber.error(err);
        };
        var openWindow = function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 === null || window2 === void 0 ? void 0 : window2.complete();
          window2 = new Subject_1.Subject();
          subscriber.next(window2.asObservable());
          var closingNotifier;
          try {
            closingNotifier = innerFrom_1.innerFrom(closingSelector());
          } catch (err) {
            handleError2(err);
            return;
          }
          closingNotifier.subscribe(closingSubscriber = OperatorSubscriber_1.createOperatorSubscriber(subscriber, openWindow, openWindow, handleError2));
        };
        openWindow();
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          return window2.next(value);
        }, function() {
          window2.complete();
          subscriber.complete();
        }, handleError2, function() {
          closingSubscriber === null || closingSubscriber === void 0 ? void 0 : closingSubscriber.unsubscribe();
          window2 = null;
        }));
      });
    }
    exports.windowWhen = windowWhen;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js
var require_withLatestFrom = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/withLatestFrom.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.withLatestFrom = void 0;
    var lift_1 = require_lift();
    var OperatorSubscriber_1 = require_OperatorSubscriber();
    var innerFrom_1 = require_innerFrom();
    var identity_1 = require_identity();
    var noop_1 = require_noop();
    var args_1 = require_args();
    function withLatestFrom() {
      var inputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        inputs[_i] = arguments[_i];
      }
      var project = args_1.popResultSelector(inputs);
      return lift_1.operate(function(source, subscriber) {
        var len = inputs.length;
        var otherValues = new Array(len);
        var hasValue = inputs.map(function() {
          return false;
        });
        var ready = false;
        var _loop_1 = function(i2) {
          innerFrom_1.innerFrom(inputs[i2]).subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
            otherValues[i2] = value;
            if (!ready && !hasValue[i2]) {
              hasValue[i2] = true;
              (ready = hasValue.every(identity_1.identity)) && (hasValue = null);
            }
          }, noop_1.noop));
        };
        for (var i = 0; i < len; i++) {
          _loop_1(i);
        }
        source.subscribe(OperatorSubscriber_1.createOperatorSubscriber(subscriber, function(value) {
          if (ready) {
            var values = __spreadArray([value], __read(otherValues));
            subscriber.next(project ? project.apply(void 0, __spreadArray([], __read(values))) : values);
          }
        }));
      });
    }
    exports.withLatestFrom = withLatestFrom;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/zipAll.js
var require_zipAll = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/zipAll.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zipAll = void 0;
    var zip_1 = require_zip();
    var joinAllInternals_1 = require_joinAllInternals();
    function zipAll(project) {
      return joinAllInternals_1.joinAllInternals(zip_1.zip, project);
    }
    exports.zipAll = zipAll;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/zip.js
var require_zip2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/zip.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zip = void 0;
    var zip_1 = require_zip();
    var lift_1 = require_lift();
    function zip() {
      var sources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        sources[_i] = arguments[_i];
      }
      return lift_1.operate(function(source, subscriber) {
        zip_1.zip.apply(void 0, __spreadArray([source], __read(sources))).subscribe(subscriber);
      });
    }
    exports.zip = zip;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/zipWith.js
var require_zipWith = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/zipWith.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.zipWith = void 0;
    var zip_1 = require_zip2();
    function zipWith() {
      var otherInputs = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        otherInputs[_i] = arguments[_i];
      }
      return zip_1.zip.apply(void 0, __spreadArray([], __read(otherInputs)));
    }
    exports.zipWith = zipWith;
  }
});

// ../../node_modules/rxjs/dist/cjs/index.js
var require_cjs = __commonJS({
  "../../node_modules/rxjs/dist/cjs/index.js"(exports) {
    "use strict";
    var __createBinding = exports && exports.__createBinding || (Object.create ? function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      Object.defineProperty(o, k2, { enumerable: true, get: function() {
        return m[k];
      } });
    } : function(o, m, k, k2) {
      if (k2 === void 0)
        k2 = k;
      o[k2] = m[k];
    });
    var __exportStar = exports && exports.__exportStar || function(m, exports2) {
      for (var p in m)
        if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports2, p))
          __createBinding(exports2, m, p);
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.interval = exports.iif = exports.generate = exports.fromEventPattern = exports.fromEvent = exports.from = exports.forkJoin = exports.empty = exports.defer = exports.connectable = exports.concat = exports.combineLatest = exports.bindNodeCallback = exports.bindCallback = exports.UnsubscriptionError = exports.TimeoutError = exports.SequenceError = exports.ObjectUnsubscribedError = exports.NotFoundError = exports.EmptyError = exports.ArgumentOutOfRangeError = exports.firstValueFrom = exports.lastValueFrom = exports.isObservable = exports.identity = exports.noop = exports.pipe = exports.NotificationKind = exports.Notification = exports.Subscriber = exports.Subscription = exports.Scheduler = exports.VirtualAction = exports.VirtualTimeScheduler = exports.animationFrameScheduler = exports.animationFrame = exports.queueScheduler = exports.queue = exports.asyncScheduler = exports.async = exports.asapScheduler = exports.asap = exports.AsyncSubject = exports.ReplaySubject = exports.BehaviorSubject = exports.Subject = exports.animationFrames = exports.observable = exports.ConnectableObservable = exports.Observable = void 0;
    exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.combineLatestWith = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = exports.config = exports.NEVER = exports.EMPTY = exports.scheduled = exports.zip = exports.using = exports.timer = exports.throwError = exports.range = exports.race = exports.partition = exports.pairs = exports.onErrorResumeNext = exports.of = exports.never = exports.merge = void 0;
    exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.pairwise = exports.onErrorResumeNextWith = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = exports.mergeAll = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = void 0;
    exports.zipWith = exports.zipAll = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = void 0;
    var Observable_1 = require_Observable();
    Object.defineProperty(exports, "Observable", { enumerable: true, get: function() {
      return Observable_1.Observable;
    } });
    var ConnectableObservable_1 = require_ConnectableObservable();
    Object.defineProperty(exports, "ConnectableObservable", { enumerable: true, get: function() {
      return ConnectableObservable_1.ConnectableObservable;
    } });
    var observable_1 = require_observable();
    Object.defineProperty(exports, "observable", { enumerable: true, get: function() {
      return observable_1.observable;
    } });
    var animationFrames_1 = require_animationFrames();
    Object.defineProperty(exports, "animationFrames", { enumerable: true, get: function() {
      return animationFrames_1.animationFrames;
    } });
    var Subject_1 = require_Subject();
    Object.defineProperty(exports, "Subject", { enumerable: true, get: function() {
      return Subject_1.Subject;
    } });
    var BehaviorSubject_1 = require_BehaviorSubject();
    Object.defineProperty(exports, "BehaviorSubject", { enumerable: true, get: function() {
      return BehaviorSubject_1.BehaviorSubject;
    } });
    var ReplaySubject_1 = require_ReplaySubject();
    Object.defineProperty(exports, "ReplaySubject", { enumerable: true, get: function() {
      return ReplaySubject_1.ReplaySubject;
    } });
    var AsyncSubject_1 = require_AsyncSubject();
    Object.defineProperty(exports, "AsyncSubject", { enumerable: true, get: function() {
      return AsyncSubject_1.AsyncSubject;
    } });
    var asap_1 = require_asap();
    Object.defineProperty(exports, "asap", { enumerable: true, get: function() {
      return asap_1.asap;
    } });
    Object.defineProperty(exports, "asapScheduler", { enumerable: true, get: function() {
      return asap_1.asapScheduler;
    } });
    var async_1 = require_async();
    Object.defineProperty(exports, "async", { enumerable: true, get: function() {
      return async_1.async;
    } });
    Object.defineProperty(exports, "asyncScheduler", { enumerable: true, get: function() {
      return async_1.asyncScheduler;
    } });
    var queue_1 = require_queue();
    Object.defineProperty(exports, "queue", { enumerable: true, get: function() {
      return queue_1.queue;
    } });
    Object.defineProperty(exports, "queueScheduler", { enumerable: true, get: function() {
      return queue_1.queueScheduler;
    } });
    var animationFrame_1 = require_animationFrame();
    Object.defineProperty(exports, "animationFrame", { enumerable: true, get: function() {
      return animationFrame_1.animationFrame;
    } });
    Object.defineProperty(exports, "animationFrameScheduler", { enumerable: true, get: function() {
      return animationFrame_1.animationFrameScheduler;
    } });
    var VirtualTimeScheduler_1 = require_VirtualTimeScheduler();
    Object.defineProperty(exports, "VirtualTimeScheduler", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualTimeScheduler;
    } });
    Object.defineProperty(exports, "VirtualAction", { enumerable: true, get: function() {
      return VirtualTimeScheduler_1.VirtualAction;
    } });
    var Scheduler_1 = require_Scheduler();
    Object.defineProperty(exports, "Scheduler", { enumerable: true, get: function() {
      return Scheduler_1.Scheduler;
    } });
    var Subscription_1 = require_Subscription();
    Object.defineProperty(exports, "Subscription", { enumerable: true, get: function() {
      return Subscription_1.Subscription;
    } });
    var Subscriber_1 = require_Subscriber();
    Object.defineProperty(exports, "Subscriber", { enumerable: true, get: function() {
      return Subscriber_1.Subscriber;
    } });
    var Notification_1 = require_Notification();
    Object.defineProperty(exports, "Notification", { enumerable: true, get: function() {
      return Notification_1.Notification;
    } });
    Object.defineProperty(exports, "NotificationKind", { enumerable: true, get: function() {
      return Notification_1.NotificationKind;
    } });
    var pipe_1 = require_pipe();
    Object.defineProperty(exports, "pipe", { enumerable: true, get: function() {
      return pipe_1.pipe;
    } });
    var noop_1 = require_noop();
    Object.defineProperty(exports, "noop", { enumerable: true, get: function() {
      return noop_1.noop;
    } });
    var identity_1 = require_identity();
    Object.defineProperty(exports, "identity", { enumerable: true, get: function() {
      return identity_1.identity;
    } });
    var isObservable_1 = require_isObservable();
    Object.defineProperty(exports, "isObservable", { enumerable: true, get: function() {
      return isObservable_1.isObservable;
    } });
    var lastValueFrom_1 = require_lastValueFrom();
    Object.defineProperty(exports, "lastValueFrom", { enumerable: true, get: function() {
      return lastValueFrom_1.lastValueFrom;
    } });
    var firstValueFrom_1 = require_firstValueFrom();
    Object.defineProperty(exports, "firstValueFrom", { enumerable: true, get: function() {
      return firstValueFrom_1.firstValueFrom;
    } });
    var ArgumentOutOfRangeError_1 = require_ArgumentOutOfRangeError();
    Object.defineProperty(exports, "ArgumentOutOfRangeError", { enumerable: true, get: function() {
      return ArgumentOutOfRangeError_1.ArgumentOutOfRangeError;
    } });
    var EmptyError_1 = require_EmptyError();
    Object.defineProperty(exports, "EmptyError", { enumerable: true, get: function() {
      return EmptyError_1.EmptyError;
    } });
    var NotFoundError_1 = require_NotFoundError();
    Object.defineProperty(exports, "NotFoundError", { enumerable: true, get: function() {
      return NotFoundError_1.NotFoundError;
    } });
    var ObjectUnsubscribedError_1 = require_ObjectUnsubscribedError();
    Object.defineProperty(exports, "ObjectUnsubscribedError", { enumerable: true, get: function() {
      return ObjectUnsubscribedError_1.ObjectUnsubscribedError;
    } });
    var SequenceError_1 = require_SequenceError();
    Object.defineProperty(exports, "SequenceError", { enumerable: true, get: function() {
      return SequenceError_1.SequenceError;
    } });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "TimeoutError", { enumerable: true, get: function() {
      return timeout_1.TimeoutError;
    } });
    var UnsubscriptionError_1 = require_UnsubscriptionError();
    Object.defineProperty(exports, "UnsubscriptionError", { enumerable: true, get: function() {
      return UnsubscriptionError_1.UnsubscriptionError;
    } });
    var bindCallback_1 = require_bindCallback();
    Object.defineProperty(exports, "bindCallback", { enumerable: true, get: function() {
      return bindCallback_1.bindCallback;
    } });
    var bindNodeCallback_1 = require_bindNodeCallback();
    Object.defineProperty(exports, "bindNodeCallback", { enumerable: true, get: function() {
      return bindNodeCallback_1.bindNodeCallback;
    } });
    var combineLatest_1 = require_combineLatest();
    Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function() {
      return combineLatest_1.combineLatest;
    } });
    var concat_1 = require_concat();
    Object.defineProperty(exports, "concat", { enumerable: true, get: function() {
      return concat_1.concat;
    } });
    var connectable_1 = require_connectable();
    Object.defineProperty(exports, "connectable", { enumerable: true, get: function() {
      return connectable_1.connectable;
    } });
    var defer_1 = require_defer();
    Object.defineProperty(exports, "defer", { enumerable: true, get: function() {
      return defer_1.defer;
    } });
    var empty_1 = require_empty();
    Object.defineProperty(exports, "empty", { enumerable: true, get: function() {
      return empty_1.empty;
    } });
    var forkJoin_1 = require_forkJoin();
    Object.defineProperty(exports, "forkJoin", { enumerable: true, get: function() {
      return forkJoin_1.forkJoin;
    } });
    var from_1 = require_from();
    Object.defineProperty(exports, "from", { enumerable: true, get: function() {
      return from_1.from;
    } });
    var fromEvent_1 = require_fromEvent();
    Object.defineProperty(exports, "fromEvent", { enumerable: true, get: function() {
      return fromEvent_1.fromEvent;
    } });
    var fromEventPattern_1 = require_fromEventPattern();
    Object.defineProperty(exports, "fromEventPattern", { enumerable: true, get: function() {
      return fromEventPattern_1.fromEventPattern;
    } });
    var generate_1 = require_generate();
    Object.defineProperty(exports, "generate", { enumerable: true, get: function() {
      return generate_1.generate;
    } });
    var iif_1 = require_iif();
    Object.defineProperty(exports, "iif", { enumerable: true, get: function() {
      return iif_1.iif;
    } });
    var interval_1 = require_interval();
    Object.defineProperty(exports, "interval", { enumerable: true, get: function() {
      return interval_1.interval;
    } });
    var merge_1 = require_merge();
    Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
      return merge_1.merge;
    } });
    var never_1 = require_never();
    Object.defineProperty(exports, "never", { enumerable: true, get: function() {
      return never_1.never;
    } });
    var of_1 = require_of();
    Object.defineProperty(exports, "of", { enumerable: true, get: function() {
      return of_1.of;
    } });
    var onErrorResumeNext_1 = require_onErrorResumeNext();
    Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function() {
      return onErrorResumeNext_1.onErrorResumeNext;
    } });
    var pairs_1 = require_pairs();
    Object.defineProperty(exports, "pairs", { enumerable: true, get: function() {
      return pairs_1.pairs;
    } });
    var partition_1 = require_partition();
    Object.defineProperty(exports, "partition", { enumerable: true, get: function() {
      return partition_1.partition;
    } });
    var race_1 = require_race();
    Object.defineProperty(exports, "race", { enumerable: true, get: function() {
      return race_1.race;
    } });
    var range_1 = require_range();
    Object.defineProperty(exports, "range", { enumerable: true, get: function() {
      return range_1.range;
    } });
    var throwError_1 = require_throwError();
    Object.defineProperty(exports, "throwError", { enumerable: true, get: function() {
      return throwError_1.throwError;
    } });
    var timer_1 = require_timer();
    Object.defineProperty(exports, "timer", { enumerable: true, get: function() {
      return timer_1.timer;
    } });
    var using_1 = require_using();
    Object.defineProperty(exports, "using", { enumerable: true, get: function() {
      return using_1.using;
    } });
    var zip_1 = require_zip();
    Object.defineProperty(exports, "zip", { enumerable: true, get: function() {
      return zip_1.zip;
    } });
    var scheduled_1 = require_scheduled();
    Object.defineProperty(exports, "scheduled", { enumerable: true, get: function() {
      return scheduled_1.scheduled;
    } });
    var empty_2 = require_empty();
    Object.defineProperty(exports, "EMPTY", { enumerable: true, get: function() {
      return empty_2.EMPTY;
    } });
    var never_2 = require_never();
    Object.defineProperty(exports, "NEVER", { enumerable: true, get: function() {
      return never_2.NEVER;
    } });
    __exportStar(require_types(), exports);
    var config_1 = require_config();
    Object.defineProperty(exports, "config", { enumerable: true, get: function() {
      return config_1.config;
    } });
    var audit_1 = require_audit();
    Object.defineProperty(exports, "audit", { enumerable: true, get: function() {
      return audit_1.audit;
    } });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports, "auditTime", { enumerable: true, get: function() {
      return auditTime_1.auditTime;
    } });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports, "buffer", { enumerable: true, get: function() {
      return buffer_1.buffer;
    } });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function() {
      return bufferCount_1.bufferCount;
    } });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function() {
      return bufferTime_1.bufferTime;
    } });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function() {
      return bufferToggle_1.bufferToggle;
    } });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function() {
      return bufferWhen_1.bufferWhen;
    } });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports, "catchError", { enumerable: true, get: function() {
      return catchError_1.catchError;
    } });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports, "combineAll", { enumerable: true, get: function() {
      return combineAll_1.combineAll;
    } });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function() {
      return combineLatestAll_1.combineLatestAll;
    } });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function() {
      return combineLatestWith_1.combineLatestWith;
    } });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports, "concatAll", { enumerable: true, get: function() {
      return concatAll_1.concatAll;
    } });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports, "concatMap", { enumerable: true, get: function() {
      return concatMap_1.concatMap;
    } });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function() {
      return concatMapTo_1.concatMapTo;
    } });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports, "concatWith", { enumerable: true, get: function() {
      return concatWith_1.concatWith;
    } });
    var connect_1 = require_connect();
    Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
      return connect_1.connect;
    } });
    var count_1 = require_count();
    Object.defineProperty(exports, "count", { enumerable: true, get: function() {
      return count_1.count;
    } });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports, "debounce", { enumerable: true, get: function() {
      return debounce_1.debounce;
    } });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function() {
      return debounceTime_1.debounceTime;
    } });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function() {
      return defaultIfEmpty_1.defaultIfEmpty;
    } });
    var delay_1 = require_delay();
    Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
      return delay_1.delay;
    } });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function() {
      return delayWhen_1.delayWhen;
    } });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function() {
      return dematerialize_1.dematerialize;
    } });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports, "distinct", { enumerable: true, get: function() {
      return distinct_1.distinct;
    } });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function() {
      return distinctUntilChanged_1.distinctUntilChanged;
    } });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function() {
      return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    } });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports, "elementAt", { enumerable: true, get: function() {
      return elementAt_1.elementAt;
    } });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports, "endWith", { enumerable: true, get: function() {
      return endWith_1.endWith;
    } });
    var every_1 = require_every();
    Object.defineProperty(exports, "every", { enumerable: true, get: function() {
      return every_1.every;
    } });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports, "exhaust", { enumerable: true, get: function() {
      return exhaust_1.exhaust;
    } });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function() {
      return exhaustAll_1.exhaustAll;
    } });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function() {
      return exhaustMap_1.exhaustMap;
    } });
    var expand_1 = require_expand();
    Object.defineProperty(exports, "expand", { enumerable: true, get: function() {
      return expand_1.expand;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports, "filter", { enumerable: true, get: function() {
      return filter_1.filter;
    } });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports, "finalize", { enumerable: true, get: function() {
      return finalize_1.finalize;
    } });
    var find_1 = require_find();
    Object.defineProperty(exports, "find", { enumerable: true, get: function() {
      return find_1.find;
    } });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports, "findIndex", { enumerable: true, get: function() {
      return findIndex_1.findIndex;
    } });
    var first_1 = require_first();
    Object.defineProperty(exports, "first", { enumerable: true, get: function() {
      return first_1.first;
    } });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports, "groupBy", { enumerable: true, get: function() {
      return groupBy_1.groupBy;
    } });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function() {
      return ignoreElements_1.ignoreElements;
    } });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function() {
      return isEmpty_1.isEmpty;
    } });
    var last_1 = require_last();
    Object.defineProperty(exports, "last", { enumerable: true, get: function() {
      return last_1.last;
    } });
    var map_1 = require_map();
    Object.defineProperty(exports, "map", { enumerable: true, get: function() {
      return map_1.map;
    } });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports, "mapTo", { enumerable: true, get: function() {
      return mapTo_1.mapTo;
    } });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports, "materialize", { enumerable: true, get: function() {
      return materialize_1.materialize;
    } });
    var max_1 = require_max();
    Object.defineProperty(exports, "max", { enumerable: true, get: function() {
      return max_1.max;
    } });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function() {
      return mergeAll_1.mergeAll;
    } });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports, "flatMap", { enumerable: true, get: function() {
      return flatMap_1.flatMap;
    } });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function() {
      return mergeMap_1.mergeMap;
    } });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function() {
      return mergeMapTo_1.mergeMapTo;
    } });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function() {
      return mergeScan_1.mergeScan;
    } });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function() {
      return mergeWith_1.mergeWith;
    } });
    var min_1 = require_min();
    Object.defineProperty(exports, "min", { enumerable: true, get: function() {
      return min_1.min;
    } });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports, "multicast", { enumerable: true, get: function() {
      return multicast_1.multicast;
    } });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports, "observeOn", { enumerable: true, get: function() {
      return observeOn_1.observeOn;
    } });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports, "onErrorResumeNextWith", { enumerable: true, get: function() {
      return onErrorResumeNextWith_1.onErrorResumeNextWith;
    } });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports, "pairwise", { enumerable: true, get: function() {
      return pairwise_1.pairwise;
    } });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports, "pluck", { enumerable: true, get: function() {
      return pluck_1.pluck;
    } });
    var publish_1 = require_publish();
    Object.defineProperty(exports, "publish", { enumerable: true, get: function() {
      return publish_1.publish;
    } });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function() {
      return publishBehavior_1.publishBehavior;
    } });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports, "publishLast", { enumerable: true, get: function() {
      return publishLast_1.publishLast;
    } });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function() {
      return publishReplay_1.publishReplay;
    } });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports, "raceWith", { enumerable: true, get: function() {
      return raceWith_1.raceWith;
    } });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports, "reduce", { enumerable: true, get: function() {
      return reduce_1.reduce;
    } });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports, "repeat", { enumerable: true, get: function() {
      return repeat_1.repeat;
    } });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function() {
      return repeatWhen_1.repeatWhen;
    } });
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retry", { enumerable: true, get: function() {
      return retry_1.retry;
    } });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function() {
      return retryWhen_1.retryWhen;
    } });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports, "refCount", { enumerable: true, get: function() {
      return refCount_1.refCount;
    } });
    var sample_1 = require_sample();
    Object.defineProperty(exports, "sample", { enumerable: true, get: function() {
      return sample_1.sample;
    } });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function() {
      return sampleTime_1.sampleTime;
    } });
    var scan_1 = require_scan();
    Object.defineProperty(exports, "scan", { enumerable: true, get: function() {
      return scan_1.scan;
    } });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function() {
      return sequenceEqual_1.sequenceEqual;
    } });
    var share_1 = require_share();
    Object.defineProperty(exports, "share", { enumerable: true, get: function() {
      return share_1.share;
    } });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function() {
      return shareReplay_1.shareReplay;
    } });
    var single_1 = require_single();
    Object.defineProperty(exports, "single", { enumerable: true, get: function() {
      return single_1.single;
    } });
    var skip_1 = require_skip();
    Object.defineProperty(exports, "skip", { enumerable: true, get: function() {
      return skip_1.skip;
    } });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports, "skipLast", { enumerable: true, get: function() {
      return skipLast_1.skipLast;
    } });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function() {
      return skipUntil_1.skipUntil;
    } });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function() {
      return skipWhile_1.skipWhile;
    } });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports, "startWith", { enumerable: true, get: function() {
      return startWith_1.startWith;
    } });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function() {
      return subscribeOn_1.subscribeOn;
    } });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports, "switchAll", { enumerable: true, get: function() {
      return switchAll_1.switchAll;
    } });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports, "switchMap", { enumerable: true, get: function() {
      return switchMap_1.switchMap;
    } });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function() {
      return switchMapTo_1.switchMapTo;
    } });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports, "switchScan", { enumerable: true, get: function() {
      return switchScan_1.switchScan;
    } });
    var take_1 = require_take();
    Object.defineProperty(exports, "take", { enumerable: true, get: function() {
      return take_1.take;
    } });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports, "takeLast", { enumerable: true, get: function() {
      return takeLast_1.takeLast;
    } });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function() {
      return takeUntil_1.takeUntil;
    } });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function() {
      return takeWhile_1.takeWhile;
    } });
    var tap_1 = require_tap();
    Object.defineProperty(exports, "tap", { enumerable: true, get: function() {
      return tap_1.tap;
    } });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports, "throttle", { enumerable: true, get: function() {
      return throttle_1.throttle;
    } });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function() {
      return throttleTime_1.throttleTime;
    } });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function() {
      return throwIfEmpty_1.throwIfEmpty;
    } });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function() {
      return timeInterval_1.timeInterval;
    } });
    var timeout_2 = require_timeout();
    Object.defineProperty(exports, "timeout", { enumerable: true, get: function() {
      return timeout_2.timeout;
    } });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function() {
      return timeoutWith_1.timeoutWith;
    } });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports, "timestamp", { enumerable: true, get: function() {
      return timestamp_1.timestamp;
    } });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports, "toArray", { enumerable: true, get: function() {
      return toArray_1.toArray;
    } });
    var window_1 = require_window();
    Object.defineProperty(exports, "window", { enumerable: true, get: function() {
      return window_1.window;
    } });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports, "windowCount", { enumerable: true, get: function() {
      return windowCount_1.windowCount;
    } });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports, "windowTime", { enumerable: true, get: function() {
      return windowTime_1.windowTime;
    } });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function() {
      return windowToggle_1.windowToggle;
    } });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function() {
      return windowWhen_1.windowWhen;
    } });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function() {
      return withLatestFrom_1.withLatestFrom;
    } });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports, "zipAll", { enumerable: true, get: function() {
      return zipAll_1.zipAll;
    } });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports, "zipWith", { enumerable: true, get: function() {
      return zipWith_1.zipWith;
    } });
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/partition.js
var require_partition2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/partition.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.partition = void 0;
    var not_1 = require_not();
    var filter_1 = require_filter();
    function partition(predicate, thisArg) {
      return function(source) {
        return [filter_1.filter(predicate, thisArg)(source), filter_1.filter(not_1.not(predicate, thisArg))(source)];
      };
    }
    exports.partition = partition;
  }
});

// ../../node_modules/rxjs/dist/cjs/internal/operators/race.js
var require_race2 = __commonJS({
  "../../node_modules/rxjs/dist/cjs/internal/operators/race.js"(exports) {
    "use strict";
    var __read = exports && exports.__read || function(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m)
        return o;
      var i = m.call(o), r, ar = [], e;
      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
          ar.push(r.value);
      } catch (error) {
        e = { error };
      } finally {
        try {
          if (r && !r.done && (m = i["return"]))
            m.call(i);
        } finally {
          if (e)
            throw e.error;
        }
      }
      return ar;
    };
    var __spreadArray = exports && exports.__spreadArray || function(to, from) {
      for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
      return to;
    };
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.race = void 0;
    var argsOrArgArray_1 = require_argsOrArgArray();
    var raceWith_1 = require_raceWith();
    function race() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
      }
      return raceWith_1.raceWith.apply(void 0, __spreadArray([], __read(argsOrArgArray_1.argsOrArgArray(args))));
    }
    exports.race = race;
  }
});

// ../../node_modules/rxjs/dist/cjs/operators/index.js
var require_operators = __commonJS({
  "../../node_modules/rxjs/dist/cjs/operators/index.js"(exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.mergeAll = exports.merge = exports.max = exports.materialize = exports.mapTo = exports.map = exports.last = exports.isEmpty = exports.ignoreElements = exports.groupBy = exports.first = exports.findIndex = exports.find = exports.finalize = exports.filter = exports.expand = exports.exhaustMap = exports.exhaustAll = exports.exhaust = exports.every = exports.endWith = exports.elementAt = exports.distinctUntilKeyChanged = exports.distinctUntilChanged = exports.distinct = exports.dematerialize = exports.delayWhen = exports.delay = exports.defaultIfEmpty = exports.debounceTime = exports.debounce = exports.count = exports.connect = exports.concatWith = exports.concatMapTo = exports.concatMap = exports.concatAll = exports.concat = exports.combineLatestWith = exports.combineLatest = exports.combineLatestAll = exports.combineAll = exports.catchError = exports.bufferWhen = exports.bufferToggle = exports.bufferTime = exports.bufferCount = exports.buffer = exports.auditTime = exports.audit = void 0;
    exports.timeInterval = exports.throwIfEmpty = exports.throttleTime = exports.throttle = exports.tap = exports.takeWhile = exports.takeUntil = exports.takeLast = exports.take = exports.switchScan = exports.switchMapTo = exports.switchMap = exports.switchAll = exports.subscribeOn = exports.startWith = exports.skipWhile = exports.skipUntil = exports.skipLast = exports.skip = exports.single = exports.shareReplay = exports.share = exports.sequenceEqual = exports.scan = exports.sampleTime = exports.sample = exports.refCount = exports.retryWhen = exports.retry = exports.repeatWhen = exports.repeat = exports.reduce = exports.raceWith = exports.race = exports.publishReplay = exports.publishLast = exports.publishBehavior = exports.publish = exports.pluck = exports.partition = exports.pairwise = exports.onErrorResumeNext = exports.observeOn = exports.multicast = exports.min = exports.mergeWith = exports.mergeScan = exports.mergeMapTo = exports.mergeMap = exports.flatMap = void 0;
    exports.zipWith = exports.zipAll = exports.zip = exports.withLatestFrom = exports.windowWhen = exports.windowToggle = exports.windowTime = exports.windowCount = exports.window = exports.toArray = exports.timestamp = exports.timeoutWith = exports.timeout = void 0;
    var audit_1 = require_audit();
    Object.defineProperty(exports, "audit", { enumerable: true, get: function() {
      return audit_1.audit;
    } });
    var auditTime_1 = require_auditTime();
    Object.defineProperty(exports, "auditTime", { enumerable: true, get: function() {
      return auditTime_1.auditTime;
    } });
    var buffer_1 = require_buffer();
    Object.defineProperty(exports, "buffer", { enumerable: true, get: function() {
      return buffer_1.buffer;
    } });
    var bufferCount_1 = require_bufferCount();
    Object.defineProperty(exports, "bufferCount", { enumerable: true, get: function() {
      return bufferCount_1.bufferCount;
    } });
    var bufferTime_1 = require_bufferTime();
    Object.defineProperty(exports, "bufferTime", { enumerable: true, get: function() {
      return bufferTime_1.bufferTime;
    } });
    var bufferToggle_1 = require_bufferToggle();
    Object.defineProperty(exports, "bufferToggle", { enumerable: true, get: function() {
      return bufferToggle_1.bufferToggle;
    } });
    var bufferWhen_1 = require_bufferWhen();
    Object.defineProperty(exports, "bufferWhen", { enumerable: true, get: function() {
      return bufferWhen_1.bufferWhen;
    } });
    var catchError_1 = require_catchError();
    Object.defineProperty(exports, "catchError", { enumerable: true, get: function() {
      return catchError_1.catchError;
    } });
    var combineAll_1 = require_combineAll();
    Object.defineProperty(exports, "combineAll", { enumerable: true, get: function() {
      return combineAll_1.combineAll;
    } });
    var combineLatestAll_1 = require_combineLatestAll();
    Object.defineProperty(exports, "combineLatestAll", { enumerable: true, get: function() {
      return combineLatestAll_1.combineLatestAll;
    } });
    var combineLatest_1 = require_combineLatest2();
    Object.defineProperty(exports, "combineLatest", { enumerable: true, get: function() {
      return combineLatest_1.combineLatest;
    } });
    var combineLatestWith_1 = require_combineLatestWith();
    Object.defineProperty(exports, "combineLatestWith", { enumerable: true, get: function() {
      return combineLatestWith_1.combineLatestWith;
    } });
    var concat_1 = require_concat2();
    Object.defineProperty(exports, "concat", { enumerable: true, get: function() {
      return concat_1.concat;
    } });
    var concatAll_1 = require_concatAll();
    Object.defineProperty(exports, "concatAll", { enumerable: true, get: function() {
      return concatAll_1.concatAll;
    } });
    var concatMap_1 = require_concatMap();
    Object.defineProperty(exports, "concatMap", { enumerable: true, get: function() {
      return concatMap_1.concatMap;
    } });
    var concatMapTo_1 = require_concatMapTo();
    Object.defineProperty(exports, "concatMapTo", { enumerable: true, get: function() {
      return concatMapTo_1.concatMapTo;
    } });
    var concatWith_1 = require_concatWith();
    Object.defineProperty(exports, "concatWith", { enumerable: true, get: function() {
      return concatWith_1.concatWith;
    } });
    var connect_1 = require_connect();
    Object.defineProperty(exports, "connect", { enumerable: true, get: function() {
      return connect_1.connect;
    } });
    var count_1 = require_count();
    Object.defineProperty(exports, "count", { enumerable: true, get: function() {
      return count_1.count;
    } });
    var debounce_1 = require_debounce();
    Object.defineProperty(exports, "debounce", { enumerable: true, get: function() {
      return debounce_1.debounce;
    } });
    var debounceTime_1 = require_debounceTime();
    Object.defineProperty(exports, "debounceTime", { enumerable: true, get: function() {
      return debounceTime_1.debounceTime;
    } });
    var defaultIfEmpty_1 = require_defaultIfEmpty();
    Object.defineProperty(exports, "defaultIfEmpty", { enumerable: true, get: function() {
      return defaultIfEmpty_1.defaultIfEmpty;
    } });
    var delay_1 = require_delay();
    Object.defineProperty(exports, "delay", { enumerable: true, get: function() {
      return delay_1.delay;
    } });
    var delayWhen_1 = require_delayWhen();
    Object.defineProperty(exports, "delayWhen", { enumerable: true, get: function() {
      return delayWhen_1.delayWhen;
    } });
    var dematerialize_1 = require_dematerialize();
    Object.defineProperty(exports, "dematerialize", { enumerable: true, get: function() {
      return dematerialize_1.dematerialize;
    } });
    var distinct_1 = require_distinct();
    Object.defineProperty(exports, "distinct", { enumerable: true, get: function() {
      return distinct_1.distinct;
    } });
    var distinctUntilChanged_1 = require_distinctUntilChanged();
    Object.defineProperty(exports, "distinctUntilChanged", { enumerable: true, get: function() {
      return distinctUntilChanged_1.distinctUntilChanged;
    } });
    var distinctUntilKeyChanged_1 = require_distinctUntilKeyChanged();
    Object.defineProperty(exports, "distinctUntilKeyChanged", { enumerable: true, get: function() {
      return distinctUntilKeyChanged_1.distinctUntilKeyChanged;
    } });
    var elementAt_1 = require_elementAt();
    Object.defineProperty(exports, "elementAt", { enumerable: true, get: function() {
      return elementAt_1.elementAt;
    } });
    var endWith_1 = require_endWith();
    Object.defineProperty(exports, "endWith", { enumerable: true, get: function() {
      return endWith_1.endWith;
    } });
    var every_1 = require_every();
    Object.defineProperty(exports, "every", { enumerable: true, get: function() {
      return every_1.every;
    } });
    var exhaust_1 = require_exhaust();
    Object.defineProperty(exports, "exhaust", { enumerable: true, get: function() {
      return exhaust_1.exhaust;
    } });
    var exhaustAll_1 = require_exhaustAll();
    Object.defineProperty(exports, "exhaustAll", { enumerable: true, get: function() {
      return exhaustAll_1.exhaustAll;
    } });
    var exhaustMap_1 = require_exhaustMap();
    Object.defineProperty(exports, "exhaustMap", { enumerable: true, get: function() {
      return exhaustMap_1.exhaustMap;
    } });
    var expand_1 = require_expand();
    Object.defineProperty(exports, "expand", { enumerable: true, get: function() {
      return expand_1.expand;
    } });
    var filter_1 = require_filter();
    Object.defineProperty(exports, "filter", { enumerable: true, get: function() {
      return filter_1.filter;
    } });
    var finalize_1 = require_finalize();
    Object.defineProperty(exports, "finalize", { enumerable: true, get: function() {
      return finalize_1.finalize;
    } });
    var find_1 = require_find();
    Object.defineProperty(exports, "find", { enumerable: true, get: function() {
      return find_1.find;
    } });
    var findIndex_1 = require_findIndex();
    Object.defineProperty(exports, "findIndex", { enumerable: true, get: function() {
      return findIndex_1.findIndex;
    } });
    var first_1 = require_first();
    Object.defineProperty(exports, "first", { enumerable: true, get: function() {
      return first_1.first;
    } });
    var groupBy_1 = require_groupBy();
    Object.defineProperty(exports, "groupBy", { enumerable: true, get: function() {
      return groupBy_1.groupBy;
    } });
    var ignoreElements_1 = require_ignoreElements();
    Object.defineProperty(exports, "ignoreElements", { enumerable: true, get: function() {
      return ignoreElements_1.ignoreElements;
    } });
    var isEmpty_1 = require_isEmpty();
    Object.defineProperty(exports, "isEmpty", { enumerable: true, get: function() {
      return isEmpty_1.isEmpty;
    } });
    var last_1 = require_last();
    Object.defineProperty(exports, "last", { enumerable: true, get: function() {
      return last_1.last;
    } });
    var map_1 = require_map();
    Object.defineProperty(exports, "map", { enumerable: true, get: function() {
      return map_1.map;
    } });
    var mapTo_1 = require_mapTo();
    Object.defineProperty(exports, "mapTo", { enumerable: true, get: function() {
      return mapTo_1.mapTo;
    } });
    var materialize_1 = require_materialize();
    Object.defineProperty(exports, "materialize", { enumerable: true, get: function() {
      return materialize_1.materialize;
    } });
    var max_1 = require_max();
    Object.defineProperty(exports, "max", { enumerable: true, get: function() {
      return max_1.max;
    } });
    var merge_1 = require_merge2();
    Object.defineProperty(exports, "merge", { enumerable: true, get: function() {
      return merge_1.merge;
    } });
    var mergeAll_1 = require_mergeAll();
    Object.defineProperty(exports, "mergeAll", { enumerable: true, get: function() {
      return mergeAll_1.mergeAll;
    } });
    var flatMap_1 = require_flatMap();
    Object.defineProperty(exports, "flatMap", { enumerable: true, get: function() {
      return flatMap_1.flatMap;
    } });
    var mergeMap_1 = require_mergeMap();
    Object.defineProperty(exports, "mergeMap", { enumerable: true, get: function() {
      return mergeMap_1.mergeMap;
    } });
    var mergeMapTo_1 = require_mergeMapTo();
    Object.defineProperty(exports, "mergeMapTo", { enumerable: true, get: function() {
      return mergeMapTo_1.mergeMapTo;
    } });
    var mergeScan_1 = require_mergeScan();
    Object.defineProperty(exports, "mergeScan", { enumerable: true, get: function() {
      return mergeScan_1.mergeScan;
    } });
    var mergeWith_1 = require_mergeWith();
    Object.defineProperty(exports, "mergeWith", { enumerable: true, get: function() {
      return mergeWith_1.mergeWith;
    } });
    var min_1 = require_min();
    Object.defineProperty(exports, "min", { enumerable: true, get: function() {
      return min_1.min;
    } });
    var multicast_1 = require_multicast();
    Object.defineProperty(exports, "multicast", { enumerable: true, get: function() {
      return multicast_1.multicast;
    } });
    var observeOn_1 = require_observeOn();
    Object.defineProperty(exports, "observeOn", { enumerable: true, get: function() {
      return observeOn_1.observeOn;
    } });
    var onErrorResumeNextWith_1 = require_onErrorResumeNextWith();
    Object.defineProperty(exports, "onErrorResumeNext", { enumerable: true, get: function() {
      return onErrorResumeNextWith_1.onErrorResumeNext;
    } });
    var pairwise_1 = require_pairwise();
    Object.defineProperty(exports, "pairwise", { enumerable: true, get: function() {
      return pairwise_1.pairwise;
    } });
    var partition_1 = require_partition2();
    Object.defineProperty(exports, "partition", { enumerable: true, get: function() {
      return partition_1.partition;
    } });
    var pluck_1 = require_pluck();
    Object.defineProperty(exports, "pluck", { enumerable: true, get: function() {
      return pluck_1.pluck;
    } });
    var publish_1 = require_publish();
    Object.defineProperty(exports, "publish", { enumerable: true, get: function() {
      return publish_1.publish;
    } });
    var publishBehavior_1 = require_publishBehavior();
    Object.defineProperty(exports, "publishBehavior", { enumerable: true, get: function() {
      return publishBehavior_1.publishBehavior;
    } });
    var publishLast_1 = require_publishLast();
    Object.defineProperty(exports, "publishLast", { enumerable: true, get: function() {
      return publishLast_1.publishLast;
    } });
    var publishReplay_1 = require_publishReplay();
    Object.defineProperty(exports, "publishReplay", { enumerable: true, get: function() {
      return publishReplay_1.publishReplay;
    } });
    var race_1 = require_race2();
    Object.defineProperty(exports, "race", { enumerable: true, get: function() {
      return race_1.race;
    } });
    var raceWith_1 = require_raceWith();
    Object.defineProperty(exports, "raceWith", { enumerable: true, get: function() {
      return raceWith_1.raceWith;
    } });
    var reduce_1 = require_reduce();
    Object.defineProperty(exports, "reduce", { enumerable: true, get: function() {
      return reduce_1.reduce;
    } });
    var repeat_1 = require_repeat();
    Object.defineProperty(exports, "repeat", { enumerable: true, get: function() {
      return repeat_1.repeat;
    } });
    var repeatWhen_1 = require_repeatWhen();
    Object.defineProperty(exports, "repeatWhen", { enumerable: true, get: function() {
      return repeatWhen_1.repeatWhen;
    } });
    var retry_1 = require_retry();
    Object.defineProperty(exports, "retry", { enumerable: true, get: function() {
      return retry_1.retry;
    } });
    var retryWhen_1 = require_retryWhen();
    Object.defineProperty(exports, "retryWhen", { enumerable: true, get: function() {
      return retryWhen_1.retryWhen;
    } });
    var refCount_1 = require_refCount();
    Object.defineProperty(exports, "refCount", { enumerable: true, get: function() {
      return refCount_1.refCount;
    } });
    var sample_1 = require_sample();
    Object.defineProperty(exports, "sample", { enumerable: true, get: function() {
      return sample_1.sample;
    } });
    var sampleTime_1 = require_sampleTime();
    Object.defineProperty(exports, "sampleTime", { enumerable: true, get: function() {
      return sampleTime_1.sampleTime;
    } });
    var scan_1 = require_scan();
    Object.defineProperty(exports, "scan", { enumerable: true, get: function() {
      return scan_1.scan;
    } });
    var sequenceEqual_1 = require_sequenceEqual();
    Object.defineProperty(exports, "sequenceEqual", { enumerable: true, get: function() {
      return sequenceEqual_1.sequenceEqual;
    } });
    var share_1 = require_share();
    Object.defineProperty(exports, "share", { enumerable: true, get: function() {
      return share_1.share;
    } });
    var shareReplay_1 = require_shareReplay();
    Object.defineProperty(exports, "shareReplay", { enumerable: true, get: function() {
      return shareReplay_1.shareReplay;
    } });
    var single_1 = require_single();
    Object.defineProperty(exports, "single", { enumerable: true, get: function() {
      return single_1.single;
    } });
    var skip_1 = require_skip();
    Object.defineProperty(exports, "skip", { enumerable: true, get: function() {
      return skip_1.skip;
    } });
    var skipLast_1 = require_skipLast();
    Object.defineProperty(exports, "skipLast", { enumerable: true, get: function() {
      return skipLast_1.skipLast;
    } });
    var skipUntil_1 = require_skipUntil();
    Object.defineProperty(exports, "skipUntil", { enumerable: true, get: function() {
      return skipUntil_1.skipUntil;
    } });
    var skipWhile_1 = require_skipWhile();
    Object.defineProperty(exports, "skipWhile", { enumerable: true, get: function() {
      return skipWhile_1.skipWhile;
    } });
    var startWith_1 = require_startWith();
    Object.defineProperty(exports, "startWith", { enumerable: true, get: function() {
      return startWith_1.startWith;
    } });
    var subscribeOn_1 = require_subscribeOn();
    Object.defineProperty(exports, "subscribeOn", { enumerable: true, get: function() {
      return subscribeOn_1.subscribeOn;
    } });
    var switchAll_1 = require_switchAll();
    Object.defineProperty(exports, "switchAll", { enumerable: true, get: function() {
      return switchAll_1.switchAll;
    } });
    var switchMap_1 = require_switchMap();
    Object.defineProperty(exports, "switchMap", { enumerable: true, get: function() {
      return switchMap_1.switchMap;
    } });
    var switchMapTo_1 = require_switchMapTo();
    Object.defineProperty(exports, "switchMapTo", { enumerable: true, get: function() {
      return switchMapTo_1.switchMapTo;
    } });
    var switchScan_1 = require_switchScan();
    Object.defineProperty(exports, "switchScan", { enumerable: true, get: function() {
      return switchScan_1.switchScan;
    } });
    var take_1 = require_take();
    Object.defineProperty(exports, "take", { enumerable: true, get: function() {
      return take_1.take;
    } });
    var takeLast_1 = require_takeLast();
    Object.defineProperty(exports, "takeLast", { enumerable: true, get: function() {
      return takeLast_1.takeLast;
    } });
    var takeUntil_1 = require_takeUntil();
    Object.defineProperty(exports, "takeUntil", { enumerable: true, get: function() {
      return takeUntil_1.takeUntil;
    } });
    var takeWhile_1 = require_takeWhile();
    Object.defineProperty(exports, "takeWhile", { enumerable: true, get: function() {
      return takeWhile_1.takeWhile;
    } });
    var tap_1 = require_tap();
    Object.defineProperty(exports, "tap", { enumerable: true, get: function() {
      return tap_1.tap;
    } });
    var throttle_1 = require_throttle();
    Object.defineProperty(exports, "throttle", { enumerable: true, get: function() {
      return throttle_1.throttle;
    } });
    var throttleTime_1 = require_throttleTime();
    Object.defineProperty(exports, "throttleTime", { enumerable: true, get: function() {
      return throttleTime_1.throttleTime;
    } });
    var throwIfEmpty_1 = require_throwIfEmpty();
    Object.defineProperty(exports, "throwIfEmpty", { enumerable: true, get: function() {
      return throwIfEmpty_1.throwIfEmpty;
    } });
    var timeInterval_1 = require_timeInterval();
    Object.defineProperty(exports, "timeInterval", { enumerable: true, get: function() {
      return timeInterval_1.timeInterval;
    } });
    var timeout_1 = require_timeout();
    Object.defineProperty(exports, "timeout", { enumerable: true, get: function() {
      return timeout_1.timeout;
    } });
    var timeoutWith_1 = require_timeoutWith();
    Object.defineProperty(exports, "timeoutWith", { enumerable: true, get: function() {
      return timeoutWith_1.timeoutWith;
    } });
    var timestamp_1 = require_timestamp();
    Object.defineProperty(exports, "timestamp", { enumerable: true, get: function() {
      return timestamp_1.timestamp;
    } });
    var toArray_1 = require_toArray();
    Object.defineProperty(exports, "toArray", { enumerable: true, get: function() {
      return toArray_1.toArray;
    } });
    var window_1 = require_window();
    Object.defineProperty(exports, "window", { enumerable: true, get: function() {
      return window_1.window;
    } });
    var windowCount_1 = require_windowCount();
    Object.defineProperty(exports, "windowCount", { enumerable: true, get: function() {
      return windowCount_1.windowCount;
    } });
    var windowTime_1 = require_windowTime();
    Object.defineProperty(exports, "windowTime", { enumerable: true, get: function() {
      return windowTime_1.windowTime;
    } });
    var windowToggle_1 = require_windowToggle();
    Object.defineProperty(exports, "windowToggle", { enumerable: true, get: function() {
      return windowToggle_1.windowToggle;
    } });
    var windowWhen_1 = require_windowWhen();
    Object.defineProperty(exports, "windowWhen", { enumerable: true, get: function() {
      return windowWhen_1.windowWhen;
    } });
    var withLatestFrom_1 = require_withLatestFrom();
    Object.defineProperty(exports, "withLatestFrom", { enumerable: true, get: function() {
      return withLatestFrom_1.withLatestFrom;
    } });
    var zip_1 = require_zip2();
    Object.defineProperty(exports, "zip", { enumerable: true, get: function() {
      return zip_1.zip;
    } });
    var zipAll_1 = require_zipAll();
    Object.defineProperty(exports, "zipAll", { enumerable: true, get: function() {
      return zipAll_1.zipAll;
    } });
    var zipWith_1 = require_zipWith();
    Object.defineProperty(exports, "zipWith", { enumerable: true, get: function() {
      return zipWith_1.zipWith;
    } });
  }
});

// src/index.ts
var import_tokens = __toESM(require_dist());

// ../../node_modules/@angular/core/fesm2022/core.mjs
var import_rxjs = __toESM(require_cjs(), 1);
var import_operators = __toESM(require_operators(), 1);
function getClosureSafeProperty(objWithPropertyToExtract) {
  for (let key in objWithPropertyToExtract) {
    if (objWithPropertyToExtract[key] === getClosureSafeProperty) {
      return key;
    }
  }
  throw Error("Could not find renamed property on target object.");
}
function fillProperties(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key) && !target.hasOwnProperty(key)) {
      target[key] = source[key];
    }
  }
}
function stringify(token) {
  if (typeof token === "string") {
    return token;
  }
  if (Array.isArray(token)) {
    return "[" + token.map(stringify).join(", ") + "]";
  }
  if (token == null) {
    return "" + token;
  }
  if (token.overriddenName) {
    return `${token.overriddenName}`;
  }
  if (token.name) {
    return `${token.name}`;
  }
  const res = token.toString();
  if (res == null) {
    return "" + res;
  }
  const newLineIndex = res.indexOf("\n");
  return newLineIndex === -1 ? res : res.substring(0, newLineIndex);
}
function concatStringsWithSpace(before, after) {
  return before == null || before === "" ? after === null ? "" : after : after == null || after === "" ? before : before + " " + after;
}
var __forward_ref__ = getClosureSafeProperty({ __forward_ref__: getClosureSafeProperty });
function forwardRef(forwardRefFn) {
  forwardRefFn.__forward_ref__ = forwardRef;
  forwardRefFn.toString = function() {
    return stringify(this());
  };
  return forwardRefFn;
}
function resolveForwardRef(type) {
  return isForwardRef(type) ? type() : type;
}
function isForwardRef(fn) {
  return typeof fn === "function" && fn.hasOwnProperty(__forward_ref__) && fn.__forward_ref__ === forwardRef;
}
function isEnvironmentProviders(value) {
  return value && !!value.\u0275providers;
}
var ERROR_DETAILS_PAGE_BASE_URL = "https://angular.io/errors";
var XSS_SECURITY_URL = "https://g.co/ng/security#xss";
var RuntimeError = class extends Error {
  constructor(code, message) {
    super(formatRuntimeError(code, message));
    this.code = code;
  }
};
function formatRuntimeError(code, message) {
  const fullCode = `NG0${Math.abs(code)}`;
  let errorMessage = `${fullCode}${message ? ": " + message : ""}`;
  if (ngDevMode && code < 0) {
    const addPeriodSeparator = !errorMessage.match(/[.,;!?\n]$/);
    const separator = addPeriodSeparator ? "." : "";
    errorMessage = `${errorMessage}${separator} Find more at ${ERROR_DETAILS_PAGE_BASE_URL}/${fullCode}`;
  }
  return errorMessage;
}
function renderStringify(value) {
  if (typeof value === "string")
    return value;
  if (value == null)
    return "";
  return String(value);
}
function stringifyForError(value) {
  if (typeof value === "function")
    return value.name || value.toString();
  if (typeof value === "object" && value != null && typeof value.type === "function") {
    return value.type.name || value.type.toString();
  }
  return renderStringify(value);
}
function throwCyclicDependencyError(token, path) {
  const depPath = path ? `. Dependency path: ${path.join(" > ")} > ${token}` : "";
  throw new RuntimeError(-200, `Circular dependency in DI detected for ${token}${depPath}`);
}
function throwMixedMultiProviderError() {
  throw new Error(`Cannot mix multi providers and regular providers`);
}
function throwInvalidProviderError(ngModuleType, providers, provider) {
  if (ngModuleType && providers) {
    const providerDetail = providers.map((v) => v == provider ? "?" + provider + "?" : "...");
    throw new Error(`Invalid provider for the NgModule '${stringify(ngModuleType)}' - only instances of Provider and Type are allowed, got: [${providerDetail.join(", ")}]`);
  } else if (isEnvironmentProviders(provider)) {
    if (provider.\u0275fromNgModule) {
      throw new RuntimeError(207, `Invalid providers from 'importProvidersFrom' present in a non-environment injector. 'importProvidersFrom' can't be used for component providers.`);
    } else {
      throw new RuntimeError(207, `Invalid providers present in a non-environment injector. 'EnvironmentProviders' can't be used for component providers.`);
    }
  } else {
    throw new Error("Invalid provider");
  }
}
function throwProviderNotFoundError(token, injectorName) {
  const injectorDetails = injectorName ? ` in ${injectorName}` : "";
  throw new RuntimeError(-201, ngDevMode && `No provider for ${stringifyForError(token)} found${injectorDetails}`);
}
function assertNumber(actual, msg) {
  if (!(typeof actual === "number")) {
    throwError(msg, typeof actual, "number", "===");
  }
}
function assertNumberInRange(actual, minInclusive, maxInclusive) {
  assertNumber(actual, "Expected a number");
  assertLessThanOrEqual(actual, maxInclusive, "Expected number to be less than or equal to");
  assertGreaterThanOrEqual(actual, minInclusive, "Expected number to be greater than or equal to");
}
function assertString(actual, msg) {
  if (!(typeof actual === "string")) {
    throwError(msg, actual === null ? "null" : typeof actual, "string", "===");
  }
}
function assertFunction(actual, msg) {
  if (!(typeof actual === "function")) {
    throwError(msg, actual === null ? "null" : typeof actual, "function", "===");
  }
}
function assertEqual(actual, expected, msg) {
  if (!(actual == expected)) {
    throwError(msg, actual, expected, "==");
  }
}
function assertNotEqual(actual, expected, msg) {
  if (!(actual != expected)) {
    throwError(msg, actual, expected, "!=");
  }
}
function assertSame(actual, expected, msg) {
  if (!(actual === expected)) {
    throwError(msg, actual, expected, "===");
  }
}
function assertNotSame(actual, expected, msg) {
  if (!(actual !== expected)) {
    throwError(msg, actual, expected, "!==");
  }
}
function assertLessThan(actual, expected, msg) {
  if (!(actual < expected)) {
    throwError(msg, actual, expected, "<");
  }
}
function assertLessThanOrEqual(actual, expected, msg) {
  if (!(actual <= expected)) {
    throwError(msg, actual, expected, "<=");
  }
}
function assertGreaterThan(actual, expected, msg) {
  if (!(actual > expected)) {
    throwError(msg, actual, expected, ">");
  }
}
function assertGreaterThanOrEqual(actual, expected, msg) {
  if (!(actual >= expected)) {
    throwError(msg, actual, expected, ">=");
  }
}
function assertDefined(actual, msg) {
  if (actual == null) {
    throwError(msg, actual, null, "!=");
  }
}
function throwError(msg, actual, expected, comparison) {
  throw new Error(`ASSERTION ERROR: ${msg}` + (comparison == null ? "" : ` [Expected=> ${expected} ${comparison} ${actual} <=Actual]`));
}
function assertDomNode(node) {
  if (!(node instanceof Node)) {
    throwError(`The provided value must be an instance of a DOM Node but got ${stringify(node)}`);
  }
}
function assertIndexInRange(arr, index) {
  assertDefined(arr, "Array must be defined.");
  const maxLen = arr.length;
  if (index < 0 || index >= maxLen) {
    throwError(`Index expected to be less than ${maxLen} but got ${index}`);
  }
}
function assertOneOf(value, ...validValues) {
  if (validValues.indexOf(value) !== -1)
    return true;
  throwError(`Expected value to be one of ${JSON.stringify(validValues)} but was ${JSON.stringify(value)}.`);
}
function \u0275\u0275defineInjectable(opts) {
  return {
    token: opts.token,
    providedIn: opts.providedIn || null,
    factory: opts.factory,
    value: void 0
  };
}
function \u0275\u0275defineInjector(options) {
  return { providers: options.providers || [], imports: options.imports || [] };
}
function getInjectableDef(type) {
  return getOwnDefinition(type, NG_PROV_DEF) || getOwnDefinition(type, NG_INJECTABLE_DEF);
}
function getOwnDefinition(type, field) {
  return type.hasOwnProperty(field) ? type[field] : null;
}
function getInheritedInjectableDef(type) {
  const def = type && (type[NG_PROV_DEF] || type[NG_INJECTABLE_DEF]);
  if (def) {
    ngDevMode && console.warn(`DEPRECATED: DI is instantiating a token "${type.name}" that inherits its @Injectable decorator but does not provide one itself.
This will become an error in a future version of Angular. Please add @Injectable() to the "${type.name}" class.`);
    return def;
  } else {
    return null;
  }
}
function getInjectorDef(type) {
  return type && (type.hasOwnProperty(NG_INJ_DEF) || type.hasOwnProperty(NG_INJECTOR_DEF)) ? type[NG_INJ_DEF] : null;
}
var NG_PROV_DEF = getClosureSafeProperty({ \u0275prov: getClosureSafeProperty });
var NG_INJ_DEF = getClosureSafeProperty({ \u0275inj: getClosureSafeProperty });
var NG_INJECTABLE_DEF = getClosureSafeProperty({ ngInjectableDef: getClosureSafeProperty });
var NG_INJECTOR_DEF = getClosureSafeProperty({ ngInjectorDef: getClosureSafeProperty });
var InjectFlags;
(function(InjectFlags2) {
  InjectFlags2[InjectFlags2["Default"] = 0] = "Default";
  InjectFlags2[InjectFlags2["Host"] = 1] = "Host";
  InjectFlags2[InjectFlags2["Self"] = 2] = "Self";
  InjectFlags2[InjectFlags2["SkipSelf"] = 4] = "SkipSelf";
  InjectFlags2[InjectFlags2["Optional"] = 8] = "Optional";
})(InjectFlags || (InjectFlags = {}));
var _injectImplementation;
function getInjectImplementation() {
  return _injectImplementation;
}
function setInjectImplementation(impl) {
  const previous = _injectImplementation;
  _injectImplementation = impl;
  return previous;
}
function injectRootLimpMode(token, notFoundValue, flags) {
  const injectableDef = getInjectableDef(token);
  if (injectableDef && injectableDef.providedIn == "root") {
    return injectableDef.value === void 0 ? injectableDef.value = injectableDef.factory() : injectableDef.value;
  }
  if (flags & InjectFlags.Optional)
    return null;
  if (notFoundValue !== void 0)
    return notFoundValue;
  throwProviderNotFoundError(stringify(token), "Injector");
}
function assertInjectImplementationNotEqual(fn) {
  ngDevMode && assertNotEqual(_injectImplementation, fn, "Calling \u0275\u0275inject would cause infinite recursion");
}
var _global = /* @__PURE__ */ (() => typeof globalThis !== "undefined" && globalThis || typeof global !== "undefined" && global || typeof window !== "undefined" && window || typeof self !== "undefined" && typeof WorkerGlobalScope !== "undefined" && self instanceof WorkerGlobalScope && self)();
function ngDevModeResetPerfCounters() {
  const locationString = typeof location !== "undefined" ? location.toString() : "";
  const newCounters = {
    namedConstructors: locationString.indexOf("ngDevMode=namedConstructors") != -1,
    firstCreatePass: 0,
    tNode: 0,
    tView: 0,
    rendererCreateTextNode: 0,
    rendererSetText: 0,
    rendererCreateElement: 0,
    rendererAddEventListener: 0,
    rendererSetAttribute: 0,
    rendererRemoveAttribute: 0,
    rendererSetProperty: 0,
    rendererSetClassName: 0,
    rendererAddClass: 0,
    rendererRemoveClass: 0,
    rendererSetStyle: 0,
    rendererRemoveStyle: 0,
    rendererDestroy: 0,
    rendererDestroyNode: 0,
    rendererMoveNode: 0,
    rendererRemoveNode: 0,
    rendererAppendChild: 0,
    rendererInsertBefore: 0,
    rendererCreateComment: 0,
    hydratedNodes: 0,
    hydratedComponents: 0,
    dehydratedViewsRemoved: 0,
    dehydratedViewsCleanupRuns: 0,
    componentsSkippedHydration: 0
  };
  const allowNgDevModeTrue = locationString.indexOf("ngDevMode=false") === -1;
  _global["ngDevMode"] = allowNgDevModeTrue && newCounters;
  return newCounters;
}
function initNgDevMode() {
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (typeof ngDevMode !== "object") {
      ngDevModeResetPerfCounters();
    }
    return typeof ngDevMode !== "undefined" && !!ngDevMode;
  }
  return false;
}
var _THROW_IF_NOT_FOUND = {};
var THROW_IF_NOT_FOUND = _THROW_IF_NOT_FOUND;
var DI_DECORATOR_FLAG = "__NG_DI_FLAG__";
var NG_TEMP_TOKEN_PATH = "ngTempTokenPath";
var NG_TOKEN_PATH = "ngTokenPath";
var NEW_LINE = /\n/gm;
var NO_NEW_LINE = "\u0275";
var SOURCE = "__source";
var _currentInjector = void 0;
function setCurrentInjector(injector) {
  const former = _currentInjector;
  _currentInjector = injector;
  return former;
}
function injectInjectorOnly(token, flags = InjectFlags.Default) {
  if (_currentInjector === void 0) {
    throw new RuntimeError(-203, ngDevMode && `inject() must be called from an injection context such as a constructor, a factory function, a field initializer, or a function used with \`runInInjectionContext\`.`);
  } else if (_currentInjector === null) {
    return injectRootLimpMode(token, void 0, flags);
  } else {
    return _currentInjector.get(token, flags & InjectFlags.Optional ? null : void 0, flags);
  }
}
function \u0275\u0275inject(token, flags = InjectFlags.Default) {
  return (getInjectImplementation() || injectInjectorOnly)(resolveForwardRef(token), flags);
}
function \u0275\u0275invalidFactoryDep(index) {
  throw new RuntimeError(202, ngDevMode && `This constructor is not compatible with Angular Dependency Injection because its dependency at index ${index} of the parameter list is invalid.
This can happen if the dependency type is a primitive like a string or if an ancestor of this class is missing an Angular decorator.

Please check that 1) the type for the parameter at index ${index} is correct and 2) the correct Angular decorators are defined for this class and its ancestors.`);
}
function inject(token, flags = InjectFlags.Default) {
  return \u0275\u0275inject(token, convertToBitFlags(flags));
}
function convertToBitFlags(flags) {
  if (typeof flags === "undefined" || typeof flags === "number") {
    return flags;
  }
  return 0 | // comment to force a line break in the formatter
  (flags.optional && 8) | (flags.host && 1) | (flags.self && 2) | (flags.skipSelf && 4);
}
function injectArgs(types) {
  const args = [];
  for (let i = 0; i < types.length; i++) {
    const arg = resolveForwardRef(types[i]);
    if (Array.isArray(arg)) {
      if (arg.length === 0) {
        throw new RuntimeError(900, ngDevMode && "Arguments array must have arguments.");
      }
      let type = void 0;
      let flags = InjectFlags.Default;
      for (let j = 0; j < arg.length; j++) {
        const meta = arg[j];
        const flag = getInjectFlag(meta);
        if (typeof flag === "number") {
          if (flag === -1) {
            type = meta.token;
          } else {
            flags |= flag;
          }
        } else {
          type = meta;
        }
      }
      args.push(\u0275\u0275inject(type, flags));
    } else {
      args.push(\u0275\u0275inject(arg));
    }
  }
  return args;
}
function attachInjectFlag(decorator, flag) {
  decorator[DI_DECORATOR_FLAG] = flag;
  decorator.prototype[DI_DECORATOR_FLAG] = flag;
  return decorator;
}
function getInjectFlag(token) {
  return token[DI_DECORATOR_FLAG];
}
function catchInjectorError(e, token, injectorErrorName, source) {
  const tokenPath = e[NG_TEMP_TOKEN_PATH];
  if (token[SOURCE]) {
    tokenPath.unshift(token[SOURCE]);
  }
  e.message = formatError("\n" + e.message, tokenPath, injectorErrorName, source);
  e[NG_TOKEN_PATH] = tokenPath;
  e[NG_TEMP_TOKEN_PATH] = null;
  throw e;
}
function formatError(text, obj, injectorErrorName, source = null) {
  text = text && text.charAt(0) === "\n" && text.charAt(1) == NO_NEW_LINE ? text.slice(2) : text;
  let context = stringify(obj);
  if (Array.isArray(obj)) {
    context = obj.map(stringify).join(" -> ");
  } else if (typeof obj === "object") {
    let parts = [];
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        let value = obj[key];
        parts.push(key + ":" + (typeof value === "string" ? JSON.stringify(value) : stringify(value)));
      }
    }
    context = `{${parts.join(", ")}}`;
  }
  return `${injectorErrorName}${source ? "(" + source + ")" : ""}[${context}]: ${text.replace(NEW_LINE, "\n  ")}`;
}
function noSideEffects(fn) {
  return { toString: fn }.toString();
}
var ChangeDetectionStrategy;
(function(ChangeDetectionStrategy2) {
  ChangeDetectionStrategy2[ChangeDetectionStrategy2["OnPush"] = 0] = "OnPush";
  ChangeDetectionStrategy2[ChangeDetectionStrategy2["Default"] = 1] = "Default";
})(ChangeDetectionStrategy || (ChangeDetectionStrategy = {}));
var ViewEncapsulation$1;
(function(ViewEncapsulation2) {
  ViewEncapsulation2[ViewEncapsulation2["Emulated"] = 0] = "Emulated";
  ViewEncapsulation2[ViewEncapsulation2["None"] = 2] = "None";
  ViewEncapsulation2[ViewEncapsulation2["ShadowDom"] = 3] = "ShadowDom";
})(ViewEncapsulation$1 || (ViewEncapsulation$1 = {}));
var EMPTY_OBJ = {};
var EMPTY_ARRAY = [];
if ((typeof ngDevMode === "undefined" || ngDevMode) && initNgDevMode()) {
  Object.freeze(EMPTY_OBJ);
  Object.freeze(EMPTY_ARRAY);
}
var NG_COMP_DEF = getClosureSafeProperty({ \u0275cmp: getClosureSafeProperty });
var NG_DIR_DEF = getClosureSafeProperty({ \u0275dir: getClosureSafeProperty });
var NG_PIPE_DEF = getClosureSafeProperty({ \u0275pipe: getClosureSafeProperty });
var NG_MOD_DEF = getClosureSafeProperty({ \u0275mod: getClosureSafeProperty });
var NG_FACTORY_DEF = getClosureSafeProperty({ \u0275fac: getClosureSafeProperty });
var NG_ELEMENT_ID = getClosureSafeProperty({ __NG_ELEMENT_ID__: getClosureSafeProperty });
var NG_ENV_ID = getClosureSafeProperty({ __NG_ENV_ID__: getClosureSafeProperty });
function classIndexOf(className, classToSearch, startingIndex) {
  ngDevMode && assertNotEqual(classToSearch, "", 'can not look for "" string.');
  let end = className.length;
  while (true) {
    const foundIndex = className.indexOf(classToSearch, startingIndex);
    if (foundIndex === -1)
      return foundIndex;
    if (foundIndex === 0 || className.charCodeAt(foundIndex - 1) <= 32) {
      const length = classToSearch.length;
      if (foundIndex + length === end || className.charCodeAt(foundIndex + length) <= 32) {
        return foundIndex;
      }
    }
    startingIndex = foundIndex + 1;
  }
}
function setUpAttributes(renderer, native, attrs) {
  let i = 0;
  while (i < attrs.length) {
    const value = attrs[i];
    if (typeof value === "number") {
      if (value !== 0) {
        break;
      }
      i++;
      const namespaceURI = attrs[i++];
      const attrName = attrs[i++];
      const attrVal = attrs[i++];
      ngDevMode && ngDevMode.rendererSetAttribute++;
      renderer.setAttribute(native, attrName, attrVal, namespaceURI);
    } else {
      const attrName = value;
      const attrVal = attrs[++i];
      ngDevMode && ngDevMode.rendererSetAttribute++;
      if (isAnimationProp(attrName)) {
        renderer.setProperty(native, attrName, attrVal);
      } else {
        renderer.setAttribute(native, attrName, attrVal);
      }
      i++;
    }
  }
  return i;
}
function isNameOnlyAttributeMarker(marker) {
  return marker === 3 || marker === 4 || marker === 6;
}
function isAnimationProp(name) {
  return name.charCodeAt(0) === 64;
}
function mergeHostAttrs(dst, src) {
  if (src === null || src.length === 0) {
  } else if (dst === null || dst.length === 0) {
    dst = src.slice();
  } else {
    let srcMarker = -1;
    for (let i = 0; i < src.length; i++) {
      const item = src[i];
      if (typeof item === "number") {
        srcMarker = item;
      } else {
        if (srcMarker === 0) {
        } else if (srcMarker === -1 || srcMarker === 2) {
          mergeHostAttribute(dst, srcMarker, item, null, src[++i]);
        } else {
          mergeHostAttribute(dst, srcMarker, item, null, null);
        }
      }
    }
  }
  return dst;
}
function mergeHostAttribute(dst, marker, key1, key2, value) {
  let i = 0;
  let markerInsertPosition = dst.length;
  if (marker === -1) {
    markerInsertPosition = -1;
  } else {
    while (i < dst.length) {
      const dstValue = dst[i++];
      if (typeof dstValue === "number") {
        if (dstValue === marker) {
          markerInsertPosition = -1;
          break;
        } else if (dstValue > marker) {
          markerInsertPosition = i - 1;
          break;
        }
      }
    }
  }
  while (i < dst.length) {
    const item = dst[i];
    if (typeof item === "number") {
      break;
    } else if (item === key1) {
      if (key2 === null) {
        if (value !== null) {
          dst[i + 1] = value;
        }
        return;
      } else if (key2 === dst[i + 1]) {
        dst[i + 2] = value;
        return;
      }
    }
    i++;
    if (key2 !== null)
      i++;
    if (value !== null)
      i++;
  }
  if (markerInsertPosition !== -1) {
    dst.splice(markerInsertPosition, 0, marker);
    i = markerInsertPosition + 1;
  }
  dst.splice(i++, 0, key1);
  if (key2 !== null) {
    dst.splice(i++, 0, key2);
  }
  if (value !== null) {
    dst.splice(i++, 0, value);
  }
}
var NG_TEMPLATE_SELECTOR = "ng-template";
function isCssClassMatching(attrs, cssClassToMatch, isProjectionMode) {
  ngDevMode && assertEqual(cssClassToMatch, cssClassToMatch.toLowerCase(), "Class name expected to be lowercase.");
  let i = 0;
  let isImplicitAttrsSection = true;
  while (i < attrs.length) {
    let item = attrs[i++];
    if (typeof item === "string" && isImplicitAttrsSection) {
      const value = attrs[i++];
      if (isProjectionMode && item === "class") {
        if (classIndexOf(value.toLowerCase(), cssClassToMatch, 0) !== -1) {
          return true;
        }
      }
    } else if (item === 1) {
      while (i < attrs.length && typeof (item = attrs[i++]) == "string") {
        if (item.toLowerCase() === cssClassToMatch)
          return true;
      }
      return false;
    } else if (typeof item === "number") {
      isImplicitAttrsSection = false;
    }
  }
  return false;
}
function isInlineTemplate(tNode) {
  return tNode.type === 4 && tNode.value !== NG_TEMPLATE_SELECTOR;
}
function hasTagAndTypeMatch(tNode, currentSelector, isProjectionMode) {
  const tagNameToCompare = tNode.type === 4 && !isProjectionMode ? NG_TEMPLATE_SELECTOR : tNode.value;
  return currentSelector === tagNameToCompare;
}
function isNodeMatchingSelector(tNode, selector, isProjectionMode) {
  ngDevMode && assertDefined(selector[0], "Selector should have a tag name");
  let mode = 4;
  const nodeAttrs = tNode.attrs || [];
  const nameOnlyMarkerIdx = getNameOnlyMarkerIndex(nodeAttrs);
  let skipToNextSelector = false;
  for (let i = 0; i < selector.length; i++) {
    const current = selector[i];
    if (typeof current === "number") {
      if (!skipToNextSelector && !isPositive(mode) && !isPositive(current)) {
        return false;
      }
      if (skipToNextSelector && isPositive(current))
        continue;
      skipToNextSelector = false;
      mode = current | mode & 1;
      continue;
    }
    if (skipToNextSelector)
      continue;
    if (mode & 4) {
      mode = 2 | mode & 1;
      if (current !== "" && !hasTagAndTypeMatch(tNode, current, isProjectionMode) || current === "" && selector.length === 1) {
        if (isPositive(mode))
          return false;
        skipToNextSelector = true;
      }
    } else {
      const selectorAttrValue = mode & 8 ? current : selector[++i];
      if (mode & 8 && tNode.attrs !== null) {
        if (!isCssClassMatching(tNode.attrs, selectorAttrValue, isProjectionMode)) {
          if (isPositive(mode))
            return false;
          skipToNextSelector = true;
        }
        continue;
      }
      const attrName = mode & 8 ? "class" : current;
      const attrIndexInNode = findAttrIndexInNode(attrName, nodeAttrs, isInlineTemplate(tNode), isProjectionMode);
      if (attrIndexInNode === -1) {
        if (isPositive(mode))
          return false;
        skipToNextSelector = true;
        continue;
      }
      if (selectorAttrValue !== "") {
        let nodeAttrValue;
        if (attrIndexInNode > nameOnlyMarkerIdx) {
          nodeAttrValue = "";
        } else {
          ngDevMode && assertNotEqual(nodeAttrs[attrIndexInNode], 0, "We do not match directives on namespaced attributes");
          nodeAttrValue = nodeAttrs[attrIndexInNode + 1].toLowerCase();
        }
        const compareAgainstClassName = mode & 8 ? nodeAttrValue : null;
        if (compareAgainstClassName && classIndexOf(compareAgainstClassName, selectorAttrValue, 0) !== -1 || mode & 2 && selectorAttrValue !== nodeAttrValue) {
          if (isPositive(mode))
            return false;
          skipToNextSelector = true;
        }
      }
    }
  }
  return isPositive(mode) || skipToNextSelector;
}
function isPositive(mode) {
  return (mode & 1) === 0;
}
function findAttrIndexInNode(name, attrs, isInlineTemplate2, isProjectionMode) {
  if (attrs === null)
    return -1;
  let i = 0;
  if (isProjectionMode || !isInlineTemplate2) {
    let bindingsMode = false;
    while (i < attrs.length) {
      const maybeAttrName = attrs[i];
      if (maybeAttrName === name) {
        return i;
      } else if (maybeAttrName === 3 || maybeAttrName === 6) {
        bindingsMode = true;
      } else if (maybeAttrName === 1 || maybeAttrName === 2) {
        let value = attrs[++i];
        while (typeof value === "string") {
          value = attrs[++i];
        }
        continue;
      } else if (maybeAttrName === 4) {
        break;
      } else if (maybeAttrName === 0) {
        i += 4;
        continue;
      }
      i += bindingsMode ? 1 : 2;
    }
    return -1;
  } else {
    return matchTemplateAttribute(attrs, name);
  }
}
function isNodeMatchingSelectorList(tNode, selector, isProjectionMode = false) {
  for (let i = 0; i < selector.length; i++) {
    if (isNodeMatchingSelector(tNode, selector[i], isProjectionMode)) {
      return true;
    }
  }
  return false;
}
function getProjectAsAttrValue(tNode) {
  const nodeAttrs = tNode.attrs;
  if (nodeAttrs != null) {
    const ngProjectAsAttrIdx = nodeAttrs.indexOf(
      5
      /* AttributeMarker.ProjectAs */
    );
    if ((ngProjectAsAttrIdx & 1) === 0) {
      return nodeAttrs[ngProjectAsAttrIdx + 1];
    }
  }
  return null;
}
function getNameOnlyMarkerIndex(nodeAttrs) {
  for (let i = 0; i < nodeAttrs.length; i++) {
    const nodeAttr = nodeAttrs[i];
    if (isNameOnlyAttributeMarker(nodeAttr)) {
      return i;
    }
  }
  return nodeAttrs.length;
}
function matchTemplateAttribute(attrs, name) {
  let i = attrs.indexOf(
    4
    /* AttributeMarker.Template */
  );
  if (i > -1) {
    i++;
    while (i < attrs.length) {
      const attr = attrs[i];
      if (typeof attr === "number")
        return -1;
      if (attr === name)
        return i;
      i++;
    }
  }
  return -1;
}
function isSelectorInSelectorList(selector, list) {
  selectorListLoop:
    for (let i = 0; i < list.length; i++) {
      const currentSelectorInList = list[i];
      if (selector.length !== currentSelectorInList.length) {
        continue;
      }
      for (let j = 0; j < selector.length; j++) {
        if (selector[j] !== currentSelectorInList[j]) {
          continue selectorListLoop;
        }
      }
      return true;
    }
  return false;
}
function maybeWrapInNotSelector(isNegativeMode, chunk) {
  return isNegativeMode ? ":not(" + chunk.trim() + ")" : chunk;
}
function stringifyCSSSelector(selector) {
  let result = selector[0];
  let i = 1;
  let mode = 2;
  let currentChunk = "";
  let isNegativeMode = false;
  while (i < selector.length) {
    let valueOrMarker = selector[i];
    if (typeof valueOrMarker === "string") {
      if (mode & 2) {
        const attrValue = selector[++i];
        currentChunk += "[" + valueOrMarker + (attrValue.length > 0 ? '="' + attrValue + '"' : "") + "]";
      } else if (mode & 8) {
        currentChunk += "." + valueOrMarker;
      } else if (mode & 4) {
        currentChunk += " " + valueOrMarker;
      }
    } else {
      if (currentChunk !== "" && !isPositive(valueOrMarker)) {
        result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
        currentChunk = "";
      }
      mode = valueOrMarker;
      isNegativeMode = isNegativeMode || !isPositive(mode);
    }
    i++;
  }
  if (currentChunk !== "") {
    result += maybeWrapInNotSelector(isNegativeMode, currentChunk);
  }
  return result;
}
function stringifyCSSSelectorList(selectorList) {
  return selectorList.map(stringifyCSSSelector).join(",");
}
function extractAttrsAndClassesFromSelector(selector) {
  const attrs = [];
  const classes = [];
  let i = 1;
  let mode = 2;
  while (i < selector.length) {
    let valueOrMarker = selector[i];
    if (typeof valueOrMarker === "string") {
      if (mode === 2) {
        if (valueOrMarker !== "") {
          attrs.push(valueOrMarker, selector[++i]);
        }
      } else if (mode === 8) {
        classes.push(valueOrMarker);
      }
    } else {
      if (!isPositive(mode))
        break;
      mode = valueOrMarker;
    }
    i++;
  }
  return { attrs, classes };
}
function \u0275\u0275defineComponent(componentDefinition) {
  return noSideEffects(() => {
    var _a2;
    (typeof ngDevMode === "undefined" || ngDevMode) && initNgDevMode();
    const baseDef = getNgDirectiveDef(componentDefinition);
    const def = __spreadProps(__spreadValues({}, baseDef), {
      decls: componentDefinition.decls,
      vars: componentDefinition.vars,
      template: componentDefinition.template,
      consts: componentDefinition.consts || null,
      ngContentSelectors: componentDefinition.ngContentSelectors,
      onPush: componentDefinition.changeDetection === ChangeDetectionStrategy.OnPush,
      directiveDefs: null,
      pipeDefs: null,
      dependencies: baseDef.standalone && componentDefinition.dependencies || null,
      getStandaloneInjector: null,
      signals: (_a2 = componentDefinition.signals) != null ? _a2 : false,
      data: componentDefinition.data || {},
      encapsulation: componentDefinition.encapsulation || ViewEncapsulation$1.Emulated,
      styles: componentDefinition.styles || EMPTY_ARRAY,
      _: null,
      schemas: componentDefinition.schemas || null,
      tView: null,
      id: ""
    });
    initFeatures(def);
    const dependencies = componentDefinition.dependencies;
    def.directiveDefs = extractDefListOrFactory(
      dependencies,
      /* pipeDef */
      false
    );
    def.pipeDefs = extractDefListOrFactory(
      dependencies,
      /* pipeDef */
      true
    );
    def.id = getComponentId(def);
    return def;
  });
}
function \u0275\u0275setComponentScope(type, directives, pipes) {
  const def = type.\u0275cmp;
  def.directiveDefs = extractDefListOrFactory(
    directives,
    /* pipeDef */
    false
  );
  def.pipeDefs = extractDefListOrFactory(
    pipes,
    /* pipeDef */
    true
  );
}
function extractDirectiveDef(type) {
  return getComponentDef(type) || getDirectiveDef(type);
}
function nonNull(value) {
  return value !== null;
}
function \u0275\u0275defineNgModule(def) {
  return noSideEffects(() => {
    const res = {
      type: def.type,
      bootstrap: def.bootstrap || EMPTY_ARRAY,
      declarations: def.declarations || EMPTY_ARRAY,
      imports: def.imports || EMPTY_ARRAY,
      exports: def.exports || EMPTY_ARRAY,
      transitiveCompileScopes: null,
      schemas: def.schemas || null,
      id: def.id || null
    };
    return res;
  });
}
function \u0275\u0275setNgModuleScope(type, scope) {
  return noSideEffects(() => {
    const ngModuleDef = getNgModuleDef(type, true);
    ngModuleDef.declarations = scope.declarations || EMPTY_ARRAY;
    ngModuleDef.imports = scope.imports || EMPTY_ARRAY;
    ngModuleDef.exports = scope.exports || EMPTY_ARRAY;
  });
}
function invertObject(obj, secondary) {
  if (obj == null)
    return EMPTY_OBJ;
  const newLookup = {};
  for (const minifiedKey in obj) {
    if (obj.hasOwnProperty(minifiedKey)) {
      let publicName = obj[minifiedKey];
      let declaredName = publicName;
      if (Array.isArray(publicName)) {
        declaredName = publicName[1];
        publicName = publicName[0];
      }
      newLookup[publicName] = minifiedKey;
      if (secondary) {
        secondary[publicName] = declaredName;
      }
    }
  }
  return newLookup;
}
function \u0275\u0275defineDirective(directiveDefinition) {
  return noSideEffects(() => {
    const def = getNgDirectiveDef(directiveDefinition);
    initFeatures(def);
    return def;
  });
}
function \u0275\u0275definePipe(pipeDef) {
  return {
    type: pipeDef.type,
    name: pipeDef.name,
    factory: null,
    pure: pipeDef.pure !== false,
    standalone: pipeDef.standalone === true,
    onDestroy: pipeDef.type.prototype.ngOnDestroy || null
  };
}
function getComponentDef(type) {
  return type[NG_COMP_DEF] || null;
}
function getDirectiveDef(type) {
  return type[NG_DIR_DEF] || null;
}
function getPipeDef$1(type) {
  return type[NG_PIPE_DEF] || null;
}
function isStandalone(type) {
  const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef$1(type);
  return def !== null ? def.standalone : false;
}
function getNgModuleDef(type, throwNotFound) {
  const ngModuleDef = type[NG_MOD_DEF] || null;
  if (!ngModuleDef && throwNotFound === true) {
    throw new Error(`Type ${stringify(type)} does not have '\u0275mod' property.`);
  }
  return ngModuleDef;
}
function getNgDirectiveDef(directiveDefinition) {
  const declaredInputs = {};
  return {
    type: directiveDefinition.type,
    providersResolver: null,
    factory: null,
    hostBindings: directiveDefinition.hostBindings || null,
    hostVars: directiveDefinition.hostVars || 0,
    hostAttrs: directiveDefinition.hostAttrs || null,
    contentQueries: directiveDefinition.contentQueries || null,
    declaredInputs,
    inputTransforms: null,
    inputConfig: directiveDefinition.inputs || EMPTY_OBJ,
    exportAs: directiveDefinition.exportAs || null,
    standalone: directiveDefinition.standalone === true,
    signals: directiveDefinition.signals === true,
    selectors: directiveDefinition.selectors || EMPTY_ARRAY,
    viewQuery: directiveDefinition.viewQuery || null,
    features: directiveDefinition.features || null,
    setInput: null,
    findHostDirectiveDefs: null,
    hostDirectives: null,
    inputs: invertObject(directiveDefinition.inputs, declaredInputs),
    outputs: invertObject(directiveDefinition.outputs)
  };
}
function initFeatures(definition) {
  var _a2;
  (_a2 = definition.features) == null ? void 0 : _a2.forEach((fn) => fn(definition));
}
function extractDefListOrFactory(dependencies, pipeDef) {
  if (!dependencies) {
    return null;
  }
  const defExtractor = pipeDef ? getPipeDef$1 : extractDirectiveDef;
  return () => (typeof dependencies === "function" ? dependencies() : dependencies).map((dep) => defExtractor(dep)).filter(nonNull);
}
var GENERATED_COMP_IDS = /* @__PURE__ */ new Map();
function getComponentId(componentDef) {
  let hash = 0;
  const hashSelectors = [
    componentDef.selectors,
    componentDef.ngContentSelectors,
    componentDef.hostVars,
    componentDef.hostAttrs,
    componentDef.consts,
    componentDef.vars,
    componentDef.decls,
    componentDef.encapsulation,
    componentDef.standalone,
    componentDef.signals,
    componentDef.exportAs,
    JSON.stringify(componentDef.inputs),
    JSON.stringify(componentDef.outputs),
    // We cannot use 'componentDef.type.name' as the name of the symbol will change and will not
    // match in the server and browser bundles.
    Object.getOwnPropertyNames(componentDef.type.prototype),
    !!componentDef.contentQueries,
    !!componentDef.viewQuery
  ].join("|");
  for (const char of hashSelectors) {
    hash = Math.imul(31, hash) + char.charCodeAt(0) << 0;
  }
  hash += 2147483647 + 1;
  const compId = "c" + hash;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    if (GENERATED_COMP_IDS.has(compId)) {
      const previousCompDefType = GENERATED_COMP_IDS.get(compId);
      if (previousCompDefType !== componentDef.type) {
        console.warn(formatRuntimeError(-912, `Component ID generation collision detected. Components '${previousCompDefType.name}' and '${componentDef.type.name}' with selector '${stringifyCSSSelectorList(componentDef.selectors)}' generated the same component ID. To fix this, you can change the selector of one of those components or add an extra host attribute to force a different ID.`));
      }
    } else {
      GENERATED_COMP_IDS.set(compId, componentDef.type);
    }
  }
  return compId;
}
var HOST = 0;
var TVIEW = 1;
var FLAGS = 2;
var PARENT = 3;
var NEXT = 4;
var DESCENDANT_VIEWS_TO_REFRESH = 5;
var T_HOST = 6;
var CLEANUP = 7;
var CONTEXT = 8;
var INJECTOR$1 = 9;
var ENVIRONMENT = 10;
var RENDERER = 11;
var CHILD_HEAD = 12;
var CHILD_TAIL = 13;
var DECLARATION_VIEW = 14;
var DECLARATION_COMPONENT_VIEW = 15;
var DECLARATION_LCONTAINER = 16;
var PREORDER_HOOK_FLAGS = 17;
var QUERIES = 18;
var ID = 19;
var EMBEDDED_VIEW_INJECTOR = 20;
var ON_DESTROY_HOOKS = 21;
var HYDRATION = 22;
var REACTIVE_TEMPLATE_CONSUMER = 23;
var REACTIVE_HOST_BINDING_CONSUMER = 24;
var HEADER_OFFSET = 25;
var TYPE = 1;
var HAS_TRANSPLANTED_VIEWS = 2;
var NATIVE = 7;
var VIEW_REFS = 8;
var MOVED_VIEWS = 9;
var CONTAINER_HEADER_OFFSET = 11;
function isLView(value) {
  return Array.isArray(value) && typeof value[TYPE] === "object";
}
function isLContainer(value) {
  return Array.isArray(value) && value[TYPE] === true;
}
function isContentQueryHost(tNode) {
  return (tNode.flags & 4) !== 0;
}
function isComponentHost(tNode) {
  return tNode.componentOffset > -1;
}
function isDirectiveHost(tNode) {
  return (tNode.flags & 1) === 1;
}
function isComponentDef(def) {
  return !!def.template;
}
function isRootView(target) {
  return (target[FLAGS] & 512) !== 0;
}
function assertTNodeForLView(tNode, lView) {
  assertTNodeForTView(tNode, lView[TVIEW]);
}
function assertTNodeForTView(tNode, tView) {
  assertTNode(tNode);
  tNode.hasOwnProperty("tView_") && assertEqual(tNode.tView_, tView, "This TNode does not belong to this TView.");
}
function assertTNode(tNode) {
  assertDefined(tNode, "TNode must be defined");
  if (!(tNode && typeof tNode === "object" && tNode.hasOwnProperty("directiveStylingLast"))) {
    throwError("Not of type TNode, got: " + tNode);
  }
}
function assertTIcu(tIcu) {
  assertDefined(tIcu, "Expected TIcu to be defined");
  if (!(typeof tIcu.currentCaseLViewIndex === "number")) {
    throwError("Object is not of TIcu type.");
  }
}
function assertComponentType(actual, msg = "Type passed in is not ComponentType, it does not have '\u0275cmp' property.") {
  if (!getComponentDef(actual)) {
    throwError(msg);
  }
}
function assertNgModuleType(actual, msg = "Type passed in is not NgModuleType, it does not have '\u0275mod' property.") {
  if (!getNgModuleDef(actual)) {
    throwError(msg);
  }
}
function assertHasParent(tNode) {
  assertDefined(tNode, "currentTNode should exist!");
  assertDefined(tNode.parent, "currentTNode should have a parent");
}
function assertLContainer(value) {
  assertDefined(value, "LContainer must be defined");
  assertEqual(isLContainer(value), true, "Expecting LContainer");
}
function assertLViewOrUndefined(value) {
  value && assertEqual(isLView(value), true, "Expecting LView or undefined or null");
}
function assertLView(value) {
  assertDefined(value, "LView must be defined");
  assertEqual(isLView(value), true, "Expecting LView");
}
function assertFirstCreatePass(tView, errMessage) {
  assertEqual(tView.firstCreatePass, true, errMessage || "Should only be called in first create pass.");
}
function assertFirstUpdatePass(tView, errMessage) {
  assertEqual(tView.firstUpdatePass, true, errMessage || "Should only be called in first update pass.");
}
function assertDirectiveDef(obj) {
  if (obj.type === void 0 || obj.selectors == void 0 || obj.inputs === void 0) {
    throwError(`Expected a DirectiveDef/ComponentDef and this object does not seem to have the expected shape.`);
  }
}
function assertIndexInDeclRange(lView, index) {
  const tView = lView[1];
  assertBetween(HEADER_OFFSET, tView.bindingStartIndex, index);
}
function assertIndexInExpandoRange(lView, index) {
  const tView = lView[1];
  assertBetween(tView.expandoStartIndex, lView.length, index);
}
function assertBetween(lower, upper, index) {
  if (!(lower <= index && index < upper)) {
    throwError(`Index out of range (expecting ${lower} <= ${index} < ${upper})`);
  }
}
function assertProjectionSlots(lView, errMessage) {
  assertDefined(lView[DECLARATION_COMPONENT_VIEW], "Component views should exist.");
  assertDefined(lView[DECLARATION_COMPONENT_VIEW][T_HOST].projection, errMessage || "Components with projection nodes (<ng-content>) must have projection slots defined.");
}
function assertParentView(lView, errMessage) {
  assertDefined(lView, errMessage || "Component views should always have a parent view (component's host view)");
}
function assertNodeInjector(lView, injectorIndex) {
  assertIndexInExpandoRange(lView, injectorIndex);
  assertIndexInExpandoRange(
    lView,
    injectorIndex + 8
    /* NodeInjectorOffset.PARENT */
  );
  assertNumber(lView[injectorIndex + 0], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 1], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 2], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 3], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 4], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 5], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 6], "injectorIndex should point to a bloom filter");
  assertNumber(lView[injectorIndex + 7], "injectorIndex should point to a bloom filter");
  assertNumber(lView[
    injectorIndex + 8
    /* NodeInjectorOffset.PARENT */
  ], "injectorIndex should point to parent injector");
}
function getFactoryDef(type, throwNotFound) {
  const hasFactoryDef = type.hasOwnProperty(NG_FACTORY_DEF);
  if (!hasFactoryDef && throwNotFound === true && ngDevMode) {
    throw new Error(`Type ${stringify(type)} does not have '\u0275fac' property.`);
  }
  return hasFactoryDef ? type[NG_FACTORY_DEF] : null;
}
var SIGNAL = Symbol("SIGNAL");
var LeakyRef = class {
  constructor(ref) {
    this.ref = ref;
  }
  deref() {
    return this.ref;
  }
};
var _a;
var WeakRefImpl = (_a = _global["WeakRef"]) != null ? _a : LeakyRef;
function newWeakRef(value) {
  if (typeof ngDevMode !== "undefined" && ngDevMode && WeakRefImpl === void 0) {
    throw new Error(`Angular requires a browser which supports the 'WeakRef' API`);
  }
  return new WeakRefImpl(value);
}
var _nextReactiveId = 0;
var activeConsumer = null;
var inNotificationPhase = false;
function setActiveConsumer(consumer) {
  const prev = activeConsumer;
  activeConsumer = consumer;
  return prev;
}
var ReactiveNode = class {
  constructor() {
    this.id = _nextReactiveId++;
    this.ref = newWeakRef(this);
    this.producers = /* @__PURE__ */ new Map();
    this.consumers = /* @__PURE__ */ new Map();
    this.trackingVersion = 0;
    this.valueVersion = 0;
  }
  /**
   * Polls dependencies of a consumer to determine if they have actually changed.
   *
   * If this returns `false`, then even though the consumer may have previously been notified of a
   * change, the values of its dependencies have not actually changed and the consumer should not
   * rerun any reactions.
   */
  consumerPollProducersForChange() {
    for (const [producerId, edge] of this.producers) {
      const producer = edge.producerNode.deref();
      if (producer === void 0 || edge.atTrackingVersion !== this.trackingVersion) {
        this.producers.delete(producerId);
        producer == null ? void 0 : producer.consumers.delete(this.id);
        continue;
      }
      if (producer.producerPollStatus(edge.seenValueVersion)) {
        return true;
      }
    }
    return false;
  }
  /**
   * Notify all consumers of this producer that its value may have changed.
   */
  producerMayHaveChanged() {
    const prev = inNotificationPhase;
    inNotificationPhase = true;
    try {
      for (const [consumerId, edge] of this.consumers) {
        const consumer = edge.consumerNode.deref();
        if (consumer === void 0 || consumer.trackingVersion !== edge.atTrackingVersion) {
          this.consumers.delete(consumerId);
          consumer == null ? void 0 : consumer.producers.delete(this.id);
          continue;
        }
        consumer.onConsumerDependencyMayHaveChanged();
      }
    } finally {
      inNotificationPhase = prev;
    }
  }
  /**
   * Mark that this producer node has been accessed in the current reactive context.
   */
  producerAccessed() {
    if (inNotificationPhase) {
      throw new Error(typeof ngDevMode !== "undefined" && ngDevMode ? `Assertion error: signal read during notification phase` : "");
    }
    if (activeConsumer === null) {
      return;
    }
    let edge = activeConsumer.producers.get(this.id);
    if (edge === void 0) {
      edge = {
        consumerNode: activeConsumer.ref,
        producerNode: this.ref,
        seenValueVersion: this.valueVersion,
        atTrackingVersion: activeConsumer.trackingVersion
      };
      activeConsumer.producers.set(this.id, edge);
      this.consumers.set(activeConsumer.id, edge);
    } else {
      edge.seenValueVersion = this.valueVersion;
      edge.atTrackingVersion = activeConsumer.trackingVersion;
    }
  }
  /**
   * Whether this consumer currently has any producers registered.
   */
  get hasProducers() {
    return this.producers.size > 0;
  }
  /**
   * Whether this `ReactiveNode` in its producer capacity is currently allowed to initiate updates,
   * based on the current consumer context.
   */
  get producerUpdatesAllowed() {
    return (activeConsumer == null ? void 0 : activeConsumer.consumerAllowSignalWrites) !== false;
  }
  /**
   * Checks if a `Producer` has a current value which is different than the value
   * last seen at a specific version by a `Consumer` which recorded a dependency on
   * this `Producer`.
   */
  producerPollStatus(lastSeenValueVersion) {
    if (this.valueVersion !== lastSeenValueVersion) {
      return true;
    }
    this.onProducerUpdateValueVersion();
    return this.valueVersion !== lastSeenValueVersion;
  }
};
var UNSET = Symbol("UNSET");
var COMPUTING = Symbol("COMPUTING");
var ERRORED = Symbol("ERRORED");
function defaultThrowError() {
  throw new Error();
}
var throwInvalidWriteToSignalErrorFn = defaultThrowError;
function setThrowInvalidWriteToSignalError(fn) {
  throwInvalidWriteToSignalErrorFn = fn;
}
var NOOP_CLEANUP_FN = () => {
};
var Watch = class extends ReactiveNode {
  constructor(watch, schedule, allowSignalWrites) {
    super();
    this.watch = watch;
    this.schedule = schedule;
    this.dirty = false;
    this.cleanupFn = NOOP_CLEANUP_FN;
    this.registerOnCleanup = (cleanupFn) => {
      this.cleanupFn = cleanupFn;
    };
    this.consumerAllowSignalWrites = allowSignalWrites;
  }
  notify() {
    if (!this.dirty) {
      this.schedule(this);
    }
    this.dirty = true;
  }
  onConsumerDependencyMayHaveChanged() {
    this.notify();
  }
  onProducerUpdateValueVersion() {
  }
  /**
   * Execute the reactive expression in the context of this `Watch` consumer.
   *
   * Should be called by the user scheduling algorithm when the provided
   * `schedule` hook is called by `Watch`.
   */
  run() {
    this.dirty = false;
    if (this.trackingVersion !== 0 && !this.consumerPollProducersForChange()) {
      return;
    }
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      this.cleanupFn();
      this.cleanupFn = NOOP_CLEANUP_FN;
      this.watch(this.registerOnCleanup);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  cleanup() {
    this.cleanupFn();
  }
};
var SimpleChange = class {
  constructor(previousValue, currentValue, firstChange) {
    this.previousValue = previousValue;
    this.currentValue = currentValue;
    this.firstChange = firstChange;
  }
  /**
   * Check whether the new value is the first value assigned.
   */
  isFirstChange() {
    return this.firstChange;
  }
};
function \u0275\u0275NgOnChangesFeature() {
  return NgOnChangesFeatureImpl;
}
function NgOnChangesFeatureImpl(definition) {
  if (definition.type.prototype.ngOnChanges) {
    definition.setInput = ngOnChangesSetInput;
  }
  return rememberChangeHistoryAndInvokeOnChangesHook;
}
\u0275\u0275NgOnChangesFeature.ngInherit = true;
function rememberChangeHistoryAndInvokeOnChangesHook() {
  const simpleChangesStore = getSimpleChangesStore(this);
  const current = simpleChangesStore == null ? void 0 : simpleChangesStore.current;
  if (current) {
    const previous = simpleChangesStore.previous;
    if (previous === EMPTY_OBJ) {
      simpleChangesStore.previous = current;
    } else {
      for (let key in current) {
        previous[key] = current[key];
      }
    }
    simpleChangesStore.current = null;
    this.ngOnChanges(current);
  }
}
function ngOnChangesSetInput(instance, value, publicName, privateName) {
  const declaredName = this.declaredInputs[publicName];
  ngDevMode && assertString(declaredName, "Name of input in ngOnChanges has to be a string");
  const simpleChangesStore = getSimpleChangesStore(instance) || setSimpleChangesStore(instance, { previous: EMPTY_OBJ, current: null });
  const current = simpleChangesStore.current || (simpleChangesStore.current = {});
  const previous = simpleChangesStore.previous;
  const previousChange = previous[declaredName];
  current[declaredName] = new SimpleChange(previousChange && previousChange.currentValue, value, previous === EMPTY_OBJ);
  instance[privateName] = value;
}
var SIMPLE_CHANGES_STORE = "__ngSimpleChanges__";
function getSimpleChangesStore(instance) {
  return instance[SIMPLE_CHANGES_STORE] || null;
}
function setSimpleChangesStore(instance, store2) {
  return instance[SIMPLE_CHANGES_STORE] = store2;
}
var profilerCallback = null;
var setProfiler = (profiler2) => {
  profilerCallback = profiler2;
};
var profiler = function(event, instance, hookOrListener) {
  if (profilerCallback != null) {
    profilerCallback(event, instance, hookOrListener);
  }
};
var SVG_NAMESPACE = "svg";
var MATH_ML_NAMESPACE = "math";
function unwrapRNode(value) {
  while (Array.isArray(value)) {
    value = value[HOST];
  }
  return value;
}
function unwrapLView(value) {
  while (Array.isArray(value)) {
    if (typeof value[TYPE] === "object")
      return value;
    value = value[HOST];
  }
  return null;
}
function getNativeByIndex(index, lView) {
  ngDevMode && assertIndexInRange(lView, index);
  ngDevMode && assertGreaterThanOrEqual(index, HEADER_OFFSET, "Expected to be past HEADER_OFFSET");
  return unwrapRNode(lView[index]);
}
function getNativeByTNode(tNode, lView) {
  ngDevMode && assertTNodeForLView(tNode, lView);
  ngDevMode && assertIndexInRange(lView, tNode.index);
  const node = unwrapRNode(lView[tNode.index]);
  return node;
}
function getTNode(tView, index) {
  ngDevMode && assertGreaterThan(index, -1, "wrong index for TNode");
  ngDevMode && assertLessThan(index, tView.data.length, "wrong index for TNode");
  const tNode = tView.data[index];
  ngDevMode && tNode !== null && assertTNode(tNode);
  return tNode;
}
function load(view, index) {
  ngDevMode && assertIndexInRange(view, index);
  return view[index];
}
function getComponentLViewByIndex(nodeIndex, hostView) {
  ngDevMode && assertIndexInRange(hostView, nodeIndex);
  const slotValue = hostView[nodeIndex];
  const lView = isLView(slotValue) ? slotValue : slotValue[HOST];
  return lView;
}
function isCreationMode(view) {
  return (view[FLAGS] & 4) === 4;
}
function viewAttachedToChangeDetector(view) {
  return (view[FLAGS] & 128) === 128;
}
function viewAttachedToContainer(view) {
  return isLContainer(view[PARENT]);
}
function getConstant(consts, index) {
  if (index === null || index === void 0)
    return null;
  ngDevMode && assertIndexInRange(consts, index);
  return consts[index];
}
function resetPreOrderHookFlags(lView) {
  lView[PREORDER_HOOK_FLAGS] = 0;
}
function markViewForRefresh(lView) {
  if ((lView[FLAGS] & 1024) === 0) {
    lView[FLAGS] |= 1024;
    updateViewsToRefresh(lView, 1);
  }
}
function clearViewRefreshFlag(lView) {
  if (lView[FLAGS] & 1024) {
    lView[FLAGS] &= ~1024;
    updateViewsToRefresh(lView, -1);
  }
}
function updateViewsToRefresh(lView, amount) {
  let parent = lView[PARENT];
  if (parent === null) {
    return;
  }
  parent[DESCENDANT_VIEWS_TO_REFRESH] += amount;
  let viewOrContainer = parent;
  parent = parent[PARENT];
  while (parent !== null && (amount === 1 && viewOrContainer[DESCENDANT_VIEWS_TO_REFRESH] === 1 || amount === -1 && viewOrContainer[DESCENDANT_VIEWS_TO_REFRESH] === 0)) {
    parent[DESCENDANT_VIEWS_TO_REFRESH] += amount;
    viewOrContainer = parent;
    parent = parent[PARENT];
  }
}
function storeLViewOnDestroy(lView, onDestroyCallback) {
  if ((lView[FLAGS] & 256) === 256) {
    throw new RuntimeError(911, ngDevMode && "View has already been destroyed.");
  }
  if (lView[ON_DESTROY_HOOKS] === null) {
    lView[ON_DESTROY_HOOKS] = [];
  }
  lView[ON_DESTROY_HOOKS].push(onDestroyCallback);
}
function removeLViewOnDestroy(lView, onDestroyCallback) {
  if (lView[ON_DESTROY_HOOKS] === null)
    return;
  const destroyCBIdx = lView[ON_DESTROY_HOOKS].indexOf(onDestroyCallback);
  if (destroyCBIdx !== -1) {
    lView[ON_DESTROY_HOOKS].splice(destroyCBIdx, 1);
  }
}
var instructionState = {
  lFrame: createLFrame(null),
  bindingsEnabled: true,
  skipHydrationRootTNode: null
};
var _isInCheckNoChangesMode = false;
function getElementDepthCount() {
  return instructionState.lFrame.elementDepthCount;
}
function increaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount++;
}
function decreaseElementDepthCount() {
  instructionState.lFrame.elementDepthCount--;
}
function getBindingsEnabled() {
  return instructionState.bindingsEnabled;
}
function isInSkipHydrationBlock$1() {
  return instructionState.skipHydrationRootTNode !== null;
}
function isSkipHydrationRootTNode(tNode) {
  return instructionState.skipHydrationRootTNode === tNode;
}
function \u0275\u0275enableBindings() {
  instructionState.bindingsEnabled = true;
}
function \u0275\u0275disableBindings() {
  instructionState.bindingsEnabled = false;
}
function leaveSkipHydrationBlock() {
  instructionState.skipHydrationRootTNode = null;
}
function getLView() {
  return instructionState.lFrame.lView;
}
function getTView() {
  return instructionState.lFrame.tView;
}
function \u0275\u0275restoreView(viewToRestore) {
  instructionState.lFrame.contextLView = viewToRestore;
  return viewToRestore[CONTEXT];
}
function \u0275\u0275resetView(value) {
  instructionState.lFrame.contextLView = null;
  return value;
}
function getCurrentTNode() {
  let currentTNode = getCurrentTNodePlaceholderOk();
  while (currentTNode !== null && currentTNode.type === 64) {
    currentTNode = currentTNode.parent;
  }
  return currentTNode;
}
function getCurrentTNodePlaceholderOk() {
  return instructionState.lFrame.currentTNode;
}
function getCurrentParentTNode() {
  const lFrame = instructionState.lFrame;
  const currentTNode = lFrame.currentTNode;
  return lFrame.isParent ? currentTNode : currentTNode.parent;
}
function setCurrentTNode(tNode, isParent) {
  ngDevMode && tNode && assertTNodeForTView(tNode, instructionState.lFrame.tView);
  const lFrame = instructionState.lFrame;
  lFrame.currentTNode = tNode;
  lFrame.isParent = isParent;
}
function isCurrentTNodeParent() {
  return instructionState.lFrame.isParent;
}
function setCurrentTNodeAsNotParent() {
  instructionState.lFrame.isParent = false;
}
function getContextLView() {
  const contextLView = instructionState.lFrame.contextLView;
  ngDevMode && assertDefined(contextLView, "contextLView must be defined.");
  return contextLView;
}
function isInCheckNoChangesMode() {
  !ngDevMode && throwError("Must never be called in production mode");
  return _isInCheckNoChangesMode;
}
function setIsInCheckNoChangesMode(mode) {
  !ngDevMode && throwError("Must never be called in production mode");
  _isInCheckNoChangesMode = mode;
}
function getBindingRoot() {
  const lFrame = instructionState.lFrame;
  let index = lFrame.bindingRootIndex;
  if (index === -1) {
    index = lFrame.bindingRootIndex = lFrame.tView.bindingStartIndex;
  }
  return index;
}
function getBindingIndex() {
  return instructionState.lFrame.bindingIndex;
}
function setBindingIndex(value) {
  return instructionState.lFrame.bindingIndex = value;
}
function nextBindingIndex() {
  return instructionState.lFrame.bindingIndex++;
}
function incrementBindingIndex(count) {
  const lFrame = instructionState.lFrame;
  const index = lFrame.bindingIndex;
  lFrame.bindingIndex = lFrame.bindingIndex + count;
  return index;
}
function isInI18nBlock() {
  return instructionState.lFrame.inI18n;
}
function setInI18nBlock(isInI18nBlock2) {
  instructionState.lFrame.inI18n = isInI18nBlock2;
}
function setBindingRootForHostBindings(bindingRootIndex, currentDirectiveIndex) {
  const lFrame = instructionState.lFrame;
  lFrame.bindingIndex = lFrame.bindingRootIndex = bindingRootIndex;
  setCurrentDirectiveIndex(currentDirectiveIndex);
}
function getCurrentDirectiveIndex() {
  return instructionState.lFrame.currentDirectiveIndex;
}
function setCurrentDirectiveIndex(currentDirectiveIndex) {
  instructionState.lFrame.currentDirectiveIndex = currentDirectiveIndex;
}
function getCurrentDirectiveDef(tData) {
  const currentDirectiveIndex = instructionState.lFrame.currentDirectiveIndex;
  return currentDirectiveIndex === -1 ? null : tData[currentDirectiveIndex];
}
function getCurrentQueryIndex() {
  return instructionState.lFrame.currentQueryIndex;
}
function setCurrentQueryIndex(value) {
  instructionState.lFrame.currentQueryIndex = value;
}
function getDeclarationTNode(lView) {
  const tView = lView[TVIEW];
  if (tView.type === 2) {
    ngDevMode && assertDefined(tView.declTNode, "Embedded TNodes should have declaration parents.");
    return tView.declTNode;
  }
  if (tView.type === 1) {
    return lView[T_HOST];
  }
  return null;
}
function enterDI(lView, tNode, flags) {
  ngDevMode && assertLViewOrUndefined(lView);
  if (flags & InjectFlags.SkipSelf) {
    ngDevMode && assertTNodeForTView(tNode, lView[TVIEW]);
    let parentTNode = tNode;
    let parentLView = lView;
    while (true) {
      ngDevMode && assertDefined(parentTNode, "Parent TNode should be defined");
      parentTNode = parentTNode.parent;
      if (parentTNode === null && !(flags & InjectFlags.Host)) {
        parentTNode = getDeclarationTNode(parentLView);
        if (parentTNode === null)
          break;
        ngDevMode && assertDefined(parentLView, "Parent LView should be defined");
        parentLView = parentLView[DECLARATION_VIEW];
        if (parentTNode.type & (2 | 8)) {
          break;
        }
      } else {
        break;
      }
    }
    if (parentTNode === null) {
      return false;
    } else {
      tNode = parentTNode;
      lView = parentLView;
    }
  }
  ngDevMode && assertTNodeForLView(tNode, lView);
  const lFrame = instructionState.lFrame = allocLFrame();
  lFrame.currentTNode = tNode;
  lFrame.lView = lView;
  return true;
}
function enterView(newView) {
  ngDevMode && assertNotEqual(newView[0], newView[1], "????");
  ngDevMode && assertLViewOrUndefined(newView);
  const newLFrame = allocLFrame();
  if (ngDevMode) {
    assertEqual(newLFrame.isParent, true, "Expected clean LFrame");
    assertEqual(newLFrame.lView, null, "Expected clean LFrame");
    assertEqual(newLFrame.tView, null, "Expected clean LFrame");
    assertEqual(newLFrame.selectedIndex, -1, "Expected clean LFrame");
    assertEqual(newLFrame.elementDepthCount, 0, "Expected clean LFrame");
    assertEqual(newLFrame.currentDirectiveIndex, -1, "Expected clean LFrame");
    assertEqual(newLFrame.currentNamespace, null, "Expected clean LFrame");
    assertEqual(newLFrame.bindingRootIndex, -1, "Expected clean LFrame");
    assertEqual(newLFrame.currentQueryIndex, 0, "Expected clean LFrame");
  }
  const tView = newView[TVIEW];
  instructionState.lFrame = newLFrame;
  ngDevMode && tView.firstChild && assertTNodeForTView(tView.firstChild, tView);
  newLFrame.currentTNode = tView.firstChild;
  newLFrame.lView = newView;
  newLFrame.tView = tView;
  newLFrame.contextLView = newView;
  newLFrame.bindingIndex = tView.bindingStartIndex;
  newLFrame.inI18n = false;
}
function allocLFrame() {
  const currentLFrame = instructionState.lFrame;
  const childLFrame = currentLFrame === null ? null : currentLFrame.child;
  const newLFrame = childLFrame === null ? createLFrame(currentLFrame) : childLFrame;
  return newLFrame;
}
function createLFrame(parent) {
  const lFrame = {
    currentTNode: null,
    isParent: true,
    lView: null,
    tView: null,
    selectedIndex: -1,
    contextLView: null,
    elementDepthCount: 0,
    currentNamespace: null,
    currentDirectiveIndex: -1,
    bindingRootIndex: -1,
    bindingIndex: -1,
    currentQueryIndex: 0,
    parent,
    child: null,
    inI18n: false
  };
  parent !== null && (parent.child = lFrame);
  return lFrame;
}
function leaveViewLight() {
  const oldLFrame = instructionState.lFrame;
  instructionState.lFrame = oldLFrame.parent;
  oldLFrame.currentTNode = null;
  oldLFrame.lView = null;
  return oldLFrame;
}
var leaveDI = leaveViewLight;
function leaveView() {
  const oldLFrame = leaveViewLight();
  oldLFrame.isParent = true;
  oldLFrame.tView = null;
  oldLFrame.selectedIndex = -1;
  oldLFrame.contextLView = null;
  oldLFrame.elementDepthCount = 0;
  oldLFrame.currentDirectiveIndex = -1;
  oldLFrame.currentNamespace = null;
  oldLFrame.bindingRootIndex = -1;
  oldLFrame.bindingIndex = -1;
  oldLFrame.currentQueryIndex = 0;
}
function nextContextImpl(level) {
  const contextLView = instructionState.lFrame.contextLView = walkUpViews(level, instructionState.lFrame.contextLView);
  return contextLView[CONTEXT];
}
function walkUpViews(nestingLevel, currentView) {
  while (nestingLevel > 0) {
    ngDevMode && assertDefined(currentView[DECLARATION_VIEW], "Declaration view should be defined if nesting level is greater than 0.");
    currentView = currentView[DECLARATION_VIEW];
    nestingLevel--;
  }
  return currentView;
}
function getSelectedIndex() {
  return instructionState.lFrame.selectedIndex;
}
function setSelectedIndex(index) {
  ngDevMode && index !== -1 && assertGreaterThanOrEqual(index, HEADER_OFFSET, "Index must be past HEADER_OFFSET (or -1).");
  ngDevMode && assertLessThan(index, instructionState.lFrame.lView.length, "Can't set index passed end of LView");
  instructionState.lFrame.selectedIndex = index;
}
function getSelectedTNode() {
  const lFrame = instructionState.lFrame;
  return getTNode(lFrame.tView, lFrame.selectedIndex);
}
function \u0275\u0275namespaceSVG() {
  instructionState.lFrame.currentNamespace = SVG_NAMESPACE;
}
function \u0275\u0275namespaceMathML() {
  instructionState.lFrame.currentNamespace = MATH_ML_NAMESPACE;
}
function \u0275\u0275namespaceHTML() {
  namespaceHTMLInternal();
}
function namespaceHTMLInternal() {
  instructionState.lFrame.currentNamespace = null;
}
function getNamespace$1() {
  return instructionState.lFrame.currentNamespace;
}
var _wasLastNodeCreated = true;
function wasLastNodeCreated() {
  return _wasLastNodeCreated;
}
function lastNodeWasCreated(flag) {
  _wasLastNodeCreated = flag;
}
function registerPreOrderHooks(directiveIndex, directiveDef, tView) {
  var _a2, _b, _c, _d, _e;
  ngDevMode && assertFirstCreatePass(tView);
  const { ngOnChanges, ngOnInit, ngDoCheck } = directiveDef.type.prototype;
  if (ngOnChanges) {
    const wrappedOnChanges = NgOnChangesFeatureImpl(directiveDef);
    ((_a2 = tView.preOrderHooks) != null ? _a2 : tView.preOrderHooks = []).push(directiveIndex, wrappedOnChanges);
    ((_b = tView.preOrderCheckHooks) != null ? _b : tView.preOrderCheckHooks = []).push(directiveIndex, wrappedOnChanges);
  }
  if (ngOnInit) {
    ((_c = tView.preOrderHooks) != null ? _c : tView.preOrderHooks = []).push(0 - directiveIndex, ngOnInit);
  }
  if (ngDoCheck) {
    ((_d = tView.preOrderHooks) != null ? _d : tView.preOrderHooks = []).push(directiveIndex, ngDoCheck);
    ((_e = tView.preOrderCheckHooks) != null ? _e : tView.preOrderCheckHooks = []).push(directiveIndex, ngDoCheck);
  }
}
function registerPostOrderHooks(tView, tNode) {
  var _a2, _b, _c, _d, _e, _f, _g;
  ngDevMode && assertFirstCreatePass(tView);
  for (let i = tNode.directiveStart, end = tNode.directiveEnd; i < end; i++) {
    const directiveDef = tView.data[i];
    ngDevMode && assertDefined(directiveDef, "Expecting DirectiveDef");
    const lifecycleHooks = directiveDef.type.prototype;
    const { ngAfterContentInit, ngAfterContentChecked, ngAfterViewInit, ngAfterViewChecked, ngOnDestroy } = lifecycleHooks;
    if (ngAfterContentInit) {
      ((_a2 = tView.contentHooks) != null ? _a2 : tView.contentHooks = []).push(-i, ngAfterContentInit);
    }
    if (ngAfterContentChecked) {
      ((_b = tView.contentHooks) != null ? _b : tView.contentHooks = []).push(i, ngAfterContentChecked);
      ((_c = tView.contentCheckHooks) != null ? _c : tView.contentCheckHooks = []).push(i, ngAfterContentChecked);
    }
    if (ngAfterViewInit) {
      ((_d = tView.viewHooks) != null ? _d : tView.viewHooks = []).push(-i, ngAfterViewInit);
    }
    if (ngAfterViewChecked) {
      ((_e = tView.viewHooks) != null ? _e : tView.viewHooks = []).push(i, ngAfterViewChecked);
      ((_f = tView.viewCheckHooks) != null ? _f : tView.viewCheckHooks = []).push(i, ngAfterViewChecked);
    }
    if (ngOnDestroy != null) {
      ((_g = tView.destroyHooks) != null ? _g : tView.destroyHooks = []).push(i, ngOnDestroy);
    }
  }
}
function executeCheckHooks(lView, hooks, nodeIndex) {
  callHooks(lView, hooks, 3, nodeIndex);
}
function executeInitAndCheckHooks(lView, hooks, initPhase, nodeIndex) {
  ngDevMode && assertNotEqual(initPhase, 3, "Init pre-order hooks should not be called more than once");
  if ((lView[FLAGS] & 3) === initPhase) {
    callHooks(lView, hooks, initPhase, nodeIndex);
  }
}
function incrementInitPhaseFlags(lView, initPhase) {
  ngDevMode && assertNotEqual(initPhase, 3, "Init hooks phase should not be incremented after all init hooks have been run.");
  let flags = lView[FLAGS];
  if ((flags & 3) === initPhase) {
    flags &= 8191;
    flags += 1;
    lView[FLAGS] = flags;
  }
}
function callHooks(currentView, arr, initPhase, currentNodeIndex) {
  ngDevMode && assertEqual(isInCheckNoChangesMode(), false, "Hooks should never be run when in check no changes mode.");
  const startIndex = currentNodeIndex !== void 0 ? currentView[PREORDER_HOOK_FLAGS] & 65535 : 0;
  const nodeIndexLimit = currentNodeIndex != null ? currentNodeIndex : -1;
  const max = arr.length - 1;
  let lastNodeIndexFound = 0;
  for (let i = startIndex; i < max; i++) {
    const hook = arr[i + 1];
    if (typeof hook === "number") {
      lastNodeIndexFound = arr[i];
      if (currentNodeIndex != null && lastNodeIndexFound >= currentNodeIndex) {
        break;
      }
    } else {
      const isInitHook = arr[i] < 0;
      if (isInitHook) {
        currentView[PREORDER_HOOK_FLAGS] += 65536;
      }
      if (lastNodeIndexFound < nodeIndexLimit || nodeIndexLimit == -1) {
        callHook(currentView, initPhase, arr, i);
        currentView[PREORDER_HOOK_FLAGS] = (currentView[PREORDER_HOOK_FLAGS] & 4294901760) + i + 2;
      }
      i++;
    }
  }
}
function callHookInternal(directive, hook) {
  profiler(4, directive, hook);
  const prevConsumer = setActiveConsumer(null);
  try {
    hook.call(directive);
  } finally {
    setActiveConsumer(prevConsumer);
    profiler(5, directive, hook);
  }
}
function callHook(currentView, initPhase, arr, i) {
  const isInitHook = arr[i] < 0;
  const hook = arr[i + 1];
  const directiveIndex = isInitHook ? -arr[i] : arr[i];
  const directive = currentView[directiveIndex];
  if (isInitHook) {
    const indexWithintInitPhase = currentView[FLAGS] >> 13;
    if (indexWithintInitPhase < currentView[PREORDER_HOOK_FLAGS] >> 16 && (currentView[FLAGS] & 3) === initPhase) {
      currentView[FLAGS] += 8192;
      callHookInternal(directive, hook);
    }
  } else {
    callHookInternal(directive, hook);
  }
}
var NO_PARENT_INJECTOR = -1;
var NodeInjectorFactory = class {
  constructor(factory, isViewProvider, injectImplementation) {
    this.factory = factory;
    this.resolving = false;
    ngDevMode && assertDefined(factory, "Factory not specified");
    ngDevMode && assertEqual(typeof factory, "function", "Expected factory function.");
    this.canSeeViewProviders = isViewProvider;
    this.injectImpl = injectImplementation;
  }
};
function isFactory(obj) {
  return obj instanceof NodeInjectorFactory;
}
function toTNodeTypeAsString(tNodeType) {
  let text = "";
  tNodeType & 1 && (text += "|Text");
  tNodeType & 2 && (text += "|Element");
  tNodeType & 4 && (text += "|Container");
  tNodeType & 8 && (text += "|ElementContainer");
  tNodeType & 16 && (text += "|Projection");
  tNodeType & 32 && (text += "|IcuContainer");
  tNodeType & 64 && (text += "|Placeholder");
  return text.length > 0 ? text.substring(1) : text;
}
function hasClassInput(tNode) {
  return (tNode.flags & 8) !== 0;
}
function hasStyleInput(tNode) {
  return (tNode.flags & 16) !== 0;
}
function assertTNodeType(tNode, expectedTypes, message) {
  assertDefined(tNode, "should be called with a TNode");
  if ((tNode.type & expectedTypes) === 0) {
    throwError(message || `Expected [${toTNodeTypeAsString(expectedTypes)}] but got ${toTNodeTypeAsString(tNode.type)}.`);
  }
}
function assertPureTNodeType(type) {
  if (!(type === 2 || //
  type === 1 || //
  type === 4 || //
  type === 8 || //
  type === 32 || //
  type === 16 || //
  type === 64)) {
    throwError(`Expected TNodeType to have only a single type selected, but got ${toTNodeTypeAsString(type)}.`);
  }
}
function hasParentInjector(parentLocation) {
  return parentLocation !== NO_PARENT_INJECTOR;
}
function getParentInjectorIndex(parentLocation) {
  ngDevMode && assertNumber(parentLocation, "Number expected");
  ngDevMode && assertNotEqual(parentLocation, -1, "Not a valid state.");
  const parentInjectorIndex = parentLocation & 32767;
  ngDevMode && assertGreaterThan(parentInjectorIndex, HEADER_OFFSET, "Parent injector must be pointing past HEADER_OFFSET.");
  return parentLocation & 32767;
}
function getParentInjectorViewOffset(parentLocation) {
  return parentLocation >> 16;
}
function getParentInjectorView(location2, startView) {
  let viewOffset = getParentInjectorViewOffset(location2);
  let parentView = startView;
  while (viewOffset > 0) {
    parentView = parentView[DECLARATION_VIEW];
    viewOffset--;
  }
  return parentView;
}
var includeViewProviders = true;
function setIncludeViewProviders(v) {
  const oldValue = includeViewProviders;
  includeViewProviders = v;
  return oldValue;
}
var BLOOM_SIZE = 256;
var BLOOM_MASK = BLOOM_SIZE - 1;
var BLOOM_BUCKET_BITS = 5;
var nextNgElementId = 0;
var NOT_FOUND = {};
function bloomAdd(injectorIndex, tView, type) {
  ngDevMode && assertEqual(tView.firstCreatePass, true, "expected firstCreatePass to be true");
  let id;
  if (typeof type === "string") {
    id = type.charCodeAt(0) || 0;
  } else if (type.hasOwnProperty(NG_ELEMENT_ID)) {
    id = type[NG_ELEMENT_ID];
  }
  if (id == null) {
    id = type[NG_ELEMENT_ID] = nextNgElementId++;
  }
  const bloomHash = id & BLOOM_MASK;
  const mask = 1 << bloomHash;
  tView.data[injectorIndex + (bloomHash >> BLOOM_BUCKET_BITS)] |= mask;
}
function getOrCreateNodeInjectorForNode(tNode, lView) {
  const existingInjectorIndex = getInjectorIndex(tNode, lView);
  if (existingInjectorIndex !== -1) {
    return existingInjectorIndex;
  }
  const tView = lView[TVIEW];
  if (tView.firstCreatePass) {
    tNode.injectorIndex = lView.length;
    insertBloom(tView.data, tNode);
    insertBloom(lView, null);
    insertBloom(tView.blueprint, null);
  }
  const parentLoc = getParentInjectorLocation(tNode, lView);
  const injectorIndex = tNode.injectorIndex;
  if (hasParentInjector(parentLoc)) {
    const parentIndex = getParentInjectorIndex(parentLoc);
    const parentLView = getParentInjectorView(parentLoc, lView);
    const parentData = parentLView[TVIEW].data;
    for (let i = 0; i < 8; i++) {
      lView[injectorIndex + i] = parentLView[parentIndex + i] | parentData[parentIndex + i];
    }
  }
  lView[
    injectorIndex + 8
    /* NodeInjectorOffset.PARENT */
  ] = parentLoc;
  return injectorIndex;
}
function insertBloom(arr, footer) {
  arr.push(0, 0, 0, 0, 0, 0, 0, 0, footer);
}
function getInjectorIndex(tNode, lView) {
  if (tNode.injectorIndex === -1 || // If the injector index is the same as its parent's injector index, then the index has been
  // copied down from the parent node. No injector has been created yet on this node.
  tNode.parent && tNode.parent.injectorIndex === tNode.injectorIndex || // After the first template pass, the injector index might exist but the parent values
  // might not have been calculated yet for this instance
  lView[
    tNode.injectorIndex + 8
    /* NodeInjectorOffset.PARENT */
  ] === null) {
    return -1;
  } else {
    ngDevMode && assertIndexInRange(lView, tNode.injectorIndex);
    return tNode.injectorIndex;
  }
}
function getParentInjectorLocation(tNode, lView) {
  if (tNode.parent && tNode.parent.injectorIndex !== -1) {
    return tNode.parent.injectorIndex;
  }
  let declarationViewOffset = 0;
  let parentTNode = null;
  let lViewCursor = lView;
  while (lViewCursor !== null) {
    parentTNode = getTNodeFromLView(lViewCursor);
    if (parentTNode === null) {
      return NO_PARENT_INJECTOR;
    }
    ngDevMode && parentTNode && assertTNodeForLView(parentTNode, lViewCursor[DECLARATION_VIEW]);
    declarationViewOffset++;
    lViewCursor = lViewCursor[DECLARATION_VIEW];
    if (parentTNode.injectorIndex !== -1) {
      return parentTNode.injectorIndex | declarationViewOffset << 16;
    }
  }
  return NO_PARENT_INJECTOR;
}
function diPublicInInjector(injectorIndex, tView, token) {
  bloomAdd(injectorIndex, tView, token);
}
function injectAttributeImpl(tNode, attrNameToInject) {
  ngDevMode && assertTNodeType(
    tNode,
    12 | 3
    /* TNodeType.AnyRNode */
  );
  ngDevMode && assertDefined(tNode, "expecting tNode");
  if (attrNameToInject === "class") {
    return tNode.classes;
  }
  if (attrNameToInject === "style") {
    return tNode.styles;
  }
  const attrs = tNode.attrs;
  if (attrs) {
    const attrsLength = attrs.length;
    let i = 0;
    while (i < attrsLength) {
      const value = attrs[i];
      if (isNameOnlyAttributeMarker(value))
        break;
      if (value === 0) {
        i = i + 2;
      } else if (typeof value === "number") {
        i++;
        while (i < attrsLength && typeof attrs[i] === "string") {
          i++;
        }
      } else if (value === attrNameToInject) {
        return attrs[i + 1];
      } else {
        i = i + 2;
      }
    }
  }
  return null;
}
function notFoundValueOrThrow(notFoundValue, token, flags) {
  if (flags & InjectFlags.Optional || notFoundValue !== void 0) {
    return notFoundValue;
  } else {
    throwProviderNotFoundError(token, "NodeInjector");
  }
}
function lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue) {
  if (flags & InjectFlags.Optional && notFoundValue === void 0) {
    notFoundValue = null;
  }
  if ((flags & (InjectFlags.Self | InjectFlags.Host)) === 0) {
    const moduleInjector = lView[INJECTOR$1];
    const previousInjectImplementation = setInjectImplementation(void 0);
    try {
      if (moduleInjector) {
        return moduleInjector.get(token, notFoundValue, flags & InjectFlags.Optional);
      } else {
        return injectRootLimpMode(token, notFoundValue, flags & InjectFlags.Optional);
      }
    } finally {
      setInjectImplementation(previousInjectImplementation);
    }
  }
  return notFoundValueOrThrow(notFoundValue, token, flags);
}
function getOrCreateInjectable(tNode, lView, token, flags = InjectFlags.Default, notFoundValue) {
  if (tNode !== null) {
    if (lView[FLAGS] & 2048 && // The token must be present on the current node injector when the `Self`
    // flag is set, so the lookup on embedded view injector(s) can be skipped.
    !(flags & InjectFlags.Self)) {
      const embeddedInjectorValue = lookupTokenUsingEmbeddedInjector(tNode, lView, token, flags, NOT_FOUND);
      if (embeddedInjectorValue !== NOT_FOUND) {
        return embeddedInjectorValue;
      }
    }
    const value = lookupTokenUsingNodeInjector(tNode, lView, token, flags, NOT_FOUND);
    if (value !== NOT_FOUND) {
      return value;
    }
  }
  return lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue);
}
function lookupTokenUsingNodeInjector(tNode, lView, token, flags, notFoundValue) {
  const bloomHash = bloomHashBitOrFactory(token);
  if (typeof bloomHash === "function") {
    if (!enterDI(lView, tNode, flags)) {
      return flags & InjectFlags.Host ? notFoundValueOrThrow(notFoundValue, token, flags) : lookupTokenUsingModuleInjector(lView, token, flags, notFoundValue);
    }
    try {
      const value = bloomHash(flags);
      if (value == null && !(flags & InjectFlags.Optional)) {
        throwProviderNotFoundError(token);
      } else {
        return value;
      }
    } finally {
      leaveDI();
    }
  } else if (typeof bloomHash === "number") {
    let previousTView = null;
    let injectorIndex = getInjectorIndex(tNode, lView);
    let parentLocation = NO_PARENT_INJECTOR;
    let hostTElementNode = flags & InjectFlags.Host ? lView[DECLARATION_COMPONENT_VIEW][T_HOST] : null;
    if (injectorIndex === -1 || flags & InjectFlags.SkipSelf) {
      parentLocation = injectorIndex === -1 ? getParentInjectorLocation(tNode, lView) : lView[
        injectorIndex + 8
        /* NodeInjectorOffset.PARENT */
      ];
      if (parentLocation === NO_PARENT_INJECTOR || !shouldSearchParent(flags, false)) {
        injectorIndex = -1;
      } else {
        previousTView = lView[TVIEW];
        injectorIndex = getParentInjectorIndex(parentLocation);
        lView = getParentInjectorView(parentLocation, lView);
      }
    }
    while (injectorIndex !== -1) {
      ngDevMode && assertNodeInjector(lView, injectorIndex);
      const tView = lView[TVIEW];
      ngDevMode && assertTNodeForLView(tView.data[
        injectorIndex + 8
        /* NodeInjectorOffset.TNODE */
      ], lView);
      if (bloomHasToken(bloomHash, injectorIndex, tView.data)) {
        const instance = searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode);
        if (instance !== NOT_FOUND) {
          return instance;
        }
      }
      parentLocation = lView[
        injectorIndex + 8
        /* NodeInjectorOffset.PARENT */
      ];
      if (parentLocation !== NO_PARENT_INJECTOR && shouldSearchParent(flags, lView[TVIEW].data[
        injectorIndex + 8
        /* NodeInjectorOffset.TNODE */
      ] === hostTElementNode) && bloomHasToken(bloomHash, injectorIndex, lView)) {
        previousTView = tView;
        injectorIndex = getParentInjectorIndex(parentLocation);
        lView = getParentInjectorView(parentLocation, lView);
      } else {
        injectorIndex = -1;
      }
    }
  }
  return notFoundValue;
}
function searchTokensOnInjector(injectorIndex, lView, token, previousTView, flags, hostTElementNode) {
  const currentTView = lView[TVIEW];
  const tNode = currentTView.data[
    injectorIndex + 8
    /* NodeInjectorOffset.TNODE */
  ];
  const canAccessViewProviders = previousTView == null ? (
    // 1) This is the first invocation `previousTView == null` which means that we are at the
    // `TNode` of where injector is starting to look. In such a case the only time we are allowed
    // to look into the ViewProviders is if:
    // - we are on a component
    // - AND the injector set `includeViewProviders` to true (implying that the token can see
    // ViewProviders because it is the Component or a Service which itself was declared in
    // ViewProviders)
    isComponentHost(tNode) && includeViewProviders
  ) : (
    // 2) `previousTView != null` which means that we are now walking across the parent nodes.
    // In such a case we are only allowed to look into the ViewProviders if:
    // - We just crossed from child View to Parent View `previousTView != currentTView`
    // - AND the parent TNode is an Element.
    // This means that we just came from the Component's View and therefore are allowed to see
    // into the ViewProviders.
    previousTView != currentTView && (tNode.type & 3) !== 0
  );
  const isHostSpecialCase = flags & InjectFlags.Host && hostTElementNode === tNode;
  const injectableIdx = locateDirectiveOrProvider(tNode, currentTView, token, canAccessViewProviders, isHostSpecialCase);
  if (injectableIdx !== null) {
    return getNodeInjectable(lView, currentTView, injectableIdx, tNode);
  } else {
    return NOT_FOUND;
  }
}
function locateDirectiveOrProvider(tNode, tView, token, canAccessViewProviders, isHostSpecialCase) {
  const nodeProviderIndexes = tNode.providerIndexes;
  const tInjectables = tView.data;
  const injectablesStart = nodeProviderIndexes & 1048575;
  const directivesStart = tNode.directiveStart;
  const directiveEnd = tNode.directiveEnd;
  const cptViewProvidersCount = nodeProviderIndexes >> 20;
  const startingIndex = canAccessViewProviders ? injectablesStart : injectablesStart + cptViewProvidersCount;
  const endIndex = isHostSpecialCase ? injectablesStart + cptViewProvidersCount : directiveEnd;
  for (let i = startingIndex; i < endIndex; i++) {
    const providerTokenOrDef = tInjectables[i];
    if (i < directivesStart && token === providerTokenOrDef || i >= directivesStart && providerTokenOrDef.type === token) {
      return i;
    }
  }
  if (isHostSpecialCase) {
    const dirDef = tInjectables[directivesStart];
    if (dirDef && isComponentDef(dirDef) && dirDef.type === token) {
      return directivesStart;
    }
  }
  return null;
}
function getNodeInjectable(lView, tView, index, tNode) {
  let value = lView[index];
  const tData = tView.data;
  if (isFactory(value)) {
    const factory = value;
    if (factory.resolving) {
      throwCyclicDependencyError(stringifyForError(tData[index]));
    }
    const previousIncludeViewProviders = setIncludeViewProviders(factory.canSeeViewProviders);
    factory.resolving = true;
    const previousInjectImplementation = factory.injectImpl ? setInjectImplementation(factory.injectImpl) : null;
    const success = enterDI(lView, tNode, InjectFlags.Default);
    ngDevMode && assertEqual(success, true, "Because flags do not contain `SkipSelf' we expect this to always succeed.");
    try {
      value = lView[index] = factory.factory(void 0, tData, lView, tNode);
      if (tView.firstCreatePass && index >= tNode.directiveStart) {
        ngDevMode && assertDirectiveDef(tData[index]);
        registerPreOrderHooks(index, tData[index], tView);
      }
    } finally {
      previousInjectImplementation !== null && setInjectImplementation(previousInjectImplementation);
      setIncludeViewProviders(previousIncludeViewProviders);
      factory.resolving = false;
      leaveDI();
    }
  }
  return value;
}
function bloomHashBitOrFactory(token) {
  ngDevMode && assertDefined(token, "token must be defined");
  if (typeof token === "string") {
    return token.charCodeAt(0) || 0;
  }
  const tokenId = (
    // First check with `hasOwnProperty` so we don't get an inherited ID.
    token.hasOwnProperty(NG_ELEMENT_ID) ? token[NG_ELEMENT_ID] : void 0
  );
  if (typeof tokenId === "number") {
    if (tokenId >= 0) {
      return tokenId & BLOOM_MASK;
    } else {
      ngDevMode && assertEqual(tokenId, -1, "Expecting to get Special Injector Id");
      return createNodeInjector;
    }
  } else {
    return tokenId;
  }
}
function bloomHasToken(bloomHash, injectorIndex, injectorView) {
  const mask = 1 << bloomHash;
  const value = injectorView[injectorIndex + (bloomHash >> BLOOM_BUCKET_BITS)];
  return !!(value & mask);
}
function shouldSearchParent(flags, isFirstHostTNode) {
  return !(flags & InjectFlags.Self) && !(flags & InjectFlags.Host && isFirstHostTNode);
}
var NodeInjector = class {
  constructor(_tNode, _lView) {
    this._tNode = _tNode;
    this._lView = _lView;
  }
  get(token, notFoundValue, flags) {
    return getOrCreateInjectable(this._tNode, this._lView, token, convertToBitFlags(flags), notFoundValue);
  }
};
function createNodeInjector() {
  return new NodeInjector(getCurrentTNode(), getLView());
}
function \u0275\u0275getInheritedFactory(type) {
  return noSideEffects(() => {
    const ownConstructor = type.prototype.constructor;
    const ownFactory = ownConstructor[NG_FACTORY_DEF] || getFactoryOf(ownConstructor);
    const objectPrototype = Object.prototype;
    let parent = Object.getPrototypeOf(type.prototype).constructor;
    while (parent && parent !== objectPrototype) {
      const factory = parent[NG_FACTORY_DEF] || getFactoryOf(parent);
      if (factory && factory !== ownFactory) {
        return factory;
      }
      parent = Object.getPrototypeOf(parent);
    }
    return (t) => new t();
  });
}
function getFactoryOf(type) {
  if (isForwardRef(type)) {
    return () => {
      const factory = getFactoryOf(resolveForwardRef(type));
      return factory && factory();
    };
  }
  return getFactoryDef(type);
}
function lookupTokenUsingEmbeddedInjector(tNode, lView, token, flags, notFoundValue) {
  let currentTNode = tNode;
  let currentLView = lView;
  while (currentTNode !== null && currentLView !== null && currentLView[FLAGS] & 2048 && !(currentLView[FLAGS] & 512)) {
    ngDevMode && assertTNodeForLView(currentTNode, currentLView);
    const nodeInjectorValue = lookupTokenUsingNodeInjector(currentTNode, currentLView, token, flags | InjectFlags.Self, NOT_FOUND);
    if (nodeInjectorValue !== NOT_FOUND) {
      return nodeInjectorValue;
    }
    let parentTNode = currentTNode.parent;
    if (!parentTNode) {
      const embeddedViewInjector = currentLView[EMBEDDED_VIEW_INJECTOR];
      if (embeddedViewInjector) {
        const embeddedViewInjectorValue = embeddedViewInjector.get(token, NOT_FOUND, flags);
        if (embeddedViewInjectorValue !== NOT_FOUND) {
          return embeddedViewInjectorValue;
        }
      }
      parentTNode = getTNodeFromLView(currentLView);
      currentLView = currentLView[DECLARATION_VIEW];
    }
    currentTNode = parentTNode;
  }
  return notFoundValue;
}
function getTNodeFromLView(lView) {
  const tView = lView[TVIEW];
  const tViewType = tView.type;
  if (tViewType === 2) {
    ngDevMode && assertDefined(tView.declTNode, "Embedded TNodes should have declaration parents.");
    return tView.declTNode;
  } else if (tViewType === 1) {
    return lView[T_HOST];
  }
  return null;
}
function \u0275\u0275injectAttribute(attrNameToInject) {
  return injectAttributeImpl(getCurrentTNode(), attrNameToInject);
}
var ANNOTATIONS = "__annotations__";
var PARAMETERS = "__parameters__";
var PROP_METADATA = "__prop__metadata__";
function makeDecorator(name, props, parentClass, additionalProcessing, typeFn) {
  return noSideEffects(() => {
    const metaCtor = makeMetadataCtor(props);
    function DecoratorFactory(...args) {
      if (this instanceof DecoratorFactory) {
        metaCtor.call(this, ...args);
        return this;
      }
      const annotationInstance = new DecoratorFactory(...args);
      return function TypeDecorator(cls) {
        if (typeFn)
          typeFn(cls, ...args);
        const annotations = cls.hasOwnProperty(ANNOTATIONS) ? cls[ANNOTATIONS] : Object.defineProperty(cls, ANNOTATIONS, { value: [] })[ANNOTATIONS];
        annotations.push(annotationInstance);
        if (additionalProcessing)
          additionalProcessing(cls);
        return cls;
      };
    }
    if (parentClass) {
      DecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    DecoratorFactory.prototype.ngMetadataName = name;
    DecoratorFactory.annotationCls = DecoratorFactory;
    return DecoratorFactory;
  });
}
function makeMetadataCtor(props) {
  return function ctor(...args) {
    if (props) {
      const values = props(...args);
      for (const propName in values) {
        this[propName] = values[propName];
      }
    }
  };
}
function makeParamDecorator(name, props, parentClass) {
  return noSideEffects(() => {
    const metaCtor = makeMetadataCtor(props);
    function ParamDecoratorFactory(...args) {
      if (this instanceof ParamDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      const annotationInstance = new ParamDecoratorFactory(...args);
      ParamDecorator.annotation = annotationInstance;
      return ParamDecorator;
      function ParamDecorator(cls, unusedKey, index) {
        const parameters = cls.hasOwnProperty(PARAMETERS) ? cls[PARAMETERS] : Object.defineProperty(cls, PARAMETERS, { value: [] })[PARAMETERS];
        while (parameters.length <= index) {
          parameters.push(null);
        }
        (parameters[index] = parameters[index] || []).push(annotationInstance);
        return cls;
      }
    }
    if (parentClass) {
      ParamDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    ParamDecoratorFactory.prototype.ngMetadataName = name;
    ParamDecoratorFactory.annotationCls = ParamDecoratorFactory;
    return ParamDecoratorFactory;
  });
}
function makePropDecorator(name, props, parentClass, additionalProcessing) {
  return noSideEffects(() => {
    const metaCtor = makeMetadataCtor(props);
    function PropDecoratorFactory(...args) {
      if (this instanceof PropDecoratorFactory) {
        metaCtor.apply(this, args);
        return this;
      }
      const decoratorInstance = new PropDecoratorFactory(...args);
      function PropDecorator(target, name2) {
        if (target === void 0) {
          throw new Error("Standard Angular field decorators are not supported in JIT mode.");
        }
        const constructor = target.constructor;
        const meta = constructor.hasOwnProperty(PROP_METADATA) ? constructor[PROP_METADATA] : Object.defineProperty(constructor, PROP_METADATA, { value: {} })[PROP_METADATA];
        meta[name2] = meta.hasOwnProperty(name2) && meta[name2] || [];
        meta[name2].unshift(decoratorInstance);
        if (additionalProcessing)
          additionalProcessing(target, name2, ...args);
      }
      return PropDecorator;
    }
    if (parentClass) {
      PropDecoratorFactory.prototype = Object.create(parentClass.prototype);
    }
    PropDecoratorFactory.prototype.ngMetadataName = name;
    PropDecoratorFactory.annotationCls = PropDecoratorFactory;
    return PropDecoratorFactory;
  });
}
var Attribute = makeParamDecorator("Attribute", (attributeName) => ({ attributeName, __NG_ELEMENT_ID__: () => \u0275\u0275injectAttribute(attributeName) }));
var emitDistinctChangesOnlyDefaultValue = true;
var Query = class {
};
var ContentChildren = makePropDecorator("ContentChildren", (selector, data = {}) => __spreadValues({
  selector,
  first: false,
  isViewQuery: false,
  descendants: false,
  emitDistinctChangesOnly: emitDistinctChangesOnlyDefaultValue
}, data), Query);
var ContentChild = makePropDecorator("ContentChild", (selector, data = {}) => __spreadValues({ selector, first: true, isViewQuery: false, descendants: true }, data), Query);
var ViewChildren = makePropDecorator("ViewChildren", (selector, data = {}) => __spreadValues({
  selector,
  first: false,
  isViewQuery: true,
  descendants: true,
  emitDistinctChangesOnly: emitDistinctChangesOnlyDefaultValue
}, data), Query);
var ViewChild = makePropDecorator("ViewChild", (selector, data) => __spreadValues({ selector, first: true, isViewQuery: true, descendants: true }, data), Query);
var FactoryTarget;
(function(FactoryTarget2) {
  FactoryTarget2[FactoryTarget2["Directive"] = 0] = "Directive";
  FactoryTarget2[FactoryTarget2["Component"] = 1] = "Component";
  FactoryTarget2[FactoryTarget2["Injectable"] = 2] = "Injectable";
  FactoryTarget2[FactoryTarget2["Pipe"] = 3] = "Pipe";
  FactoryTarget2[FactoryTarget2["NgModule"] = 4] = "NgModule";
})(FactoryTarget || (FactoryTarget = {}));
var R3TemplateDependencyKind;
(function(R3TemplateDependencyKind2) {
  R3TemplateDependencyKind2[R3TemplateDependencyKind2["Directive"] = 0] = "Directive";
  R3TemplateDependencyKind2[R3TemplateDependencyKind2["Pipe"] = 1] = "Pipe";
  R3TemplateDependencyKind2[R3TemplateDependencyKind2["NgModule"] = 2] = "NgModule";
})(R3TemplateDependencyKind || (R3TemplateDependencyKind = {}));
var ViewEncapsulation;
(function(ViewEncapsulation2) {
  ViewEncapsulation2[ViewEncapsulation2["Emulated"] = 0] = "Emulated";
  ViewEncapsulation2[ViewEncapsulation2["None"] = 2] = "None";
  ViewEncapsulation2[ViewEncapsulation2["ShadowDom"] = 3] = "ShadowDom";
})(ViewEncapsulation || (ViewEncapsulation = {}));
function getCompilerFacade(request) {
  const globalNg = _global["ng"];
  if (globalNg && globalNg.\u0275compilerFacade) {
    return globalNg.\u0275compilerFacade;
  }
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    console.error(`JIT compilation failed for ${request.kind}`, request.type);
    let message = `The ${request.kind} '${request.type.name}' needs to be compiled using the JIT compiler, but '@angular/compiler' is not available.

`;
    if (request.usage === 1) {
      message += `The ${request.kind} is part of a library that has been partially compiled.
`;
      message += `However, the Angular Linker has not processed the library such that JIT compilation is used as fallback.
`;
      message += "\n";
      message += `Ideally, the library is processed using the Angular Linker to become fully AOT compiled.
`;
    } else {
      message += `JIT compilation is discouraged for production use-cases! Consider using AOT mode instead.
`;
    }
    message += `Alternatively, the JIT compiler should be loaded by bootstrapping using '@angular/platform-browser-dynamic' or '@angular/platform-server',
`;
    message += `or manually provide the compiler with 'import "@angular/compiler";' before bootstrapping.`;
    throw new Error(message);
  } else {
    throw new Error("JIT compiler unavailable");
  }
}
var Type = Function;
function isType(v) {
  return typeof v === "function";
}
function arrayEquals(a, b, identityAccessor) {
  if (a.length !== b.length)
    return false;
  for (let i = 0; i < a.length; i++) {
    let valueA = a[i];
    let valueB = b[i];
    if (identityAccessor) {
      valueA = identityAccessor(valueA);
      valueB = identityAccessor(valueB);
    }
    if (valueB !== valueA) {
      return false;
    }
  }
  return true;
}
function flatten(list) {
  return list.flat(Number.POSITIVE_INFINITY);
}
function deepForEach(input, fn) {
  input.forEach((value) => Array.isArray(value) ? deepForEach(value, fn) : fn(value));
}
function addToArray(arr, index, value) {
  if (index >= arr.length) {
    arr.push(value);
  } else {
    arr.splice(index, 0, value);
  }
}
function removeFromArray(arr, index) {
  if (index >= arr.length - 1) {
    return arr.pop();
  } else {
    return arr.splice(index, 1)[0];
  }
}
function newArray(size, value) {
  const list = [];
  for (let i = 0; i < size; i++) {
    list.push(value);
  }
  return list;
}
function arrayInsert2(array, index, value1, value2) {
  ngDevMode && assertLessThanOrEqual(index, array.length, "Can't insert past array end.");
  let end = array.length;
  if (end == index) {
    array.push(value1, value2);
  } else if (end === 1) {
    array.push(value2, array[0]);
    array[0] = value1;
  } else {
    end--;
    array.push(array[end - 1], array[end]);
    while (end > index) {
      const previousEnd = end - 2;
      array[end] = array[previousEnd];
      end--;
    }
    array[index] = value1;
    array[index + 1] = value2;
  }
}
function keyValueArraySet(keyValueArray, key, value) {
  let index = keyValueArrayIndexOf(keyValueArray, key);
  if (index >= 0) {
    keyValueArray[index | 1] = value;
  } else {
    index = ~index;
    arrayInsert2(keyValueArray, index, key, value);
  }
  return index;
}
function keyValueArrayGet(keyValueArray, key) {
  const index = keyValueArrayIndexOf(keyValueArray, key);
  if (index >= 0) {
    return keyValueArray[index | 1];
  }
  return void 0;
}
function keyValueArrayIndexOf(keyValueArray, key) {
  return _arrayIndexOfSorted(keyValueArray, key, 1);
}
function _arrayIndexOfSorted(array, value, shift) {
  ngDevMode && assertEqual(Array.isArray(array), true, "Expecting an array");
  let start = 0;
  let end = array.length >> shift;
  while (end !== start) {
    const middle = start + (end - start >> 1);
    const current = array[middle << shift];
    if (value === current) {
      return middle << shift;
    } else if (current > value) {
      end = middle;
    } else {
      start = middle + 1;
    }
  }
  return ~(end << shift);
}
var ES5_DELEGATE_CTOR = /^function\s+\S+\(\)\s*{[\s\S]+\.apply\(this,\s*(arguments|(?:[^()]+\(\[\],)?[^()]+\(arguments\).*)\)/;
var ES2015_INHERITED_CLASS = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{/;
var ES2015_INHERITED_CLASS_WITH_CTOR = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(/;
var ES2015_INHERITED_CLASS_WITH_DELEGATE_CTOR = /^class\s+[A-Za-z\d$_]*\s*extends\s+[^{]+{[\s\S]*constructor\s*\(\)\s*{[^}]*super\(\.\.\.arguments\)/;
function isDelegateCtor(typeStr) {
  return ES5_DELEGATE_CTOR.test(typeStr) || ES2015_INHERITED_CLASS_WITH_DELEGATE_CTOR.test(typeStr) || ES2015_INHERITED_CLASS.test(typeStr) && !ES2015_INHERITED_CLASS_WITH_CTOR.test(typeStr);
}
var ReflectionCapabilities = class {
  constructor(reflect) {
    this._reflect = reflect || _global["Reflect"];
  }
  factory(t) {
    return (...args) => new t(...args);
  }
  /** @internal */
  _zipTypesAndAnnotations(paramTypes, paramAnnotations) {
    let result;
    if (typeof paramTypes === "undefined") {
      result = newArray(paramAnnotations.length);
    } else {
      result = newArray(paramTypes.length);
    }
    for (let i = 0; i < result.length; i++) {
      if (typeof paramTypes === "undefined") {
        result[i] = [];
      } else if (paramTypes[i] && paramTypes[i] != Object) {
        result[i] = [paramTypes[i]];
      } else {
        result[i] = [];
      }
      if (paramAnnotations && paramAnnotations[i] != null) {
        result[i] = result[i].concat(paramAnnotations[i]);
      }
    }
    return result;
  }
  _ownParameters(type, parentCtor) {
    const typeStr = type.toString();
    if (isDelegateCtor(typeStr)) {
      return null;
    }
    if (type.parameters && type.parameters !== parentCtor.parameters) {
      return type.parameters;
    }
    const tsickleCtorParams = type.ctorParameters;
    if (tsickleCtorParams && tsickleCtorParams !== parentCtor.ctorParameters) {
      const ctorParameters = typeof tsickleCtorParams === "function" ? tsickleCtorParams() : tsickleCtorParams;
      const paramTypes2 = ctorParameters.map((ctorParam) => ctorParam && ctorParam.type);
      const paramAnnotations2 = ctorParameters.map((ctorParam) => ctorParam && convertTsickleDecoratorIntoMetadata(ctorParam.decorators));
      return this._zipTypesAndAnnotations(paramTypes2, paramAnnotations2);
    }
    const paramAnnotations = type.hasOwnProperty(PARAMETERS) && type[PARAMETERS];
    const paramTypes = this._reflect && this._reflect.getOwnMetadata && this._reflect.getOwnMetadata("design:paramtypes", type);
    if (paramTypes || paramAnnotations) {
      return this._zipTypesAndAnnotations(paramTypes, paramAnnotations);
    }
    return newArray(type.length);
  }
  parameters(type) {
    if (!isType(type)) {
      return [];
    }
    const parentCtor = getParentCtor(type);
    let parameters = this._ownParameters(type, parentCtor);
    if (!parameters && parentCtor !== Object) {
      parameters = this.parameters(parentCtor);
    }
    return parameters || [];
  }
  _ownAnnotations(typeOrFunc, parentCtor) {
    if (typeOrFunc.annotations && typeOrFunc.annotations !== parentCtor.annotations) {
      let annotations = typeOrFunc.annotations;
      if (typeof annotations === "function" && annotations.annotations) {
        annotations = annotations.annotations;
      }
      return annotations;
    }
    if (typeOrFunc.decorators && typeOrFunc.decorators !== parentCtor.decorators) {
      return convertTsickleDecoratorIntoMetadata(typeOrFunc.decorators);
    }
    if (typeOrFunc.hasOwnProperty(ANNOTATIONS)) {
      return typeOrFunc[ANNOTATIONS];
    }
    return null;
  }
  annotations(typeOrFunc) {
    if (!isType(typeOrFunc)) {
      return [];
    }
    const parentCtor = getParentCtor(typeOrFunc);
    const ownAnnotations = this._ownAnnotations(typeOrFunc, parentCtor) || [];
    const parentAnnotations = parentCtor !== Object ? this.annotations(parentCtor) : [];
    return parentAnnotations.concat(ownAnnotations);
  }
  _ownPropMetadata(typeOrFunc, parentCtor) {
    if (typeOrFunc.propMetadata && typeOrFunc.propMetadata !== parentCtor.propMetadata) {
      let propMetadata = typeOrFunc.propMetadata;
      if (typeof propMetadata === "function" && propMetadata.propMetadata) {
        propMetadata = propMetadata.propMetadata;
      }
      return propMetadata;
    }
    if (typeOrFunc.propDecorators && typeOrFunc.propDecorators !== parentCtor.propDecorators) {
      const propDecorators = typeOrFunc.propDecorators;
      const propMetadata = {};
      Object.keys(propDecorators).forEach((prop) => {
        propMetadata[prop] = convertTsickleDecoratorIntoMetadata(propDecorators[prop]);
      });
      return propMetadata;
    }
    if (typeOrFunc.hasOwnProperty(PROP_METADATA)) {
      return typeOrFunc[PROP_METADATA];
    }
    return null;
  }
  propMetadata(typeOrFunc) {
    if (!isType(typeOrFunc)) {
      return {};
    }
    const parentCtor = getParentCtor(typeOrFunc);
    const propMetadata = {};
    if (parentCtor !== Object) {
      const parentPropMetadata = this.propMetadata(parentCtor);
      Object.keys(parentPropMetadata).forEach((propName) => {
        propMetadata[propName] = parentPropMetadata[propName];
      });
    }
    const ownPropMetadata = this._ownPropMetadata(typeOrFunc, parentCtor);
    if (ownPropMetadata) {
      Object.keys(ownPropMetadata).forEach((propName) => {
        const decorators = [];
        if (propMetadata.hasOwnProperty(propName)) {
          decorators.push(...propMetadata[propName]);
        }
        decorators.push(...ownPropMetadata[propName]);
        propMetadata[propName] = decorators;
      });
    }
    return propMetadata;
  }
  ownPropMetadata(typeOrFunc) {
    if (!isType(typeOrFunc)) {
      return {};
    }
    return this._ownPropMetadata(typeOrFunc, getParentCtor(typeOrFunc)) || {};
  }
  hasLifecycleHook(type, lcProperty) {
    return type instanceof Type && lcProperty in type.prototype;
  }
};
function convertTsickleDecoratorIntoMetadata(decoratorInvocations) {
  if (!decoratorInvocations) {
    return [];
  }
  return decoratorInvocations.map((decoratorInvocation) => {
    const decoratorType = decoratorInvocation.type;
    const annotationCls = decoratorType.annotationCls;
    const annotationArgs = decoratorInvocation.args ? decoratorInvocation.args : [];
    return new annotationCls(...annotationArgs);
  });
}
function getParentCtor(ctor) {
  const parentProto = ctor.prototype ? Object.getPrototypeOf(ctor.prototype) : null;
  const parentCtor = parentProto ? parentProto.constructor : null;
  return parentCtor || Object;
}
var Inject = attachInjectFlag(
  // Disable tslint because `DecoratorFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  makeParamDecorator("Inject", (token) => ({ token })),
  -1
  /* DecoratorFlags.Inject */
);
var Optional = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  attachInjectFlag(
    makeParamDecorator("Optional"),
    8
    /* InternalInjectFlags.Optional */
  )
);
var Self = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  attachInjectFlag(
    makeParamDecorator("Self"),
    2
    /* InternalInjectFlags.Self */
  )
);
var SkipSelf = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  attachInjectFlag(
    makeParamDecorator("SkipSelf"),
    4
    /* InternalInjectFlags.SkipSelf */
  )
);
var Host = (
  // Disable tslint because `InternalInjectFlags` is a const enum which gets inlined.
  // tslint:disable-next-line: no-toplevel-property-access
  attachInjectFlag(
    makeParamDecorator("Host"),
    1
    /* InternalInjectFlags.Host */
  )
);
var _reflect = null;
function getReflect() {
  return _reflect = _reflect || new ReflectionCapabilities();
}
function reflectDependencies(type) {
  return convertDependencies(getReflect().parameters(type));
}
function convertDependencies(deps) {
  return deps.map((dep) => reflectDependency(dep));
}
function reflectDependency(dep) {
  const meta = {
    token: null,
    attribute: null,
    host: false,
    optional: false,
    self: false,
    skipSelf: false
  };
  if (Array.isArray(dep) && dep.length > 0) {
    for (let j = 0; j < dep.length; j++) {
      const param = dep[j];
      if (param === void 0) {
        continue;
      }
      const proto = Object.getPrototypeOf(param);
      if (param instanceof Optional || proto.ngMetadataName === "Optional") {
        meta.optional = true;
      } else if (param instanceof SkipSelf || proto.ngMetadataName === "SkipSelf") {
        meta.skipSelf = true;
      } else if (param instanceof Self || proto.ngMetadataName === "Self") {
        meta.self = true;
      } else if (param instanceof Host || proto.ngMetadataName === "Host") {
        meta.host = true;
      } else if (param instanceof Inject) {
        meta.token = param.token;
      } else if (param instanceof Attribute) {
        if (param.attributeName === void 0) {
          throw new RuntimeError(204, ngDevMode && `Attribute name must be defined.`);
        }
        meta.attribute = param.attributeName;
      } else {
        meta.token = param;
      }
    }
  } else if (dep === void 0 || Array.isArray(dep) && dep.length === 0) {
    meta.token = null;
  } else {
    meta.token = dep;
  }
  return meta;
}
function resolveComponentResources(resourceResolver) {
  const componentResolved = [];
  const urlMap = /* @__PURE__ */ new Map();
  function cachedResourceResolve(url) {
    let promise2 = urlMap.get(url);
    if (!promise2) {
      const resp = resourceResolver(url);
      urlMap.set(url, promise2 = resp.then(unwrapResponse));
    }
    return promise2;
  }
  componentResourceResolutionQueue.forEach((component, type) => {
    const promises = [];
    if (component.templateUrl) {
      promises.push(cachedResourceResolve(component.templateUrl).then((template) => {
        component.template = template;
      }));
    }
    const styleUrls = component.styleUrls;
    const styles = component.styles || (component.styles = []);
    const styleOffset = component.styles.length;
    styleUrls && styleUrls.forEach((styleUrl, index) => {
      styles.push("");
      promises.push(cachedResourceResolve(styleUrl).then((style) => {
        styles[styleOffset + index] = style;
        styleUrls.splice(styleUrls.indexOf(styleUrl), 1);
        if (styleUrls.length == 0) {
          component.styleUrls = void 0;
        }
      }));
    });
    const fullyResolved = Promise.all(promises).then(() => componentDefResolved(type));
    componentResolved.push(fullyResolved);
  });
  clearResolutionOfComponentResourcesQueue();
  return Promise.all(componentResolved).then(() => void 0);
}
var componentResourceResolutionQueue = /* @__PURE__ */ new Map();
var componentDefPendingResolution = /* @__PURE__ */ new Set();
function maybeQueueResolutionOfComponentResources(type, metadata) {
  if (componentNeedsResolution(metadata)) {
    componentResourceResolutionQueue.set(type, metadata);
    componentDefPendingResolution.add(type);
  }
}
function componentNeedsResolution(component) {
  return !!(component.templateUrl && !component.hasOwnProperty("template") || component.styleUrls && component.styleUrls.length);
}
function clearResolutionOfComponentResourcesQueue() {
  const old = componentResourceResolutionQueue;
  componentResourceResolutionQueue = /* @__PURE__ */ new Map();
  return old;
}
function isComponentResourceResolutionQueueEmpty() {
  return componentResourceResolutionQueue.size === 0;
}
function unwrapResponse(response) {
  return typeof response == "string" ? response : response.text();
}
function componentDefResolved(type) {
  componentDefPendingResolution.delete(type);
}
var modules = /* @__PURE__ */ new Map();
var checkForDuplicateNgModules = true;
function assertSameOrNotExisting(id, type, incoming) {
  if (type && type !== incoming && checkForDuplicateNgModules) {
    throw new Error(`Duplicate module registered for ${id} - ${stringify(type)} vs ${stringify(type.name)}`);
  }
}
function registerNgModuleType(ngModuleType, id) {
  const existing = modules.get(id) || null;
  assertSameOrNotExisting(id, existing, ngModuleType);
  modules.set(id, ngModuleType);
}
var CUSTOM_ELEMENTS_SCHEMA = {
  name: "custom-elements"
};
var NO_ERRORS_SCHEMA = {
  name: "no-errors-schema"
};
var shouldThrowErrorOnUnknownElement = false;
var shouldThrowErrorOnUnknownProperty = false;
function validateElementIsKnown(element, lView, tagName, schemas, hasDirectives) {
  if (schemas === null)
    return;
  if (!hasDirectives && tagName !== null) {
    const isUnknown = (
      // Note that we can't check for `typeof HTMLUnknownElement === 'function'` because
      // Domino doesn't expose HTMLUnknownElement globally.
      typeof HTMLUnknownElement !== "undefined" && HTMLUnknownElement && element instanceof HTMLUnknownElement || typeof customElements !== "undefined" && tagName.indexOf("-") > -1 && !customElements.get(tagName)
    );
    if (isUnknown && !matchingSchemas(schemas, tagName)) {
      const isHostStandalone = isHostComponentStandalone(lView);
      const templateLocation = getTemplateLocationDetails(lView);
      const schemas2 = `'${isHostStandalone ? "@Component" : "@NgModule"}.schemas'`;
      let message = `'${tagName}' is not a known element${templateLocation}:
`;
      message += `1. If '${tagName}' is an Angular component, then verify that it is ${isHostStandalone ? "included in the '@Component.imports' of this component" : "a part of an @NgModule where this component is declared"}.
`;
      if (tagName && tagName.indexOf("-") > -1) {
        message += `2. If '${tagName}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${schemas2} of this component to suppress this message.`;
      } else {
        message += `2. To allow any element add 'NO_ERRORS_SCHEMA' to the ${schemas2} of this component.`;
      }
      if (shouldThrowErrorOnUnknownElement) {
        throw new RuntimeError(304, message);
      } else {
        console.error(formatRuntimeError(304, message));
      }
    }
  }
}
function isPropertyValid(element, propName, tagName, schemas) {
  if (schemas === null)
    return true;
  if (matchingSchemas(schemas, tagName) || propName in element || isAnimationProp(propName)) {
    return true;
  }
  return typeof Node === "undefined" || Node === null || !(element instanceof Node);
}
function handleUnknownPropertyError(propName, tagName, nodeType, lView) {
  if (!tagName && nodeType === 4) {
    tagName = "ng-template";
  }
  const isHostStandalone = isHostComponentStandalone(lView);
  const templateLocation = getTemplateLocationDetails(lView);
  let message = `Can't bind to '${propName}' since it isn't a known property of '${tagName}'${templateLocation}.`;
  const schemas = `'${isHostStandalone ? "@Component" : "@NgModule"}.schemas'`;
  const importLocation = isHostStandalone ? "included in the '@Component.imports' of this component" : "a part of an @NgModule where this component is declared";
  if (KNOWN_CONTROL_FLOW_DIRECTIVES.has(propName)) {
    const correspondingImport = KNOWN_CONTROL_FLOW_DIRECTIVES.get(propName);
    message += `
If the '${propName}' is an Angular control flow directive, please make sure that either the '${correspondingImport}' directive or the 'CommonModule' is ${importLocation}.`;
  } else {
    message += `
1. If '${tagName}' is an Angular component and it has the '${propName}' input, then verify that it is ${importLocation}.`;
    if (tagName && tagName.indexOf("-") > -1) {
      message += `
2. If '${tagName}' is a Web Component then add 'CUSTOM_ELEMENTS_SCHEMA' to the ${schemas} of this component to suppress this message.`;
      message += `
3. To allow any property add 'NO_ERRORS_SCHEMA' to the ${schemas} of this component.`;
    } else {
      message += `
2. To allow any property add 'NO_ERRORS_SCHEMA' to the ${schemas} of this component.`;
    }
  }
  reportUnknownPropertyError(message);
}
function reportUnknownPropertyError(message) {
  if (shouldThrowErrorOnUnknownProperty) {
    throw new RuntimeError(303, message);
  } else {
    console.error(formatRuntimeError(303, message));
  }
}
function getDeclarationComponentDef(lView) {
  !ngDevMode && throwError("Must never be called in production mode");
  const declarationLView = lView[DECLARATION_COMPONENT_VIEW];
  const context = declarationLView[CONTEXT];
  if (!context)
    return null;
  return context.constructor ? getComponentDef(context.constructor) : null;
}
function isHostComponentStandalone(lView) {
  !ngDevMode && throwError("Must never be called in production mode");
  const componentDef = getDeclarationComponentDef(lView);
  return !!(componentDef == null ? void 0 : componentDef.standalone);
}
function getTemplateLocationDetails(lView) {
  var _a2;
  !ngDevMode && throwError("Must never be called in production mode");
  const hostComponentDef = getDeclarationComponentDef(lView);
  const componentClassName = (_a2 = hostComponentDef == null ? void 0 : hostComponentDef.type) == null ? void 0 : _a2.name;
  return componentClassName ? ` (used in the '${componentClassName}' component template)` : "";
}
var KNOWN_CONTROL_FLOW_DIRECTIVES = /* @__PURE__ */ new Map([
  ["ngIf", "NgIf"],
  ["ngFor", "NgFor"],
  ["ngSwitchCase", "NgSwitchCase"],
  ["ngSwitchDefault", "NgSwitchDefault"]
]);
function matchingSchemas(schemas, tagName) {
  if (schemas !== null) {
    for (let i = 0; i < schemas.length; i++) {
      const schema = schemas[i];
      if (schema === NO_ERRORS_SCHEMA || schema === CUSTOM_ELEMENTS_SCHEMA && tagName && tagName.indexOf("-") > -1) {
        return true;
      }
    }
  }
  return false;
}
function hasInSkipHydrationBlockFlag(tNode) {
  return (tNode.flags & 128) === 128;
}
var RendererStyleFlags2;
(function(RendererStyleFlags22) {
  RendererStyleFlags22[RendererStyleFlags22["Important"] = 1] = "Important";
  RendererStyleFlags22[RendererStyleFlags22["DashCase"] = 2] = "DashCase";
})(RendererStyleFlags2 || (RendererStyleFlags2 = {}));
var COMMENT_DISALLOWED = /^>|^->|<!--|-->|--!>|<!-$/g;
var COMMENT_DELIMITER = /(<|>)/;
var COMMENT_DELIMITER_ESCAPED = "\u200B$1\u200B";
function escapeCommentText(value) {
  return value.replace(COMMENT_DISALLOWED, (text) => text.replace(COMMENT_DELIMITER, COMMENT_DELIMITER_ESCAPED));
}
var TRACKED_LVIEWS = /* @__PURE__ */ new Map();
var uniqueIdCounter = 0;
function getUniqueLViewId() {
  return uniqueIdCounter++;
}
function registerLView(lView) {
  ngDevMode && assertNumber(lView[ID], "LView must have an ID in order to be registered");
  TRACKED_LVIEWS.set(lView[ID], lView);
}
function getLViewById(id) {
  ngDevMode && assertNumber(id, "ID used for LView lookup must be a number");
  return TRACKED_LVIEWS.get(id) || null;
}
function unregisterLView(lView) {
  ngDevMode && assertNumber(lView[ID], "Cannot stop tracking an LView that does not have an ID");
  TRACKED_LVIEWS.delete(lView[ID]);
}
var LContext = class {
  /** Component's parent view data. */
  get lView() {
    return getLViewById(this.lViewId);
  }
  constructor(lViewId, nodeIndex, native) {
    this.lViewId = lViewId;
    this.nodeIndex = nodeIndex;
    this.native = native;
  }
};
function getLContext(target) {
  let mpValue = readPatchedData(target);
  if (mpValue) {
    if (isLView(mpValue)) {
      const lView = mpValue;
      let nodeIndex;
      let component = void 0;
      let directives = void 0;
      if (isComponentInstance(target)) {
        nodeIndex = findViaComponent(lView, target);
        if (nodeIndex == -1) {
          throw new Error("The provided component was not found in the application");
        }
        component = target;
      } else if (isDirectiveInstance(target)) {
        nodeIndex = findViaDirective(lView, target);
        if (nodeIndex == -1) {
          throw new Error("The provided directive was not found in the application");
        }
        directives = getDirectivesAtNodeIndex(nodeIndex, lView);
      } else {
        nodeIndex = findViaNativeElement(lView, target);
        if (nodeIndex == -1) {
          return null;
        }
      }
      const native = unwrapRNode(lView[nodeIndex]);
      const existingCtx = readPatchedData(native);
      const context = existingCtx && !Array.isArray(existingCtx) ? existingCtx : createLContext(lView, nodeIndex, native);
      if (component && context.component === void 0) {
        context.component = component;
        attachPatchData(context.component, context);
      }
      if (directives && context.directives === void 0) {
        context.directives = directives;
        for (let i = 0; i < directives.length; i++) {
          attachPatchData(directives[i], context);
        }
      }
      attachPatchData(context.native, context);
      mpValue = context;
    }
  } else {
    const rElement = target;
    ngDevMode && assertDomNode(rElement);
    let parent = rElement;
    while (parent = parent.parentNode) {
      const parentContext = readPatchedData(parent);
      if (parentContext) {
        const lView = Array.isArray(parentContext) ? parentContext : parentContext.lView;
        if (!lView) {
          return null;
        }
        const index = findViaNativeElement(lView, rElement);
        if (index >= 0) {
          const native = unwrapRNode(lView[index]);
          const context = createLContext(lView, index, native);
          attachPatchData(native, context);
          mpValue = context;
          break;
        }
      }
    }
  }
  return mpValue || null;
}
function createLContext(lView, nodeIndex, native) {
  return new LContext(lView[ID], nodeIndex, native);
}
function getComponentViewByInstance(componentInstance) {
  let patchedData = readPatchedData(componentInstance);
  let lView;
  if (isLView(patchedData)) {
    const contextLView = patchedData;
    const nodeIndex = findViaComponent(contextLView, componentInstance);
    lView = getComponentLViewByIndex(nodeIndex, contextLView);
    const context = createLContext(contextLView, nodeIndex, lView[HOST]);
    context.component = componentInstance;
    attachPatchData(componentInstance, context);
    attachPatchData(context.native, context);
  } else {
    const context = patchedData;
    const contextLView = context.lView;
    ngDevMode && assertLView(contextLView);
    lView = getComponentLViewByIndex(context.nodeIndex, contextLView);
  }
  return lView;
}
var MONKEY_PATCH_KEY_NAME = "__ngContext__";
function attachPatchData(target, data) {
  ngDevMode && assertDefined(target, "Target expected");
  if (isLView(data)) {
    target[MONKEY_PATCH_KEY_NAME] = data[ID];
    registerLView(data);
  } else {
    target[MONKEY_PATCH_KEY_NAME] = data;
  }
}
function readPatchedData(target) {
  ngDevMode && assertDefined(target, "Target expected");
  const data = target[MONKEY_PATCH_KEY_NAME];
  return typeof data === "number" ? getLViewById(data) : data || null;
}
function readPatchedLView(target) {
  const value = readPatchedData(target);
  if (value) {
    return isLView(value) ? value : value.lView;
  }
  return null;
}
function isComponentInstance(instance) {
  return instance && instance.constructor && instance.constructor.\u0275cmp;
}
function isDirectiveInstance(instance) {
  return instance && instance.constructor && instance.constructor.\u0275dir;
}
function findViaNativeElement(lView, target) {
  const tView = lView[TVIEW];
  for (let i = HEADER_OFFSET; i < tView.bindingStartIndex; i++) {
    if (unwrapRNode(lView[i]) === target) {
      return i;
    }
  }
  return -1;
}
function traverseNextElement(tNode) {
  if (tNode.child) {
    return tNode.child;
  } else if (tNode.next) {
    return tNode.next;
  } else {
    while (tNode.parent && !tNode.parent.next) {
      tNode = tNode.parent;
    }
    return tNode.parent && tNode.parent.next;
  }
}
function findViaComponent(lView, componentInstance) {
  const componentIndices = lView[TVIEW].components;
  if (componentIndices) {
    for (let i = 0; i < componentIndices.length; i++) {
      const elementComponentIndex = componentIndices[i];
      const componentView = getComponentLViewByIndex(elementComponentIndex, lView);
      if (componentView[CONTEXT] === componentInstance) {
        return elementComponentIndex;
      }
    }
  } else {
    const rootComponentView = getComponentLViewByIndex(HEADER_OFFSET, lView);
    const rootComponent = rootComponentView[CONTEXT];
    if (rootComponent === componentInstance) {
      return HEADER_OFFSET;
    }
  }
  return -1;
}
function findViaDirective(lView, directiveInstance) {
  let tNode = lView[TVIEW].firstChild;
  while (tNode) {
    const directiveIndexStart = tNode.directiveStart;
    const directiveIndexEnd = tNode.directiveEnd;
    for (let i = directiveIndexStart; i < directiveIndexEnd; i++) {
      if (lView[i] === directiveInstance) {
        return tNode.index;
      }
    }
    tNode = traverseNextElement(tNode);
  }
  return -1;
}
function getDirectivesAtNodeIndex(nodeIndex, lView) {
  const tNode = lView[TVIEW].data[nodeIndex];
  if (tNode.directiveStart === 0)
    return EMPTY_ARRAY;
  const results = [];
  for (let i = tNode.directiveStart; i < tNode.directiveEnd; i++) {
    const directiveInstance = lView[i];
    if (!isComponentInstance(directiveInstance)) {
      results.push(directiveInstance);
    }
  }
  return results;
}
function getComponentAtNodeIndex(nodeIndex, lView) {
  const tNode = lView[TVIEW].data[nodeIndex];
  const { directiveStart, componentOffset } = tNode;
  return componentOffset > -1 ? lView[directiveStart + componentOffset] : null;
}
var _icuContainerIterate;
function icuContainerIterate(tIcuContainerNode, lView) {
  return _icuContainerIterate(tIcuContainerNode, lView);
}
function ensureIcuContainerVisitorLoaded(loader) {
  if (_icuContainerIterate === void 0) {
    _icuContainerIterate = loader();
  }
}
function getLViewParent(lView) {
  ngDevMode && assertLView(lView);
  const parent = lView[PARENT];
  return isLContainer(parent) ? parent[PARENT] : parent;
}
function getRootView(componentOrLView) {
  ngDevMode && assertDefined(componentOrLView, "component");
  let lView = isLView(componentOrLView) ? componentOrLView : readPatchedLView(componentOrLView);
  while (lView && !(lView[FLAGS] & 512)) {
    lView = getLViewParent(lView);
  }
  ngDevMode && assertLView(lView);
  return lView;
}
function getRootContext(viewOrComponent) {
  const rootView = getRootView(viewOrComponent);
  ngDevMode && assertDefined(rootView[CONTEXT], "Root view has no context. Perhaps it is disconnected?");
  return rootView[CONTEXT];
}
function getFirstLContainer(lView) {
  return getNearestLContainer(lView[CHILD_HEAD]);
}
function getNextLContainer(container) {
  return getNearestLContainer(container[NEXT]);
}
function getNearestLContainer(viewOrContainer) {
  while (viewOrContainer !== null && !isLContainer(viewOrContainer)) {
    viewOrContainer = viewOrContainer[NEXT];
  }
  return viewOrContainer;
}
function applyToElementOrContainer(action, renderer, parent, lNodeToHandle, beforeNode) {
  if (lNodeToHandle != null) {
    let lContainer;
    let isComponent = false;
    if (isLContainer(lNodeToHandle)) {
      lContainer = lNodeToHandle;
    } else if (isLView(lNodeToHandle)) {
      isComponent = true;
      ngDevMode && assertDefined(lNodeToHandle[HOST], "HOST must be defined for a component LView");
      lNodeToHandle = lNodeToHandle[HOST];
    }
    const rNode = unwrapRNode(lNodeToHandle);
    if (action === 0 && parent !== null) {
      if (beforeNode == null) {
        nativeAppendChild(renderer, parent, rNode);
      } else {
        nativeInsertBefore(renderer, parent, rNode, beforeNode || null, true);
      }
    } else if (action === 1 && parent !== null) {
      nativeInsertBefore(renderer, parent, rNode, beforeNode || null, true);
    } else if (action === 2) {
      nativeRemoveNode(renderer, rNode, isComponent);
    } else if (action === 3) {
      ngDevMode && ngDevMode.rendererDestroyNode++;
      renderer.destroyNode(rNode);
    }
    if (lContainer != null) {
      applyContainer(renderer, action, lContainer, parent, beforeNode);
    }
  }
}
function createTextNode(renderer, value) {
  ngDevMode && ngDevMode.rendererCreateTextNode++;
  ngDevMode && ngDevMode.rendererSetText++;
  return renderer.createText(value);
}
function updateTextNode(renderer, rNode, value) {
  ngDevMode && ngDevMode.rendererSetText++;
  renderer.setValue(rNode, value);
}
function createCommentNode(renderer, value) {
  ngDevMode && ngDevMode.rendererCreateComment++;
  return renderer.createComment(escapeCommentText(value));
}
function createElementNode(renderer, name, namespace) {
  ngDevMode && ngDevMode.rendererCreateElement++;
  return renderer.createElement(name, namespace);
}
function removeViewFromContainer(tView, lView) {
  const renderer = lView[RENDERER];
  applyView(tView, lView, renderer, 2, null, null);
  lView[HOST] = null;
  lView[T_HOST] = null;
}
function addViewToContainer(tView, parentTNode, renderer, lView, parentNativeNode, beforeNode) {
  lView[HOST] = parentNativeNode;
  lView[T_HOST] = parentTNode;
  applyView(tView, lView, renderer, 1, parentNativeNode, beforeNode);
}
function renderDetachView(tView, lView) {
  applyView(tView, lView, lView[RENDERER], 2, null, null);
}
function destroyViewTree(rootView) {
  let lViewOrLContainer = rootView[CHILD_HEAD];
  if (!lViewOrLContainer) {
    return cleanUpView(rootView[TVIEW], rootView);
  }
  while (lViewOrLContainer) {
    let next = null;
    if (isLView(lViewOrLContainer)) {
      next = lViewOrLContainer[CHILD_HEAD];
    } else {
      ngDevMode && assertLContainer(lViewOrLContainer);
      const firstView = lViewOrLContainer[CONTAINER_HEADER_OFFSET];
      if (firstView)
        next = firstView;
    }
    if (!next) {
      while (lViewOrLContainer && !lViewOrLContainer[NEXT] && lViewOrLContainer !== rootView) {
        if (isLView(lViewOrLContainer)) {
          cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
        }
        lViewOrLContainer = lViewOrLContainer[PARENT];
      }
      if (lViewOrLContainer === null)
        lViewOrLContainer = rootView;
      if (isLView(lViewOrLContainer)) {
        cleanUpView(lViewOrLContainer[TVIEW], lViewOrLContainer);
      }
      next = lViewOrLContainer && lViewOrLContainer[NEXT];
    }
    lViewOrLContainer = next;
  }
}
function insertView(tView, lView, lContainer, index) {
  ngDevMode && assertLView(lView);
  ngDevMode && assertLContainer(lContainer);
  const indexInContainer = CONTAINER_HEADER_OFFSET + index;
  const containerLength = lContainer.length;
  if (index > 0) {
    lContainer[indexInContainer - 1][NEXT] = lView;
  }
  if (index < containerLength - CONTAINER_HEADER_OFFSET) {
    lView[NEXT] = lContainer[indexInContainer];
    addToArray(lContainer, CONTAINER_HEADER_OFFSET + index, lView);
  } else {
    lContainer.push(lView);
    lView[NEXT] = null;
  }
  lView[PARENT] = lContainer;
  const declarationLContainer = lView[DECLARATION_LCONTAINER];
  if (declarationLContainer !== null && lContainer !== declarationLContainer) {
    trackMovedView(declarationLContainer, lView);
  }
  const lQueries = lView[QUERIES];
  if (lQueries !== null) {
    lQueries.insertView(tView);
  }
  lView[FLAGS] |= 128;
}
function trackMovedView(declarationContainer, lView) {
  ngDevMode && assertDefined(lView, "LView required");
  ngDevMode && assertLContainer(declarationContainer);
  const movedViews = declarationContainer[MOVED_VIEWS];
  const insertedLContainer = lView[PARENT];
  ngDevMode && assertLContainer(insertedLContainer);
  const insertedComponentLView = insertedLContainer[PARENT][DECLARATION_COMPONENT_VIEW];
  ngDevMode && assertDefined(insertedComponentLView, "Missing insertedComponentLView");
  const declaredComponentLView = lView[DECLARATION_COMPONENT_VIEW];
  ngDevMode && assertDefined(declaredComponentLView, "Missing declaredComponentLView");
  if (declaredComponentLView !== insertedComponentLView) {
    declarationContainer[HAS_TRANSPLANTED_VIEWS] = true;
  }
  if (movedViews === null) {
    declarationContainer[MOVED_VIEWS] = [lView];
  } else {
    movedViews.push(lView);
  }
}
function detachMovedView(declarationContainer, lView) {
  ngDevMode && assertLContainer(declarationContainer);
  ngDevMode && assertDefined(declarationContainer[MOVED_VIEWS], "A projected view should belong to a non-empty projected views collection");
  const movedViews = declarationContainer[MOVED_VIEWS];
  const declarationViewIndex = movedViews.indexOf(lView);
  const insertionLContainer = lView[PARENT];
  ngDevMode && assertLContainer(insertionLContainer);
  clearViewRefreshFlag(lView);
  movedViews.splice(declarationViewIndex, 1);
}
function detachView(lContainer, removeIndex) {
  if (lContainer.length <= CONTAINER_HEADER_OFFSET)
    return;
  const indexInContainer = CONTAINER_HEADER_OFFSET + removeIndex;
  const viewToDetach = lContainer[indexInContainer];
  if (viewToDetach) {
    const declarationLContainer = viewToDetach[DECLARATION_LCONTAINER];
    if (declarationLContainer !== null && declarationLContainer !== lContainer) {
      detachMovedView(declarationLContainer, viewToDetach);
    }
    if (removeIndex > 0) {
      lContainer[indexInContainer - 1][NEXT] = viewToDetach[NEXT];
    }
    const removedLView = removeFromArray(lContainer, CONTAINER_HEADER_OFFSET + removeIndex);
    removeViewFromContainer(viewToDetach[TVIEW], viewToDetach);
    const lQueries = removedLView[QUERIES];
    if (lQueries !== null) {
      lQueries.detachView(removedLView[TVIEW]);
    }
    viewToDetach[PARENT] = null;
    viewToDetach[NEXT] = null;
    viewToDetach[FLAGS] &= ~128;
  }
  return viewToDetach;
}
function destroyLView(tView, lView) {
  var _a2, _b;
  if (!(lView[FLAGS] & 256)) {
    const renderer = lView[RENDERER];
    (_a2 = lView[REACTIVE_TEMPLATE_CONSUMER]) == null ? void 0 : _a2.destroy();
    (_b = lView[REACTIVE_HOST_BINDING_CONSUMER]) == null ? void 0 : _b.destroy();
    if (renderer.destroyNode) {
      applyView(tView, lView, renderer, 3, null, null);
    }
    destroyViewTree(lView);
  }
}
function cleanUpView(tView, lView) {
  if (!(lView[FLAGS] & 256)) {
    lView[FLAGS] &= ~128;
    lView[FLAGS] |= 256;
    executeOnDestroys(tView, lView);
    processCleanups(tView, lView);
    if (lView[TVIEW].type === 1) {
      ngDevMode && ngDevMode.rendererDestroy++;
      lView[RENDERER].destroy();
    }
    const declarationContainer = lView[DECLARATION_LCONTAINER];
    if (declarationContainer !== null && isLContainer(lView[PARENT])) {
      if (declarationContainer !== lView[PARENT]) {
        detachMovedView(declarationContainer, lView);
      }
      const lQueries = lView[QUERIES];
      if (lQueries !== null) {
        lQueries.detachView(tView);
      }
    }
    unregisterLView(lView);
  }
}
function processCleanups(tView, lView) {
  const tCleanup = tView.cleanup;
  const lCleanup = lView[CLEANUP];
  if (tCleanup !== null) {
    for (let i = 0; i < tCleanup.length - 1; i += 2) {
      if (typeof tCleanup[i] === "string") {
        const targetIdx = tCleanup[i + 3];
        ngDevMode && assertNumber(targetIdx, "cleanup target must be a number");
        if (targetIdx >= 0) {
          lCleanup[targetIdx]();
        } else {
          lCleanup[-targetIdx].unsubscribe();
        }
        i += 2;
      } else {
        const context = lCleanup[tCleanup[i + 1]];
        tCleanup[i].call(context);
      }
    }
  }
  if (lCleanup !== null) {
    lView[CLEANUP] = null;
  }
  const destroyHooks = lView[ON_DESTROY_HOOKS];
  if (destroyHooks !== null) {
    lView[ON_DESTROY_HOOKS] = null;
    for (let i = 0; i < destroyHooks.length; i++) {
      const destroyHooksFn = destroyHooks[i];
      ngDevMode && assertFunction(destroyHooksFn, "Expecting destroy hook to be a function.");
      destroyHooksFn();
    }
  }
}
function executeOnDestroys(tView, lView) {
  let destroyHooks;
  if (tView != null && (destroyHooks = tView.destroyHooks) != null) {
    for (let i = 0; i < destroyHooks.length; i += 2) {
      const context = lView[destroyHooks[i]];
      if (!(context instanceof NodeInjectorFactory)) {
        const toCall = destroyHooks[i + 1];
        if (Array.isArray(toCall)) {
          for (let j = 0; j < toCall.length; j += 2) {
            const callContext = context[toCall[j]];
            const hook = toCall[j + 1];
            profiler(4, callContext, hook);
            try {
              hook.call(callContext);
            } finally {
              profiler(5, callContext, hook);
            }
          }
        } else {
          profiler(4, context, toCall);
          try {
            toCall.call(context);
          } finally {
            profiler(5, context, toCall);
          }
        }
      }
    }
  }
}
function getParentRElement(tView, tNode, lView) {
  return getClosestRElement(tView, tNode.parent, lView);
}
function getClosestRElement(tView, tNode, lView) {
  let parentTNode = tNode;
  while (parentTNode !== null && parentTNode.type & (8 | 32)) {
    tNode = parentTNode;
    parentTNode = tNode.parent;
  }
  if (parentTNode === null) {
    return lView[HOST];
  } else {
    ngDevMode && assertTNodeType(
      parentTNode,
      3 | 4
      /* TNodeType.Container */
    );
    const { componentOffset } = parentTNode;
    if (componentOffset > -1) {
      ngDevMode && assertTNodeForLView(parentTNode, lView);
      const { encapsulation } = tView.data[parentTNode.directiveStart + componentOffset];
      if (encapsulation === ViewEncapsulation$1.None || encapsulation === ViewEncapsulation$1.Emulated) {
        return null;
      }
    }
    return getNativeByTNode(parentTNode, lView);
  }
}
function nativeInsertBefore(renderer, parent, child, beforeNode, isMove) {
  ngDevMode && ngDevMode.rendererInsertBefore++;
  renderer.insertBefore(parent, child, beforeNode, isMove);
}
function nativeAppendChild(renderer, parent, child) {
  ngDevMode && ngDevMode.rendererAppendChild++;
  ngDevMode && assertDefined(parent, "parent node must be defined");
  renderer.appendChild(parent, child);
}
function nativeAppendOrInsertBefore(renderer, parent, child, beforeNode, isMove) {
  if (beforeNode !== null) {
    nativeInsertBefore(renderer, parent, child, beforeNode, isMove);
  } else {
    nativeAppendChild(renderer, parent, child);
  }
}
function nativeRemoveChild(renderer, parent, child, isHostElement) {
  renderer.removeChild(parent, child, isHostElement);
}
function nativeParentNode(renderer, node) {
  return renderer.parentNode(node);
}
function nativeNextSibling(renderer, node) {
  return renderer.nextSibling(node);
}
function getInsertInFrontOfRNode(parentTNode, currentTNode, lView) {
  return _getInsertInFrontOfRNodeWithI18n(parentTNode, currentTNode, lView);
}
function getInsertInFrontOfRNodeWithNoI18n(parentTNode, currentTNode, lView) {
  if (parentTNode.type & (8 | 32)) {
    return getNativeByTNode(parentTNode, lView);
  }
  return null;
}
var _getInsertInFrontOfRNodeWithI18n = getInsertInFrontOfRNodeWithNoI18n;
var _processI18nInsertBefore;
function setI18nHandling(getInsertInFrontOfRNodeWithI18n2, processI18nInsertBefore2) {
  _getInsertInFrontOfRNodeWithI18n = getInsertInFrontOfRNodeWithI18n2;
  _processI18nInsertBefore = processI18nInsertBefore2;
}
function appendChild(tView, lView, childRNode, childTNode) {
  const parentRNode = getParentRElement(tView, childTNode, lView);
  const renderer = lView[RENDERER];
  const parentTNode = childTNode.parent || lView[T_HOST];
  const anchorNode = getInsertInFrontOfRNode(parentTNode, childTNode, lView);
  if (parentRNode != null) {
    if (Array.isArray(childRNode)) {
      for (let i = 0; i < childRNode.length; i++) {
        nativeAppendOrInsertBefore(renderer, parentRNode, childRNode[i], anchorNode, false);
      }
    } else {
      nativeAppendOrInsertBefore(renderer, parentRNode, childRNode, anchorNode, false);
    }
  }
  _processI18nInsertBefore !== void 0 && _processI18nInsertBefore(renderer, childTNode, lView, childRNode, parentRNode);
}
function getFirstNativeNode(lView, tNode) {
  if (tNode !== null) {
    ngDevMode && assertTNodeType(
      tNode,
      3 | 12 | 32 | 16
      /* TNodeType.Projection */
    );
    const tNodeType = tNode.type;
    if (tNodeType & 3) {
      return getNativeByTNode(tNode, lView);
    } else if (tNodeType & 4) {
      return getBeforeNodeForView(-1, lView[tNode.index]);
    } else if (tNodeType & 8) {
      const elIcuContainerChild = tNode.child;
      if (elIcuContainerChild !== null) {
        return getFirstNativeNode(lView, elIcuContainerChild);
      } else {
        const rNodeOrLContainer = lView[tNode.index];
        if (isLContainer(rNodeOrLContainer)) {
          return getBeforeNodeForView(-1, rNodeOrLContainer);
        } else {
          return unwrapRNode(rNodeOrLContainer);
        }
      }
    } else if (tNodeType & 32) {
      let nextRNode = icuContainerIterate(tNode, lView);
      let rNode = nextRNode();
      return rNode || unwrapRNode(lView[tNode.index]);
    } else {
      const projectionNodes = getProjectionNodes(lView, tNode);
      if (projectionNodes !== null) {
        if (Array.isArray(projectionNodes)) {
          return projectionNodes[0];
        }
        const parentView = getLViewParent(lView[DECLARATION_COMPONENT_VIEW]);
        ngDevMode && assertParentView(parentView);
        return getFirstNativeNode(parentView, projectionNodes);
      } else {
        return getFirstNativeNode(lView, tNode.next);
      }
    }
  }
  return null;
}
function getProjectionNodes(lView, tNode) {
  if (tNode !== null) {
    const componentView = lView[DECLARATION_COMPONENT_VIEW];
    const componentHost = componentView[T_HOST];
    const slotIdx = tNode.projection;
    ngDevMode && assertProjectionSlots(lView);
    return componentHost.projection[slotIdx];
  }
  return null;
}
function getBeforeNodeForView(viewIndexInContainer, lContainer) {
  const nextViewIndex = CONTAINER_HEADER_OFFSET + viewIndexInContainer + 1;
  if (nextViewIndex < lContainer.length) {
    const lView = lContainer[nextViewIndex];
    const firstTNodeOfView = lView[TVIEW].firstChild;
    if (firstTNodeOfView !== null) {
      return getFirstNativeNode(lView, firstTNodeOfView);
    }
  }
  return lContainer[NATIVE];
}
function nativeRemoveNode(renderer, rNode, isHostElement) {
  ngDevMode && ngDevMode.rendererRemoveNode++;
  const nativeParent = nativeParentNode(renderer, rNode);
  if (nativeParent) {
    nativeRemoveChild(renderer, nativeParent, rNode, isHostElement);
  }
}
function applyNodes(renderer, action, tNode, lView, parentRElement, beforeNode, isProjection) {
  while (tNode != null) {
    ngDevMode && assertTNodeForLView(tNode, lView);
    ngDevMode && assertTNodeType(
      tNode,
      3 | 12 | 16 | 32
      /* TNodeType.Icu */
    );
    const rawSlotValue = lView[tNode.index];
    const tNodeType = tNode.type;
    if (isProjection) {
      if (action === 0) {
        rawSlotValue && attachPatchData(unwrapRNode(rawSlotValue), lView);
        tNode.flags |= 2;
      }
    }
    if ((tNode.flags & 32) !== 32) {
      if (tNodeType & 8) {
        applyNodes(renderer, action, tNode.child, lView, parentRElement, beforeNode, false);
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      } else if (tNodeType & 32) {
        const nextRNode = icuContainerIterate(tNode, lView);
        let rNode;
        while (rNode = nextRNode()) {
          applyToElementOrContainer(action, renderer, parentRElement, rNode, beforeNode);
        }
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      } else if (tNodeType & 16) {
        applyProjectionRecursive(renderer, action, lView, tNode, parentRElement, beforeNode);
      } else {
        ngDevMode && assertTNodeType(
          tNode,
          3 | 4
          /* TNodeType.Container */
        );
        applyToElementOrContainer(action, renderer, parentRElement, rawSlotValue, beforeNode);
      }
    }
    tNode = isProjection ? tNode.projectionNext : tNode.next;
  }
}
function applyView(tView, lView, renderer, action, parentRElement, beforeNode) {
  applyNodes(renderer, action, tView.firstChild, lView, parentRElement, beforeNode, false);
}
function applyProjection(tView, lView, tProjectionNode) {
  const renderer = lView[RENDERER];
  const parentRNode = getParentRElement(tView, tProjectionNode, lView);
  const parentTNode = tProjectionNode.parent || lView[T_HOST];
  let beforeNode = getInsertInFrontOfRNode(parentTNode, tProjectionNode, lView);
  applyProjectionRecursive(renderer, 0, lView, tProjectionNode, parentRNode, beforeNode);
}
function applyProjectionRecursive(renderer, action, lView, tProjectionNode, parentRElement, beforeNode) {
  const componentLView = lView[DECLARATION_COMPONENT_VIEW];
  const componentNode = componentLView[T_HOST];
  ngDevMode && assertEqual(typeof tProjectionNode.projection, "number", "expecting projection index");
  const nodeToProjectOrRNodes = componentNode.projection[tProjectionNode.projection];
  if (Array.isArray(nodeToProjectOrRNodes)) {
    for (let i = 0; i < nodeToProjectOrRNodes.length; i++) {
      const rNode = nodeToProjectOrRNodes[i];
      applyToElementOrContainer(action, renderer, parentRElement, rNode, beforeNode);
    }
  } else {
    let nodeToProject = nodeToProjectOrRNodes;
    const projectedComponentLView = componentLView[PARENT];
    if (hasInSkipHydrationBlockFlag(tProjectionNode)) {
      nodeToProject.flags |= 128;
    }
    applyNodes(renderer, action, nodeToProject, projectedComponentLView, parentRElement, beforeNode, true);
  }
}
function applyContainer(renderer, action, lContainer, parentRElement, beforeNode) {
  ngDevMode && assertLContainer(lContainer);
  const anchor = lContainer[NATIVE];
  const native = unwrapRNode(lContainer);
  if (anchor !== native) {
    applyToElementOrContainer(action, renderer, parentRElement, anchor, beforeNode);
  }
  for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
    const lView = lContainer[i];
    applyView(lView[TVIEW], lView, renderer, action, parentRElement, anchor);
  }
}
function applyStyling(renderer, isClassBased, rNode, prop, value) {
  if (isClassBased) {
    if (!value) {
      ngDevMode && ngDevMode.rendererRemoveClass++;
      renderer.removeClass(rNode, prop);
    } else {
      ngDevMode && ngDevMode.rendererAddClass++;
      renderer.addClass(rNode, prop);
    }
  } else {
    let flags = prop.indexOf("-") === -1 ? void 0 : RendererStyleFlags2.DashCase;
    if (value == null) {
      ngDevMode && ngDevMode.rendererRemoveStyle++;
      renderer.removeStyle(rNode, prop, flags);
    } else {
      const isImportant = typeof value === "string" ? value.endsWith("!important") : false;
      if (isImportant) {
        value = value.slice(0, -10);
        flags |= RendererStyleFlags2.Important;
      }
      ngDevMode && ngDevMode.rendererSetStyle++;
      renderer.setStyle(rNode, prop, value, flags);
    }
  }
}
function writeDirectStyle(renderer, element, newValue) {
  ngDevMode && assertString(newValue, "'newValue' should be a string");
  renderer.setAttribute(element, "style", newValue);
  ngDevMode && ngDevMode.rendererSetStyle++;
}
function writeDirectClass(renderer, element, newValue) {
  ngDevMode && assertString(newValue, "'newValue' should be a string");
  if (newValue === "") {
    renderer.removeAttribute(element, "class");
  } else {
    renderer.setAttribute(element, "class", newValue);
  }
  ngDevMode && ngDevMode.rendererSetClassName++;
}
function setupStaticAttributes(renderer, element, tNode) {
  const { mergedAttrs, classes, styles } = tNode;
  if (mergedAttrs !== null) {
    setUpAttributes(renderer, element, mergedAttrs);
  }
  if (classes !== null) {
    writeDirectClass(renderer, element, classes);
  }
  if (styles !== null) {
    writeDirectStyle(renderer, element, styles);
  }
}
var policy$1;
function getPolicy$1() {
  if (policy$1 === void 0) {
    policy$1 = null;
    if (_global.trustedTypes) {
      try {
        policy$1 = _global.trustedTypes.createPolicy("angular", {
          createHTML: (s) => s,
          createScript: (s) => s,
          createScriptURL: (s) => s
        });
      } catch (e) {
      }
    }
  }
  return policy$1;
}
function trustedHTMLFromString(html) {
  var _a2;
  return ((_a2 = getPolicy$1()) == null ? void 0 : _a2.createHTML(html)) || html;
}
function trustedScriptURLFromString(url) {
  var _a2;
  return ((_a2 = getPolicy$1()) == null ? void 0 : _a2.createScriptURL(url)) || url;
}
function \u0275\u0275validateIframeAttribute(attrValue, tagName, attrName) {
  const lView = getLView();
  const tNode = getSelectedTNode();
  const element = getNativeByTNode(tNode, lView);
  if (tNode.type === 2 && tagName.toLowerCase() === "iframe") {
    const iframe = element;
    iframe.src = "";
    iframe.srcdoc = trustedHTMLFromString("");
    nativeRemoveNode(lView[RENDERER], iframe);
    const errorMessage = ngDevMode && `Angular has detected that the \`${attrName}\` was applied as a binding to an <iframe>${getTemplateLocationDetails(lView)}. For security reasons, the \`${attrName}\` can be set on an <iframe> as a static attribute only. 
To fix this, switch the \`${attrName}\` binding to a static attribute in a template or in host bindings section.`;
    throw new RuntimeError(-910, errorMessage);
  }
  return attrValue;
}
var DOCUMENT = void 0;
function getDocument() {
  if (DOCUMENT !== void 0) {
    return DOCUMENT;
  } else if (typeof document !== "undefined") {
    return document;
  }
  throw new RuntimeError(210, (typeof ngDevMode === "undefined" || ngDevMode) && `The document object is not available in this context. Make sure the DOCUMENT injection token is provided.`);
}
var policy;
function getPolicy() {
  if (policy === void 0) {
    policy = null;
    if (_global.trustedTypes) {
      try {
        policy = _global.trustedTypes.createPolicy("angular#unsafe-bypass", {
          createHTML: (s) => s,
          createScript: (s) => s,
          createScriptURL: (s) => s
        });
      } catch (e) {
      }
    }
  }
  return policy;
}
function trustedHTMLFromStringBypass(html) {
  var _a2;
  return ((_a2 = getPolicy()) == null ? void 0 : _a2.createHTML(html)) || html;
}
function trustedScriptFromStringBypass(script) {
  var _a2;
  return ((_a2 = getPolicy()) == null ? void 0 : _a2.createScript(script)) || script;
}
function trustedScriptURLFromStringBypass(url) {
  var _a2;
  return ((_a2 = getPolicy()) == null ? void 0 : _a2.createScriptURL(url)) || url;
}
var SafeValueImpl = class {
  constructor(changingThisBreaksApplicationSecurity) {
    this.changingThisBreaksApplicationSecurity = changingThisBreaksApplicationSecurity;
  }
  toString() {
    return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see ${XSS_SECURITY_URL})`;
  }
};
function unwrapSafeValue(value) {
  return value instanceof SafeValueImpl ? value.changingThisBreaksApplicationSecurity : value;
}
function allowSanitizationBypassAndThrow(value, type) {
  const actualType = getSanitizationBypassType(value);
  if (actualType != null && actualType !== type) {
    if (actualType === "ResourceURL" && type === "URL")
      return true;
    throw new Error(`Required a safe ${type}, got a ${actualType} (see ${XSS_SECURITY_URL})`);
  }
  return actualType === type;
}
function getSanitizationBypassType(value) {
  return value instanceof SafeValueImpl && value.getTypeName() || null;
}
function getInertBodyHelper(defaultDoc) {
  const inertDocumentHelper = new InertDocumentHelper(defaultDoc);
  return isDOMParserAvailable() ? new DOMParserHelper(inertDocumentHelper) : inertDocumentHelper;
}
var DOMParserHelper = class {
  constructor(inertDocumentHelper) {
    this.inertDocumentHelper = inertDocumentHelper;
  }
  getInertBodyElement(html) {
    html = "<body><remove></remove>" + html;
    try {
      const body = new window.DOMParser().parseFromString(trustedHTMLFromString(html), "text/html").body;
      if (body === null) {
        return this.inertDocumentHelper.getInertBodyElement(html);
      }
      body.removeChild(body.firstChild);
      return body;
    } catch (e) {
      return null;
    }
  }
};
var InertDocumentHelper = class {
  constructor(defaultDoc) {
    this.defaultDoc = defaultDoc;
    this.inertDocument = this.defaultDoc.implementation.createHTMLDocument("sanitization-inert");
  }
  getInertBodyElement(html) {
    const templateEl = this.inertDocument.createElement("template");
    templateEl.innerHTML = trustedHTMLFromString(html);
    return templateEl;
  }
};
function isDOMParserAvailable() {
  try {
    return !!new window.DOMParser().parseFromString(trustedHTMLFromString(""), "text/html");
  } catch (e) {
    return false;
  }
}
var SAFE_URL_PATTERN = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:\/?#]*(?:[\/?#]|$))/i;
function _sanitizeUrl(url) {
  url = String(url);
  if (url.match(SAFE_URL_PATTERN))
    return url;
  if (typeof ngDevMode === "undefined" || ngDevMode) {
    console.warn(`WARNING: sanitizing unsafe URL value ${url} (see ${XSS_SECURITY_URL})`);
  }
  return "unsafe:" + url;
}
function tagSet(tags) {
  const res = {};
  for (const t of tags.split(","))
    res[t] = true;
  return res;
}
function merge(...sets) {
  const res = {};
  for (const s of sets) {
    for (const v in s) {
      if (s.hasOwnProperty(v))
        res[v] = true;
    }
  }
  return res;
}
var VOID_ELEMENTS = tagSet("area,br,col,hr,img,wbr");
var OPTIONAL_END_TAG_BLOCK_ELEMENTS = tagSet("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
var OPTIONAL_END_TAG_INLINE_ELEMENTS = tagSet("rp,rt");
var OPTIONAL_END_TAG_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, OPTIONAL_END_TAG_BLOCK_ELEMENTS);
var BLOCK_ELEMENTS = merge(OPTIONAL_END_TAG_BLOCK_ELEMENTS, tagSet("address,article,aside,blockquote,caption,center,del,details,dialog,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,main,map,menu,nav,ol,pre,section,summary,table,ul"));
var INLINE_ELEMENTS = merge(OPTIONAL_END_TAG_INLINE_ELEMENTS, tagSet("a,abbr,acronym,audio,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,picture,q,ruby,rp,rt,s,samp,small,source,span,strike,strong,sub,sup,time,track,tt,u,var,video"));
var VALID_ELEMENTS = merge(VOID_ELEMENTS, BLOCK_ELEMENTS, INLINE_ELEMENTS, OPTIONAL_END_TAG_ELEMENTS);
var URI_ATTRS = tagSet("background,cite,href,itemtype,longdesc,poster,src,xlink:href");
var HTML_ATTRS = tagSet("abbr,accesskey,align,alt,autoplay,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,controls,coords,datetime,default,dir,download,face,headers,height,hidden,hreflang,hspace,ismap,itemscope,itemprop,kind,label,lang,language,loop,media,muted,nohref,nowrap,open,preload,rel,rev,role,rows,rowspan,rules,scope,scrolling,shape,size,sizes,span,srclang,srcset,start,summary,tabindex,target,title,translate,type,usemap,valign,value,vspace,width");
var ARIA_ATTRS = tagSet("aria-activedescendant,aria-atomic,aria-autocomplete,aria-busy,aria-checked,aria-colcount,aria-colindex,aria-colspan,aria-controls,aria-current,aria-describedby,aria-details,aria-disabled,aria-dropeffect,aria-errormessage,aria-expanded,aria-flowto,aria-grabbed,aria-haspopup,aria-hidden,aria-invalid,aria-keyshortcuts,aria-label,aria-labelledby,aria-level,aria-live,aria-modal,aria-multiline,aria-multiselectable,aria-orientation,aria-owns,aria-placeholder,aria-posinset,aria-pressed,aria-readonly,aria-relevant,aria-required,aria-roledescription,aria-rowcount,aria-rowindex,aria-rowspan,aria-selected,aria-setsize,aria-sort,aria-valuemax,aria-valuemin,aria-valuenow,aria-valuetext");
var VALID_ATTRS = merge(URI_ATTRS, HTML_ATTRS, ARIA_ATTRS);
var SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS = tagSet("script,style,template");
var SanitizingHtmlSerializer = class {
  constructor() {
    this.sanitizedSomething = false;
    this.buf = [];
  }
  sanitizeChildren(el) {
    let current = el.firstChild;
    let traverseContent = true;
    while (current) {
      if (current.nodeType === Node.ELEMENT_NODE) {
        traverseContent = this.startElement(current);
      } else if (current.nodeType === Node.TEXT_NODE) {
        this.chars(current.nodeValue);
      } else {
        this.sanitizedSomething = true;
      }
      if (traverseContent && current.firstChild) {
        current = current.firstChild;
        continue;
      }
      while (current) {
        if (current.nodeType === Node.ELEMENT_NODE) {
          this.endElement(current);
        }
        let next = this.checkClobberedElement(current, current.nextSibling);
        if (next) {
          current = next;
          break;
        }
        current = this.checkClobberedElement(current, current.parentNode);
      }
    }
    return this.buf.join("");
  }
  /**
   * Sanitizes an opening element tag (if valid) and returns whether the element's contents should
   * be traversed. Element content must always be traversed (even if the element itself is not
   * valid/safe), unless the element is one of `SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS`.
   *
   * @param element The element to sanitize.
   * @return True if the element's contents should be traversed.
   */
  startElement(element) {
    const tagName = element.nodeName.toLowerCase();
    if (!VALID_ELEMENTS.hasOwnProperty(tagName)) {
      this.sanitizedSomething = true;
      return !SKIP_TRAVERSING_CONTENT_IF_INVALID_ELEMENTS.hasOwnProperty(tagName);
    }
    this.buf.push("<");
    this.buf.push(tagName);
    const elAttrs = element.attributes;
    for (let i = 0; i < elAttrs.length; i++) {
      const elAttr = elAttrs.item(i);
      const attrName = elAttr.name;
      const lower = attrName.toLowerCase();
      if (!VALID_ATTRS.hasOwnProperty(lower)) {
        this.sanitizedSomething = true;
        continue;
      }
      let value = elAttr.value;
      if (URI_ATTRS[lower])
        value = _sanitizeUrl(value);
      this.buf.push(" ", attrName, '="', encodeEntities(value), '"');
    }
    this.buf.push(">");
    return true;
  }
  endElement(current) {
    const tagName = current.nodeName.toLowerCase();
    if (VALID_ELEMENTS.hasOwnProperty(tagName) && !VOID_ELEMENTS.hasOwnProperty(tagName)) {
      this.buf.push("</");
      this.buf.push(tagName);
      this.buf.push(">");
    }
  }
  chars(chars) {
    this.buf.push(encodeEntities(chars));
  }
  checkClobberedElement(node, nextNode) {
    if (nextNode && (node.compareDocumentPosition(nextNode) & Node.DOCUMENT_POSITION_CONTAINED_BY) === Node.DOCUMENT_POSITION_CONTAINED_BY) {
      throw new Error(`Failed to sanitize html because the element is clobbered: ${node.outerHTML}`);
    }
    return nextNode;
  }
};
var SURROGATE_PAIR_REGEXP = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g;
var NON_ALPHANUMERIC_REGEXP = /([^\#-~ |!])/g;
function encodeEntities(value) {
  return value.replace(/&/g, "&amp;").replace(SURROGATE_PAIR_REGEXP, function(match) {
    const hi = match.charCodeAt(0);
    const low = match.charCodeAt(1);
    return "&#" + ((hi - 55296) * 1024 + (low - 56320) + 65536) + ";";
  }).replace(NON_ALPHANUMERIC_REGEXP, function(match) {
    return "&#" + match.charCodeAt(0) + ";";
  }).replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
var inertBodyHelper;
function _sanitizeHtml(defaultDoc, unsafeHtmlInput) {
  let inertBodyElement = null;
  try {
    inertBodyHelper = inertBodyHelper || getInertBodyHelper(defaultDoc);
    let unsafeHtml = unsafeHtmlInput ? String(unsafeHtmlInput) : "";
    inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
    let mXSSAttempts = 5;
    let parsedHtml = unsafeHtml;
    do {
      if (mXSSAttempts === 0) {
        throw new Error("Failed to sanitize html because the input is unstable");
      }
      mXSSAttempts--;
      unsafeHtml = parsedHtml;
      parsedHtml = inertBodyElement.innerHTML;
      inertBodyElement = inertBodyHelper.getInertBodyElement(unsafeHtml);
    } while (unsafeHtml !== parsedHtml);
    const sanitizer = new SanitizingHtmlSerializer();
    const safeHtml = sanitizer.sanitizeChildren(getTemplateContent(inertBodyElement) || inertBodyElement);
    if ((typeof ngDevMode === "undefined" || ngDevMode) && sanitizer.sanitizedSomething) {
      console.warn(`WARNING: sanitizing HTML stripped some content, see ${XSS_SECURITY_URL}`);
    }
    return trustedHTMLFromString(safeHtml);
  } finally {
    if (inertBodyElement) {
      const parent = getTemplateContent(inertBodyElement) || inertBodyElement;
      while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
      }
    }
  }
}
function getTemplateContent(el) {
  return "content" in el && isTemplateElement(el) ? el.content : null;
}
function isTemplateElement(el) {
  return el.nodeType === Node.ELEMENT_NODE && el.nodeName === "TEMPLATE";
}
var SecurityContext;
(function(SecurityContext2) {
  SecurityContext2[SecurityContext2["NONE"] = 0] = "NONE";
  SecurityContext2[SecurityContext2["HTML"] = 1] = "HTML";
  SecurityContext2[SecurityContext2["STYLE"] = 2] = "STYLE";
  SecurityContext2[SecurityContext2["SCRIPT"] = 3] = "SCRIPT";
  SecurityContext2[SecurityContext2["URL"] = 4] = "URL";
  SecurityContext2[SecurityContext2["RESOURCE_URL"] = 5] = "RESOURCE_URL";
})(SecurityContext || (SecurityContext = {}));
function \u0275\u0275sanitizeHtml(unsafeHtml) {
  const sanitizer = getSanitizer();
  if (sanitizer) {
    return trustedHTMLFromStringBypass(sanitizer.sanitize(SecurityContext.HTML, unsafeHtml) || "");
  }
  if (allowSanitizationBypassAndThrow(
    unsafeHtml,
    "HTML"
    /* BypassType.Html */
  )) {
    return trustedHTMLFromStringBypass(unwrapSafeValue(unsafeHtml));
  }
  return _sanitizeHtml(getDocument(), renderStringify(unsafeHtml));
}
function \u0275\u0275sanitizeStyle(unsafeStyle) {
  const sanitizer = getSanitizer();
  if (sanitizer) {
    return sanitizer.sanitize(SecurityContext.STYLE, unsafeStyle) || "";
  }
  if (allowSanitizationBypassAndThrow(
    unsafeStyle,
    "Style"
    /* BypassType.Style */
  )) {
    return unwrapSafeValue(unsafeStyle);
  }
  return renderStringify(unsafeStyle);
}
function \u0275\u0275sanitizeUrl(unsafeUrl) {
  const sanitizer = getSanitizer();
  if (sanitizer) {
    return sanitizer.sanitize(SecurityContext.URL, unsafeUrl) || "";
  }
  if (allowSanitizationBypassAndThrow(
    unsafeUrl,
    "URL"
    /* BypassType.Url */
  )) {
    return unwrapSafeValue(unsafeUrl);
  }
  return _sanitizeUrl(renderStringify(unsafeUrl));
}
function \u0275\u0275sanitizeResourceUrl(unsafeResourceUrl) {
  const sanitizer = getSanitizer();
  if (sanitizer) {
    return trustedScriptURLFromStringBypass(sanitizer.sanitize(SecurityContext.RESOURCE_URL, unsafeResourceUrl) || "");
  }
  if (allowSanitizationBypassAndThrow(
    unsafeResourceUrl,
    "ResourceURL"
    /* BypassType.ResourceUrl */
  )) {
    return trustedScriptURLFromStringBypass(unwrapSafeValue(unsafeResourceUrl));
  }
  throw new RuntimeError(904, ngDevMode && `unsafe value used in a resource URL context (see ${XSS_SECURITY_URL})`);
}
function \u0275\u0275sanitizeScript(unsafeScript) {
  const sanitizer = getSanitizer();
  if (sanitizer) {
    return trustedScriptFromStringBypass(sanitizer.sanitize(SecurityContext.SCRIPT, unsafeScript) || "");
  }
  if (allowSanitizationBypassAndThrow(
    unsafeScript,
    "Script"
    /* BypassType.Script */
  )) {
    return trustedScriptFromStringBypass(unwrapSafeValue(unsafeScript));
  }
  throw new RuntimeError(905, ngDevMode && "unsafe value used in a script context");
}
function \u0275\u0275trustConstantHtml(html) {
  if (ngDevMode && (!Array.isArray(html) || !Array.isArray(html.raw) || html.length !== 1)) {
    throw new Error(`Unexpected interpolation in trusted HTML constant: ${html.join("?")}`);
  }
  return trustedHTMLFromString(html[0]);
}
function \u0275\u0275trustConstantResourceUrl(url) {
  if (ngDevMode && (!Array.isArray(url) || !Array.isArray(url.raw) || url.length !== 1)) {
    throw new Error(`Unexpected interpolation in trusted URL constant: ${url.join("?")}`);
  }
  return trustedScriptURLFromString(url[0]);
}
function getUrlSanitizer(tag, prop) {
  if (prop === "src" && (tag === "embed" || tag === "frame" || tag === "iframe" || tag === "media" || tag === "script") || prop === "href" && (tag === "base" || tag === "link")) {
    return \u0275\u0275sanitizeResourceUrl;
  }
  return \u0275\u0275sanitizeUrl;
}
function \u0275\u0275sanitizeUrlOrResourceUrl(unsafeUrl, tag, prop) {
  return getUrlSanitizer(tag, prop)(unsafeUrl);
}
function validateAgainstEventProperties(name) {
  if (name.toLowerCase().startsWith("on")) {
    const errorMessage = `Binding to event property '${name}' is disallowed for security reasons, please use (${name.slice(2)})=...
If '${name}' is a directive input, make sure the directive is imported by the current module.`;
    throw new RuntimeError(306, errorMessage);
  }
}
function validateAgainstEventAttributes(name) {
  if (name.toLowerCase().startsWith("on")) {
    const errorMessage = `Binding to event attribute '${name}' is disallowed for security reasons, please use (${name.slice(2)})=...`;
    throw new RuntimeError(306, errorMessage);
  }
}
function getSanitizer() {
  const lView = getLView();
  return lView && lView[ENVIRONMENT].sanitizer;
}
var InjectionToken = class {
  /**
   * @param _desc   Description for the token,
   *                used only for debugging purposes,
   *                it should but does not need to be unique
   * @param options Options for the token's usage, as described above
   */
  constructor(_desc, options) {
    this._desc = _desc;
    this.ngMetadataName = "InjectionToken";
    this.\u0275prov = void 0;
    if (typeof options == "number") {
      (typeof ngDevMode === "undefined" || ngDevMode) && assertLessThan(options, 0, "Only negative numbers are supported here");
      this.__NG_ELEMENT_ID__ = options;
    } else if (options !== void 0) {
      this.\u0275prov = \u0275\u0275defineInjectable({
        token: this,
        providedIn: options.providedIn || "root",
        factory: options.factory
      });
    }
  }
  /**
   * @internal
   */
  get multi() {
    return this;
  }
  toString() {
    return `InjectionToken ${this._desc}`;
  }
};
var ENVIRONMENT_INITIALIZER = new InjectionToken("ENVIRONMENT_INITIALIZER");
var INJECTOR = new InjectionToken(
  "INJECTOR",
  // Disable tslint because this is const enum which gets inlined not top level prop access.
  // tslint:disable-next-line: no-toplevel-property-access
  -1
  /* InjectorMarkers.Injector */
);
var INJECTOR_DEF_TYPES = new InjectionToken("INJECTOR_DEF_TYPES");
var NullInjector = class {
  get(token, notFoundValue = THROW_IF_NOT_FOUND) {
    if (notFoundValue === THROW_IF_NOT_FOUND) {
      const error = new Error(`NullInjectorError: No provider for ${stringify(token)}!`);
      error.name = "NullInjectorError";
      throw error;
    }
    return notFoundValue;
  }
};
function importProvidersFrom(...sources) {
  return {
    \u0275providers: internalImportProvidersFrom(true, sources),
    \u0275fromNgModule: true
  };
}
function internalImportProvidersFrom(checkForStandaloneCmp, ...sources) {
  const providersOut = [];
  const dedup = /* @__PURE__ */ new Set();
  let injectorTypesWithProviders;
  deepForEach(sources, (source) => {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && checkForStandaloneCmp) {
      const cmpDef = getComponentDef(source);
      if (cmpDef == null ? void 0 : cmpDef.standalone) {
        throw new RuntimeError(800, `Importing providers supports NgModule or ModuleWithProviders but got a standalone component "${stringifyForError(source)}"`);
      }
    }
    const internalSource = source;
    if (walkProviderTree(internalSource, providersOut, [], dedup)) {
      injectorTypesWithProviders || (injectorTypesWithProviders = []);
      injectorTypesWithProviders.push(internalSource);
    }
  });
  if (injectorTypesWithProviders !== void 0) {
    processInjectorTypesWithProviders(injectorTypesWithProviders, providersOut);
  }
  return providersOut;
}
function processInjectorTypesWithProviders(typesWithProviders, providersOut) {
  for (let i = 0; i < typesWithProviders.length; i++) {
    const { ngModule, providers } = typesWithProviders[i];
    deepForEachProvider(providers, (provider) => {
      ngDevMode && validateProvider(provider, providers || EMPTY_ARRAY, ngModule);
      providersOut.push(provider);
    });
  }
}
function walkProviderTree(container, providersOut, parents, dedup) {
  container = resolveForwardRef(container);
  if (!container)
    return false;
  let defType = null;
  let injDef = getInjectorDef(container);
  const cmpDef = !injDef && getComponentDef(container);
  if (!injDef && !cmpDef) {
    const ngModule = container.ngModule;
    injDef = getInjectorDef(ngModule);
    if (injDef) {
      defType = ngModule;
    } else {
      return false;
    }
  } else if (cmpDef && !cmpDef.standalone) {
    return false;
  } else {
    defType = container;
  }
  if (ngDevMode && parents.indexOf(defType) !== -1) {
    const defName = stringify(defType);
    const path = parents.map(stringify);
    throwCyclicDependencyError(defName, path);
  }
  const isDuplicate = dedup.has(defType);
  if (cmpDef) {
    if (isDuplicate) {
      return false;
    }
    dedup.add(defType);
    if (cmpDef.dependencies) {
      const deps = typeof cmpDef.dependencies === "function" ? cmpDef.dependencies() : cmpDef.dependencies;
      for (const dep of deps) {
        walkProviderTree(dep, providersOut, parents, dedup);
      }
    }
  } else if (injDef) {
    if (injDef.imports != null && !isDuplicate) {
      ngDevMode && parents.push(defType);
      dedup.add(defType);
      let importTypesWithProviders;
      try {
        deepForEach(injDef.imports, (imported) => {
          if (walkProviderTree(imported, providersOut, parents, dedup)) {
            importTypesWithProviders || (importTypesWithProviders = []);
            importTypesWithProviders.push(imported);
          }
        });
      } finally {
        ngDevMode && parents.pop();
      }
      if (importTypesWithProviders !== void 0) {
        processInjectorTypesWithProviders(importTypesWithProviders, providersOut);
      }
    }
    if (!isDuplicate) {
      const factory = getFactoryDef(defType) || (() => new defType());
      providersOut.push(
        // Provider to create `defType` using its factory.
        { provide: defType, useFactory: factory, deps: EMPTY_ARRAY },
        // Make this `defType` available to an internal logic that calculates injector scope.
        { provide: INJECTOR_DEF_TYPES, useValue: defType, multi: true },
        // Provider to eagerly instantiate `defType` via `ENVIRONMENT_INITIALIZER`.
        { provide: ENVIRONMENT_INITIALIZER, useValue: () => \u0275\u0275inject(defType), multi: true }
        //
      );
    }
    const defProviders = injDef.providers;
    if (defProviders != null && !isDuplicate) {
      const injectorType = container;
      deepForEachProvider(defProviders, (provider) => {
        ngDevMode && validateProvider(provider, defProviders, injectorType);
        providersOut.push(provider);
      });
    }
  } else {
    return false;
  }
  return defType !== container && container.providers !== void 0;
}
function validateProvider(provider, providers, containerType) {
  if (isTypeProvider(provider) || isValueProvider(provider) || isFactoryProvider(provider) || isExistingProvider(provider)) {
    return;
  }
  const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
  if (!classRef) {
    throwInvalidProviderError(containerType, providers, provider);
  }
}
function deepForEachProvider(providers, fn) {
  for (let provider of providers) {
    if (isEnvironmentProviders(provider)) {
      provider = provider.\u0275providers;
    }
    if (Array.isArray(provider)) {
      deepForEachProvider(provider, fn);
    } else {
      fn(provider);
    }
  }
}
var USE_VALUE$1 = getClosureSafeProperty({ provide: String, useValue: getClosureSafeProperty });
function isValueProvider(value) {
  return value !== null && typeof value == "object" && USE_VALUE$1 in value;
}
function isExistingProvider(value) {
  return !!(value && value.useExisting);
}
function isFactoryProvider(value) {
  return !!(value && value.useFactory);
}
function isTypeProvider(value) {
  return typeof value === "function";
}
function isClassProvider(value) {
  return !!value.useClass;
}
var INJECTOR_SCOPE = new InjectionToken("Set Injector scope.");
var NOT_YET = {};
var CIRCULAR = {};
var NULL_INJECTOR$1 = void 0;
function getNullInjector() {
  if (NULL_INJECTOR$1 === void 0) {
    NULL_INJECTOR$1 = new NullInjector();
  }
  return NULL_INJECTOR$1;
}
var EnvironmentInjector = class {
};
var R3Injector = class extends EnvironmentInjector {
  /**
   * Flag indicating that this injector was previously destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  constructor(providers, parent, source, scopes) {
    super();
    this.parent = parent;
    this.source = source;
    this.scopes = scopes;
    this.records = /* @__PURE__ */ new Map();
    this._ngOnDestroyHooks = /* @__PURE__ */ new Set();
    this._onDestroyHooks = [];
    this._destroyed = false;
    forEachSingleProvider(providers, (provider) => this.processProvider(provider));
    this.records.set(INJECTOR, makeRecord(void 0, this));
    if (scopes.has("environment")) {
      this.records.set(EnvironmentInjector, makeRecord(void 0, this));
    }
    const record = this.records.get(INJECTOR_SCOPE);
    if (record != null && typeof record.value === "string") {
      this.scopes.add(record.value);
    }
    this.injectorDefTypes = new Set(this.get(INJECTOR_DEF_TYPES.multi, EMPTY_ARRAY, InjectFlags.Self));
  }
  /**
   * Destroy the injector and release references to every instance or provider associated with it.
   *
   * Also calls the `OnDestroy` lifecycle hooks of every instance that was created for which a
   * hook was found.
   */
  destroy() {
    this.assertNotDestroyed();
    this._destroyed = true;
    try {
      for (const service of this._ngOnDestroyHooks) {
        service.ngOnDestroy();
      }
      const onDestroyHooks = this._onDestroyHooks;
      this._onDestroyHooks = [];
      for (const hook of onDestroyHooks) {
        hook();
      }
    } finally {
      this.records.clear();
      this._ngOnDestroyHooks.clear();
      this.injectorDefTypes.clear();
    }
  }
  onDestroy(callback) {
    this.assertNotDestroyed();
    this._onDestroyHooks.push(callback);
    return () => this.removeOnDestroy(callback);
  }
  runInContext(fn) {
    this.assertNotDestroyed();
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(void 0);
    try {
      return fn();
    } finally {
      setCurrentInjector(previousInjector);
      setInjectImplementation(previousInjectImplementation);
    }
  }
  get(token, notFoundValue = THROW_IF_NOT_FOUND, flags = InjectFlags.Default) {
    this.assertNotDestroyed();
    if (token.hasOwnProperty(NG_ENV_ID)) {
      return token[NG_ENV_ID](this);
    }
    flags = convertToBitFlags(flags);
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(void 0);
    try {
      if (!(flags & InjectFlags.SkipSelf)) {
        let record = this.records.get(token);
        if (record === void 0) {
          const def = couldBeInjectableType(token) && getInjectableDef(token);
          if (def && this.injectableDefInScope(def)) {
            record = makeRecord(injectableDefOrInjectorDefFactory(token), NOT_YET);
          } else {
            record = null;
          }
          this.records.set(token, record);
        }
        if (record != null) {
          return this.hydrate(token, record);
        }
      }
      const nextInjector = !(flags & InjectFlags.Self) ? this.parent : getNullInjector();
      notFoundValue = flags & InjectFlags.Optional && notFoundValue === THROW_IF_NOT_FOUND ? null : notFoundValue;
      return nextInjector.get(token, notFoundValue);
    } catch (e) {
      if (e.name === "NullInjectorError") {
        const path = e[NG_TEMP_TOKEN_PATH] = e[NG_TEMP_TOKEN_PATH] || [];
        path.unshift(stringify(token));
        if (previousInjector) {
          throw e;
        } else {
          return catchInjectorError(e, token, "R3InjectorError", this.source);
        }
      } else {
        throw e;
      }
    } finally {
      setInjectImplementation(previousInjectImplementation);
      setCurrentInjector(previousInjector);
    }
  }
  /** @internal */
  resolveInjectorInitializers() {
    const previousInjector = setCurrentInjector(this);
    const previousInjectImplementation = setInjectImplementation(void 0);
    try {
      const initializers = this.get(ENVIRONMENT_INITIALIZER.multi, EMPTY_ARRAY, InjectFlags.Self);
      if (ngDevMode && !Array.isArray(initializers)) {
        throw new RuntimeError(-209, `Unexpected type of the \`ENVIRONMENT_INITIALIZER\` token value (expected an array, but got ${typeof initializers}). Please check that the \`ENVIRONMENT_INITIALIZER\` token is configured as a \`multi: true\` provider.`);
      }
      for (const initializer of initializers) {
        initializer();
      }
    } finally {
      setCurrentInjector(previousInjector);
      setInjectImplementation(previousInjectImplementation);
    }
  }
  toString() {
    const tokens = [];
    const records = this.records;
    for (const token of records.keys()) {
      tokens.push(stringify(token));
    }
    return `R3Injector[${tokens.join(", ")}]`;
  }
  assertNotDestroyed() {
    if (this._destroyed) {
      throw new RuntimeError(205, ngDevMode && "Injector has already been destroyed.");
    }
  }
  /**
   * Process a `SingleProvider` and add it.
   */
  processProvider(provider) {
    provider = resolveForwardRef(provider);
    let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider && provider.provide);
    const record = providerToRecord(provider);
    if (!isTypeProvider(provider) && provider.multi === true) {
      let multiRecord = this.records.get(token);
      if (multiRecord) {
        if (ngDevMode && multiRecord.multi === void 0) {
          throwMixedMultiProviderError();
        }
      } else {
        multiRecord = makeRecord(void 0, NOT_YET, true);
        multiRecord.factory = () => injectArgs(multiRecord.multi);
        this.records.set(token, multiRecord);
      }
      token = provider;
      multiRecord.multi.push(provider);
    } else {
      const existing = this.records.get(token);
      if (ngDevMode && existing && existing.multi !== void 0) {
        throwMixedMultiProviderError();
      }
    }
    this.records.set(token, record);
  }
  hydrate(token, record) {
    if (ngDevMode && record.value === CIRCULAR) {
      throwCyclicDependencyError(stringify(token));
    } else if (record.value === NOT_YET) {
      record.value = CIRCULAR;
      record.value = record.factory();
    }
    if (typeof record.value === "object" && record.value && hasOnDestroy(record.value)) {
      this._ngOnDestroyHooks.add(record.value);
    }
    return record.value;
  }
  injectableDefInScope(def) {
    if (!def.providedIn) {
      return false;
    }
    const providedIn = resolveForwardRef(def.providedIn);
    if (typeof providedIn === "string") {
      return providedIn === "any" || this.scopes.has(providedIn);
    } else {
      return this.injectorDefTypes.has(providedIn);
    }
  }
  removeOnDestroy(callback) {
    const destroyCBIdx = this._onDestroyHooks.indexOf(callback);
    if (destroyCBIdx !== -1) {
      this._onDestroyHooks.splice(destroyCBIdx, 1);
    }
  }
};
function injectableDefOrInjectorDefFactory(token) {
  const injectableDef = getInjectableDef(token);
  const factory = injectableDef !== null ? injectableDef.factory : getFactoryDef(token);
  if (factory !== null) {
    return factory;
  }
  if (token instanceof InjectionToken) {
    throw new RuntimeError(204, ngDevMode && `Token ${stringify(token)} is missing a \u0275prov definition.`);
  }
  if (token instanceof Function) {
    return getUndecoratedInjectableFactory(token);
  }
  throw new RuntimeError(204, ngDevMode && "unreachable");
}
function getUndecoratedInjectableFactory(token) {
  const paramLength = token.length;
  if (paramLength > 0) {
    const args = newArray(paramLength, "?");
    throw new RuntimeError(204, ngDevMode && `Can't resolve all parameters for ${stringify(token)}: (${args.join(", ")}).`);
  }
  const inheritedInjectableDef = getInheritedInjectableDef(token);
  if (inheritedInjectableDef !== null) {
    return () => inheritedInjectableDef.factory(token);
  } else {
    return () => new token();
  }
}
function providerToRecord(provider) {
  if (isValueProvider(provider)) {
    return makeRecord(void 0, provider.useValue);
  } else {
    const factory = providerToFactory(provider);
    return makeRecord(factory, NOT_YET);
  }
}
function providerToFactory(provider, ngModuleType, providers) {
  let factory = void 0;
  if (ngDevMode && isEnvironmentProviders(provider)) {
    throwInvalidProviderError(void 0, providers, provider);
  }
  if (isTypeProvider(provider)) {
    const unwrappedProvider = resolveForwardRef(provider);
    return getFactoryDef(unwrappedProvider) || injectableDefOrInjectorDefFactory(unwrappedProvider);
  } else {
    if (isValueProvider(provider)) {
      factory = () => resolveForwardRef(provider.useValue);
    } else if (isFactoryProvider(provider)) {
      factory = () => provider.useFactory(...injectArgs(provider.deps || []));
    } else if (isExistingProvider(provider)) {
      factory = () => \u0275\u0275inject(resolveForwardRef(provider.useExisting));
    } else {
      const classRef = resolveForwardRef(provider && (provider.useClass || provider.provide));
      if (ngDevMode && !classRef) {
        throwInvalidProviderError(ngModuleType, providers, provider);
      }
      if (hasDeps(provider)) {
        factory = () => new classRef(...injectArgs(provider.deps));
      } else {
        return getFactoryDef(classRef) || injectableDefOrInjectorDefFactory(classRef);
      }
    }
  }
  return factory;
}
function makeRecord(factory, value, multi = false) {
  return {
    factory,
    value,
    multi: multi ? [] : void 0
  };
}
function hasDeps(value) {
  return !!value.deps;
}
function hasOnDestroy(value) {
  return value !== null && typeof value === "object" && typeof value.ngOnDestroy === "function";
}
function couldBeInjectableType(value) {
  return typeof value === "function" || typeof value === "object" && value instanceof InjectionToken;
}
function forEachSingleProvider(providers, fn) {
  for (const provider of providers) {
    if (Array.isArray(provider)) {
      forEachSingleProvider(provider, fn);
    } else if (provider && isEnvironmentProviders(provider)) {
      forEachSingleProvider(provider.\u0275providers, fn);
    } else {
      fn(provider);
    }
  }
}
var APP_ID = new InjectionToken("AppId", {
  providedIn: "root",
  factory: () => DEFAULT_APP_ID
});
var DEFAULT_APP_ID = "ng";
var PLATFORM_INITIALIZER = new InjectionToken("Platform Initializer");
var PLATFORM_ID = new InjectionToken("Platform ID", {
  providedIn: "platform",
  factory: () => "unknown"
  // set a default platform name, when none set explicitly
});
var PACKAGE_ROOT_URL = new InjectionToken("Application Packages Root URL");
var ANIMATION_MODULE_TYPE = new InjectionToken("AnimationModuleType");
var CSP_NONCE = new InjectionToken("CSP nonce", {
  providedIn: "root",
  factory: () => {
    var _a2, _b;
    return ((_b = (_a2 = getDocument().body) == null ? void 0 : _a2.querySelector("[ngCspNonce]")) == null ? void 0 : _b.getAttribute("ngCspNonce")) || null;
  }
});
var ENABLED_SSR_FEATURES = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "ENABLED_SSR_FEATURES" : "", {
  providedIn: "root",
  factory: () => /* @__PURE__ */ new Set()
});
function makeStateKey(key) {
  return key;
}
function initTransferState() {
  const transferState = new TransferState();
  if (inject(PLATFORM_ID) === "browser") {
    transferState.store = retrieveTransferredState(getDocument(), inject(APP_ID));
  }
  return transferState;
}
var _TransferState = class {
  constructor() {
    this.store = {};
    this.onSerializeCallbacks = {};
  }
  /**
   * Get the value corresponding to a key. Return `defaultValue` if key is not found.
   */
  get(key, defaultValue) {
    return this.store[key] !== void 0 ? this.store[key] : defaultValue;
  }
  /**
   * Set the value corresponding to a key.
   */
  set(key, value) {
    this.store[key] = value;
  }
  /**
   * Remove a key from the store.
   */
  remove(key) {
    delete this.store[key];
  }
  /**
   * Test whether a key exists in the store.
   */
  hasKey(key) {
    return this.store.hasOwnProperty(key);
  }
  /**
   * Indicates whether the state is empty.
   */
  get isEmpty() {
    return Object.keys(this.store).length === 0;
  }
  /**
   * Register a callback to provide the value for a key when `toJson` is called.
   */
  onSerialize(key, callback) {
    this.onSerializeCallbacks[key] = callback;
  }
  /**
   * Serialize the current state of the store to JSON.
   */
  toJson() {
    for (const key in this.onSerializeCallbacks) {
      if (this.onSerializeCallbacks.hasOwnProperty(key)) {
        try {
          this.store[key] = this.onSerializeCallbacks[key]();
        } catch (e) {
          console.warn("Exception in onSerialize callback: ", e);
        }
      }
    }
    return JSON.stringify(this.store).replace(/</g, "\\u003C");
  }
};
var TransferState = _TransferState;
/** @nocollapse */
(() => {
  _TransferState.\u0275prov = /** @pureOrBreakMyCode */
  \u0275\u0275defineInjectable({
    token: _TransferState,
    providedIn: "root",
    factory: initTransferState
  });
})();
function retrieveTransferredState(doc, appId) {
  const script = doc.getElementById(appId + "-state");
  if (script == null ? void 0 : script.textContent) {
    try {
      return JSON.parse(script.textContent);
    } catch (e) {
      console.warn("Exception while restoring TransferState for app " + appId, e);
    }
  }
  return {};
}
var REFERENCE_NODE_HOST = "h";
var REFERENCE_NODE_BODY = "b";
var NodeNavigationStep;
(function(NodeNavigationStep2) {
  NodeNavigationStep2["FirstChild"] = "f";
  NodeNavigationStep2["NextSibling"] = "n";
})(NodeNavigationStep || (NodeNavigationStep = {}));
var TRANSFER_STATE_TOKEN_ID = "__\u0275nghData__";
var NGH_DATA_KEY = makeStateKey(TRANSFER_STATE_TOKEN_ID);
var _retrieveHydrationInfoImpl = (rNode, injector) => null;
function retrieveHydrationInfo(rNode, injector) {
  return _retrieveHydrationInfoImpl(rNode, injector);
}
var ComponentRef$1 = class {
};
var ComponentFactory$1 = class {
};
function noComponentFactoryError(component) {
  const error = Error(`No component factory found for ${stringify(component)}.`);
  error[ERROR_COMPONENT] = component;
  return error;
}
var ERROR_COMPONENT = "ngComponent";
var _NullComponentFactoryResolver = class {
  resolveComponentFactory(component) {
    throw noComponentFactoryError(component);
  }
};
var _ComponentFactoryResolver$1 = class {
};
var ComponentFactoryResolver$1 = _ComponentFactoryResolver$1;
(() => {
  _ComponentFactoryResolver$1.NULL = /* @__PURE__ */ new _NullComponentFactoryResolver();
})();
function injectElementRef() {
  return createElementRef(getCurrentTNode(), getLView());
}
function createElementRef(tNode, lView) {
  return new ElementRef(getNativeByTNode(tNode, lView));
}
var _ElementRef = class {
  constructor(nativeElement) {
    this.nativeElement = nativeElement;
  }
};
var ElementRef = _ElementRef;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _ElementRef.__NG_ELEMENT_ID__ = injectElementRef;
})();
function unwrapElementRef(value) {
  return value instanceof ElementRef ? value.nativeElement : value;
}
var RendererFactory2 = class {
};
var _Renderer2 = class {
  constructor() {
    this.destroyNode = null;
  }
};
var Renderer2 = _Renderer2;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _Renderer2.__NG_ELEMENT_ID__ = () => injectRenderer2();
})();
function injectRenderer2() {
  const lView = getLView();
  const tNode = getCurrentTNode();
  const nodeAtIndex = getComponentLViewByIndex(tNode.index, lView);
  return (isLView(nodeAtIndex) ? nodeAtIndex : lView)[RENDERER];
}
var _Sanitizer = class {
};
var Sanitizer = _Sanitizer;
/** @nocollapse */
(() => {
  _Sanitizer.\u0275prov = \u0275\u0275defineInjectable({
    token: _Sanitizer,
    providedIn: "root",
    factory: () => null
  });
})();
var Version = class {
  constructor(full) {
    this.full = full;
    this.major = full.split(".")[0];
    this.minor = full.split(".")[1];
    this.patch = full.split(".").slice(2).join(".");
  }
};
var VERSION = new Version("16.1.1");
var NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR = {};
function markViewDirty(lView) {
  while (lView) {
    lView[FLAGS] |= 64;
    const parent = getLViewParent(lView);
    if (isRootView(lView) && !parent) {
      return lView;
    }
    lView = parent;
  }
  return null;
}
var ERROR_ORIGINAL_ERROR = "ngOriginalError";
function getOriginalError(error) {
  return error[ERROR_ORIGINAL_ERROR];
}
var ErrorHandler = class {
  constructor() {
    this._console = console;
  }
  handleError(error) {
    const originalError = this._findOriginalError(error);
    this._console.error("ERROR", error);
    if (originalError) {
      this._console.error("ORIGINAL ERROR", originalError);
    }
  }
  /** @internal */
  _findOriginalError(error) {
    let e = error && getOriginalError(error);
    while (e && getOriginalError(e)) {
      e = getOriginalError(e);
    }
    return e || null;
  }
};
var IS_HYDRATION_DOM_REUSE_ENABLED = new InjectionToken(typeof ngDevMode === "undefined" || !!ngDevMode ? "IS_HYDRATION_DOM_REUSE_ENABLED" : "");
var PRESERVE_HOST_CONTENT_DEFAULT = false;
var PRESERVE_HOST_CONTENT = new InjectionToken(typeof ngDevMode === "undefined" || !!ngDevMode ? "PRESERVE_HOST_CONTENT" : "", {
  providedIn: "root",
  factory: () => PRESERVE_HOST_CONTENT_DEFAULT
});
function normalizeDebugBindingName(name) {
  name = camelCaseToDashCase(name.replace(/[$@]/g, "_"));
  return `ng-reflect-${name}`;
}
var CAMEL_CASE_REGEXP = /([A-Z])/g;
function camelCaseToDashCase(input) {
  return input.replace(CAMEL_CASE_REGEXP, (...m) => "-" + m[1].toLowerCase());
}
function normalizeDebugBindingValue(value) {
  try {
    return value != null ? value.toString().slice(0, 30) : value;
  } catch (e) {
    return "[ERROR] Exception while trying to serialize the value";
  }
}
function \u0275\u0275resolveWindow(element) {
  return element.ownerDocument.defaultView;
}
function \u0275\u0275resolveDocument(element) {
  return element.ownerDocument;
}
function \u0275\u0275resolveBody(element) {
  return element.ownerDocument.body;
}
var INTERPOLATION_DELIMITER = `\uFFFD`;
function maybeUnwrapFn(value) {
  if (value instanceof Function) {
    return value();
  } else {
    return value;
  }
}
var VALUE_STRING_LENGTH_LIMIT = 200;
function throwMultipleComponentError(tNode, first2, second) {
  throw new RuntimeError(-300, `Multiple components match node with tagname ${tNode.value}: ${stringifyForError(first2)} and ${stringifyForError(second)}`);
}
function throwErrorIfNoChangesMode(creationMode, oldValue, currValue, propName, lView) {
  var _a2;
  const hostComponentDef = getDeclarationComponentDef(lView);
  const componentClassName = (_a2 = hostComponentDef == null ? void 0 : hostComponentDef.type) == null ? void 0 : _a2.name;
  const field = propName ? ` for '${propName}'` : "";
  let msg = `ExpressionChangedAfterItHasBeenCheckedError: Expression has changed after it was checked. Previous value${field}: '${formatValue(oldValue)}'. Current value: '${formatValue(currValue)}'.${componentClassName ? ` Expression location: ${componentClassName} component` : ""}`;
  if (creationMode) {
    msg += ` It seems like the view has been created after its parent and its children have been dirty checked. Has it been created in a change detection hook?`;
  }
  throw new RuntimeError(-100, msg);
}
function formatValue(value) {
  let strValue = String(value);
  try {
    if (Array.isArray(value) || strValue === "[object Object]") {
      strValue = JSON.stringify(value);
    }
  } catch (error) {
  }
  return strValue.length > VALUE_STRING_LENGTH_LIMIT ? strValue.substring(0, VALUE_STRING_LENGTH_LIMIT) + "\u2026" : strValue;
}
function constructDetailsForInterpolation(lView, rootIndex, expressionIndex, meta, changedValue) {
  const [propName, prefix, ...chunks] = meta.split(INTERPOLATION_DELIMITER);
  let oldValue = prefix, newValue = prefix;
  for (let i = 0; i < chunks.length; i++) {
    const slotIdx = rootIndex + i;
    oldValue += `${lView[slotIdx]}${chunks[i]}`;
    newValue += `${slotIdx === expressionIndex ? changedValue : lView[slotIdx]}${chunks[i]}`;
  }
  return { propName, oldValue, newValue };
}
function getExpressionChangedErrorDetails(lView, bindingIndex, oldValue, newValue) {
  const tData = lView[TVIEW].data;
  const metadata = tData[bindingIndex];
  if (typeof metadata === "string") {
    if (metadata.indexOf(INTERPOLATION_DELIMITER) > -1) {
      return constructDetailsForInterpolation(lView, bindingIndex, bindingIndex, metadata, newValue);
    }
    return { propName: metadata, oldValue, newValue };
  }
  if (metadata === null) {
    let idx = bindingIndex - 1;
    while (typeof tData[idx] !== "string" && tData[idx + 1] === null) {
      idx--;
    }
    const meta = tData[idx];
    if (typeof meta === "string") {
      const matches = meta.match(new RegExp(INTERPOLATION_DELIMITER, "g"));
      if (matches && matches.length - 1 > bindingIndex - idx) {
        return constructDetailsForInterpolation(lView, idx, bindingIndex, meta, newValue);
      }
    }
  }
  return { propName: void 0, oldValue, newValue };
}
var ReactiveLViewConsumer = class extends ReactiveNode {
  constructor() {
    super(...arguments);
    this.consumerAllowSignalWrites = false;
    this._lView = null;
  }
  set lView(lView) {
    (typeof ngDevMode === "undefined" || ngDevMode) && assertEqual(this._lView, null, "Consumer already associated with a view.");
    this._lView = lView;
  }
  onConsumerDependencyMayHaveChanged() {
    (typeof ngDevMode === "undefined" || ngDevMode) && assertDefined(this._lView, "Updating a signal during template or host binding execution is not allowed.");
    markViewDirty(this._lView);
  }
  onProducerUpdateValueVersion() {
  }
  get hasReadASignal() {
    return this.hasProducers;
  }
  runInContext(fn, rf, ctx) {
    const prevConsumer = setActiveConsumer(this);
    this.trackingVersion++;
    try {
      fn(rf, ctx);
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
  destroy() {
    this.trackingVersion++;
  }
};
var currentConsumer = null;
function getOrCreateCurrentLViewConsumer() {
  currentConsumer != null ? currentConsumer : currentConsumer = new ReactiveLViewConsumer();
  return currentConsumer;
}
function getReactiveLViewConsumer(lView, slot) {
  var _a2;
  return (_a2 = lView[slot]) != null ? _a2 : getOrCreateCurrentLViewConsumer();
}
function commitLViewConsumerIfHasProducers(lView, slot) {
  const consumer = getOrCreateCurrentLViewConsumer();
  if (!consumer.hasReadASignal) {
    return;
  }
  lView[slot] = currentConsumer;
  consumer.lView = lView;
  currentConsumer = new ReactiveLViewConsumer();
}
var NO_CHANGE = typeof ngDevMode === "undefined" || ngDevMode ? { __brand__: "NO_CHANGE" } : {};
function \u0275\u0275advance(delta) {
  ngDevMode && assertGreaterThan(delta, 0, "Can only advance forward");
  selectIndexInternal(getTView(), getLView(), getSelectedIndex() + delta, !!ngDevMode && isInCheckNoChangesMode());
}
function selectIndexInternal(tView, lView, index, checkNoChangesMode) {
  ngDevMode && assertIndexInDeclRange(lView, index);
  if (!checkNoChangesMode) {
    const hooksInitPhaseCompleted = (lView[FLAGS] & 3) === 3;
    if (hooksInitPhaseCompleted) {
      const preOrderCheckHooks = tView.preOrderCheckHooks;
      if (preOrderCheckHooks !== null) {
        executeCheckHooks(lView, preOrderCheckHooks, index);
      }
    } else {
      const preOrderHooks = tView.preOrderHooks;
      if (preOrderHooks !== null) {
        executeInitAndCheckHooks(lView, preOrderHooks, 0, index);
      }
    }
  }
  setSelectedIndex(index);
}
var angularCoreDiEnv = {
  "\u0275\u0275defineInjectable": \u0275\u0275defineInjectable,
  "\u0275\u0275defineInjector": \u0275\u0275defineInjector,
  "\u0275\u0275inject": \u0275\u0275inject,
  "\u0275\u0275invalidFactoryDep": \u0275\u0275invalidFactoryDep,
  "resolveForwardRef": resolveForwardRef
};
function compileInjectable(type, meta) {
  let ngInjectableDef = null;
  let ngFactoryDef = null;
  if (!type.hasOwnProperty(NG_PROV_DEF)) {
    Object.defineProperty(type, NG_PROV_DEF, {
      get: () => {
        if (ngInjectableDef === null) {
          const compiler = getCompilerFacade({ usage: 0, kind: "injectable", type });
          ngInjectableDef = compiler.compileInjectable(angularCoreDiEnv, `ng:///${type.name}/\u0275prov.js`, getInjectableMetadata(type, meta));
        }
        return ngInjectableDef;
      }
    });
  }
  if (!type.hasOwnProperty(NG_FACTORY_DEF)) {
    Object.defineProperty(type, NG_FACTORY_DEF, {
      get: () => {
        if (ngFactoryDef === null) {
          const compiler = getCompilerFacade({ usage: 0, kind: "injectable", type });
          ngFactoryDef = compiler.compileFactory(angularCoreDiEnv, `ng:///${type.name}/\u0275fac.js`, {
            name: type.name,
            type,
            typeArgumentCount: 0,
            deps: reflectDependencies(type),
            target: compiler.FactoryTarget.Injectable
          });
        }
        return ngFactoryDef;
      },
      // Leave this configurable so that the factories from directives or pipes can take precedence.
      configurable: true
    });
  }
}
var USE_VALUE = getClosureSafeProperty({ provide: String, useValue: getClosureSafeProperty });
function isUseClassProvider(meta) {
  return meta.useClass !== void 0;
}
function isUseValueProvider(meta) {
  return USE_VALUE in meta;
}
function isUseFactoryProvider(meta) {
  return meta.useFactory !== void 0;
}
function isUseExistingProvider(meta) {
  return meta.useExisting !== void 0;
}
function getInjectableMetadata(type, srcMeta) {
  const meta = srcMeta || { providedIn: null };
  const compilerMeta = {
    name: type.name,
    type,
    typeArgumentCount: 0,
    providedIn: meta.providedIn
  };
  if ((isUseClassProvider(meta) || isUseFactoryProvider(meta)) && meta.deps !== void 0) {
    compilerMeta.deps = convertDependencies(meta.deps);
  }
  if (isUseClassProvider(meta)) {
    compilerMeta.useClass = meta.useClass;
  } else if (isUseValueProvider(meta)) {
    compilerMeta.useValue = meta.useValue;
  } else if (isUseFactoryProvider(meta)) {
    compilerMeta.useFactory = meta.useFactory;
  } else if (isUseExistingProvider(meta)) {
    compilerMeta.useExisting = meta.useExisting;
  }
  return compilerMeta;
}
var Injectable = makeDecorator("Injectable", void 0, void 0, void 0, (type, meta) => compileInjectable(type, meta));
function createInjector(defType, parent = null, additionalProviders = null, name) {
  const injector = createInjectorWithoutInjectorInstances(defType, parent, additionalProviders, name);
  injector.resolveInjectorInitializers();
  return injector;
}
function createInjectorWithoutInjectorInstances(defType, parent = null, additionalProviders = null, name, scopes = /* @__PURE__ */ new Set()) {
  const providers = [
    additionalProviders || EMPTY_ARRAY,
    importProvidersFrom(defType)
  ];
  name = name || (typeof defType === "object" ? void 0 : stringify(defType));
  return new R3Injector(providers, parent || getNullInjector(), name || null, scopes);
}
var _Injector = class {
  static create(options, parent) {
    var _a2;
    if (Array.isArray(options)) {
      return createInjector({ name: "" }, parent, options, "");
    } else {
      const name = (_a2 = options.name) != null ? _a2 : "";
      return createInjector({ name }, options.parent, options.providers, name);
    }
  }
};
var Injector = _Injector;
(() => {
  _Injector.THROW_IF_NOT_FOUND = THROW_IF_NOT_FOUND;
})();
(() => {
  _Injector.NULL = /* @__PURE__ */ new NullInjector();
})();
/** @nocollapse */
(() => {
  _Injector.\u0275prov = \u0275\u0275defineInjectable({
    token: _Injector,
    providedIn: "any",
    factory: () => \u0275\u0275inject(INJECTOR)
  });
})();
/**
 * @internal
 * @nocollapse
 */
(() => {
  _Injector.__NG_ELEMENT_ID__ = -1;
})();
function \u0275\u0275directiveInject(token, flags = InjectFlags.Default) {
  const lView = getLView();
  if (lView === null) {
    ngDevMode && assertInjectImplementationNotEqual(\u0275\u0275directiveInject);
    return \u0275\u0275inject(token, flags);
  }
  const tNode = getCurrentTNode();
  return getOrCreateInjectable(tNode, lView, resolveForwardRef(token), flags);
}
function \u0275\u0275invalidFactory() {
  const msg = ngDevMode ? `This constructor was not compatible with Dependency Injection.` : "invalid";
  throw new Error(msg);
}
function processHostBindingOpCodes(tView, lView) {
  const hostBindingOpCodes = tView.hostBindingOpCodes;
  if (hostBindingOpCodes === null)
    return;
  const consumer = getReactiveLViewConsumer(lView, REACTIVE_HOST_BINDING_CONSUMER);
  try {
    for (let i = 0; i < hostBindingOpCodes.length; i++) {
      const opCode = hostBindingOpCodes[i];
      if (opCode < 0) {
        setSelectedIndex(~opCode);
      } else {
        const directiveIdx = opCode;
        const bindingRootIndx = hostBindingOpCodes[++i];
        const hostBindingFn = hostBindingOpCodes[++i];
        setBindingRootForHostBindings(bindingRootIndx, directiveIdx);
        const context = lView[directiveIdx];
        consumer.runInContext(hostBindingFn, 2, context);
      }
    }
  } finally {
    if (lView[REACTIVE_HOST_BINDING_CONSUMER] === null) {
      commitLViewConsumerIfHasProducers(lView, REACTIVE_HOST_BINDING_CONSUMER);
    }
    setSelectedIndex(-1);
  }
}
function createLView(parentLView, tView, context, flags, host, tHostNode, environment, renderer, injector, embeddedViewInjector, hydrationInfo) {
  const lView = tView.blueprint.slice();
  lView[HOST] = host;
  lView[FLAGS] = flags | 4 | 128 | 8;
  if (embeddedViewInjector !== null || parentLView && parentLView[FLAGS] & 2048) {
    lView[FLAGS] |= 2048;
  }
  resetPreOrderHookFlags(lView);
  ngDevMode && tView.declTNode && parentLView && assertTNodeForLView(tView.declTNode, parentLView);
  lView[PARENT] = lView[DECLARATION_VIEW] = parentLView;
  lView[CONTEXT] = context;
  lView[ENVIRONMENT] = environment || parentLView && parentLView[ENVIRONMENT];
  ngDevMode && assertDefined(lView[ENVIRONMENT], "LViewEnvironment is required");
  lView[RENDERER] = renderer || parentLView && parentLView[RENDERER];
  ngDevMode && assertDefined(lView[RENDERER], "Renderer is required");
  lView[INJECTOR$1] = injector || parentLView && parentLView[INJECTOR$1] || null;
  lView[T_HOST] = tHostNode;
  lView[ID] = getUniqueLViewId();
  lView[HYDRATION] = hydrationInfo;
  lView[EMBEDDED_VIEW_INJECTOR] = embeddedViewInjector;
  ngDevMode && assertEqual(tView.type == 2 ? parentLView !== null : true, true, "Embedded views must have parentLView");
  lView[DECLARATION_COMPONENT_VIEW] = tView.type == 2 ? parentLView[DECLARATION_COMPONENT_VIEW] : lView;
  return lView;
}
function getOrCreateTNode(tView, index, type, name, attrs) {
  ngDevMode && index !== 0 && // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  assertGreaterThanOrEqual(index, HEADER_OFFSET, "TNodes can't be in the LView header.");
  ngDevMode && assertPureTNodeType(type);
  let tNode = tView.data[index];
  if (tNode === null) {
    tNode = createTNodeAtIndex(tView, index, type, name, attrs);
    if (isInI18nBlock()) {
      tNode.flags |= 32;
    }
  } else if (tNode.type & 64) {
    tNode.type = type;
    tNode.value = name;
    tNode.attrs = attrs;
    const parent = getCurrentParentTNode();
    tNode.injectorIndex = parent === null ? -1 : parent.injectorIndex;
    ngDevMode && assertTNodeForTView(tNode, tView);
    ngDevMode && assertEqual(index, tNode.index, "Expecting same index");
  }
  setCurrentTNode(tNode, true);
  return tNode;
}
function createTNodeAtIndex(tView, index, type, name, attrs) {
  const currentTNode = getCurrentTNodePlaceholderOk();
  const isParent = isCurrentTNodeParent();
  const parent = isParent ? currentTNode : currentTNode && currentTNode.parent;
  const tNode = tView.data[index] = createTNode(tView, parent, type, index, name, attrs);
  if (tView.firstChild === null) {
    tView.firstChild = tNode;
  }
  if (currentTNode !== null) {
    if (isParent) {
      if (currentTNode.child == null && tNode.parent !== null) {
        currentTNode.child = tNode;
      }
    } else {
      if (currentTNode.next === null) {
        currentTNode.next = tNode;
        tNode.prev = currentTNode;
      }
    }
  }
  return tNode;
}
function allocExpando(tView, lView, numSlotsToAlloc, initialValue) {
  if (numSlotsToAlloc === 0)
    return -1;
  if (ngDevMode) {
    assertFirstCreatePass(tView);
    assertSame(tView, lView[TVIEW], "`LView` must be associated with `TView`!");
    assertEqual(tView.data.length, lView.length, "Expecting LView to be same size as TView");
    assertEqual(tView.data.length, tView.blueprint.length, "Expecting Blueprint to be same size as TView");
    assertFirstUpdatePass(tView);
  }
  const allocIdx = lView.length;
  for (let i = 0; i < numSlotsToAlloc; i++) {
    lView.push(initialValue);
    tView.blueprint.push(initialValue);
    tView.data.push(null);
  }
  return allocIdx;
}
function executeTemplate(tView, lView, templateFn, rf, context) {
  const consumer = getReactiveLViewConsumer(lView, REACTIVE_TEMPLATE_CONSUMER);
  const prevSelectedIndex = getSelectedIndex();
  const isUpdatePhase = rf & 2;
  try {
    setSelectedIndex(-1);
    if (isUpdatePhase && lView.length > HEADER_OFFSET) {
      selectIndexInternal(tView, lView, HEADER_OFFSET, !!ngDevMode && isInCheckNoChangesMode());
    }
    const preHookType = isUpdatePhase ? 2 : 0;
    profiler(preHookType, context);
    if (isUpdatePhase) {
      consumer.runInContext(templateFn, rf, context);
    } else {
      const prevConsumer = setActiveConsumer(null);
      try {
        templateFn(rf, context);
      } finally {
        setActiveConsumer(prevConsumer);
      }
    }
  } finally {
    if (isUpdatePhase && lView[REACTIVE_TEMPLATE_CONSUMER] === null) {
      commitLViewConsumerIfHasProducers(lView, REACTIVE_TEMPLATE_CONSUMER);
    }
    setSelectedIndex(prevSelectedIndex);
    const postHookType = isUpdatePhase ? 3 : 1;
    profiler(postHookType, context);
  }
}
function executeContentQueries(tView, tNode, lView) {
  if (isContentQueryHost(tNode)) {
    const prevConsumer = setActiveConsumer(null);
    try {
      const start = tNode.directiveStart;
      const end = tNode.directiveEnd;
      for (let directiveIndex = start; directiveIndex < end; directiveIndex++) {
        const def = tView.data[directiveIndex];
        if (def.contentQueries) {
          def.contentQueries(1, lView[directiveIndex], directiveIndex);
        }
      }
    } finally {
      setActiveConsumer(prevConsumer);
    }
  }
}
function createDirectivesInstances(tView, lView, tNode) {
  if (!getBindingsEnabled())
    return;
  instantiateAllDirectives(tView, lView, tNode, getNativeByTNode(tNode, lView));
  if ((tNode.flags & 64) === 64) {
    invokeDirectivesHostBindings(tView, lView, tNode);
  }
}
function saveResolvedLocalsInData(viewData, tNode, localRefExtractor = getNativeByTNode) {
  const localNames = tNode.localNames;
  if (localNames !== null) {
    let localIndex = tNode.index + 1;
    for (let i = 0; i < localNames.length; i += 2) {
      const index = localNames[i + 1];
      const value = index === -1 ? localRefExtractor(tNode, viewData) : viewData[index];
      viewData[localIndex++] = value;
    }
  }
}
function getOrCreateComponentTView(def) {
  const tView = def.tView;
  if (tView === null || tView.incompleteFirstPass) {
    const declTNode = null;
    return def.tView = createTView(1, declTNode, def.template, def.decls, def.vars, def.directiveDefs, def.pipeDefs, def.viewQuery, def.schemas, def.consts, def.id);
  }
  return tView;
}
function createTView(type, declTNode, templateFn, decls, vars, directives, pipes, viewQuery, schemas, constsOrFactory, ssrId) {
  ngDevMode && ngDevMode.tView++;
  const bindingStartIndex = HEADER_OFFSET + decls;
  const initialViewLength = bindingStartIndex + vars;
  const blueprint = createViewBlueprint(bindingStartIndex, initialViewLength);
  const consts = typeof constsOrFactory === "function" ? constsOrFactory() : constsOrFactory;
  const tView = blueprint[TVIEW] = {
    type,
    blueprint,
    template: templateFn,
    queries: null,
    viewQuery,
    declTNode,
    data: blueprint.slice().fill(null, bindingStartIndex),
    bindingStartIndex,
    expandoStartIndex: initialViewLength,
    hostBindingOpCodes: null,
    firstCreatePass: true,
    firstUpdatePass: true,
    staticViewQueries: false,
    staticContentQueries: false,
    preOrderHooks: null,
    preOrderCheckHooks: null,
    contentHooks: null,
    contentCheckHooks: null,
    viewHooks: null,
    viewCheckHooks: null,
    destroyHooks: null,
    cleanup: null,
    contentQueries: null,
    components: null,
    directiveRegistry: typeof directives === "function" ? directives() : directives,
    pipeRegistry: typeof pipes === "function" ? pipes() : pipes,
    firstChild: null,
    schemas,
    consts,
    incompleteFirstPass: false,
    ssrId
  };
  if (ngDevMode) {
    Object.seal(tView);
  }
  return tView;
}
function createViewBlueprint(bindingStartIndex, initialViewLength) {
  const blueprint = [];
  for (let i = 0; i < initialViewLength; i++) {
    blueprint.push(i < bindingStartIndex ? null : NO_CHANGE);
  }
  return blueprint;
}
function locateHostElement(renderer, elementOrSelector, encapsulation, injector) {
  const preserveHostContent = injector.get(PRESERVE_HOST_CONTENT, PRESERVE_HOST_CONTENT_DEFAULT);
  const preserveContent = preserveHostContent || encapsulation === ViewEncapsulation$1.ShadowDom;
  const rootElement = renderer.selectRootElement(elementOrSelector, preserveContent);
  applyRootElementTransform(rootElement);
  return rootElement;
}
function applyRootElementTransform(rootElement) {
  _applyRootElementTransformImpl(rootElement);
}
var _applyRootElementTransformImpl = (rootElement) => null;
function storeCleanupWithContext(tView, lView, context, cleanupFn) {
  const lCleanup = getOrCreateLViewCleanup(lView);
  ngDevMode && assertDefined(context, "Cleanup context is mandatory when registering framework-level destroy hooks");
  lCleanup.push(context);
  if (tView.firstCreatePass) {
    getOrCreateTViewCleanup(tView).push(cleanupFn, lCleanup.length - 1);
  } else {
    if (ngDevMode) {
      Object.freeze(getOrCreateTViewCleanup(tView));
    }
  }
}
function createTNode(tView, tParent, type, index, value, attrs) {
  ngDevMode && index !== 0 && // 0 are bogus nodes and they are OK. See `createContainerRef` in
  // `view_engine_compatibility` for additional context.
  assertGreaterThanOrEqual(index, HEADER_OFFSET, "TNodes can't be in the LView header.");
  ngDevMode && assertNotSame(attrs, void 0, "'undefined' is not valid value for 'attrs'");
  ngDevMode && ngDevMode.tNode++;
  ngDevMode && tParent && assertTNodeForTView(tParent, tView);
  let injectorIndex = tParent ? tParent.injectorIndex : -1;
  let flags = 0;
  if (isInSkipHydrationBlock$1()) {
    flags |= 128;
  }
  const tNode = {
    type,
    index,
    insertBeforeIndex: null,
    injectorIndex,
    directiveStart: -1,
    directiveEnd: -1,
    directiveStylingLast: -1,
    componentOffset: -1,
    propertyBindings: null,
    flags,
    providerIndexes: 0,
    value,
    attrs,
    mergedAttrs: null,
    localNames: null,
    initialInputs: void 0,
    inputs: null,
    outputs: null,
    tView: null,
    next: null,
    prev: null,
    projectionNext: null,
    child: null,
    parent: tParent,
    projection: null,
    styles: null,
    stylesWithoutHost: null,
    residualStyles: void 0,
    classes: null,
    classesWithoutHost: null,
    residualClasses: void 0,
    classBindings: 0,
    styleBindings: 0
  };
  if (ngDevMode) {
    Object.seal(tNode);
  }
  return tNode;
}
function generatePropertyAliases(aliasMap, directiveIndex, propertyAliases, hostDirectiveAliasMap) {
  for (let publicName in aliasMap) {
    if (aliasMap.hasOwnProperty(publicName)) {
      propertyAliases = propertyAliases === null ? {} : propertyAliases;
      const internalName = aliasMap[publicName];
      if (hostDirectiveAliasMap === null) {
        addPropertyAlias(propertyAliases, directiveIndex, publicName, internalName);
      } else if (hostDirectiveAliasMap.hasOwnProperty(publicName)) {
        addPropertyAlias(propertyAliases, directiveIndex, hostDirectiveAliasMap[publicName], internalName);
      }
    }
  }
  return propertyAliases;
}
function addPropertyAlias(propertyAliases, directiveIndex, publicName, internalName) {
  if (propertyAliases.hasOwnProperty(publicName)) {
    propertyAliases[publicName].push(directiveIndex, internalName);
  } else {
    propertyAliases[publicName] = [directiveIndex, internalName];
  }
}
function initializeInputAndOutputAliases(tView, tNode, hostDirectiveDefinitionMap) {
  ngDevMode && assertFirstCreatePass(tView);
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  const tViewData = tView.data;
  const tNodeAttrs = tNode.attrs;
  const inputsFromAttrs = [];
  let inputsStore = null;
  let outputsStore = null;
  for (let directiveIndex = start; directiveIndex < end; directiveIndex++) {
    const directiveDef = tViewData[directiveIndex];
    const aliasData = hostDirectiveDefinitionMap ? hostDirectiveDefinitionMap.get(directiveDef) : null;
    const aliasedInputs = aliasData ? aliasData.inputs : null;
    const aliasedOutputs = aliasData ? aliasData.outputs : null;
    inputsStore = generatePropertyAliases(directiveDef.inputs, directiveIndex, inputsStore, aliasedInputs);
    outputsStore = generatePropertyAliases(directiveDef.outputs, directiveIndex, outputsStore, aliasedOutputs);
    const initialInputs = inputsStore !== null && tNodeAttrs !== null && !isInlineTemplate(tNode) ? generateInitialInputs(inputsStore, directiveIndex, tNodeAttrs) : null;
    inputsFromAttrs.push(initialInputs);
  }
  if (inputsStore !== null) {
    if (inputsStore.hasOwnProperty("class")) {
      tNode.flags |= 8;
    }
    if (inputsStore.hasOwnProperty("style")) {
      tNode.flags |= 16;
    }
  }
  tNode.initialInputs = inputsFromAttrs;
  tNode.inputs = inputsStore;
  tNode.outputs = outputsStore;
}
function mapPropName(name) {
  if (name === "class")
    return "className";
  if (name === "for")
    return "htmlFor";
  if (name === "formaction")
    return "formAction";
  if (name === "innerHtml")
    return "innerHTML";
  if (name === "readonly")
    return "readOnly";
  if (name === "tabindex")
    return "tabIndex";
  return name;
}
function elementPropertyInternal(tView, tNode, lView, propName, value, renderer, sanitizer, nativeOnly) {
  ngDevMode && assertNotSame(value, NO_CHANGE, "Incoming value should never be NO_CHANGE.");
  const element = getNativeByTNode(tNode, lView);
  let inputData = tNode.inputs;
  let dataValue;
  if (!nativeOnly && inputData != null && (dataValue = inputData[propName])) {
    setInputsForProperty(tView, lView, dataValue, propName, value);
    if (isComponentHost(tNode))
      markDirtyIfOnPush(lView, tNode.index);
    if (ngDevMode) {
      setNgReflectProperties(lView, element, tNode.type, dataValue, value);
    }
  } else if (tNode.type & 3) {
    propName = mapPropName(propName);
    if (ngDevMode) {
      validateAgainstEventProperties(propName);
      if (!isPropertyValid(element, propName, tNode.value, tView.schemas)) {
        handleUnknownPropertyError(propName, tNode.value, tNode.type, lView);
      }
      ngDevMode.rendererSetProperty++;
    }
    value = sanitizer != null ? sanitizer(value, tNode.value || "", propName) : value;
    renderer.setProperty(element, propName, value);
  } else if (tNode.type & 12) {
    if (ngDevMode && !matchingSchemas(tView.schemas, tNode.value)) {
      handleUnknownPropertyError(propName, tNode.value, tNode.type, lView);
    }
  }
}
function markDirtyIfOnPush(lView, viewIndex) {
  ngDevMode && assertLView(lView);
  const childComponentLView = getComponentLViewByIndex(viewIndex, lView);
  if (!(childComponentLView[FLAGS] & 16)) {
    childComponentLView[FLAGS] |= 64;
  }
}
function setNgReflectProperty(lView, element, type, attrName, value) {
  const renderer = lView[RENDERER];
  attrName = normalizeDebugBindingName(attrName);
  const debugValue = normalizeDebugBindingValue(value);
  if (type & 3) {
    if (value == null) {
      renderer.removeAttribute(element, attrName);
    } else {
      renderer.setAttribute(element, attrName, debugValue);
    }
  } else {
    const textContent = escapeCommentText(`bindings=${JSON.stringify({ [attrName]: debugValue }, null, 2)}`);
    renderer.setValue(element, textContent);
  }
}
function setNgReflectProperties(lView, element, type, dataValue, value) {
  if (type & (3 | 4)) {
    for (let i = 0; i < dataValue.length; i += 2) {
      setNgReflectProperty(lView, element, type, dataValue[i + 1], value);
    }
  }
}
function resolveDirectives(tView, lView, tNode, localRefs) {
  ngDevMode && assertFirstCreatePass(tView);
  if (getBindingsEnabled()) {
    const exportsMap = localRefs === null ? null : { "": -1 };
    const matchResult = findDirectiveDefMatches(tView, tNode);
    let directiveDefs;
    let hostDirectiveDefs;
    if (matchResult === null) {
      directiveDefs = hostDirectiveDefs = null;
    } else {
      [directiveDefs, hostDirectiveDefs] = matchResult;
    }
    if (directiveDefs !== null) {
      initializeDirectives(tView, lView, tNode, directiveDefs, exportsMap, hostDirectiveDefs);
    }
    if (exportsMap)
      cacheMatchingLocalNames(tNode, localRefs, exportsMap);
  }
  tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, tNode.attrs);
}
function initializeDirectives(tView, lView, tNode, directives, exportsMap, hostDirectiveDefs) {
  var _a2, _b;
  ngDevMode && assertFirstCreatePass(tView);
  for (let i = 0; i < directives.length; i++) {
    diPublicInInjector(getOrCreateNodeInjectorForNode(tNode, lView), tView, directives[i].type);
  }
  initTNodeFlags(tNode, tView.data.length, directives.length);
  for (let i = 0; i < directives.length; i++) {
    const def = directives[i];
    if (def.providersResolver)
      def.providersResolver(def);
  }
  let preOrderHooksFound = false;
  let preOrderCheckHooksFound = false;
  let directiveIdx = allocExpando(tView, lView, directives.length, null);
  ngDevMode && assertSame(directiveIdx, tNode.directiveStart, "TNode.directiveStart should point to just allocated space");
  for (let i = 0; i < directives.length; i++) {
    const def = directives[i];
    tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, def.hostAttrs);
    configureViewWithDirective(tView, tNode, lView, directiveIdx, def);
    saveNameToExportMap(directiveIdx, def, exportsMap);
    if (def.contentQueries !== null)
      tNode.flags |= 4;
    if (def.hostBindings !== null || def.hostAttrs !== null || def.hostVars !== 0)
      tNode.flags |= 64;
    const lifeCycleHooks = def.type.prototype;
    if (!preOrderHooksFound && (lifeCycleHooks.ngOnChanges || lifeCycleHooks.ngOnInit || lifeCycleHooks.ngDoCheck)) {
      ((_a2 = tView.preOrderHooks) != null ? _a2 : tView.preOrderHooks = []).push(tNode.index);
      preOrderHooksFound = true;
    }
    if (!preOrderCheckHooksFound && (lifeCycleHooks.ngOnChanges || lifeCycleHooks.ngDoCheck)) {
      ((_b = tView.preOrderCheckHooks) != null ? _b : tView.preOrderCheckHooks = []).push(tNode.index);
      preOrderCheckHooksFound = true;
    }
    directiveIdx++;
  }
  initializeInputAndOutputAliases(tView, tNode, hostDirectiveDefs);
}
function registerHostBindingOpCodes(tView, tNode, directiveIdx, directiveVarsIdx, def) {
  ngDevMode && assertFirstCreatePass(tView);
  const hostBindings = def.hostBindings;
  if (hostBindings) {
    let hostBindingOpCodes = tView.hostBindingOpCodes;
    if (hostBindingOpCodes === null) {
      hostBindingOpCodes = tView.hostBindingOpCodes = [];
    }
    const elementIndx = ~tNode.index;
    if (lastSelectedElementIdx(hostBindingOpCodes) != elementIndx) {
      hostBindingOpCodes.push(elementIndx);
    }
    hostBindingOpCodes.push(directiveIdx, directiveVarsIdx, hostBindings);
  }
}
function lastSelectedElementIdx(hostBindingOpCodes) {
  let i = hostBindingOpCodes.length;
  while (i > 0) {
    const value = hostBindingOpCodes[--i];
    if (typeof value === "number" && value < 0) {
      return value;
    }
  }
  return 0;
}
function instantiateAllDirectives(tView, lView, tNode, native) {
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  if (isComponentHost(tNode)) {
    ngDevMode && assertTNodeType(
      tNode,
      3
      /* TNodeType.AnyRNode */
    );
    addComponentLogic(lView, tNode, tView.data[start + tNode.componentOffset]);
  }
  if (!tView.firstCreatePass) {
    getOrCreateNodeInjectorForNode(tNode, lView);
  }
  attachPatchData(native, lView);
  const initialInputs = tNode.initialInputs;
  for (let i = start; i < end; i++) {
    const def = tView.data[i];
    const directive = getNodeInjectable(lView, tView, i, tNode);
    attachPatchData(directive, lView);
    if (initialInputs !== null) {
      setInputsFromAttrs(lView, i - start, directive, def, tNode, initialInputs);
    }
    if (isComponentDef(def)) {
      const componentView = getComponentLViewByIndex(tNode.index, lView);
      componentView[CONTEXT] = getNodeInjectable(lView, tView, i, tNode);
    }
  }
}
function invokeDirectivesHostBindings(tView, lView, tNode) {
  const start = tNode.directiveStart;
  const end = tNode.directiveEnd;
  const elementIndex = tNode.index;
  const currentDirectiveIndex = getCurrentDirectiveIndex();
  try {
    setSelectedIndex(elementIndex);
    for (let dirIndex = start; dirIndex < end; dirIndex++) {
      const def = tView.data[dirIndex];
      const directive = lView[dirIndex];
      setCurrentDirectiveIndex(dirIndex);
      if (def.hostBindings !== null || def.hostVars !== 0 || def.hostAttrs !== null) {
        invokeHostBindingsInCreationMode(def, directive);
      }
    }
  } finally {
    setSelectedIndex(-1);
    setCurrentDirectiveIndex(currentDirectiveIndex);
  }
}
function invokeHostBindingsInCreationMode(def, directive) {
  if (def.hostBindings !== null) {
    def.hostBindings(1, directive);
  }
}
function findDirectiveDefMatches(tView, tNode) {
  var _a2;
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && assertTNodeType(
    tNode,
    3 | 12
    /* TNodeType.AnyContainer */
  );
  const registry = tView.directiveRegistry;
  let matches = null;
  let hostDirectiveDefs = null;
  if (registry) {
    for (let i = 0; i < registry.length; i++) {
      const def = registry[i];
      if (isNodeMatchingSelectorList(
        tNode,
        def.selectors,
        /* isProjectionMode */
        false
      )) {
        matches || (matches = []);
        if (isComponentDef(def)) {
          if (ngDevMode) {
            assertTNodeType(tNode, 2, `"${tNode.value}" tags cannot be used as component hosts. Please use a different tag to activate the ${stringify(def.type)} component.`);
            if (isComponentHost(tNode)) {
              throwMultipleComponentError(tNode, matches.find(isComponentDef).type, def.type);
            }
          }
          if (def.findHostDirectiveDefs !== null) {
            const hostDirectiveMatches = [];
            hostDirectiveDefs = hostDirectiveDefs || /* @__PURE__ */ new Map();
            def.findHostDirectiveDefs(def, hostDirectiveMatches, hostDirectiveDefs);
            matches.unshift(...hostDirectiveMatches, def);
            const componentOffset = hostDirectiveMatches.length;
            markAsComponentHost(tView, tNode, componentOffset);
          } else {
            matches.unshift(def);
            markAsComponentHost(tView, tNode, 0);
          }
        } else {
          hostDirectiveDefs = hostDirectiveDefs || /* @__PURE__ */ new Map();
          (_a2 = def.findHostDirectiveDefs) == null ? void 0 : _a2.call(def, def, matches, hostDirectiveDefs);
          matches.push(def);
        }
      }
    }
  }
  return matches === null ? null : [matches, hostDirectiveDefs];
}
function markAsComponentHost(tView, hostTNode, componentOffset) {
  var _a2;
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && assertGreaterThan(componentOffset, -1, "componentOffset must be great than -1");
  hostTNode.componentOffset = componentOffset;
  ((_a2 = tView.components) != null ? _a2 : tView.components = []).push(hostTNode.index);
}
function cacheMatchingLocalNames(tNode, localRefs, exportsMap) {
  if (localRefs) {
    const localNames = tNode.localNames = [];
    for (let i = 0; i < localRefs.length; i += 2) {
      const index = exportsMap[localRefs[i + 1]];
      if (index == null)
        throw new RuntimeError(-301, ngDevMode && `Export of name '${localRefs[i + 1]}' not found!`);
      localNames.push(localRefs[i], index);
    }
  }
}
function saveNameToExportMap(directiveIdx, def, exportsMap) {
  if (exportsMap) {
    if (def.exportAs) {
      for (let i = 0; i < def.exportAs.length; i++) {
        exportsMap[def.exportAs[i]] = directiveIdx;
      }
    }
    if (isComponentDef(def))
      exportsMap[""] = directiveIdx;
  }
}
function initTNodeFlags(tNode, index, numberOfDirectives) {
  ngDevMode && assertNotEqual(numberOfDirectives, tNode.directiveEnd - tNode.directiveStart, "Reached the max number of directives");
  tNode.flags |= 1;
  tNode.directiveStart = index;
  tNode.directiveEnd = index + numberOfDirectives;
  tNode.providerIndexes = index;
}
function configureViewWithDirective(tView, tNode, lView, directiveIndex, def) {
  ngDevMode && assertGreaterThanOrEqual(directiveIndex, HEADER_OFFSET, "Must be in Expando section");
  tView.data[directiveIndex] = def;
  const directiveFactory = def.factory || (def.factory = getFactoryDef(def.type, true));
  const nodeInjectorFactory = new NodeInjectorFactory(directiveFactory, isComponentDef(def), \u0275\u0275directiveInject);
  tView.blueprint[directiveIndex] = nodeInjectorFactory;
  lView[directiveIndex] = nodeInjectorFactory;
  registerHostBindingOpCodes(tView, tNode, directiveIndex, allocExpando(tView, lView, def.hostVars, NO_CHANGE), def);
}
function addComponentLogic(lView, hostTNode, def) {
  const native = getNativeByTNode(hostTNode, lView);
  const tView = getOrCreateComponentTView(def);
  const rendererFactory = lView[ENVIRONMENT].rendererFactory;
  let lViewFlags = 16;
  if (def.signals) {
    lViewFlags = 4096;
  } else if (def.onPush) {
    lViewFlags = 64;
  }
  const componentView = addToViewTree(lView, createLView(lView, tView, null, lViewFlags, native, hostTNode, null, rendererFactory.createRenderer(native, def), null, null, null));
  lView[hostTNode.index] = componentView;
}
function elementAttributeInternal(tNode, lView, name, value, sanitizer, namespace) {
  if (ngDevMode) {
    assertNotSame(value, NO_CHANGE, "Incoming value should never be NO_CHANGE.");
    validateAgainstEventAttributes(name);
    assertTNodeType(tNode, 2, `Attempted to set attribute \`${name}\` on a container node. Host bindings are not valid on ng-container or ng-template.`);
  }
  const element = getNativeByTNode(tNode, lView);
  setElementAttribute(lView[RENDERER], element, namespace, tNode.value, name, value, sanitizer);
}
function setElementAttribute(renderer, element, namespace, tagName, name, value, sanitizer) {
  if (value == null) {
    ngDevMode && ngDevMode.rendererRemoveAttribute++;
    renderer.removeAttribute(element, name, namespace);
  } else {
    ngDevMode && ngDevMode.rendererSetAttribute++;
    const strValue = sanitizer == null ? renderStringify(value) : sanitizer(value, tagName || "", name);
    renderer.setAttribute(element, name, strValue, namespace);
  }
}
function setInputsFromAttrs(lView, directiveIndex, instance, def, tNode, initialInputData) {
  const initialInputs = initialInputData[directiveIndex];
  if (initialInputs !== null) {
    for (let i = 0; i < initialInputs.length; ) {
      const publicName = initialInputs[i++];
      const privateName = initialInputs[i++];
      const value = initialInputs[i++];
      writeToDirectiveInput(def, instance, publicName, privateName, value);
      if (ngDevMode) {
        const nativeElement = getNativeByTNode(tNode, lView);
        setNgReflectProperty(lView, nativeElement, tNode.type, privateName, value);
      }
    }
  }
}
function writeToDirectiveInput(def, instance, publicName, privateName, value) {
  const prevConsumer = setActiveConsumer(null);
  try {
    const inputTransforms = def.inputTransforms;
    if (inputTransforms !== null && inputTransforms.hasOwnProperty(privateName)) {
      value = inputTransforms[privateName].call(instance, value);
    }
    if (def.setInput !== null) {
      def.setInput(instance, value, publicName, privateName);
    } else {
      instance[privateName] = value;
    }
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
function generateInitialInputs(inputs, directiveIndex, attrs) {
  let inputsToStore = null;
  let i = 0;
  while (i < attrs.length) {
    const attrName = attrs[i];
    if (attrName === 0) {
      i += 4;
      continue;
    } else if (attrName === 5) {
      i += 2;
      continue;
    }
    if (typeof attrName === "number")
      break;
    if (inputs.hasOwnProperty(attrName)) {
      if (inputsToStore === null)
        inputsToStore = [];
      const inputConfig = inputs[attrName];
      for (let j = 0; j < inputConfig.length; j += 2) {
        if (inputConfig[j] === directiveIndex) {
          inputsToStore.push(attrName, inputConfig[j + 1], attrs[i + 1]);
          break;
        }
      }
    }
    i += 2;
  }
  return inputsToStore;
}
function createLContainer(hostNative, currentView, native, tNode) {
  ngDevMode && assertLView(currentView);
  const lContainer = [
    hostNative,
    true,
    false,
    currentView,
    null,
    0,
    tNode,
    native,
    null,
    null,
    null
    // dehydrated views
  ];
  ngDevMode && assertEqual(lContainer.length, CONTAINER_HEADER_OFFSET, "Should allocate correct number of slots for LContainer header.");
  return lContainer;
}
function refreshContentQueries(tView, lView) {
  const contentQueries = tView.contentQueries;
  if (contentQueries !== null) {
    for (let i = 0; i < contentQueries.length; i += 2) {
      const queryStartIdx = contentQueries[i];
      const directiveDefIdx = contentQueries[i + 1];
      if (directiveDefIdx !== -1) {
        const directiveDef = tView.data[directiveDefIdx];
        ngDevMode && assertDefined(directiveDef, "DirectiveDef not found.");
        ngDevMode && assertDefined(directiveDef.contentQueries, "contentQueries function should be defined");
        setCurrentQueryIndex(queryStartIdx);
        directiveDef.contentQueries(2, lView[directiveDefIdx], directiveDefIdx);
      }
    }
  }
}
function addToViewTree(lView, lViewOrLContainer) {
  if (lView[CHILD_HEAD]) {
    lView[CHILD_TAIL][NEXT] = lViewOrLContainer;
  } else {
    lView[CHILD_HEAD] = lViewOrLContainer;
  }
  lView[CHILD_TAIL] = lViewOrLContainer;
  return lViewOrLContainer;
}
function executeViewQueryFn(flags, viewQueryFn, component) {
  ngDevMode && assertDefined(viewQueryFn, "View queries function to execute must be defined.");
  setCurrentQueryIndex(0);
  const prevConsumer = setActiveConsumer(null);
  try {
    viewQueryFn(flags, component);
  } finally {
    setActiveConsumer(prevConsumer);
  }
}
function storePropertyBindingMetadata(tData, tNode, propertyName, bindingIndex, ...interpolationParts) {
  if (tData[bindingIndex] === null) {
    if (tNode.inputs == null || !tNode.inputs[propertyName]) {
      const propBindingIdxs = tNode.propertyBindings || (tNode.propertyBindings = []);
      propBindingIdxs.push(bindingIndex);
      let bindingMetadata = propertyName;
      if (interpolationParts.length > 0) {
        bindingMetadata += INTERPOLATION_DELIMITER + interpolationParts.join(INTERPOLATION_DELIMITER);
      }
      tData[bindingIndex] = bindingMetadata;
    }
  }
}
function getOrCreateLViewCleanup(view) {
  return view[CLEANUP] || (view[CLEANUP] = []);
}
function getOrCreateTViewCleanup(tView) {
  return tView.cleanup || (tView.cleanup = []);
}
function loadComponentRenderer(currentDef, tNode, lView) {
  if (currentDef === null || isComponentDef(currentDef)) {
    lView = unwrapLView(lView[tNode.index]);
  }
  return lView[RENDERER];
}
function handleError(lView, error) {
  const injector = lView[INJECTOR$1];
  const errorHandler = injector ? injector.get(ErrorHandler, null) : null;
  errorHandler && errorHandler.handleError(error);
}
function setInputsForProperty(tView, lView, inputs, publicName, value) {
  for (let i = 0; i < inputs.length; ) {
    const index = inputs[i++];
    const privateName = inputs[i++];
    const instance = lView[index];
    ngDevMode && assertIndexInRange(lView, index);
    const def = tView.data[index];
    writeToDirectiveInput(def, instance, publicName, privateName, value);
  }
}
function textBindingInternal(lView, index, value) {
  ngDevMode && assertString(value, "Value should be a string");
  ngDevMode && assertNotSame(value, NO_CHANGE, "value should not be NO_CHANGE");
  ngDevMode && assertIndexInRange(lView, index);
  const element = getNativeByIndex(index, lView);
  ngDevMode && assertDefined(element, "native element should exist");
  updateTextNode(lView[RENDERER], element, value);
}
function renderComponent(hostLView, componentHostIdx) {
  ngDevMode && assertEqual(isCreationMode(hostLView), true, "Should be run in creation mode");
  const componentView = getComponentLViewByIndex(componentHostIdx, hostLView);
  const componentTView = componentView[TVIEW];
  syncViewWithBlueprint(componentTView, componentView);
  const hostRNode = componentView[HOST];
  if (hostRNode !== null && componentView[HYDRATION] === null) {
    componentView[HYDRATION] = retrieveHydrationInfo(hostRNode, componentView[INJECTOR$1]);
  }
  renderView(componentTView, componentView, componentView[CONTEXT]);
}
function syncViewWithBlueprint(tView, lView) {
  for (let i = lView.length; i < tView.blueprint.length; i++) {
    lView.push(tView.blueprint[i]);
  }
}
function renderView(tView, lView, context) {
  ngDevMode && assertEqual(isCreationMode(lView), true, "Should be run in creation mode");
  enterView(lView);
  try {
    const viewQuery = tView.viewQuery;
    if (viewQuery !== null) {
      executeViewQueryFn(1, viewQuery, context);
    }
    const templateFn = tView.template;
    if (templateFn !== null) {
      executeTemplate(tView, lView, templateFn, 1, context);
    }
    if (tView.firstCreatePass) {
      tView.firstCreatePass = false;
    }
    if (tView.staticContentQueries) {
      refreshContentQueries(tView, lView);
    }
    if (tView.staticViewQueries) {
      executeViewQueryFn(2, tView.viewQuery, context);
    }
    const components = tView.components;
    if (components !== null) {
      renderChildComponents(lView, components);
    }
  } catch (error) {
    if (tView.firstCreatePass) {
      tView.incompleteFirstPass = true;
      tView.firstCreatePass = false;
    }
    throw error;
  } finally {
    lView[FLAGS] &= ~4;
    leaveView();
  }
}
function renderChildComponents(hostLView, components) {
  for (let i = 0; i < components.length; i++) {
    renderComponent(hostLView, components[i]);
  }
}
var _DestroyRef = class {
};
var DestroyRef = _DestroyRef;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _DestroyRef.__NG_ELEMENT_ID__ = injectDestroyRef;
})();
/**
 * @internal
 * @nocollapse
 */
(() => {
  _DestroyRef.__NG_ENV_ID__ = (injector) => injector;
})();
var NodeInjectorDestroyRef = class extends DestroyRef {
  constructor(_lView) {
    super();
    this._lView = _lView;
  }
  onDestroy(callback) {
    storeLViewOnDestroy(this._lView, callback);
    return () => removeLViewOnDestroy(this._lView, callback);
  }
};
function injectDestroyRef() {
  return new NodeInjectorDestroyRef(getLView());
}
var _EffectManager = class {
  constructor() {
    this.all = /* @__PURE__ */ new Set();
    this.queue = /* @__PURE__ */ new Map();
  }
  create(effectFn, destroyRef, allowSignalWrites) {
    const zone = typeof Zone === "undefined" ? null : Zone.current;
    const watch = new Watch(effectFn, (watch2) => {
      if (!this.all.has(watch2)) {
        return;
      }
      this.queue.set(watch2, zone);
    }, allowSignalWrites);
    this.all.add(watch);
    watch.notify();
    let unregisterOnDestroy;
    const destroy = () => {
      watch.cleanup();
      unregisterOnDestroy == null ? void 0 : unregisterOnDestroy();
      this.all.delete(watch);
      this.queue.delete(watch);
    };
    unregisterOnDestroy = destroyRef == null ? void 0 : destroyRef.onDestroy(destroy);
    return {
      destroy
    };
  }
  flush() {
    if (this.queue.size === 0) {
      return;
    }
    for (const [watch, zone] of this.queue) {
      this.queue.delete(watch);
      if (zone) {
        zone.run(() => watch.run());
      } else {
        watch.run();
      }
    }
  }
  get isQueueEmpty() {
    return this.queue.size === 0;
  }
};
var EffectManager = _EffectManager;
/** @nocollapse */
(() => {
  _EffectManager.\u0275prov = \u0275\u0275defineInjectable({
    token: _EffectManager,
    providedIn: "root",
    factory: () => new _EffectManager()
  });
})();
function computeStaticStyling(tNode, attrs, writeToHost) {
  ngDevMode && assertFirstCreatePass(getTView(), "Expecting to be called in first template pass only");
  let styles = writeToHost ? tNode.styles : null;
  let classes = writeToHost ? tNode.classes : null;
  let mode = 0;
  if (attrs !== null) {
    for (let i = 0; i < attrs.length; i++) {
      const value = attrs[i];
      if (typeof value === "number") {
        mode = value;
      } else if (mode == 1) {
        classes = concatStringsWithSpace(classes, value);
      } else if (mode == 2) {
        const style = value;
        const styleValue = attrs[++i];
        styles = concatStringsWithSpace(styles, style + ": " + styleValue + ";");
      }
    }
  }
  writeToHost ? tNode.styles = styles : tNode.stylesWithoutHost = styles;
  writeToHost ? tNode.classes = classes : tNode.classesWithoutHost = classes;
}
function collectNativeNodes(tView, lView, tNode, result, isProjection = false) {
  while (tNode !== null) {
    ngDevMode && assertTNodeType(
      tNode,
      3 | 12 | 16 | 32
      /* TNodeType.Icu */
    );
    const lNode = lView[tNode.index];
    if (lNode !== null) {
      result.push(unwrapRNode(lNode));
    }
    if (isLContainer(lNode)) {
      for (let i = CONTAINER_HEADER_OFFSET; i < lNode.length; i++) {
        const lViewInAContainer = lNode[i];
        const lViewFirstChildTNode = lViewInAContainer[TVIEW].firstChild;
        if (lViewFirstChildTNode !== null) {
          collectNativeNodes(lViewInAContainer[TVIEW], lViewInAContainer, lViewFirstChildTNode, result);
        }
      }
      if (lNode[NATIVE] !== lNode[HOST]) {
        result.push(lNode[NATIVE]);
      }
    }
    const tNodeType = tNode.type;
    if (tNodeType & 8) {
      collectNativeNodes(tView, lView, tNode.child, result);
    } else if (tNodeType & 32) {
      const nextRNode = icuContainerIterate(tNode, lView);
      let rNode;
      while (rNode = nextRNode()) {
        result.push(rNode);
      }
    } else if (tNodeType & 16) {
      const nodesInSlot = getProjectionNodes(lView, tNode);
      if (Array.isArray(nodesInSlot)) {
        result.push(...nodesInSlot);
      } else {
        const parentView = getLViewParent(lView[DECLARATION_COMPONENT_VIEW]);
        ngDevMode && assertParentView(parentView);
        collectNativeNodes(parentView[TVIEW], parentView, nodesInSlot, result, true);
      }
    }
    tNode = isProjection ? tNode.projectionNext : tNode.next;
  }
  return result;
}
function detectChangesInternal(tView, lView, context, notifyErrorHandler = true) {
  var _a2;
  const rendererFactory = lView[ENVIRONMENT].rendererFactory;
  const checkNoChangesMode = !!ngDevMode && isInCheckNoChangesMode();
  if (!checkNoChangesMode && rendererFactory.begin)
    rendererFactory.begin();
  try {
    refreshView(tView, lView, tView.template, context);
  } catch (error) {
    if (notifyErrorHandler) {
      handleError(lView, error);
    }
    throw error;
  } finally {
    if (!checkNoChangesMode && rendererFactory.end)
      rendererFactory.end();
    !checkNoChangesMode && ((_a2 = lView[ENVIRONMENT].effectManager) == null ? void 0 : _a2.flush());
  }
}
function checkNoChangesInternal(tView, lView, context, notifyErrorHandler = true) {
  setIsInCheckNoChangesMode(true);
  try {
    detectChangesInternal(tView, lView, context, notifyErrorHandler);
  } finally {
    setIsInCheckNoChangesMode(false);
  }
}
function detectChanges(component) {
  const view = getComponentViewByInstance(component);
  detectChangesInternal(view[TVIEW], view, component);
}
function refreshView(tView, lView, templateFn, context) {
  var _a2;
  ngDevMode && assertEqual(isCreationMode(lView), false, "Should be run in update mode");
  const flags = lView[FLAGS];
  if ((flags & 256) === 256)
    return;
  const isInCheckNoChangesPass = ngDevMode && isInCheckNoChangesMode();
  !isInCheckNoChangesPass && ((_a2 = lView[ENVIRONMENT].effectManager) == null ? void 0 : _a2.flush());
  enterView(lView);
  try {
    resetPreOrderHookFlags(lView);
    setBindingIndex(tView.bindingStartIndex);
    if (templateFn !== null) {
      executeTemplate(tView, lView, templateFn, 2, context);
    }
    const hooksInitPhaseCompleted = (flags & 3) === 3;
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const preOrderCheckHooks = tView.preOrderCheckHooks;
        if (preOrderCheckHooks !== null) {
          executeCheckHooks(lView, preOrderCheckHooks, null);
        }
      } else {
        const preOrderHooks = tView.preOrderHooks;
        if (preOrderHooks !== null) {
          executeInitAndCheckHooks(lView, preOrderHooks, 0, null);
        }
        incrementInitPhaseFlags(
          lView,
          0
          /* InitPhaseState.OnInitHooksToBeRun */
        );
      }
    }
    markTransplantedViewsForRefresh(lView);
    detectChangesInEmbeddedViews(
      lView,
      2
      /* ChangeDetectionMode.BugToForceRefreshAndIgnoreViewFlags */
    );
    if (tView.contentQueries !== null) {
      refreshContentQueries(tView, lView);
    }
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const contentCheckHooks = tView.contentCheckHooks;
        if (contentCheckHooks !== null) {
          executeCheckHooks(lView, contentCheckHooks);
        }
      } else {
        const contentHooks = tView.contentHooks;
        if (contentHooks !== null) {
          executeInitAndCheckHooks(
            lView,
            contentHooks,
            1
            /* InitPhaseState.AfterContentInitHooksToBeRun */
          );
        }
        incrementInitPhaseFlags(
          lView,
          1
          /* InitPhaseState.AfterContentInitHooksToBeRun */
        );
      }
    }
    processHostBindingOpCodes(tView, lView);
    const components = tView.components;
    if (components !== null) {
      detectChangesInChildComponents(
        lView,
        components,
        0
        /* ChangeDetectionMode.Global */
      );
    }
    const viewQuery = tView.viewQuery;
    if (viewQuery !== null) {
      executeViewQueryFn(2, viewQuery, context);
    }
    if (!isInCheckNoChangesPass) {
      if (hooksInitPhaseCompleted) {
        const viewCheckHooks = tView.viewCheckHooks;
        if (viewCheckHooks !== null) {
          executeCheckHooks(lView, viewCheckHooks);
        }
      } else {
        const viewHooks = tView.viewHooks;
        if (viewHooks !== null) {
          executeInitAndCheckHooks(
            lView,
            viewHooks,
            2
            /* InitPhaseState.AfterViewInitHooksToBeRun */
          );
        }
        incrementInitPhaseFlags(
          lView,
          2
          /* InitPhaseState.AfterViewInitHooksToBeRun */
        );
      }
    }
    if (tView.firstUpdatePass === true) {
      tView.firstUpdatePass = false;
    }
    if (!isInCheckNoChangesPass) {
      lView[FLAGS] &= ~(64 | 8);
    }
    clearViewRefreshFlag(lView);
  } finally {
    leaveView();
  }
}
function detectChangesInEmbeddedViews(lView, mode) {
  for (let lContainer = getFirstLContainer(lView); lContainer !== null; lContainer = getNextLContainer(lContainer)) {
    for (let i = CONTAINER_HEADER_OFFSET; i < lContainer.length; i++) {
      const embeddedLView = lContainer[i];
      detectChangesInView(embeddedLView, mode);
    }
  }
}
function markTransplantedViewsForRefresh(lView) {
  for (let lContainer = getFirstLContainer(lView); lContainer !== null; lContainer = getNextLContainer(lContainer)) {
    if (!lContainer[HAS_TRANSPLANTED_VIEWS])
      continue;
    const movedViews = lContainer[MOVED_VIEWS];
    ngDevMode && assertDefined(movedViews, "Transplanted View flags set but missing MOVED_VIEWS");
    for (let i = 0; i < movedViews.length; i++) {
      const movedLView = movedViews[i];
      const insertionLContainer = movedLView[PARENT];
      ngDevMode && assertLContainer(insertionLContainer);
      markViewForRefresh(movedLView);
    }
  }
}
function detectChangesInComponent(hostLView, componentHostIdx, mode) {
  ngDevMode && assertEqual(isCreationMode(hostLView), false, "Should be run in update mode");
  const componentView = getComponentLViewByIndex(componentHostIdx, hostLView);
  detectChangesInView(componentView, mode);
}
function detectChangesInView(lView, mode) {
  if (!viewAttachedToChangeDetector(lView)) {
    return;
  }
  const tView = lView[TVIEW];
  if (lView[FLAGS] & (16 | 64) && mode === 0 || lView[FLAGS] & 1024 || mode === 2) {
    refreshView(tView, lView, tView.template, lView[CONTEXT]);
  } else if (lView[DESCENDANT_VIEWS_TO_REFRESH] > 0) {
    detectChangesInEmbeddedViews(
      lView,
      1
      /* ChangeDetectionMode.Targeted */
    );
    const tView2 = lView[TVIEW];
    const components = tView2.components;
    if (components !== null) {
      detectChangesInChildComponents(
        lView,
        components,
        1
        /* ChangeDetectionMode.Targeted */
      );
    }
  }
}
function detectChangesInChildComponents(hostLView, components, mode) {
  for (let i = 0; i < components.length; i++) {
    detectChangesInComponent(hostLView, components[i], mode);
  }
}
var ViewRef$1 = class {
  get rootNodes() {
    const lView = this._lView;
    const tView = lView[TVIEW];
    return collectNativeNodes(tView, lView, tView.firstChild, []);
  }
  constructor(_lView, _cdRefInjectingView) {
    this._lView = _lView;
    this._cdRefInjectingView = _cdRefInjectingView;
    this._appRef = null;
    this._attachedToViewContainer = false;
  }
  get context() {
    return this._lView[CONTEXT];
  }
  set context(value) {
    this._lView[CONTEXT] = value;
  }
  get destroyed() {
    return (this._lView[FLAGS] & 256) === 256;
  }
  destroy() {
    if (this._appRef) {
      this._appRef.detachView(this);
    } else if (this._attachedToViewContainer) {
      const parent = this._lView[PARENT];
      if (isLContainer(parent)) {
        const viewRefs = parent[VIEW_REFS];
        const index = viewRefs ? viewRefs.indexOf(this) : -1;
        if (index > -1) {
          ngDevMode && assertEqual(index, parent.indexOf(this._lView) - CONTAINER_HEADER_OFFSET, "An attached view should be in the same position within its container as its ViewRef in the VIEW_REFS array.");
          detachView(parent, index);
          removeFromArray(viewRefs, index);
        }
      }
      this._attachedToViewContainer = false;
    }
    destroyLView(this._lView[TVIEW], this._lView);
  }
  onDestroy(callback) {
    storeLViewOnDestroy(this._lView, callback);
  }
  /**
   * Marks a view and all of its ancestors dirty.
   *
   * This can be used to ensure an {@link ChangeDetectionStrategy#OnPush} component is
   * checked when it needs to be re-rendered but the two normal triggers haven't marked it
   * dirty (i.e. inputs haven't changed and events haven't fired in the view).
   *
   * <!-- TODO: Add a link to a chapter on OnPush components -->
   *
   * @usageNotes
   * ### Example
   *
   * ```typescript
   * @Component({
   *   selector: 'app-root',
   *   template: `Number of ticks: {{numberOfTicks}}`
   *   changeDetection: ChangeDetectionStrategy.OnPush,
   * })
   * class AppComponent {
   *   numberOfTicks = 0;
   *
   *   constructor(private ref: ChangeDetectorRef) {
   *     setInterval(() => {
   *       this.numberOfTicks++;
   *       // the following is required, otherwise the view will not be updated
   *       this.ref.markForCheck();
   *     }, 1000);
   *   }
   * }
   * ```
   */
  markForCheck() {
    markViewDirty(this._cdRefInjectingView || this._lView);
  }
  /**
   * Detaches the view from the change detection tree.
   *
   * Detached views will not be checked during change detection runs until they are
   * re-attached, even if they are dirty. `detach` can be used in combination with
   * {@link ChangeDetectorRef#detectChanges} to implement local change
   * detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds. We can do that by detaching
   * the component's change detector and doing a local check every five seconds.
   *
   * ```typescript
   * class DataProvider {
   *   // in a real application the returned data will be different every time
   *   get data() {
   *     return [1,2,3,4,5];
   *   }
   * }
   *
   * @Component({
   *   selector: 'giant-list',
   *   template: `
   *     <li *ngFor="let d of dataProvider.data">Data {{d}}</li>
   *   `,
   * })
   * class GiantList {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {
   *     ref.detach();
   *     setInterval(() => {
   *       this.ref.detectChanges();
   *     }, 5000);
   *   }
   * }
   *
   * @Component({
   *   selector: 'app',
   *   providers: [DataProvider],
   *   template: `
   *     <giant-list><giant-list>
   *   `,
   * })
   * class App {
   * }
   * ```
   */
  detach() {
    this._lView[FLAGS] &= ~128;
  }
  /**
   * Re-attaches a view to the change detection tree.
   *
   * This can be used to re-attach views that were previously detached from the tree
   * using {@link ChangeDetectorRef#detach}. Views are attached to the tree by default.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example creates a component displaying `live` data. The component will detach
   * its change detector from the main change detector tree when the component's live property
   * is set to false.
   *
   * ```typescript
   * class DataProvider {
   *   data = 1;
   *
   *   constructor() {
   *     setInterval(() => {
   *       this.data = this.data * 2;
   *     }, 500);
   *   }
   * }
   *
   * @Component({
   *   selector: 'live-data',
   *   inputs: ['live'],
   *   template: 'Data: {{dataProvider.data}}'
   * })
   * class LiveData {
   *   constructor(private ref: ChangeDetectorRef, private dataProvider: DataProvider) {}
   *
   *   set live(value) {
   *     if (value) {
   *       this.ref.reattach();
   *     } else {
   *       this.ref.detach();
   *     }
   *   }
   * }
   *
   * @Component({
   *   selector: 'app-root',
   *   providers: [DataProvider],
   *   template: `
   *     Live Update: <input type="checkbox" [(ngModel)]="live">
   *     <live-data [live]="live"><live-data>
   *   `,
   * })
   * class AppComponent {
   *   live = true;
   * }
   * ```
   */
  reattach() {
    this._lView[FLAGS] |= 128;
  }
  /**
   * Checks the view and its children.
   *
   * This can also be used in combination with {@link ChangeDetectorRef#detach} to implement
   * local change detection checks.
   *
   * <!-- TODO: Add a link to a chapter on detach/reattach/local digest -->
   * <!-- TODO: Add a live demo once ref.detectChanges is merged into master -->
   *
   * @usageNotes
   * ### Example
   *
   * The following example defines a component with a large list of readonly data.
   * Imagine, the data changes constantly, many times per second. For performance reasons,
   * we want to check and update the list every five seconds.
   *
   * We can do that by detaching the component's change detector and doing a local change detection
   * check every five seconds.
   *
   * See {@link ChangeDetectorRef#detach} for more information.
   */
  detectChanges() {
    detectChangesInternal(this._lView[TVIEW], this._lView, this.context);
  }
  /**
   * Checks the change detector and its children, and throws if any changes are detected.
   *
   * This is used in development mode to verify that running change detection doesn't
   * introduce other changes.
   */
  checkNoChanges() {
    if (ngDevMode) {
      checkNoChangesInternal(this._lView[TVIEW], this._lView, this.context);
    }
  }
  attachToViewContainerRef() {
    if (this._appRef) {
      throw new RuntimeError(902, ngDevMode && "This view is already attached directly to the ApplicationRef!");
    }
    this._attachedToViewContainer = true;
  }
  detachFromAppRef() {
    this._appRef = null;
    renderDetachView(this._lView[TVIEW], this._lView);
  }
  attachToAppRef(appRef) {
    if (this._attachedToViewContainer) {
      throw new RuntimeError(902, ngDevMode && "This view is already attached to a ViewContainer!");
    }
    this._appRef = appRef;
  }
};
var RootViewRef = class extends ViewRef$1 {
  constructor(_view) {
    super(_view);
    this._view = _view;
  }
  detectChanges() {
    const lView = this._view;
    const tView = lView[TVIEW];
    const context = lView[CONTEXT];
    detectChangesInternal(tView, lView, context, false);
  }
  checkNoChanges() {
    if (ngDevMode) {
      const lView = this._view;
      const tView = lView[TVIEW];
      const context = lView[CONTEXT];
      checkNoChangesInternal(tView, lView, context, false);
    }
  }
  get context() {
    return null;
  }
};
var ComponentFactoryResolver = class extends ComponentFactoryResolver$1 {
  /**
   * @param ngModule The NgModuleRef to which all resolved factories are bound.
   */
  constructor(ngModule) {
    super();
    this.ngModule = ngModule;
  }
  resolveComponentFactory(component) {
    ngDevMode && assertComponentType(component);
    const componentDef = getComponentDef(component);
    return new ComponentFactory(componentDef, this.ngModule);
  }
};
function toRefArray(map) {
  const array = [];
  for (let nonMinified in map) {
    if (map.hasOwnProperty(nonMinified)) {
      const minified = map[nonMinified];
      array.push({ propName: minified, templateName: nonMinified });
    }
  }
  return array;
}
function getNamespace(elementName) {
  const name = elementName.toLowerCase();
  return name === "svg" ? SVG_NAMESPACE : name === "math" ? MATH_ML_NAMESPACE : null;
}
var ChainedInjector = class {
  constructor(injector, parentInjector) {
    this.injector = injector;
    this.parentInjector = parentInjector;
  }
  get(token, notFoundValue, flags) {
    flags = convertToBitFlags(flags);
    const value = this.injector.get(token, NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR, flags);
    if (value !== NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR || notFoundValue === NOT_FOUND_CHECK_ONLY_ELEMENT_INJECTOR) {
      return value;
    }
    return this.parentInjector.get(token, notFoundValue, flags);
  }
};
var ComponentFactory = class extends ComponentFactory$1 {
  get inputs() {
    return toRefArray(this.componentDef.inputs);
  }
  get outputs() {
    return toRefArray(this.componentDef.outputs);
  }
  /**
   * @param componentDef The component definition.
   * @param ngModule The NgModuleRef to which the factory is bound.
   */
  constructor(componentDef, ngModule) {
    super();
    this.componentDef = componentDef;
    this.ngModule = ngModule;
    this.componentType = componentDef.type;
    this.selector = stringifyCSSSelectorList(componentDef.selectors);
    this.ngContentSelectors = componentDef.ngContentSelectors ? componentDef.ngContentSelectors : [];
    this.isBoundToModule = !!ngModule;
  }
  create(injector, projectableNodes, rootSelectorOrNode, environmentInjector) {
    environmentInjector = environmentInjector || this.ngModule;
    let realEnvironmentInjector = environmentInjector instanceof EnvironmentInjector ? environmentInjector : environmentInjector == null ? void 0 : environmentInjector.injector;
    if (realEnvironmentInjector && this.componentDef.getStandaloneInjector !== null) {
      realEnvironmentInjector = this.componentDef.getStandaloneInjector(realEnvironmentInjector) || realEnvironmentInjector;
    }
    const rootViewInjector = realEnvironmentInjector ? new ChainedInjector(injector, realEnvironmentInjector) : injector;
    const rendererFactory = rootViewInjector.get(RendererFactory2, null);
    if (rendererFactory === null) {
      throw new RuntimeError(407, ngDevMode && "Angular was not able to inject a renderer (RendererFactory2). Likely this is due to a broken DI hierarchy. Make sure that any injector used to create this component has a correct parent.");
    }
    const sanitizer = rootViewInjector.get(Sanitizer, null);
    const effectManager = rootViewInjector.get(EffectManager, null);
    const environment = {
      rendererFactory,
      sanitizer,
      effectManager
    };
    const hostRenderer = rendererFactory.createRenderer(null, this.componentDef);
    const elementName = this.componentDef.selectors[0][0] || "div";
    const hostRNode = rootSelectorOrNode ? locateHostElement(hostRenderer, rootSelectorOrNode, this.componentDef.encapsulation, rootViewInjector) : createElementNode(hostRenderer, elementName, getNamespace(elementName));
    const signalFlags = 4096 | 512;
    const nonSignalFlags = this.componentDef.onPush ? 64 | 512 : 16 | 512;
    const rootFlags = this.componentDef.signals ? signalFlags : nonSignalFlags;
    const rootTView = createTView(0, null, null, 1, 0, null, null, null, null, null, null);
    const rootLView = createLView(null, rootTView, null, rootFlags, null, null, environment, hostRenderer, rootViewInjector, null, null);
    enterView(rootLView);
    let component;
    let tElementNode;
    try {
      const rootComponentDef = this.componentDef;
      let rootDirectives;
      let hostDirectiveDefs = null;
      if (rootComponentDef.findHostDirectiveDefs) {
        rootDirectives = [];
        hostDirectiveDefs = /* @__PURE__ */ new Map();
        rootComponentDef.findHostDirectiveDefs(rootComponentDef, rootDirectives, hostDirectiveDefs);
        rootDirectives.push(rootComponentDef);
      } else {
        rootDirectives = [rootComponentDef];
      }
      const hostTNode = createRootComponentTNode(rootLView, hostRNode);
      const componentView = createRootComponentView(hostTNode, hostRNode, rootComponentDef, rootDirectives, rootLView, environment, hostRenderer);
      tElementNode = getTNode(rootTView, HEADER_OFFSET);
      if (hostRNode) {
        setRootNodeAttributes(hostRenderer, rootComponentDef, hostRNode, rootSelectorOrNode);
      }
      if (projectableNodes !== void 0) {
        projectNodes(tElementNode, this.ngContentSelectors, projectableNodes);
      }
      component = createRootComponent(componentView, rootComponentDef, rootDirectives, hostDirectiveDefs, rootLView, [LifecycleHooksFeature]);
      renderView(rootTView, rootLView, null);
    } finally {
      leaveView();
    }
    return new ComponentRef(this.componentType, component, createElementRef(tElementNode, rootLView), rootLView, tElementNode);
  }
};
var ComponentRef = class extends ComponentRef$1 {
  constructor(componentType, instance, location2, _rootLView, _tNode) {
    super();
    this.location = location2;
    this._rootLView = _rootLView;
    this._tNode = _tNode;
    this.previousInputValues = null;
    this.instance = instance;
    this.hostView = this.changeDetectorRef = new RootViewRef(_rootLView);
    this.componentType = componentType;
  }
  setInput(name, value) {
    var _a2;
    const inputData = this._tNode.inputs;
    let dataValue;
    if (inputData !== null && (dataValue = inputData[name])) {
      (_a2 = this.previousInputValues) != null ? _a2 : this.previousInputValues = /* @__PURE__ */ new Map();
      if (this.previousInputValues.has(name) && Object.is(this.previousInputValues.get(name), value)) {
        return;
      }
      const lView = this._rootLView;
      setInputsForProperty(lView[TVIEW], lView, dataValue, name, value);
      this.previousInputValues.set(name, value);
      const childComponentLView = getComponentLViewByIndex(this._tNode.index, lView);
      markViewDirty(childComponentLView);
    } else {
      if (ngDevMode) {
        const cmpNameForError = stringifyForError(this.componentType);
        let message = `Can't set value of the '${name}' input on the '${cmpNameForError}' component. `;
        message += `Make sure that the '${name}' property is annotated with @Input() or a mapped @Input('${name}') exists.`;
        reportUnknownPropertyError(message);
      }
    }
  }
  get injector() {
    return new NodeInjector(this._tNode, this._rootLView);
  }
  destroy() {
    this.hostView.destroy();
  }
  onDestroy(callback) {
    this.hostView.onDestroy(callback);
  }
};
function createRootComponentTNode(lView, rNode) {
  const tView = lView[TVIEW];
  const index = HEADER_OFFSET;
  ngDevMode && assertIndexInRange(lView, index);
  lView[index] = rNode;
  return getOrCreateTNode(tView, index, 2, "#host", null);
}
function createRootComponentView(tNode, hostRNode, rootComponentDef, rootDirectives, rootView, environment, hostRenderer) {
  const tView = rootView[TVIEW];
  applyRootComponentStyling(rootDirectives, tNode, hostRNode, hostRenderer);
  let hydrationInfo = null;
  if (hostRNode !== null) {
    hydrationInfo = retrieveHydrationInfo(hostRNode, rootView[INJECTOR$1]);
  }
  const viewRenderer = environment.rendererFactory.createRenderer(hostRNode, rootComponentDef);
  let lViewFlags = 16;
  if (rootComponentDef.signals) {
    lViewFlags = 4096;
  } else if (rootComponentDef.onPush) {
    lViewFlags = 64;
  }
  const componentView = createLView(rootView, getOrCreateComponentTView(rootComponentDef), null, lViewFlags, rootView[tNode.index], tNode, environment, viewRenderer, null, null, hydrationInfo);
  if (tView.firstCreatePass) {
    markAsComponentHost(tView, tNode, rootDirectives.length - 1);
  }
  addToViewTree(rootView, componentView);
  return rootView[tNode.index] = componentView;
}
function applyRootComponentStyling(rootDirectives, tNode, rNode, hostRenderer) {
  for (const def of rootDirectives) {
    tNode.mergedAttrs = mergeHostAttrs(tNode.mergedAttrs, def.hostAttrs);
  }
  if (tNode.mergedAttrs !== null) {
    computeStaticStyling(tNode, tNode.mergedAttrs, true);
    if (rNode !== null) {
      setupStaticAttributes(hostRenderer, rNode, tNode);
    }
  }
}
function createRootComponent(componentView, rootComponentDef, rootDirectives, hostDirectiveDefs, rootLView, hostFeatures) {
  const rootTNode = getCurrentTNode();
  ngDevMode && assertDefined(rootTNode, "tNode should have been already created");
  const tView = rootLView[TVIEW];
  const native = getNativeByTNode(rootTNode, rootLView);
  initializeDirectives(tView, rootLView, rootTNode, rootDirectives, null, hostDirectiveDefs);
  for (let i = 0; i < rootDirectives.length; i++) {
    const directiveIndex = rootTNode.directiveStart + i;
    const directiveInstance = getNodeInjectable(rootLView, tView, directiveIndex, rootTNode);
    attachPatchData(directiveInstance, rootLView);
  }
  invokeDirectivesHostBindings(tView, rootLView, rootTNode);
  if (native) {
    attachPatchData(native, rootLView);
  }
  ngDevMode && assertGreaterThan(rootTNode.componentOffset, -1, "componentOffset must be great than -1");
  const component = getNodeInjectable(rootLView, tView, rootTNode.directiveStart + rootTNode.componentOffset, rootTNode);
  componentView[CONTEXT] = rootLView[CONTEXT] = component;
  if (hostFeatures !== null) {
    for (const feature of hostFeatures) {
      feature(component, rootComponentDef);
    }
  }
  executeContentQueries(tView, rootTNode, componentView);
  return component;
}
function setRootNodeAttributes(hostRenderer, componentDef, hostRNode, rootSelectorOrNode) {
  if (rootSelectorOrNode) {
    setUpAttributes(hostRenderer, hostRNode, ["ng-version", VERSION.full]);
  } else {
    const { attrs, classes } = extractAttrsAndClassesFromSelector(componentDef.selectors[0]);
    if (attrs) {
      setUpAttributes(hostRenderer, hostRNode, attrs);
    }
    if (classes && classes.length > 0) {
      writeDirectClass(hostRenderer, hostRNode, classes.join(" "));
    }
  }
}
function projectNodes(tNode, ngContentSelectors, projectableNodes) {
  const projection = tNode.projection = [];
  for (let i = 0; i < ngContentSelectors.length; i++) {
    const nodesforSlot = projectableNodes[i];
    projection.push(nodesforSlot != null ? Array.from(nodesforSlot) : null);
  }
}
function LifecycleHooksFeature() {
  const tNode = getCurrentTNode();
  ngDevMode && assertDefined(tNode, "TNode is required");
  registerPostOrderHooks(getLView()[TVIEW], tNode);
}
function getSuperType(type) {
  return Object.getPrototypeOf(type.prototype).constructor;
}
function \u0275\u0275InheritDefinitionFeature(definition) {
  let superType = getSuperType(definition.type);
  let shouldInheritFields = true;
  const inheritanceChain = [definition];
  while (superType) {
    let superDef = void 0;
    if (isComponentDef(definition)) {
      superDef = superType.\u0275cmp || superType.\u0275dir;
    } else {
      if (superType.\u0275cmp) {
        throw new RuntimeError(903, ngDevMode && `Directives cannot inherit Components. Directive ${stringifyForError(definition.type)} is attempting to extend component ${stringifyForError(superType)}`);
      }
      superDef = superType.\u0275dir;
    }
    if (superDef) {
      if (shouldInheritFields) {
        inheritanceChain.push(superDef);
        const writeableDef = definition;
        writeableDef.inputs = maybeUnwrapEmpty(definition.inputs);
        writeableDef.inputTransforms = maybeUnwrapEmpty(definition.inputTransforms);
        writeableDef.declaredInputs = maybeUnwrapEmpty(definition.declaredInputs);
        writeableDef.outputs = maybeUnwrapEmpty(definition.outputs);
        const superHostBindings = superDef.hostBindings;
        superHostBindings && inheritHostBindings(definition, superHostBindings);
        const superViewQuery = superDef.viewQuery;
        const superContentQueries = superDef.contentQueries;
        superViewQuery && inheritViewQuery(definition, superViewQuery);
        superContentQueries && inheritContentQueries(definition, superContentQueries);
        fillProperties(definition.inputs, superDef.inputs);
        fillProperties(definition.declaredInputs, superDef.declaredInputs);
        fillProperties(definition.outputs, superDef.outputs);
        if (superDef.inputTransforms !== null) {
          if (writeableDef.inputTransforms === null) {
            writeableDef.inputTransforms = {};
          }
          fillProperties(writeableDef.inputTransforms, superDef.inputTransforms);
        }
        if (isComponentDef(superDef) && superDef.data.animation) {
          const defData = definition.data;
          defData.animation = (defData.animation || []).concat(superDef.data.animation);
        }
      }
      const features = superDef.features;
      if (features) {
        for (let i = 0; i < features.length; i++) {
          const feature = features[i];
          if (feature && feature.ngInherit) {
            feature(definition);
          }
          if (feature === \u0275\u0275InheritDefinitionFeature) {
            shouldInheritFields = false;
          }
        }
      }
    }
    superType = Object.getPrototypeOf(superType);
  }
  mergeHostAttrsAcrossInheritance(inheritanceChain);
}
function mergeHostAttrsAcrossInheritance(inheritanceChain) {
  let hostVars = 0;
  let hostAttrs = null;
  for (let i = inheritanceChain.length - 1; i >= 0; i--) {
    const def = inheritanceChain[i];
    def.hostVars = hostVars += def.hostVars;
    def.hostAttrs = mergeHostAttrs(def.hostAttrs, hostAttrs = mergeHostAttrs(hostAttrs, def.hostAttrs));
  }
}
function maybeUnwrapEmpty(value) {
  if (value === EMPTY_OBJ) {
    return {};
  } else if (value === EMPTY_ARRAY) {
    return [];
  } else {
    return value;
  }
}
function inheritViewQuery(definition, superViewQuery) {
  const prevViewQuery = definition.viewQuery;
  if (prevViewQuery) {
    definition.viewQuery = (rf, ctx) => {
      superViewQuery(rf, ctx);
      prevViewQuery(rf, ctx);
    };
  } else {
    definition.viewQuery = superViewQuery;
  }
}
function inheritContentQueries(definition, superContentQueries) {
  const prevContentQueries = definition.contentQueries;
  if (prevContentQueries) {
    definition.contentQueries = (rf, ctx, directiveIndex) => {
      superContentQueries(rf, ctx, directiveIndex);
      prevContentQueries(rf, ctx, directiveIndex);
    };
  } else {
    definition.contentQueries = superContentQueries;
  }
}
function inheritHostBindings(definition, superHostBindings) {
  const prevHostBindings = definition.hostBindings;
  if (prevHostBindings) {
    definition.hostBindings = (rf, ctx) => {
      superHostBindings(rf, ctx);
      prevHostBindings(rf, ctx);
    };
  } else {
    definition.hostBindings = superHostBindings;
  }
}
var COPY_DIRECTIVE_FIELDS = [
  // The child class should use the providers of its parent.
  "providersResolver"
  // Not listed here are any fields which are handled by the `ɵɵInheritDefinitionFeature`, such
  // as inputs, outputs, and host binding functions.
];
var COPY_COMPONENT_FIELDS = [
  // The child class should use the template function of its parent, including all template
  // semantics.
  "template",
  "decls",
  "consts",
  "vars",
  "onPush",
  "ngContentSelectors",
  // The child class should use the CSS styles of its parent, including all styling semantics.
  "styles",
  "encapsulation",
  // The child class should be checked by the runtime in the same way as its parent.
  "schemas"
];
function \u0275\u0275CopyDefinitionFeature(definition) {
  let superType = getSuperType(definition.type);
  let superDef = void 0;
  if (isComponentDef(definition)) {
    superDef = superType.\u0275cmp;
  } else {
    superDef = superType.\u0275dir;
  }
  const defAny = definition;
  for (const field of COPY_DIRECTIVE_FIELDS) {
    defAny[field] = superDef[field];
  }
  if (isComponentDef(superDef)) {
    for (const field of COPY_COMPONENT_FIELDS) {
      defAny[field] = superDef[field];
    }
  }
}
function \u0275\u0275HostDirectivesFeature(rawHostDirectives) {
  return (definition) => {
    definition.findHostDirectiveDefs = findHostDirectiveDefs;
    definition.hostDirectives = (Array.isArray(rawHostDirectives) ? rawHostDirectives : rawHostDirectives()).map((dir) => {
      return typeof dir === "function" ? { directive: resolveForwardRef(dir), inputs: EMPTY_OBJ, outputs: EMPTY_OBJ } : {
        directive: resolveForwardRef(dir.directive),
        inputs: bindingArrayToMap(dir.inputs),
        outputs: bindingArrayToMap(dir.outputs)
      };
    });
  };
}
function findHostDirectiveDefs(currentDef, matchedDefs, hostDirectiveDefs) {
  if (currentDef.hostDirectives !== null) {
    for (const hostDirectiveConfig of currentDef.hostDirectives) {
      const hostDirectiveDef = getDirectiveDef(hostDirectiveConfig.directive);
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        validateHostDirective(hostDirectiveConfig, hostDirectiveDef, matchedDefs);
      }
      patchDeclaredInputs(hostDirectiveDef.declaredInputs, hostDirectiveConfig.inputs);
      findHostDirectiveDefs(hostDirectiveDef, matchedDefs, hostDirectiveDefs);
      hostDirectiveDefs.set(hostDirectiveDef, hostDirectiveConfig);
      matchedDefs.push(hostDirectiveDef);
    }
  }
}
function bindingArrayToMap(bindings) {
  if (bindings === void 0 || bindings.length === 0) {
    return EMPTY_OBJ;
  }
  const result = {};
  for (let i = 0; i < bindings.length; i += 2) {
    result[bindings[i]] = bindings[i + 1];
  }
  return result;
}
function patchDeclaredInputs(declaredInputs, exposedInputs) {
  for (const publicName in exposedInputs) {
    if (exposedInputs.hasOwnProperty(publicName)) {
      const remappedPublicName = exposedInputs[publicName];
      const privateName = declaredInputs[publicName];
      if ((typeof ngDevMode === "undefined" || ngDevMode) && declaredInputs.hasOwnProperty(remappedPublicName)) {
        assertEqual(declaredInputs[remappedPublicName], declaredInputs[publicName], `Conflicting host directive input alias ${publicName}.`);
      }
      declaredInputs[remappedPublicName] = privateName;
    }
  }
}
function validateHostDirective(hostDirectiveConfig, directiveDef, matchedDefs) {
  const type = hostDirectiveConfig.directive;
  if (directiveDef === null) {
    if (getComponentDef(type) !== null) {
      throw new RuntimeError(310, `Host directive ${type.name} cannot be a component.`);
    }
    throw new RuntimeError(307, `Could not resolve metadata for host directive ${type.name}. Make sure that the ${type.name} class is annotated with an @Directive decorator.`);
  }
  if (!directiveDef.standalone) {
    throw new RuntimeError(308, `Host directive ${directiveDef.type.name} must be standalone.`);
  }
  if (matchedDefs.indexOf(directiveDef) > -1) {
    throw new RuntimeError(309, `Directive ${directiveDef.type.name} matches multiple times on the same element. Directives can only match an element once.`);
  }
  validateMappings("input", directiveDef, hostDirectiveConfig.inputs);
  validateMappings("output", directiveDef, hostDirectiveConfig.outputs);
}
function validateMappings(bindingType, def, hostDirectiveBindings) {
  const className = def.type.name;
  const bindings = bindingType === "input" ? def.inputs : def.outputs;
  for (const publicName in hostDirectiveBindings) {
    if (hostDirectiveBindings.hasOwnProperty(publicName)) {
      if (!bindings.hasOwnProperty(publicName)) {
        throw new RuntimeError(311, `Directive ${className} does not have an ${bindingType} with a public name of ${publicName}.`);
      }
      const remappedPublicName = hostDirectiveBindings[publicName];
      if (bindings.hasOwnProperty(remappedPublicName) && remappedPublicName !== publicName && bindings[remappedPublicName] !== publicName) {
        throw new RuntimeError(312, `Cannot alias ${bindingType} ${publicName} of host directive ${className} to ${remappedPublicName}, because it already has a different ${bindingType} with the same public name.`);
      }
    }
  }
}
function \u0275\u0275InputTransformsFeature(definition) {
  const inputs = definition.inputConfig;
  const inputTransforms = {};
  for (const minifiedKey in inputs) {
    if (inputs.hasOwnProperty(minifiedKey)) {
      const value = inputs[minifiedKey];
      if (Array.isArray(value) && value[2]) {
        inputTransforms[minifiedKey] = value[2];
      }
    }
  }
  definition.inputTransforms = inputTransforms;
}
function isListLikeIterable(obj) {
  if (!isJsObject(obj))
    return false;
  return Array.isArray(obj) || !(obj instanceof Map) && // JS Map are iterables but return entries as [k, v]
  Symbol.iterator in obj;
}
function areIterablesEqual(a, b, comparator) {
  const iterator1 = a[Symbol.iterator]();
  const iterator2 = b[Symbol.iterator]();
  while (true) {
    const item1 = iterator1.next();
    const item2 = iterator2.next();
    if (item1.done && item2.done)
      return true;
    if (item1.done || item2.done)
      return false;
    if (!comparator(item1.value, item2.value))
      return false;
  }
}
function iterateListLike(obj, fn) {
  if (Array.isArray(obj)) {
    for (let i = 0; i < obj.length; i++) {
      fn(obj[i]);
    }
  } else {
    const iterator = obj[Symbol.iterator]();
    let item;
    while (!(item = iterator.next()).done) {
      fn(item.value);
    }
  }
}
function isJsObject(o) {
  return o !== null && (typeof o === "function" || typeof o === "object");
}
function devModeEqual(a, b) {
  const isListLikeIterableA = isListLikeIterable(a);
  const isListLikeIterableB = isListLikeIterable(b);
  if (isListLikeIterableA && isListLikeIterableB) {
    return areIterablesEqual(a, b, devModeEqual);
  } else {
    const isAObject = a && (typeof a === "object" || typeof a === "function");
    const isBObject = b && (typeof b === "object" || typeof b === "function");
    if (!isListLikeIterableA && isAObject && !isListLikeIterableB && isBObject) {
      return true;
    } else {
      return Object.is(a, b);
    }
  }
}
function updateBinding(lView, bindingIndex, value) {
  return lView[bindingIndex] = value;
}
function getBinding(lView, bindingIndex) {
  ngDevMode && assertIndexInRange(lView, bindingIndex);
  ngDevMode && assertNotSame(lView[bindingIndex], NO_CHANGE, "Stored value should never be NO_CHANGE.");
  return lView[bindingIndex];
}
function bindingUpdated(lView, bindingIndex, value) {
  ngDevMode && assertNotSame(value, NO_CHANGE, "Incoming value should never be NO_CHANGE.");
  ngDevMode && assertLessThan(bindingIndex, lView.length, `Slot should have been initialized to NO_CHANGE`);
  const oldValue = lView[bindingIndex];
  if (Object.is(oldValue, value)) {
    return false;
  } else {
    if (ngDevMode && isInCheckNoChangesMode()) {
      const oldValueToCompare = oldValue !== NO_CHANGE ? oldValue : void 0;
      if (!devModeEqual(oldValueToCompare, value)) {
        const details = getExpressionChangedErrorDetails(lView, bindingIndex, oldValueToCompare, value);
        throwErrorIfNoChangesMode(oldValue === NO_CHANGE, details.oldValue, details.newValue, details.propName, lView);
      }
      return false;
    }
    lView[bindingIndex] = value;
    return true;
  }
}
function bindingUpdated2(lView, bindingIndex, exp1, exp2) {
  const different = bindingUpdated(lView, bindingIndex, exp1);
  return bindingUpdated(lView, bindingIndex + 1, exp2) || different;
}
function bindingUpdated3(lView, bindingIndex, exp1, exp2, exp3) {
  const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
  return bindingUpdated(lView, bindingIndex + 2, exp3) || different;
}
function bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4) {
  const different = bindingUpdated2(lView, bindingIndex, exp1, exp2);
  return bindingUpdated2(lView, bindingIndex + 2, exp3, exp4) || different;
}
function \u0275\u0275attribute(name, value, sanitizer, namespace) {
  const lView = getLView();
  const bindingIndex = nextBindingIndex();
  if (bindingUpdated(lView, bindingIndex, value)) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, name, value, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, "attr." + name, bindingIndex);
  }
  return \u0275\u0275attribute;
}
function interpolationV(lView, values) {
  ngDevMode && assertLessThan(2, values.length, "should have at least 3 values");
  ngDevMode && assertEqual(values.length % 2, 1, "should have an odd number of values");
  let isBindingUpdated = false;
  let bindingIndex = getBindingIndex();
  for (let i = 1; i < values.length; i += 2) {
    isBindingUpdated = bindingUpdated(lView, bindingIndex++, values[i]) || isBindingUpdated;
  }
  setBindingIndex(bindingIndex);
  if (!isBindingUpdated) {
    return NO_CHANGE;
  }
  let content = values[0];
  for (let i = 1; i < values.length; i += 2) {
    content += renderStringify(values[i]) + values[i + 1];
  }
  return content;
}
function interpolation1(lView, prefix, v0, suffix) {
  const different = bindingUpdated(lView, nextBindingIndex(), v0);
  return different ? prefix + renderStringify(v0) + suffix : NO_CHANGE;
}
function interpolation2(lView, prefix, v0, i0, v1, suffix) {
  const bindingIndex = getBindingIndex();
  const different = bindingUpdated2(lView, bindingIndex, v0, v1);
  incrementBindingIndex(2);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + suffix : NO_CHANGE;
}
function interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix) {
  const bindingIndex = getBindingIndex();
  const different = bindingUpdated3(lView, bindingIndex, v0, v1, v2);
  incrementBindingIndex(3);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + suffix : NO_CHANGE;
}
function interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix) {
  const bindingIndex = getBindingIndex();
  const different = bindingUpdated4(lView, bindingIndex, v0, v1, v2, v3);
  incrementBindingIndex(4);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + i2 + renderStringify(v3) + suffix : NO_CHANGE;
}
function interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix) {
  const bindingIndex = getBindingIndex();
  let different = bindingUpdated4(lView, bindingIndex, v0, v1, v2, v3);
  different = bindingUpdated(lView, bindingIndex + 4, v4) || different;
  incrementBindingIndex(5);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + i2 + renderStringify(v3) + i3 + renderStringify(v4) + suffix : NO_CHANGE;
}
function interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix) {
  const bindingIndex = getBindingIndex();
  let different = bindingUpdated4(lView, bindingIndex, v0, v1, v2, v3);
  different = bindingUpdated2(lView, bindingIndex + 4, v4, v5) || different;
  incrementBindingIndex(6);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + i2 + renderStringify(v3) + i3 + renderStringify(v4) + i4 + renderStringify(v5) + suffix : NO_CHANGE;
}
function interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix) {
  const bindingIndex = getBindingIndex();
  let different = bindingUpdated4(lView, bindingIndex, v0, v1, v2, v3);
  different = bindingUpdated3(lView, bindingIndex + 4, v4, v5, v6) || different;
  incrementBindingIndex(7);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + i2 + renderStringify(v3) + i3 + renderStringify(v4) + i4 + renderStringify(v5) + i5 + renderStringify(v6) + suffix : NO_CHANGE;
}
function interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix) {
  const bindingIndex = getBindingIndex();
  let different = bindingUpdated4(lView, bindingIndex, v0, v1, v2, v3);
  different = bindingUpdated4(lView, bindingIndex + 4, v4, v5, v6, v7) || different;
  incrementBindingIndex(8);
  return different ? prefix + renderStringify(v0) + i0 + renderStringify(v1) + i1 + renderStringify(v2) + i2 + renderStringify(v3) + i3 + renderStringify(v4) + i4 + renderStringify(v5) + i5 + renderStringify(v6) + i6 + renderStringify(v7) + suffix : NO_CHANGE;
}
function \u0275\u0275attributeInterpolate1(attrName, prefix, v0, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation1(lView, prefix, v0, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 1, prefix, suffix);
  }
  return \u0275\u0275attributeInterpolate1;
}
function \u0275\u0275attributeInterpolate2(attrName, prefix, v0, i0, v1, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation2(lView, prefix, v0, i0, v1, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 2, prefix, i0, suffix);
  }
  return \u0275\u0275attributeInterpolate2;
}
function \u0275\u0275attributeInterpolate3(attrName, prefix, v0, i0, v1, i1, v2, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 3, prefix, i0, i1, suffix);
  }
  return \u0275\u0275attributeInterpolate3;
}
function \u0275\u0275attributeInterpolate4(attrName, prefix, v0, i0, v1, i1, v2, i2, v3, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 4, prefix, i0, i1, i2, suffix);
  }
  return \u0275\u0275attributeInterpolate4;
}
function \u0275\u0275attributeInterpolate5(attrName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 5, prefix, i0, i1, i2, i3, suffix);
  }
  return \u0275\u0275attributeInterpolate5;
}
function \u0275\u0275attributeInterpolate6(attrName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 6, prefix, i0, i1, i2, i3, i4, suffix);
  }
  return \u0275\u0275attributeInterpolate6;
}
function \u0275\u0275attributeInterpolate7(attrName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 7, prefix, i0, i1, i2, i3, i4, i5, suffix);
  }
  return \u0275\u0275attributeInterpolate7;
}
function \u0275\u0275attributeInterpolate8(attrName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix, sanitizer, namespace) {
  const lView = getLView();
  const interpolatedValue = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolatedValue, sanitizer, namespace);
    ngDevMode && storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - 8, prefix, i0, i1, i2, i3, i4, i5, i6, suffix);
  }
  return \u0275\u0275attributeInterpolate8;
}
function \u0275\u0275attributeInterpolateV(attrName, values, sanitizer, namespace) {
  const lView = getLView();
  const interpolated = interpolationV(lView, values);
  if (interpolated !== NO_CHANGE) {
    const tNode = getSelectedTNode();
    elementAttributeInternal(tNode, lView, attrName, interpolated, sanitizer, namespace);
    if (ngDevMode) {
      const interpolationInBetween = [values[0]];
      for (let i = 2; i < values.length; i += 2) {
        interpolationInBetween.push(values[i]);
      }
      storePropertyBindingMetadata(getTView().data, tNode, "attr." + attrName, getBindingIndex() - interpolationInBetween.length + 1, ...interpolationInBetween);
    }
  }
  return \u0275\u0275attributeInterpolateV;
}
var REF_EXTRACTOR_REGEXP = new RegExp(`^(\\d+)*(${REFERENCE_NODE_BODY}|${REFERENCE_NODE_HOST})*(.*)`);
function templateFirstCreatePass(index, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && ngDevMode.firstCreatePass++;
  const tViewConsts = tView.consts;
  const tNode = getOrCreateTNode(tView, index, 4, tagName || null, getConstant(tViewConsts, attrsIndex));
  resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
  registerPostOrderHooks(tView, tNode);
  const embeddedTView = tNode.tView = createTView(
    2,
    tNode,
    templateFn,
    decls,
    vars,
    tView.directiveRegistry,
    tView.pipeRegistry,
    null,
    tView.schemas,
    tViewConsts,
    null
    /* ssrId */
  );
  if (tView.queries !== null) {
    tView.queries.template(tView, tNode);
    embeddedTView.queries = tView.queries.embeddedTView(tNode);
  }
  return tNode;
}
function \u0275\u0275template(index, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex, localRefExtractor) {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = index + HEADER_OFFSET;
  const tNode = tView.firstCreatePass ? templateFirstCreatePass(adjustedIndex, tView, lView, templateFn, decls, vars, tagName, attrsIndex, localRefsIndex) : tView.data[adjustedIndex];
  setCurrentTNode(tNode, false);
  const comment = _locateOrCreateContainerAnchor(tView, lView, tNode, index);
  if (wasLastNodeCreated()) {
    appendChild(tView, lView, comment, tNode);
  }
  attachPatchData(comment, lView);
  addToViewTree(lView, lView[adjustedIndex] = createLContainer(comment, lView, comment, tNode));
  if (isDirectiveHost(tNode)) {
    createDirectivesInstances(tView, lView, tNode);
  }
  if (localRefsIndex != null) {
    saveResolvedLocalsInData(lView, tNode, localRefExtractor);
  }
}
var _locateOrCreateContainerAnchor = createContainerAnchorImpl;
function createContainerAnchorImpl(tView, lView, tNode, index) {
  lastNodeWasCreated(true);
  return lView[RENDERER].createComment(ngDevMode ? "container" : "");
}
function store(tView, lView, index, value) {
  if (index >= tView.data.length) {
    tView.data[index] = null;
    tView.blueprint[index] = null;
  }
  lView[index] = value;
}
function \u0275\u0275reference(index) {
  const contextLView = getContextLView();
  return load(contextLView, HEADER_OFFSET + index);
}
function \u0275\u0275property(propName, value, sanitizer) {
  const lView = getLView();
  const bindingIndex = nextBindingIndex();
  if (bindingUpdated(lView, bindingIndex, value)) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
  }
  return \u0275\u0275property;
}
function setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased) {
  const inputs = tNode.inputs;
  const property = isClassBased ? "class" : "style";
  setInputsForProperty(tView, lView, inputs[property], property, value);
}
function elementStartFirstCreatePass(index, tView, lView, name, attrsIndex, localRefsIndex) {
  ngDevMode && assertFirstCreatePass(tView);
  ngDevMode && ngDevMode.firstCreatePass++;
  const tViewConsts = tView.consts;
  const attrs = getConstant(tViewConsts, attrsIndex);
  const tNode = getOrCreateTNode(tView, index, 2, name, attrs);
  resolveDirectives(tView, lView, tNode, getConstant(tViewConsts, localRefsIndex));
  if (tNode.attrs !== null) {
    computeStaticStyling(tNode, tNode.attrs, false);
  }
  if (tNode.mergedAttrs !== null) {
    computeStaticStyling(tNode, tNode.mergedAttrs, true);
  }
  if (tView.queries !== null) {
    tView.queries.elementStart(tView, tNode);
  }
  return tNode;
}
function \u0275\u0275elementStart(index, name, attrsIndex, localRefsIndex) {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = HEADER_OFFSET + index;
  ngDevMode && assertEqual(getBindingIndex(), tView.bindingStartIndex, "elements should be created before any bindings");
  ngDevMode && assertIndexInRange(lView, adjustedIndex);
  const renderer = lView[RENDERER];
  const tNode = tView.firstCreatePass ? elementStartFirstCreatePass(adjustedIndex, tView, lView, name, attrsIndex, localRefsIndex) : tView.data[adjustedIndex];
  const native = _locateOrCreateElementNode(tView, lView, tNode, renderer, name, index);
  lView[adjustedIndex] = native;
  const hasDirectives = isDirectiveHost(tNode);
  if (ngDevMode && tView.firstCreatePass) {
    validateElementIsKnown(native, lView, tNode.value, tView.schemas, hasDirectives);
  }
  setCurrentTNode(tNode, true);
  setupStaticAttributes(renderer, native, tNode);
  if ((tNode.flags & 32) !== 32 && wasLastNodeCreated()) {
    appendChild(tView, lView, native, tNode);
  }
  if (getElementDepthCount() === 0) {
    attachPatchData(native, lView);
  }
  increaseElementDepthCount();
  if (hasDirectives) {
    createDirectivesInstances(tView, lView, tNode);
    executeContentQueries(tView, tNode, lView);
  }
  if (localRefsIndex !== null) {
    saveResolvedLocalsInData(lView, tNode);
  }
  return \u0275\u0275elementStart;
}
function \u0275\u0275elementEnd() {
  let currentTNode = getCurrentTNode();
  ngDevMode && assertDefined(currentTNode, "No parent node to close.");
  if (isCurrentTNodeParent()) {
    setCurrentTNodeAsNotParent();
  } else {
    ngDevMode && assertHasParent(getCurrentTNode());
    currentTNode = currentTNode.parent;
    setCurrentTNode(currentTNode, false);
  }
  const tNode = currentTNode;
  ngDevMode && assertTNodeType(
    tNode,
    3
    /* TNodeType.AnyRNode */
  );
  if (isSkipHydrationRootTNode(tNode)) {
    leaveSkipHydrationBlock();
  }
  decreaseElementDepthCount();
  const tView = getTView();
  if (tView.firstCreatePass) {
    registerPostOrderHooks(tView, currentTNode);
    if (isContentQueryHost(currentTNode)) {
      tView.queries.elementEnd(currentTNode);
    }
  }
  if (tNode.classesWithoutHost != null && hasClassInput(tNode)) {
    setDirectiveInputsWhichShadowsStyling(tView, tNode, getLView(), tNode.classesWithoutHost, true);
  }
  if (tNode.stylesWithoutHost != null && hasStyleInput(tNode)) {
    setDirectiveInputsWhichShadowsStyling(tView, tNode, getLView(), tNode.stylesWithoutHost, false);
  }
  return \u0275\u0275elementEnd;
}
function \u0275\u0275element(index, name, attrsIndex, localRefsIndex) {
  \u0275\u0275elementStart(index, name, attrsIndex, localRefsIndex);
  \u0275\u0275elementEnd();
  return \u0275\u0275element;
}
var _locateOrCreateElementNode = (tView, lView, tNode, renderer, name, index) => {
  lastNodeWasCreated(true);
  return createElementNode(renderer, name, getNamespace$1());
};
function elementContainerStartFirstCreatePass(index, tView, lView, attrsIndex, localRefsIndex) {
  ngDevMode && ngDevMode.firstCreatePass++;
  const tViewConsts = tView.consts;
  const attrs = getConstant(tViewConsts, attrsIndex);
  const tNode = getOrCreateTNode(tView, index, 8, "ng-container", attrs);
  if (attrs !== null) {
    computeStaticStyling(tNode, attrs, true);
  }
  const localRefs = getConstant(tViewConsts, localRefsIndex);
  resolveDirectives(tView, lView, tNode, localRefs);
  if (tView.queries !== null) {
    tView.queries.elementStart(tView, tNode);
  }
  return tNode;
}
function \u0275\u0275elementContainerStart(index, attrsIndex, localRefsIndex) {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = index + HEADER_OFFSET;
  ngDevMode && assertIndexInRange(lView, adjustedIndex);
  ngDevMode && assertEqual(getBindingIndex(), tView.bindingStartIndex, "element containers should be created before any bindings");
  const tNode = tView.firstCreatePass ? elementContainerStartFirstCreatePass(adjustedIndex, tView, lView, attrsIndex, localRefsIndex) : tView.data[adjustedIndex];
  setCurrentTNode(tNode, true);
  const comment = _locateOrCreateElementContainerNode(tView, lView, tNode, index);
  lView[adjustedIndex] = comment;
  if (wasLastNodeCreated()) {
    appendChild(tView, lView, comment, tNode);
  }
  attachPatchData(comment, lView);
  if (isDirectiveHost(tNode)) {
    createDirectivesInstances(tView, lView, tNode);
    executeContentQueries(tView, tNode, lView);
  }
  if (localRefsIndex != null) {
    saveResolvedLocalsInData(lView, tNode);
  }
  return \u0275\u0275elementContainerStart;
}
function \u0275\u0275elementContainerEnd() {
  let currentTNode = getCurrentTNode();
  const tView = getTView();
  if (isCurrentTNodeParent()) {
    setCurrentTNodeAsNotParent();
  } else {
    ngDevMode && assertHasParent(currentTNode);
    currentTNode = currentTNode.parent;
    setCurrentTNode(currentTNode, false);
  }
  ngDevMode && assertTNodeType(
    currentTNode,
    8
    /* TNodeType.ElementContainer */
  );
  if (tView.firstCreatePass) {
    registerPostOrderHooks(tView, currentTNode);
    if (isContentQueryHost(currentTNode)) {
      tView.queries.elementEnd(currentTNode);
    }
  }
  return \u0275\u0275elementContainerEnd;
}
function \u0275\u0275elementContainer(index, attrsIndex, localRefsIndex) {
  \u0275\u0275elementContainerStart(index, attrsIndex, localRefsIndex);
  \u0275\u0275elementContainerEnd();
  return \u0275\u0275elementContainer;
}
var _locateOrCreateElementContainerNode = (tView, lView, tNode, index) => {
  lastNodeWasCreated(true);
  return createCommentNode(lView[RENDERER], ngDevMode ? "ng-container" : "");
};
function \u0275\u0275getCurrentView() {
  return getLView();
}
function isPromise(obj) {
  return !!obj && typeof obj.then === "function";
}
function isSubscribable(obj) {
  return !!obj && typeof obj.subscribe === "function";
}
function \u0275\u0275listener(eventName, listenerFn, useCapture, eventTargetResolver) {
  const lView = getLView();
  const tView = getTView();
  const tNode = getCurrentTNode();
  listenerInternal(tView, lView, lView[RENDERER], tNode, eventName, listenerFn, eventTargetResolver);
  return \u0275\u0275listener;
}
function \u0275\u0275syntheticHostListener(eventName, listenerFn) {
  const tNode = getCurrentTNode();
  const lView = getLView();
  const tView = getTView();
  const currentDef = getCurrentDirectiveDef(tView.data);
  const renderer = loadComponentRenderer(currentDef, tNode, lView);
  listenerInternal(tView, lView, renderer, tNode, eventName, listenerFn);
  return \u0275\u0275syntheticHostListener;
}
function findExistingListener(tView, lView, eventName, tNodeIdx) {
  const tCleanup = tView.cleanup;
  if (tCleanup != null) {
    for (let i = 0; i < tCleanup.length - 1; i += 2) {
      const cleanupEventName = tCleanup[i];
      if (cleanupEventName === eventName && tCleanup[i + 1] === tNodeIdx) {
        const lCleanup = lView[CLEANUP];
        const listenerIdxInLCleanup = tCleanup[i + 2];
        return lCleanup.length > listenerIdxInLCleanup ? lCleanup[listenerIdxInLCleanup] : null;
      }
      if (typeof cleanupEventName === "string") {
        i += 2;
      }
    }
  }
  return null;
}
function listenerInternal(tView, lView, renderer, tNode, eventName, listenerFn, eventTargetResolver) {
  const isTNodeDirectiveHost = isDirectiveHost(tNode);
  const firstCreatePass = tView.firstCreatePass;
  const tCleanup = firstCreatePass && getOrCreateTViewCleanup(tView);
  const context = lView[CONTEXT];
  const lCleanup = getOrCreateLViewCleanup(lView);
  ngDevMode && assertTNodeType(
    tNode,
    3 | 12
    /* TNodeType.AnyContainer */
  );
  let processOutputs = true;
  if (tNode.type & 3 || eventTargetResolver) {
    const native = getNativeByTNode(tNode, lView);
    const target = eventTargetResolver ? eventTargetResolver(native) : native;
    const lCleanupIndex = lCleanup.length;
    const idxOrTargetGetter = eventTargetResolver ? (_lView) => eventTargetResolver(unwrapRNode(_lView[tNode.index])) : tNode.index;
    let existingListener = null;
    if (!eventTargetResolver && isTNodeDirectiveHost) {
      existingListener = findExistingListener(tView, lView, eventName, tNode.index);
    }
    if (existingListener !== null) {
      const lastListenerFn = existingListener.__ngLastListenerFn__ || existingListener;
      lastListenerFn.__ngNextListenerFn__ = listenerFn;
      existingListener.__ngLastListenerFn__ = listenerFn;
      processOutputs = false;
    } else {
      listenerFn = wrapListener(
        tNode,
        lView,
        context,
        listenerFn,
        false
        /** preventDefault */
      );
      const cleanupFn = renderer.listen(target, eventName, listenerFn);
      ngDevMode && ngDevMode.rendererAddEventListener++;
      lCleanup.push(listenerFn, cleanupFn);
      tCleanup && tCleanup.push(eventName, idxOrTargetGetter, lCleanupIndex, lCleanupIndex + 1);
    }
  } else {
    listenerFn = wrapListener(
      tNode,
      lView,
      context,
      listenerFn,
      false
      /** preventDefault */
    );
  }
  const outputs = tNode.outputs;
  let props;
  if (processOutputs && outputs !== null && (props = outputs[eventName])) {
    const propsLength = props.length;
    if (propsLength) {
      for (let i = 0; i < propsLength; i += 2) {
        const index = props[i];
        ngDevMode && assertIndexInRange(lView, index);
        const minifiedName = props[i + 1];
        const directiveInstance = lView[index];
        const output = directiveInstance[minifiedName];
        if (ngDevMode && !isSubscribable(output)) {
          throw new Error(`@Output ${minifiedName} not initialized in '${directiveInstance.constructor.name}'.`);
        }
        const subscription = output.subscribe(listenerFn);
        const idx = lCleanup.length;
        lCleanup.push(listenerFn, subscription);
        tCleanup && tCleanup.push(eventName, tNode.index, idx, -(idx + 1));
      }
    }
  }
}
function executeListenerWithErrorHandling(lView, context, listenerFn, e) {
  try {
    profiler(6, context, listenerFn);
    return listenerFn(e) !== false;
  } catch (error) {
    handleError(lView, error);
    return false;
  } finally {
    profiler(7, context, listenerFn);
  }
}
function wrapListener(tNode, lView, context, listenerFn, wrapWithPreventDefault) {
  return function wrapListenerIn_markDirtyAndPreventDefault(e) {
    if (e === Function) {
      return listenerFn;
    }
    const startView = tNode.componentOffset > -1 ? getComponentLViewByIndex(tNode.index, lView) : lView;
    markViewDirty(startView);
    let result = executeListenerWithErrorHandling(lView, context, listenerFn, e);
    let nextListenerFn = wrapListenerIn_markDirtyAndPreventDefault.__ngNextListenerFn__;
    while (nextListenerFn) {
      result = executeListenerWithErrorHandling(lView, context, nextListenerFn, e) && result;
      nextListenerFn = nextListenerFn.__ngNextListenerFn__;
    }
    if (wrapWithPreventDefault && result === false) {
      e.preventDefault();
    }
    return result;
  };
}
function \u0275\u0275nextContext(level = 1) {
  return nextContextImpl(level);
}
function matchingProjectionSlotIndex(tNode, projectionSlots) {
  let wildcardNgContentIndex = null;
  const ngProjectAsAttrVal = getProjectAsAttrValue(tNode);
  for (let i = 0; i < projectionSlots.length; i++) {
    const slotValue = projectionSlots[i];
    if (slotValue === "*") {
      wildcardNgContentIndex = i;
      continue;
    }
    if (ngProjectAsAttrVal === null ? isNodeMatchingSelectorList(
      tNode,
      slotValue,
      /* isProjectionMode */
      true
    ) : isSelectorInSelectorList(ngProjectAsAttrVal, slotValue)) {
      return i;
    }
  }
  return wildcardNgContentIndex;
}
function \u0275\u0275projectionDef(projectionSlots) {
  const componentNode = getLView()[DECLARATION_COMPONENT_VIEW][T_HOST];
  if (!componentNode.projection) {
    const numProjectionSlots = projectionSlots ? projectionSlots.length : 1;
    const projectionHeads = componentNode.projection = newArray(numProjectionSlots, null);
    const tails = projectionHeads.slice();
    let componentChild = componentNode.child;
    while (componentChild !== null) {
      const slotIndex = projectionSlots ? matchingProjectionSlotIndex(componentChild, projectionSlots) : 0;
      if (slotIndex !== null) {
        if (tails[slotIndex]) {
          tails[slotIndex].projectionNext = componentChild;
        } else {
          projectionHeads[slotIndex] = componentChild;
        }
        tails[slotIndex] = componentChild;
      }
      componentChild = componentChild.next;
    }
  }
}
function \u0275\u0275projection(nodeIndex, selectorIndex = 0, attrs) {
  const lView = getLView();
  const tView = getTView();
  const tProjectionNode = getOrCreateTNode(tView, HEADER_OFFSET + nodeIndex, 16, null, attrs || null);
  if (tProjectionNode.projection === null)
    tProjectionNode.projection = selectorIndex;
  setCurrentTNodeAsNotParent();
  const hydrationInfo = lView[HYDRATION];
  const isNodeCreationMode = !hydrationInfo || isInSkipHydrationBlock$1();
  if (isNodeCreationMode && (tProjectionNode.flags & 32) !== 32) {
    applyProjection(tView, lView, tProjectionNode);
  }
}
function \u0275\u0275propertyInterpolate(propName, v0, sanitizer) {
  \u0275\u0275propertyInterpolate1(propName, "", v0, "", sanitizer);
  return \u0275\u0275propertyInterpolate;
}
function \u0275\u0275propertyInterpolate1(propName, prefix, v0, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation1(lView, prefix, v0, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 1, prefix, suffix);
  }
  return \u0275\u0275propertyInterpolate1;
}
function \u0275\u0275propertyInterpolate2(propName, prefix, v0, i0, v1, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation2(lView, prefix, v0, i0, v1, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 2, prefix, i0, suffix);
  }
  return \u0275\u0275propertyInterpolate2;
}
function \u0275\u0275propertyInterpolate3(propName, prefix, v0, i0, v1, i1, v2, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 3, prefix, i0, i1, suffix);
  }
  return \u0275\u0275propertyInterpolate3;
}
function \u0275\u0275propertyInterpolate4(propName, prefix, v0, i0, v1, i1, v2, i2, v3, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 4, prefix, i0, i1, i2, suffix);
  }
  return \u0275\u0275propertyInterpolate4;
}
function \u0275\u0275propertyInterpolate5(propName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 5, prefix, i0, i1, i2, i3, suffix);
  }
  return \u0275\u0275propertyInterpolate5;
}
function \u0275\u0275propertyInterpolate6(propName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 6, prefix, i0, i1, i2, i3, i4, suffix);
  }
  return \u0275\u0275propertyInterpolate6;
}
function \u0275\u0275propertyInterpolate7(propName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 7, prefix, i0, i1, i2, i3, i4, i5, suffix);
  }
  return \u0275\u0275propertyInterpolate7;
}
function \u0275\u0275propertyInterpolate8(propName, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - 8, prefix, i0, i1, i2, i3, i4, i5, i6, suffix);
  }
  return \u0275\u0275propertyInterpolate8;
}
function \u0275\u0275propertyInterpolateV(propName, values, sanitizer) {
  const lView = getLView();
  const interpolatedValue = interpolationV(lView, values);
  if (interpolatedValue !== NO_CHANGE) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, interpolatedValue, lView[RENDERER], sanitizer, false);
    if (ngDevMode) {
      const interpolationInBetween = [values[0]];
      for (let i = 2; i < values.length; i += 2) {
        interpolationInBetween.push(values[i]);
      }
      storePropertyBindingMetadata(tView.data, tNode, propName, getBindingIndex() - interpolationInBetween.length + 1, ...interpolationInBetween);
    }
  }
  return \u0275\u0275propertyInterpolateV;
}
function toTStylingRange(prev, next) {
  ngDevMode && assertNumberInRange(
    prev,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  );
  ngDevMode && assertNumberInRange(
    next,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  );
  return prev << 17 | next << 2;
}
function getTStylingRangePrev(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return tStylingRange >> 17 & 32767;
}
function getTStylingRangePrevDuplicate(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return (tStylingRange & 2) == 2;
}
function setTStylingRangePrev(tStylingRange, previous) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  ngDevMode && assertNumberInRange(
    previous,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  );
  return tStylingRange & ~4294836224 | previous << 17;
}
function setTStylingRangePrevDuplicate(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return tStylingRange | 2;
}
function getTStylingRangeNext(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return (tStylingRange & 131068) >> 2;
}
function setTStylingRangeNext(tStylingRange, next) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  ngDevMode && assertNumberInRange(
    next,
    0,
    32767
    /* StylingRange.UNSIGNED_MASK */
  );
  return tStylingRange & ~131068 | //
  next << 2;
}
function getTStylingRangeNextDuplicate(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return (tStylingRange & 1) === 1;
}
function setTStylingRangeNextDuplicate(tStylingRange) {
  ngDevMode && assertNumber(tStylingRange, "expected number");
  return tStylingRange | 1;
}
function insertTStylingBinding(tData, tNode, tStylingKeyWithStatic, index, isHostBinding, isClassBinding) {
  ngDevMode && assertFirstUpdatePass(getTView());
  let tBindings = isClassBinding ? tNode.classBindings : tNode.styleBindings;
  let tmplHead = getTStylingRangePrev(tBindings);
  let tmplTail = getTStylingRangeNext(tBindings);
  tData[index] = tStylingKeyWithStatic;
  let isKeyDuplicateOfStatic = false;
  let tStylingKey;
  if (Array.isArray(tStylingKeyWithStatic)) {
    const staticKeyValueArray = tStylingKeyWithStatic;
    tStylingKey = staticKeyValueArray[1];
    if (tStylingKey === null || keyValueArrayIndexOf(staticKeyValueArray, tStylingKey) > 0) {
      isKeyDuplicateOfStatic = true;
    }
  } else {
    tStylingKey = tStylingKeyWithStatic;
  }
  if (isHostBinding) {
    const hasTemplateBindings = tmplTail !== 0;
    if (hasTemplateBindings) {
      const previousNode = getTStylingRangePrev(tData[tmplHead + 1]);
      tData[index + 1] = toTStylingRange(previousNode, tmplHead);
      if (previousNode !== 0) {
        tData[previousNode + 1] = setTStylingRangeNext(tData[previousNode + 1], index);
      }
      tData[tmplHead + 1] = setTStylingRangePrev(tData[tmplHead + 1], index);
    } else {
      tData[index + 1] = toTStylingRange(tmplHead, 0);
      if (tmplHead !== 0) {
        tData[tmplHead + 1] = setTStylingRangeNext(tData[tmplHead + 1], index);
      }
      tmplHead = index;
    }
  } else {
    tData[index + 1] = toTStylingRange(tmplTail, 0);
    ngDevMode && assertEqual(tmplHead !== 0 && tmplTail === 0, false, "Adding template bindings after hostBindings is not allowed.");
    if (tmplHead === 0) {
      tmplHead = index;
    } else {
      tData[tmplTail + 1] = setTStylingRangeNext(tData[tmplTail + 1], index);
    }
    tmplTail = index;
  }
  if (isKeyDuplicateOfStatic) {
    tData[index + 1] = setTStylingRangePrevDuplicate(tData[index + 1]);
  }
  markDuplicates(tData, tStylingKey, index, true, isClassBinding);
  markDuplicates(tData, tStylingKey, index, false, isClassBinding);
  markDuplicateOfResidualStyling(tNode, tStylingKey, tData, index, isClassBinding);
  tBindings = toTStylingRange(tmplHead, tmplTail);
  if (isClassBinding) {
    tNode.classBindings = tBindings;
  } else {
    tNode.styleBindings = tBindings;
  }
}
function markDuplicateOfResidualStyling(tNode, tStylingKey, tData, index, isClassBinding) {
  const residual = isClassBinding ? tNode.residualClasses : tNode.residualStyles;
  if (residual != null && typeof tStylingKey == "string" && keyValueArrayIndexOf(residual, tStylingKey) >= 0) {
    tData[index + 1] = setTStylingRangeNextDuplicate(tData[index + 1]);
  }
}
function markDuplicates(tData, tStylingKey, index, isPrevDir, isClassBinding) {
  const tStylingAtIndex = tData[index + 1];
  const isMap = tStylingKey === null;
  let cursor = isPrevDir ? getTStylingRangePrev(tStylingAtIndex) : getTStylingRangeNext(tStylingAtIndex);
  let foundDuplicate = false;
  while (cursor !== 0 && (foundDuplicate === false || isMap)) {
    ngDevMode && assertIndexInRange(tData, cursor);
    const tStylingValueAtCursor = tData[cursor];
    const tStyleRangeAtCursor = tData[cursor + 1];
    if (isStylingMatch(tStylingValueAtCursor, tStylingKey)) {
      foundDuplicate = true;
      tData[cursor + 1] = isPrevDir ? setTStylingRangeNextDuplicate(tStyleRangeAtCursor) : setTStylingRangePrevDuplicate(tStyleRangeAtCursor);
    }
    cursor = isPrevDir ? getTStylingRangePrev(tStyleRangeAtCursor) : getTStylingRangeNext(tStyleRangeAtCursor);
  }
  if (foundDuplicate) {
    tData[index + 1] = isPrevDir ? setTStylingRangePrevDuplicate(tStylingAtIndex) : setTStylingRangeNextDuplicate(tStylingAtIndex);
  }
}
function isStylingMatch(tStylingKeyCursor, tStylingKey) {
  ngDevMode && assertNotEqual(Array.isArray(tStylingKey), true, "Expected that 'tStylingKey' has been unwrapped");
  if (tStylingKeyCursor === null || // If the cursor is `null` it means that we have map at that
  // location so we must assume that we have a match.
  tStylingKey == null || // If `tStylingKey` is `null` then it is a map therefor assume that it
  // contains a match.
  (Array.isArray(tStylingKeyCursor) ? tStylingKeyCursor[1] : tStylingKeyCursor) === tStylingKey) {
    return true;
  } else if (Array.isArray(tStylingKeyCursor) && typeof tStylingKey === "string") {
    return keyValueArrayIndexOf(tStylingKeyCursor, tStylingKey) >= 0;
  }
  return false;
}
var parserState = {
  textEnd: 0,
  key: 0,
  keyEnd: 0,
  value: 0,
  valueEnd: 0
};
function getLastParsedKey(text) {
  return text.substring(parserState.key, parserState.keyEnd);
}
function getLastParsedValue(text) {
  return text.substring(parserState.value, parserState.valueEnd);
}
function parseClassName(text) {
  resetParserState(text);
  return parseClassNameNext(text, consumeWhitespace(text, 0, parserState.textEnd));
}
function parseClassNameNext(text, index) {
  const end = parserState.textEnd;
  if (end === index) {
    return -1;
  }
  index = parserState.keyEnd = consumeClassToken(text, parserState.key = index, end);
  return consumeWhitespace(text, index, end);
}
function parseStyle(text) {
  resetParserState(text);
  return parseStyleNext(text, consumeWhitespace(text, 0, parserState.textEnd));
}
function parseStyleNext(text, startIndex) {
  const end = parserState.textEnd;
  let index = parserState.key = consumeWhitespace(text, startIndex, end);
  if (end === index) {
    return -1;
  }
  index = parserState.keyEnd = consumeStyleKey(text, index, end);
  index = consumeSeparator(
    text,
    index,
    end,
    58
    /* CharCode.COLON */
  );
  index = parserState.value = consumeWhitespace(text, index, end);
  index = parserState.valueEnd = consumeStyleValue(text, index, end);
  return consumeSeparator(
    text,
    index,
    end,
    59
    /* CharCode.SEMI_COLON */
  );
}
function resetParserState(text) {
  parserState.key = 0;
  parserState.keyEnd = 0;
  parserState.value = 0;
  parserState.valueEnd = 0;
  parserState.textEnd = text.length;
}
function consumeWhitespace(text, startIndex, endIndex) {
  while (startIndex < endIndex && text.charCodeAt(startIndex) <= 32) {
    startIndex++;
  }
  return startIndex;
}
function consumeClassToken(text, startIndex, endIndex) {
  while (startIndex < endIndex && text.charCodeAt(startIndex) > 32) {
    startIndex++;
  }
  return startIndex;
}
function consumeStyleKey(text, startIndex, endIndex) {
  let ch;
  while (startIndex < endIndex && ((ch = text.charCodeAt(startIndex)) === 45 || ch === 95 || (ch & -33) >= 65 && (ch & -33) <= 90 || ch >= 48 && ch <= 57)) {
    startIndex++;
  }
  return startIndex;
}
function consumeSeparator(text, startIndex, endIndex, separator) {
  startIndex = consumeWhitespace(text, startIndex, endIndex);
  if (startIndex < endIndex) {
    if (ngDevMode && text.charCodeAt(startIndex) !== separator) {
      malformedStyleError(text, String.fromCharCode(separator), startIndex);
    }
    startIndex++;
  }
  return startIndex;
}
function consumeStyleValue(text, startIndex, endIndex) {
  let ch1 = -1;
  let ch2 = -1;
  let ch3 = -1;
  let i = startIndex;
  let lastChIndex = i;
  while (i < endIndex) {
    const ch = text.charCodeAt(i++);
    if (ch === 59) {
      return lastChIndex;
    } else if (ch === 34 || ch === 39) {
      lastChIndex = i = consumeQuotedText(text, ch, i, endIndex);
    } else if (startIndex === i - 4 && // We have seen only 4 characters so far "URL(" (Ignore "foo_URL()")
    ch3 === 85 && ch2 === 82 && ch1 === 76 && ch === 40) {
      lastChIndex = i = consumeQuotedText(text, 41, i, endIndex);
    } else if (ch > 32) {
      lastChIndex = i;
    }
    ch3 = ch2;
    ch2 = ch1;
    ch1 = ch & -33;
  }
  return lastChIndex;
}
function consumeQuotedText(text, quoteCharCode, startIndex, endIndex) {
  let ch1 = -1;
  let index = startIndex;
  while (index < endIndex) {
    const ch = text.charCodeAt(index++);
    if (ch == quoteCharCode && ch1 !== 92) {
      return index;
    }
    if (ch == 92 && ch1 === 92) {
      ch1 = 0;
    } else {
      ch1 = ch;
    }
  }
  throw ngDevMode ? malformedStyleError(text, String.fromCharCode(quoteCharCode), endIndex) : new Error();
}
function malformedStyleError(text, expecting, index) {
  ngDevMode && assertEqual(typeof text === "string", true, "String expected here");
  throw throwError(`Malformed style at location ${index} in string '` + text.substring(0, index) + "[>>" + text.substring(index, index + 1) + "<<]" + text.slice(index + 1) + `'. Expecting '${expecting}'.`);
}
function \u0275\u0275styleProp(prop, value, suffix) {
  checkStylingProperty(prop, value, suffix, false);
  return \u0275\u0275styleProp;
}
function \u0275\u0275classProp(className, value) {
  checkStylingProperty(className, value, null, true);
  return \u0275\u0275classProp;
}
function \u0275\u0275styleMap(styles) {
  checkStylingMap(styleKeyValueArraySet, styleStringParser, styles, false);
}
function styleStringParser(keyValueArray, text) {
  for (let i = parseStyle(text); i >= 0; i = parseStyleNext(text, i)) {
    styleKeyValueArraySet(keyValueArray, getLastParsedKey(text), getLastParsedValue(text));
  }
}
function \u0275\u0275classMap(classes) {
  checkStylingMap(classKeyValueArraySet, classStringParser, classes, true);
}
function classStringParser(keyValueArray, text) {
  for (let i = parseClassName(text); i >= 0; i = parseClassNameNext(text, i)) {
    keyValueArraySet(keyValueArray, getLastParsedKey(text), true);
  }
}
function checkStylingProperty(prop, value, suffix, isClassBased) {
  const lView = getLView();
  const tView = getTView();
  const bindingIndex = incrementBindingIndex(2);
  if (tView.firstUpdatePass) {
    stylingFirstUpdatePass(tView, prop, bindingIndex, isClassBased);
  }
  if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
    const tNode = tView.data[getSelectedIndex()];
    updateStyling(tView, tNode, lView, lView[RENDERER], prop, lView[bindingIndex + 1] = normalizeSuffix(value, suffix), isClassBased, bindingIndex);
  }
}
function checkStylingMap(keyValueArraySet2, stringParser, value, isClassBased) {
  const tView = getTView();
  const bindingIndex = incrementBindingIndex(2);
  if (tView.firstUpdatePass) {
    stylingFirstUpdatePass(tView, null, bindingIndex, isClassBased);
  }
  const lView = getLView();
  if (value !== NO_CHANGE && bindingUpdated(lView, bindingIndex, value)) {
    const tNode = tView.data[getSelectedIndex()];
    if (hasStylingInputShadow(tNode, isClassBased) && !isInHostBindings(tView, bindingIndex)) {
      if (ngDevMode) {
        const tStylingKey = tView.data[bindingIndex];
        assertEqual(Array.isArray(tStylingKey) ? tStylingKey[1] : tStylingKey, false, "Styling linked list shadow input should be marked as 'false'");
      }
      let staticPrefix = isClassBased ? tNode.classesWithoutHost : tNode.stylesWithoutHost;
      ngDevMode && isClassBased === false && staticPrefix !== null && assertEqual(staticPrefix.endsWith(";"), true, "Expecting static portion to end with ';'");
      if (staticPrefix !== null) {
        value = concatStringsWithSpace(staticPrefix, value ? value : "");
      }
      setDirectiveInputsWhichShadowsStyling(tView, tNode, lView, value, isClassBased);
    } else {
      updateStylingMap(tView, tNode, lView, lView[RENDERER], lView[bindingIndex + 1], lView[bindingIndex + 1] = toStylingKeyValueArray(keyValueArraySet2, stringParser, value), isClassBased, bindingIndex);
    }
  }
}
function isInHostBindings(tView, bindingIndex) {
  return bindingIndex >= tView.expandoStartIndex;
}
function stylingFirstUpdatePass(tView, tStylingKey, bindingIndex, isClassBased) {
  ngDevMode && assertFirstUpdatePass(tView);
  const tData = tView.data;
  if (tData[bindingIndex + 1] === null) {
    const tNode = tData[getSelectedIndex()];
    ngDevMode && assertDefined(tNode, "TNode expected");
    const isHostBindings = isInHostBindings(tView, bindingIndex);
    if (hasStylingInputShadow(tNode, isClassBased) && tStylingKey === null && !isHostBindings) {
      tStylingKey = false;
    }
    tStylingKey = wrapInStaticStylingKey(tData, tNode, tStylingKey, isClassBased);
    insertTStylingBinding(tData, tNode, tStylingKey, bindingIndex, isHostBindings, isClassBased);
  }
}
function wrapInStaticStylingKey(tData, tNode, stylingKey, isClassBased) {
  const hostDirectiveDef = getCurrentDirectiveDef(tData);
  let residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
  if (hostDirectiveDef === null) {
    const isFirstStylingInstructionInTemplate = (isClassBased ? tNode.classBindings : tNode.styleBindings) === 0;
    if (isFirstStylingInstructionInTemplate) {
      stylingKey = collectStylingFromDirectives(null, tData, tNode, stylingKey, isClassBased);
      stylingKey = collectStylingFromTAttrs(stylingKey, tNode.attrs, isClassBased);
      residual = null;
    }
  } else {
    const directiveStylingLast = tNode.directiveStylingLast;
    const isFirstStylingInstructionInHostBinding = directiveStylingLast === -1 || tData[directiveStylingLast] !== hostDirectiveDef;
    if (isFirstStylingInstructionInHostBinding) {
      stylingKey = collectStylingFromDirectives(hostDirectiveDef, tData, tNode, stylingKey, isClassBased);
      if (residual === null) {
        let templateStylingKey = getTemplateHeadTStylingKey(tData, tNode, isClassBased);
        if (templateStylingKey !== void 0 && Array.isArray(templateStylingKey)) {
          templateStylingKey = collectStylingFromDirectives(null, tData, tNode, templateStylingKey[1], isClassBased);
          templateStylingKey = collectStylingFromTAttrs(templateStylingKey, tNode.attrs, isClassBased);
          setTemplateHeadTStylingKey(tData, tNode, isClassBased, templateStylingKey);
        }
      } else {
        residual = collectResidual(tData, tNode, isClassBased);
      }
    }
  }
  if (residual !== void 0) {
    isClassBased ? tNode.residualClasses = residual : tNode.residualStyles = residual;
  }
  return stylingKey;
}
function getTemplateHeadTStylingKey(tData, tNode, isClassBased) {
  const bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
  if (getTStylingRangeNext(bindings) === 0) {
    return void 0;
  }
  return tData[getTStylingRangePrev(bindings)];
}
function setTemplateHeadTStylingKey(tData, tNode, isClassBased, tStylingKey) {
  const bindings = isClassBased ? tNode.classBindings : tNode.styleBindings;
  ngDevMode && assertNotEqual(getTStylingRangeNext(bindings), 0, "Expecting to have at least one template styling binding.");
  tData[getTStylingRangePrev(bindings)] = tStylingKey;
}
function collectResidual(tData, tNode, isClassBased) {
  let residual = void 0;
  const directiveEnd = tNode.directiveEnd;
  ngDevMode && assertNotEqual(tNode.directiveStylingLast, -1, "By the time this function gets called at least one hostBindings-node styling instruction must have executed.");
  for (let i = 1 + tNode.directiveStylingLast; i < directiveEnd; i++) {
    const attrs = tData[i].hostAttrs;
    residual = collectStylingFromTAttrs(residual, attrs, isClassBased);
  }
  return collectStylingFromTAttrs(residual, tNode.attrs, isClassBased);
}
function collectStylingFromDirectives(hostDirectiveDef, tData, tNode, stylingKey, isClassBased) {
  let currentDirective = null;
  const directiveEnd = tNode.directiveEnd;
  let directiveStylingLast = tNode.directiveStylingLast;
  if (directiveStylingLast === -1) {
    directiveStylingLast = tNode.directiveStart;
  } else {
    directiveStylingLast++;
  }
  while (directiveStylingLast < directiveEnd) {
    currentDirective = tData[directiveStylingLast];
    ngDevMode && assertDefined(currentDirective, "expected to be defined");
    stylingKey = collectStylingFromTAttrs(stylingKey, currentDirective.hostAttrs, isClassBased);
    if (currentDirective === hostDirectiveDef)
      break;
    directiveStylingLast++;
  }
  if (hostDirectiveDef !== null) {
    tNode.directiveStylingLast = directiveStylingLast;
  }
  return stylingKey;
}
function collectStylingFromTAttrs(stylingKey, attrs, isClassBased) {
  const desiredMarker = isClassBased ? 1 : 2;
  let currentMarker = -1;
  if (attrs !== null) {
    for (let i = 0; i < attrs.length; i++) {
      const item = attrs[i];
      if (typeof item === "number") {
        currentMarker = item;
      } else {
        if (currentMarker === desiredMarker) {
          if (!Array.isArray(stylingKey)) {
            stylingKey = stylingKey === void 0 ? [] : ["", stylingKey];
          }
          keyValueArraySet(stylingKey, item, isClassBased ? true : attrs[++i]);
        }
      }
    }
  }
  return stylingKey === void 0 ? null : stylingKey;
}
function toStylingKeyValueArray(keyValueArraySet2, stringParser, value) {
  if (value == null || value === "")
    return EMPTY_ARRAY;
  const styleKeyValueArray = [];
  const unwrappedValue = unwrapSafeValue(value);
  if (Array.isArray(unwrappedValue)) {
    for (let i = 0; i < unwrappedValue.length; i++) {
      keyValueArraySet2(styleKeyValueArray, unwrappedValue[i], true);
    }
  } else if (typeof unwrappedValue === "object") {
    for (const key in unwrappedValue) {
      if (unwrappedValue.hasOwnProperty(key)) {
        keyValueArraySet2(styleKeyValueArray, key, unwrappedValue[key]);
      }
    }
  } else if (typeof unwrappedValue === "string") {
    stringParser(styleKeyValueArray, unwrappedValue);
  } else {
    ngDevMode && throwError("Unsupported styling type " + typeof unwrappedValue + ": " + unwrappedValue);
  }
  return styleKeyValueArray;
}
function styleKeyValueArraySet(keyValueArray, key, value) {
  keyValueArraySet(keyValueArray, key, unwrapSafeValue(value));
}
function classKeyValueArraySet(keyValueArray, key, value) {
  const stringKey = String(key);
  if (stringKey !== "" && !stringKey.includes(" ")) {
    keyValueArraySet(keyValueArray, stringKey, value);
  }
}
function updateStylingMap(tView, tNode, lView, renderer, oldKeyValueArray, newKeyValueArray, isClassBased, bindingIndex) {
  if (oldKeyValueArray === NO_CHANGE) {
    oldKeyValueArray = EMPTY_ARRAY;
  }
  let oldIndex = 0;
  let newIndex = 0;
  let oldKey = 0 < oldKeyValueArray.length ? oldKeyValueArray[0] : null;
  let newKey = 0 < newKeyValueArray.length ? newKeyValueArray[0] : null;
  while (oldKey !== null || newKey !== null) {
    ngDevMode && assertLessThan(oldIndex, 999, "Are we stuck in infinite loop?");
    ngDevMode && assertLessThan(newIndex, 999, "Are we stuck in infinite loop?");
    const oldValue = oldIndex < oldKeyValueArray.length ? oldKeyValueArray[oldIndex + 1] : void 0;
    const newValue = newIndex < newKeyValueArray.length ? newKeyValueArray[newIndex + 1] : void 0;
    let setKey = null;
    let setValue = void 0;
    if (oldKey === newKey) {
      oldIndex += 2;
      newIndex += 2;
      if (oldValue !== newValue) {
        setKey = newKey;
        setValue = newValue;
      }
    } else if (newKey === null || oldKey !== null && oldKey < newKey) {
      oldIndex += 2;
      setKey = oldKey;
    } else {
      ngDevMode && assertDefined(newKey, "Expecting to have a valid key");
      newIndex += 2;
      setKey = newKey;
      setValue = newValue;
    }
    if (setKey !== null) {
      updateStyling(tView, tNode, lView, renderer, setKey, setValue, isClassBased, bindingIndex);
    }
    oldKey = oldIndex < oldKeyValueArray.length ? oldKeyValueArray[oldIndex] : null;
    newKey = newIndex < newKeyValueArray.length ? newKeyValueArray[newIndex] : null;
  }
}
function updateStyling(tView, tNode, lView, renderer, prop, value, isClassBased, bindingIndex) {
  if (!(tNode.type & 3)) {
    return;
  }
  const tData = tView.data;
  const tRange = tData[bindingIndex + 1];
  const higherPriorityValue = getTStylingRangeNextDuplicate(tRange) ? findStylingValue(tData, tNode, lView, prop, getTStylingRangeNext(tRange), isClassBased) : void 0;
  if (!isStylingValuePresent(higherPriorityValue)) {
    if (!isStylingValuePresent(value)) {
      if (getTStylingRangePrevDuplicate(tRange)) {
        value = findStylingValue(tData, null, lView, prop, bindingIndex, isClassBased);
      }
    }
    const rNode = getNativeByIndex(getSelectedIndex(), lView);
    applyStyling(renderer, isClassBased, rNode, prop, value);
  }
}
function findStylingValue(tData, tNode, lView, prop, index, isClassBased) {
  const isPrevDirection = tNode === null;
  let value = void 0;
  while (index > 0) {
    const rawKey = tData[index];
    const containsStatics = Array.isArray(rawKey);
    const key = containsStatics ? rawKey[1] : rawKey;
    const isStylingMap = key === null;
    let valueAtLViewIndex = lView[index + 1];
    if (valueAtLViewIndex === NO_CHANGE) {
      valueAtLViewIndex = isStylingMap ? EMPTY_ARRAY : void 0;
    }
    let currentValue = isStylingMap ? keyValueArrayGet(valueAtLViewIndex, prop) : key === prop ? valueAtLViewIndex : void 0;
    if (containsStatics && !isStylingValuePresent(currentValue)) {
      currentValue = keyValueArrayGet(rawKey, prop);
    }
    if (isStylingValuePresent(currentValue)) {
      value = currentValue;
      if (isPrevDirection) {
        return value;
      }
    }
    const tRange = tData[index + 1];
    index = isPrevDirection ? getTStylingRangePrev(tRange) : getTStylingRangeNext(tRange);
  }
  if (tNode !== null) {
    let residual = isClassBased ? tNode.residualClasses : tNode.residualStyles;
    if (residual != null) {
      value = keyValueArrayGet(residual, prop);
    }
  }
  return value;
}
function isStylingValuePresent(value) {
  return value !== void 0;
}
function normalizeSuffix(value, suffix) {
  if (value == null || value === "") {
  } else if (typeof suffix === "string") {
    value = value + suffix;
  } else if (typeof value === "object") {
    value = stringify(unwrapSafeValue(value));
  }
  return value;
}
function hasStylingInputShadow(tNode, isClassBased) {
  return (tNode.flags & (isClassBased ? 8 : 16)) !== 0;
}
function \u0275\u0275text(index, value = "") {
  const lView = getLView();
  const tView = getTView();
  const adjustedIndex = index + HEADER_OFFSET;
  ngDevMode && assertEqual(getBindingIndex(), tView.bindingStartIndex, "text nodes should be created before any bindings");
  ngDevMode && assertIndexInRange(lView, adjustedIndex);
  const tNode = tView.firstCreatePass ? getOrCreateTNode(tView, adjustedIndex, 1, value, null) : tView.data[adjustedIndex];
  const textNative = _locateOrCreateTextNode(tView, lView, tNode, value, index);
  lView[adjustedIndex] = textNative;
  if (wasLastNodeCreated()) {
    appendChild(tView, lView, textNative, tNode);
  }
  setCurrentTNode(tNode, false);
}
var _locateOrCreateTextNode = (tView, lView, tNode, value, index) => {
  lastNodeWasCreated(true);
  return createTextNode(lView[RENDERER], value);
};
function \u0275\u0275textInterpolate(v0) {
  \u0275\u0275textInterpolate1("", v0, "");
  return \u0275\u0275textInterpolate;
}
function \u0275\u0275textInterpolate1(prefix, v0, suffix) {
  const lView = getLView();
  const interpolated = interpolation1(lView, prefix, v0, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate1;
}
function \u0275\u0275textInterpolate2(prefix, v0, i0, v1, suffix) {
  const lView = getLView();
  const interpolated = interpolation2(lView, prefix, v0, i0, v1, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate2;
}
function \u0275\u0275textInterpolate3(prefix, v0, i0, v1, i1, v2, suffix) {
  const lView = getLView();
  const interpolated = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate3;
}
function \u0275\u0275textInterpolate4(prefix, v0, i0, v1, i1, v2, i2, v3, suffix) {
  const lView = getLView();
  const interpolated = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate4;
}
function \u0275\u0275textInterpolate5(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix) {
  const lView = getLView();
  const interpolated = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate5;
}
function \u0275\u0275textInterpolate6(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix) {
  const lView = getLView();
  const interpolated = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate6;
}
function \u0275\u0275textInterpolate7(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix) {
  const lView = getLView();
  const interpolated = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate7;
}
function \u0275\u0275textInterpolate8(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix) {
  const lView = getLView();
  const interpolated = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolate8;
}
function \u0275\u0275textInterpolateV(values) {
  const lView = getLView();
  const interpolated = interpolationV(lView, values);
  if (interpolated !== NO_CHANGE) {
    textBindingInternal(lView, getSelectedIndex(), interpolated);
  }
  return \u0275\u0275textInterpolateV;
}
function \u0275\u0275classMapInterpolate1(prefix, v0, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation1(lView, prefix, v0, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate2(prefix, v0, i0, v1, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation2(lView, prefix, v0, i0, v1, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate3(prefix, v0, i0, v1, i1, v2, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate4(prefix, v0, i0, v1, i1, v2, i2, v3, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate5(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate6(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate7(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolate8(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275classMapInterpolateV(values) {
  const lView = getLView();
  const interpolatedValue = interpolationV(lView, values);
  checkStylingMap(keyValueArraySet, classStringParser, interpolatedValue, true);
}
function \u0275\u0275styleMapInterpolate1(prefix, v0, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation1(lView, prefix, v0, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate2(prefix, v0, i0, v1, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation2(lView, prefix, v0, i0, v1, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate3(prefix, v0, i0, v1, i1, v2, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate4(prefix, v0, i0, v1, i1, v2, i2, v3, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate5(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate6(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate7(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolate8(prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix) {
  const lView = getLView();
  const interpolatedValue = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275styleMapInterpolateV(values) {
  const lView = getLView();
  const interpolatedValue = interpolationV(lView, values);
  \u0275\u0275styleMap(interpolatedValue);
}
function \u0275\u0275stylePropInterpolate1(prop, prefix, v0, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation1(lView, prefix, v0, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate1;
}
function \u0275\u0275stylePropInterpolate2(prop, prefix, v0, i0, v1, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation2(lView, prefix, v0, i0, v1, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate2;
}
function \u0275\u0275stylePropInterpolate3(prop, prefix, v0, i0, v1, i1, v2, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation3(lView, prefix, v0, i0, v1, i1, v2, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate3;
}
function \u0275\u0275stylePropInterpolate4(prop, prefix, v0, i0, v1, i1, v2, i2, v3, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation4(lView, prefix, v0, i0, v1, i1, v2, i2, v3, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate4;
}
function \u0275\u0275stylePropInterpolate5(prop, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation5(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate5;
}
function \u0275\u0275stylePropInterpolate6(prop, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation6(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate6;
}
function \u0275\u0275stylePropInterpolate7(prop, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation7(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate7;
}
function \u0275\u0275stylePropInterpolate8(prop, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolation8(lView, prefix, v0, i0, v1, i1, v2, i2, v3, i3, v4, i4, v5, i5, v6, i6, v7, suffix);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolate8;
}
function \u0275\u0275stylePropInterpolateV(prop, values, valueSuffix) {
  const lView = getLView();
  const interpolatedValue = interpolationV(lView, values);
  checkStylingProperty(prop, interpolatedValue, valueSuffix, false);
  return \u0275\u0275stylePropInterpolateV;
}
function \u0275\u0275hostProperty(propName, value, sanitizer) {
  const lView = getLView();
  const bindingIndex = nextBindingIndex();
  if (bindingUpdated(lView, bindingIndex, value)) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    elementPropertyInternal(tView, tNode, lView, propName, value, lView[RENDERER], sanitizer, true);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
  }
  return \u0275\u0275hostProperty;
}
function \u0275\u0275syntheticHostProperty(propName, value, sanitizer) {
  const lView = getLView();
  const bindingIndex = nextBindingIndex();
  if (bindingUpdated(lView, bindingIndex, value)) {
    const tView = getTView();
    const tNode = getSelectedTNode();
    const currentDef = getCurrentDirectiveDef(tView.data);
    const renderer = loadComponentRenderer(currentDef, tNode, lView);
    elementPropertyInternal(tView, tNode, lView, propName, value, renderer, sanitizer, true);
    ngDevMode && storePropertyBindingMetadata(tView.data, tNode, propName, bindingIndex);
  }
  return \u0275\u0275syntheticHostProperty;
}
if (typeof ngI18nClosureMode === "undefined") {
  (function() {
    _global["ngI18nClosureMode"] = // TODO(FW-1250): validate that this actually, you know, works.
    // tslint:disable-next-line:no-toplevel-property-access
    typeof goog !== "undefined" && typeof goog.getMsg === "function";
  })();
}
var u = void 0;
function plural(val) {
  const n = val, i = Math.floor(Math.abs(val)), v = val.toString().replace(/^[^.]*\.?/, "").length;
  if (i === 1 && v === 0)
    return 1;
  return 5;
}
var localeEn = ["en", [["a", "p"], ["AM", "PM"], u], [["AM", "PM"], u, u], [["S", "M", "T", "W", "T", "F", "S"], ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"], ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]], u, [["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"], ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]], u, [["B", "A"], ["BC", "AD"], ["Before Christ", "Anno Domini"]], 0, [6, 0], ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"], ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"], ["{1}, {0}", u, "{1} 'at' {0}", u], [".", ",", ";", "%", "+", "-", "E", "\xD7", "\u2030", "\u221E", "NaN", ":"], ["#,##0.###", "#,##0%", "\xA4#,##0.00", "#E0"], "USD", "$", "US Dollar", {}, "ltr", plural];
var LOCALE_DATA = {};
function findLocaleData(locale) {
  const normalizedLocale = normalizeLocale(locale);
  let match = getLocaleData(normalizedLocale);
  if (match) {
    return match;
  }
  const parentLocale = normalizedLocale.split("-")[0];
  match = getLocaleData(parentLocale);
  if (match) {
    return match;
  }
  if (parentLocale === "en") {
    return localeEn;
  }
  throw new RuntimeError(701, ngDevMode && `Missing locale data for the locale "${locale}".`);
}
function getLocalePluralCase(locale) {
  const data = findLocaleData(locale);
  return data[LocaleDataIndex.PluralCase];
}
function getLocaleData(normalizedLocale) {
  if (!(normalizedLocale in LOCALE_DATA)) {
    LOCALE_DATA[normalizedLocale] = _global.ng && _global.ng.common && _global.ng.common.locales && _global.ng.common.locales[normalizedLocale];
  }
  return LOCALE_DATA[normalizedLocale];
}
var LocaleDataIndex;
(function(LocaleDataIndex2) {
  LocaleDataIndex2[LocaleDataIndex2["LocaleId"] = 0] = "LocaleId";
  LocaleDataIndex2[LocaleDataIndex2["DayPeriodsFormat"] = 1] = "DayPeriodsFormat";
  LocaleDataIndex2[LocaleDataIndex2["DayPeriodsStandalone"] = 2] = "DayPeriodsStandalone";
  LocaleDataIndex2[LocaleDataIndex2["DaysFormat"] = 3] = "DaysFormat";
  LocaleDataIndex2[LocaleDataIndex2["DaysStandalone"] = 4] = "DaysStandalone";
  LocaleDataIndex2[LocaleDataIndex2["MonthsFormat"] = 5] = "MonthsFormat";
  LocaleDataIndex2[LocaleDataIndex2["MonthsStandalone"] = 6] = "MonthsStandalone";
  LocaleDataIndex2[LocaleDataIndex2["Eras"] = 7] = "Eras";
  LocaleDataIndex2[LocaleDataIndex2["FirstDayOfWeek"] = 8] = "FirstDayOfWeek";
  LocaleDataIndex2[LocaleDataIndex2["WeekendRange"] = 9] = "WeekendRange";
  LocaleDataIndex2[LocaleDataIndex2["DateFormat"] = 10] = "DateFormat";
  LocaleDataIndex2[LocaleDataIndex2["TimeFormat"] = 11] = "TimeFormat";
  LocaleDataIndex2[LocaleDataIndex2["DateTimeFormat"] = 12] = "DateTimeFormat";
  LocaleDataIndex2[LocaleDataIndex2["NumberSymbols"] = 13] = "NumberSymbols";
  LocaleDataIndex2[LocaleDataIndex2["NumberFormats"] = 14] = "NumberFormats";
  LocaleDataIndex2[LocaleDataIndex2["CurrencyCode"] = 15] = "CurrencyCode";
  LocaleDataIndex2[LocaleDataIndex2["CurrencySymbol"] = 16] = "CurrencySymbol";
  LocaleDataIndex2[LocaleDataIndex2["CurrencyName"] = 17] = "CurrencyName";
  LocaleDataIndex2[LocaleDataIndex2["Currencies"] = 18] = "Currencies";
  LocaleDataIndex2[LocaleDataIndex2["Directionality"] = 19] = "Directionality";
  LocaleDataIndex2[LocaleDataIndex2["PluralCase"] = 20] = "PluralCase";
  LocaleDataIndex2[LocaleDataIndex2["ExtraData"] = 21] = "ExtraData";
})(LocaleDataIndex || (LocaleDataIndex = {}));
function normalizeLocale(locale) {
  return locale.toLowerCase().replace(/_/g, "-");
}
var pluralMapping = ["zero", "one", "two", "few", "many"];
function getPluralCase(value, locale) {
  const plural2 = getLocalePluralCase(locale)(parseInt(value, 10));
  const result = pluralMapping[plural2];
  return result !== void 0 ? result : "other";
}
var DEFAULT_LOCALE_ID = "en-US";
var USD_CURRENCY_CODE = "USD";
var ELEMENT_MARKER = {
  marker: "element"
};
var ICU_MARKER = {
  marker: "ICU"
};
var I18nCreateOpCode;
(function(I18nCreateOpCode2) {
  I18nCreateOpCode2[I18nCreateOpCode2["SHIFT"] = 2] = "SHIFT";
  I18nCreateOpCode2[I18nCreateOpCode2["APPEND_EAGERLY"] = 1] = "APPEND_EAGERLY";
  I18nCreateOpCode2[I18nCreateOpCode2["COMMENT"] = 2] = "COMMENT";
})(I18nCreateOpCode || (I18nCreateOpCode = {}));
var LOCALE_ID$1 = DEFAULT_LOCALE_ID;
function setLocaleId(localeId) {
  assertDefined(localeId, `Expected localeId to be defined`);
  if (typeof localeId === "string") {
    LOCALE_ID$1 = localeId.toLowerCase().replace(/_/g, "-");
  }
}
function getLocaleId() {
  return LOCALE_ID$1;
}
function getInsertInFrontOfRNodeWithI18n(parentTNode, currentTNode, lView) {
  const tNodeInsertBeforeIndex = currentTNode.insertBeforeIndex;
  const insertBeforeIndex = Array.isArray(tNodeInsertBeforeIndex) ? tNodeInsertBeforeIndex[0] : tNodeInsertBeforeIndex;
  if (insertBeforeIndex === null) {
    return getInsertInFrontOfRNodeWithNoI18n(parentTNode, currentTNode, lView);
  } else {
    ngDevMode && assertIndexInRange(lView, insertBeforeIndex);
    return unwrapRNode(lView[insertBeforeIndex]);
  }
}
function processI18nInsertBefore(renderer, childTNode, lView, childRNode, parentRElement) {
  const tNodeInsertBeforeIndex = childTNode.insertBeforeIndex;
  if (Array.isArray(tNodeInsertBeforeIndex)) {
    ngDevMode && assertDomNode(childRNode);
    let i18nParent = childRNode;
    let anchorRNode = null;
    if (!(childTNode.type & 3)) {
      anchorRNode = i18nParent;
      i18nParent = parentRElement;
    }
    if (i18nParent !== null && childTNode.componentOffset === -1) {
      for (let i = 1; i < tNodeInsertBeforeIndex.length; i++) {
        const i18nChild = lView[tNodeInsertBeforeIndex[i]];
        nativeInsertBefore(renderer, i18nParent, i18nChild, anchorRNode, false);
      }
    }
  }
}
function addTNodeAndUpdateInsertBeforeIndex(previousTNodes, newTNode) {
  ngDevMode && assertEqual(newTNode.insertBeforeIndex, null, "We expect that insertBeforeIndex is not set");
  previousTNodes.push(newTNode);
  if (previousTNodes.length > 1) {
    for (let i = previousTNodes.length - 2; i >= 0; i--) {
      const existingTNode = previousTNodes[i];
      if (!isI18nText(existingTNode)) {
        if (isNewTNodeCreatedBefore(existingTNode, newTNode) && getInsertBeforeIndex(existingTNode) === null) {
          setInsertBeforeIndex(existingTNode, newTNode.index);
        }
      }
    }
  }
}
function isI18nText(tNode) {
  return !(tNode.type & 64);
}
function isNewTNodeCreatedBefore(existingTNode, newTNode) {
  return isI18nText(newTNode) || existingTNode.index > newTNode.index;
}
function getInsertBeforeIndex(tNode) {
  const index = tNode.insertBeforeIndex;
  return Array.isArray(index) ? index[0] : index;
}
function setInsertBeforeIndex(tNode, value) {
  const index = tNode.insertBeforeIndex;
  if (Array.isArray(index)) {
    index[0] = value;
  } else {
    setI18nHandling(getInsertInFrontOfRNodeWithI18n, processI18nInsertBefore);
    tNode.insertBeforeIndex = value;
  }
}
function getTIcu(tView, index) {
  const value = tView.data[index];
  if (value === null || typeof value === "string")
    return null;
  if (ngDevMode && !(value.hasOwnProperty("tView") || value.hasOwnProperty("currentCaseLViewIndex"))) {
    throwError("We expect to get 'null'|'TIcu'|'TIcuContainer', but got: " + value);
  }
  const tIcu = value.hasOwnProperty("currentCaseLViewIndex") ? value : value.value;
  ngDevMode && assertTIcu(tIcu);
  return tIcu;
}
function setTIcu(tView, index, tIcu) {
  const tNode = tView.data[index];
  ngDevMode && assertEqual(tNode === null || tNode.hasOwnProperty("tView"), true, "We expect to get 'null'|'TIcuContainer'");
  if (tNode === null) {
    tView.data[index] = tIcu;
  } else {
    ngDevMode && assertTNodeType(
      tNode,
      32
      /* TNodeType.Icu */
    );
    tNode.value = tIcu;
  }
}
function setTNodeInsertBeforeIndex(tNode, index) {
  ngDevMode && assertTNode(tNode);
  let insertBeforeIndex = tNode.insertBeforeIndex;
  if (insertBeforeIndex === null) {
    setI18nHandling(getInsertInFrontOfRNodeWithI18n, processI18nInsertBefore);
    insertBeforeIndex = tNode.insertBeforeIndex = [null, index];
  } else {
    assertEqual(Array.isArray(insertBeforeIndex), true, "Expecting array here");
    insertBeforeIndex.push(index);
  }
}
function createTNodePlaceholder(tView, previousTNodes, index) {
  const tNode = createTNodeAtIndex(tView, index, 64, null, null);
  addTNodeAndUpdateInsertBeforeIndex(previousTNodes, tNode);
  return tNode;
}
function getCurrentICUCaseIndex(tIcu, lView) {
  const currentCase = lView[tIcu.currentCaseLViewIndex];
  return currentCase === null ? currentCase : currentCase < 0 ? ~currentCase : currentCase;
}
function getParentFromIcuCreateOpCode(mergedCode) {
  return mergedCode >>> 17;
}
function getRefFromIcuCreateOpCode(mergedCode) {
  return (mergedCode & 131070) >>> 1;
}
function getInstructionFromIcuCreateOpCode(mergedCode) {
  return mergedCode & 1;
}
function icuCreateOpCode(opCode, parentIdx, refIdx) {
  ngDevMode && assertGreaterThanOrEqual(parentIdx, 0, "Missing parent index");
  ngDevMode && assertGreaterThan(refIdx, 0, "Missing ref index");
  return opCode | parentIdx << 17 | refIdx << 1;
}
var changeMask = 0;
var changeMaskCounter = 0;
function setMaskBit(hasChange) {
  if (hasChange) {
    changeMask = changeMask | 1 << Math.min(changeMaskCounter, 31);
  }
  changeMaskCounter++;
}
function applyI18n(tView, lView, index) {
  if (changeMaskCounter > 0) {
    ngDevMode && assertDefined(tView, `tView should be defined`);
    const tI18n = tView.data[index];
    const updateOpCodes = Array.isArray(tI18n) ? tI18n : tI18n.update;
    const bindingsStartIndex = getBindingIndex() - changeMaskCounter - 1;
    applyUpdateOpCodes(tView, lView, updateOpCodes, bindingsStartIndex, changeMask);
  }
  changeMask = 0;
  changeMaskCounter = 0;
}
function applyCreateOpCodes(lView, createOpCodes, parentRNode, insertInFrontOf) {
  const renderer = lView[RENDERER];
  for (let i = 0; i < createOpCodes.length; i++) {
    const opCode = createOpCodes[i++];
    const text = createOpCodes[i];
    const isComment = (opCode & I18nCreateOpCode.COMMENT) === I18nCreateOpCode.COMMENT;
    const appendNow = (opCode & I18nCreateOpCode.APPEND_EAGERLY) === I18nCreateOpCode.APPEND_EAGERLY;
    const index = opCode >>> I18nCreateOpCode.SHIFT;
    let rNode = lView[index];
    if (rNode === null) {
      rNode = lView[index] = isComment ? renderer.createComment(text) : createTextNode(renderer, text);
    }
    if (appendNow && parentRNode !== null) {
      nativeInsertBefore(renderer, parentRNode, rNode, insertInFrontOf, false);
    }
  }
}
function applyMutableOpCodes(tView, mutableOpCodes, lView, anchorRNode) {
  ngDevMode && assertDomNode(anchorRNode);
  const renderer = lView[RENDERER];
  let rootIdx = null;
  let rootRNode;
  for (let i = 0; i < mutableOpCodes.length; i++) {
    const opCode = mutableOpCodes[i];
    if (typeof opCode == "string") {
      const textNodeIndex = mutableOpCodes[++i];
      if (lView[textNodeIndex] === null) {
        ngDevMode && ngDevMode.rendererCreateTextNode++;
        ngDevMode && assertIndexInRange(lView, textNodeIndex);
        lView[textNodeIndex] = createTextNode(renderer, opCode);
      }
    } else if (typeof opCode == "number") {
      switch (opCode & 1) {
        case 0:
          const parentIdx = getParentFromIcuCreateOpCode(opCode);
          if (rootIdx === null) {
            rootIdx = parentIdx;
            rootRNode = nativeParentNode(renderer, anchorRNode);
          }
          let insertInFrontOf;
          let parentRNode;
          if (parentIdx === rootIdx) {
            insertInFrontOf = anchorRNode;
            parentRNode = rootRNode;
          } else {
            insertInFrontOf = null;
            parentRNode = unwrapRNode(lView[parentIdx]);
          }
          if (parentRNode !== null) {
            ngDevMode && assertDomNode(parentRNode);
            const refIdx = getRefFromIcuCreateOpCode(opCode);
            ngDevMode && assertGreaterThan(refIdx, HEADER_OFFSET, "Missing ref");
            const child = lView[refIdx];
            ngDevMode && assertDomNode(child);
            nativeInsertBefore(renderer, parentRNode, child, insertInFrontOf, false);
            const tIcu = getTIcu(tView, refIdx);
            if (tIcu !== null && typeof tIcu === "object") {
              ngDevMode && assertTIcu(tIcu);
              const caseIndex = getCurrentICUCaseIndex(tIcu, lView);
              if (caseIndex !== null) {
                applyMutableOpCodes(tView, tIcu.create[caseIndex], lView, lView[tIcu.anchorIdx]);
              }
            }
          }
          break;
        case 1:
          const elementNodeIndex = opCode >>> 1;
          const attrName = mutableOpCodes[++i];
          const attrValue = mutableOpCodes[++i];
          setElementAttribute(renderer, getNativeByIndex(elementNodeIndex, lView), null, null, attrName, attrValue, null);
          break;
        default:
          if (ngDevMode) {
            throw new RuntimeError(700, `Unable to determine the type of mutate operation for "${opCode}"`);
          }
      }
    } else {
      switch (opCode) {
        case ICU_MARKER:
          const commentValue = mutableOpCodes[++i];
          const commentNodeIndex = mutableOpCodes[++i];
          if (lView[commentNodeIndex] === null) {
            ngDevMode && assertEqual(typeof commentValue, "string", `Expected "${commentValue}" to be a comment node value`);
            ngDevMode && ngDevMode.rendererCreateComment++;
            ngDevMode && assertIndexInExpandoRange(lView, commentNodeIndex);
            const commentRNode = lView[commentNodeIndex] = createCommentNode(renderer, commentValue);
            attachPatchData(commentRNode, lView);
          }
          break;
        case ELEMENT_MARKER:
          const tagName = mutableOpCodes[++i];
          const elementNodeIndex = mutableOpCodes[++i];
          if (lView[elementNodeIndex] === null) {
            ngDevMode && assertEqual(typeof tagName, "string", `Expected "${tagName}" to be an element node tag name`);
            ngDevMode && ngDevMode.rendererCreateElement++;
            ngDevMode && assertIndexInExpandoRange(lView, elementNodeIndex);
            const elementRNode = lView[elementNodeIndex] = createElementNode(renderer, tagName, null);
            attachPatchData(elementRNode, lView);
          }
          break;
        default:
          ngDevMode && throwError(`Unable to determine the type of mutate operation for "${opCode}"`);
      }
    }
  }
}
function applyUpdateOpCodes(tView, lView, updateOpCodes, bindingsStartIndex, changeMask2) {
  for (let i = 0; i < updateOpCodes.length; i++) {
    const checkBit = updateOpCodes[i];
    const skipCodes = updateOpCodes[++i];
    if (checkBit & changeMask2) {
      let value = "";
      for (let j = i + 1; j <= i + skipCodes; j++) {
        const opCode = updateOpCodes[j];
        if (typeof opCode == "string") {
          value += opCode;
        } else if (typeof opCode == "number") {
          if (opCode < 0) {
            value += renderStringify(lView[bindingsStartIndex - opCode]);
          } else {
            const nodeIndex = opCode >>> 2;
            switch (opCode & 3) {
              case 1:
                const propName = updateOpCodes[++j];
                const sanitizeFn = updateOpCodes[++j];
                const tNodeOrTagName = tView.data[nodeIndex];
                ngDevMode && assertDefined(tNodeOrTagName, "Experting TNode or string");
                if (typeof tNodeOrTagName === "string") {
                  setElementAttribute(lView[RENDERER], lView[nodeIndex], null, tNodeOrTagName, propName, value, sanitizeFn);
                } else {
                  elementPropertyInternal(tView, tNodeOrTagName, lView, propName, value, lView[RENDERER], sanitizeFn, false);
                }
                break;
              case 0:
                const rText = lView[nodeIndex];
                rText !== null && updateTextNode(lView[RENDERER], rText, value);
                break;
              case 2:
                applyIcuSwitchCase(tView, getTIcu(tView, nodeIndex), lView, value);
                break;
              case 3:
                applyIcuUpdateCase(tView, getTIcu(tView, nodeIndex), bindingsStartIndex, lView);
                break;
            }
          }
        }
      }
    } else {
      const opCode = updateOpCodes[i + 1];
      if (opCode > 0 && (opCode & 3) === 3) {
        const nodeIndex = opCode >>> 2;
        const tIcu = getTIcu(tView, nodeIndex);
        const currentIndex = lView[tIcu.currentCaseLViewIndex];
        if (currentIndex < 0) {
          applyIcuUpdateCase(tView, tIcu, bindingsStartIndex, lView);
        }
      }
    }
    i += skipCodes;
  }
}
function applyIcuUpdateCase(tView, tIcu, bindingsStartIndex, lView) {
  ngDevMode && assertIndexInRange(lView, tIcu.currentCaseLViewIndex);
  let activeCaseIndex = lView[tIcu.currentCaseLViewIndex];
  if (activeCaseIndex !== null) {
    let mask = changeMask;
    if (activeCaseIndex < 0) {
      activeCaseIndex = lView[tIcu.currentCaseLViewIndex] = ~activeCaseIndex;
      mask = -1;
    }
    applyUpdateOpCodes(tView, lView, tIcu.update[activeCaseIndex], bindingsStartIndex, mask);
  }
}
function applyIcuSwitchCase(tView, tIcu, lView, value) {
  const caseIndex = getCaseIndex(tIcu, value);
  let activeCaseIndex = getCurrentICUCaseIndex(tIcu, lView);
  if (activeCaseIndex !== caseIndex) {
    applyIcuSwitchCaseRemove(tView, tIcu, lView);
    lView[tIcu.currentCaseLViewIndex] = caseIndex === null ? null : ~caseIndex;
    if (caseIndex !== null) {
      const anchorRNode = lView[tIcu.anchorIdx];
      if (anchorRNode) {
        ngDevMode && assertDomNode(anchorRNode);
        applyMutableOpCodes(tView, tIcu.create[caseIndex], lView, anchorRNode);
      }
    }
  }
}
function applyIcuSwitchCaseRemove(tView, tIcu, lView) {
  let activeCaseIndex = getCurrentICUCaseIndex(tIcu, lView);
  if (activeCaseIndex !== null) {
    const removeCodes = tIcu.remove[activeCaseIndex];
    for (let i = 0; i < removeCodes.length; i++) {
      const nodeOrIcuIndex = removeCodes[i];
      if (nodeOrIcuIndex > 0) {
        const rNode = getNativeByIndex(nodeOrIcuIndex, lView);
        rNode !== null && nativeRemoveNode(lView[RENDERER], rNode);
      } else {
        applyIcuSwitchCaseRemove(tView, getTIcu(tView, ~nodeOrIcuIndex), lView);
      }
    }
  }
}
function getCaseIndex(icuExpression, bindingValue) {
  let index = icuExpression.cases.indexOf(bindingValue);
  if (index === -1) {
    switch (icuExpression.type) {
      case 1: {
        const resolvedCase = getPluralCase(bindingValue, getLocaleId());
        index = icuExpression.cases.indexOf(resolvedCase);
        if (index === -1 && resolvedCase !== "other") {
          index = icuExpression.cases.indexOf("other");
        }
        break;
      }
      case 0: {
        index = icuExpression.cases.indexOf("other");
        break;
      }
    }
  }
  return index === -1 ? null : index;
}
function loadIcuContainerVisitor() {
  const _stack = [];
  let _index = -1;
  let _lView;
  let _removes;
  function icuContainerIteratorStart(tIcuContainerNode, lView) {
    _lView = lView;
    while (_stack.length)
      _stack.pop();
    ngDevMode && assertTNodeForLView(tIcuContainerNode, lView);
    enterIcu(tIcuContainerNode.value, lView);
    return icuContainerIteratorNext;
  }
  function enterIcu(tIcu, lView) {
    _index = 0;
    const currentCase = getCurrentICUCaseIndex(tIcu, lView);
    if (currentCase !== null) {
      ngDevMode && assertNumberInRange(currentCase, 0, tIcu.cases.length - 1);
      _removes = tIcu.remove[currentCase];
    } else {
      _removes = EMPTY_ARRAY;
    }
  }
  function icuContainerIteratorNext() {
    if (_index < _removes.length) {
      const removeOpCode = _removes[_index++];
      ngDevMode && assertNumber(removeOpCode, "Expecting OpCode number");
      if (removeOpCode > 0) {
        const rNode = _lView[removeOpCode];
        ngDevMode && assertDomNode(rNode);
        return rNode;
      } else {
        _stack.push(_index, _removes);
        const tIcuIndex = ~removeOpCode;
        const tIcu = _lView[TVIEW].data[tIcuIndex];
        ngDevMode && assertTIcu(tIcu);
        enterIcu(tIcu, _lView);
        return icuContainerIteratorNext();
      }
    } else {
      if (_stack.length === 0) {
        return null;
      } else {
        _removes = _stack.pop();
        _index = _stack.pop();
        return icuContainerIteratorNext();
      }
    }
  }
  return icuContainerIteratorStart;
}
function i18nCreateOpCodesToString(opcodes) {
  const createOpCodes = opcodes || (Array.isArray(this) ? this : []);
  let lines = [];
  for (let i = 0; i < createOpCodes.length; i++) {
    const opCode = createOpCodes[i++];
    const text = createOpCodes[i];
    const isComment = (opCode & I18nCreateOpCode.COMMENT) === I18nCreateOpCode.COMMENT;
    const appendNow = (opCode & I18nCreateOpCode.APPEND_EAGERLY) === I18nCreateOpCode.APPEND_EAGERLY;
    const index = opCode >>> I18nCreateOpCode.SHIFT;
    lines.push(`lView[${index}] = document.${isComment ? "createComment" : "createText"}(${JSON.stringify(text)});`);
    if (appendNow) {
      lines.push(`parent.appendChild(lView[${index}]);`);
    }
  }
  return lines;
}
function i18nUpdateOpCodesToString(opcodes) {
  const parser = new OpCodeParser(opcodes || (Array.isArray(this) ? this : []));
  let lines = [];
  function consumeOpCode(value) {
    const ref = value >>> 2;
    const opCode = value & 3;
    switch (opCode) {
      case 0:
        return `(lView[${ref}] as Text).textContent = $$$`;
      case 1:
        const attrName = parser.consumeString();
        const sanitizationFn = parser.consumeFunction();
        const value2 = sanitizationFn ? `(${sanitizationFn})($$$)` : "$$$";
        return `(lView[${ref}] as Element).setAttribute('${attrName}', ${value2})`;
      case 2:
        return `icuSwitchCase(${ref}, $$$)`;
      case 3:
        return `icuUpdateCase(${ref})`;
    }
    throw new Error("unexpected OpCode");
  }
  while (parser.hasMore()) {
    let mask = parser.consumeNumber();
    let size = parser.consumeNumber();
    const end = parser.i + size;
    const statements = [];
    let statement = "";
    while (parser.i < end) {
      let value = parser.consumeNumberOrString();
      if (typeof value === "string") {
        statement += value;
      } else if (value < 0) {
        statement += "${lView[i" + value + "]}";
      } else {
        const opCodeText = consumeOpCode(value);
        statements.push(opCodeText.replace("$$$", "`" + statement + "`") + ";");
        statement = "";
      }
    }
    lines.push(`if (mask & 0b${mask.toString(2)}) { ${statements.join(" ")} }`);
  }
  return lines;
}
function icuCreateOpCodesToString(opcodes) {
  const parser = new OpCodeParser(opcodes || (Array.isArray(this) ? this : []));
  let lines = [];
  function consumeOpCode(opCode) {
    const parent = getParentFromIcuCreateOpCode(opCode);
    const ref = getRefFromIcuCreateOpCode(opCode);
    switch (getInstructionFromIcuCreateOpCode(opCode)) {
      case 0:
        return `(lView[${parent}] as Element).appendChild(lView[${lastRef}])`;
      case 1:
        return `(lView[${ref}] as Element).setAttribute("${parser.consumeString()}", "${parser.consumeString()}")`;
    }
    throw new Error("Unexpected OpCode: " + getInstructionFromIcuCreateOpCode(opCode));
  }
  let lastRef = -1;
  while (parser.hasMore()) {
    let value = parser.consumeNumberStringOrMarker();
    if (value === ICU_MARKER) {
      const text = parser.consumeString();
      lastRef = parser.consumeNumber();
      lines.push(`lView[${lastRef}] = document.createComment("${text}")`);
    } else if (value === ELEMENT_MARKER) {
      const text = parser.consumeString();
      lastRef = parser.consumeNumber();
      lines.push(`lView[${lastRef}] = document.createElement("${text}")`);
    } else if (typeof value === "string") {
      lastRef = parser.consumeNumber();
      lines.push(`lView[${lastRef}] = document.createTextNode("${value}")`);
    } else if (typeof value === "number") {
      const line = consumeOpCode(value);
      line && lines.push(line);
    } else {
      throw new Error("Unexpected value");
    }
  }
  return lines;
}
function i18nRemoveOpCodesToString(opcodes) {
  const removeCodes = opcodes || (Array.isArray(this) ? this : []);
  let lines = [];
  for (let i = 0; i < removeCodes.length; i++) {
    const nodeOrIcuIndex = removeCodes[i];
    if (nodeOrIcuIndex > 0) {
      lines.push(`remove(lView[${nodeOrIcuIndex}])`);
    } else {
      lines.push(`removeNestedICU(${~nodeOrIcuIndex})`);
    }
  }
  return lines;
}
var OpCodeParser = class {
  constructor(codes) {
    this.i = 0;
    this.codes = codes;
  }
  hasMore() {
    return this.i < this.codes.length;
  }
  consumeNumber() {
    let value = this.codes[this.i++];
    assertNumber(value, "expecting number in OpCode");
    return value;
  }
  consumeString() {
    let value = this.codes[this.i++];
    assertString(value, "expecting string in OpCode");
    return value;
  }
  consumeFunction() {
    let value = this.codes[this.i++];
    if (value === null || typeof value === "function") {
      return value;
    }
    throw new Error("expecting function in OpCode");
  }
  consumeNumberOrString() {
    let value = this.codes[this.i++];
    if (typeof value === "string") {
      return value;
    }
    assertNumber(value, "expecting number or string in OpCode");
    return value;
  }
  consumeNumberStringOrMarker() {
    let value = this.codes[this.i++];
    if (typeof value === "string" || typeof value === "number" || value == ICU_MARKER || value == ELEMENT_MARKER) {
      return value;
    }
    assertNumber(value, "expecting number, string, ICU_MARKER or ELEMENT_MARKER in OpCode");
    return value;
  }
};
var BINDING_REGEXP = /�(\d+):?\d*�/gi;
var ICU_REGEXP = /({\s*�\d+:?\d*�\s*,\s*\S{6}\s*,[\s\S]*})/gi;
var NESTED_ICU = /�(\d+)�/;
var ICU_BLOCK_REGEXP = /^\s*(�\d+:?\d*�)\s*,\s*(select|plural)\s*,/;
var MARKER = `\uFFFD`;
var SUBTEMPLATE_REGEXP = /�\/?\*(\d+:\d+)�/gi;
var PH_REGEXP = /�(\/?[#*]\d+):?\d*�/gi;
var NGSP_UNICODE_REGEXP = /\uE500/g;
function replaceNgsp(value) {
  return value.replace(NGSP_UNICODE_REGEXP, " ");
}
function attachDebugGetter(obj, debugGetter) {
  if (ngDevMode) {
    Object.defineProperty(obj, "debug", { get: debugGetter, enumerable: false });
  } else {
    throw new Error("This method should be guarded with `ngDevMode` so that it can be tree shaken in production!");
  }
}
function i18nStartFirstCreatePass(tView, parentTNodeIndex, lView, index, message, subTemplateIndex) {
  const rootTNode = getCurrentParentTNode();
  const createOpCodes = [];
  const updateOpCodes = [];
  const existingTNodeStack = [[]];
  if (ngDevMode) {
    attachDebugGetter(createOpCodes, i18nCreateOpCodesToString);
    attachDebugGetter(updateOpCodes, i18nUpdateOpCodesToString);
  }
  message = getTranslationForTemplate(message, subTemplateIndex);
  const msgParts = replaceNgsp(message).split(PH_REGEXP);
  for (let i = 0; i < msgParts.length; i++) {
    let value = msgParts[i];
    if ((i & 1) === 0) {
      const parts = i18nParseTextIntoPartsAndICU(value);
      for (let j = 0; j < parts.length; j++) {
        let part = parts[j];
        if ((j & 1) === 0) {
          const text = part;
          ngDevMode && assertString(text, "Parsed ICU part should be string");
          if (text !== "") {
            i18nStartFirstCreatePassProcessTextNode(tView, rootTNode, existingTNodeStack[0], createOpCodes, updateOpCodes, lView, text);
          }
        } else {
          const icuExpression = part;
          if (typeof icuExpression !== "object") {
            throw new Error(`Unable to parse ICU expression in "${message}" message.`);
          }
          const icuContainerTNode = createTNodeAndAddOpCode(tView, rootTNode, existingTNodeStack[0], lView, createOpCodes, ngDevMode ? `ICU ${index}:${icuExpression.mainBinding}` : "", true);
          const icuNodeIndex = icuContainerTNode.index;
          ngDevMode && assertGreaterThanOrEqual(icuNodeIndex, HEADER_OFFSET, "Index must be in absolute LView offset");
          icuStart(tView, lView, updateOpCodes, parentTNodeIndex, icuExpression, icuNodeIndex);
        }
      }
    } else {
      const isClosing = value.charCodeAt(0) === 47;
      const type = value.charCodeAt(isClosing ? 1 : 0);
      ngDevMode && assertOneOf(
        type,
        42,
        35
        /* CharCode.HASH */
      );
      const index2 = HEADER_OFFSET + Number.parseInt(value.substring(isClosing ? 2 : 1));
      if (isClosing) {
        existingTNodeStack.shift();
        setCurrentTNode(getCurrentParentTNode(), false);
      } else {
        const tNode = createTNodePlaceholder(tView, existingTNodeStack[0], index2);
        existingTNodeStack.unshift([]);
        setCurrentTNode(tNode, true);
      }
    }
  }
  tView.data[index] = {
    create: createOpCodes,
    update: updateOpCodes
  };
}
function createTNodeAndAddOpCode(tView, rootTNode, existingTNodes, lView, createOpCodes, text, isICU) {
  const i18nNodeIdx = allocExpando(tView, lView, 1, null);
  let opCode = i18nNodeIdx << I18nCreateOpCode.SHIFT;
  let parentTNode = getCurrentParentTNode();
  if (rootTNode === parentTNode) {
    parentTNode = null;
  }
  if (parentTNode === null) {
    opCode |= I18nCreateOpCode.APPEND_EAGERLY;
  }
  if (isICU) {
    opCode |= I18nCreateOpCode.COMMENT;
    ensureIcuContainerVisitorLoaded(loadIcuContainerVisitor);
  }
  createOpCodes.push(opCode, text === null ? "" : text);
  const tNode = createTNodeAtIndex(tView, i18nNodeIdx, isICU ? 32 : 1, text === null ? ngDevMode ? "{{?}}" : "" : text, null);
  addTNodeAndUpdateInsertBeforeIndex(existingTNodes, tNode);
  const tNodeIdx = tNode.index;
  setCurrentTNode(
    tNode,
    false
    /* Text nodes are self closing */
  );
  if (parentTNode !== null && rootTNode !== parentTNode) {
    setTNodeInsertBeforeIndex(parentTNode, tNodeIdx);
  }
  return tNode;
}
function i18nStartFirstCreatePassProcessTextNode(tView, rootTNode, existingTNodes, createOpCodes, updateOpCodes, lView, text) {
  const hasBinding = text.match(BINDING_REGEXP);
  const tNode = createTNodeAndAddOpCode(tView, rootTNode, existingTNodes, lView, createOpCodes, hasBinding ? null : text, false);
  if (hasBinding) {
    generateBindingUpdateOpCodes(updateOpCodes, text, tNode.index, null, 0, null);
  }
}
function i18nAttributesFirstPass(tView, index, values) {
  const previousElement = getCurrentTNode();
  const previousElementIndex = previousElement.index;
  const updateOpCodes = [];
  if (ngDevMode) {
    attachDebugGetter(updateOpCodes, i18nUpdateOpCodesToString);
  }
  if (tView.firstCreatePass && tView.data[index] === null) {
    for (let i = 0; i < values.length; i += 2) {
      const attrName = values[i];
      const message = values[i + 1];
      if (message !== "") {
        if (ICU_REGEXP.test(message)) {
          throw new Error(`ICU expressions are not supported in attributes. Message: "${message}".`);
        }
        generateBindingUpdateOpCodes(updateOpCodes, message, previousElementIndex, attrName, countBindings(updateOpCodes), null);
      }
    }
    tView.data[index] = updateOpCodes;
  }
}
function generateBindingUpdateOpCodes(updateOpCodes, str, destinationNode, attrName, bindingStart, sanitizeFn) {
  ngDevMode && assertGreaterThanOrEqual(destinationNode, HEADER_OFFSET, "Index must be in absolute LView offset");
  const maskIndex = updateOpCodes.length;
  const sizeIndex = maskIndex + 1;
  updateOpCodes.push(null, null);
  const startIndex = maskIndex + 2;
  if (ngDevMode) {
    attachDebugGetter(updateOpCodes, i18nUpdateOpCodesToString);
  }
  const textParts = str.split(BINDING_REGEXP);
  let mask = 0;
  for (let j = 0; j < textParts.length; j++) {
    const textValue = textParts[j];
    if (j & 1) {
      const bindingIndex = bindingStart + parseInt(textValue, 10);
      updateOpCodes.push(-1 - bindingIndex);
      mask = mask | toMaskBit(bindingIndex);
    } else if (textValue !== "") {
      updateOpCodes.push(textValue);
    }
  }
  updateOpCodes.push(destinationNode << 2 | (attrName ? 1 : 0));
  if (attrName) {
    updateOpCodes.push(attrName, sanitizeFn);
  }
  updateOpCodes[maskIndex] = mask;
  updateOpCodes[sizeIndex] = updateOpCodes.length - startIndex;
  return mask;
}
function countBindings(opCodes) {
  let count = 0;
  for (let i = 0; i < opCodes.length; i++) {
    const opCode = opCodes[i];
    if (typeof opCode === "number" && opCode < 0) {
      count++;
    }
  }
  return count;
}
function toMaskBit(bindingIndex) {
  return 1 << Math.min(bindingIndex, 31);
}
function isRootTemplateMessage(subTemplateIndex) {
  return subTemplateIndex === -1;
}
function removeInnerTemplateTranslation(message) {
  let match;
  let res = "";
  let index = 0;
  let inTemplate = false;
  let tagMatched;
  while ((match = SUBTEMPLATE_REGEXP.exec(message)) !== null) {
    if (!inTemplate) {
      res += message.substring(index, match.index + match[0].length);
      tagMatched = match[1];
      inTemplate = true;
    } else {
      if (match[0] === `${MARKER}/*${tagMatched}${MARKER}`) {
        index = match.index;
        inTemplate = false;
      }
    }
  }
  ngDevMode && assertEqual(inTemplate, false, `Tag mismatch: unable to find the end of the sub-template in the translation "${message}"`);
  res += message.slice(index);
  return res;
}
function getTranslationForTemplate(message, subTemplateIndex) {
  if (isRootTemplateMessage(subTemplateIndex)) {
    return removeInnerTemplateTranslation(message);
  } else {
    const start = message.indexOf(`:${subTemplateIndex}${MARKER}`) + 2 + subTemplateIndex.toString().length;
    const end = message.search(new RegExp(`${MARKER}\\/\\*\\d+:${subTemplateIndex}${MARKER}`));
    return removeInnerTemplateTranslation(message.substring(start, end));
  }
}
function icuStart(tView, lView, updateOpCodes, parentIdx, icuExpression, anchorIdx) {
  ngDevMode && assertDefined(icuExpression, "ICU expression must be defined");
  let bindingMask = 0;
  const tIcu = {
    type: icuExpression.type,
    currentCaseLViewIndex: allocExpando(tView, lView, 1, null),
    anchorIdx,
    cases: [],
    create: [],
    remove: [],
    update: []
  };
  addUpdateIcuSwitch(updateOpCodes, icuExpression, anchorIdx);
  setTIcu(tView, anchorIdx, tIcu);
  const values = icuExpression.values;
  for (let i = 0; i < values.length; i++) {
    const valueArr = values[i];
    const nestedIcus = [];
    for (let j = 0; j < valueArr.length; j++) {
      const value = valueArr[j];
      if (typeof value !== "string") {
        const icuIndex = nestedIcus.push(value) - 1;
        valueArr[j] = `<!--\uFFFD${icuIndex}\uFFFD-->`;
      }
    }
    bindingMask = parseIcuCase(tView, tIcu, lView, updateOpCodes, parentIdx, icuExpression.cases[i], valueArr.join(""), nestedIcus) | bindingMask;
  }
  if (bindingMask) {
    addUpdateIcuUpdate(updateOpCodes, bindingMask, anchorIdx);
  }
}
function parseICUBlock(pattern) {
  const cases = [];
  const values = [];
  let icuType = 1;
  let mainBinding = 0;
  pattern = pattern.replace(ICU_BLOCK_REGEXP, function(str, binding, type) {
    if (type === "select") {
      icuType = 0;
    } else {
      icuType = 1;
    }
    mainBinding = parseInt(binding.slice(1), 10);
    return "";
  });
  const parts = i18nParseTextIntoPartsAndICU(pattern);
  for (let pos = 0; pos < parts.length; ) {
    let key = parts[pos++].trim();
    if (icuType === 1) {
      key = key.replace(/\s*(?:=)?(\w+)\s*/, "$1");
    }
    if (key.length) {
      cases.push(key);
    }
    const blocks = i18nParseTextIntoPartsAndICU(parts[pos++]);
    if (cases.length > values.length) {
      values.push(blocks);
    }
  }
  return { type: icuType, mainBinding, cases, values };
}
function i18nParseTextIntoPartsAndICU(pattern) {
  if (!pattern) {
    return [];
  }
  let prevPos = 0;
  const braceStack = [];
  const results = [];
  const braces = /[{}]/g;
  braces.lastIndex = 0;
  let match;
  while (match = braces.exec(pattern)) {
    const pos = match.index;
    if (match[0] == "}") {
      braceStack.pop();
      if (braceStack.length == 0) {
        const block = pattern.substring(prevPos, pos);
        if (ICU_BLOCK_REGEXP.test(block)) {
          results.push(parseICUBlock(block));
        } else {
          results.push(block);
        }
        prevPos = pos + 1;
      }
    } else {
      if (braceStack.length == 0) {
        const substring2 = pattern.substring(prevPos, pos);
        results.push(substring2);
        prevPos = pos + 1;
      }
      braceStack.push("{");
    }
  }
  const substring = pattern.substring(prevPos);
  results.push(substring);
  return results;
}
function parseIcuCase(tView, tIcu, lView, updateOpCodes, parentIdx, caseName, unsafeCaseHtml, nestedIcus) {
  const create = [];
  const remove2 = [];
  const update = [];
  if (ngDevMode) {
    attachDebugGetter(create, icuCreateOpCodesToString);
    attachDebugGetter(remove2, i18nRemoveOpCodesToString);
    attachDebugGetter(update, i18nUpdateOpCodesToString);
  }
  tIcu.cases.push(caseName);
  tIcu.create.push(create);
  tIcu.remove.push(remove2);
  tIcu.update.push(update);
  const inertBodyHelper2 = getInertBodyHelper(getDocument());
  const inertBodyElement = inertBodyHelper2.getInertBodyElement(unsafeCaseHtml);
  ngDevMode && assertDefined(inertBodyElement, "Unable to generate inert body element");
  const inertRootNode = getTemplateContent(inertBodyElement) || inertBodyElement;
  if (inertRootNode) {
    return walkIcuTree(tView, tIcu, lView, updateOpCodes, create, remove2, update, inertRootNode, parentIdx, nestedIcus, 0);
  } else {
    return 0;
  }
}
function walkIcuTree(tView, tIcu, lView, sharedUpdateOpCodes, create, remove2, update, parentNode, parentIdx, nestedIcus, depth) {
  let bindingMask = 0;
  let currentNode = parentNode.firstChild;
  while (currentNode) {
    const newIndex = allocExpando(tView, lView, 1, null);
    switch (currentNode.nodeType) {
      case Node.ELEMENT_NODE:
        const element = currentNode;
        const tagName = element.tagName.toLowerCase();
        if (VALID_ELEMENTS.hasOwnProperty(tagName)) {
          addCreateNodeAndAppend(create, ELEMENT_MARKER, tagName, parentIdx, newIndex);
          tView.data[newIndex] = tagName;
          const elAttrs = element.attributes;
          for (let i = 0; i < elAttrs.length; i++) {
            const attr = elAttrs.item(i);
            const lowerAttrName = attr.name.toLowerCase();
            const hasBinding2 = !!attr.value.match(BINDING_REGEXP);
            if (hasBinding2) {
              if (VALID_ATTRS.hasOwnProperty(lowerAttrName)) {
                if (URI_ATTRS[lowerAttrName]) {
                  generateBindingUpdateOpCodes(update, attr.value, newIndex, attr.name, 0, _sanitizeUrl);
                } else {
                  generateBindingUpdateOpCodes(update, attr.value, newIndex, attr.name, 0, null);
                }
              } else {
                ngDevMode && console.warn(`WARNING: ignoring unsafe attribute value ${lowerAttrName} on element ${tagName} (see ${XSS_SECURITY_URL})`);
              }
            } else {
              addCreateAttribute(create, newIndex, attr);
            }
          }
          bindingMask = walkIcuTree(tView, tIcu, lView, sharedUpdateOpCodes, create, remove2, update, currentNode, newIndex, nestedIcus, depth + 1) | bindingMask;
          addRemoveNode(remove2, newIndex, depth);
        }
        break;
      case Node.TEXT_NODE:
        const value = currentNode.textContent || "";
        const hasBinding = value.match(BINDING_REGEXP);
        addCreateNodeAndAppend(create, null, hasBinding ? "" : value, parentIdx, newIndex);
        addRemoveNode(remove2, newIndex, depth);
        if (hasBinding) {
          bindingMask = generateBindingUpdateOpCodes(update, value, newIndex, null, 0, null) | bindingMask;
        }
        break;
      case Node.COMMENT_NODE:
        const isNestedIcu = NESTED_ICU.exec(currentNode.textContent || "");
        if (isNestedIcu) {
          const nestedIcuIndex = parseInt(isNestedIcu[1], 10);
          const icuExpression = nestedIcus[nestedIcuIndex];
          addCreateNodeAndAppend(create, ICU_MARKER, ngDevMode ? `nested ICU ${nestedIcuIndex}` : "", parentIdx, newIndex);
          icuStart(tView, lView, sharedUpdateOpCodes, parentIdx, icuExpression, newIndex);
          addRemoveNestedIcu(remove2, newIndex, depth);
        }
        break;
    }
    currentNode = currentNode.nextSibling;
  }
  return bindingMask;
}
function addRemoveNode(remove2, index, depth) {
  if (depth === 0) {
    remove2.push(index);
  }
}
function addRemoveNestedIcu(remove2, index, depth) {
  if (depth === 0) {
    remove2.push(~index);
    remove2.push(index);
  }
}
function addUpdateIcuSwitch(update, icuExpression, index) {
  update.push(
    toMaskBit(icuExpression.mainBinding),
    2,
    -1 - icuExpression.mainBinding,
    index << 2 | 2
    /* I18nUpdateOpCode.IcuSwitch */
  );
}
function addUpdateIcuUpdate(update, bindingMask, index) {
  update.push(
    bindingMask,
    1,
    index << 2 | 3
    /* I18nUpdateOpCode.IcuUpdate */
  );
}
function addCreateNodeAndAppend(create, marker, text, appendToParentIdx, createAtIdx) {
  if (marker !== null) {
    create.push(marker);
  }
  create.push(text, createAtIdx, icuCreateOpCode(0, appendToParentIdx, createAtIdx));
}
function addCreateAttribute(create, newIndex, attr) {
  create.push(newIndex << 1 | 1, attr.name, attr.value);
}
var ROOT_TEMPLATE_ID = 0;
var PP_MULTI_VALUE_PLACEHOLDERS_REGEXP = /\[(�.+?�?)\]/;
var PP_PLACEHOLDERS_REGEXP = /\[(�.+?�?)\]|(�\/?\*\d+:\d+�)/g;
var PP_ICU_VARS_REGEXP = /({\s*)(VAR_(PLURAL|SELECT)(_\d+)?)(\s*,)/g;
var PP_ICU_PLACEHOLDERS_REGEXP = /{([A-Z0-9_]+)}/g;
var PP_ICUS_REGEXP = /�I18N_EXP_(ICU(_\d+)?)�/g;
var PP_CLOSE_TEMPLATE_REGEXP = /\/\*/;
var PP_TEMPLATE_ID_REGEXP = /\d+\:(\d+)/;
function i18nPostprocess(message, replacements = {}) {
  let result = message;
  if (PP_MULTI_VALUE_PLACEHOLDERS_REGEXP.test(message)) {
    const matches = {};
    const templateIdsStack = [ROOT_TEMPLATE_ID];
    result = result.replace(PP_PLACEHOLDERS_REGEXP, (m, phs, tmpl) => {
      const content = phs || tmpl;
      const placeholders = matches[content] || [];
      if (!placeholders.length) {
        content.split("|").forEach((placeholder2) => {
          const match = placeholder2.match(PP_TEMPLATE_ID_REGEXP);
          const templateId2 = match ? parseInt(match[1], 10) : ROOT_TEMPLATE_ID;
          const isCloseTemplateTag2 = PP_CLOSE_TEMPLATE_REGEXP.test(placeholder2);
          placeholders.push([templateId2, isCloseTemplateTag2, placeholder2]);
        });
        matches[content] = placeholders;
      }
      if (!placeholders.length) {
        throw new Error(`i18n postprocess: unmatched placeholder - ${content}`);
      }
      const currentTemplateId = templateIdsStack[templateIdsStack.length - 1];
      let idx = 0;
      for (let i = 0; i < placeholders.length; i++) {
        if (placeholders[i][0] === currentTemplateId) {
          idx = i;
          break;
        }
      }
      const [templateId, isCloseTemplateTag, placeholder] = placeholders[idx];
      if (isCloseTemplateTag) {
        templateIdsStack.pop();
      } else if (currentTemplateId !== templateId) {
        templateIdsStack.push(templateId);
      }
      placeholders.splice(idx, 1);
      return placeholder;
    });
  }
  if (!Object.keys(replacements).length) {
    return result;
  }
  result = result.replace(PP_ICU_VARS_REGEXP, (match, start, key, _type, _idx, end) => {
    return replacements.hasOwnProperty(key) ? `${start}${replacements[key]}${end}` : match;
  });
  result = result.replace(PP_ICU_PLACEHOLDERS_REGEXP, (match, key) => {
    return replacements.hasOwnProperty(key) ? replacements[key] : match;
  });
  result = result.replace(PP_ICUS_REGEXP, (match, key) => {
    if (replacements.hasOwnProperty(key)) {
      const list = replacements[key];
      if (!list.length) {
        throw new Error(`i18n postprocess: unmatched ICU - ${match} with key: ${key}`);
      }
      return list.shift();
    }
    return match;
  });
  return result;
}
function \u0275\u0275i18nStart(index, messageIndex, subTemplateIndex = -1) {
  const tView = getTView();
  const lView = getLView();
  const adjustedIndex = HEADER_OFFSET + index;
  ngDevMode && assertDefined(tView, `tView should be defined`);
  const message = getConstant(tView.consts, messageIndex);
  const parentTNode = getCurrentParentTNode();
  if (tView.firstCreatePass) {
    i18nStartFirstCreatePass(tView, parentTNode === null ? 0 : parentTNode.index, lView, adjustedIndex, message, subTemplateIndex);
  }
  if (tView.type === 2) {
    const componentLView = lView[DECLARATION_COMPONENT_VIEW];
    componentLView[FLAGS] |= 32;
  } else {
    lView[FLAGS] |= 32;
  }
  const tI18n = tView.data[adjustedIndex];
  const sameViewParentTNode = parentTNode === lView[T_HOST] ? null : parentTNode;
  const parentRNode = getClosestRElement(tView, sameViewParentTNode, lView);
  const insertInFrontOf = parentTNode && parentTNode.type & 8 ? lView[parentTNode.index] : null;
  applyCreateOpCodes(lView, tI18n.create, parentRNode, insertInFrontOf);
  setInI18nBlock(true);
}
function \u0275\u0275i18nEnd() {
  setInI18nBlock(false);
}
function \u0275\u0275i18n(index, messageIndex, subTemplateIndex) {
  \u0275\u0275i18nStart(index, messageIndex, subTemplateIndex);
  \u0275\u0275i18nEnd();
}
function \u0275\u0275i18nAttributes(index, attrsIndex) {
  const tView = getTView();
  ngDevMode && assertDefined(tView, `tView should be defined`);
  const attrs = getConstant(tView.consts, attrsIndex);
  i18nAttributesFirstPass(tView, index + HEADER_OFFSET, attrs);
}
function \u0275\u0275i18nExp(value) {
  const lView = getLView();
  setMaskBit(bindingUpdated(lView, nextBindingIndex(), value));
  return \u0275\u0275i18nExp;
}
function \u0275\u0275i18nApply(index) {
  applyI18n(getTView(), getLView(), index + HEADER_OFFSET);
}
function \u0275\u0275i18nPostprocess(message, replacements = {}) {
  return i18nPostprocess(message, replacements);
}
function providersResolver(def, providers, viewProviders) {
  const tView = getTView();
  if (tView.firstCreatePass) {
    const isComponent = isComponentDef(def);
    resolveProvider(viewProviders, tView.data, tView.blueprint, isComponent, true);
    resolveProvider(providers, tView.data, tView.blueprint, isComponent, false);
  }
}
function resolveProvider(provider, tInjectables, lInjectablesBlueprint, isComponent, isViewProvider) {
  provider = resolveForwardRef(provider);
  if (Array.isArray(provider)) {
    for (let i = 0; i < provider.length; i++) {
      resolveProvider(provider[i], tInjectables, lInjectablesBlueprint, isComponent, isViewProvider);
    }
  } else {
    const tView = getTView();
    const lView = getLView();
    let token = isTypeProvider(provider) ? provider : resolveForwardRef(provider.provide);
    let providerFactory = providerToFactory(provider);
    const tNode = getCurrentTNode();
    const beginIndex = tNode.providerIndexes & 1048575;
    const endIndex = tNode.directiveStart;
    const cptViewProvidersCount = tNode.providerIndexes >> 20;
    if (isTypeProvider(provider) || !provider.multi) {
      const factory = new NodeInjectorFactory(providerFactory, isViewProvider, \u0275\u0275directiveInject);
      const existingFactoryIndex = indexOf(token, tInjectables, isViewProvider ? beginIndex : beginIndex + cptViewProvidersCount, endIndex);
      if (existingFactoryIndex === -1) {
        diPublicInInjector(getOrCreateNodeInjectorForNode(tNode, lView), tView, token);
        registerDestroyHooksIfSupported(tView, provider, tInjectables.length);
        tInjectables.push(token);
        tNode.directiveStart++;
        tNode.directiveEnd++;
        if (isViewProvider) {
          tNode.providerIndexes += 1048576;
        }
        lInjectablesBlueprint.push(factory);
        lView.push(factory);
      } else {
        lInjectablesBlueprint[existingFactoryIndex] = factory;
        lView[existingFactoryIndex] = factory;
      }
    } else {
      const existingProvidersFactoryIndex = indexOf(token, tInjectables, beginIndex + cptViewProvidersCount, endIndex);
      const existingViewProvidersFactoryIndex = indexOf(token, tInjectables, beginIndex, beginIndex + cptViewProvidersCount);
      const doesProvidersFactoryExist = existingProvidersFactoryIndex >= 0 && lInjectablesBlueprint[existingProvidersFactoryIndex];
      const doesViewProvidersFactoryExist = existingViewProvidersFactoryIndex >= 0 && lInjectablesBlueprint[existingViewProvidersFactoryIndex];
      if (isViewProvider && !doesViewProvidersFactoryExist || !isViewProvider && !doesProvidersFactoryExist) {
        diPublicInInjector(getOrCreateNodeInjectorForNode(tNode, lView), tView, token);
        const factory = multiFactory(isViewProvider ? multiViewProvidersFactoryResolver : multiProvidersFactoryResolver, lInjectablesBlueprint.length, isViewProvider, isComponent, providerFactory);
        if (!isViewProvider && doesViewProvidersFactoryExist) {
          lInjectablesBlueprint[existingViewProvidersFactoryIndex].providerFactory = factory;
        }
        registerDestroyHooksIfSupported(tView, provider, tInjectables.length, 0);
        tInjectables.push(token);
        tNode.directiveStart++;
        tNode.directiveEnd++;
        if (isViewProvider) {
          tNode.providerIndexes += 1048576;
        }
        lInjectablesBlueprint.push(factory);
        lView.push(factory);
      } else {
        const indexInFactory = multiFactoryAdd(lInjectablesBlueprint[isViewProvider ? existingViewProvidersFactoryIndex : existingProvidersFactoryIndex], providerFactory, !isViewProvider && isComponent);
        registerDestroyHooksIfSupported(tView, provider, existingProvidersFactoryIndex > -1 ? existingProvidersFactoryIndex : existingViewProvidersFactoryIndex, indexInFactory);
      }
      if (!isViewProvider && isComponent && doesViewProvidersFactoryExist) {
        lInjectablesBlueprint[existingViewProvidersFactoryIndex].componentProviders++;
      }
    }
  }
}
function registerDestroyHooksIfSupported(tView, provider, contextIndex, indexInFactory) {
  const providerIsTypeProvider = isTypeProvider(provider);
  const providerIsClassProvider = isClassProvider(provider);
  if (providerIsTypeProvider || providerIsClassProvider) {
    const classToken = providerIsClassProvider ? resolveForwardRef(provider.useClass) : provider;
    const prototype = classToken.prototype;
    const ngOnDestroy = prototype.ngOnDestroy;
    if (ngOnDestroy) {
      const hooks = tView.destroyHooks || (tView.destroyHooks = []);
      if (!providerIsTypeProvider && provider.multi) {
        ngDevMode && assertDefined(indexInFactory, "indexInFactory when registering multi factory destroy hook");
        const existingCallbacksIndex = hooks.indexOf(contextIndex);
        if (existingCallbacksIndex === -1) {
          hooks.push(contextIndex, [indexInFactory, ngOnDestroy]);
        } else {
          hooks[existingCallbacksIndex + 1].push(indexInFactory, ngOnDestroy);
        }
      } else {
        hooks.push(contextIndex, ngOnDestroy);
      }
    }
  }
}
function multiFactoryAdd(multiFactory2, factory, isComponentProvider) {
  if (isComponentProvider) {
    multiFactory2.componentProviders++;
  }
  return multiFactory2.multi.push(factory) - 1;
}
function indexOf(item, arr, begin, end) {
  for (let i = begin; i < end; i++) {
    if (arr[i] === item)
      return i;
  }
  return -1;
}
function multiProvidersFactoryResolver(_, tData, lData, tNode) {
  return multiResolve(this.multi, []);
}
function multiViewProvidersFactoryResolver(_, tData, lView, tNode) {
  const factories = this.multi;
  let result;
  if (this.providerFactory) {
    const componentCount = this.providerFactory.componentProviders;
    const multiProviders = getNodeInjectable(lView, lView[TVIEW], this.providerFactory.index, tNode);
    result = multiProviders.slice(0, componentCount);
    multiResolve(factories, result);
    for (let i = componentCount; i < multiProviders.length; i++) {
      result.push(multiProviders[i]);
    }
  } else {
    result = [];
    multiResolve(factories, result);
  }
  return result;
}
function multiResolve(factories, result) {
  for (let i = 0; i < factories.length; i++) {
    const factory = factories[i];
    result.push(factory());
  }
  return result;
}
function multiFactory(factoryFn, index, isViewProvider, isComponent, f) {
  const factory = new NodeInjectorFactory(factoryFn, isViewProvider, \u0275\u0275directiveInject);
  factory.multi = [];
  factory.index = index;
  factory.componentProviders = 0;
  multiFactoryAdd(factory, f, isComponent && !isViewProvider);
  return factory;
}
function \u0275\u0275ProvidersFeature(providers, viewProviders = []) {
  return (definition) => {
    definition.providersResolver = (def, processProvidersFn) => {
      return providersResolver(
        def,
        //
        processProvidersFn ? processProvidersFn(providers) : providers,
        //
        viewProviders
      );
    };
  };
}
var NgModuleRef$1 = class {
};
var NgModuleFactory$1 = class {
};
var NgModuleRef = class extends NgModuleRef$1 {
  constructor(ngModuleType, _parent, additionalProviders) {
    super();
    this._parent = _parent;
    this._bootstrapComponents = [];
    this.destroyCbs = [];
    this.componentFactoryResolver = new ComponentFactoryResolver(this);
    const ngModuleDef = getNgModuleDef(ngModuleType);
    ngDevMode && assertDefined(ngModuleDef, `NgModule '${stringify(ngModuleType)}' is not a subtype of 'NgModuleType'.`);
    this._bootstrapComponents = maybeUnwrapFn(ngModuleDef.bootstrap);
    this._r3Injector = createInjectorWithoutInjectorInstances(ngModuleType, _parent, [
      { provide: NgModuleRef$1, useValue: this },
      {
        provide: ComponentFactoryResolver$1,
        useValue: this.componentFactoryResolver
      },
      ...additionalProviders
    ], stringify(ngModuleType), /* @__PURE__ */ new Set(["environment"]));
    this._r3Injector.resolveInjectorInitializers();
    this.instance = this._r3Injector.get(ngModuleType);
  }
  get injector() {
    return this._r3Injector;
  }
  destroy() {
    ngDevMode && assertDefined(this.destroyCbs, "NgModule already destroyed");
    const injector = this._r3Injector;
    !injector.destroyed && injector.destroy();
    this.destroyCbs.forEach((fn) => fn());
    this.destroyCbs = null;
  }
  onDestroy(callback) {
    ngDevMode && assertDefined(this.destroyCbs, "NgModule already destroyed");
    this.destroyCbs.push(callback);
  }
};
var NgModuleFactory = class extends NgModuleFactory$1 {
  constructor(moduleType) {
    super();
    this.moduleType = moduleType;
  }
  create(parentInjector) {
    return new NgModuleRef(this.moduleType, parentInjector, []);
  }
};
function createNgModuleRefWithProviders(moduleType, parentInjector, additionalProviders) {
  return new NgModuleRef(moduleType, parentInjector, additionalProviders);
}
var EnvironmentNgModuleRefAdapter = class extends NgModuleRef$1 {
  constructor(config) {
    super();
    this.componentFactoryResolver = new ComponentFactoryResolver(this);
    this.instance = null;
    const injector = new R3Injector([
      ...config.providers,
      { provide: NgModuleRef$1, useValue: this },
      { provide: ComponentFactoryResolver$1, useValue: this.componentFactoryResolver }
    ], config.parent || getNullInjector(), config.debugName, /* @__PURE__ */ new Set(["environment"]));
    this.injector = injector;
    if (config.runEnvironmentInitializers) {
      injector.resolveInjectorInitializers();
    }
  }
  destroy() {
    this.injector.destroy();
  }
  onDestroy(callback) {
    this.injector.onDestroy(callback);
  }
};
function createEnvironmentInjector(providers, parent, debugName = null) {
  const adapter = new EnvironmentNgModuleRefAdapter({ providers, parent, debugName, runEnvironmentInitializers: true });
  return adapter.injector;
}
var _StandaloneService = class {
  constructor(_injector) {
    this._injector = _injector;
    this.cachedInjectors = /* @__PURE__ */ new Map();
  }
  getOrCreateStandaloneInjector(componentDef) {
    if (!componentDef.standalone) {
      return null;
    }
    if (!this.cachedInjectors.has(componentDef.id)) {
      const providers = internalImportProvidersFrom(false, componentDef.type);
      const standaloneInjector = providers.length > 0 ? createEnvironmentInjector([providers], this._injector, `Standalone[${componentDef.type.name}]`) : null;
      this.cachedInjectors.set(componentDef.id, standaloneInjector);
    }
    return this.cachedInjectors.get(componentDef.id);
  }
  ngOnDestroy() {
    try {
      for (const injector of this.cachedInjectors.values()) {
        if (injector !== null) {
          injector.destroy();
        }
      }
    } finally {
      this.cachedInjectors.clear();
    }
  }
};
var StandaloneService = _StandaloneService;
/** @nocollapse */
(() => {
  _StandaloneService.\u0275prov = \u0275\u0275defineInjectable({
    token: _StandaloneService,
    providedIn: "environment",
    factory: () => new _StandaloneService(\u0275\u0275inject(EnvironmentInjector))
  });
})();
function \u0275\u0275StandaloneFeature(definition) {
  definition.getStandaloneInjector = (parentInjector) => {
    return parentInjector.get(StandaloneService).getOrCreateStandaloneInjector(definition);
  };
}
function getComponent(element) {
  ngDevMode && assertDomElement(element);
  const context = getLContext(element);
  if (context === null)
    return null;
  if (context.component === void 0) {
    const lView = context.lView;
    if (lView === null) {
      return null;
    }
    context.component = getComponentAtNodeIndex(context.nodeIndex, lView);
  }
  return context.component;
}
function getContext(element) {
  assertDomElement(element);
  const context = getLContext(element);
  const lView = context ? context.lView : null;
  return lView === null ? null : lView[CONTEXT];
}
function getOwningComponent(elementOrDir) {
  const context = getLContext(elementOrDir);
  let lView = context ? context.lView : null;
  if (lView === null)
    return null;
  let parent;
  while (lView[TVIEW].type === 2 && (parent = getLViewParent(lView))) {
    lView = parent;
  }
  return lView[FLAGS] & 512 ? null : lView[CONTEXT];
}
function getRootComponents(elementOrDir) {
  const lView = readPatchedLView(elementOrDir);
  return lView !== null ? [getRootContext(lView)] : [];
}
function getInjector(elementOrDir) {
  const context = getLContext(elementOrDir);
  const lView = context ? context.lView : null;
  if (lView === null)
    return Injector.NULL;
  const tNode = lView[TVIEW].data[context.nodeIndex];
  return new NodeInjector(tNode, lView);
}
function getDirectives(node) {
  if (node instanceof Text) {
    return [];
  }
  const context = getLContext(node);
  const lView = context ? context.lView : null;
  if (lView === null) {
    return [];
  }
  const tView = lView[TVIEW];
  const nodeIndex = context.nodeIndex;
  if (!(tView == null ? void 0 : tView.data[nodeIndex])) {
    return [];
  }
  if (context.directives === void 0) {
    context.directives = getDirectivesAtNodeIndex(nodeIndex, lView);
  }
  return context.directives === null ? [] : [...context.directives];
}
function getDirectiveMetadata$1(directiveOrComponentInstance) {
  const { constructor } = directiveOrComponentInstance;
  if (!constructor) {
    throw new Error("Unable to find the instance constructor");
  }
  const componentDef = getComponentDef(constructor);
  if (componentDef) {
    return {
      inputs: componentDef.inputs,
      outputs: componentDef.outputs,
      encapsulation: componentDef.encapsulation,
      changeDetection: componentDef.onPush ? ChangeDetectionStrategy.OnPush : ChangeDetectionStrategy.Default
    };
  }
  const directiveDef = getDirectiveDef(constructor);
  if (directiveDef) {
    return { inputs: directiveDef.inputs, outputs: directiveDef.outputs };
  }
  return null;
}
function getHostElement(componentOrDirective) {
  return getLContext(componentOrDirective).native;
}
function getListeners(element) {
  ngDevMode && assertDomElement(element);
  const lContext = getLContext(element);
  const lView = lContext === null ? null : lContext.lView;
  if (lView === null)
    return [];
  const tView = lView[TVIEW];
  const lCleanup = lView[CLEANUP];
  const tCleanup = tView.cleanup;
  const listeners = [];
  if (tCleanup && lCleanup) {
    for (let i = 0; i < tCleanup.length; ) {
      const firstParam = tCleanup[i++];
      const secondParam = tCleanup[i++];
      if (typeof firstParam === "string") {
        const name = firstParam;
        const listenerElement = unwrapRNode(lView[secondParam]);
        const callback = lCleanup[tCleanup[i++]];
        const useCaptureOrIndx = tCleanup[i++];
        const type = typeof useCaptureOrIndx === "boolean" || useCaptureOrIndx >= 0 ? "dom" : "output";
        const useCapture = typeof useCaptureOrIndx === "boolean" ? useCaptureOrIndx : false;
        if (element == listenerElement) {
          listeners.push({ element, name, callback, useCapture, type });
        }
      }
    }
  }
  listeners.sort(sortListeners);
  return listeners;
}
function sortListeners(a, b) {
  if (a.name == b.name)
    return 0;
  return a.name < b.name ? -1 : 1;
}
function assertDomElement(value) {
  if (typeof Element !== "undefined" && !(value instanceof Element)) {
    throw new Error("Expecting instance of DOM Element");
  }
}
function setClassMetadata(type, decorators, ctorParameters, propDecorators) {
  return noSideEffects(() => {
    const clazz = type;
    if (decorators !== null) {
      if (clazz.hasOwnProperty("decorators") && clazz.decorators !== void 0) {
        clazz.decorators.push(...decorators);
      } else {
        clazz.decorators = decorators;
      }
    }
    if (ctorParameters !== null) {
      clazz.ctorParameters = ctorParameters;
    }
    if (propDecorators !== null) {
      if (clazz.hasOwnProperty("propDecorators") && clazz.propDecorators !== void 0) {
        clazz.propDecorators = __spreadValues(__spreadValues({}, clazz.propDecorators), propDecorators);
      } else {
        clazz.propDecorators = propDecorators;
      }
    }
  });
}
function \u0275\u0275pureFunction0(slotOffset, pureFn, thisArg) {
  const bindingIndex = getBindingRoot() + slotOffset;
  const lView = getLView();
  return lView[bindingIndex] === NO_CHANGE ? updateBinding(lView, bindingIndex, thisArg ? pureFn.call(thisArg) : pureFn()) : getBinding(lView, bindingIndex);
}
function \u0275\u0275pureFunction1(slotOffset, pureFn, exp, thisArg) {
  return pureFunction1Internal(getLView(), getBindingRoot(), slotOffset, pureFn, exp, thisArg);
}
function \u0275\u0275pureFunction2(slotOffset, pureFn, exp1, exp2, thisArg) {
  return pureFunction2Internal(getLView(), getBindingRoot(), slotOffset, pureFn, exp1, exp2, thisArg);
}
function \u0275\u0275pureFunction3(slotOffset, pureFn, exp1, exp2, exp3, thisArg) {
  return pureFunction3Internal(getLView(), getBindingRoot(), slotOffset, pureFn, exp1, exp2, exp3, thisArg);
}
function \u0275\u0275pureFunction4(slotOffset, pureFn, exp1, exp2, exp3, exp4, thisArg) {
  return pureFunction4Internal(getLView(), getBindingRoot(), slotOffset, pureFn, exp1, exp2, exp3, exp4, thisArg);
}
function \u0275\u0275pureFunction5(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, thisArg) {
  const bindingIndex = getBindingRoot() + slotOffset;
  const lView = getLView();
  const different = bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4);
  return bindingUpdated(lView, bindingIndex + 4, exp5) || different ? updateBinding(lView, bindingIndex + 5, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5) : pureFn(exp1, exp2, exp3, exp4, exp5)) : getBinding(lView, bindingIndex + 5);
}
function \u0275\u0275pureFunction6(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, thisArg) {
  const bindingIndex = getBindingRoot() + slotOffset;
  const lView = getLView();
  const different = bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4);
  return bindingUpdated2(lView, bindingIndex + 4, exp5, exp6) || different ? updateBinding(lView, bindingIndex + 6, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6) : pureFn(exp1, exp2, exp3, exp4, exp5, exp6)) : getBinding(lView, bindingIndex + 6);
}
function \u0275\u0275pureFunction7(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, exp7, thisArg) {
  const bindingIndex = getBindingRoot() + slotOffset;
  const lView = getLView();
  let different = bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4);
  return bindingUpdated3(lView, bindingIndex + 4, exp5, exp6, exp7) || different ? updateBinding(lView, bindingIndex + 7, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6, exp7) : pureFn(exp1, exp2, exp3, exp4, exp5, exp6, exp7)) : getBinding(lView, bindingIndex + 7);
}
function \u0275\u0275pureFunction8(slotOffset, pureFn, exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8, thisArg) {
  const bindingIndex = getBindingRoot() + slotOffset;
  const lView = getLView();
  const different = bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4);
  return bindingUpdated4(lView, bindingIndex + 4, exp5, exp6, exp7, exp8) || different ? updateBinding(lView, bindingIndex + 8, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8) : pureFn(exp1, exp2, exp3, exp4, exp5, exp6, exp7, exp8)) : getBinding(lView, bindingIndex + 8);
}
function \u0275\u0275pureFunctionV(slotOffset, pureFn, exps, thisArg) {
  return pureFunctionVInternal(getLView(), getBindingRoot(), slotOffset, pureFn, exps, thisArg);
}
function getPureFunctionReturnValue(lView, returnValueIndex) {
  ngDevMode && assertIndexInRange(lView, returnValueIndex);
  const lastReturnValue = lView[returnValueIndex];
  return lastReturnValue === NO_CHANGE ? void 0 : lastReturnValue;
}
function pureFunction1Internal(lView, bindingRoot, slotOffset, pureFn, exp, thisArg) {
  const bindingIndex = bindingRoot + slotOffset;
  return bindingUpdated(lView, bindingIndex, exp) ? updateBinding(lView, bindingIndex + 1, thisArg ? pureFn.call(thisArg, exp) : pureFn(exp)) : getPureFunctionReturnValue(lView, bindingIndex + 1);
}
function pureFunction2Internal(lView, bindingRoot, slotOffset, pureFn, exp1, exp2, thisArg) {
  const bindingIndex = bindingRoot + slotOffset;
  return bindingUpdated2(lView, bindingIndex, exp1, exp2) ? updateBinding(lView, bindingIndex + 2, thisArg ? pureFn.call(thisArg, exp1, exp2) : pureFn(exp1, exp2)) : getPureFunctionReturnValue(lView, bindingIndex + 2);
}
function pureFunction3Internal(lView, bindingRoot, slotOffset, pureFn, exp1, exp2, exp3, thisArg) {
  const bindingIndex = bindingRoot + slotOffset;
  return bindingUpdated3(lView, bindingIndex, exp1, exp2, exp3) ? updateBinding(lView, bindingIndex + 3, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3) : pureFn(exp1, exp2, exp3)) : getPureFunctionReturnValue(lView, bindingIndex + 3);
}
function pureFunction4Internal(lView, bindingRoot, slotOffset, pureFn, exp1, exp2, exp3, exp4, thisArg) {
  const bindingIndex = bindingRoot + slotOffset;
  return bindingUpdated4(lView, bindingIndex, exp1, exp2, exp3, exp4) ? updateBinding(lView, bindingIndex + 4, thisArg ? pureFn.call(thisArg, exp1, exp2, exp3, exp4) : pureFn(exp1, exp2, exp3, exp4)) : getPureFunctionReturnValue(lView, bindingIndex + 4);
}
function pureFunctionVInternal(lView, bindingRoot, slotOffset, pureFn, exps, thisArg) {
  let bindingIndex = bindingRoot + slotOffset;
  let different = false;
  for (let i = 0; i < exps.length; i++) {
    bindingUpdated(lView, bindingIndex++, exps[i]) && (different = true);
  }
  return different ? updateBinding(lView, bindingIndex, pureFn.apply(thisArg, exps)) : getPureFunctionReturnValue(lView, bindingIndex);
}
function \u0275\u0275pipe(index, pipeName) {
  var _a2;
  const tView = getTView();
  let pipeDef;
  const adjustedIndex = index + HEADER_OFFSET;
  if (tView.firstCreatePass) {
    pipeDef = getPipeDef(pipeName, tView.pipeRegistry);
    tView.data[adjustedIndex] = pipeDef;
    if (pipeDef.onDestroy) {
      ((_a2 = tView.destroyHooks) != null ? _a2 : tView.destroyHooks = []).push(adjustedIndex, pipeDef.onDestroy);
    }
  } else {
    pipeDef = tView.data[adjustedIndex];
  }
  const pipeFactory = pipeDef.factory || (pipeDef.factory = getFactoryDef(pipeDef.type, true));
  const previousInjectImplementation = setInjectImplementation(\u0275\u0275directiveInject);
  try {
    const previousIncludeViewProviders = setIncludeViewProviders(false);
    const pipeInstance = pipeFactory();
    setIncludeViewProviders(previousIncludeViewProviders);
    store(tView, getLView(), adjustedIndex, pipeInstance);
    return pipeInstance;
  } finally {
    setInjectImplementation(previousInjectImplementation);
  }
}
function getPipeDef(name, registry) {
  if (registry) {
    for (let i = registry.length - 1; i >= 0; i--) {
      const pipeDef = registry[i];
      if (name === pipeDef.name) {
        return pipeDef;
      }
    }
  }
  if (ngDevMode) {
    throw new RuntimeError(-302, getPipeNotFoundErrorMessage(name));
  }
}
function getPipeNotFoundErrorMessage(name) {
  const lView = getLView();
  const declarationLView = lView[DECLARATION_COMPONENT_VIEW];
  const context = declarationLView[CONTEXT];
  const hostIsStandalone = isHostComponentStandalone(lView);
  const componentInfoMessage = context ? ` in the '${context.constructor.name}' component` : "";
  const verifyMessage = `Verify that it is ${hostIsStandalone ? "included in the '@Component.imports' of this component" : "declared or imported in this module"}`;
  const errorMessage = `The pipe '${name}' could not be found${componentInfoMessage}. ${verifyMessage}`;
  return errorMessage;
}
function \u0275\u0275pipeBind1(index, slotOffset, v1) {
  const adjustedIndex = index + HEADER_OFFSET;
  const lView = getLView();
  const pipeInstance = load(lView, adjustedIndex);
  return isPure(lView, adjustedIndex) ? pureFunction1Internal(lView, getBindingRoot(), slotOffset, pipeInstance.transform, v1, pipeInstance) : pipeInstance.transform(v1);
}
function \u0275\u0275pipeBind2(index, slotOffset, v1, v2) {
  const adjustedIndex = index + HEADER_OFFSET;
  const lView = getLView();
  const pipeInstance = load(lView, adjustedIndex);
  return isPure(lView, adjustedIndex) ? pureFunction2Internal(lView, getBindingRoot(), slotOffset, pipeInstance.transform, v1, v2, pipeInstance) : pipeInstance.transform(v1, v2);
}
function \u0275\u0275pipeBind3(index, slotOffset, v1, v2, v3) {
  const adjustedIndex = index + HEADER_OFFSET;
  const lView = getLView();
  const pipeInstance = load(lView, adjustedIndex);
  return isPure(lView, adjustedIndex) ? pureFunction3Internal(lView, getBindingRoot(), slotOffset, pipeInstance.transform, v1, v2, v3, pipeInstance) : pipeInstance.transform(v1, v2, v3);
}
function \u0275\u0275pipeBind4(index, slotOffset, v1, v2, v3, v4) {
  const adjustedIndex = index + HEADER_OFFSET;
  const lView = getLView();
  const pipeInstance = load(lView, adjustedIndex);
  return isPure(lView, adjustedIndex) ? pureFunction4Internal(lView, getBindingRoot(), slotOffset, pipeInstance.transform, v1, v2, v3, v4, pipeInstance) : pipeInstance.transform(v1, v2, v3, v4);
}
function \u0275\u0275pipeBindV(index, slotOffset, values) {
  const adjustedIndex = index + HEADER_OFFSET;
  const lView = getLView();
  const pipeInstance = load(lView, adjustedIndex);
  return isPure(lView, adjustedIndex) ? pureFunctionVInternal(lView, getBindingRoot(), slotOffset, pipeInstance.transform, values, pipeInstance) : pipeInstance.transform.apply(pipeInstance, values);
}
function isPure(lView, index) {
  return lView[TVIEW].data[index].pure;
}
var EventEmitter_ = class extends import_rxjs.Subject {
  constructor(isAsync = false) {
    super();
    this.__isAsync = isAsync;
  }
  emit(value) {
    super.next(value);
  }
  subscribe(observerOrNext, error, complete) {
    var _a2, _b, _c;
    let nextFn = observerOrNext;
    let errorFn = error || (() => null);
    let completeFn = complete;
    if (observerOrNext && typeof observerOrNext === "object") {
      const observer = observerOrNext;
      nextFn = (_a2 = observer.next) == null ? void 0 : _a2.bind(observer);
      errorFn = (_b = observer.error) == null ? void 0 : _b.bind(observer);
      completeFn = (_c = observer.complete) == null ? void 0 : _c.bind(observer);
    }
    if (this.__isAsync) {
      errorFn = _wrapInTimeout(errorFn);
      if (nextFn) {
        nextFn = _wrapInTimeout(nextFn);
      }
      if (completeFn) {
        completeFn = _wrapInTimeout(completeFn);
      }
    }
    const sink = super.subscribe({ next: nextFn, error: errorFn, complete: completeFn });
    if (observerOrNext instanceof import_rxjs.Subscription) {
      observerOrNext.add(sink);
    }
    return sink;
  }
};
function _wrapInTimeout(fn) {
  return (value) => {
    setTimeout(fn, void 0, value);
  };
}
var EventEmitter = EventEmitter_;
function symbolIterator() {
  return this._results[Symbol.iterator]();
}
var _QueryList = class {
  /**
   * Returns `Observable` of `QueryList` notifying the subscriber of changes.
   */
  get changes() {
    return this._changes || (this._changes = new EventEmitter());
  }
  /**
   * @param emitDistinctChangesOnly Whether `QueryList.changes` should fire only when actual change
   *     has occurred. Or if it should fire when query is recomputed. (recomputing could resolve in
   *     the same result)
   */
  constructor(_emitDistinctChangesOnly = false) {
    this._emitDistinctChangesOnly = _emitDistinctChangesOnly;
    this.dirty = true;
    this._results = [];
    this._changesDetected = false;
    this._changes = null;
    this.length = 0;
    this.first = void 0;
    this.last = void 0;
    const proto = _QueryList.prototype;
    if (!proto[Symbol.iterator])
      proto[Symbol.iterator] = symbolIterator;
  }
  /**
   * Returns the QueryList entry at `index`.
   */
  get(index) {
    return this._results[index];
  }
  /**
   * See
   * [Array.map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   */
  map(fn) {
    return this._results.map(fn);
  }
  filter(fn) {
    return this._results.filter(fn);
  }
  /**
   * See
   * [Array.find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find)
   */
  find(fn) {
    return this._results.find(fn);
  }
  /**
   * See
   * [Array.reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)
   */
  reduce(fn, init) {
    return this._results.reduce(fn, init);
  }
  /**
   * See
   * [Array.forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
   */
  forEach(fn) {
    this._results.forEach(fn);
  }
  /**
   * See
   * [Array.some](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/some)
   */
  some(fn) {
    return this._results.some(fn);
  }
  /**
   * Returns a copy of the internal results list as an Array.
   */
  toArray() {
    return this._results.slice();
  }
  toString() {
    return this._results.toString();
  }
  /**
   * Updates the stored data of the query list, and resets the `dirty` flag to `false`, so that
   * on change detection, it will not notify of changes to the queries, unless a new change
   * occurs.
   *
   * @param resultsTree The query results to store
   * @param identityAccessor Optional function for extracting stable object identity from a value
   *    in the array. This function is executed for each element of the query result list while
   *    comparing current query list with the new one (provided as a first argument of the `reset`
   *    function) to detect if the lists are different. If the function is not provided, elements
   *    are compared as is (without any pre-processing).
   */
  reset(resultsTree, identityAccessor) {
    const self2 = this;
    self2.dirty = false;
    const newResultFlat = flatten(resultsTree);
    if (this._changesDetected = !arrayEquals(self2._results, newResultFlat, identityAccessor)) {
      self2._results = newResultFlat;
      self2.length = newResultFlat.length;
      self2.last = newResultFlat[this.length - 1];
      self2.first = newResultFlat[0];
    }
  }
  /**
   * Triggers a change event by emitting on the `changes` {@link EventEmitter}.
   */
  notifyOnChanges() {
    if (this._changes && (this._changesDetected || !this._emitDistinctChangesOnly))
      this._changes.emit(this);
  }
  /** internal */
  setDirty() {
    this.dirty = true;
  }
  /** internal */
  destroy() {
    this.changes.complete();
    this.changes.unsubscribe();
  }
};
var QueryList = _QueryList;
(() => {
  Symbol.iterator;
})();
var _TemplateRef = class {
};
var TemplateRef = _TemplateRef;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _TemplateRef.__NG_ELEMENT_ID__ = injectTemplateRef;
})();
var ViewEngineTemplateRef = TemplateRef;
var R3TemplateRef = class TemplateRef2 extends ViewEngineTemplateRef {
  constructor(_declarationLView, _declarationTContainer, elementRef) {
    super();
    this._declarationLView = _declarationLView;
    this._declarationTContainer = _declarationTContainer;
    this.elementRef = elementRef;
  }
  /**
   * Returns an `ssrId` associated with a TView, which was used to
   * create this instance of the `TemplateRef`.
   *
   * @internal
   */
  get ssrId() {
    var _a2;
    return ((_a2 = this._declarationTContainer.tView) == null ? void 0 : _a2.ssrId) || null;
  }
  createEmbeddedView(context, injector) {
    return this.createEmbeddedViewImpl(context, injector, null);
  }
  /**
   * @internal
   */
  createEmbeddedViewImpl(context, injector, hydrationInfo) {
    const isSignalView = this._declarationLView[FLAGS] & 4096;
    const viewFlags = isSignalView ? 4096 : 16;
    const embeddedTView = this._declarationTContainer.tView;
    const embeddedLView = createLView(this._declarationLView, embeddedTView, context, viewFlags, null, embeddedTView.declTNode, null, null, null, injector || null, hydrationInfo || null);
    const declarationLContainer = this._declarationLView[this._declarationTContainer.index];
    ngDevMode && assertLContainer(declarationLContainer);
    embeddedLView[DECLARATION_LCONTAINER] = declarationLContainer;
    const declarationViewLQueries = this._declarationLView[QUERIES];
    if (declarationViewLQueries !== null) {
      embeddedLView[QUERIES] = declarationViewLQueries.createEmbeddedView(embeddedTView);
    }
    renderView(embeddedTView, embeddedLView, context);
    return new ViewRef$1(embeddedLView);
  }
};
function injectTemplateRef() {
  return createTemplateRef(getCurrentTNode(), getLView());
}
function createTemplateRef(hostTNode, hostLView) {
  if (hostTNode.type & 4) {
    ngDevMode && assertDefined(hostTNode.tView, "TView must be allocated");
    return new R3TemplateRef(hostLView, hostTNode, createElementRef(hostTNode, hostLView));
  }
  return null;
}
var _findMatchingDehydratedViewImpl = (lContainer, template) => null;
function findMatchingDehydratedView(lContainer, template) {
  return _findMatchingDehydratedViewImpl(lContainer, template);
}
var _ViewContainerRef = class {
};
var ViewContainerRef = _ViewContainerRef;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _ViewContainerRef.__NG_ELEMENT_ID__ = injectViewContainerRef;
})();
function injectViewContainerRef() {
  const previousTNode = getCurrentTNode();
  return createContainerRef(previousTNode, getLView());
}
var VE_ViewContainerRef = ViewContainerRef;
var R3ViewContainerRef = class ViewContainerRef2 extends VE_ViewContainerRef {
  constructor(_lContainer, _hostTNode, _hostLView) {
    super();
    this._lContainer = _lContainer;
    this._hostTNode = _hostTNode;
    this._hostLView = _hostLView;
  }
  get element() {
    return createElementRef(this._hostTNode, this._hostLView);
  }
  get injector() {
    return new NodeInjector(this._hostTNode, this._hostLView);
  }
  /** @deprecated No replacement */
  get parentInjector() {
    const parentLocation = getParentInjectorLocation(this._hostTNode, this._hostLView);
    if (hasParentInjector(parentLocation)) {
      const parentView = getParentInjectorView(parentLocation, this._hostLView);
      const injectorIndex = getParentInjectorIndex(parentLocation);
      ngDevMode && assertNodeInjector(parentView, injectorIndex);
      const parentTNode = parentView[TVIEW].data[
        injectorIndex + 8
        /* NodeInjectorOffset.TNODE */
      ];
      return new NodeInjector(parentTNode, parentView);
    } else {
      return new NodeInjector(null, this._hostLView);
    }
  }
  clear() {
    while (this.length > 0) {
      this.remove(this.length - 1);
    }
  }
  get(index) {
    const viewRefs = getViewRefs(this._lContainer);
    return viewRefs !== null && viewRefs[index] || null;
  }
  get length() {
    return this._lContainer.length - CONTAINER_HEADER_OFFSET;
  }
  createEmbeddedView(templateRef, context, indexOrOptions) {
    let index;
    let injector;
    if (typeof indexOrOptions === "number") {
      index = indexOrOptions;
    } else if (indexOrOptions != null) {
      index = indexOrOptions.index;
      injector = indexOrOptions.injector;
    }
    const hydrationInfo = findMatchingDehydratedView(this._lContainer, templateRef.ssrId);
    const viewRef = templateRef.createEmbeddedViewImpl(context || {}, injector, hydrationInfo);
    const skipDomInsertion = !!hydrationInfo && !hasInSkipHydrationBlockFlag(this._hostTNode);
    this.insertImpl(viewRef, index, skipDomInsertion);
    return viewRef;
  }
  createComponent(componentFactoryOrType, indexOrOptions, injector, projectableNodes, environmentInjector) {
    var _a2, _b, _c;
    const isComponentFactory = componentFactoryOrType && !isType(componentFactoryOrType);
    let index;
    if (isComponentFactory) {
      if (ngDevMode) {
        assertEqual(typeof indexOrOptions !== "object", true, "It looks like Component factory was provided as the first argument and an options object as the second argument. This combination of arguments is incompatible. You can either change the first argument to provide Component type or change the second argument to be a number (representing an index at which to insert the new component's host view into this container)");
      }
      index = indexOrOptions;
    } else {
      if (ngDevMode) {
        assertDefined(getComponentDef(componentFactoryOrType), `Provided Component class doesn't contain Component definition. Please check whether provided class has @Component decorator.`);
        assertEqual(typeof indexOrOptions !== "number", true, "It looks like Component type was provided as the first argument and a number (representing an index at which to insert the new component's host view into this container as the second argument. This combination of arguments is incompatible. Please use an object as the second argument instead.");
      }
      const options = indexOrOptions || {};
      if (ngDevMode && options.environmentInjector && options.ngModuleRef) {
        throwError(`Cannot pass both environmentInjector and ngModuleRef options to createComponent().`);
      }
      index = options.index;
      injector = options.injector;
      projectableNodes = options.projectableNodes;
      environmentInjector = options.environmentInjector || options.ngModuleRef;
    }
    const componentFactory = isComponentFactory ? componentFactoryOrType : new ComponentFactory(getComponentDef(componentFactoryOrType));
    const contextInjector = injector || this.parentInjector;
    if (!environmentInjector && componentFactory.ngModule == null) {
      const _injector = isComponentFactory ? contextInjector : this.parentInjector;
      const result = _injector.get(EnvironmentInjector, null);
      if (result) {
        environmentInjector = result;
      }
    }
    const componentDef = getComponentDef((_a2 = componentFactory.componentType) != null ? _a2 : {});
    const dehydratedView = findMatchingDehydratedView(this._lContainer, (_b = componentDef == null ? void 0 : componentDef.id) != null ? _b : null);
    const rNode = (_c = dehydratedView == null ? void 0 : dehydratedView.firstChild) != null ? _c : null;
    const componentRef = componentFactory.create(contextInjector, projectableNodes, rNode, environmentInjector);
    const skipDomInsertion = !!dehydratedView && !hasInSkipHydrationBlockFlag(this._hostTNode);
    this.insertImpl(componentRef.hostView, index, skipDomInsertion);
    return componentRef;
  }
  insert(viewRef, index) {
    return this.insertImpl(viewRef, index, false);
  }
  insertImpl(viewRef, index, skipDomInsertion) {
    const lView = viewRef._lView;
    const tView = lView[TVIEW];
    if (ngDevMode && viewRef.destroyed) {
      throw new Error("Cannot insert a destroyed View in a ViewContainer!");
    }
    if (viewAttachedToContainer(lView)) {
      const prevIdx = this.indexOf(viewRef);
      if (prevIdx !== -1) {
        this.detach(prevIdx);
      } else {
        const prevLContainer = lView[PARENT];
        ngDevMode && assertEqual(isLContainer(prevLContainer), true, "An attached view should have its PARENT point to a container.");
        const prevVCRef = new R3ViewContainerRef(prevLContainer, prevLContainer[T_HOST], prevLContainer[PARENT]);
        prevVCRef.detach(prevVCRef.indexOf(viewRef));
      }
    }
    const adjustedIdx = this._adjustIndex(index);
    const lContainer = this._lContainer;
    insertView(tView, lView, lContainer, adjustedIdx);
    if (!skipDomInsertion) {
      const beforeNode = getBeforeNodeForView(adjustedIdx, lContainer);
      const renderer = lView[RENDERER];
      const parentRNode = nativeParentNode(renderer, lContainer[NATIVE]);
      if (parentRNode !== null) {
        addViewToContainer(tView, lContainer[T_HOST], renderer, lView, parentRNode, beforeNode);
      }
    }
    viewRef.attachToViewContainerRef();
    addToArray(getOrCreateViewRefs(lContainer), adjustedIdx, viewRef);
    return viewRef;
  }
  move(viewRef, newIndex) {
    if (ngDevMode && viewRef.destroyed) {
      throw new Error("Cannot move a destroyed View in a ViewContainer!");
    }
    return this.insert(viewRef, newIndex);
  }
  indexOf(viewRef) {
    const viewRefsArr = getViewRefs(this._lContainer);
    return viewRefsArr !== null ? viewRefsArr.indexOf(viewRef) : -1;
  }
  remove(index) {
    const adjustedIdx = this._adjustIndex(index, -1);
    const detachedView = detachView(this._lContainer, adjustedIdx);
    if (detachedView) {
      removeFromArray(getOrCreateViewRefs(this._lContainer), adjustedIdx);
      destroyLView(detachedView[TVIEW], detachedView);
    }
  }
  detach(index) {
    const adjustedIdx = this._adjustIndex(index, -1);
    const view = detachView(this._lContainer, adjustedIdx);
    const wasDetached = view && removeFromArray(getOrCreateViewRefs(this._lContainer), adjustedIdx) != null;
    return wasDetached ? new ViewRef$1(view) : null;
  }
  _adjustIndex(index, shift = 0) {
    if (index == null) {
      return this.length + shift;
    }
    if (ngDevMode) {
      assertGreaterThan(index, -1, `ViewRef index must be positive, got ${index}`);
      assertLessThan(index, this.length + 1 + shift, "index");
    }
    return index;
  }
};
function getViewRefs(lContainer) {
  return lContainer[VIEW_REFS];
}
function getOrCreateViewRefs(lContainer) {
  return lContainer[VIEW_REFS] || (lContainer[VIEW_REFS] = []);
}
function createContainerRef(hostTNode, hostLView) {
  ngDevMode && assertTNodeType(
    hostTNode,
    12 | 3
    /* TNodeType.AnyRNode */
  );
  let lContainer;
  const slotValue = hostLView[hostTNode.index];
  if (isLContainer(slotValue)) {
    lContainer = slotValue;
  } else {
    lContainer = createLContainer(slotValue, hostLView, null, hostTNode);
    hostLView[hostTNode.index] = lContainer;
    addToViewTree(hostLView, lContainer);
  }
  _locateOrCreateAnchorNode(lContainer, hostLView, hostTNode, slotValue);
  return new R3ViewContainerRef(lContainer, hostTNode, hostLView);
}
function insertAnchorNode(hostLView, hostTNode) {
  const renderer = hostLView[RENDERER];
  ngDevMode && ngDevMode.rendererCreateComment++;
  const commentNode = renderer.createComment(ngDevMode ? "container" : "");
  const hostNative = getNativeByTNode(hostTNode, hostLView);
  const parentOfHostNative = nativeParentNode(renderer, hostNative);
  nativeInsertBefore(renderer, parentOfHostNative, commentNode, nativeNextSibling(renderer, hostNative), false);
  return commentNode;
}
var _locateOrCreateAnchorNode = createAnchorNode;
function createAnchorNode(lContainer, hostLView, hostTNode, slotValue) {
  if (lContainer[NATIVE])
    return;
  let commentNode;
  if (hostTNode.type & 8) {
    commentNode = unwrapRNode(slotValue);
  } else {
    commentNode = insertAnchorNode(hostLView, hostTNode);
  }
  lContainer[NATIVE] = commentNode;
}
var LQuery_ = class {
  constructor(queryList) {
    this.queryList = queryList;
    this.matches = null;
  }
  clone() {
    return new LQuery_(this.queryList);
  }
  setDirty() {
    this.queryList.setDirty();
  }
};
var LQueries_ = class {
  constructor(queries = []) {
    this.queries = queries;
  }
  createEmbeddedView(tView) {
    const tQueries = tView.queries;
    if (tQueries !== null) {
      const noOfInheritedQueries = tView.contentQueries !== null ? tView.contentQueries[0] : tQueries.length;
      const viewLQueries = [];
      for (let i = 0; i < noOfInheritedQueries; i++) {
        const tQuery = tQueries.getByIndex(i);
        const parentLQuery = this.queries[tQuery.indexInDeclarationView];
        viewLQueries.push(parentLQuery.clone());
      }
      return new LQueries_(viewLQueries);
    }
    return null;
  }
  insertView(tView) {
    this.dirtyQueriesWithMatches(tView);
  }
  detachView(tView) {
    this.dirtyQueriesWithMatches(tView);
  }
  dirtyQueriesWithMatches(tView) {
    for (let i = 0; i < this.queries.length; i++) {
      if (getTQuery(tView, i).matches !== null) {
        this.queries[i].setDirty();
      }
    }
  }
};
var TQueryMetadata_ = class {
  constructor(predicate, flags, read = null) {
    this.predicate = predicate;
    this.flags = flags;
    this.read = read;
  }
};
var TQueries_ = class {
  constructor(queries = []) {
    this.queries = queries;
  }
  elementStart(tView, tNode) {
    ngDevMode && assertFirstCreatePass(tView, "Queries should collect results on the first template pass only");
    for (let i = 0; i < this.queries.length; i++) {
      this.queries[i].elementStart(tView, tNode);
    }
  }
  elementEnd(tNode) {
    for (let i = 0; i < this.queries.length; i++) {
      this.queries[i].elementEnd(tNode);
    }
  }
  embeddedTView(tNode) {
    let queriesForTemplateRef = null;
    for (let i = 0; i < this.length; i++) {
      const childQueryIndex = queriesForTemplateRef !== null ? queriesForTemplateRef.length : 0;
      const tqueryClone = this.getByIndex(i).embeddedTView(tNode, childQueryIndex);
      if (tqueryClone) {
        tqueryClone.indexInDeclarationView = i;
        if (queriesForTemplateRef !== null) {
          queriesForTemplateRef.push(tqueryClone);
        } else {
          queriesForTemplateRef = [tqueryClone];
        }
      }
    }
    return queriesForTemplateRef !== null ? new TQueries_(queriesForTemplateRef) : null;
  }
  template(tView, tNode) {
    ngDevMode && assertFirstCreatePass(tView, "Queries should collect results on the first template pass only");
    for (let i = 0; i < this.queries.length; i++) {
      this.queries[i].template(tView, tNode);
    }
  }
  getByIndex(index) {
    ngDevMode && assertIndexInRange(this.queries, index);
    return this.queries[index];
  }
  get length() {
    return this.queries.length;
  }
  track(tquery) {
    this.queries.push(tquery);
  }
};
var TQuery_ = class {
  constructor(metadata, nodeIndex = -1) {
    this.metadata = metadata;
    this.matches = null;
    this.indexInDeclarationView = -1;
    this.crossesNgTemplate = false;
    this._appliesToNextNode = true;
    this._declarationNodeIndex = nodeIndex;
  }
  elementStart(tView, tNode) {
    if (this.isApplyingToNode(tNode)) {
      this.matchTNode(tView, tNode);
    }
  }
  elementEnd(tNode) {
    if (this._declarationNodeIndex === tNode.index) {
      this._appliesToNextNode = false;
    }
  }
  template(tView, tNode) {
    this.elementStart(tView, tNode);
  }
  embeddedTView(tNode, childQueryIndex) {
    if (this.isApplyingToNode(tNode)) {
      this.crossesNgTemplate = true;
      this.addMatch(-tNode.index, childQueryIndex);
      return new TQuery_(this.metadata);
    }
    return null;
  }
  isApplyingToNode(tNode) {
    if (this._appliesToNextNode && (this.metadata.flags & 1) !== 1) {
      const declarationNodeIdx = this._declarationNodeIndex;
      let parent = tNode.parent;
      while (parent !== null && parent.type & 8 && parent.index !== declarationNodeIdx) {
        parent = parent.parent;
      }
      return declarationNodeIdx === (parent !== null ? parent.index : -1);
    }
    return this._appliesToNextNode;
  }
  matchTNode(tView, tNode) {
    const predicate = this.metadata.predicate;
    if (Array.isArray(predicate)) {
      for (let i = 0; i < predicate.length; i++) {
        const name = predicate[i];
        this.matchTNodeWithReadOption(tView, tNode, getIdxOfMatchingSelector(tNode, name));
        this.matchTNodeWithReadOption(tView, tNode, locateDirectiveOrProvider(tNode, tView, name, false, false));
      }
    } else {
      if (predicate === TemplateRef) {
        if (tNode.type & 4) {
          this.matchTNodeWithReadOption(tView, tNode, -1);
        }
      } else {
        this.matchTNodeWithReadOption(tView, tNode, locateDirectiveOrProvider(tNode, tView, predicate, false, false));
      }
    }
  }
  matchTNodeWithReadOption(tView, tNode, nodeMatchIdx) {
    if (nodeMatchIdx !== null) {
      const read = this.metadata.read;
      if (read !== null) {
        if (read === ElementRef || read === ViewContainerRef || read === TemplateRef && tNode.type & 4) {
          this.addMatch(tNode.index, -2);
        } else {
          const directiveOrProviderIdx = locateDirectiveOrProvider(tNode, tView, read, false, false);
          if (directiveOrProviderIdx !== null) {
            this.addMatch(tNode.index, directiveOrProviderIdx);
          }
        }
      } else {
        this.addMatch(tNode.index, nodeMatchIdx);
      }
    }
  }
  addMatch(tNodeIdx, matchIdx) {
    if (this.matches === null) {
      this.matches = [tNodeIdx, matchIdx];
    } else {
      this.matches.push(tNodeIdx, matchIdx);
    }
  }
};
function getIdxOfMatchingSelector(tNode, selector) {
  const localNames = tNode.localNames;
  if (localNames !== null) {
    for (let i = 0; i < localNames.length; i += 2) {
      if (localNames[i] === selector) {
        return localNames[i + 1];
      }
    }
  }
  return null;
}
function createResultByTNodeType(tNode, currentView) {
  if (tNode.type & (3 | 8)) {
    return createElementRef(tNode, currentView);
  } else if (tNode.type & 4) {
    return createTemplateRef(tNode, currentView);
  }
  return null;
}
function createResultForNode(lView, tNode, matchingIdx, read) {
  if (matchingIdx === -1) {
    return createResultByTNodeType(tNode, lView);
  } else if (matchingIdx === -2) {
    return createSpecialToken(lView, tNode, read);
  } else {
    return getNodeInjectable(lView, lView[TVIEW], matchingIdx, tNode);
  }
}
function createSpecialToken(lView, tNode, read) {
  if (read === ElementRef) {
    return createElementRef(tNode, lView);
  } else if (read === TemplateRef) {
    return createTemplateRef(tNode, lView);
  } else if (read === ViewContainerRef) {
    ngDevMode && assertTNodeType(
      tNode,
      3 | 12
      /* TNodeType.AnyContainer */
    );
    return createContainerRef(tNode, lView);
  } else {
    ngDevMode && throwError(`Special token to read should be one of ElementRef, TemplateRef or ViewContainerRef but got ${stringify(read)}.`);
  }
}
function materializeViewResults(tView, lView, tQuery, queryIndex) {
  const lQuery = lView[QUERIES].queries[queryIndex];
  if (lQuery.matches === null) {
    const tViewData = tView.data;
    const tQueryMatches = tQuery.matches;
    const result = [];
    for (let i = 0; i < tQueryMatches.length; i += 2) {
      const matchedNodeIdx = tQueryMatches[i];
      if (matchedNodeIdx < 0) {
        result.push(null);
      } else {
        ngDevMode && assertIndexInRange(tViewData, matchedNodeIdx);
        const tNode = tViewData[matchedNodeIdx];
        result.push(createResultForNode(lView, tNode, tQueryMatches[i + 1], tQuery.metadata.read));
      }
    }
    lQuery.matches = result;
  }
  return lQuery.matches;
}
function collectQueryResults(tView, lView, queryIndex, result) {
  const tQuery = tView.queries.getByIndex(queryIndex);
  const tQueryMatches = tQuery.matches;
  if (tQueryMatches !== null) {
    const lViewResults = materializeViewResults(tView, lView, tQuery, queryIndex);
    for (let i = 0; i < tQueryMatches.length; i += 2) {
      const tNodeIdx = tQueryMatches[i];
      if (tNodeIdx > 0) {
        result.push(lViewResults[i / 2]);
      } else {
        const childQueryIndex = tQueryMatches[i + 1];
        const declarationLContainer = lView[-tNodeIdx];
        ngDevMode && assertLContainer(declarationLContainer);
        for (let i2 = CONTAINER_HEADER_OFFSET; i2 < declarationLContainer.length; i2++) {
          const embeddedLView = declarationLContainer[i2];
          if (embeddedLView[DECLARATION_LCONTAINER] === embeddedLView[PARENT]) {
            collectQueryResults(embeddedLView[TVIEW], embeddedLView, childQueryIndex, result);
          }
        }
        if (declarationLContainer[MOVED_VIEWS] !== null) {
          const embeddedLViews = declarationLContainer[MOVED_VIEWS];
          for (let i2 = 0; i2 < embeddedLViews.length; i2++) {
            const embeddedLView = embeddedLViews[i2];
            collectQueryResults(embeddedLView[TVIEW], embeddedLView, childQueryIndex, result);
          }
        }
      }
    }
  }
  return result;
}
function \u0275\u0275queryRefresh(queryList) {
  const lView = getLView();
  const tView = getTView();
  const queryIndex = getCurrentQueryIndex();
  setCurrentQueryIndex(queryIndex + 1);
  const tQuery = getTQuery(tView, queryIndex);
  if (queryList.dirty && isCreationMode(lView) === ((tQuery.metadata.flags & 2) === 2)) {
    if (tQuery.matches === null) {
      queryList.reset([]);
    } else {
      const result = tQuery.crossesNgTemplate ? collectQueryResults(tView, lView, queryIndex, []) : materializeViewResults(tView, lView, tQuery, queryIndex);
      queryList.reset(result, unwrapElementRef);
      queryList.notifyOnChanges();
    }
    return true;
  }
  return false;
}
function \u0275\u0275viewQuery(predicate, flags, read) {
  ngDevMode && assertNumber(flags, "Expecting flags");
  const tView = getTView();
  if (tView.firstCreatePass) {
    createTQuery(tView, new TQueryMetadata_(predicate, flags, read), -1);
    if ((flags & 2) === 2) {
      tView.staticViewQueries = true;
    }
  }
  createLQuery(tView, getLView(), flags);
}
function \u0275\u0275contentQuery(directiveIndex, predicate, flags, read) {
  ngDevMode && assertNumber(flags, "Expecting flags");
  const tView = getTView();
  if (tView.firstCreatePass) {
    const tNode = getCurrentTNode();
    createTQuery(tView, new TQueryMetadata_(predicate, flags, read), tNode.index);
    saveContentQueryAndDirectiveIndex(tView, directiveIndex);
    if ((flags & 2) === 2) {
      tView.staticContentQueries = true;
    }
  }
  createLQuery(tView, getLView(), flags);
}
function \u0275\u0275loadQuery() {
  return loadQueryInternal(getLView(), getCurrentQueryIndex());
}
function loadQueryInternal(lView, queryIndex) {
  ngDevMode && assertDefined(lView[QUERIES], "LQueries should be defined when trying to load a query");
  ngDevMode && assertIndexInRange(lView[QUERIES].queries, queryIndex);
  return lView[QUERIES].queries[queryIndex].queryList;
}
function createLQuery(tView, lView, flags) {
  const queryList = new QueryList(
    (flags & 4) === 4
    /* QueryFlags.emitDistinctChangesOnly */
  );
  storeCleanupWithContext(tView, lView, queryList, queryList.destroy);
  if (lView[QUERIES] === null)
    lView[QUERIES] = new LQueries_();
  lView[QUERIES].queries.push(new LQuery_(queryList));
}
function createTQuery(tView, metadata, nodeIndex) {
  if (tView.queries === null)
    tView.queries = new TQueries_();
  tView.queries.track(new TQuery_(metadata, nodeIndex));
}
function saveContentQueryAndDirectiveIndex(tView, directiveIndex) {
  const tViewContentQueries = tView.contentQueries || (tView.contentQueries = []);
  const lastSavedDirectiveIndex = tViewContentQueries.length ? tViewContentQueries[tViewContentQueries.length - 1] : -1;
  if (directiveIndex !== lastSavedDirectiveIndex) {
    tViewContentQueries.push(tView.queries.length - 1, directiveIndex);
  }
}
function getTQuery(tView, index) {
  ngDevMode && assertDefined(tView.queries, "TQueries must be defined to retrieve a TQuery");
  return tView.queries.getByIndex(index);
}
function \u0275\u0275templateRefExtractor(tNode, lView) {
  return createTemplateRef(tNode, lView);
}
var angularCoreEnv = (() => ({
  "\u0275\u0275attribute": \u0275\u0275attribute,
  "\u0275\u0275attributeInterpolate1": \u0275\u0275attributeInterpolate1,
  "\u0275\u0275attributeInterpolate2": \u0275\u0275attributeInterpolate2,
  "\u0275\u0275attributeInterpolate3": \u0275\u0275attributeInterpolate3,
  "\u0275\u0275attributeInterpolate4": \u0275\u0275attributeInterpolate4,
  "\u0275\u0275attributeInterpolate5": \u0275\u0275attributeInterpolate5,
  "\u0275\u0275attributeInterpolate6": \u0275\u0275attributeInterpolate6,
  "\u0275\u0275attributeInterpolate7": \u0275\u0275attributeInterpolate7,
  "\u0275\u0275attributeInterpolate8": \u0275\u0275attributeInterpolate8,
  "\u0275\u0275attributeInterpolateV": \u0275\u0275attributeInterpolateV,
  "\u0275\u0275defineComponent": \u0275\u0275defineComponent,
  "\u0275\u0275defineDirective": \u0275\u0275defineDirective,
  "\u0275\u0275defineInjectable": \u0275\u0275defineInjectable,
  "\u0275\u0275defineInjector": \u0275\u0275defineInjector,
  "\u0275\u0275defineNgModule": \u0275\u0275defineNgModule,
  "\u0275\u0275definePipe": \u0275\u0275definePipe,
  "\u0275\u0275directiveInject": \u0275\u0275directiveInject,
  "\u0275\u0275getInheritedFactory": \u0275\u0275getInheritedFactory,
  "\u0275\u0275inject": \u0275\u0275inject,
  "\u0275\u0275injectAttribute": \u0275\u0275injectAttribute,
  "\u0275\u0275invalidFactory": \u0275\u0275invalidFactory,
  "\u0275\u0275invalidFactoryDep": \u0275\u0275invalidFactoryDep,
  "\u0275\u0275templateRefExtractor": \u0275\u0275templateRefExtractor,
  "\u0275\u0275resetView": \u0275\u0275resetView,
  "\u0275\u0275HostDirectivesFeature": \u0275\u0275HostDirectivesFeature,
  "\u0275\u0275NgOnChangesFeature": \u0275\u0275NgOnChangesFeature,
  "\u0275\u0275ProvidersFeature": \u0275\u0275ProvidersFeature,
  "\u0275\u0275CopyDefinitionFeature": \u0275\u0275CopyDefinitionFeature,
  "\u0275\u0275InheritDefinitionFeature": \u0275\u0275InheritDefinitionFeature,
  "\u0275\u0275InputTransformsFeature": \u0275\u0275InputTransformsFeature,
  "\u0275\u0275StandaloneFeature": \u0275\u0275StandaloneFeature,
  "\u0275\u0275nextContext": \u0275\u0275nextContext,
  "\u0275\u0275namespaceHTML": \u0275\u0275namespaceHTML,
  "\u0275\u0275namespaceMathML": \u0275\u0275namespaceMathML,
  "\u0275\u0275namespaceSVG": \u0275\u0275namespaceSVG,
  "\u0275\u0275enableBindings": \u0275\u0275enableBindings,
  "\u0275\u0275disableBindings": \u0275\u0275disableBindings,
  "\u0275\u0275elementStart": \u0275\u0275elementStart,
  "\u0275\u0275elementEnd": \u0275\u0275elementEnd,
  "\u0275\u0275element": \u0275\u0275element,
  "\u0275\u0275elementContainerStart": \u0275\u0275elementContainerStart,
  "\u0275\u0275elementContainerEnd": \u0275\u0275elementContainerEnd,
  "\u0275\u0275elementContainer": \u0275\u0275elementContainer,
  "\u0275\u0275pureFunction0": \u0275\u0275pureFunction0,
  "\u0275\u0275pureFunction1": \u0275\u0275pureFunction1,
  "\u0275\u0275pureFunction2": \u0275\u0275pureFunction2,
  "\u0275\u0275pureFunction3": \u0275\u0275pureFunction3,
  "\u0275\u0275pureFunction4": \u0275\u0275pureFunction4,
  "\u0275\u0275pureFunction5": \u0275\u0275pureFunction5,
  "\u0275\u0275pureFunction6": \u0275\u0275pureFunction6,
  "\u0275\u0275pureFunction7": \u0275\u0275pureFunction7,
  "\u0275\u0275pureFunction8": \u0275\u0275pureFunction8,
  "\u0275\u0275pureFunctionV": \u0275\u0275pureFunctionV,
  "\u0275\u0275getCurrentView": \u0275\u0275getCurrentView,
  "\u0275\u0275restoreView": \u0275\u0275restoreView,
  "\u0275\u0275listener": \u0275\u0275listener,
  "\u0275\u0275projection": \u0275\u0275projection,
  "\u0275\u0275syntheticHostProperty": \u0275\u0275syntheticHostProperty,
  "\u0275\u0275syntheticHostListener": \u0275\u0275syntheticHostListener,
  "\u0275\u0275pipeBind1": \u0275\u0275pipeBind1,
  "\u0275\u0275pipeBind2": \u0275\u0275pipeBind2,
  "\u0275\u0275pipeBind3": \u0275\u0275pipeBind3,
  "\u0275\u0275pipeBind4": \u0275\u0275pipeBind4,
  "\u0275\u0275pipeBindV": \u0275\u0275pipeBindV,
  "\u0275\u0275projectionDef": \u0275\u0275projectionDef,
  "\u0275\u0275hostProperty": \u0275\u0275hostProperty,
  "\u0275\u0275property": \u0275\u0275property,
  "\u0275\u0275propertyInterpolate": \u0275\u0275propertyInterpolate,
  "\u0275\u0275propertyInterpolate1": \u0275\u0275propertyInterpolate1,
  "\u0275\u0275propertyInterpolate2": \u0275\u0275propertyInterpolate2,
  "\u0275\u0275propertyInterpolate3": \u0275\u0275propertyInterpolate3,
  "\u0275\u0275propertyInterpolate4": \u0275\u0275propertyInterpolate4,
  "\u0275\u0275propertyInterpolate5": \u0275\u0275propertyInterpolate5,
  "\u0275\u0275propertyInterpolate6": \u0275\u0275propertyInterpolate6,
  "\u0275\u0275propertyInterpolate7": \u0275\u0275propertyInterpolate7,
  "\u0275\u0275propertyInterpolate8": \u0275\u0275propertyInterpolate8,
  "\u0275\u0275propertyInterpolateV": \u0275\u0275propertyInterpolateV,
  "\u0275\u0275pipe": \u0275\u0275pipe,
  "\u0275\u0275queryRefresh": \u0275\u0275queryRefresh,
  "\u0275\u0275viewQuery": \u0275\u0275viewQuery,
  "\u0275\u0275loadQuery": \u0275\u0275loadQuery,
  "\u0275\u0275contentQuery": \u0275\u0275contentQuery,
  "\u0275\u0275reference": \u0275\u0275reference,
  "\u0275\u0275classMap": \u0275\u0275classMap,
  "\u0275\u0275classMapInterpolate1": \u0275\u0275classMapInterpolate1,
  "\u0275\u0275classMapInterpolate2": \u0275\u0275classMapInterpolate2,
  "\u0275\u0275classMapInterpolate3": \u0275\u0275classMapInterpolate3,
  "\u0275\u0275classMapInterpolate4": \u0275\u0275classMapInterpolate4,
  "\u0275\u0275classMapInterpolate5": \u0275\u0275classMapInterpolate5,
  "\u0275\u0275classMapInterpolate6": \u0275\u0275classMapInterpolate6,
  "\u0275\u0275classMapInterpolate7": \u0275\u0275classMapInterpolate7,
  "\u0275\u0275classMapInterpolate8": \u0275\u0275classMapInterpolate8,
  "\u0275\u0275classMapInterpolateV": \u0275\u0275classMapInterpolateV,
  "\u0275\u0275styleMap": \u0275\u0275styleMap,
  "\u0275\u0275styleMapInterpolate1": \u0275\u0275styleMapInterpolate1,
  "\u0275\u0275styleMapInterpolate2": \u0275\u0275styleMapInterpolate2,
  "\u0275\u0275styleMapInterpolate3": \u0275\u0275styleMapInterpolate3,
  "\u0275\u0275styleMapInterpolate4": \u0275\u0275styleMapInterpolate4,
  "\u0275\u0275styleMapInterpolate5": \u0275\u0275styleMapInterpolate5,
  "\u0275\u0275styleMapInterpolate6": \u0275\u0275styleMapInterpolate6,
  "\u0275\u0275styleMapInterpolate7": \u0275\u0275styleMapInterpolate7,
  "\u0275\u0275styleMapInterpolate8": \u0275\u0275styleMapInterpolate8,
  "\u0275\u0275styleMapInterpolateV": \u0275\u0275styleMapInterpolateV,
  "\u0275\u0275styleProp": \u0275\u0275styleProp,
  "\u0275\u0275stylePropInterpolate1": \u0275\u0275stylePropInterpolate1,
  "\u0275\u0275stylePropInterpolate2": \u0275\u0275stylePropInterpolate2,
  "\u0275\u0275stylePropInterpolate3": \u0275\u0275stylePropInterpolate3,
  "\u0275\u0275stylePropInterpolate4": \u0275\u0275stylePropInterpolate4,
  "\u0275\u0275stylePropInterpolate5": \u0275\u0275stylePropInterpolate5,
  "\u0275\u0275stylePropInterpolate6": \u0275\u0275stylePropInterpolate6,
  "\u0275\u0275stylePropInterpolate7": \u0275\u0275stylePropInterpolate7,
  "\u0275\u0275stylePropInterpolate8": \u0275\u0275stylePropInterpolate8,
  "\u0275\u0275stylePropInterpolateV": \u0275\u0275stylePropInterpolateV,
  "\u0275\u0275classProp": \u0275\u0275classProp,
  "\u0275\u0275advance": \u0275\u0275advance,
  "\u0275\u0275template": \u0275\u0275template,
  "\u0275\u0275text": \u0275\u0275text,
  "\u0275\u0275textInterpolate": \u0275\u0275textInterpolate,
  "\u0275\u0275textInterpolate1": \u0275\u0275textInterpolate1,
  "\u0275\u0275textInterpolate2": \u0275\u0275textInterpolate2,
  "\u0275\u0275textInterpolate3": \u0275\u0275textInterpolate3,
  "\u0275\u0275textInterpolate4": \u0275\u0275textInterpolate4,
  "\u0275\u0275textInterpolate5": \u0275\u0275textInterpolate5,
  "\u0275\u0275textInterpolate6": \u0275\u0275textInterpolate6,
  "\u0275\u0275textInterpolate7": \u0275\u0275textInterpolate7,
  "\u0275\u0275textInterpolate8": \u0275\u0275textInterpolate8,
  "\u0275\u0275textInterpolateV": \u0275\u0275textInterpolateV,
  "\u0275\u0275i18n": \u0275\u0275i18n,
  "\u0275\u0275i18nAttributes": \u0275\u0275i18nAttributes,
  "\u0275\u0275i18nExp": \u0275\u0275i18nExp,
  "\u0275\u0275i18nStart": \u0275\u0275i18nStart,
  "\u0275\u0275i18nEnd": \u0275\u0275i18nEnd,
  "\u0275\u0275i18nApply": \u0275\u0275i18nApply,
  "\u0275\u0275i18nPostprocess": \u0275\u0275i18nPostprocess,
  "\u0275\u0275resolveWindow": \u0275\u0275resolveWindow,
  "\u0275\u0275resolveDocument": \u0275\u0275resolveDocument,
  "\u0275\u0275resolveBody": \u0275\u0275resolveBody,
  "\u0275\u0275setComponentScope": \u0275\u0275setComponentScope,
  "\u0275\u0275setNgModuleScope": \u0275\u0275setNgModuleScope,
  "\u0275\u0275registerNgModuleType": registerNgModuleType,
  "\u0275\u0275sanitizeHtml": \u0275\u0275sanitizeHtml,
  "\u0275\u0275sanitizeStyle": \u0275\u0275sanitizeStyle,
  "\u0275\u0275sanitizeResourceUrl": \u0275\u0275sanitizeResourceUrl,
  "\u0275\u0275sanitizeScript": \u0275\u0275sanitizeScript,
  "\u0275\u0275sanitizeUrl": \u0275\u0275sanitizeUrl,
  "\u0275\u0275sanitizeUrlOrResourceUrl": \u0275\u0275sanitizeUrlOrResourceUrl,
  "\u0275\u0275trustConstantHtml": \u0275\u0275trustConstantHtml,
  "\u0275\u0275trustConstantResourceUrl": \u0275\u0275trustConstantResourceUrl,
  "\u0275\u0275validateIframeAttribute": \u0275\u0275validateIframeAttribute,
  "forwardRef": forwardRef,
  "resolveForwardRef": resolveForwardRef
}))();
var jitOptions = null;
function setJitOptions(options) {
  if (jitOptions !== null) {
    if (options.defaultEncapsulation !== jitOptions.defaultEncapsulation) {
      ngDevMode && console.error("Provided value for `defaultEncapsulation` can not be changed once it has been set.");
      return;
    }
    if (options.preserveWhitespaces !== jitOptions.preserveWhitespaces) {
      ngDevMode && console.error("Provided value for `preserveWhitespaces` can not be changed once it has been set.");
      return;
    }
  }
  jitOptions = options;
}
function getJitOptions() {
  return jitOptions;
}
function patchModuleCompilation() {
}
function isModuleWithProviders(value) {
  return value.ngModule !== void 0;
}
function isNgModule(value) {
  return !!getNgModuleDef(value);
}
var moduleQueue = [];
function enqueueModuleForDelayedScoping(moduleType, ngModule) {
  moduleQueue.push({ moduleType, ngModule });
}
var flushingModuleQueue = false;
function flushModuleScopingQueueAsMuchAsPossible() {
  if (!flushingModuleQueue) {
    flushingModuleQueue = true;
    try {
      for (let i = moduleQueue.length - 1; i >= 0; i--) {
        const { moduleType, ngModule } = moduleQueue[i];
        if (ngModule.declarations && ngModule.declarations.every(isResolvedDeclaration)) {
          moduleQueue.splice(i, 1);
          setScopeOnDeclaredComponents(moduleType, ngModule);
        }
      }
    } finally {
      flushingModuleQueue = false;
    }
  }
}
function isResolvedDeclaration(declaration) {
  if (Array.isArray(declaration)) {
    return declaration.every(isResolvedDeclaration);
  }
  return !!resolveForwardRef(declaration);
}
function compileNgModule(moduleType, ngModule = {}) {
  patchModuleCompilation();
  compileNgModuleDefs(moduleType, ngModule);
  if (ngModule.id !== void 0) {
    registerNgModuleType(moduleType, ngModule.id);
  }
  enqueueModuleForDelayedScoping(moduleType, ngModule);
}
function compileNgModuleDefs(moduleType, ngModule, allowDuplicateDeclarationsInRoot = false) {
  ngDevMode && assertDefined(moduleType, "Required value moduleType");
  ngDevMode && assertDefined(ngModule, "Required value ngModule");
  const declarations = flatten(ngModule.declarations || EMPTY_ARRAY);
  let ngModuleDef = null;
  Object.defineProperty(moduleType, NG_MOD_DEF, {
    configurable: true,
    get: () => {
      if (ngModuleDef === null) {
        if (ngDevMode && ngModule.imports && ngModule.imports.indexOf(moduleType) > -1) {
          throw new Error(`'${stringifyForError(moduleType)}' module can't import itself`);
        }
        const compiler = getCompilerFacade({ usage: 0, kind: "NgModule", type: moduleType });
        ngModuleDef = compiler.compileNgModule(angularCoreEnv, `ng:///${moduleType.name}/\u0275mod.js`, {
          type: moduleType,
          bootstrap: flatten(ngModule.bootstrap || EMPTY_ARRAY).map(resolveForwardRef),
          declarations: declarations.map(resolveForwardRef),
          imports: flatten(ngModule.imports || EMPTY_ARRAY).map(resolveForwardRef).map(expandModuleWithProviders),
          exports: flatten(ngModule.exports || EMPTY_ARRAY).map(resolveForwardRef).map(expandModuleWithProviders),
          schemas: ngModule.schemas ? flatten(ngModule.schemas) : null,
          id: ngModule.id || null
        });
        if (!ngModuleDef.schemas) {
          ngModuleDef.schemas = [];
        }
      }
      return ngModuleDef;
    }
  });
  let ngFactoryDef = null;
  Object.defineProperty(moduleType, NG_FACTORY_DEF, {
    get: () => {
      if (ngFactoryDef === null) {
        const compiler = getCompilerFacade({ usage: 0, kind: "NgModule", type: moduleType });
        ngFactoryDef = compiler.compileFactory(angularCoreEnv, `ng:///${moduleType.name}/\u0275fac.js`, {
          name: moduleType.name,
          type: moduleType,
          deps: reflectDependencies(moduleType),
          target: compiler.FactoryTarget.NgModule,
          typeArgumentCount: 0
        });
      }
      return ngFactoryDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
  let ngInjectorDef = null;
  Object.defineProperty(moduleType, NG_INJ_DEF, {
    get: () => {
      if (ngInjectorDef === null) {
        ngDevMode && verifySemanticsOfNgModuleDef(moduleType, allowDuplicateDeclarationsInRoot);
        const meta = {
          name: moduleType.name,
          type: moduleType,
          providers: ngModule.providers || EMPTY_ARRAY,
          imports: [
            (ngModule.imports || EMPTY_ARRAY).map(resolveForwardRef),
            (ngModule.exports || EMPTY_ARRAY).map(resolveForwardRef)
          ]
        };
        const compiler = getCompilerFacade({ usage: 0, kind: "NgModule", type: moduleType });
        ngInjectorDef = compiler.compileInjector(angularCoreEnv, `ng:///${moduleType.name}/\u0275inj.js`, meta);
      }
      return ngInjectorDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function generateStandaloneInDeclarationsError(type, location2) {
  const prefix = `Unexpected "${stringifyForError(type)}" found in the "declarations" array of the`;
  const suffix = `"${stringifyForError(type)}" is marked as standalone and can't be declared in any NgModule - did you intend to import it instead (by adding it to the "imports" array)?`;
  return `${prefix} ${location2}, ${suffix}`;
}
function verifySemanticsOfNgModuleDef(moduleType, allowDuplicateDeclarationsInRoot, importingModule) {
  if (verifiedNgModule.get(moduleType))
    return;
  if (isStandalone(moduleType))
    return;
  verifiedNgModule.set(moduleType, true);
  moduleType = resolveForwardRef(moduleType);
  let ngModuleDef;
  if (importingModule) {
    ngModuleDef = getNgModuleDef(moduleType);
    if (!ngModuleDef) {
      throw new Error(`Unexpected value '${moduleType.name}' imported by the module '${importingModule.name}'. Please add an @NgModule annotation.`);
    }
  } else {
    ngModuleDef = getNgModuleDef(moduleType, true);
  }
  const errors = [];
  const declarations = maybeUnwrapFn(ngModuleDef.declarations);
  const imports = maybeUnwrapFn(ngModuleDef.imports);
  flatten(imports).map(unwrapModuleWithProvidersImports).forEach((modOrStandaloneCmpt) => {
    verifySemanticsOfNgModuleImport(modOrStandaloneCmpt, moduleType);
    verifySemanticsOfNgModuleDef(modOrStandaloneCmpt, false, moduleType);
  });
  const exports = maybeUnwrapFn(ngModuleDef.exports);
  declarations.forEach(verifyDeclarationsHaveDefinitions);
  declarations.forEach(verifyDirectivesHaveSelector);
  declarations.forEach((declarationType) => verifyNotStandalone(declarationType, moduleType));
  const combinedDeclarations = [
    ...declarations.map(resolveForwardRef),
    ...flatten(imports.map(computeCombinedExports)).map(resolveForwardRef)
  ];
  exports.forEach(verifyExportsAreDeclaredOrReExported);
  declarations.forEach((decl) => verifyDeclarationIsUnique(decl, allowDuplicateDeclarationsInRoot));
  const ngModule = getAnnotation(moduleType, "NgModule");
  if (ngModule) {
    ngModule.imports && flatten(ngModule.imports).map(unwrapModuleWithProvidersImports).forEach((mod) => {
      verifySemanticsOfNgModuleImport(mod, moduleType);
      verifySemanticsOfNgModuleDef(mod, false, moduleType);
    });
    ngModule.bootstrap && deepForEach(ngModule.bootstrap, verifyCorrectBootstrapType);
    ngModule.bootstrap && deepForEach(ngModule.bootstrap, verifyComponentIsPartOfNgModule);
  }
  if (errors.length) {
    throw new Error(errors.join("\n"));
  }
  function verifyDeclarationsHaveDefinitions(type) {
    type = resolveForwardRef(type);
    const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef$1(type);
    if (!def) {
      errors.push(`Unexpected value '${stringifyForError(type)}' declared by the module '${stringifyForError(moduleType)}'. Please add a @Pipe/@Directive/@Component annotation.`);
    }
  }
  function verifyDirectivesHaveSelector(type) {
    type = resolveForwardRef(type);
    const def = getDirectiveDef(type);
    if (!getComponentDef(type) && def && def.selectors.length == 0) {
      errors.push(`Directive ${stringifyForError(type)} has no selector, please add it!`);
    }
  }
  function verifyNotStandalone(type, moduleType2) {
    type = resolveForwardRef(type);
    const def = getComponentDef(type) || getDirectiveDef(type) || getPipeDef$1(type);
    if (def == null ? void 0 : def.standalone) {
      const location2 = `"${stringifyForError(moduleType2)}" NgModule`;
      errors.push(generateStandaloneInDeclarationsError(type, location2));
    }
  }
  function verifyExportsAreDeclaredOrReExported(type) {
    type = resolveForwardRef(type);
    const kind = getComponentDef(type) && "component" || getDirectiveDef(type) && "directive" || getPipeDef$1(type) && "pipe";
    if (kind) {
      if (combinedDeclarations.lastIndexOf(type) === -1) {
        errors.push(`Can't export ${kind} ${stringifyForError(type)} from ${stringifyForError(moduleType)} as it was neither declared nor imported!`);
      }
    }
  }
  function verifyDeclarationIsUnique(type, suppressErrors) {
    type = resolveForwardRef(type);
    const existingModule = ownerNgModule.get(type);
    if (existingModule && existingModule !== moduleType) {
      if (!suppressErrors) {
        const modules2 = [existingModule, moduleType].map(stringifyForError).sort();
        errors.push(`Type ${stringifyForError(type)} is part of the declarations of 2 modules: ${modules2[0]} and ${modules2[1]}! Please consider moving ${stringifyForError(type)} to a higher module that imports ${modules2[0]} and ${modules2[1]}. You can also create a new NgModule that exports and includes ${stringifyForError(type)} then import that NgModule in ${modules2[0]} and ${modules2[1]}.`);
      }
    } else {
      ownerNgModule.set(type, moduleType);
    }
  }
  function verifyComponentIsPartOfNgModule(type) {
    type = resolveForwardRef(type);
    const existingModule = ownerNgModule.get(type);
    if (!existingModule && !isStandalone(type)) {
      errors.push(`Component ${stringifyForError(type)} is not part of any NgModule or the module has not been imported into your module.`);
    }
  }
  function verifyCorrectBootstrapType(type) {
    type = resolveForwardRef(type);
    if (!getComponentDef(type)) {
      errors.push(`${stringifyForError(type)} cannot be used as an entry component.`);
    }
    if (isStandalone(type)) {
      errors.push(`The \`${stringifyForError(type)}\` class is a standalone component, which can not be used in the \`@NgModule.bootstrap\` array. Use the \`bootstrapApplication\` function for bootstrap instead.`);
    }
  }
  function verifySemanticsOfNgModuleImport(type, importingModule2) {
    type = resolveForwardRef(type);
    const directiveDef = getComponentDef(type) || getDirectiveDef(type);
    if (directiveDef !== null && !directiveDef.standalone) {
      throw new Error(`Unexpected directive '${type.name}' imported by the module '${importingModule2.name}'. Please add an @NgModule annotation.`);
    }
    const pipeDef = getPipeDef$1(type);
    if (pipeDef !== null && !pipeDef.standalone) {
      throw new Error(`Unexpected pipe '${type.name}' imported by the module '${importingModule2.name}'. Please add an @NgModule annotation.`);
    }
  }
}
function unwrapModuleWithProvidersImports(typeOrWithProviders) {
  typeOrWithProviders = resolveForwardRef(typeOrWithProviders);
  return typeOrWithProviders.ngModule || typeOrWithProviders;
}
function getAnnotation(type, name) {
  let annotation = null;
  collect(type.__annotations__);
  collect(type.decorators);
  return annotation;
  function collect(annotations) {
    if (annotations) {
      annotations.forEach(readAnnotation);
    }
  }
  function readAnnotation(decorator) {
    if (!annotation) {
      const proto = Object.getPrototypeOf(decorator);
      if (proto.ngMetadataName == name) {
        annotation = decorator;
      } else if (decorator.type) {
        const proto2 = Object.getPrototypeOf(decorator.type);
        if (proto2.ngMetadataName == name) {
          annotation = decorator.args[0];
        }
      }
    }
  }
}
var ownerNgModule = /* @__PURE__ */ new WeakMap();
var verifiedNgModule = /* @__PURE__ */ new WeakMap();
function computeCombinedExports(type) {
  type = resolveForwardRef(type);
  const ngModuleDef = getNgModuleDef(type);
  if (ngModuleDef === null) {
    return [type];
  }
  return flatten(maybeUnwrapFn(ngModuleDef.exports).map((type2) => {
    const ngModuleDef2 = getNgModuleDef(type2);
    if (ngModuleDef2) {
      verifySemanticsOfNgModuleDef(type2, false);
      return computeCombinedExports(type2);
    } else {
      return type2;
    }
  }));
}
function setScopeOnDeclaredComponents(moduleType, ngModule) {
  const declarations = flatten(ngModule.declarations || EMPTY_ARRAY);
  const transitiveScopes = transitiveScopesFor(moduleType);
  declarations.forEach((declaration) => {
    declaration = resolveForwardRef(declaration);
    if (declaration.hasOwnProperty(NG_COMP_DEF)) {
      const component = declaration;
      const componentDef = getComponentDef(component);
      patchComponentDefWithScope(componentDef, transitiveScopes);
    } else if (!declaration.hasOwnProperty(NG_DIR_DEF) && !declaration.hasOwnProperty(NG_PIPE_DEF)) {
      declaration.ngSelectorScope = moduleType;
    }
  });
}
function patchComponentDefWithScope(componentDef, transitiveScopes) {
  componentDef.directiveDefs = () => Array.from(transitiveScopes.compilation.directives).map((dir) => dir.hasOwnProperty(NG_COMP_DEF) ? getComponentDef(dir) : getDirectiveDef(dir)).filter((def) => !!def);
  componentDef.pipeDefs = () => Array.from(transitiveScopes.compilation.pipes).map((pipe) => getPipeDef$1(pipe));
  componentDef.schemas = transitiveScopes.schemas;
  componentDef.tView = null;
}
function transitiveScopesFor(type) {
  if (isNgModule(type)) {
    return transitiveScopesForNgModule(type);
  } else if (isStandalone(type)) {
    const directiveDef = getComponentDef(type) || getDirectiveDef(type);
    if (directiveDef !== null) {
      return {
        schemas: null,
        compilation: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set()
        },
        exported: {
          directives: /* @__PURE__ */ new Set([type]),
          pipes: /* @__PURE__ */ new Set()
        }
      };
    }
    const pipeDef = getPipeDef$1(type);
    if (pipeDef !== null) {
      return {
        schemas: null,
        compilation: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set()
        },
        exported: {
          directives: /* @__PURE__ */ new Set(),
          pipes: /* @__PURE__ */ new Set([type])
        }
      };
    }
  }
  throw new Error(`${type.name} does not have a module def (\u0275mod property)`);
}
function transitiveScopesForNgModule(moduleType) {
  const def = getNgModuleDef(moduleType, true);
  if (def.transitiveCompileScopes !== null) {
    return def.transitiveCompileScopes;
  }
  const scopes = {
    schemas: def.schemas || null,
    compilation: {
      directives: /* @__PURE__ */ new Set(),
      pipes: /* @__PURE__ */ new Set()
    },
    exported: {
      directives: /* @__PURE__ */ new Set(),
      pipes: /* @__PURE__ */ new Set()
    }
  };
  maybeUnwrapFn(def.imports).forEach((imported) => {
    const importedScope = transitiveScopesFor(imported);
    importedScope.exported.directives.forEach((entry) => scopes.compilation.directives.add(entry));
    importedScope.exported.pipes.forEach((entry) => scopes.compilation.pipes.add(entry));
  });
  maybeUnwrapFn(def.declarations).forEach((declared) => {
    const declaredWithDefs = declared;
    if (getPipeDef$1(declaredWithDefs)) {
      scopes.compilation.pipes.add(declared);
    } else {
      scopes.compilation.directives.add(declared);
    }
  });
  maybeUnwrapFn(def.exports).forEach((exported) => {
    const exportedType = exported;
    if (isNgModule(exportedType)) {
      const exportedScope = transitiveScopesFor(exportedType);
      exportedScope.exported.directives.forEach((entry) => {
        scopes.compilation.directives.add(entry);
        scopes.exported.directives.add(entry);
      });
      exportedScope.exported.pipes.forEach((entry) => {
        scopes.compilation.pipes.add(entry);
        scopes.exported.pipes.add(entry);
      });
    } else if (getPipeDef$1(exportedType)) {
      scopes.exported.pipes.add(exportedType);
    } else {
      scopes.exported.directives.add(exportedType);
    }
  });
  def.transitiveCompileScopes = scopes;
  return scopes;
}
function expandModuleWithProviders(value) {
  if (isModuleWithProviders(value)) {
    return value.ngModule;
  }
  return value;
}
var compilationDepth = 0;
function compileComponent(type, metadata) {
  (typeof ngDevMode === "undefined" || ngDevMode) && initNgDevMode();
  let ngComponentDef = null;
  maybeQueueResolutionOfComponentResources(type, metadata);
  addDirectiveFactoryDef(type, metadata);
  Object.defineProperty(type, NG_COMP_DEF, {
    get: () => {
      if (ngComponentDef === null) {
        const compiler = getCompilerFacade({ usage: 0, kind: "component", type });
        if (componentNeedsResolution(metadata)) {
          const error = [`Component '${type.name}' is not resolved:`];
          if (metadata.templateUrl) {
            error.push(` - templateUrl: ${metadata.templateUrl}`);
          }
          if (metadata.styleUrls && metadata.styleUrls.length) {
            error.push(` - styleUrls: ${JSON.stringify(metadata.styleUrls)}`);
          }
          error.push(`Did you run and wait for 'resolveComponentResources()'?`);
          throw new Error(error.join("\n"));
        }
        const options = getJitOptions();
        let preserveWhitespaces = metadata.preserveWhitespaces;
        if (preserveWhitespaces === void 0) {
          if (options !== null && options.preserveWhitespaces !== void 0) {
            preserveWhitespaces = options.preserveWhitespaces;
          } else {
            preserveWhitespaces = false;
          }
        }
        let encapsulation = metadata.encapsulation;
        if (encapsulation === void 0) {
          if (options !== null && options.defaultEncapsulation !== void 0) {
            encapsulation = options.defaultEncapsulation;
          } else {
            encapsulation = ViewEncapsulation$1.Emulated;
          }
        }
        const templateUrl = metadata.templateUrl || `ng:///${type.name}/template.html`;
        const meta = __spreadProps(__spreadValues({}, directiveMetadata(type, metadata)), {
          typeSourceSpan: compiler.createParseSourceSpan("Component", type.name, templateUrl),
          template: metadata.template || "",
          preserveWhitespaces,
          styles: metadata.styles || EMPTY_ARRAY,
          animations: metadata.animations,
          // JIT components are always compiled against an empty set of `declarations`. Instead, the
          // `directiveDefs` and `pipeDefs` are updated at a later point:
          //  * for NgModule-based components, they're set when the NgModule which declares the
          //    component resolves in the module scoping queue
          //  * for standalone components, they're set just below, after `compileComponent`.
          declarations: [],
          changeDetection: metadata.changeDetection,
          encapsulation,
          interpolation: metadata.interpolation,
          viewProviders: metadata.viewProviders || null
        });
        compilationDepth++;
        try {
          if (meta.usesInheritance) {
            addDirectiveDefToUndecoratedParents(type);
          }
          ngComponentDef = compiler.compileComponent(angularCoreEnv, templateUrl, meta);
          if (metadata.standalone) {
            const imports = flatten(metadata.imports || EMPTY_ARRAY);
            const { directiveDefs, pipeDefs } = getStandaloneDefFunctions(type, imports);
            ngComponentDef.directiveDefs = directiveDefs;
            ngComponentDef.pipeDefs = pipeDefs;
            ngComponentDef.dependencies = () => imports.map(resolveForwardRef);
          }
        } finally {
          compilationDepth--;
        }
        if (compilationDepth === 0) {
          flushModuleScopingQueueAsMuchAsPossible();
        }
        if (hasSelectorScope(type)) {
          const scopes = transitiveScopesFor(type.ngSelectorScope);
          patchComponentDefWithScope(ngComponentDef, scopes);
        }
        if (metadata.schemas) {
          if (metadata.standalone) {
            ngComponentDef.schemas = metadata.schemas;
          } else {
            throw new Error(`The 'schemas' was specified for the ${stringifyForError(type)} but is only valid on a component that is standalone.`);
          }
        } else if (metadata.standalone) {
          ngComponentDef.schemas = [];
        }
      }
      return ngComponentDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function getDependencyTypeForError(type) {
  if (getComponentDef(type))
    return "component";
  if (getDirectiveDef(type))
    return "directive";
  if (getPipeDef$1(type))
    return "pipe";
  return "type";
}
function verifyStandaloneImport(depType, importingType) {
  if (isForwardRef(depType)) {
    depType = resolveForwardRef(depType);
    if (!depType) {
      throw new Error(`Expected forwardRef function, imported from "${stringifyForError(importingType)}", to return a standalone entity or NgModule but got "${stringifyForError(depType) || depType}".`);
    }
  }
  if (getNgModuleDef(depType) == null) {
    const def = getComponentDef(depType) || getDirectiveDef(depType) || getPipeDef$1(depType);
    if (def != null) {
      if (!def.standalone) {
        throw new Error(`The "${stringifyForError(depType)}" ${getDependencyTypeForError(depType)}, imported from "${stringifyForError(importingType)}", is not standalone. Did you forget to add the standalone: true flag?`);
      }
    } else {
      if (isModuleWithProviders(depType)) {
        throw new Error(`A module with providers was imported from "${stringifyForError(importingType)}". Modules with providers are not supported in standalone components imports.`);
      } else {
        throw new Error(`The "${stringifyForError(depType)}" type, imported from "${stringifyForError(importingType)}", must be a standalone component / directive / pipe or an NgModule. Did you forget to add the required @Component / @Directive / @Pipe or @NgModule annotation?`);
      }
    }
  }
}
function getStandaloneDefFunctions(type, imports) {
  let cachedDirectiveDefs = null;
  let cachedPipeDefs = null;
  const directiveDefs = () => {
    if (cachedDirectiveDefs === null) {
      cachedDirectiveDefs = [getComponentDef(type)];
      const seen = /* @__PURE__ */ new Set([type]);
      for (const rawDep of imports) {
        ngDevMode && verifyStandaloneImport(rawDep, type);
        const dep = resolveForwardRef(rawDep);
        if (seen.has(dep)) {
          continue;
        }
        seen.add(dep);
        if (!!getNgModuleDef(dep)) {
          const scope = transitiveScopesFor(dep);
          for (const dir of scope.exported.directives) {
            const def = getComponentDef(dir) || getDirectiveDef(dir);
            if (def && !seen.has(dir)) {
              seen.add(dir);
              cachedDirectiveDefs.push(def);
            }
          }
        } else {
          const def = getComponentDef(dep) || getDirectiveDef(dep);
          if (def) {
            cachedDirectiveDefs.push(def);
          }
        }
      }
    }
    return cachedDirectiveDefs;
  };
  const pipeDefs = () => {
    if (cachedPipeDefs === null) {
      cachedPipeDefs = [];
      const seen = /* @__PURE__ */ new Set();
      for (const rawDep of imports) {
        const dep = resolveForwardRef(rawDep);
        if (seen.has(dep)) {
          continue;
        }
        seen.add(dep);
        if (!!getNgModuleDef(dep)) {
          const scope = transitiveScopesFor(dep);
          for (const pipe of scope.exported.pipes) {
            const def = getPipeDef$1(pipe);
            if (def && !seen.has(pipe)) {
              seen.add(pipe);
              cachedPipeDefs.push(def);
            }
          }
        } else {
          const def = getPipeDef$1(dep);
          if (def) {
            cachedPipeDefs.push(def);
          }
        }
      }
    }
    return cachedPipeDefs;
  };
  return {
    directiveDefs,
    pipeDefs
  };
}
function hasSelectorScope(component) {
  return component.ngSelectorScope !== void 0;
}
function compileDirective(type, directive) {
  let ngDirectiveDef = null;
  addDirectiveFactoryDef(type, directive || {});
  Object.defineProperty(type, NG_DIR_DEF, {
    get: () => {
      if (ngDirectiveDef === null) {
        const meta = getDirectiveMetadata(type, directive || {});
        const compiler = getCompilerFacade({ usage: 0, kind: "directive", type });
        ngDirectiveDef = compiler.compileDirective(angularCoreEnv, meta.sourceMapUrl, meta.metadata);
      }
      return ngDirectiveDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function getDirectiveMetadata(type, metadata) {
  const name = type && type.name;
  const sourceMapUrl = `ng:///${name}/\u0275dir.js`;
  const compiler = getCompilerFacade({ usage: 0, kind: "directive", type });
  const facade = directiveMetadata(type, metadata);
  facade.typeSourceSpan = compiler.createParseSourceSpan("Directive", name, sourceMapUrl);
  if (facade.usesInheritance) {
    addDirectiveDefToUndecoratedParents(type);
  }
  return { metadata: facade, sourceMapUrl };
}
function addDirectiveFactoryDef(type, metadata) {
  let ngFactoryDef = null;
  Object.defineProperty(type, NG_FACTORY_DEF, {
    get: () => {
      if (ngFactoryDef === null) {
        const meta = getDirectiveMetadata(type, metadata);
        const compiler = getCompilerFacade({ usage: 0, kind: "directive", type });
        ngFactoryDef = compiler.compileFactory(angularCoreEnv, `ng:///${type.name}/\u0275fac.js`, {
          name: meta.metadata.name,
          type: meta.metadata.type,
          typeArgumentCount: 0,
          deps: reflectDependencies(type),
          target: compiler.FactoryTarget.Directive
        });
      }
      return ngFactoryDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function extendsDirectlyFromObject(type) {
  return Object.getPrototypeOf(type.prototype) === Object.prototype;
}
function directiveMetadata(type, metadata) {
  var _a2;
  const reflect = getReflect();
  const propMetadata = reflect.ownPropMetadata(type);
  return {
    name: type.name,
    type,
    selector: metadata.selector !== void 0 ? metadata.selector : null,
    host: metadata.host || EMPTY_OBJ,
    propMetadata,
    inputs: metadata.inputs || EMPTY_ARRAY,
    outputs: metadata.outputs || EMPTY_ARRAY,
    queries: extractQueriesMetadata(type, propMetadata, isContentQuery),
    lifecycle: { usesOnChanges: reflect.hasLifecycleHook(type, "ngOnChanges") },
    typeSourceSpan: null,
    usesInheritance: !extendsDirectlyFromObject(type),
    exportAs: extractExportAs(metadata.exportAs),
    providers: metadata.providers || null,
    viewQueries: extractQueriesMetadata(type, propMetadata, isViewQuery),
    isStandalone: !!metadata.standalone,
    isSignal: !!metadata.signals,
    hostDirectives: ((_a2 = metadata.hostDirectives) == null ? void 0 : _a2.map((directive) => typeof directive === "function" ? { directive } : directive)) || null
  };
}
function addDirectiveDefToUndecoratedParents(type) {
  const objPrototype = Object.prototype;
  let parent = Object.getPrototypeOf(type.prototype).constructor;
  while (parent && parent !== objPrototype) {
    if (!getDirectiveDef(parent) && !getComponentDef(parent) && shouldAddAbstractDirective(parent)) {
      compileDirective(parent, null);
    }
    parent = Object.getPrototypeOf(parent);
  }
}
function convertToR3QueryPredicate(selector) {
  return typeof selector === "string" ? splitByComma(selector) : resolveForwardRef(selector);
}
function convertToR3QueryMetadata(propertyName, ann) {
  return {
    propertyName,
    predicate: convertToR3QueryPredicate(ann.selector),
    descendants: ann.descendants,
    first: ann.first,
    read: ann.read ? ann.read : null,
    static: !!ann.static,
    emitDistinctChangesOnly: !!ann.emitDistinctChangesOnly
  };
}
function extractQueriesMetadata(type, propMetadata, isQueryAnn) {
  const queriesMeta = [];
  for (const field in propMetadata) {
    if (propMetadata.hasOwnProperty(field)) {
      const annotations = propMetadata[field];
      annotations.forEach((ann) => {
        if (isQueryAnn(ann)) {
          if (!ann.selector) {
            throw new Error(`Can't construct a query for the property "${field}" of "${stringifyForError(type)}" since the query selector wasn't defined.`);
          }
          if (annotations.some(isInputAnnotation)) {
            throw new Error(`Cannot combine @Input decorators with query decorators`);
          }
          queriesMeta.push(convertToR3QueryMetadata(field, ann));
        }
      });
    }
  }
  return queriesMeta;
}
function extractExportAs(exportAs) {
  return exportAs === void 0 ? null : splitByComma(exportAs);
}
function isContentQuery(value) {
  const name = value.ngMetadataName;
  return name === "ContentChild" || name === "ContentChildren";
}
function isViewQuery(value) {
  const name = value.ngMetadataName;
  return name === "ViewChild" || name === "ViewChildren";
}
function isInputAnnotation(value) {
  return value.ngMetadataName === "Input";
}
function splitByComma(value) {
  return value.split(",").map((piece) => piece.trim());
}
var LIFECYCLE_HOOKS = [
  "ngOnChanges",
  "ngOnInit",
  "ngOnDestroy",
  "ngDoCheck",
  "ngAfterViewInit",
  "ngAfterViewChecked",
  "ngAfterContentInit",
  "ngAfterContentChecked"
];
function shouldAddAbstractDirective(type) {
  const reflect = getReflect();
  if (LIFECYCLE_HOOKS.some((hookName) => reflect.hasLifecycleHook(type, hookName))) {
    return true;
  }
  const propMetadata = reflect.propMetadata(type);
  for (const field in propMetadata) {
    const annotations = propMetadata[field];
    for (let i = 0; i < annotations.length; i++) {
      const current = annotations[i];
      const metadataName = current.ngMetadataName;
      if (isInputAnnotation(current) || isContentQuery(current) || isViewQuery(current) || metadataName === "Output" || metadataName === "HostBinding" || metadataName === "HostListener") {
        return true;
      }
    }
  }
  return false;
}
function compilePipe(type, meta) {
  let ngPipeDef = null;
  let ngFactoryDef = null;
  Object.defineProperty(type, NG_FACTORY_DEF, {
    get: () => {
      if (ngFactoryDef === null) {
        const metadata = getPipeMetadata(type, meta);
        const compiler = getCompilerFacade({ usage: 0, kind: "pipe", type: metadata.type });
        ngFactoryDef = compiler.compileFactory(angularCoreEnv, `ng:///${metadata.name}/\u0275fac.js`, {
          name: metadata.name,
          type: metadata.type,
          typeArgumentCount: 0,
          deps: reflectDependencies(type),
          target: compiler.FactoryTarget.Pipe
        });
      }
      return ngFactoryDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
  Object.defineProperty(type, NG_PIPE_DEF, {
    get: () => {
      if (ngPipeDef === null) {
        const metadata = getPipeMetadata(type, meta);
        const compiler = getCompilerFacade({ usage: 0, kind: "pipe", type: metadata.type });
        ngPipeDef = compiler.compilePipe(angularCoreEnv, `ng:///${metadata.name}/\u0275pipe.js`, metadata);
      }
      return ngPipeDef;
    },
    // Make the property configurable in dev mode to allow overriding in tests
    configurable: !!ngDevMode
  });
}
function getPipeMetadata(type, meta) {
  return {
    type,
    name: type.name,
    pipeName: meta.name,
    pure: meta.pure !== void 0 ? meta.pure : true,
    isStandalone: !!meta.standalone
  };
}
var Directive = makeDecorator("Directive", (dir = {}) => dir, void 0, void 0, (type, meta) => compileDirective(type, meta));
var Component = makeDecorator("Component", (c = {}) => __spreadValues({ changeDetection: ChangeDetectionStrategy.Default }, c), Directive, void 0, (type, meta) => compileComponent(type, meta));
var Pipe = makeDecorator("Pipe", (p) => __spreadValues({ pure: true }, p), void 0, void 0, (type, meta) => compilePipe(type, meta));
var Input = makePropDecorator("Input", (arg) => {
  if (!arg) {
    return {};
  }
  return typeof arg === "string" ? { alias: arg } : arg;
});
var Output = makePropDecorator("Output", (alias) => ({ alias }));
var HostBinding = makePropDecorator("HostBinding", (hostPropertyName) => ({ hostPropertyName }));
var HostListener = makePropDecorator("HostListener", (eventName, args) => ({ eventName, args }));
var NgModule = makeDecorator(
  "NgModule",
  (ngModule) => ngModule,
  void 0,
  void 0,
  /**
   * Decorator that marks the following class as an NgModule, and supplies
   * configuration metadata for it.
   *
   * * The `declarations` option configures the compiler
   * with information about what belongs to the NgModule.
   * * The `providers` options configures the NgModule's injector to provide
   * dependencies the NgModule members.
   * * The `imports` and `exports` options bring in members from other modules, and make
   * this module's members available to others.
   */
  (type, meta) => compileNgModule(type, meta)
);
var APP_INITIALIZER = new InjectionToken("Application Initializer");
var _ApplicationInitStatus = class {
  constructor() {
    var _a2;
    this.initialized = false;
    this.done = false;
    this.donePromise = new Promise((res, rej) => {
      this.resolve = res;
      this.reject = rej;
    });
    this.appInits = (_a2 = inject(APP_INITIALIZER, { optional: true })) != null ? _a2 : [];
    if ((typeof ngDevMode === "undefined" || ngDevMode) && !Array.isArray(this.appInits)) {
      throw new RuntimeError(-209, `Unexpected type of the \`APP_INITIALIZER\` token value (expected an array, but got ${typeof this.appInits}). Please check that the \`APP_INITIALIZER\` token is configured as a \`multi: true\` provider.`);
    }
  }
  /** @internal */
  runInitializers() {
    if (this.initialized) {
      return;
    }
    const asyncInitPromises = [];
    for (const appInits of this.appInits) {
      const initResult = appInits();
      if (isPromise(initResult)) {
        asyncInitPromises.push(initResult);
      } else if (isSubscribable(initResult)) {
        const observableAsPromise = new Promise((resolve, reject) => {
          initResult.subscribe({ complete: resolve, error: reject });
        });
        asyncInitPromises.push(observableAsPromise);
      }
    }
    const complete = () => {
      this.done = true;
      this.resolve();
    };
    Promise.all(asyncInitPromises).then(() => {
      complete();
    }).catch((e) => {
      this.reject(e);
    });
    if (asyncInitPromises.length === 0) {
      complete();
    }
    this.initialized = true;
  }
};
var ApplicationInitStatus = _ApplicationInitStatus;
(() => {
  _ApplicationInitStatus.\u0275fac = function ApplicationInitStatus_Factory(t) {
    return new (t || _ApplicationInitStatus)();
  };
})();
(() => {
  _ApplicationInitStatus.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationInitStatus, factory: _ApplicationInitStatus.\u0275fac, providedIn: "root" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationInitStatus, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], function() {
    return [];
  }, null);
})();
var _Console = class {
  log(message) {
    console.log(message);
  }
  // Note: for reporting errors use `DOM.logError()` as it is platform specific
  warn(message) {
    console.warn(message);
  }
};
var Console = _Console;
(() => {
  _Console.\u0275fac = function Console_Factory(t) {
    return new (t || _Console)();
  };
})();
(() => {
  _Console.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Console, factory: _Console.\u0275fac, providedIn: "platform" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Console, [{
    type: Injectable,
    args: [{ providedIn: "platform" }]
  }], null, null);
})();
function getGlobalLocale() {
  if (typeof ngI18nClosureMode !== "undefined" && ngI18nClosureMode && typeof goog !== "undefined" && goog.LOCALE !== "en") {
    return goog.LOCALE;
  } else {
    return typeof $localize !== "undefined" && $localize.locale || DEFAULT_LOCALE_ID;
  }
}
var LOCALE_ID = new InjectionToken("LocaleId", {
  providedIn: "root",
  factory: () => inject(LOCALE_ID, InjectFlags.Optional | InjectFlags.SkipSelf) || getGlobalLocale()
});
var DEFAULT_CURRENCY_CODE = new InjectionToken("DefaultCurrencyCode", {
  providedIn: "root",
  factory: () => USD_CURRENCY_CODE
});
var TRANSLATIONS = new InjectionToken("Translations");
var TRANSLATIONS_FORMAT = new InjectionToken("TranslationsFormat");
var MissingTranslationStrategy;
(function(MissingTranslationStrategy2) {
  MissingTranslationStrategy2[MissingTranslationStrategy2["Error"] = 0] = "Error";
  MissingTranslationStrategy2[MissingTranslationStrategy2["Warning"] = 1] = "Warning";
  MissingTranslationStrategy2[MissingTranslationStrategy2["Ignore"] = 2] = "Ignore";
})(MissingTranslationStrategy || (MissingTranslationStrategy = {}));
var _InitialRenderPendingTasks = class {
  constructor() {
    this.taskId = 0;
    this.pendingTasks = /* @__PURE__ */ new Set();
    this.hasPendingTasks = new import_rxjs.BehaviorSubject(false);
  }
  add() {
    this.hasPendingTasks.next(true);
    const taskId = this.taskId++;
    this.pendingTasks.add(taskId);
    return taskId;
  }
  remove(taskId) {
    this.pendingTasks.delete(taskId);
    if (this.pendingTasks.size === 0) {
      this.hasPendingTasks.next(false);
    }
  }
  ngOnDestroy() {
    this.pendingTasks.clear();
    this.hasPendingTasks.next(false);
  }
};
var InitialRenderPendingTasks = _InitialRenderPendingTasks;
(() => {
  _InitialRenderPendingTasks.\u0275fac = function InitialRenderPendingTasks_Factory(t) {
    return new (t || _InitialRenderPendingTasks)();
  };
})();
(() => {
  _InitialRenderPendingTasks.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _InitialRenderPendingTasks, factory: _InitialRenderPendingTasks.\u0275fac, providedIn: "root" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(InitialRenderPendingTasks, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var ModuleWithComponentFactories = class {
  constructor(ngModuleFactory, componentFactories) {
    this.ngModuleFactory = ngModuleFactory;
    this.componentFactories = componentFactories;
  }
};
var _Compiler = class {
  /**
   * Compiles the given NgModule and all of its components. All templates of the components
   * have to be inlined.
   */
  compileModuleSync(moduleType) {
    return new NgModuleFactory(moduleType);
  }
  /**
   * Compiles the given NgModule and all of its components
   */
  compileModuleAsync(moduleType) {
    return Promise.resolve(this.compileModuleSync(moduleType));
  }
  /**
   * Same as {@link #compileModuleSync} but also creates ComponentFactories for all components.
   */
  compileModuleAndAllComponentsSync(moduleType) {
    const ngModuleFactory = this.compileModuleSync(moduleType);
    const moduleDef = getNgModuleDef(moduleType);
    const componentFactories = maybeUnwrapFn(moduleDef.declarations).reduce((factories, declaration) => {
      const componentDef = getComponentDef(declaration);
      componentDef && factories.push(new ComponentFactory(componentDef));
      return factories;
    }, []);
    return new ModuleWithComponentFactories(ngModuleFactory, componentFactories);
  }
  /**
   * Same as {@link #compileModuleAsync} but also creates ComponentFactories for all components.
   */
  compileModuleAndAllComponentsAsync(moduleType) {
    return Promise.resolve(this.compileModuleAndAllComponentsSync(moduleType));
  }
  /**
   * Clears all caches.
   */
  clearCache() {
  }
  /**
   * Clears the cache for the given component/ngModule.
   */
  clearCacheFor(type) {
  }
  /**
   * Returns the id for a given NgModule, if one is defined and known to the compiler.
   */
  getModuleId(moduleType) {
    return void 0;
  }
};
var Compiler = _Compiler;
(() => {
  _Compiler.\u0275fac = function Compiler_Factory(t) {
    return new (t || _Compiler)();
  };
})();
(() => {
  _Compiler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Compiler, factory: _Compiler.\u0275fac, providedIn: "root" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Compiler, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var COMPILER_OPTIONS = new InjectionToken("compilerOptions");
function applyChanges(component) {
  ngDevMode && assertDefined(component, "component");
  markViewDirty(getComponentViewByInstance(component));
  getRootComponents(component).forEach((rootComponent) => detectChanges(rootComponent));
}
var GLOBAL_PUBLISH_EXPANDO_KEY = "ng";
var _published = false;
function publishDefaultGlobalUtils$1() {
  if (!_published) {
    _published = true;
    publishGlobalUtil("\u0275setProfiler", setProfiler);
    publishGlobalUtil("getDirectiveMetadata", getDirectiveMetadata$1);
    publishGlobalUtil("getComponent", getComponent);
    publishGlobalUtil("getContext", getContext);
    publishGlobalUtil("getListeners", getListeners);
    publishGlobalUtil("getOwningComponent", getOwningComponent);
    publishGlobalUtil("getHostElement", getHostElement);
    publishGlobalUtil("getInjector", getInjector);
    publishGlobalUtil("getRootComponents", getRootComponents);
    publishGlobalUtil("getDirectives", getDirectives);
    publishGlobalUtil("applyChanges", applyChanges);
  }
}
function publishGlobalUtil(name, fn) {
  if (typeof COMPILED === "undefined" || !COMPILED) {
    const w = _global;
    ngDevMode && assertDefined(fn, "function not defined");
    if (w) {
      let container = w[GLOBAL_PUBLISH_EXPANDO_KEY];
      if (!container) {
        container = w[GLOBAL_PUBLISH_EXPANDO_KEY] = {};
      }
      container[name] = fn;
    }
  }
}
var promise = (() => Promise.resolve(0))();
function scheduleMicroTask(fn) {
  if (typeof Zone === "undefined") {
    promise.then(() => {
      fn && fn.apply(null, null);
    });
  } else {
    Zone.current.scheduleMicroTask("scheduleMicrotask", fn);
  }
}
function noop(...args) {
}
function getNativeRequestAnimationFrame() {
  let nativeRequestAnimationFrame = _global["requestAnimationFrame"];
  let nativeCancelAnimationFrame = _global["cancelAnimationFrame"];
  if (typeof Zone !== "undefined" && nativeRequestAnimationFrame && nativeCancelAnimationFrame) {
    const unpatchedRequestAnimationFrame = nativeRequestAnimationFrame[Zone.__symbol__("OriginalDelegate")];
    if (unpatchedRequestAnimationFrame) {
      nativeRequestAnimationFrame = unpatchedRequestAnimationFrame;
    }
    const unpatchedCancelAnimationFrame = nativeCancelAnimationFrame[Zone.__symbol__("OriginalDelegate")];
    if (unpatchedCancelAnimationFrame) {
      nativeCancelAnimationFrame = unpatchedCancelAnimationFrame;
    }
  }
  return { nativeRequestAnimationFrame, nativeCancelAnimationFrame };
}
var AsyncStackTaggingZoneSpec = class {
  constructor(namePrefix, consoleAsyncStackTaggingImpl = console) {
    var _a2;
    this.name = "asyncStackTagging for " + namePrefix;
    this.createTask = (_a2 = consoleAsyncStackTaggingImpl == null ? void 0 : consoleAsyncStackTaggingImpl.createTask) != null ? _a2 : () => null;
  }
  onScheduleTask(delegate, _current, target, task) {
    task.consoleTask = this.createTask(`Zone - ${task.source || task.type}`);
    return delegate.scheduleTask(target, task);
  }
  onInvokeTask(delegate, _currentZone, targetZone, task, applyThis, applyArgs) {
    let ret;
    if (task.consoleTask) {
      ret = task.consoleTask.run(() => delegate.invokeTask(targetZone, task, applyThis, applyArgs));
    } else {
      ret = delegate.invokeTask(targetZone, task, applyThis, applyArgs);
    }
    return ret;
  }
};
var NgZone = class {
  constructor({ enableLongStackTrace = false, shouldCoalesceEventChangeDetection = false, shouldCoalesceRunChangeDetection = false }) {
    this.hasPendingMacrotasks = false;
    this.hasPendingMicrotasks = false;
    this.isStable = true;
    this.onUnstable = new EventEmitter(false);
    this.onMicrotaskEmpty = new EventEmitter(false);
    this.onStable = new EventEmitter(false);
    this.onError = new EventEmitter(false);
    if (typeof Zone == "undefined") {
      throw new RuntimeError(908, ngDevMode && `In this configuration Angular requires Zone.js`);
    }
    Zone.assertZonePatched();
    const self2 = this;
    self2._nesting = 0;
    self2._outer = self2._inner = Zone.current;
    if (ngDevMode) {
      self2._inner = self2._inner.fork(new AsyncStackTaggingZoneSpec("Angular"));
    }
    if (Zone["TaskTrackingZoneSpec"]) {
      self2._inner = self2._inner.fork(new Zone["TaskTrackingZoneSpec"]());
    }
    if (enableLongStackTrace && Zone["longStackTraceZoneSpec"]) {
      self2._inner = self2._inner.fork(Zone["longStackTraceZoneSpec"]);
    }
    self2.shouldCoalesceEventChangeDetection = !shouldCoalesceRunChangeDetection && shouldCoalesceEventChangeDetection;
    self2.shouldCoalesceRunChangeDetection = shouldCoalesceRunChangeDetection;
    self2.lastRequestAnimationFrameId = -1;
    self2.nativeRequestAnimationFrame = getNativeRequestAnimationFrame().nativeRequestAnimationFrame;
    forkInnerZoneWithAngularBehavior(self2);
  }
  static isInAngularZone() {
    return typeof Zone !== "undefined" && Zone.current.get("isAngularZone") === true;
  }
  static assertInAngularZone() {
    if (!NgZone.isInAngularZone()) {
      throw new RuntimeError(909, ngDevMode && "Expected to be in Angular Zone, but it is not!");
    }
  }
  static assertNotInAngularZone() {
    if (NgZone.isInAngularZone()) {
      throw new RuntimeError(909, ngDevMode && "Expected to not be in Angular Zone, but it is!");
    }
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone and returns value returned by
   * the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  run(fn, applyThis, applyArgs) {
    return this._inner.run(fn, applyThis, applyArgs);
  }
  /**
   * Executes the `fn` function synchronously within the Angular zone as a task and returns value
   * returned by the function.
   *
   * Running functions via `run` allows you to reenter Angular zone from a task that was executed
   * outside of the Angular zone (typically started via {@link #runOutsideAngular}).
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * within the Angular zone.
   *
   * If a synchronous error happens it will be rethrown and not reported via `onError`.
   */
  runTask(fn, applyThis, applyArgs, name) {
    const zone = this._inner;
    const task = zone.scheduleEventTask("NgZoneEvent: " + name, fn, EMPTY_PAYLOAD, noop, noop);
    try {
      return zone.runTask(task, applyThis, applyArgs);
    } finally {
      zone.cancelTask(task);
    }
  }
  /**
   * Same as `run`, except that synchronous errors are caught and forwarded via `onError` and not
   * rethrown.
   */
  runGuarded(fn, applyThis, applyArgs) {
    return this._inner.runGuarded(fn, applyThis, applyArgs);
  }
  /**
   * Executes the `fn` function synchronously in Angular's parent zone and returns value returned by
   * the function.
   *
   * Running functions via {@link #runOutsideAngular} allows you to escape Angular's zone and do
   * work that
   * doesn't trigger Angular change-detection or is subject to Angular's error handling.
   *
   * Any future tasks or microtasks scheduled from within this function will continue executing from
   * outside of the Angular zone.
   *
   * Use {@link #run} to reenter the Angular zone and do work that updates the application model.
   */
  runOutsideAngular(fn) {
    return this._outer.run(fn);
  }
};
var EMPTY_PAYLOAD = {};
function checkStable(zone) {
  if (zone._nesting == 0 && !zone.hasPendingMicrotasks && !zone.isStable) {
    try {
      zone._nesting++;
      zone.onMicrotaskEmpty.emit(null);
    } finally {
      zone._nesting--;
      if (!zone.hasPendingMicrotasks) {
        try {
          zone.runOutsideAngular(() => zone.onStable.emit(null));
        } finally {
          zone.isStable = true;
        }
      }
    }
  }
}
function delayChangeDetectionForEvents(zone) {
  if (zone.isCheckStableRunning || zone.lastRequestAnimationFrameId !== -1) {
    return;
  }
  zone.lastRequestAnimationFrameId = zone.nativeRequestAnimationFrame.call(_global, () => {
    if (!zone.fakeTopEventTask) {
      zone.fakeTopEventTask = Zone.root.scheduleEventTask("fakeTopEventTask", () => {
        zone.lastRequestAnimationFrameId = -1;
        updateMicroTaskStatus(zone);
        zone.isCheckStableRunning = true;
        checkStable(zone);
        zone.isCheckStableRunning = false;
      }, void 0, () => {
      }, () => {
      });
    }
    zone.fakeTopEventTask.invoke();
  });
  updateMicroTaskStatus(zone);
}
function forkInnerZoneWithAngularBehavior(zone) {
  const delayChangeDetectionForEventsDelegate = () => {
    delayChangeDetectionForEvents(zone);
  };
  zone._inner = zone._inner.fork({
    name: "angular",
    properties: { "isAngularZone": true },
    onInvokeTask: (delegate, current, target, task, applyThis, applyArgs) => {
      try {
        onEnter(zone);
        return delegate.invokeTask(target, task, applyThis, applyArgs);
      } finally {
        if (zone.shouldCoalesceEventChangeDetection && task.type === "eventTask" || zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onInvoke: (delegate, current, target, callback, applyThis, applyArgs, source) => {
      try {
        onEnter(zone);
        return delegate.invoke(target, callback, applyThis, applyArgs, source);
      } finally {
        if (zone.shouldCoalesceRunChangeDetection) {
          delayChangeDetectionForEventsDelegate();
        }
        onLeave(zone);
      }
    },
    onHasTask: (delegate, current, target, hasTaskState) => {
      delegate.hasTask(target, hasTaskState);
      if (current === target) {
        if (hasTaskState.change == "microTask") {
          zone._hasPendingMicrotasks = hasTaskState.microTask;
          updateMicroTaskStatus(zone);
          checkStable(zone);
        } else if (hasTaskState.change == "macroTask") {
          zone.hasPendingMacrotasks = hasTaskState.macroTask;
        }
      }
    },
    onHandleError: (delegate, current, target, error) => {
      delegate.handleError(target, error);
      zone.runOutsideAngular(() => zone.onError.emit(error));
      return false;
    }
  });
}
function updateMicroTaskStatus(zone) {
  if (zone._hasPendingMicrotasks || (zone.shouldCoalesceEventChangeDetection || zone.shouldCoalesceRunChangeDetection) && zone.lastRequestAnimationFrameId !== -1) {
    zone.hasPendingMicrotasks = true;
  } else {
    zone.hasPendingMicrotasks = false;
  }
}
function onEnter(zone) {
  zone._nesting++;
  if (zone.isStable) {
    zone.isStable = false;
    zone.onUnstable.emit(null);
  }
}
function onLeave(zone) {
  zone._nesting--;
  checkStable(zone);
}
var NoopNgZone = class {
  constructor() {
    this.hasPendingMicrotasks = false;
    this.hasPendingMacrotasks = false;
    this.isStable = true;
    this.onUnstable = new EventEmitter();
    this.onMicrotaskEmpty = new EventEmitter();
    this.onStable = new EventEmitter();
    this.onError = new EventEmitter();
  }
  run(fn, applyThis, applyArgs) {
    return fn.apply(applyThis, applyArgs);
  }
  runGuarded(fn, applyThis, applyArgs) {
    return fn.apply(applyThis, applyArgs);
  }
  runOutsideAngular(fn) {
    return fn();
  }
  runTask(fn, applyThis, applyArgs, name) {
    return fn.apply(applyThis, applyArgs);
  }
};
var ZONE_IS_STABLE_OBSERVABLE = new InjectionToken(ngDevMode ? "isStable Observable" : "", {
  providedIn: "root",
  // TODO(atscott): Replace this with a suitable default like `new
  // BehaviorSubject(true).asObservable`. Again, long term this won't exist on ApplicationRef at
  // all but until we can remove it, we need a default value zoneless.
  factory: isStableFactory
});
function isStableFactory() {
  const zone = inject(NgZone);
  let _stable = true;
  const isCurrentlyStable = new import_rxjs.Observable((observer) => {
    _stable = zone.isStable && !zone.hasPendingMacrotasks && !zone.hasPendingMicrotasks;
    zone.runOutsideAngular(() => {
      observer.next(_stable);
      observer.complete();
    });
  });
  const isStable = new import_rxjs.Observable((observer) => {
    let stableSub;
    zone.runOutsideAngular(() => {
      stableSub = zone.onStable.subscribe(() => {
        NgZone.assertNotInAngularZone();
        scheduleMicroTask(() => {
          if (!_stable && !zone.hasPendingMacrotasks && !zone.hasPendingMicrotasks) {
            _stable = true;
            observer.next(true);
          }
        });
      });
    });
    const unstableSub = zone.onUnstable.subscribe(() => {
      NgZone.assertInAngularZone();
      if (_stable) {
        _stable = false;
        zone.runOutsideAngular(() => {
          observer.next(false);
        });
      }
    });
    return () => {
      stableSub.unsubscribe();
      unstableSub.unsubscribe();
    };
  });
  return (0, import_rxjs.merge)(isCurrentlyStable, isStable.pipe((0, import_operators.share)()));
}
var TESTABILITY = new InjectionToken("");
var TESTABILITY_GETTER = new InjectionToken("");
var _Testability = class {
  constructor(_ngZone, registry, testabilityGetter) {
    this._ngZone = _ngZone;
    this.registry = registry;
    this._pendingCount = 0;
    this._isZoneStable = true;
    this._didWork = false;
    this._callbacks = [];
    this.taskTrackingZone = null;
    if (!_testabilityGetter) {
      setTestabilityGetter(testabilityGetter);
      testabilityGetter.addToWindow(registry);
    }
    this._watchAngularEvents();
    _ngZone.run(() => {
      this.taskTrackingZone = typeof Zone == "undefined" ? null : Zone.current.get("TaskTrackingZone");
    });
  }
  _watchAngularEvents() {
    this._ngZone.onUnstable.subscribe({
      next: () => {
        this._didWork = true;
        this._isZoneStable = false;
      }
    });
    this._ngZone.runOutsideAngular(() => {
      this._ngZone.onStable.subscribe({
        next: () => {
          NgZone.assertNotInAngularZone();
          scheduleMicroTask(() => {
            this._isZoneStable = true;
            this._runCallbacksIfReady();
          });
        }
      });
    });
  }
  /**
   * Increases the number of pending request
   * @deprecated pending requests are now tracked with zones.
   */
  increasePendingRequestCount() {
    this._pendingCount += 1;
    this._didWork = true;
    return this._pendingCount;
  }
  /**
   * Decreases the number of pending request
   * @deprecated pending requests are now tracked with zones
   */
  decreasePendingRequestCount() {
    this._pendingCount -= 1;
    if (this._pendingCount < 0) {
      throw new Error("pending async requests below zero");
    }
    this._runCallbacksIfReady();
    return this._pendingCount;
  }
  /**
   * Whether an associated application is stable
   */
  isStable() {
    return this._isZoneStable && this._pendingCount === 0 && !this._ngZone.hasPendingMacrotasks;
  }
  _runCallbacksIfReady() {
    if (this.isStable()) {
      scheduleMicroTask(() => {
        while (this._callbacks.length !== 0) {
          let cb = this._callbacks.pop();
          clearTimeout(cb.timeoutId);
          cb.doneCb(this._didWork);
        }
        this._didWork = false;
      });
    } else {
      let pending = this.getPendingTasks();
      this._callbacks = this._callbacks.filter((cb) => {
        if (cb.updateCb && cb.updateCb(pending)) {
          clearTimeout(cb.timeoutId);
          return false;
        }
        return true;
      });
      this._didWork = true;
    }
  }
  getPendingTasks() {
    if (!this.taskTrackingZone) {
      return [];
    }
    return this.taskTrackingZone.macroTasks.map((t) => {
      return {
        source: t.source,
        // From TaskTrackingZone:
        // https://github.com/angular/zone.js/blob/master/lib/zone-spec/task-tracking.ts#L40
        creationLocation: t.creationLocation,
        data: t.data
      };
    });
  }
  addCallback(cb, timeout, updateCb) {
    let timeoutId = -1;
    if (timeout && timeout > 0) {
      timeoutId = setTimeout(() => {
        this._callbacks = this._callbacks.filter((cb2) => cb2.timeoutId !== timeoutId);
        cb(this._didWork, this.getPendingTasks());
      }, timeout);
    }
    this._callbacks.push({ doneCb: cb, timeoutId, updateCb });
  }
  /**
   * Wait for the application to be stable with a timeout. If the timeout is reached before that
   * happens, the callback receives a list of the macro tasks that were pending, otherwise null.
   *
   * @param doneCb The callback to invoke when Angular is stable or the timeout expires
   *    whichever comes first.
   * @param timeout Optional. The maximum time to wait for Angular to become stable. If not
   *    specified, whenStable() will wait forever.
   * @param updateCb Optional. If specified, this callback will be invoked whenever the set of
   *    pending macrotasks changes. If this callback returns true doneCb will not be invoked
   *    and no further updates will be issued.
   */
  whenStable(doneCb, timeout, updateCb) {
    if (updateCb && !this.taskTrackingZone) {
      throw new Error('Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/plugins/task-tracking" loaded?');
    }
    this.addCallback(doneCb, timeout, updateCb);
    this._runCallbacksIfReady();
  }
  /**
   * Get the number of pending requests
   * @deprecated pending requests are now tracked with zones
   */
  getPendingRequestCount() {
    return this._pendingCount;
  }
  /**
   * Registers an application with a testability hook so that it can be tracked.
   * @param token token of application, root element
   *
   * @internal
   */
  registerApplication(token) {
    this.registry.registerApplication(token, this);
  }
  /**
   * Unregisters an application.
   * @param token token of application, root element
   *
   * @internal
   */
  unregisterApplication(token) {
    this.registry.unregisterApplication(token);
  }
  /**
   * Find providers by name
   * @param using The root element to search from
   * @param provider The name of binding variable
   * @param exactMatch Whether using exactMatch
   */
  findProviders(using, provider, exactMatch) {
    return [];
  }
};
var Testability = _Testability;
(() => {
  _Testability.\u0275fac = function Testability_Factory(t) {
    return new (t || _Testability)(\u0275\u0275inject(NgZone), \u0275\u0275inject(TestabilityRegistry), \u0275\u0275inject(TESTABILITY_GETTER));
  };
})();
(() => {
  _Testability.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _Testability, factory: _Testability.\u0275fac });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Testability, [{
    type: Injectable
  }], function() {
    return [{ type: NgZone }, { type: TestabilityRegistry }, { type: void 0, decorators: [{
      type: Inject,
      args: [TESTABILITY_GETTER]
    }] }];
  }, null);
})();
var _TestabilityRegistry = class {
  constructor() {
    this._applications = /* @__PURE__ */ new Map();
  }
  /**
   * Registers an application with a testability hook so that it can be tracked
   * @param token token of application, root element
   * @param testability Testability hook
   */
  registerApplication(token, testability) {
    this._applications.set(token, testability);
  }
  /**
   * Unregisters an application.
   * @param token token of application, root element
   */
  unregisterApplication(token) {
    this._applications.delete(token);
  }
  /**
   * Unregisters all applications
   */
  unregisterAllApplications() {
    this._applications.clear();
  }
  /**
   * Get a testability hook associated with the application
   * @param elem root element
   */
  getTestability(elem) {
    return this._applications.get(elem) || null;
  }
  /**
   * Get all registered testabilities
   */
  getAllTestabilities() {
    return Array.from(this._applications.values());
  }
  /**
   * Get all registered applications(root elements)
   */
  getAllRootElements() {
    return Array.from(this._applications.keys());
  }
  /**
   * Find testability of a node in the Tree
   * @param elem node
   * @param findInAncestors whether finding testability in ancestors if testability was not found in
   * current node
   */
  findTestabilityInTree(elem, findInAncestors = true) {
    var _a2;
    return (_a2 = _testabilityGetter == null ? void 0 : _testabilityGetter.findTestabilityInTree(this, elem, findInAncestors)) != null ? _a2 : null;
  }
};
var TestabilityRegistry = _TestabilityRegistry;
(() => {
  _TestabilityRegistry.\u0275fac = function TestabilityRegistry_Factory(t) {
    return new (t || _TestabilityRegistry)();
  };
})();
(() => {
  _TestabilityRegistry.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _TestabilityRegistry, factory: _TestabilityRegistry.\u0275fac, providedIn: "platform" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TestabilityRegistry, [{
    type: Injectable,
    args: [{ providedIn: "platform" }]
  }], null, null);
})();
function setTestabilityGetter(getter) {
  _testabilityGetter = getter;
}
var _testabilityGetter;
var _platformInjector = null;
var ALLOW_MULTIPLE_PLATFORMS = new InjectionToken("AllowMultipleToken");
var PLATFORM_DESTROY_LISTENERS = new InjectionToken("PlatformDestroyListeners");
var APP_BOOTSTRAP_LISTENER = new InjectionToken("appBootstrapListener");
function compileNgModuleFactory(injector, options, moduleType) {
  ngDevMode && assertNgModuleType(moduleType);
  const moduleFactory = new NgModuleFactory(moduleType);
  if (typeof ngJitMode !== "undefined" && !ngJitMode) {
    return Promise.resolve(moduleFactory);
  }
  const compilerOptions = injector.get(COMPILER_OPTIONS, []).concat(options);
  setJitOptions({
    defaultEncapsulation: _lastDefined(compilerOptions.map((opts) => opts.defaultEncapsulation)),
    preserveWhitespaces: _lastDefined(compilerOptions.map((opts) => opts.preserveWhitespaces))
  });
  if (isComponentResourceResolutionQueueEmpty()) {
    return Promise.resolve(moduleFactory);
  }
  const compilerProviders = compilerOptions.flatMap((option) => {
    var _a2;
    return (_a2 = option.providers) != null ? _a2 : [];
  });
  if (compilerProviders.length === 0) {
    return Promise.resolve(moduleFactory);
  }
  const compiler = getCompilerFacade({
    usage: 0,
    kind: "NgModule",
    type: moduleType
  });
  const compilerInjector = Injector.create({ providers: compilerProviders });
  const resourceLoader = compilerInjector.get(compiler.ResourceLoader);
  return resolveComponentResources((url) => Promise.resolve(resourceLoader.get(url))).then(() => moduleFactory);
}
function publishDefaultGlobalUtils() {
  ngDevMode && publishDefaultGlobalUtils$1();
}
function publishSignalConfiguration() {
  setThrowInvalidWriteToSignalError(() => {
    throw new RuntimeError(600, ngDevMode && "Writing to signals is not allowed in a `computed` or an `effect` by default. Use `allowSignalWrites` in the `CreateEffectOptions` to enable this inside effects.");
  });
}
function isBoundToModule(cf) {
  return cf.isBoundToModule;
}
function createPlatform(injector) {
  if (_platformInjector && !_platformInjector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
    throw new RuntimeError(400, ngDevMode && "There can be only one platform. Destroy the previous one to create a new one.");
  }
  publishDefaultGlobalUtils();
  publishSignalConfiguration();
  _platformInjector = injector;
  const platform = injector.get(PlatformRef);
  runPlatformInitializers(injector);
  return platform;
}
function runPlatformInitializers(injector) {
  const inits = injector.get(PLATFORM_INITIALIZER, null);
  inits == null ? void 0 : inits.forEach((init) => init());
}
function createPlatformFactory(parentPlatformFactory, name, providers = []) {
  const desc = `Platform: ${name}`;
  const marker = new InjectionToken(desc);
  return (extraProviders = []) => {
    let platform = getPlatform();
    if (!platform || platform.injector.get(ALLOW_MULTIPLE_PLATFORMS, false)) {
      const platformProviders = [
        ...providers,
        ...extraProviders,
        { provide: marker, useValue: true }
      ];
      if (parentPlatformFactory) {
        parentPlatformFactory(platformProviders);
      } else {
        createPlatform(createPlatformInjector(platformProviders, desc));
      }
    }
    return assertPlatform(marker);
  };
}
function assertPlatform(requiredToken) {
  const platform = getPlatform();
  if (!platform) {
    throw new RuntimeError(401, ngDevMode && "No platform exists!");
  }
  if ((typeof ngDevMode === "undefined" || ngDevMode) && !platform.injector.get(requiredToken, null)) {
    throw new RuntimeError(400, "A platform with a different configuration has been created. Please destroy it first.");
  }
  return platform;
}
function createPlatformInjector(providers = [], name) {
  return Injector.create({
    name,
    providers: [
      { provide: INJECTOR_SCOPE, useValue: "platform" },
      { provide: PLATFORM_DESTROY_LISTENERS, useValue: /* @__PURE__ */ new Set([() => _platformInjector = null]) },
      ...providers
    ]
  });
}
function getPlatform() {
  var _a2;
  return (_a2 = _platformInjector == null ? void 0 : _platformInjector.get(PlatformRef)) != null ? _a2 : null;
}
var _PlatformRef = class {
  /** @internal */
  constructor(_injector) {
    this._injector = _injector;
    this._modules = [];
    this._destroyListeners = [];
    this._destroyed = false;
  }
  /**
   * Creates an instance of an `@NgModule` for the given platform.
   *
   * @deprecated Passing NgModule factories as the `PlatformRef.bootstrapModuleFactory` function
   *     argument is deprecated. Use the `PlatformRef.bootstrapModule` API instead.
   */
  bootstrapModuleFactory(moduleFactory, options) {
    const ngZone = getNgZone(options == null ? void 0 : options.ngZone, getNgZoneOptions({
      eventCoalescing: options == null ? void 0 : options.ngZoneEventCoalescing,
      runCoalescing: options == null ? void 0 : options.ngZoneRunCoalescing
    }));
    return ngZone.run(() => {
      const moduleRef = createNgModuleRefWithProviders(moduleFactory.moduleType, this.injector, internalProvideZoneChangeDetection(() => ngZone));
      if ((typeof ngDevMode === "undefined" || ngDevMode) && moduleRef.injector.get(PROVIDED_NG_ZONE, null) !== null) {
        throw new RuntimeError(207, "`bootstrapModule` does not support `provideZoneChangeDetection`. Use `BootstrapOptions` instead.");
      }
      const exceptionHandler = moduleRef.injector.get(ErrorHandler, null);
      if ((typeof ngDevMode === "undefined" || ngDevMode) && exceptionHandler === null) {
        throw new RuntimeError(402, "No ErrorHandler. Is platform module (BrowserModule) included?");
      }
      ngZone.runOutsideAngular(() => {
        const subscription = ngZone.onError.subscribe({
          next: (error) => {
            exceptionHandler.handleError(error);
          }
        });
        moduleRef.onDestroy(() => {
          remove(this._modules, moduleRef);
          subscription.unsubscribe();
        });
      });
      return _callAndReportToErrorHandler(exceptionHandler, ngZone, () => {
        const initStatus = moduleRef.injector.get(ApplicationInitStatus);
        initStatus.runInitializers();
        return initStatus.donePromise.then(() => {
          const localeId = moduleRef.injector.get(LOCALE_ID, DEFAULT_LOCALE_ID);
          setLocaleId(localeId || DEFAULT_LOCALE_ID);
          this._moduleDoBootstrap(moduleRef);
          return moduleRef;
        });
      });
    });
  }
  /**
   * Creates an instance of an `@NgModule` for a given platform.
   *
   * @usageNotes
   * ### Simple Example
   *
   * ```typescript
   * @NgModule({
   *   imports: [BrowserModule]
   * })
   * class MyModule {}
   *
   * let moduleRef = platformBrowser().bootstrapModule(MyModule);
   * ```
   *
   */
  bootstrapModule(moduleType, compilerOptions = []) {
    const options = optionsReducer({}, compilerOptions);
    return compileNgModuleFactory(this.injector, options, moduleType).then((moduleFactory) => this.bootstrapModuleFactory(moduleFactory, options));
  }
  _moduleDoBootstrap(moduleRef) {
    const appRef = moduleRef.injector.get(ApplicationRef);
    if (moduleRef._bootstrapComponents.length > 0) {
      moduleRef._bootstrapComponents.forEach((f) => appRef.bootstrap(f));
    } else if (moduleRef.instance.ngDoBootstrap) {
      moduleRef.instance.ngDoBootstrap(appRef);
    } else {
      throw new RuntimeError(-403, ngDevMode && `The module ${stringify(moduleRef.instance.constructor)} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`);
    }
    this._modules.push(moduleRef);
  }
  /**
   * Registers a listener to be called when the platform is destroyed.
   */
  onDestroy(callback) {
    this._destroyListeners.push(callback);
  }
  /**
   * Retrieves the platform {@link Injector}, which is the parent injector for
   * every Angular application on the page and provides singleton providers.
   */
  get injector() {
    return this._injector;
  }
  /**
   * Destroys the current Angular platform and all Angular applications on the page.
   * Destroys all modules and listeners registered with the platform.
   */
  destroy() {
    if (this._destroyed) {
      throw new RuntimeError(404, ngDevMode && "The platform has already been destroyed!");
    }
    this._modules.slice().forEach((module) => module.destroy());
    this._destroyListeners.forEach((listener) => listener());
    const destroyListeners = this._injector.get(PLATFORM_DESTROY_LISTENERS, null);
    if (destroyListeners) {
      destroyListeners.forEach((listener) => listener());
      destroyListeners.clear();
    }
    this._destroyed = true;
  }
  /**
   * Indicates whether this instance was destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
};
var PlatformRef = _PlatformRef;
(() => {
  _PlatformRef.\u0275fac = function PlatformRef_Factory(t) {
    return new (t || _PlatformRef)(\u0275\u0275inject(Injector));
  };
})();
(() => {
  _PlatformRef.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _PlatformRef, factory: _PlatformRef.\u0275fac, providedIn: "platform" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PlatformRef, [{
    type: Injectable,
    args: [{ providedIn: "platform" }]
  }], function() {
    return [{ type: Injector }];
  }, null);
})();
function getNgZoneOptions(options) {
  var _a2, _b;
  return {
    enableLongStackTrace: typeof ngDevMode === "undefined" ? false : !!ngDevMode,
    shouldCoalesceEventChangeDetection: (_a2 = options == null ? void 0 : options.eventCoalescing) != null ? _a2 : false,
    shouldCoalesceRunChangeDetection: (_b = options == null ? void 0 : options.runCoalescing) != null ? _b : false
  };
}
function getNgZone(ngZoneToUse = "zone.js", options) {
  if (ngZoneToUse === "noop") {
    return new NoopNgZone();
  }
  if (ngZoneToUse === "zone.js") {
    return new NgZone(options);
  }
  return ngZoneToUse;
}
function _callAndReportToErrorHandler(errorHandler, ngZone, callback) {
  try {
    const result = callback();
    if (isPromise(result)) {
      return result.catch((e) => {
        ngZone.runOutsideAngular(() => errorHandler.handleError(e));
        throw e;
      });
    }
    return result;
  } catch (e) {
    ngZone.runOutsideAngular(() => errorHandler.handleError(e));
    throw e;
  }
}
function optionsReducer(dst, objs) {
  if (Array.isArray(objs)) {
    return objs.reduce(optionsReducer, dst);
  }
  return __spreadValues(__spreadValues({}, dst), objs);
}
var _ApplicationRef = class {
  constructor() {
    this._bootstrapListeners = [];
    this._runningTick = false;
    this._destroyed = false;
    this._destroyListeners = [];
    this._views = [];
    this.internalErrorHandler = inject(INTERNAL_APPLICATION_ERROR_HANDLER);
    this.zoneIsStable = inject(ZONE_IS_STABLE_OBSERVABLE);
    this.componentTypes = [];
    this.components = [];
    this.isStable = inject(InitialRenderPendingTasks).hasPendingTasks.pipe((0, import_operators.switchMap)((hasPendingTasks) => hasPendingTasks ? (0, import_rxjs.of)(false) : this.zoneIsStable), (0, import_operators.distinctUntilChanged)(), (0, import_operators.share)());
    this._injector = inject(EnvironmentInjector);
  }
  /**
   * Indicates whether this instance was destroyed.
   */
  get destroyed() {
    return this._destroyed;
  }
  /**
   * The `EnvironmentInjector` used to create this application.
   */
  get injector() {
    return this._injector;
  }
  /**
   * Bootstrap a component onto the element identified by its selector or, optionally, to a
   * specified element.
   *
   * @usageNotes
   * ### Bootstrap process
   *
   * When bootstrapping a component, Angular mounts it onto a target DOM element
   * and kicks off automatic change detection. The target DOM element can be
   * provided using the `rootSelectorOrNode` argument.
   *
   * If the target DOM element is not provided, Angular tries to find one on a page
   * using the `selector` of the component that is being bootstrapped
   * (first matched element is used).
   *
   * ### Example
   *
   * Generally, we define the component to bootstrap in the `bootstrap` array of `NgModule`,
   * but it requires us to know the component while writing the application code.
   *
   * Imagine a situation where we have to wait for an API call to decide about the component to
   * bootstrap. We can use the `ngDoBootstrap` hook of the `NgModule` and call this method to
   * dynamically bootstrap a component.
   *
   * {@example core/ts/platform/platform.ts region='componentSelector'}
   *
   * Optionally, a component can be mounted onto a DOM element that does not match the
   * selector of the bootstrapped component.
   *
   * In the following example, we are providing a CSS selector to match the target element.
   *
   * {@example core/ts/platform/platform.ts region='cssSelector'}
   *
   * While in this example, we are providing reference to a DOM node.
   *
   * {@example core/ts/platform/platform.ts region='domNode'}
   */
  bootstrap(componentOrFactory, rootSelectorOrNode) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.warnIfDestroyed();
    const isComponentFactory = componentOrFactory instanceof ComponentFactory$1;
    const initStatus = this._injector.get(ApplicationInitStatus);
    if (!initStatus.done) {
      const standalone = !isComponentFactory && isStandalone(componentOrFactory);
      const errorMessage = "Cannot bootstrap as there are still asynchronous initializers running." + (standalone ? "" : " Bootstrap components in the `ngDoBootstrap` method of the root module.");
      throw new RuntimeError(405, (typeof ngDevMode === "undefined" || ngDevMode) && errorMessage);
    }
    let componentFactory;
    if (isComponentFactory) {
      componentFactory = componentOrFactory;
    } else {
      const resolver = this._injector.get(ComponentFactoryResolver$1);
      componentFactory = resolver.resolveComponentFactory(componentOrFactory);
    }
    this.componentTypes.push(componentFactory.componentType);
    const ngModule = isBoundToModule(componentFactory) ? void 0 : this._injector.get(NgModuleRef$1);
    const selectorOrNode = rootSelectorOrNode || componentFactory.selector;
    const compRef = componentFactory.create(Injector.NULL, [], selectorOrNode, ngModule);
    const nativeElement = compRef.location.nativeElement;
    const testability = compRef.injector.get(TESTABILITY, null);
    testability == null ? void 0 : testability.registerApplication(nativeElement);
    compRef.onDestroy(() => {
      this.detachView(compRef.hostView);
      remove(this.components, compRef);
      testability == null ? void 0 : testability.unregisterApplication(nativeElement);
    });
    this._loadComponent(compRef);
    if (typeof ngDevMode === "undefined" || ngDevMode) {
      const _console = this._injector.get(Console);
      _console.log(`Angular is running in development mode.`);
    }
    return compRef;
  }
  /**
   * Invoke this method to explicitly process change detection and its side-effects.
   *
   * In development mode, `tick()` also performs a second change detection cycle to ensure that no
   * further changes are detected. If additional changes are picked up during this second cycle,
   * bindings in the app have side-effects that cannot be resolved in a single change detection
   * pass.
   * In this case, Angular throws an error, since an Angular application can only have one change
   * detection pass during which all change detection must complete.
   */
  tick() {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.warnIfDestroyed();
    if (this._runningTick) {
      throw new RuntimeError(101, ngDevMode && "ApplicationRef.tick is called recursively");
    }
    try {
      this._runningTick = true;
      for (let view of this._views) {
        view.detectChanges();
      }
      if (typeof ngDevMode === "undefined" || ngDevMode) {
        for (let view of this._views) {
          view.checkNoChanges();
        }
      }
    } catch (e) {
      this.internalErrorHandler(e);
    } finally {
      this._runningTick = false;
    }
  }
  /**
   * Attaches a view so that it will be dirty checked.
   * The view will be automatically detached when it is destroyed.
   * This will throw if the view is already attached to a ViewContainer.
   */
  attachView(viewRef) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.warnIfDestroyed();
    const view = viewRef;
    this._views.push(view);
    view.attachToAppRef(this);
  }
  /**
   * Detaches a view from dirty checking again.
   */
  detachView(viewRef) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.warnIfDestroyed();
    const view = viewRef;
    remove(this._views, view);
    view.detachFromAppRef();
  }
  _loadComponent(componentRef) {
    this.attachView(componentRef.hostView);
    this.tick();
    this.components.push(componentRef);
    const listeners = this._injector.get(APP_BOOTSTRAP_LISTENER, []);
    if (ngDevMode && !Array.isArray(listeners)) {
      throw new RuntimeError(-209, `Unexpected type of the \`APP_BOOTSTRAP_LISTENER\` token value (expected an array, but got ${typeof listeners}). Please check that the \`APP_BOOTSTRAP_LISTENER\` token is configured as a \`multi: true\` provider.`);
    }
    listeners.push(...this._bootstrapListeners);
    listeners.forEach((listener) => listener(componentRef));
  }
  /** @internal */
  ngOnDestroy() {
    if (this._destroyed)
      return;
    try {
      this._destroyListeners.forEach((listener) => listener());
      this._views.slice().forEach((view) => view.destroy());
    } finally {
      this._destroyed = true;
      this._views = [];
      this._bootstrapListeners = [];
      this._destroyListeners = [];
    }
  }
  /**
   * Registers a listener to be called when an instance is destroyed.
   *
   * @param callback A callback function to add as a listener.
   * @returns A function which unregisters a listener.
   */
  onDestroy(callback) {
    (typeof ngDevMode === "undefined" || ngDevMode) && this.warnIfDestroyed();
    this._destroyListeners.push(callback);
    return () => remove(this._destroyListeners, callback);
  }
  /**
   * Destroys an Angular application represented by this `ApplicationRef`. Calling this function
   * will destroy the associated environment injectors as well as all the bootstrapped components
   * with their views.
   */
  destroy() {
    if (this._destroyed) {
      throw new RuntimeError(406, ngDevMode && "This instance of the `ApplicationRef` has already been destroyed.");
    }
    const injector = this._injector;
    if (injector.destroy && !injector.destroyed) {
      injector.destroy();
    }
  }
  /**
   * Returns the number of attached views.
   */
  get viewCount() {
    return this._views.length;
  }
  warnIfDestroyed() {
    if ((typeof ngDevMode === "undefined" || ngDevMode) && this._destroyed) {
      console.warn(formatRuntimeError(406, "This instance of the `ApplicationRef` has already been destroyed."));
    }
  }
};
var ApplicationRef = _ApplicationRef;
(() => {
  _ApplicationRef.\u0275fac = function ApplicationRef_Factory(t) {
    return new (t || _ApplicationRef)();
  };
})();
(() => {
  _ApplicationRef.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ApplicationRef, factory: _ApplicationRef.\u0275fac, providedIn: "root" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationRef, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
function remove(list, el) {
  const index = list.indexOf(el);
  if (index > -1) {
    list.splice(index, 1);
  }
}
function _lastDefined(args) {
  for (let i = args.length - 1; i >= 0; i--) {
    if (args[i] !== void 0) {
      return args[i];
    }
  }
  return void 0;
}
var INTERNAL_APPLICATION_ERROR_HANDLER = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "internal error handler" : "", {
  providedIn: "root",
  factory: () => {
    const userErrorHandler = inject(ErrorHandler);
    return userErrorHandler.handleError.bind(void 0);
  }
});
function ngZoneApplicationErrorHandlerFactory() {
  const zone = inject(NgZone);
  const userErrorHandler = inject(ErrorHandler);
  return (e) => zone.runOutsideAngular(() => userErrorHandler.handleError(e));
}
var _NgZoneChangeDetectionScheduler = class {
  constructor() {
    this.zone = inject(NgZone);
    this.applicationRef = inject(ApplicationRef);
  }
  initialize() {
    if (this._onMicrotaskEmptySubscription) {
      return;
    }
    this._onMicrotaskEmptySubscription = this.zone.onMicrotaskEmpty.subscribe({
      next: () => {
        this.zone.run(() => {
          this.applicationRef.tick();
        });
      }
    });
  }
  ngOnDestroy() {
    var _a2;
    (_a2 = this._onMicrotaskEmptySubscription) == null ? void 0 : _a2.unsubscribe();
  }
};
var NgZoneChangeDetectionScheduler = _NgZoneChangeDetectionScheduler;
(() => {
  _NgZoneChangeDetectionScheduler.\u0275fac = function NgZoneChangeDetectionScheduler_Factory(t) {
    return new (t || _NgZoneChangeDetectionScheduler)();
  };
})();
(() => {
  _NgZoneChangeDetectionScheduler.\u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _NgZoneChangeDetectionScheduler, factory: _NgZoneChangeDetectionScheduler.\u0275fac, providedIn: "root" });
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(NgZoneChangeDetectionScheduler, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();
var PROVIDED_NG_ZONE = new InjectionToken(typeof ngDevMode === "undefined" || ngDevMode ? "provideZoneChangeDetection token" : "");
function internalProvideZoneChangeDetection(ngZoneFactory) {
  return [
    { provide: NgZone, useFactory: ngZoneFactory },
    {
      provide: ENVIRONMENT_INITIALIZER,
      multi: true,
      useFactory: () => {
        const ngZoneChangeDetectionScheduler = inject(NgZoneChangeDetectionScheduler, { optional: true });
        if ((typeof ngDevMode === "undefined" || ngDevMode) && ngZoneChangeDetectionScheduler === null) {
          throw new RuntimeError(402, `A required Injectable was not found in the dependency injection tree. If you are bootstrapping an NgModule, make sure that the \`BrowserModule\` is imported.`);
        }
        return () => ngZoneChangeDetectionScheduler.initialize();
      }
    },
    { provide: INTERNAL_APPLICATION_ERROR_HANDLER, useFactory: ngZoneApplicationErrorHandlerFactory },
    { provide: ZONE_IS_STABLE_OBSERVABLE, useFactory: isStableFactory }
  ];
}
var _ChangeDetectorRef = class {
};
var ChangeDetectorRef = _ChangeDetectorRef;
/**
 * @internal
 * @nocollapse
 */
(() => {
  _ChangeDetectorRef.__NG_ELEMENT_ID__ = injectChangeDetectorRef;
})();
function injectChangeDetectorRef(flags) {
  return createViewRef(
    getCurrentTNode(),
    getLView(),
    (flags & 16) === 16
    /* InternalInjectFlags.ForPipe */
  );
}
function createViewRef(tNode, lView, isPipe) {
  if (isComponentHost(tNode) && !isPipe) {
    const componentView = getComponentLViewByIndex(tNode.index, lView);
    return new ViewRef$1(componentView, componentView);
  } else if (tNode.type & (3 | 12 | 32)) {
    const hostComponentView = lView[DECLARATION_COMPONENT_VIEW];
    return new ViewRef$1(hostComponentView, lView);
  }
  return null;
}
var DefaultIterableDifferFactory = class {
  constructor() {
  }
  supports(obj) {
    return isListLikeIterable(obj);
  }
  create(trackByFn) {
    return new DefaultIterableDiffer(trackByFn);
  }
};
var trackByIdentity = (index, item) => item;
var DefaultIterableDiffer = class {
  constructor(trackByFn) {
    this.length = 0;
    this._linkedRecords = null;
    this._unlinkedRecords = null;
    this._previousItHead = null;
    this._itHead = null;
    this._itTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._movesHead = null;
    this._movesTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
    this._identityChangesHead = null;
    this._identityChangesTail = null;
    this._trackByFn = trackByFn || trackByIdentity;
  }
  forEachItem(fn) {
    let record;
    for (record = this._itHead; record !== null; record = record._next) {
      fn(record);
    }
  }
  forEachOperation(fn) {
    let nextIt = this._itHead;
    let nextRemove = this._removalsHead;
    let addRemoveOffset = 0;
    let moveOffsets = null;
    while (nextIt || nextRemove) {
      const record = !nextRemove || nextIt && nextIt.currentIndex < getPreviousIndex(nextRemove, addRemoveOffset, moveOffsets) ? nextIt : nextRemove;
      const adjPreviousIndex = getPreviousIndex(record, addRemoveOffset, moveOffsets);
      const currentIndex = record.currentIndex;
      if (record === nextRemove) {
        addRemoveOffset--;
        nextRemove = nextRemove._nextRemoved;
      } else {
        nextIt = nextIt._next;
        if (record.previousIndex == null) {
          addRemoveOffset++;
        } else {
          if (!moveOffsets)
            moveOffsets = [];
          const localMovePreviousIndex = adjPreviousIndex - addRemoveOffset;
          const localCurrentIndex = currentIndex - addRemoveOffset;
          if (localMovePreviousIndex != localCurrentIndex) {
            for (let i = 0; i < localMovePreviousIndex; i++) {
              const offset = i < moveOffsets.length ? moveOffsets[i] : moveOffsets[i] = 0;
              const index = offset + i;
              if (localCurrentIndex <= index && index < localMovePreviousIndex) {
                moveOffsets[i] = offset + 1;
              }
            }
            const previousIndex = record.previousIndex;
            moveOffsets[previousIndex] = localCurrentIndex - localMovePreviousIndex;
          }
        }
      }
      if (adjPreviousIndex !== currentIndex) {
        fn(record, adjPreviousIndex, currentIndex);
      }
    }
  }
  forEachPreviousItem(fn) {
    let record;
    for (record = this._previousItHead; record !== null; record = record._nextPrevious) {
      fn(record);
    }
  }
  forEachAddedItem(fn) {
    let record;
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      fn(record);
    }
  }
  forEachMovedItem(fn) {
    let record;
    for (record = this._movesHead; record !== null; record = record._nextMoved) {
      fn(record);
    }
  }
  forEachRemovedItem(fn) {
    let record;
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      fn(record);
    }
  }
  forEachIdentityChange(fn) {
    let record;
    for (record = this._identityChangesHead; record !== null; record = record._nextIdentityChange) {
      fn(record);
    }
  }
  diff(collection) {
    if (collection == null)
      collection = [];
    if (!isListLikeIterable(collection)) {
      throw new RuntimeError(900, ngDevMode && `Error trying to diff '${stringify(collection)}'. Only arrays and iterables are allowed`);
    }
    if (this.check(collection)) {
      return this;
    } else {
      return null;
    }
  }
  onDestroy() {
  }
  check(collection) {
    this._reset();
    let record = this._itHead;
    let mayBeDirty = false;
    let index;
    let item;
    let itemTrackBy;
    if (Array.isArray(collection)) {
      this.length = collection.length;
      for (let index2 = 0; index2 < this.length; index2++) {
        item = collection[index2];
        itemTrackBy = this._trackByFn(index2, item);
        if (record === null || !Object.is(record.trackById, itemTrackBy)) {
          record = this._mismatch(record, item, itemTrackBy, index2);
          mayBeDirty = true;
        } else {
          if (mayBeDirty) {
            record = this._verifyReinsertion(record, item, itemTrackBy, index2);
          }
          if (!Object.is(record.item, item))
            this._addIdentityChange(record, item);
        }
        record = record._next;
      }
    } else {
      index = 0;
      iterateListLike(collection, (item2) => {
        itemTrackBy = this._trackByFn(index, item2);
        if (record === null || !Object.is(record.trackById, itemTrackBy)) {
          record = this._mismatch(record, item2, itemTrackBy, index);
          mayBeDirty = true;
        } else {
          if (mayBeDirty) {
            record = this._verifyReinsertion(record, item2, itemTrackBy, index);
          }
          if (!Object.is(record.item, item2))
            this._addIdentityChange(record, item2);
        }
        record = record._next;
        index++;
      });
      this.length = index;
    }
    this._truncate(record);
    this.collection = collection;
    return this.isDirty;
  }
  /* CollectionChanges is considered dirty if it has any additions, moves, removals, or identity
   * changes.
   */
  get isDirty() {
    return this._additionsHead !== null || this._movesHead !== null || this._removalsHead !== null || this._identityChangesHead !== null;
  }
  /**
   * Reset the state of the change objects to show no changes. This means set previousKey to
   * currentKey, and clear all of the queues (additions, moves, removals).
   * Set the previousIndexes of moved and added items to their currentIndexes
   * Reset the list of additions, moves and removals
   *
   * @internal
   */
  _reset() {
    if (this.isDirty) {
      let record;
      for (record = this._previousItHead = this._itHead; record !== null; record = record._next) {
        record._nextPrevious = record._next;
      }
      for (record = this._additionsHead; record !== null; record = record._nextAdded) {
        record.previousIndex = record.currentIndex;
      }
      this._additionsHead = this._additionsTail = null;
      for (record = this._movesHead; record !== null; record = record._nextMoved) {
        record.previousIndex = record.currentIndex;
      }
      this._movesHead = this._movesTail = null;
      this._removalsHead = this._removalsTail = null;
      this._identityChangesHead = this._identityChangesTail = null;
    }
  }
  /**
   * This is the core function which handles differences between collections.
   *
   * - `record` is the record which we saw at this position last time. If null then it is a new
   *   item.
   * - `item` is the current item in the collection
   * - `index` is the position of the item in the collection
   *
   * @internal
   */
  _mismatch(record, item, itemTrackBy, index) {
    let previousRecord;
    if (record === null) {
      previousRecord = this._itTail;
    } else {
      previousRecord = record._prev;
      this._remove(record);
    }
    record = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy, null);
    if (record !== null) {
      if (!Object.is(record.item, item))
        this._addIdentityChange(record, item);
      this._reinsertAfter(record, previousRecord, index);
    } else {
      record = this._linkedRecords === null ? null : this._linkedRecords.get(itemTrackBy, index);
      if (record !== null) {
        if (!Object.is(record.item, item))
          this._addIdentityChange(record, item);
        this._moveAfter(record, previousRecord, index);
      } else {
        record = this._addAfter(new IterableChangeRecord_(item, itemTrackBy), previousRecord, index);
      }
    }
    return record;
  }
  /**
   * This check is only needed if an array contains duplicates. (Short circuit of nothing dirty)
   *
   * Use case: `[a, a]` => `[b, a, a]`
   *
   * If we did not have this check then the insertion of `b` would:
   *   1) evict first `a`
   *   2) insert `b` at `0` index.
   *   3) leave `a` at index `1` as is. <-- this is wrong!
   *   3) reinsert `a` at index 2. <-- this is wrong!
   *
   * The correct behavior is:
   *   1) evict first `a`
   *   2) insert `b` at `0` index.
   *   3) reinsert `a` at index 1.
   *   3) move `a` at from `1` to `2`.
   *
   *
   * Double check that we have not evicted a duplicate item. We need to check if the item type may
   * have already been removed:
   * The insertion of b will evict the first 'a'. If we don't reinsert it now it will be reinserted
   * at the end. Which will show up as the two 'a's switching position. This is incorrect, since a
   * better way to think of it is as insert of 'b' rather then switch 'a' with 'b' and then add 'a'
   * at the end.
   *
   * @internal
   */
  _verifyReinsertion(record, item, itemTrackBy, index) {
    let reinsertRecord = this._unlinkedRecords === null ? null : this._unlinkedRecords.get(itemTrackBy, null);
    if (reinsertRecord !== null) {
      record = this._reinsertAfter(reinsertRecord, record._prev, index);
    } else if (record.currentIndex != index) {
      record.currentIndex = index;
      this._addToMoves(record, index);
    }
    return record;
  }
  /**
   * Get rid of any excess {@link IterableChangeRecord_}s from the previous collection
   *
   * - `record` The first excess {@link IterableChangeRecord_}.
   *
   * @internal
   */
  _truncate(record) {
    while (record !== null) {
      const nextRecord = record._next;
      this._addToRemovals(this._unlink(record));
      record = nextRecord;
    }
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.clear();
    }
    if (this._additionsTail !== null) {
      this._additionsTail._nextAdded = null;
    }
    if (this._movesTail !== null) {
      this._movesTail._nextMoved = null;
    }
    if (this._itTail !== null) {
      this._itTail._next = null;
    }
    if (this._removalsTail !== null) {
      this._removalsTail._nextRemoved = null;
    }
    if (this._identityChangesTail !== null) {
      this._identityChangesTail._nextIdentityChange = null;
    }
  }
  /** @internal */
  _reinsertAfter(record, prevRecord, index) {
    if (this._unlinkedRecords !== null) {
      this._unlinkedRecords.remove(record);
    }
    const prev = record._prevRemoved;
    const next = record._nextRemoved;
    if (prev === null) {
      this._removalsHead = next;
    } else {
      prev._nextRemoved = next;
    }
    if (next === null) {
      this._removalsTail = prev;
    } else {
      next._prevRemoved = prev;
    }
    this._insertAfter(record, prevRecord, index);
    this._addToMoves(record, index);
    return record;
  }
  /** @internal */
  _moveAfter(record, prevRecord, index) {
    this._unlink(record);
    this._insertAfter(record, prevRecord, index);
    this._addToMoves(record, index);
    return record;
  }
  /** @internal */
  _addAfter(record, prevRecord, index) {
    this._insertAfter(record, prevRecord, index);
    if (this._additionsTail === null) {
      this._additionsTail = this._additionsHead = record;
    } else {
      this._additionsTail = this._additionsTail._nextAdded = record;
    }
    return record;
  }
  /** @internal */
  _insertAfter(record, prevRecord, index) {
    const next = prevRecord === null ? this._itHead : prevRecord._next;
    record._next = next;
    record._prev = prevRecord;
    if (next === null) {
      this._itTail = record;
    } else {
      next._prev = record;
    }
    if (prevRecord === null) {
      this._itHead = record;
    } else {
      prevRecord._next = record;
    }
    if (this._linkedRecords === null) {
      this._linkedRecords = new _DuplicateMap();
    }
    this._linkedRecords.put(record);
    record.currentIndex = index;
    return record;
  }
  /** @internal */
  _remove(record) {
    return this._addToRemovals(this._unlink(record));
  }
  /** @internal */
  _unlink(record) {
    if (this._linkedRecords !== null) {
      this._linkedRecords.remove(record);
    }
    const prev = record._prev;
    const next = record._next;
    if (prev === null) {
      this._itHead = next;
    } else {
      prev._next = next;
    }
    if (next === null) {
      this._itTail = prev;
    } else {
      next._prev = prev;
    }
    return record;
  }
  /** @internal */
  _addToMoves(record, toIndex) {
    if (record.previousIndex === toIndex) {
      return record;
    }
    if (this._movesTail === null) {
      this._movesTail = this._movesHead = record;
    } else {
      this._movesTail = this._movesTail._nextMoved = record;
    }
    return record;
  }
  _addToRemovals(record) {
    if (this._unlinkedRecords === null) {
      this._unlinkedRecords = new _DuplicateMap();
    }
    this._unlinkedRecords.put(record);
    record.currentIndex = null;
    record._nextRemoved = null;
    if (this._removalsTail === null) {
      this._removalsTail = this._removalsHead = record;
      record._prevRemoved = null;
    } else {
      record._prevRemoved = this._removalsTail;
      this._removalsTail = this._removalsTail._nextRemoved = record;
    }
    return record;
  }
  /** @internal */
  _addIdentityChange(record, item) {
    record.item = item;
    if (this._identityChangesTail === null) {
      this._identityChangesTail = this._identityChangesHead = record;
    } else {
      this._identityChangesTail = this._identityChangesTail._nextIdentityChange = record;
    }
    return record;
  }
};
var IterableChangeRecord_ = class {
  constructor(item, trackById) {
    this.item = item;
    this.trackById = trackById;
    this.currentIndex = null;
    this.previousIndex = null;
    this._nextPrevious = null;
    this._prev = null;
    this._next = null;
    this._prevDup = null;
    this._nextDup = null;
    this._prevRemoved = null;
    this._nextRemoved = null;
    this._nextAdded = null;
    this._nextMoved = null;
    this._nextIdentityChange = null;
  }
};
var _DuplicateItemRecordList = class {
  constructor() {
    this._head = null;
    this._tail = null;
  }
  /**
   * Append the record to the list of duplicates.
   *
   * Note: by design all records in the list of duplicates hold the same value in record.item.
   */
  add(record) {
    if (this._head === null) {
      this._head = this._tail = record;
      record._nextDup = null;
      record._prevDup = null;
    } else {
      this._tail._nextDup = record;
      record._prevDup = this._tail;
      record._nextDup = null;
      this._tail = record;
    }
  }
  // Returns a IterableChangeRecord_ having IterableChangeRecord_.trackById == trackById and
  // IterableChangeRecord_.currentIndex >= atOrAfterIndex
  get(trackById, atOrAfterIndex) {
    let record;
    for (record = this._head; record !== null; record = record._nextDup) {
      if ((atOrAfterIndex === null || atOrAfterIndex <= record.currentIndex) && Object.is(record.trackById, trackById)) {
        return record;
      }
    }
    return null;
  }
  /**
   * Remove one {@link IterableChangeRecord_} from the list of duplicates.
   *
   * Returns whether the list of duplicates is empty.
   */
  remove(record) {
    const prev = record._prevDup;
    const next = record._nextDup;
    if (prev === null) {
      this._head = next;
    } else {
      prev._nextDup = next;
    }
    if (next === null) {
      this._tail = prev;
    } else {
      next._prevDup = prev;
    }
    return this._head === null;
  }
};
var _DuplicateMap = class {
  constructor() {
    this.map = /* @__PURE__ */ new Map();
  }
  put(record) {
    const key = record.trackById;
    let duplicates = this.map.get(key);
    if (!duplicates) {
      duplicates = new _DuplicateItemRecordList();
      this.map.set(key, duplicates);
    }
    duplicates.add(record);
  }
  /**
   * Retrieve the `value` using key. Because the IterableChangeRecord_ value may be one which we
   * have already iterated over, we use the `atOrAfterIndex` to pretend it is not there.
   *
   * Use case: `[a, b, c, a, a]` if we are at index `3` which is the second `a` then asking if we
   * have any more `a`s needs to return the second `a`.
   */
  get(trackById, atOrAfterIndex) {
    const key = trackById;
    const recordList = this.map.get(key);
    return recordList ? recordList.get(trackById, atOrAfterIndex) : null;
  }
  /**
   * Removes a {@link IterableChangeRecord_} from the list of duplicates.
   *
   * The list of duplicates also is removed from the map if it gets empty.
   */
  remove(record) {
    const key = record.trackById;
    const recordList = this.map.get(key);
    if (recordList.remove(record)) {
      this.map.delete(key);
    }
    return record;
  }
  get isEmpty() {
    return this.map.size === 0;
  }
  clear() {
    this.map.clear();
  }
};
function getPreviousIndex(item, addRemoveOffset, moveOffsets) {
  const previousIndex = item.previousIndex;
  if (previousIndex === null)
    return previousIndex;
  let moveOffset = 0;
  if (moveOffsets && previousIndex < moveOffsets.length) {
    moveOffset = moveOffsets[previousIndex];
  }
  return previousIndex + addRemoveOffset + moveOffset;
}
var DefaultKeyValueDifferFactory = class {
  constructor() {
  }
  supports(obj) {
    return obj instanceof Map || isJsObject(obj);
  }
  create() {
    return new DefaultKeyValueDiffer();
  }
};
var DefaultKeyValueDiffer = class {
  constructor() {
    this._records = /* @__PURE__ */ new Map();
    this._mapHead = null;
    this._appendAfter = null;
    this._previousMapHead = null;
    this._changesHead = null;
    this._changesTail = null;
    this._additionsHead = null;
    this._additionsTail = null;
    this._removalsHead = null;
    this._removalsTail = null;
  }
  get isDirty() {
    return this._additionsHead !== null || this._changesHead !== null || this._removalsHead !== null;
  }
  forEachItem(fn) {
    let record;
    for (record = this._mapHead; record !== null; record = record._next) {
      fn(record);
    }
  }
  forEachPreviousItem(fn) {
    let record;
    for (record = this._previousMapHead; record !== null; record = record._nextPrevious) {
      fn(record);
    }
  }
  forEachChangedItem(fn) {
    let record;
    for (record = this._changesHead; record !== null; record = record._nextChanged) {
      fn(record);
    }
  }
  forEachAddedItem(fn) {
    let record;
    for (record = this._additionsHead; record !== null; record = record._nextAdded) {
      fn(record);
    }
  }
  forEachRemovedItem(fn) {
    let record;
    for (record = this._removalsHead; record !== null; record = record._nextRemoved) {
      fn(record);
    }
  }
  diff(map) {
    if (!map) {
      map = /* @__PURE__ */ new Map();
    } else if (!(map instanceof Map || isJsObject(map))) {
      throw new RuntimeError(900, ngDevMode && `Error trying to diff '${stringify(map)}'. Only maps and objects are allowed`);
    }
    return this.check(map) ? this : null;
  }
  onDestroy() {
  }
  /**
   * Check the current state of the map vs the previous.
   * The algorithm is optimised for when the keys do no change.
   */
  check(map) {
    this._reset();
    let insertBefore = this._mapHead;
    this._appendAfter = null;
    this._forEach(map, (value, key) => {
      if (insertBefore && insertBefore.key === key) {
        this._maybeAddToChanges(insertBefore, value);
        this._appendAfter = insertBefore;
        insertBefore = insertBefore._next;
      } else {
        const record = this._getOrCreateRecordForKey(key, value);
        insertBefore = this._insertBeforeOrAppend(insertBefore, record);
      }
    });
    if (insertBefore) {
      if (insertBefore._prev) {
        insertBefore._prev._next = null;
      }
      this._removalsHead = insertBefore;
      for (let record = insertBefore; record !== null; record = record._nextRemoved) {
        if (record === this._mapHead) {
          this._mapHead = null;
        }
        this._records.delete(record.key);
        record._nextRemoved = record._next;
        record.previousValue = record.currentValue;
        record.currentValue = null;
        record._prev = null;
        record._next = null;
      }
    }
    if (this._changesTail)
      this._changesTail._nextChanged = null;
    if (this._additionsTail)
      this._additionsTail._nextAdded = null;
    return this.isDirty;
  }
  /**
   * Inserts a record before `before` or append at the end of the list when `before` is null.
   *
   * Notes:
   * - This method appends at `this._appendAfter`,
   * - This method updates `this._appendAfter`,
   * - The return value is the new value for the insertion pointer.
   */
  _insertBeforeOrAppend(before, record) {
    if (before) {
      const prev = before._prev;
      record._next = before;
      record._prev = prev;
      before._prev = record;
      if (prev) {
        prev._next = record;
      }
      if (before === this._mapHead) {
        this._mapHead = record;
      }
      this._appendAfter = before;
      return before;
    }
    if (this._appendAfter) {
      this._appendAfter._next = record;
      record._prev = this._appendAfter;
    } else {
      this._mapHead = record;
    }
    this._appendAfter = record;
    return null;
  }
  _getOrCreateRecordForKey(key, value) {
    if (this._records.has(key)) {
      const record2 = this._records.get(key);
      this._maybeAddToChanges(record2, value);
      const prev = record2._prev;
      const next = record2._next;
      if (prev) {
        prev._next = next;
      }
      if (next) {
        next._prev = prev;
      }
      record2._next = null;
      record2._prev = null;
      return record2;
    }
    const record = new KeyValueChangeRecord_(key);
    this._records.set(key, record);
    record.currentValue = value;
    this._addToAdditions(record);
    return record;
  }
  /** @internal */
  _reset() {
    if (this.isDirty) {
      let record;
      this._previousMapHead = this._mapHead;
      for (record = this._previousMapHead; record !== null; record = record._next) {
        record._nextPrevious = record._next;
      }
      for (record = this._changesHead; record !== null; record = record._nextChanged) {
        record.previousValue = record.currentValue;
      }
      for (record = this._additionsHead; record != null; record = record._nextAdded) {
        record.previousValue = record.currentValue;
      }
      this._changesHead = this._changesTail = null;
      this._additionsHead = this._additionsTail = null;
      this._removalsHead = null;
    }
  }
  // Add the record or a given key to the list of changes only when the value has actually changed
  _maybeAddToChanges(record, newValue) {
    if (!Object.is(newValue, record.currentValue)) {
      record.previousValue = record.currentValue;
      record.currentValue = newValue;
      this._addToChanges(record);
    }
  }
  _addToAdditions(record) {
    if (this._additionsHead === null) {
      this._additionsHead = this._additionsTail = record;
    } else {
      this._additionsTail._nextAdded = record;
      this._additionsTail = record;
    }
  }
  _addToChanges(record) {
    if (this._changesHead === null) {
      this._changesHead = this._changesTail = record;
    } else {
      this._changesTail._nextChanged = record;
      this._changesTail = record;
    }
  }
  /** @internal */
  _forEach(obj, fn) {
    if (obj instanceof Map) {
      obj.forEach(fn);
    } else {
      Object.keys(obj).forEach((k) => fn(obj[k], k));
    }
  }
};
var KeyValueChangeRecord_ = class {
  constructor(key) {
    this.key = key;
    this.previousValue = null;
    this.currentValue = null;
    this._nextPrevious = null;
    this._next = null;
    this._prev = null;
    this._nextAdded = null;
    this._nextRemoved = null;
    this._nextChanged = null;
  }
};
function defaultIterableDiffersFactory() {
  return new IterableDiffers([new DefaultIterableDifferFactory()]);
}
var _IterableDiffers = class {
  constructor(factories) {
    this.factories = factories;
  }
  static create(factories, parent) {
    if (parent != null) {
      const copied = parent.factories.slice();
      factories = factories.concat(copied);
    }
    return new _IterableDiffers(factories);
  }
  /**
   * Takes an array of {@link IterableDifferFactory} and returns a provider used to extend the
   * inherited {@link IterableDiffers} instance with the provided factories and return a new
   * {@link IterableDiffers} instance.
   *
   * @usageNotes
   * ### Example
   *
   * The following example shows how to extend an existing list of factories,
   * which will only be applied to the injector for this component and its children.
   * This step is all that's required to make a new {@link IterableDiffer} available.
   *
   * ```
   * @Component({
   *   viewProviders: [
   *     IterableDiffers.extend([new ImmutableListDiffer()])
   *   ]
   * })
   * ```
   */
  static extend(factories) {
    return {
      provide: _IterableDiffers,
      useFactory: (parent) => {
        return _IterableDiffers.create(factories, parent || defaultIterableDiffersFactory());
      },
      // Dependency technically isn't optional, but we can provide a better error message this way.
      deps: [[_IterableDiffers, new SkipSelf(), new Optional()]]
    };
  }
  find(iterable) {
    const factory = this.factories.find((f) => f.supports(iterable));
    if (factory != null) {
      return factory;
    } else {
      throw new RuntimeError(901, ngDevMode && `Cannot find a differ supporting object '${iterable}' of type '${getTypeNameForDebugging(iterable)}'`);
    }
  }
};
var IterableDiffers = _IterableDiffers;
/** @nocollapse */
(() => {
  _IterableDiffers.\u0275prov = \u0275\u0275defineInjectable({ token: _IterableDiffers, providedIn: "root", factory: defaultIterableDiffersFactory });
})();
function getTypeNameForDebugging(type) {
  return type["name"] || typeof type;
}
function defaultKeyValueDiffersFactory() {
  return new KeyValueDiffers([new DefaultKeyValueDifferFactory()]);
}
var _KeyValueDiffers = class {
  constructor(factories) {
    this.factories = factories;
  }
  static create(factories, parent) {
    if (parent) {
      const copied = parent.factories.slice();
      factories = factories.concat(copied);
    }
    return new _KeyValueDiffers(factories);
  }
  /**
   * Takes an array of {@link KeyValueDifferFactory} and returns a provider used to extend the
   * inherited {@link KeyValueDiffers} instance with the provided factories and return a new
   * {@link KeyValueDiffers} instance.
   *
   * @usageNotes
   * ### Example
   *
   * The following example shows how to extend an existing list of factories,
   * which will only be applied to the injector for this component and its children.
   * This step is all that's required to make a new {@link KeyValueDiffer} available.
   *
   * ```
   * @Component({
   *   viewProviders: [
   *     KeyValueDiffers.extend([new ImmutableMapDiffer()])
   *   ]
   * })
   * ```
   */
  static extend(factories) {
    return {
      provide: _KeyValueDiffers,
      useFactory: (parent) => {
        return _KeyValueDiffers.create(factories, parent || defaultKeyValueDiffersFactory());
      },
      // Dependency technically isn't optional, but we can provide a better error message this way.
      deps: [[_KeyValueDiffers, new SkipSelf(), new Optional()]]
    };
  }
  find(kv) {
    const factory = this.factories.find((f) => f.supports(kv));
    if (factory) {
      return factory;
    }
    throw new RuntimeError(901, ngDevMode && `Cannot find a differ supporting object '${kv}'`);
  }
};
var KeyValueDiffers = _KeyValueDiffers;
/** @nocollapse */
(() => {
  _KeyValueDiffers.\u0275prov = \u0275\u0275defineInjectable({ token: _KeyValueDiffers, providedIn: "root", factory: defaultKeyValueDiffersFactory });
})();
var keyValDiff = [new DefaultKeyValueDifferFactory()];
var iterableDiff = [new DefaultIterableDifferFactory()];
var defaultIterableDiffers = new IterableDiffers(iterableDiff);
var defaultKeyValueDiffers = new KeyValueDiffers(keyValDiff);
var platformCore = createPlatformFactory(null, "core", []);
var _ApplicationModule = class {
  // Inject ApplicationRef to make it eager...
  constructor(appRef) {
  }
};
var ApplicationModule = _ApplicationModule;
(() => {
  _ApplicationModule.\u0275fac = function ApplicationModule_Factory(t) {
    return new (t || _ApplicationModule)(\u0275\u0275inject(ApplicationRef));
  };
})();
(() => {
  _ApplicationModule.\u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({ type: _ApplicationModule });
})();
(() => {
  _ApplicationModule.\u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
})();
(function() {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ApplicationModule, [{
    type: NgModule
  }], function() {
    return [{ type: ApplicationRef }];
  }, null);
})();
if (typeof ngDevMode !== "undefined" && ngDevMode) {
  _global.$localize = _global.$localize || function() {
    throw new Error("It looks like your application or one of its dependencies is using i18n.\nAngular 9 introduced a global `$localize()` function that needs to be loaded.\nPlease run `ng add @angular/localize` from the Angular CLI.\n(For non-CLI projects, add `import '@angular/localize/init';` to your `polyfills.ts` file.\nFor server-side rendering applications add the import to your `main.server.ts` file.)");
  };
}

// src/index.ts
var AppComponent = class {
  constructor() {
    this.colors = {
      primary500: import_tokens.colors.primary500
    };
  }
};
AppComponent = __decorateClass([
  Component({
    selector: "app-root",
    template: '<h1 [style.color]="colors.primary500">Hello World</h1>'
  })
], AppComponent);
export {
  AppComponent
};
/*! Bundled license information:

@angular/core/fesm2022/core.mjs:
  (**
   * @license Angular v16.1.1
   * (c) 2010-2022 Google LLC. https://angular.io/
   * License: MIT
   *)
*/
