/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function _o(e) {
  const A = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) A[t] = 1;
  return (t) => t in A;
}
const iA = {}, lt = [], ge = () => {
}, $l = () => !1, Dr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Or = (e) => e.startsWith("onUpdate:"), CA = Object.assign, Lo = (e, A) => {
  const t = e.indexOf(A);
  t > -1 && e.splice(t, 1);
}, Uf = Object.prototype.hasOwnProperty, AA = (e, A) => Uf.call(e, A), V = Array.isArray, Je = (e) => Hs(e) === "[object Map]", Tt = (e) => Hs(e) === "[object Set]", ci = (e) => Hs(e) === "[object Date]", W = (e) => typeof e == "function", dA = (e) => typeof e == "string", we = (e) => typeof e == "symbol", rA = (e) => e !== null && typeof e == "object", Aa = (e) => (rA(e) || W(e)) && W(e.then) && W(e.catch), ea = Object.prototype.toString, Hs = (e) => ea.call(e), Ff = (e) => Hs(e).slice(8, -1), Mr = (e) => Hs(e) === "[object Object]", So = (e) => dA(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, ls = /* @__PURE__ */ _o(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Rr = (e) => {
  const A = /* @__PURE__ */ Object.create(null);
  return (t) => A[t] || (A[t] = e(t));
}, mf = /-\w/g, mA = Rr(
  (e) => e.replace(mf, (A) => A.slice(1).toUpperCase())
), xf = /\B([A-Z])/g, XA = Rr(
  (e) => e.replace(xf, "-$1").toLowerCase()
), Nr = Rr((e) => e.charAt(0).toUpperCase() + e.slice(1)), Bn = Rr(
  (e) => e ? `on${Nr(e)}` : ""
), He = (e, A) => !Object.is(e, A), fr = (e, ...A) => {
  for (let t = 0; t < e.length; t++)
    e[t](...A);
}, ta = (e, A, t, s = !1) => {
  Object.defineProperty(e, A, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: t
  });
}, Ko = (e) => {
  const A = parseFloat(e);
  return isNaN(A) ? e : A;
}, fi = (e) => {
  const A = dA(e) ? Number(e) : NaN;
  return isNaN(A) ? e : A;
};
let ui;
const Pr = () => ui || (ui = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Is(e) {
  if (V(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++) {
      const s = e[t], r = dA(s) ? Hf(s) : Is(s);
      if (r)
        for (const n in r)
          A[n] = r[n];
    }
    return A;
  } else if (dA(e) || rA(e))
    return e;
}
const yf = /;(?![^(]*\))/g, vf = /:([^]+)/, Ef = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Hf(e) {
  const A = {};
  return e.replace(Ef, (t) => t.startsWith("/*") ? "" : t).split(yf).forEach((t) => {
    if (t) {
      const s = t.split(vf);
      s.length > 1 && (A[s[0].trim()] = s[1].trim());
    }
  }), A;
}
function Y(e) {
  let A = "";
  if (dA(e))
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
const If = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", _f = /* @__PURE__ */ _o(If);
function sa(e) {
  return !!e || e === "";
}
function Lf(e, A, t) {
  if (e.length !== A.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Dt(e[r], A[r], t);
  return s;
}
function Bi(e, A, t) {
  if (e.size !== A.size) return !1;
  const s = Array.from(A), r = new Uint8Array(s.length);
  for (const n of e) {
    let o = -1;
    for (let i = 0; i < s.length; i++)
      if (!r[i] && Dt(n, s[i], t)) {
        o = i;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Sf(e, A, t) {
  let s = Je(e), r = Je(A);
  if (s || r || (s = Tt(e), r = Tt(A), s || r))
    return s && r ? Bi(e, A, t) : !1;
  const n = Object.keys(e).length, o = Object.keys(A).length;
  if (n !== o)
    return !1;
  for (const i in e) {
    const l = e.hasOwnProperty(i), c = A.hasOwnProperty(i);
    if (l && !c || !l && c || !Dt(e[i], A[i], t))
      return !1;
  }
  return String(e) === String(A);
}
function di(e, A, t, s) {
  t || (t = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, n] = t;
  if (r.has(e) || n.has(A))
    return r.get(e) === A && n.get(A) === e;
  r.set(e, A), n.set(A, e);
  const o = s(e, A, t);
  return r.delete(e), n.delete(A), o;
}
function Dt(e, A, t) {
  if (e === A) return !0;
  let s = ci(e), r = ci(A);
  return s || r ? s && r ? e.getTime() === A.getTime() : !1 : (s = we(e), r = we(A), s || r ? e === A : (s = V(e), r = V(A), s || r ? s && r ? di(e, A, t, Lf) : !1 : (s = rA(e), r = rA(A), s || r ? !s || !r ? !1 : di(e, A, t, Sf) : String(e) === String(A))));
}
function ra(e, A) {
  return e.findIndex((t) => Dt(t, A));
}
const na = (e) => !!(e && e.__v_isRef === !0), b = (e) => dA(e) ? e : e == null ? "" : V(e) || rA(e) && (e.toString === ea || !W(e.toString)) ? na(e) ? b(e.value) : JSON.stringify(e, oa, 2) : String(e), oa = (e, A) => na(A) ? oa(e, A.value) : Je(A) ? {
  [`Map(${A.size})`]: [...A.entries()].reduce(
    (t, [s, r], n) => (t[dn(s, n) + " =>"] = r, t),
    {}
  )
} : Tt(A) ? {
  [`Set(${A.size})`]: [...A.values()].map((t) => dn(t))
} : we(A) ? dn(A) : rA(A) && !V(A) && !Mr(A) ? String(A) : A, dn = (e, A = "") => {
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
let vA;
class Kf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A = !1) {
    this.detached = A, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !A && vA && (vA.active ? (this.parent = vA, this.index = (vA.scopes || (vA.scopes = [])).push(
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
      const t = vA;
      try {
        return vA = this, A();
      } finally {
        vA = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = vA, vA = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (vA === this)
        vA = this.prevScope;
      else {
        let A = vA;
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
function Tf() {
  return vA;
}
let cA;
const gn = /* @__PURE__ */ new WeakSet();
class ia {
  constructor(A) {
    this.fn = A, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, vA && (vA.active ? vA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, gn.has(this) && (gn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || aa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, gi(this), ca(this);
    const A = cA, t = ee;
    cA = this, ee = !0;
    try {
      return this.fn();
    } finally {
      fa(this), cA = A, ee = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let A = this.deps; A; A = A.nextDep)
        Do(A);
      this.deps = this.depsTail = void 0, gi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? gn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    jn(this) && this.run();
  }
  get dirty() {
    return jn(this);
  }
}
let la = 0, as, cs;
function aa(e, A = !1) {
  if (e.flags |= 8, A) {
    e.next = cs, cs = e;
    return;
  }
  e.next = as, as = e;
}
function To() {
  la++;
}
function ko() {
  if (--la > 0)
    return;
  if (cs) {
    let A = cs;
    for (cs = void 0; A; ) {
      const t = A.next;
      A.next = void 0, A.flags &= -9, A = t;
    }
  }
  let e;
  for (; as; ) {
    let A = as;
    for (as = void 0; A; ) {
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
function ca(e) {
  for (let A = e.deps; A; A = A.nextDep)
    A.version = -1, A.prevActiveLink = A.dep.activeLink, A.dep.activeLink = A;
}
function fa(e) {
  let A, t = e.depsTail, s = t;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === t && (t = r), Do(s), kf(s)) : A = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = A, e.depsTail = t;
}
function jn(e) {
  for (let A = e.deps; A; A = A.nextDep)
    if (A.dep.version !== A.version || A.dep.computed && (ua(A.dep.computed) || A.dep.version !== A.version))
      return !0;
  return !!e._dirty;
}
function ua(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Cs) || (e.globalVersion = Cs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !jn(e))))
    return;
  e.flags |= 2;
  const A = e.dep, t = cA, s = ee;
  cA = e, ee = !0;
  try {
    ca(e);
    const r = e.fn(e._value);
    (A.version === 0 || He(r, e._value)) && (e.flags |= 128, e._value = r, A.version++);
  } catch (r) {
    throw A.version++, r;
  } finally {
    cA = t, ee = s, fa(e), e.flags &= -3;
  }
}
function Do(e, A = !1) {
  const { dep: t, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), t.subs === e && (t.subs = s, !s && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      Do(n, !0);
  }
  !A && !--t.sc && t.map && t.map.delete(t.key);
}
function kf(e) {
  const { prevDep: A, nextDep: t } = e;
  A && (A.nextDep = t, e.prevDep = void 0), t && (t.prevDep = A, e.nextDep = void 0);
}
let ee = !0;
const Ba = [];
function Se() {
  Ba.push(ee), ee = !1;
}
function Ke() {
  const e = Ba.pop();
  ee = e === void 0 ? !0 : e;
}
function gi(e) {
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
let Cs = 0;
class Df {
  constructor(A, t) {
    this.sub = A, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class da {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A) {
    this.computed = A, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(A) {
    if (!cA || !ee || cA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== cA)
      t = this.activeLink = new Df(cA, this), cA.deps ? (t.prevDep = cA.depsTail, cA.depsTail.nextDep = t, cA.depsTail = t) : cA.deps = cA.depsTail = t, ga(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const s = t.nextDep;
      s.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = s), t.prevDep = cA.depsTail, t.nextDep = void 0, cA.depsTail.nextDep = t, cA.depsTail = t, cA.deps === t && (cA.deps = s);
    }
    return t;
  }
  trigger(A) {
    this.version++, Cs++, this.notify(A);
  }
  notify(A) {
    To();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      ko();
    }
  }
}
function ga(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const A = e.dep.computed;
    if (A && !e.dep.subs) {
      A.flags |= 20;
      for (let s = A.deps; s; s = s.nextDep)
        ga(s);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
  }
}
const Zn = /* @__PURE__ */ new WeakMap(), ut = /* @__PURE__ */ Symbol(
  ""
), zn = /* @__PURE__ */ Symbol(
  ""
), bs = /* @__PURE__ */ Symbol(
  ""
);
function LA(e, A, t) {
  if (ee && cA) {
    let s = Zn.get(e);
    s || Zn.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(t);
    r || (s.set(t, r = new da()), r.map = s, r.key = t), r.track();
  }
}
function Ie(e, A, t, s, r, n) {
  const o = Zn.get(e);
  if (!o) {
    Cs++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (To(), A === "clear")
    o.forEach(i);
  else {
    const l = V(e), c = l && So(t);
    if (l && t === "length") {
      const a = Number(s);
      o.forEach((f, B) => {
        (B === "length" || B === bs || !we(B) && B >= a) && i(f);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && i(o.get(t)), c && i(o.get(bs)), A) {
        case "add":
          l ? c && i(o.get("length")) : (i(o.get(ut)), Je(e) && i(o.get(zn)));
          break;
        case "delete":
          l || (i(o.get(ut)), Je(e) && i(o.get(zn)));
          break;
        case "set":
          Je(e) && i(o.get(ut));
          break;
      }
  }
  ko();
}
function wt(e) {
  const A = /* @__PURE__ */ sA(e);
  return A === e || (LA(A, "iterate", bs), /* @__PURE__ */ te(e)) ? A : /* @__PURE__ */ Te(e) ? /* @__PURE__ */ We(e) ? A.map((t) => Ze(Qe(t))) : A.map(Ze) : A.map(Qe);
}
function Vr(e) {
  return LA(e = /* @__PURE__ */ sA(e), "iterate", bs), e;
}
function Be(e, A) {
  return /* @__PURE__ */ Te(e) ? Ze(/* @__PURE__ */ We(e) ? Qe(A) : A) : Qe(A);
}
const Of = {
  __proto__: null,
  [Symbol.iterator]() {
    return hn(this, Symbol.iterator, (e) => Be(this, e));
  },
  concat(...e) {
    return wt(this).concat(
      ...e.map((A) => V(A) ? wt(A) : A)
    );
  },
  entries() {
    return hn(this, "entries", (e) => (e[1] = Be(this, e[1]), e));
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
      (t) => t.map((s) => Be(this, s)),
      arguments
    );
  },
  find(e, A) {
    return Fe(
      this,
      "find",
      e,
      A,
      (t) => Be(this, t),
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
      (t) => Be(this, t),
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
    return pn(this, "includes", e);
  },
  indexOf(...e) {
    return pn(this, "indexOf", e);
  },
  join(e) {
    return wt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return pn(this, "lastIndexOf", e);
  },
  map(e, A) {
    return Fe(this, "map", e, A, void 0, arguments);
  },
  pop() {
    return Gt(this, "pop");
  },
  push(...e) {
    return Gt(this, "push", e);
  },
  reduce(e, ...A) {
    return hi(this, "reduce", e, A);
  },
  reduceRight(e, ...A) {
    return hi(this, "reduceRight", e, A);
  },
  shift() {
    return Gt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, A) {
    return Fe(this, "some", e, A, void 0, arguments);
  },
  splice(...e) {
    return Gt(this, "splice", e);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(e) {
    return wt(this).toSorted(e);
  },
  toSpliced(...e) {
    return wt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Gt(this, "unshift", e);
  },
  values() {
    return hn(this, "values", (e) => Be(this, e));
  }
};
function hn(e, A, t) {
  const s = Vr(e), r = s[A]();
  return s !== e && !/* @__PURE__ */ te(e) && (r._next = r.next, r.next = () => {
    const n = r._next();
    return n.done || (n.value = t(n.value)), n;
  }), r;
}
const Mf = Array.prototype;
function Fe(e, A, t, s, r, n) {
  const o = Vr(e), i = o !== e && !/* @__PURE__ */ te(e), l = o[A];
  if (l !== Mf[A]) {
    const f = l.apply(e, n);
    return i ? Qe(f) : f;
  }
  let c = t;
  o !== e && (i ? c = function(f, B) {
    return t.call(this, Be(e, f), B, e);
  } : t.length > 2 && (c = function(f, B) {
    return t.call(this, f, B, e);
  }));
  const a = l.call(o, c, s);
  return i && r ? r(a) : a;
}
function hi(e, A, t, s) {
  const r = Vr(e), n = r !== e && !/* @__PURE__ */ te(e);
  let o = t, i = !1;
  r !== e && (n ? (i = s.length === 0, o = function(c, a, f) {
    return i && (i = !1, c = Be(e, c)), t.call(this, c, Be(e, a), f, e);
  }) : t.length > 3 && (o = function(c, a, f) {
    return t.call(this, c, a, f, e);
  }));
  const l = r[A](o, ...s);
  return i ? Be(e, l) : l;
}
function pn(e, A, t) {
  const s = /* @__PURE__ */ sA(e);
  LA(s, "iterate", bs);
  const r = s[A](...t);
  return (r === -1 || r === !1) && /* @__PURE__ */ No(t[0]) ? (t[0] = /* @__PURE__ */ sA(t[0]), s[A](...t)) : r;
}
function Gt(e, A, t = []) {
  Se(), To();
  const s = (/* @__PURE__ */ sA(e))[A].apply(e, t);
  return ko(), Ke(), s;
}
const Rf = /* @__PURE__ */ _o("__proto__,__v_isRef,__isVue"), ha = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(we)
);
function Nf(e) {
  we(e) || (e = String(e));
  const A = /* @__PURE__ */ sA(this);
  return LA(A, "has", e), A.hasOwnProperty(e);
}
class pa {
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
      return s === (r ? n ? zf : ba : n ? Ca : Qa).get(A) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(A) === Object.getPrototypeOf(s) ? A : void 0;
    const o = V(A);
    if (!r) {
      let l;
      if (o && (l = Of[t]))
        return l;
      if (t === "hasOwnProperty")
        return Nf;
    }
    const i = Reflect.get(
      A,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ MA(A) ? A : s
    );
    if ((we(t) ? ha.has(t) : Rf(t)) || (r || LA(A, "get", t), n))
      return i;
    if (/* @__PURE__ */ MA(i)) {
      const l = o && So(t) ? i : i.value;
      return r && rA(l) ? /* @__PURE__ */ $n(l) : l;
    }
    return rA(i) ? r ? /* @__PURE__ */ $n(i) : /* @__PURE__ */ Mo(i) : i;
  }
}
class wa extends pa {
  constructor(A = !1) {
    super(!1, A);
  }
  set(A, t, s, r) {
    let n = A[t];
    const o = V(A) && So(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Te(n);
      if (!/* @__PURE__ */ te(s) && !/* @__PURE__ */ Te(s) && (n = /* @__PURE__ */ sA(n), s = /* @__PURE__ */ sA(s)), !o && /* @__PURE__ */ MA(n) && !/* @__PURE__ */ MA(s))
        return c || (n.value = s), !0;
    }
    const i = o ? Number(t) < A.length : AA(A, t), l = Reflect.set(
      A,
      t,
      s,
      /* @__PURE__ */ MA(A) ? A : r
    );
    return A === /* @__PURE__ */ sA(r) && l && (i ? He(s, n) && Ie(A, "set", t, s) : Ie(A, "add", t, s)), l;
  }
  deleteProperty(A, t) {
    const s = AA(A, t);
    A[t];
    const r = Reflect.deleteProperty(A, t);
    return r && s && Ie(A, "delete", t, void 0), r;
  }
  has(A, t) {
    const s = Reflect.has(A, t);
    return (!we(t) || !ha.has(t)) && LA(A, "has", t), s;
  }
  ownKeys(A) {
    return LA(
      A,
      "iterate",
      V(A) ? "length" : ut
    ), Reflect.ownKeys(A);
  }
}
class Pf extends pa {
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
const Vf = /* @__PURE__ */ new wa(), Gf = /* @__PURE__ */ new Pf(), Xf = /* @__PURE__ */ new wa(!0);
const qn = (e) => e, Ms = (e) => Reflect.getPrototypeOf(e);
function Jf(e, A, t) {
  return function(...s) {
    const r = this.__v_raw, n = /* @__PURE__ */ sA(r), o = Je(n), i = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = r[e](...s), a = t ? qn : A ? Ze : Qe;
    return !A && LA(
      n,
      "iterate",
      l ? zn : ut
    ), CA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: B } = c.next();
          return B ? { value: f, done: B } : {
            value: i ? [a(f[0]), a(f[1])] : a(f),
            done: B
          };
        }
      }
    );
  };
}
function Rs(e) {
  return function(...A) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function Wf(e, A) {
  const t = {
    get(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ sA(n), i = /* @__PURE__ */ sA(r);
      e || (He(r, i) && LA(o, "get", r), LA(o, "get", i));
      const { has: l } = Ms(o), c = A ? qn : e ? Ze : Qe;
      if (l.call(o, r))
        return c(n.get(r));
      if (l.call(o, i))
        return c(n.get(i));
      n !== o && n.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && LA(/* @__PURE__ */ sA(r), "iterate", ut), r.size;
    },
    has(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ sA(n), i = /* @__PURE__ */ sA(r);
      return e || (He(r, i) && LA(o, "has", r), LA(o, "has", i)), r === i ? n.has(r) : n.has(r) || n.has(i);
    },
    forEach(r, n) {
      const o = this, i = o.__v_raw, l = /* @__PURE__ */ sA(i), c = A ? qn : e ? Ze : Qe;
      return !e && LA(l, "iterate", ut), i.forEach((a, f) => r.call(n, c(a), c(f), o));
    }
  };
  return CA(
    t,
    e ? {
      add: Rs("add"),
      set: Rs("set"),
      delete: Rs("delete"),
      clear: Rs("clear")
    } : {
      add(r) {
        const n = /* @__PURE__ */ sA(this), o = Ms(n), i = /* @__PURE__ */ sA(r), l = !A && !/* @__PURE__ */ te(r) && !/* @__PURE__ */ Te(r) ? i : r;
        return o.has.call(n, l) || He(r, l) && o.has.call(n, r) || He(i, l) && o.has.call(n, i) || (n.add(l), Ie(n, "add", l, l)), this;
      },
      set(r, n) {
        !A && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Te(n) && (n = /* @__PURE__ */ sA(n));
        const o = /* @__PURE__ */ sA(this), { has: i, get: l } = Ms(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ sA(r), c = i.call(o, r));
        const a = l.call(o, r);
        return o.set(r, n), c ? He(n, a) && Ie(o, "set", r, n) : Ie(o, "add", r, n), this;
      },
      delete(r) {
        const n = /* @__PURE__ */ sA(this), { has: o, get: i } = Ms(n);
        let l = o.call(n, r);
        l || (r = /* @__PURE__ */ sA(r), l = o.call(n, r)), i && i.call(n, r);
        const c = n.delete(r);
        return l && Ie(n, "delete", r, void 0), c;
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
    t[r] = Jf(r, e, A);
  }), t;
}
function Oo(e, A) {
  const t = Wf(e, A);
  return (s, r, n) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    AA(t, r) && r in s ? t : s,
    r,
    n
  );
}
const Yf = {
  get: /* @__PURE__ */ Oo(!1, !1)
}, jf = {
  get: /* @__PURE__ */ Oo(!1, !0)
}, Zf = {
  get: /* @__PURE__ */ Oo(!0, !1)
};
const Qa = /* @__PURE__ */ new WeakMap(), Ca = /* @__PURE__ */ new WeakMap(), ba = /* @__PURE__ */ new WeakMap(), zf = /* @__PURE__ */ new WeakMap();
function qf(e) {
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
function Mo(e) {
  return /* @__PURE__ */ Te(e) ? e : Ro(
    e,
    !1,
    Vf,
    Yf,
    Qa
  );
}
// @__NO_SIDE_EFFECTS__
function $f(e) {
  return Ro(
    e,
    !1,
    Xf,
    jf,
    Ca
  );
}
// @__NO_SIDE_EFFECTS__
function $n(e) {
  return Ro(
    e,
    !0,
    Gf,
    Zf,
    ba
  );
}
function Ro(e, A, t, s, r) {
  if (!rA(e) || e.__v_raw && !(A && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const o = qf(Ff(e));
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
function No(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function sA(e) {
  const A = e && e.__v_raw;
  return A ? /* @__PURE__ */ sA(A) : e;
}
function Au(e) {
  return !AA(e, "__v_skip") && Object.isExtensible(e) && ta(e, "__v_skip", !0), e;
}
const Qe = (e) => rA(e) ? /* @__PURE__ */ Mo(e) : e, Ze = (e) => rA(e) ? /* @__PURE__ */ $n(e) : e;
// @__NO_SIDE_EFFECTS__
function MA(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ua(e) {
  return /* @__PURE__ */ MA(e) ? e.value : e;
}
const eu = {
  get: (e, A, t) => A === "__v_raw" ? e : Ua(Reflect.get(e, A, t)),
  set: (e, A, t, s) => {
    const r = e[A];
    return /* @__PURE__ */ MA(r) && !/* @__PURE__ */ MA(t) ? (r.value = t, !0) : Reflect.set(e, A, t, s);
  }
};
function Fa(e) {
  return /* @__PURE__ */ We(e) ? e : new Proxy(e, eu);
}
class tu {
  constructor(A, t, s) {
    this.fn = A, this.setter = t, this._value = void 0, this.dep = new da(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Cs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    cA !== this)
      return aa(this, !0), !0;
  }
  get value() {
    const A = this.dep.track();
    return ua(this), A && (A.version = this.dep.version), this._value;
  }
  set value(A) {
    this.setter && this.setter(A);
  }
}
// @__NO_SIDE_EFFECTS__
function su(e, A, t = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new tu(s, r, t);
}
const Ns = {}, Qr = /* @__PURE__ */ new WeakMap();
let nt;
function ru(e, A = !1, t = nt) {
  if (t) {
    let s = Qr.get(t);
    s || Qr.set(t, s = []), s.push(e);
  }
}
function nu(e, A, t = iA) {
  const { immediate: s, deep: r, once: n, scheduler: o, augmentJob: i, call: l } = t, c = (m) => r ? m : /* @__PURE__ */ te(m) || r === !1 || r === 0 ? _e(m, 1) : _e(m);
  let a, f, B, h, C = !1, U = !1;
  if (/* @__PURE__ */ MA(e) ? (f = () => e.value, C = /* @__PURE__ */ te(e)) : /* @__PURE__ */ We(e) ? (f = () => c(e), C = !0) : V(e) ? (U = !0, C = e.some((m) => /* @__PURE__ */ We(m) || /* @__PURE__ */ te(m)), f = () => e.map((m) => {
    if (/* @__PURE__ */ MA(m))
      return m.value;
    if (/* @__PURE__ */ We(m))
      return c(m);
    if (W(m))
      return l ? l(m, 2) : m();
  })) : W(e) ? A ? f = l ? () => l(e, 2) : e : f = () => {
    if (B) {
      Se();
      try {
        B();
      } finally {
        Ke();
      }
    }
    const m = nt;
    nt = a;
    try {
      return l ? l(e, 3, [h]) : e(h);
    } finally {
      nt = m;
    }
  } : f = ge, A && r) {
    const m = f, S = r === !0 ? 1 / 0 : r;
    f = () => _e(m(), S);
  }
  const y = Tf(), I = () => {
    a.stop(), y && y.active && Lo(y.effects, a);
  };
  if (n && A) {
    const m = A;
    A = (...S) => {
      const G = m(...S);
      return I(), G;
    };
  }
  let x = U ? new Array(e.length).fill(Ns) : Ns;
  const g = (m) => {
    if (!(!(a.flags & 1) || !a.dirty && !m))
      if (A) {
        const S = a.run();
        if (m || r || C || (U ? S.some((G, nA) => He(G, x[nA])) : He(S, x))) {
          B && B();
          const G = nt;
          nt = a;
          try {
            const nA = [
              S,
              // pass undefined as the old value when it's changed for the first time
              x === Ns ? void 0 : U && x[0] === Ns ? [] : x,
              h
            ];
            x = S, l ? l(A, 3, nA) : (
              // @ts-expect-error
              A(...nA)
            );
          } finally {
            nt = G;
          }
        }
      } else
        a.run();
  };
  return i && i(g), a = new ia(f), a.scheduler = o ? () => o(g, !1) : g, h = (m) => ru(m, !1, a), B = a.onStop = () => {
    const m = Qr.get(a);
    if (m) {
      if (l)
        l(m, 4);
      else
        for (const S of m) S();
      Qr.delete(a);
    }
  }, A ? s ? g(!0) : x = a.run() : o ? o(g.bind(null, !0), !0) : a.run(), I.pause = a.pause.bind(a), I.resume = a.resume.bind(a), I.stop = I, I;
}
function _e(e, A = 1 / 0, t) {
  if (A <= 0 || !rA(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(e) || 0) >= A))
    return e;
  if (t.set(e, A), A--, /* @__PURE__ */ MA(e))
    _e(e.value, A, t);
  else if (V(e))
    for (let s = 0; s < e.length; s++)
      _e(e[s], A, t);
  else if (Tt(e) || Je(e))
    e.forEach((s) => {
      _e(s, A, t);
    });
  else if (Mr(e)) {
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
function _s(e, A, t, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Gr(r, A, t);
  }
}
function ne(e, A, t, s) {
  if (W(e)) {
    const r = _s(e, A, t, s);
    return r && Aa(r) && r.catch((n) => {
      Gr(n, A, t);
    }), r;
  }
  if (V(e)) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      r.push(ne(e[n], A, t, s));
    return r;
  }
}
function Gr(e, A, t, s = !0) {
  const r = A ? A.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: o } = A && A.appContext.config || iA;
  if (A) {
    let i = A.parent;
    const l = A.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const a = i.ec;
      if (a) {
        for (let f = 0; f < a.length; f++)
          if (a[f](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    if (n) {
      Se(), _s(n, null, 10, [
        e,
        l,
        c
      ]), Ke();
      return;
    }
  }
  ou(e, t, r, s, o);
}
function ou(e, A, t, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const OA = [];
let fe = -1;
const Ht = [];
let Ne = null, yt = 0;
const ma = /* @__PURE__ */ Promise.resolve();
let Cr = null;
function xa(e) {
  const A = Cr || ma;
  return e ? A.then(this ? e.bind(this) : e) : A;
}
function iu(e) {
  let A = fe + 1, t = OA.length;
  for (; A < t; ) {
    const s = A + t >>> 1, r = OA[s], n = Us(r);
    n < e || n === e && r.flags & 2 ? A = s + 1 : t = s;
  }
  return A;
}
function Po(e) {
  if (!(e.flags & 1)) {
    const A = Us(e), t = OA[OA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && A >= Us(t) ? OA.push(e) : OA.splice(iu(A), 0, e), e.flags |= 1, ya();
  }
}
function ya() {
  Cr || (Cr = ma.then(Ea));
}
function lu(e) {
  if (!V(e))
    Ne && e.id === -1 ? Ne.splice(yt + 1, 0, e) : e.flags & 1 || (Ht.push(e), e.flags |= 1);
  else
    for (let A = 0; A < e.length; A++)
      Ht.push(e[A]);
  ya();
}
function pi(e, A, t = fe + 1) {
  for (; t < OA.length; t++) {
    const s = OA[t];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      OA.splice(t, 1), t--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function va(e) {
  if (Ht.length) {
    const A = [...new Set(Ht)].sort(
      (t, s) => Us(t) - Us(s)
    );
    if (Ht.length = 0, Ne) {
      for (let t = 0; t < A.length; t++)
        Ne.push(A[t]);
      return;
    }
    for (Ne = A, yt = 0; yt < Ne.length; yt++) {
      const t = Ne[yt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ne = null, yt = 0;
  }
}
const Us = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ea(e) {
  try {
    for (fe = 0; fe < OA.length; fe++) {
      const A = OA[fe];
      A && !(A.flags & 8) && (A.flags & 4 && (A.flags &= -2), _s(
        A,
        A.i,
        A.i ? 15 : 14
      ), A.flags & 4 || (A.flags &= -2));
    }
  } finally {
    for (; fe < OA.length; fe++) {
      const A = OA[fe];
      A && (A.flags &= -2);
    }
    fe = -1, OA.length = 0, va(), Cr = null, (OA.length || Ht.length) && Ea();
  }
}
let JA = null, Ha = null;
function br(e) {
  const A = JA;
  return JA = e, Ha = e && e.type.__scopeId || null, A;
}
function au(e, A = JA, t) {
  if (!A || e._n)
    return e;
  const s = (...r) => {
    s._d && Hi(-1);
    const n = br(A), o = Bt.length;
    let i;
    try {
      i = e(...r);
    } finally {
      for (let l = Bt.length; l > o; l--) ec();
      br(n), s._d && Hi(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function FA(e, A) {
  if (JA === null)
    return e;
  const t = jr(JA), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < A.length; r++) {
    let [n, o, i, l = iA] = A[r];
    n && (W(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && _e(o), s.push({
      dir: n,
      instance: t,
      value: o,
      oldValue: void 0,
      arg: i,
      modifiers: l
    }));
  }
  return e;
}
function tt(e, A, t, s) {
  const r = e.dirs, n = A && A.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    n && (i.oldValue = n[o].value);
    let l = i.dir[s];
    l && (Se(), ne(l, t, 8, [
      e.el,
      i,
      e,
      A
    ]), Ke());
  }
}
function cu(e, A) {
  if (SA) {
    let t = SA.provides;
    const s = SA.parent && SA.parent.provides;
    s === t && (t = SA.provides = Object.create(s)), t[e] = A;
  }
}
function ur(e, A, t = !1) {
  const s = cB();
  if (s || It) {
    let r = It ? It._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && W(A) ? A.call(s && s.proxy) : A;
  }
}
const fu = /* @__PURE__ */ Symbol.for("v-scx"), uu = () => ur(fu);
function wn(e, A, t) {
  return Ia(e, A, t);
}
function Ia(e, A, t = iA) {
  const { immediate: s, deep: r, flush: n, once: o } = t, i = CA({}, t), l = A && s || !A && n !== "post";
  let c;
  if (xs) {
    if (n === "sync") {
      const h = uu();
      c = h.__watcherHandles || (h.__watcherHandles = []);
    } else if (!l) {
      const h = () => {
      };
      return h.stop = ge, h.resume = ge, h.pause = ge, h;
    }
  }
  const a = SA;
  i.call = (h, C, U) => ne(h, a, C, U);
  let f = !1;
  n === "post" ? i.scheduler = (h) => {
    RA(h, a && a.suspense);
  } : n !== "sync" && (f = !0, i.scheduler = (h, C) => {
    C ? h() : Po(h);
  }), i.augmentJob = (h) => {
    A && (h.flags |= 4), f && (h.flags |= 2, a && (h.id = a.uid, h.i = a));
  };
  const B = nu(e, A, i);
  return xs && (c ? c.push(B) : l && B()), B;
}
function Bu(e, A, t) {
  const s = this.proxy, r = dA(e) ? e.includes(".") ? _a(s, e) : () => s[e] : e.bind(s, s);
  let n;
  W(A) ? n = A : (n = A.handler, t = A);
  const o = Ls(this), i = Ia(r, n.bind(s), t);
  return o(), i;
}
function _a(e, A) {
  const t = A.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < t.length && s; r++)
      s = s[t[r]];
    return s;
  };
}
const du = /* @__PURE__ */ Symbol("_vte"), Xr = (e) => e.__isTeleport, Qn = /* @__PURE__ */ Symbol("_leaveCb");
function gu(e) {
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
function La(e) {
  if (!Go(e))
    return Xr(e.type) && e.children ? gu(e.children) : e;
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
function Vo(e, A) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = A;
    const t = e.component.subTree;
    Vo(
      Xr(t.type) && La(t) || t,
      A
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = A.clone(e.ssContent), e.ssFallback.transition = A.clone(e.ssFallback)) : e.transition = A;
}
// @__NO_SIDE_EFFECTS__
function hu(e, A) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: e.name }, A, { setup: e })
  ) : e;
}
function Sa(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function wi(e, A) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(e, A)) && !t.configurable);
}
const Ur = /* @__PURE__ */ new WeakMap();
function fs(e, A, t, s, r = !1) {
  if (V(e)) {
    e.forEach(
      (U, y) => fs(
        U,
        A && (V(A) ? A[y] : A),
        t,
        s,
        r
      )
    );
    return;
  }
  if (us(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fs(e, A, t, s.component.subTree);
    return;
  }
  const n = s.shapeFlag & 4 ? jr(s.component) : s.el, o = r ? null : n, { i, r: l } = e, c = A && A.r, a = i.refs === iA ? i.refs = {} : i.refs, f = i.setupState, B = /* @__PURE__ */ sA(f), h = f === iA ? $l : (U) => wi(a, U) ? !1 : AA(B, U), C = (U, y) => !(y && wi(a, y));
  if (c != null && c !== l) {
    if (Qi(A), dA(c))
      a[c] = null, h(c) && (f[c] = null);
    else if (/* @__PURE__ */ MA(c)) {
      const U = A;
      C(c, U.k) && (c.value = null), U.k && (a[U.k] = null);
    }
  }
  if (W(l))
    _s(l, i, 12, [o, a]);
  else {
    const U = dA(l), y = /* @__PURE__ */ MA(l);
    if (U || y) {
      const I = () => {
        if (e.f) {
          const x = U ? h(l) ? f[l] : a[l] : C() || !e.k ? l.value : a[e.k];
          if (r)
            V(x) && Lo(x, n);
          else if (V(x))
            x.includes(n) || x.push(n);
          else if (U)
            a[l] = [n], h(l) && (f[l] = a[l]);
          else {
            const g = [n];
            C(l, e.k) && (l.value = g), e.k && (a[e.k] = g);
          }
        } else U ? (a[l] = o, h(l) && (f[l] = o)) : y && (C(l, e.k) && (l.value = o), e.k && (a[e.k] = o));
      };
      if (o) {
        const x = () => {
          I(), Ur.delete(e);
        };
        x.id = -1, Ur.set(e, x), RA(x, t);
      } else
        Qi(e), I();
    }
  }
}
function Qi(e) {
  const A = Ur.get(e);
  A && (A.flags |= 8, Ur.delete(e));
}
Pr().requestIdleCallback;
Pr().cancelIdleCallback;
const us = (e) => !!e.type.__asyncLoader, Go = (e) => e.type.__isKeepAlive;
function pu(e, A) {
  Ka(e, "a", A);
}
function wu(e, A) {
  Ka(e, "da", A);
}
function Ka(e, A, t = SA) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (Jr(A, s, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      Go(r.parent.vnode) && Qu(s, A, t, r), r = r.parent;
  }
}
function Qu(e, A, t, s) {
  const r = Jr(
    A,
    e,
    s,
    !0
    /* prepend */
  );
  Ta(() => {
    Lo(s[A], r);
  }, t);
}
function Jr(e, A, t = SA, s = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), n = A.__weh || (A.__weh = (...o) => {
      Se();
      const i = Ls(t), l = ne(A, t, e, o);
      return i(), Ke(), l;
    });
    return s ? r.unshift(n) : r.push(n), n;
  }
}
const De = (e) => (A, t = SA) => {
  (!xs || e === "sp") && Jr(e, (...s) => A(...s), t);
}, Cu = De("bm"), bu = De("m"), Uu = De(
  "bu"
), Fu = De("u"), mu = De(
  "bum"
), Ta = De("um"), xu = De(
  "sp"
), yu = De("rtg"), vu = De("rtc");
function Eu(e, A = SA) {
  Jr("ec", e, A);
}
const ka = "components";
function Hu(e, A) {
  return Da(ka, e, !0, A) || e;
}
const Iu = /* @__PURE__ */ Symbol.for("v-ndc");
function _u(e) {
  return dA(e) && Da(ka, e, !1) || e;
}
function Da(e, A, t = !0, s = !1) {
  const r = JA || SA;
  if (r) {
    const n = r.type;
    {
      const i = gB(
        n,
        !1
      );
      if (i && (i === A || i === mA(A) || i === Nr(mA(A))))
        return n;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      Ci(r[e] || n[e], A) || // global registration
      Ci(r.appContext[e], A)
    );
    return !o && s ? n : o;
  }
}
function Ci(e, A) {
  return e && (e[A] || e[mA(A)] || e[Nr(mA(A))]);
}
function $(e, A, t, s) {
  let r;
  const n = t, o = V(e);
  if (o || dA(e)) {
    const i = o && /* @__PURE__ */ We(e);
    let l = !1, c = !1;
    i && (l = !/* @__PURE__ */ te(e), c = /* @__PURE__ */ Te(e), e = Vr(e)), r = new Array(e.length);
    for (let a = 0, f = e.length; a < f; a++)
      r[a] = A(
        l ? c ? Ze(Qe(e[a])) : Qe(e[a]) : e[a],
        a,
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
        (i, l) => A(i, l, void 0, n)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const a = i[l];
        r[l] = A(e[a], a, l, n);
      }
    }
  else
    r = [];
  return r;
}
const Ao = (e) => e ? nc(e) ? jr(e) : Ao(e.parent) : null, Bs = (
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
    $parent: (e) => Ao(e.parent),
    $root: (e) => Ao(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Ma(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Po(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = xa.bind(e.proxy)),
    $watch: (e) => Bu.bind(e)
  })
), Cn = (e, A) => e !== iA && !e.__isScriptSetup && AA(e, A), Lu = {
  get({ _: e }, A) {
    if (A === "__v_skip")
      return !0;
    const { ctx: t, setupState: s, data: r, props: n, accessCache: o, type: i, appContext: l } = e;
    if (A[0] !== "$") {
      const B = o[A];
      if (B !== void 0)
        switch (B) {
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
        if (Cn(s, A))
          return o[A] = 1, s[A];
        if (r !== iA && AA(r, A))
          return o[A] = 2, r[A];
        if (AA(n, A))
          return o[A] = 3, n[A];
        if (t !== iA && AA(t, A))
          return o[A] = 4, t[A];
        eo && (o[A] = 0);
      }
    }
    const c = Bs[A];
    let a, f;
    if (c)
      return A === "$attrs" && LA(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (a = i.__cssModules) && (a = a[A])
    )
      return a;
    if (t !== iA && AA(t, A))
      return o[A] = 4, t[A];
    if (
      // global properties
      f = l.config.globalProperties, AA(f, A)
    )
      return f[A];
  },
  set({ _: e }, A, t) {
    const { data: s, setupState: r, ctx: n } = e;
    return Cn(r, A) ? (r[A] = t, !0) : s !== iA && AA(s, A) ? (s[A] = t, !0) : AA(e.props, A) || A[0] === "$" && A.slice(1) in e ? !1 : (n[A] = t, !0);
  },
  has({
    _: { data: e, setupState: A, accessCache: t, ctx: s, appContext: r, props: n, type: o }
  }, i) {
    let l;
    return !!(t[i] || e !== iA && i[0] !== "$" && AA(e, i) || Cn(A, i) || AA(n, i) || AA(s, i) || AA(Bs, i) || AA(r.config.globalProperties, i) || (l = o.__cssModules) && l[i]);
  },
  defineProperty(e, A, t) {
    return t.get != null ? e._.accessCache[A] = 0 : AA(t, "value") && this.set(e, A, t.value, null), Reflect.defineProperty(e, A, t);
  }
};
function bi(e) {
  return V(e) ? e.reduce(
    (A, t) => (A[t] = null, A),
    {}
  ) : e;
}
let eo = !0;
function Su(e) {
  const A = Ma(e), t = e.proxy, s = e.ctx;
  eo = !1, A.beforeCreate && Ui(A.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: n,
    methods: o,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: a,
    beforeMount: f,
    mounted: B,
    beforeUpdate: h,
    updated: C,
    activated: U,
    deactivated: y,
    beforeDestroy: I,
    beforeUnmount: x,
    destroyed: g,
    unmounted: m,
    render: S,
    renderTracked: G,
    renderTriggered: nA,
    errorCaptured: xA,
    serverPrefetch: uA,
    // public API
    expose: $e,
    inheritAttrs: Rt,
    // assets
    components: Ts,
    directives: ks,
    filters: fn
  } = A;
  if (c && Ku(c, s, null), o)
    for (const gA in o) {
      const lA = o[gA];
      W(lA) && (s[gA] = lA.bind(t));
    }
  if (r) {
    const gA = r.call(t, t);
    rA(gA) && (e.data = /* @__PURE__ */ Mo(gA));
  }
  if (eo = !0, n)
    for (const gA in n) {
      const lA = n[gA], At = W(lA) ? lA.bind(t, t) : W(lA.get) ? lA.get.bind(t, t) : ge, Ds = !W(lA) && W(lA.set) ? lA.set.bind(t) : ge, et = pB({
        get: At,
        set: Ds
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
      Oa(i[gA], s, t, gA);
  if (l) {
    const gA = W(l) ? l.call(t) : l;
    Reflect.ownKeys(gA).forEach((lA) => {
      cu(lA, gA[lA]);
    });
  }
  a && Ui(a, e, "c");
  function TA(gA, lA) {
    V(lA) ? lA.forEach((At) => gA(At.bind(t))) : lA && gA(lA.bind(t));
  }
  if (TA(Cu, f), TA(bu, B), TA(Uu, h), TA(Fu, C), TA(pu, U), TA(wu, y), TA(Eu, xA), TA(vu, G), TA(yu, nA), TA(mu, x), TA(Ta, m), TA(xu, uA), V($e))
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
  S && e.render === ge && (e.render = S), Rt != null && (e.inheritAttrs = Rt), Ts && (e.components = Ts), ks && (e.directives = ks), uA && Sa(e);
}
function Ku(e, A, t = ge) {
  V(e) && (e = to(e));
  for (const s in e) {
    const r = e[s];
    let n;
    rA(r) ? "default" in r ? n = ur(
      r.from || s,
      r.default,
      !0
    ) : n = ur(r.from || s) : n = ur(r), /* @__PURE__ */ MA(n) ? Object.defineProperty(A, s, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    }) : A[s] = n;
  }
}
function Ui(e, A, t) {
  ne(
    V(e) ? e.map((s) => s.bind(A.proxy)) : e.bind(A.proxy),
    A,
    t
  );
}
function Oa(e, A, t, s) {
  let r = s.includes(".") ? _a(t, s) : () => t[s];
  if (dA(e)) {
    const n = A[e];
    W(n) && wn(r, n);
  } else if (W(e))
    wn(r, e.bind(t));
  else if (rA(e))
    if (V(e))
      e.forEach((n) => Oa(n, A, t, s));
    else {
      const n = W(e.handler) ? e.handler.bind(t) : A[e.handler];
      W(n) && wn(r, n, e);
    }
}
function Ma(e) {
  const A = e.type, { mixins: t, extends: s } = A, {
    mixins: r,
    optionsCache: n,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = n.get(A);
  let l;
  return i ? l = i : !r.length && !t && !s ? l = A : (l = {}, r.length && r.forEach(
    (c) => Fr(l, c, o, !0)
  ), Fr(l, A, o)), rA(A) && n.set(A, l), l;
}
function Fr(e, A, t, s = !1) {
  const { mixins: r, extends: n } = A;
  n && Fr(e, n, t, !0), r && r.forEach(
    (o) => Fr(e, o, t, !0)
  );
  for (const o in A)
    if (!(s && o === "expose")) {
      const i = Tu[o] || t && t[o];
      e[o] = i ? i(e[o], A[o]) : A[o];
    }
  return e;
}
const Tu = {
  data: Fi,
  props: mi,
  emits: mi,
  // objects
  methods: zt,
  computed: zt,
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
  components: zt,
  directives: zt,
  // watch
  watch: Du,
  // provide / inject
  provide: Fi,
  inject: ku
};
function Fi(e, A) {
  return A ? e ? function() {
    return CA(
      W(e) ? e.call(this, this) : e,
      W(A) ? A.call(this, this) : A
    );
  } : A : e;
}
function ku(e, A) {
  return zt(to(e), to(A));
}
function to(e) {
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
function zt(e, A) {
  return e ? CA(/* @__PURE__ */ Object.create(null), e, A) : A;
}
function mi(e, A) {
  return e ? V(e) && V(A) ? [.../* @__PURE__ */ new Set([...e, ...A])] : CA(
    /* @__PURE__ */ Object.create(null),
    bi(e),
    bi(A ?? {})
  ) : A;
}
function Du(e, A) {
  if (!e) return A;
  if (!A) return e;
  const t = CA(/* @__PURE__ */ Object.create(null), e);
  for (const s in A)
    t[s] = kA(e[s], A[s]);
  return t;
}
function Ra() {
  return {
    app: null,
    config: {
      isNativeTag: $l,
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
let Ou = 0;
function Mu(e, A) {
  return function(s, r = null) {
    W(s) || (s = CA({}, s)), r != null && !rA(r) && (r = null);
    const n = Ra(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const c = n.app = {
      _uid: Ou++,
      _component: s,
      _props: r,
      _container: null,
      _context: n,
      _instance: null,
      version: wB,
      get config() {
        return n.config;
      },
      set config(a) {
      },
      use(a, ...f) {
        return o.has(a) || (a && W(a.install) ? (o.add(a), a.install(c, ...f)) : W(a) && (o.add(a), a(c, ...f))), c;
      },
      mixin(a) {
        return n.mixins.includes(a) || n.mixins.push(a), c;
      },
      component(a, f) {
        return f ? (n.components[a] = f, c) : n.components[a];
      },
      directive(a, f) {
        return f ? (n.directives[a] = f, c) : n.directives[a];
      },
      mount(a, f, B) {
        if (!l) {
          const h = c._ceVNode || he(s, r);
          return h.appContext = n, B === !0 ? B = "svg" : B === !1 && (B = void 0), e(h, a, B), l = !0, c._container = a, a.__vue_app__ = c, jr(h.component);
        }
      },
      onUnmount(a) {
        i.push(a);
      },
      unmount() {
        l && (ne(
          i,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(a, f) {
        return n.provides[a] = f, c;
      },
      runWithContext(a) {
        const f = It;
        It = c;
        try {
          return a();
        } finally {
          It = f;
        }
      }
    };
    return c;
  };
}
let It = null;
const Ru = (e, A) => A === "modelValue" || A === "model-value" ? e.modelModifiers : e[`${A}Modifiers`] || e[`${mA(A)}Modifiers`] || e[`${XA(A)}Modifiers`];
function Nu(e, A, ...t) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || iA;
  let r = t;
  const n = A.startsWith("update:"), o = n && Ru(s, A.slice(7));
  o && (o.trim && (r = t.map((a) => dA(a) ? a.trim() : a)), o.number && (r = r.map(Ko)));
  let i, l = s[i = Bn(A)] || // also try camelCase event handler (#2249)
  s[i = Bn(mA(A))];
  !l && n && (l = s[i = Bn(XA(A))]), l && ne(
    l,
    e,
    6,
    r
  );
  const c = s[i + "Once"];
  if (c) {
    if (!e.emitted)
      e.emitted = {};
    else if (e.emitted[i])
      return;
    e.emitted[i] = !0, ne(
      c,
      e,
      6,
      r
    );
  }
}
const Pu = /* @__PURE__ */ new WeakMap();
function Na(e, A, t = !1) {
  const s = t ? Pu : A.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const n = e.emits;
  let o = {}, i = !1;
  if (!W(e)) {
    const l = (c) => {
      const a = Na(c, A, !0);
      a && (i = !0, CA(o, a));
    };
    !t && A.mixins.length && A.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !n && !i ? (rA(e) && s.set(e, null), null) : (V(n) ? n.forEach((l) => o[l] = null) : CA(o, n), rA(e) && s.set(e, o), o);
}
function Wr(e, A) {
  return !e || !Dr(A) ? !1 : (A = A.slice(2), A = A === "Once" ? A : A.replace(/Once$/, ""), AA(e, A[0].toLowerCase() + A.slice(1)) || AA(e, XA(A)) || AA(e, A));
}
function xi(e) {
  const {
    type: A,
    vnode: t,
    proxy: s,
    withProxy: r,
    propsOptions: [n],
    slots: o,
    attrs: i,
    emit: l,
    render: c,
    renderCache: a,
    props: f,
    data: B,
    setupState: h,
    ctx: C,
    inheritAttrs: U
  } = e, y = br(e);
  let I, x;
  try {
    if (t.shapeFlag & 4) {
      const m = r || s, S = m;
      I = de(
        c.call(
          S,
          m,
          a,
          f,
          h,
          B,
          C
        )
      ), x = i;
    } else {
      const m = A;
      I = de(
        m.length > 1 ? m(
          f,
          { attrs: i, slots: o, emit: l }
        ) : m(
          f,
          null
        )
      ), x = A.props ? i : Vu(i);
    }
  } catch (m) {
    Bt.length = 0, Gr(m, e, 1), I = he(ke);
  }
  let g = I;
  if (x && U !== !1) {
    const m = Object.keys(x), { shapeFlag: S } = g;
    m.length && S & 7 && (n && m.some(Or) && (x = Gu(
      x,
      n
    )), g = kt(g, x, !1, !0));
  }
  if (t.dirs && (g = kt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const m = Xr(g.type) && La(g) || g;
    Vo(m, t.transition);
  }
  return I = g, br(y), I;
}
const Vu = (e) => {
  let A;
  for (const t in e)
    (t === "class" || t === "style" || Dr(t)) && ((A || (A = {}))[t] = e[t]);
  return A;
}, Gu = (e, A) => {
  const t = {};
  for (const s in e)
    (!Or(s) || !(s.slice(9) in A)) && (t[s] = e[s]);
  return t;
};
function Xu(e, A, t) {
  const { props: s, children: r, component: n } = e, { props: o, children: i, patchFlag: l } = A, c = n.emitsOptions;
  if (A.dirs || A.transition)
    return !0;
  if (t && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? yi(s, o, c) : !!o;
    if (l & 8) {
      const a = A.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        const B = a[f];
        if (Pa(o, s, B) && !Wr(c, B))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? yi(s, o, c) : !0 : !!o;
  return !1;
}
function yi(e, A, t) {
  const s = Object.keys(A);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const n = s[r];
    if (Pa(A, e, n) && !Wr(t, n))
      return !0;
  }
  return !1;
}
function Pa(e, A, t) {
  const s = e[t], r = A[t];
  return t === "style" && rA(s) && rA(r) ? !Dt(s, r) : s !== r;
}
function Ju({ vnode: e, parent: A, suspense: t }, s) {
  for (; A; ) {
    const r = A.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = A.vnode).el = s, A = A.parent;
    else
      break;
  }
  t && t.activeBranch === e && (t.vnode.el = s);
}
const Va = {}, Ga = () => Object.create(Va), Xa = (e) => Object.getPrototypeOf(e) === Va;
function Wu(e, A, t, s = !1) {
  const r = {}, n = Ga();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ja(e, A, r, n);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  t ? e.props = s ? r : /* @__PURE__ */ $f(r) : e.type.props ? e.props = r : e.props = n, e.attrs = n;
}
function Yu(e, A, t, s) {
  const {
    props: r,
    attrs: n,
    vnode: { patchFlag: o }
  } = e, i = /* @__PURE__ */ sA(r), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const a = e.vnode.dynamicProps;
      for (let f = 0; f < a.length; f++) {
        let B = a[f];
        if (Wr(e.emitsOptions, B))
          continue;
        const h = A[B];
        if (l)
          if (AA(n, B))
            h !== n[B] && (n[B] = h, c = !0);
          else {
            const C = mA(B);
            r[C] = so(
              l,
              i,
              C,
              h,
              e,
              !1
            );
          }
        else
          h !== n[B] && (n[B] = h, c = !0);
      }
    }
  } else {
    Ja(e, A, r, n) && (c = !0);
    let a;
    for (const f in i)
      (!A || // for camelCase
      !AA(A, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((a = XA(f)) === f || !AA(A, a))) && (l ? t && // for camelCase
      (t[f] !== void 0 || // for kebab-case
      t[a] !== void 0) && (r[f] = so(
        l,
        i,
        f,
        void 0,
        e,
        !0
      )) : delete r[f]);
    if (n !== i)
      for (const f in n)
        (!A || !AA(A, f)) && (delete n[f], c = !0);
  }
  c && Ie(e.attrs, "set", "");
}
function Ja(e, A, t, s) {
  const [r, n] = e.propsOptions;
  let o = !1, i;
  if (A)
    for (let l in A) {
      if (ls(l))
        continue;
      const c = A[l];
      let a;
      r && AA(r, a = mA(l)) ? !n || !n.includes(a) ? t[a] = c : (i || (i = {}))[a] = c : Wr(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0);
    }
  if (n) {
    const l = /* @__PURE__ */ sA(t), c = i || iA;
    for (let a = 0; a < n.length; a++) {
      const f = n[a];
      t[f] = so(
        r,
        l,
        f,
        c[f],
        e,
        !AA(c, f)
      );
    }
  }
  return o;
}
function so(e, A, t, s, r, n) {
  const o = e[t];
  if (o != null) {
    const i = AA(o, "default");
    if (i && s === void 0) {
      const l = o.default;
      if (o.type !== Function && !o.skipFactory && W(l)) {
        const { propsDefaults: c } = r;
        if (t in c)
          s = c[t];
        else {
          const a = Ls(r);
          s = c[t] = l.call(
            null,
            A
          ), a();
        }
      } else
        s = l;
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
const ju = /* @__PURE__ */ new WeakMap();
function Wa(e, A, t = !1) {
  const s = t ? ju : A.propsCache, r = s.get(e);
  if (r)
    return r;
  const n = e.props, o = {}, i = [];
  let l = !1;
  if (!W(e)) {
    const a = (f) => {
      l = !0;
      const [B, h] = Wa(f, A, !0);
      CA(o, B), h && i.push(...h);
    };
    !t && A.mixins.length && A.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  if (!n && !l)
    return rA(e) && s.set(e, lt), lt;
  if (V(n))
    for (let a = 0; a < n.length; a++) {
      const f = mA(n[a]);
      vi(f) && (o[f] = iA);
    }
  else if (n)
    for (const a in n) {
      const f = mA(a);
      if (vi(f)) {
        const B = n[a], h = o[f] = V(B) || W(B) ? { type: B } : CA({}, B), C = h.type;
        let U = !1, y = !0;
        if (V(C))
          for (let I = 0; I < C.length; ++I) {
            const x = C[I], g = W(x) && x.name;
            if (g === "Boolean") {
              U = !0;
              break;
            } else g === "String" && (y = !1);
          }
        else
          U = W(C) && C.name === "Boolean";
        h[
          0
          /* shouldCast */
        ] = U, h[
          1
          /* shouldCastTrue */
        ] = y, (U || AA(h, "default")) && i.push(f);
      }
    }
  const c = [o, i];
  return rA(e) && s.set(e, c), c;
}
function vi(e) {
  return e[0] !== "$" && !ls(e);
}
const Xo = (e) => e === "_" || e === "_ctx" || e === "$stable", Jo = (e) => V(e) ? e.map(de) : [de(e)], Zu = (e, A, t) => {
  if (A._n)
    return A;
  const s = au((...r) => Jo(A(...r)), t);
  return s._c = !1, s;
}, Ya = (e, A, t) => {
  const s = e._ctx;
  for (const r in e) {
    if (Xo(r)) continue;
    const n = e[r];
    if (W(n))
      A[r] = Zu(r, n, s);
    else if (n != null) {
      const o = Jo(n);
      A[r] = () => o;
    }
  }
}, ja = (e, A) => {
  const t = Jo(A);
  e.slots.default = () => t;
}, Za = (e, A, t) => {
  for (const s in A)
    (t || !Xo(s)) && (e[s] = A[s]);
}, zu = (e, A, t) => {
  const s = e.slots = Ga();
  if (e.vnode.shapeFlag & 32) {
    const r = A._;
    r ? (Za(s, A, t), t && ta(s, "_", r, !0)) : Ya(A, s);
  } else A && ja(e, A);
}, qu = (e, A, t) => {
  const { vnode: s, slots: r } = e;
  let n = !0, o = iA;
  if (s.shapeFlag & 32) {
    const i = A._;
    i ? t && i === 1 ? n = !1 : Za(r, A, t) : (n = !A.$stable, Ya(A, r)), o = A;
  } else A && (ja(e, A), o = { default: 1 });
  if (n)
    for (const i in r)
      !Xo(i) && o[i] == null && delete r[i];
}, RA = sB;
function $u(e) {
  return AB(e);
}
function AB(e, A) {
  const t = Pr();
  t.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: n,
    createElement: o,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: a,
    parentNode: f,
    nextSibling: B,
    setScopeId: h = ge,
    insertStaticContent: C
  } = e, U = (d, p, F, L = null, v = null, H = null, k = void 0, T = null, K = !!p.dynamicChildren) => {
    if (d === p)
      return;
    d && !Xt(d, p) && (L = Os(d), qA(d, v, H, !0), d = null), p.patchFlag === -2 && (K = !1, p.dynamicChildren = null), p.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (p.dynamicChildren === lt && (p.dynamicChildren = []), p.dynamicChildren.hasOnce = !0);
    const { type: E, ref: P, shapeFlag: M } = p;
    switch (E) {
      case Yr:
        y(d, p, F, L);
        break;
      case ke:
        I(d, p, F, L);
        break;
      case Un:
        d == null && x(p, F, L, k);
        break;
      case R:
        Ts(
          d,
          p,
          F,
          L,
          v,
          H,
          k,
          T,
          K
        );
        break;
      default:
        M & 1 ? S(
          d,
          p,
          F,
          L,
          v,
          H,
          k,
          T,
          K
        ) : M & 6 ? ks(
          d,
          p,
          F,
          L,
          v,
          H,
          k,
          T,
          K
        ) : (M & 64 || M & 128) && E.process(
          d,
          p,
          F,
          L,
          v,
          H,
          k,
          T,
          K,
          Pt
        );
    }
    P != null && v ? fs(P, d && d.ref, H, p || d, !p) : P == null && d && d.ref != null && fs(d.ref, null, H, d, !0);
  }, y = (d, p, F, L) => {
    if (d == null)
      s(
        p.el = i(p.children),
        F,
        L
      );
    else {
      const v = p.el = d.el;
      p.children !== d.children && c(v, p.children);
    }
  }, I = (d, p, F, L) => {
    d == null ? s(
      p.el = l(p.children || ""),
      F,
      L
    ) : p.el = d.el;
  }, x = (d, p, F, L) => {
    [d.el, d.anchor] = C(
      d.children,
      p,
      F,
      L,
      d.el,
      d.anchor
    );
  }, g = ({ el: d, anchor: p }, F, L) => {
    let v;
    for (; d && d !== p; )
      v = B(d), s(d, F, L), d = v;
    s(p, F, L);
  }, m = ({ el: d, anchor: p }) => {
    let F;
    for (; d && d !== p; )
      F = B(d), r(d), d = F;
    r(p);
  }, S = (d, p, F, L, v, H, k, T, K) => {
    if (p.type === "svg" ? k = "svg" : p.type === "math" && (k = "mathml"), d == null)
      G(
        p,
        F,
        L,
        v,
        H,
        k,
        T,
        K
      );
    else {
      const E = d.el && d.el._isVueCE ? d.el : null;
      try {
        E && E._beginPatch(), uA(
          d,
          p,
          v,
          H,
          k,
          T,
          K
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, G = (d, p, F, L, v, H, k, T) => {
    let K, E;
    const { props: P, shapeFlag: M, transition: N, dirs: J } = d;
    if (K = d.el = o(
      d.type,
      H,
      P && P.is,
      P
    ), M & 8 ? a(K, d.children) : M & 16 && xA(
      d.children,
      K,
      null,
      L,
      v,
      bn(d, H),
      k,
      T
    ), J && tt(d, null, L, "created"), nA(K, d, d.scopeId, k, L), P) {
      for (const oA in P)
        oA !== "value" && !ls(oA) && n(K, oA, null, P[oA], H, L);
      "value" in P && n(K, "value", null, P.value, H), (E = P.onVnodeBeforeMount) && ae(E, L, d);
    }
    J && tt(d, null, L, "beforeMount");
    const q = eB(v, N);
    q && N.beforeEnter(K), s(K, p, F), ((E = P && P.onVnodeMounted) || q || J) && RA(() => {
      try {
        E && ae(E, L, d), q && N.enter(K), J && tt(d, null, L, "mounted");
      } finally {
      }
    }, v);
  }, nA = (d, p, F, L, v) => {
    if (F && h(d, F), L)
      for (let H = 0; H < L.length; H++)
        h(d, L[H]);
    if (v) {
      let H = v.subTree;
      if (p === H || Ac(H.type) && (H.ssContent === p || H.ssFallback === p)) {
        const k = v.vnode;
        nA(
          d,
          k,
          k.scopeId,
          k.slotScopeIds,
          v.parent
        );
      }
    }
  }, xA = (d, p, F, L, v, H, k, T, K = 0) => {
    for (let E = K; E < d.length; E++) {
      const P = d[E] = T ? Ee(d[E]) : de(d[E]);
      U(
        null,
        P,
        p,
        F,
        L,
        v,
        H,
        k,
        T
      );
    }
  }, uA = (d, p, F, L, v, H, k) => {
    const T = p.el = d.el;
    let { patchFlag: K, dynamicChildren: E, dirs: P } = p;
    K |= d.patchFlag & 16;
    const M = d.props || iA, N = p.props || iA;
    let J;
    if (F && st(F, !1), (J = N.onVnodeBeforeUpdate) && ae(J, F, p, d), P && tt(p, d, F, "beforeUpdate"), F && st(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    E && (!d.dynamicChildren || d.dynamicChildren.length !== E.length) && (K = 0, k = !1, E = null), (M.innerHTML && N.innerHTML == null || M.textContent && N.textContent == null) && a(T, ""), E ? $e(
      d.dynamicChildren,
      E,
      T,
      F,
      L,
      bn(p, v),
      H
    ) : k || lA(
      d,
      p,
      T,
      null,
      F,
      L,
      bn(p, v),
      H,
      !1
    ), K > 0) {
      if (K & 16)
        Rt(T, M, N, F, v);
      else if (K & 2 && M.class !== N.class && n(T, "class", null, N.class, v), K & 4 && n(T, "style", M.style, N.style, v), K & 8) {
        const q = p.dynamicProps;
        for (let oA = 0; oA < q.length; oA++) {
          const tA = q[oA], bA = M[tA], yA = N[tA];
          (yA !== bA || tA === "value") && n(T, tA, bA, yA, v, F);
        }
      }
      K & 1 && d.children !== p.children && a(T, p.children);
    } else !k && E == null && Rt(T, M, N, F, v);
    ((J = N.onVnodeUpdated) || P) && RA(() => {
      J && ae(J, F, p, d), P && tt(p, d, F, "updated");
    }, L);
  }, $e = (d, p, F, L, v, H, k) => {
    for (let T = 0; T < p.length; T++) {
      const K = d[T], E = p[T], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === R || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Xt(K, E) || // - In the case of a component, it could contain anything.
        K.shapeFlag & 198) ? f(K.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        K,
        E,
        P,
        null,
        L,
        v,
        H,
        k,
        !0
      );
    }
  }, Rt = (d, p, F, L, v) => {
    if (p !== F) {
      if (p !== iA)
        for (const H in p)
          !ls(H) && !(H in F) && n(
            d,
            H,
            p[H],
            null,
            v,
            L
          );
      for (const H in F) {
        if (ls(H)) continue;
        const k = F[H], T = p[H];
        k !== T && H !== "value" && n(d, H, T, k, v, L);
      }
      "value" in F && n(d, "value", p.value, F.value, v);
    }
  }, Ts = (d, p, F, L, v, H, k, T, K) => {
    const E = p.el = d ? d.el : i(""), P = p.anchor = d ? d.anchor : i("");
    let { patchFlag: M, dynamicChildren: N, slotScopeIds: J } = p;
    J && (T = T ? T.concat(J) : J), d == null ? (s(E, F, L), s(P, F, L), xA(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      p.children || [],
      F,
      P,
      v,
      H,
      k,
      T,
      K
    )) : M > 0 && M & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === N.length ? ($e(
      d.dynamicChildren,
      N,
      F,
      v,
      H,
      k,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (p.key != null || v && p === v.subTree) && za(
      d,
      p,
      !0
      /* shallow */
    )) : lA(
      d,
      p,
      F,
      P,
      v,
      H,
      k,
      T,
      K
    );
  }, ks = (d, p, F, L, v, H, k, T, K) => {
    p.slotScopeIds = T, d == null ? p.shapeFlag & 512 ? v.ctx.activate(
      p,
      F,
      L,
      k,
      K
    ) : fn(
      p,
      F,
      L,
      v,
      H,
      k,
      K
    ) : ri(d, p, K);
  }, fn = (d, p, F, L, v, H, k) => {
    const T = d.component = aB(
      d,
      L,
      v
    );
    if (Go(d) && (T.ctx.renderer = Pt), fB(T, !1, k), T.asyncDep) {
      if (v && v.registerDep(T, TA, k), !d.el) {
        const K = T.subTree = he(ke);
        I(null, K, p, F), d.placeholder = K.el;
      }
    } else
      TA(
        T,
        d,
        p,
        F,
        v,
        H,
        k
      );
  }, ri = (d, p, F) => {
    const L = p.component = d.component;
    if (Xu(d, p, F))
      if (L.asyncDep && !L.asyncResolved) {
        p.el = d.el, gA(L, p, F);
        return;
      } else
        L.next = p, L.update();
    else
      p.el = d.el, L.vnode = p;
  }, TA = (d, p, F, L, v, H, k) => {
    const T = () => {
      if (d.isMounted) {
        let { next: M, bu: N, u: J, parent: q, vnode: oA } = d;
        {
          const ie = qa(d);
          if (ie) {
            M && (M.el = oA.el, gA(d, M, k)), ie.asyncDep.then(() => {
              RA(() => {
                d.isUnmounted || E();
              }, v);
            });
            return;
          }
        }
        let tA = M, bA;
        st(d, !1), M ? (M.el = oA.el, gA(d, M, k)) : M = oA, N && fr(N), (bA = M.props && M.props.onVnodeBeforeUpdate) && ae(bA, q, M, oA), st(d, !0);
        const yA = xi(d), oe = d.subTree;
        d.subTree = yA, U(
          oe,
          yA,
          // parent may have changed if it's in a teleport
          f(oe.el),
          // anchor may have changed if it's in a fragment
          Os(oe),
          d,
          v,
          H
        ), M.el = yA.el, tA === null && Ju(d, yA.el), J && RA(J, v), (bA = M.props && M.props.onVnodeUpdated) && RA(
          () => ae(bA, q, M, oA),
          v
        );
      } else {
        let M;
        const { el: N, props: J } = p, { bm: q, m: oA, parent: tA, root: bA, type: yA } = d, oe = us(p);
        st(d, !1), q && fr(q), !oe && (M = J && J.onVnodeBeforeMount) && ae(M, tA, p), st(d, !0);
        {
          bA.ce && bA.ce._hasShadowRoot() && bA.ce._injectChildStyle(
            yA,
            d.parent ? d.parent.type : void 0
          );
          const ie = d.subTree = xi(d);
          U(
            null,
            ie,
            F,
            L,
            d,
            v,
            H
          ), p.el = ie.el;
        }
        if (oA && RA(oA, v), !oe && (M = J && J.onVnodeMounted)) {
          const ie = p;
          RA(
            () => ae(M, tA, ie),
            v
          );
        }
        (p.shapeFlag & 256 || tA && us(tA.vnode) && tA.vnode.shapeFlag & 256) && d.a && RA(d.a, v), d.isMounted = !0, p = F = L = null;
      }
    };
    d.scope.on();
    const K = d.effect = new ia(T);
    d.scope.off();
    const E = d.update = K.run.bind(K), P = d.job = K.runIfDirty.bind(K);
    P.i = d, P.id = d.uid, K.scheduler = () => Po(P), st(d, !0), E();
  }, gA = (d, p, F) => {
    p.component = d;
    const L = d.vnode.props;
    d.vnode = p, d.next = null, Yu(d, p.props, L, F), qu(d, p.children, F), Se(), pi(d), Ke();
  }, lA = (d, p, F, L, v, H, k, T, K = !1) => {
    const E = d && d.children, P = d ? d.shapeFlag : 0, M = p.children, { patchFlag: N, shapeFlag: J } = p;
    if (N > 0) {
      if (N & 128) {
        Ds(
          E,
          M,
          F,
          L,
          v,
          H,
          k,
          T,
          K
        );
        return;
      } else if (N & 256) {
        At(
          E,
          M,
          F,
          L,
          v,
          H,
          k,
          T,
          K
        );
        return;
      }
    }
    J & 8 ? (P & 16 && Nt(E, v, H), M !== E && a(F, M)) : P & 16 ? J & 16 ? Ds(
      E,
      M,
      F,
      L,
      v,
      H,
      k,
      T,
      K
    ) : Nt(E, v, H, !0) : (P & 8 && a(F, ""), J & 16 && xA(
      M,
      F,
      L,
      v,
      H,
      k,
      T,
      K
    ));
  }, At = (d, p, F, L, v, H, k, T, K) => {
    d = d || lt, p = p || lt;
    const E = d.length, P = p.length, M = Math.min(E, P);
    let N;
    for (N = 0; N < M; N++) {
      const J = p[N] = K ? Ee(p[N]) : de(p[N]);
      U(
        d[N],
        J,
        F,
        null,
        v,
        H,
        k,
        T,
        K
      );
    }
    E > P ? Nt(
      d,
      v,
      H,
      !0,
      !1,
      M
    ) : xA(
      p,
      F,
      L,
      v,
      H,
      k,
      T,
      K,
      M
    );
  }, Ds = (d, p, F, L, v, H, k, T, K) => {
    let E = 0;
    const P = p.length;
    let M = d.length - 1, N = P - 1;
    for (; E <= M && E <= N; ) {
      const J = d[E], q = p[E] = K ? Ee(p[E]) : de(p[E]);
      if (Xt(J, q))
        U(
          J,
          q,
          F,
          null,
          v,
          H,
          k,
          T,
          K
        );
      else
        break;
      E++;
    }
    for (; E <= M && E <= N; ) {
      const J = d[M], q = p[N] = K ? Ee(p[N]) : de(p[N]);
      if (Xt(J, q))
        U(
          J,
          q,
          F,
          null,
          v,
          H,
          k,
          T,
          K
        );
      else
        break;
      M--, N--;
    }
    if (E > M) {
      if (E <= N) {
        const J = N + 1, q = J < P ? p[J].el : L;
        for (; E <= N; )
          U(
            null,
            p[E] = K ? Ee(p[E]) : de(p[E]),
            F,
            q,
            v,
            H,
            k,
            T,
            K
          ), E++;
      }
    } else if (E > N)
      for (; E <= M; )
        qA(d[E], v, H, !0), E++;
    else {
      const J = E, q = E, oA = /* @__PURE__ */ new Map();
      for (E = q; E <= N; E++) {
        const VA = p[E] = K ? Ee(p[E]) : de(p[E]);
        VA.key != null && oA.set(VA.key, E);
      }
      let tA, bA = 0;
      const yA = N - q + 1;
      let oe = !1, ie = 0;
      const Vt = new Array(yA);
      for (E = 0; E < yA; E++) Vt[E] = 0;
      for (E = J; E <= M; E++) {
        const VA = d[E];
        if (bA >= yA) {
          qA(VA, v, H, !0);
          continue;
        }
        let le;
        if (VA.key != null)
          le = oA.get(VA.key);
        else
          for (tA = q; tA <= N; tA++)
            if (Vt[tA - q] === 0 && Xt(VA, p[tA])) {
              le = tA;
              break;
            }
        le === void 0 ? qA(VA, v, H, !0) : (Vt[le - q] = E + 1, le >= ie ? ie = le : oe = !0, U(
          VA,
          p[le],
          F,
          null,
          v,
          H,
          k,
          T,
          K
        ), bA++);
      }
      const ii = oe ? tB(Vt) : lt;
      for (tA = ii.length - 1, E = yA - 1; E >= 0; E--) {
        const VA = q + E, le = p[VA], li = p[VA + 1], ai = VA + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          li.el || $a(li)
        ) : L;
        Vt[E] === 0 ? U(
          null,
          le,
          F,
          ai,
          v,
          H,
          k,
          T,
          K
        ) : oe && (tA < 0 || E !== ii[tA] ? et(le, F, ai, 2) : tA--);
      }
    }
  }, et = (d, p, F, L, v = null) => {
    const { el: H, type: k, transition: T, children: K, shapeFlag: E } = d;
    if (E & 6) {
      et(d.component.subTree, p, F, L);
      return;
    }
    if (E & 128) {
      d.suspense.move(p, F, L);
      return;
    }
    if (E & 64) {
      k.move(d, p, F, Pt);
      return;
    }
    if (k === R) {
      s(H, p, F);
      for (let M = 0; M < K.length; M++)
        et(K[M], p, F, L);
      s(d.anchor, p, F);
      return;
    }
    if (k === Un) {
      g(d, p, F);
      return;
    }
    if (L !== 2 && E & 1 && T)
      if (L === 0)
        T.persisted && !H[Qn] ? s(H, p, F) : (T.beforeEnter(H), s(H, p, F), RA(() => T.enter(H), v));
      else {
        const { leave: M, delayLeave: N, afterLeave: J } = T, q = () => {
          d.ctx.isUnmounted ? r(H) : s(H, p, F);
        }, oA = () => {
          const tA = H._isLeaving || !!H[Qn];
          H._isLeaving && H[Qn](
            !0
            /* cancelled */
          ), T.persisted && !tA ? q() : M(H, () => {
            q(), J && J();
          });
        };
        N ? N(H, q, oA) : oA();
      }
    else
      s(H, p, F);
  }, qA = (d, p, F, L = !1, v = !1) => {
    const {
      type: H,
      props: k,
      ref: T,
      children: K,
      dynamicChildren: E,
      shapeFlag: P,
      patchFlag: M,
      dirs: N,
      cacheIndex: J,
      memo: q
    } = d;
    if ((M === -2 || E && E.hasOnce) && (v = !1), T != null && (Se(), fs(T, null, F, d, !0), Ke()), J != null && (!d.ctx || d.ctx === p) && (p.renderCache[J] = void 0), P & 256) {
      p.ctx.deactivate(d);
      return;
    }
    const oA = P & 1 && N, tA = !us(d);
    let bA;
    if (tA && (bA = k && k.onVnodeBeforeUnmount) && ae(bA, p, d), P & 6)
      bf(d.component, F, L);
    else {
      if (P & 128) {
        d.suspense.unmount(F, L);
        return;
      }
      oA && tt(d, null, p, "beforeUnmount"), P & 64 ? d.type.remove(
        d,
        p,
        F,
        Pt,
        L
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== R || M > 0 && M & 64) ? Nt(
        E,
        p,
        F,
        !1,
        !0
      ) : (H === R && M & 384 || !v && P & 16) && Nt(K, p, F), L && ni(d);
    }
    const yA = q != null && J == null;
    (tA && (bA = k && k.onVnodeUnmounted) || oA || yA) && RA(() => {
      bA && ae(bA, p, d), oA && tt(d, null, p, "unmounted"), yA && (d.el = null);
    }, F);
  }, ni = (d) => {
    const { type: p, el: F, anchor: L, transition: v } = d;
    if (p === R) {
      Cf(F, L);
      return;
    }
    if (p === Un) {
      m(d), v && !v.persisted && v.afterLeave && v.afterLeave();
      return;
    }
    const H = () => {
      r(F), v && !v.persisted && v.afterLeave && v.afterLeave();
    };
    if (d.shapeFlag & 1 && v && !v.persisted) {
      const { leave: k, delayLeave: T } = v, K = () => k(F, H);
      T ? T(d.el, H, K) : K();
    } else
      H();
  }, Cf = (d, p) => {
    let F;
    for (; d !== p; )
      F = B(d), r(d), d = F;
    r(p);
  }, bf = (d, p, F) => {
    const { bum: L, scope: v, job: H, subTree: k, um: T, m: K, a: E } = d;
    Ei(K), Ei(E), L && fr(L), v.stop(), H ? (H.flags |= 8, qA(k, d, p, F)) : d.vnode.el && k && (k.transition = d.vnode.transition, qA(k, d, p, F)), T && RA(T, p), RA(() => {
      d.isUnmounted = !0;
    }, p);
  }, Nt = (d, p, F, L = !1, v = !1, H = 0) => {
    for (let k = H; k < d.length; k++)
      qA(d[k], p, F, L, v);
  }, Os = (d) => {
    if (d.shapeFlag & 6)
      return Os(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const p = B(d.anchor || d.el), F = p && p[du];
    return F ? B(F) : p;
  };
  let un = !1;
  const oi = (d, p, F) => {
    let L;
    d == null ? p._vnode && (qA(p._vnode, null, null, !0), L = p._vnode.component) : U(
      p._vnode || null,
      d,
      p,
      null,
      null,
      null,
      F
    ), p._vnode = d, un || (un = !0, pi(L), va(), un = !1);
  }, Pt = {
    p: U,
    um: qA,
    m: et,
    r: ni,
    mt: fn,
    mc: xA,
    pc: lA,
    pbc: $e,
    n: Os,
    o: e
  };
  return {
    render: oi,
    hydrate: void 0,
    createApp: Mu(oi)
  };
}
function bn({ type: e, props: A }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && A && A.encoding && A.encoding.includes("html") ? void 0 : t;
}
function st({ effect: e, job: A }, t) {
  t ? (e.flags |= 32, A.flags |= 4) : (e.flags &= -33, A.flags &= -5);
}
function eB(e, A) {
  return (!e || e && !e.pendingBranch) && A && !A.persisted;
}
function za(e, A, t = !1) {
  const s = e.children, r = A.children;
  if (V(s) && V(r))
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      let i = r[n];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[n] = Ee(r[n]), i.el = o.el), !t && i.patchFlag !== -2 && za(o, i)), i.type === Yr && (i.patchFlag === -1 && (i = r[n] = Ee(i)), i.el = o.el), i.type === ke && !i.el && (i.el = o.el);
    }
}
function tB(e) {
  const A = e.slice(), t = [0];
  let s, r, n, o, i;
  const l = e.length;
  for (s = 0; s < l; s++) {
    const c = e[s];
    if (c !== 0) {
      if (r = t[t.length - 1], e[r] < c) {
        A[s] = r, t.push(s);
        continue;
      }
      for (n = 0, o = t.length - 1; n < o; )
        i = n + o >> 1, e[t[i]] < c ? n = i + 1 : o = i;
      c < e[t[n]] && (n > 0 && (A[s] = t[n - 1]), t[n] = s);
    }
  }
  for (n = t.length, o = t[n - 1]; n-- > 0; )
    t[n] = o, o = A[o];
  return t;
}
function qa(e) {
  const A = e.subTree.component;
  if (A)
    return A.asyncDep && !A.asyncResolved ? A : qa(A);
}
function Ei(e) {
  if (e)
    for (let A = 0; A < e.length; A++)
      e[A].flags |= 8;
}
function $a(e) {
  if (e.placeholder)
    return e.placeholder;
  const A = e.component;
  return A ? $a(A.subTree) : null;
}
const Ac = (e) => e.__isSuspense;
function sB(e, A) {
  A && A.pendingBranch ? V(e) ? A.effects.push(...e) : A.effects.push(e) : lu(e);
}
const R = /* @__PURE__ */ Symbol.for("v-fgt"), Yr = /* @__PURE__ */ Symbol.for("v-txt"), ke = /* @__PURE__ */ Symbol.for("v-cmt"), Un = /* @__PURE__ */ Symbol.for("v-stc"), Bt = [];
let WA = null;
function w(e = !1) {
  Bt.push(WA = e ? null : []);
}
function ec() {
  Bt.pop(), WA = Bt[Bt.length - 1] || null;
}
let Fs = 1;
function Hi(e, A = !1) {
  Fs += e, e < 0 && WA && A && (WA.hasOnce = !0);
}
function tc(e) {
  return e.dynamicChildren = Fs > 0 ? WA || lt : null, ec(), Fs > 0 && WA && WA.push(e), e;
}
function Q(e, A, t, s, r, n) {
  return tc(
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
function Wo(e, A, t, s, r) {
  return tc(
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
function sc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Xt(e, A) {
  return e.type === A.type && e.key === A.key;
}
const rc = ({ key: e }) => e ?? null, Br = ({
  ref: e,
  ref_key: A,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? dA(e) || /* @__PURE__ */ MA(e) || W(e) ? { i: JA, r: e, k: A, f: !!t } : e : null);
function u(e, A = null, t = null, s = 0, r = null, n = e === R ? 0 : 1, o = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: A,
    key: A && rc(A),
    ref: A && Br(A),
    scopeId: Ha,
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
  return i ? (mr(l, t), n & 128 && e.normalize(l)) : t && (l.shapeFlag |= dA(t) ? 8 : 16), Fs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  WA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && WA.push(l), l;
}
const he = rB;
function rB(e, A = null, t = null, s = 0, r = null, n = !1) {
  if ((!e || e === Iu) && (e = ke), sc(e)) {
    const i = kt(
      e,
      A,
      !0
      /* mergeRef: true */
    );
    return t && mr(i, t), Fs > 0 && !n && WA && (i.shapeFlag & 6 ? WA[WA.indexOf(e)] = i : WA.push(i)), i.patchFlag = -2, i;
  }
  if (hB(e) && (e = e.__vccOpts), A) {
    A = nB(A);
    let { class: i, style: l } = A;
    i && !dA(i) && (A.class = Y(i)), rA(l) && (/* @__PURE__ */ No(l) && !V(l) && (l = CA({}, l)), A.style = Is(l));
  }
  const o = dA(e) ? 1 : Ac(e) ? 128 : Xr(e) ? 64 : rA(e) ? 4 : W(e) ? 2 : 0;
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
function nB(e) {
  return e ? /* @__PURE__ */ No(e) || Xa(e) ? CA({}, e) : e : null;
}
function kt(e, A, t = !1, s = !1) {
  const { props: r, ref: n, patchFlag: o, children: i, transition: l } = e, c = A ? oB(r || {}, A) : r, a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && rc(c),
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
    patchFlag: A && e.type !== R ? o === -1 ? 16 : o | 16 : o,
    dynamicProps: e.dynamicProps,
    dynamicChildren: e.dynamicChildren,
    appContext: e.appContext,
    dirs: e.dirs,
    transition: l,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && kt(e.ssContent),
    ssFallback: e.ssFallback && kt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && s && Vo(
    a,
    l.clone(a)
  ), a;
}
function X(e = " ", A = 0) {
  return he(Yr, null, e, A);
}
function _(e = "", A = !1) {
  return A ? (w(), Wo(ke, null, e)) : he(ke, null, e);
}
function de(e) {
  return e == null || typeof e == "boolean" ? he(ke) : V(e) ? he(
    R,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : sc(e) ? Ee(e) : he(Yr, null, String(e));
}
function Ee(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : kt(e);
}
function mr(e, A) {
  let t = 0;
  const { shapeFlag: s } = e;
  if (A == null)
    A = null;
  else if (V(A))
    t = 16;
  else if (typeof A == "object")
    if (s & 65) {
      const r = A.default;
      r && (r._c && (r._d = !1), mr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = A._;
      !r && !Xa(A) ? A._ctx = JA : r === 3 && JA && (JA.slots._ === 1 ? A._ = 1 : (A._ = 2, e.patchFlag |= 1024));
    }
  else if (W(A)) {
    if (s & 65) {
      mr(e, { default: A });
      return;
    }
    A = { default: A, _ctx: JA }, t = 32;
  } else
    A = String(A), s & 64 ? (t = 16, A = [X(A)]) : t = 8;
  e.children = A, e.shapeFlag |= t;
}
function oB(...e) {
  const A = {};
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    for (const r in s)
      if (r === "class")
        A.class !== s.class && (A.class = Y([A.class, s.class]));
      else if (r === "style")
        A.style = Is([A.style, s.style]);
      else if (Dr(r)) {
        const n = A[r], o = s[r];
        o && n !== o && !(V(n) && n.includes(o)) ? A[r] = n ? [].concat(n, o) : o : o == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Or(r) && (A[r] = o);
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
const iB = Ra();
let lB = 0;
function aB(e, A, t) {
  const s = e.type, r = (A ? A.appContext : e.appContext) || iB, n = {
    uid: lB++,
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
    scope: new Kf(
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
    propsOptions: Wa(s, r),
    emitsOptions: Na(s, r),
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
  return n.ctx = { _: n }, n.root = A ? A.root : n, n.emit = Nu.bind(null, n), e.ce && e.ce(n), n;
}
let SA = null;
const cB = () => SA || JA;
let xr, ms;
{
  const e = Pr(), A = (t, s) => {
    let r;
    return (r = e[t]) || (r = e[t] = []), r.push(s), (n) => {
      r.length > 1 ? r.forEach((o) => o(n)) : r[0](n);
    };
  };
  xr = A(
    "__VUE_INSTANCE_SETTERS__",
    (t) => SA = t
  ), ms = A(
    "__VUE_SSR_SETTERS__",
    (t) => xs = t
  );
}
const Ls = (e) => {
  const A = SA;
  return xr(e), e.scope.on(), () => {
    e.scope.off(), xr(A);
  };
}, Ii = () => {
  SA && SA.scope.off(), xr(null);
};
function nc(e) {
  return e.vnode.shapeFlag & 4;
}
let xs = !1;
function fB(e, A = !1, t = !1) {
  A && ms(A);
  const { props: s, children: r } = e.vnode, n = nc(e);
  Wu(e, s, n, A), zu(e, r, t || A);
  const o = n ? uB(e, A) : void 0;
  return A && ms(!1), o;
}
function uB(e, A) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Lu);
  const { setup: s } = t;
  if (s) {
    Se();
    const r = e.setupContext = s.length > 1 ? dB(e) : null, n = Ls(e), o = _s(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), i = Aa(o);
    if (Ke(), n(), (i || e.sp) && !us(e) && Sa(e), i) {
      if (o.then(Ii, Ii), A)
        return o.then((l) => {
          ms(!0);
          try {
            _i(e, l, A);
          } finally {
            ms(!1);
          }
        }).catch((l) => {
          Gr(l, e, 0);
        });
      e.asyncDep = o;
    } else
      _i(e, o);
  } else
    oc(e);
}
function _i(e, A, t) {
  W(A) ? e.type.__ssrInlineRender ? e.ssrRender = A : e.render = A : rA(A) && (e.setupState = Fa(A)), oc(e);
}
function oc(e, A, t) {
  const s = e.type;
  e.render || (e.render = s.render || ge);
  {
    const r = Ls(e);
    Se();
    try {
      Su(e);
    } finally {
      Ke(), r();
    }
  }
}
const BB = {
  get(e, A) {
    return LA(e, "get", ""), e[A];
  }
};
function dB(e) {
  const A = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, BB),
    slots: e.slots,
    emit: e.emit,
    expose: A
  };
}
function jr(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Fa(Au(e.exposed)), {
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
function gB(e, A = !0) {
  return W(e) ? e.displayName || e.name : e.name || A && e.__name;
}
function hB(e) {
  return W(e) && "__vccOpts" in e;
}
const pB = (e, A) => /* @__PURE__ */ su(e, A, xs), wB = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let ro;
const Li = typeof window < "u" && window.trustedTypes;
if (Li)
  try {
    ro = /* @__PURE__ */ Li.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const ic = ro ? (e) => ro.createHTML(e) : (e) => e, QB = "http://www.w3.org/2000/svg", CB = "http://www.w3.org/1998/Math/MathML", ye = typeof document < "u" ? document : null, Si = ye && /* @__PURE__ */ ye.createElement("template"), bB = {
  insert: (e, A, t) => {
    A.insertBefore(e, t || null);
  },
  remove: (e) => {
    const A = e.parentNode;
    A && A.removeChild(e);
  },
  createElement: (e, A, t, s) => {
    const r = A === "svg" ? ye.createElementNS(QB, e) : A === "mathml" ? ye.createElementNS(CB, e) : t ? ye.createElement(e, { is: t }) : ye.createElement(e);
    return e === "select" && s && s.multiple != null && r.setAttribute("multiple", s.multiple), r;
  },
  createText: (e) => ye.createTextNode(e),
  createComment: (e) => ye.createComment(e),
  setText: (e, A) => {
    e.nodeValue = A;
  },
  setElementText: (e, A) => {
    e.textContent = A;
  },
  parentNode: (e) => e.parentNode,
  nextSibling: (e) => e.nextSibling,
  querySelector: (e) => ye.querySelector(e),
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
      Si.innerHTML = ic(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Si.content;
      if (s === "svg" || s === "mathml") {
        const l = i.firstChild;
        for (; l.firstChild; )
          i.appendChild(l.firstChild);
        i.removeChild(l);
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
}, UB = /* @__PURE__ */ Symbol("_vtc");
function FB(e, A, t) {
  const s = e[UB];
  s && (A = (A ? [A, ...s] : [...s]).join(" ")), A == null ? e.removeAttribute("class") : t ? e.setAttribute("class", A) : e.className = A;
}
const Ki = /* @__PURE__ */ Symbol("_vod"), mB = /* @__PURE__ */ Symbol("_vsh"), xB = /* @__PURE__ */ Symbol(""), yB = /(?:^|;)\s*display\s*:/;
function vB(e, A, t) {
  const s = e.style, r = dA(t);
  let n = !1;
  if (t && !r) {
    if (A)
      if (dA(A))
        for (const o of A.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim();
          t[i] == null && qt(s, i, "");
        }
      else
        for (const o in A)
          t[o] == null && qt(s, o, "");
    for (const o in t) {
      o === "display" && (n = !0);
      const i = t[o];
      i != null ? HB(
        e,
        o,
        !dA(A) && A ? A[o] : void 0,
        i
      ) || qt(s, o, i) : qt(s, o, "");
    }
  } else if (r) {
    if (A !== t) {
      const o = s[xB];
      o && (t += ";" + o), s.cssText = t, n = yB.test(t);
    }
  } else A && e.removeAttribute("style");
  Ki in e && (e[Ki] = n ? s.display : "", e[mB] && (s.display = "none"));
}
const Ps = /\s*!important$/;
function qt(e, A, t) {
  if (V(t))
    t.forEach((s) => qt(e, A, s));
  else if (t == null && (t = ""), A.startsWith("--"))
    Ps.test(t) ? e.setProperty(A, t.replace(Ps, ""), "important") : e.setProperty(A, t);
  else {
    const s = EB(e, A);
    Ps.test(t) ? e.setProperty(
      XA(s),
      t.replace(Ps, ""),
      "important"
    ) : e[s] = t;
  }
}
const Ti = ["Webkit", "Moz", "ms"], Fn = {};
function EB(e, A) {
  const t = Fn[A];
  if (t)
    return t;
  let s = mA(A);
  if (s !== "filter" && s in e)
    return Fn[A] = s;
  s = Nr(s);
  for (let r = 0; r < Ti.length; r++) {
    const n = Ti[r] + s;
    if (n in e)
      return Fn[A] = n;
  }
  return A;
}
function HB(e, A, t, s) {
  return e.tagName === "TEXTAREA" && (A === "width" || A === "height") && dA(s) && t === s;
}
const ki = "http://www.w3.org/1999/xlink";
function Di(e, A, t, s, r, n = _f(A)) {
  s && A.startsWith("xlink:") ? t == null ? e.removeAttributeNS(ki, A.slice(6, A.length)) : e.setAttributeNS(ki, A, t) : t == null || n && !sa(t) ? e.removeAttribute(A) : e.setAttribute(
    A,
    n ? "" : we(t) ? String(t) : t
  );
}
function Oi(e, A, t, s, r) {
  if (A === "innerHTML" || A === "textContent") {
    t != null && (e[A] = A === "innerHTML" ? ic(t) : t);
    return;
  }
  const n = e.tagName;
  if (A === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const i = n === "OPTION" ? e.getAttribute("value") || "" : e.value, l = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      e.type === "checkbox" ? "on" : ""
    ) : String(t);
    (i !== l || !("_value" in e)) && (e.value = l), t == null && e.removeAttribute(A), e._value = t;
    return;
  }
  let o = !1;
  if (t === "" || t == null) {
    const i = typeof e[A];
    i === "boolean" ? t = sa(t) : t == null && i === "string" ? (t = "", o = !0) : i === "number" && (t = 0, o = !0);
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
function IB(e, A, t, s) {
  e.removeEventListener(A, t, s);
}
const Mi = /* @__PURE__ */ Symbol("_vei");
function _B(e, A, t, s, r = null) {
  const n = e[Mi] || (e[Mi] = {}), o = n[A];
  if (s && o)
    o.value = s;
  else {
    const [i, l] = KB(A);
    if (s) {
      const c = n[A] = DB(
        s,
        r
      );
      ot(e, i, c, l);
    } else o && (IB(e, i, o, l), n[A] = void 0);
  }
}
const LB = /(Once|Passive|Capture)$/, SB = /^on:?(?:Once|Passive|Capture)$/;
function KB(e) {
  let A, t;
  for (; (t = e.match(LB)) && !SB.test(e); )
    A || (A = {}), e = e.slice(0, e.length - t[1].length), A[t[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : XA(e.slice(2)), A];
}
let mn = 0;
const TB = /* @__PURE__ */ Promise.resolve(), kB = () => mn || (TB.then(() => mn = 0), mn = Date.now());
function DB(e, A) {
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
      for (let l = 0; l < o.length && !s._stopped; l++) {
        const c = o[l];
        c && ne(
          c,
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
  return t.value = e, t.attached = kB(), t;
}
const Ri = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, OB = (e, A, t, s, r, n) => {
  const o = r === "svg";
  A === "class" ? FB(e, s, o) : A === "style" ? vB(e, t, s) : Dr(A) ? Or(A) || _B(e, A, t, s, n) : (A[0] === "." ? (A = A.slice(1), !0) : A[0] === "^" ? (A = A.slice(1), !1) : MB(e, A, s, o)) ? (Oi(e, A, s), !e.tagName.includes("-") && (A === "value" || A === "checked" || A === "selected") && Di(e, A, s, o, n, A !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (RB(e, A) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(A) || !dA(s))) ? Oi(e, mA(A), s, n, A) : (A === "true-value" ? e._trueValue = s : A === "false-value" && (e._falseValue = s), Di(e, A, s, o));
};
function MB(e, A, t, s) {
  if (s)
    return !!(A === "innerHTML" || A === "textContent" || A in e && Ri(A) && W(t));
  if (A === "spellcheck" || A === "draggable" || A === "translate" || A === "autocorrect" || A === "sandbox" && e.tagName === "IFRAME" || A === "form" || A === "list" && e.tagName === "INPUT" || A === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (A === "width" || A === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ri(A) && dA(t) ? !1 : A in e;
}
function RB(e, A) {
  const t = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!t)
    return !1;
  const s = mA(A);
  return Array.isArray(t) ? t.some((r) => mA(r) === s) : Object.keys(t).some((r) => mA(r) === s);
}
const Ni = {};
// @__NO_SIDE_EFFECTS__
function Pi(e, A, t) {
  let s = /* @__PURE__ */ hu(e, A);
  Mr(s) && (s = CA({}, s, A));
  class r extends Yo {
    constructor(o) {
      super(s, o, t);
    }
  }
  return r.def = s, r;
}
const NB = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Yo extends NB {
  constructor(A, t = {}, s = Wi) {
    super(), this._def = A, this._props = t, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== Wi ? this._root = this.shadowRoot : A.shadowRoot !== !1 ? (this.attachShadow(
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
      if (A instanceof Yo) {
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
    this._connected = !1, xa(() => {
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
        for (const l in n) {
          const c = n[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = fi(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[mA(l)] = !0);
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
          get: () => Ua(t[s])
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
    let s = t ? this.getAttribute(A) : Ni;
    const r = mA(A);
    t && this._numberProps && this._numberProps[r] && (s = fi(s)), this._setProp(r, s, !1, !0);
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
    if (t !== this._props[A] && (this._dirty = !0, t === Ni ? delete this._props[A] : (this._props[A] = t, A === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), s)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(XA(A), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(XA(A), t + "") : t || this.removeAttribute(XA(A)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const A = this._createVNode();
    this._app && (A.appContext = this._app._context), YB(A, this._root);
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
            Mr(o[0]) ? CA({ detail: o }, o[0]) : { detail: o }
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
    for (let l = A.length - 1; l >= 0; l--) {
      const c = document.createElement("style");
      r && c.setAttribute("nonce", r), c.textContent = A[l], n.insertBefore(c, i || o), i = c, l === 0 && (s || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
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
        for (const l of o) {
          if (t && l.nodeType === 1) {
            const c = t + "-s", a = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let f;
            for (; f = a.nextNode(); )
              f.setAttribute(c, "");
          }
          i.insertBefore(l, r);
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
const yr = (e) => {
  const A = e.props["onUpdate:modelValue"] || !1;
  return V(A) ? (t) => fr(A, t) : A;
};
function PB(e) {
  e.target.composing = !0;
}
function Vi(e) {
  const A = e.target;
  A.composing && (A.composing = !1, A.dispatchEvent(new Event("input")));
}
const at = /* @__PURE__ */ Symbol("_assign"), Vs = /* @__PURE__ */ Symbol("_initialValue");
function xn(e, A, t) {
  return A && (e = e.trim()), t && (e = Ko(e)), e;
}
const dr = {
  created(e, { modifiers: { lazy: A, trim: t, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Vs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Vs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[at] = yr(r);
    const n = s || r.props && r.props.type === "number";
    ot(e, A ? "change" : "input", (o) => {
      o.target.composing || e[at](xn(e.value, t, n));
    }), (t || n) && ot(e, "change", () => {
      e.value = xn(e.value, t, n);
    }), A || (ot(e, "compositionstart", PB), ot(e, "compositionend", Vi), ot(e, "change", Vi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: A, modifiers: { trim: t, number: s } }) {
    const r = A ?? "", n = e[Vs];
    delete e[Vs], n !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== n ? e[at](xn(e.value, t, s)) : e.value = r;
  },
  beforeUpdate(e, { value: A, oldValue: t, modifiers: { lazy: s, trim: r, number: n } }, o) {
    if (e[at] = yr(o), e.composing) return;
    const i = (n || e.type === "number") && !/^0\d/.test(e.value) ? Ko(e.value) : e.value, l = A ?? "";
    if (i === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && A === t || r && e.value.trim() === l) || (e.value = l);
  }
}, DA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, A, t) {
    e[at] = yr(t), ot(e, "change", () => {
      const s = e._modelValue, r = VB(e), n = e.checked, o = e[at];
      if (V(s)) {
        const i = ra(s, r), l = i !== -1;
        if (n && !l)
          o(s.concat(r));
        else if (!n && l) {
          const c = [...s];
          c.splice(i, 1), o(c);
        }
      } else if (Tt(s)) {
        const i = new Set(s);
        n ? i.add(r) : i.delete(r), o(i);
      } else
        o(lc(e, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Gi,
  beforeUpdate(e, A, t) {
    e[at] = yr(t), Gi(e, A, t);
  }
};
function Gi(e, { value: A, oldValue: t }, s) {
  e._modelValue = A;
  let r;
  if (V(A))
    r = ra(A, s.props.value) > -1;
  else if (Tt(A))
    r = A.has(s.props.value);
  else {
    if (A === t) return;
    r = Dt(A, lc(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
function VB(e) {
  return "_value" in e ? e._value : e.value;
}
function lc(e, A) {
  const t = A ? "_trueValue" : "_falseValue";
  return t in e ? e[t] : A;
}
const GB = ["ctrl", "shift", "alt", "meta"], XB = {
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
  exact: (e, A) => GB.some((t) => e[`${t}Key`] && !A.includes(t))
}, $t = (e, A) => {
  if (!e) return e;
  const t = e._withMods || (e._withMods = {}), s = A.join(".");
  return t[s] || (t[s] = (r, ...n) => {
    for (let o = 0; o < A.length; o++) {
      const i = XB[A[o]];
      if (i && i(r, A)) return;
    }
    return e(r, ...n);
  });
}, JB = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, Xi = (e, A) => {
  const t = e._withKeys || (e._withKeys = {}), s = A.join(".");
  return t[s] || (t[s] = (r) => {
    if (!("key" in r))
      return;
    const n = XA(r.key);
    if (A.some(
      (o) => o === n || JB[o] === n
    ))
      return e(r);
  });
}, WB = /* @__PURE__ */ CA({ patchProp: OB }, bB);
let Ji;
function ac() {
  return Ji || (Ji = $u(WB));
}
const YB = (...e) => {
  ac().render(...e);
}, Wi = (...e) => {
  const A = ac().createApp(...e), { mount: t } = A;
  return A.mount = (s) => {
    const r = ZB(s);
    if (!r) return;
    const n = A._component;
    !W(n) && !n.render && !n.template && (n.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = t(r, !1, jB(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, A;
};
function jB(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function ZB(e) {
  return dA(e) ? document.querySelector(e) : e;
}
const zB = ".bse-overlay[data-v-e3f0b15c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-e3f0b15c]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-e3f0b15c]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-e3f0b15c]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-e3f0b15c]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-e3f0b15c]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-e3f0b15c]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-e3f0b15c]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-e3f0b15c]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-e3f0b15c]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-e3f0b15c]{flex:1}.bse-stage[data-v-e3f0b15c]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-e3f0b15c]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", jo = (e, A) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of A)
    t[s] = r;
  return t;
}, qB = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], Yi = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], $B = {
  name: "BugfixScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: qB,
      colors: Yi,
      tool: "pen",
      color: Yi[0],
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
}, Ad = { class: "bse-overlay" }, ed = { class: "bse-toolbar" }, td = ["onClick"], sd = ["title", "onClick"], rd = ["disabled"], nd = ["disabled"], od = { class: "bse-stage" };
function id(e, A, t, s, r, n) {
  return w(), Q("div", Ad, [
    u("div", ed, [
      (w(!0), Q(R, null, $(r.tools, (o) => (w(), Q("button", {
        key: o.id,
        class: Y(["bse-btn", { active: r.tool === o.id }]),
        onClick: (i) => r.tool = o.id
      }, b(o.label), 11, td))), 128)),
      A[8] || (A[8] = u("span", { class: "bse-sep" }, null, -1)),
      (w(!0), Q(R, null, $(r.colors, (o) => (w(), Q("button", {
        key: o,
        class: Y(["bse-color", { active: r.color === o }]),
        style: Is({ background: o }),
        title: o,
        onClick: (i) => r.color = o
      }, null, 14, sd))), 128)),
      A[9] || (A[9] = u("span", { class: "bse-sep" }, null, -1)),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[0] || (A[0] = (...o) => n.undo && n.undo(...o))
      }, "되돌리기", 8, rd),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[1] || (A[1] = (...o) => n.clearAll && n.clearAll(...o))
      }, "모두 지우기", 8, nd),
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
    u("div", od, [
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
const ld = /* @__PURE__ */ jo($B, [["render", id], ["styles", [zB]], ["__scopeId", "data-v-e3f0b15c"]]), ad = '.bug-target-tool[data-v-0b6144ab]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-0b6144ab]{margin:0}.bug-target[data-v-0b6144ab]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-0b6144ab]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-0b6144ab]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-0b6144ab]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-0b6144ab]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-0b6144ab]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-0b6144ab]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-0b6144ab]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-0b6144ab]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-0b6144ab]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-0b6144ab]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-0b6144ab]:hover{color:#fff}.bug-report-tabs[data-v-0b6144ab]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-0b6144ab]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-0b6144ab]:hover{color:#ccc}.bug-tab.active[data-v-0b6144ab]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-0b6144ab]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-0b6144ab]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-0b6144ab]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-0b6144ab]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-0b6144ab]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-0b6144ab]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-0b6144ab]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-0b6144ab]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-0b6144ab]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-0b6144ab]::placeholder{color:#555}.bug-report-textarea[data-v-0b6144ab]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-0b6144ab]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-0b6144ab]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-0b6144ab]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-0b6144ab]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-0b6144ab]{cursor:pointer}.log-filter-chip.error[data-v-0b6144ab]{color:#e06060}.log-filter-chip.warn[data-v-0b6144ab]{color:#c8a040}.log-filter-chip.log[data-v-0b6144ab]{color:#6080b0}.log-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-0b6144ab]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-0b6144ab]:last-child{border-bottom:none}.log-item--error[data-v-0b6144ab]{background:#c83c3c14}.log-item--warn[data-v-0b6144ab]{background:#c8a02814}.log-time[data-v-0b6144ab]{color:#555;flex-shrink:0}.log-badge-lv[data-v-0b6144ab]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-0b6144ab]{color:#e06060}.log-item--warn .log-badge-lv[data-v-0b6144ab]{color:#c8a040}.log-item--log .log-badge-lv[data-v-0b6144ab]{color:#6080b0}.log-msg[data-v-0b6144ab]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-0b6144ab]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-0b6144ab]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-0b6144ab]:hover{background:#ffffff0a}.net-item[data-v-0b6144ab]:last-child{border-bottom:none}.net-item--error[data-v-0b6144ab]{background:#c83c3c12}.net-status[data-v-0b6144ab]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-0b6144ab]{color:#60c860}.net-status.status-3xx[data-v-0b6144ab]{color:#c8c040}.net-status.status-4xx[data-v-0b6144ab]{color:#e08040}.net-status.status-5xx[data-v-0b6144ab],.net-status.status-err[data-v-0b6144ab]{color:#e06060}.net-method[data-v-0b6144ab]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-0b6144ab]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-0b6144ab]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-0b6144ab]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-0b6144ab]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-0b6144ab]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-0b6144ab]{color:#e06060}.env-group[data-v-0b6144ab]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-0b6144ab]{margin-top:8px}.env-group-title[data-v-0b6144ab]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-0b6144ab]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-0b6144ab]:last-child{border-bottom:none}.env-row span[data-v-0b6144ab]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-0b6144ab]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-0b6144ab]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-0b6144ab]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-0b6144ab]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-0b6144ab]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-0b6144ab]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-0b6144ab]{background:#6464c833;color:#ccc}.log-src-btn[data-v-0b6144ab]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-0b6144ab]{animation:spin-0b6144ab 1s linear infinite;display:inline-block}.log-src-err[data-v-0b6144ab]{color:#e06060;font-weight:700}@keyframes spin-0b6144ab{to{transform:rotate(360deg)}}.log-logger[data-v-0b6144ab]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-0b6144ab]{color:#e06060}.event-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-0b6144ab]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-0b6144ab]:last-child{border-bottom:none}.event-time[data-v-0b6144ab]{color:#555;flex-shrink:0}.event-type[data-v-0b6144ab]{color:#9ad}.env-list[data-v-0b6144ab]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-0b6144ab]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-0b6144ab]{display:flex;gap:6px}.severity-btn[data-v-0b6144ab]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-0b6144ab]:hover{color:#ccc}.severity-btn--critical.active[data-v-0b6144ab]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-0b6144ab]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-0b6144ab]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-0b6144ab]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-0b6144ab]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-0b6144ab]{color:#79a;font-size:10px}.route-list[data-v-0b6144ab]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-0b6144ab]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-0b6144ab]:last-child{border-bottom:none}.route-from[data-v-0b6144ab]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-0b6144ab]{color:#555;flex-shrink:0}.route-to[data-v-0b6144ab]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-0b6144ab]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-0b6144ab]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-0b6144ab]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-0b6144ab]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-0b6144ab]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-0b6144ab]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-0b6144ab]:hover{background:#ffffff12}.bug-btn-download[data-v-0b6144ab]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-0b6144ab]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-0b6144ab]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-0b6144ab]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-0b6144ab]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-0b6144ab]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-0b6144ab .7s linear infinite;flex-shrink:0}@keyframes bug-spin-0b6144ab{to{transform:rotate(360deg)}}.bug-btn-save[data-v-0b6144ab]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-0b6144ab]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-0b6144ab]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-0b6144ab]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-0b6144ab]:hover{background:#ffffff14;color:#abc}', cd = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], fd = {
  name: "BugfixReportModal",
  components: { ScreenshotEditor: ld },
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
      severityOptions: cd,
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
}, ud = { class: "bugfix-root" }, Bd = {
  key: 0,
  class: "bug-capture-overlay"
}, dd = { class: "bug-report-modal" }, gd = { class: "bug-report-header" }, hd = { class: "bug-report-title" }, pd = {
  key: 0,
  class: "bug-report-shortcut"
}, wd = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, Qd = ["onClick"], Cd = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, bd = { class: "bug-report-tabs" }, Ud = ["onClick"], Fd = {
  key: 0,
  class: "bug-tab-badge"
}, md = { class: "bug-report-body" }, xd = { class: "bug-report-section" }, yd = { class: "bug-report-label" }, vd = ["disabled"], Ed = ["disabled"], Hd = ["src"], Id = {
  key: 1,
  class: "screenshot-placeholder"
}, _d = {
  key: 2,
  class: "screenshot-placeholder"
}, Ld = { class: "bug-report-section" }, Sd = { class: "severity-group" }, Kd = ["onClick"], Td = { class: "bug-report-section" }, kd = { class: "bug-report-section" }, Dd = { class: "bug-report-section" }, Od = { class: "bug-report-section" }, Md = { class: "included-chips" }, Rd = { class: "chip" }, Nd = { class: "chip" }, Pd = {
  key: 0,
  class: "chip"
}, Vd = {
  key: 1,
  class: "chip"
}, Gd = { class: "log-source-toggle" }, Xd = {
  key: 0,
  class: "log-src-spin"
}, Jd = {
  key: 1,
  class: "log-src-err"
}, Wd = {
  key: 0,
  class: "bug-report-section"
}, Yd = { class: "bug-report-label" }, jd = { class: "log-filter-group" }, Zd = { class: "log-filter-chip error" }, zd = { class: "log-filter-chip warn" }, qd = { class: "log-filter-chip log" }, $d = { class: "log-list" }, Ag = { class: "log-time" }, eg = { class: "log-badge-lv" }, tg = { class: "log-msg" }, sg = {
  key: 0,
  class: "log-empty"
}, rg = {
  key: 1,
  class: "bug-report-section"
}, ng = { class: "bug-report-label" }, og = { class: "log-filter-group" }, ig = { class: "log-filter-chip error" }, lg = { class: "log-filter-chip warn" }, ag = { class: "log-filter-chip log" }, cg = {
  key: 0,
  class: "log-empty"
}, fg = {
  key: 1,
  class: "log-empty"
}, ug = {
  key: 2,
  class: "log-empty log-empty--error"
}, Bg = {
  key: 3,
  class: "log-list"
}, dg = { class: "log-time" }, gg = { class: "log-badge-lv" }, hg = { class: "log-logger" }, pg = { class: "log-msg" }, wg = {
  key: 0,
  class: "log-empty"
}, Qg = {
  key: 2,
  class: "bug-report-section"
}, Cg = { class: "net-list" }, bg = ["onClick"], Ug = { class: "net-method" }, Fg = { class: "net-url" }, mg = { class: "net-dur" }, xg = { class: "net-time" }, yg = {
  key: 0,
  class: "net-detail"
}, vg = { key: 0 }, Eg = { key: 1 }, Hg = { key: 2 }, Ig = {
  key: 3,
  class: "net-error-msg"
}, _g = {
  key: 0,
  class: "log-empty"
}, Lg = { class: "bug-report-section" }, Sg = { class: "log-list" }, Kg = { class: "log-time" }, Tg = { class: "mutation-type" }, kg = {
  key: 0,
  class: "log-msg mutation-payload"
}, Dg = {
  key: 0,
  class: "log-empty"
}, Og = { class: "bug-report-section" }, Mg = { class: "route-list" }, Rg = { class: "log-time" }, Ng = { class: "route-from" }, Pg = { class: "route-to" }, Vg = {
  key: 0,
  class: "log-empty"
}, Gg = {
  key: 0,
  class: "bug-report-section"
}, Xg = { class: "env-group" }, Jg = {
  key: 1,
  class: "bug-report-section"
}, Wg = { class: "env-group" }, Yg = { class: "env-row" }, jg = { class: "env-row" }, Zg = { class: "env-row" }, zg = { class: "env-row" }, qg = { class: "env-row" }, $g = {
  key: 0,
  class: "bug-report-section"
}, Ah = {
  key: 1,
  class: "bug-report-section"
}, eh = {
  key: 0,
  class: "env-group"
}, th = { class: "env-row" }, sh = {
  key: 0,
  class: "env-row"
}, rh = {
  key: 1,
  class: "env-row"
}, nh = { class: "env-group" }, oh = { class: "env-row" }, ih = { class: "env-row" }, lh = { class: "env-row" }, ah = { class: "env-row" }, ch = { class: "env-row" }, fh = { class: "env-group" }, uh = { class: "env-row" }, Bh = { class: "env-row" }, dh = { class: "env-row" }, gh = { class: "env-list" }, hh = { key: 0 }, ph = { class: "env-row" }, wh = { class: "env-list" }, Qh = { key: 0 }, Ch = {
  key: 0,
  class: "env-row"
}, bh = { class: "env-list" }, Uh = {
  key: 1,
  class: "env-row"
}, Fh = { class: "env-list" }, mh = { class: "env-group" }, xh = { class: "event-list" }, yh = { class: "event-time" }, vh = { class: "event-type" }, Eh = {
  key: 0,
  class: "log-empty"
}, Hh = {
  key: 1,
  class: "env-group"
}, Ih = { class: "env-row" }, _h = { class: "env-row" }, Lh = { class: "env-row" }, Sh = { class: "env-row" }, Kh = { class: "env-group" }, Th = { class: "env-row" }, kh = { class: "env-row" }, Dh = {
  key: 0,
  class: "env-row"
}, Oh = {
  key: 1,
  class: "env-row"
}, Mh = { class: "env-row" }, Rh = { class: "bug-report-footer" }, Nh = ["disabled", "title"], Ph = ["disabled"], Vh = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, Gh = ["disabled"];
function Xh(e, A, t, s, r, n) {
  var i, l, c, a, f, B, h, C, U, y, I, x;
  const o = Hu("ScreenshotEditor");
  return w(), Q("div", ud, [
    r.isCapturing && !r.isOpen ? (w(), Q("div", Bd, [...A[27] || (A[27] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        X(" 화면 캡처 중... ")
      ], -1)
    ])])) : _("", !0),
    r.isOpen ? (w(), Q("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: A[25] || (A[25] = (g) => r.backdropPressed = g.target === g.currentTarget),
      onClick: A[26] || (A[26] = $t((g) => r.backdropPressed && n.close(), ["self"]))
    }, [
      r.isEditingShot && r.screenshotUrl ? (w(), Wo(o, {
        key: 0,
        src: r.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: A[0] || (A[0] = (g) => r.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : _("", !0),
      u("div", dd, [
        u("div", gd, [
          u("span", hd, [
            A[28] || (A[28] = X("버그 신고 ", -1)),
            n.hotkey ? (w(), Q("span", pd, b(n.hotkey), 1)) : _("", !0)
          ]),
          n.appProjects.length > 1 ? (w(), Q("span", wd, [
            (w(!0), Q(R, null, $(n.appProjects, (g) => (w(), Q("button", {
              key: g.key,
              class: Y({ "bug-target__on": r.project === g.key }),
              onClick: (m) => n.setProject(g.key)
            }, b(g.label), 11, Qd))), 128))
          ])) : _("", !0),
          (l = (i = t.kit) == null ? void 0 : i.api) != null && l.enabled ? (w(), Q("label", Cd, [
            FA(u("input", {
              type: "checkbox",
              "onUpdate:modelValue": A[1] || (A[1] = (g) => r.tool = g)
            }, null, 512), [
              [DA, r.tool]
            ]),
            A[29] || (A[29] = X(" 버그 신고 도구 문제 ", -1))
          ])) : _("", !0),
          u("button", {
            class: "bug-report-close",
            onClick: A[2] || (A[2] = (...g) => n.close && n.close(...g))
          }, "✕")
        ]),
        u("div", bd, [
          (w(!0), Q(R, null, $(n.tabs, (g) => (w(), Q("button", {
            key: g.id,
            class: Y(["bug-tab", { active: r.activeTab === g.id }]),
            onClick: (m) => r.activeTab = g.id
          }, [
            X(b(g.label) + " ", 1),
            g.badge ? (w(), Q("span", Fd, b(g.badge), 1)) : _("", !0)
          ], 10, Ud))), 128))
        ]),
        u("div", md, [
          r.activeTab === "basic" ? (w(), Q(R, { key: 0 }, [
            u("div", xd, [
              u("div", yd, [
                A[30] || (A[30] = X(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[3] || (A[3] = (...g) => n.recapture && n.recapture(...g)),
                  disabled: r.isCapturing
                }, b(r.isCapturing ? "캡처 중..." : "다시 찍기"), 9, vd),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[4] || (A[4] = (g) => r.isEditingShot = !0),
                  disabled: !r.screenshotUrl
                }, "그리기·표시", 8, Ed),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[5] || (A[5] = (g) => e.$refs.shotFile.click())
                }, "이미지 불러오기"),
                u("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: A[6] || (A[6] = (...g) => n.onShotFile && n.onShotFile(...g))
                }, null, 544)
              ]),
              u("div", {
                class: Y(["screenshot-wrap", { "screenshot-wrap--editable": r.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: A[7] || (A[7] = (g) => r.screenshotUrl && (r.isEditingShot = !0))
              }, [
                r.screenshotUrl ? (w(), Q("img", {
                  key: 0,
                  src: r.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, Hd)) : r.isCapturing ? (w(), Q("div", Id, "캡처 중...")) : (w(), Q("div", _d, "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다"))
              ], 2),
              A[31] || (A[31] = u("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            u("div", Ld, [
              A[32] || (A[32] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", Sd, [
                (w(!0), Q(R, null, $(r.severityOptions, (g) => (w(), Q("button", {
                  key: g.value,
                  class: Y(["severity-btn", `severity-btn--${g.value.toLowerCase()}`, { active: r.severity === g.value }]),
                  onClick: (m) => r.severity = g.value
                }, b(g.label), 11, Kd))), 128))
              ])
            ]),
            u("div", Td, [
              A[33] || (A[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[8] || (A[8] = (g) => r.problemDesc = g),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [dr, r.problemDesc]
              ])
            ]),
            u("div", kd, [
              A[34] || (A[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[9] || (A[9] = (g) => r.reproSteps = g),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [dr, r.reproSteps]
              ])
            ]),
            u("div", Dd, [
              A[35] || (A[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              FA(u("textarea", {
                "onUpdate:modelValue": A[10] || (A[10] = (g) => r.expectedResult = g),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [dr, r.expectedResult]
              ])
            ]),
            u("div", Od, [
              A[39] || (A[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", Md, [
                A[36] || (A[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                A[37] || (A[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", Rd, "📡 네트워크 요청 (" + b(r.networkLogs.length) + "건)", 1),
                u("span", Nd, "📋 프론트 로그 (" + b(r.allLogs.length) + "건)", 1),
                u("span", {
                  class: Y(["chip", r.backendLogsState === "ok" ? "chip--ok" : r.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + b(r.backendLogsState === "ok" ? r.backendLogs.length + "건" : r.backendLogsState === "loading" ? "로딩 중" : r.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : r.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = r.context) != null && c.camera ? (w(), Q("span", Pd, "📍 카메라 위치")) : _("", !0),
                A[38] || (A[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (a = r.context) != null && a.user ? (w(), Q("span", Vd, "👤 " + b(r.context.user.username), 1)) : _("", !0)
              ])
            ])
          ], 64)) : _("", !0),
          r.activeTab === "logs" ? (w(), Q(R, { key: 1 }, [
            u("div", Gd, [
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "front" }]),
                onClick: A[11] || (A[11] = (g) => r.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "backend" }]),
                onClick: A[12] || (A[12] = (g) => r.logSource = "backend")
              }, [
                A[40] || (A[40] = X(" 백엔드 ", -1)),
                r.backendLogsState === "loading" ? (w(), Q("span", Xd, "⟳")) : r.backendLogsState === "error" ? (w(), Q("span", Jd, "!")) : _("", !0)
              ], 2)
            ]),
            r.logSource === "front" ? (w(), Q("div", Wd, [
              u("div", Yd, [
                A[41] || (A[41] = X(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", jd, [
                  u("label", Zd, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[13] || (A[13] = (g) => r.showError = g)
                    }, null, 512), [
                      [DA, r.showError]
                    ]),
                    X(" 오류 (" + b(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", zd, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[14] || (A[14] = (g) => r.showWarn = g)
                    }, null, 512), [
                      [DA, r.showWarn]
                    ]),
                    X(" 경고 (" + b(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", qd, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[15] || (A[15] = (g) => r.showLog = g)
                    }, null, 512), [
                      [DA, r.showLog]
                    ]),
                    X(" 로그 (" + b(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", $d, [
                (w(!0), Q(R, null, $(n.filteredLogs, (g, m) => (w(), Q("div", {
                  key: m,
                  class: Y(["log-item", `log-item--${g.level}`])
                }, [
                  u("span", Ag, b(g.time.slice(11)), 1),
                  u("span", eg, b(g.level), 1),
                  u("span", tg, b(g.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (w(), Q("div", sg, "표시할 로그가 없습니다")) : _("", !0)
              ])
            ])) : _("", !0),
            r.logSource === "backend" ? (w(), Q("div", rg, [
              u("div", ng, [
                A[42] || (A[42] = X(" 백엔드 서버 로그 ", -1)),
                u("div", og, [
                  u("label", ig, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[16] || (A[16] = (g) => r.showBEError = g)
                    }, null, 512), [
                      [DA, r.showBEError]
                    ]),
                    X(" ERROR (" + b(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", lg, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[17] || (A[17] = (g) => r.showBEWarn = g)
                    }, null, 512), [
                      [DA, r.showBEWarn]
                    ]),
                    X(" WARN (" + b(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", ag, [
                    FA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[18] || (A[18] = (g) => r.showBEInfo = g)
                    }, null, 512), [
                      [DA, r.showBEInfo]
                    ]),
                    X(" INFO (" + b(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              r.backendLogsState === "loading" ? (w(), Q("div", cg, "백엔드 로그 가져오는 중...")) : r.backendLogsState === "skipped" ? (w(), Q("div", fg, [
                A[43] || (A[43] = X(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: A[19] || (A[19] = (...g) => n.fetchBackendLogs && n.fetchBackendLogs(...g))
                }, "그래도 가져오기")
              ])) : r.backendLogsState === "error" ? (w(), Q("div", ug, "백엔드 로그 조회 실패 (인증 확인)")) : (w(), Q("div", Bg, [
                (w(!0), Q(R, null, $(n.filteredBackendLogs, (g, m) => (w(), Q("div", {
                  key: m,
                  class: Y(["log-item", `log-item--${g.level.toLowerCase()}`])
                }, [
                  u("span", dg, b(g.time.slice(11)), 1),
                  u("span", gg, b(g.level), 1),
                  u("span", hg, b(g.logger), 1),
                  u("span", pg, b(g.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (w(), Q("div", wg, "표시할 로그가 없습니다")) : _("", !0)
              ]))
            ])) : _("", !0)
          ], 64)) : _("", !0),
          r.activeTab === "network" ? (w(), Q("div", Qg, [
            A[51] || (A[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", Cg, [
              (w(!0), Q(R, null, $(n.reversedNetwork, (g, m) => {
                var S;
                return w(), Q(R, { key: m }, [
                  u("div", {
                    class: Y(["net-item", g.error || g.status >= 400 ? "net-item--error" : ""]),
                    onClick: (G) => n.toggleNetDetail(m)
                  }, [
                    u("span", {
                      class: Y(["net-status", n.statusClass(g.status)])
                    }, b(g.status), 3),
                    u("span", Ug, b(g.method), 1),
                    u("span", Fg, b(g.url), 1),
                    u("span", mg, b(g.duration) + "ms", 1),
                    u("span", xg, b((S = g.time) == null ? void 0 : S.slice(11, 19)), 1)
                  ], 10, bg),
                  r.expandedNet === m ? (w(), Q("div", yg, [
                    g.params ? (w(), Q("div", vg, [
                      A[44] || (A[44] = u("b", null, "Params:", -1)),
                      A[45] || (A[45] = X()),
                      u("code", null, b(g.params), 1)
                    ])) : _("", !0),
                    g.requestBody ? (w(), Q("div", Eg, [
                      A[46] || (A[46] = u("b", null, "Request:", -1)),
                      A[47] || (A[47] = X()),
                      u("code", null, b(g.requestBody), 1)
                    ])) : _("", !0),
                    g.responseBody ? (w(), Q("div", Hg, [
                      A[48] || (A[48] = u("b", null, "Response:", -1)),
                      A[49] || (A[49] = X()),
                      u("code", null, b(g.responseBody), 1)
                    ])) : _("", !0),
                    g.error ? (w(), Q("div", Ig, [
                      A[50] || (A[50] = u("b", null, "Error:", -1)),
                      X(" " + b(g.error), 1)
                    ])) : _("", !0)
                  ])) : _("", !0)
                ], 64);
              }), 128)),
              r.networkLogs.length === 0 ? (w(), Q("div", _g, "기록된 요청이 없습니다")) : _("", !0)
            ])
          ])) : _("", !0),
          r.activeTab === "state" ? (w(), Q(R, { key: 3 }, [
            u("div", Lg, [
              A[52] || (A[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", Sg, [
                (w(!0), Q(R, null, $(((f = r.context) == null ? void 0 : f.mutationLog) || [], (g, m) => (w(), Q("div", {
                  key: m,
                  class: "log-item"
                }, [
                  u("span", Kg, b(g.time), 1),
                  u("span", Tg, b(g.type), 1),
                  g.payload !== null ? (w(), Q("span", kg, b(n.formatPayload(g.payload)), 1)) : _("", !0)
                ]))), 128)),
                (h = (B = r.context) == null ? void 0 : B.mutationLog) != null && h.length ? _("", !0) : (w(), Q("div", Dg, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", Og, [
              A[54] || (A[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", Mg, [
                (w(!0), Q(R, null, $(((C = r.context) == null ? void 0 : C.routeHistory) || [], (g, m) => (w(), Q("div", {
                  key: m,
                  class: "route-item"
                }, [
                  u("span", Rg, b(g.time), 1),
                  u("span", Ng, b(g.from), 1),
                  A[53] || (A[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", Pg, b(g.to), 1)
                ]))), 128)),
                (y = (U = r.context) == null ? void 0 : U.routeHistory) != null && y.length ? _("", !0) : (w(), Q("div", Vg, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (I = r.context) != null && I.storage && Object.keys(r.context.storage).length ? (w(), Q("div", Gg, [
              A[55] || (A[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", Xg, [
                (w(!0), Q(R, null, $(r.context.storage, (g, m) => (w(), Q("div", {
                  key: m,
                  class: "env-row"
                }, [
                  u("span", null, b(m), 1),
                  u("span", null, b(g), 1)
                ]))), 128))
              ])
            ])) : _("", !0),
            (x = r.context) != null && x.cesiumPerf ? (w(), Q("div", Jg, [
              A[61] || (A[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", Wg, [
                u("div", Yg, [
                  A[56] || (A[56] = u("span", null, "Primitives", -1)),
                  u("span", null, b(r.context.cesiumPerf.primitives), 1)
                ]),
                u("div", jg, [
                  A[57] || (A[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, b(r.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", Zg, [
                  A[58] || (A[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, b(r.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", zg, [
                  A[59] || (A[59] = u("span", null, "Shadows", -1)),
                  u("span", null, b(r.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", qg, [
                  A[60] || (A[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, b(r.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : _("", !0)
          ], 64)) : _("", !0),
          r.activeTab === "env" ? (w(), Q(R, { key: 4 }, [
            r.context ? (w(), Q("div", Ah, [
              r.context.user ? (w(), Q("div", eh, [
                A[66] || (A[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", th, [
                  A[63] || (A[63] = u("span", null, "아이디", -1)),
                  u("span", null, b(r.context.user.username), 1)
                ]),
                r.context.user.roles.length ? (w(), Q("div", sh, [
                  A[64] || (A[64] = u("span", null, "권한", -1)),
                  u("span", null, b(r.context.user.roles.join(", ")), 1)
                ])) : _("", !0),
                r.context.user.exp ? (w(), Q("div", rh, [
                  A[65] || (A[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, b(r.context.user.exp), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", nh, [
                A[72] || (A[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", oh, [
                  A[67] || (A[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, b(r.context.menus.headerName), 1)
                ]),
                u("div", ih, [
                  A[68] || (A[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, b(r.context.menus.subMenuName), 1)
                ]),
                u("div", lh, [
                  A[69] || (A[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.leftMenus)), 1)
                ]),
                u("div", ah, [
                  A[70] || (A[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.openPanels)), 1)
                ]),
                u("div", ch, [
                  A[71] || (A[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", fh, [
                A[75] || (A[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", uh, [
                  A[73] || (A[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, b(r.context.activeData.mapType), 1)
                ]),
                u("div", Bh, [
                  A[74] || (A[74] = u("span", null, "지형", -1)),
                  u("span", null, b(r.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", dh, [
                  u("span", null, "데이터셋 (" + b(r.context.activeData.datasets.length) + ")", 1),
                  u("span", gh, [
                    r.context.activeData.datasets.length ? _("", !0) : (w(), Q("span", hh, "없음")),
                    (w(!0), Q(R, null, $(r.context.activeData.datasets, (g) => (w(), Q("span", {
                      key: g.layerId,
                      class: "env-tag"
                    }, b(g._displayName), 1))), 128))
                  ])
                ]),
                u("div", ph, [
                  u("span", null, "3D 타일 (" + b(r.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", wh, [
                    r.context.activeData.threeDTiles.length ? _("", !0) : (w(), Q("span", Qh, "없음")),
                    (w(!0), Q(R, null, $(r.context.activeData.threeDTiles, (g) => (w(), Q("span", {
                      key: g.threeDTilesId || g.sourceId,
                      class: "env-tag"
                    }, b(g._displayName), 1))), 128))
                  ])
                ]),
                r.context.activeData.autoPlacement.length ? (w(), Q("div", Ch, [
                  u("span", null, "배치안 (" + b(r.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", bh, [
                    (w(!0), Q(R, null, $(r.context.activeData.autoPlacement, (g) => (w(), Q("span", {
                      key: g.sourceId,
                      class: "env-tag"
                    }, b(g._displayName), 1))), 128))
                  ])
                ])) : _("", !0),
                r.context.activeData.topicMaps.length ? (w(), Q("div", Uh, [
                  u("span", null, "주제도 (" + b(r.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Fh, [
                    (w(!0), Q(R, null, $(r.context.activeData.topicMaps, (g) => (w(), Q("span", {
                      key: g.key,
                      class: "env-tag"
                    }, b(g._displayName), 1))), 128))
                  ])
                ])) : _("", !0)
              ]),
              u("div", mh, [
                A[76] || (A[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", xh, [
                  (w(!0), Q(R, null, $(r.context.recentEvents.slice(0, 30), (g, m) => (w(), Q("div", {
                    key: m,
                    class: "event-item"
                  }, [
                    u("span", yh, b(g.time), 1),
                    u("span", vh, b(g.type), 1)
                  ]))), 128)),
                  r.context.recentEvents.length ? _("", !0) : (w(), Q("div", Eh, "기록된 이벤트 없음"))
                ])
              ]),
              r.context.camera ? (w(), Q("div", Hh, [
                A[81] || (A[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", Ih, [
                  A[77] || (A[77] = u("span", null, "경도", -1)),
                  u("span", null, b(r.context.camera.longitude), 1)
                ]),
                u("div", _h, [
                  A[78] || (A[78] = u("span", null, "위도", -1)),
                  u("span", null, b(r.context.camera.latitude), 1)
                ]),
                u("div", Lh, [
                  A[79] || (A[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, b(r.context.camera.height), 1)
                ]),
                u("div", Sh, [
                  A[80] || (A[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, b(r.context.camera.heading) + "° / " + b(r.context.camera.pitch) + "°", 1)
                ])
              ])) : _("", !0),
              u("div", Kh, [
                A[87] || (A[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", Th, [
                  A[82] || (A[82] = u("span", null, "일시", -1)),
                  u("span", null, b(r.context.datetime), 1)
                ]),
                u("div", kh, [
                  A[83] || (A[83] = u("span", null, "해상도", -1)),
                  u("span", null, b(r.context.screen.resolution) + " · 뷰포트 " + b(r.context.screen.viewport), 1)
                ]),
                r.context.memory ? (w(), Q("div", Dh, [
                  A[84] || (A[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, b(r.context.memory.usedMB) + "MB / " + b(r.context.memory.limitMB) + "MB", 1)
                ])) : _("", !0),
                r.context.connection ? (w(), Q("div", Oh, [
                  A[85] || (A[85] = u("span", null, "네트워크", -1)),
                  u("span", null, b(r.context.connection.effectiveType) + " · " + b(r.context.connection.downlink) + "Mbps", 1)
                ])) : _("", !0),
                u("div", Mh, [
                  A[86] || (A[86] = u("span", null, "언어", -1)),
                  u("span", null, b(r.context.browser.language), 1)
                ])
              ])
            ])) : (w(), Q("div", $g, [...A[62] || (A[62] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : _("", !0)
        ]),
        u("div", Rh, [
          n.serverEnabled ? (w(), Q("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: A[20] || (A[20] = (...g) => n.openViewer && n.openViewer(...g))
          }, "저장 목록")) : _("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: A[21] || (A[21] = (...g) => n.close && n.close(...g))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: A[22] || (A[22] = (...g) => n.copyToClipboard && n.copyToClipboard(...g)),
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
            X(" " + b(r.copyStatus), 1)
          ], 8, Nh),
          n.serverEnabled ? (w(), Q("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: A[23] || (A[23] = (...g) => n.saveToServer && n.saveToServer(...g)),
            disabled: r.isSaving || r.isCapturing
          }, [
            r.isSaving ? (w(), Q("span", Vh)) : _("", !0),
            X(" " + b(r.saveStatus), 1)
          ], 8, Ph)) : _("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: A[24] || (A[24] = (...g) => n.download && n.download(...g)),
            disabled: r.isCapturing
          }, " 다운로드 ", 8, Gh)
        ])
      ])
    ], 32)) : _("", !0)
  ]);
}
const Jh = /* @__PURE__ */ jo(fd, [["render", Xh], ["styles", [ad]], ["__scopeId", "data-v-0b6144ab"]]), _t = (e) => String(e ?? "").replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]);
function ct(e) {
  let A = _t(e);
  return A = A.replace(/`([^`]+)`/g, (t, s) => `<code>${s}</code>`), A = A.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"), A = A.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'), A = A.replace(/(^|[\s(])((?:[\w.-]+\/)+[\w.-]+\.(?:java|js|ts|tsx|jsx|vue|py|xml|yml|yaml|json|properties|gradle|sql|md|scss|css|html)(?::\d+)?)(?=$|[\s,)])/g, (t, s, r) => t.includes("<code>") ? t : `${s}<code class="p">${r}</code>`), A;
}
function Wh(e) {
  const A = String(e ?? "").replace(/\r\n?/g, `
`).trim();
  if (!A) return "";
  const t = [], s = A.split(`
`);
  let r = 0;
  const n = (l) => {
    l.length && t.push(`<p>${l.map(o).join("<br>")}</p>`), l.length = 0;
  }, o = (l) => {
    const c = l.match(/^([가-힣A-Za-z][가-힣A-Za-z ·/]{0,14}):\s+(.*)$/);
    return c ? `<b class="lbl">${_t(c[1])}:</b> ${ct(c[2])}` : ct(l);
  };
  let i = [];
  for (; r < s.length; ) {
    const l = s[r];
    if (/^```/.test(l)) {
      n(i);
      const a = l.slice(3).trim(), f = [];
      for (r++; r < s.length && !/^```/.test(s[r]); ) f.push(s[r++]);
      r++, t.push(`<pre class="code"${a ? ` data-lang="${_t(a)}"` : ""}>${_t(f.join(`
`))}</pre>`);
      continue;
    }
    const c = l.match(/^(#{1,4})\s+(.*)$/);
    if (c) {
      n(i), t.push(`<h${Math.min(6, c[1].length + 2)}>${ct(c[2])}</h${Math.min(6, c[1].length + 2)}>`), r++;
      continue;
    }
    if (/^\s*([-*•]|\d+[.)])\s+/.test(l)) {
      n(i);
      const a = /^\s*\d+[.)]\s+/.test(l), f = [];
      for (; r < s.length && /^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) {
        let B = s[r].replace(/^\s*([-*•]|\d+[.)])\s+/, "");
        for (r++; r < s.length && /^\s{2,}\S/.test(s[r]) && !/^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) B += " " + s[r++].trim();
        f.push(`<li>${ct(B)}</li>`);
      }
      t.push(`<${a ? "ol" : "ul"}>${f.join("")}</${a ? "ol" : "ul"}>`);
      continue;
    }
    if (/^\s*$/.test(l)) {
      n(i), r++;
      continue;
    }
    if (/^(---|\*\*\*|___)\s*$/.test(l)) {
      n(i), t.push("<hr>"), r++;
      continue;
    }
    i.push(l), r++;
  }
  return n(i), `<div class="bf-md">${t.join("")}</div>`;
}
const Yh = [
  [/^✓/, "ok"],
  [/^✗/, "bad"],
  [/^▶/, "start"],
  [/^■/, "stop"],
  [/^↻/, "warn"],
  [/실패|오류|error/i, "bad"]
], jh = [
  [/^💬/, "say"],
  [/^✏️|^✏/, "edit"],
  [/^\$ /, "cmd"],
  [/^읽기 /, "read"],
  [/^검색 /, "grep"],
  [/^Claude 종료|^Claude 답변/, "end"]
];
function Zh(e) {
  const A = String(e ?? "").replace(/\r\n?/g, `
`);
  if (!A.trim()) return "";
  const t = [];
  for (const s of A.split(`
`)) {
    if (!s.trim()) continue;
    let r = s.match(/^(\d\d:\d\d:\d\d)\s\s(\s*)(.*)$/);
    if (r) {
      const [, n, o, i] = r, l = o.length >= 2;
      let c = "";
      for (const [a, f] of l ? jh : Yh) if (a.test(i)) {
        c = f;
        break;
      }
      t.push(`<div class="ln ${l ? "detail" : "stage"}${c ? ` ${c}` : ""}"><span class="ts">${n}</span><span class="tx">${ct(i)}</span></div>`);
      continue;
    }
    if (r = s.match(/^(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z?)\s+(INFO|WARN|ERROR|DEBUG)?\s*(.*)$/), r) {
      const [, n, o, i] = r;
      t.push(`<div class="ln srv ${(o || "info").toLowerCase()}"><span class="ts">${_t(n.slice(11, 19))}</span>${o ? `<span class="lvl">${o}</span>` : ""}<span class="tx">${ct(i)}</span></div>`);
      continue;
    }
    if (/^── .+ ──$/.test(s.trim())) {
      t.push(`<div class="ln group">${_t(s.trim().replace(/^── | ──$/g, ""))}</div>`);
      continue;
    }
    t.push(`<div class="ln cont"><span class="ts"></span><span class="tx">${ct(s)}</span></div>`);
  }
  return `<div class="bf-log">${t.join("")}</div>`;
}
const zh = `
.bf-md { line-height: 1.55; word-break: break-word; }
.bf-md p { margin: 0 0 8px; } .bf-md p:last-child { margin-bottom: 0; }
.bf-md ul, .bf-md ol { margin: 0 0 8px; padding-left: 20px; } .bf-md li { margin: 2px 0; }
.bf-md h3, .bf-md h4, .bf-md h5, .bf-md h6 { margin: 10px 0 4px; font-size: 1em; font-weight: 600; }
.bf-md h3:first-child, .bf-md h4:first-child { margin-top: 0; }
.bf-md code { font-family: ui-monospace, Menlo, Consolas, monospace; font-size: 0.92em; padding: 1px 5px; border-radius: 4px; background: rgba(127,127,127,0.18); }
.bf-md code.p { color: #9fd0ff; } .light .bf-md code.p { color: #1d4ed8; }
.bf-md pre.code { margin: 6px 0 8px; padding: 8px 10px; border-radius: 6px; background: rgba(0,0,0,0.3); font: 11px/1.5 ui-monospace, Menlo, Consolas, monospace; white-space: pre-wrap; word-break: break-all; }
.light .bf-md pre.code { background: #1f2530; color: #d8dee6; }
.bf-md b.lbl { color: #ffd479; } .light .bf-md b.lbl { color: #9a3412; }
.bf-md hr { border: 0; border-top: 1px solid rgba(127,127,127,0.3); margin: 8px 0; }
.bf-md a { color: #8ab4ff; } .light .bf-md a { color: #1d4ed8; }
.bf-log { font: 11px/1.5 ui-monospace, Menlo, Consolas, monospace; }
.bf-log .ln { display: flex; gap: 8px; padding: 1px 4px; border-radius: 3px; white-space: pre-wrap; word-break: break-word; }
.bf-log .ts { flex: 0 0 60px; color: #6b7686; }
.bf-log .lvl { flex: 0 0 44px; font-weight: 600; }
.bf-log .stage { color: #e6ebf2; font-weight: 600; margin-top: 3px; } .light .bf-log .stage { color: #1f2937; }
.bf-log .stage.ok { color: #7fe0a4; } .bf-log .stage.bad { color: #ff9aa8; } .bf-log .stage.start { color: #8ec1ff; } .bf-log .stage.warn { color: #f2d16b; } .bf-log .stage.stop { color: #b9c3d0; }
.light .bf-log .stage.ok { color: #15803d; } .light .bf-log .stage.bad { color: #b91c1c; } .light .bf-log .stage.start { color: #1d4ed8; } .light .bf-log .stage.warn { color: #a16207; }
.bf-log .detail { color: #8b97a8; padding-left: 18px; } .light .bf-log .detail { color: #5b6573; }
.bf-log .detail.say { color: #c9d4e3; } .light .bf-log .detail.say { color: #374151; }
.bf-log .detail.edit { color: #ffd479; } .light .bf-log .detail.edit { color: #9a3412; }
.bf-log .detail.cmd { color: #9fd0ff; } .light .bf-log .detail.cmd { color: #1d4ed8; }
.bf-log .detail.end { color: #b9c3d0; font-style: italic; }
.bf-log .cont { color: #8b97a8; padding-left: 18px; }
.bf-log .group { margin: 6px 0 2px; color: #6ea0ff; font-weight: 600; }
.bf-log .srv.warn .lvl { color: #f2d16b; } .bf-log .srv.error { background: rgba(255,120,140,0.12); } .bf-log .srv.error .lvl { color: #ff9aa8; } .bf-log .srv.info .lvl { color: #6b7686; }
.bf-log code { background: rgba(127,127,127,0.18); border-radius: 3px; padding: 0 3px; }
.bf-diff { font: 11px/1.45 ui-monospace, Menlo, Consolas, monospace; }
.bf-diff .stat { margin: 0 0 8px; color: #8b97a8; white-space: pre-wrap; }
.bf-diff .file { border: 1px solid rgba(127,127,127,0.25); border-radius: 6px; margin-bottom: 8px; overflow: hidden; }
.bf-diff .file > summary { cursor: pointer; padding: 6px 10px; background: rgba(127,127,127,0.12); display: flex; gap: 10px; align-items: center; }
.bf-diff .file > summary code { background: transparent; padding: 0; }
.bf-diff .cnt { margin-left: auto; } .bf-diff .cnt .add { color: #7fe0a4; } .bf-diff .cnt .del { color: #ff9aa8; }
.bf-diff .body { overflow-x: auto; }
.bf-diff .dl { white-space: pre; padding: 0 10px; }
.bf-diff .dl.add { background: rgba(127,224,164,0.14); color: #b6f0cd; } .bf-diff .dl.del { background: rgba(255,154,168,0.14); color: #ffc4cc; }
.bf-diff .dl.hunk { color: #8ec1ff; background: rgba(110,160,255,0.1); margin: 4px 0; } .bf-diff .dl.meta { color: #6b7686; font-style: italic; }
.light .bf-diff .dl.add { background: #dcfce7; color: #166534; } .light .bf-diff .dl.del { background: #fee2e2; color: #991b1b; } .light .bf-diff .dl.hunk { color: #1d4ed8; background: #eff6ff; }
`, qh = ".brv-projects[data-v-91fdca04]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-91fdca04]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-91fdca04]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-91fdca04]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-91fdca04]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-91fdca04]{margin:0!important}.brv-ai__tools[data-v-91fdca04]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-91fdca04]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-91fdca04]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-91fdca04]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-91fdca04]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-91fdca04]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-91fdca04]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-91fdca04]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-91fdca04]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-91fdca04]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-91fdca04]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-91fdca04]{display:block;font-family:inherit}.brv-kg__col[data-v-91fdca04]{font-size:10px;fill:#889}.brv-kg__label[data-v-91fdca04]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-91fdca04]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-91fdca04]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-91fdca04]{opacity:.25}.brv-kg__edge[data-v-91fdca04]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-91fdca04]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-91fdca04]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-91fdca04],.brv-kg__edge--writes[data-v-91fdca04]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-91fdca04]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-91fdca04]{opacity:.12}.brv-shots[data-v-91fdca04]{margin:8px 0 6px}.brv-shots__title[data-v-91fdca04]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-91fdca04]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-91fdca04]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-91fdca04],.brv-shots__ph[data-v-91fdca04]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-91fdca04]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-91fdca04]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-91fdca04]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-91fdca04]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-91fdca04]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-91fdca04]{font-weight:600}.brv-ai__branch[data-v-91fdca04]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-91fdca04]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-91fdca04]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-91fdca04]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-91fdca04]{flex:1;margin:0}.brv-chat__btns[data-v-91fdca04]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-91fdca04]{white-space:nowrap}.brv-chat__input[data-v-91fdca04]{font-family:inherit}.brv-chat__text[data-v-91fdca04]{color:#d0d6de;white-space:normal}.brv-chat__msg--user .brv-chat__text[data-v-91fdca04]{color:#e6ebf2}.brv-notice[data-v-91fdca04]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-91fdca04]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-91fdca04]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-91fdca04]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-91fdca04],.brv-log-list[data-v-91fdca04],.brv-net-detail[data-v-91fdca04],.brv-text[data-v-91fdca04]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-91fdca04]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-91fdca04]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-91fdca04]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-91fdca04]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-91fdca04]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-91fdca04]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-91fdca04]:hover{color:#fff}.brv-body[data-v-91fdca04]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-91fdca04]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-91fdca04]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-91fdca04]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-91fdca04]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-91fdca04]:hover{background:#ffffff12}.brv-problem[data-v-91fdca04]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-91fdca04]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-91fdca04]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-91fdca04]:hover{color:#e74c3c}.brv-badge[data-v-91fdca04]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-91fdca04]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-91fdca04]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-91fdca04]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-91fdca04]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-91fdca04]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-91fdca04]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-91fdca04]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-91fdca04]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-91fdca04]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-91fdca04]{background:#7888992e;color:#89a}.brv-status-control[data-v-91fdca04]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-91fdca04]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-91fdca04]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-91fdca04]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-91fdca04]{width:11px;height:11px;border-width:2px}.brv-back[data-v-91fdca04]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-91fdca04]:hover{color:#fff}.brv-screenshot[data-v-91fdca04]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-91fdca04]{margin-bottom:16px}.brv-fix[data-v-91fdca04]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-91fdca04]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-91fdca04]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-91fdca04]{background:#e0f2fe;color:#075985}.brv-fix--ready[data-v-91fdca04]{background:#ccfbf1;color:#115e59}.brv-fix--merged[data-v-91fdca04]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-91fdca04]{background:#fee2e2;color:#991b1b}.brv-link[data-v-91fdca04]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-91fdca04]{margin-top:6px}.brv-fix-actions[data-v-91fdca04]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-91fdca04]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-91fdca04]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-91fdca04]{background:transparent;color:#2563eb}.brv-hint[data-v-91fdca04]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-91fdca04]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-91fdca04]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-91fdca04]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-91fdca04],.brv-logbox[data-v-91fdca04]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-91fdca04]{color:inherit}.brv-suggest[data-v-91fdca04]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-91fdca04]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-91fdca04]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-91fdca04]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-91fdca04]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-91fdca04]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-91fdca04]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-91fdca04]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-91fdca04]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-91fdca04]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-91fdca04]{color:#1e5bb8}.brv-chat__text[data-v-91fdca04]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-91fdca04]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-91fdca04]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-91fdca04]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-91fdca04]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-91fdca04]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-91fdca04]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-91fdca04]{margin-bottom:8px}.brv-field-label[data-v-91fdca04]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-91fdca04]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:normal;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-91fdca04]{display:flex;gap:4px}.brv-log-tab[data-v-91fdca04]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-91fdca04]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-91fdca04]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-91fdca04]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-91fdca04]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-91fdca04]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-91fdca04]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-91fdca04]:hover{background:#ffffff0f}.brv-filter-error[data-v-91fdca04]{color:#c06060}.brv-filter-warn[data-v-91fdca04]{color:#b09040}.brv-filter-log[data-v-91fdca04]{color:#589}.brv-log-list[data-v-91fdca04]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-91fdca04]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-91fdca04]:hover{background:#ffffff0a}.brv-log-item[data-v-91fdca04]:last-child{border-bottom:none}.brv-log-time[data-v-91fdca04]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-91fdca04]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-91fdca04]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-91fdca04]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-91fdca04]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-91fdca04]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-91fdca04]{color:#8ac;font-weight:600}.brv-log--error[data-v-91fdca04]{color:#e87070}.brv-log--warn[data-v-91fdca04]{color:#d4a84b}.brv-log--info[data-v-91fdca04]{color:#a8b8c8}.brv-log-empty[data-v-91fdca04]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-91fdca04]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-91fdca04]:hover{background:#ffffff0a}.brv-net-err[data-v-91fdca04]{background:#e74c3c0d}.brv-net-status[data-v-91fdca04]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-91fdca04]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-91fdca04]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-91fdca04],.st-5xx[data-v-91fdca04]{color:#e87070}.st-4xx[data-v-91fdca04]{color:#d4a84b}.st-3xx[data-v-91fdca04]{color:#8ac}.st-2xx[data-v-91fdca04]{color:#6c8}.brv-net-detail[data-v-91fdca04]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-91fdca04]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-91fdca04 .7s linear infinite}@keyframes brv-spin-91fdca04{to{transform:rotate(360deg)}}", $h = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  READY: "수정본 준비 · 아직 내보내지 않음(콘솔에서 PR·병합)",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  FAILED: "실패 · 진행 로그 확인"
}, Ap = { QUEUED: "대기", RUNNING: "수정중", READY: "준비", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패" }, ji = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], ep = {
  name: "BugfixViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      fmtCss: zh,
      STATUSES: ji,
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
      const A = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, s = 30, r = 22, n = 26, o = A.map((C) => e.nodes.filter((U) => C.layers.includes(U.layer))).map((C, U) => ({ ...A[U], ns: C })).filter((C) => C.ns.length), i = [], l = [];
      let c = 8;
      for (const C of o)
        l.push({ layer: C.layers[0], x: c, title: C.title }), C.ns.sort((U, y) => y.hit - U.hit || (y.score || 0) - (U.score || 0)), C.ns.forEach((U, y) => {
          const I = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          i.push({ ...U, x: c, y: r + y * s, w: t - n, h: 20, short: I });
        }), c += t;
      const a = new Map(i.map((C) => [C.id, C])), f = [];
      for (const C of e.edges) {
        const U = a.get(C.from), y = a.get(C.to);
        if (!U || !y || U === y) continue;
        const [I, x] = U.x <= y.x ? [U, y] : [y, U], g = I.x + I.w, m = I.y + I.h / 2, S = x.x, G = x.y + x.h / 2, nA = I.x === x.x ? `M${g},${m} C${g + 18},${m} ${S + I.w + 18},${G} ${S + I.w},${G}` : `M${g},${m} C${(g + S) / 2},${m} ${(g + S) / 2},${G} ${S},${G}`;
        f.push({ d: nA, rel: C.rel, from: C.from, to: C.to });
      }
      const B = r + Math.max(...o.map((C) => C.ns.length)) * s + 4;
      return { nodes: i, edges: f, cols: l, w: c + 4, h: B };
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
    previewPending() {
      var e, A;
      return ["QUEUED", "BUILDING", "STARTING"].includes((A = (e = this.detail) == null ? void 0 : e.preview) == null ? void 0 : A.status);
    },
    previewLabel() {
      var e, A;
      return { QUEUED: "대기", BUILDING: "빌드", STARTING: "시작" }[(A = (e = this.detail) == null ? void 0 : e.preview) == null ? void 0 : A.status] || "";
    },
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
    md(e) {
      return Wh(e);
    },
    logH(e) {
      return Zh(e);
    },
    async open(e) {
      var A, t, s, r, n, o;
      if (this.isOpen = !0, this.selected = null, this.detail = null, this.expanded = /* @__PURE__ */ new Set(), (A = this.kit) != null && A.projectInfo && (this.info = { ...await this.kit.projectInfo() }), !((s = (t = this.kit) == null ? void 0 : t.options) != null && s.adminKey) && ((n = this.info[(r = this.kit) == null ? void 0 : r.project]) == null ? void 0 : n.canFix) === !1) {
        const i = this.projects.find((l) => {
          var c;
          return ((c = this.info[l.key]) == null ? void 0 : c.canFix) !== !1;
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
      this.fixInProgress || this.deployPending || this.previewPending ? this._startFixPolling() : this._stopFixPolling();
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
      return ((A = ji.find((t) => t.value === e)) == null ? void 0 : A.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(e) {
      return $h[e || "none"] || e;
    },
    fixShort(e) {
      return Ap[e] || e;
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
    async startPreview() {
      if (this.detail) {
        this.fixBusy = !0;
        try {
          const e = await this.kit.api.previewStart(this.detail.bugReportId);
          this.detail = { ...this.detail, ...e }, this._startFixPolling();
        } catch (e) {
          this.showNotice("미리보기 실패", (e == null ? void 0 : e.message) || "실패했습니다.", "error");
        } finally {
          this.fixBusy = !1;
        }
      }
    },
    async refreshDetail() {
      var A;
      if (!this.detail) return;
      const e = this.detail.bugReportId;
      try {
        const t = this.detail.fixPrUrl && ["PR_OPENED", "FAILED"].includes(this.detail.fixStatus) ? await this.kit.api.fixSync(e) : this.fixInProgress || this.deployPending || this.previewPending ? await this.kit.api.fixState(e) : await this.kit.api.get(e);
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
        if (!this.detail || !(this.fixInProgress || this.deployPending || this.previewPending)) {
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
}, tp = { class: "bugfix-root" }, sp = { class: "brv-modal" }, rp = { class: "brv-header" }, np = { class: "brv-title" }, op = {
  key: 0,
  class: "brv-shortcut"
}, ip = {
  key: 0,
  class: "brv-projects"
}, lp = ["onClick"], ap = { class: "brv-body" }, cp = {
  key: 0,
  class: "brv-loading"
}, fp = {
  key: 1,
  class: "brv-empty"
}, up = {
  key: 2,
  class: "brv-list"
}, Bp = ["onClick"], dp = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, gp = { class: "brv-problem" }, hp = ["title"], pp = { class: "brv-meta" }, wp = ["onClick"], Qp = {
  key: 0,
  class: "brv-loading"
}, Cp = {
  key: 0,
  class: "brv-section"
}, bp = ["src"], Up = ["src", "alt"], Fp = { class: "brv-shots__bigcap" }, mp = { class: "brv-section" }, xp = { class: "brv-row" }, yp = { class: "brv-row" }, vp = { class: "brv-status-control" }, Ep = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Hp = ["value", "disabled"], Ip = ["value"], _p = { class: "brv-row" }, Lp = { class: "brv-selectable" }, Sp = { class: "brv-row" }, Kp = { class: "brv-selectable" }, Tp = { class: "brv-section brv-ai" }, kp = { class: "brv-ai__head" }, Dp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Op = {
  key: 1,
  class: "brv-fix-elapsed"
}, Mp = {
  key: 2,
  class: "brv-fix-elapsed"
}, Rp = {
  key: 3,
  class: "brv-ai__tools"
}, Np = ["disabled"], Pp = ["disabled"], Vp = {
  key: 0,
  class: "brv-ai__hint"
}, Gp = {
  key: 1,
  class: "brv-ai__hint"
}, Xp = {
  key: 2,
  class: "brv-ai__start"
}, Jp = ["disabled"], Wp = {
  key: 0,
  class: "brv-ai__meta"
}, Yp = ["href"], jp = {
  key: 1,
  class: "brv-ai__branch brv-selectable"
}, Zp = { class: "brv-ai__branch" }, zp = ["href"], qp = {
  key: 1,
  class: "brv-ai__hint"
}, $p = ["disabled"], Aw = ["title"], ew = ["innerHTML"], tw = {
  key: 2,
  class: "brv-kg",
  open: ""
}, sw = { class: "brv-kg__wrap" }, rw = ["viewBox"], nw = ["x"], ow = ["d"], iw = ["transform", "onMouseenter"], lw = ["width", "height", "fill"], aw = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, cw = {
  key: 3,
  class: "brv-shots"
}, fw = { class: "brv-shots__title" }, uw = { class: "brv-suggest__hint" }, Bw = { class: "brv-shots__strip" }, dw = ["onClick"], gw = ["src", "alt"], hw = {
  key: 1,
  class: "brv-shots__ph"
}, pw = ["open"], ww = { class: "brv-ai__count" }, Qw = ["innerHTML"], Cw = {
  key: 5,
  class: "brv-suggest"
}, bw = ["innerHTML"], Uw = ["disabled", "onClick"], Fw = { class: "brv-chat" }, mw = { class: "brv-chat__who" }, xw = ["innerHTML"], yw = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, vw = {
  key: 1,
  class: "brv-chat__compose"
}, Ew = ["disabled"], Hw = { class: "brv-chat__btns" }, Iw = ["disabled"], _w = ["disabled"], Lw = {
  key: 2,
  class: "brv-ai__hint"
}, Sw = {
  key: 2,
  class: "brv-section"
}, Kw = {
  key: 0,
  class: "brv-field"
}, Tw = ["innerHTML"], kw = {
  key: 1,
  class: "brv-field"
}, Dw = ["innerHTML"], Ow = {
  key: 2,
  class: "brv-field"
}, Mw = ["innerHTML"], Rw = {
  key: 3,
  class: "brv-section"
}, Nw = {
  key: 0,
  class: "brv-row"
}, Pw = { class: "brv-selectable" }, Vw = {
  key: 1,
  class: "brv-row"
}, Gw = { class: "brv-selectable" }, Xw = {
  key: 2,
  class: "brv-row"
}, Jw = { class: "brv-selectable" }, Ww = {
  key: 3,
  class: "brv-row"
}, Yw = { class: "brv-selectable" }, jw = {
  key: 4,
  class: "brv-row"
}, Zw = { class: "brv-selectable" }, zw = { class: "brv-section" }, qw = { class: "brv-label-row" }, $w = { class: "brv-log-tabs" }, A0 = ["onClick"], e0 = { class: "brv-log-filters" }, t0 = { class: "brv-filter-chip brv-filter-error" }, s0 = { class: "brv-filter-chip brv-filter-warn" }, r0 = { class: "brv-filter-chip brv-filter-log" }, n0 = { class: "brv-log-list" }, o0 = ["onClick"], i0 = { class: "brv-log-time brv-selectable" }, l0 = { class: "brv-log-lv" }, a0 = {
  key: 0,
  class: "brv-log-empty"
}, c0 = { class: "brv-log-filters" }, f0 = { class: "brv-filter-chip brv-filter-error" }, u0 = { class: "brv-filter-chip brv-filter-warn" }, B0 = { class: "brv-filter-chip brv-filter-log" }, d0 = { class: "brv-log-list" }, g0 = ["onClick"], h0 = { class: "brv-log-time brv-selectable" }, p0 = { class: "brv-log-lv" }, w0 = { class: "brv-log-logger brv-selectable" }, Q0 = {
  key: 0,
  class: "brv-log-empty"
}, C0 = { class: "brv-log-filters" }, b0 = { class: "brv-filter-chip brv-filter-error" }, U0 = { class: "brv-filter-chip brv-filter-log" }, F0 = { class: "brv-log-list" }, m0 = ["onClick"], x0 = { class: "brv-net-method brv-selectable" }, y0 = { class: "brv-net-dur brv-selectable" }, v0 = { class: "brv-log-time brv-selectable" }, E0 = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, H0 = { key: 0 }, I0 = { key: 1 }, _0 = { key: 2 }, L0 = {
  key: 3,
  class: "brv-log--error"
}, S0 = {
  key: 0,
  class: "brv-log-empty"
}, K0 = {
  key: 3,
  class: "brv-log-list"
}, T0 = ["onClick"], k0 = { class: "brv-log-time brv-selectable" }, D0 = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, O0 = {
  key: 0,
  class: "brv-log-empty"
};
function M0(e, A, t, s, r, n) {
  var o, i, l, c;
  return w(), Q("div", tp, [
    r.isOpen ? (w(), Q("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: A[22] || (A[22] = (a) => r.backdropPressed = a.target === a.currentTarget),
      onClick: A[23] || (A[23] = $t((a) => r.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", sp, [
        (w(), Wo(_u("style"), {
          textContent: b(r.fmtCss)
        }, null, 8, ["textContent"])),
        u("div", rp, [
          u("span", np, [
            A[24] || (A[24] = X(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (w(), Q("span", op, b(n.hotkey), 1)) : _("", !0)
          ]),
          n.viewProjects.length > 1 ? (w(), Q("span", ip, [
            (w(!0), Q(R, null, $(n.viewProjects, (a) => (w(), Q("button", {
              key: a.key,
              class: Y({ "brv-projects__on": r.project === a.key }),
              onClick: (f) => n.switchProject(a.key)
            }, b(a.label), 11, lp))), 128))
          ])) : _("", !0),
          u("button", {
            class: "brv-close",
            onClick: A[0] || (A[0] = (...a) => n.close && n.close(...a))
          }, "✕")
        ]),
        r.notice ? (w(), Q("div", {
          key: 0,
          class: Y(["brv-notice", `brv-notice--${r.notice.type}`])
        }, [
          u("b", null, b(r.notice.title), 1),
          X(" " + b(r.notice.message), 1)
        ], 2)) : _("", !0),
        u("div", ap, [
          r.selected ? (w(), Q(R, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: A[1] || (A[1] = (a) => r.selected = null)
            }, "← 목록"),
            r.detailLoading ? (w(), Q("div", Qp, [...A[26] || (A[26] = [
              u("span", { class: "brv-spin" }, null, -1),
              X(" 불러오는 중... ", -1)
            ])])) : r.detail ? (w(), Q(R, { key: 1 }, [
              r.detail.screenshot ? (w(), Q("div", Cp, [
                A[27] || (A[27] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: r.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, bp)
              ])) : _("", !0),
              r.bigShot ? (w(), Q("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: A[2] || (A[2] = (a) => r.bigShot = null)
              }, [
                u("img", {
                  src: r.shotUrls[r.bigShot.file],
                  alt: r.bigShot.name
                }, null, 8, Up),
                u("div", Fp, [
                  X(b(r.bigShot.name) + " · " + b(r.bigShot.label) + " ", 1),
                  A[28] || (A[28] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : _("", !0),
              u("div", mp, [
                A[33] || (A[33] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", xp, [
                  A[29] || (A[29] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(o = r.detail.severity) == null ? void 0 : o.toLowerCase()}`])
                  }, b(r.detail.severity), 3)
                ]),
                u("div", yp, [
                  A[30] || (A[30] = u("span", null, "상태", -1)),
                  u("span", vp, [
                    r.statusSaving ? (w(), Q("span", Ep)) : _("", !0),
                    u("select", {
                      class: Y(["brv-status-select", `brv-st--${(r.detail.status || "OPEN").toLowerCase()}`]),
                      value: r.detail.status || "OPEN",
                      disabled: r.statusSaving,
                      onChange: A[3] || (A[3] = (a) => n.changeStatus(a.target.value))
                    }, [
                      (w(!0), Q(R, null, $(r.STATUSES, (a) => (w(), Q("option", {
                        key: a.value,
                        value: a.value
                      }, b(a.label), 9, Ip))), 128))
                    ], 42, Hp)
                  ])
                ]),
                u("div", _p, [
                  A[31] || (A[31] = u("span", null, "보고자", -1)),
                  u("span", Lp, b(r.detail.reporter), 1)
                ]),
                u("div", Sp, [
                  A[32] || (A[32] = u("span", null, "일시", -1)),
                  u("span", Kp, b(n.formatDate(r.detail.insertDate)), 1)
                ])
              ]),
              u("div", Tp, [
                u("div", kp, [
                  A[35] || (A[35] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: Y(["brv-fix", `brv-fix--${(r.detail.fixStatus || "none").toLowerCase()}`])
                  }, b(n.fixLabel(r.detail.fixStatus)), 3),
                  r.fixBusy || n.fixInProgress ? (w(), Q("span", Dp)) : _("", !0),
                  n.fixInProgress && n.fixElapsed ? (w(), Q("span", Op, b(n.fixElapsed), 1)) : n.deployPending ? (w(), Q("span", Mp, [...A[34] || (A[34] = [
                    u("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    X(" 배포 중", -1)
                  ])])) : _("", !0),
                  r.detail.fixStatus && n.fixable ? (w(), Q("span", Rp, [
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy,
                      onClick: A[4] || (A[4] = (...a) => n.refreshDetail && n.refreshDetail(...a)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, Np),
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[5] || (A[5] = (...a) => n.requestFix && n.requestFix(...a)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, Pp)
                  ])) : _("", !0)
                ]),
                !r.detail.fixStatus && r.detail.tool ? (w(), Q("div", Vp, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !r.detail.fixStatus && !n.fixable ? (w(), Q("div", Gp, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : r.detail.fixStatus ? (w(), Q(R, { key: 3 }, [
                  r.detail.fixPrUrl || r.detail.fixBranch ? (w(), Q("div", Wp, [
                    r.detail.fixPrUrl ? (w(), Q("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: r.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + b(n.prNumber), 9, Yp)) : _("", !0),
                    r.detail.fixBranch ? (w(), Q("span", jp, b(r.detail.fixBranch), 1)) : _("", !0),
                    r.detail.fixVersion != null ? (w(), Q(R, { key: 2 }, [
                      u("span", Zp, "v" + b(r.detail.fixVersion), 1),
                      r.detail.preview ? (w(), Q(R, { key: 0 }, [
                        r.detail.preview.status === "UP" && r.detail.preview.url ? (w(), Q("a", {
                          key: 0,
                          class: "brv-link",
                          href: r.detail.preview.url,
                          target: "_blank",
                          rel: "noopener",
                          title: "이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)"
                        }, "미리보기 열기 ↗", 8, zp)) : n.previewPending ? (w(), Q("span", qp, [
                          A[37] || (A[37] = u("span", { class: "brv-spin brv-spin--sm" }, null, -1)),
                          X(" 미리보기 준비 중(" + b(n.previewLabel) + ")", 1)
                        ])) : r.detail.preview.canPreview && n.fixable ? (w(), Q("button", {
                          key: 2,
                          class: "brv-ai__tool",
                          disabled: r.fixBusy,
                          onClick: A[7] || (A[7] = (...a) => n.startPreview && n.startPreview(...a)),
                          title: "이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)"
                        }, "미리보기 띄우기", 8, $p)) : _("", !0),
                        r.detail.preview.status === "FAILED" ? (w(), Q("span", {
                          key: 3,
                          class: "brv-ai__hint",
                          title: r.detail.preview.error || ""
                        }, "미리보기 실패", 8, Aw)) : _("", !0)
                      ], 64)) : _("", !0)
                    ], 64)) : _("", !0)
                  ])) : _("", !0),
                  r.detail.fixSummary ? (w(), Q("div", {
                    key: 1,
                    class: "brv-ai__summary brv-selectable",
                    innerHTML: n.md(r.detail.fixSummary)
                  }, null, 8, ew)) : _("", !0),
                  n.kgLayout ? (w(), Q("details", tw, [
                    A[38] || (A[38] = u("summary", null, [
                      X("관련 기능·파일 "),
                      u("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    u("div", sw, [
                      (w(), Q("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: Is({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (w(!0), Q(R, null, $(n.kgLayout.cols, (a) => (w(), Q("text", {
                          key: "c" + a.layer,
                          x: a.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, b(a.title), 9, nw))), 128)),
                        (w(!0), Q(R, null, $(n.kgLayout.edges, (a, f) => (w(), Q("path", {
                          key: "e" + f,
                          d: a.d,
                          class: Y(["brv-kg__edge", "brv-kg__edge--" + a.rel, { "brv-kg__edge--dim": r.kgHover && a.from !== r.kgHover && a.to !== r.kgHover }])
                        }, null, 10, ow))), 128)),
                        (w(!0), Q(R, null, $(n.kgLayout.nodes, (a) => (w(), Q("g", {
                          key: a.id,
                          transform: `translate(${a.x},${a.y})`,
                          class: Y(["brv-kg__node", { "brv-kg__node--hit": a.hit, "brv-kg__node--dim": r.kgHover && r.kgHover !== a.id && !n.kgNbr(a.id) }]),
                          onMouseenter: (f) => r.kgHover = a.id,
                          onMouseleave: A[8] || (A[8] = (f) => r.kgHover = null)
                        }, [
                          u("title", null, b(a.label) + b(a.path ? `
` + a.path : "") + b(a.route ? `
` + a.route : "") + b(a.desc ? `
` + a.desc : ""), 1),
                          u("rect", {
                            width: a.w,
                            height: a.h,
                            rx: "4",
                            fill: n.kgColor(a.type)
                          }, null, 8, lw),
                          u("text", aw, b(a.short), 1)
                        ], 42, iw))), 128))
                      ], 12, rw))
                    ])
                  ])) : _("", !0),
                  n.fixShots.length ? (w(), Q("div", cw, [
                    u("div", fw, [
                      A[39] || (A[39] = X("화면 확인 ", -1)),
                      u("span", uw, b(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", Bw, [
                      (w(!0), Q(R, null, $(n.fixShots, (a) => (w(), Q("figure", {
                        key: a.file,
                        class: "brv-shots__item",
                        onClick: (f) => n.openShot(a)
                      }, [
                        r.shotUrls[a.file] ? (w(), Q("img", {
                          key: 0,
                          src: r.shotUrls[a.file],
                          alt: a.name
                        }, null, 8, gw)) : (w(), Q("div", hw, "…")),
                        u("figcaption", null, b(a.name.replace(/\.png$/i, "")), 1)
                      ], 8, dw))), 128))
                    ])
                  ])) : _("", !0),
                  r.detail.fixLog ? (w(), Q("details", {
                    key: 4,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      A[40] || (A[40] = X("진행 로그 ", -1)),
                      u("span", ww, b(n.logLineCount) + "줄", 1)
                    ]),
                    u("div", {
                      ref: "fixLogPre",
                      class: "brv-selectable brv-logbox",
                      innerHTML: n.logH(r.detail.fixLog)
                    }, null, 8, Qw)
                  ], 8, pw)) : _("", !0),
                  n.fixSuggestions.length ? (w(), Q("div", Cw, [
                    A[41] || (A[41] = u("div", { class: "brv-suggest__title" }, [
                      X("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (w(!0), Q(R, null, $(n.fixSuggestions, (a, f) => (w(), Q("div", {
                      key: f,
                      class: "brv-suggest__item"
                    }, [
                      u("span", {
                        class: "brv-suggest__text brv-selectable",
                        innerHTML: n.md(a)
                      }, null, 8, bw),
                      n.fixable ? (w(), Q("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: r.fixBusy || n.fixInProgress,
                        onClick: (B) => n.runSuggestion(a)
                      }, "실행", 8, Uw)) : _("", !0)
                    ]))), 128))
                  ])) : _("", !0),
                  u("div", Fw, [
                    (w(!0), Q(R, null, $(n.fixChat, (a, f) => (w(), Q("div", {
                      key: f,
                      class: Y(["brv-chat__msg", `brv-chat__msg--${a.role}`])
                    }, [
                      u("span", mw, b(a.role === "user" ? "나" : "AI"), 1),
                      u("div", {
                        class: "brv-chat__text brv-selectable",
                        innerHTML: n.md(a.text)
                      }, null, 8, xw)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (w(), Q("div", yw, [...A[42] || (A[42] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        X(" 생각 중…")
                      ], -1)
                    ])])) : _("", !0),
                    n.fixable ? (w(), Q("div", vw, [
                      FA(u("textarea", {
                        "onUpdate:modelValue": A[9] || (A[9] = (a) => r.chatInput = a),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: r.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          A[10] || (A[10] = Xi($t((a) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          A[11] || (A[11] = Xi($t((a) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, Ew), [
                        [dr, r.chatInput]
                      ]),
                      u("div", Hw, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[12] || (A[12] = (a) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, Iw),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[13] || (A[13] = (a) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, _w)
                      ])
                    ])) : _("", !0),
                    n.fixable ? (w(), Q("div", Lw, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : _("", !0)
                  ])
                ], 64)) : (w(), Q("div", Xp, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: r.fixBusy,
                    onClick: A[6] || (A[6] = (...a) => n.requestFix && n.requestFix(...a))
                  }, "AI 에게 수정 요청", 8, Jp),
                  A[36] || (A[36] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              r.detail.problem || r.detail.reproSteps || r.detail.expectedResult ? (w(), Q("div", Sw, [
                A[46] || (A[46] = u("div", { class: "brv-label" }, "내용", -1)),
                r.detail.problem ? (w(), Q("div", Kw, [
                  A[43] || (A[43] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.problem)
                  }, null, 8, Tw)
                ])) : _("", !0),
                r.detail.reproSteps ? (w(), Q("div", kw, [
                  A[44] || (A[44] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.reproSteps)
                  }, null, 8, Dw)
                ])) : _("", !0),
                r.detail.expectedResult ? (w(), Q("div", Ow, [
                  A[45] || (A[45] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.expectedResult)
                  }, null, 8, Mw)
                ])) : _("", !0)
              ])) : _("", !0),
              n.parsedContext ? (w(), Q("div", Rw, [
                A[52] || (A[52] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (w(), Q("div", Nw, [
                  A[47] || (A[47] = u("span", null, "카메라", -1)),
                  u("span", Pw, b(n.parsedContext.camera.longitude) + "°, " + b(n.parsedContext.camera.latitude) + "° · 고도 " + b(n.parsedContext.camera.height) + "m · H" + b(n.parsedContext.camera.heading) + "° P" + b(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : _("", !0),
                (i = n.parsedContext.menus) != null && i.header ? (w(), Q("div", Vw, [
                  A[48] || (A[48] = u("span", null, "상단 탭", -1)),
                  u("span", Gw, b(n.parsedContext.menus.header), 1)
                ])) : _("", !0),
                n.parsedContext.activeData ? (w(), Q("div", Xw, [
                  A[49] || (A[49] = u("span", null, "데이터셋", -1)),
                  u("span", Jw, b(((l = n.parsedContext.activeData.datasets) == null ? void 0 : l.map((a) => a._displayName).join(", ")) || "없음"), 1)
                ])) : _("", !0),
                (c = n.parsedContext.activeData) != null && c.terrain ? (w(), Q("div", Ww, [
                  A[50] || (A[50] = u("span", null, "지형", -1)),
                  u("span", Yw, b(n.parsedContext.activeData.terrain), 1)
                ])) : _("", !0),
                n.parsedContext.datetime ? (w(), Q("div", jw, [
                  A[51] || (A[51] = u("span", null, "발생 시각", -1)),
                  u("span", Zw, b(n.parsedContext.datetime), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", zw, [
                u("div", qw, [
                  A[53] || (A[53] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", $w, [
                    (w(!0), Q(R, null, $(n.logTabs, (a) => (w(), Q("button", {
                      key: a.id,
                      class: Y(["brv-log-tab", { active: r.logTab === a.id }]),
                      onClick: (f) => r.logTab = a.id
                    }, [
                      X(b(a.label) + " ", 1),
                      a.count ? (w(), Q("span", {
                        key: 0,
                        class: Y(["brv-log-tab-count", a.countClass])
                      }, b(a.count), 3)) : _("", !0)
                    ], 10, A0))), 128))
                  ])
                ]),
                r.logTab === "front" ? (w(), Q(R, { key: 0 }, [
                  u("div", e0, [
                    u("label", t0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[14] || (A[14] = (a) => r.showFE.error = a)
                      }, null, 512), [
                        [DA, r.showFE.error]
                      ]),
                      X(" 오류 (" + b(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", s0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[15] || (A[15] = (a) => r.showFE.warn = a)
                      }, null, 512), [
                        [DA, r.showFE.warn]
                      ]),
                      X(" 경고 (" + b(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", r0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[16] || (A[16] = (a) => r.showFE.log = a)
                      }, null, 512), [
                        [DA, r.showFE.log]
                      ]),
                      X(" 로그 (" + b(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", n0, [
                    (w(!0), Q(R, null, $(n.filteredFrontLogs, (a, f) => {
                      var B;
                      return w(), Q("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${a.level}`]),
                        onClick: (h) => n.toggleExpand("f" + f)
                      }, [
                        u("span", i0, b((B = a.time) == null ? void 0 : B.slice(11, 23)), 1),
                        u("span", l0, b(a.level), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("f" + f) }])
                        }, b(a.message), 3)
                      ], 10, o0);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (w(), Q("div", a0, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                r.logTab === "back" ? (w(), Q(R, { key: 1 }, [
                  u("div", c0, [
                    u("label", f0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[17] || (A[17] = (a) => r.showBE.error = a)
                      }, null, 512), [
                        [DA, r.showBE.error]
                      ]),
                      X(" ERROR (" + b(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", u0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[18] || (A[18] = (a) => r.showBE.warn = a)
                      }, null, 512), [
                        [DA, r.showBE.warn]
                      ]),
                      X(" WARN (" + b(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", B0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[19] || (A[19] = (a) => r.showBE.info = a)
                      }, null, 512), [
                        [DA, r.showBE.info]
                      ]),
                      X(" INFO (" + b(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", d0, [
                    (w(!0), Q(R, null, $(n.filteredBackLogs, (a, f) => {
                      var B, h;
                      return w(), Q("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${(B = a.level) == null ? void 0 : B.toLowerCase()}`]),
                        onClick: (C) => n.toggleExpand("b" + f)
                      }, [
                        u("span", h0, b((h = a.time) == null ? void 0 : h.slice(11, 23)), 1),
                        u("span", p0, b(a.level), 1),
                        u("span", w0, b(n.shortLogger(a.logger)), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("b" + f) }])
                        }, b(a.message), 3)
                      ], 10, g0);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (w(), Q("div", Q0, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                r.logTab === "net" ? (w(), Q(R, { key: 2 }, [
                  u("div", C0, [
                    u("label", b0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[20] || (A[20] = (a) => r.showNet.error = a)
                      }, null, 512), [
                        [DA, r.showNet.error]
                      ]),
                      X(" 에러 (" + b(n.networkLogs.filter((a) => a.error || a.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", U0, [
                      FA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[21] || (A[21] = (a) => r.showNet.ok = a)
                      }, null, 512), [
                        [DA, r.showNet.ok]
                      ]),
                      X(" 성공 (" + b(n.networkLogs.filter((a) => !a.error && a.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", F0, [
                    (w(!0), Q(R, null, $(n.filteredNetLogs, (a, f) => {
                      var B;
                      return w(), Q("div", {
                        key: f,
                        class: Y(["brv-net-item", n.netClass(a)]),
                        onClick: (h) => n.toggleExpand("n" + f)
                      }, [
                        u("span", {
                          class: Y(["brv-net-status", n.statusClass(a.status)])
                        }, b(a.status || "ERR"), 3),
                        u("span", x0, b(a.method), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("n" + f) }])
                        }, b(a.url), 3),
                        u("span", y0, b(a.duration) + "ms", 1),
                        u("span", v0, b((B = a.time) == null ? void 0 : B.slice(11, 19)), 1)
                      ], 10, m0);
                    }), 128)),
                    (w(!0), Q(R, null, $(n.filteredNetLogs, (a, f) => (w(), Q(R, {
                      key: "d" + f
                    }, [
                      r.expanded.has("n" + f) ? (w(), Q("div", E0, [
                        a.params ? (w(), Q("div", H0, [
                          A[54] || (A[54] = u("b", null, "Params:", -1)),
                          X(" " + b(a.params), 1)
                        ])) : _("", !0),
                        a.requestBody ? (w(), Q("div", I0, [
                          A[55] || (A[55] = u("b", null, "Request:", -1)),
                          X(" " + b(a.requestBody), 1)
                        ])) : _("", !0),
                        a.responseBody ? (w(), Q("div", _0, [
                          A[56] || (A[56] = u("b", null, "Response:", -1)),
                          X(" " + b(a.responseBody), 1)
                        ])) : _("", !0),
                        a.error ? (w(), Q("div", L0, [
                          A[57] || (A[57] = u("b", null, "Error:", -1)),
                          X(" " + b(a.error), 1)
                        ])) : _("", !0)
                      ])) : _("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (w(), Q("div", S0, "표시할 요청 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                r.logTab === "mutation" ? (w(), Q("div", K0, [
                  (w(!0), Q(R, null, $(n.parsedMutationLog, (a, f) => (w(), Q("div", {
                    key: f,
                    class: "brv-log-item",
                    onClick: (B) => n.toggleExpand("m" + f)
                  }, [
                    u("span", k0, b(a.time), 1),
                    u("span", {
                      class: Y(["brv-log-msg brv-mutation brv-selectable", { expanded: r.expanded.has("m" + f) }])
                    }, b(a.type), 3),
                    a.payload !== null ? (w(), Q("span", D0, b(n.formatPayload(a.payload)), 1)) : _("", !0)
                  ], 8, T0))), 128)),
                  n.parsedMutationLog.length === 0 ? (w(), Q("div", O0, "기록된 mutation 없음")) : _("", !0)
                ])) : _("", !0)
              ])
            ], 64)) : _("", !0)
          ], 64)) : (w(), Q(R, { key: 0 }, [
            r.loading ? (w(), Q("div", cp, [...A[25] || (A[25] = [
              u("span", { class: "brv-spin" }, null, -1),
              X(" 불러오는 중... ", -1)
            ])])) : r.list.length === 0 ? (w(), Q("div", fp, "저장된 리포트가 없습니다.")) : (w(), Q("div", up, [
              (w(!0), Q(R, null, $(r.list, (a) => {
                var f;
                return w(), Q("div", {
                  key: a.bugReportId,
                  class: "brv-item",
                  onClick: (B) => n.openDetail(a.bugReportId)
                }, [
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(f = a.severity) == null ? void 0 : f.toLowerCase()}`])
                  }, b(a.severity), 3),
                  u("span", {
                    class: Y(["brv-status", `brv-st--${(a.status || "OPEN").toLowerCase()}`])
                  }, b(n.statusLabel(a.status)), 3),
                  a.tool ? (w(), Q("span", dp, "도구")) : _("", !0),
                  u("span", gp, b(a.problem || "(내용 없음)"), 1),
                  a.fixStatus ? (w(), Q("span", {
                    key: 1,
                    class: Y(["brv-fix", `brv-fix--${a.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(a.fixStatus)
                  }, b(n.fixShort(a.fixStatus)), 11, hp)) : _("", !0),
                  u("span", pp, b(a.reporter) + " · " + b(n.formatDate(a.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: $t((B) => n.deleteReport(a.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, wp)
                ], 8, Bp);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : _("", !0)
  ]);
}
const R0 = /* @__PURE__ */ jo(ep, [["render", M0], ["styles", [qh]], ["__scopeId", "data-v-91fdca04"]]);
function yn({ endpoint: e, project: A, apiKey: t, user: s, adminKey: r }) {
  const n = e ? `${String(e).replace(/\/+$/, "")}/p/${A}` : "", o = !!n;
  async function i(l, c, a, { query: f, blob: B } = {}) {
    if (!o) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const h = { Accept: "application/json" };
    a !== void 0 && (h["Content-Type"] = "application/json"), t && (h["X-Bugfix-Key"] = t), r && (h["X-Bugfix-Admin"] = r);
    const C = typeof s == "function" ? s() : s;
    C && (h["X-Bugfix-User"] = String(C));
    const U = f ? "?" + new URLSearchParams(f).toString() : "", y = await fetch(n + c + U, { method: l, headers: h, body: a === void 0 ? void 0 : JSON.stringify(a) });
    if (B) {
      if (!y.ok) throw Object.assign(new Error(`HTTP ${y.status}`), { status: y.status });
      return URL.createObjectURL(await y.blob());
    }
    if (y.status === 204) return null;
    const I = await y.text();
    let x = null;
    try {
      x = I ? JSON.parse(I) : null;
    } catch {
    }
    if (!y.ok) {
      const g = new Error((x == null ? void 0 : x.message) || `HTTP ${y.status}`);
      throw g.status = y.status, g;
    }
    return (x == null ? void 0 : x.content) ?? x;
  }
  return {
    enabled: o,
    base: n,
    info: () => i("GET", "/info"),
    save: (l) => i("POST", "/reports", l),
    list: () => i("GET", "/reports"),
    get: (l) => i("GET", `/reports/${l}`),
    fixState: (l) => i("GET", `/reports/${l}/fix`),
    setStatus: (l, c) => i("PATCH", `/reports/${l}/status`, { status: c }),
    remove: (l) => i("DELETE", `/reports/${l}`),
    requestFix: (l) => i("POST", `/reports/${l}/request-fix`),
    fixChat: (l, c, a) => i("POST", `/reports/${l}/fix-chat`, { message: c, mode: a }),
    fixSync: (l) => i("POST", `/reports/${l}/fix-sync`),
    previewStart: (l) => i("POST", `/reports/${l}/preview`),
    previewStop: (l) => i("DELETE", `/reports/${l}/preview`),
    /** 이 신고와 관련된 지식 그래프 부분 { nodes, edges, available } */
    knowledge: (l) => i("GET", `/reports/${l}/knowledge`),
    /** 스크린샷 → object URL (img src 로 쓰고, 다 쓰면 URL.revokeObjectURL) */
    shot: (l) => i("GET", `/shots/${String(l).split("/").map(encodeURIComponent).join("/")}`, void 0, { blob: !0 })
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
const Zr = (e, A) => KA.fromClientRect(e, A.getBoundingClientRect()), N0 = (e) => {
  const A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  const s = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), r = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new KA(0, 0, s, r);
};
var zr = function(e) {
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
}, Zi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", P0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Gs = 0; Gs < Zi.length; Gs++)
  P0[Zi.charCodeAt(Gs)] = Gs;
var zi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", As = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Xs = 0; Xs < zi.length; Xs++)
  As[zi.charCodeAt(Xs)] = Xs;
var V0 = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, l;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), a = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = As[e.charCodeAt(s)], o = As[e.charCodeAt(s + 1)], i = As[e.charCodeAt(s + 2)], l = As[e.charCodeAt(s + 3)], a[r++] = n << 2 | o >> 4, a[r++] = (o & 15) << 4 | i >> 2, a[r++] = (i & 3) << 6 | l & 63;
  return c;
}, G0 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, X0 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, dt = 5, Zo = 11, vn = 2, J0 = Zo - dt, cc = 65536 >> dt, W0 = 1 << dt, En = W0 - 1, Y0 = 1024 >> dt, j0 = cc + Y0, Z0 = j0, z0 = 32, q0 = Z0 + z0, $0 = 65536 >> Zo, AQ = 1 << J0, eQ = AQ - 1, qi = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, tQ = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, sQ = function(e, A) {
  var t = V0(e), s = Array.isArray(t) ? X0(t) : new Uint32Array(t), r = Array.isArray(t) ? G0(t) : new Uint16Array(t), n = 24, o = qi(r, n / 2, s[4] / 2), i = s[5] === 2 ? qi(r, (n + s[4]) / 2) : tQ(s, Math.ceil((n + s[4]) / 4));
  return new rQ(s[0], s[1], s[2], s[3], o, i);
}, rQ = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> dt], t = (t << vn) + (A & En), this.data[t];
        if (A <= 65535)
          return t = this.index[cc + (A - 55296 >> dt)], t = (t << vn) + (A & En), this.data[t];
        if (A < this.highStart)
          return t = q0 - $0 + (A >> Zo), t = this.index[t], t += A >> dt & eQ, t = this.index[t], t = (t << vn) + (A & En), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), $i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", nQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Js = 0; Js < $i.length; Js++)
  nQ[$i.charCodeAt(Js)] = Js;
var oQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Al = 50, iQ = 1, fc = 2, uc = 3, lQ = 4, aQ = 5, el = 7, Bc = 8, tl = 9, Ge = 10, no = 11, sl = 12, oo = 13, cQ = 14, es = 15, io = 16, Ws = 17, Jt = 18, fQ = 19, rl = 20, lo = 21, Wt = 22, Hn = 23, Qt = 24, GA = 25, ts = 26, ss = 27, Ct = 28, uQ = 29, it = 30, BQ = 31, Ys = 32, js = 33, ao = 34, co = 35, fo = 36, ys = 37, uo = 38, gr = 39, hr = 40, In = 41, dc = 42, dQ = 43, gQ = [9001, 65288], gc = "!", Z = "×", Zs = "÷", Bo = sQ(oQ), me = [it, fo], go = [iQ, fc, uc, aQ], hc = [Ge, Bc], nl = [ss, ts], hQ = go.concat(hc), ol = [uo, gr, hr, ao, co], pQ = [es, oo], wQ = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], s = [], r = [];
  return e.forEach(function(n, o) {
    var i = Bo.get(n);
    if (i > Al ? (r.push(!0), i -= Al) : r.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return s.push(o), t.push(io);
    if (i === lQ || i === no) {
      if (o === 0)
        return s.push(o), t.push(it);
      var l = t[o - 1];
      return hQ.indexOf(l) === -1 ? (s.push(s[o - 1]), t.push(l)) : (s.push(o), t.push(it));
    }
    if (s.push(o), i === BQ)
      return t.push(A === "strict" ? lo : ys);
    if (i === dc || i === uQ)
      return t.push(it);
    if (i === dQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(ys) : t.push(it);
    t.push(i);
  }), [s, t, r];
}, _n = function(e, A, t, s) {
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
        for (var l = t; l <= s.length; ) {
          l++;
          var o = s[l];
          if (o === A)
            return !0;
          if (o !== Ge)
            break;
        }
      if (i !== Ge)
        break;
    }
  return !1;
}, il = function(e, A) {
  for (var t = e; t >= 0; ) {
    var s = A[t];
    if (s === Ge)
      t--;
    else
      return s;
  }
  return 0;
}, QQ = function(e, A, t, s, r) {
  if (t[s] === 0)
    return Z;
  var n = s - 1;
  if (Array.isArray(r) && r[n] === !0)
    return Z;
  var o = n - 1, i = n + 1, l = A[n], c = o >= 0 ? A[o] : 0, a = A[i];
  if (l === fc && a === uc)
    return Z;
  if (go.indexOf(l) !== -1)
    return gc;
  if (go.indexOf(a) !== -1 || hc.indexOf(a) !== -1)
    return Z;
  if (il(n, A) === Bc)
    return Zs;
  if (Bo.get(e[n]) === no || (l === Ys || l === js) && Bo.get(e[i]) === no || l === el || a === el || l === tl || [Ge, oo, es].indexOf(l) === -1 && a === tl || [Ws, Jt, fQ, Qt, Ct].indexOf(a) !== -1 || il(n, A) === Wt || _n(Hn, Wt, n, A) || _n([Ws, Jt], lo, n, A) || _n(sl, sl, n, A))
    return Z;
  if (l === Ge)
    return Zs;
  if (l === Hn || a === Hn)
    return Z;
  if (a === io || l === io)
    return Zs;
  if ([oo, es, lo].indexOf(a) !== -1 || l === cQ || c === fo && pQ.indexOf(l) !== -1 || l === Ct && a === fo || a === rl || me.indexOf(a) !== -1 && l === GA || me.indexOf(l) !== -1 && a === GA || l === ss && [ys, Ys, js].indexOf(a) !== -1 || [ys, Ys, js].indexOf(l) !== -1 && a === ts || me.indexOf(l) !== -1 && nl.indexOf(a) !== -1 || nl.indexOf(l) !== -1 && me.indexOf(a) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ss, ts].indexOf(l) !== -1 && (a === GA || [Wt, es].indexOf(a) !== -1 && A[i + 1] === GA) || // ( OP | HY ) × NU
  [Wt, es].indexOf(l) !== -1 && a === GA || // NU ×	(NU | SY | IS)
  l === GA && [GA, Ct, Qt].indexOf(a) !== -1)
    return Z;
  if ([GA, Ct, Qt, Ws, Jt].indexOf(a) !== -1)
    for (var f = n; f >= 0; ) {
      var B = A[f];
      if (B === GA)
        return Z;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if ([ss, ts].indexOf(a) !== -1)
    for (var f = [Ws, Jt].indexOf(l) !== -1 ? o : n; f >= 0; ) {
      var B = A[f];
      if (B === GA)
        return Z;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if (uo === l && [uo, gr, ao, co].indexOf(a) !== -1 || [gr, ao].indexOf(l) !== -1 && [gr, hr].indexOf(a) !== -1 || [hr, co].indexOf(l) !== -1 && a === hr || ol.indexOf(l) !== -1 && [rl, ts].indexOf(a) !== -1 || ol.indexOf(a) !== -1 && l === ss || me.indexOf(l) !== -1 && me.indexOf(a) !== -1 || l === Qt && me.indexOf(a) !== -1 || me.concat(GA).indexOf(l) !== -1 && a === Wt && gQ.indexOf(e[i]) === -1 || me.concat(GA).indexOf(a) !== -1 && l === Jt)
    return Z;
  if (l === In && a === In) {
    for (var h = t[n], C = 1; h > 0 && (h--, A[h] === In); )
      C++;
    if (C % 2 !== 0)
      return Z;
  }
  return l === Ys && a === js ? Z : Zs;
}, CQ = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = wQ(e, A.lineBreak), s = t[0], r = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (r = r.map(function(i) {
    return [GA, it, dc].indexOf(i) !== -1 ? ys : i;
  }));
  var o = A.wordBreak === "keep-all" ? n.map(function(i, l) {
    return i && e[l] >= 19968 && e[l] <= 40959;
  }) : void 0;
  return [s, r, o];
}, bQ = (
  /** @class */
  function() {
    function e(A, t, s, r) {
      this.codePoints = A, this.required = t === gc, this.start = s, this.end = r;
    }
    return e.prototype.slice = function() {
      return QA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), UQ = function(e, A) {
  var t = zr(e), s = CQ(t, A), r = s[0], n = s[1], o = s[2], i = t.length, l = 0, c = 0;
  return {
    next: function() {
      if (c >= i)
        return { done: !0, value: null };
      for (var a = Z; c < i && (a = QQ(t, n, r, ++c, o)) === Z; )
        ;
      if (a !== Z || c === i) {
        var f = new bQ(t, a, l, c);
        return l = c, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const FQ = 1, mQ = 2, Ot = 4, ll = 8, vr = 10, al = 47, ds = 92, xQ = 9, yQ = 32, zs = 34, Yt = 61, vQ = 35, EQ = 36, HQ = 37, qs = 39, $s = 40, jt = 41, IQ = 95, NA = 45, _Q = 33, LQ = 60, SQ = 62, KQ = 64, TQ = 91, kQ = 93, DQ = 61, OQ = 123, Ar = 63, MQ = 125, cl = 124, RQ = 126, NQ = 128, fl = 65533, Ln = 42, ft = 43, PQ = 44, VQ = 58, GQ = 59, vs = 46, XQ = 0, JQ = 8, WQ = 11, YQ = 14, jQ = 31, ZQ = 127, ce = -1, pc = 48, wc = 97, Qc = 101, zQ = 102, qQ = 117, $Q = 122, Cc = 65, bc = 69, Uc = 70, AC = 85, eC = 90, _A = (e) => e >= pc && e <= 57, tC = (e) => e >= 55296 && e <= 57343, bt = (e) => _A(e) || e >= Cc && e <= Uc || e >= wc && e <= zQ, sC = (e) => e >= wc && e <= $Q, rC = (e) => e >= Cc && e <= eC, nC = (e) => sC(e) || rC(e), oC = (e) => e >= NQ, er = (e) => e === vr || e === xQ || e === yQ, Er = (e) => nC(e) || oC(e) || e === IQ, ul = (e) => Er(e) || _A(e) || e === NA, iC = (e) => e >= XQ && e <= JQ || e === WQ || e >= YQ && e <= jQ || e === ZQ, Pe = (e, A) => e !== ds ? !1 : A !== vr, tr = (e, A, t) => e === NA ? Er(A) || Pe(A, t) : Er(e) ? !0 : !!(e === ds && Pe(e, A)), Sn = (e, A, t) => e === ft || e === NA ? _A(A) ? !0 : A === vs && _A(t) : _A(e === vs ? A : e), lC = (e) => {
  let A = 0, t = 1;
  (e[A] === ft || e[A] === NA) && (e[A] === NA && (t = -1), A++);
  const s = [];
  for (; _A(e[A]); )
    s.push(e[A++]);
  const r = s.length ? parseInt(QA(...s), 10) : 0;
  e[A] === vs && A++;
  const n = [];
  for (; _A(e[A]); )
    n.push(e[A++]);
  const o = n.length, i = o ? parseInt(QA(...n), 10) : 0;
  (e[A] === bc || e[A] === Qc) && A++;
  let l = 1;
  (e[A] === ft || e[A] === NA) && (e[A] === NA && (l = -1), A++);
  const c = [];
  for (; _A(e[A]); )
    c.push(e[A++]);
  const a = c.length ? parseInt(QA(...c), 10) : 0;
  return t * (r + i * Math.pow(10, -o)) * Math.pow(10, l * a);
}, aC = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, cC = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, fC = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, uC = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, BC = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, dC = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, gC = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, hC = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, pC = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, wC = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, QC = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, sr = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, CC = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, bC = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, UC = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, FC = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, mC = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, xC = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, yC = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, vC = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, ho = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class Fc {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(zr(A));
  }
  read() {
    const A = [];
    let t = this.consumeToken();
    for (; t !== ho; )
      A.push(t), t = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case zs:
        return this.consumeStringToken(zs);
      case vQ:
        const t = this.peekCodePoint(0), s = this.peekCodePoint(1), r = this.peekCodePoint(2);
        if (ul(t) || Pe(s, r)) {
          const h = tr(t, s, r) ? mQ : FQ;
          return { type: 5, value: this.consumeName(), flags: h };
        }
        break;
      case EQ:
        if (this.peekCodePoint(0) === Yt)
          return this.consumeCodePoint(), uC;
        break;
      case qs:
        return this.consumeStringToken(qs);
      case $s:
        return aC;
      case jt:
        return cC;
      case Ln:
        if (this.peekCodePoint(0) === Yt)
          return this.consumeCodePoint(), QC;
        break;
      case ft:
        if (Sn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case PQ:
        return fC;
      case NA:
        const n = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
        if (Sn(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (tr(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (o === NA && i === SQ)
          return this.consumeCodePoint(), this.consumeCodePoint(), UC;
        break;
      case vs:
        if (Sn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case al:
        if (this.peekCodePoint(0) === Ln)
          for (this.consumeCodePoint(); ; ) {
            let h = this.consumeCodePoint();
            if (h === Ln && (h = this.consumeCodePoint(), h === al))
              return this.consumeToken();
            if (h === ce)
              return this.consumeToken();
          }
        break;
      case VQ:
        return FC;
      case GQ:
        return mC;
      case LQ:
        if (this.peekCodePoint(0) === _Q && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), bC;
        break;
      case KQ:
        const l = this.peekCodePoint(0), c = this.peekCodePoint(1), a = this.peekCodePoint(2);
        if (tr(l, c, a))
          return { type: 7, value: this.consumeName() };
        break;
      case TQ:
        return xC;
      case ds:
        if (Pe(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case kQ:
        return yC;
      case DQ:
        if (this.peekCodePoint(0) === Yt)
          return this.consumeCodePoint(), BC;
        break;
      case OQ:
        return pC;
      case MQ:
        return wC;
      case qQ:
      case AC:
        const f = this.peekCodePoint(0), B = this.peekCodePoint(1);
        return f === ft && (bt(B) || B === Ar) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case cl:
        if (this.peekCodePoint(0) === Yt)
          return this.consumeCodePoint(), gC;
        if (this.peekCodePoint(0) === cl)
          return this.consumeCodePoint(), dC;
        break;
      case RQ:
        if (this.peekCodePoint(0) === Yt)
          return this.consumeCodePoint(), hC;
        break;
      case ce:
        return ho;
    }
    return er(A) ? (this.consumeWhiteSpace(), vC) : _A(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : Er(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: QA(A) };
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
    for (; bt(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    let s = !1;
    for (; t === Ar && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), s = !0;
    if (s) {
      const n = parseInt(QA(...A.map((i) => i === Ar ? pc : i)), 16), o = parseInt(QA(...A.map((i) => i === Ar ? Uc : i)), 16);
      return { type: 30, start: n, end: o };
    }
    const r = parseInt(QA(...A), 16);
    if (this.peekCodePoint(0) === NA && bt(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      const n = [];
      for (; bt(t) && n.length < 6; )
        n.push(t), t = this.consumeCodePoint();
      const o = parseInt(QA(...n), 16);
      return { type: 30, start: r, end: o };
    } else
      return { type: 30, start: r, end: r };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === $s ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === $s ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce)
      return { type: 22, value: "" };
    const t = this.peekCodePoint(0);
    if (t === qs || t === zs) {
      const s = this.consumeStringToken(this.consumeCodePoint());
      return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === jt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), sr);
    }
    for (; ; ) {
      const s = this.consumeCodePoint();
      if (s === ce || s === jt)
        return { type: 22, value: QA(...A) };
      if (er(s))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === jt ? (this.consumeCodePoint(), { type: 22, value: QA(...A) }) : (this.consumeBadUrlRemnants(), sr);
      if (s === zs || s === qs || s === $s || iC(s))
        return this.consumeBadUrlRemnants(), sr;
      if (s === ds)
        if (Pe(s, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), sr;
      else
        A.push(s);
    }
  }
  consumeWhiteSpace() {
    for (; er(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === jt || A === ce)
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
      if (r === vr)
        return this._value.splice(0, s), CC;
      if (r === ds) {
        const n = this._value[s + 1];
        n !== ce && n !== void 0 && (n === vr ? (t += this.consumeStringSlice(s), s = -1, this._value.shift()) : Pe(r, n) && (t += this.consumeStringSlice(s), t += QA(this.consumeEscapedCodePoint()), s = -1));
      }
      s++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let t = Ot, s = this.peekCodePoint(0);
    for ((s === ft || s === NA) && A.push(this.consumeCodePoint()); _A(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0);
    let r = this.peekCodePoint(1);
    if (s === vs && _A(r))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ll; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0), r = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((s === bc || s === Qc) && ((r === ft || r === NA) && _A(n) || _A(r)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ll; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [lC(A), t];
  }
  consumeNumericToken() {
    const [A, t] = this.consumeNumber(), s = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (tr(s, r, n)) {
      const o = this.consumeName();
      return { type: 15, number: A, flags: t, unit: o };
    }
    return s === HQ ? (this.consumeCodePoint(), { type: 16, number: A, flags: t }) : { type: 17, number: A, flags: t };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (bt(A)) {
      let t = QA(A);
      for (; bt(this.peekCodePoint(0)) && t.length < 6; )
        t += QA(this.consumeCodePoint());
      er(this.peekCodePoint(0)) && this.consumeCodePoint();
      const s = parseInt(t, 16);
      return s === 0 || tC(s) || s > 1114111 ? fl : s;
    }
    return A === ce ? fl : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const t = this.consumeCodePoint();
      if (ul(t))
        A += QA(t);
      else if (Pe(t, this.peekCodePoint(0)))
        A += QA(this.consumeEscapedCodePoint());
      else
        return this.reconsumeCodePoint(t), A;
    }
  }
}
class Lt {
  constructor(A) {
    this._tokens = A;
  }
  static create(A) {
    const t = new Fc();
    return t.write(A), new Lt(t.read());
  }
  static parseValue(A) {
    return Lt.create(A).parseComponentValue();
  }
  static parseValues(A) {
    return Lt.create(A).parseComponentValues();
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
      if (s.type === 32 || HC(s, A))
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
    return typeof A > "u" ? ho : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const Ce = (e) => e.type === 15, UA = (e) => e.type === 17, j = (e) => e.type === 20, EC = (e) => e.type === 0, po = (e, A) => j(e) && e.value === A, mc = (e) => e.type !== 31, IA = (e) => e.type !== 31 && e.type !== 4, be = (e) => {
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
}, HC = (e, A) => A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3, ze = (e) => e.type === 17 || e.type === 15, fA = (e) => e.type === 16 || ze(e), IC = (e) => e.type === 18 && e.name === "calc", _C = (e, A = 0) => {
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
        flags: Ot
      };
  } catch {
    return null;
  }
  return null;
}, xc = (e) => e.length > 1 ? [e[0], e[1]] : [e[0]], HA = {
  type: 17,
  number: 0,
  flags: Ot
}, zo = {
  type: 16,
  number: 50,
  flags: Ot
}, Xe = {
  type: 16,
  number: 100,
  flags: Ot
}, rs = (e, A, t) => {
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
}, yc = "deg", vc = "grad", Ec = "rad", Hc = "turn", Mt = {
  name: "angle",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case yc:
          return Math.PI * A.number / 180;
        case vc:
          return Math.PI / 200 * A.number;
        case Ec:
          return A.number;
        case Hc:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Ic = (e) => e.type === 15 && (e.unit === yc || e.unit === vc || e.unit === Ec || e.unit === Hc), _c = (e) => {
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
}, ht = (e) => (e[0].type === 20 ? e[0].value : "unknown") === "from", pA = (e, A, t) => Math.min(Math.max(e, A), t), PA = (e, A) => [
  e[0] * A[0] + e[1] * A[1] + e[2] * A[2],
  e[3] * A[0] + e[4] * A[1] + e[5] * A[2],
  e[6] * A[0] + e[7] * A[1] + e[8] * A[2]
], LC = (e) => se(pA(Math.round(e[0] * 255), 0, 255), pA(Math.round(e[1] * 255), 0, 255), pA(Math.round(e[2] * 255), 0, 255), pA(e[3], 0, 1)), qo = ([e, A, t, s]) => {
  const r = pt([e, A, t]);
  return se(pA(Math.round(r[0] * 255), 0, 255), pA(Math.round(r[1] * 255), 0, 255), pA(Math.round(r[2] * 255), 0, 255), s);
}, Ss = (e) => {
  const A = qe([e[0], e[1], e[2]]);
  return qo([A[0], A[1], A[2], e[3]]);
}, SC = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for lab()");
  const [t, s, r, n] = qr(A), o = pt(qe(en([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, KC = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for oklab()");
  const [t, s, r, n] = qr(A), o = pt(qe(An([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, TC = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for oklch()");
  const [t, s, r, n] = Kc(A), o = pt(qe(An($r([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, kC = (e, A) => {
  if (ht(A.filter(IA)))
    throw new Error("Relative color not supported for lch()");
  const [t, s, r, n] = Sc(A), o = pt(qe(en($r([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, Lc = (e, A) => {
  const t = A.filter(IA), [s, r, n, o] = t, i = (s.type === 17 ? ZA(s.number) : Mt.parse(e, s)) / (Math.PI * 2), l = fA(r) ? r.number / 100 : 0, c = fA(n) ? n.number / 100 : 0, a = typeof o < "u" && fA(o) ? z(o, 1) : 1;
  return [i, l, c, a];
}, Bl = (e, A) => {
  if (ht(A))
    throw new Error("Relative color not supported for hsl()");
  const [t, s, r, n] = Lc(e, A), o = kc([t, s, r]);
  return se(o[0] * 255, o[1] * 255, o[2] * 255, s === 0 ? 1 : n);
}, Sc = (e) => {
  const A = e.filter(IA), t = fA(A[0]) ? A[0].number : 0, s = fA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, qr = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : UA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : UA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Kc = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : UA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : UA(A[1]) ? A[1].number : 0, r = UA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Tc = (e) => PA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], e), $o = (e) => PA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], e), Kn = (e, A, t) => (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e), kc = ([e, A, t]) => {
  if (A === 0)
    return [t * 255, t * 255, t * 255];
  const s = t <= 0.5 ? t * (A + 1) : t + A - t * A, r = t * 2 - s, n = Kn(r, s, e + 1 / 3), o = Kn(r, s, e), i = Kn(r, s, e - 1 / 3);
  return [n, o, i];
}, $r = ([e, A, t]) => (A < 0 && (A = 0), isNaN(t) && (t = 0), [e, A * Math.cos(t * Math.PI / 180), A * Math.sin(t * Math.PI / 180)]), An = (e) => {
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
}, en = (e) => {
  const A = (e[0] + 16) / 116, t = e[1] / 500 + A, s = A - e[2] / 200, r = 24389 / 27, n = 24 / 116, o = [
    (t > n ? t ** 3 : (116 * t - 16) / r) * 0.3457 / 0.3585,
    e[0] > 8 ? A ** 3 : e[0] / r,
    (s > n ? s ** 3 : (116 * s - 16) / r) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return $o([o[0], o[1], o[2]]);
}, DC = (e, A) => {
  const t = A.filter(IA);
  if (t.length === 3) {
    const [s, r, n] = t.map(Ve), o = Qo([s / 255, r / 255, n / 255]), [i, l, c] = wo([o[0], o[1], o[2]]);
    return [i, l, c, 1];
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ve), i = Qo([s / 255, r / 255, n / 255]), [l, c, a] = wo([i[0], i[1], i[2]]);
    return [l, c, a, o];
  }
  return [0, 0, 0, 1];
}, OC = (e, A) => {
  const [t, s, r, n] = Lc(e, A), o = Qo(kc([t, s, r])), [i, l, c] = wo([o[0], o[1], o[2]]);
  return [i, l, c, n];
}, MC = (e, A) => {
  const [t, s, r, n] = qr(A), [o, i, l] = en([t, s, r]);
  return [o, i, l, n];
}, RC = (e, A) => {
  const [t, s, r, n] = Sc(A), [o, i, l] = en($r([t, s, r]));
  return [o, i, l, n];
}, NC = (e, A) => {
  const [t, s, r, n] = Kc(A), [o, i, l] = An($r([t, s, r]));
  return [o, i, l, n];
}, PC = (e, A) => {
  const [t, s, r, n] = qr(A), [o, i, l] = An([t, s, r]);
  return [o, i, l, n];
}, VC = (e) => $o([e[0], e[1], e[2]]), dl = (e) => e, GC = (e) => {
  const [A, t, s] = Tc([e[0], e[2], e[3]]);
  return [A, t, s, e[3]];
}, gl = (e) => Ss([e[0], e[1], e[2], e[3]]), XC = (e) => {
  const A = VC([e[0], e[1], e[2]]);
  return Ss([A[0], A[1], A[2], e[3]]);
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
], e), wo = (e) => PA([
  0.41239079926595934,
  0.357584339383878,
  0.1804807884018343,
  0.21263900587151027,
  0.715168678767756,
  0.07219231536073371,
  0.01933081871559182,
  0.11919477979462598,
  0.9505321522496607
], e), pt = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s > 31308e-7 ? t * (1.055 * s ** (1 / 2.4) - 0.055) : 12.92 * A;
}), Qo = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s <= 0.04045 ? A / 12.92 : t * ((s + 0.055) / 1.055) ** 2.4;
}), JC = (e) => {
  const [A, t, s] = pt(qe([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, WC = (e) => {
  const [A, t, s] = qe([e[0], e[1], e[2]]);
  return [
    pA(Math.round(A * 255), 0, 255),
    pA(Math.round(t * 255), 0, 255),
    pA(Math.round(s * 255), 0, 255),
    e[3]
  ];
}, YC = (e) => PA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], e), jC = (e) => PA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], e), ZC = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1;
  return A * t <= 0.04045 ? A / 12.92 : t * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), zC = (e) => pt(e), qC = (e) => {
  const A = ZC([e[0], e[1], e[2]]);
  return YC([A[0], A[1], A[2]]);
}, $C = (e) => {
  const [A, t, s] = zC(jC([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Ab = (e) => {
  const A = qC([e[0], e[1], e[2]]);
  return Ss([A[0], A[1], A[2], e[3]]);
}, eb = (e) => PA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], e), tb = (e) => PA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], e), sb = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, rb = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, nb = (e) => {
  const [A, t, s] = rb(eb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, ob = (e) => {
  const A = qe(tb(sb([e[0], e[1], e[2]])));
  return qo([A[0], A[1], A[2], e[3]]);
}, ib = (e) => PA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], e), lb = (e) => PA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], e), ab = (e) => e.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), cb = (e) => e.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), fb = (e) => {
  const A = ab([e[0], e[1], e[2]]);
  return $o(ib([A[0], A[1], A[2]]));
}, ub = (e) => {
  const [A, t, s] = cb(lb(Tc([e[0], e[1], e[2]])));
  return [A, t, s, e[3]];
}, Bb = (e) => {
  const A = fb([e[0], e[1], e[2]]);
  return Ss([A[0], A[1], A[2], e[3]]);
}, Hr = 1.09929682680944, Dc = 0.018053968510807, db = (e) => e.map(function(A) {
  return A < Dc * 4.5 ? A / 4.5 : Math.pow((A + Hr - 1) / Hr, 1 / 0.45);
}), gb = (e) => e.map(function(A) {
  return A >= Dc ? Hr * Math.pow(A, 0.45) - (Hr - 1) : 4.5 * A;
}), hb = (e) => PA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], e), pb = (e) => PA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], e), wb = (e) => {
  const A = db([e[0], e[1], e[2]]);
  return hb([A[0], A[1], A[2]]);
}, Qb = (e) => {
  const [A, t, s] = gb(pb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Cb = (e) => {
  const A = wb([e[0], e[1], e[2]]);
  return Ss([A[0], A[1], A[2], e[3]]);
}, je = {
  name: "color",
  parse: (e, A) => {
    if (A.type === 18) {
      const t = mb[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return t(e, A.values);
    }
    if (A.type === 5) {
      const [t, s, r, n] = Oc(A);
      return se(t, s, r, n);
    }
    if (A.type === 20) {
      const t = pe[A.value.toUpperCase()];
      if (typeof t < "u")
        return t;
    }
    return pe.TRANSPARENT;
  }
}, Oc = (e) => {
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
}, hl = (e, A) => {
  const t = A.filter(IA);
  if (ht(t))
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
}, bb = (e, A) => {
  const t = A.filter(IA), s = t[0].type === 20 ? t[0].value : "unknown";
  if (!ht(t)) {
    const n = s, o = pl[n];
    if (typeof o > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const i = UA(t[1]) ? t[1].number : 0, l = UA(t[2]) ? t[2].number : 0, c = UA(t[3]) ? t[3].number : 0, a = t.length > 4 && t[4].type === 6 && t[4].value === "/" && UA(t[5]) ? t[5].number : 1;
    return o([i, l, c, a]);
  } else {
    const n = (x, g) => {
      if (UA(g))
        return g.number;
      const m = (G) => G === "r" || G === "x" ? 0 : G === "g" || G === "y" ? 1 : 2;
      if (j(g)) {
        const G = m(g.value);
        return x[G];
      }
      const S = (G) => {
        const nA = G.filter(IA);
        let xA = "(";
        for (const uA of nA)
          xA += uA.type === 18 && uA.name === "calc" ? S(uA.values) : UA(uA) ? uA.number : uA.type === 6 || j(uA) ? uA.value : "";
        return xA += ")", xA;
      };
      if (g.type === 18) {
        const G = g.values.filter(IA);
        if (g.name === "calc") {
          const nA = S(G).replace(/r|x/, x[0].toString()).replace(/g|y/, x[1].toString()).replace(/b|z/, x[2].toString());
          return new Function("return " + nA)();
        }
      }
      return null;
    }, o = t[1].type === 18 ? t[1].name : j(t[1]) || t[1].type === 5 ? "rgb" : "unknown", i = j(t[2]) ? t[2].value : "unknown";
    let l = t[1].type === 18 ? t[1].values : j(t[1]) ? [t[1]] : [];
    if (j(t[1])) {
      if (typeof pe[t[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const g = St(e, t[1].value), m = 255 & g, S = 255 & g >> 8, G = 255 & g >> 16;
        l = [
          { type: 17, number: 255 & g >> 24, flags: 1 },
          { type: 17, number: G, flags: 1 },
          { type: 17, number: S, flags: 1 },
          { type: 17, number: m > 1 ? m / 255 : m, flags: 1 }
        ];
      }
    } else if (t[1].type === 5) {
      const [x, g, m, S] = Oc(t[1]);
      l = [
        { type: 17, number: x, flags: 1 },
        { type: 17, number: g, flags: 1 },
        { type: 17, number: m, flags: 1 },
        { type: 17, number: S > 1 ? S / 255 : S, flags: 1 }
      ];
    }
    if (l.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (i === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = Ub[o], a = Fb[i], f = pl[i];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    if (typeof a > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    const B = c(e, l), h = a(B), C = n(h, t[3]), U = n(h, t[4]), y = n(h, t[5]), I = t.length > 6 && t[6].type === 6 && t[6].value === "/" && UA(t[7]) ? t[7].number : 1;
    if (C === null || U === null || y === null)
      throw new Error("Invalid relative color in color() function");
    return f([C, U, y, I]);
  }
}, pl = {
  srgb: LC,
  "srgb-linear": qo,
  "display-p3": Ab,
  "a98-rgb": ob,
  "prophoto-rgb": Bb,
  xyz: gl,
  "xyz-d50": XC,
  "xyz-d65": gl,
  rec2020: Cb
}, Ub = {
  rgb: DC,
  hsl: OC,
  lab: MC,
  lch: RC,
  oklab: PC,
  oklch: NC
}, Fb = {
  srgb: JC,
  "srgb-linear": WC,
  "display-p3": $C,
  "a98-rgb": nb,
  "prophoto-rgb": ub,
  xyz: dl,
  "xyz-d50": GC,
  "xyz-d65": dl,
  rec2020: Qb
}, mb = {
  hsl: Bl,
  hsla: Bl,
  rgb: hl,
  rgba: hl,
  lch: kC,
  oklch: TC,
  oklab: KC,
  lab: SC,
  color: bb
}, St = (e, A) => je.parse(e, Lt.create(A).parseComponentValue()), pe = {
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
}, xb = {
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
}, yb = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, tn = (e, A) => {
  const t = je.parse(e, A[0]), s = A[1];
  return s && fA(s) ? { color: t, stop: s } : { color: t, stop: null };
}, wl = (e, A) => {
  const t = e[0], s = e[e.length - 1];
  t.stop === null && (t.stop = HA), s.stop === null && (s.stop = Xe);
  const r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    const l = e[i].stop;
    if (l !== null) {
      const c = z(l, A);
      c > n ? r.push(c) : r.push(n), n = c;
    } else
      r.push(null);
  }
  let o = null;
  for (let i = 0; i < r.length; i++) {
    const l = r[i];
    if (l === null)
      o === null && (o = i);
    else if (o !== null) {
      const c = i - o, a = r[o - 1], f = (l - a) / (c + 1);
      for (let B = 1; B <= c; B++)
        r[o + B - 1] = f * B;
      o = null;
    }
  }
  return e.map(({ color: i }, l) => ({ color: i, stop: Math.max(Math.min(1, r[l] / A), 0) }));
}, vb = (e, A, t) => {
  const s = A / 2, r = t / 2, n = z(e[0], A) - s, o = r - z(e[1], t);
  return (Math.atan2(o, n) + Math.PI * 2) % (Math.PI * 2);
}, Eb = (e, A, t) => {
  const s = typeof e == "number" ? e : vb(e, A, t), r = Math.abs(A * Math.sin(s)) + Math.abs(t * Math.cos(s)), n = A / 2, o = t / 2, i = r / 2, l = Math.sin(s - Math.PI / 2) * i, c = Math.cos(s - Math.PI / 2) * i;
  return [r, n - c, n + c, o - l, o + l];
}, $A = (e, A) => Math.sqrt(e * e + A * A), Ql = (e, A, t, s, r) => [
  [0, 0],
  [0, A],
  [e, 0],
  [e, A]
].reduce((o, i) => {
  const [l, c] = i, a = $A(t - l, s - c);
  return (r ? a < o.optimumDistance : a > o.optimumDistance) ? {
    optimumCorner: i,
    optimumDistance: a
  } : o;
}, {
  optimumDistance: r ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, Hb = (e, A, t, s, r) => {
  let n = 0, o = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = o = Math.min(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - s)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (e.shape === 0)
        n = o = Math.min($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(A), Math.abs(A - s)), [l, c] = Ql(s, r, A, t, !0);
        n = $A(l - A, (c - t) / i), o = i * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = o = Math.max(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - s)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (e.shape === 0)
        n = o = Math.max($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(A), Math.abs(A - s)), [l, c] = Ql(s, r, A, t, !1);
        n = $A(l - A, (c - t) / i), o = i * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = z(e.size[0], s), o = e.size.length === 2 ? z(e.size[1], r) : n), [n, o];
}, Ib = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && i.value === "to") {
        t = _c(r);
        return;
      } else if (Ic(i)) {
        t = Mt.parse(e, i);
        return;
      }
    }
    const o = tn(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, rr = (e, A) => {
  let t = ZA(180);
  const s = [];
  return be(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = _c(r);
        return;
      } else if (Ic(i)) {
        t = (Mt.parse(e, i) + ZA(270)) % ZA(360);
        return;
      }
    }
    const o = tn(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, _b = (e, A) => {
  const t = ZA(180), s = [];
  let r = 1;
  const n = 0, o = 3, i = [];
  return be(A).forEach((l, c) => {
    const a = l[0];
    if (c === 0) {
      if (j(a) && a.value === "linear") {
        r = 1;
        return;
      } else if (j(a) && a.value === "radial") {
        r = 2;
        return;
      }
    }
    if (a.type === 18) {
      if (a.name === "from") {
        const f = je.parse(e, a.values[0]);
        s.push({ stop: HA, color: f });
      } else if (a.name === "to") {
        const f = je.parse(e, a.values[0]);
        s.push({ stop: Xe, color: f });
      } else if (a.name === "color-stop") {
        const f = a.values.filter(IA);
        if (f.length === 2) {
          const B = je.parse(e, f[1]), h = f[0];
          UA(h) && s.push({
            stop: { type: 16, number: h.number * 100, flags: h.flags },
            color: B
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + ZA(180)) % ZA(360),
    stops: s,
    type: r
  } : { size: o, shape: n, stops: s, position: i, type: r };
}, Mc = "closest-side", Rc = "farthest-side", Nc = "closest-corner", Pc = "farthest-corner", Vc = "circle", Gc = "ellipse", Xc = "cover", Jc = "contain", Lb = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let l = !0;
    if (i === 0) {
      let c = !1;
      l = o.reduce((a, f) => {
        if (c)
          if (j(f))
            switch (f.value) {
              case "center":
                return n.push(zo), a;
              case "top":
              case "left":
                return n.push(HA), a;
              case "right":
              case "bottom":
                return n.push(Xe), a;
            }
          else (fA(f) || ze(f)) && n.push(f);
        else if (j(f))
          switch (f.value) {
            case Vc:
              return t = 0, !1;
            case Gc:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case Mc:
              return s = 0, !1;
            case Xc:
            case Rc:
              return s = 1, !1;
            case Jc:
            case Nc:
              return s = 2, !1;
            case Pc:
              return s = 3, !1;
          }
        else if (ze(f) || fA(f))
          return Array.isArray(s) || (s = []), s.push(f), !1;
        return a;
      }, l);
    }
    if (l) {
      const c = tn(e, o);
      r.push(c);
    }
  }), {
    size: s,
    shape: t,
    stops: r,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, nr = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return be(A).forEach((o, i) => {
    let l = !0;
    if (i === 0 ? l = o.reduce((c, a) => {
      if (j(a))
        switch (a.value) {
          case "center":
            return n.push(zo), !1;
          case "top":
          case "left":
            return n.push(HA), !1;
          case "right":
          case "bottom":
            return n.push(Xe), !1;
        }
      else if (fA(a) || ze(a))
        return n.push(a), !1;
      return c;
    }, l) : i === 1 && (l = o.reduce((c, a) => {
      if (j(a))
        switch (a.value) {
          case Vc:
            return t = 0, !1;
          case Gc:
            return t = 1, !1;
          case Jc:
          case Mc:
            return s = 0, !1;
          case Rc:
            return s = 1, !1;
          case Nc:
            return s = 2, !1;
          case Xc:
          case Pc:
            return s = 3, !1;
        }
      else if (ze(a) || fA(a))
        return Array.isArray(s) || (s = []), s.push(a), !1;
      return c;
    }, l)), l) {
      const c = tn(e, o);
      r.push(c);
    }
  }), {
    size: s,
    shape: t,
    stops: r,
    position: n,
    type: 2
    /* CSSImageType.RADIAL_GRADIENT */
  };
}, Sb = (e) => e.type === 1, Kb = (e) => e.type === 2, Ai = {
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
      const t = Wc[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return t(e, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function Tb(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!Wc[e.name]);
}
const Wc = {
  "linear-gradient": Ib,
  "-moz-linear-gradient": rr,
  "-ms-linear-gradient": rr,
  "-o-linear-gradient": rr,
  "-webkit-linear-gradient": rr,
  "radial-gradient": Lb,
  "-moz-radial-gradient": nr,
  "-ms-radial-gradient": nr,
  "-o-radial-gradient": nr,
  "-webkit-radial-gradient": nr,
  "-webkit-gradient": _b
}, kb = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter((s) => IA(s) && Tb(s)).map((s) => Ai.parse(e, s));
  }
}, Db = {
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
}, Ob = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (e, A) => be(A).map((t) => t.map((s) => IC(s) ? _C(s, 0) : fA(s) ? s : null).filter((s) => s !== null)).map(xc)
}, Mb = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(j).map((s) => s.value).join(" ")).map(Rb)
}, Rb = (e) => {
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
var Kt;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(Kt || (Kt = {}));
const Nb = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (e, A) => be(A).map((t) => t.filter(Pb))
}, Pb = (e) => j(e) || fA(e), sn = (e) => ({
  name: `border-${e}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), Vb = sn("top"), Gb = sn("right"), Xb = sn("bottom"), Jb = sn("left"), rn = (e) => ({
  name: `border-radius-${e}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, t) => xc(t.filter(fA))
}), Wb = rn("top-left"), Yb = rn("top-right"), jb = rn("bottom-right"), Zb = rn("bottom-left"), nn = (e) => ({
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
}), zb = nn("top"), qb = nn("right"), $b = nn("bottom"), AU = nn("left"), on = (e) => ({
  name: `border-${e}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, t) => Ce(t) ? t.number : 0
}), eU = on("top"), tU = on("right"), sU = on("bottom"), rU = on("left"), nU = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, oU = {
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
}, iU = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | lU(s.value),
    0
    /* DISPLAY.NONE */
  )
}, lU = (e) => {
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
}, aU = {
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
}, cU = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var Ir;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Ir || (Ir = {}));
const fU = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "strict":
        return Ir.STRICT;
      case "normal":
      default:
        return Ir.NORMAL;
    }
  }
}, uU = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, Cl = (e, A) => j(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : fA(e) ? z(e, A) : A, BU = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : Ai.parse(e, A)
}, dU = {
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
}, Co = {
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
}, ln = (e) => ({
  name: `margin-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), gU = ln("top"), hU = ln("right"), pU = ln("bottom"), wU = ln("left"), QU = {
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
}, CU = {
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
}, an = (e) => ({
  name: `padding-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), bU = an("top"), UU = an("right"), FU = an("bottom"), mU = an("left"), xU = {
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
}, yU = {
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
}, vU = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && po(A[0], "none") ? [] : be(A).map((t) => {
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
}, EU = {
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
}, HU = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const t = SU[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return t(e, A.values);
    }
    return null;
  }
}, IU = (e, A) => {
  const t = A.filter(
    (s) => s.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((s) => s.number);
  return t.length === 6 ? t : null;
}, _U = (e, A) => {
  const t = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [s, r, {}, {}, n, o, {}, {}, {}, {}, {}, {}, i, l] = t;
  return t.length === 16 ? [s, r, n, o, i, l] : null;
}, LU = (e, A) => {
  if (A.length !== 1)
    return null;
  const t = A[0];
  let s = 0;
  if (t.type === 17 && t.number === 0)
    s = 0;
  else if (t.type === 15)
    s = Mt.parse(e, t);
  else
    return null;
  const r = Math.cos(s), n = Math.sin(s);
  return [r, n, -n, r, 0, 0];
}, SU = {
  matrix: IU,
  matrix3d: _U,
  rotate: LU
}, bl = {
  type: 16,
  number: 50,
  flags: Ot
}, KU = [bl, bl], TU = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    const t = A.filter(fA);
    return t.length !== 2 ? KU : [t[0], t[1]];
  }
}, kU = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? Mt.parse(e, A) * 180 / Math.PI : null
}, DU = {
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
var gs;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(gs || (gs = {}));
const OU = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-all":
        return gs.BREAK_ALL;
      case "keep-all":
        return gs.KEEP_ALL;
      case "normal":
      default:
        return gs.NORMAL;
    }
  }
}, MU = {
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
}, Yc = {
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
}, RU = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (e, A) => UA(A) ? A.number : 1
}, NU = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, PU = {
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
}, VU = {
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
}, GU = {
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
}, XU = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => j(A) && A.value === "auto" ? "auto" : Ce(A) ? A.number : "auto"
}, JU = {
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
}, WU = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, YU = {
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
}, jU = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.filter(j).map((t) => t.value)
}, ZU = {
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
}, hA = (e, A) => (e & A) !== 0, zU = {
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
}, qU = {
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
    const s = [], r = A.filter(mc);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = r[n + 1];
      if (o.type === 20) {
        const l = i && UA(i) ? i.number : 1;
        s.push({ counter: o.value, increment: l });
      }
    }
    return s;
  }
}, $U = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = [], s = A.filter(mc);
    for (let r = 0; r < s.length; r++) {
      const n = s[r], o = s[r + 1];
      if (j(n) && n.value !== "none") {
        const i = o && UA(o) ? o.number : 0;
        t.push({ counter: n.value, reset: i });
      }
    }
    return t;
  }
}, AF = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(Ce).map((t) => Yc.parse(e, t))
}, eF = {
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
    const s = [], r = A.filter(EC);
    if (r.length % 2 !== 0)
      return null;
    for (let n = 0; n < r.length; n += 2) {
      const o = r[n].value, i = r[n + 1].value;
      s.push({ open: o, close: i });
    }
    return s;
  }
}, Ul = (e, A, t) => {
  if (!e)
    return "";
  const s = e[Math.min(A, e.length - 1)];
  return s ? t ? s.open : s.close : "";
}, tF = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && po(A[0], "none") ? [] : be(A).map((t) => {
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
      po(o, "inset") ? s.inset = !0 : ze(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : r === 2 ? s.blur = o : s.spread = o, r++) : s.color = je.parse(e, o);
    }
    return s;
  })
}, sF = {
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
}, rF = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, nF = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (e, A) => Ce(A) ? A.number : 0
}, oF = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, iF = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | lF(s.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, lF = (e) => {
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
}, aF = {
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
class cF {
  constructor(A, t) {
    this.animationDuration = D(A, AF, t.animationDuration), this.backgroundClip = D(A, xb, t.backgroundClip), this.backgroundColor = D(A, yb, t.backgroundColor), this.backgroundImage = D(A, kb, t.backgroundImage), this.backgroundOrigin = D(A, Db, t.backgroundOrigin), this.backgroundPosition = D(A, Ob, t.backgroundPosition), this.backgroundRepeat = D(A, Mb, t.backgroundRepeat), this.backgroundSize = D(A, Nb, t.backgroundSize), this.borderTopColor = D(A, Vb, t.borderTopColor), this.borderRightColor = D(A, Gb, t.borderRightColor), this.borderBottomColor = D(A, Xb, t.borderBottomColor), this.borderLeftColor = D(A, Jb, t.borderLeftColor), this.borderTopLeftRadius = D(A, Wb, t.borderTopLeftRadius), this.borderTopRightRadius = D(A, Yb, t.borderTopRightRadius), this.borderBottomRightRadius = D(A, jb, t.borderBottomRightRadius), this.borderBottomLeftRadius = D(A, Zb, t.borderBottomLeftRadius), this.borderTopStyle = D(A, zb, t.borderTopStyle), this.borderRightStyle = D(A, qb, t.borderRightStyle), this.borderBottomStyle = D(A, $b, t.borderBottomStyle), this.borderLeftStyle = D(A, AU, t.borderLeftStyle), this.borderTopWidth = D(A, eU, t.borderTopWidth), this.borderRightWidth = D(A, tU, t.borderRightWidth), this.borderBottomWidth = D(A, sU, t.borderBottomWidth), this.borderLeftWidth = D(A, rU, t.borderLeftWidth), this.boxShadow = D(A, tF, t.boxShadow), this.color = D(A, nU, t.color), this.direction = D(A, oU, t.direction), this.display = D(A, iU, t.display), this.float = D(A, aU, t.cssFloat), this.fontFamily = D(A, JU, t.fontFamily), this.fontSize = D(A, WU, t.fontSize), this.fontStyle = D(A, ZU, t.fontStyle), this.fontVariant = D(A, jU, t.fontVariant), this.fontWeight = D(A, YU, t.fontWeight), this.letterSpacing = D(A, cU, t.letterSpacing), this.lineBreak = D(A, fU, t.lineBreak), this.lineHeight = D(A, uU, t.lineHeight), this.listStyleImage = D(A, BU, t.listStyleImage), this.listStylePosition = D(A, dU, t.listStylePosition), this.listStyleType = D(A, Co, t.listStyleType), this.marginTop = D(A, gU, t.marginTop), this.marginRight = D(A, hU, t.marginRight), this.marginBottom = D(A, pU, t.marginBottom), this.marginLeft = D(A, wU, t.marginLeft), this.opacity = D(A, RU, t.opacity);
    const s = D(A, QU, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = D(A, CU, t.overflowWrap), this.paddingTop = D(A, bU, t.paddingTop), this.paddingRight = D(A, UU, t.paddingRight), this.paddingBottom = D(A, FU, t.paddingBottom), this.paddingLeft = D(A, mU, t.paddingLeft), this.paintOrder = D(A, sF, t.paintOrder), this.position = D(A, yU, t.position), this.textAlign = D(A, xU, t.textAlign), this.textDecorationColor = D(A, NU, t.textDecorationColor ?? t.color), this.textDecorationLine = D(A, PU, t.textDecorationLine ?? t.textDecoration), this.textDecorationStyle = D(A, VU, t.textDecorationStyle), this.textDecorationThickness = D(A, GU, t.textDecorationThickness), this.textUnderlineOffset = D(A, XU, t.textUnderlineOffset), this.textShadow = D(A, vU, t.textShadow), this.textTransform = D(A, EU, t.textTransform), this.textOverflow = D(A, aF, t.textOverflow), this.transform = D(A, HU, t.transform), this.transformOrigin = D(A, TU, t.transformOrigin), this.rotate = D(A, kU, t.rotate), this.visibility = D(A, DU, t.visibility), this.webkitTextStrokeColor = D(A, rF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = D(A, nF, t.webkitTextStrokeWidth), this.webkitLineClamp = D(A, oF, t.webkitLineClamp), this.wordBreak = D(A, OU, t.wordBreak), this.zIndex = D(A, MU, t.zIndex), this.objectFit = D(A, iF, t.objectFit);
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
    return hA(
      this.display,
      4
      /* DISPLAY.INLINE */
    ) || hA(
      this.display,
      33554432
      /* DISPLAY.INLINE_BLOCK */
    ) || hA(
      this.display,
      268435456
      /* DISPLAY.INLINE_FLEX */
    ) || hA(
      this.display,
      536870912
      /* DISPLAY.INLINE_GRID */
    ) || hA(
      this.display,
      67108864
      /* DISPLAY.INLINE_LIST_ITEM */
    ) || hA(
      this.display,
      134217728
      /* DISPLAY.INLINE_TABLE */
    );
  }
}
class fF {
  constructor(A, t) {
    this.content = D(A, zU, t.content), this.quotes = D(A, eF, t.quotes);
  }
}
class Fl {
  constructor(A, t) {
    this.counterIncrement = D(A, qU, t.counterIncrement), this.counterReset = D(A, $U, t.counterReset);
  }
}
const D = (e, A, t) => {
  const s = new Fc(), r = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  s.write(r);
  const n = new Lt(s.read());
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
          return Mt.parse(e, n.parseComponentValue());
        case "color":
          return je.parse(e, n.parseComponentValue());
        case "image":
          return Ai.parse(e, n.parseComponentValue());
        case "length":
          const i = n.parseComponentValue();
          return ze(i) ? i : HA;
        case "length-percentage":
          const l = n.parseComponentValue();
          return fA(l) ? l : HA;
        case "time":
          return Yc.parse(e, n.parseComponentValue());
      }
      break;
  }
}, uF = "data-html2canvas-debug", BF = (e) => {
  switch (e.getAttribute(uF)) {
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
}, bo = (e, A) => {
  const t = BF(e);
  return t === 1 || A === t;
};
class Ue {
  constructor(A, t) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, bo(
      t,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new cF(A, window.getComputedStyle(t, null)), mo(t) && (this.styles.animationDuration.some((s) => s > 0) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none"), this.styles.rotate !== null && (t.style.rotate = "none")), this.bounds = Zr(this.context, t), bo(
      t,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
}
var dF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", ml = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ns = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var or = 0; or < ml.length; or++)
  ns[ml.charCodeAt(or)] = or;
var gF = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, l;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), a = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = ns[e.charCodeAt(s)], o = ns[e.charCodeAt(s + 1)], i = ns[e.charCodeAt(s + 2)], l = ns[e.charCodeAt(s + 3)], a[r++] = n << 2 | o >> 4, a[r++] = (o & 15) << 4 | i >> 2, a[r++] = (i & 3) << 6 | l & 63;
  return c;
}, hF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, pF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, gt = 5, ei = 11, Tn = 2, wF = ei - gt, jc = 65536 >> gt, QF = 1 << gt, kn = QF - 1, CF = 1024 >> gt, bF = jc + CF, UF = bF, FF = 32, mF = UF + FF, xF = 65536 >> ei, yF = 1 << wF, vF = yF - 1, xl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, EF = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, HF = function(e, A) {
  var t = gF(e), s = Array.isArray(t) ? pF(t) : new Uint32Array(t), r = Array.isArray(t) ? hF(t) : new Uint16Array(t), n = 24, o = xl(r, n / 2, s[4] / 2), i = s[5] === 2 ? xl(r, (n + s[4]) / 2) : EF(s, Math.ceil((n + s[4]) / 4));
  return new IF(s[0], s[1], s[2], s[3], o, i);
}, IF = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> gt], t = (t << Tn) + (A & kn), this.data[t];
        if (A <= 65535)
          return t = this.index[jc + (A - 55296 >> gt)], t = (t << Tn) + (A & kn), this.data[t];
        if (A < this.highStart)
          return t = mF - xF + (A >> ei), t = this.index[t], t += A >> gt & vF, t = this.index[t], t = (t << Tn) + (A & kn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), yl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", _F = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ir = 0; ir < yl.length; ir++)
  _F[yl.charCodeAt(ir)] = ir;
var LF = 1, Dn = 2, On = 3, vl = 4, El = 5, SF = 7, Hl = 8, Mn = 9, Rn = 10, Il = 11, _l = 12, Ll = 13, Sl = 14, Nn = 15, KF = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, TF = function() {
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
}, kF = HF(dF), YA = "×", Pn = "÷", DF = function(e) {
  return kF.get(e);
}, OF = function(e, A, t) {
  var s = t - 2, r = A[s], n = A[t - 1], o = A[t];
  if (n === Dn && o === On)
    return YA;
  if (n === Dn || n === On || n === vl || o === Dn || o === On || o === vl)
    return Pn;
  if (n === Hl && [Hl, Mn, Il, _l].indexOf(o) !== -1 || (n === Il || n === Mn) && (o === Mn || o === Rn) || (n === _l || n === Rn) && o === Rn || o === Ll || o === El || o === SF || n === LF)
    return YA;
  if (n === Ll && o === Sl) {
    for (; r === El; )
      r = A[--s];
    if (r === Sl)
      return YA;
  }
  if (n === Nn && o === Nn) {
    for (var i = 0; r === Nn; )
      i++, r = A[--s];
    if (i % 2 === 0)
      return YA;
  }
  return Pn;
}, MF = function(e) {
  var A = KF(e), t = A.length, s = 0, r = 0, n = A.map(DF);
  return {
    next: function() {
      if (s >= t)
        return { done: !0, value: null };
      for (var o = YA; s < t && (o = OF(A, n, ++s)) === YA; )
        ;
      if (o !== YA || s === t) {
        var i = TF.apply(null, A.slice(r, s));
        return r = s, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, RF = function(e) {
  for (var A = MF(e), t = [], s; !(s = A.next()).done; )
    s.value && t.push(s.value.slice());
  return t;
};
const NF = (e) => {
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
}, PF = (e) => {
  const A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  const t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const s = A.firstChild, r = zr(s.data).map((l) => QA(l));
  let n = 0, o = {};
  const i = r.every((l, c) => {
    t.setStart(s, n), t.setEnd(s, n + l.length);
    const a = t.getBoundingClientRect();
    n += l.length;
    const f = a.x > o.x || a.y > o.y;
    return o = a, c === 0 ? !0 : f;
  });
  return e.body.removeChild(A), i;
}, VF = () => typeof new Image().crossOrigin < "u", GF = () => typeof new XMLHttpRequest().responseType == "string", XF = (e) => {
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
}, Kl = (e) => e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255, JF = (e) => {
  const A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  const s = A.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, t, t);
  const r = new Image(), n = A.toDataURL();
  r.src = n;
  const o = Uo(t, t, 0, 0, r);
  return s.fillStyle = "red", s.fillRect(0, 0, t, t), Tl(o).then((i) => {
    s.drawImage(i, 0, 0);
    const l = s.getImageData(0, 0, t, t).data;
    s.fillStyle = "red", s.fillRect(0, 0, t, t);
    const c = e.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${t}px`, Kl(l) ? Tl(Uo(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then((i) => (s.drawImage(i, 0, 0), Kl(s.getImageData(0, 0, t, t).data))).catch(() => !1);
}, Uo = (e, A, t, s, r) => {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", s.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(r), o;
}, Tl = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => A(s), s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
}), EA = {
  get SUPPORT_RANGE_BOUNDS() {
    const e = NF(document);
    return Object.defineProperty(EA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    const e = EA.SUPPORT_RANGE_BOUNDS && PF(document);
    return Object.defineProperty(EA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    const e = XF(document);
    return Object.defineProperty(EA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const e = typeof Array.from == "function" && typeof window.fetch == "function" ? JF(document) : Promise.resolve(!1);
    return Object.defineProperty(EA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    const e = VF();
    return Object.defineProperty(EA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const e = GF();
    return Object.defineProperty(EA, "SUPPORT_RESPONSE_TYPE", { value: e }), e;
  },
  get SUPPORT_CORS_XHR() {
    const e = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(EA, "SUPPORT_CORS_XHR", { value: e }), e;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    const e = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(EA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: e }), e;
  }
};
class hs {
  constructor(A, t) {
    this.text = A, this.bounds = t;
  }
}
const WF = (e, A, t, s) => {
  const r = ZF(A, t), n = [];
  let o = 0;
  return r.forEach((i) => {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (EA.SUPPORT_RANGE_BOUNDS) {
        const l = kl(s, o, i.length).getClientRects();
        if (l.length > 1) {
          const c = ue(i);
          let a = 0;
          c.forEach((f) => {
            n.push(new hs(f, KA.fromDOMRectList(e, kl(s, a + o, f.length).getClientRects()))), a += f.length;
          });
        } else
          n.push(new hs(i, KA.fromDOMRectList(e, l)));
      } else {
        const l = s.splitText(i.length);
        n.push(new hs(i, YF(e, s))), s = l;
      }
    else EA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(i.length));
    o += i.length;
  }), n;
}, YF = (e, A) => {
  const t = A.ownerDocument;
  if (t) {
    const s = t.createElement("html2canvaswrapper");
    s.appendChild(A.cloneNode(!0));
    const r = A.parentNode;
    if (r) {
      r.replaceChild(s, A);
      const n = Zr(e, s);
      return s.firstChild && r.replaceChild(s.firstChild, s), n;
    }
  }
  return KA.EMPTY;
}, kl = (e, A, t) => {
  const s = e.ownerDocument;
  if (!s)
    throw new Error("Node has no owner document");
  const r = s.createRange();
  return r.setStart(e, A), r.setEnd(e, A + t), r;
}, ue = (e) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map((t) => t.segment);
  }
  return RF(e);
}, jF = (e, A) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map((s) => s.segment);
  }
  return qF(e, A);
}, ZF = (e, A) => A.letterSpacing !== 0 ? ue(e) : jF(e, A), zF = [32, 160, 4961, 65792, 65793, 4153, 4241], qF = (e, A) => {
  const t = UQ(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), s = [];
  let r;
  for (; !(r = t.next()).done; )
    if (r.value) {
      const n = r.value.slice(), o = zr(n);
      let i = "";
      o.forEach((l) => {
        zF.indexOf(l) === -1 ? i += QA(l) : (i.length && s.push(i), s.push(QA(l)), i = "");
      }), i.length && s.push(i);
    }
  return s;
};
class $F {
  constructor(A, t, s) {
    this.text = A1(t.data, s.textTransform), this.textBounds = WF(A, this.text, s, t);
  }
}
const A1 = (e, A) => {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(e1, t1);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, e1 = /(^|\s|:|-|\(|\))([a-z])/g, t1 = (e, A, t) => e.length > 0 ? A + t.toUpperCase() : e;
class Zc extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.currentSrc || t.src, this.intrinsicWidth = t.naturalWidth, this.intrinsicHeight = t.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class zc extends Ue {
  constructor(A, t) {
    super(A, t), this.canvas = t, this.intrinsicWidth = t.width, this.intrinsicHeight = t.height;
  }
}
class qc extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = new XMLSerializer(), r = Zr(A, t);
    t.setAttribute("width", `${r.width}px`), t.setAttribute("height", `${r.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(s.serializeToString(t))}`, this.intrinsicWidth = t.width.baseVal.value, this.intrinsicHeight = t.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class $c extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class Fo extends Ue {
  constructor(A, t) {
    super(A, t), this.start = t.start, this.reversed = typeof t.reversed == "boolean" && t.reversed === !0;
  }
}
const s1 = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], r1 = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], n1 = (e) => e.width > e.height ? new KA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new KA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, o1 = (e) => {
  const A = e.type === l1 ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, i1 = (e) => e.value.length === 0 && !!e.placeholder, _r = "checkbox", Lr = "radio", l1 = "password", Dl = 707406591, a1 = 1970632191;
class ps extends Ue {
  constructor(A, t) {
    switch (super(A, t), this.type = t.type.toLowerCase(), this.checked = t.checked, this.value = o1(t), this.isPlaceholder = i1(t), (this.type === _r || this.type === Lr) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = n1(this.bounds)), this.type) {
      case _r:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = s1;
        break;
      case Lr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = r1;
        break;
    }
  }
}
class Af extends Ue {
  constructor(A, t) {
    super(A, t);
    const s = t.options[t.selectedIndex || 0];
    this.value = s && s.text || "";
  }
}
class ef extends Ue {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class tf extends Ue {
  constructor(A, t) {
    super(A, t), this.src = t.src, this.width = parseInt(t.width, 10) || 0, this.height = parseInt(t.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor;
    try {
      if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
        this.tree = rf(A, t.contentWindow.document.documentElement);
        const s = t.contentWindow.document.documentElement ? St(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : pe.TRANSPARENT, r = t.contentWindow.document.body ? St(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : pe.TRANSPARENT;
        this.backgroundColor = Ye(s) ? Ye(r) ? this.styles.backgroundColor : r : s;
      }
    } catch {
    }
  }
}
const c1 = ["OL", "UL", "MENU"], pr = (e, A, t, s) => {
  for (let r = A.firstChild, n; r; r = n)
    if (n = r.nextSibling, nf(r) && r.data.length > 0)
      t.textNodes.push(new $F(e, r, t.styles));
    else if (ve(r))
      if (os(r) && r.assignedNodes)
        r.assignedNodes().forEach((o) => pr(e, o, t, s));
      else {
        const o = sf(e, r);
        o.styles.isVisible() && (f1(r, o, s) ? o.flags |= 4 : u1(o.styles) && (o.flags |= 2), c1.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? pr(e, r.shadowRoot, o, s) : !Sr(r) && !of(r) && !Kr(r) && pr(e, r, o, s));
      }
}, sf = (e, A) => xo(A) ? new Zc(e, A) : lf(A) ? new zc(e, A) : of(A) ? new qc(e, A) : B1(A) ? new $c(e, A) : d1(A) ? new Fo(e, A) : g1(A) ? new ps(e, A) : Kr(A) ? new Af(e, A) : Sr(A) ? new ef(e, A) : af(A) ? new tf(e, A) : new Ue(e, A), rf = (e, A) => {
  const t = sf(e, A);
  return t.flags |= 4, pr(e, A, t, t), t;
}, f1 = (e, A, t) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || ti(e) && t.styles.isTransparent(), u1 = (e) => e.isPositioned() || e.isFloating() ? !0 : hA(
  e.display,
  268435456
  /* DISPLAY.INLINE_FLEX */
) || hA(
  e.display,
  33554432
  /* DISPLAY.INLINE_BLOCK */
) || hA(
  e.display,
  536870912
  /* DISPLAY.INLINE_GRID */
) || hA(
  e.display,
  134217728
  /* DISPLAY.INLINE_TABLE */
), nf = (e) => e.nodeType === Node.TEXT_NODE, ve = (e) => e.nodeType === Node.ELEMENT_NODE, mo = (e) => ve(e) && typeof e.style < "u" && !wr(e), wr = (e) => typeof e.className == "object", B1 = (e) => e.tagName === "LI", d1 = (e) => e.tagName === "OL", g1 = (e) => e.tagName === "INPUT", h1 = (e) => e.tagName === "HTML", of = (e) => e.tagName === "svg", ti = (e) => e.tagName === "BODY", lf = (e) => e.tagName === "CANVAS", Ol = (e) => e.tagName === "VIDEO", xo = (e) => e.tagName === "IMG", af = (e) => e.tagName === "IFRAME", Vn = (e) => e.tagName === "STYLE", Ml = (e) => e.tagName === "SCRIPT", Sr = (e) => e.tagName === "TEXTAREA", Kr = (e) => e.tagName === "SELECT", os = (e) => e.tagName === "SLOT", Rl = (e) => e.tagName.indexOf("-") > 0;
class p1 {
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
const Nl = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Pl = {
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
}, w1 = {
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
}, Q1 = {
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
}, Ut = (e, A, t, s, r, n) => e < A || e > t ? Es(e, r, n.length > 0) : s.integers.reduce((o, i, l) => {
  for (; e >= i; )
    e -= i, o += s.values[l];
  return o;
}, "") + n, cf = (e, A, t, s) => {
  let r = "";
  do
    t || e--, r = s(e) + r, e /= A;
  while (e * A >= A);
  return r;
}, wA = (e, A, t, s, r) => {
  const n = t - A + 1;
  return (e < 0 ? "-" : "") + (cf(Math.abs(e), n, s, (o) => QA(Math.floor(o % n) + A)) + r);
}, rt = (e, A, t = ". ") => {
  const s = A.length;
  return cf(Math.abs(e), s, !1, (r) => A[Math.floor(r % s)]) + t;
}, vt = 1, Me = 2, Re = 4, is = 8, xe = (e, A, t, s, r, n) => {
  if (e < -9999 || e > 9999)
    return Es(e, 4, r.length > 0);
  let o = Math.abs(e), i = r;
  if (o === 0)
    return A[0] + i;
  for (let l = 0; o > 0 && l <= 4; l++) {
    const c = o % 10;
    c === 0 && hA(n, vt) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && l === 0 || c === 1 && l === 1 && hA(n, Me) || c === 1 && l === 1 && hA(n, Re) && e > 100 || c === 1 && l > 1 && hA(n, is) ? i = A[c] + (l > 0 ? t[l - 1] : "") + i : c === 1 && l > 0 && (i = t[l - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? s : "") + i;
}, Vl = "十百千萬", Gl = "拾佰仟萬", Xl = "マイナス", Gn = "마이너스", Es = (e, A, t) => {
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
      return Ut(e, 1, 3999, Nl, 3, s).toLowerCase();
    case 7:
      return Ut(e, 1, 3999, Nl, 3, s);
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
      return Ut(e, 1, 9999, Pl, 3, s);
    case 35:
      return Ut(e, 1, 9999, Pl, 3, s).toLowerCase();
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
      return xe(e, "零一二三四五六七八九", Vl, "負", r, Me | Re | is);
    case 47:
      return xe(e, "零壹貳參肆伍陸柒捌玖", Gl, "負", r, vt | Me | Re | is);
    case 42:
      return xe(e, "零一二三四五六七八九", Vl, "负", r, Me | Re | is);
    case 41:
      return xe(e, "零壹贰叁肆伍陆柒捌玖", Gl, "负", r, vt | Me | Re | is);
    case 26:
      return xe(e, "〇一二三四五六七八九", "十百千万", Xl, r, 0);
    case 25:
      return xe(e, "零壱弐参四伍六七八九", "拾百千万", Xl, r, vt | Me | Re);
    case 31:
      return xe(e, "영일이삼사오육칠팔구", "십백천만", Gn, n, vt | Me | Re);
    case 33:
      return xe(e, "零一二三四五六七八九", "十百千萬", Gn, n, 0);
    case 32:
      return xe(e, "零壹貳參四五六七八九", "拾百千", Gn, n, vt | Me | Re);
    case 18:
      return wA(e, 2406, 2415, !0, s);
    case 20:
      return Ut(e, 1, 19999, Q1, 3, s);
    case 21:
      return wA(e, 2790, 2799, !0, s);
    case 22:
      return wA(e, 2662, 2671, !0, s);
    case 52:
      return Ut(e, 1, 10999, w1, 3, s);
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
}, yo = "data-html2canvas-ignore", C1 = (e) => {
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
class Jl {
  constructor(A, t, s) {
    if (this.context = A, this.options = s, this.scrolledElements = [], this.referenceElement = t, this.counters = new p1(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const r = C1(t);
      r && (this.options.iframeContainer = r);
    }
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  toIFrame(A, t) {
    const s = b1(A, t, this.options.iframeContainer);
    if (!s.contentWindow)
      return Promise.reject("Unable to find iframe window");
    const r = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, o = s.contentWindow, i = o.document, l = m1(s).then(async () => {
      this.scrolledElements.forEach(v1), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0)));
      const f = this.options.onclone, B = this.clonedReferenceElement;
      return typeof B > "u" ? Promise.reject(`Error finding the ${this.referenceElement.nodeName} in the cloned document`) : (i.fonts && i.fonts.ready && await i.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await F1(i), typeof f == "function" ? Promise.resolve().then(() => f(i, B)).then(() => s) : s);
    }), c = i.baseURI;
    i.open();
    try {
      const f = trustedTypes.createPolicy("my-policy", {
        createHTML: (C) => C
      }), B = Wl(document.doctype) + "<html></html>", h = f.createHTML(B);
      i.write(h);
    } catch {
      i.write(Wl(document.doctype) + "<html></html>");
    }
    y1(this.referenceElement.ownerDocument, r, n);
    const a = i.adoptNode(this.documentElement);
    return L1(a, c), i.replaceChild(a, i.documentElement), i.close(), l;
  }
  createElementClone(A) {
    if (bo(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (lf(A))
      return this.createCanvasClone(A);
    if (Ol(A))
      return this.createVideoClone(A);
    if (Vn(A))
      return this.createStyleClone(A);
    const t = A.cloneNode(!1);
    return xo(t) && (xo(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Rl(t) ? this.createCustomElementClone(t) : t;
  }
  createCustomElementClone(A) {
    const t = document.createElement("div");
    if (t.className = A.className, Xn(A.style, t), A.shadowRoot)
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
    (!ve(t) || !Ml(t) && !t.hasAttribute(yo) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !ve(t) || !Vn(t)) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !ve(A) || !Ml(A) && !A.hasAttribute(yo) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !ve(A) || !Vn(A);
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
    if (!os(A))
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
      ve(r) && os(r) ? this.cloneSlotElement(r, t, s) : this.safeAppendClonedChild(t, r, s);
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
    if (!os(A))
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
      ve(r) && os(r) ? this.cloneSlotElementAsLightDOM(r, t, s) : this.appendChildNode(t, r, s);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, t, s) {
    A.shadowRoot && t.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, t.shadowRoot, s), this.cloneLightDOMChildren(A, t, s)) : A.shadowRoot && !t.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, t, s) : this.cloneLightDOMChildren(A, t, s);
  }
  cloneNode(A, t) {
    if (nf(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const s = A.ownerDocument.defaultView;
    if (s && ve(A) && (mo(A) || wr(A))) {
      const r = this.createElementClone(A);
      r.style.transitionProperty = "none";
      const n = s.getComputedStyle(A), o = s.getComputedStyle(A, ":before"), i = s.getComputedStyle(A, ":after");
      this.referenceElement === A && mo(r) && (this.clonedReferenceElement = r), ti(r) && I1(r, this.options.cspNonce);
      const l = this.counters.parse(new Fl(this.context, n)), c = this.resolvePseudoContent(A, r, o, ws.BEFORE);
      Rl(A) && (t = !0), Ol(A) || this.cloneChildNodes(A, r, t), c && r.insertBefore(c, r.firstChild);
      const a = this.resolvePseudoContent(A, r, i, ws.AFTER);
      return a && r.appendChild(a), this.counters.pop(l), (n && (this.options.copyStyles || wr(A)) && !af(A) || t) && Xn(n, r), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (Sr(A) || Kr(A)) && (Sr(r) || Kr(r)) && (r.value = A.value), r;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, t, s, r) {
    if (!s)
      return;
    const n = s.content, o = t.ownerDocument;
    if (!o || !n || n === "none" || n === "-moz-alt-content" || s.display === "none")
      return;
    this.counters.parse(new Fl(this.context, s));
    const i = new fF(this.context, s), l = o.createElement("html2canvaspseudoelement");
    Xn(s, l), i.content.forEach((a) => {
      if (a.type === 0)
        l.appendChild(o.createTextNode(a.value));
      else if (a.type === 22) {
        const f = o.createElement("img");
        f.src = a.value, f.style.opacity = "1", l.appendChild(f);
      } else if (a.type === 18) {
        if (a.name === "attr") {
          const f = a.values.filter(j);
          f.length && l.appendChild(o.createTextNode(A.getAttribute(f[0].value) || ""));
        } else if (a.name === "counter") {
          const [f, B] = a.values.filter(IA);
          if (f && j(f)) {
            const h = this.counters.getCounterValue(f.value), C = B && j(B) ? Co.parse(this.context, B.value) : 3;
            l.appendChild(o.createTextNode(Es(h, C, !1)));
          }
        } else if (a.name === "counters") {
          const [f, B, h] = a.values.filter(IA);
          if (f && j(f)) {
            const C = this.counters.getCounterValues(f.value), U = h && j(h) ? Co.parse(this.context, h.value) : 3, y = B && B.type === 0 ? B.value : "", I = C.map((x) => Es(x, U, !1)).join(y);
            l.appendChild(o.createTextNode(I));
          }
        }
      } else if (a.type === 20)
        switch (a.value) {
          case "open-quote":
            l.appendChild(o.createTextNode(Ul(i.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            l.appendChild(o.createTextNode(Ul(i.quotes, --this.quoteDepth, !1)));
            break;
          default:
            l.appendChild(o.createTextNode(a.value));
        }
    }), l.className = `${vo} ${Eo}`;
    const c = r === ws.BEFORE ? ` ${vo}` : ` ${Eo}`;
    return wr(t) ? t.className.baseValue += c : t.className += c, l;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var ws;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(ws || (ws = {}));
const b1 = (e, A, t) => {
  const s = e.createElement("iframe");
  return s.className = "html2canvas-container", s.style.visibility = "hidden", s.style.position = "fixed", s.style.left = "-10000px", s.style.top = "0px", s.style.border = "0", s.width = A.width.toString(), s.height = A.height.toString(), s.scrolling = "no", s.setAttribute(yo, "true"), (t || e.body).appendChild(s), s;
}, U1 = (e) => new Promise((A) => {
  if (e.complete) {
    A();
    return;
  }
  if (!e.src) {
    A();
    return;
  }
  e.onload = A, e.onerror = A;
}), F1 = (e) => Promise.all([].slice.call(e.images, 0).map(U1)), m1 = (e) => new Promise((A, t) => {
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
}), x1 = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], Xn = (e, A) => {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e.item(t);
    x1.indexOf(s) === -1 && !s.startsWith("--") && A.style.setProperty(s, e.getPropertyValue(s));
  }
  return A;
}, Wl = (e) => {
  let A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += `"${e.publicId}"`), e.systemId && (A += `"${e.systemId}"`), A += ">"), A;
}, y1 = (e, A, t) => {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, v1 = ([e, A, t]) => {
  e.scrollLeft = A, e.scrollTop = t;
}, E1 = ":before", H1 = ":after", vo = "___html2canvas___pseudoelement_before", Eo = "___html2canvas___pseudoelement_after", Yl = `{
    content: "" !important;
    display: none !important;
}`, I1 = (e, A) => {
  _1(e, `.${vo}${E1}${Yl}
         .${Eo}${H1}${Yl}`, A);
}, _1 = (e, A, t) => {
  const s = e.ownerDocument;
  if (s) {
    const r = s.createElement("style");
    r.textContent = A, t && (r.nonce = t), e.appendChild(r);
  }
}, L1 = (e, A) => {
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
class S1 {
  constructor(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  addImage(A) {
    const t = Promise.resolve();
    return this.has(A) || (Wn(A) || D1(A)) && (this._cache[A] = this.loadImage(A)).catch(() => {
    }), t;
  }
  match(A) {
    return this._cache[A];
  }
  async loadImage(A) {
    const t = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, Ae.isSameOrigin) : Ae.isSameOrigin(A), s = !Jn(A) && this._options.useCORS === !0 && EA.SUPPORT_CORS_IMAGES && !t, r = !Jn(A) && !t && !Wn(A) && typeof this._options.proxy == "string" && EA.SUPPORT_CORS_XHR && !s;
    if (!t && this._options.allowTaint === !1 && !Jn(A) && !Wn(A) && !r && !s)
      return;
    let n = A;
    return r && (n = await this.proxy(n)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((o, i) => {
      const l = new Image();
      l.onload = () => o(l), l.onerror = i, (O1(n) || s) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(() => o(l), 500), this._options.imageTimeout > 0 && setTimeout(() => i(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
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
      const o = EA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", i = new XMLHttpRequest();
      i.onload = () => {
        if (i.status === 200)
          if (o === "text")
            r(i.response);
          else {
            const c = new FileReader();
            c.addEventListener("load", () => r(c.result), !1), c.addEventListener("error", (a) => n(a), !1), c.readAsDataURL(i.response);
          }
        else
          n(`Failed to proxy resource ${s} with status code ${i.status}`);
      }, i.onerror = n;
      const l = t.indexOf("?") > -1 ? "&" : "?";
      if (i.open("GET", `${t}${l}url=${encodeURIComponent(A)}&responseType=${o}`), o !== "text" && i instanceof XMLHttpRequest && (i.responseType = o), this._options.imageTimeout) {
        const c = this._options.imageTimeout;
        i.timeout = c, i.ontimeout = () => n(`Timed out (${c}ms) proxying ${s}`);
      }
      i.send();
    });
  }
}
const K1 = /^data:image\/svg\+xml/i, T1 = /^data:image\/.*;base64,/i, k1 = /^data:image\/.*/i, D1 = (e) => EA.SUPPORT_SVG_DRAWING || !M1(e), Jn = (e) => k1.test(e), O1 = (e) => T1.test(e), Wn = (e) => e.substr(0, 4) === "blob", M1 = (e) => e.substr(-3).toLowerCase() === "svg" || K1.test(e);
class O {
  constructor(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  add(A, t) {
    return new O(this.x + A, this.y + t);
  }
}
const Ft = (e, A, t) => new O(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
class Le {
  constructor(A, t, s, r) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = s, this.end = r;
  }
  subdivide(A, t) {
    const s = Ft(this.start, this.startControl, A), r = Ft(this.startControl, this.endControl, A), n = Ft(this.endControl, this.end, A), o = Ft(s, r, A), i = Ft(r, n, A), l = Ft(o, i, A);
    return t ? new Le(this.start, s, o, l) : new Le(l, i, n, this.end);
  }
  add(A, t) {
    return new Le(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }
  reverse() {
    return new Le(this.end, this.endControl, this.startControl, this.start);
  }
}
const jA = (e) => e.type === 1;
class R1 {
  constructor(A) {
    const t = A.styles, s = A.bounds;
    let [r, n] = rs(t.borderTopLeftRadius, s.width, s.height), [o, i] = rs(t.borderTopRightRadius, s.width, s.height), [l, c] = rs(t.borderBottomRightRadius, s.width, s.height), [a, f] = rs(t.borderBottomLeftRadius, s.width, s.height);
    const B = [];
    B.push((r + o) / s.width), B.push((a + l) / s.width), B.push((n + f) / s.height), B.push((i + c) / s.height);
    const h = Math.max(...B);
    h > 1 && (r /= h, n /= h, o /= h, i /= h, l /= h, c /= h, a /= h, f /= h);
    const C = s.width - o, U = s.height - c, y = s.width - l, I = s.height - f, x = t.borderTopWidth, g = t.borderRightWidth, m = t.borderBottomWidth, S = t.borderLeftWidth, G = z(t.paddingTop, A.bounds.width), nA = z(t.paddingRight, A.bounds.width), xA = z(t.paddingBottom, A.bounds.width), uA = z(t.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = r > 0 || n > 0 ? BA(s.left + S / 3, s.top + x / 3, r - S / 3, n - x / 3, eA.TOP_LEFT) : new O(s.left + S / 3, s.top + x / 3), this.topRightBorderDoubleOuterBox = r > 0 || n > 0 ? BA(s.left + C, s.top + x / 3, o - g / 3, i - x / 3, eA.TOP_RIGHT) : new O(s.left + s.width - g / 3, s.top + x / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || c > 0 ? BA(s.left + y, s.top + U, l - g / 3, c - m / 3, eA.BOTTOM_RIGHT) : new O(s.left + s.width - g / 3, s.top + s.height - m / 3), this.bottomLeftBorderDoubleOuterBox = a > 0 || f > 0 ? BA(s.left + S / 3, s.top + I, a - S / 3, f - m / 3, eA.BOTTOM_LEFT) : new O(s.left + S / 3, s.top + s.height - m / 3), this.topLeftBorderDoubleInnerBox = r > 0 || n > 0 ? BA(s.left + S * 2 / 3, s.top + x * 2 / 3, r - S * 2 / 3, n - x * 2 / 3, eA.TOP_LEFT) : new O(s.left + S * 2 / 3, s.top + x * 2 / 3), this.topRightBorderDoubleInnerBox = r > 0 || n > 0 ? BA(s.left + C, s.top + x * 2 / 3, o - g * 2 / 3, i - x * 2 / 3, eA.TOP_RIGHT) : new O(s.left + s.width - g * 2 / 3, s.top + x * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || c > 0 ? BA(s.left + y, s.top + U, l - g * 2 / 3, c - m * 2 / 3, eA.BOTTOM_RIGHT) : new O(s.left + s.width - g * 2 / 3, s.top + s.height - m * 2 / 3), this.bottomLeftBorderDoubleInnerBox = a > 0 || f > 0 ? BA(s.left + S * 2 / 3, s.top + I, a - S * 2 / 3, f - m * 2 / 3, eA.BOTTOM_LEFT) : new O(s.left + S * 2 / 3, s.top + s.height - m * 2 / 3), this.topLeftBorderStroke = r > 0 || n > 0 ? BA(s.left + S / 2, s.top + x / 2, r - S / 2, n - x / 2, eA.TOP_LEFT) : new O(s.left + S / 2, s.top + x / 2), this.topRightBorderStroke = r > 0 || n > 0 ? BA(s.left + C, s.top + x / 2, o - g / 2, i - x / 2, eA.TOP_RIGHT) : new O(s.left + s.width - g / 2, s.top + x / 2), this.bottomRightBorderStroke = l > 0 || c > 0 ? BA(s.left + y, s.top + U, l - g / 2, c - m / 2, eA.BOTTOM_RIGHT) : new O(s.left + s.width - g / 2, s.top + s.height - m / 2), this.bottomLeftBorderStroke = a > 0 || f > 0 ? BA(s.left + S / 2, s.top + I, a - S / 2, f - m / 2, eA.BOTTOM_LEFT) : new O(s.left + S / 2, s.top + s.height - m / 2), this.topLeftBorderBox = r > 0 || n > 0 ? BA(s.left, s.top, r, n, eA.TOP_LEFT) : new O(s.left, s.top), this.topRightBorderBox = o > 0 || i > 0 ? BA(s.left + C, s.top, o, i, eA.TOP_RIGHT) : new O(s.left + s.width, s.top), this.bottomRightBorderBox = l > 0 || c > 0 ? BA(s.left + y, s.top + U, l, c, eA.BOTTOM_RIGHT) : new O(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = a > 0 || f > 0 ? BA(s.left, s.top + I, a, f, eA.BOTTOM_LEFT) : new O(s.left, s.top + s.height), this.topLeftPaddingBox = r > 0 || n > 0 ? BA(s.left + S, s.top + x, Math.max(0, r - S), Math.max(0, n - x), eA.TOP_LEFT) : new O(s.left + S, s.top + x), this.topRightPaddingBox = o > 0 || i > 0 ? BA(s.left + Math.min(C, s.width - g), s.top + x, C > s.width + g ? 0 : Math.max(0, o - g), Math.max(0, i - x), eA.TOP_RIGHT) : new O(s.left + s.width - g, s.top + x), this.bottomRightPaddingBox = l > 0 || c > 0 ? BA(s.left + Math.min(y, s.width - S), s.top + Math.min(U, s.height - m), Math.max(0, l - g), Math.max(0, c - m), eA.BOTTOM_RIGHT) : new O(s.left + s.width - g, s.top + s.height - m), this.bottomLeftPaddingBox = a > 0 || f > 0 ? BA(s.left + S, s.top + Math.min(I, s.height - m), Math.max(0, a - S), Math.max(0, f - m), eA.BOTTOM_LEFT) : new O(s.left + S, s.top + s.height - m), this.topLeftContentBox = r > 0 || n > 0 ? BA(s.left + S + uA, s.top + x + G, Math.max(0, r - (S + uA)), Math.max(0, n - (x + G)), eA.TOP_LEFT) : new O(s.left + S + uA, s.top + x + G), this.topRightContentBox = o > 0 || i > 0 ? BA(s.left + Math.min(C, s.width + S + uA), s.top + x + G, C > s.width + S + uA ? 0 : o - S + uA, i - (x + G), eA.TOP_RIGHT) : new O(s.left + s.width - (g + nA), s.top + x + G), this.bottomRightContentBox = l > 0 || c > 0 ? BA(s.left + Math.min(y, s.width - (S + uA)), s.top + Math.min(U, s.height + x + G), Math.max(0, l - (g + nA)), c - (m + xA), eA.BOTTOM_RIGHT) : new O(s.left + s.width - (g + nA), s.top + s.height - (m + xA)), this.bottomLeftContentBox = a > 0 || f > 0 ? BA(s.left + S + uA, s.top + I, Math.max(0, a - (S + uA)), f - (m + xA), eA.BOTTOM_LEFT) : new O(s.left + S + uA, s.top + s.height - (m + xA));
  }
}
var eA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(eA || (eA = {}));
const BA = (e, A, t, s, r) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), o = t * n, i = s * n, l = e + t, c = A + s;
  switch (r) {
    case eA.TOP_LEFT:
      return new Le(new O(e, c), new O(e, c - i), new O(l - o, A), new O(l, A));
    case eA.TOP_RIGHT:
      return new Le(new O(e, A), new O(e + o, A), new O(l, c - i), new O(l, c));
    case eA.BOTTOM_RIGHT:
      return new Le(new O(l, A), new O(l, A + i), new O(e + o, c), new O(e, c));
    case eA.BOTTOM_LEFT:
    default:
      return new Le(new O(l, c), new O(l - o, c), new O(e, A + i), new O(e, A));
  }
}, Tr = (e) => [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox], N1 = (e) => [
  e.topLeftContentBox,
  e.topRightContentBox,
  e.bottomRightContentBox,
  e.bottomLeftContentBox
], kr = (e) => [
  e.topLeftPaddingBox,
  e.topRightPaddingBox,
  e.bottomRightPaddingBox,
  e.bottomLeftPaddingBox
];
class jl {
  constructor(A, t, s) {
    this.offsetX = A, this.offsetY = t, this.matrix = s, this.type = 0, this.target = 6;
  }
}
class lr {
  constructor(A, t) {
    this.path = A, this.target = t, this.type = 1;
  }
}
class P1 {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
const V1 = (e) => e.type === 0, ff = (e) => e.type === 1, G1 = (e) => e.type === 2, Zl = (e, A) => e.length === A.length ? e.some((t, s) => t === A[s]) : !1, X1 = (e, A, t, s, r) => e.map((n, o) => {
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
class uf {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class Bf {
  constructor(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new R1(this.container), this.container.styles.opacity < 1 && this.effects.push(new P1(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), i = this.container.styles.rotate * Math.PI / 180, l = Math.cos(i), c = Math.sin(i), a = [l, c, -c, l, 0, 0];
      this.effects.push(new jl(r, n, a));
    }
    if (this.container.styles.transform !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), o = this.container.styles.transform;
      this.effects.push(new jl(r, n, o));
    }
    if (this.container.styles.overflowX !== 0) {
      const s = Tr(this.curves), r = kr(this.curves);
      Zl(s, r) ? this.effects.push(new lr(
        s,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new lr(
        s,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new lr(
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
      const n = s.effects.filter((o) => !ff(o));
      if (t || s.container.styles.position !== 0 || !s.parent) {
        if (t = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
          const o = Tr(s.curves), i = kr(s.curves);
          Zl(o, i) || r.unshift(new lr(
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
    return r.filter((n) => hA(n.target, A));
  }
}
const Ho = (e, A, t, s) => {
  e.container.elements.forEach((r) => {
    const n = hA(
      r.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), o = hA(
      r.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), i = new Bf(r, e);
    hA(
      r.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    ) && s.push(i);
    const l = hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) ? [] : s;
    if (n || o) {
      const c = n || r.styles.isPositioned() ? t : A, a = new uf(i);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        const f = r.styles.zIndex.order;
        if (f < 0) {
          let B = 0;
          c.negativeZIndex.some((h, C) => f > h.element.container.styles.zIndex.order ? (B = C, !1) : B > 0), c.negativeZIndex.splice(B, 0, a);
        } else if (f > 0) {
          let B = 0;
          c.positiveZIndex.some((h, C) => f >= h.element.container.styles.zIndex.order ? (B = C + 1, !1) : B > 0), c.positiveZIndex.splice(B, 0, a);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(a);
      } else
        r.styles.isFloating() ? c.nonPositionedFloats.push(a) : c.nonPositionedInlineLevel.push(a);
      Ho(i, a, n ? a : t, l);
    } else
      r.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), Ho(i, A, t, l);
    hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && df(r, l);
  });
}, df = (e, A) => {
  let t = e instanceof Fo ? e.start : 1;
  const s = e instanceof Fo ? e.reversed : !1;
  for (let r = 0; r < A.length; r++) {
    const n = A[r];
    n.container instanceof $c && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Es(t, n.container.styles.listStyleType, !0), t += s ? -1 : 1;
  }
}, J1 = (e) => {
  const A = new Bf(e, null), t = new uf(A), s = [];
  return Ho(A, t, t, s), df(A.container, s), t;
}, zl = (e, A) => {
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
}, W1 = (e, A) => {
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
}, Y1 = (e, A) => {
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
}, j1 = (e, A) => {
  switch (A) {
    case 0:
      return ar(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return ar(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return ar(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return ar(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, ar = (e, A) => {
  const t = [];
  return jA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), jA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, zA = (e, A, t, s) => {
  const r = [];
  return jA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), jA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), jA(s) ? r.push(s.subdivide(0.5, !0).reverse()) : r.push(s), jA(A) ? r.push(A.subdivide(0.5, !1).reverse()) : r.push(A), r;
}, gf = (e) => {
  const A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Qs = (e) => {
  const A = e.styles, t = e.bounds, s = z(A.paddingLeft, t.width), r = z(A.paddingRight, t.width), n = z(A.paddingTop, t.width), o = z(A.paddingBottom, t.width);
  return t.add(s + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + s + r), -(A.borderTopWidth + A.borderBottomWidth + n + o));
}, Z1 = (e, A) => e === 0 ? A.bounds : e === 2 ? Qs(A) : gf(A), z1 = (e, A) => e === 0 ? A.bounds : e === 2 ? Qs(A) : gf(A), Yn = (e, A, t) => {
  const s = Z1(Et(e.styles.backgroundOrigin, A), e), r = z1(Et(e.styles.backgroundClip, A), e), n = q1(Et(e.styles.backgroundSize, A), t, s);
  let [o, i] = n;
  const l = rs(Et(e.styles.backgroundPosition, A), s.width - o, s.height - i), c = $1(Et(e.styles.backgroundRepeat, A), l, n, s, r), a = Math.round(s.left + l[0]), f = Math.round(s.top + l[1]);
  return o = Math.max(1, o), i = Math.max(1, i), [c, a, f, o, i];
}, mt = (e) => j(e) && e.value === Kt.AUTO, cr = (e) => typeof e == "number", q1 = (e, [A, t, s], r) => {
  const [n, o] = e;
  if (!n)
    return [0, 0];
  if (fA(n) && o && fA(o))
    return [z(n, r.width), z(o, r.height)];
  const i = cr(s);
  if (j(n) && (n.value === Kt.CONTAIN || n.value === Kt.COVER))
    return cr(s) ? r.width / r.height < s != (n.value === Kt.COVER) ? [r.width, r.width / s] : [r.height * s, r.height] : [r.width, r.height];
  const l = cr(A), c = cr(t), a = l || c;
  if (mt(n) && (!o || mt(o))) {
    if (l && c)
      return [A, t];
    if (!i && !a)
      return [r.width, r.height];
    if (a && i) {
      const U = l ? A : t * s, y = c ? t : A / s;
      return [U, y];
    }
    const h = l ? A : r.width, C = c ? t : r.height;
    return [h, C];
  }
  if (i) {
    let h = 0, C = 0;
    return fA(n) ? h = z(n, r.width) : fA(o) && (C = z(o, r.height)), mt(n) ? h = C * s : (!o || mt(o)) && (C = h / s), [h, C];
  }
  let f = null, B = null;
  if (fA(n) ? f = z(n, r.width) : o && fA(o) && (B = z(o, r.height)), f !== null && (!o || mt(o)) && (B = l && c ? f / A * t : r.height), B !== null && mt(n) && (f = l && c ? B / t * A : r.width), f !== null && B !== null)
    return [f, B];
  throw new Error("Unable to calculate background-size for element");
}, Et = (e, A) => {
  const t = e[A];
  return typeof t > "u" ? e[0] : t;
}, $1 = (e, [A, t], [s, r], n, o) => {
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
}, Am = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ql = "Hidden Text";
class em {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, t) {
    const s = this._document.createElement("div"), r = this._document.createElement("img"), n = this._document.createElement("span"), o = this._document.body;
    s.style.visibility = "hidden", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", o.appendChild(s), r.src = Am, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(ql)), s.appendChild(n), s.appendChild(r);
    const i = r.offsetTop - n.offsetTop + 2;
    s.removeChild(n), s.appendChild(this._document.createTextNode(ql)), s.style.lineHeight = "normal", r.style.verticalAlign = "super";
    const l = r.offsetTop - s.offsetTop + 2;
    return o.removeChild(s), { baseline: i, middle: l };
  }
  getMetrics(A, t) {
    const s = `${A} ${t}`;
    return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(A, t)), this._data[s];
  }
}
class hf {
  constructor(A, t) {
    this.context = A, this.options = t;
  }
}
const tm = 1e4;
class si extends hf {
  constructor(A, t) {
    super(A, t), this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`), this.fontMetrics = new em(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", this._activeEffects = [], this.context.logger.debug(`Canvas renderer initialized (${t.width}x${t.height}) with scale ${t.scale}`);
  }
  applyEffects(A) {
    for (; this._activeEffects.length; )
      this.popEffect();
    A.forEach((t) => this.applyEffect(t));
  }
  applyEffect(A) {
    this.ctx.save(), G1(A) && (this.ctx.globalAlpha = A.opacity), V1(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), ff(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
  }
  popEffect() {
    this._activeEffects.pop(), this.ctx.restore();
  }
  async renderStack(A) {
    A.element.container.styles.isVisible() && await this.renderStackContent(A);
  }
  async renderNode(A) {
    if (hA(
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
        const i = r * 2, l = r * 4;
        let c = A;
        for (this.ctx.moveTo(c, t + r / 2); c < A + s; ) {
          const a = Math.min(c + l / 2, A + s);
          if (this.ctx.quadraticCurveTo(c + l / 4, t + r / 2 - i, a, t + r / 2), c = a, c < A + s) {
            const f = Math.min(c + l / 2, A + s);
            this.ctx.quadraticCurveTo(c + l / 4, t + r / 2 + i, f, t + r / 2), c = f;
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
      let i = n, l = [];
      for (const c of o) {
        const a = this.ctx.measureText(c).width + s;
        if (i + a > t)
          break;
        l.push(c), i += a;
      }
      return l.join("") + r;
    }
  }
  createFontStyle(A) {
    const t = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), s = im(A.fontFamily).join(", "), r = Ce(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
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
      const f = [];
      let B = [], h = A.textBounds[0].bounds.top;
      A.textBounds.forEach((U) => {
        Math.abs(U.bounds.top - h) >= o * 0.5 ? (B.length > 0 && f.push(B), B = [U], h = U.bounds.top) : B.push(U);
      }), B.length > 0 && f.push(B);
      const C = t.webkitLineClamp;
      if (f.length > C) {
        for (let y = 0; y < C - 1; y++)
          f[y].forEach((I) => {
            this.renderTextBoundWithPaintOrder(I, t, n);
          });
        const U = f[C - 1];
        if (U && U.length > 0 && s) {
          const y = U.map((m) => m.text).join(""), I = U[0], x = s.width - (I.bounds.left - s.left), g = this.truncateTextWithEllipsis(y, x, t.letterSpacing);
          n.forEach((m) => {
            switch (m) {
              case 0:
                this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(g, I.bounds.left, I.bounds.top + t.fontSize.number) : ue(g).reduce((G, nA) => (this.ctx.fillText(nA, G, I.bounds.top + t.fontSize.number), G + this.ctx.measureText(nA).width + t.letterSpacing), I.bounds.left);
                break;
              case 1:
                t.webkitTextStrokeWidth && g.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(g, I.bounds.left, I.bounds.top + t.fontSize.number) : ue(g).reduce((G, nA) => (this.ctx.strokeText(nA, G, I.bounds.top + t.fontSize.number), G + this.ctx.measureText(nA).width + t.letterSpacing), I.bounds.left));
                break;
            }
          });
        }
        return;
      }
    }
    const l = t.textOverflow === 1 && s && t.overflowX === 1 && A.textBounds.length > 0;
    let c = !1, a = "";
    if (l) {
      const f = A.textBounds[0].bounds.top;
      if (A.textBounds.every((h) => Math.abs(h.bounds.top - f) < o * 0.5)) {
        let h = A.textBounds.map((y) => y.text).join("");
        h = h.replace(/\s+/g, " ").trim();
        const C = this.ctx.measureText(h).width, U = s.width;
        C > U && (c = !0, a = this.truncateTextWithEllipsis(h, U, t.letterSpacing));
      }
    }
    if (c) {
      const f = A.textBounds[0];
      n.forEach((B) => {
        switch (B) {
          case 0:
            this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(a, f.bounds.left, f.bounds.top + t.fontSize.number) : ue(a).reduce((U, y) => (this.ctx.fillText(y, U, f.bounds.top + t.fontSize.number), U + this.ctx.measureText(y).width + t.letterSpacing), f.bounds.left);
            const h = t.textShadow;
            h.length && a.trim().length && (h.slice(0).reverse().forEach((C) => {
              this.ctx.shadowColor = aA(C.color), this.ctx.shadowOffsetX = C.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = C.offsetY.number * this.options.scale, this.ctx.shadowBlur = C.blur.number, t.letterSpacing === 0 ? this.ctx.fillText(a, f.bounds.left, f.bounds.top + t.fontSize.number) : ue(a).reduce((y, I) => (this.ctx.fillText(I, y, f.bounds.top + t.fontSize.number), y + this.ctx.measureText(I).width + t.letterSpacing), f.bounds.left);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          case 1:
            t.webkitTextStrokeWidth && a.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(a, f.bounds.left, f.bounds.top + t.fontSize.number) : ue(a).reduce((U, y) => (this.ctx.strokeText(y, U, f.bounds.top + t.fontSize.number), U + this.ctx.measureText(y).width + t.letterSpacing), f.bounds.left));
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((f) => {
      n.forEach((B) => {
        switch (B) {
          case 0:
            this.ctx.fillStyle = aA(t.color), this.renderTextWithLetterSpacing(f, t.letterSpacing, t.fontSize.number);
            const h = t.textShadow;
            h.length && f.text.trim().length && (h.slice(0).reverse().forEach((C) => {
              this.ctx.shadowColor = aA(C.color), this.ctx.shadowOffsetX = C.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = C.offsetY.number * this.options.scale, this.ctx.shadowBlur = C.blur.number, this.renderTextWithLetterSpacing(f, t.letterSpacing, t.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), t.textDecorationLine.length && this.renderTextDecoration(f.bounds, t);
            break;
          case 1:
            if (t.webkitTextStrokeWidth && f.text.trim().length) {
              this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round";
              const C = t.fontSize.number;
              t.letterSpacing === 0 ? this.ctx.strokeText(f.text, f.bounds.left, f.bounds.top + C) : ue(f.text).reduce((y, I) => (this.ctx.strokeText(I, y, f.bounds.top + C), y + this.ctx.measureText(I).width), f.bounds.left);
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
      const o = Qs(A), i = kr(t);
      this.path(i), this.ctx.save(), this.ctx.clip();
      let l = 0, c = 0, a = r, f = n, B = o.left, h = o.top, C = o.width, U = o.height;
      const { objectFit: y } = A.styles, I = C / U, x = a / f;
      if (y === 2)
        x > I ? (U = C / x, h += (o.height - U) / 2) : (C = U * x, B += (o.width - C) / 2);
      else if (y === 4)
        x > I ? (a = f * I, l += (r - a) / 2) : (f = a / I, c += (n - f) / 2);
      else if (y === 8)
        a > C ? (l += (a - C) / 2, a = C) : (B += (C - a) / 2, C = a), f > U ? (c += (f - U) / 2, f = U) : (h += (U - f) / 2, U = f);
      else if (y === 16) {
        const g = x > I ? C : U * x, m = a > C ? a : C;
        g < m ? x > I ? (U = C / x, h += (o.height - U) / 2) : (C = U * x, B += (o.width - C) / 2) : (a > C ? (l += (a - C) / 2, a = C) : (B += (C - a) / 2, C = a), f > U ? (c += (f - U) / 2, f = U) : (h += (U - f) / 2, U = f));
      }
      this.ctx.drawImage(s, l, c, a, f, B, h, C, U), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const t = A.container, s = A.curves, r = t.styles, n = Qs(t);
    for (const o of t.textNodes)
      await this.renderTextNode(o, r, n);
    if (t instanceof Zc)
      try {
        const o = await this.context.cache.match(t.src);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading image ${t.src}`);
      }
    if (t instanceof zc && this.renderReplacedElement(t, s, t.canvas), t instanceof qc)
      try {
        const o = await this.context.cache.match(t.svg);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading svg ${t.svg.substring(0, 255)}`);
      }
    if (t instanceof tf && t.tree) {
      const i = await new si(this.context, {
        scale: this.options.scale,
        backgroundColor: t.backgroundColor,
        x: 0,
        y: 0,
        width: t.width,
        height: t.height
      }).render(t.tree);
      t.width && t.height && this.ctx.drawImage(i, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height);
    }
    if (t instanceof ps) {
      const o = Math.min(t.bounds.width, t.bounds.height);
      t.type === _r ? t.checked && (this.ctx.save(), this.path([
        new O(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79),
        new O(t.bounds.left + o * 0.16, t.bounds.top + o * 0.5549),
        new O(t.bounds.left + o * 0.27347, t.bounds.top + o * 0.44071),
        new O(t.bounds.left + o * 0.39694, t.bounds.top + o * 0.5649),
        new O(t.bounds.left + o * 0.72983, t.bounds.top + o * 0.23),
        new O(t.bounds.left + o * 0.84, t.bounds.top + o * 0.34085),
        new O(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79)
      ]), this.ctx.fillStyle = aA(Dl), this.ctx.fill(), this.ctx.restore()) : t.type === Lr && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + o / 2, t.bounds.top + o / 2, o / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = aA(Dl), this.ctx.fill(), this.ctx.restore());
    }
    if (sm(t) && t.value.length) {
      const [o, i, l] = this.createFontStyle(r), { baseline: c } = this.fontMetrics.getMetrics(i, l);
      this.ctx.font = o;
      const a = t instanceof ps && t.isPlaceholder;
      this.ctx.fillStyle = aA(a ? a1 : r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = nm(t.styles.textAlign);
      const f = Qs(t);
      let B = 0;
      switch (t.styles.textAlign) {
        case 1:
          B += f.width / 2;
          break;
        case 2:
          B += f.width;
          break;
      }
      let h = 0;
      if (t instanceof ps) {
        const U = z(r.fontSize, 0);
        h = (f.height - U) / 2;
      }
      const C = f.add(B, h, 0, 0);
      this.ctx.save(), this.path([
        new O(f.left, f.top),
        new O(f.left + f.width, f.top),
        new O(f.left + f.width, f.top + f.height),
        new O(f.left, f.top + f.height)
      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new hs(t.value, C), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
    }
    if (hA(
      t.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    )) {
      if (t.styles.listStyleImage !== null) {
        const o = t.styles.listStyleImage;
        if (o.type === 0) {
          let i;
          const l = o.url;
          try {
            i = await this.context.cache.match(l), this.ctx.drawImage(i, t.bounds.left - (i.width + 10), t.bounds.top);
          } catch {
            this.context.logger.error(`Error loading list-style-image ${l}`);
          }
        }
      } else if (A.listValue && t.styles.listStyleType !== -1) {
        const [o] = this.createFontStyle(r);
        this.ctx.font = o, this.ctx.fillStyle = aA(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right";
        const i = new KA(t.bounds.left, t.bounds.top + z(t.styles.paddingTop, t.bounds.width), t.bounds.width, Cl(r.lineHeight, r.fontSize.number) / 2 + 1);
        this.renderTextWithLetterSpacing(new hs(A.listValue, i), r.letterSpacing, Cl(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
      }
    }
  }
  async renderStackContent(A) {
    if (hA(
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
          const o = isNaN(r.width) || r.width === 0 ? 1 : r.width, i = isNaN(r.height) || r.height === 0 ? 1 : r.height, [l, c, a, f, B] = Yn(A, t, [
            o,
            i,
            o / i
          ]), h = this.ctx.createPattern(this.resizeImage(r, f, B), "repeat");
          this.renderRepeat(l, h, c, a);
        }
      } else if (Sb(s)) {
        const [r, n, o, i, l] = Yn(A, t, [null, null, null]), [c, a, f, B, h] = Eb(s.angle, i, l), C = document.createElement("canvas");
        C.width = i, C.height = l;
        const U = C.getContext("2d"), y = U.createLinearGradient(a, B, f, h);
        if (wl(s.stops, c || 1).forEach((I) => y.addColorStop(I.stop, aA(I.color))), U.fillStyle = y, U.fillRect(0, 0, i, l), i > 0 && l > 0) {
          const I = this.ctx.createPattern(C, "repeat");
          this.renderRepeat(r, I, n, o);
        }
      } else if (Kb(s)) {
        const [r, n, o, i, l] = Yn(A, t, [
          null,
          null,
          null
        ]), c = s.position.length === 0 ? [zo] : s.position, a = z(c[0], i), f = z(c[c.length - 1], l);
        let [B, h] = Hb(s, a, f, i, l);
        if ((B === 0 || h === 0) && (B = Math.max(B, 0.01), h = Math.max(h, 0.01)), B > 0 && h > 0) {
          const C = this.ctx.createRadialGradient(n + a, o + f, 0, n + a, o + f, B);
          if (wl(s.stops, B * 2).forEach((U) => C.addColorStop(U.stop, aA(U.color))), this.path(r), this.ctx.fillStyle = C, B !== h) {
            const U = A.bounds.left + 0.5 * A.bounds.width, y = A.bounds.top + 0.5 * A.bounds.height, I = h / B, x = 1 / I;
            this.ctx.save(), this.ctx.translate(U, y), this.ctx.transform(1, 0, 0, I, 0, 0), this.ctx.translate(-U, -y), this.ctx.fillRect(n, x * (o - y) + y, i, l * x), this.ctx.restore();
          } else
            this.ctx.fill();
        }
      }
      t--;
    }
  }
  async renderSolidBorder(A, t, s) {
    this.path(zl(s, t)), this.ctx.fillStyle = aA(A), this.ctx.fill();
  }
  async renderDoubleBorder(A, t, s, r) {
    if (t < 3) {
      await this.renderSolidBorder(A, s, r);
      return;
    }
    const n = W1(r, s);
    this.path(n), this.ctx.fillStyle = aA(A), this.ctx.fill();
    const o = Y1(r, s);
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
    ], n = rm(Et(t.backgroundClip, 0), A.curves);
    (s || t.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), Ye(t.backgroundColor) || (this.ctx.fillStyle = aA(t.backgroundColor), this.ctx.fill()), await this.renderBackgroundImage(A.container), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((i) => {
      this.ctx.save();
      const l = Tr(A.curves), c = i.inset ? 0 : tm, a = X1(l, -c + (i.inset ? 1 : -1) * i.spread.number, (i.inset ? 1 : -1) * i.spread.number, i.spread.number * (i.inset ? -2 : 2), i.spread.number * (i.inset ? -2 : 2));
      i.inset ? (this.path(l), this.ctx.clip(), this.mask(a)) : (this.mask(l), this.ctx.clip(), this.path(a)), this.ctx.shadowOffsetX = i.offsetX.number + c, this.ctx.shadowOffsetY = i.offsetY.number, this.ctx.shadowColor = aA(i.color), this.ctx.shadowBlur = i.blur.number, this.ctx.fillStyle = i.inset ? aA(i.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
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
    const o = j1(r, s), i = zl(r, s);
    n === 2 && (this.path(i), this.ctx.clip());
    let l, c, a, f;
    jA(i[0]) ? (l = i[0].start.x, c = i[0].start.y) : (l = i[0].x, c = i[0].y), jA(i[1]) ? (a = i[1].end.x, f = i[1].end.y) : (a = i[1].x, f = i[1].y);
    let B;
    s === 0 || s === 2 ? B = Math.abs(l - a) : B = Math.abs(c - f), this.ctx.beginPath(), n === 3 ? this.formatPath(o) : this.formatPath(i.slice(0, 2));
    let h = t < 3 ? t * 3 : t * 2, C = t < 3 ? t * 2 : t;
    n === 3 && (h = t, C = t);
    let U = !0;
    if (B <= h * 2)
      U = !1;
    else if (B <= h * 2 + C) {
      const y = B / (2 * h + C);
      h *= y, C *= y;
    } else {
      const y = Math.floor((B + C) / (h + C)), I = (B - y * h) / (y - 1), x = (B - (y + 1) * h) / y;
      C = x <= 0 || Math.abs(C - I) < Math.abs(C - x) ? I : x;
    }
    if (U && (n === 3 ? this.ctx.setLineDash([0, h + C]) : this.ctx.setLineDash([h, C])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = aA(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
      if (jA(i[0])) {
        const y = i[3], I = i[0];
        this.ctx.beginPath(), this.formatPath([new O(y.end.x, y.end.y), new O(I.start.x, I.start.y)]), this.ctx.stroke();
      }
      if (jA(i[1])) {
        const y = i[1], I = i[2];
        this.ctx.beginPath(), this.formatPath([new O(y.end.x, y.end.y), new O(I.start.x, I.start.y)]), this.ctx.stroke();
      }
    }
    this.ctx.restore();
  }
  async render(A) {
    this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const t = J1(A);
    return await this.renderStack(t), this.applyEffects([]), this.canvas;
  }
}
const sm = (e) => e instanceof ef || e instanceof Af ? !0 : e instanceof ps && e.type !== Lr && e.type !== _r, rm = (e, A) => {
  switch (e) {
    case 0:
      return Tr(A);
    case 2:
      return N1(A);
    case 1:
    default:
      return kr(A);
  }
}, nm = (e) => {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, om = ["-apple-system", "system-ui"], im = (e) => /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter((A) => om.indexOf(A) === -1) : e;
class lm extends hf {
  constructor(A, t) {
    super(A, t), this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${t.width}x${t.height} at ${t.x},${t.y}) with scale ${t.scale}`);
  }
  async render(A) {
    const t = Uo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), s = await am(t);
    return this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const am = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => {
    A(s);
  }, s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
});
class pf {
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
pf.instances = {};
class cn {
  constructor(A, t) {
    this.windowBounds = t, this.instanceName = `#${cn.instanceCount++}`, this.logger = new pf({ id: this.instanceName, enabled: A.logging }), this.cache = A.cache ?? new S1(this, A);
  }
}
cn.instanceCount = 1;
let wf;
const cm = (e) => {
  wf = e;
}, Qf = (e, A = {}) => fm(e, A);
Qf.setCspNonce = cm;
typeof window < "u" && Ae.setContext(window);
const fm = async (e, A) => {
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
  }, i = new KA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), l = new cn(n, i), c = A.foreignObjectRendering ?? !1, a = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: c,
    copyStyles: c,
    cspNonce: wf
  };
  l.logger.debug(`Starting document clone with size ${i.width}x${i.height} scrolled to ${-i.left},${-i.top}`);
  const f = new Jl(l, e, a), B = f.clonedReferenceElement;
  if (!B)
    return Promise.reject("Unable to find element in cloned iframe");
  const h = await f.toIFrame(t, i), { width: C, height: U, left: y, top: I } = ti(B) || h1(B) ? N0(B.ownerDocument) : Zr(l, B), x = um(l, B, A.backgroundColor), g = {
    canvas: A.canvas,
    backgroundColor: x,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + y,
    y: (A.y ?? 0) + I,
    width: A.width ?? Math.ceil(C),
    height: A.height ?? Math.ceil(U)
  };
  let m;
  if (c)
    l.logger.debug("Document cloned, using foreign object rendering"), m = await new lm(l, g).render(B);
  else {
    l.logger.debug(`Document cloned, element located at ${y},${I} with size ${C}x${U} using computed rendering`), l.logger.debug("Starting DOM parsing");
    const S = rf(l, B);
    x === S.styles.backgroundColor && (S.styles.backgroundColor = pe.TRANSPARENT), l.logger.debug(`Starting renderer for element at ${g.x},${g.y} with size ${g.width}x${g.height}`), m = await new si(l, g).render(S);
  }
  return (A.removeContainer ?? !0) && (Jl.destroy(h) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), l.logger.debug("Finished rendering"), m;
}, um = (e, A, t) => {
  const s = A.ownerDocument, r = s.documentElement ? St(e, getComputedStyle(s.documentElement).backgroundColor) : pe.TRANSPARENT, n = s.body ? St(e, getComputedStyle(s.body).backgroundColor) : pe.TRANSPARENT, o = typeof t == "string" ? St(e, t) : t === null ? pe.TRANSPARENT : 4294967295;
  return A === s.documentElement ? Ye(r) ? Ye(n) ? o : n : r : o;
};
async function Bm(e = {}) {
  var a;
  const A = window.innerWidth, t = window.innerHeight;
  try {
    (a = e.beforeCapture) == null || a.call(e);
  } catch {
  }
  const s = (() => {
    var f;
    try {
      return (((f = e.canvases) == null ? void 0 : f.call(e)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), r = s.map((f) => {
    try {
      return f.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(s), o = e.ignore || [];
  let i = null;
  try {
    i = await Promise.race([
      Qf(document.body, {
        useCORS: !0,
        allowTaint: !0,
        backgroundColor: null,
        scale: 1,
        width: A,
        height: t,
        ignoreElements: (f) => {
          var B;
          return n.has(f) || f.tagName && f.tagName.toLowerCase().startsWith("bugfix-") || (B = e.ignoreElement) != null && B.call(e, f) ? !0 : o.some((h) => {
            var C;
            try {
              return (C = f.matches) == null ? void 0 : C.call(f, h);
            } catch {
              return !1;
            }
          });
        }
      }),
      new Promise((f, B) => setTimeout(() => B(new Error("화면 렌더 시간 초과(15초)")), e.timeoutMs || 15e3))
    ]);
  } catch (f) {
    if (console.warn("[BugReport] 화면 UI 렌더 실패 - 캔버스 배경만 저장:", (f == null ? void 0 : f.message) || f), !r.length) throw f;
  }
  const l = document.createElement("canvas");
  l.width = A, l.height = t;
  const c = l.getContext("2d");
  for (const f of r)
    await new Promise((B) => {
      const h = new Image();
      h.onload = () => {
        c.drawImage(h, 0, 0, A, t), B();
      }, h.onerror = B, h.src = f;
    });
  return i && c.drawImage(i, 0, 0), l.toDataURL("image/png");
}
const xt = (e, A = 2) => String(e).padStart(A, "0");
function re(e = !1) {
  const A = /* @__PURE__ */ new Date(), t = `${xt(A.getHours())}:${xt(A.getMinutes())}:${xt(A.getSeconds())}.${xt(A.getMilliseconds(), 3)}`;
  return e ? `${A.getFullYear()}-${xt(A.getMonth() + 1)}-${xt(A.getDate())} ${t}` : t;
}
function Ks(e) {
  const A = [];
  return { push(t) {
    A.push(t), A.length > e && A.shift();
  }, get: () => [...A] };
}
const dm = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function gm(e) {
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
function hm({ max: e = 200, silent: A = dm } = {}) {
  const t = Ks(e);
  for (const s of ["log", "warn", "error"]) {
    const r = console[s].bind(console);
    console[s] = (...n) => {
      const o = n.map(gm).join(" ");
      A.some((i) => i.test(o)) || (t.push({ level: s, time: re(!0), message: o }), r(...n));
    };
  }
  return window.addEventListener("error", (s) => t.push({ level: "error", time: re(!0), message: `[GlobalError] ${s.message} (${s.filename}:${s.lineno})` })), window.addEventListener("unhandledrejection", (s) => {
    const r = s.reason instanceof Error ? s.reason.message : String(s.reason);
    t.push({ level: "error", time: re(!0), message: `[UnhandledRejection] ${r}` });
  }), t.get;
}
const pm = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, wm = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function Io(e, A = 2e3) {
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
  return pm.test(e || "") || wm.test(t) ? "[masked]" : Io(A);
}
function Qm({ max: e = 50, axios: A = [], fetch: t = !1, xhr: s = !1, ignore: r = [] } = {}) {
  const n = Ks(e), o = (i) => r.some((l) => l instanceof RegExp ? l.test(i) : String(i).includes(l));
  for (const i of A) {
    const l = i != null && i.interceptors ? i : i == null ? void 0 : i.instance, c = (i == null ? void 0 : i.label) || "axios";
    l != null && l.interceptors && (l.interceptors.request.use((a) => (a._bk = { t0: Date.now(), time: re(!0) }, a), (a) => Promise.reject(a)), l.interceptors.response.use((a) => {
      var B;
      const f = a.config._bk || {};
      return o(a.config.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (B = a.config.method) == null ? void 0 : B.toUpperCase(), url: a.config.url, params: Io(a.config.params), requestBody: Oe(a.config.url, a.config.data), status: a.status, responseBody: Oe(a.config.url, a.data), error: null }), a;
    }, (a) => {
      var B, h, C, U, y, I, x, g, m, S, G;
      const f = ((B = a.config) == null ? void 0 : B._bk) || {};
      return o((h = a.config) == null ? void 0 : h.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (U = (C = a.config) == null ? void 0 : C.method) == null ? void 0 : U.toUpperCase(), url: (y = a.config) == null ? void 0 : y.url, params: Io((I = a.config) == null ? void 0 : I.params), requestBody: Oe((x = a.config) == null ? void 0 : x.url, (g = a.config) == null ? void 0 : g.data), status: ((m = a.response) == null ? void 0 : m.status) ?? "ERR", responseBody: Oe((S = a.config) == null ? void 0 : S.url, (G = a.response) == null ? void 0 : G.data), error: a.message }), Promise.reject(a);
    }));
  }
  if (t && window.fetch) {
    const i = window.fetch.bind(window);
    window.fetch = async (l, c = {}) => {
      const a = typeof l == "string" ? l : l == null ? void 0 : l.url, f = Date.now(), B = re(!0), h = (c.method || typeof l != "string" && (l == null ? void 0 : l.method) || "GET").toUpperCase();
      try {
        const C = await i(l, c);
        return o(a) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: h, url: a, params: null, requestBody: Oe(a, c.body), status: C.status, responseBody: null, error: null }), C;
      } catch (C) {
        throw o(a) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: h, url: a, params: null, requestBody: Oe(a, c.body), status: "ERR", responseBody: null, error: C.message }), C;
      }
    };
  }
  if (s && window.XMLHttpRequest) {
    const i = XMLHttpRequest.prototype, l = i.open, c = i.send;
    i.open = function(a, f, ...B) {
      return this._bk = { method: String(a).toUpperCase(), url: f }, l.call(this, a, f, ...B);
    }, i.send = function(a) {
      const f = this._bk || {}, B = Date.now(), h = re(!0);
      return this.addEventListener("loadend", () => {
        o(f.url) || n.push({ server: "xhr", time: h, duration: Date.now() - B, method: f.method, url: f.url, params: null, requestBody: Oe(f.url, a), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Oe(f.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), c.call(this, a);
    };
  }
  return n.get;
}
function Cm(e) {
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
function bm(e, { max: A = 100 } = {}) {
  const t = Ks(A);
  return e.subscribe((s) => t.push({ time: re(), type: s.type, payload: Cm(s.payload) })), t.get;
}
function Um(e, { max: A = 20 } = {}) {
  const t = Ks(A);
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
        const l = o.apply(this, i);
        return r(), l;
      };
    }
    window.addEventListener("popstate", r), window.addEventListener("hashchange", r);
  }
  return t.get;
}
function Fm(e, { max: A = 80, skip: t = [] } = {}) {
  const s = Ks(A), r = new Set(t), n = e.emit.bind(e);
  return e.emit = (o, i) => (r.has(o) || s.push({ time: re(), type: o }), n(o, i)), s.get;
}
function Em() {
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
function Hm(e) {
  return {
    subscribe: (A) => e.subscribe((t, s) => {
      const r = Object.keys(t).filter((n) => t[n] !== (s == null ? void 0 : s[n]));
      A({ type: `set(${r.join(",") || "?"})`, payload: Object.fromEntries(r.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function mm(e) {
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
    const i = ["token", "password", "secret", "auth-tokens-", ...e.options.storageExclude || []].map((l) => l.toLowerCase());
    s = {};
    for (let l = 0; l < localStorage.length; l++) {
      const c = localStorage.key(l);
      if (i.some((f) => c.toLowerCase().includes(f))) continue;
      const a = localStorage.getItem(c);
      s[c] = a && a.length > 200 ? a.slice(0, 200) + "…" : a;
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
const Zt = () => [];
function xm(e = {}) {
  var a;
  const A = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...e }, t = A.interceptors || {}, s = t.console === !1 ? Zt : hm(t.console === !0 ? {} : t.console), r = t.network ? Qm(t.network) : Zt, n = t.mutation ? bm(t.mutation) : Zt, o = t.router ? Um(t.router === !0 ? null : t.router) : Zt, i = t.events ? Fm(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Zt, l = ((a = A.projects) != null && a.length ? A.projects : [{ key: A.project, label: A.project }]).map((f) => typeof f == "string" ? { key: f, label: f } : f), c = {
    options: A,
    projects: l,
    project: l[0].key,
    api: yn({ ...A, project: l[0].key, apiKey: l[0].apiKey ?? A.apiKey, adminKey: A.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const f of l)
        if (!c._info[f.key])
          try {
            c._info[f.key] = await yn({ ...A, project: f.key, apiKey: f.apiKey ?? A.apiKey, adminKey: A.adminKey }).info();
          } catch {
            c._info[f.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(f) {
      const B = l.find((h) => h.key === f);
      B && (c.project = B.key, c.api = yn({ ...A, project: B.key, apiKey: B.apiKey ?? A.apiKey, adminKey: A.adminKey }));
    },
    getLogs: s,
    getNetwork: r,
    getMutations: n,
    getRoutes: o,
    getEvents: i,
    captureScreen: (f = {}) => {
      var B;
      return Bm({ ...A.capture || {}, ...f, ignore: [...((B = A.capture) == null ? void 0 : B.ignore) || [], ...f.ignore || []] });
    },
    captureContext: () => mm(c),
    fetchBackendLogs: async () => A.backendLogs ? await A.backendLogs() : null,
    notify: (f) => {
      A.notify ? A.notify(f) : c._listeners.forEach((B) => B(f));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(f) {
      return c._listeners.add(f), () => c._listeners.delete(f);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (c._els.modal) return c;
      const f = document.createElement("bugfix-report-modal"), B = document.createElement("bugfix-viewer");
      return f.kit = c, B.kit = c, document.body.append(f, B), c._els = { modal: f, viewer: B }, c;
    },
    openReport: () => {
      var f, B, h, C;
      return ((B = (f = c._els.modal) == null ? void 0 : f.open) == null ? void 0 : B.call(f)) ?? ((C = (h = c._open) == null ? void 0 : h.report) == null ? void 0 : C.call(h));
    },
    openViewer: (f) => {
      var B, h, C, U;
      return ((h = (B = c._els.viewer) == null ? void 0 : B.open) == null ? void 0 : h.call(B, f)) ?? ((U = (C = c._open) == null ? void 0 : C.viewer) == null ? void 0 : U.call(C, f));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(f, B) {
      c._open[f] = B;
    }
  };
  if (A.hotkeys) {
    const f = (B, h) => {
      if (!h) return !1;
      const C = h.split("+").map((y) => y.trim().toLowerCase()), U = C.pop();
      return B.key.toLowerCase() === U && C.includes("shift") === B.shiftKey && C.includes("ctrl") === B.ctrlKey && C.includes("alt") === B.altKey && C.includes("meta") === B.metaKey;
    };
    window.addEventListener("keydown", (B) => {
      f(B, A.hotkeys.report) ? (B.preventDefault(), c.openReport()) : f(B, A.hotkeys.viewer) && (B.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function ym() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ Pi(Jh)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ Pi(R0));
}
ym();
function Im(e = {}) {
  if (typeof window > "u") return null;
  if (window.bugfixKit) return window.bugfixKit;
  const A = () => window.__bugfix || {}, t = e.restBase ? String(e.restBase).replace(/\/+$/, "") : "", s = xm({
    endpoint: e.endpoint || "/bugfix",
    project: e.project || "app",
    apiKey: e.apiKey || "",
    user: () => {
      var r, n;
      try {
        return ((n = (r = A()).user) == null ? void 0 : n.call(r)) ?? "anonymous";
      } catch {
        return "anonymous";
      }
    },
    context: () => {
      var r, n;
      try {
        return ((n = (r = A()).context) == null ? void 0 : n.call(r)) ?? {};
      } catch {
        return {};
      }
    },
    capture: {
      // 화면에 보이는 큰 캔버스(지도·3D)를 배경으로 깐다. WebGL 이 preserveDrawingBuffer 없이 그리면 beforeCapture 로 한 프레임 다시 그린다
      canvases: () => [...document.querySelectorAll("canvas")].filter((r) => r.width > 200 && r.height > 200 && r.getClientRects().length).sort((r, n) => n.width * n.height - r.width * r.height).slice(0, 2),
      beforeCapture: () => {
        var r, n;
        try {
          (n = (r = A()).beforeCapture) == null || n.call(r);
        } catch {
        }
      }
    },
    // 백엔드 어댑터(bugfix-adapter)의 최근 로그 끝점 - REST 경로를 알 때만
    backendLogs: t ? async () => {
      const r = await fetch(`${t}/debug/recent-logs?level=INFO&limit=300`);
      if (!r.ok) return [];
      const n = await r.json();
      return Array.isArray(n) ? n : (n == null ? void 0 : n.content) ?? [];
    } : void 0,
    interceptors: { console: !0, network: { fetch: !0, xhr: !0 }, router: !0, mutation: A().mutation },
    hotkeys: { report: "Shift+F9", viewer: "Shift+F10" },
    ...A().options || {}
  }).mount();
  return window.bugfixKit = s, s;
}
export {
  Im as autoMount,
  xm as createBugfix,
  Em as reduxMiddleware,
  Hm as zustandSource
};
