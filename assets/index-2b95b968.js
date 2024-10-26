function Hy(e, t) {
  for (var n = 0; n < t.length; n++) {
    const r = t[n];
    if (typeof r != "string" && !Array.isArray(r)) {
      for (const a in r)
        if (a !== "default" && !(a in e)) {
          const i = Object.getOwnPropertyDescriptor(r, a);
          i &&
            Object.defineProperty(
              e,
              a,
              i.get ? i : { enumerable: !0, get: () => r[a] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const a of document.querySelectorAll('link[rel="modulepreload"]')) r(a);
  new MutationObserver((a) => {
    for (const i of a)
      if (i.type === "childList")
        for (const o of i.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(a) {
    const i = {};
    return (
      a.integrity && (i.integrity = a.integrity),
      a.referrerPolicy && (i.referrerPolicy = a.referrerPolicy),
      a.crossOrigin === "use-credentials"
        ? (i.credentials = "include")
        : a.crossOrigin === "anonymous"
        ? (i.credentials = "omit")
        : (i.credentials = "same-origin"),
      i
    );
  }
  function r(a) {
    if (a.ep) return;
    a.ep = !0;
    const i = n(a);
    fetch(a.href, i);
  }
})();
var no =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function Mc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var hg = { exports: {} },
  Dl = {},
  gg = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Li = Symbol.for("react.element"),
  Uy = Symbol.for("react.portal"),
  Wy = Symbol.for("react.fragment"),
  Gy = Symbol.for("react.strict_mode"),
  Vy = Symbol.for("react.profiler"),
  Yy = Symbol.for("react.provider"),
  Ky = Symbol.for("react.context"),
  Xy = Symbol.for("react.forward_ref"),
  Qy = Symbol.for("react.suspense"),
  qy = Symbol.for("react.memo"),
  Zy = Symbol.for("react.lazy"),
  Ud = Symbol.iterator;
function Jy(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Ud && e[Ud]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var vg = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  mg = Object.assign,
  yg = {};
function ca(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yg),
    (this.updater = n || vg);
}
ca.prototype.isReactComponent = {};
ca.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ca.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function bg() {}
bg.prototype = ca.prototype;
function zc(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = yg),
    (this.updater = n || vg);
}
var Dc = (zc.prototype = new bg());
Dc.constructor = zc;
mg(Dc, ca.prototype);
Dc.isPureReactComponent = !0;
var Wd = Array.isArray,
  xg = Object.prototype.hasOwnProperty,
  Bc = { current: null },
  wg = { key: !0, ref: !0, __self: !0, __source: !0 };
function Sg(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (i = "" + t.key),
    t))
      xg.call(t, r) && !wg.hasOwnProperty(r) && (a[r] = t[r]);
  var l = arguments.length - 2;
  if (l === 1) a.children = n;
  else if (1 < l) {
    for (var s = Array(l), u = 0; u < l; u++) s[u] = arguments[u + 2];
    a.children = s;
  }
  if (e && e.defaultProps)
    for (r in ((l = e.defaultProps), l)) a[r] === void 0 && (a[r] = l[r]);
  return {
    $$typeof: Li,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: Bc.current,
  };
}
function eb(e, t) {
  return {
    $$typeof: Li,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function Hc(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Li;
}
function tb(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var Gd = /\/+/g;
function _s(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? tb("" + e.key)
    : t.toString(36);
}
function Fo(e, t, n, r, a) {
  var i = typeof e;
  (i === "undefined" || i === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (i) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Li:
          case Uy:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (a = a(o)),
      (e = r === "" ? "." + _s(o, 0) : r),
      Wd(a)
        ? ((n = ""),
          e != null && (n = e.replace(Gd, "$&/") + "/"),
          Fo(a, t, n, "", function (u) {
            return u;
          }))
        : a != null &&
          (Hc(a) &&
            (a = eb(
              a,
              n +
                (!a.key || (o && o.key === a.key)
                  ? ""
                  : ("" + a.key).replace(Gd, "$&/") + "/") +
                e
            )),
          t.push(a)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), Wd(e)))
    for (var l = 0; l < e.length; l++) {
      i = e[l];
      var s = r + _s(i, l);
      o += Fo(i, t, n, s, a);
    }
  else if (((s = Jy(e)), typeof s == "function"))
    for (e = s.call(e), l = 0; !(i = e.next()).done; )
      (i = i.value), (s = r + _s(i, l++)), (o += Fo(i, t, n, s, a));
  else if (i === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function ro(e, t, n) {
  if (e == null) return e;
  var r = [],
    a = 0;
  return (
    Fo(e, r, "", "", function (i) {
      return t.call(n, i, a++);
    }),
    r
  );
}
function nb(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Le = { current: null },
  Io = { transition: null },
  rb = {
    ReactCurrentDispatcher: Le,
    ReactCurrentBatchConfig: Io,
    ReactCurrentOwner: Bc,
  };
V.Children = {
  map: ro,
  forEach: function (e, t, n) {
    ro(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      ro(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      ro(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!Hc(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = ca;
V.Fragment = Wy;
V.Profiler = Vy;
V.PureComponent = zc;
V.StrictMode = Gy;
V.Suspense = Qy;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = rb;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = mg({}, e.props),
    a = e.key,
    i = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((i = t.ref), (o = Bc.current)),
      t.key !== void 0 && (a = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var l = e.type.defaultProps;
    for (s in t)
      xg.call(t, s) &&
        !wg.hasOwnProperty(s) &&
        (r[s] = t[s] === void 0 && l !== void 0 ? l[s] : t[s]);
  }
  var s = arguments.length - 2;
  if (s === 1) r.children = n;
  else if (1 < s) {
    l = Array(s);
    for (var u = 0; u < s; u++) l[u] = arguments[u + 2];
    r.children = l;
  }
  return { $$typeof: Li, type: e.type, key: a, ref: i, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: Ky,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: Yy, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Sg;
V.createFactory = function (e) {
  var t = Sg.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: Xy, render: e };
};
V.isValidElement = Hc;
V.lazy = function (e) {
  return { $$typeof: Zy, _payload: { _status: -1, _result: e }, _init: nb };
};
V.memo = function (e, t) {
  return { $$typeof: qy, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Io.transition;
  Io.transition = {};
  try {
    e();
  } finally {
    Io.transition = t;
  }
};
V.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
V.useCallback = function (e, t) {
  return Le.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Le.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Le.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Le.current.useEffect(e, t);
};
V.useId = function () {
  return Le.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Le.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Le.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Le.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Le.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Le.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Le.current.useRef(e);
};
V.useState = function (e) {
  return Le.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Le.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Le.current.useTransition();
};
V.version = "18.2.0";
gg.exports = V;
var B = gg.exports;
const h = Mc(B),
  Vd = Hy({ __proto__: null, default: h }, [B]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ab = B,
  ib = Symbol.for("react.element"),
  ob = Symbol.for("react.fragment"),
  lb = Object.prototype.hasOwnProperty,
  sb = ab.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ub = { key: !0, ref: !0, __self: !0, __source: !0 };
function kg(e, t, n) {
  var r,
    a = {},
    i = null,
    o = null;
  n !== void 0 && (i = "" + n),
    t.key !== void 0 && (i = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) lb.call(t, r) && !ub.hasOwnProperty(r) && (a[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) a[r] === void 0 && (a[r] = t[r]);
  return {
    $$typeof: ib,
    type: e,
    key: i,
    ref: o,
    props: a,
    _owner: sb.current,
  };
}
Dl.Fragment = ob;
Dl.jsx = kg;
Dl.jsxs = kg;
hg.exports = Dl;
var k = hg.exports,
  Eg = { exports: {} },
  tt = {},
  _g = { exports: {} },
  Cg = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(F, W) {
    var M = F.length;
    F.push(W);
    e: for (; 0 < M; ) {
      var ee = (M - 1) >>> 1,
        X = F[ee];
      if (0 < a(X, W)) (F[ee] = W), (F[M] = X), (M = ee);
      else break e;
    }
  }
  function n(F) {
    return F.length === 0 ? null : F[0];
  }
  function r(F) {
    if (F.length === 0) return null;
    var W = F[0],
      M = F.pop();
    if (M !== W) {
      F[0] = M;
      e: for (var ee = 0, X = F.length, dr = X >>> 1; ee < dr; ) {
        var It = 2 * (ee + 1) - 1,
          Ne = F[It],
          Ke = It + 1,
          In = F[Ke];
        if (0 > a(Ne, M))
          Ke < X && 0 > a(In, Ne)
            ? ((F[ee] = In), (F[Ke] = M), (ee = Ke))
            : ((F[ee] = Ne), (F[It] = M), (ee = It));
        else if (Ke < X && 0 > a(In, M)) (F[ee] = In), (F[Ke] = M), (ee = Ke);
        else break e;
      }
    }
    return W;
  }
  function a(F, W) {
    var M = F.sortIndex - W.sortIndex;
    return M !== 0 ? M : F.id - W.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var i = performance;
    e.unstable_now = function () {
      return i.now();
    };
  } else {
    var o = Date,
      l = o.now();
    e.unstable_now = function () {
      return o.now() - l;
    };
  }
  var s = [],
    u = [],
    c = 1,
    f = null,
    d = 3,
    m = !1,
    x = !1,
    w = !1,
    E = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    p = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function b(F) {
    for (var W = n(u); W !== null; ) {
      if (W.callback === null) r(u);
      else if (W.startTime <= F)
        r(u), (W.sortIndex = W.expirationTime), t(s, W);
      else break;
      W = n(u);
    }
  }
  function _(F) {
    if (((w = !1), b(F), !x))
      if (n(s) !== null) (x = !0), Fn($);
      else {
        var W = n(u);
        W !== null && Ca(_, W.startTime - F);
      }
  }
  function $(F, W) {
    (x = !1), w && ((w = !1), v(j), (j = -1)), (m = !0);
    var M = d;
    try {
      for (
        b(W), f = n(s);
        f !== null && (!(f.expirationTime > W) || (F && !Ye()));

      ) {
        var ee = f.callback;
        if (typeof ee == "function") {
          (f.callback = null), (d = f.priorityLevel);
          var X = ee(f.expirationTime <= W);
          (W = e.unstable_now()),
            typeof X == "function" ? (f.callback = X) : f === n(s) && r(s),
            b(W);
        } else r(s);
        f = n(s);
      }
      if (f !== null) var dr = !0;
      else {
        var It = n(u);
        It !== null && Ca(_, It.startTime - W), (dr = !1);
      }
      return dr;
    } finally {
      (f = null), (d = M), (m = !1);
    }
  }
  var A = !1,
    O = null,
    j = -1,
    G = 5,
    U = -1;
  function Ye() {
    return !(e.unstable_now() - U < G);
  }
  function Rn() {
    if (O !== null) {
      var F = e.unstable_now();
      U = F;
      var W = !0;
      try {
        W = O(!0, F);
      } finally {
        W ? Nn() : ((A = !1), (O = null));
      }
    } else A = !1;
  }
  var Nn;
  if (typeof p == "function")
    Nn = function () {
      p(Rn);
    };
  else if (typeof MessageChannel < "u") {
    var to = new MessageChannel(),
      Es = to.port2;
    (to.port1.onmessage = Rn),
      (Nn = function () {
        Es.postMessage(null);
      });
  } else
    Nn = function () {
      E(Rn, 0);
    };
  function Fn(F) {
    (O = F), A || ((A = !0), Nn());
  }
  function Ca(F, W) {
    j = E(function () {
      F(e.unstable_now());
    }, W);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (F) {
      F.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      x || m || ((x = !0), Fn($));
    }),
    (e.unstable_forceFrameRate = function (F) {
      0 > F || 125 < F
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (G = 0 < F ? Math.floor(1e3 / F) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return d;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(s);
    }),
    (e.unstable_next = function (F) {
      switch (d) {
        case 1:
        case 2:
        case 3:
          var W = 3;
          break;
        default:
          W = d;
      }
      var M = d;
      d = W;
      try {
        return F();
      } finally {
        d = M;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (F, W) {
      switch (F) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          F = 3;
      }
      var M = d;
      d = F;
      try {
        return W();
      } finally {
        d = M;
      }
    }),
    (e.unstable_scheduleCallback = function (F, W, M) {
      var ee = e.unstable_now();
      switch (
        (typeof M == "object" && M !== null
          ? ((M = M.delay), (M = typeof M == "number" && 0 < M ? ee + M : ee))
          : (M = ee),
        F)
      ) {
        case 1:
          var X = -1;
          break;
        case 2:
          X = 250;
          break;
        case 5:
          X = 1073741823;
          break;
        case 4:
          X = 1e4;
          break;
        default:
          X = 5e3;
      }
      return (
        (X = M + X),
        (F = {
          id: c++,
          callback: W,
          priorityLevel: F,
          startTime: M,
          expirationTime: X,
          sortIndex: -1,
        }),
        M > ee
          ? ((F.sortIndex = M),
            t(u, F),
            n(s) === null &&
              F === n(u) &&
              (w ? (v(j), (j = -1)) : (w = !0), Ca(_, M - ee)))
          : ((F.sortIndex = X), t(s, F), x || m || ((x = !0), Fn($))),
        F
      );
    }),
    (e.unstable_shouldYield = Ye),
    (e.unstable_wrapCallback = function (F) {
      var W = d;
      return function () {
        var M = d;
        d = W;
        try {
          return F.apply(this, arguments);
        } finally {
          d = M;
        }
      };
    });
})(Cg);
_g.exports = Cg;
var cb = _g.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var $g = B,
  Je = cb;
function T(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Og = new Set(),
  li = {};
function rr(e, t) {
  ta(e, t), ta(e + "Capture", t);
}
function ta(e, t) {
  for (li[e] = t, e = 0; e < t.length; e++) Og.add(t[e]);
}
var Gt = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  yu = Object.prototype.hasOwnProperty,
  fb =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Yd = {},
  Kd = {};
function db(e) {
  return yu.call(Kd, e)
    ? !0
    : yu.call(Yd, e)
    ? !1
    : fb.test(e)
    ? (Kd[e] = !0)
    : ((Yd[e] = !0), !1);
}
function pb(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function hb(e, t, n, r) {
  if (t === null || typeof t > "u" || pb(e, t, n, r)) return !0;
  if (r) return !1;
  if (n !== null)
    switch (n.type) {
      case 3:
        return !t;
      case 4:
        return t === !1;
      case 5:
        return isNaN(t);
      case 6:
        return isNaN(t) || 1 > t;
    }
  return !1;
}
function Me(e, t, n, r, a, i, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = a),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = i),
    (this.removeEmptyString = o);
}
var Oe = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Me(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Oe[t] = new Me(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Oe[e] = new Me(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Oe[e] = new Me(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Oe[e] = new Me(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Oe[e] = new Me(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Oe[e] = new Me(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Oe[e] = new Me(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Oe[e] = new Me(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var Uc = /[\-:]([a-z])/g;
function Wc(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uc, Wc);
    Oe[t] = new Me(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(Uc, Wc);
    Oe[t] = new Me(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(Uc, Wc);
  Oe[t] = new Me(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Oe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Oe.xlinkHref = new Me(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Oe[e] = new Me(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function Gc(e, t, n, r) {
  var a = Oe.hasOwnProperty(t) ? Oe[t] : null;
  (a !== null
    ? a.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (hb(t, n, a, r) && (n = null),
    r || a === null
      ? db(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : a.mustUseProperty
      ? (e[a.propertyName] = n === null ? (a.type === 3 ? !1 : "") : n)
      : ((t = a.attributeName),
        (r = a.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((a = a.type),
            (n = a === 3 || (a === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var Zt = $g.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  ao = Symbol.for("react.element"),
  jr = Symbol.for("react.portal"),
  Rr = Symbol.for("react.fragment"),
  Vc = Symbol.for("react.strict_mode"),
  bu = Symbol.for("react.profiler"),
  Ag = Symbol.for("react.provider"),
  Tg = Symbol.for("react.context"),
  Yc = Symbol.for("react.forward_ref"),
  xu = Symbol.for("react.suspense"),
  wu = Symbol.for("react.suspense_list"),
  Kc = Symbol.for("react.memo"),
  on = Symbol.for("react.lazy"),
  Pg = Symbol.for("react.offscreen"),
  Xd = Symbol.iterator;
function Oa(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (Xd && e[Xd]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var pe = Object.assign,
  Cs;
function Ba(e) {
  if (Cs === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Cs = (t && t[1]) || "";
    }
  return (
    `
` +
    Cs +
    e
  );
}
var $s = !1;
function Os(e, t) {
  if (!e || $s) return "";
  $s = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (u) {
          var r = u;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (u) {
          r = u;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (u) {
        r = u;
      }
      e();
    }
  } catch (u) {
    if (u && r && typeof u.stack == "string") {
      for (
        var a = u.stack.split(`
`),
          i = r.stack.split(`
`),
          o = a.length - 1,
          l = i.length - 1;
        1 <= o && 0 <= l && a[o] !== i[l];

      )
        l--;
      for (; 1 <= o && 0 <= l; o--, l--)
        if (a[o] !== i[l]) {
          if (o !== 1 || l !== 1)
            do
              if ((o--, l--, 0 > l || a[o] !== i[l])) {
                var s =
                  `
` + a[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    s.includes("<anonymous>") &&
                    (s = s.replace("<anonymous>", e.displayName)),
                  s
                );
              }
            while (1 <= o && 0 <= l);
          break;
        }
    }
  } finally {
    ($s = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? Ba(e) : "";
}
function gb(e) {
  switch (e.tag) {
    case 5:
      return Ba(e.type);
    case 16:
      return Ba("Lazy");
    case 13:
      return Ba("Suspense");
    case 19:
      return Ba("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = Os(e.type, !1)), e;
    case 11:
      return (e = Os(e.type.render, !1)), e;
    case 1:
      return (e = Os(e.type, !0)), e;
    default:
      return "";
  }
}
function Su(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Rr:
      return "Fragment";
    case jr:
      return "Portal";
    case bu:
      return "Profiler";
    case Vc:
      return "StrictMode";
    case xu:
      return "Suspense";
    case wu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Tg:
        return (e.displayName || "Context") + ".Consumer";
      case Ag:
        return (e._context.displayName || "Context") + ".Provider";
      case Yc:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case Kc:
        return (
          (t = e.displayName || null), t !== null ? t : Su(e.type) || "Memo"
        );
      case on:
        (t = e._payload), (e = e._init);
        try {
          return Su(e(t));
        } catch {}
    }
  return null;
}
function vb(e) {
  var t = e.type;
  switch (e.tag) {
    case 24:
      return "Cache";
    case 9:
      return (t.displayName || "Context") + ".Consumer";
    case 10:
      return (t._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return t;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Su(t);
    case 8:
      return t === Vc ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function wn(e) {
  switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return e;
    case "object":
      return e;
    default:
      return "";
  }
}
function jg(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function mb(e) {
  var t = jg(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var a = n.get,
      i = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return a.call(this);
        },
        set: function (o) {
          (r = "" + o), i.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function io(e) {
  e._valueTracker || (e._valueTracker = mb(e));
}
function Rg(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = jg(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function Jo(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function ku(e, t) {
  var n = t.checked;
  return pe({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function Qd(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = wn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function Ng(e, t) {
  (t = t.checked), t != null && Gc(e, "checked", t, !1);
}
function Eu(e, t) {
  Ng(e, t);
  var n = wn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? _u(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && _u(e, t.type, wn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function qd(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function _u(e, t, n) {
  (t !== "number" || Jo(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ha = Array.isArray;
function Yr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var a = 0; a < n.length; a++) t["$" + n[a]] = !0;
    for (n = 0; n < e.length; n++)
      (a = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== a && (e[n].selected = a),
        a && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + wn(n), t = null, a = 0; a < e.length; a++) {
      if (e[a].value === n) {
        (e[a].selected = !0), r && (e[a].defaultSelected = !0);
        return;
      }
      t !== null || e[a].disabled || (t = e[a]);
    }
    t !== null && (t.selected = !0);
  }
}
function Cu(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(T(91));
  return pe({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function Zd(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(T(92));
      if (Ha(n)) {
        if (1 < n.length) throw Error(T(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: wn(n) };
}
function Fg(e, t) {
  var n = wn(t.value),
    r = wn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function Jd(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function Ig(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function $u(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? Ig(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var oo,
  Lg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, a) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, a);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        oo = oo || document.createElement("div"),
          oo.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = oo.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function si(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Ka = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  yb = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ka).forEach(function (e) {
  yb.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Ka[t] = Ka[e]);
  });
});
function Mg(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Ka.hasOwnProperty(e) && Ka[e])
    ? ("" + t).trim()
    : t + "px";
}
function zg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        a = Mg(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, a) : (e[n] = a);
    }
}
var bb = pe(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Ou(e, t) {
  if (t) {
    if (bb[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(T(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(T(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(T(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(T(62));
  }
}
function Au(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
  switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Tu = null;
function Xc(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var Pu = null,
  Kr = null,
  Xr = null;
function ep(e) {
  if ((e = Di(e))) {
    if (typeof Pu != "function") throw Error(T(280));
    var t = e.stateNode;
    t && ((t = Gl(t)), Pu(e.stateNode, e.type, t));
  }
}
function Dg(e) {
  Kr ? (Xr ? Xr.push(e) : (Xr = [e])) : (Kr = e);
}
function Bg() {
  if (Kr) {
    var e = Kr,
      t = Xr;
    if (((Xr = Kr = null), ep(e), t)) for (e = 0; e < t.length; e++) ep(t[e]);
  }
}
function Hg(e, t) {
  return e(t);
}
function Ug() {}
var As = !1;
function Wg(e, t, n) {
  if (As) return e(t, n);
  As = !0;
  try {
    return Hg(e, t, n);
  } finally {
    (As = !1), (Kr !== null || Xr !== null) && (Ug(), Bg());
  }
}
function ui(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Gl(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
    case "onClick":
    case "onClickCapture":
    case "onDoubleClick":
    case "onDoubleClickCapture":
    case "onMouseDown":
    case "onMouseDownCapture":
    case "onMouseMove":
    case "onMouseMoveCapture":
    case "onMouseUp":
    case "onMouseUpCapture":
    case "onMouseEnter":
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(T(231, t, typeof n));
  return n;
}
var ju = !1;
if (Gt)
  try {
    var Aa = {};
    Object.defineProperty(Aa, "passive", {
      get: function () {
        ju = !0;
      },
    }),
      window.addEventListener("test", Aa, Aa),
      window.removeEventListener("test", Aa, Aa);
  } catch {
    ju = !1;
  }
function xb(e, t, n, r, a, i, o, l, s) {
  var u = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, u);
  } catch (c) {
    this.onError(c);
  }
}
var Xa = !1,
  el = null,
  tl = !1,
  Ru = null,
  wb = {
    onError: function (e) {
      (Xa = !0), (el = e);
    },
  };
function Sb(e, t, n, r, a, i, o, l, s) {
  (Xa = !1), (el = null), xb.apply(wb, arguments);
}
function kb(e, t, n, r, a, i, o, l, s) {
  if ((Sb.apply(this, arguments), Xa)) {
    if (Xa) {
      var u = el;
      (Xa = !1), (el = null);
    } else throw Error(T(198));
    tl || ((tl = !0), (Ru = u));
  }
}
function ar(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function Gg(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function tp(e) {
  if (ar(e) !== e) throw Error(T(188));
}
function Eb(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = ar(e)), t === null)) throw Error(T(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var a = n.return;
    if (a === null) break;
    var i = a.alternate;
    if (i === null) {
      if (((r = a.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (a.child === i.child) {
      for (i = a.child; i; ) {
        if (i === n) return tp(a), e;
        if (i === r) return tp(a), t;
        i = i.sibling;
      }
      throw Error(T(188));
    }
    if (n.return !== r.return) (n = a), (r = i);
    else {
      for (var o = !1, l = a.child; l; ) {
        if (l === n) {
          (o = !0), (n = a), (r = i);
          break;
        }
        if (l === r) {
          (o = !0), (r = a), (n = i);
          break;
        }
        l = l.sibling;
      }
      if (!o) {
        for (l = i.child; l; ) {
          if (l === n) {
            (o = !0), (n = i), (r = a);
            break;
          }
          if (l === r) {
            (o = !0), (r = i), (n = a);
            break;
          }
          l = l.sibling;
        }
        if (!o) throw Error(T(189));
      }
    }
    if (n.alternate !== r) throw Error(T(190));
  }
  if (n.tag !== 3) throw Error(T(188));
  return n.stateNode.current === n ? e : t;
}
function Vg(e) {
  return (e = Eb(e)), e !== null ? Yg(e) : null;
}
function Yg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = Yg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var Kg = Je.unstable_scheduleCallback,
  np = Je.unstable_cancelCallback,
  _b = Je.unstable_shouldYield,
  Cb = Je.unstable_requestPaint,
  me = Je.unstable_now,
  $b = Je.unstable_getCurrentPriorityLevel,
  Qc = Je.unstable_ImmediatePriority,
  Xg = Je.unstable_UserBlockingPriority,
  nl = Je.unstable_NormalPriority,
  Ob = Je.unstable_LowPriority,
  Qg = Je.unstable_IdlePriority,
  Bl = null,
  Pt = null;
function Ab(e) {
  if (Pt && typeof Pt.onCommitFiberRoot == "function")
    try {
      Pt.onCommitFiberRoot(Bl, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var xt = Math.clz32 ? Math.clz32 : jb,
  Tb = Math.log,
  Pb = Math.LN2;
function jb(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((Tb(e) / Pb) | 0)) | 0;
}
var lo = 64,
  so = 4194304;
function Ua(e) {
  switch (e & -e) {
    case 1:
      return 1;
    case 2:
      return 2;
    case 4:
      return 4;
    case 8:
      return 8;
    case 16:
      return 16;
    case 32:
      return 32;
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return e & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return e;
  }
}
function rl(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    a = e.suspendedLanes,
    i = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var l = o & ~a;
    l !== 0 ? (r = Ua(l)) : ((i &= o), i !== 0 && (r = Ua(i)));
  } else (o = n & ~a), o !== 0 ? (r = Ua(o)) : i !== 0 && (r = Ua(i));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & a) &&
    ((a = r & -r), (i = t & -t), a >= i || (a === 16 && (i & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - xt(t)), (a = 1 << n), (r |= e[n]), (t &= ~a);
  return r;
}
function Rb(e, t) {
  switch (e) {
    case 1:
    case 2:
    case 4:
      return t + 250;
    case 8:
    case 16:
    case 32:
    case 64:
    case 128:
    case 256:
    case 512:
    case 1024:
    case 2048:
    case 4096:
    case 8192:
    case 16384:
    case 32768:
    case 65536:
    case 131072:
    case 262144:
    case 524288:
    case 1048576:
    case 2097152:
      return t + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Nb(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      a = e.expirationTimes,
      i = e.pendingLanes;
    0 < i;

  ) {
    var o = 31 - xt(i),
      l = 1 << o,
      s = a[o];
    s === -1
      ? (!(l & n) || l & r) && (a[o] = Rb(l, t))
      : s <= t && (e.expiredLanes |= l),
      (i &= ~l);
  }
}
function Nu(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function qg() {
  var e = lo;
  return (lo <<= 1), !(lo & 4194240) && (lo = 64), e;
}
function Ts(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Mi(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - xt(t)),
    (e[t] = n);
}
function Fb(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var a = 31 - xt(n),
      i = 1 << a;
    (t[a] = 0), (r[a] = -1), (e[a] = -1), (n &= ~i);
  }
}
function qc(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - xt(n),
      a = 1 << r;
    (a & t) | (e[r] & t) && (e[r] |= t), (n &= ~a);
  }
}
var J = 0;
function Zg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var Jg,
  Zc,
  ev,
  tv,
  nv,
  Fu = !1,
  uo = [],
  pn = null,
  hn = null,
  gn = null,
  ci = new Map(),
  fi = new Map(),
  sn = [],
  Ib =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function rp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      pn = null;
      break;
    case "dragenter":
    case "dragleave":
      hn = null;
      break;
    case "mouseover":
    case "mouseout":
      gn = null;
      break;
    case "pointerover":
    case "pointerout":
      ci.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      fi.delete(t.pointerId);
  }
}
function Ta(e, t, n, r, a, i) {
  return e === null || e.nativeEvent !== i
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: i,
        targetContainers: [a],
      }),
      t !== null && ((t = Di(t)), t !== null && Zc(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      a !== null && t.indexOf(a) === -1 && t.push(a),
      e);
}
function Lb(e, t, n, r, a) {
  switch (t) {
    case "focusin":
      return (pn = Ta(pn, e, t, n, r, a)), !0;
    case "dragenter":
      return (hn = Ta(hn, e, t, n, r, a)), !0;
    case "mouseover":
      return (gn = Ta(gn, e, t, n, r, a)), !0;
    case "pointerover":
      var i = a.pointerId;
      return ci.set(i, Ta(ci.get(i) || null, e, t, n, r, a)), !0;
    case "gotpointercapture":
      return (
        (i = a.pointerId), fi.set(i, Ta(fi.get(i) || null, e, t, n, r, a)), !0
      );
  }
  return !1;
}
function rv(e) {
  var t = Bn(e.target);
  if (t !== null) {
    var n = ar(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = Gg(n)), t !== null)) {
          (e.blockedOn = t),
            nv(e.priority, function () {
              ev(n);
            });
          return;
        }
      } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
        e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
        return;
      }
    }
  }
  e.blockedOn = null;
}
function Lo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = Iu(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (Tu = r), n.target.dispatchEvent(r), (Tu = null);
    } else return (t = Di(n)), t !== null && Zc(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function ap(e, t, n) {
  Lo(e) && n.delete(t);
}
function Mb() {
  (Fu = !1),
    pn !== null && Lo(pn) && (pn = null),
    hn !== null && Lo(hn) && (hn = null),
    gn !== null && Lo(gn) && (gn = null),
    ci.forEach(ap),
    fi.forEach(ap);
}
function Pa(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    Fu ||
      ((Fu = !0),
      Je.unstable_scheduleCallback(Je.unstable_NormalPriority, Mb)));
}
function di(e) {
  function t(a) {
    return Pa(a, e);
  }
  if (0 < uo.length) {
    Pa(uo[0], e);
    for (var n = 1; n < uo.length; n++) {
      var r = uo[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    pn !== null && Pa(pn, e),
      hn !== null && Pa(hn, e),
      gn !== null && Pa(gn, e),
      ci.forEach(t),
      fi.forEach(t),
      n = 0;
    n < sn.length;
    n++
  )
    (r = sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < sn.length && ((n = sn[0]), n.blockedOn === null); )
    rv(n), n.blockedOn === null && sn.shift();
}
var Qr = Zt.ReactCurrentBatchConfig,
  al = !0;
function zb(e, t, n, r) {
  var a = J,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (J = 1), Jc(e, t, n, r);
  } finally {
    (J = a), (Qr.transition = i);
  }
}
function Db(e, t, n, r) {
  var a = J,
    i = Qr.transition;
  Qr.transition = null;
  try {
    (J = 4), Jc(e, t, n, r);
  } finally {
    (J = a), (Qr.transition = i);
  }
}
function Jc(e, t, n, r) {
  if (al) {
    var a = Iu(e, t, n, r);
    if (a === null) Ds(e, t, r, il, n), rp(e, r);
    else if (Lb(a, e, t, n, r)) r.stopPropagation();
    else if ((rp(e, r), t & 4 && -1 < Ib.indexOf(e))) {
      for (; a !== null; ) {
        var i = Di(a);
        if (
          (i !== null && Jg(i),
          (i = Iu(e, t, n, r)),
          i === null && Ds(e, t, r, il, n),
          i === a)
        )
          break;
        a = i;
      }
      a !== null && r.stopPropagation();
    } else Ds(e, t, r, null, n);
  }
}
var il = null;
function Iu(e, t, n, r) {
  if (((il = null), (e = Xc(r)), (e = Bn(e)), e !== null))
    if (((t = ar(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = Gg(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (il = e), null;
}
function av(e) {
  switch (e) {
    case "cancel":
    case "click":
    case "close":
    case "contextmenu":
    case "copy":
    case "cut":
    case "auxclick":
    case "dblclick":
    case "dragend":
    case "dragstart":
    case "drop":
    case "focusin":
    case "focusout":
    case "input":
    case "invalid":
    case "keydown":
    case "keypress":
    case "keyup":
    case "mousedown":
    case "mouseup":
    case "paste":
    case "pause":
    case "play":
    case "pointercancel":
    case "pointerdown":
    case "pointerup":
    case "ratechange":
    case "reset":
    case "resize":
    case "seeked":
    case "submit":
    case "touchcancel":
    case "touchend":
    case "touchstart":
    case "volumechange":
    case "change":
    case "selectionchange":
    case "textInput":
    case "compositionstart":
    case "compositionend":
    case "compositionupdate":
    case "beforeblur":
    case "afterblur":
    case "beforeinput":
    case "blur":
    case "fullscreenchange":
    case "focus":
    case "hashchange":
    case "popstate":
    case "select":
    case "selectstart":
      return 1;
    case "drag":
    case "dragenter":
    case "dragexit":
    case "dragleave":
    case "dragover":
    case "mousemove":
    case "mouseout":
    case "mouseover":
    case "pointermove":
    case "pointerout":
    case "pointerover":
    case "scroll":
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch ($b()) {
        case Qc:
          return 1;
        case Xg:
          return 4;
        case nl:
        case Ob:
          return 16;
        case Qg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var cn = null,
  ef = null,
  Mo = null;
function iv() {
  if (Mo) return Mo;
  var e,
    t = ef,
    n = t.length,
    r,
    a = "value" in cn ? cn.value : cn.textContent,
    i = a.length;
  for (e = 0; e < n && t[e] === a[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === a[i - r]; r++);
  return (Mo = a.slice(e, 1 < r ? 1 - r : void 0));
}
function zo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function co() {
  return !0;
}
function ip() {
  return !1;
}
function nt(e) {
  function t(n, r, a, i, o) {
    (this._reactName = n),
      (this._targetInst = a),
      (this.type = r),
      (this.nativeEvent = i),
      (this.target = o),
      (this.currentTarget = null);
    for (var l in e)
      e.hasOwnProperty(l) && ((n = e[l]), (this[l] = n ? n(i) : i[l]));
    return (
      (this.isDefaultPrevented = (
        i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
      )
        ? co
        : ip),
      (this.isPropagationStopped = ip),
      this
    );
  }
  return (
    pe(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = co));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = co));
      },
      persist: function () {},
      isPersistent: co,
    }),
    t
  );
}
var fa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  tf = nt(fa),
  zi = pe({}, fa, { view: 0, detail: 0 }),
  Bb = nt(zi),
  Ps,
  js,
  ja,
  Hl = pe({}, zi, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nf,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== ja &&
            (ja && e.type === "mousemove"
              ? ((Ps = e.screenX - ja.screenX), (js = e.screenY - ja.screenY))
              : (js = Ps = 0),
            (ja = e)),
          Ps);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : js;
    },
  }),
  op = nt(Hl),
  Hb = pe({}, Hl, { dataTransfer: 0 }),
  Ub = nt(Hb),
  Wb = pe({}, zi, { relatedTarget: 0 }),
  Rs = nt(Wb),
  Gb = pe({}, fa, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Vb = nt(Gb),
  Yb = pe({}, fa, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  Kb = nt(Yb),
  Xb = pe({}, fa, { data: 0 }),
  lp = nt(Xb),
  Qb = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified",
  },
  qb = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta",
  },
  Zb = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Jb(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = Zb[e]) ? !!t[e] : !1;
}
function nf() {
  return Jb;
}
var ex = pe({}, zi, {
    key: function (e) {
      if (e.key) {
        var t = Qb[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = zo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? qb[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nf,
    charCode: function (e) {
      return e.type === "keypress" ? zo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? zo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  tx = nt(ex),
  nx = pe({}, Hl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  sp = nt(nx),
  rx = pe({}, zi, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nf,
  }),
  ax = nt(rx),
  ix = pe({}, fa, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  ox = nt(ix),
  lx = pe({}, Hl, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  sx = nt(lx),
  ux = [9, 13, 27, 32],
  rf = Gt && "CompositionEvent" in window,
  Qa = null;
Gt && "documentMode" in document && (Qa = document.documentMode);
var cx = Gt && "TextEvent" in window && !Qa,
  ov = Gt && (!rf || (Qa && 8 < Qa && 11 >= Qa)),
  up = String.fromCharCode(32),
  cp = !1;
function lv(e, t) {
  switch (e) {
    case "keyup":
      return ux.indexOf(t.keyCode) !== -1;
    case "keydown":
      return t.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function sv(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Nr = !1;
function fx(e, t) {
  switch (e) {
    case "compositionend":
      return sv(t);
    case "keypress":
      return t.which !== 32 ? null : ((cp = !0), up);
    case "textInput":
      return (e = t.data), e === up && cp ? null : e;
    default:
      return null;
  }
}
function dx(e, t) {
  if (Nr)
    return e === "compositionend" || (!rf && lv(e, t))
      ? ((e = iv()), (Mo = ef = cn = null), (Nr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return ov && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var px = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function fp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!px[e.type] : t === "textarea";
}
function uv(e, t, n, r) {
  Dg(r),
    (t = ol(t, "onChange")),
    0 < t.length &&
      ((n = new tf("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var qa = null,
  pi = null;
function hx(e) {
  xv(e, 0);
}
function Ul(e) {
  var t = Lr(e);
  if (Rg(t)) return e;
}
function gx(e, t) {
  if (e === "change") return t;
}
var cv = !1;
if (Gt) {
  var Ns;
  if (Gt) {
    var Fs = "oninput" in document;
    if (!Fs) {
      var dp = document.createElement("div");
      dp.setAttribute("oninput", "return;"),
        (Fs = typeof dp.oninput == "function");
    }
    Ns = Fs;
  } else Ns = !1;
  cv = Ns && (!document.documentMode || 9 < document.documentMode);
}
function pp() {
  qa && (qa.detachEvent("onpropertychange", fv), (pi = qa = null));
}
function fv(e) {
  if (e.propertyName === "value" && Ul(pi)) {
    var t = [];
    uv(t, pi, e, Xc(e)), Wg(hx, t);
  }
}
function vx(e, t, n) {
  e === "focusin"
    ? (pp(), (qa = t), (pi = n), qa.attachEvent("onpropertychange", fv))
    : e === "focusout" && pp();
}
function mx(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Ul(pi);
}
function yx(e, t) {
  if (e === "click") return Ul(t);
}
function bx(e, t) {
  if (e === "input" || e === "change") return Ul(t);
}
function xx(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var St = typeof Object.is == "function" ? Object.is : xx;
function hi(e, t) {
  if (St(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var a = n[r];
    if (!yu.call(t, a) || !St(e[a], t[a])) return !1;
  }
  return !0;
}
function hp(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function gp(e, t) {
  var n = hp(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
        return { node: n, offset: t - e };
      e = r;
    }
    e: {
      for (; n; ) {
        if (n.nextSibling) {
          n = n.nextSibling;
          break e;
        }
        n = n.parentNode;
      }
      n = void 0;
    }
    n = hp(n);
  }
}
function dv(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? dv(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function pv() {
  for (var e = window, t = Jo(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = Jo(e.document);
  }
  return t;
}
function af(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function wx(e) {
  var t = pv(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    dv(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && af(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var a = n.textContent.length,
          i = Math.min(r.start, a);
        (r = r.end === void 0 ? i : Math.min(r.end, a)),
          !e.extend && i > r && ((a = r), (r = i), (i = a)),
          (a = gp(n, i));
        var o = gp(n, r);
        a &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== a.node ||
            e.anchorOffset !== a.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(a.node, a.offset),
          e.removeAllRanges(),
          i > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var Sx = Gt && "documentMode" in document && 11 >= document.documentMode,
  Fr = null,
  Lu = null,
  Za = null,
  Mu = !1;
function vp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  Mu ||
    Fr == null ||
    Fr !== Jo(r) ||
    ((r = Fr),
    "selectionStart" in r && af(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Za && hi(Za, r)) ||
      ((Za = r),
      (r = ol(Lu, "onSelect")),
      0 < r.length &&
        ((t = new tf("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = Fr))));
}
function fo(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Ir = {
    animationend: fo("Animation", "AnimationEnd"),
    animationiteration: fo("Animation", "AnimationIteration"),
    animationstart: fo("Animation", "AnimationStart"),
    transitionend: fo("Transition", "TransitionEnd"),
  },
  Is = {},
  hv = {};
Gt &&
  ((hv = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ir.animationend.animation,
    delete Ir.animationiteration.animation,
    delete Ir.animationstart.animation),
  "TransitionEvent" in window || delete Ir.transitionend.transition);
function Wl(e) {
  if (Is[e]) return Is[e];
  if (!Ir[e]) return e;
  var t = Ir[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in hv) return (Is[e] = t[n]);
  return e;
}
var gv = Wl("animationend"),
  vv = Wl("animationiteration"),
  mv = Wl("animationstart"),
  yv = Wl("transitionend"),
  bv = new Map(),
  mp =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function An(e, t) {
  bv.set(e, t), rr(t, [e]);
}
for (var Ls = 0; Ls < mp.length; Ls++) {
  var Ms = mp[Ls],
    kx = Ms.toLowerCase(),
    Ex = Ms[0].toUpperCase() + Ms.slice(1);
  An(kx, "on" + Ex);
}
An(gv, "onAnimationEnd");
An(vv, "onAnimationIteration");
An(mv, "onAnimationStart");
An("dblclick", "onDoubleClick");
An("focusin", "onFocus");
An("focusout", "onBlur");
An(yv, "onTransitionEnd");
ta("onMouseEnter", ["mouseout", "mouseover"]);
ta("onMouseLeave", ["mouseout", "mouseover"]);
ta("onPointerEnter", ["pointerout", "pointerover"]);
ta("onPointerLeave", ["pointerout", "pointerover"]);
rr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
rr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
rr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
rr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
rr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Wa =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  _x = new Set("cancel close invalid load scroll toggle".split(" ").concat(Wa));
function yp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), kb(r, t, void 0, e), (e.currentTarget = null);
}
function xv(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      a = r.event;
    r = r.listeners;
    e: {
      var i = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var l = r[o],
            s = l.instance,
            u = l.currentTarget;
          if (((l = l.listener), s !== i && a.isPropagationStopped())) break e;
          yp(a, l, u), (i = s);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((l = r[o]),
            (s = l.instance),
            (u = l.currentTarget),
            (l = l.listener),
            s !== i && a.isPropagationStopped())
          )
            break e;
          yp(a, l, u), (i = s);
        }
    }
  }
  if (tl) throw ((e = Ru), (tl = !1), (Ru = null), e);
}
function re(e, t) {
  var n = t[Uu];
  n === void 0 && (n = t[Uu] = new Set());
  var r = e + "__bubble";
  n.has(r) || (wv(t, e, 2, !1), n.add(r));
}
function zs(e, t, n) {
  var r = 0;
  t && (r |= 4), wv(n, e, r, t);
}
var po = "_reactListening" + Math.random().toString(36).slice(2);
function gi(e) {
  if (!e[po]) {
    (e[po] = !0),
      Og.forEach(function (n) {
        n !== "selectionchange" && (_x.has(n) || zs(n, !1, e), zs(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[po] || ((t[po] = !0), zs("selectionchange", !1, t));
  }
}
function wv(e, t, n, r) {
  switch (av(t)) {
    case 1:
      var a = zb;
      break;
    case 4:
      a = Db;
      break;
    default:
      a = Jc;
  }
  (n = a.bind(null, t, n, e)),
    (a = void 0),
    !ju ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (a = !0),
    r
      ? a !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: a })
        : e.addEventListener(t, n, !0)
      : a !== void 0
      ? e.addEventListener(t, n, { passive: a })
      : e.addEventListener(t, n, !1);
}
function Ds(e, t, n, r, a) {
  var i = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var l = r.stateNode.containerInfo;
        if (l === a || (l.nodeType === 8 && l.parentNode === a)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var s = o.tag;
            if (
              (s === 3 || s === 4) &&
              ((s = o.stateNode.containerInfo),
              s === a || (s.nodeType === 8 && s.parentNode === a))
            )
              return;
            o = o.return;
          }
        for (; l !== null; ) {
          if (((o = Bn(l)), o === null)) return;
          if (((s = o.tag), s === 5 || s === 6)) {
            r = i = o;
            continue e;
          }
          l = l.parentNode;
        }
      }
      r = r.return;
    }
  Wg(function () {
    var u = i,
      c = Xc(n),
      f = [];
    e: {
      var d = bv.get(e);
      if (d !== void 0) {
        var m = tf,
          x = e;
        switch (e) {
          case "keypress":
            if (zo(n) === 0) break e;
          case "keydown":
          case "keyup":
            m = tx;
            break;
          case "focusin":
            (x = "focus"), (m = Rs);
            break;
          case "focusout":
            (x = "blur"), (m = Rs);
            break;
          case "beforeblur":
          case "afterblur":
            m = Rs;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            m = op;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            m = Ub;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            m = ax;
            break;
          case gv:
          case vv:
          case mv:
            m = Vb;
            break;
          case yv:
            m = ox;
            break;
          case "scroll":
            m = Bb;
            break;
          case "wheel":
            m = sx;
            break;
          case "copy":
          case "cut":
          case "paste":
            m = Kb;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            m = sp;
        }
        var w = (t & 4) !== 0,
          E = !w && e === "scroll",
          v = w ? (d !== null ? d + "Capture" : null) : d;
        w = [];
        for (var p = u, b; p !== null; ) {
          b = p;
          var _ = b.stateNode;
          if (
            (b.tag === 5 &&
              _ !== null &&
              ((b = _),
              v !== null && ((_ = ui(p, v)), _ != null && w.push(vi(p, _, b)))),
            E)
          )
            break;
          p = p.return;
        }
        0 < w.length &&
          ((d = new m(d, x, null, n, c)), f.push({ event: d, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((d = e === "mouseover" || e === "pointerover"),
          (m = e === "mouseout" || e === "pointerout"),
          d &&
            n !== Tu &&
            (x = n.relatedTarget || n.fromElement) &&
            (Bn(x) || x[Vt]))
        )
          break e;
        if (
          (m || d) &&
          ((d =
            c.window === c
              ? c
              : (d = c.ownerDocument)
              ? d.defaultView || d.parentWindow
              : window),
          m
            ? ((x = n.relatedTarget || n.toElement),
              (m = u),
              (x = x ? Bn(x) : null),
              x !== null &&
                ((E = ar(x)), x !== E || (x.tag !== 5 && x.tag !== 6)) &&
                (x = null))
            : ((m = null), (x = u)),
          m !== x)
        ) {
          if (
            ((w = op),
            (_ = "onMouseLeave"),
            (v = "onMouseEnter"),
            (p = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = sp),
              (_ = "onPointerLeave"),
              (v = "onPointerEnter"),
              (p = "pointer")),
            (E = m == null ? d : Lr(m)),
            (b = x == null ? d : Lr(x)),
            (d = new w(_, p + "leave", m, n, c)),
            (d.target = E),
            (d.relatedTarget = b),
            (_ = null),
            Bn(c) === u &&
              ((w = new w(v, p + "enter", x, n, c)),
              (w.target = b),
              (w.relatedTarget = E),
              (_ = w)),
            (E = _),
            m && x)
          )
            t: {
              for (w = m, v = x, p = 0, b = w; b; b = pr(b)) p++;
              for (b = 0, _ = v; _; _ = pr(_)) b++;
              for (; 0 < p - b; ) (w = pr(w)), p--;
              for (; 0 < b - p; ) (v = pr(v)), b--;
              for (; p--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = pr(w)), (v = pr(v));
              }
              w = null;
            }
          else w = null;
          m !== null && bp(f, d, m, w, !1),
            x !== null && E !== null && bp(f, E, x, w, !0);
        }
      }
      e: {
        if (
          ((d = u ? Lr(u) : window),
          (m = d.nodeName && d.nodeName.toLowerCase()),
          m === "select" || (m === "input" && d.type === "file"))
        )
          var $ = gx;
        else if (fp(d))
          if (cv) $ = bx;
          else {
            $ = mx;
            var A = vx;
          }
        else
          (m = d.nodeName) &&
            m.toLowerCase() === "input" &&
            (d.type === "checkbox" || d.type === "radio") &&
            ($ = yx);
        if ($ && ($ = $(e, u))) {
          uv(f, $, n, c);
          break e;
        }
        A && A(e, d, u),
          e === "focusout" &&
            (A = d._wrapperState) &&
            A.controlled &&
            d.type === "number" &&
            _u(d, "number", d.value);
      }
      switch (((A = u ? Lr(u) : window), e)) {
        case "focusin":
          (fp(A) || A.contentEditable === "true") &&
            ((Fr = A), (Lu = u), (Za = null));
          break;
        case "focusout":
          Za = Lu = Fr = null;
          break;
        case "mousedown":
          Mu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Mu = !1), vp(f, n, c);
          break;
        case "selectionchange":
          if (Sx) break;
        case "keydown":
        case "keyup":
          vp(f, n, c);
      }
      var O;
      if (rf)
        e: {
          switch (e) {
            case "compositionstart":
              var j = "onCompositionStart";
              break e;
            case "compositionend":
              j = "onCompositionEnd";
              break e;
            case "compositionupdate":
              j = "onCompositionUpdate";
              break e;
          }
          j = void 0;
        }
      else
        Nr
          ? lv(e, n) && (j = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (j = "onCompositionStart");
      j &&
        (ov &&
          n.locale !== "ko" &&
          (Nr || j !== "onCompositionStart"
            ? j === "onCompositionEnd" && Nr && (O = iv())
            : ((cn = c),
              (ef = "value" in cn ? cn.value : cn.textContent),
              (Nr = !0))),
        (A = ol(u, j)),
        0 < A.length &&
          ((j = new lp(j, e, null, n, c)),
          f.push({ event: j, listeners: A }),
          O ? (j.data = O) : ((O = sv(n)), O !== null && (j.data = O)))),
        (O = cx ? fx(e, n) : dx(e, n)) &&
          ((u = ol(u, "onBeforeInput")),
          0 < u.length &&
            ((c = new lp("onBeforeInput", "beforeinput", null, n, c)),
            f.push({ event: c, listeners: u }),
            (c.data = O)));
    }
    xv(f, t);
  });
}
function vi(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function ol(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var a = e,
      i = a.stateNode;
    a.tag === 5 &&
      i !== null &&
      ((a = i),
      (i = ui(e, n)),
      i != null && r.unshift(vi(e, i, a)),
      (i = ui(e, t)),
      i != null && r.push(vi(e, i, a))),
      (e = e.return);
  }
  return r;
}
function pr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function bp(e, t, n, r, a) {
  for (var i = t._reactName, o = []; n !== null && n !== r; ) {
    var l = n,
      s = l.alternate,
      u = l.stateNode;
    if (s !== null && s === r) break;
    l.tag === 5 &&
      u !== null &&
      ((l = u),
      a
        ? ((s = ui(n, i)), s != null && o.unshift(vi(n, s, l)))
        : a || ((s = ui(n, i)), s != null && o.push(vi(n, s, l)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Cx = /\r\n?/g,
  $x = /\u0000|\uFFFD/g;
function xp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Cx,
      `
`
    )
    .replace($x, "");
}
function ho(e, t, n) {
  if (((t = xp(t)), xp(e) !== t && n)) throw Error(T(425));
}
function ll() {}
var zu = null,
  Du = null;
function Bu(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var Hu = typeof setTimeout == "function" ? setTimeout : void 0,
  Ox = typeof clearTimeout == "function" ? clearTimeout : void 0,
  wp = typeof Promise == "function" ? Promise : void 0,
  Ax =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof wp < "u"
      ? function (e) {
          return wp.resolve(null).then(e).catch(Tx);
        }
      : Hu;
function Tx(e) {
  setTimeout(function () {
    throw e;
  });
}
function Bs(e, t) {
  var n = t,
    r = 0;
  do {
    var a = n.nextSibling;
    if ((e.removeChild(n), a && a.nodeType === 8))
      if (((n = a.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(a), di(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = a;
  } while (n);
  di(t);
}
function vn(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function Sp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var da = Math.random().toString(36).slice(2),
  At = "__reactFiber$" + da,
  mi = "__reactProps$" + da,
  Vt = "__reactContainer$" + da,
  Uu = "__reactEvents$" + da,
  Px = "__reactListeners$" + da,
  jx = "__reactHandles$" + da;
function Bn(e) {
  var t = e[At];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[Vt] || n[At])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = Sp(e); e !== null; ) {
          if ((n = e[At])) return n;
          e = Sp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Di(e) {
  return (
    (e = e[At] || e[Vt]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function Lr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(T(33));
}
function Gl(e) {
  return e[mi] || null;
}
var Wu = [],
  Mr = -1;
function Tn(e) {
  return { current: e };
}
function le(e) {
  0 > Mr || ((e.current = Wu[Mr]), (Wu[Mr] = null), Mr--);
}
function ne(e, t) {
  Mr++, (Wu[Mr] = e.current), (e.current = t);
}
var Sn = {},
  Re = Tn(Sn),
  Be = Tn(!1),
  Xn = Sn;
function na(e, t) {
  var n = e.type.contextTypes;
  if (!n) return Sn;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var a = {},
    i;
  for (i in n) a[i] = t[i];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = a)),
    a
  );
}
function He(e) {
  return (e = e.childContextTypes), e != null;
}
function sl() {
  le(Be), le(Re);
}
function kp(e, t, n) {
  if (Re.current !== Sn) throw Error(T(168));
  ne(Re, t), ne(Be, n);
}
function Sv(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var a in r) if (!(a in t)) throw Error(T(108, vb(e) || "Unknown", a));
  return pe({}, n, r);
}
function ul(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || Sn),
    (Xn = Re.current),
    ne(Re, e),
    ne(Be, Be.current),
    !0
  );
}
function Ep(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(T(169));
  n
    ? ((e = Sv(e, t, Xn)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      le(Be),
      le(Re),
      ne(Re, e))
    : le(Be),
    ne(Be, n);
}
var zt = null,
  Vl = !1,
  Hs = !1;
function kv(e) {
  zt === null ? (zt = [e]) : zt.push(e);
}
function Rx(e) {
  (Vl = !0), kv(e);
}
function Pn() {
  if (!Hs && zt !== null) {
    Hs = !0;
    var e = 0,
      t = J;
    try {
      var n = zt;
      for (J = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (zt = null), (Vl = !1);
    } catch (a) {
      throw (zt !== null && (zt = zt.slice(e + 1)), Kg(Qc, Pn), a);
    } finally {
      (J = t), (Hs = !1);
    }
  }
  return null;
}
var zr = [],
  Dr = 0,
  cl = null,
  fl = 0,
  it = [],
  ot = 0,
  Qn = null,
  Bt = 1,
  Ht = "";
function Ln(e, t) {
  (zr[Dr++] = fl), (zr[Dr++] = cl), (cl = e), (fl = t);
}
function Ev(e, t, n) {
  (it[ot++] = Bt), (it[ot++] = Ht), (it[ot++] = Qn), (Qn = e);
  var r = Bt;
  e = Ht;
  var a = 32 - xt(r) - 1;
  (r &= ~(1 << a)), (n += 1);
  var i = 32 - xt(t) + a;
  if (30 < i) {
    var o = a - (a % 5);
    (i = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (a -= o),
      (Bt = (1 << (32 - xt(t) + a)) | (n << a) | r),
      (Ht = i + e);
  } else (Bt = (1 << i) | (n << a) | r), (Ht = e);
}
function of(e) {
  e.return !== null && (Ln(e, 1), Ev(e, 1, 0));
}
function lf(e) {
  for (; e === cl; )
    (cl = zr[--Dr]), (zr[Dr] = null), (fl = zr[--Dr]), (zr[Dr] = null);
  for (; e === Qn; )
    (Qn = it[--ot]),
      (it[ot] = null),
      (Ht = it[--ot]),
      (it[ot] = null),
      (Bt = it[--ot]),
      (it[ot] = null);
}
var qe = null,
  Qe = null,
  ue = !1,
  yt = null;
function _v(e, t) {
  var n = st(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function _p(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (qe = e), (Qe = vn(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (qe = e), (Qe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = Qn !== null ? { id: Bt, overflow: Ht } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = st(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (qe = e),
            (Qe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Gu(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function Vu(e) {
  if (ue) {
    var t = Qe;
    if (t) {
      var n = t;
      if (!_p(e, t)) {
        if (Gu(e)) throw Error(T(418));
        t = vn(n.nextSibling);
        var r = qe;
        t && _p(e, t)
          ? _v(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e));
      }
    } else {
      if (Gu(e)) throw Error(T(418));
      (e.flags = (e.flags & -4097) | 2), (ue = !1), (qe = e);
    }
  }
}
function Cp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  qe = e;
}
function go(e) {
  if (e !== qe) return !1;
  if (!ue) return Cp(e), (ue = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !Bu(e.type, e.memoizedProps))),
    t && (t = Qe))
  ) {
    if (Gu(e)) throw (Cv(), Error(T(418)));
    for (; t; ) _v(e, t), (t = vn(t.nextSibling));
  }
  if ((Cp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(T(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Qe = vn(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Qe = null;
    }
  } else Qe = qe ? vn(e.stateNode.nextSibling) : null;
  return !0;
}
function Cv() {
  for (var e = Qe; e; ) e = vn(e.nextSibling);
}
function ra() {
  (Qe = qe = null), (ue = !1);
}
function sf(e) {
  yt === null ? (yt = [e]) : yt.push(e);
}
var Nx = Zt.ReactCurrentBatchConfig;
function vt(e, t) {
  if (e && e.defaultProps) {
    (t = pe({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
var dl = Tn(null),
  pl = null,
  Br = null,
  uf = null;
function cf() {
  uf = Br = pl = null;
}
function ff(e) {
  var t = dl.current;
  le(dl), (e._currentValue = t);
}
function Yu(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function qr(e, t) {
  (pl = e),
    (uf = Br = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (De = !0), (e.firstContext = null));
}
function ct(e) {
  var t = e._currentValue;
  if (uf !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Br === null)) {
      if (pl === null) throw Error(T(308));
      (Br = e), (pl.dependencies = { lanes: 0, firstContext: e });
    } else Br = Br.next = e;
  return t;
}
var Hn = null;
function df(e) {
  Hn === null ? (Hn = [e]) : Hn.push(e);
}
function $v(e, t, n, r) {
  var a = t.interleaved;
  return (
    a === null ? ((n.next = n), df(t)) : ((n.next = a.next), (a.next = n)),
    (t.interleaved = n),
    Yt(e, r)
  );
}
function Yt(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var ln = !1;
function pf(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ov(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function Ut(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function mn(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), K & 2)) {
    var a = r.pending;
    return (
      a === null ? (t.next = t) : ((t.next = a.next), (a.next = t)),
      (r.pending = t),
      Yt(e, n)
    );
  }
  return (
    (a = r.interleaved),
    a === null ? ((t.next = t), df(r)) : ((t.next = a.next), (a.next = t)),
    (r.interleaved = t),
    Yt(e, n)
  );
}
function Do(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
function $p(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var a = null,
      i = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        i === null ? (a = i = o) : (i = i.next = o), (n = n.next);
      } while (n !== null);
      i === null ? (a = i = t) : (i = i.next = t);
    } else a = i = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: a,
      lastBaseUpdate: i,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function hl(e, t, n, r) {
  var a = e.updateQueue;
  ln = !1;
  var i = a.firstBaseUpdate,
    o = a.lastBaseUpdate,
    l = a.shared.pending;
  if (l !== null) {
    a.shared.pending = null;
    var s = l,
      u = s.next;
    (s.next = null), o === null ? (i = u) : (o.next = u), (o = s);
    var c = e.alternate;
    c !== null &&
      ((c = c.updateQueue),
      (l = c.lastBaseUpdate),
      l !== o &&
        (l === null ? (c.firstBaseUpdate = u) : (l.next = u),
        (c.lastBaseUpdate = s)));
  }
  if (i !== null) {
    var f = a.baseState;
    (o = 0), (c = u = s = null), (l = i);
    do {
      var d = l.lane,
        m = l.eventTime;
      if ((r & d) === d) {
        c !== null &&
          (c = c.next =
            {
              eventTime: m,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var x = e,
            w = l;
          switch (((d = t), (m = n), w.tag)) {
            case 1:
              if (((x = w.payload), typeof x == "function")) {
                f = x.call(m, f, d);
                break e;
              }
              f = x;
              break e;
            case 3:
              x.flags = (x.flags & -65537) | 128;
            case 0:
              if (
                ((x = w.payload),
                (d = typeof x == "function" ? x.call(m, f, d) : x),
                d == null)
              )
                break e;
              f = pe({}, f, d);
              break e;
            case 2:
              ln = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((e.flags |= 64),
          (d = a.effects),
          d === null ? (a.effects = [l]) : d.push(l));
      } else
        (m = {
          eventTime: m,
          lane: d,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          c === null ? ((u = c = m), (s = f)) : (c = c.next = m),
          (o |= d);
      if (((l = l.next), l === null)) {
        if (((l = a.shared.pending), l === null)) break;
        (d = l),
          (l = d.next),
          (d.next = null),
          (a.lastBaseUpdate = d),
          (a.shared.pending = null);
      }
    } while (1);
    if (
      (c === null && (s = f),
      (a.baseState = s),
      (a.firstBaseUpdate = u),
      (a.lastBaseUpdate = c),
      (t = a.shared.interleaved),
      t !== null)
    ) {
      a = t;
      do (o |= a.lane), (a = a.next);
      while (a !== t);
    } else i === null && (a.shared.lanes = 0);
    (Zn |= o), (e.lanes = o), (e.memoizedState = f);
  }
}
function Op(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        a = r.callback;
      if (a !== null) {
        if (((r.callback = null), (r = n), typeof a != "function"))
          throw Error(T(191, a));
        a.call(r);
      }
    }
}
var Av = new $g.Component().refs;
function Ku(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : pe({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var Yl = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? ar(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      a = bn(e),
      i = Ut(r, a);
    (i.payload = t),
      n != null && (i.callback = n),
      (t = mn(e, i, a)),
      t !== null && (wt(t, e, a, r), Do(t, e, a));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Ie(),
      a = bn(e),
      i = Ut(r, a);
    (i.tag = 1),
      (i.payload = t),
      n != null && (i.callback = n),
      (t = mn(e, i, a)),
      t !== null && (wt(t, e, a, r), Do(t, e, a));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Ie(),
      r = bn(e),
      a = Ut(n, r);
    (a.tag = 2),
      t != null && (a.callback = t),
      (t = mn(e, a, r)),
      t !== null && (wt(t, e, r, n), Do(t, e, r));
  },
};
function Ap(e, t, n, r, a, i, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, i, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !hi(n, r) || !hi(a, i)
      : !0
  );
}
function Tv(e, t, n) {
  var r = !1,
    a = Sn,
    i = t.contextType;
  return (
    typeof i == "object" && i !== null
      ? (i = ct(i))
      : ((a = He(t) ? Xn : Re.current),
        (r = t.contextTypes),
        (i = (r = r != null) ? na(e, a) : Sn)),
    (t = new t(n, i)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = Yl),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = a),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    t
  );
}
function Tp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && Yl.enqueueReplaceState(t, t.state, null);
}
function Xu(e, t, n, r) {
  var a = e.stateNode;
  (a.props = n), (a.state = e.memoizedState), (a.refs = Av), pf(e);
  var i = t.contextType;
  typeof i == "object" && i !== null
    ? (a.context = ct(i))
    : ((i = He(t) ? Xn : Re.current), (a.context = na(e, i))),
    (a.state = e.memoizedState),
    (i = t.getDerivedStateFromProps),
    typeof i == "function" && (Ku(e, t, i, n), (a.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof a.getSnapshotBeforeUpdate == "function" ||
      (typeof a.UNSAFE_componentWillMount != "function" &&
        typeof a.componentWillMount != "function") ||
      ((t = a.state),
      typeof a.componentWillMount == "function" && a.componentWillMount(),
      typeof a.UNSAFE_componentWillMount == "function" &&
        a.UNSAFE_componentWillMount(),
      t !== a.state && Yl.enqueueReplaceState(a, a.state, null),
      hl(e, n, a, r),
      (a.state = e.memoizedState)),
    typeof a.componentDidMount == "function" && (e.flags |= 4194308);
}
function Ra(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(T(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(T(147, e));
      var a = r,
        i = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === i
        ? t.ref
        : ((t = function (o) {
            var l = a.refs;
            l === Av && (l = a.refs = {}),
              o === null ? delete l[i] : (l[i] = o);
          }),
          (t._stringRef = i),
          t);
    }
    if (typeof e != "string") throw Error(T(284));
    if (!n._owner) throw Error(T(290, e));
  }
  return e;
}
function vo(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      T(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Pp(e) {
  var t = e._init;
  return t(e._payload);
}
function Pv(e) {
  function t(v, p) {
    if (e) {
      var b = v.deletions;
      b === null ? ((v.deletions = [p]), (v.flags |= 16)) : b.push(p);
    }
  }
  function n(v, p) {
    if (!e) return null;
    for (; p !== null; ) t(v, p), (p = p.sibling);
    return null;
  }
  function r(v, p) {
    for (v = new Map(); p !== null; )
      p.key !== null ? v.set(p.key, p) : v.set(p.index, p), (p = p.sibling);
    return v;
  }
  function a(v, p) {
    return (v = xn(v, p)), (v.index = 0), (v.sibling = null), v;
  }
  function i(v, p, b) {
    return (
      (v.index = b),
      e
        ? ((b = v.alternate),
          b !== null
            ? ((b = b.index), b < p ? ((v.flags |= 2), p) : b)
            : ((v.flags |= 2), p))
        : ((v.flags |= 1048576), p)
    );
  }
  function o(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function l(v, p, b, _) {
    return p === null || p.tag !== 6
      ? ((p = Xs(b, v.mode, _)), (p.return = v), p)
      : ((p = a(p, b)), (p.return = v), p);
  }
  function s(v, p, b, _) {
    var $ = b.type;
    return $ === Rr
      ? c(v, p, b.props.children, _, b.key)
      : p !== null &&
        (p.elementType === $ ||
          (typeof $ == "object" &&
            $ !== null &&
            $.$$typeof === on &&
            Pp($) === p.type))
      ? ((_ = a(p, b.props)), (_.ref = Ra(v, p, b)), (_.return = v), _)
      : ((_ = Vo(b.type, b.key, b.props, null, v.mode, _)),
        (_.ref = Ra(v, p, b)),
        (_.return = v),
        _);
  }
  function u(v, p, b, _) {
    return p === null ||
      p.tag !== 4 ||
      p.stateNode.containerInfo !== b.containerInfo ||
      p.stateNode.implementation !== b.implementation
      ? ((p = Qs(b, v.mode, _)), (p.return = v), p)
      : ((p = a(p, b.children || [])), (p.return = v), p);
  }
  function c(v, p, b, _, $) {
    return p === null || p.tag !== 7
      ? ((p = Kn(b, v.mode, _, $)), (p.return = v), p)
      : ((p = a(p, b)), (p.return = v), p);
  }
  function f(v, p, b) {
    if ((typeof p == "string" && p !== "") || typeof p == "number")
      return (p = Xs("" + p, v.mode, b)), (p.return = v), p;
    if (typeof p == "object" && p !== null) {
      switch (p.$$typeof) {
        case ao:
          return (
            (b = Vo(p.type, p.key, p.props, null, v.mode, b)),
            (b.ref = Ra(v, null, p)),
            (b.return = v),
            b
          );
        case jr:
          return (p = Qs(p, v.mode, b)), (p.return = v), p;
        case on:
          var _ = p._init;
          return f(v, _(p._payload), b);
      }
      if (Ha(p) || Oa(p))
        return (p = Kn(p, v.mode, b, null)), (p.return = v), p;
      vo(v, p);
    }
    return null;
  }
  function d(v, p, b, _) {
    var $ = p !== null ? p.key : null;
    if ((typeof b == "string" && b !== "") || typeof b == "number")
      return $ !== null ? null : l(v, p, "" + b, _);
    if (typeof b == "object" && b !== null) {
      switch (b.$$typeof) {
        case ao:
          return b.key === $ ? s(v, p, b, _) : null;
        case jr:
          return b.key === $ ? u(v, p, b, _) : null;
        case on:
          return ($ = b._init), d(v, p, $(b._payload), _);
      }
      if (Ha(b) || Oa(b)) return $ !== null ? null : c(v, p, b, _, null);
      vo(v, b);
    }
    return null;
  }
  function m(v, p, b, _, $) {
    if ((typeof _ == "string" && _ !== "") || typeof _ == "number")
      return (v = v.get(b) || null), l(p, v, "" + _, $);
    if (typeof _ == "object" && _ !== null) {
      switch (_.$$typeof) {
        case ao:
          return (v = v.get(_.key === null ? b : _.key) || null), s(p, v, _, $);
        case jr:
          return (v = v.get(_.key === null ? b : _.key) || null), u(p, v, _, $);
        case on:
          var A = _._init;
          return m(v, p, b, A(_._payload), $);
      }
      if (Ha(_) || Oa(_)) return (v = v.get(b) || null), c(p, v, _, $, null);
      vo(p, _);
    }
    return null;
  }
  function x(v, p, b, _) {
    for (
      var $ = null, A = null, O = p, j = (p = 0), G = null;
      O !== null && j < b.length;
      j++
    ) {
      O.index > j ? ((G = O), (O = null)) : (G = O.sibling);
      var U = d(v, O, b[j], _);
      if (U === null) {
        O === null && (O = G);
        break;
      }
      e && O && U.alternate === null && t(v, O),
        (p = i(U, p, j)),
        A === null ? ($ = U) : (A.sibling = U),
        (A = U),
        (O = G);
    }
    if (j === b.length) return n(v, O), ue && Ln(v, j), $;
    if (O === null) {
      for (; j < b.length; j++)
        (O = f(v, b[j], _)),
          O !== null &&
            ((p = i(O, p, j)), A === null ? ($ = O) : (A.sibling = O), (A = O));
      return ue && Ln(v, j), $;
    }
    for (O = r(v, O); j < b.length; j++)
      (G = m(O, v, j, b[j], _)),
        G !== null &&
          (e && G.alternate !== null && O.delete(G.key === null ? j : G.key),
          (p = i(G, p, j)),
          A === null ? ($ = G) : (A.sibling = G),
          (A = G));
    return (
      e &&
        O.forEach(function (Ye) {
          return t(v, Ye);
        }),
      ue && Ln(v, j),
      $
    );
  }
  function w(v, p, b, _) {
    var $ = Oa(b);
    if (typeof $ != "function") throw Error(T(150));
    if (((b = $.call(b)), b == null)) throw Error(T(151));
    for (
      var A = ($ = null), O = p, j = (p = 0), G = null, U = b.next();
      O !== null && !U.done;
      j++, U = b.next()
    ) {
      O.index > j ? ((G = O), (O = null)) : (G = O.sibling);
      var Ye = d(v, O, U.value, _);
      if (Ye === null) {
        O === null && (O = G);
        break;
      }
      e && O && Ye.alternate === null && t(v, O),
        (p = i(Ye, p, j)),
        A === null ? ($ = Ye) : (A.sibling = Ye),
        (A = Ye),
        (O = G);
    }
    if (U.done) return n(v, O), ue && Ln(v, j), $;
    if (O === null) {
      for (; !U.done; j++, U = b.next())
        (U = f(v, U.value, _)),
          U !== null &&
            ((p = i(U, p, j)), A === null ? ($ = U) : (A.sibling = U), (A = U));
      return ue && Ln(v, j), $;
    }
    for (O = r(v, O); !U.done; j++, U = b.next())
      (U = m(O, v, j, U.value, _)),
        U !== null &&
          (e && U.alternate !== null && O.delete(U.key === null ? j : U.key),
          (p = i(U, p, j)),
          A === null ? ($ = U) : (A.sibling = U),
          (A = U));
    return (
      e &&
        O.forEach(function (Rn) {
          return t(v, Rn);
        }),
      ue && Ln(v, j),
      $
    );
  }
  function E(v, p, b, _) {
    if (
      (typeof b == "object" &&
        b !== null &&
        b.type === Rr &&
        b.key === null &&
        (b = b.props.children),
      typeof b == "object" && b !== null)
    ) {
      switch (b.$$typeof) {
        case ao:
          e: {
            for (var $ = b.key, A = p; A !== null; ) {
              if (A.key === $) {
                if ((($ = b.type), $ === Rr)) {
                  if (A.tag === 7) {
                    n(v, A.sibling),
                      (p = a(A, b.props.children)),
                      (p.return = v),
                      (v = p);
                    break e;
                  }
                } else if (
                  A.elementType === $ ||
                  (typeof $ == "object" &&
                    $ !== null &&
                    $.$$typeof === on &&
                    Pp($) === A.type)
                ) {
                  n(v, A.sibling),
                    (p = a(A, b.props)),
                    (p.ref = Ra(v, A, b)),
                    (p.return = v),
                    (v = p);
                  break e;
                }
                n(v, A);
                break;
              } else t(v, A);
              A = A.sibling;
            }
            b.type === Rr
              ? ((p = Kn(b.props.children, v.mode, _, b.key)),
                (p.return = v),
                (v = p))
              : ((_ = Vo(b.type, b.key, b.props, null, v.mode, _)),
                (_.ref = Ra(v, p, b)),
                (_.return = v),
                (v = _));
          }
          return o(v);
        case jr:
          e: {
            for (A = b.key; p !== null; ) {
              if (p.key === A)
                if (
                  p.tag === 4 &&
                  p.stateNode.containerInfo === b.containerInfo &&
                  p.stateNode.implementation === b.implementation
                ) {
                  n(v, p.sibling),
                    (p = a(p, b.children || [])),
                    (p.return = v),
                    (v = p);
                  break e;
                } else {
                  n(v, p);
                  break;
                }
              else t(v, p);
              p = p.sibling;
            }
            (p = Qs(b, v.mode, _)), (p.return = v), (v = p);
          }
          return o(v);
        case on:
          return (A = b._init), E(v, p, A(b._payload), _);
      }
      if (Ha(b)) return x(v, p, b, _);
      if (Oa(b)) return w(v, p, b, _);
      vo(v, b);
    }
    return (typeof b == "string" && b !== "") || typeof b == "number"
      ? ((b = "" + b),
        p !== null && p.tag === 6
          ? (n(v, p.sibling), (p = a(p, b)), (p.return = v), (v = p))
          : (n(v, p), (p = Xs(b, v.mode, _)), (p.return = v), (v = p)),
        o(v))
      : n(v, p);
  }
  return E;
}
var aa = Pv(!0),
  jv = Pv(!1),
  Bi = {},
  jt = Tn(Bi),
  yi = Tn(Bi),
  bi = Tn(Bi);
function Un(e) {
  if (e === Bi) throw Error(T(174));
  return e;
}
function hf(e, t) {
  switch ((ne(bi, t), ne(yi, e), ne(jt, Bi), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : $u(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = $u(t, e));
  }
  le(jt), ne(jt, t);
}
function ia() {
  le(jt), le(yi), le(bi);
}
function Rv(e) {
  Un(bi.current);
  var t = Un(jt.current),
    n = $u(t, e.type);
  t !== n && (ne(yi, e), ne(jt, n));
}
function gf(e) {
  yi.current === e && (le(jt), le(yi));
}
var fe = Tn(0);
function gl(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Us = [];
function vf() {
  for (var e = 0; e < Us.length; e++)
    Us[e]._workInProgressVersionPrimary = null;
  Us.length = 0;
}
var Bo = Zt.ReactCurrentDispatcher,
  Ws = Zt.ReactCurrentBatchConfig,
  qn = 0,
  de = null,
  xe = null,
  ke = null,
  vl = !1,
  Ja = !1,
  xi = 0,
  Fx = 0;
function Ae() {
  throw Error(T(321));
}
function mf(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!St(e[n], t[n])) return !1;
  return !0;
}
function yf(e, t, n, r, a, i) {
  if (
    ((qn = i),
    (de = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Bo.current = e === null || e.memoizedState === null ? zx : Dx),
    (e = n(r, a)),
    Ja)
  ) {
    i = 0;
    do {
      if (((Ja = !1), (xi = 0), 25 <= i)) throw Error(T(301));
      (i += 1),
        (ke = xe = null),
        (t.updateQueue = null),
        (Bo.current = Bx),
        (e = n(r, a));
    } while (Ja);
  }
  if (
    ((Bo.current = ml),
    (t = xe !== null && xe.next !== null),
    (qn = 0),
    (ke = xe = de = null),
    (vl = !1),
    t)
  )
    throw Error(T(300));
  return e;
}
function bf() {
  var e = xi !== 0;
  return (xi = 0), e;
}
function Ct() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e), ke;
}
function ft() {
  if (xe === null) {
    var e = de.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = xe.next;
  var t = ke === null ? de.memoizedState : ke.next;
  if (t !== null) (ke = t), (xe = e);
  else {
    if (e === null) throw Error(T(310));
    (xe = e),
      (e = {
        memoizedState: xe.memoizedState,
        baseState: xe.baseState,
        baseQueue: xe.baseQueue,
        queue: xe.queue,
        next: null,
      }),
      ke === null ? (de.memoizedState = ke = e) : (ke = ke.next = e);
  }
  return ke;
}
function wi(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Gs(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = xe,
    a = r.baseQueue,
    i = n.pending;
  if (i !== null) {
    if (a !== null) {
      var o = a.next;
      (a.next = i.next), (i.next = o);
    }
    (r.baseQueue = a = i), (n.pending = null);
  }
  if (a !== null) {
    (i = a.next), (r = r.baseState);
    var l = (o = null),
      s = null,
      u = i;
    do {
      var c = u.lane;
      if ((qn & c) === c)
        s !== null &&
          (s = s.next =
            {
              lane: 0,
              action: u.action,
              hasEagerState: u.hasEagerState,
              eagerState: u.eagerState,
              next: null,
            }),
          (r = u.hasEagerState ? u.eagerState : e(r, u.action));
      else {
        var f = {
          lane: c,
          action: u.action,
          hasEagerState: u.hasEagerState,
          eagerState: u.eagerState,
          next: null,
        };
        s === null ? ((l = s = f), (o = r)) : (s = s.next = f),
          (de.lanes |= c),
          (Zn |= c);
      }
      u = u.next;
    } while (u !== null && u !== i);
    s === null ? (o = r) : (s.next = l),
      St(r, t.memoizedState) || (De = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = s),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    a = e;
    do (i = a.lane), (de.lanes |= i), (Zn |= i), (a = a.next);
    while (a !== e);
  } else a === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Vs(e) {
  var t = ft(),
    n = t.queue;
  if (n === null) throw Error(T(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    a = n.pending,
    i = t.memoizedState;
  if (a !== null) {
    n.pending = null;
    var o = (a = a.next);
    do (i = e(i, o.action)), (o = o.next);
    while (o !== a);
    St(i, t.memoizedState) || (De = !0),
      (t.memoizedState = i),
      t.baseQueue === null && (t.baseState = i),
      (n.lastRenderedState = i);
  }
  return [i, r];
}
function Nv() {}
function Fv(e, t) {
  var n = de,
    r = ft(),
    a = t(),
    i = !St(r.memoizedState, a);
  if (
    (i && ((r.memoizedState = a), (De = !0)),
    (r = r.queue),
    xf(Mv.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || i || (ke !== null && ke.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      Si(9, Lv.bind(null, n, r, a, t), void 0, null),
      Ee === null)
    )
      throw Error(T(349));
    qn & 30 || Iv(n, t, a);
  }
  return a;
}
function Iv(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Lv(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), zv(t) && Dv(e);
}
function Mv(e, t, n) {
  return n(function () {
    zv(t) && Dv(e);
  });
}
function zv(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !St(e, n);
  } catch {
    return !0;
  }
}
function Dv(e) {
  var t = Yt(e, 1);
  t !== null && wt(t, e, 1, -1);
}
function jp(e) {
  var t = Ct();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: wi,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = Mx.bind(null, de, e)),
    [t.memoizedState, e]
  );
}
function Si(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = de.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (de.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function Bv() {
  return ft().memoizedState;
}
function Ho(e, t, n, r) {
  var a = Ct();
  (de.flags |= e),
    (a.memoizedState = Si(1 | t, n, void 0, r === void 0 ? null : r));
}
function Kl(e, t, n, r) {
  var a = ft();
  r = r === void 0 ? null : r;
  var i = void 0;
  if (xe !== null) {
    var o = xe.memoizedState;
    if (((i = o.destroy), r !== null && mf(r, o.deps))) {
      a.memoizedState = Si(t, n, i, r);
      return;
    }
  }
  (de.flags |= e), (a.memoizedState = Si(1 | t, n, i, r));
}
function Rp(e, t) {
  return Ho(8390656, 8, e, t);
}
function xf(e, t) {
  return Kl(2048, 8, e, t);
}
function Hv(e, t) {
  return Kl(4, 2, e, t);
}
function Uv(e, t) {
  return Kl(4, 4, e, t);
}
function Wv(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function Gv(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Kl(4, 4, Wv.bind(null, t, e), n)
  );
}
function wf() {}
function Vv(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mf(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function Yv(e, t) {
  var n = ft();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && mf(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function Kv(e, t, n) {
  return qn & 21
    ? (St(n, t) || ((n = qg()), (de.lanes |= n), (Zn |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (De = !0)), (e.memoizedState = n));
}
function Ix(e, t) {
  var n = J;
  (J = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Ws.transition;
  Ws.transition = {};
  try {
    e(!1), t();
  } finally {
    (J = n), (Ws.transition = r);
  }
}
function Xv() {
  return ft().memoizedState;
}
function Lx(e, t, n) {
  var r = bn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Qv(e))
  )
    qv(t, n);
  else if (((n = $v(e, t, n, r)), n !== null)) {
    var a = Ie();
    wt(n, e, r, a), Zv(n, t, r);
  }
}
function Mx(e, t, n) {
  var r = bn(e),
    a = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (Qv(e)) qv(t, a);
  else {
    var i = e.alternate;
    if (
      e.lanes === 0 &&
      (i === null || i.lanes === 0) &&
      ((i = t.lastRenderedReducer), i !== null)
    )
      try {
        var o = t.lastRenderedState,
          l = i(o, n);
        if (((a.hasEagerState = !0), (a.eagerState = l), St(l, o))) {
          var s = t.interleaved;
          s === null
            ? ((a.next = a), df(t))
            : ((a.next = s.next), (s.next = a)),
            (t.interleaved = a);
          return;
        }
      } catch {
      } finally {
      }
    (n = $v(e, t, a, r)),
      n !== null && ((a = Ie()), wt(n, e, r, a), Zv(n, t, r));
  }
}
function Qv(e) {
  var t = e.alternate;
  return e === de || (t !== null && t === de);
}
function qv(e, t) {
  Ja = vl = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function Zv(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), qc(e, n);
  }
}
var ml = {
    readContext: ct,
    useCallback: Ae,
    useContext: Ae,
    useEffect: Ae,
    useImperativeHandle: Ae,
    useInsertionEffect: Ae,
    useLayoutEffect: Ae,
    useMemo: Ae,
    useReducer: Ae,
    useRef: Ae,
    useState: Ae,
    useDebugValue: Ae,
    useDeferredValue: Ae,
    useTransition: Ae,
    useMutableSource: Ae,
    useSyncExternalStore: Ae,
    useId: Ae,
    unstable_isNewReconciler: !1,
  },
  zx = {
    readContext: ct,
    useCallback: function (e, t) {
      return (Ct().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ct,
    useEffect: Rp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Ho(4194308, 4, Wv.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Ho(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Ho(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Ct();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Ct();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = Lx.bind(null, de, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Ct();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: jp,
    useDebugValue: wf,
    useDeferredValue: function (e) {
      return (Ct().memoizedState = e);
    },
    useTransition: function () {
      var e = jp(!1),
        t = e[0];
      return (e = Ix.bind(null, e[1])), (Ct().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = de,
        a = Ct();
      if (ue) {
        if (n === void 0) throw Error(T(407));
        n = n();
      } else {
        if (((n = t()), Ee === null)) throw Error(T(349));
        qn & 30 || Iv(r, t, n);
      }
      a.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return (
        (a.queue = i),
        Rp(Mv.bind(null, r, i, e), [e]),
        (r.flags |= 2048),
        Si(9, Lv.bind(null, r, i, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Ct(),
        t = Ee.identifierPrefix;
      if (ue) {
        var n = Ht,
          r = Bt;
        (n = (r & ~(1 << (32 - xt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = xi++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = Fx++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  Dx = {
    readContext: ct,
    useCallback: Vv,
    useContext: ct,
    useEffect: xf,
    useImperativeHandle: Gv,
    useInsertionEffect: Hv,
    useLayoutEffect: Uv,
    useMemo: Yv,
    useReducer: Gs,
    useRef: Bv,
    useState: function () {
      return Gs(wi);
    },
    useDebugValue: wf,
    useDeferredValue: function (e) {
      var t = ft();
      return Kv(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Gs(wi)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Nv,
    useSyncExternalStore: Fv,
    useId: Xv,
    unstable_isNewReconciler: !1,
  },
  Bx = {
    readContext: ct,
    useCallback: Vv,
    useContext: ct,
    useEffect: xf,
    useImperativeHandle: Gv,
    useInsertionEffect: Hv,
    useLayoutEffect: Uv,
    useMemo: Yv,
    useReducer: Vs,
    useRef: Bv,
    useState: function () {
      return Vs(wi);
    },
    useDebugValue: wf,
    useDeferredValue: function (e) {
      var t = ft();
      return xe === null ? (t.memoizedState = e) : Kv(t, xe.memoizedState, e);
    },
    useTransition: function () {
      var e = Vs(wi)[0],
        t = ft().memoizedState;
      return [e, t];
    },
    useMutableSource: Nv,
    useSyncExternalStore: Fv,
    useId: Xv,
    unstable_isNewReconciler: !1,
  };
function oa(e, t) {
  try {
    var n = "",
      r = t;
    do (n += gb(r)), (r = r.return);
    while (r);
    var a = n;
  } catch (i) {
    a =
      `
Error generating stack: ` +
      i.message +
      `
` +
      i.stack;
  }
  return { value: e, source: t, stack: a, digest: null };
}
function Ys(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function Qu(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var Hx = typeof WeakMap == "function" ? WeakMap : Map;
function Jv(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      bl || ((bl = !0), (oc = r)), Qu(e, t);
    }),
    n
  );
}
function em(e, t, n) {
  (n = Ut(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var a = t.value;
    (n.payload = function () {
      return r(a);
    }),
      (n.callback = function () {
        Qu(e, t);
      });
  }
  var i = e.stateNode;
  return (
    i !== null &&
      typeof i.componentDidCatch == "function" &&
      (n.callback = function () {
        Qu(e, t),
          typeof r != "function" &&
            (yn === null ? (yn = new Set([this])) : yn.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Np(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new Hx();
    var a = new Set();
    r.set(t, a);
  } else (a = r.get(t)), a === void 0 && ((a = new Set()), r.set(t, a));
  a.has(n) || (a.add(n), (e = nw.bind(null, e, t, n)), t.then(e, e));
}
function Fp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function Ip(e, t, n, r, a) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = a), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = Ut(-1, 1)), (t.tag = 2), mn(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var Ux = Zt.ReactCurrentOwner,
  De = !1;
function Fe(e, t, n, r) {
  t.child = e === null ? jv(t, null, n, r) : aa(t, e.child, n, r);
}
function Lp(e, t, n, r, a) {
  n = n.render;
  var i = t.ref;
  return (
    qr(t, a),
    (r = yf(e, t, n, r, i, a)),
    (n = bf()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Kt(e, t, a))
      : (ue && n && of(t), (t.flags |= 1), Fe(e, t, r, a), t.child)
  );
}
function Mp(e, t, n, r, a) {
  if (e === null) {
    var i = n.type;
    return typeof i == "function" &&
      !Af(i) &&
      i.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = i), tm(e, t, i, r, a))
      : ((e = Vo(n.type, null, r, t, t.mode, a)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((i = e.child), !(e.lanes & a))) {
    var o = i.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : hi), n(o, r) && e.ref === t.ref)
    )
      return Kt(e, t, a);
  }
  return (
    (t.flags |= 1),
    (e = xn(i, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function tm(e, t, n, r, a) {
  if (e !== null) {
    var i = e.memoizedProps;
    if (hi(i, r) && e.ref === t.ref)
      if (((De = !1), (t.pendingProps = r = i), (e.lanes & a) !== 0))
        e.flags & 131072 && (De = !0);
      else return (t.lanes = e.lanes), Kt(e, t, a);
  }
  return qu(e, t, n, r, a);
}
function nm(e, t, n) {
  var r = t.pendingProps,
    a = r.children,
    i = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ne(Ur, Xe),
        (Xe |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = i !== null ? i.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          ne(Ur, Xe),
          (Xe |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = i !== null ? i.baseLanes : n),
        ne(Ur, Xe),
        (Xe |= r);
    }
  else
    i !== null ? ((r = i.baseLanes | n), (t.memoizedState = null)) : (r = n),
      ne(Ur, Xe),
      (Xe |= r);
  return Fe(e, t, a, n), t.child;
}
function rm(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function qu(e, t, n, r, a) {
  var i = He(n) ? Xn : Re.current;
  return (
    (i = na(t, i)),
    qr(t, a),
    (n = yf(e, t, n, r, i, a)),
    (r = bf()),
    e !== null && !De
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~a),
        Kt(e, t, a))
      : (ue && r && of(t), (t.flags |= 1), Fe(e, t, n, a), t.child)
  );
}
function zp(e, t, n, r, a) {
  if (He(n)) {
    var i = !0;
    ul(t);
  } else i = !1;
  if ((qr(t, a), t.stateNode === null))
    Uo(e, t), Tv(t, n, r), Xu(t, n, r, a), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      l = t.memoizedProps;
    o.props = l;
    var s = o.context,
      u = n.contextType;
    typeof u == "object" && u !== null
      ? (u = ct(u))
      : ((u = He(n) ? Xn : Re.current), (u = na(t, u)));
    var c = n.getDerivedStateFromProps,
      f =
        typeof c == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    f ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== r || s !== u) && Tp(t, o, r, u)),
      (ln = !1);
    var d = t.memoizedState;
    (o.state = d),
      hl(t, r, o, a),
      (s = t.memoizedState),
      l !== r || d !== s || Be.current || ln
        ? (typeof c == "function" && (Ku(t, n, c, r), (s = t.memoizedState)),
          (l = ln || Ap(t, n, l, r, d, s, u))
            ? (f ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = s)),
          (o.props = r),
          (o.state = s),
          (o.context = u),
          (r = l))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ov(e, t),
      (l = t.memoizedProps),
      (u = t.type === t.elementType ? l : vt(t.type, l)),
      (o.props = u),
      (f = t.pendingProps),
      (d = o.context),
      (s = n.contextType),
      typeof s == "object" && s !== null
        ? (s = ct(s))
        : ((s = He(n) ? Xn : Re.current), (s = na(t, s)));
    var m = n.getDerivedStateFromProps;
    (c =
      typeof m == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((l !== f || d !== s) && Tp(t, o, r, s)),
      (ln = !1),
      (d = t.memoizedState),
      (o.state = d),
      hl(t, r, o, a);
    var x = t.memoizedState;
    l !== f || d !== x || Be.current || ln
      ? (typeof m == "function" && (Ku(t, n, m, r), (x = t.memoizedState)),
        (u = ln || Ap(t, n, u, r, d, x, s) || !1)
          ? (c ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, x, s),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, x, s)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (l === e.memoizedProps && d === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = x)),
        (o.props = r),
        (o.state = x),
        (o.context = s),
        (r = u))
      : (typeof o.componentDidUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (l === e.memoizedProps && d === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Zu(e, t, n, r, i, a);
}
function Zu(e, t, n, r, a, i) {
  rm(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return a && Ep(t, n, !1), Kt(e, t, i);
  (r = t.stateNode), (Ux.current = t);
  var l =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = aa(t, e.child, null, i)), (t.child = aa(t, null, l, i)))
      : Fe(e, t, l, i),
    (t.memoizedState = r.state),
    a && Ep(t, n, !0),
    t.child
  );
}
function am(e) {
  var t = e.stateNode;
  t.pendingContext
    ? kp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && kp(e, t.context, !1),
    hf(e, t.containerInfo);
}
function Dp(e, t, n, r, a) {
  return ra(), sf(a), (t.flags |= 256), Fe(e, t, n, r), t.child;
}
var Ju = { dehydrated: null, treeContext: null, retryLane: 0 };
function ec(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function im(e, t, n) {
  var r = t.pendingProps,
    a = fe.current,
    i = !1,
    o = (t.flags & 128) !== 0,
    l;
  if (
    ((l = o) ||
      (l = e !== null && e.memoizedState === null ? !1 : (a & 2) !== 0),
    l
      ? ((i = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (a |= 1),
    ne(fe, a & 1),
    e === null)
  )
    return (
      Vu(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          i
            ? ((r = t.mode),
              (i = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && i !== null
                ? ((i.childLanes = 0), (i.pendingProps = o))
                : (i = ql(o, r, 0, null)),
              (e = Kn(e, r, n, null)),
              (i.return = t),
              (e.return = t),
              (i.sibling = e),
              (t.child = i),
              (t.child.memoizedState = ec(n)),
              (t.memoizedState = Ju),
              e)
            : Sf(t, o))
    );
  if (((a = e.memoizedState), a !== null && ((l = a.dehydrated), l !== null)))
    return Wx(e, t, o, r, l, a, n);
  if (i) {
    (i = r.fallback), (o = t.mode), (a = e.child), (l = a.sibling);
    var s = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== a
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = s),
          (t.deletions = null))
        : ((r = xn(a, s)), (r.subtreeFlags = a.subtreeFlags & 14680064)),
      l !== null ? (i = xn(l, i)) : ((i = Kn(i, o, n, null)), (i.flags |= 2)),
      (i.return = t),
      (r.return = t),
      (r.sibling = i),
      (t.child = r),
      (r = i),
      (i = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? ec(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (i.memoizedState = o),
      (i.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ju),
      r
    );
  }
  return (
    (i = e.child),
    (e = i.sibling),
    (r = xn(i, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Sf(e, t) {
  return (
    (t = ql({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function mo(e, t, n, r) {
  return (
    r !== null && sf(r),
    aa(t, e.child, null, n),
    (e = Sf(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function Wx(e, t, n, r, a, i, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ys(Error(T(422)))), mo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((i = r.fallback),
        (a = t.mode),
        (r = ql({ mode: "visible", children: r.children }, a, 0, null)),
        (i = Kn(i, a, o, null)),
        (i.flags |= 2),
        (r.return = t),
        (i.return = t),
        (r.sibling = i),
        (t.child = r),
        t.mode & 1 && aa(t, e.child, null, o),
        (t.child.memoizedState = ec(o)),
        (t.memoizedState = Ju),
        i);
  if (!(t.mode & 1)) return mo(e, t, o, null);
  if (a.data === "$!") {
    if (((r = a.nextSibling && a.nextSibling.dataset), r)) var l = r.dgst;
    return (r = l), (i = Error(T(419))), (r = Ys(i, r, void 0)), mo(e, t, o, r);
  }
  if (((l = (o & e.childLanes) !== 0), De || l)) {
    if (((r = Ee), r !== null)) {
      switch (o & -o) {
        case 4:
          a = 2;
          break;
        case 16:
          a = 8;
          break;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          a = 32;
          break;
        case 536870912:
          a = 268435456;
          break;
        default:
          a = 0;
      }
      (a = a & (r.suspendedLanes | o) ? 0 : a),
        a !== 0 &&
          a !== i.retryLane &&
          ((i.retryLane = a), Yt(e, a), wt(r, e, a, -1));
    }
    return Of(), (r = Ys(Error(T(421)))), mo(e, t, o, r);
  }
  return a.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = rw.bind(null, e)),
      (a._reactRetry = t),
      null)
    : ((e = i.treeContext),
      (Qe = vn(a.nextSibling)),
      (qe = t),
      (ue = !0),
      (yt = null),
      e !== null &&
        ((it[ot++] = Bt),
        (it[ot++] = Ht),
        (it[ot++] = Qn),
        (Bt = e.id),
        (Ht = e.overflow),
        (Qn = t)),
      (t = Sf(t, r.children)),
      (t.flags |= 4096),
      t);
}
function Bp(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), Yu(e.return, t, n);
}
function Ks(e, t, n, r, a) {
  var i = e.memoizedState;
  i === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: a,
      })
    : ((i.isBackwards = t),
      (i.rendering = null),
      (i.renderingStartTime = 0),
      (i.last = r),
      (i.tail = n),
      (i.tailMode = a));
}
function om(e, t, n) {
  var r = t.pendingProps,
    a = r.revealOrder,
    i = r.tail;
  if ((Fe(e, t, r.children, n), (r = fe.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && Bp(e, n, t);
        else if (e.tag === 19) Bp(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((ne(fe, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (a) {
      case "forwards":
        for (n = t.child, a = null; n !== null; )
          (e = n.alternate),
            e !== null && gl(e) === null && (a = n),
            (n = n.sibling);
        (n = a),
          n === null
            ? ((a = t.child), (t.child = null))
            : ((a = n.sibling), (n.sibling = null)),
          Ks(t, !1, a, n, i);
        break;
      case "backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (((e = a.alternate), e !== null && gl(e) === null)) {
            t.child = a;
            break;
          }
          (e = a.sibling), (a.sibling = n), (n = a), (a = e);
        }
        Ks(t, !0, n, null, i);
        break;
      case "together":
        Ks(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Uo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function Kt(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (Zn |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(T(153));
  if (t.child !== null) {
    for (
      e = t.child, n = xn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = xn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function Gx(e, t, n) {
  switch (t.tag) {
    case 3:
      am(t), ra();
      break;
    case 5:
      Rv(t);
      break;
    case 1:
      He(t.type) && ul(t);
      break;
    case 4:
      hf(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        a = t.memoizedProps.value;
      ne(dl, r._currentValue), (r._currentValue = a);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (ne(fe, fe.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? im(e, t, n)
          : (ne(fe, fe.current & 1),
            (e = Kt(e, t, n)),
            e !== null ? e.sibling : null);
      ne(fe, fe.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return om(e, t, n);
        t.flags |= 128;
      }
      if (
        ((a = t.memoizedState),
        a !== null &&
          ((a.rendering = null), (a.tail = null), (a.lastEffect = null)),
        ne(fe, fe.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), nm(e, t, n);
  }
  return Kt(e, t, n);
}
var lm, tc, sm, um;
lm = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
tc = function () {};
sm = function (e, t, n, r) {
  var a = e.memoizedProps;
  if (a !== r) {
    (e = t.stateNode), Un(jt.current);
    var i = null;
    switch (n) {
      case "input":
        (a = ku(e, a)), (r = ku(e, r)), (i = []);
        break;
      case "select":
        (a = pe({}, a, { value: void 0 })),
          (r = pe({}, r, { value: void 0 })),
          (i = []);
        break;
      case "textarea":
        (a = Cu(e, a)), (r = Cu(e, r)), (i = []);
        break;
      default:
        typeof a.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ll);
    }
    Ou(n, r);
    var o;
    n = null;
    for (u in a)
      if (!r.hasOwnProperty(u) && a.hasOwnProperty(u) && a[u] != null)
        if (u === "style") {
          var l = a[u];
          for (o in l) l.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          u !== "dangerouslySetInnerHTML" &&
            u !== "children" &&
            u !== "suppressContentEditableWarning" &&
            u !== "suppressHydrationWarning" &&
            u !== "autoFocus" &&
            (li.hasOwnProperty(u)
              ? i || (i = [])
              : (i = i || []).push(u, null));
    for (u in r) {
      var s = r[u];
      if (
        ((l = a != null ? a[u] : void 0),
        r.hasOwnProperty(u) && s !== l && (s != null || l != null))
      )
        if (u === "style")
          if (l) {
            for (o in l)
              !l.hasOwnProperty(o) ||
                (s && s.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in s)
              s.hasOwnProperty(o) &&
                l[o] !== s[o] &&
                (n || (n = {}), (n[o] = s[o]));
          } else n || (i || (i = []), i.push(u, n)), (n = s);
        else
          u === "dangerouslySetInnerHTML"
            ? ((s = s ? s.__html : void 0),
              (l = l ? l.__html : void 0),
              s != null && l !== s && (i = i || []).push(u, s))
            : u === "children"
            ? (typeof s != "string" && typeof s != "number") ||
              (i = i || []).push(u, "" + s)
            : u !== "suppressContentEditableWarning" &&
              u !== "suppressHydrationWarning" &&
              (li.hasOwnProperty(u)
                ? (s != null && u === "onScroll" && re("scroll", e),
                  i || l === s || (i = []))
                : (i = i || []).push(u, s));
    }
    n && (i = i || []).push("style", n);
    var u = i;
    (t.updateQueue = u) && (t.flags |= 4);
  }
};
um = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Na(e, t) {
  if (!ue)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Te(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags & 14680064),
        (r |= a.flags & 14680064),
        (a.return = e),
        (a = a.sibling);
  else
    for (a = e.child; a !== null; )
      (n |= a.lanes | a.childLanes),
        (r |= a.subtreeFlags),
        (r |= a.flags),
        (a.return = e),
        (a = a.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function Vx(e, t, n) {
  var r = t.pendingProps;
  switch ((lf(t), t.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return Te(t), null;
    case 1:
      return He(t.type) && sl(), Te(t), null;
    case 3:
      return (
        (r = t.stateNode),
        ia(),
        le(Be),
        le(Re),
        vf(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (go(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), yt !== null && (uc(yt), (yt = null)))),
        tc(e, t),
        Te(t),
        null
      );
    case 5:
      gf(t);
      var a = Un(bi.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        sm(e, t, n, r, a),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(T(166));
          return Te(t), null;
        }
        if (((e = Un(jt.current)), go(t))) {
          (r = t.stateNode), (n = t.type);
          var i = t.memoizedProps;
          switch (((r[At] = t), (r[mi] = i), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              re("cancel", r), re("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              re("load", r);
              break;
            case "video":
            case "audio":
              for (a = 0; a < Wa.length; a++) re(Wa[a], r);
              break;
            case "source":
              re("error", r);
              break;
            case "img":
            case "image":
            case "link":
              re("error", r), re("load", r);
              break;
            case "details":
              re("toggle", r);
              break;
            case "input":
              Qd(r, i), re("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!i.multiple }),
                re("invalid", r);
              break;
            case "textarea":
              Zd(r, i), re("invalid", r);
          }
          Ou(n, i), (a = null);
          for (var o in i)
            if (i.hasOwnProperty(o)) {
              var l = i[o];
              o === "children"
                ? typeof l == "string"
                  ? r.textContent !== l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ho(r.textContent, l, e),
                    (a = ["children", l]))
                  : typeof l == "number" &&
                    r.textContent !== "" + l &&
                    (i.suppressHydrationWarning !== !0 &&
                      ho(r.textContent, l, e),
                    (a = ["children", "" + l]))
                : li.hasOwnProperty(o) &&
                  l != null &&
                  o === "onScroll" &&
                  re("scroll", r);
            }
          switch (n) {
            case "input":
              io(r), qd(r, i, !0);
              break;
            case "textarea":
              io(r), Jd(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof i.onClick == "function" && (r.onclick = ll);
          }
          (r = a), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = a.nodeType === 9 ? a : a.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = Ig(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[At] = t),
            (e[mi] = r),
            lm(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Au(n, r)), n)) {
              case "dialog":
                re("cancel", e), re("close", e), (a = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                re("load", e), (a = r);
                break;
              case "video":
              case "audio":
                for (a = 0; a < Wa.length; a++) re(Wa[a], e);
                a = r;
                break;
              case "source":
                re("error", e), (a = r);
                break;
              case "img":
              case "image":
              case "link":
                re("error", e), re("load", e), (a = r);
                break;
              case "details":
                re("toggle", e), (a = r);
                break;
              case "input":
                Qd(e, r), (a = ku(e, r)), re("invalid", e);
                break;
              case "option":
                a = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (a = pe({}, r, { value: void 0 })),
                  re("invalid", e);
                break;
              case "textarea":
                Zd(e, r), (a = Cu(e, r)), re("invalid", e);
                break;
              default:
                a = r;
            }
            Ou(n, a), (l = a);
            for (i in l)
              if (l.hasOwnProperty(i)) {
                var s = l[i];
                i === "style"
                  ? zg(e, s)
                  : i === "dangerouslySetInnerHTML"
                  ? ((s = s ? s.__html : void 0), s != null && Lg(e, s))
                  : i === "children"
                  ? typeof s == "string"
                    ? (n !== "textarea" || s !== "") && si(e, s)
                    : typeof s == "number" && si(e, "" + s)
                  : i !== "suppressContentEditableWarning" &&
                    i !== "suppressHydrationWarning" &&
                    i !== "autoFocus" &&
                    (li.hasOwnProperty(i)
                      ? s != null && i === "onScroll" && re("scroll", e)
                      : s != null && Gc(e, i, s, o));
              }
            switch (n) {
              case "input":
                io(e), qd(e, r, !1);
                break;
              case "textarea":
                io(e), Jd(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + wn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (i = r.value),
                  i != null
                    ? Yr(e, !!r.multiple, i, !1)
                    : r.defaultValue != null &&
                      Yr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof a.onClick == "function" && (e.onclick = ll);
            }
            switch (n) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                r = !!r.autoFocus;
                break e;
              case "img":
                r = !0;
                break e;
              default:
                r = !1;
            }
          }
          r && (t.flags |= 4);
        }
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Te(t), null;
    case 6:
      if (e && t.stateNode != null) um(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(T(166));
        if (((n = Un(bi.current)), Un(jt.current), go(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[At] = t),
            (i = r.nodeValue !== n) && ((e = qe), e !== null))
          )
            switch (e.tag) {
              case 3:
                ho(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  ho(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          i && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[At] = t),
            (t.stateNode = r);
      }
      return Te(t), null;
    case 13:
      if (
        (le(fe),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (ue && Qe !== null && t.mode & 1 && !(t.flags & 128))
          Cv(), ra(), (t.flags |= 98560), (i = !1);
        else if (((i = go(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!i) throw Error(T(318));
            if (
              ((i = t.memoizedState),
              (i = i !== null ? i.dehydrated : null),
              !i)
            )
              throw Error(T(317));
            i[At] = t;
          } else
            ra(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Te(t), (i = !1);
        } else yt !== null && (uc(yt), (yt = null)), (i = !0);
        if (!i) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || fe.current & 1 ? we === 0 && (we = 3) : Of())),
          t.updateQueue !== null && (t.flags |= 4),
          Te(t),
          null);
    case 4:
      return (
        ia(), tc(e, t), e === null && gi(t.stateNode.containerInfo), Te(t), null
      );
    case 10:
      return ff(t.type._context), Te(t), null;
    case 17:
      return He(t.type) && sl(), Te(t), null;
    case 19:
      if ((le(fe), (i = t.memoizedState), i === null)) return Te(t), null;
      if (((r = (t.flags & 128) !== 0), (o = i.rendering), o === null))
        if (r) Na(i, !1);
        else {
          if (we !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = gl(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Na(i, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (i = n),
                    (e = r),
                    (i.flags &= 14680066),
                    (o = i.alternate),
                    o === null
                      ? ((i.childLanes = 0),
                        (i.lanes = e),
                        (i.child = null),
                        (i.subtreeFlags = 0),
                        (i.memoizedProps = null),
                        (i.memoizedState = null),
                        (i.updateQueue = null),
                        (i.dependencies = null),
                        (i.stateNode = null))
                      : ((i.childLanes = o.childLanes),
                        (i.lanes = o.lanes),
                        (i.child = o.child),
                        (i.subtreeFlags = 0),
                        (i.deletions = null),
                        (i.memoizedProps = o.memoizedProps),
                        (i.memoizedState = o.memoizedState),
                        (i.updateQueue = o.updateQueue),
                        (i.type = o.type),
                        (e = o.dependencies),
                        (i.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return ne(fe, (fe.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          i.tail !== null &&
            me() > la &&
            ((t.flags |= 128), (r = !0), Na(i, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = gl(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Na(i, !0),
              i.tail === null && i.tailMode === "hidden" && !o.alternate && !ue)
            )
              return Te(t), null;
          } else
            2 * me() - i.renderingStartTime > la &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Na(i, !1), (t.lanes = 4194304));
        i.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = i.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (i.last = o));
      }
      return i.tail !== null
        ? ((t = i.tail),
          (i.rendering = t),
          (i.tail = t.sibling),
          (i.renderingStartTime = me()),
          (t.sibling = null),
          (n = fe.current),
          ne(fe, r ? (n & 1) | 2 : n & 1),
          t)
        : (Te(t), null);
    case 22:
    case 23:
      return (
        $f(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Xe & 1073741824 && (Te(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Te(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(T(156, t.tag));
}
function Yx(e, t) {
  switch ((lf(t), t.tag)) {
    case 1:
      return (
        He(t.type) && sl(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        ia(),
        le(Be),
        le(Re),
        vf(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return gf(t), null;
    case 13:
      if (
        (le(fe), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(T(340));
        ra();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return le(fe), null;
    case 4:
      return ia(), null;
    case 10:
      return ff(t.type._context), null;
    case 22:
    case 23:
      return $f(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var yo = !1,
  je = !1,
  Kx = typeof WeakSet == "function" ? WeakSet : Set,
  I = null;
function Hr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        he(e, t, r);
      }
    else n.current = null;
}
function nc(e, t, n) {
  try {
    n();
  } catch (r) {
    he(e, t, r);
  }
}
var Hp = !1;
function Xx(e, t) {
  if (((zu = al), (e = pv()), af(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var a = r.anchorOffset,
            i = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, i.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            l = -1,
            s = -1,
            u = 0,
            c = 0,
            f = e,
            d = null;
          t: for (;;) {
            for (
              var m;
              f !== n || (a !== 0 && f.nodeType !== 3) || (l = o + a),
                f !== i || (r !== 0 && f.nodeType !== 3) || (s = o + r),
                f.nodeType === 3 && (o += f.nodeValue.length),
                (m = f.firstChild) !== null;

            )
              (d = f), (f = m);
            for (;;) {
              if (f === e) break t;
              if (
                (d === n && ++u === a && (l = o),
                d === i && ++c === r && (s = o),
                (m = f.nextSibling) !== null)
              )
                break;
              (f = d), (d = f.parentNode);
            }
            f = m;
          }
          n = l === -1 || s === -1 ? null : { start: l, end: s };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (Du = { focusedElem: e, selectionRange: n }, al = !1, I = t; I !== null; )
    if (((t = I), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (I = e);
    else
      for (; I !== null; ) {
        t = I;
        try {
          var x = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (x !== null) {
                  var w = x.memoizedProps,
                    E = x.memoizedState,
                    v = t.stateNode,
                    p = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : vt(t.type, w),
                      E
                    );
                  v.__reactInternalSnapshotBeforeUpdate = p;
                }
                break;
              case 3:
                var b = t.stateNode.containerInfo;
                b.nodeType === 1
                  ? (b.textContent = "")
                  : b.nodeType === 9 &&
                    b.documentElement &&
                    b.removeChild(b.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(T(163));
            }
        } catch (_) {
          he(t, t.return, _);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (I = e);
          break;
        }
        I = t.return;
      }
  return (x = Hp), (Hp = !1), x;
}
function ei(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var a = (r = r.next);
    do {
      if ((a.tag & e) === e) {
        var i = a.destroy;
        (a.destroy = void 0), i !== void 0 && nc(t, n, i);
      }
      a = a.next;
    } while (a !== r);
  }
}
function Xl(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function rc(e) {
  var t = e.ref;
  if (t !== null) {
    var n = e.stateNode;
    switch (e.tag) {
      case 5:
        e = n;
        break;
      default:
        e = n;
    }
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function cm(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), cm(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[At], delete t[mi], delete t[Uu], delete t[Px], delete t[jx])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function fm(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function Up(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || fm(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function ac(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ll));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ac(e, t, n), e = e.sibling; e !== null; ) ac(e, t, n), (e = e.sibling);
}
function ic(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for (ic(e, t, n), e = e.sibling; e !== null; ) ic(e, t, n), (e = e.sibling);
}
var _e = null,
  mt = !1;
function rn(e, t, n) {
  for (n = n.child; n !== null; ) dm(e, t, n), (n = n.sibling);
}
function dm(e, t, n) {
  if (Pt && typeof Pt.onCommitFiberUnmount == "function")
    try {
      Pt.onCommitFiberUnmount(Bl, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Hr(n, t);
    case 6:
      var r = _e,
        a = mt;
      (_e = null),
        rn(e, t, n),
        (_e = r),
        (mt = a),
        _e !== null &&
          (mt
            ? ((e = _e),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : _e.removeChild(n.stateNode));
      break;
    case 18:
      _e !== null &&
        (mt
          ? ((e = _e),
            (n = n.stateNode),
            e.nodeType === 8
              ? Bs(e.parentNode, n)
              : e.nodeType === 1 && Bs(e, n),
            di(e))
          : Bs(_e, n.stateNode));
      break;
    case 4:
      (r = _e),
        (a = mt),
        (_e = n.stateNode.containerInfo),
        (mt = !0),
        rn(e, t, n),
        (_e = r),
        (mt = a);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        a = r = r.next;
        do {
          var i = a,
            o = i.destroy;
          (i = i.tag),
            o !== void 0 && (i & 2 || i & 4) && nc(n, t, o),
            (a = a.next);
        } while (a !== r);
      }
      rn(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Hr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (l) {
          he(n, t, l);
        }
      rn(e, t, n);
      break;
    case 21:
      rn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), rn(e, t, n), (je = r))
        : rn(e, t, n);
      break;
    default:
      rn(e, t, n);
  }
}
function Wp(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new Kx()),
      t.forEach(function (r) {
        var a = aw.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(a, a));
      });
  }
}
function gt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var a = n[r];
      try {
        var i = e,
          o = t,
          l = o;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (_e = l.stateNode), (mt = !1);
              break e;
            case 3:
              (_e = l.stateNode.containerInfo), (mt = !0);
              break e;
            case 4:
              (_e = l.stateNode.containerInfo), (mt = !0);
              break e;
          }
          l = l.return;
        }
        if (_e === null) throw Error(T(160));
        dm(i, o, a), (_e = null), (mt = !1);
        var s = a.alternate;
        s !== null && (s.return = null), (a.return = null);
      } catch (u) {
        he(a, t, u);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) pm(t, e), (t = t.sibling);
}
function pm(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((gt(t, e), _t(e), r & 4)) {
        try {
          ei(3, e, e.return), Xl(3, e);
        } catch (w) {
          he(e, e.return, w);
        }
        try {
          ei(5, e, e.return);
        } catch (w) {
          he(e, e.return, w);
        }
      }
      break;
    case 1:
      gt(t, e), _t(e), r & 512 && n !== null && Hr(n, n.return);
      break;
    case 5:
      if (
        (gt(t, e),
        _t(e),
        r & 512 && n !== null && Hr(n, n.return),
        e.flags & 32)
      ) {
        var a = e.stateNode;
        try {
          si(a, "");
        } catch (w) {
          he(e, e.return, w);
        }
      }
      if (r & 4 && ((a = e.stateNode), a != null)) {
        var i = e.memoizedProps,
          o = n !== null ? n.memoizedProps : i,
          l = e.type,
          s = e.updateQueue;
        if (((e.updateQueue = null), s !== null))
          try {
            l === "input" && i.type === "radio" && i.name != null && Ng(a, i),
              Au(l, o);
            var u = Au(l, i);
            for (o = 0; o < s.length; o += 2) {
              var c = s[o],
                f = s[o + 1];
              c === "style"
                ? zg(a, f)
                : c === "dangerouslySetInnerHTML"
                ? Lg(a, f)
                : c === "children"
                ? si(a, f)
                : Gc(a, c, f, u);
            }
            switch (l) {
              case "input":
                Eu(a, i);
                break;
              case "textarea":
                Fg(a, i);
                break;
              case "select":
                var d = a._wrapperState.wasMultiple;
                a._wrapperState.wasMultiple = !!i.multiple;
                var m = i.value;
                m != null
                  ? Yr(a, !!i.multiple, m, !1)
                  : d !== !!i.multiple &&
                    (i.defaultValue != null
                      ? Yr(a, !!i.multiple, i.defaultValue, !0)
                      : Yr(a, !!i.multiple, i.multiple ? [] : "", !1));
            }
            a[mi] = i;
          } catch (w) {
            he(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((gt(t, e), _t(e), r & 4)) {
        if (e.stateNode === null) throw Error(T(162));
        (a = e.stateNode), (i = e.memoizedProps);
        try {
          a.nodeValue = i;
        } catch (w) {
          he(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (gt(t, e), _t(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          di(t.containerInfo);
        } catch (w) {
          he(e, e.return, w);
        }
      break;
    case 4:
      gt(t, e), _t(e);
      break;
    case 13:
      gt(t, e),
        _t(e),
        (a = e.child),
        a.flags & 8192 &&
          ((i = a.memoizedState !== null),
          (a.stateNode.isHidden = i),
          !i ||
            (a.alternate !== null && a.alternate.memoizedState !== null) ||
            (_f = me())),
        r & 4 && Wp(e);
      break;
    case 22:
      if (
        ((c = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (u = je) || c), gt(t, e), (je = u)) : gt(t, e),
        _t(e),
        r & 8192)
      ) {
        if (
          ((u = e.memoizedState !== null),
          (e.stateNode.isHidden = u) && !c && e.mode & 1)
        )
          for (I = e, c = e.child; c !== null; ) {
            for (f = I = c; I !== null; ) {
              switch (((d = I), (m = d.child), d.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  ei(4, d, d.return);
                  break;
                case 1:
                  Hr(d, d.return);
                  var x = d.stateNode;
                  if (typeof x.componentWillUnmount == "function") {
                    (r = d), (n = d.return);
                    try {
                      (t = r),
                        (x.props = t.memoizedProps),
                        (x.state = t.memoizedState),
                        x.componentWillUnmount();
                    } catch (w) {
                      he(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Hr(d, d.return);
                  break;
                case 22:
                  if (d.memoizedState !== null) {
                    Vp(f);
                    continue;
                  }
              }
              m !== null ? ((m.return = d), (I = m)) : Vp(f);
            }
            c = c.sibling;
          }
        e: for (c = null, f = e; ; ) {
          if (f.tag === 5) {
            if (c === null) {
              c = f;
              try {
                (a = f.stateNode),
                  u
                    ? ((i = a.style),
                      typeof i.setProperty == "function"
                        ? i.setProperty("display", "none", "important")
                        : (i.display = "none"))
                    : ((l = f.stateNode),
                      (s = f.memoizedProps.style),
                      (o =
                        s != null && s.hasOwnProperty("display")
                          ? s.display
                          : null),
                      (l.style.display = Mg("display", o)));
              } catch (w) {
                he(e, e.return, w);
              }
            }
          } else if (f.tag === 6) {
            if (c === null)
              try {
                f.stateNode.nodeValue = u ? "" : f.memoizedProps;
              } catch (w) {
                he(e, e.return, w);
              }
          } else if (
            ((f.tag !== 22 && f.tag !== 23) ||
              f.memoizedState === null ||
              f === e) &&
            f.child !== null
          ) {
            (f.child.return = f), (f = f.child);
            continue;
          }
          if (f === e) break e;
          for (; f.sibling === null; ) {
            if (f.return === null || f.return === e) break e;
            c === f && (c = null), (f = f.return);
          }
          c === f && (c = null), (f.sibling.return = f.return), (f = f.sibling);
        }
      }
      break;
    case 19:
      gt(t, e), _t(e), r & 4 && Wp(e);
      break;
    case 21:
      break;
    default:
      gt(t, e), _t(e);
  }
}
function _t(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (fm(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(T(160));
      }
      switch (r.tag) {
        case 5:
          var a = r.stateNode;
          r.flags & 32 && (si(a, ""), (r.flags &= -33));
          var i = Up(e);
          ic(e, i, a);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            l = Up(e);
          ac(e, l, o);
          break;
        default:
          throw Error(T(161));
      }
    } catch (s) {
      he(e, e.return, s);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function Qx(e, t, n) {
  (I = e), hm(e);
}
function hm(e, t, n) {
  for (var r = (e.mode & 1) !== 0; I !== null; ) {
    var a = I,
      i = a.child;
    if (a.tag === 22 && r) {
      var o = a.memoizedState !== null || yo;
      if (!o) {
        var l = a.alternate,
          s = (l !== null && l.memoizedState !== null) || je;
        l = yo;
        var u = je;
        if (((yo = o), (je = s) && !u))
          for (I = a; I !== null; )
            (o = I),
              (s = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? Yp(a)
                : s !== null
                ? ((s.return = o), (I = s))
                : Yp(a);
        for (; i !== null; ) (I = i), hm(i), (i = i.sibling);
        (I = a), (yo = l), (je = u);
      }
      Gp(e);
    } else
      a.subtreeFlags & 8772 && i !== null ? ((i.return = a), (I = i)) : Gp(e);
  }
}
function Gp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Xl(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var a =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : vt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    a,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var i = t.updateQueue;
              i !== null && Op(t, i, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Op(t, o, n);
              }
              break;
            case 5:
              var l = t.stateNode;
              if (n === null && t.flags & 4) {
                n = l;
                var s = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    s.autoFocus && n.focus();
                    break;
                  case "img":
                    s.src && (n.src = s.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (t.memoizedState === null) {
                var u = t.alternate;
                if (u !== null) {
                  var c = u.memoizedState;
                  if (c !== null) {
                    var f = c.dehydrated;
                    f !== null && di(f);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(T(163));
          }
        je || (t.flags & 512 && rc(t));
      } catch (d) {
        he(t, t.return, d);
      }
    }
    if (t === e) {
      I = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Vp(e) {
  for (; I !== null; ) {
    var t = I;
    if (t === e) {
      I = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (I = n);
      break;
    }
    I = t.return;
  }
}
function Yp(e) {
  for (; I !== null; ) {
    var t = I;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Xl(4, t);
          } catch (s) {
            he(t, n, s);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var a = t.return;
            try {
              r.componentDidMount();
            } catch (s) {
              he(t, a, s);
            }
          }
          var i = t.return;
          try {
            rc(t);
          } catch (s) {
            he(t, i, s);
          }
          break;
        case 5:
          var o = t.return;
          try {
            rc(t);
          } catch (s) {
            he(t, o, s);
          }
      }
    } catch (s) {
      he(t, t.return, s);
    }
    if (t === e) {
      I = null;
      break;
    }
    var l = t.sibling;
    if (l !== null) {
      (l.return = t.return), (I = l);
      break;
    }
    I = t.return;
  }
}
var qx = Math.ceil,
  yl = Zt.ReactCurrentDispatcher,
  kf = Zt.ReactCurrentOwner,
  ut = Zt.ReactCurrentBatchConfig,
  K = 0,
  Ee = null,
  be = null,
  $e = 0,
  Xe = 0,
  Ur = Tn(0),
  we = 0,
  ki = null,
  Zn = 0,
  Ql = 0,
  Ef = 0,
  ti = null,
  ze = null,
  _f = 0,
  la = 1 / 0,
  Mt = null,
  bl = !1,
  oc = null,
  yn = null,
  bo = !1,
  fn = null,
  xl = 0,
  ni = 0,
  lc = null,
  Wo = -1,
  Go = 0;
function Ie() {
  return K & 6 ? me() : Wo !== -1 ? Wo : (Wo = me());
}
function bn(e) {
  return e.mode & 1
    ? K & 2 && $e !== 0
      ? $e & -$e
      : Nx.transition !== null
      ? (Go === 0 && (Go = qg()), Go)
      : ((e = J),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : av(e.type))),
        e)
    : 1;
}
function wt(e, t, n, r) {
  if (50 < ni) throw ((ni = 0), (lc = null), Error(T(185)));
  Mi(e, n, r),
    (!(K & 2) || e !== Ee) &&
      (e === Ee && (!(K & 2) && (Ql |= n), we === 4 && un(e, $e)),
      Ue(e, r),
      n === 1 && K === 0 && !(t.mode & 1) && ((la = me() + 500), Vl && Pn()));
}
function Ue(e, t) {
  var n = e.callbackNode;
  Nb(e, t);
  var r = rl(e, e === Ee ? $e : 0);
  if (r === 0)
    n !== null && np(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && np(n), t === 1))
      e.tag === 0 ? Rx(Kp.bind(null, e)) : kv(Kp.bind(null, e)),
        Ax(function () {
          !(K & 6) && Pn();
        }),
        (n = null);
    else {
      switch (Zg(r)) {
        case 1:
          n = Qc;
          break;
        case 4:
          n = Xg;
          break;
        case 16:
          n = nl;
          break;
        case 536870912:
          n = Qg;
          break;
        default:
          n = nl;
      }
      n = Sm(n, gm.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function gm(e, t) {
  if (((Wo = -1), (Go = 0), K & 6)) throw Error(T(327));
  var n = e.callbackNode;
  if (Zr() && e.callbackNode !== n) return null;
  var r = rl(e, e === Ee ? $e : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = wl(e, r);
  else {
    t = r;
    var a = K;
    K |= 2;
    var i = mm();
    (Ee !== e || $e !== t) && ((Mt = null), (la = me() + 500), Yn(e, t));
    do
      try {
        ew();
        break;
      } catch (l) {
        vm(e, l);
      }
    while (1);
    cf(),
      (yl.current = i),
      (K = a),
      be !== null ? (t = 0) : ((Ee = null), ($e = 0), (t = we));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((a = Nu(e)), a !== 0 && ((r = a), (t = sc(e, a)))), t === 1)
    )
      throw ((n = ki), Yn(e, 0), un(e, r), Ue(e, me()), n);
    if (t === 6) un(e, r);
    else {
      if (
        ((a = e.current.alternate),
        !(r & 30) &&
          !Zx(a) &&
          ((t = wl(e, r)),
          t === 2 && ((i = Nu(e)), i !== 0 && ((r = i), (t = sc(e, i)))),
          t === 1))
      )
        throw ((n = ki), Yn(e, 0), un(e, r), Ue(e, me()), n);
      switch (((e.finishedWork = a), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(T(345));
        case 2:
          Mn(e, ze, Mt);
          break;
        case 3:
          if (
            (un(e, r), (r & 130023424) === r && ((t = _f + 500 - me()), 10 < t))
          ) {
            if (rl(e, 0) !== 0) break;
            if (((a = e.suspendedLanes), (a & r) !== r)) {
              Ie(), (e.pingedLanes |= e.suspendedLanes & a);
              break;
            }
            e.timeoutHandle = Hu(Mn.bind(null, e, ze, Mt), t);
            break;
          }
          Mn(e, ze, Mt);
          break;
        case 4:
          if ((un(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, a = -1; 0 < r; ) {
            var o = 31 - xt(r);
            (i = 1 << o), (o = t[o]), o > a && (a = o), (r &= ~i);
          }
          if (
            ((r = a),
            (r = me() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * qx(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = Hu(Mn.bind(null, e, ze, Mt), r);
            break;
          }
          Mn(e, ze, Mt);
          break;
        case 5:
          Mn(e, ze, Mt);
          break;
        default:
          throw Error(T(329));
      }
    }
  }
  return Ue(e, me()), e.callbackNode === n ? gm.bind(null, e) : null;
}
function sc(e, t) {
  var n = ti;
  return (
    e.current.memoizedState.isDehydrated && (Yn(e, t).flags |= 256),
    (e = wl(e, t)),
    e !== 2 && ((t = ze), (ze = n), t !== null && uc(t)),
    e
  );
}
function uc(e) {
  ze === null ? (ze = e) : ze.push.apply(ze, e);
}
function Zx(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var a = n[r],
            i = a.getSnapshot;
          a = a.value;
          try {
            if (!St(i(), a)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function un(e, t) {
  for (
    t &= ~Ef,
      t &= ~Ql,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - xt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function Kp(e) {
  if (K & 6) throw Error(T(327));
  Zr();
  var t = rl(e, 0);
  if (!(t & 1)) return Ue(e, me()), null;
  var n = wl(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = Nu(e);
    r !== 0 && ((t = r), (n = sc(e, r)));
  }
  if (n === 1) throw ((n = ki), Yn(e, 0), un(e, t), Ue(e, me()), n);
  if (n === 6) throw Error(T(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Mn(e, ze, Mt),
    Ue(e, me()),
    null
  );
}
function Cf(e, t) {
  var n = K;
  K |= 1;
  try {
    return e(t);
  } finally {
    (K = n), K === 0 && ((la = me() + 500), Vl && Pn());
  }
}
function Jn(e) {
  fn !== null && fn.tag === 0 && !(K & 6) && Zr();
  var t = K;
  K |= 1;
  var n = ut.transition,
    r = J;
  try {
    if (((ut.transition = null), (J = 1), e)) return e();
  } finally {
    (J = r), (ut.transition = n), (K = t), !(K & 6) && Pn();
  }
}
function $f() {
  (Xe = Ur.current), le(Ur);
}
function Yn(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), Ox(n)), be !== null))
    for (n = be.return; n !== null; ) {
      var r = n;
      switch ((lf(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && sl();
          break;
        case 3:
          ia(), le(Be), le(Re), vf();
          break;
        case 5:
          gf(r);
          break;
        case 4:
          ia();
          break;
        case 13:
          le(fe);
          break;
        case 19:
          le(fe);
          break;
        case 10:
          ff(r.type._context);
          break;
        case 22:
        case 23:
          $f();
      }
      n = n.return;
    }
  if (
    ((Ee = e),
    (be = e = xn(e.current, null)),
    ($e = Xe = t),
    (we = 0),
    (ki = null),
    (Ef = Ql = Zn = 0),
    (ze = ti = null),
    Hn !== null)
  ) {
    for (t = 0; t < Hn.length; t++)
      if (((n = Hn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var a = r.next,
          i = n.pending;
        if (i !== null) {
          var o = i.next;
          (i.next = a), (r.next = o);
        }
        n.pending = r;
      }
    Hn = null;
  }
  return e;
}
function vm(e, t) {
  do {
    var n = be;
    try {
      if ((cf(), (Bo.current = ml), vl)) {
        for (var r = de.memoizedState; r !== null; ) {
          var a = r.queue;
          a !== null && (a.pending = null), (r = r.next);
        }
        vl = !1;
      }
      if (
        ((qn = 0),
        (ke = xe = de = null),
        (Ja = !1),
        (xi = 0),
        (kf.current = null),
        n === null || n.return === null)
      ) {
        (we = 1), (ki = t), (be = null);
        break;
      }
      e: {
        var i = e,
          o = n.return,
          l = n,
          s = t;
        if (
          ((t = $e),
          (l.flags |= 32768),
          s !== null && typeof s == "object" && typeof s.then == "function")
        ) {
          var u = s,
            c = l,
            f = c.tag;
          if (!(c.mode & 1) && (f === 0 || f === 11 || f === 15)) {
            var d = c.alternate;
            d
              ? ((c.updateQueue = d.updateQueue),
                (c.memoizedState = d.memoizedState),
                (c.lanes = d.lanes))
              : ((c.updateQueue = null), (c.memoizedState = null));
          }
          var m = Fp(o);
          if (m !== null) {
            (m.flags &= -257),
              Ip(m, o, l, i, t),
              m.mode & 1 && Np(i, u, t),
              (t = m),
              (s = u);
            var x = t.updateQueue;
            if (x === null) {
              var w = new Set();
              w.add(s), (t.updateQueue = w);
            } else x.add(s);
            break e;
          } else {
            if (!(t & 1)) {
              Np(i, u, t), Of();
              break e;
            }
            s = Error(T(426));
          }
        } else if (ue && l.mode & 1) {
          var E = Fp(o);
          if (E !== null) {
            !(E.flags & 65536) && (E.flags |= 256),
              Ip(E, o, l, i, t),
              sf(oa(s, l));
            break e;
          }
        }
        (i = s = oa(s, l)),
          we !== 4 && (we = 2),
          ti === null ? (ti = [i]) : ti.push(i),
          (i = o);
        do {
          switch (i.tag) {
            case 3:
              (i.flags |= 65536), (t &= -t), (i.lanes |= t);
              var v = Jv(i, s, t);
              $p(i, v);
              break e;
            case 1:
              l = s;
              var p = i.type,
                b = i.stateNode;
              if (
                !(i.flags & 128) &&
                (typeof p.getDerivedStateFromError == "function" ||
                  (b !== null &&
                    typeof b.componentDidCatch == "function" &&
                    (yn === null || !yn.has(b))))
              ) {
                (i.flags |= 65536), (t &= -t), (i.lanes |= t);
                var _ = em(i, l, t);
                $p(i, _);
                break e;
              }
          }
          i = i.return;
        } while (i !== null);
      }
      bm(n);
    } catch ($) {
      (t = $), be === n && n !== null && (be = n = n.return);
      continue;
    }
    break;
  } while (1);
}
function mm() {
  var e = yl.current;
  return (yl.current = ml), e === null ? ml : e;
}
function Of() {
  (we === 0 || we === 3 || we === 2) && (we = 4),
    Ee === null || (!(Zn & 268435455) && !(Ql & 268435455)) || un(Ee, $e);
}
function wl(e, t) {
  var n = K;
  K |= 2;
  var r = mm();
  (Ee !== e || $e !== t) && ((Mt = null), Yn(e, t));
  do
    try {
      Jx();
      break;
    } catch (a) {
      vm(e, a);
    }
  while (1);
  if ((cf(), (K = n), (yl.current = r), be !== null)) throw Error(T(261));
  return (Ee = null), ($e = 0), we;
}
function Jx() {
  for (; be !== null; ) ym(be);
}
function ew() {
  for (; be !== null && !_b(); ) ym(be);
}
function ym(e) {
  var t = wm(e.alternate, e, Xe);
  (e.memoizedProps = e.pendingProps),
    t === null ? bm(e) : (be = t),
    (kf.current = null);
}
function bm(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = Yx(n, t)), n !== null)) {
        (n.flags &= 32767), (be = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (we = 6), (be = null);
        return;
      }
    } else if (((n = Vx(n, t, Xe)), n !== null)) {
      be = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      be = t;
      return;
    }
    be = t = e;
  } while (t !== null);
  we === 0 && (we = 5);
}
function Mn(e, t, n) {
  var r = J,
    a = ut.transition;
  try {
    (ut.transition = null), (J = 1), tw(e, t, n, r);
  } finally {
    (ut.transition = a), (J = r);
  }
  return null;
}
function tw(e, t, n, r) {
  do Zr();
  while (fn !== null);
  if (K & 6) throw Error(T(327));
  n = e.finishedWork;
  var a = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(T(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var i = n.lanes | n.childLanes;
  if (
    (Fb(e, i),
    e === Ee && ((be = Ee = null), ($e = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      bo ||
      ((bo = !0),
      Sm(nl, function () {
        return Zr(), null;
      })),
    (i = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || i)
  ) {
    (i = ut.transition), (ut.transition = null);
    var o = J;
    J = 1;
    var l = K;
    (K |= 4),
      (kf.current = null),
      Xx(e, n),
      pm(n, e),
      wx(Du),
      (al = !!zu),
      (Du = zu = null),
      (e.current = n),
      Qx(n),
      Cb(),
      (K = l),
      (J = o),
      (ut.transition = i);
  } else e.current = n;
  if (
    (bo && ((bo = !1), (fn = e), (xl = a)),
    (i = e.pendingLanes),
    i === 0 && (yn = null),
    Ab(n.stateNode),
    Ue(e, me()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (a = t[n]), r(a.value, { componentStack: a.stack, digest: a.digest });
  if (bl) throw ((bl = !1), (e = oc), (oc = null), e);
  return (
    xl & 1 && e.tag !== 0 && Zr(),
    (i = e.pendingLanes),
    i & 1 ? (e === lc ? ni++ : ((ni = 0), (lc = e))) : (ni = 0),
    Pn(),
    null
  );
}
function Zr() {
  if (fn !== null) {
    var e = Zg(xl),
      t = ut.transition,
      n = J;
    try {
      if (((ut.transition = null), (J = 16 > e ? 16 : e), fn === null))
        var r = !1;
      else {
        if (((e = fn), (fn = null), (xl = 0), K & 6)) throw Error(T(331));
        var a = K;
        for (K |= 4, I = e.current; I !== null; ) {
          var i = I,
            o = i.child;
          if (I.flags & 16) {
            var l = i.deletions;
            if (l !== null) {
              for (var s = 0; s < l.length; s++) {
                var u = l[s];
                for (I = u; I !== null; ) {
                  var c = I;
                  switch (c.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ei(8, c, i);
                  }
                  var f = c.child;
                  if (f !== null) (f.return = c), (I = f);
                  else
                    for (; I !== null; ) {
                      c = I;
                      var d = c.sibling,
                        m = c.return;
                      if ((cm(c), c === u)) {
                        I = null;
                        break;
                      }
                      if (d !== null) {
                        (d.return = m), (I = d);
                        break;
                      }
                      I = m;
                    }
                }
              }
              var x = i.alternate;
              if (x !== null) {
                var w = x.child;
                if (w !== null) {
                  x.child = null;
                  do {
                    var E = w.sibling;
                    (w.sibling = null), (w = E);
                  } while (w !== null);
                }
              }
              I = i;
            }
          }
          if (i.subtreeFlags & 2064 && o !== null) (o.return = i), (I = o);
          else
            e: for (; I !== null; ) {
              if (((i = I), i.flags & 2048))
                switch (i.tag) {
                  case 0:
                  case 11:
                  case 15:
                    ei(9, i, i.return);
                }
              var v = i.sibling;
              if (v !== null) {
                (v.return = i.return), (I = v);
                break e;
              }
              I = i.return;
            }
        }
        var p = e.current;
        for (I = p; I !== null; ) {
          o = I;
          var b = o.child;
          if (o.subtreeFlags & 2064 && b !== null) (b.return = o), (I = b);
          else
            e: for (o = p; I !== null; ) {
              if (((l = I), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Xl(9, l);
                  }
                } catch ($) {
                  he(l, l.return, $);
                }
              if (l === o) {
                I = null;
                break e;
              }
              var _ = l.sibling;
              if (_ !== null) {
                (_.return = l.return), (I = _);
                break e;
              }
              I = l.return;
            }
        }
        if (
          ((K = a), Pn(), Pt && typeof Pt.onPostCommitFiberRoot == "function")
        )
          try {
            Pt.onPostCommitFiberRoot(Bl, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (J = n), (ut.transition = t);
    }
  }
  return !1;
}
function Xp(e, t, n) {
  (t = oa(n, t)),
    (t = Jv(e, t, 1)),
    (e = mn(e, t, 1)),
    (t = Ie()),
    e !== null && (Mi(e, 1, t), Ue(e, t));
}
function he(e, t, n) {
  if (e.tag === 3) Xp(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        Xp(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (yn === null || !yn.has(r)))
        ) {
          (e = oa(n, e)),
            (e = em(t, e, 1)),
            (t = mn(t, e, 1)),
            (e = Ie()),
            t !== null && (Mi(t, 1, e), Ue(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function nw(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Ie()),
    (e.pingedLanes |= e.suspendedLanes & n),
    Ee === e &&
      ($e & n) === n &&
      (we === 4 || (we === 3 && ($e & 130023424) === $e && 500 > me() - _f)
        ? Yn(e, 0)
        : (Ef |= n)),
    Ue(e, t);
}
function xm(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = so), (so <<= 1), !(so & 130023424) && (so = 4194304))
      : (t = 1));
  var n = Ie();
  (e = Yt(e, t)), e !== null && (Mi(e, t, n), Ue(e, n));
}
function rw(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), xm(e, n);
}
function aw(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        a = e.memoizedState;
      a !== null && (n = a.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(T(314));
  }
  r !== null && r.delete(t), xm(e, n);
}
var wm;
wm = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Be.current) De = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (De = !1), Gx(e, t, n);
      De = !!(e.flags & 131072);
    }
  else (De = !1), ue && t.flags & 1048576 && Ev(t, fl, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Uo(e, t), (e = t.pendingProps);
      var a = na(t, Re.current);
      qr(t, n), (a = yf(null, t, r, e, a, n));
      var i = bf();
      return (
        (t.flags |= 1),
        typeof a == "object" &&
        a !== null &&
        typeof a.render == "function" &&
        a.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            He(r) ? ((i = !0), ul(t)) : (i = !1),
            (t.memoizedState =
              a.state !== null && a.state !== void 0 ? a.state : null),
            pf(t),
            (a.updater = Yl),
            (t.stateNode = a),
            (a._reactInternals = t),
            Xu(t, r, e, n),
            (t = Zu(null, t, r, !0, i, n)))
          : ((t.tag = 0), ue && i && of(t), Fe(null, t, a, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Uo(e, t),
          (e = t.pendingProps),
          (a = r._init),
          (r = a(r._payload)),
          (t.type = r),
          (a = t.tag = ow(r)),
          (e = vt(r, e)),
          a)
        ) {
          case 0:
            t = qu(null, t, r, e, n);
            break e;
          case 1:
            t = zp(null, t, r, e, n);
            break e;
          case 11:
            t = Lp(null, t, r, e, n);
            break e;
          case 14:
            t = Mp(null, t, r, vt(r.type, e), n);
            break e;
        }
        throw Error(T(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : vt(r, a)),
        qu(e, t, r, a, n)
      );
    case 1:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : vt(r, a)),
        zp(e, t, r, a, n)
      );
    case 3:
      e: {
        if ((am(t), e === null)) throw Error(T(387));
        (r = t.pendingProps),
          (i = t.memoizedState),
          (a = i.element),
          Ov(e, t),
          hl(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), i.isDehydrated))
          if (
            ((i = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = i),
            (t.memoizedState = i),
            t.flags & 256)
          ) {
            (a = oa(Error(T(423)), t)), (t = Dp(e, t, r, n, a));
            break e;
          } else if (r !== a) {
            (a = oa(Error(T(424)), t)), (t = Dp(e, t, r, n, a));
            break e;
          } else
            for (
              Qe = vn(t.stateNode.containerInfo.firstChild),
                qe = t,
                ue = !0,
                yt = null,
                n = jv(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((ra(), r === a)) {
            t = Kt(e, t, n);
            break e;
          }
          Fe(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Rv(t),
        e === null && Vu(t),
        (r = t.type),
        (a = t.pendingProps),
        (i = e !== null ? e.memoizedProps : null),
        (o = a.children),
        Bu(r, a) ? (o = null) : i !== null && Bu(r, i) && (t.flags |= 32),
        rm(e, t),
        Fe(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && Vu(t), null;
    case 13:
      return im(e, t, n);
    case 4:
      return (
        hf(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = aa(t, null, r, n)) : Fe(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : vt(r, a)),
        Lp(e, t, r, a, n)
      );
    case 7:
      return Fe(e, t, t.pendingProps, n), t.child;
    case 8:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return Fe(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (a = t.pendingProps),
          (i = t.memoizedProps),
          (o = a.value),
          ne(dl, r._currentValue),
          (r._currentValue = o),
          i !== null)
        )
          if (St(i.value, o)) {
            if (i.children === a.children && !Be.current) {
              t = Kt(e, t, n);
              break e;
            }
          } else
            for (i = t.child, i !== null && (i.return = t); i !== null; ) {
              var l = i.dependencies;
              if (l !== null) {
                o = i.child;
                for (var s = l.firstContext; s !== null; ) {
                  if (s.context === r) {
                    if (i.tag === 1) {
                      (s = Ut(-1, n & -n)), (s.tag = 2);
                      var u = i.updateQueue;
                      if (u !== null) {
                        u = u.shared;
                        var c = u.pending;
                        c === null
                          ? (s.next = s)
                          : ((s.next = c.next), (c.next = s)),
                          (u.pending = s);
                      }
                    }
                    (i.lanes |= n),
                      (s = i.alternate),
                      s !== null && (s.lanes |= n),
                      Yu(i.return, n, t),
                      (l.lanes |= n);
                    break;
                  }
                  s = s.next;
                }
              } else if (i.tag === 10) o = i.type === t.type ? null : i.child;
              else if (i.tag === 18) {
                if (((o = i.return), o === null)) throw Error(T(341));
                (o.lanes |= n),
                  (l = o.alternate),
                  l !== null && (l.lanes |= n),
                  Yu(o, n, t),
                  (o = i.sibling);
              } else o = i.child;
              if (o !== null) o.return = i;
              else
                for (o = i; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((i = o.sibling), i !== null)) {
                    (i.return = o.return), (o = i);
                    break;
                  }
                  o = o.return;
                }
              i = o;
            }
        Fe(e, t, a.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (a = t.type),
        (r = t.pendingProps.children),
        qr(t, n),
        (a = ct(a)),
        (r = r(a)),
        (t.flags |= 1),
        Fe(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (a = vt(r, t.pendingProps)),
        (a = vt(r.type, a)),
        Mp(e, t, r, a, n)
      );
    case 15:
      return tm(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (a = t.pendingProps),
        (a = t.elementType === r ? a : vt(r, a)),
        Uo(e, t),
        (t.tag = 1),
        He(r) ? ((e = !0), ul(t)) : (e = !1),
        qr(t, n),
        Tv(t, r, a),
        Xu(t, r, a, n),
        Zu(null, t, r, !0, e, n)
      );
    case 19:
      return om(e, t, n);
    case 22:
      return nm(e, t, n);
  }
  throw Error(T(156, t.tag));
};
function Sm(e, t) {
  return Kg(e, t);
}
function iw(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function st(e, t, n, r) {
  return new iw(e, t, n, r);
}
function Af(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function ow(e) {
  if (typeof e == "function") return Af(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === Yc)) return 11;
    if (e === Kc) return 14;
  }
  return 2;
}
function xn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = st(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Vo(e, t, n, r, a, i) {
  var o = 2;
  if (((r = e), typeof e == "function")) Af(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Rr:
        return Kn(n.children, a, i, t);
      case Vc:
        (o = 8), (a |= 8);
        break;
      case bu:
        return (
          (e = st(12, n, t, a | 2)), (e.elementType = bu), (e.lanes = i), e
        );
      case xu:
        return (e = st(13, n, t, a)), (e.elementType = xu), (e.lanes = i), e;
      case wu:
        return (e = st(19, n, t, a)), (e.elementType = wu), (e.lanes = i), e;
      case Pg:
        return ql(n, a, i, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Ag:
              o = 10;
              break e;
            case Tg:
              o = 9;
              break e;
            case Yc:
              o = 11;
              break e;
            case Kc:
              o = 14;
              break e;
            case on:
              (o = 16), (r = null);
              break e;
          }
        throw Error(T(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = st(o, n, t, a)), (t.elementType = e), (t.type = r), (t.lanes = i), t
  );
}
function Kn(e, t, n, r) {
  return (e = st(7, e, r, t)), (e.lanes = n), e;
}
function ql(e, t, n, r) {
  return (
    (e = st(22, e, r, t)),
    (e.elementType = Pg),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Xs(e, t, n) {
  return (e = st(6, e, null, t)), (e.lanes = n), e;
}
function Qs(e, t, n) {
  return (
    (t = st(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function lw(e, t, n, r, a) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ts(0)),
    (this.expirationTimes = Ts(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ts(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = a),
    (this.mutableSourceEagerHydrationData = null);
}
function Tf(e, t, n, r, a, i, o, l, s) {
  return (
    (e = new lw(e, t, n, l, s)),
    t === 1 ? ((t = 1), i === !0 && (t |= 8)) : (t = 0),
    (i = st(3, null, null, t)),
    (e.current = i),
    (i.stateNode = e),
    (i.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    pf(i),
    e
  );
}
function sw(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: jr,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function km(e) {
  if (!e) return Sn;
  e = e._reactInternals;
  e: {
    if (ar(e) !== e || e.tag !== 1) throw Error(T(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (He(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(T(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (He(n)) return Sv(e, n, t);
  }
  return t;
}
function Em(e, t, n, r, a, i, o, l, s) {
  return (
    (e = Tf(n, r, !0, e, a, i, o, l, s)),
    (e.context = km(null)),
    (n = e.current),
    (r = Ie()),
    (a = bn(n)),
    (i = Ut(r, a)),
    (i.callback = t ?? null),
    mn(n, i, a),
    (e.current.lanes = a),
    Mi(e, a, r),
    Ue(e, r),
    e
  );
}
function Zl(e, t, n, r) {
  var a = t.current,
    i = Ie(),
    o = bn(a);
  return (
    (n = km(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = Ut(i, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = mn(a, t, o)),
    e !== null && (wt(e, a, o, i), Do(e, a, o)),
    o
  );
}
function Sl(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function Qp(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function Pf(e, t) {
  Qp(e, t), (e = e.alternate) && Qp(e, t);
}
function uw() {
  return null;
}
var _m =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function jf(e) {
  this._internalRoot = e;
}
Jl.prototype.render = jf.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(T(409));
  Zl(e, t, null, null);
};
Jl.prototype.unmount = jf.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    Jn(function () {
      Zl(null, e, null, null);
    }),
      (t[Vt] = null);
  }
};
function Jl(e) {
  this._internalRoot = e;
}
Jl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = tv();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < sn.length && t !== 0 && t < sn[n].priority; n++);
    sn.splice(n, 0, e), n === 0 && rv(e);
  }
};
function Rf(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function es(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function qp() {}
function cw(e, t, n, r, a) {
  if (a) {
    if (typeof r == "function") {
      var i = r;
      r = function () {
        var u = Sl(o);
        i.call(u);
      };
    }
    var o = Em(t, r, e, 0, null, !1, !1, "", qp);
    return (
      (e._reactRootContainer = o),
      (e[Vt] = o.current),
      gi(e.nodeType === 8 ? e.parentNode : e),
      Jn(),
      o
    );
  }
  for (; (a = e.lastChild); ) e.removeChild(a);
  if (typeof r == "function") {
    var l = r;
    r = function () {
      var u = Sl(s);
      l.call(u);
    };
  }
  var s = Tf(e, 0, !1, null, null, !1, !1, "", qp);
  return (
    (e._reactRootContainer = s),
    (e[Vt] = s.current),
    gi(e.nodeType === 8 ? e.parentNode : e),
    Jn(function () {
      Zl(t, s, n, r);
    }),
    s
  );
}
function ts(e, t, n, r, a) {
  var i = n._reactRootContainer;
  if (i) {
    var o = i;
    if (typeof a == "function") {
      var l = a;
      a = function () {
        var s = Sl(o);
        l.call(s);
      };
    }
    Zl(t, o, e, a);
  } else o = cw(n, t, e, a, r);
  return Sl(o);
}
Jg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Ua(t.pendingLanes);
        n !== 0 &&
          (qc(t, n | 1), Ue(t, me()), !(K & 6) && ((la = me() + 500), Pn()));
      }
      break;
    case 13:
      Jn(function () {
        var r = Yt(e, 1);
        if (r !== null) {
          var a = Ie();
          wt(r, e, 1, a);
        }
      }),
        Pf(e, 1);
  }
};
Zc = function (e) {
  if (e.tag === 13) {
    var t = Yt(e, 134217728);
    if (t !== null) {
      var n = Ie();
      wt(t, e, 134217728, n);
    }
    Pf(e, 134217728);
  }
};
ev = function (e) {
  if (e.tag === 13) {
    var t = bn(e),
      n = Yt(e, t);
    if (n !== null) {
      var r = Ie();
      wt(n, e, t, r);
    }
    Pf(e, t);
  }
};
tv = function () {
  return J;
};
nv = function (e, t) {
  var n = J;
  try {
    return (J = e), t();
  } finally {
    J = n;
  }
};
Pu = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Eu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var a = Gl(r);
            if (!a) throw Error(T(90));
            Rg(r), Eu(r, a);
          }
        }
      }
      break;
    case "textarea":
      Fg(e, n);
      break;
    case "select":
      (t = n.value), t != null && Yr(e, !!n.multiple, t, !1);
  }
};
Hg = Cf;
Ug = Jn;
var fw = { usingClientEntryPoint: !1, Events: [Di, Lr, Gl, Dg, Bg, Cf] },
  Fa = {
    findFiberByHostInstance: Bn,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  dw = {
    bundleType: Fa.bundleType,
    version: Fa.version,
    rendererPackageName: Fa.rendererPackageName,
    rendererConfig: Fa.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: Zt.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = Vg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Fa.findFiberByHostInstance || uw,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var xo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!xo.isDisabled && xo.supportsFiber)
    try {
      (Bl = xo.inject(dw)), (Pt = xo);
    } catch {}
}
tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fw;
tt.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Rf(t)) throw Error(T(200));
  return sw(e, t, null, n);
};
tt.createRoot = function (e, t) {
  if (!Rf(e)) throw Error(T(299));
  var n = !1,
    r = "",
    a = _m;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (a = t.onRecoverableError)),
    (t = Tf(e, 1, !1, null, null, n, !1, r, a)),
    (e[Vt] = t.current),
    gi(e.nodeType === 8 ? e.parentNode : e),
    new jf(t)
  );
};
tt.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(T(188))
      : ((e = Object.keys(e).join(",")), Error(T(268, e)));
  return (e = Vg(t)), (e = e === null ? null : e.stateNode), e;
};
tt.flushSync = function (e) {
  return Jn(e);
};
tt.hydrate = function (e, t, n) {
  if (!es(t)) throw Error(T(200));
  return ts(null, e, t, !0, n);
};
tt.hydrateRoot = function (e, t, n) {
  if (!Rf(e)) throw Error(T(405));
  var r = (n != null && n.hydratedSources) || null,
    a = !1,
    i = "",
    o = _m;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (a = !0),
      n.identifierPrefix !== void 0 && (i = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Em(t, null, e, 1, n ?? null, a, !1, i, o)),
    (e[Vt] = t.current),
    gi(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (a = n._getVersion),
        (a = a(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, a])
          : t.mutableSourceEagerHydrationData.push(n, a);
  return new Jl(t);
};
tt.render = function (e, t, n) {
  if (!es(t)) throw Error(T(200));
  return ts(null, e, t, !1, n);
};
tt.unmountComponentAtNode = function (e) {
  if (!es(e)) throw Error(T(40));
  return e._reactRootContainer
    ? (Jn(function () {
        ts(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[Vt] = null);
        });
      }),
      !0)
    : !1;
};
tt.unstable_batchedUpdates = Cf;
tt.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!es(n)) throw Error(T(200));
  if (e == null || e._reactInternals === void 0) throw Error(T(38));
  return ts(e, t, n, !1, r);
};
tt.version = "18.2.0-next-9e3b772b8-20220608";
function Cm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Cm);
    } catch (e) {
      console.error(e);
    }
}
Cm(), (Eg.exports = tt);
var pw = Eg.exports,
  $m,
  Zp = pw;
($m = Zp.createRoot), Zp.hydrateRoot;
const Om = "" + new URL("pic_1-726122b5.jpg", import.meta.url).href,
  hw = "" + new URL("pic_2-ae471b04.jpg", import.meta.url).href,
  gw = "" + new URL("pic_3-73878ef4.jpg", import.meta.url).href,
  vw = "" + new URL("pic_4-69648edd.jpg", import.meta.url).href,
  mw = "" + new URL("pic_5-c5a0eed7.jpg", import.meta.url).href,
  yw = "" + new URL("pic_6-2b0af404.jpg", import.meta.url).href,
  bw = "" + new URL("pic_7-07de2a36.jpg", import.meta.url).href,
  xw = "" + new URL("pic_8-3135c4b7.png", import.meta.url).href;
function cc() {
  return (
    (cc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    cc.apply(this, arguments)
  );
}
function Am(e) {
  var t = Object.create(null);
  return function (n) {
    return t[n] === void 0 && (t[n] = e(n)), t[n];
  };
}
var ww =
    /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,
  Sw = Am(function (e) {
    return (
      ww.test(e) ||
      (e.charCodeAt(0) === 111 &&
        e.charCodeAt(1) === 110 &&
        e.charCodeAt(2) < 91)
    );
  });
function kw(e) {
  if (e.sheet) return e.sheet;
  for (var t = 0; t < document.styleSheets.length; t++)
    if (document.styleSheets[t].ownerNode === e) return document.styleSheets[t];
}
function Ew(e) {
  var t = document.createElement("style");
  return (
    t.setAttribute("data-emotion", e.key),
    e.nonce !== void 0 && t.setAttribute("nonce", e.nonce),
    t.appendChild(document.createTextNode("")),
    t.setAttribute("data-s", ""),
    t
  );
}
var _w = (function () {
    function e(n) {
      var r = this;
      (this._insertTag = function (a) {
        var i;
        r.tags.length === 0
          ? r.insertionPoint
            ? (i = r.insertionPoint.nextSibling)
            : r.prepend
            ? (i = r.container.firstChild)
            : (i = r.before)
          : (i = r.tags[r.tags.length - 1].nextSibling),
          r.container.insertBefore(a, i),
          r.tags.push(a);
      }),
        (this.isSpeedy = n.speedy === void 0 ? !0 : n.speedy),
        (this.tags = []),
        (this.ctr = 0),
        (this.nonce = n.nonce),
        (this.key = n.key),
        (this.container = n.container),
        (this.prepend = n.prepend),
        (this.insertionPoint = n.insertionPoint),
        (this.before = null);
    }
    var t = e.prototype;
    return (
      (t.hydrate = function (r) {
        r.forEach(this._insertTag);
      }),
      (t.insert = function (r) {
        this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 &&
          this._insertTag(Ew(this));
        var a = this.tags[this.tags.length - 1];
        if (this.isSpeedy) {
          var i = kw(a);
          try {
            i.insertRule(r, i.cssRules.length);
          } catch {}
        } else a.appendChild(document.createTextNode(r));
        this.ctr++;
      }),
      (t.flush = function () {
        this.tags.forEach(function (r) {
          return r.parentNode && r.parentNode.removeChild(r);
        }),
          (this.tags = []),
          (this.ctr = 0);
      }),
      e
    );
  })(),
  Pe = "-ms-",
  kl = "-moz-",
  q = "-webkit-",
  Tm = "comm",
  Nf = "rule",
  Ff = "decl",
  Cw = "@import",
  Pm = "@keyframes",
  $w = "@layer",
  Ow = Math.abs,
  ns = String.fromCharCode,
  Aw = Object.assign;
function Tw(e, t) {
  return Ce(e, 0) ^ 45
    ? (((((((t << 2) ^ Ce(e, 0)) << 2) ^ Ce(e, 1)) << 2) ^ Ce(e, 2)) << 2) ^
        Ce(e, 3)
    : 0;
}
function jm(e) {
  return e.trim();
}
function Pw(e, t) {
  return (e = t.exec(e)) ? e[0] : e;
}
function Z(e, t, n) {
  return e.replace(t, n);
}
function fc(e, t) {
  return e.indexOf(t);
}
function Ce(e, t) {
  return e.charCodeAt(t) | 0;
}
function Ei(e, t, n) {
  return e.slice(t, n);
}
function $t(e) {
  return e.length;
}
function If(e) {
  return e.length;
}
function wo(e, t) {
  return t.push(e), e;
}
function jw(e, t) {
  return e.map(t).join("");
}
var rs = 1,
  sa = 1,
  Rm = 0,
  We = 0,
  ye = 0,
  pa = "";
function as(e, t, n, r, a, i, o) {
  return {
    value: e,
    root: t,
    parent: n,
    type: r,
    props: a,
    children: i,
    line: rs,
    column: sa,
    length: o,
    return: "",
  };
}
function Ia(e, t) {
  return Aw(as("", null, null, "", null, null, 0), e, { length: -e.length }, t);
}
function Rw() {
  return ye;
}
function Nw() {
  return (
    (ye = We > 0 ? Ce(pa, --We) : 0), sa--, ye === 10 && ((sa = 1), rs--), ye
  );
}
function Ze() {
  return (
    (ye = We < Rm ? Ce(pa, We++) : 0), sa++, ye === 10 && ((sa = 1), rs++), ye
  );
}
function Rt() {
  return Ce(pa, We);
}
function Yo() {
  return We;
}
function Hi(e, t) {
  return Ei(pa, e, t);
}
function _i(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Nm(e) {
  return (rs = sa = 1), (Rm = $t((pa = e))), (We = 0), [];
}
function Fm(e) {
  return (pa = ""), e;
}
function Ko(e) {
  return jm(Hi(We - 1, dc(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Fw(e) {
  for (; (ye = Rt()) && ye < 33; ) Ze();
  return _i(e) > 2 || _i(ye) > 3 ? "" : " ";
}
function Iw(e, t) {
  for (
    ;
    --t &&
    Ze() &&
    !(ye < 48 || ye > 102 || (ye > 57 && ye < 65) || (ye > 70 && ye < 97));

  );
  return Hi(e, Yo() + (t < 6 && Rt() == 32 && Ze() == 32));
}
function dc(e) {
  for (; Ze(); )
    switch (ye) {
      case e:
        return We;
      case 34:
      case 39:
        e !== 34 && e !== 39 && dc(ye);
        break;
      case 40:
        e === 41 && dc(e);
        break;
      case 92:
        Ze();
        break;
    }
  return We;
}
function Lw(e, t) {
  for (; Ze() && e + ye !== 47 + 10; )
    if (e + ye === 42 + 42 && Rt() === 47) break;
  return "/*" + Hi(t, We - 1) + "*" + ns(e === 47 ? e : Ze());
}
function Mw(e) {
  for (; !_i(Rt()); ) Ze();
  return Hi(e, We);
}
function zw(e) {
  return Fm(Xo("", null, null, null, [""], (e = Nm(e)), 0, [0], e));
}
function Xo(e, t, n, r, a, i, o, l, s) {
  for (
    var u = 0,
      c = 0,
      f = o,
      d = 0,
      m = 0,
      x = 0,
      w = 1,
      E = 1,
      v = 1,
      p = 0,
      b = "",
      _ = a,
      $ = i,
      A = r,
      O = b;
    E;

  )
    switch (((x = p), (p = Ze()))) {
      case 40:
        if (x != 108 && Ce(O, f - 1) == 58) {
          fc((O += Z(Ko(p), "&", "&\f")), "&\f") != -1 && (v = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        O += Ko(p);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        O += Fw(x);
        break;
      case 92:
        O += Iw(Yo() - 1, 7);
        continue;
      case 47:
        switch (Rt()) {
          case 42:
          case 47:
            wo(Dw(Lw(Ze(), Yo()), t, n), s);
            break;
          default:
            O += "/";
        }
        break;
      case 123 * w:
        l[u++] = $t(O) * v;
      case 125 * w:
      case 59:
      case 0:
        switch (p) {
          case 0:
          case 125:
            E = 0;
          case 59 + c:
            v == -1 && (O = Z(O, /\f/g, "")),
              m > 0 &&
                $t(O) - f &&
                wo(
                  m > 32
                    ? eh(O + ";", r, n, f - 1)
                    : eh(Z(O, " ", "") + ";", r, n, f - 2),
                  s
                );
            break;
          case 59:
            O += ";";
          default:
            if (
              (wo((A = Jp(O, t, n, u, c, a, l, b, (_ = []), ($ = []), f)), i),
              p === 123)
            )
              if (c === 0) Xo(O, t, A, A, _, i, f, l, $);
              else
                switch (d === 99 && Ce(O, 3) === 110 ? 100 : d) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Xo(
                      e,
                      A,
                      A,
                      r && wo(Jp(e, A, A, 0, 0, a, l, b, a, (_ = []), f), $),
                      a,
                      $,
                      f,
                      l,
                      r ? _ : $
                    );
                    break;
                  default:
                    Xo(O, A, A, A, [""], $, 0, l, $);
                }
        }
        (u = c = m = 0), (w = v = 1), (b = O = ""), (f = o);
        break;
      case 58:
        (f = 1 + $t(O)), (m = x);
      default:
        if (w < 1) {
          if (p == 123) --w;
          else if (p == 125 && w++ == 0 && Nw() == 125) continue;
        }
        switch (((O += ns(p)), p * w)) {
          case 38:
            v = c > 0 ? 1 : ((O += "\f"), -1);
            break;
          case 44:
            (l[u++] = ($t(O) - 1) * v), (v = 1);
            break;
          case 64:
            Rt() === 45 && (O += Ko(Ze())),
              (d = Rt()),
              (c = f = $t((b = O += Mw(Yo())))),
              p++;
            break;
          case 45:
            x === 45 && $t(O) == 2 && (w = 0);
        }
    }
  return i;
}
function Jp(e, t, n, r, a, i, o, l, s, u, c) {
  for (
    var f = a - 1, d = a === 0 ? i : [""], m = If(d), x = 0, w = 0, E = 0;
    x < r;
    ++x
  )
    for (var v = 0, p = Ei(e, f + 1, (f = Ow((w = o[x])))), b = e; v < m; ++v)
      (b = jm(w > 0 ? d[v] + " " + p : Z(p, /&\f/g, d[v]))) && (s[E++] = b);
  return as(e, t, n, a === 0 ? Nf : l, s, u, c);
}
function Dw(e, t, n) {
  return as(e, t, n, Tm, ns(Rw()), Ei(e, 2, -2), 0);
}
function eh(e, t, n, r) {
  return as(e, t, n, Ff, Ei(e, 0, r), Ei(e, r + 1, -1), r);
}
function Jr(e, t) {
  for (var n = "", r = If(e), a = 0; a < r; a++) n += t(e[a], a, e, t) || "";
  return n;
}
function Bw(e, t, n, r) {
  switch (e.type) {
    case $w:
      if (e.children.length) break;
    case Cw:
    case Ff:
      return (e.return = e.return || e.value);
    case Tm:
      return "";
    case Pm:
      return (e.return = e.value + "{" + Jr(e.children, r) + "}");
    case Nf:
      e.value = e.props.join(",");
  }
  return $t((n = Jr(e.children, r)))
    ? (e.return = e.value + "{" + n + "}")
    : "";
}
function Hw(e) {
  var t = If(e);
  return function (n, r, a, i) {
    for (var o = "", l = 0; l < t; l++) o += e[l](n, r, a, i) || "";
    return o;
  };
}
function Uw(e) {
  return function (t) {
    t.root || ((t = t.return) && e(t));
  };
}
var Ww = function (t, n, r) {
    for (
      var a = 0, i = 0;
      (a = i), (i = Rt()), a === 38 && i === 12 && (n[r] = 1), !_i(i);

    )
      Ze();
    return Hi(t, We);
  },
  Gw = function (t, n) {
    var r = -1,
      a = 44;
    do
      switch (_i(a)) {
        case 0:
          a === 38 && Rt() === 12 && (n[r] = 1), (t[r] += Ww(We - 1, n, r));
          break;
        case 2:
          t[r] += Ko(a);
          break;
        case 4:
          if (a === 44) {
            (t[++r] = Rt() === 58 ? "&\f" : ""), (n[r] = t[r].length);
            break;
          }
        default:
          t[r] += ns(a);
      }
    while ((a = Ze()));
    return t;
  },
  Vw = function (t, n) {
    return Fm(Gw(Nm(t), n));
  },
  th = new WeakMap(),
  Yw = function (t) {
    if (!(t.type !== "rule" || !t.parent || t.length < 1)) {
      for (
        var n = t.value,
          r = t.parent,
          a = t.column === r.column && t.line === r.line;
        r.type !== "rule";

      )
        if (((r = r.parent), !r)) return;
      if (
        !(t.props.length === 1 && n.charCodeAt(0) !== 58 && !th.get(r)) &&
        !a
      ) {
        th.set(t, !0);
        for (
          var i = [], o = Vw(n, i), l = r.props, s = 0, u = 0;
          s < o.length;
          s++
        )
          for (var c = 0; c < l.length; c++, u++)
            t.props[u] = i[s] ? o[s].replace(/&\f/g, l[c]) : l[c] + " " + o[s];
      }
    }
  },
  Kw = function (t) {
    if (t.type === "decl") {
      var n = t.value;
      n.charCodeAt(0) === 108 &&
        n.charCodeAt(2) === 98 &&
        ((t.return = ""), (t.value = ""));
    }
  };
function Im(e, t) {
  switch (Tw(e, t)) {
    case 5103:
      return q + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return q + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return q + e + kl + e + Pe + e + e;
    case 6828:
    case 4268:
      return q + e + Pe + e + e;
    case 6165:
      return q + e + Pe + "flex-" + e + e;
    case 5187:
      return (
        q + e + Z(e, /(\w+).+(:[^]+)/, q + "box-$1$2" + Pe + "flex-$1$2") + e
      );
    case 5443:
      return q + e + Pe + "flex-item-" + Z(e, /flex-|-self/, "") + e;
    case 4675:
      return (
        q +
        e +
        Pe +
        "flex-line-pack" +
        Z(e, /align-content|flex-|-self/, "") +
        e
      );
    case 5548:
      return q + e + Pe + Z(e, "shrink", "negative") + e;
    case 5292:
      return q + e + Pe + Z(e, "basis", "preferred-size") + e;
    case 6060:
      return (
        q +
        "box-" +
        Z(e, "-grow", "") +
        q +
        e +
        Pe +
        Z(e, "grow", "positive") +
        e
      );
    case 4554:
      return q + Z(e, /([^-])(transform)/g, "$1" + q + "$2") + e;
    case 6187:
      return (
        Z(Z(Z(e, /(zoom-|grab)/, q + "$1"), /(image-set)/, q + "$1"), e, "") + e
      );
    case 5495:
    case 3959:
      return Z(e, /(image-set\([^]*)/, q + "$1$`$1");
    case 4968:
      return (
        Z(
          Z(e, /(.+:)(flex-)?(.*)/, q + "box-pack:$3" + Pe + "flex-pack:$3"),
          /s.+-b[^;]+/,
          "justify"
        ) +
        q +
        e +
        e
      );
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Z(e, /(.+)-inline(.+)/, q + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if ($t(e) - 1 - t > 6)
        switch (Ce(e, t + 1)) {
          case 109:
            if (Ce(e, t + 4) !== 45) break;
          case 102:
            return (
              Z(
                e,
                /(.+:)(.+)-([^]+)/,
                "$1" +
                  q +
                  "$2-$3$1" +
                  kl +
                  (Ce(e, t + 3) == 108 ? "$3" : "$2-$3")
              ) + e
            );
          case 115:
            return ~fc(e, "stretch")
              ? Im(Z(e, "stretch", "fill-available"), t) + e
              : e;
        }
      break;
    case 4949:
      if (Ce(e, t + 1) !== 115) break;
    case 6444:
      switch (Ce(e, $t(e) - 3 - (~fc(e, "!important") && 10))) {
        case 107:
          return Z(e, ":", ":" + q) + e;
        case 101:
          return (
            Z(
              e,
              /(.+:)([^;!]+)(;|!.+)?/,
              "$1" +
                q +
                (Ce(e, 14) === 45 ? "inline-" : "") +
                "box$3$1" +
                q +
                "$2$3$1" +
                Pe +
                "$2box$3"
            ) + e
          );
      }
      break;
    case 5936:
      switch (Ce(e, t + 11)) {
        case 114:
          return q + e + Pe + Z(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return q + e + Pe + Z(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return q + e + Pe + Z(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return q + e + Pe + e + e;
  }
  return e;
}
var Xw = function (t, n, r, a) {
    if (t.length > -1 && !t.return)
      switch (t.type) {
        case Ff:
          t.return = Im(t.value, t.length);
          break;
        case Pm:
          return Jr([Ia(t, { value: Z(t.value, "@", "@" + q) })], a);
        case Nf:
          if (t.length)
            return jw(t.props, function (i) {
              switch (Pw(i, /(::plac\w+|:read-\w+)/)) {
                case ":read-only":
                case ":read-write":
                  return Jr(
                    [Ia(t, { props: [Z(i, /:(read-\w+)/, ":" + kl + "$1")] })],
                    a
                  );
                case "::placeholder":
                  return Jr(
                    [
                      Ia(t, {
                        props: [Z(i, /:(plac\w+)/, ":" + q + "input-$1")],
                      }),
                      Ia(t, { props: [Z(i, /:(plac\w+)/, ":" + kl + "$1")] }),
                      Ia(t, { props: [Z(i, /:(plac\w+)/, Pe + "input-$1")] }),
                    ],
                    a
                  );
              }
              return "";
            });
      }
  },
  Qw = [Xw],
  qw = function (t) {
    var n = t.key;
    if (n === "css") {
      var r = document.querySelectorAll("style[data-emotion]:not([data-s])");
      Array.prototype.forEach.call(r, function (w) {
        var E = w.getAttribute("data-emotion");
        E.indexOf(" ") !== -1 &&
          (document.head.appendChild(w), w.setAttribute("data-s", ""));
      });
    }
    var a = t.stylisPlugins || Qw,
      i = {},
      o,
      l = [];
    (o = t.container || document.head),
      Array.prototype.forEach.call(
        document.querySelectorAll('style[data-emotion^="' + n + ' "]'),
        function (w) {
          for (
            var E = w.getAttribute("data-emotion").split(" "), v = 1;
            v < E.length;
            v++
          )
            i[E[v]] = !0;
          l.push(w);
        }
      );
    var s,
      u = [Yw, Kw];
    {
      var c,
        f = [
          Bw,
          Uw(function (w) {
            c.insert(w);
          }),
        ],
        d = Hw(u.concat(a, f)),
        m = function (E) {
          return Jr(zw(E), d);
        };
      s = function (E, v, p, b) {
        (c = p),
          m(E ? E + "{" + v.styles + "}" : v.styles),
          b && (x.inserted[v.name] = !0);
      };
    }
    var x = {
      key: n,
      sheet: new _w({
        key: n,
        container: o,
        nonce: t.nonce,
        speedy: t.speedy,
        prepend: t.prepend,
        insertionPoint: t.insertionPoint,
      }),
      nonce: t.nonce,
      inserted: i,
      registered: {},
      insert: s,
    };
    return x.sheet.hydrate(l), x;
  },
  Zw = !0;
function Jw(e, t, n) {
  var r = "";
  return (
    n.split(" ").forEach(function (a) {
      e[a] !== void 0 ? t.push(e[a] + ";") : (r += a + " ");
    }),
    r
  );
}
var Lm = function (t, n, r) {
    var a = t.key + "-" + n.name;
    (r === !1 || Zw === !1) &&
      t.registered[a] === void 0 &&
      (t.registered[a] = n.styles);
  },
  e2 = function (t, n, r) {
    Lm(t, n, r);
    var a = t.key + "-" + n.name;
    if (t.inserted[n.name] === void 0) {
      var i = n;
      do t.insert(n === i ? "." + a : "", i, t.sheet, !0), (i = i.next);
      while (i !== void 0);
    }
  };
function t2(e) {
  for (var t = 0, n, r = 0, a = e.length; a >= 4; ++r, a -= 4)
    (n =
      (e.charCodeAt(r) & 255) |
      ((e.charCodeAt(++r) & 255) << 8) |
      ((e.charCodeAt(++r) & 255) << 16) |
      ((e.charCodeAt(++r) & 255) << 24)),
      (n = (n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)),
      (n ^= n >>> 24),
      (t =
        ((n & 65535) * 1540483477 + (((n >>> 16) * 59797) << 16)) ^
        ((t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)));
  switch (a) {
    case 3:
      t ^= (e.charCodeAt(r + 2) & 255) << 16;
    case 2:
      t ^= (e.charCodeAt(r + 1) & 255) << 8;
    case 1:
      (t ^= e.charCodeAt(r) & 255),
        (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16));
  }
  return (
    (t ^= t >>> 13),
    (t = (t & 65535) * 1540483477 + (((t >>> 16) * 59797) << 16)),
    ((t ^ (t >>> 15)) >>> 0).toString(36)
  );
}
var n2 = {
    animationIterationCount: 1,
    aspectRatio: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  },
  r2 = /[A-Z]|^ms/g,
  a2 = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  Mm = function (t) {
    return t.charCodeAt(1) === 45;
  },
  nh = function (t) {
    return t != null && typeof t != "boolean";
  },
  qs = Am(function (e) {
    return Mm(e) ? e : e.replace(r2, "-$&").toLowerCase();
  }),
  rh = function (t, n) {
    switch (t) {
      case "animation":
      case "animationName":
        if (typeof n == "string")
          return n.replace(a2, function (r, a, i) {
            return (Ot = { name: a, styles: i, next: Ot }), a;
          });
    }
    return n2[t] !== 1 && !Mm(t) && typeof n == "number" && n !== 0
      ? n + "px"
      : n;
  };
function Ci(e, t, n) {
  if (n == null) return "";
  if (n.__emotion_styles !== void 0) return n;
  switch (typeof n) {
    case "boolean":
      return "";
    case "object": {
      if (n.anim === 1)
        return (Ot = { name: n.name, styles: n.styles, next: Ot }), n.name;
      if (n.styles !== void 0) {
        var r = n.next;
        if (r !== void 0)
          for (; r !== void 0; )
            (Ot = { name: r.name, styles: r.styles, next: Ot }), (r = r.next);
        var a = n.styles + ";";
        return a;
      }
      return i2(e, t, n);
    }
    case "function": {
      if (e !== void 0) {
        var i = Ot,
          o = n(e);
        return (Ot = i), Ci(e, t, o);
      }
      break;
    }
  }
  if (t == null) return n;
  var l = t[n];
  return l !== void 0 ? l : n;
}
function i2(e, t, n) {
  var r = "";
  if (Array.isArray(n))
    for (var a = 0; a < n.length; a++) r += Ci(e, t, n[a]) + ";";
  else
    for (var i in n) {
      var o = n[i];
      if (typeof o != "object")
        t != null && t[o] !== void 0
          ? (r += i + "{" + t[o] + "}")
          : nh(o) && (r += qs(i) + ":" + rh(i, o) + ";");
      else if (
        Array.isArray(o) &&
        typeof o[0] == "string" &&
        (t == null || t[o[0]] === void 0)
      )
        for (var l = 0; l < o.length; l++)
          nh(o[l]) && (r += qs(i) + ":" + rh(i, o[l]) + ";");
      else {
        var s = Ci(e, t, o);
        switch (i) {
          case "animation":
          case "animationName": {
            r += qs(i) + ":" + s + ";";
            break;
          }
          default:
            r += i + "{" + s + "}";
        }
      }
    }
  return r;
}
var ah = /label:\s*([^\s;\n{]+)\s*(;|$)/g,
  Ot,
  o2 = function (t, n, r) {
    if (
      t.length === 1 &&
      typeof t[0] == "object" &&
      t[0] !== null &&
      t[0].styles !== void 0
    )
      return t[0];
    var a = !0,
      i = "";
    Ot = void 0;
    var o = t[0];
    o == null || o.raw === void 0
      ? ((a = !1), (i += Ci(r, n, o)))
      : (i += o[0]);
    for (var l = 1; l < t.length; l++) (i += Ci(r, n, t[l])), a && (i += o[l]);
    ah.lastIndex = 0;
    for (var s = "", u; (u = ah.exec(i)) !== null; ) s += "-" + u[1];
    var c = t2(i) + s;
    return { name: c, styles: i, next: Ot };
  },
  l2 = function (t) {
    return t();
  },
  s2 = Vd["useInsertionEffect"] ? Vd["useInsertionEffect"] : !1,
  u2 = s2 || l2,
  zm = B.createContext(typeof HTMLElement < "u" ? qw({ key: "css" }) : null);
zm.Provider;
var c2 = function (t) {
    return B.forwardRef(function (n, r) {
      var a = B.useContext(zm);
      return t(n, a, r);
    });
  },
  f2 = B.createContext({}),
  d2 = Sw,
  p2 = function (t) {
    return t !== "theme";
  },
  ih = function (t) {
    return typeof t == "string" && t.charCodeAt(0) > 96 ? d2 : p2;
  },
  oh = function (t, n, r) {
    var a;
    if (n) {
      var i = n.shouldForwardProp;
      a =
        t.__emotion_forwardProp && i
          ? function (o) {
              return t.__emotion_forwardProp(o) && i(o);
            }
          : i;
    }
    return typeof a != "function" && r && (a = t.__emotion_forwardProp), a;
  },
  h2 = function (t) {
    var n = t.cache,
      r = t.serialized,
      a = t.isStringTag;
    return (
      Lm(n, r, a),
      u2(function () {
        return e2(n, r, a);
      }),
      null
    );
  },
  g2 = function e(t, n) {
    var r = t.__emotion_real === t,
      a = (r && t.__emotion_base) || t,
      i,
      o;
    n !== void 0 && ((i = n.label), (o = n.target));
    var l = oh(t, n, r),
      s = l || ih(a),
      u = !s("as");
    return function () {
      var c = arguments,
        f =
          r && t.__emotion_styles !== void 0 ? t.__emotion_styles.slice(0) : [];
      if (
        (i !== void 0 && f.push("label:" + i + ";"),
        c[0] == null || c[0].raw === void 0)
      )
        f.push.apply(f, c);
      else {
        f.push(c[0][0]);
        for (var d = c.length, m = 1; m < d; m++) f.push(c[m], c[0][m]);
      }
      var x = c2(function (w, E, v) {
        var p = (u && w.as) || a,
          b = "",
          _ = [],
          $ = w;
        if (w.theme == null) {
          $ = {};
          for (var A in w) $[A] = w[A];
          $.theme = B.useContext(f2);
        }
        typeof w.className == "string"
          ? (b = Jw(E.registered, _, w.className))
          : w.className != null && (b = w.className + " ");
        var O = o2(f.concat(_), E.registered, $);
        (b += E.key + "-" + O.name), o !== void 0 && (b += " " + o);
        var j = u && l === void 0 ? ih(p) : s,
          G = {};
        for (var U in w) (u && U === "as") || (j(U) && (G[U] = w[U]));
        return (
          (G.className = b),
          (G.ref = v),
          B.createElement(
            B.Fragment,
            null,
            B.createElement(h2, {
              cache: E,
              serialized: O,
              isStringTag: typeof p == "string",
            }),
            B.createElement(p, G)
          )
        );
      });
      return (
        (x.displayName =
          i !== void 0
            ? i
            : "Styled(" +
              (typeof a == "string"
                ? a
                : a.displayName || a.name || "Component") +
              ")"),
        (x.defaultProps = t.defaultProps),
        (x.__emotion_real = x),
        (x.__emotion_base = a),
        (x.__emotion_styles = f),
        (x.__emotion_forwardProp = l),
        Object.defineProperty(x, "toString", {
          value: function () {
            return "." + o;
          },
        }),
        (x.withComponent = function (w, E) {
          return e(w, cc({}, n, E, { shouldForwardProp: oh(x, E, !0) })).apply(
            void 0,
            f
          );
        }),
        x
      );
    };
  },
  v2 = [
    "a",
    "abbr",
    "address",
    "area",
    "article",
    "aside",
    "audio",
    "b",
    "base",
    "bdi",
    "bdo",
    "big",
    "blockquote",
    "body",
    "br",
    "button",
    "canvas",
    "caption",
    "cite",
    "code",
    "col",
    "colgroup",
    "data",
    "datalist",
    "dd",
    "del",
    "details",
    "dfn",
    "dialog",
    "div",
    "dl",
    "dt",
    "em",
    "embed",
    "fieldset",
    "figcaption",
    "figure",
    "footer",
    "form",
    "h1",
    "h2",
    "h3",
    "h4",
    "h5",
    "h6",
    "head",
    "header",
    "hgroup",
    "hr",
    "html",
    "i",
    "iframe",
    "img",
    "input",
    "ins",
    "kbd",
    "keygen",
    "label",
    "legend",
    "li",
    "link",
    "main",
    "map",
    "mark",
    "marquee",
    "menu",
    "menuitem",
    "meta",
    "meter",
    "nav",
    "noscript",
    "object",
    "ol",
    "optgroup",
    "option",
    "output",
    "p",
    "param",
    "picture",
    "pre",
    "progress",
    "q",
    "rp",
    "rt",
    "ruby",
    "s",
    "samp",
    "script",
    "section",
    "select",
    "small",
    "source",
    "span",
    "strong",
    "style",
    "sub",
    "summary",
    "sup",
    "table",
    "tbody",
    "td",
    "textarea",
    "tfoot",
    "th",
    "thead",
    "time",
    "title",
    "tr",
    "track",
    "u",
    "ul",
    "var",
    "video",
    "wbr",
    "circle",
    "clipPath",
    "defs",
    "ellipse",
    "foreignObject",
    "g",
    "image",
    "line",
    "linearGradient",
    "mask",
    "path",
    "pattern",
    "polygon",
    "polyline",
    "radialGradient",
    "rect",
    "stop",
    "svg",
    "text",
    "tspan",
  ],
  D = g2.bind();
v2.forEach(function (e) {
  D[e] = D(e);
});
const m2 = "" + new URL("duckduckgo-cc26b1b6.svg", import.meta.url).href,
  y2 = "" + new URL("ecosia-b7d5992e.svg", import.meta.url).href,
  b2 = "" + new URL("google-4d41c3b2.svg", import.meta.url).href,
  x2 = "" + new URL("qwant-8e13efd7.svg", import.meta.url).href,
  Wn = "{{query}}",
  w2 = D.div`
  position: absolute;
  left: calc(100px - 2.9rem - 10px);
  right: 100px;
  bottom: 40px;
  height: min-content;
  display: flex;
  align-items: flex-start;
  justify-content: center;
`,
  S2 = D.input`
  width: 100%;
  font-size: 30pt;

  background-color: rgba(0, 0, 0, 0);
  color: var(--default-color);
  transition: 0.3s;
  border: none;
  border-bottom: 2px solid var(--default-color);
  opacity: 0.3;

  ::placeholder {
    color: var(--default-color);
  }

  :hover,
  :focus {
    opacity: 1;
    outline: none;
  }
`,
  k2 = D.div`
  height: 2.9rem;
  width: 3.1rem;
  margin: auto 10px auto 0;

  background: var(--default-color);

  mask-size: cover;
  mask-image: url(${({ src: e }) => e});
`,
  E2 = () => {
    const e = Oi.getWithFallback(),
      t = e.engine || "duckduckgo.com/";
    let n;
    t.includes("duckduckgo")
      ? (n = m2)
      : t.includes("google")
      ? (n = b2)
      : t.includes("qwant")
      ? (n = x2)
      : t.includes("ecosia") && (n = y2);
    const r = (a) => {
      e.fastForward[a]
        ? (window.location.href = e.fastForward[a])
        : t.includes(Wn)
        ? (window.location.href = t.replace(Wn, a))
        : (window.location.href = "https://" + t + "?q=" + a);
    };
    return k.jsxs(w2, {
      children: [
        n && k.jsx(k2, { src: n }),
        k.jsx(S2, {
          placeholder: "Always stay clean!",
          type: "input",
          onKeyUp: (a) => a.which === 13 && r(a.currentTarget.value),
          autoFocus: !0,
        }),
      ],
    });
  },
  lh = [
    {
      title: "Reddit",
      links: [
        {
          label: "r/startpages",
          value: "https://www.reddit.com/r/startpages/",
        },
        { label: "r/unixporn", value: "https://www.reddit.com/r/unixporn/" },
        { label: "r/rainmeter", value: "https://www.reddit.com/r/rainmeter/" },
        {
          label: "r/AnimalsBeingDerps",
          value: "https://www.reddit.com/r/AnimalsBeingDerps/",
        },
      ],
    },
    {
      title: "3D Modelling",
      links: [
        { label: "Blender", value: "https://www.blender.org/" },
        { label: "BlenderGuru", value: "https://www.blenderguru.com/" },
        { label: "Poliigon", value: "https://www.poliigon.com/" },
        {
          label: "Blender tutorial",
          value:
            "https://www.youtube.com/watch?v=NyJWoyVx_XI&list=PLjEaoINr3zgEq0u2MzVgAaHEBt--xLB6U",
        },
        {
          label: "The other Blender tutorial",
          value:
            "https://www.youtube.com/watch?v=bpvh-9H8S1g&list=PL8eKBkZzqDiU-qcoaghCz04sMitC1yx6k&index=1",
        },
      ],
    },
    {
      title: "Design",
      links: [
        { label: "PixlrX", value: "https://pixlr.com/x/" },
        { label: "AI Image Enlarger", value: "https://bigjpg.com/en" },
        { label: "Img to Svg Converter", value: "https://picsvg.com/" },
        {
          label: "Affinity",
          value: "https://affinity.serif.com/en-us/tutorials/designer/desktop/",
        },
        {
          label: "Affinity - YT",
          value: "https://www.youtube.com/c/AffinityRevolution/playlists",
        },
      ],
    },
    {
      title: "Music",
      links: [
        {
          label: "i wanna be a cowboy",
          value: "https://www.youtube.com/watch?v=8zWz92f_HGs",
        },
        {
          label: "let the bodies hit the floor",
          value: "https://www.youtube.com/watch?v=b--VKaCB9u0",
        },
        {
          label: "Nobody Kanna Cross It",
          value: "https://www.youtube.com/watch?v=2wqTnwJGvtc",
        },
        {
          label: "Smug Dancin",
          value: "https://www.youtube.com/watch?v=eNZ9Od1jQ4Q",
        },
        {
          label: "Utamaru - The Sanctified Mind Cover",
          value: "https://www.youtube.com/watch?v=MHlJKLlS07U",
        },
      ],
    },
    {
      title: "Sauce",
      links: [
        {
          label: "Pictures - DeathAndMilk",
          value: "https://www.instagram.com/deathandmilk_/",
        },
        {
          label: "Icons - FontAwesome",
          value: "https://fontawesome.com/icons",
        },
        {
          label: "Text Flicker - CodeMyUI",
          value:
            "https://codemyui.com/crt-screen-text-flicker-animation-in-pure-css/",
        },
        {
          label: "Wave Animation - mburakerman",
          value: "https://codepen.io/mburakerman/pen/eRZZEv",
        },
        {
          label: "Da real sauce ԅ(♡﹃♡ԅ)",
          value: "https://www.youtube.com/watch?v=qr89xoZyE1g",
        },
        {
          label: "Even more real sauce ( ͡° ͜ʖ ͡°)",
          value: "https://www.youtube.com/watch?v=VLhJOd_TFiI",
        },
      ],
    },
  ],
  Dm = [
    { label: "pic_1", value: Om },
    { label: "pic_2", value: hw },
    { label: "pic_3", value: gw },
    { label: "pic_4", value: vw },
    { label: "pic_5", value: mw },
    { label: "pic_6", value: yw },
    { label: "pic_7", value: bw },
    { label: "pic_8", value: xw },
  ],
  Bm = [
    { label: "DuckDuckGo", value: `https://duckduckgo.com/?q=${Wn}` },
    { label: "Google", value: `https://www.google.com/search?q=${Wn}` },
    { label: "Qwant", value: `https://qwant.com/?q=${Wn}` },
    { label: "Ecosia", value: `https://ecosia.org/search/?q=${Wn}` },
  ],
  sh = {
    engine: Bm[0].value,
    fastForward: {
      deepl: "https://deepl.com/",
      maps: "https://google.de/maps/",
      reddit: "https://reddit.com/",
      github: "https://github.com/",
      gitlab: "https://gitlab.com/",
      youtube: "https://youtube.com/",
    },
  },
  $i = [
    {
      name: "Catppuccin",
      image:
        "https://raw.githubusercontent.com/catppuccin/catppuccin/main/assets/logos/exports/1544x1544_circle.png",
      colors: {
        "--bg-color": "#24273A",
        "--default-color": "#CAD3F5",
        "--accent-color": "#C6A0F6",
        "--accent-color2": "#8AADF4",
      },
    },
    {
      name: "DeathAndMilk",
      image: Om,
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#E6E6E6",
        "--accent-color": "#FFB4E6",
        "--accent-color2": "#B4FFE6",
      },
    },
    {
      name: "Pop!OS",
      image:
        "https://oswallpapers.com/wp-content/uploads/2019/04/kate-hazen-unleash-your-robot.jpg",
      colors: {
        "--bg-color": "#333136",
        "--default-color": "#2BC5EB",
        "--accent-color": "#FCD307",
        "--accent-color2": "#2BC5EB",
      },
    },
    {
      name: "Dark Souls",
      image:
        "https://i.pinimg.com/originals/16/74/db/1674dbae45cd38f3d3b4c00dc8616bd7.gif",
      colors: {
        "--bg-color": "#32323C",
        "--default-color": "#A0A08C",
        "--accent-color": "#9A6650",
        "--accent-color2": "#461E28",
      },
    },
    {
      name: "S.E.Lain",
      image:
        "https://64.media.tumblr.com/54a945edd2641e20859d6f6537cd7423/tumblr_pwa4bogz4N1qze3hdo2_r1_500.gifv",
      colors: {
        "--bg-color": "#0a1a25",
        "--default-color": "#a6b7ab",
        "--accent-color": "#94656b",
        "--accent-color2": "#57182e",
      },
    },
    {
      name: "Kitties",
      image:
        "https://64.media.tumblr.com/5a232d5c0999d02388d78e5c1025f94f/0572516693bf4014-3d/s500x750/0306dc89b657093529aa3ce96e64b9c43572e901.gifv",
      colors: {
        "--bg-color": "#495662",
        "--default-color": "#d1f1fa",
        "--accent-color": "#80aad4",
        "--accent-color2": "#e8a9b7",
      },
    },
    {
      name: "pretty chill",
      image:
        "https://e4p7c9i3.stackpathcdn.com/wp-content/uploads/2019/05/tumblr_oymsnbT0111vjxiz1o1_1280.gif?iv=165",
      colors: {
        "--bg-color": "#397d76",
        "--default-color": "#f1daba",
        "--accent-color": "#c5bdb5",
        "--accent-color2": "#93a662",
      },
    },
    {
      name: "Tartarus",
      image:
        "https://64.media.tumblr.com/8de9e4d31a132f7617ecc05e6a0f8807/tumblr_nd048m6QFH1tqptlzo1_500.gifv",
      colors: {
        "--bg-color": "#282828",
        "--default-color": "#D4BE98",
        "--accent-color": "#7DAEA3",
        "--accent-color2": "#A9B665",
      },
    },
    {
      name: "Pastel Aesthetic",
      image: "https://i.imgur.com/bZHurZn.jpeg",
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#F3C9CB",
        "--accent-color": "#6D79BF",
        "--accent-color2": "#FBECEF",
      },
    },
    {
      name: "Bohemian",
      image: "https://i.imgur.com/gcZ6fmk.jpeg",
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#D6B29A",
        "--accent-color": "#B35000",
        "--accent-color2": "#FBECEF",
      },
    },
    {
      name: "Modern Boho",
      image: "https://i.imgur.com/HkEcwGl.jpeg",
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#C66B3C",
        "--accent-color": "#F6BC7C",
        "--accent-color2": "#54573C",
      },
    },
    {
      name: "Gruvbox Inspired Green",
      image: "https://i.imgur.com/ISjs7cg.jpeg",
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#CC9A52",
        "--accent-color": "#647D44",
        "--accent-color2": "#FCE4B4",
      },
    },
    {
      name: "Beach",
      image: "https://i.imgur.com/gcW1jul.jpeg",
      colors: {
        "--bg-color": "#2E2E2E",
        "--default-color": "#E3C9BC",
        "--accent-color": "#91C6CC",
        "--accent-color2": "#F0F8FA",
      },
    },
  ],
  Oi = {
    get: () => {
      const e = localStorage.getItem("search-settings");
      if (e) return Oi.parse(e);
    },
    getWithFallback: () => {
      try {
        return Oi.get() ?? sh;
      } catch {
        return (
          console.error(
            "Your currently applied search settings appear to be corrupted."
          ),
          sh
        );
      }
    },
    set: (e) => localStorage.setItem("search-settings", JSON.stringify(e)),
    parse: (e) => JSON.parse(e),
  },
  Dt = {
    get: () => {
      const e = localStorage.getItem("themes");
      if (e) return JSON.parse(e);
    },
    getWithFallback: () => {
      try {
        return Dt.get() ?? $i;
      } catch {
        return (
          console.error(
            "Your currently applied themes appear to be corrupted."
          ),
          $i
        );
      }
    },
    set: (e) => localStorage.setItem("themes", JSON.stringify(e)),
    add: (e) => {
      const t = Dt.get();
      t ? Dt.set([...t, e]) : Dt.set([e]);
    },
    remove: (e) => {
      const t = Dt.get();
      t && Dt.set(t.filter((n) => n.name !== e));
    },
    parse: (e) => JSON.parse(e),
  },
  Zs = "link-groups",
  Wt = {
    getRaw: () => localStorage.getItem(Zs),
    get: () => {
      const e = localStorage.getItem(Zs);
      if (e) return Wt.parse(e);
    },
    getWithFallback: () => {
      try {
        return Wt.get() ?? lh;
      } catch {
        return (
          console.error("Your currently applied links appear to be corrupted."),
          lh
        );
      }
    },
    set: (e) => localStorage.setItem(Zs, JSON.stringify(e)),
    parse: (e) => JSON.parse(e),
  },
  Ai = {
    get: () => {
      const e = localStorage.getItem("design");
      if (e) return Dt.parse(e);
    },
    getWithFallback: () => {
      try {
        return Ai.get() ?? $i[0];
      } catch {
        return (
          console.error(
            "Your currently applied design appears to be corrupted."
          ),
          $i[0]
        );
      }
    },
    set: (e) => localStorage.setItem("design", JSON.stringify(e)),
  },
  _2 = D.div`
  margin-left: 100px;
  display: flex;
  width: calc(100% - 400px - 100px);
`,
  C2 = ({ children: e }) => k.jsx(_2, { children: e }),
  $2 = D.div`
  height: 400px;
  display: flex;
  padding: 0 10px;
  flex-direction: row;
  border-right: 3px solid var(--default-color);
  :first-of-type {
    border-left: 3px solid var(--default-color);
  }
`,
  O2 = D.div`
  height: 100%;
  width: ${({ width: e }) => `${e}px`};
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  transition: 0.3s;
`,
  A2 = D.button`
  padding: 0;
  background-color: var(--bg-color);
  border: 4px solid var(--accent-color);
  height: 100%;
  width: 90px;
  cursor: ${({ active: e }) => (e ? "default" : "pointer")};
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0.8;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: ${({ active: e }) => (e ? "390px" : "0")};
    background-color: var(--accent-color);
    transition: ${({ active: e }) => (e ? "1s" : ".5s")};
  }
  :hover,
  :focus {
    outline: none;
    ${({ active: e }) =>
      !e &&
      `
            ::before {
                height: 50%;
            }
            > .wave {
                top: 180px;
                ::before{
                    animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
                    top: -25%;
                    left: 50%;
                }
            }
        `}
  }

  > .wave {
    /* Waves Source: https://codepen.io/mburakerman/pen/eRZZEv */
    width: 82px;
    height: 50px;
    position: absolute;
    top: ${({ active: e }) => (e ? "0px" : "350px")};
    overflow: hidden;
    transition: ${({ active: e }) => (e ? "1s" : ".5s")};
    ::before {
      content: "";
      width: 180px;
      height: 185px;
      position: absolute;
      top: -25%;
      left: 50%;
      margin-left: -90px;
      margin-top: -140px;
      border-radius: 37%;
      background-color: var(--bg-color);
      animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
    }
    @keyframes wave {
      from {
        transform: rotate(0deg);
      }
      from {
        transform: rotate(360deg);
      }
    }
  }

  ${({ active: e }) =>
    !e &&
    `
        :hover{
            > * {
                color: var(--bg-color);
                text-shadow:
                    5px 0px 0 var(--accent-color),
                    4px 0px 0 var(--accent-color),
                    3px 0px 0 var(--accent-color),
                    2px 0px 0 var(--accent-color),
                    1px 0px 0 var(--accent-color),
                    -1px 0px 0 var(--accent-color),
                    0px 1px 0 var(--accent-color),
                    0px -1px 0 var(--accent-color);
            }
        }
    `};
`,
  T2 = D.h1`
  transform: rotate(90deg);
  min-width: max-content;
  color: ${({ active: e }) => (e ? "var(--bg-color)" : "var(--default-color)")};
  transition: 0.5s;
  letter-spacing: 5px;
`,
  P2 = ({ active: e, title: t, children: n, onClick: r, onMouseDown: a }) => {
    const i = B.useRef(null),
      [o, l] = B.useState(e ? 500 : 0);
    return (
      B.useEffect(() => {
        var u;
        const s = (u = i.current) == null ? void 0 : u.parentElement;
        l(s && e ? s.clientWidth - s.children.length * 113 - 3 : 0);
      }, [e]),
      k.jsxs($2, {
        ref: i,
        children: [
          k.jsxs(A2, {
            active: e,
            onMouseDown: a,
            onClick: r,
            tabIndex: e ? -1 : void 0,
            children: [
              k.jsx("div", { className: "wave" }),
              k.jsx(T2, { active: e, title: t, children: t }),
            ],
          }),
          k.jsx(O2, { width: o, "aria-hidden": !e || void 0, children: n }),
        ],
      })
    );
  },
  j2 = D.a`
  width: fit-content;
  white-space: nowrap;
  position: relative;
  padding: 10px 0 10px 30px;
  font-size: 1rem;

  ::before {
    position: absolute;
    left: 0px;
    bottom: 5px;
    z-index: 0;
    content: "";
    height: 5px;
    width: 100%;
    background-color: var(--accent-color);
    transition: 0.5s;
    opacity: 0.7;
  }

  :hover,
  :focus {
    color: var(--accent-color2);
    animation: text-flicker 0.01s ease 0s infinite alternate;
    outline: none;
  }
`,
  R2 = () => {
    const [e, t] = B.useState(0),
      n = Wt.getWithFallback(),
      r = (a, i) => {
        t(i),
          a.button === 1 &&
            n[i].links.forEach((o) => {
              window.open(o.value, "_blank");
            });
      };
    return k.jsx(C2, {
      children: n.map((a, i) =>
        k.jsx(
          P2,
          {
            active: e === i,
            title: a.title,
            onClick: () => t(i),
            onMouseDown: (o) => r(o, i),
            children: a.links.map((o) =>
              k.jsx(
                j2,
                {
                  tabIndex: e !== i ? -1 : void 0,
                  href: o.value,
                  children: o.label,
                },
                o.label
              )
            ),
          },
          a.title
        )
      ),
    });
  };
var N2 = {
    prefix: "fas",
    iconName: "angle-right",
    icon: [
      320,
      512,
      [8250],
      "f105",
      "M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z",
    ],
  },
  F2 = {
    prefix: "fas",
    iconName: "fire",
    icon: [
      448,
      512,
      [128293],
      "f06d",
      "M159.3 5.4c7.8-7.3 19.9-7.2 27.7 .1c27.6 25.9 53.5 53.8 77.7 84c11-14.4 23.5-30.1 37-42.9c7.9-7.4 20.1-7.4 28 .1c34.6 33 63.9 76.6 84.5 118c20.3 40.8 33.8 82.5 33.8 111.9C448 404.2 348.2 512 224 512C98.4 512 0 404.1 0 276.5c0-38.4 17.8-85.3 45.4-131.7C73.3 97.7 112.7 48.6 159.3 5.4zM225.7 416c25.3 0 47.7-7 68.8-21c42.1-29.4 53.4-88.2 28.1-134.4c-4.5-9-16-9.6-22.5-2l-25.2 29.3c-6.6 7.6-18.5 7.4-24.7-.5c-16.5-21-46-58.5-62.8-79.8c-6.3-8-18.3-8.1-24.7-.1c-33.8 42.5-50.8 69.3-50.8 99.4C112 375.4 162.6 416 225.7 416z",
    ],
  },
  I2 = {
    prefix: "fas",
    iconName: "floppy-disk",
    icon: [
      448,
      512,
      [128190, 128426, "save"],
      "f0c7",
      "M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V173.3c0-17-6.7-33.3-18.7-45.3L352 50.7C340 38.7 323.7 32 306.7 32H64zm0 96c0-17.7 14.3-32 32-32H288c17.7 0 32 14.3 32 32v64c0 17.7-14.3 32-32 32H96c-17.7 0-32-14.3-32-32V128zM224 288a64 64 0 1 1 0 128 64 64 0 1 1 0-128z",
    ],
  },
  Hm = I2,
  Um = {
    prefix: "fas",
    iconName: "trash",
    icon: [
      448,
      512,
      [],
      "f1f8",
      "M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z",
    ],
  },
  L2 = {
    prefix: "fas",
    iconName: "minus",
    icon: [
      448,
      512,
      [8211, 8722, 10134, "subtract"],
      "f068",
      "M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z",
    ],
  },
  M2 = {
    prefix: "fas",
    iconName: "sliders",
    icon: [
      512,
      512,
      ["sliders-h"],
      "f1de",
      "M0 416c0 17.7 14.3 32 32 32l54.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 448c17.7 0 32-14.3 32-32s-14.3-32-32-32l-246.7 0c-12.3-28.3-40.5-48-73.3-48s-61 19.7-73.3 48L32 384c-17.7 0-32 14.3-32 32zm128 0a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zM320 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm32-80c-32.8 0-61 19.7-73.3 48L32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l246.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48l54.7 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-54.7 0c-12.3-28.3-40.5-48-73.3-48zM192 128a32 32 0 1 1 0-64 32 32 0 1 1 0 64zm73.3-64C253 35.7 224.8 16 192 16s-61 19.7-73.3 48L32 64C14.3 64 0 78.3 0 96s14.3 32 32 32l86.7 0c12.3 28.3 40.5 48 73.3 48s61-19.7 73.3-48L480 128c17.7 0 32-14.3 32-32s-14.3-32-32-32L265.3 64z",
    ],
  },
  z2 = M2,
  D2 = {
    prefix: "fas",
    iconName: "angle-down",
    icon: [
      448,
      512,
      [8964],
      "f107",
      "M201.4 342.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 274.7 86.6 137.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z",
    ],
  },
  Wm = {
    prefix: "fas",
    iconName: "plus",
    icon: [
      448,
      512,
      [10133, 61543, "add"],
      "2b",
      "M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z",
    ],
  },
  B2 = {
    prefix: "fas",
    iconName: "xmark",
    icon: [
      384,
      512,
      [
        128473,
        10005,
        10006,
        10060,
        215,
        "close",
        "multiply",
        "remove",
        "times",
      ],
      "f00d",
      "M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z",
    ],
  },
  H2 = B2,
  U2 = {
    prefix: "fas",
    iconName: "angle-left",
    icon: [
      320,
      512,
      [8249],
      "f104",
      "M41.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.3 256 246.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z",
    ],
  };
function uh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function N(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? uh(Object(n), !0).forEach(function (r) {
          Se(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : uh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function El(e) {
  "@babel/helpers - typeof";
  return (
    (El =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    El(e)
  );
}
function W2(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function ch(e, t) {
  for (var n = 0; n < t.length; n++) {
    var r = t[n];
    (r.enumerable = r.enumerable || !1),
      (r.configurable = !0),
      "value" in r && (r.writable = !0),
      Object.defineProperty(e, r.key, r);
  }
}
function G2(e, t, n) {
  return (
    t && ch(e.prototype, t),
    n && ch(e, n),
    Object.defineProperty(e, "prototype", { writable: !1 }),
    e
  );
}
function Se(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function Lf(e, t) {
  return Y2(e) || X2(e, t) || Gm(e, t) || q2();
}
function Ui(e) {
  return V2(e) || K2(e) || Gm(e) || Q2();
}
function V2(e) {
  if (Array.isArray(e)) return pc(e);
}
function Y2(e) {
  if (Array.isArray(e)) return e;
}
function K2(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function X2(e, t) {
  var n =
    e == null
      ? null
      : (typeof Symbol < "u" && e[Symbol.iterator]) || e["@@iterator"];
  if (n != null) {
    var r = [],
      a = !0,
      i = !1,
      o,
      l;
    try {
      for (
        n = n.call(e);
        !(a = (o = n.next()).done) && (r.push(o.value), !(t && r.length === t));
        a = !0
      );
    } catch (s) {
      (i = !0), (l = s);
    } finally {
      try {
        !a && n.return != null && n.return();
      } finally {
        if (i) throw l;
      }
    }
    return r;
  }
}
function Gm(e, t) {
  if (e) {
    if (typeof e == "string") return pc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return pc(e, t);
  }
}
function pc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function Q2() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function q2() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
var fh = function () {},
  Mf = {},
  Vm = {},
  Ym = null,
  Km = { mark: fh, measure: fh };
try {
  typeof window < "u" && (Mf = window),
    typeof document < "u" && (Vm = document),
    typeof MutationObserver < "u" && (Ym = MutationObserver),
    typeof performance < "u" && (Km = performance);
} catch {}
var Z2 = Mf.navigator || {},
  dh = Z2.userAgent,
  ph = dh === void 0 ? "" : dh,
  kn = Mf,
  se = Vm,
  hh = Ym,
  So = Km;
kn.document;
var Jt =
    !!se.documentElement &&
    !!se.head &&
    typeof se.addEventListener == "function" &&
    typeof se.createElement == "function",
  Xm = ~ph.indexOf("MSIE") || ~ph.indexOf("Trident/"),
  ko,
  Eo,
  _o,
  Co,
  $o,
  Xt = "___FONT_AWESOME___",
  hc = 16,
  Qm = "fa",
  qm = "svg-inline--fa",
  er = "data-fa-i2svg",
  gc = "data-fa-pseudo-element",
  J2 = "data-fa-pseudo-element-pending",
  zf = "data-prefix",
  Df = "data-icon",
  gh = "fontawesome-i2svg",
  eS = "async",
  tS = ["HTML", "HEAD", "STYLE", "SCRIPT"],
  Zm = (function () {
    try {
      return !0;
    } catch {
      return !1;
    }
  })(),
  oe = "classic",
  ge = "sharp",
  Bf = [oe, ge];
function Wi(e) {
  return new Proxy(e, {
    get: function (n, r) {
      return r in n ? n[r] : n[oe];
    },
  });
}
var Ti = Wi(
    ((ko = {}),
    Se(ko, oe, {
      fa: "solid",
      fas: "solid",
      "fa-solid": "solid",
      far: "regular",
      "fa-regular": "regular",
      fal: "light",
      "fa-light": "light",
      fat: "thin",
      "fa-thin": "thin",
      fad: "duotone",
      "fa-duotone": "duotone",
      fab: "brands",
      "fa-brands": "brands",
      fak: "kit",
      "fa-kit": "kit",
    }),
    Se(ko, ge, {
      fa: "solid",
      fass: "solid",
      "fa-solid": "solid",
      fasr: "regular",
      "fa-regular": "regular",
      fasl: "light",
      "fa-light": "light",
    }),
    ko)
  ),
  Pi = Wi(
    ((Eo = {}),
    Se(Eo, oe, {
      solid: "fas",
      regular: "far",
      light: "fal",
      thin: "fat",
      duotone: "fad",
      brands: "fab",
      kit: "fak",
    }),
    Se(Eo, ge, { solid: "fass", regular: "fasr", light: "fasl" }),
    Eo)
  ),
  ji = Wi(
    ((_o = {}),
    Se(_o, oe, {
      fab: "fa-brands",
      fad: "fa-duotone",
      fak: "fa-kit",
      fal: "fa-light",
      far: "fa-regular",
      fas: "fa-solid",
      fat: "fa-thin",
    }),
    Se(_o, ge, { fass: "fa-solid", fasr: "fa-regular", fasl: "fa-light" }),
    _o)
  ),
  nS = Wi(
    ((Co = {}),
    Se(Co, oe, {
      "fa-brands": "fab",
      "fa-duotone": "fad",
      "fa-kit": "fak",
      "fa-light": "fal",
      "fa-regular": "far",
      "fa-solid": "fas",
      "fa-thin": "fat",
    }),
    Se(Co, ge, {
      "fa-solid": "fass",
      "fa-regular": "fasr",
      "fa-light": "fasl",
    }),
    Co)
  ),
  rS = /fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,
  Jm = "fa-layers-text",
  aS =
    /Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,
  iS = Wi(
    (($o = {}),
    Se($o, oe, {
      900: "fas",
      400: "far",
      normal: "far",
      300: "fal",
      100: "fat",
    }),
    Se($o, ge, { 900: "fass", 400: "fasr", 300: "fasl" }),
    $o)
  ),
  e1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  oS = e1.concat([11, 12, 13, 14, 15, 16, 17, 18, 19, 20]),
  lS = [
    "class",
    "data-prefix",
    "data-icon",
    "data-fa-transform",
    "data-fa-mask",
  ],
  Gn = {
    GROUP: "duotone-group",
    SWAP_OPACITY: "swap-opacity",
    PRIMARY: "primary",
    SECONDARY: "secondary",
  },
  Ri = new Set();
Object.keys(Pi[oe]).map(Ri.add.bind(Ri));
Object.keys(Pi[ge]).map(Ri.add.bind(Ri));
var sS = []
    .concat(Bf, Ui(Ri), [
      "2xs",
      "xs",
      "sm",
      "lg",
      "xl",
      "2xl",
      "beat",
      "border",
      "fade",
      "beat-fade",
      "bounce",
      "flip-both",
      "flip-horizontal",
      "flip-vertical",
      "flip",
      "fw",
      "inverse",
      "layers-counter",
      "layers-text",
      "layers",
      "li",
      "pull-left",
      "pull-right",
      "pulse",
      "rotate-180",
      "rotate-270",
      "rotate-90",
      "rotate-by",
      "shake",
      "spin-pulse",
      "spin-reverse",
      "spin",
      "stack-1x",
      "stack-2x",
      "stack",
      "ul",
      Gn.GROUP,
      Gn.SWAP_OPACITY,
      Gn.PRIMARY,
      Gn.SECONDARY,
    ])
    .concat(
      e1.map(function (e) {
        return "".concat(e, "x");
      })
    )
    .concat(
      oS.map(function (e) {
        return "w-".concat(e);
      })
    ),
  ri = kn.FontAwesomeConfig || {};
function uS(e) {
  var t = se.querySelector("script[" + e + "]");
  if (t) return t.getAttribute(e);
}
function cS(e) {
  return e === "" ? !0 : e === "false" ? !1 : e === "true" ? !0 : e;
}
if (se && typeof se.querySelector == "function") {
  var fS = [
    ["data-family-prefix", "familyPrefix"],
    ["data-css-prefix", "cssPrefix"],
    ["data-family-default", "familyDefault"],
    ["data-style-default", "styleDefault"],
    ["data-replacement-class", "replacementClass"],
    ["data-auto-replace-svg", "autoReplaceSvg"],
    ["data-auto-add-css", "autoAddCss"],
    ["data-auto-a11y", "autoA11y"],
    ["data-search-pseudo-elements", "searchPseudoElements"],
    ["data-observe-mutations", "observeMutations"],
    ["data-mutate-approach", "mutateApproach"],
    ["data-keep-original-source", "keepOriginalSource"],
    ["data-measure-performance", "measurePerformance"],
    ["data-show-missing-icons", "showMissingIcons"],
  ];
  fS.forEach(function (e) {
    var t = Lf(e, 2),
      n = t[0],
      r = t[1],
      a = cS(uS(n));
    a != null && (ri[r] = a);
  });
}
var t1 = {
  styleDefault: "solid",
  familyDefault: "classic",
  cssPrefix: Qm,
  replacementClass: qm,
  autoReplaceSvg: !0,
  autoAddCss: !0,
  autoA11y: !0,
  searchPseudoElements: !1,
  observeMutations: !0,
  mutateApproach: "async",
  keepOriginalSource: !0,
  measurePerformance: !1,
  showMissingIcons: !0,
};
ri.familyPrefix && (ri.cssPrefix = ri.familyPrefix);
var ua = N(N({}, t1), ri);
ua.autoReplaceSvg || (ua.observeMutations = !1);
var z = {};
Object.keys(t1).forEach(function (e) {
  Object.defineProperty(z, e, {
    enumerable: !0,
    set: function (n) {
      (ua[e] = n),
        ai.forEach(function (r) {
          return r(z);
        });
    },
    get: function () {
      return ua[e];
    },
  });
});
Object.defineProperty(z, "familyPrefix", {
  enumerable: !0,
  set: function (t) {
    (ua.cssPrefix = t),
      ai.forEach(function (n) {
        return n(z);
      });
  },
  get: function () {
    return ua.cssPrefix;
  },
});
kn.FontAwesomeConfig = z;
var ai = [];
function dS(e) {
  return (
    ai.push(e),
    function () {
      ai.splice(ai.indexOf(e), 1);
    }
  );
}
var an = hc,
  Tt = { size: 16, x: 0, y: 0, rotate: 0, flipX: !1, flipY: !1 };
function pS(e) {
  if (!(!e || !Jt)) {
    var t = se.createElement("style");
    t.setAttribute("type", "text/css"), (t.innerHTML = e);
    for (var n = se.head.childNodes, r = null, a = n.length - 1; a > -1; a--) {
      var i = n[a],
        o = (i.tagName || "").toUpperCase();
      ["STYLE", "LINK"].indexOf(o) > -1 && (r = i);
    }
    return se.head.insertBefore(t, r), e;
  }
}
var hS = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
function Ni() {
  for (var e = 12, t = ""; e-- > 0; ) t += hS[(Math.random() * 62) | 0];
  return t;
}
function ha(e) {
  for (var t = [], n = (e || []).length >>> 0; n--; ) t[n] = e[n];
  return t;
}
function Hf(e) {
  return e.classList
    ? ha(e.classList)
    : (e.getAttribute("class") || "").split(" ").filter(function (t) {
        return t;
      });
}
function n1(e) {
  return ""
    .concat(e)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}
function gS(e) {
  return Object.keys(e || {})
    .reduce(function (t, n) {
      return t + "".concat(n, '="').concat(n1(e[n]), '" ');
    }, "")
    .trim();
}
function is(e) {
  return Object.keys(e || {}).reduce(function (t, n) {
    return t + "".concat(n, ": ").concat(e[n].trim(), ";");
  }, "");
}
function Uf(e) {
  return (
    e.size !== Tt.size ||
    e.x !== Tt.x ||
    e.y !== Tt.y ||
    e.rotate !== Tt.rotate ||
    e.flipX ||
    e.flipY
  );
}
function vS(e) {
  var t = e.transform,
    n = e.containerWidth,
    r = e.iconWidth,
    a = { transform: "translate(".concat(n / 2, " 256)") },
    i = "translate(".concat(t.x * 32, ", ").concat(t.y * 32, ") "),
    o = "scale("
      .concat((t.size / 16) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / 16) * (t.flipY ? -1 : 1), ") "),
    l = "rotate(".concat(t.rotate, " 0 0)"),
    s = { transform: "".concat(i, " ").concat(o, " ").concat(l) },
    u = { transform: "translate(".concat((r / 2) * -1, " -256)") };
  return { outer: a, inner: s, path: u };
}
function mS(e) {
  var t = e.transform,
    n = e.width,
    r = n === void 0 ? hc : n,
    a = e.height,
    i = a === void 0 ? hc : a,
    o = e.startCentered,
    l = o === void 0 ? !1 : o,
    s = "";
  return (
    l && Xm
      ? (s += "translate("
          .concat(t.x / an - r / 2, "em, ")
          .concat(t.y / an - i / 2, "em) "))
      : l
      ? (s += "translate(calc(-50% + "
          .concat(t.x / an, "em), calc(-50% + ")
          .concat(t.y / an, "em)) "))
      : (s += "translate(".concat(t.x / an, "em, ").concat(t.y / an, "em) ")),
    (s += "scale("
      .concat((t.size / an) * (t.flipX ? -1 : 1), ", ")
      .concat((t.size / an) * (t.flipY ? -1 : 1), ") ")),
    (s += "rotate(".concat(t.rotate, "deg) ")),
    s
  );
}
var yS = `:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;
function r1() {
  var e = Qm,
    t = qm,
    n = z.cssPrefix,
    r = z.replacementClass,
    a = yS;
  if (n !== e || r !== t) {
    var i = new RegExp("\\.".concat(e, "\\-"), "g"),
      o = new RegExp("\\--".concat(e, "\\-"), "g"),
      l = new RegExp("\\.".concat(t), "g");
    a = a
      .replace(i, ".".concat(n, "-"))
      .replace(o, "--".concat(n, "-"))
      .replace(l, ".".concat(r));
  }
  return a;
}
var vh = !1;
function Js() {
  z.autoAddCss && !vh && (pS(r1()), (vh = !0));
}
var bS = {
    mixout: function () {
      return { dom: { css: r1, insertCss: Js } };
    },
    hooks: function () {
      return {
        beforeDOMElementCreation: function () {
          Js();
        },
        beforeI2svg: function () {
          Js();
        },
      };
    },
  },
  Qt = kn || {};
Qt[Xt] || (Qt[Xt] = {});
Qt[Xt].styles || (Qt[Xt].styles = {});
Qt[Xt].hooks || (Qt[Xt].hooks = {});
Qt[Xt].shims || (Qt[Xt].shims = []);
var bt = Qt[Xt],
  a1 = [],
  xS = function e() {
    se.removeEventListener("DOMContentLoaded", e),
      (_l = 1),
      a1.map(function (t) {
        return t();
      });
  },
  _l = !1;
Jt &&
  ((_l = (se.documentElement.doScroll ? /^loaded|^c/ : /^loaded|^i|^c/).test(
    se.readyState
  )),
  _l || se.addEventListener("DOMContentLoaded", xS));
function wS(e) {
  Jt && (_l ? setTimeout(e, 0) : a1.push(e));
}
function Gi(e) {
  var t = e.tag,
    n = e.attributes,
    r = n === void 0 ? {} : n,
    a = e.children,
    i = a === void 0 ? [] : a;
  return typeof e == "string"
    ? n1(e)
    : "<"
        .concat(t, " ")
        .concat(gS(r), ">")
        .concat(i.map(Gi).join(""), "</")
        .concat(t, ">");
}
function mh(e, t, n) {
  if (e && e[t] && e[t][n]) return { prefix: t, iconName: n, icon: e[t][n] };
}
var SS = function (t, n) {
    return function (r, a, i, o) {
      return t.call(n, r, a, i, o);
    };
  },
  eu = function (t, n, r, a) {
    var i = Object.keys(t),
      o = i.length,
      l = a !== void 0 ? SS(n, a) : n,
      s,
      u,
      c;
    for (
      r === void 0 ? ((s = 1), (c = t[i[0]])) : ((s = 0), (c = r));
      s < o;
      s++
    )
      (u = i[s]), (c = l(c, t[u], u, t));
    return c;
  };
function kS(e) {
  for (var t = [], n = 0, r = e.length; n < r; ) {
    var a = e.charCodeAt(n++);
    if (a >= 55296 && a <= 56319 && n < r) {
      var i = e.charCodeAt(n++);
      (i & 64512) == 56320
        ? t.push(((a & 1023) << 10) + (i & 1023) + 65536)
        : (t.push(a), n--);
    } else t.push(a);
  }
  return t;
}
function vc(e) {
  var t = kS(e);
  return t.length === 1 ? t[0].toString(16) : null;
}
function ES(e, t) {
  var n = e.length,
    r = e.charCodeAt(t),
    a;
  return r >= 55296 &&
    r <= 56319 &&
    n > t + 1 &&
    ((a = e.charCodeAt(t + 1)), a >= 56320 && a <= 57343)
    ? (r - 55296) * 1024 + a - 56320 + 65536
    : r;
}
function yh(e) {
  return Object.keys(e).reduce(function (t, n) {
    var r = e[n],
      a = !!r.icon;
    return a ? (t[r.iconName] = r.icon) : (t[n] = r), t;
  }, {});
}
function mc(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
    r = n.skipHooks,
    a = r === void 0 ? !1 : r,
    i = yh(t);
  typeof bt.hooks.addPack == "function" && !a
    ? bt.hooks.addPack(e, yh(t))
    : (bt.styles[e] = N(N({}, bt.styles[e] || {}), i)),
    e === "fas" && mc("fa", t);
}
var Oo,
  Ao,
  To,
  Wr = bt.styles,
  _S = bt.shims,
  CS =
    ((Oo = {}),
    Se(Oo, oe, Object.values(ji[oe])),
    Se(Oo, ge, Object.values(ji[ge])),
    Oo),
  Wf = null,
  i1 = {},
  o1 = {},
  l1 = {},
  s1 = {},
  u1 = {},
  $S =
    ((Ao = {}),
    Se(Ao, oe, Object.keys(Ti[oe])),
    Se(Ao, ge, Object.keys(Ti[ge])),
    Ao);
function OS(e) {
  return ~sS.indexOf(e);
}
function AS(e, t) {
  var n = t.split("-"),
    r = n[0],
    a = n.slice(1).join("-");
  return r === e && a !== "" && !OS(a) ? a : null;
}
var c1 = function () {
  var t = function (i) {
    return eu(
      Wr,
      function (o, l, s) {
        return (o[s] = eu(l, i, {})), o;
      },
      {}
    );
  };
  (i1 = t(function (a, i, o) {
    if ((i[3] && (a[i[3]] = o), i[2])) {
      var l = i[2].filter(function (s) {
        return typeof s == "number";
      });
      l.forEach(function (s) {
        a[s.toString(16)] = o;
      });
    }
    return a;
  })),
    (o1 = t(function (a, i, o) {
      if (((a[o] = o), i[2])) {
        var l = i[2].filter(function (s) {
          return typeof s == "string";
        });
        l.forEach(function (s) {
          a[s] = o;
        });
      }
      return a;
    })),
    (u1 = t(function (a, i, o) {
      var l = i[2];
      return (
        (a[o] = o),
        l.forEach(function (s) {
          a[s] = o;
        }),
        a
      );
    }));
  var n = "far" in Wr || z.autoFetchSvg,
    r = eu(
      _S,
      function (a, i) {
        var o = i[0],
          l = i[1],
          s = i[2];
        return (
          l === "far" && !n && (l = "fas"),
          typeof o == "string" && (a.names[o] = { prefix: l, iconName: s }),
          typeof o == "number" &&
            (a.unicodes[o.toString(16)] = { prefix: l, iconName: s }),
          a
        );
      },
      { names: {}, unicodes: {} }
    );
  (l1 = r.names),
    (s1 = r.unicodes),
    (Wf = os(z.styleDefault, { family: z.familyDefault }));
};
dS(function (e) {
  Wf = os(e.styleDefault, { family: z.familyDefault });
});
c1();
function Gf(e, t) {
  return (i1[e] || {})[t];
}
function TS(e, t) {
  return (o1[e] || {})[t];
}
function Vn(e, t) {
  return (u1[e] || {})[t];
}
function f1(e) {
  return l1[e] || { prefix: null, iconName: null };
}
function PS(e) {
  var t = s1[e],
    n = Gf("fas", e);
  return (
    t ||
    (n ? { prefix: "fas", iconName: n } : null) || {
      prefix: null,
      iconName: null,
    }
  );
}
function En() {
  return Wf;
}
var Vf = function () {
  return { prefix: null, iconName: null, rest: [] };
};
function os(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.family,
    r = n === void 0 ? oe : n,
    a = Ti[r][e],
    i = Pi[r][e] || Pi[r][a],
    o = e in bt.styles ? e : null;
  return i || o || null;
}
var bh =
  ((To = {}),
  Se(To, oe, Object.keys(ji[oe])),
  Se(To, ge, Object.keys(ji[ge])),
  To);
function ls(e) {
  var t,
    n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    r = n.skipLookups,
    a = r === void 0 ? !1 : r,
    i =
      ((t = {}),
      Se(t, oe, "".concat(z.cssPrefix, "-").concat(oe)),
      Se(t, ge, "".concat(z.cssPrefix, "-").concat(ge)),
      t),
    o = null,
    l = oe;
  (e.includes(i[oe]) ||
    e.some(function (u) {
      return bh[oe].includes(u);
    })) &&
    (l = oe),
    (e.includes(i[ge]) ||
      e.some(function (u) {
        return bh[ge].includes(u);
      })) &&
      (l = ge);
  var s = e.reduce(function (u, c) {
    var f = AS(z.cssPrefix, c);
    if (
      (Wr[c]
        ? ((c = CS[l].includes(c) ? nS[l][c] : c), (o = c), (u.prefix = c))
        : $S[l].indexOf(c) > -1
        ? ((o = c), (u.prefix = os(c, { family: l })))
        : f
        ? (u.iconName = f)
        : c !== z.replacementClass &&
          c !== i[oe] &&
          c !== i[ge] &&
          u.rest.push(c),
      !a && u.prefix && u.iconName)
    ) {
      var d = o === "fa" ? f1(u.iconName) : {},
        m = Vn(u.prefix, u.iconName);
      d.prefix && (o = null),
        (u.iconName = d.iconName || m || u.iconName),
        (u.prefix = d.prefix || u.prefix),
        u.prefix === "far" &&
          !Wr.far &&
          Wr.fas &&
          !z.autoFetchSvg &&
          (u.prefix = "fas");
    }
    return u;
  }, Vf());
  return (
    (e.includes("fa-brands") || e.includes("fab")) && (s.prefix = "fab"),
    (e.includes("fa-duotone") || e.includes("fad")) && (s.prefix = "fad"),
    !s.prefix &&
      l === ge &&
      (Wr.fass || z.autoFetchSvg) &&
      ((s.prefix = "fass"),
      (s.iconName = Vn(s.prefix, s.iconName) || s.iconName)),
    (s.prefix === "fa" || o === "fa") && (s.prefix = En() || "fas"),
    s
  );
}
var jS = (function () {
    function e() {
      W2(this, e), (this.definitions = {});
    }
    return (
      G2(e, [
        {
          key: "add",
          value: function () {
            for (
              var n = this, r = arguments.length, a = new Array(r), i = 0;
              i < r;
              i++
            )
              a[i] = arguments[i];
            var o = a.reduce(this._pullDefinitions, {});
            Object.keys(o).forEach(function (l) {
              (n.definitions[l] = N(N({}, n.definitions[l] || {}), o[l])),
                mc(l, o[l]);
              var s = ji[oe][l];
              s && mc(s, o[l]), c1();
            });
          },
        },
        {
          key: "reset",
          value: function () {
            this.definitions = {};
          },
        },
        {
          key: "_pullDefinitions",
          value: function (n, r) {
            var a = r.prefix && r.iconName && r.icon ? { 0: r } : r;
            return (
              Object.keys(a).map(function (i) {
                var o = a[i],
                  l = o.prefix,
                  s = o.iconName,
                  u = o.icon,
                  c = u[2];
                n[l] || (n[l] = {}),
                  c.length > 0 &&
                    c.forEach(function (f) {
                      typeof f == "string" && (n[l][f] = u);
                    }),
                  (n[l][s] = u);
              }),
              n
            );
          },
        },
      ]),
      e
    );
  })(),
  xh = [],
  Gr = {},
  ea = {},
  RS = Object.keys(ea);
function NS(e, t) {
  var n = t.mixoutsTo;
  return (
    (xh = e),
    (Gr = {}),
    Object.keys(ea).forEach(function (r) {
      RS.indexOf(r) === -1 && delete ea[r];
    }),
    xh.forEach(function (r) {
      var a = r.mixout ? r.mixout() : {};
      if (
        (Object.keys(a).forEach(function (o) {
          typeof a[o] == "function" && (n[o] = a[o]),
            El(a[o]) === "object" &&
              Object.keys(a[o]).forEach(function (l) {
                n[o] || (n[o] = {}), (n[o][l] = a[o][l]);
              });
        }),
        r.hooks)
      ) {
        var i = r.hooks();
        Object.keys(i).forEach(function (o) {
          Gr[o] || (Gr[o] = []), Gr[o].push(i[o]);
        });
      }
      r.provides && r.provides(ea);
    }),
    n
  );
}
function yc(e, t) {
  for (
    var n = arguments.length, r = new Array(n > 2 ? n - 2 : 0), a = 2;
    a < n;
    a++
  )
    r[a - 2] = arguments[a];
  var i = Gr[e] || [];
  return (
    i.forEach(function (o) {
      t = o.apply(null, [t].concat(r));
    }),
    t
  );
}
function tr(e) {
  for (
    var t = arguments.length, n = new Array(t > 1 ? t - 1 : 0), r = 1;
    r < t;
    r++
  )
    n[r - 1] = arguments[r];
  var a = Gr[e] || [];
  a.forEach(function (i) {
    i.apply(null, n);
  });
}
function qt() {
  var e = arguments[0],
    t = Array.prototype.slice.call(arguments, 1);
  return ea[e] ? ea[e].apply(null, t) : void 0;
}
function bc(e) {
  e.prefix === "fa" && (e.prefix = "fas");
  var t = e.iconName,
    n = e.prefix || En();
  if (t)
    return (t = Vn(n, t) || t), mh(d1.definitions, n, t) || mh(bt.styles, n, t);
}
var d1 = new jS(),
  FS = function () {
    (z.autoReplaceSvg = !1), (z.observeMutations = !1), tr("noAuto");
  },
  IS = {
    i2svg: function () {
      var t =
        arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
      return Jt
        ? (tr("beforeI2svg", t), qt("pseudoElements2svg", t), qt("i2svg", t))
        : Promise.reject("Operation requires a DOM of some kind.");
    },
    watch: function () {
      var t =
          arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
        n = t.autoReplaceSvgRoot;
      z.autoReplaceSvg === !1 && (z.autoReplaceSvg = !0),
        (z.observeMutations = !0),
        wS(function () {
          MS({ autoReplaceSvgRoot: n }), tr("watch", t);
        });
    },
  },
  LS = {
    icon: function (t) {
      if (t === null) return null;
      if (El(t) === "object" && t.prefix && t.iconName)
        return {
          prefix: t.prefix,
          iconName: Vn(t.prefix, t.iconName) || t.iconName,
        };
      if (Array.isArray(t) && t.length === 2) {
        var n = t[1].indexOf("fa-") === 0 ? t[1].slice(3) : t[1],
          r = os(t[0]);
        return { prefix: r, iconName: Vn(r, n) || n };
      }
      if (
        typeof t == "string" &&
        (t.indexOf("".concat(z.cssPrefix, "-")) > -1 || t.match(rS))
      ) {
        var a = ls(t.split(" "), { skipLookups: !0 });
        return {
          prefix: a.prefix || En(),
          iconName: Vn(a.prefix, a.iconName) || a.iconName,
        };
      }
      if (typeof t == "string") {
        var i = En();
        return { prefix: i, iconName: Vn(i, t) || t };
      }
    },
  },
  rt = {
    noAuto: FS,
    config: z,
    dom: IS,
    parse: LS,
    library: d1,
    findIconDefinition: bc,
    toHtml: Gi,
  },
  MS = function () {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {},
      n = t.autoReplaceSvgRoot,
      r = n === void 0 ? se : n;
    (Object.keys(bt.styles).length > 0 || z.autoFetchSvg) &&
      Jt &&
      z.autoReplaceSvg &&
      rt.dom.i2svg({ node: r });
  };
function ss(e, t) {
  return (
    Object.defineProperty(e, "abstract", { get: t }),
    Object.defineProperty(e, "html", {
      get: function () {
        return e.abstract.map(function (r) {
          return Gi(r);
        });
      },
    }),
    Object.defineProperty(e, "node", {
      get: function () {
        if (Jt) {
          var r = se.createElement("div");
          return (r.innerHTML = e.html), r.children;
        }
      },
    }),
    e
  );
}
function zS(e) {
  var t = e.children,
    n = e.main,
    r = e.mask,
    a = e.attributes,
    i = e.styles,
    o = e.transform;
  if (Uf(o) && n.found && !r.found) {
    var l = n.width,
      s = n.height,
      u = { x: l / s / 2, y: 0.5 };
    a.style = is(
      N(
        N({}, i),
        {},
        {
          "transform-origin": ""
            .concat(u.x + o.x / 16, "em ")
            .concat(u.y + o.y / 16, "em"),
        }
      )
    );
  }
  return [{ tag: "svg", attributes: a, children: t }];
}
function DS(e) {
  var t = e.prefix,
    n = e.iconName,
    r = e.children,
    a = e.attributes,
    i = e.symbol,
    o = i === !0 ? "".concat(t, "-").concat(z.cssPrefix, "-").concat(n) : i;
  return [
    {
      tag: "svg",
      attributes: { style: "display: none;" },
      children: [
        { tag: "symbol", attributes: N(N({}, a), {}, { id: o }), children: r },
      ],
    },
  ];
}
function Yf(e) {
  var t = e.icons,
    n = t.main,
    r = t.mask,
    a = e.prefix,
    i = e.iconName,
    o = e.transform,
    l = e.symbol,
    s = e.title,
    u = e.maskId,
    c = e.titleId,
    f = e.extra,
    d = e.watchable,
    m = d === void 0 ? !1 : d,
    x = r.found ? r : n,
    w = x.width,
    E = x.height,
    v = a === "fak",
    p = [z.replacementClass, i ? "".concat(z.cssPrefix, "-").concat(i) : ""]
      .filter(function (G) {
        return f.classes.indexOf(G) === -1;
      })
      .filter(function (G) {
        return G !== "" || !!G;
      })
      .concat(f.classes)
      .join(" "),
    b = {
      children: [],
      attributes: N(
        N({}, f.attributes),
        {},
        {
          "data-prefix": a,
          "data-icon": i,
          class: p,
          role: f.attributes.role || "img",
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 ".concat(w, " ").concat(E),
        }
      ),
    },
    _ =
      v && !~f.classes.indexOf("fa-fw")
        ? { width: "".concat((w / E) * 16 * 0.0625, "em") }
        : {};
  m && (b.attributes[er] = ""),
    s &&
      (b.children.push({
        tag: "title",
        attributes: {
          id: b.attributes["aria-labelledby"] || "title-".concat(c || Ni()),
        },
        children: [s],
      }),
      delete b.attributes.title);
  var $ = N(
      N({}, b),
      {},
      {
        prefix: a,
        iconName: i,
        main: n,
        mask: r,
        maskId: u,
        transform: o,
        symbol: l,
        styles: N(N({}, _), f.styles),
      }
    ),
    A =
      r.found && n.found
        ? qt("generateAbstractMask", $) || { children: [], attributes: {} }
        : qt("generateAbstractIcon", $) || { children: [], attributes: {} },
    O = A.children,
    j = A.attributes;
  return ($.children = O), ($.attributes = j), l ? DS($) : zS($);
}
function wh(e) {
  var t = e.content,
    n = e.width,
    r = e.height,
    a = e.transform,
    i = e.title,
    o = e.extra,
    l = e.watchable,
    s = l === void 0 ? !1 : l,
    u = N(
      N(N({}, o.attributes), i ? { title: i } : {}),
      {},
      { class: o.classes.join(" ") }
    );
  s && (u[er] = "");
  var c = N({}, o.styles);
  Uf(a) &&
    ((c.transform = mS({
      transform: a,
      startCentered: !0,
      width: n,
      height: r,
    })),
    (c["-webkit-transform"] = c.transform));
  var f = is(c);
  f.length > 0 && (u.style = f);
  var d = [];
  return (
    d.push({ tag: "span", attributes: u, children: [t] }),
    i &&
      d.push({ tag: "span", attributes: { class: "sr-only" }, children: [i] }),
    d
  );
}
function BS(e) {
  var t = e.content,
    n = e.title,
    r = e.extra,
    a = N(
      N(N({}, r.attributes), n ? { title: n } : {}),
      {},
      { class: r.classes.join(" ") }
    ),
    i = is(r.styles);
  i.length > 0 && (a.style = i);
  var o = [];
  return (
    o.push({ tag: "span", attributes: a, children: [t] }),
    n &&
      o.push({ tag: "span", attributes: { class: "sr-only" }, children: [n] }),
    o
  );
}
var tu = bt.styles;
function xc(e) {
  var t = e[0],
    n = e[1],
    r = e.slice(4),
    a = Lf(r, 1),
    i = a[0],
    o = null;
  return (
    Array.isArray(i)
      ? (o = {
          tag: "g",
          attributes: { class: "".concat(z.cssPrefix, "-").concat(Gn.GROUP) },
          children: [
            {
              tag: "path",
              attributes: {
                class: "".concat(z.cssPrefix, "-").concat(Gn.SECONDARY),
                fill: "currentColor",
                d: i[0],
              },
            },
            {
              tag: "path",
              attributes: {
                class: "".concat(z.cssPrefix, "-").concat(Gn.PRIMARY),
                fill: "currentColor",
                d: i[1],
              },
            },
          ],
        })
      : (o = { tag: "path", attributes: { fill: "currentColor", d: i } }),
    { found: !0, width: t, height: n, icon: o }
  );
}
var HS = { found: !1, width: 512, height: 512 };
function US(e, t) {
  !Zm &&
    !z.showMissingIcons &&
    e &&
    console.error(
      'Icon with name "'.concat(e, '" and prefix "').concat(t, '" is missing.')
    );
}
function wc(e, t) {
  var n = t;
  return (
    t === "fa" && z.styleDefault !== null && (t = En()),
    new Promise(function (r, a) {
      if ((qt("missingIconAbstract"), n === "fa")) {
        var i = f1(e) || {};
        (e = i.iconName || e), (t = i.prefix || t);
      }
      if (e && t && tu[t] && tu[t][e]) {
        var o = tu[t][e];
        return r(xc(o));
      }
      US(e, t),
        r(
          N(
            N({}, HS),
            {},
            {
              icon:
                z.showMissingIcons && e ? qt("missingIconAbstract") || {} : {},
            }
          )
        );
    })
  );
}
var Sh = function () {},
  Sc =
    z.measurePerformance && So && So.mark && So.measure
      ? So
      : { mark: Sh, measure: Sh },
  Ga = 'FA "6.4.2"',
  WS = function (t) {
    return (
      Sc.mark("".concat(Ga, " ").concat(t, " begins")),
      function () {
        return p1(t);
      }
    );
  },
  p1 = function (t) {
    Sc.mark("".concat(Ga, " ").concat(t, " ends")),
      Sc.measure(
        "".concat(Ga, " ").concat(t),
        "".concat(Ga, " ").concat(t, " begins"),
        "".concat(Ga, " ").concat(t, " ends")
      );
  },
  Kf = { begin: WS, end: p1 },
  Qo = function () {};
function kh(e) {
  var t = e.getAttribute ? e.getAttribute(er) : null;
  return typeof t == "string";
}
function GS(e) {
  var t = e.getAttribute ? e.getAttribute(zf) : null,
    n = e.getAttribute ? e.getAttribute(Df) : null;
  return t && n;
}
function VS(e) {
  return (
    e &&
    e.classList &&
    e.classList.contains &&
    e.classList.contains(z.replacementClass)
  );
}
function YS() {
  if (z.autoReplaceSvg === !0) return qo.replace;
  var e = qo[z.autoReplaceSvg];
  return e || qo.replace;
}
function KS(e) {
  return se.createElementNS("http://www.w3.org/2000/svg", e);
}
function XS(e) {
  return se.createElement(e);
}
function h1(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
    n = t.ceFn,
    r = n === void 0 ? (e.tag === "svg" ? KS : XS) : n;
  if (typeof e == "string") return se.createTextNode(e);
  var a = r(e.tag);
  Object.keys(e.attributes || []).forEach(function (o) {
    a.setAttribute(o, e.attributes[o]);
  });
  var i = e.children || [];
  return (
    i.forEach(function (o) {
      a.appendChild(h1(o, { ceFn: r }));
    }),
    a
  );
}
function QS(e) {
  var t = " ".concat(e.outerHTML, " ");
  return (t = "".concat(t, "Font Awesome fontawesome.com ")), t;
}
var qo = {
  replace: function (t) {
    var n = t[0];
    if (n.parentNode)
      if (
        (t[1].forEach(function (a) {
          n.parentNode.insertBefore(h1(a), n);
        }),
        n.getAttribute(er) === null && z.keepOriginalSource)
      ) {
        var r = se.createComment(QS(n));
        n.parentNode.replaceChild(r, n);
      } else n.remove();
  },
  nest: function (t) {
    var n = t[0],
      r = t[1];
    if (~Hf(n).indexOf(z.replacementClass)) return qo.replace(t);
    var a = new RegExp("".concat(z.cssPrefix, "-.*"));
    if ((delete r[0].attributes.id, r[0].attributes.class)) {
      var i = r[0].attributes.class.split(" ").reduce(
        function (l, s) {
          return (
            s === z.replacementClass || s.match(a)
              ? l.toSvg.push(s)
              : l.toNode.push(s),
            l
          );
        },
        { toNode: [], toSvg: [] }
      );
      (r[0].attributes.class = i.toSvg.join(" ")),
        i.toNode.length === 0
          ? n.removeAttribute("class")
          : n.setAttribute("class", i.toNode.join(" "));
    }
    var o = r.map(function (l) {
      return Gi(l);
    }).join(`
`);
    n.setAttribute(er, ""), (n.innerHTML = o);
  },
};
function Eh(e) {
  e();
}
function g1(e, t) {
  var n = typeof t == "function" ? t : Qo;
  if (e.length === 0) n();
  else {
    var r = Eh;
    z.mutateApproach === eS && (r = kn.requestAnimationFrame || Eh),
      r(function () {
        var a = YS(),
          i = Kf.begin("mutate");
        e.map(a), i(), n();
      });
  }
}
var Xf = !1;
function v1() {
  Xf = !0;
}
function kc() {
  Xf = !1;
}
var Cl = null;
function _h(e) {
  if (hh && z.observeMutations) {
    var t = e.treeCallback,
      n = t === void 0 ? Qo : t,
      r = e.nodeCallback,
      a = r === void 0 ? Qo : r,
      i = e.pseudoElementsCallback,
      o = i === void 0 ? Qo : i,
      l = e.observeMutationsRoot,
      s = l === void 0 ? se : l;
    (Cl = new hh(function (u) {
      if (!Xf) {
        var c = En();
        ha(u).forEach(function (f) {
          if (
            (f.type === "childList" &&
              f.addedNodes.length > 0 &&
              !kh(f.addedNodes[0]) &&
              (z.searchPseudoElements && o(f.target), n(f.target)),
            f.type === "attributes" &&
              f.target.parentNode &&
              z.searchPseudoElements &&
              o(f.target.parentNode),
            f.type === "attributes" &&
              kh(f.target) &&
              ~lS.indexOf(f.attributeName))
          )
            if (f.attributeName === "class" && GS(f.target)) {
              var d = ls(Hf(f.target)),
                m = d.prefix,
                x = d.iconName;
              f.target.setAttribute(zf, m || c),
                x && f.target.setAttribute(Df, x);
            } else VS(f.target) && a(f.target);
        });
      }
    })),
      Jt &&
        Cl.observe(s, {
          childList: !0,
          attributes: !0,
          characterData: !0,
          subtree: !0,
        });
  }
}
function qS() {
  Cl && Cl.disconnect();
}
function ZS(e) {
  var t = e.getAttribute("style"),
    n = [];
  return (
    t &&
      (n = t.split(";").reduce(function (r, a) {
        var i = a.split(":"),
          o = i[0],
          l = i.slice(1);
        return o && l.length > 0 && (r[o] = l.join(":").trim()), r;
      }, {})),
    n
  );
}
function JS(e) {
  var t = e.getAttribute("data-prefix"),
    n = e.getAttribute("data-icon"),
    r = e.innerText !== void 0 ? e.innerText.trim() : "",
    a = ls(Hf(e));
  return (
    a.prefix || (a.prefix = En()),
    t && n && ((a.prefix = t), (a.iconName = n)),
    (a.iconName && a.prefix) ||
      (a.prefix &&
        r.length > 0 &&
        (a.iconName =
          TS(a.prefix, e.innerText) || Gf(a.prefix, vc(e.innerText))),
      !a.iconName &&
        z.autoFetchSvg &&
        e.firstChild &&
        e.firstChild.nodeType === Node.TEXT_NODE &&
        (a.iconName = e.firstChild.data)),
    a
  );
}
function e3(e) {
  var t = ha(e.attributes).reduce(function (a, i) {
      return (
        a.name !== "class" && a.name !== "style" && (a[i.name] = i.value), a
      );
    }, {}),
    n = e.getAttribute("title"),
    r = e.getAttribute("data-fa-title-id");
  return (
    z.autoA11y &&
      (n
        ? (t["aria-labelledby"] = ""
            .concat(z.replacementClass, "-title-")
            .concat(r || Ni()))
        : ((t["aria-hidden"] = "true"), (t.focusable = "false"))),
    t
  );
}
function t3() {
  return {
    iconName: null,
    title: null,
    titleId: null,
    prefix: null,
    transform: Tt,
    symbol: !1,
    mask: { iconName: null, prefix: null, rest: [] },
    maskId: null,
    extra: { classes: [], styles: {}, attributes: {} },
  };
}
function Ch(e) {
  var t =
      arguments.length > 1 && arguments[1] !== void 0
        ? arguments[1]
        : { styleParser: !0 },
    n = JS(e),
    r = n.iconName,
    a = n.prefix,
    i = n.rest,
    o = e3(e),
    l = yc("parseNodeAttributes", {}, e),
    s = t.styleParser ? ZS(e) : [];
  return N(
    {
      iconName: r,
      title: e.getAttribute("title"),
      titleId: e.getAttribute("data-fa-title-id"),
      prefix: a,
      transform: Tt,
      mask: { iconName: null, prefix: null, rest: [] },
      maskId: null,
      symbol: !1,
      extra: { classes: i, styles: s, attributes: o },
    },
    l
  );
}
var n3 = bt.styles;
function m1(e) {
  var t = z.autoReplaceSvg === "nest" ? Ch(e, { styleParser: !1 }) : Ch(e);
  return ~t.extra.classes.indexOf(Jm)
    ? qt("generateLayersText", e, t)
    : qt("generateSvgReplacementMutation", e, t);
}
var _n = new Set();
Bf.map(function (e) {
  _n.add("fa-".concat(e));
});
Object.keys(Ti[oe]).map(_n.add.bind(_n));
Object.keys(Ti[ge]).map(_n.add.bind(_n));
_n = Ui(_n);
function $h(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  if (!Jt) return Promise.resolve();
  var n = se.documentElement.classList,
    r = function (f) {
      return n.add("".concat(gh, "-").concat(f));
    },
    a = function (f) {
      return n.remove("".concat(gh, "-").concat(f));
    },
    i = z.autoFetchSvg
      ? _n
      : Bf.map(function (c) {
          return "fa-".concat(c);
        }).concat(Object.keys(n3));
  i.includes("fa") || i.push("fa");
  var o = [".".concat(Jm, ":not([").concat(er, "])")]
    .concat(
      i.map(function (c) {
        return ".".concat(c, ":not([").concat(er, "])");
      })
    )
    .join(", ");
  if (o.length === 0) return Promise.resolve();
  var l = [];
  try {
    l = ha(e.querySelectorAll(o));
  } catch {}
  if (l.length > 0) r("pending"), a("complete");
  else return Promise.resolve();
  var s = Kf.begin("onTree"),
    u = l.reduce(function (c, f) {
      try {
        var d = m1(f);
        d && c.push(d);
      } catch (m) {
        Zm || (m.name === "MissingIcon" && console.error(m));
      }
      return c;
    }, []);
  return new Promise(function (c, f) {
    Promise.all(u)
      .then(function (d) {
        g1(d, function () {
          r("active"),
            r("complete"),
            a("pending"),
            typeof t == "function" && t(),
            s(),
            c();
        });
      })
      .catch(function (d) {
        s(), f(d);
      });
  });
}
function r3(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null;
  m1(e).then(function (n) {
    n && g1([n], t);
  });
}
function a3(e) {
  return function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = (t || {}).icon ? t : bc(t || {}),
      a = n.mask;
    return (
      a && (a = (a || {}).icon ? a : bc(a || {})),
      e(r, N(N({}, n), {}, { mask: a }))
    );
  };
}
var i3 = function (t) {
    var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
      r = n.transform,
      a = r === void 0 ? Tt : r,
      i = n.symbol,
      o = i === void 0 ? !1 : i,
      l = n.mask,
      s = l === void 0 ? null : l,
      u = n.maskId,
      c = u === void 0 ? null : u,
      f = n.title,
      d = f === void 0 ? null : f,
      m = n.titleId,
      x = m === void 0 ? null : m,
      w = n.classes,
      E = w === void 0 ? [] : w,
      v = n.attributes,
      p = v === void 0 ? {} : v,
      b = n.styles,
      _ = b === void 0 ? {} : b;
    if (t) {
      var $ = t.prefix,
        A = t.iconName,
        O = t.icon;
      return ss(N({ type: "icon" }, t), function () {
        return (
          tr("beforeDOMElementCreation", { iconDefinition: t, params: n }),
          z.autoA11y &&
            (d
              ? (p["aria-labelledby"] = ""
                  .concat(z.replacementClass, "-title-")
                  .concat(x || Ni()))
              : ((p["aria-hidden"] = "true"), (p.focusable = "false"))),
          Yf({
            icons: {
              main: xc(O),
              mask: s
                ? xc(s.icon)
                : { found: !1, width: null, height: null, icon: {} },
            },
            prefix: $,
            iconName: A,
            transform: N(N({}, Tt), a),
            symbol: o,
            title: d,
            maskId: c,
            titleId: x,
            extra: { attributes: p, styles: _, classes: E },
          })
        );
      });
    }
  },
  o3 = {
    mixout: function () {
      return { icon: a3(i3) };
    },
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.treeCallback = $h), (n.nodeCallback = r3), n;
        },
      };
    },
    provides: function (t) {
      (t.i2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? se : r,
          i = n.callback,
          o = i === void 0 ? function () {} : i;
        return $h(a, o);
      }),
        (t.generateSvgReplacementMutation = function (n, r) {
          var a = r.iconName,
            i = r.title,
            o = r.titleId,
            l = r.prefix,
            s = r.transform,
            u = r.symbol,
            c = r.mask,
            f = r.maskId,
            d = r.extra;
          return new Promise(function (m, x) {
            Promise.all([
              wc(a, l),
              c.iconName
                ? wc(c.iconName, c.prefix)
                : Promise.resolve({
                    found: !1,
                    width: 512,
                    height: 512,
                    icon: {},
                  }),
            ])
              .then(function (w) {
                var E = Lf(w, 2),
                  v = E[0],
                  p = E[1];
                m([
                  n,
                  Yf({
                    icons: { main: v, mask: p },
                    prefix: l,
                    iconName: a,
                    transform: s,
                    symbol: u,
                    maskId: f,
                    title: i,
                    titleId: o,
                    extra: d,
                    watchable: !0,
                  }),
                ]);
              })
              .catch(x);
          });
        }),
        (t.generateAbstractIcon = function (n) {
          var r = n.children,
            a = n.attributes,
            i = n.main,
            o = n.transform,
            l = n.styles,
            s = is(l);
          s.length > 0 && (a.style = s);
          var u;
          return (
            Uf(o) &&
              (u = qt("generateAbstractTransformGrouping", {
                main: i,
                transform: o,
                containerWidth: i.width,
                iconWidth: i.width,
              })),
            r.push(u || i.icon),
            { children: r, attributes: a }
          );
        });
    },
  },
  l3 = {
    mixout: function () {
      return {
        layer: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.classes,
            i = a === void 0 ? [] : a;
          return ss({ type: "layer" }, function () {
            tr("beforeDOMElementCreation", { assembler: n, params: r });
            var o = [];
            return (
              n(function (l) {
                Array.isArray(l)
                  ? l.map(function (s) {
                      o = o.concat(s.abstract);
                    })
                  : (o = o.concat(l.abstract));
              }),
              [
                {
                  tag: "span",
                  attributes: {
                    class: ["".concat(z.cssPrefix, "-layers")]
                      .concat(Ui(i))
                      .join(" "),
                  },
                  children: o,
                },
              ]
            );
          });
        },
      };
    },
  },
  s3 = {
    mixout: function () {
      return {
        counter: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.title,
            i = a === void 0 ? null : a,
            o = r.classes,
            l = o === void 0 ? [] : o,
            s = r.attributes,
            u = s === void 0 ? {} : s,
            c = r.styles,
            f = c === void 0 ? {} : c;
          return ss({ type: "counter", content: n }, function () {
            return (
              tr("beforeDOMElementCreation", { content: n, params: r }),
              BS({
                content: n.toString(),
                title: i,
                extra: {
                  attributes: u,
                  styles: f,
                  classes: ["".concat(z.cssPrefix, "-layers-counter")].concat(
                    Ui(l)
                  ),
                },
              })
            );
          });
        },
      };
    },
  },
  u3 = {
    mixout: function () {
      return {
        text: function (n) {
          var r =
              arguments.length > 1 && arguments[1] !== void 0
                ? arguments[1]
                : {},
            a = r.transform,
            i = a === void 0 ? Tt : a,
            o = r.title,
            l = o === void 0 ? null : o,
            s = r.classes,
            u = s === void 0 ? [] : s,
            c = r.attributes,
            f = c === void 0 ? {} : c,
            d = r.styles,
            m = d === void 0 ? {} : d;
          return ss({ type: "text", content: n }, function () {
            return (
              tr("beforeDOMElementCreation", { content: n, params: r }),
              wh({
                content: n,
                transform: N(N({}, Tt), i),
                title: l,
                extra: {
                  attributes: f,
                  styles: m,
                  classes: ["".concat(z.cssPrefix, "-layers-text")].concat(
                    Ui(u)
                  ),
                },
              })
            );
          });
        },
      };
    },
    provides: function (t) {
      t.generateLayersText = function (n, r) {
        var a = r.title,
          i = r.transform,
          o = r.extra,
          l = null,
          s = null;
        if (Xm) {
          var u = parseInt(getComputedStyle(n).fontSize, 10),
            c = n.getBoundingClientRect();
          (l = c.width / u), (s = c.height / u);
        }
        return (
          z.autoA11y && !a && (o.attributes["aria-hidden"] = "true"),
          Promise.resolve([
            n,
            wh({
              content: n.innerHTML,
              width: l,
              height: s,
              transform: i,
              title: a,
              extra: o,
              watchable: !0,
            }),
          ])
        );
      };
    },
  },
  c3 = new RegExp('"', "ug"),
  Oh = [1105920, 1112319];
function f3(e) {
  var t = e.replace(c3, ""),
    n = ES(t, 0),
    r = n >= Oh[0] && n <= Oh[1],
    a = t.length === 2 ? t[0] === t[1] : !1;
  return { value: vc(a ? t[0] : t), isSecondary: r || a };
}
function Ah(e, t) {
  var n = "".concat(J2).concat(t.replace(":", "-"));
  return new Promise(function (r, a) {
    if (e.getAttribute(n) !== null) return r();
    var i = ha(e.children),
      o = i.filter(function (O) {
        return O.getAttribute(gc) === t;
      })[0],
      l = kn.getComputedStyle(e, t),
      s = l.getPropertyValue("font-family").match(aS),
      u = l.getPropertyValue("font-weight"),
      c = l.getPropertyValue("content");
    if (o && !s) return e.removeChild(o), r();
    if (s && c !== "none" && c !== "") {
      var f = l.getPropertyValue("content"),
        d = ~["Sharp"].indexOf(s[2]) ? ge : oe,
        m = ~[
          "Solid",
          "Regular",
          "Light",
          "Thin",
          "Duotone",
          "Brands",
          "Kit",
        ].indexOf(s[2])
          ? Pi[d][s[2].toLowerCase()]
          : iS[d][u],
        x = f3(f),
        w = x.value,
        E = x.isSecondary,
        v = s[0].startsWith("FontAwesome"),
        p = Gf(m, w),
        b = p;
      if (v) {
        var _ = PS(w);
        _.iconName && _.prefix && ((p = _.iconName), (m = _.prefix));
      }
      if (
        p &&
        !E &&
        (!o || o.getAttribute(zf) !== m || o.getAttribute(Df) !== b)
      ) {
        e.setAttribute(n, b), o && e.removeChild(o);
        var $ = t3(),
          A = $.extra;
        (A.attributes[gc] = t),
          wc(p, m)
            .then(function (O) {
              var j = Yf(
                  N(
                    N({}, $),
                    {},
                    {
                      icons: { main: O, mask: Vf() },
                      prefix: m,
                      iconName: b,
                      extra: A,
                      watchable: !0,
                    }
                  )
                ),
                G = se.createElementNS("http://www.w3.org/2000/svg", "svg");
              t === "::before"
                ? e.insertBefore(G, e.firstChild)
                : e.appendChild(G),
                (G.outerHTML = j.map(function (U) {
                  return Gi(U);
                }).join(`
`)),
                e.removeAttribute(n),
                r();
            })
            .catch(a);
      } else r();
    } else r();
  });
}
function d3(e) {
  return Promise.all([Ah(e, "::before"), Ah(e, "::after")]);
}
function p3(e) {
  return (
    e.parentNode !== document.head &&
    !~tS.indexOf(e.tagName.toUpperCase()) &&
    !e.getAttribute(gc) &&
    (!e.parentNode || e.parentNode.tagName !== "svg")
  );
}
function Th(e) {
  if (Jt)
    return new Promise(function (t, n) {
      var r = ha(e.querySelectorAll("*")).filter(p3).map(d3),
        a = Kf.begin("searchPseudoElements");
      v1(),
        Promise.all(r)
          .then(function () {
            a(), kc(), t();
          })
          .catch(function () {
            a(), kc(), n();
          });
    });
}
var h3 = {
    hooks: function () {
      return {
        mutationObserverCallbacks: function (n) {
          return (n.pseudoElementsCallback = Th), n;
        },
      };
    },
    provides: function (t) {
      t.pseudoElements2svg = function (n) {
        var r = n.node,
          a = r === void 0 ? se : r;
        z.searchPseudoElements && Th(a);
      };
    },
  },
  Ph = !1,
  g3 = {
    mixout: function () {
      return {
        dom: {
          unwatch: function () {
            v1(), (Ph = !0);
          },
        },
      };
    },
    hooks: function () {
      return {
        bootstrap: function () {
          _h(yc("mutationObserverCallbacks", {}));
        },
        noAuto: function () {
          qS();
        },
        watch: function (n) {
          var r = n.observeMutationsRoot;
          Ph
            ? kc()
            : _h(yc("mutationObserverCallbacks", { observeMutationsRoot: r }));
        },
      };
    },
  },
  jh = function (t) {
    var n = { size: 16, x: 0, y: 0, flipX: !1, flipY: !1, rotate: 0 };
    return t
      .toLowerCase()
      .split(" ")
      .reduce(function (r, a) {
        var i = a.toLowerCase().split("-"),
          o = i[0],
          l = i.slice(1).join("-");
        if (o && l === "h") return (r.flipX = !0), r;
        if (o && l === "v") return (r.flipY = !0), r;
        if (((l = parseFloat(l)), isNaN(l))) return r;
        switch (o) {
          case "grow":
            r.size = r.size + l;
            break;
          case "shrink":
            r.size = r.size - l;
            break;
          case "left":
            r.x = r.x - l;
            break;
          case "right":
            r.x = r.x + l;
            break;
          case "up":
            r.y = r.y - l;
            break;
          case "down":
            r.y = r.y + l;
            break;
          case "rotate":
            r.rotate = r.rotate + l;
            break;
        }
        return r;
      }, n);
  },
  v3 = {
    mixout: function () {
      return {
        parse: {
          transform: function (n) {
            return jh(n);
          },
        },
      };
    },
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-transform");
          return a && (n.transform = jh(a)), n;
        },
      };
    },
    provides: function (t) {
      t.generateAbstractTransformGrouping = function (n) {
        var r = n.main,
          a = n.transform,
          i = n.containerWidth,
          o = n.iconWidth,
          l = { transform: "translate(".concat(i / 2, " 256)") },
          s = "translate(".concat(a.x * 32, ", ").concat(a.y * 32, ") "),
          u = "scale("
            .concat((a.size / 16) * (a.flipX ? -1 : 1), ", ")
            .concat((a.size / 16) * (a.flipY ? -1 : 1), ") "),
          c = "rotate(".concat(a.rotate, " 0 0)"),
          f = { transform: "".concat(s, " ").concat(u, " ").concat(c) },
          d = { transform: "translate(".concat((o / 2) * -1, " -256)") },
          m = { outer: l, inner: f, path: d };
        return {
          tag: "g",
          attributes: N({}, m.outer),
          children: [
            {
              tag: "g",
              attributes: N({}, m.inner),
              children: [
                {
                  tag: r.icon.tag,
                  children: r.icon.children,
                  attributes: N(N({}, r.icon.attributes), m.path),
                },
              ],
            },
          ],
        };
      };
    },
  },
  nu = { x: 0, y: 0, width: "100%", height: "100%" };
function Rh(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
  return (
    e.attributes && (e.attributes.fill || t) && (e.attributes.fill = "black"), e
  );
}
function m3(e) {
  return e.tag === "g" ? e.children : [e];
}
var y3 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-mask"),
            i = a
              ? ls(
                  a.split(" ").map(function (o) {
                    return o.trim();
                  })
                )
              : Vf();
          return (
            i.prefix || (i.prefix = En()),
            (n.mask = i),
            (n.maskId = r.getAttribute("data-fa-mask-id")),
            n
          );
        },
      };
    },
    provides: function (t) {
      t.generateAbstractMask = function (n) {
        var r = n.children,
          a = n.attributes,
          i = n.main,
          o = n.mask,
          l = n.maskId,
          s = n.transform,
          u = i.width,
          c = i.icon,
          f = o.width,
          d = o.icon,
          m = vS({ transform: s, containerWidth: f, iconWidth: u }),
          x = { tag: "rect", attributes: N(N({}, nu), {}, { fill: "white" }) },
          w = c.children ? { children: c.children.map(Rh) } : {},
          E = {
            tag: "g",
            attributes: N({}, m.inner),
            children: [
              Rh(
                N({ tag: c.tag, attributes: N(N({}, c.attributes), m.path) }, w)
              ),
            ],
          },
          v = { tag: "g", attributes: N({}, m.outer), children: [E] },
          p = "mask-".concat(l || Ni()),
          b = "clip-".concat(l || Ni()),
          _ = {
            tag: "mask",
            attributes: N(
              N({}, nu),
              {},
              {
                id: p,
                maskUnits: "userSpaceOnUse",
                maskContentUnits: "userSpaceOnUse",
              }
            ),
            children: [x, v],
          },
          $ = {
            tag: "defs",
            children: [
              { tag: "clipPath", attributes: { id: b }, children: m3(d) },
              _,
            ],
          };
        return (
          r.push($, {
            tag: "rect",
            attributes: N(
              {
                fill: "currentColor",
                "clip-path": "url(#".concat(b, ")"),
                mask: "url(#".concat(p, ")"),
              },
              nu
            ),
          }),
          { children: r, attributes: a }
        );
      };
    },
  },
  b3 = {
    provides: function (t) {
      var n = !1;
      kn.matchMedia &&
        (n = kn.matchMedia("(prefers-reduced-motion: reduce)").matches),
        (t.missingIconAbstract = function () {
          var r = [],
            a = { fill: "currentColor" },
            i = { attributeType: "XML", repeatCount: "indefinite", dur: "2s" };
          r.push({
            tag: "path",
            attributes: N(
              N({}, a),
              {},
              {
                d: "M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z",
              }
            ),
          });
          var o = N(N({}, i), {}, { attributeName: "opacity" }),
            l = {
              tag: "circle",
              attributes: N(N({}, a), {}, { cx: "256", cy: "364", r: "28" }),
              children: [],
            };
          return (
            n ||
              l.children.push(
                {
                  tag: "animate",
                  attributes: N(
                    N({}, i),
                    {},
                    { attributeName: "r", values: "28;14;28;28;14;28;" }
                  ),
                },
                {
                  tag: "animate",
                  attributes: N(N({}, o), {}, { values: "1;0;1;1;0;1;" }),
                }
              ),
            r.push(l),
            r.push({
              tag: "path",
              attributes: N(
                N({}, a),
                {},
                {
                  opacity: "1",
                  d: "M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z",
                }
              ),
              children: n
                ? []
                : [
                    {
                      tag: "animate",
                      attributes: N(N({}, o), {}, { values: "1;0;0;0;0;1;" }),
                    },
                  ],
            }),
            n ||
              r.push({
                tag: "path",
                attributes: N(
                  N({}, a),
                  {},
                  {
                    opacity: "0",
                    d: "M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z",
                  }
                ),
                children: [
                  {
                    tag: "animate",
                    attributes: N(N({}, o), {}, { values: "0;0;1;1;0;0;" }),
                  },
                ],
              }),
            { tag: "g", attributes: { class: "missing" }, children: r }
          );
        });
    },
  },
  x3 = {
    hooks: function () {
      return {
        parseNodeAttributes: function (n, r) {
          var a = r.getAttribute("data-fa-symbol"),
            i = a === null ? !1 : a === "" ? !0 : a;
          return (n.symbol = i), n;
        },
      };
    },
  },
  w3 = [bS, o3, l3, s3, u3, h3, g3, v3, y3, b3, x3];
NS(w3, { mixoutsTo: rt });
rt.noAuto;
rt.config;
rt.library;
rt.dom;
var Ec = rt.parse;
rt.findIconDefinition;
rt.toHtml;
var S3 = rt.icon;
rt.layer;
rt.text;
rt.counter;
var y1 = { exports: {} },
  k3 = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",
  E3 = k3,
  _3 = E3;
function b1() {}
function x1() {}
x1.resetWarningCache = b1;
var C3 = function () {
  function e(r, a, i, o, l, s) {
    if (s !== _3) {
      var u = new Error(
        "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
      );
      throw ((u.name = "Invariant Violation"), u);
    }
  }
  e.isRequired = e;
  function t() {
    return e;
  }
  var n = {
    array: e,
    bigint: e,
    bool: e,
    func: e,
    number: e,
    object: e,
    string: e,
    symbol: e,
    any: e,
    arrayOf: t,
    element: e,
    elementType: e,
    instanceOf: t,
    node: e,
    objectOf: t,
    oneOf: t,
    oneOfType: t,
    shape: t,
    exact: t,
    checkPropTypes: x1,
    resetWarningCache: b1,
  };
  return (n.PropTypes = n), n;
};
y1.exports = C3();
var $3 = y1.exports;
const C = Mc($3);
function Nh(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t &&
      (r = r.filter(function (a) {
        return Object.getOwnPropertyDescriptor(e, a).enumerable;
      })),
      n.push.apply(n, r);
  }
  return n;
}
function dn(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? Nh(Object(n), !0).forEach(function (r) {
          Vr(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
      ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
      : Nh(Object(n)).forEach(function (r) {
          Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
        });
  }
  return e;
}
function $l(e) {
  "@babel/helpers - typeof";
  return (
    ($l =
      typeof Symbol == "function" && typeof Symbol.iterator == "symbol"
        ? function (t) {
            return typeof t;
          }
        : function (t) {
            return t &&
              typeof Symbol == "function" &&
              t.constructor === Symbol &&
              t !== Symbol.prototype
              ? "symbol"
              : typeof t;
          }),
    $l(e)
  );
}
function Vr(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function O3(e, t) {
  if (e == null) return {};
  var n = {},
    r = Object.keys(e),
    a,
    i;
  for (i = 0; i < r.length; i++)
    (a = r[i]), !(t.indexOf(a) >= 0) && (n[a] = e[a]);
  return n;
}
function A3(e, t) {
  if (e == null) return {};
  var n = O3(e, t),
    r,
    a;
  if (Object.getOwnPropertySymbols) {
    var i = Object.getOwnPropertySymbols(e);
    for (a = 0; a < i.length; a++)
      (r = i[a]),
        !(t.indexOf(r) >= 0) &&
          Object.prototype.propertyIsEnumerable.call(e, r) &&
          (n[r] = e[r]);
  }
  return n;
}
function _c(e) {
  return T3(e) || P3(e) || j3(e) || R3();
}
function T3(e) {
  if (Array.isArray(e)) return Cc(e);
}
function P3(e) {
  if (
    (typeof Symbol < "u" && e[Symbol.iterator] != null) ||
    e["@@iterator"] != null
  )
    return Array.from(e);
}
function j3(e, t) {
  if (e) {
    if (typeof e == "string") return Cc(e, t);
    var n = Object.prototype.toString.call(e).slice(8, -1);
    if (
      (n === "Object" && e.constructor && (n = e.constructor.name),
      n === "Map" || n === "Set")
    )
      return Array.from(e);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
      return Cc(e, t);
  }
}
function Cc(e, t) {
  (t == null || t > e.length) && (t = e.length);
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
  return r;
}
function R3() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function N3(e) {
  var t,
    n = e.beat,
    r = e.fade,
    a = e.beatFade,
    i = e.bounce,
    o = e.shake,
    l = e.flash,
    s = e.spin,
    u = e.spinPulse,
    c = e.spinReverse,
    f = e.pulse,
    d = e.fixedWidth,
    m = e.inverse,
    x = e.border,
    w = e.listItem,
    E = e.flip,
    v = e.size,
    p = e.rotation,
    b = e.pull,
    _ =
      ((t = {
        "fa-beat": n,
        "fa-fade": r,
        "fa-beat-fade": a,
        "fa-bounce": i,
        "fa-shake": o,
        "fa-flash": l,
        "fa-spin": s,
        "fa-spin-reverse": c,
        "fa-spin-pulse": u,
        "fa-pulse": f,
        "fa-fw": d,
        "fa-inverse": m,
        "fa-border": x,
        "fa-li": w,
        "fa-flip": E === !0,
        "fa-flip-horizontal": E === "horizontal" || E === "both",
        "fa-flip-vertical": E === "vertical" || E === "both",
      }),
      Vr(t, "fa-".concat(v), typeof v < "u" && v !== null),
      Vr(t, "fa-rotate-".concat(p), typeof p < "u" && p !== null && p !== 0),
      Vr(t, "fa-pull-".concat(b), typeof b < "u" && b !== null),
      Vr(t, "fa-swap-opacity", e.swapOpacity),
      t);
  return Object.keys(_)
    .map(function ($) {
      return _[$] ? $ : null;
    })
    .filter(function ($) {
      return $;
    });
}
function F3(e) {
  return (e = e - 0), e === e;
}
function w1(e) {
  return F3(e)
    ? e
    : ((e = e.replace(/[\-_\s]+(.)?/g, function (t, n) {
        return n ? n.toUpperCase() : "";
      })),
      e.substr(0, 1).toLowerCase() + e.substr(1));
}
var I3 = ["style"];
function L3(e) {
  return e.charAt(0).toUpperCase() + e.slice(1);
}
function M3(e) {
  return e
    .split(";")
    .map(function (t) {
      return t.trim();
    })
    .filter(function (t) {
      return t;
    })
    .reduce(function (t, n) {
      var r = n.indexOf(":"),
        a = w1(n.slice(0, r)),
        i = n.slice(r + 1).trim();
      return a.startsWith("webkit") ? (t[L3(a)] = i) : (t[a] = i), t;
    }, {});
}
function S1(e, t) {
  var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
  if (typeof t == "string") return t;
  var r = (t.children || []).map(function (s) {
      return S1(e, s);
    }),
    a = Object.keys(t.attributes || {}).reduce(
      function (s, u) {
        var c = t.attributes[u];
        switch (u) {
          case "class":
            (s.attrs.className = c), delete t.attributes.class;
            break;
          case "style":
            s.attrs.style = M3(c);
            break;
          default:
            u.indexOf("aria-") === 0 || u.indexOf("data-") === 0
              ? (s.attrs[u.toLowerCase()] = c)
              : (s.attrs[w1(u)] = c);
        }
        return s;
      },
      { attrs: {} }
    ),
    i = n.style,
    o = i === void 0 ? {} : i,
    l = A3(n, I3);
  return (
    (a.attrs.style = dn(dn({}, a.attrs.style), o)),
    e.apply(void 0, [t.tag, dn(dn({}, a.attrs), l)].concat(_c(r)))
  );
}
var k1 = !1;
try {
  k1 = !0;
} catch {}
function z3() {
  if (!k1 && console && typeof console.error == "function") {
    var e;
    (e = console).error.apply(e, arguments);
  }
}
function Fh(e) {
  if (e && $l(e) === "object" && e.prefix && e.iconName && e.icon) return e;
  if (Ec.icon) return Ec.icon(e);
  if (e === null) return null;
  if (e && $l(e) === "object" && e.prefix && e.iconName) return e;
  if (Array.isArray(e) && e.length === 2)
    return { prefix: e[0], iconName: e[1] };
  if (typeof e == "string") return { prefix: "fas", iconName: e };
}
function ru(e, t) {
  return (Array.isArray(t) && t.length > 0) || (!Array.isArray(t) && t)
    ? Vr({}, e, t)
    : {};
}
var ga = h.forwardRef(function (e, t) {
  var n = e.icon,
    r = e.mask,
    a = e.symbol,
    i = e.className,
    o = e.title,
    l = e.titleId,
    s = e.maskId,
    u = Fh(n),
    c = ru("classes", [].concat(_c(N3(e)), _c(i.split(" ")))),
    f = ru(
      "transform",
      typeof e.transform == "string" ? Ec.transform(e.transform) : e.transform
    ),
    d = ru("mask", Fh(r)),
    m = S3(
      u,
      dn(
        dn(dn(dn({}, c), f), d),
        {},
        { symbol: a, title: o, titleId: l, maskId: s }
      )
    );
  if (!m) return z3("Could not find icon", u), null;
  var x = m.abstract,
    w = { ref: t };
  return (
    Object.keys(e).forEach(function (E) {
      ga.defaultProps.hasOwnProperty(E) || (w[E] = e[E]);
    }),
    D3(x[0], w)
  );
});
ga.displayName = "FontAwesomeIcon";
ga.propTypes = {
  beat: C.bool,
  border: C.bool,
  beatFade: C.bool,
  bounce: C.bool,
  className: C.string,
  fade: C.bool,
  flash: C.bool,
  mask: C.oneOfType([C.object, C.array, C.string]),
  maskId: C.string,
  fixedWidth: C.bool,
  inverse: C.bool,
  flip: C.oneOf([!0, !1, "horizontal", "vertical", "both"]),
  icon: C.oneOfType([C.object, C.array, C.string]),
  listItem: C.bool,
  pull: C.oneOf(["right", "left"]),
  pulse: C.bool,
  rotation: C.oneOf([0, 90, 180, 270]),
  shake: C.bool,
  size: C.oneOf([
    "2xs",
    "xs",
    "sm",
    "lg",
    "xl",
    "2xl",
    "1x",
    "2x",
    "3x",
    "4x",
    "5x",
    "6x",
    "7x",
    "8x",
    "9x",
    "10x",
  ]),
  spin: C.bool,
  spinPulse: C.bool,
  spinReverse: C.bool,
  symbol: C.oneOfType([C.bool, C.string]),
  title: C.string,
  titleId: C.string,
  transform: C.oneOfType([C.string, C.object]),
  swapOpacity: C.bool,
};
ga.defaultProps = {
  border: !1,
  className: "",
  mask: null,
  maskId: null,
  fixedWidth: !1,
  inverse: !1,
  flip: !1,
  icon: null,
  listItem: !1,
  pull: null,
  pulse: !1,
  rotation: null,
  size: null,
  spin: !1,
  spinPulse: !1,
  spinReverse: !1,
  beat: !1,
  fade: !1,
  beatFade: !1,
  bounce: !1,
  shake: !1,
  symbol: !1,
  title: "",
  titleId: null,
  transform: null,
  swapOpacity: !1,
};
var D3 = S1.bind(null, h.createElement);
const Qf = D.a`
  &,
  :visited {
    color: var(--accent-color);
  }
  :hover {
    text-decoration: underline;
  }
`,
  Ih = ({ user: e }) =>
    k.jsxs(Qf, {
      href: `https://www.reddit.com/user/${e}`,
      children: ["u/", e],
    }),
  B3 = ({ user: e }) =>
    k.jsx(Qf, { href: `https://github.com/${e}`, children: e }),
  H3 = [
    {
      version: "0.6.0",
      changes: [
        k.jsxs(k.Fragment, {
          children: [
            "Added catppuccin theme. Thanks to ",
            k.jsx(B3, { user: "AndyReckt" }),
            " for contributing!",
          ],
        }),
      ],
    },
    {
      version: "0.5.0",
      changes: [
        "Added custom search engines",
        k.jsxs(k.Fragment, {
          children: [
            "Added some new themes. Thanks to",
            " ",
            k.jsx(Ih, { user: "justanotherweirdteen" }),
            " for contributing!",
          ],
        }),
      ],
    },
    {
      version: "0.4.4",
      changes: [
        k.jsxs(k.Fragment, {
          children: [
            'Added new theme "Tartarus". Thanks to',
            " ",
            k.jsx(Ih, { user: "AllJavi" }),
            " for contributing! ",
            k.jsx("br", {}),
            "(",
            k.jsx(Qf, {
              href: "https://github.com/AllJavi/dotfiles",
              children: "fitting linux rice",
            }),
            ")",
          ],
        }),
      ],
    },
    {
      version: "0.4.3",
      changes: [
        "Added middle mouse click to Link Group to open all links in new tabs",
        "Added Dockerfile for easier local setup",
      ],
    },
    {
      version: "0.4.2",
      changes: ["Enhanced responsiveness for large screens", "Internal stuff"],
    },
    {
      version: "0.4.1",
      changes: [
        "Enhanced stability of the settings (I am pretty sure about it this time!!!)",
        "Fixed a bug with the link editor I introduced before",
      ],
    },
    {
      version: "0.4.0",
      changes: [
        "Added fast forward search",
        "Fixed a bug which prevented the link editor to load your data",
        "Enhanced responsiveness",
        "Added some more default data",
      ],
    },
    {
      version: "0.3.0",
      description:
        "This update was hell for me, fucking themes took me way too long and I needed to restructure all the internal design data.Also oof, had so many bugs caused by the not existing peresistence of my data. Hope you enjoy it!",
      changes: ["Added theme management"],
    },
    {
      version: "0.2.1",
      changes: ["Optimized keyboard control", "Restructured settings"],
    },
    {
      version: "0.2.0",
      changes: [
        "Added this changelog",
        "Added tabs in settings",
        "Added design preview",
        'Added "Discard Changes" button in settings',
        "Added project logo",
        "Changed structure of settings",
        "I think I enhanced stability overall a bit",
      ],
    },
    { version: "0.1.0", description: "The initial state of this project." },
  ],
  U3 = "" + new URL("logo-7f5198cd.png", import.meta.url).href,
  W3 = D.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-y: auto;
  > h1 {
    font-weight: 500;
  }
  > img {
    width: 180px;
    height: 180px;
  }
`,
  G3 = D.div`
  width: 600px;
  > p {
    margin-bottom: 10px;
  }
`,
  V3 = D.li`
  white-space: nowrap;
`,
  Y3 = ({ version: e, description: t, changes: n }) =>
    k.jsxs(G3, {
      children: [
        k.jsxs("h2", { children: ["v", e] }),
        t && k.jsx("p", { children: t }),
        n && k.jsx("p", { children: "Changes:" }),
        n == null ? void 0 : n.map((r, a) => k.jsx(V3, { children: r }, a)),
      ],
    }),
  K3 = () =>
    k.jsxs(W3, {
      children: [
        k.jsx("img", { src: U3, alt: "logo" }),
        k.jsx("h1", { children: "Changelog" }),
        H3.map((e) => k.jsx(Y3, { ...e }, e.version)),
      ],
    });
var lt = {},
  Vi = {},
  X3 = typeof no == "object" && no && no.Object === Object && no,
  E1 = X3,
  Q3 = E1,
  q3 = typeof self == "object" && self && self.Object === Object && self,
  Z3 = Q3 || q3 || Function("return this")(),
  Ft = Z3,
  J3 = Ft,
  e5 = J3.Symbol,
  Yi = e5,
  Lh = Yi,
  _1 = Object.prototype,
  t5 = _1.hasOwnProperty,
  n5 = _1.toString,
  La = Lh ? Lh.toStringTag : void 0;
function r5(e) {
  var t = t5.call(e, La),
    n = e[La];
  try {
    e[La] = void 0;
    var r = !0;
  } catch {}
  var a = n5.call(e);
  return r && (t ? (e[La] = n) : delete e[La]), a;
}
var a5 = r5,
  i5 = Object.prototype,
  o5 = i5.toString;
function l5(e) {
  return o5.call(e);
}
var s5 = l5,
  Mh = Yi,
  u5 = a5,
  c5 = s5,
  f5 = "[object Null]",
  d5 = "[object Undefined]",
  zh = Mh ? Mh.toStringTag : void 0;
function p5(e) {
  return e == null
    ? e === void 0
      ? d5
      : f5
    : zh && zh in Object(e)
    ? u5(e)
    : c5(e);
}
var ir = p5,
  h5 = Array.isArray,
  kt = h5;
function g5(e) {
  return e != null && typeof e == "object";
}
var en = g5,
  v5 = ir,
  m5 = kt,
  y5 = en,
  b5 = "[object String]";
function x5(e) {
  return typeof e == "string" || (!m5(e) && y5(e) && v5(e) == b5);
}
var w5 = x5;
function S5(e) {
  return function (t, n, r) {
    for (var a = -1, i = Object(t), o = r(t), l = o.length; l--; ) {
      var s = o[e ? l : ++a];
      if (n(i[s], s, i) === !1) break;
    }
    return t;
  };
}
var k5 = S5,
  E5 = k5,
  _5 = E5(),
  C5 = _5;
function $5(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var O5 = $5,
  A5 = ir,
  T5 = en,
  P5 = "[object Arguments]";
function j5(e) {
  return T5(e) && A5(e) == P5;
}
var R5 = j5,
  Dh = R5,
  N5 = en,
  C1 = Object.prototype,
  F5 = C1.hasOwnProperty,
  I5 = C1.propertyIsEnumerable,
  L5 = Dh(
    (function () {
      return arguments;
    })()
  )
    ? Dh
    : function (e) {
        return N5(e) && F5.call(e, "callee") && !I5.call(e, "callee");
      },
  $1 = L5,
  Ol = { exports: {} };
function M5() {
  return !1;
}
var z5 = M5;
Ol.exports;
(function (e, t) {
  var n = Ft,
    r = z5,
    a = t && !t.nodeType && t,
    i = a && !0 && e && !e.nodeType && e,
    o = i && i.exports === a,
    l = o ? n.Buffer : void 0,
    s = l ? l.isBuffer : void 0,
    u = s || r;
  e.exports = u;
})(Ol, Ol.exports);
var qf = Ol.exports,
  D5 = 9007199254740991,
  B5 = /^(?:0|[1-9]\d*)$/;
function H5(e, t) {
  var n = typeof e;
  return (
    (t = t ?? D5),
    !!t &&
      (n == "number" || (n != "symbol" && B5.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var O1 = H5,
  U5 = 9007199254740991;
function W5(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= U5;
}
var Zf = W5,
  G5 = ir,
  V5 = Zf,
  Y5 = en,
  K5 = "[object Arguments]",
  X5 = "[object Array]",
  Q5 = "[object Boolean]",
  q5 = "[object Date]",
  Z5 = "[object Error]",
  J5 = "[object Function]",
  e4 = "[object Map]",
  t4 = "[object Number]",
  n4 = "[object Object]",
  r4 = "[object RegExp]",
  a4 = "[object Set]",
  i4 = "[object String]",
  o4 = "[object WeakMap]",
  l4 = "[object ArrayBuffer]",
  s4 = "[object DataView]",
  u4 = "[object Float32Array]",
  c4 = "[object Float64Array]",
  f4 = "[object Int8Array]",
  d4 = "[object Int16Array]",
  p4 = "[object Int32Array]",
  h4 = "[object Uint8Array]",
  g4 = "[object Uint8ClampedArray]",
  v4 = "[object Uint16Array]",
  m4 = "[object Uint32Array]",
  ae = {};
ae[u4] =
  ae[c4] =
  ae[f4] =
  ae[d4] =
  ae[p4] =
  ae[h4] =
  ae[g4] =
  ae[v4] =
  ae[m4] =
    !0;
ae[K5] =
  ae[X5] =
  ae[l4] =
  ae[Q5] =
  ae[s4] =
  ae[q5] =
  ae[Z5] =
  ae[J5] =
  ae[e4] =
  ae[t4] =
  ae[n4] =
  ae[r4] =
  ae[a4] =
  ae[i4] =
  ae[o4] =
    !1;
function y4(e) {
  return Y5(e) && V5(e.length) && !!ae[G5(e)];
}
var b4 = y4;
function x4(e) {
  return function (t) {
    return e(t);
  };
}
var Jf = x4,
  Al = { exports: {} };
Al.exports;
(function (e, t) {
  var n = E1,
    r = t && !t.nodeType && t,
    a = r && !0 && e && !e.nodeType && e,
    i = a && a.exports === r,
    o = i && n.process,
    l = (function () {
      try {
        var s = a && a.require && a.require("util").types;
        return s || (o && o.binding && o.binding("util"));
      } catch {}
    })();
  e.exports = l;
})(Al, Al.exports);
var ed = Al.exports,
  w4 = b4,
  S4 = Jf,
  Bh = ed,
  Hh = Bh && Bh.isTypedArray,
  k4 = Hh ? S4(Hh) : w4,
  A1 = k4,
  E4 = O5,
  _4 = $1,
  C4 = kt,
  $4 = qf,
  O4 = O1,
  A4 = A1,
  T4 = Object.prototype,
  P4 = T4.hasOwnProperty;
function j4(e, t) {
  var n = C4(e),
    r = !n && _4(e),
    a = !n && !r && $4(e),
    i = !n && !r && !a && A4(e),
    o = n || r || a || i,
    l = o ? E4(e.length, String) : [],
    s = l.length;
  for (var u in e)
    (t || P4.call(e, u)) &&
      !(
        o &&
        (u == "length" ||
          (a && (u == "offset" || u == "parent")) ||
          (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          O4(u, s))
      ) &&
      l.push(u);
  return l;
}
var T1 = j4,
  R4 = Object.prototype;
function N4(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || R4;
  return e === n;
}
var td = N4;
function F4(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var P1 = F4,
  I4 = P1,
  L4 = I4(Object.keys, Object),
  M4 = L4,
  z4 = td,
  D4 = M4,
  B4 = Object.prototype,
  H4 = B4.hasOwnProperty;
function U4(e) {
  if (!z4(e)) return D4(e);
  var t = [];
  for (var n in Object(e)) H4.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
var W4 = U4;
function G4(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var va = G4,
  V4 = ir,
  Y4 = va,
  K4 = "[object AsyncFunction]",
  X4 = "[object Function]",
  Q4 = "[object GeneratorFunction]",
  q4 = "[object Proxy]";
function Z4(e) {
  if (!Y4(e)) return !1;
  var t = V4(e);
  return t == X4 || t == Q4 || t == K4 || t == q4;
}
var j1 = Z4,
  J4 = j1,
  ek = Zf;
function tk(e) {
  return e != null && ek(e.length) && !J4(e);
}
var us = tk,
  nk = T1,
  rk = W4,
  ak = us;
function ik(e) {
  return ak(e) ? nk(e) : rk(e);
}
var Ki = ik,
  ok = C5,
  lk = Ki;
function sk(e, t) {
  return e && ok(e, t, lk);
}
var R1 = sk;
function uk(e) {
  return e;
}
var N1 = uk,
  ck = N1;
function fk(e) {
  return typeof e == "function" ? e : ck;
}
var dk = fk,
  pk = R1,
  hk = dk;
function gk(e, t) {
  return e && pk(e, hk(t));
}
var nd = gk,
  vk = P1,
  mk = vk(Object.getPrototypeOf, Object),
  rd = mk,
  yk = ir,
  bk = rd,
  xk = en,
  wk = "[object Object]",
  Sk = Function.prototype,
  kk = Object.prototype,
  F1 = Sk.toString,
  Ek = kk.hasOwnProperty,
  _k = F1.call(Object);
function Ck(e) {
  if (!xk(e) || yk(e) != wk) return !1;
  var t = bk(e);
  if (t === null) return !0;
  var n = Ek.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && F1.call(n) == _k;
}
var $k = Ck;
function Ok(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var I1 = Ok;
function Ak() {
  (this.__data__ = []), (this.size = 0);
}
var Tk = Ak;
function Pk(e, t) {
  return e === t || (e !== e && t !== t);
}
var ad = Pk,
  jk = ad;
function Rk(e, t) {
  for (var n = e.length; n--; ) if (jk(e[n][0], t)) return n;
  return -1;
}
var cs = Rk,
  Nk = cs,
  Fk = Array.prototype,
  Ik = Fk.splice;
function Lk(e) {
  var t = this.__data__,
    n = Nk(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : Ik.call(t, n, 1), --this.size, !0;
}
var Mk = Lk,
  zk = cs;
function Dk(e) {
  var t = this.__data__,
    n = zk(t, e);
  return n < 0 ? void 0 : t[n][1];
}
var Bk = Dk,
  Hk = cs;
function Uk(e) {
  return Hk(this.__data__, e) > -1;
}
var Wk = Uk,
  Gk = cs;
function Vk(e, t) {
  var n = this.__data__,
    r = Gk(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
var Yk = Vk,
  Kk = Tk,
  Xk = Mk,
  Qk = Bk,
  qk = Wk,
  Zk = Yk;
function ma(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ma.prototype.clear = Kk;
ma.prototype.delete = Xk;
ma.prototype.get = Qk;
ma.prototype.has = qk;
ma.prototype.set = Zk;
var fs = ma,
  Jk = fs;
function eE() {
  (this.__data__ = new Jk()), (this.size = 0);
}
var tE = eE;
function nE(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
var rE = nE;
function aE(e) {
  return this.__data__.get(e);
}
var iE = aE;
function oE(e) {
  return this.__data__.has(e);
}
var lE = oE,
  sE = Ft,
  uE = sE["__core-js_shared__"],
  cE = uE,
  au = cE,
  Uh = (function () {
    var e = /[^.]+$/.exec((au && au.keys && au.keys.IE_PROTO) || "");
    return e ? "Symbol(src)_1." + e : "";
  })();
function fE(e) {
  return !!Uh && Uh in e;
}
var dE = fE,
  pE = Function.prototype,
  hE = pE.toString;
function gE(e) {
  if (e != null) {
    try {
      return hE.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var L1 = gE,
  vE = j1,
  mE = dE,
  yE = va,
  bE = L1,
  xE = /[\\^$.*+?()[\]{}|]/g,
  wE = /^\[object .+?Constructor\]$/,
  SE = Function.prototype,
  kE = Object.prototype,
  EE = SE.toString,
  _E = kE.hasOwnProperty,
  CE = RegExp(
    "^" +
      EE.call(_E)
        .replace(xE, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function $E(e) {
  if (!yE(e) || mE(e)) return !1;
  var t = vE(e) ? CE : wE;
  return t.test(bE(e));
}
var OE = $E;
function AE(e, t) {
  return e == null ? void 0 : e[t];
}
var TE = AE,
  PE = OE,
  jE = TE;
function RE(e, t) {
  var n = jE(e, t);
  return PE(n) ? n : void 0;
}
var or = RE,
  NE = or,
  FE = Ft,
  IE = NE(FE, "Map"),
  id = IE,
  LE = or,
  ME = LE(Object, "create"),
  ds = ME,
  Wh = ds;
function zE() {
  (this.__data__ = Wh ? Wh(null) : {}), (this.size = 0);
}
var DE = zE;
function BE(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var HE = BE,
  UE = ds,
  WE = "__lodash_hash_undefined__",
  GE = Object.prototype,
  VE = GE.hasOwnProperty;
function YE(e) {
  var t = this.__data__;
  if (UE) {
    var n = t[e];
    return n === WE ? void 0 : n;
  }
  return VE.call(t, e) ? t[e] : void 0;
}
var KE = YE,
  XE = ds,
  QE = Object.prototype,
  qE = QE.hasOwnProperty;
function ZE(e) {
  var t = this.__data__;
  return XE ? t[e] !== void 0 : qE.call(t, e);
}
var JE = ZE,
  e_ = ds,
  t_ = "__lodash_hash_undefined__";
function n_(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = e_ && t === void 0 ? t_ : t),
    this
  );
}
var r_ = n_,
  a_ = DE,
  i_ = HE,
  o_ = KE,
  l_ = JE,
  s_ = r_;
function ya(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ya.prototype.clear = a_;
ya.prototype.delete = i_;
ya.prototype.get = o_;
ya.prototype.has = l_;
ya.prototype.set = s_;
var u_ = ya,
  Gh = u_,
  c_ = fs,
  f_ = id;
function d_() {
  (this.size = 0),
    (this.__data__ = {
      hash: new Gh(),
      map: new (f_ || c_)(),
      string: new Gh(),
    });
}
var p_ = d_;
function h_(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
var g_ = h_,
  v_ = g_;
function m_(e, t) {
  var n = e.__data__;
  return v_(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
var ps = m_,
  y_ = ps;
function b_(e) {
  var t = y_(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
var x_ = b_,
  w_ = ps;
function S_(e) {
  return w_(this, e).get(e);
}
var k_ = S_,
  E_ = ps;
function __(e) {
  return E_(this, e).has(e);
}
var C_ = __,
  $_ = ps;
function O_(e, t) {
  var n = $_(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
var A_ = O_,
  T_ = p_,
  P_ = x_,
  j_ = k_,
  R_ = C_,
  N_ = A_;
function ba(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
ba.prototype.clear = T_;
ba.prototype.delete = P_;
ba.prototype.get = j_;
ba.prototype.has = R_;
ba.prototype.set = N_;
var od = ba,
  F_ = fs,
  I_ = id,
  L_ = od,
  M_ = 200;
function z_(e, t) {
  var n = this.__data__;
  if (n instanceof F_) {
    var r = n.__data__;
    if (!I_ || r.length < M_ - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new L_(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
var D_ = z_,
  B_ = fs,
  H_ = tE,
  U_ = rE,
  W_ = iE,
  G_ = lE,
  V_ = D_;
function xa(e) {
  var t = (this.__data__ = new B_(e));
  this.size = t.size;
}
xa.prototype.clear = H_;
xa.prototype.delete = U_;
xa.prototype.get = W_;
xa.prototype.has = G_;
xa.prototype.set = V_;
var ld = xa,
  Y_ = "__lodash_hash_undefined__";
function K_(e) {
  return this.__data__.set(e, Y_), this;
}
var X_ = K_;
function Q_(e) {
  return this.__data__.has(e);
}
var q_ = Q_,
  Z_ = od,
  J_ = X_,
  eC = q_;
function Tl(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new Z_(); ++t < n; ) this.add(e[t]);
}
Tl.prototype.add = Tl.prototype.push = J_;
Tl.prototype.has = eC;
var tC = Tl;
function nC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
var rC = nC;
function aC(e, t) {
  return e.has(t);
}
var iC = aC,
  oC = tC,
  lC = rC,
  sC = iC,
  uC = 1,
  cC = 2;
function fC(e, t, n, r, a, i) {
  var o = n & uC,
    l = e.length,
    s = t.length;
  if (l != s && !(o && s > l)) return !1;
  var u = i.get(e),
    c = i.get(t);
  if (u && c) return u == t && c == e;
  var f = -1,
    d = !0,
    m = n & cC ? new oC() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var x = e[f],
      w = t[f];
    if (r) var E = o ? r(w, x, f, t, e, i) : r(x, w, f, e, t, i);
    if (E !== void 0) {
      if (E) continue;
      d = !1;
      break;
    }
    if (m) {
      if (
        !lC(t, function (v, p) {
          if (!sC(m, p) && (x === v || a(x, v, n, r, i))) return m.push(p);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(x === w || a(x, w, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
var M1 = fC,
  dC = Ft,
  pC = dC.Uint8Array,
  z1 = pC;
function hC(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, a) {
      n[++t] = [a, r];
    }),
    n
  );
}
var gC = hC;
function vC(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var mC = vC,
  Vh = Yi,
  Yh = z1,
  yC = ad,
  bC = M1,
  xC = gC,
  wC = mC,
  SC = 1,
  kC = 2,
  EC = "[object Boolean]",
  _C = "[object Date]",
  CC = "[object Error]",
  $C = "[object Map]",
  OC = "[object Number]",
  AC = "[object RegExp]",
  TC = "[object Set]",
  PC = "[object String]",
  jC = "[object Symbol]",
  RC = "[object ArrayBuffer]",
  NC = "[object DataView]",
  Kh = Vh ? Vh.prototype : void 0,
  iu = Kh ? Kh.valueOf : void 0;
function FC(e, t, n, r, a, i, o) {
  switch (n) {
    case NC:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case RC:
      return !(e.byteLength != t.byteLength || !i(new Yh(e), new Yh(t)));
    case EC:
    case _C:
    case OC:
      return yC(+e, +t);
    case CC:
      return e.name == t.name && e.message == t.message;
    case AC:
    case PC:
      return e == t + "";
    case $C:
      var l = xC;
    case TC:
      var s = r & SC;
      if ((l || (l = wC), e.size != t.size && !s)) return !1;
      var u = o.get(e);
      if (u) return u == t;
      (r |= kC), o.set(e, t);
      var c = bC(l(e), l(t), r, a, i, o);
      return o.delete(e), c;
    case jC:
      if (iu) return iu.call(e) == iu.call(t);
  }
  return !1;
}
var IC = FC;
function LC(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
  return e;
}
var D1 = LC,
  MC = D1,
  zC = kt;
function DC(e, t, n) {
  var r = t(e);
  return zC(e) ? r : MC(r, n(e));
}
var B1 = DC;
function BC(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (i[a++] = o);
  }
  return i;
}
var HC = BC;
function UC() {
  return [];
}
var H1 = UC,
  WC = HC,
  GC = H1,
  VC = Object.prototype,
  YC = VC.propertyIsEnumerable,
  Xh = Object.getOwnPropertySymbols,
  KC = Xh
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            WC(Xh(e), function (t) {
              return YC.call(e, t);
            }));
      }
    : GC,
  sd = KC,
  XC = B1,
  QC = sd,
  qC = Ki;
function ZC(e) {
  return XC(e, qC, QC);
}
var U1 = ZC,
  Qh = U1,
  JC = 1,
  e$ = Object.prototype,
  t$ = e$.hasOwnProperty;
function n$(e, t, n, r, a, i) {
  var o = n & JC,
    l = Qh(e),
    s = l.length,
    u = Qh(t),
    c = u.length;
  if (s != c && !o) return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(o ? d in t : t$.call(t, d))) return !1;
  }
  var m = i.get(e),
    x = i.get(t);
  if (m && x) return m == t && x == e;
  var w = !0;
  i.set(e, t), i.set(t, e);
  for (var E = o; ++f < s; ) {
    d = l[f];
    var v = e[d],
      p = t[d];
    if (r) var b = o ? r(p, v, d, t, e, i) : r(v, p, d, e, t, i);
    if (!(b === void 0 ? v === p || a(v, p, n, r, i) : b)) {
      w = !1;
      break;
    }
    E || (E = d == "constructor");
  }
  if (w && !E) {
    var _ = e.constructor,
      $ = t.constructor;
    _ != $ &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof _ == "function" &&
        _ instanceof _ &&
        typeof $ == "function" &&
        $ instanceof $
      ) &&
      (w = !1);
  }
  return i.delete(e), i.delete(t), w;
}
var r$ = n$,
  a$ = or,
  i$ = Ft,
  o$ = a$(i$, "DataView"),
  l$ = o$,
  s$ = or,
  u$ = Ft,
  c$ = s$(u$, "Promise"),
  f$ = c$,
  d$ = or,
  p$ = Ft,
  h$ = d$(p$, "Set"),
  g$ = h$,
  v$ = or,
  m$ = Ft,
  y$ = v$(m$, "WeakMap"),
  b$ = y$,
  $c = l$,
  Oc = id,
  Ac = f$,
  Tc = g$,
  Pc = b$,
  W1 = ir,
  wa = L1,
  qh = "[object Map]",
  x$ = "[object Object]",
  Zh = "[object Promise]",
  Jh = "[object Set]",
  e0 = "[object WeakMap]",
  t0 = "[object DataView]",
  w$ = wa($c),
  S$ = wa(Oc),
  k$ = wa(Ac),
  E$ = wa(Tc),
  _$ = wa(Pc),
  zn = W1;
(($c && zn(new $c(new ArrayBuffer(1))) != t0) ||
  (Oc && zn(new Oc()) != qh) ||
  (Ac && zn(Ac.resolve()) != Zh) ||
  (Tc && zn(new Tc()) != Jh) ||
  (Pc && zn(new Pc()) != e0)) &&
  (zn = function (e) {
    var t = W1(e),
      n = t == x$ ? e.constructor : void 0,
      r = n ? wa(n) : "";
    if (r)
      switch (r) {
        case w$:
          return t0;
        case S$:
          return qh;
        case k$:
          return Zh;
        case E$:
          return Jh;
        case _$:
          return e0;
      }
    return t;
  });
var hs = zn,
  ou = ld,
  C$ = M1,
  $$ = IC,
  O$ = r$,
  n0 = hs,
  r0 = kt,
  a0 = qf,
  A$ = A1,
  T$ = 1,
  i0 = "[object Arguments]",
  o0 = "[object Array]",
  Po = "[object Object]",
  P$ = Object.prototype,
  l0 = P$.hasOwnProperty;
function j$(e, t, n, r, a, i) {
  var o = r0(e),
    l = r0(t),
    s = o ? o0 : n0(e),
    u = l ? o0 : n0(t);
  (s = s == i0 ? Po : s), (u = u == i0 ? Po : u);
  var c = s == Po,
    f = u == Po,
    d = s == u;
  if (d && a0(e)) {
    if (!a0(t)) return !1;
    (o = !0), (c = !1);
  }
  if (d && !c)
    return (
      i || (i = new ou()),
      o || A$(e) ? C$(e, t, n, r, a, i) : $$(e, t, s, n, r, a, i)
    );
  if (!(n & T$)) {
    var m = c && l0.call(e, "__wrapped__"),
      x = f && l0.call(t, "__wrapped__");
    if (m || x) {
      var w = m ? e.value() : e,
        E = x ? t.value() : t;
      return i || (i = new ou()), a(w, E, n, r, i);
    }
  }
  return d ? (i || (i = new ou()), O$(e, t, n, r, a, i)) : !1;
}
var R$ = j$,
  N$ = R$,
  s0 = en;
function G1(e, t, n, r, a) {
  return e === t
    ? !0
    : e == null || t == null || (!s0(e) && !s0(t))
    ? e !== e && t !== t
    : N$(e, t, n, r, G1, a);
}
var V1 = G1,
  F$ = ld,
  I$ = V1,
  L$ = 1,
  M$ = 2;
function z$(e, t, n, r) {
  var a = n.length,
    i = a,
    o = !r;
  if (e == null) return !i;
  for (e = Object(e); a--; ) {
    var l = n[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  for (; ++a < i; ) {
    l = n[a];
    var s = l[0],
      u = e[s],
      c = l[1];
    if (o && l[2]) {
      if (u === void 0 && !(s in e)) return !1;
    } else {
      var f = new F$();
      if (r) var d = r(u, c, s, e, t, f);
      if (!(d === void 0 ? I$(c, u, L$ | M$, r, f) : d)) return !1;
    }
  }
  return !0;
}
var D$ = z$,
  B$ = va;
function H$(e) {
  return e === e && !B$(e);
}
var Y1 = H$,
  U$ = Y1,
  W$ = Ki;
function G$(e) {
  for (var t = W$(e), n = t.length; n--; ) {
    var r = t[n],
      a = e[r];
    t[n] = [r, a, U$(a)];
  }
  return t;
}
var V$ = G$;
function Y$(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
var K1 = Y$,
  K$ = D$,
  X$ = V$,
  Q$ = K1;
function q$(e) {
  var t = X$(e);
  return t.length == 1 && t[0][2]
    ? Q$(t[0][0], t[0][1])
    : function (n) {
        return n === e || K$(n, e, t);
      };
}
var Z$ = q$,
  J$ = ir,
  e6 = en,
  t6 = "[object Symbol]";
function n6(e) {
  return typeof e == "symbol" || (e6(e) && J$(e) == t6);
}
var ud = n6,
  r6 = kt,
  a6 = ud,
  i6 = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  o6 = /^\w*$/;
function l6(e, t) {
  if (r6(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || a6(e)
    ? !0
    : o6.test(e) || !i6.test(e) || (t != null && e in Object(t));
}
var cd = l6,
  X1 = od,
  s6 = "Expected a function";
function fd(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(s6);
  var n = function () {
    var r = arguments,
      a = t ? t.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(a)) return i.get(a);
    var o = e.apply(this, r);
    return (n.cache = i.set(a, o) || i), o;
  };
  return (n.cache = new (fd.Cache || X1)()), n;
}
fd.Cache = X1;
var u6 = fd,
  c6 = u6,
  f6 = 500;
function d6(e) {
  var t = c6(e, function (r) {
      return n.size === f6 && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var p6 = d6,
  h6 = p6,
  g6 =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  v6 = /\\(\\)?/g,
  m6 = h6(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(g6, function (n, r, a, i) {
        t.push(a ? i.replace(v6, "$1") : r || n);
      }),
      t
    );
  }),
  y6 = m6,
  u0 = Yi,
  b6 = I1,
  x6 = kt,
  w6 = ud,
  S6 = 1 / 0,
  c0 = u0 ? u0.prototype : void 0,
  f0 = c0 ? c0.toString : void 0;
function Q1(e) {
  if (typeof e == "string") return e;
  if (x6(e)) return b6(e, Q1) + "";
  if (w6(e)) return f0 ? f0.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -S6 ? "-0" : t;
}
var k6 = Q1,
  E6 = k6;
function _6(e) {
  return e == null ? "" : E6(e);
}
var C6 = _6,
  $6 = kt,
  O6 = cd,
  A6 = y6,
  T6 = C6;
function P6(e, t) {
  return $6(e) ? e : O6(e, t) ? [e] : A6(T6(e));
}
var q1 = P6,
  j6 = ud,
  R6 = 1 / 0;
function N6(e) {
  if (typeof e == "string" || j6(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -R6 ? "-0" : t;
}
var gs = N6,
  F6 = q1,
  I6 = gs;
function L6(e, t) {
  t = F6(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[I6(t[n++])];
  return n && n == r ? e : void 0;
}
var Z1 = L6,
  M6 = Z1;
function z6(e, t, n) {
  var r = e == null ? void 0 : M6(e, t);
  return r === void 0 ? n : r;
}
var D6 = z6;
function B6(e, t) {
  return e != null && t in Object(e);
}
var H6 = B6,
  U6 = q1,
  W6 = $1,
  G6 = kt,
  V6 = O1,
  Y6 = Zf,
  K6 = gs;
function X6(e, t, n) {
  t = U6(t, e);
  for (var r = -1, a = t.length, i = !1; ++r < a; ) {
    var o = K6(t[r]);
    if (!(i = e != null && n(e, o))) break;
    e = e[o];
  }
  return i || ++r != a
    ? i
    : ((a = e == null ? 0 : e.length),
      !!a && Y6(a) && V6(o, a) && (G6(e) || W6(e)));
}
var Q6 = X6,
  q6 = H6,
  Z6 = Q6;
function J6(e, t) {
  return e != null && Z6(e, t, q6);
}
var eO = J6,
  tO = V1,
  nO = D6,
  rO = eO,
  aO = cd,
  iO = Y1,
  oO = K1,
  lO = gs,
  sO = 1,
  uO = 2;
function cO(e, t) {
  return aO(e) && iO(t)
    ? oO(lO(e), t)
    : function (n) {
        var r = nO(n, e);
        return r === void 0 && r === t ? rO(n, e) : tO(t, r, sO | uO);
      };
}
var fO = cO;
function dO(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
var pO = dO,
  hO = Z1;
function gO(e) {
  return function (t) {
    return hO(t, e);
  };
}
var vO = gO,
  mO = pO,
  yO = vO,
  bO = cd,
  xO = gs;
function wO(e) {
  return bO(e) ? mO(xO(e)) : yO(e);
}
var SO = wO,
  kO = Z$,
  EO = fO,
  _O = N1,
  CO = kt,
  $O = SO;
function OO(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? _O
    : typeof e == "object"
    ? CO(e)
      ? EO(e[0], e[1])
      : kO(e)
    : $O(e);
}
var AO = OO,
  TO = us;
function PO(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!TO(n)) return e(n, r);
    for (
      var a = n.length, i = t ? a : -1, o = Object(n);
      (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

    );
    return n;
  };
}
var jO = PO,
  RO = R1,
  NO = jO,
  FO = NO(RO),
  IO = FO,
  LO = IO,
  MO = us;
function zO(e, t) {
  var n = -1,
    r = MO(e) ? Array(e.length) : [];
  return (
    LO(e, function (a, i, o) {
      r[++n] = t(a, i, o);
    }),
    r
  );
}
var DO = zO,
  BO = I1,
  HO = AO,
  UO = DO,
  WO = kt;
function GO(e, t) {
  var n = WO(e) ? BO : UO;
  return n(e, HO(t));
}
var VO = GO;
Object.defineProperty(Vi, "__esModule", { value: !0 });
Vi.flattenNames = void 0;
var YO = w5,
  KO = vs(YO),
  XO = nd,
  QO = vs(XO),
  qO = $k,
  ZO = vs(qO),
  JO = VO,
  e8 = vs(JO);
function vs(e) {
  return e && e.__esModule ? e : { default: e };
}
var t8 = (Vi.flattenNames = function e() {
  var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [],
    n = [];
  return (
    (0, e8.default)(t, function (r) {
      Array.isArray(r)
        ? e(r).map(function (a) {
            return n.push(a);
          })
        : (0, ZO.default)(r)
        ? (0, QO.default)(r, function (a, i) {
            a === !0 && n.push(i), n.push(i + "-" + a);
          })
        : (0, KO.default)(r) && n.push(r);
    }),
    n
  );
});
Vi.default = t8;
var Xi = {};
function n8(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var r8 = n8,
  a8 = or,
  i8 = (function () {
    try {
      var e = a8(Object, "defineProperty");
      return e({}, "", {}), e;
    } catch {}
  })(),
  o8 = i8,
  d0 = o8;
function l8(e, t, n) {
  t == "__proto__" && d0
    ? d0(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
var J1 = l8,
  s8 = J1,
  u8 = ad,
  c8 = Object.prototype,
  f8 = c8.hasOwnProperty;
function d8(e, t, n) {
  var r = e[t];
  (!(f8.call(e, t) && u8(r, n)) || (n === void 0 && !(t in e))) && s8(e, t, n);
}
var ey = d8,
  p8 = ey,
  h8 = J1;
function g8(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i],
      s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), a ? h8(n, l, s) : p8(n, l, s);
  }
  return n;
}
var ms = g8,
  v8 = ms,
  m8 = Ki;
function y8(e, t) {
  return e && v8(t, m8(t), e);
}
var b8 = y8;
function x8(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var w8 = x8,
  S8 = va,
  k8 = td,
  E8 = w8,
  _8 = Object.prototype,
  C8 = _8.hasOwnProperty;
function $8(e) {
  if (!S8(e)) return E8(e);
  var t = k8(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !C8.call(e, r))) || n.push(r);
  return n;
}
var O8 = $8,
  A8 = T1,
  T8 = O8,
  P8 = us;
function j8(e) {
  return P8(e) ? A8(e, !0) : T8(e);
}
var dd = j8,
  R8 = ms,
  N8 = dd;
function F8(e, t) {
  return e && R8(t, N8(t), e);
}
var I8 = F8,
  Pl = { exports: {} };
Pl.exports;
(function (e, t) {
  var n = Ft,
    r = t && !t.nodeType && t,
    a = r && !0 && e && !e.nodeType && e,
    i = a && a.exports === r,
    o = i ? n.Buffer : void 0,
    l = o ? o.allocUnsafe : void 0;
  function s(u, c) {
    if (c) return u.slice();
    var f = u.length,
      d = l ? l(f) : new u.constructor(f);
    return u.copy(d), d;
  }
  e.exports = s;
})(Pl, Pl.exports);
var L8 = Pl.exports;
function M8(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var z8 = M8,
  D8 = ms,
  B8 = sd;
function H8(e, t) {
  return D8(e, B8(e), t);
}
var U8 = H8,
  W8 = D1,
  G8 = rd,
  V8 = sd,
  Y8 = H1,
  K8 = Object.getOwnPropertySymbols,
  X8 = K8
    ? function (e) {
        for (var t = []; e; ) W8(t, V8(e)), (e = G8(e));
        return t;
      }
    : Y8,
  ty = X8,
  Q8 = ms,
  q8 = ty;
function Z8(e, t) {
  return Q8(e, q8(e), t);
}
var J8 = Z8,
  eA = B1,
  tA = ty,
  nA = dd;
function rA(e) {
  return eA(e, nA, tA);
}
var aA = rA,
  iA = Object.prototype,
  oA = iA.hasOwnProperty;
function lA(e) {
  var t = e.length,
    n = new e.constructor(t);
  return (
    t &&
      typeof e[0] == "string" &&
      oA.call(e, "index") &&
      ((n.index = e.index), (n.input = e.input)),
    n
  );
}
var sA = lA,
  p0 = z1;
function uA(e) {
  var t = new e.constructor(e.byteLength);
  return new p0(t).set(new p0(e)), t;
}
var pd = uA,
  cA = pd;
function fA(e, t) {
  var n = t ? cA(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.byteLength);
}
var dA = fA,
  pA = /\w*$/;
function hA(e) {
  var t = new e.constructor(e.source, pA.exec(e));
  return (t.lastIndex = e.lastIndex), t;
}
var gA = hA,
  h0 = Yi,
  g0 = h0 ? h0.prototype : void 0,
  v0 = g0 ? g0.valueOf : void 0;
function vA(e) {
  return v0 ? Object(v0.call(e)) : {};
}
var mA = vA,
  yA = pd;
function bA(e, t) {
  var n = t ? yA(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
var xA = bA,
  wA = pd,
  SA = dA,
  kA = gA,
  EA = mA,
  _A = xA,
  CA = "[object Boolean]",
  $A = "[object Date]",
  OA = "[object Map]",
  AA = "[object Number]",
  TA = "[object RegExp]",
  PA = "[object Set]",
  jA = "[object String]",
  RA = "[object Symbol]",
  NA = "[object ArrayBuffer]",
  FA = "[object DataView]",
  IA = "[object Float32Array]",
  LA = "[object Float64Array]",
  MA = "[object Int8Array]",
  zA = "[object Int16Array]",
  DA = "[object Int32Array]",
  BA = "[object Uint8Array]",
  HA = "[object Uint8ClampedArray]",
  UA = "[object Uint16Array]",
  WA = "[object Uint32Array]";
function GA(e, t, n) {
  var r = e.constructor;
  switch (t) {
    case NA:
      return wA(e);
    case CA:
    case $A:
      return new r(+e);
    case FA:
      return SA(e, n);
    case IA:
    case LA:
    case MA:
    case zA:
    case DA:
    case BA:
    case HA:
    case UA:
    case WA:
      return _A(e, n);
    case OA:
      return new r();
    case AA:
    case jA:
      return new r(e);
    case TA:
      return kA(e);
    case PA:
      return new r();
    case RA:
      return EA(e);
  }
}
var VA = GA,
  YA = va,
  m0 = Object.create,
  KA = (function () {
    function e() {}
    return function (t) {
      if (!YA(t)) return {};
      if (m0) return m0(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })(),
  XA = KA,
  QA = XA,
  qA = rd,
  ZA = td;
function JA(e) {
  return typeof e.constructor == "function" && !ZA(e) ? QA(qA(e)) : {};
}
var eT = JA,
  tT = hs,
  nT = en,
  rT = "[object Map]";
function aT(e) {
  return nT(e) && tT(e) == rT;
}
var iT = aT,
  oT = iT,
  lT = Jf,
  y0 = ed,
  b0 = y0 && y0.isMap,
  sT = b0 ? lT(b0) : oT,
  uT = sT,
  cT = hs,
  fT = en,
  dT = "[object Set]";
function pT(e) {
  return fT(e) && cT(e) == dT;
}
var hT = pT,
  gT = hT,
  vT = Jf,
  x0 = ed,
  w0 = x0 && x0.isSet,
  mT = w0 ? vT(w0) : gT,
  yT = mT,
  bT = ld,
  xT = r8,
  wT = ey,
  ST = b8,
  kT = I8,
  ET = L8,
  _T = z8,
  CT = U8,
  $T = J8,
  OT = U1,
  AT = aA,
  TT = hs,
  PT = sA,
  jT = VA,
  RT = eT,
  NT = kt,
  FT = qf,
  IT = uT,
  LT = va,
  MT = yT,
  zT = Ki,
  DT = dd,
  BT = 1,
  HT = 2,
  UT = 4,
  ny = "[object Arguments]",
  WT = "[object Array]",
  GT = "[object Boolean]",
  VT = "[object Date]",
  YT = "[object Error]",
  ry = "[object Function]",
  KT = "[object GeneratorFunction]",
  XT = "[object Map]",
  QT = "[object Number]",
  ay = "[object Object]",
  qT = "[object RegExp]",
  ZT = "[object Set]",
  JT = "[object String]",
  eP = "[object Symbol]",
  tP = "[object WeakMap]",
  nP = "[object ArrayBuffer]",
  rP = "[object DataView]",
  aP = "[object Float32Array]",
  iP = "[object Float64Array]",
  oP = "[object Int8Array]",
  lP = "[object Int16Array]",
  sP = "[object Int32Array]",
  uP = "[object Uint8Array]",
  cP = "[object Uint8ClampedArray]",
  fP = "[object Uint16Array]",
  dP = "[object Uint32Array]",
  te = {};
te[ny] =
  te[WT] =
  te[nP] =
  te[rP] =
  te[GT] =
  te[VT] =
  te[aP] =
  te[iP] =
  te[oP] =
  te[lP] =
  te[sP] =
  te[XT] =
  te[QT] =
  te[ay] =
  te[qT] =
  te[ZT] =
  te[JT] =
  te[eP] =
  te[uP] =
  te[cP] =
  te[fP] =
  te[dP] =
    !0;
te[YT] = te[ry] = te[tP] = !1;
function Zo(e, t, n, r, a, i) {
  var o,
    l = t & BT,
    s = t & HT,
    u = t & UT;
  if ((n && (o = a ? n(e, r, a, i) : n(e)), o !== void 0)) return o;
  if (!LT(e)) return e;
  var c = NT(e);
  if (c) {
    if (((o = PT(e)), !l)) return _T(e, o);
  } else {
    var f = TT(e),
      d = f == ry || f == KT;
    if (FT(e)) return ET(e, l);
    if (f == ay || f == ny || (d && !a)) {
      if (((o = s || d ? {} : RT(e)), !l))
        return s ? $T(e, kT(o, e)) : CT(e, ST(o, e));
    } else {
      if (!te[f]) return a ? e : {};
      o = jT(e, f, l);
    }
  }
  i || (i = new bT());
  var m = i.get(e);
  if (m) return m;
  i.set(e, o),
    MT(e)
      ? e.forEach(function (E) {
          o.add(Zo(E, t, n, E, e, i));
        })
      : IT(e) &&
        e.forEach(function (E, v) {
          o.set(v, Zo(E, t, n, v, e, i));
        });
  var x = u ? (s ? AT : OT) : s ? DT : zT,
    w = c ? void 0 : x(e);
  return (
    xT(w || e, function (E, v) {
      w && ((v = E), (E = e[v])), wT(o, v, Zo(E, t, n, v, e, i));
    }),
    o
  );
}
var pP = Zo,
  hP = pP,
  gP = 1,
  vP = 4;
function mP(e) {
  return hP(e, gP | vP);
}
var yP = mP;
Object.defineProperty(Xi, "__esModule", { value: !0 });
Xi.mergeClasses = void 0;
var bP = nd,
  xP = iy(bP),
  wP = yP,
  SP = iy(wP),
  kP =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    };
function iy(e) {
  return e && e.__esModule ? e : { default: e };
}
var EP = (Xi.mergeClasses = function (t) {
  var n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [],
    r = (t.default && (0, SP.default)(t.default)) || {};
  return (
    n.map(function (a) {
      var i = t[a];
      return (
        i &&
          (0, xP.default)(i, function (o, l) {
            r[l] || (r[l] = {}), (r[l] = kP({}, r[l], i[l]));
          }),
        a
      );
    }),
    r
  );
});
Xi.default = EP;
var Qi = {};
Object.defineProperty(Qi, "__esModule", { value: !0 });
Qi.autoprefix = void 0;
var _P = nd,
  S0 = $P(_P),
  CP =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    };
function $P(e) {
  return e && e.__esModule ? e : { default: e };
}
var OP = {
    borderRadius: function (t) {
      return {
        msBorderRadius: t,
        MozBorderRadius: t,
        OBorderRadius: t,
        WebkitBorderRadius: t,
        borderRadius: t,
      };
    },
    boxShadow: function (t) {
      return {
        msBoxShadow: t,
        MozBoxShadow: t,
        OBoxShadow: t,
        WebkitBoxShadow: t,
        boxShadow: t,
      };
    },
    userSelect: function (t) {
      return {
        WebkitTouchCallout: t,
        KhtmlUserSelect: t,
        MozUserSelect: t,
        msUserSelect: t,
        WebkitUserSelect: t,
        userSelect: t,
      };
    },
    flex: function (t) {
      return {
        WebkitBoxFlex: t,
        MozBoxFlex: t,
        WebkitFlex: t,
        msFlex: t,
        flex: t,
      };
    },
    flexBasis: function (t) {
      return { WebkitFlexBasis: t, flexBasis: t };
    },
    justifyContent: function (t) {
      return { WebkitJustifyContent: t, justifyContent: t };
    },
    transition: function (t) {
      return {
        msTransition: t,
        MozTransition: t,
        OTransition: t,
        WebkitTransition: t,
        transition: t,
      };
    },
    transform: function (t) {
      return {
        msTransform: t,
        MozTransform: t,
        OTransform: t,
        WebkitTransform: t,
        transform: t,
      };
    },
    absolute: function (t) {
      var n = t && t.split(" ");
      return {
        position: "absolute",
        top: n && n[0],
        right: n && n[1],
        bottom: n && n[2],
        left: n && n[3],
      };
    },
    extend: function (t, n) {
      var r = n[t];
      return r || { extend: t };
    },
  },
  AP = (Qi.autoprefix = function (t) {
    var n = {};
    return (
      (0, S0.default)(t, function (r, a) {
        var i = {};
        (0, S0.default)(r, function (o, l) {
          var s = OP[l];
          s ? (i = CP({}, i, s(o))) : (i[l] = o);
        }),
          (n[a] = i);
      }),
      n
    );
  });
Qi.default = AP;
var qi = {};
Object.defineProperty(qi, "__esModule", { value: !0 });
qi.hover = void 0;
var TP =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  PP = B,
  lu = jP(PP);
function jP(e) {
  return e && e.__esModule ? e : { default: e };
}
function RP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function k0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function NP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var FP = (qi.hover = function (t) {
  var n =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return (function (r) {
    NP(a, r);
    function a() {
      var i, o, l, s;
      RP(this, a);
      for (var u = arguments.length, c = Array(u), f = 0; f < u; f++)
        c[f] = arguments[f];
      return (
        (s =
          ((o =
            ((l = k0(
              this,
              (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                i,
                [this].concat(c)
              )
            )),
            l)),
          (l.state = { hover: !1 }),
          (l.handleMouseOver = function () {
            return l.setState({ hover: !0 });
          }),
          (l.handleMouseOut = function () {
            return l.setState({ hover: !1 });
          }),
          (l.render = function () {
            return lu.default.createElement(
              n,
              { onMouseOver: l.handleMouseOver, onMouseOut: l.handleMouseOut },
              lu.default.createElement(t, TP({}, l.props, l.state))
            );
          }),
          o)),
        k0(l, s)
      );
    }
    return a;
  })(lu.default.Component);
});
qi.default = FP;
var Zi = {};
Object.defineProperty(Zi, "__esModule", { value: !0 });
Zi.active = void 0;
var IP =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  LP = B,
  su = MP(LP);
function MP(e) {
  return e && e.__esModule ? e : { default: e };
}
function zP(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function E0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function DP(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var BP = (Zi.active = function (t) {
  var n =
    arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
  return (function (r) {
    DP(a, r);
    function a() {
      var i, o, l, s;
      zP(this, a);
      for (var u = arguments.length, c = Array(u), f = 0; f < u; f++)
        c[f] = arguments[f];
      return (
        (s =
          ((o =
            ((l = E0(
              this,
              (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                i,
                [this].concat(c)
              )
            )),
            l)),
          (l.state = { active: !1 }),
          (l.handleMouseDown = function () {
            return l.setState({ active: !0 });
          }),
          (l.handleMouseUp = function () {
            return l.setState({ active: !1 });
          }),
          (l.render = function () {
            return su.default.createElement(
              n,
              { onMouseDown: l.handleMouseDown, onMouseUp: l.handleMouseUp },
              su.default.createElement(t, IP({}, l.props, l.state))
            );
          }),
          o)),
        E0(l, s)
      );
    }
    return a;
  })(su.default.Component);
});
Zi.default = BP;
var hd = {};
Object.defineProperty(hd, "__esModule", { value: !0 });
var HP = function (t, n) {
  var r = {},
    a = function (o) {
      var l =
        arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
      r[o] = l;
    };
  return (
    t === 0 && a("first-child"),
    t === n - 1 && a("last-child"),
    (t === 0 || t % 2 === 0) && a("even"),
    Math.abs(t % 2) === 1 && a("odd"),
    a("nth-child", t),
    r
  );
};
hd.default = HP;
Object.defineProperty(lt, "__esModule", { value: !0 });
lt.ReactCSS =
  lt.loop =
  lt.handleActive =
  gd =
  lt.handleHover =
  lt.hover =
    void 0;
var UP = Vi,
  WP = Sa(UP),
  GP = Xi,
  VP = Sa(GP),
  YP = Qi,
  KP = Sa(YP),
  XP = qi,
  oy = Sa(XP),
  QP = Zi,
  qP = Sa(QP),
  ZP = hd,
  JP = Sa(ZP);
function Sa(e) {
  return e && e.__esModule ? e : { default: e };
}
lt.hover = oy.default;
var gd = (lt.handleHover = oy.default);
lt.handleActive = qP.default;
lt.loop = JP.default;
var e7 = (lt.ReactCSS = function (t) {
    for (
      var n = arguments.length, r = Array(n > 1 ? n - 1 : 0), a = 1;
      a < n;
      a++
    )
      r[a - 1] = arguments[a];
    var i = (0, WP.default)(r),
      o = (0, VP.default)(t, i);
    return (0, KP.default)(o);
  }),
  H = (lt.default = e7),
  t7 = function (t, n, r, a, i) {
    var o = i.clientWidth,
      l = i.clientHeight,
      s = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
      u = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
      c = s - (i.getBoundingClientRect().left + window.pageXOffset),
      f = u - (i.getBoundingClientRect().top + window.pageYOffset);
    if (r === "vertical") {
      var d = void 0;
      if (
        (f < 0
          ? (d = 0)
          : f > l
          ? (d = 1)
          : (d = Math.round((f * 100) / l) / 100),
        n.a !== d)
      )
        return { h: n.h, s: n.s, l: n.l, a: d, source: "rgb" };
    } else {
      var m = void 0;
      if (
        (c < 0
          ? (m = 0)
          : c > o
          ? (m = 1)
          : (m = Math.round((c * 100) / o) / 100),
        a !== m)
      )
        return { h: n.h, s: n.s, l: n.l, a: m, source: "rgb" };
    }
    return null;
  },
  uu = {},
  n7 = function (t, n, r, a) {
    if (typeof document > "u" && !a) return null;
    var i = a ? new a() : document.createElement("canvas");
    (i.width = r * 2), (i.height = r * 2);
    var o = i.getContext("2d");
    return o
      ? ((o.fillStyle = t),
        o.fillRect(0, 0, i.width, i.height),
        (o.fillStyle = n),
        o.fillRect(0, 0, r, r),
        o.translate(r, r),
        o.fillRect(0, 0, r, r),
        i.toDataURL())
      : null;
  },
  r7 = function (t, n, r, a) {
    var i = t + "-" + n + "-" + r + (a ? "-server" : "");
    if (uu[i]) return uu[i];
    var o = n7(t, n, r, a);
    return (uu[i] = o), o;
  },
  _0 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  ka = function (t) {
    var n = t.white,
      r = t.grey,
      a = t.size,
      i = t.renderers,
      o = t.borderRadius,
      l = t.boxShadow,
      s = t.children,
      u = H({
        default: {
          grid: {
            borderRadius: o,
            boxShadow: l,
            absolute: "0px 0px 0px 0px",
            background: "url(" + r7(n, r, a, i.canvas) + ") center left",
          },
        },
      });
    return B.isValidElement(s)
      ? h.cloneElement(
          s,
          _0({}, s.props, { style: _0({}, s.props.style, u.grid) })
        )
      : h.createElement("div", { style: u.grid });
  };
ka.defaultProps = {
  size: 8,
  white: "transparent",
  grey: "rgba(0,0,0,.08)",
  renderers: {},
};
var a7 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  i7 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function o7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function C0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function l7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var vd = (function (e) {
    l7(t, e);
    function t() {
      var n, r, a, i;
      o7(this, t);
      for (var o = arguments.length, l = Array(o), s = 0; s < o; s++)
        l[s] = arguments[s];
      return (
        (i =
          ((r =
            ((a = C0(
              this,
              (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
                n,
                [this].concat(l)
              )
            )),
            a)),
          (a.handleChange = function (u) {
            var c = t7(
              u,
              a.props.hsl,
              a.props.direction,
              a.props.a,
              a.container
            );
            c &&
              typeof a.props.onChange == "function" &&
              a.props.onChange(c, u);
          }),
          (a.handleMouseDown = function (u) {
            a.handleChange(u),
              window.addEventListener("mousemove", a.handleChange),
              window.addEventListener("mouseup", a.handleMouseUp);
          }),
          (a.handleMouseUp = function () {
            a.unbindEventListeners();
          }),
          (a.unbindEventListeners = function () {
            window.removeEventListener("mousemove", a.handleChange),
              window.removeEventListener("mouseup", a.handleMouseUp);
          }),
          r)),
        C0(a, i)
      );
    }
    return (
      i7(t, [
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              a = this.props.rgb,
              i = H(
                {
                  default: {
                    alpha: {
                      absolute: "0px 0px 0px 0px",
                      borderRadius: this.props.radius,
                    },
                    checkboard: {
                      absolute: "0px 0px 0px 0px",
                      overflow: "hidden",
                      borderRadius: this.props.radius,
                    },
                    gradient: {
                      absolute: "0px 0px 0px 0px",
                      background:
                        "linear-gradient(to right, rgba(" +
                        a.r +
                        "," +
                        a.g +
                        "," +
                        a.b +
                        `, 0) 0%,
           rgba(` +
                        a.r +
                        "," +
                        a.g +
                        "," +
                        a.b +
                        ", 1) 100%)",
                      boxShadow: this.props.shadow,
                      borderRadius: this.props.radius,
                    },
                    container: {
                      position: "relative",
                      height: "100%",
                      margin: "0 3px",
                    },
                    pointer: { position: "absolute", left: a.a * 100 + "%" },
                    slider: {
                      width: "4px",
                      borderRadius: "1px",
                      height: "8px",
                      boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                      background: "#fff",
                      marginTop: "1px",
                      transform: "translateX(-2px)",
                    },
                  },
                  vertical: {
                    gradient: {
                      background:
                        "linear-gradient(to bottom, rgba(" +
                        a.r +
                        "," +
                        a.g +
                        "," +
                        a.b +
                        `, 0) 0%,
           rgba(` +
                        a.r +
                        "," +
                        a.g +
                        "," +
                        a.b +
                        ", 1) 100%)",
                    },
                    pointer: { left: 0, top: a.a * 100 + "%" },
                  },
                  overwrite: a7({}, this.props.style),
                },
                { vertical: this.props.direction === "vertical", overwrite: !0 }
              );
            return h.createElement(
              "div",
              { style: i.alpha },
              h.createElement(
                "div",
                { style: i.checkboard },
                h.createElement(ka, { renderers: this.props.renderers })
              ),
              h.createElement("div", { style: i.gradient }),
              h.createElement(
                "div",
                {
                  style: i.container,
                  ref: function (l) {
                    return (r.container = l);
                  },
                  onMouseDown: this.handleMouseDown,
                  onTouchMove: this.handleChange,
                  onTouchStart: this.handleChange,
                },
                h.createElement(
                  "div",
                  { style: i.pointer },
                  this.props.pointer
                    ? h.createElement(this.props.pointer, this.props)
                    : h.createElement("div", { style: i.slider })
                )
              )
            );
          },
        },
      ]),
      t
    );
  })(B.PureComponent || B.Component),
  s7 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function u7(e, t, n) {
  return (
    t in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  );
}
function c7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function f7(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function d7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var p7 = 1,
  ly = 38,
  h7 = 40,
  g7 = [ly, h7],
  v7 = function (t) {
    return g7.indexOf(t) > -1;
  },
  m7 = function (t) {
    return Number(String(t).replace(/%/g, ""));
  },
  y7 = 1,
  Y = (function (e) {
    d7(t, e);
    function t(n) {
      c7(this, t);
      var r = f7(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
      return (
        (r.handleBlur = function () {
          r.state.blurValue &&
            r.setState({ value: r.state.blurValue, blurValue: null });
        }),
        (r.handleChange = function (a) {
          r.setUpdatedValue(a.target.value, a);
        }),
        (r.handleKeyDown = function (a) {
          var i = m7(a.target.value);
          if (!isNaN(i) && v7(a.keyCode)) {
            var o = r.getArrowOffset(),
              l = a.keyCode === ly ? i + o : i - o;
            r.setUpdatedValue(l, a);
          }
        }),
        (r.handleDrag = function (a) {
          if (r.props.dragLabel) {
            var i = Math.round(r.props.value + a.movementX);
            i >= 0 &&
              i <= r.props.dragMax &&
              r.props.onChange &&
              r.props.onChange(r.getValueObjectWithLabel(i), a);
          }
        }),
        (r.handleMouseDown = function (a) {
          r.props.dragLabel &&
            (a.preventDefault(),
            r.handleDrag(a),
            window.addEventListener("mousemove", r.handleDrag),
            window.addEventListener("mouseup", r.handleMouseUp));
        }),
        (r.handleMouseUp = function () {
          r.unbindEventListeners();
        }),
        (r.unbindEventListeners = function () {
          window.removeEventListener("mousemove", r.handleDrag),
            window.removeEventListener("mouseup", r.handleMouseUp);
        }),
        (r.state = {
          value: String(n.value).toUpperCase(),
          blurValue: String(n.value).toUpperCase(),
        }),
        (r.inputId = "rc-editable-input-" + y7++),
        r
      );
    }
    return (
      s7(t, [
        {
          key: "componentDidUpdate",
          value: function (r, a) {
            this.props.value !== this.state.value &&
              (r.value !== this.props.value || a.value !== this.state.value) &&
              (this.input === document.activeElement
                ? this.setState({
                    blurValue: String(this.props.value).toUpperCase(),
                  })
                : this.setState({
                    value: String(this.props.value).toUpperCase(),
                    blurValue:
                      !this.state.blurValue &&
                      String(this.props.value).toUpperCase(),
                  }));
          },
        },
        {
          key: "componentWillUnmount",
          value: function () {
            this.unbindEventListeners();
          },
        },
        {
          key: "getValueObjectWithLabel",
          value: function (r) {
            return u7({}, this.props.label, r);
          },
        },
        {
          key: "getArrowOffset",
          value: function () {
            return this.props.arrowOffset || p7;
          },
        },
        {
          key: "setUpdatedValue",
          value: function (r, a) {
            var i = this.props.label ? this.getValueObjectWithLabel(r) : r;
            this.props.onChange && this.props.onChange(i, a),
              this.setState({ value: r });
          },
        },
        {
          key: "render",
          value: function () {
            var r = this,
              a = H(
                {
                  default: { wrap: { position: "relative" } },
                  "user-override": {
                    wrap:
                      this.props.style && this.props.style.wrap
                        ? this.props.style.wrap
                        : {},
                    input:
                      this.props.style && this.props.style.input
                        ? this.props.style.input
                        : {},
                    label:
                      this.props.style && this.props.style.label
                        ? this.props.style.label
                        : {},
                  },
                  "dragLabel-true": { label: { cursor: "ew-resize" } },
                },
                { "user-override": !0 },
                this.props
              );
            return h.createElement(
              "div",
              { style: a.wrap },
              h.createElement("input", {
                id: this.inputId,
                style: a.input,
                ref: function (o) {
                  return (r.input = o);
                },
                value: this.state.value,
                onKeyDown: this.handleKeyDown,
                onChange: this.handleChange,
                onBlur: this.handleBlur,
                placeholder: this.props.placeholder,
                spellCheck: "false",
              }),
              this.props.label && !this.props.hideLabel
                ? h.createElement(
                    "label",
                    {
                      htmlFor: this.inputId,
                      style: a.label,
                      onMouseDown: this.handleMouseDown,
                    },
                    this.props.label
                  )
                : null
            );
          },
        },
      ]),
      t
    );
  })(B.PureComponent || B.Component),
  b7 = function (t, n, r, a) {
    var i = a.clientWidth,
      o = a.clientHeight,
      l = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
      s = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
      u = l - (a.getBoundingClientRect().left + window.pageXOffset),
      c = s - (a.getBoundingClientRect().top + window.pageYOffset);
    if (n === "vertical") {
      var f = void 0;
      if (c < 0) f = 359;
      else if (c > o) f = 0;
      else {
        var d = -((c * 100) / o) + 100;
        f = (360 * d) / 100;
      }
      if (r.h !== f) return { h: f, s: r.s, l: r.l, a: r.a, source: "hsl" };
    } else {
      var m = void 0;
      if (u < 0) m = 0;
      else if (u > i) m = 359;
      else {
        var x = (u * 100) / i;
        m = (360 * x) / 100;
      }
      if (r.h !== m) return { h: m, s: r.s, l: r.l, a: r.a, source: "hsl" };
    }
    return null;
  },
  x7 = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function w7(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function $0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function S7(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ea = (function (e) {
  S7(t, e);
  function t() {
    var n, r, a, i;
    w7(this, t);
    for (var o = arguments.length, l = Array(o), s = 0; s < o; s++)
      l[s] = arguments[s];
    return (
      (i =
        ((r =
          ((a = $0(
            this,
            (n = t.__proto__ || Object.getPrototypeOf(t)).call.apply(
              n,
              [this].concat(l)
            )
          )),
          a)),
        (a.handleChange = function (u) {
          var c = b7(u, a.props.direction, a.props.hsl, a.container);
          c && typeof a.props.onChange == "function" && a.props.onChange(c, u);
        }),
        (a.handleMouseDown = function (u) {
          a.handleChange(u),
            window.addEventListener("mousemove", a.handleChange),
            window.addEventListener("mouseup", a.handleMouseUp);
        }),
        (a.handleMouseUp = function () {
          a.unbindEventListeners();
        }),
        r)),
      $0(a, i)
    );
  }
  return (
    x7(t, [
      {
        key: "componentWillUnmount",
        value: function () {
          this.unbindEventListeners();
        },
      },
      {
        key: "unbindEventListeners",
        value: function () {
          window.removeEventListener("mousemove", this.handleChange),
            window.removeEventListener("mouseup", this.handleMouseUp);
        },
      },
      {
        key: "render",
        value: function () {
          var r = this,
            a = this.props.direction,
            i = a === void 0 ? "horizontal" : a,
            o = H(
              {
                default: {
                  hue: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: this.props.radius,
                    boxShadow: this.props.shadow,
                  },
                  container: {
                    padding: "0 2px",
                    position: "relative",
                    height: "100%",
                    borderRadius: this.props.radius,
                  },
                  pointer: {
                    position: "absolute",
                    left: (this.props.hsl.h * 100) / 360 + "%",
                  },
                  slider: {
                    marginTop: "1px",
                    width: "4px",
                    borderRadius: "1px",
                    height: "8px",
                    boxShadow: "0 0 2px rgba(0, 0, 0, .6)",
                    background: "#fff",
                    transform: "translateX(-2px)",
                  },
                },
                vertical: {
                  pointer: {
                    left: "0px",
                    top: -((this.props.hsl.h * 100) / 360) + 100 + "%",
                  },
                },
              },
              { vertical: i === "vertical" }
            );
          return h.createElement(
            "div",
            { style: o.hue },
            h.createElement(
              "div",
              {
                className: "hue-" + i,
                style: o.container,
                ref: function (s) {
                  return (r.container = s);
                },
                onMouseDown: this.handleMouseDown,
                onTouchMove: this.handleChange,
                onTouchStart: this.handleChange,
              },
              h.createElement(
                "style",
                null,
                `
            .hue-horizontal {
              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0
                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to right, #f00 0%, #ff0
                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }

            .hue-vertical {
              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,
                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,
                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);
            }
          `
              ),
              h.createElement(
                "div",
                { style: o.pointer },
                this.props.pointer
                  ? h.createElement(this.props.pointer, this.props)
                  : h.createElement("div", { style: o.slider })
              )
            )
          );
        },
      },
    ]),
    t
  );
})(B.PureComponent || B.Component);
function k7() {
  (this.__data__ = []), (this.size = 0);
}
function Ji(e, t) {
  return e === t || (e !== e && t !== t);
}
function ys(e, t) {
  for (var n = e.length; n--; ) if (Ji(e[n][0], t)) return n;
  return -1;
}
var E7 = Array.prototype,
  _7 = E7.splice;
function C7(e) {
  var t = this.__data__,
    n = ys(t, e);
  if (n < 0) return !1;
  var r = t.length - 1;
  return n == r ? t.pop() : _7.call(t, n, 1), --this.size, !0;
}
function $7(e) {
  var t = this.__data__,
    n = ys(t, e);
  return n < 0 ? void 0 : t[n][1];
}
function O7(e) {
  return ys(this.__data__, e) > -1;
}
function A7(e, t) {
  var n = this.__data__,
    r = ys(n, e);
  return r < 0 ? (++this.size, n.push([e, t])) : (n[r][1] = t), this;
}
function tn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
tn.prototype.clear = k7;
tn.prototype.delete = C7;
tn.prototype.get = $7;
tn.prototype.has = O7;
tn.prototype.set = A7;
function T7() {
  (this.__data__ = new tn()), (this.size = 0);
}
function P7(e) {
  var t = this.__data__,
    n = t.delete(e);
  return (this.size = t.size), n;
}
function j7(e) {
  return this.__data__.get(e);
}
function R7(e) {
  return this.__data__.has(e);
}
var N7 =
  typeof global == "object" && global && global.Object === Object && global;
const sy = N7;
var F7 = typeof self == "object" && self && self.Object === Object && self,
  I7 = sy || F7 || Function("return this")();
const Et = I7;
var L7 = Et.Symbol;
const Cn = L7;
var uy = Object.prototype,
  M7 = uy.hasOwnProperty,
  z7 = uy.toString,
  Ma = Cn ? Cn.toStringTag : void 0;
function D7(e) {
  var t = M7.call(e, Ma),
    n = e[Ma];
  try {
    e[Ma] = void 0;
    var r = !0;
  } catch {}
  var a = z7.call(e);
  return r && (t ? (e[Ma] = n) : delete e[Ma]), a;
}
var B7 = Object.prototype,
  H7 = B7.toString;
function U7(e) {
  return H7.call(e);
}
var W7 = "[object Null]",
  G7 = "[object Undefined]",
  O0 = Cn ? Cn.toStringTag : void 0;
function lr(e) {
  return e == null
    ? e === void 0
      ? G7
      : W7
    : O0 && O0 in Object(e)
    ? D7(e)
    : U7(e);
}
function dt(e) {
  var t = typeof e;
  return e != null && (t == "object" || t == "function");
}
var V7 = "[object AsyncFunction]",
  Y7 = "[object Function]",
  K7 = "[object GeneratorFunction]",
  X7 = "[object Proxy]";
function md(e) {
  if (!dt(e)) return !1;
  var t = lr(e);
  return t == Y7 || t == K7 || t == V7 || t == X7;
}
var Q7 = Et["__core-js_shared__"];
const cu = Q7;
var A0 = (function () {
  var e = /[^.]+$/.exec((cu && cu.keys && cu.keys.IE_PROTO) || "");
  return e ? "Symbol(src)_1." + e : "";
})();
function q7(e) {
  return !!A0 && A0 in e;
}
var Z7 = Function.prototype,
  J7 = Z7.toString;
function sr(e) {
  if (e != null) {
    try {
      return J7.call(e);
    } catch {}
    try {
      return e + "";
    } catch {}
  }
  return "";
}
var e9 = /[\\^$.*+?()[\]{}|]/g,
  t9 = /^\[object .+?Constructor\]$/,
  n9 = Function.prototype,
  r9 = Object.prototype,
  a9 = n9.toString,
  i9 = r9.hasOwnProperty,
  o9 = RegExp(
    "^" +
      a9
        .call(i9)
        .replace(e9, "\\$&")
        .replace(
          /hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,
          "$1.*?"
        ) +
      "$"
  );
function l9(e) {
  if (!dt(e) || q7(e)) return !1;
  var t = md(e) ? o9 : t9;
  return t.test(sr(e));
}
function s9(e, t) {
  return e == null ? void 0 : e[t];
}
function ur(e, t) {
  var n = s9(e, t);
  return l9(n) ? n : void 0;
}
var u9 = ur(Et, "Map");
const Fi = u9;
var c9 = ur(Object, "create");
const Ii = c9;
function f9() {
  (this.__data__ = Ii ? Ii(null) : {}), (this.size = 0);
}
function d9(e) {
  var t = this.has(e) && delete this.__data__[e];
  return (this.size -= t ? 1 : 0), t;
}
var p9 = "__lodash_hash_undefined__",
  h9 = Object.prototype,
  g9 = h9.hasOwnProperty;
function v9(e) {
  var t = this.__data__;
  if (Ii) {
    var n = t[e];
    return n === p9 ? void 0 : n;
  }
  return g9.call(t, e) ? t[e] : void 0;
}
var m9 = Object.prototype,
  y9 = m9.hasOwnProperty;
function b9(e) {
  var t = this.__data__;
  return Ii ? t[e] !== void 0 : y9.call(t, e);
}
var x9 = "__lodash_hash_undefined__";
function w9(e, t) {
  var n = this.__data__;
  return (
    (this.size += this.has(e) ? 0 : 1),
    (n[e] = Ii && t === void 0 ? x9 : t),
    this
  );
}
function nr(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nr.prototype.clear = f9;
nr.prototype.delete = d9;
nr.prototype.get = v9;
nr.prototype.has = b9;
nr.prototype.set = w9;
function S9() {
  (this.size = 0),
    (this.__data__ = {
      hash: new nr(),
      map: new (Fi || tn)(),
      string: new nr(),
    });
}
function k9(e) {
  var t = typeof e;
  return t == "string" || t == "number" || t == "symbol" || t == "boolean"
    ? e !== "__proto__"
    : e === null;
}
function bs(e, t) {
  var n = e.__data__;
  return k9(t) ? n[typeof t == "string" ? "string" : "hash"] : n.map;
}
function E9(e) {
  var t = bs(this, e).delete(e);
  return (this.size -= t ? 1 : 0), t;
}
function _9(e) {
  return bs(this, e).get(e);
}
function C9(e) {
  return bs(this, e).has(e);
}
function $9(e, t) {
  var n = bs(this, e),
    r = n.size;
  return n.set(e, t), (this.size += n.size == r ? 0 : 1), this;
}
function nn(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.clear(); ++t < n; ) {
    var r = e[t];
    this.set(r[0], r[1]);
  }
}
nn.prototype.clear = S9;
nn.prototype.delete = E9;
nn.prototype.get = _9;
nn.prototype.has = C9;
nn.prototype.set = $9;
var O9 = 200;
function A9(e, t) {
  var n = this.__data__;
  if (n instanceof tn) {
    var r = n.__data__;
    if (!Fi || r.length < O9 - 1)
      return r.push([e, t]), (this.size = ++n.size), this;
    n = this.__data__ = new nn(r);
  }
  return n.set(e, t), (this.size = n.size), this;
}
function Nt(e) {
  var t = (this.__data__ = new tn(e));
  this.size = t.size;
}
Nt.prototype.clear = T7;
Nt.prototype.delete = P7;
Nt.prototype.get = j7;
Nt.prototype.has = R7;
Nt.prototype.set = A9;
var T9 = (function () {
  try {
    var e = ur(Object, "defineProperty");
    return e({}, "", {}), e;
  } catch {}
})();
const jl = T9;
function yd(e, t, n) {
  t == "__proto__" && jl
    ? jl(e, t, { configurable: !0, enumerable: !0, value: n, writable: !0 })
    : (e[t] = n);
}
function jc(e, t, n) {
  ((n !== void 0 && !Ji(e[t], n)) || (n === void 0 && !(t in e))) &&
    yd(e, t, n);
}
function P9(e) {
  return function (t, n, r) {
    for (var a = -1, i = Object(t), o = r(t), l = o.length; l--; ) {
      var s = o[e ? l : ++a];
      if (n(i[s], s, i) === !1) break;
    }
    return t;
  };
}
var j9 = P9();
const cy = j9;
var fy = typeof exports == "object" && exports && !exports.nodeType && exports,
  T0 = fy && typeof module == "object" && module && !module.nodeType && module,
  R9 = T0 && T0.exports === fy,
  P0 = R9 ? Et.Buffer : void 0,
  j0 = P0 ? P0.allocUnsafe : void 0;
function N9(e, t) {
  if (t) return e.slice();
  var n = e.length,
    r = j0 ? j0(n) : new e.constructor(n);
  return e.copy(r), r;
}
var F9 = Et.Uint8Array;
const Rl = F9;
function I9(e) {
  var t = new e.constructor(e.byteLength);
  return new Rl(t).set(new Rl(e)), t;
}
function L9(e, t) {
  var n = t ? I9(e.buffer) : e.buffer;
  return new e.constructor(n, e.byteOffset, e.length);
}
function M9(e, t) {
  var n = -1,
    r = e.length;
  for (t || (t = Array(r)); ++n < r; ) t[n] = e[n];
  return t;
}
var R0 = Object.create,
  z9 = (function () {
    function e() {}
    return function (t) {
      if (!dt(t)) return {};
      if (R0) return R0(t);
      e.prototype = t;
      var n = new e();
      return (e.prototype = void 0), n;
    };
  })();
const D9 = z9;
function dy(e, t) {
  return function (n) {
    return e(t(n));
  };
}
var B9 = dy(Object.getPrototypeOf, Object);
const py = B9;
var H9 = Object.prototype;
function bd(e) {
  var t = e && e.constructor,
    n = (typeof t == "function" && t.prototype) || H9;
  return e === n;
}
function U9(e) {
  return typeof e.constructor == "function" && !bd(e) ? D9(py(e)) : {};
}
function $n(e) {
  return e != null && typeof e == "object";
}
var W9 = "[object Arguments]";
function N0(e) {
  return $n(e) && lr(e) == W9;
}
var hy = Object.prototype,
  G9 = hy.hasOwnProperty,
  V9 = hy.propertyIsEnumerable,
  Y9 = N0(
    (function () {
      return arguments;
    })()
  )
    ? N0
    : function (e) {
        return $n(e) && G9.call(e, "callee") && !V9.call(e, "callee");
      };
const Nl = Y9;
var K9 = Array.isArray;
const et = K9;
var X9 = 9007199254740991;
function xd(e) {
  return typeof e == "number" && e > -1 && e % 1 == 0 && e <= X9;
}
function _a(e) {
  return e != null && xd(e.length) && !md(e);
}
function Q9(e) {
  return $n(e) && _a(e);
}
function q9() {
  return !1;
}
var gy = typeof exports == "object" && exports && !exports.nodeType && exports,
  F0 = gy && typeof module == "object" && module && !module.nodeType && module,
  Z9 = F0 && F0.exports === gy,
  I0 = Z9 ? Et.Buffer : void 0,
  J9 = I0 ? I0.isBuffer : void 0,
  ej = J9 || q9;
const Fl = ej;
var tj = "[object Object]",
  nj = Function.prototype,
  rj = Object.prototype,
  vy = nj.toString,
  aj = rj.hasOwnProperty,
  ij = vy.call(Object);
function oj(e) {
  if (!$n(e) || lr(e) != tj) return !1;
  var t = py(e);
  if (t === null) return !0;
  var n = aj.call(t, "constructor") && t.constructor;
  return typeof n == "function" && n instanceof n && vy.call(n) == ij;
}
var lj = "[object Arguments]",
  sj = "[object Array]",
  uj = "[object Boolean]",
  cj = "[object Date]",
  fj = "[object Error]",
  dj = "[object Function]",
  pj = "[object Map]",
  hj = "[object Number]",
  gj = "[object Object]",
  vj = "[object RegExp]",
  mj = "[object Set]",
  yj = "[object String]",
  bj = "[object WeakMap]",
  xj = "[object ArrayBuffer]",
  wj = "[object DataView]",
  Sj = "[object Float32Array]",
  kj = "[object Float64Array]",
  Ej = "[object Int8Array]",
  _j = "[object Int16Array]",
  Cj = "[object Int32Array]",
  $j = "[object Uint8Array]",
  Oj = "[object Uint8ClampedArray]",
  Aj = "[object Uint16Array]",
  Tj = "[object Uint32Array]",
  ie = {};
ie[Sj] =
  ie[kj] =
  ie[Ej] =
  ie[_j] =
  ie[Cj] =
  ie[$j] =
  ie[Oj] =
  ie[Aj] =
  ie[Tj] =
    !0;
ie[lj] =
  ie[sj] =
  ie[xj] =
  ie[uj] =
  ie[wj] =
  ie[cj] =
  ie[fj] =
  ie[dj] =
  ie[pj] =
  ie[hj] =
  ie[gj] =
  ie[vj] =
  ie[mj] =
  ie[yj] =
  ie[bj] =
    !1;
function Pj(e) {
  return $n(e) && xd(e.length) && !!ie[lr(e)];
}
function jj(e) {
  return function (t) {
    return e(t);
  };
}
var my = typeof exports == "object" && exports && !exports.nodeType && exports,
  ii = my && typeof module == "object" && module && !module.nodeType && module,
  Rj = ii && ii.exports === my,
  fu = Rj && sy.process,
  Nj = (function () {
    try {
      var e = ii && ii.require && ii.require("util").types;
      return e || (fu && fu.binding && fu.binding("util"));
    } catch {}
  })();
const L0 = Nj;
var M0 = L0 && L0.isTypedArray,
  Fj = M0 ? jj(M0) : Pj;
const wd = Fj;
function Rc(e, t) {
  if (!(t === "constructor" && typeof e[t] == "function") && t != "__proto__")
    return e[t];
}
var Ij = Object.prototype,
  Lj = Ij.hasOwnProperty;
function Mj(e, t, n) {
  var r = e[t];
  (!(Lj.call(e, t) && Ji(r, n)) || (n === void 0 && !(t in e))) && yd(e, t, n);
}
function zj(e, t, n, r) {
  var a = !n;
  n || (n = {});
  for (var i = -1, o = t.length; ++i < o; ) {
    var l = t[i],
      s = r ? r(n[l], e[l], l, n, e) : void 0;
    s === void 0 && (s = e[l]), a ? yd(n, l, s) : Mj(n, l, s);
  }
  return n;
}
function Dj(e, t) {
  for (var n = -1, r = Array(e); ++n < e; ) r[n] = t(n);
  return r;
}
var Bj = 9007199254740991,
  Hj = /^(?:0|[1-9]\d*)$/;
function Sd(e, t) {
  var n = typeof e;
  return (
    (t = t ?? Bj),
    !!t &&
      (n == "number" || (n != "symbol" && Hj.test(e))) &&
      e > -1 &&
      e % 1 == 0 &&
      e < t
  );
}
var Uj = Object.prototype,
  Wj = Uj.hasOwnProperty;
function yy(e, t) {
  var n = et(e),
    r = !n && Nl(e),
    a = !n && !r && Fl(e),
    i = !n && !r && !a && wd(e),
    o = n || r || a || i,
    l = o ? Dj(e.length, String) : [],
    s = l.length;
  for (var u in e)
    (t || Wj.call(e, u)) &&
      !(
        o &&
        (u == "length" ||
          (a && (u == "offset" || u == "parent")) ||
          (i && (u == "buffer" || u == "byteLength" || u == "byteOffset")) ||
          Sd(u, s))
      ) &&
      l.push(u);
  return l;
}
function Gj(e) {
  var t = [];
  if (e != null) for (var n in Object(e)) t.push(n);
  return t;
}
var Vj = Object.prototype,
  Yj = Vj.hasOwnProperty;
function Kj(e) {
  if (!dt(e)) return Gj(e);
  var t = bd(e),
    n = [];
  for (var r in e) (r == "constructor" && (t || !Yj.call(e, r))) || n.push(r);
  return n;
}
function by(e) {
  return _a(e) ? yy(e, !0) : Kj(e);
}
function Xj(e) {
  return zj(e, by(e));
}
function Qj(e, t, n, r, a, i, o) {
  var l = Rc(e, n),
    s = Rc(t, n),
    u = o.get(s);
  if (u) {
    jc(e, n, u);
    return;
  }
  var c = i ? i(l, s, n + "", e, t, o) : void 0,
    f = c === void 0;
  if (f) {
    var d = et(s),
      m = !d && Fl(s),
      x = !d && !m && wd(s);
    (c = s),
      d || m || x
        ? et(l)
          ? (c = l)
          : Q9(l)
          ? (c = M9(l))
          : m
          ? ((f = !1), (c = N9(s, !0)))
          : x
          ? ((f = !1), (c = L9(s, !0)))
          : (c = [])
        : oj(s) || Nl(s)
        ? ((c = l), Nl(l) ? (c = Xj(l)) : (!dt(l) || md(l)) && (c = U9(s)))
        : (f = !1);
  }
  f && (o.set(s, c), a(c, s, r, i, o), o.delete(s)), jc(e, n, c);
}
function xy(e, t, n, r, a) {
  e !== t &&
    cy(
      t,
      function (i, o) {
        if ((a || (a = new Nt()), dt(i))) Qj(e, t, o, n, xy, r, a);
        else {
          var l = r ? r(Rc(e, o), i, o + "", e, t, a) : void 0;
          l === void 0 && (l = i), jc(e, o, l);
        }
      },
      by
    );
}
function xs(e) {
  return e;
}
function qj(e, t, n) {
  switch (n.length) {
    case 0:
      return e.call(t);
    case 1:
      return e.call(t, n[0]);
    case 2:
      return e.call(t, n[0], n[1]);
    case 3:
      return e.call(t, n[0], n[1], n[2]);
  }
  return e.apply(t, n);
}
var z0 = Math.max;
function Zj(e, t, n) {
  return (
    (t = z0(t === void 0 ? e.length - 1 : t, 0)),
    function () {
      for (
        var r = arguments, a = -1, i = z0(r.length - t, 0), o = Array(i);
        ++a < i;

      )
        o[a] = r[t + a];
      a = -1;
      for (var l = Array(t + 1); ++a < t; ) l[a] = r[a];
      return (l[t] = n(o)), qj(e, this, l);
    }
  );
}
function Jj(e) {
  return function () {
    return e;
  };
}
var eR = jl
  ? function (e, t) {
      return jl(e, "toString", {
        configurable: !0,
        enumerable: !1,
        value: Jj(t),
        writable: !0,
      });
    }
  : xs;
const tR = eR;
var nR = 800,
  rR = 16,
  aR = Date.now;
function iR(e) {
  var t = 0,
    n = 0;
  return function () {
    var r = aR(),
      a = rR - (r - n);
    if (((n = r), a > 0)) {
      if (++t >= nR) return arguments[0];
    } else t = 0;
    return e.apply(void 0, arguments);
  };
}
var oR = iR(tR);
const lR = oR;
function sR(e, t) {
  return lR(Zj(e, t, xs), e + "");
}
function uR(e, t, n) {
  if (!dt(n)) return !1;
  var r = typeof t;
  return (r == "number" ? _a(n) && Sd(t, n.length) : r == "string" && t in n)
    ? Ji(n[t], e)
    : !1;
}
function cR(e) {
  return sR(function (t, n) {
    var r = -1,
      a = n.length,
      i = a > 1 ? n[a - 1] : void 0,
      o = a > 2 ? n[2] : void 0;
    for (
      i = e.length > 3 && typeof i == "function" ? (a--, i) : void 0,
        o && uR(n[0], n[1], o) && ((i = a < 3 ? void 0 : i), (a = 1)),
        t = Object(t);
      ++r < a;

    ) {
      var l = n[r];
      l && e(t, l, r, i);
    }
    return t;
  });
}
var fR = cR(function (e, t, n) {
  xy(e, t, n);
});
const Ge = fR;
var eo = function (t) {
  var n = t.zDepth,
    r = t.radius,
    a = t.background,
    i = t.children,
    o = t.styles,
    l = o === void 0 ? {} : o,
    s = H(
      Ge(
        {
          default: {
            wrap: { position: "relative", display: "inline-block" },
            content: { position: "relative" },
            bg: {
              absolute: "0px 0px 0px 0px",
              boxShadow: "0 " + n + "px " + n * 4 + "px rgba(0,0,0,.24)",
              borderRadius: r,
              background: a,
            },
          },
          "zDepth-0": { bg: { boxShadow: "none" } },
          "zDepth-1": {
            bg: {
              boxShadow:
                "0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)",
            },
          },
          "zDepth-2": {
            bg: {
              boxShadow:
                "0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)",
            },
          },
          "zDepth-3": {
            bg: {
              boxShadow:
                "0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)",
            },
          },
          "zDepth-4": {
            bg: {
              boxShadow:
                "0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)",
            },
          },
          "zDepth-5": {
            bg: {
              boxShadow:
                "0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)",
            },
          },
          square: { bg: { borderRadius: "0" } },
          circle: { bg: { borderRadius: "50%" } },
        },
        l
      ),
      { "zDepth-1": n === 1 }
    );
  return h.createElement(
    "div",
    { style: s.wrap },
    h.createElement("div", { style: s.bg }),
    h.createElement("div", { style: s.content }, i)
  );
};
eo.propTypes = {
  background: C.string,
  zDepth: C.oneOf([0, 1, 2, 3, 4, 5]),
  radius: C.number,
  styles: C.object,
};
eo.defaultProps = { background: "#fff", zDepth: 1, radius: 2, styles: {} };
var dR = function () {
  return Et.Date.now();
};
const du = dR;
var pR = /\s/;
function hR(e) {
  for (var t = e.length; t-- && pR.test(e.charAt(t)); );
  return t;
}
var gR = /^\s+/;
function vR(e) {
  return e && e.slice(0, hR(e) + 1).replace(gR, "");
}
var mR = "[object Symbol]";
function ws(e) {
  return typeof e == "symbol" || ($n(e) && lr(e) == mR);
}
var D0 = 0 / 0,
  yR = /^[-+]0x[0-9a-f]+$/i,
  bR = /^0b[01]+$/i,
  xR = /^0o[0-7]+$/i,
  wR = parseInt;
function B0(e) {
  if (typeof e == "number") return e;
  if (ws(e)) return D0;
  if (dt(e)) {
    var t = typeof e.valueOf == "function" ? e.valueOf() : e;
    e = dt(t) ? t + "" : t;
  }
  if (typeof e != "string") return e === 0 ? e : +e;
  e = vR(e);
  var n = bR.test(e);
  return n || xR.test(e) ? wR(e.slice(2), n ? 2 : 8) : yR.test(e) ? D0 : +e;
}
var SR = "Expected a function",
  kR = Math.max,
  ER = Math.min;
function wy(e, t, n) {
  var r,
    a,
    i,
    o,
    l,
    s,
    u = 0,
    c = !1,
    f = !1,
    d = !0;
  if (typeof e != "function") throw new TypeError(SR);
  (t = B0(t) || 0),
    dt(n) &&
      ((c = !!n.leading),
      (f = "maxWait" in n),
      (i = f ? kR(B0(n.maxWait) || 0, t) : i),
      (d = "trailing" in n ? !!n.trailing : d));
  function m(A) {
    var O = r,
      j = a;
    return (r = a = void 0), (u = A), (o = e.apply(j, O)), o;
  }
  function x(A) {
    return (u = A), (l = setTimeout(v, t)), c ? m(A) : o;
  }
  function w(A) {
    var O = A - s,
      j = A - u,
      G = t - O;
    return f ? ER(G, i - j) : G;
  }
  function E(A) {
    var O = A - s,
      j = A - u;
    return s === void 0 || O >= t || O < 0 || (f && j >= i);
  }
  function v() {
    var A = du();
    if (E(A)) return p(A);
    l = setTimeout(v, w(A));
  }
  function p(A) {
    return (l = void 0), d && r ? m(A) : ((r = a = void 0), o);
  }
  function b() {
    l !== void 0 && clearTimeout(l), (u = 0), (r = s = a = l = void 0);
  }
  function _() {
    return l === void 0 ? o : p(du());
  }
  function $() {
    var A = du(),
      O = E(A);
    if (((r = arguments), (a = this), (s = A), O)) {
      if (l === void 0) return x(s);
      if (f) return clearTimeout(l), (l = setTimeout(v, t)), m(s);
    }
    return l === void 0 && (l = setTimeout(v, t)), o;
  }
  return ($.cancel = b), ($.flush = _), $;
}
var _R = "Expected a function";
function CR(e, t, n) {
  var r = !0,
    a = !0;
  if (typeof e != "function") throw new TypeError(_R);
  return (
    dt(n) &&
      ((r = "leading" in n ? !!n.leading : r),
      (a = "trailing" in n ? !!n.trailing : a)),
    wy(e, t, { leading: r, maxWait: t, trailing: a })
  );
}
var $R = function (t, n, r) {
    var a = r.getBoundingClientRect(),
      i = a.width,
      o = a.height,
      l = typeof t.pageX == "number" ? t.pageX : t.touches[0].pageX,
      s = typeof t.pageY == "number" ? t.pageY : t.touches[0].pageY,
      u = l - (r.getBoundingClientRect().left + window.pageXOffset),
      c = s - (r.getBoundingClientRect().top + window.pageYOffset);
    u < 0 ? (u = 0) : u > i && (u = i), c < 0 ? (c = 0) : c > o && (c = o);
    var f = u / i,
      d = 1 - c / o;
    return { h: n.h, s: f, v: d, a: n.a, source: "hsv" };
  },
  OR = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function AR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function TR(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function PR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ss = (function (e) {
  PR(t, e);
  function t(n) {
    AR(this, t);
    var r = TR(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, n));
    return (
      (r.handleChange = function (a) {
        typeof r.props.onChange == "function" &&
          r.throttle(r.props.onChange, $R(a, r.props.hsl, r.container), a);
      }),
      (r.handleMouseDown = function (a) {
        r.handleChange(a);
        var i = r.getContainerRenderWindow();
        i.addEventListener("mousemove", r.handleChange),
          i.addEventListener("mouseup", r.handleMouseUp);
      }),
      (r.handleMouseUp = function () {
        r.unbindEventListeners();
      }),
      (r.throttle = CR(function (a, i, o) {
        a(i, o);
      }, 50)),
      r
    );
  }
  return (
    OR(t, [
      {
        key: "componentWillUnmount",
        value: function () {
          this.throttle.cancel(), this.unbindEventListeners();
        },
      },
      {
        key: "getContainerRenderWindow",
        value: function () {
          for (
            var r = this.container, a = window;
            !a.document.contains(r) && a.parent !== a;

          )
            a = a.parent;
          return a;
        },
      },
      {
        key: "unbindEventListeners",
        value: function () {
          var r = this.getContainerRenderWindow();
          r.removeEventListener("mousemove", this.handleChange),
            r.removeEventListener("mouseup", this.handleMouseUp);
        },
      },
      {
        key: "render",
        value: function () {
          var r = this,
            a = this.props.style || {},
            i = a.color,
            o = a.white,
            l = a.black,
            s = a.pointer,
            u = a.circle,
            c = H(
              {
                default: {
                  color: {
                    absolute: "0px 0px 0px 0px",
                    background: "hsl(" + this.props.hsl.h + ",100%, 50%)",
                    borderRadius: this.props.radius,
                  },
                  white: {
                    absolute: "0px 0px 0px 0px",
                    borderRadius: this.props.radius,
                  },
                  black: {
                    absolute: "0px 0px 0px 0px",
                    boxShadow: this.props.shadow,
                    borderRadius: this.props.radius,
                  },
                  pointer: {
                    position: "absolute",
                    top: -(this.props.hsv.v * 100) + 100 + "%",
                    left: this.props.hsv.s * 100 + "%",
                    cursor: "default",
                  },
                  circle: {
                    width: "4px",
                    height: "4px",
                    boxShadow: `0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),
            0 0 1px 2px rgba(0,0,0,.4)`,
                    borderRadius: "50%",
                    cursor: "hand",
                    transform: "translate(-2px, -2px)",
                  },
                },
                custom: { color: i, white: o, black: l, pointer: s, circle: u },
              },
              { custom: !!this.props.style }
            );
          return h.createElement(
            "div",
            {
              style: c.color,
              ref: function (d) {
                return (r.container = d);
              },
              onMouseDown: this.handleMouseDown,
              onTouchMove: this.handleChange,
              onTouchStart: this.handleChange,
            },
            h.createElement(
              "style",
              null,
              `
          .saturation-white {
            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));
            background: linear-gradient(to right, #fff, rgba(255,255,255,0));
          }
          .saturation-black {
            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));
            background: linear-gradient(to top, #000, rgba(0,0,0,0));
          }
        `
            ),
            h.createElement(
              "div",
              { style: c.white, className: "saturation-white" },
              h.createElement("div", {
                style: c.black,
                className: "saturation-black",
              }),
              h.createElement(
                "div",
                { style: c.pointer },
                this.props.pointer
                  ? h.createElement(this.props.pointer, this.props)
                  : h.createElement("div", { style: c.circle })
              )
            )
          );
        },
      },
    ]),
    t
  );
})(B.PureComponent || B.Component);
function jR(e, t) {
  for (
    var n = -1, r = e == null ? 0 : e.length;
    ++n < r && t(e[n], n, e) !== !1;

  );
  return e;
}
var RR = dy(Object.keys, Object);
const NR = RR;
var FR = Object.prototype,
  IR = FR.hasOwnProperty;
function LR(e) {
  if (!bd(e)) return NR(e);
  var t = [];
  for (var n in Object(e)) IR.call(e, n) && n != "constructor" && t.push(n);
  return t;
}
function kd(e) {
  return _a(e) ? yy(e) : LR(e);
}
function MR(e, t) {
  return e && cy(e, t, kd);
}
function zR(e, t) {
  return function (n, r) {
    if (n == null) return n;
    if (!_a(n)) return e(n, r);
    for (
      var a = n.length, i = t ? a : -1, o = Object(n);
      (t ? i-- : ++i < a) && r(o[i], i, o) !== !1;

    );
    return n;
  };
}
var DR = zR(MR);
const Sy = DR;
function BR(e) {
  return typeof e == "function" ? e : xs;
}
function HR(e, t) {
  var n = et(e) ? jR : Sy;
  return n(e, BR(t));
}
var ky = { exports: {} };
(function (e) {
  (function (t) {
    var n = /^\s+/,
      r = /\s+$/,
      a = 0,
      i = t.round,
      o = t.min,
      l = t.max,
      s = t.random;
    function u(g, S) {
      if (((g = g || ""), (S = S || {}), g instanceof u)) return g;
      if (!(this instanceof u)) return new u(g, S);
      var y = c(g);
      (this._originalInput = g),
        (this._r = y.r),
        (this._g = y.g),
        (this._b = y.b),
        (this._a = y.a),
        (this._roundA = i(100 * this._a) / 100),
        (this._format = S.format || y.format),
        (this._gradientType = S.gradientType),
        this._r < 1 && (this._r = i(this._r)),
        this._g < 1 && (this._g = i(this._g)),
        this._b < 1 && (this._b = i(this._b)),
        (this._ok = y.ok),
        (this._tc_id = a++);
    }
    (u.prototype = {
      isDark: function () {
        return this.getBrightness() < 128;
      },
      isLight: function () {
        return !this.isDark();
      },
      isValid: function () {
        return this._ok;
      },
      getOriginalInput: function () {
        return this._originalInput;
      },
      getFormat: function () {
        return this._format;
      },
      getAlpha: function () {
        return this._a;
      },
      getBrightness: function () {
        var g = this.toRgb();
        return (g.r * 299 + g.g * 587 + g.b * 114) / 1e3;
      },
      getLuminance: function () {
        var g = this.toRgb(),
          S,
          y,
          P,
          L,
          R,
          Q;
        return (
          (S = g.r / 255),
          (y = g.g / 255),
          (P = g.b / 255),
          S <= 0.03928
            ? (L = S / 12.92)
            : (L = t.pow((S + 0.055) / 1.055, 2.4)),
          y <= 0.03928
            ? (R = y / 12.92)
            : (R = t.pow((y + 0.055) / 1.055, 2.4)),
          P <= 0.03928
            ? (Q = P / 12.92)
            : (Q = t.pow((P + 0.055) / 1.055, 2.4)),
          0.2126 * L + 0.7152 * R + 0.0722 * Q
        );
      },
      setAlpha: function (g) {
        return (this._a = W(g)), (this._roundA = i(100 * this._a) / 100), this;
      },
      toHsv: function () {
        var g = x(this._r, this._g, this._b);
        return { h: g.h * 360, s: g.s, v: g.v, a: this._a };
      },
      toHsvString: function () {
        var g = x(this._r, this._g, this._b),
          S = i(g.h * 360),
          y = i(g.s * 100),
          P = i(g.v * 100);
        return this._a == 1
          ? "hsv(" + S + ", " + y + "%, " + P + "%)"
          : "hsva(" + S + ", " + y + "%, " + P + "%, " + this._roundA + ")";
      },
      toHsl: function () {
        var g = d(this._r, this._g, this._b);
        return { h: g.h * 360, s: g.s, l: g.l, a: this._a };
      },
      toHslString: function () {
        var g = d(this._r, this._g, this._b),
          S = i(g.h * 360),
          y = i(g.s * 100),
          P = i(g.l * 100);
        return this._a == 1
          ? "hsl(" + S + ", " + y + "%, " + P + "%)"
          : "hsla(" + S + ", " + y + "%, " + P + "%, " + this._roundA + ")";
      },
      toHex: function (g) {
        return E(this._r, this._g, this._b, g);
      },
      toHexString: function (g) {
        return "#" + this.toHex(g);
      },
      toHex8: function (g) {
        return v(this._r, this._g, this._b, this._a, g);
      },
      toHex8String: function (g) {
        return "#" + this.toHex8(g);
      },
      toRgb: function () {
        return { r: i(this._r), g: i(this._g), b: i(this._b), a: this._a };
      },
      toRgbString: function () {
        return this._a == 1
          ? "rgb(" + i(this._r) + ", " + i(this._g) + ", " + i(this._b) + ")"
          : "rgba(" +
              i(this._r) +
              ", " +
              i(this._g) +
              ", " +
              i(this._b) +
              ", " +
              this._roundA +
              ")";
      },
      toPercentageRgb: function () {
        return {
          r: i(M(this._r, 255) * 100) + "%",
          g: i(M(this._g, 255) * 100) + "%",
          b: i(M(this._b, 255) * 100) + "%",
          a: this._a,
        };
      },
      toPercentageRgbString: function () {
        return this._a == 1
          ? "rgb(" +
              i(M(this._r, 255) * 100) +
              "%, " +
              i(M(this._g, 255) * 100) +
              "%, " +
              i(M(this._b, 255) * 100) +
              "%)"
          : "rgba(" +
              i(M(this._r, 255) * 100) +
              "%, " +
              i(M(this._g, 255) * 100) +
              "%, " +
              i(M(this._b, 255) * 100) +
              "%, " +
              this._roundA +
              ")";
      },
      toName: function () {
        return this._a === 0
          ? "transparent"
          : this._a < 1
          ? !1
          : Ca[E(this._r, this._g, this._b, !0)] || !1;
      },
      toFilter: function (g) {
        var S = "#" + p(this._r, this._g, this._b, this._a),
          y = S,
          P = this._gradientType ? "GradientType = 1, " : "";
        if (g) {
          var L = u(g);
          y = "#" + p(L._r, L._g, L._b, L._a);
        }
        return (
          "progid:DXImageTransform.Microsoft.gradient(" +
          P +
          "startColorstr=" +
          S +
          ",endColorstr=" +
          y +
          ")"
        );
      },
      toString: function (g) {
        var S = !!g;
        g = g || this._format;
        var y = !1,
          P = this._a < 1 && this._a >= 0,
          L =
            !S &&
            P &&
            (g === "hex" ||
              g === "hex6" ||
              g === "hex3" ||
              g === "hex4" ||
              g === "hex8" ||
              g === "name");
        return L
          ? g === "name" && this._a === 0
            ? this.toName()
            : this.toRgbString()
          : (g === "rgb" && (y = this.toRgbString()),
            g === "prgb" && (y = this.toPercentageRgbString()),
            (g === "hex" || g === "hex6") && (y = this.toHexString()),
            g === "hex3" && (y = this.toHexString(!0)),
            g === "hex4" && (y = this.toHex8String(!0)),
            g === "hex8" && (y = this.toHex8String()),
            g === "name" && (y = this.toName()),
            g === "hsl" && (y = this.toHslString()),
            g === "hsv" && (y = this.toHsvString()),
            y || this.toHexString());
      },
      clone: function () {
        return u(this.toString());
      },
      _applyModification: function (g, S) {
        var y = g.apply(null, [this].concat([].slice.call(S)));
        return (
          (this._r = y._r),
          (this._g = y._g),
          (this._b = y._b),
          this.setAlpha(y._a),
          this
        );
      },
      lighten: function () {
        return this._applyModification(A, arguments);
      },
      brighten: function () {
        return this._applyModification(O, arguments);
      },
      darken: function () {
        return this._applyModification(j, arguments);
      },
      desaturate: function () {
        return this._applyModification(b, arguments);
      },
      saturate: function () {
        return this._applyModification(_, arguments);
      },
      greyscale: function () {
        return this._applyModification($, arguments);
      },
      spin: function () {
        return this._applyModification(G, arguments);
      },
      _applyCombination: function (g, S) {
        return g.apply(null, [this].concat([].slice.call(S)));
      },
      analogous: function () {
        return this._applyCombination(to, arguments);
      },
      complement: function () {
        return this._applyCombination(U, arguments);
      },
      monochromatic: function () {
        return this._applyCombination(Es, arguments);
      },
      splitcomplement: function () {
        return this._applyCombination(Nn, arguments);
      },
      triad: function () {
        return this._applyCombination(Ye, arguments);
      },
      tetrad: function () {
        return this._applyCombination(Rn, arguments);
      },
    }),
      (u.fromRatio = function (g, S) {
        if (typeof g == "object") {
          var y = {};
          for (var P in g)
            g.hasOwnProperty(P) &&
              (P === "a" ? (y[P] = g[P]) : (y[P] = Ke(g[P])));
          g = y;
        }
        return u(g, S);
      });
    function c(g) {
      var S = { r: 0, g: 0, b: 0 },
        y = 1,
        P = null,
        L = null,
        R = null,
        Q = !1,
        ce = !1;
      return (
        typeof g == "string" && (g = Dy(g)),
        typeof g == "object" &&
          (Lt(g.r) && Lt(g.g) && Lt(g.b)
            ? ((S = f(g.r, g.g, g.b)),
              (Q = !0),
              (ce = String(g.r).substr(-1) === "%" ? "prgb" : "rgb"))
            : Lt(g.h) && Lt(g.s) && Lt(g.v)
            ? ((P = Ke(g.s)),
              (L = Ke(g.v)),
              (S = w(g.h, P, L)),
              (Q = !0),
              (ce = "hsv"))
            : Lt(g.h) &&
              Lt(g.s) &&
              Lt(g.l) &&
              ((P = Ke(g.s)),
              (R = Ke(g.l)),
              (S = m(g.h, P, R)),
              (Q = !0),
              (ce = "hsl")),
          g.hasOwnProperty("a") && (y = g.a)),
        (y = W(y)),
        {
          ok: Q,
          format: g.format || ce,
          r: o(255, l(S.r, 0)),
          g: o(255, l(S.g, 0)),
          b: o(255, l(S.b, 0)),
          a: y,
        }
      );
    }
    function f(g, S, y) {
      return { r: M(g, 255) * 255, g: M(S, 255) * 255, b: M(y, 255) * 255 };
    }
    function d(g, S, y) {
      (g = M(g, 255)), (S = M(S, 255)), (y = M(y, 255));
      var P = l(g, S, y),
        L = o(g, S, y),
        R,
        Q,
        ce = (P + L) / 2;
      if (P == L) R = Q = 0;
      else {
        var ve = P - L;
        switch (((Q = ce > 0.5 ? ve / (2 - P - L) : ve / (P + L)), P)) {
          case g:
            R = (S - y) / ve + (S < y ? 6 : 0);
            break;
          case S:
            R = (y - g) / ve + 2;
            break;
          case y:
            R = (g - S) / ve + 4;
            break;
        }
        R /= 6;
      }
      return { h: R, s: Q, l: ce };
    }
    function m(g, S, y) {
      var P, L, R;
      (g = M(g, 360)), (S = M(S, 100)), (y = M(y, 100));
      function Q(at, $a, ht) {
        return (
          ht < 0 && (ht += 1),
          ht > 1 && (ht -= 1),
          ht < 1 / 6
            ? at + ($a - at) * 6 * ht
            : ht < 1 / 2
            ? $a
            : ht < 2 / 3
            ? at + ($a - at) * (2 / 3 - ht) * 6
            : at
        );
      }
      if (S === 0) P = L = R = y;
      else {
        var ce = y < 0.5 ? y * (1 + S) : y + S - y * S,
          ve = 2 * y - ce;
        (P = Q(ve, ce, g + 1 / 3)),
          (L = Q(ve, ce, g)),
          (R = Q(ve, ce, g - 1 / 3));
      }
      return { r: P * 255, g: L * 255, b: R * 255 };
    }
    function x(g, S, y) {
      (g = M(g, 255)), (S = M(S, 255)), (y = M(y, 255));
      var P = l(g, S, y),
        L = o(g, S, y),
        R,
        Q,
        ce = P,
        ve = P - L;
      if (((Q = P === 0 ? 0 : ve / P), P == L)) R = 0;
      else {
        switch (P) {
          case g:
            R = (S - y) / ve + (S < y ? 6 : 0);
            break;
          case S:
            R = (y - g) / ve + 2;
            break;
          case y:
            R = (g - S) / ve + 4;
            break;
        }
        R /= 6;
      }
      return { h: R, s: Q, v: ce };
    }
    function w(g, S, y) {
      (g = M(g, 360) * 6), (S = M(S, 100)), (y = M(y, 100));
      var P = t.floor(g),
        L = g - P,
        R = y * (1 - S),
        Q = y * (1 - L * S),
        ce = y * (1 - (1 - L) * S),
        ve = P % 6,
        at = [y, Q, R, R, ce, y][ve],
        $a = [ce, y, y, Q, R, R][ve],
        ht = [R, R, ce, y, y, Q][ve];
      return { r: at * 255, g: $a * 255, b: ht * 255 };
    }
    function E(g, S, y, P) {
      var L = [
        Ne(i(g).toString(16)),
        Ne(i(S).toString(16)),
        Ne(i(y).toString(16)),
      ];
      return P &&
        L[0].charAt(0) == L[0].charAt(1) &&
        L[1].charAt(0) == L[1].charAt(1) &&
        L[2].charAt(0) == L[2].charAt(1)
        ? L[0].charAt(0) + L[1].charAt(0) + L[2].charAt(0)
        : L.join("");
    }
    function v(g, S, y, P, L) {
      var R = [
        Ne(i(g).toString(16)),
        Ne(i(S).toString(16)),
        Ne(i(y).toString(16)),
        Ne(In(P)),
      ];
      return L &&
        R[0].charAt(0) == R[0].charAt(1) &&
        R[1].charAt(0) == R[1].charAt(1) &&
        R[2].charAt(0) == R[2].charAt(1) &&
        R[3].charAt(0) == R[3].charAt(1)
        ? R[0].charAt(0) + R[1].charAt(0) + R[2].charAt(0) + R[3].charAt(0)
        : R.join("");
    }
    function p(g, S, y, P) {
      var L = [
        Ne(In(P)),
        Ne(i(g).toString(16)),
        Ne(i(S).toString(16)),
        Ne(i(y).toString(16)),
      ];
      return L.join("");
    }
    (u.equals = function (g, S) {
      return !g || !S ? !1 : u(g).toRgbString() == u(S).toRgbString();
    }),
      (u.random = function () {
        return u.fromRatio({ r: s(), g: s(), b: s() });
      });
    function b(g, S) {
      S = S === 0 ? 0 : S || 10;
      var y = u(g).toHsl();
      return (y.s -= S / 100), (y.s = ee(y.s)), u(y);
    }
    function _(g, S) {
      S = S === 0 ? 0 : S || 10;
      var y = u(g).toHsl();
      return (y.s += S / 100), (y.s = ee(y.s)), u(y);
    }
    function $(g) {
      return u(g).desaturate(100);
    }
    function A(g, S) {
      S = S === 0 ? 0 : S || 10;
      var y = u(g).toHsl();
      return (y.l += S / 100), (y.l = ee(y.l)), u(y);
    }
    function O(g, S) {
      S = S === 0 ? 0 : S || 10;
      var y = u(g).toRgb();
      return (
        (y.r = l(0, o(255, y.r - i(255 * -(S / 100))))),
        (y.g = l(0, o(255, y.g - i(255 * -(S / 100))))),
        (y.b = l(0, o(255, y.b - i(255 * -(S / 100))))),
        u(y)
      );
    }
    function j(g, S) {
      S = S === 0 ? 0 : S || 10;
      var y = u(g).toHsl();
      return (y.l -= S / 100), (y.l = ee(y.l)), u(y);
    }
    function G(g, S) {
      var y = u(g).toHsl(),
        P = (y.h + S) % 360;
      return (y.h = P < 0 ? 360 + P : P), u(y);
    }
    function U(g) {
      var S = u(g).toHsl();
      return (S.h = (S.h + 180) % 360), u(S);
    }
    function Ye(g) {
      var S = u(g).toHsl(),
        y = S.h;
      return [
        u(g),
        u({ h: (y + 120) % 360, s: S.s, l: S.l }),
        u({ h: (y + 240) % 360, s: S.s, l: S.l }),
      ];
    }
    function Rn(g) {
      var S = u(g).toHsl(),
        y = S.h;
      return [
        u(g),
        u({ h: (y + 90) % 360, s: S.s, l: S.l }),
        u({ h: (y + 180) % 360, s: S.s, l: S.l }),
        u({ h: (y + 270) % 360, s: S.s, l: S.l }),
      ];
    }
    function Nn(g) {
      var S = u(g).toHsl(),
        y = S.h;
      return [
        u(g),
        u({ h: (y + 72) % 360, s: S.s, l: S.l }),
        u({ h: (y + 216) % 360, s: S.s, l: S.l }),
      ];
    }
    function to(g, S, y) {
      (S = S || 6), (y = y || 30);
      var P = u(g).toHsl(),
        L = 360 / y,
        R = [u(g)];
      for (P.h = (P.h - ((L * S) >> 1) + 720) % 360; --S; )
        (P.h = (P.h + L) % 360), R.push(u(P));
      return R;
    }
    function Es(g, S) {
      S = S || 6;
      for (
        var y = u(g).toHsv(), P = y.h, L = y.s, R = y.v, Q = [], ce = 1 / S;
        S--;

      )
        Q.push(u({ h: P, s: L, v: R })), (R = (R + ce) % 1);
      return Q;
    }
    (u.mix = function (g, S, y) {
      y = y === 0 ? 0 : y || 50;
      var P = u(g).toRgb(),
        L = u(S).toRgb(),
        R = y / 100,
        Q = {
          r: (L.r - P.r) * R + P.r,
          g: (L.g - P.g) * R + P.g,
          b: (L.b - P.b) * R + P.b,
          a: (L.a - P.a) * R + P.a,
        };
      return u(Q);
    }),
      (u.readability = function (g, S) {
        var y = u(g),
          P = u(S);
        return (
          (t.max(y.getLuminance(), P.getLuminance()) + 0.05) /
          (t.min(y.getLuminance(), P.getLuminance()) + 0.05)
        );
      }),
      (u.isReadable = function (g, S, y) {
        var P = u.readability(g, S),
          L,
          R;
        switch (((R = !1), (L = By(y)), L.level + L.size)) {
          case "AAsmall":
          case "AAAlarge":
            R = P >= 4.5;
            break;
          case "AAlarge":
            R = P >= 3;
            break;
          case "AAAsmall":
            R = P >= 7;
            break;
        }
        return R;
      }),
      (u.mostReadable = function (g, S, y) {
        var P = null,
          L = 0,
          R,
          Q,
          ce,
          ve;
        (y = y || {}),
          (Q = y.includeFallbackColors),
          (ce = y.level),
          (ve = y.size);
        for (var at = 0; at < S.length; at++)
          (R = u.readability(g, S[at])), R > L && ((L = R), (P = u(S[at])));
        return u.isReadable(g, P, { level: ce, size: ve }) || !Q
          ? P
          : ((y.includeFallbackColors = !1),
            u.mostReadable(g, ["#fff", "#000"], y));
      });
    var Fn = (u.names = {
        aliceblue: "f0f8ff",
        antiquewhite: "faebd7",
        aqua: "0ff",
        aquamarine: "7fffd4",
        azure: "f0ffff",
        beige: "f5f5dc",
        bisque: "ffe4c4",
        black: "000",
        blanchedalmond: "ffebcd",
        blue: "00f",
        blueviolet: "8a2be2",
        brown: "a52a2a",
        burlywood: "deb887",
        burntsienna: "ea7e5d",
        cadetblue: "5f9ea0",
        chartreuse: "7fff00",
        chocolate: "d2691e",
        coral: "ff7f50",
        cornflowerblue: "6495ed",
        cornsilk: "fff8dc",
        crimson: "dc143c",
        cyan: "0ff",
        darkblue: "00008b",
        darkcyan: "008b8b",
        darkgoldenrod: "b8860b",
        darkgray: "a9a9a9",
        darkgreen: "006400",
        darkgrey: "a9a9a9",
        darkkhaki: "bdb76b",
        darkmagenta: "8b008b",
        darkolivegreen: "556b2f",
        darkorange: "ff8c00",
        darkorchid: "9932cc",
        darkred: "8b0000",
        darksalmon: "e9967a",
        darkseagreen: "8fbc8f",
        darkslateblue: "483d8b",
        darkslategray: "2f4f4f",
        darkslategrey: "2f4f4f",
        darkturquoise: "00ced1",
        darkviolet: "9400d3",
        deeppink: "ff1493",
        deepskyblue: "00bfff",
        dimgray: "696969",
        dimgrey: "696969",
        dodgerblue: "1e90ff",
        firebrick: "b22222",
        floralwhite: "fffaf0",
        forestgreen: "228b22",
        fuchsia: "f0f",
        gainsboro: "dcdcdc",
        ghostwhite: "f8f8ff",
        gold: "ffd700",
        goldenrod: "daa520",
        gray: "808080",
        green: "008000",
        greenyellow: "adff2f",
        grey: "808080",
        honeydew: "f0fff0",
        hotpink: "ff69b4",
        indianred: "cd5c5c",
        indigo: "4b0082",
        ivory: "fffff0",
        khaki: "f0e68c",
        lavender: "e6e6fa",
        lavenderblush: "fff0f5",
        lawngreen: "7cfc00",
        lemonchiffon: "fffacd",
        lightblue: "add8e6",
        lightcoral: "f08080",
        lightcyan: "e0ffff",
        lightgoldenrodyellow: "fafad2",
        lightgray: "d3d3d3",
        lightgreen: "90ee90",
        lightgrey: "d3d3d3",
        lightpink: "ffb6c1",
        lightsalmon: "ffa07a",
        lightseagreen: "20b2aa",
        lightskyblue: "87cefa",
        lightslategray: "789",
        lightslategrey: "789",
        lightsteelblue: "b0c4de",
        lightyellow: "ffffe0",
        lime: "0f0",
        limegreen: "32cd32",
        linen: "faf0e6",
        magenta: "f0f",
        maroon: "800000",
        mediumaquamarine: "66cdaa",
        mediumblue: "0000cd",
        mediumorchid: "ba55d3",
        mediumpurple: "9370db",
        mediumseagreen: "3cb371",
        mediumslateblue: "7b68ee",
        mediumspringgreen: "00fa9a",
        mediumturquoise: "48d1cc",
        mediumvioletred: "c71585",
        midnightblue: "191970",
        mintcream: "f5fffa",
        mistyrose: "ffe4e1",
        moccasin: "ffe4b5",
        navajowhite: "ffdead",
        navy: "000080",
        oldlace: "fdf5e6",
        olive: "808000",
        olivedrab: "6b8e23",
        orange: "ffa500",
        orangered: "ff4500",
        orchid: "da70d6",
        palegoldenrod: "eee8aa",
        palegreen: "98fb98",
        paleturquoise: "afeeee",
        palevioletred: "db7093",
        papayawhip: "ffefd5",
        peachpuff: "ffdab9",
        peru: "cd853f",
        pink: "ffc0cb",
        plum: "dda0dd",
        powderblue: "b0e0e6",
        purple: "800080",
        rebeccapurple: "663399",
        red: "f00",
        rosybrown: "bc8f8f",
        royalblue: "4169e1",
        saddlebrown: "8b4513",
        salmon: "fa8072",
        sandybrown: "f4a460",
        seagreen: "2e8b57",
        seashell: "fff5ee",
        sienna: "a0522d",
        silver: "c0c0c0",
        skyblue: "87ceeb",
        slateblue: "6a5acd",
        slategray: "708090",
        slategrey: "708090",
        snow: "fffafa",
        springgreen: "00ff7f",
        steelblue: "4682b4",
        tan: "d2b48c",
        teal: "008080",
        thistle: "d8bfd8",
        tomato: "ff6347",
        turquoise: "40e0d0",
        violet: "ee82ee",
        wheat: "f5deb3",
        white: "fff",
        whitesmoke: "f5f5f5",
        yellow: "ff0",
        yellowgreen: "9acd32",
      }),
      Ca = (u.hexNames = F(Fn));
    function F(g) {
      var S = {};
      for (var y in g) g.hasOwnProperty(y) && (S[g[y]] = y);
      return S;
    }
    function W(g) {
      return (g = parseFloat(g)), (isNaN(g) || g < 0 || g > 1) && (g = 1), g;
    }
    function M(g, S) {
      dr(g) && (g = "100%");
      var y = It(g);
      return (
        (g = o(S, l(0, parseFloat(g)))),
        y && (g = parseInt(g * S, 10) / 100),
        t.abs(g - S) < 1e-6 ? 1 : (g % S) / parseFloat(S)
      );
    }
    function ee(g) {
      return o(1, l(0, g));
    }
    function X(g) {
      return parseInt(g, 16);
    }
    function dr(g) {
      return (
        typeof g == "string" && g.indexOf(".") != -1 && parseFloat(g) === 1
      );
    }
    function It(g) {
      return typeof g == "string" && g.indexOf("%") != -1;
    }
    function Ne(g) {
      return g.length == 1 ? "0" + g : "" + g;
    }
    function Ke(g) {
      return g <= 1 && (g = g * 100 + "%"), g;
    }
    function In(g) {
      return t.round(parseFloat(g) * 255).toString(16);
    }
    function Hd(g) {
      return X(g) / 255;
    }
    var pt = (function () {
      var g = "[-\\+]?\\d+%?",
        S = "[-\\+]?\\d*\\.\\d+%?",
        y = "(?:" + S + ")|(?:" + g + ")",
        P =
          "[\\s|\\(]+(" + y + ")[,|\\s]+(" + y + ")[,|\\s]+(" + y + ")\\s*\\)?",
        L =
          "[\\s|\\(]+(" +
          y +
          ")[,|\\s]+(" +
          y +
          ")[,|\\s]+(" +
          y +
          ")[,|\\s]+(" +
          y +
          ")\\s*\\)?";
      return {
        CSS_UNIT: new RegExp(y),
        rgb: new RegExp("rgb" + P),
        rgba: new RegExp("rgba" + L),
        hsl: new RegExp("hsl" + P),
        hsla: new RegExp("hsla" + L),
        hsv: new RegExp("hsv" + P),
        hsva: new RegExp("hsva" + L),
        hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
        hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
        hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      };
    })();
    function Lt(g) {
      return !!pt.CSS_UNIT.exec(g);
    }
    function Dy(g) {
      g = g.replace(n, "").replace(r, "").toLowerCase();
      var S = !1;
      if (Fn[g]) (g = Fn[g]), (S = !0);
      else if (g == "transparent")
        return { r: 0, g: 0, b: 0, a: 0, format: "name" };
      var y;
      return (y = pt.rgb.exec(g))
        ? { r: y[1], g: y[2], b: y[3] }
        : (y = pt.rgba.exec(g))
        ? { r: y[1], g: y[2], b: y[3], a: y[4] }
        : (y = pt.hsl.exec(g))
        ? { h: y[1], s: y[2], l: y[3] }
        : (y = pt.hsla.exec(g))
        ? { h: y[1], s: y[2], l: y[3], a: y[4] }
        : (y = pt.hsv.exec(g))
        ? { h: y[1], s: y[2], v: y[3] }
        : (y = pt.hsva.exec(g))
        ? { h: y[1], s: y[2], v: y[3], a: y[4] }
        : (y = pt.hex8.exec(g))
        ? {
            r: X(y[1]),
            g: X(y[2]),
            b: X(y[3]),
            a: Hd(y[4]),
            format: S ? "name" : "hex8",
          }
        : (y = pt.hex6.exec(g))
        ? { r: X(y[1]), g: X(y[2]), b: X(y[3]), format: S ? "name" : "hex" }
        : (y = pt.hex4.exec(g))
        ? {
            r: X(y[1] + "" + y[1]),
            g: X(y[2] + "" + y[2]),
            b: X(y[3] + "" + y[3]),
            a: Hd(y[4] + "" + y[4]),
            format: S ? "name" : "hex8",
          }
        : (y = pt.hex3.exec(g))
        ? {
            r: X(y[1] + "" + y[1]),
            g: X(y[2] + "" + y[2]),
            b: X(y[3] + "" + y[3]),
            format: S ? "name" : "hex",
          }
        : !1;
    }
    function By(g) {
      var S, y;
      return (
        (g = g || { level: "AA", size: "small" }),
        (S = (g.level || "AA").toUpperCase()),
        (y = (g.size || "small").toLowerCase()),
        S !== "AA" && S !== "AAA" && (S = "AA"),
        y !== "small" && y !== "large" && (y = "small"),
        { level: S, size: y }
      );
    }
    e.exports ? (e.exports = u) : (window.tinycolor = u);
  })(Math);
})(ky);
var UR = ky.exports;
const Il = Mc(UR);
var H0 = function (t) {
    var n = ["r", "g", "b", "a", "h", "s", "l", "v"],
      r = 0,
      a = 0;
    return (
      HR(n, function (i) {
        if (
          t[i] &&
          ((r += 1), isNaN(t[i]) || (a += 1), i === "s" || i === "l")
        ) {
          var o = /^\d+%$/;
          o.test(t[i]) && (a += 1);
        }
      }),
      r === a ? t : !1
    );
  },
  Va = function (t, n) {
    var r = t.hex ? Il(t.hex) : Il(t),
      a = r.toHsl(),
      i = r.toHsv(),
      o = r.toRgb(),
      l = r.toHex();
    a.s === 0 && ((a.h = n || 0), (i.h = n || 0));
    var s = l === "000000" && o.a === 0;
    return {
      hsl: a,
      hex: s ? "transparent" : "#" + l,
      rgb: o,
      hsv: i,
      oldHue: t.h || n || a.h,
      source: t.source,
    };
  },
  jn = function (t) {
    if (t === "transparent") return !0;
    var n = String(t).charAt(0) === "#" ? 1 : 0;
    return t.length !== 4 + n && t.length < 7 + n && Il(t).isValid();
  },
  Ed = function (t) {
    if (!t) return "#fff";
    var n = Va(t);
    if (n.hex === "transparent") return "rgba(0,0,0,0.4)";
    var r = (n.rgb.r * 299 + n.rgb.g * 587 + n.rgb.b * 114) / 1e3;
    return r >= 128 ? "#000" : "#fff";
  },
  pu = function (t, n) {
    var r = t.replace("°", "");
    return Il(n + " (" + r + ")")._ok;
  },
  za =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  WR = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function GR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function VR(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function YR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ve = function (t) {
    var n = (function (r) {
      YR(a, r);
      function a(i) {
        GR(this, a);
        var o = VR(this, (a.__proto__ || Object.getPrototypeOf(a)).call(this));
        return (
          (o.handleChange = function (l, s) {
            var u = H0(l);
            if (u) {
              var c = Va(l, l.h || o.state.oldHue);
              o.setState(c),
                o.props.onChangeComplete &&
                  o.debounce(o.props.onChangeComplete, c, s),
                o.props.onChange && o.props.onChange(c, s);
            }
          }),
          (o.handleSwatchHover = function (l, s) {
            var u = H0(l);
            if (u) {
              var c = Va(l, l.h || o.state.oldHue);
              o.props.onSwatchHover && o.props.onSwatchHover(c, s);
            }
          }),
          (o.state = za({}, Va(i.color, 0))),
          (o.debounce = wy(function (l, s, u) {
            l(s, u);
          }, 100)),
          o
        );
      }
      return (
        WR(
          a,
          [
            {
              key: "render",
              value: function () {
                var o = {};
                return (
                  this.props.onSwatchHover &&
                    (o.onSwatchHover = this.handleSwatchHover),
                  h.createElement(
                    t,
                    za(
                      {},
                      this.props,
                      this.state,
                      { onChange: this.handleChange },
                      o
                    )
                  )
                );
              },
            },
          ],
          [
            {
              key: "getDerivedStateFromProps",
              value: function (o, l) {
                return za({}, Va(o.color, l.oldHue));
              },
            },
          ]
        ),
        a
      );
    })(B.PureComponent || B.Component);
    return (
      (n.propTypes = za({}, t.propTypes)),
      (n.defaultProps = za({}, t.defaultProps, {
        color: { h: 250, s: 0.5, l: 0.2, a: 1 },
      })),
      n
    );
  },
  KR =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  XR = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function QR(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function U0(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function qR(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var ZR = function (t) {
    var n =
      arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "span";
    return (function (r) {
      qR(a, r);
      function a() {
        var i, o, l, s;
        QR(this, a);
        for (var u = arguments.length, c = Array(u), f = 0; f < u; f++)
          c[f] = arguments[f];
        return (
          (s =
            ((o =
              ((l = U0(
                this,
                (i = a.__proto__ || Object.getPrototypeOf(a)).call.apply(
                  i,
                  [this].concat(c)
                )
              )),
              l)),
            (l.state = { focus: !1 }),
            (l.handleFocus = function () {
              return l.setState({ focus: !0 });
            }),
            (l.handleBlur = function () {
              return l.setState({ focus: !1 });
            }),
            o)),
          U0(l, s)
        );
      }
      return (
        XR(a, [
          {
            key: "render",
            value: function () {
              return h.createElement(
                n,
                { onFocus: this.handleFocus, onBlur: this.handleBlur },
                h.createElement(t, KR({}, this.props, this.state))
              );
            },
          },
        ]),
        a
      );
    })(h.Component);
  },
  W0 =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  JR = 13,
  eN = function (t) {
    var n = t.color,
      r = t.style,
      a = t.onClick,
      i = a === void 0 ? function () {} : a,
      o = t.onHover,
      l = t.title,
      s = l === void 0 ? n : l,
      u = t.children,
      c = t.focus,
      f = t.focusStyle,
      d = f === void 0 ? {} : f,
      m = n === "transparent",
      x = H({
        default: {
          swatch: W0(
            {
              background: n,
              height: "100%",
              width: "100%",
              cursor: "pointer",
              position: "relative",
              outline: "none",
            },
            r,
            c ? d : {}
          ),
        },
      }),
      w = function (_) {
        return i(n, _);
      },
      E = function (_) {
        return _.keyCode === JR && i(n, _);
      },
      v = function (_) {
        return o(n, _);
      },
      p = {};
    return (
      o && (p.onMouseOver = v),
      h.createElement(
        "div",
        W0(
          { style: x.swatch, onClick: w, title: s, tabIndex: 0, onKeyDown: E },
          p
        ),
        u,
        m &&
          h.createElement(ka, {
            borderRadius: x.swatch.borderRadius,
            boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.1)",
          })
      )
    );
  };
const cr = ZR(eN);
var tN = function (t) {
    var n = t.direction,
      r = H(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: n === "vertical" }
      );
    return h.createElement("div", { style: r.picker });
  },
  nN =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Ey = function (t) {
    var n = t.rgb,
      r = t.hsl,
      a = t.width,
      i = t.height,
      o = t.onChange,
      l = t.direction,
      s = t.style,
      u = t.renderers,
      c = t.pointer,
      f = t.className,
      d = f === void 0 ? "" : f,
      m = H({
        default: {
          picker: { position: "relative", width: a, height: i },
          alpha: { radius: "2px", style: s },
        },
      });
    return h.createElement(
      "div",
      { style: m.picker, className: "alpha-picker " + d },
      h.createElement(
        vd,
        nN({}, m.alpha, {
          rgb: n,
          hsl: r,
          pointer: c,
          renderers: u,
          onChange: o,
          direction: l,
        })
      )
    );
  };
Ey.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: tN,
};
Ve(Ey);
function _y(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = Array(r); ++n < r; )
    a[n] = t(e[n], n, e);
  return a;
}
var rN = "__lodash_hash_undefined__";
function aN(e) {
  return this.__data__.set(e, rN), this;
}
function iN(e) {
  return this.__data__.has(e);
}
function Ll(e) {
  var t = -1,
    n = e == null ? 0 : e.length;
  for (this.__data__ = new nn(); ++t < n; ) this.add(e[t]);
}
Ll.prototype.add = Ll.prototype.push = aN;
Ll.prototype.has = iN;
function oN(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length; ++n < r; )
    if (t(e[n], n, e)) return !0;
  return !1;
}
function lN(e, t) {
  return e.has(t);
}
var sN = 1,
  uN = 2;
function Cy(e, t, n, r, a, i) {
  var o = n & sN,
    l = e.length,
    s = t.length;
  if (l != s && !(o && s > l)) return !1;
  var u = i.get(e),
    c = i.get(t);
  if (u && c) return u == t && c == e;
  var f = -1,
    d = !0,
    m = n & uN ? new Ll() : void 0;
  for (i.set(e, t), i.set(t, e); ++f < l; ) {
    var x = e[f],
      w = t[f];
    if (r) var E = o ? r(w, x, f, t, e, i) : r(x, w, f, e, t, i);
    if (E !== void 0) {
      if (E) continue;
      d = !1;
      break;
    }
    if (m) {
      if (
        !oN(t, function (v, p) {
          if (!lN(m, p) && (x === v || a(x, v, n, r, i))) return m.push(p);
        })
      ) {
        d = !1;
        break;
      }
    } else if (!(x === w || a(x, w, n, r, i))) {
      d = !1;
      break;
    }
  }
  return i.delete(e), i.delete(t), d;
}
function cN(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r, a) {
      n[++t] = [a, r];
    }),
    n
  );
}
function fN(e) {
  var t = -1,
    n = Array(e.size);
  return (
    e.forEach(function (r) {
      n[++t] = r;
    }),
    n
  );
}
var dN = 1,
  pN = 2,
  hN = "[object Boolean]",
  gN = "[object Date]",
  vN = "[object Error]",
  mN = "[object Map]",
  yN = "[object Number]",
  bN = "[object RegExp]",
  xN = "[object Set]",
  wN = "[object String]",
  SN = "[object Symbol]",
  kN = "[object ArrayBuffer]",
  EN = "[object DataView]",
  G0 = Cn ? Cn.prototype : void 0,
  hu = G0 ? G0.valueOf : void 0;
function _N(e, t, n, r, a, i, o) {
  switch (n) {
    case EN:
      if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset)
        return !1;
      (e = e.buffer), (t = t.buffer);
    case kN:
      return !(e.byteLength != t.byteLength || !i(new Rl(e), new Rl(t)));
    case hN:
    case gN:
    case yN:
      return Ji(+e, +t);
    case vN:
      return e.name == t.name && e.message == t.message;
    case bN:
    case wN:
      return e == t + "";
    case mN:
      var l = cN;
    case xN:
      var s = r & dN;
      if ((l || (l = fN), e.size != t.size && !s)) return !1;
      var u = o.get(e);
      if (u) return u == t;
      (r |= pN), o.set(e, t);
      var c = Cy(l(e), l(t), r, a, i, o);
      return o.delete(e), c;
    case SN:
      if (hu) return hu.call(e) == hu.call(t);
  }
  return !1;
}
function CN(e, t) {
  for (var n = -1, r = t.length, a = e.length; ++n < r; ) e[a + n] = t[n];
  return e;
}
function $N(e, t, n) {
  var r = t(e);
  return et(e) ? r : CN(r, n(e));
}
function ON(e, t) {
  for (var n = -1, r = e == null ? 0 : e.length, a = 0, i = []; ++n < r; ) {
    var o = e[n];
    t(o, n, e) && (i[a++] = o);
  }
  return i;
}
function AN() {
  return [];
}
var TN = Object.prototype,
  PN = TN.propertyIsEnumerable,
  V0 = Object.getOwnPropertySymbols,
  jN = V0
    ? function (e) {
        return e == null
          ? []
          : ((e = Object(e)),
            ON(V0(e), function (t) {
              return PN.call(e, t);
            }));
      }
    : AN;
const RN = jN;
function Y0(e) {
  return $N(e, kd, RN);
}
var NN = 1,
  FN = Object.prototype,
  IN = FN.hasOwnProperty;
function LN(e, t, n, r, a, i) {
  var o = n & NN,
    l = Y0(e),
    s = l.length,
    u = Y0(t),
    c = u.length;
  if (s != c && !o) return !1;
  for (var f = s; f--; ) {
    var d = l[f];
    if (!(o ? d in t : IN.call(t, d))) return !1;
  }
  var m = i.get(e),
    x = i.get(t);
  if (m && x) return m == t && x == e;
  var w = !0;
  i.set(e, t), i.set(t, e);
  for (var E = o; ++f < s; ) {
    d = l[f];
    var v = e[d],
      p = t[d];
    if (r) var b = o ? r(p, v, d, t, e, i) : r(v, p, d, e, t, i);
    if (!(b === void 0 ? v === p || a(v, p, n, r, i) : b)) {
      w = !1;
      break;
    }
    E || (E = d == "constructor");
  }
  if (w && !E) {
    var _ = e.constructor,
      $ = t.constructor;
    _ != $ &&
      "constructor" in e &&
      "constructor" in t &&
      !(
        typeof _ == "function" &&
        _ instanceof _ &&
        typeof $ == "function" &&
        $ instanceof $
      ) &&
      (w = !1);
  }
  return i.delete(e), i.delete(t), w;
}
var MN = ur(Et, "DataView");
const Nc = MN;
var zN = ur(Et, "Promise");
const Fc = zN;
var DN = ur(Et, "Set");
const Ic = DN;
var BN = ur(Et, "WeakMap");
const Lc = BN;
var K0 = "[object Map]",
  HN = "[object Object]",
  X0 = "[object Promise]",
  Q0 = "[object Set]",
  q0 = "[object WeakMap]",
  Z0 = "[object DataView]",
  UN = sr(Nc),
  WN = sr(Fi),
  GN = sr(Fc),
  VN = sr(Ic),
  YN = sr(Lc),
  Dn = lr;
((Nc && Dn(new Nc(new ArrayBuffer(1))) != Z0) ||
  (Fi && Dn(new Fi()) != K0) ||
  (Fc && Dn(Fc.resolve()) != X0) ||
  (Ic && Dn(new Ic()) != Q0) ||
  (Lc && Dn(new Lc()) != q0)) &&
  (Dn = function (e) {
    var t = lr(e),
      n = t == HN ? e.constructor : void 0,
      r = n ? sr(n) : "";
    if (r)
      switch (r) {
        case UN:
          return Z0;
        case WN:
          return K0;
        case GN:
          return X0;
        case VN:
          return Q0;
        case YN:
          return q0;
      }
    return t;
  });
const J0 = Dn;
var KN = 1,
  eg = "[object Arguments]",
  tg = "[object Array]",
  jo = "[object Object]",
  XN = Object.prototype,
  ng = XN.hasOwnProperty;
function QN(e, t, n, r, a, i) {
  var o = et(e),
    l = et(t),
    s = o ? tg : J0(e),
    u = l ? tg : J0(t);
  (s = s == eg ? jo : s), (u = u == eg ? jo : u);
  var c = s == jo,
    f = u == jo,
    d = s == u;
  if (d && Fl(e)) {
    if (!Fl(t)) return !1;
    (o = !0), (c = !1);
  }
  if (d && !c)
    return (
      i || (i = new Nt()),
      o || wd(e) ? Cy(e, t, n, r, a, i) : _N(e, t, s, n, r, a, i)
    );
  if (!(n & KN)) {
    var m = c && ng.call(e, "__wrapped__"),
      x = f && ng.call(t, "__wrapped__");
    if (m || x) {
      var w = m ? e.value() : e,
        E = x ? t.value() : t;
      return i || (i = new Nt()), a(w, E, n, r, i);
    }
  }
  return d ? (i || (i = new Nt()), LN(e, t, n, r, a, i)) : !1;
}
function _d(e, t, n, r, a) {
  return e === t
    ? !0
    : e == null || t == null || (!$n(e) && !$n(t))
    ? e !== e && t !== t
    : QN(e, t, n, r, _d, a);
}
var qN = 1,
  ZN = 2;
function JN(e, t, n, r) {
  var a = n.length,
    i = a,
    o = !r;
  if (e == null) return !i;
  for (e = Object(e); a--; ) {
    var l = n[a];
    if (o && l[2] ? l[1] !== e[l[0]] : !(l[0] in e)) return !1;
  }
  for (; ++a < i; ) {
    l = n[a];
    var s = l[0],
      u = e[s],
      c = l[1];
    if (o && l[2]) {
      if (u === void 0 && !(s in e)) return !1;
    } else {
      var f = new Nt();
      if (r) var d = r(u, c, s, e, t, f);
      if (!(d === void 0 ? _d(c, u, qN | ZN, r, f) : d)) return !1;
    }
  }
  return !0;
}
function $y(e) {
  return e === e && !dt(e);
}
function eF(e) {
  for (var t = kd(e), n = t.length; n--; ) {
    var r = t[n],
      a = e[r];
    t[n] = [r, a, $y(a)];
  }
  return t;
}
function Oy(e, t) {
  return function (n) {
    return n == null ? !1 : n[e] === t && (t !== void 0 || e in Object(n));
  };
}
function tF(e) {
  var t = eF(e);
  return t.length == 1 && t[0][2]
    ? Oy(t[0][0], t[0][1])
    : function (n) {
        return n === e || JN(n, e, t);
      };
}
var nF = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
  rF = /^\w*$/;
function Cd(e, t) {
  if (et(e)) return !1;
  var n = typeof e;
  return n == "number" || n == "symbol" || n == "boolean" || e == null || ws(e)
    ? !0
    : rF.test(e) || !nF.test(e) || (t != null && e in Object(t));
}
var aF = "Expected a function";
function $d(e, t) {
  if (typeof e != "function" || (t != null && typeof t != "function"))
    throw new TypeError(aF);
  var n = function () {
    var r = arguments,
      a = t ? t.apply(this, r) : r[0],
      i = n.cache;
    if (i.has(a)) return i.get(a);
    var o = e.apply(this, r);
    return (n.cache = i.set(a, o) || i), o;
  };
  return (n.cache = new ($d.Cache || nn)()), n;
}
$d.Cache = nn;
var iF = 500;
function oF(e) {
  var t = $d(e, function (r) {
      return n.size === iF && n.clear(), r;
    }),
    n = t.cache;
  return t;
}
var lF =
    /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
  sF = /\\(\\)?/g,
  uF = oF(function (e) {
    var t = [];
    return (
      e.charCodeAt(0) === 46 && t.push(""),
      e.replace(lF, function (n, r, a, i) {
        t.push(a ? i.replace(sF, "$1") : r || n);
      }),
      t
    );
  });
const cF = uF;
var fF = 1 / 0,
  rg = Cn ? Cn.prototype : void 0,
  ag = rg ? rg.toString : void 0;
function Ay(e) {
  if (typeof e == "string") return e;
  if (et(e)) return _y(e, Ay) + "";
  if (ws(e)) return ag ? ag.call(e) : "";
  var t = e + "";
  return t == "0" && 1 / e == -fF ? "-0" : t;
}
function dF(e) {
  return e == null ? "" : Ay(e);
}
function Ty(e, t) {
  return et(e) ? e : Cd(e, t) ? [e] : cF(dF(e));
}
var pF = 1 / 0;
function ks(e) {
  if (typeof e == "string" || ws(e)) return e;
  var t = e + "";
  return t == "0" && 1 / e == -pF ? "-0" : t;
}
function Py(e, t) {
  t = Ty(t, e);
  for (var n = 0, r = t.length; e != null && n < r; ) e = e[ks(t[n++])];
  return n && n == r ? e : void 0;
}
function hF(e, t, n) {
  var r = e == null ? void 0 : Py(e, t);
  return r === void 0 ? n : r;
}
function gF(e, t) {
  return e != null && t in Object(e);
}
function vF(e, t, n) {
  t = Ty(t, e);
  for (var r = -1, a = t.length, i = !1; ++r < a; ) {
    var o = ks(t[r]);
    if (!(i = e != null && n(e, o))) break;
    e = e[o];
  }
  return i || ++r != a
    ? i
    : ((a = e == null ? 0 : e.length),
      !!a && xd(a) && Sd(o, a) && (et(e) || Nl(e)));
}
function mF(e, t) {
  return e != null && vF(e, t, gF);
}
var yF = 1,
  bF = 2;
function xF(e, t) {
  return Cd(e) && $y(t)
    ? Oy(ks(e), t)
    : function (n) {
        var r = hF(n, e);
        return r === void 0 && r === t ? mF(n, e) : _d(t, r, yF | bF);
      };
}
function wF(e) {
  return function (t) {
    return t == null ? void 0 : t[e];
  };
}
function SF(e) {
  return function (t) {
    return Py(t, e);
  };
}
function kF(e) {
  return Cd(e) ? wF(ks(e)) : SF(e);
}
function EF(e) {
  return typeof e == "function"
    ? e
    : e == null
    ? xs
    : typeof e == "object"
    ? et(e)
      ? xF(e[0], e[1])
      : tF(e)
    : kF(e);
}
function _F(e, t) {
  var n = -1,
    r = _a(e) ? Array(e.length) : [];
  return (
    Sy(e, function (a, i, o) {
      r[++n] = t(a, i, o);
    }),
    r
  );
}
function fr(e, t) {
  var n = et(e) ? _y : _F;
  return n(e, EF(t));
}
var CF = function (t) {
    var n = t.colors,
      r = t.onClick,
      a = t.onSwatchHover,
      i = H({
        default: {
          swatches: { marginRight: "-10px" },
          swatch: {
            width: "22px",
            height: "22px",
            float: "left",
            marginRight: "10px",
            marginBottom: "10px",
            borderRadius: "4px",
          },
          clear: { clear: "both" },
        },
      });
    return h.createElement(
      "div",
      { style: i.swatches },
      fr(n, function (o) {
        return h.createElement(cr, {
          key: o,
          color: o,
          style: i.swatch,
          onClick: r,
          onHover: a,
          focusStyle: { boxShadow: "0 0 4px " + o },
        });
      }),
      h.createElement("div", { style: i.clear })
    );
  },
  Od = function (t) {
    var n = t.onChange,
      r = t.onSwatchHover,
      a = t.hex,
      i = t.colors,
      o = t.width,
      l = t.triangle,
      s = t.styles,
      u = s === void 0 ? {} : s,
      c = t.className,
      f = c === void 0 ? "" : c,
      d = a === "transparent",
      m = function (E, v) {
        jn(E) && n({ hex: E, source: "hex" }, v);
      },
      x = H(
        Ge(
          {
            default: {
              card: {
                width: o,
                background: "#fff",
                boxShadow: "0 1px rgba(0,0,0,.1)",
                borderRadius: "6px",
                position: "relative",
              },
              head: {
                height: "110px",
                background: a,
                borderRadius: "6px 6px 0 0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              },
              body: { padding: "10px" },
              label: { fontSize: "18px", color: Ed(a), position: "relative" },
              triangle: {
                width: "0px",
                height: "0px",
                borderStyle: "solid",
                borderWidth: "0 10px 10px 10px",
                borderColor: "transparent transparent " + a + " transparent",
                position: "absolute",
                top: "-10px",
                left: "50%",
                marginLeft: "-10px",
              },
              input: {
                width: "100%",
                fontSize: "12px",
                color: "#666",
                border: "0px",
                outline: "none",
                height: "22px",
                boxShadow: "inset 0 0 0 1px #ddd",
                borderRadius: "4px",
                padding: "0 7px",
                boxSizing: "border-box",
              },
            },
            "hide-triangle": { triangle: { display: "none" } },
          },
          u
        ),
        { "hide-triangle": l === "hide" }
      );
    return h.createElement(
      "div",
      { style: x.card, className: "block-picker " + f },
      h.createElement("div", { style: x.triangle }),
      h.createElement(
        "div",
        { style: x.head },
        d && h.createElement(ka, { borderRadius: "6px 6px 0 0" }),
        h.createElement("div", { style: x.label }, a)
      ),
      h.createElement(
        "div",
        { style: x.body },
        h.createElement(CF, { colors: i, onClick: m, onSwatchHover: r }),
        h.createElement(Y, { style: { input: x.input }, value: a, onChange: m })
      )
    );
  };
Od.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  colors: C.arrayOf(C.string),
  triangle: C.oneOf(["top", "hide"]),
  styles: C.object,
};
Od.defaultProps = {
  width: 170,
  colors: [
    "#D9E3F0",
    "#F47373",
    "#697689",
    "#37D67A",
    "#2CCCE4",
    "#555555",
    "#dce775",
    "#ff8a65",
    "#ba68c8",
  ],
  triangle: "top",
  styles: {},
};
Ve(Od);
var hr = {
    50: "#ffebee",
    100: "#ffcdd2",
    200: "#ef9a9a",
    300: "#e57373",
    400: "#ef5350",
    500: "#f44336",
    600: "#e53935",
    700: "#d32f2f",
    800: "#c62828",
    900: "#b71c1c",
    a100: "#ff8a80",
    a200: "#ff5252",
    a400: "#ff1744",
    a700: "#d50000",
  },
  gr = {
    50: "#fce4ec",
    100: "#f8bbd0",
    200: "#f48fb1",
    300: "#f06292",
    400: "#ec407a",
    500: "#e91e63",
    600: "#d81b60",
    700: "#c2185b",
    800: "#ad1457",
    900: "#880e4f",
    a100: "#ff80ab",
    a200: "#ff4081",
    a400: "#f50057",
    a700: "#c51162",
  },
  vr = {
    50: "#f3e5f5",
    100: "#e1bee7",
    200: "#ce93d8",
    300: "#ba68c8",
    400: "#ab47bc",
    500: "#9c27b0",
    600: "#8e24aa",
    700: "#7b1fa2",
    800: "#6a1b9a",
    900: "#4a148c",
    a100: "#ea80fc",
    a200: "#e040fb",
    a400: "#d500f9",
    a700: "#aa00ff",
  },
  mr = {
    50: "#ede7f6",
    100: "#d1c4e9",
    200: "#b39ddb",
    300: "#9575cd",
    400: "#7e57c2",
    500: "#673ab7",
    600: "#5e35b1",
    700: "#512da8",
    800: "#4527a0",
    900: "#311b92",
    a100: "#b388ff",
    a200: "#7c4dff",
    a400: "#651fff",
    a700: "#6200ea",
  },
  yr = {
    50: "#e8eaf6",
    100: "#c5cae9",
    200: "#9fa8da",
    300: "#7986cb",
    400: "#5c6bc0",
    500: "#3f51b5",
    600: "#3949ab",
    700: "#303f9f",
    800: "#283593",
    900: "#1a237e",
    a100: "#8c9eff",
    a200: "#536dfe",
    a400: "#3d5afe",
    a700: "#304ffe",
  },
  br = {
    50: "#e3f2fd",
    100: "#bbdefb",
    200: "#90caf9",
    300: "#64b5f6",
    400: "#42a5f5",
    500: "#2196f3",
    600: "#1e88e5",
    700: "#1976d2",
    800: "#1565c0",
    900: "#0d47a1",
    a100: "#82b1ff",
    a200: "#448aff",
    a400: "#2979ff",
    a700: "#2962ff",
  },
  xr = {
    50: "#e1f5fe",
    100: "#b3e5fc",
    200: "#81d4fa",
    300: "#4fc3f7",
    400: "#29b6f6",
    500: "#03a9f4",
    600: "#039be5",
    700: "#0288d1",
    800: "#0277bd",
    900: "#01579b",
    a100: "#80d8ff",
    a200: "#40c4ff",
    a400: "#00b0ff",
    a700: "#0091ea",
  },
  wr = {
    50: "#e0f7fa",
    100: "#b2ebf2",
    200: "#80deea",
    300: "#4dd0e1",
    400: "#26c6da",
    500: "#00bcd4",
    600: "#00acc1",
    700: "#0097a7",
    800: "#00838f",
    900: "#006064",
    a100: "#84ffff",
    a200: "#18ffff",
    a400: "#00e5ff",
    a700: "#00b8d4",
  },
  Sr = {
    50: "#e0f2f1",
    100: "#b2dfdb",
    200: "#80cbc4",
    300: "#4db6ac",
    400: "#26a69a",
    500: "#009688",
    600: "#00897b",
    700: "#00796b",
    800: "#00695c",
    900: "#004d40",
    a100: "#a7ffeb",
    a200: "#64ffda",
    a400: "#1de9b6",
    a700: "#00bfa5",
  },
  Ya = {
    50: "#e8f5e9",
    100: "#c8e6c9",
    200: "#a5d6a7",
    300: "#81c784",
    400: "#66bb6a",
    500: "#4caf50",
    600: "#43a047",
    700: "#388e3c",
    800: "#2e7d32",
    900: "#1b5e20",
    a100: "#b9f6ca",
    a200: "#69f0ae",
    a400: "#00e676",
    a700: "#00c853",
  },
  kr = {
    50: "#f1f8e9",
    100: "#dcedc8",
    200: "#c5e1a5",
    300: "#aed581",
    400: "#9ccc65",
    500: "#8bc34a",
    600: "#7cb342",
    700: "#689f38",
    800: "#558b2f",
    900: "#33691e",
    a100: "#ccff90",
    a200: "#b2ff59",
    a400: "#76ff03",
    a700: "#64dd17",
  },
  Er = {
    50: "#f9fbe7",
    100: "#f0f4c3",
    200: "#e6ee9c",
    300: "#dce775",
    400: "#d4e157",
    500: "#cddc39",
    600: "#c0ca33",
    700: "#afb42b",
    800: "#9e9d24",
    900: "#827717",
    a100: "#f4ff81",
    a200: "#eeff41",
    a400: "#c6ff00",
    a700: "#aeea00",
  },
  _r = {
    50: "#fffde7",
    100: "#fff9c4",
    200: "#fff59d",
    300: "#fff176",
    400: "#ffee58",
    500: "#ffeb3b",
    600: "#fdd835",
    700: "#fbc02d",
    800: "#f9a825",
    900: "#f57f17",
    a100: "#ffff8d",
    a200: "#ffff00",
    a400: "#ffea00",
    a700: "#ffd600",
  },
  Cr = {
    50: "#fff8e1",
    100: "#ffecb3",
    200: "#ffe082",
    300: "#ffd54f",
    400: "#ffca28",
    500: "#ffc107",
    600: "#ffb300",
    700: "#ffa000",
    800: "#ff8f00",
    900: "#ff6f00",
    a100: "#ffe57f",
    a200: "#ffd740",
    a400: "#ffc400",
    a700: "#ffab00",
  },
  $r = {
    50: "#fff3e0",
    100: "#ffe0b2",
    200: "#ffcc80",
    300: "#ffb74d",
    400: "#ffa726",
    500: "#ff9800",
    600: "#fb8c00",
    700: "#f57c00",
    800: "#ef6c00",
    900: "#e65100",
    a100: "#ffd180",
    a200: "#ffab40",
    a400: "#ff9100",
    a700: "#ff6d00",
  },
  Or = {
    50: "#fbe9e7",
    100: "#ffccbc",
    200: "#ffab91",
    300: "#ff8a65",
    400: "#ff7043",
    500: "#ff5722",
    600: "#f4511e",
    700: "#e64a19",
    800: "#d84315",
    900: "#bf360c",
    a100: "#ff9e80",
    a200: "#ff6e40",
    a400: "#ff3d00",
    a700: "#dd2c00",
  },
  Ar = {
    50: "#efebe9",
    100: "#d7ccc8",
    200: "#bcaaa4",
    300: "#a1887f",
    400: "#8d6e63",
    500: "#795548",
    600: "#6d4c41",
    700: "#5d4037",
    800: "#4e342e",
    900: "#3e2723",
  },
  Tr = {
    50: "#eceff1",
    100: "#cfd8dc",
    200: "#b0bec5",
    300: "#90a4ae",
    400: "#78909c",
    500: "#607d8b",
    600: "#546e7a",
    700: "#455a64",
    800: "#37474f",
    900: "#263238",
  },
  jy = function (t) {
    var n = t.color,
      r = t.onClick,
      a = t.onSwatchHover,
      i = t.hover,
      o = t.active,
      l = t.circleSize,
      s = t.circleSpacing,
      u = H(
        {
          default: {
            swatch: {
              width: l,
              height: l,
              marginRight: s,
              marginBottom: s,
              transform: "scale(1)",
              transition: "100ms transform ease",
            },
            Swatch: {
              borderRadius: "50%",
              background: "transparent",
              boxShadow: "inset 0 0 0 " + (l / 2 + 1) + "px " + n,
              transition: "100ms box-shadow ease",
            },
          },
          hover: { swatch: { transform: "scale(1.2)" } },
          active: { Swatch: { boxShadow: "inset 0 0 0 3px " + n } },
        },
        { hover: i, active: o }
      );
    return h.createElement(
      "div",
      { style: u.swatch },
      h.createElement(cr, {
        style: u.Swatch,
        color: n,
        onClick: r,
        onHover: a,
        focusStyle: { boxShadow: u.Swatch.boxShadow + ", 0 0 5px " + n },
      })
    );
  };
jy.defaultProps = { circleSize: 28, circleSpacing: 14 };
const $F = gd(jy);
var Ad = function (t) {
  var n = t.width,
    r = t.onChange,
    a = t.onSwatchHover,
    i = t.colors,
    o = t.hex,
    l = t.circleSize,
    s = t.styles,
    u = s === void 0 ? {} : s,
    c = t.circleSpacing,
    f = t.className,
    d = f === void 0 ? "" : f,
    m = H(
      Ge(
        {
          default: {
            card: {
              width: n,
              display: "flex",
              flexWrap: "wrap",
              marginRight: -c,
              marginBottom: -c,
            },
          },
        },
        u
      )
    ),
    x = function (E, v) {
      return r({ hex: E, source: "hex" }, v);
    };
  return h.createElement(
    "div",
    { style: m.card, className: "circle-picker " + d },
    fr(i, function (w) {
      return h.createElement($F, {
        key: w,
        color: w,
        onClick: x,
        onSwatchHover: a,
        active: o === w.toLowerCase(),
        circleSize: l,
        circleSpacing: c,
      });
    })
  );
};
Ad.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  circleSize: C.number,
  circleSpacing: C.number,
  styles: C.object,
};
Ad.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [
    hr[500],
    gr[500],
    vr[500],
    mr[500],
    yr[500],
    br[500],
    xr[500],
    wr[500],
    Sr[500],
    Ya[500],
    kr[500],
    Er[500],
    _r[500],
    Cr[500],
    $r[500],
    Or[500],
    Ar[500],
    Tr[500],
  ],
  styles: {},
};
Ve(Ad);
function ig(e) {
  return e === void 0;
}
var Ry = {};
Object.defineProperty(Ry, "__esModule", { value: !0 });
var og =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  OF = B,
  lg = AF(OF);
function AF(e) {
  return e && e.__esModule ? e : { default: e };
}
function TF(e, t) {
  var n = {};
  for (var r in e)
    t.indexOf(r) >= 0 ||
      (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
  return n;
}
var Ro = 24,
  PF = (Ry.default = function (e) {
    var t = e.fill,
      n = t === void 0 ? "currentColor" : t,
      r = e.width,
      a = r === void 0 ? Ro : r,
      i = e.height,
      o = i === void 0 ? Ro : i,
      l = e.style,
      s = l === void 0 ? {} : l,
      u = TF(e, ["fill", "width", "height", "style"]);
    return lg.default.createElement(
      "svg",
      og(
        {
          viewBox: "0 0 " + Ro + " " + Ro,
          style: og({ fill: n, width: a, height: o }, s),
        },
        u
      ),
      lg.default.createElement("path", {
        d: "M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",
      })
    );
  }),
  jF = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function RF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function NF(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function FF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Ny = (function (e) {
  FF(t, e);
  function t(n) {
    RF(this, t);
    var r = NF(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return (
      (r.toggleViews = function () {
        r.state.view === "hex"
          ? r.setState({ view: "rgb" })
          : r.state.view === "rgb"
          ? r.setState({ view: "hsl" })
          : r.state.view === "hsl" &&
            (r.props.hsl.a === 1
              ? r.setState({ view: "hex" })
              : r.setState({ view: "rgb" }));
      }),
      (r.handleChange = function (a, i) {
        a.hex
          ? jn(a.hex) && r.props.onChange({ hex: a.hex, source: "hex" }, i)
          : a.r || a.g || a.b
          ? r.props.onChange(
              {
                r: a.r || r.props.rgb.r,
                g: a.g || r.props.rgb.g,
                b: a.b || r.props.rgb.b,
                source: "rgb",
              },
              i
            )
          : a.a
          ? (a.a < 0 ? (a.a = 0) : a.a > 1 && (a.a = 1),
            r.props.onChange(
              {
                h: r.props.hsl.h,
                s: r.props.hsl.s,
                l: r.props.hsl.l,
                a: Math.round(a.a * 100) / 100,
                source: "rgb",
              },
              i
            ))
          : (a.h || a.s || a.l) &&
            (typeof a.s == "string" &&
              a.s.includes("%") &&
              (a.s = a.s.replace("%", "")),
            typeof a.l == "string" &&
              a.l.includes("%") &&
              (a.l = a.l.replace("%", "")),
            a.s == 1 ? (a.s = 0.01) : a.l == 1 && (a.l = 0.01),
            r.props.onChange(
              {
                h: a.h || r.props.hsl.h,
                s: Number(ig(a.s) ? r.props.hsl.s : a.s),
                l: Number(ig(a.l) ? r.props.hsl.l : a.l),
                source: "hsl",
              },
              i
            ));
      }),
      (r.showHighlight = function (a) {
        a.currentTarget.style.background = "#eee";
      }),
      (r.hideHighlight = function (a) {
        a.currentTarget.style.background = "transparent";
      }),
      n.hsl.a !== 1 && n.view === "hex"
        ? (r.state = { view: "rgb" })
        : (r.state = { view: n.view }),
      r
    );
  }
  return (
    jF(
      t,
      [
        {
          key: "render",
          value: function () {
            var r = this,
              a = H(
                {
                  default: {
                    wrap: { paddingTop: "16px", display: "flex" },
                    fields: { flex: "1", display: "flex", marginLeft: "-6px" },
                    field: { paddingLeft: "6px", width: "100%" },
                    alpha: { paddingLeft: "6px", width: "100%" },
                    toggle: {
                      width: "32px",
                      textAlign: "right",
                      position: "relative",
                    },
                    icon: {
                      marginRight: "-4px",
                      marginTop: "12px",
                      cursor: "pointer",
                      position: "relative",
                    },
                    iconHighlight: {
                      position: "absolute",
                      width: "24px",
                      height: "28px",
                      background: "#eee",
                      borderRadius: "4px",
                      top: "10px",
                      left: "12px",
                      display: "none",
                    },
                    input: {
                      fontSize: "11px",
                      color: "#333",
                      width: "100%",
                      borderRadius: "2px",
                      border: "none",
                      boxShadow: "inset 0 0 0 1px #dadada",
                      height: "21px",
                      textAlign: "center",
                    },
                    label: {
                      textTransform: "uppercase",
                      fontSize: "11px",
                      lineHeight: "11px",
                      color: "#969696",
                      textAlign: "center",
                      display: "block",
                      marginTop: "12px",
                    },
                    svg: {
                      fill: "#333",
                      width: "24px",
                      height: "24px",
                      border: "1px transparent solid",
                      borderRadius: "5px",
                    },
                  },
                  disableAlpha: { alpha: { display: "none" } },
                },
                this.props,
                this.state
              ),
              i = void 0;
            return (
              this.state.view === "hex"
                ? (i = h.createElement(
                    "div",
                    { style: a.fields, className: "flexbox-fix" },
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "hex",
                        value: this.props.hex,
                        onChange: this.handleChange,
                      })
                    )
                  ))
                : this.state.view === "rgb"
                ? (i = h.createElement(
                    "div",
                    { style: a.fields, className: "flexbox-fix" },
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "r",
                        value: this.props.rgb.r,
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "g",
                        value: this.props.rgb.g,
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "b",
                        value: this.props.rgb.b,
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.alpha },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "a",
                        value: this.props.rgb.a,
                        arrowOffset: 0.01,
                        onChange: this.handleChange,
                      })
                    )
                  ))
                : this.state.view === "hsl" &&
                  (i = h.createElement(
                    "div",
                    { style: a.fields, className: "flexbox-fix" },
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "h",
                        value: Math.round(this.props.hsl.h),
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "s",
                        value: Math.round(this.props.hsl.s * 100) + "%",
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.field },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "l",
                        value: Math.round(this.props.hsl.l * 100) + "%",
                        onChange: this.handleChange,
                      })
                    ),
                    h.createElement(
                      "div",
                      { style: a.alpha },
                      h.createElement(Y, {
                        style: { input: a.input, label: a.label },
                        label: "a",
                        value: this.props.hsl.a,
                        arrowOffset: 0.01,
                        onChange: this.handleChange,
                      })
                    )
                  )),
              h.createElement(
                "div",
                { style: a.wrap, className: "flexbox-fix" },
                i,
                h.createElement(
                  "div",
                  { style: a.toggle },
                  h.createElement(
                    "div",
                    {
                      style: a.icon,
                      onClick: this.toggleViews,
                      ref: function (l) {
                        return (r.icon = l);
                      },
                    },
                    h.createElement(PF, {
                      style: a.svg,
                      onMouseOver: this.showHighlight,
                      onMouseEnter: this.showHighlight,
                      onMouseOut: this.hideHighlight,
                    })
                  )
                )
              )
            );
          },
        },
      ],
      [
        {
          key: "getDerivedStateFromProps",
          value: function (r, a) {
            return r.hsl.a !== 1 && a.view === "hex" ? { view: "rgb" } : null;
          },
        },
      ]
    ),
    t
  );
})(h.Component);
Ny.defaultProps = { view: "hex" };
var sg = function () {
    var t = H({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          transform: "translate(-6px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return h.createElement("div", { style: t.picker });
  },
  IF = function () {
    var t = H({
      default: {
        picker: {
          width: "12px",
          height: "12px",
          borderRadius: "6px",
          boxShadow: "inset 0 0 0 1px #fff",
          transform: "translate(-6px, -6px)",
        },
      },
    });
    return h.createElement("div", { style: t.picker });
  },
  Td = function (t) {
    var n = t.width,
      r = t.onChange,
      a = t.disableAlpha,
      i = t.rgb,
      o = t.hsl,
      l = t.hsv,
      s = t.hex,
      u = t.renderers,
      c = t.styles,
      f = c === void 0 ? {} : c,
      d = t.className,
      m = d === void 0 ? "" : d,
      x = t.defaultView,
      w = H(
        Ge(
          {
            default: {
              picker: {
                width: n,
                background: "#fff",
                borderRadius: "2px",
                boxShadow: "0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)",
                boxSizing: "initial",
                fontFamily: "Menlo",
              },
              saturation: {
                width: "100%",
                paddingBottom: "55%",
                position: "relative",
                borderRadius: "2px 2px 0 0",
                overflow: "hidden",
              },
              Saturation: { radius: "2px 2px 0 0" },
              body: { padding: "16px 16px 12px" },
              controls: { display: "flex" },
              color: { width: "32px" },
              swatch: {
                marginTop: "6px",
                width: "16px",
                height: "16px",
                borderRadius: "8px",
                position: "relative",
                overflow: "hidden",
              },
              active: {
                absolute: "0px 0px 0px 0px",
                borderRadius: "8px",
                boxShadow: "inset 0 0 0 1px rgba(0,0,0,.1)",
                background:
                  "rgba(" + i.r + ", " + i.g + ", " + i.b + ", " + i.a + ")",
                zIndex: "2",
              },
              toggles: { flex: "1" },
              hue: {
                height: "10px",
                position: "relative",
                marginBottom: "8px",
              },
              Hue: { radius: "2px" },
              alpha: { height: "10px", position: "relative" },
              Alpha: { radius: "2px" },
            },
            disableAlpha: {
              color: { width: "22px" },
              alpha: { display: "none" },
              hue: { marginBottom: "0px" },
              swatch: { width: "10px", height: "10px", marginTop: "0px" },
            },
          },
          f
        ),
        { disableAlpha: a }
      );
    return h.createElement(
      "div",
      { style: w.picker, className: "chrome-picker " + m },
      h.createElement(
        "div",
        { style: w.saturation },
        h.createElement(Ss, {
          style: w.Saturation,
          hsl: o,
          hsv: l,
          pointer: IF,
          onChange: r,
        })
      ),
      h.createElement(
        "div",
        { style: w.body },
        h.createElement(
          "div",
          { style: w.controls, className: "flexbox-fix" },
          h.createElement(
            "div",
            { style: w.color },
            h.createElement(
              "div",
              { style: w.swatch },
              h.createElement("div", { style: w.active }),
              h.createElement(ka, { renderers: u })
            )
          ),
          h.createElement(
            "div",
            { style: w.toggles },
            h.createElement(
              "div",
              { style: w.hue },
              h.createElement(Ea, {
                style: w.Hue,
                hsl: o,
                pointer: sg,
                onChange: r,
              })
            ),
            h.createElement(
              "div",
              { style: w.alpha },
              h.createElement(vd, {
                style: w.Alpha,
                rgb: i,
                hsl: o,
                pointer: sg,
                renderers: u,
                onChange: r,
              })
            )
          )
        ),
        h.createElement(Ny, {
          rgb: i,
          hsl: o,
          hex: s,
          view: x,
          onChange: r,
          disableAlpha: a,
        })
      )
    );
  };
Td.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  disableAlpha: C.bool,
  styles: C.object,
  defaultView: C.oneOf(["hex", "rgb", "hsl"]),
};
Td.defaultProps = { width: 225, disableAlpha: !1, styles: {} };
Ve(Td);
var LF = function (t) {
    var n = t.color,
      r = t.onClick,
      a = r === void 0 ? function () {} : r,
      i = t.onSwatchHover,
      o = t.active,
      l = H(
        {
          default: {
            color: {
              background: n,
              width: "15px",
              height: "15px",
              float: "left",
              marginRight: "5px",
              marginBottom: "5px",
              position: "relative",
              cursor: "pointer",
            },
            dot: {
              absolute: "5px 5px 5px 5px",
              background: Ed(n),
              borderRadius: "50%",
              opacity: "0",
            },
          },
          active: { dot: { opacity: "1" } },
          "color-#FFFFFF": {
            color: { boxShadow: "inset 0 0 0 1px #ddd" },
            dot: { background: "#000" },
          },
          transparent: { dot: { background: "#000" } },
        },
        {
          active: o,
          "color-#FFFFFF": n === "#FFFFFF",
          transparent: n === "transparent",
        }
      );
    return h.createElement(
      cr,
      {
        style: l.color,
        color: n,
        onClick: a,
        onHover: i,
        focusStyle: { boxShadow: "0 0 4px " + n },
      },
      h.createElement("div", { style: l.dot })
    );
  },
  MF = function (t) {
    var n = t.hex,
      r = t.rgb,
      a = t.onChange,
      i = H({
        default: {
          fields: {
            display: "flex",
            paddingBottom: "6px",
            paddingRight: "5px",
            position: "relative",
          },
          active: {
            position: "absolute",
            top: "6px",
            left: "5px",
            height: "9px",
            width: "9px",
            background: n,
          },
          HEXwrap: { flex: "6", position: "relative" },
          HEXinput: {
            width: "80%",
            padding: "0px",
            paddingLeft: "20%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          HEXlabel: { display: "none" },
          RGBwrap: { flex: "3", position: "relative" },
          RGBinput: {
            width: "70%",
            padding: "0px",
            paddingLeft: "30%",
            border: "none",
            outline: "none",
            background: "none",
            fontSize: "12px",
            color: "#333",
            height: "16px",
          },
          RGBlabel: {
            position: "absolute",
            top: "3px",
            left: "0px",
            lineHeight: "16px",
            textTransform: "uppercase",
            fontSize: "12px",
            color: "#999",
          },
        },
      }),
      o = function (s, u) {
        s.r || s.g || s.b
          ? a({ r: s.r || r.r, g: s.g || r.g, b: s.b || r.b, source: "rgb" }, u)
          : a({ hex: s.hex, source: "hex" }, u);
      };
    return h.createElement(
      "div",
      { style: i.fields, className: "flexbox-fix" },
      h.createElement("div", { style: i.active }),
      h.createElement(Y, {
        style: { wrap: i.HEXwrap, input: i.HEXinput, label: i.HEXlabel },
        label: "hex",
        value: n,
        onChange: o,
      }),
      h.createElement(Y, {
        style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
        label: "r",
        value: r.r,
        onChange: o,
      }),
      h.createElement(Y, {
        style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
        label: "g",
        value: r.g,
        onChange: o,
      }),
      h.createElement(Y, {
        style: { wrap: i.RGBwrap, input: i.RGBinput, label: i.RGBlabel },
        label: "b",
        value: r.b,
        onChange: o,
      })
    );
  },
  Pd = function (t) {
    var n = t.onChange,
      r = t.onSwatchHover,
      a = t.colors,
      i = t.hex,
      o = t.rgb,
      l = t.styles,
      s = l === void 0 ? {} : l,
      u = t.className,
      c = u === void 0 ? "" : u,
      f = H(
        Ge(
          {
            default: {
              Compact: { background: "#f6f6f6", radius: "4px" },
              compact: {
                paddingTop: "5px",
                paddingLeft: "5px",
                boxSizing: "initial",
                width: "240px",
              },
              clear: { clear: "both" },
            },
          },
          s
        )
      ),
      d = function (x, w) {
        x.hex ? jn(x.hex) && n({ hex: x.hex, source: "hex" }, w) : n(x, w);
      };
    return h.createElement(
      eo,
      { style: f.Compact, styles: s },
      h.createElement(
        "div",
        { style: f.compact, className: "compact-picker " + c },
        h.createElement(
          "div",
          null,
          fr(a, function (m) {
            return h.createElement(LF, {
              key: m,
              color: m,
              active: m.toLowerCase() === i,
              onClick: d,
              onSwatchHover: r,
            });
          }),
          h.createElement("div", { style: f.clear })
        ),
        h.createElement(MF, { hex: i, rgb: o, onChange: d })
      )
    );
  };
Pd.propTypes = { colors: C.arrayOf(C.string), styles: C.object };
Pd.defaultProps = {
  colors: [
    "#4D4D4D",
    "#999999",
    "#FFFFFF",
    "#F44E3B",
    "#FE9200",
    "#FCDC00",
    "#DBDF00",
    "#A4DD00",
    "#68CCCA",
    "#73D8FF",
    "#AEA1FF",
    "#FDA1FF",
    "#333333",
    "#808080",
    "#cccccc",
    "#D33115",
    "#E27300",
    "#FCC400",
    "#B0BC00",
    "#68BC00",
    "#16A5A5",
    "#009CE0",
    "#7B64FF",
    "#FA28FF",
    "#000000",
    "#666666",
    "#B3B3B3",
    "#9F0500",
    "#C45100",
    "#FB9E00",
    "#808900",
    "#194D33",
    "#0C797D",
    "#0062B1",
    "#653294",
    "#AB149E",
  ],
  styles: {},
};
Ve(Pd);
var zF = function (t) {
  var n = t.hover,
    r = t.color,
    a = t.onClick,
    i = t.onSwatchHover,
    o = {
      position: "relative",
      zIndex: "2",
      outline: "2px solid #fff",
      boxShadow: "0 0 5px 2px rgba(0,0,0,0.25)",
    },
    l = H(
      {
        default: { swatch: { width: "25px", height: "25px", fontSize: "0" } },
        hover: { swatch: o },
      },
      { hover: n }
    );
  return h.createElement(
    "div",
    { style: l.swatch },
    h.createElement(cr, { color: r, onClick: a, onHover: i, focusStyle: o })
  );
};
const DF = gd(zF);
var jd = function (t) {
  var n = t.width,
    r = t.colors,
    a = t.onChange,
    i = t.onSwatchHover,
    o = t.triangle,
    l = t.styles,
    s = l === void 0 ? {} : l,
    u = t.className,
    c = u === void 0 ? "" : u,
    f = H(
      Ge(
        {
          default: {
            card: {
              width: n,
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.2)",
              boxShadow: "0 3px 12px rgba(0,0,0,0.15)",
              borderRadius: "4px",
              position: "relative",
              padding: "5px",
              display: "flex",
              flexWrap: "wrap",
            },
            triangle: {
              position: "absolute",
              border: "7px solid transparent",
              borderBottomColor: "#fff",
            },
            triangleShadow: {
              position: "absolute",
              border: "8px solid transparent",
              borderBottomColor: "rgba(0,0,0,0.15)",
            },
          },
          "hide-triangle": {
            triangle: { display: "none" },
            triangleShadow: { display: "none" },
          },
          "top-left-triangle": {
            triangle: { top: "-14px", left: "10px" },
            triangleShadow: { top: "-16px", left: "9px" },
          },
          "top-right-triangle": {
            triangle: { top: "-14px", right: "10px" },
            triangleShadow: { top: "-16px", right: "9px" },
          },
          "bottom-left-triangle": {
            triangle: {
              top: "35px",
              left: "10px",
              transform: "rotate(180deg)",
            },
            triangleShadow: {
              top: "37px",
              left: "9px",
              transform: "rotate(180deg)",
            },
          },
          "bottom-right-triangle": {
            triangle: {
              top: "35px",
              right: "10px",
              transform: "rotate(180deg)",
            },
            triangleShadow: {
              top: "37px",
              right: "9px",
              transform: "rotate(180deg)",
            },
          },
        },
        s
      ),
      {
        "hide-triangle": o === "hide",
        "top-left-triangle": o === "top-left",
        "top-right-triangle": o === "top-right",
        "bottom-left-triangle": o === "bottom-left",
        "bottom-right-triangle": o === "bottom-right",
      }
    ),
    d = function (x, w) {
      return a({ hex: x, source: "hex" }, w);
    };
  return h.createElement(
    "div",
    { style: f.card, className: "github-picker " + c },
    h.createElement("div", { style: f.triangleShadow }),
    h.createElement("div", { style: f.triangle }),
    fr(r, function (m) {
      return h.createElement(DF, {
        color: m,
        key: m,
        onClick: d,
        onSwatchHover: i,
      });
    })
  );
};
jd.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  colors: C.arrayOf(C.string),
  triangle: C.oneOf([
    "hide",
    "top-left",
    "top-right",
    "bottom-left",
    "bottom-right",
  ]),
  styles: C.object,
};
jd.defaultProps = {
  width: 200,
  colors: [
    "#B80000",
    "#DB3E00",
    "#FCCB00",
    "#008B02",
    "#006B76",
    "#1273DE",
    "#004DCF",
    "#5300EB",
    "#EB9694",
    "#FAD0C3",
    "#FEF3BD",
    "#C1E1C5",
    "#BEDADC",
    "#C4DEF6",
    "#BED3F3",
    "#D4C4FB",
  ],
  triangle: "top-left",
  styles: {},
};
Ve(jd);
var BF = function (t) {
    var n = t.direction,
      r = H(
        {
          default: {
            picker: {
              width: "18px",
              height: "18px",
              borderRadius: "50%",
              transform: "translate(-9px, -1px)",
              backgroundColor: "rgb(248, 248, 248)",
              boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
            },
          },
          vertical: { picker: { transform: "translate(-3px, -9px)" } },
        },
        { vertical: n === "vertical" }
      );
    return h.createElement("div", { style: r.picker });
  },
  HF =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Rd = function (t) {
    var n = t.width,
      r = t.height,
      a = t.onChange,
      i = t.hsl,
      o = t.direction,
      l = t.pointer,
      s = t.styles,
      u = s === void 0 ? {} : s,
      c = t.className,
      f = c === void 0 ? "" : c,
      d = H(
        Ge(
          {
            default: {
              picker: { position: "relative", width: n, height: r },
              hue: { radius: "2px" },
            },
          },
          u
        )
      ),
      m = function (w) {
        return a({ a: 1, h: w.h, l: 0.5, s: 1 });
      };
    return h.createElement(
      "div",
      { style: d.picker, className: "hue-picker " + f },
      h.createElement(
        Ea,
        HF({}, d.hue, { hsl: i, pointer: l, onChange: m, direction: o })
      )
    );
  };
Rd.propTypes = { styles: C.object };
Rd.defaultProps = {
  width: "316px",
  height: "16px",
  direction: "horizontal",
  pointer: BF,
  styles: {},
};
Ve(Rd);
var UF = function (t) {
  var n = t.onChange,
    r = t.hex,
    a = t.rgb,
    i = t.styles,
    o = i === void 0 ? {} : i,
    l = t.className,
    s = l === void 0 ? "" : l,
    u = H(
      Ge(
        {
          default: {
            material: {
              width: "98px",
              height: "98px",
              padding: "16px",
              fontFamily: "Roboto",
            },
            HEXwrap: { position: "relative" },
            HEXinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "2px solid " + r,
              outline: "none",
              height: "30px",
            },
            HEXlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              fontSize: "11px",
              color: "#999999",
              textTransform: "capitalize",
            },
            Hex: { style: {} },
            RGBwrap: { position: "relative" },
            RGBinput: {
              width: "100%",
              marginTop: "12px",
              fontSize: "15px",
              color: "#333",
              padding: "0px",
              border: "0px",
              borderBottom: "1px solid #eee",
              outline: "none",
              height: "30px",
            },
            RGBlabel: {
              position: "absolute",
              top: "0px",
              left: "0px",
              fontSize: "11px",
              color: "#999999",
              textTransform: "capitalize",
            },
            split: {
              display: "flex",
              marginRight: "-10px",
              paddingTop: "11px",
            },
            third: { flex: "1", paddingRight: "10px" },
          },
        },
        o
      )
    ),
    c = function (d, m) {
      d.hex
        ? jn(d.hex) && n({ hex: d.hex, source: "hex" }, m)
        : (d.r || d.g || d.b) &&
          n({ r: d.r || a.r, g: d.g || a.g, b: d.b || a.b, source: "rgb" }, m);
    };
  return h.createElement(
    eo,
    { styles: o },
    h.createElement(
      "div",
      { style: u.material, className: "material-picker " + s },
      h.createElement(Y, {
        style: { wrap: u.HEXwrap, input: u.HEXinput, label: u.HEXlabel },
        label: "hex",
        value: r,
        onChange: c,
      }),
      h.createElement(
        "div",
        { style: u.split, className: "flexbox-fix" },
        h.createElement(
          "div",
          { style: u.third },
          h.createElement(Y, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "r",
            value: a.r,
            onChange: c,
          })
        ),
        h.createElement(
          "div",
          { style: u.third },
          h.createElement(Y, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "g",
            value: a.g,
            onChange: c,
          })
        ),
        h.createElement(
          "div",
          { style: u.third },
          h.createElement(Y, {
            style: { wrap: u.RGBwrap, input: u.RGBinput, label: u.RGBlabel },
            label: "b",
            value: a.b,
            onChange: c,
          })
        )
      )
    )
  );
};
const WF = Ve(UF);
var GF = function (t) {
    var n = t.onChange,
      r = t.rgb,
      a = t.hsv,
      i = t.hex,
      o = H({
        default: {
          fields: {
            paddingTop: "5px",
            paddingBottom: "9px",
            width: "80px",
            position: "relative",
          },
          divider: { height: "5px" },
          RGBwrap: { position: "relative" },
          RGBinput: {
            marginLeft: "40%",
            width: "40%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "5px",
            fontSize: "13px",
            paddingLeft: "3px",
            marginRight: "10px",
          },
          RGBlabel: {
            left: "0px",
            top: "0px",
            width: "34px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
            position: "absolute",
          },
          HEXwrap: { position: "relative" },
          HEXinput: {
            marginLeft: "20%",
            width: "80%",
            height: "18px",
            border: "1px solid #888888",
            boxShadow: "inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC",
            marginBottom: "6px",
            fontSize: "13px",
            paddingLeft: "3px",
          },
          HEXlabel: {
            position: "absolute",
            top: "0px",
            left: "0px",
            width: "14px",
            textTransform: "uppercase",
            fontSize: "13px",
            height: "18px",
            lineHeight: "22px",
          },
          fieldSymbols: {
            position: "absolute",
            top: "5px",
            right: "-7px",
            fontSize: "13px",
          },
          symbol: { height: "20px", lineHeight: "22px", paddingBottom: "7px" },
        },
      }),
      l = function (u, c) {
        u["#"]
          ? jn(u["#"]) && n({ hex: u["#"], source: "hex" }, c)
          : u.r || u.g || u.b
          ? n({ r: u.r || r.r, g: u.g || r.g, b: u.b || r.b, source: "rgb" }, c)
          : (u.h || u.s || u.v) &&
            n(
              { h: u.h || a.h, s: u.s || a.s, v: u.v || a.v, source: "hsv" },
              c
            );
      };
    return h.createElement(
      "div",
      { style: o.fields },
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "h",
        value: Math.round(a.h),
        onChange: l,
      }),
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "s",
        value: Math.round(a.s * 100),
        onChange: l,
      }),
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "v",
        value: Math.round(a.v * 100),
        onChange: l,
      }),
      h.createElement("div", { style: o.divider }),
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "r",
        value: r.r,
        onChange: l,
      }),
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "g",
        value: r.g,
        onChange: l,
      }),
      h.createElement(Y, {
        style: { wrap: o.RGBwrap, input: o.RGBinput, label: o.RGBlabel },
        label: "b",
        value: r.b,
        onChange: l,
      }),
      h.createElement("div", { style: o.divider }),
      h.createElement(Y, {
        style: { wrap: o.HEXwrap, input: o.HEXinput, label: o.HEXlabel },
        label: "#",
        value: i.replace("#", ""),
        onChange: l,
      }),
      h.createElement(
        "div",
        { style: o.fieldSymbols },
        h.createElement("div", { style: o.symbol }, "°"),
        h.createElement("div", { style: o.symbol }, "%"),
        h.createElement("div", { style: o.symbol }, "%")
      )
    );
  },
  VF = function (t) {
    var n = t.hsl,
      r = H(
        {
          default: {
            picker: {
              width: "12px",
              height: "12px",
              borderRadius: "6px",
              boxShadow: "inset 0 0 0 1px #fff",
              transform: "translate(-6px, -6px)",
            },
          },
          "black-outline": { picker: { boxShadow: "inset 0 0 0 1px #000" } },
        },
        { "black-outline": n.l > 0.5 }
      );
    return h.createElement("div", { style: r.picker });
  },
  YF = function () {
    var t = H({
      default: {
        triangle: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "4px 0 4px 6px",
          borderColor: "transparent transparent transparent #fff",
          position: "absolute",
          top: "1px",
          left: "1px",
        },
        triangleBorder: {
          width: 0,
          height: 0,
          borderStyle: "solid",
          borderWidth: "5px 0 5px 8px",
          borderColor: "transparent transparent transparent #555",
        },
        left: { Extend: "triangleBorder", transform: "translate(-13px, -4px)" },
        leftInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
        right: {
          Extend: "triangleBorder",
          transform: "translate(20px, -14px) rotate(180deg)",
        },
        rightInside: { Extend: "triangle", transform: "translate(-8px, -5px)" },
      },
    });
    return h.createElement(
      "div",
      { style: t.pointer },
      h.createElement(
        "div",
        { style: t.left },
        h.createElement("div", { style: t.leftInside })
      ),
      h.createElement(
        "div",
        { style: t.right },
        h.createElement("div", { style: t.rightInside })
      )
    );
  },
  ug = function (t) {
    var n = t.onClick,
      r = t.label,
      a = t.children,
      i = t.active,
      o = H(
        {
          default: {
            button: {
              backgroundImage:
                "linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)",
              border: "1px solid #878787",
              borderRadius: "2px",
              height: "20px",
              boxShadow: "0 1px 0 0 #EAEAEA",
              fontSize: "14px",
              color: "#000",
              lineHeight: "20px",
              textAlign: "center",
              marginBottom: "10px",
              cursor: "pointer",
            },
          },
          active: { button: { boxShadow: "0 0 0 1px #878787" } },
        },
        { active: i }
      );
    return h.createElement("div", { style: o.button, onClick: n }, r || a);
  },
  KF = function (t) {
    var n = t.rgb,
      r = t.currentColor,
      a = H({
        default: {
          swatches: {
            border: "1px solid #B3B3B3",
            borderBottom: "1px solid #F0F0F0",
            marginBottom: "2px",
            marginTop: "1px",
          },
          new: {
            height: "34px",
            background: "rgb(" + n.r + "," + n.g + ", " + n.b + ")",
            boxShadow:
              "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000",
          },
          current: {
            height: "34px",
            background: r,
            boxShadow:
              "inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000",
          },
          label: { fontSize: "14px", color: "#000", textAlign: "center" },
        },
      });
    return h.createElement(
      "div",
      null,
      h.createElement("div", { style: a.label }, "new"),
      h.createElement(
        "div",
        { style: a.swatches },
        h.createElement("div", { style: a.new }),
        h.createElement("div", { style: a.current })
      ),
      h.createElement("div", { style: a.label }, "current")
    );
  },
  XF = (function () {
    function e(t, n) {
      for (var r = 0; r < n.length; r++) {
        var a = n[r];
        (a.enumerable = a.enumerable || !1),
          (a.configurable = !0),
          "value" in a && (a.writable = !0),
          Object.defineProperty(t, a.key, a);
      }
    }
    return function (t, n, r) {
      return n && e(t.prototype, n), r && e(t, r), t;
    };
  })();
function QF(e, t) {
  if (!(e instanceof t))
    throw new TypeError("Cannot call a class as a function");
}
function qF(e, t) {
  if (!e)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t && (typeof t == "object" || typeof t == "function") ? t : e;
}
function ZF(e, t) {
  if (typeof t != "function" && t !== null)
    throw new TypeError(
      "Super expression must either be null or a function, not " + typeof t
    );
  (e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, enumerable: !1, writable: !0, configurable: !0 },
  })),
    t &&
      (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : (e.__proto__ = t));
}
var Nd = (function (e) {
  ZF(t, e);
  function t(n) {
    QF(this, t);
    var r = qF(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this));
    return (r.state = { currentColor: n.hex }), r;
  }
  return (
    XF(t, [
      {
        key: "render",
        value: function () {
          var r = this.props,
            a = r.styles,
            i = a === void 0 ? {} : a,
            o = r.className,
            l = o === void 0 ? "" : o,
            s = H(
              Ge(
                {
                  default: {
                    picker: {
                      background: "#DCDCDC",
                      borderRadius: "4px",
                      boxShadow:
                        "0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)",
                      boxSizing: "initial",
                      width: "513px",
                    },
                    head: {
                      backgroundImage:
                        "linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)",
                      borderBottom: "1px solid #B1B1B1",
                      boxShadow:
                        "inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)",
                      height: "23px",
                      lineHeight: "24px",
                      borderRadius: "4px 4px 0 0",
                      fontSize: "13px",
                      color: "#4D4D4D",
                      textAlign: "center",
                    },
                    body: { padding: "15px 15px 0", display: "flex" },
                    saturation: {
                      width: "256px",
                      height: "256px",
                      position: "relative",
                      border: "2px solid #B3B3B3",
                      borderBottom: "2px solid #F0F0F0",
                      overflow: "hidden",
                    },
                    hue: {
                      position: "relative",
                      height: "256px",
                      width: "19px",
                      marginLeft: "10px",
                      border: "2px solid #B3B3B3",
                      borderBottom: "2px solid #F0F0F0",
                    },
                    controls: { width: "180px", marginLeft: "10px" },
                    top: { display: "flex" },
                    previews: { width: "60px" },
                    actions: { flex: "1", marginLeft: "20px" },
                  },
                },
                i
              )
            );
          return h.createElement(
            "div",
            { style: s.picker, className: "photoshop-picker " + l },
            h.createElement("div", { style: s.head }, this.props.header),
            h.createElement(
              "div",
              { style: s.body, className: "flexbox-fix" },
              h.createElement(
                "div",
                { style: s.saturation },
                h.createElement(Ss, {
                  hsl: this.props.hsl,
                  hsv: this.props.hsv,
                  pointer: VF,
                  onChange: this.props.onChange,
                })
              ),
              h.createElement(
                "div",
                { style: s.hue },
                h.createElement(Ea, {
                  direction: "vertical",
                  hsl: this.props.hsl,
                  pointer: YF,
                  onChange: this.props.onChange,
                })
              ),
              h.createElement(
                "div",
                { style: s.controls },
                h.createElement(
                  "div",
                  { style: s.top, className: "flexbox-fix" },
                  h.createElement(
                    "div",
                    { style: s.previews },
                    h.createElement(KF, {
                      rgb: this.props.rgb,
                      currentColor: this.state.currentColor,
                    })
                  ),
                  h.createElement(
                    "div",
                    { style: s.actions },
                    h.createElement(ug, {
                      label: "OK",
                      onClick: this.props.onAccept,
                      active: !0,
                    }),
                    h.createElement(ug, {
                      label: "Cancel",
                      onClick: this.props.onCancel,
                    }),
                    h.createElement(GF, {
                      onChange: this.props.onChange,
                      rgb: this.props.rgb,
                      hsv: this.props.hsv,
                      hex: this.props.hex,
                    })
                  )
                )
              )
            )
          );
        },
      },
    ]),
    t
  );
})(h.Component);
Nd.propTypes = { header: C.string, styles: C.object };
Nd.defaultProps = { header: "Color Picker", styles: {} };
Ve(Nd);
var JF = function (t) {
    var n = t.onChange,
      r = t.rgb,
      a = t.hsl,
      i = t.hex,
      o = t.disableAlpha,
      l = H(
        {
          default: {
            fields: { display: "flex", paddingTop: "4px" },
            single: { flex: "1", paddingLeft: "6px" },
            alpha: { flex: "1", paddingLeft: "6px" },
            double: { flex: "2" },
            input: {
              width: "80%",
              padding: "4px 10% 3px",
              border: "none",
              boxShadow: "inset 0 0 0 1px #ccc",
              fontSize: "11px",
            },
            label: {
              display: "block",
              textAlign: "center",
              fontSize: "11px",
              color: "#222",
              paddingTop: "3px",
              paddingBottom: "4px",
              textTransform: "capitalize",
            },
          },
          disableAlpha: { alpha: { display: "none" } },
        },
        { disableAlpha: o }
      ),
      s = function (c, f) {
        c.hex
          ? jn(c.hex) && n({ hex: c.hex, source: "hex" }, f)
          : c.r || c.g || c.b
          ? n(
              {
                r: c.r || r.r,
                g: c.g || r.g,
                b: c.b || r.b,
                a: r.a,
                source: "rgb",
              },
              f
            )
          : c.a &&
            (c.a < 0 ? (c.a = 0) : c.a > 100 && (c.a = 100),
            (c.a /= 100),
            n({ h: a.h, s: a.s, l: a.l, a: c.a, source: "rgb" }, f));
      };
    return h.createElement(
      "div",
      { style: l.fields, className: "flexbox-fix" },
      h.createElement(
        "div",
        { style: l.double },
        h.createElement(Y, {
          style: { input: l.input, label: l.label },
          label: "hex",
          value: i.replace("#", ""),
          onChange: s,
        })
      ),
      h.createElement(
        "div",
        { style: l.single },
        h.createElement(Y, {
          style: { input: l.input, label: l.label },
          label: "r",
          value: r.r,
          onChange: s,
          dragLabel: "true",
          dragMax: "255",
        })
      ),
      h.createElement(
        "div",
        { style: l.single },
        h.createElement(Y, {
          style: { input: l.input, label: l.label },
          label: "g",
          value: r.g,
          onChange: s,
          dragLabel: "true",
          dragMax: "255",
        })
      ),
      h.createElement(
        "div",
        { style: l.single },
        h.createElement(Y, {
          style: { input: l.input, label: l.label },
          label: "b",
          value: r.b,
          onChange: s,
          dragLabel: "true",
          dragMax: "255",
        })
      ),
      h.createElement(
        "div",
        { style: l.alpha },
        h.createElement(Y, {
          style: { input: l.input, label: l.label },
          label: "a",
          value: Math.round(r.a * 100),
          onChange: s,
          dragLabel: "true",
          dragMax: "100",
        })
      )
    );
  },
  eI =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Fy = function (t) {
    var n = t.colors,
      r = t.onClick,
      a = r === void 0 ? function () {} : r,
      i = t.onSwatchHover,
      o = H(
        {
          default: {
            colors: {
              margin: "0 -10px",
              padding: "10px 0 0 10px",
              borderTop: "1px solid #eee",
              display: "flex",
              flexWrap: "wrap",
              position: "relative",
            },
            swatchWrap: {
              width: "16px",
              height: "16px",
              margin: "0 10px 10px 0",
            },
            swatch: {
              borderRadius: "3px",
              boxShadow: "inset 0 0 0 1px rgba(0,0,0,.15)",
            },
          },
          "no-presets": { colors: { display: "none" } },
        },
        { "no-presets": !n || !n.length }
      ),
      l = function (u, c) {
        a({ hex: u, source: "hex" }, c);
      };
    return h.createElement(
      "div",
      { style: o.colors, className: "flexbox-fix" },
      n.map(function (s) {
        var u = typeof s == "string" ? { color: s } : s,
          c = "" + u.color + (u.title || "");
        return h.createElement(
          "div",
          { key: c, style: o.swatchWrap },
          h.createElement(
            cr,
            eI({}, u, {
              style: o.swatch,
              onClick: l,
              onHover: i,
              focusStyle: {
                boxShadow:
                  "inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px " + u.color,
              },
            })
          )
        );
      })
    );
  };
Fy.propTypes = {
  colors: C.arrayOf(
    C.oneOfType([C.string, C.shape({ color: C.string, title: C.string })])
  ).isRequired,
};
var tI =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  Fd = function (t) {
    var n = t.width,
      r = t.rgb,
      a = t.hex,
      i = t.hsv,
      o = t.hsl,
      l = t.onChange,
      s = t.onSwatchHover,
      u = t.disableAlpha,
      c = t.presetColors,
      f = t.renderers,
      d = t.styles,
      m = d === void 0 ? {} : d,
      x = t.className,
      w = x === void 0 ? "" : x,
      E = H(
        Ge(
          {
            default: tI(
              {
                picker: {
                  width: n,
                  padding: "10px 10px 0",
                  boxSizing: "initial",
                  background: "#fff",
                  borderRadius: "4px",
                  boxShadow:
                    "0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)",
                },
                saturation: {
                  width: "100%",
                  paddingBottom: "75%",
                  position: "relative",
                  overflow: "hidden",
                },
                Saturation: {
                  radius: "3px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                controls: { display: "flex" },
                sliders: { padding: "4px 0", flex: "1" },
                color: {
                  width: "24px",
                  height: "24px",
                  position: "relative",
                  marginTop: "4px",
                  marginLeft: "4px",
                  borderRadius: "3px",
                },
                activeColor: {
                  absolute: "0px 0px 0px 0px",
                  borderRadius: "2px",
                  background:
                    "rgba(" + r.r + "," + r.g + "," + r.b + "," + r.a + ")",
                  boxShadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                hue: {
                  position: "relative",
                  height: "10px",
                  overflow: "hidden",
                },
                Hue: {
                  radius: "2px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
                alpha: {
                  position: "relative",
                  height: "10px",
                  marginTop: "4px",
                  overflow: "hidden",
                },
                Alpha: {
                  radius: "2px",
                  shadow:
                    "inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)",
                },
              },
              m
            ),
            disableAlpha: {
              color: { height: "10px" },
              hue: { height: "10px" },
              alpha: { display: "none" },
            },
          },
          m
        ),
        { disableAlpha: u }
      );
    return h.createElement(
      "div",
      { style: E.picker, className: "sketch-picker " + w },
      h.createElement(
        "div",
        { style: E.saturation },
        h.createElement(Ss, {
          style: E.Saturation,
          hsl: o,
          hsv: i,
          onChange: l,
        })
      ),
      h.createElement(
        "div",
        { style: E.controls, className: "flexbox-fix" },
        h.createElement(
          "div",
          { style: E.sliders },
          h.createElement(
            "div",
            { style: E.hue },
            h.createElement(Ea, { style: E.Hue, hsl: o, onChange: l })
          ),
          h.createElement(
            "div",
            { style: E.alpha },
            h.createElement(vd, {
              style: E.Alpha,
              rgb: r,
              hsl: o,
              renderers: f,
              onChange: l,
            })
          )
        ),
        h.createElement(
          "div",
          { style: E.color },
          h.createElement(ka, null),
          h.createElement("div", { style: E.activeColor })
        )
      ),
      h.createElement(JF, {
        rgb: r,
        hsl: o,
        hex: a,
        onChange: l,
        disableAlpha: u,
      }),
      h.createElement(Fy, { colors: c, onClick: l, onSwatchHover: s })
    );
  };
Fd.propTypes = {
  disableAlpha: C.bool,
  width: C.oneOfType([C.string, C.number]),
  styles: C.object,
};
Fd.defaultProps = {
  disableAlpha: !1,
  width: 200,
  styles: {},
  presetColors: [
    "#D0021B",
    "#F5A623",
    "#F8E71C",
    "#8B572A",
    "#7ED321",
    "#417505",
    "#BD10E0",
    "#9013FE",
    "#4A90E2",
    "#50E3C2",
    "#B8E986",
    "#000000",
    "#4A4A4A",
    "#9B9B9B",
    "#FFFFFF",
  ],
};
Ve(Fd);
var Da = function (t) {
    var n = t.hsl,
      r = t.offset,
      a = t.onClick,
      i = a === void 0 ? function () {} : a,
      o = t.active,
      l = t.first,
      s = t.last,
      u = H(
        {
          default: {
            swatch: {
              height: "12px",
              background: "hsl(" + n.h + ", 50%, " + r * 100 + "%)",
              cursor: "pointer",
            },
          },
          first: { swatch: { borderRadius: "2px 0 0 2px" } },
          last: { swatch: { borderRadius: "0 2px 2px 0" } },
          active: {
            swatch: { transform: "scaleY(1.8)", borderRadius: "3.6px/2px" },
          },
        },
        { active: o, first: l, last: s }
      ),
      c = function (d) {
        return i({ h: n.h, s: 0.5, l: r, source: "hsl" }, d);
      };
    return h.createElement("div", { style: u.swatch, onClick: c });
  },
  nI = function (t) {
    var n = t.onClick,
      r = t.hsl,
      a = H({
        default: {
          swatches: { marginTop: "20px" },
          swatch: {
            boxSizing: "border-box",
            width: "20%",
            paddingRight: "1px",
            float: "left",
          },
          clear: { clear: "both" },
        },
      }),
      i = 0.1;
    return h.createElement(
      "div",
      { style: a.swatches },
      h.createElement(
        "div",
        { style: a.swatch },
        h.createElement(Da, {
          hsl: r,
          offset: ".80",
          active: Math.abs(r.l - 0.8) < i && Math.abs(r.s - 0.5) < i,
          onClick: n,
          first: !0,
        })
      ),
      h.createElement(
        "div",
        { style: a.swatch },
        h.createElement(Da, {
          hsl: r,
          offset: ".65",
          active: Math.abs(r.l - 0.65) < i && Math.abs(r.s - 0.5) < i,
          onClick: n,
        })
      ),
      h.createElement(
        "div",
        { style: a.swatch },
        h.createElement(Da, {
          hsl: r,
          offset: ".50",
          active: Math.abs(r.l - 0.5) < i && Math.abs(r.s - 0.5) < i,
          onClick: n,
        })
      ),
      h.createElement(
        "div",
        { style: a.swatch },
        h.createElement(Da, {
          hsl: r,
          offset: ".35",
          active: Math.abs(r.l - 0.35) < i && Math.abs(r.s - 0.5) < i,
          onClick: n,
        })
      ),
      h.createElement(
        "div",
        { style: a.swatch },
        h.createElement(Da, {
          hsl: r,
          offset: ".20",
          active: Math.abs(r.l - 0.2) < i && Math.abs(r.s - 0.5) < i,
          onClick: n,
          last: !0,
        })
      ),
      h.createElement("div", { style: a.clear })
    );
  },
  rI = function () {
    var t = H({
      default: {
        picker: {
          width: "14px",
          height: "14px",
          borderRadius: "6px",
          transform: "translate(-7px, -1px)",
          backgroundColor: "rgb(248, 248, 248)",
          boxShadow: "0 1px 4px 0 rgba(0, 0, 0, 0.37)",
        },
      },
    });
    return h.createElement("div", { style: t.picker });
  },
  Id = function (t) {
    var n = t.hsl,
      r = t.onChange,
      a = t.pointer,
      i = t.styles,
      o = i === void 0 ? {} : i,
      l = t.className,
      s = l === void 0 ? "" : l,
      u = H(
        Ge(
          {
            default: {
              hue: { height: "12px", position: "relative" },
              Hue: { radius: "2px" },
            },
          },
          o
        )
      );
    return h.createElement(
      "div",
      { style: u.wrap || {}, className: "slider-picker " + s },
      h.createElement(
        "div",
        { style: u.hue },
        h.createElement(Ea, { style: u.Hue, hsl: n, pointer: a, onChange: r })
      ),
      h.createElement(
        "div",
        { style: u.swatches },
        h.createElement(nI, { hsl: n, onClick: r })
      )
    );
  };
Id.propTypes = { styles: C.object };
Id.defaultProps = { pointer: rI, styles: {} };
Ve(Id);
var Iy = {};
Object.defineProperty(Iy, "__esModule", { value: !0 });
var cg =
    Object.assign ||
    function (e) {
      for (var t = 1; t < arguments.length; t++) {
        var n = arguments[t];
        for (var r in n)
          Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
      }
      return e;
    },
  aI = B,
  fg = iI(aI);
function iI(e) {
  return e && e.__esModule ? e : { default: e };
}
function oI(e, t) {
  var n = {};
  for (var r in e)
    t.indexOf(r) >= 0 ||
      (Object.prototype.hasOwnProperty.call(e, r) && (n[r] = e[r]));
  return n;
}
var No = 24,
  lI = (Iy.default = function (e) {
    var t = e.fill,
      n = t === void 0 ? "currentColor" : t,
      r = e.width,
      a = r === void 0 ? No : r,
      i = e.height,
      o = i === void 0 ? No : i,
      l = e.style,
      s = l === void 0 ? {} : l,
      u = oI(e, ["fill", "width", "height", "style"]);
    return fg.default.createElement(
      "svg",
      cg(
        {
          viewBox: "0 0 " + No + " " + No,
          style: cg({ fill: n, width: a, height: o }, s),
        },
        u
      ),
      fg.default.createElement("path", {
        d: "M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",
      })
    );
  }),
  sI = function (t) {
    var n = t.color,
      r = t.onClick,
      a = r === void 0 ? function () {} : r,
      i = t.onSwatchHover,
      o = t.first,
      l = t.last,
      s = t.active,
      u = H(
        {
          default: {
            color: {
              width: "40px",
              height: "24px",
              cursor: "pointer",
              background: n,
              marginBottom: "1px",
            },
            check: { color: Ed(n), marginLeft: "8px", display: "none" },
          },
          first: { color: { overflow: "hidden", borderRadius: "2px 2px 0 0" } },
          last: { color: { overflow: "hidden", borderRadius: "0 0 2px 2px" } },
          active: { check: { display: "block" } },
          "color-#FFFFFF": {
            color: { boxShadow: "inset 0 0 0 1px #ddd" },
            check: { color: "#333" },
          },
          transparent: { check: { color: "#333" } },
        },
        {
          first: o,
          last: l,
          active: s,
          "color-#FFFFFF": n === "#FFFFFF",
          transparent: n === "transparent",
        }
      );
    return h.createElement(
      cr,
      {
        color: n,
        style: u.color,
        onClick: a,
        onHover: i,
        focusStyle: { boxShadow: "0 0 4px " + n },
      },
      h.createElement("div", { style: u.check }, h.createElement(lI, null))
    );
  },
  uI = function (t) {
    var n = t.onClick,
      r = t.onSwatchHover,
      a = t.group,
      i = t.active,
      o = H({
        default: {
          group: {
            paddingBottom: "10px",
            width: "40px",
            float: "left",
            marginRight: "10px",
          },
        },
      });
    return h.createElement(
      "div",
      { style: o.group },
      fr(a, function (l, s) {
        return h.createElement(sI, {
          key: l,
          color: l,
          active: l.toLowerCase() === i,
          first: s === 0,
          last: s === a.length - 1,
          onClick: n,
          onSwatchHover: r,
        });
      })
    );
  },
  Ld = function (t) {
    var n = t.width,
      r = t.height,
      a = t.onChange,
      i = t.onSwatchHover,
      o = t.colors,
      l = t.hex,
      s = t.styles,
      u = s === void 0 ? {} : s,
      c = t.className,
      f = c === void 0 ? "" : c,
      d = H(
        Ge(
          {
            default: {
              picker: { width: n, height: r },
              overflow: { height: r, overflowY: "scroll" },
              body: { padding: "16px 0 6px 16px" },
              clear: { clear: "both" },
            },
          },
          u
        )
      ),
      m = function (w, E) {
        return a({ hex: w, source: "hex" }, E);
      };
    return h.createElement(
      "div",
      { style: d.picker, className: "swatches-picker " + f },
      h.createElement(
        eo,
        null,
        h.createElement(
          "div",
          { style: d.overflow },
          h.createElement(
            "div",
            { style: d.body },
            fr(o, function (x) {
              return h.createElement(uI, {
                key: x.toString(),
                group: x,
                active: l,
                onClick: m,
                onSwatchHover: i,
              });
            }),
            h.createElement("div", { style: d.clear })
          )
        )
      )
    );
  };
Ld.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  height: C.oneOfType([C.string, C.number]),
  colors: C.arrayOf(C.arrayOf(C.string)),
  styles: C.object,
};
Ld.defaultProps = {
  width: 320,
  height: 240,
  colors: [
    [hr[900], hr[700], hr[500], hr[300], hr[100]],
    [gr[900], gr[700], gr[500], gr[300], gr[100]],
    [vr[900], vr[700], vr[500], vr[300], vr[100]],
    [mr[900], mr[700], mr[500], mr[300], mr[100]],
    [yr[900], yr[700], yr[500], yr[300], yr[100]],
    [br[900], br[700], br[500], br[300], br[100]],
    [xr[900], xr[700], xr[500], xr[300], xr[100]],
    [wr[900], wr[700], wr[500], wr[300], wr[100]],
    [Sr[900], Sr[700], Sr[500], Sr[300], Sr[100]],
    ["#194D33", Ya[700], Ya[500], Ya[300], Ya[100]],
    [kr[900], kr[700], kr[500], kr[300], kr[100]],
    [Er[900], Er[700], Er[500], Er[300], Er[100]],
    [_r[900], _r[700], _r[500], _r[300], _r[100]],
    [Cr[900], Cr[700], Cr[500], Cr[300], Cr[100]],
    [$r[900], $r[700], $r[500], $r[300], $r[100]],
    [Or[900], Or[700], Or[500], Or[300], Or[100]],
    [Ar[900], Ar[700], Ar[500], Ar[300], Ar[100]],
    [Tr[900], Tr[700], Tr[500], Tr[300], Tr[100]],
    ["#000000", "#525252", "#969696", "#D9D9D9", "#FFFFFF"],
  ],
  styles: {},
};
Ve(Ld);
var Md = function (t) {
  var n = t.onChange,
    r = t.onSwatchHover,
    a = t.hex,
    i = t.colors,
    o = t.width,
    l = t.triangle,
    s = t.styles,
    u = s === void 0 ? {} : s,
    c = t.className,
    f = c === void 0 ? "" : c,
    d = H(
      Ge(
        {
          default: {
            card: {
              width: o,
              background: "#fff",
              border: "0 solid rgba(0,0,0,0.25)",
              boxShadow: "0 1px 4px rgba(0,0,0,0.25)",
              borderRadius: "4px",
              position: "relative",
            },
            body: { padding: "15px 9px 9px 15px" },
            label: { fontSize: "18px", color: "#fff" },
            triangle: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent #fff transparent",
              position: "absolute",
            },
            triangleShadow: {
              width: "0px",
              height: "0px",
              borderStyle: "solid",
              borderWidth: "0 9px 10px 9px",
              borderColor: "transparent transparent rgba(0,0,0,.1) transparent",
              position: "absolute",
            },
            hash: {
              background: "#F0F0F0",
              height: "30px",
              width: "30px",
              borderRadius: "4px 0 0 4px",
              float: "left",
              color: "#98A1A4",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            input: {
              width: "100px",
              fontSize: "14px",
              color: "#666",
              border: "0px",
              outline: "none",
              height: "28px",
              boxShadow: "inset 0 0 0 1px #F0F0F0",
              boxSizing: "content-box",
              borderRadius: "0 4px 4px 0",
              float: "left",
              paddingLeft: "8px",
            },
            swatch: {
              width: "30px",
              height: "30px",
              float: "left",
              borderRadius: "4px",
              margin: "0 6px 6px 0",
            },
            clear: { clear: "both" },
          },
          "hide-triangle": {
            triangle: { display: "none" },
            triangleShadow: { display: "none" },
          },
          "top-left-triangle": {
            triangle: { top: "-10px", left: "12px" },
            triangleShadow: { top: "-11px", left: "12px" },
          },
          "top-right-triangle": {
            triangle: { top: "-10px", right: "12px" },
            triangleShadow: { top: "-11px", right: "12px" },
          },
        },
        u
      ),
      {
        "hide-triangle": l === "hide",
        "top-left-triangle": l === "top-left",
        "top-right-triangle": l === "top-right",
      }
    ),
    m = function (w, E) {
      jn(w) && n({ hex: w, source: "hex" }, E);
    };
  return h.createElement(
    "div",
    { style: d.card, className: "twitter-picker " + f },
    h.createElement("div", { style: d.triangleShadow }),
    h.createElement("div", { style: d.triangle }),
    h.createElement(
      "div",
      { style: d.body },
      fr(i, function (x, w) {
        return h.createElement(cr, {
          key: w,
          color: x,
          hex: x,
          style: d.swatch,
          onClick: m,
          onHover: r,
          focusStyle: { boxShadow: "0 0 4px " + x },
        });
      }),
      h.createElement("div", { style: d.hash }, "#"),
      h.createElement(Y, {
        label: null,
        style: { input: d.input },
        value: a.replace("#", ""),
        onChange: m,
      }),
      h.createElement("div", { style: d.clear })
    )
  );
};
Md.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  triangle: C.oneOf(["hide", "top-left", "top-right"]),
  colors: C.arrayOf(C.string),
  styles: C.object,
};
Md.defaultProps = {
  width: 276,
  colors: [
    "#FF6900",
    "#FCB900",
    "#7BDCB5",
    "#00D084",
    "#8ED1FC",
    "#0693E3",
    "#ABB8C3",
    "#EB144C",
    "#F78DA7",
    "#9900EF",
  ],
  triangle: "top-left",
  styles: {},
};
Ve(Md);
var zd = function (t) {
  var n = H({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        border: "2px #fff solid",
        transform: "translate(-12px, -13px)",
        background:
          "hsl(" +
          Math.round(t.hsl.h) +
          ", " +
          Math.round(t.hsl.s * 100) +
          "%, " +
          Math.round(t.hsl.l * 100) +
          "%)",
      },
    },
  });
  return h.createElement("div", { style: n.picker });
};
zd.propTypes = {
  hsl: C.shape({ h: C.number, s: C.number, l: C.number, a: C.number }),
};
zd.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var Dd = function (t) {
  var n = H({
    default: {
      picker: {
        width: "20px",
        height: "20px",
        borderRadius: "22px",
        transform: "translate(-10px, -7px)",
        background: "hsl(" + Math.round(t.hsl.h) + ", 100%, 50%)",
        border: "2px white solid",
      },
    },
  });
  return h.createElement("div", { style: n.picker });
};
Dd.propTypes = {
  hsl: C.shape({ h: C.number, s: C.number, l: C.number, a: C.number }),
};
Dd.defaultProps = { hsl: { a: 1, h: 249.94, l: 0.2, s: 0.5 } };
var cI = function (t) {
    var n = t.onChange,
      r = t.rgb,
      a = t.hsl,
      i = t.hex,
      o = t.hsv,
      l = function (m, x) {
        if (m.hex) jn(m.hex) && n({ hex: m.hex, source: "hex" }, x);
        else if (m.rgb) {
          var w = m.rgb.split(",");
          pu(m.rgb, "rgb") &&
            n({ r: w[0], g: w[1], b: w[2], a: 1, source: "rgb" }, x);
        } else if (m.hsv) {
          var E = m.hsv.split(",");
          pu(m.hsv, "hsv") &&
            ((E[2] = E[2].replace("%", "")),
            (E[1] = E[1].replace("%", "")),
            (E[0] = E[0].replace("°", "")),
            E[1] == 1 ? (E[1] = 0.01) : E[2] == 1 && (E[2] = 0.01),
            n(
              {
                h: Number(E[0]),
                s: Number(E[1]),
                v: Number(E[2]),
                source: "hsv",
              },
              x
            ));
        } else if (m.hsl) {
          var v = m.hsl.split(",");
          pu(m.hsl, "hsl") &&
            ((v[2] = v[2].replace("%", "")),
            (v[1] = v[1].replace("%", "")),
            (v[0] = v[0].replace("°", "")),
            f[1] == 1 ? (f[1] = 0.01) : f[2] == 1 && (f[2] = 0.01),
            n(
              {
                h: Number(v[0]),
                s: Number(v[1]),
                v: Number(v[2]),
                source: "hsl",
              },
              x
            ));
        }
      },
      s = H({
        default: {
          wrap: { display: "flex", height: "100px", marginTop: "4px" },
          fields: { width: "100%" },
          column: {
            paddingTop: "10px",
            display: "flex",
            justifyContent: "space-between",
          },
          double: { padding: "0px 4.4px", boxSizing: "border-box" },
          input: {
            width: "100%",
            height: "38px",
            boxSizing: "border-box",
            padding: "4px 10% 3px",
            textAlign: "center",
            border: "1px solid #dadce0",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          input2: {
            height: "38px",
            width: "100%",
            border: "1px solid #dadce0",
            boxSizing: "border-box",
            fontSize: "11px",
            textTransform: "lowercase",
            borderRadius: "5px",
            outline: "none",
            paddingLeft: "10px",
            r = t.onChange,
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label: {
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "35px",
            top: "-6px",
            left: "0",
            right: "0",
            marginLeft: "auto",
            marginRight: "auto",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          label2: {
            left: "10px",
            textAlign: "center",
            fontSize: "12px",
            background: "#fff",
            position: "absolute",
            textTransform: "uppercase",
            color: "#3c4043",
            width: "32px",
            top: "-6px",
            fontFamily: "Roboto,Arial,sans-serif",
          },
          single: { flexGrow: "1", margin: "0px 4.4px" },
        },
      }),
      u = r.r + ", " + r.g + ", " + r.b,
      c =
        Math.round(a.h) +
        "°, " +
        Math.round(a.s * 100) +
        "%, " +
        Math.round(a.l * 100) +
        "%",
      f =
        Math.round(o.h) +
        "°, " +
        Math.round(o.s * 100) +
        "%, " +
        Math.round(o.v * 100) +
        "%";
    return h.createElement(
      "div",
      { style: s.wrap, className: "flexbox-fix" },
      h.createElement(
        "div",
        { style: s.fields },
        h.createElement(
          "div",
          { style: s.double },
          h.createElement(Y, {
            style: { input: s.input, label: s.label },
            label: "hex",
            value: i,
            onChange: l,
          })
        ),
        h.createElement(
          "div",
          { style: s.column },
          h.createElement(
            "div",
            { style: s.single },
            h.createElement(Y, {
              style: { input: s.input2, label: s.label2 },
              label: "rgb",
              value: u,
              onChange: l,
            })
          ),
          h.createElement(
            "div",
            { style: s.single },
            h.createElement(Y, {
              style: { input: s.input2, label: s.label2 },
              label: "hsv",
              value: f,
              onChange: l,
            })
          ),
          h.createElement(
            "div",
            { style: s.single },
            h.createElement(Y, {
              style: { input: s.input2, label: s.label2 },
              label: "hsl",
              value: c,
              onChange: l,
            })
          )
        )
      )
    );
  },
  Bd = function (t) {
    var n = t.width,
      a = t.rgb,
      i = t.hsl,
      o = t.hsv,
      l = t.hex,
      s = t.header,
      u = t.styles,
      c = u === void 0 ? {} : u,
      f = t.className,
      d = f === void 0 ? "" : f,
      m = H(
        Ge(
          {
            default: {
              picker: {
                width: n,
                background: "#fff",
                border: "1px solid #dfe1e5",
                boxSizing: "initial",
                display: "flex",
                flexWrap: "wrap",
                borderRadius: "8px 8px 0px 0px",
              },
              head: {
                height: "57px",
                width: "100%",
                paddingTop: "16px",
                paddingBottom: "16px",
                paddingLeft: "16px",
                fontSize: "20px",
                boxSizing: "border-box",
                fontFamily: "Roboto-Regular,HelveticaNeue,Arial,sans-serif",
              },
              saturation: {
                width: "70%",
                padding: "0px",
                position: "relative",
                overflow: "hidden",
              },
              swatch: {
                width: "30%",
                height: "228px",
                padding: "0px",
                background: "rgba(" + a.r + ", " + a.g + ", " + a.b + ", 1)",
                position: "relative",
                overflow: "hidden",
              },
              body: { margin: "auto", width: "95%" },
              controls: {
                display: "flex",
                boxSizing: "border-box",
                height: "52px",
                paddingTop: "22px",
              },
              color: { width: "32px" },
              hue: {
                height: "8px",
                position: "relative",
                margin: "0px 16px 0px 16px",
                width: "100%",
              },
              Hue: { radius: "2px" },
            },
          },
          c
        )
      );
    return h.createElement(
      "div",
      { style: m.picker, className: "google-picker " + d },
      h.createElement("div", { style: m.head }, s),
      h.createElement("div", { style: m.swatch }),
      h.createElement(
        "div",
        { style: m.saturation },
        h.createElement(Ss, { hsl: i, hsv: o, pointer: zd, onChange: r })
      ),
      h.createElement(
        "div",
        { style: m.body },
        h.createElement(
          "div",
          { style: m.controls, className: "flexbox-fix" },
          h.createElement(
            "div",
            { style: m.hue },
            h.createElement(Ea, {
              style: m.Hue,
              hsl: i,
              radius: "4px",
              pointer: Dd,
              onChange: r,
            })
          )
        ),
        h.createElement(cI, { rgb: a, hsl: i, hex: l, hsv: o, onChange: r })
      )
    );
  };
Bd.propTypes = {
  width: C.oneOfType([C.string, C.number]),
  styles: C.object,
  header: C.string,
};
Bd.defaultProps = { width: 652, styles: {}, header: "Color picker" };
Ve(Bd);
const fI = D.div`
  display: flex;
  > div {
    padding: 0 10px;
    width: 180px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`,
  dI = D.div`
  width: 100%;
  padding: 5px 0;
  cursor: pointer;
  opacity: ${({ active: e }) => !e && "0.7"};
  color: ${({ active: e }) => e && "var(--accent-color)"};
  :hover {
    color: var(--accent-color2);
    animation: text-flicker 0.01s ease 0s infinite alternate;
  }
`,
  pI = D.div`
  > div * {
    background-color: var(--bg-color) !important;
    color: var(--default-color) !important;
    box-shadow: none;
  }
  > div {
    border: 2px solid var(--default-color);
  }
`,
  hI = ({ colors: e, setColors: t }) => {
    const [n, r] = B.useState(Object.keys($i[0].colors)[0]),
      a = (i) => {
        const o = { ...e };
        (o[n] = i.hex), t(o);
      };
    return k.jsxs(fI, {
      children: [
        k.jsx("div", {
          children: Object.keys(e).map((i) =>
            k.jsx(dI, { active: i === n, onClick: () => r(i), children: i }, i)
          ),
        }),
        k.jsx(pI, {
          children: k.jsx(WF, { color: e[n], onChange: (i) => i && a(i) }),
        }),
      ],
    });
  },
  gI = D.button`
  color: ${({ inverted: e }) =>
    e ? "var(--bg-color)" : "var(--default-color)"};
  background-color: transparent;
  min-width: 50px;
  font-size: 20px;
  border: none;
  opacity: 0.7;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  :enabled:hover {
    ${({ inverted: e }) =>
      e
        ? `filter: 
            drop-shadow(2px 2px 0 var(--accent-color))
            drop-shadow(-2px -2px 0 var(--accent-color))
            drop-shadow(-2px 2px 0 var(--accent-color))
            drop-shadow(2px -2px 0 var(--accent-color))`
        : "animation: box-flicker 0.01s ease 0s infinite alternate"};
  }
  :focus {
    outline: none;
  }
  :disabled {
    opacity: 0.2;
    cursor: default;
  }

  > span {
    padding-right: 10px;
  }
`,
  On = ({ icon: e, text: t, children: n, ...r }) =>
    k.jsxs(gI, {
      ...r,
      children: [
        n,
        t && k.jsx("span", { children: t }),
        e && k.jsx(ga, { icon: e }),
      ],
    }),
  vI = D.div`
  position: relative;
  height: 40px;
`,
  mI = D(On)`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  height: 40px;
  width: calc(100% + 4px);
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-between;
  padding: 10px 20px;
  border: 2px solid var(--default-color);
  background-color: var(--bg-color);

  :enabled:hover,
  :focus,
  :hover {
    animation: none;
    opacity: 1;
  }
  font-size: initial;
  z-index: 10;
`,
  yI = D.div`
  height: ${({ height: e }) => `${e}px`};
  position: absolute;
  left: 4px;
  top: 40px;
  width: calc(100% - 3px);
  background-color: var(--bg-color);
  overflow: hidden;
  z-index: 9;
  animation: box-flicker 0.01s ease 0s infinite alternate;
  transition: ${({ items: e }) => `${e * 0.1}s`};
  > div {
    padding-top: 5px;
    display: flex;
    flex-direction: column;
  }
`,
  bI = D(On)`
  margin: 0;
  padding: 10px 20px;
  justify-content: flex-start;
  font-size: initial;
  :enabled:hover {
    animation: none;
    opacity: 1;
    background-color: var(--default-color);
    color: var(--bg-color);
  }
`,
  xI = ({ items: e, onChange: t, value: n }) => {
    const [r, a] = B.useState(0),
      [i, o] = B.useState(!1),
      l = () => {
        const u = e.filter((c) => c.value === n);
        return u.length > 0 ? u[0].label : n;
      },
      s = (u) => {
        t(u), o(!1);
      };
    return k.jsxs(vI, {
      children: [
        k.jsx(mI, { text: l(), icon: D2, onClick: () => o(!i) }),
        k.jsx(yI, {
          height: i ? r : 0,
          items: e.length,
          children: k.jsx("div", {
            onBlur: () => o(!1),
            ref: (u) => a((u == null ? void 0 : u.clientHeight) || 0),
            children: e.map((u) =>
              k.jsx(bI, { onClick: () => s(u.value), text: u.label }, u.value)
            ),
          }),
        }),
      ],
    });
  },
  wI = D.div`
  height: 20px;
  display: flex;
  flex-direction: row;
  padding: 5px 0;
  > span {
    min-width: 100px;
    display: flex;
    justify-content: center;
  }
`,
  Ly = ({ values: e, onChange: t, currentValue: n }) => {
    var o;
    const [r, a] = B.useState(0);
    B.useEffect(() => {
      e.forEach((l, s) => {
        n === l.value && s !== r && a(s);
      });
    }, [n, e, r]);
    const i = (l) => {
      var s;
      a(l), t((s = e[l]) == null ? void 0 : s.value);
    };
    return k.jsxs(wI, {
      children: [
        k.jsx(On, {
          disabled: r <= 0,
          onClick: () => {
            i(r - 1);
          },
          icon: U2,
        }),
        k.jsx("span", { children: (o = e[r]) == null ? void 0 : o.label }),
        k.jsx(On, {
          disabled: r >= e.length - 1,
          onClick: () => i(r + 1),
          icon: N2,
        }),
      ],
    });
  },
  SI = D.input`
  border: 2px solid var(--default-color);
  width: calc(100% - 40px);
  height: 36px;
  padding: 0 20px;
  background-color: var(--bg-color);
  color: var(--default-color);
  outline: none;
  opacity: 0.5;
  :enabled:hover,
  :focus {
    opacity: 1;
  }
`,
  Ml = ({ onChange: e, ...t }) =>
    k.jsx(SI, {
      type: "text",
      onChange: (n) => e(n.currentTarget.value),
      ...t,
    }),
  kI = D.div`
  ${({ colors: e }) =>
    Object.keys(e)
      .map((t) => t + ":" + e[t])
      .toString()
      .replaceAll(",", ";") + ";"}

  background-color: var(--bg-color);
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 2px solid var(--accent-color);
  width: calc(100% - 400px);
  height: 100%;
  position: relative;
  ::before {
    content: "${({ name: e }) => e}";
    color: var(--accent-color);
    position: absolute;
    top: 10px;
    left: 15px;
    font-size: 0.8rem;
  }
  ::after {
    content: "Design Preview";
    color: var(--accent-color);
    position: absolute;
    top: 10px;
    right: 15px;
    font-size: 0.8rem;
  }
  @media screen and (max-width: 1400px) {
    > img {
      width: 200px;
      height: 200px;
    }
    > div > div {
      width: 50px;
      height: 200px;
      > h2 {
        font-size: 1rem;
      }
      > .wave {
        width: 50px;
      }
    }
  }
  @media screen and (max-width: 1200px) {
    > img {
      width: 150px;
      height: 150px;
    }
    > div > div {
      width: 1rem;
      margin-left: 0.5rem;
      height: 150px;
      > h2 {
        font-size: 0.8rem;
      }
      > .wave {
        display: none;
      }
    }
  }
`,
  EI = D.img`
  margin: 10px;
  height: 300px;
  width: 300px;
  border: 1px solid var(--default-color);
  padding: 5px;
  object-fit: cover;

  animation: circling-shadow-small 4s ease 0s infinite normal;
`,
  _I = D.div`
  border: 4px solid ${({ colorVar: e }) => `var(${e})`};
  height: 300px;
  width: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  ::before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100%;
    background-color: ${({ colorVar: e }) => `var(${e})`};
  }

  > .wave {
    width: 80px;
    height: 50px;
    position: absolute;
    top: 0px;
    overflow: hidden;
    ::before {
      content: "";
      width: 180px;
      height: 185px;
      position: absolute;
      top: -25%;
      left: 50%;
      margin-left: -90px;
      margin-top: -140px;
      border-radius: 37%;
      background: var(--bg-color);
      animation: wave 12s infinite cubic-bezier(0.71, 0.33, 0.33, 0.68);
    }
    @keyframes wave {
      from {
        transform: rotate(0deg);
      }
      from {
        transform: rotate(360deg);
      }
    }
  }
`,
  gu = D.div`
  width: calc(100% - 80px);
  padding: 20px 40px;
  position: relative;
  :before {
    content: "";
    width: calc(100% - 80px);
    position: absolute;
  }
`,
  CI = D.h2`
  transform: rotate(90deg);
  min-width: max-content;
  color: var(--bg-color);
  transition: 0.5s;
  letter-spacing: 5px;
`,
  $I = D.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px;
  > * {
    margin-left: 30px;
  }
`,
  OI = D.div`
  display: flex;
  justify-content: space-between;
`,
  vu = ({ title: e, colorVar: t }) =>
    k.jsxs(_I, {
      colorVar: t,
      children: [
        k.jsx("div", { className: "wave" }),
        k.jsx(CI, { children: e }),
      ],
    }),
  AI = (e, t) => {
    let n = !0;
    return (
      e.name !== t.name && (n = !1),
      e.image !== t.image && (n = !1),
      Object.keys(e.colors).forEach((r) => {
        e.colors[r] !== t.colors[r] && (n = !1);
      }),
      n
    );
  },
  TI = ({ design: e, setDesign: t, themes: n, setThemes: r }) => {
    const [a, i] = B.useState(!1),
      o = (m) => t({ ...e, name: m }),
      l = (m) => t({ ...e, colors: m }),
      s = (m) => t({ ...e, image: m });
    B.useEffect(() => {
      n.filter((x) => AI(x, e)).length > 0 ? i(!1) : a || i(!0);
    }, [e, n]);
    const u = (m) => {
        const x = n.filter((w) => w.name === m);
        x.length > 0 && t(x[0]);
      },
      c = (m) => {
        r([...n.filter((x) => x.name !== m.name), m]);
      },
      f = (m) => {
        r(n.filter((x) => x.name !== m)), n.length > 0 && u(n[0].name);
      },
      d = (m) => n.filter((x) => x.name === e.name).length > 0;
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx("div", {
          children: k.jsxs(qI, {
            children: [
              k.jsx(zl, { children: "Theme" }),
              k.jsx(Pr, {
                children:
                  n &&
                  k.jsx(xI, {
                    value: e.name,
                    items: n.map((m) => ({ label: m.name, value: m.name })),
                    onChange: u,
                  }),
              }),
              k.jsx(Pr, {
                children: k.jsx(Ml, {
                  value: e.name,
                  onChange: o,
                  placeholder: "Theme name",
                }),
              }),
              k.jsx(gu, {}),
              k.jsxs(Pr, {
                children: [
                  k.jsx(Ml, {
                    value: e.image,
                    onChange: s,
                    placeholder: "Image URL",
                  }),
                  k.jsx(Ly, { currentValue: e.image, values: Dm, onChange: s }),
                ],
              }),
              k.jsx(gu, {}),
              k.jsx(Pr, {
                children: k.jsx(hI, { colors: e.colors, setColors: l }),
              }),
              k.jsx(gu, {}),
              k.jsx(Pr, {
                children: k.jsxs(OI, {
                  children: [
                    k.jsx(oi, {
                      onClick: () => c(e),
                      text: d(e.name) ? "Save Theme" : "Add Theme",
                      icon: d(e.name) ? Hm : Wm,
                      disabled: a ? void 0 : !0,
                    }),
                    k.jsx(oi, {
                      onClick: () => f(e.name),
                      text: "Remove Theme",
                      icon: L2,
                      disabled: !d(e.name),
                    }),
                  ],
                }),
              }),
            ],
          }),
        }),
        k.jsxs(kI, {
          name: e.name,
          colors: e.colors,
          children: [
            k.jsx(EI, { src: e.image }),
            k.jsxs($I, {
              children: [
                k.jsx(vu, { title: "Default", colorVar: "--default-color" }),
                k.jsx(vu, { title: "Accent", colorVar: "--accent-color" }),
                k.jsx(vu, { title: "Accent 2", colorVar: "--accent-color2" }),
              ],
            }),
          ],
        }),
      ],
    });
  },
  PI = D.div`
  position: relative;
  border: 2px solid var(--default-color);
  display: flex;
  padding: 10px 0 10px 20px;
  height: calc(100% - 40px);
  ${({ error: e }) =>
    e &&
    `
        ::after{
            content: "${e}";
            color: var(--accent-color);
            position: absolute;
            top: 10px;
            right: 15px;
            font-size: 0.8rem;
        }
    `}
`,
  jI = D.textarea`
  background-color: var(--bg-color);
  color: var(--default-color);
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  resize: none;
`,
  RI = JSON.stringify(
    [
      {
        title: "Title",
        links: [
          { label: "label", value: "url" },
          { label: "label", value: "url" },
          { label: "label", value: "url" },
        ],
      },
    ],
    null,
    2
  ),
  NI = () => {
    try {
      const t = localStorage.getItem("link-groups");
      if (t) return JSON.stringify(Wt.parse(t), null, 2);
    } catch {}
    const e = Wt.getRaw();
    return e
      ? e
          .replaceAll(
            ":[{",
            `:[
      {
`
          )
          .replaceAll(
            '[{"',
            `[
  {
"`
          )
          .replaceAll(
            "}]}]",
            `}]
  }
]`
          )
          .replaceAll(
            "]},{",
            `
  },
  {
`
          )
          .replaceAll(
            "},{",
            `
      },
      {
`
          )
          .replaceAll(
            '"}]',
            `"
      }
    ]`
          )
          .replaceAll('"title":', '    "title":')
          .replaceAll(
            '"links":',
            `
    "links":`
          )
          .replaceAll('"label":', '        "label":')
          .replaceAll(
            '"value":',
            `
        "value":`
          )
      : JSON.stringify(Wt.getWithFallback(), null, 2);
  },
  FI = ({ onChange: e }) => {
    const [t, n] = B.useState(void 0),
      [r, a] = B.useState(NI()),
      i = (o) => {
        a(o);
        try {
          const l = Wt.parse(o);
          n(void 0), e(l);
        } catch {
          n("Your links are not parseable. Probably you have a Syntax Error?");
        }
      };
    return k.jsx(PI, {
      error: t,
      children: k.jsx(jI, {
        onChange: (o) => i(o.currentTarget.value),
        placeholder: RI,
        value: r,
      }),
    });
  },
  II = D.div`
  width: 100%;
`,
  LI = ({ linkGroups: e, setLinkGroups: t }) =>
    k.jsxs(II, {
      children: [
        k.jsx(zl, { children: "Links" }),
        k.jsx(FI, { onChange: t, initialValue: e }),
      ],
    }),
  MI = D.div`
  margin-bottom: 20px;
  display: flex;
  @media screen and (max-width: 1300px) {
    flex-direction: column;
  }
`,
  mu = D.table`
  width: 50%;
  padding: 0 20px;
  @media screen and (max-width: 1300px) {
    width: 100%;
  }
`,
  My = D.tr`
  > td {
    padding: 10px 0;
    overflow: hidden;
    white-space: nowrap;
  }
  > :first-of-type {
    max-width: 100px;
  }
  > :nth-of-type(3) {
    max-width: 300px;
  }
  > :last-of-type {
    width: 50px;
  }
`,
  zI = D(On)`
  font-size: 1rem;
  display: inline;
`,
  dg = D(Ml)`
  width: calc(100% - 50px);
`,
  DI = ({ value: e, url: t, deleteThis: n }) =>
    k.jsxs(My, {
      children: [
        k.jsx("td", { title: e, children: `"${e}"` }),
        k.jsx("td", { children: " : " }),
        k.jsx("td", { title: t, children: `"${t}"` }),
        k.jsxs("td", {
          children: [" ", k.jsx(On, { icon: Um, onClick: () => n() })],
        }),
      ],
    }),
  BI = ({ add: e }) => {
    const [t, n] = B.useState(""),
      [r, a] = B.useState("");
    return k.jsxs(My, {
      children: [
        k.jsx("td", {
          children: k.jsx(dg, {
            value: t,
            onChange: (i) => n(i),
            placeholder: "search string",
          }),
        }),
        k.jsx("td", { children: " : " }),
        k.jsx("td", {
          children: k.jsx(dg, {
            value: r,
            onChange: (i) => a(i),
            placeholder: "destination",
          }),
        }),
        k.jsx("td", {
          children: k.jsx(zI, {
            disabled: !t || !r,
            onClick: () => t && r && e(t, r),
            icon: Wm,
          }),
        }),
      ],
    });
  },
  HI = ({ links: e, onChange: t }) => {
    const n = (l) => {
        const s = { ...e };
        delete s[l], t({ ...s });
      },
      r = (l, s) => {
        const u = { ...e };
        (u[l] = s), t({ ...u });
      },
      a = Object.keys(e)
        .sort()
        .map((l) =>
          k.jsx(DI, { value: l, url: e[l], deleteThis: () => n(l) }, l)
        ),
      i = [...a].splice(0, a.length / 2 + (a.length % 2)),
      o = [...a].splice(a.length / 2 + (a.length % 2));
    return k.jsxs("div", {
      children: [
        k.jsxs(MI, {
          children: [
            k.jsx(mu, { children: k.jsx("tbody", { children: i }) }),
            k.jsx(mu, { children: k.jsx("tbody", { children: o }) }),
          ],
        }),
        k.jsx(mu, {
          children: k.jsx("tbody", { children: k.jsx(BI, { add: r }) }),
        }),
      ],
    });
  },
  UI = D.div`
  width: 100%;
  overflow-y: auto;
`,
  WI = D.div`
  display: flex;
  align-items: center;
  padding-right: 40px;
  gap: 12px;
`,
  GI = D(Ml)`
  width: 100%;
  height: 40px;
  padding-top: 0;
  padding-bottom: 0;
`,
  VI = ({ searchSettings: e, setSearchSettings: t }) => {
    const n = (r) => {
      t({ ...e, engine: r });
    };
    return k.jsxs(UI, {
      children: [
        k.jsx(zl, { children: "Searchbar" }),
        k.jsx(Pr, {
          children: k.jsxs(WI, {
            children: [
              k.jsx(Ly, { currentValue: e.engine, values: Bm, onChange: n }),
              k.jsx(GI, {
                value: e.engine,
                onChange: n,
                placeholder: `Engine url (${Wn} for query placement)`,
              }),
            ],
          }),
        }),
        k.jsx("br", {}),
        k.jsx(zl, { children: "Fast Forward Search" }),
        k.jsx(HI, {
          links: e.fastForward,
          onChange: (r) => t({ ...e, fastForward: r }),
        }),
      ],
    });
  },
  YI = D.div`
  background-color: var(--bg-color);
  position: absolute;

  top: var(--settings-window-gap);
  right: var(--settings-window-gap);
  bottom: var(--settings-window-gap);
  left: var(--settings-window-gap);

  border: 2px solid var(--default-color);
  padding: 60px 30px 30px 30px;
  box-shadow: 10px 10px 0px var(--accent-color);
`,
  KI = D.div`
  width: 100%;
  height: calc(100% - 80px);
  display: flex;
`,
  XI = D.div`
  ::before {
    content: "Settings";
    margin: 5px 20px 0 10px;
  }
  color: var(--bg-color);
  background-color: var(--default-color);
  width: 100%;
  height: 32px;
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-between;
`,
  QI = D.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  left: 30px;
  right: 30px;
  bottom: 30px;
`,
  qI = D.div`
  background-color: var(--bg-color);
  width: 400px;
  height: 100%;
  margin-right: 30px;
  padding-right: 20px;
  overflow-y: auto;
`,
  zl = D.p`
  font-size: 1rem;
  padding: 10px 0;
`,
  Pr = D.div`
  background-color: var(--bg-color);
  position: relative;
  padding: 10px 0px;
  + {
    margin-top: 15px;
  }
`,
  ZI = D(On)`
  z-index: 15;
  height: 30px;
  opacity: 1;
  padding: 0;
`,
  oi = D(On)`
  background-color: var(--default-color);
  color: var(--bg-color);
  font-size: 1rem;
  padding: 10px 20px;
  :enabled:hover {
    animation: circling-shadow-small 2s ease 0s infinite normal;
  }
`,
  JI = D.div`
  width: 100%;
  display: flex;
  justify-content: center;
`,
  eL = D.button`
  font-size: 1rem;
  font-weight: 500;
  transition: 0.3s;
  height: 100%;
  min-width: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  outline: none;
  border: none;
  cursor: ${({ active: e }) => (e ? "default" : "pointer")};
  ${({ active: e }) => e && "text-shadow: var(--text-shadow-downwards)"};
  :hover {
    text-shadow: var(--text-shadow-downwards);
  }
`,
  pg = ["Links", "Appearance", "Searchbar", "Changelog"],
  tL = ({ hidePopup: e }) => {
    const [t, n] = B.useState(pg[0]),
      [r, a] = B.useState(Ai.getWithFallback()),
      [i, o] = B.useState(Dt.getWithFallback()),
      [l, s] = B.useState(Wt.getWithFallback()),
      [u, c] = B.useState(Oi.getWithFallback()),
      f = () => {
        Ai.set(r), Dt.set(i), Oi.set(u), Wt.set(l), window.location.reload();
      };
    return k.jsxs(YI, {
      children: [
        k.jsxs(XI, {
          children: [
            k.jsx(JI, {
              children: pg.map((d) =>
                k.jsx(
                  eL,
                  { active: d === t, onClick: () => n(d), children: d },
                  d
                )
              ),
            }),
            k.jsx(ZI, { inverted: !0, onClick: () => e(), icon: H2 }),
          ],
        }),
        k.jsxs(KI, {
          children: [
            t === "Links" && k.jsx(LI, { linkGroups: l, setLinkGroups: s }),
            t === "Appearance" &&
              k.jsx(TI, { design: r, setDesign: a, themes: i, setThemes: o }),
            t === "Searchbar" &&
              k.jsx(VI, { searchSettings: u, setSearchSettings: c }),
            t === "Changelog" && k.jsx(K3, {}),
          ],
        }),
        k.jsxs(QI, {
          children: [
            k.jsx(oi, { onClick: () => f(), text: "Apply Changes", icon: Hm }),
            k.jsx(oi, {
              onClick: () => {
                window.location.reload();
              },
              text: "Discard Changes",
              icon: F2,
            }),
            k.jsx(oi, {
              onClick: () => {
                localStorage.clear(), window.location.reload();
              },
              text: "Delete All Settings",
              icon: Um,
            }),
          ],
        }),
      ],
    });
  },
  nL = D.button`
  position: fixed;
  top: 20px;
  right: 20px;
  font-size: 20px;

  color: var(--default-color);
  background-color: transparent;
  border: none;
  opacity: 0.3;

  cursor: pointer;
  transition: 0.3s;

  :hover {
    opacity: 0.5;
    color: var(--accent-color2);
    animation: box-flicker 0.01s ease 0s infinite alternate;
  }
  :focus {
    outline: none;
  }
`,
  rL = D.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: var(--bg-color);
  opacity: 0.7;
`,
  aL = () => {
    const [e, t] = B.useState(!1),
      n = () => t(!1);
    return k.jsxs(k.Fragment, {
      children: [
        k.jsx(nL, { onClick: () => t(!0), children: k.jsx(ga, { icon: z2 }) }),
        e &&
          k.jsxs(k.Fragment, {
            children: [k.jsx(rL, {}), k.jsx(tL, { hidePopup: n })],
          }),
      ],
    });
  },
  iL = D.div`
  max-width: 1920px;
  height: 100%;
  margin: auto;
  position: relative;
`,
  oL = D.div`
  padding: 0px 100px;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  height: calc(100% - 100px);
`,
  lL = D.img`
  height: 400px;
  width: 400px;
  border: 2px solid var(--default-color);
  padding: 10px;
  object-fit: cover;

  animation: circling-shadow 4s ease 0s infinite normal;
`,
  sL = () => {
    const [e, t] = B.useState(Ai.getWithFallback().image);
    return k.jsxs(iL, {
      children: [
        k.jsxs(oL, {
          children: [
            k.jsx("div", {
              children: k.jsx(lL, { src: e, onError: () => t(Dm[0].value) }),
            }),
            k.jsx(R2, {}),
          ],
        }),
        k.jsx(E2, {}),
        k.jsx(aL, {}),
      ],
    });
  },
  uL = () => {
    const e = document.documentElement,
      t = Ai.getWithFallback().colors;
    return (
      Object.keys(t).forEach((n) => {
        e.style.setProperty(n, t[n]);
      }),
      k.jsx(sL, {})
    );
  };
const zy = document.getElementById("root");
if (!zy) throw new Error("Missing root node");
$m(zy).render(k.jsx(B.StrictMode, { children: k.jsx(uL, {}) }));