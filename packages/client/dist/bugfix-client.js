/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ho(e) {
  const A = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) A[t] = 1;
  return (t) => t in A;
}
const iA = {}, lt = [], de = () => {
}, Zl = () => !1, Tr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), kr = (e) => e.startsWith("onUpdate:"), CA = Object.assign, Io = (e, A) => {
  const t = e.indexOf(A);
  t > -1 && e.splice(t, 1);
}, pB = Object.prototype.hasOwnProperty, AA = (e, A) => pB.call(e, A), V = Array.isArray, Je = (e) => ys(e) === "[object Map]", St = (e) => ys(e) === "[object Set]", ii = (e) => ys(e) === "[object Date]", W = (e) => typeof e == "function", hA = (e) => typeof e == "string", we = (e) => typeof e == "symbol", rA = (e) => e !== null && typeof e == "object", zl = (e) => (rA(e) || W(e)) && W(e.then) && W(e.catch), ql = Object.prototype.toString, ys = (e) => ql.call(e), wB = (e) => ys(e).slice(8, -1), Dr = (e) => ys(e) === "[object Object]", _o = (e) => hA(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, os = /* @__PURE__ */ Ho(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Or = (e) => {
  const A = /* @__PURE__ */ Object.create(null);
  return (t) => A[t] || (A[t] = e(t));
}, QB = /-\w/g, mA = Or(
  (e) => e.replace(QB, (A) => A.slice(1).toUpperCase())
), CB = /\B([A-Z])/g, XA = Or(
  (e) => e.replace(CB, "-$1").toLowerCase()
), Mr = Or((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bn = Or(
  (e) => e ? `on${Mr(e)}` : ""
), He = (e, A) => !Object.is(e, A), ar = (e, ...A) => {
  for (let t = 0; t < e.length; t++)
    e[t](...A);
}, $l = (e, A, t, s = !1) => {
  Object.defineProperty(e, A, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: t
  });
}, Lo = (e) => {
  const A = parseFloat(e);
  return isNaN(A) ? e : A;
}, li = (e) => {
  const A = hA(e) ? Number(e) : NaN;
  return isNaN(A) ? e : A;
};
let ai;
const Rr = () => ai || (ai = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function vs(e) {
  if (V(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++) {
      const s = e[t], r = hA(s) ? mB(s) : vs(s);
      if (r)
        for (const n in r)
          A[n] = r[n];
    }
    return A;
  } else if (hA(e) || rA(e))
    return e;
}
const bB = /;(?![^(]*\))/g, UB = /:([^]+)/, FB = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function mB(e) {
  const A = {};
  return e.replace(FB, (t) => t.startsWith("/*") ? "" : t).split(bB).forEach((t) => {
    if (t) {
      const s = t.split(UB);
      s.length > 1 && (A[s[0].trim()] = s[1].trim());
    }
  }), A;
}
function Y(e) {
  let A = "";
  if (hA(e))
    A = e;
  else if (V(e))
    for (let t = 0; t < e.length; t++) {
      const s = Y(e[t]);
      s && (A += s + " ");
    }
  else if (rA(e))
    for (const t in e)
      e[t] && (A += t + " ");
  return A.trim();
}
const xB = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", EB = /* @__PURE__ */ Ho(xB);
function Aa(e) {
  return !!e || e === "";
}
function yB(e, A, t) {
  if (e.length !== A.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Tt(e[r], A[r], t);
  return s;
}
function ci(e, A, t) {
  if (e.size !== A.size) return !1;
  const s = Array.from(A), r = new Uint8Array(s.length);
  for (const n of e) {
    let o = -1;
    for (let i = 0; i < s.length; i++)
      if (!r[i] && Tt(n, s[i], t)) {
        o = i;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function vB(e, A, t) {
  let s = Je(e), r = Je(A);
  if (s || r || (s = St(e), r = St(A), s || r))
    return s && r ? ci(e, A, t) : !1;
  const n = Object.keys(e).length, o = Object.keys(A).length;
  if (n !== o)
    return !1;
  for (const i in e) {
    const a = e.hasOwnProperty(i), B = A.hasOwnProperty(i);
    if (a && !B || !a && B || !Tt(e[i], A[i], t))
      return !1;
  }
  return String(e) === String(A);
}
function Bi(e, A, t, s) {
  t || (t = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, n] = t;
  if (r.has(e) || n.has(A))
    return r.get(e) === A && n.get(A) === e;
  r.set(e, A), n.set(A, e);
  const o = s(e, A, t);
  return r.delete(e), n.delete(A), o;
}
function Tt(e, A, t) {
  if (e === A) return !0;
  let s = ii(e), r = ii(A);
  return s || r ? s && r ? e.getTime() === A.getTime() : !1 : (s = we(e), r = we(A), s || r ? e === A : (s = V(e), r = V(A), s || r ? s && r ? Bi(e, A, t, yB) : !1 : (s = rA(e), r = rA(A), s || r ? !s || !r ? !1 : Bi(e, A, t, vB) : String(e) === String(A))));
}
function ea(e, A) {
  return e.findIndex((t) => Tt(t, A));
}
const ta = (e) => !!(e && e.__v_isRef === !0), b = (e) => hA(e) ? e : e == null ? "" : V(e) || rA(e) && (e.toString === ql || !W(e.toString)) ? ta(e) ? b(e.value) : JSON.stringify(e, sa, 2) : String(e), sa = (e, A) => ta(A) ? sa(e, A.value) : Je(A) ? {
  [`Map(${A.size})`]: [...A.entries()].reduce(
    (t, [s, r], n) => (t[un(s, n) + " =>"] = r, t),
    {}
  )
} : St(A) ? {
  [`Set(${A.size})`]: [...A.values()].map((t) => un(t))
} : we(A) ? un(A) : rA(A) && !V(A) && !Dr(A) ? String(A) : A, un = (e, A = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    we(e) ? `Symbol(${(t = e.description) != null ? t : A})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yA;
class HB {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A = !1) {
    this.detached = A, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !A && yA && (yA.active ? (this.parent = yA, this.index = (yA.scopes || (yA.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let A, t;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (A = 0, t = s.length; A < t; A++)
          s[A].pause();
      }
      for (A = 0, t = this.effects.length; A < t; A++)
        this.effects[A].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let A, t;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (A = 0, t = r.length; A < t; A++)
          r[A].resume();
      }
      const s = this.effects.slice();
      for (A = 0, t = s.length; A < t; A++)
        s[A].resume();
    }
  }
  run(A) {
    if (this._active) {
      const t = yA;
      try {
        return yA = this, A();
      } finally {
        yA = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = yA, yA = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (yA === this)
        yA = this.prevScope;
      else {
        let A = yA;
        for (; A; ) {
          if (A.prevScope === this) {
            A.prevScope = this.prevScope;
            break;
          }
          A = A.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(A) {
    if (this._active) {
      this._active = !1;
      let t, s;
      for (t = 0, s = this.effects.length; t < s; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, s = this.cleanups.length; t < s; t++)
        this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        const r = this.scopes.slice();
        for (t = 0, s = r.length; t < s; t++)
          r[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !A) {
        const r = this.parent.scopes.pop();
        r && r !== this && (this.parent.scopes[this.index] = r, r.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function IB() {
  return yA;
}
let cA;
const fn = /* @__PURE__ */ new WeakSet();
class ra {
  constructor(A) {
    this.fn = A, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yA && (yA.active ? yA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, fn.has(this) && (fn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || oa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, ui(this), ia(this);
    const A = cA, t = ee;
    cA = this, ee = !0;
    try {
      return this.fn();
    } finally {
      la(this), cA = A, ee = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let A = this.deps; A; A = A.nextDep)
        To(A);
      this.deps = this.depsTail = void 0, ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? fn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Wn(this) && this.run();
  }
  get dirty() {
    return Wn(this);
  }
}
let na = 0, is, ls;
function oa(e, A = !1) {
  if (e.flags |= 8, A) {
    e.next = ls, ls = e;
    return;
  }
  e.next = is, is = e;
}
function So() {
  na++;
}
function Ko() {
  if (--na > 0)
    return;
  if (ls) {
    let A = ls;
    for (ls = void 0; A; ) {
      const t = A.next;
      A.next = void 0, A.flags &= -9, A = t;
    }
  }
  let e;
  for (; is; ) {
    let A = is;
    for (is = void 0; A; ) {
      const t = A.next;
      if (A.next = void 0, A.flags &= -9, A.flags & 1)
        try {
          A.trigger();
        } catch (s) {
          e || (e = s);
        }
      A = t;
    }
  }
  if (e) throw e;
}
function ia(e) {
  for (let A = e.deps; A; A = A.nextDep)
    A.version = -1, A.prevActiveLink = A.dep.activeLink, A.dep.activeLink = A;
}
function la(e) {
  let A, t = e.depsTail, s = t;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === t && (t = r), To(s), _B(s)) : A = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = A, e.depsTail = t;
}
function Wn(e) {
  for (let A = e.deps; A; A = A.nextDep)
    if (A.dep.version !== A.version || A.dep.computed && (aa(A.dep.computed) || A.dep.version !== A.version))
      return !0;
  return !!e._dirty;
}
function aa(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ws) || (e.globalVersion = ws, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Wn(e))))
    return;
  e.flags |= 2;
  const A = e.dep, t = cA, s = ee;
  cA = e, ee = !0;
  try {
    ia(e);
    const r = e.fn(e._value);
    (A.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, A.version++);
  } catch (r) {
    throw A.version++, r;
  } finally {
    cA = t, ee = s, la(e), e.flags &= -3;
  }
}
function To(e, A = !1) {
  const { dep: t, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), t.subs === e && (t.subs = s, !s && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      To(n, !0);
  }
  !A && !--t.sc && t.map && t.map.delete(t.key);
}
function _B(e) {
  const { prevDep: A, nextDep: t } = e;
  A && (A.nextDep = t, e.prevDep = void 0), t && (t.prevDep = A, e.nextDep = void 0);
}
let ee = !0;
const ca = [];
function Se() {
  ca.push(ee), ee = !1;
}
function Ke() {
  const e = ca.pop();
  ee = e === void 0 ? !0 : e;
}
function ui(e) {
  const { cleanup: A } = e;
  if (e.cleanup = void 0, A) {
    const t = cA;
    cA = void 0;
    try {
      A();
    } finally {
      cA = t;
    }
  }
}
let ws = 0;
class LB {
  constructor(A, t) {
    this.sub = A, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ba {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A) {
    this.computed = A, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(A) {
    if (!cA || !ee || cA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== cA)
      t = this.activeLink = new LB(cA, this), cA.deps ? (t.prevDep = cA.depsTail, cA.depsTail.nextDep = t, cA.depsTail = t) : cA.deps = cA.depsTail = t, ua(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const s = t.nextDep;
      s.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = s), t.prevDep = cA.depsTail, t.nextDep = void 0, cA.depsTail.nextDep = t, cA.depsTail = t, cA.deps === t && (cA.deps = s);
    }
    return t;
  }
  trigger(A) {
    this.version++, ws++, this.notify(A);
  }
  notify(A) {
    So();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      Ko();
    }
  }
}
function ua(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const A = e.dep.computed;
    if (A && !e.dep.subs) {
      A.flags |= 20;
      for (let s = A.deps; s; s = s.nextDep)
        ua(s);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
  }
}
const Yn = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ Symbol(
  ""
), jn = /* @__PURE__ */ Symbol(
  ""
), Qs = /* @__PURE__ */ Symbol(
  ""
);
function LA(e, A, t) {
  if (ee && cA) {
    let s = Yn.get(e);
    s || Yn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(t);
    r || (s.set(t, r = new Ba()), r.map = s, r.key = t), r.track();
  }
}
function Ie(e, A, t, s, r, n) {
  const o = Yn.get(e);
  if (!o) {
    ws++;
    return;
  }
  const i = (a) => {
    a && a.trigger();
  };
  if (So(), A === "clear")
    o.forEach(i);
  else {
    const a = V(e), B = a && _o(t);
    if (a && t === "length") {
      const l = Number(s);
      o.forEach((c, f) => {
        (f === "length" || f === Qs || !we(f) && f >= l) && i(c);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && i(o.get(t)), B && i(o.get(Qs)), A) {
        case "add":
          a ? B && i(o.get("length")) : (i(o.get(Bt)), Je(e) && i(o.get(jn)));
          break;
        case "delete":
          a || (i(o.get(Bt)), Je(e) && i(o.get(jn)));
          break;
        case "set":
          Je(e) && i(o.get(Bt));
          break;
      }
  }
  Ko();
}
function pt(e) {
  const A = /* @__PURE__ */ sA(e);
  return A === e || (LA(A, "iterate", Qs), /* @__PURE__ */ te(e)) ? A : /* @__PURE__ */ Te(e) ? /* @__PURE__ */ We(e) ? A.map((t) => Ze(Qe(t))) : A.map(Ze) : A.map(Qe);
}
function Nr(e) {
  return LA(e = /* @__PURE__ */ sA(e), "iterate", Qs), e;
}
function fe(e, A) {
  return /* @__PURE__ */ Te(e) ? Ze(/* @__PURE__ */ We(e) ? Qe(A) : A) : Qe(A);
}
const SB = {
  __proto__: null,
  [Symbol.iterator]() {
    return gn(this, Symbol.iterator, (e) => fe(this, e));
  },
  concat(...e) {
    return pt(this).concat(
      ...e.map((A) => V(A) ? pt(A) : A)
    );
  },
  entries() {
    return gn(this, "entries", (e) => (e[1] = fe(this, e[1]), e));
  },
  every(e, A) {
    return Fe(this, "every", e, A, void 0, arguments);
  },
  filter(e, A) {
    return Fe(
      this,
      "filter",
      e,
      A,
      (t) => t.map((s) => fe(this, s)),
      arguments
    );
  },
  find(e, A) {
    return Fe(
      this,
      "find",
      e,
      A,
      (t) => fe(this, t),
      arguments
    );
  },
  findIndex(e, A) {
    return Fe(this, "findIndex", e, A, void 0, arguments);
  },
  findLast(e, A) {
    return Fe(
      this,
      "findLast",
      e,
      A,
      (t) => fe(this, t),
      arguments
    );
  },
  findLastIndex(e, A) {
    return Fe(this, "findLastIndex", e, A, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, A) {
    return Fe(this, "forEach", e, A, void 0, arguments);
  },
  includes(...e) {
    return dn(this, "includes", e);
  },
  indexOf(...e) {
    return dn(this, "indexOf", e);
  },
  join(e) {
    return pt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return dn(this, "lastIndexOf", e);
  },
  map(e, A) {
    return Fe(this, "map", e, A, void 0, arguments);
  },
  pop() {
    return Pt(this, "pop");
  },
  push(...e) {
    return Pt(this, "push", e);
  },
  reduce(e, ...A) {
    return fi(this, "reduce", e, A);
  },
  reduceRight(e, ...A) {
    return fi(this, "reduceRight", e, A);
  },
  shift() {
    return Pt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, A) {
    return Fe(this, "some", e, A, void 0, arguments);
  },
  splice(...e) {
    return Pt(this, "splice", e);
  },
  toReversed() {
    return pt(this).toReversed();
  },
  toSorted(e) {
    return pt(this).toSorted(e);
  },
  toSpliced(...e) {
    return pt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Pt(this, "unshift", e);
  },
  values() {
    return gn(this, "values", (e) => fe(this, e));
  }
};
function gn(e, A, t) {
  const s = Nr(e), r = s[A]();
  return s !== e && !/* @__PURE__ */ te(e) && (r._next = r.next, r.next = () => {
    const n = r._next();
    return n.done || (n.value = t(n.value)), n;
  }), r;
}
const KB = Array.prototype;
function Fe(e, A, t, s, r, n) {
  const o = Nr(e), i = o !== e && !/* @__PURE__ */ te(e), a = o[A];
  if (a !== KB[A]) {
    const c = a.apply(e, n);
    return i ? Qe(c) : c;
  }
  let B = t;
  o !== e && (i ? B = function(c, f) {
    return t.call(this, fe(e, c), f, e);
  } : t.length > 2 && (B = function(c, f) {
    return t.call(this, c, f, e);
  }));
  const l = a.call(o, B, s);
  return i && r ? r(l) : l;
}
function fi(e, A, t, s) {
  const r = Nr(e), n = r !== e && !/* @__PURE__ */ te(e);
  let o = t, i = !1;
  r !== e && (n ? (i = s.length === 0, o = function(B, l, c) {
    return i && (i = !1, B = fe(e, B)), t.call(this, B, fe(e, l), c, e);
  }) : t.length > 3 && (o = function(B, l, c) {
    return t.call(this, B, l, c, e);
  }));
  const a = r[A](o, ...s);
  return i ? fe(e, a) : a;
}
function dn(e, A, t) {
  const s = /* @__PURE__ */ sA(e);
  LA(s, "iterate", Qs);
  const r = s[A](...t);
  return (r === -1 || r === !1) && /* @__PURE__ */ Mo(t[0]) ? (t[0] = /* @__PURE__ */ sA(t[0]), s[A](...t)) : r;
}
function Pt(e, A, t = []) {
  Se(), So();
  const s = (/* @__PURE__ */ sA(e))[A].apply(e, t);
  return Ko(), Ke(), s;
}
const TB = /* @__PURE__ */ Ho("__proto__,__v_isRef,__isVue"), fa = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(we)
);
function kB(e) {
  we(e) || (e = String(e));
  const A = /* @__PURE__ */ sA(this);
  return LA(A, "has", e), A.hasOwnProperty(e);
}
class ga {
  constructor(A = !1, t = !1) {
    this._isReadonly = A, this._isShallow = t;
  }
  get(A, t, s) {
    if (t === "__v_skip") return A.__v_skip;
    const r = this._isReadonly, n = this._isShallow;
    if (t === "__v_isReactive")
      return !r;
    if (t === "__v_isReadonly")
      return r;
    if (t === "__v_isShallow")
      return n;
    if (t === "__v_raw")
      return s === (r ? n ? JB : wa : n ? pa : ha).get(A) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(A) === Object.getPrototypeOf(s) ? A : void 0;
    const o = V(A);
    if (!r) {
      let a;
      if (o && (a = SB[t]))
        return a;
      if (t === "hasOwnProperty")
        return kB;
    }
    const i = Reflect.get(
      A,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ MA(A) ? A : s
    );
    if ((we(t) ? fa.has(t) : TB(t)) || (r || LA(A, "get", t), n))
      return i;
    if (/* @__PURE__ */ MA(i)) {
      const a = o && _o(t) ? i : i.value;
      return r && rA(a) ? /* @__PURE__ */ zn(a) : a;
    }
    return rA(i) ? r ? /* @__PURE__ */ zn(i) : /* @__PURE__ */ Do(i) : i;
  }
}
class da extends ga {
  constructor(A = !1) {
    super(!1, A);
  }
  set(A, t, s, r) {
    let n = A[t];
    const o = V(A) && _o(t);
    if (!this._isShallow) {
      const B = /* @__PURE__ */ Te(n);
      if (!/* @__PURE__ */ te(s) && !/* @__PURE__ */ Te(s) && (n = /* @__PURE__ */ sA(n), s = /* @__PURE__ */ sA(s)), !o && /* @__PURE__ */ MA(n) && !/* @__PURE__ */ MA(s))
        return B || (n.value = s), !0;
    }
    const i = o ? Number(t) < A.length : AA(A, t), a = Reflect.set(
      A,
      t,
      s,
      /* @__PURE__ */ MA(A) ? A : r
    );
    return A === /* @__PURE__ */ sA(r) && a && (i ? He(s, n) && Ie(A, "set", t, s) : Ie(A, "add", t, s)), a;
  }
  deleteProperty(A, t) {
    const s = AA(A, t);
    A[t];
    const r = Reflect.deleteProperty(A, t);
    return r && s && Ie(A, "delete", t, void 0), r;
  }
  has(A, t) {
    const s = Reflect.has(A, t);
    return (!we(t) || !fa.has(t)) && LA(A, "has", t), s;
  }
  ownKeys(A) {
    return LA(
      A,
      "iterate",
      V(A) ? "length" : Bt
    ), Reflect.ownKeys(A);
  }
}
class DB extends ga {
  constructor(A = !1) {
    super(!0, A);
  }
  set(A, t) {
    return !0;
  }
  deleteProperty(A, t) {
    return !0;
  }
}
const OB = /* @__PURE__ */ new da(), MB = /* @__PURE__ */ new DB(), RB = /* @__PURE__ */ new da(!0);
const Zn = (e) => e, Ds = (e) => Reflect.getPrototypeOf(e);
function NB(e, A, t) {
  return function(...s) {
    const r = this.__v_raw, n = /* @__PURE__ */ sA(r), o = Je(n), i = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, B = r[e](...s), l = t ? Zn : A ? Ze : Qe;
    return !A && LA(
      n,
      "iterate",
      a ? jn : Bt
    ), CA(
      // inheriting all iterator properties
      Object.create(B),
      {
        // iterator protocol
        next() {
          const { value: c, done: f } = B.next();
          return f ? { value: c, done: f } : {
            value: i ? [l(c[0]), l(c[1])] : l(c),
            done: f
          };
        }
      }
    );
  };
}
function Os(e) {
  return function(...A) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function PB(e, A) {
  const t = {
    get(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ sA(n), i = /* @__PURE__ */ sA(r);
      e || (He(r, i) && LA(o, "get", r), LA(o, "get", i));
      const { has: a } = Ds(o), B = A ? Zn : e ? Ze : Qe;
      if (a.call(o, r))
        return B(n.get(r));
      if (a.call(o, i))
        return B(n.get(i));
      n !== o && n.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && LA(/* @__PURE__ */ sA(r), "iterate", Bt), r.size;
    },
    has(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ sA(n), i = /* @__PURE__ */ sA(r);
      return e || (He(r, i) && LA(o, "has", r), LA(o, "has", i)), r === i ? n.has(r) : n.has(r) || n.has(i);
    },
    forEach(r, n) {
      const o = this, i = o.__v_raw, a = /* @__PURE__ */ sA(i), B = A ? Zn : e ? Ze : Qe;
      return !e && LA(a, "iterate", Bt), i.forEach((l, c) => r.call(n, B(l), B(c), o));
    }
  };
  return CA(
    t,
    e ? {
      add: Os("add"),
      set: Os("set"),
      delete: Os("delete"),
      clear: Os("clear")
    } : {
      add(r) {
        const n = /* @__PURE__ */ sA(this), o = Ds(n), i = /* @__PURE__ */ sA(r), a = !A && !/* @__PURE__ */ te(r) && !/* @__PURE__ */ Te(r) ? i : r;
        return o.has.call(n, a) || He(r, a) && o.has.call(n, r) || He(i, a) && o.has.call(n, i) || (n.add(a), Ie(n, "add", a, a)), this;
      },
      set(r, n) {
        !A && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Te(n) && (n = /* @__PURE__ */ sA(n));
        const o = /* @__PURE__ */ sA(this), { has: i, get: a } = Ds(o);
        let B = i.call(o, r);
        B || (r = /* @__PURE__ */ sA(r), B = i.call(o, r));
        const l = a.call(o, r);
        return o.set(r, n), B ? He(n, l) && Ie(o, "set", r, n) : Ie(o, "add", r, n), this;
      },
      delete(r) {
        const n = /* @__PURE__ */ sA(this), { has: o, get: i } = Ds(n);
        let a = o.call(n, r);
        a || (r = /* @__PURE__ */ sA(r), a = o.call(n, r)), i && i.call(n, r);
        const B = n.delete(r);
        return a && Ie(n, "delete", r, void 0), B;
      },
      clear() {
        const r = /* @__PURE__ */ sA(this), n = r.size !== 0, o = r.clear();
        return n && Ie(
          r,
          "clear",
          void 0,
          void 0
        ), o;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((r) => {
    t[r] = NB(r, e, A);
  }), t;
}
function ko(e, A) {
  const t = PB(e, A);
  return (s, r, n) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    AA(t, r) && r in s ? t : s,
    r,
    n
  );
}
const VB = {
  get: /* @__PURE__ */ ko(!1, !1)
}, GB = {
  get: /* @__PURE__ */ ko(!1, !0)
}, XB = {
  get: /* @__PURE__ */ ko(!0, !1)
};
const ha = /* @__PURE__ */ new WeakMap(), pa = /* @__PURE__ */ new WeakMap(), wa = /* @__PURE__ */ new WeakMap(), JB = /* @__PURE__ */ new WeakMap();
function WB(e) {
  switch (e) {
    case "Object":
    case "Array":
      return 1;
    case "Map":
    case "Set":
    case "WeakMap":
    case "WeakSet":
      return 2;
    default:
      return 0;
  }
}
// @__NO_SIDE_EFFECTS__
function Do(e) {
  return /* @__PURE__ */ Te(e) ? e : Oo(
    e,
    !1,
    OB,
    VB,
    ha
  );
}
// @__NO_SIDE_EFFECTS__
function YB(e) {
  return Oo(
    e,
    !1,
    RB,
    GB,
    pa
  );
}
// @__NO_SIDE_EFFECTS__
function zn(e) {
  return Oo(
    e,
    !0,
    MB,
    XB,
    wa
  );
}
function Oo(e, A, t, s, r) {
  if (!rA(e) || e.__v_raw && !(A && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const o = WB(wB(e));
  if (o === 0)
    return e;
  const i = new Proxy(
    e,
    o === 2 ? s : t
  );
  return r.set(e, i), i;
}
// @__NO_SIDE_EFFECTS__
function We(e) {
  return /* @__PURE__ */ Te(e) ? /* @__PURE__ */ We(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Te(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Mo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function sA(e) {
  const A = e && e.__v_raw;
  return A ? /* @__PURE__ */ sA(A) : e;
}
function jB(e) {
  return !AA(e, "__v_skip") && Object.isExtensible(e) && $l(e, "__v_skip", !0), e;
}
const Qe = (e) => rA(e) ? /* @__PURE__ */ Do(e) : e, Ze = (e) => rA(e) ? /* @__PURE__ */ zn(e) : e;
// @__NO_SIDE_EFFECTS__
function MA(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Qa(e) {
  return /* @__PURE__ */ MA(e) ? e.value : e;
}
const ZB = {
  get: (e, A, t) => A === "__v_raw" ? e : Qa(Reflect.get(e, A, t)),
  set: (e, A, t, s) => {
    const r = e[A];
    return /* @__PURE__ */ MA(r) && !/* @__PURE__ */ MA(t) ? (r.value = t, !0) : Reflect.set(e, A, t, s);
  }
};
function Ca(e) {
  return /* @__PURE__ */ We(e) ? e : new Proxy(e, ZB);
}
class zB {
  constructor(A, t, s) {
    this.fn = A, this.setter = t, this._value = void 0, this.dep = new Ba(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ws - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    cA !== this)
      return oa(this, !0), !0;
  }
  get value() {
    const A = this.dep.track();
    return aa(this), A && (A.version = this.dep.version), this._value;
  }
  set value(A) {
    this.setter && this.setter(A);
  }
}
// @__NO_SIDE_EFFECTS__
function qB(e, A, t = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new zB(s, r, t);
}
const Ms = {}, pr = /* @__PURE__ */ new WeakMap();
let nt;
function $B(e, A = !1, t = nt) {
  if (t) {
    let s = pr.get(t);
    s || pr.set(t, s = []), s.push(e);
  }
}
function Au(e, A, t = iA) {
  const { immediate: s, deep: r, once: n, scheduler: o, augmentJob: i, call: a } = t, B = (m) => r ? m : /* @__PURE__ */ te(m) || r === !1 || r === 0 ? _e(m, 1) : _e(m);
  let l, c, f, h, w = !1, U = !1;
  if (/* @__PURE__ */ MA(e) ? (c = () => e.value, w = /* @__PURE__ */ te(e)) : /* @__PURE__ */ We(e) ? (c = () => B(e), w = !0) : V(e) ? (U = !0, w = e.some((m) => /* @__PURE__ */ We(m) || /* @__PURE__ */ te(m)), c = () => e.map((m) => {
    if (/* @__PURE__ */ MA(m))
      return m.value;
    if (/* @__PURE__ */ We(m))
      return B(m);
    if (W(m))
      return a ? a(m, 2) : m();
  })) : W(e) ? A ? c = a ? () => a(e, 2) : e : c = () => {
    if (f) {
      Se();
      try {
        f();
      } finally {
        Ke();
      }
    }
    const m = nt;
    nt = l;
    try {
      return a ? a(e, 3, [h]) : e(h);
    } finally {
      nt = m;
    }
  } : c = de, A && r) {
    const m = c, S = r === !0 ? 1 / 0 : r;
    c = () => _e(m(), S);
  }
  const E = IB(), I = () => {
    l.stop(), E && E.active && Io(E.effects, l);
  };
  if (n && A) {
    const m = A;
    A = (...S) => {
      const G = m(...S);
      return I(), G;
    };
  }
  let x = U ? new Array(e.length).fill(Ms) : Ms;
  const d = (m) => {
    if (!(!(l.flags & 1) || !l.dirty && !m))
      if (A) {
        const S = l.run();
        if (m || r || w || (U ? S.some((G, nA) => He(G, x[nA])) : He(S, x))) {
          f && f();
          const G = nt;
          nt = l;
          try {
            const nA = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === Ms ? void 0 : U && x[0] === Ms ? [] : x,
              h
            ];
            x = S, a ? a(A, 3, nA) : (
              // @ts-expect-error
              A(...nA)
            );
          } finally {
            nt = G;
          }
        }
      } else
        l.run();
  };
  return i && i(d), l = new ra(c), l.scheduler = o ? () => o(d, !1) : d, h = (m) => $B(m, !1, l), f = l.onStop = () => {
    const m = pr.get(l);
    if (m) {
      if (a)
        a(m, 4);
      else
        for (const S of m) S();
      pr.delete(l);
    }
  }, A ? s ? d(!0) : x = l.run() : o ? o(d.bind(null, !0), !0) : l.run(), I.pause = l.pause.bind(l), I.resume = l.resume.bind(l), I.stop = I, I;
}
function _e(e, A = 1 / 0, t) {
  if (A <= 0 || !rA(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(e) || 0) >= A))
    return e;
  if (t.set(e, A), A--, /* @__PURE__ */ MA(e))
    _e(e.value, A, t);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      _e(e[s], A, t);
  else if (St(e) || Je(e))
    e.forEach((s) => {
      _e(s, A, t);
    });
  else if (Dr(e)) {
    for (const s in e)
      _e(e[s], A, t);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && _e(e[s], A, t);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Hs(e, A, t, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Pr(r, A, t);
  }
}
function ne(e, A, t, s) {
  if (W(e)) {
    const r = Hs(e, A, t, s);
    return r && zl(r) && r.catch((n) => {
      Pr(n, A, t);
    }), r;
  }
  if (V(e)) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      r.push(ne(e[n], A, t, s));
    return r;
  }
}
function Pr(e, A, t, s = !0) {
  const r = A ? A.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: o } = A && A.appContext.config || iA;
  if (A) {
    let i = A.parent;
    const a = A.proxy, B = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const l = i.ec;
      if (l) {
        for (let c = 0; c < l.length; c++)
          if (l[c](e, a, B) === !1)
            return;
      }
      i = i.parent;
    }
    if (n) {
      Se(), Hs(n, null, 10, [
        e,
        a,
        B
      ]), Ke();
      return;
    }
  }
  eu(e, t, r, s, o);
}
function eu(e, A, t, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const OA = [];
let Be = -1;
const vt = [];
let Ne = null, xt = 0;
const ba = /* @__PURE__ */ Promise.resolve();
let wr = null;
function Ua(e) {
  const A = wr || ba;
  return e ? A.then(this ? e.bind(this) : e) : A;
}
function tu(e) {
  let A = Be + 1, t = OA.length;
  for (; A < t; ) {
    const s = A + t >>> 1, r = OA[s], n = Cs(r);
    n < e || n === e && r.flags & 2 ? A = s + 1 : t = s;
  }
  return A;
}
function Ro(e) {
  if (!(e.flags & 1)) {
    const A = Cs(e), t = OA[OA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && A >= Cs(t) ? OA.push(e) : OA.splice(tu(A), 0, e), e.flags |= 1, Fa();
  }
}
function Fa() {
  wr || (wr = ba.then(xa));
}
function su(e) {
  if (!V(e))
    Ne && e.id === -1 ? Ne.splice(xt + 1, 0, e) : e.flags & 1 || (vt.push(e), e.flags |= 1);
  else
    for (let A = 0; A < e.length; A++)
      vt.push(e[A]);
  Fa();
}
function gi(e, A, t = Be + 1) {
  for (; t < OA.length; t++) {
    const s = OA[t];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      OA.splice(t, 1), t--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function ma(e) {
  if (vt.length) {
    const A = [...new Set(vt)].sort(
      (t, s) => Cs(t) - Cs(s)
    );
    if (vt.length = 0, Ne) {
      for (let t = 0; t < A.length; t++)
        Ne.push(A[t]);
      return;
    }
    for (Ne = A, xt = 0; xt < Ne.length; xt++) {
      const t = Ne[xt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ne = null, xt = 0;
  }
}
const Cs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function xa(e) {
  try {
    for (Be = 0; Be < OA.length; Be++) {
      const A = OA[Be];
      A && !(A.flags & 8) && (A.flags & 4 && (A.flags &= -2), Hs(
        A,
        A.i,
        A.i ? 15 : 14
      ), A.flags & 4 || (A.flags &= -2));
    }
  } finally {
    for (; Be < OA.length; Be++) {
      const A = OA[Be];
      A && (A.flags &= -2);
    }
    Be = -1, OA.length = 0, ma(), wr = null, (OA.length || vt.length) && xa();
  }
}
let JA = null, Ea = null;
function Qr(e) {
  const A = JA;
  return JA = e, Ea = e && e.type.__scopeId || null, A;
}
function ru(e, A = JA, t) {
  if (!A || e._n)
    return e;
  const s = (...r) => {
    s._d && Ei(-1);
    const n = Qr(A), o = ut.length;
    let i;
    try {
      i = e(...r);
    } finally {
      for (let a = ut.length; a > o; a--) Za();
      Qr(n), s._d && Ei(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function FA(e, A) {
  if (JA === null)
    return e;
  const t = Wr(JA), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < A.length; r++) {
    let [n, o, i, a = iA] = A[r];
    n && (W(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && _e(o), s.push({
      dir: n,
      instance: t,
      value: o,
      oldValue: void 0,
      arg: i,
      modifiers: a
    }));
  }
  return e;
}
function tt(e, A, t, s) {
  const r = e.dirs, n = A && A.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    n && (i.oldValue = n[o].value);
    let a = i.dir[s];
    a && (Se(), ne(a, t, 8, [
      e.el,
      i,
      e,
      A
    ]), Ke());
  }
}
function nu(e, A) {
  if (SA) {
    let t = SA.provides;
    const s = SA.parent && SA.parent.provides;
    s === t && (t = SA.provides = Object.create(s)), t[e] = A;
  }
}
function cr(e, A, t = !1) {
  const s = of();
  if (s || Ht) {
    let r = Ht ? Ht._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && W(A) ? A.call(s && s.proxy) : A;
  }
}
const ou = /* @__PURE__ */ Symbol.for("v-scx"), iu = () => cr(ou);
function hn(e, A, t) {
  return ya(e, A, t);
}
function ya(e, A, t = iA) {
  const { immediate: s, deep: r, flush: n, once: o } = t, i = CA({}, t), a = A && s || !A && n !== "post";
  let B;
  if (Fs) {
    if (n === "sync") {
      const h = iu();
      B = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!a) {
      const h = () => {
      };
      return h.stop = de, h.resume = de, h.pause = de, h;
    }
  }
  const l = SA;
  i.call = (h, w, U) => ne(h, l, w, U);
  let c = !1;
  n === "post" ? i.scheduler = (h) => {
    RA(h, l && l.suspense);
  } : n !== "sync" && (c = !0, i.scheduler = (h, w) => {
    w ? h() : Ro(h);
  }), i.augmentJob = (h) => {
    A && (h.flags |= 4), c && (h.flags |= 2, l && (h.id = l.uid, h.i = l));
  };
  const f = Au(e, A, i);
  return Fs && (B ? B.push(f) : a && f()), f;
}
function lu(e, A, t) {
  const s = this.proxy, r = hA(e) ? e.includes(".") ? va(s, e) : () => s[e] : e.bind(s, s);
  let n;
  W(A) ? n = A : (n = A.handler, t = A);
  const o = Is(this), i = ya(r, n.bind(s), t);
  return o(), i;
}
function va(e, A) {
  const t = A.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < t.length && s; r++)
      s = s[t[r]];
    return s;
  };
}
const au = /* @__PURE__ */ Symbol("_vte"), Vr = (e) => e.__isTeleport, pn = /* @__PURE__ */ Symbol("_leaveCb");
function cu(e) {
  let A = e[0];
  if (e.length > 1) {
    for (const t of e)
      if (t.type !== ke) {
        A = t;
        break;
      }
  }
  return A;
}
function Ha(e) {
  if (!Po(e))
    return Vr(e.type) && e.children ? cu(e.children) : e;
  if (e.component)
    return e.component.subTree;
  const { shapeFlag: A, children: t } = e;
  if (t) {
    if (A & 16)
      return t[0];
    if (A & 32 && W(t.default))
      return t.default();
  }
}
function No(e, A) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = A;
    const t = e.component.subTree;
    No(
      Vr(t.type) && Ha(t) || t,
      A
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = A.clone(e.ssContent), e.ssFallback.transition = A.clone(e.ssFallback)) : e.transition = A;
}
// @__NO_SIDE_EFFECTS__
function Bu(e, A) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: e.name }, A, { setup: e })
  ) : e;
}
function Ia(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function di(e, A) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(e, A)) && !t.configurable);
}
const Cr = /* @__PURE__ */ new WeakMap();
function as(e, A, t, s, r = !1) {
  if (V(e)) {
    e.forEach(
      (U, E) => as(
        U,
        A && (V(A) ? A[E] : A),
        t,
        s,
        r
      )
    );
    return;
  }
  if (cs(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && as(e, A, t, s.component.subTree);
    return;
  }
  const n = s.shapeFlag & 4 ? Wr(s.component) : s.el, o = r ? null : n, { i, r: a } = e, B = A && A.r, l = i.refs === iA ? i.refs = {} : i.refs, c = i.setupState, f = /* @__PURE__ */ sA(c), h = c === iA ? Zl : (U) => di(l, U) ? !1 : AA(f, U), w = (U, E) => !(E && di(l, E));
  if (B != null && B !== a) {
    if (hi(A), hA(B))
      l[B] = null, h(B) && (c[B] = null);
    else if (/* @__PURE__ */ MA(B)) {
      const U = A;
      w(B, U.k) && (B.value = null), U.k && (l[U.k] = null);
    }
  }
  if (W(a))
    Hs(a, i, 12, [o, l]);
  else {
    const U = hA(a), E = /* @__PURE__ */ MA(a);
    if (U || E) {
      const I = () => {
        if (e.f) {
          const x = U ? h(a) ? c[a] : l[a] : w() || !e.k ? a.value : l[e.k];
          if (r)
            V(x) && Io(x, n);
          else if (V(x))
            x.includes(n) || x.push(n);
          else if (U)
            l[a] = [n], h(a) && (c[a] = l[a]);
          else {
            const d = [n];
            w(a, e.k) && (a.value = d), e.k && (l[e.k] = d);
          }
        } else U ? (l[a] = o, h(a) && (c[a] = o)) : E && (w(a, e.k) && (a.value = o), e.k && (l[e.k] = o));
      };
      if (o) {
        const x = () => {
          I(), Cr.delete(e);
        };
        x.id = -1, Cr.set(e, x), RA(x, t);
      } else
        hi(e), I();
    }
  }
}
function hi(e) {
  const A = Cr.get(e);
  A && (A.flags |= 8, Cr.delete(e));
}
Rr().requestIdleCallback;
Rr().cancelIdleCallback;
const cs = (e) => !!e.type.__asyncLoader, Po = (e) => e.type.__isKeepAlive;
function uu(e, A) {
  _a(e, "a", A);
}
function fu(e, A) {
  _a(e, "da", A);
}
function _a(e, A, t = SA) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Gr(A, s, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      Po(r.parent.vnode) && gu(s, A, t, r), r = r.parent;
  }
}
function gu(e, A, t, s) {
  const r = Gr(
    A,
    e,
    s,
    !0
    /* prepend */
  );
  La(() => {
    Io(s[A], r);
  }, t);
}
function Gr(e, A, t = SA, s = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), n = A.__weh || (A.__weh = (...o) => {
      Se();
      const i = Is(t), a = ne(A, t, e, o);
      return i(), Ke(), a;
    });
    return s ? r.unshift(n) : r.push(n), n;
  }
}
const De = (e) => (A, t = SA) => {
  (!Fs || e === "sp") && Gr(e, (...s) => A(...s), t);
}, du = De("bm"), hu = De("m"), pu = De(
  "bu"
), wu = De("u"), Qu = De(
  "bum"
), La = De("um"), Cu = De(
  "sp"
), bu = De("rtg"), Uu = De("rtc");
function Fu(e, A = SA) {
  Gr("ec", e, A);
}
const mu = "components";
function xu(e, A) {
  return yu(mu, e, !0, A) || e;
}
const Eu = /* @__PURE__ */ Symbol.for("v-ndc");
function yu(e, A, t = !0, s = !1) {
  const r = JA || SA;
  if (r) {
    const n = r.type;
    {
      const i = uf(
        n,
        !1
      );
      if (i && (i === A || i === mA(A) || i === Mr(mA(A))))
        return n;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      pi(r[e] || n[e], A) || // global registration
      pi(r.appContext[e], A)
    );
    return !o && s ? n : o;
  }
}
function pi(e, A) {
  return e && (e[A] || e[mA(A)] || e[Mr(mA(A))]);
}
function $(e, A, t, s) {
  let r;
  const n = t, o = V(e);
  if (o || hA(e)) {
    const i = o && /* @__PURE__ */ We(e);
    let a = !1, B = !1;
    i && (a = !/* @__PURE__ */ te(e), B = /* @__PURE__ */ Te(e), e = Nr(e)), r = new Array(e.length);
    for (let l = 0, c = e.length; l < c; l++)
      r[l] = A(
        a ? B ? Ze(Qe(e[l])) : Qe(e[l]) : e[l],
        l,
        void 0,
        n
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = A(i + 1, i, void 0, n);
  } else if (rA(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, a) => A(i, a, void 0, n)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let a = 0, B = i.length; a < B; a++) {
        const l = i[a];
        r[a] = A(e[l], l, a, n);
      }
    }
  else
    r = [];
  return r;
}
const qn = (e) => e ? ec(e) ? Wr(e) : qn(e.parent) : null, Bs = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ CA(/* @__PURE__ */ Object.create(null), {
    $: (e) => e,
    $el: (e) => e.vnode.el,
    $data: (e) => e.data,
    $props: (e) => e.props,
    $attrs: (e) => e.attrs,
    $slots: (e) => e.slots,
    $refs: (e) => e.refs,
    $parent: (e) => qn(e.parent),
    $root: (e) => qn(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ka(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Ro(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Ua.bind(e.proxy)),
    $watch: (e) => lu.bind(e)
  })
), wn = (e, A) => e !== iA && !e.__isScriptSetup && AA(e, A), vu = {
  get({ _: e }, A) {
    if (A === "__v_skip")
      return !0;
    const { ctx: t, setupState: s, data: r, props: n, accessCache: o, type: i, appContext: a } = e;
    if (A[0] !== "$") {
      const f = o[A];
      if (f !== void 0)
        switch (f) {
          case 1:
            return s[A];
          case 2:
            return r[A];
          case 4:
            return t[A];
          case 3:
            return n[A];
        }
      else {
        if (wn(s, A))
          return o[A] = 1, s[A];
        if (r !== iA && AA(r, A))
          return o[A] = 2, r[A];
        if (AA(n, A))
          return o[A] = 3, n[A];
        if (t !== iA && AA(t, A))
          return o[A] = 4, t[A];
        $n && (o[A] = 0);
      }
    }
    const B = Bs[A];
    let l, c;
    if (B)
      return A === "$attrs" && LA(e.attrs, "get", ""), B(e);
    if (
      // css module (injected by vue-loader)
      (l = i.__cssModules) && (l = l[A])
    )
      return l;
    if (t !== iA && AA(t, A))
      return o[A] = 4, t[A];
    if (
      // global properties
      c = a.config.globalProperties, AA(c, A)
    )
      return c[A];
  },
  set({ _: e }, A, t) {
    const { data: s, setupState: r, ctx: n } = e;
    return wn(r, A) ? (r[A] = t, !0) : s !== iA && AA(s, A) ? (s[A] = t, !0) : AA(e.props, A) || A[0] === "$" && A.slice(1) in e ? !1 : (n[A] = t, !0);
  },
  has({
    _: { data: e, setupState: A, accessCache: t, ctx: s, appContext: r, props: n, type: o }
  }, i) {
    let a;
    return !!(t[i] || e !== iA && i[0] !== "$" && AA(e, i) || wn(A, i) || AA(n, i) || AA(s, i) || AA(Bs, i) || AA(r.config.globalProperties, i) || (a = o.__cssModules) && a[i]);
  },
  defineProperty(e, A, t) {
    return t.get != null ? e._.accessCache[A] = 0 : AA(t, "value") && this.set(e, A, t.value, null), Reflect.defineProperty(e, A, t);
  }
};
function wi(e) {
  return V(e) ? e.reduce(
    (A, t) => (A[t] = null, A),
    {}
  ) : e;
}
let $n = !0;
function Hu(e) {
  const A = Ka(e), t = e.proxy, s = e.ctx;
  $n = !1, A.beforeCreate && Qi(A.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: n,
    methods: o,
    watch: i,
    provide: a,
    inject: B,
    // lifecycle
    created: l,
    beforeMount: c,
    mounted: f,
    beforeUpdate: h,
    updated: w,
    activated: U,
    deactivated: E,
    beforeDestroy: I,
    beforeUnmount: x,
    destroyed: d,
    unmounted: m,
    render: S,
    renderTracked: G,
    renderTriggered: nA,
    errorCaptured: xA,
    serverPrefetch: uA,
    // public API
    expose: $e,
    inheritAttrs: Ot,
    // assets
    components: Ss,
    directives: Ks,
    filters: an
  } = A;
  if (B && Iu(B, s, null), o)
    for (const gA in o) {
      const lA = o[gA];
      W(lA) && (s[gA] = lA.bind(t));
    }
  if (r) {
    const gA = r.call(t, t);
    rA(gA) && (e.data = /* @__PURE__ */ Do(gA));
  }
  if ($n = !0, n)
    for (const gA in n) {
      const lA = n[gA], At = W(lA) ? lA.bind(t, t) : W(lA.get) ? lA.get.bind(t, t) : de, Ts = !W(lA) && W(lA.set) ? lA.set.bind(t) : de, et = gf({
        get: At,
        set: Ts
      });
      Object.defineProperty(s, gA, {
        enumerable: !0,
        configurable: !0,
        get: () => et.value,
        set: (qA) => et.value = qA
      });
    }
  if (i)
    for (const gA in i)
      Sa(i[gA], s, t, gA);
  if (a) {
    const gA = W(a) ? a.call(t) : a;
    Reflect.ownKeys(gA).forEach((lA) => {
      nu(lA, gA[lA]);
    });
  }
  l && Qi(l, e, "c");
  function TA(gA, lA) {
    V(lA) ? lA.forEach((At) => gA(At.bind(t))) : lA && gA(lA.bind(t));
  }
  if (TA(du, c), TA(hu, f), TA(pu, h), TA(wu, w), TA(uu, U), TA(fu, E), TA(Fu, xA), TA(Uu, G), TA(bu, nA), TA(Qu, x), TA(La, m), TA(Cu, uA), V($e))
    if ($e.length) {
      const gA = e.exposed || (e.exposed = {});
      $e.forEach((lA) => {
        Object.defineProperty(gA, lA, {
          get: () => t[lA],
          set: (At) => t[lA] = At,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === de && (e.render = S), Ot != null && (e.inheritAttrs = Ot), Ss && (e.components = Ss), Ks && (e.directives = Ks), uA && Ia(e);
}
function Iu(e, A, t = de) {
  V(e) && (e = Ao(e));
  for (const s in e) {
    const r = e[s];
    let n;
    rA(r) ? "default" in r ? n = cr(
      r.from || s,
      r.default,
      !0
    ) : n = cr(r.from || s) : n = cr(r), /* @__PURE__ */ MA(n) ? Object.defineProperty(A, s, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    }) : A[s] = n;
  }
}
function Qi(e, A, t) {
  ne(
    V(e) ? e.map((s) => s.bind(A.proxy)) : e.bind(A.proxy),
    A,
    t
  );
}
function Sa(e, A, t, s) {
  let r = s.includes(".") ? va(t, s) : () => t[s];
  if (hA(e)) {
    const n = A[e];
    W(n) && hn(r, n);
  } else if (W(e))
    hn(r, e.bind(t));
  else if (rA(e))
    if (V(e))
      e.forEach((n) => Sa(n, A, t, s));
    else {
      const n = W(e.handler) ? e.handler.bind(t) : A[e.handler];
      W(n) && hn(r, n, e);
    }
}
function Ka(e) {
  const A = e.type, { mixins: t, extends: s } = A, {
    mixins: r,
    optionsCache: n,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = n.get(A);
  let a;
  return i ? a = i : !r.length && !t && !s ? a = A : (a = {}, r.length && r.forEach(
    (B) => br(a, B, o, !0)
  ), br(a, A, o)), rA(A) && n.set(A, a), a;
}
function br(e, A, t, s = !1) {
  const { mixins: r, extends: n } = A;
  n && br(e, n, t, !0), r && r.forEach(
    (o) => br(e, o, t, !0)
  );
  for (const o in A)
    if (!(s && o === "expose")) {
      const i = _u[o] || t && t[o];
      e[o] = i ? i(e[o], A[o]) : A[o];
    }
  return e;
}
const _u = {
  data: Ci,
  props: bi,
  emits: bi,
  // objects
  methods: jt,
  computed: jt,
  // lifecycle
  beforeCreate: kA,
  created: kA,
  beforeMount: kA,
  mounted: kA,
  beforeUpdate: kA,
  updated: kA,
  beforeDestroy: kA,
  beforeUnmount: kA,
  destroyed: kA,
  unmounted: kA,
  activated: kA,
  deactivated: kA,
  errorCaptured: kA,
  serverPrefetch: kA,
  // assets
  components: jt,
  directives: jt,
  // watch
  watch: Su,
  // provide / inject
  provide: Ci,
  inject: Lu
};
function Ci(e, A) {
  return A ? e ? function() {
    return CA(
      W(e) ? e.call(this, this) : e,
      W(A) ? A.call(this, this) : A
    );
  } : A : e;
}
function Lu(e, A) {
  return jt(Ao(e), Ao(A));
}
function Ao(e) {
  if (V(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++)
      A[e[t]] = e[t];
    return A;
  }
  return e;
}
function kA(e, A) {
  return e ? [...new Set([].concat(e, A))] : A;
}
function jt(e, A) {
  return e ? CA(/* @__PURE__ */ Object.create(null), e, A) : A;
}
function bi(e, A) {
  return e ? V(e) && V(A) ? [.../* @__PURE__ */ new Set([...e, ...A])] : CA(
    /* @__PURE__ */ Object.create(null),
    wi(e),
    wi(A ?? {})
  ) : A;
}
function Su(e, A) {
  if (!e) return A;
  if (!A) return e;
  const t = CA(/* @__PURE__ */ Object.create(null), e);
  for (const s in A)
    t[s] = kA(e[s], A[s]);
  return t;
}
function Ta() {
  return {
    app: null,
    config: {
      isNativeTag: Zl,
      performance: !1,
      globalProperties: {},
      optionMergeStrategies: {},
      errorHandler: void 0,
      warnHandler: void 0,
      compilerOptions: {}
    },
    mixins: [],
    components: {},
    directives: {},
    provides: /* @__PURE__ */ Object.create(null),
    optionsCache: /* @__PURE__ */ new WeakMap(),
    propsCache: /* @__PURE__ */ new WeakMap(),
    emitsCache: /* @__PURE__ */ new WeakMap()
  };
}
let Ku = 0;
function Tu(e, A) {
  return function(s, r = null) {
    W(s) || (s = CA({}, s)), r != null && !rA(r) && (r = null);
    const n = Ta(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let a = !1;
    const B = n.app = {
      _uid: Ku++,
      _component: s,
      _props: r,
      _container: null,
      _context: n,
      _instance: null,
      version: df,
      get config() {
        return n.config;
      },
      set config(l) {
      },
      use(l, ...c) {
        return o.has(l) || (l && W(l.install) ? (o.add(l), l.install(B, ...c)) : W(l) && (o.add(l), l(B, ...c))), B;
      },
      mixin(l) {
        return n.mixins.includes(l) || n.mixins.push(l), B;
      },
      component(l, c) {
        return c ? (n.components[l] = c, B) : n.components[l];
      },
      directive(l, c) {
        return c ? (n.directives[l] = c, B) : n.directives[l];
      },
      mount(l, c, f) {
        if (!a) {
          const h = B._ceVNode || he(s, r);
          return h.appContext = n, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(h, l, f), a = !0, B._container = l, l.__vue_app__ = B, Wr(h.component);
        }
      },
      onUnmount(l) {
        i.push(l);
      },
      unmount() {
        a && (ne(
          i,
          B._instance,
          16
        ), e(null, B._container), delete B._container.__vue_app__);
      },
      provide(l, c) {
        return n.provides[l] = c, B;
      },
      runWithContext(l) {
        const c = Ht;
        Ht = B;
        try {
          return l();
        } finally {
          Ht = c;
        }
      }
    };
    return B;
  };
}
let Ht = null;
const ku = (e, A) => A === "modelValue" || A === "model-value" ? e.modelModifiers : e[`${A}Modifiers`] || e[`${mA(A)}Modifiers`] || e[`${XA(A)}Modifiers`];
function Du(e, A, ...t) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || iA;
  let r = t;
  const n = A.startsWith("update:"), o = n && ku(s, A.slice(7));
  o && (o.trim && (r = t.map((l) => hA(l) ? l.trim() : l)), o.number && (r = r.map(Lo)));
  let i, a = s[i = Bn(A)] || // also try camelCase event handler (#2249)
  s[i = Bn(mA(A))];
  !a && n && (a = s[i = Bn(XA(A))]), a && ne(
    a,
    e,
    6,
    r
  );
  const B = s[i + "Once"];
  if (B) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, ne(
      B,
      e,
      6,
      r
    );
  }
}
const Ou = /* @__PURE__ */ new WeakMap();
function ka(e, A, t = !1) {
  const s = t ? Ou : A.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const n = e.emits;
  let o = {}, i = !1;
  if (!W(e)) {
    const a = (B) => {
      const l = ka(B, A, !0);
      l && (i = !0, CA(o, l));
    };
    !t && A.mixins.length && A.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !n && !i ? (rA(e) && s.set(e, null), null) : (V(n) ? n.forEach((a) => o[a] = null) : CA(o, n), rA(e) && s.set(e, o), o);
}
function Xr(e, A) {
  return !e || !Tr(A) ? !1 : (A = A.slice(2), A = A === "Once" ? A : A.replace(/Once$/, ""), AA(e, A[0].toLowerCase() + A.slice(1)) || AA(e, XA(A)) || AA(e, A));
}
function Ui(e) {
  const {
    type: A,
    vnode: t,
    proxy: s,
    withProxy: r,
    propsOptions: [n],
    slots: o,
    attrs: i,
    emit: a,
    render: B,
    renderCache: l,
    props: c,
    data: f,
    setupState: h,
    ctx: w,
    inheritAttrs: U
  } = e, E = Qr(e);
  let I, x;
  try {
    if (t.shapeFlag & 4) {
      const m = r || s, S = m;
      I = ge(
        B.call(
          S,
          m,
          l,
          c,
          h,
          f,
          w
        )
      ), x = i;
    } else {
      const m = A;
      I = ge(
        m.length > 1 ? m(
          c,
          { attrs: i, slots: o, emit: a }
        ) : m(
          c,
          null
        )
      ), x = A.props ? i : Mu(i);
    }
  } catch (m) {
    ut.length = 0, Pr(m, e, 1), I = he(ke);
  }
  let d = I;
  if (x && U !== !1) {
    const m = Object.keys(x), { shapeFlag: S } = d;
    m.length && S & 7 && (n && m.some(kr) && (x = Ru(
      x,
      n
    )), d = Kt(d, x, !1, !0));
  }
  if (t.dirs && (d = Kt(d, null, !1, !0), d.dirs = d.dirs ? d.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const m = Vr(d.type) && Ha(d) || d;
    No(m, t.transition);
  }
  return I = d, Qr(E), I;
}
const Mu = (e) => {
  let A;
  for (const t in e)
    (t === "class" || t === "style" || Tr(t)) && ((A || (A = {}))[t] = e[t]);
  return A;
}, Ru = (e, A) => {
  const t = {};
  for (const s in e)
    (!kr(s) || !(s.slice(9) in A)) && (t[s] = e[s]);
  return t;
};
function Nu(e, A, t) {
  const { props: s, children: r, component: n } = e, { props: o, children: i, patchFlag: a } = A, B = n.emitsOptions;
  if (A.dirs || A.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Fi(s, o, B) : !!o;
    if (a & 8) {
      const l = A.dynamicProps;
      for (let c = 0; c < l.length; c++) {
        const f = l[c];
        if (Da(o, s, f) && !Xr(B, f))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Fi(s, o, B) : !0 : !!o;
  return !1;
}
function Fi(e, A, t) {
  const s = Object.keys(A);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const n = s[r];
    if (Da(A, e, n) && !Xr(t, n))
      return !0;
  }
  return !1;
}
function Da(e, A, t) {
  const s = e[t], r = A[t];
  return t === "style" && rA(s) && rA(r) ? !Tt(s, r) : s !== r;
}
function Pu({ vnode: e, parent: A, suspense: t }, s) {
  for (; A; ) {
    const r = A.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = A.vnode).el = s, A = A.parent;
    else
      break;
  }
  t && t.activeBranch === e && (t.vnode.el = s);
}
const Oa = {}, Ma = () => Object.create(Oa), Ra = (e) => Object.getPrototypeOf(e) === Oa;
function Vu(e, A, t, s = !1) {
  const r = {}, n = Ma();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Na(e, A, r, n);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  t ? e.props = s ? r : /* @__PURE__ */ YB(r) : e.type.props ? e.props = r : e.props = n, e.attrs = n;
}
function Gu(e, A, t, s) {
  const {
    props: r,
    attrs: n,
    vnode: { patchFlag: o }
  } = e, i = /* @__PURE__ */ sA(r), [a] = e.propsOptions;
  let B = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const l = e.vnode.dynamicProps;
      for (let c = 0; c < l.length; c++) {
        let f = l[c];
        if (Xr(e.emitsOptions, f))
          continue;
        const h = A[f];
        if (a)
          if (AA(n, f))
            h !== n[f] && (n[f] = h, B = !0);
          else {
            const w = mA(f);
            r[w] = eo(
              a,
              i,
              w,
              h,
              e,
              !1
            );
          }
        else
          h !== n[f] && (n[f] = h, B = !0);
      }
    }
  } else {
    Na(e, A, r, n) && (B = !0);
    let l;
    for (const c in i)
      (!A || // for camelCase
      !AA(A, c) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = XA(c)) === c || !AA(A, l))) && (a ? t && // for camelCase
      (t[c] !== void 0 || // for kebab-case
      t[l] !== void 0) && (r[c] = eo(
        a,
        i,
        c,
        void 0,
        e,
        !0
      )) : delete r[c]);
    if (n !== i)
      for (const c in n)
        (!A || !AA(A, c)) && (delete n[c], B = !0);
  }
  B && Ie(e.attrs, "set", "");
}
function Na(e, A, t, s) {
  const [r, n] = e.propsOptions;
  let o = !1, i;
  if (A)
    for (let a in A) {
      if (os(a))
        continue;
      const B = A[a];
      let l;
      r && AA(r, l = mA(a)) ? !n || !n.includes(l) ? t[l] = B : (i || (i = {}))[l] = B : Xr(e.emitsOptions, a) || (!(a in s) || B !== s[a]) && (s[a] = B, o = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ sA(t), B = i || iA;
    for (let l = 0; l < n.length; l++) {
      const c = n[l];
      t[c] = eo(
        r,
        a,
        c,
        B[c],
        e,
        !AA(B, c)
      );
    }
  }
  return o;
}
function eo(e, A, t, s, r, n) {
  const o = e[t];
  if (o != null) {
    const i = AA(o, "default");
    if (i && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && W(a)) {
        const { propsDefaults: B } = r;
        if (t in B)
          s = B[t];
        else {
          const l = Is(r);
          s = B[t] = a.call(
            null,
            A
          ), l();
        }
      } else
        s = a;
      r.ce && r.ce._setProp(t, s);
    }
    o[
      0
      /* shouldCast */
    ] && (n && !i ? s = !1 : o[
      1
      /* shouldCastTrue */
    ] && (s === "" || s === XA(t)) && (s = !0));
  }
  return s;
}
const Xu = /* @__PURE__ */ new WeakMap();
function Pa(e, A, t = !1) {
  const s = t ? Xu : A.propsCache, r = s.get(e);
  if (r)
    return r;
  const n = e.props, o = {}, i = [];
  let a = !1;
  if (!W(e)) {
    const l = (c) => {
      a = !0;
      const [f, h] = Pa(c, A, !0);
      CA(o, f), h && i.push(...h);
    };
    !t && A.mixins.length && A.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  if (!n && !a)
    return rA(e) && s.set(e, lt), lt;
  if (V(n))
    for (let l = 0; l < n.length; l++) {
      const c = mA(n[l]);
      mi(c) && (o[c] = iA);
    }
  else if (n)
    for (const l in n) {
      const c = mA(l);
      if (mi(c)) {
        const f = n[l], h = o[c] = V(f) || W(f) ? { type: f } : CA({}, f), w = h.type;
        let U = !1, E = !0;
        if (V(w))
          for (let I = 0; I < w.length; ++I) {
            const x = w[I], d = W(x) && x.name;
            if (d === "Boolean") {
              U = !0;
              break;
            } else d === "String" && (E = !1);
          }
        else
          U = W(w) && w.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = U, h[
          1
          /* shouldCastTrue */
        ] = E, (U || AA(h, "default")) && i.push(c);
      }
    }
  const B = [o, i];
  return rA(e) && s.set(e, B), B;
}
function mi(e) {
  return e[0] !== "$" && !os(e);
}
const Vo = (e) => e === "_" || e === "_ctx" || e === "$stable", Go = (e) => V(e) ? e.map(ge) : [ge(e)], Ju = (e, A, t) => {
  if (A._n)
    return A;
  const s = ru((...r) => Go(A(...r)), t);
  return s._c = !1, s;
}, Va = (e, A, t) => {
  const s = e._ctx;
  for (const r in e) {
    if (Vo(r)) continue;
    const n = e[r];
    if (W(n))
      A[r] = Ju(r, n, s);
    else if (n != null) {
      const o = Go(n);
      A[r] = () => o;
    }
  }
}, Ga = (e, A) => {
  const t = Go(A);
  e.slots.default = () => t;
}, Xa = (e, A, t) => {
  for (const s in A)
    (t || !Vo(s)) && (e[s] = A[s]);
}, Wu = (e, A, t) => {
  const s = e.slots = Ma();
  if (e.vnode.shapeFlag & 32) {
    const r = A._;
    r ? (Xa(s, A, t), t && $l(s, "_", r, !0)) : Va(A, s);
  } else A && Ga(e, A);
}, Yu = (e, A, t) => {
  const { vnode: s, slots: r } = e;
  let n = !0, o = iA;
  if (s.shapeFlag & 32) {
    const i = A._;
    i ? t && i === 1 ? n = !1 : Xa(r, A, t) : (n = !A.$stable, Va(A, r)), o = A;
  } else A && (Ga(e, A), o = { default: 1 });
  if (n)
    for (const i in r)
      !Vo(i) && o[i] == null && delete r[i];
}, RA = $u;
function ju(e) {
  return Zu(e);
}
function Zu(e, A) {
  const t = Rr();
  t.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: n,
    createElement: o,
    createText: i,
    createComment: a,
    setText: B,
    setElementText: l,
    parentNode: c,
    nextSibling: f,
    setScopeId: h = de,
    insertStaticContent: w
  } = e, U = (g, p, F, _ = null, y = null, H = null, k = void 0, T = null, K = !!p.dynamicChildren) => {
    if (g === p)
      return;
    g && !Vt(g, p) && (_ = ks(g), qA(g, y, H, !0), g = null), p.patchFlag === -2 && (K = !1, p.dynamicChildren = null), p.dynamicChildren && g && g.dynamicChildren && g.dynamicChildren.hasOnce && (p.dynamicChildren === lt && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: v, ref: P, shapeFlag: M } = p;
    switch (v) {
      case Jr:
        E(g, p, F, _);
        break;
      case ke:
        I(g, p, F, _);
        break;
      case Cn:
        g == null && x(p, F, _, k);
        break;
      case N:
        Ss(
          g,
          p,
          F,
          _,
          y,
          H,
          k,
          T,
          K
        );
        break;
      default:
        M & 1 ? S(
          g,
          p,
          F,
          _,
          y,
          H,
          k,
          T,
          K
        ) : M & 6 ? Ks(
          g,
          p,
          F,
          _,
          y,
          H,
          k,
          T,
          K
        ) : (M & 64 || M & 128) && v.process(
          g,
          p,
          F,
          _,
          y,
          H,
          k,
          T,
          K,
          Rt
        );
    }
    P != null && y ? as(P, g && g.ref, H, p || g, !p) : P == null && g && g.ref != null && as(g.ref, null, H, g, !0);
  }, E = (g, p, F, _) => {
    if (g == null)
      s(
        p.el = i(p.children),
        F,
        _
      );
    else {
      const y = p.el = g.el;
      p.children !== g.children && B(y, p.children);
    }
  }, I = (g, p, F, _) => {
    g == null ? s(
      p.el = a(p.children || ""),
      F,
      _
    ) : p.el = g.el;
  }, x = (g, p, F, _) => {
    [g.el, g.anchor] = w(
      g.children,
      p,
      F,
      _,
      g.el,
      g.anchor
    );
  }, d = ({ el: g, anchor: p }, F, _) => {
    let y;
    for (; g && g !== p; )
      y = f(g), s(g, F, _), g = y;
    s(p, F, _);
  }, m = ({ el: g, anchor: p }) => {
    let F;
    for (; g && g !== p; )
      F = f(g), r(g), g = F;
    r(p);
  }, S = (g, p, F, _, y, H, k, T, K) => {
    if (p.type === "svg" ? k = "svg" : p.type === "math" && (k = "mathml"), g == null)
      G(
        p,
        F,
        _,
        y,
        H,
        k,
        T,
        K
      );
    else {
      const v = g.el && g.el._isVueCE ? g.el : null;
      try {
        v && v._beginPatch(), uA(
          g,
          p,
          y,
          H,
          k,
          T,
          K
        );
      } finally {
        v && v._endPatch();
      }
    }
  }, G = (g, p, F, _, y, H, k, T) => {
    let K, v;
    const { props: P, shapeFlag: M, transition: R, dirs: X } = g;
    if (K = g.el = o(
      g.type,
      H,
      P && P.is,
      P
    ), M & 8 ? l(K, g.children) : M & 16 && xA(
      g.children,
      K,
      null,
      _,
      y,
      Qn(g, H),
      k,
      T
    ), X && tt(g, null, _, "created"), nA(K, g, g.scopeId, k, _), P) {
      for (const oA in P)
        oA !== "value" && !os(oA) && n(K, oA, null, P[oA], H, _);
      "value" in P && n(K, "value", null, P.value, H), (v = P.onVnodeBeforeMount) && ae(v, _, g);
    }
    X && tt(g, null, _, "beforeMount");
    const q = zu(y, R);
    q && R.beforeEnter(K), s(K, p, F), ((v = P && P.onVnodeMounted) || q || X) && RA(() => {
      try {
        v && ae(v, _, g), q && R.enter(K), X && tt(g, null, _, "mounted");
      } finally {
      }
    }, y);
  }, nA = (g, p, F, _, y) => {
    if (F && h(g, F), _)
      for (let H = 0; H < _.length; H++)
        h(g, _[H]);
    if (y) {
      let H = y.subTree;
      if (p === H || ja(H.type) && (H.ssContent === p || H.ssFallback === p)) {
        const k = y.vnode;
        nA(
          g,
          k,
          k.scopeId,
          k.slotScopeIds,
          y.parent
        );
      }
    }
  }, xA = (g, p, F, _, y, H, k, T, K = 0) => {
    for (let v = K; v < g.length; v++) {
      const P = g[v] = T ? ve(g[v]) : ge(g[v]);
      U(
        null,
        P,
        p,
        F,
        _,
        y,
        H,
        k,
        T
      );
    }
  }, uA = (g, p, F, _, y, H, k) => {
    const T = p.el = g.el;
    let { patchFlag: K, dynamicChildren: v, dirs: P } = p;
    K |= g.patchFlag & 16;
    const M = g.props || iA, R = p.props || iA;
    let X;
    if (F && st(F, !1), (X = R.onVnodeBeforeUpdate) && ae(X, F, p, g), P && tt(p, g, F, "beforeUpdate"), F && st(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    v && (!g.dynamicChildren || g.dynamicChildren.length !== v.length) && (K = 0, k = !1, v = null), (M.innerHTML && R.innerHTML == null || M.textContent && R.textContent == null) && l(T, ""), v ? $e(
      g.dynamicChildren,
      v,
      T,
      F,
      _,
      Qn(p, y),
      H
    ) : k || lA(
      g,
      p,
      T,
      null,
      F,
      _,
      Qn(p, y),
      H,
      !1
    ), K > 0) {
      if (K & 16)
        Ot(T, M, R, F, y);
      else if (K & 2 && M.class !== R.class && n(T, "class", null, R.class, y), K & 4 && n(T, "style", M.style, R.style, y), K & 8) {
        const q = p.dynamicProps;
        for (let oA = 0; oA < q.length; oA++) {
          const tA = q[oA], bA = M[tA], EA = R[tA];
          (EA !== bA || tA === "value") && n(T, tA, bA, EA, y, F);
        }
      }
      K & 1 && g.children !== p.children && l(T, p.children);
    } else !k && v == null && Ot(T, M, R, F, y);
    ((X = R.onVnodeUpdated) || P) && RA(() => {
      X && ae(X, F, p, g), P && tt(p, g, F, "updated");
    }, _);
  }, $e = (g, p, F, _, y, H, k) => {
    for (let T = 0; T < p.length; T++) {
      const K = g[T], v = p[T], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === N || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Vt(K, v) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? c(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        K,
        v,
        P,
        null,
        _,
        y,
        H,
        k,
        !0
      );
    }
  }, Ot = (g, p, F, _, y) => {
    if (p !== F) {
      if (p !== iA)
        for (const H in p)
          !os(H) && !(H in F) && n(
            g,
            H,
            p[H],
            null,
            y,
            _
          );
      for (const H in F) {
        if (os(H)) continue;
        const k = F[H], T = p[H];
        k !== T && H !== "value" && n(g, H, T, k, y, _);
      }
      "value" in F && n(g, "value", p.value, F.value, y);
    }
  }, Ss = (g, p, F, _, y, H, k, T, K) => {
    const v = p.el = g ? g.el : i(""), P = p.anchor = g ? g.anchor : i("");
    let { patchFlag: M, dynamicChildren: R, slotScopeIds: X } = p;
    X && (T = T ? T.concat(X) : X), g == null ? (s(v, F, _), s(P, F, _), xA(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      F,
      P,
      y,
      H,
      k,
      T,
      K
    )) : M > 0 && M & 64 && R && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    g.dynamicChildren && g.dynamicChildren.length === R.length ? ($e(
      g.dynamicChildren,
      R,
      F,
      y,
      H,
      k,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || y && p === y.subTree) && Ja(
      g,
      p,
      !0
      /* shallow */
    )) : lA(
      g,
      p,
      F,
      P,
      y,
      H,
      k,
      T,
      K
    );
  }, Ks = (g, p, F, _, y, H, k, T, K) => {
    p.slotScopeIds = T, g == null ? p.shapeFlag & 512 ? y.ctx.activate(
      p,
      F,
      _,
      k,
      K
    ) : an(
      p,
      F,
      _,
      y,
      H,
      k,
      K
    ) : ei(g, p, K);
  }, an = (g, p, F, _, y, H, k) => {
    const T = g.component = nf(
      g,
      _,
      y
    );
    if (Po(g) && (T.ctx.renderer = Rt), lf(T, !1, k), T.asyncDep) {
      if (y && y.registerDep(T, TA, k), !g.el) {
        const K = T.subTree = he(ke);
        I(null, K, p, F), g.placeholder = K.el;
      }
    } else
      TA(
        T,
        g,
        p,
        F,
        y,
        H,
        k
      );
  }, ei = (g, p, F) => {
    const _ = p.component = g.component;
    if (Nu(g, p, F))
      if (_.asyncDep && !_.asyncResolved) {
        p.el = g.el, gA(_, p, F);
        return;
      } else
        _.next = p, _.update();
    else
      p.el = g.el, _.vnode = p;
  }, TA = (g, p, F, _, y, H, k) => {
    const T = () => {
      if (g.isMounted) {
        let { next: M, bu: R, u: X, parent: q, vnode: oA } = g;
        {
          const ie = Wa(g);
          if (ie) {
            M && (M.el = oA.el, gA(g, M, k)), ie.asyncDep.then(() => {
              RA(() => {
                g.isUnmounted || v();
              }, y);
            });
            return;
          }
        }
        let tA = M, bA;
        st(g, !1), M ? (M.el = oA.el, gA(g, M, k)) : M = oA, R && ar(R), (bA = M.props && M.props.onVnodeBeforeUpdate) && ae(bA, q, M, oA), st(g, !0);
        const EA = Ui(g), oe = g.subTree;
        g.subTree = EA, U(
          oe,
          EA,
          // parent may have changed if it's in a teleport
          c(oe.el),
          // anchor may have changed if it's in a fragment
          ks(oe),
          g,
          y,
          H
        ), M.el = EA.el, tA === null && Pu(g, EA.el), X && RA(X, y), (bA = M.props && M.props.onVnodeUpdated) && RA(
          () => ae(bA, q, M, oA),
          y
        );
      } else {
        let M;
        const { el: R, props: X } = p, { bm: q, m: oA, parent: tA, root: bA, type: EA } = g, oe = cs(p);
        st(g, !1), q && ar(q), !oe && (M = X && X.onVnodeBeforeMount) && ae(M, tA, p), st(g, !0);
        {
          bA.ce && bA.ce._hasShadowRoot() && bA.ce._injectChildStyle(
            EA,
            g.parent ? g.parent.type : void 0
          );
          const ie = g.subTree = Ui(g);
          U(
            null,
            ie,
            F,
            _,
            g,
            y,
            H
          ), p.el = ie.el;
        }
        if (oA && RA(oA, y), !oe && (M = X && X.onVnodeMounted)) {
          const ie = p;
          RA(
            () => ae(M, tA, ie),
            y
          );
        }
        (p.shapeFlag & 256 || tA && cs(tA.vnode) && tA.vnode.shapeFlag & 256) && g.a && RA(g.a, y), g.isMounted = !0, p = F = _ = null;
      }
    };
    g.scope.on();
    const K = g.effect = new ra(T);
    g.scope.off();
    const v = g.update = K.run.bind(K), P = g.job = K.runIfDirty.bind(K);
    P.i = g, P.id = g.uid, K.scheduler = () => Ro(P), st(g, !0), v();
  }, gA = (g, p, F) => {
    p.component = g;
    const _ = g.vnode.props;
    g.vnode = p, g.next = null, Gu(g, p.props, _, F), Yu(g, p.children, F), Se(), gi(g), Ke();
  }, lA = (g, p, F, _, y, H, k, T, K = !1) => {
    const v = g && g.children, P = g ? g.shapeFlag : 0, M = p.children, { patchFlag: R, shapeFlag: X } = p;
    if (R > 0) {
      if (R & 128) {
        Ts(
          v,
          M,
          F,
          _,
          y,
          H,
          k,
          T,
          K
        );
        return;
      } else if (R & 256) {
        At(
          v,
          M,
          F,
          _,
          y,
          H,
          k,
          T,
          K
        );
        return;
      }
    }
    X & 8 ? (P & 16 && Mt(v, y, H), M !== v && l(F, M)) : P & 16 ? X & 16 ? Ts(
      v,
      M,
      F,
      _,
      y,
      H,
      k,
      T,
      K
    ) : Mt(v, y, H, !0) : (P & 8 && l(F, ""), X & 16 && xA(
      M,
      F,
      _,
      y,
      H,
      k,
      T,
      K
    ));
  }, At = (g, p, F, _, y, H, k, T, K) => {
    g = g || lt, p = p || lt;
    const v = g.length, P = p.length, M = Math.min(v, P);
    let R;
    for (R = 0; R < M; R++) {
      const X = p[R] = K ? ve(p[R]) : ge(p[R]);
      U(
        g[R],
        X,
        F,
        null,
        y,
        H,
        k,
        T,
        K
      );
    }
    v > P ? Mt(
      g,
      y,
      H,
      !0,
      !1,
      M
    ) : xA(
      p,
      F,
      _,
      y,
      H,
      k,
      T,
      K,
      M
    );
  }, Ts = (g, p, F, _, y, H, k, T, K) => {
    let v = 0;
    const P = p.length;
    let M = g.length - 1, R = P - 1;
    for (; v <= M && v <= R; ) {
      const X = g[v], q = p[v] = K ? ve(p[v]) : ge(p[v]);
      if (Vt(X, q))
        U(
          X,
          q,
          F,
          null,
          y,
          H,
          k,
          T,
          K
        );
      else
        break;
      v++;
    }
    for (; v <= M && v <= R; ) {
      const X = g[M], q = p[R] = K ? ve(p[R]) : ge(p[R]);
      if (Vt(X, q))
        U(
          X,
          q,
          F,
          null,
          y,
          H,
          k,
          T,
          K
        );
      else
        break;
      M--, R--;
    }
    if (v > M) {
      if (v <= R) {
        const X = R + 1, q = X < P ? p[X].el : _;
        for (; v <= R; )
          U(
            null,
            p[v] = K ? ve(p[v]) : ge(p[v]),
            F,
            q,
            y,
            H,
            k,
            T,
            K
          ), v++;
      }
    } else if (v > R)
      for (; v <= M; )
        qA(g[v], y, H, !0), v++;
    else {
      const X = v, q = v, oA = /* @__PURE__ */ new Map();
      for (v = q; v <= R; v++) {
        const VA = p[v] = K ? ve(p[v]) : ge(p[v]);
        VA.key != null && oA.set(VA.key, v);
      }
      let tA, bA = 0;
      const EA = R - q + 1;
      let oe = !1, ie = 0;
      const Nt = new Array(EA);
      for (v = 0; v < EA; v++) Nt[v] = 0;
      for (v = X; v <= M; v++) {
        const VA = g[v];
        if (bA >= EA) {
          qA(VA, y, H, !0);
          continue;
        }
        let le;
        if (VA.key != null)
          le = oA.get(VA.key);
        else
          for (tA = q; tA <= R; tA++)
            if (Nt[tA - q] === 0 && Vt(VA, p[tA])) {
              le = tA;
              break;
            }
        le === void 0 ? qA(VA, y, H, !0) : (Nt[le - q] = v + 1, le >= ie ? ie = le : oe = !0, U(
          VA,
          p[le],
          F,
          null,
          y,
          H,
          k,
          T,
          K
        ), bA++);
      }
      const ri = oe ? qu(Nt) : lt;
      for (tA = ri.length - 1, v = EA - 1; v >= 0; v--) {
        const VA = q + v, le = p[VA], ni = p[VA + 1], oi = VA + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          ni.el || Ya(ni)
        ) : _;
        Nt[v] === 0 ? U(
          null,
          le,
          F,
          oi,
          y,
          H,
          k,
          T,
          K
        ) : oe && (tA < 0 || v !== ri[tA] ? et(le, F, oi, 2) : tA--);
      }
    }
  }, et = (g, p, F, _, y = null) => {
    const { el: H, type: k, transition: T, children: K, shapeFlag: v } = g;
    if (v & 6) {
      et(g.component.subTree, p, F, _);
      return;
    }
    if (v & 128) {
      g.suspense.move(p, F, _);
      return;
    }
    if (v & 64) {
      k.move(g, p, F, Rt);
      return;
    }
    if (k === N) {
      s(H, p, F);
      for (let M = 0; M < K.length; M++)
        et(K[M], p, F, _);
      s(g.anchor, p, F);
      return;
    }
    if (k === Cn) {
      d(g, p, F);
      return;
    }
    if (_ !== 2 && v & 1 && T)
      if (_ === 0)
        T.persisted && !H[pn] ? s(H, p, F) : (T.beforeEnter(H), s(H, p, F), RA(() => T.enter(H), y));
      else {
        const { leave: M, delayLeave: R, afterLeave: X } = T, q = () => {
          g.ctx.isUnmounted ? r(H) : s(H, p, F);
        }, oA = () => {
          const tA = H._isLeaving || !!H[pn];
          H._isLeaving && H[pn](
            !0
            /* cancelled */
          ), T.persisted && !tA ? q() : M(H, () => {
            q(), X && X();
          });
        };
        R ? R(H, q, oA) : oA();
      }
    else
      s(H, p, F);
  }, qA = (g, p, F, _ = !1, y = !1) => {
    const {
      type: H,
      props: k,
      ref: T,
      children: K,
      dynamicChildren: v,
      shapeFlag: P,
      patchFlag: M,
      dirs: R,
      cacheIndex: X,
      memo: q
    } = g;
    if ((M === -2 || v && v.hasOnce) && (y = !1), T != null && (Se(), as(T, null, F, g, !0), Ke()), X != null && (!g.ctx || g.ctx === p) && (p.renderCache[X] = void 0), P & 256) {
      p.ctx.deactivate(g);
      return;
    }
    const oA = P & 1 && R, tA = !cs(g);
    let bA;
    if (tA && (bA = k && k.onVnodeBeforeUnmount) && ae(bA, p, g), P & 6)
      hB(g.component, F, _);
    else {
      if (P & 128) {
        g.suspense.unmount(F, _);
        return;
      }
      oA && tt(g, null, p, "beforeUnmount"), P & 64 ? g.type.remove(
        g,
        p,
        F,
        Rt,
        _
      ) : v && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !v.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== N || M > 0 && M & 64) ? Mt(
        v,
        p,
        F,
        !1,
        !0
      ) : (H === N && M & 384 || !y && P & 16) && Mt(K, p, F), _ && ti(g);
    }
    const EA = q != null && X == null;
    (tA && (bA = k && k.onVnodeUnmounted) || oA || EA) && RA(() => {
      bA && ae(bA, p, g), oA && tt(g, null, p, "unmounted"), EA && (g.el = null);
    }, F);
  }, ti = (g) => {
    const { type: p, el: F, anchor: _, transition: y } = g;
    if (p === N) {
      dB(F, _);
      return;
    }
    if (p === Cn) {
      m(g), y && !y.persisted && y.afterLeave && y.afterLeave();
      return;
    }
    const H = () => {
      r(F), y && !y.persisted && y.afterLeave && y.afterLeave();
    };
    if (g.shapeFlag & 1 && y && !y.persisted) {
      const { leave: k, delayLeave: T } = y, K = () => k(F, H);
      T ? T(g.el, H, K) : K();
    } else
      H();
  }, dB = (g, p) => {
    let F;
    for (; g !== p; )
      F = f(g), r(g), g = F;
    r(p);
  }, hB = (g, p, F) => {
    const { bum: _, scope: y, job: H, subTree: k, um: T, m: K, a: v } = g;
    xi(K), xi(v), _ && ar(_), y.stop(), H ? (H.flags |= 8, qA(k, g, p, F)) : g.vnode.el && k && (k.transition = g.vnode.transition, qA(k, g, p, F)), T && RA(T, p), RA(() => {
      g.isUnmounted = !0;
    }, p);
  }, Mt = (g, p, F, _ = !1, y = !1, H = 0) => {
    for (let k = H; k < g.length; k++)
      qA(g[k], p, F, _, y);
  }, ks = (g) => {
    if (g.shapeFlag & 6)
      return ks(g.component.subTree);
    if (g.shapeFlag & 128)
      return g.suspense.next();
    const p = f(g.anchor || g.el), F = p && p[au];
    return F ? f(F) : p;
  };
  let cn = !1;
  const si = (g, p, F) => {
    let _;
    g == null ? p._vnode && (qA(p._vnode, null, null, !0), _ = p._vnode.component) : U(
      p._vnode || null,
      g,
      p,
      null,
      null,
      null,
      F
    ), p._vnode = g, cn || (cn = !0, gi(_), ma(), cn = !1);
  }, Rt = {
    p: U,
    um: qA,
    m: et,
    r: ti,
    mt: an,
    mc: xA,
    pc: lA,
    pbc: $e,
    n: ks,
    o: e
  };
  return {
    render: si,
    hydrate: void 0,
    createApp: Tu(si)
  };
}
function Qn({ type: e, props: A }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && A && A.encoding && A.encoding.includes("html") ? void 0 : t;
}
function st({ effect: e, job: A }, t) {
  t ? (e.flags |= 32, A.flags |= 4) : (e.flags &= -33, A.flags &= -5);
}
function zu(e, A) {
  return (!e || e && !e.pendingBranch) && A && !A.persisted;
}
function Ja(e, A, t = !1) {
  const s = e.children, r = A.children;
  if (V(s) && V(r))
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      let i = r[n];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[n] = ve(r[n]), i.el = o.el), !t && i.patchFlag !== -2 && Ja(o, i)), i.type === Jr && (i.patchFlag === -1 && (i = r[n] = ve(i)), i.el = o.el), i.type === ke && !i.el && (i.el = o.el);
    }
}
function qu(e) {
  const A = e.slice(), t = [0];
  let s, r, n, o, i;
  const a = e.length;
  for (s = 0; s < a; s++) {
    const B = e[s];
    if (B !== 0) {
      if (r = t[t.length - 1], e[r] < B) {
        A[s] = r, t.push(s);
        continue;
      }
      for (n = 0, o = t.length - 1; n < o; )
        i = n + o >> 1, e[t[i]] < B ? n = i + 1 : o = i;
      B < e[t[n]] && (n > 0 && (A[s] = t[n - 1]), t[n] = s);
    }
  }
  for (n = t.length, o = t[n - 1]; n-- > 0; )
    t[n] = o, o = A[o];
  return t;
}
function Wa(e) {
  const A = e.subTree.component;
  if (A)
    return A.asyncDep && !A.asyncResolved ? A : Wa(A);
}
function xi(e) {
  if (e)
    for (let A = 0; A < e.length; A++)
      e[A].flags |= 8;
}
function Ya(e) {
  if (e.placeholder)
    return e.placeholder;
  const A = e.component;
  return A ? Ya(A.subTree) : null;
}
const ja = (e) => e.__isSuspense;
function $u(e, A) {
  A && A.pendingBranch ? V(e) ? A.effects.push(...e) : A.effects.push(e) : su(e);
}
const N = /* @__PURE__ */ Symbol.for("v-fgt"), Jr = /* @__PURE__ */ Symbol.for("v-txt"), ke = /* @__PURE__ */ Symbol.for("v-cmt"), Cn = /* @__PURE__ */ Symbol.for("v-stc"), ut = [];
let WA = null;
function Q(e = !1) {
  ut.push(WA = e ? null : []);
}
function Za() {
  ut.pop(), WA = ut[ut.length - 1] || null;
}
let bs = 1;
function Ei(e, A = !1) {
  bs += e, e < 0 && WA && A && (WA.hasOnce = !0);
}
function za(e) {
  return e.dynamicChildren = bs > 0 ? WA || lt : null, Za(), bs > 0 && WA && WA.push(e), e;
}
function C(e, A, t, s, r, n) {
  return za(
    u(
      e,
      A,
      t,
      s,
      r,
      n,
      !0
    )
  );
}
function qa(e, A, t, s, r) {
  return za(
    he(
      e,
      A,
      t,
      s,
      r,
      !0
    )
  );
}
function $a(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Vt(e, A) {
  return e.type === A.type && e.key === A.key;
}
const Ac = ({ key: e }) => e ?? null, Br = ({
  ref: e,
  ref_key: A,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? hA(e) || /* @__PURE__ */ MA(e) || W(e) ? { i: JA, r: e, k: A, f: !!t } : e : null);
function u(e, A = null, t = null, s = 0, r = null, n = e === N ? 0 : 1, o = !1, i = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: A,
    key: A && Ac(A),
    ref: A && Br(A),
    scopeId: Ea,
    slotScopeIds: null,
    children: t,
    component: null,
    suspense: null,
    ssContent: null,
    ssFallback: null,
    dirs: null,
    transition: null,
    el: null,
    anchor: null,
    target: null,
    targetStart: null,
    targetAnchor: null,
    staticCount: 0,
    shapeFlag: n,
    patchFlag: s,
    dynamicProps: r,
    dynamicChildren: null,
    appContext: null,
    ctx: JA
  };
  return i ? (Ur(a, t), n & 128 && e.normalize(a)) : t && (a.shapeFlag |= hA(t) ? 8 : 16), bs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  WA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && WA.push(a), a;
}
const he = Af;
function Af(e, A = null, t = null, s = 0, r = null, n = !1) {
  if ((!e || e === Eu) && (e = ke), $a(e)) {
    const i = Kt(
      e,
      A,
      !0
      /* mergeRef: true */
    );
    return t && Ur(i, t), bs > 0 && !n && WA && (i.shapeFlag & 6 ? WA[WA.indexOf(e)] = i : WA.push(i)), i.patchFlag = -2, i;
  }
  if (ff(e) && (e = e.__vccOpts), A) {
    A = ef(A);
    let { class: i, style: a } = A;
    i && !hA(i) && (A.class = Y(i)), rA(a) && (/* @__PURE__ */ Mo(a) && !V(a) && (a = CA({}, a)), A.style = vs(a));
  }
  const o = hA(e) ? 1 : ja(e) ? 128 : Vr(e) ? 64 : rA(e) ? 4 : W(e) ? 2 : 0;
  return u(
    e,
    A,
    t,
    s,
    r,
    o,
    n,
    !0
  );
}
function ef(e) {
  return e ? /* @__PURE__ */ Mo(e) || Ra(e) ? CA({}, e) : e : null;
}
function Kt(e, A, t = !1, s = !1) {
  const { props: r, ref: n, patchFlag: o, children: i, transition: a } = e, B = A ? tf(r || {}, A) : r, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: B,
    key: B && Ac(B),
    ref: A && A.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? V(n) ? n.concat(Br(A)) : [n, Br(A)] : Br(A)
    ) : n,
    scopeId: e.scopeId,
    slotScopeIds: e.slotScopeIds,
    children: i,
    target: e.target,
    targetStart: e.targetStart,
    targetAnchor: e.targetAnchor,
    staticCount: e.staticCount,
    shapeFlag: e.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: A && e.type !== N ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Kt(e.ssContent),
    ssFallback: e.ssFallback && Kt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && No(
    l,
    a.clone(l)
  ), l;
}
function J(e = " ", A = 0) {
  return he(Jr, null, e, A);
}
function L(e = "", A = !1) {
  return A ? (Q(), qa(ke, null, e)) : he(ke, null, e);
}
function ge(e) {
  return e == null || typeof e == "boolean" ? he(ke) : V(e) ? he(
    N,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : $a(e) ? ve(e) : he(Jr, null, String(e));
}
function ve(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kt(e);
}
function Ur(e, A) {
  let t = 0;
  const { shapeFlag: s } = e;
  if (A == null)
    A = null;
  else if (V(A))
    t = 16;
  else if (typeof A == "object")
    if (s & 65) {
      const r = A.default;
      r && (r._c && (r._d = !1), Ur(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = A._;
      !r && !Ra(A) ? A._ctx = JA : r === 3 && JA && (JA.slots._ === 1 ? A._ = 1 : (A._ = 2, e.patchFlag |= 1024));
    }
  else if (W(A)) {
    if (s & 65) {
      Ur(e, { default: A });
      return;
    }
    A = { default: A, _ctx: JA }, t = 32;
  } else
    A = String(A), s & 64 ? (t = 16, A = [J(A)]) : t = 8;
  e.children = A, e.shapeFlag |= t;
}
function tf(...e) {
  const A = {};
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    for (const r in s)
      if (r === "class")
        A.class !== s.class && (A.class = Y([A.class, s.class]));
      else if (r === "style")
        A.style = vs([A.style, s.style]);
      else if (Tr(r)) {
        const n = A[r], o = s[r];
        o && n !== o && !(V(n) && n.includes(o)) ? A[r] = n ? [].concat(n, o) : o : o == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !kr(r) && (A[r] = o);
      } else r !== "" && (A[r] = s[r]);
  }
  return A;
}
function ae(e, A, t, s = null) {
  ne(e, A, 7, [
    t,
    s
  ]);
}
const sf = Ta();
let rf = 0;
function nf(e, A, t) {
  const s = e.type, r = (A ? A.appContext : e.appContext) || sf, n = {
    uid: rf++,
    vnode: e,
    type: s,
    parent: A,
    appContext: r,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new HB(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: A ? A.provides : Object.create(r.provides),
    ids: A ? A.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Pa(s, r),
    emitsOptions: ka(s, r),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: iA,
    // inheritAttrs
    inheritAttrs: s.inheritAttrs,
    // state
    ctx: iA,
    data: iA,
    props: iA,
    attrs: iA,
    slots: iA,
    refs: iA,
    setupState: iA,
    setupContext: null,
    // suspense related
    suspense: t,
    suspenseId: t ? t.pendingId : 0,
    asyncDep: null,
    asyncResolved: !1,
    // lifecycle hooks
    // not using enums here because it results in computed properties
    isMounted: !1,
    isUnmounted: !1,
    isDeactivated: !1,
    bc: null,
    c: null,
    bm: null,
    m: null,
    bu: null,
    u: null,
    um: null,
    bum: null,
    da: null,
    a: null,
    rtg: null,
    rtc: null,
    ec: null,
    sp: null
  };
  return n.ctx = { _: n }, n.root = A ? A.root : n, n.emit = Du.bind(null, n), e.ce && e.ce(n), n;
}
let SA = null;
const of = () => SA || JA;
let Fr, Us;
{
  const e = Rr(), A = (t, s) => {
    let r;
    return (r = e[t]) || (r = e[t] = []), r.push(s), (n) => {
      r.length > 1 ? r.forEach((o) => o(n)) : r[0](n);
    };
  };
  Fr = A(
    "__VUE_INSTANCE_SETTERS__",
    (t) => SA = t
  ), Us = A(
    "__VUE_SSR_SETTERS__",
    (t) => Fs = t
  );
}
const Is = (e) => {
  const A = SA;
  return Fr(e), e.scope.on(), () => {
    e.scope.off(), Fr(A);
  };
}, yi = () => {
  SA && SA.scope.off(), Fr(null);
};
function ec(e) {
  return e.vnode.shapeFlag & 4;
}
let Fs = !1;
function lf(e, A = !1, t = !1) {
  A && Us(A);
  const { props: s, children: r } = e.vnode, n = ec(e);
  Vu(e, s, n, A), Wu(e, r, t || A);
  const o = n ? af(e, A) : void 0;
  return A && Us(!1), o;
}
function af(e, A) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, vu);
  const { setup: s } = t;
  if (s) {
    Se();
    const r = e.setupContext = s.length > 1 ? Bf(e) : null, n = Is(e), o = Hs(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), i = zl(o);
    if (Ke(), n(), (i || e.sp) && !cs(e) && Ia(e), i) {
      if (o.then(yi, yi), A)
        return o.then((a) => {
          Us(!0);
          try {
            vi(e, a, A);
          } finally {
            Us(!1);
          }
        }).catch((a) => {
          Pr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      vi(e, o);
  } else
    tc(e);
}
function vi(e, A, t) {
  W(A) ? e.type.__ssrInlineRender ? e.ssrRender = A : e.render = A : rA(A) && (e.setupState = Ca(A)), tc(e);
}
function tc(e, A, t) {
  const s = e.type;
  e.render || (e.render = s.render || de);
  {
    const r = Is(e);
    Se();
    try {
      Hu(e);
    } finally {
      Ke(), r();
    }
  }
}
const cf = {
  get(e, A) {
    return LA(e, "get", ""), e[A];
  }
};
function Bf(e) {
  const A = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, cf),
    slots: e.slots,
    emit: e.emit,
    expose: A
  };
}
function Wr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ca(jB(e.exposed)), {
    get(A, t) {
      if (t in A)
        return A[t];
      if (t in Bs)
        return Bs[t](e);
    },
    has(A, t) {
      return t in A || t in Bs;
    }
  })) : e.proxy;
}
function uf(e, A = !0) {
  return W(e) ? e.displayName || e.name : e.name || A && e.__name;
}
function ff(e) {
  return W(e) && "__vccOpts" in e;
}
const gf = (e, A) => /* @__PURE__ */ qB(e, A, Fs), df = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let to;
const Hi = typeof window < "u" && window.trustedTypes;
if (Hi)
  try {
    to = /* @__PURE__ */ Hi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const sc = to ? (e) => to.createHTML(e) : (e) => e, hf = "http://www.w3.org/2000/svg", pf = "http://www.w3.org/1998/Math/MathML", Ee = typeof document < "u" ? document : null, Ii = Ee && /* @__PURE__ */ Ee.createElement("template"), wf = {
  insert: (e, A, t) => {
    A.insertBefore(e, t || null);
  },
  remove: (e) => {
    const A = e.parentNode;
    A && A.removeChild(e);
  },
  createElement: (e, A, t, s) => {
    const r = A === "svg" ? Ee.createElementNS(hf, e) : A === "mathml" ? Ee.createElementNS(pf, e) : t ? Ee.createElement(e, { is: t }) : Ee.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => Ee.createTextNode(e),
  createComment: (e) => Ee.createComment(e),
  setText: (e, A) => {
    e.nodeValue = A;
  },
  setElementText: (e, A) => {
    e.textContent = A;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => Ee.querySelector(e),
  setScopeId(e, A) {
    e.setAttribute(A, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(e, A, t, s, r, n) {
    const o = t ? t.previousSibling : A.lastChild;
    if (r && (r === n || r.nextSibling))
      for (; A.insertBefore(r.cloneNode(!0), t), !(r === n || !(r = r.nextSibling)); )
        ;
    else {
      Ii.innerHTML = sc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Ii.content;
      if (s === "svg" || s === "mathml") {
        const a = i.firstChild;
        for (; a.firstChild; )
          i.appendChild(a.firstChild);
        i.removeChild(a);
      }
      A.insertBefore(i, t);
    }
    return [
      // first
      o ? o.nextSibling : A.firstChild,
      // last
      t ? t.previousSibling : A.lastChild
    ];
  }
}, Qf = /* @__PURE__ */ Symbol("_vtc");
function Cf(e, A, t) {
  const s = e[Qf];
  s && (A = (A ? [A, ...s] : [...s]).join(" ")), A == null ? e.removeAttribute("class") : t ? e.setAttribute("class", A) : e.className = A;
}
const _i = /* @__PURE__ */ Symbol("_vod"), bf = /* @__PURE__ */ Symbol("_vsh"), Uf = /* @__PURE__ */ Symbol(""), Ff = /(?:^|;)\s*display\s*:/;
function mf(e, A, t) {
  const s = e.style, r = hA(t);
  let n = !1;
  if (t && !r) {
    if (A)
      if (hA(A))
        for (const o of A.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim();
          t[i] == null && Zt(s, i, "");
        }
      else
        for (const o in A)
          t[o] == null && Zt(s, o, "");
    for (const o in t) {
      o === "display" && (n = !0);
      const i = t[o];
      i != null ? Ef(
        e,
        o,
        !hA(A) && A ? A[o] : void 0,
        i
      ) || Zt(s, o, i) : Zt(s, o, "");
    }
  } else if (r) {
    if (A !== t) {
      const o = s[Uf];
      o && (t += ";" + o), s.cssText = t, n = Ff.test(t);
    }
  } else A && e.removeAttribute("style");
  _i in e && (e[_i] = n ? s.display : "", e[bf] && (s.display = "none"));
}
const Rs = /\s*!important$/;
function Zt(e, A, t) {
  if (V(t))
    t.forEach((s) => Zt(e, A, s));
  else if (t == null && (t = ""), A.startsWith("--"))
    Rs.test(t) ? e.setProperty(A, t.replace(Rs, ""), "important") : e.setProperty(A, t);
  else {
    const s = xf(e, A);
    Rs.test(t) ? e.setProperty(
      XA(s),
      t.replace(Rs, ""),
      "important"
    ) : e[s] = t;
  }
}
const Li = ["Webkit", "Moz", "ms"], bn = {};
function xf(e, A) {
  const t = bn[A];
  if (t)
    return t;
  let s = mA(A);
  if (s !== "filter" && s in e)
    return bn[A] = s;
  s = Mr(s);
  for (let r = 0; r < Li.length; r++) {
    const n = Li[r] + s;
    if (n in e)
      return bn[A] = n;
  }
  return A;
}
function Ef(e, A, t, s) {
  return e.tagName === "TEXTAREA" && (A === "width" || A === "height") && hA(s) && t === s;
}
const Si = "http://www.w3.org/1999/xlink";
function Ki(e, A, t, s, r, n = EB(A)) {
  s && A.startsWith("xlink:") ? t == null ? e.removeAttributeNS(Si, A.slice(6, A.length)) : e.setAttributeNS(Si, A, t) : t == null || n && !Aa(t) ? e.removeAttribute(A) : e.setAttribute(
    A,
    n ? "" : we(t) ? String(t) : t
  );
}
function Ti(e, A, t, s, r) {
  if (A === "innerHTML" || A === "textContent") {
    t != null && (e[A] = A === "innerHTML" ? sc(t) : t);
    return;
  }
  const n = e.tagName;
  if (A === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const i = n === "OPTION" ? e.getAttribute("value") || "" : e.value, a = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(t);
    (i !== a || !("_value" in e)) && (e.value = a), t == null && e.removeAttribute(A), e._value = t;
    return;
  }
  let o = !1;
  if (t === "" || t == null) {
    const i = typeof e[A];
    i === "boolean" ? t = Aa(t) : t == null && i === "string" ? (t = "", o = !0) : i === "number" && (t = 0, o = !0);
  }
  try {
    e[A] = t;
  } catch {
  }
  o && e.removeAttribute(r || A);
}
function ot(e, A, t, s) {
  e.addEventListener(A, t, s);
}
function yf(e, A, t, s) {
  e.removeEventListener(A, t, s);
}
const ki = /* @__PURE__ */ Symbol("_vei");
function vf(e, A, t, s, r = null) {
  const n = e[ki] || (e[ki] = {}), o = n[A];
  if (s && o)
    o.value = s;
  else {
    const [i, a] = _f(A);
    if (s) {
      const B = n[A] = Kf(
        s,
        r
      );
      ot(e, i, B, a);
    } else o && (yf(e, i, o, a), n[A] = void 0);
  }
}
const Hf = /(Once|Passive|Capture)$/, If = /^on:?(?:Once|Passive|Capture)$/;
function _f(e) {
  let A, t;
  for (; (t = e.match(Hf)) && !If.test(e); )
    A || (A = {}), e = e.slice(0, e.length - t[1].length), A[t[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : XA(e.slice(2)), A];
}
let Un = 0;
const Lf = /* @__PURE__ */ Promise.resolve(), Sf = () => Un || (Lf.then(() => Un = 0), Un = Date.now());
function Kf(e, A) {
  const t = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= t.attached)
      return;
    const r = t.value;
    if (V(r)) {
      const n = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        n.call(s), s._stopped = !0;
      };
      const o = r.slice(), i = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const B = o[a];
        B && ne(
          B,
          A,
          5,
          i
        );
      }
    } else
      ne(
        r,
        A,
        5,
        [s]
      );
  };
  return t.value = e, t.attached = Sf(), t;
}
const Di = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Tf = (e, A, t, s, r, n) => {
  const o = r === "svg";
  A === "class" ? Cf(e, s, o) : A === "style" ? mf(e, t, s) : Tr(A) ? kr(A) || vf(e, A, t, s, n) : (A[0] === "." ? (A = A.slice(1), !0) : A[0] === "^" ? (A = A.slice(1), !1) : kf(e, A, s, o)) ? (Ti(e, A, s), !e.tagName.includes("-") && (A === "value" || A === "checked" || A === "selected") && Ki(e, A, s, o, n, A !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Df(e, A) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(A) || !hA(s))) ? Ti(e, mA(A), s, n, A) : (A === "true-value" ? e._trueValue = s : A === "false-value" && (e._falseValue = s), Ki(e, A, s, o));
};
function kf(e, A, t, s) {
  if (s)
    return !!(A === "innerHTML" || A === "textContent" || A in e && Di(A) && W(t));
  if (A === "spellcheck" || A === "draggable" || A === "translate" || A === "autocorrect" || A === "sandbox" && e.tagName === "IFRAME" || A === "form" || A === "list" && e.tagName === "INPUT" || A === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (A === "width" || A === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Di(A) && hA(t) ? !1 : A in e;
}
function Df(e, A) {
  const t = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!t)
    return !1;
  const s = mA(A);
  return Array.isArray(t) ? t.some((r) => mA(r) === s) : Object.keys(t).some((r) => mA(r) === s);
}
const Oi = {};
// @__NO_SIDE_EFFECTS__
function Mi(e, A, t) {
  let s = /* @__PURE__ */ Bu(e, A);
  Dr(s) && (s = CA({}, s, A));
  class r extends Xo {
    constructor(o) {
      super(s, o, t);
    }
  }
  return r.def = s, r;
}
const Of = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Xo extends Of {
  constructor(A, t = {}, s = Gi) {
    super(), this._def = A, this._props = t, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== Gi ? this._root = this.shadowRoot : A.shadowRoot !== !1 ? (this.attachShadow(
      CA({}, A.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let A = this;
    for (; A = A && // #12479 should check assignedSlot first to get correct parent
    (A.assignedSlot || A.parentNode || A.host); )
      if (A instanceof Xo) {
        this._parent = A;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : A && A._pendingResolve ? this._pendingResolve = A._pendingResolve.then(() => {
      if (this._pendingResolve = void 0, this.isConnected)
        return this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(A = this._parent) {
    A && (this._instance.parent = A._instance, this._inheritParentContext(A));
  }
  _inheritParentContext(A = this._parent) {
    A && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      A._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, Ua(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(A) {
    for (const t of A)
      this._setAttr(t.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return this._pendingResolve;
    for (let s = 0; s < this.attributes.length; s++)
      this._setAttr(this.attributes[s].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const A = (s, r = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: n, styles: o } = s;
      let i;
      if (n && !V(n))
        for (const a in n) {
          const B = n[a];
          (B === Number || B && B.type === Number) && (a in this._props && (this._props[a] = li(this._props[a])), (i || (i = /* @__PURE__ */ Object.create(null)))[mA(a)] = !0);
        }
      this._numberProps = i, this._resolveProps(s), this.shadowRoot && this._applyStyles(o), this._mount(s);
    }, t = this._def.__asyncLoader;
    if (t)
      return this._pendingResolve = t().then((s) => {
        s.configureApp = this._def.configureApp, A(this._def = s, !0);
      }), this._pendingResolve;
    A(this._def);
  }
  _mount(A) {
    this._app = this._createApp(A), this._inheritParentContext(), A.configureApp && A.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const s in t)
        AA(this, s) || Object.defineProperty(this, s, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Qa(t[s])
        });
  }
  _resolveProps(A) {
    const { props: t } = A, s = V(t) ? t : Object.keys(t || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(mA))
      Object.defineProperty(this, r, {
        get() {
          return this._getProp(r);
        },
        set(n) {
          this._setProp(r, n, !0, !this._patching);
        }
      });
  }
  _setAttr(A) {
    if (A.startsWith("data-v-")) return;
    const t = this.hasAttribute(A);
    let s = t ? this.getAttribute(A) : Oi;
    const r = mA(A);
    t && this._numberProps && this._numberProps[r] && (s = li(s)), this._setProp(r, s, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(A) {
    return this._props[A];
  }
  /**
   * @internal
   */
  _setProp(A, t, s = !0, r = !1) {
    if (t !== this._props[A] && (this._dirty = !0, t === Oi ? delete this._props[A] : (this._props[A] = t, A === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), s)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(XA(A), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(XA(A), t + "") : t || this.removeAttribute(XA(A)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const A = this._createVNode();
    this._app && (A.appContext = this._app._context), Xf(A, this._root);
  }
  _createVNode() {
    const A = {};
    this.shadowRoot || (A.onVnodeMounted = A.onVnodeUpdated = this._renderSlots.bind(this));
    const t = he(this._def, CA(A, this._props));
    return this._instance || (t.ce = (s) => {
      this._instance = s, s.ce = this, s.isCE = !0;
      const r = (n, o) => {
        this.dispatchEvent(
          new CustomEvent(
            n,
            Dr(o[0]) ? CA({ detail: o }, o[0]) : { detail: o }
          )
        );
      };
      s.emit = (n, ...o) => {
        r(n, o), XA(n) !== n && r(XA(n), o);
      }, this._setParent();
    }), t;
  }
  _applyStyles(A, t, s) {
    if (!A) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t))
        return;
      this._styleChildren.add(t);
    }
    const r = this._nonce, n = this.shadowRoot, o = s ? this._getStyleAnchor(s) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(n);
    let i = null;
    for (let a = A.length - 1; a >= 0; a--) {
      const B = document.createElement("style");
      r && B.setAttribute("nonce", r), B.textContent = A[a], n.insertBefore(B, i || o), i = B, a === 0 && (s || this._styleAnchors.set(this._def, B), t && this._styleAnchors.set(t, B));
    }
  }
  _getStyleAnchor(A) {
    if (!A)
      return null;
    const t = this._styleAnchors.get(A);
    return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(A), null);
  }
  _getRootStyleInsertionAnchor(A) {
    for (let t = 0; t < A.childNodes.length; t++) {
      const s = A.childNodes[t];
      if (!(s instanceof HTMLStyleElement))
        return s;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const A = this._slots = {};
    let t;
    for (; t = this.firstChild; ) {
      const s = t.nodeType === 1 && t.getAttribute("slot") || "default";
      (A[s] || (A[s] = [])).push(t), this.removeChild(t);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const A = this._getSlots(), t = this._instance.type.__scopeId;
    for (let s = 0; s < A.length; s++) {
      const r = A[s], n = r.getAttribute("name") || "default", o = this._slots[n], i = r.parentNode;
      if (o)
        for (const a of o) {
          if (t && a.nodeType === 1) {
            const B = t + "-s", l = document.createTreeWalker(a, 1);
            a.setAttribute(B, "");
            let c;
            for (; c = l.nextNode(); )
              c.setAttribute(B, "");
          }
          i.insertBefore(a, r);
        }
      else
        for (; r.firstChild; ) i.insertBefore(r.firstChild, r);
      i.removeChild(r);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const A = [this];
    this._teleportTargets && A.push(...this._teleportTargets);
    const t = /* @__PURE__ */ new Set();
    for (const s of A) {
      const r = s.querySelectorAll("slot");
      for (let n = 0; n < r.length; n++)
        t.add(r[n]);
    }
    return Array.from(t);
  }
  /**
   * @internal
   */
  _injectChildStyle(A, t) {
    this._applyStyles(A.styles, A, t);
  }
  /**
   * @internal
   */
  _beginPatch() {
    this._patching = !0, this._dirty = !1;
  }
  /**
   * @internal
   */
  _endPatch() {
    this._patching = !1, this._dirty && this._instance && this._update();
  }
  /**
   * @internal
   */
  _hasShadowRoot() {
    return this._def.shadowRoot !== !1;
  }
  /**
   * @internal
   */
  _removeChildStyle(A) {
  }
}
const mr = (e) => {
  const A = e.props["onUpdate:modelValue"] || !1;
  return V(A) ? (t) => ar(A, t) : A;
};
function Mf(e) {
  e.target.composing = !0;
}
function Ri(e) {
  const A = e.target;
  A.composing && (A.composing = !1, A.dispatchEvent(new Event("input")));
}
const at = /* @__PURE__ */ Symbol("_assign"), Ns = /* @__PURE__ */ Symbol("_initialValue");
function Fn(e, A, t) {
  return A && (e = e.trim()), t && (e = Lo(e)), e;
}
const ur = {
  created(e, { modifiers: { lazy: A, trim: t, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Ns] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ns] = e.defaultValue.replace(/\r\n?/g, `
`))), e[at] = mr(r);
    const n = s || r.props && r.props.type === "number";
    ot(e, A ? "change" : "input", (o) => {
      o.target.composing || e[at](Fn(e.value, t, n));
    }), (t || n) && ot(e, "change", () => {
      e.value = Fn(e.value, t, n);
    }), A || (ot(e, "compositionstart", Mf), ot(e, "compositionend", Ri), ot(e, "change", Ri));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: A, modifiers: { trim: t, number: s } }) {
    const r = A ?? "", n = e[Ns];
    delete e[Ns], n !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== n ? e[at](Fn(e.value, t, s)) : e.value = r;
  },
  beforeUpdate(e, { value: A, oldValue: t, modifiers: { lazy: s, trim: r, number: n } }, o) {
    if (e[at] = mr(o), e.composing) return;
    const i = (n || e.type === "number") && !/^0\d/.test(e.value) ? Lo(e.value) : e.value, a = A ?? "";
    if (i === a)
      return;
    const B = e.getRootNode();
    (B instanceof Document || B instanceof ShadowRoot) && B.activeElement === e && e.type !== "range" && (s && A === t || r && e.value.trim() === a) || (e.value = a);
  }
}, DA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, A, t) {
    e[at] = mr(t), ot(e, "change", () => {
      const s = e._modelValue, r = Rf(e), n = e.checked, o = e[at];
      if (V(s)) {
        const i = ea(s, r), a = i !== -1;
        if (n && !a)
          o(s.concat(r));
        else if (!n && a) {
          const B = [...s];
          B.splice(i, 1), o(B);
        }
      } else if (St(s)) {
        const i = new Set(s);
        n ? i.add(r) : i.delete(r), o(i);
      } else
        o(rc(e, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Ni,
  beforeUpdate(e, A, t) {
    e[at] = mr(t), Ni(e, A, t);
  }
};
function Ni(e, { value: A, oldValue: t }, s) {
  e._modelValue = A;
  let r;
  if (V(A))
    r = ea(A, s.props.value) > -1;
  else if (St(A))
    r = A.has(s.props.value);
  else {
    if (A === t) return;
    r = Tt(A, rc(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
function Rf(e) {
  return "_value" in e ? e._value : e.value;
}
function rc(e, A) {
  const t = A ? "_trueValue" : "_falseValue";
  return t in e ? e[t] : A;
}
const Nf = ["ctrl", "shift", "alt", "meta"], Pf = {
  stop: (e) => e.stopPropagation(),
  prevent: (e) => e.preventDefault(),
  self: (e) => e.target !== e.currentTarget,
  ctrl: (e) => !e.ctrlKey,
  shift: (e) => !e.shiftKey,
  alt: (e) => !e.altKey,
  meta: (e) => !e.metaKey,
  left: (e) => "button" in e && e.button !== 0,
  middle: (e) => "button" in e && e.button !== 1,
  right: (e) => "button" in e && e.button !== 2,
  exact: (e, A) => Nf.some((t) => e[`${t}Key`] && !A.includes(t))
}, zt = (e, A) => {
  if (!e) return e;
  const t = e._withMods || (e._withMods = {}), s = A.join(".");
  return t[s] || (t[s] = (r, ...n) => {
    for (let o = 0; o < A.length; o++) {
      const i = Pf[A[o]];
      if (i && i(r, A)) return;
    }
    return e(r, ...n);
  });
}, Vf = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Pi = (e, A) => {
  const t = e._withKeys || (e._withKeys = {}), s = A.join(".");
  return t[s] || (t[s] = (r) => {
    if (!("key" in r))
      return;
    const n = XA(r.key);
    if (A.some(
      (o) => o === n || Vf[o] === n
    ))
      return e(r);
  });
}, Gf = /* @__PURE__ */ CA({ patchProp: Tf }, wf);
let Vi;
function nc() {
  return Vi || (Vi = ju(Gf));
}
const Xf = (...e) => {
  nc().render(...e);
}, Gi = (...e) => {
  const A = nc().createApp(...e), { mount: t } = A;
  return A.mount = (s) => {
    const r = Wf(s);
    if (!r) return;
    const n = A._component;
    !W(n) && !n.render && !n.template && (n.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = t(r, !1, Jf(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, A;
};
function Jf(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function Wf(e) {
  return hA(e) ? document.querySelector(e) : e;
}
const Yf = ".bse-overlay[data-v-e3f0b15c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-e3f0b15c]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-e3f0b15c]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-e3f0b15c]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-e3f0b15c]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-e3f0b15c]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-e3f0b15c]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-e3f0b15c]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-e3f0b15c]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-e3f0b15c]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-e3f0b15c]{flex:1}.bse-stage[data-v-e3f0b15c]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-e3f0b15c]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", Jo = (e, A) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of A)
    t[s] = r;
  return t;
}, jf = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], Xi = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], Zf = {
  name: "BugfixScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: jf,
      colors: Xi,
      tool: "pen",
      color: Xi[0],
      // 그린 도형 목록 (되돌리기를 위해 비트맵이 아니라 도형으로 보관)
      shapes: [],
      drawing: null
    };
  },
  mounted() {
    const e = new Image();
    e.onload = () => {
      this.baseImage = e, this.lineWidth = Math.max(3, Math.round(e.naturalWidth / 400));
      const A = this.$refs.canvas;
      A && (A.width = e.naturalWidth, A.height = e.naturalHeight, this.redraw());
    }, e.src = this.src;
  },
  methods: {
    // 화면 좌표 → 캔버스(원본 이미지) 좌표
    toCanvasPoint(e) {
      const A = this.$refs.canvas, t = A.getBoundingClientRect();
      return {
        x: (e.clientX - t.left) * (A.width / t.width),
        y: (e.clientY - t.top) * (A.height / t.height)
      };
    },
    onDown(e) {
      var t, s;
      if (!this.baseImage) return;
      const A = this.toCanvasPoint(e);
      if (this.tool === "text") {
        const r = window.prompt("표시할 글자를 입력하세요");
        r && r.trim() && (this.shapes.push({ type: "text", color: this.color, width: this.lineWidth, from: A, text: r.trim() }), this.redraw());
        return;
      }
      (s = (t = e.currentTarget).setPointerCapture) == null || s.call(t, e.pointerId), this.drawing = { type: this.tool, color: this.color, width: this.lineWidth, from: A, to: A, points: [A] };
    },
    onMove(e) {
      if (!this.drawing) return;
      const A = this.toCanvasPoint(e);
      this.drawing.type === "pen" ? this.drawing.points.push(A) : this.drawing.to = A, this.redraw();
    },
    onUp() {
      if (!this.drawing) return;
      const e = this.drawing;
      this.drawing = null, (e.type === "pen" ? e.points.length > 1 : Math.hypot(e.to.x - e.from.x, e.to.y - e.from.y) > 4) && this.shapes.push(e), this.redraw();
    },
    undo() {
      this.shapes.pop(), this.redraw();
    },
    clearAll() {
      this.shapes = [], this.redraw();
    },
    redraw() {
      const e = this.$refs.canvas;
      if (!e || !this.baseImage) return;
      const A = e.getContext("2d");
      A.clearRect(0, 0, e.width, e.height), A.drawImage(this.baseImage, 0, 0), (this.drawing ? [...this.shapes, this.drawing] : this.shapes).forEach((s) => this.drawShape(A, s));
    },
    drawShape(e, A) {
      if (e.save(), e.strokeStyle = A.color, e.fillStyle = A.color, e.lineWidth = A.width, e.lineCap = "round", e.lineJoin = "round", A.type === "pen")
        e.beginPath(), A.points.forEach((t, s) => s ? e.lineTo(t.x, t.y) : e.moveTo(t.x, t.y)), e.stroke();
      else if (A.type === "rect")
        e.strokeRect(A.from.x, A.from.y, A.to.x - A.from.x, A.to.y - A.from.y);
      else if (A.type === "arrow") {
        const t = Math.atan2(A.to.y - A.from.y, A.to.x - A.from.x), s = A.width * 5;
        e.beginPath(), e.moveTo(A.from.x, A.from.y), e.lineTo(A.to.x, A.to.y), e.stroke(), e.beginPath(), e.moveTo(A.to.x, A.to.y), e.lineTo(A.to.x - s * Math.cos(t - Math.PI / 6), A.to.y - s * Math.sin(t - Math.PI / 6)), e.lineTo(A.to.x - s * Math.cos(t + Math.PI / 6), A.to.y - s * Math.sin(t + Math.PI / 6)), e.closePath(), e.fill();
      } else A.type === "text" && (e.font = `bold ${A.width * 7}px sans-serif`, e.textBaseline = "top", e.lineWidth = Math.max(2, A.width * 0.8), e.strokeStyle = "rgba(0, 0, 0, 0.85)", e.strokeText(A.text, A.from.x, A.from.y), e.fillText(A.text, A.from.x, A.from.y));
      e.restore();
    },
    apply() {
      const e = this.$refs.canvas;
      if (!e || !this.baseImage) {
        this.$emit("cancel");
        return;
      }
      this.drawing = null, this.redraw(), this.$emit("apply", e.toDataURL("image/png"));
    }
  }
}, zf = { class: "bse-overlay" }, qf = { class: "bse-toolbar" }, $f = ["onClick"], Ag = ["title", "onClick"], eg = ["disabled"], tg = ["disabled"], sg = { class: "bse-stage" };
function rg(e, A, t, s, r, n) {
  return Q(), C("div", zf, [
    u("div", qf, [
      (Q(!0), C(N, null, $(r.tools, (o) => (Q(), C("button", {
        key: o.id,
        class: Y(["bse-btn", { active: r.tool === o.id }]),
        onClick: (i) => r.tool = o.id
      }, b(o.label), 11, $f))), 128)),
      A[8] || (A[8] = u("span", { class: "bse-sep" }, null, -1)),
      (Q(!0), C(N, null, $(r.colors, (o) => (Q(), C("button", {
        key: o,
        class: Y(["bse-color", { active: r.color === o }]),
        style: vs({ background: o }),
        title: o,
        onClick: (i) => r.color = o
      }, null, 14, Ag))), 128)),
      A[9] || (A[9] = u("span", { class: "bse-sep" }, null, -1)),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[0] || (A[0] = (...o) => n.undo && n.undo(...o))
      }, "되돌리기", 8, eg),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[1] || (A[1] = (...o) => n.clearAll && n.clearAll(...o))
      }, "모두 지우기", 8, tg),
      A[10] || (A[10] = u("span", { class: "bse-spacer" }, null, -1)),
      u("button", {
        class: "bse-btn",
        onClick: A[2] || (A[2] = (o) => e.$emit("cancel"))
      }, "취소"),
      u("button", {
        class: "bse-btn bse-btn--apply",
        onClick: A[3] || (A[3] = (...o) => n.apply && n.apply(...o))
      }, "적용")
    ]),
    u("div", sg, [
      u("canvas", {
        ref: "canvas",
        class: "bse-canvas",
        onPointerdown: A[4] || (A[4] = (...o) => n.onDown && n.onDown(...o)),
        onPointermove: A[5] || (A[5] = (...o) => n.onMove && n.onMove(...o)),
        onPointerup: A[6] || (A[6] = (...o) => n.onUp && n.onUp(...o)),
        onPointercancel: A[7] || (A[7] = (...o) => n.onUp && n.onUp(...o))
      }, null, 544)
    ])
  ]);
}
const ng = /* @__PURE__ */ Jo(Zf, [["render", rg], ["styles", [Yf]], ["__scopeId", "data-v-e3f0b15c"]]), og = '.bug-target-tool[data-v-0b6144ab]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-0b6144ab]{margin:0}.bug-target[data-v-0b6144ab]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-0b6144ab]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-0b6144ab]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-0b6144ab]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-0b6144ab]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-0b6144ab]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-0b6144ab]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-0b6144ab]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-0b6144ab]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-0b6144ab]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-0b6144ab]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-0b6144ab]:hover{color:#fff}.bug-report-tabs[data-v-0b6144ab]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-0b6144ab]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-0b6144ab]:hover{color:#ccc}.bug-tab.active[data-v-0b6144ab]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-0b6144ab]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-0b6144ab]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-0b6144ab]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-0b6144ab]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-0b6144ab]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-0b6144ab]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-0b6144ab]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-0b6144ab]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-0b6144ab]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-0b6144ab]::placeholder{color:#555}.bug-report-textarea[data-v-0b6144ab]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-0b6144ab]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-0b6144ab]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-0b6144ab]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-0b6144ab]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-0b6144ab]{cursor:pointer}.log-filter-chip.error[data-v-0b6144ab]{color:#e06060}.log-filter-chip.warn[data-v-0b6144ab]{color:#c8a040}.log-filter-chip.log[data-v-0b6144ab]{color:#6080b0}.log-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-0b6144ab]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-0b6144ab]:last-child{border-bottom:none}.log-item--error[data-v-0b6144ab]{background:#c83c3c14}.log-item--warn[data-v-0b6144ab]{background:#c8a02814}.log-time[data-v-0b6144ab]{color:#555;flex-shrink:0}.log-badge-lv[data-v-0b6144ab]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-0b6144ab]{color:#e06060}.log-item--warn .log-badge-lv[data-v-0b6144ab]{color:#c8a040}.log-item--log .log-badge-lv[data-v-0b6144ab]{color:#6080b0}.log-msg[data-v-0b6144ab]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-0b6144ab]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-0b6144ab]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-0b6144ab]:hover{background:#ffffff0a}.net-item[data-v-0b6144ab]:last-child{border-bottom:none}.net-item--error[data-v-0b6144ab]{background:#c83c3c12}.net-status[data-v-0b6144ab]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-0b6144ab]{color:#60c860}.net-status.status-3xx[data-v-0b6144ab]{color:#c8c040}.net-status.status-4xx[data-v-0b6144ab]{color:#e08040}.net-status.status-5xx[data-v-0b6144ab],.net-status.status-err[data-v-0b6144ab]{color:#e06060}.net-method[data-v-0b6144ab]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-0b6144ab]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-0b6144ab]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-0b6144ab]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-0b6144ab]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-0b6144ab]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-0b6144ab]{color:#e06060}.env-group[data-v-0b6144ab]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-0b6144ab]{margin-top:8px}.env-group-title[data-v-0b6144ab]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-0b6144ab]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-0b6144ab]:last-child{border-bottom:none}.env-row span[data-v-0b6144ab]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-0b6144ab]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-0b6144ab]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-0b6144ab]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-0b6144ab]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-0b6144ab]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-0b6144ab]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-0b6144ab]{background:#6464c833;color:#ccc}.log-src-btn[data-v-0b6144ab]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-0b6144ab]{animation:spin-0b6144ab 1s linear infinite;display:inline-block}.log-src-err[data-v-0b6144ab]{color:#e06060;font-weight:700}@keyframes spin-0b6144ab{to{transform:rotate(360deg)}}.log-logger[data-v-0b6144ab]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-0b6144ab]{color:#e06060}.event-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-0b6144ab]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-0b6144ab]:last-child{border-bottom:none}.event-time[data-v-0b6144ab]{color:#555;flex-shrink:0}.event-type[data-v-0b6144ab]{color:#9ad}.env-list[data-v-0b6144ab]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-0b6144ab]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-0b6144ab]{display:flex;gap:6px}.severity-btn[data-v-0b6144ab]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-0b6144ab]:hover{color:#ccc}.severity-btn--critical.active[data-v-0b6144ab]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-0b6144ab]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-0b6144ab]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-0b6144ab]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-0b6144ab]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-0b6144ab]{color:#79a;font-size:10px}.route-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-0b6144ab]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-0b6144ab]:last-child{border-bottom:none}.route-from[data-v-0b6144ab]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-0b6144ab]{color:#555;flex-shrink:0}.route-to[data-v-0b6144ab]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-0b6144ab]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-0b6144ab]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-0b6144ab]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-0b6144ab]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-0b6144ab]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-0b6144ab]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-0b6144ab]:hover{background:#ffffff12}.bug-btn-download[data-v-0b6144ab]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-0b6144ab]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-0b6144ab]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-0b6144ab]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-0b6144ab]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-0b6144ab .7s linear infinite;flex-shrink:0}@keyframes bug-spin-0b6144ab{to{transform:rotate(360deg)}}.bug-btn-save[data-v-0b6144ab]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-0b6144ab]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-0b6144ab]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-0b6144ab]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-0b6144ab]:hover{background:#ffffff14;color:#abc}', ig = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], lg = {
  name: "BugfixReportModal",
  components: { ScreenshotEditor: ng },
  // kit: createBugfix() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this._onKeydown = (e) => {
      e.key !== "Escape" || !this.isOpen || (this.isEditingShot ? this.isEditingShot = !1 : this.close());
    }, this._onPaste = (e) => {
      var t;
      if (!this.isOpen || this.isEditingShot) return;
      const A = [...((t = e.clipboardData) == null ? void 0 : t.items) || []].find((s) => s.type.startsWith("image/"));
      A && (e.preventDefault(), this.loadShotFile(A.getAsFile()));
    }, window.addEventListener("keydown", this._onKeydown), window.addEventListener("paste", this._onPaste);
  },
  beforeUnmount() {
    window.removeEventListener("keydown", this._onKeydown), window.removeEventListener("paste", this._onPaste);
  },
  data() {
    return {
      isOpen: !1,
      tool: !1,
      // '버그 신고 도구 문제' 체크
      backdropPressed: !1,
      isEditingShot: !1,
      isCapturing: !1,
      activeTab: "basic",
      screenshotUrl: null,
      severity: "MEDIUM",
      problemDesc: "",
      reproSteps: "",
      expectedResult: "",
      allLogs: [],
      networkLogs: [],
      backendLogs: [],
      backendLogsState: "idle",
      context: null,
      logSource: "front",
      showError: !0,
      showWarn: !0,
      showLog: !1,
      showBEError: !0,
      showBEWarn: !0,
      showBEInfo: !1,
      expandedNet: null,
      copyStatus: "복사",
      isSaving: !1,
      saveStatus: "서버 저장",
      severityOptions: ig,
      project: null,
      info: {}
    };
  },
  computed: {
    hotkey() {
      var e, A, t;
      return ((t = (A = (e = this.kit) == null ? void 0 : e.options) == null ? void 0 : A.hotkeys) == null ? void 0 : t.report) || "";
    },
    projects() {
      var e;
      return ((e = this.kit) == null ? void 0 : e.projects) || [];
    },
    // canFix=false(운영자 전용) 프로젝트는 '도구 문제' 체크박스로, 나머지는 신고 대상 선택으로
    appProjects() {
      return this.projects.filter((e) => {
        var A;
        return ((A = this.info[e.key]) == null ? void 0 : A.canFix) !== !1;
      });
    },
    serverEnabled() {
      var e, A;
      return !!((A = (e = this.kit) == null ? void 0 : e.api) != null && A.enabled);
    },
    tabs() {
      var s, r;
      const e = this.backendLogsState === "ok" ? this.backendLogs.filter((n) => n.level === "ERROR").length : 0, A = this.countByLevel("error") + e || null, t = ((r = (s = this.context) == null ? void 0 : s.mutationLog) == null ? void 0 : r.length) || null;
      return [
        { id: "basic", label: "기본" },
        { id: "logs", label: "로그", badge: A },
        { id: "network", label: "네트워크", badge: this.networkLogs.filter((n) => n.error || n.status >= 400).length || null },
        { id: "state", label: "상태", badge: t },
        { id: "env", label: "컨텍스트" }
      ];
    },
    filteredLogs() {
      return this.allLogs.filter((e) => e.level === "error" ? this.showError : e.level === "warn" ? this.showWarn : this.showLog).slice(-100).reverse();
    },
    filteredBackendLogs() {
      return this.backendLogs.filter((e) => e.level === "ERROR" ? this.showBEError : e.level === "WARN" ? this.showBEWarn : this.showBEInfo);
    },
    reversedNetwork() {
      return [...this.networkLogs].reverse();
    }
  },
  methods: {
    countByLevel(e) {
      return this.allLogs.filter((A) => A.level === e).length;
    },
    countBackendByLevel(e) {
      return this.backendLogs.filter((A) => A.level === e).length;
    },
    statusClass(e) {
      return !e || e === "ERR" ? "status-err" : e >= 500 ? "status-5xx" : e >= 400 ? "status-4xx" : e >= 300 ? "status-3xx" : "status-2xx";
    },
    toggleNetDetail(e) {
      this.expandedNet = this.expandedNet === e ? null : e;
    },
    joinOrNone(e) {
      return e && e.length ? e.join(", ") : "없음";
    },
    formatPayload(e) {
      if (e == null) return "";
      if (typeof e == "string") return e.length > 120 ? e.slice(0, 120) + "…" : e;
      try {
        const A = JSON.stringify(e);
        return A.length > 120 ? A.slice(0, 120) + "…" : A;
      } catch {
        return String(e);
      }
    },
    async fetchBackendLogs() {
      var e, A;
      if (!((A = (e = this.kit) == null ? void 0 : e.options) != null && A.backendLogs)) {
        this.backendLogsState = "skipped";
        return;
      }
      this.backendLogsState = "loading";
      try {
        this.backendLogs = await this.kit.fetchBackendLogs() ?? [], this.backendLogsState = "ok";
      } catch {
        this.backendLogsState = "error";
      }
    },
    hasNetworkError() {
      return this.networkLogs.some((e) => e.error || e.status && e.status >= 400);
    },
    open() {
      return this.openReport();
    },
    setProject(e) {
      var A;
      (A = this.kit) == null || A.setProject(e), this.project = e;
    },
    async openReport() {
      var t, s, r, n;
      if (this.isCapturing || this.isOpen) return;
      this.project = ((t = this.kit) == null ? void 0 : t.project) || null, (s = this.kit) != null && s.projectInfo && this.kit.projectInfo().then((o) => {
        this.info = { ...o };
      }), this.problemDesc = "", this.reproSteps = "", this.expectedResult = "", this.tool = !1, this.severity = "MEDIUM", this.screenshotUrl = null, this.activeTab = "basic", this.expandedNet = null, this.logSource = "front", this.allLogs = ((r = this.kit) == null ? void 0 : r.getLogs()) ?? [], this.networkLogs = ((n = this.kit) == null ? void 0 : n.getNetwork()) ?? [], this.backendLogs = [], this.backendLogsState = "idle", this.isCapturing = !0, await this.$nextTick();
      const e = [this.kit ? this.kit.captureScreen() : Promise.reject(new Error("kit 없음"))];
      this.hasNetworkError() ? e.push(this.fetchBackendLogs()) : this.backendLogsState = "skipped";
      const [A] = await Promise.allSettled(e);
      A.status === "fulfilled" ? this.screenshotUrl = A.value : console.warn("[BugReport] 캡처 실패:", A.reason), this.context = this.safeCaptureContext(), this.isCapturing = !1, this.isOpen = !0;
    },
    // 컨텍스트 수집이 실패해도 모달은 열려야 한다
    // (예외가 나면 isCapturing이 true로 남아 캡처 오버레이에서 멈춘다)
    safeCaptureContext() {
      var e;
      try {
        return ((e = this.kit) == null ? void 0 : e.captureContext()) ?? null;
      } catch (A) {
        return console.error("[BugReport] 컨텍스트 수집 실패:", A), null;
      }
    },
    async recapture() {
      this.isCapturing = !0, this.isOpen = !1, await this.$nextTick();
      try {
        this.screenshotUrl = await this.kit.captureScreen();
      } catch (e) {
        console.warn("[BugReport] 캡처 실패:", e);
      }
      this.context = this.safeCaptureContext(), this.isCapturing = !1, this.isOpen = !0;
    },
    close() {
      this.isOpen = !1, this.isEditingShot = !1, this.screenshotUrl = null;
    },
    onShotEdited(e) {
      this.screenshotUrl = e, this.isEditingShot = !1;
    },
    onShotFile(e) {
      var t;
      const A = (t = e.target.files) == null ? void 0 : t[0];
      e.target.value = "", this.loadShotFile(A);
    },
    // 사용자가 고른(붙여넣은) 이미지를 PNG dataURL 로 바꿔 스크린샷 자리에 넣는다
    loadShotFile(e) {
      if (!e || !e.type.startsWith("image/")) return;
      const A = URL.createObjectURL(e), t = new Image();
      t.onload = () => {
        const s = document.createElement("canvas");
        s.width = t.naturalWidth, s.height = t.naturalHeight, s.getContext("2d").drawImage(t, 0, 0), this.screenshotUrl = s.toDataURL("image/png"), URL.revokeObjectURL(A);
      }, t.onerror = () => URL.revokeObjectURL(A), t.src = A;
    },
    // 저장 목록: Vue 앱은 open-viewer 이벤트로, Web Component 는 kit 이 붙여 둔 뷰어를 직접 연다
    openViewer() {
      var e, A;
      this.$emit("open-viewer"), this.close(), (A = (e = this.kit) == null ? void 0 : e.openViewer) == null || A.call(e);
    },
    buildReport() {
      var e, A, t, s;
      return {
        severity: this.severity,
        problem: this.problemDesc,
        reproSteps: this.reproSteps,
        expectedResult: this.expectedResult,
        context: this.context,
        frontendLogs: ((e = this.kit) == null ? void 0 : e.getLogs()) ?? [],
        backendLogs: this.backendLogs,
        network: ((A = this.kit) == null ? void 0 : A.getNetwork()) ?? [],
        mutationLog: ((t = this.kit) == null ? void 0 : t.getMutations()) ?? [],
        routeHistory: ((s = this.kit) == null ? void 0 : s.getRoutes()) ?? []
      };
    },
    async copyToClipboard() {
      try {
        const e = this.buildReport();
        await navigator.clipboard.writeText(JSON.stringify(e, null, 2)), this.copyStatus = "복사됨 ✓", setTimeout(() => {
          this.copyStatus = "복사";
        }, 2e3);
      } catch {
        this.copyStatus = "실패", setTimeout(() => {
          this.copyStatus = "복사";
        }, 2e3);
      }
    },
    async saveToServer() {
      this.isSaving = !0, this.saveStatus = "저장 중...";
      try {
        const e = this.buildReport(), A = {
          severity: this.severity,
          problem: this.problemDesc,
          tool: this.tool,
          reproSteps: this.reproSteps,
          expectedResult: this.expectedResult,
          screenshot: this.screenshotUrl,
          contextJson: JSON.stringify(e.context),
          frontendLogs: JSON.stringify(e.frontendLogs),
          backendLogs: JSON.stringify(e.backendLogs),
          networkLogs: JSON.stringify(e.network),
          mutationLog: JSON.stringify(e.mutationLog)
        };
        await this.kit.api.save(A), this.saveStatus = "저장됨 ✓", setTimeout(() => {
          this.saveStatus = "서버 저장";
        }, 3e3);
      } catch (e) {
        console.error("[BugReport] 서버 저장 실패:", e), this.saveStatus = "저장 실패", setTimeout(() => {
          this.saveStatus = "서버 저장";
        }, 3e3);
      } finally {
        this.isSaving = !1;
      }
    },
    download() {
      const e = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19), A = this.severity.toLowerCase();
      if (this.screenshotUrl) {
        const n = document.createElement("a");
        n.href = this.screenshotUrl, n.download = `bug-screenshot_${A}_${e}.png`, n.click();
      }
      const t = this.buildReport(), s = new Blob([JSON.stringify(t, null, 2)], { type: "application/json" }), r = document.createElement("a");
      r.href = URL.createObjectURL(s), r.download = `bug-report_${A}_${e}.json`, setTimeout(() => {
        r.click(), URL.revokeObjectURL(r.href);
      }, 300), this.close();
    }
  }
}, ag = { class: "bugfix-root" }, cg = {
  key: 0,
  class: "bug-capture-overlay"
}, Bg = { class: "bug-report-modal" }, ug = { class: "bug-report-header" }, fg = { class: "bug-report-title" }, gg = {
  key: 0,
  class: "bug-report-shortcut"
}, dg = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, hg = ["onClick"], pg = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, wg = { class: "bug-report-tabs" }, Qg = ["onClick"], Cg = {
  key: 0,
  class: "bug-tab-badge"
}, bg = { class: "bug-report-body" }, Ug = { class: "bug-report-section" }, Fg = { class: "bug-report-label" }, mg = ["disabled"], xg = ["disabled"], Eg = ["src"], yg = {
  key: 1,
  class: "screenshot-placeholder"
}, vg = {
  key: 2,
  class: "screenshot-placeholder"
}, Hg = { class: "bug-report-section" }, Ig = { class: "severity-group" }, _g = ["onClick"], Lg = { class: "bug-report-section" }, Sg = { class: "bug-report-section" }, Kg = { class: "bug-report-section" }, Tg = { class: "bug-report-section" }, kg = { class: "included-chips" }, Dg = { class: "chip" }, Og = { class: "chip" }, Mg = {
  key: 0,
  class: "chip"
}, Rg = {
  key: 1,
  class: "chip"
}, Ng = { class: "log-source-toggle" }, Pg = {
  key: 0,
  class: "log-src-spin"
}, Vg = {
  key: 1,
  class: "log-src-err"
}, Gg = {
  key: 0,
  class: "bug-report-section"
}, Xg = { class: "bug-report-label" }, Jg = { class: "log-filter-group" }, Wg = { class: "log-filter-chip error" }, Yg = { class: "log-filter-chip warn" }, jg = { class: "log-filter-chip log" }, Zg = { class: "log-list" }, zg = { class: "log-time" }, qg = { class: "log-badge-lv" }, $g = { class: "log-msg" }, Ad = {
  key: 0,
  class: "log-empty"
}, ed = {
  key: 1,
  class: "bug-report-section"
}, td = { class: "bug-report-label" }, sd = { class: "log-filter-group" }, rd = { class: "log-filter-chip error" }, nd = { class: "log-filter-chip warn" }, od = { class: "log-filter-chip log" }, id = {
  key: 0,
  class: "log-empty"
}, ld = {
  key: 1,
  class: "log-empty"
}, ad = {
  key: 2,
  class: "log-empty log-empty--error"
}, cd = {
  key: 3,
  class: "log-list"
}, Bd = { class: "log-time" }, ud = { class: "log-badge-lv" }, fd = { class: "log-logger" }, gd = { class: "log-msg" }, dd = {
  key: 0,
  class: "log-empty"
}, hd = {
  key: 2,
  class: "bug-report-section"
}, pd = { class: "net-list" }, wd = ["onClick"], Qd = { class: "net-method" }, Cd = { class: "net-url" }, bd = { class: "net-dur" }, Ud = { class: "net-time" }, Fd = {
  key: 0,
  class: "net-detail"
}, md = { key: 0 }, xd = { key: 1 }, Ed = { key: 2 }, yd = {
  key: 3,
  class: "net-error-msg"
}, vd = {
  key: 0,
  class: "log-empty"
}, Hd = { class: "bug-report-section" }, Id = { class: "log-list" }, _d = { class: "log-time" }, Ld = { class: "mutation-type" }, Sd = {
  key: 0,
  class: "log-msg mutation-payload"
}, Kd = {
  key: 0,
  class: "log-empty"
}, Td = { class: "bug-report-section" }, kd = { class: "route-list" }, Dd = { class: "log-time" }, Od = { class: "route-from" }, Md = { class: "route-to" }, Rd = {
  key: 0,
  class: "log-empty"
}, Nd = {
  key: 0,
  class: "bug-report-section"
}, Pd = { class: "env-group" }, Vd = {
  key: 1,
  class: "bug-report-section"
}, Gd = { class: "env-group" }, Xd = { class: "env-row" }, Jd = { class: "env-row" }, Wd = { class: "env-row" }, Yd = { class: "env-row" }, jd = { class: "env-row" }, Zd = {
  key: 0,
  class: "bug-report-section"
}, zd = {
  key: 1,
  class: "bug-report-section"
}, qd = {
  key: 0,
  class: "env-group"
}, $d = { class: "env-row" }, Ah = {
  key: 0,
  class: "env-row"
}, eh = {
  key: 1,
  class: "env-row"
}, th = { class: "env-group" }, sh = { class: "env-row" }, rh = { class: "env-row" }, nh = { class: "env-row" }, oh = { class: "env-row" }, ih = { class: "env-row" }, lh = { class: "env-group" }, ah = { class: "env-row" }, ch = { class: "env-row" }, Bh = { class: "env-row" }, uh = { class: "env-list" }, fh = { key: 0 }, gh = { class: "env-row" }, dh = { class: "env-list" }, hh = { key: 0 }, ph = {
  key: 0,
  class: "env-row"
}, wh = { class: "env-list" }, Qh = {
  key: 1,
  class: "env-row"
}, Ch = { class: "env-list" }, bh = { class: "env-group" }, Uh = { class: "event-list" }, Fh = { class: "event-time" }, mh = { class: "event-type" }, xh = {
  key: 0,
  class: "log-empty"
}, Eh = {
  key: 1,
  class: "env-group"
}, yh = { class: "env-row" }, vh = { class: "env-row" }, Hh = { class: "env-row" }, Ih = { class: "env-row" }, _h = { class: "env-group" }, Lh = { class: "env-row" }, Sh = { class: "env-row" }, Kh = {
  key: 0,
  class: "env-row"
}, Th = {
  key: 1,
  class: "env-row"
}, kh = { class: "env-row" }, Dh = { class: "bug-report-footer" }, Oh = ["disabled", "title"], Mh = ["disabled"], Rh = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, Nh = ["disabled"];
function Ph(e, A, t, s, r, n) {
  var i, a, B, l, c, f, h, w, U, E, I, x;
  const o = xu("ScreenshotEditor");
  return Q(), C("div", ag, [
    r.isCapturing && !r.isOpen ? (Q(), C("div", cg, [...A[27] || (A[27] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        J(" 화면 캡처 중... ")
      ], -1)
    ])])) : L("", !0),
    r.isOpen ? (Q(), C("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: A[25] || (A[25] = (d) => r.backdropPressed = d.target === d.currentTarget),
      onClick: A[26] || (A[26] = zt((d) => r.backdropPressed && n.close(), ["self"]))
    }, [
      r.isEditingShot && r.screenshotUrl ? (Q(), qa(o, {
        key: 0,
        src: r.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: A[0] || (A[0] = (d) => r.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : L("", !0),
      u("div", Bg, [
        u("div", ug, [
          u("span", fg, [
            A[28] || (A[28] = J("버그 신고 ", -1)),
            n.hotkey ? (Q(), C("span", gg, b(n.hotkey), 1)) : L("", !0)
          ]),
          n.appProjects.length > 1 ? (Q(), C("span", dg, [
            (Q(!0), C(N, null, $(n.appProjects, (d) => (Q(), C("button", {
              key: d.key,
              class: Y({ "bug-target__on": r.project === d.key }),
              onClick: (m) => n.setProject(d.key)
            }, b(d.label), 11, hg))), 128))
          ])) : L("", !0),
          (a = (i = t.kit) == null ? void 0 : i.api) != null && a.enabled ? (Q(), C("label", pg, [
            FA(u("input", {
              type: "checkbox",
              "onUpdate:modelValue": A[1] || (A[1] = (d) => r.tool = d)
            }, null, 512), [
              [DA, r.tool]
            ]),
            A[29] || (A[29] = J(" 버그 신고 도구 문제 ", -1))
          ])) : L("", !0),
          u("button", {
            class: "bug-report-close",
            onClick: A[2] || (A[2] = (...d) => n.close && n.close(...d))
          }, "✕")
        ]),
        u("div", wg, [
          (Q(!0), C(N, null, $(n.tabs, (d) => (Q(), C("button", {
            key: d.id,
            class: Y(["bug-tab", { active: r.activeTab === d.id }]),
            onClick: (m) => r.activeTab = d.id
          }, [
            J(b(d.label) + " ", 1),
            d.badge ? (Q(), C("span", Cg, b(d.badge), 1)) : L("", !0)
          ], 10, Qg))), 128))
        ]),
        u("div", bg, [
          r.activeTab === "basic" ? (Q(), C(N, { key: 0 }, [
            u("div", Ug, [
              u("div", Fg, [
                A[30] || (A[30] = J(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[3] || (A[3] = (...d) => n.recapture && n.recapture(...d)),
                  disabled: r.isCapturing
                }, b(r.isCapturing ? "캡처 중..." : "다시 찍기"), 9, mg),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[4] || (A[4] = (d) => r.isEditingShot = !0),
                  disabled: !r.screenshotUrl
                }, "그리기·표시", 8, xg),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[5] || (A[5] = (d) => e.$refs.shotFile.click())
                }, "이미지 불러오기"),
                u("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: A[6] || (A[6] = (...d) => n.onShotFile && n.onShotFile(...d))
                }, null, 544)
              ]),
              u("div", {
                class: Y(["screenshot-wrap", { "screenshot-wrap--editable": r.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: A[7] || (A[7] = (d) => r.screenshotUrl && (r.isEditingShot = !0))
              }, [
                r.screenshotUrl ? (Q(), C("img", {
                  key: 0,
                  src: r.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, Eg)) : r.isCapturing ? (Q(), C("div", yg, "캡처 중...")) : (Q(), C("div", vg, "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다"))
              ], 2),
              A[31] || (A[31] = u("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            u("div", Hg, [
              A[32] || (A[32] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", Ig, [
                (Q(!0), C(N, null, $(r.severityOptions, (d) => (Q(), C("button", {
                  key: d.value,
                  class: Y(["severity-btn", `severity-btn--${d.value.toLowerCase()}`, { active: r.severity === d.value }]),
                  onClick: (m) => r.severity = d.value
                }, b(d.label), 11, _g))), 128))
              ])
            ]),
            u("div", Lg, [
              A[33] || (A[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[8] || (A[8] = (d) => r.problemDesc = d),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [ur, r.problemDesc]
              ])
            ]),
            u("div", Sg, [
              A[34] || (A[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[9] || (A[9] = (d) => r.reproSteps = d),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [ur, r.reproSteps]
              ])
            ]),
            u("div", Kg, [
              A[35] || (A[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[10] || (A[10] = (d) => r.expectedResult = d),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [ur, r.expectedResult]
              ])
            ]),
            u("div", Tg, [
              A[39] || (A[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", kg, [
                A[36] || (A[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                A[37] || (A[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", Dg, "📡 네트워크 요청 (" + b(r.networkLogs.length) + "건)", 1),
                u("span", Og, "📋 프론트 로그 (" + b(r.allLogs.length) + "건)", 1),
                u("span", {
                  class: Y(["chip", r.backendLogsState === "ok" ? "chip--ok" : r.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + b(r.backendLogsState === "ok" ? r.backendLogs.length + "건" : r.backendLogsState === "loading" ? "로딩 중" : r.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : r.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (B = r.context) != null && B.camera ? (Q(), C("span", Mg, "📍 카메라 위치")) : L("", !0),
                A[38] || (A[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (l = r.context) != null && l.user ? (Q(), C("span", Rg, "👤 " + b(r.context.user.username), 1)) : L("", !0)
              ])
            ])
          ], 64)) : L("", !0),
          r.activeTab === "logs" ? (Q(), C(N, { key: 1 }, [
            u("div", Ng, [
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "front" }]),
                onClick: A[11] || (A[11] = (d) => r.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "backend" }]),
                onClick: A[12] || (A[12] = (d) => r.logSource = "backend")
              }, [
                A[40] || (A[40] = J(" 백엔드 ", -1)),
                r.backendLogsState === "loading" ? (Q(), C("span", Pg, "⟳")) : r.backendLogsState === "error" ? (Q(), C("span", Vg, "!")) : L("", !0)
              ], 2)
            ]),
            r.logSource === "front" ? (Q(), C("div", Gg, [
              u("div", Xg, [
                A[41] || (A[41] = J(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", Jg, [
                  u("label", Wg, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[13] || (A[13] = (d) => r.showError = d)
                    }, null, 512), [
                      [DA, r.showError]
                    ]),
                    J(" 오류 (" + b(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", Yg, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[14] || (A[14] = (d) => r.showWarn = d)
                    }, null, 512), [
                      [DA, r.showWarn]
                    ]),
                    J(" 경고 (" + b(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", jg, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[15] || (A[15] = (d) => r.showLog = d)
                    }, null, 512), [
                      [DA, r.showLog]
                    ]),
                    J(" 로그 (" + b(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", Zg, [
                (Q(!0), C(N, null, $(n.filteredLogs, (d, m) => (Q(), C("div", {
                  key: m,
                  class: Y(["log-item", `log-item--${d.level}`])
                }, [
                  u("span", zg, b(d.time.slice(11)), 1),
                  u("span", qg, b(d.level), 1),
                  u("span", $g, b(d.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (Q(), C("div", Ad, "표시할 로그가 없습니다")) : L("", !0)
              ])
            ])) : L("", !0),
            r.logSource === "backend" ? (Q(), C("div", ed, [
              u("div", td, [
                A[42] || (A[42] = J(" 백엔드 서버 로그 ", -1)),
                u("div", sd, [
                  u("label", rd, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[16] || (A[16] = (d) => r.showBEError = d)
                    }, null, 512), [
                      [DA, r.showBEError]
                    ]),
                    J(" ERROR (" + b(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", nd, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[17] || (A[17] = (d) => r.showBEWarn = d)
                    }, null, 512), [
                      [DA, r.showBEWarn]
                    ]),
                    J(" WARN (" + b(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", od, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[18] || (A[18] = (d) => r.showBEInfo = d)
                    }, null, 512), [
                      [DA, r.showBEInfo]
                    ]),
                    J(" INFO (" + b(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              r.backendLogsState === "loading" ? (Q(), C("div", id, "백엔드 로그 가져오는 중...")) : r.backendLogsState === "skipped" ? (Q(), C("div", ld, [
                A[43] || (A[43] = J(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: A[19] || (A[19] = (...d) => n.fetchBackendLogs && n.fetchBackendLogs(...d))
                }, "그래도 가져오기")
              ])) : r.backendLogsState === "error" ? (Q(), C("div", ad, "백엔드 로그 조회 실패 (인증 확인)")) : (Q(), C("div", cd, [
                (Q(!0), C(N, null, $(n.filteredBackendLogs, (d, m) => (Q(), C("div", {
                  key: m,
                  class: Y(["log-item", `log-item--${d.level.toLowerCase()}`])
                }, [
                  u("span", Bd, b(d.time.slice(11)), 1),
                  u("span", ud, b(d.level), 1),
                  u("span", fd, b(d.logger), 1),
                  u("span", gd, b(d.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (Q(), C("div", dd, "표시할 로그가 없습니다")) : L("", !0)
              ]))
            ])) : L("", !0)
          ], 64)) : L("", !0),
          r.activeTab === "network" ? (Q(), C("div", hd, [
            A[51] || (A[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", pd, [
              (Q(!0), C(N, null, $(n.reversedNetwork, (d, m) => {
                var S;
                return Q(), C(N, { key: m }, [
                  u("div", {
                    class: Y(["net-item", d.error || d.status >= 400 ? "net-item--error" : ""]),
                    onClick: (G) => n.toggleNetDetail(m)
                  }, [
                    u("span", {
                      class: Y(["net-status", n.statusClass(d.status)])
                    }, b(d.status), 3),
                    u("span", Qd, b(d.method), 1),
                    u("span", Cd, b(d.url), 1),
                    u("span", bd, b(d.duration) + "ms", 1),
                    u("span", Ud, b((S = d.time) == null ? void 0 : S.slice(11, 19)), 1)
                  ], 10, wd),
                  r.expandedNet === m ? (Q(), C("div", Fd, [
                    d.params ? (Q(), C("div", md, [
                      A[44] || (A[44] = u("b", null, "Params:", -1)),
                      A[45] || (A[45] = J()),
                      u("code", null, b(d.params), 1)
                    ])) : L("", !0),
                    d.requestBody ? (Q(), C("div", xd, [
                      A[46] || (A[46] = u("b", null, "Request:", -1)),
                      A[47] || (A[47] = J()),
                      u("code", null, b(d.requestBody), 1)
                    ])) : L("", !0),
                    d.responseBody ? (Q(), C("div", Ed, [
                      A[48] || (A[48] = u("b", null, "Response:", -1)),
                      A[49] || (A[49] = J()),
                      u("code", null, b(d.responseBody), 1)
                    ])) : L("", !0),
                    d.error ? (Q(), C("div", yd, [
                      A[50] || (A[50] = u("b", null, "Error:", -1)),
                      J(" " + b(d.error), 1)
                    ])) : L("", !0)
                  ])) : L("", !0)
                ], 64);
              }), 128)),
              r.networkLogs.length === 0 ? (Q(), C("div", vd, "기록된 요청이 없습니다")) : L("", !0)
            ])
          ])) : L("", !0),
          r.activeTab === "state" ? (Q(), C(N, { key: 3 }, [
            u("div", Hd, [
              A[52] || (A[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", Id, [
                (Q(!0), C(N, null, $(((c = r.context) == null ? void 0 : c.mutationLog) || [], (d, m) => (Q(), C("div", {
                  key: m,
                  class: "log-item"
                }, [
                  u("span", _d, b(d.time), 1),
                  u("span", Ld, b(d.type), 1),
                  d.payload !== null ? (Q(), C("span", Sd, b(n.formatPayload(d.payload)), 1)) : L("", !0)
                ]))), 128)),
                (h = (f = r.context) == null ? void 0 : f.mutationLog) != null && h.length ? L("", !0) : (Q(), C("div", Kd, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", Td, [
              A[54] || (A[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", kd, [
                (Q(!0), C(N, null, $(((w = r.context) == null ? void 0 : w.routeHistory) || [], (d, m) => (Q(), C("div", {
                  key: m,
                  class: "route-item"
                }, [
                  u("span", Dd, b(d.time), 1),
                  u("span", Od, b(d.from), 1),
                  A[53] || (A[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", Md, b(d.to), 1)
                ]))), 128)),
                (E = (U = r.context) == null ? void 0 : U.routeHistory) != null && E.length ? L("", !0) : (Q(), C("div", Rd, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (I = r.context) != null && I.storage && Object.keys(r.context.storage).length ? (Q(), C("div", Nd, [
              A[55] || (A[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", Pd, [
                (Q(!0), C(N, null, $(r.context.storage, (d, m) => (Q(), C("div", {
                  key: m,
                  class: "env-row"
                }, [
                  u("span", null, b(m), 1),
                  u("span", null, b(d), 1)
                ]))), 128))
              ])
            ])) : L("", !0),
            (x = r.context) != null && x.cesiumPerf ? (Q(), C("div", Vd, [
              A[61] || (A[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", Gd, [
                u("div", Xd, [
                  A[56] || (A[56] = u("span", null, "Primitives", -1)),
                  u("span", null, b(r.context.cesiumPerf.primitives), 1)
                ]),
                u("div", Jd, [
                  A[57] || (A[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, b(r.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", Wd, [
                  A[58] || (A[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, b(r.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", Yd, [
                  A[59] || (A[59] = u("span", null, "Shadows", -1)),
                  u("span", null, b(r.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", jd, [
                  A[60] || (A[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, b(r.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : L("", !0)
          ], 64)) : L("", !0),
          r.activeTab === "env" ? (Q(), C(N, { key: 4 }, [
            r.context ? (Q(), C("div", zd, [
              r.context.user ? (Q(), C("div", qd, [
                A[66] || (A[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", $d, [
                  A[63] || (A[63] = u("span", null, "아이디", -1)),
                  u("span", null, b(r.context.user.username), 1)
                ]),
                r.context.user.roles.length ? (Q(), C("div", Ah, [
                  A[64] || (A[64] = u("span", null, "권한", -1)),
                  u("span", null, b(r.context.user.roles.join(", ")), 1)
                ])) : L("", !0),
                r.context.user.exp ? (Q(), C("div", eh, [
                  A[65] || (A[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, b(r.context.user.exp), 1)
                ])) : L("", !0)
              ])) : L("", !0),
              u("div", th, [
                A[72] || (A[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", sh, [
                  A[67] || (A[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, b(r.context.menus.headerName), 1)
                ]),
                u("div", rh, [
                  A[68] || (A[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, b(r.context.menus.subMenuName), 1)
                ]),
                u("div", nh, [
                  A[69] || (A[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.leftMenus)), 1)
                ]),
                u("div", oh, [
                  A[70] || (A[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.openPanels)), 1)
                ]),
                u("div", ih, [
                  A[71] || (A[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", lh, [
                A[75] || (A[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", ah, [
                  A[73] || (A[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, b(r.context.activeData.mapType), 1)
                ]),
                u("div", ch, [
                  A[74] || (A[74] = u("span", null, "지형", -1)),
                  u("span", null, b(r.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", Bh, [
                  u("span", null, "데이터셋 (" + b(r.context.activeData.datasets.length) + ")", 1),
                  u("span", uh, [
                    r.context.activeData.datasets.length ? L("", !0) : (Q(), C("span", fh, "없음")),
                    (Q(!0), C(N, null, $(r.context.activeData.datasets, (d) => (Q(), C("span", {
                      key: d.layerId,
                      class: "env-tag"
                    }, b(d._displayName), 1))), 128))
                  ])
                ]),
                u("div", gh, [
                  u("span", null, "3D 타일 (" + b(r.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", dh, [
                    r.context.activeData.threeDTiles.length ? L("", !0) : (Q(), C("span", hh, "없음")),
                    (Q(!0), C(N, null, $(r.context.activeData.threeDTiles, (d) => (Q(), C("span", {
                      key: d.threeDTilesId || d.sourceId,
                      class: "env-tag"
                    }, b(d._displayName), 1))), 128))
                  ])
                ]),
                r.context.activeData.autoPlacement.length ? (Q(), C("div", ph, [
                  u("span", null, "배치안 (" + b(r.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", wh, [
                    (Q(!0), C(N, null, $(r.context.activeData.autoPlacement, (d) => (Q(), C("span", {
                      key: d.sourceId,
                      class: "env-tag"
                    }, b(d._displayName), 1))), 128))
                  ])
                ])) : L("", !0),
                r.context.activeData.topicMaps.length ? (Q(), C("div", Qh, [
                  u("span", null, "주제도 (" + b(r.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Ch, [
                    (Q(!0), C(N, null, $(r.context.activeData.topicMaps, (d) => (Q(), C("span", {
                      key: d.key,
                      class: "env-tag"
                    }, b(d._displayName), 1))), 128))
                  ])
                ])) : L("", !0)
              ]),
              u("div", bh, [
                A[76] || (A[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", Uh, [
                  (Q(!0), C(N, null, $(r.context.recentEvents.slice(0, 30), (d, m) => (Q(), C("div", {
                    key: m,
                    class: "event-item"
                  }, [
                    u("span", Fh, b(d.time), 1),
                    u("span", mh, b(d.type), 1)
                  ]))), 128)),
                  r.context.recentEvents.length ? L("", !0) : (Q(), C("div", xh, "기록된 이벤트 없음"))
                ])
              ]),
              r.context.camera ? (Q(), C("div", Eh, [
                A[81] || (A[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", yh, [
                  A[77] || (A[77] = u("span", null, "경도", -1)),
                  u("span", null, b(r.context.camera.longitude), 1)
                ]),
                u("div", vh, [
                  A[78] || (A[78] = u("span", null, "위도", -1)),
                  u("span", null, b(r.context.camera.latitude), 1)
                ]),
                u("div", Hh, [
                  A[79] || (A[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, b(r.context.camera.height), 1)
                ]),
                u("div", Ih, [
                  A[80] || (A[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, b(r.context.camera.heading) + "° / " + b(r.context.camera.pitch) + "°", 1)
                ])
              ])) : L("", !0),
              u("div", _h, [
                A[87] || (A[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", Lh, [
                  A[82] || (A[82] = u("span", null, "일시", -1)),
                  u("span", null, b(r.context.datetime), 1)
                ]),
                u("div", Sh, [
                  A[83] || (A[83] = u("span", null, "해상도", -1)),
                  u("span", null, b(r.context.screen.resolution) + " · 뷰포트 " + b(r.context.screen.viewport), 1)
                ]),
                r.context.memory ? (Q(), C("div", Kh, [
                  A[84] || (A[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, b(r.context.memory.usedMB) + "MB / " + b(r.context.memory.limitMB) + "MB", 1)
                ])) : L("", !0),
                r.context.connection ? (Q(), C("div", Th, [
                  A[85] || (A[85] = u("span", null, "네트워크", -1)),
                  u("span", null, b(r.context.connection.effectiveType) + " · " + b(r.context.connection.downlink) + "Mbps", 1)
                ])) : L("", !0),
                u("div", kh, [
                  A[86] || (A[86] = u("span", null, "언어", -1)),
                  u("span", null, b(r.context.browser.language), 1)
                ])
              ])
            ])) : (Q(), C("div", Zd, [...A[62] || (A[62] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : L("", !0)
        ]),
        u("div", Dh, [
          n.serverEnabled ? (Q(), C("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: A[20] || (A[20] = (...d) => n.openViewer && n.openViewer(...d))
          }, "저장 목록")) : L("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: A[21] || (A[21] = (...d) => n.close && n.close(...d))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: A[22] || (A[22] = (...d) => n.copyToClipboard && n.copyToClipboard(...d)),
            disabled: !r.screenshotUrl,
            title: r.copyStatus
          }, [
            A[88] || (A[88] = u("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              u("rect", {
                x: "9",
                y: "9",
                width: "13",
                height: "13",
                rx: "2"
              }),
              u("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
            ], -1)),
            J(" " + b(r.copyStatus), 1)
          ], 8, Oh),
          n.serverEnabled ? (Q(), C("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: A[23] || (A[23] = (...d) => n.saveToServer && n.saveToServer(...d)),
            disabled: r.isSaving || r.isCapturing
          }, [
            r.isSaving ? (Q(), C("span", Rh)) : L("", !0),
            J(" " + b(r.saveStatus), 1)
          ], 8, Mh)) : L("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: A[24] || (A[24] = (...d) => n.download && n.download(...d)),
            disabled: r.isCapturing
          }, " 다운로드 ", 8, Nh)
        ])
      ])
    ], 32)) : L("", !0)
  ]);
}
const Vh = /* @__PURE__ */ Jo(lg, [["render", Ph], ["styles", [og]], ["__scopeId", "data-v-0b6144ab"]]), Gh = ".brv-projects[data-v-e3220c88]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-e3220c88]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-e3220c88]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-e3220c88]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-e3220c88]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-e3220c88]{margin:0!important}.brv-ai__tools[data-v-e3220c88]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-e3220c88]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-e3220c88]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-e3220c88]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-e3220c88]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-e3220c88]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-e3220c88]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-e3220c88]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-e3220c88]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-e3220c88]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-e3220c88]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-e3220c88]{display:block;font-family:inherit}.brv-kg__col[data-v-e3220c88]{font-size:10px;fill:#889}.brv-kg__label[data-v-e3220c88]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-e3220c88]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-e3220c88]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-e3220c88]{opacity:.25}.brv-kg__edge[data-v-e3220c88]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-e3220c88]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-e3220c88]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-e3220c88],.brv-kg__edge--writes[data-v-e3220c88]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-e3220c88]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-e3220c88]{opacity:.12}.brv-shots[data-v-e3220c88]{margin:8px 0 6px}.brv-shots__title[data-v-e3220c88]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-e3220c88]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-e3220c88]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-e3220c88],.brv-shots__ph[data-v-e3220c88]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-e3220c88]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-e3220c88]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-e3220c88]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-e3220c88]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-e3220c88]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-e3220c88]{font-weight:600}.brv-ai__branch[data-v-e3220c88]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-e3220c88]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-e3220c88]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-e3220c88]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-e3220c88]{flex:1;margin:0}.brv-chat__btns[data-v-e3220c88]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-e3220c88]{white-space:nowrap}.brv-chat__input[data-v-e3220c88]{font-family:inherit}.brv-chat__text[data-v-e3220c88]{color:#d0d6de}.brv-chat__msg--user .brv-chat__text[data-v-e3220c88]{color:#e6ebf2}.brv-notice[data-v-e3220c88]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-e3220c88]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-e3220c88]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-e3220c88]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-e3220c88],.brv-log-list[data-v-e3220c88],.brv-net-detail[data-v-e3220c88],.brv-text[data-v-e3220c88]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-e3220c88]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-e3220c88]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-e3220c88]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-e3220c88]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-e3220c88]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-e3220c88]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-e3220c88]:hover{color:#fff}.brv-body[data-v-e3220c88]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-e3220c88]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-e3220c88]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-e3220c88]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-e3220c88]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-e3220c88]:hover{background:#ffffff12}.brv-problem[data-v-e3220c88]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-e3220c88]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-e3220c88]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-e3220c88]:hover{color:#e74c3c}.brv-badge[data-v-e3220c88]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-e3220c88]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-e3220c88]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-e3220c88]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-e3220c88]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-e3220c88]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-e3220c88]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-e3220c88]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-e3220c88]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-e3220c88]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-e3220c88]{background:#7888992e;color:#89a}.brv-status-control[data-v-e3220c88]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-e3220c88]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-e3220c88]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-e3220c88]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-e3220c88]{width:11px;height:11px;border-width:2px}.brv-back[data-v-e3220c88]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-e3220c88]:hover{color:#fff}.brv-screenshot[data-v-e3220c88]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-e3220c88]{margin-bottom:16px}.brv-fix[data-v-e3220c88]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-e3220c88]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-e3220c88]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-e3220c88]{background:#e0f2fe;color:#075985}.brv-fix--ready[data-v-e3220c88]{background:#ccfbf1;color:#115e59}.brv-fix--merged[data-v-e3220c88]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-e3220c88]{background:#fee2e2;color:#991b1b}.brv-link[data-v-e3220c88]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-e3220c88]{margin-top:6px}.brv-fix-actions[data-v-e3220c88]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-e3220c88]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-e3220c88]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-e3220c88]{background:transparent;color:#2563eb}.brv-hint[data-v-e3220c88]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-e3220c88]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-e3220c88]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-e3220c88]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-e3220c88]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-e3220c88]{color:inherit}.brv-suggest[data-v-e3220c88]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-e3220c88]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-e3220c88]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-e3220c88]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-e3220c88]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-e3220c88]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-e3220c88]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-e3220c88]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-e3220c88]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-e3220c88]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-e3220c88]{color:#1e5bb8}.brv-chat__text[data-v-e3220c88]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-e3220c88]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-e3220c88]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-e3220c88]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-e3220c88]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-e3220c88]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-e3220c88]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-e3220c88]{margin-bottom:8px}.brv-field-label[data-v-e3220c88]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-e3220c88]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:pre-wrap;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-e3220c88]{display:flex;gap:4px}.brv-log-tab[data-v-e3220c88]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-e3220c88]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-e3220c88]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-e3220c88]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-e3220c88]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-e3220c88]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-e3220c88]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-e3220c88]:hover{background:#ffffff0f}.brv-filter-error[data-v-e3220c88]{color:#c06060}.brv-filter-warn[data-v-e3220c88]{color:#b09040}.brv-filter-log[data-v-e3220c88]{color:#589}.brv-log-list[data-v-e3220c88]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-e3220c88]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-e3220c88]:hover{background:#ffffff0a}.brv-log-item[data-v-e3220c88]:last-child{border-bottom:none}.brv-log-time[data-v-e3220c88]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-e3220c88]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-e3220c88]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-e3220c88]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-e3220c88]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-e3220c88]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-e3220c88]{color:#8ac;font-weight:600}.brv-log--error[data-v-e3220c88]{color:#e87070}.brv-log--warn[data-v-e3220c88]{color:#d4a84b}.brv-log--info[data-v-e3220c88]{color:#a8b8c8}.brv-log-empty[data-v-e3220c88]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-e3220c88]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-e3220c88]:hover{background:#ffffff0a}.brv-net-err[data-v-e3220c88]{background:#e74c3c0d}.brv-net-status[data-v-e3220c88]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-e3220c88]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-e3220c88]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-e3220c88],.st-5xx[data-v-e3220c88]{color:#e87070}.st-4xx[data-v-e3220c88]{color:#d4a84b}.st-3xx[data-v-e3220c88]{color:#8ac}.st-2xx[data-v-e3220c88]{color:#6c8}.brv-net-detail[data-v-e3220c88]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-e3220c88]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-e3220c88 .7s linear infinite}@keyframes brv-spin-e3220c88{to{transform:rotate(360deg)}}", Xh = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  READY: "수정본 준비 · 아직 내보내지 않음(콘솔에서 PR·병합)",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  FAILED: "실패 · 진행 로그 확인"
}, Jh = { QUEUED: "대기", RUNNING: "수정중", READY: "준비", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패" }, Ji = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], Wh = {
  name: "BugfixViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      STATUSES: Ji,
      isOpen: !1,
      backdropPressed: !1,
      loading: !1,
      list: [],
      selected: null,
      detail: null,
      detailLoading: !1,
      statusSaving: !1,
      fixBusy: !1,
      chatInput: "",
      now: Date.now(),
      notice: null,
      canFix: !0,
      // 프로젝트 설정(fixFrom) - 앱 사용자에게 수정 요청을 열어 두었는가
      kg: null,
      // 이 신고의 관련 부분 그래프 { nodes, edges }
      kgHover: null,
      shotUrls: {},
      // fixShots file → object URL
      bigShot: null,
      // 크게 보는 스크린샷
      project: null,
      info: {},
      logTab: "front",
      expanded: /* @__PURE__ */ new Set(),
      showFE: { error: !0, warn: !0, log: !1 },
      showBE: { error: !0, warn: !0, info: !1 },
      showNet: { error: !0, ok: !1 }
    };
  },
  computed: {
    hotkey() {
      var e, A, t;
      return ((t = (A = (e = this.kit) == null ? void 0 : e.options) == null ? void 0 : A.hotkeys) == null ? void 0 : t.viewer) || "";
    },
    projects() {
      var e;
      return ((e = this.kit) == null ? void 0 : e.projects) || [];
    },
    // 앱 사용자에게는 고칠 수 있는(canFix) 프로젝트만 보인다. 관리 콘솔(adminKey)은 목록을 한데 모아 보여 주고 프로젝트를 골라 열므로 전환 탭이 없다
    // 도구 문제 리포트는 이 프로젝트 코드와 무관하므로 수정 UI 를 두지 않는다
    fixable() {
      var e;
      return this.canFix && !((e = this.detail) != null && e.tool);
    },
    /** 관련 부분 그래프를 층(열)으로 배치한 SVG 좌표 - 열: 화면·메뉴 / 기능 / 파일 / API / 백엔드 / 테이블 */
    kgLayout() {
      var h;
      const e = this.kg;
      if (!((h = e == null ? void 0 : e.nodes) != null && h.length)) return null;
      const A = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, s = 30, r = 22, n = 26, o = A.map((w) => e.nodes.filter((U) => w.layers.includes(U.layer))).map((w, U) => ({ ...A[U], ns: w })).filter((w) => w.ns.length), i = [], a = [];
      let B = 8;
      for (const w of o)
        a.push({ layer: w.layers[0], x: B, title: w.title }), w.ns.sort((U, E) => E.hit - U.hit || (E.score || 0) - (U.score || 0)), w.ns.forEach((U, E) => {
          const I = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          i.push({ ...U, x: B, y: r + E * s, w: t - n, h: 20, short: I });
        }), B += t;
      const l = new Map(i.map((w) => [w.id, w])), c = [];
      for (const w of e.edges) {
        const U = l.get(w.from), E = l.get(w.to);
        if (!U || !E || U === E) continue;
        const [I, x] = U.x <= E.x ? [U, E] : [E, U], d = I.x + I.w, m = I.y + I.h / 2, S = x.x, G = x.y + x.h / 2, nA = I.x === x.x ? `M${d},${m} C${d + 18},${m} ${S + I.w + 18},${G} ${S + I.w},${G}` : `M${d},${m} C${(d + S) / 2},${m} ${(d + S) / 2},${G} ${S},${G}`;
        c.push({ d: nA, rel: w.rel, from: w.from, to: w.to });
      }
      const f = r + Math.max(...o.map((w) => w.ns.length)) * s + 4;
      return { nodes: i, edges: c, cols: a, w: B + 4, h: f };
    },
    fixShots() {
      var e;
      try {
        return (e = this.detail) != null && e.fixShots ? JSON.parse(this.detail.fixShots) : [];
      } catch {
        return [];
      }
    },
    viewProjects() {
      var e, A;
      return (A = (e = this.kit) == null ? void 0 : e.options) != null && A.adminKey ? [] : this.projects.filter((t) => {
        var s;
        return ((s = this.info[t.key]) == null ? void 0 : s.canFix) !== !1;
      });
    },
    prNumber() {
      var e, A;
      return ((e = this.detail) == null ? void 0 : e.fixPrNumber) || (((A = this.detail) == null ? void 0 : A.fixPrUrl) || "").split("/").pop();
    },
    logLineCount() {
      var e;
      return (((e = this.detail) == null ? void 0 : e.fixLog) || "").split(`
`).filter(Boolean).length;
    },
    fixInProgress() {
      var e;
      return ["QUEUED", "RUNNING"].includes((e = this.detail) == null ? void 0 : e.fixStatus);
    },
    // 병합 뒤 배포(GitHub Actions) 추적이 아직 진행 중인가 - 로그에 끝났다는 줄이 없고 갱신이 최근(35분 안)이면
    deployPending() {
      var t, s, r;
      if (((t = this.detail) == null ? void 0 : t.fixStatus) !== "MERGED") return !1;
      const e = ((s = this.detail) == null ? void 0 : s.fixLog) || "";
      if (/배포 완료|배포 추적 종료|시작되지 않았습니다|실패한 워크플로/.test(e)) return !1;
      const A = new Date(((r = this.detail) == null ? void 0 : r.fixUpdatedAt) || 0).getTime();
      return Date.now() - A < 35 * 60 * 1e3;
    },
    fixChat() {
      var e;
      try {
        return (e = this.detail) != null && e.fixChat ? JSON.parse(this.detail.fixChat) : [];
      } catch {
        return [];
      }
    },
    fixSuggestions() {
      var e;
      try {
        const A = (e = this.detail) != null && e.fixSuggestions ? JSON.parse(this.detail.fixSuggestions) : [];
        return Array.isArray(A) ? A : [];
      } catch {
        return [];
      }
    },
    // 진행 중 경과 시간 - 후속 대화면 마지막 내 메시지부터, 아니면 수정 요청 시각부터
    fixElapsed() {
      var r;
      const A = [...this.fixChat].reverse().find((n) => n.role === "user"), t = (A == null ? void 0 : A.at) || ((r = this.detail) == null ? void 0 : r.fixRequestedAt);
      if (!t) return "";
      const s = Math.max(0, Math.floor((this.now - new Date(t).getTime()) / 1e3));
      return s < 60 ? `${s}초` : `${Math.floor(s / 60)}분 ${s % 60}초`;
    },
    parsedContext() {
      var e;
      try {
        return (e = this.detail) != null && e.contextJson ? JSON.parse(this.detail.contextJson) : null;
      } catch {
        return null;
      }
    },
    parsedFrontLogs() {
      var e;
      try {
        return (e = this.detail) != null && e.frontendLogs ? JSON.parse(this.detail.frontendLogs) : [];
      } catch {
        return [];
      }
    },
    parsedBackLogs() {
      var e;
      try {
        return (e = this.detail) != null && e.backendLogs ? JSON.parse(this.detail.backendLogs) : [];
      } catch {
        return [];
      }
    },
    networkLogs() {
      var e;
      try {
        return (e = this.detail) != null && e.networkLogs ? JSON.parse(this.detail.networkLogs) : [];
      } catch {
        return [];
      }
    },
    parsedMutationLog() {
      var e;
      try {
        return (e = this.detail) != null && e.mutationLog ? JSON.parse(this.detail.mutationLog) : [];
      } catch {
        return [];
      }
    },
    filteredFrontLogs() {
      return [...this.parsedFrontLogs].reverse().filter((e) => e.level === "error" ? this.showFE.error : e.level === "warn" ? this.showFE.warn : this.showFE.log);
    },
    filteredBackLogs() {
      return this.parsedBackLogs.filter((e) => e.level === "ERROR" ? this.showBE.error : e.level === "WARN" ? this.showBE.warn : this.showBE.info);
    },
    filteredNetLogs() {
      return [...this.networkLogs].reverse().filter((e) => e.error || e.status && e.status >= 400 ? this.showNet.error : this.showNet.ok);
    },
    logTabs() {
      const e = this.countFE("error"), A = this.countBE("ERROR"), t = this.networkLogs.filter((s) => s.error || s.status && s.status >= 400).length;
      return [
        { id: "front", label: "프론트", count: e || null, countClass: "brv-cnt-err" },
        { id: "back", label: "백엔드", count: A || null, countClass: "brv-cnt-err" },
        { id: "net", label: "네트워크", count: t || null, countClass: "brv-cnt-err" },
        { id: "mutation", label: "Mutation", count: this.parsedMutationLog.length || null, countClass: "" }
      ];
    }
  },
  watch: {
    fixShots: { immediate: !0, handler(e) {
      this.loadShots(e);
    } },
    "detail.fixLog"() {
      this.$nextTick(() => {
        const e = this.$refs.fixLogPre;
        e && (e.scrollTop = e.scrollHeight);
      });
    }
  },
  beforeUnmount() {
    this._stopFixPolling();
  },
  methods: {
    async open(e) {
      var A, t, s, r, n, o;
      if (this.isOpen = !0, this.selected = null, this.detail = null, this.expanded = /* @__PURE__ */ new Set(), (A = this.kit) != null && A.projectInfo && (this.info = { ...await this.kit.projectInfo() }), !((s = (t = this.kit) == null ? void 0 : t.options) != null && s.adminKey) && ((n = this.info[(r = this.kit) == null ? void 0 : r.project]) == null ? void 0 : n.canFix) === !1) {
        const i = this.projects.find((a) => {
          var B;
          return ((B = this.info[a.key]) == null ? void 0 : B.canFix) !== !1;
        });
        i && this.kit.setProject(i.key);
      }
      this.project = ((o = this.kit) == null ? void 0 : o.project) || null, await this.loadInfo(), await this.fetchList(), e && await this.openDetail(Number(e));
    },
    kgColor(e) {
      return { module: "#6b5b1f", screen: "#1f5e4f", menu: "#1f4a6b", feature: "#334c66", component: "#4a3466", store: "#6b4a2a", util: "#3d4450", api: "#6b2a3a", service: "#6b3f2a", table: "#5e4a1f" }[e] || "#3a4050";
    },
    kgNbr(e) {
      var A;
      return !!((A = this.kg) != null && A.edges.some((t) => t.from === this.kgHover && t.to === e || t.to === this.kgHover && t.from === e));
    },
    async loadKnowledge(e) {
      var A, t, s;
      if (this.kg = null, !!((t = (A = this.kit) == null ? void 0 : A.api) != null && t.knowledge))
        try {
          const r = await this.kit.api.knowledge(e);
          this.selected === e && ((s = r == null ? void 0 : r.nodes) != null && s.length) && (this.kg = r);
        } catch {
        }
    },
    async loadShots(e) {
      var A, t;
      for (const s of e || [])
        if (!(this.shotUrls[s.file] || !((t = (A = this.kit) == null ? void 0 : A.api) != null && t.shot)))
          try {
            this.shotUrls[s.file] = await this.kit.api.shot(s.file);
          } catch {
          }
    },
    openShot(e) {
      this.bigShot = e;
    },
    async loadInfo() {
      try {
        const e = await this.kit.api.info();
        this.canFix = (e == null ? void 0 : e.canFix) !== !1;
      } catch {
        this.canFix = !0;
      }
    },
    async switchProject(e) {
      var A;
      e !== this.project && ((A = this.kit) == null || A.setProject(e), this.project = e, this.selected = null, this.detail = null, this._stopFixPolling(), await this.loadInfo(), await this.fetchList());
    },
    close() {
      this.isOpen = !1, this._stopFixPolling();
    },
    async fetchList() {
      this.loading = !0;
      try {
        this.list = await this.kit.api.list() ?? [];
      } catch (e) {
        console.error("[BugReportViewer] 목록 조회 실패:", e);
      } finally {
        this.loading = !1;
      }
    },
    async openDetail(e) {
      this.selected = e, this.detail = null, this.detailLoading = !0, this.logTab = "front", this.expanded = /* @__PURE__ */ new Set();
      try {
        if (this.detail = await this.kit.api.get(e) ?? null, this.loadKnowledge(e), this.detail) {
          const A = (() => {
            try {
              return JSON.parse(this.detail.frontendLogs || "[]");
            } catch {
              return [];
            }
          })(), t = (() => {
            try {
              return JSON.parse(this.detail.networkLogs || "[]");
            } catch {
              return [];
            }
          })();
          !A.some((s) => s.level === "error") && t.some((s) => s.error || s.status >= 400) && (this.logTab = "net");
        }
      } catch (A) {
        console.error("[BugReportViewer] 상세 조회 실패:", A);
      } finally {
        this.detailLoading = !1;
      }
      this.fixInProgress || this.deployPending ? this._startFixPolling() : this._stopFixPolling();
    },
    // 앱의 알림 훅(kit.notify)이 있으면 그쪽으로, 없으면 뷰어 안에 잠깐 표시
    showNotice(e, A, t) {
      var s, r;
      if ((r = (s = this.kit) == null ? void 0 : s.options) != null && r.notify) {
        this.kit.notify({ title: e, message: A, type: t });
        return;
      }
      this.notice = { title: e, message: A, type: t }, clearTimeout(this._noticeTimer), this._noticeTimer = setTimeout(() => {
        this.notice = null;
      }, 5e3);
    },
    statusLabel(e) {
      var A;
      return ((A = Ji.find((t) => t.value === e)) == null ? void 0 : A.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(e) {
      return Xh[e || "none"] || e;
    },
    fixShort(e) {
      return Jh[e] || e;
    },
    async requestFix() {
      if (!this.detail || this.fixBusy) return;
      const e = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const A = await this.kit.api.requestFix(e);
        A && (this.detail = { ...this.detail, ...A }, this._syncListFix(A)), this.showNotice("수정 요청", "서버에서 AI 가 고치기 시작합니다. 진행 로그가 여기에 쌓이고, PR 이 올라오면 링크가 표시됩니다.", "success"), this._startFixPolling();
      } catch (A) {
        this.showNotice("수정 요청 실패", (A == null ? void 0 : A.message) || "요청에 실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    // 추천 개선 실행 - 입력창에 쓰던 내용은 건드리지 않고 추천 문장을 그대로 수정 요청으로 보낸다
    runSuggestion(e) {
      window.confirm(`이 추천을 AI 에게 수정 요청으로 보낼까요?

${e}`) && this.sendChat("change", `추천 개선 실행: ${e}`);
    },
    async sendChat(e, A) {
      const t = A === void 0, s = (t ? this.chatInput : A).trim();
      if (!s || !this.detail || this.fixBusy) return;
      const r = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const n = await this.kit.api.fixChat(r, s, e);
        n && (this.detail = { ...this.detail, ...n }, this._syncListFix(n)), t && (this.chatInput = ""), this._startFixPolling();
      } catch (n) {
        this.showNotice("전송 실패", (n == null ? void 0 : n.message) || "실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    async refreshDetail() {
      var A;
      if (!this.detail) return;
      const e = this.detail.bugReportId;
      try {
        const t = this.detail.fixPrUrl && ["PR_OPENED", "FAILED"].includes(this.detail.fixStatus) ? await this.kit.api.fixSync(e) : this.fixInProgress || this.deployPending ? await this.kit.api.fixState(e) : await this.kit.api.get(e);
        t && ((A = this.detail) == null ? void 0 : A.bugReportId) === e && (this.detail = { ...this.detail, ...t }, this._syncListFix(t));
      } catch {
      }
    },
    _syncListFix(e) {
      const A = this.list.find((t) => t.bugReportId === e.bugReportId);
      A && (A.fixStatus = e.fixStatus, A.fixPrUrl = e.fixPrUrl);
    },
    // 진행 중이면 3초마다 상태·로그를 다시 읽고(가벼운 /fix API), 경과 시간은 1초마다 갱신
    _startFixPolling() {
      this._stopFixPolling(), this.now = Date.now(), this._fixTimer = setInterval(async () => {
        if (!this.detail || !(this.fixInProgress || this.deployPending)) {
          this._stopFixPolling();
          return;
        }
        if (!this._fixPolling) {
          this._fixPolling = !0;
          try {
            await this.refreshDetail();
          } finally {
            this._fixPolling = !1;
          }
        }
      }, 3e3), this._clockTimer = setInterval(() => {
        this.now = Date.now();
      }, 1e3);
    },
    _stopFixPolling() {
      this._fixTimer && (clearInterval(this._fixTimer), this._fixTimer = null), this._clockTimer && (clearInterval(this._clockTimer), this._clockTimer = null);
    },
    async changeStatus(e) {
      if (!this.detail || this.statusSaving) return;
      const A = this.detail.bugReportId, t = this.detail.status;
      if (e === t) return;
      this.statusSaving = !0, this.detail.status = e;
      const s = this.list.find((r) => r.bugReportId === A);
      s && (s.status = e);
      try {
        await this.kit.api.setStatus(A, e);
      } catch (r) {
        console.error("[BugReportViewer] 상태 변경 실패:", r), this.detail.status = t, s && (s.status = t);
      } finally {
        this.statusSaving = !1;
      }
    },
    async deleteReport(e) {
      if (confirm("리포트를 삭제하시겠습니까?"))
        try {
          await this.kit.api.remove(e), this.list = this.list.filter((A) => A.bugReportId !== e);
        } catch (A) {
          console.error("[BugReportViewer] 삭제 실패:", A);
        }
    },
    toggleExpand(e) {
      const A = new Set(this.expanded);
      A.has(e) ? A.delete(e) : A.add(e), this.expanded = A;
    },
    countFE(e) {
      return this.parsedFrontLogs.filter((A) => A.level === e).length;
    },
    countBE(e) {
      return this.parsedBackLogs.filter((A) => A.level === e).length;
    },
    shortLogger(e) {
      if (!e) return "";
      const A = e.split(".");
      return A.length > 2 ? "…" + A.slice(-2).join(".") : e;
    },
    statusClass(e) {
      return !e || e === "ERR" ? "st-err" : e >= 500 ? "st-5xx" : e >= 400 ? "st-4xx" : e >= 300 ? "st-3xx" : "st-2xx";
    },
    netClass(e) {
      return e.error || e.status && e.status >= 400 ? "brv-net-err" : "";
    },
    formatPayload(e) {
      if (e == null) return "";
      try {
        const A = JSON.stringify(e);
        return A.length > 200 ? A.slice(0, 200) + "…" : A;
      } catch {
        return String(e);
      }
    },
    formatDate(e) {
      return e ? String(e).slice(0, 16).replace("T", " ") : "";
    }
  }
}, Yh = { class: "bugfix-root" }, jh = { class: "brv-modal" }, Zh = { class: "brv-header" }, zh = { class: "brv-title" }, qh = {
  key: 0,
  class: "brv-shortcut"
}, $h = {
  key: 0,
  class: "brv-projects"
}, Ap = ["onClick"], ep = { class: "brv-body" }, tp = {
  key: 0,
  class: "brv-loading"
}, sp = {
  key: 1,
  class: "brv-empty"
}, rp = {
  key: 2,
  class: "brv-list"
}, np = ["onClick"], op = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, ip = { class: "brv-problem" }, lp = ["title"], ap = { class: "brv-meta" }, cp = ["onClick"], Bp = {
  key: 0,
  class: "brv-loading"
}, up = {
  key: 0,
  class: "brv-section"
}, fp = ["src"], gp = ["src", "alt"], dp = { class: "brv-shots__bigcap" }, hp = { class: "brv-section" }, pp = { class: "brv-row" }, wp = { class: "brv-row" }, Qp = { class: "brv-status-control" }, Cp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, bp = ["value", "disabled"], Up = ["value"], Fp = { class: "brv-row" }, mp = { class: "brv-selectable" }, xp = { class: "brv-row" }, Ep = { class: "brv-selectable" }, yp = { class: "brv-section brv-ai" }, vp = { class: "brv-ai__head" }, Hp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Ip = {
  key: 1,
  class: "brv-fix-elapsed"
}, _p = {
  key: 2,
  class: "brv-fix-elapsed"
}, Lp = {
  key: 3,
  class: "brv-ai__tools"
}, Sp = ["disabled"], Kp = ["disabled"], Tp = {
  key: 0,
  class: "brv-ai__hint"
}, kp = {
  key: 1,
  class: "brv-ai__hint"
}, Dp = {
  key: 2,
  class: "brv-ai__start"
}, Op = ["disabled"], Mp = {
  key: 0,
  class: "brv-ai__meta"
}, Rp = ["href"], Np = {
  key: 1,
  class: "brv-ai__branch brv-selectable"
}, Pp = {
  key: 1,
  class: "brv-ai__summary brv-selectable"
}, Vp = {
  key: 2,
  class: "brv-kg",
  open: ""
}, Gp = { class: "brv-kg__wrap" }, Xp = ["viewBox"], Jp = ["x"], Wp = ["d"], Yp = ["transform", "onMouseenter"], jp = ["width", "height", "fill"], Zp = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, zp = {
  key: 3,
  class: "brv-shots"
}, qp = { class: "brv-shots__title" }, $p = { class: "brv-suggest__hint" }, Aw = { class: "brv-shots__strip" }, ew = ["onClick"], tw = ["src", "alt"], sw = {
  key: 1,
  class: "brv-shots__ph"
}, rw = ["open"], nw = { class: "brv-ai__count" }, ow = {
  key: 5,
  class: "brv-suggest"
}, iw = { class: "brv-suggest__text brv-selectable" }, lw = ["disabled", "onClick"], aw = { class: "brv-chat" }, cw = { class: "brv-chat__who" }, Bw = { class: "brv-chat__text brv-selectable" }, uw = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, fw = {
  key: 1,
  class: "brv-chat__compose"
}, gw = ["disabled"], dw = { class: "brv-chat__btns" }, hw = ["disabled"], pw = ["disabled"], ww = {
  key: 2,
  class: "brv-ai__hint"
}, Qw = {
  key: 2,
  class: "brv-section"
}, Cw = {
  key: 0,
  class: "brv-field"
}, bw = { class: "brv-text brv-selectable" }, Uw = {
  key: 1,
  class: "brv-field"
}, Fw = { class: "brv-text brv-selectable" }, mw = {
  key: 2,
  class: "brv-field"
}, xw = { class: "brv-text brv-selectable" }, Ew = {
  key: 3,
  class: "brv-section"
}, yw = {
  key: 0,
  class: "brv-row"
}, vw = { class: "brv-selectable" }, Hw = {
  key: 1,
  class: "brv-row"
}, Iw = { class: "brv-selectable" }, _w = {
  key: 2,
  class: "brv-row"
}, Lw = { class: "brv-selectable" }, Sw = {
  key: 3,
  class: "brv-row"
}, Kw = { class: "brv-selectable" }, Tw = {
  key: 4,
  class: "brv-row"
}, kw = { class: "brv-selectable" }, Dw = { class: "brv-section" }, Ow = { class: "brv-label-row" }, Mw = { class: "brv-log-tabs" }, Rw = ["onClick"], Nw = { class: "brv-log-filters" }, Pw = { class: "brv-filter-chip brv-filter-error" }, Vw = { class: "brv-filter-chip brv-filter-warn" }, Gw = { class: "brv-filter-chip brv-filter-log" }, Xw = { class: "brv-log-list" }, Jw = ["onClick"], Ww = { class: "brv-log-time brv-selectable" }, Yw = { class: "brv-log-lv" }, jw = {
  key: 0,
  class: "brv-log-empty"
}, Zw = { class: "brv-log-filters" }, zw = { class: "brv-filter-chip brv-filter-error" }, qw = { class: "brv-filter-chip brv-filter-warn" }, $w = { class: "brv-filter-chip brv-filter-log" }, A0 = { class: "brv-log-list" }, e0 = ["onClick"], t0 = { class: "brv-log-time brv-selectable" }, s0 = { class: "brv-log-lv" }, r0 = { class: "brv-log-logger brv-selectable" }, n0 = {
  key: 0,
  class: "brv-log-empty"
}, o0 = { class: "brv-log-filters" }, i0 = { class: "brv-filter-chip brv-filter-error" }, l0 = { class: "brv-filter-chip brv-filter-log" }, a0 = { class: "brv-log-list" }, c0 = ["onClick"], B0 = { class: "brv-net-method brv-selectable" }, u0 = { class: "brv-net-dur brv-selectable" }, f0 = { class: "brv-log-time brv-selectable" }, g0 = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, d0 = { key: 0 }, h0 = { key: 1 }, p0 = { key: 2 }, w0 = {
  key: 3,
  class: "brv-log--error"
}, Q0 = {
  key: 0,
  class: "brv-log-empty"
}, C0 = {
  key: 3,
  class: "brv-log-list"
}, b0 = ["onClick"], U0 = { class: "brv-log-time brv-selectable" }, F0 = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, m0 = {
  key: 0,
  class: "brv-log-empty"
};
function x0(e, A, t, s, r, n) {
  var o, i, a, B;
  return Q(), C("div", Yh, [
    r.isOpen ? (Q(), C("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: A[21] || (A[21] = (l) => r.backdropPressed = l.target === l.currentTarget),
      onClick: A[22] || (A[22] = zt((l) => r.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", jh, [
        u("div", Zh, [
          u("span", zh, [
            A[23] || (A[23] = J(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (Q(), C("span", qh, b(n.hotkey), 1)) : L("", !0)
          ]),
          n.viewProjects.length > 1 ? (Q(), C("span", $h, [
            (Q(!0), C(N, null, $(n.viewProjects, (l) => (Q(), C("button", {
              key: l.key,
              class: Y({ "brv-projects__on": r.project === l.key }),
              onClick: (c) => n.switchProject(l.key)
            }, b(l.label), 11, Ap))), 128))
          ])) : L("", !0),
          u("button", {
            class: "brv-close",
            onClick: A[0] || (A[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        r.notice ? (Q(), C("div", {
          key: 0,
          class: Y(["brv-notice", `brv-notice--${r.notice.type}`])
        }, [
          u("b", null, b(r.notice.title), 1),
          J(" " + b(r.notice.message), 1)
        ], 2)) : L("", !0),
        u("div", ep, [
          r.selected ? (Q(), C(N, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: A[1] || (A[1] = (l) => r.selected = null)
            }, "← 목록"),
            r.detailLoading ? (Q(), C("div", Bp, [...A[25] || (A[25] = [
              u("span", { class: "brv-spin" }, null, -1),
              J(" 불러오는 중... ", -1)
            ])])) : r.detail ? (Q(), C(N, { key: 1 }, [
              r.detail.screenshot ? (Q(), C("div", up, [
                A[26] || (A[26] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: r.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, fp)
              ])) : L("", !0),
              r.bigShot ? (Q(), C("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: A[2] || (A[2] = (l) => r.bigShot = null)
              }, [
                u("img", {
                  src: r.shotUrls[r.bigShot.file],
                  alt: r.bigShot.name
                }, null, 8, gp),
                u("div", dp, [
                  J(b(r.bigShot.name) + " · " + b(r.bigShot.label) + " ", 1),
                  A[27] || (A[27] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : L("", !0),
              u("div", hp, [
                A[32] || (A[32] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", pp, [
                  A[28] || (A[28] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(o = r.detail.severity) == null ? void 0 : o.toLowerCase()}`])
                  }, b(r.detail.severity), 3)
                ]),
                u("div", wp, [
                  A[29] || (A[29] = u("span", null, "상태", -1)),
                  u("span", Qp, [
                    r.statusSaving ? (Q(), C("span", Cp)) : L("", !0),
                    u("select", {
                      class: Y(["brv-status-select", `brv-st--${(r.detail.status || "OPEN").toLowerCase()}`]),
                      value: r.detail.status || "OPEN",
                      disabled: r.statusSaving,
                      onChange: A[3] || (A[3] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (Q(!0), C(N, null, $(r.STATUSES, (l) => (Q(), C("option", {
                        key: l.value,
                        value: l.value
                      }, b(l.label), 9, Up))), 128))
                    ], 42, bp)
                  ])
                ]),
                u("div", Fp, [
                  A[30] || (A[30] = u("span", null, "보고자", -1)),
                  u("span", mp, b(r.detail.reporter), 1)
                ]),
                u("div", xp, [
                  A[31] || (A[31] = u("span", null, "일시", -1)),
                  u("span", Ep, b(n.formatDate(r.detail.insertDate)), 1)
                ])
              ]),
              u("div", yp, [
                u("div", vp, [
                  A[34] || (A[34] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: Y(["brv-fix", `brv-fix--${(r.detail.fixStatus || "none").toLowerCase()}`])
                  }, b(n.fixLabel(r.detail.fixStatus)), 3),
                  r.fixBusy || n.fixInProgress ? (Q(), C("span", Hp)) : L("", !0),
                  n.fixInProgress && n.fixElapsed ? (Q(), C("span", Ip, b(n.fixElapsed), 1)) : n.deployPending ? (Q(), C("span", _p, [...A[33] || (A[33] = [
                    u("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    J(" 배포 중", -1)
                  ])])) : L("", !0),
                  r.detail.fixStatus && n.fixable ? (Q(), C("span", Lp, [
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy,
                      onClick: A[4] || (A[4] = (...l) => n.refreshDetail && n.refreshDetail(...l)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, Sp),
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[5] || (A[5] = (...l) => n.requestFix && n.requestFix(...l)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, Kp)
                  ])) : L("", !0)
                ]),
                !r.detail.fixStatus && r.detail.tool ? (Q(), C("div", Tp, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !r.detail.fixStatus && !n.fixable ? (Q(), C("div", kp, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : r.detail.fixStatus ? (Q(), C(N, { key: 3 }, [
                  r.detail.fixPrUrl || r.detail.fixBranch ? (Q(), C("div", Mp, [
                    r.detail.fixPrUrl ? (Q(), C("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: r.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + b(n.prNumber), 9, Rp)) : L("", !0),
                    r.detail.fixBranch ? (Q(), C("span", Np, b(r.detail.fixBranch), 1)) : L("", !0)
                  ])) : L("", !0),
                  r.detail.fixSummary ? (Q(), C("div", Pp, b(r.detail.fixSummary), 1)) : L("", !0),
                  n.kgLayout ? (Q(), C("details", Vp, [
                    A[36] || (A[36] = u("summary", null, [
                      J("관련 기능·파일 "),
                      u("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    u("div", Gp, [
                      (Q(), C("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: vs({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (Q(!0), C(N, null, $(n.kgLayout.cols, (l) => (Q(), C("text", {
                          key: "c" + l.layer,
                          x: l.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, b(l.title), 9, Jp))), 128)),
                        (Q(!0), C(N, null, $(n.kgLayout.edges, (l, c) => (Q(), C("path", {
                          key: "e" + c,
                          d: l.d,
                          class: Y(["brv-kg__edge", "brv-kg__edge--" + l.rel, { "brv-kg__edge--dim": r.kgHover && l.from !== r.kgHover && l.to !== r.kgHover }])
                        }, null, 10, Wp))), 128)),
                        (Q(!0), C(N, null, $(n.kgLayout.nodes, (l) => (Q(), C("g", {
                          key: l.id,
                          transform: `translate(${l.x},${l.y})`,
                          class: Y(["brv-kg__node", { "brv-kg__node--hit": l.hit, "brv-kg__node--dim": r.kgHover && r.kgHover !== l.id && !n.kgNbr(l.id) }]),
                          onMouseenter: (c) => r.kgHover = l.id,
                          onMouseleave: A[7] || (A[7] = (c) => r.kgHover = null)
                        }, [
                          u("title", null, b(l.label) + b(l.path ? `
` + l.path : "") + b(l.route ? `
` + l.route : "") + b(l.desc ? `
` + l.desc : ""), 1),
                          u("rect", {
                            width: l.w,
                            height: l.h,
                            rx: "4",
                            fill: n.kgColor(l.type)
                          }, null, 8, jp),
                          u("text", Zp, b(l.short), 1)
                        ], 42, Yp))), 128))
                      ], 12, Xp))
                    ])
                  ])) : L("", !0),
                  n.fixShots.length ? (Q(), C("div", zp, [
                    u("div", qp, [
                      A[37] || (A[37] = J("화면 확인 ", -1)),
                      u("span", $p, b(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", Aw, [
                      (Q(!0), C(N, null, $(n.fixShots, (l) => (Q(), C("figure", {
                        key: l.file,
                        class: "brv-shots__item",
                        onClick: (c) => n.openShot(l)
                      }, [
                        r.shotUrls[l.file] ? (Q(), C("img", {
                          key: 0,
                          src: r.shotUrls[l.file],
                          alt: l.name
                        }, null, 8, tw)) : (Q(), C("div", sw, "…")),
                        u("figcaption", null, b(l.name.replace(/\.png$/i, "")), 1)
                      ], 8, ew))), 128))
                    ])
                  ])) : L("", !0),
                  r.detail.fixLog ? (Q(), C("details", {
                    key: 4,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      A[38] || (A[38] = J("진행 로그 ", -1)),
                      u("span", nw, b(n.logLineCount) + "줄", 1)
                    ]),
                    u("pre", {
                      ref: "fixLogPre",
                      class: "brv-selectable"
                    }, b(r.detail.fixLog), 513)
                  ], 8, rw)) : L("", !0),
                  n.fixSuggestions.length ? (Q(), C("div", ow, [
                    A[39] || (A[39] = u("div", { class: "brv-suggest__title" }, [
                      J("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (Q(!0), C(N, null, $(n.fixSuggestions, (l, c) => (Q(), C("div", {
                      key: c,
                      class: "brv-suggest__item"
                    }, [
                      u("span", iw, b(l), 1),
                      n.fixable ? (Q(), C("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: r.fixBusy || n.fixInProgress,
                        onClick: (f) => n.runSuggestion(l)
                      }, "실행", 8, lw)) : L("", !0)
                    ]))), 128))
                  ])) : L("", !0),
                  u("div", aw, [
                    (Q(!0), C(N, null, $(n.fixChat, (l, c) => (Q(), C("div", {
                      key: c,
                      class: Y(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      u("span", cw, b(l.role === "user" ? "나" : "AI"), 1),
                      u("div", Bw, b(l.text), 1)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (Q(), C("div", uw, [...A[40] || (A[40] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        J(" 생각 중…")
                      ], -1)
                    ])])) : L("", !0),
                    n.fixable ? (Q(), C("div", fw, [
                      FA(u("textarea", {
                        "onUpdate:modelValue": A[8] || (A[8] = (l) => r.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: r.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          A[9] || (A[9] = Pi(zt((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          A[10] || (A[10] = Pi(zt((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, gw), [
                        [ur, r.chatInput]
                      ]),
                      u("div", dw, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[11] || (A[11] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, hw),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[12] || (A[12] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, pw)
                      ])
                    ])) : L("", !0),
                    n.fixable ? (Q(), C("div", ww, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : L("", !0)
                  ])
                ], 64)) : (Q(), C("div", Dp, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: r.fixBusy,
                    onClick: A[6] || (A[6] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, Op),
                  A[35] || (A[35] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              r.detail.problem || r.detail.reproSteps || r.detail.expectedResult ? (Q(), C("div", Qw, [
                A[44] || (A[44] = u("div", { class: "brv-label" }, "내용", -1)),
                r.detail.problem ? (Q(), C("div", Cw, [
                  A[41] || (A[41] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", bw, b(r.detail.problem), 1)
                ])) : L("", !0),
                r.detail.reproSteps ? (Q(), C("div", Uw, [
                  A[42] || (A[42] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", Fw, b(r.detail.reproSteps), 1)
                ])) : L("", !0),
                r.detail.expectedResult ? (Q(), C("div", mw, [
                  A[43] || (A[43] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", xw, b(r.detail.expectedResult), 1)
                ])) : L("", !0)
              ])) : L("", !0),
              n.parsedContext ? (Q(), C("div", Ew, [
                A[50] || (A[50] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (Q(), C("div", yw, [
                  A[45] || (A[45] = u("span", null, "카메라", -1)),
                  u("span", vw, b(n.parsedContext.camera.longitude) + "°, " + b(n.parsedContext.camera.latitude) + "° · 고도 " + b(n.parsedContext.camera.height) + "m · H" + b(n.parsedContext.camera.heading) + "° P" + b(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : L("", !0),
                (i = n.parsedContext.menus) != null && i.header ? (Q(), C("div", Hw, [
                  A[46] || (A[46] = u("span", null, "상단 탭", -1)),
                  u("span", Iw, b(n.parsedContext.menus.header), 1)
                ])) : L("", !0),
                n.parsedContext.activeData ? (Q(), C("div", _w, [
                  A[47] || (A[47] = u("span", null, "데이터셋", -1)),
                  u("span", Lw, b(((a = n.parsedContext.activeData.datasets) == null ? void 0 : a.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : L("", !0),
                (B = n.parsedContext.activeData) != null && B.terrain ? (Q(), C("div", Sw, [
                  A[48] || (A[48] = u("span", null, "지형", -1)),
                  u("span", Kw, b(n.parsedContext.activeData.terrain), 1)
                ])) : L("", !0),
                n.parsedContext.datetime ? (Q(), C("div", Tw, [
                  A[49] || (A[49] = u("span", null, "발생 시각", -1)),
                  u("span", kw, b(n.parsedContext.datetime), 1)
                ])) : L("", !0)
              ])) : L("", !0),
              u("div", Dw, [
                u("div", Ow, [
                  A[51] || (A[51] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", Mw, [
                    (Q(!0), C(N, null, $(n.logTabs, (l) => (Q(), C("button", {
                      key: l.id,
                      class: Y(["brv-log-tab", { active: r.logTab === l.id }]),
                      onClick: (c) => r.logTab = l.id
                    }, [
                      J(b(l.label) + " ", 1),
                      l.count ? (Q(), C("span", {
                        key: 0,
                        class: Y(["brv-log-tab-count", l.countClass])
                      }, b(l.count), 3)) : L("", !0)
                    ], 10, Rw))), 128))
                  ])
                ]),
                r.logTab === "front" ? (Q(), C(N, { key: 0 }, [
                  u("div", Nw, [
                    u("label", Pw, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[13] || (A[13] = (l) => r.showFE.error = l)
                      }, null, 512), [
                        [DA, r.showFE.error]
                      ]),
                      J(" 오류 (" + b(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", Vw, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[14] || (A[14] = (l) => r.showFE.warn = l)
                      }, null, 512), [
                        [DA, r.showFE.warn]
                      ]),
                      J(" 경고 (" + b(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", Gw, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[15] || (A[15] = (l) => r.showFE.log = l)
                      }, null, 512), [
                        [DA, r.showFE.log]
                      ]),
                      J(" 로그 (" + b(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", Xw, [
                    (Q(!0), C(N, null, $(n.filteredFrontLogs, (l, c) => {
                      var f;
                      return Q(), C("div", {
                        key: c,
                        class: Y(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (h) => n.toggleExpand("f" + c)
                      }, [
                        u("span", Ww, b((f = l.time) == null ? void 0 : f.slice(11, 23)), 1),
                        u("span", Yw, b(l.level), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("f" + c) }])
                        }, b(l.message), 3)
                      ], 10, Jw);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (Q(), C("div", jw, "표시할 로그 없음")) : L("", !0)
                  ])
                ], 64)) : L("", !0),
                r.logTab === "back" ? (Q(), C(N, { key: 1 }, [
                  u("div", Zw, [
                    u("label", zw, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[16] || (A[16] = (l) => r.showBE.error = l)
                      }, null, 512), [
                        [DA, r.showBE.error]
                      ]),
                      J(" ERROR (" + b(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", qw, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[17] || (A[17] = (l) => r.showBE.warn = l)
                      }, null, 512), [
                        [DA, r.showBE.warn]
                      ]),
                      J(" WARN (" + b(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", $w, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[18] || (A[18] = (l) => r.showBE.info = l)
                      }, null, 512), [
                        [DA, r.showBE.info]
                      ]),
                      J(" INFO (" + b(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", A0, [
                    (Q(!0), C(N, null, $(n.filteredBackLogs, (l, c) => {
                      var f, h;
                      return Q(), C("div", {
                        key: c,
                        class: Y(["brv-log-item", `brv-log--${(f = l.level) == null ? void 0 : f.toLowerCase()}`]),
                        onClick: (w) => n.toggleExpand("b" + c)
                      }, [
                        u("span", t0, b((h = l.time) == null ? void 0 : h.slice(11, 23)), 1),
                        u("span", s0, b(l.level), 1),
                        u("span", r0, b(n.shortLogger(l.logger)), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("b" + c) }])
                        }, b(l.message), 3)
                      ], 10, e0);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (Q(), C("div", n0, "표시할 로그 없음")) : L("", !0)
                  ])
                ], 64)) : L("", !0),
                r.logTab === "net" ? (Q(), C(N, { key: 2 }, [
                  u("div", o0, [
                    u("label", i0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[19] || (A[19] = (l) => r.showNet.error = l)
                      }, null, 512), [
                        [DA, r.showNet.error]
                      ]),
                      J(" 에러 (" + b(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", l0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[20] || (A[20] = (l) => r.showNet.ok = l)
                      }, null, 512), [
                        [DA, r.showNet.ok]
                      ]),
                      J(" 성공 (" + b(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", a0, [
                    (Q(!0), C(N, null, $(n.filteredNetLogs, (l, c) => {
                      var f;
                      return Q(), C("div", {
                        key: c,
                        class: Y(["brv-net-item", n.netClass(l)]),
                        onClick: (h) => n.toggleExpand("n" + c)
                      }, [
                        u("span", {
                          class: Y(["brv-net-status", n.statusClass(l.status)])
                        }, b(l.status || "ERR"), 3),
                        u("span", B0, b(l.method), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("n" + c) }])
                        }, b(l.url), 3),
                        u("span", u0, b(l.duration) + "ms", 1),
                        u("span", f0, b((f = l.time) == null ? void 0 : f.slice(11, 19)), 1)
                      ], 10, c0);
                    }), 128)),
                    (Q(!0), C(N, null, $(n.filteredNetLogs, (l, c) => (Q(), C(N, {
                      key: "d" + c
                    }, [
                      r.expanded.has("n" + c) ? (Q(), C("div", g0, [
                        l.params ? (Q(), C("div", d0, [
                          A[52] || (A[52] = u("b", null, "Params:", -1)),
                          J(" " + b(l.params), 1)
                        ])) : L("", !0),
                        l.requestBody ? (Q(), C("div", h0, [
                          A[53] || (A[53] = u("b", null, "Request:", -1)),
                          J(" " + b(l.requestBody), 1)
                        ])) : L("", !0),
                        l.responseBody ? (Q(), C("div", p0, [
                          A[54] || (A[54] = u("b", null, "Response:", -1)),
                          J(" " + b(l.responseBody), 1)
                        ])) : L("", !0),
                        l.error ? (Q(), C("div", w0, [
                          A[55] || (A[55] = u("b", null, "Error:", -1)),
                          J(" " + b(l.error), 1)
                        ])) : L("", !0)
                      ])) : L("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (Q(), C("div", Q0, "표시할 요청 없음")) : L("", !0)
                  ])
                ], 64)) : L("", !0),
                r.logTab === "mutation" ? (Q(), C("div", C0, [
                  (Q(!0), C(N, null, $(n.parsedMutationLog, (l, c) => (Q(), C("div", {
                    key: c,
                    class: "brv-log-item",
                    onClick: (f) => n.toggleExpand("m" + c)
                  }, [
                    u("span", U0, b(l.time), 1),
                    u("span", {
                      class: Y(["brv-log-msg brv-mutation brv-selectable", { expanded: r.expanded.has("m" + c) }])
                    }, b(l.type), 3),
                    l.payload !== null ? (Q(), C("span", F0, b(n.formatPayload(l.payload)), 1)) : L("", !0)
                  ], 8, b0))), 128)),
                  n.parsedMutationLog.length === 0 ? (Q(), C("div", m0, "기록된 mutation 없음")) : L("", !0)
                ])) : L("", !0)
              ])
            ], 64)) : L("", !0)
          ], 64)) : (Q(), C(N, { key: 0 }, [
            r.loading ? (Q(), C("div", tp, [...A[24] || (A[24] = [
              u("span", { class: "brv-spin" }, null, -1),
              J(" 불러오는 중... ", -1)
            ])])) : r.list.length === 0 ? (Q(), C("div", sp, "저장된 리포트가 없습니다.")) : (Q(), C("div", rp, [
              (Q(!0), C(N, null, $(r.list, (l) => {
                var c;
                return Q(), C("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (f) => n.openDetail(l.bugReportId)
                }, [
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(c = l.severity) == null ? void 0 : c.toLowerCase()}`])
                  }, b(l.severity), 3),
                  u("span", {
                    class: Y(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, b(n.statusLabel(l.status)), 3),
                  l.tool ? (Q(), C("span", op, "도구")) : L("", !0),
                  u("span", ip, b(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (Q(), C("span", {
                    key: 1,
                    class: Y(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, b(n.fixShort(l.fixStatus)), 11, lp)) : L("", !0),
                  u("span", ap, b(l.reporter) + " · " + b(n.formatDate(l.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: zt((f) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, cp)
                ], 8, np);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : L("", !0)
  ]);
}
const E0 = /* @__PURE__ */ Jo(Wh, [["render", x0], ["styles", [Gh]], ["__scopeId", "data-v-e3220c88"]]);
function mn({ endpoint: e, project: A, apiKey: t, user: s, adminKey: r }) {
  const n = e ? `${String(e).replace(/\/+$/, "")}/p/${A}` : "", o = !!n;
  async function i(a, B, l, { query: c, blob: f } = {}) {
    if (!o) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const h = { Accept: "application/json" };
    l !== void 0 && (h["Content-Type"] = "application/json"), t && (h["X-Bugfix-Key"] = t), r && (h["X-Bugfix-Admin"] = r);
    const w = typeof s == "function" ? s() : s;
    w && (h["X-Bugfix-User"] = String(w));
    const U = c ? "?" + new URLSearchParams(c).toString() : "", E = await fetch(n + B + U, { method: a, headers: h, body: l === void 0 ? void 0 : JSON.stringify(l) });
    if (f) {
      if (!E.ok) throw Object.assign(new Error(`HTTP ${E.status}`), { status: E.status });
      return URL.createObjectURL(await E.blob());
    }
    if (E.status === 204) return null;
    const I = await E.text();
    let x = null;
    try {
      x = I ? JSON.parse(I) : null;
    } catch {
    }
    if (!E.ok) {
      const d = new Error((x == null ? void 0 : x.message) || `HTTP ${E.status}`);
      throw d.status = E.status, d;
    }
    return (x == null ? void 0 : x.content) ?? x;
  }
  return {
    enabled: o,
    base: n,
    info: () => i("GET", "/info"),
    save: (a) => i("POST", "/reports", a),
    list: () => i("GET", "/reports"),
    get: (a) => i("GET", `/reports/${a}`),
    fixState: (a) => i("GET", `/reports/${a}/fix`),
    setStatus: (a, B) => i("PATCH", `/reports/${a}/status`, { status: B }),
    remove: (a) => i("DELETE", `/reports/${a}`),
    requestFix: (a) => i("POST", `/reports/${a}/request-fix`),
    fixChat: (a, B, l) => i("POST", `/reports/${a}/fix-chat`, { message: B, mode: l }),
    fixSync: (a) => i("POST", `/reports/${a}/fix-sync`),
    /** 이 신고와 관련된 지식 그래프 부분 { nodes, edges, available } */
    knowledge: (a) => i("GET", `/reports/${a}/knowledge`),
    /** 스크린샷 → object URL (img src 로 쓰고, 다 쓰면 URL.revokeObjectURL) */
    shot: (a) => i("GET", `/shots/${String(a).split("/").map(encodeURIComponent).join("/")}`, void 0, { blob: !0 })
  };
}
/*!
 * html2canvas-pro 1.6.7 <https://yorickshan.github.io/html2canvas-pro/>
 * Copyright (c) 2024-present yorickshan and html2canvas-pro contributors
 * Released under MIT License
 */
class KA {
  constructor(A, t, s, r) {
    this.left = A, this.top = t, this.width = s, this.height = r;
  }
  add(A, t, s, r) {
    return new KA(this.left + A, this.top + t, this.width + s, this.height + r);
  }
  static fromClientRect(A, t) {
    return new KA(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
  }
  static fromDOMRectList(A, t) {
    const s = Array.from(t);
    let r = s.find((n) => n.width !== 0);
    return r || (r = s.find((n) => n.height !== 0)), !r && s.length > 0 && (r = s[0]), r ? new KA(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : KA.EMPTY;
  }
}
KA.EMPTY = new KA(0, 0, 0, 0);
const Yr = (e, A) => KA.fromClientRect(e, A.getBoundingClientRect()), y0 = (e) => {
  const A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  const s = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), r = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new KA(0, 0, s, r);
};
var jr = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, QA = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var s = [], r = -1, n = ""; ++r < t; ) {
    var o = e[r];
    o <= 65535 ? s.push(o) : (o -= 65536, s.push((o >> 10) + 55296, o % 1024 + 56320)), (r + 1 === t || s.length > 16384) && (n += String.fromCharCode.apply(String, s), s.length = 0);
  }
  return n;
}, Wi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", v0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ps = 0; Ps < Wi.length; Ps++)
  v0[Wi.charCodeAt(Ps)] = Ps;
var Yi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", qt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Vs = 0; Vs < Yi.length; Vs++)
  qt[Yi.charCodeAt(Vs)] = Vs;
var H0 = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(B) ? B : new Uint8Array(B);
  for (s = 0; s < t; s += 4)
    n = qt[e.charCodeAt(s)], o = qt[e.charCodeAt(s + 1)], i = qt[e.charCodeAt(s + 2)], a = qt[e.charCodeAt(s + 3)], l[r++] = n << 2 | o >> 4, l[r++] = (o & 15) << 4 | i >> 2, l[r++] = (i & 3) << 6 | a & 63;
  return B;
}, I0 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, _0 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, ft = 5, Wo = 11, xn = 2, L0 = Wo - ft, oc = 65536 >> ft, S0 = 1 << ft, En = S0 - 1, K0 = 1024 >> ft, T0 = oc + K0, k0 = T0, D0 = 32, O0 = k0 + D0, M0 = 65536 >> Wo, R0 = 1 << L0, N0 = R0 - 1, ji = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, P0 = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, V0 = function(e, A) {
  var t = H0(e), s = Array.isArray(t) ? _0(t) : new Uint32Array(t), r = Array.isArray(t) ? I0(t) : new Uint16Array(t), n = 24, o = ji(r, n / 2, s[4] / 2), i = s[5] === 2 ? ji(r, (n + s[4]) / 2) : P0(s, Math.ceil((n + s[4]) / 4));
  return new G0(s[0], s[1], s[2], s[3], o, i);
}, G0 = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ft], t = (t << xn) + (A & En), this.data[t];
        if (A <= 65535)
          return t = this.index[oc + (A - 55296 >> ft)], t = (t << xn) + (A & En), this.data[t];
        if (A < this.highStart)
          return t = O0 - M0 + (A >> Wo), t = this.index[t], t += A >> ft & N0, t = this.index[t], t = (t << xn) + (A & En), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Zi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", X0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Gs = 0; Gs < Zi.length; Gs++)
  X0[Zi.charCodeAt(Gs)] = Gs;
var J0 = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", zi = 50, W0 = 1, ic = 2, lc = 3, Y0 = 4, j0 = 5, qi = 7, ac = 8, $i = 9, Ge = 10, so = 11, Al = 12, ro = 13, Z0 = 14, $t = 15, no = 16, Xs = 17, Gt = 18, z0 = 19, el = 20, oo = 21, Xt = 22, yn = 23, wt = 24, GA = 25, As = 26, es = 27, Qt = 28, q0 = 29, it = 30, $0 = 31, Js = 32, Ws = 33, io = 34, lo = 35, ao = 36, ms = 37, co = 38, fr = 39, gr = 40, vn = 41, cc = 42, AQ = 43, eQ = [9001, 65288], Bc = "!", Z = "×", Ys = "÷", Bo = V0(J0), me = [it, ao], uo = [W0, ic, lc, j0], uc = [Ge, ac], tl = [es, As], tQ = uo.concat(uc), sl = [co, fr, gr, io, lo], sQ = [$t, ro], rQ = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], s = [], r = [];
  return e.forEach(function(n, o) {
    var i = Bo.get(n);
    if (i > zi ? (r.push(!0), i -= zi) : r.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return s.push(o), t.push(no);
    if (i === Y0 || i === so) {
      if (o === 0)
        return s.push(o), t.push(it);
      var a = t[o - 1];
      return tQ.indexOf(a) === -1 ? (s.push(s[o - 1]), t.push(a)) : (s.push(o), t.push(it));
    }
    if (s.push(o), i === $0)
      return t.push(A === "strict" ? oo : ms);
    if (i === cc || i === q0)
      return t.push(it);
    if (i === AQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(ms) : t.push(it);
    t.push(i);
  }), [s, t, r];
}, Hn = function(e, A, t, s) {
  var r = s[t];
  if (Array.isArray(e) ? e.indexOf(r) !== -1 : e === r)
    for (var n = t; n <= s.length; ) {
      n++;
      var o = s[n];
      if (o === A)
        return !0;
      if (o !== Ge)
        break;
    }
  if (r === Ge)
    for (var n = t; n > 0; ) {
      n--;
      var i = s[n];
      if (Array.isArray(e) ? e.indexOf(i) !== -1 : e === i)
        for (var a = t; a <= s.length; ) {
          a++;
          var o = s[a];
          if (o === A)
            return !0;
          if (o !== Ge)
            break;
        }
      if (i !== Ge)
        break;
    }
  return !1;
}, rl = function(e, A) {
  for (var t = e; t >= 0; ) {
    var s = A[t];
    if (s === Ge)
      t--;
    else
      return s;
  }
  return 0;
}, nQ = function(e, A, t, s, r) {
  if (t[s] === 0)
    return Z;
  var n = s - 1;
  if (Array.isArray(r) && r[n] === !0)
    return Z;
  var o = n - 1, i = n + 1, a = A[n], B = o >= 0 ? A[o] : 0, l = A[i];
  if (a === ic && l === lc)
    return Z;
  if (uo.indexOf(a) !== -1)
    return Bc;
  if (uo.indexOf(l) !== -1 || uc.indexOf(l) !== -1)
    return Z;
  if (rl(n, A) === ac)
    return Ys;
  if (Bo.get(e[n]) === so || (a === Js || a === Ws) && Bo.get(e[i]) === so || a === qi || l === qi || a === $i || [Ge, ro, $t].indexOf(a) === -1 && l === $i || [Xs, Gt, z0, wt, Qt].indexOf(l) !== -1 || rl(n, A) === Xt || Hn(yn, Xt, n, A) || Hn([Xs, Gt], oo, n, A) || Hn(Al, Al, n, A))
    return Z;
  if (a === Ge)
    return Ys;
  if (a === yn || l === yn)
    return Z;
  if (l === no || a === no)
    return Ys;
  if ([ro, $t, oo].indexOf(l) !== -1 || a === Z0 || B === ao && sQ.indexOf(a) !== -1 || a === Qt && l === ao || l === el || me.indexOf(l) !== -1 && a === GA || me.indexOf(a) !== -1 && l === GA || a === es && [ms, Js, Ws].indexOf(l) !== -1 || [ms, Js, Ws].indexOf(a) !== -1 && l === As || me.indexOf(a) !== -1 && tl.indexOf(l) !== -1 || tl.indexOf(a) !== -1 && me.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [es, As].indexOf(a) !== -1 && (l === GA || [Xt, $t].indexOf(l) !== -1 && A[i + 1] === GA) || // ( OP | HY ) × NU
  [Xt, $t].indexOf(a) !== -1 && l === GA || // NU ×	(NU | SY | IS)
  a === GA && [GA, Qt, wt].indexOf(l) !== -1)
    return Z;
  if ([GA, Qt, wt, Xs, Gt].indexOf(l) !== -1)
    for (var c = n; c >= 0; ) {
      var f = A[c];
      if (f === GA)
        return Z;
      if ([Qt, wt].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if ([es, As].indexOf(l) !== -1)
    for (var c = [Xs, Gt].indexOf(a) !== -1 ? o : n; c >= 0; ) {
      var f = A[c];
      if (f === GA)
        return Z;
      if ([Qt, wt].indexOf(f) !== -1)
        c--;
      else
        break;
    }
  if (co === a && [co, fr, io, lo].indexOf(l) !== -1 || [fr, io].indexOf(a) !== -1 && [fr, gr].indexOf(l) !== -1 || [gr, lo].indexOf(a) !== -1 && l === gr || sl.indexOf(a) !== -1 && [el, As].indexOf(l) !== -1 || sl.indexOf(l) !== -1 && a === es || me.indexOf(a) !== -1 && me.indexOf(l) !== -1 || a === wt && me.indexOf(l) !== -1 || me.concat(GA).indexOf(a) !== -1 && l === Xt && eQ.indexOf(e[i]) === -1 || me.concat(GA).indexOf(l) !== -1 && a === Gt)
    return Z;
  if (a === vn && l === vn) {
    for (var h = t[n], w = 1; h > 0 && (h--, A[h] === vn); )
      w++;
    if (w % 2 !== 0)
      return Z;
  }
  return a === Js && l === Ws ? Z : Ys;
}, oQ = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = rQ(e, A.lineBreak), s = t[0], r = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (r = r.map(function(i) {
    return [GA, it, cc].indexOf(i) !== -1 ? ms : i;
  }));
  var o = A.wordBreak === "keep-all" ? n.map(function(i, a) {
    return i && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [s, r, o];
}, iQ = (
  /** @class */
  function() {
    function e(A, t, s, r) {
      this.codePoints = A, this.required = t === Bc, this.start = s, this.end = r;
    }
    return e.prototype.slice = function() {
      return QA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), lQ = function(e, A) {
  var t = jr(e), s = oQ(t, A), r = s[0], n = s[1], o = s[2], i = t.length, a = 0, B = 0;
  return {
    next: function() {
      if (B >= i)
        return { done: !0, value: null };
      for (var l = Z; B < i && (l = nQ(t, n, r, ++B, o)) === Z; )
        ;
      if (l !== Z || B === i) {
        var c = new iQ(t, l, a, B);
        return a = B, { value: c, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const aQ = 1, cQ = 2, kt = 4, nl = 8, xr = 10, ol = 47, us = 92, BQ = 9, uQ = 32, js = 34, Jt = 61, fQ = 35, gQ = 36, dQ = 37, Zs = 39, zs = 40, Wt = 41, hQ = 95, NA = 45, pQ = 33, wQ = 60, QQ = 62, CQ = 64, bQ = 91, UQ = 93, FQ = 61, mQ = 123, qs = 63, xQ = 125, il = 124, EQ = 126, yQ = 128, ll = 65533, In = 42, ct = 43, vQ = 44, HQ = 58, IQ = 59, xs = 46, _Q = 0, LQ = 8, SQ = 11, KQ = 14, TQ = 31, kQ = 127, ce = -1, fc = 48, gc = 97, dc = 101, DQ = 102, OQ = 117, MQ = 122, hc = 65, pc = 69, wc = 70, RQ = 85, NQ = 90, _A = (e) => e >= fc && e <= 57, PQ = (e) => e >= 55296 && e <= 57343, Ct = (e) => _A(e) || e >= hc && e <= wc || e >= gc && e <= DQ, VQ = (e) => e >= gc && e <= MQ, GQ = (e) => e >= hc && e <= NQ, XQ = (e) => VQ(e) || GQ(e), JQ = (e) => e >= yQ, $s = (e) => e === xr || e === BQ || e === uQ, Er = (e) => XQ(e) || JQ(e) || e === hQ, al = (e) => Er(e) || _A(e) || e === NA, WQ = (e) => e >= _Q && e <= LQ || e === SQ || e >= KQ && e <= TQ || e === kQ, Pe = (e, A) => e !== us ? !1 : A !== xr, Ar = (e, A, t) => e === NA ? Er(A) || Pe(A, t) : Er(e) ? !0 : !!(e === us && Pe(e, A)), _n = (e, A, t) => e === ct || e === NA ? _A(A) ? !0 : A === xs && _A(t) : _A(e === xs ? A : e), YQ = (e) => {
  let A = 0, t = 1;
  (e[A] === ct || e[A] === NA) && (e[A] === NA && (t = -1), A++);
  const s = [];
  for (; _A(e[A]); )
    s.push(e[A++]);
  const r = s.length ? parseInt(QA(...s), 10) : 0;
  e[A] === xs && A++;
  const n = [];
  for (; _A(e[A]); )
    n.push(e[A++]);
  const o = n.length, i = o ? parseInt(QA(...n), 10) : 0;
  (e[A] === pc || e[A] === dc) && A++;
  let a = 1;
  (e[A] === ct || e[A] === NA) && (e[A] === NA && (a = -1), A++);
  const B = [];
  for (; _A(e[A]); )
    B.push(e[A++]);
  const l = B.length ? parseInt(QA(...B), 10) : 0;
  return t * (r + i * Math.pow(10, -o)) * Math.pow(10, a * l);
}, jQ = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, ZQ = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, zQ = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, qQ = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, $Q = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, AC = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, eC = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, tC = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, sC = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, rC = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, nC = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, er = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, oC = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, iC = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, lC = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, aC = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, cC = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, BC = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, uC = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, fC = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, fo = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class Qc {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(jr(A));
  }
  read() {
    const A = [];
    let t = this.consumeToken();
    for (; t !== fo; )
      A.push(t), t = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case js:
        return this.consumeStringToken(js);
      case fQ:
        const t = this.peekCodePoint(0), s = this.peekCodePoint(1), r = this.peekCodePoint(2);
        if (al(t) || Pe(s, r)) {
          const h = Ar(t, s, r) ? cQ : aQ;
          return { type: 5, value: this.consumeName(), flags: h };
        }
        break;
      case gQ:
        if (this.peekCodePoint(0) === Jt)
          return this.consumeCodePoint(), qQ;
        break;
      case Zs:
        return this.consumeStringToken(Zs);
      case zs:
        return jQ;
      case Wt:
        return ZQ;
      case In:
        if (this.peekCodePoint(0) === Jt)
          return this.consumeCodePoint(), nC;
        break;
      case ct:
        if (_n(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case vQ:
        return zQ;
      case NA:
        const n = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
        if (_n(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (Ar(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (o === NA && i === QQ)
          return this.consumeCodePoint(), this.consumeCodePoint(), lC;
        break;
      case xs:
        if (_n(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case ol:
        if (this.peekCodePoint(0) === In)
          for (this.consumeCodePoint(); ; ) {
            let h = this.consumeCodePoint();
            if (h === In && (h = this.consumeCodePoint(), h === ol))
              return this.consumeToken();
            if (h === ce)
              return this.consumeToken();
          }
        break;
      case HQ:
        return aC;
      case IQ:
        return cC;
      case wQ:
        if (this.peekCodePoint(0) === pQ && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), iC;
        break;
      case CQ:
        const a = this.peekCodePoint(0), B = this.peekCodePoint(1), l = this.peekCodePoint(2);
        if (Ar(a, B, l))
          return { type: 7, value: this.consumeName() };
        break;
      case bQ:
        return BC;
      case us:
        if (Pe(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case UQ:
        return uC;
      case FQ:
        if (this.peekCodePoint(0) === Jt)
          return this.consumeCodePoint(), $Q;
        break;
      case mQ:
        return sC;
      case xQ:
        return rC;
      case OQ:
      case RQ:
        const c = this.peekCodePoint(0), f = this.peekCodePoint(1);
        return c === ct && (Ct(f) || f === qs) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case il:
        if (this.peekCodePoint(0) === Jt)
          return this.consumeCodePoint(), eC;
        if (this.peekCodePoint(0) === il)
          return this.consumeCodePoint(), AC;
        break;
      case EQ:
        if (this.peekCodePoint(0) === Jt)
          return this.consumeCodePoint(), tC;
        break;
      case ce:
        return fo;
    }
    return $s(A) ? (this.consumeWhiteSpace(), fC) : _A(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Er(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: QA(A) };
  }
  consumeCodePoint() {
    const A = this._value.shift();
    return typeof A > "u" ? -1 : A;
  }
  reconsumeCodePoint(A) {
    this._value.unshift(A);
  }
  peekCodePoint(A) {
    return A >= this._value.length ? -1 : this._value[A];
  }
  consumeUnicodeRangeToken() {
    const A = [];
    let t = this.consumeCodePoint();
    for (; Ct(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    let s = !1;
    for (; t === qs && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), s = !0;
    if (s) {
      const n = parseInt(QA(...A.map((i) => i === qs ? fc : i)), 16), o = parseInt(QA(...A.map((i) => i === qs ? wc : i)), 16);
      return { type: 30, start: n, end: o };
    }
    const r = parseInt(QA(...A), 16);
    if (this.peekCodePoint(0) === NA && Ct(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      const n = [];
      for (; Ct(t) && n.length < 6; )
        n.push(t), t = this.consumeCodePoint();
      const o = parseInt(QA(...n), 16);
      return { type: 30, start: r, end: o };
    } else
      return { type: 30, start: r, end: r };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === zs ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === zs ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce)
      return { type: 22, value: "" };
    const t = this.peekCodePoint(0);
    if (t === Zs || t === js) {
      const s = this.consumeStringToken(this.consumeCodePoint());
      return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Wt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), er);
    }
    for (; ; ) {
      const s = this.consumeCodePoint();
      if (s === ce || s === Wt)
        return { type: 22, value: QA(...A) };
      if ($s(s))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Wt ? (this.consumeCodePoint(), { type: 22, value: QA(...A) }) : (this.consumeBadUrlRemnants(), er);
      if (s === js || s === Zs || s === zs || WQ(s))
        return this.consumeBadUrlRemnants(), er;
      if (s === us)
        if (Pe(s, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), er;
      else
        A.push(s);
    }
  }
  consumeWhiteSpace() {
    for (; $s(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === Wt || A === ce)
        return;
      Pe(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }
  consumeStringSlice(A) {
    let s = "";
    for (; A > 0; ) {
      const r = Math.min(5e4, A);
      s += QA(...this._value.splice(0, r)), A -= r;
    }
    return this._value.shift(), s;
  }
  consumeStringToken(A) {
    let t = "", s = 0;
    do {
      const r = this._value[s];
      if (r === ce || r === void 0 || r === A)
        return t += this.consumeStringSlice(s), { type: 0, value: t };
      if (r === xr)
        return this._value.splice(0, s), oC;
      if (r === us) {
        const n = this._value[s + 1];
        n !== ce && n !== void 0 && (n === xr ? (t += this.consumeStringSlice(s), s = -1, this._value.shift()) : Pe(r, n) && (t += this.consumeStringSlice(s), t += QA(this.consumeEscapedCodePoint()), s = -1));
      }
      s++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let t = kt, s = this.peekCodePoint(0);
    for ((s === ct || s === NA) && A.push(this.consumeCodePoint()); _A(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0);
    let r = this.peekCodePoint(1);
    if (s === xs && _A(r))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = nl; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0), r = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((s === pc || s === dc) && ((r === ct || r === NA) && _A(n) || _A(r)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = nl; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [YQ(A), t];
  }
  consumeNumericToken() {
    const [A, t] = this.consumeNumber(), s = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (Ar(s, r, n)) {
      const o = this.consumeName();
      return { type: 15, number: A, flags: t, unit: o };
    }
    return s === dQ ? (this.consumeCodePoint(), { type: 16, number: A, flags: t }) : { type: 17, number: A, flags: t };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (Ct(A)) {
      let t = QA(A);
      for (; Ct(this.peekCodePoint(0)) && t.length < 6; )
        t += QA(this.consumeCodePoint());
      $s(this.peekCodePoint(0)) && this.consumeCodePoint();
      const s = parseInt(t, 16);
      return s === 0 || PQ(s) || s > 1114111 ? ll : s;
    }
    return A === ce ? ll : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const t = this.consumeCodePoint();
      if (al(t))
        A += QA(t);
      else if (Pe(t, this.peekCodePoint(0)))
        A += QA(this.consumeEscapedCodePoint());
      else
        return this.reconsumeCodePoint(t), A;
    }
  }
}
class It {
  constructor(A) {
    this._tokens = A;
  }
  static create(A) {
    const t = new Qc();
    return t.write(A), new It(t.read());
  }
  static parseValue(A) {
    return It.create(A).parseComponentValue();
  }
  static parseValues(A) {
    return It.create(A).parseComponentValues();
  }
  parseComponentValue() {
    let A = this.consumeToken();
    for (; A.type === 31; )
      A = this.consumeToken();
    if (A.type === 32)
      throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
    this.reconsumeToken(A);
    const t = this.consumeComponentValue();
    do
      A = this.consumeToken();
    while (A.type === 31);
    if (A.type === 32)
      return t;
    throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
  }
  parseComponentValues() {
    const A = [];
    for (; ; ) {
      const t = this.consumeComponentValue();
      if (t.type === 32)
        return A;
      A.push(t), A.push();
    }
  }
  consumeComponentValue() {
    const A = this.consumeToken();
    switch (A.type) {
      case 11:
      case 28:
      case 2:
        return this.consumeSimpleBlock(A.type);
      case 19:
        return this.consumeFunction(A);
    }
    return A;
  }
  consumeSimpleBlock(A) {
    const t = { type: A, values: [] };
    let s = this.consumeToken();
    for (; ; ) {
      if (s.type === 32 || dC(s, A))
        return t;
      this.reconsumeToken(s), t.values.push(this.consumeComponentValue()), s = this.consumeToken();
    }
  }
  consumeFunction(A) {
    const t = {
      name: A.value,
      values: [],
      type: 18
      /* TokenType.FUNCTION */
    };
    for (; ; ) {
      const s = this.consumeToken();
      if (s.type === 32 || s.type === 3)
        return t;
      this.reconsumeToken(s), t.values.push(this.consumeComponentValue());
    }
  }
  consumeToken() {
    const A = this._tokens.shift();
    return typeof A > "u" ? fo : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const Ce = (e) => e.type === 15, UA = (e) => e.type === 17, j = (e) => e.type === 20, gC = (e) => e.type === 0, go = (e, A) => j(e) && e.value === A, Cc = (e) => e.type !== 31, IA = (e) => e.type !== 31 && e.type !== 4, be = (e) => {
  const A = [];
  let t = [];
  return e.forEach((s) => {
    if (s.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      A.push(t), t = [];
      return;
    }
    s.type !== 31 && t.push(s);
  }), t.length && A.push(t), A;
}, dC = (e, A) => A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3, ze = (e) => e.type === 17 || e.type === 15, BA = (e) => e.type === 16 || ze(e), hC = (e) => e.type === 18 && e.name === "calc", pC = (e, A = 0) => {
  const t = (s) => {
    let r = "";
    for (const n of s)
      if (n.type !== 31) {
        if (n.type === 18)
          if (n.name === "calc") {
            const o = t(n.values);
            if (o === null)
              return null;
            r += `(${o})`;
          } else
            return null;
        else if (n.type === 17)
          r += n.number.toString();
        else if (n.type === 15)
          n.unit === "px" ? r += n.number.toString() : n.unit === "rem" || n.unit === "em" ? r += (n.number * 16).toString() : r += n.number.toString();
        else if (n.type === 16)
          r += (n.number / 100 * A).toString();
        else if (n.type === 6) {
          const o = n.value;
          o === "+" || o === "-" || o === "*" || o === "/" ? r += ` ${o} ` : o === "(" ? r += "(" : o === ")" && (r += ")");
        }
      }
    return r;
  };
  try {
    const s = t(e.values);
    if (s === null || s.trim() === "")
      return null;
    const r = new Function("return " + s)();
    if (typeof r == "number" && !isNaN(r))
      return {
        type: 17,
        number: r,
        flags: kt
      };
  } catch {
    return null;
  }
  return null;
}, bc = (e) => e.length > 1 ? [e[0], e[1]] : [e[0]], HA = {
  type: 17,
  number: 0,
  flags: kt
}, Yo = {
  type: 16,
  number: 50,
  flags: kt
}, Xe = {
  type: 16,
  number: 100,
  flags: kt
}, ts = (e, A, t) => {
  const [s, r] = e;
  return [z(s, A), z(typeof r < "u" ? r : s, t)];
}, z = (e, A) => {
  if (e.type === 16)
    return e.number / 100 * A;
  if (Ce(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Uc = "deg", Fc = "grad", mc = "rad", xc = "turn", Dt = {
  name: "angle",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Uc:
          return Math.PI * A.number / 180;
        case Fc:
          return Math.PI / 200 * A.number;
        case mc:
          return A.number;
        case xc:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ec = (e) => e.type === 15 && (e.unit === Uc || e.unit === Fc || e.unit === mc || e.unit === xc), yc = (e) => {
  switch (e.filter(j).map((t) => t.value).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [HA, HA];
    case "to top":
    case "bottom":
      return ZA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [HA, Xe];
    case "to right":
    case "left":
      return ZA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Xe, Xe];
    case "to bottom":
    case "top":
      return ZA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Xe, HA];
    case "to left":
    case "right":
      return ZA(270);
  }
  return 0;
}, ZA = (e) => Math.PI * e / 180, Ye = (e) => (255 & e) === 0, aA = (e) => {
  const A = 255 & e, t = 255 & e >> 8, s = 255 & e >> 16, r = 255 & e >> 24;
  return A < 255 ? `rgba(${r},${s},${t},${A / 255})` : `rgb(${r},${s},${t})`;
}, se = (e, A, t, s) => (e << 24 | A << 16 | t << 8 | Math.round(s * 255) << 0) >>> 0, Ve = (e, A) => {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    const t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, dt = (e) => (e[0].type === 20 ? e[0].value : "unknown") === "from", pA = (e, A, t) => Math.min(Math.max(e, A), t), PA = (e, A) => [
  e[0] * A[0] + e[1] * A[1] + e[2] * A[2],
  e[3] * A[0] + e[4] * A[1] + e[5] * A[2],
  e[6] * A[0] + e[7] * A[1] + e[8] * A[2]
], wC = (e) => se(pA(Math.round(e[0] * 255), 0, 255), pA(Math.round(e[1] * 255), 0, 255), pA(Math.round(e[2] * 255), 0, 255), pA(e[3], 0, 1)), jo = ([e, A, t, s]) => {
  const r = ht([e, A, t]);
  return se(pA(Math.round(r[0] * 255), 0, 255), pA(Math.round(r[1] * 255), 0, 255), pA(Math.round(r[2] * 255), 0, 255), s);
}, _s = (e) => {
  const A = qe([e[0], e[1], e[2]]);
  return jo([A[0], A[1], A[2], e[3]]);
}, QC = (e, A) => {
  if (dt(A.filter(IA)))
    throw new Error("Relative color not supported for lab()");
  const [t, s, r, n] = Zr(A), o = ht(qe($r([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, CC = (e, A) => {
  if (dt(A.filter(IA)))
    throw new Error("Relative color not supported for oklab()");
  const [t, s, r, n] = Zr(A), o = ht(qe(qr([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, bC = (e, A) => {
  if (dt(A.filter(IA)))
    throw new Error("Relative color not supported for oklch()");
  const [t, s, r, n] = Ic(A), o = ht(qe(qr(zr([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, UC = (e, A) => {
  if (dt(A.filter(IA)))
    throw new Error("Relative color not supported for lch()");
  const [t, s, r, n] = Hc(A), o = ht(qe($r(zr([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, vc = (e, A) => {
  const t = A.filter(IA), [s, r, n, o] = t, i = (s.type === 17 ? ZA(s.number) : Dt.parse(e, s)) / (Math.PI * 2), a = BA(r) ? r.number / 100 : 0, B = BA(n) ? n.number / 100 : 0, l = typeof o < "u" && BA(o) ? z(o, 1) : 1;
  return [i, a, B, l];
}, cl = (e, A) => {
  if (dt(A))
    throw new Error("Relative color not supported for hsl()");
  const [t, s, r, n] = vc(e, A), o = Lc([t, s, r]);
  return se(o[0] * 255, o[1] * 255, o[2] * 255, s === 0 ? 1 : n);
}, Hc = (e) => {
  const A = e.filter(IA), t = BA(A[0]) ? A[0].number : 0, s = BA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && BA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Zr = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : UA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : UA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && BA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Ic = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : UA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : UA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && BA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, _c = (e) => PA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], e), Zo = (e) => PA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], e), Ln = (e, A, t) => (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e), Lc = ([e, A, t]) => {
  if (A === 0)
    return [t * 255, t * 255, t * 255];
  const s = t <= 0.5 ? t * (A + 1) : t + A - t * A, r = t * 2 - s, n = Ln(r, s, e + 1 / 3), o = Ln(r, s, e), i = Ln(r, s, e - 1 / 3);
  return [n, o, i];
}, zr = ([e, A, t]) => (A < 0 && (A = 0), isNaN(t) && (t = 0), [e, A * Math.cos(t * Math.PI / 180), A * Math.sin(t * Math.PI / 180)]), qr = (e) => {
  const A = PA([
    1,
    0.3963377773761749,
    0.2158037573099136,
    1,
    -0.1055613458156586,
    -0.0638541728258133,
    1,
    -0.0894841775298119,
    -1.2914855480194092
  ], e), t = A.map((s) => s ** 3);
  return PA([
    1.2268798758459243,
    -0.5578149944602171,
    0.2813910456659647,
    -0.0405757452148008,
    1.112286803280317,
    -0.0717110580655164,
    -0.0763729366746601,
    -0.4214933324022432,
    1.5869240198367816
  ], t);
}, $r = (e) => {
  const A = (e[0] + 16) / 116, t = e[1] / 500 + A, s = A - e[2] / 200, r = 24389 / 27, n = 24 / 116, o = [
    (t > n ? t ** 3 : (116 * t - 16) / r) * 0.3457 / 0.3585,
    e[0] > 8 ? A ** 3 : e[0] / r,
    (s > n ? s ** 3 : (116 * s - 16) / r) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return Zo([o[0], o[1], o[2]]);
}, FC = (e, A) => {
  const t = A.filter(IA);
  if (t.length === 3) {
    const [s, r, n] = t.map(Ve), o = po([s / 255, r / 255, n / 255]), [i, a, B] = ho([o[0], o[1], o[2]]);
    return [i, a, B, 1];
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ve), i = po([s / 255, r / 255, n / 255]), [a, B, l] = ho([i[0], i[1], i[2]]);
    return [a, B, l, o];
  }
  return [0, 0, 0, 1];
}, mC = (e, A) => {
  const [t, s, r, n] = vc(e, A), o = po(Lc([t, s, r])), [i, a, B] = ho([o[0], o[1], o[2]]);
  return [i, a, B, n];
}, xC = (e, A) => {
  const [t, s, r, n] = Zr(A), [o, i, a] = $r([t, s, r]);
  return [o, i, a, n];
}, EC = (e, A) => {
  const [t, s, r, n] = Hc(A), [o, i, a] = $r(zr([t, s, r]));
  return [o, i, a, n];
}, yC = (e, A) => {
  const [t, s, r, n] = Ic(A), [o, i, a] = qr(zr([t, s, r]));
  return [o, i, a, n];
}, vC = (e, A) => {
  const [t, s, r, n] = Zr(A), [o, i, a] = qr([t, s, r]);
  return [o, i, a, n];
}, HC = (e) => Zo([e[0], e[1], e[2]]), Bl = (e) => e, IC = (e) => {
  const [A, t, s] = _c([e[0], e[2], e[3]]);
  return [A, t, s, e[3]];
}, ul = (e) => _s([e[0], e[1], e[2], e[3]]), _C = (e) => {
  const A = HC([e[0], e[1], e[2]]);
  return _s([A[0], A[1], A[2], e[3]]);
}, qe = (e) => PA([
  3.2409699419045226,
  -1.537383177570094,
  -0.4986107602930034,
  -0.9692436362808796,
  1.8759675015077202,
  0.04155505740717559,
  0.05563007969699366,
  -0.20397695888897652,
  1.0569715142428786
], e), ho = (e) => PA([
  0.41239079926595934,
  0.357584339383878,
  0.1804807884018343,
  0.21263900587151027,
  0.715168678767756,
  0.07219231536073371,
  0.01933081871559182,
  0.11919477979462598,
  0.9505321522496607
], e), ht = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s > 31308e-7 ? t * (1.055 * s ** (1 / 2.4) - 0.055) : 12.92 * A;
}), po = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s <= 0.04045 ? A / 12.92 : t * ((s + 0.055) / 1.055) ** 2.4;
}), LC = (e) => {
  const [A, t, s] = ht(qe([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, SC = (e) => {
  const [A, t, s] = qe([e[0], e[1], e[2]]);
  return [
    pA(Math.round(A * 255), 0, 255),
    pA(Math.round(t * 255), 0, 255),
    pA(Math.round(s * 255), 0, 255),
    e[3]
  ];
}, KC = (e) => PA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], e), TC = (e) => PA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], e), kC = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1;
  return A * t <= 0.04045 ? A / 12.92 : t * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), DC = (e) => ht(e), OC = (e) => {
  const A = kC([e[0], e[1], e[2]]);
  return KC([A[0], A[1], A[2]]);
}, MC = (e) => {
  const [A, t, s] = DC(TC([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, RC = (e) => {
  const A = OC([e[0], e[1], e[2]]);
  return _s([A[0], A[1], A[2], e[3]]);
}, NC = (e) => PA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], e), PC = (e) => PA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], e), VC = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, GC = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, XC = (e) => {
  const [A, t, s] = GC(NC([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, JC = (e) => {
  const A = qe(PC(VC([e[0], e[1], e[2]])));
  return jo([A[0], A[1], A[2], e[3]]);
}, WC = (e) => PA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], e), YC = (e) => PA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], e), jC = (e) => e.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), ZC = (e) => e.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), zC = (e) => {
  const A = jC([e[0], e[1], e[2]]);
  return Zo(WC([A[0], A[1], A[2]]));
}, qC = (e) => {
  const [A, t, s] = ZC(YC(_c([e[0], e[1], e[2]])));
  return [A, t, s, e[3]];
}, $C = (e) => {
  const A = zC([e[0], e[1], e[2]]);
  return _s([A[0], A[1], A[2], e[3]]);
}, yr = 1.09929682680944, Sc = 0.018053968510807, Ab = (e) => e.map(function(A) {
  return A < Sc * 4.5 ? A / 4.5 : Math.pow((A + yr - 1) / yr, 1 / 0.45);
}), eb = (e) => e.map(function(A) {
  return A >= Sc ? yr * Math.pow(A, 0.45) - (yr - 1) : 4.5 * A;
}), tb = (e) => PA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], e), sb = (e) => PA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], e), rb = (e) => {
  const A = Ab([e[0], e[1], e[2]]);
  return tb([A[0], A[1], A[2]]);
}, nb = (e) => {
  const [A, t, s] = eb(sb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, ob = (e) => {
  const A = rb([e[0], e[1], e[2]]);
  return _s([A[0], A[1], A[2], e[3]]);
}, je = {
  name: "color",
  parse: (e, A) => {
    if (A.type === 18) {
      const t = cb[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return t(e, A.values);
    }
    if (A.type === 5) {
      const [t, s, r, n] = Kc(A);
      return se(t, s, r, n);
    }
    if (A.type === 20) {
      const t = pe[A.value.toUpperCase()];
      if (typeof t < "u")
        return t;
    }
    return pe.TRANSPARENT;
  }
}, Kc = (e) => {
  if (e.value.length === 3) {
    const A = e.value.substring(0, 1), t = e.value.substring(1, 2), s = e.value.substring(2, 3);
    return [parseInt(A + A, 16), parseInt(t + t, 16), parseInt(s + s, 16), 1];
  }
  if (e.value.length === 4) {
    const A = e.value.substring(0, 1), t = e.value.substring(1, 2), s = e.value.substring(2, 3), r = e.value.substring(3, 4);
    return [parseInt(A + A, 16), parseInt(t + t, 16), parseInt(s + s, 16), parseInt(r + r, 16) / 255];
  }
  if (e.value.length === 6) {
    const A = e.value.substring(0, 2), t = e.value.substring(2, 4), s = e.value.substring(4, 6);
    return [parseInt(A, 16), parseInt(t, 16), parseInt(s, 16), 1];
  }
  if (e.value.length === 8) {
    const A = e.value.substring(0, 2), t = e.value.substring(2, 4), s = e.value.substring(4, 6), r = e.value.substring(6, 8);
    return [parseInt(A, 16), parseInt(t, 16), parseInt(s, 16), parseInt(r, 16) / 255];
  }
  return [0, 0, 0, 1];
}, fl = (e, A) => {
  const t = A.filter(IA);
  if (dt(t))
    throw new Error("Relative color not supported for rgb()");
  if (t.length === 3) {
    const [s, r, n] = t.map(Ve);
    return se(s, r, n, 1);
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ve);
    return se(s, r, n, o);
  }
  if (t.length === 5 && t[3].type === 6 && t[3].value === "/") {
    const s = Ve(t[0], 0), r = Ve(t[1], 1), n = Ve(t[2], 2), o = Ve(t[4], 3);
    return se(s, r, n, o);
  }
  return 0;
}, ib = (e, A) => {
  const t = A.filter(IA), s = t[0].type === 20 ? t[0].value : "unknown";
  if (!dt(t)) {
    const n = s, o = gl[n];
    if (typeof o > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const i = UA(t[1]) ? t[1].number : 0, a = UA(t[2]) ? t[2].number : 0, B = UA(t[3]) ? t[3].number : 0, l = t.length > 4 && t[4].type === 6 && t[4].value === "/" && UA(t[5]) ? t[5].number : 1;
    return o([i, a, B, l]);
  } else {
    const n = (x, d) => {
      if (UA(d))
        return d.number;
      const m = (G) => G === "r" || G === "x" ? 0 : G === "g" || G === "y" ? 1 : 2;
      if (j(d)) {
        const G = m(d.value);
        return x[G];
      }
      const S = (G) => {
        const nA = G.filter(IA);
        let xA = "(";
        for (const uA of nA)
          xA += uA.type === 18 && uA.name === "calc" ? S(uA.values) : UA(uA) ? uA.number : uA.type === 6 || j(uA) ? uA.value : "";
        return xA += ")", xA;
      };
      if (d.type === 18) {
        const G = d.values.filter(IA);
        if (d.name === "calc") {
          const nA = S(G).replace(/r|x/, x[0].toString()).replace(/g|y/, x[1].toString()).replace(/b|z/, x[2].toString());
          return new Function("return " + nA)();
        }
      }
      return null;
    }, o = t[1].type === 18 ? t[1].name : j(t[1]) || t[1].type === 5 ? "rgb" : "unknown", i = j(t[2]) ? t[2].value : "unknown";
    let a = t[1].type === 18 ? t[1].values : j(t[1]) ? [t[1]] : [];
    if (j(t[1])) {
      if (typeof pe[t[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const d = _t(e, t[1].value), m = 255 & d, S = 255 & d >> 8, G = 255 & d >> 16;
        a = [
          { type: 17, number: 255 & d >> 24, flags: 1 },
          { type: 17, number: G, flags: 1 },
          { type: 17, number: S, flags: 1 },
          { type: 17, number: m > 1 ? m / 255 : m, flags: 1 }
        ];
      }
    } else if (t[1].type === 5) {
      const [x, d, m, S] = Kc(t[1]);
      a = [
        { type: 17, number: x, flags: 1 },
        { type: 17, number: d, flags: 1 },
        { type: 17, number: m, flags: 1 },
        { type: 17, number: S > 1 ? S / 255 : S, flags: 1 }
      ];
    }
    if (a.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (i === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const B = lb[o], l = ab[i], c = gl[i];
    if (typeof B > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    if (typeof l > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    const f = B(e, a), h = l(f), w = n(h, t[3]), U = n(h, t[4]), E = n(h, t[5]), I = t.length > 6 && t[6].type === 6 && t[6].value === "/" && UA(t[7]) ? t[7].number : 1;
    if (w === null || U === null || E === null)
      throw new Error("Invalid relative color in color() function");
    return c([w, U, E, I]);
  }
}, gl = {
  srgb: wC,
  "srgb-linear": jo,
  "display-p3": RC,
  "a98-rgb": JC,
  "prophoto-rgb": $C,
  xyz: ul,
  "xyz-d50": _C,
  "xyz-d65": ul,
  rec2020: ob
}, lb = {
  rgb: FC,
  hsl: mC,
  lab: xC,
  lch: EC,
  oklab: vC,
  oklch: yC
}, ab = {
  srgb: LC,
  "srgb-linear": SC,
  "display-p3": MC,
  "a98-rgb": XC,
  "prophoto-rgb": qC,
  xyz: Bl,
  "xyz-d50": IC,
  "xyz-d65": Bl,
  rec2020: nb
}, cb = {
  hsl: cl,
  hsla: cl,
  rgb: fl,
  rgba: fl,
  lch: UC,
  oklch: bC,
  oklab: CC,
  lab: QC,
  color: ib
}, _t = (e, A) => je.parse(e, It.create(A).parseComponentValue()), pe = {
  ALICEBLUE: 4042850303,
  ANTIQUEWHITE: 4209760255,
  AQUA: 16777215,
  AQUAMARINE: 2147472639,
  AZURE: 4043309055,
  BEIGE: 4126530815,
  BISQUE: 4293182719,
  BLACK: 255,
  BLANCHEDALMOND: 4293643775,
  BLUE: 65535,
  BLUEVIOLET: 2318131967,
  BROWN: 2771004159,
  BURLYWOOD: 3736635391,
  CADETBLUE: 1604231423,
  CHARTREUSE: 2147418367,
  CHOCOLATE: 3530104575,
  CORAL: 4286533887,
  CORNFLOWERBLUE: 1687547391,
  CORNSILK: 4294499583,
  CRIMSON: 3692313855,
  CYAN: 16777215,
  DARKBLUE: 35839,
  DARKCYAN: 9145343,
  DARKGOLDENROD: 3095837695,
  DARKGRAY: 2846468607,
  DARKGREEN: 6553855,
  DARKGREY: 2846468607,
  DARKKHAKI: 3182914559,
  DARKMAGENTA: 2332068863,
  DARKOLIVEGREEN: 1433087999,
  DARKORANGE: 4287365375,
  DARKORCHID: 2570243327,
  DARKRED: 2332033279,
  DARKSALMON: 3918953215,
  DARKSEAGREEN: 2411499519,
  DARKSLATEBLUE: 1211993087,
  DARKSLATEGRAY: 793726975,
  DARKSLATEGREY: 793726975,
  DARKTURQUOISE: 13554175,
  DARKVIOLET: 2483082239,
  DEEPPINK: 4279538687,
  DEEPSKYBLUE: 12582911,
  DIMGRAY: 1768516095,
  DIMGREY: 1768516095,
  DODGERBLUE: 512819199,
  FIREBRICK: 2988581631,
  FLORALWHITE: 4294635775,
  FORESTGREEN: 579543807,
  FUCHSIA: 4278255615,
  GAINSBORO: 3705462015,
  GHOSTWHITE: 4177068031,
  GOLD: 4292280575,
  GOLDENROD: 3668254975,
  GRAY: 2155905279,
  GREEN: 8388863,
  GREENYELLOW: 2919182335,
  GREY: 2155905279,
  HONEYDEW: 4043305215,
  HOTPINK: 4285117695,
  INDIANRED: 3445382399,
  INDIGO: 1258324735,
  IVORY: 4294963455,
  KHAKI: 4041641215,
  LAVENDER: 3873897215,
  LAVENDERBLUSH: 4293981695,
  LAWNGREEN: 2096890111,
  LEMONCHIFFON: 4294626815,
  LIGHTBLUE: 2916673279,
  LIGHTCORAL: 4034953471,
  LIGHTCYAN: 3774873599,
  LIGHTGOLDENRODYELLOW: 4210742015,
  LIGHTGRAY: 3553874943,
  LIGHTGREEN: 2431553791,
  LIGHTGREY: 3553874943,
  LIGHTPINK: 4290167295,
  LIGHTSALMON: 4288707327,
  LIGHTSEAGREEN: 548580095,
  LIGHTSKYBLUE: 2278488831,
  LIGHTSLATEGRAY: 2005441023,
  LIGHTSLATEGREY: 2005441023,
  LIGHTSTEELBLUE: 2965692159,
  LIGHTYELLOW: 4294959359,
  LIME: 16711935,
  LIMEGREEN: 852308735,
  LINEN: 4210091775,
  MAGENTA: 4278255615,
  MAROON: 2147483903,
  MEDIUMAQUAMARINE: 1724754687,
  MEDIUMBLUE: 52735,
  MEDIUMORCHID: 3126187007,
  MEDIUMPURPLE: 2473647103,
  MEDIUMSEAGREEN: 1018393087,
  MEDIUMSLATEBLUE: 2070474495,
  MEDIUMSPRINGGREEN: 16423679,
  MEDIUMTURQUOISE: 1221709055,
  MEDIUMVIOLETRED: 3340076543,
  MIDNIGHTBLUE: 421097727,
  MINTCREAM: 4127193855,
  MISTYROSE: 4293190143,
  MOCCASIN: 4293178879,
  NAVAJOWHITE: 4292783615,
  NAVY: 33023,
  OLDLACE: 4260751103,
  OLIVE: 2155872511,
  OLIVEDRAB: 1804477439,
  ORANGE: 4289003775,
  ORANGERED: 4282712319,
  ORCHID: 3664828159,
  PALEGOLDENROD: 4008225535,
  PALEGREEN: 2566625535,
  PALETURQUOISE: 2951671551,
  PALEVIOLETRED: 3681588223,
  PAPAYAWHIP: 4293907967,
  PEACHPUFF: 4292524543,
  PERU: 3448061951,
  PINK: 4290825215,
  PLUM: 3718307327,
  POWDERBLUE: 2967529215,
  PURPLE: 2147516671,
  REBECCAPURPLE: 1714657791,
  RED: 4278190335,
  ROSYBROWN: 3163525119,
  ROYALBLUE: 1097458175,
  SADDLEBROWN: 2336560127,
  SALMON: 4202722047,
  SANDYBROWN: 4104413439,
  SEAGREEN: 780883967,
  SEASHELL: 4294307583,
  SIENNA: 2689740287,
  SILVER: 3233857791,
  SKYBLUE: 2278484991,
  SLATEBLUE: 1784335871,
  SLATEGRAY: 1887473919,
  SLATEGREY: 1887473919,
  SNOW: 4294638335,
  SPRINGGREEN: 16744447,
  STEELBLUE: 1182971135,
  TAN: 3535047935,
  TEAL: 8421631,
  THISTLE: 3636451583,
  TOMATO: 4284696575,
  TRANSPARENT: 0,
  TURQUOISE: 1088475391,
  VIOLET: 4001558271,
  WHEAT: 4125012991,
  WHITE: 4294967295,
  WHITESMOKE: 4126537215,
  YELLOW: 4294902015,
  YELLOWGREEN: 2597139199
}, Bb = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.map((t) => {
    if (j(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, ub = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, An = (e, A) => {
  const t = je.parse(e, A[0]), s = A[1];
  return s && BA(s) ? { color: t, stop: s } : { color: t, stop: null };
}, dl = (e, A) => {
  const t = e[0], s = e[e.length - 1];
  t.stop === null && (t.stop = HA), s.stop === null && (s.stop = Xe);
  const r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    const a = e[i].stop;
    if (a !== null) {
      const B = z(a, A);
      B > n ? r.push(B) : r.push(n), n = B;
    } else
      r.push(null);
  }
  let o = null;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (a === null)
      o === null && (o = i);
    else if (o !== null) {
      const B = i - o, l = r[o - 1], c = (a - l) / (B + 1);
      for (let f = 1; f <= B; f++)
        r[o + f - 1] = c * f;
      o = null;
    }
  }
  return e.map(({ color: i }, a) => ({ color: i, stop: Math.max(Math.min(1, r[a] / A), 0) }));
}, fb = (e, A, t) => {
  const s = A / 2, r = t / 2, n = z(e[0], A) - s, o = r - z(e[1], t);
  return (Math.atan2(o, n) + Math.PI * 2) % (Math.PI * 2);
}, gb = (e, A, t) => {
  const s = typeof e == "number" ? e : fb(e, A, t), r = Math.abs(A * Math.sin(s)) + Math.abs(t * Math.cos(s)), n = A / 2, o = t / 2, i = r / 2, a = Math.sin(s - Math.PI / 2) * i, B = Math.cos(s - Math.PI / 2) * i;
  return [r, n - B, n + B, o - a, o + a];
}, $A = (e, A) => Math.sqrt(e * e + A * A), hl = (e, A, t, s, r) => [
  [0, 0],
  [0, A],
  [e, 0],
  [e, A]
].reduce((o, i) => {
  const [a, B] = i, l = $A(t - a, s - B);
  return (r ? l < o.optimumDistance : l > o.optimumDistance) ? {
    optimumCorner: i,
    optimumDistance: l
  } : o;
}, {
  optimumDistance: r ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, db = (e, A, t, s, r) => {
  let n = 0, o = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = o = Math.min(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - s)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (e.shape === 0)
        n = o = Math.min($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(A), Math.abs(A - s)), [a, B] = hl(s, r, A, t, !0);
        n = $A(a - A, (B - t) / i), o = i * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = o = Math.max(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - s)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (e.shape === 0)
        n = o = Math.max($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(A), Math.abs(A - s)), [a, B] = hl(s, r, A, t, !1);
        n = $A(a - A, (B - t) / i), o = i * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = z(e.size[0], s), o = e.size.length === 2 ? z(e.size[1], r) : n), [n, o];
}, hb = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && i.value === "to") {
        t = yc(r);
        return;
      } else if (Ec(i)) {
        t = Dt.parse(e, i);
        return;
      }
    }
    const o = An(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, tr = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = yc(r);
        return;
      } else if (Ec(i)) {
        t = (Dt.parse(e, i) + ZA(270)) % ZA(360);
        return;
      }
    }
    const o = An(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, pb = (e, A) => {
  const t = ZA(180), s = [];
  let r = 1;
  const n = 0, o = 3, i = [];
  return be(A).forEach((a, B) => {
    const l = a[0];
    if (B === 0) {
      if (j(l) && l.value === "linear") {
        r = 1;
        return;
      } else if (j(l) && l.value === "radial") {
        r = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        const c = je.parse(e, l.values[0]);
        s.push({ stop: HA, color: c });
      } else if (l.name === "to") {
        const c = je.parse(e, l.values[0]);
        s.push({ stop: Xe, color: c });
      } else if (l.name === "color-stop") {
        const c = l.values.filter(IA);
        if (c.length === 2) {
          const f = je.parse(e, c[1]), h = c[0];
          UA(h) && s.push({
            stop: { type: 16, number: h.number * 100, flags: h.flags },
            color: f
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + ZA(180)) % ZA(360),
    stops: s,
    type: r
  } : { size: o, shape: n, stops: s, position: i, type: r };
}, Tc = "closest-side", kc = "farthest-side", Dc = "closest-corner", Oc = "farthest-corner", Mc = "circle", Rc = "ellipse", Nc = "cover", Pc = "contain", wb = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let a = !0;
    if (i === 0) {
      let B = !1;
      a = o.reduce((l, c) => {
        if (B)
          if (j(c))
            switch (c.value) {
              case "center":
                return n.push(Yo), l;
              case "top":
              case "left":
                return n.push(HA), l;
              case "right":
              case "bottom":
                return n.push(Xe), l;
            }
          else (BA(c) || ze(c)) && n.push(c);
        else if (j(c))
          switch (c.value) {
            case Mc:
              return t = 0, !1;
            case Rc:
              return t = 1, !1;
            case "at":
              return B = !0, !1;
            case Tc:
              return s = 0, !1;
            case Nc:
            case kc:
              return s = 1, !1;
            case Pc:
            case Dc:
              return s = 2, !1;
            case Oc:
              return s = 3, !1;
          }
        else if (ze(c) || BA(c))
          return Array.isArray(s) || (s = []), s.push(c), !1;
        return l;
      }, a);
    }
    if (a) {
      const B = An(e, o);
      r.push(B);
    }
  }), {
    size: s,
    shape: t,
    stops: r,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, sr = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let a = !0;
    if (i === 0 ? a = o.reduce((B, l) => {
      if (j(l))
        switch (l.value) {
          case "center":
            return n.push(Yo), !1;
          case "top":
          case "left":
            return n.push(HA), !1;
          case "right":
          case "bottom":
            return n.push(Xe), !1;
        }
      else if (BA(l) || ze(l))
        return n.push(l), !1;
      return B;
    }, a) : i === 1 && (a = o.reduce((B, l) => {
      if (j(l))
        switch (l.value) {
          case Mc:
            return t = 0, !1;
          case Rc:
            return t = 1, !1;
          case Pc:
          case Tc:
            return s = 0, !1;
          case kc:
            return s = 1, !1;
          case Dc:
            return s = 2, !1;
          case Nc:
          case Oc:
            return s = 3, !1;
        }
      else if (ze(l) || BA(l))
        return Array.isArray(s) || (s = []), s.push(l), !1;
      return B;
    }, a)), a) {
      const B = An(e, o);
      r.push(B);
    }
  }), {
    size: s,
    shape: t,
    stops: r,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, Qb = (e) => e.type === 1, Cb = (e) => e.type === 2, zo = {
  name: "image",
  parse: (e, A) => {
    if (A.type === 22) {
      const t = {
        url: A.value,
        type: 0
        /* CSSImageType.URL */
      };
      return e.cache.addImage(A.value), t;
    }
    if (A.type === 18) {
      const t = Vc[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return t(e, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function bb(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Vc[e.name]);
}
const Vc = {
  "linear-gradient": hb,
  "-moz-linear-gradient": tr,
  "-ms-linear-gradient": tr,
  "-o-linear-gradient": tr,
  "-webkit-linear-gradient": tr,
  "radial-gradient": wb,
  "-moz-radial-gradient": sr,
  "-ms-radial-gradient": sr,
  "-o-radial-gradient": sr,
  "-webkit-radial-gradient": sr,
  "-webkit-gradient": pb
}, Ub = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter((s) => IA(s) && bb(s)).map((s) => zo.parse(e, s));
  }
}, Fb = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.map((t) => {
    if (j(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, mb = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (e, A) => be(A).map((t) => t.map((s) => hC(s) ? pC(s, 0) : BA(s) ? s : null).filter((s) => s !== null)).map(bc)
}, xb = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(j).map((s) => s.value).join(" ")).map(Eb)
}, Eb = (e) => {
  switch (e) {
    case "no-repeat":
      return 1;
    case "repeat-x":
    case "repeat no-repeat":
      return 2;
    case "repeat-y":
    case "no-repeat repeat":
      return 3;
    case "repeat":
    default:
      return 0;
  }
};
var Lt;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Lt || (Lt = {}));
const yb = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(vb))
}, vb = (e) => j(e) || BA(e), en = (e) => ({
  name: `border-${e}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), Hb = en("top"), Ib = en("right"), _b = en("bottom"), Lb = en("left"), tn = (e) => ({
  name: `border-radius-${e}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, t) => bc(t.filter(BA))
}), Sb = tn("top-left"), Kb = tn("top-right"), Tb = tn("bottom-right"), kb = tn("bottom-left"), sn = (e) => ({
  name: `border-${e}-style`,
  initialValue: "solid",
  prefix: !1,
  type: 2,
  parse: (A, t) => {
    switch (t) {
      case "none":
        return 0;
      case "dashed":
        return 2;
      case "dotted":
        return 3;
      case "double":
        return 4;
    }
    return 1;
  }
}), Db = sn("top"), Ob = sn("right"), Mb = sn("bottom"), Rb = sn("left"), rn = (e) => ({
  name: `border-${e}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, t) => Ce(t) ? t.number : 0
}), Nb = rn("top"), Pb = rn("right"), Vb = rn("bottom"), Gb = rn("left"), Xb = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Jb = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, Wb = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | Yb(s.value),
    0
    /* DISPLAY.NONE */
  )
}, Yb = (e) => {
  switch (e) {
    case "block":
    case "-webkit-box":
      return 2;
    case "inline":
      return 4;
    case "run-in":
      return 8;
    case "flow":
      return 16;
    case "flow-root":
      return 32;
    case "table":
      return 64;
    case "flex":
    case "-webkit-flex":
      return 128;
    case "grid":
    case "-ms-grid":
      return 256;
    case "ruby":
      return 512;
    case "subgrid":
      return 1024;
    case "list-item":
      return 2048;
    case "table-row-group":
      return 4096;
    case "table-header-group":
      return 8192;
    case "table-footer-group":
      return 16384;
    case "table-row":
      return 32768;
    case "table-cell":
      return 65536;
    case "table-column-group":
      return 131072;
    case "table-column":
      return 262144;
    case "table-caption":
      return 524288;
    case "ruby-base":
      return 1048576;
    case "ruby-text":
      return 2097152;
    case "ruby-base-container":
      return 4194304;
    case "ruby-text-container":
      return 8388608;
    case "contents":
      return 16777216;
    case "inline-block":
      return 33554432;
    case "inline-list-item":
      return 67108864;
    case "inline-table":
      return 134217728;
    case "inline-flex":
      return 268435456;
    case "inline-grid":
      return 536870912;
  }
  return 0;
}, jb = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "left":
        return 1;
      case "right":
        return 2;
      case "inline-start":
        return 3;
      case "inline-end":
        return 4;
    }
    return 0;
  }
}, Zb = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var vr;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(vr || (vr = {}));
const zb = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "strict":
        return vr.STRICT;
      case "normal":
      default:
        return vr.NORMAL;
    }
  }
}, qb = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, pl = (e, A) => j(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : BA(e) ? z(e, A) : A, $b = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : zo.parse(e, A)
}, AU = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, wo = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "disc":
        return 0;
      case "circle":
        return 1;
      case "square":
        return 2;
      case "decimal":
        return 3;
      case "cjk-decimal":
        return 4;
      case "decimal-leading-zero":
        return 5;
      case "lower-roman":
        return 6;
      case "upper-roman":
        return 7;
      case "lower-greek":
        return 8;
      case "lower-alpha":
        return 9;
      case "upper-alpha":
        return 10;
      case "arabic-indic":
        return 11;
      case "armenian":
        return 12;
      case "bengali":
        return 13;
      case "cambodian":
        return 14;
      case "cjk-earthly-branch":
        return 15;
      case "cjk-heavenly-stem":
        return 16;
      case "cjk-ideographic":
        return 17;
      case "devanagari":
        return 18;
      case "ethiopic-numeric":
        return 19;
      case "georgian":
        return 20;
      case "gujarati":
        return 21;
      case "gurmukhi":
        return 22;
      case "hebrew":
        return 52;
      case "hiragana":
        return 23;
      case "hiragana-iroha":
        return 24;
      case "japanese-formal":
        return 25;
      case "japanese-informal":
        return 26;
      case "kannada":
        return 27;
      case "katakana":
        return 28;
      case "katakana-iroha":
        return 29;
      case "khmer":
        return 30;
      case "korean-hangul-formal":
        return 31;
      case "korean-hanja-formal":
        return 32;
      case "korean-hanja-informal":
        return 33;
      case "lao":
        return 34;
      case "lower-armenian":
        return 35;
      case "malayalam":
        return 36;
      case "mongolian":
        return 37;
      case "myanmar":
        return 38;
      case "oriya":
        return 39;
      case "persian":
        return 40;
      case "simp-chinese-formal":
        return 41;
      case "simp-chinese-informal":
        return 42;
      case "tamil":
        return 43;
      case "telugu":
        return 44;
      case "thai":
        return 45;
      case "tibetan":
        return 46;
      case "trad-chinese-formal":
        return 47;
      case "trad-chinese-informal":
        return 48;
      case "upper-armenian":
        return 49;
      case "disclosure-open":
        return 50;
      case "disclosure-closed":
        return 51;
      case "none":
      default:
        return -1;
    }
  }
}, nn = (e) => ({
  name: `margin-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), eU = nn("top"), tU = nn("right"), sU = nn("bottom"), rU = nn("left"), nU = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).map((t) => {
    switch (t.value) {
      case "hidden":
        return 1;
      case "scroll":
        return 2;
      case "clip":
        return 3;
      case "auto":
        return 4;
      case "visible":
      default:
        return 0;
    }
  })
}, oU = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, on = (e) => ({
  name: `padding-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), iU = on("top"), lU = on("right"), aU = on("bottom"), cU = on("left"), BU = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "right":
        return 2;
      case "center":
      case "justify":
        return 1;
      case "left":
      default:
        return 0;
    }
  }
}, uU = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "relative":
        return 1;
      case "absolute":
        return 2;
      case "fixed":
        return 3;
      case "sticky":
        return 4;
    }
    return 0;
  }
}, fU = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && go(A[0], "none") ? [] : be(A).map((t) => {
    const s = {
      color: pe.TRANSPARENT,
      offsetX: HA,
      offsetY: HA,
      blur: HA
    };
    let r = 0;
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      ze(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : s.blur = o, r++) : s.color = je.parse(e, o);
    }
    return s;
  })
}, gU = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, dU = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const t = QU[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return t(e, A.values);
    }
    return null;
  }
}, hU = (e, A) => {
  const t = A.filter(
    (s) => s.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((s) => s.number);
  return t.length === 6 ? t : null;
}, pU = (e, A) => {
  const t = A.filter(
    (B) => B.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((B) => B.number), [s, r, {}, {}, n, o, {}, {}, {}, {}, {}, {}, i, a] = t;
  return t.length === 16 ? [s, r, n, o, i, a] : null;
}, wU = (e, A) => {
  if (A.length !== 1)
    return null;
  const t = A[0];
  let s = 0;
  if (t.type === 17 && t.number === 0)
    s = 0;
  else if (t.type === 15)
    s = Dt.parse(e, t);
  else
    return null;
  const r = Math.cos(s), n = Math.sin(s);
  return [r, n, -n, r, 0, 0];
}, QU = {
  matrix: hU,
  matrix3d: pU,
  rotate: wU
}, wl = {
  type: 16,
  number: 50,
  flags: kt
}, CU = [wl, wl], bU = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    const t = A.filter(BA);
    return t.length !== 2 ? CU : [t[0], t[1]];
  }
}, UU = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? Dt.parse(e, A) * 180 / Math.PI : null
}, FU = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
};
var fs;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(fs || (fs = {}));
const mU = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-all":
        return fs.BREAK_ALL;
      case "keep-all":
        return fs.KEEP_ALL;
      case "normal":
      default:
        return fs.NORMAL;
    }
  }
}, xU = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (UA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Gc = {
  name: "time",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit.toLowerCase()) {
        case "s":
          return 1e3 * A.number;
        case "ms":
          return A.number;
      }
    throw new Error("Unsupported time type");
  }
}, EU = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (e, A) => UA(A) ? A.number : 1
}, yU = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, vU = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).map((t) => {
    switch (t.value) {
      case "underline":
        return 1;
      case "overline":
        return 2;
      case "line-through":
        return 3;
      case "none":
        return 4;
    }
    return 0;
  }).filter(
    (t) => t !== 0
    /* TEXT_DECORATION_LINE.NONE */
  )
}, HU = {
  name: "text-decoration-style",
  initialValue: "solid",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "double":
        return 1;
      case "dotted":
        return 2;
      case "dashed":
        return 3;
      case "wavy":
        return 4;
      case "solid":
      default:
        return 0;
    }
  }
}, IU = {
  name: "text-decoration-thickness",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => {
    if (j(A))
      switch (A.value) {
        case "auto":
          return "auto";
        case "from-font":
          return "from-font";
      }
    return Ce(A) ? A.number : "auto";
  }
}, _U = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => j(A) && A.value === "auto" ? "auto" : Ce(A) ? A.number : "auto"
}, LU = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: (e, A) => {
    const t = [], s = [];
    return A.forEach((r) => {
      switch (r.type) {
        case 20:
        case 0:
          t.push(r.value);
          break;
        case 17:
          t.push(r.number.toString());
          break;
        case 4:
          s.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && s.push(t.join(" ")), s.map((r) => r.indexOf(" ") === -1 ? r : `'${r}'`);
  }
}, SU = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, KU = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: (e, A) => {
    if (UA(A))
      return A.number;
    if (j(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, TU = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.filter(j).map((t) => t.value)
}, kU = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, dA = (e, A) => (e & A) !== 0, DU = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A;
  }
}, OU = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return null;
    const t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    const s = [], r = A.filter(Cc);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = r[n + 1];
      if (o.type === 20) {
        const a = i && UA(i) ? i.number : 1;
        s.push({ counter: o.value, increment: a });
      }
    }
    return s;
  }
}, MU = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = [], s = A.filter(Cc);
    for (let r = 0; r < s.length; r++) {
      const n = s[r], o = s[r + 1];
      if (j(n) && n.value !== "none") {
        const i = o && UA(o) ? o.number : 0;
        t.push({ counter: n.value, reset: i });
      }
    }
    return t;
  }
}, RU = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(Ce).map((t) => Gc.parse(e, t))
}, NU = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return null;
    const t = A[0];
    if (t.type === 20 && t.value === "none")
      return null;
    const s = [], r = A.filter(gC);
    if (r.length % 2 !== 0)
      return null;
    for (let n = 0; n < r.length; n += 2) {
      const o = r[n].value, i = r[n + 1].value;
      s.push({ open: o, close: i });
    }
    return s;
  }
}, Ql = (e, A, t) => {
  if (!e)
    return "";
  const s = e[Math.min(A, e.length - 1)];
  return s ? t ? s.open : s.close : "";
}, PU = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && go(A[0], "none") ? [] : be(A).map((t) => {
    const s = {
      color: 255,
      offsetX: HA,
      offsetY: HA,
      blur: HA,
      spread: HA,
      inset: !1
    };
    let r = 0;
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      go(o, "inset") ? s.inset = !0 : ze(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : r === 2 ? s.blur = o : s.spread = o, r++) : s.color = je.parse(e, o);
    }
    return s;
  })
}, VU = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: (e, A) => {
    const t = [
      0,
      1,
      2
      /* PAINT_ORDER_LAYER.MARKERS */
    ], s = [];
    return A.filter(j).forEach((r) => {
      switch (r.value) {
        case "stroke":
          s.push(
            1
            /* PAINT_ORDER_LAYER.STROKE */
          );
          break;
        case "fill":
          s.push(
            0
            /* PAINT_ORDER_LAYER.FILL */
          );
          break;
        case "markers":
          s.push(
            2
            /* PAINT_ORDER_LAYER.MARKERS */
          );
          break;
      }
    }), t.forEach((r) => {
      s.indexOf(r) === -1 && s.push(r);
    }), s;
  }
}, GU = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, XU = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (e, A) => Ce(A) ? A.number : 0
}, JU = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, WU = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | YU(s.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, YU = (e) => {
  switch (e) {
    case "contain":
      return 2;
    case "cover":
      return 4;
    case "none":
      return 8;
    case "scale-down":
      return 16;
  }
  return 0;
}, jU = {
  name: "text-overflow",
  initialValue: "clip",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "ellipsis":
        return 1;
      case "clip":
      default:
        return 0;
    }
  }
};
class ZU {
  constructor(A, t) {
    this.animationDuration = D(A, RU, t.animationDuration), this.backgroundClip = D(A, Bb, t.backgroundClip), this.backgroundColor = D(A, ub, t.backgroundColor), this.backgroundImage = D(A, Ub, t.backgroundImage), this.backgroundOrigin = D(A, Fb, t.backgroundOrigin), this.backgroundPosition = D(A, mb, t.backgroundPosition), this.backgroundRepeat = D(A, xb, t.backgroundRepeat), this.backgroundSize = D(A, yb, t.backgroundSize), this.borderTopColor = D(A, Hb, t.borderTopColor), this.borderRightColor = D(A, Ib, t.borderRightColor), this.borderBottomColor = D(A, _b, t.borderBottomColor), this.borderLeftColor = D(A, Lb, t.borderLeftColor), this.borderTopLeftRadius = D(A, Sb, t.borderTopLeftRadius), this.borderTopRightRadius = D(A, Kb, t.borderTopRightRadius), this.borderBottomRightRadius = D(A, Tb, t.borderBottomRightRadius), this.borderBottomLeftRadius = D(A, kb, t.borderBottomLeftRadius), this.borderTopStyle = D(A, Db, t.borderTopStyle), this.borderRightStyle = D(A, Ob, t.borderRightStyle), this.borderBottomStyle = D(A, Mb, t.borderBottomStyle), this.borderLeftStyle = D(A, Rb, t.borderLeftStyle), this.borderTopWidth = D(A, Nb, t.borderTopWidth), this.borderRightWidth = D(A, Pb, t.borderRightWidth), this.borderBottomWidth = D(A, Vb, t.borderBottomWidth), this.borderLeftWidth = D(A, Gb, t.borderLeftWidth), this.boxShadow = D(A, PU, t.boxShadow), this.color = D(A, Xb, t.color), this.direction = D(A, Jb, t.direction), this.display = D(A, Wb, t.display), this.float = D(A, jb, t.cssFloat), this.fontFamily = D(A, LU, t.fontFamily), this.fontSize = D(A, SU, t.fontSize), this.fontStyle = D(A, kU, t.fontStyle), this.fontVariant = D(A, TU, t.fontVariant), this.fontWeight = D(A, KU, t.fontWeight), this.letterSpacing = D(A, Zb, t.letterSpacing), this.lineBreak = D(A, zb, t.lineBreak), this.lineHeight = D(A, qb, t.lineHeight), this.listStyleImage = D(A, $b, t.listStyleImage), this.listStylePosition = D(A, AU, t.listStylePosition), this.listStyleType = D(A, wo, t.listStyleType), this.marginTop = D(A, eU, t.marginTop), this.marginRight = D(A, tU, t.marginRight), this.marginBottom = D(A, sU, t.marginBottom), this.marginLeft = D(A, rU, t.marginLeft), this.opacity = D(A, EU, t.opacity);
    const s = D(A, nU, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = D(A, oU, t.overflowWrap), this.paddingTop = D(A, iU, t.paddingTop), this.paddingRight = D(A, lU, t.paddingRight), this.paddingBottom = D(A, aU, t.paddingBottom), this.paddingLeft = D(A, cU, t.paddingLeft), this.paintOrder = D(A, VU, t.paintOrder), this.position = D(A, uU, t.position), this.textAlign = D(A, BU, t.textAlign), this.textDecorationColor = D(A, yU, t.textDecorationColor ?? t.color), this.textDecorationLine = D(A, vU, t.textDecorationLine ?? t.textDecoration), this.textDecorationStyle = D(A, HU, t.textDecorationStyle), this.textDecorationThickness = D(A, IU, t.textDecorationThickness), this.textUnderlineOffset = D(A, _U, t.textUnderlineOffset), this.textShadow = D(A, fU, t.textShadow), this.textTransform = D(A, gU, t.textTransform), this.textOverflow = D(A, jU, t.textOverflow), this.transform = D(A, dU, t.transform), this.transformOrigin = D(A, bU, t.transformOrigin), this.rotate = D(A, UU, t.rotate), this.visibility = D(A, FU, t.visibility), this.webkitTextStrokeColor = D(A, GU, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = D(A, XU, t.webkitTextStrokeWidth), this.webkitLineClamp = D(A, JU, t.webkitLineClamp), this.wordBreak = D(A, mU, t.wordBreak), this.zIndex = D(A, xU, t.zIndex), this.objectFit = D(A, WU, t.objectFit);
  }
  isVisible() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }
  isTransparent() {
    return Ye(this.backgroundColor);
  }
  isTransformed() {
    return this.transform !== null || this.rotate !== null;
  }
  isPositioned() {
    return this.position !== 0;
  }
  isPositionedWithZIndex() {
    return this.isPositioned() && !this.zIndex.auto;
  }
  isFloating() {
    return this.float !== 0;
  }
  isInlineLevel() {
    return dA(
      this.display,
      4
      /* DISPLAY.INLINE */
    ) || dA(
      this.display,
      33554432
      /* DISPLAY.INLINE_BLOCK */
    ) || dA(
      this.display,
      268435456
      /* DISPLAY.INLINE_FLEX */
    ) || dA(
      this.display,
      536870912
      /* DISPLAY.INLINE_GRID */
    ) || dA(
      this.display,
      67108864
      /* DISPLAY.INLINE_LIST_ITEM */
    ) || dA(
      this.display,
      134217728
      /* DISPLAY.INLINE_TABLE */
    );
  }
}
class zU {
  constructor(A, t) {
    this.content = D(A, DU, t.content), this.quotes = D(A, NU, t.quotes);
  }
}
class Cl {
  constructor(A, t) {
    this.counterIncrement = D(A, OU, t.counterIncrement), this.counterReset = D(A, MU, t.counterReset);
  }
}
const D = (e, A, t) => {
  const s = new Qc(), r = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  s.write(r);
  const n = new It(s.read());
  switch (A.type) {
    case 2:
      const o = n.parseComponentValue();
      return A.parse(e, j(o) ? o.value : A.initialValue);
    case 0:
      return A.parse(e, n.parseComponentValue());
    case 1:
      return A.parse(e, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (A.format) {
        case "angle":
          return Dt.parse(e, n.parseComponentValue());
        case "color":
          return je.parse(e, n.parseComponentValue());
        case "image":
          return zo.parse(e, n.parseComponentValue());
        case "length":
          const i = n.parseComponentValue();
          return ze(i) ? i : HA;
        case "length-percentage":
          const a = n.parseComponentValue();
          return BA(a) ? a : HA;
        case "time":
          return Gc.parse(e, n.parseComponentValue());
      }
      break;
  }
}, qU = "data-html2canvas-debug", $U = (e) => {
  switch (e.getAttribute(qU)) {
    case "all":
      return 1;
    case "clone":
      return 2;
    case "parse":
      return 3;
    case "render":
      return 4;
    default:
      return 0;
  }
}, Qo = (e, A) => {
  const t = $U(e);
  return t === 1 || A === t;
};
class Ue {
  constructor(A, t) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, Qo(
      t,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new ZU(A, window.getComputedStyle(t, null)), Uo(t) && (this.styles.animationDuration.some((s) => s > 0) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none"), this.styles.rotate !== null && (t.style.rotate = "none")), this.bounds = Yr(this.context, t), Qo(
      t,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
}
var AF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", bl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ss = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var rr = 0; rr < bl.length; rr++)
  ss[bl.charCodeAt(rr)] = rr;
var eF = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var B = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), l = Array.isArray(B) ? B : new Uint8Array(B);
  for (s = 0; s < t; s += 4)
    n = ss[e.charCodeAt(s)], o = ss[e.charCodeAt(s + 1)], i = ss[e.charCodeAt(s + 2)], a = ss[e.charCodeAt(s + 3)], l[r++] = n << 2 | o >> 4, l[r++] = (o & 15) << 4 | i >> 2, l[r++] = (i & 3) << 6 | a & 63;
  return B;
}, tF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, sF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, gt = 5, qo = 11, Sn = 2, rF = qo - gt, Xc = 65536 >> gt, nF = 1 << gt, Kn = nF - 1, oF = 1024 >> gt, iF = Xc + oF, lF = iF, aF = 32, cF = lF + aF, BF = 65536 >> qo, uF = 1 << rF, fF = uF - 1, Ul = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, gF = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, dF = function(e, A) {
  var t = eF(e), s = Array.isArray(t) ? sF(t) : new Uint32Array(t), r = Array.isArray(t) ? tF(t) : new Uint16Array(t), n = 24, o = Ul(r, n / 2, s[4] / 2), i = s[5] === 2 ? Ul(r, (n + s[4]) / 2) : gF(s, Math.ceil((n + s[4]) / 4));
  return new hF(s[0], s[1], s[2], s[3], o, i);
}, hF = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> gt], t = (t << Sn) + (A & Kn), this.data[t];
        if (A <= 65535)
          return t = this.index[Xc + (A - 55296 >> gt)], t = (t << Sn) + (A & Kn), this.data[t];
        if (A < this.highStart)
          return t = cF - BF + (A >> qo), t = this.index[t], t += A >> gt & fF, t = this.index[t], t = (t << Sn) + (A & Kn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Fl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pF = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var nr = 0; nr < Fl.length; nr++)
  pF[Fl.charCodeAt(nr)] = nr;
var wF = 1, Tn = 2, kn = 3, ml = 4, xl = 5, QF = 7, El = 8, Dn = 9, On = 10, yl = 11, vl = 12, Hl = 13, Il = 14, Mn = 15, CF = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, bF = function() {
  for (var e = [], A = 0; A < arguments.length; A++)
    e[A] = arguments[A];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, e);
  var t = e.length;
  if (!t)
    return "";
  for (var s = [], r = -1, n = ""; ++r < t; ) {
    var o = e[r];
    o <= 65535 ? s.push(o) : (o -= 65536, s.push((o >> 10) + 55296, o % 1024 + 56320)), (r + 1 === t || s.length > 16384) && (n += String.fromCharCode.apply(String, s), s.length = 0);
  }
  return n;
}, UF = dF(AF), YA = "×", Rn = "÷", FF = function(e) {
  return UF.get(e);
}, mF = function(e, A, t) {
  var s = t - 2, r = A[s], n = A[t - 1], o = A[t];
  if (n === Tn && o === kn)
    return YA;
  if (n === Tn || n === kn || n === ml || o === Tn || o === kn || o === ml)
    return Rn;
  if (n === El && [El, Dn, yl, vl].indexOf(o) !== -1 || (n === yl || n === Dn) && (o === Dn || o === On) || (n === vl || n === On) && o === On || o === Hl || o === xl || o === QF || n === wF)
    return YA;
  if (n === Hl && o === Il) {
    for (; r === xl; )
      r = A[--s];
    if (r === Il)
      return YA;
  }
  if (n === Mn && o === Mn) {
    for (var i = 0; r === Mn; )
      i++, r = A[--s];
    if (i % 2 === 0)
      return YA;
  }
  return Rn;
}, xF = function(e) {
  var A = CF(e), t = A.length, s = 0, r = 0, n = A.map(FF);
  return {
    next: function() {
      if (s >= t)
        return { done: !0, value: null };
      for (var o = YA; s < t && (o = mF(A, n, ++s)) === YA; )
        ;
      if (o !== YA || s === t) {
        var i = bF.apply(null, A.slice(r, s));
        return r = s, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, EF = function(e) {
  for (var A = xF(e), t = [], s; !(s = A.next()).done; )
    s.value && t.push(s.value.slice());
  return t;
};
const yF = (e) => {
  if (e.createRange) {
    const t = e.createRange();
    if (t.getBoundingClientRect) {
      const s = e.createElement("boundtest");
      s.style.height = "123px", s.style.display = "block", e.body.appendChild(s), t.selectNode(s);
      const r = t.getBoundingClientRect(), n = Math.round(r.height);
      if (e.body.removeChild(s), n === 123)
        return !0;
    }
  }
  return !1;
}, vF = (e) => {
  const A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  const t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const s = A.firstChild, r = jr(s.data).map((a) => QA(a));
  let n = 0, o = {};
  const i = r.every((a, B) => {
    t.setStart(s, n), t.setEnd(s, n + a.length);
    const l = t.getBoundingClientRect();
    n += a.length;
    const c = l.x > o.x || l.y > o.y;
    return o = l, B === 0 ? !0 : c;
  });
  return e.body.removeChild(A), i;
}, HF = () => typeof new Image().crossOrigin < "u", IF = () => typeof new XMLHttpRequest().responseType == "string", _F = (e) => {
  const A = new Image(), t = e.createElement("canvas"), s = t.getContext("2d");
  if (!s)
    return !1;
  A.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    s.drawImage(A, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, _l = (e) => e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255, LF = (e) => {
  const A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  const s = A.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, t, t);
  const r = new Image(), n = A.toDataURL();
  r.src = n;
  const o = Co(t, t, 0, 0, r);
  return s.fillStyle = "red", s.fillRect(0, 0, t, t), Ll(o).then((i) => {
    s.drawImage(i, 0, 0);
    const a = s.getImageData(0, 0, t, t).data;
    s.fillStyle = "red", s.fillRect(0, 0, t, t);
    const B = e.createElement("div");
    return B.style.backgroundImage = `url(${n})`, B.style.height = `${t}px`, _l(a) ? Ll(Co(t, t, 0, 0, B)) : Promise.reject(!1);
  }).then((i) => (s.drawImage(i, 0, 0), _l(s.getImageData(0, 0, t, t).data))).catch(() => !1);
}, Co = (e, A, t, s, r) => {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", s.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(r), o;
}, Ll = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => A(s), s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
}), vA = {
  get SUPPORT_RANGE_BOUNDS() {
    const e = yF(document);
    return Object.defineProperty(vA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    const e = vA.SUPPORT_RANGE_BOUNDS && vF(document);
    return Object.defineProperty(vA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    const e = _F(document);
    return Object.defineProperty(vA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const e = typeof Array.from == "function" && typeof window.fetch == "function" ? LF(document) : Promise.resolve(!1);
    return Object.defineProperty(vA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    const e = HF();
    return Object.defineProperty(vA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const e = IF();
    return Object.defineProperty(vA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    const e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(vA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    const e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(vA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
};
class gs {
  constructor(A, t) {
    this.text = A, this.bounds = t;
  }
}
const SF = (e, A, t, s) => {
  const r = kF(A, t), n = [];
  let o = 0;
  return r.forEach((i) => {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (vA.SUPPORT_RANGE_BOUNDS) {
        const a = Sl(s, o, i.length).getClientRects();
        if (a.length > 1) {
          const B = ue(i);
          let l = 0;
          B.forEach((c) => {
            n.push(new gs(c, KA.fromDOMRectList(e, Sl(s, l + o, c.length).getClientRects()))), l += c.length;
          });
        } else
          n.push(new gs(i, KA.fromDOMRectList(e, a)));
      } else {
        const a = s.splitText(i.length);
        n.push(new gs(i, KF(e, s))), s = a;
      }
    else vA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(i.length));
    o += i.length;
  }), n;
}, KF = (e, A) => {
  const t = A.ownerDocument;
  if (t) {
    const s = t.createElement("html2canvaswrapper");
    s.appendChild(A.cloneNode(!0));
    const r = A.parentNode;
    if (r) {
      r.replaceChild(s, A);
      const n = Yr(e, s);
      return s.firstChild && r.replaceChild(s.firstChild, s), n;
    }
  }
  return KA.EMPTY;
}, Sl = (e, A, t) => {
  const s = e.ownerDocument;
  if (!s)
    throw new Error("Node has no owner document");
  const r = s.createRange();
  return r.setStart(e, A), r.setEnd(e, A + t), r;
}, ue = (e) => {
  if (vA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map((t) => t.segment);
  }
  return EF(e);
}, TF = (e, A) => {
  if (vA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map((s) => s.segment);
  }
  return OF(e, A);
}, kF = (e, A) => A.letterSpacing !== 0 ? ue(e) : TF(e, A), DF = [32, 160, 4961, 65792, 65793, 4153, 4241], OF = (e, A) => {
  const t = lQ(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), s = [];
  let r;
  for (; !(r = t.next()).done; )
    if (r.value) {
      const n = r.value.slice(), o = jr(n);
      let i = "";
      o.forEach((a) => {
        DF.indexOf(a) === -1 ? i += QA(a) : (i.length && s.push(i), s.push(QA(a)), i = "");
      }), i.length && s.push(i);
    }
  return s;
};
class MF {
  constructor(A, t, s) {
    this.text = RF(t.data, s.textTransform), this.textBounds = SF(A, this.text, s, t);
  }
}
const RF = (e, A) => {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(NF, PF);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, NF = /(^|\s|:|-|\(|\))([a-z])/g, PF = (e, A, t) => e.length > 0 ? A + t.toUpperCase() : e;
class Jc extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.currentSrc || t.src, this.intrinsicWidth = t.naturalWidth, this.intrinsicHeight = t.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class Wc extends Ue {
  constructor(A, t) {
    super(A, t), this.canvas = t, this.intrinsicWidth = t.width, this.intrinsicHeight = t.height;
  }
}
class Yc extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = new XMLSerializer(), r = Yr(A, t);
    t.setAttribute("width", `${r.width}px`), t.setAttribute("height", `${r.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(s.serializeToString(t))}`, this.intrinsicWidth = t.width.baseVal.value, this.intrinsicHeight = t.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class jc extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class bo extends Ue {
  constructor(A, t) {
    super(A, t), this.start = t.start, this.reversed = typeof t.reversed == "boolean" && t.reversed === !0;
  }
}
const VF = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], GF = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], XF = (e) => e.width > e.height ? new KA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new KA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, JF = (e) => {
  const A = e.type === YF ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, WF = (e) => e.value.length === 0 && !!e.placeholder, Hr = "checkbox", Ir = "radio", YF = "password", Kl = 707406591, jF = 1970632191;
class ds extends Ue {
  constructor(A, t) {
    switch (super(A, t), this.type = t.type.toLowerCase(), this.checked = t.checked, this.value = JF(t), this.isPlaceholder = WF(t), (this.type === Hr || this.type === Ir) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = XF(this.bounds)), this.type) {
      case Hr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = VF;
        break;
      case Ir:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = GF;
        break;
    }
  }
}
class Zc extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = t.options[t.selectedIndex || 0];
    this.value = s && s.text || "";
  }
}
class zc extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class qc extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.src, this.width = parseInt(t.width, 10) || 0, this.height = parseInt(t.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor;
    try {
      if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
        this.tree = AB(A, t.contentWindow.document.documentElement);
        const s = t.contentWindow.document.documentElement ? _t(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : pe.TRANSPARENT, r = t.contentWindow.document.body ? _t(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : pe.TRANSPARENT;
        this.backgroundColor = Ye(s) ? Ye(r) ? this.styles.backgroundColor : r : s;
      }
    } catch {
    }
  }
}
const ZF = ["OL", "UL", "MENU"], dr = (e, A, t, s) => {
  for (let r = A.firstChild, n; r; r = n)
    if (n = r.nextSibling, eB(r) && r.data.length > 0)
      t.textNodes.push(new MF(e, r, t.styles));
    else if (ye(r))
      if (rs(r) && r.assignedNodes)
        r.assignedNodes().forEach((o) => dr(e, o, t, s));
      else {
        const o = $c(e, r);
        o.styles.isVisible() && (zF(r, o, s) ? o.flags |= 4 : qF(o.styles) && (o.flags |= 2), ZF.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? dr(e, r.shadowRoot, o, s) : !_r(r) && !tB(r) && !Lr(r) && dr(e, r, o, s));
      }
}, $c = (e, A) => Fo(A) ? new Jc(e, A) : sB(A) ? new Wc(e, A) : tB(A) ? new Yc(e, A) : $F(A) ? new jc(e, A) : A1(A) ? new bo(e, A) : e1(A) ? new ds(e, A) : Lr(A) ? new Zc(e, A) : _r(A) ? new zc(e, A) : rB(A) ? new qc(e, A) : new Ue(e, A), AB = (e, A) => {
  const t = $c(e, A);
  return t.flags |= 4, dr(e, A, t, t), t;
}, zF = (e, A, t) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || $o(e) && t.styles.isTransparent(), qF = (e) => e.isPositioned() || e.isFloating() ? !0 : dA(
  e.display,
  268435456
  /* DISPLAY.INLINE_FLEX */
) || dA(
  e.display,
  33554432
  /* DISPLAY.INLINE_BLOCK */
) || dA(
  e.display,
  536870912
  /* DISPLAY.INLINE_GRID */
) || dA(
  e.display,
  134217728
  /* DISPLAY.INLINE_TABLE */
), eB = (e) => e.nodeType === Node.TEXT_NODE, ye = (e) => e.nodeType === Node.ELEMENT_NODE, Uo = (e) => ye(e) && typeof e.style < "u" && !hr(e), hr = (e) => typeof e.className == "object", $F = (e) => e.tagName === "LI", A1 = (e) => e.tagName === "OL", e1 = (e) => e.tagName === "INPUT", t1 = (e) => e.tagName === "HTML", tB = (e) => e.tagName === "svg", $o = (e) => e.tagName === "BODY", sB = (e) => e.tagName === "CANVAS", Tl = (e) => e.tagName === "VIDEO", Fo = (e) => e.tagName === "IMG", rB = (e) => e.tagName === "IFRAME", Nn = (e) => e.tagName === "STYLE", kl = (e) => e.tagName === "SCRIPT", _r = (e) => e.tagName === "TEXTAREA", Lr = (e) => e.tagName === "SELECT", rs = (e) => e.tagName === "SLOT", Dl = (e) => e.tagName.indexOf("-") > 0;
class s1 {
  constructor() {
    this.counters = {};
  }
  getCounterValue(A) {
    const t = this.counters[A];
    return t && t.length ? t[t.length - 1] : 1;
  }
  getCounterValues(A) {
    const t = this.counters[A];
    return t || [];
  }
  pop(A) {
    A.forEach((t) => this.counters[t].pop());
  }
  parse(A) {
    const t = A.counterIncrement, s = A.counterReset;
    let r = !0;
    t !== null && t.forEach((o) => {
      const i = this.counters[o.counter];
      i && o.increment !== 0 && (r = !1, i.length || i.push(1), i[Math.max(0, i.length - 1)] += o.increment);
    });
    const n = [];
    return r && s.forEach((o) => {
      let i = this.counters[o.counter];
      n.push(o.counter), i || (i = this.counters[o.counter] = []), i.push(o.reset);
    }), n;
  }
}
const Ol = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Ml = {
  integers: [
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "Ք",
    "Փ",
    "Ւ",
    "Ց",
    "Ր",
    "Տ",
    "Վ",
    "Ս",
    "Ռ",
    "Ջ",
    "Պ",
    "Չ",
    "Ո",
    "Շ",
    "Ն",
    "Յ",
    "Մ",
    "Ճ",
    "Ղ",
    "Ձ",
    "Հ",
    "Կ",
    "Ծ",
    "Խ",
    "Լ",
    "Ի",
    "Ժ",
    "Թ",
    "Ը",
    "Է",
    "Զ",
    "Ե",
    "Դ",
    "Գ",
    "Բ",
    "Ա"
  ]
}, r1 = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    19,
    18,
    17,
    16,
    15,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "י׳",
    "ט׳",
    "ח׳",
    "ז׳",
    "ו׳",
    "ה׳",
    "ד׳",
    "ג׳",
    "ב׳",
    "א׳",
    "ת",
    "ש",
    "ר",
    "ק",
    "צ",
    "פ",
    "ע",
    "ס",
    "נ",
    "מ",
    "ל",
    "כ",
    "יט",
    "יח",
    "יז",
    "טז",
    "טו",
    "י",
    "ט",
    "ח",
    "ז",
    "ו",
    "ה",
    "ד",
    "ג",
    "ב",
    "א"
  ]
}, n1 = {
  integers: [
    1e4,
    9e3,
    8e3,
    7e3,
    6e3,
    5e3,
    4e3,
    3e3,
    2e3,
    1e3,
    900,
    800,
    700,
    600,
    500,
    400,
    300,
    200,
    100,
    90,
    80,
    70,
    60,
    50,
    40,
    30,
    20,
    10,
    9,
    8,
    7,
    6,
    5,
    4,
    3,
    2,
    1
  ],
  values: [
    "ჵ",
    "ჰ",
    "ჯ",
    "ჴ",
    "ხ",
    "ჭ",
    "წ",
    "ძ",
    "ც",
    "ჩ",
    "შ",
    "ყ",
    "ღ",
    "ქ",
    "ფ",
    "ჳ",
    "ტ",
    "ს",
    "რ",
    "ჟ",
    "პ",
    "ო",
    "ჲ",
    "ნ",
    "მ",
    "ლ",
    "კ",
    "ი",
    "თ",
    "ჱ",
    "ზ",
    "ვ",
    "ე",
    "დ",
    "გ",
    "ბ",
    "ა"
  ]
}, bt = (e, A, t, s, r, n) => e < A || e > t ? Es(e, r, n.length > 0) : s.integers.reduce((o, i, a) => {
  for (; e >= i; )
    e -= i, o += s.values[a];
  return o;
}, "") + n, nB = (e, A, t, s) => {
  let r = "";
  do
    t || e--, r = s(e) + r, e /= A;
  while (e * A >= A);
  return r;
}, wA = (e, A, t, s, r) => {
  const n = t - A + 1;
  return (e < 0 ? "-" : "") + (nB(Math.abs(e), n, s, (o) => QA(Math.floor(o % n) + A)) + r);
}, rt = (e, A, t = ". ") => {
  const s = A.length;
  return nB(Math.abs(e), s, !1, (r) => A[Math.floor(r % s)]) + t;
}, Et = 1, Me = 2, Re = 4, ns = 8, xe = (e, A, t, s, r, n) => {
  if (e < -9999 || e > 9999)
    return Es(e, 4, r.length > 0);
  let o = Math.abs(e), i = r;
  if (o === 0)
    return A[0] + i;
  for (let a = 0; o > 0 && a <= 4; a++) {
    const B = o % 10;
    B === 0 && dA(n, Et) && i !== "" ? i = A[B] + i : B > 1 || B === 1 && a === 0 || B === 1 && a === 1 && dA(n, Me) || B === 1 && a === 1 && dA(n, Re) && e > 100 || B === 1 && a > 1 && dA(n, ns) ? i = A[B] + (a > 0 ? t[a - 1] : "") + i : B === 1 && a > 0 && (i = t[a - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? s : "") + i;
}, Rl = "十百千萬", Nl = "拾佰仟萬", Pl = "マイナス", Pn = "마이너스", Es = (e, A, t) => {
  const s = t ? ". " : "", r = t ? "、" : "", n = t ? ", " : "", o = t ? " " : "";
  switch (A) {
    case 0:
      return "•" + o;
    case 1:
      return "◦" + o;
    case 2:
      return "◾" + o;
    case 5:
      const i = wA(e, 48, 57, !0, s);
      return i.length < 4 ? `0${i}` : i;
    case 4:
      return rt(e, "〇一二三四五六七八九", r);
    case 6:
      return bt(e, 1, 3999, Ol, 3, s).toLowerCase();
    case 7:
      return bt(e, 1, 3999, Ol, 3, s);
    case 8:
      return wA(e, 945, 969, !1, s);
    case 9:
      return wA(e, 97, 122, !1, s);
    case 10:
      return wA(e, 65, 90, !1, s);
    case 11:
      return wA(e, 1632, 1641, !0, s);
    case 12:
    case 49:
      return bt(e, 1, 9999, Ml, 3, s);
    case 35:
      return bt(e, 1, 9999, Ml, 3, s).toLowerCase();
    case 13:
      return wA(e, 2534, 2543, !0, s);
    case 14:
    case 30:
      return wA(e, 6112, 6121, !0, s);
    case 15:
      return rt(e, "子丑寅卯辰巳午未申酉戌亥", r);
    case 16:
      return rt(e, "甲乙丙丁戊己庚辛壬癸", r);
    case 17:
    case 48:
      return xe(e, "零一二三四五六七八九", Rl, "負", r, Me | Re | ns);
    case 47:
      return xe(e, "零壹貳參肆伍陸柒捌玖", Nl, "負", r, Et | Me | Re | ns);
    case 42:
      return xe(e, "零一二三四五六七八九", Rl, "负", r, Me | Re | ns);
    case 41:
      return xe(e, "零壹贰叁肆伍陆柒捌玖", Nl, "负", r, Et | Me | Re | ns);
    case 26:
      return xe(e, "〇一二三四五六七八九", "十百千万", Pl, r, 0);
    case 25:
      return xe(e, "零壱弐参四伍六七八九", "拾百千万", Pl, r, Et | Me | Re);
    case 31:
      return xe(e, "영일이삼사오육칠팔구", "십백천만", Pn, n, Et | Me | Re);
    case 33:
      return xe(e, "零一二三四五六七八九", "十百千萬", Pn, n, 0);
    case 32:
      return xe(e, "零壹貳參四五六七八九", "拾百千", Pn, n, Et | Me | Re);
    case 18:
      return wA(e, 2406, 2415, !0, s);
    case 20:
      return bt(e, 1, 19999, n1, 3, s);
    case 21:
      return wA(e, 2790, 2799, !0, s);
    case 22:
      return wA(e, 2662, 2671, !0, s);
    case 52:
      return bt(e, 1, 10999, r1, 3, s);
    case 23:
      return rt(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return rt(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return wA(e, 3302, 3311, !0, s);
    case 28:
      return rt(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
    case 29:
      return rt(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
    case 34:
      return wA(e, 3792, 3801, !0, s);
    case 37:
      return wA(e, 6160, 6169, !0, s);
    case 38:
      return wA(e, 4160, 4169, !0, s);
    case 39:
      return wA(e, 2918, 2927, !0, s);
    case 40:
      return wA(e, 1776, 1785, !0, s);
    case 43:
      return wA(e, 3046, 3055, !0, s);
    case 44:
      return wA(e, 3174, 3183, !0, s);
    case 45:
      return wA(e, 3664, 3673, !0, s);
    case 46:
      return wA(e, 3872, 3881, !0, s);
    case 3:
    default:
      return wA(e, 48, 57, !0, s);
  }
}, mo = "data-html2canvas-ignore", o1 = (e) => {
  let A = e;
  for (; A; ) {
    if (A.parentNode && A.parentNode.host)
      return A.parentNode;
    const t = A.getRootNode();
    if (t && t !== A.ownerDocument && t.host)
      return t;
    A = A.parentNode;
  }
  return null;
};
class Vl {
  constructor(A, t, s) {
    if (this.context = A, this.options = s, this.scrolledElements = [], this.referenceElement = t, this.counters = new s1(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const r = o1(t);
      r && (this.options.iframeContainer = r);
    }
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  toIFrame(A, t) {
    const s = i1(A, t, this.options.iframeContainer);
    if (!s.contentWindow)
      return Promise.reject("Unable to find iframe window");
    const r = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, o = s.contentWindow, i = o.document, a = c1(s).then(async () => {
      this.scrolledElements.forEach(f1), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0)));
      const c = this.options.onclone, f = this.clonedReferenceElement;
      return typeof f > "u" ? Promise.reject(`Error finding the ${this.referenceElement.nodeName} in the cloned document`) : (i.fonts && i.fonts.ready && await i.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await a1(i), typeof c == "function" ? Promise.resolve().then(() => c(i, f)).then(() => s) : s);
    }), B = i.baseURI;
    i.open();
    try {
      const c = trustedTypes.createPolicy("my-policy", {
        createHTML: (w) => w
      }), f = Gl(document.doctype) + "<html></html>", h = c.createHTML(f);
      i.write(h);
    } catch {
      i.write(Gl(document.doctype) + "<html></html>");
    }
    u1(this.referenceElement.ownerDocument, r, n);
    const l = i.adoptNode(this.documentElement);
    return w1(l, B), i.replaceChild(l, i.documentElement), i.close(), a;
  }
  createElementClone(A) {
    if (Qo(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (sB(A))
      return this.createCanvasClone(A);
    if (Tl(A))
      return this.createVideoClone(A);
    if (Nn(A))
      return this.createStyleClone(A);
    const t = A.cloneNode(!1);
    return Fo(t) && (Fo(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Dl(t) ? this.createCustomElementClone(t) : t;
  }
  createCustomElementClone(A) {
    const t = document.createElement("div");
    if (t.className = A.className, Vn(A.style, t), A.shadowRoot)
      try {
        t.attachShadow({ mode: "open" });
      } catch (s) {
        this.context.logger.error("Failed to attach shadow root to custom element clone:", s);
      }
    return t;
  }
  createStyleClone(A) {
    try {
      const s = A.sheet;
      if (s && s.cssRules) {
        const r = [].slice.call(s.cssRules, 0).reduce((o, i) => i && typeof i.cssText == "string" ? o + i.cssText : o, ""), n = A.cloneNode(!1);
        return n.textContent = r, this.options.cspNonce && (n.nonce = this.options.cspNonce), n;
      }
    } catch (s) {
      if (this.context.logger.error("Unable to access cssRules property", s), s.name !== "SecurityError")
        throw s;
    }
    const t = A.cloneNode(!1);
    return this.options.cspNonce && (t.nonce = this.options.cspNonce), t;
  }
  createCanvasClone(A) {
    if (this.options.inlineImages && A.ownerDocument) {
      const s = A.ownerDocument.createElement("img");
      try {
        return s.src = A.toDataURL(), s;
      } catch {
        this.context.logger.info("Unable to inline canvas contents, canvas is tainted", A);
      }
    }
    const t = A.cloneNode(!1);
    try {
      t.width = A.width, t.height = A.height;
      const s = A.getContext("2d"), r = t.getContext("2d", { willReadFrequently: !0 });
      if (r)
        if (!this.options.allowTaint && s)
          r.putImageData(s.getImageData(0, 0, A.width, A.height), 0, 0);
        else {
          const n = A.getContext("webgl2") ?? A.getContext("webgl");
          if (n) {
            const o = n.getContextAttributes();
            (o == null ? void 0 : o.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", A);
          }
          r.drawImage(A, 0, 0);
        }
      return t;
    } catch {
      this.context.logger.info("Unable to clone canvas as it is tainted", A);
    }
    return t;
  }
  createVideoClone(A) {
    const t = A.ownerDocument.createElement("canvas");
    t.width = A.offsetWidth, t.height = A.offsetHeight;
    const s = t.getContext("2d");
    try {
      return s && (s.drawImage(A, 0, 0, t.width, t.height), this.options.allowTaint || s.getImageData(0, 0, t.width, t.height)), t;
    } catch {
      this.context.logger.info("Unable to clone video as it is tainted", A);
    }
    const r = A.ownerDocument.createElement("canvas");
    return r.width = A.offsetWidth, r.height = A.offsetHeight, r;
  }
  appendChildNode(A, t, s) {
    (!ye(t) || !kl(t) && !t.hasAttribute(mo) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ye(t) || !Nn(t)) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !ye(A) || !kl(A) && !A.hasAttribute(mo) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !ye(A) || !Nn(A);
  }
  /**
   * Safely append a cloned child to a target, applying all filtering rules
   */
  safeAppendClonedChild(A, t, s) {
    this.shouldCloneChild(t) && this.shouldCloneStyleElement(t) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Clone assigned nodes from a slot element to the target
   */
  cloneAssignedNodes(A, t, s) {
    A.forEach((r) => {
      this.safeAppendClonedChild(t, r, s);
    });
  }
  /**
   * Clone fallback content from a slot element when no nodes are assigned
   */
  cloneSlotFallbackContent(A, t, s) {
    for (let r = A.firstChild; r; r = r.nextSibling)
      this.safeAppendClonedChild(t, r, s);
  }
  /**
   * Handle cloning of a slot element, including assigned nodes or fallback content
   */
  cloneSlotElement(A, t, s) {
    if (!rs(A))
      return;
    const r = A;
    if (typeof r.assignedNodes != "function") {
      this.context.logger.warn("HTMLSlotElement.assignedNodes is not available", A), this.cloneSlotFallbackContent(A, t, s);
      return;
    }
    const n = r.assignedNodes();
    if (!n || !Array.isArray(n)) {
      this.context.logger.warn("assignedNodes() did not return a valid array", A), this.cloneSlotFallbackContent(A, t, s);
      return;
    }
    n.length > 0 ? this.cloneAssignedNodes(n, t, s) : this.cloneSlotFallbackContent(A, t, s);
  }
  /**
   * Clone shadow DOM children to the target shadow root
   */
  cloneShadowDOMChildren(A, t, s) {
    for (let r = A.firstChild; r; r = r.nextSibling)
      ye(r) && rs(r) ? this.cloneSlotElement(r, t, s) : this.safeAppendClonedChild(t, r, s);
  }
  /**
   * Clone light DOM children to the target element
   */
  cloneLightDOMChildren(A, t, s) {
    for (let r = A.firstChild; r; r = r.nextSibling)
      this.appendChildNode(t, r, s);
  }
  /**
   * Clone slot element as light DOM when shadow root creation failed
   */
  cloneSlotElementAsLightDOM(A, t, s) {
    if (!rs(A))
      return;
    const r = A;
    if (typeof r.assignedNodes != "function") {
      for (let o = A.firstChild; o; o = o.nextSibling)
        this.appendChildNode(t, o, s);
      return;
    }
    const n = r.assignedNodes();
    if (n && Array.isArray(n) && n.length > 0)
      n.forEach((o) => this.appendChildNode(t, o, s));
    else
      for (let o = A.firstChild; o; o = o.nextSibling)
        this.appendChildNode(t, o, s);
  }
  /**
   * Clone shadow DOM content as light DOM when shadow root creation failed
   * This is a fallback mechanism to ensure content is not lost
   */
  cloneShadowDOMAsLightDOM(A, t, s) {
    for (let r = A.firstChild; r; r = r.nextSibling)
      ye(r) && rs(r) ? this.cloneSlotElementAsLightDOM(r, t, s) : this.appendChildNode(t, r, s);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, t, s) {
    A.shadowRoot && t.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, t.shadowRoot, s), this.cloneLightDOMChildren(A, t, s)) : A.shadowRoot && !t.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, t, s) : this.cloneLightDOMChildren(A, t, s);
  }
  cloneNode(A, t) {
    if (eB(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const s = A.ownerDocument.defaultView;
    if (s && ye(A) && (Uo(A) || hr(A))) {
      const r = this.createElementClone(A);
      r.style.transitionProperty = "none";
      const n = s.getComputedStyle(A), o = s.getComputedStyle(A, ":before"), i = s.getComputedStyle(A, ":after");
      this.referenceElement === A && Uo(r) && (this.clonedReferenceElement = r), $o(r) && h1(r, this.options.cspNonce);
      const a = this.counters.parse(new Cl(this.context, n)), B = this.resolvePseudoContent(A, r, o, hs.BEFORE);
      Dl(A) && (t = !0), Tl(A) || this.cloneChildNodes(A, r, t), B && r.insertBefore(B, r.firstChild);
      const l = this.resolvePseudoContent(A, r, i, hs.AFTER);
      return l && r.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || hr(A)) && !rB(A) || t) && Vn(n, r), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (_r(A) || Lr(A)) && (_r(r) || Lr(r)) && (r.value = A.value), r;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, t, s, r) {
    if (!s)
      return;
    const n = s.content, o = t.ownerDocument;
    if (!o || !n || n === "none" || n === "-moz-alt-content" || s.display === "none")
      return;
    this.counters.parse(new Cl(this.context, s));
    const i = new zU(this.context, s), a = o.createElement("html2canvaspseudoelement");
    Vn(s, a), i.content.forEach((l) => {
      if (l.type === 0)
        a.appendChild(o.createTextNode(l.value));
      else if (l.type === 22) {
        const c = o.createElement("img");
        c.src = l.value, c.style.opacity = "1", a.appendChild(c);
      } else if (l.type === 18) {
        if (l.name === "attr") {
          const c = l.values.filter(j);
          c.length && a.appendChild(o.createTextNode(A.getAttribute(c[0].value) || ""));
        } else if (l.name === "counter") {
          const [c, f] = l.values.filter(IA);
          if (c && j(c)) {
            const h = this.counters.getCounterValue(c.value), w = f && j(f) ? wo.parse(this.context, f.value) : 3;
            a.appendChild(o.createTextNode(Es(h, w, !1)));
          }
        } else if (l.name === "counters") {
          const [c, f, h] = l.values.filter(IA);
          if (c && j(c)) {
            const w = this.counters.getCounterValues(c.value), U = h && j(h) ? wo.parse(this.context, h.value) : 3, E = f && f.type === 0 ? f.value : "", I = w.map((x) => Es(x, U, !1)).join(E);
            a.appendChild(o.createTextNode(I));
          }
        }
      } else if (l.type === 20)
        switch (l.value) {
          case "open-quote":
            a.appendChild(o.createTextNode(Ql(i.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            a.appendChild(o.createTextNode(Ql(i.quotes, --this.quoteDepth, !1)));
            break;
          default:
            a.appendChild(o.createTextNode(l.value));
        }
    }), a.className = `${xo} ${Eo}`;
    const B = r === hs.BEFORE ? ` ${xo}` : ` ${Eo}`;
    return hr(t) ? t.className.baseValue += B : t.className += B, a;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var hs;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(hs || (hs = {}));
const i1 = (e, A, t) => {
  const s = e.createElement("iframe");
  return s.className = "html2canvas-container", s.style.visibility = "hidden", s.style.position = "fixed", s.style.left = "-10000px", s.style.top = "0px", s.style.border = "0", s.width = A.width.toString(), s.height = A.height.toString(), s.scrolling = "no", s.setAttribute(mo, "true"), (t || e.body).appendChild(s), s;
}, l1 = (e) => new Promise((A) => {
  if (e.complete) {
    A();
    return;
  }
  if (!e.src) {
    A();
    return;
  }
  e.onload = A, e.onerror = A;
}), a1 = (e) => Promise.all([].slice.call(e.images, 0).map(l1)), c1 = (e) => new Promise((A, t) => {
  const s = e.contentWindow;
  if (!s)
    return t("No window assigned for iframe");
  const r = s.document;
  s.onload = e.onload = () => {
    s.onload = e.onload = null;
    const n = setInterval(() => {
      r.body.childNodes.length > 0 && r.readyState === "complete" && (clearInterval(n), A(e));
    }, 50);
  };
}), B1 = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], Vn = (e, A) => {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e.item(t);
    B1.indexOf(s) === -1 && !s.startsWith("--") && A.style.setProperty(s, e.getPropertyValue(s));
  }
  return A;
}, Gl = (e) => {
  let A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += `"${e.publicId}"`), e.systemId && (A += `"${e.systemId}"`), A += ">"), A;
}, u1 = (e, A, t) => {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, f1 = ([e, A, t]) => {
  e.scrollLeft = A, e.scrollTop = t;
}, g1 = ":before", d1 = ":after", xo = "___html2canvas___pseudoelement_before", Eo = "___html2canvas___pseudoelement_after", Xl = `{
    content: "" !important;
    display: none !important;
}`, h1 = (e, A) => {
  p1(e, `.${xo}${g1}${Xl}
         .${Eo}${d1}${Xl}`, A);
}, p1 = (e, A, t) => {
  const s = e.ownerDocument;
  if (s) {
    const r = s.createElement("style");
    r.textContent = A, t && (r.nonce = t), e.appendChild(r);
  }
}, w1 = (e, A) => {
  const t = e.ownerDocument.createElement("base");
  t.href = A;
  const s = e.getElementsByTagName("head").item(0);
  s == null || s.insertBefore(t, (s == null ? void 0 : s.firstChild) ?? null);
};
class Ae {
  static getOrigin(A) {
    const t = Ae._link;
    return t ? (t.href = A, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
  }
  static isSameOrigin(A) {
    return Ae.getOrigin(A) === Ae._origin;
  }
  static setContext(A) {
    Ae._link = A.document.createElement("a"), Ae._origin = Ae.getOrigin(A.location.href);
  }
}
Ae._origin = "about:blank";
class Q1 {
  constructor(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  addImage(A) {
    const t = Promise.resolve();
    return this.has(A) || (Xn(A) || F1(A)) && (this._cache[A] = this.loadImage(A)).catch(() => {
    }), t;
  }
  match(A) {
    return this._cache[A];
  }
  async loadImage(A) {
    const t = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, Ae.isSameOrigin) : Ae.isSameOrigin(A), s = !Gn(A) && this._options.useCORS === !0 && vA.SUPPORT_CORS_IMAGES && !t, r = !Gn(A) && !t && !Xn(A) && typeof this._options.proxy == "string" && vA.SUPPORT_CORS_XHR && !s;
    if (!t && this._options.allowTaint === !1 && !Gn(A) && !Xn(A) && !r && !s)
      return;
    let n = A;
    return r && (n = await this.proxy(n)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((o, i) => {
      const a = new Image();
      a.onload = () => o(a), a.onerror = i, (m1(n) || s) && (a.crossOrigin = "anonymous"), a.src = n, a.complete === !0 && setTimeout(() => o(a), 500), this._options.imageTimeout > 0 && setTimeout(() => i(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
    });
  }
  has(A) {
    return typeof this._cache[A] < "u";
  }
  keys() {
    return Promise.resolve(Object.keys(this._cache));
  }
  proxy(A) {
    const t = this._options.proxy;
    if (!t)
      throw new Error("No proxy defined");
    const s = A.substring(0, 256);
    return new Promise((r, n) => {
      const o = vA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
      i.onload = () => {
        if (i.status === 200)
          if (o === "text")
            r(i.response);
          else {
            const B = new FileReader();
            B.addEventListener("load", () => r(B.result), !1), B.addEventListener("error", (l) => n(l), !1), B.readAsDataURL(i.response);
          }
        else
          n(`Failed to proxy resource ${s} with status code ${i.status}`);
      }, i.onerror = n;
      const a = t.indexOf("?") > -1 ? "&" : "?";
      if (i.open("GET", `${t}${a}url=${encodeURIComponent(A)}&responseType=${o}`), o !== "text" && i instanceof XMLHttpRequest && (i.responseType = o), this._options.imageTimeout) {
        const B = this._options.imageTimeout;
        i.timeout = B, i.ontimeout = () => n(`Timed out (${B}ms) proxying ${s}`);
      }
      i.send();
    });
  }
}
const C1 = /^data:image\/svg\+xml/i, b1 = /^data:image\/.*;base64,/i, U1 = /^data:image\/.*/i, F1 = (e) => vA.SUPPORT_SVG_DRAWING || !x1(e), Gn = (e) => U1.test(e), m1 = (e) => b1.test(e), Xn = (e) => e.substr(0, 4) === "blob", x1 = (e) => e.substr(-3).toLowerCase() === "svg" || C1.test(e);
class O {
  constructor(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  add(A, t) {
    return new O(this.x + A, this.y + t);
  }
}
const Ut = (e, A, t) => new O(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
class Le {
  constructor(A, t, s, r) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = s, this.end = r;
  }
  subdivide(A, t) {
    const s = Ut(this.start, this.startControl, A), r = Ut(this.startControl, this.endControl, A), n = Ut(this.endControl, this.end, A), o = Ut(s, r, A), i = Ut(r, n, A), a = Ut(o, i, A);
    return t ? new Le(this.start, s, o, a) : new Le(a, i, n, this.end);
  }
  add(A, t) {
    return new Le(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }
  reverse() {
    return new Le(this.end, this.endControl, this.startControl, this.start);
  }
}
const jA = (e) => e.type === 1;
class E1 {
  constructor(A) {
    const t = A.styles, s = A.bounds;
    let [r, n] = ts(t.borderTopLeftRadius, s.width, s.height), [o, i] = ts(t.borderTopRightRadius, s.width, s.height), [a, B] = ts(t.borderBottomRightRadius, s.width, s.height), [l, c] = ts(t.borderBottomLeftRadius, s.width, s.height);
    const f = [];
    f.push((r + o) / s.width), f.push((l + a) / s.width), f.push((n + c) / s.height), f.push((i + B) / s.height);
    const h = Math.max(...f);
    h > 1 && (r /= h, n /= h, o /= h, i /= h, a /= h, B /= h, l /= h, c /= h);
    const w = s.width - o, U = s.height - B, E = s.width - a, I = s.height - c, x = t.borderTopWidth, d = t.borderRightWidth, m = t.borderBottomWidth, S = t.borderLeftWidth, G = z(t.paddingTop, A.bounds.width), nA = z(t.paddingRight, A.bounds.width), xA = z(t.paddingBottom, A.bounds.width), uA = z(t.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + S / 3, s.top + x / 3, r - S / 3, n - x / 3, eA.TOP_LEFT) : new O(s.left + S / 3, s.top + x / 3), this.topRightBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + w, s.top + x / 3, o - d / 3, i - x / 3, eA.TOP_RIGHT) : new O(s.left + s.width - d / 3, s.top + x / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || B > 0 ? fA(s.left + E, s.top + U, a - d / 3, B - m / 3, eA.BOTTOM_RIGHT) : new O(s.left + s.width - d / 3, s.top + s.height - m / 3), this.bottomLeftBorderDoubleOuterBox = l > 0 || c > 0 ? fA(s.left + S / 3, s.top + I, l - S / 3, c - m / 3, eA.BOTTOM_LEFT) : new O(s.left + S / 3, s.top + s.height - m / 3), this.topLeftBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + S * 2 / 3, s.top + x * 2 / 3, r - S * 2 / 3, n - x * 2 / 3, eA.TOP_LEFT) : new O(s.left + S * 2 / 3, s.top + x * 2 / 3), this.topRightBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + w, s.top + x * 2 / 3, o - d * 2 / 3, i - x * 2 / 3, eA.TOP_RIGHT) : new O(s.left + s.width - d * 2 / 3, s.top + x * 2 / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || B > 0 ? fA(s.left + E, s.top + U, a - d * 2 / 3, B - m * 2 / 3, eA.BOTTOM_RIGHT) : new O(s.left + s.width - d * 2 / 3, s.top + s.height - m * 2 / 3), this.bottomLeftBorderDoubleInnerBox = l > 0 || c > 0 ? fA(s.left + S * 2 / 3, s.top + I, l - S * 2 / 3, c - m * 2 / 3, eA.BOTTOM_LEFT) : new O(s.left + S * 2 / 3, s.top + s.height - m * 2 / 3), this.topLeftBorderStroke = r > 0 || n > 0 ? fA(s.left + S / 2, s.top + x / 2, r - S / 2, n - x / 2, eA.TOP_LEFT) : new O(s.left + S / 2, s.top + x / 2), this.topRightBorderStroke = r > 0 || n > 0 ? fA(s.left + w, s.top + x / 2, o - d / 2, i - x / 2, eA.TOP_RIGHT) : new O(s.left + s.width - d / 2, s.top + x / 2), this.bottomRightBorderStroke = a > 0 || B > 0 ? fA(s.left + E, s.top + U, a - d / 2, B - m / 2, eA.BOTTOM_RIGHT) : new O(s.left + s.width - d / 2, s.top + s.height - m / 2), this.bottomLeftBorderStroke = l > 0 || c > 0 ? fA(s.left + S / 2, s.top + I, l - S / 2, c - m / 2, eA.BOTTOM_LEFT) : new O(s.left + S / 2, s.top + s.height - m / 2), this.topLeftBorderBox = r > 0 || n > 0 ? fA(s.left, s.top, r, n, eA.TOP_LEFT) : new O(s.left, s.top), this.topRightBorderBox = o > 0 || i > 0 ? fA(s.left + w, s.top, o, i, eA.TOP_RIGHT) : new O(s.left + s.width, s.top), this.bottomRightBorderBox = a > 0 || B > 0 ? fA(s.left + E, s.top + U, a, B, eA.BOTTOM_RIGHT) : new O(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = l > 0 || c > 0 ? fA(s.left, s.top + I, l, c, eA.BOTTOM_LEFT) : new O(s.left, s.top + s.height), this.topLeftPaddingBox = r > 0 || n > 0 ? fA(s.left + S, s.top + x, Math.max(0, r - S), Math.max(0, n - x), eA.TOP_LEFT) : new O(s.left + S, s.top + x), this.topRightPaddingBox = o > 0 || i > 0 ? fA(s.left + Math.min(w, s.width - d), s.top + x, w > s.width + d ? 0 : Math.max(0, o - d), Math.max(0, i - x), eA.TOP_RIGHT) : new O(s.left + s.width - d, s.top + x), this.bottomRightPaddingBox = a > 0 || B > 0 ? fA(s.left + Math.min(E, s.width - S), s.top + Math.min(U, s.height - m), Math.max(0, a - d), Math.max(0, B - m), eA.BOTTOM_RIGHT) : new O(s.left + s.width - d, s.top + s.height - m), this.bottomLeftPaddingBox = l > 0 || c > 0 ? fA(s.left + S, s.top + Math.min(I, s.height - m), Math.max(0, l - S), Math.max(0, c - m), eA.BOTTOM_LEFT) : new O(s.left + S, s.top + s.height - m), this.topLeftContentBox = r > 0 || n > 0 ? fA(s.left + S + uA, s.top + x + G, Math.max(0, r - (S + uA)), Math.max(0, n - (x + G)), eA.TOP_LEFT) : new O(s.left + S + uA, s.top + x + G), this.topRightContentBox = o > 0 || i > 0 ? fA(s.left + Math.min(w, s.width + S + uA), s.top + x + G, w > s.width + S + uA ? 0 : o - S + uA, i - (x + G), eA.TOP_RIGHT) : new O(s.left + s.width - (d + nA), s.top + x + G), this.bottomRightContentBox = a > 0 || B > 0 ? fA(s.left + Math.min(E, s.width - (S + uA)), s.top + Math.min(U, s.height + x + G), Math.max(0, a - (d + nA)), B - (m + xA), eA.BOTTOM_RIGHT) : new O(s.left + s.width - (d + nA), s.top + s.height - (m + xA)), this.bottomLeftContentBox = l > 0 || c > 0 ? fA(s.left + S + uA, s.top + I, Math.max(0, l - (S + uA)), c - (m + xA), eA.BOTTOM_LEFT) : new O(s.left + S + uA, s.top + s.height - (m + xA));
  }
}
var eA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(eA || (eA = {}));
const fA = (e, A, t, s, r) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), o = t * n, i = s * n, a = e + t, B = A + s;
  switch (r) {
    case eA.TOP_LEFT:
      return new Le(new O(e, B), new O(e, B - i), new O(a - o, A), new O(a, A));
    case eA.TOP_RIGHT:
      return new Le(new O(e, A), new O(e + o, A), new O(a, B - i), new O(a, B));
    case eA.BOTTOM_RIGHT:
      return new Le(new O(a, A), new O(a, A + i), new O(e + o, B), new O(e, B));
    case eA.BOTTOM_LEFT:
    default:
      return new Le(new O(a, B), new O(a - o, B), new O(e, A + i), new O(e, A));
  }
}, Sr = (e) => [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox], y1 = (e) => [
  e.topLeftContentBox,
  e.topRightContentBox,
  e.bottomRightContentBox,
  e.bottomLeftContentBox
], Kr = (e) => [
  e.topLeftPaddingBox,
  e.topRightPaddingBox,
  e.bottomRightPaddingBox,
  e.bottomLeftPaddingBox
];
class Jl {
  constructor(A, t, s) {
    this.offsetX = A, this.offsetY = t, this.matrix = s, this.type = 0, this.target = 6;
  }
}
class or {
  constructor(A, t) {
    this.path = A, this.target = t, this.type = 1;
  }
}
class v1 {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
const H1 = (e) => e.type === 0, oB = (e) => e.type === 1, I1 = (e) => e.type === 2, Wl = (e, A) => e.length === A.length ? e.some((t, s) => t === A[s]) : !1, _1 = (e, A, t, s, r) => e.map((n, o) => {
  switch (o) {
    case 0:
      return n.add(A, t);
    case 1:
      return n.add(A + s, t);
    case 2:
      return n.add(A + s, t + r);
    case 3:
      return n.add(A, t + r);
  }
  return n;
});
class iB {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class lB {
  constructor(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new E1(this.container), this.container.styles.opacity < 1 && this.effects.push(new v1(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), i = this.container.styles.rotate * Math.PI / 180, a = Math.cos(i), B = Math.sin(i), l = [a, B, -B, a, 0, 0];
      this.effects.push(new Jl(r, n, l));
    }
    if (this.container.styles.transform !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), o = this.container.styles.transform;
      this.effects.push(new Jl(r, n, o));
    }
    if (this.container.styles.overflowX !== 0) {
      const s = Sr(this.curves), r = Kr(this.curves);
      Wl(s, r) ? this.effects.push(new or(
        s,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new or(
        s,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new or(
        r,
        4
        /* EffectTarget.CONTENT */
      )));
    }
  }
  getEffects(A) {
    let t = [
      2,
      3
      /* POSITION.FIXED */
    ].indexOf(this.container.styles.position) === -1, s = this.parent;
    const r = this.effects.slice(0);
    for (; s; ) {
      const n = s.effects.filter((o) => !oB(o));
      if (t || s.container.styles.position !== 0 || !s.parent) {
        if (t = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
          const o = Sr(s.curves), i = Kr(s.curves);
          Wl(o, i) || r.unshift(new or(
            i,
            6
            /* EffectTarget.CONTENT */
          ));
        }
        r.unshift(...n);
      } else
        r.unshift(...n);
      s = s.parent;
    }
    return r.filter((n) => dA(n.target, A));
  }
}
const yo = (e, A, t, s) => {
  e.container.elements.forEach((r) => {
    const n = dA(
      r.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), o = dA(
      r.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), i = new lB(r, e);
    dA(
      r.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    ) && s.push(i);
    const a = dA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) ? [] : s;
    if (n || o) {
      const B = n || r.styles.isPositioned() ? t : A, l = new iB(i);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        const c = r.styles.zIndex.order;
        if (c < 0) {
          let f = 0;
          B.negativeZIndex.some((h, w) => c > h.element.container.styles.zIndex.order ? (f = w, !1) : f > 0), B.negativeZIndex.splice(f, 0, l);
        } else if (c > 0) {
          let f = 0;
          B.positiveZIndex.some((h, w) => c >= h.element.container.styles.zIndex.order ? (f = w + 1, !1) : f > 0), B.positiveZIndex.splice(f, 0, l);
        } else
          B.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        r.styles.isFloating() ? B.nonPositionedFloats.push(l) : B.nonPositionedInlineLevel.push(l);
      yo(i, l, n ? l : t, a);
    } else
      r.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), yo(i, A, t, a);
    dA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && aB(r, a);
  });
}, aB = (e, A) => {
  let t = e instanceof bo ? e.start : 1;
  const s = e instanceof bo ? e.reversed : !1;
  for (let r = 0; r < A.length; r++) {
    const n = A[r];
    n.container instanceof jc && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Es(t, n.container.styles.listStyleType, !0), t += s ? -1 : 1;
  }
}, L1 = (e) => {
  const A = new lB(e, null), t = new iB(A), s = [];
  return yo(A, t, t, s), aB(A.container, s), t;
}, Yl = (e, A) => {
  switch (A) {
    case 0:
      return zA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return zA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return zA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return zA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, S1 = (e, A) => {
  switch (A) {
    case 0:
      return zA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return zA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return zA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return zA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, K1 = (e, A) => {
  switch (A) {
    case 0:
      return zA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return zA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return zA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return zA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, T1 = (e, A) => {
  switch (A) {
    case 0:
      return ir(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return ir(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return ir(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return ir(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, ir = (e, A) => {
  const t = [];
  return jA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), jA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, zA = (e, A, t, s) => {
  const r = [];
  return jA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), jA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), jA(s) ? r.push(s.subdivide(0.5, !0).reverse()) : r.push(s), jA(A) ? r.push(A.subdivide(0.5, !1).reverse()) : r.push(A), r;
}, cB = (e) => {
  const A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, ps = (e) => {
  const A = e.styles, t = e.bounds, s = z(A.paddingLeft, t.width), r = z(A.paddingRight, t.width), n = z(A.paddingTop, t.width), o = z(A.paddingBottom, t.width);
  return t.add(s + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + s + r), -(A.borderTopWidth + A.borderBottomWidth + n + o));
}, k1 = (e, A) => e === 0 ? A.bounds : e === 2 ? ps(A) : cB(A), D1 = (e, A) => e === 0 ? A.bounds : e === 2 ? ps(A) : cB(A), Jn = (e, A, t) => {
  const s = k1(yt(e.styles.backgroundOrigin, A), e), r = D1(yt(e.styles.backgroundClip, A), e), n = O1(yt(e.styles.backgroundSize, A), t, s);
  let [o, i] = n;
  const a = ts(yt(e.styles.backgroundPosition, A), s.width - o, s.height - i), B = M1(yt(e.styles.backgroundRepeat, A), a, n, s, r), l = Math.round(s.left + a[0]), c = Math.round(s.top + a[1]);
  return o = Math.max(1, o), i = Math.max(1, i), [B, l, c, o, i];
}, Ft = (e) => j(e) && e.value === Lt.AUTO, lr = (e) => typeof e == "number", O1 = (e, [A, t, s], r) => {
  const [n, o] = e;
  if (!n)
    return [0, 0];
  if (BA(n) && o && BA(o))
    return [z(n, r.width), z(o, r.height)];
  const i = lr(s);
  if (j(n) && (n.value === Lt.CONTAIN || n.value === Lt.COVER))
    return lr(s) ? r.width / r.height < s != (n.value === Lt.COVER) ? [r.width, r.width / s] : [r.height * s, r.height] : [r.width, r.height];
  const a = lr(A), B = lr(t), l = a || B;
  if (Ft(n) && (!o || Ft(o))) {
    if (a && B)
      return [A, t];
    if (!i && !l)
      return [r.width, r.height];
    if (l && i) {
      const U = a ? A : t * s, E = B ? t : A / s;
      return [U, E];
    }
    const h = a ? A : r.width, w = B ? t : r.height;
    return [h, w];
  }
  if (i) {
    let h = 0, w = 0;
    return BA(n) ? h = z(n, r.width) : BA(o) && (w = z(o, r.height)), Ft(n) ? h = w * s : (!o || Ft(o)) && (w = h / s), [h, w];
  }
  let c = null, f = null;
  if (BA(n) ? c = z(n, r.width) : o && BA(o) && (f = z(o, r.height)), c !== null && (!o || Ft(o)) && (f = a && B ? c / A * t : r.height), f !== null && Ft(n) && (c = a && B ? f / t * A : r.width), c !== null && f !== null)
    return [c, f];
  throw new Error("Unable to calculate background-size for element");
}, yt = (e, A) => {
  const t = e[A];
  return typeof t > "u" ? e[0] : t;
}, M1 = (e, [A, t], [s, r], n, o) => {
  switch (e) {
    case 2:
      return [
        new O(Math.round(n.left), Math.round(n.top + t)),
        new O(Math.round(n.left + n.width), Math.round(n.top + t)),
        new O(Math.round(n.left + n.width), Math.round(r + n.top + t)),
        new O(Math.round(n.left), Math.round(r + n.top + t))
      ];
    case 3:
      return [
        new O(Math.round(n.left + A), Math.round(n.top)),
        new O(Math.round(n.left + A + s), Math.round(n.top)),
        new O(Math.round(n.left + A + s), Math.round(n.height + n.top)),
        new O(Math.round(n.left + A), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new O(Math.round(n.left + A), Math.round(n.top + t)),
        new O(Math.round(n.left + A + s), Math.round(n.top + t)),
        new O(Math.round(n.left + A + s), Math.round(n.top + t + r)),
        new O(Math.round(n.left + A), Math.round(n.top + t + r))
      ];
    default:
      return [
        new O(Math.round(o.left), Math.round(o.top)),
        new O(Math.round(o.left + o.width), Math.round(o.top)),
        new O(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new O(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, R1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", jl = "Hidden Text";
class N1 {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, t) {
    const s = this._document.createElement("div"), r = this._document.createElement("img"), n = this._document.createElement("span"), o = this._document.body;
    s.style.visibility = "hidden", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", o.appendChild(s), r.src = R1, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(jl)), s.appendChild(n), s.appendChild(r);
    const i = r.offsetTop - n.offsetTop + 2;
    s.removeChild(n), s.appendChild(this._document.createTextNode(jl)), s.style.lineHeight = "normal", r.style.verticalAlign = "super";
    const a = r.offsetTop - s.offsetTop + 2;
    return o.removeChild(s), { baseline: i, middle: a };
  }
  getMetrics(A, t) {
    const s = `${A} ${t}`;
    return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(A, t)), this._data[s];
  }
}
class BB {
  constructor(A, t) {
    this.context = A, this.options = t;
  }
}
const P1 = 1e4;
class Ai extends BB {
  constructor(A, t) {
    super(A, t), this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`), this.fontMetrics = new N1(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", this._activeEffects = [], this.context.logger.debug(`Canvas renderer initialized (${t.width}x${t.height}) with scale ${t.scale}`);
  }
  applyEffects(A) {
    for (; this._activeEffects.length; )
      this.popEffect();
    A.forEach((t) => this.applyEffect(t));
  }
  applyEffect(A) {
    this.ctx.save(), I1(A) && (this.ctx.globalAlpha = A.opacity), H1(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), oB(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
  }
  popEffect() {
    this._activeEffects.pop(), this.ctx.restore();
  }
  async renderStack(A) {
    A.element.container.styles.isVisible() && await this.renderStackContent(A);
  }
  async renderNode(A) {
    if (dA(
      A.container.flags,
      16
      /* FLAGS.DEBUG_RENDER */
    ))
      debugger;
    A.container.styles.isVisible() && (await this.renderNodeBackgroundAndBorders(A), await this.renderNodeContent(A));
  }
  renderTextWithLetterSpacing(A, t, s) {
    t === 0 ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + s) : ue(A.text).reduce((n, o) => (this.ctx.fillText(o, n, A.bounds.top + s), n + this.ctx.measureText(o).width), A.bounds.left);
  }
  /**
   * Helper method to render text with paint order support
   * Reduces code duplication in line-clamp and normal rendering
   */
  renderTextBoundWithPaintOrder(A, t, s) {
    s.forEach((r) => {
      switch (r) {
        case 0:
          this.ctx.fillStyle = aA(t.color), this.renderTextWithLetterSpacing(A, t.letterSpacing, t.fontSize.number);
          break;
        case 1:
          t.webkitTextStrokeWidth && A.text.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", this.renderTextWithLetterSpacing(A, t.letterSpacing, t.fontSize.number));
          break;
      }
    });
  }
  renderTextDecoration(A, t) {
    this.ctx.fillStyle = aA(t.textDecorationColor || t.color);
    let s = 1;
    typeof t.textDecorationThickness == "number" ? s = t.textDecorationThickness : t.textDecorationThickness === "from-font" && (s = Math.max(1, Math.floor(t.fontSize.number * 0.05)));
    let r = 0;
    typeof t.textUnderlineOffset == "number" && (r = t.textUnderlineOffset);
    const n = t.textDecorationStyle;
    t.textDecorationLine.forEach((o) => {
      let i = 0;
      switch (o) {
        case 1:
          i = A.top + A.height - s + r;
          break;
        case 2:
          i = A.top;
          break;
        case 3:
          i = A.top + (A.height / 2 - s / 2);
          break;
        default:
          return;
      }
      this.drawDecorationLine(A.left, i, A.width, s, n);
    });
  }
  drawDecorationLine(A, t, s, r, n) {
    switch (n) {
      case 0:
        this.ctx.fillRect(A, t, s, r);
        break;
      case 1:
        const o = Math.max(1, r);
        this.ctx.fillRect(A, t, s, r), this.ctx.fillRect(A, t + r + o, s, r);
        break;
      case 2:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setLineDash([r, r * 2]), this.ctx.lineWidth = r, this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.moveTo(A, t + r / 2), this.ctx.lineTo(A + s, t + r / 2), this.ctx.stroke(), this.ctx.restore();
        break;
      case 3:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.setLineDash([r * 3, r * 2]), this.ctx.lineWidth = r, this.ctx.strokeStyle = this.ctx.fillStyle, this.ctx.moveTo(A, t + r / 2), this.ctx.lineTo(A + s, t + r / 2), this.ctx.stroke(), this.ctx.restore();
        break;
      case 4:
        this.ctx.save(), this.ctx.beginPath(), this.ctx.lineWidth = r, this.ctx.strokeStyle = this.ctx.fillStyle;
        const i = r * 2, a = r * 4;
        let B = A;
        for (this.ctx.moveTo(B, t + r / 2); B < A + s; ) {
          const l = Math.min(B + a / 2, A + s);
          if (this.ctx.quadraticCurveTo(B + a / 4, t + r / 2 - i, l, t + r / 2), B = l, B < A + s) {
            const c = Math.min(B + a / 2, A + s);
            this.ctx.quadraticCurveTo(B + a / 4, t + r / 2 + i, c, t + r / 2), B = c;
          }
        }
        this.ctx.stroke(), this.ctx.restore();
        break;
      default:
        this.ctx.fillRect(A, t, s, r);
    }
  }
  // Helper method to truncate text and add ellipsis if needed
  truncateTextWithEllipsis(A, t, s) {
    const r = "...", n = this.ctx.measureText(r).width;
    if (s === 0) {
      let o = A;
      for (; this.ctx.measureText(o).width + n > t && o.length > 0; )
        o = o.slice(0, -1);
      return o + r;
    } else {
      const o = ue(A);
      let i = n, a = [];
      for (const B of o) {
        const l = this.ctx.measureText(B).width + s;
        if (i + l > t)
          break;
        a.push(B), i += l;
      }
      return a.join("") + r;
    }
  }
  createFontStyle(A) {
    const t = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), s = W1(A.fontFamily).join(", "), r = Ce(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
    return [
      [A.fontStyle, t, A.fontWeight, r, s].join(" "),
      s,
      r
    ];
  }
  async renderTextNode(A, t, s) {
    const [r] = this.createFontStyle(t);
    this.ctx.font = r, this.ctx.direction = t.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic";
    const n = t.paintOrder, o = t.fontSize.number * 1.5;
    if (t.webkitLineClamp > 0 && (t.display & 2) !== 0 && t.overflowY === 1 && A.textBounds.length > 0) {
      const c = [];
      let f = [], h = A.textBounds[0].bounds.top;
      A.textBounds.forEach((U) => {
        Math.abs(U.bounds.top - h) >= o * 0.5 ? (f.length > 0 && c.push(f), f = [U], h = U.bounds.top) : f.push(U);
      }), f.length > 0 && c.push(f);
      const w = t.webkitLineClamp;
      if (c.length > w) {
        for (let E = 0; E < w - 1; E++)
          c[E].forEach((I) => {
            this.renderTextBoundWithPaintOrder(I, t, n);
          });
        const U = c[w - 1];
        if (U && U.length > 0 && s) {
          const E = U.map((m) => m.text).join(""), I = U[0], x = s.width - (I.bounds.left - s.left), d = this.truncateTextWithEllipsis(E, x, t.letterSpacing);
          n.forEach((m) => {
            switch (m) {
              case 0:
                this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(d, I.bounds.left, I.bounds.top + t.fontSize.number) : ue(d).reduce((G, nA) => (this.ctx.fillText(nA, G, I.bounds.top + t.fontSize.number), G + this.ctx.measureText(nA).width + t.letterSpacing), I.bounds.left);
                break;
              case 1:
                t.webkitTextStrokeWidth && d.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(d, I.bounds.left, I.bounds.top + t.fontSize.number) : ue(d).reduce((G, nA) => (this.ctx.strokeText(nA, G, I.bounds.top + t.fontSize.number), G + this.ctx.measureText(nA).width + t.letterSpacing), I.bounds.left));
                break;
            }
          });
        }
        return;
      }
    }
    const a = t.textOverflow === 1 && s && t.overflowX === 1 && A.textBounds.length > 0;
    let B = !1, l = "";
    if (a) {
      const c = A.textBounds[0].bounds.top;
      if (A.textBounds.every((h) => Math.abs(h.bounds.top - c) < o * 0.5)) {
        let h = A.textBounds.map((E) => E.text).join("");
        h = h.replace(/\s+/g, " ").trim();
        const w = this.ctx.measureText(h).width, U = s.width;
        w > U && (B = !0, l = this.truncateTextWithEllipsis(h, U, t.letterSpacing));
      }
    }
    if (B) {
      const c = A.textBounds[0];
      n.forEach((f) => {
        switch (f) {
          case 0:
            this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(l, c.bounds.left, c.bounds.top + t.fontSize.number) : ue(l).reduce((U, E) => (this.ctx.fillText(E, U, c.bounds.top + t.fontSize.number), U + this.ctx.measureText(E).width + t.letterSpacing), c.bounds.left);
            const h = t.textShadow;
            h.length && l.trim().length && (h.slice(0).reverse().forEach((w) => {
              this.ctx.shadowColor = aA(w.color), this.ctx.shadowOffsetX = w.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = w.offsetY.number * this.options.scale, this.ctx.shadowBlur = w.blur.number, t.letterSpacing === 0 ? this.ctx.fillText(l, c.bounds.left, c.bounds.top + t.fontSize.number) : ue(l).reduce((E, I) => (this.ctx.fillText(I, E, c.bounds.top + t.fontSize.number), E + this.ctx.measureText(I).width + t.letterSpacing), c.bounds.left);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          case 1:
            t.webkitTextStrokeWidth && l.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(l, c.bounds.left, c.bounds.top + t.fontSize.number) : ue(l).reduce((U, E) => (this.ctx.strokeText(E, U, c.bounds.top + t.fontSize.number), U + this.ctx.measureText(E).width + t.letterSpacing), c.bounds.left));
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((c) => {
      n.forEach((f) => {
        switch (f) {
          case 0:
            this.ctx.fillStyle = aA(t.color), this.renderTextWithLetterSpacing(c, t.letterSpacing, t.fontSize.number);
            const h = t.textShadow;
            h.length && c.text.trim().length && (h.slice(0).reverse().forEach((w) => {
              this.ctx.shadowColor = aA(w.color), this.ctx.shadowOffsetX = w.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = w.offsetY.number * this.options.scale, this.ctx.shadowBlur = w.blur.number, this.renderTextWithLetterSpacing(c, t.letterSpacing, t.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), t.textDecorationLine.length && this.renderTextDecoration(c.bounds, t);
            break;
          case 1:
            if (t.webkitTextStrokeWidth && c.text.trim().length) {
              this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round";
              const w = t.fontSize.number;
              t.letterSpacing === 0 ? this.ctx.strokeText(c.text, c.bounds.left, c.bounds.top + w) : ue(c.text).reduce((E, I) => (this.ctx.strokeText(I, E, c.bounds.top + w), E + this.ctx.measureText(I).width), c.bounds.left);
            }
            this.ctx.strokeStyle = "", this.ctx.lineWidth = 0, this.ctx.lineJoin = "miter";
            break;
        }
      });
    });
  }
  renderReplacedElement(A, t, s) {
    const r = s.naturalWidth || A.intrinsicWidth, n = s.naturalHeight || A.intrinsicHeight;
    if (s && r > 0 && n > 0) {
      const o = ps(A), i = Kr(t);
      this.path(i), this.ctx.save(), this.ctx.clip();
      let a = 0, B = 0, l = r, c = n, f = o.left, h = o.top, w = o.width, U = o.height;
      const { objectFit: E } = A.styles, I = w / U, x = l / c;
      if (E === 2)
        x > I ? (U = w / x, h += (o.height - U) / 2) : (w = U * x, f += (o.width - w) / 2);
      else if (E === 4)
        x > I ? (l = c * I, a += (r - l) / 2) : (c = l / I, B += (n - c) / 2);
      else if (E === 8)
        l > w ? (a += (l - w) / 2, l = w) : (f += (w - l) / 2, w = l), c > U ? (B += (c - U) / 2, c = U) : (h += (U - c) / 2, U = c);
      else if (E === 16) {
        const d = x > I ? w : U * x, m = l > w ? l : w;
        d < m ? x > I ? (U = w / x, h += (o.height - U) / 2) : (w = U * x, f += (o.width - w) / 2) : (l > w ? (a += (l - w) / 2, l = w) : (f += (w - l) / 2, w = l), c > U ? (B += (c - U) / 2, c = U) : (h += (U - c) / 2, U = c));
      }
      this.ctx.drawImage(s, a, B, l, c, f, h, w, U), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const t = A.container, s = A.curves, r = t.styles, n = ps(t);
    for (const o of t.textNodes)
      await this.renderTextNode(o, r, n);
    if (t instanceof Jc)
      try {
        const o = await this.context.cache.match(t.src);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading image ${t.src}`);
      }
    if (t instanceof Wc && this.renderReplacedElement(t, s, t.canvas), t instanceof Yc)
      try {
        const o = await this.context.cache.match(t.svg);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading svg ${t.svg.substring(0, 255)}`);
      }
    if (t instanceof qc && t.tree) {
      const i = await new Ai(this.context, {
        scale: this.options.scale,
        backgroundColor: t.backgroundColor,
        x: 0,
        y: 0,
        width: t.width,
        height: t.height
      }).render(t.tree);
      t.width && t.height && this.ctx.drawImage(i, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height);
    }
    if (t instanceof ds) {
      const o = Math.min(t.bounds.width, t.bounds.height);
      t.type === Hr ? t.checked && (this.ctx.save(), this.path([
        new O(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79),
        new O(t.bounds.left + o * 0.16, t.bounds.top + o * 0.5549),
        new O(t.bounds.left + o * 0.27347, t.bounds.top + o * 0.44071),
        new O(t.bounds.left + o * 0.39694, t.bounds.top + o * 0.5649),
        new O(t.bounds.left + o * 0.72983, t.bounds.top + o * 0.23),
        new O(t.bounds.left + o * 0.84, t.bounds.top + o * 0.34085),
        new O(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79)
      ]), this.ctx.fillStyle = aA(Kl), this.ctx.fill(), this.ctx.restore()) : t.type === Ir && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + o / 2, t.bounds.top + o / 2, o / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = aA(Kl), this.ctx.fill(), this.ctx.restore());
    }
    if (V1(t) && t.value.length) {
      const [o, i, a] = this.createFontStyle(r), { baseline: B } = this.fontMetrics.getMetrics(i, a);
      this.ctx.font = o;
      const l = t instanceof ds && t.isPlaceholder;
      this.ctx.fillStyle = aA(l ? jF : r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = X1(t.styles.textAlign);
      const c = ps(t);
      let f = 0;
      switch (t.styles.textAlign) {
        case 1:
          f += c.width / 2;
          break;
        case 2:
          f += c.width;
          break;
      }
      let h = 0;
      if (t instanceof ds) {
        const U = z(r.fontSize, 0);
        h = (c.height - U) / 2;
      }
      const w = c.add(f, h, 0, 0);
      this.ctx.save(), this.path([
        new O(c.left, c.top),
        new O(c.left + c.width, c.top),
        new O(c.left + c.width, c.top + c.height),
        new O(c.left, c.top + c.height)
      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new gs(t.value, w), r.letterSpacing, B), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
    }
    if (dA(
      t.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    )) {
      if (t.styles.listStyleImage !== null) {
        const o = t.styles.listStyleImage;
        if (o.type === 0) {
          let i;
          const a = o.url;
          try {
            i = await this.context.cache.match(a), this.ctx.drawImage(i, t.bounds.left - (i.width + 10), t.bounds.top);
          } catch {
            this.context.logger.error(`Error loading list-style-image ${a}`);
          }
        }
      } else if (A.listValue && t.styles.listStyleType !== -1) {
        const [o] = this.createFontStyle(r);
        this.ctx.font = o, this.ctx.fillStyle = aA(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right";
        const i = new KA(t.bounds.left, t.bounds.top + z(t.styles.paddingTop, t.bounds.width), t.bounds.width, pl(r.lineHeight, r.fontSize.number) / 2 + 1);
        this.renderTextWithLetterSpacing(new gs(A.listValue, i), r.letterSpacing, pl(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
      }
    }
  }
  async renderStackContent(A) {
    if (dA(
      A.element.container.flags,
      16
      /* FLAGS.DEBUG_RENDER */
    ))
      debugger;
    await this.renderNodeBackgroundAndBorders(A.element);
    for (const t of A.negativeZIndex)
      await this.renderStack(t);
    await this.renderNodeContent(A.element);
    for (const t of A.nonInlineLevel)
      await this.renderNode(t);
    for (const t of A.nonPositionedFloats)
      await this.renderStack(t);
    for (const t of A.nonPositionedInlineLevel)
      await this.renderStack(t);
    for (const t of A.inlineLevel)
      await this.renderNode(t);
    for (const t of A.zeroOrAutoZIndexOrTransformedOrOpacity)
      await this.renderStack(t);
    for (const t of A.positiveZIndex)
      await this.renderStack(t);
  }
  mask(A) {
    this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.options.width, 0), this.ctx.lineTo(this.options.width, this.options.height), this.ctx.lineTo(0, this.options.height), this.ctx.lineTo(0, 0), this.formatPath(A.slice(0).reverse()), this.ctx.closePath();
  }
  path(A) {
    this.ctx.beginPath(), this.formatPath(A), this.ctx.closePath();
  }
  formatPath(A) {
    A.forEach((t, s) => {
      const r = jA(t) ? t.start : t;
      s === 0 ? this.ctx.moveTo(r.x, r.y) : this.ctx.lineTo(r.x, r.y), jA(t) && this.ctx.bezierCurveTo(t.startControl.x, t.startControl.y, t.endControl.x, t.endControl.y, t.end.x, t.end.y);
    });
  }
  renderRepeat(A, t, s, r) {
    this.path(A), this.ctx.fillStyle = t, this.ctx.translate(s, r), this.ctx.fill(), this.ctx.translate(-s, -r);
  }
  resizeImage(A, t, s) {
    const n = (this.canvas.ownerDocument ?? document).createElement("canvas");
    return n.width = Math.max(1, t), n.height = Math.max(1, s), n.getContext("2d").drawImage(A, 0, 0, A.width, A.height, 0, 0, t, s), n;
  }
  async renderBackgroundImage(A) {
    let t = A.styles.backgroundImage.length - 1;
    for (const s of A.styles.backgroundImage.slice(0).reverse()) {
      if (s.type === 0) {
        let r;
        const n = s.url;
        try {
          r = await this.context.cache.match(n);
        } catch {
          this.context.logger.error(`Error loading background-image ${n}`);
        }
        if (r) {
          const o = isNaN(r.width) || r.width === 0 ? 1 : r.width, i = isNaN(r.height) || r.height === 0 ? 1 : r.height, [a, B, l, c, f] = Jn(A, t, [
            o,
            i,
            o / i
          ]), h = this.ctx.createPattern(this.resizeImage(r, c, f), "repeat");
          this.renderRepeat(a, h, B, l);
        }
      } else if (Qb(s)) {
        const [r, n, o, i, a] = Jn(A, t, [null, null, null]), [B, l, c, f, h] = gb(s.angle, i, a), w = document.createElement("canvas");
        w.width = i, w.height = a;
        const U = w.getContext("2d"), E = U.createLinearGradient(l, f, c, h);
        if (dl(s.stops, B || 1).forEach((I) => E.addColorStop(I.stop, aA(I.color))), U.fillStyle = E, U.fillRect(0, 0, i, a), i > 0 && a > 0) {
          const I = this.ctx.createPattern(w, "repeat");
          this.renderRepeat(r, I, n, o);
        }
      } else if (Cb(s)) {
        const [r, n, o, i, a] = Jn(A, t, [
          null,
          null,
          null
        ]), B = s.position.length === 0 ? [Yo] : s.position, l = z(B[0], i), c = z(B[B.length - 1], a);
        let [f, h] = db(s, l, c, i, a);
        if ((f === 0 || h === 0) && (f = Math.max(f, 0.01), h = Math.max(h, 0.01)), f > 0 && h > 0) {
          const w = this.ctx.createRadialGradient(n + l, o + c, 0, n + l, o + c, f);
          if (dl(s.stops, f * 2).forEach((U) => w.addColorStop(U.stop, aA(U.color))), this.path(r), this.ctx.fillStyle = w, f !== h) {
            const U = A.bounds.left + 0.5 * A.bounds.width, E = A.bounds.top + 0.5 * A.bounds.height, I = h / f, x = 1 / I;
            this.ctx.save(), this.ctx.translate(U, E), this.ctx.transform(1, 0, 0, I, 0, 0), this.ctx.translate(-U, -E), this.ctx.fillRect(n, x * (o - E) + E, i, a * x), this.ctx.restore();
          } else
            this.ctx.fill();
        }
      }
      t--;
    }
  }
  async renderSolidBorder(A, t, s) {
    this.path(Yl(s, t)), this.ctx.fillStyle = aA(A), this.ctx.fill();
  }
  async renderDoubleBorder(A, t, s, r) {
    if (t < 3) {
      await this.renderSolidBorder(A, s, r);
      return;
    }
    const n = S1(r, s);
    this.path(n), this.ctx.fillStyle = aA(A), this.ctx.fill();
    const o = K1(r, s);
    this.path(o), this.ctx.fill();
  }
  async renderNodeBackgroundAndBorders(A) {
    this.applyEffects(A.getEffects(
      2
      /* EffectTarget.BACKGROUND_BORDERS */
    ));
    const t = A.container.styles, s = !Ye(t.backgroundColor) || t.backgroundImage.length, r = [
      { style: t.borderTopStyle, color: t.borderTopColor, width: t.borderTopWidth },
      { style: t.borderRightStyle, color: t.borderRightColor, width: t.borderRightWidth },
      { style: t.borderBottomStyle, color: t.borderBottomColor, width: t.borderBottomWidth },
      { style: t.borderLeftStyle, color: t.borderLeftColor, width: t.borderLeftWidth }
    ], n = G1(yt(t.backgroundClip, 0), A.curves);
    (s || t.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), Ye(t.backgroundColor) || (this.ctx.fillStyle = aA(t.backgroundColor), this.ctx.fill()), await this.renderBackgroundImage(A.container), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((i) => {
      this.ctx.save();
      const a = Sr(A.curves), B = i.inset ? 0 : P1, l = _1(a, -B + (i.inset ? 1 : -1) * i.spread.number, (i.inset ? 1 : -1) * i.spread.number, i.spread.number * (i.inset ? -2 : 2), i.spread.number * (i.inset ? -2 : 2));
      i.inset ? (this.path(a), this.ctx.clip(), this.mask(l)) : (this.mask(a), this.ctx.clip(), this.path(l)), this.ctx.shadowOffsetX = i.offsetX.number + B, this.ctx.shadowOffsetY = i.offsetY.number, this.ctx.shadowColor = aA(i.color), this.ctx.shadowBlur = i.blur.number, this.ctx.fillStyle = i.inset ? aA(i.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
    }));
    let o = 0;
    for (const i of r)
      i.style !== 0 && !Ye(i.color) && i.width > 0 && (i.style === 2 ? await this.renderDashedDottedBorder(
        i.color,
        i.width,
        o,
        A.curves,
        2
        /* BORDER_STYLE.DASHED */
      ) : i.style === 3 ? await this.renderDashedDottedBorder(
        i.color,
        i.width,
        o,
        A.curves,
        3
        /* BORDER_STYLE.DOTTED */
      ) : i.style === 4 ? await this.renderDoubleBorder(i.color, i.width, o, A.curves) : await this.renderSolidBorder(i.color, o, A.curves)), o++;
  }
  async renderDashedDottedBorder(A, t, s, r, n) {
    this.ctx.save();
    const o = T1(r, s), i = Yl(r, s);
    n === 2 && (this.path(i), this.ctx.clip());
    let a, B, l, c;
    jA(i[0]) ? (a = i[0].start.x, B = i[0].start.y) : (a = i[0].x, B = i[0].y), jA(i[1]) ? (l = i[1].end.x, c = i[1].end.y) : (l = i[1].x, c = i[1].y);
    let f;
    s === 0 || s === 2 ? f = Math.abs(a - l) : f = Math.abs(B - c), this.ctx.beginPath(), n === 3 ? this.formatPath(o) : this.formatPath(i.slice(0, 2));
    let h = t < 3 ? t * 3 : t * 2, w = t < 3 ? t * 2 : t;
    n === 3 && (h = t, w = t);
    let U = !0;
    if (f <= h * 2)
      U = !1;
    else if (f <= h * 2 + w) {
      const E = f / (2 * h + w);
      h *= E, w *= E;
    } else {
      const E = Math.floor((f + w) / (h + w)), I = (f - E * h) / (E - 1), x = (f - (E + 1) * h) / E;
      w = x <= 0 || Math.abs(w - I) < Math.abs(w - x) ? I : x;
    }
    if (U && (n === 3 ? this.ctx.setLineDash([0, h + w]) : this.ctx.setLineDash([h, w])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = aA(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
      if (jA(i[0])) {
        const E = i[3], I = i[0];
        this.ctx.beginPath(), this.formatPath([new O(E.end.x, E.end.y), new O(I.start.x, I.start.y)]), this.ctx.stroke();
      }
      if (jA(i[1])) {
        const E = i[1], I = i[2];
        this.ctx.beginPath(), this.formatPath([new O(E.end.x, E.end.y), new O(I.start.x, I.start.y)]), this.ctx.stroke();
      }
    }
    this.ctx.restore();
  }
  async render(A) {
    this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const t = L1(A);
    return await this.renderStack(t), this.applyEffects([]), this.canvas;
  }
}
const V1 = (e) => e instanceof zc || e instanceof Zc ? !0 : e instanceof ds && e.type !== Ir && e.type !== Hr, G1 = (e, A) => {
  switch (e) {
    case 0:
      return Sr(A);
    case 2:
      return y1(A);
    case 1:
    default:
      return Kr(A);
  }
}, X1 = (e) => {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, J1 = ["-apple-system", "system-ui"], W1 = (e) => /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter((A) => J1.indexOf(A) === -1) : e;
class Y1 extends BB {
  constructor(A, t) {
    super(A, t), this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${t.width}x${t.height} at ${t.x},${t.y}) with scale ${t.scale}`);
  }
  async render(A) {
    const t = Co(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), s = await j1(t);
    return this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const j1 = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => {
    A(s);
  }, s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
});
class uB {
  constructor({ id: A, enabled: t }) {
    this.id = A, this.enabled = t, this.start = Date.now();
  }
  debug(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
  getTime() {
    return Date.now() - this.start;
  }
  info(...A) {
    this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info(this.id, `${this.getTime()}ms`, ...A);
  }
  warn(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
  error(...A) {
    this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error(this.id, `${this.getTime()}ms`, ...A) : this.info(...A));
  }
}
uB.instances = {};
class ln {
  constructor(A, t) {
    this.windowBounds = t, this.instanceName = `#${ln.instanceCount++}`, this.logger = new uB({ id: this.instanceName, enabled: A.logging }), this.cache = A.cache ?? new Q1(this, A);
  }
}
ln.instanceCount = 1;
let fB;
const Z1 = (e) => {
  fB = e;
}, gB = (e, A = {}) => z1(e, A);
gB.setCspNonce = Z1;
typeof window < "u" && Ae.setContext(window);
const z1 = async (e, A) => {
  if (!e || typeof e != "object")
    return Promise.reject("Invalid element provided as first argument");
  const t = e.ownerDocument;
  if (!t)
    throw new Error("Element is not attached to a Document");
  const s = t.defaultView;
  if (!s)
    throw new Error("Document is not attached to a Window");
  const r = {
    allowTaint: A.allowTaint ?? !1,
    imageTimeout: A.imageTimeout ?? 15e3,
    proxy: A.proxy,
    useCORS: A.useCORS ?? !1,
    customIsSameOrigin: A.customIsSameOrigin
  }, n = {
    logging: A.logging ?? !0,
    cache: A.cache,
    ...r
  }, o = {
    windowWidth: A.windowWidth ?? s.innerWidth,
    windowHeight: A.windowHeight ?? s.innerHeight,
    scrollX: A.scrollX ?? s.pageXOffset,
    scrollY: A.scrollY ?? s.pageYOffset
  }, i = new KA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), a = new ln(n, i), B = A.foreignObjectRendering ?? !1, l = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: B,
    copyStyles: B,
    cspNonce: fB
  };
  a.logger.debug(`Starting document clone with size ${i.width}x${i.height} scrolled to ${-i.left},${-i.top}`);
  const c = new Vl(a, e, l), f = c.clonedReferenceElement;
  if (!f)
    return Promise.reject("Unable to find element in cloned iframe");
  const h = await c.toIFrame(t, i), { width: w, height: U, left: E, top: I } = $o(f) || t1(f) ? y0(f.ownerDocument) : Yr(a, f), x = q1(a, f, A.backgroundColor), d = {
    canvas: A.canvas,
    backgroundColor: x,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + E,
    y: (A.y ?? 0) + I,
    width: A.width ?? Math.ceil(w),
    height: A.height ?? Math.ceil(U)
  };
  let m;
  if (B)
    a.logger.debug("Document cloned, using foreign object rendering"), m = await new Y1(a, d).render(f);
  else {
    a.logger.debug(`Document cloned, element located at ${E},${I} with size ${w}x${U} using computed rendering`), a.logger.debug("Starting DOM parsing");
    const S = AB(a, f);
    x === S.styles.backgroundColor && (S.styles.backgroundColor = pe.TRANSPARENT), a.logger.debug(`Starting renderer for element at ${d.x},${d.y} with size ${d.width}x${d.height}`), m = await new Ai(a, d).render(S);
  }
  return (A.removeContainer ?? !0) && (Vl.destroy(h) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), m;
}, q1 = (e, A, t) => {
  const s = A.ownerDocument, r = s.documentElement ? _t(e, getComputedStyle(s.documentElement).backgroundColor) : pe.TRANSPARENT, n = s.body ? _t(e, getComputedStyle(s.body).backgroundColor) : pe.TRANSPARENT, o = typeof t == "string" ? _t(e, t) : t === null ? pe.TRANSPARENT : 4294967295;
  return A === s.documentElement ? Ye(r) ? Ye(n) ? o : n : r : o;
};
async function $1(e = {}) {
  var l;
  const A = window.innerWidth, t = window.innerHeight;
  try {
    (l = e.beforeCapture) == null || l.call(e);
  } catch {
  }
  const s = (() => {
    var c;
    try {
      return (((c = e.canvases) == null ? void 0 : c.call(e)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), r = s.map((c) => {
    try {
      return c.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(s), o = e.ignore || [];
  let i = null;
  try {
    i = await Promise.race([
      gB(document.body, {
        useCORS: !0,
        allowTaint: !0,
        backgroundColor: null,
        scale: 1,
        width: A,
        height: t,
        ignoreElements: (c) => {
          var f;
          return n.has(c) || c.tagName && c.tagName.toLowerCase().startsWith("bugfix-") || (f = e.ignoreElement) != null && f.call(e, c) ? !0 : o.some((h) => {
            var w;
            try {
              return (w = c.matches) == null ? void 0 : w.call(c, h);
            } catch {
              return !1;
            }
          });
        }
      }),
      new Promise((c, f) => setTimeout(() => f(new Error("화면 렌더 시간 초과(15초)")), e.timeoutMs || 15e3))
    ]);
  } catch (c) {
    if (console.warn("[BugReport] 화면 UI 렌더 실패 - 캔버스 배경만 저장:", (c == null ? void 0 : c.message) || c), !r.length) throw c;
  }
  const a = document.createElement("canvas");
  a.width = A, a.height = t;
  const B = a.getContext("2d");
  for (const c of r)
    await new Promise((f) => {
      const h = new Image();
      h.onload = () => {
        B.drawImage(h, 0, 0, A, t), f();
      }, h.onerror = f, h.src = c;
    });
  return i && B.drawImage(i, 0, 0), a.toDataURL("image/png");
}
const mt = (e, A = 2) => String(e).padStart(A, "0");
function re(e = !1) {
  const A = /* @__PURE__ */ new Date(), t = `${mt(A.getHours())}:${mt(A.getMinutes())}:${mt(A.getSeconds())}.${mt(A.getMilliseconds(), 3)}`;
  return e ? `${A.getFullYear()}-${mt(A.getMonth() + 1)}-${mt(A.getDate())} ${t}` : t;
}
function Ls(e) {
  const A = [];
  return { push(t) {
    A.push(t), A.length > e && A.shift();
  }, get: () => [...A] };
}
const Am = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function em(e) {
  if (e == null) return String(e);
  if (e instanceof Error) return e.stack || e.toString();
  if (typeof e == "object")
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  return String(e);
}
function tm({ max: e = 200, silent: A = Am } = {}) {
  const t = Ls(e);
  for (const s of ["log", "warn", "error"]) {
    const r = console[s].bind(console);
    console[s] = (...n) => {
      const o = n.map(em).join(" ");
      A.some((i) => i.test(o)) || (t.push({ level: s, time: re(!0), message: o }), r(...n));
    };
  }
  return window.addEventListener("error", (s) => t.push({ level: "error", time: re(!0), message: `[GlobalError] ${s.message} (${s.filename}:${s.lineno})` })), window.addEventListener("unhandledrejection", (s) => {
    const r = s.reason instanceof Error ? s.reason.message : String(s.reason);
    t.push({ level: "error", time: re(!0), message: `[UnhandledRejection] ${r}` });
  }), t.get;
}
const sm = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, rm = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function vo(e, A = 2e3) {
  if (e == null) return null;
  let t;
  try {
    t = typeof e == "string" ? e : JSON.stringify(e);
  } catch {
    return "[unserializable]";
  }
  return t.length > A ? t.slice(0, A) + "…[truncated]" : t;
}
function Oe(e, A) {
  if (A == null) return A;
  const t = typeof A == "string" ? A : (() => {
    try {
      return JSON.stringify(A);
    } catch {
      return String(A);
    }
  })();
  return sm.test(e || "") || rm.test(t) ? "[masked]" : vo(A);
}
function nm({ max: e = 50, axios: A = [], fetch: t = !1, xhr: s = !1, ignore: r = [] } = {}) {
  const n = Ls(e), o = (i) => r.some((a) => a instanceof RegExp ? a.test(i) : String(i).includes(a));
  for (const i of A) {
    const a = i != null && i.interceptors ? i : i == null ? void 0 : i.instance, B = (i == null ? void 0 : i.label) || "axios";
    a != null && a.interceptors && (a.interceptors.request.use((l) => (l._bk = { t0: Date.now(), time: re(!0) }, l), (l) => Promise.reject(l)), a.interceptors.response.use((l) => {
      var f;
      const c = l.config._bk || {};
      return o(l.config.url) || n.push({ server: B, time: c.time, duration: c.t0 ? Date.now() - c.t0 : null, method: (f = l.config.method) == null ? void 0 : f.toUpperCase(), url: l.config.url, params: vo(l.config.params), requestBody: Oe(l.config.url, l.config.data), status: l.status, responseBody: Oe(l.config.url, l.data), error: null }), l;
    }, (l) => {
      var f, h, w, U, E, I, x, d, m, S, G;
      const c = ((f = l.config) == null ? void 0 : f._bk) || {};
      return o((h = l.config) == null ? void 0 : h.url) || n.push({ server: B, time: c.time, duration: c.t0 ? Date.now() - c.t0 : null, method: (U = (w = l.config) == null ? void 0 : w.method) == null ? void 0 : U.toUpperCase(), url: (E = l.config) == null ? void 0 : E.url, params: vo((I = l.config) == null ? void 0 : I.params), requestBody: Oe((x = l.config) == null ? void 0 : x.url, (d = l.config) == null ? void 0 : d.data), status: ((m = l.response) == null ? void 0 : m.status) ?? "ERR", responseBody: Oe((S = l.config) == null ? void 0 : S.url, (G = l.response) == null ? void 0 : G.data), error: l.message }), Promise.reject(l);
    }));
  }
  if (t && window.fetch) {
    const i = window.fetch.bind(window);
    window.fetch = async (a, B = {}) => {
      const l = typeof a == "string" ? a : a == null ? void 0 : a.url, c = Date.now(), f = re(!0), h = (B.method || typeof a != "string" && (a == null ? void 0 : a.method) || "GET").toUpperCase();
      try {
        const w = await i(a, B);
        return o(l) || n.push({ server: "fetch", time: f, duration: Date.now() - c, method: h, url: l, params: null, requestBody: Oe(l, B.body), status: w.status, responseBody: null, error: null }), w;
      } catch (w) {
        throw o(l) || n.push({ server: "fetch", time: f, duration: Date.now() - c, method: h, url: l, params: null, requestBody: Oe(l, B.body), status: "ERR", responseBody: null, error: w.message }), w;
      }
    };
  }
  if (s && window.XMLHttpRequest) {
    const i = XMLHttpRequest.prototype, a = i.open, B = i.send;
    i.open = function(l, c, ...f) {
      return this._bk = { method: String(l).toUpperCase(), url: c }, a.call(this, l, c, ...f);
    }, i.send = function(l) {
      const c = this._bk || {}, f = Date.now(), h = re(!0);
      return this.addEventListener("loadend", () => {
        o(c.url) || n.push({ server: "xhr", time: h, duration: Date.now() - f, method: c.method, url: c.url, params: null, requestBody: Oe(c.url, l), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Oe(c.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), B.call(this, l);
    };
  }
  return n.get;
}
function om(e) {
  var t;
  if (e == null) return null;
  if (typeof e != "object") return e;
  const A = ((t = e == null ? void 0 : e.constructor) == null ? void 0 : t.name) ?? "";
  if (A.startsWith("Cesium") || typeof HTMLElement < "u" && e instanceof HTMLElement) return `[${A}]`;
  try {
    const s = JSON.stringify(e, (r, n) => {
      var o, i;
      return typeof HTMLElement < "u" && n instanceof HTMLElement ? "[HTMLElement]" : (i = (o = n == null ? void 0 : n.constructor) == null ? void 0 : o.name) != null && i.startsWith("Cesium") ? `[${n.constructor.name}]` : typeof n == "function" ? "[Function]" : n;
    });
    return s.length > 300 ? s.slice(0, 300) + "…" : JSON.parse(s);
  } catch {
    return "[unserializable]";
  }
}
function im(e, { max: A = 100 } = {}) {
  const t = Ls(A);
  return e.subscribe((s) => t.push({ time: re(), type: s.type, payload: om(s.payload) })), t.get;
}
function lm(e, { max: A = 20 } = {}) {
  const t = Ls(A);
  if (e && typeof e.afterEach == "function")
    e.afterEach((s, r) => t.push({ time: re(), from: r.fullPath || "(초기)", to: s.fullPath, name: String(s.name ?? "") }));
  else {
    let s = location.pathname + location.search + location.hash;
    const r = () => {
      const n = location.pathname + location.search + location.hash;
      n !== s && (t.push({ time: re(), from: s, to: n, name: "" }), s = n);
    };
    for (const n of ["pushState", "replaceState"]) {
      const o = history[n];
      history[n] = function(...i) {
        const a = o.apply(this, i);
        return r(), a;
      };
    }
    window.addEventListener("popstate", r), window.addEventListener("hashchange", r);
  }
  return t.get;
}
function am(e, { max: A = 80, skip: t = [] } = {}) {
  const s = Ls(A), r = new Set(t), n = e.emit.bind(e);
  return e.emit = (o, i) => (r.has(o) || s.push({ time: re(), type: o }), n(o, i)), s.get;
}
function gm() {
  const e = /* @__PURE__ */ new Set(), A = () => (t) => (s) => {
    const r = typeof s == "function" ? "(thunk)" : String((s == null ? void 0 : s.type) ?? "(unknown)");
    for (const n of e)
      try {
        n({ type: r, payload: typeof s == "object" ? s.payload : void 0 });
      } catch {
      }
    return t(s);
  };
  return A.source = { subscribe: (t) => (e.add(t), () => e.delete(t)) }, A;
}
function dm(e) {
  return {
    subscribe: (A) => e.subscribe((t, s) => {
      const r = Object.keys(t).filter((n) => t[n] !== (s == null ? void 0 : s[n]));
      A({ type: `set(${r.join(",") || "?"})`, payload: Object.fromEntries(r.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function cm(e) {
  var n, o;
  let A = null;
  try {
    const i = performance == null ? void 0 : performance.memory;
    i && (A = { usedMB: +(i.usedJSHeapSize / 1048576).toFixed(1), limitMB: +(i.jsHeapSizeLimit / 1048576).toFixed(1) });
  } catch {
  }
  let t = null;
  try {
    const i = navigator.connection;
    i && (t = { effectiveType: i.effectiveType, downlink: i.downlink, rtt: i.rtt });
  } catch {
  }
  let s = null;
  try {
    const i = ["token", "password", "secret", "auth-tokens-", ...e.options.storageExclude || []].map((a) => a.toLowerCase());
    s = {};
    for (let a = 0; a < localStorage.length; a++) {
      const B = localStorage.key(a);
      if (i.some((c) => B.toLowerCase().includes(c))) continue;
      const l = localStorage.getItem(B);
      s[B] = l && l.length > 200 ? l.slice(0, 200) + "…" : l;
    }
  } catch {
  }
  let r = {};
  try {
    r = ((o = (n = e.options).context) == null ? void 0 : o.call(n)) || {};
  } catch (i) {
    r = { _contextError: String((i == null ? void 0 : i.message) || i) };
  }
  return {
    datetime: re(!0),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    url: window.location.href,
    browser: { userAgent: navigator.userAgent, language: navigator.language, platform: navigator.platform },
    screen: { resolution: `${screen.width}x${screen.height}`, viewport: `${window.innerWidth}x${window.innerHeight}`, devicePixelRatio: window.devicePixelRatio },
    memory: A,
    connection: t,
    ...r,
    recentEvents: e.getEvents().slice(-50).reverse(),
    mutationLog: e.getMutations().slice(-100).reverse(),
    routeHistory: e.getRoutes(),
    storage: s
  };
}
const Yt = () => [];
function Bm(e = {}) {
  var l;
  const A = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...e }, t = A.interceptors || {}, s = t.console === !1 ? Yt : tm(t.console === !0 ? {} : t.console), r = t.network ? nm(t.network) : Yt, n = t.mutation ? im(t.mutation) : Yt, o = t.router ? lm(t.router === !0 ? null : t.router) : Yt, i = t.events ? am(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Yt, a = ((l = A.projects) != null && l.length ? A.projects : [{ key: A.project, label: A.project }]).map((c) => typeof c == "string" ? { key: c, label: c } : c), B = {
    options: A,
    projects: a,
    project: a[0].key,
    api: mn({ ...A, project: a[0].key, apiKey: a[0].apiKey ?? A.apiKey, adminKey: A.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const c of a)
        if (!B._info[c.key])
          try {
            B._info[c.key] = await mn({ ...A, project: c.key, apiKey: c.apiKey ?? A.apiKey, adminKey: A.adminKey }).info();
          } catch {
            B._info[c.key] = { canFix: !0, fixFrom: "app" };
          }
      return B._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(c) {
      const f = a.find((h) => h.key === c);
      f && (B.project = f.key, B.api = mn({ ...A, project: f.key, apiKey: f.apiKey ?? A.apiKey, adminKey: A.adminKey }));
    },
    getLogs: s,
    getNetwork: r,
    getMutations: n,
    getRoutes: o,
    getEvents: i,
    captureScreen: (c = {}) => {
      var f;
      return $1({ ...A.capture || {}, ...c, ignore: [...((f = A.capture) == null ? void 0 : f.ignore) || [], ...c.ignore || []] });
    },
    captureContext: () => cm(B),
    fetchBackendLogs: async () => A.backendLogs ? await A.backendLogs() : null,
    notify: (c) => {
      A.notify ? A.notify(c) : B._listeners.forEach((f) => f(c));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(c) {
      return B._listeners.add(c), () => B._listeners.delete(c);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (B._els.modal) return B;
      const c = document.createElement("bugfix-report-modal"), f = document.createElement("bugfix-viewer");
      return c.kit = B, f.kit = B, document.body.append(c, f), B._els = { modal: c, viewer: f }, B;
    },
    openReport: () => {
      var c, f, h, w;
      return ((f = (c = B._els.modal) == null ? void 0 : c.open) == null ? void 0 : f.call(c)) ?? ((w = (h = B._open) == null ? void 0 : h.report) == null ? void 0 : w.call(h));
    },
    openViewer: (c) => {
      var f, h, w, U;
      return ((h = (f = B._els.viewer) == null ? void 0 : f.open) == null ? void 0 : h.call(f, c)) ?? ((U = (w = B._open) == null ? void 0 : w.viewer) == null ? void 0 : U.call(w, c));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(c, f) {
      B._open[c] = f;
    }
  };
  if (A.hotkeys) {
    const c = (f, h) => {
      if (!h) return !1;
      const w = h.split("+").map((E) => E.trim().toLowerCase()), U = w.pop();
      return f.key.toLowerCase() === U && w.includes("shift") === f.shiftKey && w.includes("ctrl") === f.ctrlKey && w.includes("alt") === f.altKey && w.includes("meta") === f.metaKey;
    };
    window.addEventListener("keydown", (f) => {
      c(f, A.hotkeys.report) ? (f.preventDefault(), B.openReport()) : c(f, A.hotkeys.viewer) && (f.preventDefault(), B.openViewer());
    });
  }
  return B;
}
function um() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ Mi(Vh)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ Mi(E0));
}
um();
function hm(e) {
  return Bm(e).mount();
}
export {
  $1 as captureScreen,
  Bm as createBugfix,
  hm as install,
  gm as reduxMiddleware,
  um as register,
  dm as zustandSource
};
