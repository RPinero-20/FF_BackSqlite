"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var dy = Object.defineProperty;
var my = (e, a, n) => a in e ? dy(e, a, { enumerable: !0, configurable: !0, writable: !0, value: n }) : e[a] = n;
var Mn = (e, a, n) => (my(e, typeof a != "symbol" ? a + "" : a, n), n);
function hy(e, a) { for (var n = 0; n < a.length; n++) {
    const r = a[n];
    if (typeof r != "string" && !Array.isArray(r)) {
        for (const i in r)
            if (i !== "default" && !(i in e)) {
                const t = Object.getOwnPropertyDescriptor(r, i);
                t && Object.defineProperty(e, i, t.get ? t : { enumerable: !0, get: () => r[i] });
            }
    }
} return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, { value: "Module" })); }
(function () { const a = document.createElement("link").relList; if (a && a.supports && a.supports("modulepreload"))
    return; for (const i of document.querySelectorAll('link[rel="modulepreload"]'))
    r(i); new MutationObserver(i => { for (const t of i)
    if (t.type === "childList")
        for (const s of t.addedNodes)
            s.tagName === "LINK" && s.rel === "modulepreload" && r(s); }).observe(document, { childList: !0, subtree: !0 }); function n(i) { const t = {}; return i.integrity && (t.integrity = i.integrity), i.referrerPolicy && (t.referrerPolicy = i.referrerPolicy), i.crossOrigin === "use-credentials" ? t.credentials = "include" : i.crossOrigin === "anonymous" ? t.credentials = "omit" : t.credentials = "same-origin", t; } function r(i) { if (i.ep)
    return; i.ep = !0; const t = n(i); fetch(i.href, t); } })();
function xr(e) { return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e; }
var Uh = { exports: {} }, ks = {}, Bh = { exports: {} }, V = {};
var Ni = Symbol.for("react.element"), gy = Symbol.for("react.portal"), py = Symbol.for("react.fragment"), fy = Symbol.for("react.strict_mode"), by = Symbol.for("react.profiler"), yy = Symbol.for("react.provider"), ky = Symbol.for("react.context"), vy = Symbol.for("react.forward_ref"), wy = Symbol.for("react.suspense"), jy = Symbol.for("react.memo"), zy = Symbol.for("react.lazy"), qd = Symbol.iterator;
function xy(e) { return e === null || typeof e != "object" ? null : (e = qd && e[qd] || e["@@iterator"], typeof e == "function" ? e : null); }
var Wh = { isMounted: function () { return !1; }, enqueueForceUpdate: function () { }, enqueueReplaceState: function () { }, enqueueSetState: function () { } }, Hh = Object.assign, Vh = {};
function qr(e, a, n) { this.props = e, this.context = a, this.refs = Vh, this.updater = n || Wh; }
qr.prototype.isReactComponent = {};
qr.prototype.setState = function (e, a) { if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables."); this.updater.enqueueSetState(this, e, a, "setState"); };
qr.prototype.forceUpdate = function (e) { this.updater.enqueueForceUpdate(this, e, "forceUpdate"); };
function Qh() { }
Qh.prototype = qr.prototype;
function Zc(e, a, n) { this.props = e, this.context = a, this.refs = Vh, this.updater = n || Wh; }
var eu = Zc.prototype = new Qh;
eu.constructor = Zc;
Hh(eu, qr.prototype);
eu.isPureReactComponent = !0;
var _d = Array.isArray, Kh = Object.prototype.hasOwnProperty, au = { current: null }, Gh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Yh(e, a, n) { var r, i = {}, t = null, s = null; if (a != null)
    for (r in a.ref !== void 0 && (s = a.ref), a.key !== void 0 && (t = "" + a.key), a)
        Kh.call(a, r) && !Gh.hasOwnProperty(r) && (i[r] = a[r]); var o = arguments.length - 2; if (o === 1)
    i.children = n;
else if (1 < o) {
    for (var l = Array(o), c = 0; c < o; c++)
        l[c] = arguments[c + 2];
    i.children = l;
} if (e && e.defaultProps)
    for (r in o = e.defaultProps, o)
        i[r] === void 0 && (i[r] = o[r]); return { $$typeof: Ni, type: e, key: t, ref: s, props: i, _owner: au.current }; }
function qy(e, a) { return { $$typeof: Ni, type: e.type, key: a, ref: e.ref, props: e.props, _owner: e._owner }; }
function nu(e) { return typeof e == "object" && e !== null && e.$$typeof === Ni; }
function _y(e) { var a = { "=": "=0", ":": "=2" }; return "$" + e.replace(/[=:]/g, function (n) { return a[n]; }); }
var Sd = /\/+/g;
function io(e, a) { return typeof e == "object" && e !== null && e.key != null ? _y("" + e.key) : a.toString(36); }
function ft(e, a, n, r, i) { var t = typeof e; (t === "undefined" || t === "boolean") && (e = null); var s = !1; if (e === null)
    s = !0;
else
    switch (t) {
        case "string":
        case "number":
            s = !0;
            break;
        case "object": switch (e.$$typeof) {
            case Ni:
            case gy: s = !0;
        }
    } if (s)
    return s = e, i = i(s), e = r === "" ? "." + io(s, 0) : r, _d(i) ? (n = "", e != null && (n = e.replace(Sd, "$&/") + "/"), ft(i, a, n, "", function (c) { return c; })) : i != null && (nu(i) && (i = qy(i, n + (!i.key || s && s.key === i.key ? "" : ("" + i.key).replace(Sd, "$&/") + "/") + e)), a.push(i)), 1; if (s = 0, r = r === "" ? "." : r + ":", _d(e))
    for (var o = 0; o < e.length; o++) {
        t = e[o];
        var l = r + io(t, o);
        s += ft(t, a, n, l, i);
    }
else if (l = xy(e), typeof l == "function")
    for (e = l.call(e), o = 0; !(t = e.next()).done;)
        t = t.value, l = r + io(t, o++), s += ft(t, a, n, l, i);
else if (t === "object")
    throw a = String(e), Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead."); return s; }
function Qi(e, a, n) { if (e == null)
    return e; var r = [], i = 0; return ft(e, r, "", "", function (t) { return a.call(n, t, i++); }), r; }
function Sy(e) { if (e._status === -1) {
    var a = e._result;
    a = a(), a.then(function (n) { (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n); }, function (n) { (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n); }), e._status === -1 && (e._status = 0, e._result = a);
} if (e._status === 1)
    return e._result.default; throw e._result; }
var Me = { current: null }, bt = { transition: null }, Oy = { ReactCurrentDispatcher: Me, ReactCurrentBatchConfig: bt, ReactCurrentOwner: au };
V.Children = { map: Qi, forEach: function (e, a, n) { Qi(e, function () { a.apply(this, arguments); }, n); }, count: function (e) { var a = 0; return Qi(e, function () { a++; }), a; }, toArray: function (e) { return Qi(e, function (a) { return a; }) || []; }, only: function (e) { if (!nu(e))
        throw Error("React.Children.only expected to receive a single React element child."); return e; } };
V.Component = qr;
V.Fragment = py;
V.Profiler = by;
V.PureComponent = Zc;
V.StrictMode = fy;
V.Suspense = wy;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Oy;
V.cloneElement = function (e, a, n) { if (e == null)
    throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + "."); var r = Hh({}, e.props), i = e.key, t = e.ref, s = e._owner; if (a != null) {
    if (a.ref !== void 0 && (t = a.ref, s = au.current), a.key !== void 0 && (i = "" + a.key), e.type && e.type.defaultProps)
        var o = e.type.defaultProps;
    for (l in a)
        Kh.call(a, l) && !Gh.hasOwnProperty(l) && (r[l] = a[l] === void 0 && o !== void 0 ? o[l] : a[l]);
} var l = arguments.length - 2; if (l === 1)
    r.children = n;
else if (1 < l) {
    o = Array(l);
    for (var c = 0; c < l; c++)
        o[c] = arguments[c + 2];
    r.children = o;
} return { $$typeof: Ni, type: e.type, key: i, ref: t, props: r, _owner: s }; };
V.createContext = function (e) { return e = { $$typeof: ky, _currentValue: e, _currentValue2: e, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, e.Provider = { $$typeof: yy, _context: e }, e.Consumer = e; };
V.createElement = Yh;
V.createFactory = function (e) { var a = Yh.bind(null, e); return a.type = e, a; };
V.createRef = function () { return { current: null }; };
V.forwardRef = function (e) { return { $$typeof: vy, render: e }; };
V.isValidElement = nu;
V.lazy = function (e) { return { $$typeof: zy, _payload: { _status: -1, _result: e }, _init: Sy }; };
V.memo = function (e, a) { return { $$typeof: jy, type: e, compare: a === void 0 ? null : a }; };
V.startTransition = function (e) { var a = bt.transition; bt.transition = {}; try {
    e();
}
finally {
    bt.transition = a;
} };
V.unstable_act = function () { throw Error("act(...) is not supported in production builds of React."); };
V.useCallback = function (e, a) { return Me.current.useCallback(e, a); };
V.useContext = function (e) { return Me.current.useContext(e); };
V.useDebugValue = function () { };
V.useDeferredValue = function (e) { return Me.current.useDeferredValue(e); };
V.useEffect = function (e, a) { return Me.current.useEffect(e, a); };
V.useId = function () { return Me.current.useId(); };
V.useImperativeHandle = function (e, a, n) { return Me.current.useImperativeHandle(e, a, n); };
V.useInsertionEffect = function (e, a) { return Me.current.useInsertionEffect(e, a); };
V.useLayoutEffect = function (e, a) { return Me.current.useLayoutEffect(e, a); };
V.useMemo = function (e, a) { return Me.current.useMemo(e, a); };
V.useReducer = function (e, a, n) { return Me.current.useReducer(e, a, n); };
V.useRef = function (e) { return Me.current.useRef(e); };
V.useState = function (e) { return Me.current.useState(e); };
V.useSyncExternalStore = function (e, a, n) { return Me.current.useSyncExternalStore(e, a, n); };
V.useTransition = function () { return Me.current.useTransition(); };
V.version = "18.2.0";
Bh.exports = V;
var O = Bh.exports;
const U = xr(O), Ey = hy({ __proto__: null, default: U }, [O]);
var Py = O, Cy = Symbol.for("react.element"), Ty = Symbol.for("react.fragment"), Ry = Object.prototype.hasOwnProperty, Ny = Py.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, Iy = { key: !0, ref: !0, __self: !0, __source: !0 };
function Xh(e, a, n) { var r, i = {}, t = null, s = null; n !== void 0 && (t = "" + n), a.key !== void 0 && (t = "" + a.key), a.ref !== void 0 && (s = a.ref); for (r in a)
    Ry.call(a, r) && !Iy.hasOwnProperty(r) && (i[r] = a[r]); if (e && e.defaultProps)
    for (r in a = e.defaultProps, a)
        i[r] === void 0 && (i[r] = a[r]); return { $$typeof: Cy, type: e, key: t, ref: s, props: i, _owner: Ny.current }; }
ks.Fragment = Ty;
ks.jsx = Xh;
ks.jsxs = Xh;
Uh.exports = ks;
var h = Uh.exports, Vo = {}, Jh = { exports: {} }, Ye = {}, Zh = { exports: {} }, eg = {};
(function (e) { function a(C, $) { var W = C.length; C.push($); e: for (; 0 < W;) {
    var G = W - 1 >>> 1, ee = C[G];
    if (0 < i(ee, $))
        C[G] = $, C[W] = ee, W = G;
    else
        break e;
} } function n(C) { return C.length === 0 ? null : C[0]; } function r(C) { if (C.length === 0)
    return null; var $ = C[0], W = C.pop(); if (W !== $) {
    C[0] = W;
    e: for (var G = 0, ee = C.length, xe = ee >>> 1; G < xe;) {
        var ge = 2 * (G + 1) - 1, ro = C[ge], pn = ge + 1, Vi = C[pn];
        if (0 > i(ro, W))
            pn < ee && 0 > i(Vi, ro) ? (C[G] = Vi, C[pn] = W, G = pn) : (C[G] = ro, C[ge] = W, G = ge);
        else if (pn < ee && 0 > i(Vi, W))
            C[G] = Vi, C[pn] = W, G = pn;
        else
            break e;
    }
} return $; } function i(C, $) { var W = C.sortIndex - $.sortIndex; return W !== 0 ? W : C.id - $.id; } if (typeof performance == "object" && typeof performance.now == "function") {
    var t = performance;
    e.unstable_now = function () { return t.now(); };
}
else {
    var s = Date, o = s.now();
    e.unstable_now = function () { return s.now() - o; };
} var l = [], c = [], d = 1, b = null, g = 3, k = !1, m = !1, v = !1, j = typeof setTimeout == "function" ? setTimeout : null, y = typeof clearTimeout == "function" ? clearTimeout : null, f = typeof setImmediate < "u" ? setImmediate : null; typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling); function u(C) { for (var $ = n(c); $ !== null;) {
    if ($.callback === null)
        r(c);
    else if ($.startTime <= C)
        r(c), $.sortIndex = $.expirationTime, a(l, $);
    else
        break;
    $ = n(c);
} } function p(C) { if (v = !1, u(C), !m)
    if (n(l) !== null)
        m = !0, A(w);
    else {
        var $ = n(c);
        $ !== null && L(p, $.startTime - C);
    } } function w(C, $) { m = !1, v && (v = !1, y(_), _ = -1), k = !0; var W = g; try {
    for (u($), b = n(l); b !== null && (!(b.expirationTime > $) || C && !E());) {
        var G = b.callback;
        if (typeof G == "function") {
            b.callback = null, g = b.priorityLevel;
            var ee = G(b.expirationTime <= $);
            $ = e.unstable_now(), typeof ee == "function" ? b.callback = ee : b === n(l) && r(l), u($);
        }
        else
            r(l);
        b = n(l);
    }
    if (b !== null)
        var xe = !0;
    else {
        var ge = n(c);
        ge !== null && L(p, ge.startTime - $), xe = !1;
    }
    return xe;
}
finally {
    b = null, g = W, k = !1;
} } var z = !1, q = null, _ = -1, T = 5, P = -1; function E() { return !(e.unstable_now() - P < T); } function S() { if (q !== null) {
    var C = e.unstable_now();
    P = C;
    var $ = !0;
    try {
        $ = q(!0, C);
    }
    finally {
        $ ? N() : (z = !1, q = null);
    }
}
else
    z = !1; } var N; if (typeof f == "function")
    N = function () { f(S); };
else if (typeof MessageChannel < "u") {
    var I = new MessageChannel, M = I.port2;
    I.port1.onmessage = S, N = function () { M.postMessage(null); };
}
else
    N = function () { j(S, 0); }; function A(C) { q = C, z || (z = !0, N()); } function L(C, $) { _ = j(function () { C(e.unstable_now()); }, $); } e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function (C) { C.callback = null; }, e.unstable_continueExecution = function () { m || k || (m = !0, A(w)); }, e.unstable_forceFrameRate = function (C) { 0 > C || 125 < C ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : T = 0 < C ? Math.floor(1e3 / C) : 5; }, e.unstable_getCurrentPriorityLevel = function () { return g; }, e.unstable_getFirstCallbackNode = function () { return n(l); }, e.unstable_next = function (C) { switch (g) {
    case 1:
    case 2:
    case 3:
        var $ = 3;
        break;
    default: $ = g;
} var W = g; g = $; try {
    return C();
}
finally {
    g = W;
} }, e.unstable_pauseExecution = function () { }, e.unstable_requestPaint = function () { }, e.unstable_runWithPriority = function (C, $) { switch (C) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5: break;
    default: C = 3;
} var W = g; g = C; try {
    return $();
}
finally {
    g = W;
} }, e.unstable_scheduleCallback = function (C, $, W) { var G = e.unstable_now(); switch (typeof W == "object" && W !== null ? (W = W.delay, W = typeof W == "number" && 0 < W ? G + W : G) : W = G, C) {
    case 1:
        var ee = -1;
        break;
    case 2:
        ee = 250;
        break;
    case 5:
        ee = 1073741823;
        break;
    case 4:
        ee = 1e4;
        break;
    default: ee = 5e3;
} return ee = W + ee, C = { id: d++, callback: $, priorityLevel: C, startTime: W, expirationTime: ee, sortIndex: -1 }, W > G ? (C.sortIndex = W, a(c, C), n(l) === null && C === n(c) && (v ? (y(_), _ = -1) : v = !0, L(p, W - G))) : (C.sortIndex = ee, a(l, C), m || k || (m = !0, A(w))), C; }, e.unstable_shouldYield = E, e.unstable_wrapCallback = function (C) { var $ = g; return function () { var W = g; g = $; try {
    return C.apply(this, arguments);
}
finally {
    g = W;
} }; }; })(eg);
Zh.exports = eg;
var Dy = Zh.exports;
var ag = O, Ge = Dy;
function D(e) { for (var a = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
    a += "&args[]=" + encodeURIComponent(arguments[n]); return "Minified React error #" + e + "; visit " + a + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."; }
var ng = new Set, di = {};
function Tn(e, a) { pr(e, a), pr(e + "Capture", a); }
function pr(e, a) { for (di[e] = a, e = 0; e < a.length; e++)
    ng.add(a[e]); }
var Ta = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Qo = Object.prototype.hasOwnProperty, My = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Od = {}, Ed = {};
function Ay(e) { return Qo.call(Ed, e) ? !0 : Qo.call(Od, e) ? !1 : My.test(e) ? Ed[e] = !0 : (Od[e] = !0, !1); }
function Ly(e, a, n, r) { if (n !== null && n.type === 0)
    return !1; switch (typeof a) {
    case "function":
    case "symbol": return !0;
    case "boolean": return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
    default: return !1;
} }
function Fy(e, a, n, r) { if (a === null || typeof a > "u" || Ly(e, a, n, r))
    return !0; if (r)
    return !1; if (n !== null)
    switch (n.type) {
        case 3: return !a;
        case 4: return a === !1;
        case 5: return isNaN(a);
        case 6: return isNaN(a) || 1 > a;
    } return !1; }
function Ae(e, a, n, r, i, t, s) { this.acceptsBooleans = a === 2 || a === 3 || a === 4, this.attributeName = r, this.attributeNamespace = i, this.mustUseProperty = n, this.propertyName = e, this.type = a, this.sanitizeURL = t, this.removeEmptyString = s; }
var Ee = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function (e) { Ee[e] = new Ae(e, 0, !1, e, null, !1, !1); });
[["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function (e) { var a = e[0]; Ee[a] = new Ae(a, 1, !1, e[1], null, !1, !1); });
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) { Ee[e] = new Ae(e, 2, !1, e.toLowerCase(), null, !1, !1); });
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function (e) { Ee[e] = new Ae(e, 2, !1, e, null, !1, !1); });
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function (e) { Ee[e] = new Ae(e, 3, !1, e.toLowerCase(), null, !1, !1); });
["checked", "multiple", "muted", "selected"].forEach(function (e) { Ee[e] = new Ae(e, 3, !0, e, null, !1, !1); });
["capture", "download"].forEach(function (e) { Ee[e] = new Ae(e, 4, !1, e, null, !1, !1); });
["cols", "rows", "size", "span"].forEach(function (e) { Ee[e] = new Ae(e, 6, !1, e, null, !1, !1); });
["rowSpan", "start"].forEach(function (e) { Ee[e] = new Ae(e, 5, !1, e.toLowerCase(), null, !1, !1); });
var ru = /[\-:]([a-z])/g;
function iu(e) { return e[1].toUpperCase(); }
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function (e) { var a = e.replace(ru, iu); Ee[a] = new Ae(a, 1, !1, e, null, !1, !1); });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function (e) { var a = e.replace(ru, iu); Ee[a] = new Ae(a, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1); });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) { var a = e.replace(ru, iu); Ee[a] = new Ae(a, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1); });
["tabIndex", "crossOrigin"].forEach(function (e) { Ee[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !1, !1); });
Ee.xlinkHref = new Ae("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function (e) { Ee[e] = new Ae(e, 1, !1, e.toLowerCase(), null, !0, !0); });
function tu(e, a, n, r) { var i = Ee.hasOwnProperty(a) ? Ee[a] : null; (i !== null ? i.type !== 0 : r || !(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N") && (Fy(a, n, i, r) && (n = null), r || i === null ? Ay(a) && (n === null ? e.removeAttribute(a) : e.setAttribute(a, "" + n)) : i.mustUseProperty ? e[i.propertyName] = n === null ? i.type === 3 ? !1 : "" : n : (a = i.attributeName, r = i.attributeNamespace, n === null ? e.removeAttribute(a) : (i = i.type, n = i === 3 || i === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, a, n) : e.setAttribute(a, n)))); }
var Ma = ag.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Ki = Symbol.for("react.element"), Kn = Symbol.for("react.portal"), Gn = Symbol.for("react.fragment"), su = Symbol.for("react.strict_mode"), Ko = Symbol.for("react.profiler"), rg = Symbol.for("react.provider"), ig = Symbol.for("react.context"), ou = Symbol.for("react.forward_ref"), Go = Symbol.for("react.suspense"), Yo = Symbol.for("react.suspense_list"), lu = Symbol.for("react.memo"), Ba = Symbol.for("react.lazy"), tg = Symbol.for("react.offscreen"), Pd = Symbol.iterator;
function Dr(e) { return e === null || typeof e != "object" ? null : (e = Pd && e[Pd] || e["@@iterator"], typeof e == "function" ? e : null); }
var ue = Object.assign, to;
function Vr(e) {
    if (to === void 0)
        try {
            throw Error();
        }
        catch (n) {
            var a = n.stack.trim().match(/\n( *(at )?)/);
            to = a && a[1] || "";
        }
    return `
` + to + e;
}
var so = !1;
function oo(e, a) {
    if (!e || so)
        return "";
    so = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (a)
            if (a = function () { throw Error(); }, Object.defineProperty(a.prototype, "props", { set: function () { throw Error(); } }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(a, []);
                }
                catch (c) {
                    var r = c;
                }
                Reflect.construct(e, [], a);
            }
            else {
                try {
                    a.call();
                }
                catch (c) {
                    r = c;
                }
                e.call(a.prototype);
            }
        else {
            try {
                throw Error();
            }
            catch (c) {
                r = c;
            }
            e();
        }
    }
    catch (c) {
        if (c && r && typeof c.stack == "string") {
            for (var i = c.stack.split(`
`), t = r.stack.split(`
`), s = i.length - 1, o = t.length - 1; 1 <= s && 0 <= o && i[s] !== t[o];)
                o--;
            for (; 1 <= s && 0 <= o; s--, o--)
                if (i[s] !== t[o]) {
                    if (s !== 1 || o !== 1)
                        do
                            if (s--, o--, 0 > o || i[s] !== t[o]) {
                                var l = `
` + i[s].replace(" at new ", " at ");
                                return e.displayName && l.includes("<anonymous>") && (l = l.replace("<anonymous>", e.displayName)), l;
                            }
                        while (1 <= s && 0 <= o);
                    break;
                }
        }
    }
    finally {
        so = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? Vr(e) : "";
}
function $y(e) { switch (e.tag) {
    case 5: return Vr(e.type);
    case 16: return Vr("Lazy");
    case 13: return Vr("Suspense");
    case 19: return Vr("SuspenseList");
    case 0:
    case 2:
    case 15: return e = oo(e.type, !1), e;
    case 11: return e = oo(e.type.render, !1), e;
    case 1: return e = oo(e.type, !0), e;
    default: return "";
} }
function Xo(e) { if (e == null)
    return null; if (typeof e == "function")
    return e.displayName || e.name || null; if (typeof e == "string")
    return e; switch (e) {
    case Gn: return "Fragment";
    case Kn: return "Portal";
    case Ko: return "Profiler";
    case su: return "StrictMode";
    case Go: return "Suspense";
    case Yo: return "SuspenseList";
} if (typeof e == "object")
    switch (e.$$typeof) {
        case ig: return (e.displayName || "Context") + ".Consumer";
        case rg: return (e._context.displayName || "Context") + ".Provider";
        case ou:
            var a = e.render;
            return e = e.displayName, e || (e = a.displayName || a.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case lu: return a = e.displayName || null, a !== null ? a : Xo(e.type) || "Memo";
        case Ba:
            a = e._payload, e = e._init;
            try {
                return Xo(e(a));
            }
            catch (_q) { }
    } return null; }
function Uy(e) { var a = e.type; switch (e.tag) {
    case 24: return "Cache";
    case 9: return (a.displayName || "Context") + ".Consumer";
    case 10: return (a._context.displayName || "Context") + ".Provider";
    case 18: return "DehydratedFragment";
    case 11: return e = a.render, e = e.displayName || e.name || "", a.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
    case 7: return "Fragment";
    case 5: return a;
    case 4: return "Portal";
    case 3: return "Root";
    case 6: return "Text";
    case 16: return Xo(a);
    case 8: return a === su ? "StrictMode" : "Mode";
    case 22: return "Offscreen";
    case 12: return "Profiler";
    case 21: return "Scope";
    case 13: return "Suspense";
    case 19: return "SuspenseList";
    case 25: return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
        if (typeof a == "function")
            return a.displayName || a.name || null;
        if (typeof a == "string")
            return a;
} return null; }
function on(e) { switch (typeof e) {
    case "boolean":
    case "number":
    case "string":
    case "undefined": return e;
    case "object": return e;
    default: return "";
} }
function sg(e) { var a = e.type; return (e = e.nodeName) && e.toLowerCase() === "input" && (a === "checkbox" || a === "radio"); }
function By(e) { var a = sg(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, a), r = "" + e[a]; if (!e.hasOwnProperty(a) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
    var i = n.get, t = n.set;
    return Object.defineProperty(e, a, { configurable: !0, get: function () { return i.call(this); }, set: function (s) { r = "" + s, t.call(this, s); } }), Object.defineProperty(e, a, { enumerable: n.enumerable }), { getValue: function () { return r; }, setValue: function (s) { r = "" + s; }, stopTracking: function () { e._valueTracker = null, delete e[a]; } };
} }
function Gi(e) { e._valueTracker || (e._valueTracker = By(e)); }
function og(e) { if (!e)
    return !1; var a = e._valueTracker; if (!a)
    return !0; var n = a.getValue(), r = ""; return e && (r = sg(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (a.setValue(e), !0) : !1; }
function Tt(e) { if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
    return null; try {
    return e.activeElement || e.body;
}
catch (_q) {
    return e.body;
} }
function Jo(e, a) { var n = a.checked; return ue({}, a, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n !== null && n !== void 0 ? n : e._wrapperState.initialChecked }); }
function Cd(e, a) { var n = a.defaultValue == null ? "" : a.defaultValue, r = a.checked != null ? a.checked : a.defaultChecked; n = on(a.value != null ? a.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: a.type === "checkbox" || a.type === "radio" ? a.checked != null : a.value != null }; }
function lg(e, a) { a = a.checked, a != null && tu(e, "checked", a, !1); }
function Zo(e, a) { lg(e, a); var n = on(a.value), r = a.type; if (n != null)
    r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
} a.hasOwnProperty("value") ? el(e, a.type, n) : a.hasOwnProperty("defaultValue") && el(e, a.type, on(a.defaultValue)), a.checked == null && a.defaultChecked != null && (e.defaultChecked = !!a.defaultChecked); }
function Td(e, a, n) { if (a.hasOwnProperty("value") || a.hasOwnProperty("defaultValue")) {
    var r = a.type;
    if (!(r !== "submit" && r !== "reset" || a.value !== void 0 && a.value !== null))
        return;
    a = "" + e._wrapperState.initialValue, n || a === e.value || (e.value = a), e.defaultValue = a;
} n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n); }
function el(e, a, n) { (a !== "number" || Tt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n)); }
var Qr = Array.isArray;
function lr(e, a, n, r) { if (e = e.options, a) {
    a = {};
    for (var i = 0; i < n.length; i++)
        a["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
        i = a.hasOwnProperty("$" + e[n].value), e[n].selected !== i && (e[n].selected = i), i && r && (e[n].defaultSelected = !0);
}
else {
    for (n = "" + on(n), a = null, i = 0; i < e.length; i++) {
        if (e[i].value === n) {
            e[i].selected = !0, r && (e[i].defaultSelected = !0);
            return;
        }
        a !== null || e[i].disabled || (a = e[i]);
    }
    a !== null && (a.selected = !0);
} }
function al(e, a) { if (a.dangerouslySetInnerHTML != null)
    throw Error(D(91)); return ue({}, a, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue }); }
function Rd(e, a) { var n = a.value; if (n == null) {
    if (n = a.children, a = a.defaultValue, n != null) {
        if (a != null)
            throw Error(D(92));
        if (Qr(n)) {
            if (1 < n.length)
                throw Error(D(93));
            n = n[0];
        }
        a = n;
    }
    a == null && (a = ""), n = a;
} e._wrapperState = { initialValue: on(n) }; }
function cg(e, a) { var n = on(a.value), r = on(a.defaultValue); n != null && (n = "" + n, n !== e.value && (e.value = n), a.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r); }
function Nd(e) { var a = e.textContent; a === e._wrapperState.initialValue && a !== "" && a !== null && (e.value = a); }
function ug(e) { switch (e) {
    case "svg": return "http://www.w3.org/2000/svg";
    case "math": return "http://www.w3.org/1998/Math/MathML";
    default: return "http://www.w3.org/1999/xhtml";
} }
function nl(e, a) { return e == null || e === "http://www.w3.org/1999/xhtml" ? ug(a) : e === "http://www.w3.org/2000/svg" && a === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e; }
var Yi, dg = function (e) { return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function (a, n, r, i) { MSApp.execUnsafeLocalFunction(function () { return e(a, n, r, i); }); } : e; }(function (e, a) { if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
    e.innerHTML = a;
else {
    for (Yi = Yi || document.createElement("div"), Yi.innerHTML = "<svg>" + a.valueOf().toString() + "</svg>", a = Yi.firstChild; e.firstChild;)
        e.removeChild(e.firstChild);
    for (; a.firstChild;)
        e.appendChild(a.firstChild);
} });
function mi(e, a) { if (a) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = a;
        return;
    }
} e.textContent = a; }
var ai = { animationIterationCount: !0, aspectRatio: !0, borderImageOutset: !0, borderImageSlice: !0, borderImageWidth: !0, boxFlex: !0, boxFlexGroup: !0, boxOrdinalGroup: !0, columnCount: !0, columns: !0, flex: !0, flexGrow: !0, flexPositive: !0, flexShrink: !0, flexNegative: !0, flexOrder: !0, gridArea: !0, gridRow: !0, gridRowEnd: !0, gridRowSpan: !0, gridRowStart: !0, gridColumn: !0, gridColumnEnd: !0, gridColumnSpan: !0, gridColumnStart: !0, fontWeight: !0, lineClamp: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, tabSize: !0, widows: !0, zIndex: !0, zoom: !0, fillOpacity: !0, floodOpacity: !0, stopOpacity: !0, strokeDasharray: !0, strokeDashoffset: !0, strokeMiterlimit: !0, strokeOpacity: !0, strokeWidth: !0 }, Wy = ["Webkit", "ms", "Moz", "O"];
Object.keys(ai).forEach(function (e) { Wy.forEach(function (a) { a = a + e.charAt(0).toUpperCase() + e.substring(1), ai[a] = ai[e]; }); });
function mg(e, a, n) { return a == null || typeof a == "boolean" || a === "" ? "" : n || typeof a != "number" || a === 0 || ai.hasOwnProperty(e) && ai[e] ? ("" + a).trim() : a + "px"; }
function hg(e, a) { e = e.style; for (var n in a)
    if (a.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, i = mg(n, a[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : e[n] = i;
    } }
var Hy = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
function rl(e, a) { if (a) {
    if (Hy[e] && (a.children != null || a.dangerouslySetInnerHTML != null))
        throw Error(D(137, e));
    if (a.dangerouslySetInnerHTML != null) {
        if (a.children != null)
            throw Error(D(60));
        if (typeof a.dangerouslySetInnerHTML != "object" || !("__html" in a.dangerouslySetInnerHTML))
            throw Error(D(61));
    }
    if (a.style != null && typeof a.style != "object")
        throw Error(D(62));
} }
function il(e, a) { if (e.indexOf("-") === -1)
    return typeof a.is == "string"; switch (e) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph": return !1;
    default: return !0;
} }
var tl = null;
function cu(e) { return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e; }
var sl = null, cr = null, ur = null;
function Id(e) { if (e = Mi(e)) {
    if (typeof sl != "function")
        throw Error(D(280));
    var a = e.stateNode;
    a && (a = xs(a), sl(e.stateNode, e.type, a));
} }
function gg(e) { cr ? ur ? ur.push(e) : ur = [e] : cr = e; }
function pg() { if (cr) {
    var e = cr, a = ur;
    if (ur = cr = null, Id(e), a)
        for (e = 0; e < a.length; e++)
            Id(a[e]);
} }
function fg(e, a) { return e(a); }
function bg() { }
var lo = !1;
function yg(e, a, n) { if (lo)
    return e(a, n); lo = !0; try {
    return fg(e, a, n);
}
finally {
    lo = !1, (cr !== null || ur !== null) && (bg(), pg());
} }
function hi(e, a) { var n = e.stateNode; if (n === null)
    return null; var r = xs(n); if (r === null)
    return null; n = r[a]; e: switch (a) {
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
        (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
        break e;
    default: e = !1;
} if (e)
    return null; if (n && typeof n != "function")
    throw Error(D(231, a, typeof n)); return n; }
var ol = !1;
if (Ta)
    try {
        var Mr = {};
        Object.defineProperty(Mr, "passive", { get: function () { ol = !0; } }), window.addEventListener("test", Mr, Mr), window.removeEventListener("test", Mr, Mr);
    }
    catch (_q) {
        ol = !1;
    }
function Vy(e, a, n, r, i, t, s, o, l) { var c = Array.prototype.slice.call(arguments, 3); try {
    a.apply(n, c);
}
catch (d) {
    this.onError(d);
} }
var ni = !1, Rt = null, Nt = !1, ll = null, Qy = { onError: function (e) { ni = !0, Rt = e; } };
function Ky(e, a, n, r, i, t, s, o, l) { ni = !1, Rt = null, Vy.apply(Qy, arguments); }
function Gy(e, a, n, r, i, t, s, o, l) { if (Ky.apply(this, arguments), ni) {
    if (ni) {
        var c = Rt;
        ni = !1, Rt = null;
    }
    else
        throw Error(D(198));
    Nt || (Nt = !0, ll = c);
} }
function Rn(e) { var a = e, n = e; if (e.alternate)
    for (; a.return;)
        a = a.return;
else {
    e = a;
    do
        a = e, a.flags & 4098 && (n = a.return), e = a.return;
    while (e);
} return a.tag === 3 ? n : null; }
function kg(e) { if (e.tag === 13) {
    var a = e.memoizedState;
    if (a === null && (e = e.alternate, e !== null && (a = e.memoizedState)), a !== null)
        return a.dehydrated;
} return null; }
function Dd(e) { if (Rn(e) !== e)
    throw Error(D(188)); }
function Yy(e) { var a = e.alternate; if (!a) {
    if (a = Rn(e), a === null)
        throw Error(D(188));
    return a !== e ? null : e;
} for (var n = e, r = a;;) {
    var i = n.return;
    if (i === null)
        break;
    var t = i.alternate;
    if (t === null) {
        if (r = i.return, r !== null) {
            n = r;
            continue;
        }
        break;
    }
    if (i.child === t.child) {
        for (t = i.child; t;) {
            if (t === n)
                return Dd(i), e;
            if (t === r)
                return Dd(i), a;
            t = t.sibling;
        }
        throw Error(D(188));
    }
    if (n.return !== r.return)
        n = i, r = t;
    else {
        for (var s = !1, o = i.child; o;) {
            if (o === n) {
                s = !0, n = i, r = t;
                break;
            }
            if (o === r) {
                s = !0, r = i, n = t;
                break;
            }
            o = o.sibling;
        }
        if (!s) {
            for (o = t.child; o;) {
                if (o === n) {
                    s = !0, n = t, r = i;
                    break;
                }
                if (o === r) {
                    s = !0, r = t, n = i;
                    break;
                }
                o = o.sibling;
            }
            if (!s)
                throw Error(D(189));
        }
    }
    if (n.alternate !== r)
        throw Error(D(190));
} if (n.tag !== 3)
    throw Error(D(188)); return n.stateNode.current === n ? e : a; }
function vg(e) { return e = Yy(e), e !== null ? wg(e) : null; }
function wg(e) { if (e.tag === 5 || e.tag === 6)
    return e; for (e = e.child; e !== null;) {
    var a = wg(e);
    if (a !== null)
        return a;
    e = e.sibling;
} return null; }
var jg = Ge.unstable_scheduleCallback, Md = Ge.unstable_cancelCallback, Xy = Ge.unstable_shouldYield, Jy = Ge.unstable_requestPaint, pe = Ge.unstable_now, Zy = Ge.unstable_getCurrentPriorityLevel, uu = Ge.unstable_ImmediatePriority, zg = Ge.unstable_UserBlockingPriority, It = Ge.unstable_NormalPriority, ek = Ge.unstable_LowPriority, xg = Ge.unstable_IdlePriority, vs = null, va = null;
function ak(e) { if (va && typeof va.onCommitFiberRoot == "function")
    try {
        va.onCommitFiberRoot(vs, e, void 0, (e.current.flags & 128) === 128);
    }
    catch (_q) { } }
var ha = Math.clz32 ? Math.clz32 : ik, nk = Math.log, rk = Math.LN2;
function ik(e) { return e >>>= 0, e === 0 ? 32 : 31 - (nk(e) / rk | 0) | 0; }
var Xi = 64, Ji = 4194304;
function Kr(e) { switch (e & -e) {
    case 1: return 1;
    case 2: return 2;
    case 4: return 4;
    case 8: return 8;
    case 16: return 16;
    case 32: return 32;
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
    case 2097152: return e & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return e & 130023424;
    case 134217728: return 134217728;
    case 268435456: return 268435456;
    case 536870912: return 536870912;
    case 1073741824: return 1073741824;
    default: return e;
} }
function Dt(e, a) { var n = e.pendingLanes; if (n === 0)
    return 0; var r = 0, i = e.suspendedLanes, t = e.pingedLanes, s = n & 268435455; if (s !== 0) {
    var o = s & ~i;
    o !== 0 ? r = Kr(o) : (t &= s, t !== 0 && (r = Kr(t)));
}
else
    s = n & ~i, s !== 0 ? r = Kr(s) : t !== 0 && (r = Kr(t)); if (r === 0)
    return 0; if (a !== 0 && a !== r && !(a & i) && (i = r & -r, t = a & -a, i >= t || i === 16 && (t & 4194240) !== 0))
    return a; if (r & 4 && (r |= n & 16), a = e.entangledLanes, a !== 0)
    for (e = e.entanglements, a &= r; 0 < a;)
        n = 31 - ha(a), i = 1 << n, r |= e[n], a &= ~i; return r; }
function tk(e, a) { switch (e) {
    case 1:
    case 2:
    case 4: return a + 250;
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
    case 2097152: return a + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864: return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824: return -1;
    default: return -1;
} }
function sk(e, a) { for (var n = e.suspendedLanes, r = e.pingedLanes, i = e.expirationTimes, t = e.pendingLanes; 0 < t;) {
    var s = 31 - ha(t), o = 1 << s, l = i[s];
    l === -1 ? (!(o & n) || o & r) && (i[s] = tk(o, a)) : l <= a && (e.expiredLanes |= o), t &= ~o;
} }
function cl(e) { return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0; }
function qg() { var e = Xi; return Xi <<= 1, !(Xi & 4194240) && (Xi = 64), e; }
function co(e) { for (var a = [], n = 0; 31 > n; n++)
    a.push(e); return a; }
function Ii(e, a, n) { e.pendingLanes |= a, a !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, a = 31 - ha(a), e[a] = n; }
function ok(e, a) { var n = e.pendingLanes & ~a; e.pendingLanes = a, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= a, e.mutableReadLanes &= a, e.entangledLanes &= a, a = e.entanglements; var r = e.eventTimes; for (e = e.expirationTimes; 0 < n;) {
    var i = 31 - ha(n), t = 1 << i;
    a[i] = 0, r[i] = -1, e[i] = -1, n &= ~t;
} }
function du(e, a) { var n = e.entangledLanes |= a; for (e = e.entanglements; n;) {
    var r = 31 - ha(n), i = 1 << r;
    i & a | e[r] & a && (e[r] |= a), n &= ~i;
} }
var Z = 0;
function _g(e) { return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1; }
var Sg, mu, Og, Eg, Pg, ul = !1, Zi = [], Xa = null, Ja = null, Za = null, gi = new Map, pi = new Map, Va = [], lk = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Ad(e, a) { switch (e) {
    case "focusin":
    case "focusout":
        Xa = null;
        break;
    case "dragenter":
    case "dragleave":
        Ja = null;
        break;
    case "mouseover":
    case "mouseout":
        Za = null;
        break;
    case "pointerover":
    case "pointerout":
        gi.delete(a.pointerId);
        break;
    case "gotpointercapture":
    case "lostpointercapture": pi.delete(a.pointerId);
} }
function Ar(e, a, n, r, i, t) { return e === null || e.nativeEvent !== t ? (e = { blockedOn: a, domEventName: n, eventSystemFlags: r, nativeEvent: t, targetContainers: [i] }, a !== null && (a = Mi(a), a !== null && mu(a)), e) : (e.eventSystemFlags |= r, a = e.targetContainers, i !== null && a.indexOf(i) === -1 && a.push(i), e); }
function ck(e, a, n, r, i) { switch (a) {
    case "focusin": return Xa = Ar(Xa, e, a, n, r, i), !0;
    case "dragenter": return Ja = Ar(Ja, e, a, n, r, i), !0;
    case "mouseover": return Za = Ar(Za, e, a, n, r, i), !0;
    case "pointerover":
        var t = i.pointerId;
        return gi.set(t, Ar(gi.get(t) || null, e, a, n, r, i)), !0;
    case "gotpointercapture": return t = i.pointerId, pi.set(t, Ar(pi.get(t) || null, e, a, n, r, i)), !0;
} return !1; }
function Cg(e) { var a = vn(e.target); if (a !== null) {
    var n = Rn(a);
    if (n !== null) {
        if (a = n.tag, a === 13) {
            if (a = kg(n), a !== null) {
                e.blockedOn = a, Pg(e.priority, function () { Og(n); });
                return;
            }
        }
        else if (a === 3 && n.stateNode.current.memoizedState.isDehydrated) {
            e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
            return;
        }
    }
} e.blockedOn = null; }
function yt(e) { if (e.blockedOn !== null)
    return !1; for (var a = e.targetContainers; 0 < a.length;) {
    var n = dl(e.domEventName, e.eventSystemFlags, a[0], e.nativeEvent);
    if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        tl = r, n.target.dispatchEvent(r), tl = null;
    }
    else
        return a = Mi(n), a !== null && mu(a), e.blockedOn = n, !1;
    a.shift();
} return !0; }
function Ld(e, a, n) { yt(e) && n.delete(a); }
function uk() { ul = !1, Xa !== null && yt(Xa) && (Xa = null), Ja !== null && yt(Ja) && (Ja = null), Za !== null && yt(Za) && (Za = null), gi.forEach(Ld), pi.forEach(Ld); }
function Lr(e, a) { e.blockedOn === a && (e.blockedOn = null, ul || (ul = !0, Ge.unstable_scheduleCallback(Ge.unstable_NormalPriority, uk))); }
function fi(e) { function a(i) { return Lr(i, e); } if (0 < Zi.length) {
    Lr(Zi[0], e);
    for (var n = 1; n < Zi.length; n++) {
        var r = Zi[n];
        r.blockedOn === e && (r.blockedOn = null);
    }
} for (Xa !== null && Lr(Xa, e), Ja !== null && Lr(Ja, e), Za !== null && Lr(Za, e), gi.forEach(a), pi.forEach(a), n = 0; n < Va.length; n++)
    r = Va[n], r.blockedOn === e && (r.blockedOn = null); for (; 0 < Va.length && (n = Va[0], n.blockedOn === null);)
    Cg(n), n.blockedOn === null && Va.shift(); }
var dr = Ma.ReactCurrentBatchConfig, Mt = !0;
function dk(e, a, n, r) { var i = Z, t = dr.transition; dr.transition = null; try {
    Z = 1, hu(e, a, n, r);
}
finally {
    Z = i, dr.transition = t;
} }
function mk(e, a, n, r) { var i = Z, t = dr.transition; dr.transition = null; try {
    Z = 4, hu(e, a, n, r);
}
finally {
    Z = i, dr.transition = t;
} }
function hu(e, a, n, r) { if (Mt) {
    var i = dl(e, a, n, r);
    if (i === null)
        vo(e, a, r, At, n), Ad(e, r);
    else if (ck(i, e, a, n, r))
        r.stopPropagation();
    else if (Ad(e, r), a & 4 && -1 < lk.indexOf(e)) {
        for (; i !== null;) {
            var t = Mi(i);
            if (t !== null && Sg(t), t = dl(e, a, n, r), t === null && vo(e, a, r, At, n), t === i)
                break;
            i = t;
        }
        i !== null && r.stopPropagation();
    }
    else
        vo(e, a, r, null, n);
} }
var At = null;
function dl(e, a, n, r) { if (At = null, e = cu(r), e = vn(e), e !== null)
    if (a = Rn(e), a === null)
        e = null;
    else if (n = a.tag, n === 13) {
        if (e = kg(a), e !== null)
            return e;
        e = null;
    }
    else if (n === 3) {
        if (a.stateNode.current.memoizedState.isDehydrated)
            return a.tag === 3 ? a.stateNode.containerInfo : null;
        e = null;
    }
    else
        a !== e && (e = null); return At = e, null; }
function Tg(e) { switch (e) {
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
    case "selectstart": return 1;
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
    case "pointerleave": return 4;
    case "message": switch (Zy()) {
        case uu: return 1;
        case zg: return 4;
        case It:
        case ek: return 16;
        case xg: return 536870912;
        default: return 16;
    }
    default: return 16;
} }
var Ka = null, gu = null, kt = null;
function Rg() { if (kt)
    return kt; var e, a = gu, n = a.length, r, i = "value" in Ka ? Ka.value : Ka.textContent, t = i.length; for (e = 0; e < n && a[e] === i[e]; e++)
    ; var s = n - e; for (r = 1; r <= s && a[n - r] === i[t - r]; r++)
    ; return kt = i.slice(e, 1 < r ? 1 - r : void 0); }
function vt(e) { var a = e.keyCode; return "charCode" in e ? (e = e.charCode, e === 0 && a === 13 && (e = 13)) : e = a, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0; }
function et() { return !0; }
function Fd() { return !1; }
function Xe(e) { function a(n, r, i, t, s) { this._reactName = n, this._targetInst = i, this.type = r, this.nativeEvent = t, this.target = s, this.currentTarget = null; for (var o in e)
    e.hasOwnProperty(o) && (n = e[o], this[o] = n ? n(t) : t[o]); return this.isDefaultPrevented = (t.defaultPrevented != null ? t.defaultPrevented : t.returnValue === !1) ? et : Fd, this.isPropagationStopped = Fd, this; } return ue(a.prototype, { preventDefault: function () { this.defaultPrevented = !0; var n = this.nativeEvent; n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = et); }, stopPropagation: function () { var n = this.nativeEvent; n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = et); }, persist: function () { }, isPersistent: et }), a; }
var _r = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function (e) { return e.timeStamp || Date.now(); }, defaultPrevented: 0, isTrusted: 0 }, pu = Xe(_r), Di = ue({}, _r, { view: 0, detail: 0 }), hk = Xe(Di), uo, mo, Fr, ws = ue({}, Di, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: fu, button: 0, buttons: 0, relatedTarget: function (e) { return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget; }, movementX: function (e) { return "movementX" in e ? e.movementX : (e !== Fr && (Fr && e.type === "mousemove" ? (uo = e.screenX - Fr.screenX, mo = e.screenY - Fr.screenY) : mo = uo = 0, Fr = e), uo); }, movementY: function (e) { return "movementY" in e ? e.movementY : mo; } }), $d = Xe(ws), gk = ue({}, ws, { dataTransfer: 0 }), pk = Xe(gk), fk = ue({}, Di, { relatedTarget: 0 }), ho = Xe(fk), bk = ue({}, _r, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), yk = Xe(bk), kk = ue({}, _r, { clipboardData: function (e) { return "clipboardData" in e ? e.clipboardData : window.clipboardData; } }), vk = Xe(kk), wk = ue({}, _r, { data: 0 }), Ud = Xe(wk), jk = { Esc: "Escape", Spacebar: " ", Left: "ArrowLeft", Up: "ArrowUp", Right: "ArrowRight", Down: "ArrowDown", Del: "Delete", Win: "OS", Menu: "ContextMenu", Apps: "ContextMenu", Scroll: "ScrollLock", MozPrintableKey: "Unidentified" }, zk = { 8: "Backspace", 9: "Tab", 12: "Clear", 13: "Enter", 16: "Shift", 17: "Control", 18: "Alt", 19: "Pause", 20: "CapsLock", 27: "Escape", 32: " ", 33: "PageUp", 34: "PageDown", 35: "End", 36: "Home", 37: "ArrowLeft", 38: "ArrowUp", 39: "ArrowRight", 40: "ArrowDown", 45: "Insert", 46: "Delete", 112: "F1", 113: "F2", 114: "F3", 115: "F4", 116: "F5", 117: "F6", 118: "F7", 119: "F8", 120: "F9", 121: "F10", 122: "F11", 123: "F12", 144: "NumLock", 145: "ScrollLock", 224: "Meta" }, xk = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
function qk(e) { var a = this.nativeEvent; return a.getModifierState ? a.getModifierState(e) : (e = xk[e]) ? !!a[e] : !1; }
function fu() { return qk; }
var _k = ue({}, Di, { key: function (e) { if (e.key) {
        var a = jk[e.key] || e.key;
        if (a !== "Unidentified")
            return a;
    } return e.type === "keypress" ? (e = vt(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? zk[e.keyCode] || "Unidentified" : ""; }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: fu, charCode: function (e) { return e.type === "keypress" ? vt(e) : 0; }, keyCode: function (e) { return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; }, which: function (e) { return e.type === "keypress" ? vt(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0; } }), Sk = Xe(_k), Ok = ue({}, ws, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Bd = Xe(Ok), Ek = ue({}, Di, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: fu }), Pk = Xe(Ek), Ck = ue({}, _r, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tk = Xe(Ck), Rk = ue({}, ws, { deltaX: function (e) { return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0; }, deltaY: function (e) { return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0; }, deltaZ: 0, deltaMode: 0 }), Nk = Xe(Rk), Ik = [9, 13, 27, 32], bu = Ta && "CompositionEvent" in window, ri = null;
Ta && "documentMode" in document && (ri = document.documentMode);
var Dk = Ta && "TextEvent" in window && !ri, Ng = Ta && (!bu || ri && 8 < ri && 11 >= ri), Wd = String.fromCharCode(32), Hd = !1;
function Ig(e, a) { switch (e) {
    case "keyup": return Ik.indexOf(a.keyCode) !== -1;
    case "keydown": return a.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout": return !0;
    default: return !1;
} }
function Dg(e) { return e = e.detail, typeof e == "object" && "data" in e ? e.data : null; }
var Yn = !1;
function Mk(e, a) { switch (e) {
    case "compositionend": return Dg(a);
    case "keypress": return a.which !== 32 ? null : (Hd = !0, Wd);
    case "textInput": return e = a.data, e === Wd && Hd ? null : e;
    default: return null;
} }
function Ak(e, a) { if (Yn)
    return e === "compositionend" || !bu && Ig(e, a) ? (e = Rg(), kt = gu = Ka = null, Yn = !1, e) : null; switch (e) {
    case "paste": return null;
    case "keypress":
        if (!(a.ctrlKey || a.altKey || a.metaKey) || a.ctrlKey && a.altKey) {
            if (a.char && 1 < a.char.length)
                return a.char;
            if (a.which)
                return String.fromCharCode(a.which);
        }
        return null;
    case "compositionend": return Ng && a.locale !== "ko" ? null : a.data;
    default: return null;
} }
var Lk = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
function Vd(e) { var a = e && e.nodeName && e.nodeName.toLowerCase(); return a === "input" ? !!Lk[e.type] : a === "textarea"; }
function Mg(e, a, n, r) { gg(r), a = Lt(a, "onChange"), 0 < a.length && (n = new pu("onChange", "change", null, n, r), e.push({ event: n, listeners: a })); }
var ii = null, bi = null;
function Fk(e) { Kg(e, 0); }
function js(e) { var a = Zn(e); if (og(a))
    return e; }
function $k(e, a) { if (e === "change")
    return a; }
var Ag = !1;
if (Ta) {
    var go;
    if (Ta) {
        var po = "oninput" in document;
        if (!po) {
            var Qd = document.createElement("div");
            Qd.setAttribute("oninput", "return;"), po = typeof Qd.oninput == "function";
        }
        go = po;
    }
    else
        go = !1;
    Ag = go && (!document.documentMode || 9 < document.documentMode);
}
function Kd() { ii && (ii.detachEvent("onpropertychange", Lg), bi = ii = null); }
function Lg(e) { if (e.propertyName === "value" && js(bi)) {
    var a = [];
    Mg(a, bi, e, cu(e)), yg(Fk, a);
} }
function Uk(e, a, n) { e === "focusin" ? (Kd(), ii = a, bi = n, ii.attachEvent("onpropertychange", Lg)) : e === "focusout" && Kd(); }
function Bk(e) { if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return js(bi); }
function Wk(e, a) { if (e === "click")
    return js(a); }
function Hk(e, a) { if (e === "input" || e === "change")
    return js(a); }
function Vk(e, a) { return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a; }
var pa = typeof Object.is == "function" ? Object.is : Vk;
function yi(e, a) { if (pa(e, a))
    return !0; if (typeof e != "object" || e === null || typeof a != "object" || a === null)
    return !1; var n = Object.keys(e), r = Object.keys(a); if (n.length !== r.length)
    return !1; for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Qo.call(a, i) || !pa(e[i], a[i]))
        return !1;
} return !0; }
function Gd(e) { for (; e && e.firstChild;)
    e = e.firstChild; return e; }
function Yd(e, a) { var n = Gd(e); e = 0; for (var r; n;) {
    if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= a && r >= a)
            return { node: n, offset: a - e };
        e = r;
    }
    e: {
        for (; n;) {
            if (n.nextSibling) {
                n = n.nextSibling;
                break e;
            }
            n = n.parentNode;
        }
        n = void 0;
    }
    n = Gd(n);
} }
function Fg(e, a) { return e && a ? e === a ? !0 : e && e.nodeType === 3 ? !1 : a && a.nodeType === 3 ? Fg(e, a.parentNode) : "contains" in e ? e.contains(a) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(a) & 16) : !1 : !1; }
function $g() { for (var e = window, a = Tt(); a instanceof e.HTMLIFrameElement;) {
    try {
        var n = typeof a.contentWindow.location.href == "string";
    }
    catch (_q) {
        n = !1;
    }
    if (n)
        e = a.contentWindow;
    else
        break;
    a = Tt(e.document);
} return a; }
function yu(e) { var a = e && e.nodeName && e.nodeName.toLowerCase(); return a && (a === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || a === "textarea" || e.contentEditable === "true"); }
function Qk(e) { var a = $g(), n = e.focusedElem, r = e.selectionRange; if (a !== n && n && n.ownerDocument && Fg(n.ownerDocument.documentElement, n)) {
    if (r !== null && yu(n)) {
        if (a = r.start, e = r.end, e === void 0 && (e = a), "selectionStart" in n)
            n.selectionStart = a, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (a = n.ownerDocument || document) && a.defaultView || window, e.getSelection) {
            e = e.getSelection();
            var i = n.textContent.length, t = Math.min(r.start, i);
            r = r.end === void 0 ? t : Math.min(r.end, i), !e.extend && t > r && (i = r, r = t, t = i), i = Yd(n, t);
            var s = Yd(n, r);
            i && s && (e.rangeCount !== 1 || e.anchorNode !== i.node || e.anchorOffset !== i.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && (a = a.createRange(), a.setStart(i.node, i.offset), e.removeAllRanges(), t > r ? (e.addRange(a), e.extend(s.node, s.offset)) : (a.setEnd(s.node, s.offset), e.addRange(a)));
        }
    }
    for (a = [], e = n; e = e.parentNode;)
        e.nodeType === 1 && a.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < a.length; n++)
        e = a[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
} }
var Kk = Ta && "documentMode" in document && 11 >= document.documentMode, Xn = null, ml = null, ti = null, hl = !1;
function Xd(e, a, n) { var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument; hl || Xn == null || Xn !== Tt(r) || (r = Xn, "selectionStart" in r && yu(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), ti && yi(ti, r) || (ti = r, r = Lt(ml, "onSelect"), 0 < r.length && (a = new pu("onSelect", "select", null, a, n), e.push({ event: a, listeners: r }), a.target = Xn))); }
function at(e, a) { var n = {}; return n[e.toLowerCase()] = a.toLowerCase(), n["Webkit" + e] = "webkit" + a, n["Moz" + e] = "moz" + a, n; }
var Jn = { animationend: at("Animation", "AnimationEnd"), animationiteration: at("Animation", "AnimationIteration"), animationstart: at("Animation", "AnimationStart"), transitionend: at("Transition", "TransitionEnd") }, fo = {}, Ug = {};
Ta && (Ug = document.createElement("div").style, "AnimationEvent" in window || (delete Jn.animationend.animation, delete Jn.animationiteration.animation, delete Jn.animationstart.animation), "TransitionEvent" in window || delete Jn.transitionend.transition);
function zs(e) { if (fo[e])
    return fo[e]; if (!Jn[e])
    return e; var a = Jn[e], n; for (n in a)
    if (a.hasOwnProperty(n) && n in Ug)
        return fo[e] = a[n]; return e; }
var Bg = zs("animationend"), Wg = zs("animationiteration"), Hg = zs("animationstart"), Vg = zs("transitionend"), Qg = new Map, Jd = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function cn(e, a) { Qg.set(e, a), Tn(a, [e]); }
for (var bo = 0; bo < Jd.length; bo++) {
    var yo = Jd[bo], Gk = yo.toLowerCase(), Yk = yo[0].toUpperCase() + yo.slice(1);
    cn(Gk, "on" + Yk);
}
cn(Bg, "onAnimationEnd");
cn(Wg, "onAnimationIteration");
cn(Hg, "onAnimationStart");
cn("dblclick", "onDoubleClick");
cn("focusin", "onFocus");
cn("focusout", "onBlur");
cn(Vg, "onTransitionEnd");
pr("onMouseEnter", ["mouseout", "mouseover"]);
pr("onMouseLeave", ["mouseout", "mouseover"]);
pr("onPointerEnter", ["pointerout", "pointerover"]);
pr("onPointerLeave", ["pointerout", "pointerover"]);
Tn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
Tn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
Tn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
Tn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
Tn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var Gr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Xk = new Set("cancel close invalid load scroll toggle".split(" ").concat(Gr));
function Zd(e, a, n) { var r = e.type || "unknown-event"; e.currentTarget = n, Gy(r, a, void 0, e), e.currentTarget = null; }
function Kg(e, a) { a = (a & 4) !== 0; for (var n = 0; n < e.length; n++) {
    var r = e[n], i = r.event;
    r = r.listeners;
    e: {
        var t = void 0;
        if (a)
            for (var s = r.length - 1; 0 <= s; s--) {
                var o = r[s], l = o.instance, c = o.currentTarget;
                if (o = o.listener, l !== t && i.isPropagationStopped())
                    break e;
                Zd(i, o, c), t = l;
            }
        else
            for (s = 0; s < r.length; s++) {
                if (o = r[s], l = o.instance, c = o.currentTarget, o = o.listener, l !== t && i.isPropagationStopped())
                    break e;
                Zd(i, o, c), t = l;
            }
    }
} if (Nt)
    throw e = ll, Nt = !1, ll = null, e; }
function re(e, a) { var n = a[yl]; n === void 0 && (n = a[yl] = new Set); var r = e + "__bubble"; n.has(r) || (Gg(a, e, 2, !1), n.add(r)); }
function ko(e, a, n) { var r = 0; a && (r |= 4), Gg(n, e, r, a); }
var nt = "_reactListening" + Math.random().toString(36).slice(2);
function ki(e) { if (!e[nt]) {
    e[nt] = !0, ng.forEach(function (n) { n !== "selectionchange" && (Xk.has(n) || ko(n, !1, e), ko(n, !0, e)); });
    var a = e.nodeType === 9 ? e : e.ownerDocument;
    a === null || a[nt] || (a[nt] = !0, ko("selectionchange", !1, a));
} }
function Gg(e, a, n, r) { switch (Tg(a)) {
    case 1:
        var i = dk;
        break;
    case 4:
        i = mk;
        break;
    default: i = hu;
} n = i.bind(null, a, n, e), i = void 0, !ol || a !== "touchstart" && a !== "touchmove" && a !== "wheel" || (i = !0), r ? i !== void 0 ? e.addEventListener(a, n, { capture: !0, passive: i }) : e.addEventListener(a, n, !0) : i !== void 0 ? e.addEventListener(a, n, { passive: i }) : e.addEventListener(a, n, !1); }
function vo(e, a, n, r, i) { var t = r; if (!(a & 1) && !(a & 2) && r !== null)
    e: for (;;) {
        if (r === null)
            return;
        var s = r.tag;
        if (s === 3 || s === 4) {
            var o = r.stateNode.containerInfo;
            if (o === i || o.nodeType === 8 && o.parentNode === i)
                break;
            if (s === 4)
                for (s = r.return; s !== null;) {
                    var l = s.tag;
                    if ((l === 3 || l === 4) && (l = s.stateNode.containerInfo, l === i || l.nodeType === 8 && l.parentNode === i))
                        return;
                    s = s.return;
                }
            for (; o !== null;) {
                if (s = vn(o), s === null)
                    return;
                if (l = s.tag, l === 5 || l === 6) {
                    r = t = s;
                    continue e;
                }
                o = o.parentNode;
            }
        }
        r = r.return;
    } yg(function () { var c = t, d = cu(n), b = []; e: {
    var g = Qg.get(e);
    if (g !== void 0) {
        var k = pu, m = e;
        switch (e) {
            case "keypress": if (vt(n) === 0)
                break e;
            case "keydown":
            case "keyup":
                k = Sk;
                break;
            case "focusin":
                m = "focus", k = ho;
                break;
            case "focusout":
                m = "blur", k = ho;
                break;
            case "beforeblur":
            case "afterblur":
                k = ho;
                break;
            case "click": if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
                k = $d;
                break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
                k = pk;
                break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
                k = Pk;
                break;
            case Bg:
            case Wg:
            case Hg:
                k = yk;
                break;
            case Vg:
                k = Tk;
                break;
            case "scroll":
                k = hk;
                break;
            case "wheel":
                k = Nk;
                break;
            case "copy":
            case "cut":
            case "paste":
                k = vk;
                break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup": k = Bd;
        }
        var v = (a & 4) !== 0, j = !v && e === "scroll", y = v ? g !== null ? g + "Capture" : null : g;
        v = [];
        for (var f = c, u; f !== null;) {
            u = f;
            var p = u.stateNode;
            if (u.tag === 5 && p !== null && (u = p, y !== null && (p = hi(f, y), p != null && v.push(vi(f, p, u)))), j)
                break;
            f = f.return;
        }
        0 < v.length && (g = new k(g, m, null, n, d), b.push({ event: g, listeners: v }));
    }
} if (!(a & 7)) {
    e: {
        if (g = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", g && n !== tl && (m = n.relatedTarget || n.fromElement) && (vn(m) || m[Ra]))
            break e;
        if ((k || g) && (g = d.window === d ? d : (g = d.ownerDocument) ? g.defaultView || g.parentWindow : window, k ? (m = n.relatedTarget || n.toElement, k = c, m = m ? vn(m) : null, m !== null && (j = Rn(m), m !== j || m.tag !== 5 && m.tag !== 6) && (m = null)) : (k = null, m = c), k !== m)) {
            if (v = $d, p = "onMouseLeave", y = "onMouseEnter", f = "mouse", (e === "pointerout" || e === "pointerover") && (v = Bd, p = "onPointerLeave", y = "onPointerEnter", f = "pointer"), j = k == null ? g : Zn(k), u = m == null ? g : Zn(m), g = new v(p, f + "leave", k, n, d), g.target = j, g.relatedTarget = u, p = null, vn(d) === c && (v = new v(y, f + "enter", m, n, d), v.target = u, v.relatedTarget = j, p = v), j = p, k && m)
                a: {
                    for (v = k, y = m, f = 0, u = v; u; u = An(u))
                        f++;
                    for (u = 0, p = y; p; p = An(p))
                        u++;
                    for (; 0 < f - u;)
                        v = An(v), f--;
                    for (; 0 < u - f;)
                        y = An(y), u--;
                    for (; f--;) {
                        if (v === y || y !== null && v === y.alternate)
                            break a;
                        v = An(v), y = An(y);
                    }
                    v = null;
                }
            else
                v = null;
            k !== null && em(b, g, k, v, !1), m !== null && j !== null && em(b, j, m, v, !0);
        }
    }
    e: {
        if (g = c ? Zn(c) : window, k = g.nodeName && g.nodeName.toLowerCase(), k === "select" || k === "input" && g.type === "file")
            var w = $k;
        else if (Vd(g))
            if (Ag)
                w = Hk;
            else {
                w = Bk;
                var z = Uk;
            }
        else
            (k = g.nodeName) && k.toLowerCase() === "input" && (g.type === "checkbox" || g.type === "radio") && (w = Wk);
        if (w && (w = w(e, c))) {
            Mg(b, w, n, d);
            break e;
        }
        z && z(e, g, c), e === "focusout" && (z = g._wrapperState) && z.controlled && g.type === "number" && el(g, "number", g.value);
    }
    switch (z = c ? Zn(c) : window, e) {
        case "focusin":
            (Vd(z) || z.contentEditable === "true") && (Xn = z, ml = c, ti = null);
            break;
        case "focusout":
            ti = ml = Xn = null;
            break;
        case "mousedown":
            hl = !0;
            break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
            hl = !1, Xd(b, n, d);
            break;
        case "selectionchange": if (Kk)
            break;
        case "keydown":
        case "keyup": Xd(b, n, d);
    }
    var q;
    if (bu)
        e: {
            switch (e) {
                case "compositionstart":
                    var _ = "onCompositionStart";
                    break e;
                case "compositionend":
                    _ = "onCompositionEnd";
                    break e;
                case "compositionupdate":
                    _ = "onCompositionUpdate";
                    break e;
            }
            _ = void 0;
        }
    else
        Yn ? Ig(e, n) && (_ = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_ = "onCompositionStart");
    _ && (Ng && n.locale !== "ko" && (Yn || _ !== "onCompositionStart" ? _ === "onCompositionEnd" && Yn && (q = Rg()) : (Ka = d, gu = "value" in Ka ? Ka.value : Ka.textContent, Yn = !0)), z = Lt(c, _), 0 < z.length && (_ = new Ud(_, e, null, n, d), b.push({ event: _, listeners: z }), q ? _.data = q : (q = Dg(n), q !== null && (_.data = q)))), (q = Dk ? Mk(e, n) : Ak(e, n)) && (c = Lt(c, "onBeforeInput"), 0 < c.length && (d = new Ud("onBeforeInput", "beforeinput", null, n, d), b.push({ event: d, listeners: c }), d.data = q));
} Kg(b, a); }); }
function vi(e, a, n) { return { instance: e, listener: a, currentTarget: n }; }
function Lt(e, a) { for (var n = a + "Capture", r = []; e !== null;) {
    var i = e, t = i.stateNode;
    i.tag === 5 && t !== null && (i = t, t = hi(e, n), t != null && r.unshift(vi(e, t, i)), t = hi(e, a), t != null && r.push(vi(e, t, i))), e = e.return;
} return r; }
function An(e) { if (e === null)
    return null; do
    e = e.return;
while (e && e.tag !== 5); return e || null; }
function em(e, a, n, r, i) { for (var t = a._reactName, s = []; n !== null && n !== r;) {
    var o = n, l = o.alternate, c = o.stateNode;
    if (l !== null && l === r)
        break;
    o.tag === 5 && c !== null && (o = c, i ? (l = hi(n, t), l != null && s.unshift(vi(n, l, o))) : i || (l = hi(n, t), l != null && s.push(vi(n, l, o)))), n = n.return;
} s.length !== 0 && e.push({ event: a, listeners: s }); }
var Jk = /\r\n?/g, Zk = /\u0000|\uFFFD/g;
function am(e) {
    return (typeof e == "string" ? e : "" + e).replace(Jk, `
`).replace(Zk, "");
}
function rt(e, a, n) { if (a = am(a), am(e) !== a && n)
    throw Error(D(425)); }
function Ft() { }
var gl = null, pl = null;
function fl(e, a) { return e === "textarea" || e === "noscript" || typeof a.children == "string" || typeof a.children == "number" || typeof a.dangerouslySetInnerHTML == "object" && a.dangerouslySetInnerHTML !== null && a.dangerouslySetInnerHTML.__html != null; }
var bl = typeof setTimeout == "function" ? setTimeout : void 0, ev = typeof clearTimeout == "function" ? clearTimeout : void 0, nm = typeof Promise == "function" ? Promise : void 0, av = typeof queueMicrotask == "function" ? queueMicrotask : typeof nm < "u" ? function (e) { return nm.resolve(null).then(e).catch(nv); } : bl;
function nv(e) { setTimeout(function () { throw e; }); }
function wo(e, a) { var n = a, r = 0; do {
    var i = n.nextSibling;
    if (e.removeChild(n), i && i.nodeType === 8)
        if (n = i.data, n === "/$") {
            if (r === 0) {
                e.removeChild(i), fi(a);
                return;
            }
            r--;
        }
        else
            n !== "$" && n !== "$?" && n !== "$!" || r++;
    n = i;
} while (n); fi(a); }
function en(e) { for (; e != null; e = e.nextSibling) {
    var a = e.nodeType;
    if (a === 1 || a === 3)
        break;
    if (a === 8) {
        if (a = e.data, a === "$" || a === "$!" || a === "$?")
            break;
        if (a === "/$")
            return null;
    }
} return e; }
function rm(e) { e = e.previousSibling; for (var a = 0; e;) {
    if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
            if (a === 0)
                return e;
            a--;
        }
        else
            n === "/$" && a++;
    }
    e = e.previousSibling;
} return null; }
var Sr = Math.random().toString(36).slice(2), ya = "__reactFiber$" + Sr, wi = "__reactProps$" + Sr, Ra = "__reactContainer$" + Sr, yl = "__reactEvents$" + Sr, rv = "__reactListeners$" + Sr, iv = "__reactHandles$" + Sr;
function vn(e) { var a = e[ya]; if (a)
    return a; for (var n = e.parentNode; n;) {
    if (a = n[Ra] || n[ya]) {
        if (n = a.alternate, a.child !== null || n !== null && n.child !== null)
            for (e = rm(e); e !== null;) {
                if (n = e[ya])
                    return n;
                e = rm(e);
            }
        return a;
    }
    e = n, n = e.parentNode;
} return null; }
function Mi(e) { return e = e[ya] || e[Ra], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e; }
function Zn(e) { if (e.tag === 5 || e.tag === 6)
    return e.stateNode; throw Error(D(33)); }
function xs(e) { return e[wi] || null; }
var kl = [], er = -1;
function un(e) { return { current: e }; }
function ie(e) { 0 > er || (e.current = kl[er], kl[er] = null, er--); }
function ne(e, a) { er++, kl[er] = e.current, e.current = a; }
var ln = {}, Re = un(ln), $e = un(!1), Sn = ln;
function fr(e, a) { var n = e.type.contextTypes; if (!n)
    return ln; var r = e.stateNode; if (r && r.__reactInternalMemoizedUnmaskedChildContext === a)
    return r.__reactInternalMemoizedMaskedChildContext; var i = {}, t; for (t in n)
    i[t] = a[t]; return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = a, e.__reactInternalMemoizedMaskedChildContext = i), i; }
function Ue(e) { return e = e.childContextTypes, e != null; }
function $t() { ie($e), ie(Re); }
function im(e, a, n) { if (Re.current !== ln)
    throw Error(D(168)); ne(Re, a), ne($e, n); }
function Yg(e, a, n) { var r = e.stateNode; if (a = a.childContextTypes, typeof r.getChildContext != "function")
    return n; r = r.getChildContext(); for (var i in r)
    if (!(i in a))
        throw Error(D(108, Uy(e) || "Unknown", i)); return ue({}, n, r); }
function Ut(e) { return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || ln, Sn = Re.current, ne(Re, e), ne($e, $e.current), !0; }
function tm(e, a, n) { var r = e.stateNode; if (!r)
    throw Error(D(169)); n ? (e = Yg(e, a, Sn), r.__reactInternalMemoizedMergedChildContext = e, ie($e), ie(Re), ne(Re, e)) : ie($e), ne($e, n); }
var Sa = null, qs = !1, jo = !1;
function Xg(e) { Sa === null ? Sa = [e] : Sa.push(e); }
function tv(e) { qs = !0, Xg(e); }
function dn() { if (!jo && Sa !== null) {
    jo = !0;
    var e = 0, a = Z;
    try {
        var n = Sa;
        for (Z = 1; e < n.length; e++) {
            var r = n[e];
            do
                r = r(!0);
            while (r !== null);
        }
        Sa = null, qs = !1;
    }
    catch (i) {
        throw Sa !== null && (Sa = Sa.slice(e + 1)), jg(uu, dn), i;
    }
    finally {
        Z = a, jo = !1;
    }
} return null; }
var ar = [], nr = 0, Bt = null, Wt = 0, aa = [], na = 0, On = null, Oa = 1, Ea = "";
function fn(e, a) { ar[nr++] = Wt, ar[nr++] = Bt, Bt = e, Wt = a; }
function Jg(e, a, n) { aa[na++] = Oa, aa[na++] = Ea, aa[na++] = On, On = e; var r = Oa; e = Ea; var i = 32 - ha(r) - 1; r &= ~(1 << i), n += 1; var t = 32 - ha(a) + i; if (30 < t) {
    var s = i - i % 5;
    t = (r & (1 << s) - 1).toString(32), r >>= s, i -= s, Oa = 1 << 32 - ha(a) + i | n << i | r, Ea = t + e;
}
else
    Oa = 1 << t | n << i | r, Ea = e; }
function ku(e) { e.return !== null && (fn(e, 1), Jg(e, 1, 0)); }
function vu(e) { for (; e === Bt;)
    Bt = ar[--nr], ar[nr] = null, Wt = ar[--nr], ar[nr] = null; for (; e === On;)
    On = aa[--na], aa[na] = null, Ea = aa[--na], aa[na] = null, Oa = aa[--na], aa[na] = null; }
var Ke = null, Qe = null, se = !1, ma = null;
function Zg(e, a) { var n = ra(5, null, null, 0); n.elementType = "DELETED", n.stateNode = a, n.return = e, a = e.deletions, a === null ? (e.deletions = [n], e.flags |= 16) : a.push(n); }
function sm(e, a) { switch (e.tag) {
    case 5:
        var n = e.type;
        return a = a.nodeType !== 1 || n.toLowerCase() !== a.nodeName.toLowerCase() ? null : a, a !== null ? (e.stateNode = a, Ke = e, Qe = en(a.firstChild), !0) : !1;
    case 6: return a = e.pendingProps === "" || a.nodeType !== 3 ? null : a, a !== null ? (e.stateNode = a, Ke = e, Qe = null, !0) : !1;
    case 13: return a = a.nodeType !== 8 ? null : a, a !== null ? (n = On !== null ? { id: Oa, overflow: Ea } : null, e.memoizedState = { dehydrated: a, treeContext: n, retryLane: 1073741824 }, n = ra(18, null, null, 0), n.stateNode = a, n.return = e, e.child = n, Ke = e, Qe = null, !0) : !1;
    default: return !1;
} }
function vl(e) { return (e.mode & 1) !== 0 && (e.flags & 128) === 0; }
function wl(e) { if (se) {
    var a = Qe;
    if (a) {
        var n = a;
        if (!sm(e, a)) {
            if (vl(e))
                throw Error(D(418));
            a = en(n.nextSibling);
            var r = Ke;
            a && sm(e, a) ? Zg(r, n) : (e.flags = e.flags & -4097 | 2, se = !1, Ke = e);
        }
    }
    else {
        if (vl(e))
            throw Error(D(418));
        e.flags = e.flags & -4097 | 2, se = !1, Ke = e;
    }
} }
function om(e) { for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;)
    e = e.return; Ke = e; }
function it(e) { if (e !== Ke)
    return !1; if (!se)
    return om(e), se = !0, !1; var a; if ((a = e.tag !== 3) && !(a = e.tag !== 5) && (a = e.type, a = a !== "head" && a !== "body" && !fl(e.type, e.memoizedProps)), a && (a = Qe)) {
    if (vl(e))
        throw ep(), Error(D(418));
    for (; a;)
        Zg(e, a), a = en(a.nextSibling);
} if (om(e), e.tag === 13) {
    if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(D(317));
    e: {
        for (e = e.nextSibling, a = 0; e;) {
            if (e.nodeType === 8) {
                var n = e.data;
                if (n === "/$") {
                    if (a === 0) {
                        Qe = en(e.nextSibling);
                        break e;
                    }
                    a--;
                }
                else
                    n !== "$" && n !== "$!" && n !== "$?" || a++;
            }
            e = e.nextSibling;
        }
        Qe = null;
    }
}
else
    Qe = Ke ? en(e.stateNode.nextSibling) : null; return !0; }
function ep() { for (var e = Qe; e;)
    e = en(e.nextSibling); }
function br() { Qe = Ke = null, se = !1; }
function wu(e) { ma === null ? ma = [e] : ma.push(e); }
var sv = Ma.ReactCurrentBatchConfig;
function ua(e, a) { if (e && e.defaultProps) {
    a = ue({}, a), e = e.defaultProps;
    for (var n in e)
        a[n] === void 0 && (a[n] = e[n]);
    return a;
} return a; }
var Ht = un(null), Vt = null, rr = null, ju = null;
function zu() { ju = rr = Vt = null; }
function xu(e) { var a = Ht.current; ie(Ht), e._currentValue = a; }
function jl(e, a, n) { for (; e !== null;) {
    var r = e.alternate;
    if ((e.childLanes & a) !== a ? (e.childLanes |= a, r !== null && (r.childLanes |= a)) : r !== null && (r.childLanes & a) !== a && (r.childLanes |= a), e === n)
        break;
    e = e.return;
} }
function mr(e, a) { Vt = e, ju = rr = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & a && (Fe = !0), e.firstContext = null); }
function oa(e) { var a = e._currentValue; if (ju !== e)
    if (e = { context: e, memoizedValue: a, next: null }, rr === null) {
        if (Vt === null)
            throw Error(D(308));
        rr = e, Vt.dependencies = { lanes: 0, firstContext: e };
    }
    else
        rr = rr.next = e; return a; }
var wn = null;
function qu(e) { wn === null ? wn = [e] : wn.push(e); }
function ap(e, a, n, r) { var i = a.interleaved; return i === null ? (n.next = n, qu(a)) : (n.next = i.next, i.next = n), a.interleaved = n, Na(e, r); }
function Na(e, a) { e.lanes |= a; var n = e.alternate; for (n !== null && (n.lanes |= a), n = e, e = e.return; e !== null;)
    e.childLanes |= a, n = e.alternate, n !== null && (n.childLanes |= a), n = e, e = e.return; return n.tag === 3 ? n.stateNode : null; }
var Wa = !1;
function _u(e) { e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null }; }
function np(e, a) { e = e.updateQueue, a.updateQueue === e && (a.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects }); }
function Pa(e, a) { return { eventTime: e, lane: a, tag: 0, payload: null, callback: null, next: null }; }
function an(e, a, n) { var r = e.updateQueue; if (r === null)
    return null; if (r = r.shared, K & 2) {
    var i = r.pending;
    return i === null ? a.next = a : (a.next = i.next, i.next = a), r.pending = a, Na(e, n);
} return i = r.interleaved, i === null ? (a.next = a, qu(r)) : (a.next = i.next, i.next = a), r.interleaved = a, Na(e, n); }
function wt(e, a, n) { if (a = a.updateQueue, a !== null && (a = a.shared, (n & 4194240) !== 0)) {
    var r = a.lanes;
    r &= e.pendingLanes, n |= r, a.lanes = n, du(e, n);
} }
function lm(e, a) { var n = e.updateQueue, r = e.alternate; if (r !== null && (r = r.updateQueue, n === r)) {
    var i = null, t = null;
    if (n = n.firstBaseUpdate, n !== null) {
        do {
            var s = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
            t === null ? i = t = s : t = t.next = s, n = n.next;
        } while (n !== null);
        t === null ? i = t = a : t = t.next = a;
    }
    else
        i = t = a;
    n = { baseState: r.baseState, firstBaseUpdate: i, lastBaseUpdate: t, shared: r.shared, effects: r.effects }, e.updateQueue = n;
    return;
} e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = a : e.next = a, n.lastBaseUpdate = a; }
function Qt(e, a, n, r) { var i = e.updateQueue; Wa = !1; var t = i.firstBaseUpdate, s = i.lastBaseUpdate, o = i.shared.pending; if (o !== null) {
    i.shared.pending = null;
    var l = o, c = l.next;
    l.next = null, s === null ? t = c : s.next = c, s = l;
    var d = e.alternate;
    d !== null && (d = d.updateQueue, o = d.lastBaseUpdate, o !== s && (o === null ? d.firstBaseUpdate = c : o.next = c, d.lastBaseUpdate = l));
} if (t !== null) {
    var b = i.baseState;
    s = 0, d = c = l = null, o = t;
    do {
        var g = o.lane, k = o.eventTime;
        if ((r & g) === g) {
            d !== null && (d = d.next = { eventTime: k, lane: 0, tag: o.tag, payload: o.payload, callback: o.callback, next: null });
            e: {
                var m = e, v = o;
                switch (g = a, k = n, v.tag) {
                    case 1:
                        if (m = v.payload, typeof m == "function") {
                            b = m.call(k, b, g);
                            break e;
                        }
                        b = m;
                        break e;
                    case 3: m.flags = m.flags & -65537 | 128;
                    case 0:
                        if (m = v.payload, g = typeof m == "function" ? m.call(k, b, g) : m, g == null)
                            break e;
                        b = ue({}, b, g);
                        break e;
                    case 2: Wa = !0;
                }
            }
            o.callback !== null && o.lane !== 0 && (e.flags |= 64, g = i.effects, g === null ? i.effects = [o] : g.push(o));
        }
        else
            k = { eventTime: k, lane: g, tag: o.tag, payload: o.payload, callback: o.callback, next: null }, d === null ? (c = d = k, l = b) : d = d.next = k, s |= g;
        if (o = o.next, o === null) {
            if (o = i.shared.pending, o === null)
                break;
            g = o, o = g.next, g.next = null, i.lastBaseUpdate = g, i.shared.pending = null;
        }
    } while (1);
    if (d === null && (l = b), i.baseState = l, i.firstBaseUpdate = c, i.lastBaseUpdate = d, a = i.shared.interleaved, a !== null) {
        i = a;
        do
            s |= i.lane, i = i.next;
        while (i !== a);
    }
    else
        t === null && (i.shared.lanes = 0);
    Pn |= s, e.lanes = s, e.memoizedState = b;
} }
function cm(e, a, n) { if (e = a.effects, a.effects = null, e !== null)
    for (a = 0; a < e.length; a++) {
        var r = e[a], i = r.callback;
        if (i !== null) {
            if (r.callback = null, r = n, typeof i != "function")
                throw Error(D(191, i));
            i.call(r);
        }
    } }
var rp = new ag.Component().refs;
function zl(e, a, n, r) { a = e.memoizedState, n = n(r, a), n = n == null ? a : ue({}, a, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n); }
var _s = { isMounted: function (e) { return (e = e._reactInternals) ? Rn(e) === e : !1; }, enqueueSetState: function (e, a, n) { e = e._reactInternals; var r = De(), i = rn(e), t = Pa(r, i); t.payload = a, n != null && (t.callback = n), a = an(e, t, i), a !== null && (ga(a, e, i, r), wt(a, e, i)); }, enqueueReplaceState: function (e, a, n) { e = e._reactInternals; var r = De(), i = rn(e), t = Pa(r, i); t.tag = 1, t.payload = a, n != null && (t.callback = n), a = an(e, t, i), a !== null && (ga(a, e, i, r), wt(a, e, i)); }, enqueueForceUpdate: function (e, a) { e = e._reactInternals; var n = De(), r = rn(e), i = Pa(n, r); i.tag = 2, a != null && (i.callback = a), a = an(e, i, r), a !== null && (ga(a, e, r, n), wt(a, e, r)); } };
function um(e, a, n, r, i, t, s) { return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, t, s) : a.prototype && a.prototype.isPureReactComponent ? !yi(n, r) || !yi(i, t) : !0; }
function ip(e, a, n) { var r = !1, i = ln, t = a.contextType; return typeof t == "object" && t !== null ? t = oa(t) : (i = Ue(a) ? Sn : Re.current, r = a.contextTypes, t = (r = r != null) ? fr(e, i) : ln), a = new a(n, t), e.memoizedState = a.state !== null && a.state !== void 0 ? a.state : null, a.updater = _s, e.stateNode = a, a._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = i, e.__reactInternalMemoizedMaskedChildContext = t), a; }
function dm(e, a, n, r) { e = a.state, typeof a.componentWillReceiveProps == "function" && a.componentWillReceiveProps(n, r), typeof a.UNSAFE_componentWillReceiveProps == "function" && a.UNSAFE_componentWillReceiveProps(n, r), a.state !== e && _s.enqueueReplaceState(a, a.state, null); }
function xl(e, a, n, r) { var i = e.stateNode; i.props = n, i.state = e.memoizedState, i.refs = rp, _u(e); var t = a.contextType; typeof t == "object" && t !== null ? i.context = oa(t) : (t = Ue(a) ? Sn : Re.current, i.context = fr(e, t)), i.state = e.memoizedState, t = a.getDerivedStateFromProps, typeof t == "function" && (zl(e, a, t, n), i.state = e.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (a = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), a !== i.state && _s.enqueueReplaceState(i, i.state, null), Qt(e, n, i, r), i.state = e.memoizedState), typeof i.componentDidMount == "function" && (e.flags |= 4194308); }
function $r(e, a, n) { if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
    if (n._owner) {
        if (n = n._owner, n) {
            if (n.tag !== 1)
                throw Error(D(309));
            var r = n.stateNode;
        }
        if (!r)
            throw Error(D(147, e));
        var i = r, t = "" + e;
        return a !== null && a.ref !== null && typeof a.ref == "function" && a.ref._stringRef === t ? a.ref : (a = function (s) { var o = i.refs; o === rp && (o = i.refs = {}), s === null ? delete o[t] : o[t] = s; }, a._stringRef = t, a);
    }
    if (typeof e != "string")
        throw Error(D(284));
    if (!n._owner)
        throw Error(D(290, e));
} return e; }
function tt(e, a) { throw e = Object.prototype.toString.call(a), Error(D(31, e === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : e)); }
function mm(e) { var a = e._init; return a(e._payload); }
function tp(e) { function a(y, f) { if (e) {
    var u = y.deletions;
    u === null ? (y.deletions = [f], y.flags |= 16) : u.push(f);
} } function n(y, f) { if (!e)
    return null; for (; f !== null;)
    a(y, f), f = f.sibling; return null; } function r(y, f) { for (y = new Map; f !== null;)
    f.key !== null ? y.set(f.key, f) : y.set(f.index, f), f = f.sibling; return y; } function i(y, f) { return y = tn(y, f), y.index = 0, y.sibling = null, y; } function t(y, f, u) { return y.index = u, e ? (u = y.alternate, u !== null ? (u = u.index, u < f ? (y.flags |= 2, f) : u) : (y.flags |= 2, f)) : (y.flags |= 1048576, f); } function s(y) { return e && y.alternate === null && (y.flags |= 2), y; } function o(y, f, u, p) { return f === null || f.tag !== 6 ? (f = Eo(u, y.mode, p), f.return = y, f) : (f = i(f, u), f.return = y, f); } function l(y, f, u, p) { var w = u.type; return w === Gn ? d(y, f, u.props.children, p, u.key) : f !== null && (f.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ba && mm(w) === f.type) ? (p = i(f, u.props), p.ref = $r(y, f, u), p.return = y, p) : (p = St(u.type, u.key, u.props, null, y.mode, p), p.ref = $r(y, f, u), p.return = y, p); } function c(y, f, u, p) { return f === null || f.tag !== 4 || f.stateNode.containerInfo !== u.containerInfo || f.stateNode.implementation !== u.implementation ? (f = Po(u, y.mode, p), f.return = y, f) : (f = i(f, u.children || []), f.return = y, f); } function d(y, f, u, p, w) { return f === null || f.tag !== 7 ? (f = _n(u, y.mode, p, w), f.return = y, f) : (f = i(f, u), f.return = y, f); } function b(y, f, u) { if (typeof f == "string" && f !== "" || typeof f == "number")
    return f = Eo("" + f, y.mode, u), f.return = y, f; if (typeof f == "object" && f !== null) {
    switch (f.$$typeof) {
        case Ki: return u = St(f.type, f.key, f.props, null, y.mode, u), u.ref = $r(y, null, f), u.return = y, u;
        case Kn: return f = Po(f, y.mode, u), f.return = y, f;
        case Ba:
            var p = f._init;
            return b(y, p(f._payload), u);
    }
    if (Qr(f) || Dr(f))
        return f = _n(f, y.mode, u, null), f.return = y, f;
    tt(y, f);
} return null; } function g(y, f, u, p) { var w = f !== null ? f.key : null; if (typeof u == "string" && u !== "" || typeof u == "number")
    return w !== null ? null : o(y, f, "" + u, p); if (typeof u == "object" && u !== null) {
    switch (u.$$typeof) {
        case Ki: return u.key === w ? l(y, f, u, p) : null;
        case Kn: return u.key === w ? c(y, f, u, p) : null;
        case Ba: return w = u._init, g(y, f, w(u._payload), p);
    }
    if (Qr(u) || Dr(u))
        return w !== null ? null : d(y, f, u, p, null);
    tt(y, u);
} return null; } function k(y, f, u, p, w) { if (typeof p == "string" && p !== "" || typeof p == "number")
    return y = y.get(u) || null, o(f, y, "" + p, w); if (typeof p == "object" && p !== null) {
    switch (p.$$typeof) {
        case Ki: return y = y.get(p.key === null ? u : p.key) || null, l(f, y, p, w);
        case Kn: return y = y.get(p.key === null ? u : p.key) || null, c(f, y, p, w);
        case Ba:
            var z = p._init;
            return k(y, f, u, z(p._payload), w);
    }
    if (Qr(p) || Dr(p))
        return y = y.get(u) || null, d(f, y, p, w, null);
    tt(f, p);
} return null; } function m(y, f, u, p) { for (var w = null, z = null, q = f, _ = f = 0, T = null; q !== null && _ < u.length; _++) {
    q.index > _ ? (T = q, q = null) : T = q.sibling;
    var P = g(y, q, u[_], p);
    if (P === null) {
        q === null && (q = T);
        break;
    }
    e && q && P.alternate === null && a(y, q), f = t(P, f, _), z === null ? w = P : z.sibling = P, z = P, q = T;
} if (_ === u.length)
    return n(y, q), se && fn(y, _), w; if (q === null) {
    for (; _ < u.length; _++)
        q = b(y, u[_], p), q !== null && (f = t(q, f, _), z === null ? w = q : z.sibling = q, z = q);
    return se && fn(y, _), w;
} for (q = r(y, q); _ < u.length; _++)
    T = k(q, y, _, u[_], p), T !== null && (e && T.alternate !== null && q.delete(T.key === null ? _ : T.key), f = t(T, f, _), z === null ? w = T : z.sibling = T, z = T); return e && q.forEach(function (E) { return a(y, E); }), se && fn(y, _), w; } function v(y, f, u, p) { var w = Dr(u); if (typeof w != "function")
    throw Error(D(150)); if (u = w.call(u), u == null)
    throw Error(D(151)); for (var z = w = null, q = f, _ = f = 0, T = null, P = u.next(); q !== null && !P.done; _++, P = u.next()) {
    q.index > _ ? (T = q, q = null) : T = q.sibling;
    var E = g(y, q, P.value, p);
    if (E === null) {
        q === null && (q = T);
        break;
    }
    e && q && E.alternate === null && a(y, q), f = t(E, f, _), z === null ? w = E : z.sibling = E, z = E, q = T;
} if (P.done)
    return n(y, q), se && fn(y, _), w; if (q === null) {
    for (; !P.done; _++, P = u.next())
        P = b(y, P.value, p), P !== null && (f = t(P, f, _), z === null ? w = P : z.sibling = P, z = P);
    return se && fn(y, _), w;
} for (q = r(y, q); !P.done; _++, P = u.next())
    P = k(q, y, _, P.value, p), P !== null && (e && P.alternate !== null && q.delete(P.key === null ? _ : P.key), f = t(P, f, _), z === null ? w = P : z.sibling = P, z = P); return e && q.forEach(function (S) { return a(y, S); }), se && fn(y, _), w; } function j(y, f, u, p) { if (typeof u == "object" && u !== null && u.type === Gn && u.key === null && (u = u.props.children), typeof u == "object" && u !== null) {
    switch (u.$$typeof) {
        case Ki:
            e: {
                for (var w = u.key, z = f; z !== null;) {
                    if (z.key === w) {
                        if (w = u.type, w === Gn) {
                            if (z.tag === 7) {
                                n(y, z.sibling), f = i(z, u.props.children), f.return = y, y = f;
                                break e;
                            }
                        }
                        else if (z.elementType === w || typeof w == "object" && w !== null && w.$$typeof === Ba && mm(w) === z.type) {
                            n(y, z.sibling), f = i(z, u.props), f.ref = $r(y, z, u), f.return = y, y = f;
                            break e;
                        }
                        n(y, z);
                        break;
                    }
                    else
                        a(y, z);
                    z = z.sibling;
                }
                u.type === Gn ? (f = _n(u.props.children, y.mode, p, u.key), f.return = y, y = f) : (p = St(u.type, u.key, u.props, null, y.mode, p), p.ref = $r(y, f, u), p.return = y, y = p);
            }
            return s(y);
        case Kn:
            e: {
                for (z = u.key; f !== null;) {
                    if (f.key === z)
                        if (f.tag === 4 && f.stateNode.containerInfo === u.containerInfo && f.stateNode.implementation === u.implementation) {
                            n(y, f.sibling), f = i(f, u.children || []), f.return = y, y = f;
                            break e;
                        }
                        else {
                            n(y, f);
                            break;
                        }
                    else
                        a(y, f);
                    f = f.sibling;
                }
                f = Po(u, y.mode, p), f.return = y, y = f;
            }
            return s(y);
        case Ba: return z = u._init, j(y, f, z(u._payload), p);
    }
    if (Qr(u))
        return m(y, f, u, p);
    if (Dr(u))
        return v(y, f, u, p);
    tt(y, u);
} return typeof u == "string" && u !== "" || typeof u == "number" ? (u = "" + u, f !== null && f.tag === 6 ? (n(y, f.sibling), f = i(f, u), f.return = y, y = f) : (n(y, f), f = Eo(u, y.mode, p), f.return = y, y = f), s(y)) : n(y, f); } return j; }
var yr = tp(!0), sp = tp(!1), Ai = {}, wa = un(Ai), ji = un(Ai), zi = un(Ai);
function jn(e) { if (e === Ai)
    throw Error(D(174)); return e; }
function Su(e, a) { switch (ne(zi, a), ne(ji, e), ne(wa, Ai), e = a.nodeType, e) {
    case 9:
    case 11:
        a = (a = a.documentElement) ? a.namespaceURI : nl(null, "");
        break;
    default: e = e === 8 ? a.parentNode : a, a = e.namespaceURI || null, e = e.tagName, a = nl(a, e);
} ie(wa), ne(wa, a); }
function kr() { ie(wa), ie(ji), ie(zi); }
function op(e) { jn(zi.current); var a = jn(wa.current), n = nl(a, e.type); a !== n && (ne(ji, e), ne(wa, n)); }
function Ou(e) { ji.current === e && (ie(wa), ie(ji)); }
var le = un(0);
function Kt(e) { for (var a = e; a !== null;) {
    if (a.tag === 13) {
        var n = a.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
            return a;
    }
    else if (a.tag === 19 && a.memoizedProps.revealOrder !== void 0) {
        if (a.flags & 128)
            return a;
    }
    else if (a.child !== null) {
        a.child.return = a, a = a.child;
        continue;
    }
    if (a === e)
        break;
    for (; a.sibling === null;) {
        if (a.return === null || a.return === e)
            return null;
        a = a.return;
    }
    a.sibling.return = a.return, a = a.sibling;
} return null; }
var zo = [];
function Eu() { for (var e = 0; e < zo.length; e++)
    zo[e]._workInProgressVersionPrimary = null; zo.length = 0; }
var jt = Ma.ReactCurrentDispatcher, xo = Ma.ReactCurrentBatchConfig, En = 0, ce = null, ke = null, je = null, Gt = !1, si = !1, xi = 0, ov = 0;
function Pe() { throw Error(D(321)); }
function Pu(e, a) { if (a === null)
    return !1; for (var n = 0; n < a.length && n < e.length; n++)
    if (!pa(e[n], a[n]))
        return !1; return !0; }
function Cu(e, a, n, r, i, t) { if (En = t, ce = a, a.memoizedState = null, a.updateQueue = null, a.lanes = 0, jt.current = e === null || e.memoizedState === null ? dv : mv, e = n(r, i), si) {
    t = 0;
    do {
        if (si = !1, xi = 0, 25 <= t)
            throw Error(D(301));
        t += 1, je = ke = null, a.updateQueue = null, jt.current = hv, e = n(r, i);
    } while (si);
} if (jt.current = Yt, a = ke !== null && ke.next !== null, En = 0, je = ke = ce = null, Gt = !1, a)
    throw Error(D(300)); return e; }
function Tu() { var e = xi !== 0; return xi = 0, e; }
function ba() { var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null }; return je === null ? ce.memoizedState = je = e : je = je.next = e, je; }
function la() { if (ke === null) {
    var e = ce.alternate;
    e = e !== null ? e.memoizedState : null;
}
else
    e = ke.next; var a = je === null ? ce.memoizedState : je.next; if (a !== null)
    je = a, ke = e;
else {
    if (e === null)
        throw Error(D(310));
    ke = e, e = { memoizedState: ke.memoizedState, baseState: ke.baseState, baseQueue: ke.baseQueue, queue: ke.queue, next: null }, je === null ? ce.memoizedState = je = e : je = je.next = e;
} return je; }
function qi(e, a) { return typeof a == "function" ? a(e) : a; }
function qo(e) { var a = la(), n = a.queue; if (n === null)
    throw Error(D(311)); n.lastRenderedReducer = e; var r = ke, i = r.baseQueue, t = n.pending; if (t !== null) {
    if (i !== null) {
        var s = i.next;
        i.next = t.next, t.next = s;
    }
    r.baseQueue = i = t, n.pending = null;
} if (i !== null) {
    t = i.next, r = r.baseState;
    var o = s = null, l = null, c = t;
    do {
        var d = c.lane;
        if ((En & d) === d)
            l !== null && (l = l.next = { lane: 0, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null }), r = c.hasEagerState ? c.eagerState : e(r, c.action);
        else {
            var b = { lane: d, action: c.action, hasEagerState: c.hasEagerState, eagerState: c.eagerState, next: null };
            l === null ? (o = l = b, s = r) : l = l.next = b, ce.lanes |= d, Pn |= d;
        }
        c = c.next;
    } while (c !== null && c !== t);
    l === null ? s = r : l.next = o, pa(r, a.memoizedState) || (Fe = !0), a.memoizedState = r, a.baseState = s, a.baseQueue = l, n.lastRenderedState = r;
} if (e = n.interleaved, e !== null) {
    i = e;
    do
        t = i.lane, ce.lanes |= t, Pn |= t, i = i.next;
    while (i !== e);
}
else
    i === null && (n.lanes = 0); return [a.memoizedState, n.dispatch]; }
function _o(e) { var a = la(), n = a.queue; if (n === null)
    throw Error(D(311)); n.lastRenderedReducer = e; var r = n.dispatch, i = n.pending, t = a.memoizedState; if (i !== null) {
    n.pending = null;
    var s = i = i.next;
    do
        t = e(t, s.action), s = s.next;
    while (s !== i);
    pa(t, a.memoizedState) || (Fe = !0), a.memoizedState = t, a.baseQueue === null && (a.baseState = t), n.lastRenderedState = t;
} return [t, r]; }
function lp() { }
function cp(e, a) { var n = ce, r = la(), i = a(), t = !pa(r.memoizedState, i); if (t && (r.memoizedState = i, Fe = !0), r = r.queue, Ru(mp.bind(null, n, r, e), [e]), r.getSnapshot !== a || t || je !== null && je.memoizedState.tag & 1) {
    if (n.flags |= 2048, _i(9, dp.bind(null, n, r, i, a), void 0, null), ze === null)
        throw Error(D(349));
    En & 30 || up(n, a, i);
} return i; }
function up(e, a, n) { e.flags |= 16384, e = { getSnapshot: a, value: n }, a = ce.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, ce.updateQueue = a, a.stores = [e]) : (n = a.stores, n === null ? a.stores = [e] : n.push(e)); }
function dp(e, a, n, r) { a.value = n, a.getSnapshot = r, hp(a) && gp(e); }
function mp(e, a, n) { return n(function () { hp(a) && gp(e); }); }
function hp(e) { var a = e.getSnapshot; e = e.value; try {
    var n = a();
    return !pa(e, n);
}
catch (_q) {
    return !0;
} }
function gp(e) { var a = Na(e, 1); a !== null && ga(a, e, 1, -1); }
function hm(e) { var a = ba(); return typeof e == "function" && (e = e()), a.memoizedState = a.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: qi, lastRenderedState: e }, a.queue = e, e = e.dispatch = uv.bind(null, ce, e), [a.memoizedState, e]; }
function _i(e, a, n, r) { return e = { tag: e, create: a, destroy: n, deps: r, next: null }, a = ce.updateQueue, a === null ? (a = { lastEffect: null, stores: null }, ce.updateQueue = a, a.lastEffect = e.next = e) : (n = a.lastEffect, n === null ? a.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, a.lastEffect = e)), e; }
function pp() { return la().memoizedState; }
function zt(e, a, n, r) { var i = ba(); ce.flags |= e, i.memoizedState = _i(1 | a, n, void 0, r === void 0 ? null : r); }
function Ss(e, a, n, r) { var i = la(); r = r === void 0 ? null : r; var t = void 0; if (ke !== null) {
    var s = ke.memoizedState;
    if (t = s.destroy, r !== null && Pu(r, s.deps)) {
        i.memoizedState = _i(a, n, t, r);
        return;
    }
} ce.flags |= e, i.memoizedState = _i(1 | a, n, t, r); }
function gm(e, a) { return zt(8390656, 8, e, a); }
function Ru(e, a) { return Ss(2048, 8, e, a); }
function fp(e, a) { return Ss(4, 2, e, a); }
function bp(e, a) { return Ss(4, 4, e, a); }
function yp(e, a) { if (typeof a == "function")
    return e = e(), a(e), function () { a(null); }; if (a != null)
    return e = e(), a.current = e, function () { a.current = null; }; }
function kp(e, a, n) { return n = n != null ? n.concat([e]) : null, Ss(4, 4, yp.bind(null, a, e), n); }
function Nu() { }
function vp(e, a) { var n = la(); a = a === void 0 ? null : a; var r = n.memoizedState; return r !== null && a !== null && Pu(a, r[1]) ? r[0] : (n.memoizedState = [e, a], e); }
function wp(e, a) { var n = la(); a = a === void 0 ? null : a; var r = n.memoizedState; return r !== null && a !== null && Pu(a, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, a], e); }
function jp(e, a, n) { return En & 21 ? (pa(n, a) || (n = qg(), ce.lanes |= n, Pn |= n, e.baseState = !0), a) : (e.baseState && (e.baseState = !1, Fe = !0), e.memoizedState = n); }
function lv(e, a) { var n = Z; Z = n !== 0 && 4 > n ? n : 4, e(!0); var r = xo.transition; xo.transition = {}; try {
    e(!1), a();
}
finally {
    Z = n, xo.transition = r;
} }
function zp() { return la().memoizedState; }
function cv(e, a, n) { var r = rn(e); if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, xp(e))
    qp(a, n);
else if (n = ap(e, a, n, r), n !== null) {
    var i = De();
    ga(n, e, r, i), _p(n, a, r);
} }
function uv(e, a, n) { var r = rn(e), i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }; if (xp(e))
    qp(a, i);
else {
    var t = e.alternate;
    if (e.lanes === 0 && (t === null || t.lanes === 0) && (t = a.lastRenderedReducer, t !== null))
        try {
            var s = a.lastRenderedState, o = t(s, n);
            if (i.hasEagerState = !0, i.eagerState = o, pa(o, s)) {
                var l = a.interleaved;
                l === null ? (i.next = i, qu(a)) : (i.next = l.next, l.next = i), a.interleaved = i;
                return;
            }
        }
        catch (_q) { }
        finally { }
    n = ap(e, a, i, r), n !== null && (i = De(), ga(n, e, r, i), _p(n, a, r));
} }
function xp(e) { var a = e.alternate; return e === ce || a !== null && a === ce; }
function qp(e, a) { si = Gt = !0; var n = e.pending; n === null ? a.next = a : (a.next = n.next, n.next = a), e.pending = a; }
function _p(e, a, n) { if (n & 4194240) {
    var r = a.lanes;
    r &= e.pendingLanes, n |= r, a.lanes = n, du(e, n);
} }
var Yt = { readContext: oa, useCallback: Pe, useContext: Pe, useEffect: Pe, useImperativeHandle: Pe, useInsertionEffect: Pe, useLayoutEffect: Pe, useMemo: Pe, useReducer: Pe, useRef: Pe, useState: Pe, useDebugValue: Pe, useDeferredValue: Pe, useTransition: Pe, useMutableSource: Pe, useSyncExternalStore: Pe, useId: Pe, unstable_isNewReconciler: !1 }, dv = { readContext: oa, useCallback: function (e, a) { return ba().memoizedState = [e, a === void 0 ? null : a], e; }, useContext: oa, useEffect: gm, useImperativeHandle: function (e, a, n) { return n = n != null ? n.concat([e]) : null, zt(4194308, 4, yp.bind(null, a, e), n); }, useLayoutEffect: function (e, a) { return zt(4194308, 4, e, a); }, useInsertionEffect: function (e, a) { return zt(4, 2, e, a); }, useMemo: function (e, a) { var n = ba(); return a = a === void 0 ? null : a, e = e(), n.memoizedState = [e, a], e; }, useReducer: function (e, a, n) { var r = ba(); return a = n !== void 0 ? n(a) : a, r.memoizedState = r.baseState = a, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: a }, r.queue = e, e = e.dispatch = cv.bind(null, ce, e), [r.memoizedState, e]; }, useRef: function (e) { var a = ba(); return e = { current: e }, a.memoizedState = e; }, useState: hm, useDebugValue: Nu, useDeferredValue: function (e) { return ba().memoizedState = e; }, useTransition: function () { var e = hm(!1), a = e[0]; return e = lv.bind(null, e[1]), ba().memoizedState = e, [a, e]; }, useMutableSource: function () { }, useSyncExternalStore: function (e, a, n) { var r = ce, i = ba(); if (se) {
        if (n === void 0)
            throw Error(D(407));
        n = n();
    }
    else {
        if (n = a(), ze === null)
            throw Error(D(349));
        En & 30 || up(r, a, n);
    } i.memoizedState = n; var t = { value: n, getSnapshot: a }; return i.queue = t, gm(mp.bind(null, r, t, e), [e]), r.flags |= 2048, _i(9, dp.bind(null, r, t, n, a), void 0, null), n; }, useId: function () { var e = ba(), a = ze.identifierPrefix; if (se) {
        var n = Ea, r = Oa;
        n = (r & ~(1 << 32 - ha(r) - 1)).toString(32) + n, a = ":" + a + "R" + n, n = xi++, 0 < n && (a += "H" + n.toString(32)), a += ":";
    }
    else
        n = ov++, a = ":" + a + "r" + n.toString(32) + ":"; return e.memoizedState = a; }, unstable_isNewReconciler: !1 }, mv = { readContext: oa, useCallback: vp, useContext: oa, useEffect: Ru, useImperativeHandle: kp, useInsertionEffect: fp, useLayoutEffect: bp, useMemo: wp, useReducer: qo, useRef: pp, useState: function () { return qo(qi); }, useDebugValue: Nu, useDeferredValue: function (e) { var a = la(); return jp(a, ke.memoizedState, e); }, useTransition: function () { var e = qo(qi)[0], a = la().memoizedState; return [e, a]; }, useMutableSource: lp, useSyncExternalStore: cp, useId: zp, unstable_isNewReconciler: !1 }, hv = { readContext: oa, useCallback: vp, useContext: oa, useEffect: Ru, useImperativeHandle: kp, useInsertionEffect: fp, useLayoutEffect: bp, useMemo: wp, useReducer: _o, useRef: pp, useState: function () { return _o(qi); }, useDebugValue: Nu, useDeferredValue: function (e) { var a = la(); return ke === null ? a.memoizedState = e : jp(a, ke.memoizedState, e); }, useTransition: function () { var e = _o(qi)[0], a = la().memoizedState; return [e, a]; }, useMutableSource: lp, useSyncExternalStore: cp, useId: zp, unstable_isNewReconciler: !1 };
function vr(e, a) {
    try {
        var n = "", r = a;
        do
            n += $y(r), r = r.return;
        while (r);
        var i = n;
    }
    catch (t) {
        i = `
Error generating stack: ` + t.message + `
` + t.stack;
    }
    return { value: e, source: a, stack: i, digest: null };
}
function So(e, a, n) { return { value: e, source: null, stack: n !== null && n !== void 0 ? n : null, digest: a !== null && a !== void 0 ? a : null }; }
function ql(e, a) { try {
    console.error(a.value);
}
catch (n) {
    setTimeout(function () { throw n; });
} }
var gv = typeof WeakMap == "function" ? WeakMap : Map;
function Sp(e, a, n) { n = Pa(-1, n), n.tag = 3, n.payload = { element: null }; var r = a.value; return n.callback = function () { Jt || (Jt = !0, Il = r), ql(e, a); }, n; }
function Op(e, a, n) { n = Pa(-1, n), n.tag = 3; var r = e.type.getDerivedStateFromError; if (typeof r == "function") {
    var i = a.value;
    n.payload = function () { return r(i); }, n.callback = function () { ql(e, a); };
} var t = e.stateNode; return t !== null && typeof t.componentDidCatch == "function" && (n.callback = function () { ql(e, a), typeof r != "function" && (nn === null ? nn = new Set([this]) : nn.add(this)); var s = a.stack; this.componentDidCatch(a.value, { componentStack: s !== null ? s : "" }); }), n; }
function pm(e, a, n) { var r = e.pingCache; if (r === null) {
    r = e.pingCache = new gv;
    var i = new Set;
    r.set(a, i);
}
else
    i = r.get(a), i === void 0 && (i = new Set, r.set(a, i)); i.has(n) || (i.add(n), e = Ov.bind(null, e, a, n), a.then(e, e)); }
function fm(e) { do {
    var a;
    if ((a = e.tag === 13) && (a = e.memoizedState, a = a !== null ? a.dehydrated !== null : !0), a)
        return e;
    e = e.return;
} while (e !== null); return null; }
function bm(e, a, n, r, i) { return e.mode & 1 ? (e.flags |= 65536, e.lanes = i, e) : (e === a ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (a = Pa(-1, 1), a.tag = 2, an(n, a, 1))), n.lanes |= 1), e); }
var pv = Ma.ReactCurrentOwner, Fe = !1;
function Ne(e, a, n, r) { a.child = e === null ? sp(a, null, n, r) : yr(a, e.child, n, r); }
function ym(e, a, n, r, i) { n = n.render; var t = a.ref; return mr(a, i), r = Cu(e, a, n, r, t, i), n = Tu(), e !== null && !Fe ? (a.updateQueue = e.updateQueue, a.flags &= -2053, e.lanes &= ~i, Ia(e, a, i)) : (se && n && ku(a), a.flags |= 1, Ne(e, a, r, i), a.child); }
function km(e, a, n, r, i) { if (e === null) {
    var t = n.type;
    return typeof t == "function" && !Uu(t) && t.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (a.tag = 15, a.type = t, Ep(e, a, t, r, i)) : (e = St(n.type, null, r, a, a.mode, i), e.ref = a.ref, e.return = a, a.child = e);
} if (t = e.child, !(e.lanes & i)) {
    var s = t.memoizedProps;
    if (n = n.compare, n = n !== null ? n : yi, n(s, r) && e.ref === a.ref)
        return Ia(e, a, i);
} return a.flags |= 1, e = tn(t, r), e.ref = a.ref, e.return = a, a.child = e; }
function Ep(e, a, n, r, i) { if (e !== null) {
    var t = e.memoizedProps;
    if (yi(t, r) && e.ref === a.ref)
        if (Fe = !1, a.pendingProps = r = t, (e.lanes & i) !== 0)
            e.flags & 131072 && (Fe = !0);
        else
            return a.lanes = e.lanes, Ia(e, a, i);
} return _l(e, a, n, r, i); }
function Pp(e, a, n) { var r = a.pendingProps, i = r.children, t = e !== null ? e.memoizedState : null; if (r.mode === "hidden")
    if (!(a.mode & 1))
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, ne(tr, He), He |= n;
    else {
        if (!(n & 1073741824))
            return e = t !== null ? t.baseLanes | n : n, a.lanes = a.childLanes = 1073741824, a.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, a.updateQueue = null, ne(tr, He), He |= e, null;
        a.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = t !== null ? t.baseLanes : n, ne(tr, He), He |= r;
    }
else
    t !== null ? (r = t.baseLanes | n, a.memoizedState = null) : r = n, ne(tr, He), He |= r; return Ne(e, a, i, n), a.child; }
function Cp(e, a) { var n = a.ref; (e === null && n !== null || e !== null && e.ref !== n) && (a.flags |= 512, a.flags |= 2097152); }
function _l(e, a, n, r, i) { var t = Ue(n) ? Sn : Re.current; return t = fr(a, t), mr(a, i), n = Cu(e, a, n, r, t, i), r = Tu(), e !== null && !Fe ? (a.updateQueue = e.updateQueue, a.flags &= -2053, e.lanes &= ~i, Ia(e, a, i)) : (se && r && ku(a), a.flags |= 1, Ne(e, a, n, i), a.child); }
function vm(e, a, n, r, i) { if (Ue(n)) {
    var t = !0;
    Ut(a);
}
else
    t = !1; if (mr(a, i), a.stateNode === null)
    xt(e, a), ip(a, n, r), xl(a, n, r, i), r = !0;
else if (e === null) {
    var s = a.stateNode, o = a.memoizedProps;
    s.props = o;
    var l = s.context, c = n.contextType;
    typeof c == "object" && c !== null ? c = oa(c) : (c = Ue(n) ? Sn : Re.current, c = fr(a, c));
    var d = n.getDerivedStateFromProps, b = typeof d == "function" || typeof s.getSnapshotBeforeUpdate == "function";
    b || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== r || l !== c) && dm(a, s, r, c), Wa = !1;
    var g = a.memoizedState;
    s.state = g, Qt(a, r, s, i), l = a.memoizedState, o !== r || g !== l || $e.current || Wa ? (typeof d == "function" && (zl(a, n, d, r), l = a.memoizedState), (o = Wa || um(a, n, o, r, g, l, c)) ? (b || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount()), typeof s.componentDidMount == "function" && (a.flags |= 4194308)) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), a.memoizedProps = r, a.memoizedState = l), s.props = r, s.state = l, s.context = c, r = o) : (typeof s.componentDidMount == "function" && (a.flags |= 4194308), r = !1);
}
else {
    s = a.stateNode, np(e, a), o = a.memoizedProps, c = a.type === a.elementType ? o : ua(a.type, o), s.props = c, b = a.pendingProps, g = s.context, l = n.contextType, typeof l == "object" && l !== null ? l = oa(l) : (l = Ue(n) ? Sn : Re.current, l = fr(a, l));
    var k = n.getDerivedStateFromProps;
    (d = typeof k == "function" || typeof s.getSnapshotBeforeUpdate == "function") || typeof s.UNSAFE_componentWillReceiveProps != "function" && typeof s.componentWillReceiveProps != "function" || (o !== b || g !== l) && dm(a, s, r, l), Wa = !1, g = a.memoizedState, s.state = g, Qt(a, r, s, i);
    var m = a.memoizedState;
    o !== b || g !== m || $e.current || Wa ? (typeof k == "function" && (zl(a, n, k, r), m = a.memoizedState), (c = Wa || um(a, n, c, r, g, m, l) || !1) ? (d || typeof s.UNSAFE_componentWillUpdate != "function" && typeof s.componentWillUpdate != "function" || (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(r, m, l), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(r, m, l)), typeof s.componentDidUpdate == "function" && (a.flags |= 4), typeof s.getSnapshotBeforeUpdate == "function" && (a.flags |= 1024)) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && g === e.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && g === e.memoizedState || (a.flags |= 1024), a.memoizedProps = r, a.memoizedState = m), s.props = r, s.state = m, s.context = l, r = c) : (typeof s.componentDidUpdate != "function" || o === e.memoizedProps && g === e.memoizedState || (a.flags |= 4), typeof s.getSnapshotBeforeUpdate != "function" || o === e.memoizedProps && g === e.memoizedState || (a.flags |= 1024), r = !1);
} return Sl(e, a, n, r, t, i); }
function Sl(e, a, n, r, i, t) { Cp(e, a); var s = (a.flags & 128) !== 0; if (!r && !s)
    return i && tm(a, n, !1), Ia(e, a, t); r = a.stateNode, pv.current = a; var o = s && typeof n.getDerivedStateFromError != "function" ? null : r.render(); return a.flags |= 1, e !== null && s ? (a.child = yr(a, e.child, null, t), a.child = yr(a, null, o, t)) : Ne(e, a, o, t), a.memoizedState = r.state, i && tm(a, n, !0), a.child; }
function Tp(e) { var a = e.stateNode; a.pendingContext ? im(e, a.pendingContext, a.pendingContext !== a.context) : a.context && im(e, a.context, !1), Su(e, a.containerInfo); }
function wm(e, a, n, r, i) { return br(), wu(i), a.flags |= 256, Ne(e, a, n, r), a.child; }
var Ol = { dehydrated: null, treeContext: null, retryLane: 0 };
function El(e) { return { baseLanes: e, cachePool: null, transitions: null }; }
function Rp(e, a, n) { var r = a.pendingProps, i = le.current, t = !1, s = (a.flags & 128) !== 0, o; if ((o = s) || (o = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0), o ? (t = !0, a.flags &= -129) : (e === null || e.memoizedState !== null) && (i |= 1), ne(le, i & 1), e === null)
    return wl(a), e = a.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (a.mode & 1 ? e.data === "$!" ? a.lanes = 8 : a.lanes = 1073741824 : a.lanes = 1, null) : (s = r.children, e = r.fallback, t ? (r = a.mode, t = a.child, s = { mode: "hidden", children: s }, !(r & 1) && t !== null ? (t.childLanes = 0, t.pendingProps = s) : t = Ps(s, r, 0, null), e = _n(e, r, n, null), t.return = a, e.return = a, t.sibling = e, a.child = t, a.child.memoizedState = El(n), a.memoizedState = Ol, e) : Iu(a, s)); if (i = e.memoizedState, i !== null && (o = i.dehydrated, o !== null))
    return fv(e, a, s, r, o, i, n); if (t) {
    t = r.fallback, s = a.mode, i = e.child, o = i.sibling;
    var l = { mode: "hidden", children: r.children };
    return !(s & 1) && a.child !== i ? (r = a.child, r.childLanes = 0, r.pendingProps = l, a.deletions = null) : (r = tn(i, l), r.subtreeFlags = i.subtreeFlags & 14680064), o !== null ? t = tn(o, t) : (t = _n(t, s, n, null), t.flags |= 2), t.return = a, r.return = a, r.sibling = t, a.child = r, r = t, t = a.child, s = e.child.memoizedState, s = s === null ? El(n) : { baseLanes: s.baseLanes | n, cachePool: null, transitions: s.transitions }, t.memoizedState = s, t.childLanes = e.childLanes & ~n, a.memoizedState = Ol, r;
} return t = e.child, e = t.sibling, r = tn(t, { mode: "visible", children: r.children }), !(a.mode & 1) && (r.lanes = n), r.return = a, r.sibling = null, e !== null && (n = a.deletions, n === null ? (a.deletions = [e], a.flags |= 16) : n.push(e)), a.child = r, a.memoizedState = null, r; }
function Iu(e, a) { return a = Ps({ mode: "visible", children: a }, e.mode, 0, null), a.return = e, e.child = a; }
function st(e, a, n, r) { return r !== null && wu(r), yr(a, e.child, null, n), e = Iu(a, a.pendingProps.children), e.flags |= 2, a.memoizedState = null, e; }
function fv(e, a, n, r, i, t, s) { if (n)
    return a.flags & 256 ? (a.flags &= -257, r = So(Error(D(422))), st(e, a, s, r)) : a.memoizedState !== null ? (a.child = e.child, a.flags |= 128, null) : (t = r.fallback, i = a.mode, r = Ps({ mode: "visible", children: r.children }, i, 0, null), t = _n(t, i, s, null), t.flags |= 2, r.return = a, t.return = a, r.sibling = t, a.child = r, a.mode & 1 && yr(a, e.child, null, s), a.child.memoizedState = El(s), a.memoizedState = Ol, t); if (!(a.mode & 1))
    return st(e, a, s, null); if (i.data === "$!") {
    if (r = i.nextSibling && i.nextSibling.dataset, r)
        var o = r.dgst;
    return r = o, t = Error(D(419)), r = So(t, r, void 0), st(e, a, s, r);
} if (o = (s & e.childLanes) !== 0, Fe || o) {
    if (r = ze, r !== null) {
        switch (s & -s) {
            case 4:
                i = 2;
                break;
            case 16:
                i = 8;
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
                i = 32;
                break;
            case 536870912:
                i = 268435456;
                break;
            default: i = 0;
        }
        i = i & (r.suspendedLanes | s) ? 0 : i, i !== 0 && i !== t.retryLane && (t.retryLane = i, Na(e, i), ga(r, e, i, -1));
    }
    return $u(), r = So(Error(D(421))), st(e, a, s, r);
} return i.data === "$?" ? (a.flags |= 128, a.child = e.child, a = Ev.bind(null, e), i._reactRetry = a, null) : (e = t.treeContext, Qe = en(i.nextSibling), Ke = a, se = !0, ma = null, e !== null && (aa[na++] = Oa, aa[na++] = Ea, aa[na++] = On, Oa = e.id, Ea = e.overflow, On = a), a = Iu(a, r.children), a.flags |= 4096, a); }
function jm(e, a, n) { e.lanes |= a; var r = e.alternate; r !== null && (r.lanes |= a), jl(e.return, a, n); }
function Oo(e, a, n, r, i) { var t = e.memoizedState; t === null ? e.memoizedState = { isBackwards: a, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: i } : (t.isBackwards = a, t.rendering = null, t.renderingStartTime = 0, t.last = r, t.tail = n, t.tailMode = i); }
function Np(e, a, n) { var r = a.pendingProps, i = r.revealOrder, t = r.tail; if (Ne(e, a, r.children, n), r = le.current, r & 2)
    r = r & 1 | 2, a.flags |= 128;
else {
    if (e !== null && e.flags & 128)
        e: for (e = a.child; e !== null;) {
            if (e.tag === 13)
                e.memoizedState !== null && jm(e, n, a);
            else if (e.tag === 19)
                jm(e, n, a);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue;
            }
            if (e === a)
                break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === a)
                    break e;
                e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
        }
    r &= 1;
} if (ne(le, r), !(a.mode & 1))
    a.memoizedState = null;
else
    switch (i) {
        case "forwards":
            for (n = a.child, i = null; n !== null;)
                e = n.alternate, e !== null && Kt(e) === null && (i = n), n = n.sibling;
            n = i, n === null ? (i = a.child, a.child = null) : (i = n.sibling, n.sibling = null), Oo(a, !1, i, n, t);
            break;
        case "backwards":
            for (n = null, i = a.child, a.child = null; i !== null;) {
                if (e = i.alternate, e !== null && Kt(e) === null) {
                    a.child = i;
                    break;
                }
                e = i.sibling, i.sibling = n, n = i, i = e;
            }
            Oo(a, !0, n, null, t);
            break;
        case "together":
            Oo(a, !1, null, null, void 0);
            break;
        default: a.memoizedState = null;
    } return a.child; }
function xt(e, a) { !(a.mode & 1) && e !== null && (e.alternate = null, a.alternate = null, a.flags |= 2); }
function Ia(e, a, n) { if (e !== null && (a.dependencies = e.dependencies), Pn |= a.lanes, !(n & a.childLanes))
    return null; if (e !== null && a.child !== e.child)
    throw Error(D(153)); if (a.child !== null) {
    for (e = a.child, n = tn(e, e.pendingProps), a.child = n, n.return = a; e.sibling !== null;)
        e = e.sibling, n = n.sibling = tn(e, e.pendingProps), n.return = a;
    n.sibling = null;
} return a.child; }
function bv(e, a, n) { switch (a.tag) {
    case 3:
        Tp(a), br();
        break;
    case 5:
        op(a);
        break;
    case 1:
        Ue(a.type) && Ut(a);
        break;
    case 4:
        Su(a, a.stateNode.containerInfo);
        break;
    case 10:
        var r = a.type._context, i = a.memoizedProps.value;
        ne(Ht, r._currentValue), r._currentValue = i;
        break;
    case 13:
        if (r = a.memoizedState, r !== null)
            return r.dehydrated !== null ? (ne(le, le.current & 1), a.flags |= 128, null) : n & a.child.childLanes ? Rp(e, a, n) : (ne(le, le.current & 1), e = Ia(e, a, n), e !== null ? e.sibling : null);
        ne(le, le.current & 1);
        break;
    case 19:
        if (r = (n & a.childLanes) !== 0, e.flags & 128) {
            if (r)
                return Np(e, a, n);
            a.flags |= 128;
        }
        if (i = a.memoizedState, i !== null && (i.rendering = null, i.tail = null, i.lastEffect = null), ne(le, le.current), r)
            break;
        return null;
    case 22:
    case 23: return a.lanes = 0, Pp(e, a, n);
} return Ia(e, a, n); }
var Ip, Pl, Dp, Mp;
Ip = function (e, a) { for (var n = a.child; n !== null;) {
    if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
    }
    if (n === a)
        break;
    for (; n.sibling === null;) {
        if (n.return === null || n.return === a)
            return;
        n = n.return;
    }
    n.sibling.return = n.return, n = n.sibling;
} };
Pl = function () { };
Dp = function (e, a, n, r) { var i = e.memoizedProps; if (i !== r) {
    e = a.stateNode, jn(wa.current);
    var t = null;
    switch (n) {
        case "input":
            i = Jo(e, i), r = Jo(e, r), t = [];
            break;
        case "select":
            i = ue({}, i, { value: void 0 }), r = ue({}, r, { value: void 0 }), t = [];
            break;
        case "textarea":
            i = al(e, i), r = al(e, r), t = [];
            break;
        default: typeof i.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Ft);
    }
    rl(n, r);
    var s;
    n = null;
    for (c in i)
        if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
            if (c === "style") {
                var o = i[c];
                for (s in o)
                    o.hasOwnProperty(s) && (n || (n = {}), n[s] = "");
            }
            else
                c !== "dangerouslySetInnerHTML" && c !== "children" && c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && c !== "autoFocus" && (di.hasOwnProperty(c) ? t || (t = []) : (t = t || []).push(c, null));
    for (c in r) {
        var l = r[c];
        if (o = i != null ? i[c] : void 0, r.hasOwnProperty(c) && l !== o && (l != null || o != null))
            if (c === "style")
                if (o) {
                    for (s in o)
                        !o.hasOwnProperty(s) || l && l.hasOwnProperty(s) || (n || (n = {}), n[s] = "");
                    for (s in l)
                        l.hasOwnProperty(s) && o[s] !== l[s] && (n || (n = {}), n[s] = l[s]);
                }
                else
                    n || (t || (t = []), t.push(c, n)), n = l;
            else
                c === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, o = o ? o.__html : void 0, l != null && o !== l && (t = t || []).push(c, l)) : c === "children" ? typeof l != "string" && typeof l != "number" || (t = t || []).push(c, "" + l) : c !== "suppressContentEditableWarning" && c !== "suppressHydrationWarning" && (di.hasOwnProperty(c) ? (l != null && c === "onScroll" && re("scroll", e), t || o === l || (t = [])) : (t = t || []).push(c, l));
    }
    n && (t = t || []).push("style", n);
    var c = t;
    (a.updateQueue = c) && (a.flags |= 4);
} };
Mp = function (e, a, n, r) { n !== r && (a.flags |= 4); };
function Ur(e, a) { if (!se)
    switch (e.tailMode) {
        case "hidden":
            a = e.tail;
            for (var n = null; a !== null;)
                a.alternate !== null && (n = a), a = a.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;)
                n.alternate !== null && (r = n), n = n.sibling;
            r === null ? a || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
    } }
function Ce(e) { var a = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0; if (a)
    for (var i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags & 14680064, r |= i.flags & 14680064, i.return = e, i = i.sibling;
else
    for (i = e.child; i !== null;)
        n |= i.lanes | i.childLanes, r |= i.subtreeFlags, r |= i.flags, i.return = e, i = i.sibling; return e.subtreeFlags |= r, e.childLanes = n, a; }
function yv(e, a, n) { var r = a.pendingProps; switch (vu(a), a.tag) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14: return Ce(a), null;
    case 1: return Ue(a.type) && $t(), Ce(a), null;
    case 3: return r = a.stateNode, kr(), ie($e), ie(Re), Eu(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (it(a) ? a.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(a.flags & 256) || (a.flags |= 1024, ma !== null && (Al(ma), ma = null))), Pl(e, a), Ce(a), null;
    case 5:
        Ou(a);
        var i = jn(zi.current);
        if (n = a.type, e !== null && a.stateNode != null)
            Dp(e, a, n, r, i), e.ref !== a.ref && (a.flags |= 512, a.flags |= 2097152);
        else {
            if (!r) {
                if (a.stateNode === null)
                    throw Error(D(166));
                return Ce(a), null;
            }
            if (e = jn(wa.current), it(a)) {
                r = a.stateNode, n = a.type;
                var t = a.memoizedProps;
                switch (r[ya] = a, r[wi] = t, e = (a.mode & 1) !== 0, n) {
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
                        for (i = 0; i < Gr.length; i++)
                            re(Gr[i], r);
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
                        Cd(r, t), re("invalid", r);
                        break;
                    case "select":
                        r._wrapperState = { wasMultiple: !!t.multiple }, re("invalid", r);
                        break;
                    case "textarea": Rd(r, t), re("invalid", r);
                }
                rl(n, t), i = null;
                for (var s in t)
                    if (t.hasOwnProperty(s)) {
                        var o = t[s];
                        s === "children" ? typeof o == "string" ? r.textContent !== o && (t.suppressHydrationWarning !== !0 && rt(r.textContent, o, e), i = ["children", o]) : typeof o == "number" && r.textContent !== "" + o && (t.suppressHydrationWarning !== !0 && rt(r.textContent, o, e), i = ["children", "" + o]) : di.hasOwnProperty(s) && o != null && s === "onScroll" && re("scroll", r);
                    }
                switch (n) {
                    case "input":
                        Gi(r), Td(r, t, !0);
                        break;
                    case "textarea":
                        Gi(r), Nd(r);
                        break;
                    case "select":
                    case "option": break;
                    default: typeof t.onClick == "function" && (r.onclick = Ft);
                }
                r = i, a.updateQueue = r, r !== null && (a.flags |= 4);
            }
            else {
                s = i.nodeType === 9 ? i : i.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = ug(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = s.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = s.createElement(n, { is: r.is }) : (e = s.createElement(n), n === "select" && (s = e, r.multiple ? s.multiple = !0 : r.size && (s.size = r.size))) : e = s.createElementNS(e, n), e[ya] = a, e[wi] = r, Ip(e, a, !1, !1), a.stateNode = e;
                e: {
                    switch (s = il(n, r), n) {
                        case "dialog":
                            re("cancel", e), re("close", e), i = r;
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            re("load", e), i = r;
                            break;
                        case "video":
                        case "audio":
                            for (i = 0; i < Gr.length; i++)
                                re(Gr[i], e);
                            i = r;
                            break;
                        case "source":
                            re("error", e), i = r;
                            break;
                        case "img":
                        case "image":
                        case "link":
                            re("error", e), re("load", e), i = r;
                            break;
                        case "details":
                            re("toggle", e), i = r;
                            break;
                        case "input":
                            Cd(e, r), i = Jo(e, r), re("invalid", e);
                            break;
                        case "option":
                            i = r;
                            break;
                        case "select":
                            e._wrapperState = { wasMultiple: !!r.multiple }, i = ue({}, r, { value: void 0 }), re("invalid", e);
                            break;
                        case "textarea":
                            Rd(e, r), i = al(e, r), re("invalid", e);
                            break;
                        default: i = r;
                    }
                    rl(n, i), o = i;
                    for (t in o)
                        if (o.hasOwnProperty(t)) {
                            var l = o[t];
                            t === "style" ? hg(e, l) : t === "dangerouslySetInnerHTML" ? (l = l ? l.__html : void 0, l != null && dg(e, l)) : t === "children" ? typeof l == "string" ? (n !== "textarea" || l !== "") && mi(e, l) : typeof l == "number" && mi(e, "" + l) : t !== "suppressContentEditableWarning" && t !== "suppressHydrationWarning" && t !== "autoFocus" && (di.hasOwnProperty(t) ? l != null && t === "onScroll" && re("scroll", e) : l != null && tu(e, t, l, s));
                        }
                    switch (n) {
                        case "input":
                            Gi(e), Td(e, r, !1);
                            break;
                        case "textarea":
                            Gi(e), Nd(e);
                            break;
                        case "option":
                            r.value != null && e.setAttribute("value", "" + on(r.value));
                            break;
                        case "select":
                            e.multiple = !!r.multiple, t = r.value, t != null ? lr(e, !!r.multiple, t, !1) : r.defaultValue != null && lr(e, !!r.multiple, r.defaultValue, !0);
                            break;
                        default: typeof i.onClick == "function" && (e.onclick = Ft);
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
                        default: r = !1;
                    }
                }
                r && (a.flags |= 4);
            }
            a.ref !== null && (a.flags |= 512, a.flags |= 2097152);
        }
        return Ce(a), null;
    case 6:
        if (e && a.stateNode != null)
            Mp(e, a, e.memoizedProps, r);
        else {
            if (typeof r != "string" && a.stateNode === null)
                throw Error(D(166));
            if (n = jn(zi.current), jn(wa.current), it(a)) {
                if (r = a.stateNode, n = a.memoizedProps, r[ya] = a, (t = r.nodeValue !== n) && (e = Ke, e !== null))
                    switch (e.tag) {
                        case 3:
                            rt(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5: e.memoizedProps.suppressHydrationWarning !== !0 && rt(r.nodeValue, n, (e.mode & 1) !== 0);
                    }
                t && (a.flags |= 4);
            }
            else
                r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[ya] = a, a.stateNode = r;
        }
        return Ce(a), null;
    case 13:
        if (ie(le), r = a.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            if (se && Qe !== null && a.mode & 1 && !(a.flags & 128))
                ep(), br(), a.flags |= 98560, t = !1;
            else if (t = it(a), r !== null && r.dehydrated !== null) {
                if (e === null) {
                    if (!t)
                        throw Error(D(318));
                    if (t = a.memoizedState, t = t !== null ? t.dehydrated : null, !t)
                        throw Error(D(317));
                    t[ya] = a;
                }
                else
                    br(), !(a.flags & 128) && (a.memoizedState = null), a.flags |= 4;
                Ce(a), t = !1;
            }
            else
                ma !== null && (Al(ma), ma = null), t = !0;
            if (!t)
                return a.flags & 65536 ? a : null;
        }
        return a.flags & 128 ? (a.lanes = n, a) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (a.child.flags |= 8192, a.mode & 1 && (e === null || le.current & 1 ? ve === 0 && (ve = 3) : $u())), a.updateQueue !== null && (a.flags |= 4), Ce(a), null);
    case 4: return kr(), Pl(e, a), e === null && ki(a.stateNode.containerInfo), Ce(a), null;
    case 10: return xu(a.type._context), Ce(a), null;
    case 17: return Ue(a.type) && $t(), Ce(a), null;
    case 19:
        if (ie(le), t = a.memoizedState, t === null)
            return Ce(a), null;
        if (r = (a.flags & 128) !== 0, s = t.rendering, s === null)
            if (r)
                Ur(t, !1);
            else {
                if (ve !== 0 || e !== null && e.flags & 128)
                    for (e = a.child; e !== null;) {
                        if (s = Kt(e), s !== null) {
                            for (a.flags |= 128, Ur(t, !1), r = s.updateQueue, r !== null && (a.updateQueue = r, a.flags |= 4), a.subtreeFlags = 0, r = n, n = a.child; n !== null;)
                                t = n, e = r, t.flags &= 14680066, s = t.alternate, s === null ? (t.childLanes = 0, t.lanes = e, t.child = null, t.subtreeFlags = 0, t.memoizedProps = null, t.memoizedState = null, t.updateQueue = null, t.dependencies = null, t.stateNode = null) : (t.childLanes = s.childLanes, t.lanes = s.lanes, t.child = s.child, t.subtreeFlags = 0, t.deletions = null, t.memoizedProps = s.memoizedProps, t.memoizedState = s.memoizedState, t.updateQueue = s.updateQueue, t.type = s.type, e = s.dependencies, t.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                            return ne(le, le.current & 1 | 2), a.child;
                        }
                        e = e.sibling;
                    }
                t.tail !== null && pe() > wr && (a.flags |= 128, r = !0, Ur(t, !1), a.lanes = 4194304);
            }
        else {
            if (!r)
                if (e = Kt(s), e !== null) {
                    if (a.flags |= 128, r = !0, n = e.updateQueue, n !== null && (a.updateQueue = n, a.flags |= 4), Ur(t, !0), t.tail === null && t.tailMode === "hidden" && !s.alternate && !se)
                        return Ce(a), null;
                }
                else
                    2 * pe() - t.renderingStartTime > wr && n !== 1073741824 && (a.flags |= 128, r = !0, Ur(t, !1), a.lanes = 4194304);
            t.isBackwards ? (s.sibling = a.child, a.child = s) : (n = t.last, n !== null ? n.sibling = s : a.child = s, t.last = s);
        }
        return t.tail !== null ? (a = t.tail, t.rendering = a, t.tail = a.sibling, t.renderingStartTime = pe(), a.sibling = null, n = le.current, ne(le, r ? n & 1 | 2 : n & 1), a) : (Ce(a), null);
    case 22:
    case 23: return Fu(), r = a.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (a.flags |= 8192), r && a.mode & 1 ? He & 1073741824 && (Ce(a), a.subtreeFlags & 6 && (a.flags |= 8192)) : Ce(a), null;
    case 24: return null;
    case 25: return null;
} throw Error(D(156, a.tag)); }
function kv(e, a) { switch (vu(a), a.tag) {
    case 1: return Ue(a.type) && $t(), e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
    case 3: return kr(), ie($e), ie(Re), Eu(), e = a.flags, e & 65536 && !(e & 128) ? (a.flags = e & -65537 | 128, a) : null;
    case 5: return Ou(a), null;
    case 13:
        if (ie(le), e = a.memoizedState, e !== null && e.dehydrated !== null) {
            if (a.alternate === null)
                throw Error(D(340));
            br();
        }
        return e = a.flags, e & 65536 ? (a.flags = e & -65537 | 128, a) : null;
    case 19: return ie(le), null;
    case 4: return kr(), null;
    case 10: return xu(a.type._context), null;
    case 22:
    case 23: return Fu(), null;
    case 24: return null;
    default: return null;
} }
var ot = !1, Te = !1, vv = typeof WeakSet == "function" ? WeakSet : Set, F = null;
function ir(e, a) { var n = e.ref; if (n !== null)
    if (typeof n == "function")
        try {
            n(null);
        }
        catch (r) {
            de(e, a, r);
        }
    else
        n.current = null; }
function Cl(e, a, n) { try {
    n();
}
catch (r) {
    de(e, a, r);
} }
var zm = !1;
function wv(e, a) { if (gl = Mt, e = $g(), yu(e)) {
    if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
    else
        e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var i = r.anchorOffset, t = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, t.nodeType;
                }
                catch (_q) {
                    n = null;
                    break e;
                }
                var s = 0, o = -1, l = -1, c = 0, d = 0, b = e, g = null;
                a: for (;;) {
                    for (var k; b !== n || i !== 0 && b.nodeType !== 3 || (o = s + i), b !== t || r !== 0 && b.nodeType !== 3 || (l = s + r), b.nodeType === 3 && (s += b.nodeValue.length), (k = b.firstChild) !== null;)
                        g = b, b = k;
                    for (;;) {
                        if (b === e)
                            break a;
                        if (g === n && ++c === i && (o = s), g === t && ++d === r && (l = s), (k = b.nextSibling) !== null)
                            break;
                        b = g, g = b.parentNode;
                    }
                    b = k;
                }
                n = o === -1 || l === -1 ? null : { start: o, end: l };
            }
            else
                n = null;
        }
    n = n || { start: 0, end: 0 };
}
else
    n = null; for (pl = { focusedElem: e, selectionRange: n }, Mt = !1, F = a; F !== null;)
    if (a = F, e = a.child, (a.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = a, F = e;
    else
        for (; F !== null;) {
            a = F;
            try {
                var m = a.alternate;
                if (a.flags & 1024)
                    switch (a.tag) {
                        case 0:
                        case 11:
                        case 15: break;
                        case 1:
                            if (m !== null) {
                                var v = m.memoizedProps, j = m.memoizedState, y = a.stateNode, f = y.getSnapshotBeforeUpdate(a.elementType === a.type ? v : ua(a.type, v), j);
                                y.__reactInternalSnapshotBeforeUpdate = f;
                            }
                            break;
                        case 3:
                            var u = a.stateNode.containerInfo;
                            u.nodeType === 1 ? u.textContent = "" : u.nodeType === 9 && u.documentElement && u.removeChild(u.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17: break;
                        default: throw Error(D(163));
                    }
            }
            catch (p) {
                de(a, a.return, p);
            }
            if (e = a.sibling, e !== null) {
                e.return = a.return, F = e;
                break;
            }
            F = a.return;
        } return m = zm, zm = !1, m; }
function oi(e, a, n) { var r = a.updateQueue; if (r = r !== null ? r.lastEffect : null, r !== null) {
    var i = r = r.next;
    do {
        if ((i.tag & e) === e) {
            var t = i.destroy;
            i.destroy = void 0, t !== void 0 && Cl(a, n, t);
        }
        i = i.next;
    } while (i !== r);
} }
function Os(e, a) { if (a = a.updateQueue, a = a !== null ? a.lastEffect : null, a !== null) {
    var n = a = a.next;
    do {
        if ((n.tag & e) === e) {
            var r = n.create;
            n.destroy = r();
        }
        n = n.next;
    } while (n !== a);
} }
function Tl(e) { var a = e.ref; if (a !== null) {
    var n = e.stateNode;
    switch (e.tag) {
        case 5:
            e = n;
            break;
        default: e = n;
    }
    typeof a == "function" ? a(e) : a.current = e;
} }
function Ap(e) { var a = e.alternate; a !== null && (e.alternate = null, Ap(a)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (a = e.stateNode, a !== null && (delete a[ya], delete a[wi], delete a[yl], delete a[rv], delete a[iv])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null; }
function Lp(e) { return e.tag === 5 || e.tag === 3 || e.tag === 4; }
function xm(e) { e: for (;;) {
    for (; e.sibling === null;) {
        if (e.return === null || Lp(e.return))
            return null;
        e = e.return;
    }
    for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
        if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
        e.child.return = e, e = e.child;
    }
    if (!(e.flags & 2))
        return e.stateNode;
} }
function Rl(e, a, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, a ? n.nodeType === 8 ? n.parentNode.insertBefore(e, a) : n.insertBefore(e, a) : (n.nodeType === 8 ? (a = n.parentNode, a.insertBefore(e, n)) : (a = n, a.appendChild(e)), n = n._reactRootContainer, n != null || a.onclick !== null || (a.onclick = Ft));
else if (r !== 4 && (e = e.child, e !== null))
    for (Rl(e, a, n), e = e.sibling; e !== null;)
        Rl(e, a, n), e = e.sibling; }
function Nl(e, a, n) { var r = e.tag; if (r === 5 || r === 6)
    e = e.stateNode, a ? n.insertBefore(e, a) : n.appendChild(e);
else if (r !== 4 && (e = e.child, e !== null))
    for (Nl(e, a, n), e = e.sibling; e !== null;)
        Nl(e, a, n), e = e.sibling; }
var _e = null, da = !1;
function La(e, a, n) { for (n = n.child; n !== null;)
    Fp(e, a, n), n = n.sibling; }
function Fp(e, a, n) { if (va && typeof va.onCommitFiberUnmount == "function")
    try {
        va.onCommitFiberUnmount(vs, n);
    }
    catch (_q) { } switch (n.tag) {
    case 5: Te || ir(n, a);
    case 6:
        var r = _e, i = da;
        _e = null, La(e, a, n), _e = r, da = i, _e !== null && (da ? (e = _e, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : _e.removeChild(n.stateNode));
        break;
    case 18:
        _e !== null && (da ? (e = _e, n = n.stateNode, e.nodeType === 8 ? wo(e.parentNode, n) : e.nodeType === 1 && wo(e, n), fi(e)) : wo(_e, n.stateNode));
        break;
    case 4:
        r = _e, i = da, _e = n.stateNode.containerInfo, da = !0, La(e, a, n), _e = r, da = i;
        break;
    case 0:
    case 11:
    case 14:
    case 15:
        if (!Te && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
            i = r = r.next;
            do {
                var t = i, s = t.destroy;
                t = t.tag, s !== void 0 && (t & 2 || t & 4) && Cl(n, a, s), i = i.next;
            } while (i !== r);
        }
        La(e, a, n);
        break;
    case 1:
        if (!Te && (ir(n, a), r = n.stateNode, typeof r.componentWillUnmount == "function"))
            try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
            }
            catch (o) {
                de(n, a, o);
            }
        La(e, a, n);
        break;
    case 21:
        La(e, a, n);
        break;
    case 22:
        n.mode & 1 ? (Te = (r = Te) || n.memoizedState !== null, La(e, a, n), Te = r) : La(e, a, n);
        break;
    default: La(e, a, n);
} }
function qm(e) { var a = e.updateQueue; if (a !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new vv), a.forEach(function (r) { var i = Pv.bind(null, e, r); n.has(r) || (n.add(r), r.then(i, i)); });
} }
function ca(e, a) { var n = a.deletions; if (n !== null)
    for (var r = 0; r < n.length; r++) {
        var i = n[r];
        try {
            var t = e, s = a, o = s;
            e: for (; o !== null;) {
                switch (o.tag) {
                    case 5:
                        _e = o.stateNode, da = !1;
                        break e;
                    case 3:
                        _e = o.stateNode.containerInfo, da = !0;
                        break e;
                    case 4:
                        _e = o.stateNode.containerInfo, da = !0;
                        break e;
                }
                o = o.return;
            }
            if (_e === null)
                throw Error(D(160));
            Fp(t, s, i), _e = null, da = !1;
            var l = i.alternate;
            l !== null && (l.return = null), i.return = null;
        }
        catch (c) {
            de(i, a, c);
        }
    } if (a.subtreeFlags & 12854)
    for (a = a.child; a !== null;)
        $p(a, e), a = a.sibling; }
function $p(e, a) { var n = e.alternate, r = e.flags; switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
        if (ca(a, e), fa(e), r & 4) {
            try {
                oi(3, e, e.return), Os(3, e);
            }
            catch (v) {
                de(e, e.return, v);
            }
            try {
                oi(5, e, e.return);
            }
            catch (v) {
                de(e, e.return, v);
            }
        }
        break;
    case 1:
        ca(a, e), fa(e), r & 512 && n !== null && ir(n, n.return);
        break;
    case 5:
        if (ca(a, e), fa(e), r & 512 && n !== null && ir(n, n.return), e.flags & 32) {
            var i = e.stateNode;
            try {
                mi(i, "");
            }
            catch (v) {
                de(e, e.return, v);
            }
        }
        if (r & 4 && (i = e.stateNode, i != null)) {
            var t = e.memoizedProps, s = n !== null ? n.memoizedProps : t, o = e.type, l = e.updateQueue;
            if (e.updateQueue = null, l !== null)
                try {
                    o === "input" && t.type === "radio" && t.name != null && lg(i, t), il(o, s);
                    var c = il(o, t);
                    for (s = 0; s < l.length; s += 2) {
                        var d = l[s], b = l[s + 1];
                        d === "style" ? hg(i, b) : d === "dangerouslySetInnerHTML" ? dg(i, b) : d === "children" ? mi(i, b) : tu(i, d, b, c);
                    }
                    switch (o) {
                        case "input":
                            Zo(i, t);
                            break;
                        case "textarea":
                            cg(i, t);
                            break;
                        case "select":
                            var g = i._wrapperState.wasMultiple;
                            i._wrapperState.wasMultiple = !!t.multiple;
                            var k = t.value;
                            k != null ? lr(i, !!t.multiple, k, !1) : g !== !!t.multiple && (t.defaultValue != null ? lr(i, !!t.multiple, t.defaultValue, !0) : lr(i, !!t.multiple, t.multiple ? [] : "", !1));
                    }
                    i[wi] = t;
                }
                catch (v) {
                    de(e, e.return, v);
                }
        }
        break;
    case 6:
        if (ca(a, e), fa(e), r & 4) {
            if (e.stateNode === null)
                throw Error(D(162));
            i = e.stateNode, t = e.memoizedProps;
            try {
                i.nodeValue = t;
            }
            catch (v) {
                de(e, e.return, v);
            }
        }
        break;
    case 3:
        if (ca(a, e), fa(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
            try {
                fi(a.containerInfo);
            }
            catch (v) {
                de(e, e.return, v);
            }
        break;
    case 4:
        ca(a, e), fa(e);
        break;
    case 13:
        ca(a, e), fa(e), i = e.child, i.flags & 8192 && (t = i.memoizedState !== null, i.stateNode.isHidden = t, !t || i.alternate !== null && i.alternate.memoizedState !== null || (Au = pe())), r & 4 && qm(e);
        break;
    case 22:
        if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (Te = (c = Te) || d, ca(a, e), Te = c) : ca(a, e), fa(e), r & 8192) {
            if (c = e.memoizedState !== null, (e.stateNode.isHidden = c) && !d && e.mode & 1)
                for (F = e, d = e.child; d !== null;) {
                    for (b = F = d; F !== null;) {
                        switch (g = F, k = g.child, g.tag) {
                            case 0:
                            case 11:
                            case 14:
                            case 15:
                                oi(4, g, g.return);
                                break;
                            case 1:
                                ir(g, g.return);
                                var m = g.stateNode;
                                if (typeof m.componentWillUnmount == "function") {
                                    r = g, n = g.return;
                                    try {
                                        a = r, m.props = a.memoizedProps, m.state = a.memoizedState, m.componentWillUnmount();
                                    }
                                    catch (v) {
                                        de(r, n, v);
                                    }
                                }
                                break;
                            case 5:
                                ir(g, g.return);
                                break;
                            case 22: if (g.memoizedState !== null) {
                                Sm(b);
                                continue;
                            }
                        }
                        k !== null ? (k.return = g, F = k) : Sm(b);
                    }
                    d = d.sibling;
                }
            e: for (d = null, b = e;;) {
                if (b.tag === 5) {
                    if (d === null) {
                        d = b;
                        try {
                            i = b.stateNode, c ? (t = i.style, typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none") : (o = b.stateNode, l = b.memoizedProps.style, s = l != null && l.hasOwnProperty("display") ? l.display : null, o.style.display = mg("display", s));
                        }
                        catch (v) {
                            de(e, e.return, v);
                        }
                    }
                }
                else if (b.tag === 6) {
                    if (d === null)
                        try {
                            b.stateNode.nodeValue = c ? "" : b.memoizedProps;
                        }
                        catch (v) {
                            de(e, e.return, v);
                        }
                }
                else if ((b.tag !== 22 && b.tag !== 23 || b.memoizedState === null || b === e) && b.child !== null) {
                    b.child.return = b, b = b.child;
                    continue;
                }
                if (b === e)
                    break e;
                for (; b.sibling === null;) {
                    if (b.return === null || b.return === e)
                        break e;
                    d === b && (d = null), b = b.return;
                }
                d === b && (d = null), b.sibling.return = b.return, b = b.sibling;
            }
        }
        break;
    case 19:
        ca(a, e), fa(e), r & 4 && qm(e);
        break;
    case 21: break;
    default: ca(a, e), fa(e);
} }
function fa(e) { var a = e.flags; if (a & 2) {
    try {
        e: {
            for (var n = e.return; n !== null;) {
                if (Lp(n)) {
                    var r = n;
                    break e;
                }
                n = n.return;
            }
            throw Error(D(160));
        }
        switch (r.tag) {
            case 5:
                var i = r.stateNode;
                r.flags & 32 && (mi(i, ""), r.flags &= -33);
                var t = xm(e);
                Nl(e, t, i);
                break;
            case 3:
            case 4:
                var s = r.stateNode.containerInfo, o = xm(e);
                Rl(e, o, s);
                break;
            default: throw Error(D(161));
        }
    }
    catch (l) {
        de(e, e.return, l);
    }
    e.flags &= -3;
} a & 4096 && (e.flags &= -4097); }
function jv(e, a, n) { F = e, Up(e); }
function Up(e, a, n) { for (var r = (e.mode & 1) !== 0; F !== null;) {
    var i = F, t = i.child;
    if (i.tag === 22 && r) {
        var s = i.memoizedState !== null || ot;
        if (!s) {
            var o = i.alternate, l = o !== null && o.memoizedState !== null || Te;
            o = ot;
            var c = Te;
            if (ot = s, (Te = l) && !c)
                for (F = i; F !== null;)
                    s = F, l = s.child, s.tag === 22 && s.memoizedState !== null ? Om(i) : l !== null ? (l.return = s, F = l) : Om(i);
            for (; t !== null;)
                F = t, Up(t), t = t.sibling;
            F = i, ot = o, Te = c;
        }
        _m(e);
    }
    else
        i.subtreeFlags & 8772 && t !== null ? (t.return = i, F = t) : _m(e);
} }
function _m(e) { for (; F !== null;) {
    var a = F;
    if (a.flags & 8772) {
        var n = a.alternate;
        try {
            if (a.flags & 8772)
                switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                        Te || Os(5, a);
                        break;
                    case 1:
                        var r = a.stateNode;
                        if (a.flags & 4 && !Te)
                            if (n === null)
                                r.componentDidMount();
                            else {
                                var i = a.elementType === a.type ? n.memoizedProps : ua(a.type, n.memoizedProps);
                                r.componentDidUpdate(i, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                            }
                        var t = a.updateQueue;
                        t !== null && cm(a, t, r);
                        break;
                    case 3:
                        var s = a.updateQueue;
                        if (s !== null) {
                            if (n = null, a.child !== null)
                                switch (a.child.tag) {
                                    case 5:
                                        n = a.child.stateNode;
                                        break;
                                    case 1: n = a.child.stateNode;
                                }
                            cm(a, s, n);
                        }
                        break;
                    case 5:
                        var o = a.stateNode;
                        if (n === null && a.flags & 4) {
                            n = o;
                            var l = a.memoizedProps;
                            switch (a.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    l.autoFocus && n.focus();
                                    break;
                                case "img": l.src && (n.src = l.src);
                            }
                        }
                        break;
                    case 6: break;
                    case 4: break;
                    case 12: break;
                    case 13:
                        if (a.memoizedState === null) {
                            var c = a.alternate;
                            if (c !== null) {
                                var d = c.memoizedState;
                                if (d !== null) {
                                    var b = d.dehydrated;
                                    b !== null && fi(b);
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25: break;
                    default: throw Error(D(163));
                }
            Te || a.flags & 512 && Tl(a);
        }
        catch (g) {
            de(a, a.return, g);
        }
    }
    if (a === e) {
        F = null;
        break;
    }
    if (n = a.sibling, n !== null) {
        n.return = a.return, F = n;
        break;
    }
    F = a.return;
} }
function Sm(e) { for (; F !== null;) {
    var a = F;
    if (a === e) {
        F = null;
        break;
    }
    var n = a.sibling;
    if (n !== null) {
        n.return = a.return, F = n;
        break;
    }
    F = a.return;
} }
function Om(e) { for (; F !== null;) {
    var a = F;
    try {
        switch (a.tag) {
            case 0:
            case 11:
            case 15:
                var n = a.return;
                try {
                    Os(4, a);
                }
                catch (l) {
                    de(a, n, l);
                }
                break;
            case 1:
                var r = a.stateNode;
                if (typeof r.componentDidMount == "function") {
                    var i = a.return;
                    try {
                        r.componentDidMount();
                    }
                    catch (l) {
                        de(a, i, l);
                    }
                }
                var t = a.return;
                try {
                    Tl(a);
                }
                catch (l) {
                    de(a, t, l);
                }
                break;
            case 5:
                var s = a.return;
                try {
                    Tl(a);
                }
                catch (l) {
                    de(a, s, l);
                }
        }
    }
    catch (l) {
        de(a, a.return, l);
    }
    if (a === e) {
        F = null;
        break;
    }
    var o = a.sibling;
    if (o !== null) {
        o.return = a.return, F = o;
        break;
    }
    F = a.return;
} }
var zv = Math.ceil, Xt = Ma.ReactCurrentDispatcher, Du = Ma.ReactCurrentOwner, ta = Ma.ReactCurrentBatchConfig, K = 0, ze = null, be = null, Se = 0, He = 0, tr = un(0), ve = 0, Si = null, Pn = 0, Es = 0, Mu = 0, li = null, Le = null, Au = 0, wr = 1 / 0, _a = null, Jt = !1, Il = null, nn = null, lt = !1, Ga = null, Zt = 0, ci = 0, Dl = null, qt = -1, _t = 0;
function De() { return K & 6 ? pe() : qt !== -1 ? qt : qt = pe(); }
function rn(e) { return e.mode & 1 ? K & 2 && Se !== 0 ? Se & -Se : sv.transition !== null ? (_t === 0 && (_t = qg()), _t) : (e = Z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Tg(e.type)), e) : 1; }
function ga(e, a, n, r) { if (50 < ci)
    throw ci = 0, Dl = null, Error(D(185)); Ii(e, n, r), (!(K & 2) || e !== ze) && (e === ze && (!(K & 2) && (Es |= n), ve === 4 && Qa(e, Se)), Be(e, r), n === 1 && K === 0 && !(a.mode & 1) && (wr = pe() + 500, qs && dn())); }
function Be(e, a) { var n = e.callbackNode; sk(e, a); var r = Dt(e, e === ze ? Se : 0); if (r === 0)
    n !== null && Md(n), e.callbackNode = null, e.callbackPriority = 0;
else if (a = r & -r, e.callbackPriority !== a) {
    if (n != null && Md(n), a === 1)
        e.tag === 0 ? tv(Em.bind(null, e)) : Xg(Em.bind(null, e)), av(function () { !(K & 6) && dn(); }), n = null;
    else {
        switch (_g(r)) {
            case 1:
                n = uu;
                break;
            case 4:
                n = zg;
                break;
            case 16:
                n = It;
                break;
            case 536870912:
                n = xg;
                break;
            default: n = It;
        }
        n = Yp(n, Bp.bind(null, e));
    }
    e.callbackPriority = a, e.callbackNode = n;
} }
function Bp(e, a) { if (qt = -1, _t = 0, K & 6)
    throw Error(D(327)); var n = e.callbackNode; if (hr() && e.callbackNode !== n)
    return null; var r = Dt(e, e === ze ? Se : 0); if (r === 0)
    return null; if (r & 30 || r & e.expiredLanes || a)
    a = es(e, r);
else {
    a = r;
    var i = K;
    K |= 2;
    var t = Hp();
    (ze !== e || Se !== a) && (_a = null, wr = pe() + 500, qn(e, a));
    do
        try {
            _v();
            break;
        }
        catch (o) {
            Wp(e, o);
        }
    while (1);
    zu(), Xt.current = t, K = i, be !== null ? a = 0 : (ze = null, Se = 0, a = ve);
} if (a !== 0) {
    if (a === 2 && (i = cl(e), i !== 0 && (r = i, a = Ml(e, i))), a === 1)
        throw n = Si, qn(e, 0), Qa(e, r), Be(e, pe()), n;
    if (a === 6)
        Qa(e, r);
    else {
        if (i = e.current.alternate, !(r & 30) && !xv(i) && (a = es(e, r), a === 2 && (t = cl(e), t !== 0 && (r = t, a = Ml(e, t))), a === 1))
            throw n = Si, qn(e, 0), Qa(e, r), Be(e, pe()), n;
        switch (e.finishedWork = i, e.finishedLanes = r, a) {
            case 0:
            case 1: throw Error(D(345));
            case 2:
                bn(e, Le, _a);
                break;
            case 3:
                if (Qa(e, r), (r & 130023424) === r && (a = Au + 500 - pe(), 10 < a)) {
                    if (Dt(e, 0) !== 0)
                        break;
                    if (i = e.suspendedLanes, (i & r) !== r) {
                        De(), e.pingedLanes |= e.suspendedLanes & i;
                        break;
                    }
                    e.timeoutHandle = bl(bn.bind(null, e, Le, _a), a);
                    break;
                }
                bn(e, Le, _a);
                break;
            case 4:
                if (Qa(e, r), (r & 4194240) === r)
                    break;
                for (a = e.eventTimes, i = -1; 0 < r;) {
                    var s = 31 - ha(r);
                    t = 1 << s, s = a[s], s > i && (i = s), r &= ~t;
                }
                if (r = i, r = pe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * zv(r / 1960)) - r, 10 < r) {
                    e.timeoutHandle = bl(bn.bind(null, e, Le, _a), r);
                    break;
                }
                bn(e, Le, _a);
                break;
            case 5:
                bn(e, Le, _a);
                break;
            default: throw Error(D(329));
        }
    }
} return Be(e, pe()), e.callbackNode === n ? Bp.bind(null, e) : null; }
function Ml(e, a) { var n = li; return e.current.memoizedState.isDehydrated && (qn(e, a).flags |= 256), e = es(e, a), e !== 2 && (a = Le, Le = n, a !== null && Al(a)), e; }
function Al(e) { Le === null ? Le = e : Le.push.apply(Le, e); }
function xv(e) { for (var a = e;;) {
    if (a.flags & 16384) {
        var n = a.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
            for (var r = 0; r < n.length; r++) {
                var i = n[r], t = i.getSnapshot;
                i = i.value;
                try {
                    if (!pa(t(), i))
                        return !1;
                }
                catch (_q) {
                    return !1;
                }
            }
    }
    if (n = a.child, a.subtreeFlags & 16384 && n !== null)
        n.return = a, a = n;
    else {
        if (a === e)
            break;
        for (; a.sibling === null;) {
            if (a.return === null || a.return === e)
                return !0;
            a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
    }
} return !0; }
function Qa(e, a) { for (a &= ~Mu, a &= ~Es, e.suspendedLanes |= a, e.pingedLanes &= ~a, e = e.expirationTimes; 0 < a;) {
    var n = 31 - ha(a), r = 1 << n;
    e[n] = -1, a &= ~r;
} }
function Em(e) { if (K & 6)
    throw Error(D(327)); hr(); var a = Dt(e, 0); if (!(a & 1))
    return Be(e, pe()), null; var n = es(e, a); if (e.tag !== 0 && n === 2) {
    var r = cl(e);
    r !== 0 && (a = r, n = Ml(e, r));
} if (n === 1)
    throw n = Si, qn(e, 0), Qa(e, a), Be(e, pe()), n; if (n === 6)
    throw Error(D(345)); return e.finishedWork = e.current.alternate, e.finishedLanes = a, bn(e, Le, _a), Be(e, pe()), null; }
function Lu(e, a) { var n = K; K |= 1; try {
    return e(a);
}
finally {
    K = n, K === 0 && (wr = pe() + 500, qs && dn());
} }
function Cn(e) { Ga !== null && Ga.tag === 0 && !(K & 6) && hr(); var a = K; K |= 1; var n = ta.transition, r = Z; try {
    if (ta.transition = null, Z = 1, e)
        return e();
}
finally {
    Z = r, ta.transition = n, K = a, !(K & 6) && dn();
} }
function Fu() { He = tr.current, ie(tr); }
function qn(e, a) { e.finishedWork = null, e.finishedLanes = 0; var n = e.timeoutHandle; if (n !== -1 && (e.timeoutHandle = -1, ev(n)), be !== null)
    for (n = be.return; n !== null;) {
        var r = n;
        switch (vu(r), r.tag) {
            case 1:
                r = r.type.childContextTypes, r != null && $t();
                break;
            case 3:
                kr(), ie($e), ie(Re), Eu();
                break;
            case 5:
                Ou(r);
                break;
            case 4:
                kr();
                break;
            case 13:
                ie(le);
                break;
            case 19:
                ie(le);
                break;
            case 10:
                xu(r.type._context);
                break;
            case 22:
            case 23: Fu();
        }
        n = n.return;
    } if (ze = e, be = e = tn(e.current, null), Se = He = a, ve = 0, Si = null, Mu = Es = Pn = 0, Le = li = null, wn !== null) {
    for (a = 0; a < wn.length; a++)
        if (n = wn[a], r = n.interleaved, r !== null) {
            n.interleaved = null;
            var i = r.next, t = n.pending;
            if (t !== null) {
                var s = t.next;
                t.next = i, r.next = s;
            }
            n.pending = r;
        }
    wn = null;
} return e; }
function Wp(e, a) { do {
    var n = be;
    try {
        if (zu(), jt.current = Yt, Gt) {
            for (var r = ce.memoizedState; r !== null;) {
                var i = r.queue;
                i !== null && (i.pending = null), r = r.next;
            }
            Gt = !1;
        }
        if (En = 0, je = ke = ce = null, si = !1, xi = 0, Du.current = null, n === null || n.return === null) {
            ve = 1, Si = a, be = null;
            break;
        }
        e: {
            var t = e, s = n.return, o = n, l = a;
            if (a = Se, o.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
                var c = l, d = o, b = d.tag;
                if (!(d.mode & 1) && (b === 0 || b === 11 || b === 15)) {
                    var g = d.alternate;
                    g ? (d.updateQueue = g.updateQueue, d.memoizedState = g.memoizedState, d.lanes = g.lanes) : (d.updateQueue = null, d.memoizedState = null);
                }
                var k = fm(s);
                if (k !== null) {
                    k.flags &= -257, bm(k, s, o, t, a), k.mode & 1 && pm(t, c, a), a = k, l = c;
                    var m = a.updateQueue;
                    if (m === null) {
                        var v = new Set;
                        v.add(l), a.updateQueue = v;
                    }
                    else
                        m.add(l);
                    break e;
                }
                else {
                    if (!(a & 1)) {
                        pm(t, c, a), $u();
                        break e;
                    }
                    l = Error(D(426));
                }
            }
            else if (se && o.mode & 1) {
                var j = fm(s);
                if (j !== null) {
                    !(j.flags & 65536) && (j.flags |= 256), bm(j, s, o, t, a), wu(vr(l, o));
                    break e;
                }
            }
            t = l = vr(l, o), ve !== 4 && (ve = 2), li === null ? li = [t] : li.push(t), t = s;
            do {
                switch (t.tag) {
                    case 3:
                        t.flags |= 65536, a &= -a, t.lanes |= a;
                        var y = Sp(t, l, a);
                        lm(t, y);
                        break e;
                    case 1:
                        o = l;
                        var f = t.type, u = t.stateNode;
                        if (!(t.flags & 128) && (typeof f.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (nn === null || !nn.has(u)))) {
                            t.flags |= 65536, a &= -a, t.lanes |= a;
                            var p = Op(t, o, a);
                            lm(t, p);
                            break e;
                        }
                }
                t = t.return;
            } while (t !== null);
        }
        Qp(n);
    }
    catch (w) {
        a = w, be === n && n !== null && (be = n = n.return);
        continue;
    }
    break;
} while (1); }
function Hp() { var e = Xt.current; return Xt.current = Yt, e === null ? Yt : e; }
function $u() { (ve === 0 || ve === 3 || ve === 2) && (ve = 4), ze === null || !(Pn & 268435455) && !(Es & 268435455) || Qa(ze, Se); }
function es(e, a) { var n = K; K |= 2; var r = Hp(); (ze !== e || Se !== a) && (_a = null, qn(e, a)); do
    try {
        qv();
        break;
    }
    catch (i) {
        Wp(e, i);
    }
while (1); if (zu(), K = n, Xt.current = r, be !== null)
    throw Error(D(261)); return ze = null, Se = 0, ve; }
function qv() { for (; be !== null;)
    Vp(be); }
function _v() { for (; be !== null && !Xy();)
    Vp(be); }
function Vp(e) { var a = Gp(e.alternate, e, He); e.memoizedProps = e.pendingProps, a === null ? Qp(e) : be = a, Du.current = null; }
function Qp(e) { var a = e; do {
    var n = a.alternate;
    if (e = a.return, a.flags & 32768) {
        if (n = kv(n, a), n !== null) {
            n.flags &= 32767, be = n;
            return;
        }
        if (e !== null)
            e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
            ve = 6, be = null;
            return;
        }
    }
    else if (n = yv(n, a, He), n !== null) {
        be = n;
        return;
    }
    if (a = a.sibling, a !== null) {
        be = a;
        return;
    }
    be = a = e;
} while (a !== null); ve === 0 && (ve = 5); }
function bn(e, a, n) { var r = Z, i = ta.transition; try {
    ta.transition = null, Z = 1, Sv(e, a, n, r);
}
finally {
    ta.transition = i, Z = r;
} return null; }
function Sv(e, a, n, r) { do
    hr();
while (Ga !== null); if (K & 6)
    throw Error(D(327)); n = e.finishedWork; var i = e.finishedLanes; if (n === null)
    return null; if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
    throw Error(D(177)); e.callbackNode = null, e.callbackPriority = 0; var t = n.lanes | n.childLanes; if (ok(e, t), e === ze && (be = ze = null, Se = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || lt || (lt = !0, Yp(It, function () { return hr(), null; })), t = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || t) {
    t = ta.transition, ta.transition = null;
    var s = Z;
    Z = 1;
    var o = K;
    K |= 4, Du.current = null, wv(e, n), $p(n, e), Qk(pl), Mt = !!gl, pl = gl = null, e.current = n, jv(n), Jy(), K = o, Z = s, ta.transition = t;
}
else
    e.current = n; if (lt && (lt = !1, Ga = e, Zt = i), t = e.pendingLanes, t === 0 && (nn = null), ak(n.stateNode), Be(e, pe()), a !== null)
    for (r = e.onRecoverableError, n = 0; n < a.length; n++)
        i = a[n], r(i.value, { componentStack: i.stack, digest: i.digest }); if (Jt)
    throw Jt = !1, e = Il, Il = null, e; return Zt & 1 && e.tag !== 0 && hr(), t = e.pendingLanes, t & 1 ? e === Dl ? ci++ : (ci = 0, Dl = e) : ci = 0, dn(), null; }
function hr() { if (Ga !== null) {
    var e = _g(Zt), a = ta.transition, n = Z;
    try {
        if (ta.transition = null, Z = 16 > e ? 16 : e, Ga === null)
            var r = !1;
        else {
            if (e = Ga, Ga = null, Zt = 0, K & 6)
                throw Error(D(331));
            var i = K;
            for (K |= 4, F = e.current; F !== null;) {
                var t = F, s = t.child;
                if (F.flags & 16) {
                    var o = t.deletions;
                    if (o !== null) {
                        for (var l = 0; l < o.length; l++) {
                            var c = o[l];
                            for (F = c; F !== null;) {
                                var d = F;
                                switch (d.tag) {
                                    case 0:
                                    case 11:
                                    case 15: oi(8, d, t);
                                }
                                var b = d.child;
                                if (b !== null)
                                    b.return = d, F = b;
                                else
                                    for (; F !== null;) {
                                        d = F;
                                        var g = d.sibling, k = d.return;
                                        if (Ap(d), d === c) {
                                            F = null;
                                            break;
                                        }
                                        if (g !== null) {
                                            g.return = k, F = g;
                                            break;
                                        }
                                        F = k;
                                    }
                            }
                        }
                        var m = t.alternate;
                        if (m !== null) {
                            var v = m.child;
                            if (v !== null) {
                                m.child = null;
                                do {
                                    var j = v.sibling;
                                    v.sibling = null, v = j;
                                } while (v !== null);
                            }
                        }
                        F = t;
                    }
                }
                if (t.subtreeFlags & 2064 && s !== null)
                    s.return = t, F = s;
                else
                    e: for (; F !== null;) {
                        if (t = F, t.flags & 2048)
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15: oi(9, t, t.return);
                            }
                        var y = t.sibling;
                        if (y !== null) {
                            y.return = t.return, F = y;
                            break e;
                        }
                        F = t.return;
                    }
            }
            var f = e.current;
            for (F = f; F !== null;) {
                s = F;
                var u = s.child;
                if (s.subtreeFlags & 2064 && u !== null)
                    u.return = s, F = u;
                else
                    e: for (s = f; F !== null;) {
                        if (o = F, o.flags & 2048)
                            try {
                                switch (o.tag) {
                                    case 0:
                                    case 11:
                                    case 15: Os(9, o);
                                }
                            }
                            catch (w) {
                                de(o, o.return, w);
                            }
                        if (o === s) {
                            F = null;
                            break e;
                        }
                        var p = o.sibling;
                        if (p !== null) {
                            p.return = o.return, F = p;
                            break e;
                        }
                        F = o.return;
                    }
            }
            if (K = i, dn(), va && typeof va.onPostCommitFiberRoot == "function")
                try {
                    va.onPostCommitFiberRoot(vs, e);
                }
                catch (_q) { }
            r = !0;
        }
        return r;
    }
    finally {
        Z = n, ta.transition = a;
    }
} return !1; }
function Pm(e, a, n) { a = vr(n, a), a = Sp(e, a, 1), e = an(e, a, 1), a = De(), e !== null && (Ii(e, 1, a), Be(e, a)); }
function de(e, a, n) { if (e.tag === 3)
    Pm(e, e, n);
else
    for (; a !== null;) {
        if (a.tag === 3) {
            Pm(a, e, n);
            break;
        }
        else if (a.tag === 1) {
            var r = a.stateNode;
            if (typeof a.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (nn === null || !nn.has(r))) {
                e = vr(n, e), e = Op(a, e, 1), a = an(a, e, 1), e = De(), a !== null && (Ii(a, 1, e), Be(a, e));
                break;
            }
        }
        a = a.return;
    } }
function Ov(e, a, n) { var r = e.pingCache; r !== null && r.delete(a), a = De(), e.pingedLanes |= e.suspendedLanes & n, ze === e && (Se & n) === n && (ve === 4 || ve === 3 && (Se & 130023424) === Se && 500 > pe() - Au ? qn(e, 0) : Mu |= n), Be(e, a); }
function Kp(e, a) { a === 0 && (e.mode & 1 ? (a = Ji, Ji <<= 1, !(Ji & 130023424) && (Ji = 4194304)) : a = 1); var n = De(); e = Na(e, a), e !== null && (Ii(e, a, n), Be(e, n)); }
function Ev(e) { var a = e.memoizedState, n = 0; a !== null && (n = a.retryLane), Kp(e, n); }
function Pv(e, a) { var n = 0; switch (e.tag) {
    case 13:
        var r = e.stateNode, i = e.memoizedState;
        i !== null && (n = i.retryLane);
        break;
    case 19:
        r = e.stateNode;
        break;
    default: throw Error(D(314));
} r !== null && r.delete(a), Kp(e, n); }
var Gp;
Gp = function (e, a, n) { if (e !== null)
    if (e.memoizedProps !== a.pendingProps || $e.current)
        Fe = !0;
    else {
        if (!(e.lanes & n) && !(a.flags & 128))
            return Fe = !1, bv(e, a, n);
        Fe = !!(e.flags & 131072);
    }
else
    Fe = !1, se && a.flags & 1048576 && Jg(a, Wt, a.index); switch (a.lanes = 0, a.tag) {
    case 2:
        var r = a.type;
        xt(e, a), e = a.pendingProps;
        var i = fr(a, Re.current);
        mr(a, n), i = Cu(null, a, r, e, i, n);
        var t = Tu();
        return a.flags |= 1, typeof i == "object" && i !== null && typeof i.render == "function" && i.$$typeof === void 0 ? (a.tag = 1, a.memoizedState = null, a.updateQueue = null, Ue(r) ? (t = !0, Ut(a)) : t = !1, a.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, _u(a), i.updater = _s, a.stateNode = i, i._reactInternals = a, xl(a, r, e, n), a = Sl(null, a, r, !0, t, n)) : (a.tag = 0, se && t && ku(a), Ne(null, a, i, n), a = a.child), a;
    case 16:
        r = a.elementType;
        e: {
            switch (xt(e, a), e = a.pendingProps, i = r._init, r = i(r._payload), a.type = r, i = a.tag = Tv(r), e = ua(r, e), i) {
                case 0:
                    a = _l(null, a, r, e, n);
                    break e;
                case 1:
                    a = vm(null, a, r, e, n);
                    break e;
                case 11:
                    a = ym(null, a, r, e, n);
                    break e;
                case 14:
                    a = km(null, a, r, ua(r.type, e), n);
                    break e;
            }
            throw Error(D(306, r, ""));
        }
        return a;
    case 0: return r = a.type, i = a.pendingProps, i = a.elementType === r ? i : ua(r, i), _l(e, a, r, i, n);
    case 1: return r = a.type, i = a.pendingProps, i = a.elementType === r ? i : ua(r, i), vm(e, a, r, i, n);
    case 3:
        e: {
            if (Tp(a), e === null)
                throw Error(D(387));
            r = a.pendingProps, t = a.memoizedState, i = t.element, np(e, a), Qt(a, r, null, n);
            var s = a.memoizedState;
            if (r = s.element, t.isDehydrated)
                if (t = { element: r, isDehydrated: !1, cache: s.cache, pendingSuspenseBoundaries: s.pendingSuspenseBoundaries, transitions: s.transitions }, a.updateQueue.baseState = t, a.memoizedState = t, a.flags & 256) {
                    i = vr(Error(D(423)), a), a = wm(e, a, r, n, i);
                    break e;
                }
                else if (r !== i) {
                    i = vr(Error(D(424)), a), a = wm(e, a, r, n, i);
                    break e;
                }
                else
                    for (Qe = en(a.stateNode.containerInfo.firstChild), Ke = a, se = !0, ma = null, n = sp(a, null, r, n), a.child = n; n;)
                        n.flags = n.flags & -3 | 4096, n = n.sibling;
            else {
                if (br(), r === i) {
                    a = Ia(e, a, n);
                    break e;
                }
                Ne(e, a, r, n);
            }
            a = a.child;
        }
        return a;
    case 5: return op(a), e === null && wl(a), r = a.type, i = a.pendingProps, t = e !== null ? e.memoizedProps : null, s = i.children, fl(r, i) ? s = null : t !== null && fl(r, t) && (a.flags |= 32), Cp(e, a), Ne(e, a, s, n), a.child;
    case 6: return e === null && wl(a), null;
    case 13: return Rp(e, a, n);
    case 4: return Su(a, a.stateNode.containerInfo), r = a.pendingProps, e === null ? a.child = yr(a, null, r, n) : Ne(e, a, r, n), a.child;
    case 11: return r = a.type, i = a.pendingProps, i = a.elementType === r ? i : ua(r, i), ym(e, a, r, i, n);
    case 7: return Ne(e, a, a.pendingProps, n), a.child;
    case 8: return Ne(e, a, a.pendingProps.children, n), a.child;
    case 12: return Ne(e, a, a.pendingProps.children, n), a.child;
    case 10:
        e: {
            if (r = a.type._context, i = a.pendingProps, t = a.memoizedProps, s = i.value, ne(Ht, r._currentValue), r._currentValue = s, t !== null)
                if (pa(t.value, s)) {
                    if (t.children === i.children && !$e.current) {
                        a = Ia(e, a, n);
                        break e;
                    }
                }
                else
                    for (t = a.child, t !== null && (t.return = a); t !== null;) {
                        var o = t.dependencies;
                        if (o !== null) {
                            s = t.child;
                            for (var l = o.firstContext; l !== null;) {
                                if (l.context === r) {
                                    if (t.tag === 1) {
                                        l = Pa(-1, n & -n), l.tag = 2;
                                        var c = t.updateQueue;
                                        if (c !== null) {
                                            c = c.shared;
                                            var d = c.pending;
                                            d === null ? l.next = l : (l.next = d.next, d.next = l), c.pending = l;
                                        }
                                    }
                                    t.lanes |= n, l = t.alternate, l !== null && (l.lanes |= n), jl(t.return, n, a), o.lanes |= n;
                                    break;
                                }
                                l = l.next;
                            }
                        }
                        else if (t.tag === 10)
                            s = t.type === a.type ? null : t.child;
                        else if (t.tag === 18) {
                            if (s = t.return, s === null)
                                throw Error(D(341));
                            s.lanes |= n, o = s.alternate, o !== null && (o.lanes |= n), jl(s, n, a), s = t.sibling;
                        }
                        else
                            s = t.child;
                        if (s !== null)
                            s.return = t;
                        else
                            for (s = t; s !== null;) {
                                if (s === a) {
                                    s = null;
                                    break;
                                }
                                if (t = s.sibling, t !== null) {
                                    t.return = s.return, s = t;
                                    break;
                                }
                                s = s.return;
                            }
                        t = s;
                    }
            Ne(e, a, i.children, n), a = a.child;
        }
        return a;
    case 9: return i = a.type, r = a.pendingProps.children, mr(a, n), i = oa(i), r = r(i), a.flags |= 1, Ne(e, a, r, n), a.child;
    case 14: return r = a.type, i = ua(r, a.pendingProps), i = ua(r.type, i), km(e, a, r, i, n);
    case 15: return Ep(e, a, a.type, a.pendingProps, n);
    case 17: return r = a.type, i = a.pendingProps, i = a.elementType === r ? i : ua(r, i), xt(e, a), a.tag = 1, Ue(r) ? (e = !0, Ut(a)) : e = !1, mr(a, n), ip(a, r, i), xl(a, r, i, n), Sl(null, a, r, !0, e, n);
    case 19: return Np(e, a, n);
    case 22: return Pp(e, a, n);
} throw Error(D(156, a.tag)); };
function Yp(e, a) { return jg(e, a); }
function Cv(e, a, n, r) { this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = a, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null; }
function ra(e, a, n, r) { return new Cv(e, a, n, r); }
function Uu(e) { return e = e.prototype, !(!e || !e.isReactComponent); }
function Tv(e) { if (typeof e == "function")
    return Uu(e) ? 1 : 0; if (e != null) {
    if (e = e.$$typeof, e === ou)
        return 11;
    if (e === lu)
        return 14;
} return 2; }
function tn(e, a) { var n = e.alternate; return n === null ? (n = ra(e.tag, a, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = a, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, a = e.dependencies, n.dependencies = a === null ? null : { lanes: a.lanes, firstContext: a.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n; }
function St(e, a, n, r, i, t) { var s = 2; if (r = e, typeof e == "function")
    Uu(e) && (s = 1);
else if (typeof e == "string")
    s = 5;
else
    e: switch (e) {
        case Gn: return _n(n.children, i, t, a);
        case su:
            s = 8, i |= 8;
            break;
        case Ko: return e = ra(12, n, a, i | 2), e.elementType = Ko, e.lanes = t, e;
        case Go: return e = ra(13, n, a, i), e.elementType = Go, e.lanes = t, e;
        case Yo: return e = ra(19, n, a, i), e.elementType = Yo, e.lanes = t, e;
        case tg: return Ps(n, i, t, a);
        default:
            if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                    case rg:
                        s = 10;
                        break e;
                    case ig:
                        s = 9;
                        break e;
                    case ou:
                        s = 11;
                        break e;
                    case lu:
                        s = 14;
                        break e;
                    case Ba:
                        s = 16, r = null;
                        break e;
                }
            throw Error(D(130, e == null ? e : typeof e, ""));
    } return a = ra(s, n, a, i), a.elementType = e, a.type = r, a.lanes = t, a; }
function _n(e, a, n, r) { return e = ra(7, e, r, a), e.lanes = n, e; }
function Ps(e, a, n, r) { return e = ra(22, e, r, a), e.elementType = tg, e.lanes = n, e.stateNode = { isHidden: !1 }, e; }
function Eo(e, a, n) { return e = ra(6, e, null, a), e.lanes = n, e; }
function Po(e, a, n) { return a = ra(4, e.children !== null ? e.children : [], e.key, a), a.lanes = n, a.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, a; }
function Rv(e, a, n, r, i) { this.tag = a, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = co(0), this.expirationTimes = co(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = co(0), this.identifierPrefix = r, this.onRecoverableError = i, this.mutableSourceEagerHydrationData = null; }
function Bu(e, a, n, r, i, t, s, o, l) { return e = new Rv(e, a, n, o, l), a === 1 ? (a = 1, t === !0 && (a |= 8)) : a = 0, t = ra(3, null, null, a), e.current = t, t.stateNode = e, t.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, _u(t), e; }
function Nv(e, a, n) { var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null; return { $$typeof: Kn, key: r == null ? null : "" + r, children: e, containerInfo: a, implementation: n }; }
function Xp(e) { if (!e)
    return ln; e = e._reactInternals; e: {
    if (Rn(e) !== e || e.tag !== 1)
        throw Error(D(170));
    var a = e;
    do {
        switch (a.tag) {
            case 3:
                a = a.stateNode.context;
                break e;
            case 1: if (Ue(a.type)) {
                a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                break e;
            }
        }
        a = a.return;
    } while (a !== null);
    throw Error(D(171));
} if (e.tag === 1) {
    var n = e.type;
    if (Ue(n))
        return Yg(e, n, a);
} return a; }
function Jp(e, a, n, r, i, t, s, o, l) { return e = Bu(n, r, !0, e, i, t, s, o, l), e.context = Xp(null), n = e.current, r = De(), i = rn(n), t = Pa(r, i), t.callback = a !== null && a !== void 0 ? a : null, an(n, t, i), e.current.lanes = i, Ii(e, i, r), Be(e, r), e; }
function Cs(e, a, n, r) { var i = a.current, t = De(), s = rn(i); return n = Xp(n), a.context === null ? a.context = n : a.pendingContext = n, a = Pa(t, s), a.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (a.callback = r), e = an(i, a, s), e !== null && (ga(e, i, s, t), wt(e, i, s)), s; }
function as(e) { if (e = e.current, !e.child)
    return null; switch (e.child.tag) {
    case 5: return e.child.stateNode;
    default: return e.child.stateNode;
} }
function Cm(e, a) { if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < a ? n : a;
} }
function Wu(e, a) { Cm(e, a), (e = e.alternate) && Cm(e, a); }
function Iv() { return null; }
var Zp = typeof reportError == "function" ? reportError : function (e) { console.error(e); };
function Hu(e) { this._internalRoot = e; }
Ts.prototype.render = Hu.prototype.render = function (e) { var a = this._internalRoot; if (a === null)
    throw Error(D(409)); Cs(e, a, null, null); };
Ts.prototype.unmount = Hu.prototype.unmount = function () { var e = this._internalRoot; if (e !== null) {
    this._internalRoot = null;
    var a = e.containerInfo;
    Cn(function () { Cs(null, e, null, null); }), a[Ra] = null;
} };
function Ts(e) { this._internalRoot = e; }
Ts.prototype.unstable_scheduleHydration = function (e) { if (e) {
    var a = Eg();
    e = { blockedOn: null, target: e, priority: a };
    for (var n = 0; n < Va.length && a !== 0 && a < Va[n].priority; n++)
        ;
    Va.splice(n, 0, e), n === 0 && Cg(e);
} };
function Vu(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11); }
function Rs(e) { return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable ")); }
function Tm() { }
function Dv(e, a, n, r, i) { if (i) {
    if (typeof r == "function") {
        var t = r;
        r = function () { var c = as(s); t.call(c); };
    }
    var s = Jp(a, r, e, 0, null, !1, !1, "", Tm);
    return e._reactRootContainer = s, e[Ra] = s.current, ki(e.nodeType === 8 ? e.parentNode : e), Cn(), s;
} for (; i = e.lastChild;)
    e.removeChild(i); if (typeof r == "function") {
    var o = r;
    r = function () { var c = as(l); o.call(c); };
} var l = Bu(e, 0, !1, null, null, !1, !1, "", Tm); return e._reactRootContainer = l, e[Ra] = l.current, ki(e.nodeType === 8 ? e.parentNode : e), Cn(function () { Cs(a, l, n, r); }), l; }
function Ns(e, a, n, r, i) { var t = n._reactRootContainer; if (t) {
    var s = t;
    if (typeof i == "function") {
        var o = i;
        i = function () { var l = as(s); o.call(l); };
    }
    Cs(a, s, e, i);
}
else
    s = Dv(n, a, e, i, r); return as(s); }
Sg = function (e) { switch (e.tag) {
    case 3:
        var a = e.stateNode;
        if (a.current.memoizedState.isDehydrated) {
            var n = Kr(a.pendingLanes);
            n !== 0 && (du(a, n | 1), Be(a, pe()), !(K & 6) && (wr = pe() + 500, dn()));
        }
        break;
    case 13: Cn(function () { var r = Na(e, 1); if (r !== null) {
        var i = De();
        ga(r, e, 1, i);
    } }), Wu(e, 1);
} };
mu = function (e) { if (e.tag === 13) {
    var a = Na(e, 134217728);
    if (a !== null) {
        var n = De();
        ga(a, e, 134217728, n);
    }
    Wu(e, 134217728);
} };
Og = function (e) { if (e.tag === 13) {
    var a = rn(e), n = Na(e, a);
    if (n !== null) {
        var r = De();
        ga(n, e, a, r);
    }
    Wu(e, a);
} };
Eg = function () { return Z; };
Pg = function (e, a) { var n = Z; try {
    return Z = e, a();
}
finally {
    Z = n;
} };
sl = function (e, a, n) { switch (a) {
    case "input":
        if (Zo(e, n), a = n.name, n.type === "radio" && a != null) {
            for (n = e; n.parentNode;)
                n = n.parentNode;
            for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), a = 0; a < n.length; a++) {
                var r = n[a];
                if (r !== e && r.form === e.form) {
                    var i = xs(r);
                    if (!i)
                        throw Error(D(90));
                    og(r), Zo(r, i);
                }
            }
        }
        break;
    case "textarea":
        cg(e, n);
        break;
    case "select": a = n.value, a != null && lr(e, !!n.multiple, a, !1);
} };
fg = Lu;
bg = Cn;
var Mv = { usingClientEntryPoint: !1, Events: [Mi, Zn, xs, gg, pg, Lu] }, Br = { findFiberByHostInstance: vn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Av = { bundleType: Br.bundleType, version: Br.version, rendererPackageName: Br.rendererPackageName, rendererConfig: Br.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Ma.ReactCurrentDispatcher, findHostInstanceByFiber: function (e) { return e = vg(e), e === null ? null : e.stateNode; }, findFiberByHostInstance: Br.findFiberByHostInstance || Iv, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var ct = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!ct.isDisabled && ct.supportsFiber)
        try {
            vs = ct.inject(Av), va = ct;
        }
        catch (_5) { }
}
Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Mv;
Ye.createPortal = function (e, a) { var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null; if (!Vu(a))
    throw Error(D(200)); return Nv(e, a, null, n); };
Ye.createRoot = function (e, a) { if (!Vu(e))
    throw Error(D(299)); var n = !1, r = "", i = Zp; return a != null && (a.unstable_strictMode === !0 && (n = !0), a.identifierPrefix !== void 0 && (r = a.identifierPrefix), a.onRecoverableError !== void 0 && (i = a.onRecoverableError)), a = Bu(e, 1, !1, null, null, n, !1, r, i), e[Ra] = a.current, ki(e.nodeType === 8 ? e.parentNode : e), new Hu(a); };
Ye.findDOMNode = function (e) { if (e == null)
    return null; if (e.nodeType === 1)
    return e; var a = e._reactInternals; if (a === void 0)
    throw typeof e.render == "function" ? Error(D(188)) : (e = Object.keys(e).join(","), Error(D(268, e))); return e = vg(a), e = e === null ? null : e.stateNode, e; };
Ye.flushSync = function (e) { return Cn(e); };
Ye.hydrate = function (e, a, n) { if (!Rs(a))
    throw Error(D(200)); return Ns(null, e, a, !0, n); };
Ye.hydrateRoot = function (e, a, n) { if (!Vu(e))
    throw Error(D(405)); var r = n != null && n.hydratedSources || null, i = !1, t = "", s = Zp; if (n != null && (n.unstable_strictMode === !0 && (i = !0), n.identifierPrefix !== void 0 && (t = n.identifierPrefix), n.onRecoverableError !== void 0 && (s = n.onRecoverableError)), a = Jp(a, null, e, 1, n !== null && n !== void 0 ? n : null, i, !1, t, s), e[Ra] = a.current, ki(e), r)
    for (e = 0; e < r.length; e++)
        n = r[e], i = n._getVersion, i = i(n._source), a.mutableSourceEagerHydrationData == null ? a.mutableSourceEagerHydrationData = [n, i] : a.mutableSourceEagerHydrationData.push(n, i); return new Ts(a); };
Ye.render = function (e, a, n) { if (!Rs(a))
    throw Error(D(200)); return Ns(null, e, a, !1, n); };
Ye.unmountComponentAtNode = function (e) { if (!Rs(e))
    throw Error(D(40)); return e._reactRootContainer ? (Cn(function () { Ns(null, null, e, !1, function () { e._reactRootContainer = null, e[Ra] = null; }); }), !0) : !1; };
Ye.unstable_batchedUpdates = Lu;
Ye.unstable_renderSubtreeIntoContainer = function (e, a, n, r) { if (!Rs(n))
    throw Error(D(200)); if (e == null || e._reactInternals === void 0)
    throw Error(D(38)); return Ns(e, a, n, !1, r); };
Ye.version = "18.2.0-next-9e3b772b8-20220608";
function ef() { if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ef);
    }
    catch (e) {
        console.error(e);
    } }
ef(), Jh.exports = Ye;
var af = Jh.exports;
const Yr = xr(af);
var Rm = af;
Vo.createRoot = Rm.createRoot, Vo.hydrateRoot = Rm.hydrateRoot;
class Or {
    constructor() { this.listeners = new Set, this.subscribe = this.subscribe.bind(this); }
    subscribe(a) { const n = { listener: a }; return this.listeners.add(n), this.onSubscribe(), () => { this.listeners.delete(n), this.onUnsubscribe(); }; }
    hasListeners() { return this.listeners.size > 0; }
    onSubscribe() { }
    onUnsubscribe() { }
}
const Oi = typeof window > "u" || "Deno" in window;
function ea() { }
function Lv(e, a) { return typeof e == "function" ? e(a) : e; }
function Ll(e) { return typeof e == "number" && e >= 0 && e !== 1 / 0; }
function nf(e, a) { return Math.max(e + (a || 0) - Date.now(), 0); }
function Xr(e, a, n) { return Li(e) ? typeof a == "function" ? Object.assign(Object.assign({}, n), { queryKey: e, queryFn: a }) : Object.assign(Object.assign({}, a), { queryKey: e }) : e; }
function Fv(e, a, n) { return Li(e) ? typeof a == "function" ? Object.assign(Object.assign({}, n), { mutationKey: e, mutationFn: a }) : Object.assign(Object.assign({}, a), { mutationKey: e }) : typeof e == "function" ? Object.assign(Object.assign({}, a), { mutationFn: e }) : Object.assign({}, e); }
function Ha(e, a, n) { return Li(e) ? [Object.assign(Object.assign({}, a), { queryKey: e }), n] : [e || {}, a]; }
function Nm(e, a) { const { type: n = "all", exact: r, fetchStatus: i, predicate: t, queryKey: s, stale: o } = e; if (Li(s)) {
    if (r) {
        if (a.queryHash !== Qu(s, a.options))
            return !1;
    }
    else if (!ns(a.queryKey, s))
        return !1;
} if (n !== "all") {
    const l = a.isActive();
    if (n === "active" && !l || n === "inactive" && l)
        return !1;
} return !(typeof o == "boolean" && a.isStale() !== o || typeof i < "u" && i !== a.state.fetchStatus || t && !t(a)); }
function Im(e, a) { const { exact: n, fetching: r, predicate: i, mutationKey: t } = e; if (Li(t)) {
    if (!a.options.mutationKey)
        return !1;
    if (n) {
        if (zn(a.options.mutationKey) !== zn(t))
            return !1;
    }
    else if (!ns(a.options.mutationKey, t))
        return !1;
} return !(typeof r == "boolean" && a.state.status === "loading" !== r || i && !i(a)); }
function Qu(e, a) { return ((a == null ? void 0 : a.queryKeyHashFn) || zn)(e); }
function zn(e) { return JSON.stringify(e, (a, n) => Fl(n) ? Object.keys(n).sort().reduce((r, i) => (r[i] = n[i], r), {}) : n); }
function ns(e, a) { return rf(e, a); }
function rf(e, a) { return e === a ? !0 : typeof e != typeof a ? !1 : e && a && typeof e == "object" && typeof a == "object" ? !Object.keys(a).some(n => !rf(e[n], a[n])) : !1; }
function tf(e, a) { if (e === a)
    return e; const n = Dm(e) && Dm(a); if (n || Fl(e) && Fl(a)) {
    const r = n ? e.length : Object.keys(e).length, i = n ? a : Object.keys(a), t = i.length, s = n ? [] : {};
    let o = 0;
    for (let l = 0; l < t; l++) {
        const c = n ? l : i[l];
        s[c] = tf(e[c], a[c]), s[c] === e[c] && o++;
    }
    return r === t && o === r ? e : s;
} return a; }
function rs(e, a) { if (e && !a || a && !e)
    return !1; for (const n in e)
    if (e[n] !== a[n])
        return !1; return !0; }
function Dm(e) { return Array.isArray(e) && e.length === Object.keys(e).length; }
function Fl(e) { if (!Mm(e))
    return !1; const a = e.constructor; if (typeof a > "u")
    return !0; const n = a.prototype; return !(!Mm(n) || !n.hasOwnProperty("isPrototypeOf")); }
function Mm(e) { return Object.prototype.toString.call(e) === "[object Object]"; }
function Li(e) { return Array.isArray(e); }
function sf(e) { return new Promise(a => { setTimeout(a, e); }); }
function Am(e) { sf(0).then(e); }
function $v() { if (typeof AbortController == "function")
    return new AbortController; }
function $l(e, a, n) { return n.isDataEqual != null && n.isDataEqual(e, a) ? e : typeof n.structuralSharing == "function" ? n.structuralSharing(e, a) : n.structuralSharing !== !1 ? tf(e, a) : a; }
class Uv extends Or {
    constructor() { super(), this.setup = a => { if (!Oi && window.addEventListener) {
        const n = () => a();
        return window.addEventListener("visibilitychange", n, !1), window.addEventListener("focus", n, !1), () => { window.removeEventListener("visibilitychange", n), window.removeEventListener("focus", n); };
    } }; }
    onSubscribe() { this.cleanup || this.setEventListener(this.setup); }
    onUnsubscribe() { if (!this.hasListeners()) {
        var a;
        (a = this.cleanup) == null || a.call(this), this.cleanup = void 0;
    } }
    setEventListener(a) { var n; this.setup = a, (n = this.cleanup) == null || n.call(this), this.cleanup = a(r => { typeof r == "boolean" ? this.setFocused(r) : this.onFocus(); }); }
    setFocused(a) { this.focused !== a && (this.focused = a, this.onFocus()); }
    onFocus() { this.listeners.forEach(({ listener: a }) => { a(); }); }
    isFocused() { return typeof this.focused == "boolean" ? this.focused : typeof document > "u" ? !0 : [void 0, "visible", "prerender"].includes(document.visibilityState); }
}
const is = new Uv, Lm = ["online", "offline"];
class Bv extends Or {
    constructor() { super(), this.setup = a => { if (!Oi && window.addEventListener) {
        const n = () => a();
        return Lm.forEach(r => { window.addEventListener(r, n, !1); }), () => { Lm.forEach(r => { window.removeEventListener(r, n); }); };
    } }; }
    onSubscribe() { this.cleanup || this.setEventListener(this.setup); }
    onUnsubscribe() { if (!this.hasListeners()) {
        var a;
        (a = this.cleanup) == null || a.call(this), this.cleanup = void 0;
    } }
    setEventListener(a) { var n; this.setup = a, (n = this.cleanup) == null || n.call(this), this.cleanup = a(r => { typeof r == "boolean" ? this.setOnline(r) : this.onOnline(); }); }
    setOnline(a) { this.online !== a && (this.online = a, this.onOnline()); }
    onOnline() { this.listeners.forEach(({ listener: a }) => { a(); }); }
    isOnline() { return typeof this.online == "boolean" ? this.online : typeof navigator > "u" || typeof navigator.onLine > "u" ? !0 : navigator.onLine; }
}
const ts = new Bv;
function Wv(e) { return Math.min(1e3 * 2 ** e, 3e4); }
function Is(e) { return (e !== null && e !== void 0 ? e : "online") === "online" ? ts.isOnline() : !0; }
class of {
    constructor(a) { this.revert = a == null ? void 0 : a.revert, this.silent = a == null ? void 0 : a.silent; }
}
function Ot(e) { return e instanceof of; }
function lf(e) { let a = !1, n = 0, r = !1, i, t, s; const o = new Promise((j, y) => { t = j, s = y; }), l = j => { r || (k(new of(j)), e.abort == null || e.abort()); }, c = () => { a = !0; }, d = () => { a = !1; }, b = () => !is.isFocused() || e.networkMode !== "always" && !ts.isOnline(), g = j => { r || (r = !0, e.onSuccess == null || e.onSuccess(j), i == null || i(), t(j)); }, k = j => { r || (r = !0, e.onError == null || e.onError(j), i == null || i(), s(j)); }, m = () => new Promise(j => { i = y => { const f = r || !b(); return f && j(y), f; }, e.onPause == null || e.onPause(); }).then(() => { i = void 0, r || e.onContinue == null || e.onContinue(); }), v = () => { if (r)
    return; let j; try {
    j = e.fn();
}
catch (y) {
    j = Promise.reject(y);
} Promise.resolve(j).then(g).catch(y => { var f, u; if (r)
    return; const p = (f = e.retry) != null ? f : 3, w = (u = e.retryDelay) != null ? u : Wv, z = typeof w == "function" ? w(n, y) : w, q = p === !0 || typeof p == "number" && n < p || typeof p == "function" && p(n, y); if (a || !q) {
    k(y);
    return;
} n++, e.onFail == null || e.onFail(n, y), sf(z).then(() => { if (b())
    return m(); }).then(() => { a ? k(y) : v(); }); }); }; return Is(e.networkMode) ? v() : m().then(v), { promise: o, cancel: l, continue: () => (i == null ? void 0 : i()) ? o : Promise.resolve(), cancelRetry: c, continueRetry: d }; }
const Ku = console;
function Hv() { let e = [], a = 0, n = d => { d(); }, r = d => { d(); }; const i = d => { let b; a++; try {
    b = d();
}
finally {
    a--, a || o();
} return b; }, t = d => { a ? e.push(d) : Am(() => { n(d); }); }, s = d => (...b) => { t(() => { d(...b); }); }, o = () => { const d = e; e = [], d.length && Am(() => { r(() => { d.forEach(b => { n(b); }); }); }); }; return { batch: i, batchCalls: s, schedule: t, setNotifyFunction: d => { n = d; }, setBatchNotifyFunction: d => { r = d; } }; }
const he = Hv();
class cf {
    destroy() { this.clearGcTimeout(); }
    scheduleGc() { this.clearGcTimeout(), Ll(this.cacheTime) && (this.gcTimeout = setTimeout(() => { this.optionalRemove(); }, this.cacheTime)); }
    updateCacheTime(a) { this.cacheTime = Math.max(this.cacheTime || 0, a !== null && a !== void 0 ? a : (Oi ? 1 / 0 : 5 * 60 * 1e3)); }
    clearGcTimeout() { this.gcTimeout && (clearTimeout(this.gcTimeout), this.gcTimeout = void 0); }
}
class Vv extends cf {
    constructor(a) { super(), this.abortSignalConsumed = !1, this.defaultOptions = a.defaultOptions, this.setOptions(a.options), this.observers = [], this.cache = a.cache, this.logger = a.logger || Ku, this.queryKey = a.queryKey, this.queryHash = a.queryHash, this.initialState = a.state || Qv(this.options), this.state = this.initialState, this.scheduleGc(); }
    get meta() { return this.options.meta; }
    setOptions(a) { this.options = Object.assign(Object.assign({}, this.defaultOptions), a), this.updateCacheTime(this.options.cacheTime); }
    optionalRemove() { !this.observers.length && this.state.fetchStatus === "idle" && this.cache.remove(this); }
    setData(a, n) { const r = $l(this.state.data, a, this.options); return this.dispatch({ data: r, type: "success", dataUpdatedAt: n == null ? void 0 : n.updatedAt, manual: n == null ? void 0 : n.manual }), r; }
    setState(a, n) { this.dispatch({ type: "setState", state: a, setStateOptions: n }); }
    cancel(a) { var n; const r = this.promise; return (n = this.retryer) == null || n.cancel(a), r ? r.then(ea).catch(ea) : Promise.resolve(); }
    destroy() { super.destroy(), this.cancel({ silent: !0 }); }
    reset() { this.destroy(), this.setState(this.initialState); }
    isActive() { return this.observers.some(a => a.options.enabled !== !1); }
    isDisabled() { return this.getObserversCount() > 0 && !this.isActive(); }
    isStale() { return this.state.isInvalidated || !this.state.dataUpdatedAt || this.observers.some(a => a.getCurrentResult().isStale); }
    isStaleByTime(a = 0) { return this.state.isInvalidated || !this.state.dataUpdatedAt || !nf(this.state.dataUpdatedAt, a); }
    onFocus() { var a; const n = this.observers.find(r => r.shouldFetchOnWindowFocus()); n && n.refetch({ cancelRefetch: !1 }), (a = this.retryer) == null || a.continue(); }
    onOnline() { var a; const n = this.observers.find(r => r.shouldFetchOnReconnect()); n && n.refetch({ cancelRefetch: !1 }), (a = this.retryer) == null || a.continue(); }
    addObserver(a) { this.observers.includes(a) || (this.observers.push(a), this.clearGcTimeout(), this.cache.notify({ type: "observerAdded", query: this, observer: a })); }
    removeObserver(a) { this.observers.includes(a) && (this.observers = this.observers.filter(n => n !== a), this.observers.length || (this.retryer && (this.abortSignalConsumed ? this.retryer.cancel({ revert: !0 }) : this.retryer.cancelRetry()), this.scheduleGc()), this.cache.notify({ type: "observerRemoved", query: this, observer: a })); }
    getObserversCount() { return this.observers.length; }
    invalidate() { this.state.isInvalidated || this.dispatch({ type: "invalidate" }); }
    fetch(a, n) { var r, i; if (this.state.fetchStatus !== "idle") {
        if (this.state.dataUpdatedAt && n != null && n.cancelRefetch)
            this.cancel({ silent: !0 });
        else if (this.promise) {
            var t;
            return (t = this.retryer) == null || t.continueRetry(), this.promise;
        }
    } if (a && this.setOptions(a), !this.options.queryFn) {
        const k = this.observers.find(m => m.options.queryFn);
        k && this.setOptions(k.options);
    } const s = $v(), o = { queryKey: this.queryKey, pageParam: void 0, meta: this.meta }, l = k => { Object.defineProperty(k, "signal", { enumerable: !0, get: () => { if (s)
            return this.abortSignalConsumed = !0, s.signal; } }); }; l(o); const c = () => this.options.queryFn ? (this.abortSignalConsumed = !1, this.options.queryFn(o)) : Promise.reject("Missing queryFn for queryKey '" + this.options.queryHash + "'"), d = { fetchOptions: n, options: this.options, queryKey: this.queryKey, state: this.state, fetchFn: c }; if (l(d), (r = this.options.behavior) == null || r.onFetch(d), this.revertState = this.state, this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((i = d.fetchOptions) == null ? void 0 : i.meta)) {
        var b;
        this.dispatch({ type: "fetch", meta: (b = d.fetchOptions) == null ? void 0 : b.meta });
    } const g = k => { if (Ot(k) && k.silent || this.dispatch({ type: "error", error: k }), !Ot(k)) {
        var m, v, j, y;
        (m = (v = this.cache.config).onError) == null || m.call(v, k, this), (j = (y = this.cache.config).onSettled) == null || j.call(y, this.state.data, k, this);
    } this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1; }; return this.retryer = lf({ fn: d.fetchFn, abort: s == null ? void 0 : s.abort.bind(s), onSuccess: k => { var m, v, j, y; if (typeof k > "u") {
            g(new Error(this.queryHash + " data is undefined"));
            return;
        } this.setData(k), (m = (v = this.cache.config).onSuccess) == null || m.call(v, k, this), (j = (y = this.cache.config).onSettled) == null || j.call(y, k, this.state.error, this), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1; }, onError: g, onFail: (k, m) => { this.dispatch({ type: "failed", failureCount: k, error: m }); }, onPause: () => { this.dispatch({ type: "pause" }); }, onContinue: () => { this.dispatch({ type: "continue" }); }, retry: d.options.retry, retryDelay: d.options.retryDelay, networkMode: d.options.networkMode }), this.promise = this.retryer.promise, this.promise; }
    dispatch(a) { const n = r => { var i, t; switch (a.type) {
        case "failed": return Object.assign(Object.assign({}, r), { fetchFailureCount: a.failureCount, fetchFailureReason: a.error });
        case "pause": return Object.assign(Object.assign({}, r), { fetchStatus: "paused" });
        case "continue": return Object.assign(Object.assign({}, r), { fetchStatus: "fetching" });
        case "fetch": return Object.assign(Object.assign(Object.assign({}, r), { fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: (i = a.meta) != null ? i : null, fetchStatus: Is(this.options.networkMode) ? "fetching" : "paused" }), !r.dataUpdatedAt && { error: null, status: "loading" });
        case "success": return Object.assign(Object.assign(Object.assign({}, r), { data: a.data, dataUpdateCount: r.dataUpdateCount + 1, dataUpdatedAt: (t = a.dataUpdatedAt) != null ? t : Date.now(), error: null, isInvalidated: !1, status: "success" }), !a.manual && { fetchStatus: "idle", fetchFailureCount: 0, fetchFailureReason: null });
        case "error":
            const s = a.error;
            return Ot(s) && s.revert && this.revertState ? Object.assign(Object.assign({}, this.revertState), { fetchStatus: "idle" }) : Object.assign(Object.assign({}, r), { error: s, errorUpdateCount: r.errorUpdateCount + 1, errorUpdatedAt: Date.now(), fetchFailureCount: r.fetchFailureCount + 1, fetchFailureReason: s, fetchStatus: "idle", status: "error" });
        case "invalidate": return Object.assign(Object.assign({}, r), { isInvalidated: !0 });
        case "setState": return Object.assign(Object.assign({}, r), a.state);
    } }; this.state = n(this.state), he.batch(() => { this.observers.forEach(r => { r.onQueryUpdate(a); }), this.cache.notify({ query: this, type: "updated", action: a }); }); }
}
function Qv(e) { const a = typeof e.initialData == "function" ? e.initialData() : e.initialData, n = typeof a < "u", r = n ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0; return { data: a, dataUpdateCount: 0, dataUpdatedAt: n ? r !== null && r !== void 0 ? r : Date.now() : 0, error: null, errorUpdateCount: 0, errorUpdatedAt: 0, fetchFailureCount: 0, fetchFailureReason: null, fetchMeta: null, isInvalidated: !1, status: n ? "success" : "loading", fetchStatus: "idle" }; }
class Kv extends Or {
    constructor(a) { super(), this.config = a || {}, this.queries = [], this.queriesMap = {}; }
    build(a, n, r) { var i; const t = n.queryKey, s = (i = n.queryHash) != null ? i : Qu(t, n); let o = this.get(s); return o || (o = new Vv({ cache: this, logger: a.getLogger(), queryKey: t, queryHash: s, options: a.defaultQueryOptions(n), state: r, defaultOptions: a.getQueryDefaults(t) }), this.add(o)), o; }
    add(a) { this.queriesMap[a.queryHash] || (this.queriesMap[a.queryHash] = a, this.queries.push(a), this.notify({ type: "added", query: a })); }
    remove(a) { const n = this.queriesMap[a.queryHash]; n && (a.destroy(), this.queries = this.queries.filter(r => r !== a), n === a && delete this.queriesMap[a.queryHash], this.notify({ type: "removed", query: a })); }
    clear() { he.batch(() => { this.queries.forEach(a => { this.remove(a); }); }); }
    get(a) { return this.queriesMap[a]; }
    getAll() { return this.queries; }
    find(a, n) { const [r] = Ha(a, n); return typeof r.exact > "u" && (r.exact = !0), this.queries.find(i => Nm(r, i)); }
    findAll(a, n) { const [r] = Ha(a, n); return Object.keys(r).length > 0 ? this.queries.filter(i => Nm(r, i)) : this.queries; }
    notify(a) { he.batch(() => { this.listeners.forEach(({ listener: n }) => { n(a); }); }); }
    onFocus() { he.batch(() => { this.queries.forEach(a => { a.onFocus(); }); }); }
    onOnline() { he.batch(() => { this.queries.forEach(a => { a.onOnline(); }); }); }
}
class Gv extends cf {
    constructor(a) { super(), this.defaultOptions = a.defaultOptions, this.mutationId = a.mutationId, this.mutationCache = a.mutationCache, this.logger = a.logger || Ku, this.observers = [], this.state = a.state || uf(), this.setOptions(a.options), this.scheduleGc(); }
    setOptions(a) { this.options = Object.assign(Object.assign({}, this.defaultOptions), a), this.updateCacheTime(this.options.cacheTime); }
    get meta() { return this.options.meta; }
    setState(a) { this.dispatch({ type: "setState", state: a }); }
    addObserver(a) { this.observers.includes(a) || (this.observers.push(a), this.clearGcTimeout(), this.mutationCache.notify({ type: "observerAdded", mutation: this, observer: a })); }
    removeObserver(a) { this.observers = this.observers.filter(n => n !== a), this.scheduleGc(), this.mutationCache.notify({ type: "observerRemoved", mutation: this, observer: a }); }
    optionalRemove() { this.observers.length || (this.state.status === "loading" ? this.scheduleGc() : this.mutationCache.remove(this)); }
    continue() { var a, n; return (a = (n = this.retryer) == null ? void 0 : n.continue()) != null ? a : this.execute(); }
    execute() {
        return __awaiter(this, void 0, void 0, function* () { const a = () => { var q; return this.retryer = lf({ fn: () => this.options.mutationFn ? this.options.mutationFn(this.state.variables) : Promise.reject("No mutationFn found"), onFail: (_, T) => { this.dispatch({ type: "failed", failureCount: _, error: T }); }, onPause: () => { this.dispatch({ type: "pause" }); }, onContinue: () => { this.dispatch({ type: "continue" }); }, retry: (q = this.options.retry) != null ? q : 0, retryDelay: this.options.retryDelay, networkMode: this.options.networkMode }), this.retryer.promise; }, n = this.state.status === "loading"; try {
            var r, i, t, s, o, l, c, d;
            if (!n) {
                var b, g, k, m;
                this.dispatch({ type: "loading", variables: this.options.variables }), yield ((b = (g = this.mutationCache.config).onMutate) == null ? void 0 : b.call(g, this.state.variables, this));
                const _ = yield ((k = (m = this.options).onMutate) == null ? void 0 : k.call(m, this.state.variables));
                _ !== this.state.context && this.dispatch({ type: "loading", context: _, variables: this.state.variables });
            }
            const q = yield a();
            return yield ((r = (i = this.mutationCache.config).onSuccess) == null ? void 0 : r.call(i, q, this.state.variables, this.state.context, this)), yield ((t = (s = this.options).onSuccess) == null ? void 0 : t.call(s, q, this.state.variables, this.state.context)), yield ((o = (l = this.mutationCache.config).onSettled) == null ? void 0 : o.call(l, q, null, this.state.variables, this.state.context, this)), yield ((c = (d = this.options).onSettled) == null ? void 0 : c.call(d, q, null, this.state.variables, this.state.context)), this.dispatch({ type: "success", data: q }), q;
        }
        catch (q) {
            try {
                var v, j, y, f, u, p, w, z;
                throw yield ((v = (j = this.mutationCache.config).onError) == null ? void 0 : v.call(j, q, this.state.variables, this.state.context, this)), yield ((y = (f = this.options).onError) == null ? void 0 : y.call(f, q, this.state.variables, this.state.context)), yield ((u = (p = this.mutationCache.config).onSettled) == null ? void 0 : u.call(p, void 0, q, this.state.variables, this.state.context, this)), yield ((w = (z = this.options).onSettled) == null ? void 0 : w.call(z, void 0, q, this.state.variables, this.state.context)), q;
            }
            finally {
                this.dispatch({ type: "error", error: q });
            }
        } });
    }
    dispatch(a) { const n = r => { switch (a.type) {
        case "failed": return Object.assign(Object.assign({}, r), { failureCount: a.failureCount, failureReason: a.error });
        case "pause": return Object.assign(Object.assign({}, r), { isPaused: !0 });
        case "continue": return Object.assign(Object.assign({}, r), { isPaused: !1 });
        case "loading": return Object.assign(Object.assign({}, r), { context: a.context, data: void 0, failureCount: 0, failureReason: null, error: null, isPaused: !Is(this.options.networkMode), status: "loading", variables: a.variables });
        case "success": return Object.assign(Object.assign({}, r), { data: a.data, failureCount: 0, failureReason: null, error: null, status: "success", isPaused: !1 });
        case "error": return Object.assign(Object.assign({}, r), { data: void 0, error: a.error, failureCount: r.failureCount + 1, failureReason: a.error, isPaused: !1, status: "error" });
        case "setState": return Object.assign(Object.assign({}, r), a.state);
    } }; this.state = n(this.state), he.batch(() => { this.observers.forEach(r => { r.onMutationUpdate(a); }), this.mutationCache.notify({ mutation: this, type: "updated", action: a }); }); }
}
function uf() { return { context: void 0, data: void 0, error: null, failureCount: 0, failureReason: null, isPaused: !1, status: "idle", variables: void 0 }; }
class Yv extends Or {
    constructor(a) { super(), this.config = a || {}, this.mutations = [], this.mutationId = 0; }
    build(a, n, r) { const i = new Gv({ mutationCache: this, logger: a.getLogger(), mutationId: ++this.mutationId, options: a.defaultMutationOptions(n), state: r, defaultOptions: n.mutationKey ? a.getMutationDefaults(n.mutationKey) : void 0 }); return this.add(i), i; }
    add(a) { this.mutations.push(a), this.notify({ type: "added", mutation: a }); }
    remove(a) { this.mutations = this.mutations.filter(n => n !== a), this.notify({ type: "removed", mutation: a }); }
    clear() { he.batch(() => { this.mutations.forEach(a => { this.remove(a); }); }); }
    getAll() { return this.mutations; }
    find(a) { return typeof a.exact > "u" && (a.exact = !0), this.mutations.find(n => Im(a, n)); }
    findAll(a) { return this.mutations.filter(n => Im(a, n)); }
    notify(a) { he.batch(() => { this.listeners.forEach(({ listener: n }) => { n(a); }); }); }
    resumePausedMutations() { var a; return this.resuming = ((a = this.resuming) != null ? a : Promise.resolve()).then(() => { const n = this.mutations.filter(r => r.state.isPaused); return he.batch(() => n.reduce((r, i) => r.then(() => i.continue().catch(ea)), Promise.resolve())); }).then(() => { this.resuming = void 0; }), this.resuming; }
}
function Xv() { return { onFetch: e => { e.fetchFn = () => { var a, n, r, i, t, s; const o = (a = e.fetchOptions) == null || (n = a.meta) == null ? void 0 : n.refetchPage, l = (r = e.fetchOptions) == null || (i = r.meta) == null ? void 0 : i.fetchMore, c = l == null ? void 0 : l.pageParam, d = (l == null ? void 0 : l.direction) === "forward", b = (l == null ? void 0 : l.direction) === "backward", g = ((t = e.state.data) == null ? void 0 : t.pages) || [], k = ((s = e.state.data) == null ? void 0 : s.pageParams) || []; let m = k, v = !1; const j = z => { Object.defineProperty(z, "signal", { enumerable: !0, get: () => { var q; if ((q = e.signal) != null && q.aborted)
            v = !0;
        else {
            var _;
            (_ = e.signal) == null || _.addEventListener("abort", () => { v = !0; });
        } return e.signal; } }); }, y = e.options.queryFn || (() => Promise.reject("Missing queryFn for queryKey '" + e.options.queryHash + "'")), f = (z, q, _, T) => (m = T ? [q, ...m] : [...m, q], T ? [_, ...z] : [...z, _]), u = (z, q, _, T) => { if (v)
        return Promise.reject("Cancelled"); if (typeof _ > "u" && !q && z.length)
        return Promise.resolve(z); const P = { queryKey: e.queryKey, pageParam: _, meta: e.options.meta }; j(P); const E = y(P); return Promise.resolve(E).then(N => f(z, _, N, T)); }; let p; if (!g.length)
        p = u([]);
    else if (d) {
        const z = typeof c < "u", q = z ? c : Fm(e.options, g);
        p = u(g, z, q);
    }
    else if (b) {
        const z = typeof c < "u", q = z ? c : Jv(e.options, g);
        p = u(g, z, q, !0);
    }
    else {
        m = [];
        const z = typeof e.options.getNextPageParam > "u";
        p = (o && g[0] ? o(g[0], 0, g) : !0) ? u([], z, k[0]) : Promise.resolve(f([], k[0], g[0]));
        for (let _ = 1; _ < g.length; _++)
            p = p.then(T => { if (o && g[_] ? o(g[_], _, g) : !0) {
                const E = z ? k[_] : Fm(e.options, T);
                return u(T, z, E);
            } return Promise.resolve(f(T, k[_], g[_])); });
    } return p.then(z => ({ pages: z, pageParams: m })); }; } }; }
function Fm(e, a) { return e.getNextPageParam == null ? void 0 : e.getNextPageParam(a[a.length - 1], a); }
function Jv(e, a) { return e.getPreviousPageParam == null ? void 0 : e.getPreviousPageParam(a[0], a); }
class Zv {
    constructor(a = {}) { this.queryCache = a.queryCache || new Kv, this.mutationCache = a.mutationCache || new Yv, this.logger = a.logger || Ku, this.defaultOptions = a.defaultOptions || {}, this.queryDefaults = [], this.mutationDefaults = [], this.mountCount = 0; }
    mount() { this.mountCount++, this.mountCount === 1 && (this.unsubscribeFocus = is.subscribe(() => { is.isFocused() && (this.resumePausedMutations(), this.queryCache.onFocus()); }), this.unsubscribeOnline = ts.subscribe(() => { ts.isOnline() && (this.resumePausedMutations(), this.queryCache.onOnline()); })); }
    unmount() { var a, n; this.mountCount--, this.mountCount === 0 && ((a = this.unsubscribeFocus) == null || a.call(this), this.unsubscribeFocus = void 0, (n = this.unsubscribeOnline) == null || n.call(this), this.unsubscribeOnline = void 0); }
    isFetching(a, n) { const [r] = Ha(a, n); return r.fetchStatus = "fetching", this.queryCache.findAll(r).length; }
    isMutating(a) { return this.mutationCache.findAll(Object.assign(Object.assign({}, a), { fetching: !0 })).length; }
    getQueryData(a, n) { var r; return (r = this.queryCache.find(a, n)) == null ? void 0 : r.state.data; }
    ensureQueryData(a, n, r) { const i = Xr(a, n, r), t = this.getQueryData(i.queryKey); return t ? Promise.resolve(t) : this.fetchQuery(i); }
    getQueriesData(a) { return this.getQueryCache().findAll(a).map(({ queryKey: n, state: r }) => { const i = r.data; return [n, i]; }); }
    setQueryData(a, n, r) { const i = this.queryCache.find(a), t = i == null ? void 0 : i.state.data, s = Lv(n, t); if (typeof s > "u")
        return; const o = Xr(a), l = this.defaultQueryOptions(o); return this.queryCache.build(this, l).setData(s, Object.assign(Object.assign({}, r), { manual: !0 })); }
    setQueriesData(a, n, r) { return he.batch(() => this.getQueryCache().findAll(a).map(({ queryKey: i }) => [i, this.setQueryData(i, n, r)])); }
    getQueryState(a, n) { var r; return (r = this.queryCache.find(a, n)) == null ? void 0 : r.state; }
    removeQueries(a, n) { const [r] = Ha(a, n), i = this.queryCache; he.batch(() => { i.findAll(r).forEach(t => { i.remove(t); }); }); }
    resetQueries(a, n, r) { const [i, t] = Ha(a, n, r), s = this.queryCache, o = Object.assign({ type: "active" }, i); return he.batch(() => (s.findAll(i).forEach(l => { l.reset(); }), this.refetchQueries(o, t))); }
    cancelQueries(a, n, r) { const [i, t = {}] = Ha(a, n, r); typeof t.revert > "u" && (t.revert = !0); const s = he.batch(() => this.queryCache.findAll(i).map(o => o.cancel(t))); return Promise.all(s).then(ea).catch(ea); }
    invalidateQueries(a, n, r) { const [i, t] = Ha(a, n, r); return he.batch(() => { var s, o; if (this.queryCache.findAll(i).forEach(c => { c.invalidate(); }), i.refetchType === "none")
        return Promise.resolve(); const l = Object.assign(Object.assign({}, i), { type: (s = (o = i.refetchType) != null ? o : i.type) != null ? s : "active" }); return this.refetchQueries(l, t); }); }
    refetchQueries(a, n, r) { const [i, t] = Ha(a, n, r), s = he.batch(() => this.queryCache.findAll(i).filter(l => !l.isDisabled()).map(l => { var c; return l.fetch(void 0, Object.assign(Object.assign({}, t), { cancelRefetch: (c = t == null ? void 0 : t.cancelRefetch) != null ? c : !0, meta: { refetchPage: i.refetchPage } })); })); let o = Promise.all(s).then(ea); return t != null && t.throwOnError || (o = o.catch(ea)), o; }
    fetchQuery(a, n, r) { const i = Xr(a, n, r), t = this.defaultQueryOptions(i); typeof t.retry > "u" && (t.retry = !1); const s = this.queryCache.build(this, t); return s.isStaleByTime(t.staleTime) ? s.fetch(t) : Promise.resolve(s.state.data); }
    prefetchQuery(a, n, r) { return this.fetchQuery(a, n, r).then(ea).catch(ea); }
    fetchInfiniteQuery(a, n, r) { const i = Xr(a, n, r); return i.behavior = Xv(), this.fetchQuery(i); }
    prefetchInfiniteQuery(a, n, r) { return this.fetchInfiniteQuery(a, n, r).then(ea).catch(ea); }
    resumePausedMutations() { return this.mutationCache.resumePausedMutations(); }
    getQueryCache() { return this.queryCache; }
    getMutationCache() { return this.mutationCache; }
    getLogger() { return this.logger; }
    getDefaultOptions() { return this.defaultOptions; }
    setDefaultOptions(a) { this.defaultOptions = a; }
    setQueryDefaults(a, n) { const r = this.queryDefaults.find(i => zn(a) === zn(i.queryKey)); r ? r.defaultOptions = n : this.queryDefaults.push({ queryKey: a, defaultOptions: n }); }
    getQueryDefaults(a) { if (!a)
        return; const n = this.queryDefaults.find(r => ns(a, r.queryKey)); return n == null ? void 0 : n.defaultOptions; }
    setMutationDefaults(a, n) { const r = this.mutationDefaults.find(i => zn(a) === zn(i.mutationKey)); r ? r.defaultOptions = n : this.mutationDefaults.push({ mutationKey: a, defaultOptions: n }); }
    getMutationDefaults(a) { if (!a)
        return; const n = this.mutationDefaults.find(r => ns(a, r.mutationKey)); return n == null ? void 0 : n.defaultOptions; }
    defaultQueryOptions(a) { if (a != null && a._defaulted)
        return a; const n = Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.queries), this.getQueryDefaults(a == null ? void 0 : a.queryKey)), a), { _defaulted: !0 }); return !n.queryHash && n.queryKey && (n.queryHash = Qu(n.queryKey, n)), typeof n.refetchOnReconnect > "u" && (n.refetchOnReconnect = n.networkMode !== "always"), typeof n.useErrorBoundary > "u" && (n.useErrorBoundary = !!n.suspense), n; }
    defaultMutationOptions(a) { return a != null && a._defaulted ? a : Object.assign(Object.assign(Object.assign(Object.assign({}, this.defaultOptions.mutations), this.getMutationDefaults(a == null ? void 0 : a.mutationKey)), a), { _defaulted: !0 }); }
    clear() { this.queryCache.clear(), this.mutationCache.clear(); }
}
class e1 extends Or {
    constructor(a, n) { super(), this.client = a, this.options = n, this.trackedProps = new Set, this.selectError = null, this.bindMethods(), this.setOptions(n); }
    bindMethods() { this.remove = this.remove.bind(this), this.refetch = this.refetch.bind(this); }
    onSubscribe() { this.listeners.size === 1 && (this.currentQuery.addObserver(this), $m(this.currentQuery, this.options) && this.executeFetch(), this.updateTimers()); }
    onUnsubscribe() { this.hasListeners() || this.destroy(); }
    shouldFetchOnReconnect() { return Ul(this.currentQuery, this.options, this.options.refetchOnReconnect); }
    shouldFetchOnWindowFocus() { return Ul(this.currentQuery, this.options, this.options.refetchOnWindowFocus); }
    destroy() { this.listeners = new Set, this.clearStaleTimeout(), this.clearRefetchInterval(), this.currentQuery.removeObserver(this); }
    setOptions(a, n) { const r = this.options, i = this.currentQuery; if (this.options = this.client.defaultQueryOptions(a), rs(r, this.options) || this.client.getQueryCache().notify({ type: "observerOptionsUpdated", query: this.currentQuery, observer: this }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
        throw new Error("Expected enabled to be a boolean"); this.options.queryKey || (this.options.queryKey = r.queryKey), this.updateQuery(); const t = this.hasListeners(); t && Um(this.currentQuery, i, this.options, r) && this.executeFetch(), this.updateResult(n), t && (this.currentQuery !== i || this.options.enabled !== r.enabled || this.options.staleTime !== r.staleTime) && this.updateStaleTimeout(); const s = this.computeRefetchInterval(); t && (this.currentQuery !== i || this.options.enabled !== r.enabled || s !== this.currentRefetchInterval) && this.updateRefetchInterval(s); }
    getOptimisticResult(a) { const n = this.client.getQueryCache().build(this.client, a), r = this.createResult(n, a); return n1(this, r, a) && (this.currentResult = r, this.currentResultOptions = this.options, this.currentResultState = this.currentQuery.state), r; }
    getCurrentResult() { return this.currentResult; }
    trackResult(a) { const n = {}; return Object.keys(a).forEach(r => { Object.defineProperty(n, r, { configurable: !1, enumerable: !0, get: () => (this.trackedProps.add(r), a[r]) }); }), n; }
    getCurrentQuery() { return this.currentQuery; }
    remove() { this.client.getQueryCache().remove(this.currentQuery); }
    refetch(_q = {}) { var { refetchPage: a } = _q, n = __rest(_q, ["refetchPage"]); return this.fetch(Object.assign(Object.assign({}, n), { meta: { refetchPage: a } })); }
    fetchOptimistic(a) { const n = this.client.defaultQueryOptions(a), r = this.client.getQueryCache().build(this.client, n); return r.isFetchingOptimistic = !0, r.fetch().then(() => this.createResult(r, n)); }
    fetch(a) { var n; return this.executeFetch(Object.assign(Object.assign({}, a), { cancelRefetch: (n = a.cancelRefetch) != null ? n : !0 })).then(() => (this.updateResult(), this.currentResult)); }
    executeFetch(a) { this.updateQuery(); let n = this.currentQuery.fetch(this.options, a); return a != null && a.throwOnError || (n = n.catch(ea)), n; }
    updateStaleTimeout() { if (this.clearStaleTimeout(), Oi || this.currentResult.isStale || !Ll(this.options.staleTime))
        return; const n = nf(this.currentResult.dataUpdatedAt, this.options.staleTime) + 1; this.staleTimeoutId = setTimeout(() => { this.currentResult.isStale || this.updateResult(); }, n); }
    computeRefetchInterval() { var a; return typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(this.currentResult.data, this.currentQuery) : (a = this.options.refetchInterval) != null ? a : !1; }
    updateRefetchInterval(a) { this.clearRefetchInterval(), this.currentRefetchInterval = a, !(Oi || this.options.enabled === !1 || !Ll(this.currentRefetchInterval) || this.currentRefetchInterval === 0) && (this.refetchIntervalId = setInterval(() => { (this.options.refetchIntervalInBackground || is.isFocused()) && this.executeFetch(); }, this.currentRefetchInterval)); }
    updateTimers() { this.updateStaleTimeout(), this.updateRefetchInterval(this.computeRefetchInterval()); }
    clearStaleTimeout() { this.staleTimeoutId && (clearTimeout(this.staleTimeoutId), this.staleTimeoutId = void 0); }
    clearRefetchInterval() { this.refetchIntervalId && (clearInterval(this.refetchIntervalId), this.refetchIntervalId = void 0); }
    createResult(a, n) { const r = this.currentQuery, i = this.options, t = this.currentResult, s = this.currentResultState, o = this.currentResultOptions, l = a !== r, c = l ? a.state : this.currentQueryInitialState, d = l ? this.currentResult : this.previousQueryResult, { state: b } = a; let { dataUpdatedAt: g, error: k, errorUpdatedAt: m, fetchStatus: v, status: j } = b, y = !1, f = !1, u; if (n._optimisticResults) {
        const _ = this.hasListeners(), T = !_ && $m(a, n), P = _ && Um(a, r, n, i);
        (T || P) && (v = Is(a.options.networkMode) ? "fetching" : "paused", g || (j = "loading")), n._optimisticResults === "isRestoring" && (v = "idle");
    } if (n.keepPreviousData && !b.dataUpdatedAt && d != null && d.isSuccess && j !== "error")
        u = d.data, g = d.dataUpdatedAt, j = d.status, y = !0;
    else if (n.select && typeof b.data < "u")
        if (t && b.data === (s == null ? void 0 : s.data) && n.select === this.selectFn)
            u = this.selectResult;
        else
            try {
                this.selectFn = n.select, u = n.select(b.data), u = $l(t == null ? void 0 : t.data, u, n), this.selectResult = u, this.selectError = null;
            }
            catch (_) {
                this.selectError = _;
            }
    else
        u = b.data; if (typeof n.placeholderData < "u" && typeof u > "u" && j === "loading") {
        let _;
        if (t != null && t.isPlaceholderData && n.placeholderData === (o == null ? void 0 : o.placeholderData))
            _ = t.data;
        else if (_ = typeof n.placeholderData == "function" ? n.placeholderData() : n.placeholderData, n.select && typeof _ < "u")
            try {
                _ = n.select(_), this.selectError = null;
            }
            catch (T) {
                this.selectError = T;
            }
        typeof _ < "u" && (j = "success", u = $l(t == null ? void 0 : t.data, _, n), f = !0);
    } this.selectError && (k = this.selectError, u = this.selectResult, m = Date.now(), j = "error"); const p = v === "fetching", w = j === "loading", z = j === "error"; return { status: j, fetchStatus: v, isLoading: w, isSuccess: j === "success", isError: z, isInitialLoading: w && p, data: u, dataUpdatedAt: g, error: k, errorUpdatedAt: m, failureCount: b.fetchFailureCount, failureReason: b.fetchFailureReason, errorUpdateCount: b.errorUpdateCount, isFetched: b.dataUpdateCount > 0 || b.errorUpdateCount > 0, isFetchedAfterMount: b.dataUpdateCount > c.dataUpdateCount || b.errorUpdateCount > c.errorUpdateCount, isFetching: p, isRefetching: p && !w, isLoadingError: z && b.dataUpdatedAt === 0, isPaused: v === "paused", isPlaceholderData: f, isPreviousData: y, isRefetchError: z && b.dataUpdatedAt !== 0, isStale: Gu(a, n), refetch: this.refetch, remove: this.remove }; }
    updateResult(a) { const n = this.currentResult, r = this.createResult(this.currentQuery, this.options); if (this.currentResultState = this.currentQuery.state, this.currentResultOptions = this.options, rs(r, n))
        return; this.currentResult = r; const i = { cache: !0 }, t = () => { if (!n)
        return !0; const { notifyOnChangeProps: s } = this.options, o = typeof s == "function" ? s() : s; if (o === "all" || !o && !this.trackedProps.size)
        return !0; const l = new Set(o !== null && o !== void 0 ? o : this.trackedProps); return this.options.useErrorBoundary && l.add("error"), Object.keys(this.currentResult).some(c => { const d = c; return this.currentResult[d] !== n[d] && l.has(d); }); }; (a == null ? void 0 : a.listeners) !== !1 && t() && (i.listeners = !0), this.notify(Object.assign(Object.assign({}, i), a)); }
    updateQuery() { const a = this.client.getQueryCache().build(this.client, this.options); if (a === this.currentQuery)
        return; const n = this.currentQuery; this.currentQuery = a, this.currentQueryInitialState = a.state, this.previousQueryResult = this.currentResult, this.hasListeners() && (n == null || n.removeObserver(this), a.addObserver(this)); }
    onQueryUpdate(a) { const n = {}; a.type === "success" ? n.onSuccess = !a.manual : a.type === "error" && !Ot(a.error) && (n.onError = !0), this.updateResult(n), this.hasListeners() && this.updateTimers(); }
    notify(a) { he.batch(() => { if (a.onSuccess) {
        var n, r, i, t;
        (n = (r = this.options).onSuccess) == null || n.call(r, this.currentResult.data), (i = (t = this.options).onSettled) == null || i.call(t, this.currentResult.data, null);
    }
    else if (a.onError) {
        var s, o, l, c;
        (s = (o = this.options).onError) == null || s.call(o, this.currentResult.error), (l = (c = this.options).onSettled) == null || l.call(c, void 0, this.currentResult.error);
    } a.listeners && this.listeners.forEach(({ listener: d }) => { d(this.currentResult); }), a.cache && this.client.getQueryCache().notify({ query: this.currentQuery, type: "observerResultsUpdated" }); }); }
}
function a1(e, a) { return a.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && a.retryOnMount === !1); }
function $m(e, a) { return a1(e, a) || e.state.dataUpdatedAt > 0 && Ul(e, a, a.refetchOnMount); }
function Ul(e, a, n) { if (a.enabled !== !1) {
    const r = typeof n == "function" ? n(e) : n;
    return r === "always" || r !== !1 && Gu(e, a);
} return !1; }
function Um(e, a, n, r) { return n.enabled !== !1 && (e !== a || r.enabled === !1) && (!n.suspense || e.state.status !== "error") && Gu(e, n); }
function Gu(e, a) { return e.isStaleByTime(a.staleTime); }
function n1(e, a, n) { return n.keepPreviousData ? !1 : n.placeholderData !== void 0 ? a.isPlaceholderData : !rs(e.getCurrentResult(), a); }
let r1 = class extends Or {
    constructor(a, n) { super(), this.client = a, this.setOptions(n), this.bindMethods(), this.updateResult(); }
    bindMethods() { this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this); }
    setOptions(a) { var n; const r = this.options; this.options = this.client.defaultMutationOptions(a), rs(r, this.options) || this.client.getMutationCache().notify({ type: "observerOptionsUpdated", mutation: this.currentMutation, observer: this }), (n = this.currentMutation) == null || n.setOptions(this.options); }
    onUnsubscribe() { if (!this.hasListeners()) {
        var a;
        (a = this.currentMutation) == null || a.removeObserver(this);
    } }
    onMutationUpdate(a) { this.updateResult(); const n = { listeners: !0 }; a.type === "success" ? n.onSuccess = !0 : a.type === "error" && (n.onError = !0), this.notify(n); }
    getCurrentResult() { return this.currentResult; }
    reset() { this.currentMutation = void 0, this.updateResult(), this.notify({ listeners: !0 }); }
    mutate(a, n) { return this.mutateOptions = n, this.currentMutation && this.currentMutation.removeObserver(this), this.currentMutation = this.client.getMutationCache().build(this.client, Object.assign(Object.assign({}, this.options), { variables: typeof a < "u" ? a : this.options.variables })), this.currentMutation.addObserver(this), this.currentMutation.execute(); }
    updateResult() { const a = this.currentMutation ? this.currentMutation.state : uf(), n = Object.assign(Object.assign({}, a), { isLoading: a.status === "loading", isSuccess: a.status === "success", isError: a.status === "error", isIdle: a.status === "idle", mutate: this.mutate, reset: this.reset }); this.currentResult = n; }
    notify(a) { he.batch(() => { if (this.mutateOptions && this.hasListeners()) {
        if (a.onSuccess) {
            var n, r, i, t;
            (n = (r = this.mutateOptions).onSuccess) == null || n.call(r, this.currentResult.data, this.currentResult.variables, this.currentResult.context), (i = (t = this.mutateOptions).onSettled) == null || i.call(t, this.currentResult.data, null, this.currentResult.variables, this.currentResult.context);
        }
        else if (a.onError) {
            var s, o, l, c;
            (s = (o = this.mutateOptions).onError) == null || s.call(o, this.currentResult.error, this.currentResult.variables, this.currentResult.context), (l = (c = this.mutateOptions).onSettled) == null || l.call(c, void 0, this.currentResult.error, this.currentResult.variables, this.currentResult.context);
        }
    } a.listeners && this.listeners.forEach(({ listener: d }) => { d(this.currentResult); }); }); }
};
var df = { exports: {} }, mf = {};
var jr = O;
function i1(e, a) { return e === a && (e !== 0 || 1 / e === 1 / a) || e !== e && a !== a; }
var t1 = typeof Object.is == "function" ? Object.is : i1, s1 = jr.useState, o1 = jr.useEffect, l1 = jr.useLayoutEffect, c1 = jr.useDebugValue;
function u1(e, a) { var n = a(), r = s1({ inst: { value: n, getSnapshot: a } }), i = r[0].inst, t = r[1]; return l1(function () { i.value = n, i.getSnapshot = a, Co(i) && t({ inst: i }); }, [e, n, a]), o1(function () { return Co(i) && t({ inst: i }), e(function () { Co(i) && t({ inst: i }); }); }, [e]), c1(n), n; }
function Co(e) { var a = e.getSnapshot; e = e.value; try {
    var n = a();
    return !t1(e, n);
}
catch (_q) {
    return !0;
} }
function d1(e, a) { return a(); }
var m1 = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? d1 : u1;
mf.useSyncExternalStore = jr.useSyncExternalStore !== void 0 ? jr.useSyncExternalStore : m1;
df.exports = mf;
var h1 = df.exports;
const hf = h1.useSyncExternalStore, Bm = O.createContext(void 0), gf = O.createContext(!1);
function pf(e, a) { return e || (a && typeof window < "u" ? (window.ReactQueryClientContext || (window.ReactQueryClientContext = Bm), window.ReactQueryClientContext) : Bm); }
const ff = ({ context: e } = {}) => { const a = O.useContext(pf(e, O.useContext(gf))); if (!a)
    throw new Error("No QueryClient set, use QueryClientProvider to set one"); return a; }, g1 = ({ client: e, children: a, context: n, contextSharing: r = !1 }) => { O.useEffect(() => (e.mount(), () => { e.unmount(); }), [e]); const i = pf(n, r); return O.createElement(gf.Provider, { value: !n && r }, O.createElement(i.Provider, { value: e }, a)); }, bf = O.createContext(!1), p1 = () => O.useContext(bf);
bf.Provider;
function f1() { let e = !1; return { clearReset: () => { e = !1; }, reset: () => { e = !0; }, isReset: () => e }; }
const b1 = O.createContext(f1()), y1 = () => O.useContext(b1);
function yf(e, a) { return typeof e == "function" ? e(...a) : !!e; }
const k1 = (e, a) => { (e.suspense || e.useErrorBoundary) && (a.isReset() || (e.retryOnMount = !1)); }, v1 = e => { O.useEffect(() => { e.clearReset(); }, [e]); }, w1 = ({ result: e, errorResetBoundary: a, useErrorBoundary: n, query: r }) => e.isError && !a.isReset() && !e.isFetching && yf(n, [e.error, r]), j1 = e => { e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3); }, z1 = (e, a) => e.isLoading && e.isFetching && !a, x1 = (e, a, n) => (e == null ? void 0 : e.suspense) && z1(a, n), q1 = (e, a, n) => a.fetchOptimistic(e).then(({ data: r }) => { e.onSuccess == null || e.onSuccess(r), e.onSettled == null || e.onSettled(r, null); }).catch(r => { n.clearReset(), e.onError == null || e.onError(r), e.onSettled == null || e.onSettled(void 0, r); });
function _1(e, a) { const n = ff({ context: e.context }), r = p1(), i = y1(), t = n.defaultQueryOptions(e); t._optimisticResults = r ? "isRestoring" : "optimistic", t.onError && (t.onError = he.batchCalls(t.onError)), t.onSuccess && (t.onSuccess = he.batchCalls(t.onSuccess)), t.onSettled && (t.onSettled = he.batchCalls(t.onSettled)), j1(t), k1(t, i), v1(i); const [s] = O.useState(() => new a(n, t)), o = s.getOptimisticResult(t); if (hf(O.useCallback(l => { const c = r ? () => { } : s.subscribe(he.batchCalls(l)); return s.updateResult(), c; }, [s, r]), () => s.getCurrentResult(), () => s.getCurrentResult()), O.useEffect(() => { s.setOptions(t, { listeners: !1 }); }, [t, s]), x1(t, o, r))
    throw q1(t, s, i); if (w1({ result: o, errorResetBoundary: i, useErrorBoundary: t.useErrorBoundary, query: s.getCurrentQuery() }))
    throw o.error; return t.notifyOnChangeProps ? o : s.trackResult(o); }
function Nn(e, a, n) { const r = Xr(e, a, n); return _1(r, e1); }
function Yu(e, a, n) { const r = Fv(e, a, n), i = ff({ context: r.context }), [t] = O.useState(() => new r1(i, r)); O.useEffect(() => { t.setOptions(r); }, [t, r]); const s = hf(O.useCallback(l => t.subscribe(he.batchCalls(l)), [t]), () => t.getCurrentResult(), () => t.getCurrentResult()), o = O.useCallback((l, c) => { t.mutate(l, c).catch(S1); }, [t]); if (s.error && yf(t.options.useErrorBoundary, [s.error]))
    throw s.error; return Object.assign(Object.assign({}, s), { mutate: o, mutateAsync: s.mutate }); }
function S1() { }
const O1 = function () { return null; };
function Ei() { return Ei = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ei.apply(this, arguments); }
var Ya;
(function (e) { e.Pop = "POP", e.Push = "PUSH", e.Replace = "REPLACE"; })(Ya || (Ya = {}));
const Wm = "popstate";
function E1(e) { e === void 0 && (e = {}); function a(r, i) { let { pathname: t, search: s, hash: o } = r.location; return Bl("", { pathname: t, search: s, hash: o }, i.state && i.state.usr || null, i.state && i.state.key || "default"); } function n(r, i) { return typeof i == "string" ? i : ss(i); } return C1(a, n, null, e); }
function fe(e, a) { if (e === !1 || e === null || typeof e > "u")
    throw new Error(a); }
function Xu(e, a) { if (!e) {
    typeof console < "u" && console.warn(a);
    try {
        throw new Error(a);
    }
    catch (_q) { }
} }
function P1() { return Math.random().toString(36).substr(2, 8); }
function Hm(e, a) { return { usr: e.state, key: e.key, idx: a }; }
function Bl(e, a, n, r) { return n === void 0 && (n = null), Ei({ pathname: typeof e == "string" ? e : e.pathname, search: "", hash: "" }, typeof a == "string" ? Er(a) : a, { state: n, key: a && a.key || r || P1() }); }
function ss(e) { let { pathname: a = "/", search: n = "", hash: r = "" } = e; return n && n !== "?" && (a += n.charAt(0) === "?" ? n : "?" + n), r && r !== "#" && (a += r.charAt(0) === "#" ? r : "#" + r), a; }
function Er(e) { let a = {}; if (e) {
    let n = e.indexOf("#");
    n >= 0 && (a.hash = e.substr(n), e = e.substr(0, n));
    let r = e.indexOf("?");
    r >= 0 && (a.search = e.substr(r), e = e.substr(0, r)), e && (a.pathname = e);
} return a; }
function C1(e, a, n, r) { r === void 0 && (r = {}); let { window: i = document.defaultView, v5Compat: t = !1 } = r, s = i.history, o = Ya.Pop, l = null, c = d(); c == null && (c = 0, s.replaceState(Ei({}, s.state, { idx: c }), "")); function d() { return (s.state || { idx: null }).idx; } function b() { o = Ya.Pop; let j = d(), y = j == null ? null : j - c; c = j, l && l({ action: o, location: v.location, delta: y }); } function g(j, y) { o = Ya.Push; let f = Bl(v.location, j, y); n && n(f, j), c = d() + 1; let u = Hm(f, c), p = v.createHref(f); try {
    s.pushState(u, "", p);
}
catch (w) {
    if (w instanceof DOMException && w.name === "DataCloneError")
        throw w;
    i.location.assign(p);
} t && l && l({ action: o, location: v.location, delta: 1 }); } function k(j, y) { o = Ya.Replace; let f = Bl(v.location, j, y); n && n(f, j), c = d(); let u = Hm(f, c), p = v.createHref(f); s.replaceState(u, "", p), t && l && l({ action: o, location: v.location, delta: 0 }); } function m(j) { let y = i.location.origin !== "null" ? i.location.origin : i.location.href, f = typeof j == "string" ? j : ss(j); return fe(y, "No window.location.(origin|href) available to create URL for href: " + f), new URL(f, y); } let v = { get action() { return o; }, get location() { return e(i, s); }, listen(j) { if (l)
        throw new Error("A history only accepts one active listener"); return i.addEventListener(Wm, b), l = j, () => { i.removeEventListener(Wm, b), l = null; }; }, createHref(j) { return a(i, j); }, createURL: m, encodeLocation(j) { let y = m(j); return { pathname: y.pathname, search: y.search, hash: y.hash }; }, push: g, replace: k, go(j) { return s.go(j); } }; return v; }
var Vm;
(function (e) { e.data = "data", e.deferred = "deferred", e.redirect = "redirect", e.error = "error"; })(Vm || (Vm = {}));
function T1(e, a, n) { n === void 0 && (n = "/"); let r = typeof a == "string" ? Er(a) : a, i = Ju(r.pathname || "/", n); if (i == null)
    return null; let t = kf(e); R1(t); let s = null; for (let o = 0; s == null && o < t.length; ++o)
    s = U1(t[o], H1(i)); return s; }
function kf(e, a, n, r) { a === void 0 && (a = []), n === void 0 && (n = []), r === void 0 && (r = ""); let i = (t, s, o) => { let l = { relativePath: o === void 0 ? t.path || "" : o, caseSensitive: t.caseSensitive === !0, childrenIndex: s, route: t }; l.relativePath.startsWith("/") && (fe(l.relativePath.startsWith(r), 'Absolute route path "' + l.relativePath + '" nested under path ' + ('"' + r + '" is not valid. An absolute child route path ') + "must start with the combined path of all its parent routes."), l.relativePath = l.relativePath.slice(r.length)); let c = sn([r, l.relativePath]), d = n.concat(l); t.children && t.children.length > 0 && (fe(t.index !== !0, "Index routes must not have child routes. Please remove " + ('all child routes from route path "' + c + '".')), kf(t.children, a, d, c)), !(t.path == null && !t.index) && a.push({ path: c, score: F1(c, t.index), routesMeta: d }); }; return e.forEach((t, s) => { var o; if (t.path === "" || !((o = t.path) != null && o.includes("?")))
    i(t, s);
else
    for (let l of vf(t.path))
        i(t, s, l); }), a; }
function vf(e) { let a = e.split("/"); if (a.length === 0)
    return []; let [n, ...r] = a, i = n.endsWith("?"), t = n.replace(/\?$/, ""); if (r.length === 0)
    return i ? [t, ""] : [t]; let s = vf(r.join("/")), o = []; return o.push(...s.map(l => l === "" ? t : [t, l].join("/"))), i && o.push(...s), o.map(l => e.startsWith("/") && l === "" ? "/" : l); }
function R1(e) { e.sort((a, n) => a.score !== n.score ? n.score - a.score : $1(a.routesMeta.map(r => r.childrenIndex), n.routesMeta.map(r => r.childrenIndex))); }
const N1 = /^:\w+$/, I1 = 3, D1 = 2, M1 = 1, A1 = 10, L1 = -2, Qm = e => e === "*";
function F1(e, a) { let n = e.split("/"), r = n.length; return n.some(Qm) && (r += L1), a && (r += D1), n.filter(i => !Qm(i)).reduce((i, t) => i + (N1.test(t) ? I1 : t === "" ? M1 : A1), r); }
function $1(e, a) { return e.length === a.length && e.slice(0, -1).every((r, i) => r === a[i]) ? e[e.length - 1] - a[a.length - 1] : 0; }
function U1(e, a) { let { routesMeta: n } = e, r = {}, i = "/", t = []; for (let s = 0; s < n.length; ++s) {
    let o = n[s], l = s === n.length - 1, c = i === "/" ? a : a.slice(i.length) || "/", d = B1({ path: o.relativePath, caseSensitive: o.caseSensitive, end: l }, c);
    if (!d)
        return null;
    Object.assign(r, d.params);
    let b = o.route;
    t.push({ params: r, pathname: sn([i, d.pathname]), pathnameBase: G1(sn([i, d.pathnameBase])), route: b }), d.pathnameBase !== "/" && (i = sn([i, d.pathnameBase]));
} return t; }
function B1(e, a) { typeof e == "string" && (e = { path: e, caseSensitive: !1, end: !0 }); let [n, r] = W1(e.path, e.caseSensitive, e.end), i = a.match(n); if (!i)
    return null; let t = i[0], s = t.replace(/(.)\/+$/, "$1"), o = i.slice(1); return { params: r.reduce((c, d, b) => { if (d === "*") {
        let g = o[b] || "";
        s = t.slice(0, t.length - g.length).replace(/(.)\/+$/, "$1");
    } return c[d] = V1(o[b] || "", d), c; }, {}), pathname: t, pathnameBase: s, pattern: e }; }
function W1(e, a, n) { a === void 0 && (a = !1), n === void 0 && (n = !0), Xu(e === "*" || !e.endsWith("*") || e.endsWith("/*"), 'Route path "' + e + '" will be treated as if it were ' + ('"' + e.replace(/\*$/, "/*") + '" because the `*` character must ') + "always follow a `/` in the pattern. To get rid of this warning, " + ('please change the route path to "' + e.replace(/\*$/, "/*") + '".')); let r = [], i = "^" + e.replace(/\/*\*?$/, "").replace(/^\/*/, "/").replace(/[\\.*+^$?{}|()[\]]/g, "\\$&").replace(/\/:(\w+)/g, (s, o) => (r.push(o), "/([^\\/]+)")); return e.endsWith("*") ? (r.push("*"), i += e === "*" || e === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$") : n ? i += "\\/*$" : e !== "" && e !== "/" && (i += "(?:(?=\\/|$))"), [new RegExp(i, a ? void 0 : "i"), r]; }
function H1(e) { try {
    return decodeURI(e);
}
catch (a) {
    return Xu(!1, 'The URL path "' + e + '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' + ("encoding (" + a + ").")), e;
} }
function V1(e, a) { try {
    return decodeURIComponent(e);
}
catch (n) {
    return Xu(!1, 'The value for the URL param "' + a + '" will not be decoded because' + (' the string "' + e + '" is a malformed URL segment. This is probably') + (" due to a bad percent encoding (" + n + ").")), e;
} }
function Ju(e, a) { if (a === "/")
    return e; if (!e.toLowerCase().startsWith(a.toLowerCase()))
    return null; let n = a.endsWith("/") ? a.length - 1 : a.length, r = e.charAt(n); return r && r !== "/" ? null : e.slice(n) || "/"; }
function Q1(e, a) { a === void 0 && (a = "/"); let { pathname: n, search: r = "", hash: i = "" } = typeof e == "string" ? Er(e) : e; return { pathname: n ? n.startsWith("/") ? n : K1(n, a) : a, search: Y1(r), hash: X1(i) }; }
function K1(e, a) { let n = a.replace(/\/+$/, "").split("/"); return e.split("/").forEach(i => { i === ".." ? n.length > 1 && n.pop() : i !== "." && n.push(i); }), n.length > 1 ? n.join("/") : "/"; }
function To(e, a, n, r) { return "Cannot include a '" + e + "' character in a manually specified " + ("`to." + a + "` field [" + JSON.stringify(r) + "].  Please separate it out to the ") + ("`to." + n + "` field. Alternatively you may provide the full path as ") + 'a string in <Link to="..."> and the router will parse it for you.'; }
function Zu(e) { return e.filter((a, n) => n === 0 || a.route.path && a.route.path.length > 0); }
function ed(e, a, n, r) { r === void 0 && (r = !1); let i; typeof e == "string" ? i = Er(e) : (i = Ei({}, e), fe(!i.pathname || !i.pathname.includes("?"), To("?", "pathname", "search", i)), fe(!i.pathname || !i.pathname.includes("#"), To("#", "pathname", "hash", i)), fe(!i.search || !i.search.includes("#"), To("#", "search", "hash", i))); let t = e === "" || i.pathname === "", s = t ? "/" : i.pathname, o; if (r || s == null)
    o = n;
else {
    let b = a.length - 1;
    if (s.startsWith("..")) {
        let g = s.split("/");
        for (; g[0] === "..";)
            g.shift(), b -= 1;
        i.pathname = g.join("/");
    }
    o = b >= 0 ? a[b] : "/";
} let l = Q1(i, o), c = s && s !== "/" && s.endsWith("/"), d = (t || s === ".") && n.endsWith("/"); return !l.pathname.endsWith("/") && (c || d) && (l.pathname += "/"), l; }
const sn = e => e.join("/").replace(/\/\/+/g, "/"), G1 = e => e.replace(/\/+$/, "").replace(/^\/*/, "/"), Y1 = e => !e || e === "?" ? "" : e.startsWith("?") ? e : "?" + e, X1 = e => !e || e === "#" ? "" : e.startsWith("#") ? e : "#" + e;
function J1(e) { return e != null && typeof e.status == "number" && typeof e.statusText == "string" && typeof e.internal == "boolean" && "data" in e; }
const wf = ["post", "put", "patch", "delete"];
new Set(wf);
const Z1 = ["get", ...wf];
new Set(Z1);
function os() { return os = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, os.apply(this, arguments); }
const ad = O.createContext(null), ew = O.createContext(null), Pr = O.createContext(null), Ds = O.createContext(null), mn = O.createContext({ outlet: null, matches: [], isDataRoute: !1 }), jf = O.createContext(null);
function aw(e, a) { let { relative: n } = a === void 0 ? {} : a; Cr() || fe(!1); let { basename: r, navigator: i } = O.useContext(Pr), { hash: t, pathname: s, search: o } = xf(e, { relative: n }), l = s; return r !== "/" && (l = s === "/" ? r : sn([r, s])), i.createHref({ pathname: l, search: o, hash: t }); }
function Cr() { return O.useContext(Ds) != null; }
function In() { return Cr() || fe(!1), O.useContext(Ds).location; }
function zf(e) { O.useContext(Pr).static || O.useLayoutEffect(e); }
function we() { let { isDataRoute: e } = O.useContext(mn); return e ? gw() : nw(); }
function nw() { Cr() || fe(!1); let e = O.useContext(ad), { basename: a, navigator: n } = O.useContext(Pr), { matches: r } = O.useContext(mn), { pathname: i } = In(), t = JSON.stringify(Zu(r).map(l => l.pathnameBase)), s = O.useRef(!1); return zf(() => { s.current = !0; }), O.useCallback(function (l, c) { if (c === void 0 && (c = {}), !s.current)
    return; if (typeof l == "number") {
    n.go(l);
    return;
} let d = ed(l, JSON.parse(t), i, c.relative === "path"); e == null && a !== "/" && (d.pathname = d.pathname === "/" ? a : sn([a, d.pathname])), (c.replace ? n.replace : n.push)(d, c.state, c); }, [a, n, t, i, e]); }
function xf(e, a) { let { relative: n } = a === void 0 ? {} : a, { matches: r } = O.useContext(mn), { pathname: i } = In(), t = JSON.stringify(Zu(r).map(s => s.pathnameBase)); return O.useMemo(() => ed(e, JSON.parse(t), i, n === "path"), [e, t, i, n]); }
function rw(e, a) { return iw(e, a); }
function iw(e, a, n) { Cr() || fe(!1); let { navigator: r } = O.useContext(Pr), { matches: i } = O.useContext(mn), t = i[i.length - 1], s = t ? t.params : {}; t && t.pathname; let o = t ? t.pathnameBase : "/"; t && t.route; let l = In(), c; if (a) {
    var d;
    let v = typeof a == "string" ? Er(a) : a;
    o === "/" || (d = v.pathname) != null && d.startsWith(o) || fe(!1), c = v;
}
else
    c = l; let b = c.pathname || "/", g = o === "/" ? b : b.slice(o.length) || "/", k = T1(e, { pathname: g }), m = cw(k && k.map(v => Object.assign({}, v, { params: Object.assign({}, s, v.params), pathname: sn([o, r.encodeLocation ? r.encodeLocation(v.pathname).pathname : v.pathname]), pathnameBase: v.pathnameBase === "/" ? o : sn([o, r.encodeLocation ? r.encodeLocation(v.pathnameBase).pathname : v.pathnameBase]) })), i, n); return a && m ? O.createElement(Ds.Provider, { value: { location: os({ pathname: "/", search: "", hash: "", state: null, key: "default" }, c), navigationType: Ya.Pop } }, m) : m; }
function tw() { let e = hw(), a = J1(e) ? e.status + " " + e.statusText : e instanceof Error ? e.message : JSON.stringify(e), n = e instanceof Error ? e.stack : null, i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" }, t = null; return O.createElement(O.Fragment, null, O.createElement("h2", null, "Unexpected Application Error!"), O.createElement("h3", { style: { fontStyle: "italic" } }, a), n ? O.createElement("pre", { style: i }, n) : null, t); }
const sw = O.createElement(tw, null);
class ow extends O.Component {
    constructor(a) { super(a), this.state = { location: a.location, revalidation: a.revalidation, error: a.error }; }
    static getDerivedStateFromError(a) { return { error: a }; }
    static getDerivedStateFromProps(a, n) { return n.location !== a.location || n.revalidation !== "idle" && a.revalidation === "idle" ? { error: a.error, location: a.location, revalidation: a.revalidation } : { error: a.error || n.error, location: n.location, revalidation: a.revalidation || n.revalidation }; }
    componentDidCatch(a, n) { console.error("React Router caught the following error during render", a, n); }
    render() { return this.state.error ? O.createElement(mn.Provider, { value: this.props.routeContext }, O.createElement(jf.Provider, { value: this.state.error, children: this.props.component })) : this.props.children; }
}
function lw(e) { let { routeContext: a, match: n, children: r } = e, i = O.useContext(ad); return i && i.static && i.staticContext && (n.route.errorElement || n.route.ErrorBoundary) && (i.staticContext._deepestRenderedBoundaryId = n.route.id), O.createElement(mn.Provider, { value: a }, r); }
function cw(e, a, n) { var r; if (a === void 0 && (a = []), n === void 0 && (n = null), e == null) {
    var i;
    if ((i = n) != null && i.errors)
        e = n.matches;
    else
        return null;
} let t = e, s = (r = n) == null ? void 0 : r.errors; if (s != null) {
    let o = t.findIndex(l => l.route.id && (s == null ? void 0 : s[l.route.id]));
    o >= 0 || fe(!1), t = t.slice(0, Math.min(t.length, o + 1));
} return t.reduceRight((o, l, c) => { let d = l.route.id ? s == null ? void 0 : s[l.route.id] : null, b = null; n && (b = l.route.errorElement || sw); let g = a.concat(t.slice(0, c + 1)), k = () => { let m; return d ? m = b : l.route.Component ? m = O.createElement(l.route.Component, null) : l.route.element ? m = l.route.element : m = o, O.createElement(lw, { match: l, routeContext: { outlet: o, matches: g, isDataRoute: n != null }, children: m }); }; return n && (l.route.ErrorBoundary || l.route.errorElement || c === 0) ? O.createElement(ow, { location: n.location, revalidation: n.revalidation, component: b, error: d, children: k(), routeContext: { outlet: null, matches: g, isDataRoute: !0 } }) : k(); }, null); }
var qf = function (e) { return e.UseBlocker = "useBlocker", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e; }(qf || {}), ls = function (e) { return e.UseBlocker = "useBlocker", e.UseLoaderData = "useLoaderData", e.UseActionData = "useActionData", e.UseRouteError = "useRouteError", e.UseNavigation = "useNavigation", e.UseRouteLoaderData = "useRouteLoaderData", e.UseMatches = "useMatches", e.UseRevalidator = "useRevalidator", e.UseNavigateStable = "useNavigate", e.UseRouteId = "useRouteId", e; }(ls || {});
function uw(e) { let a = O.useContext(ad); return a || fe(!1), a; }
function dw(e) { let a = O.useContext(ew); return a || fe(!1), a; }
function mw(e) { let a = O.useContext(mn); return a || fe(!1), a; }
function _f(e) { let a = mw(), n = a.matches[a.matches.length - 1]; return n.route.id || fe(!1), n.route.id; }
function hw() { var e; let a = O.useContext(jf), n = dw(ls.UseRouteError), r = _f(ls.UseRouteError); return a || ((e = n.errors) == null ? void 0 : e[r]); }
function gw() { let { router: e } = uw(qf.UseNavigateStable), a = _f(ls.UseNavigateStable), n = O.useRef(!1); return zf(() => { n.current = !0; }), O.useCallback(function (i, t) { t === void 0 && (t = {}), n.current && (typeof i == "number" ? e.navigate(i) : e.navigate(i, os({ fromRouteId: a }, t))); }, [e, a]); }
function Wl(e) { let { to: a, replace: n, state: r, relative: i } = e; Cr() || fe(!1); let { matches: t } = O.useContext(mn), { pathname: s } = In(), o = we(), l = ed(a, Zu(t).map(d => d.pathnameBase), s, i === "path"), c = JSON.stringify(l); return O.useEffect(() => o(JSON.parse(c), { replace: n, state: r, relative: i }), [o, c, i, n, r]), null; }
function Je(e) { fe(!1); }
function pw(e) { let { basename: a = "/", children: n = null, location: r, navigationType: i = Ya.Pop, navigator: t, static: s = !1 } = e; Cr() && fe(!1); let o = a.replace(/^\/*/, "/"), l = O.useMemo(() => ({ basename: o, navigator: t, static: s }), [o, t, s]); typeof r == "string" && (r = Er(r)); let { pathname: c = "/", search: d = "", hash: b = "", state: g = null, key: k = "default" } = r, m = O.useMemo(() => { let v = Ju(c, o); return v == null ? null : { location: { pathname: v, search: d, hash: b, state: g, key: k }, navigationType: i }; }, [o, c, d, b, g, k, i]); return m == null ? null : O.createElement(Pr.Provider, { value: l }, O.createElement(Ds.Provider, { children: n, value: m })); }
function fw(e) { let { children: a, location: n } = e; return rw(Hl(a), n); }
new Promise(() => { });
function Hl(e, a) { a === void 0 && (a = []); let n = []; return O.Children.forEach(e, (r, i) => { if (!O.isValidElement(r))
    return; let t = [...a, i]; if (r.type === O.Fragment) {
    n.push.apply(n, Hl(r.props.children, t));
    return;
} r.type !== Je && fe(!1), !r.props.index || !r.props.children || fe(!1); let s = { id: r.props.id || t.join("-"), caseSensitive: r.props.caseSensitive, element: r.props.element, Component: r.props.Component, index: r.props.index, path: r.props.path, loader: r.props.loader, action: r.props.action, errorElement: r.props.errorElement, ErrorBoundary: r.props.ErrorBoundary, hasErrorBoundary: r.props.ErrorBoundary != null || r.props.errorElement != null, shouldRevalidate: r.props.shouldRevalidate, handle: r.props.handle, lazy: r.props.lazy }; r.props.children && (s.children = Hl(r.props.children, t)), n.push(s); }), n; }
function Vl() { return Vl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Vl.apply(this, arguments); }
function bw(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function yw(e) { return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey); }
function kw(e, a) { return e.button === 0 && (!a || a === "_self") && !yw(e); }
const vw = ["onClick", "relative", "reloadDocument", "replace", "state", "target", "to", "preventScrollReset"], ww = "startTransition", Km = Ey[ww];
function jw(e) { let { basename: a, children: n, future: r, window: i } = e, t = O.useRef(); t.current == null && (t.current = E1({ window: i, v5Compat: !0 })); let s = t.current, [o, l] = O.useState({ action: s.action, location: s.location }), { v7_startTransition: c } = r || {}, d = O.useCallback(b => { c && Km ? Km(() => l(b)) : l(b); }, [l, c]); return O.useLayoutEffect(() => s.listen(d), [s, d]), O.createElement(pw, { basename: a, children: n, location: o.location, navigationType: o.action, navigator: s }); }
const zw = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", xw = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i, nd = O.forwardRef(function (a, n) { let { onClick: r, relative: i, reloadDocument: t, replace: s, state: o, target: l, to: c, preventScrollReset: d } = a, b = bw(a, vw), { basename: g } = O.useContext(Pr), k, m = !1; if (typeof c == "string" && xw.test(c) && (k = c, zw))
    try {
        let f = new URL(window.location.href), u = c.startsWith("//") ? new URL(f.protocol + c) : new URL(c), p = Ju(u.pathname, g);
        u.origin === f.origin && p != null ? c = p + u.search + u.hash : m = !0;
    }
    catch (_q) { } let v = aw(c, { relative: i }), j = qw(c, { replace: s, state: o, target: l, preventScrollReset: d, relative: i }); function y(f) { r && r(f), f.defaultPrevented || j(f); } return O.createElement("a", Vl({}, b, { href: k || v, onClick: m || t ? r : y, ref: n, target: l })); });
var Gm;
(function (e) { e.UseScrollRestoration = "useScrollRestoration", e.UseSubmit = "useSubmit", e.UseSubmitFetcher = "useSubmitFetcher", e.UseFetcher = "useFetcher"; })(Gm || (Gm = {}));
var Ym;
(function (e) { e.UseFetchers = "useFetchers", e.UseScrollRestoration = "useScrollRestoration"; })(Ym || (Ym = {}));
function qw(e, a) { let { target: n, replace: r, state: i, preventScrollReset: t, relative: s } = a === void 0 ? {} : a, o = we(), l = In(), c = xf(e, { relative: s }); return O.useCallback(d => { if (kw(d, n)) {
    d.preventDefault();
    let b = r !== void 0 ? r : ss(l) === ss(c);
    o(e, { replace: b, state: i, preventScrollReset: t, relative: s });
} }, [l, o, c, r, i, n, e, t, s]); }
var Sf = { exports: {} }, _w = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED", Sw = _w, Ow = Sw;
function Of() { }
function Ef() { }
Ef.resetWarningCache = Of;
var Ew = function () { function e(r, i, t, s, o, l) { if (l !== Ow) {
    var c = new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");
    throw c.name = "Invariant Violation", c;
} } e.isRequired = e; function a() { return e; } var n = { array: e, bigint: e, bool: e, func: e, number: e, object: e, string: e, symbol: e, any: e, arrayOf: a, element: e, elementType: e, instanceOf: a, node: e, objectOf: a, oneOf: a, oneOfType: a, shape: a, exact: a, checkPropTypes: Ef, resetWarningCache: Of }; return n.PropTypes = n, n; };
Sf.exports = Ew();
var Pw = Sf.exports;
const x = xr(Pw);
var Pf = { exports: {} };
(function (e) { (function () { var a = {}.hasOwnProperty; function n() { for (var r = [], i = 0; i < arguments.length; i++) {
    var t = arguments[i];
    if (t) {
        var s = typeof t;
        if (s === "string" || s === "number")
            r.push(t);
        else if (Array.isArray(t)) {
            if (t.length) {
                var o = n.apply(null, t);
                o && r.push(o);
            }
        }
        else if (s === "object") {
            if (t.toString !== Object.prototype.toString && !t.toString.toString().includes("[native code]")) {
                r.push(t.toString());
                continue;
            }
            for (var l in t)
                a.call(t, l) && t[l] && r.push(l);
        }
    }
} return r.join(" "); } e.exports ? (n.default = n, e.exports = n) : window.classNames = n; })(); })(Pf);
var Cw = Pf.exports;
const X = xr(Cw);
function Pi(e) {
    "@babel/helpers - typeof";
    return Pi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, Pi(e);
}
function Tw() { var e = document.createElement("div"); e.style.position = "absolute", e.style.top = "-9999px", e.style.width = "50px", e.style.height = "50px", e.style.overflow = "scroll", document.body.appendChild(e); var a = e.offsetWidth - e.clientWidth; return document.body.removeChild(e), a; }
function Cf(e) { document.body.style.paddingRight = e > 0 ? "".concat(e, "px") : null; }
function Rw() { return document.body.clientWidth < window.innerWidth; }
function Nw() { var e = window.getComputedStyle(document.body, null); return parseInt(e && e.getPropertyValue("padding-right") || 0, 10); }
function Iw() { var e = Tw(), a = document.querySelectorAll(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top")[0], n = a ? parseInt(a.style.paddingRight || 0, 10) : 0; Rw() && Cf(n + e); }
var Dw;
function H() { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Dw; return a ? e.split(" ").map(function (n) { return a[n] || n; }).join(" ") : e; }
function rd(e, a) { var n = {}; return Object.keys(e).forEach(function (r) { a.indexOf(r) === -1 && (n[r] = e[r]); }), n; }
function Mw(e, a) { for (var n = Array.isArray(a) ? a : [a], r = n.length, i, t = {}; r > 0;)
    r -= 1, i = n[r], t[i] = e[i]; return t; }
var Xm = {};
function Ql(e) { Xm[e] || (typeof console < "u" && console.error(e), Xm[e] = !0); }
function Aw(e, a) {
    return function (r, i, t) {
        r[i] !== null && typeof r[i] < "u" && Ql('"'.concat(i, '" property of "').concat(t, `" has been deprecated.
`).concat(a));
        for (var s = arguments.length, o = new Array(s > 3 ? s - 3 : 0), l = 3; l < s; l++)
            o[l - 3] = arguments[l];
        return e.apply(void 0, [r, i, t].concat(o));
    };
}
var Lw = (typeof window > "u" ? "undefined" : Pi(window)) === "object" && window.Element || function () { };
function Fw(e, a, n) { if (!(e[a] instanceof Lw))
    return new Error("Invalid prop `" + a + "` supplied to `" + n + "`. Expected prop to be an instance of Element. Validation failed."); }
var $w = x.oneOfType([x.string, x.func, Fw, x.shape({ current: x.any })]), te = x.oneOfType([x.func, x.string, x.shape({ $$typeof: x.symbol, render: x.func }), x.arrayOf(x.oneOfType([x.func, x.string, x.shape({ $$typeof: x.symbol, render: x.func })]))]), Kl = { Fade: 150, Collapse: 350, Modal: 300, Carousel: 600, Offcanvas: 300 }, Jm = ["in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited"], J = { esc: 27, space: 32, enter: 13, tab: 9, up: 38, down: 40, home: 36, end: 35, n: 78, p: 80 }, id = !!(typeof window < "u" && window.document && window.document.createElement);
function Uw(e) { return e && Pi(e) === "object" ? "current" in e : !1; }
function Bw(e) { return e == null ? e === void 0 ? "[object Undefined]" : "[object Null]" : Object.prototype.toString.call(e); }
function td(e) { var a = Pi(e); return e != null && (a === "object" || a === "function"); }
function Ww(e) { if (!td(e))
    return !1; var a = Bw(e); return a === "[object Function]" || a === "[object AsyncFunction]" || a === "[object GeneratorFunction]" || a === "[object Proxy]"; }
function Hw(e) { if (Uw(e))
    return e.current; if (Ww(e))
    return e(); if (typeof e == "string" && id) {
    var a = document.querySelectorAll(e);
    if (a.length || (a = document.querySelectorAll("#".concat(e))), !a.length)
        throw new Error("The target '".concat(e, "' could not be identified in the dom, tip: check spelling"));
    return a;
} return e; }
function Zm(e) { return e === null ? !1 : Array.isArray(e) || id && typeof e.length == "number"; }
function Vw(e, a) { var n = Hw(e); return a ? Zm(n) ? n : n === null ? [] : [n] : Zm(n) ? n[0] : n; }
var Qw = ["a[href]", "area[href]", "input:not([disabled]):not([type=hidden])", "select:not([disabled])", "textarea:not([disabled])", "button:not([disabled])", "object", "embed", "[tabindex]:not(.modal):not(.offcanvas)", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'], Kw = ["className", "cssModule", "fluid", "tag"];
function Gl() { return Gl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Gl.apply(this, arguments); }
function Gw(e, a) { if (e == null)
    return {}; var n = Yw(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function Yw(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var Xw = { tag: te, fluid: x.oneOfType([x.bool, x.string]), className: x.string, cssModule: x.object };
function Da(e) { var a = e.className, n = e.cssModule, r = e.fluid, i = e.tag, t = i === void 0 ? "div" : i, s = Gw(e, Kw), o = "container"; r === !0 ? o = "container-fluid" : r && (o = "container-".concat(r)); var l = H(X(a, o), n); return U.createElement(t, Gl({}, s, { className: l })); }
Da.propTypes = Xw;
var Jw = ["className", "cssModule", "noGutters", "tag", "widths"];
function Yl() { return Yl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Yl.apply(this, arguments); }
function Zw(e, a) { if (e == null)
    return {}; var n = e0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function e0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var a0 = ["xs", "sm", "md", "lg", "xl", "xxl"], Ln = x.oneOfType([x.number, x.string]), n0 = { tag: te, noGutters: Aw(x.bool, "Please use Bootstrap 5 gutter utility classes. https://getbootstrap.com/docs/5.0/layout/gutters/"), className: x.string, cssModule: x.object, xs: Ln, sm: Ln, md: Ln, lg: Ln, xl: Ln, xxl: Ln, widths: x.array };
function Y(e) { var a = e.className, n = e.cssModule, r = e.noGutters, i = e.tag, t = i === void 0 ? "div" : i, s = e.widths, o = s === void 0 ? a0 : s, l = Zw(e, Jw), c = []; o.forEach(function (b, g) { var k = e[b]; if (delete l[b], !!k) {
    var m = !g;
    c.push(m ? "row-cols-".concat(k) : "row-cols-".concat(b, "-").concat(k));
} }); var d = H(X(a, r ? "gx-0" : null, "row", c), n); return U.createElement(t, Yl({}, l, { className: d })); }
Y.propTypes = n0;
var r0 = ["className", "cssModule", "widths", "tag"];
function Xl() { return Xl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Xl.apply(this, arguments); }
function i0(e, a) { if (e == null)
    return {}; var n = t0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function t0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function Ro(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
var Tf = ["xs", "sm", "md", "lg", "xl", "xxl"], eh = x.oneOfType([x.number, x.string]), Fn = x.oneOfType([x.bool, x.number, x.string, x.shape({ size: x.oneOfType([x.bool, x.number, x.string]), order: eh, offset: eh })]), s0 = { tag: te, xs: Fn, sm: Fn, md: Fn, lg: Fn, xl: Fn, xxl: Fn, className: x.string, cssModule: x.object, widths: x.array }, ah = function (a, n, r) { return r === !0 || r === "" ? a ? "col" : "col-".concat(n) : r === "auto" ? a ? "col-auto" : "col-".concat(n, "-auto") : a ? "col-".concat(r) : "col-".concat(n, "-").concat(r); }, o0 = function (a, n) { var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : Tf, i = a, t = []; return r.forEach(function (s, o) { var l = i[s]; if (delete i[s], !(!l && l !== "")) {
    var c = !o;
    if (td(l)) {
        var d, b = c ? "-" : "-".concat(s, "-"), g = ah(c, s, l.size);
        t.push(H(X((d = {}, Ro(d, g, l.size || l.size === ""), Ro(d, "order".concat(b).concat(l.order), l.order || l.order === 0), Ro(d, "offset".concat(b).concat(l.offset), l.offset || l.offset === 0), d)), n));
    }
    else {
        var k = ah(c, s, l);
        t.push(k);
    }
} }), { colClasses: t, modifiedAttributes: i }; };
function B(e) { var a = e.className, n = e.cssModule, r = e.widths, i = r === void 0 ? Tf : r, t = e.tag, s = t === void 0 ? "div" : t, o = i0(e, r0), l = o0(o, n, i), c = l.modifiedAttributes, d = l.colClasses; d.length || d.push("col"); var b = H(X(a, d), n); return U.createElement(s, Xl({}, c, { className: b })); }
B.propTypes = s0;
var l0 = ["expand", "className", "cssModule", "light", "dark", "fixed", "sticky", "color", "container", "tag", "children"];
function Jl() { return Jl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Jl.apply(this, arguments); }
function No(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function c0(e, a) { if (e == null)
    return {}; var n = u0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function u0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var d0 = { children: x.node, className: x.string, color: x.string, container: x.oneOfType([x.bool, x.string]), cssModule: x.object, dark: x.bool, expand: x.oneOfType([x.bool, x.string]), fixed: x.string, light: x.bool, role: x.string, sticky: x.string, tag: te }, m0 = function (a) { return a === !1 ? !1 : a === !0 || a === "xs" ? "navbar-expand" : "navbar-expand-".concat(a); };
function Rf(e) { var a, n = e.expand, r = n === void 0 ? !1 : n, i = e.className, t = e.cssModule, s = e.light, o = e.dark, l = e.fixed, c = e.sticky, d = e.color, b = e.container, g = b === void 0 ? "fluid" : b, k = e.tag, m = k === void 0 ? "nav" : k, v = e.children, j = c0(e, l0), y = H(X(i, "navbar", m0(r), (a = { "navbar-light": s, "navbar-dark": o }, No(a, "bg-".concat(d), d), No(a, "fixed-".concat(l), l), No(a, "sticky-".concat(c), c), a)), t), f = g && g === !0 ? "container" : "container-".concat(g); return U.createElement(m, Jl({}, j, { className: y }), g ? U.createElement("div", { className: f }, v) : v); }
Rf.propTypes = d0;
var h0 = ["className", "cssModule", "tag"];
function Zl() { return Zl = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Zl.apply(this, arguments); }
function g0(e, a) { if (e == null)
    return {}; var n = p0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function p0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var f0 = { className: x.string, cssModule: x.object, tag: te };
function Nf(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "a" : r, t = g0(e, h0), s = H(X(a, "navbar-brand"), n); return U.createElement(i, Zl({}, t, { className: s })); }
Nf.propTypes = f0;
var b0 = ["className", "cssModule", "tabs", "pills", "vertical", "horizontal", "justified", "fill", "navbar", "card", "tag"];
function ec() { return ec = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, ec.apply(this, arguments); }
function y0(e, a) { if (e == null)
    return {}; var n = k0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function k0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var v0 = { card: x.bool, className: x.string, cssModule: x.object, fill: x.bool, horizontal: x.oneOf(["center", "end"]), justified: x.bool, navbar: x.bool, pills: x.bool, tabs: x.bool, tag: te, vertical: x.oneOfType([x.bool, x.string]) }, w0 = function (a) { return a === !1 ? !1 : a === !0 || a === "xs" ? "flex-column" : "flex-".concat(a, "-column"); };
function If(e) { var a = e.className, n = e.cssModule, r = e.tabs, i = e.pills, t = e.vertical, s = t === void 0 ? !1 : t, o = e.horizontal, l = e.justified, c = e.fill, d = e.navbar, b = e.card, g = e.tag, k = g === void 0 ? "ul" : g, m = y0(e, b0), v = H(X(a, d ? "navbar-nav" : "nav", o ? "justify-content-".concat(o) : !1, w0(s), { "nav-tabs": r, "card-header-tabs": b && r, "nav-pills": i, "card-header-pills": b && i, "nav-justified": l, "nav-fill": c }), n); return U.createElement(k, ec({}, m, { className: v })); }
If.propTypes = v0;
var j0 = ["className", "cssModule", "active", "tag"];
function ac() { return ac = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, ac.apply(this, arguments); }
function z0(e, a) { if (e == null)
    return {}; var n = x0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function x0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var q0 = { active: x.bool, className: x.string, cssModule: x.object, tag: te };
function Df(e) { var a = e.className, n = e.cssModule, r = e.active, i = e.tag, t = i === void 0 ? "li" : i, s = z0(e, j0), o = H(X(a, "nav-item", r ? "active" : !1), n); return U.createElement(t, ac({}, s, { className: o })); }
Df.propTypes = q0;
var _0 = ["className", "cssModule", "variant", "innerRef"];
function nc() { return nc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, nc.apply(this, arguments); }
function nh(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function S0(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? nh(Object(n), !0).forEach(function (r) { O0(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : nh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function O0(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function E0(e, a) { if (e == null)
    return {}; var n = P0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function P0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var C0 = { active: x.bool, "aria-label": x.string, onClick: x.func, variant: x.oneOf(["white"]), className: x.string, cssModule: x.object, innerRef: x.oneOfType([x.object, x.string, x.func]) };
function Mf(e) { var a = e.className; e.cssModule; var n = e.variant, r = e.innerRef, i = E0(e, _0), t = H(X(a, "btn-close", n && "btn-close-".concat(n))); return U.createElement("button", nc({ ref: r, type: "button", className: t }, S0({ "aria-label": "close" }, i))); }
Mf.propTypes = C0;
var T0 = ["active", "aria-label", "block", "className", "close", "cssModule", "color", "outline", "size", "tag", "innerRef"];
function rc() { return rc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, rc.apply(this, arguments); }
function R0(e, a) { if (e == null)
    return {}; var n = N0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function N0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var I0 = { active: x.bool, "aria-label": x.string, block: x.bool, children: x.node, className: x.string, cssModule: x.object, close: x.bool, color: x.string, disabled: x.bool, innerRef: x.oneOfType([x.object, x.func, x.string]), onClick: x.func, outline: x.bool, size: x.string, tag: te };
function ae(e) { var a = O.useCallback(function (f) { if (e.disabled) {
    f.preventDefault();
    return;
} if (e.onClick)
    return e.onClick(f); }, [e.onClick, e.disabled]), n = e.active, r = e["aria-label"], i = e.block, t = e.className, s = e.close, o = e.cssModule, l = e.color, c = l === void 0 ? "secondary" : l, d = e.outline, b = e.size, g = e.tag, k = g === void 0 ? "button" : g, m = e.innerRef, v = R0(e, T0); if (s)
    return U.createElement(Mf, v); var j = "btn".concat(d ? "-outline" : "", "-").concat(c), y = H(X(t, "btn", j, b ? "btn-".concat(b) : !1, i ? "d-block w-100" : !1, { active: n, disabled: e.disabled }), o); return v.href && k === "button" && (k = "a"), U.createElement(k, rc({ type: k === "button" && v.onClick ? "button" : void 0 }, v, { className: y, ref: m, onClick: a, "aria-label": r })); }
ae.propTypes = I0;
var D0 = O.createContext(), M0 = O.createContext();
function rh(e) { var a = e.children, n = O.useState(null), r = n[0], i = n[1], t = O.useRef(!1); O.useEffect(function () { return function () { t.current = !0; }; }, []); var s = O.useCallback(function (o) { t.current || i(o); }, []); return O.createElement(D0.Provider, { value: r }, O.createElement(M0.Provider, { value: s }, a)); }
var ih = U.createContext({}), Af = U.createContext({});
function ic(e) {
    "@babel/helpers - typeof";
    return ic = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, ic(e);
}
var A0 = ["className", "cssModule", "direction", "isOpen", "group", "size", "nav", "setActiveFromChild", "active", "tag", "menuRole"];
function tc() { return tc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, tc.apply(this, arguments); }
function Fa(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function L0(e, a) { if (e == null)
    return {}; var n = F0(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function F0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function $0(e, a) { if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function"); }
function th(e, a) { for (var n = 0; n < a.length; n++) {
    var r = a[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function U0(e, a, n) { return a && th(e.prototype, a), n && th(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function B0(e, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), a && sc(e, a); }
function sc(e, a) { return sc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, sc(e, a); }
function W0(e) { var a = V0(); return function () { var r = cs(e), i; if (a) {
    var t = cs(this).constructor;
    i = Reflect.construct(r, arguments, t);
}
else
    i = r.apply(this, arguments); return H0(this, i); }; }
function H0(e, a) { if (a && (ic(a) === "object" || typeof a == "function"))
    return a; if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined"); return Ua(e); }
function Ua(e) { if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function V0() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1; if (typeof Proxy == "function")
    return !0; try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
}
catch (_q) {
    return !1;
} }
function cs(e) { return cs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) { return n.__proto__ || Object.getPrototypeOf(n); }, cs(e); }
var Q0 = { a11y: x.bool, disabled: x.bool, direction: x.oneOf(["up", "down", "start", "end", "left", "right"]), group: x.bool, isOpen: x.bool, nav: x.bool, active: x.bool, size: x.string, tag: te, toggle: x.func, children: x.node, className: x.string, cssModule: x.object, dropup: x.bool, inNavbar: x.bool, setActiveFromChild: x.bool, menuRole: x.oneOf(["listbox", "menu"]) }, K0 = { a11y: !0, isOpen: !1, direction: "down", nav: !1, active: !1, inNavbar: !1, setActiveFromChild: !1 }, G0 = [J.space, J.enter, J.up, J.down, J.end, J.home], Ms = function (e) { B0(n, e); var a = W0(n); function n(r) { var i; return $0(this, n), i = a.call(this, r), i.addEvents = i.addEvents.bind(Ua(i)), i.handleDocumentClick = i.handleDocumentClick.bind(Ua(i)), i.handleKeyDown = i.handleKeyDown.bind(Ua(i)), i.removeEvents = i.removeEvents.bind(Ua(i)), i.toggle = i.toggle.bind(Ua(i)), i.handleMenuRef = i.handleMenuRef.bind(Ua(i)), i.handleToggleRef = i.handleToggleRef.bind(Ua(i)), i.containerRef = U.createRef(), i.menuRef = U.createRef(), i.toggleRef = U.createRef(), i; } return U0(n, [{ key: "componentDidMount", value: function () { this.handleProps(); } }, { key: "componentDidUpdate", value: function (i) { this.props.isOpen !== i.isOpen && this.handleProps(); } }, { key: "componentWillUnmount", value: function () { this.removeEvents(); } }, { key: "handleMenuRef", value: function (i) { this.menuRef.current = i; } }, { key: "handleToggleRef", value: function (i) { this.toggleRef.current = i; } }, { key: "handleDocumentClick", value: function (i) { if (!(i && (i.which === 3 || i.type === "keyup" && i.which !== J.tab))) {
            var t = this.getContainer(), s = this.getMenu(), o = this.getToggle(), l = o.contains(i.target), c = s && s.contains(i.target) && s !== i.target, d = !1;
            t && (d = t.classList.contains("input-group") && t.classList.contains("dropdown") && i.target.tagName === "INPUT"), !((l && !d || c) && (i.type !== "keyup" || i.which === J.tab)) && this.toggle(i);
        } } }, { key: "handleKeyDown", value: function (i) { var t = this, s = i.target.getAttribute("role") === "menuitem" || i.target.getAttribute("role") === "option", o = this.getMenuCtrl() === i.target, l = J.tab === i.which; if (!(/input|textarea/i.test(i.target.tagName) || l && !this.props.a11y || l && !(s || o)) && ((G0.indexOf(i.which) !== -1 || i.which >= 48 && i.which <= 90) && i.preventDefault(), !this.props.disabled)) {
            if (o)
                if ([J.space, J.enter, J.up, J.down].indexOf(i.which) > -1)
                    this.props.isOpen || this.toggle(i), setTimeout(function () { var f; return (f = t.getMenuItems()[0]) === null || f === void 0 ? void 0 : f.focus(); });
                else if (this.props.isOpen && l) {
                    var c;
                    i.preventDefault(), (c = this.getMenuItems()[0]) === null || c === void 0 || c.focus();
                }
                else
                    this.props.isOpen && i.which === J.esc && this.toggle(i);
            if (this.props.isOpen && s) {
                if ([J.tab, J.esc].indexOf(i.which) > -1)
                    this.toggle(i), this.getMenuCtrl().focus();
                else if ([J.space, J.enter].indexOf(i.which) > -1)
                    i.target.click(), this.getMenuCtrl().focus();
                else if ([J.down, J.up].indexOf(i.which) > -1 || [J.n, J.p].indexOf(i.which) > -1 && i.ctrlKey) {
                    var d = this.getMenuItems(), b = d.indexOf(i.target);
                    J.up === i.which || J.p === i.which && i.ctrlKey ? b = b !== 0 ? b - 1 : d.length - 1 : (J.down === i.which || J.n === i.which && i.ctrlKey) && (b = b === d.length - 1 ? 0 : b + 1), d[b].focus();
                }
                else if (J.end === i.which) {
                    var g = this.getMenuItems();
                    g[g.length - 1].focus();
                }
                else if (J.home === i.which) {
                    var k = this.getMenuItems();
                    k[0].focus();
                }
                else if (i.which >= 48 && i.which <= 90)
                    for (var m = this.getMenuItems(), v = String.fromCharCode(i.which).toLowerCase(), j = 0; j < m.length; j += 1) {
                        var y = m[j].textContent && m[j].textContent[0].toLowerCase();
                        if (y === v) {
                            m[j].focus();
                            break;
                        }
                    }
            }
        } } }, { key: "handleProps", value: function () { this.props.isOpen ? this.addEvents() : this.removeEvents(); } }, { key: "getContextValue", value: function () { return { toggle: this.toggle, isOpen: this.props.isOpen, direction: this.props.direction === "down" && this.props.dropup ? "up" : this.props.direction, inNavbar: this.props.inNavbar, disabled: this.props.disabled, onMenuRef: this.handleMenuRef, onToggleRef: this.handleToggleRef, menuRole: this.props.menuRole }; } }, { key: "getContainer", value: function () { return this.containerRef.current; } }, { key: "getMenu", value: function () { return this.menuRef.current; } }, { key: "getToggle", value: function () { return this.toggleRef.current; } }, { key: "getMenuCtrl", value: function () { return this._$menuCtrl ? this._$menuCtrl : (this._$menuCtrl = this.getToggle(), this._$menuCtrl); } }, { key: "getItemType", value: function () { return this.props.menuRole === "listbox" ? "option" : "menuitem"; } }, { key: "getMenuItems", value: function () { var i = this.getMenu() || this.getContainer(); return [].slice.call(i.querySelectorAll('[role="'.concat(this.getItemType(), '"]'))); } }, { key: "addEvents", value: function () { var i = this; ["click", "touchstart", "keyup"].forEach(function (t) { return document.addEventListener(t, i.handleDocumentClick, !0); }); } }, { key: "removeEvents", value: function () { var i = this; ["click", "touchstart", "keyup"].forEach(function (t) { return document.removeEventListener(t, i.handleDocumentClick, !0); }); } }, { key: "toggle", value: function (i) { return this.props.disabled ? i && i.preventDefault() : this.props.toggle(i); } }, { key: "render", value: function () { var i, t = this, s = rd(this.props, ["toggle", "disabled", "inNavbar", "a11y"]), o = s.className, l = s.cssModule, c = s.direction, d = s.isOpen, b = s.group, g = s.size, k = s.nav, m = s.setActiveFromChild, v = s.active, j = s.tag; s.menuRole; var y = L0(s, A0), f = j || (k ? "li" : "div"), u = !1; m && U.Children.map(this.props.children[1].props.children, function (w) { w && w.props.active && (u = !0); }); var p = H(X(o, k && v ? "active" : !1, m && u ? "active" : !1, (i = { "btn-group": b }, Fa(i, "btn-group-".concat(g), !!g), Fa(i, "dropdown", !b), Fa(i, "dropup", c === "up"), Fa(i, "dropstart", c === "start" || c === "left"), Fa(i, "dropend", c === "end" || c === "right"), Fa(i, "show", d), Fa(i, "nav-item", k), i)), l); return this.context.insideInputGroup ? U.createElement(ih.Provider, { value: this.getContextValue() }, U.createElement(rh, null, U.Children.map(this.props.children, function (w) { return U.cloneElement(w, { onKeyDown: t.handleKeyDown }); }))) : U.createElement(ih.Provider, { value: this.getContextValue() }, U.createElement(rh, null, U.createElement(f, tc({}, y, Fa({}, typeof f == "string" ? "ref" : "innerRef", this.containerRef), { onKeyDown: this.handleKeyDown, className: p })))); } }]), n; }(U.Component);
Ms.propTypes = Q0;
Ms.defaultProps = K0;
Ms.contextType = Af;
const Y0 = Ms;
function X0(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function oc(e, a) { return oc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, oc(e, a); }
function J0(e, a) { e.prototype = Object.create(a.prototype), e.prototype.constructor = e, oc(e, a); }
const sh = { disabled: !1 }, Lf = U.createContext(null);
var Z0 = function (a) { return a.scrollTop; }, Jr = "unmounted", yn = "exited", kn = "entering", Vn = "entered", lc = "exiting", Aa = function (e) { J0(a, e); function a(r, i) { var t; t = e.call(this, r, i) || this; var s = i, o = s && !s.isMounting ? r.enter : r.appear, l; return t.appearStatus = null, r.in ? o ? (l = yn, t.appearStatus = kn) : l = Vn : r.unmountOnExit || r.mountOnEnter ? l = Jr : l = yn, t.state = { status: l }, t.nextCallback = null, t; } a.getDerivedStateFromProps = function (i, t) { var s = i.in; return s && t.status === Jr ? { status: yn } : null; }; var n = a.prototype; return n.componentDidMount = function () { this.updateStatus(!0, this.appearStatus); }, n.componentDidUpdate = function (i) { var t = null; if (i !== this.props) {
    var s = this.state.status;
    this.props.in ? s !== kn && s !== Vn && (t = kn) : (s === kn || s === Vn) && (t = lc);
} this.updateStatus(!1, t); }, n.componentWillUnmount = function () { this.cancelNextCallback(); }, n.getTimeouts = function () { var i = this.props.timeout, t, s, o; return t = s = o = i, i != null && typeof i != "number" && (t = i.exit, s = i.enter, o = i.appear !== void 0 ? i.appear : s), { exit: t, enter: s, appear: o }; }, n.updateStatus = function (i, t) { if (i === void 0 && (i = !1), t !== null)
    if (this.cancelNextCallback(), t === kn) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
            var s = this.props.nodeRef ? this.props.nodeRef.current : Yr.findDOMNode(this);
            s && Z0(s);
        }
        this.performEnter(i);
    }
    else
        this.performExit();
else
    this.props.unmountOnExit && this.state.status === yn && this.setState({ status: Jr }); }, n.performEnter = function (i) { var t = this, s = this.props.enter, o = this.context ? this.context.isMounting : i, l = this.props.nodeRef ? [o] : [Yr.findDOMNode(this), o], c = l[0], d = l[1], b = this.getTimeouts(), g = o ? b.appear : b.enter; if (!i && !s || sh.disabled) {
    this.safeSetState({ status: Vn }, function () { t.props.onEntered(c); });
    return;
} this.props.onEnter(c, d), this.safeSetState({ status: kn }, function () { t.props.onEntering(c, d), t.onTransitionEnd(g, function () { t.safeSetState({ status: Vn }, function () { t.props.onEntered(c, d); }); }); }); }, n.performExit = function () { var i = this, t = this.props.exit, s = this.getTimeouts(), o = this.props.nodeRef ? void 0 : Yr.findDOMNode(this); if (!t || sh.disabled) {
    this.safeSetState({ status: yn }, function () { i.props.onExited(o); });
    return;
} this.props.onExit(o), this.safeSetState({ status: lc }, function () { i.props.onExiting(o), i.onTransitionEnd(s.exit, function () { i.safeSetState({ status: yn }, function () { i.props.onExited(o); }); }); }); }, n.cancelNextCallback = function () { this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null); }, n.safeSetState = function (i, t) { t = this.setNextCallback(t), this.setState(i, t); }, n.setNextCallback = function (i) { var t = this, s = !0; return this.nextCallback = function (o) { s && (s = !1, t.nextCallback = null, i(o)); }, this.nextCallback.cancel = function () { s = !1; }, this.nextCallback; }, n.onTransitionEnd = function (i, t) { this.setNextCallback(t); var s = this.props.nodeRef ? this.props.nodeRef.current : Yr.findDOMNode(this), o = i == null && !this.props.addEndListener; if (!s || o) {
    setTimeout(this.nextCallback, 0);
    return;
} if (this.props.addEndListener) {
    var l = this.props.nodeRef ? [this.nextCallback] : [s, this.nextCallback], c = l[0], d = l[1];
    this.props.addEndListener(c, d);
} i != null && setTimeout(this.nextCallback, i); }, n.render = function () { var i = this.state.status; if (i === Jr)
    return null; var t = this.props, s = t.children; t.in, t.mountOnEnter, t.unmountOnExit, t.appear, t.enter, t.exit, t.timeout, t.addEndListener, t.onEnter, t.onEntering, t.onEntered, t.onExit, t.onExiting, t.onExited, t.nodeRef; var o = X0(t, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]); return U.createElement(Lf.Provider, { value: null }, typeof s == "function" ? s(i, o) : U.cloneElement(U.Children.only(s), o)); }, a; }(U.Component);
Aa.contextType = Lf;
Aa.propTypes = {};
function $n() { }
Aa.defaultProps = { in: !1, mountOnEnter: !1, unmountOnExit: !1, appear: !1, enter: !0, exit: !0, onEnter: $n, onEntering: $n, onEntered: $n, onExit: $n, onExiting: $n, onExited: $n };
Aa.UNMOUNTED = Jr;
Aa.EXITED = yn;
Aa.ENTERING = kn;
Aa.ENTERED = Vn;
Aa.EXITING = lc;
const sd = Aa;
var e2 = ["tag", "baseClass", "baseClassActive", "className", "cssModule", "children", "innerRef"];
function us() { return us = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, us.apply(this, arguments); }
function a2(e, a) { if (e == null)
    return {}; var n = n2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function n2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function oh(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function Ci(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? oh(Object(n), !0).forEach(function (r) { r2(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : oh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function r2(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
var i2 = Ci(Ci({}, sd.propTypes), {}, { children: x.oneOfType([x.arrayOf(x.node), x.node]), tag: te, baseClass: x.string, baseClassActive: x.string, className: x.string, cssModule: x.object, innerRef: x.oneOfType([x.object, x.string, x.func]) }), Ff = Ci(Ci({}, sd.defaultProps), {}, { timeout: Kl.Fade, appear: !0, enter: !0, exit: !0, in: !0 });
function xn(e) { var a = O.useRef(null), n = e.tag, r = n === void 0 ? "div" : n, i = e.baseClass, t = i === void 0 ? "fade" : i, s = e.baseClassActive, o = s === void 0 ? "show" : s, l = e.className, c = e.cssModule, d = e.children, b = e.innerRef, g = b === void 0 ? a : b, k = a2(e, e2), m = Mw(Ci({ defaultProps: Ff }, k), Jm), v = rd(k, Jm); return U.createElement(sd, us({ nodeRef: g }, m), function (j) { var y = j === "entered", f = H(X(l, t, y && o), c); return U.createElement(r, us({ className: f }, v, { ref: g }), d); }); }
xn.propTypes = i2;
xn.defaultProps = Ff;
var t2 = ["className", "cssModule", "color", "body", "inverse", "outline", "tag", "innerRef"];
function cc() { return cc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, cc.apply(this, arguments); }
function s2(e, a) { if (e == null)
    return {}; var n = o2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function o2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var l2 = { body: x.bool, className: x.string, color: x.string, cssModule: x.object, innerRef: x.oneOfType([x.object, x.string, x.func]), inverse: x.bool, outline: x.bool, tag: te };
function $f(e) { var a = e.className, n = e.cssModule, r = e.color, i = e.body, t = e.inverse, s = e.outline, o = e.tag, l = o === void 0 ? "div" : o, c = e.innerRef, d = s2(e, t2), b = H(X(a, "card", t ? "text-white" : !1, i ? "card-body" : !1, r ? "".concat(s ? "border" : "bg", "-").concat(r) : !1), n); return U.createElement(l, cc({}, d, { className: b, ref: c })); }
$f.propTypes = l2;
var c2 = ["className", "cssModule", "innerRef", "tag"];
function uc() { return uc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, uc.apply(this, arguments); }
function u2(e, a) { if (e == null)
    return {}; var n = d2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function d2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var m2 = { className: x.string, cssModule: x.object, innerRef: x.oneOfType([x.object, x.string, x.func]), tag: te };
function Uf(e) { var a = e.className, n = e.cssModule, r = e.innerRef, i = e.tag, t = i === void 0 ? "div" : i, s = u2(e, c2), o = H(X(a, "card-body"), n); return U.createElement(t, uc({}, s, { className: o, ref: r })); }
Uf.propTypes = m2;
var h2 = ["className", "cssModule", "tag"];
function dc() { return dc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, dc.apply(this, arguments); }
function g2(e, a) { if (e == null)
    return {}; var n = p2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function p2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var f2 = { className: x.string, cssModule: x.object, tag: te };
function Bf(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "div" : r, t = g2(e, h2), s = H(X(a, "card-subtitle"), n); return U.createElement(i, dc({}, t, { className: s })); }
Bf.propTypes = f2;
var b2 = ["className", "cssModule", "tag"];
function mc() { return mc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, mc.apply(this, arguments); }
function y2(e, a) { if (e == null)
    return {}; var n = k2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function k2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var v2 = { className: x.string, cssModule: x.object, tag: te };
function hc(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "p" : r, t = y2(e, b2), s = H(X(a, "card-text"), n); return U.createElement(i, mc({}, t, { className: s })); }
hc.propTypes = v2;
var w2 = ["className", "cssModule", "tag"];
function gc() { return gc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, gc.apply(this, arguments); }
function j2(e, a) { if (e == null)
    return {}; var n = z2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function z2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var x2 = { className: x.string, cssModule: x.object, tag: te };
function Wf(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "div" : r, t = j2(e, w2), s = H(X(a, "card-title"), n); return U.createElement(i, gc({}, t, { className: s })); }
Wf.propTypes = x2;
function pc(e) {
    "@babel/helpers - typeof";
    return pc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, pc(e);
}
function q2(e, a) { if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function"); }
function lh(e, a) { for (var n = 0; n < a.length; n++) {
    var r = a[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function _2(e, a, n) { return a && lh(e.prototype, a), n && lh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function S2(e, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), a && fc(e, a); }
function fc(e, a) { return fc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, fc(e, a); }
function O2(e) { var a = C2(); return function () { var r = ds(e), i; if (a) {
    var t = ds(this).constructor;
    i = Reflect.construct(r, arguments, t);
}
else
    i = r.apply(this, arguments); return E2(this, i); }; }
function E2(e, a) { if (a && (pc(a) === "object" || typeof a == "function"))
    return a; if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined"); return P2(e); }
function P2(e) { if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function C2() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1; if (typeof Proxy == "function")
    return !0; try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
}
catch (_q) {
    return !1;
} }
function ds(e) { return ds = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) { return n.__proto__ || Object.getPrototypeOf(n); }, ds(e); }
var T2 = { children: x.node.isRequired, node: x.any }, Hf = function (e) { S2(n, e); var a = O2(n); function n() { return q2(this, n), a.apply(this, arguments); } return _2(n, [{ key: "componentWillUnmount", value: function () { this.defaultNode && document.body.removeChild(this.defaultNode), this.defaultNode = null; } }, { key: "render", value: function () { return id ? (!this.props.node && !this.defaultNode && (this.defaultNode = document.createElement("div"), document.body.appendChild(this.defaultNode)), Yr.createPortal(this.props.children, this.props.node || this.defaultNode)) : null; } }]), n; }(U.Component);
Hf.propTypes = T2;
const R2 = Hf;
function bc(e) {
    "@babel/helpers - typeof";
    return bc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, bc(e);
}
function ch(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function Un(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? ch(Object(n), !0).forEach(function (r) { Qn(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ch(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function ui() { return ui = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, ui.apply(this, arguments); }
function Qn(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function N2(e, a) { if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function"); }
function uh(e, a) { for (var n = 0; n < a.length; n++) {
    var r = a[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function I2(e, a, n) { return a && uh(e.prototype, a), n && uh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function D2(e, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), a && yc(e, a); }
function yc(e, a) { return yc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, yc(e, a); }
function M2(e) { var a = L2(); return function () { var r = ms(e), i; if (a) {
    var t = ms(this).constructor;
    i = Reflect.construct(r, arguments, t);
}
else
    i = r.apply(this, arguments); return A2(this, i); }; }
function A2(e, a) { if (a && (bc(a) === "object" || typeof a == "function"))
    return a; if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined"); return Ze(e); }
function Ze(e) { if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function L2() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1; if (typeof Proxy == "function")
    return !0; try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
}
catch (_q) {
    return !1;
} }
function ms(e) { return ms = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) { return n.__proto__ || Object.getPrototypeOf(n); }, ms(e); }
function hs() { }
var dh = x.shape(xn.propTypes), Vf = { autoFocus: x.bool, backdrop: x.oneOfType([x.bool, x.oneOf(["static"])]), backdropClassName: x.string, backdropTransition: dh, centered: x.bool, children: x.node, contentClassName: x.string, className: x.string, container: $w, cssModule: x.object, external: x.node, fade: x.bool, fullscreen: x.oneOfType([x.bool, x.oneOf(["sm", "md", "lg", "xl"])]), innerRef: x.oneOfType([x.object, x.string, x.func]), isOpen: x.bool, keyboard: x.bool, labelledBy: x.string, modalClassName: x.string, modalTransition: dh, onClosed: x.func, onEnter: x.func, onExit: x.func, onOpened: x.func, returnFocusAfterClose: x.bool, role: x.string, scrollable: x.bool, size: x.string, toggle: x.func, trapFocus: x.bool, unmountOnClose: x.bool, wrapClassName: x.string, zIndex: x.oneOfType([x.number, x.string]) }, F2 = Object.keys(Vf), $2 = { isOpen: !1, autoFocus: !0, centered: !1, scrollable: !1, role: "dialog", backdrop: !0, keyboard: !0, zIndex: 1050, fade: !0, onOpened: hs, onClosed: hs, modalTransition: { timeout: Kl.Modal }, backdropTransition: { mountOnEnter: !0, timeout: Kl.Fade }, unmountOnClose: !0, returnFocusAfterClose: !0, container: "body", trapFocus: !1 }, Fi = function (e) { D2(n, e); var a = M2(n); function n(r) { var i; return N2(this, n), i = a.call(this, r), i._element = null, i._originalBodyPadding = null, i.getFocusableChildren = i.getFocusableChildren.bind(Ze(i)), i.handleBackdropClick = i.handleBackdropClick.bind(Ze(i)), i.handleBackdropMouseDown = i.handleBackdropMouseDown.bind(Ze(i)), i.handleEscape = i.handleEscape.bind(Ze(i)), i.handleStaticBackdropAnimation = i.handleStaticBackdropAnimation.bind(Ze(i)), i.handleTab = i.handleTab.bind(Ze(i)), i.onOpened = i.onOpened.bind(Ze(i)), i.onClosed = i.onClosed.bind(Ze(i)), i.manageFocusAfterClose = i.manageFocusAfterClose.bind(Ze(i)), i.clearBackdropAnimationTimeout = i.clearBackdropAnimationTimeout.bind(Ze(i)), i.trapFocus = i.trapFocus.bind(Ze(i)), i.state = { isOpen: !1, showStaticBackdropAnimation: !1 }, i; } return I2(n, [{ key: "componentDidMount", value: function () { var i = this.props, t = i.isOpen, s = i.autoFocus, o = i.onEnter; t && (this.init(), this.setState({ isOpen: !0 }), s && this.setFocus()), o && o(), document.addEventListener("focus", this.trapFocus, !0), this._isMounted = !0; } }, { key: "componentDidUpdate", value: function (i, t) { if (this.props.isOpen && !i.isOpen) {
            this.init(), this.setState({ isOpen: !0 });
            return;
        } this.props.autoFocus && this.state.isOpen && !t.isOpen && this.setFocus(), this._element && i.zIndex !== this.props.zIndex && (this._element.style.zIndex = this.props.zIndex); } }, { key: "componentWillUnmount", value: function () { this.clearBackdropAnimationTimeout(), this.props.onExit && this.props.onExit(), this._element && (this.destroy(), (this.props.isOpen || this.state.isOpen) && this.close()), document.removeEventListener("focus", this.trapFocus, !0), this._isMounted = !1; } }, { key: "handleBackdropClick", value: function (i) { if (i.target === this._mouseDownElement) {
            i.stopPropagation();
            var t = this._dialog ? this._dialog.parentNode : null;
            if (t && i.target === t && this.props.backdrop === "static" && this.handleStaticBackdropAnimation(), !this.props.isOpen || this.props.backdrop !== !0)
                return;
            t && i.target === t && this.props.toggle && this.props.toggle(i);
        } } }, { key: "handleTab", value: function (i) { if (i.which === 9 && !(this.modalIndex < n.openCount - 1)) {
            var t = this.getFocusableChildren(), s = t.length;
            if (s !== 0) {
                for (var o = this.getFocusedChild(), l = 0, c = 0; c < s; c += 1)
                    if (t[c] === o) {
                        l = c;
                        break;
                    }
                i.shiftKey && l === 0 ? (i.preventDefault(), t[s - 1].focus()) : !i.shiftKey && l === s - 1 && (i.preventDefault(), t[0].focus());
            }
        } } }, { key: "handleBackdropMouseDown", value: function (i) { this._mouseDownElement = i.target; } }, { key: "handleEscape", value: function (i) { this.props.isOpen && i.keyCode === J.esc && this.props.toggle && (this.props.keyboard ? (i.preventDefault(), i.stopPropagation(), this.props.toggle(i)) : this.props.backdrop === "static" && (i.preventDefault(), i.stopPropagation(), this.handleStaticBackdropAnimation())); } }, { key: "handleStaticBackdropAnimation", value: function () { var i = this; this.clearBackdropAnimationTimeout(), this.setState({ showStaticBackdropAnimation: !0 }), this._backdropAnimationTimeout = setTimeout(function () { i.setState({ showStaticBackdropAnimation: !1 }); }, 100); } }, { key: "onOpened", value: function (i, t) { this.props.onOpened(), (this.props.modalTransition.onEntered || hs)(i, t); } }, { key: "onClosed", value: function (i) { var t = this.props.unmountOnClose; this.props.onClosed(), (this.props.modalTransition.onExited || hs)(i), t && this.destroy(), this.close(), this._isMounted && this.setState({ isOpen: !1 }); } }, { key: "setFocus", value: function () { this._dialog && this._dialog.parentNode && typeof this._dialog.parentNode.focus == "function" && this._dialog.parentNode.focus(); } }, { key: "getFocusableChildren", value: function () { return this._element.querySelectorAll(Qw.join(", ")); } }, { key: "getFocusedChild", value: function () { var i, t = this.getFocusableChildren(); try {
            i = document.activeElement;
        }
        catch (_q) {
            i = t[0];
        } return i; } }, { key: "trapFocus", value: function (i) { if (this.props.trapFocus && this._element && !(this._dialog && this._dialog.parentNode === i.target) && !(this.modalIndex < n.openCount - 1)) {
            for (var t = this.getFocusableChildren(), s = 0; s < t.length; s += 1)
                if (t[s] === i.target)
                    return;
            t.length > 0 && (i.preventDefault(), i.stopPropagation(), t[0].focus());
        } } }, { key: "init", value: function () { try {
            this._triggeringElement = document.activeElement;
        }
        catch (_q) {
            this._triggeringElement = null;
        } this._element || (this._element = document.createElement("div"), this._element.setAttribute("tabindex", "-1"), this._element.style.position = "relative", this._element.style.zIndex = this.props.zIndex, this._mountContainer = Vw(this.props.container), this._mountContainer.appendChild(this._element)), this._originalBodyPadding = Nw(), n.openCount < 1 && (n.originalBodyOverflow = window.getComputedStyle(document.body).overflow), Iw(), n.openCount === 0 && (document.body.className = X(document.body.className, H("modal-open", this.props.cssModule)), document.body.style.overflow = "hidden"), this.modalIndex = n.openCount, n.openCount += 1; } }, { key: "destroy", value: function () { this._element && (this._mountContainer.removeChild(this._element), this._element = null), this.manageFocusAfterClose(); } }, { key: "manageFocusAfterClose", value: function () { if (this._triggeringElement) {
            var i = this.props.returnFocusAfterClose;
            this._triggeringElement.focus && i && this._triggeringElement.focus(), this._triggeringElement = null;
        } } }, { key: "close", value: function () { if (n.openCount <= 1) {
            var i = H("modal-open", this.props.cssModule), t = new RegExp("(^| )".concat(i, "( |$)"));
            document.body.className = document.body.className.replace(t, " ").trim(), document.body.style.overflow = n.originalBodyOverflow;
        } this.manageFocusAfterClose(), n.openCount = Math.max(0, n.openCount - 1), Cf(this._originalBodyPadding); } }, { key: "clearBackdropAnimationTimeout", value: function () { this._backdropAnimationTimeout && (clearTimeout(this._backdropAnimationTimeout), this._backdropAnimationTimeout = void 0); } }, { key: "renderModalDialog", value: function () { var i, t = this, s = rd(this.props, F2), o = "modal-dialog"; return U.createElement("div", ui({}, s, { className: H(X(o, this.props.className, (i = {}, Qn(i, "modal-".concat(this.props.size), this.props.size), Qn(i, "".concat(o, "-centered"), this.props.centered), Qn(i, "".concat(o, "-scrollable"), this.props.scrollable), Qn(i, "modal-fullscreen", this.props.fullscreen === !0), Qn(i, "modal-fullscreen-".concat(this.props.fullscreen, "-down"), typeof this.props.fullscreen == "string"), i)), this.props.cssModule), role: "document", ref: function (c) { t._dialog = c; } }), U.createElement("div", { className: H(X("modal-content", this.props.contentClassName), this.props.cssModule) }, this.props.children)); } }, { key: "render", value: function () { var i = this.props.unmountOnClose; if (this._element && (this.state.isOpen || !i)) {
            var t = !!this._element && !this.state.isOpen && !i;
            this._element.style.display = t ? "none" : "block";
            var s = this.props, o = s.wrapClassName, l = s.modalClassName, c = s.backdropClassName, d = s.cssModule, b = s.isOpen, g = s.backdrop, k = s.role, m = s.labelledBy, v = s.external, j = s.innerRef, y = { onClick: this.handleBackdropClick, onMouseDown: this.handleBackdropMouseDown, onKeyUp: this.handleEscape, onKeyDown: this.handleTab, style: { display: "block" }, "aria-labelledby": m, "aria-modal": !0, role: k, tabIndex: "-1" }, f = this.props.fade, u = Un(Un(Un({}, xn.defaultProps), this.props.modalTransition), {}, { baseClass: f ? this.props.modalTransition.baseClass : "", timeout: f ? this.props.modalTransition.timeout : 0 }), p = Un(Un(Un({}, xn.defaultProps), this.props.backdropTransition), {}, { baseClass: f ? this.props.backdropTransition.baseClass : "", timeout: f ? this.props.backdropTransition.timeout : 0 }), w = g && (f ? U.createElement(xn, ui({}, p, { in: b && !!g, cssModule: d, className: H(X("modal-backdrop", c), d) })) : U.createElement("div", { className: H(X("modal-backdrop", "show", c), d) }));
            return U.createElement(R2, { node: this._element }, U.createElement("div", { className: H(o) }, U.createElement(xn, ui({}, y, u, { in: b, onEntered: this.onOpened, onExited: this.onClosed, cssModule: d, className: H(X("modal", l, this.state.showStaticBackdropAnimation && "modal-static"), d), innerRef: j }), v, this.renderModalDialog()), w));
        } return null; } }]), n; }(U.Component);
Fi.propTypes = Vf;
Fi.defaultProps = $2;
Fi.openCount = 0;
Fi.originalBodyOverflow = null;
const U2 = Fi;
var B2 = ["className", "cssModule", "children", "toggle", "tag", "wrapTag", "closeAriaLabel", "close"];
function kc() { return kc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, kc.apply(this, arguments); }
function W2(e, a) { if (e == null)
    return {}; var n = H2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function H2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var V2 = { children: x.node, className: x.string, close: x.object, closeAriaLabel: x.string, cssModule: x.object, tag: te, toggle: x.func, wrapTag: te };
function Qf(e) { var a, n = e.className, r = e.cssModule, i = e.children, t = e.toggle, s = e.tag, o = s === void 0 ? "h5" : s, l = e.wrapTag, c = l === void 0 ? "div" : l, d = e.closeAriaLabel, b = d === void 0 ? "Close" : d, g = e.close, k = W2(e, B2), m = H(X(n, "modal-header"), r); return !g && t && (a = U.createElement("button", { type: "button", onClick: t, className: H("btn-close", r), "aria-label": b })), U.createElement(c, kc({}, k, { className: m }), U.createElement(o, { className: H("modal-title", r) }, i), g || a); }
Qf.propTypes = V2;
var Q2 = ["className", "cssModule", "tag"];
function vc() { return vc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, vc.apply(this, arguments); }
function K2(e, a) { if (e == null)
    return {}; var n = G2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function G2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var Y2 = { className: x.string, cssModule: x.object, tag: te };
function Kf(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "div" : r, t = K2(e, Q2), s = H(X(a, "modal-body"), n); return U.createElement(i, vc({}, t, { className: s })); }
Kf.propTypes = Y2;
var X2 = ["className", "cssModule", "tag"];
function wc() { return wc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, wc.apply(this, arguments); }
function J2(e, a) { if (e == null)
    return {}; var n = Z2(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function Z2(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var ej = { className: x.string, cssModule: x.object, tag: te };
function Gf(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "div" : r, t = J2(e, X2), s = H(X(a, "modal-footer"), n); return U.createElement(i, wc({}, t, { className: s })); }
Gf.propTypes = ej;
function jc(e) {
    "@babel/helpers - typeof";
    return jc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, jc(e);
}
var aj = ["className", "cssModule", "tag", "innerRef"];
function zc() { return zc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, zc.apply(this, arguments); }
function nj(e, a) { if (e == null)
    return {}; var n = rj(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function rj(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function ij(e, a) { if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function"); }
function mh(e, a) { for (var n = 0; n < a.length; n++) {
    var r = a[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function tj(e, a, n) { return a && mh(e.prototype, a), n && mh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function sj(e, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), a && xc(e, a); }
function xc(e, a) { return xc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, xc(e, a); }
function oj(e) { var a = cj(); return function () { var r = gs(e), i; if (a) {
    var t = gs(this).constructor;
    i = Reflect.construct(r, arguments, t);
}
else
    i = r.apply(this, arguments); return lj(this, i); }; }
function lj(e, a) { if (a && (jc(a) === "object" || typeof a == "function"))
    return a; if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined"); return qc(e); }
function qc(e) { if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function cj() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1; if (typeof Proxy == "function")
    return !0; try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
}
catch (_q) {
    return !1;
} }
function gs(e) { return gs = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) { return n.__proto__ || Object.getPrototypeOf(n); }, gs(e); }
var uj = { children: x.node, tag: te, innerRef: x.oneOfType([x.object, x.func, x.string]), className: x.string, cssModule: x.object }, Yf = function (e) { sj(n, e); var a = oj(n); function n(r) { var i; return ij(this, n), i = a.call(this, r), i.getRef = i.getRef.bind(qc(i)), i.submit = i.submit.bind(qc(i)), i; } return tj(n, [{ key: "getRef", value: function (i) { this.props.innerRef && this.props.innerRef(i), this.ref = i; } }, { key: "submit", value: function () { this.ref && this.ref.submit(); } }, { key: "render", value: function () { var i = this.props, t = i.className, s = i.cssModule, o = i.tag, l = o === void 0 ? "form" : o, c = i.innerRef, d = nj(i, aj), b = H(t, s); return U.createElement(l, zc({}, d, { ref: c, className: b })); } }]), n; }(O.Component);
Yf.propTypes = uj;
const Tr = Yf;
var dj = ["className", "cssModule", "valid", "tooltip", "tag"];
function _c() { return _c = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, _c.apply(this, arguments); }
function mj(e, a) { if (e == null)
    return {}; var n = hj(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function hj(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var gj = { children: x.node, tag: te, className: x.string, cssModule: x.object, valid: x.bool, tooltip: x.bool };
function sr(e) { var a = e.className, n = e.cssModule, r = e.valid, i = r === void 0 ? void 0 : r, t = e.tooltip, s = e.tag, o = s === void 0 ? "div" : s, l = mj(e, dj), c = t ? "tooltip" : "feedback", d = H(X(a, i ? "valid-".concat(c) : "invalid-".concat(c)), n); return U.createElement(o, _c({}, l, { className: d })); }
sr.propTypes = gj;
var pj = ["className", "cssModule", "row", "disabled", "check", "inline", "floating", "tag", "switch"];
function Sc() { return Sc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Sc.apply(this, arguments); }
function fj(e, a) { if (e == null)
    return {}; var n = bj(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function bj(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var yj = { children: x.node, row: x.bool, check: x.bool, switch: x.bool, inline: x.bool, floating: x.bool, disabled: x.bool, tag: te, className: x.string, cssModule: x.object };
function Ie(e) { var a = e.className, n = e.cssModule, r = e.row, i = e.disabled, t = e.check, s = e.inline, o = e.floating, l = e.tag, c = l === void 0 ? "div" : l, d = e.switch, b = fj(e, pj), g = t || d, k = H(X(a, r ? "row" : !1, g ? "form-check" : "mb-3", d ? "form-switch" : !1, g && s ? "form-check-inline" : !1, g && i ? "disabled" : !1, o && "form-floating"), n); return c === "fieldset" && (b.disabled = i), U.createElement(c, Sc({}, b, { className: k })); }
Ie.propTypes = yj;
function Oc(e) {
    "@babel/helpers - typeof";
    return Oc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, Oc(e);
}
var kj = ["className", "cssModule", "type", "bsSize", "valid", "invalid", "tag", "addon", "plaintext", "innerRef"];
function Ec() { return Ec = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Ec.apply(this, arguments); }
function vj(e, a) { if (e == null)
    return {}; var n = wj(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function wj(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
function jj(e, a) { if (!(e instanceof a))
    throw new TypeError("Cannot call a class as a function"); }
function hh(e, a) { for (var n = 0; n < a.length; n++) {
    var r = a[n];
    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
} }
function zj(e, a, n) { return a && hh(e.prototype, a), n && hh(e, n), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function xj(e, a) { if (typeof a != "function" && a !== null)
    throw new TypeError("Super expression must either be null or a function"); e.prototype = Object.create(a && a.prototype, { constructor: { value: e, writable: !0, configurable: !0 } }), Object.defineProperty(e, "prototype", { writable: !1 }), a && Pc(e, a); }
function Pc(e, a) { return Pc = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (r, i) { return r.__proto__ = i, r; }, Pc(e, a); }
function qj(e) { var a = Sj(); return function () { var r = ps(e), i; if (a) {
    var t = ps(this).constructor;
    i = Reflect.construct(r, arguments, t);
}
else
    i = r.apply(this, arguments); return _j(this, i); }; }
function _j(e, a) { if (a && (Oc(a) === "object" || typeof a == "function"))
    return a; if (a !== void 0)
    throw new TypeError("Derived constructors may only return object or undefined"); return Cc(e); }
function Cc(e) { if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function Sj() { if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1; if (typeof Proxy == "function")
    return !0; try {
    return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () { })), !0;
}
catch (_q) {
    return !1;
} }
function ps(e) { return ps = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (n) { return n.__proto__ || Object.getPrototypeOf(n); }, ps(e); }
var Oj = { children: x.node, type: x.string, size: x.oneOfType([x.number, x.string]), bsSize: x.string, valid: x.bool, invalid: x.bool, tag: te, innerRef: x.oneOfType([x.object, x.func, x.string]), plaintext: x.bool, addon: x.bool, className: x.string, cssModule: x.object }, Xf = function (e) { xj(n, e); var a = qj(n); function n(r) { var i; return jj(this, n), i = a.call(this, r), i.getRef = i.getRef.bind(Cc(i)), i.focus = i.focus.bind(Cc(i)), i; } return zj(n, [{ key: "getRef", value: function (i) { this.props.innerRef && this.props.innerRef(i), this.ref = i; } }, { key: "focus", value: function () { this.ref && this.ref.focus(); } }, { key: "render", value: function () { var i = this.props, t = i.className, s = i.cssModule, o = i.type, l = o === void 0 ? "text" : o, c = i.bsSize, d = i.valid, b = i.invalid, g = i.tag, k = i.addon, m = i.plaintext, v = i.innerRef, j = vj(i, kj), y = ["switch", "radio", "checkbox"].indexOf(l) > -1, f = /\D/g, u = l === "textarea", p = l === "select", w = l === "range", z = g || (p || u ? l : "input"), q = "form-control"; m ? (q = "".concat(q, "-plaintext"), z = g || "input") : w ? q = "form-range" : p ? q = "form-select" : y && (k ? q = null : q = "form-check-input"), j.size && f.test(j.size) && (Ql(`Please use the prop "bsSize" instead of the "size" to bootstrap's input sizing.`), c = j.size, delete j.size); var _ = H(X(t, b && "is-invalid", d && "is-valid", c ? p ? "form-select-".concat(c) : "form-control-".concat(c) : !1, q), s); return (z === "input" || g && typeof g == "function") && (j.type = l === "switch" ? "checkbox" : l), j.children && !(m || l === "select" || typeof z != "string" || z === "select") && (Ql('Input with a type of "'.concat(l, '" cannot have children. Please use "value"/"defaultValue" instead.')), delete j.children), U.createElement(z, Ec({}, j, { ref: v, className: _, "aria-invalid": b })); } }]), n; }(U.Component);
Xf.propTypes = Oj;
const oe = Xf;
var Ej = ["className", "cssModule", "tag", "type", "size"];
function fs() { return fs = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, fs.apply(this, arguments); }
function Pj(e, a) { if (e == null)
    return {}; var n = Cj(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function Cj(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var Tj = { className: x.string, cssModule: x.object, size: x.string, tag: te, type: x.string };
function od(e) { var a = e.className, n = e.cssModule, r = e.tag, i = r === void 0 ? "div" : r; e.type; var t = e.size, s = Pj(e, Ej), o = H(X(a, "input-group", t ? "input-group-".concat(t) : null), n); return e.type === "dropdown" ? U.createElement(Y0, fs({}, s, { className: o })) : U.createElement(Af.Provider, { value: { insideInputGroup: !0 } }, U.createElement(i, fs({}, s, { className: o }))); }
od.propTypes = Tj;
var Rj = ["className", "cssModule", "hidden", "widths", "tag", "check", "size", "for"];
function Tc() { return Tc = Object.assign ? Object.assign.bind() : function (e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a];
    for (var r in n)
        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
} return e; }, Tc.apply(this, arguments); }
function Io(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function Nj(e, a) { if (e == null)
    return {}; var n = Ij(e, a), r, i; if (Object.getOwnPropertySymbols) {
    var t = Object.getOwnPropertySymbols(e);
    for (i = 0; i < t.length; i++)
        r = t[i], !(a.indexOf(r) >= 0) && Object.prototype.propertyIsEnumerable.call(e, r) && (n[r] = e[r]);
} return n; }
function Ij(e, a) { if (e == null)
    return {}; var n = {}, r = Object.keys(e), i, t; for (t = 0; t < r.length; t++)
    i = r[t], !(a.indexOf(i) >= 0) && (n[i] = e[i]); return n; }
var Dj = ["xs", "sm", "md", "lg", "xl", "xxl"], Do = x.oneOfType([x.number, x.string]), Bn = x.oneOfType([x.bool, x.string, x.number, x.shape({ size: Do, order: Do, offset: Do })]), Mj = { children: x.node, hidden: x.bool, check: x.bool, size: x.string, for: x.string, tag: te, className: x.string, cssModule: x.object, xs: Bn, sm: Bn, md: Bn, lg: Bn, xl: Bn, xxl: Bn, widths: x.array }, gh = function (a, n, r) { return r === !0 || r === "" ? a ? "col" : "col-".concat(n) : r === "auto" ? a ? "col-auto" : "col-".concat(n, "-auto") : a ? "col-".concat(r) : "col-".concat(n, "-").concat(r); };
function me(e) { var a = e.className, n = e.cssModule, r = e.hidden, i = e.widths, t = i === void 0 ? Dj : i, s = e.tag, o = s === void 0 ? "label" : s, l = e.check, c = e.size, d = e.for, b = Nj(e, Rj), g = []; t.forEach(function (j, y) { var f = e[j]; if (delete b[j], !(!f && f !== "")) {
    var u = !y, p;
    if (td(f)) {
        var w, z = u ? "-" : "-".concat(j, "-");
        p = gh(u, j, f.size), g.push(H(X((w = {}, Io(w, p, f.size || f.size === ""), Io(w, "order".concat(z).concat(f.order), f.order || f.order === 0), Io(w, "offset".concat(z).concat(f.offset), f.offset || f.offset === 0), w))), n);
    }
    else
        p = gh(u, j, f), g.push(p);
} }); var k = c || g.length, m = !(l || k), v = H(X(a, r ? "visually-hidden" : !1, l ? "form-check-label" : !1, c ? "col-form-label-".concat(c) : !1, g, k ? "col-form-label" : !1, m ? "form-label" : !1), n); return U.createElement(o, Tc({ htmlFor: d }, b, { className: v })); }
me.propTypes = Mj;
var Aj = { cm: !0, mm: !0, in: !0, px: !0, pt: !0, pc: !0, em: !0, ex: !0, ch: !0, rem: !0, vw: !0, vh: !0, vmin: !0, vmax: !0, "%": !0 };
function Lj(e) { if (typeof e == "number")
    return { value: e, unit: "px" }; var a, n = (e.match(/^[0-9.]*/) || "").toString(); n.includes(".") ? a = parseFloat(n) : a = parseInt(n, 10); var r = (e.match(/[^0-9]*$/) || "").toString(); return Aj[r] ? { value: a, unit: r } : (console.warn("React Spinners: ".concat(e, " is not a valid css value. Defaulting to ").concat(a, "px.")), { value: a, unit: "px" }); }
function Mo(e) { var a = Lj(e); return "".concat(a.value).concat(a.unit); }
var Fj = function (e, a, n) {
    var r = "react-spinners-".concat(e, "-").concat(n);
    if (typeof window > "u" || !window.document)
        return r;
    var i = document.createElement("style");
    document.head.appendChild(i);
    var t = i.sheet, s = `
    @keyframes `.concat(r, ` {
      `).concat(a, `
    }
  `);
    return t && t.insertRule(s, 0), r;
}, bs = globalThis && globalThis.__assign || function () { return bs = Object.assign || function (e) { for (var a, n = 1, r = arguments.length; n < r; n++) {
    a = arguments[n];
    for (var i in a)
        Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
} return e; }, bs.apply(this, arguments); }, $j = globalThis && globalThis.__rest || function (e, a) { var n = {}; for (var r in e)
    Object.prototype.hasOwnProperty.call(e, r) && a.indexOf(r) < 0 && (n[r] = e[r]); if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var i = 0, r = Object.getOwnPropertySymbols(e); i < r.length; i++)
        a.indexOf(r[i]) < 0 && Object.prototype.propertyIsEnumerable.call(e, r[i]) && (n[r[i]] = e[r[i]]); return n; }, Uj = Fj("BeatLoader", "50% {transform: scale(0.75);opacity: 0.2} 100% {transform: scale(1);opacity: 1}", "beat");
function As(e) { var a = e.loading, n = a === void 0 ? !0 : a, r = e.color, i = r === void 0 ? "#000000" : r, t = e.speedMultiplier, s = t === void 0 ? 1 : t, o = e.cssOverride, l = o === void 0 ? {} : o, c = e.size, d = c === void 0 ? 15 : c, b = e.margin, g = b === void 0 ? 2 : b, k = $j(e, ["loading", "color", "speedMultiplier", "cssOverride", "size", "margin"]), m = bs({ display: "inherit" }, l), v = function (j) { return { display: "inline-block", backgroundColor: i, width: Mo(d), height: Mo(d), margin: Mo(g), borderRadius: "100%", animation: "".concat(Uj, " ").concat(.7 / s, "s ").concat(j % 2 ? "0s" : "".concat(.35 / s, "s"), " infinite linear"), animationFillMode: "both" }; }; return n ? O.createElement("span", bs({ style: m }, k), O.createElement("span", { style: v(1) }), O.createElement("span", { style: v(2) }), O.createElement("span", { style: v(3) })) : null; }
function Jf(e, a) { return function () { return e.apply(a, arguments); }; }
const { toString: Bj } = Object.prototype, { getPrototypeOf: ld } = Object, Ls = (e => a => { const n = Bj.call(a); return e[n] || (e[n] = n.slice(8, -1).toLowerCase()); })(Object.create(null)), za = e => (e = e.toLowerCase(), a => Ls(a) === e), Fs = e => a => typeof a === e, { isArray: Rr } = Array, Ti = Fs("undefined");
function Wj(e) { return e !== null && !Ti(e) && e.constructor !== null && !Ti(e.constructor) && sa(e.constructor.isBuffer) && e.constructor.isBuffer(e); }
const Zf = za("ArrayBuffer");
function Hj(e) { let a; return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? a = ArrayBuffer.isView(e) : a = e && e.buffer && Zf(e.buffer), a; }
const Vj = Fs("string"), sa = Fs("function"), eb = Fs("number"), $s = e => e !== null && typeof e == "object", Qj = e => e === !0 || e === !1, Et = e => { if (Ls(e) !== "object")
    return !1; const a = ld(e); return (a === null || a === Object.prototype || Object.getPrototypeOf(a) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e); }, Kj = za("Date"), Gj = za("File"), Yj = za("Blob"), Xj = za("FileList"), Jj = e => $s(e) && sa(e.pipe), Zj = e => { let a; return e && (typeof FormData == "function" && e instanceof FormData || sa(e.append) && ((a = Ls(e)) === "formdata" || a === "object" && sa(e.toString) && e.toString() === "[object FormData]")); }, ez = za("URLSearchParams"), az = e => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function $i(e, a, { allOwnKeys: n = !1 } = {}) { if (e === null || typeof e > "u")
    return; let r, i; if (typeof e != "object" && (e = [e]), Rr(e))
    for (r = 0, i = e.length; r < i; r++)
        a.call(null, e[r], r, e);
else {
    const t = n ? Object.getOwnPropertyNames(e) : Object.keys(e), s = t.length;
    let o;
    for (r = 0; r < s; r++)
        o = t[r], a.call(null, e[o], o, e);
} }
function ab(e, a) { a = a.toLowerCase(); const n = Object.keys(e); let r = n.length, i; for (; r-- > 0;)
    if (i = n[r], a === i.toLowerCase())
        return i; return null; }
const nb = (() => typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global)(), rb = e => !Ti(e) && e !== nb;
function Rc() { const { caseless: e } = rb(this) && this || {}, a = {}, n = (r, i) => { const t = e && ab(a, i) || i; Et(a[t]) && Et(r) ? a[t] = Rc(a[t], r) : Et(r) ? a[t] = Rc({}, r) : Rr(r) ? a[t] = r.slice() : a[t] = r; }; for (let r = 0, i = arguments.length; r < i; r++)
    arguments[r] && $i(arguments[r], n); return a; }
const nz = (e, a, n, { allOwnKeys: r } = {}) => ($i(a, (i, t) => { n && sa(i) ? e[t] = Jf(i, n) : e[t] = i; }, { allOwnKeys: r }), e), rz = e => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), iz = (e, a, n, r) => { e.prototype = Object.create(a.prototype, r), e.prototype.constructor = e, Object.defineProperty(e, "super", { value: a.prototype }), n && Object.assign(e.prototype, n); }, tz = (e, a, n, r) => { let i, t, s; const o = {}; if (a = a || {}, e == null)
    return a; do {
    for (i = Object.getOwnPropertyNames(e), t = i.length; t-- > 0;)
        s = i[t], (!r || r(s, e, a)) && !o[s] && (a[s] = e[s], o[s] = !0);
    e = n !== !1 && ld(e);
} while (e && (!n || n(e, a)) && e !== Object.prototype); return a; }, sz = (e, a, n) => { e = String(e), (n === void 0 || n > e.length) && (n = e.length), n -= a.length; const r = e.indexOf(a, n); return r !== -1 && r === n; }, oz = e => { if (!e)
    return null; if (Rr(e))
    return e; let a = e.length; if (!eb(a))
    return null; const n = new Array(a); for (; a-- > 0;)
    n[a] = e[a]; return n; }, lz = (e => a => e && a instanceof e)(typeof Uint8Array < "u" && ld(Uint8Array)), cz = (e, a) => { const r = (e && e[Symbol.iterator]).call(e); let i; for (; (i = r.next()) && !i.done;) {
    const t = i.value;
    a.call(e, t[0], t[1]);
} }, uz = (e, a) => { let n; const r = []; for (; (n = e.exec(a)) !== null;)
    r.push(n); return r; }, dz = za("HTMLFormElement"), mz = e => e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (n, r, i) { return r.toUpperCase() + i; }), ph = (({ hasOwnProperty: e }) => (a, n) => e.call(a, n))(Object.prototype), hz = za("RegExp"), ib = (e, a) => { const n = Object.getOwnPropertyDescriptors(e), r = {}; $i(n, (i, t) => { let s; (s = a(i, t, e)) !== !1 && (r[t] = s || i); }), Object.defineProperties(e, r); }, gz = e => { ib(e, (a, n) => { if (sa(e) && ["arguments", "caller", "callee"].indexOf(n) !== -1)
    return !1; const r = e[n]; if (sa(r)) {
    if (a.enumerable = !1, "writable" in a) {
        a.writable = !1;
        return;
    }
    a.set || (a.set = () => { throw Error("Can not rewrite read-only method '" + n + "'"); });
} }); }, pz = (e, a) => { const n = {}, r = i => { i.forEach(t => { n[t] = !0; }); }; return Rr(e) ? r(e) : r(String(e).split(a)), n; }, fz = () => { }, bz = (e, a) => (e = +e, Number.isFinite(e) ? e : a), Ao = "abcdefghijklmnopqrstuvwxyz", fh = "0123456789", tb = { DIGIT: fh, ALPHA: Ao, ALPHA_DIGIT: Ao + Ao.toUpperCase() + fh }, yz = (e = 16, a = tb.ALPHA_DIGIT) => { let n = ""; const { length: r } = a; for (; e--;)
    n += a[Math.random() * r | 0]; return n; };
function kz(e) { return !!(e && sa(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]); }
const vz = e => { const a = new Array(10), n = (r, i) => { if ($s(r)) {
    if (a.indexOf(r) >= 0)
        return;
    if (!("toJSON" in r)) {
        a[i] = r;
        const t = Rr(r) ? [] : {};
        return $i(r, (s, o) => { const l = n(s, i + 1); !Ti(l) && (t[o] = l); }), a[i] = void 0, t;
    }
} return r; }; return n(e, 0); }, wz = za("AsyncFunction"), jz = e => e && ($s(e) || sa(e)) && sa(e.then) && sa(e.catch), R = { isArray: Rr, isArrayBuffer: Zf, isBuffer: Wj, isFormData: Zj, isArrayBufferView: Hj, isString: Vj, isNumber: eb, isBoolean: Qj, isObject: $s, isPlainObject: Et, isUndefined: Ti, isDate: Kj, isFile: Gj, isBlob: Yj, isRegExp: hz, isFunction: sa, isStream: Jj, isURLSearchParams: ez, isTypedArray: lz, isFileList: Xj, forEach: $i, merge: Rc, extend: nz, trim: az, stripBOM: rz, inherits: iz, toFlatObject: tz, kindOf: Ls, kindOfTest: za, endsWith: sz, toArray: oz, forEachEntry: cz, matchAll: uz, isHTMLForm: dz, hasOwnProperty: ph, hasOwnProp: ph, reduceDescriptors: ib, freezeMethods: gz, toObjectSet: pz, toCamelCase: mz, noop: fz, toFiniteNumber: bz, findKey: ab, global: nb, isContextDefined: rb, ALPHABET: tb, generateString: yz, isSpecCompliantForm: kz, toJSONObject: vz, isAsyncFn: wz, isThenable: jz };
function Q(e, a, n, r, i) { Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", a && (this.code = a), n && (this.config = n), r && (this.request = r), i && (this.response = i); }
R.inherits(Q, Error, { toJSON: function () { return { message: this.message, name: this.name, description: this.description, number: this.number, fileName: this.fileName, lineNumber: this.lineNumber, columnNumber: this.columnNumber, stack: this.stack, config: R.toJSONObject(this.config), code: this.code, status: this.response && this.response.status ? this.response.status : null }; } });
const sb = Q.prototype, ob = {};
["ERR_BAD_OPTION_VALUE", "ERR_BAD_OPTION", "ECONNABORTED", "ETIMEDOUT", "ERR_NETWORK", "ERR_FR_TOO_MANY_REDIRECTS", "ERR_DEPRECATED", "ERR_BAD_RESPONSE", "ERR_BAD_REQUEST", "ERR_CANCELED", "ERR_NOT_SUPPORT", "ERR_INVALID_URL"].forEach(e => { ob[e] = { value: e }; });
Object.defineProperties(Q, ob);
Object.defineProperty(sb, "isAxiosError", { value: !0 });
Q.from = (e, a, n, r, i, t) => { const s = Object.create(sb); return R.toFlatObject(e, s, function (l) { return l !== Error.prototype; }, o => o !== "isAxiosError"), Q.call(s, e.message, a, n, r, i), s.cause = e, s.name = e.name, t && Object.assign(s, t), s; };
const zz = null;
function Nc(e) { return R.isPlainObject(e) || R.isArray(e); }
function lb(e) { return R.endsWith(e, "[]") ? e.slice(0, -2) : e; }
function bh(e, a, n) { return e ? e.concat(a).map(function (i, t) { return i = lb(i), !n && t ? "[" + i + "]" : i; }).join(n ? "." : "") : a; }
function xz(e) { return R.isArray(e) && !e.some(Nc); }
const qz = R.toFlatObject(R, {}, null, function (a) { return /^is[A-Z]/.test(a); });
function Us(e, a, n) { if (!R.isObject(e))
    throw new TypeError("target must be an object"); a = a || new FormData, n = R.toFlatObject(n, { metaTokens: !0, dots: !1, indexes: !1 }, !1, function (v, j) { return !R.isUndefined(j[v]); }); const r = n.metaTokens, i = n.visitor || d, t = n.dots, s = n.indexes, l = (n.Blob || typeof Blob < "u" && Blob) && R.isSpecCompliantForm(a); if (!R.isFunction(i))
    throw new TypeError("visitor must be a function"); function c(m) { if (m === null)
    return ""; if (R.isDate(m))
    return m.toISOString(); if (!l && R.isBlob(m))
    throw new Q("Blob is not supported. Use a Buffer instead."); return R.isArrayBuffer(m) || R.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m; } function d(m, v, j) { let y = m; if (m && !j && typeof m == "object") {
    if (R.endsWith(v, "{}"))
        v = r ? v : v.slice(0, -2), m = JSON.stringify(m);
    else if (R.isArray(m) && xz(m) || (R.isFileList(m) || R.endsWith(v, "[]")) && (y = R.toArray(m)))
        return v = lb(v), y.forEach(function (u, p) { !(R.isUndefined(u) || u === null) && a.append(s === !0 ? bh([v], p, t) : s === null ? v : v + "[]", c(u)); }), !1;
} return Nc(m) ? !0 : (a.append(bh(j, v, t), c(m)), !1); } const b = [], g = Object.assign(qz, { defaultVisitor: d, convertValue: c, isVisitable: Nc }); function k(m, v) { if (!R.isUndefined(m)) {
    if (b.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
    b.push(m), R.forEach(m, function (y, f) { (!(R.isUndefined(y) || y === null) && i.call(a, y, R.isString(f) ? f.trim() : f, v, g)) === !0 && k(y, v ? v.concat(f) : [f]); }), b.pop();
} } if (!R.isObject(e))
    throw new TypeError("data must be an object"); return k(e), a; }
function yh(e) { const a = { "!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+", "%00": "\0" }; return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function (r) { return a[r]; }); }
function cd(e, a) { this._pairs = [], e && Us(e, this, a); }
const cb = cd.prototype;
cb.append = function (a, n) { this._pairs.push([a, n]); };
cb.toString = function (a) { const n = a ? function (r) { return a.call(this, r, yh); } : yh; return this._pairs.map(function (i) { return n(i[0]) + "=" + n(i[1]); }, "").join("&"); };
function _z(e) { return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]"); }
function ub(e, a, n) { if (!a)
    return e; const r = n && n.encode || _z, i = n && n.serialize; let t; if (i ? t = i(a, n) : t = R.isURLSearchParams(a) ? a.toString() : new cd(a, n).toString(r), t) {
    const s = e.indexOf("#");
    s !== -1 && (e = e.slice(0, s)), e += (e.indexOf("?") === -1 ? "?" : "&") + t;
} return e; }
class Sz {
    constructor() { this.handlers = []; }
    use(a, n, r) { return this.handlers.push({ fulfilled: a, rejected: n, synchronous: r ? r.synchronous : !1, runWhen: r ? r.runWhen : null }), this.handlers.length - 1; }
    eject(a) { this.handlers[a] && (this.handlers[a] = null); }
    clear() { this.handlers && (this.handlers = []); }
    forEach(a) { R.forEach(this.handlers, function (r) { r !== null && a(r); }); }
}
const kh = Sz, db = { silentJSONParsing: !0, forcedJSONParsing: !0, clarifyTimeoutError: !1 }, Oz = typeof URLSearchParams < "u" ? URLSearchParams : cd, Ez = typeof FormData < "u" ? FormData : null, Pz = typeof Blob < "u" ? Blob : null, Cz = (() => { let e; return typeof navigator < "u" && ((e = navigator.product) === "ReactNative" || e === "NativeScript" || e === "NS") ? !1 : typeof window < "u" && typeof document < "u"; })(), Tz = (() => typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && typeof self.importScripts == "function")(), ka = { isBrowser: !0, classes: { URLSearchParams: Oz, FormData: Ez, Blob: Pz }, isStandardBrowserEnv: Cz, isStandardBrowserWebWorkerEnv: Tz, protocols: ["http", "https", "file", "blob", "url", "data"] };
function Rz(e, a) { return Us(e, new ka.classes.URLSearchParams, Object.assign({ visitor: function (n, r, i, t) { return ka.isNode && R.isBuffer(n) ? (this.append(r, n.toString("base64")), !1) : t.defaultVisitor.apply(this, arguments); } }, a)); }
function Nz(e) { return R.matchAll(/\w+|\[(\w*)]/g, e).map(a => a[0] === "[]" ? "" : a[1] || a[0]); }
function Iz(e) { const a = {}, n = Object.keys(e); let r; const i = n.length; let t; for (r = 0; r < i; r++)
    t = n[r], a[t] = e[t]; return a; }
function mb(e) { function a(n, r, i, t) { let s = n[t++]; const o = Number.isFinite(+s), l = t >= n.length; return s = !s && R.isArray(i) ? i.length : s, l ? (R.hasOwnProp(i, s) ? i[s] = [i[s], r] : i[s] = r, !o) : ((!i[s] || !R.isObject(i[s])) && (i[s] = []), a(n, r, i[s], t) && R.isArray(i[s]) && (i[s] = Iz(i[s])), !o); } if (R.isFormData(e) && R.isFunction(e.entries)) {
    const n = {};
    return R.forEachEntry(e, (r, i) => { a(Nz(r), i, n, 0); }), n;
} return null; }
function Dz(e, a, n) { if (R.isString(e))
    try {
        return (a || JSON.parse)(e), R.trim(e);
    }
    catch (r) {
        if (r.name !== "SyntaxError")
            throw r;
    } return (n || JSON.stringify)(e); }
const ud = { transitional: db, adapter: ["xhr", "http"], transformRequest: [function (a, n) { const r = n.getContentType() || "", i = r.indexOf("application/json") > -1, t = R.isObject(a); if (t && R.isHTMLForm(a) && (a = new FormData(a)), R.isFormData(a))
            return i && i ? JSON.stringify(mb(a)) : a; if (R.isArrayBuffer(a) || R.isBuffer(a) || R.isStream(a) || R.isFile(a) || R.isBlob(a))
            return a; if (R.isArrayBufferView(a))
            return a.buffer; if (R.isURLSearchParams(a))
            return n.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), a.toString(); let o; if (t) {
            if (r.indexOf("application/x-www-form-urlencoded") > -1)
                return Rz(a, this.formSerializer).toString();
            if ((o = R.isFileList(a)) || r.indexOf("multipart/form-data") > -1) {
                const l = this.env && this.env.FormData;
                return Us(o ? { "files[]": a } : a, l && new l, this.formSerializer);
            }
        } return t || i ? (n.setContentType("application/json", !1), Dz(a)) : a; }], transformResponse: [function (a) { const n = this.transitional || ud.transitional, r = n && n.forcedJSONParsing, i = this.responseType === "json"; if (a && R.isString(a) && (r && !this.responseType || i)) {
            const s = !(n && n.silentJSONParsing) && i;
            try {
                return JSON.parse(a);
            }
            catch (o) {
                if (s)
                    throw o.name === "SyntaxError" ? Q.from(o, Q.ERR_BAD_RESPONSE, this, null, this.response) : o;
            }
        } return a; }], timeout: 0, xsrfCookieName: "XSRF-TOKEN", xsrfHeaderName: "X-XSRF-TOKEN", maxContentLength: -1, maxBodyLength: -1, env: { FormData: ka.classes.FormData, Blob: ka.classes.Blob }, validateStatus: function (a) { return a >= 200 && a < 300; }, headers: { common: { Accept: "application/json, text/plain, */*", "Content-Type": void 0 } } };
R.forEach(["delete", "get", "head", "post", "put", "patch"], e => { ud.headers[e] = {}; });
const dd = ud, Mz = R.toObjectSet(["age", "authorization", "content-length", "content-type", "etag", "expires", "from", "host", "if-modified-since", "if-unmodified-since", "last-modified", "location", "max-forwards", "proxy-authorization", "referer", "retry-after", "user-agent"]), Az = e => {
    const a = {};
    let n, r, i;
    return e && e.split(`
`).forEach(function (s) { i = s.indexOf(":"), n = s.substring(0, i).trim().toLowerCase(), r = s.substring(i + 1).trim(), !(!n || a[n] && Mz[n]) && (n === "set-cookie" ? a[n] ? a[n].push(r) : a[n] = [r] : a[n] = a[n] ? a[n] + ", " + r : r); }), a;
}, vh = Symbol("internals");
function Wr(e) { return e && String(e).trim().toLowerCase(); }
function Pt(e) { return e === !1 || e == null ? e : R.isArray(e) ? e.map(Pt) : String(e); }
function Lz(e) { const a = Object.create(null), n = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g; let r; for (; r = n.exec(e);)
    a[r[1]] = r[2]; return a; }
const Fz = e => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Lo(e, a, n, r, i) { if (R.isFunction(r))
    return r.call(this, a, n); if (i && (a = n), !!R.isString(a)) {
    if (R.isString(r))
        return a.indexOf(r) !== -1;
    if (R.isRegExp(r))
        return r.test(a);
} }
function $z(e) { return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (a, n, r) => n.toUpperCase() + r); }
function Uz(e, a) { const n = R.toCamelCase(" " + a); ["get", "set", "has"].forEach(r => { Object.defineProperty(e, r + n, { value: function (i, t, s) { return this[r].call(this, a, i, t, s); }, configurable: !0 }); }); }
class Bs {
    constructor(a) { a && this.set(a); }
    set(a, n, r) { const i = this; function t(o, l, c) { const d = Wr(l); if (!d)
        throw new Error("header name must be a non-empty string"); const b = R.findKey(i, d); (!b || i[b] === void 0 || c === !0 || c === void 0 && i[b] !== !1) && (i[b || l] = Pt(o)); } const s = (o, l) => R.forEach(o, (c, d) => t(c, d, l)); return R.isPlainObject(a) || a instanceof this.constructor ? s(a, n) : R.isString(a) && (a = a.trim()) && !Fz(a) ? s(Az(a), n) : a != null && t(n, a, r), this; }
    get(a, n) { if (a = Wr(a), a) {
        const r = R.findKey(this, a);
        if (r) {
            const i = this[r];
            if (!n)
                return i;
            if (n === !0)
                return Lz(i);
            if (R.isFunction(n))
                return n.call(this, i, r);
            if (R.isRegExp(n))
                return n.exec(i);
            throw new TypeError("parser must be boolean|regexp|function");
        }
    } }
    has(a, n) { if (a = Wr(a), a) {
        const r = R.findKey(this, a);
        return !!(r && this[r] !== void 0 && (!n || Lo(this, this[r], r, n)));
    } return !1; }
    delete(a, n) { const r = this; let i = !1; function t(s) { if (s = Wr(s), s) {
        const o = R.findKey(r, s);
        o && (!n || Lo(r, r[o], o, n)) && (delete r[o], i = !0);
    } } return R.isArray(a) ? a.forEach(t) : t(a), i; }
    clear(a) { const n = Object.keys(this); let r = n.length, i = !1; for (; r--;) {
        const t = n[r];
        (!a || Lo(this, this[t], t, a, !0)) && (delete this[t], i = !0);
    } return i; }
    normalize(a) { const n = this, r = {}; return R.forEach(this, (i, t) => { const s = R.findKey(r, t); if (s) {
        n[s] = Pt(i), delete n[t];
        return;
    } const o = a ? $z(t) : String(t).trim(); o !== t && delete n[t], n[o] = Pt(i), r[o] = !0; }), this; }
    concat(...a) { return this.constructor.concat(this, ...a); }
    toJSON(a) { const n = Object.create(null); return R.forEach(this, (r, i) => { r != null && r !== !1 && (n[i] = a && R.isArray(r) ? r.join(", ") : r); }), n; }
    [Symbol.iterator]() { return Object.entries(this.toJSON())[Symbol.iterator](); }
    toString() {
        return Object.entries(this.toJSON()).map(([a, n]) => a + ": " + n).join(`
`);
    }
    get [Symbol.toStringTag]() { return "AxiosHeaders"; }
    static from(a) { return a instanceof this ? a : new this(a); }
    static concat(a, ...n) { const r = new this(a); return n.forEach(i => r.set(i)), r; }
    static accessor(a) { const r = (this[vh] = this[vh] = { accessors: {} }).accessors, i = this.prototype; function t(s) { const o = Wr(s); r[o] || (Uz(i, s), r[o] = !0); } return R.isArray(a) ? a.forEach(t) : t(a), this; }
}
Bs.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
R.reduceDescriptors(Bs.prototype, ({ value: e }, a) => { let n = a[0].toUpperCase() + a.slice(1); return { get: () => e, set(r) { this[n] = r; } }; });
R.freezeMethods(Bs);
const Ca = Bs;
function Fo(e, a) { const n = this || dd, r = a || n, i = Ca.from(r.headers); let t = r.data; return R.forEach(e, function (o) { t = o.call(n, t, i.normalize(), a ? a.status : void 0); }), i.normalize(), t; }
function hb(e) { return !!(e && e.__CANCEL__); }
function Ui(e, a, n) { Q.call(this, e !== null && e !== void 0 ? e : "canceled", Q.ERR_CANCELED, a, n), this.name = "CanceledError"; }
R.inherits(Ui, Q, { __CANCEL__: !0 });
function Bz(e, a, n) { const r = n.config.validateStatus; !n.status || !r || r(n.status) ? e(n) : a(new Q("Request failed with status code " + n.status, [Q.ERR_BAD_REQUEST, Q.ERR_BAD_RESPONSE][Math.floor(n.status / 100) - 4], n.config, n.request, n)); }
const Wz = ka.isStandardBrowserEnv ? function () { return { write: function (n, r, i, t, s, o) { const l = []; l.push(n + "=" + encodeURIComponent(r)), R.isNumber(i) && l.push("expires=" + new Date(i).toGMTString()), R.isString(t) && l.push("path=" + t), R.isString(s) && l.push("domain=" + s), o === !0 && l.push("secure"), document.cookie = l.join("; "); }, read: function (n) { const r = document.cookie.match(new RegExp("(^|;\\s*)(" + n + ")=([^;]*)")); return r ? decodeURIComponent(r[3]) : null; }, remove: function (n) { this.write(n, "", Date.now() - 864e5); } }; }() : function () { return { write: function () { }, read: function () { return null; }, remove: function () { } }; }();
function Hz(e) { return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e); }
function Vz(e, a) { return a ? e.replace(/\/+$/, "") + "/" + a.replace(/^\/+/, "") : e; }
function gb(e, a) { return e && !Hz(a) ? Vz(e, a) : a; }
const Qz = ka.isStandardBrowserEnv ? function () { const a = /(msie|trident)/i.test(navigator.userAgent), n = document.createElement("a"); let r; function i(t) { let s = t; return a && (n.setAttribute("href", s), s = n.href), n.setAttribute("href", s), { href: n.href, protocol: n.protocol ? n.protocol.replace(/:$/, "") : "", host: n.host, search: n.search ? n.search.replace(/^\?/, "") : "", hash: n.hash ? n.hash.replace(/^#/, "") : "", hostname: n.hostname, port: n.port, pathname: n.pathname.charAt(0) === "/" ? n.pathname : "/" + n.pathname }; } return r = i(window.location.href), function (s) { const o = R.isString(s) ? i(s) : s; return o.protocol === r.protocol && o.host === r.host; }; }() : function () { return function () { return !0; }; }();
function Kz(e) { const a = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e); return a && a[1] || ""; }
function Gz(e, a) { e = e || 10; const n = new Array(e), r = new Array(e); let i = 0, t = 0, s; return a = a !== void 0 ? a : 1e3, function (l) { const c = Date.now(), d = r[t]; s || (s = c), n[i] = l, r[i] = c; let b = t, g = 0; for (; b !== i;)
    g += n[b++], b = b % e; if (i = (i + 1) % e, i === t && (t = (t + 1) % e), c - s < a)
    return; const k = d && c - d; return k ? Math.round(g * 1e3 / k) : void 0; }; }
function wh(e, a) { let n = 0; const r = Gz(50, 250); return i => { const t = i.loaded, s = i.lengthComputable ? i.total : void 0, o = t - n, l = r(o), c = t <= s; n = t; const d = { loaded: t, total: s, progress: s ? t / s : void 0, bytes: o, rate: l || void 0, estimated: l && s && c ? (s - t) / l : void 0, event: i }; d[a ? "download" : "upload"] = !0, e(d); }; }
const Yz = typeof XMLHttpRequest < "u", Xz = Yz && function (e) { return new Promise(function (n, r) { let i = e.data; const t = Ca.from(e.headers).normalize(), s = e.responseType; let o; function l() { e.cancelToken && e.cancelToken.unsubscribe(o), e.signal && e.signal.removeEventListener("abort", o); } let c; R.isFormData(i) && (ka.isStandardBrowserEnv || ka.isStandardBrowserWebWorkerEnv ? t.setContentType(!1) : t.getContentType(/^\s*multipart\/form-data/) ? R.isString(c = t.getContentType()) && t.setContentType(c.replace(/^\s*(multipart\/form-data);+/, "$1")) : t.setContentType("multipart/form-data")); let d = new XMLHttpRequest; if (e.auth) {
    const m = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
    t.set("Authorization", "Basic " + btoa(m + ":" + v));
} const b = gb(e.baseURL, e.url); d.open(e.method.toUpperCase(), ub(b, e.params, e.paramsSerializer), !0), d.timeout = e.timeout; function g() { if (!d)
    return; const m = Ca.from("getAllResponseHeaders" in d && d.getAllResponseHeaders()), j = { data: !s || s === "text" || s === "json" ? d.responseText : d.response, status: d.status, statusText: d.statusText, headers: m, config: e, request: d }; Bz(function (f) { n(f), l(); }, function (f) { r(f), l(); }, j), d = null; } if ("onloadend" in d ? d.onloadend = g : d.onreadystatechange = function () { !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g); }, d.onabort = function () { d && (r(new Q("Request aborted", Q.ECONNABORTED, e, d)), d = null); }, d.onerror = function () { r(new Q("Network Error", Q.ERR_NETWORK, e, d)), d = null; }, d.ontimeout = function () { let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded"; const j = e.transitional || db; e.timeoutErrorMessage && (v = e.timeoutErrorMessage), r(new Q(v, j.clarifyTimeoutError ? Q.ETIMEDOUT : Q.ECONNABORTED, e, d)), d = null; }, ka.isStandardBrowserEnv) {
    const m = (e.withCredentials || Qz(b)) && e.xsrfCookieName && Wz.read(e.xsrfCookieName);
    m && t.set(e.xsrfHeaderName, m);
} i === void 0 && t.setContentType(null), "setRequestHeader" in d && R.forEach(t.toJSON(), function (v, j) { d.setRequestHeader(j, v); }), R.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), s && s !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", wh(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", wh(e.onUploadProgress)), (e.cancelToken || e.signal) && (o = m => { d && (r(!m || m.type ? new Ui(null, e, d) : m), d.abort(), d = null); }, e.cancelToken && e.cancelToken.subscribe(o), e.signal && (e.signal.aborted ? o() : e.signal.addEventListener("abort", o))); const k = Kz(b); if (k && ka.protocols.indexOf(k) === -1) {
    r(new Q("Unsupported protocol " + k + ":", Q.ERR_BAD_REQUEST, e));
    return;
} d.send(i || null); }); }, Ic = { http: zz, xhr: Xz };
R.forEach(Ic, (e, a) => { if (e) {
    try {
        Object.defineProperty(e, "name", { value: a });
    }
    catch (_q) { }
    Object.defineProperty(e, "adapterName", { value: a });
} });
const jh = e => `- ${e}`, Jz = e => R.isFunction(e) || e === null || e === !1, pb = { getAdapter: e => {
        e = R.isArray(e) ? e : [e];
        const { length: a } = e;
        let n, r;
        const i = {};
        for (let t = 0; t < a; t++) {
            n = e[t];
            let s;
            if (r = n, !Jz(n) && (r = Ic[(s = String(n)).toLowerCase()], r === void 0))
                throw new Q(`Unknown adapter '${s}'`);
            if (r)
                break;
            i[s || "#" + t] = r;
        }
        if (!r) {
            const t = Object.entries(i).map(([o, l]) => `adapter ${o} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build"));
            let s = a ? t.length > 1 ? `since :
` + t.map(jh).join(`
`) : " " + jh(t[0]) : "as no adapter specified";
            throw new Q("There is no suitable adapter to dispatch the request " + s, "ERR_NOT_SUPPORT");
        }
        return r;
    }, adapters: Ic };
function $o(e) { if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ui(null, e); }
function zh(e) { return $o(e), e.headers = Ca.from(e.headers), e.data = Fo.call(e, e.transformRequest), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), pb.getAdapter(e.adapter || dd.adapter)(e).then(function (r) { return $o(e), r.data = Fo.call(e, e.transformResponse, r), r.headers = Ca.from(r.headers), r; }, function (r) { return hb(r) || ($o(e), r && r.response && (r.response.data = Fo.call(e, e.transformResponse, r.response), r.response.headers = Ca.from(r.response.headers))), Promise.reject(r); }); }
const xh = e => e instanceof Ca ? e.toJSON() : e;
function zr(e, a) { a = a || {}; const n = {}; function r(c, d, b) { return R.isPlainObject(c) && R.isPlainObject(d) ? R.merge.call({ caseless: b }, c, d) : R.isPlainObject(d) ? R.merge({}, d) : R.isArray(d) ? d.slice() : d; } function i(c, d, b) { if (R.isUndefined(d)) {
    if (!R.isUndefined(c))
        return r(void 0, c, b);
}
else
    return r(c, d, b); } function t(c, d) { if (!R.isUndefined(d))
    return r(void 0, d); } function s(c, d) { if (R.isUndefined(d)) {
    if (!R.isUndefined(c))
        return r(void 0, c);
}
else
    return r(void 0, d); } function o(c, d, b) { if (b in a)
    return r(c, d); if (b in e)
    return r(void 0, c); } const l = { url: t, method: t, data: t, baseURL: s, transformRequest: s, transformResponse: s, paramsSerializer: s, timeout: s, timeoutMessage: s, withCredentials: s, adapter: s, responseType: s, xsrfCookieName: s, xsrfHeaderName: s, onUploadProgress: s, onDownloadProgress: s, decompress: s, maxContentLength: s, maxBodyLength: s, beforeRedirect: s, transport: s, httpAgent: s, httpsAgent: s, cancelToken: s, socketPath: s, responseEncoding: s, validateStatus: o, headers: (c, d) => i(xh(c), xh(d), !0) }; return R.forEach(Object.keys(Object.assign({}, e, a)), function (d) { const b = l[d] || i, g = b(e[d], a[d], d); R.isUndefined(g) && b !== o || (n[d] = g); }), n; }
const fb = "1.5.1", md = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, a) => { md[e] = function (r) { return typeof r === e || "a" + (a < 1 ? "n " : " ") + e; }; });
const qh = {};
md.transitional = function (a, n, r) { function i(t, s) { return "[Axios v" + fb + "] Transitional option '" + t + "'" + s + (r ? ". " + r : ""); } return (t, s, o) => { if (a === !1)
    throw new Q(i(s, " has been removed" + (n ? " in " + n : "")), Q.ERR_DEPRECATED); return n && !qh[s] && (qh[s] = !0, console.warn(i(s, " has been deprecated since v" + n + " and will be removed in the near future"))), a ? a(t, s, o) : !0; }; };
function Zz(e, a, n) { if (typeof e != "object")
    throw new Q("options must be an object", Q.ERR_BAD_OPTION_VALUE); const r = Object.keys(e); let i = r.length; for (; i-- > 0;) {
    const t = r[i], s = a[t];
    if (s) {
        const o = e[t], l = o === void 0 || s(o, t, e);
        if (l !== !0)
            throw new Q("option " + t + " must be " + l, Q.ERR_BAD_OPTION_VALUE);
        continue;
    }
    if (n !== !0)
        throw new Q("Unknown option " + t, Q.ERR_BAD_OPTION);
} }
const Dc = { assertOptions: Zz, validators: md }, $a = Dc.validators;
class ys {
    constructor(a) { this.defaults = a, this.interceptors = { request: new kh, response: new kh }; }
    request(a, n) { typeof a == "string" ? (n = n || {}, n.url = a) : n = a || {}, n = zr(this.defaults, n); const { transitional: r, paramsSerializer: i, headers: t } = n; r !== void 0 && Dc.assertOptions(r, { silentJSONParsing: $a.transitional($a.boolean), forcedJSONParsing: $a.transitional($a.boolean), clarifyTimeoutError: $a.transitional($a.boolean) }, !1), i != null && (R.isFunction(i) ? n.paramsSerializer = { serialize: i } : Dc.assertOptions(i, { encode: $a.function, serialize: $a.function }, !0)), n.method = (n.method || this.defaults.method || "get").toLowerCase(); let s = t && R.merge(t.common, t[n.method]); t && R.forEach(["delete", "get", "head", "post", "put", "patch", "common"], m => { delete t[m]; }), n.headers = Ca.concat(s, t); const o = []; let l = !0; this.interceptors.request.forEach(function (v) { typeof v.runWhen == "function" && v.runWhen(n) === !1 || (l = l && v.synchronous, o.unshift(v.fulfilled, v.rejected)); }); const c = []; this.interceptors.response.forEach(function (v) { c.push(v.fulfilled, v.rejected); }); let d, b = 0, g; if (!l) {
        const m = [zh.bind(this), void 0];
        for (m.unshift.apply(m, o), m.push.apply(m, c), g = m.length, d = Promise.resolve(n); b < g;)
            d = d.then(m[b++], m[b++]);
        return d;
    } g = o.length; let k = n; for (b = 0; b < g;) {
        const m = o[b++], v = o[b++];
        try {
            k = m(k);
        }
        catch (j) {
            v.call(this, j);
            break;
        }
    } try {
        d = zh.call(this, k);
    }
    catch (m) {
        return Promise.reject(m);
    } for (b = 0, g = c.length; b < g;)
        d = d.then(c[b++], c[b++]); return d; }
    getUri(a) { a = zr(this.defaults, a); const n = gb(a.baseURL, a.url); return ub(n, a.params, a.paramsSerializer); }
}
R.forEach(["delete", "get", "head", "options"], function (a) { ys.prototype[a] = function (n, r) { return this.request(zr(r || {}, { method: a, url: n, data: (r || {}).data })); }; });
R.forEach(["post", "put", "patch"], function (a) { function n(r) { return function (t, s, o) { return this.request(zr(o || {}, { method: a, headers: r ? { "Content-Type": "multipart/form-data" } : {}, url: t, data: s })); }; } ys.prototype[a] = n(), ys.prototype[a + "Form"] = n(!0); });
const Ct = ys;
class hd {
    constructor(a) { if (typeof a != "function")
        throw new TypeError("executor must be a function."); let n; this.promise = new Promise(function (t) { n = t; }); const r = this; this.promise.then(i => { if (!r._listeners)
        return; let t = r._listeners.length; for (; t-- > 0;)
        r._listeners[t](i); r._listeners = null; }), this.promise.then = i => { let t; const s = new Promise(o => { r.subscribe(o), t = o; }).then(i); return s.cancel = function () { r.unsubscribe(t); }, s; }, a(function (t, s, o) { r.reason || (r.reason = new Ui(t, s, o), n(r.reason)); }); }
    throwIfRequested() { if (this.reason)
        throw this.reason; }
    subscribe(a) { if (this.reason) {
        a(this.reason);
        return;
    } this._listeners ? this._listeners.push(a) : this._listeners = [a]; }
    unsubscribe(a) { if (!this._listeners)
        return; const n = this._listeners.indexOf(a); n !== -1 && this._listeners.splice(n, 1); }
    static source() { let a; return { token: new hd(function (i) { a = i; }), cancel: a }; }
}
const e3 = hd;
function a3(e) { return function (n) { return e.apply(null, n); }; }
function n3(e) { return R.isObject(e) && e.isAxiosError === !0; }
const Mc = { Continue: 100, SwitchingProtocols: 101, Processing: 102, EarlyHints: 103, Ok: 200, Created: 201, Accepted: 202, NonAuthoritativeInformation: 203, NoContent: 204, ResetContent: 205, PartialContent: 206, MultiStatus: 207, AlreadyReported: 208, ImUsed: 226, MultipleChoices: 300, MovedPermanently: 301, Found: 302, SeeOther: 303, NotModified: 304, UseProxy: 305, Unused: 306, TemporaryRedirect: 307, PermanentRedirect: 308, BadRequest: 400, Unauthorized: 401, PaymentRequired: 402, Forbidden: 403, NotFound: 404, MethodNotAllowed: 405, NotAcceptable: 406, ProxyAuthenticationRequired: 407, RequestTimeout: 408, Conflict: 409, Gone: 410, LengthRequired: 411, PreconditionFailed: 412, PayloadTooLarge: 413, UriTooLong: 414, UnsupportedMediaType: 415, RangeNotSatisfiable: 416, ExpectationFailed: 417, ImATeapot: 418, MisdirectedRequest: 421, UnprocessableEntity: 422, Locked: 423, FailedDependency: 424, TooEarly: 425, UpgradeRequired: 426, PreconditionRequired: 428, TooManyRequests: 429, RequestHeaderFieldsTooLarge: 431, UnavailableForLegalReasons: 451, InternalServerError: 500, NotImplemented: 501, BadGateway: 502, ServiceUnavailable: 503, GatewayTimeout: 504, HttpVersionNotSupported: 505, VariantAlsoNegotiates: 506, InsufficientStorage: 507, LoopDetected: 508, NotExtended: 510, NetworkAuthenticationRequired: 511 };
Object.entries(Mc).forEach(([e, a]) => { Mc[a] = e; });
const r3 = Mc;
function bb(e) { const a = new Ct(e), n = Jf(Ct.prototype.request, a); return R.extend(n, Ct.prototype, a, { allOwnKeys: !0 }), R.extend(n, a, null, { allOwnKeys: !0 }), n.create = function (i) { return bb(zr(e, i)); }, n; }
const ye = bb(dd);
ye.Axios = Ct;
ye.CanceledError = Ui;
ye.CancelToken = e3;
ye.isCancel = hb;
ye.VERSION = fb;
ye.toFormData = Us;
ye.AxiosError = Q;
ye.Cancel = ye.CanceledError;
ye.all = function (a) { return Promise.all(a); };
ye.spread = a3;
ye.isAxiosError = n3;
ye.mergeConfig = zr;
ye.AxiosHeaders = Ca;
ye.formToJSON = e => mb(R.isHTMLForm(e) ? new FormData(e) : e);
ye.getAdapter = pb.getAdapter;
ye.HttpStatusCode = r3;
ye.default = ye;
const hn = ye;
class gn {
    constructor(a) { Mn(this, "protocol"); Mn(this, "domain"); Mn(this, "port"); Mn(this, "routePrefix"); Mn(this, "rootRoute"); this.rootRoute = a, this.routePrefix = "/api/client", this.protocol = "http", this.port = "8000", this.domain = "localhost"; }
    get fetchingUrl() { return `${this.protocol}://${this.domain}:${this.port}${this.routePrefix}`; }
    get fetchingUrlWithRoute() { return `${this.protocol}://${this.domain}:${this.port}${this.routePrefix}${this.rootRoute}`; }
    get route() { return this.rootRoute; }
}
const i3 = new gn("/categories"), t3 = hn.create();
function s3() {
    return __awaiter(this, void 0, void 0, function* () { return (yield t3.get(i3.fetchingUrlWithRoute)).data; });
}
const yb = new gn("/home"), o3 = hn.create({ baseURL: yb.fetchingUrl });
function l3() {
    return __awaiter(this, void 0, void 0, function* () { return (yield o3.get(yb.route)).data; });
}
const gd = new gn("/productsList"), kb = hn.create({ baseURL: gd.fetchingUrl });
function _h(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield kb.get(`${gd.route}?category=${e}`)).data; });
}
function c3(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield kb.get(`${gd.route}?search=${e}`)).data; });
}
const vb = new gn("/userRegistration"), u3 = hn.create({ baseURL: vb.fetchingUrl });
function d3(e) {
    return __awaiter(this, void 0, void 0, function* () { u3.post(vb.route, e); });
}
const wb = new gn("/payresume"), jb = hn.create();
function m3(e) {
    return __awaiter(this, void 0, void 0, function* () { const a = e.cartList.map(i => ({ productId: i.id, quantity: i.quantity })), n = { userId: e.userId, orderId: e.orderId, currency: e.currency, productsList: a }, r = yield jb.post(wb.fetchingUrlWithRoute, n); return Object.assign(Object.assign({}, r.data), { fetchStatus: r.status }); });
}
function h3(e) {
    return __awaiter(this, void 0, void 0, function* () { const a = e.cartList.map(i => ({ productId: i.id, quantity: i.quantity })), n = { userId: e.userId, orderId: e.orderId, currency: e.currency, productsList: a }, r = yield jb.put(wb.fetchingUrlWithRoute, n); return Object.assign(Object.assign({}, r.data), { fetchStatus: r.status }); });
}
const g3 = { state: [], dispatch: () => { } }, Nr = O.createContext(g3);
function p3(e, a) { const n = a.type === "CART_REDUCER-add-product" || a.type === "CART_REDUCER-remove-product" || a.type === "CART_REDUCER-substract-product" ? structuredClone(e) : [], { type: r, payload: i } = a; switch (n.push(), r) {
    case "CART_REDUCER-add-product":
        if (e.length === 0)
            n.push(i);
        else {
            const t = e.findIndex(s => s.id === i.id);
            t !== -1 ? n[t].quantity += 1 : n == null || n.push(i);
        }
        break;
    case "CART_REDUCER-substract-product":
        if (e.length !== 0) {
            const t = e.findIndex(s => s.id === i.id);
            if (t !== -1)
                if (n[t].quantity > 1)
                    n[t].quantity -= 1;
                else
                    return n == null ? void 0 : n.filter(s => s.id !== i.id);
        }
        else
            return e;
        break;
    case "CART_REDUCER-remove-product": return n == null ? void 0 : n.filter(t => t.id !== i.id);
    case "CART_REDUCER-clear-list": return [];
    default: return e;
} return n; }
function f3({ children: e }) { const a = [], [n, r] = O.useReducer(p3, a); return h.jsx(Nr.Provider, { value: { state: n, dispatch: r }, children: e }); }
const b3 = { errorState: !1, setErrorState: () => { } }, xa = O.createContext(b3);
function y3({ children: e }) { const [a, n] = O.useState(!1); return h.jsx(xa.Provider, { value: { errorState: a, setErrorState: n }, children: e }); }
const Bi = O.createContext({});
function k3(e, a) { var _q, _5; const { type: n, payload: r } = a, i = (_q = (r == null ? void 0 : r.token)) !== null && _q !== void 0 ? _q : "", t = (_5 = (r == null ? void 0 : r.isLogged)) !== null && _5 !== void 0 ? _5 : !1, s = () => { const l = localStorage.getItem("userInfo"), c = l !== null && l !== void 0 ? l : JSON.stringify({ token: i, isLogged: t }); return l || localStorage.setItem("userInfo", c), JSON.parse(c); }, o = (l, c) => { const d = { token: l !== null && l !== void 0 ? l : "", isLogged: c !== null && c !== void 0 ? c : !1 }; return localStorage.setItem("userInfo", JSON.stringify(d)), d; }; switch (n) {
    case "USER_INFO-get-local-info": return s();
    case "USER_INFO-set-local-info-not-logged": return o(i, !1);
    case "USER_INFO-set-local-info-logged": return o(i, !0);
    default: return e;
} }
const v3 = () => { const e = localStorage.getItem("userInfo"), a = e !== null && e !== void 0 ? e : JSON.stringify({ token: "no-user", isLogged: !1 }); return e || localStorage.setItem("userInfo", a), JSON.parse(a); };
function w3({ children: e }) { const [a, n] = O.useReducer(k3, v3()); return h.jsx(Bi.Provider, { value: { state: a, dispatch: n }, children: e }); }
const zb = O.createContext(void 0);
let ut;
const j3 = new Uint8Array(16);
function z3() { if (!ut && (ut = typeof crypto < "u" && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !ut))
    throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"); return ut(j3); }
const qe = [];
for (let e = 0; e < 256; ++e)
    qe.push((e + 256).toString(16).slice(1));
function x3(e, a = 0) { return qe[e[a + 0]] + qe[e[a + 1]] + qe[e[a + 2]] + qe[e[a + 3]] + "-" + qe[e[a + 4]] + qe[e[a + 5]] + "-" + qe[e[a + 6]] + qe[e[a + 7]] + "-" + qe[e[a + 8]] + qe[e[a + 9]] + "-" + qe[e[a + 10]] + qe[e[a + 11]] + qe[e[a + 12]] + qe[e[a + 13]] + qe[e[a + 14]] + qe[e[a + 15]]; }
const q3 = typeof crypto < "u" && crypto.randomUUID && crypto.randomUUID.bind(crypto), Sh = { randomUUID: q3 };
function _3(e, a, n) { if (Sh.randomUUID && !a && !e)
    return Sh.randomUUID(); e = e || {}; const r = e.random || (e.rng || z3)(); if (r[6] = r[6] & 15 | 64, r[8] = r[8] & 63 | 128, a) {
    n = n || 0;
    for (let i = 0; i < 16; ++i)
        a[n + i] = r[i];
    return a;
} return x3(r); }
const Uo = "order-info";
function dt({ children: e }) { const [a, n] = O.useState(() => localStorage.getItem(Uo)), r = () => { const o = _3(); return localStorage.setItem(Uo, o), n(o), o; }, i = () => a, t = () => { localStorage.removeItem(Uo), n(null); }, s = O.useMemo(() => ({ getOrderId: i, setNewOrderId: r, deleteOrderId: t }), [a]); return h.jsx(zb.Provider, { value: s, children: e }); }
const S3 = "/productsList";
function xb() { const { setErrorState: e } = O.useContext(xa), { data: a, isLoading: n, isError: r, error: i } = Nn({ queryKey: ["categories"], queryFn: s3 }), t = we(), s = o => { t(S3, { state: { category: o } }); }; return n ? h.jsx(As, { size: 10 }) : r ? (console.warn(`Ocurrio error home fetch, Error: ${i.code}`), e(!0), h.jsx("div", { children: "..." })) : h.jsx(If, { fill: !0, className: "bg-secondary", children: a.map(o => h.jsx(Df, { children: h.jsx(ae, { className: "btn color-secondary", onClick: () => s(o.id), children: o.name }) }, o.id)) }); }
function O3(e) { const { onCancelNavigateTo: a, onConfirm: n, isPasswordError: r } = e, i = we(), t = l => { l.preventDefault(); const c = l.currentTarget.elements[0].value, d = l.currentTarget.elements[1].value; n(c, d); }, s = l => { l.preventDefault(), i(a); }, o = l => { l.preventDefault(), i("/userRegistration"); }; return h.jsxs("div", { className: "p-3 shadow", style: { maxWidth: "500px", minWidth: "360px" }, children: [h.jsxs(Tr, { onSubmit: t, children: [h.jsx("legend", { className: "display-4", children: "Inicie Sesión" }), h.jsx("br", {}), h.jsxs(Ie, { children: [h.jsx(me, { for: "user", children: "Usuario" }), h.jsx(oe, { id: "user", type: "email", placeholder: "pedroperez@micompñia.com.ve" })] }), h.jsxs(Ie, { children: [h.jsx(me, { for: "password", children: "Contraseña" }), h.jsx(oe, { id: "password", type: "password", invalid: r }), h.jsx(sr, { children: "Hay algún problema con el usuario o la contraseña" })] }), h.jsxs("div", { className: "d-flex justify-content-end gap-3 w-100", children: [h.jsx(ae, { onClick: s, color: "primary", outline: !0, children: "Cancelar" }), h.jsx(ae, { onClick: o, color: "secondary", children: "Registrar" }), h.jsx(ae, { color: "primary", children: "Entrar" })] })] }), h.jsx("br", {}), h.jsx("div", { className: "d-flex justify-content-center w-100", children: h.jsxs("p", { children: [h.jsx(nd, { to: "/forgetPassword", children: "Restablecer" }), "  su contraseña"] }) })] }); }
function E3(e) { const { onCancelNavigateTo: a, onConfirm: n } = e, r = we(), i = t => { t.preventDefault(); const s = t.currentTarget[0].value; n(s); }; return h.jsx("div", { className: "p-3 shadow", style: { minWidth: "360px", maxWidth: "600px" }, children: h.jsxs(Tr, { onSubmit: i, children: [h.jsx("legend", { className: "display-4", children: "Olvidé mi Contraseña" }), h.jsx("br", {}), h.jsx("p", { children: "Puede modificar la dirección para recibir su pedido" }), h.jsx(Y, { children: h.jsxs(Ie, { children: [h.jsx(me, { children: "Dirección de correo electrónico" }), h.jsx(oe, { type: "email", placeholder: "pedroperez@email.com.ve" })] }) }), h.jsxs(Y, { children: [h.jsx(B, { sm: { size: 3, offset: 6 }, children: h.jsx(ae, { onClick: () => r(a), color: "primary", outline: !0, style: { width: "100%" }, children: "Cancelar" }) }), h.jsx(B, { sm: { size: 3 }, children: h.jsx(ae, { color: "primary", style: { width: "100%" }, children: "Confirmar" }) })] })] }) }); }
const P3 = "Ingrese la dirección donde desea recibir su pedido.";
function C3(e) { const { onCancelNavigateTo: a, onConfirm: n, currentAddress: r = "" } = e, [i, t] = O.useState(r), s = we(), o = c => { c.preventDefault(); const d = c.currentTarget[0].value; n(d); }, l = c => { t(c.target.value); }; return h.jsx("div", { className: "p-3 shadow", style: { minWidth: "360px", maxWidth: "600px" }, children: h.jsxs(Tr, { onSubmit: o, children: [h.jsx("legend", { className: "display-4", children: "Confirme su dirección" }), h.jsx("br", {}), h.jsx("p", { children: "Puede modificar la dirección para recibir su pedido" }), h.jsx(Y, { children: h.jsxs(Ie, { children: [h.jsx(me, { children: "Dirección de Entrega" }), h.jsx(oe, { type: "textarea", value: i, onChange: l, placeholder: i.length <= 0 ? P3 : void 0 })] }) }), h.jsx(Y, { children: h.jsxs("p", { children: [h.jsx("strong", { className: "text-decoration-underline text-danger", children: "Importante:" }), " Flete con cobro en destino."] }) }), h.jsxs(Y, { children: [h.jsx(B, { sm: { size: 3, offset: 6 }, children: h.jsx(ae, { onClick: () => s(a), color: "primary", outline: !0, style: { width: "100%" }, children: "Cancelar" }) }), h.jsx(B, { sm: { size: 3 }, children: h.jsx(ae, { color: "primary", style: { width: "100%" }, children: "Confirmar" }) })] })] }) }); }
var qb;
var T3 = qb, _b;
_b = { qwerty: { "!": ["`~", null, null, "2@", "qQ", null], '"': [";:", "[{", "]}", null, null, "/?"], "#": ["2@", null, null, "4$", "eE", "wW"], $: ["3#", null, null, "5%", "rR", "eE"], "%": ["4$", null, null, "6^", "tT", "rR"], "&": ["6^", null, null, "8*", "uU", "yY"], "'": [";:", "[{", "]}", null, null, "/?"], "(": ["8*", null, null, "0)", "oO", "iI"], ")": ["9(", null, null, "-_", "pP", "oO"], "*": ["7&", null, null, "9(", "iI", "uU"], "+": ["-_", null, null, null, "]}", "[{"], ",": ["mM", "kK", "lL", ".>", null, null], "-": ["0)", null, null, "=+", "[{", "pP"], ".": [",<", "lL", ";:", "/?", null, null], "/": [".>", ";:", `'"`, null, null, null], 0: ["9(", null, null, "-_", "pP", "oO"], 1: ["`~", null, null, "2@", "qQ", null], 2: ["1!", null, null, "3#", "wW", "qQ"], 3: ["2@", null, null, "4$", "eE", "wW"], 4: ["3#", null, null, "5%", "rR", "eE"], 5: ["4$", null, null, "6^", "tT", "rR"], 6: ["5%", null, null, "7&", "yY", "tT"], 7: ["6^", null, null, "8*", "uU", "yY"], 8: ["7&", null, null, "9(", "iI", "uU"], 9: ["8*", null, null, "0)", "oO", "iI"], ":": ["lL", "pP", "[{", `'"`, "/?", ".>"], ";": ["lL", "pP", "[{", `'"`, "/?", ".>"], "<": ["mM", "kK", "lL", ".>", null, null], "=": ["-_", null, null, null, "]}", "[{"], ">": [",<", "lL", ";:", "/?", null, null], "?": [".>", ";:", `'"`, null, null, null], "@": ["1!", null, null, "3#", "wW", "qQ"], A: [null, "qQ", "wW", "sS", "zZ", null], B: ["vV", "gG", "hH", "nN", null, null], C: ["xX", "dD", "fF", "vV", null, null], D: ["sS", "eE", "rR", "fF", "cC", "xX"], E: ["wW", "3#", "4$", "rR", "dD", "sS"], F: ["dD", "rR", "tT", "gG", "vV", "cC"], G: ["fF", "tT", "yY", "hH", "bB", "vV"], H: ["gG", "yY", "uU", "jJ", "nN", "bB"], I: ["uU", "8*", "9(", "oO", "kK", "jJ"], J: ["hH", "uU", "iI", "kK", "mM", "nN"], K: ["jJ", "iI", "oO", "lL", ",<", "mM"], L: ["kK", "oO", "pP", ";:", ".>", ",<"], M: ["nN", "jJ", "kK", ",<", null, null], N: ["bB", "hH", "jJ", "mM", null, null], O: ["iI", "9(", "0)", "pP", "lL", "kK"], P: ["oO", "0)", "-_", "[{", ";:", "lL"], Q: [null, "1!", "2@", "wW", "aA", null], R: ["eE", "4$", "5%", "tT", "fF", "dD"], S: ["aA", "wW", "eE", "dD", "xX", "zZ"], T: ["rR", "5%", "6^", "yY", "gG", "fF"], U: ["yY", "7&", "8*", "iI", "jJ", "hH"], V: ["cC", "fF", "gG", "bB", null, null], W: ["qQ", "2@", "3#", "eE", "sS", "aA"], X: ["zZ", "sS", "dD", "cC", null, null], Y: ["tT", "6^", "7&", "uU", "hH", "gG"], Z: [null, "aA", "sS", "xX", null, null], "[": ["pP", "-_", "=+", "]}", `'"`, ";:"], "\\": ["]}", null, null, null, null, null], "]": ["[{", "=+", null, "\\|", null, `'"`], "^": ["5%", null, null, "7&", "yY", "tT"], _: ["0)", null, null, "=+", "[{", "pP"], "`": [null, null, null, "1!", null, null], a: [null, "qQ", "wW", "sS", "zZ", null], b: ["vV", "gG", "hH", "nN", null, null], c: ["xX", "dD", "fF", "vV", null, null], d: ["sS", "eE", "rR", "fF", "cC", "xX"], e: ["wW", "3#", "4$", "rR", "dD", "sS"], f: ["dD", "rR", "tT", "gG", "vV", "cC"], g: ["fF", "tT", "yY", "hH", "bB", "vV"], h: ["gG", "yY", "uU", "jJ", "nN", "bB"], i: ["uU", "8*", "9(", "oO", "kK", "jJ"], j: ["hH", "uU", "iI", "kK", "mM", "nN"], k: ["jJ", "iI", "oO", "lL", ",<", "mM"], l: ["kK", "oO", "pP", ";:", ".>", ",<"], m: ["nN", "jJ", "kK", ",<", null, null], n: ["bB", "hH", "jJ", "mM", null, null], o: ["iI", "9(", "0)", "pP", "lL", "kK"], p: ["oO", "0)", "-_", "[{", ";:", "lL"], q: [null, "1!", "2@", "wW", "aA", null], r: ["eE", "4$", "5%", "tT", "fF", "dD"], s: ["aA", "wW", "eE", "dD", "xX", "zZ"], t: ["rR", "5%", "6^", "yY", "gG", "fF"], u: ["yY", "7&", "8*", "iI", "jJ", "hH"], v: ["cC", "fF", "gG", "bB", null, null], w: ["qQ", "2@", "3#", "eE", "sS", "aA"], x: ["zZ", "sS", "dD", "cC", null, null], y: ["tT", "6^", "7&", "uU", "hH", "gG"], z: [null, "aA", "sS", "xX", null, null], "{": ["pP", "-_", "=+", "]}", `'"`, ";:"], "|": ["]}", null, null, null, null, null], "}": ["[{", "=+", null, "\\|", null, `'"`], "~": [null, null, null, "1!", null, null] }, dvorak: { "!": ["`~", null, null, "2@", `'"`, null], '"': [null, "1!", "2@", ",<", "aA", null], "#": ["2@", null, null, "4$", ".>", ",<"], $: ["3#", null, null, "5%", "pP", ".>"], "%": ["4$", null, null, "6^", "yY", "pP"], "&": ["6^", null, null, "8*", "gG", "fF"], "'": [null, "1!", "2@", ",<", "aA", null], "(": ["8*", null, null, "0)", "rR", "cC"], ")": ["9(", null, null, "[{", "lL", "rR"], "*": ["7&", null, null, "9(", "cC", "gG"], "+": ["/?", "]}", null, "\\|", null, "-_"], ",": [`'"`, "2@", "3#", ".>", "oO", "aA"], "-": ["sS", "/?", "=+", null, null, "zZ"], ".": [",<", "3#", "4$", "pP", "eE", "oO"], "/": ["lL", "[{", "]}", "=+", "-_", "sS"], 0: ["9(", null, null, "[{", "lL", "rR"], 1: ["`~", null, null, "2@", `'"`, null], 2: ["1!", null, null, "3#", ",<", `'"`], 3: ["2@", null, null, "4$", ".>", ",<"], 4: ["3#", null, null, "5%", "pP", ".>"], 5: ["4$", null, null, "6^", "yY", "pP"], 6: ["5%", null, null, "7&", "fF", "yY"], 7: ["6^", null, null, "8*", "gG", "fF"], 8: ["7&", null, null, "9(", "cC", "gG"], 9: ["8*", null, null, "0)", "rR", "cC"], ":": [null, "aA", "oO", "qQ", null, null], ";": [null, "aA", "oO", "qQ", null, null], "<": [`'"`, "2@", "3#", ".>", "oO", "aA"], "=": ["/?", "]}", null, "\\|", null, "-_"], ">": [",<", "3#", "4$", "pP", "eE", "oO"], "?": ["lL", "[{", "]}", "=+", "-_", "sS"], "@": ["1!", null, null, "3#", ",<", `'"`], A: [null, `'"`, ",<", "oO", ";:", null], B: ["xX", "dD", "hH", "mM", null, null], C: ["gG", "8*", "9(", "rR", "tT", "hH"], D: ["iI", "fF", "gG", "hH", "bB", "xX"], E: ["oO", ".>", "pP", "uU", "jJ", "qQ"], F: ["yY", "6^", "7&", "gG", "dD", "iI"], G: ["fF", "7&", "8*", "cC", "hH", "dD"], H: ["dD", "gG", "cC", "tT", "mM", "bB"], I: ["uU", "yY", "fF", "dD", "xX", "kK"], J: ["qQ", "eE", "uU", "kK", null, null], K: ["jJ", "uU", "iI", "xX", null, null], L: ["rR", "0)", "[{", "/?", "sS", "nN"], M: ["bB", "hH", "tT", "wW", null, null], N: ["tT", "rR", "lL", "sS", "vV", "wW"], O: ["aA", ",<", ".>", "eE", "qQ", ";:"], P: [".>", "4$", "5%", "yY", "uU", "eE"], Q: [";:", "oO", "eE", "jJ", null, null], R: ["cC", "9(", "0)", "lL", "nN", "tT"], S: ["nN", "lL", "/?", "-_", "zZ", "vV"], T: ["hH", "cC", "rR", "nN", "wW", "mM"], U: ["eE", "pP", "yY", "iI", "kK", "jJ"], V: ["wW", "nN", "sS", "zZ", null, null], W: ["mM", "tT", "nN", "vV", null, null], X: ["kK", "iI", "dD", "bB", null, null], Y: ["pP", "5%", "6^", "fF", "iI", "uU"], Z: ["vV", "sS", "-_", null, null, null], "[": ["0)", null, null, "]}", "/?", "lL"], "\\": ["=+", null, null, null, null, null], "]": ["[{", null, null, null, "=+", "/?"], "^": ["5%", null, null, "7&", "fF", "yY"], _: ["sS", "/?", "=+", null, null, "zZ"], "`": [null, null, null, "1!", null, null], a: [null, `'"`, ",<", "oO", ";:", null], b: ["xX", "dD", "hH", "mM", null, null], c: ["gG", "8*", "9(", "rR", "tT", "hH"], d: ["iI", "fF", "gG", "hH", "bB", "xX"], e: ["oO", ".>", "pP", "uU", "jJ", "qQ"], f: ["yY", "6^", "7&", "gG", "dD", "iI"], g: ["fF", "7&", "8*", "cC", "hH", "dD"], h: ["dD", "gG", "cC", "tT", "mM", "bB"], i: ["uU", "yY", "fF", "dD", "xX", "kK"], j: ["qQ", "eE", "uU", "kK", null, null], k: ["jJ", "uU", "iI", "xX", null, null], l: ["rR", "0)", "[{", "/?", "sS", "nN"], m: ["bB", "hH", "tT", "wW", null, null], n: ["tT", "rR", "lL", "sS", "vV", "wW"], o: ["aA", ",<", ".>", "eE", "qQ", ";:"], p: [".>", "4$", "5%", "yY", "uU", "eE"], q: [";:", "oO", "eE", "jJ", null, null], r: ["cC", "9(", "0)", "lL", "nN", "tT"], s: ["nN", "lL", "/?", "-_", "zZ", "vV"], t: ["hH", "cC", "rR", "nN", "wW", "mM"], u: ["eE", "pP", "yY", "iI", "kK", "jJ"], v: ["wW", "nN", "sS", "zZ", null, null], w: ["mM", "tT", "nN", "vV", null, null], x: ["kK", "iI", "dD", "bB", null, null], y: ["pP", "5%", "6^", "fF", "iI", "uU"], z: ["vV", "sS", "-_", null, null, null], "{": ["0)", null, null, "]}", "/?", "lL"], "|": ["=+", null, null, null, null, null], "}": ["[{", null, null, null, "=+", "/?"], "~": [null, null, null, "1!", null, null] }, keypad: { "*": ["/", null, null, null, "-", "+", "9", "8"], "+": ["9", "*", "-", null, null, null, null, "6"], "-": ["*", null, null, null, null, null, "+", "9"], ".": ["0", "2", "3", null, null, null, null, null], "/": [null, null, null, null, "*", "9", "8", "7"], 0: [null, "1", "2", "3", ".", null, null, null], 1: [null, null, "4", "5", "2", "0", null, null], 2: ["1", "4", "5", "6", "3", ".", "0", null], 3: ["2", "5", "6", null, null, null, ".", "0"], 4: [null, null, "7", "8", "5", "2", "1", null], 5: ["4", "7", "8", "9", "6", "3", "2", "1"], 6: ["5", "8", "9", "+", null, null, "3", "2"], 7: [null, null, null, "/", "8", "5", "4", null], 8: ["7", null, "/", "*", "9", "6", "5", "4"], 9: ["8", "/", "*", "-", "+", null, "6", "5"] }, mac_keypad: { "*": ["/", null, null, null, null, null, "-", "9"], "+": ["6", "9", "-", null, null, null, null, "3"], "-": ["9", "/", "*", null, null, null, "+", "6"], ".": ["0", "2", "3", null, null, null, null, null], "/": ["=", null, null, null, "*", "-", "9", "8"], 0: [null, "1", "2", "3", ".", null, null, null], 1: [null, null, "4", "5", "2", "0", null, null], 2: ["1", "4", "5", "6", "3", ".", "0", null], 3: ["2", "5", "6", "+", null, null, ".", "0"], 4: [null, null, "7", "8", "5", "2", "1", null], 5: ["4", "7", "8", "9", "6", "3", "2", "1"], 6: ["5", "8", "9", "-", "+", null, "3", "2"], 7: [null, null, null, "=", "8", "5", "4", null], 8: ["7", null, "=", "/", "9", "6", "5", "4"], 9: ["8", "=", "/", "*", "-", "+", "6", "5"], "=": [null, null, null, null, "/", "9", "8", "7"] } };
var Sb = _b, Ob, Eb, Ac, Lc, Zr, Fc, Wn, Pb;
Zr = Sb;
Fc = function (e) { var a, n, r, i, t; a = 0; for (r in e)
    t = e[r], a += function () { var s, o, l; for (l = [], o = 0, s = t.length; o < s; o++)
        i = t[o], i && l.push(i); return l; }().length; return a /= function () { var s; s = []; for (n in e)
    e[n], s.push(n); return s; }().length, a; };
Ob = 10;
Eb = 1e4;
Lc = 10;
Ac = 50;
Pb = { nCk: function (e, a) { var n, r, i, t; if (a > e)
        return 0; if (a === 0)
        return 1; for (i = 1, n = r = 1, t = a; 1 <= t ? r <= t : r >= t; n = 1 <= t ? ++r : --r)
        i *= e, i /= n, e -= 1; return i; }, log10: function (e) { return Math.log(e) / Math.log(10); }, log2: function (e) { return Math.log(e) / Math.log(2); }, factorial: function (e) { var a, n, r, i; if (e < 2)
        return 1; for (a = 1, n = r = 2, i = e; 2 <= i ? r <= i : r >= i; n = 2 <= i ? ++r : --r)
        a *= n; return a; }, most_guessable_match_sequence: function (e, a, n) { var r, i, t, s, o, l, c, d, b, g, k, m, v, j, y, f, u, p, w, z, q, _, T; for (n == null && (n = !1), m = e.length, k = function () { var P, E, S; for (S = [], P = 0, E = m; 0 <= E ? P < E : P > E; 0 <= E ? ++P : --P)
        S.push([]); return S; }(), v = 0, o = a.length; v < o; v++)
        b = a[v], k[b.j].push(b); for (u = 0, l = k.length; u < l; u++)
        d = k[u], d.sort(function (P, E) { return P.i - E.i; }); for (j = { m: function () { var P, E, S; for (E = [], S = 0, P = m; 0 <= P ? S < P : S > P; 0 <= P ? ++S : --S)
            E.push({}); return E; }(), pi: function () { var P, E, S; for (E = [], S = 0, P = m; 0 <= P ? S < P : S > P; 0 <= P ? ++S : --S)
            E.push({}); return E; }(), g: function () { var P, E, S; for (E = [], S = 0, P = m; 0 <= P ? S < P : S > P; 0 <= P ? ++S : --S)
            E.push({}); return E; }() }, _ = function (P) { return function (E, S) { var N, I, M, A, L, C; A = E.j, L = P.estimate_guesses(E, e), S > 1 && (L *= j.pi[E.i - 1][S - 1]), M = P.factorial(S) * L, n || (M += Math.pow(Eb, S - 1)), C = j.g[A]; for (I in C)
        if (N = C[I], !(I > S) && N <= M)
            return; return j.g[A][S] = M, j.m[A][S] = E, j.pi[A][S] = L; }; }(this), r = function (P) { return function (E) { var S, N, I, M, A, L; for (b = g(0, E), _(b, 1), A = [], S = L = 1, M = E; 1 <= M ? L <= M : L >= M; S = 1 <= M ? ++L : --L)
        b = g(S, E), A.push(function () { var C, $; C = j.m[S - 1], $ = []; for (N in C)
            I = C[N], N = parseInt(N), I.pattern !== "bruteforce" && $.push(_(b, N + 1)); return $; }()); return A; }; }(), g = function (P) { return function (E, S) { return { pattern: "bruteforce", token: e.slice(E, +S + 1 || 9e9), i: E, j: S }; }; }(), q = function (P) { return function (E) { var S, N, I, M, A, L, C; L = [], M = E - 1, A = void 0, I = 1 / 0, C = j.g[M]; for (N in C)
        S = C[N], S < I && (A = N, I = S); for (; M >= 0;)
        b = j.m[M][A], L.unshift(b), M = b.i - 1, A--; return L; }; }(), t = z = 0, p = m; 0 <= p ? z < p : z > p; t = 0 <= p ? ++z : --z) {
        for (w = k[t], T = 0, c = w.length; T < c; T++)
            if (b = w[T], b.i > 0)
                for (s in j.m[b.i - 1])
                    s = parseInt(s), _(b, s + 1);
            else
                _(b, 1);
        r(t);
    } return f = q(m), y = f.length, e.length === 0 ? i = 1 : i = j.g[m - 1][y], { password: e, guesses: i, guesses_log10: this.log10(i), sequence: f }; }, estimate_guesses: function (e, a) { var n, r, i; return e.guesses != null || (i = 1, e.token.length < a.length && (i = e.token.length === 1 ? Lc : Ac), n = { bruteforce: this.bruteforce_guesses, dictionary: this.dictionary_guesses, spatial: this.spatial_guesses, repeat: this.repeat_guesses, sequence: this.sequence_guesses, regex: this.regex_guesses, date: this.date_guesses }, r = n[e.pattern].call(this, e), e.guesses = Math.max(r, i), e.guesses_log10 = this.log10(e.guesses)), e.guesses; }, bruteforce_guesses: function (e) { var a, n; return a = Math.pow(Ob, e.token.length), a === Number.POSITIVE_INFINITY && (a = Number.MAX_VALUE), n = e.token.length === 1 ? Lc + 1 : Ac + 1, Math.max(a, n); }, repeat_guesses: function (e) { return e.base_guesses * e.repeat_count; }, sequence_guesses: function (e) { var a, n; return n = e.token.charAt(0), n === "a" || n === "A" || n === "z" || n === "Z" || n === "0" || n === "1" || n === "9" ? a = 4 : n.match(/\d/) ? a = 10 : a = 26, e.ascending || (a *= 2), a * e.token.length; }, MIN_YEAR_SPACE: 20, REFERENCE_YEAR: new Date().getFullYear(), regex_guesses: function (e) { var a, n; if (a = { alpha_lower: 26, alpha_upper: 26, alpha: 52, alphanumeric: 62, digits: 10, symbols: 33 }, e.regex_name in a)
        return Math.pow(a[e.regex_name], e.token.length); switch (e.regex_name) {
        case "recent_year": return n = Math.abs(parseInt(e.regex_match[0]) - this.REFERENCE_YEAR), n = Math.max(n, this.MIN_YEAR_SPACE), n;
    } }, date_guesses: function (e) { var a, n; return n = Math.max(Math.abs(e.year - this.REFERENCE_YEAR), this.MIN_YEAR_SPACE), a = n * 365, e.separator && (a *= 4), a; }, KEYBOARD_AVERAGE_DEGREE: Fc(Zr.qwerty), KEYPAD_AVERAGE_DEGREE: Fc(Zr.keypad), KEYBOARD_STARTING_POSITIONS: function () { var e, a; e = Zr.qwerty, a = []; for (Wn in e)
        e[Wn], a.push(Wn); return a; }().length, KEYPAD_STARTING_POSITIONS: function () { var e, a; e = Zr.keypad, a = []; for (Wn in e)
        e[Wn], a.push(Wn); return a; }().length, spatial_guesses: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k, m, v, j, y, f; for ((b = e.graph) === "qwerty" || b === "dvorak" ? (v = this.KEYBOARD_STARTING_POSITIONS, i = this.KEYBOARD_AVERAGE_DEGREE) : (v = this.KEYPAD_STARTING_POSITIONS, i = this.KEYPAD_AVERAGE_DEGREE), t = 0, a = e.token.length, y = e.turns, s = l = 2, g = a; 2 <= g ? l <= g : l >= g; s = 2 <= g ? ++l : --l)
        for (c = Math.min(y, s - 1), o = d = 1, k = c; 1 <= k ? d <= k : d >= k; o = 1 <= k ? ++d : --d)
            t += this.nCk(s - 1, o - 1) * v * Math.pow(i, o); if (e.shifted_count)
        if (n = e.shifted_count, r = e.token.length - e.shifted_count, n === 0 || r === 0)
            t *= 2;
        else {
            for (j = 0, s = f = 1, m = Math.min(n, r); 1 <= m ? f <= m : f >= m; s = 1 <= m ? ++f : --f)
                j += this.nCk(n + r, s);
            t *= j;
        } return t; }, dictionary_guesses: function (e) { var a; return e.base_guesses = e.rank, e.uppercase_variations = this.uppercase_variations(e), e.l33t_variations = this.l33t_variations(e), a = e.reversed && 2 || 1, e.base_guesses * e.uppercase_variations * e.l33t_variations * a; }, START_UPPER: /^[A-Z][^A-Z]+$/, END_UPPER: /^[^A-Z]+[A-Z]$/, ALL_UPPER: /^[^a-z]+$/, ALL_LOWER: /^[^A-Z]+$/, uppercase_variations: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g; if (g = e.token, g.match(this.ALL_LOWER) || g.toLowerCase() === g)
        return 1; for (l = [this.START_UPPER, this.END_UPPER, this.ALL_UPPER], s = 0, t = l.length; s < t; s++)
        if (d = l[s], g.match(d))
            return 2; for (n = function () { var k, m, v, j; for (v = g.split(""), j = [], m = 0, k = v.length; m < k; m++)
        r = v[m], r.match(/[A-Z]/) && j.push(r); return j; }().length, a = function () { var k, m, v, j; for (v = g.split(""), j = [], m = 0, k = v.length; m < k; m++)
        r = v[m], r.match(/[a-z]/) && j.push(r); return j; }().length, b = 0, i = o = 1, c = Math.min(n, a); 1 <= c ? o <= c : o >= c; i = 1 <= c ? ++o : --o)
        b += this.nCk(n + a, i); return b; }, l33t_variations: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k; if (!e.l33t)
        return 1; k = 1, c = e.sub; for (b in c)
        if (g = c[b], i = e.token.toLowerCase().split(""), a = function () { var m, v, j; for (j = [], v = 0, m = i.length; v < m; v++)
            r = i[v], r === b && j.push(r); return j; }().length, n = function () { var m, v, j; for (j = [], v = 0, m = i.length; v < m; v++)
            r = i[v], r === g && j.push(r); return j; }().length, a === 0 || n === 0)
            k *= 2;
        else {
            for (o = Math.min(n, a), l = 0, t = s = 1, d = o; 1 <= d ? s <= d : s >= d; t = 1 <= d ? ++s : --s)
                l += this.nCk(n + a, t);
            k *= l;
        } return k; } };
var pd = Pb, $c, Uc, Cb, Tb, Rb, or, Nb, ei, fd, Bc, Oh, Ib, gr, Wc;
Bc = T3;
ei = Sb;
Wc = pd;
fd = function (e) { var a, n, r, i, t; for (i = {}, a = 1, r = 0, n = e.length; r < n; r++)
    t = e[r], i[t] = a, a += 1; return i; };
or = {};
for (gr in Bc)
    Oh = Bc[gr], or[gr] = fd(Oh);
Tb = { qwerty: ei.qwerty, dvorak: ei.dvorak, keypad: ei.keypad, mac_keypad: ei.mac_keypad };
Rb = { a: ["4", "@"], b: ["8"], c: ["(", "{", "[", "<"], e: ["3"], g: ["6", "9"], i: ["1", "!", "|"], l: ["1", "|", "7"], o: ["0"], s: ["$", "5"], t: ["+", "7"], x: ["%"], z: ["2"] };
Nb = { recent_year: /19\d\d|200\d|201\d/g };
$c = 2050;
Uc = 1e3;
Cb = { 4: [[1, 2], [2, 3]], 5: [[1, 3], [2, 3]], 6: [[1, 2], [2, 4], [4, 5]], 7: [[1, 3], [2, 3], [4, 5], [4, 6]], 8: [[2, 4], [4, 6]] };
Ib = { empty: function (e) { var a; return function () { var n; n = []; for (a in e)
        n.push(a); return n; }().length === 0; }, extend: function (e, a) { return e.push.apply(e, a); }, translate: function (e, a) { var n; return function () { var r, i, t, s; for (t = e.split(""), s = [], i = 0, r = t.length; i < r; i++)
        n = t[i], s.push(a[n] || n); return s; }().join(""); }, mod: function (e, a) { return (e % a + a) % a; }, sorted: function (e) { return e.sort(function (a, n) { return a.i - n.i || a.j - n.j; }); }, omnimatch: function (e) { var a, n, r, i, t; for (i = [], r = [this.dictionary_match, this.reverse_dictionary_match, this.l33t_match, this.spatial_match, this.repeat_match, this.sequence_match, this.regex_match, this.date_match], t = 0, a = r.length; t < a; t++)
        n = r[t], this.extend(i, n.call(this, e)); return this.sorted(i); }, dictionary_match: function (e, a) { var n, r, i, t, s, o, l, c, d, b, g, k, m, v; a == null && (a = or), s = [], t = e.length, c = e.toLowerCase(); for (n in a)
        for (b = a[n], r = o = 0, g = t; 0 <= g ? o < g : o > g; r = 0 <= g ? ++o : --o)
            for (i = l = k = r, m = t; k <= m ? l < m : l > m; i = k <= m ? ++l : --l)
                c.slice(r, +i + 1 || 9e9) in b && (v = c.slice(r, +i + 1 || 9e9), d = b[v], s.push({ pattern: "dictionary", i: r, j: i, token: e.slice(r, +i + 1 || 9e9), matched_word: v, rank: d, dictionary_name: n, reversed: !1, l33t: !1 })); return this.sorted(s); }, reverse_dictionary_match: function (e, a) { var n, r, i, t, s, o; for (a == null && (a = or), o = e.split("").reverse().join(""), i = this.dictionary_match(o, a), t = 0, n = i.length; t < n; t++)
        r = i[t], r.token = r.token.split("").reverse().join(""), r.reversed = !0, s = [e.length - 1 - r.j, e.length - 1 - r.i], r.i = s[0], r.j = s[1]; return this.sorted(i); }, set_user_input_dictionary: function (e) { return or.user_inputs = fd(e.slice()); }, relevant_l33t_subtable: function (e, a) { var n, r, i, t, s, o, l, c, d, b; for (s = {}, o = e.split(""), t = 0, r = o.length; t < r; t++)
        n = o[t], s[n] = !0; b = {}; for (i in a)
        d = a[i], l = function () { var g, k, m; for (m = [], k = 0, g = d.length; k < g; k++)
            c = d[k], c in s && m.push(c); return m; }(), l.length > 0 && (b[i] = l); return b; }, enumerate_l33t_subs: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k, m, v; for (t = function () { var j; j = []; for (i in e)
        j.push(i); return j; }(), v = [[]], n = function (j) { var y, f, u, p, w, z, q, _; for (f = [], w = {}, z = 0, p = j.length; z < p; z++)
        q = j[z], y = function () { var T, P, E; for (E = [], _ = P = 0, T = q.length; P < T; _ = ++P)
            i = q[_], E.push([i, _]); return E; }(), y.sort(), u = function () { var T, P, E; for (E = [], _ = P = 0, T = y.length; P < T; _ = ++P)
            i = y[_], E.push(i + "," + _); return E; }().join("-"), u in w || (w[u] = !0, f.push(q)); return f; }, r = function (j) { var y, f, u, p, w, z, q, _, T, P, E, S, N, I, M, A; if (j.length) {
        for (f = j[0], N = j.slice(1), q = [], E = e[f], _ = 0, w = E.length; _ < w; _++)
            for (p = E[_], T = 0, z = v.length; T < z; T++) {
                for (I = v[T], y = -1, u = P = 0, S = I.length; 0 <= S ? P < S : P > S; u = 0 <= S ? ++P : --P)
                    if (I[u][0] === p) {
                        y = u;
                        break;
                    }
                y === -1 ? (A = I.concat([[p, f]]), q.push(A)) : (M = I.slice(0), M.splice(y, 1), M.push([p, f]), q.push(I), q.push(M));
            }
        return v = n(q), r(N);
    } }, r(t), m = [], c = 0, o = v.length; c < o; c++) {
        for (g = v[c], k = {}, d = 0, l = g.length; d < l; d++)
            b = g[d], s = b[0], a = b[1], k[s] = a;
        m.push(k);
    } return m; }, l33t_match: function (e, a, n) { var r, i, t, s, o, l, c, d, b, g, k, m, v, j, y, f; for (a == null && (a = or), n == null && (n = Rb), c = [], g = this.enumerate_l33t_subs(this.relevant_l33t_subtable(e, n)), d = 0, t = g.length; d < t && (m = g[d], !this.empty(m)); d++)
        for (j = this.translate(e, m), k = this.dictionary_match(j, a), b = 0, s = k.length; b < s; b++)
            if (o = k[b], y = e.slice(o.i, +o.j + 1 || 9e9), y.toLowerCase() !== o.matched_word) {
                l = {};
                for (v in m)
                    r = m[v], y.indexOf(v) !== -1 && (l[v] = r);
                o.l33t = !0, o.token = y, o.sub = l, o.sub_display = function () { var u; u = []; for (i in l)
                    f = l[i], u.push(i + " -> " + f); return u; }().join(", "), c.push(o);
            } return this.sorted(c.filter(function (u) { return u.token.length > 1; })); }, spatial_match: function (e, a) { var n, r, i; a == null && (a = Tb), i = []; for (r in a)
        n = a[r], this.extend(i, this.spatial_match_helper(e, n, r)); return this.sorted(i); }, SHIFTED_RX: /[~!@#$%^&*()_+QWERTYUIOP{}|ASDFGHJKL:"ZXCVBNM<>?]/, spatial_match_helper: function (e, a, n) { var r, i, t, s, o, l, c, d, b, g, k, m, v, j, y; for (k = [], c = 0; c < e.length - 1;)
        for (d = c + 1, b = null, y = 0, (n === "qwerty" || n === "dvorak") && this.SHIFTED_RX.exec(e.charAt(c)) ? j = 1 : j = 0;;) {
            if (v = e.charAt(d - 1), o = !1, l = -1, s = -1, i = a[v] || [], d < e.length) {
                for (t = e.charAt(d), m = 0, g = i.length; m < g; m++)
                    if (r = i[m], s += 1, r && r.indexOf(t) !== -1) {
                        o = !0, l = s, r.indexOf(t) === 1 && (j += 1), b !== l && (y += 1, b = l);
                        break;
                    }
            }
            if (o)
                d += 1;
            else {
                d - c > 2 && k.push({ pattern: "spatial", i: c, j: d - 1, token: e.slice(c, d), graph: n, turns: y, shifted_count: j }), c = d;
                break;
            }
        } return k; }, repeat_match: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k, m, v; for (m = [], t = /(.+)\1+/g, d = /(.+?)\1+/g, b = /^(.+?)\1+$/, c = 0; c < e.length && (t.lastIndex = d.lastIndex = c, s = t.exec(e), g = d.exec(e), s != null);)
        s[0].length > g[0].length ? (k = s, i = b.exec(k[0])[1]) : (k = g, i = k[1]), v = [k.index, k.index + k[0].length - 1], o = v[0], l = v[1], a = Wc.most_guessable_match_sequence(i, this.omnimatch(i)), r = a.sequence, n = a.guesses, m.push({ pattern: "repeat", i: o, j: l, token: k[0], base_token: i, base_guesses: n, base_matches: r, repeat_count: k[0].length / i.length }), c = l + 1; return m; }, MAX_DELTA: 5, sequence_match: function (e) { var a, n, r, i, t, s, o, l, c; if (e.length === 1)
        return []; for (c = function (d) { return function (b, g, k) { var m, v, j, y; if ((g - b > 1 || Math.abs(k) === 1) && 0 < (m = Math.abs(k)) && m <= d.MAX_DELTA)
        return y = e.slice(b, +g + 1 || 9e9), /^[a-z]+$/.test(y) ? (v = "lower", j = 26) : /^[A-Z]+$/.test(y) ? (v = "upper", j = 26) : /^\d+$/.test(y) ? (v = "digits", j = 10) : (v = "unicode", j = 26), l.push({ pattern: "sequence", i: b, j: g, token: e.slice(b, +g + 1 || 9e9), sequence_name: v, sequence_space: j, ascending: k > 0 }); }; }(this), l = [], n = 0, t = null, i = s = 1, o = e.length; 1 <= o ? s < o : s > o; i = 1 <= o ? ++s : --s)
        a = e.charCodeAt(i) - e.charCodeAt(i - 1), t == null && (t = a), a !== t && (r = i - 1, c(n, r, t), n = r, t = a); return c(n, e.length - 1, t), l; }, regex_match: function (e, a) { var n, r, i, t; a == null && (a = Nb), n = []; for (gr in a)
        for (r = a[gr], r.lastIndex = 0; i = r.exec(e);)
            t = i[0], n.push({ pattern: "regex", token: t, i: i.index, j: i.index + i[0].length - 1, regex_name: gr, regex_match: i }); return this.sorted(n); }, date_match: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k, m, v, j, y, f, u, p, w, z, q, _, T, P, E, S, N, I, M, A, L, C; for (g = [], k = /^\d{4,8}$/, m = /^(\d{1,4})([\s\/\\_.-])(\d{1,2})\2(\d{1,4})$/, s = y = 0, w = e.length - 4; 0 <= w ? y <= w : y >= w; s = 0 <= w ? ++y : --y)
        for (o = f = z = s + 3, q = s + 7; (z <= q ? f <= q : f >= q) && !(o >= e.length); o = z <= q ? ++f : --f)
            if (C = e.slice(s, +o + 1 || 9e9), !!k.exec(C)) {
                for (r = [], _ = Cb[C.length], u = 0, d = _.length; u < d; u++)
                    T = _[u], l = T[0], c = T[1], t = this.map_ints_to_dmy([parseInt(C.slice(0, l)), parseInt(C.slice(l, c)), parseInt(C.slice(c))]), t != null && r.push(t);
                if (r.length > 0) {
                    for (a = r[0], v = function ($) { return Math.abs($.year - Wc.REFERENCE_YEAR); }, j = v(r[0]), P = r.slice(1), p = 0, b = P.length; p < b; p++)
                        n = P[p], i = v(n), i < j && (E = [n, i], a = E[0], j = E[1]);
                    g.push({ pattern: "date", token: C, i: s, j: o, separator: "", year: a.year, month: a.month, day: a.day });
                }
            } for (s = A = 0, S = e.length - 6; 0 <= S ? A <= S : A >= S; s = 0 <= S ? ++A : --A)
        for (o = L = N = s + 5, I = s + 9; (N <= I ? L <= I : L >= I) && !(o >= e.length); o = N <= I ? ++L : --L)
            C = e.slice(s, +o + 1 || 9e9), M = m.exec(C), M != null && (t = this.map_ints_to_dmy([parseInt(M[1]), parseInt(M[3]), parseInt(M[4])]), t != null && g.push({ pattern: "date", token: C, i: s, j: o, separator: M[2], year: t.year, month: t.month, day: t.day })); return this.sorted(g.filter(function ($) { var W, G, ee, xe; for (W = !1, xe = 0, G = g.length; xe < G; xe++)
        if (ee = g[xe], $ !== ee && ee.i <= $.i && ee.j >= $.j) {
            W = !0;
            break;
        } return !W; })); }, map_ints_to_dmy: function (e) { var a, n, r, i, t, s, o, l, c, d, b, g, k, m, v, j; if (!(e[1] > 31 || e[1] <= 0)) {
        for (o = 0, l = 0, v = 0, s = 0, r = e.length; s < r; s++) {
            if (n = e[s], 99 < n && n < Uc || n > $c)
                return;
            n > 31 && (l += 1), n > 12 && (o += 1), n <= 0 && (v += 1);
        }
        if (!(l >= 2 || o === 3 || v >= 2)) {
            for (d = [[e[2], e.slice(0, 2)], [e[0], e.slice(1, 3)]], c = 0, i = d.length; c < i; c++)
                if (g = d[c], j = g[0], m = g[1], Uc <= j && j <= $c)
                    return a = this.map_ints_to_dm(m), a != null ? { year: j, month: a.month, day: a.day } : void 0;
            for (b = 0, t = d.length; b < t; b++)
                if (k = d[b], j = k[0], m = k[1], a = this.map_ints_to_dm(m), a != null)
                    return j = this.two_to_four_digit_year(j), { year: j, month: a.month, day: a.day };
        }
    } }, map_ints_to_dm: function (e) { var a, n, r, i, t, s; for (t = [e, e.slice().reverse()], i = 0, n = t.length; i < n; i++)
        if (s = t[i], a = s[0], r = s[1], 1 <= a && a <= 31 && 1 <= r && r <= 12)
            return { day: a, month: r }; }, two_to_four_digit_year: function (e) { return e > 99 ? e : e > 50 ? e + 1900 : e + 2e3; } };
var R3 = Ib, Db;
Db = { estimate_attack_times: function (e) { var a, n, r, i; n = { online_throttling_100_per_hour: e / (100 / 3600), online_no_throttling_10_per_second: e / 10, offline_slow_hashing_1e4_per_second: e / 1e4, offline_fast_hashing_1e10_per_second: e / 1e10 }, a = {}; for (r in n)
        i = n[r], a[r] = this.display_time(i); return { crack_times_seconds: n, crack_times_display: a, score: this.guesses_to_score(e) }; }, guesses_to_score: function (e) { var a; return a = 5, e < 1e3 + a ? 0 : e < 1e6 + a ? 1 : e < 1e8 + a ? 2 : e < 1e10 + a ? 3 : 4; }, display_time: function (e) { var a, n, r, i, t, s, o, l, c, d; return o = 60, s = o * 60, r = s * 24, l = r * 31, d = l * 12, n = d * 100, c = e < 1 ? [null, "less than a second"] : e < o ? (a = Math.round(e), [a, a + " second"]) : e < s ? (a = Math.round(e / o), [a, a + " minute"]) : e < r ? (a = Math.round(e / s), [a, a + " hour"]) : e < l ? (a = Math.round(e / r), [a, a + " day"]) : e < d ? (a = Math.round(e / l), [a, a + " month"]) : e < n ? (a = Math.round(e / d), [a, a + " year"]) : [null, "centuries"], i = c[0], t = c[1], i != null && i !== 1 && (t += "s"), t; } };
var N3 = Db, qa, Hc;
Hc = pd;
qa = { default_feedback: { warning: "", suggestions: ["Use a few words, avoid common phrases", "No need for symbols, digits, or uppercase letters"] }, get_feedback: function (e, a) { var n, r, i, t, s, o; if (a.length === 0)
        return this.default_feedback; if (e > 2)
        return { warning: "", suggestions: [] }; for (t = a[0], o = a.slice(1), r = 0, i = o.length; r < i; r++)
        s = o[r], s.token.length > t.token.length && (t = s); return qa = this.get_match_feedback(t, a.length === 1), n = "Add another word or two. Uncommon words are better.", qa != null ? (qa.suggestions.unshift(n), qa.warning == null && (qa.warning = "")) : qa = { warning: "", suggestions: [n] }, qa; }, get_match_feedback: function (e, a) { var n; switch (e.pattern) {
        case "dictionary": return this.get_dictionary_match_feedback(e, a);
        case "spatial": return e.graph.toUpperCase(), n = e.turns === 1 ? "Straight rows of keys are easy to guess" : "Short keyboard patterns are easy to guess", { warning: n, suggestions: ["Use a longer keyboard pattern with more turns"] };
        case "repeat": return n = e.base_token.length === 1 ? 'Repeats like "aaa" are easy to guess' : 'Repeats like "abcabcabc" are only slightly harder to guess than "abc"', { warning: n, suggestions: ["Avoid repeated words and characters"] };
        case "sequence": return { warning: "Sequences like abc or 6543 are easy to guess", suggestions: ["Avoid sequences"] };
        case "regex":
            if (e.regex_name === "recent_year")
                return { warning: "Recent years are easy to guess", suggestions: ["Avoid recent years", "Avoid years that are associated with you"] };
            break;
        case "date": return { warning: "Dates are often easy to guess", suggestions: ["Avoid dates and years that are associated with you"] };
    } }, get_dictionary_match_feedback: function (e, a) { var n, r, i, t, s; return t = e.dictionary_name === "passwords" ? a && !e.l33t && !e.reversed ? e.rank <= 10 ? "This is a top-10 common password" : e.rank <= 100 ? "This is a top-100 common password" : "This is a very common password" : e.guesses_log10 <= 4 ? "This is similar to a commonly used password" : void 0 : e.dictionary_name === "english_wikipedia" ? a ? "A word by itself is easy to guess" : void 0 : (n = e.dictionary_name) === "surnames" || n === "male_names" || n === "female_names" ? a ? "Names and surnames by themselves are easy to guess" : "Common names and surnames are easy to guess" : "", i = [], s = e.token, s.match(Hc.START_UPPER) ? i.push("Capitalization doesn't help very much") : s.match(Hc.ALL_UPPER) && s.toLowerCase() !== s && i.push("All-uppercase is almost as easy to guess as all-lowercase"), e.reversed && e.token.length >= 4 && i.push("Reversed words aren't much harder to guess"), e.l33t && i.push("Predictable substitutions like '@' instead of 'a' don't help very much"), r = { warning: t, suggestions: i }, r; } };
var I3 = qa, Mb, Vc, Ab, Qc, Lb, Fb;
Vc = R3;
Ab = pd;
Lb = N3;
Mb = I3;
Qc = function () { return new Date().getTime(); };
Fb = function (e, a) { var n, r, i, t, s, o, l, c, d, b, g; for (a == null && (a = []), b = Qc(), d = [], i = 0, t = a.length; i < t; i++)
    n = a[i], ((l = typeof n) == "string" || l === "number" || l === "boolean") && d.push(n.toString().toLowerCase()); Vc.set_user_input_dictionary(d), s = Vc.omnimatch(e), c = Ab.most_guessable_match_sequence(e, s), c.calc_time = Qc() - b, r = Lb.estimate_attack_times(c.guesses); for (o in r)
    g = r[o], c[o] = g; return c.feedback = Mb.get_feedback(c.score, c.sequence), c; };
var D3 = Fb;
const M3 = xr(D3);
function A3(e, a) { const { type: n } = a; switch (n) {
    case "PASSWORD_COMPARISON-set_valid_length": return Object.assign(Object.assign({}, e), { isValidLength: !0, isAPswdValid: !0 });
    case "PASSWORD_COMPARISON-unset_valid_length": return Object.assign(Object.assign({}, e), { isValidLength: !1, isAPswdValid: !1 });
    case "PASSWORD_COMPARISON-set_equal": return Object.assign(Object.assign({}, e), { isEqual: !0, isBPswdValid: !0 });
    case "PASSWORD_COMPARISON-unset_equal": return Object.assign(Object.assign({}, e), { isEqual: !1, isBPswdValid: !1 });
    case "PASSWORD_COMPARISON-set_leaks_character": return Object.assign(Object.assign({}, e), { isLeaksACharacter: !0, isAPswdValid: !0 });
    case "PASSWORD_COMPARISON-unset_leaks_character": return Object.assign(Object.assign({}, e), { isLeaksACharacter: !1, isAPswdValid: !1 });
    case "PASSWORD_COMPARISON-set_secure": return Object.assign(Object.assign({}, e), { isSecurePswd: !0, isAPswdValid: !0 });
    case "PASSWORD_COMPARISON-unset_secure": return Object.assign(Object.assign({}, e), { isSecurePswd: !1, isAPswdValid: !1 });
    default: return e;
} }
const L3 = /^(?=.*[!@#$%^&*()\-=_+{}[\]:;',.<>/?])(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/, F3 = { isEqual: !0, isValidLength: !0, isLeaksACharacter: !0, isAPswdValid: !0, isBPswdValid: !0, isSecurePswd: !0 };
function $3(e) { const { onCancelNavigateTo: a, onConfirm: n } = e, [r, i] = O.useReducer(A3, F3), { isAPswdValid: t, isBPswdValid: s, isEqual: o, isLeaksACharacter: l, isValidLength: c, isSecurePswd: d } = r, b = we(), g = m => { m.preventDefault(); const v = new FormData(m.target), j = { a: v.get("password"), b: v.get("passwordConfirmation") }; if (j.a.length >= 8 && j.a.length <= 32)
    i({ type: "PASSWORD_COMPARISON-set_valid_length" });
else {
    i({ type: "PASSWORD_COMPARISON-unset_valid_length" });
    return;
} if (L3.test(j.a))
    i({ type: "PASSWORD_COMPARISON-set_leaks_character" });
else {
    i({ type: "PASSWORD_COMPARISON-unset_leaks_character" });
    return;
} if (M3(j.a).score >= 2)
    i({ type: "PASSWORD_COMPARISON-set_secure" });
else {
    i({ type: "PASSWORD_COMPARISON-unset_secure" });
    return;
} if (j.a === j.b)
    i({ type: "PASSWORD_COMPARISON-set_equal" });
else {
    i({ type: "PASSWORD_COMPARISON-unset_equal" });
    return;
} v.delete("passwordConfirmation"); const y = Object.fromEntries(v); n(y); }, k = m => { m.preventDefault(), b(a); }; return h.jsx("div", { className: "p-3 shadow", style: { minWidth: "360px", maxWidth: "600px" }, children: h.jsxs(Tr, { onSubmit: g, children: [h.jsx("legend", { className: "display-4", children: "Regsitro de Nuevo Usuario" }), h.jsx("br", {}), h.jsxs(Y, { className: "mt-2", children: [h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "first-name", children: "Nombre" }), h.jsx(oe, { type: "text", id: "first-name", name: "firstName", placeholder: "Pedro" })] }) }), h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "last-name", children: "Apellido" }), h.jsx(oe, { type: "text", id: "last-name", name: "lastName", placeholder: "Perez" })] }) })] }), h.jsxs(Y, { className: "mt-2", children: [h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "company", children: "Empresa o Compañía" }), h.jsx(oe, { type: "text", id: "company", name: "company", placeholder: "Mi Empresa" })] }) }), h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "rif", children: "RIF" }), h.jsx(oe, { type: "text", id: "rif", name: "rif", placeholder: "11-23456789-0" })] }) })] }), h.jsxs(Y, { className: "mt-2", children: [h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "phone", children: "Teléfono de contacto" }), h.jsx(oe, { type: "tel", id: "phone", name: "phone", placeholder: "222-3334455" })] }) }), h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "email", children: "Correo Electrónico" }), h.jsx(oe, { type: "text", id: "email", name: "email", placeholder: "pedroperez@miempresa.com.ve" })] }) })] }), h.jsx(Y, { className: "mt-2", children: h.jsxs(Ie, { children: [h.jsx(me, { for: "address", children: "Dirección de Entrega" }), h.jsx(oe, { type: "textarea", id: "address", name: "address" })] }) }), h.jsxs(Y, { className: "mt-2", children: [h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "password", children: "Contraseña" }), h.jsx(oe, { type: "password", id: "password", name: "password", invalid: !t }), h.jsx(sr, { hidden: c, children: "La contraseña debe contener entre 8 y 32 caracteres." }), h.jsx(sr, { hidden: l, children: "La contraseña debe contener al menos un caracater especial, un número, una letra mayúscula y una letra minúscula." }), h.jsx(sr, { hidden: d, children: "La contraseña ingresada es insegura" })] }) }), h.jsx(B, { sm: 6, children: h.jsxs(Ie, { children: [h.jsx(me, { for: "password-confirmation", children: "Repita su Contraseña" }), h.jsx(oe, { type: "password", id: "password-confirmation", name: "passwordConfirmation", invalid: !s }), h.jsx(sr, { hidden: o, children: "Las contraseñas no son iguales" })] }) })] }), h.jsxs(Y, { className: "mt-3", children: [h.jsx(B, { sm: { size: 4, offset: 4 }, children: h.jsx(ae, { onClick: k, color: "primary", outline: !0, style: { width: "100%" }, children: "Cancelar" }) }), h.jsx(B, { sm: { size: 4 }, children: h.jsx(ae, { color: "primary", style: { width: "100%" }, children: "Enviar" }) })] })] }) }); }
const U3 = "/productsList";
function B3() { const e = we(), a = r => r.replace(/[^a-zA-Z\s]/g, "").toLocaleLowerCase().replace(/(\s[a-z])/g, s => s.toUpperCase().replace(/\s/g, "")), n = r => { r.preventDefault(); const i = r.currentTarget[0].value; e(U3, { state: { searchText: a(i) } }); }; return h.jsx(Tr, { onSubmit: n, className: "w-100", children: h.jsxs(od, { children: [h.jsx(oe, { id: "search", type: "text", name: "search" }), h.jsx(ae, { color: "primary", children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "16", height: "16", fill: "currentColor", className: "bi bi-search", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" }) }) })] }) }); }
function W3(e) { const { onCancelNavigateTo: a, onConfirm: n } = e, r = we(), i = s => { s.preventDefault(), r(a); }, t = s => { s.preventDefault(); const o = new FormData(s.target), l = Object.fromEntries(o); n(l); }; return h.jsx("div", { className: "p-3 shadow", children: h.jsxs(Tr, { onSubmit: t, children: [h.jsx("legend", { className: "display-4", children: "Confirmación de Pago" }), h.jsx("br", {}), h.jsxs(Ie, { children: [h.jsx(me, { for: "order-id", children: "Número de Pedido" }), h.jsx(oe, { id: "order-id", name: "orderId", type: "text" })] }), h.jsxs(Y, { className: "mt-2", children: [h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "bank", children: "Banco" }), h.jsx(oe, { id: "bank", name: "bank", type: "text" })] }), h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "account-number", children: "Numero de cuenta" }), h.jsx(oe, { id: "account-number", name: "accountNumber", type: "text" })] })] }), h.jsxs(Y, { className: "mt-2", children: [h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "deposit-number", children: "Número de depósito" }), h.jsx(oe, { id: "deposit-number", name: "voucheNumber", type: "text" })] }), h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "vouche-date", children: "Fecha del Deposito" }), h.jsx(oe, { id: "vouche-date", name: "voucheDate", type: "date" })] })] }), h.jsxs(Y, { className: "mt-2", children: [h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "user-name", children: "Nombre del Depositante" }), h.jsx(oe, { id: "user-name", name: "userName", type: "text" })] }), h.jsxs(B, { sm: 6, children: [h.jsx(me, { for: "phone-number", children: "Número de Telefóno" }), h.jsx(oe, { id: "phoneNumber", name: "phoneNumber", type: "text" })] })] }), h.jsxs(Y, { className: "mt-3", children: [h.jsx(B, { sm: { size: 4, offset: 4 }, children: h.jsx(ae, { onClick: i, color: "primary", outline: !0, style: { width: "100%" }, children: "Cancelar" }) }), h.jsx(B, { sm: { size: 4 }, children: h.jsx(ae, { color: "primary", style: { width: "100%" }, children: "Enviar" }) })] })] }) }); }
function H3({ size: e, onClick: a }) { return h.jsx(ae, { onClick: () => a(), color: "primary", outline: !0, style: { border: "none" }, children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-person-fill", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" }) }) }); }
function V3({ size: e, onClick: a }) { return h.jsx(ae, { onClick: () => a(), color: "primary", outline: !0, style: { border: "none" }, children: h.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-cash-coin", viewBox: "0 0 16 16", children: [h.jsx("path", { fillRule: "evenodd", d: "M11 15a4 4 0 1 0 0-8 4 4 0 0 0 0 8zm5-4a5 5 0 1 1-10 0 5 5 0 0 1 10 0z" }), h.jsx("path", { d: "M9.438 11.944c.047.596.518 1.06 1.363 1.116v.44h.375v-.443c.875-.061 1.386-.529 1.386-1.207 0-.618-.39-.936-1.09-1.1l-.296-.07v-1.2c.376.043.614.248.671.532h.658c-.047-.575-.54-1.024-1.329-1.073V8.5h-.375v.45c-.747.073-1.255.522-1.255 1.158 0 .562.378.92 1.007 1.066l.248.061v1.272c-.384-.058-.639-.27-.696-.563h-.668zm1.36-1.354c-.369-.085-.569-.26-.569-.522 0-.294.216-.514.572-.578v1.1h-.003zm.432.746c.449.104.655.272.655.569 0 .339-.257.571-.709.614v-1.195l.054.012z" }), h.jsx("path", { d: "M1 0a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h4.083c.058-.344.145-.678.258-1H3a2 2 0 0 0-2-2V3a2 2 0 0 0 2-2h10a2 2 0 0 0 2 2v3.528c.38.34.717.728 1 1.154V1a1 1 0 0 0-1-1H1z" }), h.jsx("path", { d: "M9.998 5.083 10 5a2 2 0 1 0-3.132 1.65 5.982 5.982 0 0 1 3.13-1.567z" })] }) }); }
const Q3 = "_buttonHolder_1m48s_1", K3 = "_circleNumber_1m48s_6", Eh = { buttonHolder: Q3, circleNumber: K3 };
function G3({ size: e, onClick: a }) { const { state: n } = O.useContext(Nr); return h.jsx("div", { className: Eh.buttonHolder, children: h.jsxs(ae, { onClick: () => a(), color: "primary", outline: !0, style: { border: "none", height: "100%" }, children: [h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-cart-fill", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" }) }), h.jsx("div", { hidden: n.length === 0, className: Eh.circleNumber, children: n.length > 9 ? "+9" : n.length })] }) }); }
function Y3({ size: e, onClick: a }) { return h.jsx(ae, { onClick: () => a(), color: "primary", outline: !0, style: { border: "none" }, children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-trash-fill", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" }) }) }); }
function X3({ size: e, onClick: a }) { return h.jsx(ae, { onClick: () => a(), color: "primary", style: { border: "none" }, children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-dash", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z" }) }) }); }
function J3({ size: e, onClick: a }) { return h.jsx(ae, { onClick: () => a(), color: "primary", style: { border: "none" }, children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: e, height: e, fill: "currentColor", className: "bi bi-plus", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z" }) }) }); }
function $b(e) { const { quantity: a, onAddClick: n, onSubstractClick: r } = e; return h.jsxs(od, { style: { width: "140px" }, children: [h.jsx(X3, { size: "20", onClick: () => r() }), h.jsx(oe, { value: a, readOnly: !0 }), h.jsx(J3, { size: "20", onClick: () => n() })] }); }
function Ri(e) {
    "@babel/helpers - typeof";
    return Ri = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, Ri(e);
}
function Z3(e, a) { if (Ri(e) !== "object" || e === null)
    return e; var n = e[Symbol.toPrimitive]; if (n !== void 0) {
    var r = n.call(e, a || "default");
    if (Ri(r) !== "object")
        return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
} return (a === "string" ? String : Number)(e); }
function ex(e) { var a = Z3(e, "string"); return Ri(a) === "symbol" ? a : String(a); }
function ax(e, a, n) { return a = ex(a), a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
var nx = function (e) { var a = e.decode, n = a === void 0 ? !0 : a, r = e.crossOrigin, i = r === void 0 ? "" : r; return function (t) { return new Promise(function (s, o) { var l = new Image; i && (l.crossOrigin = i), l.onload = function () { n && l.decode ? l.decode().then(s).catch(o) : s(); }, l.onerror = o, l.src = t; }); }; };
function Ph(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function mt(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Ph(Object(n), !0).forEach(function (r) { ax(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ph(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
var rx = function (a) { return a.filter(function (n) { return n; }); }, ix = function (a) { return Array.isArray(a) ? a : [a]; }, We = {}, tx = function (a, n) { var r = !1; return new Promise(function (i, t) { var s = function (l) { return n(l).then(function () { r = !0, i(l); }); }; a.reduce(function (o, l) { return o.catch(function () { if (!r)
    return s(l); }); }, s(a.shift())).catch(t); }); };
function sx(e) { var a = e.srcList, n = e.imgPromise, r = n === void 0 ? nx({ decode: !0 }) : n, i = e.useSuspense, t = i === void 0 ? !0 : i, s = O.useState(!1), o = s[1], l = rx(ix(a)), c = l.join(""); if (We[c] || (We[c] = { promise: tx(l, r), cache: "pending", error: null }), We[c].cache === "resolved")
    return { src: We[c].src, isLoading: !1, error: null }; if (We[c].cache === "rejected") {
    if (t)
        throw We[c].error;
    return { isLoading: !1, error: We[c].error, src: void 0 };
} if (We[c].promise.then(function (d) { We[c] = mt(mt({}, We[c]), {}, { cache: "resolved", src: d }), t || o(c); }).catch(function (d) { We[c] = mt(mt({}, We[c]), {}, { cache: "rejected", error: d }), t || o(c); }), t)
    throw We[c].promise; return { isLoading: !0, src: void 0, error: null }; }
const ox = "_imageHolder_nzbph_1", lx = { imageHolder: ox };
function Ws({ url: e, alt: a, wrapperSize: n, imageSize: r }) { const { src: i } = sx({ srcList: e, useSuspense: !1 }), t = r !== void 0 ? r : { width: "", height: "" }; return h.jsx(h.Fragment, { children: h.jsx(O.Suspense, { fallback: h.jsx("div", { children: "Cargando" }), children: h.jsx("div", { className: lx.imageHolder, style: { width: n.width, height: n.height }, children: h.jsx("img", { src: i, alt: a, width: t.width, height: t.height }) }) }) }); }
function Ub({ size: e }) { return h.jsx(nd, { to: "/home", children: h.jsx(Ws, { url: "/assets/images/logo.png", alt: "", wrapperSize: { width: e, height: e }, imageSize: { width: e, height: e } }) }); }
const cx = "/cartList", ux = "/login", dx = "/paymentConfirmation", Bo = "1.5rem";
function mx() { const e = we(); return h.jsx(Rf, { children: h.jsxs(Y, { className: "w-100", children: [h.jsx(B, { xl: "1", className: "d-flex justify-content-center", children: h.jsx(Nf, { children: h.jsx(Ub, { size: 64 }) }) }), h.jsx(B, { xl: "9", className: "d-flex align-items-center", children: h.jsx(B3, {}) }), h.jsxs(B, { xl: "2", className: "d-flex justify-content-around", children: [h.jsx(V3, { size: Bo, onClick: () => e(dx) }), h.jsx(H3, { size: Bo, onClick: () => e(ux) }), h.jsx(G3, { size: Bo, onClick: () => e(cx) })] })] }) }); }
function hx() { return h.jsxs("header", { children: [h.jsx(mx, {}), h.jsx(xb, {})] }); }
const gx = new Date, px = gx.getFullYear(), fx = `Ferreteria Ferle C.A, desarrollado por Rfix & JA ${px}.`;
function bx() { return h.jsx("footer", { className: "bg-secondary p-3", children: h.jsxs(Y, { children: [h.jsx(B, { sm: { offset: 1, size: 2 }, children: h.jsx(Ub, { size: 120 }) }), h.jsxs(B, { sm: { size: 8 }, children: [h.jsx(xb, {}), h.jsx("br", {}), h.jsx("div", { className: "text-end", children: h.jsx("a", { href: "#", className: "text-black", children: h.jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "24", height: "24", fill: "currentColor", className: "bi bi-instagram", viewBox: "0 0 16 16", children: h.jsx("path", { d: "M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" }) }) }) }), h.jsx("br", {}), h.jsxs("div", { className: "text-end", children: ["©", fx] })] })] }) }); }
var Bb = {}, Wb = {}, Hb = {}, Hs = {}, Oe = {};
Object.defineProperty(Oe, "__esModule", { value: !0 });
Oe.TraceDirectionKey = Oe.Direction = Oe.Axis = void 0;
var Kc;
Oe.TraceDirectionKey = Kc;
(function (e) { e.NEGATIVE = "NEGATIVE", e.POSITIVE = "POSITIVE", e.NONE = "NONE"; })(Kc || (Oe.TraceDirectionKey = Kc = {}));
var Gc;
Oe.Direction = Gc;
(function (e) { e.TOP = "TOP", e.LEFT = "LEFT", e.RIGHT = "RIGHT", e.BOTTOM = "BOTTOM", e.NONE = "NONE"; })(Gc || (Oe.Direction = Gc = {}));
var Yc;
Oe.Axis = Yc;
(function (e) { e.X = "x", e.Y = "y"; })(Yc || (Oe.Axis = Yc = {}));
Object.defineProperty(Hs, "__esModule", { value: !0 });
Hs.calculateDirection = yx;
var Wo = Oe;
function yx(e) { var a, n = Wo.TraceDirectionKey.NEGATIVE, r = Wo.TraceDirectionKey.POSITIVE, i = e[e.length - 1], t = e[e.length - 2] || 0; return e.every(function (s) { return s === 0; }) ? Wo.TraceDirectionKey.NONE : (a = i > t ? r : n, i === 0 && (a = t < 0 ? r : n), a); }
var Vs = {}, ia = {};
Object.defineProperty(ia, "__esModule", { value: !0 });
ia.resolveAxisDirection = ia.getDirectionValue = ia.getDirectionKey = ia.getDifference = void 0;
var Ve = Oe, kx = function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, n = Object.keys(a).toString(); switch (n) {
    case Ve.TraceDirectionKey.POSITIVE: return Ve.TraceDirectionKey.POSITIVE;
    case Ve.TraceDirectionKey.NEGATIVE: return Ve.TraceDirectionKey.NEGATIVE;
    default: return Ve.TraceDirectionKey.NONE;
} };
ia.getDirectionKey = kx;
var vx = function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : []; return a[a.length - 1] || 0; };
ia.getDirectionValue = vx;
var wx = function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, n = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; return Math.abs(a - n); };
ia.getDifference = wx;
var jx = function (a, n) { var r = Ve.Direction.LEFT, i = Ve.Direction.RIGHT, t = Ve.Direction.NONE; return a === Ve.Axis.Y && (r = Ve.Direction.BOTTOM, i = Ve.Direction.TOP), n === Ve.TraceDirectionKey.NEGATIVE && (t = r), n === Ve.TraceDirectionKey.POSITIVE && (t = i), t; };
ia.resolveAxisDirection = jx;
Object.defineProperty(Vs, "__esModule", { value: !0 });
Vs.calculateDirectionDelta = xx;
var zx = Oe, Hr = ia;
function xx(e) { for (var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, n = e.length, r = n - 1, i = zx.TraceDirectionKey.NONE; r >= 0; r--) {
    var t = e[r], s = (0, Hr.getDirectionKey)(t), o = (0, Hr.getDirectionValue)(t[s]), l = e[r - 1] || {}, c = (0, Hr.getDirectionKey)(l), d = (0, Hr.getDirectionValue)(l[c]), b = (0, Hr.getDifference)(o, d);
    if (b >= a) {
        i = s;
        break;
    }
    else
        i = c;
} return i; }
var Qs = {};
Object.defineProperty(Qs, "__esModule", { value: !0 });
Qs.calculateDuration = qx;
function qx() { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; return e ? a - e : 0; }
var bd = {};
Object.defineProperty(bd, "__esModule", { value: !0 });
bd.calculateMovingPosition = _x;
function _x(e) { if ("changedTouches" in e) {
    var a = e.changedTouches && e.changedTouches[0];
    return { x: a && a.clientX, y: a && a.clientY };
} return { x: e.clientX, y: e.clientY }; }
var yd = {}, Ks = {};
Object.defineProperty(Ks, "__esModule", { value: !0 });
Ks.updateTrace = Sx;
function Sx(e, a) { var n = e[e.length - 1]; return n !== a && e.push(a), e; }
var Gs = {}, Ys = {};
Object.defineProperty(Ys, "__esModule", { value: !0 });
Ys.calculateTraceDirections = Ox;
var ht = Oe;
function Ch(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
function Ox() { for (var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], a = [], n = ht.TraceDirectionKey.POSITIVE, r = ht.TraceDirectionKey.NEGATIVE, i = 0, t = [], s = ht.TraceDirectionKey.NONE; i < e.length; i++) {
    var o = e[i], l = e[i - 1];
    if (t.length) {
        var c = o > l ? n : r;
        s === ht.TraceDirectionKey.NONE && (s = c), c === s ? t.push(o) : (a.push(Ch({}, s, t.slice())), t = [], t.push(o), s = c);
    }
    else
        o !== 0 && (s = o > 0 ? n : r), t.push(o);
} return t.length && a.push(Ch({}, s, t)), a; }
Object.defineProperty(Gs, "__esModule", { value: !0 });
Gs.resolveDirection = Rx;
var Ex = Hs, Px = Ys, Cx = Vs, Th = ia, Tx = Oe;
function Rx(e) { var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Tx.Axis.X, n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0; if (n) {
    var r = (0, Px.calculateTraceDirections)(e), i = (0, Cx.calculateDirectionDelta)(r, n);
    return (0, Th.resolveAxisDirection)(a, i);
} var t = (0, Ex.calculateDirection)(e); return (0, Th.resolveAxisDirection)(a, t); }
var Xs = {};
Object.defineProperty(Xs, "__esModule", { value: !0 });
Xs.calculateVelocity = Nx;
function Nx(e, a, n) { var r = Math.sqrt(e * e + a * a); return r / (n || 1); }
Object.defineProperty(yd, "__esModule", { value: !0 });
yd.calculatePosition = Mx;
var Rh = Ks, Nh = Gs, Ix = Qs, Dx = Xs, Ih = Oe;
function Mx(e, a) { var n = e.start, r = e.x, i = e.y, t = e.traceX, s = e.traceY, o = a.rotatePosition, l = a.directionDelta, c = o.x - r, d = i - o.y, b = Math.abs(c), g = Math.abs(d); (0, Rh.updateTrace)(t, c), (0, Rh.updateTrace)(s, d); var k = (0, Nh.resolveDirection)(t, Ih.Axis.X, l), m = (0, Nh.resolveDirection)(s, Ih.Axis.Y, l), v = (0, Ix.calculateDuration)(n, Date.now()), j = (0, Dx.calculateVelocity)(b, g, v); return { absX: b, absY: g, deltaX: c, deltaY: d, directionX: k, directionY: m, duration: v, positionX: o.x, positionY: o.y, velocity: j }; }
var Js = {};
Object.defineProperty(Js, "__esModule", { value: !0 });
Js.checkIsMoreThanSingleTouches = void 0;
var Ax = function (a) { return !!(a.touches && a.touches.length > 1); };
Js.checkIsMoreThanSingleTouches = Ax;
var Wi = {}, Zs = {};
Object.defineProperty(Zs, "__esModule", { value: !0 });
Zs.createOptions = Lx;
function Lx() { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return Object.defineProperty(e, "passive", { get: function () { return this.isPassiveSupported = !0, !0; }, enumerable: !0 }), e; }
Object.defineProperty(Wi, "__esModule", { value: !0 });
Wi.checkIsPassiveSupported = $x;
Wi.noop = void 0;
var Fx = Zs;
function $x(e) { if (typeof e == "boolean")
    return e; var a = { isPassiveSupported: e }; try {
    var n = (0, Fx.createOptions)(a);
    window.addEventListener("checkIsPassiveSupported", Xc, n), window.removeEventListener("checkIsPassiveSupported", Xc, n);
}
catch (_q) { } return a.isPassiveSupported; }
var Xc = function () { };
Wi.noop = Xc;
var eo = {};
Object.defineProperty(eo, "__esModule", { value: !0 });
eo.checkIsTouchEventsSupported = void 0;
function Jc(e) {
    "@babel/helpers - typeof";
    return Jc = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (a) { return typeof a; } : function (a) { return a && typeof Symbol == "function" && a.constructor === Symbol && a !== Symbol.prototype ? "symbol" : typeof a; }, Jc(e);
}
var Ux = function () { return (typeof window > "u" ? "undefined" : Jc(window)) === "object" && ("ontouchstart" in window || !!window.navigator.maxTouchPoints); };
eo.checkIsTouchEventsSupported = Ux;
var ao = {};
Object.defineProperty(ao, "__esModule", { value: !0 });
ao.getInitialState = void 0;
function Dh(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function Bx(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Dh(Object(n), !0).forEach(function (r) { Wx(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Dh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function Wx(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
var Hx = function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return Bx({ x: 0, y: 0, start: 0, isSwiping: !1, traceX: [], traceY: [] }, a); };
ao.getInitialState = Hx;
var no = {};
Object.defineProperty(no, "__esModule", { value: !0 });
no.getInitialProps = void 0;
function Mh(e, a) { var n = Object.keys(e); if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    a && (r = r.filter(function (i) { return Object.getOwnPropertyDescriptor(e, i).enumerable; })), n.push.apply(n, r);
} return n; }
function Vx(e) { for (var a = 1; a < arguments.length; a++) {
    var n = arguments[a] != null ? arguments[a] : {};
    a % 2 ? Mh(Object(n), !0).forEach(function (r) { Qx(e, r, n[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Mh(Object(n)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r)); });
} return e; }
function Qx(e, a, n) { return a in e ? Object.defineProperty(e, a, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : e[a] = n, e; }
var Kx = function () { var a = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}; return Vx({ element: null, target: null, delta: 10, directionDelta: 0, rotationAngle: 0, mouseTrackingEnabled: !1, touchTrackingEnabled: !0, preventDefaultTouchmoveEvent: !1, preventTrackingOnMouseleave: !1 }, a); };
no.getInitialProps = Kx;
var kd = {};
Object.defineProperty(kd, "__esModule", { value: !0 });
kd.getOptions = Gx;
function Gx() { var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !1; return e ? { passive: !1 } : {}; }
var vd = {};
Object.defineProperty(vd, "__esModule", { value: !0 });
vd.rotateByAngle = Yx;
function Yx(e) { var a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0; if (a === 0)
    return e; var n = e.x, r = e.y, i = Math.PI / 180 * a, t = n * Math.cos(i) + r * Math.sin(i), s = r * Math.cos(i) - n * Math.sin(i); return { x: t, y: s }; }
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }); var a = Hs; Object.keys(a).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === a[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return a[u]; } }); }); var n = Vs; Object.keys(n).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === n[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return n[u]; } }); }); var r = Qs; Object.keys(r).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === r[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return r[u]; } }); }); var i = bd; Object.keys(i).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === i[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return i[u]; } }); }); var t = yd; Object.keys(t).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === t[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return t[u]; } }); }); var s = Ys; Object.keys(s).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === s[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return s[u]; } }); }); var o = Xs; Object.keys(o).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === o[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return o[u]; } }); }); var l = Js; Object.keys(l).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === l[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return l[u]; } }); }); var c = Wi; Object.keys(c).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === c[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return c[u]; } }); }); var d = eo; Object.keys(d).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === d[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return d[u]; } }); }); var b = ia; Object.keys(b).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === b[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return b[u]; } }); }); var g = Zs; Object.keys(g).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === g[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return g[u]; } }); }); var k = ao; Object.keys(k).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === k[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return k[u]; } }); }); var m = no; Object.keys(m).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === m[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return m[u]; } }); }); var v = kd; Object.keys(v).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === v[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return v[u]; } }); }); var j = Gs; Object.keys(j).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === j[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return j[u]; } }); }); var y = vd; Object.keys(y).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === y[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return y[u]; } }); }); var f = Ks; Object.keys(f).forEach(function (u) { u === "default" || u === "__esModule" || u in e && e[u] === f[u] || Object.defineProperty(e, u, { enumerable: !0, get: function () { return f[u]; } }); }); })(Hb);
(function (e) { function a(g) {
    "@babel/helpers - typeof";
    return a = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function (k) { return typeof k; } : function (k) { return k && typeof Symbol == "function" && k.constructor === Symbol && k !== Symbol.prototype ? "symbol" : typeof k; }, a(g);
} Object.defineProperty(e, "__esModule", { value: !0 }); var n = {}; e.default = void 0; var r = s(Hb), i = Oe; Object.keys(i).forEach(function (g) { g === "default" || g === "__esModule" || Object.prototype.hasOwnProperty.call(n, g) || g in e && e[g] === i[g] || Object.defineProperty(e, g, { enumerable: !0, get: function () { return i[g]; } }); }); function t(g) { if (typeof WeakMap != "function")
    return null; var k = new WeakMap, m = new WeakMap; return (t = function (j) { return j ? m : k; })(g); } function s(g, k) { if (!k && g && g.__esModule)
    return g; if (g === null || a(g) !== "object" && typeof g != "function")
    return { default: g }; var m = t(k); if (m && m.has(g))
    return m.get(g); var v = {}, j = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var y in g)
    if (y !== "default" && Object.prototype.hasOwnProperty.call(g, y)) {
        var f = j ? Object.getOwnPropertyDescriptor(g, y) : null;
        f && (f.get || f.set) ? Object.defineProperty(v, y, f) : v[y] = g[y];
    } return v.default = g, m && m.set(g, v), v; } function o(g, k) { if (!(g instanceof k))
    throw new TypeError("Cannot call a class as a function"); } function l(g, k) { for (var m = 0; m < k.length; m++) {
    var v = k[m];
    v.enumerable = v.enumerable || !1, v.configurable = !0, "value" in v && (v.writable = !0), Object.defineProperty(g, v.key, v);
} } function c(g, k, m) { return k && l(g.prototype, k), m && l(g, m), Object.defineProperty(g, "prototype", { writable: !1 }), g; } function d(g, k, m) { return k in g ? Object.defineProperty(g, k, { value: m, enumerable: !0, configurable: !0, writable: !0 }) : g[k] = m, g; } var b = function () { function g(k) { o(this, g), d(this, "state", void 0), d(this, "props", void 0), this.state = r.getInitialState(), this.props = r.getInitialProps(k), this.handleSwipeStart = this.handleSwipeStart.bind(this), this.handleSwipeMove = this.handleSwipeMove.bind(this), this.handleSwipeEnd = this.handleSwipeEnd.bind(this), this.handleMouseDown = this.handleMouseDown.bind(this), this.handleMouseMove = this.handleMouseMove.bind(this), this.handleMouseUp = this.handleMouseUp.bind(this), this.handleMouseLeave = this.handleMouseLeave.bind(this); } return c(g, [{ key: "init", value: function () { this.setupTouchListeners(), this.setupMouseListeners(); } }, { key: "update", value: function (m) { var v = this.props, j = Object.assign({}, v, m); if (v.element !== j.element || v.target !== j.target) {
            this.destroy(), this.props = j, this.init();
            return;
        } this.props = j, (v.mouseTrackingEnabled !== j.mouseTrackingEnabled || v.preventTrackingOnMouseleave !== j.preventTrackingOnMouseleave) && (this.cleanupMouseListeners(), j.mouseTrackingEnabled ? this.setupMouseListeners() : this.cleanupMouseListeners()), v.touchTrackingEnabled !== j.touchTrackingEnabled && (this.cleanupTouchListeners(), j.touchTrackingEnabled ? this.setupTouchListeners() : this.cleanupTouchListeners()); } }, { key: "destroy", value: function () { this.cleanupMouseListeners(), this.cleanupTouchListeners(), this.state = r.getInitialState(), this.props = r.getInitialProps(); } }, { key: "setupTouchListeners", value: function () { var m = this.props, v = m.element, j = m.target, y = m.touchTrackingEnabled; if (v && y) {
            var f = j || v, u = r.checkIsPassiveSupported(), p = r.getOptions(u);
            f.addEventListener("touchstart", this.handleSwipeStart, p), f.addEventListener("touchmove", this.handleSwipeMove, p), f.addEventListener("touchend", this.handleSwipeEnd, p);
        } } }, { key: "cleanupTouchListeners", value: function () { var m = this.props, v = m.element, j = m.target, y = j || v; y && (y.removeEventListener("touchstart", this.handleSwipeStart), y.removeEventListener("touchmove", this.handleSwipeMove), y.removeEventListener("touchend", this.handleSwipeEnd)); } }, { key: "setupMouseListeners", value: function () { var m = this.props, v = m.element, j = m.mouseTrackingEnabled, y = m.preventTrackingOnMouseleave; j && v && (v.addEventListener("mousedown", this.handleMouseDown), v.addEventListener("mousemove", this.handleMouseMove), v.addEventListener("mouseup", this.handleMouseUp), y && v.addEventListener("mouseleave", this.handleMouseLeave)); } }, { key: "cleanupMouseListeners", value: function () { var m = this.props.element; m && (m.removeEventListener("mousedown", this.handleMouseDown), m.removeEventListener("mousemove", this.handleMouseMove), m.removeEventListener("mouseup", this.handleMouseUp), m.removeEventListener("mouseleave", this.handleMouseLeave)); } }, { key: "getEventData", value: function (m) { var v = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { directionDelta: 0 }, j = this.props.rotationAngle, y = v.directionDelta, f = r.calculateMovingPosition(m), u = r.rotateByAngle(f, j); return r.calculatePosition(this.state, { rotatePosition: u, directionDelta: y }); } }, { key: "handleSwipeStart", value: function (m) { if (!r.checkIsMoreThanSingleTouches(m)) {
            var v = this.props.rotationAngle, j = r.calculateMovingPosition(m), y = r.rotateByAngle(j, v), f = y.x, u = y.y;
            this.state = r.getInitialState({ isSwiping: !1, start: Date.now(), x: f, y: u });
        } } }, { key: "handleSwipeMove", value: function (m) { var v = this.state, j = v.x, y = v.y, f = v.isSwiping; if (!(!j || !y || r.checkIsMoreThanSingleTouches(m))) {
            var u = this.props.directionDelta || 0, p = this.getEventData(m, { directionDelta: u }), w = p.absX, z = p.absY, q = p.deltaX, _ = p.deltaY, T = p.directionX, P = p.directionY, E = p.duration, S = p.velocity, N = this.props, I = N.delta, M = N.preventDefaultTouchmoveEvent, A = N.onSwipeStart, L = N.onSwiping;
            m.cancelable && M && m.preventDefault(), !(w < Number(I) && z < Number(I) && !f) && (A && !f && A(m, { deltaX: q, deltaY: _, absX: w, absY: z, directionX: T, directionY: P, duration: E, velocity: S }), this.state.isSwiping = !0, L && L(m, { deltaX: q, deltaY: _, absX: w, absY: z, directionX: T, directionY: P, duration: E, velocity: S }));
        } } }, { key: "handleSwipeEnd", value: function (m) { var v = this.props, j = v.onSwiped, y = v.onTap; if (this.state.isSwiping) {
            var f = this.props.directionDelta || 0, u = this.getEventData(m, { directionDelta: f });
            j && j(m, u);
        }
        else {
            var p = this.getEventData(m);
            y && y(m, p);
        } this.state = r.getInitialState(); } }, { key: "handleMouseDown", value: function (m) { var v = this.props.target; v ? v === m.target && this.handleSwipeStart(m) : this.handleSwipeStart(m); } }, { key: "handleMouseMove", value: function (m) { this.handleSwipeMove(m); } }, { key: "handleMouseUp", value: function (m) { var v = this.state.isSwiping, j = this.props.target; j ? (j === m.target || v) && this.handleSwipeEnd(m) : this.handleSwipeEnd(m); } }, { key: "handleMouseLeave", value: function (m) { var v = this.state.isSwiping; v && this.handleSwipeEnd(m); } }], [{ key: "isTouchEventsSupported", value: function () { return r.checkIsTouchEventsSupported(); } }]), g; }(); e.default = b; })(Wb);
var Vb = {}, ja = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.Modifiers = e.Classnames = e.AutoplayDirection = e.ControlsStrategy = e.AutoPlayStrategy = e.AnimationType = e.EventType = void 0, function (a) { a.ACTION = "action", a.INIT = "init", a.RESIZE = "resize", a.UPDATE = "update"; }(e.EventType || (e.EventType = {})), function (a) { a.FADEOUT = "fadeout", a.SLIDE = "slide"; }(e.AnimationType || (e.AnimationType = {})), function (a) { a.DEFAULT = "default", a.ALL = "all", a.ACTION = "action", a.NONE = "none"; }(e.AutoPlayStrategy || (e.AutoPlayStrategy = {})), function (a) { a.DEFAULT = "default", a.ALTERNATE = "alternate", a.RESPONSIVE = "responsive"; }(e.ControlsStrategy || (e.ControlsStrategy = {})), function (a) { a.RTL = "rtl", a.LTR = "ltr"; }(e.AutoplayDirection || (e.AutoplayDirection = {})), function (a) { a.ANIMATED = "animated animated-out fadeOut", a.ROOT = "alice-carousel", a.WRAPPER = "alice-carousel__wrapper", a.STAGE = "alice-carousel__stage", a.STAGE_ITEM = "alice-carousel__stage-item", a.DOTS = "alice-carousel__dots", a.DOTS_ITEM = "alice-carousel__dots-item", a.PLAY_BTN = "alice-carousel__play-btn", a.PLAY_BTN_ITEM = "alice-carousel__play-btn-item", a.PLAY_BTN_WRAPPER = "alice-carousel__play-btn-wrapper", a.SLIDE_INFO = "alice-carousel__slide-info", a.SLIDE_INFO_ITEM = "alice-carousel__slide-info-item", a.BUTTON_PREV = "alice-carousel__prev-btn", a.BUTTON_PREV_WRAPPER = "alice-carousel__prev-btn-wrapper", a.BUTTON_PREV_ITEM = "alice-carousel__prev-btn-item", a.BUTTON_NEXT = "alice-carousel__next-btn", a.BUTTON_NEXT_WRAPPER = "alice-carousel__next-btn-wrapper", a.BUTTON_NEXT_ITEM = "alice-carousel__next-btn-item"; }(e.Classnames || (e.Classnames = {})), function (a) { a.ACTIVE = "__active", a.INACTIVE = "__inactive", a.CLONED = "__cloned", a.CUSTOM = "__custom", a.PAUSE = "__pause", a.SEPARATOR = "__separator", a.SSR = "__ssr", a.TARGET = "__target"; }(e.Modifiers || (e.Modifiers = {})); })(ja);
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.defaultProps = void 0; var a = ja; e.defaultProps = { activeIndex: 0, animationDuration: 400, animationEasingFunction: "ease", animationType: a.AnimationType.SLIDE, autoHeight: !1, autoWidth: !1, autoPlay: !1, autoPlayControls: !1, autoPlayDirection: a.AutoplayDirection.LTR, autoPlayInterval: 400, autoPlayStrategy: a.AutoPlayStrategy.DEFAULT, children: void 0, controlsStrategy: a.ControlsStrategy.DEFAULT, disableButtonsControls: !1, disableDotsControls: !1, disableSlideInfo: !0, infinite: !1, innerWidth: void 0, items: void 0, keyboardNavigation: !1, mouseTracking: !1, name: "", paddingLeft: 0, paddingRight: 0, responsive: void 0, swipeDelta: 20, swipeExtraPadding: 200, ssrSilentMode: !0, touchTracking: !0, touchMoveDefaultEvents: !0, onInitialized: function () { }, onResized: function () { }, onResizeEvent: void 0, onSlideChange: function () { }, onSlideChanged: function () { } }; })(Vb);
var Qb = {}, Kb = {}, Ir = {}, wd = {}, jd = {}, zd = {};
(function (e) { var a = function () { return (a = Object.assign || function (i) { for (var t, s = 1, o = arguments.length; s < o; s++)
    for (var l in t = arguments[s])
        Object.prototype.hasOwnProperty.call(t, l) && (i[l] = t[l]); return i; }).apply(this, arguments); }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.mapPositionCoords = e.mapPartialCoords = void 0, function (i) { return i.map(function (t) { return { width: t.width, position: 0 }; }); }), r = (e.mapPartialCoords = n, function (i, t) { return t === void 0 && (t = 0), i.map(function (s) { return s.position > t ? a(a({}, s), { position: t }) : s; }); }); e.mapPositionCoords = r; })(zd);
var Hi = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.isVerticalTouchmoveDetected = e.getFadeoutAnimationPosition = e.getFadeoutAnimationIndex = e.getSwipeTouchendIndex = e.getSwipeTouchendPosition = e.getSwipeTransformationCursor = e.getTransformationItemIndex = e.getSwipeShiftValue = e.getItemCoords = e.getIsLeftDirection = e.shouldRecalculateSwipePosition = e.getSwipeLimitMax = e.getSwipeLimitMin = e.shouldCancelSlideAnimation = e.shouldRecalculateSlideIndex = e.getUpdateSlidePositionIndex = e.getActiveIndex = e.getStartIndex = e.getShiftIndex = void 0; var a = function (p, w) { return (p = p === void 0 ? 0 : p) + (w = w === void 0 ? 0 : w); }, n = (e.getShiftIndex = a, function (p, w) { if (p === void 0 && (p = 0), w = w === void 0 ? 0 : w) {
    if (w <= p)
        return w - 1;
    if (0 < p)
        return p;
} return 0; }), r = (e.getStartIndex = n, function (q) { var w = q.startIndex, w = w === void 0 ? 0 : w, z = q.itemsCount, q = q.infinite; return q !== void 0 && q ? w : (0, e.getStartIndex)(w, z === void 0 ? 0 : z); }), i = (e.getActiveIndex = r, function (p, w) { return p < 0 ? w - 1 : w <= p ? 0 : p; }), t = (e.getUpdateSlidePositionIndex = i, function (p, w) { return p < 0 || w <= p; }), s = (e.shouldRecalculateSlideIndex = t, function (p, w) { return p < 0 || w <= p; }), o = (e.shouldCancelSlideAnimation = s, function (q, T) { var z = q.itemsOffset, q = q.transformationSet, q = q === void 0 ? [] : q, _ = T.infinite, T = T.swipeExtraPadding; return _ ? (q[z === void 0 ? 0 : z] || {}).position : (_ = (q[0] || {}).width, Math.min(T === void 0 ? 0 : T, _ === void 0 ? 0 : _)); }), l = (e.getSwipeLimitMin = o, function (E, q) { var z = q.infinite, q = q.swipeExtraPadding, q = q === void 0 ? 0 : q, _ = E.itemsCount, T = E.itemsOffset, P = E.itemsInSlide, P = P === void 0 ? 1 : P, E = E.transformationSet, E = E === void 0 ? [] : E; return z ? (E[(_ === void 0 ? 1 : _) + (0, e.getShiftIndex)(P, T === void 0 ? 0 : T)] || {}).position || 0 : (0, e.getItemCoords)(-P, E).position + q; }), c = (e.getSwipeLimitMax = l, function (p, w, z) { return -w <= p || Math.abs(p) >= z; }), d = (e.shouldRecalculateSwipePosition = c, function (p) { return (p = p === void 0 ? 0 : p) < 0; }), b = (e.getIsLeftDirection = d, function (p, w) { return (w = w === void 0 ? [] : w).slice(p = p === void 0 ? 0 : p)[0] || { position: 0, width: 0 }; }), g = (e.getItemCoords = b, function (p, w) { return p === void 0 && (p = 0), w === void 0 && (w = []), (0, e.getItemCoords)(p, w).position; }), k = (e.getSwipeShiftValue = g, function (p, w) { return w === void 0 && (w = 0), (p = p === void 0 ? [] : p).findIndex(function (z) { return z.position >= Math.abs(w); }); }), m = (e.getTransformationItemIndex = k, function (p, w, z) { return p === void 0 && (p = []), w === void 0 && (w = 0), z === void 0 && (z = 0), p = (0, e.getTransformationItemIndex)(p, w), (0, e.getIsLeftDirection)(z) ? p : p - 1; }), v = (e.getSwipeTransformationCursor = m, function (E, N, S) { S === void 0 && (S = 0); var q = E.infinite, _ = E.autoWidth, T = E.isStageContentPartial, P = E.swipeAllowedPositionMax, E = E.transformationSet, S = (0, e.getSwipeTransformationCursor)(E, S, N), N = (0, e.getItemCoords)(S, E).position; if (!q) {
    if (_ && T)
        return 0;
    if (P < N)
        return -P;
} return -N; }), j = (e.getSwipeTouchendPosition = v, function (p, N) { var z = N.transformationSet, q = N.itemsInSlide, _ = N.itemsOffset, T = N.itemsCount, P = N.infinite, E = N.isStageContentPartial, S = N.activeIndex, N = N.translate3d; return P || !E && N !== Math.abs(p) ? (E = (0, e.getTransformationItemIndex)(z, p), P ? E < (N = (0, e.getShiftIndex)(q, _)) ? T - q - _ + E : N + T <= E ? E - (N + T) : E - N : E) : S; }), y = (e.getSwipeTouchendIndex = j, function (q) { var w = q.infinite, z = q.activeIndex, q = q.itemsInSlide; return w ? z + q : z; }), f = (e.getFadeoutAnimationIndex = y, function (p, q) { var z = q.activeIndex, q = q.stageWidth; return p < z ? (z - p) * -q || 0 : (p - z) * q || 0; }), u = (e.getFadeoutAnimationPosition = f, function (p, w, z) { return p < (z = z === void 0 ? 0 : z) || p < .1 * w; }); e.isVerticalTouchmoveDetected = u; })(Hi);
(function (e) { var a = function () { return (a = Object.assign || function (S) { for (var N, I = 1, M = arguments.length; I < M; I++)
    for (var A in N = arguments[I])
        Object.prototype.hasOwnProperty.call(N, A) && (S[A] = N[A]); return S; }).apply(this, arguments); }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.getItemsInSlide = e.canUseDOM = e.getTransformMatrix = e.getTranslateXProperty = e.getTouchmoveTranslatePosition = e.getTranslate3dProperty = e.getRenderStageItemStyles = e.getRenderStageStyles = e.getTransitionProperty = e.getRenderWrapperStyles = e.animate = e.shouldHandleResizeEvent = e.getElementFirstChild = e.getElementCursor = e.getAutoheightProperty = e.getElementDimensions = e.getItemWidth = e.createDefaultTransformationSet = e.createAutowidthTransformationSet = e.isElement = e.createClones = e.getItemsOffset = e.getItemsCount = e.getSlides = void 0, zd), r = Hi, i = function (I) { var N = I.children, I = I.items; return N ? N.length ? N : [N] : I === void 0 ? [] : I; }, t = (e.getSlides = i, function (S) { return (0, e.getSlides)(S).length; }), s = (e.getItemsCount = t, function (M) { var N = M.infinite, I = M.paddingRight, M = M.paddingLeft; return N && (M || I) ? 1 : 0; }), o = (e.getItemsOffset = s, function (S) { var N, I, M, A, L = (0, e.getSlides)(S); return S.infinite ? (N = (0, e.getItemsCount)(S), A = (0, e.getItemsOffset)(S), S = (0, e.getItemsInSlide)(N, S), M = Math.min(S, N) + A, I = L.slice(0, M), M = L.slice(-M), A && S === N && (A = L[0], S = L.slice(-1)[0], M.unshift(S), I.push(A)), M.concat(L, I)) : L; }), l = (e.createClones = o, function (S) { try {
    return S instanceof Element || S instanceof HTMLDocument;
}
catch (_q) {
    return !1;
} }), c = (e.isElement = l, function (S, N, I) { N === void 0 && (N = 0), I === void 0 && (I = !1); var M = 0, A = !0, L = []; return (0, e.isElement)(S) && (L = Array.from((S == null ? void 0 : S.children) || []).reduce(function (C, ge, ee) { var G = 0, ee = ee - 1, xe = C[ee], ge = g(ge == null ? void 0 : ge.firstChild).width, ge = ge === void 0 ? 0 : ge; return A = (M += ge) <= N, xe && (G = ee == 0 ? xe.width : xe.width + xe.position), C.push({ position: G, width: ge }), C; }, []), I || (L = A ? (0, n.mapPartialCoords)(L) : (S = M - N, (0, n.mapPositionCoords)(L, S)))), { coords: L, content: M, partial: A }; }), d = (e.createAutowidthTransformationSet = c, function (S, N, I, M) { M === void 0 && (M = !1); var A = 0, L = !0, C = [], $ = (0, e.getItemWidth)(N, I); return C = S.reduce(function (W, G, ge) { var xe = 0, ge = W[ge - 1]; return L = (A += $) <= N, ge && (xe = $ + ge.position || 0), W.push({ width: $, position: xe }), W; }, []), { coords: C = M ? C : L ? (0, n.mapPartialCoords)(C) : (I = A - N, (0, n.mapPositionCoords)(C, I)), content: A, partial: L }; }), b = (e.createDefaultTransformationSet = d, function (S, N) { return 0 < N ? S / N : S; }); function g(S) { return S && S.getBoundingClientRect ? { width: (S = S.getBoundingClientRect()).width, height: S.height } : { width: 0, height: 0 }; } e.getItemWidth = b, e.getElementDimensions = g; var k = function (S, M, A) { var M = (0, e.getElementCursor)(M, A), A = (0, e.getElementFirstChild)(S, M); if ((0, e.isElement)(A))
    return S = window.getComputedStyle(A), M = parseFloat(S.marginTop), S = parseFloat(S.marginBottom), Math.ceil(A.offsetHeight + M + S); }, m = (e.getAutoheightProperty = k, function (S, M) { var I = M.activeIndex, M = M.itemsInSlide; return S.infinite ? I + M + (0, e.getItemsOffset)(S) : I; }), v = (e.getElementCursor = m, function (S, N) { return S = S && S.children || [], S[N] && S[N].firstChild || null; }); function j(S, N, I) { return (N = N === void 0 ? {} : N).width !== (I = I === void 0 ? {} : I).width; } function y(S, A) { var A = A || {}, I = A.position, I = I === void 0 ? 0 : I, M = A.animationDuration, M = M === void 0 ? 0 : M, A = A.animationEasingFunction, A = A === void 0 ? "ease" : A; return S && (0, e.isElement)(S) && (S.style.transition = "transform ".concat(M, "ms ").concat(A, " 0ms"), S.style.transform = "translate3d(".concat(I, "px, 0, 0)")), S; } e.getElementFirstChild = v, e.shouldHandleResizeEvent = j, e.animate = y; var f = function (S, N, I) { var L = S || {}, M = L.paddingLeft, A = L.paddingRight, C = L.autoHeight, L = L.animationDuration, C = C ? (0, e.getAutoheightProperty)(I, S, N) : void 0; return { height: C, transition: C ? "height ".concat(L, "ms") : void 0, paddingLeft: "".concat(M, "px"), paddingRight: "".concat(A, "px") }; }, u = (e.getRenderWrapperStyles = f, function (I) { var I = I || {}, N = I.animationDuration, I = I.animationEasingFunction, I = I === void 0 ? "ease" : I; return "transform ".concat(N === void 0 ? 0 : N, "ms ").concat(I, " 0ms"); }), p = (e.getTransitionProperty = u, function (S, N) { return S = (S || {}).translate3d, S = "translate3d(".concat(-(S === void 0 ? 0 : S), "px, 0, 0)"), a(a({}, N), { transform: S }); }), w = (e.getRenderStageStyles = p, function (S, L) { var C = L.transformationSet, I = L.fadeoutAnimationIndex, M = L.fadeoutAnimationPosition, A = L.fadeoutAnimationProcessing, L = L.animationDuration, C = (C[S] || {}).width; return A && I === S ? { transform: "translateX(".concat(M, "px)"), animationDuration: "".concat(L, "ms"), width: "".concat(C, "px") } : { width: C }; }), z = (e.getRenderStageItemStyles = w, function (S, C) { var I = S, M = C.infinite, A = C.itemsOffset, L = C.itemsInSlide, C = C.transformationSet; return ((C === void 0 ? [] : C)[I = M ? S + (0, r.getShiftIndex)(L === void 0 ? 0 : L, A === void 0 ? 0 : A) : I] || {}).position || 0; }), q = (e.getTranslate3dProperty = z, function (S, N) { return -(N - Math.floor(S)); }); function _(S) { return S = T(S), S = S && S[4] || "", Number(S); } function T(S) { return S && (0, e.isElement)(S) && window.getComputedStyle(S).transform.match(/(-?[0-9.]+)/g) || []; } e.getTouchmoveTranslatePosition = q, e.getTranslateXProperty = _, e.getTransformMatrix = T; var P = function () { var S; try {
    return !!((S = window == null ? void 0 : window.document) != null && S.createElement);
}
catch (_q) {
    return !1;
} }, E = (e.canUseDOM = P, function (S, $) { var I, M = 1, A = $.responsive, L = $.autoWidth, C = $.infinite, $ = $.innerWidth; return L !== void 0 && L ? C !== void 0 && C ? S : M : (A && (L = Object.keys(A)).length && ($ || (0, e.canUseDOM)()) && (I = $ === void 0 ? window.innerWidth : $, L.forEach(function (W) { var G; Number(W) <= I && (G = (W = A[W]).items, W = W.itemsFit, M = (W === void 0 ? "fill" : W) === "contain" ? G : Math.min(G, S)); })), M || 1); }); e.getItemsInSlide = E; })(jd);
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.calculateInitialState = e.getIsStageContentPartial = e.concatClassnames = void 0; var a = jd, n = Hi, r = function () { for (var s = [], o = 0; o < arguments.length; o++)
    s[o] = arguments[o]; return s.filter(Boolean).join(" "); }, i = (e.concatClassnames = r, function (s, o, l) { return o === void 0 && (o = 0), l === void 0 && (l = 0), !(s = s !== void 0 && s) && l <= o; }), t = (e.getIsStageContentPartial = i, function (_, o, l) { l === void 0 && (l = (0, a.canUseDOM)()); var c, d, b = _.animationDuration, b = b === void 0 ? 0 : b, g = _.infinite, g = g !== void 0 && g, k = _.autoPlay, k = k !== void 0 && k, m = _.autoWidth, m = m !== void 0 && m, v = (0, a.createClones)(_), j = (0, a.getTransitionProperty)(), y = (0, a.getItemsCount)(_), f = (0, a.getItemsOffset)(_), u = (0, a.getItemsInSlide)(y, _), p = (0, n.getStartIndex)(_.activeIndex, y), p = (0, n.getActiveIndex)({ startIndex: p, itemsCount: y, infinite: g }), w = (0, a.getElementDimensions)(o).width, z = (d = (o = (m ? (c = (o = (0, a.createAutowidthTransformationSet)(o, w, g)).coords, d = o.content, o) : (c = (o = (0, a.createDefaultTransformationSet)(v, w, u, g)).coords, d = o.content, o)).partial, d), (0, n.getItemCoords)(-u, c = c).position), q = (0, n.getSwipeLimitMin)({ itemsOffset: f, transformationSet: c }, _), _ = (0, n.getSwipeLimitMax)({ itemsCount: y, itemsOffset: f, itemsInSlide: u, transformationSet: c }, _), T = (0, n.getSwipeShiftValue)(y, c); return { activeIndex: p, autoWidth: m, animationDuration: b, clones: v, infinite: g, itemsCount: y, itemsInSlide: u, itemsOffset: f, translate3d: (0, a.getTranslate3dProperty)(p, { itemsInSlide: u, itemsOffset: f, transformationSet: c, autoWidth: m, infinite: g }), stageWidth: w, stageContentWidth: d, initialStageHeight: 0, isStageContentPartial: o, isAutoPlaying: k, isAutoPlayCanceledOnAction: !1, transformationSet: c, transition: j, fadeoutAnimationIndex: null, fadeoutAnimationPosition: null, fadeoutAnimationProcessing: !1, swipeLimitMin: q, swipeLimitMax: _, swipeAllowedPositionMax: z, swipeShiftValue: T, canUseDom: l }; }); e.calculateInitialState = t; })(wd);
var Gb = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.isClonedItem = e.isTargetItem = e.isActiveItem = e.getRenderStageItemClasses = void 0; var a = ja, n = wd, r = Hi, i = function (m, k) { m === void 0 && (m = 0); var d = k.fadeoutAnimationIndex, b = (0, e.isActiveItem)(m, k) ? a.Modifiers.ACTIVE : "", g = (0, e.isClonedItem)(m, k) ? a.Modifiers.CLONED : "", k = (0, e.isTargetItem)(m, k) ? a.Modifiers.TARGET : "", m = m === d ? a.Classnames.ANIMATED : ""; return (0, n.concatClassnames)(a.Classnames.STAGE_ITEM, b, g, k, m); }, t = (e.getRenderStageItemClasses = i, function (l, m) { l === void 0 && (l = 0); var d = m.activeIndex, b = m.itemsInSlide, g = m.itemsOffset, k = m.infinite, m = m.autoWidth, v = (0, r.getShiftIndex)(b, g); return m && k ? l - v === d + g : (m = d + v, k ? m <= l && l < m + b : d <= l && l < m); }), s = (e.isActiveItem = t, function (l, k) { l === void 0 && (l = 0); var d = k.activeIndex, m = k.itemsInSlide, b = k.itemsOffset, g = k.infinite, k = k.autoWidth, m = (0, r.getShiftIndex)(m, b); return g ? k && g ? l - m === d + b : l === d + m : l === d; }), o = (e.isTargetItem = s, function (l, m) { l === void 0 && (l = 0); var d = m.itemsInSlide, b = m.itemsOffset, g = m.itemsCount, k = m.infinite, m = m.autoWidth; return !!k && (m && k ? l < d || g - 1 + d < l : l < (m = (0, r.getShiftIndex)(d, b)) || g - 1 + m < l); }); e.isClonedItem = o; })(Gb);
var Yb = {};
(function (e) { function a(n, r) { r === void 0 && (r = 0); function i() { t && (clearTimeout(t), t = void 0); } var t = void 0; return [function () { for (var s = this, o = [], l = 0; l < arguments.length; l++)
        o[l] = arguments[l]; i(), t = window.setTimeout(function () { n.apply(s, o), t = void 0; }, r); }, i]; } Object.defineProperty(e, "__esModule", { value: !0 }), e.debounce = void 0, e.debounce = a; })(Yb);
var Xb = {};
(function (e) { function a() { for (var n = [], r = 0; r < arguments.length; r++)
    n[r] = arguments[r]; } Object.defineProperty(e, "__esModule", { value: !0 }), e.debug = void 0, e.debug = a; })(Xb);
var Jb = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.getSlideItemInfo = e.getSlideInfo = e.getSlideIndexForMultipleItems = e.getSlideIndexForNonMultipleItems = e.getActiveSlideDotsLength = e.getActiveSlideIndex = void 0; var a = function (o, d) { var d = d || {}, b = d.activeIndex, c = d.itemsInSlide, d = d.itemsCount, b = b + c; return c === 1 ? (0, e.getSlideIndexForNonMultipleItems)(b, c, d) : (0, e.getSlideIndexForMultipleItems)(b, c, d, o); }, n = (e.getActiveSlideIndex = a, function (o, l) { var c; return l === void 0 && (l = 1), (o = o === void 0 ? 0 : o) && l ? (c = Math.floor(o / l), o % l == 0 ? c - 1 : c) : 0; }), r = (e.getActiveSlideDotsLength = n, function (o, l, c) { return o < l ? c - l : c < o ? 0 : o - 1; }), i = (e.getSlideIndexForNonMultipleItems = r, function (o, l, c, d) { var b = (0, e.getActiveSlideDotsLength)(c, l); return o === c + l ? 0 : d || o < l && o !== 0 ? b : o === 0 ? c % l == 0 ? b : b - 1 : 0 < l ? Math.floor(o / l) - 1 : 0; }), t = (e.getSlideIndexForMultipleItems = i, function (o, l) { return l === void 0 && (l = 0), o = (o = o === void 0 ? 0 : o) + 1, o < 1 ? o = l : l < o && (o = 1), { item: o, itemsCount: l }; }), s = (e.getSlideInfo = t, function (l) { var l = l || {}, c = l.itemsInSlide, d = l.activeIndex, b = l.infinite, g = l.itemsCount; return l.isStageContentPartial ? { isPrevSlideDisabled: !0, isNextSlideDisabled: !0 } : { isPrevSlideDisabled: b === !1 && d === 0, isNextSlideDisabled: b === !1 && g - c <= d }; }); e.getSlideItemInfo = s; })(Jb);
var Zb = {};
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.shouldCancelAutoPlayOnHover = e.shouldCancelAutoPlayOnAction = e.getItemIndexForDotNavigation = e.checkIsTheLastDotIndex = e.getDotsNavigationLength = e.hasDotForEachSlide = e.isStrategy = e.shouldDisableButtons = e.shouldDisableDots = e.shouldDisableControls = void 0; var a = ja; function n(m, y) { var m = (m || {}).controlsStrategy, y = y || {}, v = y.itemsInSlide, j = y.itemsCount, y = y.autoWidth; if ((0, e.isStrategy)(m, a.ControlsStrategy.RESPONSIVE))
    return !y && v === j; } function r(g, k) { return g.disableDotsControls || n(g, k); } function i(g, k) { return g.disableButtonsControls || !g.infinite && n(g, k); } e.shouldDisableControls = n, e.shouldDisableDots = r, e.shouldDisableButtons = i; var t = function (g, k) { return g === void 0 && (g = ""), k === void 0 && (k = ""), !!(g && g.includes(k)); }, s = (e.isStrategy = t, function (g, k) { return g || (0, e.isStrategy)(k, a.ControlsStrategy.ALTERNATE); }), o = (e.hasDotForEachSlide = s, function (g, k, m) { return g === void 0 && (g = 0), k === void 0 && (k = 1), (m = m !== void 0 && m) ? g : Number(k) !== 0 && Math.ceil(g / k) || 0; }), l = (e.getDotsNavigationLength = o, function (g, k, m) { return !k && g === m - 1; }), c = (e.checkIsTheLastDotIndex = l, function (g, k, m, v) { return (k ? m - v : g * v) || 0; }), d = (e.getItemIndexForDotNavigation = c, function (g) { return (g = g === void 0 ? "" : g) === a.AutoPlayStrategy.ACTION || g === a.AutoPlayStrategy.ALL; }), b = (e.shouldCancelAutoPlayOnAction = d, function (g) { return (g = g === void 0 ? "" : g) === a.AutoPlayStrategy.DEFAULT || g === a.AutoPlayStrategy.ALL; }); e.shouldCancelAutoPlayOnHover = b; })(Zb);
(function (e) { var a = Object.create ? function (r, i, t, s) { s === void 0 && (s = t); var o = Object.getOwnPropertyDescriptor(i, t); o && ("get" in o ? i.__esModule : !o.writable && !o.configurable) || (o = { enumerable: !0, get: function () { return i[t]; } }), Object.defineProperty(r, s, o); } : function (r, i, t, s) { r[s = s === void 0 ? t : s] = i[t]; }, n = function (r, i) { for (var t in r)
    t === "default" || Object.prototype.hasOwnProperty.call(i, t) || a(i, r, t); }; Object.defineProperty(e, "__esModule", { value: !0 }), n(wd, e), n(jd, e), n(Gb, e), n(Yb, e), n(Hi, e), n(Xb, e), n(Jb, e), n(Zb, e), n(zd, e); })(Ir);
(function (e) { var a = function (s) { return s && s.__esModule ? s : { default: s }; }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.SlideInfo = void 0, a(O)), r = ja, i = Ir, t = function (l) { var c = l.activeIndex, o = l.itemsCount, l = l.renderSlideInfo, c = (0, i.getSlideInfo)(c, o).item; return typeof l == "function" ? n.default.createElement("div", { className: r.Classnames.SLIDE_INFO }, l({ item: c, itemsCount: o })) : (l = (0, i.concatClassnames)(r.Classnames.SLIDE_INFO_ITEM, r.Modifiers.SEPARATOR), n.default.createElement("div", { className: r.Classnames.SLIDE_INFO }, n.default.createElement("span", { className: r.Classnames.SLIDE_INFO_ITEM }, c), n.default.createElement("span", { className: l }, "/"), n.default.createElement("span", { className: r.Classnames.SLIDE_INFO_ITEM }, o))); }; e.SlideInfo = t; })(Kb);
var ey = {};
(function (e) { var a = function (i) { return i && i.__esModule ? i : { default: i }; }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.StageItem = void 0, a(O)), r = function (o) { var t = o.item, s = o.className, o = o.styles; return n.default.createElement("li", { style: o, className: s }, t); }; e.StageItem = r; })(ey);
var ay = {};
(function (e) { var a = function (s) { return s && s.__esModule ? s : { default: s }; }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.DotsNavigation = void 0, a(O)), r = ja, i = Ir, t = function (j) { var o = j.state, l = j.onClick, c = j.onMouseEnter, d = j.onMouseLeave, b = j.controlsStrategy, g = j.renderDotsItem, k = o.itemsCount, m = o.itemsInSlide, v = o.infinite, j = o.autoWidth, y = o.activeIndex, f = (0, i.getSlideItemInfo)(o).isNextSlideDisabled, u = (0, i.hasDotForEachSlide)(j, b), p = (0, i.getDotsNavigationLength)(k, m, u); return n.default.createElement("ul", { className: r.Classnames.DOTS }, Array.from({ length: k }).map(function (w, z) { var q, _, T; if (z < p)
    return _ = (0, i.checkIsTheLastDotIndex)(z, !!v, p), q = (0, i.getItemIndexForDotNavigation)(z, _, k, m), _ = (0, i.getActiveSlideIndex)(f, o), u && ((_ = y) < 0 ? _ = k - 1 : k <= y && (_ = 0), q = z), _ = _ === z ? r.Modifiers.ACTIVE : "", T = g ? r.Modifiers.CUSTOM : "", T = (0, i.concatClassnames)(r.Classnames.DOTS_ITEM, _, T), n.default.createElement("li", { key: "dot-item-".concat(z), onMouseEnter: c, onMouseLeave: d, onClick: function () { return l(q); }, className: T }, g && g({ isActive: !!_, activeIndex: z })); })); }; e.DotsNavigation = t; })(ay);
var ny = {};
(function (e) { var a = function (s) { return s && s.__esModule ? s : { default: s }; }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.PlayPauseButton = void 0, a(O)), r = ja, i = Ir, t = function (c) { var o = c.isPlaying, l = c.onClick, c = c.renderPlayPauseButton; return typeof c == "function" ? n.default.createElement("div", { className: r.Classnames.PLAY_BTN, onClick: l }, c({ isPlaying: o })) : (c = o ? r.Modifiers.PAUSE : "", o = (0, i.concatClassnames)(r.Classnames.PLAY_BTN_ITEM, c), n.default.createElement("div", { className: r.Classnames.PLAY_BTN }, n.default.createElement("div", { className: r.Classnames.PLAY_BTN_WRAPPER }, n.default.createElement("div", { onClick: l, className: o })))); }; e.PlayPauseButton = t; })(ny);
var ry = {};
(function (e) { var a = function (s) { return s && s.__esModule ? s : { default: s }; }, n = (Object.defineProperty(e, "__esModule", { value: !0 }), e.PrevNextButton = void 0, a(O)), r = ja, i = Ir, t = function (g) { var o, l = g.name, c = g.isDisabled, d = g.onClick, b = g.renderPrevButton, g = g.renderNextButton; return typeof b == "function" ? n.default.createElement("div", { className: r.Classnames.BUTTON_PREV, onClick: d }, b({ isDisabled: c })) : typeof g == "function" ? n.default.createElement("div", { className: r.Classnames.BUTTON_NEXT, onClick: d }, g({ isDisabled: c })) : (g = (b = l === "prev") ? "<" : ">", l = b ? r.Classnames.BUTTON_PREV : r.Classnames.BUTTON_NEXT, o = b ? r.Classnames.BUTTON_PREV_WRAPPER : r.Classnames.BUTTON_NEXT_WRAPPER, b = b ? r.Classnames.BUTTON_PREV_ITEM : r.Classnames.BUTTON_NEXT_ITEM, c = c ? r.Modifiers.INACTIVE : "", b = (0, i.concatClassnames)(b, c), n.default.createElement("div", { className: l }, n.default.createElement("div", { className: o }, n.default.createElement("p", { className: b, onClick: function (k) { return d(k); } }, n.default.createElement("span", { "data-area": g }))))); }; e.PrevNextButton = t; })(ry);
(function (e) { Object.defineProperty(e, "__esModule", { value: !0 }), e.PrevNextButton = e.PlayPauseButton = e.DotsNavigation = e.StageItem = e.SlideInfo = void 0; var a = Kb, n = (Object.defineProperty(e, "SlideInfo", { enumerable: !0, get: function () { return a.SlideInfo; } }), ey), r = (Object.defineProperty(e, "StageItem", { enumerable: !0, get: function () { return n.StageItem; } }), ay), i = (Object.defineProperty(e, "DotsNavigation", { enumerable: !0, get: function () { return r.DotsNavigation; } }), ny), t = (Object.defineProperty(e, "PlayPauseButton", { enumerable: !0, get: function () { return i.PlayPauseButton; } }), ry); Object.defineProperty(e, "PrevNextButton", { enumerable: !0, get: function () { return t.PrevNextButton; } }); })(Qb);
(function (e) { var a = function () { var y = function (f, u) { return (y = Object.setPrototypeOf || ({ __proto__: [] } instanceof Array ? function (p, w) { p.__proto__ = w; } : function (p, w) { for (var z in w)
    Object.prototype.hasOwnProperty.call(w, z) && (p[z] = w[z]); }))(f, u); }; return function (f, u) { if (typeof u != "function" && u !== null)
    throw new TypeError("Class extends value " + String(u) + " is not a constructor or null"); function p() { this.constructor = f; } y(f, u), f.prototype = u === null ? Object.create(u) : (p.prototype = u.prototype, new p); }; }(), n = function () { return (n = Object.assign || function (y) { for (var f, u = 1, p = arguments.length; u < p; u++)
    for (var w in f = arguments[u])
        Object.prototype.hasOwnProperty.call(f, w) && (y[w] = f[w]); return y; }).apply(this, arguments); }, r = Object.create ? function (y, f, u, p) { p === void 0 && (p = u); var w = Object.getOwnPropertyDescriptor(f, u); w && ("get" in w ? f.__esModule : !w.writable && !w.configurable) || (w = { enumerable: !0, get: function () { return f[u]; } }), Object.defineProperty(y, p, w); } : function (y, f, u, p) { y[p = p === void 0 ? u : p] = f[u]; }, i = Object.create ? function (y, f) { Object.defineProperty(y, "default", { enumerable: !0, value: f }); } : function (y, f) { y.default = f; }, t = function (y) { if (y && y.__esModule)
    return y; var f = {}; if (y != null)
    for (var u in y)
        u !== "default" && Object.prototype.hasOwnProperty.call(y, u) && r(f, y, u); return i(f, y), f; }, s = function (y, f) { for (var u in y)
    u === "default" || Object.prototype.hasOwnProperty.call(f, u) || r(f, y, u); }, o = function (y, f, u, p) { return new (u = u || Promise)(function (w, z) { function q(P) { try {
    T(p.next(P));
}
catch (E) {
    z(E);
} } function _(P) { try {
    T(p.throw(P));
}
catch (E) {
    z(E);
} } function T(P) { var E; P.done ? w(P.value) : ((E = P.value) instanceof u ? E : new u(function (S) { S(E); })).then(q, _); } T((p = p.apply(y, f || [])).next()); }); }, l = function (y, f) { var u, p, w, z = { label: 0, sent: function () { if (1 & w[0])
        throw w[1]; return w[1]; }, trys: [], ops: [] }, q = { next: _(0), throw: _(1), return: _(2) }; return typeof Symbol == "function" && (q[Symbol.iterator] = function () { return this; }), q; function _(T) { return function (P) { var E = [T, P]; if (u)
    throw new TypeError("Generator is already executing."); for (; z;)
    try {
        if (u = 1, p && (w = 2 & E[0] ? p.return : E[0] ? p.throw || ((w = p.return) && w.call(p), 0) : p.next) && !(w = w.call(p, E[1])).done)
            return w;
        switch (p = 0, (E = w ? [2 & E[0], w.value] : E)[0]) {
            case 0:
            case 1:
                w = E;
                break;
            case 4: return z.label++, { value: E[1], done: !1 };
            case 5:
                z.label++, p = E[1], E = [0];
                continue;
            case 7:
                E = z.ops.pop(), z.trys.pop();
                continue;
            default:
                if (!(w = 0 < (w = z.trys).length && w[w.length - 1]) && (E[0] === 6 || E[0] === 2)) {
                    z = 0;
                    continue;
                }
                if (E[0] === 3 && (!w || E[1] > w[0] && E[1] < w[3]))
                    z.label = E[1];
                else if (E[0] === 6 && z.label < w[1])
                    z.label = w[1], w = E;
                else {
                    if (!(w && z.label < w[2])) {
                        w[2] && z.ops.pop(), z.trys.pop();
                        continue;
                    }
                    z.label = w[2], z.ops.push(E);
                }
        }
        E = f.call(y, z);
    }
    catch (S) {
        E = [6, S], p = 0;
    }
    finally {
        u = w = 0;
    } if (5 & E[0])
    throw E[1]; return { value: E[0] ? E[1] : void 0, done: !0 }; }; } }, c = function (y) { return y && y.__esModule ? y : { default: y }; }, d = (Object.defineProperty(e, "__esModule", { value: !0 }), c(O)), b = c(Wb), g = Vb, k = t(Qb), m = t(Ir), v = ja, j = (s(ja, e), function (y) { function f(u) { var p = y.call(this, u) || this; return p.swipeListener = null, p._handleKeyboardEvents = function (w) { switch (w.code) {
    case "Space": return p.props.autoPlay && p._handlePlayPauseToggle();
    case "ArrowLeft": return p.slidePrev(w);
    case "ArrowRight": return p.slideNext(w);
} }, p._handleBeforeSlideEnd = function (w) { return o(p, void 0, void 0, function () { var z, q, _; return l(this, function (T) { switch (T.label) {
    case 0: return q = this.state, _ = q.activeIndex, z = q.itemsCount, q = q.fadeoutAnimationProcessing, m.shouldRecalculateSlideIndex(_, z) ? (_ = m.getUpdateSlidePositionIndex(_, z), [4, this._handleUpdateSlidePosition(_)]) : [3, 2];
    case 1: return T.sent(), [3, 4];
    case 2: return q ? [4, this.setState({ fadeoutAnimationIndex: null, fadeoutAnimationPosition: null, fadeoutAnimationProcessing: !1 })] : [3, 4];
    case 3: T.sent(), T.label = 4;
    case 4: return this._handleSlideChanged(w), [2];
} }); }); }, p._handleMouseEnter = function () { var w = p.props.autoPlayStrategy; m.shouldCancelAutoPlayOnHover(w) && p.state.isAutoPlaying && (p.isHovered = !0, p._handlePause()); }, p._handleMouseLeave = function () { p.state.isAutoPlaying && (p.isHovered = !1, p._handlePlay()); }, p._handlePause = function () { p._clearAutoPlayTimeout(); }, p._handlePlayPauseToggle = function () { return o(p, void 0, void 0, function () { var w; return l(this, function (z) { switch (z.label) {
    case 0: return w = this.state.isAutoPlaying, this.hasUserAction = !0, [4, this.setState({ isAutoPlaying: !w, isAutoPlayCanceledOnAction: !0 })];
    case 1: return z.sent(), w ? this._handlePause() : this._handlePlay(), [2];
} }); }); }, p._setRootComponentRef = function (w) { return p.rootElement = w; }, p._setStageComponentRef = function (w) { return p.stageComponent = w; }, p._renderStageItem = function (w, z) { var q = m.getRenderStageItemStyles(z, p.state), _ = m.getRenderStageItemClasses(z, p.state); return d.default.createElement(k.StageItem, { styles: q, className: _, key: "stage-item-".concat(z), item: w }); }, p._renderSlideInfo = function () { var w = p.props.renderSlideInfo, q = p.state, z = q.activeIndex, q = q.itemsCount; return d.default.createElement(k.SlideInfo, { itemsCount: q, activeIndex: z, renderSlideInfo: w }); }, p.state = m.calculateInitialState(u, null), p.isHovered = !1, p.isAnimationDisabled = !1, p.isTouchMoveProcessStarted = !1, p.cancelTouchAnimations = !1, p.hasUserAction = !1, p.rootElement = null, p.rootComponentDimensions = {}, p.stageComponent = null, p.startTouchmovePosition = void 0, p.slideTo = p.slideTo.bind(p), p.slidePrev = p.slidePrev.bind(p), p.slideNext = p.slideNext.bind(p), p._handleTouchmove = p._handleTouchmove.bind(p), p._handleTouchend = p._handleTouchend.bind(p), p._handleDotClick = p._handleDotClick.bind(p), p._handleResize = p._handleResize.bind(p), u = m.debounce(p._handleResize, 100), p._handleResizeDebounced = u[0], p._cancelResizeDebounced = u[1], p; } return a(f, y), f.prototype.componentDidMount = function () { return o(this, void 0, void 0, function () { return l(this, function (u) { switch (u.label) {
    case 0: return [4, this._setInitialState()];
    case 1: return u.sent(), this._addEventListeners(), this._setupSwipeHandlers(), this.props.autoPlay && this._handlePlay(), [2];
} }); }); }, f.prototype.componentDidUpdate = function (u, p) { var C = this.props, w = C.activeIndex, z = C.animationDuration, q = C.autoWidth, _ = C.children, T = C.infinite, P = C.items, E = C.paddingLeft, S = C.paddingRight, N = C.responsive, I = C.swipeExtraPadding, M = C.mouseTracking, A = C.swipeDelta, L = C.touchTracking, C = C.touchMoveDefaultEvents; _ && u.children !== _ ? (_ = p.activeIndex, p = n(n({}, this.props), { activeIndex: _ }), this._updateComponent(p)) : u.autoWidth !== q || u.infinite !== T || u.items !== P || u.paddingLeft !== E || u.paddingRight !== S || u.responsive !== N || u.swipeExtraPadding !== I ? this._updateComponent() : (u.animationDuration !== z && this.setState({ animationDuration: z }), u.activeIndex !== w && this.slideTo(w, v.EventType.UPDATE)), u.swipeDelta === A && u.mouseTracking === M && u.touchTracking === L && u.touchMoveDefaultEvents === C || this._updateSwipeProps(), this.props.keyboardNavigation !== u.keyboardNavigation && this._updateEventListeners(); }, f.prototype.componentWillUnmount = function () { this._cancelResizeDebounced(), this._cancelTimeoutAnimations(), this._removeEventListeners(); }, Object.defineProperty(f.prototype, "eventObject", { get: function () { var p = this.state, u = p.itemsInSlide, p = p.activeIndex, z = m.getSlideItemInfo(this.state), w = z.isNextSlideDisabled, z = z.isPrevSlideDisabled; return { item: p, slide: m.getActiveSlideIndex(w, this.state), itemsInSlide: u, isNextSlideDisabled: w, isPrevSlideDisabled: z, type: v.EventType.ACTION }; }, enumerable: !1, configurable: !0 }), Object.defineProperty(f.prototype, "isFadeoutAnimationAllowed", { get: function () { var u = this.state.itemsInSlide, q = this.props, p = q.animationType, w = q.paddingLeft, z = q.paddingRight, q = q.autoWidth; return u === 1 && p === v.AnimationType.FADEOUT && !(w || z || q); }, enumerable: !1, configurable: !0 }), Object.defineProperty(f.prototype, "touchmovePosition", { get: function () { return this.startTouchmovePosition !== void 0 ? this.startTouchmovePosition : this.state.translate3d; }, enumerable: !1, configurable: !0 }), f.prototype.slideTo = function (u, p) { var w, z, q; u === void 0 && (u = 0), this._handlePause(), this.isFadeoutAnimationAllowed ? (w = m.getUpdateSlidePositionIndex(u, this.state.itemsCount), z = m.getFadeoutAnimationPosition(w, this.state), q = m.getFadeoutAnimationIndex(this.state), this._handleSlideTo({ activeIndex: w, fadeoutAnimationIndex: q, fadeoutAnimationPosition: z, eventType: p })) : this._handleSlideTo({ activeIndex: u, eventType: p }); }, f.prototype.slidePrev = function (z) { this._handlePause(), z && z.isTrusted && (this.hasUserAction = !0); var p, w, z = this.state.activeIndex - 1; this.isFadeoutAnimationAllowed ? (p = -this.state.stageWidth, w = m.getFadeoutAnimationIndex(this.state), this._handleSlideTo({ activeIndex: z, fadeoutAnimationIndex: w, fadeoutAnimationPosition: p })) : this._handleSlideTo({ activeIndex: z }); }, f.prototype.slideNext = function (z) { this._handlePause(), z && z.isTrusted && (this.hasUserAction = !0); var p, w, z = this.state.activeIndex + 1; this.isFadeoutAnimationAllowed ? (p = this.state.stageWidth, w = m.getFadeoutAnimationIndex(this.state), this._handleSlideTo({ activeIndex: z, fadeoutAnimationIndex: w, fadeoutAnimationPosition: p })) : this._handleSlideTo({ activeIndex: z }); }, f.prototype._addEventListeners = function () { window.addEventListener("resize", this._handleResizeDebounced), this.props.keyboardNavigation && window.addEventListener("keyup", this._handleKeyboardEvents); }, f.prototype._removeEventListeners = function () { this.swipeListener && this.swipeListener.destroy(), window.removeEventListener("resize", this._handleResizeDebounced), window.removeEventListener("keyup", this._handleKeyboardEvents); }, f.prototype._updateEventListeners = function () { this.props.keyboardNavigation ? window.addEventListener("keyup", this._handleKeyboardEvents) : window.removeEventListener("keyup", this._handleKeyboardEvents); }, f.prototype._handleResize = function (u) { return o(this, void 0, void 0, function () { var p, w, z; return l(this, function (q) { switch (q.label) {
    case 0: return w = this.props.onResizeEvent, z = m.getElementDimensions(this.rootElement), (w || m.shouldHandleResizeEvent)(u, this.rootComponentDimensions, z) ? (this._cancelTimeoutAnimations(), this.rootComponentDimensions = z, w = this.state, z = w.itemsCount, p = w.isAutoPlaying, w = m.getUpdateSlidePositionIndex(this.state.activeIndex, z), z = m.calculateInitialState(n(n({}, this.props), { activeIndex: w }), this.stageComponent), w = m.getTranslate3dProperty(z.activeIndex, z), z = n(n({}, z), { translate3d: w, isAutoPlaying: p }), m.animate(this.stageComponent, { position: -w }), [4, this.setState(z)]) : [3, 2];
    case 1: q.sent(), this._handleResized(), this.isAnimationDisabled = !1, p && this._handlePlay(), q.label = 2;
    case 2: return [2];
} }); }); }, f.prototype._handleTouchmove = function (u, _) { var w = _.absY, z = _.absX, q = _.deltaX, _ = this.props.swipeDelta, N = this.state, T = N.swipeShiftValue, P = N.swipeLimitMin, E = N.swipeLimitMax, S = N.infinite, N = N.fadeoutAnimationProcessing; if (this.hasUserAction = !0, !(N || !this.isTouchMoveProcessStarted && m.isVerticalTouchmoveDetected(z, w, _))) {
    this.isTouchMoveProcessStarted || (this._cancelTimeoutAnimations(), this._setTouchmovePosition(), this.isAnimationDisabled = !0, this.isTouchMoveProcessStarted = !0, this._handleSlideChange());
    var I = m.getTouchmoveTranslatePosition(q, this.touchmovePosition);
    if (S === !1)
        return P < I || I < -E ? void 0 : void m.animate(this.stageComponent, { position: I });
    if (m.shouldRecalculateSwipePosition(I, P, E))
        try {
            (function M() { m.getIsLeftDirection(q) ? I += T : I += -T, m.shouldRecalculateSwipePosition(I, P, E) && M(); })();
        }
        catch (M) {
            m.debug(M);
        }
    m.animate(this.stageComponent, { position: I });
} }, f.prototype._handleTouchend = function (u, _) { var w, z, q, _ = _.deltaX; this._clearTouchmovePosition(), this.isTouchMoveProcessStarted && (this.isTouchMoveProcessStarted = !1, w = this.state.animationDuration, z = this.props.animationEasingFunction, q = m.getTranslateXProperty(this.stageComponent), _ = m.getSwipeTouchendPosition(this.state, _, q), m.animate(this.stageComponent, { position: _, animationDuration: w, animationEasingFunction: z }), this._handleBeforeTouchEnd(_)); }, f.prototype._handleBeforeTouchEnd = function (u) { var p = this, w = this.state.animationDuration; this.touchEndTimeoutId = window.setTimeout(function () { return o(p, void 0, void 0, function () { var z, q, _, T = this; return l(this, function (P) { switch (P.label) {
    case 0: return z = m.getSwipeTouchendIndex(u, this.state), q = m.getTranslate3dProperty(z, this.state), m.animate(this.stageComponent, { position: -q }), _ = m.getTransitionProperty(), [4, this.setState({ activeIndex: z, translate3d: q, transition: _ })];
    case 1: return P.sent(), requestAnimationFrame(function () { return T._handleSlideChanged(); }), [2];
} }); }); }, w); }, f.prototype._handleSlideTo = function (u) { var z = u.activeIndex, p = z === void 0 ? 0 : z, z = u.fadeoutAnimationIndex, w = z === void 0 ? null : z, z = u.fadeoutAnimationPosition, q = z === void 0 ? null : z, _ = u.eventType; return o(this, void 0, void 0, function () { var T, P, E, S, N = this; return l(this, function (I) { switch (I.label) {
    case 0: return P = this.props, E = P.infinite, P = P.animationEasingFunction, T = this.state, S = T.itemsCount, T = T.animationDuration, this.isAnimationDisabled || this.state.activeIndex === p || !E && m.shouldCancelSlideAnimation(p, S) ? [2] : (this.isAnimationDisabled = !0, this._cancelTimeoutAnimations(), this._handleSlideChange(_), E = !1, S = m.getTranslate3dProperty(p, this.state), P = w !== null && q !== null ? (E = !0, m.getTransitionProperty()) : m.getTransitionProperty({ animationDuration: T, animationEasingFunction: P }), [4, this.setState({ activeIndex: p, transition: P, translate3d: S, animationDuration: T, fadeoutAnimationIndex: w, fadeoutAnimationPosition: q, fadeoutAnimationProcessing: E })]);
    case 1: return I.sent(), this.slideEndTimeoutId = window.setTimeout(function () { return N._handleBeforeSlideEnd(_); }, T), [2];
} }); }); }, f.prototype._handleUpdateSlidePosition = function (u) { return o(this, void 0, void 0, function () { var p, w, z; return l(this, function (q) { switch (q.label) {
    case 0: return p = this.state.animationDuration, w = m.getTranslate3dProperty(u, this.state), z = m.getTransitionProperty({ animationDuration: 0 }), [4, this.setState({ activeIndex: u, translate3d: w, transition: z, animationDuration: p, fadeoutAnimationIndex: null, fadeoutAnimationPosition: null, fadeoutAnimationProcessing: !1 })];
    case 1: return q.sent(), [2];
} }); }); }, f.prototype._handleResized = function () { this.props.onResized && this.props.onResized(n(n({}, this.eventObject), { type: v.EventType.RESIZE })); }, f.prototype._handleSlideChange = function (u) { this.props.onSlideChange && (u = u ? n(n({}, this.eventObject), { type: u }) : this.eventObject, this.props.onSlideChange(u)); }, f.prototype._handleSlideChanged = function (u) { return o(this, void 0, void 0, function () { var p, w, z, q; return l(this, function (_) { switch (_.label) {
    case 0: return w = this.state, p = w.isAutoPlaying, w = w.isAutoPlayCanceledOnAction, z = this.props, q = z.autoPlayStrategy, z = z.onSlideChanged, m.shouldCancelAutoPlayOnAction(q) && this.hasUserAction && !w ? [4, this.setState({ isAutoPlayCanceledOnAction: !0, isAutoPlaying: !1 })] : [3, 2];
    case 1: return _.sent(), [3, 3];
    case 2: p && this._handlePlay(), _.label = 3;
    case 3: return this.isAnimationDisabled = !1, z && (q = u ? n(n({}, this.eventObject), { type: u }) : this.eventObject, z(q)), [2];
} }); }); }, f.prototype._handleDotClick = function (u) { this.hasUserAction = !0, this.slideTo(u); }, f.prototype._handlePlay = function () { this._setAutoPlayInterval(); }, f.prototype._cancelTimeoutAnimations = function () { this._clearAutoPlayTimeout(), this._clearSlideEndTimeout(), this.clearTouchendTimeout(); }, f.prototype._clearAutoPlayTimeout = function () { window.clearTimeout(this.autoPlayTimeoutId), this.autoPlayTimeoutId = void 0; }, f.prototype._clearSlideEndTimeout = function () { clearTimeout(this.slideEndTimeoutId), this.slideEndTimeoutId = void 0; }, f.prototype.clearTouchendTimeout = function () { clearTimeout(this.touchEndTimeoutId), this.touchEndTimeoutId = void 0; }, f.prototype._clearTouchmovePosition = function () { this.startTouchmovePosition = void 0; }, f.prototype._setTouchmovePosition = function () { var u = m.getTranslateXProperty(this.stageComponent); this.startTouchmovePosition = -u; }, f.prototype._setInitialState = function () { return o(this, void 0, void 0, function () { var u; return l(this, function (p) { switch (p.label) {
    case 0: return u = m.calculateInitialState(this.props, this.stageComponent), this.rootComponentDimensions = m.getElementDimensions(this.rootElement), [4, this.setState(u)];
    case 1: return p.sent(), this.props.onInitialized && this.props.onInitialized(n(n({}, this.eventObject), { type: v.EventType.INIT })), [2];
} }); }); }, f.prototype._setAutoPlayInterval = function () { var u = this, w = this.props, p = w.autoPlayDirection, w = w.autoPlayInterval; this.autoPlayTimeoutId = window.setTimeout(function () { u.isHovered || (p === v.AutoplayDirection.RTL ? u.slidePrev() : u.slideNext()); }, w); }, f.prototype._setupSwipeHandlers = function () { this.swipeListener = new b.default({ element: this.rootElement, delta: this.props.swipeDelta, onSwiping: this._handleTouchmove, onSwiped: this._handleTouchend, rotationAngle: 5, mouseTrackingEnabled: this.props.mouseTracking, touchTrackingEnabled: this.props.touchTracking, preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents, preventTrackingOnMouseleave: !0 }), this.swipeListener.init(); }, f.prototype._updateComponent = function (u) { var p = this; u === void 0 && (u = this.props), this._cancelTimeoutAnimations(), this.isAnimationDisabled = !1, this.state.isAutoPlaying && this._handlePlay(), this.setState({ clones: m.createClones(u) }), requestAnimationFrame(function () { p.setState(m.calculateInitialState(u, p.stageComponent)); }); }, f.prototype._updateSwipeProps = function () { this.swipeListener && this.swipeListener.update({ delta: this.props.swipeDelta, mouseTrackingEnabled: this.props.mouseTracking, touchTrackingEnabled: this.props.touchTracking, preventDefaultTouchmoveEvent: !this.props.touchMoveDefaultEvents }); }, f.prototype._renderDotsNavigation = function () { var p = this.props, u = p.renderDotsItem, p = p.controlsStrategy; return d.default.createElement(k.DotsNavigation, { state: this.state, onClick: this._handleDotClick, renderDotsItem: u, controlsStrategy: p }); }, f.prototype._renderPrevButton = function () { var u = this.props.renderPrevButton, p = m.getSlideItemInfo(this.state).isPrevSlideDisabled; return d.default.createElement(k.PrevNextButton, { name: "prev", onClick: this.slidePrev, isDisabled: p, renderPrevButton: u }); }, f.prototype._renderNextButton = function () { var u = this.props.renderNextButton, p = m.getSlideItemInfo(this.state).isNextSlideDisabled; return d.default.createElement(k.PrevNextButton, { name: "next", onClick: this.slideNext, isDisabled: p, renderNextButton: u }); }, f.prototype._renderPlayPauseButton = function () { var u = this.props.renderPlayPauseButton, p = this.state.isAutoPlaying; return d.default.createElement(k.PlayPauseButton, { isPlaying: p, onClick: this._handlePlayPauseToggle, renderPlayPauseButton: u }); }, f.prototype.render = function () { var T = this.state, q = T.translate3d, u = T.clones, _ = T.transition, T = T.canUseDom, p = m.shouldDisableDots(this.props, this.state), w = m.shouldDisableButtons(this.props, this.state), z = m.getRenderWrapperStyles(this.props, this.state, this.stageComponent), q = m.getRenderStageStyles({ translate3d: q }, { transition: _ }), _ = this.props.ssrSilentMode || T ? "" : v.Modifiers.SSR, T = m.concatClassnames(v.Classnames.ROOT, _); return d.default.createElement("div", { className: T }, d.default.createElement("div", { ref: this._setRootComponentRef }, d.default.createElement("div", { style: z, className: v.Classnames.WRAPPER, onMouseEnter: this._handleMouseEnter, onMouseLeave: this._handleMouseLeave }, d.default.createElement("ul", { style: q, className: v.Classnames.STAGE, ref: this._setStageComponentRef }, u.map(this._renderStageItem)))), p ? null : this._renderDotsNavigation(), w ? null : this._renderPrevButton(), w ? null : this._renderNextButton(), this.props.disableSlideInfo ? null : this._renderSlideInfo(), this.props.autoPlayControls ? this._renderPlayPauseButton() : null); }, f.defaultProps = g.defaultProps, f; }(d.default.PureComponent)); e.default = j; })(Bb);
const Xx = xr(Bb);
const Jx = "_freeRibbon_15m0g_1", Zx = "_unravel_15m0g_1", e4 = "_offerRibbon_15m0g_33", a4 = "_outOffStockRibbon_15m0g_65", n4 = "_ribbonContainer_15m0g_92", gt = { freeRibbon: Jx, unravel: Zx, offerRibbon: e4, outOffStockRibbon: a4, ribbonContainer: n4 };
function r4(e) { const { isOffer: a, isOutStock: n, isFree: r } = e, i = (t, s, o) => s && !o && t === 0 ? h.jsx("div", { className: gt.outOffStockRibbon, children: h.jsxs("span", { children: ["Sin", h.jsx("br", {}), "Stock"] }) }) : o && !s && t === 0 ? h.jsx("div", { className: gt.freeRibbon, children: h.jsx("span", { children: h.jsx("strong", { children: "Gratis" }) }) }) : t !== 0 && !o && !s ? h.jsx("div", { className: gt.offerRibbon, children: h.jsxs("span", { children: ["Oferta", h.jsx("br", {}), h.jsx("strong", { children: `${t}%` })] }) }) : null; return h.jsx("div", { className: gt.ribbonContainer, children: i(a, !!n, !!r) }); }
const i4 = "/productDetail";
function iy(e) { const { id: a, imageUrl: n, name: r, code: i, description: t, price: s, isOffer: o, isOutStock: l, isFree: c } = e, { dispatch: d } = O.useContext(Nr), b = () => { d({ type: "CART_REDUCER-add-product", payload: { id: a, imageUrl: n, name: r, code: i, price: s, quantity: 1 } }); }, [g, k] = O.useState(!1), m = O.useRef(null); return O.useEffect(() => { const v = m.current, j = new IntersectionObserver(([y]) => { y.isIntersecting && (k(!0), j.disconnect()); }, { root: null, rootMargin: "0px", threshold: .2 }); return m.current && j.observe(m.current), () => { v && j.unobserve(v); }; }, [m]), h.jsxs($f, { color: "white", style: { width: "19rem", height: "480px", position: "relative", overflow: "hidden" }, innerRef: m, children: [g && (c || l || o > 0 && o < 100) ? h.jsx(r4, { isFree: c, isOutStock: l, isOffer: o }) : null, h.jsx(Ws, { url: n, alt: r, wrapperSize: { width: "100%", height: 200 } }), h.jsxs(Uf, { className: "d-flex flex-column align-items-start justify-content-between", children: [h.jsx(Wf, { className: "h4", tag: "h2", children: h.jsx(nd, { to: `${i4}`, state: { id: a, code: i }, children: r }) }), h.jsx(Bf, { className: "mb-2 text-muted h6", tag: "h3", children: `cod. ${i}` }), h.jsx(hc, { children: t }), h.jsxs(hc, { className: "text-center w-100", children: ["precio: ", h.jsx("strong", { style: { fontSize: "1.6rem" }, children: s.toFixed(2) }), " $USD"] }), h.jsx(ae, { onClick: () => b(), color: "primary", className: "w-100", children: "Agregar al Carrito" })] })] }); }
const pt = 64;
function t4(e) { const { id: a, imageUrl: n, name: r, price: i, quantity: t, code: s } = e, { dispatch: o } = O.useContext(Nr), l = g => i * g, c = () => { o({ type: "CART_REDUCER-add-product", payload: { id: a, imageUrl: n, name: r, price: i, quantity: t, code: s } }); }, d = () => { o({ type: "CART_REDUCER-remove-product", payload: { id: a, imageUrl: n, name: r, price: i, quantity: t, code: s } }); }, b = () => { o({ type: "CART_REDUCER-substract-product", payload: { id: a, imageUrl: n, name: r, price: i, quantity: t, code: s } }); }; return h.jsxs(Y, { className: "mb-3 shadow-sm", children: [h.jsx(B, { children: h.jsx(Ws, { url: n, alt: r, wrapperSize: { width: pt, height: pt }, imageSize: { width: pt, height: pt } }) }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Producto" }), h.jsx("p", { children: r })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Precio" }), h.jsx("p", { children: `${i.toFixed(2)} $usd` })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Cantidad" }), h.jsx($b, { quantity: t, onAddClick: () => c(), onSubstractClick: () => b() })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Total" }), h.jsx("p", { children: h.jsx("strong", { children: `${l(t).toFixed(2)} $usd` }) })] }), h.jsx(B, { children: h.jsx(Y3, { onClick: () => d(), size: "24px" }) })] }); }
function Dn(e) { const { title: a, bodyText: n, action: r, modalState: i, hideCancelButton: t } = e, s = () => i.setState(!i.state), o = t !== null && t !== void 0 ? t : !1; return h.jsx("div", { children: h.jsxs(U2, { isOpen: i.state, toggle: s, children: [h.jsx(Qf, { toggle: s, children: a }), h.jsx(Kf, { children: n }), h.jsxs(Gf, { children: [h.jsx(ae, { color: "primary", outline: !0, onClick: s, hidden: o, children: "Cancelar" }), " ", h.jsx(ae, { color: "primary", onClick: () => r.onAction(), children: h.jsx("strong", { children: r.text }) })] })] }) }); }
const Hn = { usd: "U$S", bsd: "BsD" }, s4 = "/home";
function ty(e) { const { subtotal: a, discount: n, iva: r, igtf: i, totalUsd: t, totalBsd: s, onConfirm: o, currencySelectCheckBox: l } = e, [c, d] = O.useState(!1), { isNationalCurrencyChecked: b, setNationalCurrencyChecked: g } = l, k = we(), m = () => { k(s4); }; return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { title: "Volver", bodyText: "Usted está a punto de abandonar la lista de compras. Presione Aceptar para continuar.", action: { text: "Aceptar", onAction: m }, modalState: { state: c, setState: d } }), h.jsxs(Da, { className: "shadow-sm pb-3", children: [h.jsx(Y, { children: h.jsx(B, { children: h.jsx("h1", { children: "Resumen:" }) }) }), h.jsx("br", {}), h.jsxs(Y, { children: [h.jsx(B, { children: h.jsxs("p", { children: ["Subtotal ", Hn.usd] }) }), h.jsx(B, { className: "text-end", children: h.jsx("p", { className: "h5", children: a.toFixed(2) }) })] }), h.jsxs(Y, { children: [h.jsx(B, { children: h.jsxs("p", { children: ["Descuento ", Hn.usd] }) }), h.jsx(B, { className: "text-end", children: h.jsx("p", { children: n.toFixed(2) }) })] }), h.jsxs(Y, { children: [h.jsx(B, { children: h.jsxs("p", { children: ["IVA ", Hn.usd] }) }), h.jsx(B, { className: "text-end", children: h.jsx("p", { children: r.toFixed(2) }) })] }), h.jsxs(Y, { hidden: b, children: [h.jsx(B, { children: h.jsxs("p", { children: ["IGTF ", Hn.usd] }) }), h.jsx(B, { className: "text-end", children: h.jsx("p", { children: i == null ? void 0 : i.toFixed(2) }) })] }), h.jsxs(Y, { children: [h.jsx(B, { children: h.jsx("p", { children: h.jsxs("strong", { children: ["TOTAL ", b ? Hn.bsd : Hn.usd] }) }) }), h.jsx(B, { className: "text-end", children: h.jsx("p", { className: "h4 fw-bold", children: b ? s.toFixed(2) : t.toFixed(2) }) })] }), h.jsx("br", {}), h.jsx(Y, { children: h.jsxs(B, { className: "text-end", children: [h.jsx(me, { check: !0, children: "Pagar con moneda nacional " }), h.jsx(oe, { type: "checkbox", checked: b, onChange: g ? () => g(v => !v) : void 0 })] }) }), h.jsx("br", {}), h.jsx(Y, { children: h.jsxs(B, { className: "d-flex gap-3 justify-content-end", children: [h.jsx(ae, { color: "primary", outline: !0, onClick: () => d(!0), children: "Volver" }), h.jsx(ae, { color: "primary", onClick: o, children: h.jsx("strong", { children: "Confirmar Pedido" }) })] }) })] })] }); }
function o4(e) { const { name: a, price: n, quantity: r } = e, i = t => n * t; return h.jsxs(Y, { className: "mb-3 shadow-sm", children: [h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Producto" }), h.jsx("p", { children: a })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Precio" }), h.jsx("p", { children: `${n} $usd` })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Cantidad" }), h.jsx("p", { children: r })] }), h.jsxs(B, { children: [h.jsx("p", { className: "h6 fw-bold", children: "Total" }), h.jsx("p", { children: h.jsx("strong", { children: `${i(r)} $usd` }) })] })] }); }
function l4(e) { const { total: a } = e; return h.jsx(Y, { children: h.jsx(B, { md: { size: 3, offset: 9 }, children: h.jsx("p", { children: h.jsx("strong", { children: `Total: ${a}` }) }) }) }); }
function c4(e) { const { id: a, name: n, code: r, description: i, imageUrl: t, price: s } = e, [o, l] = O.useState(0), [c, d] = O.useState(!1), b = we(), { dispatch: g } = O.useContext(Nr), k = () => { b(-1); }, m = () => { d(!0); }, v = () => { g({ type: "CART_REDUCER-add-product", payload: { id: a, imageUrl: t, name: n, code: r, price: s, quantity: o } }), d(!1); }, j = () => l(p => p + 1), y = () => l(p => p > 0 ? p - 1 : 0), f = i.split("**"), u = (p, w) => (p.length > 3 ? p.slice(0, 2) : "abc") + (w.length > 3 ? w.slice(0, 2) : "xyz"); return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { title: "Confirmar", bodyText: `Va a agregar el producto ${n} al carrito de compras. ¿Desea continuar?`, action: { text: "Continuar", onAction: () => v() }, modalState: { state: c, setState: d } }), h.jsxs("div", { className: "border shadow-sm p-3", children: [h.jsx("h1", { children: n }), h.jsx("br", {}), h.jsxs("h2", { className: "fs-6", children: ["Código: ", h.jsx("strong", { children: r })] }), h.jsx("br", {}), h.jsx("ul", { children: f.map(p => h.jsxs(h.Fragment, { children: [h.jsx("li", { children: p }, u(n, p)), h.jsx("br", {})] })) }), h.jsx("br", {}), h.jsxs("div", { className: "d-flex flex-sm-row justify-content-between  ", children: [h.jsx(ae, { color: "primary", outline: !0, onClick: () => k(), children: "Cancelar" }), h.jsx($b, { quantity: o, onAddClick: j, onSubstractClick: y }), h.jsx(ae, { color: "primary", onClick: () => m(), children: "Aceptar" })] })] })] }); }
const u4 = { 0: { items: 1 }, 568: { items: 2 }, 960: { items: 3 }, 1280: { items: 4 } };
function d4({ productList: e }) { const a = e.map(n => h.jsx(iy, Object.assign({}, n), n.id)); return h.jsx(Xx, { mouseTracking: !0, items: a, responsive: u4, controlsStrategy: "alternate", disableButtonsControls: !0, disableDotsControls: !0 }); }
const m4 = "_imageHolder_gkqup_1", h4 = { imageHolder: m4 };
function g4(e) { const { sectionImageUrl: a, sectionName: n } = e, [r, i] = O.useState(0); O.useEffect(() => { const s = () => i(window.scrollY); return window.addEventListener("scroll", s), () => window.removeEventListener("scroll", s); }, []); const t = `${(r * .5).toString()}px`; return h.jsx("div", { className: h4.imageHolder, style: { backgroundImage: `url("${a}")`, backgroundPositionY: t }, children: h.jsx("h1", { className: "text-primary", children: n }) }); }
function sy({ sectionElement: e }) { const { sectionImageUrl: a, sectionName: n, productList: r } = e; return h.jsxs(Da, { className: "p-0 mb-4", tag: "section", children: [h.jsx(g4, { sectionImageUrl: a, sectionName: n }), h.jsx("br", {}), h.jsx(d4, { productList: r })] }); }
const Ah = { width: 640, height: 480 };
function p4(e) { const { product: a, section: n } = e; return h.jsxs(h.Fragment, { children: [h.jsxs(Y, { tag: "section", className: "mb-4", children: [h.jsx(B, { lg: 6, children: h.jsx(Ws, { url: a.imageUrl, alt: a.name, wrapperSize: Ah, imageSize: Ah }) }), h.jsx(B, { lg: { offset: 1, size: 5 }, children: h.jsx(c4, Object.assign({}, a)) })] }), h.jsx(sy, { sectionElement: Object.assign({}, n) })] }); }
const f4 = "/home";
function b4({ children: e }) { const { errorState: a, setErrorState: n } = O.useContext(xa), r = we(), i = () => { n(!1), r(f4); }; return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { title: "Error", bodyText: "Hubo un error con la red, por favor intenta mas tarde.", hideCancelButton: !0, action: { text: "Aceptar", onAction: i }, modalState: { state: a, setState: n } }), h.jsxs(Da, { children: [h.jsx(hx, {}), h.jsx(Da, { className: "p-0 min-vh-100 d-flex flex-column justify-content-start align-items-center mt-3 mb-3", tag: "section", children: e }), h.jsx(bx, {})] })] }); }
function y4() { const { state: e, dispatch: a } = O.useContext(Bi); return O.useContext(xa), O.useEffect(() => { a({ type: "USER_INFO-set-local-info-logged", payload: { token: "1" } }); }, []), console.table(e), null; }
const Lh = "/home";
function k4() { const [e, a] = O.useState(!1), n = we(), r = t => { a(!0), console.log(t); }, i = () => { a(!1), n(Lh); }; return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { hideCancelButton: !0, title: "Olvide mi Contraseña", bodyText: "Se ha enviado una solicitud de renovación de contraseña al correo ....", action: { text: "Aceptar", onAction: () => i() }, modalState: { state: e, setState: a } }), h.jsx(E3, { onCancelNavigateTo: Lh, onConfirm: r })] }); }
function v4() { const { isLoading: e, data: a, isError: n, error: r } = Nn({ queryKey: ["sections"], queryFn: l3 }), { setErrorState: i } = O.useContext(xa); return e ? h.jsx("h1", { children: "Cargando" }) : n ? (console.warn(`Ocurrio error home fetch, Error: ${r.code}`), i(!0), h.jsx("div", { children: "..." })) : h.jsx(h.Fragment, { children: a == null ? void 0 : a.map(t => h.jsx(sy, { sectionElement: t }, t.sectionId)) }); }
const Fh = "/home";
function w4() { const [e] = O.useState(!1), [a, n] = O.useState(!1), r = we(), i = () => { n(!1), r(Fh); }, t = (s, o) => { n(!0), console.table({ user: s, password: o }); }; return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { hideCancelButton: !0, title: "Inicie Sesión", bodyText: "Usted ha iniciado sesion con el usuario ....", modalState: { state: a, setState: n }, action: { text: "Aceptar", onAction: i } }), h.jsx(O3, { isPasswordError: e, onCancelNavigateTo: Fh, onConfirm: (s, o) => t(s, o) })] }); }
const $h = "/login";
function j4() { const [e, a] = O.useState(!1), n = we(), r = Yu({ mutationFn: d3, onSuccess: () => a(!0), onError: console.log }), i = () => { a(!1), n($h); }; return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { hideCancelButton: !0, title: "Registro de Usuario", bodyText: "Usuario registrado con éxito", modalState: { state: e, setState: a }, action: { text: "Aceptar", onAction: () => i() } }), h.jsx($3, { onConfirm: t => r.mutate(t), onCancelNavigateTo: $h })] }); }
const oy = new gn("/productDetail"), z4 = hn.create({ baseURL: oy.fetchingUrl });
function x4(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield z4.get(`${oy.route}?id=${e.id}&code=${e.code}`)).data; });
}
function q4() { const { state: e } = In(), a = { id: e.id, code: e.code }, { data: n, isLoading: r, isError: i, error: t } = Nn({ queryKey: ["product-detail", a], queryFn: ({ queryKey: o }) => { const [l, c] = o; return x4(c); } }), { setErrorState: s } = O.useContext(xa); return r ? h.jsx("div", { children: "Cargando..." }) : i ? (console.warn(`Ocurrio error en productDetail fetch, Error: ${t.code}`), s(!0), h.jsx("div", { children: "..." })) : h.jsx(p4, Object.assign({}, n)); }
const ly = new gn("/addressConfirmation"), cy = hn.create();
function _4(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield cy.get(`${ly.fetchingUrlWithRoute}?id=${e}`)).data; });
}
function S4(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield cy.put(`${ly.fetchingUrlWithRoute}?id=${e.id}`, e)).status; });
}
function xd() { const e = O.useContext(zb); if (!e)
    throw new Error("useOrderInfo hook may wrapped by a orderInfoContextProvider component"); return e; }
const O4 = "/productsList", E4 = "/lastConfirmationOrder";
function P4() { var _q; var o; const { setErrorState: e } = O.useContext(xa), a = we(), { state: n } = O.useContext(Bi), { getOrderId: r } = xd(), i = Yu(S4), t = Nn({ queryKey: ["shippingAddress", (_q = n.token) !== null && _q !== void 0 ? _q : "no-user"], queryFn: () => { var _q; return _4((_q = n.token) !== null && _q !== void 0 ? _q : "no-user"); } }), s = l => { var _q, _5; i.mutate({ id: (_q = (n == null ? void 0 : n.token)) !== null && _q !== void 0 ? _q : "no-user", orderNumber: (_5 = r()) !== null && _5 !== void 0 ? _5 : "", shippingAddress: l }, { onSuccess: () => a(E4), onError: () => e(!0) }); }; return t.isLoading || i.isLoading ? h.jsx(As, { size: 20 }) : (t.isError && e(!0), h.jsx(C3, { onCancelNavigateTo: O4, onConfirm: s, currentAddress: (o = t.data) == null ? void 0 : o.shippingAddress })); }
function C4(e) { const { productsList: a } = e; return h.jsxs(Da, { children: [a.length === 0 ? h.jsx("p", { className: "fs-2", children: "La lista de comrpas está vacía." }) : a.map(n => h.jsx(o4, Object.assign({}, n), `${n.id}-cart`)), a.length <= 0 ? null : h.jsx(l4, { total: 2600 })] }); }
const uy = new gn("/lastConfirmationOrder"), T4 = hn.create({ baseURL: uy.fetchingUrl });
function R4(e) {
    return __awaiter(this, void 0, void 0, function* () { return (yield T4.get(`${uy.route}?orderId=${e}`)).data; });
}
function N4() { var _q, _5, _6, _7, _8, _9, _10; const e = we(), { setErrorState: a } = O.useContext(xa), { getOrderId: n } = xd(), { data: r, isError: i, isLoading: t } = Nn({ queryKey: ["last-confirmation", n()], queryFn: () => { var _q; return R4((_q = n()) !== null && _q !== void 0 ? _q : ""); } }); return i && a(!0), t ? h.jsx(As, { size: 20 }) : h.jsx(Da, { className: "h-100", children: h.jsxs(Y, { children: [h.jsx(B, { xs: "9", children: h.jsx(C4, { productsList: (_q = (r == null ? void 0 : r.productList)) !== null && _q !== void 0 ? _q : [] }) }), h.jsx(B, { xs: "3", children: h.jsx(ty, { subtotal: (_5 = (r == null ? void 0 : r.payResume.subtotal)) !== null && _5 !== void 0 ? _5 : 0, iva: (_6 = (r == null ? void 0 : r.payResume.ivaUsd)) !== null && _6 !== void 0 ? _6 : 0, igtf: (_7 = (r == null ? void 0 : r.payResume.igtf)) !== null && _7 !== void 0 ? _7 : 0, totalUsd: (_8 = (r == null ? void 0 : r.payResume.totalUsd)) !== null && _8 !== void 0 ? _8 : 0, totalBsd: (_9 = (r == null ? void 0 : r.payResume.totalBsd)) !== null && _9 !== void 0 ? _9 : 0, discount: (_10 = (r == null ? void 0 : r.payResume.discount)) !== null && _10 !== void 0 ? _10 : 0, onConfirm: () => e("/addressConfirmation"), currencySelectCheckBox: { isNationalCurrencyChecked: !1 } }) })] }) }); }
function I4(e) { const { list: a } = e; return h.jsx(Da, { children: a.length === 0 ? h.jsx("h1", { children: "Lista de Compra Vacia." }) : a.map(n => h.jsx(t4, Object.assign({}, n), `${n.id}-cart`)) }); }
const D4 = "/addressConfirmation";
function M4() { var _q, _5, _6, _7, _8, _9, _10; var j, y, f, u, p, w, z, q, _, T; const { state: e } = O.useContext(Nr), [a, n] = O.useState(!0), { state: r } = O.useContext(Bi), { isLogged: i, token: t } = r, { getOrderId: s, setNewOrderId: o } = xd(), [l, c] = O.useState(!1), d = we(), { setErrorState: b } = O.useContext(xa), g = Yu(h3), k = l ? "bsd" : "usd", m = Nn({ queryKey: ["cart"], queryFn: () => m3({ userId: t !== null && t !== void 0 ? t : "no-user", cartList: e, orderId: "", currency: k }) }); O.useEffect(() => { a ? n(!1) : g.mutate({ userId: t !== null && t !== void 0 ? t : "no-user", cartList: e, orderId: "", currency: k }); }, [e, l]); const v = () => { var _q; i ? g.mutate({ userId: t !== null && t !== void 0 ? t : "no-user", cartList: e, orderId: (_q = s()) !== null && _q !== void 0 ? _q : o(), currency: k }, { onSuccess: () => d(D4), onError: () => b(!0) }) : console.log("user is not logged"); }; if (m.isError && b(!0), g.isError) {
    const P = { fetchStatus: 400, productsList: [], payResume: { subtotal: 0, discount: 0, ivaUsd: 0, igtf: 0, totalBsd: 0, totalUsd: 0 } }, E = g.error, S = (_q = ((j = E.response) == null ? void 0 : j.data)) !== null && _q !== void 0 ? _q : P;
    if (((y = E.response) == null ? void 0 : y.status) === 401)
        return h.jsx("div", { children: "Usuario no logueado" });
    if (((f = E.response) == null ? void 0 : f.status) === 403 && S.productsList.length > 0)
        return h.jsx("div", { children: "Algún producto sin stock" });
    if (((u = E.response) == null ? void 0 : u.status) === 403 && S.productsList.length === 0)
        return h.jsx("div", { children: "Pedido ya hecho" });
} return h.jsx(Da, { className: "h-100", children: h.jsxs(Y, { children: [h.jsx(B, { xs: "9", children: h.jsx(I4, { list: e }) }), h.jsx(B, { xs: "3", className: "d-flex justify-content-center align-items-center", children: m.isLoading || g.isLoading ? h.jsx(As, { size: 20 }) : h.jsx(ty, { subtotal: g.isSuccess ? g.data.payResume.subtotal : (_5 = ((p = m.data) == null ? void 0 : p.payResume.subtotal)) !== null && _5 !== void 0 ? _5 : 0, iva: g.isSuccess ? g.data.payResume.ivaUsd : (_6 = ((w = m.data) == null ? void 0 : w.payResume.ivaUsd)) !== null && _6 !== void 0 ? _6 : 0, igtf: g.isSuccess ? g.data.payResume.igtf : (_7 = ((z = m.data) == null ? void 0 : z.payResume.igtf)) !== null && _7 !== void 0 ? _7 : 0, totalUsd: g.isSuccess ? g.data.payResume.totalUsd : (_8 = ((q = m.data) == null ? void 0 : q.payResume.totalUsd)) !== null && _8 !== void 0 ? _8 : 0, totalBsd: g.isSuccess ? g.data.payResume.totalBsd : (_9 = ((_ = m.data) == null ? void 0 : _.payResume.totalBsd)) !== null && _9 !== void 0 ? _9 : 0, discount: g.isSuccess ? g.data.payResume.discount : (_10 = ((T = m.data) == null ? void 0 : T.payResume.discount)) !== null && _10 !== void 0 ? _10 : 0, onConfirm: () => v(), currencySelectCheckBox: { isNationalCurrencyChecked: l, setNationalCurrencyChecked: c } }) })] }) }); }
function A4(e) { const { productList: a } = e; return h.jsx("section", { className: "d-flex flex-wrap gap-3 w-100", children: a.map(n => h.jsx(iy, Object.assign({}, n), n.id)) }); }
function L4() { const e = In(), a = { category: e.state.category, searchTerm: e.state.searchText }, n = l => l.category !== void 0 ? { paramKey: l.category, paramFn: _h } : l.searchTerm !== void 0 ? { paramKey: l.searchTerm, paramFn: c3 } : { paramKey: "", paramFn: _h }, { isLoading: r, data: i, isError: t, error: s } = Nn({ queryKey: ["products", n(a).paramKey], queryFn: ({ queryKey: l }) => { const [c, d] = l; return n(a).paramFn(d); } }), { setErrorState: o } = O.useContext(xa); return r ? h.jsx("div", { children: "Cargando..." }) : t ? (console.warn(`Ocurrio error home fetch, Error: ${s.code}`), o(!0), h.jsx("div", { children: "..." })) : h.jsx(A4, { productList: i }); }
const F4 = "/home";
function $4() {
    const [e, a] = O.useState({ orderId: "", bank: "", accountNumber: "", voucheNumber: "", userName: "", phoneNumber: "", voucheDate: "" }), [n, r] = O.useState(!1), i = o => {
        const { orderId: l, bank: c, accountNumber: d, voucheNumber: b, userName: g, phoneNumber: k, voucheDate: m } = o, [v, j, y] = m.length !== 0 ? m.split("-") : ["", "", ""];
        return `
      Usted esta por confirmar un pago del pedido ${l}, realizado por ${g}, 
      teléfono número ${k} el día ${y}, del mes ${j}, del ${v}, 
      depósito número ${b}, de la cuenta ${d} del banco ${c}.
    `;
    }, t = o => { a(o), r(!0); }, s = () => { r(!1), console.table(e); };
    return h.jsxs(h.Fragment, { children: [h.jsx(Dn, { title: "Confirmación de Pago", bodyText: i(e), action: { text: "Aceptar", onAction: () => s() }, modalState: { state: n, setState: r } }), h.jsx(W3, { onCancelNavigateTo: F4, onConfirm: o => { t(o); } })] });
}
function Ho({ children: e, condition: a }) { return a ? e : h.jsx(Wl, { to: "/login" }); }
function U4() { var _q, _5, _6; const { state: e } = O.useContext(Bi); return h.jsxs(fw, { children: [h.jsx(Je, { path: "home", element: h.jsx(v4, {}) }), h.jsx(Je, { path: "userRegistration", element: h.jsx(j4, {}) }), h.jsx(Je, { path: "forgetPassword", element: h.jsx(k4, {}) }), h.jsx(Je, { path: "productsList/*", element: h.jsx(L4, {}) }), h.jsx(Je, { path: "productDetail/*", element: h.jsx(q4, {}) }), h.jsx(Je, { path: "cartList", element: h.jsx(dt, { children: h.jsx(M4, {}) }) }), h.jsx(Je, { path: "addressConfirmation", element: h.jsx(Ho, { condition: (_q = e.isLogged) !== null && _q !== void 0 ? _q : !1, children: h.jsx(dt, { children: h.jsx(P4, {}) }) }) }), h.jsx(Je, { path: "lastConfirmationOrder/*", element: h.jsx(Ho, { condition: (_5 = e.isLogged) !== null && _5 !== void 0 ? _5 : !1, children: h.jsx(dt, { children: h.jsx(N4, {}) }) }) }), h.jsx(Je, { path: "paymentConfirmation", element: h.jsx(Ho, { condition: (_6 = e.isLogged) !== null && _6 !== void 0 ? _6 : !1, children: h.jsx(dt, { children: h.jsx($4, {}) }) }) }), h.jsx(Je, { path: "login", element: e.isLogged ? h.jsx(Wl, { to: "/home" }) : h.jsx(w4, {}) }), h.jsx(Je, { path: "/*", element: h.jsx(Wl, { to: "/home" }) })] }); }
function B4() { return h.jsx(w3, { children: h.jsx(y3, { children: h.jsxs(h.Fragment, { children: [h.jsx(y4, {}), h.jsx(f3, { children: h.jsx(b4, { children: h.jsx(U4, {}) }) })] }) }) }); }
const W4 = new Zv;
Vo.createRoot(document.getElementById("root")).render(h.jsx(U.StrictMode, { children: h.jsx(g1, { client: W4, children: h.jsxs(jw, { children: [h.jsx(B4, {}), h.jsx(O1, {})] }) }) }));
//# sourceMappingURL=index-80a95ae8.js.map