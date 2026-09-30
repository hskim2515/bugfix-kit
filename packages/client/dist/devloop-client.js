/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function Ko(e) {
  const A = /* @__PURE__ */ Object.create(null);
  for (const t of e.split(",")) A[t] = 1;
  return (t) => t in A;
}
const iA = {}, at = [], ge = () => {
}, ia = () => !1, Mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nr = (e) => e.startsWith("onUpdate:"), CA = Object.assign, Do = (e, A) => {
  const t = e.indexOf(A);
  t > -1 && e.splice(t, 1);
}, kf = Object.prototype.hasOwnProperty, AA = (e, A) => kf.call(e, A), G = Array.isArray, We = (e) => Ls(e) === "[object Map]", Tt = (e) => Ls(e) === "[object Set]", hi = (e) => Ls(e) === "[object Date]", W = (e) => typeof e == "function", BA = (e) => typeof e == "string", Qe = (e) => typeof e == "symbol", nA = (e) => e !== null && typeof e == "object", la = (e) => (nA(e) || W(e)) && W(e.then) && W(e.catch), aa = Object.prototype.toString, Ls = (e) => aa.call(e), Tf = (e) => Ls(e).slice(8, -1), Pr = (e) => Ls(e) === "[object Object]", Ro = (e) => BA(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cs = /* @__PURE__ */ Ko(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vr = (e) => {
  const A = /* @__PURE__ */ Object.create(null);
  return (t) => A[t] || (A[t] = e(t));
}, Kf = /-\w/g, xA = Vr(
  (e) => e.replace(Kf, (A) => A.slice(1).toUpperCase())
), Df = /\B([A-Z])/g, XA = Vr(
  (e) => e.replace(Df, "-$1").toLowerCase()
), Gr = Vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Vr(
  (e) => e ? `on${Gr(e)}` : ""
), Ie = (e, A) => !Object.is(e, A), dr = (e, ...A) => {
  for (let t = 0; t < e.length; t++)
    e[t](...A);
}, ca = (e, A, t, s = !1) => {
  Object.defineProperty(e, A, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: t
  });
}, Oo = (e) => {
  const A = parseFloat(e);
  return isNaN(A) ? e : A;
}, pi = (e) => {
  const A = BA(e) ? Number(e) : NaN;
  return isNaN(A) ? e : A;
};
let wi;
const Xr = () => wi || (wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ss(e) {
  if (G(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++) {
      const s = e[t], r = BA(s) ? Nf(s) : Ss(s);
      if (r)
        for (const n in r)
          A[n] = r[n];
    }
    return A;
  } else if (BA(e) || nA(e))
    return e;
}
const Rf = /;(?![^(]*\))/g, Of = /:([^]+)/, Mf = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Nf(e) {
  const A = {};
  return e.replace(Mf, (t) => t.startsWith("/*") ? "" : t).split(Rf).forEach((t) => {
    if (t) {
      const s = t.split(Of);
      s.length > 1 && (A[s[0].trim()] = s[1].trim());
    }
  }), A;
}
function Y(e) {
  let A = "";
  if (BA(e))
    A = e;
  else if (G(e))
    for (let t = 0; t < e.length; t++) {
      const s = Y(e[t]);
      s && (A += s + " ");
    }
  else if (nA(e))
    for (const t in e)
      e[t] && (A += t + " ");
  return A.trim();
}
const Pf = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Vf = /* @__PURE__ */ Ko(Pf);
function fa(e) {
  return !!e || e === "";
}
function Gf(e, A, t) {
  if (e.length !== A.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Rt(e[r], A[r], t);
  return s;
}
function Qi(e, A, t) {
  if (e.size !== A.size) return !1;
  const s = Array.from(A), r = new Uint8Array(s.length);
  for (const n of e) {
    let o = -1;
    for (let i = 0; i < s.length; i++)
      if (!r[i] && Rt(n, s[i], t)) {
        o = i;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Xf(e, A, t) {
  let s = We(e), r = We(A);
  if (s || r || (s = Tt(e), r = Tt(A), s || r))
    return s && r ? Qi(e, A, t) : !1;
  const n = Object.keys(e).length, o = Object.keys(A).length;
  if (n !== o)
    return !1;
  for (const i in e) {
    const l = e.hasOwnProperty(i), c = A.hasOwnProperty(i);
    if (l && !c || !l && c || !Rt(e[i], A[i], t))
      return !1;
  }
  return String(e) === String(A);
}
function Ci(e, A, t, s) {
  t || (t = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [r, n] = t;
  if (r.has(e) || n.has(A))
    return r.get(e) === A && n.get(A) === e;
  r.set(e, A), n.set(A, e);
  const o = s(e, A, t);
  return r.delete(e), n.delete(A), o;
}
function Rt(e, A, t) {
  if (e === A) return !0;
  let s = hi(e), r = hi(A);
  return s || r ? s && r ? e.getTime() === A.getTime() : !1 : (s = Qe(e), r = Qe(A), s || r ? e === A : (s = G(e), r = G(A), s || r ? s && r ? Ci(e, A, t, Gf) : !1 : (s = nA(e), r = nA(A), s || r ? !s || !r ? !1 : Ci(e, A, t, Xf) : String(e) === String(A))));
}
function ua(e, A) {
  return e.findIndex((t) => Rt(t, A));
}
const da = (e) => !!(e && e.__v_isRef === !0), b = (e) => BA(e) ? e : e == null ? "" : G(e) || nA(e) && (e.toString === aa || !W(e.toString)) ? da(e) ? b(e.value) : JSON.stringify(e, Ba, 2) : String(e), Ba = (e, A) => da(A) ? Ba(e, A.value) : We(A) ? {
  [`Map(${A.size})`]: [...A.entries()].reduce(
    (t, [s, r], n) => (t[wn(s, n) + " =>"] = r, t),
    {}
  )
} : Tt(A) ? {
  [`Set(${A.size})`]: [...A.values()].map((t) => wn(t))
} : Qe(A) ? wn(A) : nA(A) && !G(A) && !Pr(A) ? String(A) : A, wn = (e, A = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    Qe(e) ? `Symbol(${(t = e.description) != null ? t : A})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yA;
class Jf {
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
function Wf() {
  return yA;
}
let cA;
const Qn = /* @__PURE__ */ new WeakSet();
class ga {
  constructor(A) {
    this.fn = A, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yA && (yA.active ? yA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, Qn.has(this) && (Qn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || pa(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, bi(this), wa(this);
    const A = cA, t = ee;
    cA = this, ee = !0;
    try {
      return this.fn();
    } finally {
      Qa(this), cA = A, ee = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let A = this.deps; A; A = A.nextDep)
        Po(A);
      this.deps = this.depsTail = void 0, bi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? Qn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    qn(this) && this.run();
  }
  get dirty() {
    return qn(this);
  }
}
let ha = 0, fs, us;
function pa(e, A = !1) {
  if (e.flags |= 8, A) {
    e.next = us, us = e;
    return;
  }
  e.next = fs, fs = e;
}
function Mo() {
  ha++;
}
function No() {
  if (--ha > 0)
    return;
  if (us) {
    let A = us;
    for (us = void 0; A; ) {
      const t = A.next;
      A.next = void 0, A.flags &= -9, A = t;
    }
  }
  let e;
  for (; fs; ) {
    let A = fs;
    for (fs = void 0; A; ) {
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
function wa(e) {
  for (let A = e.deps; A; A = A.nextDep)
    A.version = -1, A.prevActiveLink = A.dep.activeLink, A.dep.activeLink = A;
}
function Qa(e) {
  let A, t = e.depsTail, s = t;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === t && (t = r), Po(s), Yf(s)) : A = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = A, e.depsTail = t;
}
function qn(e) {
  for (let A = e.deps; A; A = A.nextDep)
    if (A.dep.version !== A.version || A.dep.computed && (Ca(A.dep.computed) || A.dep.version !== A.version))
      return !0;
  return !!e._dirty;
}
function Ca(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === Fs) || (e.globalVersion = Fs, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !qn(e))))
    return;
  e.flags |= 2;
  const A = e.dep, t = cA, s = ee;
  cA = e, ee = !0;
  try {
    wa(e);
    const r = e.fn(e._value);
    (A.version === 0 || Ie(r, e._value)) && (e.flags |= 128, e._value = r, A.version++);
  } catch (r) {
    throw A.version++, r;
  } finally {
    cA = t, ee = s, Qa(e), e.flags &= -3;
  }
}
function Po(e, A = !1) {
  const { dep: t, prevSub: s, nextSub: r } = e;
  if (s && (s.nextSub = r, e.prevSub = void 0), r && (r.prevSub = s, e.nextSub = void 0), t.subs === e && (t.subs = s, !s && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      Po(n, !0);
  }
  !A && !--t.sc && t.map && t.map.delete(t.key);
}
function Yf(e) {
  const { prevDep: A, nextDep: t } = e;
  A && (A.nextDep = t, e.prevDep = void 0), t && (t.prevDep = A, e.nextDep = void 0);
}
let ee = !0;
const ba = [];
function ke() {
  ba.push(ee), ee = !1;
}
function Te() {
  const e = ba.pop();
  ee = e === void 0 ? !0 : e;
}
function bi(e) {
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
let Fs = 0;
class jf {
  constructor(A, t) {
    this.sub = A, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Ua {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A) {
    this.computed = A, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(A) {
    if (!cA || !ee || cA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== cA)
      t = this.activeLink = new jf(cA, this), cA.deps ? (t.prevDep = cA.depsTail, cA.depsTail.nextDep = t, cA.depsTail = t) : cA.deps = cA.depsTail = t, Fa(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const s = t.nextDep;
      s.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = s), t.prevDep = cA.depsTail, t.nextDep = void 0, cA.depsTail.nextDep = t, cA.depsTail = t, cA.deps === t && (cA.deps = s);
    }
    return t;
  }
  trigger(A) {
    this.version++, Fs++, this.notify(A);
  }
  notify(A) {
    Mo();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      No();
    }
  }
}
function Fa(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const A = e.dep.computed;
    if (A && !e.dep.subs) {
      A.flags |= 20;
      for (let s = A.deps; s; s = s.nextDep)
        Fa(s);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
  }
}
const Ao = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), eo = /* @__PURE__ */ Symbol(
  ""
), ms = /* @__PURE__ */ Symbol(
  ""
);
function LA(e, A, t) {
  if (ee && cA) {
    let s = Ao.get(e);
    s || Ao.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(t);
    r || (s.set(t, r = new Ua()), r.map = s, r.key = t), r.track();
  }
}
function _e(e, A, t, s, r, n) {
  const o = Ao.get(e);
  if (!o) {
    Fs++;
    return;
  }
  const i = (l) => {
    l && l.trigger();
  };
  if (Mo(), A === "clear")
    o.forEach(i);
  else {
    const l = G(e), c = l && Ro(t);
    if (l && t === "length") {
      const f = Number(s);
      o.forEach((a, d) => {
        (d === "length" || d === ms || !Qe(d) && d >= f) && i(a);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && i(o.get(t)), c && i(o.get(ms)), A) {
        case "add":
          l ? c && i(o.get("length")) : (i(o.get(dt)), We(e) && i(o.get(eo)));
          break;
        case "delete":
          l || (i(o.get(dt)), We(e) && i(o.get(eo)));
          break;
        case "set":
          We(e) && i(o.get(dt));
          break;
      }
  }
  No();
}
function Qt(e) {
  const A = /* @__PURE__ */ rA(e);
  return A === e || (LA(A, "iterate", ms), /* @__PURE__ */ te(e)) ? A : /* @__PURE__ */ Ke(e) ? /* @__PURE__ */ Ye(e) ? A.map((t) => ze(Ce(t))) : A.map(ze) : A.map(Ce);
}
function Jr(e) {
  return LA(e = /* @__PURE__ */ rA(e), "iterate", ms), e;
}
function de(e, A) {
  return /* @__PURE__ */ Ke(e) ? ze(/* @__PURE__ */ Ye(e) ? Ce(A) : A) : Ce(A);
}
const Zf = {
  __proto__: null,
  [Symbol.iterator]() {
    return Cn(this, Symbol.iterator, (e) => de(this, e));
  },
  concat(...e) {
    return Qt(this).concat(
      ...e.map((A) => G(A) ? Qt(A) : A)
    );
  },
  entries() {
    return Cn(this, "entries", (e) => (e[1] = de(this, e[1]), e));
  },
  every(e, A) {
    return me(this, "every", e, A, void 0, arguments);
  },
  filter(e, A) {
    return me(
      this,
      "filter",
      e,
      A,
      (t) => t.map((s) => de(this, s)),
      arguments
    );
  },
  find(e, A) {
    return me(
      this,
      "find",
      e,
      A,
      (t) => de(this, t),
      arguments
    );
  },
  findIndex(e, A) {
    return me(this, "findIndex", e, A, void 0, arguments);
  },
  findLast(e, A) {
    return me(
      this,
      "findLast",
      e,
      A,
      (t) => de(this, t),
      arguments
    );
  },
  findLastIndex(e, A) {
    return me(this, "findLastIndex", e, A, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(e, A) {
    return me(this, "forEach", e, A, void 0, arguments);
  },
  includes(...e) {
    return bn(this, "includes", e);
  },
  indexOf(...e) {
    return bn(this, "indexOf", e);
  },
  join(e) {
    return Qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return bn(this, "lastIndexOf", e);
  },
  map(e, A) {
    return me(this, "map", e, A, void 0, arguments);
  },
  pop() {
    return Jt(this, "pop");
  },
  push(...e) {
    return Jt(this, "push", e);
  },
  reduce(e, ...A) {
    return Ui(this, "reduce", e, A);
  },
  reduceRight(e, ...A) {
    return Ui(this, "reduceRight", e, A);
  },
  shift() {
    return Jt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(e, A) {
    return me(this, "some", e, A, void 0, arguments);
  },
  splice(...e) {
    return Jt(this, "splice", e);
  },
  toReversed() {
    return Qt(this).toReversed();
  },
  toSorted(e) {
    return Qt(this).toSorted(e);
  },
  toSpliced(...e) {
    return Qt(this).toSpliced(...e);
  },
  unshift(...e) {
    return Jt(this, "unshift", e);
  },
  values() {
    return Cn(this, "values", (e) => de(this, e));
  }
};
function Cn(e, A, t) {
  const s = Jr(e), r = s[A]();
  return s !== e && !/* @__PURE__ */ te(e) && (r._next = r.next, r.next = () => {
    const n = r._next();
    return n.done || (n.value = t(n.value)), n;
  }), r;
}
const zf = Array.prototype;
function me(e, A, t, s, r, n) {
  const o = Jr(e), i = o !== e && !/* @__PURE__ */ te(e), l = o[A];
  if (l !== zf[A]) {
    const a = l.apply(e, n);
    return i ? Ce(a) : a;
  }
  let c = t;
  o !== e && (i ? c = function(a, d) {
    return t.call(this, de(e, a), d, e);
  } : t.length > 2 && (c = function(a, d) {
    return t.call(this, a, d, e);
  }));
  const f = l.call(o, c, s);
  return i && r ? r(f) : f;
}
function Ui(e, A, t, s) {
  const r = Jr(e), n = r !== e && !/* @__PURE__ */ te(e);
  let o = t, i = !1;
  r !== e && (n ? (i = s.length === 0, o = function(c, f, a) {
    return i && (i = !1, c = de(e, c)), t.call(this, c, de(e, f), a, e);
  }) : t.length > 3 && (o = function(c, f, a) {
    return t.call(this, c, f, a, e);
  }));
  const l = r[A](o, ...s);
  return i ? de(e, l) : l;
}
function bn(e, A, t) {
  const s = /* @__PURE__ */ rA(e);
  LA(s, "iterate", ms);
  const r = s[A](...t);
  return (r === -1 || r === !1) && /* @__PURE__ */ Jo(t[0]) ? (t[0] = /* @__PURE__ */ rA(t[0]), s[A](...t)) : r;
}
function Jt(e, A, t = []) {
  ke(), Mo();
  const s = (/* @__PURE__ */ rA(e))[A].apply(e, t);
  return No(), Te(), s;
}
const $f = /* @__PURE__ */ Ko("__proto__,__v_isRef,__isVue"), ma = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(Qe)
);
function qf(e) {
  Qe(e) || (e = String(e));
  const A = /* @__PURE__ */ rA(this);
  return LA(A, "has", e), A.hasOwnProperty(e);
}
class xa {
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
      return s === (r ? n ? au : Ha : n ? Ea : ya).get(A) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(A) === Object.getPrototypeOf(s) ? A : void 0;
    const o = G(A);
    if (!r) {
      let l;
      if (o && (l = Zf[t]))
        return l;
      if (t === "hasOwnProperty")
        return qf;
    }
    const i = Reflect.get(
      A,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ OA(A) ? A : s
    );
    if ((Qe(t) ? ma.has(t) : $f(t)) || (r || LA(A, "get", t), n))
      return i;
    if (/* @__PURE__ */ OA(i)) {
      const l = o && Ro(t) ? i : i.value;
      return r && nA(l) ? /* @__PURE__ */ so(l) : l;
    }
    return nA(i) ? r ? /* @__PURE__ */ so(i) : /* @__PURE__ */ Go(i) : i;
  }
}
class va extends xa {
  constructor(A = !1) {
    super(!1, A);
  }
  set(A, t, s, r) {
    let n = A[t];
    const o = G(A) && Ro(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ke(n);
      if (!/* @__PURE__ */ te(s) && !/* @__PURE__ */ Ke(s) && (n = /* @__PURE__ */ rA(n), s = /* @__PURE__ */ rA(s)), !o && /* @__PURE__ */ OA(n) && !/* @__PURE__ */ OA(s))
        return c || (n.value = s), !0;
    }
    const i = o ? Number(t) < A.length : AA(A, t), l = Reflect.set(
      A,
      t,
      s,
      /* @__PURE__ */ OA(A) ? A : r
    );
    return A === /* @__PURE__ */ rA(r) && l && (i ? Ie(s, n) && _e(A, "set", t, s) : _e(A, "add", t, s)), l;
  }
  deleteProperty(A, t) {
    const s = AA(A, t);
    A[t];
    const r = Reflect.deleteProperty(A, t);
    return r && s && _e(A, "delete", t, void 0), r;
  }
  has(A, t) {
    const s = Reflect.has(A, t);
    return (!Qe(t) || !ma.has(t)) && LA(A, "has", t), s;
  }
  ownKeys(A) {
    return LA(
      A,
      "iterate",
      G(A) ? "length" : dt
    ), Reflect.ownKeys(A);
  }
}
class Au extends xa {
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
const eu = /* @__PURE__ */ new va(), tu = /* @__PURE__ */ new Au(), su = /* @__PURE__ */ new va(!0);
const to = (e) => e, Ns = (e) => Reflect.getPrototypeOf(e);
function ru(e, A, t) {
  return function(...s) {
    const r = this.__v_raw, n = /* @__PURE__ */ rA(r), o = We(n), i = e === "entries" || e === Symbol.iterator && o, l = e === "keys" && o, c = r[e](...s), f = t ? to : A ? ze : Ce;
    return !A && LA(
      n,
      "iterate",
      l ? eo : dt
    ), CA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: a, done: d } = c.next();
          return d ? { value: a, done: d } : {
            value: i ? [f(a[0]), f(a[1])] : f(a),
            done: d
          };
        }
      }
    );
  };
}
function Ps(e) {
  return function(...A) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function nu(e, A) {
  const t = {
    get(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      e || (Ie(r, i) && LA(o, "get", r), LA(o, "get", i));
      const { has: l } = Ns(o), c = A ? to : e ? ze : Ce;
      if (l.call(o, r))
        return c(n.get(r));
      if (l.call(o, i))
        return c(n.get(i));
      n !== o && n.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && LA(/* @__PURE__ */ rA(r), "iterate", dt), r.size;
    },
    has(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      return e || (Ie(r, i) && LA(o, "has", r), LA(o, "has", i)), r === i ? n.has(r) : n.has(r) || n.has(i);
    },
    forEach(r, n) {
      const o = this, i = o.__v_raw, l = /* @__PURE__ */ rA(i), c = A ? to : e ? ze : Ce;
      return !e && LA(l, "iterate", dt), i.forEach((f, a) => r.call(n, c(f), c(a), o));
    }
  };
  return CA(
    t,
    e ? {
      add: Ps("add"),
      set: Ps("set"),
      delete: Ps("delete"),
      clear: Ps("clear")
    } : {
      add(r) {
        const n = /* @__PURE__ */ rA(this), o = Ns(n), i = /* @__PURE__ */ rA(r), l = !A && !/* @__PURE__ */ te(r) && !/* @__PURE__ */ Ke(r) ? i : r;
        return o.has.call(n, l) || Ie(r, l) && o.has.call(n, r) || Ie(i, l) && o.has.call(n, i) || (n.add(l), _e(n, "add", l, l)), this;
      },
      set(r, n) {
        !A && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Ke(n) && (n = /* @__PURE__ */ rA(n));
        const o = /* @__PURE__ */ rA(this), { has: i, get: l } = Ns(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ rA(r), c = i.call(o, r));
        const f = l.call(o, r);
        return o.set(r, n), c ? Ie(n, f) && _e(o, "set", r, n) : _e(o, "add", r, n), this;
      },
      delete(r) {
        const n = /* @__PURE__ */ rA(this), { has: o, get: i } = Ns(n);
        let l = o.call(n, r);
        l || (r = /* @__PURE__ */ rA(r), l = o.call(n, r)), i && i.call(n, r);
        const c = n.delete(r);
        return l && _e(n, "delete", r, void 0), c;
      },
      clear() {
        const r = /* @__PURE__ */ rA(this), n = r.size !== 0, o = r.clear();
        return n && _e(
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
    t[r] = ru(r, e, A);
  }), t;
}
function Vo(e, A) {
  const t = nu(e, A);
  return (s, r, n) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    AA(t, r) && r in s ? t : s,
    r,
    n
  );
}
const ou = {
  get: /* @__PURE__ */ Vo(!1, !1)
}, iu = {
  get: /* @__PURE__ */ Vo(!1, !0)
}, lu = {
  get: /* @__PURE__ */ Vo(!0, !1)
};
const ya = /* @__PURE__ */ new WeakMap(), Ea = /* @__PURE__ */ new WeakMap(), Ha = /* @__PURE__ */ new WeakMap(), au = /* @__PURE__ */ new WeakMap();
function cu(e) {
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
function Go(e) {
  return /* @__PURE__ */ Ke(e) ? e : Xo(
    e,
    !1,
    eu,
    ou,
    ya
  );
}
// @__NO_SIDE_EFFECTS__
function fu(e) {
  return Xo(
    e,
    !1,
    su,
    iu,
    Ea
  );
}
// @__NO_SIDE_EFFECTS__
function so(e) {
  return Xo(
    e,
    !0,
    tu,
    lu,
    Ha
  );
}
function Xo(e, A, t, s, r) {
  if (!nA(e) || e.__v_raw && !(A && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const o = cu(Tf(e));
  if (o === 0)
    return e;
  const i = new Proxy(
    e,
    o === 2 ? s : t
  );
  return r.set(e, i), i;
}
// @__NO_SIDE_EFFECTS__
function Ye(e) {
  return /* @__PURE__ */ Ke(e) ? /* @__PURE__ */ Ye(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ke(e) {
  return !!(e && e.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function te(e) {
  return !!(e && e.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function Jo(e) {
  return e ? !!e.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function rA(e) {
  const A = e && e.__v_raw;
  return A ? /* @__PURE__ */ rA(A) : e;
}
function uu(e) {
  return !AA(e, "__v_skip") && Object.isExtensible(e) && ca(e, "__v_skip", !0), e;
}
const Ce = (e) => nA(e) ? /* @__PURE__ */ Go(e) : e, ze = (e) => nA(e) ? /* @__PURE__ */ so(e) : e;
// @__NO_SIDE_EFFECTS__
function OA(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Ia(e) {
  return /* @__PURE__ */ OA(e) ? e.value : e;
}
const du = {
  get: (e, A, t) => A === "__v_raw" ? e : Ia(Reflect.get(e, A, t)),
  set: (e, A, t, s) => {
    const r = e[A];
    return /* @__PURE__ */ OA(r) && !/* @__PURE__ */ OA(t) ? (r.value = t, !0) : Reflect.set(e, A, t, s);
  }
};
function _a(e) {
  return /* @__PURE__ */ Ye(e) ? e : new Proxy(e, du);
}
class Bu {
  constructor(A, t, s) {
    this.fn = A, this.setter = t, this._value = void 0, this.dep = new Ua(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = Fs - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    cA !== this)
      return pa(this, !0), !0;
  }
  get value() {
    const A = this.dep.track();
    return Ca(this), A && (A.version = this.dep.version), this._value;
  }
  set value(A) {
    this.setter && this.setter(A);
  }
}
// @__NO_SIDE_EFFECTS__
function gu(e, A, t = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new Bu(s, r, t);
}
const Vs = {}, Ur = /* @__PURE__ */ new WeakMap();
let ot;
function hu(e, A = !1, t = ot) {
  if (t) {
    let s = Ur.get(t);
    s || Ur.set(t, s = []), s.push(e);
  }
}
function pu(e, A, t = iA) {
  const { immediate: s, deep: r, once: n, scheduler: o, augmentJob: i, call: l } = t, c = (x) => r ? x : /* @__PURE__ */ te(x) || r === !1 || r === 0 ? Le(x, 1) : Le(x);
  let f, a, d, g, Q = !1, U = !1;
  if (/* @__PURE__ */ OA(e) ? (a = () => e.value, Q = /* @__PURE__ */ te(e)) : /* @__PURE__ */ Ye(e) ? (a = () => c(e), Q = !0) : G(e) ? (U = !0, Q = e.some((x) => /* @__PURE__ */ Ye(x) || /* @__PURE__ */ te(x)), a = () => e.map((x) => {
    if (/* @__PURE__ */ OA(x))
      return x.value;
    if (/* @__PURE__ */ Ye(x))
      return c(x);
    if (W(x))
      return l ? l(x, 2) : x();
  })) : W(e) ? A ? a = l ? () => l(e, 2) : e : a = () => {
    if (d) {
      ke();
      try {
        d();
      } finally {
        Te();
      }
    }
    const x = ot;
    ot = f;
    try {
      return l ? l(e, 3, [g]) : e(g);
    } finally {
      ot = x;
    }
  } : a = ge, A && r) {
    const x = a, S = r === !0 ? 1 / 0 : r;
    a = () => Le(x(), S);
  }
  const m = Wf(), _ = () => {
    f.stop(), m && m.active && Do(m.effects, f);
  };
  if (n && A) {
    const x = A;
    A = (...S) => {
      const X = x(...S);
      return _(), X;
    };
  }
  let v = U ? new Array(e.length).fill(Vs) : Vs;
  const h = (x) => {
    if (!(!(f.flags & 1) || !f.dirty && !x))
      if (A) {
        const S = f.run();
        if (x || r || Q || (U ? S.some((X, eA) => Ie(X, v[eA])) : Ie(S, v))) {
          d && d();
          const X = ot;
          ot = f;
          try {
            const eA = [
              S,
              // pass undefined as the old value when it's changed for the first time
              v === Vs ? void 0 : U && v[0] === Vs ? [] : v,
              g
            ];
            v = S, l ? l(A, 3, eA) : (
              // @ts-expect-error
              A(...eA)
            );
          } finally {
            ot = X;
          }
        }
      } else
        f.run();
  };
  return i && i(h), f = new ga(a), f.scheduler = o ? () => o(h, !1) : h, g = (x) => hu(x, !1, f), d = f.onStop = () => {
    const x = Ur.get(f);
    if (x) {
      if (l)
        l(x, 4);
      else
        for (const S of x) S();
      Ur.delete(f);
    }
  }, A ? s ? h(!0) : v = f.run() : o ? o(h.bind(null, !0), !0) : f.run(), _.pause = f.pause.bind(f), _.resume = f.resume.bind(f), _.stop = _, _;
}
function Le(e, A = 1 / 0, t) {
  if (A <= 0 || !nA(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(e) || 0) >= A))
    return e;
  if (t.set(e, A), A--, /* @__PURE__ */ OA(e))
    Le(e.value, A, t);
  else if (G(e))
    for (let s = 0; s < e.length; s++)
      Le(e[s], A, t);
  else if (Tt(e) || We(e))
    e.forEach((s) => {
      Le(s, A, t);
    });
  else if (Pr(e)) {
    for (const s in e)
      Le(e[s], A, t);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Le(e[s], A, t);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function ks(e, A, t, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Wr(r, A, t);
  }
}
function ne(e, A, t, s) {
  if (W(e)) {
    const r = ks(e, A, t, s);
    return r && la(r) && r.catch((n) => {
      Wr(n, A, t);
    }), r;
  }
  if (G(e)) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      r.push(ne(e[n], A, t, s));
    return r;
  }
}
function Wr(e, A, t, s = !0) {
  const r = A ? A.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: o } = A && A.appContext.config || iA;
  if (A) {
    let i = A.parent;
    const l = A.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const f = i.ec;
      if (f) {
        for (let a = 0; a < f.length; a++)
          if (f[a](e, l, c) === !1)
            return;
      }
      i = i.parent;
    }
    if (n) {
      ke(), ks(n, null, 10, [
        e,
        l,
        c
      ]), Te();
      return;
    }
  }
  wu(e, t, r, s, o);
}
function wu(e, A, t, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const RA = [];
let fe = -1;
const It = [];
let Pe = null, yt = 0;
const La = /* @__PURE__ */ Promise.resolve();
let Fr = null;
function Sa(e) {
  const A = Fr || La;
  return e ? A.then(this ? e.bind(this) : e) : A;
}
function Qu(e) {
  let A = fe + 1, t = RA.length;
  for (; A < t; ) {
    const s = A + t >>> 1, r = RA[s], n = xs(r);
    n < e || n === e && r.flags & 2 ? A = s + 1 : t = s;
  }
  return A;
}
function Wo(e) {
  if (!(e.flags & 1)) {
    const A = xs(e), t = RA[RA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && A >= xs(t) ? RA.push(e) : RA.splice(Qu(A), 0, e), e.flags |= 1, ka();
  }
}
function ka() {
  Fr || (Fr = La.then(Ka));
}
function Cu(e) {
  if (!G(e))
    Pe && e.id === -1 ? Pe.splice(yt + 1, 0, e) : e.flags & 1 || (It.push(e), e.flags |= 1);
  else
    for (let A = 0; A < e.length; A++)
      It.push(e[A]);
  ka();
}
function Fi(e, A, t = fe + 1) {
  for (; t < RA.length; t++) {
    const s = RA[t];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      RA.splice(t, 1), t--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Ta(e) {
  if (It.length) {
    const A = [...new Set(It)].sort(
      (t, s) => xs(t) - xs(s)
    );
    if (It.length = 0, Pe) {
      for (let t = 0; t < A.length; t++)
        Pe.push(A[t]);
      return;
    }
    for (Pe = A, yt = 0; yt < Pe.length; yt++) {
      const t = Pe[yt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Pe = null, yt = 0;
  }
}
const xs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Ka(e) {
  try {
    for (fe = 0; fe < RA.length; fe++) {
      const A = RA[fe];
      A && !(A.flags & 8) && (A.flags & 4 && (A.flags &= -2), ks(
        A,
        A.i,
        A.i ? 15 : 14
      ), A.flags & 4 || (A.flags &= -2));
    }
  } finally {
    for (; fe < RA.length; fe++) {
      const A = RA[fe];
      A && (A.flags &= -2);
    }
    fe = -1, RA.length = 0, Ta(), Fr = null, (RA.length || It.length) && Ka();
  }
}
let JA = null, Da = null;
function mr(e) {
  const A = JA;
  return JA = e, Da = e && e.type.__scopeId || null, A;
}
function bu(e, A = JA, t) {
  if (!A || e._n)
    return e;
  const s = (...r) => {
    s._d && Ti(-1);
    const n = mr(A), o = Bt.length;
    let i;
    try {
      i = e(...r);
    } finally {
      for (let l = Bt.length; l > o; l--) ac();
      mr(n), s._d && Ti(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function mA(e, A) {
  if (JA === null)
    return e;
  const t = $r(JA), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < A.length; r++) {
    let [n, o, i, l = iA] = A[r];
    n && (W(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && Le(o), s.push({
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
function st(e, A, t, s) {
  const r = e.dirs, n = A && A.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    n && (i.oldValue = n[o].value);
    let l = i.dir[s];
    l && (ke(), ne(l, t, 8, [
      e.el,
      i,
      e,
      A
    ]), Te());
  }
}
function Uu(e, A) {
  if (SA) {
    let t = SA.provides;
    const s = SA.parent && SA.parent.provides;
    s === t && (t = SA.provides = Object.create(s)), t[e] = A;
  }
}
function Br(e, A, t = !1) {
  const s = Ud();
  if (s || _t) {
    let r = _t ? _t._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && W(A) ? A.call(s && s.proxy) : A;
  }
}
const Fu = /* @__PURE__ */ Symbol.for("v-scx"), mu = () => Br(Fu);
function Un(e, A, t) {
  return Ra(e, A, t);
}
function Ra(e, A, t = iA) {
  const { immediate: s, deep: r, flush: n, once: o } = t, i = CA({}, t), l = A && s || !A && n !== "post";
  let c;
  if (Es) {
    if (n === "sync") {
      const g = mu();
      c = g.__watcherHandles || (g.__watcherHandles = []);
    } else if (!l) {
      const g = () => {
      };
      return g.stop = ge, g.resume = ge, g.pause = ge, g;
    }
  }
  const f = SA;
  i.call = (g, Q, U) => ne(g, f, Q, U);
  let a = !1;
  n === "post" ? i.scheduler = (g) => {
    MA(g, f && f.suspense);
  } : n !== "sync" && (a = !0, i.scheduler = (g, Q) => {
    Q ? g() : Wo(g);
  }), i.augmentJob = (g) => {
    A && (g.flags |= 4), a && (g.flags |= 2, f && (g.id = f.uid, g.i = f));
  };
  const d = pu(e, A, i);
  return Es && (c ? c.push(d) : l && d()), d;
}
function xu(e, A, t) {
  const s = this.proxy, r = BA(e) ? e.includes(".") ? Oa(s, e) : () => s[e] : e.bind(s, s);
  let n;
  W(A) ? n = A : (n = A.handler, t = A);
  const o = Ts(this), i = Ra(r, n.bind(s), t);
  return o(), i;
}
function Oa(e, A) {
  const t = A.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < t.length && s; r++)
      s = s[t[r]];
    return s;
  };
}
const vu = /* @__PURE__ */ Symbol("_vte"), Yr = (e) => e.__isTeleport, Fn = /* @__PURE__ */ Symbol("_leaveCb");
function yu(e) {
  let A = e[0];
  if (e.length > 1) {
    for (const t of e)
      if (t.type !== De) {
        A = t;
        break;
      }
  }
  return A;
}
function Ma(e) {
  if (!jo(e))
    return Yr(e.type) && e.children ? yu(e.children) : e;
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
function Yo(e, A) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = A;
    const t = e.component.subTree;
    Yo(
      Yr(t.type) && Ma(t) || t,
      A
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = A.clone(e.ssContent), e.ssFallback.transition = A.clone(e.ssFallback)) : e.transition = A;
}
// @__NO_SIDE_EFFECTS__
function Eu(e, A) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: e.name }, A, { setup: e })
  ) : e;
}
function Na(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function mi(e, A) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(e, A)) && !t.configurable);
}
const xr = /* @__PURE__ */ new WeakMap();
function ds(e, A, t, s, r = !1) {
  if (G(e)) {
    e.forEach(
      (U, m) => ds(
        U,
        A && (G(A) ? A[m] : A),
        t,
        s,
        r
      )
    );
    return;
  }
  if (Bs(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && ds(e, A, t, s.component.subTree);
    return;
  }
  const n = s.shapeFlag & 4 ? $r(s.component) : s.el, o = r ? null : n, { i, r: l } = e, c = A && A.r, f = i.refs === iA ? i.refs = {} : i.refs, a = i.setupState, d = /* @__PURE__ */ rA(a), g = a === iA ? ia : (U) => mi(f, U) ? !1 : AA(d, U), Q = (U, m) => !(m && mi(f, m));
  if (c != null && c !== l) {
    if (xi(A), BA(c))
      f[c] = null, g(c) && (a[c] = null);
    else if (/* @__PURE__ */ OA(c)) {
      const U = A;
      Q(c, U.k) && (c.value = null), U.k && (f[U.k] = null);
    }
  }
  if (W(l))
    ks(l, i, 12, [o, f]);
  else {
    const U = BA(l), m = /* @__PURE__ */ OA(l);
    if (U || m) {
      const _ = () => {
        if (e.f) {
          const v = U ? g(l) ? a[l] : f[l] : Q() || !e.k ? l.value : f[e.k];
          if (r)
            G(v) && Do(v, n);
          else if (G(v))
            v.includes(n) || v.push(n);
          else if (U)
            f[l] = [n], g(l) && (a[l] = f[l]);
          else {
            const h = [n];
            Q(l, e.k) && (l.value = h), e.k && (f[e.k] = h);
          }
        } else U ? (f[l] = o, g(l) && (a[l] = o)) : m && (Q(l, e.k) && (l.value = o), e.k && (f[e.k] = o));
      };
      if (o) {
        const v = () => {
          _(), xr.delete(e);
        };
        v.id = -1, xr.set(e, v), MA(v, t);
      } else
        xi(e), _();
    }
  }
}
function xi(e) {
  const A = xr.get(e);
  A && (A.flags |= 8, xr.delete(e));
}
Xr().requestIdleCallback;
Xr().cancelIdleCallback;
const Bs = (e) => !!e.type.__asyncLoader, jo = (e) => e.type.__isKeepAlive;
function Hu(e, A) {
  Pa(e, "a", A);
}
function Iu(e, A) {
  Pa(e, "da", A);
}
function Pa(e, A, t = SA) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (jr(A, s, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      jo(r.parent.vnode) && _u(s, A, t, r), r = r.parent;
  }
}
function _u(e, A, t, s) {
  const r = jr(
    A,
    e,
    s,
    !0
    /* prepend */
  );
  Va(() => {
    Do(s[A], r);
  }, t);
}
function jr(e, A, t = SA, s = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), n = A.__weh || (A.__weh = (...o) => {
      ke();
      const i = Ts(t), l = ne(A, t, e, o);
      return i(), Te(), l;
    });
    return s ? r.unshift(n) : r.push(n), n;
  }
}
const Re = (e) => (A, t = SA) => {
  (!Es || e === "sp") && jr(e, (...s) => A(...s), t);
}, Lu = Re("bm"), Su = Re("m"), ku = Re(
  "bu"
), Tu = Re("u"), Ku = Re(
  "bum"
), Va = Re("um"), Du = Re(
  "sp"
), Ru = Re("rtg"), Ou = Re("rtc");
function Mu(e, A = SA) {
  jr("ec", e, A);
}
const Ga = "components";
function Nu(e, A) {
  return Xa(Ga, e, !0, A) || e;
}
const Pu = /* @__PURE__ */ Symbol.for("v-ndc");
function Vu(e) {
  return BA(e) && Xa(Ga, e, !1) || e;
}
function Xa(e, A, t = !0, s = !1) {
  const r = JA || SA;
  if (r) {
    const n = r.type;
    {
      const i = yd(
        n,
        !1
      );
      if (i && (i === A || i === xA(A) || i === Gr(xA(A))))
        return n;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      vi(r[e] || n[e], A) || // global registration
      vi(r.appContext[e], A)
    );
    return !o && s ? n : o;
  }
}
function vi(e, A) {
  return e && (e[A] || e[xA(A)] || e[Gr(xA(A))]);
}
function q(e, A, t, s) {
  let r;
  const n = t, o = G(e);
  if (o || BA(e)) {
    const i = o && /* @__PURE__ */ Ye(e);
    let l = !1, c = !1;
    i && (l = !/* @__PURE__ */ te(e), c = /* @__PURE__ */ Ke(e), e = Jr(e)), r = new Array(e.length);
    for (let f = 0, a = e.length; f < a; f++)
      r[f] = A(
        l ? c ? ze(Ce(e[f])) : Ce(e[f]) : e[f],
        f,
        void 0,
        n
      );
  } else if (typeof e == "number") {
    r = new Array(e);
    for (let i = 0; i < e; i++)
      r[i] = A(i + 1, i, void 0, n);
  } else if (nA(e))
    if (e[Symbol.iterator])
      r = Array.from(
        e,
        (i, l) => A(i, l, void 0, n)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let l = 0, c = i.length; l < c; l++) {
        const f = i[l];
        r[l] = A(e[f], f, l, n);
      }
    }
  else
    r = [];
  return r;
}
const ro = (e) => e ? dc(e) ? $r(e) : ro(e.parent) : null, gs = (
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
    $parent: (e) => ro(e.parent),
    $root: (e) => ro(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Wa(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Wo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Sa.bind(e.proxy)),
    $watch: (e) => xu.bind(e)
  })
), mn = (e, A) => e !== iA && !e.__isScriptSetup && AA(e, A), Gu = {
  get({ _: e }, A) {
    if (A === "__v_skip")
      return !0;
    const { ctx: t, setupState: s, data: r, props: n, accessCache: o, type: i, appContext: l } = e;
    if (A[0] !== "$") {
      const d = o[A];
      if (d !== void 0)
        switch (d) {
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
        if (mn(s, A))
          return o[A] = 1, s[A];
        if (r !== iA && AA(r, A))
          return o[A] = 2, r[A];
        if (AA(n, A))
          return o[A] = 3, n[A];
        if (t !== iA && AA(t, A))
          return o[A] = 4, t[A];
        no && (o[A] = 0);
      }
    }
    const c = gs[A];
    let f, a;
    if (c)
      return A === "$attrs" && LA(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (f = i.__cssModules) && (f = f[A])
    )
      return f;
    if (t !== iA && AA(t, A))
      return o[A] = 4, t[A];
    if (
      // global properties
      a = l.config.globalProperties, AA(a, A)
    )
      return a[A];
  },
  set({ _: e }, A, t) {
    const { data: s, setupState: r, ctx: n } = e;
    return mn(r, A) ? (r[A] = t, !0) : s !== iA && AA(s, A) ? (s[A] = t, !0) : AA(e.props, A) || A[0] === "$" && A.slice(1) in e ? !1 : (n[A] = t, !0);
  },
  has({
    _: { data: e, setupState: A, accessCache: t, ctx: s, appContext: r, props: n, type: o }
  }, i) {
    let l;
    return !!(t[i] || e !== iA && i[0] !== "$" && AA(e, i) || mn(A, i) || AA(n, i) || AA(s, i) || AA(gs, i) || AA(r.config.globalProperties, i) || (l = o.__cssModules) && l[i]);
  },
  defineProperty(e, A, t) {
    return t.get != null ? e._.accessCache[A] = 0 : AA(t, "value") && this.set(e, A, t.value, null), Reflect.defineProperty(e, A, t);
  }
};
function yi(e) {
  return G(e) ? e.reduce(
    (A, t) => (A[t] = null, A),
    {}
  ) : e;
}
let no = !0;
function Xu(e) {
  const A = Wa(e), t = e.proxy, s = e.ctx;
  no = !1, A.beforeCreate && Ei(A.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: n,
    methods: o,
    watch: i,
    provide: l,
    inject: c,
    // lifecycle
    created: f,
    beforeMount: a,
    mounted: d,
    beforeUpdate: g,
    updated: Q,
    activated: U,
    deactivated: m,
    beforeDestroy: _,
    beforeUnmount: v,
    destroyed: h,
    unmounted: x,
    render: S,
    renderTracked: X,
    renderTriggered: eA,
    errorCaptured: bA,
    serverPrefetch: uA,
    // public API
    expose: At,
    inheritAttrs: Pt,
    // assets
    components: Ds,
    directives: Rs,
    filters: gn
  } = A;
  if (c && Ju(c, s, null), o)
    for (const gA in o) {
      const lA = o[gA];
      W(lA) && (s[gA] = lA.bind(t));
    }
  if (r) {
    const gA = r.call(t, t);
    nA(gA) && (e.data = /* @__PURE__ */ Go(gA));
  }
  if (no = !0, n)
    for (const gA in n) {
      const lA = n[gA], et = W(lA) ? lA.bind(t, t) : W(lA.get) ? lA.get.bind(t, t) : ge, Os = !W(lA) && W(lA.set) ? lA.set.bind(t) : ge, tt = Hd({
        get: et,
        set: Os
      });
      Object.defineProperty(s, gA, {
        enumerable: !0,
        configurable: !0,
        get: () => tt.value,
        set: ($A) => tt.value = $A
      });
    }
  if (i)
    for (const gA in i)
      Ja(i[gA], s, t, gA);
  if (l) {
    const gA = W(l) ? l.call(t) : l;
    Reflect.ownKeys(gA).forEach((lA) => {
      Uu(lA, gA[lA]);
    });
  }
  f && Ei(f, e, "c");
  function TA(gA, lA) {
    G(lA) ? lA.forEach((et) => gA(et.bind(t))) : lA && gA(lA.bind(t));
  }
  if (TA(Lu, a), TA(Su, d), TA(ku, g), TA(Tu, Q), TA(Hu, U), TA(Iu, m), TA(Mu, bA), TA(Ou, X), TA(Ru, eA), TA(Ku, v), TA(Va, x), TA(Du, uA), G(At))
    if (At.length) {
      const gA = e.exposed || (e.exposed = {});
      At.forEach((lA) => {
        Object.defineProperty(gA, lA, {
          get: () => t[lA],
          set: (et) => t[lA] = et,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  S && e.render === ge && (e.render = S), Pt != null && (e.inheritAttrs = Pt), Ds && (e.components = Ds), Rs && (e.directives = Rs), uA && Na(e);
}
function Ju(e, A, t = ge) {
  G(e) && (e = oo(e));
  for (const s in e) {
    const r = e[s];
    let n;
    nA(r) ? "default" in r ? n = Br(
      r.from || s,
      r.default,
      !0
    ) : n = Br(r.from || s) : n = Br(r), /* @__PURE__ */ OA(n) ? Object.defineProperty(A, s, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    }) : A[s] = n;
  }
}
function Ei(e, A, t) {
  ne(
    G(e) ? e.map((s) => s.bind(A.proxy)) : e.bind(A.proxy),
    A,
    t
  );
}
function Ja(e, A, t, s) {
  let r = s.includes(".") ? Oa(t, s) : () => t[s];
  if (BA(e)) {
    const n = A[e];
    W(n) && Un(r, n);
  } else if (W(e))
    Un(r, e.bind(t));
  else if (nA(e))
    if (G(e))
      e.forEach((n) => Ja(n, A, t, s));
    else {
      const n = W(e.handler) ? e.handler.bind(t) : A[e.handler];
      W(n) && Un(r, n, e);
    }
}
function Wa(e) {
  const A = e.type, { mixins: t, extends: s } = A, {
    mixins: r,
    optionsCache: n,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = n.get(A);
  let l;
  return i ? l = i : !r.length && !t && !s ? l = A : (l = {}, r.length && r.forEach(
    (c) => vr(l, c, o, !0)
  ), vr(l, A, o)), nA(A) && n.set(A, l), l;
}
function vr(e, A, t, s = !1) {
  const { mixins: r, extends: n } = A;
  n && vr(e, n, t, !0), r && r.forEach(
    (o) => vr(e, o, t, !0)
  );
  for (const o in A)
    if (!(s && o === "expose")) {
      const i = Wu[o] || t && t[o];
      e[o] = i ? i(e[o], A[o]) : A[o];
    }
  return e;
}
const Wu = {
  data: Hi,
  props: Ii,
  emits: Ii,
  // objects
  methods: qt,
  computed: qt,
  // lifecycle
  beforeCreate: KA,
  created: KA,
  beforeMount: KA,
  mounted: KA,
  beforeUpdate: KA,
  updated: KA,
  beforeDestroy: KA,
  beforeUnmount: KA,
  destroyed: KA,
  unmounted: KA,
  activated: KA,
  deactivated: KA,
  errorCaptured: KA,
  serverPrefetch: KA,
  // assets
  components: qt,
  directives: qt,
  // watch
  watch: ju,
  // provide / inject
  provide: Hi,
  inject: Yu
};
function Hi(e, A) {
  return A ? e ? function() {
    return CA(
      W(e) ? e.call(this, this) : e,
      W(A) ? A.call(this, this) : A
    );
  } : A : e;
}
function Yu(e, A) {
  return qt(oo(e), oo(A));
}
function oo(e) {
  if (G(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++)
      A[e[t]] = e[t];
    return A;
  }
  return e;
}
function KA(e, A) {
  return e ? [...new Set([].concat(e, A))] : A;
}
function qt(e, A) {
  return e ? CA(/* @__PURE__ */ Object.create(null), e, A) : A;
}
function Ii(e, A) {
  return e ? G(e) && G(A) ? [.../* @__PURE__ */ new Set([...e, ...A])] : CA(
    /* @__PURE__ */ Object.create(null),
    yi(e),
    yi(A ?? {})
  ) : A;
}
function ju(e, A) {
  if (!e) return A;
  if (!A) return e;
  const t = CA(/* @__PURE__ */ Object.create(null), e);
  for (const s in A)
    t[s] = KA(e[s], A[s]);
  return t;
}
function Ya() {
  return {
    app: null,
    config: {
      isNativeTag: ia,
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
let Zu = 0;
function zu(e, A) {
  return function(s, r = null) {
    W(s) || (s = CA({}, s)), r != null && !nA(r) && (r = null);
    const n = Ya(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let l = !1;
    const c = n.app = {
      _uid: Zu++,
      _component: s,
      _props: r,
      _container: null,
      _context: n,
      _instance: null,
      version: Id,
      get config() {
        return n.config;
      },
      set config(f) {
      },
      use(f, ...a) {
        return o.has(f) || (f && W(f.install) ? (o.add(f), f.install(c, ...a)) : W(f) && (o.add(f), f(c, ...a))), c;
      },
      mixin(f) {
        return n.mixins.includes(f) || n.mixins.push(f), c;
      },
      component(f, a) {
        return a ? (n.components[f] = a, c) : n.components[f];
      },
      directive(f, a) {
        return a ? (n.directives[f] = a, c) : n.directives[f];
      },
      mount(f, a, d) {
        if (!l) {
          const g = c._ceVNode || he(s, r);
          return g.appContext = n, d === !0 ? d = "svg" : d === !1 && (d = void 0), e(g, f, d), l = !0, c._container = f, f.__vue_app__ = c, $r(g.component);
        }
      },
      onUnmount(f) {
        i.push(f);
      },
      unmount() {
        l && (ne(
          i,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(f, a) {
        return n.provides[f] = a, c;
      },
      runWithContext(f) {
        const a = _t;
        _t = c;
        try {
          return f();
        } finally {
          _t = a;
        }
      }
    };
    return c;
  };
}
let _t = null;
const $u = (e, A) => A === "modelValue" || A === "model-value" ? e.modelModifiers : e[`${A}Modifiers`] || e[`${xA(A)}Modifiers`] || e[`${XA(A)}Modifiers`];
function qu(e, A, ...t) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || iA;
  let r = t;
  const n = A.startsWith("update:"), o = n && $u(s, A.slice(7));
  o && (o.trim && (r = t.map((f) => BA(f) ? f.trim() : f)), o.number && (r = r.map(Oo)));
  let i, l = s[i = pn(A)] || // also try camelCase event handler (#2249)
  s[i = pn(xA(A))];
  !l && n && (l = s[i = pn(XA(A))]), l && ne(
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
const Ad = /* @__PURE__ */ new WeakMap();
function ja(e, A, t = !1) {
  const s = t ? Ad : A.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const n = e.emits;
  let o = {}, i = !1;
  if (!W(e)) {
    const l = (c) => {
      const f = ja(c, A, !0);
      f && (i = !0, CA(o, f));
    };
    !t && A.mixins.length && A.mixins.forEach(l), e.extends && l(e.extends), e.mixins && e.mixins.forEach(l);
  }
  return !n && !i ? (nA(e) && s.set(e, null), null) : (G(n) ? n.forEach((l) => o[l] = null) : CA(o, n), nA(e) && s.set(e, o), o);
}
function Zr(e, A) {
  return !e || !Mr(A) ? !1 : (A = A.slice(2), A = A === "Once" ? A : A.replace(/Once$/, ""), AA(e, A[0].toLowerCase() + A.slice(1)) || AA(e, XA(A)) || AA(e, A));
}
function _i(e) {
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
    renderCache: f,
    props: a,
    data: d,
    setupState: g,
    ctx: Q,
    inheritAttrs: U
  } = e, m = mr(e);
  let _, v;
  try {
    if (t.shapeFlag & 4) {
      const x = r || s, S = x;
      _ = Be(
        c.call(
          S,
          x,
          f,
          a,
          g,
          d,
          Q
        )
      ), v = i;
    } else {
      const x = A;
      _ = Be(
        x.length > 1 ? x(
          a,
          { attrs: i, slots: o, emit: l }
        ) : x(
          a,
          null
        )
      ), v = A.props ? i : ed(i);
    }
  } catch (x) {
    Bt.length = 0, Wr(x, e, 1), _ = he(De);
  }
  let h = _;
  if (v && U !== !1) {
    const x = Object.keys(v), { shapeFlag: S } = h;
    x.length && S & 7 && (n && x.some(Nr) && (v = td(
      v,
      n
    )), h = Kt(h, v, !1, !0));
  }
  if (t.dirs && (h = Kt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const x = Yr(h.type) && Ma(h) || h;
    Yo(x, t.transition);
  }
  return _ = h, mr(m), _;
}
const ed = (e) => {
  let A;
  for (const t in e)
    (t === "class" || t === "style" || Mr(t)) && ((A || (A = {}))[t] = e[t]);
  return A;
}, td = (e, A) => {
  const t = {};
  for (const s in e)
    (!Nr(s) || !(s.slice(9) in A)) && (t[s] = e[s]);
  return t;
};
function sd(e, A, t) {
  const { props: s, children: r, component: n } = e, { props: o, children: i, patchFlag: l } = A, c = n.emitsOptions;
  if (A.dirs || A.transition)
    return !0;
  if (t && l >= 0) {
    if (l & 1024)
      return !0;
    if (l & 16)
      return s ? Li(s, o, c) : !!o;
    if (l & 8) {
      const f = A.dynamicProps;
      for (let a = 0; a < f.length; a++) {
        const d = f[a];
        if (Za(o, s, d) && !Zr(c, d))
          return !0;
      }
    }
  } else
    return (r || i) && (!i || !i.$stable) ? !0 : s === o ? !1 : s ? o ? Li(s, o, c) : !0 : !!o;
  return !1;
}
function Li(e, A, t) {
  const s = Object.keys(A);
  if (s.length !== Object.keys(e).length)
    return !0;
  for (let r = 0; r < s.length; r++) {
    const n = s[r];
    if (Za(A, e, n) && !Zr(t, n))
      return !0;
  }
  return !1;
}
function Za(e, A, t) {
  const s = e[t], r = A[t];
  return t === "style" && nA(s) && nA(r) ? !Rt(s, r) : s !== r;
}
function rd({ vnode: e, parent: A, suspense: t }, s) {
  for (; A; ) {
    const r = A.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = A.vnode).el = s, A = A.parent;
    else
      break;
  }
  t && t.activeBranch === e && (t.vnode.el = s);
}
const za = {}, $a = () => Object.create(za), qa = (e) => Object.getPrototypeOf(e) === za;
function nd(e, A, t, s = !1) {
  const r = {}, n = $a();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), Ac(e, A, r, n);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  t ? e.props = s ? r : /* @__PURE__ */ fu(r) : e.type.props ? e.props = r : e.props = n, e.attrs = n;
}
function od(e, A, t, s) {
  const {
    props: r,
    attrs: n,
    vnode: { patchFlag: o }
  } = e, i = /* @__PURE__ */ rA(r), [l] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const f = e.vnode.dynamicProps;
      for (let a = 0; a < f.length; a++) {
        let d = f[a];
        if (Zr(e.emitsOptions, d))
          continue;
        const g = A[d];
        if (l)
          if (AA(n, d))
            g !== n[d] && (n[d] = g, c = !0);
          else {
            const Q = xA(d);
            r[Q] = io(
              l,
              i,
              Q,
              g,
              e,
              !1
            );
          }
        else
          g !== n[d] && (n[d] = g, c = !0);
      }
    }
  } else {
    Ac(e, A, r, n) && (c = !0);
    let f;
    for (const a in i)
      (!A || // for camelCase
      !AA(A, a) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((f = XA(a)) === a || !AA(A, f))) && (l ? t && // for camelCase
      (t[a] !== void 0 || // for kebab-case
      t[f] !== void 0) && (r[a] = io(
        l,
        i,
        a,
        void 0,
        e,
        !0
      )) : delete r[a]);
    if (n !== i)
      for (const a in n)
        (!A || !AA(A, a)) && (delete n[a], c = !0);
  }
  c && _e(e.attrs, "set", "");
}
function Ac(e, A, t, s) {
  const [r, n] = e.propsOptions;
  let o = !1, i;
  if (A)
    for (let l in A) {
      if (cs(l))
        continue;
      const c = A[l];
      let f;
      r && AA(r, f = xA(l)) ? !n || !n.includes(f) ? t[f] = c : (i || (i = {}))[f] = c : Zr(e.emitsOptions, l) || (!(l in s) || c !== s[l]) && (s[l] = c, o = !0);
    }
  if (n) {
    const l = /* @__PURE__ */ rA(t), c = i || iA;
    for (let f = 0; f < n.length; f++) {
      const a = n[f];
      t[a] = io(
        r,
        l,
        a,
        c[a],
        e,
        !AA(c, a)
      );
    }
  }
  return o;
}
function io(e, A, t, s, r, n) {
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
          const f = Ts(r);
          s = c[t] = l.call(
            null,
            A
          ), f();
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
const id = /* @__PURE__ */ new WeakMap();
function ec(e, A, t = !1) {
  const s = t ? id : A.propsCache, r = s.get(e);
  if (r)
    return r;
  const n = e.props, o = {}, i = [];
  let l = !1;
  if (!W(e)) {
    const f = (a) => {
      l = !0;
      const [d, g] = ec(a, A, !0);
      CA(o, d), g && i.push(...g);
    };
    !t && A.mixins.length && A.mixins.forEach(f), e.extends && f(e.extends), e.mixins && e.mixins.forEach(f);
  }
  if (!n && !l)
    return nA(e) && s.set(e, at), at;
  if (G(n))
    for (let f = 0; f < n.length; f++) {
      const a = xA(n[f]);
      Si(a) && (o[a] = iA);
    }
  else if (n)
    for (const f in n) {
      const a = xA(f);
      if (Si(a)) {
        const d = n[f], g = o[a] = G(d) || W(d) ? { type: d } : CA({}, d), Q = g.type;
        let U = !1, m = !0;
        if (G(Q))
          for (let _ = 0; _ < Q.length; ++_) {
            const v = Q[_], h = W(v) && v.name;
            if (h === "Boolean") {
              U = !0;
              break;
            } else h === "String" && (m = !1);
          }
        else
          U = W(Q) && Q.name === "Boolean";
        g[
          0
          /* shouldCast */
        ] = U, g[
          1
          /* shouldCastTrue */
        ] = m, (U || AA(g, "default")) && i.push(a);
      }
    }
  const c = [o, i];
  return nA(e) && s.set(e, c), c;
}
function Si(e) {
  return e[0] !== "$" && !cs(e);
}
const Zo = (e) => e === "_" || e === "_ctx" || e === "$stable", zo = (e) => G(e) ? e.map(Be) : [Be(e)], ld = (e, A, t) => {
  if (A._n)
    return A;
  const s = bu((...r) => zo(A(...r)), t);
  return s._c = !1, s;
}, tc = (e, A, t) => {
  const s = e._ctx;
  for (const r in e) {
    if (Zo(r)) continue;
    const n = e[r];
    if (W(n))
      A[r] = ld(r, n, s);
    else if (n != null) {
      const o = zo(n);
      A[r] = () => o;
    }
  }
}, sc = (e, A) => {
  const t = zo(A);
  e.slots.default = () => t;
}, rc = (e, A, t) => {
  for (const s in A)
    (t || !Zo(s)) && (e[s] = A[s]);
}, ad = (e, A, t) => {
  const s = e.slots = $a();
  if (e.vnode.shapeFlag & 32) {
    const r = A._;
    r ? (rc(s, A, t), t && ca(s, "_", r, !0)) : tc(A, s);
  } else A && sc(e, A);
}, cd = (e, A, t) => {
  const { vnode: s, slots: r } = e;
  let n = !0, o = iA;
  if (s.shapeFlag & 32) {
    const i = A._;
    i ? t && i === 1 ? n = !1 : rc(r, A, t) : (n = !A.$stable, tc(A, r)), o = A;
  } else A && (sc(e, A), o = { default: 1 });
  if (n)
    for (const i in r)
      !Zo(i) && o[i] == null && delete r[i];
}, MA = gd;
function fd(e) {
  return ud(e);
}
function ud(e, A) {
  const t = Xr();
  t.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: n,
    createElement: o,
    createText: i,
    createComment: l,
    setText: c,
    setElementText: f,
    parentNode: a,
    nextSibling: d,
    setScopeId: g = ge,
    insertStaticContent: Q
  } = e, U = (B, C, F, L = null, E = null, I = null, K = void 0, T = null, k = !!C.dynamicChildren) => {
    if (B === C)
      return;
    B && !Wt(B, C) && (L = Ms(B), $A(B, E, I, !0), B = null), C.patchFlag === -2 && (k = !1, C.dynamicChildren = null), C.dynamicChildren && B && B.dynamicChildren && B.dynamicChildren.hasOnce && (C.dynamicChildren === at && (C.dynamicChildren = []), C.dynamicChildren.hasOnce = !0);
    const { type: H, ref: P, shapeFlag: O } = C;
    switch (H) {
      case zr:
        m(B, C, F, L);
        break;
      case De:
        _(B, C, F, L);
        break;
      case vn:
        B == null && v(C, F, L, K);
        break;
      case M:
        Ds(
          B,
          C,
          F,
          L,
          E,
          I,
          K,
          T,
          k
        );
        break;
      default:
        O & 1 ? S(
          B,
          C,
          F,
          L,
          E,
          I,
          K,
          T,
          k
        ) : O & 6 ? Rs(
          B,
          C,
          F,
          L,
          E,
          I,
          K,
          T,
          k
        ) : (O & 64 || O & 128) && H.process(
          B,
          C,
          F,
          L,
          E,
          I,
          K,
          T,
          k,
          Gt
        );
    }
    P != null && E ? ds(P, B && B.ref, I, C || B, !C) : P == null && B && B.ref != null && ds(B.ref, null, I, B, !0);
  }, m = (B, C, F, L) => {
    if (B == null)
      s(
        C.el = i(C.children),
        F,
        L
      );
    else {
      const E = C.el = B.el;
      C.children !== B.children && c(E, C.children);
    }
  }, _ = (B, C, F, L) => {
    B == null ? s(
      C.el = l(C.children || ""),
      F,
      L
    ) : C.el = B.el;
  }, v = (B, C, F, L) => {
    [B.el, B.anchor] = Q(
      B.children,
      C,
      F,
      L,
      B.el,
      B.anchor
    );
  }, h = ({ el: B, anchor: C }, F, L) => {
    let E;
    for (; B && B !== C; )
      E = d(B), s(B, F, L), B = E;
    s(C, F, L);
  }, x = ({ el: B, anchor: C }) => {
    let F;
    for (; B && B !== C; )
      F = d(B), r(B), B = F;
    r(C);
  }, S = (B, C, F, L, E, I, K, T, k) => {
    if (C.type === "svg" ? K = "svg" : C.type === "math" && (K = "mathml"), B == null)
      X(
        C,
        F,
        L,
        E,
        I,
        K,
        T,
        k
      );
    else {
      const H = B.el && B.el._isVueCE ? B.el : null;
      try {
        H && H._beginPatch(), uA(
          B,
          C,
          E,
          I,
          K,
          T,
          k
        );
      } finally {
        H && H._endPatch();
      }
    }
  }, X = (B, C, F, L, E, I, K, T) => {
    let k, H;
    const { props: P, shapeFlag: O, transition: N, dirs: J } = B;
    if (k = B.el = o(
      B.type,
      I,
      P && P.is,
      P
    ), O & 8 ? f(k, B.children) : O & 16 && bA(
      B.children,
      k,
      null,
      L,
      E,
      xn(B, I),
      K,
      T
    ), J && st(B, null, L, "created"), eA(k, B, B.scopeId, K, L), P) {
      for (const oA in P)
        oA !== "value" && !cs(oA) && n(k, oA, null, P[oA], I, L);
      "value" in P && n(k, "value", null, P.value, I), (H = P.onVnodeBeforeMount) && ae(H, L, B);
    }
    J && st(B, null, L, "beforeMount");
    const $ = dd(E, N);
    $ && N.beforeEnter(k), s(k, C, F), ((H = P && P.onVnodeMounted) || $ || J) && MA(() => {
      try {
        H && ae(H, L, B), $ && N.enter(k), J && st(B, null, L, "mounted");
      } finally {
      }
    }, E);
  }, eA = (B, C, F, L, E) => {
    if (F && g(B, F), L)
      for (let I = 0; I < L.length; I++)
        g(B, L[I]);
    if (E) {
      let I = E.subTree;
      if (C === I || lc(I.type) && (I.ssContent === C || I.ssFallback === C)) {
        const K = E.vnode;
        eA(
          B,
          K,
          K.scopeId,
          K.slotScopeIds,
          E.parent
        );
      }
    }
  }, bA = (B, C, F, L, E, I, K, T, k = 0) => {
    for (let H = k; H < B.length; H++) {
      const P = B[H] = T ? He(B[H]) : Be(B[H]);
      U(
        null,
        P,
        C,
        F,
        L,
        E,
        I,
        K,
        T
      );
    }
  }, uA = (B, C, F, L, E, I, K) => {
    const T = C.el = B.el;
    let { patchFlag: k, dynamicChildren: H, dirs: P } = C;
    k |= B.patchFlag & 16;
    const O = B.props || iA, N = C.props || iA;
    let J;
    if (F && rt(F, !1), (J = N.onVnodeBeforeUpdate) && ae(J, F, C, B), P && st(C, B, F, "beforeUpdate"), F && rt(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!B.dynamicChildren || B.dynamicChildren.length !== H.length) && (k = 0, K = !1, H = null), (O.innerHTML && N.innerHTML == null || O.textContent && N.textContent == null) && f(T, ""), H ? At(
      B.dynamicChildren,
      H,
      T,
      F,
      L,
      xn(C, E),
      I
    ) : K || lA(
      B,
      C,
      T,
      null,
      F,
      L,
      xn(C, E),
      I,
      !1
    ), k > 0) {
      if (k & 16)
        Pt(T, O, N, F, E);
      else if (k & 2 && O.class !== N.class && n(T, "class", null, N.class, E), k & 4 && n(T, "style", O.style, N.style, E), k & 8) {
        const $ = C.dynamicProps;
        for (let oA = 0; oA < $.length; oA++) {
          const sA = $[oA], UA = O[sA], vA = N[sA];
          (vA !== UA || sA === "value") && n(T, sA, UA, vA, E, F);
        }
      }
      k & 1 && B.children !== C.children && f(T, C.children);
    } else !K && H == null && Pt(T, O, N, F, E);
    ((J = N.onVnodeUpdated) || P) && MA(() => {
      J && ae(J, F, C, B), P && st(C, B, F, "updated");
    }, L);
  }, At = (B, C, F, L, E, I, K) => {
    for (let T = 0; T < C.length; T++) {
      const k = B[T], H = C[T], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === M || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(k, H) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? a(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        k,
        H,
        P,
        null,
        L,
        E,
        I,
        K,
        !0
      );
    }
  }, Pt = (B, C, F, L, E) => {
    if (C !== F) {
      if (C !== iA)
        for (const I in C)
          !cs(I) && !(I in F) && n(
            B,
            I,
            C[I],
            null,
            E,
            L
          );
      for (const I in F) {
        if (cs(I)) continue;
        const K = F[I], T = C[I];
        K !== T && I !== "value" && n(B, I, T, K, E, L);
      }
      "value" in F && n(B, "value", C.value, F.value, E);
    }
  }, Ds = (B, C, F, L, E, I, K, T, k) => {
    const H = C.el = B ? B.el : i(""), P = C.anchor = B ? B.anchor : i("");
    let { patchFlag: O, dynamicChildren: N, slotScopeIds: J } = C;
    J && (T = T ? T.concat(J) : J), B == null ? (s(H, F, L), s(P, F, L), bA(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      C.children || [],
      F,
      P,
      E,
      I,
      K,
      T,
      k
    )) : O > 0 && O & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    B.dynamicChildren && B.dynamicChildren.length === N.length ? (At(
      B.dynamicChildren,
      N,
      F,
      E,
      I,
      K,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (C.key != null || E && C === E.subTree) && nc(
      B,
      C,
      !0
      /* shallow */
    )) : lA(
      B,
      C,
      F,
      P,
      E,
      I,
      K,
      T,
      k
    );
  }, Rs = (B, C, F, L, E, I, K, T, k) => {
    C.slotScopeIds = T, B == null ? C.shapeFlag & 512 ? E.ctx.activate(
      C,
      F,
      L,
      K,
      k
    ) : gn(
      C,
      F,
      L,
      E,
      I,
      K,
      k
    ) : ci(B, C, k);
  }, gn = (B, C, F, L, E, I, K) => {
    const T = B.component = bd(
      B,
      L,
      E
    );
    if (jo(B) && (T.ctx.renderer = Gt), Fd(T, !1, K), T.asyncDep) {
      if (E && E.registerDep(T, TA, K), !B.el) {
        const k = T.subTree = he(De);
        _(null, k, C, F), B.placeholder = k.el;
      }
    } else
      TA(
        T,
        B,
        C,
        F,
        E,
        I,
        K
      );
  }, ci = (B, C, F) => {
    const L = C.component = B.component;
    if (sd(B, C, F))
      if (L.asyncDep && !L.asyncResolved) {
        C.el = B.el, gA(L, C, F);
        return;
      } else
        L.next = C, L.update();
    else
      C.el = B.el, L.vnode = C;
  }, TA = (B, C, F, L, E, I, K) => {
    const T = () => {
      if (B.isMounted) {
        let { next: O, bu: N, u: J, parent: $, vnode: oA } = B;
        {
          const ie = oc(B);
          if (ie) {
            O && (O.el = oA.el, gA(B, O, K)), ie.asyncDep.then(() => {
              MA(() => {
                B.isUnmounted || H();
              }, E);
            });
            return;
          }
        }
        let sA = O, UA;
        rt(B, !1), O ? (O.el = oA.el, gA(B, O, K)) : O = oA, N && dr(N), (UA = O.props && O.props.onVnodeBeforeUpdate) && ae(UA, $, O, oA), rt(B, !0);
        const vA = _i(B), oe = B.subTree;
        B.subTree = vA, U(
          oe,
          vA,
          // parent may have changed if it's in a teleport
          a(oe.el),
          // anchor may have changed if it's in a fragment
          Ms(oe),
          B,
          E,
          I
        ), O.el = vA.el, sA === null && rd(B, vA.el), J && MA(J, E), (UA = O.props && O.props.onVnodeUpdated) && MA(
          () => ae(UA, $, O, oA),
          E
        );
      } else {
        let O;
        const { el: N, props: J } = C, { bm: $, m: oA, parent: sA, root: UA, type: vA } = B, oe = Bs(C);
        rt(B, !1), $ && dr($), !oe && (O = J && J.onVnodeBeforeMount) && ae(O, sA, C), rt(B, !0);
        {
          UA.ce && UA.ce._hasShadowRoot() && UA.ce._injectChildStyle(
            vA,
            B.parent ? B.parent.type : void 0
          );
          const ie = B.subTree = _i(B);
          U(
            null,
            ie,
            F,
            L,
            B,
            E,
            I
          ), C.el = ie.el;
        }
        if (oA && MA(oA, E), !oe && (O = J && J.onVnodeMounted)) {
          const ie = C;
          MA(
            () => ae(O, sA, ie),
            E
          );
        }
        (C.shapeFlag & 256 || sA && Bs(sA.vnode) && sA.vnode.shapeFlag & 256) && B.a && MA(B.a, E), B.isMounted = !0, C = F = L = null;
      }
    };
    B.scope.on();
    const k = B.effect = new ga(T);
    B.scope.off();
    const H = B.update = k.run.bind(k), P = B.job = k.runIfDirty.bind(k);
    P.i = B, P.id = B.uid, k.scheduler = () => Wo(P), rt(B, !0), H();
  }, gA = (B, C, F) => {
    C.component = B;
    const L = B.vnode.props;
    B.vnode = C, B.next = null, od(B, C.props, L, F), cd(B, C.children, F), ke(), Fi(B), Te();
  }, lA = (B, C, F, L, E, I, K, T, k = !1) => {
    const H = B && B.children, P = B ? B.shapeFlag : 0, O = C.children, { patchFlag: N, shapeFlag: J } = C;
    if (N > 0) {
      if (N & 128) {
        Os(
          H,
          O,
          F,
          L,
          E,
          I,
          K,
          T,
          k
        );
        return;
      } else if (N & 256) {
        et(
          H,
          O,
          F,
          L,
          E,
          I,
          K,
          T,
          k
        );
        return;
      }
    }
    J & 8 ? (P & 16 && Vt(H, E, I), O !== H && f(F, O)) : P & 16 ? J & 16 ? Os(
      H,
      O,
      F,
      L,
      E,
      I,
      K,
      T,
      k
    ) : Vt(H, E, I, !0) : (P & 8 && f(F, ""), J & 16 && bA(
      O,
      F,
      L,
      E,
      I,
      K,
      T,
      k
    ));
  }, et = (B, C, F, L, E, I, K, T, k) => {
    B = B || at, C = C || at;
    const H = B.length, P = C.length, O = Math.min(H, P);
    let N;
    for (N = 0; N < O; N++) {
      const J = C[N] = k ? He(C[N]) : Be(C[N]);
      U(
        B[N],
        J,
        F,
        null,
        E,
        I,
        K,
        T,
        k
      );
    }
    H > P ? Vt(
      B,
      E,
      I,
      !0,
      !1,
      O
    ) : bA(
      C,
      F,
      L,
      E,
      I,
      K,
      T,
      k,
      O
    );
  }, Os = (B, C, F, L, E, I, K, T, k) => {
    let H = 0;
    const P = C.length;
    let O = B.length - 1, N = P - 1;
    for (; H <= O && H <= N; ) {
      const J = B[H], $ = C[H] = k ? He(C[H]) : Be(C[H]);
      if (Wt(J, $))
        U(
          J,
          $,
          F,
          null,
          E,
          I,
          K,
          T,
          k
        );
      else
        break;
      H++;
    }
    for (; H <= O && H <= N; ) {
      const J = B[O], $ = C[N] = k ? He(C[N]) : Be(C[N]);
      if (Wt(J, $))
        U(
          J,
          $,
          F,
          null,
          E,
          I,
          K,
          T,
          k
        );
      else
        break;
      O--, N--;
    }
    if (H > O) {
      if (H <= N) {
        const J = N + 1, $ = J < P ? C[J].el : L;
        for (; H <= N; )
          U(
            null,
            C[H] = k ? He(C[H]) : Be(C[H]),
            F,
            $,
            E,
            I,
            K,
            T,
            k
          ), H++;
      }
    } else if (H > N)
      for (; H <= O; )
        $A(B[H], E, I, !0), H++;
    else {
      const J = H, $ = H, oA = /* @__PURE__ */ new Map();
      for (H = $; H <= N; H++) {
        const VA = C[H] = k ? He(C[H]) : Be(C[H]);
        VA.key != null && oA.set(VA.key, H);
      }
      let sA, UA = 0;
      const vA = N - $ + 1;
      let oe = !1, ie = 0;
      const Xt = new Array(vA);
      for (H = 0; H < vA; H++) Xt[H] = 0;
      for (H = J; H <= O; H++) {
        const VA = B[H];
        if (UA >= vA) {
          $A(VA, E, I, !0);
          continue;
        }
        let le;
        if (VA.key != null)
          le = oA.get(VA.key);
        else
          for (sA = $; sA <= N; sA++)
            if (Xt[sA - $] === 0 && Wt(VA, C[sA])) {
              le = sA;
              break;
            }
        le === void 0 ? $A(VA, E, I, !0) : (Xt[le - $] = H + 1, le >= ie ? ie = le : oe = !0, U(
          VA,
          C[le],
          F,
          null,
          E,
          I,
          K,
          T,
          k
        ), UA++);
      }
      const di = oe ? Bd(Xt) : at;
      for (sA = di.length - 1, H = vA - 1; H >= 0; H--) {
        const VA = $ + H, le = C[VA], Bi = C[VA + 1], gi = VA + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Bi.el || ic(Bi)
        ) : L;
        Xt[H] === 0 ? U(
          null,
          le,
          F,
          gi,
          E,
          I,
          K,
          T,
          k
        ) : oe && (sA < 0 || H !== di[sA] ? tt(le, F, gi, 2) : sA--);
      }
    }
  }, tt = (B, C, F, L, E = null) => {
    const { el: I, type: K, transition: T, children: k, shapeFlag: H } = B;
    if (H & 6) {
      tt(B.component.subTree, C, F, L);
      return;
    }
    if (H & 128) {
      B.suspense.move(C, F, L);
      return;
    }
    if (H & 64) {
      K.move(B, C, F, Gt);
      return;
    }
    if (K === M) {
      s(I, C, F);
      for (let O = 0; O < k.length; O++)
        tt(k[O], C, F, L);
      s(B.anchor, C, F);
      return;
    }
    if (K === vn) {
      h(B, C, F);
      return;
    }
    if (L !== 2 && H & 1 && T)
      if (L === 0)
        T.persisted && !I[Fn] ? s(I, C, F) : (T.beforeEnter(I), s(I, C, F), MA(() => T.enter(I), E));
      else {
        const { leave: O, delayLeave: N, afterLeave: J } = T, $ = () => {
          B.ctx.isUnmounted ? r(I) : s(I, C, F);
        }, oA = () => {
          const sA = I._isLeaving || !!I[Fn];
          I._isLeaving && I[Fn](
            !0
            /* cancelled */
          ), T.persisted && !sA ? $() : O(I, () => {
            $(), J && J();
          });
        };
        N ? N(I, $, oA) : oA();
      }
    else
      s(I, C, F);
  }, $A = (B, C, F, L = !1, E = !1) => {
    const {
      type: I,
      props: K,
      ref: T,
      children: k,
      dynamicChildren: H,
      shapeFlag: P,
      patchFlag: O,
      dirs: N,
      cacheIndex: J,
      memo: $
    } = B;
    if ((O === -2 || H && H.hasOnce) && (E = !1), T != null && (ke(), ds(T, null, F, B, !0), Te()), J != null && (!B.ctx || B.ctx === C) && (C.renderCache[J] = void 0), P & 256) {
      C.ctx.deactivate(B);
      return;
    }
    const oA = P & 1 && N, sA = !Bs(B);
    let UA;
    if (sA && (UA = K && K.onVnodeBeforeUnmount) && ae(UA, C, B), P & 6)
      Sf(B.component, F, L);
    else {
      if (P & 128) {
        B.suspense.unmount(F, L);
        return;
      }
      oA && st(B, null, C, "beforeUnmount"), P & 64 ? B.type.remove(
        B,
        C,
        F,
        Gt,
        L
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== M || O > 0 && O & 64) ? Vt(
        H,
        C,
        F,
        !1,
        !0
      ) : (I === M && O & 384 || !E && P & 16) && Vt(k, C, F), L && fi(B);
    }
    const vA = $ != null && J == null;
    (sA && (UA = K && K.onVnodeUnmounted) || oA || vA) && MA(() => {
      UA && ae(UA, C, B), oA && st(B, null, C, "unmounted"), vA && (B.el = null);
    }, F);
  }, fi = (B) => {
    const { type: C, el: F, anchor: L, transition: E } = B;
    if (C === M) {
      Lf(F, L);
      return;
    }
    if (C === vn) {
      x(B), E && !E.persisted && E.afterLeave && E.afterLeave();
      return;
    }
    const I = () => {
      r(F), E && !E.persisted && E.afterLeave && E.afterLeave();
    };
    if (B.shapeFlag & 1 && E && !E.persisted) {
      const { leave: K, delayLeave: T } = E, k = () => K(F, I);
      T ? T(B.el, I, k) : k();
    } else
      I();
  }, Lf = (B, C) => {
    let F;
    for (; B !== C; )
      F = d(B), r(B), B = F;
    r(C);
  }, Sf = (B, C, F) => {
    const { bum: L, scope: E, job: I, subTree: K, um: T, m: k, a: H } = B;
    ki(k), ki(H), L && dr(L), E.stop(), I ? (I.flags |= 8, $A(K, B, C, F)) : B.vnode.el && K && (K.transition = B.vnode.transition, $A(K, B, C, F)), T && MA(T, C), MA(() => {
      B.isUnmounted = !0;
    }, C);
  }, Vt = (B, C, F, L = !1, E = !1, I = 0) => {
    for (let K = I; K < B.length; K++)
      $A(B[K], C, F, L, E);
  }, Ms = (B) => {
    if (B.shapeFlag & 6)
      return Ms(B.component.subTree);
    if (B.shapeFlag & 128)
      return B.suspense.next();
    const C = d(B.anchor || B.el), F = C && C[vu];
    return F ? d(F) : C;
  };
  let hn = !1;
  const ui = (B, C, F) => {
    let L;
    B == null ? C._vnode && ($A(C._vnode, null, null, !0), L = C._vnode.component) : U(
      C._vnode || null,
      B,
      C,
      null,
      null,
      null,
      F
    ), C._vnode = B, hn || (hn = !0, Fi(L), Ta(), hn = !1);
  }, Gt = {
    p: U,
    um: $A,
    m: tt,
    r: fi,
    mt: gn,
    mc: bA,
    pc: lA,
    pbc: At,
    n: Ms,
    o: e
  };
  return {
    render: ui,
    hydrate: void 0,
    createApp: zu(ui)
  };
}
function xn({ type: e, props: A }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && A && A.encoding && A.encoding.includes("html") ? void 0 : t;
}
function rt({ effect: e, job: A }, t) {
  t ? (e.flags |= 32, A.flags |= 4) : (e.flags &= -33, A.flags &= -5);
}
function dd(e, A) {
  return (!e || e && !e.pendingBranch) && A && !A.persisted;
}
function nc(e, A, t = !1) {
  const s = e.children, r = A.children;
  if (G(s) && G(r))
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      let i = r[n];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[n] = He(r[n]), i.el = o.el), !t && i.patchFlag !== -2 && nc(o, i)), i.type === zr && (i.patchFlag === -1 && (i = r[n] = He(i)), i.el = o.el), i.type === De && !i.el && (i.el = o.el);
    }
}
function Bd(e) {
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
function oc(e) {
  const A = e.subTree.component;
  if (A)
    return A.asyncDep && !A.asyncResolved ? A : oc(A);
}
function ki(e) {
  if (e)
    for (let A = 0; A < e.length; A++)
      e[A].flags |= 8;
}
function ic(e) {
  if (e.placeholder)
    return e.placeholder;
  const A = e.component;
  return A ? ic(A.subTree) : null;
}
const lc = (e) => e.__isSuspense;
function gd(e, A) {
  A && A.pendingBranch ? G(e) ? A.effects.push(...e) : A.effects.push(e) : Cu(e);
}
const M = /* @__PURE__ */ Symbol.for("v-fgt"), zr = /* @__PURE__ */ Symbol.for("v-txt"), De = /* @__PURE__ */ Symbol.for("v-cmt"), vn = /* @__PURE__ */ Symbol.for("v-stc"), Bt = [];
let WA = null;
function p(e = !1) {
  Bt.push(WA = e ? null : []);
}
function ac() {
  Bt.pop(), WA = Bt[Bt.length - 1] || null;
}
let vs = 1;
function Ti(e, A = !1) {
  vs += e, e < 0 && WA && A && (WA.hasOnce = !0);
}
function cc(e) {
  return e.dynamicChildren = vs > 0 ? WA || at : null, ac(), vs > 0 && WA && WA.push(e), e;
}
function w(e, A, t, s, r, n) {
  return cc(
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
function $o(e, A, t, s, r) {
  return cc(
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
function fc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, A) {
  return e.type === A.type && e.key === A.key;
}
const uc = ({ key: e }) => e ?? null, gr = ({
  ref: e,
  ref_key: A,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? BA(e) || /* @__PURE__ */ OA(e) || W(e) ? { i: JA, r: e, k: A, f: !!t } : e : null);
function u(e, A = null, t = null, s = 0, r = null, n = e === M ? 0 : 1, o = !1, i = !1) {
  const l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: A,
    key: A && uc(A),
    ref: A && gr(A),
    scopeId: Da,
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
  return i ? (yr(l, t), n & 128 && e.normalize(l)) : t && (l.shapeFlag |= BA(t) ? 8 : 16), vs > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  WA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (l.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  l.patchFlag !== 32 && WA.push(l), l;
}
const he = hd;
function hd(e, A = null, t = null, s = 0, r = null, n = !1) {
  if ((!e || e === Pu) && (e = De), fc(e)) {
    const i = Kt(
      e,
      A,
      !0
      /* mergeRef: true */
    );
    return t && yr(i, t), vs > 0 && !n && WA && (i.shapeFlag & 6 ? WA[WA.indexOf(e)] = i : WA.push(i)), i.patchFlag = -2, i;
  }
  if (Ed(e) && (e = e.__vccOpts), A) {
    A = pd(A);
    let { class: i, style: l } = A;
    i && !BA(i) && (A.class = Y(i)), nA(l) && (/* @__PURE__ */ Jo(l) && !G(l) && (l = CA({}, l)), A.style = Ss(l));
  }
  const o = BA(e) ? 1 : lc(e) ? 128 : Yr(e) ? 64 : nA(e) ? 4 : W(e) ? 2 : 0;
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
function pd(e) {
  return e ? /* @__PURE__ */ Jo(e) || qa(e) ? CA({}, e) : e : null;
}
function Kt(e, A, t = !1, s = !1) {
  const { props: r, ref: n, patchFlag: o, children: i, transition: l } = e, c = A ? wd(r || {}, A) : r, f = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && uc(c),
    ref: A && A.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? G(n) ? n.concat(gr(A)) : [n, gr(A)] : gr(A)
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
    patchFlag: A && e.type !== M ? o === -1 ? 16 : o | 16 : o,
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
    ssContent: e.ssContent && Kt(e.ssContent),
    ssFallback: e.ssFallback && Kt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return l && s && Yo(
    f,
    l.clone(f)
  ), f;
}
function V(e = " ", A = 0) {
  return he(zr, null, e, A);
}
function y(e = "", A = !1) {
  return A ? (p(), $o(De, null, e)) : he(De, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? he(De) : G(e) ? he(
    M,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : fc(e) ? He(e) : he(zr, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Kt(e);
}
function yr(e, A) {
  let t = 0;
  const { shapeFlag: s } = e;
  if (A == null)
    A = null;
  else if (G(A))
    t = 16;
  else if (typeof A == "object")
    if (s & 65) {
      const r = A.default;
      r && (r._c && (r._d = !1), yr(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = A._;
      !r && !qa(A) ? A._ctx = JA : r === 3 && JA && (JA.slots._ === 1 ? A._ = 1 : (A._ = 2, e.patchFlag |= 1024));
    }
  else if (W(A)) {
    if (s & 65) {
      yr(e, { default: A });
      return;
    }
    A = { default: A, _ctx: JA }, t = 32;
  } else
    A = String(A), s & 64 ? (t = 16, A = [V(A)]) : t = 8;
  e.children = A, e.shapeFlag |= t;
}
function wd(...e) {
  const A = {};
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    for (const r in s)
      if (r === "class")
        A.class !== s.class && (A.class = Y([A.class, s.class]));
      else if (r === "style")
        A.style = Ss([A.style, s.style]);
      else if (Mr(r)) {
        const n = A[r], o = s[r];
        o && n !== o && !(G(n) && n.includes(o)) ? A[r] = n ? [].concat(n, o) : o : o == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nr(r) && (A[r] = o);
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
const Qd = Ya();
let Cd = 0;
function bd(e, A, t) {
  const s = e.type, r = (A ? A.appContext : e.appContext) || Qd, n = {
    uid: Cd++,
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
    scope: new Jf(
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
    propsOptions: ec(s, r),
    emitsOptions: ja(s, r),
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
  return n.ctx = { _: n }, n.root = A ? A.root : n, n.emit = qu.bind(null, n), e.ce && e.ce(n), n;
}
let SA = null;
const Ud = () => SA || JA;
let Er, ys;
{
  const e = Xr(), A = (t, s) => {
    let r;
    return (r = e[t]) || (r = e[t] = []), r.push(s), (n) => {
      r.length > 1 ? r.forEach((o) => o(n)) : r[0](n);
    };
  };
  Er = A(
    "__VUE_INSTANCE_SETTERS__",
    (t) => SA = t
  ), ys = A(
    "__VUE_SSR_SETTERS__",
    (t) => Es = t
  );
}
const Ts = (e) => {
  const A = SA;
  return Er(e), e.scope.on(), () => {
    e.scope.off(), Er(A);
  };
}, Ki = () => {
  SA && SA.scope.off(), Er(null);
};
function dc(e) {
  return e.vnode.shapeFlag & 4;
}
let Es = !1;
function Fd(e, A = !1, t = !1) {
  A && ys(A);
  const { props: s, children: r } = e.vnode, n = dc(e);
  nd(e, s, n, A), ad(e, r, t || A);
  const o = n ? md(e, A) : void 0;
  return A && ys(!1), o;
}
function md(e, A) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Gu);
  const { setup: s } = t;
  if (s) {
    ke();
    const r = e.setupContext = s.length > 1 ? vd(e) : null, n = Ts(e), o = ks(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), i = la(o);
    if (Te(), n(), (i || e.sp) && !Bs(e) && Na(e), i) {
      if (o.then(Ki, Ki), A)
        return o.then((l) => {
          ys(!0);
          try {
            Di(e, l, A);
          } finally {
            ys(!1);
          }
        }).catch((l) => {
          Wr(l, e, 0);
        });
      e.asyncDep = o;
    } else
      Di(e, o);
  } else
    Bc(e);
}
function Di(e, A, t) {
  W(A) ? e.type.__ssrInlineRender ? e.ssrRender = A : e.render = A : nA(A) && (e.setupState = _a(A)), Bc(e);
}
function Bc(e, A, t) {
  const s = e.type;
  e.render || (e.render = s.render || ge);
  {
    const r = Ts(e);
    ke();
    try {
      Xu(e);
    } finally {
      Te(), r();
    }
  }
}
const xd = {
  get(e, A) {
    return LA(e, "get", ""), e[A];
  }
};
function vd(e) {
  const A = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, xd),
    slots: e.slots,
    emit: e.emit,
    expose: A
  };
}
function $r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(_a(uu(e.exposed)), {
    get(A, t) {
      if (t in A)
        return A[t];
      if (t in gs)
        return gs[t](e);
    },
    has(A, t) {
      return t in A || t in gs;
    }
  })) : e.proxy;
}
function yd(e, A = !0) {
  return W(e) ? e.displayName || e.name : e.name || A && e.__name;
}
function Ed(e) {
  return W(e) && "__vccOpts" in e;
}
const Hd = (e, A) => /* @__PURE__ */ gu(e, A, Es), Id = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lo;
const Ri = typeof window < "u" && window.trustedTypes;
if (Ri)
  try {
    lo = /* @__PURE__ */ Ri.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const gc = lo ? (e) => lo.createHTML(e) : (e) => e, _d = "http://www.w3.org/2000/svg", Ld = "http://www.w3.org/1998/Math/MathML", ye = typeof document < "u" ? document : null, Oi = ye && /* @__PURE__ */ ye.createElement("template"), Sd = {
  insert: (e, A, t) => {
    A.insertBefore(e, t || null);
  },
  remove: (e) => {
    const A = e.parentNode;
    A && A.removeChild(e);
  },
  createElement: (e, A, t, s) => {
    const r = A === "svg" ? ye.createElementNS(_d, e) : A === "mathml" ? ye.createElementNS(Ld, e) : t ? ye.createElement(e, { is: t }) : ye.createElement(e);
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
      Oi.innerHTML = gc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Oi.content;
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
}, kd = /* @__PURE__ */ Symbol("_vtc");
function Td(e, A, t) {
  const s = e[kd];
  s && (A = (A ? [A, ...s] : [...s]).join(" ")), A == null ? e.removeAttribute("class") : t ? e.setAttribute("class", A) : e.className = A;
}
const Mi = /* @__PURE__ */ Symbol("_vod"), Kd = /* @__PURE__ */ Symbol("_vsh"), Dd = /* @__PURE__ */ Symbol(""), Rd = /(?:^|;)\s*display\s*:/;
function Od(e, A, t) {
  const s = e.style, r = BA(t);
  let n = !1;
  if (t && !r) {
    if (A)
      if (BA(A))
        for (const o of A.split(";")) {
          const i = o.slice(0, o.indexOf(":")).trim();
          t[i] == null && As(s, i, "");
        }
      else
        for (const o in A)
          t[o] == null && As(s, o, "");
    for (const o in t) {
      o === "display" && (n = !0);
      const i = t[o];
      i != null ? Nd(
        e,
        o,
        !BA(A) && A ? A[o] : void 0,
        i
      ) || As(s, o, i) : As(s, o, "");
    }
  } else if (r) {
    if (A !== t) {
      const o = s[Dd];
      o && (t += ";" + o), s.cssText = t, n = Rd.test(t);
    }
  } else A && e.removeAttribute("style");
  Mi in e && (e[Mi] = n ? s.display : "", e[Kd] && (s.display = "none"));
}
const Gs = /\s*!important$/;
function As(e, A, t) {
  if (G(t))
    t.forEach((s) => As(e, A, s));
  else if (t == null && (t = ""), A.startsWith("--"))
    Gs.test(t) ? e.setProperty(A, t.replace(Gs, ""), "important") : e.setProperty(A, t);
  else {
    const s = Md(e, A);
    Gs.test(t) ? e.setProperty(
      XA(s),
      t.replace(Gs, ""),
      "important"
    ) : e[s] = t;
  }
}
const Ni = ["Webkit", "Moz", "ms"], yn = {};
function Md(e, A) {
  const t = yn[A];
  if (t)
    return t;
  let s = xA(A);
  if (s !== "filter" && s in e)
    return yn[A] = s;
  s = Gr(s);
  for (let r = 0; r < Ni.length; r++) {
    const n = Ni[r] + s;
    if (n in e)
      return yn[A] = n;
  }
  return A;
}
function Nd(e, A, t, s) {
  return e.tagName === "TEXTAREA" && (A === "width" || A === "height") && BA(s) && t === s;
}
const Pi = "http://www.w3.org/1999/xlink";
function Vi(e, A, t, s, r, n = Vf(A)) {
  s && A.startsWith("xlink:") ? t == null ? e.removeAttributeNS(Pi, A.slice(6, A.length)) : e.setAttributeNS(Pi, A, t) : t == null || n && !fa(t) ? e.removeAttribute(A) : e.setAttribute(
    A,
    n ? "" : Qe(t) ? String(t) : t
  );
}
function Gi(e, A, t, s, r) {
  if (A === "innerHTML" || A === "textContent") {
    t != null && (e[A] = A === "innerHTML" ? gc(t) : t);
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
    i === "boolean" ? t = fa(t) : t == null && i === "string" ? (t = "", o = !0) : i === "number" && (t = 0, o = !0);
  }
  try {
    e[A] = t;
  } catch {
  }
  o && e.removeAttribute(r || A);
}
function it(e, A, t, s) {
  e.addEventListener(A, t, s);
}
function Pd(e, A, t, s) {
  e.removeEventListener(A, t, s);
}
const Xi = /* @__PURE__ */ Symbol("_vei");
function Vd(e, A, t, s, r = null) {
  const n = e[Xi] || (e[Xi] = {}), o = n[A];
  if (s && o)
    o.value = s;
  else {
    const [i, l] = Jd(A);
    if (s) {
      const c = n[A] = jd(
        s,
        r
      );
      it(e, i, c, l);
    } else o && (Pd(e, i, o, l), n[A] = void 0);
  }
}
const Gd = /(Once|Passive|Capture)$/, Xd = /^on:?(?:Once|Passive|Capture)$/;
function Jd(e) {
  let A, t;
  for (; (t = e.match(Gd)) && !Xd.test(e); )
    A || (A = {}), e = e.slice(0, e.length - t[1].length), A[t[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : XA(e.slice(2)), A];
}
let En = 0;
const Wd = /* @__PURE__ */ Promise.resolve(), Yd = () => En || (Wd.then(() => En = 0), En = Date.now());
function jd(e, A) {
  const t = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= t.attached)
      return;
    const r = t.value;
    if (G(r)) {
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
  return t.value = e, t.attached = Yd(), t;
}
const Ji = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, Zd = (e, A, t, s, r, n) => {
  const o = r === "svg";
  A === "class" ? Td(e, s, o) : A === "style" ? Od(e, t, s) : Mr(A) ? Nr(A) || Vd(e, A, t, s, n) : (A[0] === "." ? (A = A.slice(1), !0) : A[0] === "^" ? (A = A.slice(1), !1) : zd(e, A, s, o)) ? (Gi(e, A, s), !e.tagName.includes("-") && (A === "value" || A === "checked" || A === "selected") && Vi(e, A, s, o, n, A !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  ($d(e, A) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(A) || !BA(s))) ? Gi(e, xA(A), s, n, A) : (A === "true-value" ? e._trueValue = s : A === "false-value" && (e._falseValue = s), Vi(e, A, s, o));
};
function zd(e, A, t, s) {
  if (s)
    return !!(A === "innerHTML" || A === "textContent" || A in e && Ji(A) && W(t));
  if (A === "spellcheck" || A === "draggable" || A === "translate" || A === "autocorrect" || A === "sandbox" && e.tagName === "IFRAME" || A === "form" || A === "list" && e.tagName === "INPUT" || A === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (A === "width" || A === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Ji(A) && BA(t) ? !1 : A in e;
}
function $d(e, A) {
  const t = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!t)
    return !1;
  const s = xA(A);
  return Array.isArray(t) ? t.some((r) => xA(r) === s) : Object.keys(t).some((r) => xA(r) === s);
}
const Wi = {};
// @__NO_SIDE_EFFECTS__
function Yi(e, A, t) {
  let s = /* @__PURE__ */ Eu(e, A);
  Pr(s) && (s = CA({}, s, A));
  class r extends qo {
    constructor(o) {
      super(s, o, t);
    }
  }
  return r.def = s, r;
}
const qd = typeof HTMLElement < "u" ? HTMLElement : class {
};
class qo extends qd {
  constructor(A, t = {}, s = qi) {
    super(), this._def = A, this._props = t, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== qi ? this._root = this.shadowRoot : A.shadowRoot !== !1 ? (this.attachShadow(
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
      if (A instanceof qo) {
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
    this._connected = !1, Sa(() => {
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
      if (n && !G(n))
        for (const l in n) {
          const c = n[l];
          (c === Number || c && c.type === Number) && (l in this._props && (this._props[l] = pi(this._props[l])), (i || (i = /* @__PURE__ */ Object.create(null)))[xA(l)] = !0);
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
          get: () => Ia(t[s])
        });
  }
  _resolveProps(A) {
    const { props: t } = A, s = G(t) ? t : Object.keys(t || {});
    for (const r of Object.keys(this))
      r[0] !== "_" && s.includes(r) && this._setProp(r, this[r]);
    for (const r of s.map(xA))
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
    let s = t ? this.getAttribute(A) : Wi;
    const r = xA(A);
    t && this._numberProps && this._numberProps[r] && (s = pi(s)), this._setProp(r, s, !1, !0);
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
    if (t !== this._props[A] && (this._dirty = !0, t === Wi ? delete this._props[A] : (this._props[A] = t, A === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), s)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(XA(A), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(XA(A), t + "") : t || this.removeAttribute(XA(A)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const A = this._createVNode();
    this._app && (A.appContext = this._app._context), oB(A, this._root);
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
            Pr(o[0]) ? CA({ detail: o }, o[0]) : { detail: o }
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
            const c = t + "-s", f = document.createTreeWalker(l, 1);
            l.setAttribute(c, "");
            let a;
            for (; a = f.nextNode(); )
              a.setAttribute(c, "");
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
const Hr = (e) => {
  const A = e.props["onUpdate:modelValue"] || !1;
  return G(A) ? (t) => dr(A, t) : A;
};
function AB(e) {
  e.target.composing = !0;
}
function ji(e) {
  const A = e.target;
  A.composing && (A.composing = !1, A.dispatchEvent(new Event("input")));
}
const ct = /* @__PURE__ */ Symbol("_assign"), Xs = /* @__PURE__ */ Symbol("_initialValue");
function Hn(e, A, t) {
  return A && (e = e.trim()), t && (e = Oo(e)), e;
}
const hr = {
  created(e, { modifiers: { lazy: A, trim: t, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Xs] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Xs] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ct] = Hr(r);
    const n = s || r.props && r.props.type === "number";
    it(e, A ? "change" : "input", (o) => {
      o.target.composing || e[ct](Hn(e.value, t, n));
    }), (t || n) && it(e, "change", () => {
      e.value = Hn(e.value, t, n);
    }), A || (it(e, "compositionstart", AB), it(e, "compositionend", ji), it(e, "change", ji));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: A, modifiers: { trim: t, number: s } }) {
    const r = A ?? "", n = e[Xs];
    delete e[Xs], n !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== n ? e[ct](Hn(e.value, t, s)) : e.value = r;
  },
  beforeUpdate(e, { value: A, oldValue: t, modifiers: { lazy: s, trim: r, number: n } }, o) {
    if (e[ct] = Hr(o), e.composing) return;
    const i = (n || e.type === "number") && !/^0\d/.test(e.value) ? Oo(e.value) : e.value, l = A ?? "";
    if (i === l)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && A === t || r && e.value.trim() === l) || (e.value = l);
  }
}, DA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, A, t) {
    e[ct] = Hr(t), it(e, "change", () => {
      const s = e._modelValue, r = eB(e), n = e.checked, o = e[ct];
      if (G(s)) {
        const i = ua(s, r), l = i !== -1;
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
        o(hc(e, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Zi,
  beforeUpdate(e, A, t) {
    e[ct] = Hr(t), Zi(e, A, t);
  }
};
function Zi(e, { value: A, oldValue: t }, s) {
  e._modelValue = A;
  let r;
  if (G(A))
    r = ua(A, s.props.value) > -1;
  else if (Tt(A))
    r = A.has(s.props.value);
  else {
    if (A === t) return;
    r = Rt(A, hc(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
function eB(e) {
  return "_value" in e ? e._value : e.value;
}
function hc(e, A) {
  const t = A ? "_trueValue" : "_falseValue";
  return t in e ? e[t] : A;
}
const tB = ["ctrl", "shift", "alt", "meta"], sB = {
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
  exact: (e, A) => tB.some((t) => e[`${t}Key`] && !A.includes(t))
}, es = (e, A) => {
  if (!e) return e;
  const t = e._withMods || (e._withMods = {}), s = A.join(".");
  return t[s] || (t[s] = (r, ...n) => {
    for (let o = 0; o < A.length; o++) {
      const i = sB[A[o]];
      if (i && i(r, A)) return;
    }
    return e(r, ...n);
  });
}, rB = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, zi = (e, A) => {
  const t = e._withKeys || (e._withKeys = {}), s = A.join(".");
  return t[s] || (t[s] = (r) => {
    if (!("key" in r))
      return;
    const n = XA(r.key);
    if (A.some(
      (o) => o === n || rB[o] === n
    ))
      return e(r);
  });
}, nB = /* @__PURE__ */ CA({ patchProp: Zd }, Sd);
let $i;
function pc() {
  return $i || ($i = fd(nB));
}
const oB = (...e) => {
  pc().render(...e);
}, qi = (...e) => {
  const A = pc().createApp(...e), { mount: t } = A;
  return A.mount = (s) => {
    const r = lB(s);
    if (!r) return;
    const n = A._component;
    !W(n) && !n.render && !n.template && (n.template = r.innerHTML), r.nodeType === 1 && (r.textContent = "");
    const o = t(r, !1, iB(r));
    return r instanceof Element && (r.removeAttribute("v-cloak"), r.setAttribute("data-v-app", "")), o;
  }, A;
};
function iB(e) {
  if (e instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && e instanceof MathMLElement)
    return "mathml";
}
function lB(e) {
  return BA(e) ? document.querySelector(e) : e;
}
const aB = ".bse-overlay[data-v-9785ec7b]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-9785ec7b]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-9785ec7b]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-9785ec7b]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-9785ec7b]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-9785ec7b]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-9785ec7b]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-9785ec7b]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-9785ec7b]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-9785ec7b]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-9785ec7b]{flex:1}.bse-stage[data-v-9785ec7b]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-9785ec7b]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", Ai = (e, A) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of A)
    t[s] = r;
  return t;
}, cB = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], Al = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], fB = {
  name: "DevloopScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: cB,
      colors: Al,
      tool: "pen",
      color: Al[0],
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
}, uB = { class: "bse-overlay" }, dB = { class: "bse-toolbar" }, BB = ["onClick"], gB = ["title", "onClick"], hB = ["disabled"], pB = ["disabled"], wB = { class: "bse-stage" };
function QB(e, A, t, s, r, n) {
  return p(), w("div", uB, [
    u("div", dB, [
      (p(!0), w(M, null, q(r.tools, (o) => (p(), w("button", {
        key: o.id,
        class: Y(["bse-btn", { active: r.tool === o.id }]),
        onClick: (i) => r.tool = o.id
      }, b(o.label), 11, BB))), 128)),
      A[8] || (A[8] = u("span", { class: "bse-sep" }, null, -1)),
      (p(!0), w(M, null, q(r.colors, (o) => (p(), w("button", {
        key: o,
        class: Y(["bse-color", { active: r.color === o }]),
        style: Ss({ background: o }),
        title: o,
        onClick: (i) => r.color = o
      }, null, 14, gB))), 128)),
      A[9] || (A[9] = u("span", { class: "bse-sep" }, null, -1)),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[0] || (A[0] = (...o) => n.undo && n.undo(...o))
      }, "되돌리기", 8, hB),
      u("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[1] || (A[1] = (...o) => n.clearAll && n.clearAll(...o))
      }, "모두 지우기", 8, pB),
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
    u("div", wB, [
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
const CB = /* @__PURE__ */ Ai(fB, [["render", QB], ["styles", [aB]], ["__scopeId", "data-v-9785ec7b"]]), ao = {
  // ── 콘솔 공통 ──
  리포트: "Reports",
  제안: "Insights",
  버전: "Versions",
  루프: "Loops",
  지식: "Knowledge",
  프로젝트: "Project",
  "키·계정": "Keys",
  서버: "Server",
  점검: "Checks",
  로그: "Logs",
  관리: "Console",
  "devloop 관리": "devloop console",
  "키 지우기": "Clear key",
  "저장된 운영자 키 지우기": "Forget the saved admin key",
  "운영자 키": "Admin key",
  들어가기: "Enter",
  "⏳ 잠시만요": "⏳ One moment",
  "입력한 키는 그대로 둡니다. 계속 이 화면이면 앱 로그의 [devloop] 줄이나 콘솔 '점검' 탭을 보세요.": "Your key is kept. If this stays, check the app log lines tagged [devloop] or the Checks tab.",
  "워커가 시작 중입니다 (앱 재배포 직후 10초~1분)": "The worker is starting (10 s to 1 min after a redeploy)",
  "앱이 재시작 중입니다": "The app is restarting",
  "운영자 키가 맞지 않습니다": "Wrong admin key",
  전체: "All",
  "진행 중": "In progress",
  실패: "Failed",
  "수정본 준비": "Fix ready",
  "PR 열림": "PR open",
  병합됨: "Merged",
  되돌림: "Reverted",
  "요청 전": "Not requested",
  "문제·보고자 검색": "Search problem · reporter",
  "#": "#",
  심각도: "Severity",
  문제: "Problem",
  수정: "Fix",
  보고자: "Reporter",
  갱신: "Update",
  "리포트가 없습니다": "No reports",
  대기: "Queued",
  "수정 중": "Fixing",
  병합: "Merged",
  도구: "tool",
  "PR 만들기": "Open PR",
  병합까지: "Merge",
  되돌리기: "Revert",
  "되돌리기 PR": "Revert PR",
  "병합된 수정을 revert 하는 브랜치·PR 을 만듭니다(자동 병합 프로젝트면 병합까지)": "Creates a revert branch and PR (and merges it if the project auto-merges)",
  "· 원격에 푸시됨(PR 없음)": "· pushed to remote (no PR)",
  "· 키트 저장소 안(원격에 없음)": "· only on this server (not on remote)",
  "AI 수정본이 담긴 작업 브랜치. '푸시됨' 이면 원격 저장소에 같은 이름으로 있고, '키트 안' 이면 아직 이 서버에만 있습니다": 'Work branch holding the AI fix. "pushed" means it exists on the remote with this name; otherwise it is only on this server',
  // 제안
  "특히 볼 것 (선택)": "Focus on (optional)",
  "분석 실행": "Run analysis",
  "진행 로그": "Progress log",
  확신: "Confidence",
  파일: "Files",
  리포트로: "To report",
  "바로 수정": "Fix now",
  삭제: "Delete",
  "이 제안을 지웁니다. 다음 분석에서 같은 내용은 다시 나오지 않습니다": "Removes this insight; the next analysis will not raise it again",
  "분석 실행을 누르면 AI 가 최근 리포트·커밋·코드를 읽고 고칠 점을 찾습니다 (5분 안팎, Claude 비용 발생)": "Run analysis: the AI reads recent reports, commits and code to find things to fix (about 5 min, Claude cost)",
  "마지막 분석": "last analysis",
  "분석 전": "not analysed yet",
  "대기 중…": "queued…",
  "분석 중…": "analysing…",
  // 버전
  "AI 가 고친 소스 상태는 원격에 올리지 않아도 키트가": "Every AI fix is kept by the kit as a",
  "으로 갖고 있습니다(키트 저장소 태그 devloop/v{n}). 버전마다 프론트+백엔드+DB 사본을 띄워": "even before it goes to the remote (kit repo tag devloop/v{n}). Each version can be spun up as front+backend+DB copy and",
  "해 보고, 마음에 들면": ", and when it looks right you",
  "원격으로 보냅니다": "send it to the remote",
  "(브랜치만 / PR·MR / 자동 병합).": "(branch only / PR·MR / auto-merge).",
  접속: "opened",
  "미리보기 레시피": "Preview recipe",
  "· 있음": "· set",
  "· 없음 (초안을 만들거나 적어 주세요)": "· none (draft one or write it)",
  "프론트 빌드·백엔드 실행·DB 복제 방법. 자리표시자 {base} {project} {n} {db} {port} {host} {previewUrl} {backUrl}. db.mode: template(기본, 템플릿 DB 에서 초 단위 복제) · clone(매번 라이브에서, 느림) · shared(사본 없이 개발 DB 공유). maxUp(동시 개수, 기본 2) · ttlHours(미사용 자동 중지, 기본 12)": "How to build the front, run the backend and copy the DB. Placeholders {base} {project} {n} {db} {port} {host} {previewUrl} {backUrl}. db.mode: template (default, seconds from a template DB) · clone (from live each time, slow) · shared (use the dev DB, no copy). maxUp (concurrent previews, default 2) · ttlHours (auto-stop when idle, default 12)",
  "AI 초안 만들기": "Draft with AI",
  "AI 에게 줄 메모 (선택: 배포 서버 IP, DB 컨테이너 이름 …)": "Notes for the AI (optional: deploy host IP, DB container name …)",
  "레시피 저장": "Save recipe",
  "Claude 가 저장소(컴포즈·Dockerfile·env·properties)를 읽고 초안을 만듭니다 (1~3분)": "Claude reads the repo (compose, Dockerfile, env, properties) and drafts a recipe (1–3 min)",
  내용: "Contents",
  미리보기: "Preview",
  "아직 버전이 없습니다 - AI 수정이 끝나면 여기에 쌓입니다": "No versions yet - they appear here when an AI fix finishes",
  "미리보기 띄우기": "Start preview",
  "다시 띄우기": "Restart preview",
  중지: "Stop",
  "원격으로 보내기": "Send to remote",
  "열기 ↗": "Open ↗",
  "떠 있음": "up",
  중지됨: "stopped",
  "빌드 중": "building",
  "시작 중": "starting",
  없음: "none",
  "레시피가 먼저 필요합니다": "A recipe is needed first",
  닫기: "Close",
  // 루프
  "정해 둔 순서를 되풀이 돕니다:": "Runs a fixed sequence repeatedly:",
  "지식 갱신 → 제안 분석 → 심각도 이상 자동 수정 → 미리보기 → 내보내기": "knowledge update → insights → auto-fix above a severity → preview → send to remote",
  "중 원하는 단계만. 시점은 수동 · 원격에 새 커밋이 보일 때 · N시간마다 · 매일 HH:MM.": "- pick the steps you want. Triggers: manual · new commit on the remote · every N hours · daily at HH:MM.",
  "을 정하면(지식 그래프의 화면·메뉴·기능) 그 기능에 이어진 파일들로 분석·수정을 한정합니다. 수정은 프로젝트의 내보내기 설정(보관만/브랜치/PR/병합)을 따르고, 한 번에 최대 건수를 둡니다(Claude 비용).": "(a screen/menu/feature from the knowledge graph) limits analysis and fixes to the files connected to it. Fixes follow the project delivery setting (keep / branch / PR / merge) with a per-run cap (Claude cost).",
  "대상 기능": "Target feature",
  단계: "Steps",
  시점: "Trigger",
  "마지막 · 다음": "Last · next",
  "루프가 없습니다 - 아래에서 만드세요": "No loops - create one below",
  "새 루프": "New loop",
  이름: "Name",
  "비우면 전체": "empty = whole project",
  "화면·메뉴·기능 이름 (지식 그래프)": "Screen / menu / feature name (knowledge graph)",
  "수동(지금 실행만)": "Manual (run now only)",
  "원격에 새 커밋이 보이면": "When a new commit appears on the remote",
  N시간마다: "Every N hours",
  "매일 정해진 시각": "Daily at a time",
  "6 (시간) / 03:00": "6 (hours) / 03:00",
  "순서대로 · 켠 것만": "in order · enabled only",
  "1. 지식 그래프 갱신": "1. Update knowledge graph",
  "바뀐 코드를 읽어 화면·기능·파일 관계를 최신으로 맞춥니다. 뒤 단계의 AI 가 이 그래프를 참고합니다.": "Reads changed code to refresh screen/feature/file relations. Later steps consult this graph.",
  "2. 제안 분석": "2. Insights",
  '코드·최근 리포트·헤드리스 화면 확인을 바탕으로 고칠 점(버그·위험·정리)을 찾아 "제안" 탭에 쌓습니다.': "Finds things to fix (bugs, risks, cleanup) from code, recent reports and a headless screen check, and lists them in the Insights tab.",
  "3. 자동 수정": "3. Auto-fix",
  "2 에서 찾은 제안 중 심각도": "From step 2, take insights of severity",
  "이상을 심각한 순으로 최대": "or higher, most severe first, up to",
  "건, AI 가 고쳐 검증한 뒤 작업 브랜치(": "items; the AI fixes, verifies and commits to the work branch (",
  ")에 커밋합니다. 종류 제한:": "). Restrict kinds:",
  "bug,risk (비우면 전부)": "bug,risk (empty = all)",
  "고친 결과가 원격 저장소로 어디까지 가는지는 5 단계 또는(5 를 끄면) 프로젝트 설정": "How far the result goes to the remote is step 5 or, if 5 is off, the project setting",
  "을 따릅니다.": ".",
  "4. 미리보기": "4. Preview",
  "3 에서 만든 수정본마다 프론트+백엔드+DB 사본을 띄워 접속 주소를 만듭니다(버전 탭·뷰어에서 열기). 레시피가 없으면 건너뜁니다.": "Spins up front+backend+DB copy for each fix from step 3 and gives a URL (open from Versions tab or viewer). Skipped without a recipe.",
  "5. 원격 저장소로 보내기": "5. Send to remote",
  "3 의 수정본 브랜치를": "Send the fix branch from step 3:",
  "원격에 브랜치만 올리기 (PR 없음)": "push the branch only (no PR)",
  "PR/MR 까지 만들기 (병합은 사람이)": "open a PR/MR (a person merges)",
  "재검증 뒤 자동 병합·배포까지": "re-verify, auto-merge and track deploy",
  "끄면 3 단계가 프로젝트 설정대로 처리합니다(보관만이면 이 서버에만 남고, 버전 탭에서 나중에 보낼 수 있음).": 'If off, step 3 follows the project setting (with "keep" it stays on this server; send it later from the Versions tab).',
  "제한 시간": "Time limit",
  분: "min",
  켜기: "Enabled",
  저장: "Save",
  "실행 기록": "Run history",
  "지금 실행": "Run now",
  편집: "Edit",
  꺼짐: "off",
  "단계 없음": "no steps",
  "실행 전": "never run",
  "아직 실행한 적 없음": "No runs yet",
  수동: "Manual",
  "원격 새 커밋": "Remote commit",
  "지식 갱신": "Knowledge update",
  "제안 분석": "Insights",
  "미리보기 띄우기 ": "Preview",
  "자동 수정": "Auto-fix",
  "야간 점검": "Nightly check",
  "이름을 적어 주세요": "Enter a name",
  "단계를 하나 이상 고르세요": "Pick at least one step",
  저장됨: "Saved",
  // 지식
  "3D": "3D",
  트리: "Tree",
  "전체 구축": "Full rebuild",
  "마지막 구축 이후 바뀐 파일만 반영": "Only files changed since the last build",
  "처음부터 다시 만든다 (5~15분, Claude 비용 발생)": "Rebuild from scratch (5–15 min, Claude cost)",
  "메뉴·기능·파일 검색": "Search menu · feature · file",
  "모두 펼치기": "Expand all",
  "모든 노드 펼치기": "Expand every node",
  접기: "Collapse",
  "화면·메뉴만": "Screens and menus only",
  "프로젝트가 연결되면 자동으로 구축됩니다. 병합될 때마다, 그리고 예약 시각(knowledge.schedule)에 갱신됩니다.": "Built automatically when a project connects; refreshed after each merge and at the scheduled time (knowledge.schedule).",
  "원격과 같음 · ": "in sync with remote · ",
  "왼→오: 모듈 · 화면 · 메뉴 · 기능 · 파일 · API · 백엔드 · 테이블": "left→right: module · screen · menu · feature · file · API · backend · table",
  "처음엔 화면·메뉴만 · ▸ 표시 노드를 누르면 아래가 펼쳐짐 · 빈 곳 클릭 = 선택 해제": "Starts with screens and menus · click a ▸ node to expand · click empty space to deselect",
  모듈: "module",
  화면: "screen",
  메뉴: "menu",
  기능: "feature",
  컴포넌트: "component",
  스토어: "store",
  유틸: "util",
  서비스: "service",
  테이블: "table",
  "선:": "edges:",
  포함: "contains",
  호출: "calls",
  "읽기/쓰기": "reads/writes",
  이동: "navigates",
  "3D 불가": "3D unavailable",
  "트리로 보여줍니다": "showing the tree",
  "WebGL 없음": "no WebGL",
  // 프로젝트
  "새 프로젝트": "New project",
  "SDK 의 project 값": "the SDK project value",
  "저장소 URL": "Repository URL",
  "GitHub owner/repo": "GitHub owner/repo",
  "기준 브랜치": "Base branch",
  "수정본을 원격에": "Deliver fixes to remote",
  "AI 가 고친 뒤 어디까지 보낼지": "how far an AI fix goes",
  "푸시 + PR + 자동 병합 (검증 통과 시)": "push + PR + auto-merge (when verified)",
  "푸시 + PR 만 (병합은 사람이)": "push + PR only (a person merges)",
  "원격 브랜치 푸시만 (PR 없음)": "push the branch only (no PR)",
  "보관만 - 키트 저장소 안 브랜치 (원격에 안 올림)": "keep only - branch inside the kit repo (nothing on remote)",
  "AI 가 고친 코드는 항상": "AI fixes are always committed to a",
  "작업 브랜치": "work branch",
  이름의: "named",
  "에 커밋됩니다(기준 브랜치는 건드리지 않음). 어디까지 내보낼지:": "(the base branch is never touched). How far to send it:",
  보관만: "Keep only",
  "- 키트 저장소 안에만 둡니다. 원격(GitHub/GitLab)엔 아무것도 안 생깁니다. 콘솔 버전 탭에서 미리보기로 확인한 뒤 내보내기.": "- stays inside the kit repo; nothing appears on GitHub/GitLab. Check it with a preview in the Versions tab, then send.",
  "브랜치 푸시만": "Branch only",
  "- 그 작업 브랜치를 원격에 올립니다. PR/MR 은 안 만듭니다. 팀원이 브랜치를 받아 직접 검토·병합할 때.": "- pushes the work branch to the remote without a PR/MR, for teammates to review and merge themselves.",
  "PR 까지": "Up to PR",
  "- 브랜치를 올리고 기준 브랜치로 향하는 PR/MR 을 만듭니다. 병합은 사람이.": "- pushes the branch and opens a PR/MR against the base branch. A person merges.",
  "자동 병합": "Auto-merge",
  "- PR 을 만든 뒤 기준 브랜치와 합쳐 재검증하고 통과하면 병합, 배포까지 추적합니다.": "- opens the PR, merges the base branch in, re-verifies, merges when green and tracks the deploy.",
  "수정 요청": "Fix requests",
  "누가 할 수 있나": "who may request",
  "앱 사용자 + 관리 콘솔": "app users + console",
  "관리 콘솔에서만 (앱은 신고만)": "console only (app users report only)",
  "앱 주소": "App URLs",
  "쉼표 구분 · 첫 주소가 알림 링크 기준": "comma separated · the first is used for notification links",
  "알림 웹훅": "Notification webhook",
  "Slack incoming webhook 또는 JSON 을 받을 URL": "Slack incoming webhook or any URL that accepts JSON",
  "https://hooks.slack.com/services/… (비우면 알림 없음)": "https://hooks.slack.com/services/… (empty = no notifications)",
  "테스트 보내기": "Send test",
  "알림 이벤트": "Notification events",
  "받을 것만": "only the ones you want",
  "알림 멘션": "Mention",
  "Slack, 선택": "Slack, optional",
  "<@U0123ABC> 또는 <!channel>": "<@U0123ABC> or <!channel>",
  "새 리포트": "New report",
  "수정본 준비(보관·브랜치)": "Fix ready (kept / branch)",
  "PR/MR 생성": "PR/MR opened",
  "병합 완료": "Merged",
  "수정 실패": "Fix failed",
  "미리보기 준비됨": "Preview up",
  "미리보기 실패": "Preview failed",
  "배포 완료": "Deploy done",
  "배포 실패": "Deploy failed",
  "루프 끝": "Loop finished",
  "루프 실패": "Loop failed",
  "제안 분석 끝": "Insights done",
  "원격이 앞섬(지식 그래프)": "Remote ahead (knowledge graph)",
  "프로젝트를 먼저 저장하세요": "Save the project first",
  "보내는 중…": "sending…",
  "✓ 보냈습니다 - 채널을 확인하세요. 계속 받으려면 저장을 누르세요": "✓ Sent - check the channel. Press Save to keep receiving",
  "API 키": "API key",
  "프론트에 넣는 공개 키": "public key used by the front end",
  "(선택)": "(optional)",
  설명: "Description",
  "스택·구조 한 줄": "one line on stack and layout",
  규약: "Conventions",
  "경로별 검증 명령": "verify commands per path",
  "+ 모듈": "+ module",
  "화면 확인": "Screen check",
  "보호 경로": "Protected paths",
  "AI 가 바꾸면 되돌림. 줄마다 하나": "reverted if the AI touches them, one per line",
  "허용 도구": "Allowed tools",
  "줄마다 하나": "one per line",
  환경변수: "Environment",
  "cwd (예: web)": "cwd (e.g. web)",
  공통: "Shared",
  프로젝트별: "Per project",
  "공통보다 우선": "overrides shared",
  "서버 설정": "Server settings",
  포트: "Port",
  "Claude 실행 파일": "Claude binary",
  "PATH 추가": "Extra PATH",
  "':' 구분": "colon separated",
  "Claude 모델": "Claude model",
  "최대 턴": "Max turns",
  "Claude 시간 제한(분)": "Claude time limit (min)",
  "검증 명령 시간 제한(분)": "Verify time limit (min)",
  "작업 디렉터리": "Work directory",
  "데이터 디렉터리": "Data directory",
  환경: "Environment",
  "저장소 토큰 · 권한 (GitHub/GitLab)": "Repository token · permissions (GitHub/GitLab)",
  "Claude Code · git · Node (워커 실행 환경)": "Claude Code · git · Node (worker environment)",
  "Docker · 브라우저 이미지": "Docker · browser image",
  "저장소 접근": "Repository access",
  "앱 화면 열기": "Open the app screen",
  "1~2분": "1–2 min",
  검사: "Check",
  "검사 중…": "checking…",
  "서버 로그": "Server log",
  "다시 읽기": "Reload",
  "5초마다": "every 5 s",
  "(다시 읽기를 누르세요)": "(press Reload)",
  // 체크리스트
  설정: "Setup",
  " - 필수는 끝, 선택 항목 남음": " - required done, optional left",
  "프로젝트 등록": "Project registered",
  "Claude Code CLI 설치": "Claude Code CLI installed",
  "Claude 로그인": "Claude logged in",
  "git 설치": "git installed",
  "헤드리스 브라우저 (docker 이미지)": "Headless browser (docker image)",
  "테스트 계정 (로그인이 있는 앱만)": "Test account (apps with login)",
  "앱 SDK 연결 (첫 신고)": "App SDK connected (first report)",
  "(선택)": "(optional)",
  "→ 키·계정 탭": "→ Keys tab",
  "→ 점검 탭": "→ Checks tab",
  "→ 프로젝트 탭": "→ Project tab",
  // 뷰어
  "저장된 버그 리포트": "Saved bug reports",
  "← 목록": "← List",
  "기본 정보": "Basics",
  상태: "Status",
  일시: "Time",
  "AI 자동 수정": "AI auto-fix",
  새로고침: "Refresh",
  "처음부터 다시": "Start over",
  "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)": "Reload status and log (syncs with GitHub when a PR is open)",
  "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다": "Fix again from scratch, ignoring the earlier conversation",
  "병합된 이 수정을 되돌리는 브랜치·PR 을 만듭니다 (자동 병합 프로젝트면 병합까지)": "Creates a branch and PR reverting this merged fix (merged too on auto-merge projects)",
  "AI 에게 수정 요청": "Ask the AI to fix",
  "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.": "The server AI finds the cause, fixes, verifies, opens a PR, merges and tracks the deploy. Progress shows here live.",
  "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.": "Filed as an issue of the reporting tool itself; handled by the operator in the tool repo, not the app code.",
  "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.": "Fixes for this project are started by the operator from the console. Your report is filed.",
  "미리보기 열기 ↗": "Open preview ↗",
  "미리보기 준비 중": "preview starting",
  "이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)": "Spin up front, backend and a DB copy with this fix and try it (a few minutes)",
  "이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)": "The app running this fix (front+backend+DB copy)",
  "원격에 브랜치만 있음 · PR 없음": "branch on remote · no PR",
  "키트 서버 안에만 있음 · 원격에 없음": "only on the kit server · not on remote",
  "관련 기능·파일": "Related features · files",
  "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것": "Part of the knowledge graph linked to this report · yellow border = direct match",
  "화면·메뉴": "Screens · menus",
  "구현 파일": "Implementation files",
  "추천 개선": "Suggested follow-ups",
  "실행을 누르면 그 내용으로 이어서 고칩니다": "Run continues the fix with that suggestion",
  실행: "Run",
  나: "me",
  AI: "AI",
  "생각 중…": "thinking…",
  "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘": "Ask: why this way?   Change: make it work in the light theme too",
  질문: "Ask",
  "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)": "Answers without changing code (Ctrl+Enter)",
  "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지": "Continues the fix, then verify → PR → merge",
  "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.": "Ask only answers; Change continues the fix through verify, PR and merge.",
  "문제 상황": "Problem",
  "재현 단계": "Steps to reproduce",
  "기대 결과": "Expected result",
  컨텍스트: "Context",
  프론트: "Front",
  백엔드: "Backend",
  네트워크: "Network",
  "표시할 로그 없음": "No logs",
  "표시할 로그가 없습니다": "No logs to show",
  "표시할 요청 없음": "No requests",
  "기록된 요청이 없습니다": "No requests recorded",
  "기록된 mutation 없음": "No mutations",
  "기록된 mutation이 없습니다": "No mutations recorded",
  "기록된 라우터 이력이 없습니다": "No router history",
  "기록된 이벤트 없음": "No events",
  오류: "errors",
  경고: "warnings",
  "백엔드 서버 로그": "Backend server log",
  "백엔드 로그 가져오는 중...": "Loading backend log...",
  "백엔드 로그 조회 실패 (인증 확인)": "Could not load backend log (check auth)",
  "프론트엔드 콘솔 로그": "Front-end console log",
  "최근 API 요청 (최대 50건, 최신순)": "Recent API requests (up to 50, newest first)",
  "Vuex Mutation 이력 (최신순, 최대 100건)": "Vuex mutation history (newest first, up to 100)",
  "라우터 이력": "Router history",
  "최근 이벤트 (최신순)": "Recent events (newest first)",
  "🌐 환경 정보": "🌐 Environment",
  "📍 카메라 위치": "📍 Camera",
  "📸 스크린샷": "📸 Screenshot",
  "🗂 앱 상태": "🗂 App state",
  "브라우저 / 화면": "Browser / screen",
  해상도: "Resolution",
  언어: "Language",
  "Cesium 성능 지표": "Cesium performance",
  "JS 힙 메모리": "JS heap",
  경도: "Longitude",
  위도: "Latitude",
  "높이 (m)": "Height (m)",
  "지도 타입": "Map type",
  지형: "Terrain",
  카메라: "Camera",
  "메뉴 상태": "Menu state",
  "상단 탭": "Top tab",
  "좌측 메뉴": "Left menu",
  "하위 메뉴": "Sub menu",
  "열린 패널": "Open panels",
  "활성 도구": "Active tool",
  "표시 중인 데이터": "Data shown",
  데이터셋: "Datasets",
  사용자: "User",
  아이디: "ID",
  권한: "Role",
  "localStorage (민감 키 제외)": "localStorage (sensitive keys excluded)",
  "토큰 만료": "Token expiry",
  접수: "Open",
  진행중: "In progress",
  해결: "Resolved",
  보류: "On hold",
  치명적: "Critical",
  높음: "High",
  보통: "Medium",
  낮음: "Low",
  수정중: "fixing",
  준비: "ready",
  PR: "PR",
  "병합 완료 ": "merged",
  "실패 · 진행 로그 확인": "failed · see the progress log",
  "PR 올라옴 · 병합 안 됨(로그 확인)": "PR open · not merged (see log)",
  "수정본 준비 · 작업 브랜치에 커밋됨, 아직 PR·병합 전(콘솔 버전 탭에서 내보내기)": "fix ready · committed to the work branch, not yet PR/merged (send from the console Versions tab)",
  "되돌림 - 수정이 취소됨(되돌리기 PR 참고)": "reverted - the fix was cancelled (see the revert PR)",
  "AI 가 고치는 중": "the AI is fixing",
  "배포 중": "deploying",
  "리포트를 삭제하시겠습니까?": "Delete this report?",
  "저장된 리포트가 없습니다.": "No saved reports.",
  "불러오는 중...": "Loading...",
  "요청에 실패했습니다.": "The request failed.",
  "실패했습니다.": "Failed.",
  "수정 요청 실패": "Fix request failed",
  "전송 실패": "Send failed",
  "되돌리기 실패": "Revert failed",
  "미리보기 실패 ": "Preview failed",
  복사: "Copy",
  복사됨: "Copied",
  다운로드: "Download",
  "다운로드에 포함되는 정보": "Included in the download",
  "도구 문제": "tool issue",
  "버그 신고 도구 자체의 문제": "issue of the reporting tool itself",
  // ── 추가(키·계정·서버·뷰어 조각) ──
  큐: "queue",
  기본: "default",
  설정됨: "set",
  플랫폼: "Platform",
  데이터: "Data",
  "설정 파일": "Config file",
  "서버 가동": "Uptime",
  "다시 찍기": "Retake",
  "새 키 추가": "Add key",
  지우기: "Clear",
  "호스트 · 계정": "Host · user",
  "테스트 계정 아이디": "Test account ID",
  "테스트 계정 비밀번호": "Test account password",
  "GitHub 토큰 (공용)": "GitHub token (shared)",
  "GitHub 토큰 (전용 - 비우면 공용 토큰)": "GitHub token (project - empty = shared)",
  "GitLab 토큰": "GitLab token",
  "classic PAT (repo)": "classic PAT (repo)",
  "classic PAT, repo 스코프": "classic PAT, repo scope",
  "(선택) claude-sonnet-4-5": "(optional) claude-sonnet-4-5",
  "claude 또는 /home/user/.local/bin/claude": "claude or /home/user/.local/bin/claude",
  "MyApp (Vue 3 프론트 web/, Spring Boot 백엔드 api/)": "MyApp (Vue 3 front in web/, Spring Boot backend in api/)",
  "보는 프로젝트 - 한 서버에 여러 앱이 등록될 수 있다": "Project shown - one server can host several apps",
  "원격 저장소가 앞서 있습니다 - 바뀐 파일만 다시 읽어 그래프를 맞춥니다 (Claude 비용 발생)": "The remote is ahead - re-reads only changed files to update the graph (Claude cost)",
  "AI 수정본이 담긴 작업 브랜치 (기준 브랜치는 건드리지 않음)": "Work branch holding the AI fix (the base branch is never touched)",
  "AI 수정본이 담긴 작업 브랜치 - 원격 저장소에 같은 이름으로 올라가 있습니다 (PR 은 아직 없음)": "Work branch holding the AI fix - pushed to the remote under this name (no PR yet)",
  "AI 수정본이 담긴 작업 브랜치 - 아직 키트 서버 안에만 있고 원격에는 없습니다 (콘솔에서 내보내기)": "Work branch holding the AI fix - only on the kit server so far (send it from the console)",
  "🖥 백엔드 로그 (프론트 에러로 판단, 미수집)": "🖥 Backend log (judged a front-end error, not collected)",
  "언어 / Language": "Language",
  "키·계정 탭의 GitHub 토큰(classic PAT, repo 스코프). 프로젝트 전용이면 demo 의 GITHUB_TOKEN": "GitHub token in the Keys tab (classic PAT, repo scope), or GITHUB_TOKEN for the project",
  "키·계정 탭의 FC_USER/FC_PASS - 화면 확인이 로그인 뒤 화면을 보게": "FC_USER / FC_PASS in the Keys tab so the screen check can log in",
  "docker 와 `docker pull mcr.microsoft.com/playwright:v1.47.2-jammy` - 없으면 화면 확인만 건너뜀": "docker plus `docker pull mcr.microsoft.com/playwright:v1.47.2-jammy` - without it only the screen check is skipped",
  "워커가 도는 곳에 git (저장소 받기·브랜치 푸시)": "git where the worker runs (clone, push)",
  "워커가 도는 곳에 `npm i -g @anthropic-ai/claude-code`": "`npm i -g @anthropic-ai/claude-code` where the worker runs",
  "수정 결과": "Fix result",
  "원인 · 고친 내용 · 검증 · 확인이 필요한 점": "cause · changes · verification · things to check",
  원인: "Cause",
  "고친 내용": "Changes",
  검증: "Verification",
  "확인이 필요한 점": "Things to check",
  "추천 개선 ": "Suggested follow-ups",
  "샌드박스 사본": "Sandbox copy",
  "샌드박스 초기화": "Reset sandbox",
  "아직 없음 - 처음 미리보기를 띄울 때 만듭니다": "none yet - created on the first preview",
  "미리보기는 원본 파일 저장소 대신 이 사본을 씁니다(레시피 volumes 중 :ro·:shared 표시가 없는 것). 미리보기에서 만든 파일은 여기 쌓이고, 원본에 새로 올라온 자료는 초기화해야 들어옵니다.": "Previews mount this copy instead of the original file storage (recipe volumes without :ro/:shared). Files made in previews accumulate here; new files in the original appear only after a reset.",
  "수정 뒤 검증": "After a fix",
  "미리보기·재현": "preview · reproduce",
  "재현 검증": "Reproduction check",
  "- 고친 수정본을 미리보기로 띄워 신고된 요청·화면 절차를 다시 돌려 고쳐졌는지 확인. 실패하면 응답·서버 로그를 증거로 AI 가 다시 고침(최대": "- spins up the fix as a preview and replays the reported requests / screen steps to confirm it is fixed. On failure the AI fixes again with the response and server log as evidence (up to",
  "회). 레시피가 있어야 함": "rounds). Needs a preview recipe",
  "미리보기 자동 생성": "Auto preview",
  "- 재현 검증을 끈 경우에도 수정이 끝나면 미리보기를 띄움": "- start a preview after each fix even when the reproduction check is off",
  "REST 접두 경로": "REST base path",
  "/rest 또는 /lhdt-rest (요청 경로 변환용)": "/rest or /lhdt-rest (for rewriting request paths)",
  "✓ 통과": "✓ passed",
  "✗ 실패": "✗ failed",
  // 신고 창
  "버그 신고": "Report a bug",
  "어디에 대한 신고인지": "What this report is about",
  "버그 신고 도구 문제": "Reporting-tool issue",
  "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)": "When the problem is this tool itself (report dialog, list) - handled by the operator, not app code",
  "어떤 문제가 발생했나요?": "What went wrong?",
  "어떻게 동작해야 하나요?": "What should happen instead?",
  "화면 캡처": "Screen capture",
  "화면 캡처 중...": "Capturing...",
  "캡처 중...": "Capturing...",
  "이미지 불러오기": "Load image",
  "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.": "You can also paste an image (Ctrl+V) instead of capturing.",
  "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다": "Screen capture failed - save without a screenshot, or paste (Ctrl+V) / load an image",
  "그래도 가져오기": "Import anyway",
  "컨텍스트 수집에 실패했습니다 (콘솔 확인)": "Context collection failed (see console)",
  "서버 저장": "Save to server",
  "저장 중...": "Saving...",
  "저장 실패": "Save failed",
  "저장 목록": "Saved list",
  취소: "Cancel",
  적용: "Apply",
  "모두 지우기": "Clear all",
  "그리기·표시": "Draw · mark",
  "클릭해서 그리기·표시": "Click to draw or mark",
  사각형: "Rectangle",
  화살표: "Arrow",
  글자: "Text",
  "표시할 글자를 입력하세요": "Enter the text to show",
  "(눌러서 닫기)": "(click to close)",
  "kit 없음": "no kit",
  "발생 시각": "Occurred at",
  프론트엔드: "Front end",
  "네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집": "No network errors — judged a front-end error, not collected",
  시작: "Start"
}, Ot = [
  [/^프로젝트 (\d+) · 리포트 (\d+) · 큐 (\d+)$/, "projects $1 · reports $2 · queue $3"],
  [/^갱신 (.+)$/, "updated $1"],
  [/^연결 실패: (.+)$/, "connection failed: $1"],
  [/^(\d+)초 전$/, "$1 s ago"],
  [/^(\d+)분 전$/, "$1 min ago"],
  [/^(\d+)시간 전$/, "$1 h ago"],
  [/^(\d+)일 전$/, "$1 d ago"],
  [/^설정 (\d+)\/(\d+)(.*)$/, "Setup $1/$2$3"],
  [/^리포트 (\S+) (.+)$/, "Reports $1 $2"],
  [/^마지막 분석 (.+)$/, "last analysis $1"],
  [/^마지막 (.+)$/, "last $1"],
  [/^다음 (.+)$/, "next $1"],
  [/^노드 (\d+) · 관계 (\d+) · 구축 (.+?) · 갱신 (.+)$/, "nodes $1 · edges $2 · built $3 · updated $4"],
  [/^노드 (\d+) · 관계 (\d+)(.*)$/, "nodes $1 · edges $2$3"],
  [/^⚠ 원격 (\S+) 이 앞섬 → 갱신을 누르세요 · (.*)$/, "⚠ remote $1 is ahead → press Update · $2"],
  [/^구축 실패 - 로그 확인$/, "build failed - see log"],
  [/^v(\d+) 미리보기 로그 \((.+)\)$/, "v$1 preview log ($2)"],
  [/^v(\d+) 변경$/, "v$1 changes"],
  [/^v(\d+) 을 지울까요\? (.*)$/, "Delete v$1? $2"],
  [/^루프 편집: (.+)$/, "Edit loop: $1"],
  [/^범위: (.+)$/, "scope: $1"],
  [/^자동 수정 (\S+) 이상 최대 (\d+)건(.*)$/, "auto-fix $1+ up to $2$3"],
  [/^제안 분석\((.+)\)$/, "insights ($1)"],
  [/^원격으로: (.+)$/, "to remote: $1"],
  [/^(\d+)시간마다$/, "every $1 h"],
  [/^(\d+)분마다$/, "every $1 min"],
  [/^매일 (\S+)$/, "daily $1"],
  [/^(\d+)초째 기다리는 중 · 5초마다 다시 시도$/, "waiting $1 s · retrying every 5 s"],
  [/^(\d+)줄$/, "$1 lines"],
  [/^리포트 (\d+)건은 여기서 빠집니다: (.*)$/, "$1 items already turned into reports: $2"],
  [/^리포트로 넘긴 제안 (\d+)건은 여기서 빠집니다: (.*)$/, "$1 insights already turned into reports: $2"],
  [/^버전 (\d+)$/, "version $1"],
  [/^리포트 #(\d+)(.*)$/, "report #$1$2"],
  [/^(\d+)개$/, "$1"],
  [/^파일 (\d+)개$/, "$1 files"],
  [/^오류 \((\d+)\)$/, "errors ($1)"],
  [/^경고 \((\d+)\)$/, "warnings ($1)"],
  [/^로그 \((\d+)\)$/, "logs ($1)"],
  [/^전체 \((\d+)\)$/, "All ($1)"],
  [/^템플릿 DB (\S+) (.+) 갱신\((\d+)초\)$/, "template DB $1 refreshed $2 ($3 s)"],
  [/^ · 템플릿 DB (\S+) (.+) 갱신\((\d+)초\)$/, " · template DB $1 refreshed $2 ($3 s)"],
  // ── 조각(문장 일부에 값이 섞인 것) - 아래 규칙은 문자열 안 어디서든 바꾼다 ──
  [/리포트로 넘긴 제안 (\d+)건은 여기서 빠집니다:/g, "$1 insights already turned into reports:"],
  [/· 리포트 (\d+)$/, "· $1 reports"],
  [/^(대기|수정 중|수정본 준비|PR 열림|병합|실패|되돌림|요청 전) (\d+)$/, (e, A, t) => `${{ 대기: "queued", "수정 중": "fixing", "수정본 준비": "fix ready", "PR 열림": "PR open", 병합: "merged", 실패: "failed", 되돌림: "reverted", "요청 전": "not requested" }[A]} ${t}`],
  [/^(수동|예약|원격 [^·]+) · (.+?) · (\d+)분$/, (e, A, t, s) => `${A === "수동" ? "manual" : A === "예약" ? "scheduled" : A.replace("원격", "remote")} · ${t} · ${s} min`],
  [/^(\d+)시간 (\d+)분$/, "$1 h $2 min"],
  [/^GitHub 토큰 \((.+)\)$/, "GitHub token ($1)"],
  [/^API 키 (.+) · GitHub (공용|전용) · 계정 (.+)$/, (e, A, t, s) => `API key ${A} · GitHub ${t === "공용" ? "shared" : "own"} · account ${s}`],
  [/📋 프론트 로그 \((\d+)건\)/, "📋 Front-end log ($1)"],
  [/📡 네트워크 요청 \((\d+)건\)/, "📡 Network requests ($1)"],
  [/· 없음 \(초안을 만들거나 적어 주세요\)/, "· none (draft one or write it)"],
  [/· 템플릿 DB (\S+) (.+?) 갱신\((\d+)초\)/, "· template DB $1 refreshed $2 ($3 s)"],
  [/화면 확인 ([✓✗])/, "Screen check $1"],
  [/콘솔 오류 (\d+)/, "console errors $1"],
  [/페이지 예외 (\d+)/, "page exceptions $1"],
  [/실패 요청 (\d+)/, "failed requests $1"],
  [/절차 실패 (\d+)/, "step failures $1"],
  [/노드 (\d+) · 관계 (\d+)/, "nodes $1 · edges $2"],
  [/구축 (\S+ 전|.+?) · 갱신 /, "built $1 · updated "],
  [/파일 (\d+)개/, "$1 files"]
];
Ot.push(
  [/\((중지됨|떠 있음|빌드 중|시작 중|대기|실패|없음)\)/, (e, A) => `(${{ 중지됨: "stopped", "떠 있음": "up", "빌드 중": "building", "시작 중": "starting", 대기: "queued", 실패: "failed", 없음: "none" }[A]})`],
  [/"(자동 병합까지|PR\/MR 까지|원격 브랜치만|보관만\(이 서버\)|자동 병합)"/, (e, A) => `"${{ "자동 병합까지": "auto-merge", "PR/MR 까지": "up to PR/MR", "원격 브랜치만": "branch only", "보관만(이 서버)": "keep only (this server)", "자동 병합": "auto-merge" }[A]}"`]
);
Ot.push([/· 키트 저장소 안\(원격에 없음\)/, "· only on this server (not on remote)"], [/· 원격에 푸시됨\(PR 없음\)/, "· pushed to remote (no PR)"], [/^scope: /, "scope: "]);
Ot.push([/^바뀐 파일 \((\d+)\)$/, "Changed files ($1)"]);
Ot.push([/^재현 검증 (.*)$/, "Reproduction check $1"], [/(\d+)회/g, "$1 rounds"]);
const bB = [[/(\d+)초 전/g, "$1 s ago"], [/(\d+)분 전/g, "$1 min ago"], [/(\d+)시간 전/g, "$1 h ago"], [/(\d+)일 전/g, "$1 d ago"]], el = ".bf-md,.bf-log,.bf-diff,pre,code,textarea,.prob,.ktree,.kg-info,.kg-tip,.brv-text,.brv-chat__text,.brv-logbox,.brv-ai__summary,.brv-suggest__text,.brv-problem,.brv-log-msg,.brv-log-payload,.brv-shots__bigcap,[data-i18n-skip],#kLegend,.shots figcaption,.log";
function qr() {
  try {
    const A = localStorage.getItem("devloop-lang");
    if (A === "ko" || A === "en") return A;
  } catch {
  }
  return (typeof navigator < "u" && (navigator.language || "") || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
}
function UB(e) {
  try {
    localStorage.setItem("devloop-lang", e);
  } catch {
  }
}
function pr(e) {
  const A = String(e ?? ""), t = A.match(/^(\s*)([\s\S]*?)(\s*)$/);
  let s = t[2];
  if (!s || !/[가-힣]/.test(s)) return A;
  if (Object.prototype.hasOwnProperty.call(ao, s)) return t[1] + ao[s] + t[3];
  if (/^\[.+\] /.test(s)) return A;
  for (const [r, n] of Ot)
    r.lastIndex = 0, r.test(s) && (r.lastIndex = 0, s = s.replace(r, n));
  for (const [r, n] of bB) s = s.replace(r, n);
  return t[1] + s + t[3];
}
const wc = ["placeholder", "title", "aria-label"];
function hs(e) {
  if (e.nodeType === 3) {
    const A = e.parentElement;
    if (!A || ["SCRIPT", "STYLE"].includes(A.tagName) || A.closest(el)) return;
    const t = pr(e.nodeValue);
    t !== e.nodeValue && (e.__ko = e.__ko ?? e.nodeValue, e.nodeValue = t);
  } else if (e.nodeType === 1) {
    if (e.closest && e.closest(el)) return;
    for (const A of wc) {
      const t = e.getAttribute && e.getAttribute(A);
      if (t) {
        const s = pr(t);
        s !== t && e.setAttribute(A, s);
      }
    }
    if (e.tagName === "INPUT" && (e.type === "button" || e.type === "submit") && e.value) {
      const A = pr(e.value);
      A !== e.value && (e.value = A);
    }
  }
}
function tl(e) {
  const A = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let t = (e.nodeType === 1 && hs(e), A.nextNode());
  for (; t; )
    hs(t), t = A.nextNode();
}
function ei(e, A = qr()) {
  if (!e || A !== "en") return () => {
  };
  tl(e);
  const t = new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "characterData") hs(r.target);
      else if (r.type === "attributes") hs(r.target);
      else for (const n of r.addedNodes)
        n.nodeType === 3 ? hs(n) : n.nodeType === 1 && tl(n);
  });
  return t.observe(e, { childList: !0, subtree: !0, characterData: !0, attributes: !0, attributeFilter: wc }), () => t.disconnect();
}
const j1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  KO_EN: ao,
  RX: Ot,
  detectLang: qr,
  setLang: UB,
  tr: pr,
  translateTree: ei
}, Symbol.toStringTag, { value: "Module" })), FB = '.bug-target-tool[data-v-80543552]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-80543552]{margin:0}.bug-target[data-v-80543552]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-80543552]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-80543552]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-80543552]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-80543552]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-80543552]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-80543552]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-80543552]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-80543552]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-80543552]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-80543552]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-80543552]:hover{color:#fff}.bug-report-tabs[data-v-80543552]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-80543552]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-80543552]:hover{color:#ccc}.bug-tab.active[data-v-80543552]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-80543552]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-80543552]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-80543552]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-80543552]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-80543552]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-80543552]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-80543552]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-80543552]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-80543552]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-80543552]::placeholder{color:#555}.bug-report-textarea[data-v-80543552]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-80543552]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-80543552]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-80543552]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-80543552]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-80543552]{cursor:pointer}.log-filter-chip.error[data-v-80543552]{color:#e06060}.log-filter-chip.warn[data-v-80543552]{color:#c8a040}.log-filter-chip.log[data-v-80543552]{color:#6080b0}.log-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-80543552]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-80543552]:last-child{border-bottom:none}.log-item--error[data-v-80543552]{background:#c83c3c14}.log-item--warn[data-v-80543552]{background:#c8a02814}.log-time[data-v-80543552]{color:#555;flex-shrink:0}.log-badge-lv[data-v-80543552]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-80543552]{color:#e06060}.log-item--warn .log-badge-lv[data-v-80543552]{color:#c8a040}.log-item--log .log-badge-lv[data-v-80543552]{color:#6080b0}.log-msg[data-v-80543552]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-80543552]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-80543552]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-80543552]:hover{background:#ffffff0a}.net-item[data-v-80543552]:last-child{border-bottom:none}.net-item--error[data-v-80543552]{background:#c83c3c12}.net-status[data-v-80543552]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-80543552]{color:#60c860}.net-status.status-3xx[data-v-80543552]{color:#c8c040}.net-status.status-4xx[data-v-80543552]{color:#e08040}.net-status.status-5xx[data-v-80543552],.net-status.status-err[data-v-80543552]{color:#e06060}.net-method[data-v-80543552]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-80543552]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-80543552]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-80543552]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-80543552]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-80543552]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-80543552]{color:#e06060}.env-group[data-v-80543552]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-80543552]{margin-top:8px}.env-group-title[data-v-80543552]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-80543552]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-80543552]:last-child{border-bottom:none}.env-row span[data-v-80543552]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-80543552]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-80543552]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-80543552]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-80543552]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-80543552]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-80543552]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-80543552]{background:#6464c833;color:#ccc}.log-src-btn[data-v-80543552]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-80543552]{animation:spin-80543552 1s linear infinite;display:inline-block}.log-src-err[data-v-80543552]{color:#e06060;font-weight:700}@keyframes spin-80543552{to{transform:rotate(360deg)}}.log-logger[data-v-80543552]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-80543552]{color:#e06060}.event-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-80543552]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-80543552]:last-child{border-bottom:none}.event-time[data-v-80543552]{color:#555;flex-shrink:0}.event-type[data-v-80543552]{color:#9ad}.env-list[data-v-80543552]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-80543552]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-80543552]{display:flex;gap:6px}.severity-btn[data-v-80543552]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-80543552]:hover{color:#ccc}.severity-btn--critical.active[data-v-80543552]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-80543552]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-80543552]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-80543552]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-80543552]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-80543552]{color:#79a;font-size:10px}.route-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-80543552]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-80543552]:last-child{border-bottom:none}.route-from[data-v-80543552]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-80543552]{color:#555;flex-shrink:0}.route-to[data-v-80543552]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-80543552]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-80543552]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-80543552]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-80543552]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-80543552]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-80543552]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-80543552]:hover{background:#ffffff12}.bug-btn-download[data-v-80543552]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-80543552]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-80543552]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-80543552]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-80543552]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-80543552 .7s linear infinite;flex-shrink:0}@keyframes bug-spin-80543552{to{transform:rotate(360deg)}}.bug-btn-save[data-v-80543552]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-80543552]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-80543552]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-80543552]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-80543552]:hover{background:#ffffff14;color:#abc}', mB = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], xB = {
  name: "DevloopReportModal",
  components: { ScreenshotEditor: CB },
  // kit: createDevloop() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this.__i18nStop = ei(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || qr()), this._onKeydown = (e) => {
      e.key !== "Escape" || !this.isOpen || (this.isEditingShot ? this.isEditingShot = !1 : this.close());
    }, this._onPaste = (e) => {
      var t;
      if (!this.isOpen || this.isEditingShot) return;
      const A = [...((t = e.clipboardData) == null ? void 0 : t.items) || []].find((s) => s.type.startsWith("image/"));
      A && (e.preventDefault(), this.loadShotFile(A.getAsFile()));
    }, window.addEventListener("keydown", this._onKeydown), window.addEventListener("paste", this._onPaste);
  },
  beforeUnmount() {
    this.__i18nStop && this.__i18nStop(), window.removeEventListener("keydown", this._onKeydown), window.removeEventListener("paste", this._onPaste);
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
      severityOptions: mB,
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
}, vB = { class: "devloop-root" }, yB = {
  key: 0,
  class: "bug-capture-overlay"
}, EB = { class: "bug-report-modal" }, HB = { class: "bug-report-header" }, IB = { class: "bug-report-title" }, _B = {
  key: 0,
  class: "bug-report-shortcut"
}, LB = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, SB = ["onClick"], kB = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, TB = { class: "bug-report-tabs" }, KB = ["onClick"], DB = {
  key: 0,
  class: "bug-tab-badge"
}, RB = { class: "bug-report-body" }, OB = { class: "bug-report-section" }, MB = { class: "bug-report-label" }, NB = ["disabled"], PB = ["disabled"], VB = ["src"], GB = {
  key: 1,
  class: "screenshot-placeholder"
}, XB = {
  key: 2,
  class: "screenshot-placeholder"
}, JB = { class: "bug-report-section" }, WB = { class: "severity-group" }, YB = ["onClick"], jB = { class: "bug-report-section" }, ZB = { class: "bug-report-section" }, zB = { class: "bug-report-section" }, $B = { class: "bug-report-section" }, qB = { class: "included-chips" }, Ag = { class: "chip" }, eg = { class: "chip" }, tg = {
  key: 0,
  class: "chip"
}, sg = {
  key: 1,
  class: "chip"
}, rg = { class: "log-source-toggle" }, ng = {
  key: 0,
  class: "log-src-spin"
}, og = {
  key: 1,
  class: "log-src-err"
}, ig = {
  key: 0,
  class: "bug-report-section"
}, lg = { class: "bug-report-label" }, ag = { class: "log-filter-group" }, cg = { class: "log-filter-chip error" }, fg = { class: "log-filter-chip warn" }, ug = { class: "log-filter-chip log" }, dg = { class: "log-list" }, Bg = { class: "log-time" }, gg = { class: "log-badge-lv" }, hg = { class: "log-msg" }, pg = {
  key: 0,
  class: "log-empty"
}, wg = {
  key: 1,
  class: "bug-report-section"
}, Qg = { class: "bug-report-label" }, Cg = { class: "log-filter-group" }, bg = { class: "log-filter-chip error" }, Ug = { class: "log-filter-chip warn" }, Fg = { class: "log-filter-chip log" }, mg = {
  key: 0,
  class: "log-empty"
}, xg = {
  key: 1,
  class: "log-empty"
}, vg = {
  key: 2,
  class: "log-empty log-empty--error"
}, yg = {
  key: 3,
  class: "log-list"
}, Eg = { class: "log-time" }, Hg = { class: "log-badge-lv" }, Ig = { class: "log-logger" }, _g = { class: "log-msg" }, Lg = {
  key: 0,
  class: "log-empty"
}, Sg = {
  key: 2,
  class: "bug-report-section"
}, kg = { class: "net-list" }, Tg = ["onClick"], Kg = { class: "net-method" }, Dg = { class: "net-url" }, Rg = { class: "net-dur" }, Og = { class: "net-time" }, Mg = {
  key: 0,
  class: "net-detail"
}, Ng = { key: 0 }, Pg = { key: 1 }, Vg = { key: 2 }, Gg = {
  key: 3,
  class: "net-error-msg"
}, Xg = {
  key: 0,
  class: "log-empty"
}, Jg = { class: "bug-report-section" }, Wg = { class: "log-list" }, Yg = { class: "log-time" }, jg = { class: "mutation-type" }, Zg = {
  key: 0,
  class: "log-msg mutation-payload"
}, zg = {
  key: 0,
  class: "log-empty"
}, $g = { class: "bug-report-section" }, qg = { class: "route-list" }, Ah = { class: "log-time" }, eh = { class: "route-from" }, th = { class: "route-to" }, sh = {
  key: 0,
  class: "log-empty"
}, rh = {
  key: 0,
  class: "bug-report-section"
}, nh = { class: "env-group" }, oh = {
  key: 1,
  class: "bug-report-section"
}, ih = { class: "env-group" }, lh = { class: "env-row" }, ah = { class: "env-row" }, ch = { class: "env-row" }, fh = { class: "env-row" }, uh = { class: "env-row" }, dh = {
  key: 0,
  class: "bug-report-section"
}, Bh = {
  key: 1,
  class: "bug-report-section"
}, gh = {
  key: 0,
  class: "env-group"
}, hh = { class: "env-row" }, ph = {
  key: 0,
  class: "env-row"
}, wh = {
  key: 1,
  class: "env-row"
}, Qh = { class: "env-group" }, Ch = { class: "env-row" }, bh = { class: "env-row" }, Uh = { class: "env-row" }, Fh = { class: "env-row" }, mh = { class: "env-row" }, xh = { class: "env-group" }, vh = { class: "env-row" }, yh = { class: "env-row" }, Eh = { class: "env-row" }, Hh = { class: "env-list" }, Ih = { key: 0 }, _h = { class: "env-row" }, Lh = { class: "env-list" }, Sh = { key: 0 }, kh = {
  key: 0,
  class: "env-row"
}, Th = { class: "env-list" }, Kh = {
  key: 1,
  class: "env-row"
}, Dh = { class: "env-list" }, Rh = { class: "env-group" }, Oh = { class: "event-list" }, Mh = { class: "event-time" }, Nh = { class: "event-type" }, Ph = {
  key: 0,
  class: "log-empty"
}, Vh = {
  key: 1,
  class: "env-group"
}, Gh = { class: "env-row" }, Xh = { class: "env-row" }, Jh = { class: "env-row" }, Wh = { class: "env-row" }, Yh = { class: "env-group" }, jh = { class: "env-row" }, Zh = { class: "env-row" }, zh = {
  key: 0,
  class: "env-row"
}, $h = {
  key: 1,
  class: "env-row"
}, qh = { class: "env-row" }, Ap = { class: "bug-report-footer" }, ep = ["disabled", "title"], tp = ["disabled"], sp = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, rp = ["disabled"];
function np(e, A, t, s, r, n) {
  var i, l, c, f, a, d, g, Q, U, m, _, v;
  const o = Nu("ScreenshotEditor");
  return p(), w("div", vB, [
    r.isCapturing && !r.isOpen ? (p(), w("div", yB, [...A[27] || (A[27] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        V(" 화면 캡처 중... ")
      ], -1)
    ])])) : y("", !0),
    r.isOpen ? (p(), w("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: A[25] || (A[25] = (h) => r.backdropPressed = h.target === h.currentTarget),
      onClick: A[26] || (A[26] = es((h) => r.backdropPressed && n.close(), ["self"]))
    }, [
      r.isEditingShot && r.screenshotUrl ? (p(), $o(o, {
        key: 0,
        src: r.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: A[0] || (A[0] = (h) => r.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : y("", !0),
      u("div", EB, [
        u("div", HB, [
          u("span", IB, [
            A[28] || (A[28] = V("버그 신고 ", -1)),
            n.hotkey ? (p(), w("span", _B, b(n.hotkey), 1)) : y("", !0)
          ]),
          n.appProjects.length > 1 ? (p(), w("span", LB, [
            (p(!0), w(M, null, q(n.appProjects, (h) => (p(), w("button", {
              key: h.key,
              class: Y({ "bug-target__on": r.project === h.key }),
              onClick: (x) => n.setProject(h.key)
            }, b(h.label), 11, SB))), 128))
          ])) : y("", !0),
          (l = (i = t.kit) == null ? void 0 : i.api) != null && l.enabled ? (p(), w("label", kB, [
            mA(u("input", {
              type: "checkbox",
              "onUpdate:modelValue": A[1] || (A[1] = (h) => r.tool = h)
            }, null, 512), [
              [DA, r.tool]
            ]),
            A[29] || (A[29] = V(" 버그 신고 도구 문제 ", -1))
          ])) : y("", !0),
          u("button", {
            class: "bug-report-close",
            onClick: A[2] || (A[2] = (...h) => n.close && n.close(...h))
          }, "✕")
        ]),
        u("div", TB, [
          (p(!0), w(M, null, q(n.tabs, (h) => (p(), w("button", {
            key: h.id,
            class: Y(["bug-tab", { active: r.activeTab === h.id }]),
            onClick: (x) => r.activeTab = h.id
          }, [
            V(b(h.label) + " ", 1),
            h.badge ? (p(), w("span", DB, b(h.badge), 1)) : y("", !0)
          ], 10, KB))), 128))
        ]),
        u("div", RB, [
          r.activeTab === "basic" ? (p(), w(M, { key: 0 }, [
            u("div", OB, [
              u("div", MB, [
                A[30] || (A[30] = V(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[3] || (A[3] = (...h) => n.recapture && n.recapture(...h)),
                  disabled: r.isCapturing
                }, b(r.isCapturing ? "캡처 중..." : "다시 찍기"), 9, NB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[4] || (A[4] = (h) => r.isEditingShot = !0),
                  disabled: !r.screenshotUrl
                }, "그리기·표시", 8, PB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: A[5] || (A[5] = (h) => e.$refs.shotFile.click())
                }, "이미지 불러오기"),
                u("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: A[6] || (A[6] = (...h) => n.onShotFile && n.onShotFile(...h))
                }, null, 544)
              ]),
              u("div", {
                class: Y(["screenshot-wrap", { "screenshot-wrap--editable": r.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: A[7] || (A[7] = (h) => r.screenshotUrl && (r.isEditingShot = !0))
              }, [
                r.screenshotUrl ? (p(), w("img", {
                  key: 0,
                  src: r.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, VB)) : r.isCapturing ? (p(), w("div", GB, "캡처 중...")) : (p(), w("div", XB, "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다"))
              ], 2),
              A[31] || (A[31] = u("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            u("div", JB, [
              A[32] || (A[32] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", WB, [
                (p(!0), w(M, null, q(r.severityOptions, (h) => (p(), w("button", {
                  key: h.value,
                  class: Y(["severity-btn", `severity-btn--${h.value.toLowerCase()}`, { active: r.severity === h.value }]),
                  onClick: (x) => r.severity = h.value
                }, b(h.label), 11, YB))), 128))
              ])
            ]),
            u("div", jB, [
              A[33] || (A[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[8] || (A[8] = (h) => r.problemDesc = h),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [hr, r.problemDesc]
              ])
            ]),
            u("div", ZB, [
              A[34] || (A[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[9] || (A[9] = (h) => r.reproSteps = h),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [hr, r.reproSteps]
              ])
            ]),
            u("div", zB, [
              A[35] || (A[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              mA(u("textarea", {
                "onUpdate:modelValue": A[10] || (A[10] = (h) => r.expectedResult = h),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [hr, r.expectedResult]
              ])
            ]),
            u("div", $B, [
              A[39] || (A[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", qB, [
                A[36] || (A[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                A[37] || (A[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", Ag, "📡 네트워크 요청 (" + b(r.networkLogs.length) + "건)", 1),
                u("span", eg, "📋 프론트 로그 (" + b(r.allLogs.length) + "건)", 1),
                u("span", {
                  class: Y(["chip", r.backendLogsState === "ok" ? "chip--ok" : r.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + b(r.backendLogsState === "ok" ? r.backendLogs.length + "건" : r.backendLogsState === "loading" ? "로딩 중" : r.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : r.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = r.context) != null && c.camera ? (p(), w("span", tg, "📍 카메라 위치")) : y("", !0),
                A[38] || (A[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (f = r.context) != null && f.user ? (p(), w("span", sg, "👤 " + b(r.context.user.username), 1)) : y("", !0)
              ])
            ])
          ], 64)) : y("", !0),
          r.activeTab === "logs" ? (p(), w(M, { key: 1 }, [
            u("div", rg, [
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "front" }]),
                onClick: A[11] || (A[11] = (h) => r.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: Y(["log-src-btn", { active: r.logSource === "backend" }]),
                onClick: A[12] || (A[12] = (h) => r.logSource = "backend")
              }, [
                A[40] || (A[40] = V(" 백엔드 ", -1)),
                r.backendLogsState === "loading" ? (p(), w("span", ng, "⟳")) : r.backendLogsState === "error" ? (p(), w("span", og, "!")) : y("", !0)
              ], 2)
            ]),
            r.logSource === "front" ? (p(), w("div", ig, [
              u("div", lg, [
                A[41] || (A[41] = V(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", ag, [
                  u("label", cg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[13] || (A[13] = (h) => r.showError = h)
                    }, null, 512), [
                      [DA, r.showError]
                    ]),
                    V(" 오류 (" + b(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", fg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[14] || (A[14] = (h) => r.showWarn = h)
                    }, null, 512), [
                      [DA, r.showWarn]
                    ]),
                    V(" 경고 (" + b(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", ug, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[15] || (A[15] = (h) => r.showLog = h)
                    }, null, 512), [
                      [DA, r.showLog]
                    ]),
                    V(" 로그 (" + b(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", dg, [
                (p(!0), w(M, null, q(n.filteredLogs, (h, x) => (p(), w("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${h.level}`])
                }, [
                  u("span", Bg, b(h.time.slice(11)), 1),
                  u("span", gg, b(h.level), 1),
                  u("span", hg, b(h.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), w("div", pg, "표시할 로그가 없습니다")) : y("", !0)
              ])
            ])) : y("", !0),
            r.logSource === "backend" ? (p(), w("div", wg, [
              u("div", Qg, [
                A[42] || (A[42] = V(" 백엔드 서버 로그 ", -1)),
                u("div", Cg, [
                  u("label", bg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[16] || (A[16] = (h) => r.showBEError = h)
                    }, null, 512), [
                      [DA, r.showBEError]
                    ]),
                    V(" ERROR (" + b(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", Ug, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[17] || (A[17] = (h) => r.showBEWarn = h)
                    }, null, 512), [
                      [DA, r.showBEWarn]
                    ]),
                    V(" WARN (" + b(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", Fg, [
                    mA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[18] || (A[18] = (h) => r.showBEInfo = h)
                    }, null, 512), [
                      [DA, r.showBEInfo]
                    ]),
                    V(" INFO (" + b(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              r.backendLogsState === "loading" ? (p(), w("div", mg, "백엔드 로그 가져오는 중...")) : r.backendLogsState === "skipped" ? (p(), w("div", xg, [
                A[43] || (A[43] = V(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: A[19] || (A[19] = (...h) => n.fetchBackendLogs && n.fetchBackendLogs(...h))
                }, "그래도 가져오기")
              ])) : r.backendLogsState === "error" ? (p(), w("div", vg, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), w("div", yg, [
                (p(!0), w(M, null, q(n.filteredBackendLogs, (h, x) => (p(), w("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${h.level.toLowerCase()}`])
                }, [
                  u("span", Eg, b(h.time.slice(11)), 1),
                  u("span", Hg, b(h.level), 1),
                  u("span", Ig, b(h.logger), 1),
                  u("span", _g, b(h.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), w("div", Lg, "표시할 로그가 없습니다")) : y("", !0)
              ]))
            ])) : y("", !0)
          ], 64)) : y("", !0),
          r.activeTab === "network" ? (p(), w("div", Sg, [
            A[51] || (A[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", kg, [
              (p(!0), w(M, null, q(n.reversedNetwork, (h, x) => {
                var S;
                return p(), w(M, { key: x }, [
                  u("div", {
                    class: Y(["net-item", h.error || h.status >= 400 ? "net-item--error" : ""]),
                    onClick: (X) => n.toggleNetDetail(x)
                  }, [
                    u("span", {
                      class: Y(["net-status", n.statusClass(h.status)])
                    }, b(h.status), 3),
                    u("span", Kg, b(h.method), 1),
                    u("span", Dg, b(h.url), 1),
                    u("span", Rg, b(h.duration) + "ms", 1),
                    u("span", Og, b((S = h.time) == null ? void 0 : S.slice(11, 19)), 1)
                  ], 10, Tg),
                  r.expandedNet === x ? (p(), w("div", Mg, [
                    h.params ? (p(), w("div", Ng, [
                      A[44] || (A[44] = u("b", null, "Params:", -1)),
                      A[45] || (A[45] = V()),
                      u("code", null, b(h.params), 1)
                    ])) : y("", !0),
                    h.requestBody ? (p(), w("div", Pg, [
                      A[46] || (A[46] = u("b", null, "Request:", -1)),
                      A[47] || (A[47] = V()),
                      u("code", null, b(h.requestBody), 1)
                    ])) : y("", !0),
                    h.responseBody ? (p(), w("div", Vg, [
                      A[48] || (A[48] = u("b", null, "Response:", -1)),
                      A[49] || (A[49] = V()),
                      u("code", null, b(h.responseBody), 1)
                    ])) : y("", !0),
                    h.error ? (p(), w("div", Gg, [
                      A[50] || (A[50] = u("b", null, "Error:", -1)),
                      V(" " + b(h.error), 1)
                    ])) : y("", !0)
                  ])) : y("", !0)
                ], 64);
              }), 128)),
              r.networkLogs.length === 0 ? (p(), w("div", Xg, "기록된 요청이 없습니다")) : y("", !0)
            ])
          ])) : y("", !0),
          r.activeTab === "state" ? (p(), w(M, { key: 3 }, [
            u("div", Jg, [
              A[52] || (A[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", Wg, [
                (p(!0), w(M, null, q(((a = r.context) == null ? void 0 : a.mutationLog) || [], (h, x) => (p(), w("div", {
                  key: x,
                  class: "log-item"
                }, [
                  u("span", Yg, b(h.time), 1),
                  u("span", jg, b(h.type), 1),
                  h.payload !== null ? (p(), w("span", Zg, b(n.formatPayload(h.payload)), 1)) : y("", !0)
                ]))), 128)),
                (g = (d = r.context) == null ? void 0 : d.mutationLog) != null && g.length ? y("", !0) : (p(), w("div", zg, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", $g, [
              A[54] || (A[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", qg, [
                (p(!0), w(M, null, q(((Q = r.context) == null ? void 0 : Q.routeHistory) || [], (h, x) => (p(), w("div", {
                  key: x,
                  class: "route-item"
                }, [
                  u("span", Ah, b(h.time), 1),
                  u("span", eh, b(h.from), 1),
                  A[53] || (A[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", th, b(h.to), 1)
                ]))), 128)),
                (m = (U = r.context) == null ? void 0 : U.routeHistory) != null && m.length ? y("", !0) : (p(), w("div", sh, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (_ = r.context) != null && _.storage && Object.keys(r.context.storage).length ? (p(), w("div", rh, [
              A[55] || (A[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", nh, [
                (p(!0), w(M, null, q(r.context.storage, (h, x) => (p(), w("div", {
                  key: x,
                  class: "env-row"
                }, [
                  u("span", null, b(x), 1),
                  u("span", null, b(h), 1)
                ]))), 128))
              ])
            ])) : y("", !0),
            (v = r.context) != null && v.cesiumPerf ? (p(), w("div", oh, [
              A[61] || (A[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", ih, [
                u("div", lh, [
                  A[56] || (A[56] = u("span", null, "Primitives", -1)),
                  u("span", null, b(r.context.cesiumPerf.primitives), 1)
                ]),
                u("div", ah, [
                  A[57] || (A[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, b(r.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", ch, [
                  A[58] || (A[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, b(r.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", fh, [
                  A[59] || (A[59] = u("span", null, "Shadows", -1)),
                  u("span", null, b(r.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", uh, [
                  A[60] || (A[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, b(r.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : y("", !0)
          ], 64)) : y("", !0),
          r.activeTab === "env" ? (p(), w(M, { key: 4 }, [
            r.context ? (p(), w("div", Bh, [
              r.context.user ? (p(), w("div", gh, [
                A[66] || (A[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", hh, [
                  A[63] || (A[63] = u("span", null, "아이디", -1)),
                  u("span", null, b(r.context.user.username), 1)
                ]),
                r.context.user.roles.length ? (p(), w("div", ph, [
                  A[64] || (A[64] = u("span", null, "권한", -1)),
                  u("span", null, b(r.context.user.roles.join(", ")), 1)
                ])) : y("", !0),
                r.context.user.exp ? (p(), w("div", wh, [
                  A[65] || (A[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, b(r.context.user.exp), 1)
                ])) : y("", !0)
              ])) : y("", !0),
              u("div", Qh, [
                A[72] || (A[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", Ch, [
                  A[67] || (A[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, b(r.context.menus.headerName), 1)
                ]),
                u("div", bh, [
                  A[68] || (A[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, b(r.context.menus.subMenuName), 1)
                ]),
                u("div", Uh, [
                  A[69] || (A[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.leftMenus)), 1)
                ]),
                u("div", Fh, [
                  A[70] || (A[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.openPanels)), 1)
                ]),
                u("div", mh, [
                  A[71] || (A[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, b(n.joinOrNone(r.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", xh, [
                A[75] || (A[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", vh, [
                  A[73] || (A[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, b(r.context.activeData.mapType), 1)
                ]),
                u("div", yh, [
                  A[74] || (A[74] = u("span", null, "지형", -1)),
                  u("span", null, b(r.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", Eh, [
                  u("span", null, "데이터셋 (" + b(r.context.activeData.datasets.length) + ")", 1),
                  u("span", Hh, [
                    r.context.activeData.datasets.length ? y("", !0) : (p(), w("span", Ih, "없음")),
                    (p(!0), w(M, null, q(r.context.activeData.datasets, (h) => (p(), w("span", {
                      key: h.layerId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ]),
                u("div", _h, [
                  u("span", null, "3D 타일 (" + b(r.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", Lh, [
                    r.context.activeData.threeDTiles.length ? y("", !0) : (p(), w("span", Sh, "없음")),
                    (p(!0), w(M, null, q(r.context.activeData.threeDTiles, (h) => (p(), w("span", {
                      key: h.threeDTilesId || h.sourceId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ]),
                r.context.activeData.autoPlacement.length ? (p(), w("div", kh, [
                  u("span", null, "배치안 (" + b(r.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", Th, [
                    (p(!0), w(M, null, q(r.context.activeData.autoPlacement, (h) => (p(), w("span", {
                      key: h.sourceId,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ])) : y("", !0),
                r.context.activeData.topicMaps.length ? (p(), w("div", Kh, [
                  u("span", null, "주제도 (" + b(r.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Dh, [
                    (p(!0), w(M, null, q(r.context.activeData.topicMaps, (h) => (p(), w("span", {
                      key: h.key,
                      class: "env-tag"
                    }, b(h._displayName), 1))), 128))
                  ])
                ])) : y("", !0)
              ]),
              u("div", Rh, [
                A[76] || (A[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", Oh, [
                  (p(!0), w(M, null, q(r.context.recentEvents.slice(0, 30), (h, x) => (p(), w("div", {
                    key: x,
                    class: "event-item"
                  }, [
                    u("span", Mh, b(h.time), 1),
                    u("span", Nh, b(h.type), 1)
                  ]))), 128)),
                  r.context.recentEvents.length ? y("", !0) : (p(), w("div", Ph, "기록된 이벤트 없음"))
                ])
              ]),
              r.context.camera ? (p(), w("div", Vh, [
                A[81] || (A[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", Gh, [
                  A[77] || (A[77] = u("span", null, "경도", -1)),
                  u("span", null, b(r.context.camera.longitude), 1)
                ]),
                u("div", Xh, [
                  A[78] || (A[78] = u("span", null, "위도", -1)),
                  u("span", null, b(r.context.camera.latitude), 1)
                ]),
                u("div", Jh, [
                  A[79] || (A[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, b(r.context.camera.height), 1)
                ]),
                u("div", Wh, [
                  A[80] || (A[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, b(r.context.camera.heading) + "° / " + b(r.context.camera.pitch) + "°", 1)
                ])
              ])) : y("", !0),
              u("div", Yh, [
                A[87] || (A[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", jh, [
                  A[82] || (A[82] = u("span", null, "일시", -1)),
                  u("span", null, b(r.context.datetime), 1)
                ]),
                u("div", Zh, [
                  A[83] || (A[83] = u("span", null, "해상도", -1)),
                  u("span", null, b(r.context.screen.resolution) + " · 뷰포트 " + b(r.context.screen.viewport), 1)
                ]),
                r.context.memory ? (p(), w("div", zh, [
                  A[84] || (A[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, b(r.context.memory.usedMB) + "MB / " + b(r.context.memory.limitMB) + "MB", 1)
                ])) : y("", !0),
                r.context.connection ? (p(), w("div", $h, [
                  A[85] || (A[85] = u("span", null, "네트워크", -1)),
                  u("span", null, b(r.context.connection.effectiveType) + " · " + b(r.context.connection.downlink) + "Mbps", 1)
                ])) : y("", !0),
                u("div", qh, [
                  A[86] || (A[86] = u("span", null, "언어", -1)),
                  u("span", null, b(r.context.browser.language), 1)
                ])
              ])
            ])) : (p(), w("div", dh, [...A[62] || (A[62] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : y("", !0)
        ]),
        u("div", Ap, [
          n.serverEnabled ? (p(), w("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: A[20] || (A[20] = (...h) => n.openViewer && n.openViewer(...h))
          }, "저장 목록")) : y("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: A[21] || (A[21] = (...h) => n.close && n.close(...h))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: A[22] || (A[22] = (...h) => n.copyToClipboard && n.copyToClipboard(...h)),
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
            V(" " + b(r.copyStatus), 1)
          ], 8, ep),
          n.serverEnabled ? (p(), w("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: A[23] || (A[23] = (...h) => n.saveToServer && n.saveToServer(...h)),
            disabled: r.isSaving || r.isCapturing
          }, [
            r.isSaving ? (p(), w("span", sp)) : y("", !0),
            V(" " + b(r.saveStatus), 1)
          ], 8, tp)) : y("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: A[24] || (A[24] = (...h) => n.download && n.download(...h)),
            disabled: r.isCapturing
          }, " 다운로드 ", 8, rp)
        ])
      ])
    ], 32)) : y("", !0)
  ]);
}
const op = /* @__PURE__ */ Ai(xB, [["render", np], ["styles", [FB]], ["__scopeId", "data-v-80543552"]]), pe = (e) => String(e ?? "").replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]);
function ft(e) {
  let A = pe(e);
  return A = A.replace(/`([^`]+)`/g, (t, s) => `<code>${s}</code>`), A = A.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"), A = A.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'), A = A.replace(/(^|[\s(])((?:[\w.-]+\/)+[\w.-]+\.(?:java|js|ts|tsx|jsx|vue|py|xml|yml|yaml|json|properties|gradle|sql|md|scss|css|html)(?::\d+)?)(?=$|[\s,)])/g, (t, s, r) => t.includes("<code>") ? t : `${s}<code class="p">${r}</code>`), A;
}
function Qc(e) {
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
    return c ? `<b class="lbl">${pe(c[1])}:</b> ${ft(c[2])}` : ft(l);
  };
  let i = [];
  for (; r < s.length; ) {
    const l = s[r];
    if (/^```/.test(l)) {
      n(i);
      const f = l.slice(3).trim(), a = [];
      for (r++; r < s.length && !/^```/.test(s[r]); ) a.push(s[r++]);
      r++, t.push(`<pre class="code"${f ? ` data-lang="${pe(f)}"` : ""}>${pe(a.join(`
`))}</pre>`);
      continue;
    }
    const c = l.match(/^(#{1,4})\s+(.*)$/);
    if (c) {
      n(i), t.push(`<h${Math.min(6, c[1].length + 2)}>${ft(c[2])}</h${Math.min(6, c[1].length + 2)}>`), r++;
      continue;
    }
    if (/^\s*([-*•]|\d+[.)])\s+/.test(l)) {
      n(i);
      const f = /^\s*\d+[.)]\s+/.test(l), a = [];
      for (; r < s.length && /^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) {
        let d = s[r].replace(/^\s*([-*•]|\d+[.)])\s+/, "");
        for (r++; r < s.length && /^\s{2,}\S/.test(s[r]) && !/^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) d += " " + s[r++].trim();
        a.push(`<li>${ft(d)}</li>`);
      }
      t.push(`<${f ? "ol" : "ul"}>${a.join("")}</${f ? "ol" : "ul"}>`);
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
const ip = [
  [/^✓/, "ok"],
  [/^✗/, "bad"],
  [/^▶/, "start"],
  [/^■/, "stop"],
  [/^↻/, "warn"],
  [/실패|오류|error/i, "bad"]
], lp = [
  [/^💬/, "say"],
  [/^✏️|^✏/, "edit"],
  [/^\$ /, "cmd"],
  [/^읽기 /, "read"],
  [/^검색 /, "grep"],
  [/^Claude 종료|^Claude 답변/, "end"]
];
function Cc(e) {
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
      for (const [f, a] of l ? lp : ip) if (f.test(i)) {
        c = a;
        break;
      }
      t.push(`<div class="ln ${l ? "detail" : "stage"}${c ? ` ${c}` : ""}"><span class="ts">${n}</span><span class="tx">${ft(i)}</span></div>`);
      continue;
    }
    if (r = s.match(/^(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z?)\s+(INFO|WARN|ERROR|DEBUG)?\s*(.*)$/), r) {
      const [, n, o, i] = r;
      t.push(`<div class="ln srv ${(o || "info").toLowerCase()}"><span class="ts">${pe(n.slice(11, 19))}</span>${o ? `<span class="lvl">${o}</span>` : ""}<span class="tx">${ft(i)}</span></div>`);
      continue;
    }
    if (/^── .+ ──$/.test(s.trim())) {
      t.push(`<div class="ln group">${pe(s.trim().replace(/^── | ──$/g, ""))}</div>`);
      continue;
    }
    t.push(`<div class="ln cont"><span class="ts"></span><span class="tx">${ft(s)}</span></div>`);
  }
  return `<div class="bf-log">${t.join("")}</div>`;
}
function ap(e, A = "") {
  const r = String(e ?? "").replace(/\r\n?/g, `
`).split(/^(?=diff --git )/m).filter((o) => o.trim()).map((o) => {
    const i = o.split(`
`), l = i[0].match(/^diff --git a\/(.+?) b\/(.+)$/), c = l ? l[2] : i[0];
    let f = 0, a = 0;
    const d = [];
    for (const g of i.slice(1)) {
      if (/^(index |--- |\+\+\+ |new file|deleted file|similarity|rename |old mode|new mode)/.test(g)) continue;
      let Q = "ctx";
      g.startsWith("@@") ? Q = "hunk" : g.startsWith("+") ? (Q = "add", f++) : g.startsWith("-") ? (Q = "del", a++) : g.startsWith("\\") && (Q = "meta"), d.push(`<div class="dl ${Q}">${pe(g) || " "}</div>`);
    }
    return `<details class="file" open><summary><code>${pe(c)}</code> <span class="cnt"><span class="add">+${f}</span> <span class="del">−${a}</span></span></summary><div class="body">${d.join("")}</div></details>`;
  });
  return `<div class="bf-diff">${A ? `<pre class="stat">${pe(String(A).trim())}</pre>` : ""}${r.join("") || '<div class="dim">변경 없음</div>'}</div>`;
}
const bc = `
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
`, Z1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  FMT_CSS: bc,
  diffHtml: ap,
  esc: pe,
  logHtml: Cc,
  mdLite: Qc
}, Symbol.toStringTag, { value: "Module" })), cp = ".brv-projects[data-v-c4f154f5]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-c4f154f5]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-c4f154f5]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-c4f154f5]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-c4f154f5]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-c4f154f5]{margin:0!important}.brv-ai__tools[data-v-c4f154f5]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-c4f154f5]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-c4f154f5]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-c4f154f5]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-c4f154f5]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-c4f154f5]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-c4f154f5]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-c4f154f5]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-c4f154f5]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-c4f154f5]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-c4f154f5]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-c4f154f5]{display:block;font-family:inherit}.brv-kg__col[data-v-c4f154f5]{font-size:10px;fill:#889}.brv-kg__label[data-v-c4f154f5]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-c4f154f5]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-c4f154f5]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-c4f154f5]{opacity:.25}.brv-kg__edge[data-v-c4f154f5]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-c4f154f5]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-c4f154f5]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-c4f154f5],.brv-kg__edge--writes[data-v-c4f154f5]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-c4f154f5]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-c4f154f5]{opacity:.12}.brv-shots[data-v-c4f154f5]{margin:8px 0 6px}.brv-shots__title[data-v-c4f154f5]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-c4f154f5]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-c4f154f5]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-c4f154f5],.brv-shots__ph[data-v-c4f154f5]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-c4f154f5]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-c4f154f5]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-c4f154f5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-c4f154f5]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-c4f154f5]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-c4f154f5]{font-weight:600}.brv-ai__branch[data-v-c4f154f5]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-c4f154f5]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-c4f154f5]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-c4f154f5]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-c4f154f5]{flex:1;margin:0}.brv-chat__btns[data-v-c4f154f5]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-c4f154f5]{white-space:nowrap}.brv-chat__input[data-v-c4f154f5]{font-family:inherit}.brv-chat__text[data-v-c4f154f5]{color:#d0d6de;white-space:normal}.brv-chat__msg--user .brv-chat__text[data-v-c4f154f5]{color:#e6ebf2}.brv-notice[data-v-c4f154f5]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-c4f154f5]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-c4f154f5]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-c4f154f5]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-c4f154f5],.brv-log-list[data-v-c4f154f5],.brv-net-detail[data-v-c4f154f5],.brv-text[data-v-c4f154f5]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-c4f154f5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-c4f154f5]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-c4f154f5]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-c4f154f5]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-c4f154f5]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-c4f154f5]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-c4f154f5]:hover{color:#fff}.brv-body[data-v-c4f154f5]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-c4f154f5]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-c4f154f5]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-c4f154f5]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-c4f154f5]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-c4f154f5]:hover{background:#ffffff12}.brv-problem[data-v-c4f154f5]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-c4f154f5]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-c4f154f5]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-c4f154f5]:hover{color:#e74c3c}.brv-badge[data-v-c4f154f5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-c4f154f5]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-c4f154f5]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-c4f154f5]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-c4f154f5]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-c4f154f5]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-c4f154f5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-c4f154f5]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-c4f154f5]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-c4f154f5]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-c4f154f5]{background:#7888992e;color:#89a}.brv-status-control[data-v-c4f154f5]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-c4f154f5]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-c4f154f5]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-c4f154f5]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-c4f154f5]{width:11px;height:11px;border-width:2px}.brv-back[data-v-c4f154f5]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-c4f154f5]:hover{color:#fff}.brv-screenshot[data-v-c4f154f5]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-c4f154f5]{margin-bottom:16px}.brv-fix[data-v-c4f154f5]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-c4f154f5]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-c4f154f5]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-c4f154f5]{background:#e0f2fe;color:#075985}.brv-fix--ready[data-v-c4f154f5]{background:#ccfbf1;color:#115e59}.brv-fix--reverted[data-v-c4f154f5]{background:#fce7f3;color:#9d174d}.brv-ai__tool--danger[data-v-c4f154f5]{color:#b91c1c;border-color:#fca5a5}.brv-fix--merged[data-v-c4f154f5]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-c4f154f5]{background:#fee2e2;color:#991b1b}.brv-link[data-v-c4f154f5]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-c4f154f5]{margin-top:6px}.brv-fix-actions[data-v-c4f154f5]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-c4f154f5]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-c4f154f5]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-c4f154f5]{background:transparent;color:#2563eb}.brv-hint[data-v-c4f154f5]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-c4f154f5]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-c4f154f5]{margin-top:8px;font-size:11px}.brv-result[data-v-c4f154f5]{margin:6px 0 8px;font-size:12px}.brv-result>summary[data-v-c4f154f5]{cursor:pointer;color:#556;font-weight:600}.brv-result__body[data-v-c4f154f5]{margin-top:6px;padding:8px 10px;background:#ffffff0a;border-radius:6px;line-height:1.55}.brv-result__body h3[data-v-c4f154f5],.brv-result__body h4[data-v-c4f154f5]{margin:8px 0 3px;font-size:12px;color:#9ab}.brv-result__body h3[data-v-c4f154f5]:first-child,.brv-result__body h4[data-v-c4f154f5]:first-child{margin-top:0}.brv-result__repro[data-v-c4f154f5]{margin:6px 0;padding:6px 10px;border-radius:6px;font-size:12px;background:#7fe0a41f}.brv-result__repro.bad[data-v-c4f154f5]{background:#ff9aa824}.brv-result__repro ul[data-v-c4f154f5]{margin:4px 0 0;padding-left:16px}.brv-result__repro code[data-v-c4f154f5]{font-size:11px;white-space:pre-wrap;word-break:break-all}.brv-result__files[data-v-c4f154f5]{margin-top:6px}.brv-result__files ul[data-v-c4f154f5]{margin:2px 0 0;padding-left:16px}.brv-result__files li[data-v-c4f154f5]{margin:1px 0}.brv-result__files code[data-v-c4f154f5]{font-size:11px}.brv-fix-log summary[data-v-c4f154f5]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-c4f154f5],.brv-logbox[data-v-c4f154f5]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-c4f154f5]{color:inherit}.brv-suggest[data-v-c4f154f5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-c4f154f5]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-c4f154f5]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-c4f154f5]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-c4f154f5]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-c4f154f5]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-c4f154f5]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-c4f154f5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-c4f154f5]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-c4f154f5]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-c4f154f5]{color:#1e5bb8}.brv-chat__text[data-v-c4f154f5]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-c4f154f5]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-c4f154f5]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-c4f154f5]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-c4f154f5]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-c4f154f5]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-c4f154f5]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-c4f154f5]{margin-bottom:8px}.brv-field-label[data-v-c4f154f5]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-c4f154f5]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:normal;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-c4f154f5]{display:flex;gap:4px}.brv-log-tab[data-v-c4f154f5]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-c4f154f5]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-c4f154f5]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-c4f154f5]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-c4f154f5]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-c4f154f5]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-c4f154f5]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-c4f154f5]:hover{background:#ffffff0f}.brv-filter-error[data-v-c4f154f5]{color:#c06060}.brv-filter-warn[data-v-c4f154f5]{color:#b09040}.brv-filter-log[data-v-c4f154f5]{color:#589}.brv-log-list[data-v-c4f154f5]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-c4f154f5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-c4f154f5]:hover{background:#ffffff0a}.brv-log-item[data-v-c4f154f5]:last-child{border-bottom:none}.brv-log-time[data-v-c4f154f5]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-c4f154f5]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-c4f154f5]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-c4f154f5]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-c4f154f5]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-c4f154f5]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-c4f154f5]{color:#8ac;font-weight:600}.brv-log--error[data-v-c4f154f5]{color:#e87070}.brv-log--warn[data-v-c4f154f5]{color:#d4a84b}.brv-log--info[data-v-c4f154f5]{color:#a8b8c8}.brv-log-empty[data-v-c4f154f5]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-c4f154f5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-c4f154f5]:hover{background:#ffffff0a}.brv-net-err[data-v-c4f154f5]{background:#e74c3c0d}.brv-net-status[data-v-c4f154f5]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-c4f154f5]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-c4f154f5]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-c4f154f5],.st-5xx[data-v-c4f154f5]{color:#e87070}.st-4xx[data-v-c4f154f5]{color:#d4a84b}.st-3xx[data-v-c4f154f5]{color:#8ac}.st-2xx[data-v-c4f154f5]{color:#6c8}.brv-net-detail[data-v-c4f154f5]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-c4f154f5]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-c4f154f5 .7s linear infinite}@keyframes brv-spin-c4f154f5{to{transform:rotate(360deg)}}", fp = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  READY: "수정본 준비 · 작업 브랜치에 커밋됨, 아직 PR·병합 전(콘솔 버전 탭에서 내보내기)",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  REVERTED: "되돌림 - 수정이 취소됨(되돌리기 PR 참고)",
  FAILED: "실패 · 진행 로그 확인"
}, up = { QUEUED: "대기", RUNNING: "수정중", READY: "준비", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패", REVERTED: "되돌림" }, sl = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], dp = {
  name: "DevloopViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      fmtCss: bc,
      STATUSES: sl,
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
      var g;
      const e = this.kg;
      if (!((g = e == null ? void 0 : e.nodes) != null && g.length)) return null;
      const A = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, s = 30, r = 22, n = 26, o = A.map((Q) => e.nodes.filter((U) => Q.layers.includes(U.layer))).map((Q, U) => ({ ...A[U], ns: Q })).filter((Q) => Q.ns.length), i = [], l = [];
      let c = 8;
      for (const Q of o)
        l.push({ layer: Q.layers[0], x: c, title: Q.title }), Q.ns.sort((U, m) => m.hit - U.hit || (m.score || 0) - (U.score || 0)), Q.ns.forEach((U, m) => {
          const _ = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          i.push({ ...U, x: c, y: r + m * s, w: t - n, h: 20, short: _ });
        }), c += t;
      const f = new Map(i.map((Q) => [Q.id, Q])), a = [];
      for (const Q of e.edges) {
        const U = f.get(Q.from), m = f.get(Q.to);
        if (!U || !m || U === m) continue;
        const [_, v] = U.x <= m.x ? [U, m] : [m, U], h = _.x + _.w, x = _.y + _.h / 2, S = v.x, X = v.y + v.h / 2, eA = _.x === v.x ? `M${h},${x} C${h + 18},${x} ${S + _.w + 18},${X} ${S + _.w},${X}` : `M${h},${x} C${(h + S) / 2},${x} ${(h + S) / 2},${X} ${S},${X}`;
        a.push({ d: eA, rel: Q.rel, from: Q.from, to: Q.to });
      }
      const d = r + Math.max(...o.map((Q) => Q.ns.length)) * s + 4;
      return { nodes: i, edges: a, cols: l, w: c + 4, h: d };
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
    fixRepro() {
      var e;
      try {
        return (e = this.detail) != null && e.fixRepro ? JSON.parse(this.detail.fixRepro) : null;
      } catch {
        return null;
      }
    },
    fixFiles() {
      var e;
      try {
        const A = (e = this.detail) != null && e.fixFiles ? JSON.parse(this.detail.fixFiles) : [];
        return Array.isArray(A) ? A : [];
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
    this.__i18nStop && this.__i18nStop(), this._stopFixPolling();
  },
  mounted() {
    this.__i18nStop = ei(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || qr());
  },
  methods: {
    md(e) {
      return Qc(e);
    },
    logH(e) {
      return Cc(e);
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
      return ((A = sl.find((t) => t.value === e)) == null ? void 0 : A.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(e) {
      return fp[e || "none"] || e;
    },
    fixShort(e) {
      return up[e] || e;
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
    async revertFix() {
      if (!this.detail) return;
      const e = window.prompt(`이 수정을 되돌립니다. revert 브랜치와 PR 을 만들고, 자동 병합 프로젝트면 병합까지 합니다.

사유(선택):`, "");
      if (e !== null) {
        this.fixBusy = !0;
        try {
          const A = await this.kit.api.revert(this.detail.bugReportId, e);
          this.detail = { ...this.detail, ...A }, this._startFixPolling();
        } catch (A) {
          this.showNotice("되돌리기 실패", (A == null ? void 0 : A.message) || "실패했습니다.", "error");
        } finally {
          this.fixBusy = !1;
        }
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
}, Bp = { class: "devloop-root" }, gp = { class: "brv-modal" }, hp = { class: "brv-header" }, pp = { class: "brv-title" }, wp = {
  key: 0,
  class: "brv-shortcut"
}, Qp = {
  key: 0,
  class: "brv-projects"
}, Cp = ["onClick"], bp = { class: "brv-body" }, Up = {
  key: 0,
  class: "brv-loading"
}, Fp = {
  key: 1,
  class: "brv-empty"
}, mp = {
  key: 2,
  class: "brv-list"
}, xp = ["onClick"], vp = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, yp = { class: "brv-problem" }, Ep = ["title"], Hp = { class: "brv-meta" }, Ip = ["onClick"], _p = {
  key: 0,
  class: "brv-loading"
}, Lp = {
  key: 0,
  class: "brv-section"
}, Sp = ["src"], kp = ["src", "alt"], Tp = { class: "brv-shots__bigcap" }, Kp = { class: "brv-section" }, Dp = { class: "brv-row" }, Rp = { class: "brv-row" }, Op = { class: "brv-status-control" }, Mp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Np = ["value", "disabled"], Pp = ["value"], Vp = { class: "brv-row" }, Gp = { class: "brv-selectable" }, Xp = { class: "brv-row" }, Jp = { class: "brv-selectable" }, Wp = { class: "brv-section brv-ai" }, Yp = { class: "brv-ai__head" }, jp = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Zp = {
  key: 1,
  class: "brv-fix-elapsed"
}, zp = {
  key: 2,
  class: "brv-fix-elapsed"
}, $p = {
  key: 3,
  class: "brv-ai__tools"
}, qp = ["disabled"], Aw = ["disabled"], ew = ["disabled"], tw = {
  key: 0,
  class: "brv-ai__hint"
}, sw = {
  key: 1,
  class: "brv-ai__hint"
}, rw = {
  key: 2,
  class: "brv-ai__start"
}, nw = ["disabled"], ow = {
  key: 0,
  class: "brv-ai__meta"
}, iw = ["href"], lw = ["href"], aw = ["title"], cw = {
  key: 3,
  class: "brv-ai__hint"
}, fw = { class: "brv-ai__branch" }, uw = ["href"], dw = {
  key: 1,
  class: "brv-ai__hint"
}, Bw = ["disabled"], gw = ["title"], hw = ["innerHTML"], pw = {
  key: 2,
  class: "brv-result",
  open: ""
}, ww = { key: 0 }, Qw = { key: 1 }, Cw = ["innerHTML"], bw = {
  key: 2,
  class: "brv-result__files"
}, Uw = { class: "brv-field-label" }, Fw = {
  key: 3,
  class: "brv-kg",
  open: ""
}, mw = { class: "brv-kg__wrap" }, xw = ["viewBox"], vw = ["x"], yw = ["d"], Ew = ["transform", "onMouseenter"], Hw = ["width", "height", "fill"], Iw = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, _w = {
  key: 4,
  class: "brv-shots"
}, Lw = { class: "brv-shots__title" }, Sw = { class: "brv-suggest__hint" }, kw = { class: "brv-shots__strip" }, Tw = ["onClick"], Kw = ["src", "alt"], Dw = {
  key: 1,
  class: "brv-shots__ph"
}, Rw = ["open"], Ow = { class: "brv-ai__count" }, Mw = ["innerHTML"], Nw = {
  key: 6,
  class: "brv-suggest"
}, Pw = ["innerHTML"], Vw = ["disabled", "onClick"], Gw = { class: "brv-chat" }, Xw = { class: "brv-chat__who" }, Jw = ["innerHTML"], Ww = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, Yw = {
  key: 1,
  class: "brv-chat__compose"
}, jw = ["disabled"], Zw = { class: "brv-chat__btns" }, zw = ["disabled"], $w = ["disabled"], qw = {
  key: 2,
  class: "brv-ai__hint"
}, A0 = {
  key: 2,
  class: "brv-section"
}, e0 = {
  key: 0,
  class: "brv-field"
}, t0 = ["innerHTML"], s0 = {
  key: 1,
  class: "brv-field"
}, r0 = ["innerHTML"], n0 = {
  key: 2,
  class: "brv-field"
}, o0 = ["innerHTML"], i0 = {
  key: 3,
  class: "brv-section"
}, l0 = {
  key: 0,
  class: "brv-row"
}, a0 = { class: "brv-selectable" }, c0 = {
  key: 1,
  class: "brv-row"
}, f0 = { class: "brv-selectable" }, u0 = {
  key: 2,
  class: "brv-row"
}, d0 = { class: "brv-selectable" }, B0 = {
  key: 3,
  class: "brv-row"
}, g0 = { class: "brv-selectable" }, h0 = {
  key: 4,
  class: "brv-row"
}, p0 = { class: "brv-selectable" }, w0 = { class: "brv-section" }, Q0 = { class: "brv-label-row" }, C0 = { class: "brv-log-tabs" }, b0 = ["onClick"], U0 = { class: "brv-log-filters" }, F0 = { class: "brv-filter-chip brv-filter-error" }, m0 = { class: "brv-filter-chip brv-filter-warn" }, x0 = { class: "brv-filter-chip brv-filter-log" }, v0 = { class: "brv-log-list" }, y0 = ["onClick"], E0 = { class: "brv-log-time brv-selectable" }, H0 = { class: "brv-log-lv" }, I0 = {
  key: 0,
  class: "brv-log-empty"
}, _0 = { class: "brv-log-filters" }, L0 = { class: "brv-filter-chip brv-filter-error" }, S0 = { class: "brv-filter-chip brv-filter-warn" }, k0 = { class: "brv-filter-chip brv-filter-log" }, T0 = { class: "brv-log-list" }, K0 = ["onClick"], D0 = { class: "brv-log-time brv-selectable" }, R0 = { class: "brv-log-lv" }, O0 = { class: "brv-log-logger brv-selectable" }, M0 = {
  key: 0,
  class: "brv-log-empty"
}, N0 = { class: "brv-log-filters" }, P0 = { class: "brv-filter-chip brv-filter-error" }, V0 = { class: "brv-filter-chip brv-filter-log" }, G0 = { class: "brv-log-list" }, X0 = ["onClick"], J0 = { class: "brv-net-method brv-selectable" }, W0 = { class: "brv-net-dur brv-selectable" }, Y0 = { class: "brv-log-time brv-selectable" }, j0 = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Z0 = { key: 0 }, z0 = { key: 1 }, $0 = { key: 2 }, q0 = {
  key: 3,
  class: "brv-log--error"
}, AQ = {
  key: 0,
  class: "brv-log-empty"
}, eQ = {
  key: 3,
  class: "brv-log-list"
}, tQ = ["onClick"], sQ = { class: "brv-log-time brv-selectable" }, rQ = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, nQ = {
  key: 0,
  class: "brv-log-empty"
};
function oQ(e, A, t, s, r, n) {
  var o, i, l, c, f;
  return p(), w("div", Bp, [
    r.isOpen ? (p(), w("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: A[23] || (A[23] = (a) => r.backdropPressed = a.target === a.currentTarget),
      onClick: A[24] || (A[24] = es((a) => r.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", gp, [
        (p(), $o(Vu("style"), {
          textContent: b(r.fmtCss)
        }, null, 8, ["textContent"])),
        u("div", hp, [
          u("span", pp, [
            A[25] || (A[25] = V(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), w("span", wp, b(n.hotkey), 1)) : y("", !0)
          ]),
          n.viewProjects.length > 1 ? (p(), w("span", Qp, [
            (p(!0), w(M, null, q(n.viewProjects, (a) => (p(), w("button", {
              key: a.key,
              class: Y({ "brv-projects__on": r.project === a.key }),
              onClick: (d) => n.switchProject(a.key)
            }, b(a.label), 11, Cp))), 128))
          ])) : y("", !0),
          u("button", {
            class: "brv-close",
            onClick: A[0] || (A[0] = (...a) => n.close && n.close(...a))
          }, "✕")
        ]),
        r.notice ? (p(), w("div", {
          key: 0,
          class: Y(["brv-notice", `brv-notice--${r.notice.type}`])
        }, [
          u("b", null, b(r.notice.title), 1),
          V(" " + b(r.notice.message), 1)
        ], 2)) : y("", !0),
        u("div", bp, [
          r.selected ? (p(), w(M, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: A[1] || (A[1] = (a) => r.selected = null)
            }, "← 목록"),
            r.detailLoading ? (p(), w("div", _p, [...A[27] || (A[27] = [
              u("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.detail ? (p(), w(M, { key: 1 }, [
              r.detail.screenshot ? (p(), w("div", Lp, [
                A[28] || (A[28] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: r.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, Sp)
              ])) : y("", !0),
              r.bigShot ? (p(), w("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: A[2] || (A[2] = (a) => r.bigShot = null)
              }, [
                u("img", {
                  src: r.shotUrls[r.bigShot.file],
                  alt: r.bigShot.name
                }, null, 8, kp),
                u("div", Tp, [
                  V(b(r.bigShot.name) + " · " + b(r.bigShot.label) + " ", 1),
                  A[29] || (A[29] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : y("", !0),
              u("div", Kp, [
                A[34] || (A[34] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", Dp, [
                  A[30] || (A[30] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(o = r.detail.severity) == null ? void 0 : o.toLowerCase()}`])
                  }, b(r.detail.severity), 3)
                ]),
                u("div", Rp, [
                  A[31] || (A[31] = u("span", null, "상태", -1)),
                  u("span", Op, [
                    r.statusSaving ? (p(), w("span", Mp)) : y("", !0),
                    u("select", {
                      class: Y(["brv-status-select", `brv-st--${(r.detail.status || "OPEN").toLowerCase()}`]),
                      value: r.detail.status || "OPEN",
                      disabled: r.statusSaving,
                      onChange: A[3] || (A[3] = (a) => n.changeStatus(a.target.value))
                    }, [
                      (p(!0), w(M, null, q(r.STATUSES, (a) => (p(), w("option", {
                        key: a.value,
                        value: a.value
                      }, b(a.label), 9, Pp))), 128))
                    ], 42, Np)
                  ])
                ]),
                u("div", Vp, [
                  A[32] || (A[32] = u("span", null, "보고자", -1)),
                  u("span", Gp, b(r.detail.reporter), 1)
                ]),
                u("div", Xp, [
                  A[33] || (A[33] = u("span", null, "일시", -1)),
                  u("span", Jp, b(n.formatDate(r.detail.insertDate)), 1)
                ])
              ]),
              u("div", Wp, [
                u("div", Yp, [
                  A[36] || (A[36] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: Y(["brv-fix", `brv-fix--${(r.detail.fixStatus || "none").toLowerCase()}`])
                  }, b(n.fixLabel(r.detail.fixStatus)), 3),
                  r.fixBusy || n.fixInProgress ? (p(), w("span", jp)) : y("", !0),
                  n.fixInProgress && n.fixElapsed ? (p(), w("span", Zp, b(n.fixElapsed), 1)) : n.deployPending ? (p(), w("span", zp, [...A[35] || (A[35] = [
                    u("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    V(" 배포 중", -1)
                  ])])) : y("", !0),
                  r.detail.fixStatus && n.fixable ? (p(), w("span", $p, [
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy,
                      onClick: A[4] || (A[4] = (...a) => n.refreshDetail && n.refreshDetail(...a)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, qp),
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[5] || (A[5] = (...a) => n.requestFix && n.requestFix(...a)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, Aw),
                    r.detail.fixStatus === "MERGED" && r.detail.fixMergeSha ? (p(), w("button", {
                      key: 0,
                      class: "brv-ai__tool brv-ai__tool--danger",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[6] || (A[6] = (...a) => n.revertFix && n.revertFix(...a)),
                      title: "병합된 이 수정을 되돌리는 브랜치·PR 을 만듭니다 (자동 병합 프로젝트면 병합까지)"
                    }, "되돌리기", 8, ew)) : y("", !0)
                  ])) : y("", !0)
                ]),
                !r.detail.fixStatus && r.detail.tool ? (p(), w("div", tw, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !r.detail.fixStatus && !n.fixable ? (p(), w("div", sw, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : r.detail.fixStatus ? (p(), w(M, { key: 3 }, [
                  r.detail.fixPrUrl || r.detail.fixBranch ? (p(), w("div", ow, [
                    r.detail.fixPrUrl ? (p(), w("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: r.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + b(n.prNumber), 9, iw)) : y("", !0),
                    r.detail.fixRevertPrUrl ? (p(), w("a", {
                      key: 1,
                      class: "brv-link",
                      href: r.detail.fixRevertPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "되돌리기 PR", 8, lw)) : y("", !0),
                    r.detail.fixBranch ? (p(), w("span", {
                      key: 2,
                      class: "brv-ai__branch brv-selectable",
                      title: r.detail.fixStatus === "READY" ? r.detail.fixPushed ? "AI 수정본이 담긴 작업 브랜치 - 원격 저장소에 같은 이름으로 올라가 있습니다 (PR 은 아직 없음)" : "AI 수정본이 담긴 작업 브랜치 - 아직 키트 서버 안에만 있고 원격에는 없습니다 (콘솔에서 내보내기)" : "AI 수정본이 담긴 작업 브랜치 (기준 브랜치는 건드리지 않음)"
                    }, b(r.detail.fixBranch), 9, aw)) : y("", !0),
                    r.detail.fixStatus === "READY" ? (p(), w("span", cw, b(r.detail.fixPushed ? "원격에 브랜치만 있음 · PR 없음" : "키트 서버 안에만 있음 · 원격에 없음"), 1)) : y("", !0),
                    r.detail.fixVersion != null ? (p(), w(M, { key: 4 }, [
                      u("span", fw, "v" + b(r.detail.fixVersion), 1),
                      r.detail.preview ? (p(), w(M, { key: 0 }, [
                        r.detail.preview.status === "UP" && r.detail.preview.url ? (p(), w("a", {
                          key: 0,
                          class: "brv-link",
                          href: r.detail.preview.url,
                          target: "_blank",
                          rel: "noopener",
                          title: "이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)"
                        }, "미리보기 열기 ↗", 8, uw)) : n.previewPending ? (p(), w("span", dw, [
                          A[38] || (A[38] = u("span", { class: "brv-spin brv-spin--sm" }, null, -1)),
                          V(" 미리보기 준비 중(" + b(n.previewLabel) + ")", 1)
                        ])) : r.detail.preview.canPreview && n.fixable ? (p(), w("button", {
                          key: 2,
                          class: "brv-ai__tool",
                          disabled: r.fixBusy,
                          onClick: A[8] || (A[8] = (...a) => n.startPreview && n.startPreview(...a)),
                          title: "이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)"
                        }, "미리보기 띄우기", 8, Bw)) : y("", !0),
                        r.detail.preview.status === "FAILED" ? (p(), w("span", {
                          key: 3,
                          class: "brv-ai__hint",
                          title: r.detail.preview.error || ""
                        }, "미리보기 실패", 8, gw)) : y("", !0)
                      ], 64)) : y("", !0)
                    ], 64)) : y("", !0)
                  ])) : y("", !0),
                  r.detail.fixSummary ? (p(), w("div", {
                    key: 1,
                    class: "brv-ai__summary brv-selectable",
                    innerHTML: n.md(r.detail.fixSummary)
                  }, null, 8, hw)) : y("", !0),
                  r.detail.fixReport || n.fixFiles.length ? (p(), w("details", pw, [
                    A[40] || (A[40] = u("summary", null, [
                      V("수정 결과 "),
                      u("span", { class: "brv-suggest__hint" }, "원인 · 고친 내용 · 검증 · 확인이 필요한 점")
                    ], -1)),
                    n.fixRepro ? (p(), w("div", {
                      key: 0,
                      class: Y(["brv-result__repro", n.fixRepro.passed ? "ok" : "bad"])
                    }, [
                      A[39] || (A[39] = u("b", null, "재현 검증", -1)),
                      V(" " + b(n.fixRepro.passed ? "✓ 통과" : "✗ 실패") + " · " + b(n.fixRepro.rounds) + "회", 1),
                      n.fixRepro.note ? (p(), w("span", ww, " · " + b(n.fixRepro.note), 1)) : y("", !0),
                      (i = n.fixRepro.evidence) != null && i.length ? (p(), w("ul", Qw, [
                        (p(!0), w(M, null, q(n.fixRepro.evidence.slice(0, 6), (a, d) => (p(), w("li", { key: d }, [
                          u("code", null, b(a), 1)
                        ]))), 128))
                      ])) : y("", !0)
                    ], 2)) : y("", !0),
                    r.detail.fixReport ? (p(), w("div", {
                      key: 1,
                      class: "brv-result__body brv-selectable",
                      innerHTML: n.md(r.detail.fixReport)
                    }, null, 8, Cw)) : y("", !0),
                    n.fixFiles.length ? (p(), w("div", bw, [
                      u("span", Uw, "바뀐 파일 (" + b(n.fixFiles.length) + ")", 1),
                      u("ul", null, [
                        (p(!0), w(M, null, q(n.fixFiles, (a) => (p(), w("li", { key: a }, [
                          u("code", null, b(a), 1)
                        ]))), 128))
                      ])
                    ])) : y("", !0)
                  ])) : y("", !0),
                  n.kgLayout ? (p(), w("details", Fw, [
                    A[41] || (A[41] = u("summary", null, [
                      V("관련 기능·파일 "),
                      u("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    u("div", mw, [
                      (p(), w("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: Ss({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (p(!0), w(M, null, q(n.kgLayout.cols, (a) => (p(), w("text", {
                          key: "c" + a.layer,
                          x: a.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, b(a.title), 9, vw))), 128)),
                        (p(!0), w(M, null, q(n.kgLayout.edges, (a, d) => (p(), w("path", {
                          key: "e" + d,
                          d: a.d,
                          class: Y(["brv-kg__edge", "brv-kg__edge--" + a.rel, { "brv-kg__edge--dim": r.kgHover && a.from !== r.kgHover && a.to !== r.kgHover }])
                        }, null, 10, yw))), 128)),
                        (p(!0), w(M, null, q(n.kgLayout.nodes, (a) => (p(), w("g", {
                          key: a.id,
                          transform: `translate(${a.x},${a.y})`,
                          class: Y(["brv-kg__node", { "brv-kg__node--hit": a.hit, "brv-kg__node--dim": r.kgHover && r.kgHover !== a.id && !n.kgNbr(a.id) }]),
                          onMouseenter: (d) => r.kgHover = a.id,
                          onMouseleave: A[9] || (A[9] = (d) => r.kgHover = null)
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
                          }, null, 8, Hw),
                          u("text", Iw, b(a.short), 1)
                        ], 42, Ew))), 128))
                      ], 12, xw))
                    ])
                  ])) : y("", !0),
                  n.fixShots.length ? (p(), w("div", _w, [
                    u("div", Lw, [
                      A[42] || (A[42] = V("화면 확인 ", -1)),
                      u("span", Sw, b(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", kw, [
                      (p(!0), w(M, null, q(n.fixShots, (a) => (p(), w("figure", {
                        key: a.file,
                        class: "brv-shots__item",
                        onClick: (d) => n.openShot(a)
                      }, [
                        r.shotUrls[a.file] ? (p(), w("img", {
                          key: 0,
                          src: r.shotUrls[a.file],
                          alt: a.name
                        }, null, 8, Kw)) : (p(), w("div", Dw, "…")),
                        u("figcaption", null, b(a.name.replace(/\.png$/i, "")), 1)
                      ], 8, Tw))), 128))
                    ])
                  ])) : y("", !0),
                  r.detail.fixLog ? (p(), w("details", {
                    key: 5,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      A[43] || (A[43] = V("진행 로그 ", -1)),
                      u("span", Ow, b(n.logLineCount) + "줄", 1)
                    ]),
                    u("div", {
                      ref: "fixLogPre",
                      class: "brv-selectable brv-logbox",
                      innerHTML: n.logH(r.detail.fixLog)
                    }, null, 8, Mw)
                  ], 8, Rw)) : y("", !0),
                  n.fixSuggestions.length ? (p(), w("div", Nw, [
                    A[44] || (A[44] = u("div", { class: "brv-suggest__title" }, [
                      V("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (p(!0), w(M, null, q(n.fixSuggestions, (a, d) => (p(), w("div", {
                      key: d,
                      class: "brv-suggest__item"
                    }, [
                      u("span", {
                        class: "brv-suggest__text brv-selectable",
                        innerHTML: n.md(a)
                      }, null, 8, Pw),
                      n.fixable ? (p(), w("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: r.fixBusy || n.fixInProgress,
                        onClick: (g) => n.runSuggestion(a)
                      }, "실행", 8, Vw)) : y("", !0)
                    ]))), 128))
                  ])) : y("", !0),
                  u("div", Gw, [
                    (p(!0), w(M, null, q(n.fixChat, (a, d) => (p(), w("div", {
                      key: d,
                      class: Y(["brv-chat__msg", `brv-chat__msg--${a.role}`])
                    }, [
                      u("span", Xw, b(a.role === "user" ? "나" : "AI"), 1),
                      u("div", {
                        class: "brv-chat__text brv-selectable",
                        innerHTML: n.md(a.text)
                      }, null, 8, Jw)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), w("div", Ww, [...A[45] || (A[45] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        V(" 생각 중…")
                      ], -1)
                    ])])) : y("", !0),
                    n.fixable ? (p(), w("div", Yw, [
                      mA(u("textarea", {
                        "onUpdate:modelValue": A[10] || (A[10] = (a) => r.chatInput = a),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: r.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          A[11] || (A[11] = zi(es((a) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          A[12] || (A[12] = zi(es((a) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, jw), [
                        [hr, r.chatInput]
                      ]),
                      u("div", Zw, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[13] || (A[13] = (a) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, zw),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[14] || (A[14] = (a) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, $w)
                      ])
                    ])) : y("", !0),
                    n.fixable ? (p(), w("div", qw, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : y("", !0)
                  ])
                ], 64)) : (p(), w("div", rw, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: r.fixBusy,
                    onClick: A[7] || (A[7] = (...a) => n.requestFix && n.requestFix(...a))
                  }, "AI 에게 수정 요청", 8, nw),
                  A[37] || (A[37] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              r.detail.problem || r.detail.reproSteps || r.detail.expectedResult ? (p(), w("div", A0, [
                A[49] || (A[49] = u("div", { class: "brv-label" }, "내용", -1)),
                r.detail.problem ? (p(), w("div", e0, [
                  A[46] || (A[46] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.problem)
                  }, null, 8, t0)
                ])) : y("", !0),
                r.detail.reproSteps ? (p(), w("div", s0, [
                  A[47] || (A[47] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.reproSteps)
                  }, null, 8, r0)
                ])) : y("", !0),
                r.detail.expectedResult ? (p(), w("div", n0, [
                  A[48] || (A[48] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.expectedResult)
                  }, null, 8, o0)
                ])) : y("", !0)
              ])) : y("", !0),
              n.parsedContext ? (p(), w("div", i0, [
                A[55] || (A[55] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), w("div", l0, [
                  A[50] || (A[50] = u("span", null, "카메라", -1)),
                  u("span", a0, b(n.parsedContext.camera.longitude) + "°, " + b(n.parsedContext.camera.latitude) + "° · 고도 " + b(n.parsedContext.camera.height) + "m · H" + b(n.parsedContext.camera.heading) + "° P" + b(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : y("", !0),
                (l = n.parsedContext.menus) != null && l.header ? (p(), w("div", c0, [
                  A[51] || (A[51] = u("span", null, "상단 탭", -1)),
                  u("span", f0, b(n.parsedContext.menus.header), 1)
                ])) : y("", !0),
                n.parsedContext.activeData ? (p(), w("div", u0, [
                  A[52] || (A[52] = u("span", null, "데이터셋", -1)),
                  u("span", d0, b(((c = n.parsedContext.activeData.datasets) == null ? void 0 : c.map((a) => a._displayName).join(", ")) || "없음"), 1)
                ])) : y("", !0),
                (f = n.parsedContext.activeData) != null && f.terrain ? (p(), w("div", B0, [
                  A[53] || (A[53] = u("span", null, "지형", -1)),
                  u("span", g0, b(n.parsedContext.activeData.terrain), 1)
                ])) : y("", !0),
                n.parsedContext.datetime ? (p(), w("div", h0, [
                  A[54] || (A[54] = u("span", null, "발생 시각", -1)),
                  u("span", p0, b(n.parsedContext.datetime), 1)
                ])) : y("", !0)
              ])) : y("", !0),
              u("div", w0, [
                u("div", Q0, [
                  A[56] || (A[56] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", C0, [
                    (p(!0), w(M, null, q(n.logTabs, (a) => (p(), w("button", {
                      key: a.id,
                      class: Y(["brv-log-tab", { active: r.logTab === a.id }]),
                      onClick: (d) => r.logTab = a.id
                    }, [
                      V(b(a.label) + " ", 1),
                      a.count ? (p(), w("span", {
                        key: 0,
                        class: Y(["brv-log-tab-count", a.countClass])
                      }, b(a.count), 3)) : y("", !0)
                    ], 10, b0))), 128))
                  ])
                ]),
                r.logTab === "front" ? (p(), w(M, { key: 0 }, [
                  u("div", U0, [
                    u("label", F0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[15] || (A[15] = (a) => r.showFE.error = a)
                      }, null, 512), [
                        [DA, r.showFE.error]
                      ]),
                      V(" 오류 (" + b(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", m0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[16] || (A[16] = (a) => r.showFE.warn = a)
                      }, null, 512), [
                        [DA, r.showFE.warn]
                      ]),
                      V(" 경고 (" + b(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", x0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[17] || (A[17] = (a) => r.showFE.log = a)
                      }, null, 512), [
                        [DA, r.showFE.log]
                      ]),
                      V(" 로그 (" + b(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", v0, [
                    (p(!0), w(M, null, q(n.filteredFrontLogs, (a, d) => {
                      var g;
                      return p(), w("div", {
                        key: d,
                        class: Y(["brv-log-item", `brv-log--${a.level}`]),
                        onClick: (Q) => n.toggleExpand("f" + d)
                      }, [
                        u("span", E0, b((g = a.time) == null ? void 0 : g.slice(11, 23)), 1),
                        u("span", H0, b(a.level), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("f" + d) }])
                        }, b(a.message), 3)
                      ], 10, y0);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), w("div", I0, "표시할 로그 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "back" ? (p(), w(M, { key: 1 }, [
                  u("div", _0, [
                    u("label", L0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[18] || (A[18] = (a) => r.showBE.error = a)
                      }, null, 512), [
                        [DA, r.showBE.error]
                      ]),
                      V(" ERROR (" + b(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", S0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[19] || (A[19] = (a) => r.showBE.warn = a)
                      }, null, 512), [
                        [DA, r.showBE.warn]
                      ]),
                      V(" WARN (" + b(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", k0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[20] || (A[20] = (a) => r.showBE.info = a)
                      }, null, 512), [
                        [DA, r.showBE.info]
                      ]),
                      V(" INFO (" + b(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", T0, [
                    (p(!0), w(M, null, q(n.filteredBackLogs, (a, d) => {
                      var g, Q;
                      return p(), w("div", {
                        key: d,
                        class: Y(["brv-log-item", `brv-log--${(g = a.level) == null ? void 0 : g.toLowerCase()}`]),
                        onClick: (U) => n.toggleExpand("b" + d)
                      }, [
                        u("span", D0, b((Q = a.time) == null ? void 0 : Q.slice(11, 23)), 1),
                        u("span", R0, b(a.level), 1),
                        u("span", O0, b(n.shortLogger(a.logger)), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("b" + d) }])
                        }, b(a.message), 3)
                      ], 10, K0);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), w("div", M0, "표시할 로그 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "net" ? (p(), w(M, { key: 2 }, [
                  u("div", N0, [
                    u("label", P0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[21] || (A[21] = (a) => r.showNet.error = a)
                      }, null, 512), [
                        [DA, r.showNet.error]
                      ]),
                      V(" 에러 (" + b(n.networkLogs.filter((a) => a.error || a.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", V0, [
                      mA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[22] || (A[22] = (a) => r.showNet.ok = a)
                      }, null, 512), [
                        [DA, r.showNet.ok]
                      ]),
                      V(" 성공 (" + b(n.networkLogs.filter((a) => !a.error && a.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", G0, [
                    (p(!0), w(M, null, q(n.filteredNetLogs, (a, d) => {
                      var g;
                      return p(), w("div", {
                        key: d,
                        class: Y(["brv-net-item", n.netClass(a)]),
                        onClick: (Q) => n.toggleExpand("n" + d)
                      }, [
                        u("span", {
                          class: Y(["brv-net-status", n.statusClass(a.status)])
                        }, b(a.status || "ERR"), 3),
                        u("span", J0, b(a.method), 1),
                        u("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("n" + d) }])
                        }, b(a.url), 3),
                        u("span", W0, b(a.duration) + "ms", 1),
                        u("span", Y0, b((g = a.time) == null ? void 0 : g.slice(11, 19)), 1)
                      ], 10, X0);
                    }), 128)),
                    (p(!0), w(M, null, q(n.filteredNetLogs, (a, d) => (p(), w(M, {
                      key: "d" + d
                    }, [
                      r.expanded.has("n" + d) ? (p(), w("div", j0, [
                        a.params ? (p(), w("div", Z0, [
                          A[57] || (A[57] = u("b", null, "Params:", -1)),
                          V(" " + b(a.params), 1)
                        ])) : y("", !0),
                        a.requestBody ? (p(), w("div", z0, [
                          A[58] || (A[58] = u("b", null, "Request:", -1)),
                          V(" " + b(a.requestBody), 1)
                        ])) : y("", !0),
                        a.responseBody ? (p(), w("div", $0, [
                          A[59] || (A[59] = u("b", null, "Response:", -1)),
                          V(" " + b(a.responseBody), 1)
                        ])) : y("", !0),
                        a.error ? (p(), w("div", q0, [
                          A[60] || (A[60] = u("b", null, "Error:", -1)),
                          V(" " + b(a.error), 1)
                        ])) : y("", !0)
                      ])) : y("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), w("div", AQ, "표시할 요청 없음")) : y("", !0)
                  ])
                ], 64)) : y("", !0),
                r.logTab === "mutation" ? (p(), w("div", eQ, [
                  (p(!0), w(M, null, q(n.parsedMutationLog, (a, d) => (p(), w("div", {
                    key: d,
                    class: "brv-log-item",
                    onClick: (g) => n.toggleExpand("m" + d)
                  }, [
                    u("span", sQ, b(a.time), 1),
                    u("span", {
                      class: Y(["brv-log-msg brv-mutation brv-selectable", { expanded: r.expanded.has("m" + d) }])
                    }, b(a.type), 3),
                    a.payload !== null ? (p(), w("span", rQ, b(n.formatPayload(a.payload)), 1)) : y("", !0)
                  ], 8, tQ))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), w("div", nQ, "기록된 mutation 없음")) : y("", !0)
                ])) : y("", !0)
              ])
            ], 64)) : y("", !0)
          ], 64)) : (p(), w(M, { key: 0 }, [
            r.loading ? (p(), w("div", Up, [...A[26] || (A[26] = [
              u("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.list.length === 0 ? (p(), w("div", Fp, "저장된 리포트가 없습니다.")) : (p(), w("div", mp, [
              (p(!0), w(M, null, q(r.list, (a) => {
                var d;
                return p(), w("div", {
                  key: a.bugReportId,
                  class: "brv-item",
                  onClick: (g) => n.openDetail(a.bugReportId)
                }, [
                  u("span", {
                    class: Y(["brv-badge", `brv-sev--${(d = a.severity) == null ? void 0 : d.toLowerCase()}`])
                  }, b(a.severity), 3),
                  u("span", {
                    class: Y(["brv-status", `brv-st--${(a.status || "OPEN").toLowerCase()}`])
                  }, b(n.statusLabel(a.status)), 3),
                  a.tool ? (p(), w("span", vp, "도구")) : y("", !0),
                  u("span", yp, b(a.problem || "(내용 없음)"), 1),
                  a.fixStatus ? (p(), w("span", {
                    key: 1,
                    class: Y(["brv-fix", `brv-fix--${a.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(a.fixStatus)
                  }, b(n.fixShort(a.fixStatus)), 11, Ep)) : y("", !0),
                  u("span", Hp, b(a.reporter) + " · " + b(n.formatDate(a.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: es((g) => n.deleteReport(a.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, Ip)
                ], 8, xp);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : y("", !0)
  ]);
}
const iQ = /* @__PURE__ */ Ai(dp, [["render", oQ], ["styles", [cp]], ["__scopeId", "data-v-c4f154f5"]]);
function In({ endpoint: e, project: A, apiKey: t, user: s, adminKey: r }) {
  const n = e ? `${String(e).replace(/\/+$/, "")}/p/${A}` : "", o = !!n;
  async function i(l, c, f, { query: a, blob: d } = {}) {
    if (!o) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const g = { Accept: "application/json" };
    f !== void 0 && (g["Content-Type"] = "application/json"), t && (g["X-Devloop-Key"] = t), r && (g["X-Devloop-Admin"] = r);
    const Q = typeof s == "function" ? s() : s;
    Q && (g["X-Devloop-User"] = String(Q));
    const U = a ? "?" + new URLSearchParams(a).toString() : "", m = await fetch(n + c + U, { method: l, headers: g, body: f === void 0 ? void 0 : JSON.stringify(f) });
    if (d) {
      if (!m.ok) throw Object.assign(new Error(`HTTP ${m.status}`), { status: m.status });
      return URL.createObjectURL(await m.blob());
    }
    if (m.status === 204) return null;
    const _ = await m.text();
    let v = null;
    try {
      v = _ ? JSON.parse(_) : null;
    } catch {
    }
    if (!m.ok) {
      const h = new Error((v == null ? void 0 : v.message) || `HTTP ${m.status}`);
      throw h.status = m.status, h;
    }
    return (v == null ? void 0 : v.content) ?? v;
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
    fixChat: (l, c, f) => i("POST", `/reports/${l}/fix-chat`, { message: c, mode: f }),
    fixSync: (l) => i("POST", `/reports/${l}/fix-sync`),
    previewStart: (l) => i("POST", `/reports/${l}/preview`),
    previewStop: (l) => i("DELETE", `/reports/${l}/preview`),
    revert: (l, c) => i("POST", `/reports/${l}/revert`, { reason: c }),
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
class kA {
  constructor(A, t, s, r) {
    this.left = A, this.top = t, this.width = s, this.height = r;
  }
  add(A, t, s, r) {
    return new kA(this.left + A, this.top + t, this.width + s, this.height + r);
  }
  static fromClientRect(A, t) {
    return new kA(t.left + A.windowBounds.left, t.top + A.windowBounds.top, t.width, t.height);
  }
  static fromDOMRectList(A, t) {
    const s = Array.from(t);
    let r = s.find((n) => n.width !== 0);
    return r || (r = s.find((n) => n.height !== 0)), !r && s.length > 0 && (r = s[0]), r ? new kA(r.left + A.windowBounds.left, r.top + A.windowBounds.top, r.width, r.height) : kA.EMPTY;
  }
}
kA.EMPTY = new kA(0, 0, 0, 0);
const An = (e, A) => kA.fromClientRect(e, A.getBoundingClientRect()), lQ = (e) => {
  const A = e.body, t = e.documentElement;
  if (!A || !t)
    throw new Error("Unable to get document size");
  const s = Math.max(Math.max(A.scrollWidth, t.scrollWidth), Math.max(A.offsetWidth, t.offsetWidth), Math.max(A.clientWidth, t.clientWidth)), r = Math.max(Math.max(A.scrollHeight, t.scrollHeight), Math.max(A.offsetHeight, t.offsetHeight), Math.max(A.clientHeight, t.clientHeight));
  return new kA(0, 0, s, r);
};
var en = function(e) {
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
}, rl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", aQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Js = 0; Js < rl.length; Js++)
  aQ[rl.charCodeAt(Js)] = Js;
var nl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ws = 0; Ws < nl.length; Ws++)
  ts[nl.charCodeAt(Ws)] = Ws;
var cQ = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, l;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), f = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = ts[e.charCodeAt(s)], o = ts[e.charCodeAt(s + 1)], i = ts[e.charCodeAt(s + 2)], l = ts[e.charCodeAt(s + 3)], f[r++] = n << 2 | o >> 4, f[r++] = (o & 15) << 4 | i >> 2, f[r++] = (i & 3) << 6 | l & 63;
  return c;
}, fQ = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, uQ = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, gt = 5, ti = 11, _n = 2, dQ = ti - gt, Uc = 65536 >> gt, BQ = 1 << gt, Ln = BQ - 1, gQ = 1024 >> gt, hQ = Uc + gQ, pQ = hQ, wQ = 32, QQ = pQ + wQ, CQ = 65536 >> ti, bQ = 1 << dQ, UQ = bQ - 1, ol = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, FQ = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, mQ = function(e, A) {
  var t = cQ(e), s = Array.isArray(t) ? uQ(t) : new Uint32Array(t), r = Array.isArray(t) ? fQ(t) : new Uint16Array(t), n = 24, o = ol(r, n / 2, s[4] / 2), i = s[5] === 2 ? ol(r, (n + s[4]) / 2) : FQ(s, Math.ceil((n + s[4]) / 4));
  return new xQ(s[0], s[1], s[2], s[3], o, i);
}, xQ = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> gt], t = (t << _n) + (A & Ln), this.data[t];
        if (A <= 65535)
          return t = this.index[Uc + (A - 55296 >> gt)], t = (t << _n) + (A & Ln), this.data[t];
        if (A < this.highStart)
          return t = QQ - CQ + (A >> ti), t = this.index[t], t += A >> gt & UQ, t = this.index[t], t = (t << _n) + (A & Ln), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), il = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", vQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Ys = 0; Ys < il.length; Ys++)
  vQ[il.charCodeAt(Ys)] = Ys;
var yQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ll = 50, EQ = 1, Fc = 2, mc = 3, HQ = 4, IQ = 5, al = 7, xc = 8, cl = 9, Xe = 10, co = 11, fl = 12, fo = 13, _Q = 14, ss = 15, uo = 16, js = 17, Yt = 18, LQ = 19, ul = 20, Bo = 21, jt = 22, Sn = 23, Ct = 24, GA = 25, rs = 26, ns = 27, bt = 28, SQ = 29, lt = 30, kQ = 31, Zs = 32, zs = 33, go = 34, ho = 35, po = 36, Hs = 37, wo = 38, wr = 39, Qr = 40, kn = 41, vc = 42, TQ = 43, KQ = [9001, 65288], yc = "!", Z = "×", $s = "÷", Qo = mQ(yQ), xe = [lt, po], Co = [EQ, Fc, mc, IQ], Ec = [Xe, xc], dl = [ns, rs], DQ = Co.concat(Ec), Bl = [wo, wr, Qr, go, ho], RQ = [ss, fo], OQ = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], s = [], r = [];
  return e.forEach(function(n, o) {
    var i = Qo.get(n);
    if (i > ll ? (r.push(!0), i -= ll) : r.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return s.push(o), t.push(uo);
    if (i === HQ || i === co) {
      if (o === 0)
        return s.push(o), t.push(lt);
      var l = t[o - 1];
      return DQ.indexOf(l) === -1 ? (s.push(s[o - 1]), t.push(l)) : (s.push(o), t.push(lt));
    }
    if (s.push(o), i === kQ)
      return t.push(A === "strict" ? Bo : Hs);
    if (i === vc || i === SQ)
      return t.push(lt);
    if (i === TQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(Hs) : t.push(lt);
    t.push(i);
  }), [s, t, r];
}, Tn = function(e, A, t, s) {
  var r = s[t];
  if (Array.isArray(e) ? e.indexOf(r) !== -1 : e === r)
    for (var n = t; n <= s.length; ) {
      n++;
      var o = s[n];
      if (o === A)
        return !0;
      if (o !== Xe)
        break;
    }
  if (r === Xe)
    for (var n = t; n > 0; ) {
      n--;
      var i = s[n];
      if (Array.isArray(e) ? e.indexOf(i) !== -1 : e === i)
        for (var l = t; l <= s.length; ) {
          l++;
          var o = s[l];
          if (o === A)
            return !0;
          if (o !== Xe)
            break;
        }
      if (i !== Xe)
        break;
    }
  return !1;
}, gl = function(e, A) {
  for (var t = e; t >= 0; ) {
    var s = A[t];
    if (s === Xe)
      t--;
    else
      return s;
  }
  return 0;
}, MQ = function(e, A, t, s, r) {
  if (t[s] === 0)
    return Z;
  var n = s - 1;
  if (Array.isArray(r) && r[n] === !0)
    return Z;
  var o = n - 1, i = n + 1, l = A[n], c = o >= 0 ? A[o] : 0, f = A[i];
  if (l === Fc && f === mc)
    return Z;
  if (Co.indexOf(l) !== -1)
    return yc;
  if (Co.indexOf(f) !== -1 || Ec.indexOf(f) !== -1)
    return Z;
  if (gl(n, A) === xc)
    return $s;
  if (Qo.get(e[n]) === co || (l === Zs || l === zs) && Qo.get(e[i]) === co || l === al || f === al || l === cl || [Xe, fo, ss].indexOf(l) === -1 && f === cl || [js, Yt, LQ, Ct, bt].indexOf(f) !== -1 || gl(n, A) === jt || Tn(Sn, jt, n, A) || Tn([js, Yt], Bo, n, A) || Tn(fl, fl, n, A))
    return Z;
  if (l === Xe)
    return $s;
  if (l === Sn || f === Sn)
    return Z;
  if (f === uo || l === uo)
    return $s;
  if ([fo, ss, Bo].indexOf(f) !== -1 || l === _Q || c === po && RQ.indexOf(l) !== -1 || l === bt && f === po || f === ul || xe.indexOf(f) !== -1 && l === GA || xe.indexOf(l) !== -1 && f === GA || l === ns && [Hs, Zs, zs].indexOf(f) !== -1 || [Hs, Zs, zs].indexOf(l) !== -1 && f === rs || xe.indexOf(l) !== -1 && dl.indexOf(f) !== -1 || dl.indexOf(l) !== -1 && xe.indexOf(f) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ns, rs].indexOf(l) !== -1 && (f === GA || [jt, ss].indexOf(f) !== -1 && A[i + 1] === GA) || // ( OP | HY ) × NU
  [jt, ss].indexOf(l) !== -1 && f === GA || // NU ×	(NU | SY | IS)
  l === GA && [GA, bt, Ct].indexOf(f) !== -1)
    return Z;
  if ([GA, bt, Ct, js, Yt].indexOf(f) !== -1)
    for (var a = n; a >= 0; ) {
      var d = A[a];
      if (d === GA)
        return Z;
      if ([bt, Ct].indexOf(d) !== -1)
        a--;
      else
        break;
    }
  if ([ns, rs].indexOf(f) !== -1)
    for (var a = [js, Yt].indexOf(l) !== -1 ? o : n; a >= 0; ) {
      var d = A[a];
      if (d === GA)
        return Z;
      if ([bt, Ct].indexOf(d) !== -1)
        a--;
      else
        break;
    }
  if (wo === l && [wo, wr, go, ho].indexOf(f) !== -1 || [wr, go].indexOf(l) !== -1 && [wr, Qr].indexOf(f) !== -1 || [Qr, ho].indexOf(l) !== -1 && f === Qr || Bl.indexOf(l) !== -1 && [ul, rs].indexOf(f) !== -1 || Bl.indexOf(f) !== -1 && l === ns || xe.indexOf(l) !== -1 && xe.indexOf(f) !== -1 || l === Ct && xe.indexOf(f) !== -1 || xe.concat(GA).indexOf(l) !== -1 && f === jt && KQ.indexOf(e[i]) === -1 || xe.concat(GA).indexOf(f) !== -1 && l === Yt)
    return Z;
  if (l === kn && f === kn) {
    for (var g = t[n], Q = 1; g > 0 && (g--, A[g] === kn); )
      Q++;
    if (Q % 2 !== 0)
      return Z;
  }
  return l === Zs && f === zs ? Z : $s;
}, NQ = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = OQ(e, A.lineBreak), s = t[0], r = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (r = r.map(function(i) {
    return [GA, lt, vc].indexOf(i) !== -1 ? Hs : i;
  }));
  var o = A.wordBreak === "keep-all" ? n.map(function(i, l) {
    return i && e[l] >= 19968 && e[l] <= 40959;
  }) : void 0;
  return [s, r, o];
}, PQ = (
  /** @class */
  function() {
    function e(A, t, s, r) {
      this.codePoints = A, this.required = t === yc, this.start = s, this.end = r;
    }
    return e.prototype.slice = function() {
      return QA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), VQ = function(e, A) {
  var t = en(e), s = NQ(t, A), r = s[0], n = s[1], o = s[2], i = t.length, l = 0, c = 0;
  return {
    next: function() {
      if (c >= i)
        return { done: !0, value: null };
      for (var f = Z; c < i && (f = MQ(t, n, r, ++c, o)) === Z; )
        ;
      if (f !== Z || c === i) {
        var a = new PQ(t, f, l, c);
        return l = c, { value: a, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const GQ = 1, XQ = 2, Mt = 4, hl = 8, Ir = 10, pl = 47, ps = 92, JQ = 9, WQ = 32, qs = 34, Zt = 61, YQ = 35, jQ = 36, ZQ = 37, Ar = 39, er = 40, zt = 41, zQ = 95, NA = 45, $Q = 33, qQ = 60, AC = 62, eC = 64, tC = 91, sC = 93, rC = 61, nC = 123, tr = 63, oC = 125, wl = 124, iC = 126, lC = 128, Ql = 65533, Kn = 42, ut = 43, aC = 44, cC = 58, fC = 59, Is = 46, uC = 0, dC = 8, BC = 11, gC = 14, hC = 31, pC = 127, ce = -1, Hc = 48, Ic = 97, _c = 101, wC = 102, QC = 117, CC = 122, Lc = 65, Sc = 69, kc = 70, bC = 85, UC = 90, _A = (e) => e >= Hc && e <= 57, FC = (e) => e >= 55296 && e <= 57343, Ut = (e) => _A(e) || e >= Lc && e <= kc || e >= Ic && e <= wC, mC = (e) => e >= Ic && e <= CC, xC = (e) => e >= Lc && e <= UC, vC = (e) => mC(e) || xC(e), yC = (e) => e >= lC, sr = (e) => e === Ir || e === JQ || e === WQ, _r = (e) => vC(e) || yC(e) || e === zQ, Cl = (e) => _r(e) || _A(e) || e === NA, EC = (e) => e >= uC && e <= dC || e === BC || e >= gC && e <= hC || e === pC, Ve = (e, A) => e !== ps ? !1 : A !== Ir, rr = (e, A, t) => e === NA ? _r(A) || Ve(A, t) : _r(e) ? !0 : !!(e === ps && Ve(e, A)), Dn = (e, A, t) => e === ut || e === NA ? _A(A) ? !0 : A === Is && _A(t) : _A(e === Is ? A : e), HC = (e) => {
  let A = 0, t = 1;
  (e[A] === ut || e[A] === NA) && (e[A] === NA && (t = -1), A++);
  const s = [];
  for (; _A(e[A]); )
    s.push(e[A++]);
  const r = s.length ? parseInt(QA(...s), 10) : 0;
  e[A] === Is && A++;
  const n = [];
  for (; _A(e[A]); )
    n.push(e[A++]);
  const o = n.length, i = o ? parseInt(QA(...n), 10) : 0;
  (e[A] === Sc || e[A] === _c) && A++;
  let l = 1;
  (e[A] === ut || e[A] === NA) && (e[A] === NA && (l = -1), A++);
  const c = [];
  for (; _A(e[A]); )
    c.push(e[A++]);
  const f = c.length ? parseInt(QA(...c), 10) : 0;
  return t * (r + i * Math.pow(10, -o)) * Math.pow(10, l * f);
}, IC = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, _C = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, LC = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, SC = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, kC = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, TC = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, KC = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, DC = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, RC = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, OC = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, MC = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, nr = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, NC = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, PC = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, VC = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, GC = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, XC = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, JC = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, WC = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, YC = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, bo = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class Tc {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(en(A));
  }
  read() {
    const A = [];
    let t = this.consumeToken();
    for (; t !== bo; )
      A.push(t), t = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case qs:
        return this.consumeStringToken(qs);
      case YQ:
        const t = this.peekCodePoint(0), s = this.peekCodePoint(1), r = this.peekCodePoint(2);
        if (Cl(t) || Ve(s, r)) {
          const g = rr(t, s, r) ? XQ : GQ;
          return { type: 5, value: this.consumeName(), flags: g };
        }
        break;
      case jQ:
        if (this.peekCodePoint(0) === Zt)
          return this.consumeCodePoint(), SC;
        break;
      case Ar:
        return this.consumeStringToken(Ar);
      case er:
        return IC;
      case zt:
        return _C;
      case Kn:
        if (this.peekCodePoint(0) === Zt)
          return this.consumeCodePoint(), MC;
        break;
      case ut:
        if (Dn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case aC:
        return LC;
      case NA:
        const n = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
        if (Dn(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (rr(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (o === NA && i === AC)
          return this.consumeCodePoint(), this.consumeCodePoint(), VC;
        break;
      case Is:
        if (Dn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case pl:
        if (this.peekCodePoint(0) === Kn)
          for (this.consumeCodePoint(); ; ) {
            let g = this.consumeCodePoint();
            if (g === Kn && (g = this.consumeCodePoint(), g === pl))
              return this.consumeToken();
            if (g === ce)
              return this.consumeToken();
          }
        break;
      case cC:
        return GC;
      case fC:
        return XC;
      case qQ:
        if (this.peekCodePoint(0) === $Q && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), PC;
        break;
      case eC:
        const l = this.peekCodePoint(0), c = this.peekCodePoint(1), f = this.peekCodePoint(2);
        if (rr(l, c, f))
          return { type: 7, value: this.consumeName() };
        break;
      case tC:
        return JC;
      case ps:
        if (Ve(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case sC:
        return WC;
      case rC:
        if (this.peekCodePoint(0) === Zt)
          return this.consumeCodePoint(), kC;
        break;
      case nC:
        return RC;
      case oC:
        return OC;
      case QC:
      case bC:
        const a = this.peekCodePoint(0), d = this.peekCodePoint(1);
        return a === ut && (Ut(d) || d === tr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case wl:
        if (this.peekCodePoint(0) === Zt)
          return this.consumeCodePoint(), KC;
        if (this.peekCodePoint(0) === wl)
          return this.consumeCodePoint(), TC;
        break;
      case iC:
        if (this.peekCodePoint(0) === Zt)
          return this.consumeCodePoint(), DC;
        break;
      case ce:
        return bo;
    }
    return sr(A) ? (this.consumeWhiteSpace(), YC) : _A(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : _r(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: QA(A) };
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
    for (; Ut(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    let s = !1;
    for (; t === tr && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), s = !0;
    if (s) {
      const n = parseInt(QA(...A.map((i) => i === tr ? Hc : i)), 16), o = parseInt(QA(...A.map((i) => i === tr ? kc : i)), 16);
      return { type: 30, start: n, end: o };
    }
    const r = parseInt(QA(...A), 16);
    if (this.peekCodePoint(0) === NA && Ut(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      const n = [];
      for (; Ut(t) && n.length < 6; )
        n.push(t), t = this.consumeCodePoint();
      const o = parseInt(QA(...n), 16);
      return { type: 30, start: r, end: o };
    } else
      return { type: 30, start: r, end: r };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === er ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === er ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce)
      return { type: 22, value: "" };
    const t = this.peekCodePoint(0);
    if (t === Ar || t === qs) {
      const s = this.consumeStringToken(this.consumeCodePoint());
      return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === zt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), nr);
    }
    for (; ; ) {
      const s = this.consumeCodePoint();
      if (s === ce || s === zt)
        return { type: 22, value: QA(...A) };
      if (sr(s))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === zt ? (this.consumeCodePoint(), { type: 22, value: QA(...A) }) : (this.consumeBadUrlRemnants(), nr);
      if (s === qs || s === Ar || s === er || EC(s))
        return this.consumeBadUrlRemnants(), nr;
      if (s === ps)
        if (Ve(s, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), nr;
      else
        A.push(s);
    }
  }
  consumeWhiteSpace() {
    for (; sr(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === zt || A === ce)
        return;
      Ve(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
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
      if (r === Ir)
        return this._value.splice(0, s), NC;
      if (r === ps) {
        const n = this._value[s + 1];
        n !== ce && n !== void 0 && (n === Ir ? (t += this.consumeStringSlice(s), s = -1, this._value.shift()) : Ve(r, n) && (t += this.consumeStringSlice(s), t += QA(this.consumeEscapedCodePoint()), s = -1));
      }
      s++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let t = Mt, s = this.peekCodePoint(0);
    for ((s === ut || s === NA) && A.push(this.consumeCodePoint()); _A(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0);
    let r = this.peekCodePoint(1);
    if (s === Is && _A(r))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hl; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0), r = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((s === Sc || s === _c) && ((r === ut || r === NA) && _A(n) || _A(r)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = hl; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [HC(A), t];
  }
  consumeNumericToken() {
    const [A, t] = this.consumeNumber(), s = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (rr(s, r, n)) {
      const o = this.consumeName();
      return { type: 15, number: A, flags: t, unit: o };
    }
    return s === ZQ ? (this.consumeCodePoint(), { type: 16, number: A, flags: t }) : { type: 17, number: A, flags: t };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (Ut(A)) {
      let t = QA(A);
      for (; Ut(this.peekCodePoint(0)) && t.length < 6; )
        t += QA(this.consumeCodePoint());
      sr(this.peekCodePoint(0)) && this.consumeCodePoint();
      const s = parseInt(t, 16);
      return s === 0 || FC(s) || s > 1114111 ? Ql : s;
    }
    return A === ce ? Ql : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const t = this.consumeCodePoint();
      if (Cl(t))
        A += QA(t);
      else if (Ve(t, this.peekCodePoint(0)))
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
    const t = new Tc();
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
      if (s.type === 32 || ZC(s, A))
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
    return typeof A > "u" ? bo : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const be = (e) => e.type === 15, FA = (e) => e.type === 17, j = (e) => e.type === 20, jC = (e) => e.type === 0, Uo = (e, A) => j(e) && e.value === A, Kc = (e) => e.type !== 31, IA = (e) => e.type !== 31 && e.type !== 4, Ue = (e) => {
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
}, ZC = (e, A) => A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3, $e = (e) => e.type === 17 || e.type === 15, fA = (e) => e.type === 16 || $e(e), zC = (e) => e.type === 18 && e.name === "calc", $C = (e, A = 0) => {
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
        flags: Mt
      };
  } catch {
    return null;
  }
  return null;
}, Dc = (e) => e.length > 1 ? [e[0], e[1]] : [e[0]], HA = {
  type: 17,
  number: 0,
  flags: Mt
}, si = {
  type: 16,
  number: 50,
  flags: Mt
}, Je = {
  type: 16,
  number: 100,
  flags: Mt
}, os = (e, A, t) => {
  const [s, r] = e;
  return [z(s, A), z(typeof r < "u" ? r : s, t)];
}, z = (e, A) => {
  if (e.type === 16)
    return e.number / 100 * A;
  if (be(e))
    switch (e.unit) {
      case "rem":
      case "em":
        return 16 * e.number;
      case "px":
      default:
        return e.number;
    }
  return e.number;
}, Rc = "deg", Oc = "grad", Mc = "rad", Nc = "turn", Nt = {
  name: "angle",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Rc:
          return Math.PI * A.number / 180;
        case Oc:
          return Math.PI / 200 * A.number;
        case Mc:
          return A.number;
        case Nc:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Pc = (e) => e.type === 15 && (e.unit === Rc || e.unit === Oc || e.unit === Mc || e.unit === Nc), Vc = (e) => {
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
      return [HA, Je];
    case "to right":
    case "left":
      return ZA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [Je, Je];
    case "to bottom":
    case "top":
      return ZA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [Je, HA];
    case "to left":
    case "right":
      return ZA(270);
  }
  return 0;
}, ZA = (e) => Math.PI * e / 180, je = (e) => (255 & e) === 0, aA = (e) => {
  const A = 255 & e, t = 255 & e >> 8, s = 255 & e >> 16, r = 255 & e >> 24;
  return A < 255 ? `rgba(${r},${s},${t},${A / 255})` : `rgb(${r},${s},${t})`;
}, se = (e, A, t, s) => (e << 24 | A << 16 | t << 8 | Math.round(s * 255) << 0) >>> 0, Ge = (e, A) => {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    const t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, pt = (e) => (e[0].type === 20 ? e[0].value : "unknown") === "from", pA = (e, A, t) => Math.min(Math.max(e, A), t), PA = (e, A) => [
  e[0] * A[0] + e[1] * A[1] + e[2] * A[2],
  e[3] * A[0] + e[4] * A[1] + e[5] * A[2],
  e[6] * A[0] + e[7] * A[1] + e[8] * A[2]
], qC = (e) => se(pA(Math.round(e[0] * 255), 0, 255), pA(Math.round(e[1] * 255), 0, 255), pA(Math.round(e[2] * 255), 0, 255), pA(e[3], 0, 1)), ri = ([e, A, t, s]) => {
  const r = wt([e, A, t]);
  return se(pA(Math.round(r[0] * 255), 0, 255), pA(Math.round(r[1] * 255), 0, 255), pA(Math.round(r[2] * 255), 0, 255), s);
}, Ks = (e) => {
  const A = qe([e[0], e[1], e[2]]);
  return ri([A[0], A[1], A[2], e[3]]);
}, Ab = (e, A) => {
  if (pt(A.filter(IA)))
    throw new Error("Relative color not supported for lab()");
  const [t, s, r, n] = tn(A), o = wt(qe(nn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, eb = (e, A) => {
  if (pt(A.filter(IA)))
    throw new Error("Relative color not supported for oklab()");
  const [t, s, r, n] = tn(A), o = wt(qe(rn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, tb = (e, A) => {
  if (pt(A.filter(IA)))
    throw new Error("Relative color not supported for oklch()");
  const [t, s, r, n] = Jc(A), o = wt(qe(rn(sn([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, sb = (e, A) => {
  if (pt(A.filter(IA)))
    throw new Error("Relative color not supported for lch()");
  const [t, s, r, n] = Xc(A), o = wt(qe(nn(sn([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, Gc = (e, A) => {
  const t = A.filter(IA), [s, r, n, o] = t, i = (s.type === 17 ? ZA(s.number) : Nt.parse(e, s)) / (Math.PI * 2), l = fA(r) ? r.number / 100 : 0, c = fA(n) ? n.number / 100 : 0, f = typeof o < "u" && fA(o) ? z(o, 1) : 1;
  return [i, l, c, f];
}, bl = (e, A) => {
  if (pt(A))
    throw new Error("Relative color not supported for hsl()");
  const [t, s, r, n] = Gc(e, A), o = Yc([t, s, r]);
  return se(o[0] * 255, o[1] * 255, o[2] * 255, s === 0 ? 1 : n);
}, Xc = (e) => {
  const A = e.filter(IA), t = fA(A[0]) ? A[0].number : 0, s = fA(A[1]) ? A[1].number : 0, r = FA(A[2]) || be(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, tn = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : FA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : FA(A[1]) ? A[1].number : 0, r = FA(A[2]) || be(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Jc = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : FA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : FA(A[1]) ? A[1].number : 0, r = FA(A[2]) || be(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && fA(A[4]) ? z(A[4], 1) : 1;
  return [t, s, r, n];
}, Wc = (e) => PA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], e), ni = (e) => PA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], e), Rn = (e, A, t) => (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e), Yc = ([e, A, t]) => {
  if (A === 0)
    return [t * 255, t * 255, t * 255];
  const s = t <= 0.5 ? t * (A + 1) : t + A - t * A, r = t * 2 - s, n = Rn(r, s, e + 1 / 3), o = Rn(r, s, e), i = Rn(r, s, e - 1 / 3);
  return [n, o, i];
}, sn = ([e, A, t]) => (A < 0 && (A = 0), isNaN(t) && (t = 0), [e, A * Math.cos(t * Math.PI / 180), A * Math.sin(t * Math.PI / 180)]), rn = (e) => {
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
}, nn = (e) => {
  const A = (e[0] + 16) / 116, t = e[1] / 500 + A, s = A - e[2] / 200, r = 24389 / 27, n = 24 / 116, o = [
    (t > n ? t ** 3 : (116 * t - 16) / r) * 0.3457 / 0.3585,
    e[0] > 8 ? A ** 3 : e[0] / r,
    (s > n ? s ** 3 : (116 * s - 16) / r) * (1 - 0.3457 - 0.3585) / 0.3585
  ];
  return ni([o[0], o[1], o[2]]);
}, rb = (e, A) => {
  const t = A.filter(IA);
  if (t.length === 3) {
    const [s, r, n] = t.map(Ge), o = mo([s / 255, r / 255, n / 255]), [i, l, c] = Fo([o[0], o[1], o[2]]);
    return [i, l, c, 1];
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ge), i = mo([s / 255, r / 255, n / 255]), [l, c, f] = Fo([i[0], i[1], i[2]]);
    return [l, c, f, o];
  }
  return [0, 0, 0, 1];
}, nb = (e, A) => {
  const [t, s, r, n] = Gc(e, A), o = mo(Yc([t, s, r])), [i, l, c] = Fo([o[0], o[1], o[2]]);
  return [i, l, c, n];
}, ob = (e, A) => {
  const [t, s, r, n] = tn(A), [o, i, l] = nn([t, s, r]);
  return [o, i, l, n];
}, ib = (e, A) => {
  const [t, s, r, n] = Xc(A), [o, i, l] = nn(sn([t, s, r]));
  return [o, i, l, n];
}, lb = (e, A) => {
  const [t, s, r, n] = Jc(A), [o, i, l] = rn(sn([t, s, r]));
  return [o, i, l, n];
}, ab = (e, A) => {
  const [t, s, r, n] = tn(A), [o, i, l] = rn([t, s, r]);
  return [o, i, l, n];
}, cb = (e) => ni([e[0], e[1], e[2]]), Ul = (e) => e, fb = (e) => {
  const [A, t, s] = Wc([e[0], e[2], e[3]]);
  return [A, t, s, e[3]];
}, Fl = (e) => Ks([e[0], e[1], e[2], e[3]]), ub = (e) => {
  const A = cb([e[0], e[1], e[2]]);
  return Ks([A[0], A[1], A[2], e[3]]);
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
], e), Fo = (e) => PA([
  0.41239079926595934,
  0.357584339383878,
  0.1804807884018343,
  0.21263900587151027,
  0.715168678767756,
  0.07219231536073371,
  0.01933081871559182,
  0.11919477979462598,
  0.9505321522496607
], e), wt = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s > 31308e-7 ? t * (1.055 * s ** (1 / 2.4) - 0.055) : 12.92 * A;
}), mo = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s <= 0.04045 ? A / 12.92 : t * ((s + 0.055) / 1.055) ** 2.4;
}), db = (e) => {
  const [A, t, s] = wt(qe([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Bb = (e) => {
  const [A, t, s] = qe([e[0], e[1], e[2]]);
  return [
    pA(Math.round(A * 255), 0, 255),
    pA(Math.round(t * 255), 0, 255),
    pA(Math.round(s * 255), 0, 255),
    e[3]
  ];
}, gb = (e) => PA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], e), hb = (e) => PA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], e), pb = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1;
  return A * t <= 0.04045 ? A / 12.92 : t * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), wb = (e) => wt(e), Qb = (e) => {
  const A = pb([e[0], e[1], e[2]]);
  return gb([A[0], A[1], A[2]]);
}, Cb = (e) => {
  const [A, t, s] = wb(hb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, bb = (e) => {
  const A = Qb([e[0], e[1], e[2]]);
  return Ks([A[0], A[1], A[2], e[3]]);
}, Ub = (e) => PA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], e), Fb = (e) => PA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], e), mb = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, xb = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, vb = (e) => {
  const [A, t, s] = xb(Ub([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, yb = (e) => {
  const A = qe(Fb(mb([e[0], e[1], e[2]])));
  return ri([A[0], A[1], A[2], e[3]]);
}, Eb = (e) => PA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], e), Hb = (e) => PA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], e), Ib = (e) => e.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), _b = (e) => e.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), Lb = (e) => {
  const A = Ib([e[0], e[1], e[2]]);
  return ni(Eb([A[0], A[1], A[2]]));
}, Sb = (e) => {
  const [A, t, s] = _b(Hb(Wc([e[0], e[1], e[2]])));
  return [A, t, s, e[3]];
}, kb = (e) => {
  const A = Lb([e[0], e[1], e[2]]);
  return Ks([A[0], A[1], A[2], e[3]]);
}, Lr = 1.09929682680944, jc = 0.018053968510807, Tb = (e) => e.map(function(A) {
  return A < jc * 4.5 ? A / 4.5 : Math.pow((A + Lr - 1) / Lr, 1 / 0.45);
}), Kb = (e) => e.map(function(A) {
  return A >= jc ? Lr * Math.pow(A, 0.45) - (Lr - 1) : 4.5 * A;
}), Db = (e) => PA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], e), Rb = (e) => PA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], e), Ob = (e) => {
  const A = Tb([e[0], e[1], e[2]]);
  return Db([A[0], A[1], A[2]]);
}, Mb = (e) => {
  const [A, t, s] = Kb(Rb([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, Nb = (e) => {
  const A = Ob([e[0], e[1], e[2]]);
  return Ks([A[0], A[1], A[2], e[3]]);
}, Ze = {
  name: "color",
  parse: (e, A) => {
    if (A.type === 18) {
      const t = Xb[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return t(e, A.values);
    }
    if (A.type === 5) {
      const [t, s, r, n] = Zc(A);
      return se(t, s, r, n);
    }
    if (A.type === 20) {
      const t = we[A.value.toUpperCase()];
      if (typeof t < "u")
        return t;
    }
    return we.TRANSPARENT;
  }
}, Zc = (e) => {
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
}, ml = (e, A) => {
  const t = A.filter(IA);
  if (pt(t))
    throw new Error("Relative color not supported for rgb()");
  if (t.length === 3) {
    const [s, r, n] = t.map(Ge);
    return se(s, r, n, 1);
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Ge);
    return se(s, r, n, o);
  }
  if (t.length === 5 && t[3].type === 6 && t[3].value === "/") {
    const s = Ge(t[0], 0), r = Ge(t[1], 1), n = Ge(t[2], 2), o = Ge(t[4], 3);
    return se(s, r, n, o);
  }
  return 0;
}, Pb = (e, A) => {
  const t = A.filter(IA), s = t[0].type === 20 ? t[0].value : "unknown";
  if (!pt(t)) {
    const n = s, o = xl[n];
    if (typeof o > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const i = FA(t[1]) ? t[1].number : 0, l = FA(t[2]) ? t[2].number : 0, c = FA(t[3]) ? t[3].number : 0, f = t.length > 4 && t[4].type === 6 && t[4].value === "/" && FA(t[5]) ? t[5].number : 1;
    return o([i, l, c, f]);
  } else {
    const n = (v, h) => {
      if (FA(h))
        return h.number;
      const x = (X) => X === "r" || X === "x" ? 0 : X === "g" || X === "y" ? 1 : 2;
      if (j(h)) {
        const X = x(h.value);
        return v[X];
      }
      const S = (X) => {
        const eA = X.filter(IA);
        let bA = "(";
        for (const uA of eA)
          bA += uA.type === 18 && uA.name === "calc" ? S(uA.values) : FA(uA) ? uA.number : uA.type === 6 || j(uA) ? uA.value : "";
        return bA += ")", bA;
      };
      if (h.type === 18) {
        const X = h.values.filter(IA);
        if (h.name === "calc") {
          const eA = S(X).replace(/r|x/, v[0].toString()).replace(/g|y/, v[1].toString()).replace(/b|z/, v[2].toString());
          return new Function("return " + eA)();
        }
      }
      return null;
    }, o = t[1].type === 18 ? t[1].name : j(t[1]) || t[1].type === 5 ? "rgb" : "unknown", i = j(t[2]) ? t[2].value : "unknown";
    let l = t[1].type === 18 ? t[1].values : j(t[1]) ? [t[1]] : [];
    if (j(t[1])) {
      if (typeof we[t[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const h = St(e, t[1].value), x = 255 & h, S = 255 & h >> 8, X = 255 & h >> 16;
        l = [
          { type: 17, number: 255 & h >> 24, flags: 1 },
          { type: 17, number: X, flags: 1 },
          { type: 17, number: S, flags: 1 },
          { type: 17, number: x > 1 ? x / 255 : x, flags: 1 }
        ];
      }
    } else if (t[1].type === 5) {
      const [v, h, x, S] = Zc(t[1]);
      l = [
        { type: 17, number: v, flags: 1 },
        { type: 17, number: h, flags: 1 },
        { type: 17, number: x, flags: 1 },
        { type: 17, number: S > 1 ? S / 255 : S, flags: 1 }
      ];
    }
    if (l.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (i === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = Vb[o], f = Gb[i], a = xl[i];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    if (typeof f > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    const d = c(e, l), g = f(d), Q = n(g, t[3]), U = n(g, t[4]), m = n(g, t[5]), _ = t.length > 6 && t[6].type === 6 && t[6].value === "/" && FA(t[7]) ? t[7].number : 1;
    if (Q === null || U === null || m === null)
      throw new Error("Invalid relative color in color() function");
    return a([Q, U, m, _]);
  }
}, xl = {
  srgb: qC,
  "srgb-linear": ri,
  "display-p3": bb,
  "a98-rgb": yb,
  "prophoto-rgb": kb,
  xyz: Fl,
  "xyz-d50": ub,
  "xyz-d65": Fl,
  rec2020: Nb
}, Vb = {
  rgb: rb,
  hsl: nb,
  lab: ob,
  lch: ib,
  oklab: ab,
  oklch: lb
}, Gb = {
  srgb: db,
  "srgb-linear": Bb,
  "display-p3": Cb,
  "a98-rgb": vb,
  "prophoto-rgb": Sb,
  xyz: Ul,
  "xyz-d50": fb,
  "xyz-d65": Ul,
  rec2020: Mb
}, Xb = {
  hsl: bl,
  hsla: bl,
  rgb: ml,
  rgba: ml,
  lch: sb,
  oklch: tb,
  oklab: eb,
  lab: Ab,
  color: Pb
}, St = (e, A) => Ze.parse(e, Lt.create(A).parseComponentValue()), we = {
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
}, Jb = {
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
}, Wb = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, on = (e, A) => {
  const t = Ze.parse(e, A[0]), s = A[1];
  return s && fA(s) ? { color: t, stop: s } : { color: t, stop: null };
}, vl = (e, A) => {
  const t = e[0], s = e[e.length - 1];
  t.stop === null && (t.stop = HA), s.stop === null && (s.stop = Je);
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
      const c = i - o, f = r[o - 1], a = (l - f) / (c + 1);
      for (let d = 1; d <= c; d++)
        r[o + d - 1] = a * d;
      o = null;
    }
  }
  return e.map(({ color: i }, l) => ({ color: i, stop: Math.max(Math.min(1, r[l] / A), 0) }));
}, Yb = (e, A, t) => {
  const s = A / 2, r = t / 2, n = z(e[0], A) - s, o = r - z(e[1], t);
  return (Math.atan2(o, n) + Math.PI * 2) % (Math.PI * 2);
}, jb = (e, A, t) => {
  const s = typeof e == "number" ? e : Yb(e, A, t), r = Math.abs(A * Math.sin(s)) + Math.abs(t * Math.cos(s)), n = A / 2, o = t / 2, i = r / 2, l = Math.sin(s - Math.PI / 2) * i, c = Math.cos(s - Math.PI / 2) * i;
  return [r, n - c, n + c, o - l, o + l];
}, qA = (e, A) => Math.sqrt(e * e + A * A), yl = (e, A, t, s, r) => [
  [0, 0],
  [0, A],
  [e, 0],
  [e, A]
].reduce((o, i) => {
  const [l, c] = i, f = qA(t - l, s - c);
  return (r ? f < o.optimumDistance : f > o.optimumDistance) ? {
    optimumCorner: i,
    optimumDistance: f
  } : o;
}, {
  optimumDistance: r ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, Zb = (e, A, t, s, r) => {
  let n = 0, o = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = o = Math.min(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - s)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (e.shape === 0)
        n = o = Math.min(qA(A, t), qA(A, t - r), qA(A - s, t), qA(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(A), Math.abs(A - s)), [l, c] = yl(s, r, A, t, !0);
        n = qA(l - A, (c - t) / i), o = i * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = o = Math.max(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - s)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (e.shape === 0)
        n = o = Math.max(qA(A, t), qA(A, t - r), qA(A - s, t), qA(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(A), Math.abs(A - s)), [l, c] = yl(s, r, A, t, !1);
        n = qA(l - A, (c - t) / i), o = i * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = z(e.size[0], s), o = e.size.length === 2 ? z(e.size[1], r) : n), [n, o];
}, zb = (e, A) => {
  let t = ZA(180);
  const s = [];
  return Ue(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && i.value === "to") {
        t = Vc(r);
        return;
      } else if (Pc(i)) {
        t = Nt.parse(e, i);
        return;
      }
    }
    const o = on(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, or = (e, A) => {
  let t = ZA(180);
  const s = [];
  return Ue(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = Vc(r);
        return;
      } else if (Pc(i)) {
        t = (Nt.parse(e, i) + ZA(270)) % ZA(360);
        return;
      }
    }
    const o = on(e, r);
    s.push(o);
  }), {
    angle: t,
    stops: s,
    type: 1
    /* CSSImageType.LINEAR_GRADIENT */
  };
}, $b = (e, A) => {
  const t = ZA(180), s = [];
  let r = 1;
  const n = 0, o = 3, i = [];
  return Ue(A).forEach((l, c) => {
    const f = l[0];
    if (c === 0) {
      if (j(f) && f.value === "linear") {
        r = 1;
        return;
      } else if (j(f) && f.value === "radial") {
        r = 2;
        return;
      }
    }
    if (f.type === 18) {
      if (f.name === "from") {
        const a = Ze.parse(e, f.values[0]);
        s.push({ stop: HA, color: a });
      } else if (f.name === "to") {
        const a = Ze.parse(e, f.values[0]);
        s.push({ stop: Je, color: a });
      } else if (f.name === "color-stop") {
        const a = f.values.filter(IA);
        if (a.length === 2) {
          const d = Ze.parse(e, a[1]), g = a[0];
          FA(g) && s.push({
            stop: { type: 16, number: g.number * 100, flags: g.flags },
            color: d
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + ZA(180)) % ZA(360),
    stops: s,
    type: r
  } : { size: o, shape: n, stops: s, position: i, type: r };
}, zc = "closest-side", $c = "farthest-side", qc = "closest-corner", Af = "farthest-corner", ef = "circle", tf = "ellipse", sf = "cover", rf = "contain", qb = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return Ue(A).forEach((o, i) => {
    let l = !0;
    if (i === 0) {
      let c = !1;
      l = o.reduce((f, a) => {
        if (c)
          if (j(a))
            switch (a.value) {
              case "center":
                return n.push(si), f;
              case "top":
              case "left":
                return n.push(HA), f;
              case "right":
              case "bottom":
                return n.push(Je), f;
            }
          else (fA(a) || $e(a)) && n.push(a);
        else if (j(a))
          switch (a.value) {
            case ef:
              return t = 0, !1;
            case tf:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case zc:
              return s = 0, !1;
            case sf:
            case $c:
              return s = 1, !1;
            case rf:
            case qc:
              return s = 2, !1;
            case Af:
              return s = 3, !1;
          }
        else if ($e(a) || fA(a))
          return Array.isArray(s) || (s = []), s.push(a), !1;
        return f;
      }, l);
    }
    if (l) {
      const c = on(e, o);
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
}, ir = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return Ue(A).forEach((o, i) => {
    let l = !0;
    if (i === 0 ? l = o.reduce((c, f) => {
      if (j(f))
        switch (f.value) {
          case "center":
            return n.push(si), !1;
          case "top":
          case "left":
            return n.push(HA), !1;
          case "right":
          case "bottom":
            return n.push(Je), !1;
        }
      else if (fA(f) || $e(f))
        return n.push(f), !1;
      return c;
    }, l) : i === 1 && (l = o.reduce((c, f) => {
      if (j(f))
        switch (f.value) {
          case ef:
            return t = 0, !1;
          case tf:
            return t = 1, !1;
          case rf:
          case zc:
            return s = 0, !1;
          case $c:
            return s = 1, !1;
          case qc:
            return s = 2, !1;
          case sf:
          case Af:
            return s = 3, !1;
        }
      else if ($e(f) || fA(f))
        return Array.isArray(s) || (s = []), s.push(f), !1;
      return c;
    }, l)), l) {
      const c = on(e, o);
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
}, AU = (e) => e.type === 1, eU = (e) => e.type === 2, oi = {
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
      const t = nf[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return t(e, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function tU(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!nf[e.name]);
}
const nf = {
  "linear-gradient": zb,
  "-moz-linear-gradient": or,
  "-ms-linear-gradient": or,
  "-o-linear-gradient": or,
  "-webkit-linear-gradient": or,
  "radial-gradient": qb,
  "-moz-radial-gradient": ir,
  "-ms-radial-gradient": ir,
  "-o-radial-gradient": ir,
  "-webkit-radial-gradient": ir,
  "-webkit-gradient": $b
}, sU = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter((s) => IA(s) && tU(s)).map((s) => oi.parse(e, s));
  }
}, rU = {
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
}, nU = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (e, A) => Ue(A).map((t) => t.map((s) => zC(s) ? $C(s, 0) : fA(s) ? s : null).filter((s) => s !== null)).map(Dc)
}, oU = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (e, A) => Ue(A).map((t) => t.filter(j).map((s) => s.value).join(" ")).map(iU)
}, iU = (e) => {
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
var kt;
(function(e) {
  e.AUTO = "auto", e.CONTAIN = "contain", e.COVER = "cover";
})(kt || (kt = {}));
const lU = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (e, A) => Ue(A).map((t) => t.filter(aU))
}, aU = (e) => j(e) || fA(e), ln = (e) => ({
  name: `border-${e}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), cU = ln("top"), fU = ln("right"), uU = ln("bottom"), dU = ln("left"), an = (e) => ({
  name: `border-radius-${e}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, t) => Dc(t.filter(fA))
}), BU = an("top-left"), gU = an("top-right"), hU = an("bottom-right"), pU = an("bottom-left"), cn = (e) => ({
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
}), wU = cn("top"), QU = cn("right"), CU = cn("bottom"), bU = cn("left"), fn = (e) => ({
  name: `border-${e}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, t) => be(t) ? t.number : 0
}), UU = fn("top"), FU = fn("right"), mU = fn("bottom"), xU = fn("left"), vU = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, yU = {
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
}, EU = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | HU(s.value),
    0
    /* DISPLAY.NONE */
  )
}, HU = (e) => {
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
}, IU = {
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
}, _U = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var Sr;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Sr || (Sr = {}));
const LU = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "strict":
        return Sr.STRICT;
      case "normal":
      default:
        return Sr.NORMAL;
    }
  }
}, SU = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, El = (e, A) => j(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : fA(e) ? z(e, A) : A, kU = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : oi.parse(e, A)
}, TU = {
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
}, xo = {
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
}, un = (e) => ({
  name: `margin-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), KU = un("top"), DU = un("right"), RU = un("bottom"), OU = un("left"), MU = {
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
}, NU = {
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
}, dn = (e) => ({
  name: `padding-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), PU = dn("top"), VU = dn("right"), GU = dn("bottom"), XU = dn("left"), JU = {
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
}, WU = {
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
}, YU = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && Uo(A[0], "none") ? [] : Ue(A).map((t) => {
    const s = {
      color: we.TRANSPARENT,
      offsetX: HA,
      offsetY: HA,
      blur: HA
    };
    let r = 0;
    for (let n = 0; n < t.length; n++) {
      const o = t[n];
      $e(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : s.blur = o, r++) : s.color = Ze.parse(e, o);
    }
    return s;
  })
}, jU = {
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
}, ZU = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const t = AF[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return t(e, A.values);
    }
    return null;
  }
}, zU = (e, A) => {
  const t = A.filter(
    (s) => s.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((s) => s.number);
  return t.length === 6 ? t : null;
}, $U = (e, A) => {
  const t = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [s, r, {}, {}, n, o, {}, {}, {}, {}, {}, {}, i, l] = t;
  return t.length === 16 ? [s, r, n, o, i, l] : null;
}, qU = (e, A) => {
  if (A.length !== 1)
    return null;
  const t = A[0];
  let s = 0;
  if (t.type === 17 && t.number === 0)
    s = 0;
  else if (t.type === 15)
    s = Nt.parse(e, t);
  else
    return null;
  const r = Math.cos(s), n = Math.sin(s);
  return [r, n, -n, r, 0, 0];
}, AF = {
  matrix: zU,
  matrix3d: $U,
  rotate: qU
}, Hl = {
  type: 16,
  number: 50,
  flags: Mt
}, eF = [Hl, Hl], tF = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    const t = A.filter(fA);
    return t.length !== 2 ? eF : [t[0], t[1]];
  }
}, sF = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? Nt.parse(e, A) * 180 / Math.PI : null
}, rF = {
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
var ws;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(ws || (ws = {}));
const nF = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-all":
        return ws.BREAK_ALL;
      case "keep-all":
        return ws.KEEP_ALL;
      case "normal":
      default:
        return ws.NORMAL;
    }
  }
}, oF = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (FA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, of = {
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
}, iF = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (e, A) => FA(A) ? A.number : 1
}, lF = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, aF = {
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
}, cF = {
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
}, fF = {
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
    return be(A) ? A.number : "auto";
  }
}, uF = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => j(A) && A.value === "auto" ? "auto" : be(A) ? A.number : "auto"
}, dF = {
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
}, BF = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, gF = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: (e, A) => {
    if (FA(A))
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
}, hF = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.filter(j).map((t) => t.value)
}, pF = {
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
}, hA = (e, A) => (e & A) !== 0, wF = {
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
}, QF = {
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
    const s = [], r = A.filter(Kc);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = r[n + 1];
      if (o.type === 20) {
        const l = i && FA(i) ? i.number : 1;
        s.push({ counter: o.value, increment: l });
      }
    }
    return s;
  }
}, CF = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = [], s = A.filter(Kc);
    for (let r = 0; r < s.length; r++) {
      const n = s[r], o = s[r + 1];
      if (j(n) && n.value !== "none") {
        const i = o && FA(o) ? o.number : 0;
        t.push({ counter: n.value, reset: i });
      }
    }
    return t;
  }
}, bF = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(be).map((t) => of.parse(e, t))
}, UF = {
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
    const s = [], r = A.filter(jC);
    if (r.length % 2 !== 0)
      return null;
    for (let n = 0; n < r.length; n += 2) {
      const o = r[n].value, i = r[n + 1].value;
      s.push({ open: o, close: i });
    }
    return s;
  }
}, Il = (e, A, t) => {
  if (!e)
    return "";
  const s = e[Math.min(A, e.length - 1)];
  return s ? t ? s.open : s.close : "";
}, FF = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.length === 1 && Uo(A[0], "none") ? [] : Ue(A).map((t) => {
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
      Uo(o, "inset") ? s.inset = !0 : $e(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : r === 2 ? s.blur = o : s.spread = o, r++) : s.color = Ze.parse(e, o);
    }
    return s;
  })
}, mF = {
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
}, xF = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, vF = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (e, A) => be(A) ? A.number : 0
}, yF = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, EF = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(j).reduce(
    (t, s) => t | HF(s.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, HF = (e) => {
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
}, IF = {
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
class _F {
  constructor(A, t) {
    this.animationDuration = D(A, bF, t.animationDuration), this.backgroundClip = D(A, Jb, t.backgroundClip), this.backgroundColor = D(A, Wb, t.backgroundColor), this.backgroundImage = D(A, sU, t.backgroundImage), this.backgroundOrigin = D(A, rU, t.backgroundOrigin), this.backgroundPosition = D(A, nU, t.backgroundPosition), this.backgroundRepeat = D(A, oU, t.backgroundRepeat), this.backgroundSize = D(A, lU, t.backgroundSize), this.borderTopColor = D(A, cU, t.borderTopColor), this.borderRightColor = D(A, fU, t.borderRightColor), this.borderBottomColor = D(A, uU, t.borderBottomColor), this.borderLeftColor = D(A, dU, t.borderLeftColor), this.borderTopLeftRadius = D(A, BU, t.borderTopLeftRadius), this.borderTopRightRadius = D(A, gU, t.borderTopRightRadius), this.borderBottomRightRadius = D(A, hU, t.borderBottomRightRadius), this.borderBottomLeftRadius = D(A, pU, t.borderBottomLeftRadius), this.borderTopStyle = D(A, wU, t.borderTopStyle), this.borderRightStyle = D(A, QU, t.borderRightStyle), this.borderBottomStyle = D(A, CU, t.borderBottomStyle), this.borderLeftStyle = D(A, bU, t.borderLeftStyle), this.borderTopWidth = D(A, UU, t.borderTopWidth), this.borderRightWidth = D(A, FU, t.borderRightWidth), this.borderBottomWidth = D(A, mU, t.borderBottomWidth), this.borderLeftWidth = D(A, xU, t.borderLeftWidth), this.boxShadow = D(A, FF, t.boxShadow), this.color = D(A, vU, t.color), this.direction = D(A, yU, t.direction), this.display = D(A, EU, t.display), this.float = D(A, IU, t.cssFloat), this.fontFamily = D(A, dF, t.fontFamily), this.fontSize = D(A, BF, t.fontSize), this.fontStyle = D(A, pF, t.fontStyle), this.fontVariant = D(A, hF, t.fontVariant), this.fontWeight = D(A, gF, t.fontWeight), this.letterSpacing = D(A, _U, t.letterSpacing), this.lineBreak = D(A, LU, t.lineBreak), this.lineHeight = D(A, SU, t.lineHeight), this.listStyleImage = D(A, kU, t.listStyleImage), this.listStylePosition = D(A, TU, t.listStylePosition), this.listStyleType = D(A, xo, t.listStyleType), this.marginTop = D(A, KU, t.marginTop), this.marginRight = D(A, DU, t.marginRight), this.marginBottom = D(A, RU, t.marginBottom), this.marginLeft = D(A, OU, t.marginLeft), this.opacity = D(A, iF, t.opacity);
    const s = D(A, MU, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = D(A, NU, t.overflowWrap), this.paddingTop = D(A, PU, t.paddingTop), this.paddingRight = D(A, VU, t.paddingRight), this.paddingBottom = D(A, GU, t.paddingBottom), this.paddingLeft = D(A, XU, t.paddingLeft), this.paintOrder = D(A, mF, t.paintOrder), this.position = D(A, WU, t.position), this.textAlign = D(A, JU, t.textAlign), this.textDecorationColor = D(A, lF, t.textDecorationColor ?? t.color), this.textDecorationLine = D(A, aF, t.textDecorationLine ?? t.textDecoration), this.textDecorationStyle = D(A, cF, t.textDecorationStyle), this.textDecorationThickness = D(A, fF, t.textDecorationThickness), this.textUnderlineOffset = D(A, uF, t.textUnderlineOffset), this.textShadow = D(A, YU, t.textShadow), this.textTransform = D(A, jU, t.textTransform), this.textOverflow = D(A, IF, t.textOverflow), this.transform = D(A, ZU, t.transform), this.transformOrigin = D(A, tF, t.transformOrigin), this.rotate = D(A, sF, t.rotate), this.visibility = D(A, rF, t.visibility), this.webkitTextStrokeColor = D(A, xF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = D(A, vF, t.webkitTextStrokeWidth), this.webkitLineClamp = D(A, yF, t.webkitLineClamp), this.wordBreak = D(A, nF, t.wordBreak), this.zIndex = D(A, oF, t.zIndex), this.objectFit = D(A, EF, t.objectFit);
  }
  isVisible() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }
  isTransparent() {
    return je(this.backgroundColor);
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
class LF {
  constructor(A, t) {
    this.content = D(A, wF, t.content), this.quotes = D(A, UF, t.quotes);
  }
}
class _l {
  constructor(A, t) {
    this.counterIncrement = D(A, QF, t.counterIncrement), this.counterReset = D(A, CF, t.counterReset);
  }
}
const D = (e, A, t) => {
  const s = new Tc(), r = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
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
          return Nt.parse(e, n.parseComponentValue());
        case "color":
          return Ze.parse(e, n.parseComponentValue());
        case "image":
          return oi.parse(e, n.parseComponentValue());
        case "length":
          const i = n.parseComponentValue();
          return $e(i) ? i : HA;
        case "length-percentage":
          const l = n.parseComponentValue();
          return fA(l) ? l : HA;
        case "time":
          return of.parse(e, n.parseComponentValue());
      }
      break;
  }
}, SF = "data-html2canvas-debug", kF = (e) => {
  switch (e.getAttribute(SF)) {
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
}, vo = (e, A) => {
  const t = kF(e);
  return t === 1 || A === t;
};
class Fe {
  constructor(A, t) {
    if (this.context = A, this.textNodes = [], this.elements = [], this.flags = 0, vo(
      t,
      3
      /* DebuggerType.PARSE */
    ))
      debugger;
    this.styles = new _F(A, window.getComputedStyle(t, null)), Ho(t) && (this.styles.animationDuration.some((s) => s > 0) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none"), this.styles.rotate !== null && (t.style.rotate = "none")), this.bounds = An(this.context, t), vo(
      t,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
}
var TF = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Ll = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", is = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var lr = 0; lr < Ll.length; lr++)
  is[Ll.charCodeAt(lr)] = lr;
var KF = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, l;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), f = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = is[e.charCodeAt(s)], o = is[e.charCodeAt(s + 1)], i = is[e.charCodeAt(s + 2)], l = is[e.charCodeAt(s + 3)], f[r++] = n << 2 | o >> 4, f[r++] = (o & 15) << 4 | i >> 2, f[r++] = (i & 3) << 6 | l & 63;
  return c;
}, DF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, RF = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, ht = 5, ii = 11, On = 2, OF = ii - ht, lf = 65536 >> ht, MF = 1 << ht, Mn = MF - 1, NF = 1024 >> ht, PF = lf + NF, VF = PF, GF = 32, XF = VF + GF, JF = 65536 >> ii, WF = 1 << OF, YF = WF - 1, Sl = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, jF = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, ZF = function(e, A) {
  var t = KF(e), s = Array.isArray(t) ? RF(t) : new Uint32Array(t), r = Array.isArray(t) ? DF(t) : new Uint16Array(t), n = 24, o = Sl(r, n / 2, s[4] / 2), i = s[5] === 2 ? Sl(r, (n + s[4]) / 2) : jF(s, Math.ceil((n + s[4]) / 4));
  return new zF(s[0], s[1], s[2], s[3], o, i);
}, zF = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ht], t = (t << On) + (A & Mn), this.data[t];
        if (A <= 65535)
          return t = this.index[lf + (A - 55296 >> ht)], t = (t << On) + (A & Mn), this.data[t];
        if (A < this.highStart)
          return t = XF - JF + (A >> ii), t = this.index[t], t += A >> ht & YF, t = this.index[t], t = (t << On) + (A & Mn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), kl = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $F = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ar = 0; ar < kl.length; ar++)
  $F[kl.charCodeAt(ar)] = ar;
var qF = 1, Nn = 2, Pn = 3, Tl = 4, Kl = 5, Am = 7, Dl = 8, Vn = 9, Gn = 10, Rl = 11, Ol = 12, Ml = 13, Nl = 14, Xn = 15, em = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, tm = function() {
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
}, sm = ZF(TF), YA = "×", Jn = "÷", rm = function(e) {
  return sm.get(e);
}, nm = function(e, A, t) {
  var s = t - 2, r = A[s], n = A[t - 1], o = A[t];
  if (n === Nn && o === Pn)
    return YA;
  if (n === Nn || n === Pn || n === Tl || o === Nn || o === Pn || o === Tl)
    return Jn;
  if (n === Dl && [Dl, Vn, Rl, Ol].indexOf(o) !== -1 || (n === Rl || n === Vn) && (o === Vn || o === Gn) || (n === Ol || n === Gn) && o === Gn || o === Ml || o === Kl || o === Am || n === qF)
    return YA;
  if (n === Ml && o === Nl) {
    for (; r === Kl; )
      r = A[--s];
    if (r === Nl)
      return YA;
  }
  if (n === Xn && o === Xn) {
    for (var i = 0; r === Xn; )
      i++, r = A[--s];
    if (i % 2 === 0)
      return YA;
  }
  return Jn;
}, om = function(e) {
  var A = em(e), t = A.length, s = 0, r = 0, n = A.map(rm);
  return {
    next: function() {
      if (s >= t)
        return { done: !0, value: null };
      for (var o = YA; s < t && (o = nm(A, n, ++s)) === YA; )
        ;
      if (o !== YA || s === t) {
        var i = tm.apply(null, A.slice(r, s));
        return r = s, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, im = function(e) {
  for (var A = om(e), t = [], s; !(s = A.next()).done; )
    s.value && t.push(s.value.slice());
  return t;
};
const lm = (e) => {
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
}, am = (e) => {
  const A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  const t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const s = A.firstChild, r = en(s.data).map((l) => QA(l));
  let n = 0, o = {};
  const i = r.every((l, c) => {
    t.setStart(s, n), t.setEnd(s, n + l.length);
    const f = t.getBoundingClientRect();
    n += l.length;
    const a = f.x > o.x || f.y > o.y;
    return o = f, c === 0 ? !0 : a;
  });
  return e.body.removeChild(A), i;
}, cm = () => typeof new Image().crossOrigin < "u", fm = () => typeof new XMLHttpRequest().responseType == "string", um = (e) => {
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
}, Pl = (e) => e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255, dm = (e) => {
  const A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  const s = A.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, t, t);
  const r = new Image(), n = A.toDataURL();
  r.src = n;
  const o = yo(t, t, 0, 0, r);
  return s.fillStyle = "red", s.fillRect(0, 0, t, t), Vl(o).then((i) => {
    s.drawImage(i, 0, 0);
    const l = s.getImageData(0, 0, t, t).data;
    s.fillStyle = "red", s.fillRect(0, 0, t, t);
    const c = e.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${t}px`, Pl(l) ? Vl(yo(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then((i) => (s.drawImage(i, 0, 0), Pl(s.getImageData(0, 0, t, t).data))).catch(() => !1);
}, yo = (e, A, t, s, r) => {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", s.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(r), o;
}, Vl = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => A(s), s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
}), EA = {
  get SUPPORT_RANGE_BOUNDS() {
    const e = lm(document);
    return Object.defineProperty(EA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    const e = EA.SUPPORT_RANGE_BOUNDS && am(document);
    return Object.defineProperty(EA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    const e = um(document);
    return Object.defineProperty(EA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const e = typeof Array.from == "function" && typeof window.fetch == "function" ? dm(document) : Promise.resolve(!1);
    return Object.defineProperty(EA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    const e = cm();
    return Object.defineProperty(EA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const e = fm();
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
class Qs {
  constructor(A, t) {
    this.text = A, this.bounds = t;
  }
}
const Bm = (e, A, t, s) => {
  const r = pm(A, t), n = [];
  let o = 0;
  return r.forEach((i) => {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (EA.SUPPORT_RANGE_BOUNDS) {
        const l = Gl(s, o, i.length).getClientRects();
        if (l.length > 1) {
          const c = ue(i);
          let f = 0;
          c.forEach((a) => {
            n.push(new Qs(a, kA.fromDOMRectList(e, Gl(s, f + o, a.length).getClientRects()))), f += a.length;
          });
        } else
          n.push(new Qs(i, kA.fromDOMRectList(e, l)));
      } else {
        const l = s.splitText(i.length);
        n.push(new Qs(i, gm(e, s))), s = l;
      }
    else EA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(i.length));
    o += i.length;
  }), n;
}, gm = (e, A) => {
  const t = A.ownerDocument;
  if (t) {
    const s = t.createElement("html2canvaswrapper");
    s.appendChild(A.cloneNode(!0));
    const r = A.parentNode;
    if (r) {
      r.replaceChild(s, A);
      const n = An(e, s);
      return s.firstChild && r.replaceChild(s.firstChild, s), n;
    }
  }
  return kA.EMPTY;
}, Gl = (e, A, t) => {
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
  return im(e);
}, hm = (e, A) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map((s) => s.segment);
  }
  return Qm(e, A);
}, pm = (e, A) => A.letterSpacing !== 0 ? ue(e) : hm(e, A), wm = [32, 160, 4961, 65792, 65793, 4153, 4241], Qm = (e, A) => {
  const t = VQ(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), s = [];
  let r;
  for (; !(r = t.next()).done; )
    if (r.value) {
      const n = r.value.slice(), o = en(n);
      let i = "";
      o.forEach((l) => {
        wm.indexOf(l) === -1 ? i += QA(l) : (i.length && s.push(i), s.push(QA(l)), i = "");
      }), i.length && s.push(i);
    }
  return s;
};
class Cm {
  constructor(A, t, s) {
    this.text = bm(t.data, s.textTransform), this.textBounds = Bm(A, this.text, s, t);
  }
}
const bm = (e, A) => {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(Um, Fm);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, Um = /(^|\s|:|-|\(|\))([a-z])/g, Fm = (e, A, t) => e.length > 0 ? A + t.toUpperCase() : e;
class af extends Fe {
  constructor(A, t) {
    super(A, t), this.src = t.currentSrc || t.src, this.intrinsicWidth = t.naturalWidth, this.intrinsicHeight = t.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class cf extends Fe {
  constructor(A, t) {
    super(A, t), this.canvas = t, this.intrinsicWidth = t.width, this.intrinsicHeight = t.height;
  }
}
class ff extends Fe {
  constructor(A, t) {
    super(A, t);
    const s = new XMLSerializer(), r = An(A, t);
    t.setAttribute("width", `${r.width}px`), t.setAttribute("height", `${r.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(s.serializeToString(t))}`, this.intrinsicWidth = t.width.baseVal.value, this.intrinsicHeight = t.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class uf extends Fe {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class Eo extends Fe {
  constructor(A, t) {
    super(A, t), this.start = t.start, this.reversed = typeof t.reversed == "boolean" && t.reversed === !0;
  }
}
const mm = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], xm = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], vm = (e) => e.width > e.height ? new kA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new kA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, ym = (e) => {
  const A = e.type === Hm ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, Em = (e) => e.value.length === 0 && !!e.placeholder, kr = "checkbox", Tr = "radio", Hm = "password", Xl = 707406591, Im = 1970632191;
class Cs extends Fe {
  constructor(A, t) {
    switch (super(A, t), this.type = t.type.toLowerCase(), this.checked = t.checked, this.value = ym(t), this.isPlaceholder = Em(t), (this.type === kr || this.type === Tr) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = vm(this.bounds)), this.type) {
      case kr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = mm;
        break;
      case Tr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = xm;
        break;
    }
  }
}
class df extends Fe {
  constructor(A, t) {
    super(A, t);
    const s = t.options[t.selectedIndex || 0];
    this.value = s && s.text || "";
  }
}
class Bf extends Fe {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class gf extends Fe {
  constructor(A, t) {
    super(A, t), this.src = t.src, this.width = parseInt(t.width, 10) || 0, this.height = parseInt(t.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor;
    try {
      if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
        this.tree = pf(A, t.contentWindow.document.documentElement);
        const s = t.contentWindow.document.documentElement ? St(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : we.TRANSPARENT, r = t.contentWindow.document.body ? St(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : we.TRANSPARENT;
        this.backgroundColor = je(s) ? je(r) ? this.styles.backgroundColor : r : s;
      }
    } catch {
    }
  }
}
const _m = ["OL", "UL", "MENU"], Cr = (e, A, t, s) => {
  for (let r = A.firstChild, n; r; r = n)
    if (n = r.nextSibling, wf(r) && r.data.length > 0)
      t.textNodes.push(new Cm(e, r, t.styles));
    else if (Ee(r))
      if (ls(r) && r.assignedNodes)
        r.assignedNodes().forEach((o) => Cr(e, o, t, s));
      else {
        const o = hf(e, r);
        o.styles.isVisible() && (Lm(r, o, s) ? o.flags |= 4 : Sm(o.styles) && (o.flags |= 2), _m.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? Cr(e, r.shadowRoot, o, s) : !Kr(r) && !Qf(r) && !Dr(r) && Cr(e, r, o, s));
      }
}, hf = (e, A) => Io(A) ? new af(e, A) : Cf(A) ? new cf(e, A) : Qf(A) ? new ff(e, A) : km(A) ? new uf(e, A) : Tm(A) ? new Eo(e, A) : Km(A) ? new Cs(e, A) : Dr(A) ? new df(e, A) : Kr(A) ? new Bf(e, A) : bf(A) ? new gf(e, A) : new Fe(e, A), pf = (e, A) => {
  const t = hf(e, A);
  return t.flags |= 4, Cr(e, A, t, t), t;
}, Lm = (e, A, t) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || li(e) && t.styles.isTransparent(), Sm = (e) => e.isPositioned() || e.isFloating() ? !0 : hA(
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
), wf = (e) => e.nodeType === Node.TEXT_NODE, Ee = (e) => e.nodeType === Node.ELEMENT_NODE, Ho = (e) => Ee(e) && typeof e.style < "u" && !br(e), br = (e) => typeof e.className == "object", km = (e) => e.tagName === "LI", Tm = (e) => e.tagName === "OL", Km = (e) => e.tagName === "INPUT", Dm = (e) => e.tagName === "HTML", Qf = (e) => e.tagName === "svg", li = (e) => e.tagName === "BODY", Cf = (e) => e.tagName === "CANVAS", Jl = (e) => e.tagName === "VIDEO", Io = (e) => e.tagName === "IMG", bf = (e) => e.tagName === "IFRAME", Wn = (e) => e.tagName === "STYLE", Wl = (e) => e.tagName === "SCRIPT", Kr = (e) => e.tagName === "TEXTAREA", Dr = (e) => e.tagName === "SELECT", ls = (e) => e.tagName === "SLOT", Yl = (e) => e.tagName.indexOf("-") > 0;
class Rm {
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
const jl = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Zl = {
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
}, Om = {
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
}, Mm = {
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
}, Ft = (e, A, t, s, r, n) => e < A || e > t ? _s(e, r, n.length > 0) : s.integers.reduce((o, i, l) => {
  for (; e >= i; )
    e -= i, o += s.values[l];
  return o;
}, "") + n, Uf = (e, A, t, s) => {
  let r = "";
  do
    t || e--, r = s(e) + r, e /= A;
  while (e * A >= A);
  return r;
}, wA = (e, A, t, s, r) => {
  const n = t - A + 1;
  return (e < 0 ? "-" : "") + (Uf(Math.abs(e), n, s, (o) => QA(Math.floor(o % n) + A)) + r);
}, nt = (e, A, t = ". ") => {
  const s = A.length;
  return Uf(Math.abs(e), s, !1, (r) => A[Math.floor(r % s)]) + t;
}, Et = 1, Me = 2, Ne = 4, as = 8, ve = (e, A, t, s, r, n) => {
  if (e < -9999 || e > 9999)
    return _s(e, 4, r.length > 0);
  let o = Math.abs(e), i = r;
  if (o === 0)
    return A[0] + i;
  for (let l = 0; o > 0 && l <= 4; l++) {
    const c = o % 10;
    c === 0 && hA(n, Et) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && l === 0 || c === 1 && l === 1 && hA(n, Me) || c === 1 && l === 1 && hA(n, Ne) && e > 100 || c === 1 && l > 1 && hA(n, as) ? i = A[c] + (l > 0 ? t[l - 1] : "") + i : c === 1 && l > 0 && (i = t[l - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? s : "") + i;
}, zl = "十百千萬", $l = "拾佰仟萬", ql = "マイナス", Yn = "마이너스", _s = (e, A, t) => {
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
      return nt(e, "〇一二三四五六七八九", r);
    case 6:
      return Ft(e, 1, 3999, jl, 3, s).toLowerCase();
    case 7:
      return Ft(e, 1, 3999, jl, 3, s);
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
      return Ft(e, 1, 9999, Zl, 3, s);
    case 35:
      return Ft(e, 1, 9999, Zl, 3, s).toLowerCase();
    case 13:
      return wA(e, 2534, 2543, !0, s);
    case 14:
    case 30:
      return wA(e, 6112, 6121, !0, s);
    case 15:
      return nt(e, "子丑寅卯辰巳午未申酉戌亥", r);
    case 16:
      return nt(e, "甲乙丙丁戊己庚辛壬癸", r);
    case 17:
    case 48:
      return ve(e, "零一二三四五六七八九", zl, "負", r, Me | Ne | as);
    case 47:
      return ve(e, "零壹貳參肆伍陸柒捌玖", $l, "負", r, Et | Me | Ne | as);
    case 42:
      return ve(e, "零一二三四五六七八九", zl, "负", r, Me | Ne | as);
    case 41:
      return ve(e, "零壹贰叁肆伍陆柒捌玖", $l, "负", r, Et | Me | Ne | as);
    case 26:
      return ve(e, "〇一二三四五六七八九", "十百千万", ql, r, 0);
    case 25:
      return ve(e, "零壱弐参四伍六七八九", "拾百千万", ql, r, Et | Me | Ne);
    case 31:
      return ve(e, "영일이삼사오육칠팔구", "십백천만", Yn, n, Et | Me | Ne);
    case 33:
      return ve(e, "零一二三四五六七八九", "十百千萬", Yn, n, 0);
    case 32:
      return ve(e, "零壹貳參四五六七八九", "拾百千", Yn, n, Et | Me | Ne);
    case 18:
      return wA(e, 2406, 2415, !0, s);
    case 20:
      return Ft(e, 1, 19999, Mm, 3, s);
    case 21:
      return wA(e, 2790, 2799, !0, s);
    case 22:
      return wA(e, 2662, 2671, !0, s);
    case 52:
      return Ft(e, 1, 10999, Om, 3, s);
    case 23:
      return nt(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return nt(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return wA(e, 3302, 3311, !0, s);
    case 28:
      return nt(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
    case 29:
      return nt(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
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
}, _o = "data-html2canvas-ignore", Nm = (e) => {
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
class Aa {
  constructor(A, t, s) {
    if (this.context = A, this.options = s, this.scrolledElements = [], this.referenceElement = t, this.counters = new Rm(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const r = Nm(t);
      r && (this.options.iframeContainer = r);
    }
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  toIFrame(A, t) {
    const s = Pm(A, t, this.options.iframeContainer);
    if (!s.contentWindow)
      return Promise.reject("Unable to find iframe window");
    const r = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, o = s.contentWindow, i = o.document, l = Xm(s).then(async () => {
      this.scrolledElements.forEach(Ym), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0)));
      const a = this.options.onclone, d = this.clonedReferenceElement;
      return typeof d > "u" ? Promise.reject(`Error finding the ${this.referenceElement.nodeName} in the cloned document`) : (i.fonts && i.fonts.ready && await i.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await Gm(i), typeof a == "function" ? Promise.resolve().then(() => a(i, d)).then(() => s) : s);
    }), c = i.baseURI;
    i.open();
    try {
      const a = trustedTypes.createPolicy("my-policy", {
        createHTML: (Q) => Q
      }), d = ea(document.doctype) + "<html></html>", g = a.createHTML(d);
      i.write(g);
    } catch {
      i.write(ea(document.doctype) + "<html></html>");
    }
    Wm(this.referenceElement.ownerDocument, r, n);
    const f = i.adoptNode(this.documentElement);
    return qm(f, c), i.replaceChild(f, i.documentElement), i.close(), l;
  }
  createElementClone(A) {
    if (vo(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (Cf(A))
      return this.createCanvasClone(A);
    if (Jl(A))
      return this.createVideoClone(A);
    if (Wn(A))
      return this.createStyleClone(A);
    const t = A.cloneNode(!1);
    return Io(t) && (Io(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Yl(t) ? this.createCustomElementClone(t) : t;
  }
  createCustomElementClone(A) {
    const t = document.createElement("div");
    if (t.className = A.className, jn(A.style, t), A.shadowRoot)
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
    (!Ee(t) || !Wl(t) && !t.hasAttribute(_o) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ee(t) || !Wn(t)) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !Ee(A) || !Wl(A) && !A.hasAttribute(_o) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !Ee(A) || !Wn(A);
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
    if (!ls(A))
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
      Ee(r) && ls(r) ? this.cloneSlotElement(r, t, s) : this.safeAppendClonedChild(t, r, s);
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
    if (!ls(A))
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
      Ee(r) && ls(r) ? this.cloneSlotElementAsLightDOM(r, t, s) : this.appendChildNode(t, r, s);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, t, s) {
    A.shadowRoot && t.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, t.shadowRoot, s), this.cloneLightDOMChildren(A, t, s)) : A.shadowRoot && !t.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, t, s) : this.cloneLightDOMChildren(A, t, s);
  }
  cloneNode(A, t) {
    if (wf(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const s = A.ownerDocument.defaultView;
    if (s && Ee(A) && (Ho(A) || br(A))) {
      const r = this.createElementClone(A);
      r.style.transitionProperty = "none";
      const n = s.getComputedStyle(A), o = s.getComputedStyle(A, ":before"), i = s.getComputedStyle(A, ":after");
      this.referenceElement === A && Ho(r) && (this.clonedReferenceElement = r), li(r) && zm(r, this.options.cspNonce);
      const l = this.counters.parse(new _l(this.context, n)), c = this.resolvePseudoContent(A, r, o, bs.BEFORE);
      Yl(A) && (t = !0), Jl(A) || this.cloneChildNodes(A, r, t), c && r.insertBefore(c, r.firstChild);
      const f = this.resolvePseudoContent(A, r, i, bs.AFTER);
      return f && r.appendChild(f), this.counters.pop(l), (n && (this.options.copyStyles || br(A)) && !bf(A) || t) && jn(n, r), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (Kr(A) || Dr(A)) && (Kr(r) || Dr(r)) && (r.value = A.value), r;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, t, s, r) {
    if (!s)
      return;
    const n = s.content, o = t.ownerDocument;
    if (!o || !n || n === "none" || n === "-moz-alt-content" || s.display === "none")
      return;
    this.counters.parse(new _l(this.context, s));
    const i = new LF(this.context, s), l = o.createElement("html2canvaspseudoelement");
    jn(s, l), i.content.forEach((f) => {
      if (f.type === 0)
        l.appendChild(o.createTextNode(f.value));
      else if (f.type === 22) {
        const a = o.createElement("img");
        a.src = f.value, a.style.opacity = "1", l.appendChild(a);
      } else if (f.type === 18) {
        if (f.name === "attr") {
          const a = f.values.filter(j);
          a.length && l.appendChild(o.createTextNode(A.getAttribute(a[0].value) || ""));
        } else if (f.name === "counter") {
          const [a, d] = f.values.filter(IA);
          if (a && j(a)) {
            const g = this.counters.getCounterValue(a.value), Q = d && j(d) ? xo.parse(this.context, d.value) : 3;
            l.appendChild(o.createTextNode(_s(g, Q, !1)));
          }
        } else if (f.name === "counters") {
          const [a, d, g] = f.values.filter(IA);
          if (a && j(a)) {
            const Q = this.counters.getCounterValues(a.value), U = g && j(g) ? xo.parse(this.context, g.value) : 3, m = d && d.type === 0 ? d.value : "", _ = Q.map((v) => _s(v, U, !1)).join(m);
            l.appendChild(o.createTextNode(_));
          }
        }
      } else if (f.type === 20)
        switch (f.value) {
          case "open-quote":
            l.appendChild(o.createTextNode(Il(i.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            l.appendChild(o.createTextNode(Il(i.quotes, --this.quoteDepth, !1)));
            break;
          default:
            l.appendChild(o.createTextNode(f.value));
        }
    }), l.className = `${Lo} ${So}`;
    const c = r === bs.BEFORE ? ` ${Lo}` : ` ${So}`;
    return br(t) ? t.className.baseValue += c : t.className += c, l;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var bs;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(bs || (bs = {}));
const Pm = (e, A, t) => {
  const s = e.createElement("iframe");
  return s.className = "html2canvas-container", s.style.visibility = "hidden", s.style.position = "fixed", s.style.left = "-10000px", s.style.top = "0px", s.style.border = "0", s.width = A.width.toString(), s.height = A.height.toString(), s.scrolling = "no", s.setAttribute(_o, "true"), (t || e.body).appendChild(s), s;
}, Vm = (e) => new Promise((A) => {
  if (e.complete) {
    A();
    return;
  }
  if (!e.src) {
    A();
    return;
  }
  e.onload = A, e.onerror = A;
}), Gm = (e) => Promise.all([].slice.call(e.images, 0).map(Vm)), Xm = (e) => new Promise((A, t) => {
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
}), Jm = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], jn = (e, A) => {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e.item(t);
    Jm.indexOf(s) === -1 && !s.startsWith("--") && A.style.setProperty(s, e.getPropertyValue(s));
  }
  return A;
}, ea = (e) => {
  let A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += `"${e.publicId}"`), e.systemId && (A += `"${e.systemId}"`), A += ">"), A;
}, Wm = (e, A, t) => {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, Ym = ([e, A, t]) => {
  e.scrollLeft = A, e.scrollTop = t;
}, jm = ":before", Zm = ":after", Lo = "___html2canvas___pseudoelement_before", So = "___html2canvas___pseudoelement_after", ta = `{
    content: "" !important;
    display: none !important;
}`, zm = (e, A) => {
  $m(e, `.${Lo}${jm}${ta}
         .${So}${Zm}${ta}`, A);
}, $m = (e, A, t) => {
  const s = e.ownerDocument;
  if (s) {
    const r = s.createElement("style");
    r.textContent = A, t && (r.nonce = t), e.appendChild(r);
  }
}, qm = (e, A) => {
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
class A1 {
  constructor(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  addImage(A) {
    const t = Promise.resolve();
    return this.has(A) || (zn(A) || r1(A)) && (this._cache[A] = this.loadImage(A)).catch(() => {
    }), t;
  }
  match(A) {
    return this._cache[A];
  }
  async loadImage(A) {
    const t = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, Ae.isSameOrigin) : Ae.isSameOrigin(A), s = !Zn(A) && this._options.useCORS === !0 && EA.SUPPORT_CORS_IMAGES && !t, r = !Zn(A) && !t && !zn(A) && typeof this._options.proxy == "string" && EA.SUPPORT_CORS_XHR && !s;
    if (!t && this._options.allowTaint === !1 && !Zn(A) && !zn(A) && !r && !s)
      return;
    let n = A;
    return r && (n = await this.proxy(n)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((o, i) => {
      const l = new Image();
      l.onload = () => o(l), l.onerror = i, (n1(n) || s) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(() => o(l), 500), this._options.imageTimeout > 0 && setTimeout(() => i(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
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
            c.addEventListener("load", () => r(c.result), !1), c.addEventListener("error", (f) => n(f), !1), c.readAsDataURL(i.response);
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
const e1 = /^data:image\/svg\+xml/i, t1 = /^data:image\/.*;base64,/i, s1 = /^data:image\/.*/i, r1 = (e) => EA.SUPPORT_SVG_DRAWING || !o1(e), Zn = (e) => s1.test(e), n1 = (e) => t1.test(e), zn = (e) => e.substr(0, 4) === "blob", o1 = (e) => e.substr(-3).toLowerCase() === "svg" || e1.test(e);
class R {
  constructor(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  add(A, t) {
    return new R(this.x + A, this.y + t);
  }
}
const mt = (e, A, t) => new R(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
class Se {
  constructor(A, t, s, r) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = s, this.end = r;
  }
  subdivide(A, t) {
    const s = mt(this.start, this.startControl, A), r = mt(this.startControl, this.endControl, A), n = mt(this.endControl, this.end, A), o = mt(s, r, A), i = mt(r, n, A), l = mt(o, i, A);
    return t ? new Se(this.start, s, o, l) : new Se(l, i, n, this.end);
  }
  add(A, t) {
    return new Se(this.start.add(A, t), this.startControl.add(A, t), this.endControl.add(A, t), this.end.add(A, t));
  }
  reverse() {
    return new Se(this.end, this.endControl, this.startControl, this.start);
  }
}
const jA = (e) => e.type === 1;
class i1 {
  constructor(A) {
    const t = A.styles, s = A.bounds;
    let [r, n] = os(t.borderTopLeftRadius, s.width, s.height), [o, i] = os(t.borderTopRightRadius, s.width, s.height), [l, c] = os(t.borderBottomRightRadius, s.width, s.height), [f, a] = os(t.borderBottomLeftRadius, s.width, s.height);
    const d = [];
    d.push((r + o) / s.width), d.push((f + l) / s.width), d.push((n + a) / s.height), d.push((i + c) / s.height);
    const g = Math.max(...d);
    g > 1 && (r /= g, n /= g, o /= g, i /= g, l /= g, c /= g, f /= g, a /= g);
    const Q = s.width - o, U = s.height - c, m = s.width - l, _ = s.height - a, v = t.borderTopWidth, h = t.borderRightWidth, x = t.borderBottomWidth, S = t.borderLeftWidth, X = z(t.paddingTop, A.bounds.width), eA = z(t.paddingRight, A.bounds.width), bA = z(t.paddingBottom, A.bounds.width), uA = z(t.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = r > 0 || n > 0 ? dA(s.left + S / 3, s.top + v / 3, r - S / 3, n - v / 3, tA.TOP_LEFT) : new R(s.left + S / 3, s.top + v / 3), this.topRightBorderDoubleOuterBox = r > 0 || n > 0 ? dA(s.left + Q, s.top + v / 3, o - h / 3, i - v / 3, tA.TOP_RIGHT) : new R(s.left + s.width - h / 3, s.top + v / 3), this.bottomRightBorderDoubleOuterBox = l > 0 || c > 0 ? dA(s.left + m, s.top + U, l - h / 3, c - x / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h / 3, s.top + s.height - x / 3), this.bottomLeftBorderDoubleOuterBox = f > 0 || a > 0 ? dA(s.left + S / 3, s.top + _, f - S / 3, a - x / 3, tA.BOTTOM_LEFT) : new R(s.left + S / 3, s.top + s.height - x / 3), this.topLeftBorderDoubleInnerBox = r > 0 || n > 0 ? dA(s.left + S * 2 / 3, s.top + v * 2 / 3, r - S * 2 / 3, n - v * 2 / 3, tA.TOP_LEFT) : new R(s.left + S * 2 / 3, s.top + v * 2 / 3), this.topRightBorderDoubleInnerBox = r > 0 || n > 0 ? dA(s.left + Q, s.top + v * 2 / 3, o - h * 2 / 3, i - v * 2 / 3, tA.TOP_RIGHT) : new R(s.left + s.width - h * 2 / 3, s.top + v * 2 / 3), this.bottomRightBorderDoubleInnerBox = l > 0 || c > 0 ? dA(s.left + m, s.top + U, l - h * 2 / 3, c - x * 2 / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h * 2 / 3, s.top + s.height - x * 2 / 3), this.bottomLeftBorderDoubleInnerBox = f > 0 || a > 0 ? dA(s.left + S * 2 / 3, s.top + _, f - S * 2 / 3, a - x * 2 / 3, tA.BOTTOM_LEFT) : new R(s.left + S * 2 / 3, s.top + s.height - x * 2 / 3), this.topLeftBorderStroke = r > 0 || n > 0 ? dA(s.left + S / 2, s.top + v / 2, r - S / 2, n - v / 2, tA.TOP_LEFT) : new R(s.left + S / 2, s.top + v / 2), this.topRightBorderStroke = r > 0 || n > 0 ? dA(s.left + Q, s.top + v / 2, o - h / 2, i - v / 2, tA.TOP_RIGHT) : new R(s.left + s.width - h / 2, s.top + v / 2), this.bottomRightBorderStroke = l > 0 || c > 0 ? dA(s.left + m, s.top + U, l - h / 2, c - x / 2, tA.BOTTOM_RIGHT) : new R(s.left + s.width - h / 2, s.top + s.height - x / 2), this.bottomLeftBorderStroke = f > 0 || a > 0 ? dA(s.left + S / 2, s.top + _, f - S / 2, a - x / 2, tA.BOTTOM_LEFT) : new R(s.left + S / 2, s.top + s.height - x / 2), this.topLeftBorderBox = r > 0 || n > 0 ? dA(s.left, s.top, r, n, tA.TOP_LEFT) : new R(s.left, s.top), this.topRightBorderBox = o > 0 || i > 0 ? dA(s.left + Q, s.top, o, i, tA.TOP_RIGHT) : new R(s.left + s.width, s.top), this.bottomRightBorderBox = l > 0 || c > 0 ? dA(s.left + m, s.top + U, l, c, tA.BOTTOM_RIGHT) : new R(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = f > 0 || a > 0 ? dA(s.left, s.top + _, f, a, tA.BOTTOM_LEFT) : new R(s.left, s.top + s.height), this.topLeftPaddingBox = r > 0 || n > 0 ? dA(s.left + S, s.top + v, Math.max(0, r - S), Math.max(0, n - v), tA.TOP_LEFT) : new R(s.left + S, s.top + v), this.topRightPaddingBox = o > 0 || i > 0 ? dA(s.left + Math.min(Q, s.width - h), s.top + v, Q > s.width + h ? 0 : Math.max(0, o - h), Math.max(0, i - v), tA.TOP_RIGHT) : new R(s.left + s.width - h, s.top + v), this.bottomRightPaddingBox = l > 0 || c > 0 ? dA(s.left + Math.min(m, s.width - S), s.top + Math.min(U, s.height - x), Math.max(0, l - h), Math.max(0, c - x), tA.BOTTOM_RIGHT) : new R(s.left + s.width - h, s.top + s.height - x), this.bottomLeftPaddingBox = f > 0 || a > 0 ? dA(s.left + S, s.top + Math.min(_, s.height - x), Math.max(0, f - S), Math.max(0, a - x), tA.BOTTOM_LEFT) : new R(s.left + S, s.top + s.height - x), this.topLeftContentBox = r > 0 || n > 0 ? dA(s.left + S + uA, s.top + v + X, Math.max(0, r - (S + uA)), Math.max(0, n - (v + X)), tA.TOP_LEFT) : new R(s.left + S + uA, s.top + v + X), this.topRightContentBox = o > 0 || i > 0 ? dA(s.left + Math.min(Q, s.width + S + uA), s.top + v + X, Q > s.width + S + uA ? 0 : o - S + uA, i - (v + X), tA.TOP_RIGHT) : new R(s.left + s.width - (h + eA), s.top + v + X), this.bottomRightContentBox = l > 0 || c > 0 ? dA(s.left + Math.min(m, s.width - (S + uA)), s.top + Math.min(U, s.height + v + X), Math.max(0, l - (h + eA)), c - (x + bA), tA.BOTTOM_RIGHT) : new R(s.left + s.width - (h + eA), s.top + s.height - (x + bA)), this.bottomLeftContentBox = f > 0 || a > 0 ? dA(s.left + S + uA, s.top + _, Math.max(0, f - (S + uA)), a - (x + bA), tA.BOTTOM_LEFT) : new R(s.left + S + uA, s.top + s.height - (x + bA));
  }
}
var tA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(tA || (tA = {}));
const dA = (e, A, t, s, r) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), o = t * n, i = s * n, l = e + t, c = A + s;
  switch (r) {
    case tA.TOP_LEFT:
      return new Se(new R(e, c), new R(e, c - i), new R(l - o, A), new R(l, A));
    case tA.TOP_RIGHT:
      return new Se(new R(e, A), new R(e + o, A), new R(l, c - i), new R(l, c));
    case tA.BOTTOM_RIGHT:
      return new Se(new R(l, A), new R(l, A + i), new R(e + o, c), new R(e, c));
    case tA.BOTTOM_LEFT:
    default:
      return new Se(new R(l, c), new R(l - o, c), new R(e, A + i), new R(e, A));
  }
}, Rr = (e) => [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox], l1 = (e) => [
  e.topLeftContentBox,
  e.topRightContentBox,
  e.bottomRightContentBox,
  e.bottomLeftContentBox
], Or = (e) => [
  e.topLeftPaddingBox,
  e.topRightPaddingBox,
  e.bottomRightPaddingBox,
  e.bottomLeftPaddingBox
];
class sa {
  constructor(A, t, s) {
    this.offsetX = A, this.offsetY = t, this.matrix = s, this.type = 0, this.target = 6;
  }
}
class cr {
  constructor(A, t) {
    this.path = A, this.target = t, this.type = 1;
  }
}
class a1 {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
const c1 = (e) => e.type === 0, Ff = (e) => e.type === 1, f1 = (e) => e.type === 2, ra = (e, A) => e.length === A.length ? e.some((t, s) => t === A[s]) : !1, u1 = (e, A, t, s, r) => e.map((n, o) => {
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
class mf {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class xf {
  constructor(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new i1(this.container), this.container.styles.opacity < 1 && this.effects.push(new a1(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), i = this.container.styles.rotate * Math.PI / 180, l = Math.cos(i), c = Math.sin(i), f = [l, c, -c, l, 0, 0];
      this.effects.push(new sa(r, n, f));
    }
    if (this.container.styles.transform !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + z(s[0], this.container.bounds.width), n = this.container.bounds.top + z(s[1], this.container.bounds.height), o = this.container.styles.transform;
      this.effects.push(new sa(r, n, o));
    }
    if (this.container.styles.overflowX !== 0) {
      const s = Rr(this.curves), r = Or(this.curves);
      ra(s, r) ? this.effects.push(new cr(
        s,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new cr(
        s,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new cr(
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
      const n = s.effects.filter((o) => !Ff(o));
      if (t || s.container.styles.position !== 0 || !s.parent) {
        if (t = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
          const o = Rr(s.curves), i = Or(s.curves);
          ra(o, i) || r.unshift(new cr(
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
const ko = (e, A, t, s) => {
  e.container.elements.forEach((r) => {
    const n = hA(
      r.flags,
      4
      /* FLAGS.CREATES_REAL_STACKING_CONTEXT */
    ), o = hA(
      r.flags,
      2
      /* FLAGS.CREATES_STACKING_CONTEXT */
    ), i = new xf(r, e);
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
      const c = n || r.styles.isPositioned() ? t : A, f = new mf(i);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        const a = r.styles.zIndex.order;
        if (a < 0) {
          let d = 0;
          c.negativeZIndex.some((g, Q) => a > g.element.container.styles.zIndex.order ? (d = Q, !1) : d > 0), c.negativeZIndex.splice(d, 0, f);
        } else if (a > 0) {
          let d = 0;
          c.positiveZIndex.some((g, Q) => a >= g.element.container.styles.zIndex.order ? (d = Q + 1, !1) : d > 0), c.positiveZIndex.splice(d, 0, f);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(f);
      } else
        r.styles.isFloating() ? c.nonPositionedFloats.push(f) : c.nonPositionedInlineLevel.push(f);
      ko(i, f, n ? f : t, l);
    } else
      r.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), ko(i, A, t, l);
    hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && vf(r, l);
  });
}, vf = (e, A) => {
  let t = e instanceof Eo ? e.start : 1;
  const s = e instanceof Eo ? e.reversed : !1;
  for (let r = 0; r < A.length; r++) {
    const n = A[r];
    n.container instanceof uf && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = _s(t, n.container.styles.listStyleType, !0), t += s ? -1 : 1;
  }
}, d1 = (e) => {
  const A = new xf(e, null), t = new mf(A), s = [];
  return ko(A, t, t, s), vf(A.container, s), t;
}, na = (e, A) => {
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
}, B1 = (e, A) => {
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
}, g1 = (e, A) => {
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
}, h1 = (e, A) => {
  switch (A) {
    case 0:
      return fr(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return fr(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return fr(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return fr(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, fr = (e, A) => {
  const t = [];
  return jA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), jA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, zA = (e, A, t, s) => {
  const r = [];
  return jA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), jA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), jA(s) ? r.push(s.subdivide(0.5, !0).reverse()) : r.push(s), jA(A) ? r.push(A.subdivide(0.5, !1).reverse()) : r.push(A), r;
}, yf = (e) => {
  const A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Us = (e) => {
  const A = e.styles, t = e.bounds, s = z(A.paddingLeft, t.width), r = z(A.paddingRight, t.width), n = z(A.paddingTop, t.width), o = z(A.paddingBottom, t.width);
  return t.add(s + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + s + r), -(A.borderTopWidth + A.borderBottomWidth + n + o));
}, p1 = (e, A) => e === 0 ? A.bounds : e === 2 ? Us(A) : yf(A), w1 = (e, A) => e === 0 ? A.bounds : e === 2 ? Us(A) : yf(A), $n = (e, A, t) => {
  const s = p1(Ht(e.styles.backgroundOrigin, A), e), r = w1(Ht(e.styles.backgroundClip, A), e), n = Q1(Ht(e.styles.backgroundSize, A), t, s);
  let [o, i] = n;
  const l = os(Ht(e.styles.backgroundPosition, A), s.width - o, s.height - i), c = C1(Ht(e.styles.backgroundRepeat, A), l, n, s, r), f = Math.round(s.left + l[0]), a = Math.round(s.top + l[1]);
  return o = Math.max(1, o), i = Math.max(1, i), [c, f, a, o, i];
}, xt = (e) => j(e) && e.value === kt.AUTO, ur = (e) => typeof e == "number", Q1 = (e, [A, t, s], r) => {
  const [n, o] = e;
  if (!n)
    return [0, 0];
  if (fA(n) && o && fA(o))
    return [z(n, r.width), z(o, r.height)];
  const i = ur(s);
  if (j(n) && (n.value === kt.CONTAIN || n.value === kt.COVER))
    return ur(s) ? r.width / r.height < s != (n.value === kt.COVER) ? [r.width, r.width / s] : [r.height * s, r.height] : [r.width, r.height];
  const l = ur(A), c = ur(t), f = l || c;
  if (xt(n) && (!o || xt(o))) {
    if (l && c)
      return [A, t];
    if (!i && !f)
      return [r.width, r.height];
    if (f && i) {
      const U = l ? A : t * s, m = c ? t : A / s;
      return [U, m];
    }
    const g = l ? A : r.width, Q = c ? t : r.height;
    return [g, Q];
  }
  if (i) {
    let g = 0, Q = 0;
    return fA(n) ? g = z(n, r.width) : fA(o) && (Q = z(o, r.height)), xt(n) ? g = Q * s : (!o || xt(o)) && (Q = g / s), [g, Q];
  }
  let a = null, d = null;
  if (fA(n) ? a = z(n, r.width) : o && fA(o) && (d = z(o, r.height)), a !== null && (!o || xt(o)) && (d = l && c ? a / A * t : r.height), d !== null && xt(n) && (a = l && c ? d / t * A : r.width), a !== null && d !== null)
    return [a, d];
  throw new Error("Unable to calculate background-size for element");
}, Ht = (e, A) => {
  const t = e[A];
  return typeof t > "u" ? e[0] : t;
}, C1 = (e, [A, t], [s, r], n, o) => {
  switch (e) {
    case 2:
      return [
        new R(Math.round(n.left), Math.round(n.top + t)),
        new R(Math.round(n.left + n.width), Math.round(n.top + t)),
        new R(Math.round(n.left + n.width), Math.round(r + n.top + t)),
        new R(Math.round(n.left), Math.round(r + n.top + t))
      ];
    case 3:
      return [
        new R(Math.round(n.left + A), Math.round(n.top)),
        new R(Math.round(n.left + A + s), Math.round(n.top)),
        new R(Math.round(n.left + A + s), Math.round(n.height + n.top)),
        new R(Math.round(n.left + A), Math.round(n.height + n.top))
      ];
    case 1:
      return [
        new R(Math.round(n.left + A), Math.round(n.top + t)),
        new R(Math.round(n.left + A + s), Math.round(n.top + t)),
        new R(Math.round(n.left + A + s), Math.round(n.top + t + r)),
        new R(Math.round(n.left + A), Math.round(n.top + t + r))
      ];
    default:
      return [
        new R(Math.round(o.left), Math.round(o.top)),
        new R(Math.round(o.left + o.width), Math.round(o.top)),
        new R(Math.round(o.left + o.width), Math.round(o.height + o.top)),
        new R(Math.round(o.left), Math.round(o.height + o.top))
      ];
  }
}, b1 = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", oa = "Hidden Text";
class U1 {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, t) {
    const s = this._document.createElement("div"), r = this._document.createElement("img"), n = this._document.createElement("span"), o = this._document.body;
    s.style.visibility = "hidden", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", o.appendChild(s), r.src = b1, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(oa)), s.appendChild(n), s.appendChild(r);
    const i = r.offsetTop - n.offsetTop + 2;
    s.removeChild(n), s.appendChild(this._document.createTextNode(oa)), s.style.lineHeight = "normal", r.style.verticalAlign = "super";
    const l = r.offsetTop - s.offsetTop + 2;
    return o.removeChild(s), { baseline: i, middle: l };
  }
  getMetrics(A, t) {
    const s = `${A} ${t}`;
    return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(A, t)), this._data[s];
  }
}
class Ef {
  constructor(A, t) {
    this.context = A, this.options = t;
  }
}
const F1 = 1e4;
class ai extends Ef {
  constructor(A, t) {
    super(A, t), this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`), this.fontMetrics = new U1(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", this._activeEffects = [], this.context.logger.debug(`Canvas renderer initialized (${t.width}x${t.height}) with scale ${t.scale}`);
  }
  applyEffects(A) {
    for (; this._activeEffects.length; )
      this.popEffect();
    A.forEach((t) => this.applyEffect(t));
  }
  applyEffect(A) {
    this.ctx.save(), f1(A) && (this.ctx.globalAlpha = A.opacity), c1(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Ff(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
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
          const f = Math.min(c + l / 2, A + s);
          if (this.ctx.quadraticCurveTo(c + l / 4, t + r / 2 - i, f, t + r / 2), c = f, c < A + s) {
            const a = Math.min(c + l / 2, A + s);
            this.ctx.quadraticCurveTo(c + l / 4, t + r / 2 + i, a, t + r / 2), c = a;
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
        const f = this.ctx.measureText(c).width + s;
        if (i + f > t)
          break;
        l.push(c), i += f;
      }
      return l.join("") + r;
    }
  }
  createFontStyle(A) {
    const t = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), s = E1(A.fontFamily).join(", "), r = be(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
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
      const a = [];
      let d = [], g = A.textBounds[0].bounds.top;
      A.textBounds.forEach((U) => {
        Math.abs(U.bounds.top - g) >= o * 0.5 ? (d.length > 0 && a.push(d), d = [U], g = U.bounds.top) : d.push(U);
      }), d.length > 0 && a.push(d);
      const Q = t.webkitLineClamp;
      if (a.length > Q) {
        for (let m = 0; m < Q - 1; m++)
          a[m].forEach((_) => {
            this.renderTextBoundWithPaintOrder(_, t, n);
          });
        const U = a[Q - 1];
        if (U && U.length > 0 && s) {
          const m = U.map((x) => x.text).join(""), _ = U[0], v = s.width - (_.bounds.left - s.left), h = this.truncateTextWithEllipsis(m, v, t.letterSpacing);
          n.forEach((x) => {
            switch (x) {
              case 0:
                this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(h, _.bounds.left, _.bounds.top + t.fontSize.number) : ue(h).reduce((X, eA) => (this.ctx.fillText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left);
                break;
              case 1:
                t.webkitTextStrokeWidth && h.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(h, _.bounds.left, _.bounds.top + t.fontSize.number) : ue(h).reduce((X, eA) => (this.ctx.strokeText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left));
                break;
            }
          });
        }
        return;
      }
    }
    const l = t.textOverflow === 1 && s && t.overflowX === 1 && A.textBounds.length > 0;
    let c = !1, f = "";
    if (l) {
      const a = A.textBounds[0].bounds.top;
      if (A.textBounds.every((g) => Math.abs(g.bounds.top - a) < o * 0.5)) {
        let g = A.textBounds.map((m) => m.text).join("");
        g = g.replace(/\s+/g, " ").trim();
        const Q = this.ctx.measureText(g).width, U = s.width;
        Q > U && (c = !0, f = this.truncateTextWithEllipsis(g, U, t.letterSpacing));
      }
    }
    if (c) {
      const a = A.textBounds[0];
      n.forEach((d) => {
        switch (d) {
          case 0:
            this.ctx.fillStyle = aA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(f, a.bounds.left, a.bounds.top + t.fontSize.number) : ue(f).reduce((U, m) => (this.ctx.fillText(m, U, a.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), a.bounds.left);
            const g = t.textShadow;
            g.length && f.trim().length && (g.slice(0).reverse().forEach((Q) => {
              this.ctx.shadowColor = aA(Q.color), this.ctx.shadowOffsetX = Q.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = Q.offsetY.number * this.options.scale, this.ctx.shadowBlur = Q.blur.number, t.letterSpacing === 0 ? this.ctx.fillText(f, a.bounds.left, a.bounds.top + t.fontSize.number) : ue(f).reduce((m, _) => (this.ctx.fillText(_, m, a.bounds.top + t.fontSize.number), m + this.ctx.measureText(_).width + t.letterSpacing), a.bounds.left);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          case 1:
            t.webkitTextStrokeWidth && f.trim().length && (this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(f, a.bounds.left, a.bounds.top + t.fontSize.number) : ue(f).reduce((U, m) => (this.ctx.strokeText(m, U, a.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), a.bounds.left));
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((a) => {
      n.forEach((d) => {
        switch (d) {
          case 0:
            this.ctx.fillStyle = aA(t.color), this.renderTextWithLetterSpacing(a, t.letterSpacing, t.fontSize.number);
            const g = t.textShadow;
            g.length && a.text.trim().length && (g.slice(0).reverse().forEach((Q) => {
              this.ctx.shadowColor = aA(Q.color), this.ctx.shadowOffsetX = Q.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = Q.offsetY.number * this.options.scale, this.ctx.shadowBlur = Q.blur.number, this.renderTextWithLetterSpacing(a, t.letterSpacing, t.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), t.textDecorationLine.length && this.renderTextDecoration(a.bounds, t);
            break;
          case 1:
            if (t.webkitTextStrokeWidth && a.text.trim().length) {
              this.ctx.strokeStyle = aA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round";
              const Q = t.fontSize.number;
              t.letterSpacing === 0 ? this.ctx.strokeText(a.text, a.bounds.left, a.bounds.top + Q) : ue(a.text).reduce((m, _) => (this.ctx.strokeText(_, m, a.bounds.top + Q), m + this.ctx.measureText(_).width), a.bounds.left);
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
      const o = Us(A), i = Or(t);
      this.path(i), this.ctx.save(), this.ctx.clip();
      let l = 0, c = 0, f = r, a = n, d = o.left, g = o.top, Q = o.width, U = o.height;
      const { objectFit: m } = A.styles, _ = Q / U, v = f / a;
      if (m === 2)
        v > _ ? (U = Q / v, g += (o.height - U) / 2) : (Q = U * v, d += (o.width - Q) / 2);
      else if (m === 4)
        v > _ ? (f = a * _, l += (r - f) / 2) : (a = f / _, c += (n - a) / 2);
      else if (m === 8)
        f > Q ? (l += (f - Q) / 2, f = Q) : (d += (Q - f) / 2, Q = f), a > U ? (c += (a - U) / 2, a = U) : (g += (U - a) / 2, U = a);
      else if (m === 16) {
        const h = v > _ ? Q : U * v, x = f > Q ? f : Q;
        h < x ? v > _ ? (U = Q / v, g += (o.height - U) / 2) : (Q = U * v, d += (o.width - Q) / 2) : (f > Q ? (l += (f - Q) / 2, f = Q) : (d += (Q - f) / 2, Q = f), a > U ? (c += (a - U) / 2, a = U) : (g += (U - a) / 2, U = a));
      }
      this.ctx.drawImage(s, l, c, f, a, d, g, Q, U), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const t = A.container, s = A.curves, r = t.styles, n = Us(t);
    for (const o of t.textNodes)
      await this.renderTextNode(o, r, n);
    if (t instanceof af)
      try {
        const o = await this.context.cache.match(t.src);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading image ${t.src}`);
      }
    if (t instanceof cf && this.renderReplacedElement(t, s, t.canvas), t instanceof ff)
      try {
        const o = await this.context.cache.match(t.svg);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading svg ${t.svg.substring(0, 255)}`);
      }
    if (t instanceof gf && t.tree) {
      const i = await new ai(this.context, {
        scale: this.options.scale,
        backgroundColor: t.backgroundColor,
        x: 0,
        y: 0,
        width: t.width,
        height: t.height
      }).render(t.tree);
      t.width && t.height && this.ctx.drawImage(i, 0, 0, t.width, t.height, t.bounds.left, t.bounds.top, t.bounds.width, t.bounds.height);
    }
    if (t instanceof Cs) {
      const o = Math.min(t.bounds.width, t.bounds.height);
      t.type === kr ? t.checked && (this.ctx.save(), this.path([
        new R(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79),
        new R(t.bounds.left + o * 0.16, t.bounds.top + o * 0.5549),
        new R(t.bounds.left + o * 0.27347, t.bounds.top + o * 0.44071),
        new R(t.bounds.left + o * 0.39694, t.bounds.top + o * 0.5649),
        new R(t.bounds.left + o * 0.72983, t.bounds.top + o * 0.23),
        new R(t.bounds.left + o * 0.84, t.bounds.top + o * 0.34085),
        new R(t.bounds.left + o * 0.39363, t.bounds.top + o * 0.79)
      ]), this.ctx.fillStyle = aA(Xl), this.ctx.fill(), this.ctx.restore()) : t.type === Tr && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + o / 2, t.bounds.top + o / 2, o / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = aA(Xl), this.ctx.fill(), this.ctx.restore());
    }
    if (m1(t) && t.value.length) {
      const [o, i, l] = this.createFontStyle(r), { baseline: c } = this.fontMetrics.getMetrics(i, l);
      this.ctx.font = o;
      const f = t instanceof Cs && t.isPlaceholder;
      this.ctx.fillStyle = aA(f ? Im : r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = v1(t.styles.textAlign);
      const a = Us(t);
      let d = 0;
      switch (t.styles.textAlign) {
        case 1:
          d += a.width / 2;
          break;
        case 2:
          d += a.width;
          break;
      }
      let g = 0;
      if (t instanceof Cs) {
        const U = z(r.fontSize, 0);
        g = (a.height - U) / 2;
      }
      const Q = a.add(d, g, 0, 0);
      this.ctx.save(), this.path([
        new R(a.left, a.top),
        new R(a.left + a.width, a.top),
        new R(a.left + a.width, a.top + a.height),
        new R(a.left, a.top + a.height)
      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Qs(t.value, Q), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
        const i = new kA(t.bounds.left, t.bounds.top + z(t.styles.paddingTop, t.bounds.width), t.bounds.width, El(r.lineHeight, r.fontSize.number) / 2 + 1);
        this.renderTextWithLetterSpacing(new Qs(A.listValue, i), r.letterSpacing, El(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
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
          const o = isNaN(r.width) || r.width === 0 ? 1 : r.width, i = isNaN(r.height) || r.height === 0 ? 1 : r.height, [l, c, f, a, d] = $n(A, t, [
            o,
            i,
            o / i
          ]), g = this.ctx.createPattern(this.resizeImage(r, a, d), "repeat");
          this.renderRepeat(l, g, c, f);
        }
      } else if (AU(s)) {
        const [r, n, o, i, l] = $n(A, t, [null, null, null]), [c, f, a, d, g] = jb(s.angle, i, l), Q = document.createElement("canvas");
        Q.width = i, Q.height = l;
        const U = Q.getContext("2d"), m = U.createLinearGradient(f, d, a, g);
        if (vl(s.stops, c || 1).forEach((_) => m.addColorStop(_.stop, aA(_.color))), U.fillStyle = m, U.fillRect(0, 0, i, l), i > 0 && l > 0) {
          const _ = this.ctx.createPattern(Q, "repeat");
          this.renderRepeat(r, _, n, o);
        }
      } else if (eU(s)) {
        const [r, n, o, i, l] = $n(A, t, [
          null,
          null,
          null
        ]), c = s.position.length === 0 ? [si] : s.position, f = z(c[0], i), a = z(c[c.length - 1], l);
        let [d, g] = Zb(s, f, a, i, l);
        if ((d === 0 || g === 0) && (d = Math.max(d, 0.01), g = Math.max(g, 0.01)), d > 0 && g > 0) {
          const Q = this.ctx.createRadialGradient(n + f, o + a, 0, n + f, o + a, d);
          if (vl(s.stops, d * 2).forEach((U) => Q.addColorStop(U.stop, aA(U.color))), this.path(r), this.ctx.fillStyle = Q, d !== g) {
            const U = A.bounds.left + 0.5 * A.bounds.width, m = A.bounds.top + 0.5 * A.bounds.height, _ = g / d, v = 1 / _;
            this.ctx.save(), this.ctx.translate(U, m), this.ctx.transform(1, 0, 0, _, 0, 0), this.ctx.translate(-U, -m), this.ctx.fillRect(n, v * (o - m) + m, i, l * v), this.ctx.restore();
          } else
            this.ctx.fill();
        }
      }
      t--;
    }
  }
  async renderSolidBorder(A, t, s) {
    this.path(na(s, t)), this.ctx.fillStyle = aA(A), this.ctx.fill();
  }
  async renderDoubleBorder(A, t, s, r) {
    if (t < 3) {
      await this.renderSolidBorder(A, s, r);
      return;
    }
    const n = B1(r, s);
    this.path(n), this.ctx.fillStyle = aA(A), this.ctx.fill();
    const o = g1(r, s);
    this.path(o), this.ctx.fill();
  }
  async renderNodeBackgroundAndBorders(A) {
    this.applyEffects(A.getEffects(
      2
      /* EffectTarget.BACKGROUND_BORDERS */
    ));
    const t = A.container.styles, s = !je(t.backgroundColor) || t.backgroundImage.length, r = [
      { style: t.borderTopStyle, color: t.borderTopColor, width: t.borderTopWidth },
      { style: t.borderRightStyle, color: t.borderRightColor, width: t.borderRightWidth },
      { style: t.borderBottomStyle, color: t.borderBottomColor, width: t.borderBottomWidth },
      { style: t.borderLeftStyle, color: t.borderLeftColor, width: t.borderLeftWidth }
    ], n = x1(Ht(t.backgroundClip, 0), A.curves);
    (s || t.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), je(t.backgroundColor) || (this.ctx.fillStyle = aA(t.backgroundColor), this.ctx.fill()), await this.renderBackgroundImage(A.container), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((i) => {
      this.ctx.save();
      const l = Rr(A.curves), c = i.inset ? 0 : F1, f = u1(l, -c + (i.inset ? 1 : -1) * i.spread.number, (i.inset ? 1 : -1) * i.spread.number, i.spread.number * (i.inset ? -2 : 2), i.spread.number * (i.inset ? -2 : 2));
      i.inset ? (this.path(l), this.ctx.clip(), this.mask(f)) : (this.mask(l), this.ctx.clip(), this.path(f)), this.ctx.shadowOffsetX = i.offsetX.number + c, this.ctx.shadowOffsetY = i.offsetY.number, this.ctx.shadowColor = aA(i.color), this.ctx.shadowBlur = i.blur.number, this.ctx.fillStyle = i.inset ? aA(i.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
    }));
    let o = 0;
    for (const i of r)
      i.style !== 0 && !je(i.color) && i.width > 0 && (i.style === 2 ? await this.renderDashedDottedBorder(
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
    const o = h1(r, s), i = na(r, s);
    n === 2 && (this.path(i), this.ctx.clip());
    let l, c, f, a;
    jA(i[0]) ? (l = i[0].start.x, c = i[0].start.y) : (l = i[0].x, c = i[0].y), jA(i[1]) ? (f = i[1].end.x, a = i[1].end.y) : (f = i[1].x, a = i[1].y);
    let d;
    s === 0 || s === 2 ? d = Math.abs(l - f) : d = Math.abs(c - a), this.ctx.beginPath(), n === 3 ? this.formatPath(o) : this.formatPath(i.slice(0, 2));
    let g = t < 3 ? t * 3 : t * 2, Q = t < 3 ? t * 2 : t;
    n === 3 && (g = t, Q = t);
    let U = !0;
    if (d <= g * 2)
      U = !1;
    else if (d <= g * 2 + Q) {
      const m = d / (2 * g + Q);
      g *= m, Q *= m;
    } else {
      const m = Math.floor((d + Q) / (g + Q)), _ = (d - m * g) / (m - 1), v = (d - (m + 1) * g) / m;
      Q = v <= 0 || Math.abs(Q - _) < Math.abs(Q - v) ? _ : v;
    }
    if (U && (n === 3 ? this.ctx.setLineDash([0, g + Q]) : this.ctx.setLineDash([g, Q])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = aA(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
      if (jA(i[0])) {
        const m = i[3], _ = i[0];
        this.ctx.beginPath(), this.formatPath([new R(m.end.x, m.end.y), new R(_.start.x, _.start.y)]), this.ctx.stroke();
      }
      if (jA(i[1])) {
        const m = i[1], _ = i[2];
        this.ctx.beginPath(), this.formatPath([new R(m.end.x, m.end.y), new R(_.start.x, _.start.y)]), this.ctx.stroke();
      }
    }
    this.ctx.restore();
  }
  async render(A) {
    this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const t = d1(A);
    return await this.renderStack(t), this.applyEffects([]), this.canvas;
  }
}
const m1 = (e) => e instanceof Bf || e instanceof df ? !0 : e instanceof Cs && e.type !== Tr && e.type !== kr, x1 = (e, A) => {
  switch (e) {
    case 0:
      return Rr(A);
    case 2:
      return l1(A);
    case 1:
    default:
      return Or(A);
  }
}, v1 = (e) => {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, y1 = ["-apple-system", "system-ui"], E1 = (e) => /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter((A) => y1.indexOf(A) === -1) : e;
class H1 extends Ef {
  constructor(A, t) {
    super(A, t), this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${t.width}x${t.height} at ${t.x},${t.y}) with scale ${t.scale}`);
  }
  async render(A) {
    const t = yo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), s = await I1(t);
    return this.options.backgroundColor && (this.ctx.fillStyle = aA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const I1 = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => {
    A(s);
  }, s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
});
class Hf {
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
Hf.instances = {};
class Bn {
  constructor(A, t) {
    this.windowBounds = t, this.instanceName = `#${Bn.instanceCount++}`, this.logger = new Hf({ id: this.instanceName, enabled: A.logging }), this.cache = A.cache ?? new A1(this, A);
  }
}
Bn.instanceCount = 1;
let If;
const _1 = (e) => {
  If = e;
}, _f = (e, A = {}) => L1(e, A);
_f.setCspNonce = _1;
typeof window < "u" && Ae.setContext(window);
const L1 = async (e, A) => {
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
  }, i = new kA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), l = new Bn(n, i), c = A.foreignObjectRendering ?? !1, f = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: c,
    copyStyles: c,
    cspNonce: If
  };
  l.logger.debug(`Starting document clone with size ${i.width}x${i.height} scrolled to ${-i.left},${-i.top}`);
  const a = new Aa(l, e, f), d = a.clonedReferenceElement;
  if (!d)
    return Promise.reject("Unable to find element in cloned iframe");
  const g = await a.toIFrame(t, i), { width: Q, height: U, left: m, top: _ } = li(d) || Dm(d) ? lQ(d.ownerDocument) : An(l, d), v = S1(l, d, A.backgroundColor), h = {
    canvas: A.canvas,
    backgroundColor: v,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + m,
    y: (A.y ?? 0) + _,
    width: A.width ?? Math.ceil(Q),
    height: A.height ?? Math.ceil(U)
  };
  let x;
  if (c)
    l.logger.debug("Document cloned, using foreign object rendering"), x = await new H1(l, h).render(d);
  else {
    l.logger.debug(`Document cloned, element located at ${m},${_} with size ${Q}x${U} using computed rendering`), l.logger.debug("Starting DOM parsing");
    const S = pf(l, d);
    v === S.styles.backgroundColor && (S.styles.backgroundColor = we.TRANSPARENT), l.logger.debug(`Starting renderer for element at ${h.x},${h.y} with size ${h.width}x${h.height}`), x = await new ai(l, h).render(S);
  }
  return (A.removeContainer ?? !0) && (Aa.destroy(g) || l.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), l.logger.debug("Finished rendering"), x;
}, S1 = (e, A, t) => {
  const s = A.ownerDocument, r = s.documentElement ? St(e, getComputedStyle(s.documentElement).backgroundColor) : we.TRANSPARENT, n = s.body ? St(e, getComputedStyle(s.body).backgroundColor) : we.TRANSPARENT, o = typeof t == "string" ? St(e, t) : t === null ? we.TRANSPARENT : 4294967295;
  return A === s.documentElement ? je(r) ? je(n) ? o : n : r : o;
};
async function k1(e = {}) {
  var f;
  const A = window.innerWidth, t = window.innerHeight;
  try {
    (f = e.beforeCapture) == null || f.call(e);
  } catch {
  }
  const s = (() => {
    var a;
    try {
      return (((a = e.canvases) == null ? void 0 : a.call(e)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), r = s.map((a) => {
    try {
      return a.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(s), o = e.ignore || [];
  let i = null;
  try {
    i = await Promise.race([
      _f(document.body, {
        useCORS: !0,
        allowTaint: !0,
        backgroundColor: null,
        scale: 1,
        width: A,
        height: t,
        ignoreElements: (a) => {
          var d;
          return n.has(a) || a.tagName && a.tagName.toLowerCase().startsWith("devloop-") || (d = e.ignoreElement) != null && d.call(e, a) ? !0 : o.some((g) => {
            var Q;
            try {
              return (Q = a.matches) == null ? void 0 : Q.call(a, g);
            } catch {
              return !1;
            }
          });
        }
      }),
      new Promise((a, d) => setTimeout(() => d(new Error("화면 렌더 시간 초과(15초)")), e.timeoutMs || 15e3))
    ]);
  } catch (a) {
    if (console.warn("[BugReport] 화면 UI 렌더 실패 - 캔버스 배경만 저장:", (a == null ? void 0 : a.message) || a), !r.length) throw a;
  }
  const l = document.createElement("canvas");
  l.width = A, l.height = t;
  const c = l.getContext("2d");
  for (const a of r)
    await new Promise((d) => {
      const g = new Image();
      g.onload = () => {
        c.drawImage(g, 0, 0, A, t), d();
      }, g.onerror = d, g.src = a;
    });
  return i && c.drawImage(i, 0, 0), l.toDataURL("image/png");
}
const vt = (e, A = 2) => String(e).padStart(A, "0");
function re(e = !1) {
  const A = /* @__PURE__ */ new Date(), t = `${vt(A.getHours())}:${vt(A.getMinutes())}:${vt(A.getSeconds())}.${vt(A.getMilliseconds(), 3)}`;
  return e ? `${A.getFullYear()}-${vt(A.getMonth() + 1)}-${vt(A.getDate())} ${t}` : t;
}
function Dt(e) {
  const A = [];
  return { push(t) {
    A.push(t), A.length > e && A.shift();
  }, get: () => [...A] };
}
const T1 = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function K1(e) {
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
function D1({ max: e = 200, silent: A = T1 } = {}) {
  const t = Dt(e);
  for (const s of ["log", "warn", "error"]) {
    const r = console[s].bind(console);
    console[s] = (...n) => {
      const o = n.map(K1).join(" ");
      A.some((i) => i.test(o)) || (t.push({ level: s, time: re(!0), message: o }), r(...n));
    };
  }
  return window.addEventListener("error", (s) => t.push({ level: "error", time: re(!0), message: `[GlobalError] ${s.message} (${s.filename}:${s.lineno})` })), window.addEventListener("unhandledrejection", (s) => {
    const r = s.reason instanceof Error ? s.reason.message : String(s.reason);
    t.push({ level: "error", time: re(!0), message: `[UnhandledRejection] ${r}` });
  }), t.get;
}
const R1 = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, O1 = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function To(e, A = 2e3) {
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
  if (typeof FormData < "u" && A instanceof FormData) {
    const s = {};
    let r = 0;
    try {
      for (const [n, o] of A.entries())
        typeof o == "string" ? s[n] = o.length > 500 ? o.slice(0, 500) + "…" : o : (r++, s[n] = `[file ${o.name || ""} ${o.size || 0}B]`);
    } catch {
    }
    A = { __form: s, __files: r };
  } else typeof URLSearchParams < "u" && A instanceof URLSearchParams && (A = { __urlencoded: Object.fromEntries(A.entries()) });
  const t = typeof A == "string" ? A : (() => {
    try {
      return JSON.stringify(A);
    } catch {
      return String(A);
    }
  })();
  return R1.test(e || "") || O1.test(t) ? "[masked]" : To(A);
}
function M1({ max: e = 50, axios: A = [], fetch: t = !1, xhr: s = !1, ignore: r = [] } = {}) {
  const n = Dt(e), o = Dt(30), i = { push(c) {
    n.push(c), c && (c.error || Number(c.status) >= 400) && o.push(c);
  }, get() {
    const c = n.get(), f = new Set(c);
    return [...o.get().filter((d) => !f.has(d)), ...c].sort((d, g) => String(d.time).localeCompare(String(g.time)));
  } }, l = (c) => r.some((f) => f instanceof RegExp ? f.test(c) : String(c).includes(f));
  for (const c of A) {
    const f = c != null && c.interceptors ? c : c == null ? void 0 : c.instance, a = (c == null ? void 0 : c.label) || "axios";
    f != null && f.interceptors && (f.interceptors.request.use((d) => (d._bk = { t0: Date.now(), time: re(!0) }, d), (d) => Promise.reject(d)), f.interceptors.response.use((d) => {
      var Q;
      const g = d.config._bk || {};
      return l(d.config.url) || i.push({ server: a, time: g.time, duration: g.t0 ? Date.now() - g.t0 : null, method: (Q = d.config.method) == null ? void 0 : Q.toUpperCase(), url: d.config.url, params: To(d.config.params), requestBody: Oe(d.config.url, d.config.data), status: d.status, responseBody: Oe(d.config.url, d.data), error: null }), d;
    }, (d) => {
      var Q, U, m, _, v, h, x, S, X, eA, bA;
      const g = ((Q = d.config) == null ? void 0 : Q._bk) || {};
      return l((U = d.config) == null ? void 0 : U.url) || i.push({ server: a, time: g.time, duration: g.t0 ? Date.now() - g.t0 : null, method: (_ = (m = d.config) == null ? void 0 : m.method) == null ? void 0 : _.toUpperCase(), url: (v = d.config) == null ? void 0 : v.url, params: To((h = d.config) == null ? void 0 : h.params), requestBody: Oe((x = d.config) == null ? void 0 : x.url, (S = d.config) == null ? void 0 : S.data), status: ((X = d.response) == null ? void 0 : X.status) ?? "ERR", responseBody: Oe((eA = d.config) == null ? void 0 : eA.url, (bA = d.response) == null ? void 0 : bA.data), error: d.message }), Promise.reject(d);
    }));
  }
  if (t && window.fetch) {
    const c = window.fetch.bind(window);
    window.fetch = async (f, a = {}) => {
      const d = typeof f == "string" ? f : f == null ? void 0 : f.url, g = Date.now(), Q = re(!0), U = (a.method || typeof f != "string" && (f == null ? void 0 : f.method) || "GET").toUpperCase();
      try {
        const m = await c(f, a);
        return l(d) || i.push({ server: "fetch", time: Q, duration: Date.now() - g, method: U, url: d, params: null, requestBody: Oe(d, a.body), status: m.status, responseBody: null, error: null }), m;
      } catch (m) {
        throw l(d) || i.push({ server: "fetch", time: Q, duration: Date.now() - g, method: U, url: d, params: null, requestBody: Oe(d, a.body), status: "ERR", responseBody: null, error: m.message }), m;
      }
    };
  }
  if (s && window.XMLHttpRequest) {
    const c = XMLHttpRequest.prototype, f = c.open, a = c.send;
    c.open = function(d, g, ...Q) {
      return this._bk = { method: String(d).toUpperCase(), url: g }, f.call(this, d, g, ...Q);
    }, c.send = function(d) {
      const g = this._bk || {}, Q = Date.now(), U = re(!0);
      return this.addEventListener("loadend", () => {
        l(g.url) || i.push({ server: "xhr", time: U, duration: Date.now() - Q, method: g.method, url: g.url, params: null, requestBody: Oe(g.url, d), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Oe(g.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), a.call(this, d);
    };
  }
  return i.get;
}
function N1(e) {
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
function P1(e, { max: A = 100 } = {}) {
  const t = Dt(A);
  return e.subscribe((s) => t.push({ time: re(), type: s.type, payload: N1(s.payload) })), t.get;
}
function V1(e, { max: A = 20 } = {}) {
  const t = Dt(A);
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
function G1(e, { max: A = 80, skip: t = [] } = {}) {
  const s = Dt(A), r = new Set(t), n = e.emit.bind(e);
  return e.emit = (o, i) => (r.has(o) || s.push({ time: re(), type: o }), n(o, i)), s.get;
}
function z1() {
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
function $1(e) {
  return {
    subscribe: (A) => e.subscribe((t, s) => {
      const r = Object.keys(t).filter((n) => t[n] !== (s == null ? void 0 : s[n]));
      A({ type: `set(${r.join(",") || "?"})`, payload: Object.fromEntries(r.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function X1(e) {
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
      if (i.some((a) => c.toLowerCase().includes(a))) continue;
      const f = localStorage.getItem(c);
      s[c] = f && f.length > 200 ? f.slice(0, 200) + "…" : f;
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
const $t = () => [];
function J1(e = {}) {
  var f;
  const A = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...e }, t = A.interceptors || {}, s = t.console === !1 ? $t : D1(t.console === !0 ? {} : t.console), r = t.network ? M1(t.network) : $t, n = t.mutation ? P1(t.mutation) : $t, o = t.router ? V1(t.router === !0 ? null : t.router) : $t, i = t.events ? G1(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : $t, l = ((f = A.projects) != null && f.length ? A.projects : [{ key: A.project, label: A.project }]).map((a) => typeof a == "string" ? { key: a, label: a } : a), c = {
    options: A,
    projects: l,
    project: l[0].key,
    api: In({ ...A, project: l[0].key, apiKey: l[0].apiKey ?? A.apiKey, adminKey: A.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const a of l)
        if (!c._info[a.key])
          try {
            c._info[a.key] = await In({ ...A, project: a.key, apiKey: a.apiKey ?? A.apiKey, adminKey: A.adminKey }).info();
          } catch {
            c._info[a.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(a) {
      const d = l.find((g) => g.key === a);
      d && (c.project = d.key, c.api = In({ ...A, project: d.key, apiKey: d.apiKey ?? A.apiKey, adminKey: A.adminKey }));
    },
    getLogs: s,
    getNetwork: r,
    getMutations: n,
    getRoutes: o,
    getEvents: i,
    captureScreen: (a = {}) => {
      var d;
      return k1({ ...A.capture || {}, ...a, ignore: [...((d = A.capture) == null ? void 0 : d.ignore) || [], ...a.ignore || []] });
    },
    captureContext: () => X1(c),
    fetchBackendLogs: async () => A.backendLogs ? await A.backendLogs() : null,
    notify: (a) => {
      A.notify ? A.notify(a) : c._listeners.forEach((d) => d(a));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(a) {
      return c._listeners.add(a), () => c._listeners.delete(a);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (c._els.modal) return c;
      const a = document.createElement("devloop-report-modal"), d = document.createElement("devloop-viewer");
      return a.kit = c, d.kit = c, document.body.append(a, d), c._els = { modal: a, viewer: d }, c;
    },
    openReport: () => {
      var a, d, g, Q;
      return ((d = (a = c._els.modal) == null ? void 0 : a.open) == null ? void 0 : d.call(a)) ?? ((Q = (g = c._open) == null ? void 0 : g.report) == null ? void 0 : Q.call(g));
    },
    openViewer: (a) => {
      var d, g, Q, U;
      return ((g = (d = c._els.viewer) == null ? void 0 : d.open) == null ? void 0 : g.call(d, a)) ?? ((U = (Q = c._open) == null ? void 0 : Q.viewer) == null ? void 0 : U.call(Q, a));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(a, d) {
      c._open[a] = d;
    }
  };
  if (A.hotkeys) {
    const a = (d, g) => {
      if (!g) return !1;
      const Q = g.split("+").map((m) => m.trim().toLowerCase()), U = Q.pop();
      return d.key.toLowerCase() === U && Q.includes("shift") === d.shiftKey && Q.includes("ctrl") === d.ctrlKey && Q.includes("alt") === d.altKey && Q.includes("meta") === d.metaKey;
    };
    window.addEventListener("keydown", (d) => {
      a(d, A.hotkeys.report) ? (d.preventDefault(), c.openReport()) : a(d, A.hotkeys.viewer) && (d.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function W1() {
  customElements.get("devloop-report-modal") || customElements.define("devloop-report-modal", /* @__PURE__ */ Yi(op)), customElements.get("devloop-viewer") || customElements.define("devloop-viewer", /* @__PURE__ */ Yi(iQ));
}
W1();
function q1(e) {
  return J1(e).mount();
}
export {
  k1 as captureScreen,
  J1 as createDevloop,
  Z1 as fmt,
  j1 as i18n,
  q1 as install,
  z1 as reduxMiddleware,
  W1 as register,
  $1 as zustandSource
};
