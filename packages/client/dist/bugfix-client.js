/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
// @__NO_SIDE_EFFECTS__
function hi(A) {
  const e = /* @__PURE__ */ Object.create(null);
  for (const t of A.split(",")) e[t] = 1;
  return (t) => t in e;
}
const BA = {}, ft = [], Fe = () => {
}, _a = () => !1, Hs = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), Is = (A) => A.startsWith("onUpdate:"), vA = Object.assign, pi = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, Pc = Object.prototype.hasOwnProperty, rA = (A, e) => Pc.call(A, e), J = Array.isArray, $e = (A) => Fr(A) === "[object Map]", St = (A) => Fr(A) === "[object Set]", Ji = (A) => Fr(A) === "[object Date]", j = (A) => typeof A == "function", pA = (A) => typeof A == "string", me = (A) => typeof A == "symbol", fA = (A) => A !== null && typeof A == "object", La = (A) => (fA(A) || j(A)) && j(A.then) && j(A.catch), Sa = Object.prototype.toString, Fr = (A) => Sa.call(A), Jc = (A) => Fr(A).slice(8, -1), _s = (A) => Fr(A) === "[object Object]", wi = (A) => pA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, rr = /* @__PURE__ */ hi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ls = (A) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = A(t));
}, Xc = /-\w/g, _A = Ls(
  (A) => A.replace(Xc, (e) => e.slice(1).toUpperCase())
), Wc = /\B([A-Z])/g, zA = Ls(
  (A) => A.replace(Wc, "-$1").toLowerCase()
), Ss = Ls((A) => A.charAt(0).toUpperCase() + A.slice(1)), An = Ls(
  (A) => A ? `on${Ss(A)}` : ""
), Te = (A, e) => !Object.is(A, e), rs = (A, ...e) => {
  for (let t = 0; t < A.length; t++)
    A[t](...e);
}, Ka = (A, e, t, r = !1) => {
  Object.defineProperty(A, e, {
    configurable: !0,
    enumerable: !1,
    writable: r,
    value: t
  });
}, Qi = (A) => {
  const e = parseFloat(A);
  return isNaN(e) ? A : e;
}, Xi = (A) => {
  const e = pA(A) ? Number(A) : NaN;
  return isNaN(e) ? A : e;
};
let Wi;
const Ks = () => Wi || (Wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function Ts(A) {
  if (J(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++) {
      const r = A[t], s = pA(r) ? zc(r) : Ts(r);
      if (s)
        for (const n in s)
          e[n] = s[n];
    }
    return e;
  } else if (pA(A) || fA(A))
    return A;
}
const Yc = /;(?![^(]*\))/g, jc = /:([^]+)/, Zc = /"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;
function zc(A) {
  const e = {};
  return A.replace(Zc, (t) => t.startsWith("/*") ? "" : t).split(Yc).forEach((t) => {
    if (t) {
      const r = t.split(jc);
      r.length > 1 && (e[r[0].trim()] = r[1].trim());
    }
  }), e;
}
function $(A) {
  let e = "";
  if (pA(A))
    e = A;
  else if (J(A))
    for (let t = 0; t < A.length; t++) {
      const r = $(A[t]);
      r && (e += r + " ");
    }
  else if (fA(A))
    for (const t in A)
      A[t] && (e += t + " ");
  return e.trim();
}
const qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $c = /* @__PURE__ */ hi(qc);
function Ta(A) {
  return !!A || A === "";
}
function Af(A, e, t) {
  if (A.length !== e.length) return !1;
  let r = !0;
  for (let s = 0; r && s < A.length; s++)
    r = Dt(A[s], e[s], t);
  return r;
}
function Yi(A, e, t) {
  if (A.size !== e.size) return !1;
  const r = Array.from(e), s = new Uint8Array(r.length);
  for (const n of A) {
    let i = -1;
    for (let o = 0; o < r.length; o++)
      if (!s[o] && Dt(n, r[o], t)) {
        i = o;
        break;
      }
    if (i < 0) return !1;
    s[i] = 1;
  }
  return !0;
}
function ef(A, e, t) {
  let r = $e(A), s = $e(e);
  if (r || s || (r = St(A), s = St(e), r || s))
    return r && s ? Yi(A, e, t) : !1;
  const n = Object.keys(A).length, i = Object.keys(e).length;
  if (n !== i)
    return !1;
  for (const o in A) {
    const a = A.hasOwnProperty(o), c = e.hasOwnProperty(o);
    if (a && !c || !a && c || !Dt(A[o], e[o], t))
      return !1;
  }
  return String(A) === String(e);
}
function ji(A, e, t, r) {
  t || (t = [/* @__PURE__ */ new Map(), /* @__PURE__ */ new Map()]);
  const [s, n] = t;
  if (s.has(A) || n.has(e))
    return s.get(A) === e && n.get(e) === A;
  s.set(A, e), n.set(e, A);
  const i = r(A, e, t);
  return s.delete(A), n.delete(e), i;
}
function Dt(A, e, t) {
  if (A === e) return !0;
  let r = Ji(A), s = Ji(e);
  return r || s ? r && s ? A.getTime() === e.getTime() : !1 : (r = me(A), s = me(e), r || s ? A === e : (r = J(A), s = J(e), r || s ? r && s ? ji(A, e, t, Af) : !1 : (r = fA(A), s = fA(e), r || s ? !r || !s ? !1 : ji(A, e, t, ef) : String(A) === String(e))));
}
function Da(A, e) {
  return A.findIndex((t) => Dt(t, e));
}
const ka = (A) => !!(A && A.__v_isRef === !0), C = (A) => pA(A) ? A : A == null ? "" : J(A) || fA(A) && (A.toString === Sa || !j(A.toString)) ? ka(A) ? C(A.value) : JSON.stringify(A, Oa, 2) : String(A), Oa = (A, e) => ka(e) ? Oa(A, e.value) : $e(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [r, s], n) => (t[en(r, n) + " =>"] = s, t),
    {}
  )
} : St(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => en(t))
} : me(e) ? en(e) : fA(e) && !J(e) && !_s(e) ? String(e) : e, en = (A, e = "") => {
  var t;
  return (
    // Symbol.description in es2019+ so we need to cast here to pass
    // the lib: es2016 check
    me(A) ? `Symbol(${(t = A.description) != null ? t : e})` : A
  );
};
/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let SA;
class tf {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e = !1) {
    this.detached = e, this._active = !0, this._on = 0, this.effects = [], this.cleanups = [], this._isPaused = !1, this._warnOnRun = !0, this.__v_skip = !0, !e && SA && (SA.active ? (this.parent = SA, this.index = (SA.scopes || (SA.scopes = [])).push(
      this
    ) - 1) : (this._active = !1, this._warnOnRun = !1));
  }
  get active() {
    return this._active;
  }
  pause() {
    if (this._active) {
      this._isPaused = !0;
      let e, t;
      if (this.scopes) {
        const r = this.scopes.slice();
        for (e = 0, t = r.length; e < t; e++)
          r[e].pause();
      }
      for (e = 0, t = this.effects.length; e < t; e++)
        this.effects[e].pause();
    }
  }
  /**
   * Resumes the effect scope, including all child scopes and effects.
   */
  resume() {
    if (this._active && this._isPaused) {
      this._isPaused = !1;
      let e, t;
      if (this.scopes) {
        const s = this.scopes.slice();
        for (e = 0, t = s.length; e < t; e++)
          s[e].resume();
      }
      const r = this.effects.slice();
      for (e = 0, t = r.length; e < t; e++)
        r[e].resume();
    }
  }
  run(e) {
    if (this._active) {
      const t = SA;
      try {
        return SA = this, e();
      } finally {
        SA = t;
      }
    }
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  on() {
    ++this._on === 1 && (this.prevScope = SA, SA = this);
  }
  /**
   * This should only be called on non-detached scopes
   * @internal
   */
  off() {
    if (this._on > 0 && --this._on === 0) {
      if (SA === this)
        SA = this.prevScope;
      else {
        let e = SA;
        for (; e; ) {
          if (e.prevScope === this) {
            e.prevScope = this.prevScope;
            break;
          }
          e = e.prevScope;
        }
      }
      this.prevScope = void 0;
    }
  }
  stop(e) {
    if (this._active) {
      this._active = !1;
      let t, r;
      for (t = 0, r = this.effects.length; t < r; t++)
        this.effects[t].stop();
      for (this.effects.length = 0, t = 0, r = this.cleanups.length; t < r; t++)
        this.cleanups[t]();
      if (this.cleanups.length = 0, this.scopes) {
        const s = this.scopes.slice();
        for (t = 0, r = s.length; t < r; t++)
          s[t].stop(!0);
        this.scopes.length = 0;
      }
      if (!this.detached && this.parent && !e) {
        const s = this.parent.scopes.pop();
        s && s !== this && (this.parent.scopes[this.index] = s, s.index = this.index);
      }
      this.parent = void 0;
    }
  }
}
function rf() {
  return SA;
}
let dA;
const tn = /* @__PURE__ */ new WeakSet();
class Ra {
  constructor(e) {
    this.fn = e, this.deps = void 0, this.depsTail = void 0, this.flags = 5, this.next = void 0, this.cleanup = void 0, this.scheduler = void 0, SA && (SA.active ? SA.effects.push(this) : this.flags &= -2);
  }
  pause() {
    this.flags |= 64;
  }
  resume() {
    this.flags & 64 && (this.flags &= -65, tn.has(this) && (tn.delete(this), this.trigger()));
  }
  /**
   * @internal
   */
  notify() {
    this.flags & 2 && !(this.flags & 32) || this.flags & 8 || Na(this);
  }
  run() {
    if (!(this.flags & 1))
      return this.fn();
    this.flags |= 2, Zi(this), Va(this);
    const e = dA, t = le;
    dA = this, le = !0;
    try {
      return this.fn();
    } finally {
      Ga(this), dA = e, le = t, this.flags &= -3;
    }
  }
  stop() {
    if (this.flags & 1) {
      for (let e = this.deps; e; e = e.nextDep)
        Ui(e);
      this.deps = this.depsTail = void 0, Zi(this), this.onStop && this.onStop(), this.flags &= -2;
    }
  }
  trigger() {
    this.flags & 64 ? tn.add(this) : this.scheduler ? this.scheduler() : this.runIfDirty();
  }
  /**
   * @internal
   */
  runIfDirty() {
    Dn(this) && this.run();
  }
  get dirty() {
    return Dn(this);
  }
}
let Ma = 0, sr, nr;
function Na(A, e = !1) {
  if (A.flags |= 8, e) {
    A.next = nr, nr = A;
    return;
  }
  A.next = sr, sr = A;
}
function Ci() {
  Ma++;
}
function vi() {
  if (--Ma > 0)
    return;
  if (nr) {
    let e = nr;
    for (nr = void 0; e; ) {
      const t = e.next;
      e.next = void 0, e.flags &= -9, e = t;
    }
  }
  let A;
  for (; sr; ) {
    let e = sr;
    for (sr = void 0; e; ) {
      const t = e.next;
      if (e.next = void 0, e.flags &= -9, e.flags & 1)
        try {
          e.trigger();
        } catch (r) {
          A || (A = r);
        }
      e = t;
    }
  }
  if (A) throw A;
}
function Va(A) {
  for (let e = A.deps; e; e = e.nextDep)
    e.version = -1, e.prevActiveLink = e.dep.activeLink, e.dep.activeLink = e;
}
function Ga(A) {
  let e, t = A.depsTail, r = t;
  for (; r; ) {
    const s = r.prevDep;
    r.version === -1 ? (r === t && (t = s), Ui(r), sf(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
  }
  A.deps = e, A.depsTail = t;
}
function Dn(A) {
  for (let e = A.deps; e; e = e.nextDep)
    if (e.dep.version !== e.version || e.dep.computed && (Pa(e.dep.computed) || e.dep.version !== e.version))
      return !0;
  return !!A._dirty;
}
function Pa(A) {
  if (A.flags & 4 && !(A.flags & 16) || (A.flags &= -17, A.globalVersion === dr) || (A.globalVersion = dr, !A.isSSR && A.flags & 128 && (!A.deps && !A._dirty || !Dn(A))))
    return;
  A.flags |= 2;
  const e = A.dep, t = dA, r = le;
  dA = A, le = !0;
  try {
    Va(A);
    const s = A.fn(A._value);
    (e.version === 0 || Te(s, A._value)) && (A.flags |= 128, A._value = s, e.version++);
  } catch (s) {
    throw e.version++, s;
  } finally {
    dA = t, le = r, Ga(A), A.flags &= -3;
  }
}
function Ui(A, e = !1) {
  const { dep: t, prevSub: r, nextSub: s } = A;
  if (r && (r.nextSub = s, A.prevSub = void 0), s && (s.prevSub = r, A.nextSub = void 0), t.subs === A && (t.subs = r, !r && t.computed)) {
    t.computed.flags &= -5;
    for (let n = t.computed.deps; n; n = n.nextDep)
      Ui(n, !0);
  }
  !e && !--t.sc && t.map && t.map.delete(t.key);
}
function sf(A) {
  const { prevDep: e, nextDep: t } = A;
  e && (e.nextDep = t, A.prevDep = void 0), t && (t.prevDep = e, A.nextDep = void 0);
}
let le = !0;
const Ja = [];
function Re() {
  Ja.push(le), le = !1;
}
function Me() {
  const A = Ja.pop();
  le = A === void 0 ? !0 : A;
}
function Zi(A) {
  const { cleanup: e } = A;
  if (A.cleanup = void 0, e) {
    const t = dA;
    dA = void 0;
    try {
      e();
    } finally {
      dA = t;
    }
  }
}
let dr = 0;
class nf {
  constructor(e, t) {
    this.sub = e, this.dep = t, this.version = t.version, this.nextDep = this.prevDep = this.nextSub = this.prevSub = this.prevActiveLink = void 0;
  }
}
class Xa {
  // TODO isolatedDeclarations "__v_skip"
  constructor(e) {
    this.computed = e, this.version = 0, this.activeLink = void 0, this.subs = void 0, this.map = void 0, this.key = void 0, this.sc = 0, this.__v_skip = !0;
  }
  track(e) {
    if (!dA || !le || dA === this.computed)
      return;
    let t = this.activeLink;
    if (t === void 0 || t.sub !== dA)
      t = this.activeLink = new nf(dA, this), dA.deps ? (t.prevDep = dA.depsTail, dA.depsTail.nextDep = t, dA.depsTail = t) : dA.deps = dA.depsTail = t, Wa(t);
    else if (t.version === -1 && (t.version = this.version, t.nextDep)) {
      const r = t.nextDep;
      r.prevDep = t.prevDep, t.prevDep && (t.prevDep.nextDep = r), t.prevDep = dA.depsTail, t.nextDep = void 0, dA.depsTail.nextDep = t, dA.depsTail = t, dA.deps === t && (dA.deps = r);
    }
    return t;
  }
  trigger(e) {
    this.version++, dr++, this.notify(e);
  }
  notify(e) {
    Ci();
    try {
      for (let t = this.subs; t; t = t.prevSub)
        t.sub.notify() && t.sub.dep.notify();
    } finally {
      vi();
    }
  }
}
function Wa(A) {
  if (A.dep.sc++, A.sub.flags & 4) {
    const e = A.dep.computed;
    if (e && !A.dep.subs) {
      e.flags |= 20;
      for (let r = e.deps; r; r = r.nextDep)
        Wa(r);
    }
    const t = A.dep.subs;
    t !== A && (A.prevSub = t, t && (t.nextSub = A)), A.dep.subs = A;
  }
}
const kn = /* @__PURE__ */ new WeakMap(), dt = /* @__PURE__ */ Symbol(
  ""
), On = /* @__PURE__ */ Symbol(
  ""
), gr = /* @__PURE__ */ Symbol(
  ""
);
function OA(A, e, t) {
  if (le && dA) {
    let r = kn.get(A);
    r || kn.set(A, r = /* @__PURE__ */ new Map());
    let s = r.get(t);
    s || (r.set(t, s = new Xa()), s.map = r, s.key = t), s.track();
  }
}
function De(A, e, t, r, s, n) {
  const i = kn.get(A);
  if (!i) {
    dr++;
    return;
  }
  const o = (a) => {
    a && a.trigger();
  };
  if (Ci(), e === "clear")
    i.forEach(o);
  else {
    const a = J(A), c = a && wi(t);
    if (a && t === "length") {
      const l = Number(r);
      i.forEach((f, B) => {
        (B === "length" || B === gr || !me(B) && B >= l) && o(f);
      });
    } else
      switch ((t !== void 0 || i.has(void 0)) && o(i.get(t)), c && o(i.get(gr)), e) {
        case "add":
          a ? c && o(i.get("length")) : (o(i.get(dt)), $e(A) && o(i.get(On)));
          break;
        case "delete":
          a || (o(i.get(dt)), $e(A) && o(i.get(On)));
          break;
        case "set":
          $e(A) && o(i.get(dt));
          break;
      }
  }
  vi();
}
function wt(A) {
  const e = /* @__PURE__ */ aA(A);
  return e === A || (OA(e, "iterate", gr), /* @__PURE__ */ ce(A)) ? e : /* @__PURE__ */ Ne(A) ? /* @__PURE__ */ At(A) ? e.map((t) => rt(xe(t))) : e.map(rt) : e.map(xe);
}
function Ds(A) {
  return OA(A = /* @__PURE__ */ aA(A), "iterate", gr), A;
}
function ve(A, e) {
  return /* @__PURE__ */ Ne(A) ? rt(/* @__PURE__ */ At(A) ? xe(e) : e) : xe(e);
}
const of = {
  __proto__: null,
  [Symbol.iterator]() {
    return rn(this, Symbol.iterator, (A) => ve(this, A));
  },
  concat(...A) {
    return wt(this).concat(
      ...A.map((e) => J(e) ? wt(e) : e)
    );
  },
  entries() {
    return rn(this, "entries", (A) => (A[1] = ve(this, A[1]), A));
  },
  every(A, e) {
    return Ie(this, "every", A, e, void 0, arguments);
  },
  filter(A, e) {
    return Ie(
      this,
      "filter",
      A,
      e,
      (t) => t.map((r) => ve(this, r)),
      arguments
    );
  },
  find(A, e) {
    return Ie(
      this,
      "find",
      A,
      e,
      (t) => ve(this, t),
      arguments
    );
  },
  findIndex(A, e) {
    return Ie(this, "findIndex", A, e, void 0, arguments);
  },
  findLast(A, e) {
    return Ie(
      this,
      "findLast",
      A,
      e,
      (t) => ve(this, t),
      arguments
    );
  },
  findLastIndex(A, e) {
    return Ie(this, "findLastIndex", A, e, void 0, arguments);
  },
  // flat, flatMap could benefit from ARRAY_ITERATE but are not straight-forward to implement
  forEach(A, e) {
    return Ie(this, "forEach", A, e, void 0, arguments);
  },
  includes(...A) {
    return sn(this, "includes", A);
  },
  indexOf(...A) {
    return sn(this, "indexOf", A);
  },
  join(A) {
    return wt(this).join(A);
  },
  // keys() iterator only reads `length`, no optimization required
  lastIndexOf(...A) {
    return sn(this, "lastIndexOf", A);
  },
  map(A, e) {
    return Ie(this, "map", A, e, void 0, arguments);
  },
  pop() {
    return Mt(this, "pop");
  },
  push(...A) {
    return Mt(this, "push", A);
  },
  reduce(A, ...e) {
    return zi(this, "reduce", A, e);
  },
  reduceRight(A, ...e) {
    return zi(this, "reduceRight", A, e);
  },
  shift() {
    return Mt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(A, e) {
    return Ie(this, "some", A, e, void 0, arguments);
  },
  splice(...A) {
    return Mt(this, "splice", A);
  },
  toReversed() {
    return wt(this).toReversed();
  },
  toSorted(A) {
    return wt(this).toSorted(A);
  },
  toSpliced(...A) {
    return wt(this).toSpliced(...A);
  },
  unshift(...A) {
    return Mt(this, "unshift", A);
  },
  values() {
    return rn(this, "values", (A) => ve(this, A));
  }
};
function rn(A, e, t) {
  const r = Ds(A), s = r[e]();
  return r !== A && !/* @__PURE__ */ ce(A) && (s._next = s.next, s.next = () => {
    const n = s._next();
    return n.done || (n.value = t(n.value)), n;
  }), s;
}
const af = Array.prototype;
function Ie(A, e, t, r, s, n) {
  const i = Ds(A), o = i !== A && !/* @__PURE__ */ ce(A), a = i[e];
  if (a !== af[e]) {
    const f = a.apply(A, n);
    return o ? xe(f) : f;
  }
  let c = t;
  i !== A && (o ? c = function(f, B) {
    return t.call(this, ve(A, f), B, A);
  } : t.length > 2 && (c = function(f, B) {
    return t.call(this, f, B, A);
  }));
  const l = a.call(i, c, r);
  return o && s ? s(l) : l;
}
function zi(A, e, t, r) {
  const s = Ds(A), n = s !== A && !/* @__PURE__ */ ce(A);
  let i = t, o = !1;
  s !== A && (n ? (o = r.length === 0, i = function(c, l, f) {
    return o && (o = !1, c = ve(A, c)), t.call(this, c, ve(A, l), f, A);
  }) : t.length > 3 && (i = function(c, l, f) {
    return t.call(this, c, l, f, A);
  }));
  const a = s[e](i, ...r);
  return o ? ve(A, a) : a;
}
function sn(A, e, t) {
  const r = /* @__PURE__ */ aA(A);
  OA(r, "iterate", gr);
  const s = r[e](...t);
  return (s === -1 || s === !1) && /* @__PURE__ */ xi(t[0]) ? (t[0] = /* @__PURE__ */ aA(t[0]), r[e](...t)) : s;
}
function Mt(A, e, t = []) {
  Re(), Ci();
  const r = (/* @__PURE__ */ aA(A))[e].apply(A, t);
  return vi(), Me(), r;
}
const lf = /* @__PURE__ */ hi("__proto__,__v_isRef,__isVue"), Ya = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(me)
);
function cf(A) {
  me(A) || (A = String(A));
  const e = /* @__PURE__ */ aA(this);
  return OA(e, "has", A), e.hasOwnProperty(A);
}
class ja {
  constructor(e = !1, t = !1) {
    this._isReadonly = e, this._isShallow = t;
  }
  get(e, t, r) {
    if (t === "__v_skip") return e.__v_skip;
    const s = this._isReadonly, n = this._isShallow;
    if (t === "__v_isReactive")
      return !s;
    if (t === "__v_isReadonly")
      return s;
    if (t === "__v_isShallow")
      return n;
    if (t === "__v_raw")
      return r === (s ? n ? Cf : $a : n ? qa : za).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const i = J(e);
    if (!s) {
      let a;
      if (i && (a = of[t]))
        return a;
      if (t === "hasOwnProperty")
        return cf;
    }
    const o = Reflect.get(
      e,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ JA(e) ? e : r
    );
    if ((me(t) ? Ya.has(t) : lf(t)) || (s || OA(e, "get", t), n))
      return o;
    if (/* @__PURE__ */ JA(o)) {
      const a = i && wi(t) ? o : o.value;
      return s && fA(a) ? /* @__PURE__ */ Mn(a) : a;
    }
    return fA(o) ? s ? /* @__PURE__ */ Mn(o) : /* @__PURE__ */ bi(o) : o;
  }
}
class Za extends ja {
  constructor(e = !1) {
    super(!1, e);
  }
  set(e, t, r, s) {
    let n = e[t];
    const i = J(e) && wi(t);
    if (!this._isShallow) {
      const c = /* @__PURE__ */ Ne(n);
      if (!/* @__PURE__ */ ce(r) && !/* @__PURE__ */ Ne(r) && (n = /* @__PURE__ */ aA(n), r = /* @__PURE__ */ aA(r)), !i && /* @__PURE__ */ JA(n) && !/* @__PURE__ */ JA(r))
        return c || (n.value = r), !0;
    }
    const o = i ? Number(t) < e.length : rA(e, t), a = Reflect.set(
      e,
      t,
      r,
      /* @__PURE__ */ JA(e) ? e : s
    );
    return e === /* @__PURE__ */ aA(s) && a && (o ? Te(r, n) && De(e, "set", t, r) : De(e, "add", t, r)), a;
  }
  deleteProperty(e, t) {
    const r = rA(e, t);
    e[t];
    const s = Reflect.deleteProperty(e, t);
    return s && r && De(e, "delete", t, void 0), s;
  }
  has(e, t) {
    const r = Reflect.has(e, t);
    return (!me(t) || !Ya.has(t)) && OA(e, "has", t), r;
  }
  ownKeys(e) {
    return OA(
      e,
      "iterate",
      J(e) ? "length" : dt
    ), Reflect.ownKeys(e);
  }
}
class ff extends ja {
  constructor(e = !1) {
    super(!0, e);
  }
  set(e, t) {
    return !0;
  }
  deleteProperty(e, t) {
    return !0;
  }
}
const uf = /* @__PURE__ */ new Za(), Bf = /* @__PURE__ */ new ff(), df = /* @__PURE__ */ new Za(!0);
const Rn = (A) => A, Hr = (A) => Reflect.getPrototypeOf(A);
function gf(A, e, t) {
  return function(...r) {
    const s = this.__v_raw, n = /* @__PURE__ */ aA(s), i = $e(n), o = A === "entries" || A === Symbol.iterator && i, a = A === "keys" && i, c = s[A](...r), l = t ? Rn : e ? rt : xe;
    return !e && OA(
      n,
      "iterate",
      a ? On : dt
    ), vA(
      // inheriting all iterator properties
      Object.create(c),
      {
        // iterator protocol
        next() {
          const { value: f, done: B } = c.next();
          return B ? { value: f, done: B } : {
            value: o ? [l(f[0]), l(f[1])] : l(f),
            done: B
          };
        }
      }
    );
  };
}
function Ir(A) {
  return function(...e) {
    return A === "delete" ? !1 : A === "clear" ? void 0 : this;
  };
}
function hf(A, e) {
  const t = {
    get(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ aA(n), o = /* @__PURE__ */ aA(s);
      A || (Te(s, o) && OA(i, "get", s), OA(i, "get", o));
      const { has: a } = Hr(i), c = e ? Rn : A ? rt : xe;
      if (a.call(i, s))
        return c(n.get(s));
      if (a.call(i, o))
        return c(n.get(o));
      n !== i && n.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !A && OA(/* @__PURE__ */ aA(s), "iterate", dt), s.size;
    },
    has(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ aA(n), o = /* @__PURE__ */ aA(s);
      return A || (Te(s, o) && OA(i, "has", s), OA(i, "has", o)), s === o ? n.has(s) : n.has(s) || n.has(o);
    },
    forEach(s, n) {
      const i = this, o = i.__v_raw, a = /* @__PURE__ */ aA(o), c = e ? Rn : A ? rt : xe;
      return !A && OA(a, "iterate", dt), o.forEach((l, f) => s.call(n, c(l), c(f), i));
    }
  };
  return vA(
    t,
    A ? {
      add: Ir("add"),
      set: Ir("set"),
      delete: Ir("delete"),
      clear: Ir("clear")
    } : {
      add(s) {
        const n = /* @__PURE__ */ aA(this), i = Hr(n), o = /* @__PURE__ */ aA(s), a = !e && !/* @__PURE__ */ ce(s) && !/* @__PURE__ */ Ne(s) ? o : s;
        return i.has.call(n, a) || Te(s, a) && i.has.call(n, s) || Te(o, a) && i.has.call(n, o) || (n.add(a), De(n, "add", a, a)), this;
      },
      set(s, n) {
        !e && !/* @__PURE__ */ ce(n) && !/* @__PURE__ */ Ne(n) && (n = /* @__PURE__ */ aA(n));
        const i = /* @__PURE__ */ aA(this), { has: o, get: a } = Hr(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ aA(s), c = o.call(i, s));
        const l = a.call(i, s);
        return i.set(s, n), c ? Te(n, l) && De(i, "set", s, n) : De(i, "add", s, n), this;
      },
      delete(s) {
        const n = /* @__PURE__ */ aA(this), { has: i, get: o } = Hr(n);
        let a = i.call(n, s);
        a || (s = /* @__PURE__ */ aA(s), a = i.call(n, s)), o && o.call(n, s);
        const c = n.delete(s);
        return a && De(n, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ aA(this), n = s.size !== 0, i = s.clear();
        return n && De(
          s,
          "clear",
          void 0,
          void 0
        ), i;
      }
    }
  ), [
    "keys",
    "values",
    "entries",
    Symbol.iterator
  ].forEach((s) => {
    t[s] = gf(s, A, e);
  }), t;
}
function Fi(A, e) {
  const t = hf(A, e);
  return (r, s, n) => s === "__v_isReactive" ? !A : s === "__v_isReadonly" ? A : s === "__v_raw" ? r : Reflect.get(
    rA(t, s) && s in r ? t : r,
    s,
    n
  );
}
const pf = {
  get: /* @__PURE__ */ Fi(!1, !1)
}, wf = {
  get: /* @__PURE__ */ Fi(!1, !0)
}, Qf = {
  get: /* @__PURE__ */ Fi(!0, !1)
};
const za = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Cf = /* @__PURE__ */ new WeakMap();
function vf(A) {
  switch (A) {
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
function bi(A) {
  return /* @__PURE__ */ Ne(A) ? A : mi(
    A,
    !1,
    uf,
    pf,
    za
  );
}
// @__NO_SIDE_EFFECTS__
function Uf(A) {
  return mi(
    A,
    !1,
    df,
    wf,
    qa
  );
}
// @__NO_SIDE_EFFECTS__
function Mn(A) {
  return mi(
    A,
    !0,
    Bf,
    Qf,
    $a
  );
}
function mi(A, e, t, r, s) {
  if (!fA(A) || A.__v_raw && !(e && A.__v_isReactive) || A.__v_skip || !Object.isExtensible(A))
    return A;
  const n = s.get(A);
  if (n)
    return n;
  const i = vf(Jc(A));
  if (i === 0)
    return A;
  const o = new Proxy(
    A,
    i === 2 ? r : t
  );
  return s.set(A, o), o;
}
// @__NO_SIDE_EFFECTS__
function At(A) {
  return /* @__PURE__ */ Ne(A) ? /* @__PURE__ */ At(A.__v_raw) : !!(A && A.__v_isReactive);
}
// @__NO_SIDE_EFFECTS__
function Ne(A) {
  return !!(A && A.__v_isReadonly);
}
// @__NO_SIDE_EFFECTS__
function ce(A) {
  return !!(A && A.__v_isShallow);
}
// @__NO_SIDE_EFFECTS__
function xi(A) {
  return A ? !!A.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function aA(A) {
  const e = A && A.__v_raw;
  return e ? /* @__PURE__ */ aA(e) : A;
}
function Ff(A) {
  return !rA(A, "__v_skip") && Object.isExtensible(A) && Ka(A, "__v_skip", !0), A;
}
const xe = (A) => fA(A) ? /* @__PURE__ */ bi(A) : A, rt = (A) => fA(A) ? /* @__PURE__ */ Mn(A) : A;
// @__NO_SIDE_EFFECTS__
function JA(A) {
  return A ? A.__v_isRef === !0 : !1;
}
function Al(A) {
  return /* @__PURE__ */ JA(A) ? A.value : A;
}
const bf = {
  get: (A, e, t) => e === "__v_raw" ? A : Al(Reflect.get(A, e, t)),
  set: (A, e, t, r) => {
    const s = A[e];
    return /* @__PURE__ */ JA(s) && !/* @__PURE__ */ JA(t) ? (s.value = t, !0) : Reflect.set(A, e, t, r);
  }
};
function el(A) {
  return /* @__PURE__ */ At(A) ? A : new Proxy(A, bf);
}
class mf {
  constructor(e, t, r) {
    this.fn = e, this.setter = t, this._value = void 0, this.dep = new Xa(this), this.__v_isRef = !0, this.deps = void 0, this.depsTail = void 0, this.flags = 16, this.globalVersion = dr - 1, this.next = void 0, this.effect = this, this.__v_isReadonly = !t, this.isSSR = r;
  }
  /**
   * @internal
   */
  notify() {
    if (this.flags |= 16, !(this.flags & 8) && // avoid infinite self recursion
    dA !== this)
      return Na(this, !0), !0;
  }
  get value() {
    const e = this.dep.track();
    return Pa(this), e && (e.version = this.dep.version), this._value;
  }
  set value(e) {
    this.setter && this.setter(e);
  }
}
// @__NO_SIDE_EFFECTS__
function xf(A, e, t = !1) {
  let r, s;
  return j(A) ? r = A : (r = A.get, s = A.set), new mf(r, s, t);
}
const _r = {}, fs = /* @__PURE__ */ new WeakMap();
let at;
function yf(A, e = !1, t = at) {
  if (t) {
    let r = fs.get(t);
    r || fs.set(t, r = []), r.push(A);
  }
}
function Ef(A, e, t = BA) {
  const { immediate: r, deep: s, once: n, scheduler: i, augmentJob: o, call: a } = t, c = (m) => s ? m : /* @__PURE__ */ ce(m) || s === !1 || s === 0 ? ke(m, 1) : ke(m);
  let l, f, B, Q, v = !1, U = !1;
  if (/* @__PURE__ */ JA(A) ? (f = () => A.value, v = /* @__PURE__ */ ce(A)) : /* @__PURE__ */ At(A) ? (f = () => c(A), v = !0) : J(A) ? (U = !0, v = A.some((m) => /* @__PURE__ */ At(m) || /* @__PURE__ */ ce(m)), f = () => A.map((m) => {
    if (/* @__PURE__ */ JA(m))
      return m.value;
    if (/* @__PURE__ */ At(m))
      return c(m);
    if (j(m))
      return a ? a(m, 2) : m();
  })) : j(A) ? e ? f = a ? () => a(A, 2) : A : f = () => {
    if (B) {
      Re();
      try {
        B();
      } finally {
        Me();
      }
    }
    const m = at;
    at = l;
    try {
      return a ? a(A, 3, [Q]) : A(Q);
    } finally {
      at = m;
    }
  } : f = Fe, e && s) {
    const m = f, k = s === !0 ? 1 / 0 : s;
    f = () => ke(m(), k);
  }
  const K = rf(), H = () => {
    l.stop(), K && K.active && pi(K.effects, l);
  };
  if (n && e) {
    const m = e;
    e = (...k) => {
      const L = m(...k);
      return H(), L;
    };
  }
  let b = U ? new Array(A.length).fill(_r) : _r;
  const h = (m) => {
    if (!(!(l.flags & 1) || !l.dirty && !m))
      if (e) {
        const k = l.run();
        if (m || s || v || (U ? k.some((L, W) => Te(L, b[W])) : Te(k, b))) {
          B && B();
          const L = at;
          at = l;
          try {
            const W = [
              k,
              // pass undefined as the old value when it's changed for the first time
              b === _r ? void 0 : U && b[0] === _r ? [] : b,
              Q
            ];
            b = k, a ? a(e, 3, W) : (
              // @ts-expect-error
              e(...W)
            );
          } finally {
            at = L;
          }
        }
      } else
        l.run();
  };
  return o && o(h), l = new Ra(f), l.scheduler = i ? () => i(h, !1) : h, Q = (m) => yf(m, !1, l), B = l.onStop = () => {
    const m = fs.get(l);
    if (m) {
      if (a)
        a(m, 4);
      else
        for (const k of m) k();
      fs.delete(l);
    }
  }, e ? r ? h(!0) : b = l.run() : i ? i(h.bind(null, !0), !0) : l.run(), H.pause = l.pause.bind(l), H.resume = l.resume.bind(l), H.stop = H, H;
}
function ke(A, e = 1 / 0, t) {
  if (e <= 0 || !fA(A) || A.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(A) || 0) >= e))
    return A;
  if (t.set(A, e), e--, /* @__PURE__ */ JA(A))
    ke(A.value, e, t);
  else if (J(A))
    for (let r = 0; r < A.length; r++)
      ke(A[r], e, t);
  else if (St(A) || $e(A))
    A.forEach((r) => {
      ke(r, e, t);
    });
  else if (_s(A)) {
    for (const r in A)
      ke(A[r], e, t);
    for (const r of Object.getOwnPropertySymbols(A))
      Object.prototype.propertyIsEnumerable.call(A, r) && ke(A[r], e, t);
  }
  return A;
}
/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
function br(A, e, t, r) {
  try {
    return r ? A(...r) : A();
  } catch (s) {
    ks(s, e, t);
  }
}
function ue(A, e, t, r) {
  if (j(A)) {
    const s = br(A, e, t, r);
    return s && La(s) && s.catch((n) => {
      ks(n, e, t);
    }), s;
  }
  if (J(A)) {
    const s = [];
    for (let n = 0; n < A.length; n++)
      s.push(ue(A[n], e, t, r));
    return s;
  }
}
function ks(A, e, t, r = !0) {
  const s = e ? e.vnode : null, { errorHandler: n, throwUnhandledErrorInProduction: i } = e && e.appContext.config || BA;
  if (e) {
    let o = e.parent;
    const a = e.proxy, c = `https://vuejs.org/error-reference/#runtime-${t}`;
    for (; o; ) {
      const l = o.ec;
      if (l) {
        for (let f = 0; f < l.length; f++)
          if (l[f](A, a, c) === !1)
            return;
      }
      o = o.parent;
    }
    if (n) {
      Re(), br(n, null, 10, [
        A,
        a,
        c
      ]), Me();
      return;
    }
  }
  Hf(A, t, s, r, i);
}
function Hf(A, e, t, r = !0, s = !1) {
  if (s)
    throw A;
  console.error(A);
}
const PA = [];
let Ce = -1;
const It = [];
let Ye = null, xt = 0;
const tl = /* @__PURE__ */ Promise.resolve();
let us = null;
function rl(A) {
  const e = us || tl;
  return A ? e.then(this ? A.bind(this) : A) : e;
}
function If(A) {
  let e = Ce + 1, t = PA.length;
  for (; e < t; ) {
    const r = e + t >>> 1, s = PA[r], n = hr(s);
    n < A || n === A && s.flags & 2 ? e = r + 1 : t = r;
  }
  return e;
}
function yi(A) {
  if (!(A.flags & 1)) {
    const e = hr(A), t = PA[PA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(A.flags & 2) && e >= hr(t) ? PA.push(A) : PA.splice(If(e), 0, A), A.flags |= 1, sl();
  }
}
function sl() {
  us || (us = tl.then(il));
}
function _f(A) {
  if (!J(A))
    Ye && A.id === -1 ? Ye.splice(xt + 1, 0, A) : A.flags & 1 || (It.push(A), A.flags |= 1);
  else
    for (let e = 0; e < A.length; e++)
      It.push(A[e]);
  sl();
}
function qi(A, e, t = Ce + 1) {
  for (; t < PA.length; t++) {
    const r = PA[t];
    if (r && r.flags & 2) {
      if (A && r.id !== A.uid)
        continue;
      PA.splice(t, 1), t--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
    }
  }
}
function nl(A) {
  if (It.length) {
    const e = [...new Set(It)].sort(
      (t, r) => hr(t) - hr(r)
    );
    if (It.length = 0, Ye) {
      for (let t = 0; t < e.length; t++)
        Ye.push(e[t]);
      return;
    }
    for (Ye = e, xt = 0; xt < Ye.length; xt++) {
      const t = Ye[xt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ye = null, xt = 0;
  }
}
const hr = (A) => A.id == null ? A.flags & 2 ? -1 : 1 / 0 : A.id;
function il(A) {
  try {
    for (Ce = 0; Ce < PA.length; Ce++) {
      const e = PA[Ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), br(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Ce < PA.length; Ce++) {
      const e = PA[Ce];
      e && (e.flags &= -2);
    }
    Ce = -1, PA.length = 0, nl(), us = null, (PA.length || It.length) && il();
  }
}
let qA = null, ol = null;
function Bs(A) {
  const e = qA;
  return qA = A, ol = A && A.type.__scopeId || null, e;
}
function Lf(A, e = qA, t) {
  if (!e || A._n)
    return A;
  const r = (...s) => {
    r._d && co(-1);
    const n = Bs(e), i = gt.length;
    let o;
    try {
      o = A(...s);
    } finally {
      for (let a = gt.length; a > i; a--) _l();
      Bs(n), r._d && co(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function xA(A, e) {
  if (qA === null)
    return A;
  const t = Vs(qA), r = A.dirs || (A.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [n, i, o, a = BA] = e[s];
    n && (j(n) && (n = {
      mounted: n,
      updated: n
    }), n.deep && ke(i), r.push({
      dir: n,
      instance: t,
      value: i,
      oldValue: void 0,
      arg: o,
      modifiers: a
    }));
  }
  return A;
}
function nt(A, e, t, r) {
  const s = A.dirs, n = e && e.dirs;
  for (let i = 0; i < s.length; i++) {
    const o = s[i];
    n && (o.oldValue = n[i].value);
    let a = o.dir[r];
    a && (Re(), ue(a, t, 8, [
      A.el,
      o,
      A,
      e
    ]), Me());
  }
}
function Sf(A, e) {
  if (RA) {
    let t = RA.provides;
    const r = RA.parent && RA.parent.provides;
    r === t && (t = RA.provides = Object.create(r)), t[A] = e;
  }
}
function ss(A, e, t = !1) {
  const r = Ku();
  if (r || _t) {
    let s = _t ? _t._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && A in s)
      return s[A];
    if (arguments.length > 1)
      return t && j(e) ? e.call(r && r.proxy) : e;
  }
}
const Kf = /* @__PURE__ */ Symbol.for("v-scx"), Tf = () => ss(Kf);
function nn(A, e, t) {
  return al(A, e, t);
}
function al(A, e, t = BA) {
  const { immediate: r, deep: s, flush: n, once: i } = t, o = vA({}, t), a = e && r || !e && n !== "post";
  let c;
  if (Qr) {
    if (n === "sync") {
      const Q = Tf();
      c = Q.__watcherHandles || (Q.__watcherHandles = []);
    } else if (!a) {
      const Q = () => {
      };
      return Q.stop = Fe, Q.resume = Fe, Q.pause = Fe, Q;
    }
  }
  const l = RA;
  o.call = (Q, v, U) => ue(Q, l, v, U);
  let f = !1;
  n === "post" ? o.scheduler = (Q) => {
    XA(Q, l && l.suspense);
  } : n !== "sync" && (f = !0, o.scheduler = (Q, v) => {
    v ? Q() : yi(Q);
  }), o.augmentJob = (Q) => {
    e && (Q.flags |= 4), f && (Q.flags |= 2, l && (Q.id = l.uid, Q.i = l));
  };
  const B = Ef(A, e, o);
  return Qr && (c ? c.push(B) : a && B()), B;
}
function Df(A, e, t) {
  const r = this.proxy, s = pA(A) ? A.includes(".") ? ll(r, A) : () => r[A] : A.bind(r, r);
  let n;
  j(e) ? n = e : (n = e.handler, t = e);
  const i = mr(this), o = al(s, n.bind(r), t);
  return i(), o;
}
function ll(A, e) {
  const t = e.split(".");
  return () => {
    let r = A;
    for (let s = 0; s < t.length && r; s++)
      r = r[t[s]];
    return r;
  };
}
const kf = /* @__PURE__ */ Symbol("_vte"), Os = (A) => A.__isTeleport, on = /* @__PURE__ */ Symbol("_leaveCb");
function Of(A) {
  let e = A[0];
  if (A.length > 1) {
    for (const t of A)
      if (t.type !== Ve) {
        e = t;
        break;
      }
  }
  return e;
}
function cl(A) {
  if (!Hi(A))
    return Os(A.type) && A.children ? Of(A.children) : A;
  if (A.component)
    return A.component.subTree;
  const { shapeFlag: e, children: t } = A;
  if (t) {
    if (e & 16)
      return t[0];
    if (e & 32 && j(t.default))
      return t.default();
  }
}
function Ei(A, e) {
  if (A.shapeFlag & 6 && A.component) {
    A.transition = e;
    const t = A.component.subTree;
    Ei(
      Os(t.type) && cl(t) || t,
      e
    );
  } else A.shapeFlag & 128 ? (A.ssContent.transition = e.clone(A.ssContent), A.ssFallback.transition = e.clone(A.ssFallback)) : A.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Rf(A, e) {
  return j(A) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vA({ name: A.name }, e, { setup: A })
  ) : A;
}
function fl(A) {
  A.ids = [A.ids[0] + A.ids[2]++ + "-", 0, 0];
}
function $i(A, e) {
  let t;
  return !!((t = Object.getOwnPropertyDescriptor(A, e)) && !t.configurable);
}
const ds = /* @__PURE__ */ new WeakMap();
function ir(A, e, t, r, s = !1) {
  if (J(A)) {
    A.forEach(
      (U, K) => ir(
        U,
        e && (J(e) ? e[K] : e),
        t,
        r,
        s
      )
    );
    return;
  }
  if (or(r) && !s) {
    r.shapeFlag & 512 && r.type.__asyncResolved && r.component.subTree.component && ir(A, e, t, r.component.subTree);
    return;
  }
  const n = r.shapeFlag & 4 ? Vs(r.component) : r.el, i = s ? null : n, { i: o, r: a } = A, c = e && e.r, l = o.refs === BA ? o.refs = {} : o.refs, f = o.setupState, B = /* @__PURE__ */ aA(f), Q = f === BA ? _a : (U) => $i(l, U) ? !1 : rA(B, U), v = (U, K) => !(K && $i(l, K));
  if (c != null && c !== a) {
    if (Ao(e), pA(c))
      l[c] = null, Q(c) && (f[c] = null);
    else if (/* @__PURE__ */ JA(c)) {
      const U = e;
      v(c, U.k) && (c.value = null), U.k && (l[U.k] = null);
    }
  }
  if (j(a))
    br(a, o, 12, [i, l]);
  else {
    const U = pA(a), K = /* @__PURE__ */ JA(a);
    if (U || K) {
      const H = () => {
        if (A.f) {
          const b = U ? Q(a) ? f[a] : l[a] : v() || !A.k ? a.value : l[A.k];
          if (s)
            J(b) && pi(b, n);
          else if (J(b))
            b.includes(n) || b.push(n);
          else if (U)
            l[a] = [n], Q(a) && (f[a] = l[a]);
          else {
            const h = [n];
            v(a, A.k) && (a.value = h), A.k && (l[A.k] = h);
          }
        } else U ? (l[a] = i, Q(a) && (f[a] = i)) : K && (v(a, A.k) && (a.value = i), A.k && (l[A.k] = i));
      };
      if (i) {
        const b = () => {
          H(), ds.delete(A);
        };
        b.id = -1, ds.set(A, b), XA(b, t);
      } else
        Ao(A), H();
    }
  }
}
function Ao(A) {
  const e = ds.get(A);
  e && (e.flags |= 8, ds.delete(A));
}
Ks().requestIdleCallback;
Ks().cancelIdleCallback;
const or = (A) => !!A.type.__asyncLoader, Hi = (A) => A.type.__isKeepAlive;
function Mf(A, e) {
  ul(A, "a", e);
}
function Nf(A, e) {
  ul(A, "da", e);
}
function ul(A, e, t = RA) {
  const r = A.__wdc || (A.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return A();
  });
  if (Rs(e, r, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      Hi(s.parent.vnode) && Vf(r, e, t, s), s = s.parent;
  }
}
function Vf(A, e, t, r) {
  const s = Rs(
    e,
    A,
    r,
    !0
    /* prepend */
  );
  Bl(() => {
    pi(r[e], s);
  }, t);
}
function Rs(A, e, t = RA, r = !1) {
  if (t) {
    const s = t[A] || (t[A] = []), n = e.__weh || (e.__weh = (...i) => {
      Re();
      const o = mr(t), a = ue(e, t, A, i);
      return o(), Me(), a;
    });
    return r ? s.unshift(n) : s.push(n), n;
  }
}
const Pe = (A) => (e, t = RA) => {
  (!Qr || A === "sp") && Rs(A, (...r) => e(...r), t);
}, Gf = Pe("bm"), Pf = Pe("m"), Jf = Pe(
  "bu"
), Xf = Pe("u"), Wf = Pe(
  "bum"
), Bl = Pe("um"), Yf = Pe(
  "sp"
), jf = Pe("rtg"), Zf = Pe("rtc");
function zf(A, e = RA) {
  Rs("ec", A, e);
}
const qf = "components";
function $f(A, e) {
  return eu(qf, A, !0, e) || A;
}
const Au = /* @__PURE__ */ Symbol.for("v-ndc");
function eu(A, e, t = !0, r = !1) {
  const s = qA || RA;
  if (s) {
    const n = s.type;
    {
      const o = Ru(
        n,
        !1
      );
      if (o && (o === e || o === _A(e) || o === Ss(_A(e))))
        return n;
    }
    const i = (
      // local registration
      // check instance[type] first which is resolved for options API
      eo(s[A] || n[A], e) || // global registration
      eo(s.appContext[A], e)
    );
    return !i && r ? n : i;
  }
}
function eo(A, e) {
  return A && (A[e] || A[_A(e)] || A[Ss(_A(e))]);
}
function lA(A, e, t, r) {
  let s;
  const n = t, i = J(A);
  if (i || pA(A)) {
    const o = i && /* @__PURE__ */ At(A);
    let a = !1, c = !1;
    o && (a = !/* @__PURE__ */ ce(A), c = /* @__PURE__ */ Ne(A), A = Ds(A)), s = new Array(A.length);
    for (let l = 0, f = A.length; l < f; l++)
      s[l] = e(
        a ? c ? rt(xe(A[l])) : xe(A[l]) : A[l],
        l,
        void 0,
        n
      );
  } else if (typeof A == "number") {
    s = new Array(A);
    for (let o = 0; o < A; o++)
      s[o] = e(o + 1, o, void 0, n);
  } else if (fA(A))
    if (A[Symbol.iterator])
      s = Array.from(
        A,
        (o, a) => e(o, a, void 0, n)
      );
    else {
      const o = Object.keys(A);
      s = new Array(o.length);
      for (let a = 0, c = o.length; a < c; a++) {
        const l = o[a];
        s[a] = e(A[l], l, a, n);
      }
    }
  else
    s = [];
  return s;
}
const Nn = (A) => A ? Dl(A) ? Vs(A) : Nn(A.parent) : null, ar = (
  // Move PURE marker to new line to workaround compiler discarding it
  // due to type annotation
  /* @__PURE__ */ vA(/* @__PURE__ */ Object.create(null), {
    $: (A) => A,
    $el: (A) => A.vnode.el,
    $data: (A) => A.data,
    $props: (A) => A.props,
    $attrs: (A) => A.attrs,
    $slots: (A) => A.slots,
    $refs: (A) => A.refs,
    $parent: (A) => Nn(A.parent),
    $root: (A) => Nn(A.root),
    $host: (A) => A.ce,
    $emit: (A) => A.emit,
    $options: (A) => gl(A),
    $forceUpdate: (A) => A.f || (A.f = () => {
      yi(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = rl.bind(A.proxy)),
    $watch: (A) => Df.bind(A)
  })
), an = (A, e) => A !== BA && !A.__isScriptSetup && rA(A, e), tu = {
  get({ _: A }, e) {
    if (e === "__v_skip")
      return !0;
    const { ctx: t, setupState: r, data: s, props: n, accessCache: i, type: o, appContext: a } = A;
    if (e[0] !== "$") {
      const B = i[e];
      if (B !== void 0)
        switch (B) {
          case 1:
            return r[e];
          case 2:
            return s[e];
          case 4:
            return t[e];
          case 3:
            return n[e];
        }
      else {
        if (an(r, e))
          return i[e] = 1, r[e];
        if (s !== BA && rA(s, e))
          return i[e] = 2, s[e];
        if (rA(n, e))
          return i[e] = 3, n[e];
        if (t !== BA && rA(t, e))
          return i[e] = 4, t[e];
        Vn && (i[e] = 0);
      }
    }
    const c = ar[e];
    let l, f;
    if (c)
      return e === "$attrs" && OA(A.attrs, "get", ""), c(A);
    if (
      // css module (injected by vue-loader)
      (l = o.__cssModules) && (l = l[e])
    )
      return l;
    if (t !== BA && rA(t, e))
      return i[e] = 4, t[e];
    if (
      // global properties
      f = a.config.globalProperties, rA(f, e)
    )
      return f[e];
  },
  set({ _: A }, e, t) {
    const { data: r, setupState: s, ctx: n } = A;
    return an(s, e) ? (s[e] = t, !0) : r !== BA && rA(r, e) ? (r[e] = t, !0) : rA(A.props, e) || e[0] === "$" && e.slice(1) in A ? !1 : (n[e] = t, !0);
  },
  has({
    _: { data: A, setupState: e, accessCache: t, ctx: r, appContext: s, props: n, type: i }
  }, o) {
    let a;
    return !!(t[o] || A !== BA && o[0] !== "$" && rA(A, o) || an(e, o) || rA(n, o) || rA(r, o) || rA(ar, o) || rA(s.config.globalProperties, o) || (a = i.__cssModules) && a[o]);
  },
  defineProperty(A, e, t) {
    return t.get != null ? A._.accessCache[e] = 0 : rA(t, "value") && this.set(A, e, t.value, null), Reflect.defineProperty(A, e, t);
  }
};
function to(A) {
  return J(A) ? A.reduce(
    (e, t) => (e[t] = null, e),
    {}
  ) : A;
}
let Vn = !0;
function ru(A) {
  const e = gl(A), t = A.proxy, r = A.ctx;
  Vn = !1, e.beforeCreate && ro(e.beforeCreate, A, "bc");
  const {
    // state
    data: s,
    computed: n,
    methods: i,
    watch: o,
    provide: a,
    inject: c,
    // lifecycle
    created: l,
    beforeMount: f,
    mounted: B,
    beforeUpdate: Q,
    updated: v,
    activated: U,
    deactivated: K,
    beforeDestroy: H,
    beforeUnmount: b,
    destroyed: h,
    unmounted: m,
    render: k,
    renderTracked: L,
    renderTriggered: W,
    errorCaptured: Z,
    serverPrefetch: V,
    // public API
    expose: iA,
    inheritAttrs: UA,
    // assets
    components: EA,
    directives: eA,
    filters: wA
  } = e;
  if (c && su(c, r, null), i)
    for (const z in i) {
      const AA = i[z];
      j(AA) && (r[z] = AA.bind(t));
    }
  if (s) {
    const z = s.call(t, t);
    fA(z) && (A.data = /* @__PURE__ */ bi(z));
  }
  if (Vn = !0, n)
    for (const z in n) {
      const AA = n[z], HA = j(AA) ? AA.bind(t, t) : j(AA.get) ? AA.get.bind(t, t) : Fe, YA = !j(AA) && j(AA.set) ? AA.set.bind(t) : Fe, MA = Nu({
        get: HA,
        set: YA
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => MA.value,
        set: (mA) => MA.value = mA
      });
    }
  if (o)
    for (const z in o)
      dl(o[z], r, t, z);
  if (a) {
    const z = j(a) ? a.call(t) : a;
    Reflect.ownKeys(z).forEach((AA) => {
      Sf(AA, z[AA]);
    });
  }
  l && ro(l, A, "c");
  function sA(z, AA) {
    J(AA) ? AA.forEach((HA) => z(HA.bind(t))) : AA && z(AA.bind(t));
  }
  if (sA(Gf, f), sA(Pf, B), sA(Jf, Q), sA(Xf, v), sA(Mf, U), sA(Nf, K), sA(zf, Z), sA(Zf, L), sA(jf, W), sA(Wf, b), sA(Bl, m), sA(Yf, V), J(iA))
    if (iA.length) {
      const z = A.exposed || (A.exposed = {});
      iA.forEach((AA) => {
        Object.defineProperty(z, AA, {
          get: () => t[AA],
          set: (HA) => t[AA] = HA,
          enumerable: !0
        });
      });
    } else A.exposed || (A.exposed = {});
  k && A.render === Fe && (A.render = k), UA != null && (A.inheritAttrs = UA), EA && (A.components = EA), eA && (A.directives = eA), V && fl(A);
}
function su(A, e, t = Fe) {
  J(A) && (A = Gn(A));
  for (const r in A) {
    const s = A[r];
    let n;
    fA(s) ? "default" in s ? n = ss(
      s.from || r,
      s.default,
      !0
    ) : n = ss(s.from || r) : n = ss(s), /* @__PURE__ */ JA(n) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    }) : e[r] = n;
  }
}
function ro(A, e, t) {
  ue(
    J(A) ? A.map((r) => r.bind(e.proxy)) : A.bind(e.proxy),
    e,
    t
  );
}
function dl(A, e, t, r) {
  let s = r.includes(".") ? ll(t, r) : () => t[r];
  if (pA(A)) {
    const n = e[A];
    j(n) && nn(s, n);
  } else if (j(A))
    nn(s, A.bind(t));
  else if (fA(A))
    if (J(A))
      A.forEach((n) => dl(n, e, t, r));
    else {
      const n = j(A.handler) ? A.handler.bind(t) : e[A.handler];
      j(n) && nn(s, n, A);
    }
}
function gl(A) {
  const e = A.type, { mixins: t, extends: r } = e, {
    mixins: s,
    optionsCache: n,
    config: { optionMergeStrategies: i }
  } = A.appContext, o = n.get(e);
  let a;
  return o ? a = o : !s.length && !t && !r ? a = e : (a = {}, s.length && s.forEach(
    (c) => gs(a, c, i, !0)
  ), gs(a, e, i)), fA(e) && n.set(e, a), a;
}
function gs(A, e, t, r = !1) {
  const { mixins: s, extends: n } = e;
  n && gs(A, n, t, !0), s && s.forEach(
    (i) => gs(A, i, t, !0)
  );
  for (const i in e)
    if (!(r && i === "expose")) {
      const o = nu[i] || t && t[i];
      A[i] = o ? o(A[i], e[i]) : e[i];
    }
  return A;
}
const nu = {
  data: so,
  props: no,
  emits: no,
  // objects
  methods: Wt,
  computed: Wt,
  // lifecycle
  beforeCreate: NA,
  created: NA,
  beforeMount: NA,
  mounted: NA,
  beforeUpdate: NA,
  updated: NA,
  beforeDestroy: NA,
  beforeUnmount: NA,
  destroyed: NA,
  unmounted: NA,
  activated: NA,
  deactivated: NA,
  errorCaptured: NA,
  serverPrefetch: NA,
  // assets
  components: Wt,
  directives: Wt,
  // watch
  watch: ou,
  // provide / inject
  provide: so,
  inject: iu
};
function so(A, e) {
  return e ? A ? function() {
    return vA(
      j(A) ? A.call(this, this) : A,
      j(e) ? e.call(this, this) : e
    );
  } : e : A;
}
function iu(A, e) {
  return Wt(Gn(A), Gn(e));
}
function Gn(A) {
  if (J(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++)
      e[A[t]] = A[t];
    return e;
  }
  return A;
}
function NA(A, e) {
  return A ? [...new Set([].concat(A, e))] : e;
}
function Wt(A, e) {
  return A ? vA(/* @__PURE__ */ Object.create(null), A, e) : e;
}
function no(A, e) {
  return A ? J(A) && J(e) ? [.../* @__PURE__ */ new Set([...A, ...e])] : vA(
    /* @__PURE__ */ Object.create(null),
    to(A),
    to(e ?? {})
  ) : e;
}
function ou(A, e) {
  if (!A) return e;
  if (!e) return A;
  const t = vA(/* @__PURE__ */ Object.create(null), A);
  for (const r in e)
    t[r] = NA(A[r], e[r]);
  return t;
}
function hl() {
  return {
    app: null,
    config: {
      isNativeTag: _a,
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
let au = 0;
function lu(A, e) {
  return function(r, s = null) {
    j(r) || (r = vA({}, r)), s != null && !fA(s) && (s = null);
    const n = hl(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let a = !1;
    const c = n.app = {
      _uid: au++,
      _component: r,
      _props: s,
      _container: null,
      _context: n,
      _instance: null,
      version: Vu,
      get config() {
        return n.config;
      },
      set config(l) {
      },
      use(l, ...f) {
        return i.has(l) || (l && j(l.install) ? (i.add(l), l.install(c, ...f)) : j(l) && (i.add(l), l(c, ...f))), c;
      },
      mixin(l) {
        return n.mixins.includes(l) || n.mixins.push(l), c;
      },
      component(l, f) {
        return f ? (n.components[l] = f, c) : n.components[l];
      },
      directive(l, f) {
        return f ? (n.directives[l] = f, c) : n.directives[l];
      },
      mount(l, f, B) {
        if (!a) {
          const Q = c._ceVNode || be(r, s);
          return Q.appContext = n, B === !0 ? B = "svg" : B === !1 && (B = void 0), A(Q, l, B), a = !0, c._container = l, l.__vue_app__ = c, Vs(Q.component);
        }
      },
      onUnmount(l) {
        o.push(l);
      },
      unmount() {
        a && (ue(
          o,
          c._instance,
          16
        ), A(null, c._container), delete c._container.__vue_app__);
      },
      provide(l, f) {
        return n.provides[l] = f, c;
      },
      runWithContext(l) {
        const f = _t;
        _t = c;
        try {
          return l();
        } finally {
          _t = f;
        }
      }
    };
    return c;
  };
}
let _t = null;
const cu = (A, e) => e === "modelValue" || e === "model-value" ? A.modelModifiers : A[`${e}Modifiers`] || A[`${_A(e)}Modifiers`] || A[`${zA(e)}Modifiers`];
function fu(A, e, ...t) {
  if (A.isUnmounted) return;
  const r = A.vnode.props || BA;
  let s = t;
  const n = e.startsWith("update:"), i = n && cu(r, e.slice(7));
  i && (i.trim && (s = t.map((l) => pA(l) ? l.trim() : l)), i.number && (s = s.map(Qi)));
  let o, a = r[o = An(e)] || // also try camelCase event handler (#2249)
  r[o = An(_A(e))];
  !a && n && (a = r[o = An(zA(e))]), a && ue(
    a,
    A,
    6,
    s
  );
  const c = r[o + "Once"];
  if (c) {
    if (!A.emitted)
      A.emitted = {};
    else if (A.emitted[o])
      return;
    A.emitted[o] = !0, ue(
      c,
      A,
      6,
      s
    );
  }
}
const uu = /* @__PURE__ */ new WeakMap();
function pl(A, e, t = !1) {
  const r = t ? uu : e.emitsCache, s = r.get(A);
  if (s !== void 0)
    return s;
  const n = A.emits;
  let i = {}, o = !1;
  if (!j(A)) {
    const a = (c) => {
      const l = pl(c, e, !0);
      l && (o = !0, vA(i, l));
    };
    !t && e.mixins.length && e.mixins.forEach(a), A.extends && a(A.extends), A.mixins && A.mixins.forEach(a);
  }
  return !n && !o ? (fA(A) && r.set(A, null), null) : (J(n) ? n.forEach((a) => i[a] = null) : vA(i, n), fA(A) && r.set(A, i), i);
}
function Ms(A, e) {
  return !A || !Hs(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), rA(A, e[0].toLowerCase() + e.slice(1)) || rA(A, zA(e)) || rA(A, e));
}
function io(A) {
  const {
    type: e,
    vnode: t,
    proxy: r,
    withProxy: s,
    propsOptions: [n],
    slots: i,
    attrs: o,
    emit: a,
    render: c,
    renderCache: l,
    props: f,
    data: B,
    setupState: Q,
    ctx: v,
    inheritAttrs: U
  } = A, K = Bs(A);
  let H, b;
  try {
    if (t.shapeFlag & 4) {
      const m = s || r, k = m;
      H = Ue(
        c.call(
          k,
          m,
          l,
          f,
          Q,
          B,
          v
        )
      ), b = o;
    } else {
      const m = e;
      H = Ue(
        m.length > 1 ? m(
          f,
          { attrs: o, slots: i, emit: a }
        ) : m(
          f,
          null
        )
      ), b = e.props ? o : Bu(o);
    }
  } catch (m) {
    gt.length = 0, ks(m, A, 1), H = be(Ve);
  }
  let h = H;
  if (b && U !== !1) {
    const m = Object.keys(b), { shapeFlag: k } = h;
    m.length && k & 7 && (n && m.some(Is) && (b = du(
      b,
      n
    )), h = Kt(h, b, !1, !0));
  }
  if (t.dirs && (h = Kt(h, null, !1, !0), h.dirs = h.dirs ? h.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const m = Os(h.type) && cl(h) || h;
    Ei(m, t.transition);
  }
  return H = h, Bs(K), H;
}
const Bu = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || Hs(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, du = (A, e) => {
  const t = {};
  for (const r in A)
    (!Is(r) || !(r.slice(9) in e)) && (t[r] = A[r]);
  return t;
};
function gu(A, e, t) {
  const { props: r, children: s, component: n } = A, { props: i, children: o, patchFlag: a } = e, c = n.emitsOptions;
  if (e.dirs || e.transition)
    return !0;
  if (t && a >= 0) {
    if (a & 1024)
      return !0;
    if (a & 16)
      return r ? oo(r, i, c) : !!i;
    if (a & 8) {
      const l = e.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        const B = l[f];
        if (wl(i, r, B) && !Ms(c, B))
          return !0;
      }
    }
  } else
    return (s || o) && (!o || !o.$stable) ? !0 : r === i ? !1 : r ? i ? oo(r, i, c) : !0 : !!i;
  return !1;
}
function oo(A, e, t) {
  const r = Object.keys(e);
  if (r.length !== Object.keys(A).length)
    return !0;
  for (let s = 0; s < r.length; s++) {
    const n = r[s];
    if (wl(e, A, n) && !Ms(t, n))
      return !0;
  }
  return !1;
}
function wl(A, e, t) {
  const r = A[t], s = e[t];
  return t === "style" && fA(r) && fA(s) ? !Dt(r, s) : r !== s;
}
function hu({ vnode: A, parent: e, suspense: t }, r) {
  for (; e; ) {
    const s = e.subTree;
    if (s.suspense && s.suspense.activeBranch === A && (s.suspense.vnode.el = s.el = r, A = s), s === A)
      (A = e.vnode).el = r, e = e.parent;
    else
      break;
  }
  t && t.activeBranch === A && (t.vnode.el = r);
}
const Ql = {}, Cl = () => Object.create(Ql), vl = (A) => Object.getPrototypeOf(A) === Ql;
function pu(A, e, t, r = !1) {
  const s = {}, n = Cl();
  A.propsDefaults = /* @__PURE__ */ Object.create(null), Ul(A, e, s, n);
  for (const i in A.propsOptions[0])
    i in s || (s[i] = void 0);
  t ? A.props = r ? s : /* @__PURE__ */ Uf(s) : A.type.props ? A.props = s : A.props = n, A.attrs = n;
}
function wu(A, e, t, r) {
  const {
    props: s,
    attrs: n,
    vnode: { patchFlag: i }
  } = A, o = /* @__PURE__ */ aA(s), [a] = A.propsOptions;
  let c = !1;
  if (
    // always force full diff in dev
    // - #1942 if hmr is enabled with sfc component
    // - vite#872 non-sfc component used by sfc component
    (r || i > 0) && !(i & 16)
  ) {
    if (i & 8) {
      const l = A.vnode.dynamicProps;
      for (let f = 0; f < l.length; f++) {
        let B = l[f];
        if (Ms(A.emitsOptions, B))
          continue;
        const Q = e[B];
        if (a)
          if (rA(n, B))
            Q !== n[B] && (n[B] = Q, c = !0);
          else {
            const v = _A(B);
            s[v] = Pn(
              a,
              o,
              v,
              Q,
              A,
              !1
            );
          }
        else
          Q !== n[B] && (n[B] = Q, c = !0);
      }
    }
  } else {
    Ul(A, e, s, n) && (c = !0);
    let l;
    for (const f in o)
      (!e || // for camelCase
      !rA(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = zA(f)) === f || !rA(e, l))) && (a ? t && // for camelCase
      (t[f] !== void 0 || // for kebab-case
      t[l] !== void 0) && (s[f] = Pn(
        a,
        o,
        f,
        void 0,
        A,
        !0
      )) : delete s[f]);
    if (n !== o)
      for (const f in n)
        (!e || !rA(e, f)) && (delete n[f], c = !0);
  }
  c && De(A.attrs, "set", "");
}
function Ul(A, e, t, r) {
  const [s, n] = A.propsOptions;
  let i = !1, o;
  if (e)
    for (let a in e) {
      if (rr(a))
        continue;
      const c = e[a];
      let l;
      s && rA(s, l = _A(a)) ? !n || !n.includes(l) ? t[l] = c : (o || (o = {}))[l] = c : Ms(A.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, i = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ aA(t), c = o || BA;
    for (let l = 0; l < n.length; l++) {
      const f = n[l];
      t[f] = Pn(
        s,
        a,
        f,
        c[f],
        A,
        !rA(c, f)
      );
    }
  }
  return i;
}
function Pn(A, e, t, r, s, n) {
  const i = A[t];
  if (i != null) {
    const o = rA(i, "default");
    if (o && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && j(a)) {
        const { propsDefaults: c } = s;
        if (t in c)
          r = c[t];
        else {
          const l = mr(s);
          r = c[t] = a.call(
            null,
            e
          ), l();
        }
      } else
        r = a;
      s.ce && s.ce._setProp(t, r);
    }
    i[
      0
      /* shouldCast */
    ] && (n && !o ? r = !1 : i[
      1
      /* shouldCastTrue */
    ] && (r === "" || r === zA(t)) && (r = !0));
  }
  return r;
}
const Qu = /* @__PURE__ */ new WeakMap();
function Fl(A, e, t = !1) {
  const r = t ? Qu : e.propsCache, s = r.get(A);
  if (s)
    return s;
  const n = A.props, i = {}, o = [];
  let a = !1;
  if (!j(A)) {
    const l = (f) => {
      a = !0;
      const [B, Q] = Fl(f, e, !0);
      vA(i, B), Q && o.push(...Q);
    };
    !t && e.mixins.length && e.mixins.forEach(l), A.extends && l(A.extends), A.mixins && A.mixins.forEach(l);
  }
  if (!n && !a)
    return fA(A) && r.set(A, ft), ft;
  if (J(n))
    for (let l = 0; l < n.length; l++) {
      const f = _A(n[l]);
      ao(f) && (i[f] = BA);
    }
  else if (n)
    for (const l in n) {
      const f = _A(l);
      if (ao(f)) {
        const B = n[l], Q = i[f] = J(B) || j(B) ? { type: B } : vA({}, B), v = Q.type;
        let U = !1, K = !0;
        if (J(v))
          for (let H = 0; H < v.length; ++H) {
            const b = v[H], h = j(b) && b.name;
            if (h === "Boolean") {
              U = !0;
              break;
            } else h === "String" && (K = !1);
          }
        else
          U = j(v) && v.name === "Boolean";
        Q[
          0
          /* shouldCast */
        ] = U, Q[
          1
          /* shouldCastTrue */
        ] = K, (U || rA(Q, "default")) && o.push(f);
      }
    }
  const c = [i, o];
  return fA(A) && r.set(A, c), c;
}
function ao(A) {
  return A[0] !== "$" && !rr(A);
}
const Ii = (A) => A === "_" || A === "_ctx" || A === "$stable", _i = (A) => J(A) ? A.map(Ue) : [Ue(A)], Cu = (A, e, t) => {
  if (e._n)
    return e;
  const r = Lf((...s) => _i(e(...s)), t);
  return r._c = !1, r;
}, bl = (A, e, t) => {
  const r = A._ctx;
  for (const s in A) {
    if (Ii(s)) continue;
    const n = A[s];
    if (j(n))
      e[s] = Cu(s, n, r);
    else if (n != null) {
      const i = _i(n);
      e[s] = () => i;
    }
  }
}, ml = (A, e) => {
  const t = _i(e);
  A.slots.default = () => t;
}, xl = (A, e, t) => {
  for (const r in e)
    (t || !Ii(r)) && (A[r] = e[r]);
}, vu = (A, e, t) => {
  const r = A.slots = Cl();
  if (A.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (xl(r, e, t), t && Ka(r, "_", s, !0)) : bl(e, r);
  } else e && ml(A, e);
}, Uu = (A, e, t) => {
  const { vnode: r, slots: s } = A;
  let n = !0, i = BA;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? t && o === 1 ? n = !1 : xl(s, e, t) : (n = !e.$stable, bl(e, s)), i = e;
  } else e && (ml(A, e), i = { default: 1 });
  if (n)
    for (const o in s)
      !Ii(o) && i[o] == null && delete s[o];
}, XA = yu;
function Fu(A) {
  return bu(A);
}
function bu(A, e) {
  const t = Ks();
  t.__VUE__ = !0;
  const {
    insert: r,
    remove: s,
    patchProp: n,
    createElement: i,
    createText: o,
    createComment: a,
    setText: c,
    setElementText: l,
    parentNode: f,
    nextSibling: B,
    setScopeId: Q = Fe,
    insertStaticContent: v
  } = A, U = (d, g, F, I = null, x = null, E = null, D = void 0, T = null, S = !!g.dynamicChildren) => {
    if (d === g)
      return;
    d && !Nt(d, g) && (I = de(d), mA(d, x, E, !0), d = null), g.patchFlag === -2 && (S = !1, g.dynamicChildren = null), g.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (g.dynamicChildren === ft && (g.dynamicChildren = []), g.dynamicChildren.hasOnce = !0);
    const { type: y, ref: G, shapeFlag: R } = g;
    switch (y) {
      case Ns:
        K(d, g, F, I);
        break;
      case Ve:
        H(d, g, F, I);
        break;
      case cn:
        d == null && b(g, F, I, D);
        break;
      case P:
        EA(
          d,
          g,
          F,
          I,
          x,
          E,
          D,
          T,
          S
        );
        break;
      default:
        R & 1 ? k(
          d,
          g,
          F,
          I,
          x,
          E,
          D,
          T,
          S
        ) : R & 6 ? eA(
          d,
          g,
          F,
          I,
          x,
          E,
          D,
          T,
          S
        ) : (R & 64 || R & 128) && y.process(
          d,
          g,
          F,
          I,
          x,
          E,
          D,
          T,
          S,
          Ot
        );
    }
    G != null && x ? ir(G, d && d.ref, E, g || d, !g) : G == null && d && d.ref != null && ir(d.ref, null, E, d, !0);
  }, K = (d, g, F, I) => {
    if (d == null)
      r(
        g.el = o(g.children),
        F,
        I
      );
    else {
      const x = g.el = d.el;
      g.children !== d.children && c(x, g.children);
    }
  }, H = (d, g, F, I) => {
    d == null ? r(
      g.el = a(g.children || ""),
      F,
      I
    ) : g.el = d.el;
  }, b = (d, g, F, I) => {
    [d.el, d.anchor] = v(
      d.children,
      g,
      F,
      I,
      d.el,
      d.anchor
    );
  }, h = ({ el: d, anchor: g }, F, I) => {
    let x;
    for (; d && d !== g; )
      x = B(d), r(d, F, I), d = x;
    r(g, F, I);
  }, m = ({ el: d, anchor: g }) => {
    let F;
    for (; d && d !== g; )
      F = B(d), s(d), d = F;
    s(g);
  }, k = (d, g, F, I, x, E, D, T, S) => {
    if (g.type === "svg" ? D = "svg" : g.type === "math" && (D = "mathml"), d == null)
      L(
        g,
        F,
        I,
        x,
        E,
        D,
        T,
        S
      );
    else {
      const y = d.el && d.el._isVueCE ? d.el : null;
      try {
        y && y._beginPatch(), V(
          d,
          g,
          x,
          E,
          D,
          T,
          S
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, L = (d, g, F, I, x, E, D, T) => {
    let S, y;
    const { props: G, shapeFlag: R, transition: N, dirs: X } = d;
    if (S = d.el = i(
      d.type,
      E,
      G && G.is,
      G
    ), R & 8 ? l(S, d.children) : R & 16 && Z(
      d.children,
      S,
      null,
      I,
      x,
      ln(d, E),
      D,
      T
    ), X && nt(d, null, I, "created"), W(S, d, d.scopeId, D, I), G) {
      for (const uA in G)
        uA !== "value" && !rr(uA) && n(S, uA, null, G[uA], E, I);
      "value" in G && n(S, "value", null, G.value, E), (y = G.onVnodeBeforeMount) && we(y, I, d);
    }
    X && nt(d, null, I, "beforeMount");
    const tA = mu(x, N);
    tA && N.beforeEnter(S), r(S, g, F), ((y = G && G.onVnodeMounted) || tA || X) && XA(() => {
      try {
        y && we(y, I, d), tA && N.enter(S), X && nt(d, null, I, "mounted");
      } finally {
      }
    }, x);
  }, W = (d, g, F, I, x) => {
    if (F && Q(d, F), I)
      for (let E = 0; E < I.length; E++)
        Q(d, I[E]);
    if (x) {
      let E = x.subTree;
      if (g === E || Il(E.type) && (E.ssContent === g || E.ssFallback === g)) {
        const D = x.vnode;
        W(
          d,
          D,
          D.scopeId,
          D.slotScopeIds,
          x.parent
        );
      }
    }
  }, Z = (d, g, F, I, x, E, D, T, S = 0) => {
    for (let y = S; y < d.length; y++) {
      const G = d[y] = T ? Ke(d[y]) : Ue(d[y]);
      U(
        null,
        G,
        g,
        F,
        I,
        x,
        E,
        D,
        T
      );
    }
  }, V = (d, g, F, I, x, E, D) => {
    const T = g.el = d.el;
    let { patchFlag: S, dynamicChildren: y, dirs: G } = g;
    S |= d.patchFlag & 16;
    const R = d.props || BA, N = g.props || BA;
    let X;
    if (F && it(F, !1), (X = N.onVnodeBeforeUpdate) && we(X, F, g, d), G && nt(g, d, F, "beforeUpdate"), F && it(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!d.dynamicChildren || d.dynamicChildren.length !== y.length) && (S = 0, D = !1, y = null), (R.innerHTML && N.innerHTML == null || R.textContent && N.textContent == null) && l(T, ""), y ? iA(
      d.dynamicChildren,
      y,
      T,
      F,
      I,
      ln(g, x),
      E
    ) : D || AA(
      d,
      g,
      T,
      null,
      F,
      I,
      ln(g, x),
      E,
      !1
    ), S > 0) {
      if (S & 16)
        UA(T, R, N, F, x);
      else if (S & 2 && R.class !== N.class && n(T, "class", null, N.class, x), S & 4 && n(T, "style", R.style, N.style, x), S & 8) {
        const tA = g.dynamicProps;
        for (let uA = 0; uA < tA.length; uA++) {
          const oA = tA[uA], FA = R[oA], LA = N[oA];
          (LA !== FA || oA === "value") && n(T, oA, FA, LA, x, F);
        }
      }
      S & 1 && d.children !== g.children && l(T, g.children);
    } else !D && y == null && UA(T, R, N, F, x);
    ((X = N.onVnodeUpdated) || G) && XA(() => {
      X && we(X, F, g, d), G && nt(g, d, F, "updated");
    }, I);
  }, iA = (d, g, F, I, x, E, D) => {
    for (let T = 0; T < g.length; T++) {
      const S = d[T], y = g[T], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        S.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (S.type === P || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nt(S, y) || // - In the case of a component, it could contain anything.
        S.shapeFlag & 198) ? f(S.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        S,
        y,
        G,
        null,
        I,
        x,
        E,
        D,
        !0
      );
    }
  }, UA = (d, g, F, I, x) => {
    if (g !== F) {
      if (g !== BA)
        for (const E in g)
          !rr(E) && !(E in F) && n(
            d,
            E,
            g[E],
            null,
            x,
            I
          );
      for (const E in F) {
        if (rr(E)) continue;
        const D = F[E], T = g[E];
        D !== T && E !== "value" && n(d, E, T, D, x, I);
      }
      "value" in F && n(d, "value", g.value, F.value, x);
    }
  }, EA = (d, g, F, I, x, E, D, T, S) => {
    const y = g.el = d ? d.el : o(""), G = g.anchor = d ? d.anchor : o("");
    let { patchFlag: R, dynamicChildren: N, slotScopeIds: X } = g;
    X && (T = T ? T.concat(X) : X), d == null ? (r(y, F, I), r(G, F, I), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      g.children || [],
      F,
      G,
      x,
      E,
      D,
      T,
      S
    )) : R > 0 && R & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === N.length ? (iA(
      d.dynamicChildren,
      N,
      F,
      x,
      E,
      D,
      T
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (g.key != null || x && g === x.subTree) && yl(
      d,
      g,
      !0
      /* shallow */
    )) : AA(
      d,
      g,
      F,
      G,
      x,
      E,
      D,
      T,
      S
    );
  }, eA = (d, g, F, I, x, E, D, T, S) => {
    g.slotScopeIds = T, d == null ? g.shapeFlag & 512 ? x.ctx.activate(
      g,
      F,
      I,
      D,
      S
    ) : wA(
      g,
      F,
      I,
      x,
      E,
      D,
      S
    ) : ie(d, g, S);
  }, wA = (d, g, F, I, x, E, D) => {
    const T = d.component = Su(
      d,
      I,
      x
    );
    if (Hi(d) && (T.ctx.renderer = Ot), Tu(T, !1, D), T.asyncDep) {
      if (x && x.registerDep(T, sA, D), !d.el) {
        const S = T.subTree = be(Ve);
        H(null, S, g, F), d.placeholder = S.el;
      }
    } else
      sA(
        T,
        d,
        g,
        F,
        x,
        E,
        D
      );
  }, ie = (d, g, F) => {
    const I = g.component = d.component;
    if (gu(d, g, F))
      if (I.asyncDep && !I.asyncResolved) {
        g.el = d.el, z(I, g, F);
        return;
      } else
        I.next = g, I.update();
    else
      g.el = d.el, I.vnode = g;
  }, sA = (d, g, F, I, x, E, D) => {
    const T = () => {
      if (d.isMounted) {
        let { next: R, bu: N, u: X, parent: tA, vnode: uA } = d;
        {
          const he = El(d);
          if (he) {
            R && (R.el = uA.el, z(d, R, D)), he.asyncDep.then(() => {
              XA(() => {
                d.isUnmounted || y();
              }, x);
            });
            return;
          }
        }
        let oA = R, FA;
        it(d, !1), R ? (R.el = uA.el, z(d, R, D)) : R = uA, N && rs(N), (FA = R.props && R.props.onVnodeBeforeUpdate) && we(FA, tA, R, uA), it(d, !0);
        const LA = io(d), ge = d.subTree;
        d.subTree = LA, U(
          ge,
          LA,
          // parent may have changed if it's in a teleport
          f(ge.el),
          // anchor may have changed if it's in a fragment
          de(ge),
          d,
          x,
          E
        ), R.el = LA.el, oA === null && hu(d, LA.el), X && XA(X, x), (FA = R.props && R.props.onVnodeUpdated) && XA(
          () => we(FA, tA, R, uA),
          x
        );
      } else {
        let R;
        const { el: N, props: X } = g, { bm: tA, m: uA, parent: oA, root: FA, type: LA } = d, ge = or(g);
        it(d, !1), tA && rs(tA), !ge && (R = X && X.onVnodeBeforeMount) && we(R, oA, g), it(d, !0);
        {
          FA.ce && FA.ce._hasShadowRoot() && FA.ce._injectChildStyle(
            LA,
            d.parent ? d.parent.type : void 0
          );
          const he = d.subTree = io(d);
          U(
            null,
            he,
            F,
            I,
            d,
            x,
            E
          ), g.el = he.el;
        }
        if (uA && XA(uA, x), !ge && (R = X && X.onVnodeMounted)) {
          const he = g;
          XA(
            () => we(R, oA, he),
            x
          );
        }
        (g.shapeFlag & 256 || oA && or(oA.vnode) && oA.vnode.shapeFlag & 256) && d.a && XA(d.a, x), d.isMounted = !0, g = F = I = null;
      }
    };
    d.scope.on();
    const S = d.effect = new Ra(T);
    d.scope.off();
    const y = d.update = S.run.bind(S), G = d.job = S.runIfDirty.bind(S);
    G.i = d, G.id = d.uid, S.scheduler = () => yi(G), it(d, !0), y();
  }, z = (d, g, F) => {
    g.component = d;
    const I = d.vnode.props;
    d.vnode = g, d.next = null, wu(d, g.props, I, F), Uu(d, g.children, F), Re(), qi(d), Me();
  }, AA = (d, g, F, I, x, E, D, T, S = !1) => {
    const y = d && d.children, G = d ? d.shapeFlag : 0, R = g.children, { patchFlag: N, shapeFlag: X } = g;
    if (N > 0) {
      if (N & 128) {
        YA(
          y,
          R,
          F,
          I,
          x,
          E,
          D,
          T,
          S
        );
        return;
      } else if (N & 256) {
        HA(
          y,
          R,
          F,
          I,
          x,
          E,
          D,
          T,
          S
        );
        return;
      }
    }
    X & 8 ? (G & 16 && ee(y, x, E), R !== y && l(F, R)) : G & 16 ? X & 16 ? YA(
      y,
      R,
      F,
      I,
      x,
      E,
      D,
      T,
      S
    ) : ee(y, x, E, !0) : (G & 8 && l(F, ""), X & 16 && Z(
      R,
      F,
      I,
      x,
      E,
      D,
      T,
      S
    ));
  }, HA = (d, g, F, I, x, E, D, T, S) => {
    d = d || ft, g = g || ft;
    const y = d.length, G = g.length, R = Math.min(y, G);
    let N;
    for (N = 0; N < R; N++) {
      const X = g[N] = S ? Ke(g[N]) : Ue(g[N]);
      U(
        d[N],
        X,
        F,
        null,
        x,
        E,
        D,
        T,
        S
      );
    }
    y > G ? ee(
      d,
      x,
      E,
      !0,
      !1,
      R
    ) : Z(
      g,
      F,
      I,
      x,
      E,
      D,
      T,
      S,
      R
    );
  }, YA = (d, g, F, I, x, E, D, T, S) => {
    let y = 0;
    const G = g.length;
    let R = d.length - 1, N = G - 1;
    for (; y <= R && y <= N; ) {
      const X = d[y], tA = g[y] = S ? Ke(g[y]) : Ue(g[y]);
      if (Nt(X, tA))
        U(
          X,
          tA,
          F,
          null,
          x,
          E,
          D,
          T,
          S
        );
      else
        break;
      y++;
    }
    for (; y <= R && y <= N; ) {
      const X = d[R], tA = g[N] = S ? Ke(g[N]) : Ue(g[N]);
      if (Nt(X, tA))
        U(
          X,
          tA,
          F,
          null,
          x,
          E,
          D,
          T,
          S
        );
      else
        break;
      R--, N--;
    }
    if (y > R) {
      if (y <= N) {
        const X = N + 1, tA = X < G ? g[X].el : I;
        for (; y <= N; )
          U(
            null,
            g[y] = S ? Ke(g[y]) : Ue(g[y]),
            F,
            tA,
            x,
            E,
            D,
            T,
            S
          ), y++;
      }
    } else if (y > N)
      for (; y <= R; )
        mA(d[y], x, E, !0), y++;
    else {
      const X = y, tA = y, uA = /* @__PURE__ */ new Map();
      for (y = tA; y <= N; y++) {
        const jA = g[y] = S ? Ke(g[y]) : Ue(g[y]);
        jA.key != null && uA.set(jA.key, y);
      }
      let oA, FA = 0;
      const LA = N - tA + 1;
      let ge = !1, he = 0;
      const Rt = new Array(LA);
      for (y = 0; y < LA; y++) Rt[y] = 0;
      for (y = X; y <= R; y++) {
        const jA = d[y];
        if (FA >= LA) {
          mA(jA, x, E, !0);
          continue;
        }
        let pe;
        if (jA.key != null)
          pe = uA.get(jA.key);
        else
          for (oA = tA; oA <= N; oA++)
            if (Rt[oA - tA] === 0 && Nt(jA, g[oA])) {
              pe = oA;
              break;
            }
        pe === void 0 ? mA(jA, x, E, !0) : (Rt[pe - tA] = y + 1, pe >= he ? he = pe : ge = !0, U(
          jA,
          g[pe],
          F,
          null,
          x,
          E,
          D,
          T,
          S
        ), FA++);
      }
      const Vi = ge ? xu(Rt) : ft;
      for (oA = Vi.length - 1, y = LA - 1; y >= 0; y--) {
        const jA = tA + y, pe = g[jA], Gi = g[jA + 1], Pi = jA + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gi.el || Hl(Gi)
        ) : I;
        Rt[y] === 0 ? U(
          null,
          pe,
          F,
          Pi,
          x,
          E,
          D,
          T,
          S
        ) : ge && (oA < 0 || y !== Vi[oA] ? MA(pe, F, Pi, 2) : oA--);
      }
    }
  }, MA = (d, g, F, I, x = null) => {
    const { el: E, type: D, transition: T, children: S, shapeFlag: y } = d;
    if (y & 6) {
      MA(d.component.subTree, g, F, I);
      return;
    }
    if (y & 128) {
      d.suspense.move(g, F, I);
      return;
    }
    if (y & 64) {
      D.move(d, g, F, Ot);
      return;
    }
    if (D === P) {
      r(E, g, F);
      for (let R = 0; R < S.length; R++)
        MA(S[R], g, F, I);
      r(d.anchor, g, F);
      return;
    }
    if (D === cn) {
      h(d, g, F);
      return;
    }
    if (I !== 2 && y & 1 && T)
      if (I === 0)
        T.persisted && !E[on] ? r(E, g, F) : (T.beforeEnter(E), r(E, g, F), XA(() => T.enter(E), x));
      else {
        const { leave: R, delayLeave: N, afterLeave: X } = T, tA = () => {
          d.ctx.isUnmounted ? s(E) : r(E, g, F);
        }, uA = () => {
          const oA = E._isLeaving || !!E[on];
          E._isLeaving && E[on](
            !0
            /* cancelled */
          ), T.persisted && !oA ? tA() : R(E, () => {
            tA(), X && X();
          });
        };
        N ? N(E, tA, uA) : uA();
      }
    else
      r(E, g, F);
  }, mA = (d, g, F, I = !1, x = !1) => {
    const {
      type: E,
      props: D,
      ref: T,
      children: S,
      dynamicChildren: y,
      shapeFlag: G,
      patchFlag: R,
      dirs: N,
      cacheIndex: X,
      memo: tA
    } = d;
    if ((R === -2 || y && y.hasOnce) && (x = !1), T != null && (Re(), ir(T, null, F, d, !0), Me()), X != null && (!d.ctx || d.ctx === g) && (g.renderCache[X] = void 0), G & 256) {
      g.ctx.deactivate(d);
      return;
    }
    const uA = G & 1 && N, oA = !or(d);
    let FA;
    if (oA && (FA = D && D.onVnodeBeforeUnmount) && we(FA, g, d), G & 6)
      oe(d.component, F, I);
    else {
      if (G & 128) {
        d.suspense.unmount(F, I);
        return;
      }
      uA && nt(d, null, g, "beforeUnmount"), G & 64 ? d.type.remove(
        d,
        g,
        F,
        Ot,
        I
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== P || R > 0 && R & 64) ? ee(
        y,
        g,
        F,
        !1,
        !0
      ) : (E === P && R & 384 || !x && G & 16) && ee(S, g, F), I && Ae(d);
    }
    const LA = tA != null && X == null;
    (oA && (FA = D && D.onVnodeUnmounted) || uA || LA) && XA(() => {
      FA && we(FA, g, d), uA && nt(d, null, g, "unmounted"), LA && (d.el = null);
    }, F);
  }, Ae = (d) => {
    const { type: g, el: F, anchor: I, transition: x } = d;
    if (g === P) {
      He(F, I);
      return;
    }
    if (g === cn) {
      m(d), x && !x.persisted && x.afterLeave && x.afterLeave();
      return;
    }
    const E = () => {
      s(F), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (d.shapeFlag & 1 && x && !x.persisted) {
      const { leave: D, delayLeave: T } = x, S = () => D(F, E);
      T ? T(d.el, E, S) : S();
    } else
      E();
  }, He = (d, g) => {
    let F;
    for (; d !== g; )
      F = B(d), s(d), d = F;
    s(g);
  }, oe = (d, g, F) => {
    const { bum: I, scope: x, job: E, subTree: D, um: T, m: S, a: y } = d;
    lo(S), lo(y), I && rs(I), x.stop(), E ? (E.flags |= 8, mA(D, d, g, F)) : d.vnode.el && D && (D.transition = d.vnode.transition, mA(D, d, g, F)), T && XA(T, g), XA(() => {
      d.isUnmounted = !0;
    }, g);
  }, ee = (d, g, F, I = !1, x = !1, E = 0) => {
    for (let D = E; D < d.length; D++)
      mA(d[D], g, F, I, x);
  }, de = (d) => {
    if (d.shapeFlag & 6)
      return de(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const g = B(d.anchor || d.el), F = g && g[kf];
    return F ? B(F) : g;
  };
  let $s = !1;
  const Ni = (d, g, F) => {
    let I;
    d == null ? g._vnode && (mA(g._vnode, null, null, !0), I = g._vnode.component) : U(
      g._vnode || null,
      d,
      g,
      null,
      null,
      null,
      F
    ), g._vnode = d, $s || ($s = !0, qi(I), nl(), $s = !1);
  }, Ot = {
    p: U,
    um: mA,
    m: MA,
    r: Ae,
    mt: wA,
    mc: Z,
    pc: AA,
    pbc: iA,
    n: de,
    o: A
  };
  return {
    render: Ni,
    hydrate: void 0,
    createApp: lu(Ni)
  };
}
function ln({ type: A, props: e }, t) {
  return t === "svg" && A === "foreignObject" || t === "mathml" && A === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function it({ effect: A, job: e }, t) {
  t ? (A.flags |= 32, e.flags |= 4) : (A.flags &= -33, e.flags &= -5);
}
function mu(A, e) {
  return (!A || A && !A.pendingBranch) && e && !e.persisted;
}
function yl(A, e, t = !1) {
  const r = A.children, s = e.children;
  if (J(r) && J(s))
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      let o = s[n];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[n] = Ke(s[n]), o.el = i.el), !t && o.patchFlag !== -2 && yl(i, o)), o.type === Ns && (o.patchFlag === -1 && (o = s[n] = Ke(o)), o.el = i.el), o.type === Ve && !o.el && (o.el = i.el);
    }
}
function xu(A) {
  const e = A.slice(), t = [0];
  let r, s, n, i, o;
  const a = A.length;
  for (r = 0; r < a; r++) {
    const c = A[r];
    if (c !== 0) {
      if (s = t[t.length - 1], A[s] < c) {
        e[r] = s, t.push(r);
        continue;
      }
      for (n = 0, i = t.length - 1; n < i; )
        o = n + i >> 1, A[t[o]] < c ? n = o + 1 : i = o;
      c < A[t[n]] && (n > 0 && (e[r] = t[n - 1]), t[n] = r);
    }
  }
  for (n = t.length, i = t[n - 1]; n-- > 0; )
    t[n] = i, i = e[i];
  return t;
}
function El(A) {
  const e = A.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : El(e);
}
function lo(A) {
  if (A)
    for (let e = 0; e < A.length; e++)
      A[e].flags |= 8;
}
function Hl(A) {
  if (A.placeholder)
    return A.placeholder;
  const e = A.component;
  return e ? Hl(e.subTree) : null;
}
const Il = (A) => A.__isSuspense;
function yu(A, e) {
  e && e.pendingBranch ? J(A) ? e.effects.push(...A) : e.effects.push(A) : _f(A);
}
const P = /* @__PURE__ */ Symbol.for("v-fgt"), Ns = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), cn = /* @__PURE__ */ Symbol.for("v-stc"), gt = [];
let $A = null;
function p(A = !1) {
  gt.push($A = A ? null : []);
}
function _l() {
  gt.pop(), $A = gt[gt.length - 1] || null;
}
let pr = 1;
function co(A, e = !1) {
  pr += A, A < 0 && $A && e && ($A.hasOnce = !0);
}
function Ll(A) {
  return A.dynamicChildren = pr > 0 ? $A || ft : null, _l(), pr > 0 && $A && $A.push(A), A;
}
function w(A, e, t, r, s, n) {
  return Ll(
    u(
      A,
      e,
      t,
      r,
      s,
      n,
      !0
    )
  );
}
function Sl(A, e, t, r, s) {
  return Ll(
    be(
      A,
      e,
      t,
      r,
      s,
      !0
    )
  );
}
function Kl(A) {
  return A ? A.__v_isVNode === !0 : !1;
}
function Nt(A, e) {
  return A.type === e.type && A.key === e.key;
}
const Tl = ({ key: A }) => A ?? null, ns = ({
  ref: A,
  ref_key: e,
  ref_for: t
}) => (typeof A == "number" && (A = "" + A), A != null ? pA(A) || /* @__PURE__ */ JA(A) || j(A) ? { i: qA, r: A, k: e, f: !!t } : A : null);
function u(A, e = null, t = null, r = 0, s = null, n = A === P ? 0 : 1, i = !1, o = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: e,
    key: e && Tl(e),
    ref: e && ns(e),
    scopeId: ol,
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
    patchFlag: r,
    dynamicProps: s,
    dynamicChildren: null,
    appContext: null,
    ctx: qA
  };
  return o ? (hs(a, t), n & 128 && A.normalize(a)) : t && (a.shapeFlag |= pA(t) ? 8 : 16), pr > 0 && // avoid a block node from tracking itself
  !i && // has current parent block
  $A && // presence of a patch flag indicates this node needs patching on updates.
  // component nodes also should always be patched, because even if the
  // component doesn't need to update, it needs to persist the instance on to
  // the next vnode so that it can be properly unmounted later.
  (a.patchFlag > 0 || n & 6) && // the EVENTS flag is only for hydration and if it is the only flag, the
  // vnode should not be considered dynamic due to handler caching.
  a.patchFlag !== 32 && $A.push(a), a;
}
const be = Eu;
function Eu(A, e = null, t = null, r = 0, s = null, n = !1) {
  if ((!A || A === Au) && (A = Ve), Kl(A)) {
    const o = Kt(
      A,
      e,
      !0
      /* mergeRef: true */
    );
    return t && hs(o, t), pr > 0 && !n && $A && (o.shapeFlag & 6 ? $A[$A.indexOf(A)] = o : $A.push(o)), o.patchFlag = -2, o;
  }
  if (Mu(A) && (A = A.__vccOpts), e) {
    e = Hu(e);
    let { class: o, style: a } = e;
    o && !pA(o) && (e.class = $(o)), fA(a) && (/* @__PURE__ */ xi(a) && !J(a) && (a = vA({}, a)), e.style = Ts(a));
  }
  const i = pA(A) ? 1 : Il(A) ? 128 : Os(A) ? 64 : fA(A) ? 4 : j(A) ? 2 : 0;
  return u(
    A,
    e,
    t,
    r,
    s,
    i,
    n,
    !0
  );
}
function Hu(A) {
  return A ? /* @__PURE__ */ xi(A) || vl(A) ? vA({}, A) : A : null;
}
function Kt(A, e, t = !1, r = !1) {
  const { props: s, ref: n, patchFlag: i, children: o, transition: a } = A, c = e ? Iu(s || {}, e) : s, l = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A.type,
    props: c,
    key: c && Tl(c),
    ref: e && e.ref ? (
      // #2078 in the case of <component :is="vnode" ref="extra"/>
      // if the vnode itself already has a ref, cloneVNode will need to merge
      // the refs so the single vnode can be set on multiple refs
      t && n ? J(n) ? n.concat(ns(e)) : [n, ns(e)] : ns(e)
    ) : n,
    scopeId: A.scopeId,
    slotScopeIds: A.slotScopeIds,
    children: o,
    target: A.target,
    targetStart: A.targetStart,
    targetAnchor: A.targetAnchor,
    staticCount: A.staticCount,
    shapeFlag: A.shapeFlag,
    // if the vnode is cloned with extra props, we can no longer assume its
    // existing patch flag to be reliable and need to add the FULL_PROPS flag.
    // note: preserve flag for fragments since they use the flag for children
    // fast paths only.
    patchFlag: e && A.type !== P ? i === -1 ? 16 : i | 16 : i,
    dynamicProps: A.dynamicProps,
    dynamicChildren: A.dynamicChildren,
    appContext: A.appContext,
    dirs: A.dirs,
    transition: a,
    // These should technically only be non-null on mounted VNodes. However,
    // they *should* be copied for kept-alive vnodes. So we just always copy
    // them since them being non-null during a mount doesn't affect the logic as
    // they will simply be overwritten.
    component: A.component,
    suspense: A.suspense,
    ssContent: A.ssContent && Kt(A.ssContent),
    ssFallback: A.ssFallback && Kt(A.ssFallback),
    placeholder: A.placeholder,
    el: A.el,
    anchor: A.anchor,
    ctx: A.ctx,
    ce: A.ce,
    cacheIndex: A.cacheIndex
  };
  return a && r && Ei(
    l,
    a.clone(l)
  ), l;
}
function Y(A = " ", e = 0) {
  return be(Ns, null, A, e);
}
function _(A = "", e = !1) {
  return e ? (p(), Sl(Ve, null, A)) : be(Ve, null, A);
}
function Ue(A) {
  return A == null || typeof A == "boolean" ? be(Ve) : J(A) ? be(
    P,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : Kl(A) ? Ke(A) : be(Ns, null, String(A));
}
function Ke(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : Kt(A);
}
function hs(A, e) {
  let t = 0;
  const { shapeFlag: r } = A;
  if (e == null)
    e = null;
  else if (J(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), hs(A, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !vl(e) ? e._ctx = qA : s === 3 && qA && (qA.slots._ === 1 ? e._ = 1 : (e._ = 2, A.patchFlag |= 1024));
    }
  else if (j(e)) {
    if (r & 65) {
      hs(A, { default: e });
      return;
    }
    e = { default: e, _ctx: qA }, t = 32;
  } else
    e = String(e), r & 64 ? (t = 16, e = [Y(e)]) : t = 8;
  A.children = e, A.shapeFlag |= t;
}
function Iu(...A) {
  const e = {};
  for (let t = 0; t < A.length; t++) {
    const r = A[t];
    for (const s in r)
      if (s === "class")
        e.class !== r.class && (e.class = $([e.class, r.class]));
      else if (s === "style")
        e.style = Ts([e.style, r.style]);
      else if (Hs(s)) {
        const n = e[s], i = r[s];
        i && n !== i && !(J(n) && n.includes(i)) ? e[s] = n ? [].concat(n, i) : i : i == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !Is(s) && (e[s] = i);
      } else s !== "" && (e[s] = r[s]);
  }
  return e;
}
function we(A, e, t, r = null) {
  ue(A, e, 7, [
    t,
    r
  ]);
}
const _u = hl();
let Lu = 0;
function Su(A, e, t) {
  const r = A.type, s = (e ? e.appContext : A.appContext) || _u, n = {
    uid: Lu++,
    vnode: A,
    type: r,
    parent: e,
    appContext: s,
    root: null,
    // to be immediately set
    next: null,
    subTree: null,
    // will be set synchronously right after creation
    effect: null,
    update: null,
    // will be set synchronously right after creation
    job: null,
    scope: new tf(
      !0
      /* detached */
    ),
    render: null,
    proxy: null,
    exposed: null,
    exposeProxy: null,
    withProxy: null,
    provides: e ? e.provides : Object.create(s.provides),
    ids: e ? e.ids : ["", 0, 0],
    accessCache: null,
    renderCache: [],
    // local resolved assets
    components: null,
    directives: null,
    // resolved props and emits options
    propsOptions: Fl(r, s),
    emitsOptions: pl(r, s),
    // emit
    emit: null,
    // to be set immediately
    emitted: null,
    // props default value
    propsDefaults: BA,
    // inheritAttrs
    inheritAttrs: r.inheritAttrs,
    // state
    ctx: BA,
    data: BA,
    props: BA,
    attrs: BA,
    slots: BA,
    refs: BA,
    setupState: BA,
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
  return n.ctx = { _: n }, n.root = e ? e.root : n, n.emit = fu.bind(null, n), A.ce && A.ce(n), n;
}
let RA = null;
const Ku = () => RA || qA;
let ps, wr;
{
  const A = Ks(), e = (t, r) => {
    let s;
    return (s = A[t]) || (s = A[t] = []), s.push(r), (n) => {
      s.length > 1 ? s.forEach((i) => i(n)) : s[0](n);
    };
  };
  ps = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => RA = t
  ), wr = e(
    "__VUE_SSR_SETTERS__",
    (t) => Qr = t
  );
}
const mr = (A) => {
  const e = RA;
  return ps(A), A.scope.on(), () => {
    A.scope.off(), ps(e);
  };
}, fo = () => {
  RA && RA.scope.off(), ps(null);
};
function Dl(A) {
  return A.vnode.shapeFlag & 4;
}
let Qr = !1;
function Tu(A, e = !1, t = !1) {
  e && wr(e);
  const { props: r, children: s } = A.vnode, n = Dl(A);
  pu(A, r, n, e), vu(A, s, t || e);
  const i = n ? Du(A, e) : void 0;
  return e && wr(!1), i;
}
function Du(A, e) {
  const t = A.type;
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = new Proxy(A.ctx, tu);
  const { setup: r } = t;
  if (r) {
    Re();
    const s = A.setupContext = r.length > 1 ? Ou(A) : null, n = mr(A), i = br(
      r,
      A,
      0,
      [
        A.props,
        s
      ]
    ), o = La(i);
    if (Me(), n(), (o || A.sp) && !or(A) && fl(A), o) {
      if (i.then(fo, fo), e)
        return i.then((a) => {
          wr(!0);
          try {
            uo(A, a, e);
          } finally {
            wr(!1);
          }
        }).catch((a) => {
          ks(a, A, 0);
        });
      A.asyncDep = i;
    } else
      uo(A, i);
  } else
    kl(A);
}
function uo(A, e, t) {
  j(e) ? A.type.__ssrInlineRender ? A.ssrRender = e : A.render = e : fA(e) && (A.setupState = el(e)), kl(A);
}
function kl(A, e, t) {
  const r = A.type;
  A.render || (A.render = r.render || Fe);
  {
    const s = mr(A);
    Re();
    try {
      ru(A);
    } finally {
      Me(), s();
    }
  }
}
const ku = {
  get(A, e) {
    return OA(A, "get", ""), A[e];
  }
};
function Ou(A) {
  const e = (t) => {
    A.exposed = t || {};
  };
  return {
    attrs: new Proxy(A.attrs, ku),
    slots: A.slots,
    emit: A.emit,
    expose: e
  };
}
function Vs(A) {
  return A.exposed ? A.exposeProxy || (A.exposeProxy = new Proxy(el(Ff(A.exposed)), {
    get(e, t) {
      if (t in e)
        return e[t];
      if (t in ar)
        return ar[t](A);
    },
    has(e, t) {
      return t in e || t in ar;
    }
  })) : A.proxy;
}
function Ru(A, e = !0) {
  return j(A) ? A.displayName || A.name : A.name || e && A.__name;
}
function Mu(A) {
  return j(A) && "__vccOpts" in A;
}
const Nu = (A, e) => /* @__PURE__ */ xf(A, e, Qr), Vu = "3.5.43";
/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/
let Jn;
const Bo = typeof window < "u" && window.trustedTypes;
if (Bo)
  try {
    Jn = /* @__PURE__ */ Bo.createPolicy("vue", {
      createHTML: (A) => A
    });
  } catch {
  }
const Ol = Jn ? (A) => Jn.createHTML(A) : (A) => A, Gu = "http://www.w3.org/2000/svg", Pu = "http://www.w3.org/1998/Math/MathML", Se = typeof document < "u" ? document : null, go = Se && /* @__PURE__ */ Se.createElement("template"), Ju = {
  insert: (A, e, t) => {
    e.insertBefore(A, t || null);
  },
  remove: (A) => {
    const e = A.parentNode;
    e && e.removeChild(A);
  },
  createElement: (A, e, t, r) => {
    const s = e === "svg" ? Se.createElementNS(Gu, A) : e === "mathml" ? Se.createElementNS(Pu, A) : t ? Se.createElement(A, { is: t }) : Se.createElement(A);
    return A === "select" && r && r.multiple != null && s.setAttribute("multiple", r.multiple), s;
  },
  createText: (A) => Se.createTextNode(A),
  createComment: (A) => Se.createComment(A),
  setText: (A, e) => {
    A.nodeValue = e;
  },
  setElementText: (A, e) => {
    A.textContent = e;
  },
  parentNode: (A) => A.parentNode,
  nextSibling: (A) => A.nextSibling,
  querySelector: (A) => Se.querySelector(A),
  setScopeId(A, e) {
    A.setAttribute(e, "");
  },
  // __UNSAFE__
  // Reason: innerHTML.
  // Static content here can only come from compiled templates.
  // As long as the user only uses trusted templates, this is safe.
  insertStaticContent(A, e, t, r, s, n) {
    const i = t ? t.previousSibling : e.lastChild;
    if (s && (s === n || s.nextSibling))
      for (; e.insertBefore(s.cloneNode(!0), t), !(s === n || !(s = s.nextSibling)); )
        ;
    else {
      go.innerHTML = Ol(
        r === "svg" ? `<svg>${A}</svg>` : r === "mathml" ? `<math>${A}</math>` : A
      );
      const o = go.content;
      if (r === "svg" || r === "mathml") {
        const a = o.firstChild;
        for (; a.firstChild; )
          o.appendChild(a.firstChild);
        o.removeChild(a);
      }
      e.insertBefore(o, t);
    }
    return [
      // first
      i ? i.nextSibling : e.firstChild,
      // last
      t ? t.previousSibling : e.lastChild
    ];
  }
}, Xu = /* @__PURE__ */ Symbol("_vtc");
function Wu(A, e, t) {
  const r = A[Xu];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? A.removeAttribute("class") : t ? A.setAttribute("class", e) : A.className = e;
}
const ho = /* @__PURE__ */ Symbol("_vod"), Yu = /* @__PURE__ */ Symbol("_vsh"), ju = /* @__PURE__ */ Symbol(""), Zu = /(?:^|;)\s*display\s*:/;
function zu(A, e, t) {
  const r = A.style, s = pA(t);
  let n = !1;
  if (t && !s) {
    if (e)
      if (pA(e))
        for (const i of e.split(";")) {
          const o = i.slice(0, i.indexOf(":")).trim();
          t[o] == null && Yt(r, o, "");
        }
      else
        for (const i in e)
          t[i] == null && Yt(r, i, "");
    for (const i in t) {
      i === "display" && (n = !0);
      const o = t[i];
      o != null ? $u(
        A,
        i,
        !pA(e) && e ? e[i] : void 0,
        o
      ) || Yt(r, i, o) : Yt(r, i, "");
    }
  } else if (s) {
    if (e !== t) {
      const i = r[ju];
      i && (t += ";" + i), r.cssText = t, n = Zu.test(t);
    }
  } else e && A.removeAttribute("style");
  ho in A && (A[ho] = n ? r.display : "", A[Yu] && (r.display = "none"));
}
const Lr = /\s*!important$/;
function Yt(A, e, t) {
  if (J(t))
    t.forEach((r) => Yt(A, e, r));
  else if (t == null && (t = ""), e.startsWith("--"))
    Lr.test(t) ? A.setProperty(e, t.replace(Lr, ""), "important") : A.setProperty(e, t);
  else {
    const r = qu(A, e);
    Lr.test(t) ? A.setProperty(
      zA(r),
      t.replace(Lr, ""),
      "important"
    ) : A[r] = t;
  }
}
const po = ["Webkit", "Moz", "ms"], fn = {};
function qu(A, e) {
  const t = fn[e];
  if (t)
    return t;
  let r = _A(e);
  if (r !== "filter" && r in A)
    return fn[e] = r;
  r = Ss(r);
  for (let s = 0; s < po.length; s++) {
    const n = po[s] + r;
    if (n in A)
      return fn[e] = n;
  }
  return e;
}
function $u(A, e, t, r) {
  return A.tagName === "TEXTAREA" && (e === "width" || e === "height") && pA(r) && t === r;
}
const wo = "http://www.w3.org/1999/xlink";
function Qo(A, e, t, r, s, n = $c(e)) {
  r && e.startsWith("xlink:") ? t == null ? A.removeAttributeNS(wo, e.slice(6, e.length)) : A.setAttributeNS(wo, e, t) : t == null || n && !Ta(t) ? A.removeAttribute(e) : A.setAttribute(
    e,
    n ? "" : me(t) ? String(t) : t
  );
}
function Co(A, e, t, r, s) {
  if (e === "innerHTML" || e === "textContent") {
    t != null && (A[e] = e === "innerHTML" ? Ol(t) : t);
    return;
  }
  const n = A.tagName;
  if (e === "value" && n !== "PROGRESS" && // custom elements may use _value internally
  !n.includes("-")) {
    const o = n === "OPTION" ? A.getAttribute("value") || "" : A.value, a = t == null ? (
      // #11647: value should be set as empty string for null and undefined,
      // but <input type="checkbox"> should be set as 'on'.
      A.type === "checkbox" ? "on" : ""
    ) : String(t);
    (o !== a || !("_value" in A)) && (A.value = a), t == null && A.removeAttribute(e), A._value = t;
    return;
  }
  let i = !1;
  if (t === "" || t == null) {
    const o = typeof A[e];
    o === "boolean" ? t = Ta(t) : t == null && o === "string" ? (t = "", i = !0) : o === "number" && (t = 0, i = !0);
  }
  try {
    A[e] = t;
  } catch {
  }
  i && A.removeAttribute(s || e);
}
function lt(A, e, t, r) {
  A.addEventListener(e, t, r);
}
function AB(A, e, t, r) {
  A.removeEventListener(e, t, r);
}
const vo = /* @__PURE__ */ Symbol("_vei");
function eB(A, e, t, r, s = null) {
  const n = A[vo] || (A[vo] = {}), i = n[e];
  if (r && i)
    i.value = r;
  else {
    const [o, a] = sB(e);
    if (r) {
      const c = n[e] = oB(
        r,
        s
      );
      lt(A, o, c, a);
    } else i && (AB(A, o, i, a), n[e] = void 0);
  }
}
const tB = /(Once|Passive|Capture)$/, rB = /^on:?(?:Once|Passive|Capture)$/;
function sB(A) {
  let e, t;
  for (; (t = A.match(tB)) && !rB.test(A); )
    e || (e = {}), A = A.slice(0, A.length - t[1].length), e[t[1].toLowerCase()] = !0;
  return [A[2] === ":" ? A.slice(3) : zA(A.slice(2)), e];
}
let un = 0;
const nB = /* @__PURE__ */ Promise.resolve(), iB = () => un || (nB.then(() => un = 0), un = Date.now());
function oB(A, e) {
  const t = (r) => {
    if (!r._vts)
      r._vts = Date.now();
    else if (r._vts <= t.attached)
      return;
    const s = t.value;
    if (J(s)) {
      const n = r.stopImmediatePropagation;
      r.stopImmediatePropagation = () => {
        n.call(r), r._stopped = !0;
      };
      const i = s.slice(), o = [r];
      for (let a = 0; a < i.length && !r._stopped; a++) {
        const c = i[a];
        c && ue(
          c,
          e,
          5,
          o
        );
      }
    } else
      ue(
        s,
        e,
        5,
        [r]
      );
  };
  return t.value = A, t.attached = iB(), t;
}
const Uo = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // lowercase letter
A.charCodeAt(2) > 96 && A.charCodeAt(2) < 123, aB = (A, e, t, r, s, n) => {
  const i = s === "svg";
  e === "class" ? Wu(A, r, i) : e === "style" ? zu(A, t, r) : Hs(e) ? Is(e) || eB(A, e, t, r, n) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : lB(A, e, r, i)) ? (Co(A, e, r), !A.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Qo(A, e, r, i, n, e !== "value")) : /* #11081 force set props for possible async custom element */ A._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (cB(A, e) || // @ts-expect-error _def is private
  A._def.__asyncLoader && (/[A-Z]/.test(e) || !pA(r))) ? Co(A, _A(e), r, n, e) : (e === "true-value" ? A._trueValue = r : e === "false-value" && (A._falseValue = r), Qo(A, e, r, i));
};
function lB(A, e, t, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in A && Uo(e) && j(t));
  if (e === "spellcheck" || e === "draggable" || e === "translate" || e === "autocorrect" || e === "sandbox" && A.tagName === "IFRAME" || e === "form" || e === "list" && A.tagName === "INPUT" || e === "type" && A.tagName === "TEXTAREA")
    return !1;
  if (e === "width" || e === "height") {
    const s = A.tagName;
    if (s === "IMG" || s === "VIDEO" || s === "CANVAS" || s === "SOURCE")
      return !1;
  }
  return Uo(e) && pA(t) ? !1 : e in A;
}
function cB(A, e) {
  const t = (
    // @ts-expect-error _def is private
    A._def.props
  );
  if (!t)
    return !1;
  const r = _A(e);
  return Array.isArray(t) ? t.some((s) => _A(s) === r) : Object.keys(t).some((s) => _A(s) === r);
}
const Fo = {};
// @__NO_SIDE_EFFECTS__
function bo(A, e, t) {
  let r = /* @__PURE__ */ Rf(A, e);
  _s(r) && (r = vA({}, r, e));
  class s extends Li {
    constructor(i) {
      super(r, i, t);
    }
  }
  return s.def = r, s;
}
const fB = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Li extends fB {
  constructor(e, t = {}, r = Ho) {
    super(), this._def = e, this._props = t, this._createApp = r, this._isVueCE = !0, this._instance = null, this._app = null, this._nonce = this._def.nonce, this._connected = !1, this._resolved = !1, this._patching = !1, this._dirty = !1, this._numberProps = null, this._styleChildren = /* @__PURE__ */ new WeakSet(), this._styleAnchors = /* @__PURE__ */ new WeakMap(), this._ob = null, this.shadowRoot && r !== Ho ? this._root = this.shadowRoot : e.shadowRoot !== !1 ? (this.attachShadow(
      vA({}, e.shadowRootOptions, {
        mode: "open"
      })
    ), this._root = this.shadowRoot) : this._root = this;
  }
  connectedCallback() {
    if (!this.isConnected) return;
    !this.shadowRoot && !this._resolved && this._parseSlots(), this._connected = !0;
    let e = this;
    for (; e = e && // #12479 should check assignedSlot first to get correct parent
    (e.assignedSlot || e.parentNode || e.host); )
      if (e instanceof Li) {
        this._parent = e;
        break;
      }
    this._instance || (this._resolved ? this._mount(this._def) : e && e._pendingResolve ? this._pendingResolve = e._pendingResolve.then(() => {
      if (this._pendingResolve = void 0, this.isConnected)
        return this._resolveDef();
    }) : this._resolveDef());
  }
  _setParent(e = this._parent) {
    e && (this._instance.parent = e._instance, this._inheritParentContext(e));
  }
  _inheritParentContext(e = this._parent) {
    e && this._app && Object.setPrototypeOf(
      this._app._context.provides,
      e._instance.provides
    );
  }
  disconnectedCallback() {
    this._connected = !1, rl(() => {
      this._connected || (this._ob && (this._ob.disconnect(), this._ob = null), this._app && this._app.unmount(), this._instance && (this._instance.ce = void 0), this._app = this._instance = null, this._teleportTargets && (this._teleportTargets.clear(), this._teleportTargets = void 0));
    });
  }
  _processMutations(e) {
    for (const t of e)
      this._setAttr(t.attributeName);
  }
  /**
   * resolve inner component definition (handle possible async component)
   */
  _resolveDef() {
    if (this._pendingResolve)
      return this._pendingResolve;
    for (let r = 0; r < this.attributes.length; r++)
      this._setAttr(this.attributes[r].name);
    this._ob = new MutationObserver(this._processMutations.bind(this)), this._ob.observe(this, { attributes: !0 });
    const e = (r, s = !1) => {
      this._resolved = !0, this._pendingResolve = void 0;
      const { props: n, styles: i } = r;
      let o;
      if (n && !J(n))
        for (const a in n) {
          const c = n[a];
          (c === Number || c && c.type === Number) && (a in this._props && (this._props[a] = Xi(this._props[a])), (o || (o = /* @__PURE__ */ Object.create(null)))[_A(a)] = !0);
        }
      this._numberProps = o, this._resolveProps(r), this.shadowRoot && this._applyStyles(i), this._mount(r);
    }, t = this._def.__asyncLoader;
    if (t)
      return this._pendingResolve = t().then((r) => {
        r.configureApp = this._def.configureApp, e(this._def = r, !0);
      }), this._pendingResolve;
    e(this._def);
  }
  _mount(e) {
    this._app = this._createApp(e), this._inheritParentContext(), e.configureApp && e.configureApp(this._app), this._app._ceVNode = this._createVNode(), this._app.mount(this._root);
    const t = this._instance && this._instance.exposed;
    if (t)
      for (const r in t)
        rA(this, r) || Object.defineProperty(this, r, {
          // unwrap ref to be consistent with public instance behavior
          get: () => Al(t[r])
        });
  }
  _resolveProps(e) {
    const { props: t } = e, r = J(t) ? t : Object.keys(t || {});
    for (const s of Object.keys(this))
      s[0] !== "_" && r.includes(s) && this._setProp(s, this[s]);
    for (const s of r.map(_A))
      Object.defineProperty(this, s, {
        get() {
          return this._getProp(s);
        },
        set(n) {
          this._setProp(s, n, !0, !this._patching);
        }
      });
  }
  _setAttr(e) {
    if (e.startsWith("data-v-")) return;
    const t = this.hasAttribute(e);
    let r = t ? this.getAttribute(e) : Fo;
    const s = _A(e);
    t && this._numberProps && this._numberProps[s] && (r = Xi(r)), this._setProp(s, r, !1, !0);
  }
  /**
   * @internal
   */
  _getProp(e) {
    return this._props[e];
  }
  /**
   * @internal
   */
  _setProp(e, t, r = !0, s = !1) {
    if (t !== this._props[e] && (this._dirty = !0, t === Fo ? delete this._props[e] : (this._props[e] = t, e === "key" && this._app && (this._app._ceVNode.key = t)), s && this._instance && this._update(), r)) {
      const n = this._ob;
      n && (this._processMutations(n.takeRecords()), n.disconnect()), t === !0 ? this.setAttribute(zA(e), "") : typeof t == "string" || typeof t == "number" ? this.setAttribute(zA(e), t + "") : t || this.removeAttribute(zA(e)), n && n.observe(this, { attributes: !0 });
    }
  }
  _update() {
    const e = this._createVNode();
    this._app && (e.appContext = this._app._context), wB(e, this._root);
  }
  _createVNode() {
    const e = {};
    this.shadowRoot || (e.onVnodeMounted = e.onVnodeUpdated = this._renderSlots.bind(this));
    const t = be(this._def, vA(e, this._props));
    return this._instance || (t.ce = (r) => {
      this._instance = r, r.ce = this, r.isCE = !0;
      const s = (n, i) => {
        this.dispatchEvent(
          new CustomEvent(
            n,
            _s(i[0]) ? vA({ detail: i }, i[0]) : { detail: i }
          )
        );
      };
      r.emit = (n, ...i) => {
        s(n, i), zA(n) !== n && s(zA(n), i);
      }, this._setParent();
    }), t;
  }
  _applyStyles(e, t, r) {
    if (!e) return;
    if (t) {
      if (t === this._def || this._styleChildren.has(t))
        return;
      this._styleChildren.add(t);
    }
    const s = this._nonce, n = this.shadowRoot, i = r ? this._getStyleAnchor(r) || this._getStyleAnchor(this._def) : this._getRootStyleInsertionAnchor(n);
    let o = null;
    for (let a = e.length - 1; a >= 0; a--) {
      const c = document.createElement("style");
      s && c.setAttribute("nonce", s), c.textContent = e[a], n.insertBefore(c, o || i), o = c, a === 0 && (r || this._styleAnchors.set(this._def, c), t && this._styleAnchors.set(t, c));
    }
  }
  _getStyleAnchor(e) {
    if (!e)
      return null;
    const t = this._styleAnchors.get(e);
    return t && t.parentNode === this.shadowRoot ? t : (t && this._styleAnchors.delete(e), null);
  }
  _getRootStyleInsertionAnchor(e) {
    for (let t = 0; t < e.childNodes.length; t++) {
      const r = e.childNodes[t];
      if (!(r instanceof HTMLStyleElement))
        return r;
    }
    return null;
  }
  /**
   * Only called when shadowRoot is false
   */
  _parseSlots() {
    const e = this._slots = {};
    let t;
    for (; t = this.firstChild; ) {
      const r = t.nodeType === 1 && t.getAttribute("slot") || "default";
      (e[r] || (e[r] = [])).push(t), this.removeChild(t);
    }
  }
  /**
   * Only called when shadowRoot is false
   */
  _renderSlots() {
    const e = this._getSlots(), t = this._instance.type.__scopeId;
    for (let r = 0; r < e.length; r++) {
      const s = e[r], n = s.getAttribute("name") || "default", i = this._slots[n], o = s.parentNode;
      if (i)
        for (const a of i) {
          if (t && a.nodeType === 1) {
            const c = t + "-s", l = document.createTreeWalker(a, 1);
            a.setAttribute(c, "");
            let f;
            for (; f = l.nextNode(); )
              f.setAttribute(c, "");
          }
          o.insertBefore(a, s);
        }
      else
        for (; s.firstChild; ) o.insertBefore(s.firstChild, s);
      o.removeChild(s);
    }
  }
  /**
   * @internal
   */
  _getSlots() {
    const e = [this];
    this._teleportTargets && e.push(...this._teleportTargets);
    const t = /* @__PURE__ */ new Set();
    for (const r of e) {
      const s = r.querySelectorAll("slot");
      for (let n = 0; n < s.length; n++)
        t.add(s[n]);
    }
    return Array.from(t);
  }
  /**
   * @internal
   */
  _injectChildStyle(e, t) {
    this._applyStyles(e.styles, e, t);
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
  _removeChildStyle(e) {
  }
}
const ws = (A) => {
  const e = A.props["onUpdate:modelValue"] || !1;
  return J(e) ? (t) => rs(e, t) : e;
};
function uB(A) {
  A.target.composing = !0;
}
function mo(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const ut = /* @__PURE__ */ Symbol("_assign"), Sr = /* @__PURE__ */ Symbol("_initialValue");
function Bn(A, e, t) {
  return e && (A = A.trim()), t && (A = Qi(A)), A;
}
const is = {
  created(A, { modifiers: { lazy: e, trim: t, number: r } }, s) {
    A.parentNode && (A.type === "text" ? A[Sr] = A.defaultValue.replace(/[\r\n]/g, "") : A.type === "textarea" && (A[Sr] = A.defaultValue.replace(/\r\n?/g, `
`))), A[ut] = ws(s);
    const n = r || s.props && s.props.type === "number";
    lt(A, e ? "change" : "input", (i) => {
      i.target.composing || A[ut](Bn(A.value, t, n));
    }), (t || n) && lt(A, "change", () => {
      A.value = Bn(A.value, t, n);
    }), e || (lt(A, "compositionstart", uB), lt(A, "compositionend", mo), lt(A, "change", mo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e, modifiers: { trim: t, number: r } }) {
    const s = e ?? "", n = A[Sr];
    delete A[Sr], n !== void 0 && (A.type === "text" || A.type === "textarea") && A.value !== n ? A[ut](Bn(A.value, t, r)) : A.value = s;
  },
  beforeUpdate(A, { value: e, oldValue: t, modifiers: { lazy: r, trim: s, number: n } }, i) {
    if (A[ut] = ws(i), A.composing) return;
    const o = (n || A.type === "number") && !/^0\d/.test(A.value) ? Qi(A.value) : A.value, a = e ?? "";
    if (o === a)
      return;
    const c = A.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === A && A.type !== "range" && (r && e === t || s && A.value.trim() === a) || (A.value = a);
  }
}, GA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(A, e, t) {
    A[ut] = ws(t), lt(A, "change", () => {
      const r = A._modelValue, s = BB(A), n = A.checked, i = A[ut];
      if (J(r)) {
        const o = Da(r, s), a = o !== -1;
        if (n && !a)
          i(r.concat(s));
        else if (!n && a) {
          const c = [...r];
          c.splice(o, 1), i(c);
        }
      } else if (St(r)) {
        const o = new Set(r);
        n ? o.add(s) : o.delete(s), i(o);
      } else
        i(Rl(A, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: xo,
  beforeUpdate(A, e, t) {
    A[ut] = ws(t), xo(A, e, t);
  }
};
function xo(A, { value: e, oldValue: t }, r) {
  A._modelValue = e;
  let s;
  if (J(e))
    s = Da(e, r.props.value) > -1;
  else if (St(e))
    s = e.has(r.props.value);
  else {
    if (e === t) return;
    s = Dt(e, Rl(A, !0));
  }
  A.checked !== s && (A.checked = s);
}
function BB(A) {
  return "_value" in A ? A._value : A.value;
}
function Rl(A, e) {
  const t = e ? "_trueValue" : "_falseValue";
  return t in A ? A[t] : e;
}
const dB = ["ctrl", "shift", "alt", "meta"], gB = {
  stop: (A) => A.stopPropagation(),
  prevent: (A) => A.preventDefault(),
  self: (A) => A.target !== A.currentTarget,
  ctrl: (A) => !A.ctrlKey,
  shift: (A) => !A.shiftKey,
  alt: (A) => !A.altKey,
  meta: (A) => !A.metaKey,
  left: (A) => "button" in A && A.button !== 0,
  middle: (A) => "button" in A && A.button !== 1,
  right: (A) => "button" in A && A.button !== 2,
  exact: (A, e) => dB.some((t) => A[`${t}Key`] && !e.includes(t))
}, jt = (A, e) => {
  if (!A) return A;
  const t = A._withMods || (A._withMods = {}), r = e.join(".");
  return t[r] || (t[r] = (s, ...n) => {
    for (let i = 0; i < e.length; i++) {
      const o = gB[e[i]];
      if (o && o(s, e)) return;
    }
    return A(s, ...n);
  });
}, hB = {
  esc: "escape",
  space: " ",
  up: "arrow-up",
  left: "arrow-left",
  right: "arrow-right",
  down: "arrow-down",
  delete: "backspace"
}, yo = (A, e) => {
  const t = A._withKeys || (A._withKeys = {}), r = e.join(".");
  return t[r] || (t[r] = (s) => {
    if (!("key" in s))
      return;
    const n = zA(s.key);
    if (e.some(
      (i) => i === n || hB[i] === n
    ))
      return A(s);
  });
}, pB = /* @__PURE__ */ vA({ patchProp: aB }, Ju);
let Eo;
function Ml() {
  return Eo || (Eo = Fu(pB));
}
const wB = (...A) => {
  Ml().render(...A);
}, Ho = (...A) => {
  const e = Ml().createApp(...A), { mount: t } = e;
  return e.mount = (r) => {
    const s = CB(r);
    if (!s) return;
    const n = e._component;
    !j(n) && !n.render && !n.template && (n.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
    const i = t(s, !1, QB(s));
    return s instanceof Element && (s.removeAttribute("v-cloak"), s.setAttribute("data-v-app", "")), i;
  }, e;
};
function QB(A) {
  if (A instanceof SVGElement)
    return "svg";
  if (typeof MathMLElement == "function" && A instanceof MathMLElement)
    return "mathml";
}
function CB(A) {
  return pA(A) ? document.querySelector(A) : A;
}
const vB = ".bse-overlay[data-v-e3f0b15c]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9200;display:flex;flex-direction:column;background:#000000d9}.bse-toolbar[data-v-e3f0b15c]{display:flex;align-items:center;gap:6px;padding:10px 16px;background:#1a2230;border-bottom:1px solid rgba(255,255,255,.1)}.bse-btn[data-v-e3f0b15c]{font-size:12px;padding:4px 10px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#bbc;cursor:pointer}.bse-btn[data-v-e3f0b15c]:hover:not(:disabled){background:#ffffff14}.bse-btn[data-v-e3f0b15c]:disabled{opacity:.4;cursor:default}.bse-btn.active[data-v-e3f0b15c]{background:#8af3;border-color:#8af;color:#fff}.bse-btn--apply[data-v-e3f0b15c]{border-color:#2ecc7180;color:#2ecc71}.bse-color[data-v-e3f0b15c]{width:20px;height:20px;padding:0;border-radius:50%;border:2px solid rgba(255,255,255,.2);cursor:pointer}.bse-color.active[data-v-e3f0b15c]{border-color:#fff;box-shadow:0 0 0 2px #8af9}.bse-sep[data-v-e3f0b15c]{width:1px;height:18px;background:#ffffff26;margin:0 4px}.bse-spacer[data-v-e3f0b15c]{flex:1}.bse-stage[data-v-e3f0b15c]{flex:1;min-height:0;display:flex;align-items:center;justify-content:center;padding:16px}.bse-canvas[data-v-e3f0b15c]{max-width:100%;max-height:calc(100vh - 90px);cursor:crosshair;touch-action:none;box-shadow:0 0 0 1px #ffffff26}", Si = (A, e) => {
  const t = A.__vccOpts || A;
  for (const [r, s] of e)
    t[r] = s;
  return t;
}, UB = [
  { id: "pen", label: "펜" },
  { id: "rect", label: "사각형" },
  { id: "arrow", label: "화살표" },
  { id: "text", label: "글자" }
], Io = ["#ff3b30", "#ffcc00", "#34c759", "#0a84ff", "#ffffff"], FB = {
  name: "BugfixScreenshotEditor",
  props: {
    src: { type: String, required: !0 }
  },
  emits: ["apply", "cancel"],
  data() {
    return {
      tools: UB,
      colors: Io,
      tool: "pen",
      color: Io[0],
      // 그린 도형 목록 (되돌리기를 위해 비트맵이 아니라 도형으로 보관)
      shapes: [],
      drawing: null
    };
  },
  mounted() {
    const A = new Image();
    A.onload = () => {
      this.baseImage = A, this.lineWidth = Math.max(3, Math.round(A.naturalWidth / 400));
      const e = this.$refs.canvas;
      e && (e.width = A.naturalWidth, e.height = A.naturalHeight, this.redraw());
    }, A.src = this.src;
  },
  methods: {
    // 화면 좌표 → 캔버스(원본 이미지) 좌표
    toCanvasPoint(A) {
      const e = this.$refs.canvas, t = e.getBoundingClientRect();
      return {
        x: (A.clientX - t.left) * (e.width / t.width),
        y: (A.clientY - t.top) * (e.height / t.height)
      };
    },
    onDown(A) {
      var t, r;
      if (!this.baseImage) return;
      const e = this.toCanvasPoint(A);
      if (this.tool === "text") {
        const s = window.prompt("표시할 글자를 입력하세요");
        s && s.trim() && (this.shapes.push({ type: "text", color: this.color, width: this.lineWidth, from: e, text: s.trim() }), this.redraw());
        return;
      }
      (r = (t = A.currentTarget).setPointerCapture) == null || r.call(t, A.pointerId), this.drawing = { type: this.tool, color: this.color, width: this.lineWidth, from: e, to: e, points: [e] };
    },
    onMove(A) {
      if (!this.drawing) return;
      const e = this.toCanvasPoint(A);
      this.drawing.type === "pen" ? this.drawing.points.push(e) : this.drawing.to = e, this.redraw();
    },
    onUp() {
      if (!this.drawing) return;
      const A = this.drawing;
      this.drawing = null, (A.type === "pen" ? A.points.length > 1 : Math.hypot(A.to.x - A.from.x, A.to.y - A.from.y) > 4) && this.shapes.push(A), this.redraw();
    },
    undo() {
      this.shapes.pop(), this.redraw();
    },
    clearAll() {
      this.shapes = [], this.redraw();
    },
    redraw() {
      const A = this.$refs.canvas;
      if (!A || !this.baseImage) return;
      const e = A.getContext("2d");
      e.clearRect(0, 0, A.width, A.height), e.drawImage(this.baseImage, 0, 0), (this.drawing ? [...this.shapes, this.drawing] : this.shapes).forEach((r) => this.drawShape(e, r));
    },
    drawShape(A, e) {
      if (A.save(), A.strokeStyle = e.color, A.fillStyle = e.color, A.lineWidth = e.width, A.lineCap = "round", A.lineJoin = "round", e.type === "pen")
        A.beginPath(), e.points.forEach((t, r) => r ? A.lineTo(t.x, t.y) : A.moveTo(t.x, t.y)), A.stroke();
      else if (e.type === "rect")
        A.strokeRect(e.from.x, e.from.y, e.to.x - e.from.x, e.to.y - e.from.y);
      else if (e.type === "arrow") {
        const t = Math.atan2(e.to.y - e.from.y, e.to.x - e.from.x), r = e.width * 5;
        A.beginPath(), A.moveTo(e.from.x, e.from.y), A.lineTo(e.to.x, e.to.y), A.stroke(), A.beginPath(), A.moveTo(e.to.x, e.to.y), A.lineTo(e.to.x - r * Math.cos(t - Math.PI / 6), e.to.y - r * Math.sin(t - Math.PI / 6)), A.lineTo(e.to.x - r * Math.cos(t + Math.PI / 6), e.to.y - r * Math.sin(t + Math.PI / 6)), A.closePath(), A.fill();
      } else e.type === "text" && (A.font = `bold ${e.width * 7}px sans-serif`, A.textBaseline = "top", A.lineWidth = Math.max(2, e.width * 0.8), A.strokeStyle = "rgba(0, 0, 0, 0.85)", A.strokeText(e.text, e.from.x, e.from.y), A.fillText(e.text, e.from.x, e.from.y));
      A.restore();
    },
    apply() {
      const A = this.$refs.canvas;
      if (!A || !this.baseImage) {
        this.$emit("cancel");
        return;
      }
      this.drawing = null, this.redraw(), this.$emit("apply", A.toDataURL("image/png"));
    }
  }
}, bB = { class: "bse-overlay" }, mB = { class: "bse-toolbar" }, xB = ["onClick"], yB = ["title", "onClick"], EB = ["disabled"], HB = ["disabled"], IB = { class: "bse-stage" };
function _B(A, e, t, r, s, n) {
  return p(), w("div", bB, [
    u("div", mB, [
      (p(!0), w(P, null, lA(s.tools, (i) => (p(), w("button", {
        key: i.id,
        class: $(["bse-btn", { active: s.tool === i.id }]),
        onClick: (o) => s.tool = i.id
      }, C(i.label), 11, xB))), 128)),
      e[8] || (e[8] = u("span", { class: "bse-sep" }, null, -1)),
      (p(!0), w(P, null, lA(s.colors, (i) => (p(), w("button", {
        key: i,
        class: $(["bse-color", { active: s.color === i }]),
        style: Ts({ background: i }),
        title: i,
        onClick: (o) => s.color = i
      }, null, 14, yB))), 128)),
      e[9] || (e[9] = u("span", { class: "bse-sep" }, null, -1)),
      u("button", {
        class: "bse-btn",
        disabled: !s.shapes.length,
        onClick: e[0] || (e[0] = (...i) => n.undo && n.undo(...i))
      }, "되돌리기", 8, EB),
      u("button", {
        class: "bse-btn",
        disabled: !s.shapes.length,
        onClick: e[1] || (e[1] = (...i) => n.clearAll && n.clearAll(...i))
      }, "모두 지우기", 8, HB),
      e[10] || (e[10] = u("span", { class: "bse-spacer" }, null, -1)),
      u("button", {
        class: "bse-btn",
        onClick: e[2] || (e[2] = (i) => A.$emit("cancel"))
      }, "취소"),
      u("button", {
        class: "bse-btn bse-btn--apply",
        onClick: e[3] || (e[3] = (...i) => n.apply && n.apply(...i))
      }, "적용")
    ]),
    u("div", IB, [
      u("canvas", {
        ref: "canvas",
        class: "bse-canvas",
        onPointerdown: e[4] || (e[4] = (...i) => n.onDown && n.onDown(...i)),
        onPointermove: e[5] || (e[5] = (...i) => n.onMove && n.onMove(...i)),
        onPointerup: e[6] || (e[6] = (...i) => n.onUp && n.onUp(...i)),
        onPointercancel: e[7] || (e[7] = (...i) => n.onUp && n.onUp(...i))
      }, null, 544)
    ])
  ]);
}
const LB = /* @__PURE__ */ Si(FB, [["render", _B], ["styles", [vB]], ["__scopeId", "data-v-e3f0b15c"]]), SB = '.bug-target-tool[data-v-a39d1232]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-a39d1232]{margin:0}.bug-target[data-v-a39d1232]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-a39d1232]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-a39d1232]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-a39d1232]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-a39d1232]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-a39d1232]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-a39d1232]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-a39d1232]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-a39d1232]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-a39d1232]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-a39d1232]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-a39d1232]:hover{color:#fff}.bug-report-tabs[data-v-a39d1232]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-a39d1232]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-a39d1232]:hover{color:#ccc}.bug-tab.active[data-v-a39d1232]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-a39d1232]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-a39d1232]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-a39d1232]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-a39d1232]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-a39d1232]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-a39d1232]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-a39d1232]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-a39d1232]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-a39d1232]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-a39d1232]::placeholder{color:#555}.bug-report-textarea[data-v-a39d1232]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-a39d1232]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-a39d1232]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-a39d1232]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-a39d1232]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-a39d1232]{cursor:pointer}.log-filter-chip.error[data-v-a39d1232]{color:#e06060}.log-filter-chip.warn[data-v-a39d1232]{color:#c8a040}.log-filter-chip.log[data-v-a39d1232]{color:#6080b0}.log-list[data-v-a39d1232]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-a39d1232]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-a39d1232]:last-child{border-bottom:none}.log-item--error[data-v-a39d1232]{background:#c83c3c14}.log-item--warn[data-v-a39d1232]{background:#c8a02814}.log-time[data-v-a39d1232]{color:#555;flex-shrink:0}.log-badge-lv[data-v-a39d1232]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-a39d1232]{color:#e06060}.log-item--warn .log-badge-lv[data-v-a39d1232]{color:#c8a040}.log-item--log .log-badge-lv[data-v-a39d1232]{color:#6080b0}.log-msg[data-v-a39d1232]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-a39d1232]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-a39d1232]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-a39d1232]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-a39d1232]:hover{background:#ffffff0a}.net-item[data-v-a39d1232]:last-child{border-bottom:none}.net-item--error[data-v-a39d1232]{background:#c83c3c12}.net-status[data-v-a39d1232]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-a39d1232]{color:#60c860}.net-status.status-3xx[data-v-a39d1232]{color:#c8c040}.net-status.status-4xx[data-v-a39d1232]{color:#e08040}.net-status.status-5xx[data-v-a39d1232],.net-status.status-err[data-v-a39d1232]{color:#e06060}.net-method[data-v-a39d1232]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-a39d1232]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-a39d1232]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-a39d1232]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-a39d1232]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-a39d1232]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-a39d1232]{color:#e06060}.env-group[data-v-a39d1232]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-a39d1232]{margin-top:8px}.env-group-title[data-v-a39d1232]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-a39d1232]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-a39d1232]:last-child{border-bottom:none}.env-row span[data-v-a39d1232]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-a39d1232]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-a39d1232]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-a39d1232]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-a39d1232]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-a39d1232]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-a39d1232]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-a39d1232]{background:#6464c833;color:#ccc}.log-src-btn[data-v-a39d1232]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-a39d1232]{animation:spin-a39d1232 1s linear infinite;display:inline-block}.log-src-err[data-v-a39d1232]{color:#e06060;font-weight:700}@keyframes spin-a39d1232{to{transform:rotate(360deg)}}.log-logger[data-v-a39d1232]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-a39d1232]{color:#e06060}.event-list[data-v-a39d1232]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-a39d1232]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-a39d1232]:last-child{border-bottom:none}.event-time[data-v-a39d1232]{color:#555;flex-shrink:0}.event-type[data-v-a39d1232]{color:#9ad}.env-list[data-v-a39d1232]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-a39d1232]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-a39d1232]{display:flex;gap:6px}.severity-btn[data-v-a39d1232]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-a39d1232]:hover{color:#ccc}.severity-btn--critical.active[data-v-a39d1232]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-a39d1232]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-a39d1232]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-a39d1232]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-a39d1232]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-a39d1232]{color:#79a;font-size:10px}.route-list[data-v-a39d1232]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-a39d1232]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-a39d1232]:last-child{border-bottom:none}.route-from[data-v-a39d1232]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-a39d1232]{color:#555;flex-shrink:0}.route-to[data-v-a39d1232]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-a39d1232]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-a39d1232]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-a39d1232]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-a39d1232]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-a39d1232]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-a39d1232]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-a39d1232]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-a39d1232]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-a39d1232]:hover{background:#ffffff12}.bug-btn-download[data-v-a39d1232]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-a39d1232]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-a39d1232]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-a39d1232]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-a39d1232]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-a39d1232]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-a39d1232 .7s linear infinite;flex-shrink:0}@keyframes bug-spin-a39d1232{to{transform:rotate(360deg)}}.bug-btn-save[data-v-a39d1232]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-a39d1232]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-a39d1232]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-a39d1232]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-a39d1232]:hover{background:#ffffff14;color:#abc}', KB = [
  { value: "CRITICAL", label: "치명적" },
  { value: "HIGH", label: "높음" },
  { value: "MEDIUM", label: "보통" },
  { value: "LOW", label: "낮음" }
], TB = {
  name: "BugfixReportModal",
  components: { ScreenshotEditor: LB },
  // kit: createBugfix() 결과. Web Component 로 쓸 때는 엘리먼트 프로퍼티(el.kit = kit)로 들어온다
  props: { kit: { type: Object, default: null } },
  emits: ["open-viewer"],
  expose: ["open", "close"],
  mounted() {
    this._onKeydown = (A) => {
      A.key !== "Escape" || !this.isOpen || (this.isEditingShot ? this.isEditingShot = !1 : this.close());
    }, this._onPaste = (A) => {
      var t;
      if (!this.isOpen || this.isEditingShot) return;
      const e = [...((t = A.clipboardData) == null ? void 0 : t.items) || []].find((r) => r.type.startsWith("image/"));
      e && (A.preventDefault(), this.loadShotFile(e.getAsFile()));
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
      severityOptions: KB,
      project: null,
      info: {}
    };
  },
  computed: {
    hotkey() {
      var A, e, t;
      return ((t = (e = (A = this.kit) == null ? void 0 : A.options) == null ? void 0 : e.hotkeys) == null ? void 0 : t.report) || "";
    },
    projects() {
      var A;
      return ((A = this.kit) == null ? void 0 : A.projects) || [];
    },
    // canFix=false(운영자 전용) 프로젝트는 '도구 문제' 체크박스로, 나머지는 신고 대상 선택으로
    appProjects() {
      return this.projects.filter((A) => {
        var e;
        return ((e = this.info[A.key]) == null ? void 0 : e.canFix) !== !1;
      });
    },
    serverEnabled() {
      var A, e;
      return !!((e = (A = this.kit) == null ? void 0 : A.api) != null && e.enabled);
    },
    tabs() {
      var r, s;
      const A = this.backendLogsState === "ok" ? this.backendLogs.filter((n) => n.level === "ERROR").length : 0, e = this.countByLevel("error") + A || null, t = ((s = (r = this.context) == null ? void 0 : r.mutationLog) == null ? void 0 : s.length) || null;
      return [
        { id: "basic", label: "기본" },
        { id: "logs", label: "로그", badge: e },
        { id: "network", label: "네트워크", badge: this.networkLogs.filter((n) => n.error || n.status >= 400).length || null },
        { id: "state", label: "상태", badge: t },
        { id: "env", label: "컨텍스트" }
      ];
    },
    filteredLogs() {
      return this.allLogs.filter((A) => A.level === "error" ? this.showError : A.level === "warn" ? this.showWarn : this.showLog).slice(-100).reverse();
    },
    filteredBackendLogs() {
      return this.backendLogs.filter((A) => A.level === "ERROR" ? this.showBEError : A.level === "WARN" ? this.showBEWarn : this.showBEInfo);
    },
    reversedNetwork() {
      return [...this.networkLogs].reverse();
    }
  },
  methods: {
    countByLevel(A) {
      return this.allLogs.filter((e) => e.level === A).length;
    },
    countBackendByLevel(A) {
      return this.backendLogs.filter((e) => e.level === A).length;
    },
    statusClass(A) {
      return !A || A === "ERR" ? "status-err" : A >= 500 ? "status-5xx" : A >= 400 ? "status-4xx" : A >= 300 ? "status-3xx" : "status-2xx";
    },
    toggleNetDetail(A) {
      this.expandedNet = this.expandedNet === A ? null : A;
    },
    joinOrNone(A) {
      return A && A.length ? A.join(", ") : "없음";
    },
    formatPayload(A) {
      if (A == null) return "";
      if (typeof A == "string") return A.length > 120 ? A.slice(0, 120) + "…" : A;
      try {
        const e = JSON.stringify(A);
        return e.length > 120 ? e.slice(0, 120) + "…" : e;
      } catch {
        return String(A);
      }
    },
    async fetchBackendLogs() {
      var A, e;
      if (!((e = (A = this.kit) == null ? void 0 : A.options) != null && e.backendLogs)) {
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
      return this.networkLogs.some((A) => A.error || A.status && A.status >= 400);
    },
    open() {
      return this.openReport();
    },
    setProject(A) {
      var e;
      (e = this.kit) == null || e.setProject(A), this.project = A;
    },
    async openReport() {
      var t, r, s, n;
      if (this.isCapturing || this.isOpen) return;
      this.project = ((t = this.kit) == null ? void 0 : t.project) || null, (r = this.kit) != null && r.projectInfo && this.kit.projectInfo().then((i) => {
        this.info = { ...i };
      }), this.problemDesc = "", this.reproSteps = "", this.expectedResult = "", this.tool = !1, this.severity = "MEDIUM", this.screenshotUrl = null, this.activeTab = "basic", this.expandedNet = null, this.logSource = "front", this.allLogs = ((s = this.kit) == null ? void 0 : s.getLogs()) ?? [], this.networkLogs = ((n = this.kit) == null ? void 0 : n.getNetwork()) ?? [], this.backendLogs = [], this.backendLogsState = "idle", this.isCapturing = !0, await this.$nextTick();
      const A = [this.kit ? this.kit.captureScreen() : Promise.reject(new Error("kit 없음"))];
      this.hasNetworkError() ? A.push(this.fetchBackendLogs()) : this.backendLogsState = "skipped";
      const [e] = await Promise.allSettled(A);
      e.status === "fulfilled" ? this.screenshotUrl = e.value : console.warn("[BugReport] 캡처 실패:", e.reason), this.context = this.safeCaptureContext(), this.isCapturing = !1, this.isOpen = !0;
    },
    // 컨텍스트 수집이 실패해도 모달은 열려야 한다
    // (예외가 나면 isCapturing이 true로 남아 캡처 오버레이에서 멈춘다)
    safeCaptureContext() {
      var A;
      try {
        return ((A = this.kit) == null ? void 0 : A.captureContext()) ?? null;
      } catch (e) {
        return console.error("[BugReport] 컨텍스트 수집 실패:", e), null;
      }
    },
    async recapture() {
      this.isCapturing = !0, this.isOpen = !1, await this.$nextTick();
      try {
        this.screenshotUrl = await this.kit.captureScreen();
      } catch (A) {
        console.warn("[BugReport] 캡처 실패:", A);
      }
      this.context = this.safeCaptureContext(), this.isCapturing = !1, this.isOpen = !0;
    },
    close() {
      this.isOpen = !1, this.isEditingShot = !1, this.screenshotUrl = null;
    },
    onShotEdited(A) {
      this.screenshotUrl = A, this.isEditingShot = !1;
    },
    onShotFile(A) {
      var t;
      const e = (t = A.target.files) == null ? void 0 : t[0];
      A.target.value = "", this.loadShotFile(e);
    },
    // 사용자가 고른(붙여넣은) 이미지를 PNG dataURL 로 바꿔 스크린샷 자리에 넣는다
    loadShotFile(A) {
      if (!A || !A.type.startsWith("image/")) return;
      const e = URL.createObjectURL(A), t = new Image();
      t.onload = () => {
        const r = document.createElement("canvas");
        r.width = t.naturalWidth, r.height = t.naturalHeight, r.getContext("2d").drawImage(t, 0, 0), this.screenshotUrl = r.toDataURL("image/png"), URL.revokeObjectURL(e);
      }, t.onerror = () => URL.revokeObjectURL(e), t.src = e;
    },
    // 저장 목록: Vue 앱은 open-viewer 이벤트로, Web Component 는 kit 이 붙여 둔 뷰어를 직접 연다
    openViewer() {
      var A, e;
      this.$emit("open-viewer"), this.close(), (e = (A = this.kit) == null ? void 0 : A.openViewer) == null || e.call(A);
    },
    buildReport() {
      var A, e, t, r;
      return {
        severity: this.severity,
        problem: this.problemDesc,
        reproSteps: this.reproSteps,
        expectedResult: this.expectedResult,
        context: this.context,
        frontendLogs: ((A = this.kit) == null ? void 0 : A.getLogs()) ?? [],
        backendLogs: this.backendLogs,
        network: ((e = this.kit) == null ? void 0 : e.getNetwork()) ?? [],
        mutationLog: ((t = this.kit) == null ? void 0 : t.getMutations()) ?? [],
        routeHistory: ((r = this.kit) == null ? void 0 : r.getRoutes()) ?? []
      };
    },
    async copyToClipboard() {
      try {
        const A = this.buildReport();
        await navigator.clipboard.writeText(JSON.stringify(A, null, 2)), this.copyStatus = "복사됨 ✓", setTimeout(() => {
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
        const A = this.buildReport(), e = {
          severity: this.severity,
          problem: this.problemDesc,
          tool: this.tool,
          reproSteps: this.reproSteps,
          expectedResult: this.expectedResult,
          screenshot: this.screenshotUrl,
          contextJson: JSON.stringify(A.context),
          frontendLogs: JSON.stringify(A.frontendLogs),
          backendLogs: JSON.stringify(A.backendLogs),
          networkLogs: JSON.stringify(A.network),
          mutationLog: JSON.stringify(A.mutationLog)
        };
        await this.kit.api.save(e), this.saveStatus = "저장됨 ✓", setTimeout(() => {
          this.saveStatus = "서버 저장";
        }, 3e3);
      } catch (A) {
        console.error("[BugReport] 서버 저장 실패:", A), this.saveStatus = "저장 실패", setTimeout(() => {
          this.saveStatus = "서버 저장";
        }, 3e3);
      } finally {
        this.isSaving = !1;
      }
    },
    download() {
      const A = (/* @__PURE__ */ new Date()).toISOString().replace(/[:.]/g, "-").slice(0, 19), e = this.severity.toLowerCase(), t = document.createElement("a");
      t.href = this.screenshotUrl, t.download = `bug-screenshot_${e}_${A}.png`, t.click();
      const r = this.buildReport(), s = new Blob([JSON.stringify(r, null, 2)], { type: "application/json" }), n = document.createElement("a");
      n.href = URL.createObjectURL(s), n.download = `bug-report_${e}_${A}.json`, setTimeout(() => {
        n.click(), URL.revokeObjectURL(n.href);
      }, 300), this.close();
    }
  }
}, DB = { class: "bugfix-root" }, kB = {
  key: 0,
  class: "bug-capture-overlay"
}, OB = { class: "bug-report-modal" }, RB = { class: "bug-report-header" }, MB = { class: "bug-report-title" }, NB = {
  key: 0,
  class: "bug-report-shortcut"
}, VB = {
  key: 0,
  class: "bug-target",
  title: "어디에 대한 신고인지"
}, GB = ["onClick"], PB = {
  key: 1,
  class: "bug-target-tool",
  title: "신고 창·목록 등 이 도구 자체의 문제일 때 (앱 코드 수정 대상이 아니고 운영자가 처리)"
}, JB = { class: "bug-report-tabs" }, XB = ["onClick"], WB = {
  key: 0,
  class: "bug-tab-badge"
}, YB = { class: "bug-report-body" }, jB = { class: "bug-report-section" }, ZB = { class: "bug-report-label" }, zB = ["disabled"], qB = ["disabled"], $B = ["src"], Ad = {
  key: 1,
  class: "screenshot-placeholder"
}, ed = { class: "bug-report-section" }, td = { class: "severity-group" }, rd = ["onClick"], sd = { class: "bug-report-section" }, nd = { class: "bug-report-section" }, id = { class: "bug-report-section" }, od = { class: "bug-report-section" }, ad = { class: "included-chips" }, ld = { class: "chip" }, cd = { class: "chip" }, fd = {
  key: 0,
  class: "chip"
}, ud = {
  key: 1,
  class: "chip"
}, Bd = { class: "log-source-toggle" }, dd = {
  key: 0,
  class: "log-src-spin"
}, gd = {
  key: 1,
  class: "log-src-err"
}, hd = {
  key: 0,
  class: "bug-report-section"
}, pd = { class: "bug-report-label" }, wd = { class: "log-filter-group" }, Qd = { class: "log-filter-chip error" }, Cd = { class: "log-filter-chip warn" }, vd = { class: "log-filter-chip log" }, Ud = { class: "log-list" }, Fd = { class: "log-time" }, bd = { class: "log-badge-lv" }, md = { class: "log-msg" }, xd = {
  key: 0,
  class: "log-empty"
}, yd = {
  key: 1,
  class: "bug-report-section"
}, Ed = { class: "bug-report-label" }, Hd = { class: "log-filter-group" }, Id = { class: "log-filter-chip error" }, _d = { class: "log-filter-chip warn" }, Ld = { class: "log-filter-chip log" }, Sd = {
  key: 0,
  class: "log-empty"
}, Kd = {
  key: 1,
  class: "log-empty"
}, Td = {
  key: 2,
  class: "log-empty log-empty--error"
}, Dd = {
  key: 3,
  class: "log-list"
}, kd = { class: "log-time" }, Od = { class: "log-badge-lv" }, Rd = { class: "log-logger" }, Md = { class: "log-msg" }, Nd = {
  key: 0,
  class: "log-empty"
}, Vd = {
  key: 2,
  class: "bug-report-section"
}, Gd = { class: "net-list" }, Pd = ["onClick"], Jd = { class: "net-method" }, Xd = { class: "net-url" }, Wd = { class: "net-dur" }, Yd = { class: "net-time" }, jd = {
  key: 0,
  class: "net-detail"
}, Zd = { key: 0 }, zd = { key: 1 }, qd = { key: 2 }, $d = {
  key: 3,
  class: "net-error-msg"
}, Ag = {
  key: 0,
  class: "log-empty"
}, eg = { class: "bug-report-section" }, tg = { class: "log-list" }, rg = { class: "log-time" }, sg = { class: "mutation-type" }, ng = {
  key: 0,
  class: "log-msg mutation-payload"
}, ig = {
  key: 0,
  class: "log-empty"
}, og = { class: "bug-report-section" }, ag = { class: "route-list" }, lg = { class: "log-time" }, cg = { class: "route-from" }, fg = { class: "route-to" }, ug = {
  key: 0,
  class: "log-empty"
}, Bg = {
  key: 0,
  class: "bug-report-section"
}, dg = { class: "env-group" }, gg = {
  key: 1,
  class: "bug-report-section"
}, hg = { class: "env-group" }, pg = { class: "env-row" }, wg = { class: "env-row" }, Qg = { class: "env-row" }, Cg = { class: "env-row" }, vg = { class: "env-row" }, Ug = {
  key: 0,
  class: "bug-report-section"
}, Fg = {
  key: 1,
  class: "bug-report-section"
}, bg = {
  key: 0,
  class: "env-group"
}, mg = { class: "env-row" }, xg = {
  key: 0,
  class: "env-row"
}, yg = {
  key: 1,
  class: "env-row"
}, Eg = { class: "env-group" }, Hg = { class: "env-row" }, Ig = { class: "env-row" }, _g = { class: "env-row" }, Lg = { class: "env-row" }, Sg = { class: "env-row" }, Kg = { class: "env-group" }, Tg = { class: "env-row" }, Dg = { class: "env-row" }, kg = { class: "env-row" }, Og = { class: "env-list" }, Rg = { key: 0 }, Mg = { class: "env-row" }, Ng = { class: "env-list" }, Vg = { key: 0 }, Gg = {
  key: 0,
  class: "env-row"
}, Pg = { class: "env-list" }, Jg = {
  key: 1,
  class: "env-row"
}, Xg = { class: "env-list" }, Wg = { class: "env-group" }, Yg = { class: "event-list" }, jg = { class: "event-time" }, Zg = { class: "event-type" }, zg = {
  key: 0,
  class: "log-empty"
}, qg = {
  key: 1,
  class: "env-group"
}, $g = { class: "env-row" }, Ah = { class: "env-row" }, eh = { class: "env-row" }, th = { class: "env-row" }, rh = { class: "env-group" }, sh = { class: "env-row" }, nh = { class: "env-row" }, ih = {
  key: 0,
  class: "env-row"
}, oh = {
  key: 1,
  class: "env-row"
}, ah = { class: "env-row" }, lh = { class: "bug-report-footer" }, ch = ["disabled", "title"], fh = ["disabled"], uh = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, Bh = ["disabled"];
function dh(A, e, t, r, s, n) {
  var o, a, c, l, f, B, Q, v, U, K, H, b;
  const i = $f("ScreenshotEditor");
  return p(), w("div", DB, [
    s.isCapturing && !s.isOpen ? (p(), w("div", kB, [...e[27] || (e[27] = [
      u("div", { class: "bug-capture-spinner" }, [
        u("span", { class: "bug-capture-spin" }),
        Y(" 화면 캡처 중... ")
      ], -1)
    ])])) : _("", !0),
    s.isOpen ? (p(), w("div", {
      key: 1,
      class: "bug-report-overlay",
      onMousedown: e[25] || (e[25] = (h) => s.backdropPressed = h.target === h.currentTarget),
      onClick: e[26] || (e[26] = jt((h) => s.backdropPressed && n.close(), ["self"]))
    }, [
      s.isEditingShot && s.screenshotUrl ? (p(), Sl(i, {
        key: 0,
        src: s.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: e[0] || (e[0] = (h) => s.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : _("", !0),
      u("div", OB, [
        u("div", RB, [
          u("span", MB, [
            e[28] || (e[28] = Y("버그 신고 ", -1)),
            n.hotkey ? (p(), w("span", NB, C(n.hotkey), 1)) : _("", !0)
          ]),
          n.appProjects.length > 1 ? (p(), w("span", VB, [
            (p(!0), w(P, null, lA(n.appProjects, (h) => (p(), w("button", {
              key: h.key,
              class: $({ "bug-target__on": s.project === h.key }),
              onClick: (m) => n.setProject(h.key)
            }, C(h.label), 11, GB))), 128))
          ])) : _("", !0),
          (a = (o = t.kit) == null ? void 0 : o.api) != null && a.enabled ? (p(), w("label", PB, [
            xA(u("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[1] || (e[1] = (h) => s.tool = h)
            }, null, 512), [
              [GA, s.tool]
            ]),
            e[29] || (e[29] = Y(" 버그 신고 도구 문제 ", -1))
          ])) : _("", !0),
          u("button", {
            class: "bug-report-close",
            onClick: e[2] || (e[2] = (...h) => n.close && n.close(...h))
          }, "✕")
        ]),
        u("div", JB, [
          (p(!0), w(P, null, lA(n.tabs, (h) => (p(), w("button", {
            key: h.id,
            class: $(["bug-tab", { active: s.activeTab === h.id }]),
            onClick: (m) => s.activeTab = h.id
          }, [
            Y(C(h.label) + " ", 1),
            h.badge ? (p(), w("span", WB, C(h.badge), 1)) : _("", !0)
          ], 10, XB))), 128))
        ]),
        u("div", YB, [
          s.activeTab === "basic" ? (p(), w(P, { key: 0 }, [
            u("div", jB, [
              u("div", ZB, [
                e[30] || (e[30] = Y(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[3] || (e[3] = (...h) => n.recapture && n.recapture(...h)),
                  disabled: s.isCapturing
                }, C(s.isCapturing ? "캡처 중..." : "다시 찍기"), 9, zB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[4] || (e[4] = (h) => s.isEditingShot = !0),
                  disabled: !s.screenshotUrl
                }, "그리기·표시", 8, qB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[5] || (e[5] = (h) => A.$refs.shotFile.click())
                }, "이미지 불러오기"),
                u("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: e[6] || (e[6] = (...h) => n.onShotFile && n.onShotFile(...h))
                }, null, 544)
              ]),
              u("div", {
                class: $(["screenshot-wrap", { "screenshot-wrap--editable": s.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: e[7] || (e[7] = (h) => s.screenshotUrl && (s.isEditingShot = !0))
              }, [
                s.screenshotUrl ? (p(), w("img", {
                  key: 0,
                  src: s.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, $B)) : (p(), w("div", Ad, "캡처 중..."))
              ], 2),
              e[31] || (e[31] = u("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            u("div", ed, [
              e[32] || (e[32] = u("div", { class: "bug-report-label" }, "심각도", -1)),
              u("div", td, [
                (p(!0), w(P, null, lA(s.severityOptions, (h) => (p(), w("button", {
                  key: h.value,
                  class: $(["severity-btn", `severity-btn--${h.value.toLowerCase()}`, { active: s.severity === h.value }]),
                  onClick: (m) => s.severity = h.value
                }, C(h.label), 11, rd))), 128))
              ])
            ]),
            u("div", sd, [
              e[33] || (e[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[8] || (e[8] = (h) => s.problemDesc = h),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [is, s.problemDesc]
              ])
            ]),
            u("div", nd, [
              e[34] || (e[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[9] || (e[9] = (h) => s.reproSteps = h),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [is, s.reproSteps]
              ])
            ]),
            u("div", id, [
              e[35] || (e[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              xA(u("textarea", {
                "onUpdate:modelValue": e[10] || (e[10] = (h) => s.expectedResult = h),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [is, s.expectedResult]
              ])
            ]),
            u("div", od, [
              e[39] || (e[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", ad, [
                e[36] || (e[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                e[37] || (e[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", ld, "📡 네트워크 요청 (" + C(s.networkLogs.length) + "건)", 1),
                u("span", cd, "📋 프론트 로그 (" + C(s.allLogs.length) + "건)", 1),
                u("span", {
                  class: $(["chip", s.backendLogsState === "ok" ? "chip--ok" : s.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + C(s.backendLogsState === "ok" ? s.backendLogs.length + "건" : s.backendLogsState === "loading" ? "로딩 중" : s.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : s.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = s.context) != null && c.camera ? (p(), w("span", fd, "📍 카메라 위치")) : _("", !0),
                e[38] || (e[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (l = s.context) != null && l.user ? (p(), w("span", ud, "👤 " + C(s.context.user.username), 1)) : _("", !0)
              ])
            ])
          ], 64)) : _("", !0),
          s.activeTab === "logs" ? (p(), w(P, { key: 1 }, [
            u("div", Bd, [
              u("button", {
                class: $(["log-src-btn", { active: s.logSource === "front" }]),
                onClick: e[11] || (e[11] = (h) => s.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: $(["log-src-btn", { active: s.logSource === "backend" }]),
                onClick: e[12] || (e[12] = (h) => s.logSource = "backend")
              }, [
                e[40] || (e[40] = Y(" 백엔드 ", -1)),
                s.backendLogsState === "loading" ? (p(), w("span", dd, "⟳")) : s.backendLogsState === "error" ? (p(), w("span", gd, "!")) : _("", !0)
              ], 2)
            ]),
            s.logSource === "front" ? (p(), w("div", hd, [
              u("div", pd, [
                e[41] || (e[41] = Y(" 프론트엔드 콘솔 로그 ", -1)),
                u("div", wd, [
                  u("label", Qd, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[13] || (e[13] = (h) => s.showError = h)
                    }, null, 512), [
                      [GA, s.showError]
                    ]),
                    Y(" 오류 (" + C(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", Cd, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[14] || (e[14] = (h) => s.showWarn = h)
                    }, null, 512), [
                      [GA, s.showWarn]
                    ]),
                    Y(" 경고 (" + C(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", vd, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[15] || (e[15] = (h) => s.showLog = h)
                    }, null, 512), [
                      [GA, s.showLog]
                    ]),
                    Y(" 로그 (" + C(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", Ud, [
                (p(!0), w(P, null, lA(n.filteredLogs, (h, m) => (p(), w("div", {
                  key: m,
                  class: $(["log-item", `log-item--${h.level}`])
                }, [
                  u("span", Fd, C(h.time.slice(11)), 1),
                  u("span", bd, C(h.level), 1),
                  u("span", md, C(h.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), w("div", xd, "표시할 로그가 없습니다")) : _("", !0)
              ])
            ])) : _("", !0),
            s.logSource === "backend" ? (p(), w("div", yd, [
              u("div", Ed, [
                e[42] || (e[42] = Y(" 백엔드 서버 로그 ", -1)),
                u("div", Hd, [
                  u("label", Id, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[16] || (e[16] = (h) => s.showBEError = h)
                    }, null, 512), [
                      [GA, s.showBEError]
                    ]),
                    Y(" ERROR (" + C(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", _d, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[17] || (e[17] = (h) => s.showBEWarn = h)
                    }, null, 512), [
                      [GA, s.showBEWarn]
                    ]),
                    Y(" WARN (" + C(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", Ld, [
                    xA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[18] || (e[18] = (h) => s.showBEInfo = h)
                    }, null, 512), [
                      [GA, s.showBEInfo]
                    ]),
                    Y(" INFO (" + C(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              s.backendLogsState === "loading" ? (p(), w("div", Sd, "백엔드 로그 가져오는 중...")) : s.backendLogsState === "skipped" ? (p(), w("div", Kd, [
                e[43] || (e[43] = Y(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: e[19] || (e[19] = (...h) => n.fetchBackendLogs && n.fetchBackendLogs(...h))
                }, "그래도 가져오기")
              ])) : s.backendLogsState === "error" ? (p(), w("div", Td, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), w("div", Dd, [
                (p(!0), w(P, null, lA(n.filteredBackendLogs, (h, m) => (p(), w("div", {
                  key: m,
                  class: $(["log-item", `log-item--${h.level.toLowerCase()}`])
                }, [
                  u("span", kd, C(h.time.slice(11)), 1),
                  u("span", Od, C(h.level), 1),
                  u("span", Rd, C(h.logger), 1),
                  u("span", Md, C(h.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), w("div", Nd, "표시할 로그가 없습니다")) : _("", !0)
              ]))
            ])) : _("", !0)
          ], 64)) : _("", !0),
          s.activeTab === "network" ? (p(), w("div", Vd, [
            e[51] || (e[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", Gd, [
              (p(!0), w(P, null, lA(n.reversedNetwork, (h, m) => {
                var k;
                return p(), w(P, { key: m }, [
                  u("div", {
                    class: $(["net-item", h.error || h.status >= 400 ? "net-item--error" : ""]),
                    onClick: (L) => n.toggleNetDetail(m)
                  }, [
                    u("span", {
                      class: $(["net-status", n.statusClass(h.status)])
                    }, C(h.status), 3),
                    u("span", Jd, C(h.method), 1),
                    u("span", Xd, C(h.url), 1),
                    u("span", Wd, C(h.duration) + "ms", 1),
                    u("span", Yd, C((k = h.time) == null ? void 0 : k.slice(11, 19)), 1)
                  ], 10, Pd),
                  s.expandedNet === m ? (p(), w("div", jd, [
                    h.params ? (p(), w("div", Zd, [
                      e[44] || (e[44] = u("b", null, "Params:", -1)),
                      e[45] || (e[45] = Y()),
                      u("code", null, C(h.params), 1)
                    ])) : _("", !0),
                    h.requestBody ? (p(), w("div", zd, [
                      e[46] || (e[46] = u("b", null, "Request:", -1)),
                      e[47] || (e[47] = Y()),
                      u("code", null, C(h.requestBody), 1)
                    ])) : _("", !0),
                    h.responseBody ? (p(), w("div", qd, [
                      e[48] || (e[48] = u("b", null, "Response:", -1)),
                      e[49] || (e[49] = Y()),
                      u("code", null, C(h.responseBody), 1)
                    ])) : _("", !0),
                    h.error ? (p(), w("div", $d, [
                      e[50] || (e[50] = u("b", null, "Error:", -1)),
                      Y(" " + C(h.error), 1)
                    ])) : _("", !0)
                  ])) : _("", !0)
                ], 64);
              }), 128)),
              s.networkLogs.length === 0 ? (p(), w("div", Ag, "기록된 요청이 없습니다")) : _("", !0)
            ])
          ])) : _("", !0),
          s.activeTab === "state" ? (p(), w(P, { key: 3 }, [
            u("div", eg, [
              e[52] || (e[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", tg, [
                (p(!0), w(P, null, lA(((f = s.context) == null ? void 0 : f.mutationLog) || [], (h, m) => (p(), w("div", {
                  key: m,
                  class: "log-item"
                }, [
                  u("span", rg, C(h.time), 1),
                  u("span", sg, C(h.type), 1),
                  h.payload !== null ? (p(), w("span", ng, C(n.formatPayload(h.payload)), 1)) : _("", !0)
                ]))), 128)),
                (Q = (B = s.context) == null ? void 0 : B.mutationLog) != null && Q.length ? _("", !0) : (p(), w("div", ig, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", og, [
              e[54] || (e[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", ag, [
                (p(!0), w(P, null, lA(((v = s.context) == null ? void 0 : v.routeHistory) || [], (h, m) => (p(), w("div", {
                  key: m,
                  class: "route-item"
                }, [
                  u("span", lg, C(h.time), 1),
                  u("span", cg, C(h.from), 1),
                  e[53] || (e[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", fg, C(h.to), 1)
                ]))), 128)),
                (K = (U = s.context) == null ? void 0 : U.routeHistory) != null && K.length ? _("", !0) : (p(), w("div", ug, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (H = s.context) != null && H.storage && Object.keys(s.context.storage).length ? (p(), w("div", Bg, [
              e[55] || (e[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", dg, [
                (p(!0), w(P, null, lA(s.context.storage, (h, m) => (p(), w("div", {
                  key: m,
                  class: "env-row"
                }, [
                  u("span", null, C(m), 1),
                  u("span", null, C(h), 1)
                ]))), 128))
              ])
            ])) : _("", !0),
            (b = s.context) != null && b.cesiumPerf ? (p(), w("div", gg, [
              e[61] || (e[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", hg, [
                u("div", pg, [
                  e[56] || (e[56] = u("span", null, "Primitives", -1)),
                  u("span", null, C(s.context.cesiumPerf.primitives), 1)
                ]),
                u("div", wg, [
                  e[57] || (e[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, C(s.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", Qg, [
                  e[58] || (e[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, C(s.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", Cg, [
                  e[59] || (e[59] = u("span", null, "Shadows", -1)),
                  u("span", null, C(s.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", vg, [
                  e[60] || (e[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, C(s.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : _("", !0)
          ], 64)) : _("", !0),
          s.activeTab === "env" ? (p(), w(P, { key: 4 }, [
            s.context ? (p(), w("div", Fg, [
              s.context.user ? (p(), w("div", bg, [
                e[66] || (e[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", mg, [
                  e[63] || (e[63] = u("span", null, "아이디", -1)),
                  u("span", null, C(s.context.user.username), 1)
                ]),
                s.context.user.roles.length ? (p(), w("div", xg, [
                  e[64] || (e[64] = u("span", null, "권한", -1)),
                  u("span", null, C(s.context.user.roles.join(", ")), 1)
                ])) : _("", !0),
                s.context.user.exp ? (p(), w("div", yg, [
                  e[65] || (e[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, C(s.context.user.exp), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", Eg, [
                e[72] || (e[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", Hg, [
                  e[67] || (e[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, C(s.context.menus.headerName), 1)
                ]),
                u("div", Ig, [
                  e[68] || (e[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, C(s.context.menus.subMenuName), 1)
                ]),
                u("div", _g, [
                  e[69] || (e[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, C(n.joinOrNone(s.context.menus.leftMenus)), 1)
                ]),
                u("div", Lg, [
                  e[70] || (e[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, C(n.joinOrNone(s.context.menus.openPanels)), 1)
                ]),
                u("div", Sg, [
                  e[71] || (e[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, C(n.joinOrNone(s.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", Kg, [
                e[75] || (e[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", Tg, [
                  e[73] || (e[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, C(s.context.activeData.mapType), 1)
                ]),
                u("div", Dg, [
                  e[74] || (e[74] = u("span", null, "지형", -1)),
                  u("span", null, C(s.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", kg, [
                  u("span", null, "데이터셋 (" + C(s.context.activeData.datasets.length) + ")", 1),
                  u("span", Og, [
                    s.context.activeData.datasets.length ? _("", !0) : (p(), w("span", Rg, "없음")),
                    (p(!0), w(P, null, lA(s.context.activeData.datasets, (h) => (p(), w("span", {
                      key: h.layerId,
                      class: "env-tag"
                    }, C(h._displayName), 1))), 128))
                  ])
                ]),
                u("div", Mg, [
                  u("span", null, "3D 타일 (" + C(s.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", Ng, [
                    s.context.activeData.threeDTiles.length ? _("", !0) : (p(), w("span", Vg, "없음")),
                    (p(!0), w(P, null, lA(s.context.activeData.threeDTiles, (h) => (p(), w("span", {
                      key: h.threeDTilesId || h.sourceId,
                      class: "env-tag"
                    }, C(h._displayName), 1))), 128))
                  ])
                ]),
                s.context.activeData.autoPlacement.length ? (p(), w("div", Gg, [
                  u("span", null, "배치안 (" + C(s.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", Pg, [
                    (p(!0), w(P, null, lA(s.context.activeData.autoPlacement, (h) => (p(), w("span", {
                      key: h.sourceId,
                      class: "env-tag"
                    }, C(h._displayName), 1))), 128))
                  ])
                ])) : _("", !0),
                s.context.activeData.topicMaps.length ? (p(), w("div", Jg, [
                  u("span", null, "주제도 (" + C(s.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Xg, [
                    (p(!0), w(P, null, lA(s.context.activeData.topicMaps, (h) => (p(), w("span", {
                      key: h.key,
                      class: "env-tag"
                    }, C(h._displayName), 1))), 128))
                  ])
                ])) : _("", !0)
              ]),
              u("div", Wg, [
                e[76] || (e[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", Yg, [
                  (p(!0), w(P, null, lA(s.context.recentEvents.slice(0, 30), (h, m) => (p(), w("div", {
                    key: m,
                    class: "event-item"
                  }, [
                    u("span", jg, C(h.time), 1),
                    u("span", Zg, C(h.type), 1)
                  ]))), 128)),
                  s.context.recentEvents.length ? _("", !0) : (p(), w("div", zg, "기록된 이벤트 없음"))
                ])
              ]),
              s.context.camera ? (p(), w("div", qg, [
                e[81] || (e[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", $g, [
                  e[77] || (e[77] = u("span", null, "경도", -1)),
                  u("span", null, C(s.context.camera.longitude), 1)
                ]),
                u("div", Ah, [
                  e[78] || (e[78] = u("span", null, "위도", -1)),
                  u("span", null, C(s.context.camera.latitude), 1)
                ]),
                u("div", eh, [
                  e[79] || (e[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, C(s.context.camera.height), 1)
                ]),
                u("div", th, [
                  e[80] || (e[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, C(s.context.camera.heading) + "° / " + C(s.context.camera.pitch) + "°", 1)
                ])
              ])) : _("", !0),
              u("div", rh, [
                e[87] || (e[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", sh, [
                  e[82] || (e[82] = u("span", null, "일시", -1)),
                  u("span", null, C(s.context.datetime), 1)
                ]),
                u("div", nh, [
                  e[83] || (e[83] = u("span", null, "해상도", -1)),
                  u("span", null, C(s.context.screen.resolution) + " · 뷰포트 " + C(s.context.screen.viewport), 1)
                ]),
                s.context.memory ? (p(), w("div", ih, [
                  e[84] || (e[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, C(s.context.memory.usedMB) + "MB / " + C(s.context.memory.limitMB) + "MB", 1)
                ])) : _("", !0),
                s.context.connection ? (p(), w("div", oh, [
                  e[85] || (e[85] = u("span", null, "네트워크", -1)),
                  u("span", null, C(s.context.connection.effectiveType) + " · " + C(s.context.connection.downlink) + "Mbps", 1)
                ])) : _("", !0),
                u("div", ah, [
                  e[86] || (e[86] = u("span", null, "언어", -1)),
                  u("span", null, C(s.context.browser.language), 1)
                ])
              ])
            ])) : (p(), w("div", Ug, [...e[62] || (e[62] = [
              u("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : _("", !0)
        ]),
        u("div", lh, [
          n.serverEnabled ? (p(), w("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: e[20] || (e[20] = (...h) => n.openViewer && n.openViewer(...h))
          }, "저장 목록")) : _("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: e[21] || (e[21] = (...h) => n.close && n.close(...h))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: e[22] || (e[22] = (...h) => n.copyToClipboard && n.copyToClipboard(...h)),
            disabled: !s.screenshotUrl,
            title: s.copyStatus
          }, [
            e[88] || (e[88] = u("svg", {
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
            Y(" " + C(s.copyStatus), 1)
          ], 8, ch),
          n.serverEnabled ? (p(), w("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: e[23] || (e[23] = (...h) => n.saveToServer && n.saveToServer(...h)),
            disabled: s.isSaving || !s.screenshotUrl
          }, [
            s.isSaving ? (p(), w("span", uh)) : _("", !0),
            Y(" " + C(s.saveStatus), 1)
          ], 8, fh)) : _("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: e[24] || (e[24] = (...h) => n.download && n.download(...h)),
            disabled: !s.screenshotUrl
          }, " 다운로드 ", 8, Bh)
        ])
      ])
    ], 32)) : _("", !0)
  ]);
}
const gh = /* @__PURE__ */ Si(TB, [["render", dh], ["styles", [SB]], ["__scopeId", "data-v-a39d1232"]]), hh = ".brv-projects[data-v-9fa1cd32]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-9fa1cd32]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-9fa1cd32]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-9fa1cd32]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-9fa1cd32]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-9fa1cd32]{margin:0!important}.brv-ai__tools[data-v-9fa1cd32]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-9fa1cd32]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-9fa1cd32]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-9fa1cd32]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-9fa1cd32]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-9fa1cd32]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-9fa1cd32]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-9fa1cd32]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-shots[data-v-9fa1cd32]{margin:8px 0 6px}.brv-shots__title[data-v-9fa1cd32]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-9fa1cd32]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-9fa1cd32]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-9fa1cd32],.brv-shots__ph[data-v-9fa1cd32]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-9fa1cd32]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-9fa1cd32]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-9fa1cd32]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-9fa1cd32]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-9fa1cd32]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-9fa1cd32]{font-weight:600}.brv-ai__branch[data-v-9fa1cd32]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-9fa1cd32]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-9fa1cd32]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-9fa1cd32]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-9fa1cd32]{flex:1;margin:0}.brv-chat__btns[data-v-9fa1cd32]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-9fa1cd32]{white-space:nowrap}.brv-chat__input[data-v-9fa1cd32]{font-family:inherit}.brv-chat__text[data-v-9fa1cd32]{color:#d0d6de}.brv-chat__msg--user .brv-chat__text[data-v-9fa1cd32]{color:#e6ebf2}.brv-notice[data-v-9fa1cd32]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-9fa1cd32]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-9fa1cd32]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-9fa1cd32]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-9fa1cd32],.brv-log-list[data-v-9fa1cd32],.brv-net-detail[data-v-9fa1cd32],.brv-text[data-v-9fa1cd32]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-9fa1cd32]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-9fa1cd32]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-9fa1cd32]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-9fa1cd32]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-9fa1cd32]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-9fa1cd32]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-9fa1cd32]:hover{color:#fff}.brv-body[data-v-9fa1cd32]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-9fa1cd32]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-9fa1cd32]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-9fa1cd32]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-9fa1cd32]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-9fa1cd32]:hover{background:#ffffff12}.brv-problem[data-v-9fa1cd32]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-9fa1cd32]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-9fa1cd32]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-9fa1cd32]:hover{color:#e74c3c}.brv-badge[data-v-9fa1cd32]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-9fa1cd32]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-9fa1cd32]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-9fa1cd32]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-9fa1cd32]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-9fa1cd32]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-9fa1cd32]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-9fa1cd32]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-9fa1cd32]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-9fa1cd32]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-9fa1cd32]{background:#7888992e;color:#89a}.brv-status-control[data-v-9fa1cd32]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-9fa1cd32]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-9fa1cd32]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-9fa1cd32]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-9fa1cd32]{width:11px;height:11px;border-width:2px}.brv-back[data-v-9fa1cd32]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-9fa1cd32]:hover{color:#fff}.brv-screenshot[data-v-9fa1cd32]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-9fa1cd32]{margin-bottom:16px}.brv-fix[data-v-9fa1cd32]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-9fa1cd32]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-9fa1cd32]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-9fa1cd32]{background:#e0f2fe;color:#075985}.brv-fix--merged[data-v-9fa1cd32]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-9fa1cd32]{background:#fee2e2;color:#991b1b}.brv-link[data-v-9fa1cd32]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-9fa1cd32]{margin-top:6px}.brv-fix-actions[data-v-9fa1cd32]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-9fa1cd32]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-9fa1cd32]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-9fa1cd32]{background:transparent;color:#2563eb}.brv-hint[data-v-9fa1cd32]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-9fa1cd32]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-9fa1cd32]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-9fa1cd32]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-9fa1cd32]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-9fa1cd32]{color:inherit}.brv-suggest[data-v-9fa1cd32]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-9fa1cd32]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-9fa1cd32]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-9fa1cd32]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-9fa1cd32]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-9fa1cd32]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-9fa1cd32]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-9fa1cd32]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-9fa1cd32]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-9fa1cd32]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-9fa1cd32]{color:#1e5bb8}.brv-chat__text[data-v-9fa1cd32]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-9fa1cd32]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-9fa1cd32]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-9fa1cd32]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-9fa1cd32]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-9fa1cd32]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-9fa1cd32]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-9fa1cd32]{margin-bottom:8px}.brv-field-label[data-v-9fa1cd32]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-9fa1cd32]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:pre-wrap;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-9fa1cd32]{display:flex;gap:4px}.brv-log-tab[data-v-9fa1cd32]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-9fa1cd32]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-9fa1cd32]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-9fa1cd32]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-9fa1cd32]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-9fa1cd32]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-9fa1cd32]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-9fa1cd32]:hover{background:#ffffff0f}.brv-filter-error[data-v-9fa1cd32]{color:#c06060}.brv-filter-warn[data-v-9fa1cd32]{color:#b09040}.brv-filter-log[data-v-9fa1cd32]{color:#589}.brv-log-list[data-v-9fa1cd32]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-9fa1cd32]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-9fa1cd32]:hover{background:#ffffff0a}.brv-log-item[data-v-9fa1cd32]:last-child{border-bottom:none}.brv-log-time[data-v-9fa1cd32]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-9fa1cd32]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-9fa1cd32]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-9fa1cd32]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-9fa1cd32]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-9fa1cd32]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-9fa1cd32]{color:#8ac;font-weight:600}.brv-log--error[data-v-9fa1cd32]{color:#e87070}.brv-log--warn[data-v-9fa1cd32]{color:#d4a84b}.brv-log--info[data-v-9fa1cd32]{color:#a8b8c8}.brv-log-empty[data-v-9fa1cd32]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-9fa1cd32]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-9fa1cd32]:hover{background:#ffffff0a}.brv-net-err[data-v-9fa1cd32]{background:#e74c3c0d}.brv-net-status[data-v-9fa1cd32]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-9fa1cd32]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-9fa1cd32]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-9fa1cd32],.st-5xx[data-v-9fa1cd32]{color:#e87070}.st-4xx[data-v-9fa1cd32]{color:#d4a84b}.st-3xx[data-v-9fa1cd32]{color:#8ac}.st-2xx[data-v-9fa1cd32]{color:#6c8}.brv-net-detail[data-v-9fa1cd32]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-9fa1cd32]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-9fa1cd32 .7s linear infinite}@keyframes brv-spin-9fa1cd32{to{transform:rotate(360deg)}}", ph = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  FAILED: "실패 · 진행 로그 확인"
}, wh = { QUEUED: "대기", RUNNING: "수정중", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패" }, _o = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], Qh = {
  name: "BugfixViewer",
  props: { kit: { type: Object, default: null } },
  expose: ["open", "close"],
  data() {
    return {
      STATUSES: _o,
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
      var A, e, t;
      return ((t = (e = (A = this.kit) == null ? void 0 : A.options) == null ? void 0 : e.hotkeys) == null ? void 0 : t.viewer) || "";
    },
    projects() {
      var A;
      return ((A = this.kit) == null ? void 0 : A.projects) || [];
    },
    // 앱 사용자에게는 고칠 수 있는(canFix) 프로젝트만 보인다. 관리 콘솔(adminKey)은 목록을 한데 모아 보여 주고 프로젝트를 골라 열므로 전환 탭이 없다
    // 도구 문제 리포트는 이 프로젝트 코드와 무관하므로 수정 UI 를 두지 않는다
    fixable() {
      var A;
      return this.canFix && !((A = this.detail) != null && A.tool);
    },
    fixShots() {
      var A;
      try {
        return (A = this.detail) != null && A.fixShots ? JSON.parse(this.detail.fixShots) : [];
      } catch {
        return [];
      }
    },
    viewProjects() {
      var A, e;
      return (e = (A = this.kit) == null ? void 0 : A.options) != null && e.adminKey ? [] : this.projects.filter((t) => {
        var r;
        return ((r = this.info[t.key]) == null ? void 0 : r.canFix) !== !1;
      });
    },
    prNumber() {
      var A, e;
      return ((A = this.detail) == null ? void 0 : A.fixPrNumber) || (((e = this.detail) == null ? void 0 : e.fixPrUrl) || "").split("/").pop();
    },
    logLineCount() {
      var A;
      return (((A = this.detail) == null ? void 0 : A.fixLog) || "").split(`
`).filter(Boolean).length;
    },
    fixInProgress() {
      var A;
      return ["QUEUED", "RUNNING"].includes((A = this.detail) == null ? void 0 : A.fixStatus);
    },
    // 병합 뒤 배포(GitHub Actions) 추적이 아직 진행 중인가 - 로그에 끝났다는 줄이 없고 갱신이 최근(35분 안)이면
    deployPending() {
      var t, r, s;
      if (((t = this.detail) == null ? void 0 : t.fixStatus) !== "MERGED") return !1;
      const A = ((r = this.detail) == null ? void 0 : r.fixLog) || "";
      if (/배포 완료|배포 추적 종료|시작되지 않았습니다|실패한 워크플로/.test(A)) return !1;
      const e = new Date(((s = this.detail) == null ? void 0 : s.fixUpdatedAt) || 0).getTime();
      return Date.now() - e < 35 * 60 * 1e3;
    },
    fixChat() {
      var A;
      try {
        return (A = this.detail) != null && A.fixChat ? JSON.parse(this.detail.fixChat) : [];
      } catch {
        return [];
      }
    },
    fixSuggestions() {
      var A;
      try {
        const e = (A = this.detail) != null && A.fixSuggestions ? JSON.parse(this.detail.fixSuggestions) : [];
        return Array.isArray(e) ? e : [];
      } catch {
        return [];
      }
    },
    // 진행 중 경과 시간 - 후속 대화면 마지막 내 메시지부터, 아니면 수정 요청 시각부터
    fixElapsed() {
      var s;
      const e = [...this.fixChat].reverse().find((n) => n.role === "user"), t = (e == null ? void 0 : e.at) || ((s = this.detail) == null ? void 0 : s.fixRequestedAt);
      if (!t) return "";
      const r = Math.max(0, Math.floor((this.now - new Date(t).getTime()) / 1e3));
      return r < 60 ? `${r}초` : `${Math.floor(r / 60)}분 ${r % 60}초`;
    },
    parsedContext() {
      var A;
      try {
        return (A = this.detail) != null && A.contextJson ? JSON.parse(this.detail.contextJson) : null;
      } catch {
        return null;
      }
    },
    parsedFrontLogs() {
      var A;
      try {
        return (A = this.detail) != null && A.frontendLogs ? JSON.parse(this.detail.frontendLogs) : [];
      } catch {
        return [];
      }
    },
    parsedBackLogs() {
      var A;
      try {
        return (A = this.detail) != null && A.backendLogs ? JSON.parse(this.detail.backendLogs) : [];
      } catch {
        return [];
      }
    },
    networkLogs() {
      var A;
      try {
        return (A = this.detail) != null && A.networkLogs ? JSON.parse(this.detail.networkLogs) : [];
      } catch {
        return [];
      }
    },
    parsedMutationLog() {
      var A;
      try {
        return (A = this.detail) != null && A.mutationLog ? JSON.parse(this.detail.mutationLog) : [];
      } catch {
        return [];
      }
    },
    filteredFrontLogs() {
      return [...this.parsedFrontLogs].reverse().filter((A) => A.level === "error" ? this.showFE.error : A.level === "warn" ? this.showFE.warn : this.showFE.log);
    },
    filteredBackLogs() {
      return this.parsedBackLogs.filter((A) => A.level === "ERROR" ? this.showBE.error : A.level === "WARN" ? this.showBE.warn : this.showBE.info);
    },
    filteredNetLogs() {
      return [...this.networkLogs].reverse().filter((A) => A.error || A.status && A.status >= 400 ? this.showNet.error : this.showNet.ok);
    },
    logTabs() {
      const A = this.countFE("error"), e = this.countBE("ERROR"), t = this.networkLogs.filter((r) => r.error || r.status && r.status >= 400).length;
      return [
        { id: "front", label: "프론트", count: A || null, countClass: "brv-cnt-err" },
        { id: "back", label: "백엔드", count: e || null, countClass: "brv-cnt-err" },
        { id: "net", label: "네트워크", count: t || null, countClass: "brv-cnt-err" },
        { id: "mutation", label: "Mutation", count: this.parsedMutationLog.length || null, countClass: "" }
      ];
    }
  },
  watch: {
    fixShots: { immediate: !0, handler(A) {
      this.loadShots(A);
    } },
    "detail.fixLog"() {
      this.$nextTick(() => {
        const A = this.$refs.fixLogPre;
        A && (A.scrollTop = A.scrollHeight);
      });
    }
  },
  beforeUnmount() {
    this._stopFixPolling();
  },
  methods: {
    async open(A) {
      var e, t, r, s, n, i;
      if (this.isOpen = !0, this.selected = null, this.detail = null, this.expanded = /* @__PURE__ */ new Set(), (e = this.kit) != null && e.projectInfo && (this.info = { ...await this.kit.projectInfo() }), !((r = (t = this.kit) == null ? void 0 : t.options) != null && r.adminKey) && ((n = this.info[(s = this.kit) == null ? void 0 : s.project]) == null ? void 0 : n.canFix) === !1) {
        const o = this.projects.find((a) => {
          var c;
          return ((c = this.info[a.key]) == null ? void 0 : c.canFix) !== !1;
        });
        o && this.kit.setProject(o.key);
      }
      this.project = ((i = this.kit) == null ? void 0 : i.project) || null, await this.loadInfo(), await this.fetchList(), A && await this.openDetail(Number(A));
    },
    async loadShots(A) {
      var e, t;
      for (const r of A || [])
        if (!(this.shotUrls[r.file] || !((t = (e = this.kit) == null ? void 0 : e.api) != null && t.shot)))
          try {
            this.shotUrls[r.file] = await this.kit.api.shot(r.file);
          } catch {
          }
    },
    openShot(A) {
      this.bigShot = A;
    },
    async loadInfo() {
      try {
        const A = await this.kit.api.info();
        this.canFix = (A == null ? void 0 : A.canFix) !== !1;
      } catch {
        this.canFix = !0;
      }
    },
    async switchProject(A) {
      var e;
      A !== this.project && ((e = this.kit) == null || e.setProject(A), this.project = A, this.selected = null, this.detail = null, this._stopFixPolling(), await this.loadInfo(), await this.fetchList());
    },
    close() {
      this.isOpen = !1, this._stopFixPolling();
    },
    async fetchList() {
      this.loading = !0;
      try {
        this.list = await this.kit.api.list() ?? [];
      } catch (A) {
        console.error("[BugReportViewer] 목록 조회 실패:", A);
      } finally {
        this.loading = !1;
      }
    },
    async openDetail(A) {
      this.selected = A, this.detail = null, this.detailLoading = !0, this.logTab = "front", this.expanded = /* @__PURE__ */ new Set();
      try {
        if (this.detail = await this.kit.api.get(A) ?? null, this.detail) {
          const e = (() => {
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
          !e.some((r) => r.level === "error") && t.some((r) => r.error || r.status >= 400) && (this.logTab = "net");
        }
      } catch (e) {
        console.error("[BugReportViewer] 상세 조회 실패:", e);
      } finally {
        this.detailLoading = !1;
      }
      this.fixInProgress || this.deployPending ? this._startFixPolling() : this._stopFixPolling();
    },
    // 앱의 알림 훅(kit.notify)이 있으면 그쪽으로, 없으면 뷰어 안에 잠깐 표시
    showNotice(A, e, t) {
      var r, s;
      if ((s = (r = this.kit) == null ? void 0 : r.options) != null && s.notify) {
        this.kit.notify({ title: A, message: e, type: t });
        return;
      }
      this.notice = { title: A, message: e, type: t }, clearTimeout(this._noticeTimer), this._noticeTimer = setTimeout(() => {
        this.notice = null;
      }, 5e3);
    },
    statusLabel(A) {
      var e;
      return ((e = _o.find((t) => t.value === A)) == null ? void 0 : e.label) ?? "접수";
    },
    // ── AI 자동 수정 ──
    fixLabel(A) {
      return ph[A || "none"] || A;
    },
    fixShort(A) {
      return wh[A] || A;
    },
    async requestFix() {
      if (!this.detail || this.fixBusy) return;
      const A = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const e = await this.kit.api.requestFix(A);
        e && (this.detail = { ...this.detail, ...e }, this._syncListFix(e)), this.showNotice("수정 요청", "서버에서 AI 가 고치기 시작합니다. 진행 로그가 여기에 쌓이고, PR 이 올라오면 링크가 표시됩니다.", "success"), this._startFixPolling();
      } catch (e) {
        this.showNotice("수정 요청 실패", (e == null ? void 0 : e.message) || "요청에 실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    // 추천 개선 실행 - 입력창에 쓰던 내용은 건드리지 않고 추천 문장을 그대로 수정 요청으로 보낸다
    runSuggestion(A) {
      window.confirm(`이 추천을 AI 에게 수정 요청으로 보낼까요?

${A}`) && this.sendChat("change", `추천 개선 실행: ${A}`);
    },
    async sendChat(A, e) {
      const t = e === void 0, r = (t ? this.chatInput : e).trim();
      if (!r || !this.detail || this.fixBusy) return;
      const s = this.detail.bugReportId;
      this.fixBusy = !0;
      try {
        const n = await this.kit.api.fixChat(s, r, A);
        n && (this.detail = { ...this.detail, ...n }, this._syncListFix(n)), t && (this.chatInput = ""), this._startFixPolling();
      } catch (n) {
        this.showNotice("전송 실패", (n == null ? void 0 : n.message) || "실패했습니다.", "error");
      } finally {
        this.fixBusy = !1;
      }
    },
    async refreshDetail() {
      var e;
      if (!this.detail) return;
      const A = this.detail.bugReportId;
      try {
        const t = this.detail.fixPrUrl && ["PR_OPENED", "FAILED"].includes(this.detail.fixStatus) ? await this.kit.api.fixSync(A) : this.fixInProgress || this.deployPending ? await this.kit.api.fixState(A) : await this.kit.api.get(A);
        t && ((e = this.detail) == null ? void 0 : e.bugReportId) === A && (this.detail = { ...this.detail, ...t }, this._syncListFix(t));
      } catch {
      }
    },
    _syncListFix(A) {
      const e = this.list.find((t) => t.bugReportId === A.bugReportId);
      e && (e.fixStatus = A.fixStatus, e.fixPrUrl = A.fixPrUrl);
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
    async changeStatus(A) {
      if (!this.detail || this.statusSaving) return;
      const e = this.detail.bugReportId, t = this.detail.status;
      if (A === t) return;
      this.statusSaving = !0, this.detail.status = A;
      const r = this.list.find((s) => s.bugReportId === e);
      r && (r.status = A);
      try {
        await this.kit.api.setStatus(e, A);
      } catch (s) {
        console.error("[BugReportViewer] 상태 변경 실패:", s), this.detail.status = t, r && (r.status = t);
      } finally {
        this.statusSaving = !1;
      }
    },
    async deleteReport(A) {
      if (confirm("리포트를 삭제하시겠습니까?"))
        try {
          await this.kit.api.remove(A), this.list = this.list.filter((e) => e.bugReportId !== A);
        } catch (e) {
          console.error("[BugReportViewer] 삭제 실패:", e);
        }
    },
    toggleExpand(A) {
      const e = new Set(this.expanded);
      e.has(A) ? e.delete(A) : e.add(A), this.expanded = e;
    },
    countFE(A) {
      return this.parsedFrontLogs.filter((e) => e.level === A).length;
    },
    countBE(A) {
      return this.parsedBackLogs.filter((e) => e.level === A).length;
    },
    shortLogger(A) {
      if (!A) return "";
      const e = A.split(".");
      return e.length > 2 ? "…" + e.slice(-2).join(".") : A;
    },
    statusClass(A) {
      return !A || A === "ERR" ? "st-err" : A >= 500 ? "st-5xx" : A >= 400 ? "st-4xx" : A >= 300 ? "st-3xx" : "st-2xx";
    },
    netClass(A) {
      return A.error || A.status && A.status >= 400 ? "brv-net-err" : "";
    },
    formatPayload(A) {
      if (A == null) return "";
      try {
        const e = JSON.stringify(A);
        return e.length > 200 ? e.slice(0, 200) + "…" : e;
      } catch {
        return String(A);
      }
    },
    formatDate(A) {
      return A ? String(A).slice(0, 16).replace("T", " ") : "";
    }
  }
}, Ch = { class: "bugfix-root" }, vh = { class: "brv-modal" }, Uh = { class: "brv-header" }, Fh = { class: "brv-title" }, bh = {
  key: 0,
  class: "brv-shortcut"
}, mh = {
  key: 0,
  class: "brv-projects"
}, xh = ["onClick"], yh = { class: "brv-body" }, Eh = {
  key: 0,
  class: "brv-loading"
}, Hh = {
  key: 1,
  class: "brv-empty"
}, Ih = {
  key: 2,
  class: "brv-list"
}, _h = ["onClick"], Lh = {
  key: 0,
  class: "brv-badge brv-badge--tool",
  title: "버그 신고 도구 자체의 문제"
}, Sh = { class: "brv-problem" }, Kh = ["title"], Th = { class: "brv-meta" }, Dh = ["onClick"], kh = {
  key: 0,
  class: "brv-loading"
}, Oh = {
  key: 0,
  class: "brv-section"
}, Rh = ["src"], Mh = ["src", "alt"], Nh = { class: "brv-shots__bigcap" }, Vh = { class: "brv-section" }, Gh = { class: "brv-row" }, Ph = { class: "brv-row" }, Jh = { class: "brv-status-control" }, Xh = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Wh = ["value", "disabled"], Yh = ["value"], jh = { class: "brv-row" }, Zh = { class: "brv-selectable" }, zh = { class: "brv-row" }, qh = { class: "brv-selectable" }, $h = { class: "brv-section brv-ai" }, Ap = { class: "brv-ai__head" }, ep = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, tp = {
  key: 1,
  class: "brv-fix-elapsed"
}, rp = {
  key: 2,
  class: "brv-fix-elapsed"
}, sp = {
  key: 3,
  class: "brv-ai__tools"
}, np = ["disabled"], ip = ["disabled"], op = {
  key: 0,
  class: "brv-ai__hint"
}, ap = {
  key: 1,
  class: "brv-ai__hint"
}, lp = {
  key: 2,
  class: "brv-ai__start"
}, cp = ["disabled"], fp = {
  key: 0,
  class: "brv-ai__meta"
}, up = ["href"], Bp = {
  key: 1,
  class: "brv-ai__branch brv-selectable"
}, dp = {
  key: 1,
  class: "brv-ai__summary brv-selectable"
}, gp = {
  key: 2,
  class: "brv-shots"
}, hp = { class: "brv-shots__title" }, pp = { class: "brv-suggest__hint" }, wp = { class: "brv-shots__strip" }, Qp = ["onClick"], Cp = ["src", "alt"], vp = {
  key: 1,
  class: "brv-shots__ph"
}, Up = ["open"], Fp = { class: "brv-ai__count" }, bp = {
  key: 4,
  class: "brv-suggest"
}, mp = { class: "brv-suggest__text brv-selectable" }, xp = ["disabled", "onClick"], yp = { class: "brv-chat" }, Ep = { class: "brv-chat__who" }, Hp = { class: "brv-chat__text brv-selectable" }, Ip = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, _p = {
  key: 1,
  class: "brv-chat__compose"
}, Lp = ["disabled"], Sp = { class: "brv-chat__btns" }, Kp = ["disabled"], Tp = ["disabled"], Dp = {
  key: 2,
  class: "brv-ai__hint"
}, kp = {
  key: 2,
  class: "brv-section"
}, Op = {
  key: 0,
  class: "brv-field"
}, Rp = { class: "brv-text brv-selectable" }, Mp = {
  key: 1,
  class: "brv-field"
}, Np = { class: "brv-text brv-selectable" }, Vp = {
  key: 2,
  class: "brv-field"
}, Gp = { class: "brv-text brv-selectable" }, Pp = {
  key: 3,
  class: "brv-section"
}, Jp = {
  key: 0,
  class: "brv-row"
}, Xp = { class: "brv-selectable" }, Wp = {
  key: 1,
  class: "brv-row"
}, Yp = { class: "brv-selectable" }, jp = {
  key: 2,
  class: "brv-row"
}, Zp = { class: "brv-selectable" }, zp = {
  key: 3,
  class: "brv-row"
}, qp = { class: "brv-selectable" }, $p = {
  key: 4,
  class: "brv-row"
}, Aw = { class: "brv-selectable" }, ew = { class: "brv-section" }, tw = { class: "brv-label-row" }, rw = { class: "brv-log-tabs" }, sw = ["onClick"], nw = { class: "brv-log-filters" }, iw = { class: "brv-filter-chip brv-filter-error" }, ow = { class: "brv-filter-chip brv-filter-warn" }, aw = { class: "brv-filter-chip brv-filter-log" }, lw = { class: "brv-log-list" }, cw = ["onClick"], fw = { class: "brv-log-time brv-selectable" }, uw = { class: "brv-log-lv" }, Bw = {
  key: 0,
  class: "brv-log-empty"
}, dw = { class: "brv-log-filters" }, gw = { class: "brv-filter-chip brv-filter-error" }, hw = { class: "brv-filter-chip brv-filter-warn" }, pw = { class: "brv-filter-chip brv-filter-log" }, ww = { class: "brv-log-list" }, Qw = ["onClick"], Cw = { class: "brv-log-time brv-selectable" }, vw = { class: "brv-log-lv" }, Uw = { class: "brv-log-logger brv-selectable" }, Fw = {
  key: 0,
  class: "brv-log-empty"
}, bw = { class: "brv-log-filters" }, mw = { class: "brv-filter-chip brv-filter-error" }, xw = { class: "brv-filter-chip brv-filter-log" }, yw = { class: "brv-log-list" }, Ew = ["onClick"], Hw = { class: "brv-net-method brv-selectable" }, Iw = { class: "brv-net-dur brv-selectable" }, _w = { class: "brv-log-time brv-selectable" }, Lw = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Sw = { key: 0 }, Kw = { key: 1 }, Tw = { key: 2 }, Dw = {
  key: 3,
  class: "brv-log--error"
}, kw = {
  key: 0,
  class: "brv-log-empty"
}, Ow = {
  key: 3,
  class: "brv-log-list"
}, Rw = ["onClick"], Mw = { class: "brv-log-time brv-selectable" }, Nw = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, Vw = {
  key: 0,
  class: "brv-log-empty"
};
function Gw(A, e, t, r, s, n) {
  var i, o, a, c;
  return p(), w("div", Ch, [
    s.isOpen ? (p(), w("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: e[20] || (e[20] = (l) => s.backdropPressed = l.target === l.currentTarget),
      onClick: e[21] || (e[21] = jt((l) => s.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", vh, [
        u("div", Uh, [
          u("span", Fh, [
            e[22] || (e[22] = Y(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), w("span", bh, C(n.hotkey), 1)) : _("", !0)
          ]),
          n.viewProjects.length > 1 ? (p(), w("span", mh, [
            (p(!0), w(P, null, lA(n.viewProjects, (l) => (p(), w("button", {
              key: l.key,
              class: $({ "brv-projects__on": s.project === l.key }),
              onClick: (f) => n.switchProject(l.key)
            }, C(l.label), 11, xh))), 128))
          ])) : _("", !0),
          u("button", {
            class: "brv-close",
            onClick: e[0] || (e[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        s.notice ? (p(), w("div", {
          key: 0,
          class: $(["brv-notice", `brv-notice--${s.notice.type}`])
        }, [
          u("b", null, C(s.notice.title), 1),
          Y(" " + C(s.notice.message), 1)
        ], 2)) : _("", !0),
        u("div", yh, [
          s.selected ? (p(), w(P, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: e[1] || (e[1] = (l) => s.selected = null)
            }, "← 목록"),
            s.detailLoading ? (p(), w("div", kh, [...e[24] || (e[24] = [
              u("span", { class: "brv-spin" }, null, -1),
              Y(" 불러오는 중... ", -1)
            ])])) : s.detail ? (p(), w(P, { key: 1 }, [
              s.detail.screenshot ? (p(), w("div", Oh, [
                e[25] || (e[25] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: s.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, Rh)
              ])) : _("", !0),
              s.bigShot ? (p(), w("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: e[2] || (e[2] = (l) => s.bigShot = null)
              }, [
                u("img", {
                  src: s.shotUrls[s.bigShot.file],
                  alt: s.bigShot.name
                }, null, 8, Mh),
                u("div", Nh, [
                  Y(C(s.bigShot.name) + " · " + C(s.bigShot.label) + " ", 1),
                  e[26] || (e[26] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : _("", !0),
              u("div", Vh, [
                e[31] || (e[31] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", Gh, [
                  e[27] || (e[27] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: $(["brv-badge", `brv-sev--${(i = s.detail.severity) == null ? void 0 : i.toLowerCase()}`])
                  }, C(s.detail.severity), 3)
                ]),
                u("div", Ph, [
                  e[28] || (e[28] = u("span", null, "상태", -1)),
                  u("span", Jh, [
                    s.statusSaving ? (p(), w("span", Xh)) : _("", !0),
                    u("select", {
                      class: $(["brv-status-select", `brv-st--${(s.detail.status || "OPEN").toLowerCase()}`]),
                      value: s.detail.status || "OPEN",
                      disabled: s.statusSaving,
                      onChange: e[3] || (e[3] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (p(!0), w(P, null, lA(s.STATUSES, (l) => (p(), w("option", {
                        key: l.value,
                        value: l.value
                      }, C(l.label), 9, Yh))), 128))
                    ], 42, Wh)
                  ])
                ]),
                u("div", jh, [
                  e[29] || (e[29] = u("span", null, "보고자", -1)),
                  u("span", Zh, C(s.detail.reporter), 1)
                ]),
                u("div", zh, [
                  e[30] || (e[30] = u("span", null, "일시", -1)),
                  u("span", qh, C(n.formatDate(s.detail.insertDate)), 1)
                ])
              ]),
              u("div", $h, [
                u("div", Ap, [
                  e[33] || (e[33] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: $(["brv-fix", `brv-fix--${(s.detail.fixStatus || "none").toLowerCase()}`])
                  }, C(n.fixLabel(s.detail.fixStatus)), 3),
                  s.fixBusy || n.fixInProgress ? (p(), w("span", ep)) : _("", !0),
                  n.fixInProgress && n.fixElapsed ? (p(), w("span", tp, C(n.fixElapsed), 1)) : n.deployPending ? (p(), w("span", rp, [...e[32] || (e[32] = [
                    u("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    Y(" 배포 중", -1)
                  ])])) : _("", !0),
                  s.detail.fixStatus && n.fixable ? (p(), w("span", sp, [
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: s.fixBusy,
                      onClick: e[4] || (e[4] = (...l) => n.refreshDetail && n.refreshDetail(...l)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, np),
                    u("button", {
                      class: "brv-ai__tool",
                      disabled: s.fixBusy || n.fixInProgress,
                      onClick: e[5] || (e[5] = (...l) => n.requestFix && n.requestFix(...l)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, ip)
                  ])) : _("", !0)
                ]),
                !s.detail.fixStatus && s.detail.tool ? (p(), w("div", op, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !s.detail.fixStatus && !n.fixable ? (p(), w("div", ap, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : s.detail.fixStatus ? (p(), w(P, { key: 3 }, [
                  s.detail.fixPrUrl || s.detail.fixBranch ? (p(), w("div", fp, [
                    s.detail.fixPrUrl ? (p(), w("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: s.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + C(n.prNumber), 9, up)) : _("", !0),
                    s.detail.fixBranch ? (p(), w("span", Bp, C(s.detail.fixBranch), 1)) : _("", !0)
                  ])) : _("", !0),
                  s.detail.fixSummary ? (p(), w("div", dp, C(s.detail.fixSummary), 1)) : _("", !0),
                  n.fixShots.length ? (p(), w("div", gp, [
                    u("div", hp, [
                      e[35] || (e[35] = Y("화면 확인 ", -1)),
                      u("span", pp, C(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", wp, [
                      (p(!0), w(P, null, lA(n.fixShots, (l) => (p(), w("figure", {
                        key: l.file,
                        class: "brv-shots__item",
                        onClick: (f) => n.openShot(l)
                      }, [
                        s.shotUrls[l.file] ? (p(), w("img", {
                          key: 0,
                          src: s.shotUrls[l.file],
                          alt: l.name
                        }, null, 8, Cp)) : (p(), w("div", vp, "…")),
                        u("figcaption", null, C(l.name.replace(/\.png$/i, "")), 1)
                      ], 8, Qp))), 128))
                    ])
                  ])) : _("", !0),
                  s.detail.fixLog ? (p(), w("details", {
                    key: 3,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      e[36] || (e[36] = Y("진행 로그 ", -1)),
                      u("span", Fp, C(n.logLineCount) + "줄", 1)
                    ]),
                    u("pre", {
                      ref: "fixLogPre",
                      class: "brv-selectable"
                    }, C(s.detail.fixLog), 513)
                  ], 8, Up)) : _("", !0),
                  n.fixSuggestions.length ? (p(), w("div", bp, [
                    e[37] || (e[37] = u("div", { class: "brv-suggest__title" }, [
                      Y("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (p(!0), w(P, null, lA(n.fixSuggestions, (l, f) => (p(), w("div", {
                      key: f,
                      class: "brv-suggest__item"
                    }, [
                      u("span", mp, C(l), 1),
                      n.fixable ? (p(), w("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: s.fixBusy || n.fixInProgress,
                        onClick: (B) => n.runSuggestion(l)
                      }, "실행", 8, xp)) : _("", !0)
                    ]))), 128))
                  ])) : _("", !0),
                  u("div", yp, [
                    (p(!0), w(P, null, lA(n.fixChat, (l, f) => (p(), w("div", {
                      key: f,
                      class: $(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      u("span", Ep, C(l.role === "user" ? "나" : "AI"), 1),
                      u("div", Hp, C(l.text), 1)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), w("div", Ip, [...e[38] || (e[38] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        Y(" 생각 중…")
                      ], -1)
                    ])])) : _("", !0),
                    n.fixable ? (p(), w("div", _p, [
                      xA(u("textarea", {
                        "onUpdate:modelValue": e[7] || (e[7] = (l) => s.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: s.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          e[8] || (e[8] = yo(jt((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          e[9] || (e[9] = yo(jt((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, Lp), [
                        [is, s.chatInput]
                      ]),
                      u("div", Sp, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[10] || (e[10] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, Kp),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[11] || (e[11] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, Tp)
                      ])
                    ])) : _("", !0),
                    n.fixable ? (p(), w("div", Dp, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : _("", !0)
                  ])
                ], 64)) : (p(), w("div", lp, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: s.fixBusy,
                    onClick: e[6] || (e[6] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, cp),
                  e[34] || (e[34] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              s.detail.problem || s.detail.reproSteps || s.detail.expectedResult ? (p(), w("div", kp, [
                e[42] || (e[42] = u("div", { class: "brv-label" }, "내용", -1)),
                s.detail.problem ? (p(), w("div", Op, [
                  e[39] || (e[39] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", Rp, C(s.detail.problem), 1)
                ])) : _("", !0),
                s.detail.reproSteps ? (p(), w("div", Mp, [
                  e[40] || (e[40] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", Np, C(s.detail.reproSteps), 1)
                ])) : _("", !0),
                s.detail.expectedResult ? (p(), w("div", Vp, [
                  e[41] || (e[41] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", Gp, C(s.detail.expectedResult), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              n.parsedContext ? (p(), w("div", Pp, [
                e[48] || (e[48] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), w("div", Jp, [
                  e[43] || (e[43] = u("span", null, "카메라", -1)),
                  u("span", Xp, C(n.parsedContext.camera.longitude) + "°, " + C(n.parsedContext.camera.latitude) + "° · 고도 " + C(n.parsedContext.camera.height) + "m · H" + C(n.parsedContext.camera.heading) + "° P" + C(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : _("", !0),
                (o = n.parsedContext.menus) != null && o.header ? (p(), w("div", Wp, [
                  e[44] || (e[44] = u("span", null, "상단 탭", -1)),
                  u("span", Yp, C(n.parsedContext.menus.header), 1)
                ])) : _("", !0),
                n.parsedContext.activeData ? (p(), w("div", jp, [
                  e[45] || (e[45] = u("span", null, "데이터셋", -1)),
                  u("span", Zp, C(((a = n.parsedContext.activeData.datasets) == null ? void 0 : a.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : _("", !0),
                (c = n.parsedContext.activeData) != null && c.terrain ? (p(), w("div", zp, [
                  e[46] || (e[46] = u("span", null, "지형", -1)),
                  u("span", qp, C(n.parsedContext.activeData.terrain), 1)
                ])) : _("", !0),
                n.parsedContext.datetime ? (p(), w("div", $p, [
                  e[47] || (e[47] = u("span", null, "발생 시각", -1)),
                  u("span", Aw, C(n.parsedContext.datetime), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", ew, [
                u("div", tw, [
                  e[49] || (e[49] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", rw, [
                    (p(!0), w(P, null, lA(n.logTabs, (l) => (p(), w("button", {
                      key: l.id,
                      class: $(["brv-log-tab", { active: s.logTab === l.id }]),
                      onClick: (f) => s.logTab = l.id
                    }, [
                      Y(C(l.label) + " ", 1),
                      l.count ? (p(), w("span", {
                        key: 0,
                        class: $(["brv-log-tab-count", l.countClass])
                      }, C(l.count), 3)) : _("", !0)
                    ], 10, sw))), 128))
                  ])
                ]),
                s.logTab === "front" ? (p(), w(P, { key: 0 }, [
                  u("div", nw, [
                    u("label", iw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[12] || (e[12] = (l) => s.showFE.error = l)
                      }, null, 512), [
                        [GA, s.showFE.error]
                      ]),
                      Y(" 오류 (" + C(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", ow, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[13] || (e[13] = (l) => s.showFE.warn = l)
                      }, null, 512), [
                        [GA, s.showFE.warn]
                      ]),
                      Y(" 경고 (" + C(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", aw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[14] || (e[14] = (l) => s.showFE.log = l)
                      }, null, 512), [
                        [GA, s.showFE.log]
                      ]),
                      Y(" 로그 (" + C(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", lw, [
                    (p(!0), w(P, null, lA(n.filteredFrontLogs, (l, f) => {
                      var B;
                      return p(), w("div", {
                        key: f,
                        class: $(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (Q) => n.toggleExpand("f" + f)
                      }, [
                        u("span", fw, C((B = l.time) == null ? void 0 : B.slice(11, 23)), 1),
                        u("span", uw, C(l.level), 1),
                        u("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("f" + f) }])
                        }, C(l.message), 3)
                      ], 10, cw);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), w("div", Bw, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "back" ? (p(), w(P, { key: 1 }, [
                  u("div", dw, [
                    u("label", gw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[15] || (e[15] = (l) => s.showBE.error = l)
                      }, null, 512), [
                        [GA, s.showBE.error]
                      ]),
                      Y(" ERROR (" + C(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", hw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[16] || (e[16] = (l) => s.showBE.warn = l)
                      }, null, 512), [
                        [GA, s.showBE.warn]
                      ]),
                      Y(" WARN (" + C(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", pw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[17] || (e[17] = (l) => s.showBE.info = l)
                      }, null, 512), [
                        [GA, s.showBE.info]
                      ]),
                      Y(" INFO (" + C(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", ww, [
                    (p(!0), w(P, null, lA(n.filteredBackLogs, (l, f) => {
                      var B, Q;
                      return p(), w("div", {
                        key: f,
                        class: $(["brv-log-item", `brv-log--${(B = l.level) == null ? void 0 : B.toLowerCase()}`]),
                        onClick: (v) => n.toggleExpand("b" + f)
                      }, [
                        u("span", Cw, C((Q = l.time) == null ? void 0 : Q.slice(11, 23)), 1),
                        u("span", vw, C(l.level), 1),
                        u("span", Uw, C(n.shortLogger(l.logger)), 1),
                        u("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("b" + f) }])
                        }, C(l.message), 3)
                      ], 10, Qw);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), w("div", Fw, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "net" ? (p(), w(P, { key: 2 }, [
                  u("div", bw, [
                    u("label", mw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[18] || (e[18] = (l) => s.showNet.error = l)
                      }, null, 512), [
                        [GA, s.showNet.error]
                      ]),
                      Y(" 에러 (" + C(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", xw, [
                      xA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[19] || (e[19] = (l) => s.showNet.ok = l)
                      }, null, 512), [
                        [GA, s.showNet.ok]
                      ]),
                      Y(" 성공 (" + C(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", yw, [
                    (p(!0), w(P, null, lA(n.filteredNetLogs, (l, f) => {
                      var B;
                      return p(), w("div", {
                        key: f,
                        class: $(["brv-net-item", n.netClass(l)]),
                        onClick: (Q) => n.toggleExpand("n" + f)
                      }, [
                        u("span", {
                          class: $(["brv-net-status", n.statusClass(l.status)])
                        }, C(l.status || "ERR"), 3),
                        u("span", Hw, C(l.method), 1),
                        u("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("n" + f) }])
                        }, C(l.url), 3),
                        u("span", Iw, C(l.duration) + "ms", 1),
                        u("span", _w, C((B = l.time) == null ? void 0 : B.slice(11, 19)), 1)
                      ], 10, Ew);
                    }), 128)),
                    (p(!0), w(P, null, lA(n.filteredNetLogs, (l, f) => (p(), w(P, {
                      key: "d" + f
                    }, [
                      s.expanded.has("n" + f) ? (p(), w("div", Lw, [
                        l.params ? (p(), w("div", Sw, [
                          e[50] || (e[50] = u("b", null, "Params:", -1)),
                          Y(" " + C(l.params), 1)
                        ])) : _("", !0),
                        l.requestBody ? (p(), w("div", Kw, [
                          e[51] || (e[51] = u("b", null, "Request:", -1)),
                          Y(" " + C(l.requestBody), 1)
                        ])) : _("", !0),
                        l.responseBody ? (p(), w("div", Tw, [
                          e[52] || (e[52] = u("b", null, "Response:", -1)),
                          Y(" " + C(l.responseBody), 1)
                        ])) : _("", !0),
                        l.error ? (p(), w("div", Dw, [
                          e[53] || (e[53] = u("b", null, "Error:", -1)),
                          Y(" " + C(l.error), 1)
                        ])) : _("", !0)
                      ])) : _("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), w("div", kw, "표시할 요청 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "mutation" ? (p(), w("div", Ow, [
                  (p(!0), w(P, null, lA(n.parsedMutationLog, (l, f) => (p(), w("div", {
                    key: f,
                    class: "brv-log-item",
                    onClick: (B) => n.toggleExpand("m" + f)
                  }, [
                    u("span", Mw, C(l.time), 1),
                    u("span", {
                      class: $(["brv-log-msg brv-mutation brv-selectable", { expanded: s.expanded.has("m" + f) }])
                    }, C(l.type), 3),
                    l.payload !== null ? (p(), w("span", Nw, C(n.formatPayload(l.payload)), 1)) : _("", !0)
                  ], 8, Rw))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), w("div", Vw, "기록된 mutation 없음")) : _("", !0)
                ])) : _("", !0)
              ])
            ], 64)) : _("", !0)
          ], 64)) : (p(), w(P, { key: 0 }, [
            s.loading ? (p(), w("div", Eh, [...e[23] || (e[23] = [
              u("span", { class: "brv-spin" }, null, -1),
              Y(" 불러오는 중... ", -1)
            ])])) : s.list.length === 0 ? (p(), w("div", Hh, "저장된 리포트가 없습니다.")) : (p(), w("div", Ih, [
              (p(!0), w(P, null, lA(s.list, (l) => {
                var f;
                return p(), w("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (B) => n.openDetail(l.bugReportId)
                }, [
                  u("span", {
                    class: $(["brv-badge", `brv-sev--${(f = l.severity) == null ? void 0 : f.toLowerCase()}`])
                  }, C(l.severity), 3),
                  u("span", {
                    class: $(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, C(n.statusLabel(l.status)), 3),
                  l.tool ? (p(), w("span", Lh, "도구")) : _("", !0),
                  u("span", Sh, C(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (p(), w("span", {
                    key: 1,
                    class: $(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, C(n.fixShort(l.fixStatus)), 11, Kh)) : _("", !0),
                  u("span", Th, C(l.reporter) + " · " + C(n.formatDate(l.insertDate)), 1),
                  u("button", {
                    class: "brv-del",
                    onClick: jt((B) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, Dh)
                ], 8, _h);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : _("", !0)
  ]);
}
const Pw = /* @__PURE__ */ Si(Qh, [["render", Gw], ["styles", [hh]], ["__scopeId", "data-v-9fa1cd32"]]);
function dn({ endpoint: A, project: e, apiKey: t, user: r, adminKey: s }) {
  const n = A ? `${String(A).replace(/\/+$/, "")}/p/${e}` : "", i = !!n;
  async function o(a, c, l, { query: f, blob: B } = {}) {
    if (!i) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const Q = { Accept: "application/json" };
    l !== void 0 && (Q["Content-Type"] = "application/json"), t && (Q["X-Bugfix-Key"] = t), s && (Q["X-Bugfix-Admin"] = s);
    const v = typeof r == "function" ? r() : r;
    v && (Q["X-Bugfix-User"] = String(v));
    const U = f ? "?" + new URLSearchParams(f).toString() : "", K = await fetch(n + c + U, { method: a, headers: Q, body: l === void 0 ? void 0 : JSON.stringify(l) });
    if (B) {
      if (!K.ok) throw Object.assign(new Error(`HTTP ${K.status}`), { status: K.status });
      return URL.createObjectURL(await K.blob());
    }
    if (K.status === 204) return null;
    const H = await K.text();
    let b = null;
    try {
      b = H ? JSON.parse(H) : null;
    } catch {
    }
    if (!K.ok) {
      const h = new Error((b == null ? void 0 : b.message) || `HTTP ${K.status}`);
      throw h.status = K.status, h;
    }
    return (b == null ? void 0 : b.content) ?? b;
  }
  return {
    enabled: i,
    base: n,
    info: () => o("GET", "/info"),
    save: (a) => o("POST", "/reports", a),
    list: () => o("GET", "/reports"),
    get: (a) => o("GET", `/reports/${a}`),
    fixState: (a) => o("GET", `/reports/${a}/fix`),
    setStatus: (a, c) => o("PATCH", `/reports/${a}/status`, { status: c }),
    remove: (a) => o("DELETE", `/reports/${a}`),
    requestFix: (a) => o("POST", `/reports/${a}/request-fix`),
    fixChat: (a, c, l) => o("POST", `/reports/${a}/fix-chat`, { message: c, mode: l }),
    fixSync: (a) => o("POST", `/reports/${a}/fix-sync`),
    /** 스크린샷 → object URL (img src 로 쓰고, 다 쓰면 URL.revokeObjectURL) */
    shot: (a) => o("GET", `/shots/${String(a).split("/").map(encodeURIComponent).join("/")}`, void 0, { blob: !0 })
  };
}
/*!
 * html2canvas 1.4.1 <https://html2canvas.hertzen.com>
 * Copyright (c) 2022 Niklas von Hertzen <https://hertzen.com>
 * Released under MIT License
 */
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var Xn = function(A, e) {
  return Xn = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(t, r) {
    t.__proto__ = r;
  } || function(t, r) {
    for (var s in r) Object.prototype.hasOwnProperty.call(r, s) && (t[s] = r[s]);
  }, Xn(A, e);
};
function Be(A, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  Xn(A, e);
  function t() {
    this.constructor = A;
  }
  A.prototype = e === null ? Object.create(e) : (t.prototype = e.prototype, new t());
}
var Wn = function() {
  return Wn = Object.assign || function(e) {
    for (var t, r = 1, s = arguments.length; r < s; r++) {
      t = arguments[r];
      for (var n in t) Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Wn.apply(this, arguments);
};
function VA(A, e, t, r) {
  function s(n) {
    return n instanceof t ? n : new t(function(i) {
      i(n);
    });
  }
  return new (t || (t = Promise))(function(n, i) {
    function o(l) {
      try {
        c(r.next(l));
      } catch (f) {
        i(f);
      }
    }
    function a(l) {
      try {
        c(r.throw(l));
      } catch (f) {
        i(f);
      }
    }
    function c(l) {
      l.done ? n(l.value) : s(l.value).then(o, a);
    }
    c((r = r.apply(A, [])).next());
  });
}
function DA(A, e) {
  var t = { label: 0, sent: function() {
    if (n[0] & 1) throw n[1];
    return n[1];
  }, trys: [], ops: [] }, r, s, n, i;
  return i = { next: o(0), throw: o(1), return: o(2) }, typeof Symbol == "function" && (i[Symbol.iterator] = function() {
    return this;
  }), i;
  function o(c) {
    return function(l) {
      return a([c, l]);
    };
  }
  function a(c) {
    if (r) throw new TypeError("Generator is already executing.");
    for (; t; ) try {
      if (r = 1, s && (n = c[0] & 2 ? s.return : c[0] ? s.throw || ((n = s.return) && n.call(s), 0) : s.next) && !(n = n.call(s, c[1])).done) return n;
      switch (s = 0, n && (c = [c[0] & 2, n.value]), c[0]) {
        case 0:
        case 1:
          n = c;
          break;
        case 4:
          return t.label++, { value: c[1], done: !1 };
        case 5:
          t.label++, s = c[1], c = [0];
          continue;
        case 7:
          c = t.ops.pop(), t.trys.pop();
          continue;
        default:
          if (n = t.trys, !(n = n.length > 0 && n[n.length - 1]) && (c[0] === 6 || c[0] === 2)) {
            t = 0;
            continue;
          }
          if (c[0] === 3 && (!n || c[1] > n[0] && c[1] < n[3])) {
            t.label = c[1];
            break;
          }
          if (c[0] === 6 && t.label < n[1]) {
            t.label = n[1], n = c;
            break;
          }
          if (n && t.label < n[2]) {
            t.label = n[2], t.ops.push(c);
            break;
          }
          n[2] && t.ops.pop(), t.trys.pop();
          continue;
      }
      c = e.call(A, t);
    } catch (l) {
      c = [6, l], s = 0;
    } finally {
      r = n = 0;
    }
    if (c[0] & 5) throw c[1];
    return { value: c[0] ? c[1] : void 0, done: !0 };
  }
}
function Kr(A, e, t) {
  if (arguments.length === 2) for (var r = 0, s = e.length, n; r < s; r++)
    (n || !(r in e)) && (n || (n = Array.prototype.slice.call(e, 0, r)), n[r] = e[r]);
  return A.concat(n || e);
}
var Ge = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.left = e, this.top = t, this.width = r, this.height = s;
    }
    return A.prototype.add = function(e, t, r, s) {
      return new A(this.left + e, this.top + t, this.width + r, this.height + s);
    }, A.fromClientRect = function(e, t) {
      return new A(t.left + e.windowBounds.left, t.top + e.windowBounds.top, t.width, t.height);
    }, A.fromDOMRectList = function(e, t) {
      var r = Array.from(t).find(function(s) {
        return s.width !== 0;
      });
      return r ? new A(r.left + e.windowBounds.left, r.top + e.windowBounds.top, r.width, r.height) : A.EMPTY;
    }, A.EMPTY = new A(0, 0, 0, 0), A;
  }()
), Gs = function(A, e) {
  return Ge.fromClientRect(A, e.getBoundingClientRect());
}, Jw = function(A) {
  var e = A.body, t = A.documentElement;
  if (!e || !t)
    throw new Error("Unable to get document size");
  var r = Math.max(Math.max(e.scrollWidth, t.scrollWidth), Math.max(e.offsetWidth, t.offsetWidth), Math.max(e.clientWidth, t.clientWidth)), s = Math.max(Math.max(e.scrollHeight, t.scrollHeight), Math.max(e.offsetHeight, t.offsetHeight), Math.max(e.clientHeight, t.clientHeight));
  return new Ge(0, 0, r, s);
}, Ps = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var n = A.charCodeAt(t++);
      (n & 64512) === 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, CA = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], s = -1, n = ""; ++s < t; ) {
    var i = A[s];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (s + 1 === t || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, Lo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Xw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tr = 0; Tr < Lo.length; Tr++)
  Xw[Lo.charCodeAt(Tr)] = Tr;
var So = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Dr = 0; Dr < So.length; Dr++)
  Zt[So.charCodeAt(Dr)] = Dr;
var Ww = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = Zt[A.charCodeAt(r)], i = Zt[A.charCodeAt(r + 1)], o = Zt[A.charCodeAt(r + 2)], a = Zt[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, Yw = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, jw = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ht = 5, Ki = 11, gn = 2, Zw = Ki - ht, Nl = 65536 >> ht, zw = 1 << ht, hn = zw - 1, qw = 1024 >> ht, $w = Nl + qw, AQ = $w, eQ = 32, tQ = AQ + eQ, rQ = 65536 >> Ki, sQ = 1 << Zw, nQ = sQ - 1, Ko = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, iQ = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, oQ = function(A, e) {
  var t = Ww(A), r = Array.isArray(t) ? jw(t) : new Uint32Array(t), s = Array.isArray(t) ? Yw(t) : new Uint16Array(t), n = 24, i = Ko(s, n / 2, r[4] / 2), o = r[5] === 2 ? Ko(s, (n + r[4]) / 2) : iQ(r, Math.ceil((n + r[4]) / 4));
  return new aQ(r[0], r[1], r[2], r[3], i, o);
}, aQ = (
  /** @class */
  function() {
    function A(e, t, r, s, n, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> ht], t = (t << gn) + (e & hn), this.data[t];
        if (e <= 65535)
          return t = this.index[Nl + (e - 55296 >> ht)], t = (t << gn) + (e & hn), this.data[t];
        if (e < this.highStart)
          return t = tQ - rQ + (e >> Ki), t = this.index[t], t += e >> ht & nQ, t = this.index[t], t = (t << gn) + (e & hn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), To = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", lQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var kr = 0; kr < To.length; kr++)
  lQ[To.charCodeAt(kr)] = kr;
var cQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Do = 50, fQ = 1, Vl = 2, Gl = 3, uQ = 4, BQ = 5, ko = 7, Pl = 8, Oo = 9, Ze = 10, Yn = 11, Ro = 12, jn = 13, dQ = 14, zt = 15, Zn = 16, Or = 17, Vt = 18, gQ = 19, Mo = 20, zn = 21, Gt = 22, pn = 23, Qt = 24, ZA = 25, qt = 26, $t = 27, Ct = 28, hQ = 29, ct = 30, pQ = 31, Rr = 32, Mr = 33, qn = 34, $n = 35, Ai = 36, Cr = 37, ei = 38, os = 39, as = 40, wn = 41, Jl = 42, wQ = 43, QQ = [9001, 65288], Xl = "!", q = "×", Nr = "÷", ti = oQ(cQ), _e = [ct, Ai], ri = [fQ, Vl, Gl, BQ], Wl = [Ze, Pl], No = [$t, qt], CQ = ri.concat(Wl), Vo = [ei, os, as, qn, $n], vQ = [zt, jn], UQ = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], s = [];
  return A.forEach(function(n, i) {
    var o = ti.get(n);
    if (o > Do ? (s.push(!0), o -= Do) : s.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), t.push(Zn);
    if (o === uQ || o === Yn) {
      if (i === 0)
        return r.push(i), t.push(ct);
      var a = t[i - 1];
      return CQ.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(ct));
    }
    if (r.push(i), o === pQ)
      return t.push(e === "strict" ? zn : Cr);
    if (o === Jl || o === hQ)
      return t.push(ct);
    if (o === wQ)
      return n >= 131072 && n <= 196605 || n >= 196608 && n <= 262141 ? t.push(Cr) : t.push(ct);
    t.push(o);
  }), [r, t, s];
}, Qn = function(A, e, t, r) {
  var s = r[t];
  if (Array.isArray(A) ? A.indexOf(s) !== -1 : A === s)
    for (var n = t; n <= r.length; ) {
      n++;
      var i = r[n];
      if (i === e)
        return !0;
      if (i !== Ze)
        break;
    }
  if (s === Ze)
    for (var n = t; n > 0; ) {
      n--;
      var o = r[n];
      if (Array.isArray(A) ? A.indexOf(o) !== -1 : A === o)
        for (var a = t; a <= r.length; ) {
          a++;
          var i = r[a];
          if (i === e)
            return !0;
          if (i !== Ze)
            break;
        }
      if (o !== Ze)
        break;
    }
  return !1;
}, Go = function(A, e) {
  for (var t = A; t >= 0; ) {
    var r = e[t];
    if (r === Ze)
      t--;
    else
      return r;
  }
  return 0;
}, FQ = function(A, e, t, r, s) {
  if (t[r] === 0)
    return q;
  var n = r - 1;
  if (Array.isArray(s) && s[n] === !0)
    return q;
  var i = n - 1, o = n + 1, a = e[n], c = i >= 0 ? e[i] : 0, l = e[o];
  if (a === Vl && l === Gl)
    return q;
  if (ri.indexOf(a) !== -1)
    return Xl;
  if (ri.indexOf(l) !== -1 || Wl.indexOf(l) !== -1)
    return q;
  if (Go(n, e) === Pl)
    return Nr;
  if (ti.get(A[n]) === Yn || (a === Rr || a === Mr) && ti.get(A[o]) === Yn || a === ko || l === ko || a === Oo || [Ze, jn, zt].indexOf(a) === -1 && l === Oo || [Or, Vt, gQ, Qt, Ct].indexOf(l) !== -1 || Go(n, e) === Gt || Qn(pn, Gt, n, e) || Qn([Or, Vt], zn, n, e) || Qn(Ro, Ro, n, e))
    return q;
  if (a === Ze)
    return Nr;
  if (a === pn || l === pn)
    return q;
  if (l === Zn || a === Zn)
    return Nr;
  if ([jn, zt, zn].indexOf(l) !== -1 || a === dQ || c === Ai && vQ.indexOf(a) !== -1 || a === Ct && l === Ai || l === Mo || _e.indexOf(l) !== -1 && a === ZA || _e.indexOf(a) !== -1 && l === ZA || a === $t && [Cr, Rr, Mr].indexOf(l) !== -1 || [Cr, Rr, Mr].indexOf(a) !== -1 && l === qt || _e.indexOf(a) !== -1 && No.indexOf(l) !== -1 || No.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [$t, qt].indexOf(a) !== -1 && (l === ZA || [Gt, zt].indexOf(l) !== -1 && e[o + 1] === ZA) || // ( OP | HY ) × NU
  [Gt, zt].indexOf(a) !== -1 && l === ZA || // NU ×	(NU | SY | IS)
  a === ZA && [ZA, Ct, Qt].indexOf(l) !== -1)
    return q;
  if ([ZA, Ct, Qt, Or, Vt].indexOf(l) !== -1)
    for (var f = n; f >= 0; ) {
      var B = e[f];
      if (B === ZA)
        return q;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if ([$t, qt].indexOf(l) !== -1)
    for (var f = [Or, Vt].indexOf(a) !== -1 ? i : n; f >= 0; ) {
      var B = e[f];
      if (B === ZA)
        return q;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if (ei === a && [ei, os, qn, $n].indexOf(l) !== -1 || [os, qn].indexOf(a) !== -1 && [os, as].indexOf(l) !== -1 || [as, $n].indexOf(a) !== -1 && l === as || Vo.indexOf(a) !== -1 && [Mo, qt].indexOf(l) !== -1 || Vo.indexOf(l) !== -1 && a === $t || _e.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || a === Qt && _e.indexOf(l) !== -1 || _e.concat(ZA).indexOf(a) !== -1 && l === Gt && QQ.indexOf(A[o]) === -1 || _e.concat(ZA).indexOf(l) !== -1 && a === Vt)
    return q;
  if (a === wn && l === wn) {
    for (var Q = t[n], v = 1; Q > 0 && (Q--, e[Q] === wn); )
      v++;
    if (v % 2 !== 0)
      return q;
  }
  return a === Rr && l === Mr ? q : Nr;
}, bQ = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = UQ(A, e.lineBreak), r = t[0], s = t[1], n = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (s = s.map(function(o) {
    return [ZA, ct, Jl].indexOf(o) !== -1 ? Cr : o;
  }));
  var i = e.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && A[a] >= 19968 && A[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, mQ = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.codePoints = e, this.required = t === Xl, this.start = r, this.end = s;
    }
    return A.prototype.slice = function() {
      return CA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), xQ = function(A, e) {
  var t = Ps(A), r = bQ(t, e), s = r[0], n = r[1], i = r[2], o = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = q; c < o && (l = FQ(t, n, s, ++c, i)) === q; )
        ;
      if (l !== q || c === o) {
        var f = new mQ(t, l, a, c);
        return a = c, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, yQ = 1, EQ = 2, xr = 4, Po = 8, Qs = 10, Jo = 47, lr = 92, HQ = 9, IQ = 32, Vr = 34, Pt = 61, _Q = 35, LQ = 36, SQ = 37, Gr = 39, Pr = 40, Jt = 41, KQ = 95, WA = 45, TQ = 33, DQ = 60, kQ = 62, OQ = 64, RQ = 91, MQ = 93, NQ = 61, VQ = 123, Jr = 63, GQ = 125, Xo = 124, PQ = 126, JQ = 128, Wo = 65533, Cn = 42, Bt = 43, XQ = 44, WQ = 58, YQ = 59, vr = 46, jQ = 0, ZQ = 8, zQ = 11, qQ = 14, $Q = 31, AC = 127, Qe = -1, Yl = 48, jl = 97, Zl = 101, eC = 102, tC = 117, rC = 122, zl = 65, ql = 69, $l = 70, sC = 85, nC = 90, kA = function(A) {
  return A >= Yl && A <= 57;
}, iC = function(A) {
  return A >= 55296 && A <= 57343;
}, vt = function(A) {
  return kA(A) || A >= zl && A <= $l || A >= jl && A <= eC;
}, oC = function(A) {
  return A >= jl && A <= rC;
}, aC = function(A) {
  return A >= zl && A <= nC;
}, lC = function(A) {
  return oC(A) || aC(A);
}, cC = function(A) {
  return A >= JQ;
}, Xr = function(A) {
  return A === Qs || A === HQ || A === IQ;
}, Cs = function(A) {
  return lC(A) || cC(A) || A === KQ;
}, Yo = function(A) {
  return Cs(A) || kA(A) || A === WA;
}, fC = function(A) {
  return A >= jQ && A <= ZQ || A === zQ || A >= qQ && A <= $Q || A === AC;
}, je = function(A, e) {
  return A !== lr ? !1 : e !== Qs;
}, Wr = function(A, e, t) {
  return A === WA ? Cs(e) || je(e, t) : Cs(A) ? !0 : !!(A === lr && je(A, e));
}, vn = function(A, e, t) {
  return A === Bt || A === WA ? kA(e) ? !0 : e === vr && kA(t) : kA(A === vr ? e : A);
}, uC = function(A) {
  var e = 0, t = 1;
  (A[e] === Bt || A[e] === WA) && (A[e] === WA && (t = -1), e++);
  for (var r = []; kA(A[e]); )
    r.push(A[e++]);
  var s = r.length ? parseInt(CA.apply(void 0, r), 10) : 0;
  A[e] === vr && e++;
  for (var n = []; kA(A[e]); )
    n.push(A[e++]);
  var i = n.length, o = i ? parseInt(CA.apply(void 0, n), 10) : 0;
  (A[e] === ql || A[e] === Zl) && e++;
  var a = 1;
  (A[e] === Bt || A[e] === WA) && (A[e] === WA && (a = -1), e++);
  for (var c = []; kA(A[e]); )
    c.push(A[e++]);
  var l = c.length ? parseInt(CA.apply(void 0, c), 10) : 0;
  return t * (s + o * Math.pow(10, -i)) * Math.pow(10, a * l);
}, BC = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, dC = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, gC = {
  type: 4
  /* COMMA_TOKEN */
}, hC = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, pC = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, wC = {
  type: 21
  /* COLUMN_TOKEN */
}, QC = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, CC = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, vC = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, UC = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, FC = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Yr = {
  type: 23
  /* BAD_URL_TOKEN */
}, bC = {
  type: 1
  /* BAD_STRING_TOKEN */
}, mC = {
  type: 25
  /* CDO_TOKEN */
}, xC = {
  type: 24
  /* CDC_TOKEN */
}, yC = {
  type: 26
  /* COLON_TOKEN */
}, EC = {
  type: 27
  /* SEMICOLON_TOKEN */
}, HC = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, IC = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, _C = {
  type: 31
  /* WHITESPACE_TOKEN */
}, si = {
  type: 32
  /* EOF_TOKEN */
}, Ac = (
  /** @class */
  function() {
    function A() {
      this._value = [];
    }
    return A.prototype.write = function(e) {
      this._value = this._value.concat(Ps(e));
    }, A.prototype.read = function() {
      for (var e = [], t = this.consumeToken(); t !== si; )
        e.push(t), t = this.consumeToken();
      return e;
    }, A.prototype.consumeToken = function() {
      var e = this.consumeCodePoint();
      switch (e) {
        case Vr:
          return this.consumeStringToken(Vr);
        case _Q:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (Yo(t) || je(r, s)) {
            var n = Wr(t, r, s) ? EQ : yQ, i = this.consumeName();
            return { type: 5, value: i, flags: n };
          }
          break;
        case LQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), hC;
          break;
        case Gr:
          return this.consumeStringToken(Gr);
        case Pr:
          return BC;
        case Jt:
          return dC;
        case Cn:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), FC;
          break;
        case Bt:
          if (vn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case XQ:
          return gC;
        case WA:
          var o = e, a = this.peekCodePoint(0), c = this.peekCodePoint(1);
          if (vn(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Wr(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === WA && c === kQ)
            return this.consumeCodePoint(), this.consumeCodePoint(), xC;
          break;
        case vr:
          if (vn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case Jo:
          if (this.peekCodePoint(0) === Cn)
            for (this.consumeCodePoint(); ; ) {
              var l = this.consumeCodePoint();
              if (l === Cn && (l = this.consumeCodePoint(), l === Jo))
                return this.consumeToken();
              if (l === Qe)
                return this.consumeToken();
            }
          break;
        case WQ:
          return yC;
        case YQ:
          return EC;
        case DQ:
          if (this.peekCodePoint(0) === TQ && this.peekCodePoint(1) === WA && this.peekCodePoint(2) === WA)
            return this.consumeCodePoint(), this.consumeCodePoint(), mC;
          break;
        case OQ:
          var f = this.peekCodePoint(0), B = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if (Wr(f, B, Q)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case RQ:
          return HC;
        case lr:
          if (je(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case MQ:
          return IC;
        case NQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), pC;
          break;
        case VQ:
          return vC;
        case GQ:
          return UC;
        case tC:
        case sC:
          var v = this.peekCodePoint(0), U = this.peekCodePoint(1);
          return v === Bt && (vt(U) || U === Jr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Xo:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), QC;
          if (this.peekCodePoint(0) === Xo)
            return this.consumeCodePoint(), wC;
          break;
        case PQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), CC;
          break;
        case Qe:
          return si;
      }
      return Xr(e) ? (this.consumeWhiteSpace(), _C) : kA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Cs(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: CA(e) };
    }, A.prototype.consumeCodePoint = function() {
      var e = this._value.shift();
      return typeof e > "u" ? -1 : e;
    }, A.prototype.reconsumeCodePoint = function(e) {
      this._value.unshift(e);
    }, A.prototype.peekCodePoint = function(e) {
      return e >= this._value.length ? -1 : this._value[e];
    }, A.prototype.consumeUnicodeRangeToken = function() {
      for (var e = [], t = this.consumeCodePoint(); vt(t) && e.length < 6; )
        e.push(t), t = this.consumeCodePoint();
      for (var r = !1; t === Jr && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var s = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Jr ? Yl : a;
        })), 16), n = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Jr ? $l : a;
        })), 16);
        return { type: 30, start: s, end: n };
      }
      var i = parseInt(CA.apply(void 0, e), 16);
      if (this.peekCodePoint(0) === WA && vt(this.peekCodePoint(1))) {
        this.consumeCodePoint(), t = this.consumeCodePoint();
        for (var o = []; vt(t) && o.length < 6; )
          o.push(t), t = this.consumeCodePoint();
        var n = parseInt(CA.apply(void 0, o), 16);
        return { type: 30, start: i, end: n };
      } else
        return { type: 30, start: i, end: i };
    }, A.prototype.consumeIdentLikeToken = function() {
      var e = this.consumeName();
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Pr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Pr ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Gr || t === Vr) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Jt) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), Yr);
      }
      for (; ; ) {
        var s = this.consumeCodePoint();
        if (s === Qe || s === Jt)
          return { type: 22, value: CA.apply(void 0, e) };
        if (Xr(s))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Jt ? (this.consumeCodePoint(), { type: 22, value: CA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), Yr);
        if (s === Vr || s === Gr || s === Pr || fC(s))
          return this.consumeBadUrlRemnants(), Yr;
        if (s === lr)
          if (je(s, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), Yr;
        else
          e.push(s);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Xr(this.peekCodePoint(0)); )
        this.consumeCodePoint();
    }, A.prototype.consumeBadUrlRemnants = function() {
      for (; ; ) {
        var e = this.consumeCodePoint();
        if (e === Jt || e === Qe)
          return;
        je(e, this.peekCodePoint(0)) && this.consumeEscapedCodePoint();
      }
    }, A.prototype.consumeStringSlice = function(e) {
      for (var t = 5e4, r = ""; e > 0; ) {
        var s = Math.min(t, e);
        r += CA.apply(void 0, this._value.splice(0, s)), e -= s;
      }
      return this._value.shift(), r;
    }, A.prototype.consumeStringToken = function(e) {
      var t = "", r = 0;
      do {
        var s = this._value[r];
        if (s === Qe || s === void 0 || s === e)
          return t += this.consumeStringSlice(r), { type: 0, value: t };
        if (s === Qs)
          return this._value.splice(0, r), bC;
        if (s === lr) {
          var n = this._value[r + 1];
          n !== Qe && n !== void 0 && (n === Qs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : je(s, n) && (t += this.consumeStringSlice(r), t += CA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = xr, r = this.peekCodePoint(0);
      for ((r === Bt || r === WA) && e.push(this.consumeCodePoint()); kA(this.peekCodePoint(0)); )
        e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0);
      var s = this.peekCodePoint(1);
      if (r === vr && kA(s))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Po; kA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      r = this.peekCodePoint(0), s = this.peekCodePoint(1);
      var n = this.peekCodePoint(2);
      if ((r === ql || r === Zl) && ((s === Bt || s === WA) && kA(n) || kA(s)))
        for (e.push(this.consumeCodePoint(), this.consumeCodePoint()), t = Po; kA(this.peekCodePoint(0)); )
          e.push(this.consumeCodePoint());
      return [uC(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], s = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Wr(s, n, i)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return s === SQ ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (vt(e)) {
        for (var t = CA(e); vt(this.peekCodePoint(0)) && t.length < 6; )
          t += CA(this.consumeCodePoint());
        Xr(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || iC(r) || r > 1114111 ? Wo : r;
      }
      return e === Qe ? Wo : e;
    }, A.prototype.consumeName = function() {
      for (var e = ""; ; ) {
        var t = this.consumeCodePoint();
        if (Yo(t))
          e += CA(t);
        else if (je(t, this.peekCodePoint(0)))
          e += CA(this.consumeEscapedCodePoint());
        else
          return this.reconsumeCodePoint(t), e;
      }
    }, A;
  }()
), ec = (
  /** @class */
  function() {
    function A(e) {
      this._tokens = e;
    }
    return A.create = function(e) {
      var t = new Ac();
      return t.write(e), new A(t.read());
    }, A.parseValue = function(e) {
      return A.create(e).parseComponentValue();
    }, A.parseValues = function(e) {
      return A.create(e).parseComponentValues();
    }, A.prototype.parseComponentValue = function() {
      for (var e = this.consumeToken(); e.type === 31; )
        e = this.consumeToken();
      if (e.type === 32)
        throw new SyntaxError("Error parsing CSS component value, unexpected EOF");
      this.reconsumeToken(e);
      var t = this.consumeComponentValue();
      do
        e = this.consumeToken();
      while (e.type === 31);
      if (e.type === 32)
        return t;
      throw new SyntaxError("Error parsing CSS component value, multiple values found when expecting only one");
    }, A.prototype.parseComponentValues = function() {
      for (var e = []; ; ) {
        var t = this.consumeComponentValue();
        if (t.type === 32)
          return e;
        e.push(t), e.push();
      }
    }, A.prototype.consumeComponentValue = function() {
      var e = this.consumeToken();
      switch (e.type) {
        case 11:
        case 28:
        case 2:
          return this.consumeSimpleBlock(e.type);
        case 19:
          return this.consumeFunction(e);
      }
      return e;
    }, A.prototype.consumeSimpleBlock = function(e) {
      for (var t = { type: e, values: [] }, r = this.consumeToken(); ; ) {
        if (r.type === 32 || SC(r, e))
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue()), r = this.consumeToken();
      }
    }, A.prototype.consumeFunction = function(e) {
      for (var t = {
        name: e.value,
        values: [],
        type: 18
        /* FUNCTION */
      }; ; ) {
        var r = this.consumeToken();
        if (r.type === 32 || r.type === 3)
          return t;
        this.reconsumeToken(r), t.values.push(this.consumeComponentValue());
      }
    }, A.prototype.consumeToken = function() {
      var e = this._tokens.shift();
      return typeof e > "u" ? si : e;
    }, A.prototype.reconsumeToken = function(e) {
      this._tokens.unshift(e);
    }, A;
  }()
), yr = function(A) {
  return A.type === 15;
}, kt = function(A) {
  return A.type === 17;
}, cA = function(A) {
  return A.type === 20;
}, LC = function(A) {
  return A.type === 0;
}, ni = function(A, e) {
  return cA(A) && A.value === e;
}, tc = function(A) {
  return A.type !== 31;
}, Tt = function(A) {
  return A.type !== 31 && A.type !== 4;
}, ye = function(A) {
  var e = [], t = [];
  return A.forEach(function(r) {
    if (r.type === 4) {
      if (t.length === 0)
        throw new Error("Error parsing function args, zero tokens for arg");
      e.push(t), t = [];
      return;
    }
    r.type !== 31 && t.push(r);
  }), t.length && e.push(t), e;
}, SC = function(A, e) {
  return e === 11 && A.type === 12 || e === 28 && A.type === 29 ? !0 : e === 2 && A.type === 3;
}, st = function(A) {
  return A.type === 17 || A.type === 15;
}, bA = function(A) {
  return A.type === 16 || st(A);
}, rc = function(A) {
  return A.length > 1 ? [A[0], A[1]] : [A[0]];
}, TA = {
  type: 17,
  number: 0,
  flags: xr
}, Ti = {
  type: 16,
  number: 50,
  flags: xr
}, ze = {
  type: 16,
  number: 100,
  flags: xr
}, Ar = function(A, e, t) {
  var r = A[0], s = A[1];
  return [gA(r, e), gA(typeof s < "u" ? s : r, t)];
}, gA = function(A, e) {
  if (A.type === 16)
    return A.number / 100 * e;
  if (yr(A))
    switch (A.unit) {
      case "rem":
      case "em":
        return 16 * A.number;
      case "px":
      default:
        return A.number;
    }
  return A.number;
}, sc = "deg", nc = "grad", ic = "rad", oc = "turn", Js = {
  name: "angle",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit) {
        case sc:
          return Math.PI * e.number / 180;
        case nc:
          return Math.PI / 200 * e.number;
        case ic:
          return e.number;
        case oc:
          return Math.PI * 2 * e.number;
      }
    throw new Error("Unsupported angle type");
  }
}, ac = function(A) {
  return A.type === 15 && (A.unit === sc || A.unit === nc || A.unit === ic || A.unit === oc);
}, lc = function(A) {
  var e = A.filter(cA).map(function(t) {
    return t.value;
  }).join(" ");
  switch (e) {
    case "to bottom right":
    case "to right bottom":
    case "left top":
    case "top left":
      return [TA, TA];
    case "to top":
    case "bottom":
      return se(0);
    case "to bottom left":
    case "to left bottom":
    case "right top":
    case "top right":
      return [TA, ze];
    case "to right":
    case "left":
      return se(90);
    case "to top left":
    case "to left top":
    case "right bottom":
    case "bottom right":
      return [ze, ze];
    case "to bottom":
    case "top":
      return se(180);
    case "to top right":
    case "to right top":
    case "left bottom":
    case "bottom left":
      return [ze, TA];
    case "to left":
    case "right":
      return se(270);
  }
  return 0;
}, se = function(A) {
  return Math.PI * A / 180;
}, et = {
  name: "color",
  parse: function(A, e) {
    if (e.type === 18) {
      var t = KC[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported color function "' + e.name + '"');
      return t(A, e.values);
    }
    if (e.type === 5) {
      if (e.value.length === 3) {
        var r = e.value.substring(0, 1), s = e.value.substring(1, 2), n = e.value.substring(2, 3);
        return qe(parseInt(r + r, 16), parseInt(s + s, 16), parseInt(n + n, 16), 1);
      }
      if (e.value.length === 4) {
        var r = e.value.substring(0, 1), s = e.value.substring(1, 2), n = e.value.substring(2, 3), i = e.value.substring(3, 4);
        return qe(parseInt(r + r, 16), parseInt(s + s, 16), parseInt(n + n, 16), parseInt(i + i, 16) / 255);
      }
      if (e.value.length === 6) {
        var r = e.value.substring(0, 2), s = e.value.substring(2, 4), n = e.value.substring(4, 6);
        return qe(parseInt(r, 16), parseInt(s, 16), parseInt(n, 16), 1);
      }
      if (e.value.length === 8) {
        var r = e.value.substring(0, 2), s = e.value.substring(2, 4), n = e.value.substring(4, 6), i = e.value.substring(6, 8);
        return qe(parseInt(r, 16), parseInt(s, 16), parseInt(n, 16), parseInt(i, 16) / 255);
      }
    }
    if (e.type === 20) {
      var o = Oe[e.value.toUpperCase()];
      if (typeof o < "u")
        return o;
    }
    return Oe.TRANSPARENT;
  }
}, tt = function(A) {
  return (255 & A) === 0;
}, IA = function(A) {
  var e = 255 & A, t = 255 & A >> 8, r = 255 & A >> 16, s = 255 & A >> 24;
  return e < 255 ? "rgba(" + s + "," + r + "," + t + "," + e / 255 + ")" : "rgb(" + s + "," + r + "," + t + ")";
}, qe = function(A, e, t, r) {
  return (A << 24 | e << 16 | t << 8 | Math.round(r * 255) << 0) >>> 0;
}, jo = function(A, e) {
  if (A.type === 17)
    return A.number;
  if (A.type === 16) {
    var t = e === 3 ? 1 : 255;
    return e === 3 ? A.number / 100 * t : Math.round(A.number / 100 * t);
  }
  return 0;
}, Zo = function(A, e) {
  var t = e.filter(Tt);
  if (t.length === 3) {
    var r = t.map(jo), s = r[0], n = r[1], i = r[2];
    return qe(s, n, i, 1);
  }
  if (t.length === 4) {
    var o = t.map(jo), s = o[0], n = o[1], i = o[2], a = o[3];
    return qe(s, n, i, a);
  }
  return 0;
};
function Un(A, e, t) {
  return t < 0 && (t += 1), t >= 1 && (t -= 1), t < 1 / 6 ? (e - A) * t * 6 + A : t < 1 / 2 ? e : t < 2 / 3 ? (e - A) * 6 * (2 / 3 - t) + A : A;
}
var zo = function(A, e) {
  var t = e.filter(Tt), r = t[0], s = t[1], n = t[2], i = t[3], o = (r.type === 17 ? se(r.number) : Js.parse(A, r)) / (Math.PI * 2), a = bA(s) ? s.number / 100 : 0, c = bA(n) ? n.number / 100 : 0, l = typeof i < "u" && bA(i) ? gA(i, 1) : 1;
  if (a === 0)
    return qe(c * 255, c * 255, c * 255, 1);
  var f = c <= 0.5 ? c * (a + 1) : c + a - c * a, B = c * 2 - f, Q = Un(B, f, o + 1 / 3), v = Un(B, f, o), U = Un(B, f, o - 1 / 3);
  return qe(Q * 255, v * 255, U * 255, l);
}, KC = {
  hsl: zo,
  hsla: zo,
  rgb: Zo,
  rgba: Zo
}, cr = function(A, e) {
  return et.parse(A, ec.create(e).parseComponentValue());
}, Oe = {
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
}, TC = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (cA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, DC = {
  name: "background-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Xs = function(A, e) {
  var t = et.parse(A, e[0]), r = e[1];
  return r && bA(r) ? { color: t, stop: r } : { color: t, stop: null };
}, qo = function(A, e) {
  var t = A[0], r = A[A.length - 1];
  t.stop === null && (t.stop = TA), r.stop === null && (r.stop = ze);
  for (var s = [], n = 0, i = 0; i < A.length; i++) {
    var o = A[i].stop;
    if (o !== null) {
      var a = gA(o, e);
      a > n ? s.push(a) : s.push(n), n = a;
    } else
      s.push(null);
  }
  for (var c = null, i = 0; i < s.length; i++) {
    var l = s[i];
    if (l === null)
      c === null && (c = i);
    else if (c !== null) {
      for (var f = i - c, B = s[c - 1], Q = (l - B) / (f + 1), v = 1; v <= f; v++)
        s[c + v - 1] = Q * v;
      c = null;
    }
  }
  return A.map(function(U, K) {
    var H = U.color;
    return { color: H, stop: Math.max(Math.min(1, s[K] / e), 0) };
  });
}, kC = function(A, e, t) {
  var r = e / 2, s = t / 2, n = gA(A[0], e) - r, i = s - gA(A[1], t);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, OC = function(A, e, t) {
  var r = typeof A == "number" ? A : kC(A, e, t), s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), n = e / 2, i = t / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
  return [s, n - c, n + c, i - a, i + a];
}, ae = function(A, e) {
  return Math.sqrt(A * A + e * e);
}, $o = function(A, e, t, r, s) {
  var n = [
    [0, 0],
    [0, e],
    [A, 0],
    [A, e]
  ];
  return n.reduce(function(i, o) {
    var a = o[0], c = o[1], l = ae(t - a, r - c);
    return (s ? l < i.optimumDistance : l > i.optimumDistance) ? {
      optimumCorner: o,
      optimumDistance: l
    } : i;
  }, {
    optimumDistance: s ? 1 / 0 : -1 / 0,
    optimumCorner: null
  }).optimumCorner;
}, RC = function(A, e, t, r, s) {
  var n = 0, i = 0;
  switch (A.size) {
    case 0:
      A.shape === 0 ? n = i = Math.min(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - s)) : A.shape === 1 && (n = Math.min(Math.abs(e), Math.abs(e - r)), i = Math.min(Math.abs(t), Math.abs(t - s)));
      break;
    case 2:
      if (A.shape === 0)
        n = i = Math.min(ae(e, t), ae(e, t - s), ae(e - r, t), ae(e - r, t - s));
      else if (A.shape === 1) {
        var o = Math.min(Math.abs(t), Math.abs(t - s)) / Math.min(Math.abs(e), Math.abs(e - r)), a = $o(r, s, e, t, !0), c = a[0], l = a[1];
        n = ae(c - e, (l - t) / o), i = o * n;
      }
      break;
    case 1:
      A.shape === 0 ? n = i = Math.max(Math.abs(e), Math.abs(e - r), Math.abs(t), Math.abs(t - s)) : A.shape === 1 && (n = Math.max(Math.abs(e), Math.abs(e - r)), i = Math.max(Math.abs(t), Math.abs(t - s)));
      break;
    case 3:
      if (A.shape === 0)
        n = i = Math.max(ae(e, t), ae(e, t - s), ae(e - r, t), ae(e - r, t - s));
      else if (A.shape === 1) {
        var o = Math.max(Math.abs(t), Math.abs(t - s)) / Math.max(Math.abs(e), Math.abs(e - r)), f = $o(r, s, e, t, !1), c = f[0], l = f[1];
        n = ae(c - e, (l - t) / o), i = o * n;
      }
      break;
  }
  return Array.isArray(A.size) && (n = gA(A.size[0], r), i = A.size.length === 2 ? gA(A.size[1], s) : n), [n, i];
}, MC = function(A, e) {
  var t = se(180), r = [];
  return ye(e).forEach(function(s, n) {
    if (n === 0) {
      var i = s[0];
      if (i.type === 20 && i.value === "to") {
        t = lc(s);
        return;
      } else if (ac(i)) {
        t = Js.parse(A, i);
        return;
      }
    }
    var o = Xs(A, s);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, jr = function(A, e) {
  var t = se(180), r = [];
  return ye(e).forEach(function(s, n) {
    if (n === 0) {
      var i = s[0];
      if (i.type === 20 && ["top", "left", "right", "bottom"].indexOf(i.value) !== -1) {
        t = lc(s);
        return;
      } else if (ac(i)) {
        t = (Js.parse(A, i) + se(270)) % se(360);
        return;
      }
    }
    var o = Xs(A, s);
    r.push(o);
  }), {
    angle: t,
    stops: r,
    type: 1
    /* LINEAR_GRADIENT */
  };
}, NC = function(A, e) {
  var t = se(180), r = [], s = 1, n = 0, i = 3, o = [];
  return ye(e).forEach(function(a, c) {
    var l = a[0];
    if (c === 0) {
      if (cA(l) && l.value === "linear") {
        s = 1;
        return;
      } else if (cA(l) && l.value === "radial") {
        s = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        var f = et.parse(A, l.values[0]);
        r.push({ stop: TA, color: f });
      } else if (l.name === "to") {
        var f = et.parse(A, l.values[0]);
        r.push({ stop: ze, color: f });
      } else if (l.name === "color-stop") {
        var B = l.values.filter(Tt);
        if (B.length === 2) {
          var f = et.parse(A, B[1]), Q = B[0];
          kt(Q) && r.push({
            stop: { type: 16, number: Q.number * 100, flags: Q.flags },
            color: f
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (t + se(180)) % se(360),
    stops: r,
    type: s
  } : { size: i, shape: n, stops: r, position: o, type: s };
}, cc = "closest-side", fc = "farthest-side", uc = "closest-corner", Bc = "farthest-corner", dc = "circle", gc = "ellipse", hc = "cover", pc = "contain", VC = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return ye(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0) {
      var c = !1;
      a = i.reduce(function(f, B) {
        if (c)
          if (cA(B))
            switch (B.value) {
              case "center":
                return n.push(Ti), f;
              case "top":
              case "left":
                return n.push(TA), f;
              case "right":
              case "bottom":
                return n.push(ze), f;
            }
          else (bA(B) || st(B)) && n.push(B);
        else if (cA(B))
          switch (B.value) {
            case dc:
              return t = 0, !1;
            case gc:
              return t = 1, !1;
            case "at":
              return c = !0, !1;
            case cc:
              return r = 0, !1;
            case hc:
            case fc:
              return r = 1, !1;
            case pc:
            case uc:
              return r = 2, !1;
            case Bc:
              return r = 3, !1;
          }
        else if (st(B) || bA(B))
          return Array.isArray(r) || (r = []), r.push(B), !1;
        return f;
      }, a);
    }
    if (a) {
      var l = Xs(A, i);
      s.push(l);
    }
  }), {
    size: r,
    shape: t,
    stops: s,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, Zr = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return ye(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0 ? a = i.reduce(function(l, f) {
      if (cA(f))
        switch (f.value) {
          case "center":
            return n.push(Ti), !1;
          case "top":
          case "left":
            return n.push(TA), !1;
          case "right":
          case "bottom":
            return n.push(ze), !1;
        }
      else if (bA(f) || st(f))
        return n.push(f), !1;
      return l;
    }, a) : o === 1 && (a = i.reduce(function(l, f) {
      if (cA(f))
        switch (f.value) {
          case dc:
            return t = 0, !1;
          case gc:
            return t = 1, !1;
          case pc:
          case cc:
            return r = 0, !1;
          case fc:
            return r = 1, !1;
          case uc:
            return r = 2, !1;
          case hc:
          case Bc:
            return r = 3, !1;
        }
      else if (st(f) || bA(f))
        return Array.isArray(r) || (r = []), r.push(f), !1;
      return l;
    }, a)), a) {
      var c = Xs(A, i);
      s.push(c);
    }
  }), {
    size: r,
    shape: t,
    stops: s,
    position: n,
    type: 2
    /* RADIAL_GRADIENT */
  };
}, GC = function(A) {
  return A.type === 1;
}, PC = function(A) {
  return A.type === 2;
}, Di = {
  name: "image",
  parse: function(A, e) {
    if (e.type === 22) {
      var t = {
        url: e.value,
        type: 0
        /* URL */
      };
      return A.cache.addImage(e.value), t;
    }
    if (e.type === 18) {
      var r = wc[e.name];
      if (typeof r > "u")
        throw new Error('Attempting to parse an unsupported image function "' + e.name + '"');
      return r(A, e.values);
    }
    throw new Error("Unsupported image type " + e.type);
  }
};
function JC(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!wc[A.name]);
}
var wc = {
  "linear-gradient": MC,
  "-moz-linear-gradient": jr,
  "-ms-linear-gradient": jr,
  "-o-linear-gradient": jr,
  "-webkit-linear-gradient": jr,
  "radial-gradient": VC,
  "-moz-radial-gradient": Zr,
  "-ms-radial-gradient": Zr,
  "-o-radial-gradient": Zr,
  "-webkit-radial-gradient": Zr,
  "-webkit-gradient": NC
}, XC = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Tt(r) && JC(r);
    }).map(function(r) {
      return Di.parse(A, r);
    });
  }
}, WC = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (cA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, YC = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(bA);
    }).map(rc);
  }
}, jC = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(cA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(ZC);
  }
}, ZC = function(A) {
  switch (A) {
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
}, Lt;
(function(A) {
  A.AUTO = "auto", A.CONTAIN = "contain", A.COVER = "cover";
})(Lt || (Lt = {}));
var zC = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return ye(e).map(function(t) {
      return t.filter(qC);
    });
  }
}, qC = function(A) {
  return cA(A) || bA(A);
}, Ws = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, $C = Ws("top"), Av = Ws("right"), ev = Ws("bottom"), tv = Ws("left"), Ys = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return rc(t.filter(bA));
    }
  };
}, rv = Ys("top-left"), sv = Ys("top-right"), nv = Ys("bottom-right"), iv = Ys("bottom-left"), js = function(A) {
  return {
    name: "border-" + A + "-style",
    initialValue: "solid",
    prefix: !1,
    type: 2,
    parse: function(e, t) {
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
  };
}, ov = js("top"), av = js("right"), lv = js("bottom"), cv = js("left"), Zs = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return yr(t) ? t.number : 0;
    }
  };
}, fv = Zs("top"), uv = Zs("right"), Bv = Zs("bottom"), dv = Zs("left"), gv = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, hv = {
  name: "direction",
  initialValue: "ltr",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "rtl":
        return 1;
      case "ltr":
      default:
        return 0;
    }
  }
}, pv = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(cA).reduce(
      function(t, r) {
        return t | wv(r.value);
      },
      0
      /* NONE */
    );
  }
}, wv = function(A) {
  switch (A) {
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
}, Qv = {
  name: "float",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Cv = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, vs;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(vs || (vs = {}));
var vv = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return vs.STRICT;
      case "normal":
      default:
        return vs.NORMAL;
    }
  }
}, Uv = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Aa = function(A, e) {
  return cA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : bA(A) ? gA(A, e) : e;
}, Fv = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Di.parse(A, e);
  }
}, bv = {
  name: "list-style-position",
  initialValue: "outside",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "inside":
        return 0;
      case "outside":
      default:
        return 1;
    }
  }
}, ii = {
  name: "list-style-type",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
        return 22;
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
}, zs = function(A) {
  return {
    name: "margin-" + A,
    initialValue: "0",
    prefix: !1,
    type: 4
    /* TOKEN_VALUE */
  };
}, mv = zs("top"), xv = zs("right"), yv = zs("bottom"), Ev = zs("left"), Hv = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(cA).map(function(t) {
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
    });
  }
}, Iv = {
  name: "overflow-wrap",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-word":
        return "break-word";
      case "normal":
      default:
        return "normal";
    }
  }
}, qs = function(A) {
  return {
    name: "padding-" + A,
    initialValue: "0",
    prefix: !1,
    type: 3,
    format: "length-percentage"
  };
}, _v = qs("top"), Lv = qs("right"), Sv = qs("bottom"), Kv = qs("left"), Tv = {
  name: "text-align",
  initialValue: "left",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, Dv = {
  name: "position",
  initialValue: "static",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
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
}, kv = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : ye(e).map(function(t) {
      for (var r = {
        color: Oe.TRANSPARENT,
        offsetX: TA,
        offsetY: TA,
        blur: TA
      }, s = 0, n = 0; n < t.length; n++) {
        var i = t[n];
        st(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : r.blur = i, s++) : r.color = et.parse(A, i);
      }
      return r;
    });
  }
}, Ov = {
  name: "text-transform",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "uppercase":
        return 2;
      case "lowercase":
        return 1;
      case "capitalize":
        return 3;
    }
    return 0;
  }
}, Rv = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = Vv[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, Mv = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, Nv = function(A) {
  var e = A.filter(function(a) {
    return a.type === 17;
  }).map(function(a) {
    return a.number;
  }), t = e[0], r = e[1];
  e[2], e[3];
  var s = e[4], n = e[5];
  e[6], e[7], e[8], e[9], e[10], e[11];
  var i = e[12], o = e[13];
  return e[14], e[15], e.length === 16 ? [t, r, s, n, i, o] : null;
}, Vv = {
  matrix: Mv,
  matrix3d: Nv
}, ea = {
  type: 16,
  number: 50,
  flags: xr
}, Gv = [ea, ea], Pv = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(bA);
    return t.length !== 2 ? Gv : [t[0], t[1]];
  }
}, Jv = {
  name: "visible",
  initialValue: "none",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "hidden":
        return 1;
      case "collapse":
        return 2;
      case "visible":
      default:
        return 0;
    }
  }
}, fr;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(fr || (fr = {}));
var Xv = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return fr.BREAK_ALL;
      case "keep-all":
        return fr.KEEP_ALL;
      case "normal":
      default:
        return fr.NORMAL;
    }
  }
}, Wv = {
  name: "z-index",
  initialValue: "auto",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20)
      return { auto: !0, order: 0 };
    if (kt(e))
      return { auto: !1, order: e.number };
    throw new Error("Invalid z-index number parsed");
  }
}, Qc = {
  name: "time",
  parse: function(A, e) {
    if (e.type === 15)
      switch (e.unit.toLowerCase()) {
        case "s":
          return 1e3 * e.number;
        case "ms":
          return e.number;
      }
    throw new Error("Unsupported time type");
  }
}, Yv = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return kt(e) ? e.number : 1;
  }
}, jv = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, Zv = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(cA).map(function(t) {
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
    }).filter(function(t) {
      return t !== 0;
    });
  }
}, zv = {
  name: "font-family",
  initialValue: "",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [], r = [];
    return e.forEach(function(s) {
      switch (s.type) {
        case 20:
        case 0:
          t.push(s.value);
          break;
        case 17:
          t.push(s.number.toString());
          break;
        case 4:
          r.push(t.join(" ")), t.length = 0;
          break;
      }
    }), t.length && r.push(t.join(" ")), r.map(function(s) {
      return s.indexOf(" ") === -1 ? s : "'" + s + "'";
    });
  }
}, qv = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, $v = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (kt(e))
      return e.number;
    if (cA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, A0 = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(cA).map(function(t) {
      return t.value;
    });
  }
}, e0 = {
  name: "font-style",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "oblique":
        return "oblique";
      case "italic":
        return "italic";
      case "normal":
      default:
        return "normal";
    }
  }
}, yA = function(A, e) {
  return (A & e) !== 0;
}, t0 = {
  name: "content",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e;
  }
}, r0 = {
  name: "counter-increment",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    for (var r = [], s = e.filter(tc), n = 0; n < s.length; n++) {
      var i = s[n], o = s[n + 1];
      if (i.type === 20) {
        var a = o && kt(o) ? o.number : 1;
        r.push({ counter: i.value, increment: a });
      }
    }
    return r;
  }
}, s0 = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(tc), s = 0; s < r.length; s++) {
      var n = r[s], i = r[s + 1];
      if (cA(n) && n.value !== "none") {
        var o = i && kt(i) ? i.number : 0;
        t.push({ counter: n.value, reset: o });
      }
    }
    return t;
  }
}, n0 = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(yr).map(function(t) {
      return Qc.parse(A, t);
    });
  }
}, i0 = {
  name: "quotes",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return null;
    var t = e[0];
    if (t.type === 20 && t.value === "none")
      return null;
    var r = [], s = e.filter(LC);
    if (s.length % 2 !== 0)
      return null;
    for (var n = 0; n < s.length; n += 2) {
      var i = s[n].value, o = s[n + 1].value;
      r.push({ open: i, close: o });
    }
    return r;
  }
}, ta = function(A, e, t) {
  if (!A)
    return "";
  var r = A[Math.min(e, A.length - 1)];
  return r ? t ? r.open : r.close : "";
}, o0 = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : ye(e).map(function(t) {
      for (var r = {
        color: 255,
        offsetX: TA,
        offsetY: TA,
        blur: TA,
        spread: TA,
        inset: !1
      }, s = 0, n = 0; n < t.length; n++) {
        var i = t[n];
        ni(i, "inset") ? r.inset = !0 : st(i) ? (s === 0 ? r.offsetX = i : s === 1 ? r.offsetY = i : s === 2 ? r.blur = i : r.spread = i, s++) : r.color = et.parse(A, i);
      }
      return r;
    });
  }
}, a0 = {
  name: "paint-order",
  initialValue: "normal",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    var t = [
      0,
      1,
      2
      /* MARKERS */
    ], r = [];
    return e.filter(cA).forEach(function(s) {
      switch (s.value) {
        case "stroke":
          r.push(
            1
            /* STROKE */
          );
          break;
        case "fill":
          r.push(
            0
            /* FILL */
          );
          break;
        case "markers":
          r.push(
            2
            /* MARKERS */
          );
          break;
      }
    }), t.forEach(function(s) {
      r.indexOf(s) === -1 && r.push(s);
    }), r;
  }
}, l0 = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, c0 = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return yr(e) ? e.number : 0;
  }
}, f0 = (
  /** @class */
  function() {
    function A(e, t) {
      var r, s;
      this.animationDuration = M(e, n0, t.animationDuration), this.backgroundClip = M(e, TC, t.backgroundClip), this.backgroundColor = M(e, DC, t.backgroundColor), this.backgroundImage = M(e, XC, t.backgroundImage), this.backgroundOrigin = M(e, WC, t.backgroundOrigin), this.backgroundPosition = M(e, YC, t.backgroundPosition), this.backgroundRepeat = M(e, jC, t.backgroundRepeat), this.backgroundSize = M(e, zC, t.backgroundSize), this.borderTopColor = M(e, $C, t.borderTopColor), this.borderRightColor = M(e, Av, t.borderRightColor), this.borderBottomColor = M(e, ev, t.borderBottomColor), this.borderLeftColor = M(e, tv, t.borderLeftColor), this.borderTopLeftRadius = M(e, rv, t.borderTopLeftRadius), this.borderTopRightRadius = M(e, sv, t.borderTopRightRadius), this.borderBottomRightRadius = M(e, nv, t.borderBottomRightRadius), this.borderBottomLeftRadius = M(e, iv, t.borderBottomLeftRadius), this.borderTopStyle = M(e, ov, t.borderTopStyle), this.borderRightStyle = M(e, av, t.borderRightStyle), this.borderBottomStyle = M(e, lv, t.borderBottomStyle), this.borderLeftStyle = M(e, cv, t.borderLeftStyle), this.borderTopWidth = M(e, fv, t.borderTopWidth), this.borderRightWidth = M(e, uv, t.borderRightWidth), this.borderBottomWidth = M(e, Bv, t.borderBottomWidth), this.borderLeftWidth = M(e, dv, t.borderLeftWidth), this.boxShadow = M(e, o0, t.boxShadow), this.color = M(e, gv, t.color), this.direction = M(e, hv, t.direction), this.display = M(e, pv, t.display), this.float = M(e, Qv, t.cssFloat), this.fontFamily = M(e, zv, t.fontFamily), this.fontSize = M(e, qv, t.fontSize), this.fontStyle = M(e, e0, t.fontStyle), this.fontVariant = M(e, A0, t.fontVariant), this.fontWeight = M(e, $v, t.fontWeight), this.letterSpacing = M(e, Cv, t.letterSpacing), this.lineBreak = M(e, vv, t.lineBreak), this.lineHeight = M(e, Uv, t.lineHeight), this.listStyleImage = M(e, Fv, t.listStyleImage), this.listStylePosition = M(e, bv, t.listStylePosition), this.listStyleType = M(e, ii, t.listStyleType), this.marginTop = M(e, mv, t.marginTop), this.marginRight = M(e, xv, t.marginRight), this.marginBottom = M(e, yv, t.marginBottom), this.marginLeft = M(e, Ev, t.marginLeft), this.opacity = M(e, Yv, t.opacity);
      var n = M(e, Hv, t.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = M(e, Iv, t.overflowWrap), this.paddingTop = M(e, _v, t.paddingTop), this.paddingRight = M(e, Lv, t.paddingRight), this.paddingBottom = M(e, Sv, t.paddingBottom), this.paddingLeft = M(e, Kv, t.paddingLeft), this.paintOrder = M(e, a0, t.paintOrder), this.position = M(e, Dv, t.position), this.textAlign = M(e, Tv, t.textAlign), this.textDecorationColor = M(e, jv, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = M(e, Zv, (s = t.textDecorationLine) !== null && s !== void 0 ? s : t.textDecoration), this.textShadow = M(e, kv, t.textShadow), this.textTransform = M(e, Ov, t.textTransform), this.transform = M(e, Rv, t.transform), this.transformOrigin = M(e, Pv, t.transformOrigin), this.visibility = M(e, Jv, t.visibility), this.webkitTextStrokeColor = M(e, l0, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = M(e, c0, t.webkitTextStrokeWidth), this.wordBreak = M(e, Xv, t.wordBreak), this.zIndex = M(e, Wv, t.zIndex);
    }
    return A.prototype.isVisible = function() {
      return this.display > 0 && this.opacity > 0 && this.visibility === 0;
    }, A.prototype.isTransparent = function() {
      return tt(this.backgroundColor);
    }, A.prototype.isTransformed = function() {
      return this.transform !== null;
    }, A.prototype.isPositioned = function() {
      return this.position !== 0;
    }, A.prototype.isPositionedWithZIndex = function() {
      return this.isPositioned() && !this.zIndex.auto;
    }, A.prototype.isFloating = function() {
      return this.float !== 0;
    }, A.prototype.isInlineLevel = function() {
      return yA(
        this.display,
        4
        /* INLINE */
      ) || yA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || yA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || yA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || yA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || yA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), u0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = M(e, t0, t.content), this.quotes = M(e, i0, t.quotes);
    }
    return A;
  }()
), ra = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = M(e, r0, t.counterIncrement), this.counterReset = M(e, s0, t.counterReset);
    }
    return A;
  }()
), M = function(A, e, t) {
  var r = new Ac(), s = t !== null && typeof t < "u" ? t.toString() : e.initialValue;
  r.write(s);
  var n = new ec(r.read());
  switch (e.type) {
    case 2:
      var i = n.parseComponentValue();
      return e.parse(A, cA(i) ? i.value : e.initialValue);
    case 0:
      return e.parse(A, n.parseComponentValue());
    case 1:
      return e.parse(A, n.parseComponentValues());
    case 4:
      return n.parseComponentValue();
    case 3:
      switch (e.format) {
        case "angle":
          return Js.parse(A, n.parseComponentValue());
        case "color":
          return et.parse(A, n.parseComponentValue());
        case "image":
          return Di.parse(A, n.parseComponentValue());
        case "length":
          var o = n.parseComponentValue();
          return st(o) ? o : TA;
        case "length-percentage":
          var a = n.parseComponentValue();
          return bA(a) ? a : TA;
        case "time":
          return Qc.parse(A, n.parseComponentValue());
      }
      break;
  }
}, B0 = "data-html2canvas-debug", d0 = function(A) {
  var e = A.getAttribute(B0);
  switch (e) {
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
}, oi = function(A, e) {
  var t = d0(A);
  return t === 1 || e === t;
}, Ee = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, oi(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new f0(e, window.getComputedStyle(t, null)), ci(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Gs(this.context, t), oi(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), g0 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zr = 0; zr < sa.length; zr++)
  er[sa.charCodeAt(zr)] = zr;
var h0 = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = er[A.charCodeAt(r)], i = er[A.charCodeAt(r + 1)], o = er[A.charCodeAt(r + 2)], a = er[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, p0 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, w0 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, pt = 5, ki = 11, Fn = 2, Q0 = ki - pt, Cc = 65536 >> pt, C0 = 1 << pt, bn = C0 - 1, v0 = 1024 >> pt, U0 = Cc + v0, F0 = U0, b0 = 32, m0 = F0 + b0, x0 = 65536 >> ki, y0 = 1 << Q0, E0 = y0 - 1, na = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, H0 = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, I0 = function(A, e) {
  var t = h0(A), r = Array.isArray(t) ? w0(t) : new Uint32Array(t), s = Array.isArray(t) ? p0(t) : new Uint16Array(t), n = 24, i = na(s, n / 2, r[4] / 2), o = r[5] === 2 ? na(s, (n + r[4]) / 2) : H0(r, Math.ceil((n + r[4]) / 4));
  return new _0(r[0], r[1], r[2], r[3], i, o);
}, _0 = (
  /** @class */
  function() {
    function A(e, t, r, s, n, i) {
      this.initialValue = e, this.errorValue = t, this.highStart = r, this.highValueIndex = s, this.index = n, this.data = i;
    }
    return A.prototype.get = function(e) {
      var t;
      if (e >= 0) {
        if (e < 55296 || e > 56319 && e <= 65535)
          return t = this.index[e >> pt], t = (t << Fn) + (e & bn), this.data[t];
        if (e <= 65535)
          return t = this.index[Cc + (e - 55296 >> pt)], t = (t << Fn) + (e & bn), this.data[t];
        if (e < this.highStart)
          return t = m0 - x0 + (e >> ki), t = this.index[t], t += e >> pt & E0, t = this.index[t], t = (t << Fn) + (e & bn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", L0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qr = 0; qr < ia.length; qr++)
  L0[ia.charCodeAt(qr)] = qr;
var S0 = 1, mn = 2, xn = 3, oa = 4, aa = 5, K0 = 7, la = 8, yn = 9, En = 10, ca = 11, fa = 12, ua = 13, Ba = 14, Hn = 15, T0 = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var n = A.charCodeAt(t++);
      (n & 64512) === 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, D0 = function() {
  for (var A = [], e = 0; e < arguments.length; e++)
    A[e] = arguments[e];
  if (String.fromCodePoint)
    return String.fromCodePoint.apply(String, A);
  var t = A.length;
  if (!t)
    return "";
  for (var r = [], s = -1, n = ""; ++s < t; ) {
    var i = A[s];
    i <= 65535 ? r.push(i) : (i -= 65536, r.push((i >> 10) + 55296, i % 1024 + 56320)), (s + 1 === t || r.length > 16384) && (n += String.fromCharCode.apply(String, r), r.length = 0);
  }
  return n;
}, k0 = I0(g0), te = "×", In = "÷", O0 = function(A) {
  return k0.get(A);
}, R0 = function(A, e, t) {
  var r = t - 2, s = e[r], n = e[t - 1], i = e[t];
  if (n === mn && i === xn)
    return te;
  if (n === mn || n === xn || n === oa || i === mn || i === xn || i === oa)
    return In;
  if (n === la && [la, yn, ca, fa].indexOf(i) !== -1 || (n === ca || n === yn) && (i === yn || i === En) || (n === fa || n === En) && i === En || i === ua || i === aa || i === K0 || n === S0)
    return te;
  if (n === ua && i === Ba) {
    for (; s === aa; )
      s = e[--r];
    if (s === Ba)
      return te;
  }
  if (n === Hn && i === Hn) {
    for (var o = 0; s === Hn; )
      o++, s = e[--r];
    if (o % 2 === 0)
      return te;
  }
  return In;
}, M0 = function(A) {
  var e = T0(A), t = e.length, r = 0, s = 0, n = e.map(O0);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = te; r < t && (i = R0(e, n, ++r)) === te; )
        ;
      if (i !== te || r === t) {
        var o = D0.apply(null, e.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, N0 = function(A) {
  for (var e = M0(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, V0 = function(A) {
  var e = 123;
  if (A.createRange) {
    var t = A.createRange();
    if (t.getBoundingClientRect) {
      var r = A.createElement("boundtest");
      r.style.height = e + "px", r.style.display = "block", A.body.appendChild(r), t.selectNode(r);
      var s = t.getBoundingClientRect(), n = Math.round(s.height);
      if (A.body.removeChild(r), n === e)
        return !0;
    }
  }
  return !1;
}, G0 = function(A) {
  var e = A.createElement("boundtest");
  e.style.width = "50px", e.style.display = "block", e.style.fontSize = "12px", e.style.letterSpacing = "0px", e.style.wordSpacing = "0px", A.body.appendChild(e);
  var t = A.createRange();
  e.innerHTML = typeof "".repeat == "function" ? "&#128104;".repeat(10) : "";
  var r = e.firstChild, s = Ps(r.data).map(function(a) {
    return CA(a);
  }), n = 0, i = {}, o = s.every(function(a, c) {
    t.setStart(r, n), t.setEnd(r, n + a.length);
    var l = t.getBoundingClientRect();
    n += a.length;
    var f = l.x > i.x || l.y > i.y;
    return i = l, c === 0 ? !0 : f;
  });
  return A.body.removeChild(e), o;
}, P0 = function() {
  return typeof new Image().crossOrigin < "u";
}, J0 = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, X0 = function(A) {
  var e = new Image(), t = A.createElement("canvas"), r = t.getContext("2d");
  if (!r)
    return !1;
  e.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg'></svg>";
  try {
    r.drawImage(e, 0, 0), t.toDataURL();
  } catch {
    return !1;
  }
  return !0;
}, da = function(A) {
  return A[0] === 0 && A[1] === 255 && A[2] === 0 && A[3] === 255;
}, W0 = function(A) {
  var e = A.createElement("canvas"), t = 100;
  e.width = t, e.height = t;
  var r = e.getContext("2d");
  if (!r)
    return Promise.reject(!1);
  r.fillStyle = "rgb(0, 255, 0)", r.fillRect(0, 0, t, t);
  var s = new Image(), n = e.toDataURL();
  s.src = n;
  var i = ai(t, t, 0, 0, s);
  return r.fillStyle = "red", r.fillRect(0, 0, t, t), ga(i).then(function(o) {
    r.drawImage(o, 0, 0);
    var a = r.getImageData(0, 0, t, t).data;
    r.fillStyle = "red", r.fillRect(0, 0, t, t);
    var c = A.createElement("div");
    return c.style.backgroundImage = "url(" + n + ")", c.style.height = t + "px", da(a) ? ga(ai(t, t, 0, 0, c)) : Promise.reject(!1);
  }).then(function(o) {
    return r.drawImage(o, 0, 0), da(r.getImageData(0, 0, t, t).data);
  }).catch(function() {
    return !1;
  });
}, ai = function(A, e, t, r, s) {
  var n = "http://www.w3.org/2000/svg", i = document.createElementNS(n, "svg"), o = document.createElementNS(n, "foreignObject");
  return i.setAttributeNS(null, "width", A.toString()), i.setAttributeNS(null, "height", e.toString()), o.setAttributeNS(null, "width", "100%"), o.setAttributeNS(null, "height", "100%"), o.setAttributeNS(null, "x", t.toString()), o.setAttributeNS(null, "y", r.toString()), o.setAttributeNS(null, "externalResourcesRequired", "true"), i.appendChild(o), o.appendChild(s), i;
}, ga = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      return e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, KA = {
  get SUPPORT_RANGE_BOUNDS() {
    var A = V0(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && G0(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = X0(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? W0(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = P0();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = J0();
    return Object.defineProperty(KA, "SUPPORT_RESPONSE_TYPE", { value: A }), A;
  },
  get SUPPORT_CORS_XHR() {
    var A = "withCredentials" in new XMLHttpRequest();
    return Object.defineProperty(KA, "SUPPORT_CORS_XHR", { value: A }), A;
  },
  get SUPPORT_NATIVE_TEXT_SEGMENTATION() {
    var A = !!(typeof Intl < "u" && Intl.Segmenter);
    return Object.defineProperty(KA, "SUPPORT_NATIVE_TEXT_SEGMENTATION", { value: A }), A;
  }
}, ur = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Y0 = function(A, e, t, r) {
  var s = z0(e, t), n = [], i = 0;
  return s.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (KA.SUPPORT_RANGE_BOUNDS) {
        var a = ha(r, i, o.length).getClientRects();
        if (a.length > 1) {
          var c = Oi(o), l = 0;
          c.forEach(function(B) {
            n.push(new ur(B, Ge.fromDOMRectList(A, ha(r, l + i, B.length).getClientRects()))), l += B.length;
          });
        } else
          n.push(new ur(o, Ge.fromDOMRectList(A, a)));
      } else {
        var f = r.splitText(o.length);
        n.push(new ur(o, j0(A, r))), r = f;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, j0 = function(A, e) {
  var t = e.ownerDocument;
  if (t) {
    var r = t.createElement("html2canvaswrapper");
    r.appendChild(e.cloneNode(!0));
    var s = e.parentNode;
    if (s) {
      s.replaceChild(r, e);
      var n = Gs(A, r);
      return r.firstChild && s.replaceChild(r.firstChild, r), n;
    }
  }
  return Ge.EMPTY;
}, ha = function(A, e, t) {
  var r = A.ownerDocument;
  if (!r)
    throw new Error("Node has no owner document");
  var s = r.createRange();
  return s.setStart(A, e), s.setEnd(A, e + t), s;
}, Oi = function(A) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var e = new Intl.Segmenter(void 0, { granularity: "grapheme" });
    return Array.from(e.segment(A)).map(function(t) {
      return t.segment;
    });
  }
  return N0(A);
}, Z0 = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return $0(A, e);
}, z0 = function(A, e) {
  return e.letterSpacing !== 0 ? Oi(A) : Z0(A, e);
}, q0 = [32, 160, 4961, 65792, 65793, 4153, 4241], $0 = function(A, e) {
  for (var t = xQ(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], s, n = function() {
    if (s.value) {
      var i = s.value.slice(), o = Ps(i), a = "";
      o.forEach(function(c) {
        q0.indexOf(c) === -1 ? a += CA(c) : (a.length && r.push(a), r.push(CA(c)), a = "");
      }), a.length && r.push(a);
    }
  }; !(s = t.next()).done; )
    n();
  return r;
}, AU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = eU(t.data, r.textTransform), this.textBounds = Y0(e, this.text, r, t);
    }
    return A;
  }()
), eU = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(tU, rU);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, tU = /(^|\s|:|-|\(|\))([a-z])/g, rU = function(A, e, t) {
  return A.length > 0 ? e + t.toUpperCase() : A;
}, vc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.src = r.currentSrc || r.src, s.intrinsicWidth = r.naturalWidth, s.intrinsicHeight = r.naturalHeight, s.context.cache.addImage(s.src), s;
    }
    return e;
  }(Ee)
), Uc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r, s.intrinsicWidth = r.width, s.intrinsicHeight = r.height, s;
    }
    return e;
  }(Ee)
), Fc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = new XMLSerializer(), i = Gs(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(r)), s.intrinsicWidth = r.width.baseVal.value, s.intrinsicHeight = r.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return e;
  }(Ee)
), bc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(Ee)
), li = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.start = r.start, s.reversed = typeof r.reversed == "boolean" && r.reversed === !0, s;
    }
    return e;
  }(Ee)
), sU = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], nU = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], iU = function(A) {
  return A.width > A.height ? new Ge(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ge(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, oU = function(A) {
  var e = A.type === aU ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Us = "checkbox", Fs = "radio", aU = "password", pa = 707406591, Ri = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      switch (s.type = r.type.toLowerCase(), s.checked = r.checked, s.value = oU(r), (s.type === Us || s.type === Fs) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = iU(s.bounds)), s.type) {
        case Us:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = sU;
          break;
        case Fs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = nU;
          break;
      }
      return s;
    }
    return e;
  }(Ee)
), mc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = r.options[r.selectedIndex || 0];
      return s.value = n && n.text || "", s;
    }
    return e;
  }(Ee)
), xc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(Ee)
), yc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      s.src = r.src, s.width = parseInt(r.width, 10) || 0, s.height = parseInt(r.height, 10) || 0, s.backgroundColor = s.styles.backgroundColor;
      try {
        if (r.contentWindow && r.contentWindow.document && r.contentWindow.document.documentElement) {
          s.tree = Hc(t, r.contentWindow.document.documentElement);
          var n = r.contentWindow.document.documentElement ? cr(t, getComputedStyle(r.contentWindow.document.documentElement).backgroundColor) : Oe.TRANSPARENT, i = r.contentWindow.document.body ? cr(t, getComputedStyle(r.contentWindow.document.body).backgroundColor) : Oe.TRANSPARENT;
          s.backgroundColor = tt(n) ? tt(i) ? s.styles.backgroundColor : i : n;
        }
      } catch {
      }
      return s;
    }
    return e;
  }(Ee)
), lU = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var s = e.firstChild, n = void 0; s; s = n)
    if (n = s.nextSibling, Ic(s) && s.data.trim().length > 0)
      t.textNodes.push(new AU(A, s, t.styles));
    else if (Ht(s))
      if (Kc(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(o) {
          return ls(A, o, t, r);
        });
      else {
        var i = Ec(A, s);
        i.styles.isVisible() && (cU(s, i, r) ? i.flags |= 4 : fU(i.styles) && (i.flags |= 2), lU.indexOf(s.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), s.slot, s.shadowRoot ? ls(A, s.shadowRoot, i, r) : !bs(s) && !_c(s) && !ms(s) && ls(A, s, i, r));
      }
}, Ec = function(A, e) {
  return fi(e) ? new vc(A, e) : Lc(e) ? new Uc(A, e) : _c(e) ? new Fc(A, e) : uU(e) ? new bc(A, e) : BU(e) ? new li(A, e) : dU(e) ? new Ri(A, e) : ms(e) ? new mc(A, e) : bs(e) ? new xc(A, e) : Sc(e) ? new yc(A, e) : new Ee(A, e);
}, Hc = function(A, e) {
  var t = Ec(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, cU = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Mi(A) && t.styles.isTransparent();
}, fU = function(A) {
  return A.isPositioned() || A.isFloating();
}, Ic = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Ht = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, ci = function(A) {
  return Ht(A) && typeof A.style < "u" && !cs(A);
}, cs = function(A) {
  return typeof A.className == "object";
}, uU = function(A) {
  return A.tagName === "LI";
}, BU = function(A) {
  return A.tagName === "OL";
}, dU = function(A) {
  return A.tagName === "INPUT";
}, gU = function(A) {
  return A.tagName === "HTML";
}, _c = function(A) {
  return A.tagName === "svg";
}, Mi = function(A) {
  return A.tagName === "BODY";
}, Lc = function(A) {
  return A.tagName === "CANVAS";
}, wa = function(A) {
  return A.tagName === "VIDEO";
}, fi = function(A) {
  return A.tagName === "IMG";
}, Sc = function(A) {
  return A.tagName === "IFRAME";
}, Qa = function(A) {
  return A.tagName === "STYLE";
}, hU = function(A) {
  return A.tagName === "SCRIPT";
}, bs = function(A) {
  return A.tagName === "TEXTAREA";
}, ms = function(A) {
  return A.tagName === "SELECT";
}, Kc = function(A) {
  return A.tagName === "SLOT";
}, Ca = function(A) {
  return A.tagName.indexOf("-") > 0;
}, pU = (
  /** @class */
  function() {
    function A() {
      this.counters = {};
    }
    return A.prototype.getCounterValue = function(e) {
      var t = this.counters[e];
      return t && t.length ? t[t.length - 1] : 1;
    }, A.prototype.getCounterValues = function(e) {
      var t = this.counters[e];
      return t || [];
    }, A.prototype.pop = function(e) {
      var t = this;
      e.forEach(function(r) {
        return t.counters[r].pop();
      });
    }, A.prototype.parse = function(e) {
      var t = this, r = e.counterIncrement, s = e.counterReset, n = !0;
      r !== null && r.forEach(function(o) {
        var a = t.counters[o.counter];
        a && o.increment !== 0 && (n = !1, a.length || a.push(1), a[Math.max(0, a.length - 1)] += o.increment);
      });
      var i = [];
      return n && s.forEach(function(o) {
        var a = t.counters[o.counter];
        i.push(o.counter), a || (a = t.counters[o.counter] = []), a.push(o.reset);
      }), i;
    }, A;
  }()
), va = {
  integers: [1e3, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
  values: ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]
}, Ua = {
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
}, wU = {
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
}, QU = {
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
}, Ut = function(A, e, t, r, s, n) {
  return A < e || A > t ? Ur(A, s, n.length > 0) : r.integers.reduce(function(i, o, a) {
    for (; A >= o; )
      A -= o, i += r.values[a];
    return i;
  }, "") + n;
}, Tc = function(A, e, t, r) {
  var s = "";
  do
    t || A--, s = r(A) + s, A /= e;
  while (A * e >= e);
  return s;
}, QA = function(A, e, t, r, s) {
  var n = t - e + 1;
  return (A < 0 ? "-" : "") + (Tc(Math.abs(A), n, r, function(i) {
    return CA(Math.floor(i % n) + e);
  }) + s);
}, ot = function(A, e, t) {
  t === void 0 && (t = ". ");
  var r = e.length;
  return Tc(Math.abs(A), r, !1, function(s) {
    return e[Math.floor(s % r)];
  }) + t;
}, yt = 1, Xe = 2, We = 4, tr = 8, Le = function(A, e, t, r, s, n) {
  if (A < -9999 || A > 9999)
    return Ur(A, 4, s.length > 0);
  var i = Math.abs(A), o = s;
  if (i === 0)
    return e[0] + o;
  for (var a = 0; i > 0 && a <= 4; a++) {
    var c = i % 10;
    c === 0 && yA(n, yt) && o !== "" ? o = e[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && yA(n, Xe) || c === 1 && a === 1 && yA(n, We) && A > 100 || c === 1 && a > 1 && yA(n, tr) ? o = e[c] + (a > 0 ? t[a - 1] : "") + o : c === 1 && a > 0 && (o = t[a - 1] + o), i = Math.floor(i / 10);
  }
  return (A < 0 ? r : "") + o;
}, Fa = "十百千萬", ba = "拾佰仟萬", ma = "マイナス", _n = "마이너스", Ur = function(A, e, t) {
  var r = t ? ". " : "", s = t ? "、" : "", n = t ? ", " : "", i = t ? " " : "";
  switch (e) {
    case 0:
      return "•" + i;
    case 1:
      return "◦" + i;
    case 2:
      return "◾" + i;
    case 5:
      var o = QA(A, 48, 57, !0, r);
      return o.length < 4 ? "0" + o : o;
    case 4:
      return ot(A, "〇一二三四五六七八九", s);
    case 6:
      return Ut(A, 1, 3999, va, 3, r).toLowerCase();
    case 7:
      return Ut(A, 1, 3999, va, 3, r);
    case 8:
      return QA(A, 945, 969, !1, r);
    case 9:
      return QA(A, 97, 122, !1, r);
    case 10:
      return QA(A, 65, 90, !1, r);
    case 11:
      return QA(A, 1632, 1641, !0, r);
    case 12:
    case 49:
      return Ut(A, 1, 9999, Ua, 3, r);
    case 35:
      return Ut(A, 1, 9999, Ua, 3, r).toLowerCase();
    case 13:
      return QA(A, 2534, 2543, !0, r);
    case 14:
    case 30:
      return QA(A, 6112, 6121, !0, r);
    case 15:
      return ot(A, "子丑寅卯辰巳午未申酉戌亥", s);
    case 16:
      return ot(A, "甲乙丙丁戊己庚辛壬癸", s);
    case 17:
    case 48:
      return Le(A, "零一二三四五六七八九", Fa, "負", s, Xe | We | tr);
    case 47:
      return Le(A, "零壹貳參肆伍陸柒捌玖", ba, "負", s, yt | Xe | We | tr);
    case 42:
      return Le(A, "零一二三四五六七八九", Fa, "负", s, Xe | We | tr);
    case 41:
      return Le(A, "零壹贰叁肆伍陆柒捌玖", ba, "负", s, yt | Xe | We | tr);
    case 26:
      return Le(A, "〇一二三四五六七八九", "十百千万", ma, s, 0);
    case 25:
      return Le(A, "零壱弐参四伍六七八九", "拾百千万", ma, s, yt | Xe | We);
    case 31:
      return Le(A, "영일이삼사오육칠팔구", "십백천만", _n, n, yt | Xe | We);
    case 33:
      return Le(A, "零一二三四五六七八九", "十百千萬", _n, n, 0);
    case 32:
      return Le(A, "零壹貳參四五六七八九", "拾百千", _n, n, yt | Xe | We);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return Ut(A, 1, 19999, QU, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return Ut(A, 1, 10999, wU, 3, r);
    case 23:
      return ot(A, "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわゐゑをん");
    case 24:
      return ot(A, "いろはにほへとちりぬるをわかよたれそつねならむうゐのおくやまけふこえてあさきゆめみしゑひもせす");
    case 27:
      return QA(A, 3302, 3311, !0, r);
    case 28:
      return ot(A, "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヰヱヲン", s);
    case 29:
      return ot(A, "イロハニホヘトチリヌルヲワカヨタレソツネナラムウヰノオクヤマケフコエテアサキユメミシヱヒモセス", s);
    case 34:
      return QA(A, 3792, 3801, !0, r);
    case 37:
      return QA(A, 6160, 6169, !0, r);
    case 38:
      return QA(A, 4160, 4169, !0, r);
    case 39:
      return QA(A, 2918, 2927, !0, r);
    case 40:
      return QA(A, 1776, 1785, !0, r);
    case 43:
      return QA(A, 3046, 3055, !0, r);
    case 44:
      return QA(A, 3174, 3183, !0, r);
    case 45:
      return QA(A, 3664, 3673, !0, r);
    case 46:
      return QA(A, 3872, 3881, !0, r);
    case 3:
    default:
      return QA(A, 48, 57, !0, r);
  }
}, Dc = "data-html2canvas-ignore", xa = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new pU(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, s = CU(e, t);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, o = s.contentWindow, a = o.document, c = FU(s).then(function() {
        return VA(r, void 0, void 0, function() {
          var l, f;
          return DA(this, function(B) {
            switch (B.label) {
              case 0:
                return this.scrolledElements.forEach(yU), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), l = this.options.onclone, f = this.clonedReferenceElement, typeof f > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                B.sent(), B.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, UU(a)] : [3, 4];
              case 3:
                B.sent(), B.label = 4;
              case 4:
                return typeof l == "function" ? [2, Promise.resolve().then(function() {
                  return l(a, f);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return a.open(), a.write(mU(document.doctype) + "<html></html>"), xU(this.referenceElement.ownerDocument, n, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
    }, A.prototype.createElementClone = function(e) {
      if (oi(
        e,
        2
        /* CLONE */
      ))
        debugger;
      if (Lc(e))
        return this.createCanvasClone(e);
      if (wa(e))
        return this.createVideoClone(e);
      if (Qa(e))
        return this.createStyleClone(e);
      var t = e.cloneNode(!1);
      return fi(t) && (fi(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Ca(t) ? this.createCustomElementClone(t) : t;
    }, A.prototype.createCustomElementClone = function(e) {
      var t = document.createElement("html2canvascustomelement");
      return Ln(e.style, t), t;
    }, A.prototype.createStyleClone = function(e) {
      try {
        var t = e.sheet;
        if (t && t.cssRules) {
          var r = [].slice.call(t.cssRules, 0).reduce(function(n, i) {
            return i && typeof i.cssText == "string" ? n + i.cssText : n;
          }, ""), s = e.cloneNode(!1);
          return s.textContent = r, s;
        }
      } catch (n) {
        if (this.context.logger.error("Unable to access cssRules property", n), n.name !== "SecurityError")
          throw n;
      }
      return e.cloneNode(!1);
    }, A.prototype.createCanvasClone = function(e) {
      var t;
      if (this.options.inlineImages && e.ownerDocument) {
        var r = e.ownerDocument.createElement("img");
        try {
          return r.src = e.toDataURL(), r;
        } catch {
          this.context.logger.info("Unable to inline canvas contents, canvas is tainted", e);
        }
      }
      var s = e.cloneNode(!1);
      try {
        s.width = e.width, s.height = e.height;
        var n = e.getContext("2d"), i = s.getContext("2d");
        if (i)
          if (!this.options.allowTaint && n)
            i.putImageData(n.getImageData(0, 0, e.width, e.height), 0, 0);
          else {
            var o = (t = e.getContext("webgl2")) !== null && t !== void 0 ? t : e.getContext("webgl");
            if (o) {
              var a = o.getContextAttributes();
              (a == null ? void 0 : a.preserveDrawingBuffer) === !1 && this.context.logger.warn("Unable to clone WebGL context as it has preserveDrawingBuffer=false", e);
            }
            i.drawImage(e, 0, 0);
          }
        return s;
      } catch {
        this.context.logger.info("Unable to clone canvas as it is tainted", e);
      }
      return s;
    }, A.prototype.createVideoClone = function(e) {
      var t = e.ownerDocument.createElement("canvas");
      t.width = e.offsetWidth, t.height = e.offsetHeight;
      var r = t.getContext("2d");
      try {
        return r && (r.drawImage(e, 0, 0, t.width, t.height), this.options.allowTaint || r.getImageData(0, 0, t.width, t.height)), t;
      } catch {
        this.context.logger.info("Unable to clone video as it is tainted", e);
      }
      var s = e.ownerDocument.createElement("canvas");
      return s.width = e.offsetWidth, s.height = e.offsetHeight, s;
    }, A.prototype.appendChildNode = function(e, t, r) {
      (!Ht(t) || !hU(t) && !t.hasAttribute(Dc) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ht(t) || !Qa(t)) && e.appendChild(this.cloneNode(t, r));
    }, A.prototype.cloneChildNodes = function(e, t, r) {
      for (var s = this, n = e.shadowRoot ? e.shadowRoot.firstChild : e.firstChild; n; n = n.nextSibling)
        if (Ht(n) && Kc(n) && typeof n.assignedNodes == "function") {
          var i = n.assignedNodes();
          i.length && i.forEach(function(o) {
            return s.appendChildNode(t, o, r);
          });
        } else
          this.appendChildNode(t, n, r);
    }, A.prototype.cloneNode = function(e, t) {
      if (Ic(e))
        return document.createTextNode(e.data);
      if (!e.ownerDocument)
        return e.cloneNode(!1);
      var r = e.ownerDocument.defaultView;
      if (r && Ht(e) && (ci(e) || cs(e))) {
        var s = this.createElementClone(e);
        s.style.transitionProperty = "none";
        var n = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), o = r.getComputedStyle(e, ":after");
        this.referenceElement === e && ci(s) && (this.clonedReferenceElement = s), Mi(s) && IU(s);
        var a = this.counters.parse(new ra(this.context, n)), c = this.resolvePseudoContent(e, s, i, Br.BEFORE);
        Ca(e) && (t = !0), wa(e) || this.cloneChildNodes(e, s, t), c && s.insertBefore(c, s.firstChild);
        var l = this.resolvePseudoContent(e, s, o, Br.AFTER);
        return l && s.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || cs(e)) && !Sc(e) || t) && Ln(n, s), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([s, e.scrollLeft, e.scrollTop]), (bs(e) || ms(e)) && (bs(s) || ms(s)) && (s.value = e.value), s;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, s) {
      var n = this;
      if (r) {
        var i = r.content, o = t.ownerDocument;
        if (!(!o || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new ra(this.context, r));
          var a = new u0(this.context, r), c = o.createElement("html2canvaspseudoelement");
          Ln(r, c), a.content.forEach(function(f) {
            if (f.type === 0)
              c.appendChild(o.createTextNode(f.value));
            else if (f.type === 22) {
              var B = o.createElement("img");
              B.src = f.value, B.style.opacity = "1", c.appendChild(B);
            } else if (f.type === 18) {
              if (f.name === "attr") {
                var Q = f.values.filter(cA);
                Q.length && c.appendChild(o.createTextNode(e.getAttribute(Q[0].value) || ""));
              } else if (f.name === "counter") {
                var v = f.values.filter(Tt), U = v[0], K = v[1];
                if (U && cA(U)) {
                  var H = n.counters.getCounterValue(U.value), b = K && cA(K) ? ii.parse(n.context, K.value) : 3;
                  c.appendChild(o.createTextNode(Ur(H, b, !1)));
                }
              } else if (f.name === "counters") {
                var h = f.values.filter(Tt), U = h[0], m = h[1], K = h[2];
                if (U && cA(U)) {
                  var k = n.counters.getCounterValues(U.value), L = K && cA(K) ? ii.parse(n.context, K.value) : 3, W = m && m.type === 0 ? m.value : "", Z = k.map(function(UA) {
                    return Ur(UA, L, !1);
                  }).join(W);
                  c.appendChild(o.createTextNode(Z));
                }
              }
            } else if (f.type === 20)
              switch (f.value) {
                case "open-quote":
                  c.appendChild(o.createTextNode(ta(a.quotes, n.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  c.appendChild(o.createTextNode(ta(a.quotes, --n.quoteDepth, !1)));
                  break;
                default:
                  c.appendChild(o.createTextNode(f.value));
              }
          }), c.className = ui + " " + Bi;
          var l = s === Br.BEFORE ? " " + ui : " " + Bi;
          return cs(t) ? t.className.baseValue += l : t.className += l, c;
        }
      }
    }, A.destroy = function(e) {
      return e.parentNode ? (e.parentNode.removeChild(e), !0) : !1;
    }, A;
  }()
), Br;
(function(A) {
  A[A.BEFORE = 0] = "BEFORE", A[A.AFTER = 1] = "AFTER";
})(Br || (Br = {}));
var CU = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Dc, "true"), A.body.appendChild(t), t;
}, vU = function(A) {
  return new Promise(function(e) {
    if (A.complete) {
      e();
      return;
    }
    if (!A.src) {
      e();
      return;
    }
    A.onload = e, A.onerror = e;
  });
}, UU = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(vU));
}, FU = function(A) {
  return new Promise(function(e, t) {
    var r = A.contentWindow;
    if (!r)
      return t("No window assigned for iframe");
    var s = r.document;
    r.onload = A.onload = function() {
      r.onload = A.onload = null;
      var n = setInterval(function() {
        s.body.childNodes.length > 0 && s.readyState === "complete" && (clearInterval(n), e(A));
      }, 50);
    };
  });
}, bU = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ln = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    bU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, mU = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, xU = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, yU = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, EU = ":before", HU = ":after", ui = "___html2canvas___pseudoelement_before", Bi = "___html2canvas___pseudoelement_after", ya = `{
    content: "" !important;
    display: none !important;
}`, IU = function(A) {
  _U(A, "." + ui + EU + ya + `
         .` + Bi + HU + ya);
}, _U = function(A, e) {
  var t = A.ownerDocument;
  if (t) {
    var r = t.createElement("style");
    r.textContent = e, A.appendChild(r);
  }
}, kc = (
  /** @class */
  function() {
    function A() {
    }
    return A.getOrigin = function(e) {
      var t = A._link;
      return t ? (t.href = e, t.href = t.href, t.protocol + t.hostname + t.port) : "about:blank";
    }, A.isSameOrigin = function(e) {
      return A.getOrigin(e) === A._origin;
    }, A.setContext = function(e) {
      A._link = e.document.createElement("a"), A._origin = A.getOrigin(e.location.href);
    }, A._origin = "about:blank", A;
  }()
), LU = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Kn(e) || DU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
      }), t;
    }, A.prototype.match = function(e) {
      return this._cache[e];
    }, A.prototype.loadImage = function(e) {
      return VA(this, void 0, void 0, function() {
        var t, r, s, n, i = this;
        return DA(this, function(o) {
          switch (o.label) {
            case 0:
              return t = kc.isSameOrigin(e), r = !Sn(e) && this._options.useCORS === !0 && KA.SUPPORT_CORS_IMAGES && !t, s = !Sn(e) && !t && !Kn(e) && typeof this._options.proxy == "string" && KA.SUPPORT_CORS_XHR && !r, !t && this._options.allowTaint === !1 && !Sn(e) && !Kn(e) && !s && !r ? [
                2
                /*return*/
              ] : (n = e, s ? [4, this.proxy(n)] : [3, 2]);
            case 1:
              n = o.sent(), o.label = 2;
            case 2:
              return this.context.logger.debug("Added image " + e.substring(0, 256)), [4, new Promise(function(a, c) {
                var l = new Image();
                l.onload = function() {
                  return a(l);
                }, l.onerror = c, (kU(n) || r) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(function() {
                  return a(l);
                }, 500), i._options.imageTimeout > 0 && setTimeout(function() {
                  return c("Timed out (" + i._options.imageTimeout + "ms) loading image");
                }, i._options.imageTimeout);
              })];
            case 3:
              return [2, o.sent()];
          }
        });
      });
    }, A.prototype.has = function(e) {
      return typeof this._cache[e] < "u";
    }, A.prototype.keys = function() {
      return Promise.resolve(Object.keys(this._cache));
    }, A.prototype.proxy = function(e) {
      var t = this, r = this._options.proxy;
      if (!r)
        throw new Error("No proxy defined");
      var s = e.substring(0, 256);
      return new Promise(function(n, i) {
        var o = KA.SUPPORT_RESPONSE_TYPE ? "blob" : "text", a = new XMLHttpRequest();
        a.onload = function() {
          if (a.status === 200)
            if (o === "text")
              n(a.response);
            else {
              var f = new FileReader();
              f.addEventListener("load", function() {
                return n(f.result);
              }, !1), f.addEventListener("error", function(B) {
                return i(B);
              }, !1), f.readAsDataURL(a.response);
            }
          else
            i("Failed to proxy resource " + s + " with status code " + a.status);
        }, a.onerror = i;
        var c = r.indexOf("?") > -1 ? "&" : "?";
        if (a.open("GET", "" + r + c + "url=" + encodeURIComponent(e) + "&responseType=" + o), o !== "text" && a instanceof XMLHttpRequest && (a.responseType = o), t._options.imageTimeout) {
          var l = t._options.imageTimeout;
          a.timeout = l, a.ontimeout = function() {
            return i("Timed out (" + l + "ms) proxying " + s);
          };
        }
        a.send();
      });
    }, A;
  }()
), SU = /^data:image\/svg\+xml/i, KU = /^data:image\/.*;base64,/i, TU = /^data:image\/.*/i, DU = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !OU(A);
}, Sn = function(A) {
  return TU.test(A);
}, kU = function(A) {
  return KU.test(A);
}, Kn = function(A) {
  return A.substr(0, 4) === "blob";
}, OU = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || SU.test(A);
}, O = (
  /** @class */
  function() {
    function A(e, t) {
      this.type = 0, this.x = e, this.y = t;
    }
    return A.prototype.add = function(e, t) {
      return new A(this.x + e, this.y + t);
    }, A;
  }()
), Ft = function(A, e, t) {
  return new O(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
}, $r = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.type = 1, this.start = e, this.startControl = t, this.endControl = r, this.end = s;
    }
    return A.prototype.subdivide = function(e, t) {
      var r = Ft(this.start, this.startControl, e), s = Ft(this.startControl, this.endControl, e), n = Ft(this.endControl, this.end, e), i = Ft(r, s, e), o = Ft(s, n, e), a = Ft(i, o, e);
      return t ? new A(this.start, r, i, a) : new A(a, o, n, this.end);
    }, A.prototype.add = function(e, t) {
      return new A(this.start.add(e, t), this.startControl.add(e, t), this.endControl.add(e, t), this.end.add(e, t));
    }, A.prototype.reverse = function() {
      return new A(this.end, this.endControl, this.startControl, this.start);
    }, A;
  }()
), re = function(A) {
  return A.type === 1;
}, RU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, s = Ar(t.borderTopLeftRadius, r.width, r.height), n = s[0], i = s[1], o = Ar(t.borderTopRightRadius, r.width, r.height), a = o[0], c = o[1], l = Ar(t.borderBottomRightRadius, r.width, r.height), f = l[0], B = l[1], Q = Ar(t.borderBottomLeftRadius, r.width, r.height), v = Q[0], U = Q[1], K = [];
      K.push((n + a) / r.width), K.push((v + f) / r.width), K.push((i + U) / r.height), K.push((c + B) / r.height);
      var H = Math.max.apply(Math, K);
      H > 1 && (n /= H, i /= H, a /= H, c /= H, f /= H, B /= H, v /= H, U /= H);
      var b = r.width - a, h = r.height - B, m = r.width - f, k = r.height - U, L = t.borderTopWidth, W = t.borderRightWidth, Z = t.borderBottomWidth, V = t.borderLeftWidth, iA = gA(t.paddingTop, e.bounds.width), UA = gA(t.paddingRight, e.bounds.width), EA = gA(t.paddingBottom, e.bounds.width), eA = gA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + V / 3, r.top + L / 3, n - V / 3, i - L / 3, nA.TOP_LEFT) : new O(r.left + V / 3, r.top + L / 3), this.topRightBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + b, r.top + L / 3, a - W / 3, c - L / 3, nA.TOP_RIGHT) : new O(r.left + r.width - W / 3, r.top + L / 3), this.bottomRightBorderDoubleOuterBox = f > 0 || B > 0 ? hA(r.left + m, r.top + h, f - W / 3, B - Z / 3, nA.BOTTOM_RIGHT) : new O(r.left + r.width - W / 3, r.top + r.height - Z / 3), this.bottomLeftBorderDoubleOuterBox = v > 0 || U > 0 ? hA(r.left + V / 3, r.top + k, v - V / 3, U - Z / 3, nA.BOTTOM_LEFT) : new O(r.left + V / 3, r.top + r.height - Z / 3), this.topLeftBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + V * 2 / 3, r.top + L * 2 / 3, n - V * 2 / 3, i - L * 2 / 3, nA.TOP_LEFT) : new O(r.left + V * 2 / 3, r.top + L * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + b, r.top + L * 2 / 3, a - W * 2 / 3, c - L * 2 / 3, nA.TOP_RIGHT) : new O(r.left + r.width - W * 2 / 3, r.top + L * 2 / 3), this.bottomRightBorderDoubleInnerBox = f > 0 || B > 0 ? hA(r.left + m, r.top + h, f - W * 2 / 3, B - Z * 2 / 3, nA.BOTTOM_RIGHT) : new O(r.left + r.width - W * 2 / 3, r.top + r.height - Z * 2 / 3), this.bottomLeftBorderDoubleInnerBox = v > 0 || U > 0 ? hA(r.left + V * 2 / 3, r.top + k, v - V * 2 / 3, U - Z * 2 / 3, nA.BOTTOM_LEFT) : new O(r.left + V * 2 / 3, r.top + r.height - Z * 2 / 3), this.topLeftBorderStroke = n > 0 || i > 0 ? hA(r.left + V / 2, r.top + L / 2, n - V / 2, i - L / 2, nA.TOP_LEFT) : new O(r.left + V / 2, r.top + L / 2), this.topRightBorderStroke = n > 0 || i > 0 ? hA(r.left + b, r.top + L / 2, a - W / 2, c - L / 2, nA.TOP_RIGHT) : new O(r.left + r.width - W / 2, r.top + L / 2), this.bottomRightBorderStroke = f > 0 || B > 0 ? hA(r.left + m, r.top + h, f - W / 2, B - Z / 2, nA.BOTTOM_RIGHT) : new O(r.left + r.width - W / 2, r.top + r.height - Z / 2), this.bottomLeftBorderStroke = v > 0 || U > 0 ? hA(r.left + V / 2, r.top + k, v - V / 2, U - Z / 2, nA.BOTTOM_LEFT) : new O(r.left + V / 2, r.top + r.height - Z / 2), this.topLeftBorderBox = n > 0 || i > 0 ? hA(r.left, r.top, n, i, nA.TOP_LEFT) : new O(r.left, r.top), this.topRightBorderBox = a > 0 || c > 0 ? hA(r.left + b, r.top, a, c, nA.TOP_RIGHT) : new O(r.left + r.width, r.top), this.bottomRightBorderBox = f > 0 || B > 0 ? hA(r.left + m, r.top + h, f, B, nA.BOTTOM_RIGHT) : new O(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = v > 0 || U > 0 ? hA(r.left, r.top + k, v, U, nA.BOTTOM_LEFT) : new O(r.left, r.top + r.height), this.topLeftPaddingBox = n > 0 || i > 0 ? hA(r.left + V, r.top + L, Math.max(0, n - V), Math.max(0, i - L), nA.TOP_LEFT) : new O(r.left + V, r.top + L), this.topRightPaddingBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width - W), r.top + L, b > r.width + W ? 0 : Math.max(0, a - W), Math.max(0, c - L), nA.TOP_RIGHT) : new O(r.left + r.width - W, r.top + L), this.bottomRightPaddingBox = f > 0 || B > 0 ? hA(r.left + Math.min(m, r.width - V), r.top + Math.min(h, r.height - Z), Math.max(0, f - W), Math.max(0, B - Z), nA.BOTTOM_RIGHT) : new O(r.left + r.width - W, r.top + r.height - Z), this.bottomLeftPaddingBox = v > 0 || U > 0 ? hA(r.left + V, r.top + Math.min(k, r.height - Z), Math.max(0, v - V), Math.max(0, U - Z), nA.BOTTOM_LEFT) : new O(r.left + V, r.top + r.height - Z), this.topLeftContentBox = n > 0 || i > 0 ? hA(r.left + V + eA, r.top + L + iA, Math.max(0, n - (V + eA)), Math.max(0, i - (L + iA)), nA.TOP_LEFT) : new O(r.left + V + eA, r.top + L + iA), this.topRightContentBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width + V + eA), r.top + L + iA, b > r.width + V + eA ? 0 : a - V + eA, c - (L + iA), nA.TOP_RIGHT) : new O(r.left + r.width - (W + UA), r.top + L + iA), this.bottomRightContentBox = f > 0 || B > 0 ? hA(r.left + Math.min(m, r.width - (V + eA)), r.top + Math.min(h, r.height + L + iA), Math.max(0, f - (W + UA)), B - (Z + EA), nA.BOTTOM_RIGHT) : new O(r.left + r.width - (W + UA), r.top + r.height - (Z + EA)), this.bottomLeftContentBox = v > 0 || U > 0 ? hA(r.left + V + eA, r.top + k, Math.max(0, v - (V + eA)), U - (Z + EA), nA.BOTTOM_LEFT) : new O(r.left + V + eA, r.top + r.height - (Z + EA));
    }
    return A;
  }()
), nA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(nA || (nA = {}));
var hA = function(A, e, t, r, s) {
  var n = 4 * ((Math.sqrt(2) - 1) / 3), i = t * n, o = r * n, a = A + t, c = e + r;
  switch (s) {
    case nA.TOP_LEFT:
      return new $r(new O(A, c), new O(A, c - o), new O(a - i, e), new O(a, e));
    case nA.TOP_RIGHT:
      return new $r(new O(A, e), new O(A + i, e), new O(a, c - o), new O(a, c));
    case nA.BOTTOM_RIGHT:
      return new $r(new O(a, e), new O(a, e + o), new O(A + i, c), new O(A, c));
    case nA.BOTTOM_LEFT:
    default:
      return new $r(new O(a, c), new O(a - i, c), new O(A, e + o), new O(A, e));
  }
}, xs = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, MU = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, ys = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, NU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), As = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), VU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), GU = function(A) {
  return A.type === 0;
}, Oc = function(A) {
  return A.type === 1;
}, PU = function(A) {
  return A.type === 2;
}, Ea = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, JU = function(A, e, t, r, s) {
  return A.map(function(n, i) {
    switch (i) {
      case 0:
        return n.add(e, t);
      case 1:
        return n.add(e + r, t);
      case 2:
        return n.add(e + r, t + s);
      case 3:
        return n.add(e, t + s);
    }
    return n;
  });
}, Rc = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), Mc = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new RU(this.container), this.container.styles.opacity < 1 && this.effects.push(new VU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new NU(r, s, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = xs(this.curves), o = ys(this.curves);
        Ea(i, o) ? this.effects.push(new As(
          i,
          6
          /* CONTENT */
        )) : (this.effects.push(new As(
          i,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new As(
          o,
          4
          /* CONTENT */
        )));
      }
    }
    return A.prototype.getEffects = function(e) {
      for (var t = [
        2,
        3
        /* FIXED */
      ].indexOf(this.container.styles.position) === -1, r = this.parent, s = this.effects.slice(0); r; ) {
        var n = r.effects.filter(function(a) {
          return !Oc(a);
        });
        if (t || r.container.styles.position !== 0 || !r.parent) {
          if (s.unshift.apply(s, n), t = [
            2,
            3
            /* FIXED */
          ].indexOf(r.container.styles.position) === -1, r.container.styles.overflowX !== 0) {
            var i = xs(r.curves), o = ys(r.curves);
            Ea(i, o) || s.unshift(new As(
              o,
              6
              /* CONTENT */
            ));
          }
        } else
          s.unshift.apply(s, n);
        r = r.parent;
      }
      return s.filter(function(a) {
        return yA(a.target, e);
      });
    }, A;
  }()
), di = function(A, e, t, r) {
  A.container.elements.forEach(function(s) {
    var n = yA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), i = yA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Mc(s, A);
    yA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(o);
    var a = yA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (n || i) {
      var c = n || s.styles.isPositioned() ? t : e, l = new Rc(o);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var f = s.styles.zIndex.order;
        if (f < 0) {
          var B = 0;
          c.negativeZIndex.some(function(v, U) {
            return f > v.element.container.styles.zIndex.order ? (B = U, !1) : B > 0;
          }), c.negativeZIndex.splice(B, 0, l);
        } else if (f > 0) {
          var Q = 0;
          c.positiveZIndex.some(function(v, U) {
            return f >= v.element.container.styles.zIndex.order ? (Q = U + 1, !1) : Q > 0;
          }), c.positiveZIndex.splice(Q, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        s.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      di(o, l, n ? l : t, a);
    } else
      s.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), di(o, e, t, a);
    yA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) && Nc(s, a);
  });
}, Nc = function(A, e) {
  for (var t = A instanceof li ? A.start : 1, r = A instanceof li ? A.reversed : !1, s = 0; s < e.length; s++) {
    var n = e[s];
    n.container instanceof bc && typeof n.container.value == "number" && n.container.value !== 0 && (t = n.container.value), n.listValue = Ur(t, n.container.styles.listStyleType, !0), t += r ? -1 : 1;
  }
}, XU = function(A) {
  var e = new Mc(A, null), t = new Rc(e), r = [];
  return di(e, t, t, r), Nc(e.container, r), t;
}, Ha = function(A, e) {
  switch (e) {
    case 0:
      return ne(A.topLeftBorderBox, A.topLeftPaddingBox, A.topRightBorderBox, A.topRightPaddingBox);
    case 1:
      return ne(A.topRightBorderBox, A.topRightPaddingBox, A.bottomRightBorderBox, A.bottomRightPaddingBox);
    case 2:
      return ne(A.bottomRightBorderBox, A.bottomRightPaddingBox, A.bottomLeftBorderBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return ne(A.bottomLeftBorderBox, A.bottomLeftPaddingBox, A.topLeftBorderBox, A.topLeftPaddingBox);
  }
}, WU = function(A, e) {
  switch (e) {
    case 0:
      return ne(A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox, A.topRightBorderBox, A.topRightBorderDoubleOuterBox);
    case 1:
      return ne(A.topRightBorderBox, A.topRightBorderDoubleOuterBox, A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox);
    case 2:
      return ne(A.bottomRightBorderBox, A.bottomRightBorderDoubleOuterBox, A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox);
    case 3:
    default:
      return ne(A.bottomLeftBorderBox, A.bottomLeftBorderDoubleOuterBox, A.topLeftBorderBox, A.topLeftBorderDoubleOuterBox);
  }
}, YU = function(A, e) {
  switch (e) {
    case 0:
      return ne(A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox, A.topRightBorderDoubleInnerBox, A.topRightPaddingBox);
    case 1:
      return ne(A.topRightBorderDoubleInnerBox, A.topRightPaddingBox, A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox);
    case 2:
      return ne(A.bottomRightBorderDoubleInnerBox, A.bottomRightPaddingBox, A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox);
    case 3:
    default:
      return ne(A.bottomLeftBorderDoubleInnerBox, A.bottomLeftPaddingBox, A.topLeftBorderDoubleInnerBox, A.topLeftPaddingBox);
  }
}, jU = function(A, e) {
  switch (e) {
    case 0:
      return es(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return es(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return es(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return es(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, es = function(A, e) {
  var t = [];
  return re(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), re(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, ne = function(A, e, t, r) {
  var s = [];
  return re(A) ? s.push(A.subdivide(0.5, !1)) : s.push(A), re(t) ? s.push(t.subdivide(0.5, !0)) : s.push(t), re(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), re(e) ? s.push(e.subdivide(0.5, !1).reverse()) : s.push(e), s;
}, Vc = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Es = function(A) {
  var e = A.styles, t = A.bounds, r = gA(e.paddingLeft, t.width), s = gA(e.paddingRight, t.width), n = gA(e.paddingTop, t.width), i = gA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + s), -(e.borderTopWidth + e.borderBottomWidth + n + i));
}, ZU = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Es(e) : Vc(e);
}, zU = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Es(e) : Vc(e);
}, Tn = function(A, e, t) {
  var r = ZU(Et(A.styles.backgroundOrigin, e), A), s = zU(Et(A.styles.backgroundClip, e), A), n = qU(Et(A.styles.backgroundSize, e), t, r), i = n[0], o = n[1], a = Ar(Et(A.styles.backgroundPosition, e), r.width - i, r.height - o), c = $U(Et(A.styles.backgroundRepeat, e), a, n, r, s), l = Math.round(r.left + a[0]), f = Math.round(r.top + a[1]);
  return [c, l, f, i, o];
}, bt = function(A) {
  return cA(A) && A.value === Lt.AUTO;
}, ts = function(A) {
  return typeof A == "number";
}, qU = function(A, e, t) {
  var r = e[0], s = e[1], n = e[2], i = A[0], o = A[1];
  if (!i)
    return [0, 0];
  if (bA(i) && o && bA(o))
    return [gA(i, t.width), gA(o, t.height)];
  var a = ts(n);
  if (cA(i) && (i.value === Lt.CONTAIN || i.value === Lt.COVER)) {
    if (ts(n)) {
      var c = t.width / t.height;
      return c < n != (i.value === Lt.COVER) ? [t.width, t.width / n] : [t.height * n, t.height];
    }
    return [t.width, t.height];
  }
  var l = ts(r), f = ts(s), B = l || f;
  if (bt(i) && (!o || bt(o))) {
    if (l && f)
      return [r, s];
    if (!a && !B)
      return [t.width, t.height];
    if (B && a) {
      var Q = l ? r : s * n, v = f ? s : r / n;
      return [Q, v];
    }
    var U = l ? r : t.width, K = f ? s : t.height;
    return [U, K];
  }
  if (a) {
    var H = 0, b = 0;
    return bA(i) ? H = gA(i, t.width) : bA(o) && (b = gA(o, t.height)), bt(i) ? H = b * n : (!o || bt(o)) && (b = H / n), [H, b];
  }
  var h = null, m = null;
  if (bA(i) ? h = gA(i, t.width) : o && bA(o) && (m = gA(o, t.height)), h !== null && (!o || bt(o)) && (m = l && f ? h / r * s : t.height), m !== null && bt(i) && (h = l && f ? m / s * r : t.width), h !== null && m !== null)
    return [h, m];
  throw new Error("Unable to calculate background-size for element");
}, Et = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, $U = function(A, e, t, r, s) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  switch (A) {
    case 2:
      return [
        new O(Math.round(r.left), Math.round(r.top + i)),
        new O(Math.round(r.left + r.width), Math.round(r.top + i)),
        new O(Math.round(r.left + r.width), Math.round(a + r.top + i)),
        new O(Math.round(r.left), Math.round(a + r.top + i))
      ];
    case 3:
      return [
        new O(Math.round(r.left + n), Math.round(r.top)),
        new O(Math.round(r.left + n + o), Math.round(r.top)),
        new O(Math.round(r.left + n + o), Math.round(r.height + r.top)),
        new O(Math.round(r.left + n), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new O(Math.round(r.left + n), Math.round(r.top + i)),
        new O(Math.round(r.left + n + o), Math.round(r.top + i)),
        new O(Math.round(r.left + n + o), Math.round(r.top + i + a)),
        new O(Math.round(r.left + n), Math.round(r.top + i + a))
      ];
    default:
      return [
        new O(Math.round(s.left), Math.round(s.top)),
        new O(Math.round(s.left + s.width), Math.round(s.top)),
        new O(Math.round(s.left + s.width), Math.round(s.height + s.top)),
        new O(Math.round(s.left), Math.round(s.height + s.top))
      ];
  }
}, AF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ia = "Hidden Text", eF = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = AF, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Ia)), r.appendChild(n), r.appendChild(s);
      var o = s.offsetTop - n.offsetTop + 2;
      r.removeChild(n), r.appendChild(this._document.createTextNode(Ia)), r.style.lineHeight = "normal", s.style.verticalAlign = "super";
      var a = s.offsetTop - r.offsetTop + 2;
      return i.removeChild(r), { baseline: o, middle: a };
    }, A.prototype.getMetrics = function(e, t) {
      var r = e + " " + t;
      return typeof this._data[r] > "u" && (this._data[r] = this.parseMetrics(e, t)), this._data[r];
    }, A;
  }()
), Gc = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.context = e, this.options = t;
    }
    return A;
  }()
), tF = 1e4, rF = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s._activeEffects = [], s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), r.canvas || (s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px"), s.fontMetrics = new eF(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), s;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(s) {
        return r.applyEffect(s);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), PU(t) && (this.ctx.globalAlpha = t.opacity), GU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Oc(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
    }, e.prototype.popEffect = function() {
      this._activeEffects.pop(), this.ctx.restore();
    }, e.prototype.renderStack = function(t) {
      return VA(this, void 0, void 0, function() {
        var r;
        return DA(this, function(s) {
          switch (s.label) {
            case 0:
              return r = t.element.container.styles, r.isVisible() ? [4, this.renderStackContent(t)] : [3, 2];
            case 1:
              s.sent(), s.label = 2;
            case 2:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNode = function(t) {
      return VA(this, void 0, void 0, function() {
        return DA(this, function(r) {
          switch (r.label) {
            case 0:
              if (yA(
                t.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return t.container.styles.isVisible() ? [4, this.renderNodeBackgroundAndBorders(t)] : [3, 3];
            case 1:
              return r.sent(), [4, this.renderNodeContent(t)];
            case 2:
              r.sent(), r.label = 3;
            case 3:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderTextWithLetterSpacing = function(t, r, s) {
      var n = this;
      if (r === 0)
        this.ctx.fillText(t.text, t.bounds.left, t.bounds.top + s);
      else {
        var i = Oi(t.text);
        i.reduce(function(o, a) {
          return n.ctx.fillText(a, o, t.bounds.top + s), o + n.ctx.measureText(a).width;
        }, t.bounds.left);
      }
    }, e.prototype.createFontStyle = function(t) {
      var r = t.fontVariant.filter(function(i) {
        return i === "normal" || i === "small-caps";
      }).join(""), s = aF(t.fontFamily).join(", "), n = yr(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, n, s].join(" "),
        s,
        n
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return VA(this, void 0, void 0, function() {
        var s, n, i, o, a, c, l, f, B = this;
        return DA(this, function(Q) {
          return s = this.createFontStyle(r), n = s[0], i = s[1], o = s[2], this.ctx.font = n, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, o), c = a.baseline, l = a.middle, f = r.paintOrder, t.textBounds.forEach(function(v) {
            f.forEach(function(U) {
              switch (U) {
                case 0:
                  B.ctx.fillStyle = IA(r.color), B.renderTextWithLetterSpacing(v, r.letterSpacing, c);
                  var K = r.textShadow;
                  K.length && v.text.trim().length && (K.slice(0).reverse().forEach(function(H) {
                    B.ctx.shadowColor = IA(H.color), B.ctx.shadowOffsetX = H.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = H.offsetY.number * B.options.scale, B.ctx.shadowBlur = H.blur.number, B.renderTextWithLetterSpacing(v, r.letterSpacing, c);
                  }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), r.textDecorationLine.length && (B.ctx.fillStyle = IA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(H) {
                    switch (H) {
                      case 1:
                        B.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top + c), v.bounds.width, 1);
                        break;
                      case 2:
                        B.ctx.fillRect(v.bounds.left, Math.round(v.bounds.top), v.bounds.width, 1);
                        break;
                      case 3:
                        B.ctx.fillRect(v.bounds.left, Math.ceil(v.bounds.top + l), v.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && v.text.trim().length && (B.ctx.strokeStyle = IA(r.webkitTextStrokeColor), B.ctx.lineWidth = r.webkitTextStrokeWidth, B.ctx.lineJoin = window.chrome ? "miter" : "round", B.ctx.strokeText(v.text, v.bounds.left, v.bounds.top + c)), B.ctx.strokeStyle = "", B.ctx.lineWidth = 0, B.ctx.lineJoin = "miter";
                  break;
              }
            });
          }), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderReplacedElement = function(t, r, s) {
      if (s && t.intrinsicWidth > 0 && t.intrinsicHeight > 0) {
        var n = Es(t), i = ys(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, t.intrinsicWidth, t.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, b, b, c, l, f, B, m, Q, v, k, U, K, H, b, h, m, k;
        return DA(this, function(L) {
          switch (L.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, s = t.curves, n = r.styles, i = 0, o = r.textNodes, L.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [4, this.renderTextNode(a, n)]) : [3, 4];
            case 2:
              L.sent(), L.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof vc)) return [3, 8];
              L.label = 5;
            case 5:
              return L.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return b = L.sent(), this.renderReplacedElement(r, s, b), [3, 8];
            case 7:
              return L.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Uc && this.renderReplacedElement(r, s, r.canvas), !(r instanceof Fc)) return [3, 12];
              L.label = 9;
            case 9:
              return L.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return b = L.sent(), this.renderReplacedElement(r, s, b), [3, 12];
            case 11:
              return L.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof yc && r.tree ? (c = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, c.render(r.tree)]) : [3, 14];
            case 13:
              l = L.sent(), r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), L.label = 14;
            case 14:
              if (r instanceof Ri && (f = Math.min(r.bounds.width, r.bounds.height), r.type === Us ? r.checked && (this.ctx.save(), this.path([
                new O(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79),
                new O(r.bounds.left + f * 0.16, r.bounds.top + f * 0.5549),
                new O(r.bounds.left + f * 0.27347, r.bounds.top + f * 0.44071),
                new O(r.bounds.left + f * 0.39694, r.bounds.top + f * 0.5649),
                new O(r.bounds.left + f * 0.72983, r.bounds.top + f * 0.23),
                new O(r.bounds.left + f * 0.84, r.bounds.top + f * 0.34085),
                new O(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79)
              ]), this.ctx.fillStyle = IA(pa), this.ctx.fill(), this.ctx.restore()) : r.type === Fs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + f / 2, r.bounds.top + f / 2, f / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = IA(pa), this.ctx.fill(), this.ctx.restore())), sF(r) && r.value.length) {
                switch (B = this.createFontStyle(n), m = B[0], Q = B[1], v = this.fontMetrics.getMetrics(m, Q).baseline, this.ctx.font = m, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = iF(r.styles.textAlign), k = Es(r), U = 0, r.styles.textAlign) {
                  case 1:
                    U += k.width / 2;
                    break;
                  case 2:
                    U += k.width;
                    break;
                }
                K = k.add(U, 0, 0, -k.height / 2 + 1), this.ctx.save(), this.path([
                  new O(k.left, k.top),
                  new O(k.left + k.width, k.top),
                  new O(k.left + k.width, k.top + k.height),
                  new O(k.left, k.top + k.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ur(r.value, K), n.letterSpacing, v), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!yA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (H = r.styles.listStyleImage, H.type !== 0) return [3, 18];
              b = void 0, h = H.url, L.label = 15;
            case 15:
              return L.trys.push([15, 17, , 18]), [4, this.context.cache.match(h)];
            case 16:
              return b = L.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [3, 18];
            case 17:
              return L.sent(), this.context.logger.error("Error loading list-style-image " + h), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(n)[0], this.ctx.font = m, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", k = new Ge(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Aa(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ur(t.listValue, k), n.letterSpacing, Aa(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), L.label = 20;
            case 20:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderStackContent = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, H, n, i, H, o, a, H, c, l, H, f, B, H, Q, v, H, U, K, H;
        return DA(this, function(b) {
          switch (b.label) {
            case 0:
              if (yA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              b.sent(), r = 0, s = t.negativeZIndex, b.label = 2;
            case 2:
              return r < s.length ? (H = s[r], [4, this.renderStack(H)]) : [3, 5];
            case 3:
              b.sent(), b.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              b.sent(), n = 0, i = t.nonInlineLevel, b.label = 7;
            case 7:
              return n < i.length ? (H = i[n], [4, this.renderNode(H)]) : [3, 10];
            case 8:
              b.sent(), b.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, b.label = 11;
            case 11:
              return o < a.length ? (H = a[o], [4, this.renderStack(H)]) : [3, 14];
            case 12:
              b.sent(), b.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              c = 0, l = t.nonPositionedInlineLevel, b.label = 15;
            case 15:
              return c < l.length ? (H = l[c], [4, this.renderStack(H)]) : [3, 18];
            case 16:
              b.sent(), b.label = 17;
            case 17:
              return c++, [3, 15];
            case 18:
              f = 0, B = t.inlineLevel, b.label = 19;
            case 19:
              return f < B.length ? (H = B[f], [4, this.renderNode(H)]) : [3, 22];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return f++, [3, 19];
            case 22:
              Q = 0, v = t.zeroOrAutoZIndexOrTransformedOrOpacity, b.label = 23;
            case 23:
              return Q < v.length ? (H = v[Q], [4, this.renderStack(H)]) : [3, 26];
            case 24:
              b.sent(), b.label = 25;
            case 25:
              return Q++, [3, 23];
            case 26:
              U = 0, K = t.positiveZIndex, b.label = 27;
            case 27:
              return U < K.length ? (H = K[U], [4, this.renderStack(H)]) : [3, 30];
            case 28:
              b.sent(), b.label = 29;
            case 29:
              return U++, [3, 27];
            case 30:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.mask = function(t) {
      this.ctx.beginPath(), this.ctx.moveTo(0, 0), this.ctx.lineTo(this.canvas.width, 0), this.ctx.lineTo(this.canvas.width, this.canvas.height), this.ctx.lineTo(0, this.canvas.height), this.ctx.lineTo(0, 0), this.formatPath(t.slice(0).reverse()), this.ctx.closePath();
    }, e.prototype.path = function(t) {
      this.ctx.beginPath(), this.formatPath(t), this.ctx.closePath();
    }, e.prototype.formatPath = function(t) {
      var r = this;
      t.forEach(function(s, n) {
        var i = re(s) ? s.start : s;
        n === 0 ? r.ctx.moveTo(i.x, i.y) : r.ctx.lineTo(i.x, i.y), re(s) && r.ctx.bezierCurveTo(s.startControl.x, s.startControl.y, s.endControl.x, s.endControl.y, s.end.x, s.end.y);
      });
    }, e.prototype.renderRepeat = function(t, r, s, n) {
      this.path(t), this.ctx.fillStyle = r, this.ctx.translate(s, n), this.ctx.fill(), this.ctx.translate(-s, -n);
    }, e.prototype.resizeImage = function(t, r, s) {
      var n;
      if (t.width === r && t.height === s)
        return t;
      var i = (n = this.canvas.ownerDocument) !== null && n !== void 0 ? n : document, o = i.createElement("canvas");
      o.width = Math.max(1, r), o.height = Math.max(1, s);
      var a = o.getContext("2d");
      return a.drawImage(t, 0, 0, t.width, t.height, 0, 0, r, s), o;
    }, e.prototype.renderBackgroundImage = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a;
        return DA(this, function(c) {
          switch (c.label) {
            case 0:
              r = t.styles.backgroundImage.length - 1, s = function(l) {
                var f, B, Q, iA, sA, z, eA, wA, Z, v, iA, sA, z, eA, wA, U, K, H, b, h, m, k, L, W, Z, V, iA, UA, EA, eA, wA, ie, sA, z, AA, HA, YA, MA, mA, Ae, He, oe;
                return DA(this, function(ee) {
                  switch (ee.label) {
                    case 0:
                      if (l.type !== 0) return [3, 5];
                      f = void 0, B = l.url, ee.label = 1;
                    case 1:
                      return ee.trys.push([1, 3, , 4]), [4, n.context.cache.match(B)];
                    case 2:
                      return f = ee.sent(), [3, 4];
                    case 3:
                      return ee.sent(), n.context.logger.error("Error loading background-image " + B), [3, 4];
                    case 4:
                      return f && (Q = Tn(t, r, [
                        f.width,
                        f.height,
                        f.width / f.height
                      ]), iA = Q[0], sA = Q[1], z = Q[2], eA = Q[3], wA = Q[4], Z = n.ctx.createPattern(n.resizeImage(f, eA, wA), "repeat"), n.renderRepeat(iA, Z, sA, z)), [3, 6];
                    case 5:
                      GC(l) ? (v = Tn(t, r, [null, null, null]), iA = v[0], sA = v[1], z = v[2], eA = v[3], wA = v[4], U = OC(l.angle, eA, wA), K = U[0], H = U[1], b = U[2], h = U[3], m = U[4], k = document.createElement("canvas"), k.width = eA, k.height = wA, L = k.getContext("2d"), W = L.createLinearGradient(H, h, b, m), qo(l.stops, K).forEach(function(de) {
                        return W.addColorStop(de.stop, IA(de.color));
                      }), L.fillStyle = W, L.fillRect(0, 0, eA, wA), eA > 0 && wA > 0 && (Z = n.ctx.createPattern(k, "repeat"), n.renderRepeat(iA, Z, sA, z))) : PC(l) && (V = Tn(t, r, [
                        null,
                        null,
                        null
                      ]), iA = V[0], UA = V[1], EA = V[2], eA = V[3], wA = V[4], ie = l.position.length === 0 ? [Ti] : l.position, sA = gA(ie[0], eA), z = gA(ie[ie.length - 1], wA), AA = RC(l, sA, z, eA, wA), HA = AA[0], YA = AA[1], HA > 0 && YA > 0 && (MA = n.ctx.createRadialGradient(UA + sA, EA + z, 0, UA + sA, EA + z, HA), qo(l.stops, HA * 2).forEach(function(de) {
                        return MA.addColorStop(de.stop, IA(de.color));
                      }), n.path(iA), n.ctx.fillStyle = MA, HA !== YA ? (mA = t.bounds.left + 0.5 * t.bounds.width, Ae = t.bounds.top + 0.5 * t.bounds.height, He = YA / HA, oe = 1 / He, n.ctx.save(), n.ctx.translate(mA, Ae), n.ctx.transform(1, 0, 0, He, 0, 0), n.ctx.translate(-mA, -Ae), n.ctx.fillRect(UA, oe * (EA - Ae) + Ae, eA, wA * oe), n.ctx.restore()) : n.ctx.fill())), ee.label = 6;
                    case 6:
                      return r--, [
                        2
                        /*return*/
                      ];
                  }
                });
              }, n = this, i = 0, o = t.styles.backgroundImage.slice(0).reverse(), c.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [5, s(a)]) : [3, 4];
            case 2:
              c.sent(), c.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderSolidBorder = function(t, r, s) {
      return VA(this, void 0, void 0, function() {
        return DA(this, function(n) {
          return this.path(Ha(s, r)), this.ctx.fillStyle = IA(t), this.ctx.fill(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.renderDoubleBorder = function(t, r, s, n) {
      return VA(this, void 0, void 0, function() {
        var i, o;
        return DA(this, function(a) {
          switch (a.label) {
            case 0:
              return r < 3 ? [4, this.renderSolidBorder(t, s, n)] : [3, 2];
            case 1:
              return a.sent(), [
                2
                /*return*/
              ];
            case 2:
              return i = WU(n, s), this.path(i), this.ctx.fillStyle = IA(t), this.ctx.fill(), o = YU(n, s), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, c, l, f = this;
        return DA(this, function(B) {
          switch (B.label) {
            case 0:
              return this.applyEffects(t.getEffects(
                2
                /* BACKGROUND_BORDERS */
              )), r = t.container.styles, s = !tt(r.backgroundColor) || r.backgroundImage.length, n = [
                { style: r.borderTopStyle, color: r.borderTopColor, width: r.borderTopWidth },
                { style: r.borderRightStyle, color: r.borderRightColor, width: r.borderRightWidth },
                { style: r.borderBottomStyle, color: r.borderBottomColor, width: r.borderBottomWidth },
                { style: r.borderLeftStyle, color: r.borderLeftColor, width: r.borderLeftWidth }
              ], i = nF(Et(r.backgroundClip, 0), t.curves), s || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), tt(r.backgroundColor) || (this.ctx.fillStyle = IA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              B.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                f.ctx.save();
                var v = xs(t.curves), U = Q.inset ? 0 : tF, K = JU(v, -U + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (f.path(v), f.ctx.clip(), f.mask(K)) : (f.mask(v), f.ctx.clip(), f.path(K)), f.ctx.shadowOffsetX = Q.offsetX.number + U, f.ctx.shadowOffsetY = Q.offsetY.number, f.ctx.shadowColor = IA(Q.color), f.ctx.shadowBlur = Q.blur.number, f.ctx.fillStyle = Q.inset ? IA(Q.color) : "rgba(0,0,0,1)", f.ctx.fill(), f.ctx.restore();
              }), B.label = 2;
            case 2:
              o = 0, a = 0, c = n, B.label = 3;
            case 3:
              return a < c.length ? (l = c[a], l.style !== 0 && !tt(l.color) && l.width > 0 ? l.style !== 2 ? [3, 5] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                o,
                t.curves,
                2
                /* DASHED */
              )] : [3, 11]) : [3, 13];
            case 4:
              return B.sent(), [3, 11];
            case 5:
              return l.style !== 3 ? [3, 7] : [4, this.renderDashedDottedBorder(
                l.color,
                l.width,
                o,
                t.curves,
                3
                /* DOTTED */
              )];
            case 6:
              return B.sent(), [3, 11];
            case 7:
              return l.style !== 4 ? [3, 9] : [4, this.renderDoubleBorder(l.color, l.width, o, t.curves)];
            case 8:
              return B.sent(), [3, 11];
            case 9:
              return [4, this.renderSolidBorder(l.color, o, t.curves)];
            case 10:
              B.sent(), B.label = 11;
            case 11:
              o++, B.label = 12;
            case 12:
              return a++, [3, 3];
            case 13:
              return [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderDashedDottedBorder = function(t, r, s, n, i) {
      return VA(this, void 0, void 0, function() {
        var o, a, c, l, f, B, Q, v, U, K, H, b, h, m, k, L, k, L;
        return DA(this, function(W) {
          return this.ctx.save(), o = jU(n, s), a = Ha(n, s), i === 2 && (this.path(a), this.ctx.clip()), re(a[0]) ? (c = a[0].start.x, l = a[0].start.y) : (c = a[0].x, l = a[0].y), re(a[1]) ? (f = a[1].end.x, B = a[1].end.y) : (f = a[1].x, B = a[1].y), s === 0 || s === 2 ? Q = Math.abs(c - f) : Q = Math.abs(l - B), this.ctx.beginPath(), i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), v = r < 3 ? r * 3 : r * 2, U = r < 3 ? r * 2 : r, i === 3 && (v = r, U = r), K = !0, Q <= v * 2 ? K = !1 : Q <= v * 2 + U ? (H = Q / (2 * v + U), v *= H, U *= H) : (b = Math.floor((Q + U) / (v + U)), h = (Q - b * v) / (b - 1), m = (Q - (b + 1) * v) / b, U = m <= 0 || Math.abs(U - h) < Math.abs(U - m) ? h : m), K && (i === 3 ? this.ctx.setLineDash([0, v + U]) : this.ctx.setLineDash([v, U])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = IA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (re(a[0]) && (k = a[3], L = a[0], this.ctx.beginPath(), this.formatPath([new O(k.end.x, k.end.y), new O(L.start.x, L.start.y)]), this.ctx.stroke()), re(a[1]) && (k = a[1], L = a[2], this.ctx.beginPath(), this.formatPath([new O(k.end.x, k.end.y), new O(L.start.x, L.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
            2
            /*return*/
          ];
        });
      });
    }, e.prototype.render = function(t) {
      return VA(this, void 0, void 0, function() {
        var r;
        return DA(this, function(s) {
          switch (s.label) {
            case 0:
              return this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = XU(t), [4, this.renderStack(r)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), sF = function(A) {
  return A instanceof xc || A instanceof mc ? !0 : A instanceof Ri && A.type !== Fs && A.type !== Us;
}, nF = function(A, e) {
  switch (A) {
    case 0:
      return xs(e);
    case 2:
      return MU(e);
    case 1:
    default:
      return ys(e);
  }
}, iF = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, oF = ["-apple-system", "system-ui"], aF = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return oF.indexOf(e) === -1;
  }) : A;
}, lF = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), s.options = r, s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px", s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.context.logger.debug("EXPERIMENTAL ForeignObject renderer initialized (" + r.width + "x" + r.height + " at " + r.x + "," + r.y + ") with scale " + r.scale), s;
    }
    return e.prototype.render = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s;
        return DA(this, function(n) {
          switch (n.label) {
            case 0:
              return r = ai(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, cF(r)];
            case 1:
              return s = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), cF = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, fF = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Kr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Kr([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Kr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Kr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), uF = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new fF({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new LU(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), BF = function(A, e) {
  return e === void 0 && (e = {}), dF(A, e);
};
typeof window < "u" && kc.setContext(window);
var dF = function(A, e) {
  return VA(void 0, void 0, void 0, function() {
    var t, r, s, n, i, o, a, c, l, f, B, Q, v, U, K, H, b, h, m, k, W, L, W, Z, V, iA, UA, EA, eA, wA, ie, sA, z, AA, HA, YA, MA, mA, Ae, He;
    return DA(this, function(oe) {
      switch (oe.label) {
        case 0:
          if (!A || typeof A != "object")
            return [2, Promise.reject("Invalid element provided as first argument")];
          if (t = A.ownerDocument, !t)
            throw new Error("Element is not attached to a Document");
          if (r = t.defaultView, !r)
            throw new Error("Document is not attached to a Window");
          return s = {
            allowTaint: (Z = e.allowTaint) !== null && Z !== void 0 ? Z : !1,
            imageTimeout: (V = e.imageTimeout) !== null && V !== void 0 ? V : 15e3,
            proxy: e.proxy,
            useCORS: (iA = e.useCORS) !== null && iA !== void 0 ? iA : !1
          }, n = Wn({ logging: (UA = e.logging) !== null && UA !== void 0 ? UA : !0, cache: e.cache }, s), i = {
            windowWidth: (EA = e.windowWidth) !== null && EA !== void 0 ? EA : r.innerWidth,
            windowHeight: (eA = e.windowHeight) !== null && eA !== void 0 ? eA : r.innerHeight,
            scrollX: (wA = e.scrollX) !== null && wA !== void 0 ? wA : r.pageXOffset,
            scrollY: (ie = e.scrollY) !== null && ie !== void 0 ? ie : r.pageYOffset
          }, o = new Ge(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new uF(n, o), c = (sA = e.foreignObjectRendering) !== null && sA !== void 0 ? sA : !1, l = {
            allowTaint: (z = e.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), f = new xa(a, A, l), B = f.clonedReferenceElement, B ? [4, f.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = oe.sent(), v = Mi(B) || gU(B) ? Jw(B.ownerDocument) : Gs(a, B), U = v.width, K = v.height, H = v.left, b = v.top, h = gF(a, B, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: h,
            scale: (HA = (AA = e.scale) !== null && AA !== void 0 ? AA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((YA = e.x) !== null && YA !== void 0 ? YA : 0) + H,
            y: ((MA = e.y) !== null && MA !== void 0 ? MA : 0) + b,
            width: (mA = e.width) !== null && mA !== void 0 ? mA : Math.ceil(U),
            height: (Ae = e.height) !== null && Ae !== void 0 ? Ae : Math.ceil(K)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), W = new lF(a, m), [4, W.render(B)]) : [3, 3];
        case 2:
          return k = oe.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + H + "," + b + " with size " + U + "x" + K + " using computed rendering"), a.logger.debug("Starting DOM parsing"), L = Hc(a, B), h === L.styles.backgroundColor && (L.styles.backgroundColor = Oe.TRANSPARENT), a.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), W = new rF(a, m), [4, W.render(L)];
        case 4:
          k = oe.sent(), oe.label = 5;
        case 5:
          return (!((He = e.removeContainer) !== null && He !== void 0) || He) && (xa.destroy(Q) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, k];
      }
    });
  });
}, gF = function(A, e, t) {
  var r = e.ownerDocument, s = r.documentElement ? cr(A, getComputedStyle(r.documentElement).backgroundColor) : Oe.TRANSPARENT, n = r.body ? cr(A, getComputedStyle(r.body).backgroundColor) : Oe.TRANSPARENT, i = typeof t == "string" ? cr(A, t) : t === null ? Oe.TRANSPARENT : 4294967295;
  return e === r.documentElement ? tt(s) ? tt(n) ? i : n : s : i;
};
async function hF(A = {}) {
  var l;
  const e = window.innerWidth, t = window.innerHeight;
  try {
    (l = A.beforeCapture) == null || l.call(A);
  } catch {
  }
  const r = (() => {
    var f;
    try {
      return (((f = A.canvases) == null ? void 0 : f.call(A)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), s = r.map((f) => {
    try {
      return f.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(r), i = A.ignore || [], o = await BF(document.body, {
    useCORS: !0,
    allowTaint: !0,
    backgroundColor: null,
    scale: 1,
    width: e,
    height: t,
    ignoreElements: (f) => {
      var B;
      return n.has(f) || f.tagName && f.tagName.toLowerCase().startsWith("bugfix-") || (B = A.ignoreElement) != null && B.call(A, f) ? !0 : i.some((Q) => {
        var v;
        try {
          return (v = f.matches) == null ? void 0 : v.call(f, Q);
        } catch {
          return !1;
        }
      });
    }
  }), a = document.createElement("canvas");
  a.width = e, a.height = t;
  const c = a.getContext("2d");
  for (const f of s)
    await new Promise((B) => {
      const Q = new Image();
      Q.onload = () => {
        c.drawImage(Q, 0, 0, e, t), B();
      }, Q.onerror = B, Q.src = f;
    });
  return c.drawImage(o, 0, 0), a.toDataURL("image/png");
}
const mt = (A, e = 2) => String(A).padStart(e, "0");
function fe(A = !1) {
  const e = /* @__PURE__ */ new Date(), t = `${mt(e.getHours())}:${mt(e.getMinutes())}:${mt(e.getSeconds())}.${mt(e.getMilliseconds(), 3)}`;
  return A ? `${e.getFullYear()}-${mt(e.getMonth() + 1)}-${mt(e.getDate())} ${t}` : t;
}
function Er(A) {
  const e = [];
  return { push(t) {
    e.push(t), e.length > A && e.shift();
  }, get: () => [...e] };
}
const pF = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function wF(A) {
  if (A == null) return String(A);
  if (A instanceof Error) return A.stack || A.toString();
  if (typeof A == "object")
    try {
      return JSON.stringify(A);
    } catch {
      return String(A);
    }
  return String(A);
}
function QF({ max: A = 200, silent: e = pF } = {}) {
  const t = Er(A);
  for (const r of ["log", "warn", "error"]) {
    const s = console[r].bind(console);
    console[r] = (...n) => {
      const i = n.map(wF).join(" ");
      e.some((o) => o.test(i)) || (t.push({ level: r, time: fe(!0), message: i }), s(...n));
    };
  }
  return window.addEventListener("error", (r) => t.push({ level: "error", time: fe(!0), message: `[GlobalError] ${r.message} (${r.filename}:${r.lineno})` })), window.addEventListener("unhandledrejection", (r) => {
    const s = r.reason instanceof Error ? r.reason.message : String(r.reason);
    t.push({ level: "error", time: fe(!0), message: `[UnhandledRejection] ${s}` });
  }), t.get;
}
const CF = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, vF = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
function gi(A, e = 2e3) {
  if (A == null) return null;
  let t;
  try {
    t = typeof A == "string" ? A : JSON.stringify(A);
  } catch {
    return "[unserializable]";
  }
  return t.length > e ? t.slice(0, e) + "…[truncated]" : t;
}
function Je(A, e) {
  if (e == null) return e;
  const t = typeof e == "string" ? e : (() => {
    try {
      return JSON.stringify(e);
    } catch {
      return String(e);
    }
  })();
  return CF.test(A || "") || vF.test(t) ? "[masked]" : gi(e);
}
function UF({ max: A = 50, axios: e = [], fetch: t = !1, xhr: r = !1, ignore: s = [] } = {}) {
  const n = Er(A), i = (o) => s.some((a) => a instanceof RegExp ? a.test(o) : String(o).includes(a));
  for (const o of e) {
    const a = o != null && o.interceptors ? o : o == null ? void 0 : o.instance, c = (o == null ? void 0 : o.label) || "axios";
    a != null && a.interceptors && (a.interceptors.request.use((l) => (l._bk = { t0: Date.now(), time: fe(!0) }, l), (l) => Promise.reject(l)), a.interceptors.response.use((l) => {
      var B;
      const f = l.config._bk || {};
      return i(l.config.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (B = l.config.method) == null ? void 0 : B.toUpperCase(), url: l.config.url, params: gi(l.config.params), requestBody: Je(l.config.url, l.config.data), status: l.status, responseBody: Je(l.config.url, l.data), error: null }), l;
    }, (l) => {
      var B, Q, v, U, K, H, b, h, m, k, L;
      const f = ((B = l.config) == null ? void 0 : B._bk) || {};
      return i((Q = l.config) == null ? void 0 : Q.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (U = (v = l.config) == null ? void 0 : v.method) == null ? void 0 : U.toUpperCase(), url: (K = l.config) == null ? void 0 : K.url, params: gi((H = l.config) == null ? void 0 : H.params), requestBody: Je((b = l.config) == null ? void 0 : b.url, (h = l.config) == null ? void 0 : h.data), status: ((m = l.response) == null ? void 0 : m.status) ?? "ERR", responseBody: Je((k = l.config) == null ? void 0 : k.url, (L = l.response) == null ? void 0 : L.data), error: l.message }), Promise.reject(l);
    }));
  }
  if (t && window.fetch) {
    const o = window.fetch.bind(window);
    window.fetch = async (a, c = {}) => {
      const l = typeof a == "string" ? a : a == null ? void 0 : a.url, f = Date.now(), B = fe(!0), Q = (c.method || typeof a != "string" && (a == null ? void 0 : a.method) || "GET").toUpperCase();
      try {
        const v = await o(a, c);
        return i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: Q, url: l, params: null, requestBody: Je(l, c.body), status: v.status, responseBody: null, error: null }), v;
      } catch (v) {
        throw i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: Q, url: l, params: null, requestBody: Je(l, c.body), status: "ERR", responseBody: null, error: v.message }), v;
      }
    };
  }
  if (r && window.XMLHttpRequest) {
    const o = XMLHttpRequest.prototype, a = o.open, c = o.send;
    o.open = function(l, f, ...B) {
      return this._bk = { method: String(l).toUpperCase(), url: f }, a.call(this, l, f, ...B);
    }, o.send = function(l) {
      const f = this._bk || {}, B = Date.now(), Q = fe(!0);
      return this.addEventListener("loadend", () => {
        i(f.url) || n.push({ server: "xhr", time: Q, duration: Date.now() - B, method: f.method, url: f.url, params: null, requestBody: Je(f.url, l), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Je(f.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), c.call(this, l);
    };
  }
  return n.get;
}
function FF(A) {
  var t;
  if (A == null) return null;
  if (typeof A != "object") return A;
  const e = ((t = A == null ? void 0 : A.constructor) == null ? void 0 : t.name) ?? "";
  if (e.startsWith("Cesium") || typeof HTMLElement < "u" && A instanceof HTMLElement) return `[${e}]`;
  try {
    const r = JSON.stringify(A, (s, n) => {
      var i, o;
      return typeof HTMLElement < "u" && n instanceof HTMLElement ? "[HTMLElement]" : (o = (i = n == null ? void 0 : n.constructor) == null ? void 0 : i.name) != null && o.startsWith("Cesium") ? `[${n.constructor.name}]` : typeof n == "function" ? "[Function]" : n;
    });
    return r.length > 300 ? r.slice(0, 300) + "…" : JSON.parse(r);
  } catch {
    return "[unserializable]";
  }
}
function bF(A, { max: e = 100 } = {}) {
  const t = Er(e);
  return A.subscribe((r) => t.push({ time: fe(), type: r.type, payload: FF(r.payload) })), t.get;
}
function mF(A, { max: e = 20 } = {}) {
  const t = Er(e);
  if (A && typeof A.afterEach == "function")
    A.afterEach((r, s) => t.push({ time: fe(), from: s.fullPath || "(초기)", to: r.fullPath, name: String(r.name ?? "") }));
  else {
    let r = location.pathname + location.search + location.hash;
    const s = () => {
      const n = location.pathname + location.search + location.hash;
      n !== r && (t.push({ time: fe(), from: r, to: n, name: "" }), r = n);
    };
    for (const n of ["pushState", "replaceState"]) {
      const i = history[n];
      history[n] = function(...o) {
        const a = i.apply(this, o);
        return s(), a;
      };
    }
    window.addEventListener("popstate", s), window.addEventListener("hashchange", s);
  }
  return t.get;
}
function xF(A, { max: e = 80, skip: t = [] } = {}) {
  const r = Er(e), s = new Set(t), n = A.emit.bind(A);
  return A.emit = (i, o) => (s.has(i) || r.push({ time: fe(), type: i }), n(i, o)), r.get;
}
function _F() {
  const A = /* @__PURE__ */ new Set(), e = () => (t) => (r) => {
    const s = typeof r == "function" ? "(thunk)" : String((r == null ? void 0 : r.type) ?? "(unknown)");
    for (const n of A)
      try {
        n({ type: s, payload: typeof r == "object" ? r.payload : void 0 });
      } catch {
      }
    return t(r);
  };
  return e.source = { subscribe: (t) => (A.add(t), () => A.delete(t)) }, e;
}
function LF(A) {
  return {
    subscribe: (e) => A.subscribe((t, r) => {
      const s = Object.keys(t).filter((n) => t[n] !== (r == null ? void 0 : r[n]));
      e({ type: `set(${s.join(",") || "?"})`, payload: Object.fromEntries(s.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function yF(A) {
  var n, i;
  let e = null;
  try {
    const o = performance == null ? void 0 : performance.memory;
    o && (e = { usedMB: +(o.usedJSHeapSize / 1048576).toFixed(1), limitMB: +(o.jsHeapSizeLimit / 1048576).toFixed(1) });
  } catch {
  }
  let t = null;
  try {
    const o = navigator.connection;
    o && (t = { effectiveType: o.effectiveType, downlink: o.downlink, rtt: o.rtt });
  } catch {
  }
  let r = null;
  try {
    const o = ["token", "password", "secret", "auth-tokens-", ...A.options.storageExclude || []].map((a) => a.toLowerCase());
    r = {};
    for (let a = 0; a < localStorage.length; a++) {
      const c = localStorage.key(a);
      if (o.some((f) => c.toLowerCase().includes(f))) continue;
      const l = localStorage.getItem(c);
      r[c] = l && l.length > 200 ? l.slice(0, 200) + "…" : l;
    }
  } catch {
  }
  let s = {};
  try {
    s = ((i = (n = A.options).context) == null ? void 0 : i.call(n)) || {};
  } catch (o) {
    s = { _contextError: String((o == null ? void 0 : o.message) || o) };
  }
  return {
    datetime: fe(!0),
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    url: window.location.href,
    browser: { userAgent: navigator.userAgent, language: navigator.language, platform: navigator.platform },
    screen: { resolution: `${screen.width}x${screen.height}`, viewport: `${window.innerWidth}x${window.innerHeight}`, devicePixelRatio: window.devicePixelRatio },
    memory: e,
    connection: t,
    ...s,
    recentEvents: A.getEvents().slice(-50).reverse(),
    mutationLog: A.getMutations().slice(-100).reverse(),
    routeHistory: A.getRoutes(),
    storage: r
  };
}
const Xt = () => [];
function EF(A = {}) {
  var l;
  const e = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...A }, t = e.interceptors || {}, r = t.console === !1 ? Xt : QF(t.console === !0 ? {} : t.console), s = t.network ? UF(t.network) : Xt, n = t.mutation ? bF(t.mutation) : Xt, i = t.router ? mF(t.router === !0 ? null : t.router) : Xt, o = t.events ? xF(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Xt, a = ((l = e.projects) != null && l.length ? e.projects : [{ key: e.project, label: e.project }]).map((f) => typeof f == "string" ? { key: f, label: f } : f), c = {
    options: e,
    projects: a,
    project: a[0].key,
    api: dn({ ...e, project: a[0].key, apiKey: a[0].apiKey ?? e.apiKey, adminKey: e.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const f of a)
        if (!c._info[f.key])
          try {
            c._info[f.key] = await dn({ ...e, project: f.key, apiKey: f.apiKey ?? e.apiKey, adminKey: e.adminKey }).info();
          } catch {
            c._info[f.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(f) {
      const B = a.find((Q) => Q.key === f);
      B && (c.project = B.key, c.api = dn({ ...e, project: B.key, apiKey: B.apiKey ?? e.apiKey, adminKey: e.adminKey }));
    },
    getLogs: r,
    getNetwork: s,
    getMutations: n,
    getRoutes: i,
    getEvents: o,
    captureScreen: (f = {}) => {
      var B;
      return hF({ ...e.capture || {}, ...f, ignore: [...((B = e.capture) == null ? void 0 : B.ignore) || [], ...f.ignore || []] });
    },
    captureContext: () => yF(c),
    fetchBackendLogs: async () => e.backendLogs ? await e.backendLogs() : null,
    notify: (f) => {
      e.notify ? e.notify(f) : c._listeners.forEach((B) => B(f));
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
      var f, B, Q, v;
      return ((B = (f = c._els.modal) == null ? void 0 : f.open) == null ? void 0 : B.call(f)) ?? ((v = (Q = c._open) == null ? void 0 : Q.report) == null ? void 0 : v.call(Q));
    },
    openViewer: (f) => {
      var B, Q, v, U;
      return ((Q = (B = c._els.viewer) == null ? void 0 : B.open) == null ? void 0 : Q.call(B, f)) ?? ((U = (v = c._open) == null ? void 0 : v.viewer) == null ? void 0 : U.call(v, f));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(f, B) {
      c._open[f] = B;
    }
  };
  if (e.hotkeys) {
    const f = (B, Q) => {
      if (!Q) return !1;
      const v = Q.split("+").map((K) => K.trim().toLowerCase()), U = v.pop();
      return B.key.toLowerCase() === U && v.includes("shift") === B.shiftKey && v.includes("ctrl") === B.ctrlKey && v.includes("alt") === B.altKey && v.includes("meta") === B.metaKey;
    };
    window.addEventListener("keydown", (B) => {
      f(B, e.hotkeys.report) ? (B.preventDefault(), c.openReport()) : f(B, e.hotkeys.viewer) && (B.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function HF() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ bo(gh)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ bo(Pw));
}
HF();
function SF(A) {
  return EF(A).mount();
}
export {
  hF as captureScreen,
  EF as createBugfix,
  SF as install,
  _F as reduxMiddleware,
  HF as register,
  LF as zustandSource
};
