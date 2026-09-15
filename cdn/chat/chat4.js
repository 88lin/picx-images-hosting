! function o(a, s, c) {
    function l(e, t) {
        if (!s[e]) {
            if (!a[e]) { var n = "function" == typeof require && require; if (!t && n) return n(e, !0); if (u) return u(e, !0); var r = new Error("Cannot find module '" + e + "'"); throw r.code = "MODULE_NOT_FOUND", r }
            var i = s[e] = { exports: {} };
            a[e][0].call(i.exports, function (t) { return l(a[e][1][t] || t) }, i, i.exports, o, a, s, c)
        }
        return s[e].exports
    }
    for (var u = "function" == typeof require && require, t = 0; t < c.length; t++) l(c[t]);
    return l
}({
    0: [function () {
        "use strict";
        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];
                    descriptor.enumerable = descriptor.enumerable || false;
                    descriptor.configurable = true;
                    if ("value" in descriptor) descriptor.writable = true;
                    Object.defineProperty(target, descriptor.key, descriptor);
                }
            }
            return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);
                if (staticProps) defineProperties(Constructor, staticProps);
                return Constructor;
            };
        }();
        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }
        (function () {
            var OwO = function () {
                function OwO(option) {
                    var _this = this;
                    _classCallCheck(this, OwO);
                    var defaultOption = {
                        logo: 'OwO表情',
                        container: document.getElementsByClassName('OwO')[0],
                        target: document.getElementsByTagName('textarea')[0],
                        position: 'up',
                        width: '100%',
                        maxHeight: '235px',
                        api: 'js/owo.json'
                    };
                    for (var defaultKey in defaultOption) {
                        if (defaultOption.hasOwnProperty(defaultKey) && !option.hasOwnProperty(defaultKey)) {
                            option[defaultKey] = defaultOption[defaultKey];
                        }
                    }
                    this.container = option.container;
                    this.target = option.target;
                    if (option.position === 'up') {
                        this.container.classList.add('OwO-up');
                    }
                    var xhr = new XMLHttpRequest();
                    xhr.onreadystatechange = function () {
                        if (xhr.readyState === 4) {
                            if (xhr.status >= 200 && xhr.status < 300 || xhr.status === 304) {
                                _this.odata = JSON.parse(xhr.responseText);
                                Object.keys(_this.odata).forEach(function (key) {
                                    if (key === "颜文字" || key.indexOf("小黄豆") !== -1) {
                                        delete _this.odata[key];
                                    }
                                });
                                _this.init(option);
                            } else {
                                console.log('OwO data request was unsuccessful: ' + xhr.status);
                            }
                        }
                    };
                    xhr.open('get', option.api, true);
                    xhr.send(null);
                }
                _createClass(OwO, [{
                    key: 'init',
                    value: function init(option) {
                        var _this2 = this;
                        this.area = option.target;
                        this.packages = Object.keys(this.odata);
                        var html = '\n <div class="OwO-logo sb">' + option.logo + '</div>\n <div class="OwO-body" style="width: ' + option.width + '">';
                        var ctSmojiBigPreviewRem = 5;
                        for (var i = 0; i < this.packages.length; i++) {
                            html += '\n <ul class="OwO-items OwO-' + this.odata[this.packages[i]].name + ' OwO-items-' + this.odata[this.packages[i]].type + (this.odata[this.packages[i]].container[0] && this.odata[this.packages[i]].container[0].big === true ? ' OwO-items-big' : '') + '" style="max-height: ' + (parseInt(option.maxHeight) - 53 + 'px') + ';">';
                            var opackage = this.odata[this.packages[i]].container;
                            for (var _i = 0; _i < opackage.length; _i++) {
                                if (this.odata[this.packages[i]].type === 'smoji') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + this.odata[this.packages[i]].name + "/" + opackage[_i].icon + '">' + '<img data-original="' + 'https://s3-cdn.zsh.moe/smoji/' + this.odata[this.packages[i]].name + "/" + opackage[_i].icon + '.webp" src="" icon="' + opackage[_i].text + '"' + (opackage[_i].big ? ' style="height:var(--ct-smoji-big-preview,' + ctSmojiBigPreviewRem + 'rem);min-height:var(--ct-smoji-big-preview,' + ctSmojiBigPreviewRem + 'rem);width:auto;"' : '') + ' referrerpolicy="no-referrer"></li>';
                                } else if (this.odata[this.packages[i]].type === 'image-zl') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + this.odata[this.packages[i]].name + "/" + opackage[_i].icon + '">' + '<img data-original="' + 'https://emoticons.z-l.top/' + this.odata[this.packages[i]].name + "/" + opackage[_i].icon + '.png" src="" icon="' + opackage[_i].text + '" referrerpolicy="no-referrer"></li>';
                                } else if (this.odata[this.packages[i]].type === 'image') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + opackage[_i].text + '">' + '<img data-original="' + 'https://cdn.jsdmirror.com/gh/btwoa/Fluent-Emoji-3D/' + opackage[_i].text + '.gif" src="" icon="' + opackage[_i].text + '" referrerpolicy="no-referrer"></li>';
                                } else if (this.odata[this.packages[i]].type === 'cat') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + this.odata[this.packages[i]].name + opackage[_i].icon + '">' + '<img data-original="' + 'https://npm.elemecdn.com/blobcat@1.0.0' + "/" + opackage[_i].icon + '.png" src="" icon="' + opackage[_i].text + '" referrerpolicy="no-referrer"></li>';
                                } else if (this.odata[this.packages[i]].type === 'bb_') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + this.odata[this.packages[i]].name + opackage[_i].icon + '">' + '<img data-original="' + 'https://unpkg.com/@waline/emojis@1.1.0/bilibili/bb_' + opackage[_i].icon + '.png" src="" icon="' + opackage[_i].text + '" referrerpolicy="no-referrer"></li>';
                                } else if (this.odata[this.packages[i]].type === 'tuzki') {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '" data-input="' + this.odata[this.packages[i]].name + opackage[_i].icon + '">' + '<img data-original="' + 'https://tools.kalvinbg.cn/static/image/emotion/tuzki/' + opackage[_i].icon + '.gif" src="" icon="' + opackage[_i].text + '" style="min-height:4rem" referrerpolicy="no-referrer"></li>';
                                } else {
                                    html += '\n <li class="OwO-item" title="' + opackage[_i].text + '">' + opackage[_i].icon + '</li>';
                                }
                            }
                            html += '\n </ul>';
                        }
                        html += '\n <div class="OwO-bar">\n <ul class="OwO-packages">';
                        for (var _i2 = 0; _i2 < this.packages.length; _i2++) {
                            html += '\n <li><span>' + this.packages[_i2] + '</span></li>';
                        }
                        html += '\n </ul>\n </div>\n </div>\n ';
                        this.container.innerHTML = html;
                        this.logo = this.container.getElementsByClassName('OwO-logo')[0];
                        this.logo.addEventListener('click', function () {
                            _this2.toggle();
                        });
                        this.container.getElementsByClassName('OwO-body')[0].addEventListener('click', function (e) {
                            var target = null;
                            if (e.target.classList.contains('OwO-item')) {
                                target = e.target;
                            } else if (e.target.parentNode.classList.contains('OwO-item')) {
                                target = e.target.parentNode;
                            }
                            if (target) {
                                var startPos = _this2.area.selectionStart;
                                var endPos = _this2.area.selectionEnd;
                                var areaValue = _this2.area.value;
                                var insertContent;
                                if (target.dataset.hasOwnProperty("input")) {
                                    insertContent = "【" + target.dataset.input + "】";
                                } else {
                                    insertContent = target.innerHTML;
                                }
                                _this2.area.value = areaValue.slice(0, startPos) + insertContent + areaValue.slice(endPos);
                                _this2.area.selectionStart = startPos + insertContent.length;
                                _this2.area.selectionEnd = startPos + insertContent.length;
                                _this2.area.focus();
                                _this2.toggle();
                            }
                        });
                        this.packagesEle = this.container.getElementsByClassName('OwO-packages')[0];
                        (function (ctBar) {
                            if (ctBar) {
                                ctBar.addEventListener('wheel', function (ctEvt) {
                                    if (ctEvt.ctrlKey) return;
                                    var ctMax = ctBar.scrollWidth - ctBar.clientWidth;
                                    if (ctMax <= 0) return;
                                    if (Math.abs(ctEvt.deltaX) > Math.abs(ctEvt.deltaY)) return;
                                    var ctStep = ctEvt.deltaY;
                                    if (ctEvt.deltaMode === 1) ctStep = ctStep * 16;
                                    else if (ctEvt.deltaMode === 2) ctStep = ctStep * ctBar.clientWidth;
                                    if (!ctStep) return;
                                    ctEvt.preventDefault();
                                    ctBar.scrollLeft = Math.max(0, Math.min(ctMax, ctBar.scrollLeft + ctStep));
                                }, { passive: false });
                            }
                        })(this.packagesEle);
                        var _loop = function _loop(_i3) {
                            (function (index) {
                                _this2.packagesEle.children[_i3].addEventListener('click', function () {
                                    _this2.tab(index);
                                });
                            })(_i3);
                        };
                        for (var _i3 = 0; _i3 < this.packagesEle.children.length; _i3++) {
                            _loop(_i3);
                        }
                        this.tab(0);
                    }
                }, {
                    key: 'toggle',
                    value: function toggle() {
                        if (this.container.classList.contains('OwO-open')) {
                            this.container.classList.remove('OwO-open');
                        } else {
                            this.container.classList.add('OwO-open');
                        }
                        try {
                            $("img").lazyload({
                                effect: "fadeIn"
                            });
                        } catch (e) {
                            if (this.container.classList.contains("OwO-open")) {
                                var a = this.container.querySelectorAll(".OwO-items.OwO-items-show>li img");
                                [].forEach.call(a, function (a) {
                                    var b = a.dataset.original;
                                    b && (a.src = b, a.removeAttribute("data-src"));
                                });
                            }
                        }
                    }
                }, {
                    key: 'tab',
                    value: function tab(index) {
                        var itemsShow = this.container.getElementsByClassName('OwO-items-show')[0];
                        if (itemsShow) {
                            itemsShow.classList.remove('OwO-items-show');
                        }
                        this.container.getElementsByClassName('OwO-items')[index].classList.add('OwO-items-show');
                        var packageActive = this.container.getElementsByClassName('OwO-package-active')[0];
                        if (packageActive) {
                            packageActive.classList.remove('OwO-package-active');
                        }
                        this.packagesEle.getElementsByTagName('li')[index].classList.add('OwO-package-active');
                        try {
                            $("img").lazyload({
                                effect: "fadeIn"
                            });
                        } catch (e) {
                            if (this.container.classList.contains("OwO-open")) {
                                var a = this.container.querySelectorAll(".OwO-items.OwO-items-show>li img");
                                [].forEach.call(a, function (a) {
                                    var b = a.dataset.original;
                                    b && (a.src = b, a.removeAttribute("data-original"));
                                });
                            }
                        }
                    }
                }]);
                return OwO;
            }();
            if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
                module.exports = OwO;
            } else {
                window.OwO = OwO;
            }
        })();
    }()],
    1: [function (t, n, e) {
        ! function (t, e) { "use strict"; "object" == typeof n && "object" == typeof n.exports ? n.exports = t.document ? e(t, !0) : function (t) { if (!t.document) throw new Error("jQuery requires a window with a document"); return e(t) } : e(t) }("undefined" != typeof window ? window : this, function (h, t) {
            "use strict";
            var e = [],
                m = h.document,
                r = Object.getPrototypeOf,
                s = e.slice,
                g = e.concat,
                c = e.push,
                i = e.indexOf,
                n = {},
                o = n.toString,
                v = n.hasOwnProperty,
                a = v.toString,
                l = a.call(Object),
                y = {};
            function b(t, e) {
                var n = (e = e || m).createElement("script");
                n.text = t, e.head.appendChild(n).parentNode.removeChild(n)
            }
            function u(t, e) { return e.toUpperCase() }
            var d = "3.0.0 -ajax,-ajax/jsonp,-ajax/load,-ajax/parseXML,-ajax/script,-ajax/var/location,-ajax/var/nonce,-ajax/var/rquery,-ajax/xhr,-manipulation/_evalUrl,-event/ajax,-effects,-effects/Tween,-effects/animatedSelector,-deprecated",
                w = function (t, e) { return new w.fn.init(t, e) },
                f = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
                p = /^-ms-/,
                x = /-([a-z])/g;
            function C(t) {
                var e = !!t && "length" in t && t.length,
                    n = w.type(t);
                return "function" !== n && !w.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
            }
            w.fn = w.prototype = {
                jquery: d,
                constructor: w,
                length: 0,
                toArray: function () { return s.call(this) },
                get: function (t) { return null != t ? t < 0 ? this[t + this.length] : this[t] : s.call(this) },
                pushStack: function (t) { var e = w.merge(this.constructor(), t); return e.prevObject = this, e },
                each: function (t) { return w.each(this, t) },
                map: function (n) { return this.pushStack(w.map(this, function (t, e) { return n.call(t, e, t) })) },
                slice: function () { return this.pushStack(s.apply(this, arguments)) },
                first: function () { return this.eq(0) },
                last: function () { return this.eq(-1) },
                eq: function (t) {
                    var e = this.length,
                        n = +t + (t < 0 ? e : 0);
                    return this.pushStack(0 <= n && n < e ? [this[n]] : [])
                },
                end: function () { return this.prevObject || this.constructor() },
                push: c,
                sort: e.sort,
                splice: e.splice
            }, w.extend = w.fn.extend = function () {
                var t, e, n, r, i, o, a = arguments[0] || {},
                    s = 1,
                    c = arguments.length,
                    l = !1;
                for ("boolean" == typeof a && (l = a, a = arguments[s] || {}, s++), "object" == typeof a || w.isFunction(a) || (a = {}), s === c && (a = this, s--); s < c; s++)
                    if (null != (t = arguments[s]))
                        for (e in t) n = a[e], a !== (r = t[e]) && (l && r && (w.isPlainObject(r) || (i = w.isArray(r))) ? (o = i ? (i = !1, n && w.isArray(n) ? n : []) : n && w.isPlainObject(n) ? n : {}, a[e] = w.extend(l, o, r)) : void 0 !== r && (a[e] = r));
                return a
            }, w.extend({
                expando: "jQuery" + (d + Math.random()).replace(/\D/g, ""),
                isReady: !0,
                error: function (t) { throw new Error(t) },
                noop: function () { },
                isFunction: function (t) { return "function" === w.type(t) },
                isArray: Array.isArray,
                isWindow: function (t) { return null != t && t === t.window },
                isNumeric: function (t) { var e = w.type(t); return ("number" === e || "string" === e) && !isNaN(t - parseFloat(t)) },
                isPlainObject: function (t) { var e, n; return !(!t || "[object Object]" !== o.call(t)) && (!(e = r(t)) || "function" == typeof (n = v.call(e, "constructor") && e.constructor) && a.call(n) === l) },
                isEmptyObject: function (t) { var e; for (e in t) return !1; return !0 },
                type: function (t) { return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? n[o.call(t)] || "object" : typeof t },
                globalEval: function (t) { b(t) },
                camelCase: function (t) { return t.replace(p, "ms-").replace(x, u) },
                nodeName: function (t, e) { return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase() },
                each: function (t, e) {
                    var n, r = 0;
                    if (C(t))
                        for (n = t.length; r < n && !1 !== e.call(t[r], r, t[r]); r++);
                    else
                        for (r in t)
                            if (!1 === e.call(t[r], r, t[r])) break; return t
                },
                trim: function (t) { return null == t ? "" : (t + "").replace(f, "") },
                makeArray: function (t, e) { var n = e || []; return null != t && (C(Object(t)) ? w.merge(n, "string" == typeof t ? [t] : t) : c.call(n, t)), n },
                inArray: function (t, e, n) { return null == e ? -1 : i.call(e, t, n) },
                merge: function (t, e) { for (var n = +e.length, r = 0, i = t.length; r < n; r++) t[i++] = e[r]; return t.length = i, t },
                grep: function (t, e, n) { for (var r = [], i = 0, o = t.length, a = !n; i < o; i++) !e(t[i], i) != a && r.push(t[i]); return r },
                map: function (t, e, n) {
                    var r, i, o = 0,
                        a = [];
                    if (C(t))
                        for (r = t.length; o < r; o++) null != (i = e(t[o], o, n)) && a.push(i);
                    else
                        for (o in t) null != (i = e(t[o], o, n)) && a.push(i);
                    return g.apply([], a)
                },
                guid: 1,
                proxy: function (t, e) { var n, r, i; if ("string" == typeof e && (n = t[e], e = t, t = n), w.isFunction(t)) return r = s.call(arguments, 2), (i = function () { return t.apply(e || this, r.concat(s.call(arguments))) }).guid = t.guid = t.guid || w.guid++, i },
                now: Date.now,
                support: y
            }), "function" == typeof Symbol && (w.fn[Symbol.iterator] = e[Symbol.iterator]), w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) { n["[object " + e + "]"] = e.toLowerCase() });
            var k = function (n) {
                function d(t, e, n) { var r = "0x" + e - 65536; return r != r || n ? e : r < 0 ? String.fromCharCode(65536 + r) : String.fromCharCode(r >> 10 | 55296, 1023 & r | 56320) }
                function i() { C() }
                var t, p, w, o, a, h, f, m, x, c, l, C, k, s, T, g, u, v, y, E = "sizzle" + 1 * new Date,
                    b = n.document,
                    N = 0,
                    r = 0,
                    S = at(),
                    D = at(),
                    A = at(),
                    L = function (t, e) { return t === e && (l = !0), 0 },
                    j = {}.hasOwnProperty,
                    e = [],
                    _ = e.pop,
                    q = e.push,
                    O = e.push,
                    F = e.slice,
                    P = function (t, e) {
                        for (var n = 0, r = t.length; n < r; n++)
                            if (t[n] === e) return n;
                        return -1
                    },
                    H = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
                    z = "[\\x20\\t\\r\\n\\f]",
                    I = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",
                    R = "\\[" + z + "*(" + I + ")(?:" + z + "*([*^$|!~]?=)" + z + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + z + "*\\]",
                    W = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + R + ")*)|.*)\\)|)",
                    B = new RegExp(z + "+", "g"),
                    M = new RegExp("^" + z + "+|((?:^|[^\\\\])(?:\\\\.)*)" + z + "+$", "g"),
                    $ = new RegExp("^" + z + "*," + z + "*"),
                    U = new RegExp("^" + z + "*([>+~]|" + z + ")" + z + "*"),
                    V = new RegExp("=" + z + "*([^\\]'\"]*?)" + z + "*\\]", "g"),
                    X = new RegExp(W),
                    Q = new RegExp("^" + I + "$"),
                    Y = { ID: new RegExp("^#(" + I + ")"), CLASS: new RegExp("^\\.(" + I + ")"), TAG: new RegExp("^(" + I + "|[*])"), ATTR: new RegExp("^" + R), PSEUDO: new RegExp("^" + W), CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + z + "*(even|odd|(([+-]|)(\\d*)n|)" + z + "*(?:([+-]|)" + z + "*(\\d+)|))" + z + "*\\)|)", "i"), bool: new RegExp("^(?:" + H + ")$", "i"), needsContext: new RegExp("^" + z + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + z + "*((?:-\\d)?\\d*)" + z + "*\\)|)(?=[^-]|$)", "i") },
                    G = /^(?:input|select|textarea|button)$/i,
                    J = /^h\d$/i,
                    K = /^[^{]+\{\s*\[native \w/,
                    Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
                    tt = /[+~]/,
                    et = new RegExp("\\\\([\\da-f]{1,6}" + z + "?|(" + z + ")|.)", "ig"),
                    nt = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g,
                    rt = function (t, e) { return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t },
                    it = yt(function (t) { return !0 === t.disabled }, { dir: "parentNode", next: "legend" });
                try { O.apply(e = F.call(b.childNodes), b.childNodes), e[b.childNodes.length].nodeType } catch (t) {
                    O = {
                        apply: e.length ? function (t, e) { q.apply(t, F.call(e)) } : function (t, e) {
                            for (var n = t.length, r = 0; t[n++] = e[r++];);
                            t.length = n - 1
                        }
                    }
                }
                function ot(t, e, n, r) {
                    var i, o, a, s, c, l, u, d = e && e.ownerDocument,
                        f = e ? e.nodeType : 9;
                    if (n = n || [], "string" != typeof t || !t || 1 !== f && 9 !== f && 11 !== f) return n;
                    if (!r && ((e ? e.ownerDocument || e : b) !== k && C(e), e = e || k, T)) {
                        if (11 !== f && (c = Z.exec(t)))
                            if (i = c[1]) { if (9 === f) { if (!(a = e.getElementById(i))) return n; if (a.id === i) return n.push(a), n } else if (d && (a = d.getElementById(i)) && y(e, a) && a.id === i) return n.push(a), n } else { if (c[2]) return O.apply(n, e.getElementsByTagName(t)), n; if ((i = c[3]) && p.getElementsByClassName && e.getElementsByClassName) return O.apply(n, e.getElementsByClassName(i)), n }
                        if (p.qsa && !A[t + " "] && (!g || !g.test(t))) {
                            if (1 !== f) d = e, u = t;
                            else if ("object" !== e.nodeName.toLowerCase()) {
                                for ((s = e.getAttribute("id")) ? s = s.replace(nt, rt) : e.setAttribute("id", s = E), o = (l = h(t)).length; o--;) l[o] = "#" + s + " " + vt(l[o]);
                                u = l.join(","), d = tt.test(t) && mt(e.parentNode) || e
                            }
                            if (u) try { return O.apply(n, d.querySelectorAll(u)), n } catch (t) { } finally { s === E && e.removeAttribute("id") }
                        }
                    }
                    return m(t.replace(M, "$1"), e, n, r)
                }
                function at() { var r = []; return function t(e, n) { return r.push(e + " ") > w.cacheLength && delete t[r.shift()], t[e + " "] = n } }
                function st(t) { return t[E] = !0, t }
                function ct(t) { var e = k.createElement("fieldset"); try { return !!t(e) } catch (t) { return !1 } finally { e.parentNode && e.parentNode.removeChild(e), e = null } }
                function lt(t, e) { for (var n = t.split("|"), r = n.length; r--;) w.attrHandle[n[r]] = e }
                function ut(t, e) {
                    var n = e && t,
                        r = n && 1 === t.nodeType && 1 === e.nodeType && t.sourceIndex - e.sourceIndex;
                    if (r) return r;
                    if (n)
                        for (; n = n.nextSibling;)
                            if (n === e) return -1;
                    return t ? 1 : -1
                }
                function dt(e) { return function (t) { return "input" === t.nodeName.toLowerCase() && t.type === e } }
                function ft(n) { return function (t) { var e = t.nodeName.toLowerCase(); return ("input" === e || "button" === e) && t.type === n } }
                function pt(e) { return function (t) { return "label" in t && t.disabled === e || "form" in t && t.disabled === e || "form" in t && !1 === t.disabled && (t.isDisabled === e || t.isDisabled !== !e && ("label" in t || !it(t)) !== e) } }
                function ht(a) { return st(function (o) { return o = +o, st(function (t, e) { for (var n, r = a([], t.length, o), i = r.length; i--;) t[n = r[i]] && (t[n] = !(e[n] = t[n])) }) }) }
                function mt(t) { return t && void 0 !== t.getElementsByTagName && t }
                for (t in p = ot.support = {}, a = ot.isXML = function (t) { var e = t && (t.ownerDocument || t).documentElement; return !!e && "HTML" !== e.nodeName }, C = ot.setDocument = function (t) {
                    var e, n, r = t ? t.ownerDocument || t : b;
                    return r !== k && 9 === r.nodeType && r.documentElement && (s = (k = r).documentElement, T = !a(k), b !== k && (n = k.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", i, !1) : n.attachEvent && n.attachEvent("onunload", i)), p.attributes = ct(function (t) { return t.className = "i", !t.getAttribute("className") }), p.getElementsByTagName = ct(function (t) { return t.appendChild(k.createComment("")), !t.getElementsByTagName("*").length }), p.getElementsByClassName = K.test(k.getElementsByClassName), p.getById = ct(function (t) { return s.appendChild(t).id = E, !k.getElementsByName || !k.getElementsByName(E).length }), p.getById ? (w.find.ID = function (t, e) { if (void 0 !== e.getElementById && T) { var n = e.getElementById(t); return n ? [n] : [] } }, w.filter.ID = function (t) { var e = t.replace(et, d); return function (t) { return t.getAttribute("id") === e } }) : (delete w.find.ID, w.filter.ID = function (t) { var n = t.replace(et, d); return function (t) { var e = void 0 !== t.getAttributeNode && t.getAttributeNode("id"); return e && e.value === n } }), w.find.TAG = p.getElementsByTagName ? function (t, e) { return void 0 !== e.getElementsByTagName ? e.getElementsByTagName(t) : p.qsa ? e.querySelectorAll(t) : void 0 } : function (t, e) {
                        var n, r = [],
                            i = 0,
                            o = e.getElementsByTagName(t);
                        if ("*" !== t) return o;
                        for (; n = o[i++];) 1 === n.nodeType && r.push(n);
                        return r
                    }, w.find.CLASS = p.getElementsByClassName && function (t, e) { if (void 0 !== e.getElementsByClassName && T) return e.getElementsByClassName(t) }, u = [], g = [], (p.qsa = K.test(k.querySelectorAll)) && (ct(function (t) { s.appendChild(t).innerHTML = "<a id='" + E + "'></a><select id='" + E + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && g.push("[*^$]=" + z + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || g.push("\\[" + z + "*(?:value|" + H + ")"), t.querySelectorAll("[id~=" + E + "-]").length || g.push("~="), t.querySelectorAll(":checked").length || g.push(":checked"), t.querySelectorAll("a#" + E + "+*").length || g.push(".#.+[+~]") }), ct(function (t) {
                        t.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                        var e = k.createElement("input");
                        e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && g.push("name" + z + "*[*^$|!~]?="), 2 !== t.querySelectorAll(":enabled").length && g.push(":enabled", ":disabled"), s.appendChild(t).disabled = !0, 2 !== t.querySelectorAll(":disabled").length && g.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), g.push(",.*:")
                    })), (p.matchesSelector = K.test(v = s.matches || s.webkitMatchesSelector || s.mozMatchesSelector || s.oMatchesSelector || s.msMatchesSelector)) && ct(function (t) { p.disconnectedMatch = v.call(t, "*"), v.call(t, "[s!='']:x"), u.push("!=", W) }), g = g.length && new RegExp(g.join("|")), u = u.length && new RegExp(u.join("|")), e = K.test(s.compareDocumentPosition), y = e || K.test(s.contains) ? function (t, e) {
                        var n = 9 === t.nodeType ? t.documentElement : t,
                            r = e && e.parentNode;
                        return t === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(r)))
                    } : function (t, e) {
                        if (e)
                            for (; e = e.parentNode;)
                                if (e === t) return !0;
                        return !1
                    }, L = e ? function (t, e) { if (t === e) return l = !0, 0; var n = !t.compareDocumentPosition - !e.compareDocumentPosition; return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !p.sortDetached && e.compareDocumentPosition(t) === n ? t === k || t.ownerDocument === b && y(b, t) ? -1 : e === k || e.ownerDocument === b && y(b, e) ? 1 : c ? P(c, t) - P(c, e) : 0 : 4 & n ? -1 : 1) } : function (t, e) {
                        if (t === e) return l = !0, 0;
                        var n, r = 0,
                            i = t.parentNode,
                            o = e.parentNode,
                            a = [t],
                            s = [e];
                        if (!i || !o) return t === k ? -1 : e === k ? 1 : i ? -1 : o ? 1 : c ? P(c, t) - P(c, e) : 0;
                        if (i === o) return ut(t, e);
                        for (n = t; n = n.parentNode;) a.unshift(n);
                        for (n = e; n = n.parentNode;) s.unshift(n);
                        for (; a[r] === s[r];) r++;
                        return r ? ut(a[r], s[r]) : a[r] === b ? -1 : s[r] === b ? 1 : 0
                    }), k
                }, ot.matches = function (t, e) { return ot(t, null, null, e) }, ot.matchesSelector = function (t, e) {
                    if ((t.ownerDocument || t) !== k && C(t), e = e.replace(V, "='$1']"), p.matchesSelector && T && !A[e + " "] && (!u || !u.test(e)) && (!g || !g.test(e))) try { var n = v.call(t, e); if (n || p.disconnectedMatch || t.document && 11 !== t.document.nodeType) return n } catch (t) { }
                    return 0 < ot(e, k, null, [t]).length
                }, ot.contains = function (t, e) { return (t.ownerDocument || t) !== k && C(t), y(t, e) }, ot.attr = function (t, e) {
                    (t.ownerDocument || t) !== k && C(t);
                    var n = w.attrHandle[e.toLowerCase()],
                        r = n && j.call(w.attrHandle, e.toLowerCase()) ? n(t, e, !T) : void 0;
                    return void 0 !== r ? r : p.attributes || !T ? t.getAttribute(e) : (r = t.getAttributeNode(e)) && r.specified ? r.value : null
                }, ot.escape = function (t) { return (t + "").replace(nt, rt) }, ot.error = function (t) { throw new Error("Syntax error, unrecognized expression: " + t) }, ot.uniqueSort = function (t) {
                    var e, n = [],
                        r = 0,
                        i = 0;
                    if (l = !p.detectDuplicates, c = !p.sortStable && t.slice(0), t.sort(L), l) { for (; e = t[i++];) e === t[i] && (r = n.push(i)); for (; r--;) t.splice(n[r], 1) }
                    return c = null, t
                }, o = ot.getText = function (t) {
                    var e, n = "",
                        r = 0,
                        i = t.nodeType;
                    if (i) { if (1 === i || 9 === i || 11 === i) { if ("string" == typeof t.textContent) return t.textContent; for (t = t.firstChild; t; t = t.nextSibling) n += o(t) } else if (3 === i || 4 === i) return t.nodeValue } else
                        for (; e = t[r++];) n += o(e);
                    return n
                }, (w = ot.selectors = {
                    cacheLength: 50,
                    createPseudo: st,
                    match: Y,
                    attrHandle: {},
                    find: {},
                    relative: { ">": { dir: "parentNode", first: !0 }, " ": { dir: "parentNode" }, "+": { dir: "previousSibling", first: !0 }, "~": { dir: "previousSibling" } },
                    preFilter: { ATTR: function (t) { return t[1] = t[1].replace(et, d), t[3] = (t[3] || t[4] || t[5] || "").replace(et, d), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4) }, CHILD: function (t) { return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || ot.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && ot.error(t[0]), t }, PSEUDO: function (t) { var e, n = !t[6] && t[2]; return Y.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && X.test(n) && (e = h(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3)) } },
                    filter: {
                        TAG: function (t) { var e = t.replace(et, d).toLowerCase(); return "*" === t ? function () { return !0 } : function (t) { return t.nodeName && t.nodeName.toLowerCase() === e } },
                        CLASS: function (t) { var e = S[t + " "]; return e || (e = new RegExp("(^|" + z + ")" + t + "(" + z + "|$)")) && S(t, function (t) { return e.test("string" == typeof t.className && t.className || void 0 !== t.getAttribute && t.getAttribute("class") || "") }) },
                        ATTR: function (n, r, i) { return function (t) { var e = ot.attr(t, n); return null == e ? "!=" === r : !r || (e += "", "=" === r ? e === i : "!=" === r ? e !== i : "^=" === r ? i && 0 === e.indexOf(i) : "*=" === r ? i && -1 < e.indexOf(i) : "$=" === r ? i && e.slice(-i.length) === i : "~=" === r ? -1 < (" " + e.replace(B, " ") + " ").indexOf(i) : "|=" === r && (e === i || e.slice(0, i.length + 1) === i + "-")) } },
                        CHILD: function (h, t, e, m, g) {
                            var v = "nth" !== h.slice(0, 3),
                                y = "last" !== h.slice(-4),
                                b = "of-type" === t;
                            return 1 === m && 0 === g ? function (t) { return !!t.parentNode } : function (t, e, n) {
                                var r, i, o, a, s, c, l = v != y ? "nextSibling" : "previousSibling",
                                    u = t.parentNode,
                                    d = b && t.nodeName.toLowerCase(),
                                    f = !n && !b,
                                    p = !1;
                                if (u) {
                                    if (v) {
                                        for (; l;) {
                                            for (a = t; a = a[l];)
                                                if (b ? a.nodeName.toLowerCase() === d : 1 === a.nodeType) return !1;
                                            c = l = "only" === h && !c && "nextSibling"
                                        }
                                        return !0
                                    }
                                    if (c = [y ? u.firstChild : u.lastChild], y && f) {
                                        for (p = (s = (r = (i = (o = (a = u)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]) && r[2], a = s && u.childNodes[s]; a = ++s && a && a[l] || (p = s = 0) || c.pop();)
                                            if (1 === a.nodeType && ++p && a === t) { i[h] = [N, s, p]; break }
                                    } else if (f && (p = s = (r = (i = (o = (a = t)[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === N && r[1]), !1 === p)
                                        for (;
                                            (a = ++s && a && a[l] || (p = s = 0) || c.pop()) && ((b ? a.nodeName.toLowerCase() !== d : 1 !== a.nodeType) || !++p || (f && ((i = (o = a[E] || (a[E] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [N, p]), a !== t)););
                                    return (p -= g) === m || p % m == 0 && 0 <= p / m
                                }
                            }
                        },
                        PSEUDO: function (t, o) { var e, a = w.pseudos[t] || w.setFilters[t.toLowerCase()] || ot.error("unsupported pseudo: " + t); return a[E] ? a(o) : 1 < a.length ? (e = [t, t, "", o], w.setFilters.hasOwnProperty(t.toLowerCase()) ? st(function (t, e) { for (var n, r = a(t, o), i = r.length; i--;) t[n = P(t, r[i])] = !(e[n] = r[i]) }) : function (t) { return a(t, 0, e) }) : a }
                    },
                    pseudos: {
                        not: st(function (t) {
                            var r = [],
                                i = [],
                                s = f(t.replace(M, "$1"));
                            return s[E] ? st(function (t, e, n, r) { for (var i, o = s(t, null, r, []), a = t.length; a--;)(i = o[a]) && (t[a] = !(e[a] = i)) }) : function (t, e, n) { return r[0] = t, s(r, null, n, i), r[0] = null, !i.pop() }
                        }),
                        has: st(function (e) { return function (t) { return 0 < ot(e, t).length } }),
                        contains: st(function (e) {
                            return e = e.replace(et, d),
                                function (t) { return -1 < (t.textContent || t.innerText || o(t)).indexOf(e) }
                        }),
                        lang: st(function (n) {
                            return Q.test(n || "") || ot.error("unsupported lang: " + n), n = n.replace(et, d).toLowerCase(),
                                function (t) {
                                    var e;
                                    do { if (e = T ? t.lang : t.getAttribute("xml:lang") || t.getAttribute("lang")) return (e = e.toLowerCase()) === n || 0 === e.indexOf(n + "-") } while ((t = t.parentNode) && 1 === t.nodeType);
                                    return !1
                                }
                        }),
                        target: function (t) { var e = n.location && n.location.hash; return e && e.slice(1) === t.id },
                        root: function (t) { return t === s },
                        focus: function (t) { return t === k.activeElement && (!k.hasFocus || k.hasFocus()) && !!(t.type || t.href || ~t.tabIndex) },
                        enabled: pt(!1),
                        disabled: pt(!0),
                        checked: function (t) { var e = t.nodeName.toLowerCase(); return "input" === e && !!t.checked || "option" === e && !!t.selected },
                        selected: function (t) { return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected },
                        empty: function (t) {
                            for (t = t.firstChild; t; t = t.nextSibling)
                                if (t.nodeType < 6) return !1;
                            return !0
                        },
                        parent: function (t) { return !w.pseudos.empty(t) },
                        header: function (t) { return J.test(t.nodeName) },
                        input: function (t) { return G.test(t.nodeName) },
                        button: function (t) { var e = t.nodeName.toLowerCase(); return "input" === e && "button" === t.type || "button" === e },
                        text: function (t) { var e; return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase()) },
                        first: ht(function () { return [0] }),
                        last: ht(function (t, e) { return [e - 1] }),
                        eq: ht(function (t, e, n) { return [n < 0 ? n + e : n] }),
                        even: ht(function (t, e) { for (var n = 0; n < e; n += 2) t.push(n); return t }),
                        odd: ht(function (t, e) { for (var n = 1; n < e; n += 2) t.push(n); return t }),
                        lt: ht(function (t, e, n) { for (var r = n < 0 ? n + e : n; 0 <= --r;) t.push(r); return t }),
                        gt: ht(function (t, e, n) { for (var r = n < 0 ? n + e : n; ++r < e;) t.push(r); return t })
                    }
                }).pseudos.nth = w.pseudos.eq, { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 }) w.pseudos[t] = dt(t);
                for (t in { submit: !0, reset: !0 }) w.pseudos[t] = ft(t);
                function gt() { }
                function vt(t) { for (var e = 0, n = t.length, r = ""; e < n; e++) r += t[e].value; return r }
                function yt(s, t, e) {
                    var c = t.dir,
                        l = t.next,
                        u = l || c,
                        d = e && "parentNode" === u,
                        f = r++;
                    return t.first ? function (t, e, n) {
                        for (; t = t[c];)
                            if (1 === t.nodeType || d) return s(t, e, n)
                    } : function (t, e, n) {
                        var r, i, o, a = [N, f];
                        if (n) {
                            for (; t = t[c];)
                                if ((1 === t.nodeType || d) && s(t, e, n)) return !0
                        } else
                            for (; t = t[c];)
                                if (1 === t.nodeType || d)
                                    if (i = (o = t[E] || (t[E] = {}))[t.uniqueID] || (o[t.uniqueID] = {}), l && l === t.nodeName.toLowerCase()) t = t[c] || t;
                                    else { if ((r = i[u]) && r[0] === N && r[1] === f) return a[2] = r[2]; if ((i[u] = a)[2] = s(t, e, n)) return !0 }
                    }
                }
                function bt(i) {
                    return 1 < i.length ? function (t, e, n) {
                        for (var r = i.length; r--;)
                            if (!i[r](t, e, n)) return !1;
                        return !0
                    } : i[0]
                }
                function wt(t, e, n, r, i) { for (var o, a = [], s = 0, c = t.length, l = null != e; s < c; s++)(o = t[s]) && (n && !n(o, r, i) || (a.push(o), l && e.push(s))); return a }
                function xt(p, h, m, g, v, t) {
                    return g && !g[E] && (g = xt(g)), v && !v[E] && (v = xt(v, t)), st(function (t, e, n, r) {
                        var i, o, a, s = [],
                            c = [],
                            l = e.length,
                            u = t || function (t, e, n) { for (var r = 0, i = e.length; r < i; r++) ot(t, e[r], n); return n }(h || "*", n.nodeType ? [n] : n, []),
                            d = !p || !t && h ? u : wt(u, s, p, n, r),
                            f = m ? v || (t ? p : l || g) ? [] : e : d;
                        if (m && m(d, f, n, r), g)
                            for (i = wt(f, c), g(i, [], n, r), o = i.length; o--;)(a = i[o]) && (f[c[o]] = !(d[c[o]] = a));
                        if (t) {
                            if (v || p) {
                                if (v) {
                                    for (i = [], o = f.length; o--;)(a = f[o]) && i.push(d[o] = a);
                                    v(null, f = [], i, r)
                                }
                                for (o = f.length; o--;)(a = f[o]) && -1 < (i = v ? P(t, a) : s[o]) && (t[i] = !(e[i] = a))
                            }
                        } else f = wt(f === e ? f.splice(l, f.length) : f), v ? v(null, e, f, r) : O.apply(e, f)
                    })
                }
                function Ct(t) {
                    for (var i, e, n, r = t.length, o = w.relative[t[0].type], a = o || w.relative[" "], s = o ? 1 : 0, c = yt(function (t) { return t === i }, a, !0), l = yt(function (t) { return -1 < P(i, t) }, a, !0), u = [function (t, e, n) { var r = !o && (n || e !== x) || ((i = e).nodeType ? c(t, e, n) : l(t, e, n)); return i = null, r }]; s < r; s++)
                        if (e = w.relative[t[s].type]) u = [yt(bt(u), e)];
                        else {
                            if ((e = w.filter[t[s].type].apply(null, t[s].matches))[E]) { for (n = ++s; n < r && !w.relative[t[n].type]; n++); return xt(1 < s && bt(u), 1 < s && vt(t.slice(0, s - 1).concat({ value: " " === t[s - 2].type ? "*" : "" })).replace(M, "$1"), e, s < n && Ct(t.slice(s, n)), n < r && Ct(t = t.slice(n)), n < r && vt(t)) }
                            u.push(e)
                        }
                    return bt(u)
                }
                return gt.prototype = w.filters = w.pseudos, w.setFilters = new gt, h = ot.tokenize = function (t, e) { var n, r, i, o, a, s, c, l = D[t + " "]; if (l) return e ? 0 : l.slice(0); for (a = t, s = [], c = w.preFilter; a;) { for (o in n && !(r = $.exec(a)) || (r && (a = a.slice(r[0].length) || a), s.push(i = [])), n = !1, (r = U.exec(a)) && (n = r.shift(), i.push({ value: n, type: r[0].replace(M, " ") }), a = a.slice(n.length)), w.filter) !(r = Y[o].exec(a)) || c[o] && !(r = c[o](r)) || (n = r.shift(), i.push({ value: n, type: o, matches: r }), a = a.slice(n.length)); if (!n) break } return e ? a.length : a ? ot.error(t) : D(t, s).slice(0) }, f = ot.compile = function (t, e) {
                    var n, r = [],
                        i = [],
                        o = A[t + " "];
                    if (!o) {
                        for (n = (e = e || h(t)).length; n--;)(o = Ct(e[n]))[E] ? r.push(o) : i.push(o);
                        (o = A(t, function (g, v) {
                            function t(t, e, n, r, i) {
                                var o, a, s, c = 0,
                                    l = "0",
                                    u = t && [],
                                    d = [],
                                    f = x,
                                    p = t || b && w.find.TAG("*", i),
                                    h = N += null == f ? 1 : Math.random() || .1,
                                    m = p.length;
                                for (i && (x = e === k || e || i); l !== m && null != (o = p[l]); l++) {
                                    if (b && o) {
                                        for (a = 0, e || o.ownerDocument === k || (C(o), n = !T); s = g[a++];)
                                            if (s(o, e || k, n)) { r.push(o); break }
                                        i && (N = h)
                                    }
                                    y && ((o = !s && o) && c--, t && u.push(o))
                                }
                                if (c += l, y && l !== c) {
                                    for (a = 0; s = v[a++];) s(u, d, e, n);
                                    if (t) {
                                        if (0 < c)
                                            for (; l--;) u[l] || d[l] || (d[l] = _.call(r));
                                        d = wt(d)
                                    }
                                    O.apply(r, d), i && !t && 0 < d.length && 1 < c + v.length && ot.uniqueSort(r)
                                }
                                return i && (N = h, x = f), u
                            }
                            var y = 0 < v.length,
                                b = 0 < g.length;
                            return y ? st(t) : t
                        }(i, r))).selector = t
                    }
                    return o
                }, m = ot.select = function (t, e, n, r) {
                    var i, o, a, s, c, l = "function" == typeof t && t,
                        u = !r && h(t = l.selector || t);
                    if (n = n || [], 1 === u.length) {
                        if (2 < (o = u[0] = u[0].slice(0)).length && "ID" === (a = o[0]).type && p.getById && 9 === e.nodeType && T && w.relative[o[1].type]) {
                            if (!(e = (w.find.ID(a.matches[0].replace(et, d), e) || [])[0])) return n;
                            l && (e = e.parentNode), t = t.slice(o.shift().value.length)
                        }
                        for (i = Y.needsContext.test(t) ? 0 : o.length; i-- && (a = o[i], !w.relative[s = a.type]);)
                            if ((c = w.find[s]) && (r = c(a.matches[0].replace(et, d), tt.test(o[0].type) && mt(e.parentNode) || e))) { if (o.splice(i, 1), !(t = r.length && vt(o))) return O.apply(n, r), n; break }
                    }
                    return (l || f(t, u))(r, e, !T, n, !e || tt.test(t) && mt(e.parentNode) || e), n
                }, p.sortStable = E.split("").sort(L).join("") === E, p.detectDuplicates = !!l, C(), p.sortDetached = ct(function (t) { return 1 & t.compareDocumentPosition(k.createElement("fieldset")) }), ct(function (t) { return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href") }) || lt("type|href|height|width", function (t, e, n) { if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2) }), p.attributes && ct(function (t) { return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value") }) || lt("value", function (t, e, n) { if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue }), ct(function (t) { return null == t.getAttribute("disabled") }) || lt(H, function (t, e, n) { var r; if (!n) return !0 === t[e] ? e.toLowerCase() : (r = t.getAttributeNode(e)) && r.specified ? r.value : null }), ot
            }(h);
            w.find = k, w.expr = k.selectors, w.expr[":"] = w.expr.pseudos, w.uniqueSort = w.unique = k.uniqueSort, w.text = k.getText, w.isXMLDoc = k.isXML, w.contains = k.contains, w.escapeSelector = k.escape;
            function T(t, e, n) {
                for (var r = [], i = void 0 !== n;
                    (t = t[e]) && 9 !== t.nodeType;)
                    if (1 === t.nodeType) {
                        if (i && w(t).is(n)) break;
                        r.push(t)
                    }
                return r
            }
            function E(t, e) { for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t); return n }
            var N = w.expr.match.needsContext,
                S = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,
                D = /^.[^:#\[\.,]*$/;
            function A(t, n, r) {
                if (w.isFunction(n)) return w.grep(t, function (t, e) { return !!n.call(t, e, t) !== r });
                if (n.nodeType) return w.grep(t, function (t) { return t === n !== r });
                if ("string" == typeof n) {
                    if (D.test(n)) return w.filter(n, t, r);
                    n = w.filter(n, t)
                }
                return w.grep(t, function (t) { return -1 < i.call(n, t) !== r && 1 === t.nodeType })
            }
            w.filter = function (t, e, n) { var r = e[0]; return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === r.nodeType ? w.find.matchesSelector(r, t) ? [r] : [] : w.find.matches(t, w.grep(e, function (t) { return 1 === t.nodeType })) }, w.fn.extend({
                find: function (t) {
                    var e, n, r = this.length,
                        i = this;
                    if ("string" != typeof t) return this.pushStack(w(t).filter(function () {
                        for (e = 0; e < r; e++)
                            if (w.contains(i[e], this)) return !0
                    }));
                    for (n = this.pushStack([]), e = 0; e < r; e++) w.find(t, i[e], n);
                    return 1 < r ? w.uniqueSort(n) : n
                },
                filter: function (t) { return this.pushStack(A(this, t || [], !1)) },
                not: function (t) { return this.pushStack(A(this, t || [], !0)) },
                is: function (t) { return !!A(this, "string" == typeof t && N.test(t) ? w(t) : t || [], !1).length }
            });
            var L, j = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
            (w.fn.init = function (t, e, n) {
                var r, i;
                if (!t) return this;
                if (n = n || L, "string" != typeof t) return t.nodeType ? (this[0] = t, this.length = 1, this) : w.isFunction(t) ? void 0 !== n.ready ? n.ready(t) : t(w) : w.makeArray(t, this);
                if (!(r = "<" === t[0] && ">" === t[t.length - 1] && 3 <= t.length ? [null, t, null] : j.exec(t)) || !r[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
                if (r[1]) {
                    if (e = e instanceof w ? e[0] : e, w.merge(this, w.parseHTML(r[1], e && e.nodeType ? e.ownerDocument || e : m, !0)), S.test(r[1]) && w.isPlainObject(e))
                        for (r in e) w.isFunction(this[r]) ? this[r](e[r]) : this.attr(r, e[r]);
                    return this
                }
                return (i = m.getElementById(r[2])) && (this[0] = i, this.length = 1), this
            }).prototype = w.fn, L = w(m);
            var _ = /^(?:parents|prev(?:Until|All))/,
                q = { children: !0, contents: !0, next: !0, prev: !0 };
            function O(t, e) {
                for (;
                    (t = t[e]) && 1 !== t.nodeType;);
                return t
            }
            w.fn.extend({
                has: function (t) {
                    var e = w(t, this),
                        n = e.length;
                    return this.filter(function () {
                        for (var t = 0; t < n; t++)
                            if (w.contains(this, e[t])) return !0
                    })
                },
                closest: function (t, e) {
                    var n, r = 0,
                        i = this.length,
                        o = [],
                        a = "string" != typeof t && w(t);
                    if (!N.test(t))
                        for (; r < i; r++)
                            for (n = this[r]; n && n !== e; n = n.parentNode)
                                if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && w.find.matchesSelector(n, t))) { o.push(n); break }
                    return this.pushStack(1 < o.length ? w.uniqueSort(o) : o)
                },
                index: function (t) { return t ? "string" == typeof t ? i.call(w(t), this[0]) : i.call(this, t.jquery ? t[0] : t) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1 },
                add: function (t, e) { return this.pushStack(w.uniqueSort(w.merge(this.get(), w(t, e)))) },
                addBack: function (t) { return this.add(null == t ? this.prevObject : this.prevObject.filter(t)) }
            }), w.each({ parent: function (t) { var e = t.parentNode; return e && 11 !== e.nodeType ? e : null }, parents: function (t) { return T(t, "parentNode") }, parentsUntil: function (t, e, n) { return T(t, "parentNode", n) }, next: function (t) { return O(t, "nextSibling") }, prev: function (t) { return O(t, "previousSibling") }, nextAll: function (t) { return T(t, "nextSibling") }, prevAll: function (t) { return T(t, "previousSibling") }, nextUntil: function (t, e, n) { return T(t, "nextSibling", n) }, prevUntil: function (t, e, n) { return T(t, "previousSibling", n) }, siblings: function (t) { return E((t.parentNode || {}).firstChild, t) }, children: function (t) { return E(t.firstChild) }, contents: function (t) { return t.contentDocument || w.merge([], t.childNodes) } }, function (r, i) { w.fn[r] = function (t, e) { var n = w.map(this, i, t); return "Until" !== r.slice(-5) && (e = t), e && "string" == typeof e && (n = w.filter(e, n)), 1 < this.length && (q[r] || w.uniqueSort(n), _.test(r) && n.reverse()), this.pushStack(n) } });
            var F = /\S+/g;
            function P(t) { return t }
            function H(t) { throw t }
            function z(t, e, n) { var r; try { t && w.isFunction(r = t.promise) ? r.call(t).done(e).fail(n) : t && w.isFunction(r = t.then) ? r.call(t, e, n) : e.call(void 0, t) } catch (t) { n.call(void 0, t) } }
            w.Callbacks = function (r) {
                r = "string" == typeof r ? function (t) { var n = {}; return w.each(t.match(F) || [], function (t, e) { n[e] = !0 }), n }(r) : w.extend({}, r);
                function n() {
                    for (o = r.once, e = i = !0; s.length; c = -1)
                        for (t = s.shift(); ++c < a.length;) !1 === a[c].apply(t[0], t[1]) && r.stopOnFalse && (c = a.length, t = !1);
                    r.memory || (t = !1), i = !1, o && (a = t ? [] : "")
                }
                var i, t, e, o, a = [],
                    s = [],
                    c = -1,
                    l = { add: function () { return a && (t && !i && (c = a.length - 1, s.push(t)), function n(t) { w.each(t, function (t, e) { w.isFunction(e) ? r.unique && l.has(e) || a.push(e) : e && e.length && "string" !== w.type(e) && n(e) }) }(arguments), t && !i && n()), this }, remove: function () { return w.each(arguments, function (t, e) { for (var n; - 1 < (n = w.inArray(e, a, n));) a.splice(n, 1), n <= c && c-- }), this }, has: function (t) { return t ? -1 < w.inArray(t, a) : 0 < a.length }, empty: function () { return a = a && [], this }, disable: function () { return o = s = [], a = t = "", this }, disabled: function () { return !a }, lock: function () { return o = s = [], t || i || (a = t = ""), this }, locked: function () { return !!o }, fireWith: function (t, e) { return o || (e = [t, (e = e || []).slice ? e.slice() : e], s.push(e), i || n()), this }, fire: function () { return l.fireWith(this, arguments), this }, fired: function () { return !!e } };
                return l
            }, w.extend({
                Deferred: function (t) {
                    var o = [
                        ["notify", "progress", w.Callbacks("memory"), w.Callbacks("memory"), 2],
                        ["resolve", "done", w.Callbacks("once memory"), w.Callbacks("once memory"), 0, "resolved"],
                        ["reject", "fail", w.Callbacks("once memory"), w.Callbacks("once memory"), 1, "rejected"]
                    ],
                        i = "pending",
                        a = {
                            state: function () { return i },
                            always: function () { return s.done(arguments).fail(arguments), this },
                            catch: function (t) { return a.then(null, t) },
                            pipe: function () {
                                var i = arguments;
                                return w.Deferred(function (r) {
                                    w.each(o, function (t, e) {
                                        var n = w.isFunction(i[e[4]]) && i[e[4]];
                                        s[e[1]](function () {
                                            var t = n && n.apply(this, arguments);
                                            t && w.isFunction(t.promise) ? t.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[e[0] + "With"](this, n ? [t] : arguments)
                                        })
                                    }), i = null
                                }).promise()
                            },
                            then: function (e, n, r) {
                                var c = 0;
                                function l(i, o, a, s) {
                                    return function () {
                                        function t() {
                                            var t, e;
                                            if (!(i < c)) {
                                                if ((t = a.apply(n, r)) === o.promise()) throw new TypeError("Thenable self-resolution");
                                                e = t && ("object" == typeof t || "function" == typeof t) && t.then, w.isFunction(e) ? s ? e.call(t, l(c, o, P, s), l(c, o, H, s)) : (c++, e.call(t, l(c, o, P, s), l(c, o, H, s), l(c, o, P, o.notifyWith))) : (a !== P && (n = void 0, r = [t]), (s || o.resolveWith)(n, r))
                                            }
                                        }
                                        var n = this,
                                            r = arguments,
                                            e = s ? t : function () { try { t() } catch (t) { w.Deferred.exceptionHook && w.Deferred.exceptionHook(t, e.stackTrace), c <= i + 1 && (a !== H && (n = void 0, r = [t]), o.rejectWith(n, r)) } };
                                        i ? e() : (w.Deferred.getStackHook && (e.stackTrace = w.Deferred.getStackHook()), h.setTimeout(e))
                                    }
                                }
                                return w.Deferred(function (t) { o[0][3].add(l(0, t, w.isFunction(r) ? r : P, t.notifyWith)), o[1][3].add(l(0, t, w.isFunction(e) ? e : P)), o[2][3].add(l(0, t, w.isFunction(n) ? n : H)) }).promise()
                            },
                            promise: function (t) { return null != t ? w.extend(t, a) : a }
                        },
                        s = {};
                    return w.each(o, function (t, e) {
                        var n = e[2],
                            r = e[5];
                        a[e[1]] = n.add, r && n.add(function () { i = r }, o[3 - t][2].disable, o[0][2].lock), n.add(e[3].fire), s[e[0]] = function () { return s[e[0] + "With"](this === s ? void 0 : this, arguments), this }, s[e[0] + "With"] = n.fireWith
                    }), a.promise(s), t && t.call(s, s), s
                },
                when: function (t) {
                    function e(e) { return function (t) { i[e] = this, o[e] = 1 < arguments.length ? s.call(arguments) : t, --n || a.resolveWith(i, o) } }
                    var n = arguments.length,
                        r = n,
                        i = Array(r),
                        o = s.call(arguments),
                        a = w.Deferred();
                    if (n <= 1 && (z(t, a.done(e(r)).resolve, a.reject), "pending" === a.state() || w.isFunction(o[r] && o[r].then))) return a.then();
                    for (; r--;) z(o[r], e(r), a.reject);
                    return a.promise()
                }
            });
            var I = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
            w.Deferred.exceptionHook = function (t, e) { h.console && h.console.warn && t && I.test(t.name) && h.console.warn("jQuery.Deferred exception: " + t.message, t.stack, e) };
            var R = w.Deferred();
            function W() { m.removeEventListener("DOMContentLoaded", W), h.removeEventListener("load", W), w.ready() }
            w.fn.ready = function (t) { return R.then(t), this }, w.extend({
                isReady: !1,
                readyWait: 1,
                holdReady: function (t) { t ? w.readyWait++ : w.ready(!0) },
                ready: function (t) {
                    (!0 === t ? --w.readyWait : w.isReady) || (w.isReady = !0) !== t && 0 < --w.readyWait || R.resolveWith(m, [w])
                }
            }), w.ready.then = R.then, "complete" === m.readyState || "loading" !== m.readyState && !m.documentElement.doScroll ? h.setTimeout(w.ready) : (m.addEventListener("DOMContentLoaded", W), h.addEventListener("load", W));
            function B(t) { return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType }
            var M = function (t, e, n, r, i, o, a) {
                var s = 0,
                    c = t.length,
                    l = null == n;
                if ("object" === w.type(n))
                    for (s in i = !0, n) M(t, e, s, n[s], !0, o, a);
                else if (void 0 !== r && (i = !0, w.isFunction(r) || (a = !0), l && (e = a ? (e.call(t, r), null) : (l = e, function (t, e, n) { return l.call(w(t), n) })), e))
                    for (; s < c; s++) e(t[s], n, a ? r : r.call(t[s], s, e(t[s], n)));
                return i ? t : l ? e.call(t) : c ? e(t[0], n) : o
            };
            function $() { this.expando = w.expando + $.uid++ }
            $.uid = 1, $.prototype = {
                cache: function (t) { var e = t[this.expando]; return e || (e = {}, B(t) && (t.nodeType ? t[this.expando] = e : Object.defineProperty(t, this.expando, { value: e, configurable: !0 }))), e },
                set: function (t, e, n) {
                    var r, i = this.cache(t);
                    if ("string" == typeof e) i[w.camelCase(e)] = n;
                    else
                        for (r in e) i[w.camelCase(r)] = e[r];
                    return i
                },
                get: function (t, e) { return void 0 === e ? this.cache(t) : t[this.expando] && t[this.expando][w.camelCase(e)] },
                access: function (t, e, n) { return void 0 === e || e && "string" == typeof e && void 0 === n ? this.get(t, e) : (this.set(t, e, n), void 0 !== n ? n : e) },
                remove: function (t, e) {
                    var n, r = t[this.expando];
                    if (void 0 !== r) {
                        if (void 0 !== e) { n = (e = w.isArray(e) ? e.map(w.camelCase) : (e = w.camelCase(e)) in r ? [e] : e.match(F) || []).length; for (; n--;) delete r[e[n]] }
                        void 0 !== e && !w.isEmptyObject(r) || (t.nodeType ? t[this.expando] = void 0 : delete t[this.expando])
                    }
                },
                hasData: function (t) { var e = t[this.expando]; return void 0 !== e && !w.isEmptyObject(e) }
            };
            var U = new $,
                V = new $,
                X = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
                Q = /[A-Z]/g;
            function Y(t, e, n) {
                var r;
                if (void 0 === n && 1 === t.nodeType)
                    if (r = "data-" + e.replace(Q, "-$&").toLowerCase(), "string" == typeof (n = t.getAttribute(r))) {
                        try { n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : X.test(n) ? JSON.parse(n) : n) } catch (t) { }
                        V.set(t, e, n)
                    } else n = void 0;
                return n
            }
            w.extend({ hasData: function (t) { return V.hasData(t) || U.hasData(t) }, data: function (t, e, n) { return V.access(t, e, n) }, removeData: function (t, e) { V.remove(t, e) }, _data: function (t, e, n) { return U.access(t, e, n) }, _removeData: function (t, e) { U.remove(t, e) } }), w.fn.extend({
                data: function (n, t) {
                    var e, r, i, o = this[0],
                        a = o && o.attributes;
                    if (void 0 !== n) return "object" == typeof n ? this.each(function () { V.set(this, n) }) : M(this, function (t) {
                        var e;
                        if (o && void 0 === t) return void 0 !== (e = V.get(o, n)) ? e : void 0 !== (e = Y(o, n)) ? e : void 0;
                        this.each(function () { V.set(this, n, t) })
                    }, null, t, 1 < arguments.length, null, !0);
                    if (this.length && (i = V.get(o), 1 === o.nodeType && !U.get(o, "hasDataAttrs"))) {
                        for (e = a.length; e--;) a[e] && 0 === (r = a[e].name).indexOf("data-") && (r = w.camelCase(r.slice(5)), Y(o, r, i[r]));
                        U.set(o, "hasDataAttrs", !0)
                    }
                    return i
                },
                removeData: function (t) { return this.each(function () { V.remove(this, t) }) }
            }), w.extend({
                queue: function (t, e, n) { var r; if (t) return e = (e || "fx") + "queue", r = U.get(t, e), n && (!r || w.isArray(n) ? r = U.access(t, e, w.makeArray(n)) : r.push(n)), r || [] },
                dequeue: function (t, e) {
                    e = e || "fx";
                    var n = w.queue(t, e),
                        r = n.length,
                        i = n.shift(),
                        o = w._queueHooks(t, e);
                    "inprogress" === i && (i = n.shift(), r--), i && ("fx" === e && n.unshift("inprogress"), delete o.stop, i.call(t, function () { w.dequeue(t, e) }, o)), !r && o && o.empty.fire()
                },
                _queueHooks: function (t, e) { var n = e + "queueHooks"; return U.get(t, n) || U.access(t, n, { empty: w.Callbacks("once memory").add(function () { U.remove(t, [e + "queue", n]) }) }) }
            }), w.fn.extend({
                queue: function (e, n) {
                    var t = 2;
                    return "string" != typeof e && (n = e, e = "fx", t--), arguments.length < t ? w.queue(this[0], e) : void 0 === n ? this : this.each(function () {
                        var t = w.queue(this, e, n);
                        w._queueHooks(this, e), "fx" === e && "inprogress" !== t[0] && w.dequeue(this, e)
                    })
                },
                dequeue: function (t) { return this.each(function () { w.dequeue(this, t) }) },
                clearQueue: function (t) { return this.queue(t || "fx", []) },
                promise: function (t, e) {
                    function n() { --i || o.resolveWith(a, [a]) }
                    var r, i = 1,
                        o = w.Deferred(),
                        a = this,
                        s = this.length;
                    for ("string" != typeof t && (e = t, t = void 0), t = t || "fx"; s--;)(r = U.get(a[s], t + "queueHooks")) && r.empty && (i++, r.empty.add(n));
                    return n(), o.promise(e)
                }
            });
            function G(t, e) { return "none" === (t = e || t).style.display || "" === t.style.display && w.contains(t.ownerDocument, t) && "none" === w.css(t, "display") }
            function J(t, e, n, r) { var i, o, a = {}; for (o in e) a[o] = t.style[o], t.style[o] = e[o]; for (o in i = n.apply(t, r || []), e) t.style[o] = a[o]; return i }
            var K = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
                Z = new RegExp("^(?:([+-])=|)(" + K + ")([a-z%]*)$", "i"),
                tt = ["Top", "Right", "Bottom", "Left"];
            var et = {};
            function nt(t, e) { for (var n, r, i, o, a, s, c, l = [], u = 0, d = t.length; u < d; u++)(r = t[u]).style && (n = r.style.display, e ? ("none" === n && (l[u] = U.get(r, "display") || null, l[u] || (r.style.display = "")), "" === r.style.display && G(r) && (l[u] = (c = a = o = void 0, a = (i = r).ownerDocument, s = i.nodeName, (c = et[s]) || (o = a.body.appendChild(a.createElement(s)), c = w.css(o, "display"), o.parentNode.removeChild(o), "none" === c && (c = "block"), et[s] = c)))) : "none" !== n && (l[u] = "none", U.set(r, "display", n))); for (u = 0; u < d; u++) null != l[u] && (t[u].style.display = l[u]); return t }
            w.fn.extend({ show: function () { return nt(this, !0) }, hide: function () { return nt(this) }, toggle: function (t) { return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () { G(this) ? w(this).show() : w(this).hide() }) } });
            var rt = /^(?:checkbox|radio)$/i,
                it = /<([a-z][^\/\0>\x20\t\r\n\f]+)/i,
                ot = /^$|\/(?:java|ecma)script/i,
                at = { option: [1, "<select multiple='multiple'>", "</select>"], thead: [1, "<table>", "</table>"], col: [2, "<table><colgroup>", "</colgroup></table>"], tr: [2, "<table><tbody>", "</tbody></table>"], td: [3, "<table><tbody><tr>", "</tr></tbody></table>"], _default: [0, "", ""] };
            function st(t, e) { var n = void 0 !== t.getElementsByTagName ? t.getElementsByTagName(e || "*") : void 0 !== t.querySelectorAll ? t.querySelectorAll(e || "*") : []; return void 0 === e || e && w.nodeName(t, e) ? w.merge([t], n) : n }
            function ct(t, e) { for (var n = 0, r = t.length; n < r; n++) U.set(t[n], "globalEval", !e || U.get(e[n], "globalEval")) }
            at.optgroup = at.option, at.tbody = at.tfoot = at.colgroup = at.caption = at.thead, at.th = at.td;
            var lt, ut, dt = /<|&#?\w+;/;
            function ft(t, e, n, r, i) {
                for (var o, a, s, c, l, u, d = e.createDocumentFragment(), f = [], p = 0, h = t.length; p < h; p++)
                    if ((o = t[p]) || 0 === o)
                        if ("object" === w.type(o)) w.merge(f, o.nodeType ? [o] : o);
                        else if (dt.test(o)) {
                            for (a = a || d.appendChild(e.createElement("div")), s = (it.exec(o) || ["", ""])[1].toLowerCase(), c = at[s] || at._default, a.innerHTML = c[1] + w.htmlPrefilter(o) + c[2], u = c[0]; u--;) a = a.lastChild;
                            w.merge(f, a.childNodes), (a = d.firstChild).textContent = ""
                        } else f.push(e.createTextNode(o));
                for (d.textContent = "", p = 0; o = f[p++];)
                    if (r && -1 < w.inArray(o, r)) i && i.push(o);
                    else if (l = w.contains(o.ownerDocument, o), a = st(d.appendChild(o), "script"), l && ct(a), n)
                        for (u = 0; o = a[u++];) ot.test(o.type || "") && n.push(o);
                return d
            }
            lt = m.createDocumentFragment().appendChild(m.createElement("div")), (ut = m.createElement("input")).setAttribute("type", "radio"), ut.setAttribute("checked", "checked"), ut.setAttribute("name", "t"), lt.appendChild(ut), y.checkClone = lt.cloneNode(!0).cloneNode(!0).lastChild.checked, lt.innerHTML = "<textarea>x</textarea>", y.noCloneChecked = !!lt.cloneNode(!0).lastChild.defaultValue;
            var pt = m.documentElement,
                ht = /^key/,
                mt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
                gt = /^([^.]*)(?:\.(.+)|)/;
            function vt() { return !0 }
            function yt() { return !1 }
            function bt() { try { return m.activeElement } catch (t) { } }
            function wt(t, e, n, r, i, o) {
                var a, s;
                if ("object" == typeof e) { for (s in "string" != typeof n && (r = r || n, n = void 0), e) wt(t, s, n, r, e[s], o); return t }
                if (null == r && null == i ? (i = n, r = n = void 0) : null == i && ("string" == typeof n ? (i = r, r = void 0) : (i = r, r = n, n = void 0)), !1 === i) i = yt;
                else if (!i) return t;
                return 1 === o && (a = i, (i = function (t) { return w().off(t), a.apply(this, arguments) }).guid = a.guid || (a.guid = w.guid++)), t.each(function () { w.event.add(this, e, i, r, n) })
            }
            w.event = {
                global: {},
                add: function (e, t, n, r, i) {
                    var o, a, s, c, l, u, d, f, p, h, m, g = U.get(e);
                    if (g)
                        for (n.handler && (n = (o = n).handler, i = o.selector), i && w.find.matchesSelector(pt, i), n.guid || (n.guid = w.guid++), (c = g.events) || (c = g.events = {}), (a = g.handle) || (a = g.handle = function (t) { return void 0 !== w && w.event.triggered !== t.type ? w.event.dispatch.apply(e, arguments) : void 0 }), l = (t = (t || "").match(F) || [""]).length; l--;) p = m = (s = gt.exec(t[l]) || [])[1], h = (s[2] || "").split(".").sort(), p && (d = w.event.special[p] || {}, p = (i ? d.delegateType : d.bindType) || p, d = w.event.special[p] || {}, u = w.extend({ type: p, origType: m, data: r, handler: n, guid: n.guid, selector: i, needsContext: i && w.expr.match.needsContext.test(i), namespace: h.join(".") }, o), (f = c[p]) || ((f = c[p] = []).delegateCount = 0, d.setup && !1 !== d.setup.call(e, r, h, a) || e.addEventListener && e.addEventListener(p, a)), d.add && (d.add.call(e, u), u.handler.guid || (u.handler.guid = n.guid)), i ? f.splice(f.delegateCount++, 0, u) : f.push(u), w.event.global[p] = !0)
                },
                remove: function (t, e, n, r, i) {
                    var o, a, s, c, l, u, d, f, p, h, m, g = U.hasData(t) && U.get(t);
                    if (g && (c = g.events)) {
                        for (l = (e = (e || "").match(F) || [""]).length; l--;)
                            if (p = m = (s = gt.exec(e[l]) || [])[1], h = (s[2] || "").split(".").sort(), p) {
                                for (d = w.event.special[p] || {}, f = c[p = (r ? d.delegateType : d.bindType) || p] || [], s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"), a = o = f.length; o--;) u = f[o], !i && m !== u.origType || n && n.guid !== u.guid || s && !s.test(u.namespace) || r && r !== u.selector && ("**" !== r || !u.selector) || (f.splice(o, 1), u.selector && f.delegateCount--, d.remove && d.remove.call(t, u));
                                a && !f.length && (d.teardown && !1 !== d.teardown.call(t, h, g.handle) || w.removeEvent(t, p, g.handle), delete c[p])
                            } else
                                for (p in c) w.event.remove(t, p + e[l], n, r, !0);
                        w.isEmptyObject(c) && U.remove(t, "handle events")
                    }
                },
                dispatch: function (t) {
                    var e, n, r, i, o, a, s = w.event.fix(t),
                        c = new Array(arguments.length),
                        l = (U.get(this, "events") || {})[s.type] || [],
                        u = w.event.special[s.type] || {};
                    for (c[0] = s, e = 1; e < arguments.length; e++) c[e] = arguments[e];
                    if (s.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, s)) {
                        for (a = w.event.handlers.call(this, s, l), e = 0;
                            (i = a[e++]) && !s.isPropagationStopped();)
                            for (s.currentTarget = i.elem, n = 0;
                                (o = i.handlers[n++]) && !s.isImmediatePropagationStopped();) s.rnamespace && !s.rnamespace.test(o.namespace) || (s.handleObj = o, s.data = o.data, void 0 !== (r = ((w.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, c)) && !1 === (s.result = r) && (s.preventDefault(), s.stopPropagation()));
                        return u.postDispatch && u.postDispatch.call(this, s), s.result
                    }
                },
                handlers: function (t, e) {
                    var n, r, i, o, a = [],
                        s = e.delegateCount,
                        c = t.target;
                    if (s && c.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                        for (; c !== this; c = c.parentNode || this)
                            if (1 === c.nodeType && (!0 !== c.disabled || "click" !== t.type)) {
                                for (r = [], n = 0; n < s; n++) void 0 === r[i = (o = e[n]).selector + " "] && (r[i] = o.needsContext ? -1 < w(i, this).index(c) : w.find(i, this, null, [c]).length), r[i] && r.push(o);
                                r.length && a.push({ elem: c, handlers: r })
                            }
                    return s < e.length && a.push({ elem: this, handlers: e.slice(s) }), a
                },
                addProp: function (e, t) { Object.defineProperty(w.Event.prototype, e, { enumerable: !0, configurable: !0, get: w.isFunction(t) ? function () { if (this.originalEvent) return t(this.originalEvent) } : function () { if (this.originalEvent) return this.originalEvent[e] }, set: function (t) { Object.defineProperty(this, e, { enumerable: !0, configurable: !0, writable: !0, value: t }) } }) },
                fix: function (t) { return t[w.expando] ? t : new w.Event(t) },
                special: { load: { noBubble: !0 }, focus: { trigger: function () { if (this !== bt() && this.focus) return this.focus(), !1 }, delegateType: "focusin" }, blur: { trigger: function () { if (this === bt() && this.blur) return this.blur(), !1 }, delegateType: "focusout" }, click: { trigger: function () { if ("checkbox" === this.type && this.click && w.nodeName(this, "input")) return this.click(), !1 }, _default: function (t) { return w.nodeName(t.target, "a") } }, beforeunload: { postDispatch: function (t) { void 0 !== t.result && t.originalEvent && (t.originalEvent.returnValue = t.result) } } }
            }, w.removeEvent = function (t, e, n) { t.removeEventListener && t.removeEventListener(e, n) }, w.Event = function (t, e) {
                if (!(this instanceof w.Event)) return new w.Event(t, e);
                t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || void 0 === t.defaultPrevented && !1 === t.returnValue ? vt : yt, this.target = t.target && 3 === t.target.nodeType ? t.target.parentNode : t.target, this.currentTarget = t.currentTarget, this.relatedTarget = t.relatedTarget) : this.type = t, e && w.extend(this, e), this.timeStamp = t && t.timeStamp || w.now(), this[w.expando] = !0
            }, w.Event.prototype = {
                constructor: w.Event,
                isDefaultPrevented: yt,
                isPropagationStopped: yt,
                isImmediatePropagationStopped: yt,
                isSimulated: !1,
                preventDefault: function () {
                    var t = this.originalEvent;
                    this.isDefaultPrevented = vt, t && !this.isSimulated && t.preventDefault()
                },
                stopPropagation: function () {
                    var t = this.originalEvent;
                    this.isPropagationStopped = vt, t && !this.isSimulated && t.stopPropagation()
                },
                stopImmediatePropagation: function () {
                    var t = this.originalEvent;
                    this.isImmediatePropagationStopped = vt, t && !this.isSimulated && t.stopImmediatePropagation(), this.stopPropagation()
                }
            }, w.each({ altKey: !0, bubbles: !0, cancelable: !0, changedTouches: !0, ctrlKey: !0, detail: !0, eventPhase: !0, metaKey: !0, pageX: !0, pageY: !0, shiftKey: !0, view: !0, char: !0, charCode: !0, key: !0, keyCode: !0, button: !0, buttons: !0, clientX: !0, clientY: !0, offsetX: !0, offsetY: !0, pointerId: !0, pointerType: !0, screenX: !0, screenY: !0, targetTouches: !0, toElement: !0, touches: !0, which: function (t) { var e = t.button; return null == t.which && ht.test(t.type) ? null != t.charCode ? t.charCode : t.keyCode : !t.which && void 0 !== e && mt.test(t.type) ? 1 & e ? 1 : 2 & e ? 3 : 4 & e ? 2 : 0 : t.which } }, w.event.addProp), w.each({ mouseenter: "mouseover", mouseleave: "mouseout", pointerenter: "pointerover", pointerleave: "pointerout" }, function (t, i) {
                w.event.special[t] = {
                    delegateType: i,
                    bindType: i,
                    handle: function (t) {
                        var e, n = t.relatedTarget,
                            r = t.handleObj;
                        return n && (n === this || w.contains(this, n)) || (t.type = r.origType, e = r.handler.apply(this, arguments), t.type = i), e
                    }
                }
            }), w.fn.extend({ on: function (t, e, n, r) { return wt(this, t, e, n, r) }, one: function (t, e, n, r) { return wt(this, t, e, n, r, 1) }, off: function (t, e, n) { var r, i; if (t && t.preventDefault && t.handleObj) return r = t.handleObj, w(t.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler), this; if ("object" != typeof t) return !1 !== e && "function" != typeof e || (n = e, e = void 0), !1 === n && (n = yt), this.each(function () { w.event.remove(this, t, n, e) }); for (i in t) this.off(i, e, t[i]); return this } });
            var xt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,
                Ct = /<script|<style|<link/i,
                kt = /checked\s*(?:[^=]|=\s*.checked.)/i,
                Tt = /^true\/(.*)/,
                Et = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
            function Nt(t, e) { return w.nodeName(t, "table") && w.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") && t.getElementsByTagName("tbody")[0] || t }
            function St(t) { return t.type = (null !== t.getAttribute("type")) + "/" + t.type, t }
            function Dt(t) { var e = Tt.exec(t.type); return e ? t.type = e[1] : t.removeAttribute("type"), t }
            function At(t, e) {
                var n, r, i, o, a, s, c, l;
                if (1 === e.nodeType) {
                    if (U.hasData(t) && (o = U.access(t), a = U.set(e, o), l = o.events))
                        for (i in delete a.handle, a.events = {}, l)
                            for (n = 0, r = l[i].length; n < r; n++) w.event.add(e, i, l[i][n]);
                    V.hasData(t) && (s = V.access(t), c = w.extend({}, s), V.set(e, c))
                }
            }
            function Lt(n, r, i, o) {
                r = g.apply([], r);
                var t, e, a, s, c, l, u = 0,
                    d = n.length,
                    f = d - 1,
                    p = r[0],
                    h = w.isFunction(p);
                if (h || 1 < d && "string" == typeof p && !y.checkClone && kt.test(p)) return n.each(function (t) {
                    var e = n.eq(t);
                    h && (r[0] = p.call(this, t, e.html())), Lt(e, r, i, o)
                });
                if (d && (e = (t = ft(r, n[0].ownerDocument, !1, n, o)).firstChild, 1 === t.childNodes.length && (t = e), e || o)) {
                    for (s = (a = w.map(st(t, "script"), St)).length; u < d; u++) c = t, u !== f && (c = w.clone(c, !0, !0), s && w.merge(a, st(c, "script"))), i.call(n[u], c, u);
                    if (s)
                        for (l = a[a.length - 1].ownerDocument, w.map(a, Dt), u = 0; u < s; u++) c = a[u], ot.test(c.type || "") && !U.access(c, "globalEval") && w.contains(l, c) && (c.src ? w._evalUrl && w._evalUrl(c.src) : b(c.textContent.replace(Et, ""), l))
                }
                return n
            }
            function jt(t, e, n) { for (var r, i = e ? w.filter(e, t) : t, o = 0; null != (r = i[o]); o++) n || 1 !== r.nodeType || w.cleanData(st(r)), r.parentNode && (n && w.contains(r.ownerDocument, r) && ct(st(r, "script")), r.parentNode.removeChild(r)); return t }
            w.extend({
                htmlPrefilter: function (t) { return t },
                clone: function (t, e, n) {
                    var r, i, o, a, s, c, l, u = t.cloneNode(!0),
                        d = w.contains(t.ownerDocument, t);
                    if (!(y.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || w.isXMLDoc(t)))
                        for (a = st(u), r = 0, i = (o = st(t)).length; r < i; r++) s = o[r], c = a[r], void 0, "input" === (l = c.nodeName.toLowerCase()) && rt.test(s.type) ? c.checked = s.checked : "input" !== l && "textarea" !== l || (c.defaultValue = s.defaultValue);
                    if (e)
                        if (n)
                            for (o = o || st(t), a = a || st(u), r = 0, i = o.length; r < i; r++) At(o[r], a[r]);
                        else At(t, u);
                    return 0 < (a = st(u, "script")).length && ct(a, !d && st(t, "script")), u
                },
                cleanData: function (t) {
                    for (var e, n, r, i = w.event.special, o = 0; void 0 !== (n = t[o]); o++)
                        if (B(n)) {
                            if (e = n[U.expando]) {
                                if (e.events)
                                    for (r in e.events) i[r] ? w.event.remove(n, r) : w.removeEvent(n, r, e.handle);
                                n[U.expando] = void 0
                            }
                            n[V.expando] && (n[V.expando] = void 0)
                        }
                }
            }), w.fn.extend({
                detach: function (t) { return jt(this, t, !0) },
                remove: function (t) { return jt(this, t) },
                text: function (t) { return M(this, function (t) { return void 0 === t ? w.text(this) : this.empty().each(function () { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = t) }) }, null, t, arguments.length) },
                append: function () { return Lt(this, arguments, function (t) { 1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || Nt(this, t).appendChild(t) }) },
                prepend: function () {
                    return Lt(this, arguments, function (t) {
                        if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                            var e = Nt(this, t);
                            e.insertBefore(t, e.firstChild)
                        }
                    })
                },
                before: function () { return Lt(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this) }) },
                after: function () { return Lt(this, arguments, function (t) { this.parentNode && this.parentNode.insertBefore(t, this.nextSibling) }) },
                empty: function () { for (var t, e = 0; null != (t = this[e]); e++) 1 === t.nodeType && (w.cleanData(st(t, !1)), t.textContent = ""); return this },
                clone: function (t, e) { return t = null != t && t, e = null == e ? t : e, this.map(function () { return w.clone(this, t, e) }) },
                html: function (t) {
                    return M(this, function (t) {
                        var e = this[0] || {},
                            n = 0,
                            r = this.length;
                        if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
                        if ("string" == typeof t && !Ct.test(t) && !at[(it.exec(t) || ["", ""])[1].toLowerCase()]) {
                            t = w.htmlPrefilter(t);
                            try {
                                for (; n < r; n++) 1 === (e = this[n] || {}).nodeType && (w.cleanData(st(e, !1)), e.innerHTML = t);
                                e = 0
                            } catch (t) { }
                        }
                        e && this.empty().append(t)
                    }, null, t, arguments.length)
                },
                replaceWith: function () {
                    var n = [];
                    return Lt(this, arguments, function (t) {
                        var e = this.parentNode;
                        w.inArray(this, n) < 0 && (w.cleanData(st(this)), e && e.replaceChild(t, this))
                    }, n)
                }
            }), w.each({ appendTo: "append", prependTo: "prepend", insertBefore: "before", insertAfter: "after", replaceAll: "replaceWith" }, function (t, a) { w.fn[t] = function (t) { for (var e, n = [], r = w(t), i = r.length - 1, o = 0; o <= i; o++) e = o === i ? this : this.clone(!0), w(r[o])[a](e), c.apply(n, e.get()); return this.pushStack(n) } });
            var _t, qt, Ot, Ft, Pt, Ht, zt = /^margin/,
                It = new RegExp("^(" + K + ")(?!px)[a-z%]+$", "i"),
                Rt = function (t) { var e = t.ownerDocument.defaultView; return e && e.opener || (e = h), e.getComputedStyle(t) };
            function Wt() {
                if (Ht) {
                    Ht.style.cssText = "box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", Ht.innerHTML = "", pt.appendChild(Pt);
                    var t = h.getComputedStyle(Ht);
                    _t = "1%" !== t.top, Ft = "2px" === t.marginLeft, qt = "4px" === t.width, Ht.style.marginRight = "50%", Ot = "4px" === t.marginRight, pt.removeChild(Pt), Ht = null
                }
            }
            function Bt(t, e, n) { var r, i, o, a, s = t.style; return (n = n || Rt(t)) && ("" !== (a = n.getPropertyValue(e) || n[e]) || w.contains(t.ownerDocument, t) || (a = w.style(t, e)), !y.pixelMarginRight() && It.test(a) && zt.test(e) && (r = s.width, i = s.minWidth, o = s.maxWidth, s.minWidth = s.maxWidth = s.width = a, a = n.width, s.width = r, s.minWidth = i, s.maxWidth = o)), void 0 !== a ? a + "" : a }
            function Mt(t, e) {
                return {
                    get: function () {
                        if (!t()) return (this.get = e).apply(this, arguments);
                        delete this.get
                    }
                }
            }
            Pt = m.createElement("div"), (Ht = m.createElement("div")).style && (Ht.style.backgroundClip = "content-box", Ht.cloneNode(!0).style.backgroundClip = "", y.clearCloneStyle = "content-box" === Ht.style.backgroundClip, Pt.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", Pt.appendChild(Ht), w.extend(y, { pixelPosition: function () { return Wt(), _t }, boxSizingReliable: function () { return Wt(), qt }, pixelMarginRight: function () { return Wt(), Ot }, reliableMarginLeft: function () { return Wt(), Ft } }));
            var $t, Ut, Vt = /^(none|table(?!-c[ea]).+)/,
                Xt = { position: "absolute", visibility: "hidden", display: "block" },
                Qt = { letterSpacing: "0", fontWeight: "400" },
                Yt = ["Webkit", "Moz", "ms"],
                Gt = m.createElement("div").style;
            function Jt(t) {
                if (t in Gt) return t;
                for (var e = t[0].toUpperCase() + t.slice(1), n = Yt.length; n--;)
                    if ((t = Yt[n] + e) in Gt) return t
            }
            function Kt(t, e, n) { var r = Z.exec(e); return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : e }
            function Zt(t, e, n, r, i) { for (var o = n === (r ? "border" : "content") ? 4 : "width" === e ? 1 : 0, a = 0; o < 4; o += 2) "margin" === n && (a += w.css(t, n + tt[o], !0, i)), r ? ("content" === n && (a -= w.css(t, "padding" + tt[o], !0, i)), "margin" !== n && (a -= w.css(t, "border" + tt[o] + "Width", !0, i))) : (a += w.css(t, "padding" + tt[o], !0, i), "padding" !== n && (a += w.css(t, "border" + tt[o] + "Width", !0, i))); return a }
            function te(t, e, n) {
                var r, i = !0,
                    o = Rt(t),
                    a = "border-box" === w.css(t, "boxSizing", !1, o);
                if (t.getClientRects().length && (r = t.getBoundingClientRect()[e]), r <= 0 || null == r) {
                    if (((r = Bt(t, e, o)) < 0 || null == r) && (r = t.style[e]), It.test(r)) return r;
                    i = a && (y.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
                }
                return r + Zt(t, e, n || (a ? "border" : "content"), i, o) + "px"
            }
            w.extend({
                cssHooks: { opacity: { get: function (t, e) { if (e) { var n = Bt(t, "opacity"); return "" === n ? "1" : n } } } },
                cssNumber: { animationIterationCount: !0, columnCount: !0, fillOpacity: !0, flexGrow: !0, flexShrink: !0, fontWeight: !0, lineHeight: !0, opacity: !0, order: !0, orphans: !0, widows: !0, zIndex: !0, zoom: !0 },
                cssProps: { float: "cssFloat" },
                style: function (t, e, n, r) {
                    if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                        var i, o, a, s = w.camelCase(e),
                            c = t.style;
                        if (e = w.cssProps[s] || (w.cssProps[s] = Jt(s) || s), a = w.cssHooks[e] || w.cssHooks[s], void 0 === n) return a && "get" in a && void 0 !== (i = a.get(t, !1, r)) ? i : c[e];
                        "string" === (o = typeof n) && (i = Z.exec(n)) && i[1] && (n = function (t, e, n, r) {
                            var i, o = 1,
                                a = 20,
                                s = r ? function () { return r.cur() } : function () { return w.css(t, e, "") },
                                c = s(),
                                l = n && n[3] || (w.cssNumber[e] ? "" : "px"),
                                u = (w.cssNumber[e] || "px" !== l && +c) && Z.exec(w.css(t, e));
                            if (u && u[3] !== l)
                                for (l = l || u[3], n = n || [], u = +c || 1; u /= o = o || ".5", w.style(t, e, u + l), o !== (o = s() / c) && 1 !== o && --a;);
                            return n && (u = +u || +c || 0, i = n[1] ? u + (n[1] + 1) * n[2] : +n[2], r && (r.unit = l, r.start = u, r.end = i)), i
                        }(t, e, i), o = "number"), null != n && n == n && ("number" === o && (n += i && i[3] || (w.cssNumber[s] ? "" : "px")), y.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (c[e] = "inherit"), a && "set" in a && void 0 === (n = a.set(t, n, r)) || (c[e] = n))
                    }
                },
                css: function (t, e, n, r) { var i, o, a, s = w.camelCase(e); return e = w.cssProps[s] || (w.cssProps[s] = Jt(s) || s), (a = w.cssHooks[e] || w.cssHooks[s]) && "get" in a && (i = a.get(t, !0, n)), void 0 === i && (i = Bt(t, e, r)), "normal" === i && e in Qt && (i = Qt[e]), "" === n || n ? (o = parseFloat(i), !0 === n || isFinite(o) ? o || 0 : i) : i }
            }), w.each(["height", "width"], function (t, a) {
                w.cssHooks[a] = {
                    get: function (t, e, n) { if (e) return !Vt.test(w.css(t, "display")) || t.getClientRects().length && t.getBoundingClientRect().width ? te(t, a, n) : J(t, Xt, function () { return te(t, a, n) }) },
                    set: function (t, e, n) {
                        var r, i = n && Rt(t),
                            o = n && Zt(t, a, n, "border-box" === w.css(t, "boxSizing", !1, i), i);
                        return o && (r = Z.exec(e)) && "px" !== (r[3] || "px") && (t.style[a] = e, e = w.css(t, a)), Kt(0, e, o)
                    }
                }
            }), w.cssHooks.marginLeft = Mt(y.reliableMarginLeft, function (t, e) { if (e) return (parseFloat(Bt(t, "marginLeft")) || t.getBoundingClientRect().left - J(t, { marginLeft: 0 }, function () { return t.getBoundingClientRect().left })) + "px" }), w.each({ margin: "", padding: "", border: "Width" }, function (i, o) { w.cssHooks[i + o] = { expand: function (t) { for (var e = 0, n = {}, r = "string" == typeof t ? t.split(" ") : [t]; e < 4; e++) n[i + tt[e] + o] = r[e] || r[e - 2] || r[0]; return n } }, zt.test(i) || (w.cssHooks[i + o].set = Kt) }), w.fn.extend({
                css: function (t, e) {
                    return M(this, function (t, e, n) {
                        var r, i, o = {},
                            a = 0;
                        if (w.isArray(e)) { for (r = Rt(t), i = e.length; a < i; a++) o[e[a]] = w.css(t, e[a], !1, r); return o }
                        return void 0 !== n ? w.style(t, e, n) : w.css(t, e)
                    }, t, e, 1 < arguments.length)
                }
            }), w.fn.delay = function (r, t) {
                return r = w.fx && w.fx.speeds[r] || r, t = t || "fx", this.queue(t, function (t, e) {
                    var n = h.setTimeout(t, r);
                    e.stop = function () { h.clearTimeout(n) }
                })
            }, $t = m.createElement("input"), Ut = m.createElement("select").appendChild(m.createElement("option")), $t.type = "checkbox", y.checkOn = "" !== $t.value, y.optSelected = Ut.selected, ($t = m.createElement("input")).value = "t", $t.type = "radio", y.radioValue = "t" === $t.value;
            var ee, ne = w.expr.attrHandle;
            w.fn.extend({ attr: function (t, e) { return M(this, w.attr, t, e, 1 < arguments.length) }, removeAttr: function (t) { return this.each(function () { w.removeAttr(this, t) }) } }), w.extend({
                attr: function (t, e, n) { var r, i, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return void 0 === t.getAttribute ? w.prop(t, e, n) : (1 === o && w.isXMLDoc(t) || (i = w.attrHooks[e.toLowerCase()] || (w.expr.match.bool.test(e) ? ee : void 0)), void 0 !== n ? null === n ? void w.removeAttr(t, e) : i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : (t.setAttribute(e, n + ""), n) : i && "get" in i && null !== (r = i.get(t, e)) ? r : null == (r = w.find.attr(t, e)) ? void 0 : r) },
                attrHooks: { type: { set: function (t, e) { if (!y.radioValue && "radio" === e && w.nodeName(t, "input")) { var n = t.value; return t.setAttribute("type", e), n && (t.value = n), e } } } },
                removeAttr: function (t, e) {
                    var n, r = 0,
                        i = e && e.match(F);
                    if (i && 1 === t.nodeType)
                        for (; n = i[r++];) t.removeAttribute(n)
                }
            }), ee = { set: function (t, e, n) { return !1 === e ? w.removeAttr(t, n) : t.setAttribute(n, n), n } }, w.each(w.expr.match.bool.source.match(/\w+/g), function (t, e) {
                var a = ne[e] || w.find.attr;
                ne[e] = function (t, e, n) { var r, i, o = e.toLowerCase(); return n || (i = ne[o], ne[o] = r, r = null != a(t, e, n) ? o : null, ne[o] = i), r }
            });
            var re = /^(?:input|select|textarea|button)$/i,
                ie = /^(?:a|area)$/i;
            w.fn.extend({ prop: function (t, e) { return M(this, w.prop, t, e, 1 < arguments.length) }, removeProp: function (t) { return this.each(function () { delete this[w.propFix[t] || t] }) } }), w.extend({ prop: function (t, e, n) { var r, i, o = t.nodeType; if (3 !== o && 8 !== o && 2 !== o) return 1 === o && w.isXMLDoc(t) || (e = w.propFix[e] || e, i = w.propHooks[e]), void 0 !== n ? i && "set" in i && void 0 !== (r = i.set(t, n, e)) ? r : t[e] = n : i && "get" in i && null !== (r = i.get(t, e)) ? r : t[e] }, propHooks: { tabIndex: { get: function (t) { var e = w.find.attr(t, "tabindex"); return e ? parseInt(e, 10) : re.test(t.nodeName) || ie.test(t.nodeName) && t.href ? 0 : -1 } } }, propFix: { for: "htmlFor", class: "className" } }), y.optSelected || (w.propHooks.selected = {
                get: function (t) { var e = t.parentNode; return e && e.parentNode && e.parentNode.selectedIndex, null },
                set: function (t) {
                    var e = t.parentNode;
                    e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
                }
            }), w.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () { w.propFix[this.toLowerCase()] = this });
            var oe = /[\t\r\n\f]/g;
            function ae(t) { return t.getAttribute && t.getAttribute("class") || "" }
            w.fn.extend({
                addClass: function (e) {
                    var t, n, r, i, o, a, s, c = 0;
                    if (w.isFunction(e)) return this.each(function (t) { w(this).addClass(e.call(this, t, ae(this))) });
                    if ("string" == typeof e && e)
                        for (t = e.match(F) || []; n = this[c++];)
                            if (i = ae(n), r = 1 === n.nodeType && (" " + i + " ").replace(oe, " ")) {
                                for (a = 0; o = t[a++];) r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                                i !== (s = w.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                removeClass: function (e) {
                    var t, n, r, i, o, a, s, c = 0;
                    if (w.isFunction(e)) return this.each(function (t) { w(this).removeClass(e.call(this, t, ae(this))) });
                    if (!arguments.length) return this.attr("class", "");
                    if ("string" == typeof e && e)
                        for (t = e.match(F) || []; n = this[c++];)
                            if (i = ae(n), r = 1 === n.nodeType && (" " + i + " ").replace(oe, " ")) {
                                for (a = 0; o = t[a++];)
                                    for (; - 1 < r.indexOf(" " + o + " ");) r = r.replace(" " + o + " ", " ");
                                i !== (s = w.trim(r)) && n.setAttribute("class", s)
                            }
                    return this
                },
                toggleClass: function (i, e) {
                    var o = typeof i;
                    return "boolean" == typeof e && "string" == o ? e ? this.addClass(i) : this.removeClass(i) : w.isFunction(i) ? this.each(function (t) { w(this).toggleClass(i.call(this, t, ae(this), e), e) }) : this.each(function () {
                        var t, e, n, r;
                        if ("string" == o)
                            for (e = 0, n = w(this), r = i.match(F) || []; t = r[e++];) n.hasClass(t) ? n.removeClass(t) : n.addClass(t);
                        else void 0 !== i && "boolean" != o || ((t = ae(this)) && U.set(this, "__className__", t), this.setAttribute && this.setAttribute("class", t || !1 === i ? "" : U.get(this, "__className__") || ""))
                    })
                },
                hasClass: function (t) {
                    var e, n, r = 0;
                    for (e = " " + t + " "; n = this[r++];)
                        if (1 === n.nodeType && -1 < (" " + ae(n) + " ").replace(oe, " ").indexOf(e)) return !0;
                    return !1
                }
            });
            var se = /\r/g,
                ce = /[\x20\t\r\n\f]+/g;
            w.fn.extend({
                val: function (n) {
                    var r, t, i, e = this[0];
                    return arguments.length ? (i = w.isFunction(n), this.each(function (t) {
                        var e;
                        1 === this.nodeType && (null == (e = i ? n.call(this, t, w(this).val()) : n) ? e = "" : "number" == typeof e ? e += "" : w.isArray(e) && (e = w.map(e, function (t) { return null == t ? "" : t + "" })), (r = w.valHooks[this.type] || w.valHooks[this.nodeName.toLowerCase()]) && "set" in r && void 0 !== r.set(this, e, "value") || (this.value = e))
                    })) : e ? (r = w.valHooks[e.type] || w.valHooks[e.nodeName.toLowerCase()]) && "get" in r && void 0 !== (t = r.get(e, "value")) ? t : "string" == typeof (t = e.value) ? t.replace(se, "") : null == t ? "" : t : void 0
                }
            }), w.extend({
                valHooks: {
                    option: { get: function (t) { var e = w.find.attr(t, "value"); return null != e ? e : w.trim(w.text(t)).replace(ce, " ") } },
                    select: {
                        get: function (t) {
                            for (var e, n, r = t.options, i = t.selectedIndex, o = "select-one" === t.type, a = o ? null : [], s = o ? i + 1 : r.length, c = i < 0 ? s : o ? i : 0; c < s; c++)
                                if (((n = r[c]).selected || c === i) && !n.disabled && (!n.parentNode.disabled || !w.nodeName(n.parentNode, "optgroup"))) {
                                    if (e = w(n).val(), o) return e;
                                    a.push(e)
                                }
                            return a
                        },
                        set: function (t, e) { for (var n, r, i = t.options, o = w.makeArray(e), a = i.length; a--;)((r = i[a]).selected = -1 < w.inArray(w.valHooks.option.get(r), o)) && (n = !0); return n || (t.selectedIndex = -1), o }
                    }
                }
            }), w.each(["radio", "checkbox"], function () { w.valHooks[this] = { set: function (t, e) { if (w.isArray(e)) return t.checked = -1 < w.inArray(w(t).val(), e) } }, y.checkOn || (w.valHooks[this].get = function (t) { return null === t.getAttribute("value") ? "on" : t.value }) });
            var le = /^(?:focusinfocus|focusoutblur)$/;
            w.extend(w.event, {
                trigger: function (t, e, n, r) {
                    var i, o, a, s, c, l, u, d = [n || m],
                        f = v.call(t, "type") ? t.type : t,
                        p = v.call(t, "namespace") ? t.namespace.split(".") : [];
                    if (o = a = n = n || m, 3 !== n.nodeType && 8 !== n.nodeType && !le.test(f + w.event.triggered) && (-1 < f.indexOf(".") && (f = (p = f.split(".")).shift(), p.sort()), c = f.indexOf(":") < 0 && "on" + f, (t = t[w.expando] ? t : new w.Event(f, "object" == typeof t && t)).isTrigger = r ? 2 : 3, t.namespace = p.join("."), t.rnamespace = t.namespace ? new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, t.result = void 0, t.target || (t.target = n), e = null == e ? [t] : w.makeArray(e, [t]), u = w.event.special[f] || {}, r || !u.trigger || !1 !== u.trigger.apply(n, e))) {
                        if (!r && !u.noBubble && !w.isWindow(n)) {
                            for (s = u.delegateType || f, le.test(s + f) || (o = o.parentNode); o; o = o.parentNode) d.push(o), a = o;
                            a === (n.ownerDocument || m) && d.push(a.defaultView || a.parentWindow || h)
                        }
                        for (i = 0;
                            (o = d[i++]) && !t.isPropagationStopped();) t.type = 1 < i ? s : u.bindType || f, (l = (U.get(o, "events") || {})[t.type] && U.get(o, "handle")) && l.apply(o, e), (l = c && o[c]) && l.apply && B(o) && (t.result = l.apply(o, e), !1 === t.result && t.preventDefault());
                        return t.type = f, r || t.isDefaultPrevented() || u._default && !1 !== u._default.apply(d.pop(), e) || !B(n) || c && w.isFunction(n[f]) && !w.isWindow(n) && ((a = n[c]) && (n[c] = null), n[w.event.triggered = f](), w.event.triggered = void 0, a && (n[c] = a)), t.result
                    }
                },
                simulate: function (t, e, n) {
                    var r = w.extend(new w.Event, n, { type: t, isSimulated: !0 });
                    w.event.trigger(r, null, e)
                }
            }), w.fn.extend({ trigger: function (t, e) { return this.each(function () { w.event.trigger(t, e, this) }) }, triggerHandler: function (t, e) { var n = this[0]; if (n) return w.event.trigger(t, e, n, !0) } }), w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function (t, n) { w.fn[n] = function (t, e) { return 0 < arguments.length ? this.on(n, null, t, e) : this.trigger(n) } }), w.fn.extend({ hover: function (t, e) { return this.mouseenter(t).mouseleave(e || t) } }), y.focusin = "onfocusin" in h, y.focusin || w.each({ focus: "focusin", blur: "focusout" }, function (n, r) {
                function i(t) { w.event.simulate(r, t.target, w.event.fix(t)) }
                w.event.special[r] = {
                    setup: function () {
                        var t = this.ownerDocument || this,
                            e = U.access(t, r);
                        e || t.addEventListener(n, i, !0), U.access(t, r, (e || 0) + 1)
                    },
                    teardown: function () {
                        var t = this.ownerDocument || this,
                            e = U.access(t, r) - 1;
                        e ? U.access(t, r, e) : (t.removeEventListener(n, i, !0), U.remove(t, r))
                    }
                }
            });
            var ue, de = /\[\]$/,
                fe = /\r?\n/g,
                pe = /^(?:submit|button|image|reset|file)$/i,
                he = /^(?:input|select|textarea|keygen)/i;
            function me(n, t, r, i) {
                var e;
                if (w.isArray(t)) w.each(t, function (t, e) { r || de.test(n) ? i(n, e) : me(n + "[" + ("object" == typeof e && null != e ? t : "") + "]", e, r, i) });
                else if (r || "object" !== w.type(t)) i(n, t);
                else
                    for (e in t) me(n + "[" + e + "]", t[e], r, i)
            }
            function ge(t) { return w.isWindow(t) ? t : 9 === t.nodeType && t.defaultView }
            w.param = function (t, e) {
                function n(t, e) {
                    var n = w.isFunction(e) ? e() : e;
                    i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(null == n ? "" : n)
                }
                var r, i = [];
                if (w.isArray(t) || t.jquery && !w.isPlainObject(t)) w.each(t, function () { n(this.name, this.value) });
                else
                    for (r in t) me(r, t[r], e, n);
                return i.join("&")
            }, w.fn.extend({ serialize: function () { return w.param(this.serializeArray()) }, serializeArray: function () { return this.map(function () { var t = w.prop(this, "elements"); return t ? w.makeArray(t) : this }).filter(function () { var t = this.type; return this.name && !w(this).is(":disabled") && he.test(this.nodeName) && !pe.test(t) && (this.checked || !rt.test(t)) }).map(function (t, e) { var n = w(this).val(); return null == n ? null : w.isArray(n) ? w.map(n, function (t) { return { name: e.name, value: t.replace(fe, "\r\n") } }) : { name: e.name, value: n.replace(fe, "\r\n") } }).get() } }), w.fn.extend({
                wrapAll: function (t) { var e; return this[0] && (w.isFunction(t) && (t = t.call(this[0])), e = w(t, this[0].ownerDocument).eq(0).clone(!0), this[0].parentNode && e.insertBefore(this[0]), e.map(function () { for (var t = this; t.firstElementChild;) t = t.firstElementChild; return t }).append(this)), this },
                wrapInner: function (n) {
                    return w.isFunction(n) ? this.each(function (t) { w(this).wrapInner(n.call(this, t)) }) : this.each(function () {
                        var t = w(this),
                            e = t.contents();
                        e.length ? e.wrapAll(n) : t.append(n)
                    })
                },
                wrap: function (e) { var n = w.isFunction(e); return this.each(function (t) { w(this).wrapAll(n ? e.call(this, t) : e) }) },
                unwrap: function (t) { return this.parent(t).not("body").each(function () { w(this).replaceWith(this.childNodes) }), this }
            }), w.expr.pseudos.hidden = function (t) { return !w.expr.pseudos.visible(t) }, w.expr.pseudos.visible = function (t) { return !!(t.offsetWidth || t.offsetHeight || t.getClientRects().length) }, y.createHTMLDocument = ((ue = m.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>", 2 === ue.childNodes.length), w.parseHTML = function (t, e, n) { return "string" != typeof t ? [] : ("boolean" == typeof e && (n = e, e = !1), e || (y.createHTMLDocument ? ((r = (e = m.implementation.createHTMLDocument("")).createElement("base")).href = m.location.href, e.head.appendChild(r)) : e = m), o = !n && [], (i = S.exec(t)) ? [e.createElement(i[1])] : (i = ft([t], e, o), o && o.length && w(o).remove(), w.merge([], i.childNodes))); var r, i, o }, w.offset = {
                setOffset: function (t, e, n) {
                    var r, i, o, a, s, c, l = w.css(t, "position"),
                        u = w(t),
                        d = {};
                    "static" === l && (t.style.position = "relative"), s = u.offset(), o = w.css(t, "top"), c = w.css(t, "left"), i = ("absolute" === l || "fixed" === l) && -1 < (o + c).indexOf("auto") ? (a = (r = u.position()).top, r.left) : (a = parseFloat(o) || 0, parseFloat(c) || 0), w.isFunction(e) && (e = e.call(t, n, w.extend({}, s))), null != e.top && (d.top = e.top - s.top + a), null != e.left && (d.left = e.left - s.left + i), "using" in e ? e.using.call(t, d) : u.css(d)
                }
            }, w.fn.extend({
                offset: function (e) { if (arguments.length) return void 0 === e ? this : this.each(function (t) { w.offset.setOffset(this, e, t) }); var t, n, r, i, o = this[0]; return o ? o.getClientRects().length ? (r = o.getBoundingClientRect()).width || r.height ? (n = ge(i = o.ownerDocument), t = i.documentElement, { top: r.top + n.pageYOffset - t.clientTop, left: r.left + n.pageXOffset - t.clientLeft }) : r : { top: 0, left: 0 } : void 0 },
                position: function () {
                    if (this[0]) {
                        var t, e, n = this[0],
                            r = { top: 0, left: 0 };
                        return "fixed" === w.css(n, "position") ? e = n.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), w.nodeName(t[0], "html") || (r = t.offset()), r = { top: r.top + w.css(t[0], "borderTopWidth", !0), left: r.left + w.css(t[0], "borderLeftWidth", !0) }), { top: e.top - r.top - w.css(n, "marginTop", !0), left: e.left - r.left - w.css(n, "marginLeft", !0) }
                    }
                },
                offsetParent: function () { return this.map(function () { for (var t = this.offsetParent; t && "static" === w.css(t, "position");) t = t.offsetParent; return t || pt }) }
            }), w.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (e, i) {
                var o = "pageYOffset" === i;
                w.fn[e] = function (t) {
                    return M(this, function (t, e, n) {
                        var r = ge(t);
                        if (void 0 === n) return r ? r[i] : t[e];
                        r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : t[e] = n
                    }, e, t, arguments.length)
                }
            }), w.each(["top", "left"], function (t, n) { w.cssHooks[n] = Mt(y.pixelPosition, function (t, e) { if (e) return e = Bt(t, n), It.test(e) ? w(t).position()[n] + "px" : e }) }), w.each({ Height: "height", Width: "width" }, function (a, s) {
                w.each({ padding: "inner" + a, content: s, "": "outer" + a }, function (r, o) {
                    w.fn[o] = function (t, e) {
                        var n = arguments.length && (r || "boolean" != typeof t),
                            i = r || (!0 === t || !0 === e ? "margin" : "border");
                        return M(this, function (t, e, n) { var r; return w.isWindow(t) ? 0 === o.indexOf("outer") ? t["inner" + a] : t.document.documentElement["client" + a] : 9 === t.nodeType ? (r = t.documentElement, Math.max(t.body["scroll" + a], r["scroll" + a], t.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? w.css(t, e, i) : w.style(t, e, n, i) }, s, n ? t : void 0, n)
                    }
                })
            }), "function" == typeof define && define.amd && define("jquery", [], function () { return w });
            var ve = h.jQuery,
                ye = h.$;
            return w.noConflict = function (t) { return h.$ === w && (h.$ = ye), t && h.jQuery === w && (h.jQuery = ve), w }, t || (h.jQuery = h.$ = w), w
        })
    }, {}],
    2: [function (M, t, e) {
        "use strict";
        ! function () {
            if (-1 === document.domain.indexOf(".")) return location.href = "#";
            if (window._hasCtrmInjected) return document.querySelector(".ctrm-title").click();
            window._hasCtrmInjected = !0;
            var i = void 0,
                n = void 0,
                r = void 0,
                e = void 0,
                o = !0,
                a = void 0,
                s = void 0,
                c = void 0,
                l = [],
                u = !1,
                d = void 0,
                t = "wss://topurl.cn:9001",
                f = (i = window.jQuery ? window.jQuery : M("jQuery-slim"))(M("./dom.js"));
            if (!window.jQuery) window.jQuery = i;
            if (!window.$) window.$ = i;
            i(document.body).append(f), loadDeferredScripts(f), _();
            var p, h, m = i("#ctrm_"),
                g = m.find(".ctrm-title"),
                v = m.find(".ctrm-title-url"),
                y = (m.find(".ctrm-panel"), m.find(".ctrm-bottom")),
                b = m.find(".ctrm-dialog"),
                w = m.find(".ctrm-textarea textarea"),
                x = m.find(".ctrm-emit"),
                C = m.find(".ctrm-online-wrap"),
                k = m.find(".ctrm-domain-wrap"),
                T = m.find(".ctrm-domain-show"),
                E = m.find(".ctrm-title-countwrap"),
                N = m.find(".ctrm-title-count"),
                S = m.find(".ctrm-title-close"),
                D = m.find(".ctrm-title-reconn"),
                L = "Gtuundefined";
            function j() { setTimeout(function () { m.hasClass("ctrm-close") || document.activeElement !== w.get(0) && S.click() }, 1) }
            function escapeHtml(t) {
                return null == t ? "" : String(t)
                    .replace(/&/g, "&amp;")
                    .replace(/</g, "&lt;")
                    .replace(/>/g, "&gt;")
                    .replace(/"/g, "&quot;")
                    .replace(/'/g, "&#39;");
            }
            function ctrmToast(msg, type) {
                var el = document.createElement("div");
                el.className = "ctrm-toast";
                el.setAttribute("role", "status");
                el.textContent = msg;
                el.style.cssText = "position:fixed;left:50%;bottom:88px;transform:translateX(-50%);" +
                    "max-width:78vw;padding:8px 16px;border-radius:16px;font-size:14px;line-height:1.4;" +
                    "color:#fff;z-index:100000;pointer-events:none;white-space:pre-wrap;text-align:center;" +
                    "box-shadow:0 4px 18px rgba(47,36,41,.16);background:" +
                    ("error" === type ? "#b8362b" : "success" === type ? "#2f7a4f" : "var(--cx-brand-ink)");
                document.body.appendChild(el);
                setTimeout(function () { el.parentNode && el.parentNode.removeChild(el) }, 2600)
            }
            window.__ctrmToast = ctrmToast;
            function injectStyleOnce(id, css) {
                if (document.getElementById(id)) return;
                var el = document.createElement("style");
                el.id = id;
                el.textContent = css;
                document.head.appendChild(el)
            }
            var ctrmUidSeq = 0;
            function ctrmUid(prefix) {
                return (prefix || "ctrm") + "-" + Date.now().toString(36) + "-" + (++ctrmUidSeq)
            }
            var CTRM_VOICE_CSS = `
.ctrm-voice-bubble {
  display: flex;
  align-items: center;
  background: #fdf8f9;
  border-radius: 18px;
  box-shadow: inset 0 0 0 1px rgba(47,36,41,.10);
  padding: 6px 16px 6px 10px;
  min-height: 38px;
  margin: 6px 0;
  font-size: 15px;
  position: relative;
  gap: 10px;
  cursor: pointer;
  transition: background 0.2s;
}
.ctrm-voice-bubble.playing { background: var(--cx-tint); }
.ctrm-voice-play {
  background: var(--cx-brand);
  border: none;
  border-radius: 50%;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background 0.2s;
  padding: 0;
}
.ctrm-voice-bubble.playing .ctrm-voice-play { background: var(--cx-brand-deep); }
.ctrm-voice-play .icon-play { display: block; }
.ctrm-voice-play .icon-pause { display: none; }
.ctrm-voice-bubble.playing .icon-play { display: none; }
.ctrm-voice-bubble.playing .icon-pause { display: block; }
.ctrm-voice-progress {
  flex: 1;
  height: 4px;
  background: rgba(47,36,41,.12);
  border-radius: 2px;
  margin: 0 8px;
  position: relative;
  min-width: 60px;
  max-width: 120px;
}
.ctrm-voice-bar {
  background: var(--cx-brand);
  height: 100%;
  border-radius: 2px;
  width: 0;
  transition: width 0.2s;
}
.ctrm-voice-time {
  color: var(--cx-ink-3);
  font-size: 13px;
  min-width: 36px;
  text-align: right;
}
`;
            var CTRM_PLAYING_CSS = `
@keyframes blink {
    0% { opacity: 1; }
    50% { opacity: 0.5; }
    100% { opacity: 1; }
}
img.playing {
    animation: blink 0.5s infinite;
}
`;
            var CTRM_FANCYBOX_OPTS = {
                caption: function (instance, item) { return i(this).find("img").attr("alt") },
                loop: !0,
                animationEffect: "fade",
                buttons: ["zoom", "share", "slideShow", "fullScreen", "close"],
                wheel: { scrollZoom: !0 },
                thumbs: { autoStart: !0, axis: "y" },
                fullScreen: { autoStart: !1 },
                slideShow: { playOnStart: !0 },
                protect: !0,
                keyboard: { Escape: "close", ArrowLeft: "prev", ArrowRight: "next" },
                touch: { vertical: !0, momentum: !0 },
                lang: "zh",
                i18n: {
                    zh: {
                        CLOSE: "关闭", NEXT: "下一张", PREV: "上一张",
                        ERROR: "无法加载内容。请稍后再试。",
                        PLAY_START: "开始幻灯片播放", PLAY_STOP: "停止幻灯片播放",
                        FULL_SCREEN: "全屏", THUMBS: "缩略图",
                        DOWNLOAD: "下载", SHARE: "分享", ZOOM: "缩放"
                    }
                }
            };
            function ctrmBindFancybox(scope) {
                if (!i.fn || !i.fn.fancybox) return;
                (scope ? scope.find('[data-fancybox="gallery"]') : i('[data-fancybox="gallery"]'))
                    .fancybox(CTRM_FANCYBOX_OPTS)
            }
            function ctrmWhenFancyboxReady() {
                var tries = 0,
                    timer = setInterval(function () {
                        if (i.fn && i.fn.fancybox) { clearInterval(timer), ctrmBindFancybox(null) }
                        else if (60 < ++tries) { clearInterval(timer), console.warn("[ctrm] fancybox 未就绪，图片灯箱不可用") }
                    }, 200)
            }
            function ctrmVoiceLabel(sec) {
                var mm = Math.floor(sec / 60),
                    ss = Math.floor(sec % 60);
                return (mm < 10 ? "0" : "") + mm + ":" + (ss < 10 ? "0" : "") + ss
            }
            function ctrmPlayVoice(bubble, audio) {
                var p = audio.play();
                if (!p || !p.then) return bubble.classList.add("playing"), void (window._voicePlaying = audio);
                p.then(function () {
                    bubble.classList.add("playing"), window._voicePlaying = audio
                }).catch(function (err) {
                    bubble.classList.remove("playing"),
                        ctrmToast("无法播放语音：" + (err && err.message || err), "error")
                })
            }
            function ctrmToggleVoice(bubble, audio) {
                var bar = bubble.querySelector(".ctrm-voice-bar"),
                    label = bubble.querySelector(".ctrm-voice-time");
                audio.volume = 1, audio.muted = !1;
                if (window._voicePlaying && window._voicePlaying !== audio) {
                    var prev = window._voicePlaying.closest(".ctrm-voice-bubble");
                    window._voicePlaying.pause(), prev && prev.classList.remove("playing"), window._voicePlaying = null
                }
                if (!audio.paused) return audio.pause(), bubble.classList.remove("playing"), void (window._voicePlaying = null);
                audio.ontimeupdate = function () {
                    audio.duration && isFinite(audio.duration) && (
                        bar && (bar.style.width = audio.currentTime / audio.duration * 100 + "%"),
                        label && (label.textContent = ctrmVoiceLabel(Math.max(0, audio.duration - audio.currentTime)))
                    )
                };
                audio.onended = function () {
                    bubble.classList.remove("playing"), bar && (bar.style.width = "100%"), window._voicePlaying = null
                };
                audio.onloadedmetadata = function () {
                    isFinite(audio.duration) && label && (label.textContent = ctrmVoiceLabel(audio.duration))
                };
                if (audio.readyState < 2) return audio.load(), void (audio.oncanplay = function () {
                    audio.oncanplay = null, ctrmPlayVoice(bubble, audio)
                });
                ctrmPlayVoice(bubble, audio)
            }
            function ctrmBindVoicePlayback() {
                document.addEventListener("click", function (ev) {
                    var playBtn = ev.target && ev.target.closest && ev.target.closest(".ctrm-voice-play");
                    if (!playBtn) return;
                    var bubble = playBtn.closest(".ctrm-voice-bubble");
                    if (!bubble) return;
                    ev.preventDefault(), ev.stopPropagation();
                    var audio = bubble.querySelector("audio");
                    audio ? ctrmToggleVoice(bubble, audio) : console.warn("[ctrm] 语音气泡里没有 audio 元素")
                })
            }
            function ctrmInitOnce() {
                injectStyleOnce("ctrm-voice-bubble-style", CTRM_VOICE_CSS);
                injectStyleOnce("ctrm-playing-anim-style", CTRM_PLAYING_CSS);
                ctrmBindVoicePlayback();
                b.on("click", ".ctrm-dialog-sender", function () {
                    var item = this.parentNode;
                    if (item && -1 < item.className.indexOf("ctrm-me")) return;
                    w.val("@" + this.innerText + " "), w.get(0).focus()
                });
                ctrmWhenFancyboxReady()
            }
            function loadDeferredScripts(nodes) {
                nodes.filter("script[src]").each(function () {
                    var old = this,
                        fresh = document.createElement("script");
                    for (var idx = 0; idx < old.attributes.length; idx++) {
                        fresh.setAttribute(old.attributes[idx].name, old.attributes[idx].value);
                    }
                    fresh.onerror = function () { console.warn("[ctrm] 外部脚本加载失败: " + fresh.src) };
                    old.parentNode && old.parentNode.replaceChild(fresh, old);
                })
            }
            var reconnectTimer = null,
                reconnectDelay = 2e3,
                heartbeatTimer = null,
                offlineNoticed = !1,
                stalledTicks = 0,
                unloading = !1;
            var lastRecvAt = 0;
            function ctrmSendUpdate() {
                try {
                    n && 1 === n.readyState &&
                        n.send(JSON.stringify({ type: "update", data: { domainFrom: location.hostname }, char: L }))
                } catch (err) { }
            }
            function ctrmSendHello() {
                2e4 < Date.now() - lastRecvAt && ctrmSendUpdate()
            }
            function ctrmScheduleReconnect() {
                if (unloading || reconnectTimer) return;
                var wait = Math.min(reconnectDelay, 3e4);
                reconnectDelay = Math.min(2 * reconnectDelay, 3e4),
                    reconnectTimer = setTimeout(function () { reconnectTimer = null, _() }, wait + Math.floor(4e3 * Math.random()))
            }
            function ctrmReconnectNow(reason) {
                if (unloading) return;
                console.warn("[ctrm] 立即重连：" + reason),
                    reconnectDelay = 2e3, stalledTicks = 0,
                    clearTimeout(reconnectTimer), reconnectTimer = null, _()
            }
            function _() {
                clearTimeout(reconnectTimer), reconnectTimer = null;
                if (n) try { n.onopen = n.onmessage = n.onclose = n.onerror = null, n.close() } catch (err) { }
                var sock = n = new WebSocket(t);
                sock.onopen = function () {
                    if (sock !== n) return;
                    reconnectDelay = 2e3, offlineNoticed = !1;
                    lastRecvAt = Date.now(), ctrmSendUpdate();
                    clearInterval(heartbeatTimer), heartbeatTimer = setInterval(ctrmSendHello, 25e3);
                    clearInterval(a), a = setInterval(q, 15e3)
                };
                sock.onerror = function () { sock === n && console.warn("[ctrm] WebSocket 出错，等 onclose 后重连") };
                sock.onclose = function () { sock === n && (z(), ctrmScheduleReconnect()) };
                sock.onmessage = function (ev) {
                    sock === n && function (t) {
                        lastRecvAt = Date.now();
                        var e;
                        try { e = JSON.parse(t.data) } catch (err) { return void console.warn("[ctrm] 收到无法解析的帧", t.data) }
                        var n = e.type,
                            r = e.data;
                        switch (n) {
                                case "identity":
                                    if (r.id === s && !ctrmPendingInHistory(r.history)) break;
                                    s = r.id, c = r.name,
                                        ctrmFlushPending(r.history),
                                        function (t) {
                                            if (!t || 0 === t.length) return;
                                            b.find(".ctrm-dialog-item").remove();
                                            t.forEach(function (t) { H(t, !0) })
                                        }(r.history),
                                        function t(e) {
                                            e ? l = e : e = l || [];
                                            k.empty();
                                            if (!e || 0 === e.length) return;
                                            e.sort(function (t, e) { return e.times - t.times });
                                            u || (e = e.slice(0, 3));
                                            e.forEach(function (t, e) {
                                                var r = escapeHtml(t.domainFrom),
                                                    n = i('<a class="ctrm-domain-item" target="_blank" rel="noopener" href="http://' + r + '?source=' + escapeHtml(location.hostname) + '">' + r + "</a>");
                                                k.append(n)
                                            });
                                            if (!u && 3 < l.length) {
                                                var n = i('<a class="ctrm-domain-item" href="javascript:void(0);">更多...</a>');
                                                n.click(function () { u = !0, t() }), k.append(n)
                                            }
                                        }(r.billboard);
                                    break;
                                case "memberList":
                                    O(r);
                                    break;
                                case "chat":
                                    r && String(r.id) === String(s) && ctrmResolvePending(r.msg);
                                    H(r);
                                    break;
                                case "ack":
                                    ctrmConfirmOldestPending(), w.val("")
                            }
                        }(ev)
                };
            }
            function q() {
                if (!n) return;
                if (1 !== n.readyState) return z(), void ctrmScheduleReconnect();
                if (0 < n.bufferedAmount) {
                    if (10 <= ++stalledTicks) return stalledTicks = 0, z(), void ctrmReconnectNow("发送缓冲 150s 不清零，连接已半开")
                } else stalledTicks = 0
            }
            var onlineSig = null,
                onlineBound = !1;
            function O(t) {
                F(d = t);
                var sig = d.length + "|",
                    k = 0;
                for (; k < d.length; k++) sig += d[k].name + "\u0001" + d[k].color + (d[k].isSelf ? "*" : "") + "\u0002";
                if (sig !== onlineSig) {
                    onlineSig = sig;
                    var html = "";
                    for (k = 0; k < d.length; k++)
                        html += '<div class="ctrm-online-item" style="background-color: ' + d[k].color +
                            (d[k].isSelf ? ';font-weight:bold' : '') + '">' + escapeHtml(d[k].name) + "</div>";
                    C.html(html), N.text(d.length)
                }
                if (!onlineBound) {
                    onlineBound = !0;
                    C.on("click", ".ctrm-online-item", function () { w.val("@" + this.innerText + " "), w.get(0).focus() })
                }
                E.show()
            }
            function F(t) {
                function e(t) { var e = +t.toString().slice(-4, -1); return "rgba(" + 11 * e % 256 + ", " + 7 * e % 256 + ", " + 5 * e % 256 + ", 0.3)" }
                t.id ? (t.color = e(t.id), t.isSelf = t.id === s) : t.forEach(function (t) { t.color = e(t.id), t.isSelf = t.id === s })
            }
            function P(t, e) {
                var n = new Date(t),
                    r = void 0;
                return (r = "hours" === e ? "" + n.getHours() : "" + n.getMinutes()) === r[0] && (r = "0" + r), r
            }
            var CTRM_MSG_KEEP = 300,
                CTRM_MSG_TRIM_AT = 350,
                CTRM_MSG_HARD_CAP = 600;
            function ctrmDetachVoices(scope) {
                var srcs = [];
                scope.find("audio").each(function () {
                    if (window._voicePlaying === this) {
                        try { this.pause() } catch (err) { }
                        window._voicePlaying = null
                    }
                    var src = this.getAttribute("src");
                    src && 0 === src.indexOf("blob:") && srcs.push(src)
                });
                return srcs
            }
            function ctrmReleaseVoiceBlobs(srcs) {
                var map = window._myVoiceBlobs;
                if (!map || !srcs.length) return;
                srcs.forEach(function (src) {
                    if (b.find('audio[src="' + src + '"]').length) return;
                    Object.keys(map).forEach(function (k) { map[k] === src && delete map[k] });
                    try { URL.revokeObjectURL(src) } catch (err) { }
                })
            }
            function ctrmTrimHistory() {
                var el = b && b[0];
                if (!el || el.children.length <= CTRM_MSG_TRIM_AT) return;
                var items = b.children(".ctrm-dialog-item"),
                    drop = items.length - CTRM_MSG_KEEP;
                if (0 >= drop) return;
                if (!o && items.length <= CTRM_MSG_HARD_CAP) return;
                var dropped = items.slice(0, drop),
                    scrollBefore = el.scrollTop,
                    heightBefore = el.scrollHeight,
                    blobs = ctrmDetachVoices(dropped);
                dropped.remove();
                ctrmReleaseVoiceBlobs(blobs);
                o || (el.scrollTop = Math.max(0, scrollBefore - (heightBefore - el.scrollHeight)))
            }
            function H(t, quiet) {
                F(t);
                t.msg = escapeHtml(t.msg);
                t.name = escapeHtml(t.name);
                var selfName = escapeHtml(c);
                t.msg = t.msg.replace(
                    /\[url=([^\]]+)\](?:\[img\][^\]]*\[\/img\]) ?\[\/url\]|(https?:\/\/[^\s<>"]*\.(?:png|jpg|jpeg|gif|webp|svg|bmp|apng|ico|tiff|avif|heic|tga|jxr))|(https?:\/\/[^\s<>"]*\.tutu\.to\/[^\s<>"]*\/[^"\s]+)/gi,
                    '<a data-fancybox="gallery" data-src="$1$2$3"><img src="$1$2$3" alt="$1$2$3" style="max-width: 100%;" referrerpolicy="no-referrer"></a>'
                );
                t.msg = t.msg.replace("@" + selfName, '<span class="ctrm-b">@' + selfName + "</span>");
                t.msg = t.msg.replace(/我们还是说点其他的吧！|我们换个话题吧|这真是个好问题，让我想一想再告诉你吧/, '我是笨蛋机器人小尬,不是聪明的ChatGpt也不是机智的豆包,你的提问太难了');
                t.msg = t.msg.replace(/违禁词汇/, '不可以说脏话哦，小尬会截图告诉警察叔叔的。');
                t.msg = t.msg.replace(/一个中国|台湾/, '<a data-fancybox="gallery" data-src="https://pic1.zhimg.com/v2-e93e8719fc6cbdb6dd9cbdb501e68fd8_720w.jpg"><img src="https://pic1.zhimg.com/v2-e93e8719fc6cbdb6dd9cbdb501e68fd8_720w.jpg" alt="祖国统一势不可挡" style="max-width: 100%;" referrerpolicy="no-referrer"></a>');
                t.msg = t.msg.replace("龙哥威武", '<img src="https://api.cenguigui.cn/api/jp/?msg=龙哥我爱你" alt="Image" style="max-width: 100%;" referrerpolicy="no-referrer">');
                t.msg = t.msg.replace("摸鱼", '<a data-fancybox="gallery" data-src="https://api.vvhan.com/api/moyu"><img src="https://api.vvhan.com/api/moyu" alt="🐟" style="max-width: 10rem;" referrerpolicy="no-referrer"></a>');
                t.msg = t.msg.replace(/\/?jp (.+)/, '<img src="https://api.cenguigui.cn/api/jp/?msg=$1" alt="Image" style="max-width: 100%;" referrerpolicy="no-referrer">');
                t.msg = t.msg.replace(/(https?:\/\/[^\s<>"]*\.(?:mp4|avi|m3u8))/gi, function (match, url, offset, whole) {
                    if (/\[语音消息 \d{2}:\d{2}\]\s*$/.test(whole.slice(0, offset))) return match;
                    return '<iframe src="https://www.yemu.xyz/?url=' + url + '" id="player" width="100%" scrolling="no" allowfullscreen="true" allowtransparency="true" marginheight="0" marginwidth="0" frameborder="0"></iframe><a href="https://www.yemu.xyz/?url=' + url + '" target="_blank">点我试试,</a>仅供学习使用<img src="https://npm.elemecdn.com/blobcat@1.0.0/ablobcatheart.png" alt="Image" style="max-width: 2rem;" referrerpolicy="no-referrer">'
                });
                t.msg = t.msg.replace(/(https:\/\/music\.163\.com\/#\/song\?id=(\d+))/g,
                    '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="calc(100% + 20px)" style="width: calc(100% + 20px); margin-left: -10px" height="86" src="//music.163.com/outchain/player?type=2&id=$2&auto=0&height=66"></iframe>')
                    .replace(/(https:\/\/music\.163\.com\/#\/playlist\?id=(\d+))/g,
                        '<div style="font-family: -apple-system, BlinkMacSystemFont, \'Segoe UI\', Roboto, \'Helvetica Neue\', Arial, sans-serif; background-color: #ffffff; border-radius: 14px; padding: 18px; margin: 15px 0; box-shadow: 0 1px 4px rgba(47,36,41,.05), inset 0 0 0 1px rgba(47,36,41,.10); display: flex; flex-direction: column; align-items: center;">' +
                        '<p style="margin: 0; color: var(--cx-ink-2); font-size: 14px; font-weight: 500; text-align: center;"><b>该链接为歌曲列表，点击播放即可</b></p><p style="margin: 0; color: var(--cx-ink-3); font-size: 12px; font-weight: 500; text-align: center;">这里不显示歌曲列表，只会按照歌曲顺序依次播放</p>' +
                        '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width="calc(100% + 20px)" style="width: calc(100% + 20px); margin-left: -10px; margin-top: 15px;" height="86" src="//music.163.com/outchain/player?type=0&id=$2&auto=0&height=66"></iframe>' +
                        '<a class="ctrm-163-btn" href="$1" target="_blank" style="display: inline-block;padding: 6px 14px;margin-top: 15px;border: none;border-radius: 999px;background-color: var(--cx-brand);color: white;text-align: center;text-decoration: none;font-weight: bold;transition: background-color 0.3s;font-size: 14px;">跳转到网易云音乐列表</a> <a><img style="position:absolute;bottom: -9px;right: 0px;width: 66%;pointer-events:none;z-index:999;" src="https://cdn.h5ds.com/space/files/600972551685382144/20240307/689876818574024704.webp" alt="Image" referrerpolicy="no-referrer"></a>' +
                        '</div>');
                var ctSmojiFallbackBig = /^(eveonecat-static|mochadandan|popo|shuitunlulu|xiaohuangtun|xiaokumao|xiaoxiongchong|yantuanzi|yier-bubu|yuexinmiao)$/;
                var ctSmojiFallbackSmall = /^(daimaobatiao|douyin-current|douyin-limited|xiaohongshu)$/;
                var ctSmojiSize = function (ctPkg, ctIcon) {
                    try {
                        var ctInst = window.OwO_demo;
                        if (ctInst && ctInst.odata && ctInst.packages) {
                            for (var ctI = 0; ctI < ctInst.packages.length; ctI++) {
                                var ctPack = ctInst.odata[ctInst.packages[ctI]];
                                if (ctPack && ctPack.type === 'smoji' && ctPack.name === ctPkg) {
                                    var ctItems = ctPack.container || [];
                                    for (var ctJ = 0; ctJ < ctItems.length; ctJ++) {
                                        if (ctItems[ctJ] && ctItems[ctJ].icon === ctIcon) return ctItems[ctJ].big === true;
                                    }
                                    return ctItems.length ? ctItems[0].big === true : false;
                                }
                            }
                        }
                    } catch (ctErr) {}
                    if (ctSmojiFallbackBig.test(ctPkg)) return true;
                    if (ctSmojiFallbackSmall.test(ctPkg)) return false;
                    return null;
                };
                t.msg = t.msg.replace(/【(.*?)】/g, function (match, p1) {
                    var ctSep = p1.indexOf('/');
                    var ctBig = ctSep > 0 ? ctSmojiSize(p1.slice(0, ctSep), p1.slice(ctSep + 1)) : null;
                    if (ctBig !== null) {
                        return `<a><img src="https://s3-cdn.zsh.moe/smoji/${p1}.webp" alt="${p1}" style="max-width: ${ctBig ? '8rem' : '3rem'};"></a>`;
                    } else if (p1.includes('blob') || p1.includes('comfy')) {
                        return `<a><img src="https://npm.elemecdn.com/blobcat@1.0.0/${p1}.png" alt="${p1}" style="max-width: 3rem;"></a>`;
                    } else if (p1.includes('bb_')) {
                        return `<a><img src="https://unpkg.com/@waline/emojis@1.1.0/bilibili/${p1}.png" alt="${p1}" style="max-width: 3rem;"></a>`;
                    } else if (p1.includes('tuzki')) {
                        return `<a data-fancybox=\"gallery\" data-src=\"https://tools.kalvinbg.cn/static/image/emotion/${p1}.gif\"><img src=\"https://tools.kalvinbg.cn/static/image/emotion/${p1}.gif\" alt=\"${p1}\" style=\"max-width: 4rem;\"></a>`;
                    } else if (p1.includes('long') || p1.includes('iq')) {
                        return `<a><img src="https://emoticons.z-l.top/${p1}.png" alt="${p1}" style="max-width: 3rem;"></a>`;
                    }
                    else {
                        return `<a><img src="https://cdn.jsdmirror.com/gh/btwoa/Fluent-Emoji-3D/${p1}.gif" alt="${p1}" style="max-width: 3rem;"></a>`;
                    }
                });
                t.msg = t.msg.replace(/\/?v:([^<]*)?(?:<a[^>]*>[^<]*<\/a>)?/, function (match, $1) {
                    const uid = ctrmUid("tts");
                    const audioId = `audio-${uid}`;
                    const buttonId = `play-button-${uid}`;
                    const textId = `transcribe-text-${uid}`;
                    const imgId = `img-${uid}`;
                    const barId = `audio-bar-${uid}`;
                    const transcribeId = `transcribe-button-${uid}`;
                    const html = `
    <a class="ctrm-tts-pill" style="display: inline-flex; align-items: center; text-decoration: none; color: inherit; border: 1px solid var(--cx-line); border-radius: 999px; padding: 4px 8px; background-color: #fff; transition: background-color 0.3s, border-color 0.3s; cursor: pointer;">
        <img id="${imgId}" src="//dh.z-l.top/js/语音.svg" alt="audio icon" style="width: 24px; height: 24px; margin-right: 8px;">
        <audio id="${audioId}" preload="metadata" style="display: none;">
            <source src="https://dict.youdao.com/dictvoice?audio=${$1}&le=zh" type="audio/mp3">
        </audio>
        <span id="${buttonId}" style="margin-left: 8px; font-size: 0.9rem; color: var(--cx-ink-2);">加载中...</span>
        <button id="${transcribeId}" style="margin-left: 8px; border: none; background: transparent; cursor: pointer;">
            <img src="//dh.z-l.top/js/语音转文字.svg" alt="转文字" style="width: 24px; height: 24px;">
        </button>
    </a>
    <div id="${textId}" style="display: none; margin-top: 8px; font-size: 0.9rem; color: var(--cx-ink);"></div>
    <div style="background: rgba(47,36,41,.12); height: 4px; border-radius: 2px; margin-top: 4px; width: 100%;">
        <div id="${barId}" style="background: var(--cx-brand); height: 100%; border-radius: 2px; width: 0;"></div>
    </div>
    `;
                    setTimeout(() => {
                        const button = document.getElementById(buttonId);
                        const audio = document.getElementById(audioId);
                        const imgElement = document.getElementById(imgId);
                        const audioBar = document.getElementById(barId);
                        const transcribeButton = document.getElementById(transcribeId);
                        const textElement = document.getElementById(textId);
                        if (!button || !audio || !imgElement || !audioBar || !transcribeButton || !textElement) return;
                        audio.addEventListener('loadedmetadata', () => {
                            const duration = formatTime(audio.duration);
                            button.textContent = duration;
                        });
                        audio.addEventListener('timeupdate', () => {
                            const remainingTime = audio.duration - audio.currentTime;
                            button.textContent = formatTime(remainingTime);
                            const lengthPercentage = (audio.currentTime / audio.duration) * 100;
                            audioBar.style.width = `${lengthPercentage}%`;
                        });
                        audio.addEventListener('ended', () => {
                            button.textContent = formatTime(audio.duration);
                            audioBar.style.width = '100%';
                            imgElement.classList.remove('playing');
                        });
                        button.parentElement.addEventListener('click', () => {
                            if (audio.paused) {
                                audio.play();
                                imgElement.classList.add('playing');
                            } else {
                                audio.pause();
                                imgElement.classList.remove('playing');
                            }
                        });
                        transcribeButton.addEventListener('click', (e) => {
                            e.stopPropagation();
                            if (textElement.style.display === 'none') {
                                textElement.style.display = 'block';
                                textElement.textContent = '';
                                typeWriter(textElement, $1);
                            } else {
                                textElement.style.display = 'none';
                                textElement.textContent = '';
                            }
                        });
                    }, 0);
                    return html;
                });
                function typeWriter(element, text, i = 0) {
                    if (i < text.length) {
                        element.textContent += text.charAt(i);
                        i++;
                        setTimeout(() => typeWriter(element, text, i), 100);
                    }
                }
                function formatTime(seconds) {
                    const minutes = Math.floor(seconds / 60);
                    const secs = Math.floor(seconds % 60);
                    return `${String(minutes).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
                }
                t.msg = t.msg.replace(/(https?:\/\/[^\s<>"]+)(?![^<>]*>.*<\/a>)/g, function (match, url) {
                    const currentHostname = window.location.hostname;
                    let hostname, origin;
                    try {
                        const u = new URL(url);
                        hostname = u.hostname;
                        origin = u.origin;
                    } catch (e) {
                        return match;
                    }
                    const blacklist = ['dict.youdao.com', 'npm.elemecdn.com', 'api.cenguigui.cn', 't.tutu.to', 'img.z-l.top', 'imgdd.com', 'tucdn.wpon.cn', 'share-text.org'];
                    if (blacklist.includes(hostname)) {
                        return match;
                    }
                    const isSameDomain = hostname === currentHostname;
                    const safeDomains = ['http://localhost:3000', 'bilibili.com', '88lin.github.io', '*.88lin.eu.org', 'jasnode.github.io'];
                    const isSafeDomain = safeDomains.some(domain => {
                        const regex = new RegExp(`(?:^|\\.)${domain.replace('.', '\\.')}$`);
                        return regex.test(hostname);
                    });
                    var faviconUrl = origin + '/favicon.ico';
                    var faviconRest = origin + '/favicon.png|' + origin + '/favicon.svg|' + origin + '/apple-touch-icon.png';
                    const tooltipMessage = isSameDomain
                        ? '<div class="tag-link-tips" style="border-bottom: 1px solid rgba(47,122,79,.4); padding-bottom: 4px; font-size: .7rem; color: #2f7a4f; font-weight: 400; pointer-events: none;">站内链接，可放心访问</div>'
                        : isSafeDomain
                            ? '<div class="tag-link-tips" style="border-bottom: 1px solid rgba(47,122,79,.4); padding-bottom: 4px; font-size: .7rem; color: #2f7a4f; font-weight: 400; pointer-events: none;">链接域名在白名单中，可放心访问<img src="https://cdn.jsdmirror.com/gh/btwoa/Fluent-Emoji-3D/%E6%8B%89%E7%82%AE%E5%BD%A9%E5%B8%A6.gif" icon="反手食指向左指" style="height: 1.5rem; display: inline;"></div>'
                            : '<div class="tag-link-tips" style="border-bottom: 1px solid var(--cx-hairline); padding-bottom: 4px; font-size: .6rem; color: var(--cx-ink-2); font-weight: 400; pointer-events: none;">引用站外地址，不保证链接的可用性和安全性</div>';
                    const linkCard = '<a class="tag-Link" target="_blank" href="' + url + '" rel="external nofollow" title="即将进入' + hostname + '" style="background: #fff; border-radius: 12px !important; display: flex; border: 1px solid rgba(47,36,41,.10); box-shadow: 0 1px 4px rgba(47,36,41,.05); flex-direction: column; padding: .3rem 0.9rem .6rem; border-width: 1px !important;">' +
                        tooltipMessage +
                        '<div class="tag-link-bottom" style="display: flex; margin-top: .5rem; align-items: center; justify-content: space-around; pointer-events: none;">' +
                        '<div class="tag-link-left" style="width: 30px; min-width: 30px; height: 30px; background-size: cover !important; border-radius: 999px; background: rgba(242,118,155,.16); pointer-events: none; display: flex;">' +
                        '<img loading="lazy" referrerpolicy="no-referrer" data-ic="' + faviconRest + '" onerror="var l=this.dataset.ic?this.dataset.ic.split(\'|\'):[];this.dataset.ic=l.slice(1).join(\'|\');if(!l.length)this.onerror=null;this.src=l[0]||\'https://go.88lin.eu.org/favicon.svg\'" style="padding: 0; margin: auto; font-size: 24px; width: 30px; border-radius: 999px; color: darkred;" src="' + faviconUrl + '" alt="Favicon" class="tag-link-favicon">' +
                        '</div>' +
                        '<div class="tag-link-right" style="margin-left: 1rem; pointer-events: none;width: calc(100% - 5.5rem);">' +
                        '<div class="siteDesc" style="font-size: 0.9rem; line-height: 1.2; font-weight: 700; pointer-events: none; color: var(--cx-ink); word-break: break-all; text-overflow: ellipsis; display: -webkit-box; -webkit-box-orient: vertical; -webkit-line-clamp: 2; overflow: hidden;">' + hostname + '</div>' +
                        '<div style="font-size: .7rem; color: var(--cx-ink-3); font-weight: 400; margin-top: 8px; pointer-events: none; line-height: 1; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">' + url + '</div>' +
                        '</div>' +
                        '<i class="icon-arrow-right-s-line" style="margin-left: auto; filter: opacity(0.5); font-size: 1.5rem; padding-left: .5rem; pointer-events: none;">🔗</i>' +
                        '</div>' +
                        '</a>';
                    return linkCard;
                });
                t.msg = t.msg.replace(/\[语音消息 (\d{2}:\d{2})\]\s*(https?:\/\/[^\s<>"]+\.(?:webm|mp4|m4a|ogg|mp3|wav))/g, function (_, duration, url) {
                    var uid = ctrmUid("voice");
                    var localSrc = '';
                    if (window._myVoiceBlobs && window._myVoiceBlobs[url] && t.id === s) {
                        localSrc = window._myVoiceBlobs[url];
                    }
                    return `
    <div class="ctrm-voice-bubble" id="${uid}">
      <button class="ctrm-voice-play" type="button" title="播放/暂停">
        <svg class="icon-play" viewBox="0 0 24 24" width="20" height="20"><polygon points="6,4 20,12 6,20" fill="#fff"/></svg>
        <svg class="icon-pause" viewBox="0 0 24 24" width="20" height="20" style="display:none;"><rect x="6" y="4" width="4" height="16" fill="#fff"/><rect x="14" y="4" width="4" height="16" fill="#fff"/></svg>
      </button>
      <div class="ctrm-voice-progress"><div class="ctrm-voice-bar"></div></div>
      <span class="ctrm-voice-time">${duration}</span>
      <audio preload="metadata" style="display:none;" src="${localSrc || url}"></audio>
    </div>`;
                });
                var e = (
                    '\n\t\t\t\t<div class="ctrm-dialog-item">\n\t\t\t\t\t<div class="ctrm-dialog-sender">\n\t\t\t\t\t\t<span>' +
                    t.name +
                    '</span>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class="ctrm-clearfix">\n\t\t\t\t\t\t<div class="ctrm-dialog-bubble ctrm-break" style="background-color: ' +
                    t.color +
                    '">\n\t\t\t\t\t\t\t' +
                    t.msg +
                    '\n\t\t\t\t\t\t\t<div class="ctrm-dialog-time">\n\t\t\t\t\t\t\t\t' +
                    P(t.time, "hours") +
                    ":" +
                    P(t.time, "minutes") +
                    "\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t</div>\n\t\t\t\t</div>\n\t\t\t"
                )
                    .replace(/\t/g, "")
                    .replace(/\n/g, "");
                var n = i(e);
                if (s === t.id) {
                    n.addClass("ctrm-me");
                    var r = n.find(".ctrm-dialog-sender span").text();
                    n.find(".ctrm-dialog-sender span").text(r + "（我）");
                }
                b.append(n);
                ctrmTrimHistory();
                ctrmBindFancybox(n);
                I();
                function showNewMessageHalo() {
                    if (quiet || !m.hasClass("ctrm-close")) return;
                    var root = m[0];
                    clearTimeout(root.cxHaloTimer);
                    m.removeClass("ctrm-ding");
                    void root.offsetWidth;
                    g.addClass("glow");
                    m.addClass("ctrm-ding");
                    root.cxHaloTimer = setTimeout(function () {
                        m.removeClass("ctrm-ding");
                        g.removeClass("glow");
                    }, 950);
                }
                showNewMessageHalo();
                return n;
            }
            function z() {
                clearInterval(heartbeatTimer), heartbeatTimer = null, O([]);
                if (e || offlineNoticed || unloading) return;
                offlineNoticed = !0,
                    H({ time: Date.now(), id: 111111111211, name: "SYSTEM", msg: "连接已断开，正在自动重连…（也可点 '😜' 立即重连）" }, !0)
            }
            function I() { o && b.scrollTop(9999999) }
            var chatThrottleUntil = 0;
            var pendingSends = [],
                settledSends = [];
            function ctrmSettleSend(rec) {
                clearTimeout(rec.timer), clearTimeout(rec.soft);
                var k = pendingSends.indexOf(rec);
                0 <= k && pendingSends.splice(k, 1);
                rec.settledAt = Date.now();
                settledSends.push(rec);
                settledSends = settledSends.filter(function (x) { return 18e4 > Date.now() - x.settledAt })
            }
            function ctrmConfirmOldestPending() {
                pendingSends.length && ctrmSettleSend(pendingSends[0])
            }
            function ctrmPendingInHistory(history) {
                var h = history || [];
                return pendingSends.some(function (rec) {
                    return h.some(function (x) { return x && String(x.msg == null ? "" : x.msg).trim() === rec.msg })
                })
            }
            function ctrmResolvePending(msg) {
                var raw = String(msg == null ? "" : msg).trim();
                var lists = [pendingSends, settledSends];
                for (var i = 0; i < lists.length; i++) {
                    for (var k = 0; k < lists[i].length; k++) {
                        var rec = lists[i][k];
                        if (rec.msg !== raw) continue;
                        var live = rec.node[0] && rec.node[0].isConnected;
                        clearTimeout(rec.timer), clearTimeout(rec.soft), rec.node.remove(), lists[i].splice(k, 1);
                        if (live) return;
                        k--;
                    }
                }
            }
            function ctrmFlushPending(history) {
                var h = history || [];
                settledSends = [];
                if (!pendingSends.length) return;
                var keep = [];
                pendingSends.forEach(function (rec) {
                    clearTimeout(rec.timer), clearTimeout(rec.soft);
                    var arrived = h.some(function (x) { return x && String(x.msg == null ? "" : x.msg).trim() === rec.msg });
                    if (arrived) return void rec.node.remove();
                    rec.node.removeClass("ctrm-pending").addClass("ctrm-unconfirmed");
                    w.val() || w.val(rec.msg);
                    ctrmToast("重连后记录里没有你刚发的那条，内容已放回输入框", "error");
                    rec.settledAt = Date.now(), keep.push(rec)
                });
                pendingSends = [], settledSends = keep
            }
            function ctrmEchoLocal(msg) {
                if (!s) return;
                var node = H({ id: s, name: c, msg: msg, time: Date.now() }, !0);
                if (!node) return;
                node.addClass("ctrm-pending");
                var rec = { msg: msg, node: node, timer: null, soft: null, settledAt: 0 };
                var softAt = 8e3;
                function softCheck() {
                    if (0 > pendingSends.indexOf(rec)) return;
                    if (n && 1 === n.readyState && 0 === n.bufferedAmount)
                        return node.removeClass("ctrm-pending"), void ctrmSettleSend(rec);
                    softAt += 4e3;
                    6e4 > softAt && (rec.soft = setTimeout(softCheck, 4e3))
                }
                rec.soft = setTimeout(softCheck, softAt);
                rec.timer = setTimeout(function () {
                    if (0 > pendingSends.indexOf(rec)) return;
                    node.removeClass("ctrm-pending").addClass("ctrm-unconfirmed");
                    w.val() || w.val(rec.msg);
                    ctrmSettleSend(rec);
                    ctrmToast("这条 90 秒没等到服务器确认，内容已放回输入框", "error")
                }, 9e4);
                pendingSends.push(rec)
            }
            function R() {
                var t = w.val().slice(0, 700).trim(); 
                if (0 === t.length) return void ctrmToast("你好像什么也没有输入呢");
                if (!n || 1 !== n.readyState)
                    return void ctrmToast("还没连上服务器，这条没发出去；重连后再点一次发送", "error");
                if (r) {
                    var left = Math.max(1, Math.ceil((chatThrottleUntil - Date.now()) / 1e3));
                    return void ctrmToast("发得太快了，还要等 " + left + " 秒；内容已保留，稍后再点发送", "error")
                }
                var e = { type: "chat", data: { msg: t }, char: L };
                r = !0, chatThrottleUntil = Date.now() + 5e3,
                    n.send(JSON.stringify(e)),
                    setTimeout(function () { r = !1 }, 5e3);
                ctrmEchoLocal(t), w.val("")
            }
            function W() {
                e || (e = !0, reconnectDelay = 2e3, offlineNoticed = !1,
                    clearTimeout(reconnectTimer), reconnectTimer = null,
                    _(), b.find(".ctrm-dialog-item").remove(), w.val(""),
                    setTimeout(function () { e = !1 }, 2e3))
            }
            function B() {
                var t = window.innerWidth;
                t / window.innerHeight <= 1.2 ? m.addClass("ctrm-mobile") : m.removeClass("ctrm-mobile"), t <= 1210 || m.hasClass("ctrm-mobile") ? v.hide() : m.hasClass("ctrm-mobile") || v.show(), b.scrollTop(9999999)
            }
            function foldToBall(animate) {
                if (m.hasClass("ctrm-close") || m.hasClass("ctrm-folding")) return;
                S.hide(), D.hide(), v.hide(), E.show();
                if (!animate) return void m.addClass("ctrm-close");
                m.addClass("ctrm-folding");
                setTimeout(function () {
                    m.removeClass("ctrm-folding").addClass("ctrm-close ctrm-popin");
                    setTimeout(function () { m.removeClass("ctrm-popin") }, 320);
                }, 190);
            }
            window.addEventListener("pagehide", function () {
                unloading = !0, clearTimeout(reconnectTimer), reconnectTimer = null,
                    clearInterval(heartbeatTimer), clearInterval(a);
                try { n && n.close() } catch (err) { }
            });
            window.addEventListener("pageshow", function (ev) {
                unloading = !1;
                (ev && ev.persisted || !n || 2 === n.readyState || 3 === n.readyState) && ctrmReconnectNow("页面恢复")
            });
            document.addEventListener("visibilitychange", function () {
                if (document.hidden || unloading) return;
                n && 1 === n.readyState ? ctrmSendUpdate() : ctrmReconnectNow("回到前台")
            });
            window.addEventListener("online", function () { ctrmReconnectNow("网络恢复") });
            window.addEventListener("offline", function () { z() });
            ctrmInitOnce();
            var ctrmComposing = !1,
                ctrmComposeEndAt = 0;
            w.on("compositionstart", function () { ctrmComposing = !0 });
            w.on("compositionend", function () { ctrmComposing = !1, ctrmComposeEndAt = Date.now() });
            function ctrmIsEnterSend(t) {
                if (13 !== t.keyCode && "Enter" !== t.key) return !1;
                var native = t.originalEvent || t;
                if (ctrmComposing || native.isComposing || 229 === t.keyCode) return !1;
                return !(80 > Date.now() - ctrmComposeEndAt)
            }
            document.body.addEventListener("click", j), window.addEventListener("popstate", j), m.on("click", function (t) { return t.stopPropagation() }), m.on("touchstart", function (t) { return t.stopPropagation() }), m.on("touchend", function (t) { return t.stopPropagation() }), m.on("touchmove", function (t) { return t.stopPropagation() }), S.click(function (t) { foldToBall(!0), t.stopPropagation() }), g.click(function () { m.hasClass("ctrm-close") && (m.removeClass("ctrm-close"), S.show(), D.show(), E.show(), B()) }), D.click(W), x.click(R), w.on("keydown", function (t) {
                ctrmIsEnterSend(t) && (t.preventDefault(), R())
            }), b.on("scroll", function () {
                var t = b[0],
                    e = t.clientHeight,
                    n = t.scrollTop,
                    r = t.scrollHeight;
                o = e + n < .9 * r ? (y.show(), !1) : (y.hide(), !0)
            }), y.click(function () { y.hide(), o = !0, I() }), T.click(function () { m.find(".ctrm-domain-filter").hide() }), B(), p = document.querySelector("script[src*=z-l]"),
                h = !(p && null !== p.getAttribute("open")),
                (m.hasClass("ctrm-mobile") || h) && foldToBall(!1), m.show(), window.addEventListener("resize", B)
        }()
    }, { "./dom.js": 3, "jQuery-slim": 1 }],
    3: [function (t, e, n) {
        "use strict";
        var r = `
<script async src="https://cdn.h5ds.com/space/files/600972551685382144/20250608/856129445817171968.js" data-url="https://tutu.to/upload" data-auto-insert="direct-links"></script>
<link rel="stylesheet" href="https://cdn.h5ds.com/space/files/600972551685382144/20250722/871856997280043008.css">
<link rel="stylesheet" href="https://cdnjs.snrat.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.css" />
<script src="https://cdnjs.snrat.com/ajax/libs/fancybox/3.5.7/jquery.fancybox.min.js"></script>
<script>
var OwO_demo = new OwO({
    logo: '<svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6"><path stroke-linecap="round" stroke-linejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"/></svg>表情包',
    container: document.getElementsByClassName('OwO')[0],
    target: document.getElementsByClassName('OwO-textarea')[0],
    api: 'https://cdn.jsdmirror.com/gh/88lin/picx-images-hosting@master/cdn/chat/owo-smoji.json',
    position: 'up',
    width: '100%',
    maxHeight: '250px'
});
</script>
<style>
.ctrm-voice-container {
    position: relative;
    display:table;
}
.ctrm-voice-btn {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background .2s ease, color .2s ease, border-color .2s ease;
}
.ctrm-voice-btn:hover {
    background: var(--cx-tint);
}
.recommend-tag:before {
    border: 1px solid var(--cx-brand);
    border-radius: 12px;
    box-sizing: border-box;
    content: "";
    height: 200%;
    left: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    transform: scale(.5);
    transform-origin: 0 0;
    width: 200%;
}
.recommend-tag{
    color: var(--cx-brand-ink);
    border-radius: 6px;
    padding: 0 4px;
    position: relative;
    font-size: 10px;
    font-weight: 600;
    line-height: 16px;
}
#ctrm_ .ctrm-voice-btn.recording,
#ctrm_ .ctrm-voice-btn.recording:hover {
    background: var(--cx-brand-ink);
    border-color: var(--cx-brand-ink);
    color: #fff;
}
#ctrm_ .ctrm-voice-btn.recording svg,
#ctrm_ .ctrm-voice-btn.recording:hover svg { stroke: #fff; }
#ctrm_ .ctrm-voice-btn.recording .recommend-tag { display: none; }
.ctrm-voice-timer {
    color: var(--cx-warm);
    font-variant-numeric: tabular-nums;
}
.ctrm-voice-recording-indicator {
    position: absolute;
    gap:8px;
    top: -40px;
    left: 50%;
    transform: translateX(-50%);
    background: rgba(42, 42, 51, .92);
    color: white;
    padding: 5px 10px;
    border-radius: var(--cx-pill);
    font-size: 12px;
    white-space: nowrap;
    align-items: center;
    z-index: 1;
}
.ctrm-voice-wave {
    display: inline-block;
    width: 20px;
    height: 20px;
    background: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="50" r="10" fill="white"><animate attributeName="r" values="10;20;10" dur="1s" repeatCount="indefinite"/></circle><circle cx="50" cy="50" r="10" fill="white"><animate attributeName="r" values="10;20;10" dur="1s" begin="0.2s" repeatCount="indefinite"/></circle><circle cx="80" cy="50" r="10" fill="white"><animate attributeName="r" values="10;20;10" dur="1s" begin="0.4s" repeatCount="indefinite"/></circle></svg>') no-repeat center;
    background-size: contain;
}
</style>
<style>
:root {
    --cx-brand: #f2769b;
    --cx-brand-deep: #e05a84;
    --cx-brand-ink: #c23b6e;
    --cx-warm: #e8a94f;
    --cx-ink: #2f2429;
    --cx-ink-2: #5f4f56;
    --cx-ink-3: #7f6e75;
    --cx-hairline: rgba(47, 36, 41, .10);
    --cx-line: rgba(47, 36, 41, .16);
    --cx-tint: rgba(242, 118, 155, .09);
    --cx-tint-2: rgba(242, 118, 155, .16);
    --cx-shadow: 0 1px 4px rgba(47, 36, 41, .05);
    --cx-shadow-pop: 0 4px 18px rgba(47, 36, 41, .10);
    --cx-pill: 999px;
}
#ctrm_ { color: var(--cx-ink); }
#ctrm_ .ctrm-container { border-top-right-radius: 2vw; }
#ctrm_ .ctrm-title {
    background: linear-gradient(90deg, #ffdee9, #b5fffc) !important;
    box-shadow: inset 0 -1px 0 var(--cx-hairline);
}
#ctrm_ .ctrm-title.glow { background: #fbe6c4 !important; }
#ctrm_ .ctrm-title-span { font-weight: 600; }
#ctrm_ .ctrm-title-span strong { font-weight: 600; }
#ctrm_ .ctrm-title-countwrap { margin-left: .35em; color: var(--cx-ink-2); font-weight: 600; }
#ctrm_ .ctrm-title-count { color: var(--cx-brand-ink); }
#ctrm_.ctrm-mobile .ctrm-title-span { height: 4.6vw; line-height: 4.6vw; }
#ctrm_.ctrm-mobile .ctrm-title-span img { width: auto; height: 1em; }
#ctrm_ .ctrm-title-close,
#ctrm_ .ctrm-title-reconn {
    background: #fff;
    border-color: var(--cx-line);
    color: var(--cx-brand-ink);
    transition: background .18s, border-color .18s;
}
#ctrm_ .ctrm-title-close:hover,
#ctrm_ .ctrm-title-reconn:hover { background: var(--cx-tint); border-color: var(--cx-brand); }
#ctrm_.ctrm-close {
    --cx-ball: clamp(42px, 3.2vw, 58px);
    position: fixed;
    bottom: clamp(14px, 1.1vw, 22px);
    right: clamp(14px, 1.1vw, 22px);
    transition: none;
    --cx-orb-ring: var(--cx-orb-b-mid);
    --cx-orb-bg-start: rgb(236, 133, 255);
    --cx-orb-bg-end: rgb(49, 138, 255);
    --cx-orb-sh1: rgba(166, 35, 248, 0);
    --cx-orb-sh2: rgba(121, 19, 255, 0.5);
    --cx-orb-sh3: rgba(255, 255, 255, 0.9);
    --cx-orb-sh4: rgb(253, 164, 250);
    --cx-orb-a-start: rgb(133, 210, 255);
    --cx-orb-a-end: rgba(115, 49, 255, 0);
    --cx-orb-b-start: rgb(254, 245, 254);
    --cx-orb-b-mid: rgb(253, 109, 255);
    --cx-orb-b-end: rgba(203, 56, 255, 0);
    --cx-orb-c-start: rgba(254, 254, 254, 0);
    --cx-orb-c-mid: rgba(254, 111, 255, 0);
    --cx-orb-c-end: #7006fe;
    --cx-orb-d-start: rgba(254, 254, 254, 0);
    --cx-orb-d-mid: rgba(142, 111, 255, 0);
    --cx-orb-d-end: #00eeff;
    --cx-orb-rot: 2s;
    --cx-orb-hue: 2s;
    --cx-orb-hue-deg: 120deg;
    --cx-orb-main-hue: none;
    --cx-orb-shine-a: 0.9;
    --cx-orb-shine-b: 0.3;
    --cx-orb-glow: 1;
}
#ctrm_.ctrm-close .ctrm-container {
    position: relative;
    width: var(--cx-ball);
    height: var(--cx-ball);
    max-height: none;
    transition: none;
    overflow: visible;
}
#ctrm_.ctrm-close .ctrm-panel,
#ctrm_.ctrm-close .ctrm-online { display: none; }
#ctrm_.ctrm-close .ctrm-title-close,
#ctrm_.ctrm-close .ctrm-title-reconn { display: none; }
#ctrm_.ctrm-close .ctrm-title-span img { display: none; }
#ctrm_.ctrm-close .ctrm-title {
    position: relative;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: transparent !important;
    background-image: radial-gradient(circle at 50% 30%, var(--cx-orb-bg-start) 0, var(--cx-orb-bg-end) 70%) !important;
    box-shadow:
        var(--cx-orb-sh1) 0 calc(var(--cx-ball) * .049 * var(--cx-orb-glow)) calc(var(--cx-ball) * .073 * var(--cx-orb-glow)) 0,
        var(--cx-orb-sh2) 0 calc(var(--cx-ball) * .061 * var(--cx-orb-glow)) calc(var(--cx-ball) * .122 * var(--cx-orb-glow)) 0,
        var(--cx-orb-sh3) 0 0 calc(var(--cx-ball) * .012) 0 inset,
        var(--cx-orb-sh4) 0 calc(var(--cx-ball) * .012) calc(var(--cx-ball) * .085) 0 inset;
    isolation: isolate;
    animation: var(--cx-orb-main-hue);
    transition: transform .18s;
}
#ctrm_.ctrm-close .ctrm-title:hover { transform: scale(1.06); }
#ctrm_.ctrm-close .ctrm-title.glow {
    background-color: transparent !important;
    background-image: radial-gradient(circle at 50% 30%, var(--cx-orb-bg-start) 0, var(--cx-orb-bg-end) 70%) !important;
}
#ctrm_.ctrm-close.ctrm-ding .ctrm-container::after {
    content: "";
    position: absolute;
    top: -12%;
    right: -12%;
    bottom: -12%;
    left: -12%;
    z-index: -1;
    border-radius: 50%;
    background: radial-gradient(circle, var(--cx-orb-ring) 42%, transparent 76%);
    pointer-events: none;
    animation: cxOrbHalo .9s ease-out both;
}
#ctrm_.ctrm-close .ctrm-title::before {
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 87.8%; height: 87.8%;
    border-radius: 50%;
    background-image: radial-gradient(circle at 50% 90%, var(--cx-orb-a-start) 0, var(--cx-orb-a-end) 70%);
    transform-style: preserve-3d;
    animation: cxOrbSpin var(--cx-orb-rot) linear infinite,
               cxOrbHue var(--cx-orb-hue) linear infinite;
}
#ctrm_.ctrm-close .ctrm-title::after {
    content: "";
    position: absolute;
    left: 10%; top: 5%;
    width: 87.8%; height: 87.8%;
    border-radius: 50%;
    background-image: radial-gradient(circle at 33% 12%, var(--cx-orb-b-start) 0, var(--cx-orb-b-mid) 26%, var(--cx-orb-b-end) 63%);
    mix-blend-mode: soft-light;
    transform-style: preserve-3d;
    animation: cxOrbSpin calc(var(--cx-orb-rot) * 1.5) linear infinite,
               cxOrbHue calc(var(--cx-orb-hue) * 1.5) linear infinite;
}
#ctrm_.ctrm-close .ctrm-title-span {
    position: absolute;
    display: block;
    left: 6.1%; top: 6.1%;
    right: auto; bottom: auto;
    margin: 0;
    width: 87.8%; height: 87.8%;
    border-radius: 50%;
    box-shadow: inset 0 calc(var(--cx-ball) * -.012) calc(var(--cx-ball) * .073) calc(var(--cx-ball) * .012) rgba(255, 255, 255, .4),
                inset 0 calc(var(--cx-ball) * .037) calc(var(--cx-ball) * .049) 0 rgba(255, 255, 255, .4);
    font-size: 0;
    line-height: 0;
}
#ctrm_.ctrm-close .ctrm-title-span > span:first-child {
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
}
#ctrm_.ctrm-close .ctrm-title-span > span:first-child::before,
#ctrm_.ctrm-close .ctrm-title-span > span:first-child::after {
    content: "";
    position: absolute;
    left: -1.25%; top: -1.25%;
    width: 100%; height: 100%;
    border-radius: 50%;
    transform-style: preserve-3d;
}
#ctrm_.ctrm-close .ctrm-title-span > span:first-child::before {
    background-image: radial-gradient(circle at 31% 12%, var(--cx-orb-c-start) 0, var(--cx-orb-c-mid) 31%, var(--cx-orb-c-end) 77%);
    mix-blend-mode: color-dodge;
    opacity: .65;
    animation: cxOrbSpin calc(var(--cx-orb-rot) * 2) linear infinite,
               cxOrbHue calc(var(--cx-orb-hue) * 2) linear infinite;
}
#ctrm_.ctrm-close .ctrm-title-span > span:first-child::after {
    background-image: radial-gradient(circle at 12% 80%, var(--cx-orb-d-start) 0, var(--cx-orb-d-mid) 31%, var(--cx-orb-d-end) 77%);
    mix-blend-mode: color;
    opacity: .55;
    animation: cxOrbSpin calc(var(--cx-orb-rot) * 2.5) linear infinite,
               cxOrbHue calc(var(--cx-orb-hue) * 2.5) linear infinite;
}
#ctrm_.ctrm-close .ctrm-title-span strong {
    display: block;
    position: absolute;
    left: -6.94%; top: -6.94%;
    width: 113.9%; height: 113.9%;
    border-radius: 50%;
    overflow: hidden;
}
#ctrm_.ctrm-close .ctrm-title-span strong::before,
#ctrm_.ctrm-close .ctrm-title-span strong::after {
    content: "";
    position: absolute;
    left: 0; top: 0;
    width: 100%; height: 100%;
    border-radius: 50%;
    background-image: radial-gradient(ellipse 26% 52% at 44% 40%, rgba(255, 255, 255, .8) 0, rgba(255, 255, 255, .45) 34%, rgba(255, 255, 255, 0) 72%);
    filter: blur(calc(var(--cx-ball) * .183));
}
#ctrm_.ctrm-close .ctrm-title-span strong::before {
    mix-blend-mode: hard-light;
    opacity: var(--cx-orb-shine-a);
    transform: scale(.4);
    animation: cxOrbShineA 3.5s linear infinite;
}
#ctrm_.ctrm-close .ctrm-title-span strong::after {
    left: 15%;
    mix-blend-mode: plus-lighter;
    opacity: var(--cx-orb-shine-b);
    transform: scale(.6);
    animation: cxOrbShineB 5s ease-in-out infinite;
}
#ctrm_.ctrm-close .ctrm-title-countwrap {
    position: absolute;
    top: calc(var(--cx-ball) * -.101);
    right: calc(var(--cx-ball) * -.101);
    min-width: calc(var(--cx-ball) * .4);
    height: calc(var(--cx-ball) * .4);
    line-height: calc(var(--cx-ball) * .4);
    padding: 0 calc(var(--cx-ball) * .07);
    box-sizing: border-box;
    border-radius: var(--cx-pill);
    background: #fff;
    color: var(--cx-brand-ink);
    font-weight: 700;
    text-align: center;
    box-shadow: 0 1px 4px rgba(47, 36, 41, .16);
}
#ctrm_.ctrm-close .ctrm-title-count { font-size: calc(var(--cx-ball) * .24); }
#ctrm_.ctrm-close.ctrm-mobile {
    --cx-ball: clamp(48px, 13vw, 64px);
    bottom: clamp(14px, 3.5vw, 24px);
    right: clamp(14px, 3.5vw, 24px);
}
#ctrm_.ctrm-close.ctrm-mobile .ctrm-container {
    width: var(--cx-ball);
    height: var(--cx-ball);
}
@media (prefers-reduced-motion: reduce) {
    #ctrm_.ctrm-close .ctrm-title,
    #ctrm_.ctrm-close .ctrm-title::before,
    #ctrm_.ctrm-close .ctrm-title::after,
    #ctrm_.ctrm-close .ctrm-title-span > span:first-child::before,
    #ctrm_.ctrm-close .ctrm-title-span > span:first-child::after,
    #ctrm_.ctrm-close .ctrm-title-span strong::before,
    #ctrm_.ctrm-close .ctrm-title-span strong::after { animation: none; }
    #ctrm_.ctrm-close.ctrm-ding .ctrm-container::after { content: none; }
}
@keyframes cxOrbSpin { 0% { transform: rotate3d(1, 1, 1, 0deg) } 100% { transform: rotate3d(1, 1, 1, 1turn) } }
@keyframes cxOrbHue { 0% { filter: hue-rotate(0deg) } 50% { filter: hue-rotate(var(--cx-orb-hue-deg)) } 100% { filter: hue-rotate(0deg) } }
@keyframes cxOrbShineA { 0% { transform: scale(.4) } 50% { transform: scale(.1) } 100% { transform: scale(.4) } }
@keyframes cxOrbShineB { 0% { transform: scale(.6) } 50% { transform: scale(.1) } 100% { transform: scale(.6) } }
@keyframes cxOrbHalo { 0% { transform: scale(.9); opacity: 0 } 18% { opacity: .7 } 100% { transform: scale(1.5); opacity: 0 } }
#ctrm_.ctrm-folding .ctrm-container {
    transform-origin: calc(100% - 22px) calc(100% - 22px);
    animation: cxFoldOut .19s cubic-bezier(.4, 0, 1, 1) both;
}
#ctrm_.ctrm-close.ctrm-popin .ctrm-title {
    animation: cxOrbPop .32s cubic-bezier(.34, 1.5, .64, 1) both, var(--cx-orb-main-hue);
}
@keyframes cxFoldOut { 0% { transform: scale(1); opacity: 1 } 100% { transform: scale(.32); opacity: 0 } }
@keyframes cxOrbPop { 0% { transform: scale(.35); opacity: 0 } 55% { transform: scale(1.1); opacity: 1 } 100% { transform: scale(1); opacity: 1 } }
@media (prefers-reduced-motion: reduce) {
    #ctrm_.ctrm-folding .ctrm-container,
    #ctrm_.ctrm-close.ctrm-popin .ctrm-title { animation: none; }
}
#ctrm_ .ctrm-dialog { scrollbar-width: thin; scrollbar-color: var(--cx-line) transparent; }
#ctrm_ .ctrm-dialog::-webkit-scrollbar { width: 6px; }
#ctrm_ .ctrm-dialog::-webkit-scrollbar-track { background: transparent; }
#ctrm_ .ctrm-dialog::-webkit-scrollbar-thumb { background: var(--cx-line); border-radius: var(--cx-pill); }
#ctrm_ .ctrm-dialog-item .ctrm-dialog-sender { color: var(--cx-ink-2); }
#ctrm_ .ctrm-dialog-item .ctrm-dialog-time { color: var(--cx-ink-3); }
#ctrm_ .ctrm-dialog-item.ctrm-pending, #ctrm_ .ctrm-dialog-item.ctrm-unconfirmed { opacity: .55; }
#ctrm_ .ctrm-dialog-item.ctrm-pending .ctrm-dialog-time::after { content: " · 发送中"; }
#ctrm_ .ctrm-dialog-item.ctrm-unconfirmed .ctrm-dialog-time::after { content: " · 未确认"; color: #b8362b; }
#ctrm_ .ctrm-dialog-item .ctrm-dialog-bubble { border-radius: 14px 14px 14px 4px; }
#ctrm_ .ctrm-dialog-item.ctrm-me .ctrm-dialog-bubble { border-radius: 14px 14px 4px 14px; }
#ctrm_.ctrm-mobile .ctrm-dialog-item .ctrm-dialog-bubble { border-radius: 10px 10px 10px 3px; }
#ctrm_.ctrm-mobile .ctrm-dialog-item.ctrm-me .ctrm-dialog-bubble { border-radius: 10px 10px 3px 10px; }
#ctrm_ .ctrm-dialog-item .ctrm-b {
    background: var(--cx-brand-ink);
    color: #fff;
    font-weight: 500;
    border-radius: var(--cx-pill);
    padding: .08em .5em;
    white-space: nowrap;
}
#ctrm_ .ctrm-dialog-item a[data-fancybox] img { border-radius: 10px; }
#ctrm_ .ctrm-dialog-item iframe { border-radius: 10px; }
#ctrm_ .ctrm-bottom {
    width: 2.2vw;
    height: 2.2vw;
    line-height: 2.2vw;
    font-size: 1.3vw;
    background: var(--cx-brand);
    color: #fff;
    border-radius: 50%;
    transition: background .18s;
    bottom: calc(25% + 35px);
}
#ctrm_ .ctrm-bottom:hover { background: var(--cx-brand-deep); }
#ctrm_.ctrm-mobile .ctrm-bottom {
    width: 6vw;
    height: 6vw;
    line-height: 6vw;
    font-size: 3.5vw;
    transform: none;
}
#ctrm_ .sb {
    border-radius: var(--cx-pill);
    background: #fff;
    border-color: var(--cx-line);
    color: var(--cx-ink-2);
    transition: background .18s, border-color .18s, color .18s;
}
#ctrm_ .sb:hover { background: var(--cx-tint); border-color: var(--cx-brand); color: var(--cx-brand-ink); }
#ctrm_ .OwO.OwO-open .OwO-logo { background: var(--cx-tint); border-color: var(--cx-brand); color: var(--cx-brand-ink); }
#ctrm_ #file svg { color: var(--cx-brand-ink); }
#ctrm_ .ThirdPartyImageHost svg { color: var(--cx-brand); }
#ctrm_ #cfbed svg { color: var(--cx-warm); }
@media (max-width: 1439px) {
    #ctrm_ .ctrm-panel .sb { font-size: 0; gap: 0; }
}
#ctrm_.ctrm-mobile .ctrm-panel .sb { font-size: 0; gap: 0; }
#ctrm_ .ctrm-dialog { height: calc(75% - 27px); }
#ctrm_ .OwO .OwO-body {
    border-color: var(--cx-hairline);
    border-radius: 10px;
    box-shadow: var(--cx-shadow-pop);
    box-sizing: border-box;
}
#ctrm_ .OwO.OwO-up .OwO-body { border-radius: 10px 10px 10px 2px; }
#ctrm_ .OwO .OwO-body .OwO-items.OwO-items-show {
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    gap: 4px;
    padding: 8px;
    overflow-x: hidden;
    overflow-y: auto;
    scrollbar-width: none;
    -ms-overflow-style: none;
}
#ctrm_ .OwO .OwO-body .OwO-items::-webkit-scrollbar { width: 0; height: 0; }
#ctrm_ .OwO .OwO-body .OwO-items .OwO-item {
    margin: 0;
    padding: 3px;
    background: transparent;
    border-radius: 6px;
}
#ctrm_ .OwO .OwO-body .OwO-items .OwO-item:hover { background: var(--cx-tint); box-shadow: none; -webkit-animation: none; animation: none; }
#ctrm_ .OwO .OwO-body .OwO-items { max-height: 168px !important; }
#ctrm_ .OwO .OwO-body .OwO-items.OwO-items-big { max-height: 254px !important; }
#ctrm_ { --ct-smoji-big-preview: 5rem; }
#ctrm_.ctrm-mobile { --ct-smoji-big-preview: 4rem; }
#ctrm_.ctrm-mobile .OwO .OwO-body .OwO-items.OwO-items-big { max-height: 168px !important; }
#ctrm_ .OwO .OwO-body .OwO-bar {
    background: #fff;
    border-top-color: var(--cx-hairline);
    border-radius: 0 0 10px 10px;
    color: var(--cx-ink-2);
}
#ctrm_ .OwO .OwO-body .OwO-bar .OwO-packages { padding: 0 4px; scrollbar-width: none; -ms-overflow-style: none; }
#ctrm_ .OwO .OwO-body .OwO-bar .OwO-packages::-webkit-scrollbar { width: 0; height: 0; }
#ctrm_ .OwO .OwO-body .OwO-bar .OwO-packages li { border-radius: 6px; }
#ctrm_ .OwO .OwO-body .OwO-bar .OwO-packages li:hover { background: var(--cx-tint); }
#ctrm_ .OwO .OwO-body .OwO-bar .OwO-packages .OwO-package-active { background: var(--cx-tint-2); color: var(--cx-brand-ink); }
#ctrm_ .ctrm-textarea textarea {
    border: 2px dashed rgba(242, 118, 155, .45);
    color: var(--cx-ink);
}
#ctrm_ .ctrm-textarea textarea:hover { border-color: rgba(242, 118, 155, .7); }
#ctrm_ .ctrm-textarea textarea:focus { border-color: var(--cx-brand); }
#ctrm_ .ctrm-textarea textarea::placeholder { color: var(--cx-ink-3); }
#ctrm_ .ctrm-textarea textarea::-webkit-input-placeholder { color: var(--cx-ink-3); }
#ctrm_ .ctrm-emit {
    background: var(--cx-brand);
    color: #fff;
    border-radius: var(--cx-pill);
    transition: background .18s;
}
#ctrm_ .ctrm-emit:hover { background: var(--cx-brand-deep); }
#ctrm_.ctrm-mobile .ctrm-emit { border-radius: var(--cx-pill); }
#ctrm_ .ctrm-online-item {
    border-radius: var(--cx-pill);
    color: var(--cx-ink);
}
#ctrm_ .ctrm-online-wrap { box-sizing: border-box; }
#ctrm_.ctrm-mobile .ctrm-online-item { border-radius: var(--cx-pill); }
#ctrm_ .ctrm-domain-title { color: var(--cx-ink-2); }
#ctrm_ .ctrm-domain-item {
    color: var(--cx-brand-ink);
    border-radius: var(--cx-pill);
    transition: background .16s;
}
#ctrm_ .ctrm-domain-item:hover { background: var(--cx-tint); }
.tag-Link { transition: border-color .18s, box-shadow .18s; }
.tag-Link:hover { border-color: var(--cx-brand) !important; }
.ctrm-tts-pill:hover { background-color: var(--cx-tint) !important; border-color: var(--cx-brand) !important; }
.ctrm-163-btn:hover { background: var(--cx-brand-deep) !important; }
.img-host-dropdown [data-img-host] { color: var(--cx-ink); border-radius: 8px; transition: background .16s, color .16s; }
.img-host-dropdown [data-img-host]:hover { background: var(--cx-tint); color: var(--cx-brand-ink); }
</style>
<div id="ctrm_" style="z-index:10002!important;display:none;" class=" " >
    <div class="ctrm-container">
        <div class="ctrm-title">
            <span class="ctrm-title-span">
                <span>茉灵智库 の</span>
                <strong style="color:var(--cx-brand-ink);">匿名</strong>聊天室
                <img width="19px" src="https://img.z-l.top/file/dh/heart.gif" alt="">
                <span class="ctrm-title-countwrap" style="display: none;">(在线<span class="ctrm-title-count">0</span>人)</span>
            </span>
            <div class="ctrm-title-close" title="下拉">▼</div>
            <div class="ctrm-title-reconn" title="点我刷新">😜</div>
        </div>
        <div class="ctrm-panel">
            <div class="ctrm-bottom" style="display: none;">⇩</div>
            <div class="ctrm-dialog"></div>
            <button class="sb" id="file" title="选择文件"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M9.035 15.956a1.29 1.29 0 0 0 1.821-.004l6.911-6.911a3.15 3.15 0 0 0 0-4.457l-.034-.034a3.15 3.15 0 0 0-4.456 0l-7.235 7.234a5.031 5.031 0 0 0 7.115 7.115l6.577-6.577a1.035 1.035 0 0 1 1.463 1.464l-6.576 6.577A7.1 7.1 0 0 1 4.579 10.32l7.235-7.234a5.22 5.22 0 0 1 7.382 0l.034.034a5.22 5.22 0 0 1 0 7.383l-6.91 6.91a3.36 3.36 0 0 1-4.741.012l-.006-.005-.012-.011a3.346 3.346 0 0 1 0-4.732L12.76 7.48a1.035 1.035 0 0 1 1.464 1.463l-5.198 5.198a1.277 1.277 0 0 0 0 1.805z" clip-rule="evenodd"/></svg></button>
             <button data-chevereto-pup-trigger data-target="#editor" class="sb ThirdPartyImageHost" title="选择第三方图床上传"><svg class="flex-shrink-0 size-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0z"/></svg>图床上传</button>
              <div class="img-host-dropdown" style="display:none;position:fixed;background:#fff;border:1px solid var(--cx-hairline);border-radius:12px;padding:4px;box-shadow:var(--cx-shadow-pop);z-index:9999;text-align:center;box-sizing:border-box;">
                 <div data-img-host="tutu" style="padding:6px 8px;cursor:pointer;font-size:13px;white-space:nowrap;">tutu.to</div>
                 <div data-img-host="imgdd" style="padding:6px 8px;cursor:pointer;font-size:13px;white-space:nowrap;">imgdd</div>
                 <div data-img-host="tucdn" style="padding:6px 8px;cursor:pointer;font-size:13px;white-space:nowrap;">tucdn</div>
                 <div data-img-host="share-text" style="padding:6px 8px;cursor:pointer;font-size:13px;white-space:nowrap;">share</div>
             </div>
            <button  class="sb" id="cfbed" title="上传图片"><svg fill="none" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M19.11 9.827c.26 0 .451-.192.488-.445.23-1.406.43-2.127.865-2.575.433-.447 1.131-.654 2.49-.89a.503.503 0 0 0 .446-.502.5.5 0 0 0-.447-.503c-1.358-.237-2.056-.445-2.49-.892-.433-.447-.634-1.168-.864-2.571-.037-.256-.227-.449-.488-.449-.257 0-.45.193-.49.447-.23 1.405-.432 2.126-.865 2.573s-1.13.655-2.486.892a.5.5 0 0 0-.451.503c0 .273.203.47.447.503 1.36.235 2.057.438 2.49.882.433.445.635 1.167.864 2.583.04.252.235.444.491.444M3.853 3.207h9.058v1.961H3.853v9.867l1.488-1.327a2.8 2.8 0 0 1 3.704-.037l1.011.867 3.428-2.886a2.8 2.8 0 0 1 3.621-.001l2.957 2.483v-2.346h1.907v7.601c0 1.084-.854 1.962-1.907 1.962H3.852c-1.052 0-1.906-.878-1.906-1.962V5.17c0-1.084.854-1.962 1.907-1.962m16.209 13.46l-4.163-3.497a.93.93 0 0 0-1.207 0l-4.038 3.399a.93.93 0 0 1-1.214-.006l-1.615-1.385a.933.933 0 0 0-1.235.012l-2.737 2.44v1.76h16.209zm-9.535-7.625c0 1.084-.854 1.962-1.907 1.962s-1.907-.878-1.907-1.962c0-1.083.854-1.961 1.907-1.961s1.907.878 1.907 1.961" clip-rule="evenodd"/></svg>上传图片</button>
            <div class="OwO"></div>
<div class="ctrm-voice-container">
    <button class="sb ctrm-voice-btn" id="ctrm-voice-btn" title="点击录音">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
            <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
            <line x1="12" y1="19" x2="12" y2="23"></line>
            <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
        <div class="recommend-tag">新</div>
    </button>
    <div class="ctrm-voice-recording-indicator" style="display: none;">
        <div class="ctrm-voice-wave"></div>
        <span>正在录音</span>
        <span class="ctrm-voice-timer">00:00</span>
    </div>
</div>
            <div class="ctrm-textarea">
                <textarea id="editor" placeholder="拖拽或Ctrl+V至此可发图片..." maxlength="700" class="OwO-textarea" contenteditable></textarea>
                <div id="sendMessageButton" class="ctrm-emit">发送</div>
                <div class="image-preview-overlay" style="display: none;"><img src="" alt="preview"></div>
            </div>
        </div>
        <div class="ctrm-online">
            <div class="ctrm-online-wrap"></div>
            <div class="ctrm-domain">
                <div class="ctrm-domain-title">本周尬聊网站排行</div>
                <div class="ctrm-domain-wrap"></div>
                <div class="ctrm-domain-filter">
                    ~<br>
                    <span class="ctrm-domain-show">_</span>
                </div>
            </div>
        </div>
    </div>
</div>    
`;
        e.exports = r;
    }, {}]
}, {}, [2]);
(function () {
    if (window.imageUploaderInitialized) return;
    window.imageUploaderInitialized = true;
    function GM_xmlhttpRequest(details) {
        const xhr = new XMLHttpRequest();
        xhr.open(details.method, details.url, true);
        xhr.onload = () => details.onload?.(xhr);
        xhr.onerror = () => details.onerror?.(xhr);
        xhr.send(details.data);
    }
    function GM_addStyle(css) {
        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);
    }
    const CONFIG = {
        AUTH_CODE: "z-l.top",
        SERVER_URL: "https://img.z-l.top",
        UPLOAD_PARAMS: {
            serverCompress: true,
            uploadChannel: "telegram",
            autoRetry: true,
            uploadNameType: "short",
            returnFormat: "full",
            uploadFolder: "dh",
        },
        NOTIFICATION_DURATION: 3000,
        ENABLE_MANUAL_UPLOAD: true,
        UPLOAD_TRIGGER_SELECTOR: "#cfbed",
        MARKDOWN_TEMPLATE: "{url}", 
        AUTO_COPY_URL: true,
        ALLOWED_HOSTS: ['http://localhost:3000', 'bilibili.com', '88lin.github.io', '*.88lin.eu.org', 'jasnode.github.io'],
        MAX_FILE_SIZE: 5 * 1024 * 1024,
    };
    const currentHost = location.hostname;
    const isAllowed = CONFIG.ALLOWED_HOSTS.some(host => {
        if (host === "*") return true;
        if (host.startsWith("*.")) return currentHost.endsWith(host.slice(1));
        return currentHost === host;
    });
    GM_addStyle(`
        .ctrm-textarea {
            position: relative;
            box-sizing: border-box;
        }
        .ctrm-textarea::after {
            content: '释放上传图片';
            position: absolute;
            top: 0px;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(242,118,155,0);
            color: #fff;
            font-size: 16px;
            display: flex;
            align-items: center;
            justify-content: center;
            pointer-events: none;
            z-index: 9;
            border: 2px dashed rgba(242,118,155,0);
            border-radius: 0.5rem;
            opacity: 0;
            transition: opacity 0.3s ease, background 0.3s ease, border-color 0.3s ease;
            box-sizing: border-box;
        }
        .ctrm-textarea.dragover::after {
            background: rgba(194,59,110,0.55);
            border-color: rgba(255,255,255,0.85);
            opacity: 1;
            backdrop-filter: blur(1px);
        }
        .upload-warning {
            position: fixed;
            top: 10px;
            right: 10px;
            padding: 16px;
            background-color: #b8362b;
            color: white;
            border-radius: 14px;
            box-shadow: 0 4px 18px rgba(47,36,41,.16);
            z-index: 10000;
            font-size: 14px;
            display: none;
        }
        .upload-warning a {
            color: #fff;
            text-decoration: underline;
        }
        .image-preview-overlay {
          z-index: 10;
          position: absolute;
          top: -92px;
          left: 6px;
          border-radius: 10px;
          box-shadow: 0 4px 18px rgba(47,36,41,.10);
          pointer-events: none;
          transition: opacity 0.3s ease;
        }
        .image-preview-overlay img {
          height: 60px;
          width: auto;
          border-radius: 10px;
          border: 1px solid rgba(242,118,155,.5);
        }
    `);
    const preview = document.querySelector(".image-preview-overlay img");
    function showNotification(msg, type = "info") {
        const el = document.createElement("div");
        el.textContent = msg;
        el.style = `position:fixed;top:10px;right:10px;padding:8px 16px;
        background:${type === "error" ? "#b8362b" : type === "success" ? "#2f7a4f" : "var(--cx-brand-ink)"};
        color:white;border-radius:16px;box-shadow:0 4px 18px rgba(47,36,41,.16);z-index:10000;font-size:14px`;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), CONFIG.NOTIFICATION_DURATION);
    }
    function checkFileSize(file) {
        if (file.size > CONFIG.MAX_FILE_SIZE) {
            showNotification(`文件过大，最大 ${Math.round(CONFIG.MAX_FILE_SIZE / 1024 / 1024)}MB`, "error");
            return false;
        }
        return true;
    }
    function insertRawUrl(url, element, filename = "") {
        if (!element || typeof element.value !== "string") {
            showNotification("插入失败，未找到输入框", "error");
            return;
        }
        const tpl = CONFIG.MARKDOWN_TEMPLATE
            .replace("{url}", url)
            .replace("{filename}", filename.replace(/\.[^/.]+$/, ""));
        const start = typeof element.selectionStart === "number" ? element.selectionStart : element.value.length;
        const end = typeof element.selectionEnd === "number" ? element.selectionEnd : element.value.length;
        const text = element.value;
        element.value = text.substring(0, start) + tpl + text.substring(end);
        element.selectionStart = element.selectionEnd = start + tpl.length;
        element.focus();
        if (CONFIG.AUTO_COPY_URL && navigator.clipboard) {
            navigator.clipboard.writeText(url).then(() => {
                showNotification("链接已复制到剪贴板", "success");
            }).catch(() => {
                showNotification("复制失败", "error");
            });
        }
    }
    function showImagePreview(file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            preview.src = e.target.result;
            const overlay = document.querySelector(".image-preview-overlay");
            overlay.style.display = "block";
        };
        reader.readAsDataURL(file);
    }
    function hideImagePreview() {
        const overlay = document.querySelector(".image-preview-overlay");
        overlay.style.display = "none";
    }
    async function uploadImage(blob, targetElement) {
        if (!isAllowed) {
            showNotification(`当前域名 ${currentHost} 不在白名单`, "error");
            return;
        }
        showImagePreview(blob);
        const filename = `image-${Date.now()}`;
        const formData = new FormData();
        formData.append("file", blob, filename);
        const query = new URLSearchParams({
            authCode: CONFIG.AUTH_CODE,
            ...CONFIG.UPLOAD_PARAMS,
        }).toString();
        GM_xmlhttpRequest({
            method: "POST",
            url: `${CONFIG.SERVER_URL}/upload?${query}`,
            data: formData,
            onload: (res) => {
                hideImagePreview();
                try {
                    const json = JSON.parse(res.responseText);
                    const imageUrl = json?.[0]?.src;
                    if (imageUrl) {
                        showNotification("上传成功", "success");
                        insertRawUrl(imageUrl, targetElement, filename);
                    } else {
                        showNotification("上传成功但未返回链接", "error");
                    }
                } catch (e) {
                    showNotification("解析响应失败：" + e.message, "error");
                }
            },
            onerror: () => {
                hideImagePreview();
                showNotification("上传失败（网络错误）", "error");
            },
        });
    }
    const dropContainer = document.querySelector(".ctrm-textarea");
    const dropTarget = dropContainer?.querySelector("textarea");
    if (dropContainer && dropTarget) {
        ["dragenter", "dragover"].forEach(evt =>
            dropContainer.addEventListener(evt, (e) => {
                e.preventDefault();
                dropContainer.classList.add("dragover");
            })
        );
        ["dragleave", "drop"].forEach(evt =>
            dropContainer.addEventListener(evt, (e) => {
                e.preventDefault();
                dropContainer.classList.remove("dragover");
            })
        );
        dropContainer.addEventListener("drop", async (event) => {
            const file = event.dataTransfer.files?.[0];
            if (!file || !file.type.startsWith("image/")) return;
            if (!checkFileSize(file)) return;
            showNotification("正在上传...", "info");
            await uploadImage(file, dropTarget);
        });
        dropContainer.addEventListener("paste", async (event) => {
            const items = event.clipboardData.items;
            for (let item of items) {
                if (item.type.startsWith("image/")) {
                    event.preventDefault();
                    const blob = item.getAsFile();
                    if (!checkFileSize(blob)) return;
                    showNotification("正在上传...", "info");
                    await uploadImage(blob, dropTarget);
                    break;
                }
            }
        });
    }
    const uploadBtn = CONFIG.ENABLE_MANUAL_UPLOAD ? document.querySelector(CONFIG.UPLOAD_TRIGGER_SELECTOR) : null;
    if (uploadBtn) {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.style.display = "none";
        document.body.appendChild(input);
        input.addEventListener("change", async () => {
            const file = input.files?.[0];
            if (!file) return;
            const textTarget = document.querySelector(".ctrm-textarea textarea");
            if (!textTarget || !checkFileSize(file)) return;
            showNotification("正在上传...", "info");
            await uploadImage(file, textTarget);
            input.value = "";
        });
        uploadBtn.addEventListener("click", () => {
            const chatBox = document.getElementById("ctrm_");
            if (chatBox) {
                chatBox.dispatchEvent(new MouseEvent("click", { bubbles: true }));
            }
            input.click();
        });
    }
})();
window.uploadToTelegram = function (file) {
    return new Promise((resolve, reject) => {
        const CONFIG = {
            AUTH_CODE: "z-l.top",
            SERVER_URL: "https://img.z-l.top",
            UPLOAD_PARAMS: {
                serverCompress: true,
                uploadChannel: "telegram",
                autoRetry: true,
                uploadNameType: "short",
                returnFormat: "full",
                uploadFolder: "dh",
            },
            ALLOWED_HOSTS: ['http://localhost:3000', 'bilibili.com', '88lin.github.io', '*.88lin.eu.org', 'jasnode.github.io'],
            MAX_FILE_SIZE: 5 * 1024 * 1024,
        };
        const currentHost = location.hostname;
        const isAllowed = CONFIG.ALLOWED_HOSTS.some(host => {
            if (host === "*") return true;
            if (host.startsWith("*.")) return currentHost.endsWith(host.slice(1));
            return currentHost === host;
        });
        if (!isAllowed) {
            reject(new Error("当前域名不在白名单"));
            return;
        }
        if (file.size > CONFIG.MAX_FILE_SIZE) {
            reject(new Error("文件过大"));
            return;
        }
        const filename = `image-${Date.now()}`;
        const formData = new FormData();
        formData.append("file", file, filename);
        const query = new URLSearchParams({
            authCode: CONFIG.AUTH_CODE,
            ...CONFIG.UPLOAD_PARAMS,
        }).toString();
        const xhr = new XMLHttpRequest();
        xhr.open("POST", `${CONFIG.SERVER_URL}/upload?${query}`, true);
        xhr.onload = function () {
            try {
                const json = JSON.parse(xhr.responseText);
                const imageUrl = json?.[0]?.src;
                if (imageUrl) {
                    resolve(imageUrl);
                } else {
                    reject(new Error("上传成功但未返回链接"));
                }
            } catch (e) {
                reject(new Error("解析响应失败：" + e.message));
            }
        };
        xhr.onerror = function () {
            reject(new Error("上传失败（网络错误）"));
        };
        xhr.send(formData);
    });
};
(function () {
    const HOSTS = {
        "tutu":       "https://tutu.to/upload",
        "imgdd":      "https://imgdd.com",
        "tucdn":      "https://tucdn.wpon.cn",
        "share-text": "https://share-text.org/zh/image-to-url",
    };
    const pupBtn = document.querySelector("[data-chevereto-pup-trigger]");
    const dropdown = document.querySelector(".img-host-dropdown");
    if (!pupBtn || !dropdown) return;
    let hoverTimer = null;
    let openedAt = 0;
    let allowPup = false;
    function show() {
        const rect = pupBtn.getBoundingClientRect();
        dropdown.style.display = "block";
        dropdown.style.minWidth = rect.width + "px";
        const w = dropdown.offsetWidth;
        dropdown.style.left = Math.min(Math.max(4, rect.left + rect.width / 2 - w / 2), window.innerWidth - w - 4) + "px";
        dropdown.style.bottom = (window.innerHeight - rect.top + 4) + "px";
        openedAt = Date.now();
    }
    function hide() { dropdown.style.display = "none"; }
    window.addEventListener("click", function (e) {
        if (!e.target || !e.target.closest) return;
        if (e.target.closest("[data-chevereto-pup-trigger]")) {
            if (allowPup) return;
            e.preventDefault();
            e.stopPropagation();
            if (dropdown.style.display === "block" && Date.now() - openedAt > 400) hide();
            else show();
        } else if (!e.target.closest(".img-host-dropdown")) {
            hide();
        }
    }, true);
    pupBtn.addEventListener("mouseenter", () => { clearTimeout(hoverTimer); show(); });
    pupBtn.addEventListener("mouseleave", () => { hoverTimer = setTimeout(hide, 200); });
    dropdown.addEventListener("mouseenter", () => clearTimeout(hoverTimer));
    dropdown.addEventListener("mouseleave", () => { hoverTimer = setTimeout(hide, 200); });
    dropdown.querySelectorAll("[data-img-host]").forEach(item => {
        item.addEventListener("click", () => {
            hide();
            const hostKey = item.getAttribute("data-img-host");
            const url = HOSTS[hostKey];
            if (!url) return;
            if (hostKey === "tutu") {
                allowPup = true;
                pupBtn.click();
                allowPup = false;
            } else {
                window.open(url, "_blank", "width=720,height=690");
            }
        });
    });
})();
(function () {
    if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
        console.warn('浏览器不支持语音功能');
        return;
    }
    const VOICE_CONFIG = {
        MAX_RECORD_TIME: 30000,
        MIN_RECORD_TIME: 1000,
        UPLOAD_FOLDER: "v"
    };
    let mediaRecorder = null;
    let audioChunks = [];
    let startTime = null;
    let timerInterval = null;
    let voiceAutoSendLock = false;
    let recordedMime = 'audio/webm';
    let recordedExt = 'webm';
    const VOICE_MIME_CANDIDATES = [
        ['audio/webm;codecs=opus', 'webm'],
        ['audio/webm', 'webm'],
        ['audio/mp4;codecs=mp4a.40.2', 'mp4'],
        ['audio/mp4', 'mp4'],
        ['audio/ogg;codecs=opus', 'ogg'],
        ['audio/ogg', 'ogg']
    ];
    function pickVoiceMime() {
        if (typeof MediaRecorder === 'undefined' || !MediaRecorder.isTypeSupported) return null;
        for (const [mime, ext] of VOICE_MIME_CANDIDATES) {
            if (MediaRecorder.isTypeSupported(mime)) return { mime, ext };
        }
        return null;
    }
    function extFromMime(mime) {
        if (!mime) return 'webm';
        if (mime.indexOf('mp4') !== -1 || mime.indexOf('aac') !== -1 || mime.indexOf('m4a') !== -1) return 'mp4';
        if (mime.indexOf('ogg') !== -1) return 'ogg';
        if (mime.indexOf('wav') !== -1) return 'wav';
        if (mime.indexOf('mpeg') !== -1) return 'mp3';
        return 'webm';
    }
    function revokeVoiceUrl(url) {
        if (!url) return;
        try { URL.revokeObjectURL(url) } catch (err) { }
    }
    function dropPendingVoiceBlob() {
        if (window._lastVoiceBlobUrl) {
            const inUse = window._myVoiceBlobs && Object.keys(window._myVoiceBlobs)
                .some(function (k) { return window._myVoiceBlobs[k] === window._lastVoiceBlobUrl });
            if (!inUse) revokeVoiceUrl(window._lastVoiceBlobUrl);
        }
        window._lastVoiceBlob = null;
        window._lastVoiceBlobUrl = null;
    }
    function voiceToast(msg, type) {
        window.__ctrmToast ? window.__ctrmToast(msg, type) : alert(msg);
    }
    let audioBlob = null;
    let state = 'idle'; 
    let reviewPanel = null;
    const voiceBtn = document.getElementById('ctrm-voice-btn');
    const timerDisplay = document.querySelector('.ctrm-voice-recording-indicator .ctrm-voice-timer');
    const recordingIndicator = document.querySelector('.ctrm-voice-recording-indicator');
    if (!voiceBtn || !recordingIndicator) {
        console.warn('[ctrm] 未找到录音按钮，语音功能未启用');
        return;
    }
    function alignRecordingIndicator() {
        if (recordingIndicator.style.display === 'none') return;
        const rect = voiceBtn.getBoundingClientRect();
        recordingIndicator.style.position = 'fixed';
        recordingIndicator.style.left = (rect.left + rect.width / 2) + 'px';
        recordingIndicator.style.top = (rect.top - recordingIndicator.offsetHeight - 12) + 'px';
        recordingIndicator.style.transform = 'translateX(-50%)';
        recordingIndicator.style.zIndex = '9999';
    }
    window.addEventListener('resize', alignRecordingIndicator);
    window.addEventListener('scroll', alignRecordingIndicator);
    voiceBtn.addEventListener('click', async function () {
        if (state === 'idle') {
            await startRecording();
        } else if (state === 'recording') {
            await stopRecording();
        }
    });
    async function startRecording() {
        if (state !== 'idle') return;
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            const picked = pickVoiceMime();
            mediaRecorder = picked ? new MediaRecorder(stream, { mimeType: picked.mime }) : new MediaRecorder(stream);
            recordedMime = mediaRecorder.mimeType || (picked && picked.mime) || 'audio/webm';
            recordedExt = extFromMime(recordedMime);
            audioChunks = [];
            mediaRecorder.ondataavailable = (event) => {
                if (event.data.size > 0) {
                    audioChunks.push(event.data);
                }
            };
            mediaRecorder.onstop = onRecordingStop;
            mediaRecorder.start();
            voiceBtn.classList.add('recording');
            recordingIndicator.style.display = 'flex';
            alignRecordingIndicator();
            if (timerDisplay) timerDisplay.textContent = '00:00';
            startTime = Date.now();
            timerInterval = setInterval(() => {
                const elapsed = Date.now() - startTime;
                if (timerDisplay) timerDisplay.textContent = formatTime(elapsed);
                if (elapsed >= VOICE_CONFIG.MAX_RECORD_TIME) {
                    stopRecording();
                }
            }, 100);
            state = 'recording';
        } catch (err) {
            console.error('录音错误:', err);
            if (err.name === 'NotAllowedError') {
                voiceToast('请允许麦克风权限', 'error');
            } else if (err.name === 'NotFoundError') {
                voiceToast('未找到麦克风设备', 'error');
            } else {
                voiceToast('无法开始录音：' + (err && (err.message || err.name) || err), 'error');
            }
        }
    }
    async function stopRecording() {
        if (state !== 'recording') return;
        if (mediaRecorder && mediaRecorder.state === 'recording') {
            mediaRecorder.stop();
            mediaRecorder.stream.getTracks().forEach(track => track.stop());
        }
        if (timerInterval) {
            clearInterval(timerInterval);
            timerInterval = null;
        }
        voiceBtn.classList.remove('recording');
        recordingIndicator.style.display = 'none';
        if (timerDisplay) timerDisplay.textContent = '00:00';
        state = 'review';
    }
    function onRecordingStop() {
        const durationMs = Date.now() - startTime;
        audioBlob = new Blob(audioChunks, { type: recordedMime });
        if (durationMs < VOICE_CONFIG.MIN_RECORD_TIME || audioBlob.size === 0) {
            voiceToast('录音内容过短或失败，请重试', 'error');
            state = 'idle';
            return;
        }
        dropPendingVoiceBlob();
        window._lastVoiceBlob = audioBlob;
        window._lastVoiceBlobUrl = URL.createObjectURL(audioBlob);
        showReviewPanel(durationMs);
    }
    function showReviewPanel(durationMs) {
        if (reviewPanel) reviewPanel.remove();
        reviewPanel = document.createElement('div');
        reviewPanel.className = 'ctrm-voice-review-panel';
        reviewPanel.innerHTML = `
            <audio class="ctrm-voice-review-audio" src="${window._lastVoiceBlobUrl}" controls style="vertical-align:middle;width:180px;display:none;"></audio>
            <button class="ctrm-voice-review-btn play">试听</button>
            <button class="ctrm-voice-review-btn delete">删除</button>
            <button class="ctrm-voice-review-btn send">发送</button>
        `;
        voiceBtn.parentNode.insertBefore(reviewPanel, voiceBtn.nextSibling);
        const audio = reviewPanel.querySelector('.ctrm-voice-review-audio');
        const playBtn = reviewPanel.querySelector('.ctrm-voice-review-btn.play');
        playBtn.onclick = function () {
            if (audio.paused) {
                audio.play();
                playBtn.textContent = '暂停';
            } else {
                audio.pause();
                playBtn.textContent = '试听';
            }
        };
        audio.onended = () => { playBtn.textContent = '试听'; };
        reviewPanel.querySelector('.ctrm-voice-review-btn.delete').onclick = function () {
            audio.pause();
            audio.removeAttribute('src');
            dropPendingVoiceBlob();
            reviewPanel.remove();
            reviewPanel = null;
            state = 'idle';
        };
        const sendBtn = reviewPanel.querySelector('.ctrm-voice-review-btn.send');
        sendBtn.onclick = async function () {
            sendBtn.disabled = true;
            sendBtn.innerHTML = '发送中...<span class="ctrm-send-loading"></span>';
            sendBtn.classList.add('sending');
            if (!document.getElementById('ctrm-voice-send-style')) {
                const style = document.createElement('style');
                style.id = 'ctrm-voice-send-style';
                style.innerHTML = `
                .ctrm-voice-review-btn.sending {
                    position: relative;
                    color: #fff;
                    background: #2f7a4f;
                    border-color: #2f7a4f;
                    padding-right: 8px !important;
                }
                .ctrm-send-loading {
                    display: inline-block;
                    width: 16px;
                    height: 16px;
                    vertical-align: middle;
                    margin-left: 6px;
                    border: 2px solid rgba(255,255,255,.45);
                    border-radius: 50%;
                    border-top: 2px solid #fff;
                    animation: ctrm-spin 0.7s linear infinite;
                    box-sizing: border-box;
                }
                @keyframes ctrm-spin {
                    0% { transform: rotate(0deg);}
                    100% { transform: rotate(360deg);}
                }
                `;
                document.head.appendChild(style);
            }
            await uploadAndSendVoice(window._lastVoiceBlob, durationMs);
            sendBtn.disabled = false;
            sendBtn.innerHTML = '发送';
            sendBtn.classList.remove('sending');
            reviewPanel.remove();
            reviewPanel = null;
            state = 'idle';
        };
    }
    (function () {
        if (document.getElementById('ctrm-voice-review-style')) return;
        var style = document.createElement('style');
        style.id = 'ctrm-voice-review-style';
        style.innerHTML = `
        .ctrm-voice-review-panel {
            position: absolute;
            top: -40px;
            left: 50%;
            transform: translateX(-50%);
            background: rgba(47, 36, 41, 0.92);
            color: white;
            padding: 5px 10px;
            border-radius: 999px;
            font-size: 12px;
            white-space: nowrap;
            z-index: 1;
            flex-direction: row;
            flex-wrap: wrap;
        }
        .ctrm-voice-review-btn {
            color: var(--cx-ink-2);
            background: #fff; border: 1px solid rgba(47,36,41,.16); border-radius: 999px; padding: 3px 12px; cursor: pointer; font-size: 13px; transition: background 0.2s, border-color 0.2s, color 0.2s;
        }
        .ctrm-voice-review-btn:hover { background: rgba(242,118,155,.12); border-color: #f2769b; color: #c23b6e; }
        .ctrm-voice-review-btn.delete { color: #b8362b; border-color: rgba(184,54,43,.45); }
        .ctrm-voice-review-btn.delete:hover { background: rgba(184,54,43,.10); border-color: #b8362b; color: #b8362b; }
        .ctrm-voice-review-btn.send { color: #fff; background: #2f7a4f; border-color: #2f7a4f; }
        .ctrm-voice-review-btn.send:hover { color: #fff; background: #26643f; border-color: #26643f; }
        .ctrm-voice-review-btn:disabled { cursor: default; }
        .ctrm-voice-review-btn.send:disabled:hover { background: #2f7a4f; border-color: #2f7a4f; }
        `;
        document.head.appendChild(style);
    })();
    function formatTime(ms) {
        const seconds = Math.floor(ms / 1000);
        const minutes = Math.floor(seconds / 60);
        const displaySeconds = seconds % 60;
        return `${minutes.toString().padStart(2, '0')}:${displaySeconds.toString().padStart(2, '0')}`;
    }
    async function uploadAndSendVoice(blob, durationMs) {
        console.log('uploadAndSendVoice blob:', blob, typeof blob, blob && blob.size);
        if (voiceAutoSendLock) return void voiceToast('上一条语音还在发送中，请稍候再试', 'error');
        voiceAutoSendLock = true;
        const filename = `voice-${Date.now()}.${recordedExt}`;
        const formData = new FormData();
        formData.append('file', blob, filename);
        const query = new URLSearchParams({
            authCode: 'z-l.top',
            serverCompress: true,
            uploadChannel: 'telegram',
            autoRetry: true,
            uploadNameType: 'short',
            returnFormat: 'full',
            uploadFolder: VOICE_CONFIG.UPLOAD_FOLDER
        }).toString();
        try {
            const response = await fetch(`https://img.z-l.top/upload?${query}`, {
                method: 'POST',
                body: formData
            });
            const text = await response.text();
            console.log('upload response text:', text);
            let result;
            try {
                result = JSON.parse(text);
            } catch (e) {
                throw new Error('服务器返回内容不是合法JSON: ' + text);
            }
            if (result[0]?.src) {
                const voiceUrl = result[0].src;
                if (!window._myVoiceBlobs || typeof window._myVoiceBlobs !== 'object') window._myVoiceBlobs = {};
                if (window._lastVoiceBlobUrl) {
                    if (window._myVoiceBlobs[voiceUrl] && window._myVoiceBlobs[voiceUrl] !== window._lastVoiceBlobUrl) {
                        revokeVoiceUrl(window._myVoiceBlobs[voiceUrl]);
                    }
                    window._myVoiceBlobs[voiceUrl] = window._lastVoiceBlobUrl;
                    window._lastVoiceBlob = null;
                    window._lastVoiceBlobUrl = null;
                }
                const message = `[语音消息 ${formatTime(durationMs)}] ${voiceUrl}`;
                const chatInput = document.querySelector('.ctrm-textarea textarea');
                const emitBtn = document.querySelector('.ctrm-emit');
                if (chatInput && emitBtn) {
                    chatInput.value = message;
                    emitBtn.click();
                } else {
                    voiceToast('找不到聊天输入框，语音没能发出；链接已复制到控制台\n' + voiceUrl, 'error');
                    console.warn('[ctrm] 语音已上传但无法发送:', voiceUrl);
                }
            } else {
                voiceToast('语音上传失败', 'error');
                dropPendingVoiceBlob();
            }
        } catch (error) {
            console.error('上传错误:', error);
            voiceToast('语音上传失败，请检查网络\n' + (error && error.message ? error.message : ''), 'error');
            dropPendingVoiceBlob();
        } finally {
            setTimeout(() => voiceAutoSendLock = false, 1000);
        }
    }
})();
function preloadAllVoiceAudios() {
    document.querySelectorAll('.ctrm-voice-bubble audio').forEach(audio => {
        if (!audio._preloadTried) {
            audio._preloadTried = true;
            if (audio.src) {
                audio.load();
                audio.onerror = function () {
                    const bubble = audio.closest('.ctrm-voice-bubble');
                    if (bubble && !bubble.querySelector('.ctrm-voice-error')) {
                        const err = document.createElement('span');
                        err.className = 'ctrm-voice-error';
                        err.textContent = '语音加载失败';
                        err.style.color = '#b8362b';
                        err.style.marginLeft = '8px';
                        bubble.appendChild(err);
                    }
                };
            }
        }
    });
}
setTimeout(preloadAllVoiceAudios, 300);
