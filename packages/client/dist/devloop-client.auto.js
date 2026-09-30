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
const iA = {}, ut = [], he = () => {
}, cl = () => !1, Mr = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // uppercase letter
(e.charCodeAt(2) > 122 || e.charCodeAt(2) < 97), Nr = (e) => e.startsWith("onUpdate:"), CA = Object.assign, Do = (e, A) => {
  const t = e.indexOf(A);
  t > -1 && e.splice(t, 1);
}, Su = Object.prototype.hasOwnProperty, AA = (e, A) => Su.call(e, A), P = Array.isArray, ze = (e) => ks(e) === "[object Map]", ke = (e) => ks(e) === "[object Set]", pi = (e) => ks(e) === "[object Date]", W = (e) => typeof e == "function", BA = (e) => typeof e == "string", be = (e) => typeof e == "symbol", nA = (e) => e !== null && typeof e == "object", ul = (e) => (nA(e) || W(e)) && W(e.then) && W(e.catch), dl = Object.prototype.toString, ks = (e) => dl.call(e), Lu = (e) => ks(e).slice(8, -1), Pr = (e) => ks(e) === "[object Object]", Ro = (e) => BA(e) && e !== "NaN" && e[0] !== "-" && "" + parseInt(e, 10) === e, cs = /* @__PURE__ */ Ko(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Vr = (e) => {
  const A = /* @__PURE__ */ Object.create(null);
  return (t) => A[t] || (A[t] = e(t));
}, ku = /-\w/g, xA = Vr(
  (e) => e.replace(ku, (A) => A.slice(1).toUpperCase())
), Tu = /\B([A-Z])/g, XA = Vr(
  (e) => e.replace(Tu, "-$1").toLowerCase()
), Gr = Vr((e) => e.charAt(0).toUpperCase() + e.slice(1)), pn = Vr(
  (e) => e ? `on${Gr(e)}` : ""
), Ie = (e, A) => !Object.is(e, A), hr = (e, ...A) => {
  for (let t = 0; t < e.length; t++)
    e[t](...A);
}, fl = (e, A, t, s = !1) => {
  Object.defineProperty(e, A, {
    configurable: !0,
    enumerable: !1,
    writable: s,
    value: t
  });
}, Xr = (e) => {
  const A = parseFloat(e);
  return isNaN(A) ? e : A;
}, wi = (e) => {
  const A = BA(e) ? Number(e) : NaN;
  return isNaN(A) ? e : A;
};
let bi;
const Jr = () => bi || (bi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(e) {
  if (P(e)) {
    const A = {};
    for (let t = 0; t < e.length; t++) {
      const s = e[t], r = BA(s) ? Ou(s) : Ts(s);
      if (r)
        for (const n in r)
          A[n] = r[n];
    }
    return A;
  } else if (BA(e) || nA(e))
    return e;
}
const Ku = /;(?![^(]*\))/g, Du = /:([^]+)/, Ru = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function Ou(e) {
  const A = {};
  return e.replace(Ru, (t) => t.startsWith("/*") ? "" : t).split(Ku).forEach((t) => {
    if (t) {
      const s = t.split(Du);
      s.length > 1 && (A[s[0].trim()] = s[1].trim());
    }
  }), A;
}
function Y(e) {
  let A = "";
  if (BA(e))
    A = e;
  else if (P(e))
    for (let t = 0; t < e.length; t++) {
      const s = Y(e[t]);
      s && (A += s + " ");
    }
  else if (nA(e))
    for (const t in e)
      e[t] && (A += t + " ");
  return A.trim();
}
const Mu = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", Nu = /* @__PURE__ */ Ko(Mu);
function Bl(e) {
  return !!e || e === "";
}
function Pu(e, A, t) {
  if (e.length !== A.length) return !1;
  let s = !0;
  for (let r = 0; s && r < e.length; r++)
    s = Te(e[r], A[r], t);
  return s;
}
function Qi(e, A, t) {
  if (e.size !== A.size) return !1;
  const s = Array.from(A), r = new Uint8Array(s.length);
  for (const n of e) {
    let o = -1;
    for (let i = 0; i < s.length; i++)
      if (!r[i] && Te(n, s[i], t)) {
        o = i;
        break;
      }
    if (o < 0) return !1;
    r[o] = 1;
  }
  return !0;
}
function Vu(e, A, t) {
  let s = ze(e), r = ze(A);
  if (s || r || (s = ke(e), r = ke(A), s || r))
    return s && r ? Qi(e, A, t) : !1;
  const n = Object.keys(e).length, o = Object.keys(A).length;
  if (n !== o)
    return !1;
  for (const i in e) {
    const a = e.hasOwnProperty(i), c = A.hasOwnProperty(i);
    if (a && !c || !a && c || !Te(e[i], A[i], t))
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
function Te(e, A, t) {
  if (e === A) return !0;
  let s = pi(e), r = pi(A);
  return s || r ? s && r ? e.getTime() === A.getTime() : !1 : (s = be(e), r = be(A), s || r ? e === A : (s = P(e), r = P(A), s || r ? s && r ? Ci(e, A, t, Pu) : !1 : (s = nA(e), r = nA(A), s || r ? !s || !r ? !1 : Ci(e, A, t, Vu) : String(e) === String(A))));
}
function Oo(e, A) {
  return e.findIndex((t) => Te(t, A));
}
const gl = (e) => !!(e && e.__v_isRef === !0), C = (e) => BA(e) ? e : e == null ? "" : P(e) || nA(e) && (e.toString === dl || !W(e.toString)) ? gl(e) ? C(e.value) : JSON.stringify(e, hl, 2) : String(e), hl = (e, A) => gl(A) ? hl(e, A.value) : ze(A) ? {
  [`Map(${A.size})`]: [...A.entries()].reduce(
    (t, [s, r], n) => (t[wn(s, n) + " =>"] = r, t),
    {}
  )
} : ke(A) ? {
  [`Set(${A.size})`]: [...A.values()].map((t) => wn(t))
} : be(A) ? wn(A) : nA(A) && !P(A) && !Pr(A) ? String(A) : A, wn = (e, A = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    be(e) ? `Symbol(${(t = e.description) != null ? t : A})` : e
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let yA;
class Gu {
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
function Xu() {
  return yA;
}
let cA;
const bn = /* @__PURE__ */ new WeakSet();
class pl {
  constructor(A) {
    this.fn = A, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, yA && (yA.active ? yA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, bn.has(this) && (bn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || bl(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Ui(this), Ql(this);
    const A = cA, t = ee;
    cA = this, ee = !0;
    try {
      return this.fn();
    } finally {
      Cl(this), cA = A, ee = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let A = this.deps; A; A = A.nextDep)
        Po(A);
      this.deps = this.depsTail = void 0, Ui(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? bn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Ao(this) && this.run();
  }
  get dirty() {
    return Ao(this);
  }
}
let wl = 0, us, ds;
function bl(e, A = !1) {
  if (e.flags |= 8, A) {
    e.next = ds, ds = e;
    return;
  }
  e.next = us, us = e;
}
function Mo() {
  wl++;
}
function No() {
  if (--wl > 0)
    return;
  if (ds) {
    let A = ds;
    for (ds = void 0; A; ) {
      const t = A.next;
      A.next = void 0, A.flags &= -9, A = t;
    }
  }
  let e;
  for (; us; ) {
    let A = us;
    for (us = void 0; A; ) {
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
function Ql(e) {
  for (let A = e.deps; A; A = A.nextDep)
    A.version = -1, A.prevActiveLink = A.dep.activeLink, A.dep.activeLink = A;
}
function Cl(e) {
  let A, t = e.depsTail, s = t;
  for (; s; ) {
    const r = s.prevDep;
    s.version === -1 ? (s === t && (t = r), Po(s), Ju(s)) : A = s, s.dep.activeLink = s.prevActiveLink, s.prevActiveLink = void 0, s = r;
  }
  e.deps = A, e.depsTail = t;
}
function Ao(e) {
  for (let A = e.deps; A; A = A.nextDep)
    if (A.dep.version !== A.version || A.dep.computed && (Ul(A.dep.computed) || A.dep.version !== A.version))
      return !0;
  return !!e._dirty;
}
function Ul(e) {
  if (e.flags & 4 && !(e.flags & 16) || (e.flags &= -17, e.globalVersion === ms) || (e.globalVersion = ms, !e.isSSR && e.flags & 128 && (!e.deps && !e._dirty || !Ao(e))))
    return;
  e.flags |= 2;
  const A = e.dep, t = cA, s = ee;
  cA = e, ee = !0;
  try {
    Ql(e);
    const r = e.fn(e._value);
    (A.version === 0 || Ie(r, e._value)) && (e.flags |= 128, e._value = r, A.version++);
  } catch (r) {
    throw A.version++, r;
  } finally {
    cA = t, ee = s, Cl(e), e.flags &= -3;
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
function Ju(e) {
  const { prevDep: A, nextDep: t } = e;
  A && (A.nextDep = t, e.prevDep = void 0), t && (t.prevDep = A, e.nextDep = void 0);
}
let ee = !0;
const Fl = [];
function Ke() {
  Fl.push(ee), ee = !1;
}
function De() {
  const e = Fl.pop();
  ee = e === void 0 ? !0 : e;
}
function Ui(e) {
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
let ms = 0;
class Wu {
  constructor(A, t) {
    this.sub = A, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class ml {
  // TODO isolatedDeclarations "__v_skip"
  constructor(A) {
    this.computed = A, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(A) {
    if (!cA || !ee || cA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== cA)
      t = this.activeLink = new Wu(cA, this), cA.deps ? (t.prevDep = cA.depsTail, cA.depsTail.nextDep = t, cA.depsTail = t) : cA.deps = cA.depsTail = t, xl(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const s = t.nextDep;
      s.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = s), t.prevDep = cA.depsTail, t.nextDep = void 0, cA.depsTail.nextDep = t, cA.depsTail = t, cA.deps === t && (cA.deps = s);
    }
    return t;
  }
  trigger(A) {
    this.version++, ms++, this.notify(A);
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
function xl(e) {
  if (e.dep.sc++, e.sub.flags & 4) {
    const A = e.dep.computed;
    if (A && !e.dep.subs) {
      A.flags |= 20;
      for (let s = A.deps; s; s = s.nextDep)
        xl(s);
    }
    const t = e.dep.subs;
    t !== e && (e.prevSub = t, t && (t.nextSub = e)), e.dep.subs = e;
  }
}
const eo = /* @__PURE__ */ new WeakMap(), Bt = /* @__PURE__ */ Symbol(
  ""
), to = /* @__PURE__ */ Symbol(
  ""
), xs = /* @__PURE__ */ Symbol(
  ""
);
function SA(e, A, t) {
  if (ee && cA) {
    let s = eo.get(e);
    s || eo.set(e, s = /* @__PURE__ */ new Map());
    let r = s.get(t);
    r || (s.set(t, r = new ml()), r.map = s, r.key = t), r.track();
  }
}
function _e(e, A, t, s, r, n) {
  const o = eo.get(e);
  if (!o) {
    ms++;
    return;
  }
  const i = (a) => {
    a && a.trigger();
  };
  if (Mo(), A === "clear")
    o.forEach(i);
  else {
    const a = P(e), c = a && Ro(t);
    if (a && t === "length") {
      const u = Number(s);
      o.forEach((l, f) => {
        (f === "length" || f === xs || !be(f) && f >= u) && i(l);
      });
    } else
      switch ((t !== void 0 || o.has(void 0)) && i(o.get(t)), c && i(o.get(xs)), A) {
        case "add":
          a ? c && i(o.get("length")) : (i(o.get(Bt)), ze(e) && i(o.get(to)));
          break;
        case "delete":
          a || (i(o.get(Bt)), ze(e) && i(o.get(to)));
          break;
        case "set":
          ze(e) && i(o.get(Bt));
          break;
      }
  }
  No();
}
function Qt(e) {
  const A = /* @__PURE__ */ rA(e);
  return A === e || (SA(A, "iterate", xs), /* @__PURE__ */ te(e)) ? A : /* @__PURE__ */ Re(e) ? /* @__PURE__ */ Ze(e) ? A.map((t) => At(Qe(t))) : A.map(At) : A.map(Qe);
}
function Wr(e) {
  return SA(e = /* @__PURE__ */ rA(e), "iterate", xs), e;
}
function fe(e, A) {
  return /* @__PURE__ */ Re(e) ? At(/* @__PURE__ */ Ze(e) ? Qe(A) : A) : Qe(A);
}
const Yu = {
  __proto__: null,
  [Symbol.iterator]() {
    return Qn(this, Symbol.iterator, (e) => fe(this, e));
  },
  concat(...e) {
    return Qt(this).concat(
      ...e.map((A) => P(A) ? Qt(A) : A)
    );
  },
  entries() {
    return Qn(this, "entries", (e) => (e[1] = fe(this, e[1]), e));
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
      (t) => t.map((s) => fe(this, s)),
      arguments
    );
  },
  find(e, A) {
    return me(
      this,
      "find",
      e,
      A,
      (t) => fe(this, t),
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
      (t) => fe(this, t),
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
    return Cn(this, "includes", e);
  },
  indexOf(...e) {
    return Cn(this, "indexOf", e);
  },
  join(e) {
    return Qt(this).join(e);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...e) {
    return Cn(this, "lastIndexOf", e);
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
    return Fi(this, "reduce", e, A);
  },
  reduceRight(e, ...A) {
    return Fi(this, "reduceRight", e, A);
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
    return Qn(this, "values", (e) => fe(this, e));
  }
};
function Qn(e, A, t) {
  const s = Wr(e), r = s[A]();
  return s !== e && !/* @__PURE__ */ te(e) && (r._next = r.next, r.next = () => {
    const n = r._next();
    return n.done || (n.value = t(n.value)), n;
  }), r;
}
const ju = Array.prototype;
function me(e, A, t, s, r, n) {
  const o = Wr(e), i = o !== e && !/* @__PURE__ */ te(e), a = o[A];
  if (a !== ju[A]) {
    const l = a.apply(e, n);
    return i ? Qe(l) : l;
  }
  let c = t;
  o !== e && (i ? c = function(l, f) {
    return t.call(this, fe(e, l), f, e);
  } : t.length > 2 && (c = function(l, f) {
    return t.call(this, l, f, e);
  }));
  const u = a.call(o, c, s);
  return i && r ? r(u) : u;
}
function Fi(e, A, t, s) {
  const r = Wr(e), n = r !== e && !/* @__PURE__ */ te(e);
  let o = t, i = !1;
  r !== e && (n ? (i = s.length === 0, o = function(c, u, l) {
    return i && (i = !1, c = fe(e, c)), t.call(this, c, fe(e, u), l, e);
  }) : t.length > 3 && (o = function(c, u, l) {
    return t.call(this, c, u, l, e);
  }));
  const a = r[A](o, ...s);
  return i ? fe(e, a) : a;
}
function Cn(e, A, t) {
  const s = /* @__PURE__ */ rA(e);
  SA(s, "iterate", xs);
  const r = s[A](...t);
  return (r === -1 || r === !1) && /* @__PURE__ */ Jo(t[0]) ? (t[0] = /* @__PURE__ */ rA(t[0]), s[A](...t)) : r;
}
function Jt(e, A, t = []) {
  Ke(), Mo();
  const s = (/* @__PURE__ */ rA(e))[A].apply(e, t);
  return No(), De(), s;
}
const zu = /* @__PURE__ */ Ko("__proto__,__v_isRef,__isVue"), vl = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((e) => e !== "arguments" && e !== "caller").map((e) => Symbol[e]).filter(be)
);
function Zu(e) {
  be(e) || (e = String(e));
  const A = /* @__PURE__ */ rA(this);
  return SA(A, "has", e), A.hasOwnProperty(e);
}
class yl {
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
      return s === (r ? n ? id : _l : n ? Il : Hl).get(A) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(A) === Object.getPrototypeOf(s) ? A : void 0;
    const o = P(A);
    if (!r) {
      let a;
      if (o && (a = Yu[t]))
        return a;
      if (t === "hasOwnProperty")
        return Zu;
    }
    const i = Reflect.get(
      A,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ OA(A) ? A : s
    );
    if ((be(t) ? vl.has(t) : zu(t)) || (r || SA(A, "get", t), n))
      return i;
    if (/* @__PURE__ */ OA(i)) {
      const a = o && Ro(t) ? i : i.value;
      return r && nA(a) ? /* @__PURE__ */ ro(a) : a;
    }
    return nA(i) ? r ? /* @__PURE__ */ ro(i) : /* @__PURE__ */ Go(i) : i;
  }
}
class El extends yl {
  constructor(A = !1) {
    super(!1, A);
  }
  set(A, t, s, r) {
    let n = A[t];
    const o = P(A) && Ro(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Re(n);
      if (!/* @__PURE__ */ te(s) && !/* @__PURE__ */ Re(s) && (n = /* @__PURE__ */ rA(n), s = /* @__PURE__ */ rA(s)), !o && /* @__PURE__ */ OA(n) && !/* @__PURE__ */ OA(s))
        return c || (n.value = s), !0;
    }
    const i = o ? Number(t) < A.length : AA(A, t), a = Reflect.set(
      A,
      t,
      s,
      /* @__PURE__ */ OA(A) ? A : r
    );
    return A === /* @__PURE__ */ rA(r) && a && (i ? Ie(s, n) && _e(A, "set", t, s) : _e(A, "add", t, s)), a;
  }
  deleteProperty(A, t) {
    const s = AA(A, t);
    A[t];
    const r = Reflect.deleteProperty(A, t);
    return r && s && _e(A, "delete", t, void 0), r;
  }
  has(A, t) {
    const s = Reflect.has(A, t);
    return (!be(t) || !vl.has(t)) && SA(A, "has", t), s;
  }
  ownKeys(A) {
    return SA(
      A,
      "iterate",
      P(A) ? "length" : Bt
    ), Reflect.ownKeys(A);
  }
}
class qu extends yl {
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
const $u = /* @__PURE__ */ new El(), Ad = /* @__PURE__ */ new qu(), ed = /* @__PURE__ */ new El(!0);
const so = (e) => e, Gs = (e) => Reflect.getPrototypeOf(e);
function td(e, A, t) {
  return function(...s) {
    const r = this.__v_raw, n = /* @__PURE__ */ rA(r), o = ze(n), i = e === "entries" || e === Symbol.iterator && o, a = e === "keys" && o, c = r[e](...s), u = t ? so : A ? At : Qe;
    return !A && SA(
      n,
      "iterate",
      a ? to : Bt
    ), CA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: l, done: f } = c.next();
          return f ? { value: l, done: f } : {
            value: i ? [u(l[0]), u(l[1])] : u(l),
            done: f
          };
        }
      }
    );
  };
}
function Xs(e) {
  return function(...A) {
    return e === "delete" ? !1 : e === "clear" ? void 0 : this;
  };
}
function sd(e, A) {
  const t = {
    get(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      e || (Ie(r, i) && SA(o, "get", r), SA(o, "get", i));
      const { has: a } = Gs(o), c = A ? so : e ? At : Qe;
      if (a.call(o, r))
        return c(n.get(r));
      if (a.call(o, i))
        return c(n.get(i));
      n !== o && n.get(r);
    },
    get size() {
      const r = this.__v_raw;
      return !e && SA(/* @__PURE__ */ rA(r), "iterate", Bt), r.size;
    },
    has(r) {
      const n = this.__v_raw, o = /* @__PURE__ */ rA(n), i = /* @__PURE__ */ rA(r);
      return e || (Ie(r, i) && SA(o, "has", r), SA(o, "has", i)), r === i ? n.has(r) : n.has(r) || n.has(i);
    },
    forEach(r, n) {
      const o = this, i = o.__v_raw, a = /* @__PURE__ */ rA(i), c = A ? so : e ? At : Qe;
      return !e && SA(a, "iterate", Bt), i.forEach((u, l) => r.call(n, c(u), c(l), o));
    }
  };
  return CA(
    t,
    e ? {
      add: Xs("add"),
      set: Xs("set"),
      delete: Xs("delete"),
      clear: Xs("clear")
    } : {
      add(r) {
        const n = /* @__PURE__ */ rA(this), o = Gs(n), i = /* @__PURE__ */ rA(r), a = !A && !/* @__PURE__ */ te(r) && !/* @__PURE__ */ Re(r) ? i : r;
        return o.has.call(n, a) || Ie(r, a) && o.has.call(n, r) || Ie(i, a) && o.has.call(n, i) || (n.add(a), _e(n, "add", a, a)), this;
      },
      set(r, n) {
        !A && !/* @__PURE__ */ te(n) && !/* @__PURE__ */ Re(n) && (n = /* @__PURE__ */ rA(n));
        const o = /* @__PURE__ */ rA(this), { has: i, get: a } = Gs(o);
        let c = i.call(o, r);
        c || (r = /* @__PURE__ */ rA(r), c = i.call(o, r));
        const u = a.call(o, r);
        return o.set(r, n), c ? Ie(n, u) && _e(o, "set", r, n) : _e(o, "add", r, n), this;
      },
      delete(r) {
        const n = /* @__PURE__ */ rA(this), { has: o, get: i } = Gs(n);
        let a = o.call(n, r);
        a || (r = /* @__PURE__ */ rA(r), a = o.call(n, r)), i && i.call(n, r);
        const c = n.delete(r);
        return a && _e(n, "delete", r, void 0), c;
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
    t[r] = td(r, e, A);
  }), t;
}
function Vo(e, A) {
  const t = sd(e, A);
  return (s, r, n) => r === "__v_isReactive" ? !e : r === "__v_isReadonly" ? e : r === "__v_raw" ? s : Reflect.get(
    AA(t, r) && r in s ? t : s,
    r,
    n
  );
}
const rd = {
  get: /* @__PURE__ */ Vo(!1, !1)
}, nd = {
  get: /* @__PURE__ */ Vo(!1, !0)
}, od = {
  get: /* @__PURE__ */ Vo(!0, !1)
};
const Hl = /* @__PURE__ */ new WeakMap(), Il = /* @__PURE__ */ new WeakMap(), _l = /* @__PURE__ */ new WeakMap(), id = /* @__PURE__ */ new WeakMap();
function ad(e) {
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
  return /* @__PURE__ */ Re(e) ? e : Xo(
    e,
    !1,
    $u,
    rd,
    Hl
  );
}
// @__NO_SIDE_EFFECTS__
function ld(e) {
  return Xo(
    e,
    !1,
    ed,
    nd,
    Il
  );
}
// @__NO_SIDE_EFFECTS__
function ro(e) {
  return Xo(
    e,
    !0,
    Ad,
    od,
    _l
  );
}
function Xo(e, A, t, s, r) {
  if (!nA(e) || e.__v_raw && !(A && e.__v_isReactive) || e.__v_skip || !Object.isExtensible(e))
    return e;
  const n = r.get(e);
  if (n)
    return n;
  const o = ad(Lu(e));
  if (o === 0)
    return e;
  const i = new Proxy(
    e,
    o === 2 ? s : t
  );
  return r.set(e, i), i;
}
// @__NO_SIDE_EFFECTS__
function Ze(e) {
  return /* @__PURE__ */ Re(e) ? /* @__PURE__ */ Ze(e.__v_raw) : !!(e && e.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Re(e) {
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
function cd(e) {
  return !AA(e, "__v_skip") && Object.isExtensible(e) && fl(e, "__v_skip", !0), e;
}
const Qe = (e) => nA(e) ? /* @__PURE__ */ Go(e) : e, At = (e) => nA(e) ? /* @__PURE__ */ ro(e) : e;
// @__NO_SIDE_EFFECTS__
function OA(e) {
  return e ? e.__v_isRef === !0 : !1;
}
function Sl(e) {
  return /* @__PURE__ */ OA(e) ? e.value : e;
}
const ud = {
  get: (e, A, t) => A === "__v_raw" ? e : Sl(Reflect.get(e, A, t)),
  set: (e, A, t, s) => {
    const r = e[A];
    return /* @__PURE__ */ OA(r) && !/* @__PURE__ */ OA(t) ? (r.value = t, !0) : Reflect.set(e, A, t, s);
  }
};
function Ll(e) {
  return /* @__PURE__ */ Ze(e) ? e : new Proxy(e, ud);
}
class dd {
  constructor(A, t, s) {
    this.fn = A, this.setter = t, this._value = void 0, this.dep = new ml(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = ms - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = s;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    cA !== this)
      return bl(this, !0), !0;
  }
  get value() {
    const A = this.dep.track();
    return Ul(this), A && (A.version = this.dep.version), this._value;
  }
  set value(A) {
    this.setter && this.setter(A);
  }
}
// @__NO_SIDE_EFFECTS__
function fd(e, A, t = !1) {
  let s, r;
  return W(e) ? s = e : (s = e.get, r = e.set), new dd(s, r, t);
}
const Js = {}, Fr = /* @__PURE__ */ new WeakMap();
let lt;
function Bd(e, A = !1, t = lt) {
  if (t) {
    let s = Fr.get(t);
    s || Fr.set(t, s = []), s.push(e);
  }
}
function gd(e, A, t = iA) {
  const { immediate: s, deep: r, once: n, scheduler: o, augmentJob: i, call: a } = t, c = (x) => r ? x : /* @__PURE__ */ te(x) || r === !1 || r === 0 ? Se(x, 1) : Se(x);
  let u, l, f, p, b = !1, U = !1;
  if (/* @__PURE__ */ OA(e) ? (l = () => e.value, b = /* @__PURE__ */ te(e)) : /* @__PURE__ */ Ze(e) ? (l = () => c(e), b = !0) : P(e) ? (U = !0, b = e.some((x) => /* @__PURE__ */ Ze(x) || /* @__PURE__ */ te(x)), l = () => e.map((x) => {
    if (/* @__PURE__ */ OA(x))
      return x.value;
    if (/* @__PURE__ */ Ze(x))
      return c(x);
    if (W(x))
      return a ? a(x, 2) : x();
  })) : W(e) ? A ? l = a ? () => a(e, 2) : e : l = () => {
    if (f) {
      Ke();
      try {
        f();
      } finally {
        De();
      }
    }
    const x = lt;
    lt = u;
    try {
      return a ? a(e, 3, [p]) : e(p);
    } finally {
      lt = x;
    }
  } : l = he, A && r) {
    const x = l, L = r === !0 ? 1 / 0 : r;
    l = () => Se(x(), L);
  }
  const m = Xu(), _ = () => {
    u.stop(), m && m.active && Do(m.effects, u);
  };
  if (n && A) {
    const x = A;
    A = (...L) => {
      const X = x(...L);
      return _(), X;
    };
  }
  let y = U ? new Array(e.length).fill(Js) : Js;
  const w = (x) => {
    if (!(!(u.flags & 1) || !u.dirty && !x))
      if (A) {
        const L = u.run();
        if (x || r || b || (U ? L.some((X, eA) => Ie(X, y[eA])) : Ie(L, y))) {
          f && f();
          const X = lt;
          lt = u;
          try {
            const eA = [
              L,
              // pass undefined as the old value when it's changed for the first time
              y === Js ? void 0 : U && y[0] === Js ? [] : y,
              p
            ];
            y = L, a ? a(A, 3, eA) : (
              // @ts-expect-error
              A(...eA)
            );
          } finally {
            lt = X;
          }
        }
      } else
        u.run();
  };
  return i && i(w), u = new pl(l), u.scheduler = o ? () => o(w, !1) : w, p = (x) => Bd(x, !1, u), f = u.onStop = () => {
    const x = Fr.get(u);
    if (x) {
      if (a)
        a(x, 4);
      else
        for (const L of x) L();
      Fr.delete(u);
    }
  }, A ? s ? w(!0) : y = u.run() : o ? o(w.bind(null, !0), !0) : u.run(), _.pause = u.pause.bind(u), _.resume = u.resume.bind(u), _.stop = _, _;
}
function Se(e, A = 1 / 0, t) {
  if (A <= 0 || !nA(e) || e.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(e) || 0) >= A))
    return e;
  if (t.set(e, A), A--, /* @__PURE__ */ OA(e))
    Se(e.value, A, t);
  else if (P(e))
    for (let s = 0; s < e.length; s++)
      Se(e[s], A, t);
  else if (ke(e) || ze(e))
    e.forEach((s) => {
      Se(s, A, t);
    });
  else if (Pr(e)) {
    for (const s in e)
      Se(e[s], A, t);
    for (const s of Object.getOwnPropertySymbols(e))
      Object.prototype.propertyIsEnumerable.call(e, s) && Se(e[s], A, t);
  }
  return e;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function Ks(e, A, t, s) {
  try {
    return s ? e(...s) : e();
  } catch (r) {
    Yr(r, A, t);
  }
}
function ne(e, A, t, s) {
  if (W(e)) {
    const r = Ks(e, A, t, s);
    return r && ul(r) && r.catch((n) => {
      Yr(n, A, t);
    }), r;
  }
  if (P(e)) {
    const r = [];
    for (let n = 0; n < e.length; n++)
      r.push(ne(e[n], A, t, s));
    return r;
  }
}
function Yr(e, A, t, s = !0) {
  const r = A ? A.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: o } = A && A.appContext.config || iA;
  if (A) {
    let i = A.parent;
    const a = A.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; i; ) {
      const u = i.ec;
      if (u) {
        for (let l = 0; l < u.length; l++)
          if (u[l](e, a, c) === !1)
            return;
      }
      i = i.parent;
    }
    if (n) {
      Ke(), Ks(n, null, 10, [
        e,
        a,
        c
      ]), De();
      return;
    }
  }
  hd(e, t, r, s, o);
}
function hd(e, A, t, s = !0, r = !1) {
  if (r)
    throw e;
  console.error(e);
}
const RA = [];
let ue = -1;
const _t = [];
let Ge = null, Et = 0;
const kl = /* @__PURE__ */ Promise.resolve();
let mr = null;
function Wo(e) {
  const A = mr || kl;
  return e ? A.then(this ? e.bind(this) : e) : A;
}
function pd(e) {
  let A = ue + 1, t = RA.length;
  for (; A < t; ) {
    const s = A + t >>> 1, r = RA[s], n = vs(r);
    n < e || n === e && r.flags & 2 ? A = s + 1 : t = s;
  }
  return A;
}
function Yo(e) {
  if (!(e.flags & 1)) {
    const A = vs(e), t = RA[RA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(e.flags & 2) && A >= vs(t) ? RA.push(e) : RA.splice(pd(A), 0, e), e.flags |= 1, Tl();
  }
}
function Tl() {
  mr || (mr = kl.then(Dl));
}
function wd(e) {
  if (!P(e))
    Ge && e.id === -1 ? Ge.splice(Et + 1, 0, e) : e.flags & 1 || (_t.push(e), e.flags |= 1);
  else
    for (let A = 0; A < e.length; A++)
      _t.push(e[A]);
  Tl();
}
function mi(e, A, t = ue + 1) {
  for (; t < RA.length; t++) {
    const s = RA[t];
    if (s && s.flags & 2) {
      if (e && s.id !== e.uid)
        continue;
      RA.splice(t, 1), t--, s.flags & 4 && (s.flags &= -2), s(), s.flags & 4 || (s.flags &= -2);
    }
  }
}
function Kl(e) {
  if (_t.length) {
    const A = [...new Set(_t)].sort(
      (t, s) => vs(t) - vs(s)
    );
    if (_t.length = 0, Ge) {
      for (let t = 0; t < A.length; t++)
        Ge.push(A[t]);
      return;
    }
    for (Ge = A, Et = 0; Et < Ge.length; Et++) {
      const t = Ge[Et];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ge = null, Et = 0;
  }
}
const vs = (e) => e.id == null ? e.flags & 2 ? -1 : 1 / 0 : e.id;
function Dl(e) {
  try {
    for (ue = 0; ue < RA.length; ue++) {
      const A = RA[ue];
      A && !(A.flags & 8) && (A.flags & 4 && (A.flags &= -2), Ks(
        A,
        A.i,
        A.i ? 15 : 14
      ), A.flags & 4 || (A.flags &= -2));
    }
  } finally {
    for (; ue < RA.length; ue++) {
      const A = RA[ue];
      A && (A.flags &= -2);
    }
    ue = -1, RA.length = 0, Kl(), mr = null, (RA.length || _t.length) && Dl();
  }
}
let JA = null, Rl = null;
function xr(e) {
  const A = JA;
  return JA = e, Rl = e && e.type.__scopeId || null, A;
}
function bd(e, A = JA, t) {
  if (!A || e._n)
    return e;
  const s = (...r) => {
    s._d && Ki(-1);
    const n = xr(A), o = gt.length;
    let i;
    try {
      i = e(...r);
    } finally {
      for (let a = gt.length; a > o; a--) cc();
      xr(n), s._d && Ki(1);
    }
    return i;
  };
  return s._n = !0, s._c = !0, s._d = !0, s;
}
function QA(e, A) {
  if (JA === null)
    return e;
  const t = $r(JA), s = e.dirs || (e.dirs = []);
  for (let r = 0; r < A.length; r++) {
    let [n, o, i, a = iA] = A[r];
    n && (W(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && Se(o), s.push({
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
function ot(e, A, t, s) {
  const r = e.dirs, n = A && A.dirs;
  for (let o = 0; o < r.length; o++) {
    const i = r[o];
    n && (i.oldValue = n[o].value);
    let a = i.dir[s];
    a && (Ke(), ne(a, t, 8, [
      e.el,
      i,
      e,
      A
    ]), De());
  }
}
function Qd(e, A) {
  if (LA) {
    let t = LA.provides;
    const s = LA.parent && LA.parent.provides;
    s === t && (t = LA.provides = Object.create(s)), t[e] = A;
  }
}
function pr(e, A, t = !1) {
  const s = Cf();
  if (s || St) {
    let r = St ? St._context.provides : s ? s.parent == null || s.ce ? s.vnode.appContext && s.vnode.appContext.provides : s.parent.provides : void 0;
    if (r && e in r)
      return r[e];
    if (arguments.length > 1)
      return t && W(A) ? A.call(s && s.proxy) : A;
  }
}
const Cd = /* @__PURE__ */ Symbol.for("v-scx"), Ud = () => pr(Cd);
function Un(e, A, t) {
  return Ol(e, A, t);
}
function Ol(e, A, t = iA) {
  const { immediate: s, deep: r, flush: n, once: o } = t, i = CA({}, t), a = A && s || !A && n !== "post";
  let c;
  if (Hs) {
    if (n === "sync") {
      const p = Ud();
      c = p.__watcherHandles || (p.__watcherHandles = []);
    } else if (!a) {
      const p = () => {
      };
      return p.stop = he, p.resume = he, p.pause = he, p;
    }
  }
  const u = LA;
  i.call = (p, b, U) => ne(p, u, b, U);
  let l = !1;
  n === "post" ? i.scheduler = (p) => {
    MA(p, u && u.suspense);
  } : n !== "sync" && (l = !0, i.scheduler = (p, b) => {
    b ? p() : Yo(p);
  }), i.augmentJob = (p) => {
    A && (p.flags |= 4), l && (p.flags |= 2, u && (p.id = u.uid, p.i = u));
  };
  const f = gd(e, A, i);
  return Hs && (c ? c.push(f) : a && f()), f;
}
function Fd(e, A, t) {
  const s = this.proxy, r = BA(e) ? e.includes(".") ? Ml(s, e) : () => s[e] : e.bind(s, s);
  let n;
  W(A) ? n = A : (n = A.handler, t = A);
  const o = Ds(this), i = Ol(r, n.bind(s), t);
  return o(), i;
}
function Ml(e, A) {
  const t = A.split(".");
  return () => {
    let s = e;
    for (let r = 0; r < t.length && s; r++)
      s = s[t[r]];
    return s;
  };
}
const md = /* @__PURE__ */ Symbol("_vte"), jr = (e) => e.__isTeleport, Fn = /* @__PURE__ */ Symbol("_leaveCb");
function xd(e) {
  let A = e[0];
  if (e.length > 1) {
    for (const t of e)
      if (t.type !== Oe) {
        A = t;
        break;
      }
  }
  return A;
}
function Nl(e) {
  if (!zo(e))
    return jr(e.type) && e.children ? xd(e.children) : e;
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
function jo(e, A) {
  if (e.shapeFlag & 6 && e.component) {
    e.transition = A;
    const t = e.component.subTree;
    jo(
      jr(t.type) && Nl(t) || t,
      A
    );
  } else e.shapeFlag & 128 ? (e.ssContent.transition = A.clone(e.ssContent), e.ssFallback.transition = A.clone(e.ssFallback)) : e.transition = A;
}
// @__NO_SIDE_EFFECTS__
function vd(e, A) {
  return W(e) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    CA({ name: e.name }, A, { setup: e })
  ) : e;
}
function Pl(e) {
  e.ids = [e.ids[0] + e.ids[2]++ + "-", 0, 0];
}
function xi(e, A) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(e, A)) && !t.configurable);
}
const vr = /* @__PURE__ */ new WeakMap();
function fs(e, A, t, s, r = !1) {
  if (P(e)) {
    e.forEach(
      (U, m) => fs(
        U,
        A && (P(A) ? A[m] : A),
        t,
        s,
        r
      )
    );
    return;
  }
  if (Bs(s) && !r) {
    s.shapeFlag & 512 && s.type.__asyncResolved && s.component.subTree.component && fs(e, A, t, s.component.subTree);
    return;
  }
  const n = s.shapeFlag & 4 ? $r(s.component) : s.el, o = r ? null : n, { i, r: a } = e, c = A && A.r, u = i.refs === iA ? i.refs = {} : i.refs, l = i.setupState, f = /* @__PURE__ */ rA(l), p = l === iA ? cl : (U) => xi(u, U) ? !1 : AA(f, U), b = (U, m) => !(m && xi(u, m));
  if (c != null && c !== a) {
    if (vi(A), BA(c))
      u[c] = null, p(c) && (l[c] = null);
    else if (/* @__PURE__ */ OA(c)) {
      const U = A;
      b(c, U.k) && (c.value = null), U.k && (u[U.k] = null);
    }
  }
  if (W(a))
    Ks(a, i, 12, [o, u]);
  else {
    const U = BA(a), m = /* @__PURE__ */ OA(a);
    if (U || m) {
      const _ = () => {
        if (e.f) {
          const y = U ? p(a) ? l[a] : u[a] : b() || !e.k ? a.value : u[e.k];
          if (r)
            P(y) && Do(y, n);
          else if (P(y))
            y.includes(n) || y.push(n);
          else if (U)
            u[a] = [n], p(a) && (l[a] = u[a]);
          else {
            const w = [n];
            b(a, e.k) && (a.value = w), e.k && (u[e.k] = w);
          }
        } else U ? (u[a] = o, p(a) && (l[a] = o)) : m && (b(a, e.k) && (a.value = o), e.k && (u[e.k] = o));
      };
      if (o) {
        const y = () => {
          _(), vr.delete(e);
        };
        y.id = -1, vr.set(e, y), MA(y, t);
      } else
        vi(e), _();
    }
  }
}
function vi(e) {
  const A = vr.get(e);
  A && (A.flags |= 8, vr.delete(e));
}
Jr().requestIdleCallback;
Jr().cancelIdleCallback;
const Bs = (e) => !!e.type.__asyncLoader, zo = (e) => e.type.__isKeepAlive;
function yd(e, A) {
  Vl(e, "a", A);
}
function Ed(e, A) {
  Vl(e, "da", A);
}
function Vl(e, A, t = LA) {
  const s = e.__wdc || (e.__wdc = () => {
    let r = t;
    for (; r; ) {
      if (r.isDeactivated)
        return;
      r = r.parent;
    }
    return e();
  });
  if (zr(A, s, t), t) {
    let r = t.parent;
    for (; r && r.parent; )
      zo(r.parent.vnode) && Hd(s, A, t, r), r = r.parent;
  }
}
function Hd(e, A, t, s) {
  const r = zr(
    A,
    e,
    s,
    !0
    /* prepend */
  );
  Gl(() => {
    Do(s[A], r);
  }, t);
}
function zr(e, A, t = LA, s = !1) {
  if (t) {
    const r = t[e] || (t[e] = []), n = A.__weh || (A.__weh = (...o) => {
      Ke();
      const i = Ds(t), a = ne(A, t, e, o);
      return i(), De(), a;
    });
    return s ? r.unshift(n) : r.push(n), n;
  }
}
const Me = (e) => (A, t = LA) => {
  (!Hs || e === "sp") && zr(e, (...s) => A(...s), t);
}, Id = Me("bm"), _d = Me("m"), Sd = Me(
  "bu"
), Ld = Me("u"), kd = Me(
  "bum"
), Gl = Me("um"), Td = Me(
  "sp"
), Kd = Me("rtg"), Dd = Me("rtc");
function Rd(e, A = LA) {
  zr("ec", e, A);
}
const Xl = "components";
function Od(e, A) {
  return Jl(Xl, e, !0, A) || e;
}
const Md = /* @__PURE__ */ Symbol.for("v-ndc");
function Nd(e) {
  return BA(e) && Jl(Xl, e, !1) || e;
}
function Jl(e, A, t = !0, s = !1) {
  const r = JA || LA;
  if (r) {
    const n = r.type;
    {
      const i = vf(
        n,
        !1
      );
      if (i && (i === A || i === xA(A) || i === Gr(xA(A))))
        return n;
    }
    const o = (
      // local registration
      // check instance[type] first which is resolved for options API
      yi(r[e] || n[e], A) || // global registration
      yi(r.appContext[e], A)
    );
    return !o && s ? n : o;
  }
}
function yi(e, A) {
  return e && (e[A] || e[xA(A)] || e[Gr(xA(A))]);
}
function j(e, A, t, s) {
  let r;
  const n = t, o = P(e);
  if (o || BA(e)) {
    const i = o && /* @__PURE__ */ Ze(e);
    let a = !1, c = !1;
    i && (a = !/* @__PURE__ */ te(e), c = /* @__PURE__ */ Re(e), e = Wr(e)), r = new Array(e.length);
    for (let u = 0, l = e.length; u < l; u++)
      r[u] = A(
        a ? c ? At(Qe(e[u])) : Qe(e[u]) : e[u],
        u,
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
        (i, a) => A(i, a, void 0, n)
      );
    else {
      const i = Object.keys(e);
      r = new Array(i.length);
      for (let a = 0, c = i.length; a < c; a++) {
        const u = i[a];
        r[a] = A(e[u], u, a, n);
      }
    }
  else
    r = [];
  return r;
}
const no = (e) => e ? Bc(e) ? $r(e) : no(e.parent) : null, gs = (
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
    $parent: (e) => no(e.parent),
    $root: (e) => no(e.root),
    $host: (e) => e.ce,
    $emit: (e) => e.emit,
    $options: (e) => Yl(e),
    $forceUpdate: (e) => e.f || (e.f = () => {
      Yo(e.update);
    }),
    $nextTick: (e) => e.n || (e.n = Wo.bind(e.proxy)),
    $watch: (e) => Fd.bind(e)
  })
), mn = (e, A) => e !== iA && !e.__isScriptSetup && AA(e, A), Pd = {
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
        if (mn(s, A))
          return o[A] = 1, s[A];
        if (r !== iA && AA(r, A))
          return o[A] = 2, r[A];
        if (AA(n, A))
          return o[A] = 3, n[A];
        if (t !== iA && AA(t, A))
          return o[A] = 4, t[A];
        oo && (o[A] = 0);
      }
    }
    const c = gs[A];
    let u, l;
    if (c)
      return A === "$attrs" && SA(e.attrs, "get", ""), c(e);
    if (
      // css module (injected by vue-loader)
      (u = i.__cssModules) && (u = u[A])
    )
      return u;
    if (t !== iA && AA(t, A))
      return o[A] = 4, t[A];
    if (
      // global properties
      l = a.config.globalProperties, AA(l, A)
    )
      return l[A];
  },
  set({ _: e }, A, t) {
    const { data: s, setupState: r, ctx: n } = e;
    return mn(r, A) ? (r[A] = t, !0) : s !== iA && AA(s, A) ? (s[A] = t, !0) : AA(e.props, A) || A[0] === "$" && A.slice(1) in e ? !1 : (n[A] = t, !0);
  },
  has({
    _: { data: e, setupState: A, accessCache: t, ctx: s, appContext: r, props: n, type: o }
  }, i) {
    let a;
    return !!(t[i] || e !== iA && i[0] !== "$" && AA(e, i) || mn(A, i) || AA(n, i) || AA(s, i) || AA(gs, i) || AA(r.config.globalProperties, i) || (a = o.__cssModules) && a[i]);
  },
  defineProperty(e, A, t) {
    return t.get != null ? e._.accessCache[A] = 0 : AA(t, "value") && this.set(e, A, t.value, null), Reflect.defineProperty(e, A, t);
  }
};
function Ei(e) {
  return P(e) ? e.reduce(
    (A, t) => (A[t] = null, A),
    {}
  ) : e;
}
let oo = !0;
function Vd(e) {
  const A = Yl(e), t = e.proxy, s = e.ctx;
  oo = !1, A.beforeCreate && Hi(A.beforeCreate, e, "bc");
  const {
    // state
    data: r,
    computed: n,
    methods: o,
    watch: i,
    provide: a,
    inject: c,
    // lifecycle
    created: u,
    beforeMount: l,
    mounted: f,
    beforeUpdate: p,
    updated: b,
    activated: U,
    deactivated: m,
    beforeDestroy: _,
    beforeUnmount: y,
    destroyed: w,
    unmounted: x,
    render: L,
    renderTracked: X,
    renderTriggered: eA,
    errorCaptured: UA,
    serverPrefetch: dA,
    // public API
    expose: st,
    inheritAttrs: Pt,
    // assets
    components: Ms,
    directives: Ns,
    filters: gn
  } = A;
  if (c && Gd(c, s, null), o)
    for (const gA in o) {
      const aA = o[gA];
      W(aA) && (s[gA] = aA.bind(t));
    }
  if (r) {
    const gA = r.call(t, t);
    nA(gA) && (e.data = /* @__PURE__ */ Go(gA));
  }
  if (oo = !0, n)
    for (const gA in n) {
      const aA = n[gA], rt = W(aA) ? aA.bind(t, t) : W(aA.get) ? aA.get.bind(t, t) : he, Ps = !W(aA) && W(aA.set) ? aA.set.bind(t) : he, nt = Ef({
        get: rt,
        set: Ps
      });
      Object.defineProperty(s, gA, {
        enumerable: !0,
        configurable: !0,
        get: () => nt.value,
        set: (qA) => nt.value = qA
      });
    }
  if (i)
    for (const gA in i)
      Wl(i[gA], s, t, gA);
  if (a) {
    const gA = W(a) ? a.call(t) : a;
    Reflect.ownKeys(gA).forEach((aA) => {
      Qd(aA, gA[aA]);
    });
  }
  u && Hi(u, e, "c");
  function TA(gA, aA) {
    P(aA) ? aA.forEach((rt) => gA(rt.bind(t))) : aA && gA(aA.bind(t));
  }
  if (TA(Id, l), TA(_d, f), TA(Sd, p), TA(Ld, b), TA(yd, U), TA(Ed, m), TA(Rd, UA), TA(Dd, X), TA(Kd, eA), TA(kd, y), TA(Gl, x), TA(Td, dA), P(st))
    if (st.length) {
      const gA = e.exposed || (e.exposed = {});
      st.forEach((aA) => {
        Object.defineProperty(gA, aA, {
          get: () => t[aA],
          set: (rt) => t[aA] = rt,
          enumerable: !0
        });
      });
    } else e.exposed || (e.exposed = {});
  L && e.render === he && (e.render = L), Pt != null && (e.inheritAttrs = Pt), Ms && (e.components = Ms), Ns && (e.directives = Ns), dA && Pl(e);
}
function Gd(e, A, t = he) {
  P(e) && (e = io(e));
  for (const s in e) {
    const r = e[s];
    let n;
    nA(r) ? "default" in r ? n = pr(
      r.from || s,
      r.default,
      !0
    ) : n = pr(r.from || s) : n = pr(r), /* @__PURE__ */ OA(n) ? Object.defineProperty(A, s, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (o) => n.value = o
    }) : A[s] = n;
  }
}
function Hi(e, A, t) {
  ne(
    P(e) ? e.map((s) => s.bind(A.proxy)) : e.bind(A.proxy),
    A,
    t
  );
}
function Wl(e, A, t, s) {
  let r = s.includes(".") ? Ml(t, s) : () => t[s];
  if (BA(e)) {
    const n = A[e];
    W(n) && Un(r, n);
  } else if (W(e))
    Un(r, e.bind(t));
  else if (nA(e))
    if (P(e))
      e.forEach((n) => Wl(n, A, t, s));
    else {
      const n = W(e.handler) ? e.handler.bind(t) : A[e.handler];
      W(n) && Un(r, n, e);
    }
}
function Yl(e) {
  const A = e.type, { mixins: t, extends: s } = A, {
    mixins: r,
    optionsCache: n,
    config: { optionMergeStrategies: o }
  } = e.appContext, i = n.get(A);
  let a;
  return i ? a = i : !r.length && !t && !s ? a = A : (a = {}, r.length && r.forEach(
    (c) => yr(a, c, o, !0)
  ), yr(a, A, o)), nA(A) && n.set(A, a), a;
}
function yr(e, A, t, s = !1) {
  const { mixins: r, extends: n } = A;
  n && yr(e, n, t, !0), r && r.forEach(
    (o) => yr(e, o, t, !0)
  );
  for (const o in A)
    if (!(s && o === "expose")) {
      const i = Xd[o] || t && t[o];
      e[o] = i ? i(e[o], A[o]) : A[o];
    }
  return e;
}
const Xd = {
  data: Ii,
  props: _i,
  emits: _i,
  // objects
  methods: $t,
  computed: $t,
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
  components: $t,
  directives: $t,
  // watch
  watch: Wd,
  // provide / inject
  provide: Ii,
  inject: Jd
};
function Ii(e, A) {
  return A ? e ? function() {
    return CA(
      W(e) ? e.call(this, this) : e,
      W(A) ? A.call(this, this) : A
    );
  } : A : e;
}
function Jd(e, A) {
  return $t(io(e), io(A));
}
function io(e) {
  if (P(e)) {
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
function $t(e, A) {
  return e ? CA(/* @__PURE__ */ Object.create(null), e, A) : A;
}
function _i(e, A) {
  return e ? P(e) && P(A) ? [.../* @__PURE__ */ new Set([...e, ...A])] : CA(
    /* @__PURE__ */ Object.create(null),
    Ei(e),
    Ei(A ?? {})
  ) : A;
}
function Wd(e, A) {
  if (!e) return A;
  if (!A) return e;
  const t = CA(/* @__PURE__ */ Object.create(null), e);
  for (const s in A)
    t[s] = KA(e[s], A[s]);
  return t;
}
function jl() {
  return {
    app: null,
    config: {
      isNativeTag: cl,
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
let Yd = 0;
function jd(e, A) {
  return function(s, r = null) {
    W(s) || (s = CA({}, s)), r != null && !nA(r) && (r = null);
    const n = jl(), o = /* @__PURE__ */ new WeakSet(), i = [];
    let a = !1;
    const c = n.app = {
      _uid: Yd++,
      _component: s,
      _props: r,
      _container: null,
      _context: n,
      _instance: null,
      version: Hf,
      get config() {
        return n.config;
      },
      set config(u) {
      },
      use(u, ...l) {
        return o.has(u) || (u && W(u.install) ? (o.add(u), u.install(c, ...l)) : W(u) && (o.add(u), u(c, ...l))), c;
      },
      mixin(u) {
        return n.mixins.includes(u) || n.mixins.push(u), c;
      },
      component(u, l) {
        return l ? (n.components[u] = l, c) : n.components[u];
      },
      directive(u, l) {
        return l ? (n.directives[u] = l, c) : n.directives[u];
      },
      mount(u, l, f) {
        if (!a) {
          const p = c._ceVNode || pe(s, r);
          return p.appContext = n, f === !0 ? f = "svg" : f === !1 && (f = void 0), e(p, u, f), a = !0, c._container = u, u.__vue_app__ = c, $r(p.component);
        }
      },
      onUnmount(u) {
        i.push(u);
      },
      unmount() {
        a && (ne(
          i,
          c._instance,
          16
        ), e(null, c._container), delete c._container.__vue_app__);
      },
      provide(u, l) {
        return n.provides[u] = l, c;
      },
      runWithContext(u) {
        const l = St;
        St = c;
        try {
          return u();
        } finally {
          St = l;
        }
      }
    };
    return c;
  };
}
let St = null;
const zd = (e, A) => A === "modelValue" || A === "model-value" ? e.modelModifiers : e[`${A}Modifiers`] || e[`${xA(A)}Modifiers`] || e[`${XA(A)}Modifiers`];
function Zd(e, A, ...t) {
  if (e.isUnmounted) return;
  const s = e.vnode.props || iA;
  let r = t;
  const n = A.startsWith("update:"), o = n && zd(s, A.slice(7));
  o && (o.trim && (r = t.map((u) => BA(u) ? u.trim() : u)), o.number && (r = r.map(Xr)));
  let i, a = s[i = pn(A)] || // also try camelCase event handler (#2249)
  s[i = pn(xA(A))];
  !a && n && (a = s[i = pn(XA(A))]), a && ne(
    a,
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
const qd = /* @__PURE__ */ new WeakMap();
function zl(e, A, t = !1) {
  const s = t ? qd : A.emitsCache, r = s.get(e);
  if (r !== void 0)
    return r;
  const n = e.emits;
  let o = {}, i = !1;
  if (!W(e)) {
    const a = (c) => {
      const u = zl(c, A, !0);
      u && (i = !0, CA(o, u));
    };
    !t && A.mixins.length && A.mixins.forEach(a), e.extends && a(e.extends), e.mixins && e.mixins.forEach(a);
  }
  return !n && !i ? (nA(e) && s.set(e, null), null) : (P(n) ? n.forEach((a) => o[a] = null) : CA(o, n), nA(e) && s.set(e, o), o);
}
function Zr(e, A) {
  return !e || !Mr(A) ? !1 : (A = A.slice(2), A = A === "Once" ? A : A.replace(/Once$/, ""), AA(e, A[0].toLowerCase() + A.slice(1)) || AA(e, XA(A)) || AA(e, A));
}
function Si(e) {
  const {
    type: A,
    vnode: t,
    proxy: s,
    withProxy: r,
    propsOptions: [n],
    slots: o,
    attrs: i,
    emit: a,
    render: c,
    renderCache: u,
    props: l,
    data: f,
    setupState: p,
    ctx: b,
    inheritAttrs: U
  } = e, m = xr(e);
  let _, y;
  try {
    if (t.shapeFlag & 4) {
      const x = r || s, L = x;
      _ = Be(
        c.call(
          L,
          x,
          u,
          l,
          p,
          f,
          b
        )
      ), y = i;
    } else {
      const x = A;
      _ = Be(
        x.length > 1 ? x(
          l,
          { attrs: i, slots: o, emit: a }
        ) : x(
          l,
          null
        )
      ), y = A.props ? i : $d(i);
    }
  } catch (x) {
    gt.length = 0, Yr(x, e, 1), _ = pe(Oe);
  }
  let w = _;
  if (y && U !== !1) {
    const x = Object.keys(y), { shapeFlag: L } = w;
    x.length && L & 7 && (n && x.some(Nr) && (y = Af(
      y,
      n
    )), w = Dt(w, y, !1, !0));
  }
  if (t.dirs && (w = Dt(w, null, !1, !0), w.dirs = w.dirs ? w.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const x = jr(w.type) && Nl(w) || w;
    jo(x, t.transition);
  }
  return _ = w, xr(m), _;
}
const $d = (e) => {
  let A;
  for (const t in e)
    (t === "class" || t === "style" || Mr(t)) && ((A || (A = {}))[t] = e[t]);
  return A;
}, Af = (e, A) => {
  const t = {};
  for (const s in e)
    (!Nr(s) || !(s.slice(9) in A)) && (t[s] = e[s]);
  return t;
};
function ef(e, A, t) {
  const { props: s, children: r, component: n } = e, { props: o, children: i, patchFlag: a } = A, c = n.emitsOptions;
  if (A.dirs || A.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return s ? Li(s, o, c) : !!o;
    if (a & 8) {
      const u = A.dynamicProps;
      for (let l = 0; l < u.length; l++) {
        const f = u[l];
        if (Zl(o, s, f) && !Zr(c, f))
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
    if (Zl(A, e, n) && !Zr(t, n))
      return !0;
  }
  return !1;
}
function Zl(e, A, t) {
  const s = e[t], r = A[t];
  return t === "style" && nA(s) && nA(r) ? !Te(s, r) : s !== r;
}
function tf({ vnode: e, parent: A, suspense: t }, s) {
  for (; A; ) {
    const r = A.subTree;
    if (r.suspense && r.suspense.activeBranch === e && (r.suspense.vnode.el = r.el = s, e = r), r === e)
      (e = A.vnode).el = s, A = A.parent;
    else
      break;
  }
  t && t.activeBranch === e && (t.vnode.el = s);
}
const ql = {}, $l = () => Object.create(ql), Ac = (e) => Object.getPrototypeOf(e) === ql;
function sf(e, A, t, s = !1) {
  const r = {}, n = $l();
  e.propsDefaults = /* @__PURE__ */ Object.create(null), ec(e, A, r, n);
  for (const o in e.propsOptions[0])
    o in r || (r[o] = void 0);
  t ? e.props = s ? r : /* @__PURE__ */ ld(r) : e.type.props ? e.props = r : e.props = n, e.attrs = n;
}
function rf(e, A, t, s) {
  const {
    props: r,
    attrs: n,
    vnode: { patchFlag: o }
  } = e, i = /* @__PURE__ */ rA(r), [a] = e.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (s || o > 0) && !(o & 16)
  ) {
    if (o & 8) {
      const u = e.vnode.dynamicProps;
      for (let l = 0; l < u.length; l++) {
        let f = u[l];
        if (Zr(e.emitsOptions, f))
          continue;
        const p = A[f];
        if (a)
          if (AA(n, f))
            p !== n[f] && (n[f] = p, c = !0);
          else {
            const b = xA(f);
            r[b] = ao(
              a,
              i,
              b,
              p,
              e,
              !1
            );
          }
        else
          p !== n[f] && (n[f] = p, c = !0);
      }
    }
  } else {
    ec(e, A, r, n) && (c = !0);
    let u;
    for (const l in i)
      (!A || // for camelCase
      !AA(A, l) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((u = XA(l)) === l || !AA(A, u))) && (a ? t && // for camelCase
      (t[l] !== void 0 || // for kebab-case
      t[u] !== void 0) && (r[l] = ao(
        a,
        i,
        l,
        void 0,
        e,
        !0
      )) : delete r[l]);
    if (n !== i)
      for (const l in n)
        (!A || !AA(A, l)) && (delete n[l], c = !0);
  }
  c && _e(e.attrs, "set", "");
}
function ec(e, A, t, s) {
  const [r, n] = e.propsOptions;
  let o = !1, i;
  if (A)
    for (let a in A) {
      if (cs(a))
        continue;
      const c = A[a];
      let u;
      r && AA(r, u = xA(a)) ? !n || !n.includes(u) ? t[u] = c : (i || (i = {}))[u] = c : Zr(e.emitsOptions, a) || (!(a in s) || c !== s[a]) && (s[a] = c, o = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ rA(t), c = i || iA;
    for (let u = 0; u < n.length; u++) {
      const l = n[u];
      t[l] = ao(
        r,
        a,
        l,
        c[l],
        e,
        !AA(c, l)
      );
    }
  }
  return o;
}
function ao(e, A, t, s, r, n) {
  const o = e[t];
  if (o != null) {
    const i = AA(o, "default");
    if (i && s === void 0) {
      const a = o.default;
      if (o.type !== Function && !o.skipFactory && W(a)) {
        const { propsDefaults: c } = r;
        if (t in c)
          s = c[t];
        else {
          const u = Ds(r);
          s = c[t] = a.call(
            null,
            A
          ), u();
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
const nf = /* @__PURE__ */ new WeakMap();
function tc(e, A, t = !1) {
  const s = t ? nf : A.propsCache, r = s.get(e);
  if (r)
    return r;
  const n = e.props, o = {}, i = [];
  let a = !1;
  if (!W(e)) {
    const u = (l) => {
      a = !0;
      const [f, p] = tc(l, A, !0);
      CA(o, f), p && i.push(...p);
    };
    !t && A.mixins.length && A.mixins.forEach(u), e.extends && u(e.extends), e.mixins && e.mixins.forEach(u);
  }
  if (!n && !a)
    return nA(e) && s.set(e, ut), ut;
  if (P(n))
    for (let u = 0; u < n.length; u++) {
      const l = xA(n[u]);
      ki(l) && (o[l] = iA);
    }
  else if (n)
    for (const u in n) {
      const l = xA(u);
      if (ki(l)) {
        const f = n[u], p = o[l] = P(f) || W(f) ? { type: f } : CA({}, f), b = p.type;
        let U = !1, m = !0;
        if (P(b))
          for (let _ = 0; _ < b.length; ++_) {
            const y = b[_], w = W(y) && y.name;
            if (w === "Boolean") {
              U = !0;
              break;
            } else w === "String" && (m = !1);
          }
        else
          U = W(b) && b.name === "Boolean";
        p[
          0
          /* shouldCast */
        ] = U, p[
          1
          /* shouldCastTrue */
        ] = m, (U || AA(p, "default")) && i.push(l);
      }
    }
  const c = [o, i];
  return nA(e) && s.set(e, c), c;
}
function ki(e) {
  return e[0] !== "$" && !cs(e);
}
const Zo = (e) => e === "_" || e === "_ctx" || e === "$stable", qo = (e) => P(e) ? e.map(Be) : [Be(e)], of = (e, A, t) => {
  if (A._n)
    return A;
  const s = bd((...r) => qo(A(...r)), t);
  return s._c = !1, s;
}, sc = (e, A, t) => {
  const s = e._ctx;
  for (const r in e) {
    if (Zo(r)) continue;
    const n = e[r];
    if (W(n))
      A[r] = of(r, n, s);
    else if (n != null) {
      const o = qo(n);
      A[r] = () => o;
    }
  }
}, rc = (e, A) => {
  const t = qo(A);
  e.slots.default = () => t;
}, nc = (e, A, t) => {
  for (const s in A)
    (t || !Zo(s)) && (e[s] = A[s]);
}, af = (e, A, t) => {
  const s = e.slots = $l();
  if (e.vnode.shapeFlag & 32) {
    const r = A._;
    r ? (nc(s, A, t), t && fl(s, "_", r, !0)) : sc(A, s);
  } else A && rc(e, A);
}, lf = (e, A, t) => {
  const { vnode: s, slots: r } = e;
  let n = !0, o = iA;
  if (s.shapeFlag & 32) {
    const i = A._;
    i ? t && i === 1 ? n = !1 : nc(r, A, t) : (n = !A.$stable, sc(A, r)), o = A;
  } else A && (rc(e, A), o = { default: 1 });
  if (n)
    for (const i in r)
      !Zo(i) && o[i] == null && delete r[i];
}, MA = Bf;
function cf(e) {
  return uf(e);
}
function uf(e, A) {
  const t = Jr();
  t.__VUE__ = !0;
  const {
    insert: s,
    remove: r,
    patchProp: n,
    createElement: o,
    createText: i,
    createComment: a,
    setText: c,
    setElementText: u,
    parentNode: l,
    nextSibling: f,
    setScopeId: p = he,
    insertStaticContent: b
  } = e, U = (B, Q, F, S = null, E = null, I = null, K = void 0, T = null, k = !!Q.dynamicChildren) => {
    if (B === Q)
      return;
    B && !Wt(B, Q) && (S = Vs(B), qA(B, E, I, !0), B = null), Q.patchFlag === -2 && (k = !1, Q.dynamicChildren = null), Q.dynamicChildren && B && B.dynamicChildren && B.dynamicChildren.hasOnce && (Q.dynamicChildren === ut && (Q.dynamicChildren = []), Q.dynamicChildren.hasOnce = !0);
    const { type: H, ref: G, shapeFlag: O } = Q;
    switch (H) {
      case qr:
        m(B, Q, F, S);
        break;
      case Oe:
        _(B, Q, F, S);
        break;
      case vn:
        B == null && y(Q, F, S, K);
        break;
      case M:
        Ms(
          B,
          Q,
          F,
          S,
          E,
          I,
          K,
          T,
          k
        );
        break;
      default:
        O & 1 ? L(
          B,
          Q,
          F,
          S,
          E,
          I,
          K,
          T,
          k
        ) : O & 6 ? Ns(
          B,
          Q,
          F,
          S,
          E,
          I,
          K,
          T,
          k
        ) : (O & 64 || O & 128) && H.process(
          B,
          Q,
          F,
          S,
          E,
          I,
          K,
          T,
          k,
          Gt
        );
    }
    G != null && E ? fs(G, B && B.ref, I, Q || B, !Q) : G == null && B && B.ref != null && fs(B.ref, null, I, B, !0);
  }, m = (B, Q, F, S) => {
    if (B == null)
      s(
        Q.el = i(Q.children),
        F,
        S
      );
    else {
      const E = Q.el = B.el;
      Q.children !== B.children && c(E, Q.children);
    }
  }, _ = (B, Q, F, S) => {
    B == null ? s(
      Q.el = a(Q.children || ""),
      F,
      S
    ) : Q.el = B.el;
  }, y = (B, Q, F, S) => {
    [B.el, B.anchor] = b(
      B.children,
      Q,
      F,
      S,
      B.el,
      B.anchor
    );
  }, w = ({ el: B, anchor: Q }, F, S) => {
    let E;
    for (; B && B !== Q; )
      E = f(B), s(B, F, S), B = E;
    s(Q, F, S);
  }, x = ({ el: B, anchor: Q }) => {
    let F;
    for (; B && B !== Q; )
      F = f(B), r(B), B = F;
    r(Q);
  }, L = (B, Q, F, S, E, I, K, T, k) => {
    if (Q.type === "svg" ? K = "svg" : Q.type === "math" && (K = "mathml"), B == null)
      X(
        Q,
        F,
        S,
        E,
        I,
        K,
        T,
        k
      );
    else {
      const H = B.el && B.el._isVueCE ? B.el : null;
      try {
        H && H._beginPatch(), dA(
          B,
          Q,
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
  }, X = (B, Q, F, S, E, I, K, T) => {
    let k, H;
    const { props: G, shapeFlag: O, transition: N, dirs: J } = B;
    if (k = B.el = o(
      B.type,
      I,
      G && G.is,
      G
    ), O & 8 ? u(k, B.children) : O & 16 && UA(
      B.children,
      k,
      null,
      S,
      E,
      xn(B, I),
      K,
      T
    ), J && ot(B, null, S, "created"), eA(k, B, B.scopeId, K, S), G) {
      for (const oA in G)
        oA !== "value" && !cs(oA) && n(k, oA, null, G[oA], I, S);
      "value" in G && n(k, "value", null, G.value, I), (H = G.onVnodeBeforeMount) && le(H, S, B);
    }
    J && ot(B, null, S, "beforeMount");
    const $ = df(E, N);
    $ && N.beforeEnter(k), s(k, Q, F), ((H = G && G.onVnodeMounted) || $ || J) && MA(() => {
      try {
        H && le(H, S, B), $ && N.enter(k), J && ot(B, null, S, "mounted");
      } finally {
      }
    }, E);
  }, eA = (B, Q, F, S, E) => {
    if (F && p(B, F), S)
      for (let I = 0; I < S.length; I++)
        p(B, S[I]);
    if (E) {
      let I = E.subTree;
      if (Q === I || lc(I.type) && (I.ssContent === Q || I.ssFallback === Q)) {
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
  }, UA = (B, Q, F, S, E, I, K, T, k = 0) => {
    for (let H = k; H < B.length; H++) {
      const G = B[H] = T ? He(B[H]) : Be(B[H]);
      U(
        null,
        G,
        Q,
        F,
        S,
        E,
        I,
        K,
        T
      );
    }
  }, dA = (B, Q, F, S, E, I, K) => {
    const T = Q.el = B.el;
    let { patchFlag: k, dynamicChildren: H, dirs: G } = Q;
    k |= B.patchFlag & 16;
    const O = B.props || iA, N = Q.props || iA;
    let J;
    if (F && it(F, !1), (J = N.onVnodeBeforeUpdate) && le(J, F, Q, B), G && ot(Q, B, F, "beforeUpdate"), F && it(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    H && (!B.dynamicChildren || B.dynamicChildren.length !== H.length) && (k = 0, K = !1, H = null), (O.innerHTML && N.innerHTML == null || O.textContent && N.textContent == null) && u(T, ""), H ? st(
      B.dynamicChildren,
      H,
      T,
      F,
      S,
      xn(Q, E),
      I
    ) : K || aA(
      B,
      Q,
      T,
      null,
      F,
      S,
      xn(Q, E),
      I,
      !1
    ), k > 0) {
      if (k & 16)
        Pt(T, O, N, F, E);
      else if (k & 2 && O.class !== N.class && n(T, "class", null, N.class, E), k & 4 && n(T, "style", O.style, N.style, E), k & 8) {
        const $ = Q.dynamicProps;
        for (let oA = 0; oA < $.length; oA++) {
          const sA = $[oA], FA = O[sA], vA = N[sA];
          (vA !== FA || sA === "value") && n(T, sA, FA, vA, E, F);
        }
      }
      k & 1 && B.children !== Q.children && u(T, Q.children);
    } else !K && H == null && Pt(T, O, N, F, E);
    ((J = N.onVnodeUpdated) || G) && MA(() => {
      J && le(J, F, Q, B), G && ot(Q, B, F, "updated");
    }, S);
  }, st = (B, Q, F, S, E, I, K) => {
    for (let T = 0; T < Q.length; T++) {
      const k = B[T], H = Q[T], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        k.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (k.type === M || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Wt(k, H) || // - In the case of a component, it could contain anything.
        k.shapeFlag & 198) ? l(k.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        k,
        H,
        G,
        null,
        S,
        E,
        I,
        K,
        !0
      );
    }
  }, Pt = (B, Q, F, S, E) => {
    if (Q !== F) {
      if (Q !== iA)
        for (const I in Q)
          !cs(I) && !(I in F) && n(
            B,
            I,
            Q[I],
            null,
            E,
            S
          );
      for (const I in F) {
        if (cs(I)) continue;
        const K = F[I], T = Q[I];
        K !== T && I !== "value" && n(B, I, T, K, E, S);
      }
      "value" in F && n(B, "value", Q.value, F.value, E);
    }
  }, Ms = (B, Q, F, S, E, I, K, T, k) => {
    const H = Q.el = B ? B.el : i(""), G = Q.anchor = B ? B.anchor : i("");
    let { patchFlag: O, dynamicChildren: N, slotScopeIds: J } = Q;
    J && (T = T ? T.concat(J) : J), B == null ? (s(H, F, S), s(G, F, S), UA(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      Q.children || [],
      F,
      G,
      E,
      I,
      K,
      T,
      k
    )) : O > 0 && O & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    B.dynamicChildren && B.dynamicChildren.length === N.length ? (st(
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
    (Q.key != null || E && Q === E.subTree) && oc(
      B,
      Q,
      !0
      /* shallow */
    )) : aA(
      B,
      Q,
      F,
      G,
      E,
      I,
      K,
      T,
      k
    );
  }, Ns = (B, Q, F, S, E, I, K, T, k) => {
    Q.slotScopeIds = T, B == null ? Q.shapeFlag & 512 ? E.ctx.activate(
      Q,
      F,
      S,
      K,
      k
    ) : gn(
      Q,
      F,
      S,
      E,
      I,
      K,
      k
    ) : ui(B, Q, k);
  }, gn = (B, Q, F, S, E, I, K) => {
    const T = B.component = Qf(
      B,
      S,
      E
    );
    if (zo(B) && (T.ctx.renderer = Gt), Uf(T, !1, K), T.asyncDep) {
      if (E && E.registerDep(T, TA, K), !B.el) {
        const k = T.subTree = pe(Oe);
        _(null, k, Q, F), B.placeholder = k.el;
      }
    } else
      TA(
        T,
        B,
        Q,
        F,
        E,
        I,
        K
      );
  }, ui = (B, Q, F) => {
    const S = Q.component = B.component;
    if (ef(B, Q, F))
      if (S.asyncDep && !S.asyncResolved) {
        Q.el = B.el, gA(S, Q, F);
        return;
      } else
        S.next = Q, S.update();
    else
      Q.el = B.el, S.vnode = Q;
  }, TA = (B, Q, F, S, E, I, K) => {
    const T = () => {
      if (B.isMounted) {
        let { next: O, bu: N, u: J, parent: $, vnode: oA } = B;
        {
          const ie = ic(B);
          if (ie) {
            O && (O.el = oA.el, gA(B, O, K)), ie.asyncDep.then(() => {
              MA(() => {
                B.isUnmounted || H();
              }, E);
            });
            return;
          }
        }
        let sA = O, FA;
        it(B, !1), O ? (O.el = oA.el, gA(B, O, K)) : O = oA, N && hr(N), (FA = O.props && O.props.onVnodeBeforeUpdate) && le(FA, $, O, oA), it(B, !0);
        const vA = Si(B), oe = B.subTree;
        B.subTree = vA, U(
          oe,
          vA,
          // parent may have changed if it's in a teleport
          l(oe.el),
          // anchor may have changed if it's in a fragment
          Vs(oe),
          B,
          E,
          I
        ), O.el = vA.el, sA === null && tf(B, vA.el), J && MA(J, E), (FA = O.props && O.props.onVnodeUpdated) && MA(
          () => le(FA, $, O, oA),
          E
        );
      } else {
        let O;
        const { el: N, props: J } = Q, { bm: $, m: oA, parent: sA, root: FA, type: vA } = B, oe = Bs(Q);
        it(B, !1), $ && hr($), !oe && (O = J && J.onVnodeBeforeMount) && le(O, sA, Q), it(B, !0);
        {
          FA.ce && FA.ce._hasShadowRoot() && FA.ce._injectChildStyle(
            vA,
            B.parent ? B.parent.type : void 0
          );
          const ie = B.subTree = Si(B);
          U(
            null,
            ie,
            F,
            S,
            B,
            E,
            I
          ), Q.el = ie.el;
        }
        if (oA && MA(oA, E), !oe && (O = J && J.onVnodeMounted)) {
          const ie = Q;
          MA(
            () => le(O, sA, ie),
            E
          );
        }
        (Q.shapeFlag & 256 || sA && Bs(sA.vnode) && sA.vnode.shapeFlag & 256) && B.a && MA(B.a, E), B.isMounted = !0, Q = F = S = null;
      }
    };
    B.scope.on();
    const k = B.effect = new pl(T);
    B.scope.off();
    const H = B.update = k.run.bind(k), G = B.job = k.runIfDirty.bind(k);
    G.i = B, G.id = B.uid, k.scheduler = () => Yo(G), it(B, !0), H();
  }, gA = (B, Q, F) => {
    Q.component = B;
    const S = B.vnode.props;
    B.vnode = Q, B.next = null, rf(B, Q.props, S, F), lf(B, Q.children, F), Ke(), mi(B), De();
  }, aA = (B, Q, F, S, E, I, K, T, k = !1) => {
    const H = B && B.children, G = B ? B.shapeFlag : 0, O = Q.children, { patchFlag: N, shapeFlag: J } = Q;
    if (N > 0) {
      if (N & 128) {
        Ps(
          H,
          O,
          F,
          S,
          E,
          I,
          K,
          T,
          k
        );
        return;
      } else if (N & 256) {
        rt(
          H,
          O,
          F,
          S,
          E,
          I,
          K,
          T,
          k
        );
        return;
      }
    }
    J & 8 ? (G & 16 && Vt(H, E, I), O !== H && u(F, O)) : G & 16 ? J & 16 ? Ps(
      H,
      O,
      F,
      S,
      E,
      I,
      K,
      T,
      k
    ) : Vt(H, E, I, !0) : (G & 8 && u(F, ""), J & 16 && UA(
      O,
      F,
      S,
      E,
      I,
      K,
      T,
      k
    ));
  }, rt = (B, Q, F, S, E, I, K, T, k) => {
    B = B || ut, Q = Q || ut;
    const H = B.length, G = Q.length, O = Math.min(H, G);
    let N;
    for (N = 0; N < O; N++) {
      const J = Q[N] = k ? He(Q[N]) : Be(Q[N]);
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
    H > G ? Vt(
      B,
      E,
      I,
      !0,
      !1,
      O
    ) : UA(
      Q,
      F,
      S,
      E,
      I,
      K,
      T,
      k,
      O
    );
  }, Ps = (B, Q, F, S, E, I, K, T, k) => {
    let H = 0;
    const G = Q.length;
    let O = B.length - 1, N = G - 1;
    for (; H <= O && H <= N; ) {
      const J = B[H], $ = Q[H] = k ? He(Q[H]) : Be(Q[H]);
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
      const J = B[O], $ = Q[N] = k ? He(Q[N]) : Be(Q[N]);
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
        const J = N + 1, $ = J < G ? Q[J].el : S;
        for (; H <= N; )
          U(
            null,
            Q[H] = k ? He(Q[H]) : Be(Q[H]),
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
        qA(B[H], E, I, !0), H++;
    else {
      const J = H, $ = H, oA = /* @__PURE__ */ new Map();
      for (H = $; H <= N; H++) {
        const VA = Q[H] = k ? He(Q[H]) : Be(Q[H]);
        VA.key != null && oA.set(VA.key, H);
      }
      let sA, FA = 0;
      const vA = N - $ + 1;
      let oe = !1, ie = 0;
      const Xt = new Array(vA);
      for (H = 0; H < vA; H++) Xt[H] = 0;
      for (H = J; H <= O; H++) {
        const VA = B[H];
        if (FA >= vA) {
          qA(VA, E, I, !0);
          continue;
        }
        let ae;
        if (VA.key != null)
          ae = oA.get(VA.key);
        else
          for (sA = $; sA <= N; sA++)
            if (Xt[sA - $] === 0 && Wt(VA, Q[sA])) {
              ae = sA;
              break;
            }
        ae === void 0 ? qA(VA, E, I, !0) : (Xt[ae - $] = H + 1, ae >= ie ? ie = ae : oe = !0, U(
          VA,
          Q[ae],
          F,
          null,
          E,
          I,
          K,
          T,
          k
        ), FA++);
      }
      const Bi = oe ? ff(Xt) : ut;
      for (sA = Bi.length - 1, H = vA - 1; H >= 0; H--) {
        const VA = $ + H, ae = Q[VA], gi = Q[VA + 1], hi = VA + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          gi.el || ac(gi)
        ) : S;
        Xt[H] === 0 ? U(
          null,
          ae,
          F,
          hi,
          E,
          I,
          K,
          T,
          k
        ) : oe && (sA < 0 || H !== Bi[sA] ? nt(ae, F, hi, 2) : sA--);
      }
    }
  }, nt = (B, Q, F, S, E = null) => {
    const { el: I, type: K, transition: T, children: k, shapeFlag: H } = B;
    if (H & 6) {
      nt(B.component.subTree, Q, F, S);
      return;
    }
    if (H & 128) {
      B.suspense.move(Q, F, S);
      return;
    }
    if (H & 64) {
      K.move(B, Q, F, Gt);
      return;
    }
    if (K === M) {
      s(I, Q, F);
      for (let O = 0; O < k.length; O++)
        nt(k[O], Q, F, S);
      s(B.anchor, Q, F);
      return;
    }
    if (K === vn) {
      w(B, Q, F);
      return;
    }
    if (S !== 2 && H & 1 && T)
      if (S === 0)
        T.persisted && !I[Fn] ? s(I, Q, F) : (T.beforeEnter(I), s(I, Q, F), MA(() => T.enter(I), E));
      else {
        const { leave: O, delayLeave: N, afterLeave: J } = T, $ = () => {
          B.ctx.isUnmounted ? r(I) : s(I, Q, F);
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
      s(I, Q, F);
  }, qA = (B, Q, F, S = !1, E = !1) => {
    const {
      type: I,
      props: K,
      ref: T,
      children: k,
      dynamicChildren: H,
      shapeFlag: G,
      patchFlag: O,
      dirs: N,
      cacheIndex: J,
      memo: $
    } = B;
    if ((O === -2 || H && H.hasOnce) && (E = !1), T != null && (Ke(), fs(T, null, F, B, !0), De()), J != null && (!B.ctx || B.ctx === Q) && (Q.renderCache[J] = void 0), G & 256) {
      Q.ctx.deactivate(B);
      return;
    }
    const oA = G & 1 && N, sA = !Bs(B);
    let FA;
    if (sA && (FA = K && K.onVnodeBeforeUnmount) && le(FA, Q, B), G & 6)
      _u(B.component, F, S);
    else {
      if (G & 128) {
        B.suspense.unmount(F, S);
        return;
      }
      oA && ot(B, null, Q, "beforeUnmount"), G & 64 ? B.type.remove(
        B,
        Q,
        F,
        Gt,
        S
      ) : H && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !H.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (I !== M || O > 0 && O & 64) ? Vt(
        H,
        Q,
        F,
        !1,
        !0
      ) : (I === M && O & 384 || !E && G & 16) && Vt(k, Q, F), S && di(B);
    }
    const vA = $ != null && J == null;
    (sA && (FA = K && K.onVnodeUnmounted) || oA || vA) && MA(() => {
      FA && le(FA, Q, B), oA && ot(B, null, Q, "unmounted"), vA && (B.el = null);
    }, F);
  }, di = (B) => {
    const { type: Q, el: F, anchor: S, transition: E } = B;
    if (Q === M) {
      Iu(F, S);
      return;
    }
    if (Q === vn) {
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
  }, Iu = (B, Q) => {
    let F;
    for (; B !== Q; )
      F = f(B), r(B), B = F;
    r(Q);
  }, _u = (B, Q, F) => {
    const { bum: S, scope: E, job: I, subTree: K, um: T, m: k, a: H } = B;
    Ti(k), Ti(H), S && hr(S), E.stop(), I ? (I.flags |= 8, qA(K, B, Q, F)) : B.vnode.el && K && (K.transition = B.vnode.transition, qA(K, B, Q, F)), T && MA(T, Q), MA(() => {
      B.isUnmounted = !0;
    }, Q);
  }, Vt = (B, Q, F, S = !1, E = !1, I = 0) => {
    for (let K = I; K < B.length; K++)
      qA(B[K], Q, F, S, E);
  }, Vs = (B) => {
    if (B.shapeFlag & 6)
      return Vs(B.component.subTree);
    if (B.shapeFlag & 128)
      return B.suspense.next();
    const Q = f(B.anchor || B.el), F = Q && Q[md];
    return F ? f(F) : Q;
  };
  let hn = !1;
  const fi = (B, Q, F) => {
    let S;
    B == null ? Q._vnode && (qA(Q._vnode, null, null, !0), S = Q._vnode.component) : U(
      Q._vnode || null,
      B,
      Q,
      null,
      null,
      null,
      F
    ), Q._vnode = B, hn || (hn = !0, mi(S), Kl(), hn = !1);
  }, Gt = {
    p: U,
    um: qA,
    m: nt,
    r: di,
    mt: gn,
    mc: UA,
    pc: aA,
    pbc: st,
    n: Vs,
    o: e
  };
  return {
    render: fi,
    hydrate: void 0,
    createApp: jd(fi)
  };
}
function xn({ type: e, props: A }, t) {
  return t === "svg" && e === "foreignObject" || t === "mathml" && e === "annotation-xml" && A && A.encoding && A.encoding.includes("html") ? void 0 : t;
}
function it({ effect: e, job: A }, t) {
  t ? (e.flags |= 32, A.flags |= 4) : (e.flags &= -33, A.flags &= -5);
}
function df(e, A) {
  return (!e || e && !e.pendingBranch) && A && !A.persisted;
}
function oc(e, A, t = !1) {
  const s = e.children, r = A.children;
  if (P(s) && P(r))
    for (let n = 0; n < s.length; n++) {
      const o = s[n];
      let i = r[n];
      i.shapeFlag & 1 && !i.dynamicChildren && ((i.patchFlag <= 0 || i.patchFlag === 32) && (i = r[n] = He(r[n]), i.el = o.el), !t && i.patchFlag !== -2 && oc(o, i)), i.type === qr && (i.patchFlag === -1 && (i = r[n] = He(i)), i.el = o.el), i.type === Oe && !i.el && (i.el = o.el);
    }
}
function ff(e) {
  const A = e.slice(), t = [0];
  let s, r, n, o, i;
  const a = e.length;
  for (s = 0; s < a; s++) {
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
function ic(e) {
  const A = e.subTree.component;
  if (A)
    return A.asyncDep && !A.asyncResolved ? A : ic(A);
}
function Ti(e) {
  if (e)
    for (let A = 0; A < e.length; A++)
      e[A].flags |= 8;
}
function ac(e) {
  if (e.placeholder)
    return e.placeholder;
  const A = e.component;
  return A ? ac(A.subTree) : null;
}
const lc = (e) => e.__isSuspense;
function Bf(e, A) {
  A && A.pendingBranch ? P(e) ? A.effects.push(...e) : A.effects.push(e) : wd(e);
}
const M = /* @__PURE__ */ Symbol.for("v-fgt"), qr = /* @__PURE__ */ Symbol.for("v-txt"), Oe = /* @__PURE__ */ Symbol.for("v-cmt"), vn = /* @__PURE__ */ Symbol.for("v-stc"), gt = [];
let WA = null;
function g(e = !1) {
  gt.push(WA = e ? null : []);
}
function cc() {
  gt.pop(), WA = gt[gt.length - 1] || null;
}
let ys = 1;
function Ki(e, A = !1) {
  ys += e, e < 0 && WA && A && (WA.hasOnce = !0);
}
function uc(e) {
  return e.dynamicChildren = ys > 0 ? WA || ut : null, cc(), ys > 0 && WA && WA.push(e), e;
}
function h(e, A, t, s, r, n) {
  return uc(
    d(
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
  return uc(
    pe(
      e,
      A,
      t,
      s,
      r,
      !0
    )
  );
}
function dc(e) {
  return e ? e.__v_isVNode === !0 : !1;
}
function Wt(e, A) {
  return e.type === A.type && e.key === A.key;
}
const fc = ({ key: e }) => e ?? null, wr = ({
  ref: e,
  ref_key: A,
  ref_for: t
}) => (typeof e == "number" && (e = "" + e), e != null ? BA(e) || /* @__PURE__ */ OA(e) || W(e) ? { i: JA, r: e, k: A, f: !!t } : e : null);
function d(e, A = null, t = null, s = 0, r = null, n = e === M ? 0 : 1, o = !1, i = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e,
    props: A,
    key: A && fc(A),
    ref: A && wr(A),
    scopeId: Rl,
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
  return i ? (Er(a, t), n & 128 && e.normalize(a)) : t && (a.shapeFlag |= BA(t) ? 8 : 16), ys > 0 && // avoid a block node from tracking itself
  !o && // has current parent block
  WA && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && WA.push(a), a;
}
const pe = gf;
function gf(e, A = null, t = null, s = 0, r = null, n = !1) {
  if ((!e || e === Md) && (e = Oe), dc(e)) {
    const i = Dt(
      e,
      A,
      !0
      /* mergeRef: true */
    );
    return t && Er(i, t), ys > 0 && !n && WA && (i.shapeFlag & 6 ? WA[WA.indexOf(e)] = i : WA.push(i)), i.patchFlag = -2, i;
  }
  if (yf(e) && (e = e.__vccOpts), A) {
    A = hf(A);
    let { class: i, style: a } = A;
    i && !BA(i) && (A.class = Y(i)), nA(a) && (/* @__PURE__ */ Jo(a) && !P(a) && (a = CA({}, a)), A.style = Ts(a));
  }
  const o = BA(e) ? 1 : lc(e) ? 128 : jr(e) ? 64 : nA(e) ? 4 : W(e) ? 2 : 0;
  return d(
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
function hf(e) {
  return e ? /* @__PURE__ */ Jo(e) || Ac(e) ? CA({}, e) : e : null;
}
function Dt(e, A, t = !1, s = !1) {
  const { props: r, ref: n, patchFlag: o, children: i, transition: a } = e, c = A ? pf(r || {}, A) : r, u = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: e.type,
    props: c,
    key: c && fc(c),
    ref: A && A.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? P(n) ? n.concat(wr(A)) : [n, wr(A)] : wr(A)
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
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: e.component,
    suspense: e.suspense,
    ssContent: e.ssContent && Dt(e.ssContent),
    ssFallback: e.ssFallback && Dt(e.ssFallback),
    placeholder: e.placeholder,
    el: e.el,
    anchor: e.anchor,
    ctx: e.ctx,
    ce: e.ce,
    cacheIndex: e.cacheIndex
  };
  return a && s && jo(
    u,
    a.clone(u)
  ), u;
}
function V(e = " ", A = 0) {
  return pe(qr, null, e, A);
}
function v(e = "", A = !1) {
  return A ? (g(), $o(Oe, null, e)) : pe(Oe, null, e);
}
function Be(e) {
  return e == null || typeof e == "boolean" ? pe(Oe) : P(e) ? pe(
    M,
    null,
    // #3666, avoid reference pollution when reusing vnode
    e.slice()
  ) : dc(e) ? He(e) : pe(qr, null, String(e));
}
function He(e) {
  return e.el === null && e.patchFlag !== -1 || e.memo ? e : Dt(e);
}
function Er(e, A) {
  let t = 0;
  const { shapeFlag: s } = e;
  if (A == null)
    A = null;
  else if (P(A))
    t = 16;
  else if (typeof A == "object")
    if (s & 65) {
      const r = A.default;
      r && (r._c && (r._d = !1), Er(e, r()), r._c && (r._d = !0));
      return;
    } else {
      t = 32;
      const r = A._;
      !r && !Ac(A) ? A._ctx = JA : r === 3 && JA && (JA.slots._ === 1 ? A._ = 1 : (A._ = 2, e.patchFlag |= 1024));
    }
  else if (W(A)) {
    if (s & 65) {
      Er(e, { default: A });
      return;
    }
    A = { default: A, _ctx: JA }, t = 32;
  } else
    A = String(A), s & 64 ? (t = 16, A = [V(A)]) : t = 8;
  e.children = A, e.shapeFlag |= t;
}
function pf(...e) {
  const A = {};
  for (let t = 0; t < e.length; t++) {
    const s = e[t];
    for (const r in s)
      if (r === "class")
        A.class !== s.class && (A.class = Y([A.class, s.class]));
      else if (r === "style")
        A.style = Ts([A.style, s.style]);
      else if (Mr(r)) {
        const n = A[r], o = s[r];
        o && n !== o && !(P(n) && n.includes(o)) ? A[r] = n ? [].concat(n, o) : o : o == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Nr(r) && (A[r] = o);
      } else r !== "" && (A[r] = s[r]);
  }
  return A;
}
function le(e, A, t, s = null) {
  ne(e, A, 7, [
    t,
    s
  ]);
}
const wf = jl();
let bf = 0;
function Qf(e, A, t) {
  const s = e.type, r = (A ? A.appContext : e.appContext) || wf, n = {
    uid: bf++,
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
    scope: new Gu(
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
    propsOptions: tc(s, r),
    emitsOptions: zl(s, r),
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
  return n.ctx = { _: n }, n.root = A ? A.root : n, n.emit = Zd.bind(null, n), e.ce && e.ce(n), n;
}
let LA = null;
const Cf = () => LA || JA;
let Hr, Es;
{
  const e = Jr(), A = (t, s) => {
    let r;
    return (r = e[t]) || (r = e[t] = []), r.push(s), (n) => {
      r.length > 1 ? r.forEach((o) => o(n)) : r[0](n);
    };
  };
  Hr = A(
    "__VUE_INSTANCE_SETTERS__",
    (t) => LA = t
  ), Es = A(
    "__VUE_SSR_SETTERS__",
    (t) => Hs = t
  );
}
const Ds = (e) => {
  const A = LA;
  return Hr(e), e.scope.on(), () => {
    e.scope.off(), Hr(A);
  };
}, Di = () => {
  LA && LA.scope.off(), Hr(null);
};
function Bc(e) {
  return e.vnode.shapeFlag & 4;
}
let Hs = !1;
function Uf(e, A = !1, t = !1) {
  A && Es(A);
  const { props: s, children: r } = e.vnode, n = Bc(e);
  sf(e, s, n, A), af(e, r, t || A);
  const o = n ? Ff(e, A) : void 0;
  return A && Es(!1), o;
}
function Ff(e, A) {
  const t = e.type;
  e.accessCache = /* @__PURE__ */ Object.create(null), e.proxy = new Proxy(e.ctx, Pd);
  const { setup: s } = t;
  if (s) {
    Ke();
    const r = e.setupContext = s.length > 1 ? xf(e) : null, n = Ds(e), o = Ks(
      s,
      e,
      0,
      [
        e.props,
        r
      ]
    ), i = ul(o);
    if (De(), n(), (i || e.sp) && !Bs(e) && Pl(e), i) {
      if (o.then(Di, Di), A)
        return o.then((a) => {
          Es(!0);
          try {
            Ri(e, a, A);
          } finally {
            Es(!1);
          }
        }).catch((a) => {
          Yr(a, e, 0);
        });
      e.asyncDep = o;
    } else
      Ri(e, o);
  } else
    gc(e);
}
function Ri(e, A, t) {
  W(A) ? e.type.__ssrInlineRender ? e.ssrRender = A : e.render = A : nA(A) && (e.setupState = Ll(A)), gc(e);
}
function gc(e, A, t) {
  const s = e.type;
  e.render || (e.render = s.render || he);
  {
    const r = Ds(e);
    Ke();
    try {
      Vd(e);
    } finally {
      De(), r();
    }
  }
}
const mf = {
  get(e, A) {
    return SA(e, "get", ""), e[A];
  }
};
function xf(e) {
  const A = (t) => {
    e.exposed = t || {};
  };
  return {
    attrs: new Proxy(e.attrs, mf),
    slots: e.slots,
    emit: e.emit,
    expose: A
  };
}
function $r(e) {
  return e.exposed ? e.exposeProxy || (e.exposeProxy = new Proxy(Ll(cd(e.exposed)), {
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
function vf(e, A = !0) {
  return W(e) ? e.displayName || e.name : e.name || A && e.__name;
}
function yf(e) {
  return W(e) && "__vccOpts" in e;
}
const Ef = (e, A) => /* @__PURE__ */ fd(e, A, Hs), Hf = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let lo;
const Oi = typeof window < "u" && window.trustedTypes;
if (Oi)
  try {
    lo = /* @__PURE__ */ Oi.createPolicy("vue", {
      createHTML: (e) => e
    });
  } catch {
  }
const hc = lo ? (e) => lo.createHTML(e) : (e) => e, If = "http://www.w3.org/2000/svg", _f = "http://www.w3.org/1998/Math/MathML", ye = typeof document < "u" ? document : null, Mi = ye && /* @__PURE__ */ ye.createElement("template"), Sf = {
  insert: (e, A, t) => {
    A.insertBefore(e, t || null);
  },
  remove: (e) => {
    const A = e.parentNode;
    A && A.removeChild(e);
  },
  createElement: (e, A, t, s) => {
    const r = A === "svg" ? ye.createElementNS(If, e) : A === "mathml" ? ye.createElementNS(_f, e) : t ? ye.createElement(e, { is: t }) : ye.createElement(e);
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
      Mi.innerHTML = hc(
        s === "svg" ? `<svg>${e}</svg>` : s === "mathml" ? `<math>${e}</math>` : e
      );
      const i = Mi.content;
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
}, Lf = /* @__PURE__ */ Symbol("_vtc");
function kf(e, A, t) {
  const s = e[Lf];
  s && (A = (A ? [A, ...s] : [...s]).join(" ")), A == null ? e.removeAttribute("class") : t ? e.setAttribute("class", A) : e.className = A;
}
const Ni = /* @__PURE__ */ Symbol("_vod"), Tf = /* @__PURE__ */ Symbol("_vsh"), Kf = /* @__PURE__ */ Symbol(""), Df = /(?:^|;)\s*display\s*:/;
function Rf(e, A, t) {
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
      i != null ? Mf(
        e,
        o,
        !BA(A) && A ? A[o] : void 0,
        i
      ) || As(s, o, i) : As(s, o, "");
    }
  } else if (r) {
    if (A !== t) {
      const o = s[Kf];
      o && (t += ";" + o), s.cssText = t, n = Df.test(t);
    }
  } else A && e.removeAttribute("style");
  Ni in e && (e[Ni] = n ? s.display : "", e[Tf] && (s.display = "none"));
}
const Ws = /\s*!important$/;
function As(e, A, t) {
  if (P(t))
    t.forEach((s) => As(e, A, s));
  else if (t == null && (t = ""), A.startsWith("--"))
    Ws.test(t) ? e.setProperty(A, t.replace(Ws, ""), "important") : e.setProperty(A, t);
  else {
    const s = Of(e, A);
    Ws.test(t) ? e.setProperty(
      XA(s),
      t.replace(Ws, ""),
      "important"
    ) : e[s] = t;
  }
}
const Pi = ["Webkit", "Moz", "ms"], yn = {};
function Of(e, A) {
  const t = yn[A];
  if (t)
    return t;
  let s = xA(A);
  if (s !== "filter" && s in e)
    return yn[A] = s;
  s = Gr(s);
  for (let r = 0; r < Pi.length; r++) {
    const n = Pi[r] + s;
    if (n in e)
      return yn[A] = n;
  }
  return A;
}
function Mf(e, A, t, s) {
  return e.tagName === "TEXTAREA" && (A === "width" || A === "height") && BA(s) && t === s;
}
const Vi = "http://www.w3.org/1999/xlink";
function Gi(e, A, t, s, r, n = Nu(A)) {
  s && A.startsWith("xlink:") ? t == null ? e.removeAttributeNS(Vi, A.slice(6, A.length)) : e.setAttributeNS(Vi, A, t) : t == null || n && !Bl(t) ? e.removeAttribute(A) : e.setAttribute(
    A,
    n ? "" : be(t) ? String(t) : t
  );
}
function Xi(e, A, t, s, r) {
  if (A === "innerHTML" || A === "textContent") {
    t != null && (e[A] = A === "innerHTML" ? hc(t) : t);
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
    i === "boolean" ? t = Bl(t) : t == null && i === "string" ? (t = "", o = !0) : i === "number" && (t = 0, o = !0);
  }
  try {
    e[A] = t;
  } catch {
  }
  o && e.removeAttribute(r || A);
}
function We(e, A, t, s) {
  e.addEventListener(A, t, s);
}
function Nf(e, A, t, s) {
  e.removeEventListener(A, t, s);
}
const Ji = /* @__PURE__ */ Symbol("_vei");
function Pf(e, A, t, s, r = null) {
  const n = e[Ji] || (e[Ji] = {}), o = n[A];
  if (s && o)
    o.value = s;
  else {
    const [i, a] = Xf(A);
    if (s) {
      const c = n[A] = Yf(
        s,
        r
      );
      We(e, i, c, a);
    } else o && (Nf(e, i, o, a), n[A] = void 0);
  }
}
const Vf = /(Once|Passive|Capture)$/, Gf = /^on:?(?:Once|Passive|Capture)$/;
function Xf(e) {
  let A, t;
  for (; (t = e.match(Vf)) && !Gf.test(e); )
    A || (A = {}), e = e.slice(0, e.length - t[1].length), A[t[1].toLowerCase()] = !0;
  return [e[2] === ":" ? e.slice(3) : XA(e.slice(2)), A];
}
let En = 0;
const Jf = /* @__PURE__ */ Promise.resolve(), Wf = () => En || (Jf.then(() => En = 0), En = Date.now());
function Yf(e, A) {
  const t = (s) => {
    if (!s._vts)
      s._vts = Date.now();
    else if (s._vts <= t.attached)
      return;
    const r = t.value;
    if (P(r)) {
      const n = s.stopImmediatePropagation;
      s.stopImmediatePropagation = () => {
        n.call(s), s._stopped = !0;
      };
      const o = r.slice(), i = [s];
      for (let a = 0; a < o.length && !s._stopped; a++) {
        const c = o[a];
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
  return t.value = e, t.attached = Wf(), t;
}
const Wi = (e) => e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && // lowercase letter
e.charCodeAt(2) > 96 && e.charCodeAt(2) < 123, jf = (e, A, t, s, r, n) => {
  const o = r === "svg";
  A === "class" ? kf(e, s, o) : A === "style" ? Rf(e, t, s) : Mr(A) ? Nr(A) || Pf(e, A, t, s, n) : (A[0] === "." ? (A = A.slice(1), !0) : A[0] === "^" ? (A = A.slice(1), !1) : zf(e, A, s, o)) ? (Xi(e, A, s), !e.tagName.includes("-") && (A === "value" || A === "checked" || A === "selected") && Gi(e, A, s, o, n, A !== "value")) : /* #11081 force set props for possible async custom element */ e._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (Zf(e, A) || // @ts-expect-error _def is private
  e._def.__asyncLoader && (/[A-Z]/.test(A) || !BA(s))) ? Xi(e, xA(A), s, n, A) : (A === "true-value" ? e._trueValue = s : A === "false-value" && (e._falseValue = s), Gi(e, A, s, o));
};
function zf(e, A, t, s) {
  if (s)
    return !!(A === "innerHTML" || A === "textContent" || A in e && Wi(A) && W(t));
  if (A === "spellcheck" || A === "draggable" || A === "translate" || A === "autocorrect" || A === "sandbox" && e.tagName === "IFRAME" || A === "form" || A === "list" && e.tagName === "INPUT" || A === "type" && e.tagName === "TEXTAREA")
    return !1;
  if (A === "width" || A === "height") {
    const r = e.tagName;
    if (r === "IMG" || r === "VIDEO" || r === "CANVAS" || r === "SOURCE")
      return !1;
  }
  return Wi(A) && BA(t) ? !1 : A in e;
}
function Zf(e, A) {
  const t = (
    // @ts-expect-error _def is private
    e._def.props
  );
  if (!t)
    return !1;
  const s = xA(A);
  return Array.isArray(t) ? t.some((r) => xA(r) === s) : Object.keys(t).some((r) => xA(r) === s);
}
const Yi = {};
// @__NO_SIDE_EFFECTS__
function ji(e, A, t) {
  let s = /* @__PURE__ */ vd(e, A);
  Pr(s) && (s = CA({}, s, A));
  class r extends Ai {
    constructor(o) {
      super(s, o, t);
    }
  }
  return r.def = s, r;
}
const qf = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Ai extends qf {
  constructor(A, t = {}, s = ea) {
    super(), this._def = A, this._props = t, this._createApp = s, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && s !== ea ? this._root = this.shadowRoot : A.shadowRoot !== !1 ? (this.attachShadow(
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
      if (A instanceof Ai) {
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
    this._connected = !1, Wo(() => {
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
      if (n && !P(n))
        for (const a in n) {
          const c = n[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = wi(this._props[a])), (i || (i = /* @__PURE__ */ Object.create(null)))[xA(a)] = !0);
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
          get: () => Sl(t[s])
        });
  }
  _resolveProps(A) {
    const { props: t } = A, s = P(t) ? t : Object.keys(t || {});
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
    let s = t ? this.getAttribute(A) : Yi;
    const r = xA(A);
    t && this._numberProps && this._numberProps[r] && (s = wi(s)), this._setProp(r, s, !1, !0);
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
    if (t !== this._props[A] && (this._dirty = !0, t === Yi ? delete this._props[A] : (this._props[A] = t, A === "key" && this._app && (this._app._ceVNode.key = t)), r && this._instance && this._update(), s)) {
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
    const t = pe(this._def, CA(A, this._props));
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
    for (let a = A.length - 1; a >= 0; a--) {
      const c = document.createElement("style");
      r && c.setAttribute("nonce", r), c.textContent = A[a], n.insertBefore(c, i || o), i = c, a === 0 && (s || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
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
            const c = t + "-s", u = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let l;
            for (; l = u.nextNode(); )
              l.setAttribute(c, "");
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
const Rt = (e) => {
  const A = e.props["onUpdate:modelValue"] || !1;
  return P(A) ? (t) => hr(A, t) : A;
};
function $f(e) {
  e.target.composing = !0;
}
function zi(e) {
  const A = e.target;
  A.composing && (A.composing = !1, A.dispatchEvent(new Event("input")));
}
const ge = /* @__PURE__ */ Symbol("_assign"), Ys = /* @__PURE__ */ Symbol("_initialValue");
function Hn(e, A, t) {
  return A && (e = e.trim()), t && (e = Xr(e)), e;
}
const hs = {
  created(e, { modifiers: { lazy: A, trim: t, number: s } }, r) {
    e.parentNode && (e.type === "text" ? e[Ys] = e.defaultValue.replace(/[\r\n]/g, "") : e.type === "textarea" && (e[Ys] = e.defaultValue.replace(/\r\n?/g, `
`))), e[ge] = Rt(r);
    const n = s || r.props && r.props.type === "number";
    We(e, A ? "change" : "input", (o) => {
      o.target.composing || e[ge](Hn(e.value, t, n));
    }), (t || n) && We(e, "change", () => {
      e.value = Hn(e.value, t, n);
    }), A || (We(e, "compositionstart", $f), We(e, "compositionend", zi), We(e, "change", zi));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(e, { value: A, modifiers: { trim: t, number: s } }) {
    const r = A ?? "", n = e[Ys];
    delete e[Ys], n !== void 0 && (e.type === "text" || e.type === "textarea") && e.value !== n ? e[ge](Hn(e.value, t, s)) : e.value = r;
  },
  beforeUpdate(e, { value: A, oldValue: t, modifiers: { lazy: s, trim: r, number: n } }, o) {
    if (e[ge] = Rt(o), e.composing) return;
    const i = (n || e.type === "number") && !/^0\d/.test(e.value) ? Xr(e.value) : e.value, a = A ?? "";
    if (i === a)
      return;
    const c = e.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === e && e.type !== "range" && (s && A === t || r && e.value.trim() === a) || (e.value = a);
  }
}, DA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(e, A, t) {
    e[ge] = Rt(t), We(e, "change", () => {
      const s = e._modelValue, r = Is(e), n = e.checked, o = e[ge];
      if (P(s)) {
        const i = Oo(s, r), a = i !== -1;
        if (n && !a)
          o(s.concat(r));
        else if (!n && a) {
          const c = [...s];
          c.splice(i, 1), o(c);
        }
      } else if (ke(s)) {
        const i = new Set(s);
        n ? i.add(r) : i.delete(r), o(i);
      } else
        o(pc(e, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: Zi,
  beforeUpdate(e, A, t) {
    e[ge] = Rt(t), Zi(e, A, t);
  }
};
function Zi(e, { value: A, oldValue: t }, s) {
  e._modelValue = A;
  let r;
  if (P(A))
    r = Oo(A, s.props.value) > -1;
  else if (ke(A))
    r = A.has(s.props.value);
  else {
    if (A === t) return;
    r = Te(A, pc(e, !0));
  }
  e.checked !== r && (e.checked = r);
}
const AB = {
  // <select multiple> value need to be deep traversed
  deep: !0,
  created(e, { value: A, modifiers: { number: t } }, s) {
    e._modelValue = A, We(e, "change", () => {
      const r = Array.prototype.filter.call(e.options, (a) => a.selected).map(
        (a) => t ? Xr(Is(a)) : Is(a)
      ), n = e.multiple, o = n ? ke(e._modelValue) ? new Set(r) : r : r[0], i = e._pendingValue = [
        n,
        n ? P(o) ? r.slice() : r : o
      ];
      try {
        e[ge](o);
      } finally {
        Wo(() => {
          e._pendingValue === i && (e._pendingValue = void 0);
        });
      }
    }), e[ge] = Rt(s);
  },
  // set value in mounted & updated because <select> relies on its children
  // <option>s.
  mounted(e, { value: A }) {
    qi(e, A);
  },
  beforeUpdate(e, { value: A }, t) {
    e._modelValue = A, e[ge] = Rt(t);
  },
  updated(e, { value: A }) {
    const t = e._pendingValue;
    e._pendingValue = void 0, (!t || t[0] !== e.multiple || !eB(A, t[1], t[0])) && qi(e, A);
  }
};
function eB(e, A, t) {
  if (!t || P(e)) return Te(e, A);
  if (ke(e)) {
    if (e.size !== A.length) return !1;
    for (const s of A)
      if (!e.has(s)) return !1;
    return !0;
  }
  return !1;
}
function qi(e, A) {
  const t = e.multiple, s = P(A);
  if (!(t && !s && !ke(A))) {
    for (let r = 0, n = e.options.length; r < n; r++) {
      const o = e.options[r], i = Is(o);
      if (t)
        if (s) {
          const a = typeof i;
          a === "string" || a === "number" ? o.selected = A.some((c) => String(c) === String(i)) : o.selected = Oo(A, i) > -1;
        } else
          o.selected = A.has(i);
      else if (Te(Is(o), A)) {
        e.selectedIndex !== r && (e.selectedIndex = r);
        return;
      }
    }
    !t && e.selectedIndex !== -1 && (e.selectedIndex = -1);
  }
}
function Is(e) {
  return "_value" in e ? e._value : e.value;
}
function pc(e, A) {
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
}, $i = (e, A) => {
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
}, nB = /* @__PURE__ */ CA({ patchProp: jf }, Sf);
let Aa;
function wc() {
  return Aa || (Aa = cf(nB));
}
const oB = (...e) => {
  wc().render(...e);
}, ea = (...e) => {
  const A = wc().createApp(...e), { mount: t } = A;
  return A.mount = (s) => {
    const r = aB(s);
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
function aB(e) {
  return BA(e) ? document.querySelector(e) : e;
}
const lB = ".bse-overlay[data-v-9785ec7b]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-9785ec7b]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-9785ec7b]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-9785ec7b]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-9785ec7b]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-9785ec7b]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-9785ec7b]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-9785ec7b]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-9785ec7b]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-9785ec7b]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-9785ec7b]{flex:1}.bse-stage[data-v-9785ec7b]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-9785ec7b]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", ei = (e, A) => {
  const t = e.__vccOpts || e;
  for (const [s, r] of A)
    t[s] = r;
  return t;
}, cB = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], ta = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], uB = {
  name: "DevloopScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: cB,
      colors: ta,
      tool: "pen",
      color: ta[0],
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
}, dB = { class: "bse-overlay" }, fB = { class: "bse-toolbar" }, BB = ["onClick"], gB = ["title", "onClick"], hB = ["disabled"], pB = ["disabled"], wB = { class: "bse-stage" };
function bB(e, A, t, s, r, n) {
  return g(), h("div", dB, [
    d("div", fB, [
      (g(!0), h(M, null, j(r.tools, (o) => (g(), h("button", {
        key: o.id,
        class: Y(["bse-btn", { active: r.tool === o.id }]),
        onClick: (i) => r.tool = o.id
      }, C(o.label), 11, BB))), 128)),
      A[8] || (A[8] = d("span", { class: "bse-sep" }, null, -1)),
      (g(!0), h(M, null, j(r.colors, (o) => (g(), h("button", {
        key: o,
        class: Y(["bse-color", { active: r.color === o }]),
        style: Ts({ background: o }),
        title: o,
        onClick: (i) => r.color = o
      }, null, 14, gB))), 128)),
      A[9] || (A[9] = d("span", { class: "bse-sep" }, null, -1)),
      d("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[0] || (A[0] = (...o) => n.undo && n.undo(...o))
      }, "되돌리기", 8, hB),
      d("button", {
        class: "bse-btn",
        disabled: !r.shapes.length,
        onClick: A[1] || (A[1] = (...o) => n.clearAll && n.clearAll(...o))
      }, "모두 지우기", 8, pB),
      A[10] || (A[10] = d("span", { class: "bse-spacer" }, null, -1)),
      d("button", {
        class: "bse-btn",
        onClick: A[2] || (A[2] = (o) => e.$emit("cancel"))
      }, "취소"),
      d("button", {
        class: "bse-btn bse-btn--apply",
        onClick: A[3] || (A[3] = (...o) => n.apply && n.apply(...o))
      }, "적용")
    ]),
    d("div", wB, [
      d("canvas", {
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
const QB = /* @__PURE__ */ ei(uB, [["render", bB], ["styles", [lB]], ["__scopeId", "data-v-9785ec7b"]]), sa = {
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
  "+ 새 작업": "+ New task",
  "새 작업": "New task",
  "계획 대기": "Plan pending",
  "단계 대기": "Step pending",
  "계획 중": "Planning",
  "계획 승인 대기": "Awaiting plan approval",
  "다음 단계 대기": "Awaiting next step",
  기능: "Feature",
  개선: "Improve",
  버그: "Bug",
  종류: "Kind",
  "기능 요청": "Feature request",
  "개선·리팩터링": "Improvement / refactor",
  "계획 승인 뒤 끝까지 자동": "Approve plan, then fully automatic",
  "단계마다 확인(미리보기 보고 다음 단계)": "Confirm each step (preview, then next)",
  "단계마다 확인": "Confirm each step",
  "끝까지 자동": "Fully automatic",
  제목: "Title",
  설명: "Description",
  "무엇을, 왜, 어디에": "what, why, where",
  "관련 범위": "Scope",
  "작업 만들기": "Create task",
  "작업 개입 방식": "Task intervention",
  "기능·개선 요청 기본값": "default for feature/improve requests",
  "작업을 만들 때 바꿀 수 있습니다": "can be changed per task",
  계획: "Plan",
  "계획 승인 → 구현 시작": "Approve plan → start",
  "다시 계획": "Re-plan",
  "다음 단계": "Next step",
  "접근 · 파일 · 위험": "Approach · files · risks",
  "확인 질문": "Questions",
  위험: "Risks",
  파일: "Files",
  "사람이 확인할 것": "Manual checks",
  개입: "Intervention",
  자동: "Auto",
  "계획 승인": "Plan approval",
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
}, Rs = [
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
Rs.push(
  [/\((중지됨|떠 있음|빌드 중|시작 중|대기|실패|없음)\)/, (e, A) => `(${{ 중지됨: "stopped", "떠 있음": "up", "빌드 중": "building", "시작 중": "starting", 대기: "queued", 실패: "failed", 없음: "none" }[A]})`],
  [/"(자동 병합까지|PR\/MR 까지|원격 브랜치만|보관만\(이 서버\)|자동 병합)"/, (e, A) => `"${{ "자동 병합까지": "auto-merge", "PR/MR 까지": "up to PR/MR", "원격 브랜치만": "branch only", "보관만(이 서버)": "keep only (this server)", "자동 병합": "auto-merge" }[A]}"`]
);
Rs.push([/· 키트 저장소 안\(원격에 없음\)/, "· only on this server (not on remote)"], [/· 원격에 푸시됨\(PR 없음\)/, "· pushed to remote (no PR)"], [/^scope: /, "scope: "]);
Rs.push([/^바뀐 파일 \((\d+)\)$/, "Changed files ($1)"]);
Rs.push([/^재현 검증 (.*)$/, "Reproduction check $1"], [/(\d+)회/g, "$1 rounds"]);
const CB = [[/(\d+)초 전/g, "$1 s ago"], [/(\d+)분 전/g, "$1 min ago"], [/(\d+)시간 전/g, "$1 h ago"], [/(\d+)일 전/g, "$1 d ago"]], ra = ".bf-md,.bf-log,.bf-diff,pre,code,textarea,.prob,.ktree,.kg-info,.kg-tip,.brv-text,.brv-chat__text,.brv-logbox,.brv-ai__summary,.brv-suggest__text,.brv-problem,.brv-log-msg,.brv-log-payload,.brv-shots__bigcap,[data-i18n-skip],#kLegend,.shots figcaption,.log";
function ti() {
  try {
    const A = localStorage.getItem("devloop-lang");
    if (A === "ko" || A === "en") return A;
  } catch {
  }
  return (typeof navigator < "u" && (navigator.language || "") || "ko").toLowerCase().startsWith("ko") ? "ko" : "en";
}
function In(e) {
  const A = String(e ?? ""), t = A.match(/^(\s*)([\s\S]*?)(\s*)$/);
  let s = t[2];
  if (!s || !/[가-힣]/.test(s)) return A;
  if (Object.prototype.hasOwnProperty.call(sa, s)) return t[1] + sa[s] + t[3];
  if (/^\[.+\] /.test(s)) return A;
  for (const [r, n] of Rs)
    r.lastIndex = 0, r.test(s) && (r.lastIndex = 0, s = s.replace(r, n));
  for (const [r, n] of CB) s = s.replace(r, n);
  return t[1] + s + t[3];
}
const bc = ["placeholder", "title", "aria-label"];
function ps(e) {
  if (e.nodeType === 3) {
    const A = e.parentElement;
    if (!A || ["SCRIPT", "STYLE"].includes(A.tagName) || A.closest(ra)) return;
    const t = In(e.nodeValue);
    t !== e.nodeValue && (e.__ko = e.__ko ?? e.nodeValue, e.nodeValue = t);
  } else if (e.nodeType === 1) {
    if (e.closest && e.closest(ra)) return;
    for (const A of bc) {
      const t = e.getAttribute && e.getAttribute(A);
      if (t) {
        const s = In(t);
        s !== t && e.setAttribute(A, s);
      }
    }
    if (e.tagName === "INPUT" && (e.type === "button" || e.type === "submit") && e.value) {
      const A = In(e.value);
      A !== e.value && (e.value = A);
    }
  }
}
function na(e) {
  const A = document.createTreeWalker(e, NodeFilter.SHOW_TEXT | NodeFilter.SHOW_ELEMENT);
  let t = (e.nodeType === 1 && ps(e), A.nextNode());
  for (; t; )
    ps(t), t = A.nextNode();
}
function Qc(e, A = ti()) {
  if (!e || A !== "en") return () => {
  };
  na(e);
  const t = new MutationObserver((s) => {
    for (const r of s)
      if (r.type === "characterData") ps(r.target);
      else if (r.type === "attributes") ps(r.target);
      else for (const n of r.addedNodes)
        n.nodeType === 3 ? ps(n) : n.nodeType === 1 && na(n);
  });
  return t.observe(e, { childList: !0, subtree: !0, characterData: !0, attributes: !0, attributeFilter: bc }), () => t.disconnect();
}
const UB = '.bug-target-tool[data-v-80543552]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-80543552]{margin:0}.bug-target[data-v-80543552]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-80543552]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-80543552]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-80543552]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-80543552]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-80543552]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-80543552]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-80543552]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-80543552]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-80543552]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-80543552]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-80543552]:hover{color:#fff}.bug-report-tabs[data-v-80543552]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-80543552]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-80543552]:hover{color:#ccc}.bug-tab.active[data-v-80543552]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-80543552]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-80543552]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-80543552]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-80543552]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-80543552]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-80543552]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-80543552]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-80543552]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-80543552]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-80543552]::placeholder{color:#555}.bug-report-textarea[data-v-80543552]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-80543552]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-80543552]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-80543552]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-80543552]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-80543552]{cursor:pointer}.log-filter-chip.error[data-v-80543552]{color:#e06060}.log-filter-chip.warn[data-v-80543552]{color:#c8a040}.log-filter-chip.log[data-v-80543552]{color:#6080b0}.log-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-80543552]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-80543552]:last-child{border-bottom:none}.log-item--error[data-v-80543552]{background:#c83c3c14}.log-item--warn[data-v-80543552]{background:#c8a02814}.log-time[data-v-80543552]{color:#555;flex-shrink:0}.log-badge-lv[data-v-80543552]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-80543552]{color:#e06060}.log-item--warn .log-badge-lv[data-v-80543552]{color:#c8a040}.log-item--log .log-badge-lv[data-v-80543552]{color:#6080b0}.log-msg[data-v-80543552]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-80543552]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-80543552]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-80543552]:hover{background:#ffffff0a}.net-item[data-v-80543552]:last-child{border-bottom:none}.net-item--error[data-v-80543552]{background:#c83c3c12}.net-status[data-v-80543552]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-80543552]{color:#60c860}.net-status.status-3xx[data-v-80543552]{color:#c8c040}.net-status.status-4xx[data-v-80543552]{color:#e08040}.net-status.status-5xx[data-v-80543552],.net-status.status-err[data-v-80543552]{color:#e06060}.net-method[data-v-80543552]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-80543552]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-80543552]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-80543552]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-80543552]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-80543552]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-80543552]{color:#e06060}.env-group[data-v-80543552]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-80543552]{margin-top:8px}.env-group-title[data-v-80543552]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-80543552]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-80543552]:last-child{border-bottom:none}.env-row span[data-v-80543552]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-80543552]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-80543552]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-80543552]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-80543552]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-80543552]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-80543552]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-80543552]{background:#6464c833;color:#ccc}.log-src-btn[data-v-80543552]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-80543552]{animation:spin-80543552 1s linear infinite;display:inline-block}.log-src-err[data-v-80543552]{color:#e06060;font-weight:700}@keyframes spin-80543552{to{transform:rotate(360deg)}}.log-logger[data-v-80543552]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-80543552]{color:#e06060}.event-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-80543552]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-80543552]:last-child{border-bottom:none}.event-time[data-v-80543552]{color:#555;flex-shrink:0}.event-type[data-v-80543552]{color:#9ad}.env-list[data-v-80543552]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-80543552]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-80543552]{display:flex;gap:6px}.severity-btn[data-v-80543552]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-80543552]:hover{color:#ccc}.severity-btn--critical.active[data-v-80543552]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-80543552]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-80543552]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-80543552]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-80543552]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-80543552]{color:#79a;font-size:10px}.route-list[data-v-80543552]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-80543552]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-80543552]:last-child{border-bottom:none}.route-from[data-v-80543552]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-80543552]{color:#555;flex-shrink:0}.route-to[data-v-80543552]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-80543552]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-80543552]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-80543552]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-80543552]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-80543552]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-80543552]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-80543552]:hover{background:#ffffff12}.bug-btn-download[data-v-80543552]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-80543552]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-80543552]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-80543552]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-80543552]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-80543552]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-80543552 .7s linear infinite;flex-shrink:0}@keyframes bug-spin-80543552{to{transform:rotate(360deg)}}.bug-btn-save[data-v-80543552]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-80543552]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-80543552]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-80543552]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-80543552]:hover{background:#ffffff14;color:#abc}', FB = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], mB = {
  name: "DevloopReportModal",
  components: { ScreenshotEditor: QB },
  // kit: createDevloop() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this.__i18nStop = Qc(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || ti()), this._onKeydown = (e) => {
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
      severityOptions: FB,
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
}, xB = { class: "devloop-root" }, vB = {
  key: 0,
  class: "bug-capture-overlay"
}, yB = { class: "bug-report-modal" }, EB = { class: "bug-report-header" }, HB = { class: "bug-report-title" }, IB = {
  key: 0,
  class: "bug-report-shortcut"
}, _B = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, SB = ["onClick"], LB = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, kB = { class: "bug-report-tabs" }, TB = ["onClick"], KB = {
  key: 0,
  class: "bug-tab-badge"
}, DB = { class: "bug-report-body" }, RB = { class: "bug-report-section" }, OB = { class: "bug-report-label" }, MB = ["disabled"], NB = ["disabled"], PB = ["src"], VB = {
  key: 1,
  class: "screenshot-placeholder"
}, GB = {
  key: 2,
  class: "screenshot-placeholder"
}, XB = { class: "bug-report-section" }, JB = { class: "severity-group" }, WB = ["onClick"], YB = { class: "bug-report-section" }, jB = { class: "bug-report-section" }, zB = { class: "bug-report-section" }, ZB = { class: "bug-report-section" }, qB = { class: "included-chips" }, $B = { class: "chip" }, Ag = { class: "chip" }, eg = {
  key: 0,
  class: "chip"
}, tg = {
  key: 1,
  class: "chip"
}, sg = { class: "log-source-toggle" }, rg = {
  key: 0,
  class: "log-src-spin"
}, ng = {
  key: 1,
  class: "log-src-err"
}, og = {
  key: 0,
  class: "bug-report-section"
}, ig = { class: "bug-report-label" }, ag = { class: "log-filter-group" }, lg = { class: "log-filter-chip error" }, cg = { class: "log-filter-chip warn" }, ug = { class: "log-filter-chip log" }, dg = { class: "log-list" }, fg = { class: "log-time" }, Bg = { class: "log-badge-lv" }, gg = { class: "log-msg" }, hg = {
  key: 0,
  class: "log-empty"
}, pg = {
  key: 1,
  class: "bug-report-section"
}, wg = { class: "bug-report-label" }, bg = { class: "log-filter-group" }, Qg = { class: "log-filter-chip error" }, Cg = { class: "log-filter-chip warn" }, Ug = { class: "log-filter-chip log" }, Fg = {
  key: 0,
  class: "log-empty"
}, mg = {
  key: 1,
  class: "log-empty"
}, xg = {
  key: 2,
  class: "log-empty log-empty--error"
}, vg = {
  key: 3,
  class: "log-list"
}, yg = { class: "log-time" }, Eg = { class: "log-badge-lv" }, Hg = { class: "log-logger" }, Ig = { class: "log-msg" }, _g = {
  key: 0,
  class: "log-empty"
}, Sg = {
  key: 2,
  class: "bug-report-section"
}, Lg = { class: "net-list" }, kg = ["onClick"], Tg = { class: "net-method" }, Kg = { class: "net-url" }, Dg = { class: "net-dur" }, Rg = { class: "net-time" }, Og = {
  key: 0,
  class: "net-detail"
}, Mg = { key: 0 }, Ng = { key: 1 }, Pg = { key: 2 }, Vg = {
  key: 3,
  class: "net-error-msg"
}, Gg = {
  key: 0,
  class: "log-empty"
}, Xg = { class: "bug-report-section" }, Jg = { class: "log-list" }, Wg = { class: "log-time" }, Yg = { class: "mutation-type" }, jg = {
  key: 0,
  class: "log-msg mutation-payload"
}, zg = {
  key: 0,
  class: "log-empty"
}, Zg = { class: "bug-report-section" }, qg = { class: "route-list" }, $g = { class: "log-time" }, Ah = { class: "route-from" }, eh = { class: "route-to" }, th = {
  key: 0,
  class: "log-empty"
}, sh = {
  key: 0,
  class: "bug-report-section"
}, rh = { class: "env-group" }, nh = {
  key: 1,
  class: "bug-report-section"
}, oh = { class: "env-group" }, ih = { class: "env-row" }, ah = { class: "env-row" }, lh = { class: "env-row" }, ch = { class: "env-row" }, uh = { class: "env-row" }, dh = {
  key: 0,
  class: "bug-report-section"
}, fh = {
  key: 1,
  class: "bug-report-section"
}, Bh = {
  key: 0,
  class: "env-group"
}, gh = { class: "env-row" }, hh = {
  key: 0,
  class: "env-row"
}, ph = {
  key: 1,
  class: "env-row"
}, wh = { class: "env-group" }, bh = { class: "env-row" }, Qh = { class: "env-row" }, Ch = { class: "env-row" }, Uh = { class: "env-row" }, Fh = { class: "env-row" }, mh = { class: "env-group" }, xh = { class: "env-row" }, vh = { class: "env-row" }, yh = { class: "env-row" }, Eh = { class: "env-list" }, Hh = { key: 0 }, Ih = { class: "env-row" }, _h = { class: "env-list" }, Sh = { key: 0 }, Lh = {
  key: 0,
  class: "env-row"
}, kh = { class: "env-list" }, Th = {
  key: 1,
  class: "env-row"
}, Kh = { class: "env-list" }, Dh = { class: "env-group" }, Rh = { class: "event-list" }, Oh = { class: "event-time" }, Mh = { class: "event-type" }, Nh = {
  key: 0,
  class: "log-empty"
}, Ph = {
  key: 1,
  class: "env-group"
}, Vh = { class: "env-row" }, Gh = { class: "env-row" }, Xh = { class: "env-row" }, Jh = { class: "env-row" }, Wh = { class: "env-group" }, Yh = { class: "env-row" }, jh = { class: "env-row" }, zh = {
  key: 0,
  class: "env-row"
}, Zh = {
  key: 1,
  class: "env-row"
}, qh = { class: "env-row" }, $h = { class: "bug-report-footer" }, Ap = ["disabled", "title"], ep = ["disabled"], tp = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, sp = ["disabled"];
function rp(e, A, t, s, r, n) {
  var i, a, c, u, l, f, p, b, U, m, _, y;
  const o = Od("ScreenshotEditor");
  return g(), h("div", xB, [
    r.isCapturing && !r.isOpen ? (g(), h("div", vB, [...A[27] || (A[27] = [
      d("div", { class: "bug-capture-spinner" }, [
        d("span", { class: "bug-capture-spin" }),
        V(" 화면 캡처 중... ")
      ], -1)
    ])])) : v("", !0),
    r.isOpen ? (g(), h("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: A[25] || (A[25] = (w) => r.backdropPressed = w.target === w.currentTarget),
      onClick: A[26] || (A[26] = es((w) => r.backdropPressed && n.close(), ["self"]))
    }, [
      r.isEditingShot && r.screenshotUrl ? (g(), $o(o, {
        key: 0,
        src: r.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: A[0] || (A[0] = (w) => r.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : v("", !0),
      d("div", yB, [
        d("div", EB, [
          d("span", HB, [
            A[28] || (A[28] = V("버그 신고 ", -1)),
            n.hotkey ? (g(), h("span", IB, C(n.hotkey), 1)) : v("", !0)
          ]),
          n.appProjects.length > 1 ? (g(), h("span", _B, [
            (g(!0), h(M, null, j(n.appProjects, (w) => (g(), h("button", {
              key: w.key,
              class: Y({ "bug-target__on": r.project === w.key }),
              onClick: (x) => n.setProject(w.key)
            }, C(w.label), 11, SB))), 128))
          ])) : v("", !0),
          (a = (i = t.kit) == null ? void 0 : i.api) != null && a.enabled ? (g(), h("label", LB, [
            QA(d("input", {
              type: "checkbox",
              "onUpdate:modelValue": A[1] || (A[1] = (w) => r.tool = w)
            }, null, 512), [
              [DA, r.tool]
            ]),
            A[29] || (A[29] = V(" 버그 신고 도구 문제 ", -1))
          ])) : v("", !0),
          d("button", {
            class: "bug-report-close",
            onClick: A[2] || (A[2] = (...w) => n.close && n.close(...w))
          }, "✕")
        ]),
        d("div", kB, [
          (g(!0), h(M, null, j(n.tabs, (w) => (g(), h("button", {
            key: w.id,
            class: Y(["bug-tab", { active: r.activeTab === w.id }]),
            onClick: (x) => r.activeTab = w.id
          }, [
            V(C(w.label) + " ", 1),
            w.badge ? (g(), h("span", KB, C(w.badge), 1)) : v("", !0)
          ], 10, TB))), 128))
        ]),
        d("div", DB, [
          r.activeTab === "basic" ? (g(), h(M, { key: 0 }, [
            d("div", RB, [
              d("div", OB, [
                A[30] || (A[30] = V(" 화면 캡처 ", -1)),
                d("button", {
                  class: "bug-btn-sm",
                  onClick: A[3] || (A[3] = (...w) => n.recapture && n.recapture(...w)),
                  disabled: r.isCapturing
                }, C(r.isCapturing ? "캡처 중..." : "다시 찍기"), 9, MB),
                d("button", {
                  class: "bug-btn-sm",
                  onClick: A[4] || (A[4] = (w) => r.isEditingShot = !0),
                  disabled: !r.screenshotUrl
                }, "그리기·표시", 8, NB),
                d("button", {
                  class: "bug-btn-sm",
                  onClick: A[5] || (A[5] = (w) => e.$refs.shotFile.click())
                }, "이미지 불러오기"),
                d("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: A[6] || (A[6] = (...w) => n.onShotFile && n.onShotFile(...w))
                }, null, 544)
              ]),
              d("div", {
                class: Y(["screenshot-wrap", { "screenshot-wrap--editable": r.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: A[7] || (A[7] = (w) => r.screenshotUrl && (r.isEditingShot = !0))
              }, [
                r.screenshotUrl ? (g(), h("img", {
                  key: 0,
                  src: r.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, PB)) : r.isCapturing ? (g(), h("div", VB, "캡처 중...")) : (g(), h("div", GB, "화면 캡처를 못 했습니다 - 스크린샷 없이 저장하거나, 이미지를 붙여넣기(Ctrl+V)·불러오기로 넣을 수 있습니다"))
              ], 2),
              A[31] || (A[31] = d("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            d("div", XB, [
              A[32] || (A[32] = d("div", { class: "bug-report-label" }, "심각도", -1)),
              d("div", JB, [
                (g(!0), h(M, null, j(r.severityOptions, (w) => (g(), h("button", {
                  key: w.value,
                  class: Y(["severity-btn", `severity-btn--${w.value.toLowerCase()}`, { active: r.severity === w.value }]),
                  onClick: (x) => r.severity = w.value
                }, C(w.label), 11, WB))), 128))
              ])
            ]),
            d("div", YB, [
              A[33] || (A[33] = d("div", { class: "bug-report-label" }, "문제 상황", -1)),
              QA(d("textarea", {
                "onUpdate:modelValue": A[8] || (A[8] = (w) => r.problemDesc = w),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [hs, r.problemDesc]
              ])
            ]),
            d("div", jB, [
              A[34] || (A[34] = d("div", { class: "bug-report-label" }, "재현 단계", -1)),
              QA(d("textarea", {
                "onUpdate:modelValue": A[9] || (A[9] = (w) => r.reproSteps = w),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [hs, r.reproSteps]
              ])
            ]),
            d("div", zB, [
              A[35] || (A[35] = d("div", { class: "bug-report-label" }, "기대 결과", -1)),
              QA(d("textarea", {
                "onUpdate:modelValue": A[10] || (A[10] = (w) => r.expectedResult = w),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [hs, r.expectedResult]
              ])
            ]),
            d("div", ZB, [
              A[39] || (A[39] = d("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              d("div", qB, [
                A[36] || (A[36] = d("span", { class: "chip" }, "📸 스크린샷", -1)),
                A[37] || (A[37] = d("span", { class: "chip" }, "🌐 환경 정보", -1)),
                d("span", $B, "📡 네트워크 요청 (" + C(r.networkLogs.length) + "건)", 1),
                d("span", Ag, "📋 프론트 로그 (" + C(r.allLogs.length) + "건)", 1),
                d("span", {
                  class: Y(["chip", r.backendLogsState === "ok" ? "chip--ok" : r.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + C(r.backendLogsState === "ok" ? r.backendLogs.length + "건" : r.backendLogsState === "loading" ? "로딩 중" : r.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : r.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = r.context) != null && c.camera ? (g(), h("span", eg, "📍 카메라 위치")) : v("", !0),
                A[38] || (A[38] = d("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (u = r.context) != null && u.user ? (g(), h("span", tg, "👤 " + C(r.context.user.username), 1)) : v("", !0)
              ])
            ])
          ], 64)) : v("", !0),
          r.activeTab === "logs" ? (g(), h(M, { key: 1 }, [
            d("div", sg, [
              d("button", {
                class: Y(["log-src-btn", { active: r.logSource === "front" }]),
                onClick: A[11] || (A[11] = (w) => r.logSource = "front")
              }, " 프론트엔드 ", 2),
              d("button", {
                class: Y(["log-src-btn", { active: r.logSource === "backend" }]),
                onClick: A[12] || (A[12] = (w) => r.logSource = "backend")
              }, [
                A[40] || (A[40] = V(" 백엔드 ", -1)),
                r.backendLogsState === "loading" ? (g(), h("span", rg, "⟳")) : r.backendLogsState === "error" ? (g(), h("span", ng, "!")) : v("", !0)
              ], 2)
            ]),
            r.logSource === "front" ? (g(), h("div", og, [
              d("div", ig, [
                A[41] || (A[41] = V(" 프론트엔드 콘솔 로그 ", -1)),
                d("div", ag, [
                  d("label", lg, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[13] || (A[13] = (w) => r.showError = w)
                    }, null, 512), [
                      [DA, r.showError]
                    ]),
                    V(" 오류 (" + C(n.countByLevel("error")) + ")", 1)
                  ]),
                  d("label", cg, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[14] || (A[14] = (w) => r.showWarn = w)
                    }, null, 512), [
                      [DA, r.showWarn]
                    ]),
                    V(" 경고 (" + C(n.countByLevel("warn")) + ")", 1)
                  ]),
                  d("label", ug, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[15] || (A[15] = (w) => r.showLog = w)
                    }, null, 512), [
                      [DA, r.showLog]
                    ]),
                    V(" 로그 (" + C(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              d("div", dg, [
                (g(!0), h(M, null, j(n.filteredLogs, (w, x) => (g(), h("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${w.level}`])
                }, [
                  d("span", fg, C(w.time.slice(11)), 1),
                  d("span", Bg, C(w.level), 1),
                  d("span", gg, C(w.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (g(), h("div", hg, "표시할 로그가 없습니다")) : v("", !0)
              ])
            ])) : v("", !0),
            r.logSource === "backend" ? (g(), h("div", pg, [
              d("div", wg, [
                A[42] || (A[42] = V(" 백엔드 서버 로그 ", -1)),
                d("div", bg, [
                  d("label", Qg, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[16] || (A[16] = (w) => r.showBEError = w)
                    }, null, 512), [
                      [DA, r.showBEError]
                    ]),
                    V(" ERROR (" + C(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  d("label", Cg, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[17] || (A[17] = (w) => r.showBEWarn = w)
                    }, null, 512), [
                      [DA, r.showBEWarn]
                    ]),
                    V(" WARN (" + C(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  d("label", Ug, [
                    QA(d("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": A[18] || (A[18] = (w) => r.showBEInfo = w)
                    }, null, 512), [
                      [DA, r.showBEInfo]
                    ]),
                    V(" INFO (" + C(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              r.backendLogsState === "loading" ? (g(), h("div", Fg, "백엔드 로그 가져오는 중...")) : r.backendLogsState === "skipped" ? (g(), h("div", mg, [
                A[43] || (A[43] = V(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                d("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: A[19] || (A[19] = (...w) => n.fetchBackendLogs && n.fetchBackendLogs(...w))
                }, "그래도 가져오기")
              ])) : r.backendLogsState === "error" ? (g(), h("div", xg, "백엔드 로그 조회 실패 (인증 확인)")) : (g(), h("div", vg, [
                (g(!0), h(M, null, j(n.filteredBackendLogs, (w, x) => (g(), h("div", {
                  key: x,
                  class: Y(["log-item", `log-item--${w.level.toLowerCase()}`])
                }, [
                  d("span", yg, C(w.time.slice(11)), 1),
                  d("span", Eg, C(w.level), 1),
                  d("span", Hg, C(w.logger), 1),
                  d("span", Ig, C(w.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (g(), h("div", _g, "표시할 로그가 없습니다")) : v("", !0)
              ]))
            ])) : v("", !0)
          ], 64)) : v("", !0),
          r.activeTab === "network" ? (g(), h("div", Sg, [
            A[51] || (A[51] = d("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            d("div", Lg, [
              (g(!0), h(M, null, j(n.reversedNetwork, (w, x) => {
                var L;
                return g(), h(M, { key: x }, [
                  d("div", {
                    class: Y(["net-item", w.error || w.status >= 400 ? "net-item--error" : ""]),
                    onClick: (X) => n.toggleNetDetail(x)
                  }, [
                    d("span", {
                      class: Y(["net-status", n.statusClass(w.status)])
                    }, C(w.status), 3),
                    d("span", Tg, C(w.method), 1),
                    d("span", Kg, C(w.url), 1),
                    d("span", Dg, C(w.duration) + "ms", 1),
                    d("span", Rg, C((L = w.time) == null ? void 0 : L.slice(11, 19)), 1)
                  ], 10, kg),
                  r.expandedNet === x ? (g(), h("div", Og, [
                    w.params ? (g(), h("div", Mg, [
                      A[44] || (A[44] = d("b", null, "Params:", -1)),
                      A[45] || (A[45] = V()),
                      d("code", null, C(w.params), 1)
                    ])) : v("", !0),
                    w.requestBody ? (g(), h("div", Ng, [
                      A[46] || (A[46] = d("b", null, "Request:", -1)),
                      A[47] || (A[47] = V()),
                      d("code", null, C(w.requestBody), 1)
                    ])) : v("", !0),
                    w.responseBody ? (g(), h("div", Pg, [
                      A[48] || (A[48] = d("b", null, "Response:", -1)),
                      A[49] || (A[49] = V()),
                      d("code", null, C(w.responseBody), 1)
                    ])) : v("", !0),
                    w.error ? (g(), h("div", Vg, [
                      A[50] || (A[50] = d("b", null, "Error:", -1)),
                      V(" " + C(w.error), 1)
                    ])) : v("", !0)
                  ])) : v("", !0)
                ], 64);
              }), 128)),
              r.networkLogs.length === 0 ? (g(), h("div", Gg, "기록된 요청이 없습니다")) : v("", !0)
            ])
          ])) : v("", !0),
          r.activeTab === "state" ? (g(), h(M, { key: 3 }, [
            d("div", Xg, [
              A[52] || (A[52] = d("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              d("div", Jg, [
                (g(!0), h(M, null, j(((l = r.context) == null ? void 0 : l.mutationLog) || [], (w, x) => (g(), h("div", {
                  key: x,
                  class: "log-item"
                }, [
                  d("span", Wg, C(w.time), 1),
                  d("span", Yg, C(w.type), 1),
                  w.payload !== null ? (g(), h("span", jg, C(n.formatPayload(w.payload)), 1)) : v("", !0)
                ]))), 128)),
                (p = (f = r.context) == null ? void 0 : f.mutationLog) != null && p.length ? v("", !0) : (g(), h("div", zg, "기록된 mutation이 없습니다"))
              ])
            ]),
            d("div", Zg, [
              A[54] || (A[54] = d("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              d("div", qg, [
                (g(!0), h(M, null, j(((b = r.context) == null ? void 0 : b.routeHistory) || [], (w, x) => (g(), h("div", {
                  key: x,
                  class: "route-item"
                }, [
                  d("span", $g, C(w.time), 1),
                  d("span", Ah, C(w.from), 1),
                  A[53] || (A[53] = d("span", { class: "route-arrow" }, "→", -1)),
                  d("span", eh, C(w.to), 1)
                ]))), 128)),
                (m = (U = r.context) == null ? void 0 : U.routeHistory) != null && m.length ? v("", !0) : (g(), h("div", th, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (_ = r.context) != null && _.storage && Object.keys(r.context.storage).length ? (g(), h("div", sh, [
              A[55] || (A[55] = d("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              d("div", rh, [
                (g(!0), h(M, null, j(r.context.storage, (w, x) => (g(), h("div", {
                  key: x,
                  class: "env-row"
                }, [
                  d("span", null, C(x), 1),
                  d("span", null, C(w), 1)
                ]))), 128))
              ])
            ])) : v("", !0),
            (y = r.context) != null && y.cesiumPerf ? (g(), h("div", nh, [
              A[61] || (A[61] = d("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              d("div", oh, [
                d("div", ih, [
                  A[56] || (A[56] = d("span", null, "Primitives", -1)),
                  d("span", null, C(r.context.cesiumPerf.primitives), 1)
                ]),
                d("div", ah, [
                  A[57] || (A[57] = d("span", null, "Tiles Loaded", -1)),
                  d("span", null, C(r.context.cesiumPerf.tilesLoaded), 1)
                ]),
                d("div", lh, [
                  A[58] || (A[58] = d("span", null, "Max Screen Space Error", -1)),
                  d("span", null, C(r.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                d("div", ch, [
                  A[59] || (A[59] = d("span", null, "Shadows", -1)),
                  d("span", null, C(r.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                d("div", uh, [
                  A[60] || (A[60] = d("span", null, "MSAA Samples", -1)),
                  d("span", null, C(r.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : v("", !0)
          ], 64)) : v("", !0),
          r.activeTab === "env" ? (g(), h(M, { key: 4 }, [
            r.context ? (g(), h("div", fh, [
              r.context.user ? (g(), h("div", Bh, [
                A[66] || (A[66] = d("div", { class: "env-group-title" }, "사용자", -1)),
                d("div", gh, [
                  A[63] || (A[63] = d("span", null, "아이디", -1)),
                  d("span", null, C(r.context.user.username), 1)
                ]),
                r.context.user.roles.length ? (g(), h("div", hh, [
                  A[64] || (A[64] = d("span", null, "권한", -1)),
                  d("span", null, C(r.context.user.roles.join(", ")), 1)
                ])) : v("", !0),
                r.context.user.exp ? (g(), h("div", ph, [
                  A[65] || (A[65] = d("span", null, "토큰 만료", -1)),
                  d("span", null, C(r.context.user.exp), 1)
                ])) : v("", !0)
              ])) : v("", !0),
              d("div", wh, [
                A[72] || (A[72] = d("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                d("div", bh, [
                  A[67] || (A[67] = d("span", null, "상단 탭", -1)),
                  d("span", null, C(r.context.menus.headerName), 1)
                ]),
                d("div", Qh, [
                  A[68] || (A[68] = d("span", null, "하위 메뉴", -1)),
                  d("span", null, C(r.context.menus.subMenuName), 1)
                ]),
                d("div", Ch, [
                  A[69] || (A[69] = d("span", null, "좌측 메뉴", -1)),
                  d("span", null, C(n.joinOrNone(r.context.menus.leftMenus)), 1)
                ]),
                d("div", Uh, [
                  A[70] || (A[70] = d("span", null, "열린 패널", -1)),
                  d("span", null, C(n.joinOrNone(r.context.menus.openPanels)), 1)
                ]),
                d("div", Fh, [
                  A[71] || (A[71] = d("span", null, "활성 도구", -1)),
                  d("span", null, C(n.joinOrNone(r.context.menus.activeTools)), 1)
                ])
              ]),
              d("div", mh, [
                A[75] || (A[75] = d("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                d("div", xh, [
                  A[73] || (A[73] = d("span", null, "지도 타입", -1)),
                  d("span", null, C(r.context.activeData.mapType), 1)
                ]),
                d("div", vh, [
                  A[74] || (A[74] = d("span", null, "지형", -1)),
                  d("span", null, C(r.context.activeData.terrain || "기본"), 1)
                ]),
                d("div", yh, [
                  d("span", null, "데이터셋 (" + C(r.context.activeData.datasets.length) + ")", 1),
                  d("span", Eh, [
                    r.context.activeData.datasets.length ? v("", !0) : (g(), h("span", Hh, "없음")),
                    (g(!0), h(M, null, j(r.context.activeData.datasets, (w) => (g(), h("span", {
                      key: w.layerId,
                      class: "env-tag"
                    }, C(w._displayName), 1))), 128))
                  ])
                ]),
                d("div", Ih, [
                  d("span", null, "3D 타일 (" + C(r.context.activeData.threeDTiles.length) + ")", 1),
                  d("span", _h, [
                    r.context.activeData.threeDTiles.length ? v("", !0) : (g(), h("span", Sh, "없음")),
                    (g(!0), h(M, null, j(r.context.activeData.threeDTiles, (w) => (g(), h("span", {
                      key: w.threeDTilesId || w.sourceId,
                      class: "env-tag"
                    }, C(w._displayName), 1))), 128))
                  ])
                ]),
                r.context.activeData.autoPlacement.length ? (g(), h("div", Lh, [
                  d("span", null, "배치안 (" + C(r.context.activeData.autoPlacement.length) + ")", 1),
                  d("span", kh, [
                    (g(!0), h(M, null, j(r.context.activeData.autoPlacement, (w) => (g(), h("span", {
                      key: w.sourceId,
                      class: "env-tag"
                    }, C(w._displayName), 1))), 128))
                  ])
                ])) : v("", !0),
                r.context.activeData.topicMaps.length ? (g(), h("div", Th, [
                  d("span", null, "주제도 (" + C(r.context.activeData.topicMaps.length) + ")", 1),
                  d("span", Kh, [
                    (g(!0), h(M, null, j(r.context.activeData.topicMaps, (w) => (g(), h("span", {
                      key: w.key,
                      class: "env-tag"
                    }, C(w._displayName), 1))), 128))
                  ])
                ])) : v("", !0)
              ]),
              d("div", Dh, [
                A[76] || (A[76] = d("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                d("div", Rh, [
                  (g(!0), h(M, null, j(r.context.recentEvents.slice(0, 30), (w, x) => (g(), h("div", {
                    key: x,
                    class: "event-item"
                  }, [
                    d("span", Oh, C(w.time), 1),
                    d("span", Mh, C(w.type), 1)
                  ]))), 128)),
                  r.context.recentEvents.length ? v("", !0) : (g(), h("div", Nh, "기록된 이벤트 없음"))
                ])
              ]),
              r.context.camera ? (g(), h("div", Ph, [
                A[81] || (A[81] = d("div", { class: "env-group-title" }, "카메라 위치", -1)),
                d("div", Vh, [
                  A[77] || (A[77] = d("span", null, "경도", -1)),
                  d("span", null, C(r.context.camera.longitude), 1)
                ]),
                d("div", Gh, [
                  A[78] || (A[78] = d("span", null, "위도", -1)),
                  d("span", null, C(r.context.camera.latitude), 1)
                ]),
                d("div", Xh, [
                  A[79] || (A[79] = d("span", null, "높이 (m)", -1)),
                  d("span", null, C(r.context.camera.height), 1)
                ]),
                d("div", Jh, [
                  A[80] || (A[80] = d("span", null, "Heading / Pitch", -1)),
                  d("span", null, C(r.context.camera.heading) + "° / " + C(r.context.camera.pitch) + "°", 1)
                ])
              ])) : v("", !0),
              d("div", Wh, [
                A[87] || (A[87] = d("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                d("div", Yh, [
                  A[82] || (A[82] = d("span", null, "일시", -1)),
                  d("span", null, C(r.context.datetime), 1)
                ]),
                d("div", jh, [
                  A[83] || (A[83] = d("span", null, "해상도", -1)),
                  d("span", null, C(r.context.screen.resolution) + " · 뷰포트 " + C(r.context.screen.viewport), 1)
                ]),
                r.context.memory ? (g(), h("div", zh, [
                  A[84] || (A[84] = d("span", null, "JS 힙 메모리", -1)),
                  d("span", null, C(r.context.memory.usedMB) + "MB / " + C(r.context.memory.limitMB) + "MB", 1)
                ])) : v("", !0),
                r.context.connection ? (g(), h("div", Zh, [
                  A[85] || (A[85] = d("span", null, "네트워크", -1)),
                  d("span", null, C(r.context.connection.effectiveType) + " · " + C(r.context.connection.downlink) + "Mbps", 1)
                ])) : v("", !0),
                d("div", qh, [
                  A[86] || (A[86] = d("span", null, "언어", -1)),
                  d("span", null, C(r.context.browser.language), 1)
                ])
              ])
            ])) : (g(), h("div", dh, [...A[62] || (A[62] = [
              d("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : v("", !0)
        ]),
        d("div", $h, [
          n.serverEnabled ? (g(), h("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: A[20] || (A[20] = (...w) => n.openViewer && n.openViewer(...w))
          }, "저장 목록")) : v("", !0),
          d("button", {
            class: "bug-btn-cancel",
            onClick: A[21] || (A[21] = (...w) => n.close && n.close(...w))
          }, "취소"),
          d("button", {
            class: "bug-btn-copy",
            onClick: A[22] || (A[22] = (...w) => n.copyToClipboard && n.copyToClipboard(...w)),
            disabled: !r.screenshotUrl,
            title: r.copyStatus
          }, [
            A[88] || (A[88] = d("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              d("rect", {
                x: "9",
                y: "9",
                width: "13",
                height: "13",
                rx: "2"
              }),
              d("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
            ], -1)),
            V(" " + C(r.copyStatus), 1)
          ], 8, Ap),
          n.serverEnabled ? (g(), h("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: A[23] || (A[23] = (...w) => n.saveToServer && n.saveToServer(...w)),
            disabled: r.isSaving || r.isCapturing
          }, [
            r.isSaving ? (g(), h("span", tp)) : v("", !0),
            V(" " + C(r.saveStatus), 1)
          ], 8, ep)) : v("", !0),
          d("button", {
            class: "bug-btn-download",
            onClick: A[24] || (A[24] = (...w) => n.download && n.download(...w)),
            disabled: r.isCapturing
          }, " 다운로드 ", 8, sp)
        ])
      ])
    ], 32)) : v("", !0)
  ]);
}
const np = /* @__PURE__ */ ei(mB, [["render", rp], ["styles", [UB]], ["__scopeId", "data-v-80543552"]]), Lt = (e) => String(e ?? "").replace(/[&<>"']/g, (A) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[A]);
function dt(e) {
  let A = Lt(e);
  return A = A.replace(/`([^`]+)`/g, (t, s) => `<code>${s}</code>`), A = A.replace(/\*\*([^*]+)\*\*/g, "<b>$1</b>"), A = A.replace(/(https?:\/\/[^\s<)]+)/g, '<a href="$1" target="_blank" rel="noopener">$1</a>'), A = A.replace(/(^|[\s(])((?:[\w.-]+\/)+[\w.-]+\.(?:java|js|ts|tsx|jsx|vue|py|xml|yml|yaml|json|properties|gradle|sql|md|scss|css|html)(?::\d+)?)(?=$|[\s,)])/g, (t, s, r) => t.includes("<code>") ? t : `${s}<code class="p">${r}</code>`), A;
}
function op(e) {
  const A = String(e ?? "").replace(/\r\n?/g, `
`).trim();
  if (!A) return "";
  const t = [], s = A.split(`
`);
  let r = 0;
  const n = (a) => {
    a.length && t.push(`<p>${a.map(o).join("<br>")}</p>`), a.length = 0;
  }, o = (a) => {
    const c = a.match(/^([가-힣A-Za-z][가-힣A-Za-z ·/]{0,14}):\s+(.*)$/);
    return c ? `<b class="lbl">${Lt(c[1])}:</b> ${dt(c[2])}` : dt(a);
  };
  let i = [];
  for (; r < s.length; ) {
    const a = s[r];
    if (/^```/.test(a)) {
      n(i);
      const u = a.slice(3).trim(), l = [];
      for (r++; r < s.length && !/^```/.test(s[r]); ) l.push(s[r++]);
      r++, t.push(`<pre class="code"${u ? ` data-lang="${Lt(u)}"` : ""}>${Lt(l.join(`
`))}</pre>`);
      continue;
    }
    const c = a.match(/^(#{1,4})\s+(.*)$/);
    if (c) {
      n(i), t.push(`<h${Math.min(6, c[1].length + 2)}>${dt(c[2])}</h${Math.min(6, c[1].length + 2)}>`), r++;
      continue;
    }
    if (/^\s*([-*•]|\d+[.)])\s+/.test(a)) {
      n(i);
      const u = /^\s*\d+[.)]\s+/.test(a), l = [];
      for (; r < s.length && /^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) {
        let f = s[r].replace(/^\s*([-*•]|\d+[.)])\s+/, "");
        for (r++; r < s.length && /^\s{2,}\S/.test(s[r]) && !/^\s*([-*•]|\d+[.)])\s+/.test(s[r]); ) f += " " + s[r++].trim();
        l.push(`<li>${dt(f)}</li>`);
      }
      t.push(`<${u ? "ol" : "ul"}>${l.join("")}</${u ? "ol" : "ul"}>`);
      continue;
    }
    if (/^\s*$/.test(a)) {
      n(i), r++;
      continue;
    }
    if (/^(---|\*\*\*|___)\s*$/.test(a)) {
      n(i), t.push("<hr>"), r++;
      continue;
    }
    i.push(a), r++;
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
], ap = [
  [/^💬/, "say"],
  [/^✏️|^✏/, "edit"],
  [/^\$ /, "cmd"],
  [/^읽기 /, "read"],
  [/^검색 /, "grep"],
  [/^Claude 종료|^Claude 답변/, "end"]
];
function lp(e) {
  const A = String(e ?? "").replace(/\r\n?/g, `
`);
  if (!A.trim()) return "";
  const t = [];
  for (const s of A.split(`
`)) {
    if (!s.trim()) continue;
    let r = s.match(/^(\d\d:\d\d:\d\d)\s\s(\s*)(.*)$/);
    if (r) {
      const [, n, o, i] = r, a = o.length >= 2;
      let c = "";
      for (const [u, l] of a ? ap : ip) if (u.test(i)) {
        c = l;
        break;
      }
      t.push(`<div class="ln ${a ? "detail" : "stage"}${c ? ` ${c}` : ""}"><span class="ts">${n}</span><span class="tx">${dt(i)}</span></div>`);
      continue;
    }
    if (r = s.match(/^(\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.\d+)?Z?)\s+(INFO|WARN|ERROR|DEBUG)?\s*(.*)$/), r) {
      const [, n, o, i] = r;
      t.push(`<div class="ln srv ${(o || "info").toLowerCase()}"><span class="ts">${Lt(n.slice(11, 19))}</span>${o ? `<span class="lvl">${o}</span>` : ""}<span class="tx">${dt(i)}</span></div>`);
      continue;
    }
    if (/^── .+ ──$/.test(s.trim())) {
      t.push(`<div class="ln group">${Lt(s.trim().replace(/^── | ──$/g, ""))}</div>`);
      continue;
    }
    t.push(`<div class="ln cont"><span class="ts"></span><span class="tx">${dt(s)}</span></div>`);
  }
  return `<div class="bf-log">${t.join("")}</div>`;
}
const cp = `
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
`, up = ".brv-projects[data-v-4915b2a5]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-4915b2a5]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-4915b2a5]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-4915b2a5]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-4915b2a5]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-4915b2a5]{margin:0!important}.brv-ai__tools[data-v-4915b2a5]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-4915b2a5]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-4915b2a5]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-4915b2a5]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-4915b2a5]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-4915b2a5]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-4915b2a5]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-4915b2a5]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-4915b2a5]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-4915b2a5]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-4915b2a5]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-4915b2a5]{display:block;font-family:inherit}.brv-kg__col[data-v-4915b2a5]{font-size:10px;fill:#889}.brv-kg__label[data-v-4915b2a5]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-4915b2a5]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-4915b2a5]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-4915b2a5]{opacity:.25}.brv-kg__edge[data-v-4915b2a5]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-4915b2a5]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-4915b2a5]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-4915b2a5],.brv-kg__edge--writes[data-v-4915b2a5]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-4915b2a5]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-4915b2a5]{opacity:.12}.brv-shots[data-v-4915b2a5]{margin:8px 0 6px}.brv-shots__title[data-v-4915b2a5]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-4915b2a5]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-4915b2a5]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-4915b2a5],.brv-shots__ph[data-v-4915b2a5]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-4915b2a5]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-4915b2a5]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-4915b2a5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-4915b2a5]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-4915b2a5]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-4915b2a5]{font-weight:600}.brv-ai__branch[data-v-4915b2a5]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-4915b2a5]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-4915b2a5]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-4915b2a5]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-4915b2a5]{flex:1;margin:0}.brv-chat__btns[data-v-4915b2a5]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-4915b2a5]{white-space:nowrap}.brv-chat__input[data-v-4915b2a5]{font-family:inherit}.brv-chat__text[data-v-4915b2a5]{color:#d0d6de;white-space:normal}.brv-chat__msg--user .brv-chat__text[data-v-4915b2a5]{color:#e6ebf2}.brv-notice[data-v-4915b2a5]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-4915b2a5]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-4915b2a5]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-4915b2a5]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-4915b2a5],.brv-log-list[data-v-4915b2a5],.brv-net-detail[data-v-4915b2a5],.brv-text[data-v-4915b2a5]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-4915b2a5]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-4915b2a5]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-4915b2a5]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-4915b2a5]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-4915b2a5]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-4915b2a5]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-4915b2a5]:hover{color:#fff}.brv-body[data-v-4915b2a5]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-4915b2a5]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-4915b2a5]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-4915b2a5]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-4915b2a5]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-4915b2a5]:hover{background:#ffffff12}.brv-problem[data-v-4915b2a5]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-4915b2a5]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-4915b2a5]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-4915b2a5]:hover{color:#e74c3c}.brv-badge[data-v-4915b2a5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-4915b2a5]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-4915b2a5]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-4915b2a5]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-4915b2a5]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-4915b2a5]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-4915b2a5]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-4915b2a5]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-4915b2a5]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-4915b2a5]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-4915b2a5]{background:#7888992e;color:#89a}.brv-status-control[data-v-4915b2a5]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-4915b2a5]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-4915b2a5]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-4915b2a5]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-4915b2a5]{width:11px;height:11px;border-width:2px}.brv-back[data-v-4915b2a5]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-4915b2a5]:hover{color:#fff}.brv-screenshot[data-v-4915b2a5]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-4915b2a5]{margin-bottom:16px}.brv-fix[data-v-4915b2a5]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-4915b2a5]{background:#fff3cd;color:#7a5a00}.brv-fix--planning[data-v-4915b2a5]{background:#ede9fe;color:#4c1d95}.brv-fix--planned[data-v-4915b2a5]{background:#fef3c7;color:#78350f}.brv-fix--step_wait[data-v-4915b2a5]{background:#e0f2fe;color:#0c4a6e}.brv-kind[data-v-4915b2a5]{font-size:11px;padding:1px 7px;border-radius:999px;background:#ede9fe;color:#4c1d95;margin-left:4px}.brv-plan[data-v-4915b2a5]{margin:8px 0;padding:8px 12px;border:1px solid rgba(127,127,127,.25);border-radius:8px;font-size:13px}.brv-plan__head[data-v-4915b2a5]{display:flex;gap:8px;align-items:baseline;margin-bottom:4px}.brv-plan__summary[data-v-4915b2a5]{margin-bottom:6px}.brv-plan__steps[data-v-4915b2a5]{margin:0;padding-left:20px}.brv-plan__steps li[data-v-4915b2a5]{margin:3px 0}.brv-plan__step--done b[data-v-4915b2a5]{opacity:.6;text-decoration:line-through}.brv-plan__step--next b[data-v-4915b2a5]{color:#0c4a6e}.brv-plan__done[data-v-4915b2a5]{margin-left:6px;color:#15803d}.brv-plan__detail[data-v-4915b2a5]{font-size:12px;opacity:.8;white-space:pre-wrap}.brv-plan__more[data-v-4915b2a5]{margin-top:6px;font-size:12px}.brv-plan__more summary[data-v-4915b2a5]{cursor:pointer;opacity:.8}.brv-plan__files code[data-v-4915b2a5]{font-size:11px}.brv-plan__actions[data-v-4915b2a5]{display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-top:8px}.brv-plan__note[data-v-4915b2a5]{flex:1;min-width:200px;font-size:12px;padding:4px 8px;border:1px solid rgba(127,127,127,.35);border-radius:6px;background:transparent;color:inherit}.brv-plan__mode[data-v-4915b2a5]{font-size:12px}.brv-fix--running[data-v-4915b2a5]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-4915b2a5]{background:#e0f2fe;color:#075985}.brv-fix--ready[data-v-4915b2a5]{background:#ccfbf1;color:#115e59}.brv-fix--reverted[data-v-4915b2a5]{background:#fce7f3;color:#9d174d}.brv-ai__tool--danger[data-v-4915b2a5]{color:#b91c1c;border-color:#fca5a5}.brv-fix--merged[data-v-4915b2a5]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-4915b2a5]{background:#fee2e2;color:#991b1b}.brv-link[data-v-4915b2a5]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-4915b2a5]{margin-top:6px}.brv-fix-actions[data-v-4915b2a5]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-4915b2a5]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-4915b2a5]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-4915b2a5]{background:transparent;color:#2563eb}.brv-hint[data-v-4915b2a5]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-4915b2a5]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-4915b2a5]{margin-top:8px;font-size:11px}.brv-result[data-v-4915b2a5]{margin:6px 0 8px;font-size:12px}.brv-result>summary[data-v-4915b2a5]{cursor:pointer;color:#556;font-weight:600}.brv-result__body[data-v-4915b2a5]{margin-top:6px;padding:8px 10px;background:#ffffff0a;border-radius:6px;line-height:1.55}.brv-result__body h3[data-v-4915b2a5],.brv-result__body h4[data-v-4915b2a5]{margin:8px 0 3px;font-size:12px;color:#9ab}.brv-result__body h3[data-v-4915b2a5]:first-child,.brv-result__body h4[data-v-4915b2a5]:first-child{margin-top:0}.brv-result__repro[data-v-4915b2a5]{margin:6px 0;padding:6px 10px;border-radius:6px;font-size:12px;background:#7fe0a41f}.brv-result__repro.bad[data-v-4915b2a5]{background:#ff9aa824}.brv-result__repro ul[data-v-4915b2a5]{margin:4px 0 0;padding-left:16px}.brv-result__repro code[data-v-4915b2a5]{font-size:11px;white-space:pre-wrap;word-break:break-all}.brv-result__files[data-v-4915b2a5]{margin-top:6px}.brv-result__files ul[data-v-4915b2a5]{margin:2px 0 0;padding-left:16px}.brv-result__files li[data-v-4915b2a5]{margin:1px 0}.brv-result__files code[data-v-4915b2a5]{font-size:11px}.brv-fix-log summary[data-v-4915b2a5]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-4915b2a5],.brv-logbox[data-v-4915b2a5]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-4915b2a5]{color:inherit}.brv-suggest[data-v-4915b2a5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-4915b2a5]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-4915b2a5]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-4915b2a5]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-4915b2a5]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-4915b2a5]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-4915b2a5]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-4915b2a5]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-4915b2a5]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-4915b2a5]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-4915b2a5]{color:#1e5bb8}.brv-chat__text[data-v-4915b2a5]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-4915b2a5]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-4915b2a5]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-4915b2a5]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-4915b2a5]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-4915b2a5]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-4915b2a5]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-4915b2a5]{margin-bottom:8px}.brv-field-label[data-v-4915b2a5]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-4915b2a5]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:normal;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-4915b2a5]{display:flex;gap:4px}.brv-log-tab[data-v-4915b2a5]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-4915b2a5]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-4915b2a5]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-4915b2a5]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-4915b2a5]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-4915b2a5]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-4915b2a5]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-4915b2a5]:hover{background:#ffffff0f}.brv-filter-error[data-v-4915b2a5]{color:#c06060}.brv-filter-warn[data-v-4915b2a5]{color:#b09040}.brv-filter-log[data-v-4915b2a5]{color:#589}.brv-log-list[data-v-4915b2a5]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-4915b2a5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-4915b2a5]:hover{background:#ffffff0a}.brv-log-item[data-v-4915b2a5]:last-child{border-bottom:none}.brv-log-time[data-v-4915b2a5]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-4915b2a5]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-4915b2a5]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-4915b2a5]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-4915b2a5]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-4915b2a5]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-4915b2a5]{color:#8ac;font-weight:600}.brv-log--error[data-v-4915b2a5]{color:#e87070}.brv-log--warn[data-v-4915b2a5]{color:#d4a84b}.brv-log--info[data-v-4915b2a5]{color:#a8b8c8}.brv-log-empty[data-v-4915b2a5]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-4915b2a5]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-4915b2a5]:hover{background:#ffffff0a}.brv-net-err[data-v-4915b2a5]{background:#e74c3c0d}.brv-net-status[data-v-4915b2a5]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-4915b2a5]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-4915b2a5]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-4915b2a5],.st-5xx[data-v-4915b2a5]{color:#e87070}.st-4xx[data-v-4915b2a5]{color:#d4a84b}.st-3xx[data-v-4915b2a5]{color:#8ac}.st-2xx[data-v-4915b2a5]{color:#6c8}.brv-net-detail[data-v-4915b2a5]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-4915b2a5]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-4915b2a5 .7s linear infinite}@keyframes brv-spin-4915b2a5{to{transform:rotate(360deg)}}", dp = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  PLANNING: "AI 가 계획을 세우는 중",
  PLANNED: "계획 승인 대기 · 계획을 확인하고 승인하면 구현을 시작합니다",
  STEP_WAIT: "다음 단계 대기 · 미리보기로 확인한 뒤 다음 단계를 누르세요",
  READY: "수정본 준비 · 작업 브랜치에 커밋됨, 아직 PR·병합 전(콘솔 버전 탭에서 내보내기)",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  REVERTED: "되돌림 - 수정이 취소됨(되돌리기 PR 참고)",
  FAILED: "실패 · 진행 로그 확인"
}, fp = { QUEUED: "대기", RUNNING: "수정중", READY: "준비", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패", REVERTED: "되돌림", PLANNING: "계획 중", PLANNED: "계획 승인", STEP_WAIT: "단계 대기" }, oa = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], Bp = {
  name: "DevloopViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      fmtCss: cp,
      STATUSES: oa,
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
      approveMode: "plan",
      replanNote: "",
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
      var p;
      const e = this.kg;
      if (!((p = e == null ? void 0 : e.nodes) != null && p.length)) return null;
      const A = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, s = 30, r = 22, n = 26, o = A.map((b) => e.nodes.filter((U) => b.layers.includes(U.layer))).map((b, U) => ({ ...A[U], ns: b })).filter((b) => b.ns.length), i = [], a = [];
      let c = 8;
      for (const b of o)
        a.push({ layer: b.layers[0], x: c, title: b.title }), b.ns.sort((U, m) => m.hit - U.hit || (m.score || 0) - (U.score || 0)), b.ns.forEach((U, m) => {
          const _ = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          i.push({ ...U, x: c, y: r + m * s, w: t - n, h: 20, short: _ });
        }), c += t;
      const u = new Map(i.map((b) => [b.id, b])), l = [];
      for (const b of e.edges) {
        const U = u.get(b.from), m = u.get(b.to);
        if (!U || !m || U === m) continue;
        const [_, y] = U.x <= m.x ? [U, m] : [m, U], w = _.x + _.w, x = _.y + _.h / 2, L = y.x, X = y.y + y.h / 2, eA = _.x === y.x ? `M${w},${x} C${w + 18},${x} ${L + _.w + 18},${X} ${L + _.w},${X}` : `M${w},${x} C${(w + L) / 2},${x} ${(w + L) / 2},${X} ${L},${X}`;
        l.push({ d: eA, rel: b.rel, from: b.from, to: b.to });
      }
      const f = r + Math.max(...o.map((b) => b.ns.length)) * s + 4;
      return { nodes: i, edges: l, cols: a, w: c + 4, h: f };
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
      return ["QUEUED", "RUNNING", "PLANNING"].includes((e = this.detail) == null ? void 0 : e.fixStatus);
    },
    planObj() {
      var e;
      try {
        return (e = this.detail) != null && e.plan ? JSON.parse(this.detail.plan) : null;
      } catch {
        return null;
      }
    },
    planStep() {
      var e;
      return Number((e = this.detail) == null ? void 0 : e.planStep) || 0;
    },
    kindLabel() {
      var e;
      return { feature: "기능", improve: "개선", bug: "버그" }[((e = this.detail) == null ? void 0 : e.kind) || "bug"];
    },
    modeLabel() {
      var e;
      return { auto: "자동", plan: "계획 승인", step: "단계마다 확인" }[((e = this.detail) == null ? void 0 : e.mode) || "plan"];
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
    this.__i18nStop = Qc(this.$el.getRootNode(), this.kit && this.kit.options && this.kit.options.lang || ti());
  },
  methods: {
    md(e) {
      return op(e);
    },
    logH(e) {
      return lp(e);
    },
    async open(e) {
      var A, t, s, r, n, o;
      if (this.isOpen = !0, this.selected = null, this.detail = null, this.expanded = /* @__PURE__ */ new Set(), (A = this.kit) != null && A.projectInfo && (this.info = { ...await this.kit.projectInfo() }), !((s = (t = this.kit) == null ? void 0 : t.options) != null && s.adminKey) && ((n = this.info[(r = this.kit) == null ? void 0 : r.project]) == null ? void 0 : n.canFix) === !1) {
        const i = this.projects.find((a) => {
          var c;
          return ((c = this.info[a.key]) == null ? void 0 : c.canFix) !== !1;
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
      return ((A = oa.find((t) => t.value === e)) == null ? void 0 : A.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(e) {
      return dp[e || "none"] || e;
    },
    fixShort(e) {
      return fp[e] || e;
    },
    // ── 작업 계획 ──
    async approvePlan() {
      var A;
      const e = (A = this.detail) == null ? void 0 : A.bugReportId;
      if (e) {
        this.fixBusy = !0;
        try {
          const t = await this.kit.api.planApprove(e, { mode: this.approveMode });
          this.detail = { ...this.detail, ...t }, this._syncListFix(t), this.showNotice("계획 승인", "구현을 시작합니다. 진행 로그가 여기에 쌓입니다.", "success"), this._startFixPolling();
        } catch (t) {
          this.showNotice("승인 실패", (t == null ? void 0 : t.message) || "요청에 실패했습니다.", "error");
        } finally {
          this.fixBusy = !1;
        }
      }
    },
    async nextStep() {
      var A;
      const e = (A = this.detail) == null ? void 0 : A.bugReportId;
      if (e) {
        this.fixBusy = !0;
        try {
          const t = await this.kit.api.planNext(e);
          this.detail = { ...this.detail, ...t }, this._syncListFix(t), this._startFixPolling();
        } catch (t) {
          this.showNotice("다음 단계 실패", (t == null ? void 0 : t.message) || "요청에 실패했습니다.", "error");
        } finally {
          this.fixBusy = !1;
        }
      }
    },
    async replan() {
      var A;
      const e = (A = this.detail) == null ? void 0 : A.bugReportId;
      if (e) {
        this.fixBusy = !0;
        try {
          const t = await this.kit.api.planReplan(e, this.replanNote.trim());
          this.replanNote = "", this.detail = { ...this.detail, ...t }, this._syncListFix(t), this._startFixPolling();
        } catch (t) {
          this.showNotice("다시 계획 실패", (t == null ? void 0 : t.message) || "요청에 실패했습니다.", "error");
        } finally {
          this.fixBusy = !1;
        }
      }
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
}, gp = { class: "devloop-root" }, hp = { class: "brv-modal" }, pp = { class: "brv-header" }, wp = { class: "brv-title" }, bp = {
  key: 0,
  class: "brv-shortcut"
}, Qp = {
  key: 0,
  class: "brv-projects"
}, Cp = ["onClick"], Up = { class: "brv-body" }, Fp = {
  key: 0,
  class: "brv-loading"
}, mp = {
  key: 1,
  class: "brv-empty"
}, xp = {
  key: 2,
  class: "brv-list"
}, vp = ["onClick"], yp = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, Ep = { class: "brv-problem" }, Hp = ["title"], Ip = { class: "brv-meta" }, _p = ["onClick"], Sp = {
  key: 0,
  class: "brv-loading"
}, Lp = {
  key: 0,
  class: "brv-section"
}, kp = ["src"], Tp = ["src", "alt"], Kp = { class: "brv-shots__bigcap" }, Dp = { class: "brv-section" }, Rp = { class: "brv-row" }, Op = { class: "brv-row" }, Mp = { class: "brv-status-control" }, Np = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Pp = ["value", "disabled"], Vp = ["value"], Gp = { class: "brv-row" }, Xp = { class: "brv-selectable" }, Jp = { class: "brv-row" }, Wp = { class: "brv-selectable" }, Yp = { class: "brv-section brv-ai" }, jp = { class: "brv-ai__head" }, zp = { class: "brv-label brv-ai__title" }, Zp = {
  key: 0,
  class: "brv-kind"
}, qp = {
  key: 1,
  class: "brv-spin brv-spin--sm"
}, $p = {
  key: 2,
  class: "brv-fix-elapsed"
}, Aw = {
  key: 3,
  class: "brv-fix-elapsed"
}, ew = {
  key: 4,
  class: "brv-ai__tools"
}, tw = ["disabled"], sw = ["disabled"], rw = ["disabled"], nw = {
  key: 0,
  class: "brv-ai__hint"
}, ow = {
  key: 1,
  class: "brv-ai__hint"
}, iw = {
  key: 2,
  class: "brv-ai__start"
}, aw = ["disabled"], lw = {
  key: 0,
  class: "brv-plan"
}, cw = { class: "brv-plan__head" }, uw = { class: "brv-ai__hint" }, dw = { class: "brv-plan__summary brv-selectable" }, fw = { class: "brv-plan__steps" }, Bw = {
  key: 0,
  class: "brv-plan__done"
}, gw = { class: "brv-plan__detail brv-selectable" }, hw = {
  key: 0,
  class: "brv-plan__more"
}, pw = {
  key: 0,
  class: "brv-plan__q"
}, ww = ["innerHTML"], bw = { key: 2 }, Qw = { key: 3 }, Cw = { class: "brv-plan__files" }, Uw = { key: 4 }, Fw = {
  key: 1,
  class: "brv-plan__actions"
}, mw = ["disabled"], xw = { class: "brv-ai__hint" }, vw = ["disabled"], yw = {
  key: 2,
  class: "brv-plan__actions"
}, Ew = { class: "brv-ai__hint" }, Hw = ["disabled"], Iw = {
  key: 1,
  class: "brv-ai__meta"
}, _w = ["href"], Sw = ["href"], Lw = ["title"], kw = {
  key: 3,
  class: "brv-ai__hint"
}, Tw = { class: "brv-ai__branch" }, Kw = ["href"], Dw = {
  key: 1,
  class: "brv-ai__hint"
}, Rw = ["disabled"], Ow = ["title"], Mw = ["innerHTML"], Nw = {
  key: 3,
  class: "brv-result",
  open: ""
}, Pw = { key: 0 }, Vw = { key: 1 }, Gw = ["innerHTML"], Xw = {
  key: 2,
  class: "brv-result__files"
}, Jw = { class: "brv-field-label" }, Ww = {
  key: 4,
  class: "brv-kg",
  open: ""
}, Yw = { class: "brv-kg__wrap" }, jw = ["viewBox"], zw = ["x"], Zw = ["d"], qw = ["transform", "onMouseenter"], $w = ["width", "height", "fill"], A0 = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, e0 = {
  key: 5,
  class: "brv-shots"
}, t0 = { class: "brv-shots__title" }, s0 = { class: "brv-suggest__hint" }, r0 = { class: "brv-shots__strip" }, n0 = ["onClick"], o0 = ["src", "alt"], i0 = {
  key: 1,
  class: "brv-shots__ph"
}, a0 = ["open"], l0 = { class: "brv-ai__count" }, c0 = ["innerHTML"], u0 = {
  key: 7,
  class: "brv-suggest"
}, d0 = ["innerHTML"], f0 = ["disabled", "onClick"], B0 = { class: "brv-chat" }, g0 = { class: "brv-chat__who" }, h0 = ["innerHTML"], p0 = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, w0 = {
  key: 1,
  class: "brv-chat__compose"
}, b0 = ["disabled"], Q0 = { class: "brv-chat__btns" }, C0 = ["disabled"], U0 = ["disabled"], F0 = {
  key: 2,
  class: "brv-ai__hint"
}, m0 = {
  key: 2,
  class: "brv-section"
}, x0 = {
  key: 0,
  class: "brv-field"
}, v0 = ["innerHTML"], y0 = {
  key: 1,
  class: "brv-field"
}, E0 = ["innerHTML"], H0 = {
  key: 2,
  class: "brv-field"
}, I0 = ["innerHTML"], _0 = {
  key: 3,
  class: "brv-section"
}, S0 = {
  key: 0,
  class: "brv-row"
}, L0 = { class: "brv-selectable" }, k0 = {
  key: 1,
  class: "brv-row"
}, T0 = { class: "brv-selectable" }, K0 = {
  key: 2,
  class: "brv-row"
}, D0 = { class: "brv-selectable" }, R0 = {
  key: 3,
  class: "brv-row"
}, O0 = { class: "brv-selectable" }, M0 = {
  key: 4,
  class: "brv-row"
}, N0 = { class: "brv-selectable" }, P0 = { class: "brv-section" }, V0 = { class: "brv-label-row" }, G0 = { class: "brv-log-tabs" }, X0 = ["onClick"], J0 = { class: "brv-log-filters" }, W0 = { class: "brv-filter-chip brv-filter-error" }, Y0 = { class: "brv-filter-chip brv-filter-warn" }, j0 = { class: "brv-filter-chip brv-filter-log" }, z0 = { class: "brv-log-list" }, Z0 = ["onClick"], q0 = { class: "brv-log-time brv-selectable" }, $0 = { class: "brv-log-lv" }, Ab = {
  key: 0,
  class: "brv-log-empty"
}, eb = { class: "brv-log-filters" }, tb = { class: "brv-filter-chip brv-filter-error" }, sb = { class: "brv-filter-chip brv-filter-warn" }, rb = { class: "brv-filter-chip brv-filter-log" }, nb = { class: "brv-log-list" }, ob = ["onClick"], ib = { class: "brv-log-time brv-selectable" }, ab = { class: "brv-log-lv" }, lb = { class: "brv-log-logger brv-selectable" }, cb = {
  key: 0,
  class: "brv-log-empty"
}, ub = { class: "brv-log-filters" }, db = { class: "brv-filter-chip brv-filter-error" }, fb = { class: "brv-filter-chip brv-filter-log" }, Bb = { class: "brv-log-list" }, gb = ["onClick"], hb = { class: "brv-net-method brv-selectable" }, pb = { class: "brv-net-dur brv-selectable" }, wb = { class: "brv-log-time brv-selectable" }, bb = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Qb = { key: 0 }, Cb = { key: 1 }, Ub = { key: 2 }, Fb = {
  key: 3,
  class: "brv-log--error"
}, mb = {
  key: 0,
  class: "brv-log-empty"
}, xb = {
  key: 3,
  class: "brv-log-list"
}, vb = ["onClick"], yb = { class: "brv-log-time brv-selectable" }, Eb = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, Hb = {
  key: 0,
  class: "brv-log-empty"
};
function Ib(e, A, t, s, r, n) {
  var o, i, a, c, u;
  return g(), h("div", gp, [
    r.isOpen ? (g(), h("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: A[28] || (A[28] = (l) => r.backdropPressed = l.target === l.currentTarget),
      onClick: A[29] || (A[29] = es((l) => r.backdropPressed && n.close(), ["self"]))
    }, [
      d("div", hp, [
        (g(), $o(Nd("style"), {
          textContent: C(r.fmtCss)
        }, null, 8, ["textContent"])),
        d("div", pp, [
          d("span", wp, [
            A[30] || (A[30] = V(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (g(), h("span", bp, C(n.hotkey), 1)) : v("", !0)
          ]),
          n.viewProjects.length > 1 ? (g(), h("span", Qp, [
            (g(!0), h(M, null, j(n.viewProjects, (l) => (g(), h("button", {
              key: l.key,
              class: Y({ "brv-projects__on": r.project === l.key }),
              onClick: (f) => n.switchProject(l.key)
            }, C(l.label), 11, Cp))), 128))
          ])) : v("", !0),
          d("button", {
            class: "brv-close",
            onClick: A[0] || (A[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        r.notice ? (g(), h("div", {
          key: 0,
          class: Y(["brv-notice", `brv-notice--${r.notice.type}`])
        }, [
          d("b", null, C(r.notice.title), 1),
          V(" " + C(r.notice.message), 1)
        ], 2)) : v("", !0),
        d("div", Up, [
          r.selected ? (g(), h(M, { key: 1 }, [
            d("button", {
              class: "brv-back",
              onClick: A[1] || (A[1] = (l) => r.selected = null)
            }, "← 목록"),
            r.detailLoading ? (g(), h("div", Sp, [...A[32] || (A[32] = [
              d("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.detail ? (g(), h(M, { key: 1 }, [
              r.detail.screenshot ? (g(), h("div", Lp, [
                A[33] || (A[33] = d("div", { class: "brv-label" }, "화면 캡처", -1)),
                d("img", {
                  src: r.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, kp)
              ])) : v("", !0),
              r.bigShot ? (g(), h("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: A[2] || (A[2] = (l) => r.bigShot = null)
              }, [
                d("img", {
                  src: r.shotUrls[r.bigShot.file],
                  alt: r.bigShot.name
                }, null, 8, Tp),
                d("div", Kp, [
                  V(C(r.bigShot.name) + " · " + C(r.bigShot.label) + " ", 1),
                  A[34] || (A[34] = d("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : v("", !0),
              d("div", Dp, [
                A[39] || (A[39] = d("div", { class: "brv-label" }, "기본 정보", -1)),
                d("div", Rp, [
                  A[35] || (A[35] = d("span", null, "심각도", -1)),
                  d("span", {
                    class: Y(["brv-badge", `brv-sev--${(o = r.detail.severity) == null ? void 0 : o.toLowerCase()}`])
                  }, C(r.detail.severity), 3)
                ]),
                d("div", Op, [
                  A[36] || (A[36] = d("span", null, "상태", -1)),
                  d("span", Mp, [
                    r.statusSaving ? (g(), h("span", Np)) : v("", !0),
                    d("select", {
                      class: Y(["brv-status-select", `brv-st--${(r.detail.status || "OPEN").toLowerCase()}`]),
                      value: r.detail.status || "OPEN",
                      disabled: r.statusSaving,
                      onChange: A[3] || (A[3] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (g(!0), h(M, null, j(r.STATUSES, (l) => (g(), h("option", {
                        key: l.value,
                        value: l.value
                      }, C(l.label), 9, Vp))), 128))
                    ], 42, Pp)
                  ])
                ]),
                d("div", Gp, [
                  A[37] || (A[37] = d("span", null, "보고자", -1)),
                  d("span", Xp, C(r.detail.reporter), 1)
                ]),
                d("div", Jp, [
                  A[38] || (A[38] = d("span", null, "일시", -1)),
                  d("span", Wp, C(n.formatDate(r.detail.insertDate)), 1)
                ])
              ]),
              d("div", Yp, [
                d("div", jp, [
                  d("span", zp, C(r.detail.kind && r.detail.kind !== "bug" ? `AI ${n.kindLabel} 작업` : "AI 자동 수정"), 1),
                  r.detail.kind && r.detail.kind !== "bug" ? (g(), h("span", Zp, C(n.kindLabel) + " · " + C(n.modeLabel), 1)) : v("", !0),
                  d("span", {
                    class: Y(["brv-fix", `brv-fix--${(r.detail.fixStatus || "none").toLowerCase()}`])
                  }, C(n.fixLabel(r.detail.fixStatus)), 3),
                  r.fixBusy || n.fixInProgress ? (g(), h("span", qp)) : v("", !0),
                  n.fixInProgress && n.fixElapsed ? (g(), h("span", $p, C(n.fixElapsed), 1)) : n.deployPending ? (g(), h("span", Aw, [...A[40] || (A[40] = [
                    d("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    V(" 배포 중", -1)
                  ])])) : v("", !0),
                  r.detail.fixStatus && n.fixable ? (g(), h("span", ew, [
                    d("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy,
                      onClick: A[4] || (A[4] = (...l) => n.refreshDetail && n.refreshDetail(...l)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, tw),
                    d("button", {
                      class: "brv-ai__tool",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[5] || (A[5] = (...l) => n.requestFix && n.requestFix(...l)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, sw),
                    r.detail.fixStatus === "MERGED" && r.detail.fixMergeSha ? (g(), h("button", {
                      key: 0,
                      class: "brv-ai__tool brv-ai__tool--danger",
                      disabled: r.fixBusy || n.fixInProgress,
                      onClick: A[6] || (A[6] = (...l) => n.revertFix && n.revertFix(...l)),
                      title: "병합된 이 수정을 되돌리는 브랜치·PR 을 만듭니다 (자동 병합 프로젝트면 병합까지)"
                    }, "되돌리기", 8, rw)) : v("", !0)
                  ])) : v("", !0)
                ]),
                !r.detail.fixStatus && r.detail.tool ? (g(), h("div", nw, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !r.detail.fixStatus && !n.fixable ? (g(), h("div", ow, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : r.detail.fixStatus ? (g(), h(M, { key: 3 }, [
                  n.planObj ? (g(), h("div", lw, [
                    d("div", cw, [
                      A[42] || (A[42] = d("b", null, "계획", -1)),
                      A[43] || (A[43] = V()),
                      d("span", uw, C(n.planObj.steps.length) + "단계 · 파일 " + C(n.planObj.files.length) + "개" + C(n.planObj.estimate ? " · " + n.planObj.estimate : ""), 1)
                    ]),
                    d("div", dw, C(n.planObj.summary), 1),
                    d("ol", fw, [
                      (g(!0), h(M, null, j(n.planObj.steps, (l, f) => (g(), h("li", {
                        key: f,
                        class: Y({ "brv-plan__step--done": f < n.planStep, "brv-plan__step--next": f === n.planStep && r.detail.fixStatus === "STEP_WAIT" })
                      }, [
                        d("b", null, C(l.title), 1),
                        f < n.planStep ? (g(), h("span", Bw, "✓")) : v("", !0),
                        d("div", gw, C(l.detail), 1)
                      ], 2))), 128))
                    ]),
                    n.planObj.approach || n.planObj.risks.length || n.planObj.questions.length || n.planObj.files.length ? (g(), h("details", hw, [
                      d("summary", null, "접근 · 파일 · 위험" + C(n.planObj.questions.length ? " · 확인 질문 " + n.planObj.questions.length : ""), 1),
                      n.planObj.questions.length ? (g(), h("div", pw, [
                        A[44] || (A[44] = d("b", null, "확인 질문", -1)),
                        d("ul", null, [
                          (g(!0), h(M, null, j(n.planObj.questions, (l, f) => (g(), h("li", {
                            key: "q" + f
                          }, C(l), 1))), 128))
                        ])
                      ])) : v("", !0),
                      n.planObj.approach ? (g(), h("div", {
                        key: 1,
                        class: "brv-selectable",
                        innerHTML: n.md(n.planObj.approach)
                      }, null, 8, ww)) : v("", !0),
                      n.planObj.risks.length ? (g(), h("div", bw, [
                        A[45] || (A[45] = d("b", null, "위험", -1)),
                        d("ul", null, [
                          (g(!0), h(M, null, j(n.planObj.risks, (l, f) => (g(), h("li", {
                            key: "r" + f
                          }, C(l), 1))), 128))
                        ])
                      ])) : v("", !0),
                      n.planObj.files.length ? (g(), h("div", Qw, [
                        A[46] || (A[46] = d("b", null, "파일", -1)),
                        d("ul", Cw, [
                          (g(!0), h(M, null, j(n.planObj.files, (l, f) => (g(), h("li", {
                            key: "f" + f
                          }, [
                            d("code", null, C(l), 1)
                          ]))), 128))
                        ])
                      ])) : v("", !0),
                      n.planObj.acceptance && n.planObj.acceptance.manual && n.planObj.acceptance.manual.length ? (g(), h("div", Uw, [
                        A[47] || (A[47] = d("b", null, "사람이 확인할 것", -1)),
                        d("ul", null, [
                          (g(!0), h(M, null, j(n.planObj.acceptance.manual, (l, f) => (g(), h("li", {
                            key: "m" + f
                          }, C(l), 1))), 128))
                        ])
                      ])) : v("", !0)
                    ])) : v("", !0),
                    r.detail.fixStatus === "PLANNED" && n.fixable ? (g(), h("div", Fw, [
                      d("button", {
                        class: "brv-fix-btn",
                        disabled: r.fixBusy,
                        onClick: A[8] || (A[8] = (...l) => n.approvePlan && n.approvePlan(...l))
                      }, "계획 승인 → 구현 시작", 8, mw),
                      d("label", xw, [
                        A[49] || (A[49] = V("개입 ", -1)),
                        QA(d("select", {
                          "onUpdate:modelValue": A[9] || (A[9] = (l) => r.approveMode = l),
                          class: "brv-plan__mode"
                        }, [...A[48] || (A[48] = [
                          d("option", { value: "plan" }, "계획 승인 뒤 끝까지 자동", -1),
                          d("option", { value: "step" }, "단계마다 확인", -1),
                          d("option", { value: "auto" }, "자동", -1)
                        ])], 512), [
                          [AB, r.approveMode]
                        ])
                      ]),
                      QA(d("input", {
                        "onUpdate:modelValue": A[10] || (A[10] = (l) => r.replanNote = l),
                        class: "brv-plan__note",
                        placeholder: "계획을 바꾸고 싶으면 메모 (질문의 답, 범위 조정 …)"
                      }, null, 512), [
                        [hs, r.replanNote]
                      ]),
                      d("button", {
                        class: "brv-ai__tool",
                        disabled: r.fixBusy,
                        onClick: A[11] || (A[11] = (...l) => n.replan && n.replan(...l))
                      }, "다시 계획", 8, vw)
                    ])) : r.detail.fixStatus === "STEP_WAIT" && n.fixable ? (g(), h("div", yw, [
                      d("span", Ew, C(n.planStep) + "/" + C(n.planObj.steps.length) + " 단계 완료 · 미리보기로 확인한 뒤", 1),
                      d("button", {
                        class: "brv-fix-btn",
                        disabled: r.fixBusy,
                        onClick: A[12] || (A[12] = (...l) => n.nextStep && n.nextStep(...l))
                      }, "다음 단계 → " + C(n.planObj.steps[n.planStep] ? n.planObj.steps[n.planStep].title : ""), 9, Hw)
                    ])) : v("", !0)
                  ])) : v("", !0),
                  r.detail.fixPrUrl || r.detail.fixBranch ? (g(), h("div", Iw, [
                    r.detail.fixPrUrl ? (g(), h("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: r.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + C(n.prNumber), 9, _w)) : v("", !0),
                    r.detail.fixRevertPrUrl ? (g(), h("a", {
                      key: 1,
                      class: "brv-link",
                      href: r.detail.fixRevertPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "되돌리기 PR", 8, Sw)) : v("", !0),
                    r.detail.fixBranch ? (g(), h("span", {
                      key: 2,
                      class: "brv-ai__branch brv-selectable",
                      title: r.detail.fixStatus === "READY" ? r.detail.fixPushed ? "AI 수정본이 담긴 작업 브랜치 - 원격 저장소에 같은 이름으로 올라가 있습니다 (PR 은 아직 없음)" : "AI 수정본이 담긴 작업 브랜치 - 아직 키트 서버 안에만 있고 원격에는 없습니다 (콘솔에서 내보내기)" : "AI 수정본이 담긴 작업 브랜치 (기준 브랜치는 건드리지 않음)"
                    }, C(r.detail.fixBranch), 9, Lw)) : v("", !0),
                    r.detail.fixStatus === "READY" ? (g(), h("span", kw, C(r.detail.fixPushed ? "원격에 브랜치만 있음 · PR 없음" : "키트 서버 안에만 있음 · 원격에 없음"), 1)) : v("", !0),
                    r.detail.fixVersion != null ? (g(), h(M, { key: 4 }, [
                      d("span", Tw, "v" + C(r.detail.fixVersion), 1),
                      r.detail.preview ? (g(), h(M, { key: 0 }, [
                        r.detail.preview.status === "UP" && r.detail.preview.url ? (g(), h("a", {
                          key: 0,
                          class: "brv-link",
                          href: r.detail.preview.url,
                          target: "_blank",
                          rel: "noopener",
                          title: "이 수정본으로 띄운 앱(프론트+백엔드+DB 사본)"
                        }, "미리보기 열기 ↗", 8, Kw)) : n.previewPending ? (g(), h("span", Dw, [
                          A[50] || (A[50] = d("span", { class: "brv-spin brv-spin--sm" }, null, -1)),
                          V(" 미리보기 준비 중(" + C(n.previewLabel) + ")", 1)
                        ])) : r.detail.preview.canPreview && n.fixable ? (g(), h("button", {
                          key: 2,
                          class: "brv-ai__tool",
                          disabled: r.fixBusy,
                          onClick: A[13] || (A[13] = (...l) => n.startPreview && n.startPreview(...l)),
                          title: "이 수정본으로 프론트·백엔드·DB 사본을 띄워 직접 써 봅니다 (몇 분)"
                        }, "미리보기 띄우기", 8, Rw)) : v("", !0),
                        r.detail.preview.status === "FAILED" ? (g(), h("span", {
                          key: 3,
                          class: "brv-ai__hint",
                          title: r.detail.preview.error || ""
                        }, "미리보기 실패", 8, Ow)) : v("", !0)
                      ], 64)) : v("", !0)
                    ], 64)) : v("", !0)
                  ])) : v("", !0),
                  r.detail.fixSummary ? (g(), h("div", {
                    key: 2,
                    class: "brv-ai__summary brv-selectable",
                    innerHTML: n.md(r.detail.fixSummary)
                  }, null, 8, Mw)) : v("", !0),
                  r.detail.fixReport || n.fixFiles.length ? (g(), h("details", Nw, [
                    A[52] || (A[52] = d("summary", null, [
                      V("수정 결과 "),
                      d("span", { class: "brv-suggest__hint" }, "원인 · 고친 내용 · 검증 · 확인이 필요한 점")
                    ], -1)),
                    n.fixRepro ? (g(), h("div", {
                      key: 0,
                      class: Y(["brv-result__repro", n.fixRepro.passed ? "ok" : "bad"])
                    }, [
                      A[51] || (A[51] = d("b", null, "재현 검증", -1)),
                      V(" " + C(n.fixRepro.passed ? "✓ 통과" : "✗ 실패") + " · " + C(n.fixRepro.rounds) + "회", 1),
                      n.fixRepro.note ? (g(), h("span", Pw, " · " + C(n.fixRepro.note), 1)) : v("", !0),
                      (i = n.fixRepro.evidence) != null && i.length ? (g(), h("ul", Vw, [
                        (g(!0), h(M, null, j(n.fixRepro.evidence.slice(0, 6), (l, f) => (g(), h("li", { key: f }, [
                          d("code", null, C(l), 1)
                        ]))), 128))
                      ])) : v("", !0)
                    ], 2)) : v("", !0),
                    r.detail.fixReport ? (g(), h("div", {
                      key: 1,
                      class: "brv-result__body brv-selectable",
                      innerHTML: n.md(r.detail.fixReport)
                    }, null, 8, Gw)) : v("", !0),
                    n.fixFiles.length ? (g(), h("div", Xw, [
                      d("span", Jw, "바뀐 파일 (" + C(n.fixFiles.length) + ")", 1),
                      d("ul", null, [
                        (g(!0), h(M, null, j(n.fixFiles, (l) => (g(), h("li", { key: l }, [
                          d("code", null, C(l), 1)
                        ]))), 128))
                      ])
                    ])) : v("", !0)
                  ])) : v("", !0),
                  n.kgLayout ? (g(), h("details", Ww, [
                    A[53] || (A[53] = d("summary", null, [
                      V("관련 기능·파일 "),
                      d("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    d("div", Yw, [
                      (g(), h("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: Ts({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (g(!0), h(M, null, j(n.kgLayout.cols, (l) => (g(), h("text", {
                          key: "c" + l.layer,
                          x: l.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, C(l.title), 9, zw))), 128)),
                        (g(!0), h(M, null, j(n.kgLayout.edges, (l, f) => (g(), h("path", {
                          key: "e" + f,
                          d: l.d,
                          class: Y(["brv-kg__edge", "brv-kg__edge--" + l.rel, { "brv-kg__edge--dim": r.kgHover && l.from !== r.kgHover && l.to !== r.kgHover }])
                        }, null, 10, Zw))), 128)),
                        (g(!0), h(M, null, j(n.kgLayout.nodes, (l) => (g(), h("g", {
                          key: l.id,
                          transform: `translate(${l.x},${l.y})`,
                          class: Y(["brv-kg__node", { "brv-kg__node--hit": l.hit, "brv-kg__node--dim": r.kgHover && r.kgHover !== l.id && !n.kgNbr(l.id) }]),
                          onMouseenter: (f) => r.kgHover = l.id,
                          onMouseleave: A[14] || (A[14] = (f) => r.kgHover = null)
                        }, [
                          d("title", null, C(l.label) + C(l.path ? `
` + l.path : "") + C(l.route ? `
` + l.route : "") + C(l.desc ? `
` + l.desc : ""), 1),
                          d("rect", {
                            width: l.w,
                            height: l.h,
                            rx: "4",
                            fill: n.kgColor(l.type)
                          }, null, 8, $w),
                          d("text", A0, C(l.short), 1)
                        ], 42, qw))), 128))
                      ], 12, jw))
                    ])
                  ])) : v("", !0),
                  n.fixShots.length ? (g(), h("div", e0, [
                    d("div", t0, [
                      A[54] || (A[54] = V("화면 확인 ", -1)),
                      d("span", s0, C(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    d("div", r0, [
                      (g(!0), h(M, null, j(n.fixShots, (l) => (g(), h("figure", {
                        key: l.file,
                        class: "brv-shots__item",
                        onClick: (f) => n.openShot(l)
                      }, [
                        r.shotUrls[l.file] ? (g(), h("img", {
                          key: 0,
                          src: r.shotUrls[l.file],
                          alt: l.name
                        }, null, 8, o0)) : (g(), h("div", i0, "…")),
                        d("figcaption", null, C(l.name.replace(/\.png$/i, "")), 1)
                      ], 8, n0))), 128))
                    ])
                  ])) : v("", !0),
                  r.detail.fixLog ? (g(), h("details", {
                    key: 6,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    d("summary", null, [
                      A[55] || (A[55] = V("진행 로그 ", -1)),
                      d("span", l0, C(n.logLineCount) + "줄", 1)
                    ]),
                    d("div", {
                      ref: "fixLogPre",
                      class: "brv-selectable brv-logbox",
                      innerHTML: n.logH(r.detail.fixLog)
                    }, null, 8, c0)
                  ], 8, a0)) : v("", !0),
                  n.fixSuggestions.length ? (g(), h("div", u0, [
                    A[56] || (A[56] = d("div", { class: "brv-suggest__title" }, [
                      V("추천 개선 "),
                      d("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (g(!0), h(M, null, j(n.fixSuggestions, (l, f) => (g(), h("div", {
                      key: f,
                      class: "brv-suggest__item"
                    }, [
                      d("span", {
                        class: "brv-suggest__text brv-selectable",
                        innerHTML: n.md(l)
                      }, null, 8, d0),
                      n.fixable ? (g(), h("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: r.fixBusy || n.fixInProgress,
                        onClick: (p) => n.runSuggestion(l)
                      }, "실행", 8, f0)) : v("", !0)
                    ]))), 128))
                  ])) : v("", !0),
                  d("div", B0, [
                    (g(!0), h(M, null, j(n.fixChat, (l, f) => (g(), h("div", {
                      key: f,
                      class: Y(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      d("span", g0, C(l.role === "user" ? "나" : "AI"), 1),
                      d("div", {
                        class: "brv-chat__text brv-selectable",
                        innerHTML: n.md(l.text)
                      }, null, 8, h0)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (g(), h("div", p0, [...A[57] || (A[57] = [
                      d("span", { class: "brv-chat__who" }, "AI", -1),
                      d("div", { class: "brv-chat__text" }, [
                        d("span", { class: "brv-spin brv-spin--sm" }),
                        V(" 생각 중…")
                      ], -1)
                    ])])) : v("", !0),
                    n.fixable ? (g(), h("div", w0, [
                      QA(d("textarea", {
                        "onUpdate:modelValue": A[15] || (A[15] = (l) => r.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: r.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          A[16] || (A[16] = $i(es((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          A[17] || (A[17] = $i(es((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, b0), [
                        [hs, r.chatInput]
                      ]),
                      d("div", Q0, [
                        d("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[18] || (A[18] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, C0),
                        d("button", {
                          class: "brv-fix-btn",
                          disabled: r.fixBusy || n.fixInProgress || !r.chatInput.trim(),
                          onClick: A[19] || (A[19] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, U0)
                      ])
                    ])) : v("", !0),
                    n.fixable ? (g(), h("div", F0, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : v("", !0)
                  ])
                ], 64)) : (g(), h("div", iw, [
                  d("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: r.fixBusy,
                    onClick: A[7] || (A[7] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, aw),
                  A[41] || (A[41] = d("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              r.detail.problem || r.detail.reproSteps || r.detail.expectedResult ? (g(), h("div", m0, [
                A[61] || (A[61] = d("div", { class: "brv-label" }, "내용", -1)),
                r.detail.problem ? (g(), h("div", x0, [
                  A[58] || (A[58] = d("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  d("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.problem)
                  }, null, 8, v0)
                ])) : v("", !0),
                r.detail.reproSteps ? (g(), h("div", y0, [
                  A[59] || (A[59] = d("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  d("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.reproSteps)
                  }, null, 8, E0)
                ])) : v("", !0),
                r.detail.expectedResult ? (g(), h("div", H0, [
                  A[60] || (A[60] = d("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  d("div", {
                    class: "brv-text brv-selectable",
                    innerHTML: n.md(r.detail.expectedResult)
                  }, null, 8, I0)
                ])) : v("", !0)
              ])) : v("", !0),
              n.parsedContext ? (g(), h("div", _0, [
                A[67] || (A[67] = d("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (g(), h("div", S0, [
                  A[62] || (A[62] = d("span", null, "카메라", -1)),
                  d("span", L0, C(n.parsedContext.camera.longitude) + "°, " + C(n.parsedContext.camera.latitude) + "° · 고도 " + C(n.parsedContext.camera.height) + "m · H" + C(n.parsedContext.camera.heading) + "° P" + C(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : v("", !0),
                (a = n.parsedContext.menus) != null && a.header ? (g(), h("div", k0, [
                  A[63] || (A[63] = d("span", null, "상단 탭", -1)),
                  d("span", T0, C(n.parsedContext.menus.header), 1)
                ])) : v("", !0),
                n.parsedContext.activeData ? (g(), h("div", K0, [
                  A[64] || (A[64] = d("span", null, "데이터셋", -1)),
                  d("span", D0, C(((c = n.parsedContext.activeData.datasets) == null ? void 0 : c.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : v("", !0),
                (u = n.parsedContext.activeData) != null && u.terrain ? (g(), h("div", R0, [
                  A[65] || (A[65] = d("span", null, "지형", -1)),
                  d("span", O0, C(n.parsedContext.activeData.terrain), 1)
                ])) : v("", !0),
                n.parsedContext.datetime ? (g(), h("div", M0, [
                  A[66] || (A[66] = d("span", null, "발생 시각", -1)),
                  d("span", N0, C(n.parsedContext.datetime), 1)
                ])) : v("", !0)
              ])) : v("", !0),
              d("div", P0, [
                d("div", V0, [
                  A[68] || (A[68] = d("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  d("div", G0, [
                    (g(!0), h(M, null, j(n.logTabs, (l) => (g(), h("button", {
                      key: l.id,
                      class: Y(["brv-log-tab", { active: r.logTab === l.id }]),
                      onClick: (f) => r.logTab = l.id
                    }, [
                      V(C(l.label) + " ", 1),
                      l.count ? (g(), h("span", {
                        key: 0,
                        class: Y(["brv-log-tab-count", l.countClass])
                      }, C(l.count), 3)) : v("", !0)
                    ], 10, X0))), 128))
                  ])
                ]),
                r.logTab === "front" ? (g(), h(M, { key: 0 }, [
                  d("div", J0, [
                    d("label", W0, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[20] || (A[20] = (l) => r.showFE.error = l)
                      }, null, 512), [
                        [DA, r.showFE.error]
                      ]),
                      V(" 오류 (" + C(n.countFE("error")) + ") ", 1)
                    ]),
                    d("label", Y0, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[21] || (A[21] = (l) => r.showFE.warn = l)
                      }, null, 512), [
                        [DA, r.showFE.warn]
                      ]),
                      V(" 경고 (" + C(n.countFE("warn")) + ") ", 1)
                    ]),
                    d("label", j0, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[22] || (A[22] = (l) => r.showFE.log = l)
                      }, null, 512), [
                        [DA, r.showFE.log]
                      ]),
                      V(" 로그 (" + C(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  d("div", z0, [
                    (g(!0), h(M, null, j(n.filteredFrontLogs, (l, f) => {
                      var p;
                      return g(), h("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (b) => n.toggleExpand("f" + f)
                      }, [
                        d("span", q0, C((p = l.time) == null ? void 0 : p.slice(11, 23)), 1),
                        d("span", $0, C(l.level), 1),
                        d("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("f" + f) }])
                        }, C(l.message), 3)
                      ], 10, Z0);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (g(), h("div", Ab, "표시할 로그 없음")) : v("", !0)
                  ])
                ], 64)) : v("", !0),
                r.logTab === "back" ? (g(), h(M, { key: 1 }, [
                  d("div", eb, [
                    d("label", tb, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[23] || (A[23] = (l) => r.showBE.error = l)
                      }, null, 512), [
                        [DA, r.showBE.error]
                      ]),
                      V(" ERROR (" + C(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    d("label", sb, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[24] || (A[24] = (l) => r.showBE.warn = l)
                      }, null, 512), [
                        [DA, r.showBE.warn]
                      ]),
                      V(" WARN (" + C(n.countBE("WARN")) + ") ", 1)
                    ]),
                    d("label", rb, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[25] || (A[25] = (l) => r.showBE.info = l)
                      }, null, 512), [
                        [DA, r.showBE.info]
                      ]),
                      V(" INFO (" + C(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  d("div", nb, [
                    (g(!0), h(M, null, j(n.filteredBackLogs, (l, f) => {
                      var p, b;
                      return g(), h("div", {
                        key: f,
                        class: Y(["brv-log-item", `brv-log--${(p = l.level) == null ? void 0 : p.toLowerCase()}`]),
                        onClick: (U) => n.toggleExpand("b" + f)
                      }, [
                        d("span", ib, C((b = l.time) == null ? void 0 : b.slice(11, 23)), 1),
                        d("span", ab, C(l.level), 1),
                        d("span", lb, C(n.shortLogger(l.logger)), 1),
                        d("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("b" + f) }])
                        }, C(l.message), 3)
                      ], 10, ob);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (g(), h("div", cb, "표시할 로그 없음")) : v("", !0)
                  ])
                ], 64)) : v("", !0),
                r.logTab === "net" ? (g(), h(M, { key: 2 }, [
                  d("div", ub, [
                    d("label", db, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[26] || (A[26] = (l) => r.showNet.error = l)
                      }, null, 512), [
                        [DA, r.showNet.error]
                      ]),
                      V(" 에러 (" + C(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    d("label", fb, [
                      QA(d("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": A[27] || (A[27] = (l) => r.showNet.ok = l)
                      }, null, 512), [
                        [DA, r.showNet.ok]
                      ]),
                      V(" 성공 (" + C(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  d("div", Bb, [
                    (g(!0), h(M, null, j(n.filteredNetLogs, (l, f) => {
                      var p;
                      return g(), h("div", {
                        key: f,
                        class: Y(["brv-net-item", n.netClass(l)]),
                        onClick: (b) => n.toggleExpand("n" + f)
                      }, [
                        d("span", {
                          class: Y(["brv-net-status", n.statusClass(l.status)])
                        }, C(l.status || "ERR"), 3),
                        d("span", hb, C(l.method), 1),
                        d("span", {
                          class: Y(["brv-log-msg brv-selectable", { expanded: r.expanded.has("n" + f) }])
                        }, C(l.url), 3),
                        d("span", pb, C(l.duration) + "ms", 1),
                        d("span", wb, C((p = l.time) == null ? void 0 : p.slice(11, 19)), 1)
                      ], 10, gb);
                    }), 128)),
                    (g(!0), h(M, null, j(n.filteredNetLogs, (l, f) => (g(), h(M, {
                      key: "d" + f
                    }, [
                      r.expanded.has("n" + f) ? (g(), h("div", bb, [
                        l.params ? (g(), h("div", Qb, [
                          A[69] || (A[69] = d("b", null, "Params:", -1)),
                          V(" " + C(l.params), 1)
                        ])) : v("", !0),
                        l.requestBody ? (g(), h("div", Cb, [
                          A[70] || (A[70] = d("b", null, "Request:", -1)),
                          V(" " + C(l.requestBody), 1)
                        ])) : v("", !0),
                        l.responseBody ? (g(), h("div", Ub, [
                          A[71] || (A[71] = d("b", null, "Response:", -1)),
                          V(" " + C(l.responseBody), 1)
                        ])) : v("", !0),
                        l.error ? (g(), h("div", Fb, [
                          A[72] || (A[72] = d("b", null, "Error:", -1)),
                          V(" " + C(l.error), 1)
                        ])) : v("", !0)
                      ])) : v("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (g(), h("div", mb, "표시할 요청 없음")) : v("", !0)
                  ])
                ], 64)) : v("", !0),
                r.logTab === "mutation" ? (g(), h("div", xb, [
                  (g(!0), h(M, null, j(n.parsedMutationLog, (l, f) => (g(), h("div", {
                    key: f,
                    class: "brv-log-item",
                    onClick: (p) => n.toggleExpand("m" + f)
                  }, [
                    d("span", yb, C(l.time), 1),
                    d("span", {
                      class: Y(["brv-log-msg brv-mutation brv-selectable", { expanded: r.expanded.has("m" + f) }])
                    }, C(l.type), 3),
                    l.payload !== null ? (g(), h("span", Eb, C(n.formatPayload(l.payload)), 1)) : v("", !0)
                  ], 8, vb))), 128)),
                  n.parsedMutationLog.length === 0 ? (g(), h("div", Hb, "기록된 mutation 없음")) : v("", !0)
                ])) : v("", !0)
              ])
            ], 64)) : v("", !0)
          ], 64)) : (g(), h(M, { key: 0 }, [
            r.loading ? (g(), h("div", Fp, [...A[31] || (A[31] = [
              d("span", { class: "brv-spin" }, null, -1),
              V(" 불러오는 중... ", -1)
            ])])) : r.list.length === 0 ? (g(), h("div", mp, "저장된 리포트가 없습니다.")) : (g(), h("div", xp, [
              (g(!0), h(M, null, j(r.list, (l) => {
                var f;
                return g(), h("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (p) => n.openDetail(l.bugReportId)
                }, [
                  d("span", {
                    class: Y(["brv-badge", `brv-sev--${(f = l.severity) == null ? void 0 : f.toLowerCase()}`])
                  }, C(l.severity), 3),
                  d("span", {
                    class: Y(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, C(n.statusLabel(l.status)), 3),
                  l.tool ? (g(), h("span", yp, "도구")) : v("", !0),
                  d("span", Ep, C(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (g(), h("span", {
                    key: 1,
                    class: Y(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, C(n.fixShort(l.fixStatus)), 11, Hp)) : v("", !0),
                  d("span", Ip, C(l.reporter) + " · " + C(n.formatDate(l.insertDate)), 1),
                  d("button", {
                    class: "brv-del",
                    onClick: es((p) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, _p)
                ], 8, vp);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : v("", !0)
  ]);
}
const _b = /* @__PURE__ */ ei(Bp, [["render", Ib], ["styles", [up]], ["__scopeId", "data-v-4915b2a5"]]);
function _n({ endpoint: e, project: A, apiKey: t, user: s, adminKey: r }) {
  const n = e ? `${String(e).replace(/\/+$/, "")}/p/${A}` : "", o = !!n;
  async function i(a, c, u, { query: l, blob: f } = {}) {
    if (!o) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const p = { Accept: "application/json" };
    u !== void 0 && (p["Content-Type"] = "application/json"), t && (p["X-Devloop-Key"] = t), r && (p["X-Devloop-Admin"] = r);
    const b = typeof s == "function" ? s() : s;
    b && (p["X-Devloop-User"] = String(b));
    const U = l ? "?" + new URLSearchParams(l).toString() : "", m = await fetch(n + c + U, { method: a, headers: p, body: u === void 0 ? void 0 : JSON.stringify(u) });
    if (f) {
      if (!m.ok) throw Object.assign(new Error(`HTTP ${m.status}`), { status: m.status });
      return URL.createObjectURL(await m.blob());
    }
    if (m.status === 204) return null;
    const _ = await m.text();
    let y = null;
    try {
      y = _ ? JSON.parse(_) : null;
    } catch {
    }
    if (!m.ok) {
      const w = new Error((y == null ? void 0 : y.message) || `HTTP ${m.status}`);
      throw w.status = m.status, w;
    }
    return (y == null ? void 0 : y.content) ?? y;
  }
  return {
    enabled: o,
    base: n,
    info: () => i("GET", "/info"),
    save: (a) => i("POST", "/reports", a),
    list: () => i("GET", "/reports"),
    get: (a) => i("GET", `/reports/${a}`),
    fixState: (a) => i("GET", `/reports/${a}/fix`),
    setStatus: (a, c) => i("PATCH", `/reports/${a}/status`, { status: c }),
    remove: (a) => i("DELETE", `/reports/${a}`),
    requestFix: (a) => i("POST", `/reports/${a}/request-fix`),
    createTask: (a) => i("POST", "/tasks", a),
    planApprove: (a, c) => i("POST", `/reports/${a}/plan/approve`, c || {}),
    planNext: (a) => i("POST", `/reports/${a}/plan/next`),
    planReplan: (a, c) => i("POST", `/reports/${a}/plan/replan`, { note: c }),
    fixChat: (a, c, u) => i("POST", `/reports/${a}/fix-chat`, { message: c, mode: u }),
    fixSync: (a) => i("POST", `/reports/${a}/fix-sync`),
    previewStart: (a) => i("POST", `/reports/${a}/preview`),
    previewStop: (a) => i("DELETE", `/reports/${a}/preview`),
    revert: (a, c) => i("POST", `/reports/${a}/revert`, { reason: c }),
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
const An = (e, A) => kA.fromClientRect(e, A.getBoundingClientRect()), Sb = (e) => {
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
}, bA = function() {
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
}, ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Lb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var js = 0; js < ia.length; js++)
  Lb[ia.charCodeAt(js)] = js;
var aa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", ts = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zs = 0; zs < aa.length; zs++)
  ts[aa.charCodeAt(zs)] = zs;
var kb = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), u = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = ts[e.charCodeAt(s)], o = ts[e.charCodeAt(s + 1)], i = ts[e.charCodeAt(s + 2)], a = ts[e.charCodeAt(s + 3)], u[r++] = n << 2 | o >> 4, u[r++] = (o & 15) << 4 | i >> 2, u[r++] = (i & 3) << 6 | a & 63;
  return c;
}, Tb = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, Kb = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, ht = 5, si = 11, Sn = 2, Db = si - ht, Cc = 65536 >> ht, Rb = 1 << ht, Ln = Rb - 1, Ob = 1024 >> ht, Mb = Cc + Ob, Nb = Mb, Pb = 32, Vb = Nb + Pb, Gb = 65536 >> si, Xb = 1 << Db, Jb = Xb - 1, la = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, Wb = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Yb = function(e, A) {
  var t = kb(e), s = Array.isArray(t) ? Kb(t) : new Uint32Array(t), r = Array.isArray(t) ? Tb(t) : new Uint16Array(t), n = 24, o = la(r, n / 2, s[4] / 2), i = s[5] === 2 ? la(r, (n + s[4]) / 2) : Wb(s, Math.ceil((n + s[4]) / 4));
  return new jb(s[0], s[1], s[2], s[3], o, i);
}, jb = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> ht], t = (t << Sn) + (A & Ln), this.data[t];
        if (A <= 65535)
          return t = this.index[Cc + (A - 55296 >> ht)], t = (t << Sn) + (A & Ln), this.data[t];
        if (A < this.highStart)
          return t = Vb - Gb + (A >> si), t = this.index[t], t += A >> ht & Jb, t = this.index[t], t = (t << Sn) + (A & Ln), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), ca = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", zb = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Zs = 0; Zs < ca.length; Zs++)
  zb[ca.charCodeAt(Zs)] = Zs;
var Zb = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", ua = 50, qb = 1, Uc = 2, Fc = 3, $b = 4, AQ = 5, da = 7, mc = 8, fa = 9, Ye = 10, co = 11, Ba = 12, uo = 13, eQ = 14, ss = 15, fo = 16, qs = 17, Yt = 18, tQ = 19, ga = 20, Bo = 21, jt = 22, kn = 23, Ct = 24, GA = 25, rs = 26, ns = 27, Ut = 28, sQ = 29, ct = 30, rQ = 31, $s = 32, Ar = 33, go = 34, ho = 35, po = 36, _s = 37, wo = 38, br = 39, Qr = 40, Tn = 41, xc = 42, nQ = 43, oQ = [9001, 65288], vc = "!", Z = "×", er = "÷", bo = Yb(Zb), xe = [ct, po], Qo = [qb, Uc, Fc, AQ], yc = [Ye, mc], ha = [ns, rs], iQ = Qo.concat(yc), pa = [wo, br, Qr, go, ho], aQ = [ss, uo], lQ = function(e, A) {
  A === void 0 && (A = "strict");
  var t = [], s = [], r = [];
  return e.forEach(function(n, o) {
    var i = bo.get(n);
    if (i > ua ? (r.push(!0), i -= ua) : r.push(!1), ["normal", "auto", "loose"].indexOf(A) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return s.push(o), t.push(fo);
    if (i === $b || i === co) {
      if (o === 0)
        return s.push(o), t.push(ct);
      var a = t[o - 1];
      return iQ.indexOf(a) === -1 ? (s.push(s[o - 1]), t.push(a)) : (s.push(o), t.push(ct));
    }
    if (s.push(o), i === rQ)
      return t.push(A === "strict" ? Bo : _s);
    if (i === xc || i === sQ)
      return t.push(ct);
    if (i === nQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(_s) : t.push(ct);
    t.push(i);
  }), [s, t, r];
}, Kn = function(e, A, t, s) {
  var r = s[t];
  if (Array.isArray(e) ? e.indexOf(r) !== -1 : e === r)
    for (var n = t; n <= s.length; ) {
      n++;
      var o = s[n];
      if (o === A)
        return !0;
      if (o !== Ye)
        break;
    }
  if (r === Ye)
    for (var n = t; n > 0; ) {
      n--;
      var i = s[n];
      if (Array.isArray(e) ? e.indexOf(i) !== -1 : e === i)
        for (var a = t; a <= s.length; ) {
          a++;
          var o = s[a];
          if (o === A)
            return !0;
          if (o !== Ye)
            break;
        }
      if (i !== Ye)
        break;
    }
  return !1;
}, wa = function(e, A) {
  for (var t = e; t >= 0; ) {
    var s = A[t];
    if (s === Ye)
      t--;
    else
      return s;
  }
  return 0;
}, cQ = function(e, A, t, s, r) {
  if (t[s] === 0)
    return Z;
  var n = s - 1;
  if (Array.isArray(r) && r[n] === !0)
    return Z;
  var o = n - 1, i = n + 1, a = A[n], c = o >= 0 ? A[o] : 0, u = A[i];
  if (a === Uc && u === Fc)
    return Z;
  if (Qo.indexOf(a) !== -1)
    return vc;
  if (Qo.indexOf(u) !== -1 || yc.indexOf(u) !== -1)
    return Z;
  if (wa(n, A) === mc)
    return er;
  if (bo.get(e[n]) === co || (a === $s || a === Ar) && bo.get(e[i]) === co || a === da || u === da || a === fa || [Ye, uo, ss].indexOf(a) === -1 && u === fa || [qs, Yt, tQ, Ct, Ut].indexOf(u) !== -1 || wa(n, A) === jt || Kn(kn, jt, n, A) || Kn([qs, Yt], Bo, n, A) || Kn(Ba, Ba, n, A))
    return Z;
  if (a === Ye)
    return er;
  if (a === kn || u === kn)
    return Z;
  if (u === fo || a === fo)
    return er;
  if ([uo, ss, Bo].indexOf(u) !== -1 || a === eQ || c === po && aQ.indexOf(a) !== -1 || a === Ut && u === po || u === ga || xe.indexOf(u) !== -1 && a === GA || xe.indexOf(a) !== -1 && u === GA || a === ns && [_s, $s, Ar].indexOf(u) !== -1 || [_s, $s, Ar].indexOf(a) !== -1 && u === rs || xe.indexOf(a) !== -1 && ha.indexOf(u) !== -1 || ha.indexOf(a) !== -1 && xe.indexOf(u) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [ns, rs].indexOf(a) !== -1 && (u === GA || [jt, ss].indexOf(u) !== -1 && A[i + 1] === GA) || // ( OP | HY ) × NU
  [jt, ss].indexOf(a) !== -1 && u === GA || // NU ×	(NU | SY | IS)
  a === GA && [GA, Ut, Ct].indexOf(u) !== -1)
    return Z;
  if ([GA, Ut, Ct, qs, Yt].indexOf(u) !== -1)
    for (var l = n; l >= 0; ) {
      var f = A[l];
      if (f === GA)
        return Z;
      if ([Ut, Ct].indexOf(f) !== -1)
        l--;
      else
        break;
    }
  if ([ns, rs].indexOf(u) !== -1)
    for (var l = [qs, Yt].indexOf(a) !== -1 ? o : n; l >= 0; ) {
      var f = A[l];
      if (f === GA)
        return Z;
      if ([Ut, Ct].indexOf(f) !== -1)
        l--;
      else
        break;
    }
  if (wo === a && [wo, br, go, ho].indexOf(u) !== -1 || [br, go].indexOf(a) !== -1 && [br, Qr].indexOf(u) !== -1 || [Qr, ho].indexOf(a) !== -1 && u === Qr || pa.indexOf(a) !== -1 && [ga, rs].indexOf(u) !== -1 || pa.indexOf(u) !== -1 && a === ns || xe.indexOf(a) !== -1 && xe.indexOf(u) !== -1 || a === Ct && xe.indexOf(u) !== -1 || xe.concat(GA).indexOf(a) !== -1 && u === jt && oQ.indexOf(e[i]) === -1 || xe.concat(GA).indexOf(u) !== -1 && a === Yt)
    return Z;
  if (a === Tn && u === Tn) {
    for (var p = t[n], b = 1; p > 0 && (p--, A[p] === Tn); )
      b++;
    if (b % 2 !== 0)
      return Z;
  }
  return a === $s && u === Ar ? Z : er;
}, uQ = function(e, A) {
  A || (A = { lineBreak: "normal", wordBreak: "normal" });
  var t = lQ(e, A.lineBreak), s = t[0], r = t[1], n = t[2];
  (A.wordBreak === "break-all" || A.wordBreak === "break-word") && (r = r.map(function(i) {
    return [GA, ct, xc].indexOf(i) !== -1 ? _s : i;
  }));
  var o = A.wordBreak === "keep-all" ? n.map(function(i, a) {
    return i && e[a] >= 19968 && e[a] <= 40959;
  }) : void 0;
  return [s, r, o];
}, dQ = (
  /** @class */
  function() {
    function e(A, t, s, r) {
      this.codePoints = A, this.required = t === vc, this.start = s, this.end = r;
    }
    return e.prototype.slice = function() {
      return bA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, e;
  }()
), fQ = function(e, A) {
  var t = en(e), s = uQ(t, A), r = s[0], n = s[1], o = s[2], i = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= i)
        return { done: !0, value: null };
      for (var u = Z; c < i && (u = cQ(t, n, r, ++c, o)) === Z; )
        ;
      if (u !== Z || c === i) {
        var l = new dQ(t, u, a, c);
        return a = c, { value: l, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
};
const BQ = 1, gQ = 2, Mt = 4, ba = 8, Ir = 10, Qa = 47, ws = 92, hQ = 9, pQ = 32, tr = 34, zt = 61, wQ = 35, bQ = 36, QQ = 37, sr = 39, rr = 40, Zt = 41, CQ = 95, NA = 45, UQ = 33, FQ = 60, mQ = 62, xQ = 64, vQ = 91, yQ = 93, EQ = 61, HQ = 123, nr = 63, IQ = 125, Ca = 124, _Q = 126, SQ = 128, Ua = 65533, Dn = 42, ft = 43, LQ = 44, kQ = 58, TQ = 59, Ss = 46, KQ = 0, DQ = 8, RQ = 11, OQ = 14, MQ = 31, NQ = 127, ce = -1, Ec = 48, Hc = 97, Ic = 101, PQ = 102, VQ = 117, GQ = 122, _c = 65, Sc = 69, Lc = 70, XQ = 85, JQ = 90, _A = (e) => e >= Ec && e <= 57, WQ = (e) => e >= 55296 && e <= 57343, Ft = (e) => _A(e) || e >= _c && e <= Lc || e >= Hc && e <= PQ, YQ = (e) => e >= Hc && e <= GQ, jQ = (e) => e >= _c && e <= JQ, zQ = (e) => YQ(e) || jQ(e), ZQ = (e) => e >= SQ, or = (e) => e === Ir || e === hQ || e === pQ, _r = (e) => zQ(e) || ZQ(e) || e === CQ, Fa = (e) => _r(e) || _A(e) || e === NA, qQ = (e) => e >= KQ && e <= DQ || e === RQ || e >= OQ && e <= MQ || e === NQ, Xe = (e, A) => e !== ws ? !1 : A !== Ir, ir = (e, A, t) => e === NA ? _r(A) || Xe(A, t) : _r(e) ? !0 : !!(e === ws && Xe(e, A)), Rn = (e, A, t) => e === ft || e === NA ? _A(A) ? !0 : A === Ss && _A(t) : _A(e === Ss ? A : e), $Q = (e) => {
  let A = 0, t = 1;
  (e[A] === ft || e[A] === NA) && (e[A] === NA && (t = -1), A++);
  const s = [];
  for (; _A(e[A]); )
    s.push(e[A++]);
  const r = s.length ? parseInt(bA(...s), 10) : 0;
  e[A] === Ss && A++;
  const n = [];
  for (; _A(e[A]); )
    n.push(e[A++]);
  const o = n.length, i = o ? parseInt(bA(...n), 10) : 0;
  (e[A] === Sc || e[A] === Ic) && A++;
  let a = 1;
  (e[A] === ft || e[A] === NA) && (e[A] === NA && (a = -1), A++);
  const c = [];
  for (; _A(e[A]); )
    c.push(e[A++]);
  const u = c.length ? parseInt(bA(...c), 10) : 0;
  return t * (r + i * Math.pow(10, -o)) * Math.pow(10, a * u);
}, AC = {
  type: 2
  /* TokenType.LEFT_PARENTHESIS_TOKEN */
}, eC = {
  type: 3
  /* TokenType.RIGHT_PARENTHESIS_TOKEN */
}, tC = {
  type: 4
  /* TokenType.COMMA_TOKEN */
}, sC = {
  type: 13
  /* TokenType.SUFFIX_MATCH_TOKEN */
}, rC = {
  type: 8
  /* TokenType.PREFIX_MATCH_TOKEN */
}, nC = {
  type: 21
  /* TokenType.COLUMN_TOKEN */
}, oC = {
  type: 9
  /* TokenType.DASH_MATCH_TOKEN */
}, iC = {
  type: 10
  /* TokenType.INCLUDE_MATCH_TOKEN */
}, aC = {
  type: 11
  /* TokenType.LEFT_CURLY_BRACKET_TOKEN */
}, lC = {
  type: 12
  /* TokenType.RIGHT_CURLY_BRACKET_TOKEN */
}, cC = {
  type: 14
  /* TokenType.SUBSTRING_MATCH_TOKEN */
}, ar = {
  type: 23
  /* TokenType.BAD_URL_TOKEN */
}, uC = {
  type: 1
  /* TokenType.BAD_STRING_TOKEN */
}, dC = {
  type: 25
  /* TokenType.CDO_TOKEN */
}, fC = {
  type: 24
  /* TokenType.CDC_TOKEN */
}, BC = {
  type: 26
  /* TokenType.COLON_TOKEN */
}, gC = {
  type: 27
  /* TokenType.SEMICOLON_TOKEN */
}, hC = {
  type: 28
  /* TokenType.LEFT_SQUARE_BRACKET_TOKEN */
}, pC = {
  type: 29
  /* TokenType.RIGHT_SQUARE_BRACKET_TOKEN */
}, wC = {
  type: 31
  /* TokenType.WHITESPACE_TOKEN */
}, Co = {
  type: 32
  /* TokenType.EOF_TOKEN */
};
class kc {
  constructor() {
    this._value = [];
  }
  write(A) {
    this._value = this._value.concat(en(A));
  }
  read() {
    const A = [];
    let t = this.consumeToken();
    for (; t !== Co; )
      A.push(t), t = this.consumeToken();
    return A;
  }
  consumeToken() {
    const A = this.consumeCodePoint();
    switch (A) {
      case tr:
        return this.consumeStringToken(tr);
      case wQ:
        const t = this.peekCodePoint(0), s = this.peekCodePoint(1), r = this.peekCodePoint(2);
        if (Fa(t) || Xe(s, r)) {
          const p = ir(t, s, r) ? gQ : BQ;
          return { type: 5, value: this.consumeName(), flags: p };
        }
        break;
      case bQ:
        if (this.peekCodePoint(0) === zt)
          return this.consumeCodePoint(), sC;
        break;
      case sr:
        return this.consumeStringToken(sr);
      case rr:
        return AC;
      case Zt:
        return eC;
      case Dn:
        if (this.peekCodePoint(0) === zt)
          return this.consumeCodePoint(), cC;
        break;
      case ft:
        if (Rn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case LQ:
        return tC;
      case NA:
        const n = A, o = this.peekCodePoint(0), i = this.peekCodePoint(1);
        if (Rn(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        if (ir(n, o, i))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        if (o === NA && i === mQ)
          return this.consumeCodePoint(), this.consumeCodePoint(), fC;
        break;
      case Ss:
        if (Rn(A, this.peekCodePoint(0), this.peekCodePoint(1)))
          return this.reconsumeCodePoint(A), this.consumeNumericToken();
        break;
      case Qa:
        if (this.peekCodePoint(0) === Dn)
          for (this.consumeCodePoint(); ; ) {
            let p = this.consumeCodePoint();
            if (p === Dn && (p = this.consumeCodePoint(), p === Qa))
              return this.consumeToken();
            if (p === ce)
              return this.consumeToken();
          }
        break;
      case kQ:
        return BC;
      case TQ:
        return gC;
      case FQ:
        if (this.peekCodePoint(0) === UQ && this.peekCodePoint(1) === NA && this.peekCodePoint(2) === NA)
          return this.consumeCodePoint(), this.consumeCodePoint(), dC;
        break;
      case xQ:
        const a = this.peekCodePoint(0), c = this.peekCodePoint(1), u = this.peekCodePoint(2);
        if (ir(a, c, u))
          return { type: 7, value: this.consumeName() };
        break;
      case vQ:
        return hC;
      case ws:
        if (Xe(A, this.peekCodePoint(0)))
          return this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
        break;
      case yQ:
        return pC;
      case EQ:
        if (this.peekCodePoint(0) === zt)
          return this.consumeCodePoint(), rC;
        break;
      case HQ:
        return aC;
      case IQ:
        return lC;
      case VQ:
      case XQ:
        const l = this.peekCodePoint(0), f = this.peekCodePoint(1);
        return l === ft && (Ft(f) || f === nr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(A), this.consumeIdentLikeToken();
      case Ca:
        if (this.peekCodePoint(0) === zt)
          return this.consumeCodePoint(), oC;
        if (this.peekCodePoint(0) === Ca)
          return this.consumeCodePoint(), nC;
        break;
      case _Q:
        if (this.peekCodePoint(0) === zt)
          return this.consumeCodePoint(), iC;
        break;
      case ce:
        return Co;
    }
    return or(A) ? (this.consumeWhiteSpace(), wC) : _A(A) ? (this.reconsumeCodePoint(A), this.consumeNumericToken()) : _r(A) ? (this.reconsumeCodePoint(A), this.consumeIdentLikeToken()) : { type: 6, value: bA(A) };
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
    for (; Ft(t) && A.length < 6; )
      A.push(t), t = this.consumeCodePoint();
    let s = !1;
    for (; t === nr && A.length < 6; )
      A.push(t), t = this.consumeCodePoint(), s = !0;
    if (s) {
      const n = parseInt(bA(...A.map((i) => i === nr ? Ec : i)), 16), o = parseInt(bA(...A.map((i) => i === nr ? Lc : i)), 16);
      return { type: 30, start: n, end: o };
    }
    const r = parseInt(bA(...A), 16);
    if (this.peekCodePoint(0) === NA && Ft(this.peekCodePoint(1))) {
      this.consumeCodePoint(), t = this.consumeCodePoint();
      const n = [];
      for (; Ft(t) && n.length < 6; )
        n.push(t), t = this.consumeCodePoint();
      const o = parseInt(bA(...n), 16);
      return { type: 30, start: r, end: o };
    } else
      return { type: 30, start: r, end: r };
  }
  consumeIdentLikeToken() {
    const A = this.consumeName();
    return A.toLowerCase() === "url" && this.peekCodePoint(0) === rr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === rr ? (this.consumeCodePoint(), { type: 19, value: A }) : { type: 20, value: A };
  }
  consumeUrlToken() {
    const A = [];
    if (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce)
      return { type: 22, value: "" };
    const t = this.peekCodePoint(0);
    if (t === sr || t === tr) {
      const s = this.consumeStringToken(this.consumeCodePoint());
      return s.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Zt) ? (this.consumeCodePoint(), { type: 22, value: s.value }) : (this.consumeBadUrlRemnants(), ar);
    }
    for (; ; ) {
      const s = this.consumeCodePoint();
      if (s === ce || s === Zt)
        return { type: 22, value: bA(...A) };
      if (or(s))
        return this.consumeWhiteSpace(), this.peekCodePoint(0) === ce || this.peekCodePoint(0) === Zt ? (this.consumeCodePoint(), { type: 22, value: bA(...A) }) : (this.consumeBadUrlRemnants(), ar);
      if (s === tr || s === sr || s === rr || qQ(s))
        return this.consumeBadUrlRemnants(), ar;
      if (s === ws)
        if (Xe(s, this.peekCodePoint(0)))
          A.push(this.consumeEscapedCodePoint());
        else
          return this.consumeBadUrlRemnants(), ar;
      else
        A.push(s);
    }
  }
  consumeWhiteSpace() {
    for (; or(this.peekCodePoint(0)); )
      this.consumeCodePoint();
  }
  consumeBadUrlRemnants() {
    for (; ; ) {
      const A = this.consumeCodePoint();
      if (A === Zt || A === ce)
        return;
      Xe(A, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
    }
  }
  consumeStringSlice(A) {
    let s = "";
    for (; A > 0; ) {
      const r = Math.min(5e4, A);
      s += bA(...this._value.splice(0, r)), A -= r;
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
        return this._value.splice(0, s), uC;
      if (r === ws) {
        const n = this._value[s + 1];
        n !== ce && n !== void 0 && (n === Ir ? (t += this.consumeStringSlice(s), s = -1, this._value.shift()) : Xe(r, n) && (t += this.consumeStringSlice(s), t += bA(this.consumeEscapedCodePoint()), s = -1));
      }
      s++;
    } while (!0);
  }
  consumeNumber() {
    const A = [];
    let t = Mt, s = this.peekCodePoint(0);
    for ((s === ft || s === NA) && A.push(this.consumeCodePoint()); _A(this.peekCodePoint(0)); )
      A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0);
    let r = this.peekCodePoint(1);
    if (s === Ss && _A(r))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ba; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    s = this.peekCodePoint(0), r = this.peekCodePoint(1);
    const n = this.peekCodePoint(2);
    if ((s === Sc || s === Ic) && ((r === ft || r === NA) && _A(n) || _A(r)))
      for (A.push(this.consumeCodePoint(), this.consumeCodePoint()), t = ba; _A(this.peekCodePoint(0)); )
        A.push(this.consumeCodePoint());
    return [$Q(A), t];
  }
  consumeNumericToken() {
    const [A, t] = this.consumeNumber(), s = this.peekCodePoint(0), r = this.peekCodePoint(1), n = this.peekCodePoint(2);
    if (ir(s, r, n)) {
      const o = this.consumeName();
      return { type: 15, number: A, flags: t, unit: o };
    }
    return s === QQ ? (this.consumeCodePoint(), { type: 16, number: A, flags: t }) : { type: 17, number: A, flags: t };
  }
  consumeEscapedCodePoint() {
    const A = this.consumeCodePoint();
    if (Ft(A)) {
      let t = bA(A);
      for (; Ft(this.peekCodePoint(0)) && t.length < 6; )
        t += bA(this.consumeCodePoint());
      or(this.peekCodePoint(0)) && this.consumeCodePoint();
      const s = parseInt(t, 16);
      return s === 0 || WQ(s) || s > 1114111 ? Ua : s;
    }
    return A === ce ? Ua : A;
  }
  consumeName() {
    let A = "";
    for (; ; ) {
      const t = this.consumeCodePoint();
      if (Fa(t))
        A += bA(t);
      else if (Xe(t, this.peekCodePoint(0)))
        A += bA(this.consumeEscapedCodePoint());
      else
        return this.reconsumeCodePoint(t), A;
    }
  }
}
class kt {
  constructor(A) {
    this._tokens = A;
  }
  static create(A) {
    const t = new kc();
    return t.write(A), new kt(t.read());
  }
  static parseValue(A) {
    return kt.create(A).parseComponentValue();
  }
  static parseValues(A) {
    return kt.create(A).parseComponentValues();
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
      if (s.type === 32 || QC(s, A))
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
    return typeof A > "u" ? Co : A;
  }
  reconsumeToken(A) {
    this._tokens.unshift(A);
  }
}
const Ce = (e) => e.type === 15, mA = (e) => e.type === 17, z = (e) => e.type === 20, bC = (e) => e.type === 0, Uo = (e, A) => z(e) && e.value === A, Tc = (e) => e.type !== 31, IA = (e) => e.type !== 31 && e.type !== 4, Ue = (e) => {
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
}, QC = (e, A) => A === 11 && e.type === 12 || A === 28 && e.type === 29 ? !0 : A === 2 && e.type === 3, et = (e) => e.type === 17 || e.type === 15, uA = (e) => e.type === 16 || et(e), CC = (e) => e.type === 18 && e.name === "calc", UC = (e, A = 0) => {
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
}, Kc = (e) => e.length > 1 ? [e[0], e[1]] : [e[0]], HA = {
  type: 17,
  number: 0,
  flags: Mt
}, ri = {
  type: 16,
  number: 50,
  flags: Mt
}, je = {
  type: 16,
  number: 100,
  flags: Mt
}, os = (e, A, t) => {
  const [s, r] = e;
  return [q(s, A), q(typeof r < "u" ? r : s, t)];
}, q = (e, A) => {
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
}, Dc = "deg", Rc = "grad", Oc = "rad", Mc = "turn", Nt = {
  name: "angle",
  parse: (e, A) => {
    if (A.type === 15)
      switch (A.unit) {
        case Dc:
          return Math.PI * A.number / 180;
        case Rc:
          return Math.PI / 200 * A.number;
        case Oc:
          return A.number;
        case Mc:
          return Math.PI * 2 * A.number;
      }
    throw new Error("Unsupported angle type");
  }
}, Nc = (e) => e.type === 15 && (e.unit === Dc || e.unit === Rc || e.unit === Oc || e.unit === Mc), Pc = (e) => {
  switch (e.filter(z).map((t) => t.value).join(" ")) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [HA, HA];
    case "to top":
    case "bottom":
      return zA(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [HA, je];
    case "to right":
    case "left":
      return zA(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [je, je];
    case "to bottom":
    case "top":
      return zA(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [je, HA];
    case "to left":
    case "right":
      return zA(270);
  }
  return 0;
}, zA = (e) => Math.PI * e / 180, qe = (e) => (255 & e) === 0, lA = (e) => {
  const A = 255 & e, t = 255 & e >> 8, s = 255 & e >> 16, r = 255 & e >> 24;
  return A < 255 ? `rgba(${r},${s},${t},${A / 255})` : `rgb(${r},${s},${t})`;
}, se = (e, A, t, s) => (e << 24 | A << 16 | t << 8 | Math.round(s * 255) << 0) >>> 0, Je = (e, A) => {
  if (e.type === 17)
    return e.number;
  if (e.type === 16) {
    const t = A === 3 ? 1 : 255;
    return A === 3 ? e.number / 100 * t : Math.round(e.number / 100 * t);
  }
  return 0;
}, wt = (e) => (e[0].type === 20 ? e[0].value : "unknown") === "from", pA = (e, A, t) => Math.min(Math.max(e, A), t), PA = (e, A) => [
  e[0] * A[0] + e[1] * A[1] + e[2] * A[2],
  e[3] * A[0] + e[4] * A[1] + e[5] * A[2],
  e[6] * A[0] + e[7] * A[1] + e[8] * A[2]
], FC = (e) => se(pA(Math.round(e[0] * 255), 0, 255), pA(Math.round(e[1] * 255), 0, 255), pA(Math.round(e[2] * 255), 0, 255), pA(e[3], 0, 1)), ni = ([e, A, t, s]) => {
  const r = bt([e, A, t]);
  return se(pA(Math.round(r[0] * 255), 0, 255), pA(Math.round(r[1] * 255), 0, 255), pA(Math.round(r[2] * 255), 0, 255), s);
}, Os = (e) => {
  const A = tt([e[0], e[1], e[2]]);
  return ni([A[0], A[1], A[2], e[3]]);
}, mC = (e, A) => {
  if (wt(A.filter(IA)))
    throw new Error("Relative color not supported for lab()");
  const [t, s, r, n] = tn(A), o = bt(tt(nn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, xC = (e, A) => {
  if (wt(A.filter(IA)))
    throw new Error("Relative color not supported for oklab()");
  const [t, s, r, n] = tn(A), o = bt(tt(rn([t, s, r])));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, vC = (e, A) => {
  if (wt(A.filter(IA)))
    throw new Error("Relative color not supported for oklch()");
  const [t, s, r, n] = Xc(A), o = bt(tt(rn(sn([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, yC = (e, A) => {
  if (wt(A.filter(IA)))
    throw new Error("Relative color not supported for lch()");
  const [t, s, r, n] = Gc(A), o = bt(tt(nn(sn([t, s, r]))));
  return se(pA(Math.round(o[0] * 255), 0, 255), pA(Math.round(o[1] * 255), 0, 255), pA(Math.round(o[2] * 255), 0, 255), n);
}, Vc = (e, A) => {
  const t = A.filter(IA), [s, r, n, o] = t, i = (s.type === 17 ? zA(s.number) : Nt.parse(e, s)) / (Math.PI * 2), a = uA(r) ? r.number / 100 : 0, c = uA(n) ? n.number / 100 : 0, u = typeof o < "u" && uA(o) ? q(o, 1) : 1;
  return [i, a, c, u];
}, ma = (e, A) => {
  if (wt(A))
    throw new Error("Relative color not supported for hsl()");
  const [t, s, r, n] = Vc(e, A), o = Wc([t, s, r]);
  return se(o[0] * 255, o[1] * 255, o[2] * 255, s === 0 ? 1 : n);
}, Gc = (e) => {
  const A = e.filter(IA), t = uA(A[0]) ? A[0].number : 0, s = uA(A[1]) ? A[1].number : 0, r = mA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && uA(A[4]) ? q(A[4], 1) : 1;
  return [t, s, r, n];
}, tn = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : mA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : mA(A[1]) ? A[1].number : 0, r = mA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && uA(A[4]) ? q(A[4], 1) : 1;
  return [t, s, r, n];
}, Xc = (e) => {
  const A = e.filter(IA), t = A[0].type === 16 ? A[0].number / 100 : mA(A[0]) ? A[0].number : 0, s = A[1].type === 16 ? A[1].number / 100 : mA(A[1]) ? A[1].number : 0, r = mA(A[2]) || Ce(A[2]) ? A[2].number : 0, n = typeof A[4] < "u" && uA(A[4]) ? q(A[4], 1) : 1;
  return [t, s, r, n];
}, Jc = (e) => PA([
  1.0479297925449969,
  0.022946870601609652,
  -0.05019226628920524,
  0.02962780877005599,
  0.9904344267538799,
  -0.017073799063418826,
  -0.009243040646204504,
  0.015055191490298152,
  0.7518742814281371
], e), oi = (e) => PA([
  0.955473421488075,
  -0.02309845494876471,
  0.06325924320057072,
  -0.0283697093338637,
  1.0099953980813041,
  0.021041441191917323,
  0.012314014864481998,
  -0.020507649298898964,
  1.330365926242124
], e), On = (e, A, t) => (t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (A - e) * t * 6 + e : t < 1 / 2 ? A : t < 2 / 3 ? (A - e) * 6 * (2 / 3 - t) + e : e), Wc = ([e, A, t]) => {
  if (A === 0)
    return [t * 255, t * 255, t * 255];
  const s = t <= 0.5 ? t * (A + 1) : t + A - t * A, r = t * 2 - s, n = On(r, s, e + 1 / 3), o = On(r, s, e), i = On(r, s, e - 1 / 3);
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
  return oi([o[0], o[1], o[2]]);
}, EC = (e, A) => {
  const t = A.filter(IA);
  if (t.length === 3) {
    const [s, r, n] = t.map(Je), o = mo([s / 255, r / 255, n / 255]), [i, a, c] = Fo([o[0], o[1], o[2]]);
    return [i, a, c, 1];
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Je), i = mo([s / 255, r / 255, n / 255]), [a, c, u] = Fo([i[0], i[1], i[2]]);
    return [a, c, u, o];
  }
  return [0, 0, 0, 1];
}, HC = (e, A) => {
  const [t, s, r, n] = Vc(e, A), o = mo(Wc([t, s, r])), [i, a, c] = Fo([o[0], o[1], o[2]]);
  return [i, a, c, n];
}, IC = (e, A) => {
  const [t, s, r, n] = tn(A), [o, i, a] = nn([t, s, r]);
  return [o, i, a, n];
}, _C = (e, A) => {
  const [t, s, r, n] = Gc(A), [o, i, a] = nn(sn([t, s, r]));
  return [o, i, a, n];
}, SC = (e, A) => {
  const [t, s, r, n] = Xc(A), [o, i, a] = rn(sn([t, s, r]));
  return [o, i, a, n];
}, LC = (e, A) => {
  const [t, s, r, n] = tn(A), [o, i, a] = rn([t, s, r]);
  return [o, i, a, n];
}, kC = (e) => oi([e[0], e[1], e[2]]), xa = (e) => e, TC = (e) => {
  const [A, t, s] = Jc([e[0], e[2], e[3]]);
  return [A, t, s, e[3]];
}, va = (e) => Os([e[0], e[1], e[2], e[3]]), KC = (e) => {
  const A = kC([e[0], e[1], e[2]]);
  return Os([A[0], A[1], A[2], e[3]]);
}, tt = (e) => PA([
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
], e), bt = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s > 31308e-7 ? t * (1.055 * s ** (1 / 2.4) - 0.055) : 12.92 * A;
}), mo = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1, s = Math.abs(A);
  return s <= 0.04045 ? A / 12.92 : t * ((s + 0.055) / 1.055) ** 2.4;
}), DC = (e) => {
  const [A, t, s] = bt(tt([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, RC = (e) => {
  const [A, t, s] = tt([e[0], e[1], e[2]]);
  return [
    pA(Math.round(A * 255), 0, 255),
    pA(Math.round(t * 255), 0, 255),
    pA(Math.round(s * 255), 0, 255),
    e[3]
  ];
}, OC = (e) => PA([
  0.4865709486482162,
  0.26566769316909306,
  0.1982172852343625,
  0.2289745640697488,
  0.6917385218365064,
  0.079286914093745,
  0,
  0.04511338185890264,
  1.043944368900976
], e), MC = (e) => PA([
  2.493496911941425,
  -0.9313836179191239,
  -0.40271078445071684,
  -0.8294889695615747,
  1.7626640603183463,
  0.023624685841943577,
  0.03584583024378447,
  -0.07617238926804182,
  0.9568845240076872
], e), NC = (e) => e.map((A) => {
  const t = A < 0 ? -1 : 1;
  return A * t <= 0.04045 ? A / 12.92 : t * ((A + 0.055) / 1.055) ** 2.4 || 0;
}), PC = (e) => bt(e), VC = (e) => {
  const A = NC([e[0], e[1], e[2]]);
  return OC([A[0], A[1], A[2]]);
}, GC = (e) => {
  const [A, t, s] = PC(MC([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, XC = (e) => {
  const A = VC([e[0], e[1], e[2]]);
  return Os([A[0], A[1], A[2], e[3]]);
}, JC = (e) => PA([
  2.0415879038107465,
  -0.5650069742788596,
  -0.34473135077832956,
  -0.9692436362808795,
  1.8759675015077202,
  0.04155505740717557,
  0.013444280632031142,
  -0.11836239223101838,
  1.0151749943912054
], e), WC = (e) => PA([
  0.5766690429101305,
  0.1855582379065463,
  0.1882286462349947,
  0.29734497525053605,
  0.6273635662554661,
  0.0752914584939978,
  0.02703136138641234,
  0.07068885253582723,
  0.9913375368376388
], e), YC = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 2.19921875;
  });
  return [A[0], A[1], A[2]];
}, jC = (e) => {
  const A = e.map((t) => {
    const s = t < 0 ? -1 : 1, r = Math.abs(t);
    return s * r ** 0.4547069271758437;
  });
  return [A[0], A[1], A[2]];
}, zC = (e) => {
  const [A, t, s] = jC(JC([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, ZC = (e) => {
  const A = tt(WC(YC([e[0], e[1], e[2]])));
  return ni([A[0], A[1], A[2], e[3]]);
}, qC = (e) => PA([
  0.7977666449006423,
  0.13518129740053308,
  0.0313477341283922,
  0.2880748288194013,
  0.711835234241873,
  8993693872564e-17,
  0,
  0,
  0.8251046025104602
], e), $C = (e) => PA([
  1.3457868816471583,
  -0.25557208737979464,
  -0.05110186497554526,
  -0.5446307051249019,
  1.5082477428451468,
  0.02052744743642139,
  0,
  0,
  1.2119675456389452
], e), AU = (e) => e.map((A) => A < 16 / 512 ? A / 16 : A ** 1.8), eU = (e) => e.map((A) => A > 1 / 512 ? A ** (1 / 1.8) : A * 16), tU = (e) => {
  const A = AU([e[0], e[1], e[2]]);
  return oi(qC([A[0], A[1], A[2]]));
}, sU = (e) => {
  const [A, t, s] = eU($C(Jc([e[0], e[1], e[2]])));
  return [A, t, s, e[3]];
}, rU = (e) => {
  const A = tU([e[0], e[1], e[2]]);
  return Os([A[0], A[1], A[2], e[3]]);
}, Sr = 1.09929682680944, Yc = 0.018053968510807, nU = (e) => e.map(function(A) {
  return A < Yc * 4.5 ? A / 4.5 : Math.pow((A + Sr - 1) / Sr, 1 / 0.45);
}), oU = (e) => e.map(function(A) {
  return A >= Yc ? Sr * Math.pow(A, 0.45) - (Sr - 1) : 4.5 * A;
}), iU = (e) => PA([
  0.6369580483012914,
  0.14461690358620832,
  0.1688809751641721,
  0.2627002120112671,
  0.6779980715188708,
  0.05930171646986196,
  0,
  0.028072693049087428,
  1.060985057710791
], e), aU = (e) => PA([
  1.716651187971268,
  -0.355670783776392,
  -0.25336628137366,
  -0.666684351832489,
  1.616481236634939,
  0.0157685458139111,
  0.017639857445311,
  -0.042770613257809,
  0.942103121235474
], e), lU = (e) => {
  const A = nU([e[0], e[1], e[2]]);
  return iU([A[0], A[1], A[2]]);
}, cU = (e) => {
  const [A, t, s] = oU(aU([e[0], e[1], e[2]]));
  return [A, t, s, e[3]];
}, uU = (e) => {
  const A = lU([e[0], e[1], e[2]]);
  return Os([A[0], A[1], A[2], e[3]]);
}, $e = {
  name: "color",
  parse: (e, A) => {
    if (A.type === 18) {
      const t = gU[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported color function "${A.name}"`);
      return t(e, A.values);
    }
    if (A.type === 5) {
      const [t, s, r, n] = jc(A);
      return se(t, s, r, n);
    }
    if (A.type === 20) {
      const t = we[A.value.toUpperCase()];
      if (typeof t < "u")
        return t;
    }
    return we.TRANSPARENT;
  }
}, jc = (e) => {
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
}, ya = (e, A) => {
  const t = A.filter(IA);
  if (wt(t))
    throw new Error("Relative color not supported for rgb()");
  if (t.length === 3) {
    const [s, r, n] = t.map(Je);
    return se(s, r, n, 1);
  }
  if (t.length === 4) {
    const [s, r, n, o] = t.map(Je);
    return se(s, r, n, o);
  }
  if (t.length === 5 && t[3].type === 6 && t[3].value === "/") {
    const s = Je(t[0], 0), r = Je(t[1], 1), n = Je(t[2], 2), o = Je(t[4], 3);
    return se(s, r, n, o);
  }
  return 0;
}, dU = (e, A) => {
  const t = A.filter(IA), s = t[0].type === 20 ? t[0].value : "unknown";
  if (!wt(t)) {
    const n = s, o = Ea[n];
    if (typeof o > "u")
      throw new Error(`Attempting to parse an unsupported color space "${n}" for color() function`);
    const i = mA(t[1]) ? t[1].number : 0, a = mA(t[2]) ? t[2].number : 0, c = mA(t[3]) ? t[3].number : 0, u = t.length > 4 && t[4].type === 6 && t[4].value === "/" && mA(t[5]) ? t[5].number : 1;
    return o([i, a, c, u]);
  } else {
    const n = (y, w) => {
      if (mA(w))
        return w.number;
      const x = (X) => X === "r" || X === "x" ? 0 : X === "g" || X === "y" ? 1 : 2;
      if (z(w)) {
        const X = x(w.value);
        return y[X];
      }
      const L = (X) => {
        const eA = X.filter(IA);
        let UA = "(";
        for (const dA of eA)
          UA += dA.type === 18 && dA.name === "calc" ? L(dA.values) : mA(dA) ? dA.number : dA.type === 6 || z(dA) ? dA.value : "";
        return UA += ")", UA;
      };
      if (w.type === 18) {
        const X = w.values.filter(IA);
        if (w.name === "calc") {
          const eA = L(X).replace(/r|x/, y[0].toString()).replace(/g|y/, y[1].toString()).replace(/b|z/, y[2].toString());
          return new Function("return " + eA)();
        }
      }
      return null;
    }, o = t[1].type === 18 ? t[1].name : z(t[1]) || t[1].type === 5 ? "rgb" : "unknown", i = z(t[2]) ? t[2].value : "unknown";
    let a = t[1].type === 18 ? t[1].values : z(t[1]) ? [t[1]] : [];
    if (z(t[1])) {
      if (typeof we[t[1].value.toUpperCase()] > "u")
        throw new Error("Attempting to use unknown color in relative color 'from'");
      {
        const w = Tt(e, t[1].value), x = 255 & w, L = 255 & w >> 8, X = 255 & w >> 16;
        a = [
          { type: 17, number: 255 & w >> 24, flags: 1 },
          { type: 17, number: X, flags: 1 },
          { type: 17, number: L, flags: 1 },
          { type: 17, number: x > 1 ? x / 255 : x, flags: 1 }
        ];
      }
    } else if (t[1].type === 5) {
      const [y, w, x, L] = jc(t[1]);
      a = [
        { type: 17, number: y, flags: 1 },
        { type: 17, number: w, flags: 1 },
        { type: 17, number: x, flags: 1 },
        { type: 17, number: L > 1 ? L / 255 : L, flags: 1 }
      ];
    }
    if (a.length === 0)
      throw new Error("Attempting to use unknown color in relative color 'from'");
    if (i === "unknown")
      throw new Error("Attempting to use unknown colorspace in relative color 'to'");
    const c = fU[o], u = BU[i], l = Ea[i];
    if (typeof c > "u")
      throw new Error(`Attempting to parse an unsupported color space "${o}" for color() function`);
    if (typeof u > "u")
      throw new Error(`Attempting to parse an unsupported color space "${i}" for color() function`);
    const f = c(e, a), p = u(f), b = n(p, t[3]), U = n(p, t[4]), m = n(p, t[5]), _ = t.length > 6 && t[6].type === 6 && t[6].value === "/" && mA(t[7]) ? t[7].number : 1;
    if (b === null || U === null || m === null)
      throw new Error("Invalid relative color in color() function");
    return l([b, U, m, _]);
  }
}, Ea = {
  srgb: FC,
  "srgb-linear": ni,
  "display-p3": XC,
  "a98-rgb": ZC,
  "prophoto-rgb": rU,
  xyz: va,
  "xyz-d50": KC,
  "xyz-d65": va,
  rec2020: uU
}, fU = {
  rgb: EC,
  hsl: HC,
  lab: IC,
  lch: _C,
  oklab: LC,
  oklch: SC
}, BU = {
  srgb: DC,
  "srgb-linear": RC,
  "display-p3": GC,
  "a98-rgb": zC,
  "prophoto-rgb": sU,
  xyz: xa,
  "xyz-d50": TC,
  "xyz-d65": xa,
  rec2020: cU
}, gU = {
  hsl: ma,
  hsla: ma,
  rgb: ya,
  rgba: ya,
  lch: yC,
  oklch: vC,
  oklab: xC,
  lab: mC,
  color: dU
}, Tt = (e, A) => $e.parse(e, kt.create(A).parseComponentValue()), we = {
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
}, hU = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.map((t) => {
    if (z(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, pU = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, on = (e, A) => {
  const t = $e.parse(e, A[0]), s = A[1];
  return s && uA(s) ? { color: t, stop: s } : { color: t, stop: null };
}, Ha = (e, A) => {
  const t = e[0], s = e[e.length - 1];
  t.stop === null && (t.stop = HA), s.stop === null && (s.stop = je);
  const r = [];
  let n = 0;
  for (let i = 0; i < e.length; i++) {
    const a = e[i].stop;
    if (a !== null) {
      const c = q(a, A);
      c > n ? r.push(c) : r.push(n), n = c;
    } else
      r.push(null);
  }
  let o = null;
  for (let i = 0; i < r.length; i++) {
    const a = r[i];
    if (a === null)
      o === null && (o = i);
    else if (o !== null) {
      const c = i - o, u = r[o - 1], l = (a - u) / (c + 1);
      for (let f = 1; f <= c; f++)
        r[o + f - 1] = l * f;
      o = null;
    }
  }
  return e.map(({ color: i }, a) => ({ color: i, stop: Math.max(Math.min(1, r[a] / A), 0) }));
}, wU = (e, A, t) => {
  const s = A / 2, r = t / 2, n = q(e[0], A) - s, o = r - q(e[1], t);
  return (Math.atan2(o, n) + Math.PI * 2) % (Math.PI * 2);
}, bU = (e, A, t) => {
  const s = typeof e == "number" ? e : wU(e, A, t), r = Math.abs(A * Math.sin(s)) + Math.abs(t * Math.cos(s)), n = A / 2, o = t / 2, i = r / 2, a = Math.sin(s - Math.PI / 2) * i, c = Math.cos(s - Math.PI / 2) * i;
  return [r, n - c, n + c, o - a, o + a];
}, $A = (e, A) => Math.sqrt(e * e + A * A), Ia = (e, A, t, s, r) => [
  [0, 0],
  [0, A],
  [e, 0],
  [e, A]
].reduce((o, i) => {
  const [a, c] = i, u = $A(t - a, s - c);
  return (r ? u < o.optimumDistance : u > o.optimumDistance) ? {
    optimumCorner: i,
    optimumDistance: u
  } : o;
}, {
  optimumDistance: r ? 1 / 0 : -1 / 0,
  optimumCorner: null
}).optimumCorner, QU = (e, A, t, s, r) => {
  let n = 0, o = 0;
  switch (e.size) {
    case 0:
      e.shape === 0 ? n = o = Math.min(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.min(Math.abs(A), Math.abs(A - s)), o = Math.min(Math.abs(t), Math.abs(t - r)));
      break;
    case 2:
      if (e.shape === 0)
        n = o = Math.min($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.min(Math.abs(t), Math.abs(t - r)) / Math.min(Math.abs(A), Math.abs(A - s)), [a, c] = Ia(s, r, A, t, !0);
        n = $A(a - A, (c - t) / i), o = i * n;
      }
      break;
    case 1:
      e.shape === 0 ? n = o = Math.max(Math.abs(A), Math.abs(A - s), Math.abs(t), Math.abs(t - r)) : e.shape === 1 && (n = Math.max(Math.abs(A), Math.abs(A - s)), o = Math.max(Math.abs(t), Math.abs(t - r)));
      break;
    case 3:
      if (e.shape === 0)
        n = o = Math.max($A(A, t), $A(A, t - r), $A(A - s, t), $A(A - s, t - r));
      else if (e.shape === 1) {
        const i = Math.max(Math.abs(t), Math.abs(t - r)) / Math.max(Math.abs(A), Math.abs(A - s)), [a, c] = Ia(s, r, A, t, !1);
        n = $A(a - A, (c - t) / i), o = i * n;
      }
      break;
  }
  return Array.isArray(e.size) && (n = q(e.size[0], s), o = e.size.length === 2 ? q(e.size[1], r) : n), [n, o];
}, CU = (e, A) => {
  let t = zA(180);
  const s = [];
  return Ue(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && i.value === "to") {
        t = Pc(r);
        return;
      } else if (Nc(i)) {
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
}, lr = (e, A) => {
  let t = zA(180);
  const s = [];
  return Ue(A).forEach((r, n) => {
    if (n === 0) {
      const i = r[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = Pc(r);
        return;
      } else if (Nc(i)) {
        t = (Nt.parse(e, i) + zA(270)) % zA(360);
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
}, UU = (e, A) => {
  const t = zA(180), s = [];
  let r = 1;
  const n = 0, o = 3, i = [];
  return Ue(A).forEach((a, c) => {
    const u = a[0];
    if (c === 0) {
      if (z(u) && u.value === "linear") {
        r = 1;
        return;
      } else if (z(u) && u.value === "radial") {
        r = 2;
        return;
      }
    }
    if (u.type === 18) {
      if (u.name === "from") {
        const l = $e.parse(e, u.values[0]);
        s.push({ stop: HA, color: l });
      } else if (u.name === "to") {
        const l = $e.parse(e, u.values[0]);
        s.push({ stop: je, color: l });
      } else if (u.name === "color-stop") {
        const l = u.values.filter(IA);
        if (l.length === 2) {
          const f = $e.parse(e, l[1]), p = l[0];
          mA(p) && s.push({
            stop: { type: 16, number: p.number * 100, flags: p.flags },
            color: f
          });
        }
      }
    }
  }), r === 1 ? {
    angle: (t + zA(180)) % zA(360),
    stops: s,
    type: r
  } : { size: o, shape: n, stops: s, position: i, type: r };
}, zc = "closest-side", Zc = "farthest-side", qc = "closest-corner", $c = "farthest-corner", Au = "circle", eu = "ellipse", tu = "cover", su = "contain", FU = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return Ue(A).forEach((o, i) => {
    let a = !0;
    if (i === 0) {
      let c = !1;
      a = o.reduce((u, l) => {
        if (c)
          if (z(l))
            switch (l.value) {
              case "center":
                return n.push(ri), u;
              case "top":
              case "left":
                return n.push(HA), u;
              case "right":
              case "bottom":
                return n.push(je), u;
            }
          else (uA(l) || et(l)) && n.push(l);
        else if (z(l))
          switch (l.value) {
            case Au:
              return t = 0, !1;
            case eu:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case zc:
              return s = 0, !1;
            case tu:
            case Zc:
              return s = 1, !1;
            case su:
            case qc:
              return s = 2, !1;
            case $c:
              return s = 3, !1;
          }
        else if (et(l) || uA(l))
          return Array.isArray(s) || (s = []), s.push(l), !1;
        return u;
      }, a);
    }
    if (a) {
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
}, cr = (e, A) => {
  let t = 0, s = 3;
  const r = [], n = [];
  return Ue(A).forEach((o, i) => {
    let a = !0;
    if (i === 0 ? a = o.reduce((c, u) => {
      if (z(u))
        switch (u.value) {
          case "center":
            return n.push(ri), !1;
          case "top":
          case "left":
            return n.push(HA), !1;
          case "right":
          case "bottom":
            return n.push(je), !1;
        }
      else if (uA(u) || et(u))
        return n.push(u), !1;
      return c;
    }, a) : i === 1 && (a = o.reduce((c, u) => {
      if (z(u))
        switch (u.value) {
          case Au:
            return t = 0, !1;
          case eu:
            return t = 1, !1;
          case su:
          case zc:
            return s = 0, !1;
          case Zc:
            return s = 1, !1;
          case qc:
            return s = 2, !1;
          case tu:
          case $c:
            return s = 3, !1;
        }
      else if (et(u) || uA(u))
        return Array.isArray(s) || (s = []), s.push(u), !1;
      return c;
    }, a)), a) {
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
}, mU = (e) => e.type === 1, xU = (e) => e.type === 2, ii = {
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
      const t = ru[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported image function "${A.name}"`);
      return t(e, A.values);
    }
    throw new Error(`Unsupported image type ${A.type}`);
  }
};
function vU(e) {
  return !(e.type === 20 && e.value === "none") && (e.type !== 18 || !!ru[e.name]);
}
const ru = {
  "linear-gradient": CU,
  "-moz-linear-gradient": lr,
  "-ms-linear-gradient": lr,
  "-o-linear-gradient": lr,
  "-webkit-linear-gradient": lr,
  "radial-gradient": FU,
  "-moz-radial-gradient": cr,
  "-ms-radial-gradient": cr,
  "-o-radial-gradient": cr,
  "-webkit-radial-gradient": cr,
  "-webkit-gradient": UU
}, yU = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = A[0];
    return t.type === 20 && t.value === "none" ? [] : A.filter((s) => IA(s) && vU(s)).map((s) => ii.parse(e, s));
  }
}, EU = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.map((t) => {
    if (z(t))
      switch (t.value) {
        case "padding-box":
          return 1;
        case "content-box":
          return 2;
      }
    return 0;
  })
}, HU = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: (e, A) => Ue(A).map((t) => t.map((s) => CC(s) ? UC(s, 0) : uA(s) ? s : null).filter((s) => s !== null)).map(Kc)
}, IU = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: (e, A) => Ue(A).map((t) => t.filter(z).map((s) => s.value).join(" ")).map(_U)
}, _U = (e) => {
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
const SU = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: (e, A) => Ue(A).map((t) => t.filter(LU))
}, LU = (e) => z(e) || uA(e), an = (e) => ({
  name: `border-${e}-color`,
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}), kU = an("top"), TU = an("right"), KU = an("bottom"), DU = an("left"), ln = (e) => ({
  name: `border-radius-${e}`,
  initialValue: "0 0",
  prefix: !1,
  type: 1,
  parse: (A, t) => Kc(t.filter(uA))
}), RU = ln("top-left"), OU = ln("top-right"), MU = ln("bottom-right"), NU = ln("bottom-left"), cn = (e) => ({
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
}), PU = cn("top"), VU = cn("right"), GU = cn("bottom"), XU = cn("left"), un = (e) => ({
  name: `border-${e}-width`,
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (A, t) => Ce(t) ? t.number : 0
}), JU = un("top"), WU = un("right"), YU = un("bottom"), jU = un("left"), zU = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, ZU = {
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
}, qU = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(z).reduce(
    (t, s) => t | $U(s.value),
    0
    /* DISPLAY.NONE */
  )
}, $U = (e) => {
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
}, AF = {
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
}, eF = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "normal" ? 0 : A.type === 17 || A.type === 15 ? A.number : 0
};
var Lr;
(function(e) {
  e.NORMAL = "normal", e.STRICT = "strict";
})(Lr || (Lr = {}));
const tF = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "strict":
        return Lr.STRICT;
      case "normal":
      default:
        return Lr.NORMAL;
    }
  }
}, sF = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}, _a = (e, A) => z(e) && e.value === "normal" ? 1.2 * A : e.type === 17 ? A * e.number : uA(e) ? q(e, A) : A, rF = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : ii.parse(e, A)
}, nF = {
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
}, dn = (e) => ({
  name: `margin-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 4
  /* PropertyDescriptorParsingType.TOKEN_VALUE */
}), oF = dn("top"), iF = dn("right"), aF = dn("bottom"), lF = dn("left"), cF = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(z).map((t) => {
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
}, uF = {
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
}, fn = (e) => ({
  name: `padding-${e}`,
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length-percentage"
}), dF = fn("top"), fF = fn("right"), BF = fn("bottom"), gF = fn("left"), hF = {
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
}, pF = {
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
}, wF = {
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
      et(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : s.blur = o, r++) : s.color = $e.parse(e, o);
    }
    return s;
  })
}, bF = {
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
}, QF = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20 && A.value === "none")
      return null;
    if (A.type === 18) {
      const t = mF[A.name];
      if (typeof t > "u")
        throw new Error(`Attempting to parse an unsupported transform function "${A.name}"`);
      return t(e, A.values);
    }
    return null;
  }
}, CF = (e, A) => {
  const t = A.filter(
    (s) => s.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((s) => s.number);
  return t.length === 6 ? t : null;
}, UF = (e, A) => {
  const t = A.filter(
    (c) => c.type === 17
    /* TokenType.NUMBER_TOKEN */
  ).map((c) => c.number), [s, r, {}, {}, n, o, {}, {}, {}, {}, {}, {}, i, a] = t;
  return t.length === 16 ? [s, r, n, o, i, a] : null;
}, FF = (e, A) => {
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
}, mF = {
  matrix: CF,
  matrix3d: UF,
  rotate: FF
}, Sa = {
  type: 16,
  number: 50,
  flags: Mt
}, xF = [Sa, Sa], vF = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    const t = A.filter(uA);
    return t.length !== 2 ? xF : [t[0], t[1]];
  }
}, yF = {
  name: "rotate",
  initialValue: "none",
  prefix: !1,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? null : A.type === 17 && A.number === 0 ? 0 : A.type === 15 ? Nt.parse(e, A) * 180 / Math.PI : null
}, EF = {
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
var bs;
(function(e) {
  e.NORMAL = "normal", e.BREAK_ALL = "break-all", e.KEEP_ALL = "keep-all";
})(bs || (bs = {}));
const HF = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: (e, A) => {
    switch (A) {
      case "break-all":
        return bs.BREAK_ALL;
      case "keep-all":
        return bs.KEEP_ALL;
      case "normal":
      default:
        return bs.NORMAL;
    }
  }
}, IF = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => {
    if (A.type === 20)
      return { auto: !0, order: 0 };
    if (mA(A))
      return { auto: !1, order: A.number };
    throw new Error("Invalid z-index number parsed");
  }
}, nu = {
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
}, _F = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: (e, A) => mA(A) ? A.number : 1
}, SF = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, LF = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(z).map((t) => {
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
}, kF = {
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
}, TF = {
  name: "text-decoration-thickness",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => {
    if (z(A))
      switch (A.value) {
        case "auto":
          return "auto";
        case "from-font":
          return "from-font";
      }
    return Ce(A) ? A.number : "auto";
  }
}, KF = {
  name: "text-underline-offset",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: (e, A) => z(A) && A.value === "auto" ? "auto" : Ce(A) ? A.number : "auto"
}, DF = {
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
}, RF = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, OF = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: (e, A) => {
    if (mA(A))
      return A.number;
    if (z(A))
      switch (A.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, MF = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: (e, A) => A.filter(z).map((t) => t.value)
}, NF = {
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
}, hA = (e, A) => (e & A) !== 0, PF = {
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
}, VF = {
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
    const s = [], r = A.filter(Tc);
    for (let n = 0; n < r.length; n++) {
      const o = r[n], i = r[n + 1];
      if (o.type === 20) {
        const a = i && mA(i) ? i.number : 1;
        s.push({ counter: o.value, increment: a });
      }
    }
    return s;
  }
}, GF = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: (e, A) => {
    if (A.length === 0)
      return [];
    const t = [], s = A.filter(Tc);
    for (let r = 0; r < s.length; r++) {
      const n = s[r], o = s[r + 1];
      if (z(n) && n.value !== "none") {
        const i = o && mA(o) ? o.number : 0;
        t.push({ counter: n.value, reset: i });
      }
    }
    return t;
  }
}, XF = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(Ce).map((t) => nu.parse(e, t))
}, JF = {
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
    const s = [], r = A.filter(bC);
    if (r.length % 2 !== 0)
      return null;
    for (let n = 0; n < r.length; n += 2) {
      const o = r[n].value, i = r[n + 1].value;
      s.push({ open: o, close: i });
    }
    return s;
  }
}, La = (e, A, t) => {
  if (!e)
    return "";
  const s = e[Math.min(A, e.length - 1)];
  return s ? t ? s.open : s.close : "";
}, WF = {
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
      Uo(o, "inset") ? s.inset = !0 : et(o) ? (r === 0 ? s.offsetX = o : r === 1 ? s.offsetY = o : r === 2 ? s.blur = o : s.spread = o, r++) : s.color = $e.parse(e, o);
    }
    return s;
  })
}, YF = {
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
    return A.filter(z).forEach((r) => {
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
}, jF = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, zF = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: (e, A) => Ce(A) ? A.number : 0
}, ZF = {
  name: "-webkit-line-clamp",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: (e, A) => A.type === 20 && A.value === "none" ? 0 : A.type === 17 ? Math.max(0, Math.floor(A.number)) : 0
}, qF = {
  name: "objectFit",
  initialValue: "fill",
  prefix: !1,
  type: 1,
  parse: (e, A) => A.filter(z).reduce(
    (t, s) => t | $F(s.value),
    0
    /* OBJECT_FIT.FILL */
  )
}, $F = (e) => {
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
}, A1 = {
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
class e1 {
  constructor(A, t) {
    this.animationDuration = D(A, XF, t.animationDuration), this.backgroundClip = D(A, hU, t.backgroundClip), this.backgroundColor = D(A, pU, t.backgroundColor), this.backgroundImage = D(A, yU, t.backgroundImage), this.backgroundOrigin = D(A, EU, t.backgroundOrigin), this.backgroundPosition = D(A, HU, t.backgroundPosition), this.backgroundRepeat = D(A, IU, t.backgroundRepeat), this.backgroundSize = D(A, SU, t.backgroundSize), this.borderTopColor = D(A, kU, t.borderTopColor), this.borderRightColor = D(A, TU, t.borderRightColor), this.borderBottomColor = D(A, KU, t.borderBottomColor), this.borderLeftColor = D(A, DU, t.borderLeftColor), this.borderTopLeftRadius = D(A, RU, t.borderTopLeftRadius), this.borderTopRightRadius = D(A, OU, t.borderTopRightRadius), this.borderBottomRightRadius = D(A, MU, t.borderBottomRightRadius), this.borderBottomLeftRadius = D(A, NU, t.borderBottomLeftRadius), this.borderTopStyle = D(A, PU, t.borderTopStyle), this.borderRightStyle = D(A, VU, t.borderRightStyle), this.borderBottomStyle = D(A, GU, t.borderBottomStyle), this.borderLeftStyle = D(A, XU, t.borderLeftStyle), this.borderTopWidth = D(A, JU, t.borderTopWidth), this.borderRightWidth = D(A, WU, t.borderRightWidth), this.borderBottomWidth = D(A, YU, t.borderBottomWidth), this.borderLeftWidth = D(A, jU, t.borderLeftWidth), this.boxShadow = D(A, WF, t.boxShadow), this.color = D(A, zU, t.color), this.direction = D(A, ZU, t.direction), this.display = D(A, qU, t.display), this.float = D(A, AF, t.cssFloat), this.fontFamily = D(A, DF, t.fontFamily), this.fontSize = D(A, RF, t.fontSize), this.fontStyle = D(A, NF, t.fontStyle), this.fontVariant = D(A, MF, t.fontVariant), this.fontWeight = D(A, OF, t.fontWeight), this.letterSpacing = D(A, eF, t.letterSpacing), this.lineBreak = D(A, tF, t.lineBreak), this.lineHeight = D(A, sF, t.lineHeight), this.listStyleImage = D(A, rF, t.listStyleImage), this.listStylePosition = D(A, nF, t.listStylePosition), this.listStyleType = D(A, xo, t.listStyleType), this.marginTop = D(A, oF, t.marginTop), this.marginRight = D(A, iF, t.marginRight), this.marginBottom = D(A, aF, t.marginBottom), this.marginLeft = D(A, lF, t.marginLeft), this.opacity = D(A, _F, t.opacity);
    const s = D(A, cF, t.overflow);
    this.overflowX = s[0], this.overflowY = s[s.length > 1 ? 1 : 0], this.overflowWrap = D(A, uF, t.overflowWrap), this.paddingTop = D(A, dF, t.paddingTop), this.paddingRight = D(A, fF, t.paddingRight), this.paddingBottom = D(A, BF, t.paddingBottom), this.paddingLeft = D(A, gF, t.paddingLeft), this.paintOrder = D(A, YF, t.paintOrder), this.position = D(A, pF, t.position), this.textAlign = D(A, hF, t.textAlign), this.textDecorationColor = D(A, SF, t.textDecorationColor ?? t.color), this.textDecorationLine = D(A, LF, t.textDecorationLine ?? t.textDecoration), this.textDecorationStyle = D(A, kF, t.textDecorationStyle), this.textDecorationThickness = D(A, TF, t.textDecorationThickness), this.textUnderlineOffset = D(A, KF, t.textUnderlineOffset), this.textShadow = D(A, wF, t.textShadow), this.textTransform = D(A, bF, t.textTransform), this.textOverflow = D(A, A1, t.textOverflow), this.transform = D(A, QF, t.transform), this.transformOrigin = D(A, vF, t.transformOrigin), this.rotate = D(A, yF, t.rotate), this.visibility = D(A, EF, t.visibility), this.webkitTextStrokeColor = D(A, jF, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = D(A, zF, t.webkitTextStrokeWidth), this.webkitLineClamp = D(A, ZF, t.webkitLineClamp), this.wordBreak = D(A, HF, t.wordBreak), this.zIndex = D(A, IF, t.zIndex), this.objectFit = D(A, qF, t.objectFit);
  }
  isVisible() {
    return this.display > 0 && this.opacity > 0 && this.visibility === 0;
  }
  isTransparent() {
    return qe(this.backgroundColor);
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
class t1 {
  constructor(A, t) {
    this.content = D(A, PF, t.content), this.quotes = D(A, JF, t.quotes);
  }
}
class ka {
  constructor(A, t) {
    this.counterIncrement = D(A, VF, t.counterIncrement), this.counterReset = D(A, GF, t.counterReset);
  }
}
const D = (e, A, t) => {
  const s = new kc(), r = t !== null && typeof t < "u" ? t.toString() : A.initialValue;
  s.write(r);
  const n = new kt(s.read());
  switch (A.type) {
    case 2:
      const o = n.parseComponentValue();
      return A.parse(e, z(o) ? o.value : A.initialValue);
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
          return $e.parse(e, n.parseComponentValue());
        case "image":
          return ii.parse(e, n.parseComponentValue());
        case "length":
          const i = n.parseComponentValue();
          return et(i) ? i : HA;
        case "length-percentage":
          const a = n.parseComponentValue();
          return uA(a) ? a : HA;
        case "time":
          return nu.parse(e, n.parseComponentValue());
      }
      break;
  }
}, s1 = "data-html2canvas-debug", r1 = (e) => {
  switch (e.getAttribute(s1)) {
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
  const t = r1(e);
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
    this.styles = new e1(A, window.getComputedStyle(t, null)), Ho(t) && (this.styles.animationDuration.some((s) => s > 0) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none"), this.styles.rotate !== null && (t.style.rotate = "none")), this.bounds = An(this.context, t), vo(
      t,
      4
      /* DebuggerType.RENDER */
    ) && (this.flags |= 16);
  }
}
var n1 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", Ta = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", is = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var ur = 0; ur < Ta.length; ur++)
  is[Ta.charCodeAt(ur)] = ur;
var o1 = function(e) {
  var A = e.length * 0.75, t = e.length, s, r = 0, n, o, i, a;
  e[e.length - 1] === "=" && (A--, e[e.length - 2] === "=" && A--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(A) : new Array(A), u = Array.isArray(c) ? c : new Uint8Array(c);
  for (s = 0; s < t; s += 4)
    n = is[e.charCodeAt(s)], o = is[e.charCodeAt(s + 1)], i = is[e.charCodeAt(s + 2)], a = is[e.charCodeAt(s + 3)], u[r++] = n << 2 | o >> 4, u[r++] = (o & 15) << 4 | i >> 2, u[r++] = (i & 3) << 6 | a & 63;
  return c;
}, i1 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 2)
    t.push(e[s + 1] << 8 | e[s]);
  return t;
}, a1 = function(e) {
  for (var A = e.length, t = [], s = 0; s < A; s += 4)
    t.push(e[s + 3] << 24 | e[s + 2] << 16 | e[s + 1] << 8 | e[s]);
  return t;
}, pt = 5, ai = 11, Mn = 2, l1 = ai - pt, ou = 65536 >> pt, c1 = 1 << pt, Nn = c1 - 1, u1 = 1024 >> pt, d1 = ou + u1, f1 = d1, B1 = 32, g1 = f1 + B1, h1 = 65536 >> ai, p1 = 1 << l1, w1 = p1 - 1, Ka = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint16Array(Array.prototype.slice.call(e, A, t));
}, b1 = function(e, A, t) {
  return e.slice ? e.slice(A, t) : new Uint32Array(Array.prototype.slice.call(e, A, t));
}, Q1 = function(e, A) {
  var t = o1(e), s = Array.isArray(t) ? a1(t) : new Uint32Array(t), r = Array.isArray(t) ? i1(t) : new Uint16Array(t), n = 24, o = Ka(r, n / 2, s[4] / 2), i = s[5] === 2 ? Ka(r, (n + s[4]) / 2) : b1(s, Math.ceil((n + s[4]) / 4));
  return new C1(s[0], s[1], s[2], s[3], o, i);
}, C1 = (
  /** @class */
  function() {
    function e(A, t, s, r, n, o) {
      this.initialValue = A, this.errorValue = t, this.highStart = s, this.highValueIndex = r, this.index = n, this.data = o;
    }
    return e.prototype.get = function(A) {
      var t;
      if (A >= 0) {
        if (A < 55296 || A > 56319 && A <= 65535)
          return t = this.index[A >> pt], t = (t << Mn) + (A & Nn), this.data[t];
        if (A <= 65535)
          return t = this.index[ou + (A - 55296 >> pt)], t = (t << Mn) + (A & Nn), this.data[t];
        if (A < this.highStart)
          return t = g1 - h1 + (A >> ai), t = this.index[t], t += A >> pt & w1, t = this.index[t], t = (t << Mn) + (A & Nn), this.data[t];
        if (A <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, e;
  }()
), Da = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", U1 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var dr = 0; dr < Da.length; dr++)
  U1[Da.charCodeAt(dr)] = dr;
var F1 = 1, Pn = 2, Vn = 3, Ra = 4, Oa = 5, m1 = 7, Ma = 8, Gn = 9, Xn = 10, Na = 11, Pa = 12, Va = 13, Ga = 14, Jn = 15, x1 = function(e) {
  for (var A = [], t = 0, s = e.length; t < s; ) {
    var r = e.charCodeAt(t++);
    if (r >= 55296 && r <= 56319 && t < s) {
      var n = e.charCodeAt(t++);
      (n & 64512) === 56320 ? A.push(((r & 1023) << 10) + (n & 1023) + 65536) : (A.push(r), t--);
    } else
      A.push(r);
  }
  return A;
}, v1 = function() {
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
}, y1 = Q1(n1), YA = "×", Wn = "÷", E1 = function(e) {
  return y1.get(e);
}, H1 = function(e, A, t) {
  var s = t - 2, r = A[s], n = A[t - 1], o = A[t];
  if (n === Pn && o === Vn)
    return YA;
  if (n === Pn || n === Vn || n === Ra || o === Pn || o === Vn || o === Ra)
    return Wn;
  if (n === Ma && [Ma, Gn, Na, Pa].indexOf(o) !== -1 || (n === Na || n === Gn) && (o === Gn || o === Xn) || (n === Pa || n === Xn) && o === Xn || o === Va || o === Oa || o === m1 || n === F1)
    return YA;
  if (n === Va && o === Ga) {
    for (; r === Oa; )
      r = A[--s];
    if (r === Ga)
      return YA;
  }
  if (n === Jn && o === Jn) {
    for (var i = 0; r === Jn; )
      i++, r = A[--s];
    if (i % 2 === 0)
      return YA;
  }
  return Wn;
}, I1 = function(e) {
  var A = x1(e), t = A.length, s = 0, r = 0, n = A.map(E1);
  return {
    next: function() {
      if (s >= t)
        return { done: !0, value: null };
      for (var o = YA; s < t && (o = H1(A, n, ++s)) === YA; )
        ;
      if (o !== YA || s === t) {
        var i = v1.apply(null, A.slice(r, s));
        return r = s, { value: i, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, _1 = function(e) {
  for (var A = I1(e), t = [], s; !(s = A.next()).done; )
    s.value && t.push(s.value.slice());
  return t;
};
const S1 = (e) => {
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
}, L1 = (e) => {
  const A = e.createElement("boundtest");
  A.style.width = "50px", A.style.display = "block", A.style.fontSize = "12px", A.style.letterSpacing = "0px", A.style.wordSpacing = "0px", e.body.appendChild(A);
  const t = e.createRange();
  A.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  const s = A.firstChild, r = en(s.data).map((a) => bA(a));
  let n = 0, o = {};
  const i = r.every((a, c) => {
    t.setStart(s, n), t.setEnd(s, n + a.length);
    const u = t.getBoundingClientRect();
    n += a.length;
    const l = u.x > o.x || u.y > o.y;
    return o = u, c === 0 ? !0 : l;
  });
  return e.body.removeChild(A), i;
}, k1 = () => typeof new Image().crossOrigin < "u", T1 = () => typeof new XMLHttpRequest().responseType == "string", K1 = (e) => {
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
}, Xa = (e) => e[0] === 0 && e[1] === 255 && e[2] === 0 && e[3] === 255, D1 = (e) => {
  const A = e.createElement("canvas"), t = 100;
  A.width = t, A.height = t;
  const s = A.getContext("2d");
  if (!s)
    return Promise.reject(!1);
  s.fillStyle = "rgb(0, 255, 0)", s.fillRect(0, 0, t, t);
  const r = new Image(), n = A.toDataURL();
  r.src = n;
  const o = yo(t, t, 0, 0, r);
  return s.fillStyle = "red", s.fillRect(0, 0, t, t), Ja(o).then((i) => {
    s.drawImage(i, 0, 0);
    const a = s.getImageData(0, 0, t, t).data;
    s.fillStyle = "red", s.fillRect(0, 0, t, t);
    const c = e.createElement("div");
    return c.style.backgroundImage = `url(${n})`, c.style.height = `${t}px`, Xa(a) ? Ja(yo(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then((i) => (s.drawImage(i, 0, 0), Xa(s.getImageData(0, 0, t, t).data))).catch(() => !1);
}, yo = (e, A, t, s, r) => {
  const n = "http://www.w3.org/2000/svg", o = document.createElementNS(n, "svg"), i = document.createElementNS(n, "foreignObject");
  return o.setAttributeNS(null, "width", e.toString()), o.setAttributeNS(null, "height", A.toString()), i.setAttributeNS(null, "width", "100%"), i.setAttributeNS(null, "height", "100%"), i.setAttributeNS(null, "x", t.toString()), i.setAttributeNS(null, "y", s.toString()), i.setAttributeNS(null, "externalResourcesRequired", "true"), o.appendChild(i), i.appendChild(r), o;
}, Ja = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => A(s), s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
}), EA = {
  get SUPPORT_RANGE_BOUNDS() {
    const e = S1(document);
    return Object.defineProperty(EA, "SUPPORT_RANGE_BOUNDS", { value: e }), e;
  },
  get SUPPORT_WORD_BREAKING() {
    const e = EA.SUPPORT_RANGE_BOUNDS && L1(document);
    return Object.defineProperty(EA, "SUPPORT_WORD_BREAKING", { value: e }), e;
  },
  get SUPPORT_SVG_DRAWING() {
    const e = K1(document);
    return Object.defineProperty(EA, "SUPPORT_SVG_DRAWING", { value: e }), e;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    const e = typeof Array.from == "function" && typeof window.fetch == "function" ? D1(document) : Promise.resolve(!1);
    return Object.defineProperty(EA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: e }), e;
  },
  get SUPPORT_CORS_IMAGES() {
    const e = k1();
    return Object.defineProperty(EA, "SUPPORT_CORS_IMAGES", { value: e }), e;
  },
  get SUPPORT_RESPONSE_TYPE() {
    const e = T1();
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
const R1 = (e, A, t, s) => {
  const r = N1(A, t), n = [];
  let o = 0;
  return r.forEach((i) => {
    if (t.textDecorationLine.length || i.trim().length > 0)
      if (EA.SUPPORT_RANGE_BOUNDS) {
        const a = Wa(s, o, i.length).getClientRects();
        if (a.length > 1) {
          const c = de(i);
          let u = 0;
          c.forEach((l) => {
            n.push(new Qs(l, kA.fromDOMRectList(e, Wa(s, u + o, l.length).getClientRects()))), u += l.length;
          });
        } else
          n.push(new Qs(i, kA.fromDOMRectList(e, a)));
      } else {
        const a = s.splitText(i.length);
        n.push(new Qs(i, O1(e, s))), s = a;
      }
    else EA.SUPPORT_RANGE_BOUNDS || (s = s.splitText(i.length));
    o += i.length;
  }), n;
}, O1 = (e, A) => {
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
}, Wa = (e, A, t) => {
  const s = e.ownerDocument;
  if (!s)
    throw new Error("Node has no owner document");
  const r = s.createRange();
  return r.setStart(e, A), r.setEnd(e, A + t), r;
}, de = (e) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const A = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(A.segment(e)).map((t) => t.segment);
  }
  return _1(e);
}, M1 = (e, A) => {
  if (EA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    const t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(e)).map((s) => s.segment);
  }
  return V1(e, A);
}, N1 = (e, A) => A.letterSpacing !== 0 ? de(e) : M1(e, A), P1 = [32, 160, 4961, 65792, 65793, 4153, 4241], V1 = (e, A) => {
  const t = fQ(e, {
    lineBreak: A.lineBreak,
    wordBreak: A.overflowWrap === "break-word" ? "break-word" : A.wordBreak
  }), s = [];
  let r;
  for (; !(r = t.next()).done; )
    if (r.value) {
      const n = r.value.slice(), o = en(n);
      let i = "";
      o.forEach((a) => {
        P1.indexOf(a) === -1 ? i += bA(a) : (i.length && s.push(i), s.push(bA(a)), i = "");
      }), i.length && s.push(i);
    }
  return s;
};
class G1 {
  constructor(A, t, s) {
    this.text = X1(t.data, s.textTransform), this.textBounds = R1(A, this.text, s, t);
  }
}
const X1 = (e, A) => {
  switch (A) {
    case 1:
      return e.toLowerCase();
    case 3:
      return e.replace(J1, W1);
    case 2:
      return e.toUpperCase();
    default:
      return e;
  }
}, J1 = /(^|\s|:|-|\(|\))([a-z])/g, W1 = (e, A, t) => e.length > 0 ? A + t.toUpperCase() : e;
class iu extends Fe {
  constructor(A, t) {
    super(A, t), this.src = t.currentSrc || t.src, this.intrinsicWidth = t.naturalWidth, this.intrinsicHeight = t.naturalHeight, this.context.cache.addImage(this.src);
  }
}
class au extends Fe {
  constructor(A, t) {
    super(A, t), this.canvas = t, this.intrinsicWidth = t.width, this.intrinsicHeight = t.height;
  }
}
class lu extends Fe {
  constructor(A, t) {
    super(A, t);
    const s = new XMLSerializer(), r = An(A, t);
    t.setAttribute("width", `${r.width}px`), t.setAttribute("height", `${r.height}px`), this.svg = `data:image/svg+xml,${encodeURIComponent(s.serializeToString(t))}`, this.intrinsicWidth = t.width.baseVal.value, this.intrinsicHeight = t.height.baseVal.value, this.context.cache.addImage(this.svg);
  }
}
class cu extends Fe {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class Eo extends Fe {
  constructor(A, t) {
    super(A, t), this.start = t.start, this.reversed = typeof t.reversed == "boolean" && t.reversed === !0;
  }
}
const Y1 = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], j1 = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], z1 = (e) => e.width > e.height ? new kA(e.left + (e.width - e.height) / 2, e.top, e.height, e.height) : e.width < e.height ? new kA(e.left, e.top + (e.height - e.width) / 2, e.width, e.width) : e, Z1 = (e) => {
  const A = e.type === $1 ? new Array(e.value.length + 1).join("•") : e.value;
  return A.length === 0 ? e.placeholder || "" : A;
}, q1 = (e) => e.value.length === 0 && !!e.placeholder, kr = "checkbox", Tr = "radio", $1 = "password", Ya = 707406591, Am = 1970632191;
class Cs extends Fe {
  constructor(A, t) {
    switch (super(A, t), this.type = t.type.toLowerCase(), this.checked = t.checked, this.value = Z1(t), this.isPlaceholder = q1(t), (this.type === kr || this.type === Tr) && (this.styles.backgroundColor = 3739148031, this.styles.borderTopColor = this.styles.borderRightColor = this.styles.borderBottomColor = this.styles.borderLeftColor = 2779096575, this.styles.borderTopWidth = this.styles.borderRightWidth = this.styles.borderBottomWidth = this.styles.borderLeftWidth = 1, this.styles.borderTopStyle = this.styles.borderRightStyle = this.styles.borderBottomStyle = this.styles.borderLeftStyle = 1, this.styles.backgroundClip = [
      0
      /* BACKGROUND_CLIP.BORDER_BOX */
    ], this.styles.backgroundOrigin = [
      0
      /* BACKGROUND_ORIGIN.BORDER_BOX */
    ], this.bounds = z1(this.bounds)), this.type) {
      case kr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = Y1;
        break;
      case Tr:
        this.styles.borderTopRightRadius = this.styles.borderTopLeftRadius = this.styles.borderBottomRightRadius = this.styles.borderBottomLeftRadius = j1;
        break;
    }
  }
}
class uu extends Fe {
  constructor(A, t) {
    super(A, t);
    const s = t.options[t.selectedIndex || 0];
    this.value = s && s.text || "";
  }
}
class du extends Fe {
  constructor(A, t) {
    super(A, t), this.value = t.value;
  }
}
class fu extends Fe {
  constructor(A, t) {
    super(A, t), this.src = t.src, this.width = parseInt(t.width, 10) || 0, this.height = parseInt(t.height, 10) || 0, this.backgroundColor = this.styles.backgroundColor;
    try {
      if (t.contentWindow && t.contentWindow.document && t.contentWindow.document.documentElement) {
        this.tree = gu(A, t.contentWindow.document.documentElement);
        const s = t.contentWindow.document.documentElement ? Tt(A, getComputedStyle(t.contentWindow.document.documentElement).backgroundColor) : we.TRANSPARENT, r = t.contentWindow.document.body ? Tt(A, getComputedStyle(t.contentWindow.document.body).backgroundColor) : we.TRANSPARENT;
        this.backgroundColor = qe(s) ? qe(r) ? this.styles.backgroundColor : r : s;
      }
    } catch {
    }
  }
}
const em = ["OL", "UL", "MENU"], Cr = (e, A, t, s) => {
  for (let r = A.firstChild, n; r; r = n)
    if (n = r.nextSibling, hu(r) && r.data.length > 0)
      t.textNodes.push(new G1(e, r, t.styles));
    else if (Ee(r))
      if (as(r) && r.assignedNodes)
        r.assignedNodes().forEach((o) => Cr(e, o, t, s));
      else {
        const o = Bu(e, r);
        o.styles.isVisible() && (tm(r, o, s) ? o.flags |= 4 : sm(o.styles) && (o.flags |= 2), em.indexOf(r.tagName) !== -1 && (o.flags |= 8), t.elements.push(o), r.slot, r.shadowRoot ? Cr(e, r.shadowRoot, o, s) : !Kr(r) && !pu(r) && !Dr(r) && Cr(e, r, o, s));
      }
}, Bu = (e, A) => Io(A) ? new iu(e, A) : wu(A) ? new au(e, A) : pu(A) ? new lu(e, A) : rm(A) ? new cu(e, A) : nm(A) ? new Eo(e, A) : om(A) ? new Cs(e, A) : Dr(A) ? new uu(e, A) : Kr(A) ? new du(e, A) : bu(A) ? new fu(e, A) : new Fe(e, A), gu = (e, A) => {
  const t = Bu(e, A);
  return t.flags |= 4, Cr(e, A, t, t), t;
}, tm = (e, A, t) => A.styles.isPositionedWithZIndex() || A.styles.opacity < 1 || A.styles.isTransformed() || li(e) && t.styles.isTransparent(), sm = (e) => e.isPositioned() || e.isFloating() ? !0 : hA(
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
), hu = (e) => e.nodeType === Node.TEXT_NODE, Ee = (e) => e.nodeType === Node.ELEMENT_NODE, Ho = (e) => Ee(e) && typeof e.style < "u" && !Ur(e), Ur = (e) => typeof e.className == "object", rm = (e) => e.tagName === "LI", nm = (e) => e.tagName === "OL", om = (e) => e.tagName === "INPUT", im = (e) => e.tagName === "HTML", pu = (e) => e.tagName === "svg", li = (e) => e.tagName === "BODY", wu = (e) => e.tagName === "CANVAS", ja = (e) => e.tagName === "VIDEO", Io = (e) => e.tagName === "IMG", bu = (e) => e.tagName === "IFRAME", Yn = (e) => e.tagName === "STYLE", za = (e) => e.tagName === "SCRIPT", Kr = (e) => e.tagName === "TEXTAREA", Dr = (e) => e.tagName === "SELECT", as = (e) => e.tagName === "SLOT", Za = (e) => e.tagName.indexOf("-") > 0;
class am {
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
const qa = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, $a = {
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
}, lm = {
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
}, cm = {
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
}, mt = (e, A, t, s, r, n) => e < A || e > t ? Ls(e, r, n.length > 0) : s.integers.reduce((o, i, a) => {
  for (; e >= i; )
    e -= i, o += s.values[a];
  return o;
}, "") + n, Qu = (e, A, t, s) => {
  let r = "";
  do
    t || e--, r = s(e) + r, e /= A;
  while (e * A >= A);
  return r;
}, wA = (e, A, t, s, r) => {
  const n = t - A + 1;
  return (e < 0 ? "-" : "") + (Qu(Math.abs(e), n, s, (o) => bA(Math.floor(o % n) + A)) + r);
}, at = (e, A, t = ". ") => {
  const s = A.length;
  return Qu(Math.abs(e), s, !1, (r) => A[Math.floor(r % s)]) + t;
}, Ht = 1, Pe = 2, Ve = 4, ls = 8, ve = (e, A, t, s, r, n) => {
  if (e < -9999 || e > 9999)
    return Ls(e, 4, r.length > 0);
  let o = Math.abs(e), i = r;
  if (o === 0)
    return A[0] + i;
  for (let a = 0; o > 0 && a <= 4; a++) {
    const c = o % 10;
    c === 0 && hA(n, Ht) && i !== "" ? i = A[c] + i : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && hA(n, Pe) || c === 1 && a === 1 && hA(n, Ve) && e > 100 || c === 1 && a > 1 && hA(n, ls) ? i = A[c] + (a > 0 ? t[a - 1] : "") + i : c === 1 && a > 0 && (i = t[a - 1] + i), o = Math.floor(o / 10);
  }
  return (e < 0 ? s : "") + i;
}, Al = "十百千萬", el = "拾佰仟萬", tl = "マイナス", jn = "마이너스", Ls = (e, A, t) => {
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
      return at(e, "〇一二三四五六七八九", r);
    case 6:
      return mt(e, 1, 3999, qa, 3, s).toLowerCase();
    case 7:
      return mt(e, 1, 3999, qa, 3, s);
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
      return mt(e, 1, 9999, $a, 3, s);
    case 35:
      return mt(e, 1, 9999, $a, 3, s).toLowerCase();
    case 13:
      return wA(e, 2534, 2543, !0, s);
    case 14:
    case 30:
      return wA(e, 6112, 6121, !0, s);
    case 15:
      return at(e, "子丑寅卯辰巳午未申酉戌亥", r);
    case 16:
      return at(e, "甲乙丙丁戊己庚辛壬癸", r);
    case 17:
    case 48:
      return ve(e, "零一二三四五六七八九", Al, "負", r, Pe | Ve | ls);
    case 47:
      return ve(e, "零壹貳參肆伍陸柒捌玖", el, "負", r, Ht | Pe | Ve | ls);
    case 42:
      return ve(e, "零一二三四五六七八九", Al, "负", r, Pe | Ve | ls);
    case 41:
      return ve(e, "零壹贰叁肆伍陆柒捌玖", el, "负", r, Ht | Pe | Ve | ls);
    case 26:
      return ve(e, "〇一二三四五六七八九", "十百千万", tl, r, 0);
    case 25:
      return ve(e, "零壱弐参四伍六七八九", "拾百千万", tl, r, Ht | Pe | Ve);
    case 31:
      return ve(e, "영일이삼사오육칠팔구", "십백천만", jn, n, Ht | Pe | Ve);
    case 33:
      return ve(e, "零一二三四五六七八九", "十百千萬", jn, n, 0);
    case 32:
      return ve(e, "零壹貳參四五六七八九", "拾百千", jn, n, Ht | Pe | Ve);
    case 18:
      return wA(e, 2406, 2415, !0, s);
    case 20:
      return mt(e, 1, 19999, cm, 3, s);
    case 21:
      return wA(e, 2790, 2799, !0, s);
    case 22:
      return wA(e, 2662, 2671, !0, s);
    case 52:
      return mt(e, 1, 10999, lm, 3, s);
    case 23:
      return at(e, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return at(e, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return wA(e, 3302, 3311, !0, s);
    case 28:
      return at(e, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", r);
    case 29:
      return at(e, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", r);
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
}, _o = "data-html2canvas-ignore", um = (e) => {
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
class sl {
  constructor(A, t, s) {
    if (this.context = A, this.options = s, this.scrolledElements = [], this.referenceElement = t, this.counters = new am(), this.quoteDepth = 0, !t.ownerDocument)
      throw new Error("Cloned element does not have an owner document");
    if (!this.options.iframeContainer) {
      const r = um(t);
      r && (this.options.iframeContainer = r);
    }
    this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
  }
  toIFrame(A, t) {
    const s = dm(A, t, this.options.iframeContainer);
    if (!s.contentWindow)
      return Promise.reject("Unable to find iframe window");
    const r = A.defaultView.pageXOffset, n = A.defaultView.pageYOffset, o = s.contentWindow, i = o.document, a = gm(s).then(async () => {
      this.scrolledElements.forEach(wm), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0)));
      const l = this.options.onclone, f = this.clonedReferenceElement;
      return typeof f > "u" ? Promise.reject(`Error finding the ${this.referenceElement.nodeName} in the cloned document`) : (i.fonts && i.fonts.ready && await i.fonts.ready, /(AppleWebKit)/g.test(navigator.userAgent) && await Bm(i), typeof l == "function" ? Promise.resolve().then(() => l(i, f)).then(() => s) : s);
    }), c = i.baseURI;
    i.open();
    try {
      const l = trustedTypes.createPolicy("my-policy", {
        createHTML: (b) => b
      }), f = rl(document.doctype) + "<html></html>", p = l.createHTML(f);
      i.write(p);
    } catch {
      i.write(rl(document.doctype) + "<html></html>");
    }
    pm(this.referenceElement.ownerDocument, r, n);
    const u = i.adoptNode(this.documentElement);
    return Fm(u, c), i.replaceChild(u, i.documentElement), i.close(), a;
  }
  createElementClone(A) {
    if (vo(
      A,
      2
      /* DebuggerType.CLONE */
    ))
      debugger;
    if (wu(A))
      return this.createCanvasClone(A);
    if (ja(A))
      return this.createVideoClone(A);
    if (Yn(A))
      return this.createStyleClone(A);
    const t = A.cloneNode(!1);
    return Io(t) && (Io(A) && A.currentSrc && A.currentSrc !== A.src && (t.src = A.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Za(t) ? this.createCustomElementClone(t) : t;
  }
  createCustomElementClone(A) {
    const t = document.createElement("div");
    if (t.className = A.className, zn(A.style, t), A.shadowRoot)
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
    (!Ee(t) || !za(t) && !t.hasAttribute(_o) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ee(t) || !Yn(t)) && A.appendChild(this.cloneNode(t, s));
  }
  /**
   * Check if a child node should be cloned based on filtering rules
   * Filters out: scripts, ignored elements, and optionally styles
   */
  shouldCloneChild(A) {
    return !Ee(A) || !za(A) && !A.hasAttribute(_o) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(A));
  }
  /**
   * Check if a style element should be cloned based on copyStyles option
   */
  shouldCloneStyleElement(A) {
    return !this.options.copyStyles || !Ee(A) || !Yn(A);
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
    if (!as(A))
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
      Ee(r) && as(r) ? this.cloneSlotElement(r, t, s) : this.safeAppendClonedChild(t, r, s);
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
    if (!as(A))
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
      Ee(r) && as(r) ? this.cloneSlotElementAsLightDOM(r, t, s) : this.appendChildNode(t, r, s);
  }
  /**
   * Clone child nodes from source element to clone element
   * Handles shadow DOM, slots, and light DOM appropriately
   */
  cloneChildNodes(A, t, s) {
    A.shadowRoot && t.shadowRoot ? (this.cloneShadowDOMChildren(A.shadowRoot, t.shadowRoot, s), this.cloneLightDOMChildren(A, t, s)) : A.shadowRoot && !t.shadowRoot ? this.cloneShadowDOMAsLightDOM(A.shadowRoot, t, s) : this.cloneLightDOMChildren(A, t, s);
  }
  cloneNode(A, t) {
    if (hu(A))
      return document.createTextNode(A.data);
    if (!A.ownerDocument)
      return A.cloneNode(!1);
    const s = A.ownerDocument.defaultView;
    if (s && Ee(A) && (Ho(A) || Ur(A))) {
      const r = this.createElementClone(A);
      r.style.transitionProperty = "none";
      const n = s.getComputedStyle(A), o = s.getComputedStyle(A, ":before"), i = s.getComputedStyle(A, ":after");
      this.referenceElement === A && Ho(r) && (this.clonedReferenceElement = r), li(r) && Cm(r, this.options.cspNonce);
      const a = this.counters.parse(new ka(this.context, n)), c = this.resolvePseudoContent(A, r, o, Us.BEFORE);
      Za(A) && (t = !0), ja(A) || this.cloneChildNodes(A, r, t), c && r.insertBefore(c, r.firstChild);
      const u = this.resolvePseudoContent(A, r, i, Us.AFTER);
      return u && r.appendChild(u), this.counters.pop(a), (n && (this.options.copyStyles || Ur(A)) && !bu(A) || t) && zn(n, r), (A.scrollTop !== 0 || A.scrollLeft !== 0) && this.scrolledElements.push([r, A.scrollLeft, A.scrollTop]), (Kr(A) || Dr(A)) && (Kr(r) || Dr(r)) && (r.value = A.value), r;
    }
    return A.cloneNode(!1);
  }
  resolvePseudoContent(A, t, s, r) {
    if (!s)
      return;
    const n = s.content, o = t.ownerDocument;
    if (!o || !n || n === "none" || n === "-moz-alt-content" || s.display === "none")
      return;
    this.counters.parse(new ka(this.context, s));
    const i = new t1(this.context, s), a = o.createElement("html2canvaspseudoelement");
    zn(s, a), i.content.forEach((u) => {
      if (u.type === 0)
        a.appendChild(o.createTextNode(u.value));
      else if (u.type === 22) {
        const l = o.createElement("img");
        l.src = u.value, l.style.opacity = "1", a.appendChild(l);
      } else if (u.type === 18) {
        if (u.name === "attr") {
          const l = u.values.filter(z);
          l.length && a.appendChild(o.createTextNode(A.getAttribute(l[0].value) || ""));
        } else if (u.name === "counter") {
          const [l, f] = u.values.filter(IA);
          if (l && z(l)) {
            const p = this.counters.getCounterValue(l.value), b = f && z(f) ? xo.parse(this.context, f.value) : 3;
            a.appendChild(o.createTextNode(Ls(p, b, !1)));
          }
        } else if (u.name === "counters") {
          const [l, f, p] = u.values.filter(IA);
          if (l && z(l)) {
            const b = this.counters.getCounterValues(l.value), U = p && z(p) ? xo.parse(this.context, p.value) : 3, m = f && f.type === 0 ? f.value : "", _ = b.map((y) => Ls(y, U, !1)).join(m);
            a.appendChild(o.createTextNode(_));
          }
        }
      } else if (u.type === 20)
        switch (u.value) {
          case "open-quote":
            a.appendChild(o.createTextNode(La(i.quotes, this.quoteDepth++, !0)));
            break;
          case "close-quote":
            a.appendChild(o.createTextNode(La(i.quotes, --this.quoteDepth, !1)));
            break;
          default:
            a.appendChild(o.createTextNode(u.value));
        }
    }), a.className = `${So} ${Lo}`;
    const c = r === Us.BEFORE ? ` ${So}` : ` ${Lo}`;
    return Ur(t) ? t.className.baseValue += c : t.className += c, a;
  }
  static destroy(A) {
    return A.parentNode ? (A.parentNode.removeChild(A), !0) : !1;
  }
}
var Us;
(function(e) {
  e[e.BEFORE = 0] = "BEFORE", e[e.AFTER = 1] = "AFTER";
})(Us || (Us = {}));
const dm = (e, A, t) => {
  const s = e.createElement("iframe");
  return s.className = "html2canvas-container", s.style.visibility = "hidden", s.style.position = "fixed", s.style.left = "-10000px", s.style.top = "0px", s.style.border = "0", s.width = A.width.toString(), s.height = A.height.toString(), s.scrolling = "no", s.setAttribute(_o, "true"), (t || e.body).appendChild(s), s;
}, fm = (e) => new Promise((A) => {
  if (e.complete) {
    A();
    return;
  }
  if (!e.src) {
    A();
    return;
  }
  e.onload = A, e.onerror = A;
}), Bm = (e) => Promise.all([].slice.call(e.images, 0).map(fm)), gm = (e) => new Promise((A, t) => {
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
}), hm = [
  "all",
  // #2476
  "d",
  // #2483
  "content"
  // Safari shows pseudoelements if content is set
], zn = (e, A) => {
  for (let t = e.length - 1; t >= 0; t--) {
    const s = e.item(t);
    hm.indexOf(s) === -1 && !s.startsWith("--") && A.style.setProperty(s, e.getPropertyValue(s));
  }
  return A;
}, rl = (e) => {
  let A = "";
  return e && (A += "<!DOCTYPE ", e.name && (A += e.name), e.internalSubset && (A += e.internalSubset), e.publicId && (A += `"${e.publicId}"`), e.systemId && (A += `"${e.systemId}"`), A += ">"), A;
}, pm = (e, A, t) => {
  e && e.defaultView && (A !== e.defaultView.pageXOffset || t !== e.defaultView.pageYOffset) && e.defaultView.scrollTo(A, t);
}, wm = ([e, A, t]) => {
  e.scrollLeft = A, e.scrollTop = t;
}, bm = ":before", Qm = ":after", So = "___html2canvas___pseudoelement_before", Lo = "___html2canvas___pseudoelement_after", nl = `{
    content: "" !important;
    display: none !important;
}`, Cm = (e, A) => {
  Um(e, `.${So}${bm}${nl}
         .${Lo}${Qm}${nl}`, A);
}, Um = (e, A, t) => {
  const s = e.ownerDocument;
  if (s) {
    const r = s.createElement("style");
    r.textContent = A, t && (r.nonce = t), e.appendChild(r);
  }
}, Fm = (e, A) => {
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
class mm {
  constructor(A, t) {
    this.context = A, this._options = t, this._cache = {};
  }
  addImage(A) {
    const t = Promise.resolve();
    return this.has(A) || (qn(A) || Em(A)) && (this._cache[A] = this.loadImage(A)).catch(() => {
    }), t;
  }
  match(A) {
    return this._cache[A];
  }
  async loadImage(A) {
    const t = typeof this._options.customIsSameOrigin == "function" ? await this._options.customIsSameOrigin(A, Ae.isSameOrigin) : Ae.isSameOrigin(A), s = !Zn(A) && this._options.useCORS === !0 && EA.SUPPORT_CORS_IMAGES && !t, r = !Zn(A) && !t && !qn(A) && typeof this._options.proxy == "string" && EA.SUPPORT_CORS_XHR && !s;
    if (!t && this._options.allowTaint === !1 && !Zn(A) && !qn(A) && !r && !s)
      return;
    let n = A;
    return r && (n = await this.proxy(n)), this.context.logger.debug(`Added image ${A.substring(0, 256)}`), await new Promise((o, i) => {
      const a = new Image();
      a.onload = () => o(a), a.onerror = i, (Hm(n) || s) && (a.crossOrigin = "anonymous"), a.src = n, a.complete === !0 && setTimeout(() => o(a), 500), this._options.imageTimeout > 0 && setTimeout(() => i(`Timed out (${this._options.imageTimeout}ms) loading image`), this._options.imageTimeout);
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
            c.addEventListener("load", () => r(c.result), !1), c.addEventListener("error", (u) => n(u), !1), c.readAsDataURL(i.response);
          }
        else
          n(`Failed to proxy resource ${s} with status code ${i.status}`);
      }, i.onerror = n;
      const a = t.indexOf("?") > -1 ? "&" : "?";
      if (i.open("GET", `${t}${a}url=${encodeURIComponent(A)}&responseType=${o}`), o !== "text" && i instanceof XMLHttpRequest && (i.responseType = o), this._options.imageTimeout) {
        const c = this._options.imageTimeout;
        i.timeout = c, i.ontimeout = () => n(`Timed out (${c}ms) proxying ${s}`);
      }
      i.send();
    });
  }
}
const xm = /^data:image\/svg\+xml/i, vm = /^data:image\/.*;base64,/i, ym = /^data:image\/.*/i, Em = (e) => EA.SUPPORT_SVG_DRAWING || !Im(e), Zn = (e) => ym.test(e), Hm = (e) => vm.test(e), qn = (e) => e.substr(0, 4) === "blob", Im = (e) => e.substr(-3).toLowerCase() === "svg" || xm.test(e);
class R {
  constructor(A, t) {
    this.type = 0, this.x = A, this.y = t;
  }
  add(A, t) {
    return new R(this.x + A, this.y + t);
  }
}
const xt = (e, A, t) => new R(e.x + (A.x - e.x) * t, e.y + (A.y - e.y) * t);
class Le {
  constructor(A, t, s, r) {
    this.type = 1, this.start = A, this.startControl = t, this.endControl = s, this.end = r;
  }
  subdivide(A, t) {
    const s = xt(this.start, this.startControl, A), r = xt(this.startControl, this.endControl, A), n = xt(this.endControl, this.end, A), o = xt(s, r, A), i = xt(r, n, A), a = xt(o, i, A);
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
class _m {
  constructor(A) {
    const t = A.styles, s = A.bounds;
    let [r, n] = os(t.borderTopLeftRadius, s.width, s.height), [o, i] = os(t.borderTopRightRadius, s.width, s.height), [a, c] = os(t.borderBottomRightRadius, s.width, s.height), [u, l] = os(t.borderBottomLeftRadius, s.width, s.height);
    const f = [];
    f.push((r + o) / s.width), f.push((u + a) / s.width), f.push((n + l) / s.height), f.push((i + c) / s.height);
    const p = Math.max(...f);
    p > 1 && (r /= p, n /= p, o /= p, i /= p, a /= p, c /= p, u /= p, l /= p);
    const b = s.width - o, U = s.height - c, m = s.width - a, _ = s.height - l, y = t.borderTopWidth, w = t.borderRightWidth, x = t.borderBottomWidth, L = t.borderLeftWidth, X = q(t.paddingTop, A.bounds.width), eA = q(t.paddingRight, A.bounds.width), UA = q(t.paddingBottom, A.bounds.width), dA = q(t.paddingLeft, A.bounds.width);
    this.topLeftBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + L / 3, s.top + y / 3, r - L / 3, n - y / 3, tA.TOP_LEFT) : new R(s.left + L / 3, s.top + y / 3), this.topRightBorderDoubleOuterBox = r > 0 || n > 0 ? fA(s.left + b, s.top + y / 3, o - w / 3, i - y / 3, tA.TOP_RIGHT) : new R(s.left + s.width - w / 3, s.top + y / 3), this.bottomRightBorderDoubleOuterBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - w / 3, c - x / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - w / 3, s.top + s.height - x / 3), this.bottomLeftBorderDoubleOuterBox = u > 0 || l > 0 ? fA(s.left + L / 3, s.top + _, u - L / 3, l - x / 3, tA.BOTTOM_LEFT) : new R(s.left + L / 3, s.top + s.height - x / 3), this.topLeftBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + L * 2 / 3, s.top + y * 2 / 3, r - L * 2 / 3, n - y * 2 / 3, tA.TOP_LEFT) : new R(s.left + L * 2 / 3, s.top + y * 2 / 3), this.topRightBorderDoubleInnerBox = r > 0 || n > 0 ? fA(s.left + b, s.top + y * 2 / 3, o - w * 2 / 3, i - y * 2 / 3, tA.TOP_RIGHT) : new R(s.left + s.width - w * 2 / 3, s.top + y * 2 / 3), this.bottomRightBorderDoubleInnerBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - w * 2 / 3, c - x * 2 / 3, tA.BOTTOM_RIGHT) : new R(s.left + s.width - w * 2 / 3, s.top + s.height - x * 2 / 3), this.bottomLeftBorderDoubleInnerBox = u > 0 || l > 0 ? fA(s.left + L * 2 / 3, s.top + _, u - L * 2 / 3, l - x * 2 / 3, tA.BOTTOM_LEFT) : new R(s.left + L * 2 / 3, s.top + s.height - x * 2 / 3), this.topLeftBorderStroke = r > 0 || n > 0 ? fA(s.left + L / 2, s.top + y / 2, r - L / 2, n - y / 2, tA.TOP_LEFT) : new R(s.left + L / 2, s.top + y / 2), this.topRightBorderStroke = r > 0 || n > 0 ? fA(s.left + b, s.top + y / 2, o - w / 2, i - y / 2, tA.TOP_RIGHT) : new R(s.left + s.width - w / 2, s.top + y / 2), this.bottomRightBorderStroke = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a - w / 2, c - x / 2, tA.BOTTOM_RIGHT) : new R(s.left + s.width - w / 2, s.top + s.height - x / 2), this.bottomLeftBorderStroke = u > 0 || l > 0 ? fA(s.left + L / 2, s.top + _, u - L / 2, l - x / 2, tA.BOTTOM_LEFT) : new R(s.left + L / 2, s.top + s.height - x / 2), this.topLeftBorderBox = r > 0 || n > 0 ? fA(s.left, s.top, r, n, tA.TOP_LEFT) : new R(s.left, s.top), this.topRightBorderBox = o > 0 || i > 0 ? fA(s.left + b, s.top, o, i, tA.TOP_RIGHT) : new R(s.left + s.width, s.top), this.bottomRightBorderBox = a > 0 || c > 0 ? fA(s.left + m, s.top + U, a, c, tA.BOTTOM_RIGHT) : new R(s.left + s.width, s.top + s.height), this.bottomLeftBorderBox = u > 0 || l > 0 ? fA(s.left, s.top + _, u, l, tA.BOTTOM_LEFT) : new R(s.left, s.top + s.height), this.topLeftPaddingBox = r > 0 || n > 0 ? fA(s.left + L, s.top + y, Math.max(0, r - L), Math.max(0, n - y), tA.TOP_LEFT) : new R(s.left + L, s.top + y), this.topRightPaddingBox = o > 0 || i > 0 ? fA(s.left + Math.min(b, s.width - w), s.top + y, b > s.width + w ? 0 : Math.max(0, o - w), Math.max(0, i - y), tA.TOP_RIGHT) : new R(s.left + s.width - w, s.top + y), this.bottomRightPaddingBox = a > 0 || c > 0 ? fA(s.left + Math.min(m, s.width - L), s.top + Math.min(U, s.height - x), Math.max(0, a - w), Math.max(0, c - x), tA.BOTTOM_RIGHT) : new R(s.left + s.width - w, s.top + s.height - x), this.bottomLeftPaddingBox = u > 0 || l > 0 ? fA(s.left + L, s.top + Math.min(_, s.height - x), Math.max(0, u - L), Math.max(0, l - x), tA.BOTTOM_LEFT) : new R(s.left + L, s.top + s.height - x), this.topLeftContentBox = r > 0 || n > 0 ? fA(s.left + L + dA, s.top + y + X, Math.max(0, r - (L + dA)), Math.max(0, n - (y + X)), tA.TOP_LEFT) : new R(s.left + L + dA, s.top + y + X), this.topRightContentBox = o > 0 || i > 0 ? fA(s.left + Math.min(b, s.width + L + dA), s.top + y + X, b > s.width + L + dA ? 0 : o - L + dA, i - (y + X), tA.TOP_RIGHT) : new R(s.left + s.width - (w + eA), s.top + y + X), this.bottomRightContentBox = a > 0 || c > 0 ? fA(s.left + Math.min(m, s.width - (L + dA)), s.top + Math.min(U, s.height + y + X), Math.max(0, a - (w + eA)), c - (x + UA), tA.BOTTOM_RIGHT) : new R(s.left + s.width - (w + eA), s.top + s.height - (x + UA)), this.bottomLeftContentBox = u > 0 || l > 0 ? fA(s.left + L + dA, s.top + _, Math.max(0, u - (L + dA)), l - (x + UA), tA.BOTTOM_LEFT) : new R(s.left + L + dA, s.top + s.height - (x + UA));
  }
}
var tA;
(function(e) {
  e[e.TOP_LEFT = 0] = "TOP_LEFT", e[e.TOP_RIGHT = 1] = "TOP_RIGHT", e[e.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", e[e.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(tA || (tA = {}));
const fA = (e, A, t, s, r) => {
  const n = 4 * ((Math.sqrt(2) - 1) / 3), o = t * n, i = s * n, a = e + t, c = A + s;
  switch (r) {
    case tA.TOP_LEFT:
      return new Le(new R(e, c), new R(e, c - i), new R(a - o, A), new R(a, A));
    case tA.TOP_RIGHT:
      return new Le(new R(e, A), new R(e + o, A), new R(a, c - i), new R(a, c));
    case tA.BOTTOM_RIGHT:
      return new Le(new R(a, A), new R(a, A + i), new R(e + o, c), new R(e, c));
    case tA.BOTTOM_LEFT:
    default:
      return new Le(new R(a, c), new R(a - o, c), new R(e, A + i), new R(e, A));
  }
}, Rr = (e) => [e.topLeftBorderBox, e.topRightBorderBox, e.bottomRightBorderBox, e.bottomLeftBorderBox], Sm = (e) => [
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
class ol {
  constructor(A, t, s) {
    this.offsetX = A, this.offsetY = t, this.matrix = s, this.type = 0, this.target = 6;
  }
}
class fr {
  constructor(A, t) {
    this.path = A, this.target = t, this.type = 1;
  }
}
class Lm {
  constructor(A) {
    this.opacity = A, this.type = 2, this.target = 6;
  }
}
const km = (e) => e.type === 0, Cu = (e) => e.type === 1, Tm = (e) => e.type === 2, il = (e, A) => e.length === A.length ? e.some((t, s) => t === A[s]) : !1, Km = (e, A, t, s, r) => e.map((n, o) => {
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
class Uu {
  constructor(A) {
    this.element = A, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
  }
}
class Fu {
  constructor(A, t) {
    if (this.container = A, this.parent = t, this.effects = [], this.curves = new _m(this.container), this.container.styles.opacity < 1 && this.effects.push(new Lm(this.container.styles.opacity)), this.container.styles.rotate !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + q(s[0], this.container.bounds.width), n = this.container.bounds.top + q(s[1], this.container.bounds.height), i = this.container.styles.rotate * Math.PI / 180, a = Math.cos(i), c = Math.sin(i), u = [a, c, -c, a, 0, 0];
      this.effects.push(new ol(r, n, u));
    }
    if (this.container.styles.transform !== null) {
      const s = this.container.styles.transformOrigin, r = this.container.bounds.left + q(s[0], this.container.bounds.width), n = this.container.bounds.top + q(s[1], this.container.bounds.height), o = this.container.styles.transform;
      this.effects.push(new ol(r, n, o));
    }
    if (this.container.styles.overflowX !== 0) {
      const s = Rr(this.curves), r = Or(this.curves);
      il(s, r) ? this.effects.push(new fr(
        s,
        6
        /* EffectTarget.CONTENT */
      )) : (this.effects.push(new fr(
        s,
        2
        /* EffectTarget.BACKGROUND_BORDERS */
      )), this.effects.push(new fr(
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
      const n = s.effects.filter((o) => !Cu(o));
      if (t || s.container.styles.position !== 0 || !s.parent) {
        if (t = [
          2,
          3
          /* POSITION.FIXED */
        ].indexOf(s.container.styles.position) === -1, s.container.styles.overflowX !== 0) {
          const o = Rr(s.curves), i = Or(s.curves);
          il(o, i) || r.unshift(new fr(
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
    ), i = new Fu(r, e);
    hA(
      r.styles.display,
      2048
      /* DISPLAY.LIST_ITEM */
    ) && s.push(i);
    const a = hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) ? [] : s;
    if (n || o) {
      const c = n || r.styles.isPositioned() ? t : A, u = new Uu(i);
      if (r.styles.isPositioned() || r.styles.opacity < 1 || r.styles.isTransformed()) {
        const l = r.styles.zIndex.order;
        if (l < 0) {
          let f = 0;
          c.negativeZIndex.some((p, b) => l > p.element.container.styles.zIndex.order ? (f = b, !1) : f > 0), c.negativeZIndex.splice(f, 0, u);
        } else if (l > 0) {
          let f = 0;
          c.positiveZIndex.some((p, b) => l >= p.element.container.styles.zIndex.order ? (f = b + 1, !1) : f > 0), c.positiveZIndex.splice(f, 0, u);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(u);
      } else
        r.styles.isFloating() ? c.nonPositionedFloats.push(u) : c.nonPositionedInlineLevel.push(u);
      ko(i, u, n ? u : t, a);
    } else
      r.styles.isInlineLevel() ? A.inlineLevel.push(i) : A.nonInlineLevel.push(i), ko(i, A, t, a);
    hA(
      r.flags,
      8
      /* FLAGS.IS_LIST_OWNER */
    ) && mu(r, a);
  });
}, mu = (e, A) => {
  let t = e instanceof Eo ? e.start : 1;
  const s = e instanceof Eo ? e.reversed : !1;
  for (let r = 0; r < A.length; r++) {
    const n = A[r];
    n.container instanceof cu && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Ls(t, n.container.styles.listStyleType, !0), t += s ? -1 : 1;
  }
}, Dm = (e) => {
  const A = new Fu(e, null), t = new Uu(A), s = [];
  return ko(A, t, t, s), mu(A.container, s), t;
}, al = (e, A) => {
  switch (A) {
    case 0:
      return ZA(e.topLeftBorderBox, e.topLeftPaddingBox, e.topRightBorderBox, e.topRightPaddingBox);
    case 1:
      return ZA(e.topRightBorderBox, e.topRightPaddingBox, e.bottomRightBorderBox, e.bottomRightPaddingBox);
    case 2:
      return ZA(e.bottomRightBorderBox, e.bottomRightPaddingBox, e.bottomLeftBorderBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return ZA(e.bottomLeftBorderBox, e.bottomLeftPaddingBox, e.topLeftBorderBox, e.topLeftPaddingBox);
  }
}, Rm = (e, A) => {
  switch (A) {
    case 0:
      return ZA(e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox, e.topRightBorderBox, e.topRightBorderDoubleOuterBox);
    case 1:
      return ZA(e.topRightBorderBox, e.topRightBorderDoubleOuterBox, e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox);
    case 2:
      return ZA(e.bottomRightBorderBox, e.bottomRightBorderDoubleOuterBox, e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return ZA(e.bottomLeftBorderBox, e.bottomLeftBorderDoubleOuterBox, e.topLeftBorderBox, e.topLeftBorderDoubleOuterBox);
  }
}, Om = (e, A) => {
  switch (A) {
    case 0:
      return ZA(e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox, e.topRightBorderDoubleInnerBox, e.topRightPaddingBox);
    case 1:
      return ZA(e.topRightBorderDoubleInnerBox, e.topRightPaddingBox, e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox);
    case 2:
      return ZA(e.bottomRightBorderDoubleInnerBox, e.bottomRightPaddingBox, e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox);
    case 3:
    default:
      return ZA(e.bottomLeftBorderDoubleInnerBox, e.bottomLeftPaddingBox, e.topLeftBorderDoubleInnerBox, e.topLeftPaddingBox);
  }
}, Mm = (e, A) => {
  switch (A) {
    case 0:
      return Br(e.topLeftBorderStroke, e.topRightBorderStroke);
    case 1:
      return Br(e.topRightBorderStroke, e.bottomRightBorderStroke);
    case 2:
      return Br(e.bottomRightBorderStroke, e.bottomLeftBorderStroke);
    case 3:
    default:
      return Br(e.bottomLeftBorderStroke, e.topLeftBorderStroke);
  }
}, Br = (e, A) => {
  const t = [];
  return jA(e) ? t.push(e.subdivide(0.5, !1)) : t.push(e), jA(A) ? t.push(A.subdivide(0.5, !0)) : t.push(A), t;
}, ZA = (e, A, t, s) => {
  const r = [];
  return jA(e) ? r.push(e.subdivide(0.5, !1)) : r.push(e), jA(t) ? r.push(t.subdivide(0.5, !0)) : r.push(t), jA(s) ? r.push(s.subdivide(0.5, !0).reverse()) : r.push(s), jA(A) ? r.push(A.subdivide(0.5, !1).reverse()) : r.push(A), r;
}, xu = (e) => {
  const A = e.bounds, t = e.styles;
  return A.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Fs = (e) => {
  const A = e.styles, t = e.bounds, s = q(A.paddingLeft, t.width), r = q(A.paddingRight, t.width), n = q(A.paddingTop, t.width), o = q(A.paddingBottom, t.width);
  return t.add(s + A.borderLeftWidth, n + A.borderTopWidth, -(A.borderRightWidth + A.borderLeftWidth + s + r), -(A.borderTopWidth + A.borderBottomWidth + n + o));
}, Nm = (e, A) => e === 0 ? A.bounds : e === 2 ? Fs(A) : xu(A), Pm = (e, A) => e === 0 ? A.bounds : e === 2 ? Fs(A) : xu(A), $n = (e, A, t) => {
  const s = Nm(It(e.styles.backgroundOrigin, A), e), r = Pm(It(e.styles.backgroundClip, A), e), n = Vm(It(e.styles.backgroundSize, A), t, s);
  let [o, i] = n;
  const a = os(It(e.styles.backgroundPosition, A), s.width - o, s.height - i), c = Gm(It(e.styles.backgroundRepeat, A), a, n, s, r), u = Math.round(s.left + a[0]), l = Math.round(s.top + a[1]);
  return o = Math.max(1, o), i = Math.max(1, i), [c, u, l, o, i];
}, vt = (e) => z(e) && e.value === Kt.AUTO, gr = (e) => typeof e == "number", Vm = (e, [A, t, s], r) => {
  const [n, o] = e;
  if (!n)
    return [0, 0];
  if (uA(n) && o && uA(o))
    return [q(n, r.width), q(o, r.height)];
  const i = gr(s);
  if (z(n) && (n.value === Kt.CONTAIN || n.value === Kt.COVER))
    return gr(s) ? r.width / r.height < s != (n.value === Kt.COVER) ? [r.width, r.width / s] : [r.height * s, r.height] : [r.width, r.height];
  const a = gr(A), c = gr(t), u = a || c;
  if (vt(n) && (!o || vt(o))) {
    if (a && c)
      return [A, t];
    if (!i && !u)
      return [r.width, r.height];
    if (u && i) {
      const U = a ? A : t * s, m = c ? t : A / s;
      return [U, m];
    }
    const p = a ? A : r.width, b = c ? t : r.height;
    return [p, b];
  }
  if (i) {
    let p = 0, b = 0;
    return uA(n) ? p = q(n, r.width) : uA(o) && (b = q(o, r.height)), vt(n) ? p = b * s : (!o || vt(o)) && (b = p / s), [p, b];
  }
  let l = null, f = null;
  if (uA(n) ? l = q(n, r.width) : o && uA(o) && (f = q(o, r.height)), l !== null && (!o || vt(o)) && (f = a && c ? l / A * t : r.height), f !== null && vt(n) && (l = a && c ? f / t * A : r.width), l !== null && f !== null)
    return [l, f];
  throw new Error("Unable to calculate background-size for element");
}, It = (e, A) => {
  const t = e[A];
  return typeof t > "u" ? e[0] : t;
}, Gm = (e, [A, t], [s, r], n, o) => {
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
}, Xm = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", ll = "Hidden Text";
class Jm {
  constructor(A) {
    this._data = {}, this._document = A;
  }
  parseMetrics(A, t) {
    const s = this._document.createElement("div"), r = this._document.createElement("img"), n = this._document.createElement("span"), o = this._document.body;
    s.style.visibility = "hidden", s.style.fontFamily = A, s.style.fontSize = t, s.style.margin = "0", s.style.padding = "0", s.style.whiteSpace = "nowrap", o.appendChild(s), r.src = Xm, r.width = 1, r.height = 1, r.style.margin = "0", r.style.padding = "0", r.style.verticalAlign = "baseline", n.style.fontFamily = A, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(ll)), s.appendChild(n), s.appendChild(r);
    const i = r.offsetTop - n.offsetTop + 2;
    s.removeChild(n), s.appendChild(this._document.createTextNode(ll)), s.style.lineHeight = "normal", r.style.verticalAlign = "super";
    const a = r.offsetTop - s.offsetTop + 2;
    return o.removeChild(s), { baseline: i, middle: a };
  }
  getMetrics(A, t) {
    const s = `${A} ${t}`;
    return typeof this._data[s] > "u" && (this._data[s] = this.parseMetrics(A, t)), this._data[s];
  }
}
class vu {
  constructor(A, t) {
    this.context = A, this.options = t;
  }
}
const Wm = 1e4;
class ci extends vu {
  constructor(A, t) {
    super(A, t), this._activeEffects = [], this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), t.canvas || (this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`), this.fontMetrics = new Jm(document), this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.ctx.textBaseline = "bottom", this._activeEffects = [], this.context.logger.debug(`Canvas renderer initialized (${t.width}x${t.height}) with scale ${t.scale}`);
  }
  applyEffects(A) {
    for (; this._activeEffects.length; )
      this.popEffect();
    A.forEach((t) => this.applyEffect(t));
  }
  applyEffect(A) {
    this.ctx.save(), Tm(A) && (this.ctx.globalAlpha = A.opacity), km(A) && (this.ctx.translate(A.offsetX, A.offsetY), this.ctx.transform(A.matrix[0], A.matrix[1], A.matrix[2], A.matrix[3], A.matrix[4], A.matrix[5]), this.ctx.translate(-A.offsetX, -A.offsetY)), Cu(A) && (this.path(A.path), this.ctx.clip()), this._activeEffects.push(A);
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
    t === 0 ? this.ctx.fillText(A.text, A.bounds.left, A.bounds.top + s) : de(A.text).reduce((n, o) => (this.ctx.fillText(o, n, A.bounds.top + s), n + this.ctx.measureText(o).width), A.bounds.left);
  }
  /**
   * Helper method to render text with paint order support
   * Reduces code duplication in line-clamp and normal rendering
   */
  renderTextBoundWithPaintOrder(A, t, s) {
    s.forEach((r) => {
      switch (r) {
        case 0:
          this.ctx.fillStyle = lA(t.color), this.renderTextWithLetterSpacing(A, t.letterSpacing, t.fontSize.number);
          break;
        case 1:
          t.webkitTextStrokeWidth && A.text.trim().length && (this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", this.renderTextWithLetterSpacing(A, t.letterSpacing, t.fontSize.number));
          break;
      }
    });
  }
  renderTextDecoration(A, t) {
    this.ctx.fillStyle = lA(t.textDecorationColor || t.color);
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
        let c = A;
        for (this.ctx.moveTo(c, t + r / 2); c < A + s; ) {
          const u = Math.min(c + a / 2, A + s);
          if (this.ctx.quadraticCurveTo(c + a / 4, t + r / 2 - i, u, t + r / 2), c = u, c < A + s) {
            const l = Math.min(c + a / 2, A + s);
            this.ctx.quadraticCurveTo(c + a / 4, t + r / 2 + i, l, t + r / 2), c = l;
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
      const o = de(A);
      let i = n, a = [];
      for (const c of o) {
        const u = this.ctx.measureText(c).width + s;
        if (i + u > t)
          break;
        a.push(c), i += u;
      }
      return a.join("") + r;
    }
  }
  createFontStyle(A) {
    const t = A.fontVariant.filter((n) => n === "normal" || n === "small-caps").join(""), s = qm(A.fontFamily).join(", "), r = Ce(A.fontSize) ? `${A.fontSize.number}${A.fontSize.unit}` : `${A.fontSize.number}px`;
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
      const l = [];
      let f = [], p = A.textBounds[0].bounds.top;
      A.textBounds.forEach((U) => {
        Math.abs(U.bounds.top - p) >= o * 0.5 ? (f.length > 0 && l.push(f), f = [U], p = U.bounds.top) : f.push(U);
      }), f.length > 0 && l.push(f);
      const b = t.webkitLineClamp;
      if (l.length > b) {
        for (let m = 0; m < b - 1; m++)
          l[m].forEach((_) => {
            this.renderTextBoundWithPaintOrder(_, t, n);
          });
        const U = l[b - 1];
        if (U && U.length > 0 && s) {
          const m = U.map((x) => x.text).join(""), _ = U[0], y = s.width - (_.bounds.left - s.left), w = this.truncateTextWithEllipsis(m, y, t.letterSpacing);
          n.forEach((x) => {
            switch (x) {
              case 0:
                this.ctx.fillStyle = lA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(w, _.bounds.left, _.bounds.top + t.fontSize.number) : de(w).reduce((X, eA) => (this.ctx.fillText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left);
                break;
              case 1:
                t.webkitTextStrokeWidth && w.trim().length && (this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(w, _.bounds.left, _.bounds.top + t.fontSize.number) : de(w).reduce((X, eA) => (this.ctx.strokeText(eA, X, _.bounds.top + t.fontSize.number), X + this.ctx.measureText(eA).width + t.letterSpacing), _.bounds.left));
                break;
            }
          });
        }
        return;
      }
    }
    const a = t.textOverflow === 1 && s && t.overflowX === 1 && A.textBounds.length > 0;
    let c = !1, u = "";
    if (a) {
      const l = A.textBounds[0].bounds.top;
      if (A.textBounds.every((p) => Math.abs(p.bounds.top - l) < o * 0.5)) {
        let p = A.textBounds.map((m) => m.text).join("");
        p = p.replace(/\s+/g, " ").trim();
        const b = this.ctx.measureText(p).width, U = s.width;
        b > U && (c = !0, u = this.truncateTextWithEllipsis(p, U, t.letterSpacing));
      }
    }
    if (c) {
      const l = A.textBounds[0];
      n.forEach((f) => {
        switch (f) {
          case 0:
            this.ctx.fillStyle = lA(t.color), t.letterSpacing === 0 ? this.ctx.fillText(u, l.bounds.left, l.bounds.top + t.fontSize.number) : de(u).reduce((U, m) => (this.ctx.fillText(m, U, l.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), l.bounds.left);
            const p = t.textShadow;
            p.length && u.trim().length && (p.slice(0).reverse().forEach((b) => {
              this.ctx.shadowColor = lA(b.color), this.ctx.shadowOffsetX = b.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = b.offsetY.number * this.options.scale, this.ctx.shadowBlur = b.blur.number, t.letterSpacing === 0 ? this.ctx.fillText(u, l.bounds.left, l.bounds.top + t.fontSize.number) : de(u).reduce((m, _) => (this.ctx.fillText(_, m, l.bounds.top + t.fontSize.number), m + this.ctx.measureText(_).width + t.letterSpacing), l.bounds.left);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0);
            break;
          case 1:
            t.webkitTextStrokeWidth && u.trim().length && (this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round", t.letterSpacing === 0 ? this.ctx.strokeText(u, l.bounds.left, l.bounds.top + t.fontSize.number) : de(u).reduce((U, m) => (this.ctx.strokeText(m, U, l.bounds.top + t.fontSize.number), U + this.ctx.measureText(m).width + t.letterSpacing), l.bounds.left));
            break;
        }
      });
      return;
    }
    A.textBounds.forEach((l) => {
      n.forEach((f) => {
        switch (f) {
          case 0:
            this.ctx.fillStyle = lA(t.color), this.renderTextWithLetterSpacing(l, t.letterSpacing, t.fontSize.number);
            const p = t.textShadow;
            p.length && l.text.trim().length && (p.slice(0).reverse().forEach((b) => {
              this.ctx.shadowColor = lA(b.color), this.ctx.shadowOffsetX = b.offsetX.number * this.options.scale, this.ctx.shadowOffsetY = b.offsetY.number * this.options.scale, this.ctx.shadowBlur = b.blur.number, this.renderTextWithLetterSpacing(l, t.letterSpacing, t.fontSize.number);
            }), this.ctx.shadowColor = "", this.ctx.shadowOffsetX = 0, this.ctx.shadowOffsetY = 0, this.ctx.shadowBlur = 0), t.textDecorationLine.length && this.renderTextDecoration(l.bounds, t);
            break;
          case 1:
            if (t.webkitTextStrokeWidth && l.text.trim().length) {
              this.ctx.strokeStyle = lA(t.webkitTextStrokeColor), this.ctx.lineWidth = t.webkitTextStrokeWidth, this.ctx.lineJoin = window.chrome ? "miter" : "round";
              const b = t.fontSize.number;
              t.letterSpacing === 0 ? this.ctx.strokeText(l.text, l.bounds.left, l.bounds.top + b) : de(l.text).reduce((m, _) => (this.ctx.strokeText(_, m, l.bounds.top + b), m + this.ctx.measureText(_).width), l.bounds.left);
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
      const o = Fs(A), i = Or(t);
      this.path(i), this.ctx.save(), this.ctx.clip();
      let a = 0, c = 0, u = r, l = n, f = o.left, p = o.top, b = o.width, U = o.height;
      const { objectFit: m } = A.styles, _ = b / U, y = u / l;
      if (m === 2)
        y > _ ? (U = b / y, p += (o.height - U) / 2) : (b = U * y, f += (o.width - b) / 2);
      else if (m === 4)
        y > _ ? (u = l * _, a += (r - u) / 2) : (l = u / _, c += (n - l) / 2);
      else if (m === 8)
        u > b ? (a += (u - b) / 2, u = b) : (f += (b - u) / 2, b = u), l > U ? (c += (l - U) / 2, l = U) : (p += (U - l) / 2, U = l);
      else if (m === 16) {
        const w = y > _ ? b : U * y, x = u > b ? u : b;
        w < x ? y > _ ? (U = b / y, p += (o.height - U) / 2) : (b = U * y, f += (o.width - b) / 2) : (u > b ? (a += (u - b) / 2, u = b) : (f += (b - u) / 2, b = u), l > U ? (c += (l - U) / 2, l = U) : (p += (U - l) / 2, U = l));
      }
      this.ctx.drawImage(s, a, c, u, l, f, p, b, U), this.ctx.restore();
    }
  }
  async renderNodeContent(A) {
    this.applyEffects(A.getEffects(
      4
      /* EffectTarget.CONTENT */
    ));
    const t = A.container, s = A.curves, r = t.styles, n = Fs(t);
    for (const o of t.textNodes)
      await this.renderTextNode(o, r, n);
    if (t instanceof iu)
      try {
        const o = await this.context.cache.match(t.src);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading image ${t.src}`);
      }
    if (t instanceof au && this.renderReplacedElement(t, s, t.canvas), t instanceof lu)
      try {
        const o = await this.context.cache.match(t.svg);
        this.renderReplacedElement(t, s, o);
      } catch {
        this.context.logger.error(`Error loading svg ${t.svg.substring(0, 255)}`);
      }
    if (t instanceof fu && t.tree) {
      const i = await new ci(this.context, {
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
      ]), this.ctx.fillStyle = lA(Ya), this.ctx.fill(), this.ctx.restore()) : t.type === Tr && t.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(t.bounds.left + o / 2, t.bounds.top + o / 2, o / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = lA(Ya), this.ctx.fill(), this.ctx.restore());
    }
    if (Ym(t) && t.value.length) {
      const [o, i, a] = this.createFontStyle(r), { baseline: c } = this.fontMetrics.getMetrics(i, a);
      this.ctx.font = o;
      const u = t instanceof Cs && t.isPlaceholder;
      this.ctx.fillStyle = lA(u ? Am : r.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = zm(t.styles.textAlign);
      const l = Fs(t);
      let f = 0;
      switch (t.styles.textAlign) {
        case 1:
          f += l.width / 2;
          break;
        case 2:
          f += l.width;
          break;
      }
      let p = 0;
      if (t instanceof Cs) {
        const U = q(r.fontSize, 0);
        p = (l.height - U) / 2;
      }
      const b = l.add(f, p, 0, 0);
      this.ctx.save(), this.path([
        new R(l.left, l.top),
        new R(l.left + l.width, l.top),
        new R(l.left + l.width, l.top + l.height),
        new R(l.left, l.top + l.height)
      ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new Qs(t.value, b), r.letterSpacing, c), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
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
          const a = o.url;
          try {
            i = await this.context.cache.match(a), this.ctx.drawImage(i, t.bounds.left - (i.width + 10), t.bounds.top);
          } catch {
            this.context.logger.error(`Error loading list-style-image ${a}`);
          }
        }
      } else if (A.listValue && t.styles.listStyleType !== -1) {
        const [o] = this.createFontStyle(r);
        this.ctx.font = o, this.ctx.fillStyle = lA(r.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right";
        const i = new kA(t.bounds.left, t.bounds.top + q(t.styles.paddingTop, t.bounds.width), t.bounds.width, _a(r.lineHeight, r.fontSize.number) / 2 + 1);
        this.renderTextWithLetterSpacing(new Qs(A.listValue, i), r.letterSpacing, _a(r.lineHeight, r.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left";
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
          const o = isNaN(r.width) || r.width === 0 ? 1 : r.width, i = isNaN(r.height) || r.height === 0 ? 1 : r.height, [a, c, u, l, f] = $n(A, t, [
            o,
            i,
            o / i
          ]), p = this.ctx.createPattern(this.resizeImage(r, l, f), "repeat");
          this.renderRepeat(a, p, c, u);
        }
      } else if (mU(s)) {
        const [r, n, o, i, a] = $n(A, t, [null, null, null]), [c, u, l, f, p] = bU(s.angle, i, a), b = document.createElement("canvas");
        b.width = i, b.height = a;
        const U = b.getContext("2d"), m = U.createLinearGradient(u, f, l, p);
        if (Ha(s.stops, c || 1).forEach((_) => m.addColorStop(_.stop, lA(_.color))), U.fillStyle = m, U.fillRect(0, 0, i, a), i > 0 && a > 0) {
          const _ = this.ctx.createPattern(b, "repeat");
          this.renderRepeat(r, _, n, o);
        }
      } else if (xU(s)) {
        const [r, n, o, i, a] = $n(A, t, [
          null,
          null,
          null
        ]), c = s.position.length === 0 ? [ri] : s.position, u = q(c[0], i), l = q(c[c.length - 1], a);
        let [f, p] = QU(s, u, l, i, a);
        if ((f === 0 || p === 0) && (f = Math.max(f, 0.01), p = Math.max(p, 0.01)), f > 0 && p > 0) {
          const b = this.ctx.createRadialGradient(n + u, o + l, 0, n + u, o + l, f);
          if (Ha(s.stops, f * 2).forEach((U) => b.addColorStop(U.stop, lA(U.color))), this.path(r), this.ctx.fillStyle = b, f !== p) {
            const U = A.bounds.left + 0.5 * A.bounds.width, m = A.bounds.top + 0.5 * A.bounds.height, _ = p / f, y = 1 / _;
            this.ctx.save(), this.ctx.translate(U, m), this.ctx.transform(1, 0, 0, _, 0, 0), this.ctx.translate(-U, -m), this.ctx.fillRect(n, y * (o - m) + m, i, a * y), this.ctx.restore();
          } else
            this.ctx.fill();
        }
      }
      t--;
    }
  }
  async renderSolidBorder(A, t, s) {
    this.path(al(s, t)), this.ctx.fillStyle = lA(A), this.ctx.fill();
  }
  async renderDoubleBorder(A, t, s, r) {
    if (t < 3) {
      await this.renderSolidBorder(A, s, r);
      return;
    }
    const n = Rm(r, s);
    this.path(n), this.ctx.fillStyle = lA(A), this.ctx.fill();
    const o = Om(r, s);
    this.path(o), this.ctx.fill();
  }
  async renderNodeBackgroundAndBorders(A) {
    this.applyEffects(A.getEffects(
      2
      /* EffectTarget.BACKGROUND_BORDERS */
    ));
    const t = A.container.styles, s = !qe(t.backgroundColor) || t.backgroundImage.length, r = [
      { style: t.borderTopStyle, color: t.borderTopColor, width: t.borderTopWidth },
      { style: t.borderRightStyle, color: t.borderRightColor, width: t.borderRightWidth },
      { style: t.borderBottomStyle, color: t.borderBottomColor, width: t.borderBottomWidth },
      { style: t.borderLeftStyle, color: t.borderLeftColor, width: t.borderLeftWidth }
    ], n = jm(It(t.backgroundClip, 0), A.curves);
    (s || t.boxShadow.length) && (this.ctx.save(), this.path(n), this.ctx.clip(), qe(t.backgroundColor) || (this.ctx.fillStyle = lA(t.backgroundColor), this.ctx.fill()), await this.renderBackgroundImage(A.container), this.ctx.restore(), t.boxShadow.slice(0).reverse().forEach((i) => {
      this.ctx.save();
      const a = Rr(A.curves), c = i.inset ? 0 : Wm, u = Km(a, -c + (i.inset ? 1 : -1) * i.spread.number, (i.inset ? 1 : -1) * i.spread.number, i.spread.number * (i.inset ? -2 : 2), i.spread.number * (i.inset ? -2 : 2));
      i.inset ? (this.path(a), this.ctx.clip(), this.mask(u)) : (this.mask(a), this.ctx.clip(), this.path(u)), this.ctx.shadowOffsetX = i.offsetX.number + c, this.ctx.shadowOffsetY = i.offsetY.number, this.ctx.shadowColor = lA(i.color), this.ctx.shadowBlur = i.blur.number, this.ctx.fillStyle = i.inset ? lA(i.color) : "rgba(0,0,0,1)", this.ctx.fill(), this.ctx.restore();
    }));
    let o = 0;
    for (const i of r)
      i.style !== 0 && !qe(i.color) && i.width > 0 && (i.style === 2 ? await this.renderDashedDottedBorder(
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
    const o = Mm(r, s), i = al(r, s);
    n === 2 && (this.path(i), this.ctx.clip());
    let a, c, u, l;
    jA(i[0]) ? (a = i[0].start.x, c = i[0].start.y) : (a = i[0].x, c = i[0].y), jA(i[1]) ? (u = i[1].end.x, l = i[1].end.y) : (u = i[1].x, l = i[1].y);
    let f;
    s === 0 || s === 2 ? f = Math.abs(a - u) : f = Math.abs(c - l), this.ctx.beginPath(), n === 3 ? this.formatPath(o) : this.formatPath(i.slice(0, 2));
    let p = t < 3 ? t * 3 : t * 2, b = t < 3 ? t * 2 : t;
    n === 3 && (p = t, b = t);
    let U = !0;
    if (f <= p * 2)
      U = !1;
    else if (f <= p * 2 + b) {
      const m = f / (2 * p + b);
      p *= m, b *= m;
    } else {
      const m = Math.floor((f + b) / (p + b)), _ = (f - m * p) / (m - 1), y = (f - (m + 1) * p) / m;
      b = y <= 0 || Math.abs(b - _) < Math.abs(b - y) ? _ : y;
    }
    if (U && (n === 3 ? this.ctx.setLineDash([0, p + b]) : this.ctx.setLineDash([p, b])), n === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = t) : this.ctx.lineWidth = t * 2 + 1.1, this.ctx.strokeStyle = lA(A), this.ctx.stroke(), this.ctx.setLineDash([]), n === 2) {
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
    this.options.backgroundColor && (this.ctx.fillStyle = lA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height));
    const t = Dm(A);
    return await this.renderStack(t), this.applyEffects([]), this.canvas;
  }
}
const Ym = (e) => e instanceof du || e instanceof uu ? !0 : e instanceof Cs && e.type !== Tr && e.type !== kr, jm = (e, A) => {
  switch (e) {
    case 0:
      return Rr(A);
    case 2:
      return Sm(A);
    case 1:
    default:
      return Or(A);
  }
}, zm = (e) => {
  switch (e) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, Zm = ["-apple-system", "system-ui"], qm = (e) => /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? e.filter((A) => Zm.indexOf(A) === -1) : e;
class $m extends vu {
  constructor(A, t) {
    super(A, t), this.canvas = t.canvas ? t.canvas : document.createElement("canvas"), this.ctx = this.canvas.getContext("2d"), this.options = t, this.canvas.width = Math.floor(t.width * t.scale), this.canvas.height = Math.floor(t.height * t.scale), this.canvas.style.width = `${t.width}px`, this.canvas.style.height = `${t.height}px`, this.ctx.scale(this.options.scale, this.options.scale), this.ctx.translate(-t.x, -t.y), this.context.logger.debug(`EXPERIMENTAL ForeignObject renderer initialized (${t.width}x${t.height} at ${t.x},${t.y}) with scale ${t.scale}`);
  }
  async render(A) {
    const t = yo(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, A), s = await Ax(t);
    return this.options.backgroundColor && (this.ctx.fillStyle = lA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), this.canvas;
  }
}
const Ax = (e) => new Promise((A, t) => {
  const s = new Image();
  s.onload = () => {
    A(s);
  }, s.onerror = t, s.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(e))}`;
});
class yu {
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
yu.instances = {};
class Bn {
  constructor(A, t) {
    this.windowBounds = t, this.instanceName = `#${Bn.instanceCount++}`, this.logger = new yu({ id: this.instanceName, enabled: A.logging }), this.cache = A.cache ?? new mm(this, A);
  }
}
Bn.instanceCount = 1;
let Eu;
const ex = (e) => {
  Eu = e;
}, Hu = (e, A = {}) => tx(e, A);
Hu.setCspNonce = ex;
typeof window < "u" && Ae.setContext(window);
const tx = async (e, A) => {
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
  }, i = new kA(o.scrollX, o.scrollY, o.windowWidth, o.windowHeight), a = new Bn(n, i), c = A.foreignObjectRendering ?? !1, u = {
    allowTaint: A.allowTaint ?? !1,
    onclone: A.onclone,
    ignoreElements: A.ignoreElements,
    iframeContainer: A.iframeContainer,
    inlineImages: c,
    copyStyles: c,
    cspNonce: Eu
  };
  a.logger.debug(`Starting document clone with size ${i.width}x${i.height} scrolled to ${-i.left},${-i.top}`);
  const l = new sl(a, e, u), f = l.clonedReferenceElement;
  if (!f)
    return Promise.reject("Unable to find element in cloned iframe");
  const p = await l.toIFrame(t, i), { width: b, height: U, left: m, top: _ } = li(f) || im(f) ? Sb(f.ownerDocument) : An(a, f), y = sx(a, f, A.backgroundColor), w = {
    canvas: A.canvas,
    backgroundColor: y,
    scale: A.scale ?? s.devicePixelRatio ?? 1,
    x: (A.x ?? 0) + m,
    y: (A.y ?? 0) + _,
    width: A.width ?? Math.ceil(b),
    height: A.height ?? Math.ceil(U)
  };
  let x;
  if (c)
    a.logger.debug("Document cloned, using foreign object rendering"), x = await new $m(a, w).render(f);
  else {
    a.logger.debug(`Document cloned, element located at ${m},${_} with size ${b}x${U} using computed rendering`), a.logger.debug("Starting DOM parsing");
    const L = gu(a, f);
    y === L.styles.backgroundColor && (L.styles.backgroundColor = we.TRANSPARENT), a.logger.debug(`Starting renderer for element at ${w.x},${w.y} with size ${w.width}x${w.height}`), x = await new ci(a, w).render(L);
  }
  return (A.removeContainer ?? !0) && (sl.destroy(p) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), x;
}, sx = (e, A, t) => {
  const s = A.ownerDocument, r = s.documentElement ? Tt(e, getComputedStyle(s.documentElement).backgroundColor) : we.TRANSPARENT, n = s.body ? Tt(e, getComputedStyle(s.body).backgroundColor) : we.TRANSPARENT, o = typeof t == "string" ? Tt(e, t) : t === null ? we.TRANSPARENT : 4294967295;
  return A === s.documentElement ? qe(r) ? qe(n) ? o : n : r : o;
};
async function rx(e = {}) {
  var u;
  const A = window.innerWidth, t = window.innerHeight;
  try {
    (u = e.beforeCapture) == null || u.call(e);
  } catch {
  }
  const s = (() => {
    var l;
    try {
      return (((l = e.canvases) == null ? void 0 : l.call(e)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), r = s.map((l) => {
    try {
      return l.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(s), o = e.ignore || [];
  let i = null;
  try {
    i = await Promise.race([
      Hu(document.body, {
        useCORS: !0,
        allowTaint: !0,
        backgroundColor: null,
        scale: 1,
        width: A,
        height: t,
        ignoreElements: (l) => {
          var f;
          return n.has(l) || l.tagName && l.tagName.toLowerCase().startsWith("devloop-") || (f = e.ignoreElement) != null && f.call(e, l) ? !0 : o.some((p) => {
            var b;
            try {
              return (b = l.matches) == null ? void 0 : b.call(l, p);
            } catch {
              return !1;
            }
          });
        }
      }),
      new Promise((l, f) => setTimeout(() => f(new Error("화면 렌더 시간 초과(15초)")), e.timeoutMs || 15e3))
    ]);
  } catch (l) {
    if (console.warn("[BugReport] 화면 UI 렌더 실패 - 캔버스 배경만 저장:", (l == null ? void 0 : l.message) || l), !r.length) throw l;
  }
  const a = document.createElement("canvas");
  a.width = A, a.height = t;
  const c = a.getContext("2d");
  for (const l of r)
    await new Promise((f) => {
      const p = new Image();
      p.onload = () => {
        c.drawImage(p, 0, 0, A, t), f();
      }, p.onerror = f, p.src = l;
    });
  return i && c.drawImage(i, 0, 0), a.toDataURL("image/png");
}
const yt = (e, A = 2) => String(e).padStart(A, "0");
function re(e = !1) {
  const A = /* @__PURE__ */ new Date(), t = `${yt(A.getHours())}:${yt(A.getMinutes())}:${yt(A.getSeconds())}.${yt(A.getMilliseconds(), 3)}`;
  return e ? `${A.getFullYear()}-${yt(A.getMonth() + 1)}-${yt(A.getDate())} ${t}` : t;
}
function Ot(e) {
  const A = [];
  return { push(t) {
    A.push(t), A.length > e && A.shift();
  }, get: () => [...A] };
}
const nx = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function ox(e) {
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
function ix({ max: e = 200, silent: A = nx } = {}) {
  const t = Ot(e);
  for (const s of ["log", "warn", "error"]) {
    const r = console[s].bind(console);
    console[s] = (...n) => {
      const o = n.map(ox).join(" ");
      A.some((i) => i.test(o)) || (t.push({ level: s, time: re(!0), message: o }), r(...n));
    };
  }
  return window.addEventListener("error", (s) => t.push({ level: "error", time: re(!0), message: `[GlobalError] ${s.message} (${s.filename}:${s.lineno})` })), window.addEventListener("unhandledrejection", (s) => {
    const r = s.reason instanceof Error ? s.reason.message : String(s.reason);
    t.push({ level: "error", time: re(!0), message: `[UnhandledRejection] ${r}` });
  }), t.get;
}
const ax = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, lx = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
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
function Ne(e, A) {
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
  return ax.test(e || "") || lx.test(t) ? "[masked]" : To(A);
}
function cx({ max: e = 50, axios: A = [], fetch: t = !1, xhr: s = !1, ignore: r = [] } = {}) {
  const n = Ot(e), o = Ot(30), i = { push(c) {
    n.push(c), c && (c.error || Number(c.status) >= 400) && o.push(c);
  }, get() {
    const c = n.get(), u = new Set(c);
    return [...o.get().filter((f) => !u.has(f)), ...c].sort((f, p) => String(f.time).localeCompare(String(p.time)));
  } }, a = (c) => r.some((u) => u instanceof RegExp ? u.test(c) : String(c).includes(u));
  for (const c of A) {
    const u = c != null && c.interceptors ? c : c == null ? void 0 : c.instance, l = (c == null ? void 0 : c.label) || "axios";
    u != null && u.interceptors && (u.interceptors.request.use((f) => (f._bk = { t0: Date.now(), time: re(!0) }, f), (f) => Promise.reject(f)), u.interceptors.response.use((f) => {
      var b;
      const p = f.config._bk || {};
      return a(f.config.url) || i.push({ server: l, time: p.time, duration: p.t0 ? Date.now() - p.t0 : null, method: (b = f.config.method) == null ? void 0 : b.toUpperCase(), url: f.config.url, params: To(f.config.params), requestBody: Ne(f.config.url, f.config.data), status: f.status, responseBody: Ne(f.config.url, f.data), error: null }), f;
    }, (f) => {
      var b, U, m, _, y, w, x, L, X, eA, UA;
      const p = ((b = f.config) == null ? void 0 : b._bk) || {};
      return a((U = f.config) == null ? void 0 : U.url) || i.push({ server: l, time: p.time, duration: p.t0 ? Date.now() - p.t0 : null, method: (_ = (m = f.config) == null ? void 0 : m.method) == null ? void 0 : _.toUpperCase(), url: (y = f.config) == null ? void 0 : y.url, params: To((w = f.config) == null ? void 0 : w.params), requestBody: Ne((x = f.config) == null ? void 0 : x.url, (L = f.config) == null ? void 0 : L.data), status: ((X = f.response) == null ? void 0 : X.status) ?? "ERR", responseBody: Ne((eA = f.config) == null ? void 0 : eA.url, (UA = f.response) == null ? void 0 : UA.data), error: f.message }), Promise.reject(f);
    }));
  }
  if (t && window.fetch) {
    const c = window.fetch.bind(window);
    window.fetch = async (u, l = {}) => {
      const f = typeof u == "string" ? u : u == null ? void 0 : u.url, p = Date.now(), b = re(!0), U = (l.method || typeof u != "string" && (u == null ? void 0 : u.method) || "GET").toUpperCase();
      try {
        const m = await c(u, l);
        return a(f) || i.push({ server: "fetch", time: b, duration: Date.now() - p, method: U, url: f, params: null, requestBody: Ne(f, l.body), status: m.status, responseBody: null, error: null }), m;
      } catch (m) {
        throw a(f) || i.push({ server: "fetch", time: b, duration: Date.now() - p, method: U, url: f, params: null, requestBody: Ne(f, l.body), status: "ERR", responseBody: null, error: m.message }), m;
      }
    };
  }
  if (s && window.XMLHttpRequest) {
    const c = XMLHttpRequest.prototype, u = c.open, l = c.send;
    c.open = function(f, p, ...b) {
      return this._bk = { method: String(f).toUpperCase(), url: p }, u.call(this, f, p, ...b);
    }, c.send = function(f) {
      const p = this._bk || {}, b = Date.now(), U = re(!0);
      return this.addEventListener("loadend", () => {
        a(p.url) || i.push({ server: "xhr", time: U, duration: Date.now() - b, method: p.method, url: p.url, params: null, requestBody: Ne(p.url, f), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Ne(p.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), l.call(this, f);
    };
  }
  return i.get;
}
function ux(e) {
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
function dx(e, { max: A = 100 } = {}) {
  const t = Ot(A);
  return e.subscribe((s) => t.push({ time: re(), type: s.type, payload: ux(s.payload) })), t.get;
}
function fx(e, { max: A = 20 } = {}) {
  const t = Ot(A);
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
function Bx(e, { max: A = 80, skip: t = [] } = {}) {
  const s = Ot(A), r = new Set(t), n = e.emit.bind(e);
  return e.emit = (o, i) => (r.has(o) || s.push({ time: re(), type: o }), n(o, i)), s.get;
}
function bx() {
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
function Qx(e) {
  return {
    subscribe: (A) => e.subscribe((t, s) => {
      const r = Object.keys(t).filter((n) => t[n] !== (s == null ? void 0 : s[n]));
      A({ type: `set(${r.join(",") || "?"})`, payload: Object.fromEntries(r.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function gx(e) {
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
      const c = localStorage.key(a);
      if (i.some((l) => c.toLowerCase().includes(l))) continue;
      const u = localStorage.getItem(c);
      s[c] = u && u.length > 200 ? u.slice(0, 200) + "…" : u;
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
const qt = () => [];
function hx(e = {}) {
  var u;
  const A = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...e }, t = A.interceptors || {}, s = t.console === !1 ? qt : ix(t.console === !0 ? {} : t.console), r = t.network ? cx(t.network) : qt, n = t.mutation ? dx(t.mutation) : qt, o = t.router ? fx(t.router === !0 ? null : t.router) : qt, i = t.events ? Bx(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : qt, a = ((u = A.projects) != null && u.length ? A.projects : [{ key: A.project, label: A.project }]).map((l) => typeof l == "string" ? { key: l, label: l } : l), c = {
    options: A,
    projects: a,
    project: a[0].key,
    api: _n({ ...A, project: a[0].key, apiKey: a[0].apiKey ?? A.apiKey, adminKey: A.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const l of a)
        if (!c._info[l.key])
          try {
            c._info[l.key] = await _n({ ...A, project: l.key, apiKey: l.apiKey ?? A.apiKey, adminKey: A.adminKey }).info();
          } catch {
            c._info[l.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(l) {
      const f = a.find((p) => p.key === l);
      f && (c.project = f.key, c.api = _n({ ...A, project: f.key, apiKey: f.apiKey ?? A.apiKey, adminKey: A.adminKey }));
    },
    getLogs: s,
    getNetwork: r,
    getMutations: n,
    getRoutes: o,
    getEvents: i,
    captureScreen: (l = {}) => {
      var f;
      return rx({ ...A.capture || {}, ...l, ignore: [...((f = A.capture) == null ? void 0 : f.ignore) || [], ...l.ignore || []] });
    },
    captureContext: () => gx(c),
    fetchBackendLogs: async () => A.backendLogs ? await A.backendLogs() : null,
    notify: (l) => {
      A.notify ? A.notify(l) : c._listeners.forEach((f) => f(l));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(l) {
      return c._listeners.add(l), () => c._listeners.delete(l);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (c._els.modal) return c;
      const l = document.createElement("devloop-report-modal"), f = document.createElement("devloop-viewer");
      return l.kit = c, f.kit = c, document.body.append(l, f), c._els = { modal: l, viewer: f }, c;
    },
    openReport: () => {
      var l, f, p, b;
      return ((f = (l = c._els.modal) == null ? void 0 : l.open) == null ? void 0 : f.call(l)) ?? ((b = (p = c._open) == null ? void 0 : p.report) == null ? void 0 : b.call(p));
    },
    openViewer: (l) => {
      var f, p, b, U;
      return ((p = (f = c._els.viewer) == null ? void 0 : f.open) == null ? void 0 : p.call(f, l)) ?? ((U = (b = c._open) == null ? void 0 : b.viewer) == null ? void 0 : U.call(b, l));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(l, f) {
      c._open[l] = f;
    }
  };
  if (A.hotkeys) {
    const l = (f, p) => {
      if (!p) return !1;
      const b = p.split("+").map((m) => m.trim().toLowerCase()), U = b.pop();
      return f.key.toLowerCase() === U && b.includes("shift") === f.shiftKey && b.includes("ctrl") === f.ctrlKey && b.includes("alt") === f.altKey && b.includes("meta") === f.metaKey;
    };
    window.addEventListener("keydown", (f) => {
      l(f, A.hotkeys.report) ? (f.preventDefault(), c.openReport()) : l(f, A.hotkeys.viewer) && (f.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function px() {
  customElements.get("devloop-report-modal") || customElements.define("devloop-report-modal", /* @__PURE__ */ ji(np)), customElements.get("devloop-viewer") || customElements.define("devloop-viewer", /* @__PURE__ */ ji(_b));
}
px();
function Cx(e = {}) {
  if (typeof window > "u") return null;
  if (window.devloopKit) return window.devloopKit;
  const A = () => window.__devloop || {}, t = e.restBase ? String(e.restBase).replace(/\/+$/, "") : "", s = hx({
    endpoint: e.endpoint || "/devloop",
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
    // 백엔드 어댑터(devloop-adapter)의 최근 로그 끝점 - REST 경로를 알 때만
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
  return window.devloopKit = s, s;
}
export {
  Cx as autoMount,
  hx as createDevloop,
  bx as reduxMiddleware,
  Qx as zustandSource
};
