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
}, _a = () => !1, Is = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), _s = (A) => A.startsWith("onUpdate:"), vA = Object.assign, pi = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, Pc = Object.prototype.hasOwnProperty, sA = (A, e) => Pc.call(A, e), J = Array.isArray, $e = (A) => Fr(A) === "[object Map]", St = (A) => Fr(A) === "[object Set]", Ji = (A) => Fr(A) === "[object Date]", j = (A) => typeof A == "function", pA = (A) => typeof A == "string", me = (A) => typeof A == "symbol", fA = (A) => A !== null && typeof A == "object", La = (A) => (fA(A) || j(A)) && j(A.then) && j(A.catch), Sa = Object.prototype.toString, Fr = (A) => Sa.call(A), Jc = (A) => Fr(A).slice(8, -1), Ls = (A) => Fr(A) === "[object Object]", wi = (A) => pA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, rr = /* @__PURE__ */ hi(
  // the leading comma is intentional so empty string "" is also included
  ",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"
), Ss = (A) => {
  const e = /* @__PURE__ */ Object.create(null);
  return (t) => e[t] || (e[t] = A(t));
}, Xc = /-\w/g, _A = Ss(
  (A) => A.replace(Xc, (e) => e.slice(1).toUpperCase())
), Wc = /\B([A-Z])/g, zA = Ss(
  (A) => A.replace(Wc, "-$1").toLowerCase()
), Ks = Ss((A) => A.charAt(0).toUpperCase() + A.slice(1)), An = Ss(
  (A) => A ? `on${Ks(A)}` : ""
), Te = (A, e) => !Object.is(A, e), ss = (A, ...e) => {
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
const Ts = () => Wi || (Wi = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : typeof global < "u" ? global : {});
function br(A) {
  if (J(A)) {
    const e = {};
    for (let t = 0; t < A.length; t++) {
      const r = A[t], s = pA(r) ? zc(r) : br(r);
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
function q(A) {
  let e = "";
  if (pA(A))
    e = A;
  else if (J(A))
    for (let t = 0; t < A.length; t++) {
      const r = q(A[t]);
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
const ka = (A) => !!(A && A.__v_isRef === !0), v = (A) => pA(A) ? A : A == null ? "" : J(A) || fA(A) && (A.toString === Sa || !j(A.toString)) ? ka(A) ? v(A.value) : JSON.stringify(A, Oa, 2) : String(A), Oa = (A, e) => ka(e) ? Oa(A, e.value) : $e(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [r, s], n) => (t[en(r, n) + " =>"] = s, t),
    {}
  )
} : St(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => en(t))
} : me(e) ? en(e) : fA(e) && !J(e) && !Ls(e) ? String(e) : e, en = (A, e = "") => {
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
class Ma {
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
let Ra = 0, sr, nr;
function Na(A, e = !1) {
  if (A.flags |= 8, e) {
    A.next = nr, nr = A;
    return;
  }
  A.next = sr, sr = A;
}
function Ci() {
  Ra++;
}
function vi() {
  if (--Ra > 0)
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
function Me() {
  Ja.push(le), le = !1;
}
function Re() {
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
  const e = /* @__PURE__ */ lA(A);
  return e === A || (OA(e, "iterate", gr), /* @__PURE__ */ ce(A)) ? e : /* @__PURE__ */ Ne(A) ? /* @__PURE__ */ At(A) ? e.map((t) => rt(ye(t))) : e.map(rt) : e.map(ye);
}
function Ds(A) {
  return OA(A = /* @__PURE__ */ lA(A), "iterate", gr), A;
}
function ve(A, e) {
  return /* @__PURE__ */ Ne(A) ? rt(/* @__PURE__ */ At(A) ? ye(e) : e) : ye(e);
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
    return Rt(this, "pop");
  },
  push(...A) {
    return Rt(this, "push", A);
  },
  reduce(A, ...e) {
    return zi(this, "reduce", A, e);
  },
  reduceRight(A, ...e) {
    return zi(this, "reduceRight", A, e);
  },
  shift() {
    return Rt(this, "shift");
  },
  // slice could use ARRAY_ITERATE but also seems to beg for range tracking
  some(A, e) {
    return Ie(this, "some", A, e, void 0, arguments);
  },
  splice(...A) {
    return Rt(this, "splice", A);
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
    return Rt(this, "unshift", A);
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
    return o ? ye(f) : f;
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
  const r = /* @__PURE__ */ lA(A);
  OA(r, "iterate", gr);
  const s = r[e](...t);
  return (s === -1 || s === !1) && /* @__PURE__ */ yi(t[0]) ? (t[0] = /* @__PURE__ */ lA(t[0]), r[e](...t)) : s;
}
function Rt(A, e, t = []) {
  Me(), Ci();
  const r = (/* @__PURE__ */ lA(A))[e].apply(A, t);
  return vi(), Re(), r;
}
const lf = /* @__PURE__ */ hi("__proto__,__v_isRef,__isVue"), Ya = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(me)
);
function cf(A) {
  me(A) || (A = String(A));
  const e = /* @__PURE__ */ lA(this);
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
      return s && fA(a) ? /* @__PURE__ */ Rn(a) : a;
    }
    return fA(o) ? s ? /* @__PURE__ */ Rn(o) : /* @__PURE__ */ bi(o) : o;
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
      if (!/* @__PURE__ */ ce(r) && !/* @__PURE__ */ Ne(r) && (n = /* @__PURE__ */ lA(n), r = /* @__PURE__ */ lA(r)), !i && /* @__PURE__ */ JA(n) && !/* @__PURE__ */ JA(r))
        return c || (n.value = r), !0;
    }
    const o = i ? Number(t) < e.length : sA(e, t), a = Reflect.set(
      e,
      t,
      r,
      /* @__PURE__ */ JA(e) ? e : s
    );
    return e === /* @__PURE__ */ lA(s) && a && (o ? Te(r, n) && De(e, "set", t, r) : De(e, "add", t, r)), a;
  }
  deleteProperty(e, t) {
    const r = sA(e, t);
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
const Mn = (A) => A, Ir = (A) => Reflect.getPrototypeOf(A);
function gf(A, e, t) {
  return function(...r) {
    const s = this.__v_raw, n = /* @__PURE__ */ lA(s), i = $e(n), o = A === "entries" || A === Symbol.iterator && i, a = A === "keys" && i, c = s[A](...r), l = t ? Mn : e ? rt : ye;
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
function _r(A) {
  return function(...e) {
    return A === "delete" ? !1 : A === "clear" ? void 0 : this;
  };
}
function hf(A, e) {
  const t = {
    get(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ lA(n), o = /* @__PURE__ */ lA(s);
      A || (Te(s, o) && OA(i, "get", s), OA(i, "get", o));
      const { has: a } = Ir(i), c = e ? Mn : A ? rt : ye;
      if (a.call(i, s))
        return c(n.get(s));
      if (a.call(i, o))
        return c(n.get(o));
      n !== i && n.get(s);
    },
    get size() {
      const s = this.__v_raw;
      return !A && OA(/* @__PURE__ */ lA(s), "iterate", dt), s.size;
    },
    has(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ lA(n), o = /* @__PURE__ */ lA(s);
      return A || (Te(s, o) && OA(i, "has", s), OA(i, "has", o)), s === o ? n.has(s) : n.has(s) || n.has(o);
    },
    forEach(s, n) {
      const i = this, o = i.__v_raw, a = /* @__PURE__ */ lA(o), c = e ? Mn : A ? rt : ye;
      return !A && OA(a, "iterate", dt), o.forEach((l, f) => s.call(n, c(l), c(f), i));
    }
  };
  return vA(
    t,
    A ? {
      add: _r("add"),
      set: _r("set"),
      delete: _r("delete"),
      clear: _r("clear")
    } : {
      add(s) {
        const n = /* @__PURE__ */ lA(this), i = Ir(n), o = /* @__PURE__ */ lA(s), a = !e && !/* @__PURE__ */ ce(s) && !/* @__PURE__ */ Ne(s) ? o : s;
        return i.has.call(n, a) || Te(s, a) && i.has.call(n, s) || Te(o, a) && i.has.call(n, o) || (n.add(a), De(n, "add", a, a)), this;
      },
      set(s, n) {
        !e && !/* @__PURE__ */ ce(n) && !/* @__PURE__ */ Ne(n) && (n = /* @__PURE__ */ lA(n));
        const i = /* @__PURE__ */ lA(this), { has: o, get: a } = Ir(i);
        let c = o.call(i, s);
        c || (s = /* @__PURE__ */ lA(s), c = o.call(i, s));
        const l = a.call(i, s);
        return i.set(s, n), c ? Te(n, l) && De(i, "set", s, n) : De(i, "add", s, n), this;
      },
      delete(s) {
        const n = /* @__PURE__ */ lA(this), { has: i, get: o } = Ir(n);
        let a = i.call(n, s);
        a || (s = /* @__PURE__ */ lA(s), a = i.call(n, s)), o && o.call(n, s);
        const c = n.delete(s);
        return a && De(n, "delete", s, void 0), c;
      },
      clear() {
        const s = /* @__PURE__ */ lA(this), n = s.size !== 0, i = s.clear();
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
    sA(t, s) && s in r ? t : r,
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
function Rn(A) {
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
function yi(A) {
  return A ? !!A.__v_raw : !1;
}
// @__NO_SIDE_EFFECTS__
function lA(A) {
  const e = A && A.__v_raw;
  return e ? /* @__PURE__ */ lA(e) : A;
}
function Ff(A) {
  return !sA(A, "__v_skip") && Object.isExtensible(A) && Ka(A, "__v_skip", !0), A;
}
const ye = (A) => fA(A) ? /* @__PURE__ */ bi(A) : A, rt = (A) => fA(A) ? /* @__PURE__ */ Rn(A) : A;
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
function yf(A, e, t = !1) {
  let r, s;
  return j(A) ? r = A : (r = A.get, s = A.set), new mf(r, s, t);
}
const Lr = {}, us = /* @__PURE__ */ new WeakMap();
let at;
function xf(A, e = !1, t = at) {
  if (t) {
    let r = us.get(t);
    r || us.set(t, r = []), r.push(A);
  }
}
function Ef(A, e, t = BA) {
  const { immediate: r, deep: s, once: n, scheduler: i, augmentJob: o, call: a } = t, c = (m) => s ? m : /* @__PURE__ */ ce(m) || s === !1 || s === 0 ? ke(m, 1) : ke(m);
  let l, f, B, C, Q = !1, U = !1;
  if (/* @__PURE__ */ JA(A) ? (f = () => A.value, Q = /* @__PURE__ */ ce(A)) : /* @__PURE__ */ At(A) ? (f = () => c(A), Q = !0) : J(A) ? (U = !0, Q = A.some((m) => /* @__PURE__ */ At(m) || /* @__PURE__ */ ce(m)), f = () => A.map((m) => {
    if (/* @__PURE__ */ JA(m))
      return m.value;
    if (/* @__PURE__ */ At(m))
      return c(m);
    if (j(m))
      return a ? a(m, 2) : m();
  })) : j(A) ? e ? f = a ? () => a(A, 2) : A : f = () => {
    if (B) {
      Me();
      try {
        B();
      } finally {
        Re();
      }
    }
    const m = at;
    at = l;
    try {
      return a ? a(A, 3, [C]) : A(C);
    } finally {
      at = m;
    }
  } : f = Fe, e && s) {
    const m = f, T = s === !0 ? 1 / 0 : s;
    f = () => ke(m(), T);
  }
  const L = rf(), y = () => {
    l.stop(), L && L.active && pi(L.effects, l);
  };
  if (n && e) {
    const m = e;
    e = (...T) => {
      const S = m(...T);
      return y(), S;
    };
  }
  let b = U ? new Array(A.length).fill(Lr) : Lr;
  const g = (m) => {
    if (!(!(l.flags & 1) || !l.dirty && !m))
      if (e) {
        const T = l.run();
        if (m || s || Q || (U ? T.some((S, X) => Te(S, b[X])) : Te(T, b))) {
          B && B();
          const S = at;
          at = l;
          try {
            const X = [
              T,
              // pass undefined as the old value when it's changed for the first time
              b === Lr ? void 0 : U && b[0] === Lr ? [] : b,
              C
            ];
            b = T, a ? a(e, 3, X) : (
              // @ts-expect-error
              e(...X)
            );
          } finally {
            at = S;
          }
        }
      } else
        l.run();
  };
  return o && o(g), l = new Ma(f), l.scheduler = i ? () => i(g, !1) : g, C = (m) => xf(m, !1, l), B = l.onStop = () => {
    const m = us.get(l);
    if (m) {
      if (a)
        a(m, 4);
      else
        for (const T of m) T();
      us.delete(l);
    }
  }, e ? r ? g(!0) : b = l.run() : i ? i(g.bind(null, !0), !0) : l.run(), y.pause = l.pause.bind(l), y.resume = l.resume.bind(l), y.stop = y, y;
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
  else if (Ls(A)) {
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
function mr(A, e, t, r) {
  try {
    return r ? A(...r) : A();
  } catch (s) {
    ks(s, e, t);
  }
}
function ue(A, e, t, r) {
  if (j(A)) {
    const s = mr(A, e, t, r);
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
      Me(), mr(n, null, 10, [
        A,
        a,
        c
      ]), Re();
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
let Ye = null, yt = 0;
const tl = /* @__PURE__ */ Promise.resolve();
let Bs = null;
function rl(A) {
  const e = Bs || tl;
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
function xi(A) {
  if (!(A.flags & 1)) {
    const e = hr(A), t = PA[PA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(A.flags & 2) && e >= hr(t) ? PA.push(A) : PA.splice(If(e), 0, A), A.flags |= 1, sl();
  }
}
function sl() {
  Bs || (Bs = tl.then(il));
}
function _f(A) {
  if (!J(A))
    Ye && A.id === -1 ? Ye.splice(yt + 1, 0, A) : A.flags & 1 || (It.push(A), A.flags |= 1);
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
    for (Ye = e, yt = 0; yt < Ye.length; yt++) {
      const t = Ye[yt];
      t.flags & 4 && (t.flags &= -2), t.flags & 8 || t(), t.flags &= -2;
    }
    Ye = null, yt = 0;
  }
}
const hr = (A) => A.id == null ? A.flags & 2 ? -1 : 1 / 0 : A.id;
function il(A) {
  try {
    for (Ce = 0; Ce < PA.length; Ce++) {
      const e = PA[Ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), mr(
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
    Ce = -1, PA.length = 0, nl(), Bs = null, (PA.length || It.length) && il();
  }
}
let qA = null, ol = null;
function ds(A) {
  const e = qA;
  return qA = A, ol = A && A.type.__scopeId || null, e;
}
function Lf(A, e = qA, t) {
  if (!e || A._n)
    return A;
  const r = (...s) => {
    r._d && co(-1);
    const n = ds(e), i = gt.length;
    let o;
    try {
      o = A(...s);
    } finally {
      for (let a = gt.length; a > i; a--) _l();
      ds(n), r._d && co(1);
    }
    return o;
  };
  return r._n = !0, r._c = !0, r._d = !0, r;
}
function yA(A, e) {
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
    a && (Me(), ue(a, t, 8, [
      A.el,
      o,
      A,
      e
    ]), Re());
  }
}
function Sf(A, e) {
  if (MA) {
    let t = MA.provides;
    const r = MA.parent && MA.parent.provides;
    r === t && (t = MA.provides = Object.create(r)), t[A] = e;
  }
}
function ns(A, e, t = !1) {
  const r = Ku();
  if (r || _t) {
    let s = _t ? _t._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && A in s)
      return s[A];
    if (arguments.length > 1)
      return t && j(e) ? e.call(r && r.proxy) : e;
  }
}
const Kf = /* @__PURE__ */ Symbol.for("v-scx"), Tf = () => ns(Kf);
function nn(A, e, t) {
  return al(A, e, t);
}
function al(A, e, t = BA) {
  const { immediate: r, deep: s, flush: n, once: i } = t, o = vA({}, t), a = e && r || !e && n !== "post";
  let c;
  if (Qr) {
    if (n === "sync") {
      const C = Tf();
      c = C.__watcherHandles || (C.__watcherHandles = []);
    } else if (!a) {
      const C = () => {
      };
      return C.stop = Fe, C.resume = Fe, C.pause = Fe, C;
    }
  }
  const l = MA;
  o.call = (C, Q, U) => ue(C, l, Q, U);
  let f = !1;
  n === "post" ? o.scheduler = (C) => {
    XA(C, l && l.suspense);
  } : n !== "sync" && (f = !0, o.scheduler = (C, Q) => {
    Q ? C() : xi(C);
  }), o.augmentJob = (C) => {
    e && (C.flags |= 4), f && (C.flags |= 2, l && (C.id = l.uid, C.i = l));
  };
  const B = Ef(A, e, o);
  return Qr && (c ? c.push(B) : a && B()), B;
}
function Df(A, e, t) {
  const r = this.proxy, s = pA(A) ? A.includes(".") ? ll(r, A) : () => r[A] : A.bind(r, r);
  let n;
  j(e) ? n = e : (n = e.handler, t = e);
  const i = yr(this), o = al(s, n.bind(r), t);
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
function Mf(A, e) {
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
const gs = /* @__PURE__ */ new WeakMap();
function ir(A, e, t, r, s = !1) {
  if (J(A)) {
    A.forEach(
      (U, L) => ir(
        U,
        e && (J(e) ? e[L] : e),
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
  const n = r.shapeFlag & 4 ? Vs(r.component) : r.el, i = s ? null : n, { i: o, r: a } = A, c = e && e.r, l = o.refs === BA ? o.refs = {} : o.refs, f = o.setupState, B = /* @__PURE__ */ lA(f), C = f === BA ? _a : (U) => $i(l, U) ? !1 : sA(B, U), Q = (U, L) => !(L && $i(l, L));
  if (c != null && c !== a) {
    if (Ao(e), pA(c))
      l[c] = null, C(c) && (f[c] = null);
    else if (/* @__PURE__ */ JA(c)) {
      const U = e;
      Q(c, U.k) && (c.value = null), U.k && (l[U.k] = null);
    }
  }
  if (j(a))
    mr(a, o, 12, [i, l]);
  else {
    const U = pA(a), L = /* @__PURE__ */ JA(a);
    if (U || L) {
      const y = () => {
        if (A.f) {
          const b = U ? C(a) ? f[a] : l[a] : Q() || !A.k ? a.value : l[A.k];
          if (s)
            J(b) && pi(b, n);
          else if (J(b))
            b.includes(n) || b.push(n);
          else if (U)
            l[a] = [n], C(a) && (f[a] = l[a]);
          else {
            const g = [n];
            Q(a, A.k) && (a.value = g), A.k && (l[A.k] = g);
          }
        } else U ? (l[a] = i, C(a) && (f[a] = i)) : L && (Q(a, A.k) && (a.value = i), A.k && (l[A.k] = i));
      };
      if (i) {
        const b = () => {
          y(), gs.delete(A);
        };
        b.id = -1, gs.set(A, b), XA(b, t);
      } else
        Ao(A), y();
    }
  }
}
function Ao(A) {
  const e = gs.get(A);
  e && (e.flags |= 8, gs.delete(A));
}
Ts().requestIdleCallback;
Ts().cancelIdleCallback;
const or = (A) => !!A.type.__asyncLoader, Hi = (A) => A.type.__isKeepAlive;
function Rf(A, e) {
  ul(A, "a", e);
}
function Nf(A, e) {
  ul(A, "da", e);
}
function ul(A, e, t = MA) {
  const r = A.__wdc || (A.__wdc = () => {
    let s = t;
    for (; s; ) {
      if (s.isDeactivated)
        return;
      s = s.parent;
    }
    return A();
  });
  if (Ms(e, r, t), t) {
    let s = t.parent;
    for (; s && s.parent; )
      Hi(s.parent.vnode) && Vf(r, e, t, s), s = s.parent;
  }
}
function Vf(A, e, t, r) {
  const s = Ms(
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
function Ms(A, e, t = MA, r = !1) {
  if (t) {
    const s = t[A] || (t[A] = []), n = e.__weh || (e.__weh = (...i) => {
      Me();
      const o = yr(t), a = ue(e, t, A, i);
      return o(), Re(), a;
    });
    return r ? s.unshift(n) : s.push(n), n;
  }
}
const Pe = (A) => (e, t = MA) => {
  (!Qr || A === "sp") && Ms(A, (...r) => e(...r), t);
}, Gf = Pe("bm"), Pf = Pe("m"), Jf = Pe(
  "bu"
), Xf = Pe("u"), Wf = Pe(
  "bum"
), Bl = Pe("um"), Yf = Pe(
  "sp"
), jf = Pe("rtg"), Zf = Pe("rtc");
function zf(A, e = MA) {
  Ms("ec", A, e);
}
const qf = "components";
function $f(A, e) {
  return eu(qf, A, !0, e) || A;
}
const Au = /* @__PURE__ */ Symbol.for("v-ndc");
function eu(A, e, t = !0, r = !1) {
  const s = qA || MA;
  if (s) {
    const n = s.type;
    {
      const o = Mu(
        n,
        !1
      );
      if (o && (o === e || o === _A(e) || o === Ks(_A(e))))
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
  return A && (A[e] || A[_A(e)] || A[Ks(_A(e))]);
}
function rA(A, e, t, r) {
  let s;
  const n = t, i = J(A);
  if (i || pA(A)) {
    const o = i && /* @__PURE__ */ At(A);
    let a = !1, c = !1;
    o && (a = !/* @__PURE__ */ ce(A), c = /* @__PURE__ */ Ne(A), A = Ds(A)), s = new Array(A.length);
    for (let l = 0, f = A.length; l < f; l++)
      s[l] = e(
        a ? c ? rt(ye(A[l])) : ye(A[l]) : A[l],
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
      xi(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = rl.bind(A.proxy)),
    $watch: (A) => Df.bind(A)
  })
), an = (A, e) => A !== BA && !A.__isScriptSetup && sA(A, e), tu = {
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
        if (s !== BA && sA(s, e))
          return i[e] = 2, s[e];
        if (sA(n, e))
          return i[e] = 3, n[e];
        if (t !== BA && sA(t, e))
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
    if (t !== BA && sA(t, e))
      return i[e] = 4, t[e];
    if (
      // global properties
      f = a.config.globalProperties, sA(f, e)
    )
      return f[e];
  },
  set({ _: A }, e, t) {
    const { data: r, setupState: s, ctx: n } = A;
    return an(s, e) ? (s[e] = t, !0) : r !== BA && sA(r, e) ? (r[e] = t, !0) : sA(A.props, e) || e[0] === "$" && e.slice(1) in A ? !1 : (n[e] = t, !0);
  },
  has({
    _: { data: A, setupState: e, accessCache: t, ctx: r, appContext: s, props: n, type: i }
  }, o) {
    let a;
    return !!(t[o] || A !== BA && o[0] !== "$" && sA(A, o) || an(e, o) || sA(n, o) || sA(r, o) || sA(ar, o) || sA(s.config.globalProperties, o) || (a = i.__cssModules) && a[o]);
  },
  defineProperty(A, e, t) {
    return t.get != null ? A._.accessCache[e] = 0 : sA(t, "value") && this.set(A, e, t.value, null), Reflect.defineProperty(A, e, t);
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
    beforeUpdate: C,
    updated: Q,
    activated: U,
    deactivated: L,
    beforeDestroy: y,
    beforeUnmount: b,
    destroyed: g,
    unmounted: m,
    render: T,
    renderTracked: S,
    renderTriggered: X,
    errorCaptured: Z,
    serverPrefetch: G,
    // public API
    expose: oA,
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
      const AA = n[z], HA = j(AA) ? AA.bind(t, t) : j(AA.get) ? AA.get.bind(t, t) : Fe, YA = !j(AA) && j(AA.set) ? AA.set.bind(t) : Fe, RA = Nu({
        get: HA,
        set: YA
      });
      Object.defineProperty(r, z, {
        enumerable: !0,
        configurable: !0,
        get: () => RA.value,
        set: (mA) => RA.value = mA
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
  function nA(z, AA) {
    J(AA) ? AA.forEach((HA) => z(HA.bind(t))) : AA && z(AA.bind(t));
  }
  if (nA(Gf, f), nA(Pf, B), nA(Jf, C), nA(Xf, Q), nA(Rf, U), nA(Nf, L), nA(zf, Z), nA(Zf, S), nA(jf, X), nA(Wf, b), nA(Bl, m), nA(Yf, G), J(oA))
    if (oA.length) {
      const z = A.exposed || (A.exposed = {});
      oA.forEach((AA) => {
        Object.defineProperty(z, AA, {
          get: () => t[AA],
          set: (HA) => t[AA] = HA,
          enumerable: !0
        });
      });
    } else A.exposed || (A.exposed = {});
  T && A.render === Fe && (A.render = T), UA != null && (A.inheritAttrs = UA), EA && (A.components = EA), eA && (A.directives = eA), G && fl(A);
}
function su(A, e, t = Fe) {
  J(A) && (A = Gn(A));
  for (const r in A) {
    const s = A[r];
    let n;
    fA(s) ? "default" in s ? n = ns(
      s.from || r,
      s.default,
      !0
    ) : n = ns(s.from || r) : n = ns(s), /* @__PURE__ */ JA(n) ? Object.defineProperty(e, r, {
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
    (c) => hs(a, c, i, !0)
  ), hs(a, e, i)), fA(e) && n.set(e, a), a;
}
function hs(A, e, t, r = !1) {
  const { mixins: s, extends: n } = e;
  n && hs(A, n, t, !0), s && s.forEach(
    (i) => hs(A, i, t, !0)
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
          const C = c._ceVNode || be(r, s);
          return C.appContext = n, B === !0 ? B = "svg" : B === !1 && (B = void 0), A(C, l, B), a = !0, c._container = l, l.__vue_app__ = c, Vs(C.component);
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
function Rs(A, e) {
  return !A || !Is(e) ? !1 : (e = e.slice(2), e = e === "Once" ? e : e.replace(/Once$/, ""), sA(A, e[0].toLowerCase() + e.slice(1)) || sA(A, zA(e)) || sA(A, e));
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
    setupState: C,
    ctx: Q,
    inheritAttrs: U
  } = A, L = ds(A);
  let y, b;
  try {
    if (t.shapeFlag & 4) {
      const m = s || r, T = m;
      y = Ue(
        c.call(
          T,
          m,
          l,
          f,
          C,
          B,
          Q
        )
      ), b = o;
    } else {
      const m = e;
      y = Ue(
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
    gt.length = 0, ks(m, A, 1), y = be(Ve);
  }
  let g = y;
  if (b && U !== !1) {
    const m = Object.keys(b), { shapeFlag: T } = g;
    m.length && T & 7 && (n && m.some(_s) && (b = du(
      b,
      n
    )), g = Kt(g, b, !1, !0));
  }
  if (t.dirs && (g = Kt(g, null, !1, !0), g.dirs = g.dirs ? g.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const m = Os(g.type) && cl(g) || g;
    Ei(m, t.transition);
  }
  return y = g, ds(L), y;
}
const Bu = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || Is(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, du = (A, e) => {
  const t = {};
  for (const r in A)
    (!_s(r) || !(r.slice(9) in e)) && (t[r] = A[r]);
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
        if (wl(i, r, B) && !Rs(c, B))
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
    if (wl(e, A, n) && !Rs(t, n))
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
  } = A, o = /* @__PURE__ */ lA(s), [a] = A.propsOptions;
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
        if (Rs(A.emitsOptions, B))
          continue;
        const C = e[B];
        if (a)
          if (sA(n, B))
            C !== n[B] && (n[B] = C, c = !0);
          else {
            const Q = _A(B);
            s[Q] = Pn(
              a,
              o,
              Q,
              C,
              A,
              !1
            );
          }
        else
          C !== n[B] && (n[B] = C, c = !0);
      }
    }
  } else {
    Ul(A, e, s, n) && (c = !0);
    let l;
    for (const f in o)
      (!e || // for camelCase
      !sA(e, f) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = zA(f)) === f || !sA(e, l))) && (a ? t && // for camelCase
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
        (!e || !sA(e, f)) && (delete n[f], c = !0);
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
      s && sA(s, l = _A(a)) ? !n || !n.includes(l) ? t[l] = c : (o || (o = {}))[l] = c : Rs(A.emitsOptions, a) || (!(a in r) || c !== r[a]) && (r[a] = c, i = !0);
    }
  if (n) {
    const a = /* @__PURE__ */ lA(t), c = o || BA;
    for (let l = 0; l < n.length; l++) {
      const f = n[l];
      t[f] = Pn(
        s,
        a,
        f,
        c[f],
        A,
        !sA(c, f)
      );
    }
  }
  return i;
}
function Pn(A, e, t, r, s, n) {
  const i = A[t];
  if (i != null) {
    const o = sA(i, "default");
    if (o && r === void 0) {
      const a = i.default;
      if (i.type !== Function && !i.skipFactory && j(a)) {
        const { propsDefaults: c } = s;
        if (t in c)
          r = c[t];
        else {
          const l = yr(s);
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
      const [B, C] = Fl(f, e, !0);
      vA(i, B), C && o.push(...C);
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
        const B = n[l], C = i[f] = J(B) || j(B) ? { type: B } : vA({}, B), Q = C.type;
        let U = !1, L = !0;
        if (J(Q))
          for (let y = 0; y < Q.length; ++y) {
            const b = Q[y], g = j(b) && b.name;
            if (g === "Boolean") {
              U = !0;
              break;
            } else g === "String" && (L = !1);
          }
        else
          U = j(Q) && Q.name === "Boolean";
        C[
          0
          /* shouldCast */
        ] = U, C[
          1
          /* shouldCastTrue */
        ] = L, (U || sA(C, "default")) && o.push(f);
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
}, yl = (A, e, t) => {
  for (const r in e)
    (t || !Ii(r)) && (A[r] = e[r]);
}, vu = (A, e, t) => {
  const r = A.slots = Cl();
  if (A.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (yl(r, e, t), t && Ka(r, "_", s, !0)) : bl(e, r);
  } else e && ml(A, e);
}, Uu = (A, e, t) => {
  const { vnode: r, slots: s } = A;
  let n = !0, i = BA;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? t && o === 1 ? n = !1 : yl(s, e, t) : (n = !e.$stable, bl(e, s)), i = e;
  } else e && (ml(A, e), i = { default: 1 });
  if (n)
    for (const o in s)
      !Ii(o) && i[o] == null && delete s[o];
}, XA = xu;
function Fu(A) {
  return bu(A);
}
function bu(A, e) {
  const t = Ts();
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
    setScopeId: C = Fe,
    insertStaticContent: Q
  } = A, U = (d, h, F, I = null, x = null, H = null, k = void 0, D = null, K = !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !Nt(d, h) && (I = de(d), mA(d, x, H, !0), d = null), h.patchFlag === -2 && (K = !1, h.dynamicChildren = null), h.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (h.dynamicChildren === ft && (h.dynamicChildren = []), h.dynamicChildren.hasOnce = !0);
    const { type: E, ref: P, shapeFlag: M } = h;
    switch (E) {
      case Ns:
        L(d, h, F, I);
        break;
      case Ve:
        y(d, h, F, I);
        break;
      case cn:
        d == null && b(h, F, I, k);
        break;
      case V:
        EA(
          d,
          h,
          F,
          I,
          x,
          H,
          k,
          D,
          K
        );
        break;
      default:
        M & 1 ? T(
          d,
          h,
          F,
          I,
          x,
          H,
          k,
          D,
          K
        ) : M & 6 ? eA(
          d,
          h,
          F,
          I,
          x,
          H,
          k,
          D,
          K
        ) : (M & 64 || M & 128) && E.process(
          d,
          h,
          F,
          I,
          x,
          H,
          k,
          D,
          K,
          Ot
        );
    }
    P != null && x ? ir(P, d && d.ref, H, h || d, !h) : P == null && d && d.ref != null && ir(d.ref, null, H, d, !0);
  }, L = (d, h, F, I) => {
    if (d == null)
      r(
        h.el = o(h.children),
        F,
        I
      );
    else {
      const x = h.el = d.el;
      h.children !== d.children && c(x, h.children);
    }
  }, y = (d, h, F, I) => {
    d == null ? r(
      h.el = a(h.children || ""),
      F,
      I
    ) : h.el = d.el;
  }, b = (d, h, F, I) => {
    [d.el, d.anchor] = Q(
      d.children,
      h,
      F,
      I,
      d.el,
      d.anchor
    );
  }, g = ({ el: d, anchor: h }, F, I) => {
    let x;
    for (; d && d !== h; )
      x = B(d), r(d, F, I), d = x;
    r(h, F, I);
  }, m = ({ el: d, anchor: h }) => {
    let F;
    for (; d && d !== h; )
      F = B(d), s(d), d = F;
    s(h);
  }, T = (d, h, F, I, x, H, k, D, K) => {
    if (h.type === "svg" ? k = "svg" : h.type === "math" && (k = "mathml"), d == null)
      S(
        h,
        F,
        I,
        x,
        H,
        k,
        D,
        K
      );
    else {
      const E = d.el && d.el._isVueCE ? d.el : null;
      try {
        E && E._beginPatch(), G(
          d,
          h,
          x,
          H,
          k,
          D,
          K
        );
      } finally {
        E && E._endPatch();
      }
    }
  }, S = (d, h, F, I, x, H, k, D) => {
    let K, E;
    const { props: P, shapeFlag: M, transition: N, dirs: W } = d;
    if (K = d.el = i(
      d.type,
      H,
      P && P.is,
      P
    ), M & 8 ? l(K, d.children) : M & 16 && Z(
      d.children,
      K,
      null,
      I,
      x,
      ln(d, H),
      k,
      D
    ), W && nt(d, null, I, "created"), X(K, d, d.scopeId, k, I), P) {
      for (const uA in P)
        uA !== "value" && !rr(uA) && n(K, uA, null, P[uA], H, I);
      "value" in P && n(K, "value", null, P.value, H), (E = P.onVnodeBeforeMount) && we(E, I, d);
    }
    W && nt(d, null, I, "beforeMount");
    const tA = mu(x, N);
    tA && N.beforeEnter(K), r(K, h, F), ((E = P && P.onVnodeMounted) || tA || W) && XA(() => {
      try {
        E && we(E, I, d), tA && N.enter(K), W && nt(d, null, I, "mounted");
      } finally {
      }
    }, x);
  }, X = (d, h, F, I, x) => {
    if (F && C(d, F), I)
      for (let H = 0; H < I.length; H++)
        C(d, I[H]);
    if (x) {
      let H = x.subTree;
      if (h === H || Il(H.type) && (H.ssContent === h || H.ssFallback === h)) {
        const k = x.vnode;
        X(
          d,
          k,
          k.scopeId,
          k.slotScopeIds,
          x.parent
        );
      }
    }
  }, Z = (d, h, F, I, x, H, k, D, K = 0) => {
    for (let E = K; E < d.length; E++) {
      const P = d[E] = D ? Ke(d[E]) : Ue(d[E]);
      U(
        null,
        P,
        h,
        F,
        I,
        x,
        H,
        k,
        D
      );
    }
  }, G = (d, h, F, I, x, H, k) => {
    const D = h.el = d.el;
    let { patchFlag: K, dynamicChildren: E, dirs: P } = h;
    K |= d.patchFlag & 16;
    const M = d.props || BA, N = h.props || BA;
    let W;
    if (F && it(F, !1), (W = N.onVnodeBeforeUpdate) && we(W, F, h, d), P && nt(h, d, F, "beforeUpdate"), F && it(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    E && (!d.dynamicChildren || d.dynamicChildren.length !== E.length) && (K = 0, k = !1, E = null), (M.innerHTML && N.innerHTML == null || M.textContent && N.textContent == null) && l(D, ""), E ? oA(
      d.dynamicChildren,
      E,
      D,
      F,
      I,
      ln(h, x),
      H
    ) : k || AA(
      d,
      h,
      D,
      null,
      F,
      I,
      ln(h, x),
      H,
      !1
    ), K > 0) {
      if (K & 16)
        UA(D, M, N, F, x);
      else if (K & 2 && M.class !== N.class && n(D, "class", null, N.class, x), K & 4 && n(D, "style", M.style, N.style, x), K & 8) {
        const tA = h.dynamicProps;
        for (let uA = 0; uA < tA.length; uA++) {
          const aA = tA[uA], FA = M[aA], LA = N[aA];
          (LA !== FA || aA === "value") && n(D, aA, FA, LA, x, F);
        }
      }
      K & 1 && d.children !== h.children && l(D, h.children);
    } else !k && E == null && UA(D, M, N, F, x);
    ((W = N.onVnodeUpdated) || P) && XA(() => {
      W && we(W, F, h, d), P && nt(h, d, F, "updated");
    }, I);
  }, oA = (d, h, F, I, x, H, k) => {
    for (let D = 0; D < h.length; D++) {
      const K = d[D], E = h[D], P = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        K.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (K.type === V || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nt(K, E) || // - In the case of a component, it could contain anything.
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
        I,
        x,
        H,
        k,
        !0
      );
    }
  }, UA = (d, h, F, I, x) => {
    if (h !== F) {
      if (h !== BA)
        for (const H in h)
          !rr(H) && !(H in F) && n(
            d,
            H,
            h[H],
            null,
            x,
            I
          );
      for (const H in F) {
        if (rr(H)) continue;
        const k = F[H], D = h[H];
        k !== D && H !== "value" && n(d, H, D, k, x, I);
      }
      "value" in F && n(d, "value", h.value, F.value, x);
    }
  }, EA = (d, h, F, I, x, H, k, D, K) => {
    const E = h.el = d ? d.el : o(""), P = h.anchor = d ? d.anchor : o("");
    let { patchFlag: M, dynamicChildren: N, slotScopeIds: W } = h;
    W && (D = D ? D.concat(W) : W), d == null ? (r(E, F, I), r(P, F, I), Z(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      F,
      P,
      x,
      H,
      k,
      D,
      K
    )) : M > 0 && M & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === N.length ? (oA(
      d.dynamicChildren,
      N,
      F,
      x,
      H,
      k,
      D
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || x && h === x.subTree) && xl(
      d,
      h,
      !0
      /* shallow */
    )) : AA(
      d,
      h,
      F,
      P,
      x,
      H,
      k,
      D,
      K
    );
  }, eA = (d, h, F, I, x, H, k, D, K) => {
    h.slotScopeIds = D, d == null ? h.shapeFlag & 512 ? x.ctx.activate(
      h,
      F,
      I,
      k,
      K
    ) : wA(
      h,
      F,
      I,
      x,
      H,
      k,
      K
    ) : ie(d, h, K);
  }, wA = (d, h, F, I, x, H, k) => {
    const D = d.component = Su(
      d,
      I,
      x
    );
    if (Hi(d) && (D.ctx.renderer = Ot), Tu(D, !1, k), D.asyncDep) {
      if (x && x.registerDep(D, nA, k), !d.el) {
        const K = D.subTree = be(Ve);
        y(null, K, h, F), d.placeholder = K.el;
      }
    } else
      nA(
        D,
        d,
        h,
        F,
        x,
        H,
        k
      );
  }, ie = (d, h, F) => {
    const I = h.component = d.component;
    if (gu(d, h, F))
      if (I.asyncDep && !I.asyncResolved) {
        h.el = d.el, z(I, h, F);
        return;
      } else
        I.next = h, I.update();
    else
      h.el = d.el, I.vnode = h;
  }, nA = (d, h, F, I, x, H, k) => {
    const D = () => {
      if (d.isMounted) {
        let { next: M, bu: N, u: W, parent: tA, vnode: uA } = d;
        {
          const he = El(d);
          if (he) {
            M && (M.el = uA.el, z(d, M, k)), he.asyncDep.then(() => {
              XA(() => {
                d.isUnmounted || E();
              }, x);
            });
            return;
          }
        }
        let aA = M, FA;
        it(d, !1), M ? (M.el = uA.el, z(d, M, k)) : M = uA, N && ss(N), (FA = M.props && M.props.onVnodeBeforeUpdate) && we(FA, tA, M, uA), it(d, !0);
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
          H
        ), M.el = LA.el, aA === null && hu(d, LA.el), W && XA(W, x), (FA = M.props && M.props.onVnodeUpdated) && XA(
          () => we(FA, tA, M, uA),
          x
        );
      } else {
        let M;
        const { el: N, props: W } = h, { bm: tA, m: uA, parent: aA, root: FA, type: LA } = d, ge = or(h);
        it(d, !1), tA && ss(tA), !ge && (M = W && W.onVnodeBeforeMount) && we(M, aA, h), it(d, !0);
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
            H
          ), h.el = he.el;
        }
        if (uA && XA(uA, x), !ge && (M = W && W.onVnodeMounted)) {
          const he = h;
          XA(
            () => we(M, aA, he),
            x
          );
        }
        (h.shapeFlag & 256 || aA && or(aA.vnode) && aA.vnode.shapeFlag & 256) && d.a && XA(d.a, x), d.isMounted = !0, h = F = I = null;
      }
    };
    d.scope.on();
    const K = d.effect = new Ma(D);
    d.scope.off();
    const E = d.update = K.run.bind(K), P = d.job = K.runIfDirty.bind(K);
    P.i = d, P.id = d.uid, K.scheduler = () => xi(P), it(d, !0), E();
  }, z = (d, h, F) => {
    h.component = d;
    const I = d.vnode.props;
    d.vnode = h, d.next = null, wu(d, h.props, I, F), Uu(d, h.children, F), Me(), qi(d), Re();
  }, AA = (d, h, F, I, x, H, k, D, K = !1) => {
    const E = d && d.children, P = d ? d.shapeFlag : 0, M = h.children, { patchFlag: N, shapeFlag: W } = h;
    if (N > 0) {
      if (N & 128) {
        YA(
          E,
          M,
          F,
          I,
          x,
          H,
          k,
          D,
          K
        );
        return;
      } else if (N & 256) {
        HA(
          E,
          M,
          F,
          I,
          x,
          H,
          k,
          D,
          K
        );
        return;
      }
    }
    W & 8 ? (P & 16 && ee(E, x, H), M !== E && l(F, M)) : P & 16 ? W & 16 ? YA(
      E,
      M,
      F,
      I,
      x,
      H,
      k,
      D,
      K
    ) : ee(E, x, H, !0) : (P & 8 && l(F, ""), W & 16 && Z(
      M,
      F,
      I,
      x,
      H,
      k,
      D,
      K
    ));
  }, HA = (d, h, F, I, x, H, k, D, K) => {
    d = d || ft, h = h || ft;
    const E = d.length, P = h.length, M = Math.min(E, P);
    let N;
    for (N = 0; N < M; N++) {
      const W = h[N] = K ? Ke(h[N]) : Ue(h[N]);
      U(
        d[N],
        W,
        F,
        null,
        x,
        H,
        k,
        D,
        K
      );
    }
    E > P ? ee(
      d,
      x,
      H,
      !0,
      !1,
      M
    ) : Z(
      h,
      F,
      I,
      x,
      H,
      k,
      D,
      K,
      M
    );
  }, YA = (d, h, F, I, x, H, k, D, K) => {
    let E = 0;
    const P = h.length;
    let M = d.length - 1, N = P - 1;
    for (; E <= M && E <= N; ) {
      const W = d[E], tA = h[E] = K ? Ke(h[E]) : Ue(h[E]);
      if (Nt(W, tA))
        U(
          W,
          tA,
          F,
          null,
          x,
          H,
          k,
          D,
          K
        );
      else
        break;
      E++;
    }
    for (; E <= M && E <= N; ) {
      const W = d[M], tA = h[N] = K ? Ke(h[N]) : Ue(h[N]);
      if (Nt(W, tA))
        U(
          W,
          tA,
          F,
          null,
          x,
          H,
          k,
          D,
          K
        );
      else
        break;
      M--, N--;
    }
    if (E > M) {
      if (E <= N) {
        const W = N + 1, tA = W < P ? h[W].el : I;
        for (; E <= N; )
          U(
            null,
            h[E] = K ? Ke(h[E]) : Ue(h[E]),
            F,
            tA,
            x,
            H,
            k,
            D,
            K
          ), E++;
      }
    } else if (E > N)
      for (; E <= M; )
        mA(d[E], x, H, !0), E++;
    else {
      const W = E, tA = E, uA = /* @__PURE__ */ new Map();
      for (E = tA; E <= N; E++) {
        const jA = h[E] = K ? Ke(h[E]) : Ue(h[E]);
        jA.key != null && uA.set(jA.key, E);
      }
      let aA, FA = 0;
      const LA = N - tA + 1;
      let ge = !1, he = 0;
      const Mt = new Array(LA);
      for (E = 0; E < LA; E++) Mt[E] = 0;
      for (E = W; E <= M; E++) {
        const jA = d[E];
        if (FA >= LA) {
          mA(jA, x, H, !0);
          continue;
        }
        let pe;
        if (jA.key != null)
          pe = uA.get(jA.key);
        else
          for (aA = tA; aA <= N; aA++)
            if (Mt[aA - tA] === 0 && Nt(jA, h[aA])) {
              pe = aA;
              break;
            }
        pe === void 0 ? mA(jA, x, H, !0) : (Mt[pe - tA] = E + 1, pe >= he ? he = pe : ge = !0, U(
          jA,
          h[pe],
          F,
          null,
          x,
          H,
          k,
          D,
          K
        ), FA++);
      }
      const Vi = ge ? yu(Mt) : ft;
      for (aA = Vi.length - 1, E = LA - 1; E >= 0; E--) {
        const jA = tA + E, pe = h[jA], Gi = h[jA + 1], Pi = jA + 1 < P ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gi.el || Hl(Gi)
        ) : I;
        Mt[E] === 0 ? U(
          null,
          pe,
          F,
          Pi,
          x,
          H,
          k,
          D,
          K
        ) : ge && (aA < 0 || E !== Vi[aA] ? RA(pe, F, Pi, 2) : aA--);
      }
    }
  }, RA = (d, h, F, I, x = null) => {
    const { el: H, type: k, transition: D, children: K, shapeFlag: E } = d;
    if (E & 6) {
      RA(d.component.subTree, h, F, I);
      return;
    }
    if (E & 128) {
      d.suspense.move(h, F, I);
      return;
    }
    if (E & 64) {
      k.move(d, h, F, Ot);
      return;
    }
    if (k === V) {
      r(H, h, F);
      for (let M = 0; M < K.length; M++)
        RA(K[M], h, F, I);
      r(d.anchor, h, F);
      return;
    }
    if (k === cn) {
      g(d, h, F);
      return;
    }
    if (I !== 2 && E & 1 && D)
      if (I === 0)
        D.persisted && !H[on] ? r(H, h, F) : (D.beforeEnter(H), r(H, h, F), XA(() => D.enter(H), x));
      else {
        const { leave: M, delayLeave: N, afterLeave: W } = D, tA = () => {
          d.ctx.isUnmounted ? s(H) : r(H, h, F);
        }, uA = () => {
          const aA = H._isLeaving || !!H[on];
          H._isLeaving && H[on](
            !0
            /* cancelled */
          ), D.persisted && !aA ? tA() : M(H, () => {
            tA(), W && W();
          });
        };
        N ? N(H, tA, uA) : uA();
      }
    else
      r(H, h, F);
  }, mA = (d, h, F, I = !1, x = !1) => {
    const {
      type: H,
      props: k,
      ref: D,
      children: K,
      dynamicChildren: E,
      shapeFlag: P,
      patchFlag: M,
      dirs: N,
      cacheIndex: W,
      memo: tA
    } = d;
    if ((M === -2 || E && E.hasOnce) && (x = !1), D != null && (Me(), ir(D, null, F, d, !0), Re()), W != null && (!d.ctx || d.ctx === h) && (h.renderCache[W] = void 0), P & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const uA = P & 1 && N, aA = !or(d);
    let FA;
    if (aA && (FA = k && k.onVnodeBeforeUnmount) && we(FA, h, d), P & 6)
      oe(d.component, F, I);
    else {
      if (P & 128) {
        d.suspense.unmount(F, I);
        return;
      }
      uA && nt(d, null, h, "beforeUnmount"), P & 64 ? d.type.remove(
        d,
        h,
        F,
        Ot,
        I
      ) : E && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !E.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (H !== V || M > 0 && M & 64) ? ee(
        E,
        h,
        F,
        !1,
        !0
      ) : (H === V && M & 384 || !x && P & 16) && ee(K, h, F), I && Ae(d);
    }
    const LA = tA != null && W == null;
    (aA && (FA = k && k.onVnodeUnmounted) || uA || LA) && XA(() => {
      FA && we(FA, h, d), uA && nt(d, null, h, "unmounted"), LA && (d.el = null);
    }, F);
  }, Ae = (d) => {
    const { type: h, el: F, anchor: I, transition: x } = d;
    if (h === V) {
      He(F, I);
      return;
    }
    if (h === cn) {
      m(d), x && !x.persisted && x.afterLeave && x.afterLeave();
      return;
    }
    const H = () => {
      s(F), x && !x.persisted && x.afterLeave && x.afterLeave();
    };
    if (d.shapeFlag & 1 && x && !x.persisted) {
      const { leave: k, delayLeave: D } = x, K = () => k(F, H);
      D ? D(d.el, H, K) : K();
    } else
      H();
  }, He = (d, h) => {
    let F;
    for (; d !== h; )
      F = B(d), s(d), d = F;
    s(h);
  }, oe = (d, h, F) => {
    const { bum: I, scope: x, job: H, subTree: k, um: D, m: K, a: E } = d;
    lo(K), lo(E), I && ss(I), x.stop(), H ? (H.flags |= 8, mA(k, d, h, F)) : d.vnode.el && k && (k.transition = d.vnode.transition, mA(k, d, h, F)), D && XA(D, h), XA(() => {
      d.isUnmounted = !0;
    }, h);
  }, ee = (d, h, F, I = !1, x = !1, H = 0) => {
    for (let k = H; k < d.length; k++)
      mA(d[k], h, F, I, x);
  }, de = (d) => {
    if (d.shapeFlag & 6)
      return de(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const h = B(d.anchor || d.el), F = h && h[kf];
    return F ? B(F) : h;
  };
  let $s = !1;
  const Ni = (d, h, F) => {
    let I;
    d == null ? h._vnode && (mA(h._vnode, null, null, !0), I = h._vnode.component) : U(
      h._vnode || null,
      d,
      h,
      null,
      null,
      null,
      F
    ), h._vnode = d, $s || ($s = !0, qi(I), nl(), $s = !1);
  }, Ot = {
    p: U,
    um: mA,
    m: RA,
    r: Ae,
    mt: wA,
    mc: Z,
    pc: AA,
    pbc: oA,
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
function xl(A, e, t = !1) {
  const r = A.children, s = e.children;
  if (J(r) && J(s))
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      let o = s[n];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[n] = Ke(s[n]), o.el = i.el), !t && o.patchFlag !== -2 && xl(i, o)), o.type === Ns && (o.patchFlag === -1 && (o = s[n] = Ke(o)), o.el = i.el), o.type === Ve && !o.el && (o.el = i.el);
    }
}
function yu(A) {
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
function xu(A, e) {
  e && e.pendingBranch ? J(A) ? e.effects.push(...A) : e.effects.push(A) : _f(A);
}
const V = /* @__PURE__ */ Symbol.for("v-fgt"), Ns = /* @__PURE__ */ Symbol.for("v-txt"), Ve = /* @__PURE__ */ Symbol.for("v-cmt"), cn = /* @__PURE__ */ Symbol.for("v-stc"), gt = [];
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
const Tl = ({ key: A }) => A ?? null, is = ({
  ref: A,
  ref_key: e,
  ref_for: t
}) => (typeof A == "number" && (A = "" + A), A != null ? pA(A) || /* @__PURE__ */ JA(A) || j(A) ? { i: qA, r: A, k: e, f: !!t } : A : null);
function u(A, e = null, t = null, r = 0, s = null, n = A === V ? 0 : 1, i = !1, o = !1) {
  const a = {
    __v_isVNode: !0,
    __v_skip: !0,
    type: A,
    props: e,
    key: e && Tl(e),
    ref: e && is(e),
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
  return o ? (ps(a, t), n & 128 && A.normalize(a)) : t && (a.shapeFlag |= pA(t) ? 8 : 16), pr > 0 && // avoid a block node from tracking itself
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
    return t && ps(o, t), pr > 0 && !n && $A && (o.shapeFlag & 6 ? $A[$A.indexOf(A)] = o : $A.push(o)), o.patchFlag = -2, o;
  }
  if (Ru(A) && (A = A.__vccOpts), e) {
    e = Hu(e);
    let { class: o, style: a } = e;
    o && !pA(o) && (e.class = q(o)), fA(a) && (/* @__PURE__ */ yi(a) && !J(a) && (a = vA({}, a)), e.style = br(a));
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
  return A ? /* @__PURE__ */ yi(A) || vl(A) ? vA({}, A) : A : null;
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
      t && n ? J(n) ? n.concat(is(e)) : [n, is(e)] : is(e)
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
    patchFlag: e && A.type !== V ? i === -1 ? 16 : i | 16 : i,
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
    V,
    null,
    // #3666, avoid reference pollution when reusing vnode
    A.slice()
  ) : Kl(A) ? Ke(A) : be(Ns, null, String(A));
}
function Ke(A) {
  return A.el === null && A.patchFlag !== -1 || A.memo ? A : Kt(A);
}
function ps(A, e) {
  let t = 0;
  const { shapeFlag: r } = A;
  if (e == null)
    e = null;
  else if (J(e))
    t = 16;
  else if (typeof e == "object")
    if (r & 65) {
      const s = e.default;
      s && (s._c && (s._d = !1), ps(A, s()), s._c && (s._d = !0));
      return;
    } else {
      t = 32;
      const s = e._;
      !s && !vl(e) ? e._ctx = qA : s === 3 && qA && (qA.slots._ === 1 ? e._ = 1 : (e._ = 2, A.patchFlag |= 1024));
    }
  else if (j(e)) {
    if (r & 65) {
      ps(A, { default: e });
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
        e.class !== r.class && (e.class = q([e.class, r.class]));
      else if (s === "style")
        e.style = br([e.style, r.style]);
      else if (Is(s)) {
        const n = e[s], i = r[s];
        i && n !== i && !(J(n) && n.includes(i)) ? e[s] = n ? [].concat(n, i) : i : i == null && n == null && // mergeProps({ 'onUpdate:modelValue': undefined }) should not retain
        // the model listener.
        !_s(s) && (e[s] = i);
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
let MA = null;
const Ku = () => MA || qA;
let ws, wr;
{
  const A = Ts(), e = (t, r) => {
    let s;
    return (s = A[t]) || (s = A[t] = []), s.push(r), (n) => {
      s.length > 1 ? s.forEach((i) => i(n)) : s[0](n);
    };
  };
  ws = e(
    "__VUE_INSTANCE_SETTERS__",
    (t) => MA = t
  ), wr = e(
    "__VUE_SSR_SETTERS__",
    (t) => Qr = t
  );
}
const yr = (A) => {
  const e = MA;
  return ws(A), A.scope.on(), () => {
    A.scope.off(), ws(e);
  };
}, fo = () => {
  MA && MA.scope.off(), ws(null);
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
    Me();
    const s = A.setupContext = r.length > 1 ? Ou(A) : null, n = yr(A), i = mr(
      r,
      A,
      0,
      [
        A.props,
        s
      ]
    ), o = La(i);
    if (Re(), n(), (o || A.sp) && !or(A) && fl(A), o) {
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
    const s = yr(A);
    Me();
    try {
      ru(A);
    } finally {
      Re(), s();
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
function Mu(A, e = !0) {
  return j(A) ? A.displayName || A.name : A.name || e && A.__name;
}
function Ru(A) {
  return j(A) && "__vccOpts" in A;
}
const Nu = (A, e) => /* @__PURE__ */ yf(A, e, Qr), Vu = "3.5.43";
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
const Sr = /\s*!important$/;
function Yt(A, e, t) {
  if (J(t))
    t.forEach((r) => Yt(A, e, r));
  else if (t == null && (t = ""), e.startsWith("--"))
    Sr.test(t) ? A.setProperty(e, t.replace(Sr, ""), "important") : A.setProperty(e, t);
  else {
    const r = qu(A, e);
    Sr.test(t) ? A.setProperty(
      zA(r),
      t.replace(Sr, ""),
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
  r = Ks(r);
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
  e === "class" ? Wu(A, r, i) : e === "style" ? zu(A, t, r) : Is(e) ? _s(e) || eB(A, e, t, r, n) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : lB(A, e, r, i)) ? (Co(A, e, r), !A.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Qo(A, e, r, i, n, e !== "value")) : /* #11081 force set props for possible async custom element */ A._isVueCE && // #12408 check if it's declared prop or it's async custom element
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
  let r = /* @__PURE__ */ Mf(A, e);
  Ls(r) && (r = vA({}, r, e));
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
        sA(this, r) || Object.defineProperty(this, r, {
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
            Ls(i[0]) ? vA({ detail: i }, i[0]) : { detail: i }
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
const Qs = (A) => {
  const e = A.props["onUpdate:modelValue"] || !1;
  return J(e) ? (t) => ss(e, t) : e;
};
function uB(A) {
  A.target.composing = !0;
}
function mo(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const ut = /* @__PURE__ */ Symbol("_assign"), Kr = /* @__PURE__ */ Symbol("_initialValue");
function Bn(A, e, t) {
  return e && (A = A.trim()), t && (A = Qi(A)), A;
}
const os = {
  created(A, { modifiers: { lazy: e, trim: t, number: r } }, s) {
    A.parentNode && (A.type === "text" ? A[Kr] = A.defaultValue.replace(/[\r\n]/g, "") : A.type === "textarea" && (A[Kr] = A.defaultValue.replace(/\r\n?/g, `
`))), A[ut] = Qs(s);
    const n = r || s.props && s.props.type === "number";
    lt(A, e ? "change" : "input", (i) => {
      i.target.composing || A[ut](Bn(A.value, t, n));
    }), (t || n) && lt(A, "change", () => {
      A.value = Bn(A.value, t, n);
    }), e || (lt(A, "compositionstart", uB), lt(A, "compositionend", mo), lt(A, "change", mo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e, modifiers: { trim: t, number: r } }) {
    const s = e ?? "", n = A[Kr];
    delete A[Kr], n !== void 0 && (A.type === "text" || A.type === "textarea") && A.value !== n ? A[ut](Bn(A.value, t, r)) : A.value = s;
  },
  beforeUpdate(A, { value: e, oldValue: t, modifiers: { lazy: r, trim: s, number: n } }, i) {
    if (A[ut] = Qs(i), A.composing) return;
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
    A[ut] = Qs(t), lt(A, "change", () => {
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
        i(Ml(A, n));
    });
  },
  // set initial checked on mount to wait for true-value/false-value
  mounted: yo,
  beforeUpdate(A, e, t) {
    A[ut] = Qs(t), yo(A, e, t);
  }
};
function yo(A, { value: e, oldValue: t }, r) {
  A._modelValue = e;
  let s;
  if (J(e))
    s = Da(e, r.props.value) > -1;
  else if (St(e))
    s = e.has(r.props.value);
  else {
    if (e === t) return;
    s = Dt(e, Ml(A, !0));
  }
  A.checked !== s && (A.checked = s);
}
function BB(A) {
  return "_value" in A ? A._value : A.value;
}
function Ml(A, e) {
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
}, xo = (A, e) => {
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
function Rl() {
  return Eo || (Eo = Fu(pB));
}
const wB = (...A) => {
  Rl().render(...A);
}, Ho = (...A) => {
  const e = Rl().createApp(...A), { mount: t } = e;
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
}, bB = { class: "bse-overlay" }, mB = { class: "bse-toolbar" }, yB = ["onClick"], xB = ["title", "onClick"], EB = ["disabled"], HB = ["disabled"], IB = { class: "bse-stage" };
function _B(A, e, t, r, s, n) {
  return p(), w("div", bB, [
    u("div", mB, [
      (p(!0), w(V, null, rA(s.tools, (i) => (p(), w("button", {
        key: i.id,
        class: q(["bse-btn", { active: s.tool === i.id }]),
        onClick: (o) => s.tool = i.id
      }, v(i.label), 11, yB))), 128)),
      e[8] || (e[8] = u("span", { class: "bse-sep" }, null, -1)),
      (p(!0), w(V, null, rA(s.colors, (i) => (p(), w("button", {
        key: i,
        class: q(["bse-color", { active: s.color === i }]),
        style: br({ background: i }),
        title: i,
        onClick: (o) => s.color = i
      }, null, 14, xB))), 128)),
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
}, OB = { class: "bug-report-modal" }, MB = { class: "bug-report-header" }, RB = { class: "bug-report-title" }, NB = {
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
}, pd = { class: "bug-report-label" }, wd = { class: "log-filter-group" }, Qd = { class: "log-filter-chip error" }, Cd = { class: "log-filter-chip warn" }, vd = { class: "log-filter-chip log" }, Ud = { class: "log-list" }, Fd = { class: "log-time" }, bd = { class: "log-badge-lv" }, md = { class: "log-msg" }, yd = {
  key: 0,
  class: "log-empty"
}, xd = {
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
}, kd = { class: "log-time" }, Od = { class: "log-badge-lv" }, Md = { class: "log-logger" }, Rd = { class: "log-msg" }, Nd = {
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
}, mg = { class: "env-row" }, yg = {
  key: 0,
  class: "env-row"
}, xg = {
  key: 1,
  class: "env-row"
}, Eg = { class: "env-group" }, Hg = { class: "env-row" }, Ig = { class: "env-row" }, _g = { class: "env-row" }, Lg = { class: "env-row" }, Sg = { class: "env-row" }, Kg = { class: "env-group" }, Tg = { class: "env-row" }, Dg = { class: "env-row" }, kg = { class: "env-row" }, Og = { class: "env-list" }, Mg = { key: 0 }, Rg = { class: "env-row" }, Ng = { class: "env-list" }, Vg = { key: 0 }, Gg = {
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
  var o, a, c, l, f, B, C, Q, U, L, y, b;
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
      onMousedown: e[25] || (e[25] = (g) => s.backdropPressed = g.target === g.currentTarget),
      onClick: e[26] || (e[26] = jt((g) => s.backdropPressed && n.close(), ["self"]))
    }, [
      s.isEditingShot && s.screenshotUrl ? (p(), Sl(i, {
        key: 0,
        src: s.screenshotUrl,
        onApply: n.onShotEdited,
        onCancel: e[0] || (e[0] = (g) => s.isEditingShot = !1)
      }, null, 8, ["src", "onApply"])) : _("", !0),
      u("div", OB, [
        u("div", MB, [
          u("span", RB, [
            e[28] || (e[28] = Y("버그 신고 ", -1)),
            n.hotkey ? (p(), w("span", NB, v(n.hotkey), 1)) : _("", !0)
          ]),
          n.appProjects.length > 1 ? (p(), w("span", VB, [
            (p(!0), w(V, null, rA(n.appProjects, (g) => (p(), w("button", {
              key: g.key,
              class: q({ "bug-target__on": s.project === g.key }),
              onClick: (m) => n.setProject(g.key)
            }, v(g.label), 11, GB))), 128))
          ])) : _("", !0),
          (a = (o = t.kit) == null ? void 0 : o.api) != null && a.enabled ? (p(), w("label", PB, [
            yA(u("input", {
              type: "checkbox",
              "onUpdate:modelValue": e[1] || (e[1] = (g) => s.tool = g)
            }, null, 512), [
              [GA, s.tool]
            ]),
            e[29] || (e[29] = Y(" 버그 신고 도구 문제 ", -1))
          ])) : _("", !0),
          u("button", {
            class: "bug-report-close",
            onClick: e[2] || (e[2] = (...g) => n.close && n.close(...g))
          }, "✕")
        ]),
        u("div", JB, [
          (p(!0), w(V, null, rA(n.tabs, (g) => (p(), w("button", {
            key: g.id,
            class: q(["bug-tab", { active: s.activeTab === g.id }]),
            onClick: (m) => s.activeTab = g.id
          }, [
            Y(v(g.label) + " ", 1),
            g.badge ? (p(), w("span", WB, v(g.badge), 1)) : _("", !0)
          ], 10, XB))), 128))
        ]),
        u("div", YB, [
          s.activeTab === "basic" ? (p(), w(V, { key: 0 }, [
            u("div", jB, [
              u("div", ZB, [
                e[30] || (e[30] = Y(" 화면 캡처 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[3] || (e[3] = (...g) => n.recapture && n.recapture(...g)),
                  disabled: s.isCapturing
                }, v(s.isCapturing ? "캡처 중..." : "다시 찍기"), 9, zB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[4] || (e[4] = (g) => s.isEditingShot = !0),
                  disabled: !s.screenshotUrl
                }, "그리기·표시", 8, qB),
                u("button", {
                  class: "bug-btn-sm",
                  onClick: e[5] || (e[5] = (g) => A.$refs.shotFile.click())
                }, "이미지 불러오기"),
                u("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: e[6] || (e[6] = (...g) => n.onShotFile && n.onShotFile(...g))
                }, null, 544)
              ]),
              u("div", {
                class: q(["screenshot-wrap", { "screenshot-wrap--editable": s.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: e[7] || (e[7] = (g) => s.screenshotUrl && (s.isEditingShot = !0))
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
                (p(!0), w(V, null, rA(s.severityOptions, (g) => (p(), w("button", {
                  key: g.value,
                  class: q(["severity-btn", `severity-btn--${g.value.toLowerCase()}`, { active: s.severity === g.value }]),
                  onClick: (m) => s.severity = g.value
                }, v(g.label), 11, rd))), 128))
              ])
            ]),
            u("div", sd, [
              e[33] || (e[33] = u("div", { class: "bug-report-label" }, "문제 상황", -1)),
              yA(u("textarea", {
                "onUpdate:modelValue": e[8] || (e[8] = (g) => s.problemDesc = g),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [os, s.problemDesc]
              ])
            ]),
            u("div", nd, [
              e[34] || (e[34] = u("div", { class: "bug-report-label" }, "재현 단계", -1)),
              yA(u("textarea", {
                "onUpdate:modelValue": e[9] || (e[9] = (g) => s.reproSteps = g),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [os, s.reproSteps]
              ])
            ]),
            u("div", id, [
              e[35] || (e[35] = u("div", { class: "bug-report-label" }, "기대 결과", -1)),
              yA(u("textarea", {
                "onUpdate:modelValue": e[10] || (e[10] = (g) => s.expectedResult = g),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [os, s.expectedResult]
              ])
            ]),
            u("div", od, [
              e[39] || (e[39] = u("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              u("div", ad, [
                e[36] || (e[36] = u("span", { class: "chip" }, "📸 스크린샷", -1)),
                e[37] || (e[37] = u("span", { class: "chip" }, "🌐 환경 정보", -1)),
                u("span", ld, "📡 네트워크 요청 (" + v(s.networkLogs.length) + "건)", 1),
                u("span", cd, "📋 프론트 로그 (" + v(s.allLogs.length) + "건)", 1),
                u("span", {
                  class: q(["chip", s.backendLogsState === "ok" ? "chip--ok" : s.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + v(s.backendLogsState === "ok" ? s.backendLogs.length + "건" : s.backendLogsState === "loading" ? "로딩 중" : s.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : s.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (c = s.context) != null && c.camera ? (p(), w("span", fd, "📍 카메라 위치")) : _("", !0),
                e[38] || (e[38] = u("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (l = s.context) != null && l.user ? (p(), w("span", ud, "👤 " + v(s.context.user.username), 1)) : _("", !0)
              ])
            ])
          ], 64)) : _("", !0),
          s.activeTab === "logs" ? (p(), w(V, { key: 1 }, [
            u("div", Bd, [
              u("button", {
                class: q(["log-src-btn", { active: s.logSource === "front" }]),
                onClick: e[11] || (e[11] = (g) => s.logSource = "front")
              }, " 프론트엔드 ", 2),
              u("button", {
                class: q(["log-src-btn", { active: s.logSource === "backend" }]),
                onClick: e[12] || (e[12] = (g) => s.logSource = "backend")
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
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[13] || (e[13] = (g) => s.showError = g)
                    }, null, 512), [
                      [GA, s.showError]
                    ]),
                    Y(" 오류 (" + v(n.countByLevel("error")) + ")", 1)
                  ]),
                  u("label", Cd, [
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[14] || (e[14] = (g) => s.showWarn = g)
                    }, null, 512), [
                      [GA, s.showWarn]
                    ]),
                    Y(" 경고 (" + v(n.countByLevel("warn")) + ")", 1)
                  ]),
                  u("label", vd, [
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[15] || (e[15] = (g) => s.showLog = g)
                    }, null, 512), [
                      [GA, s.showLog]
                    ]),
                    Y(" 로그 (" + v(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              u("div", Ud, [
                (p(!0), w(V, null, rA(n.filteredLogs, (g, m) => (p(), w("div", {
                  key: m,
                  class: q(["log-item", `log-item--${g.level}`])
                }, [
                  u("span", Fd, v(g.time.slice(11)), 1),
                  u("span", bd, v(g.level), 1),
                  u("span", md, v(g.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), w("div", yd, "표시할 로그가 없습니다")) : _("", !0)
              ])
            ])) : _("", !0),
            s.logSource === "backend" ? (p(), w("div", xd, [
              u("div", Ed, [
                e[42] || (e[42] = Y(" 백엔드 서버 로그 ", -1)),
                u("div", Hd, [
                  u("label", Id, [
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[16] || (e[16] = (g) => s.showBEError = g)
                    }, null, 512), [
                      [GA, s.showBEError]
                    ]),
                    Y(" ERROR (" + v(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  u("label", _d, [
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[17] || (e[17] = (g) => s.showBEWarn = g)
                    }, null, 512), [
                      [GA, s.showBEWarn]
                    ]),
                    Y(" WARN (" + v(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  u("label", Ld, [
                    yA(u("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[18] || (e[18] = (g) => s.showBEInfo = g)
                    }, null, 512), [
                      [GA, s.showBEInfo]
                    ]),
                    Y(" INFO (" + v(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              s.backendLogsState === "loading" ? (p(), w("div", Sd, "백엔드 로그 가져오는 중...")) : s.backendLogsState === "skipped" ? (p(), w("div", Kd, [
                e[43] || (e[43] = Y(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                u("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: e[19] || (e[19] = (...g) => n.fetchBackendLogs && n.fetchBackendLogs(...g))
                }, "그래도 가져오기")
              ])) : s.backendLogsState === "error" ? (p(), w("div", Td, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), w("div", Dd, [
                (p(!0), w(V, null, rA(n.filteredBackendLogs, (g, m) => (p(), w("div", {
                  key: m,
                  class: q(["log-item", `log-item--${g.level.toLowerCase()}`])
                }, [
                  u("span", kd, v(g.time.slice(11)), 1),
                  u("span", Od, v(g.level), 1),
                  u("span", Md, v(g.logger), 1),
                  u("span", Rd, v(g.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), w("div", Nd, "표시할 로그가 없습니다")) : _("", !0)
              ]))
            ])) : _("", !0)
          ], 64)) : _("", !0),
          s.activeTab === "network" ? (p(), w("div", Vd, [
            e[51] || (e[51] = u("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            u("div", Gd, [
              (p(!0), w(V, null, rA(n.reversedNetwork, (g, m) => {
                var T;
                return p(), w(V, { key: m }, [
                  u("div", {
                    class: q(["net-item", g.error || g.status >= 400 ? "net-item--error" : ""]),
                    onClick: (S) => n.toggleNetDetail(m)
                  }, [
                    u("span", {
                      class: q(["net-status", n.statusClass(g.status)])
                    }, v(g.status), 3),
                    u("span", Jd, v(g.method), 1),
                    u("span", Xd, v(g.url), 1),
                    u("span", Wd, v(g.duration) + "ms", 1),
                    u("span", Yd, v((T = g.time) == null ? void 0 : T.slice(11, 19)), 1)
                  ], 10, Pd),
                  s.expandedNet === m ? (p(), w("div", jd, [
                    g.params ? (p(), w("div", Zd, [
                      e[44] || (e[44] = u("b", null, "Params:", -1)),
                      e[45] || (e[45] = Y()),
                      u("code", null, v(g.params), 1)
                    ])) : _("", !0),
                    g.requestBody ? (p(), w("div", zd, [
                      e[46] || (e[46] = u("b", null, "Request:", -1)),
                      e[47] || (e[47] = Y()),
                      u("code", null, v(g.requestBody), 1)
                    ])) : _("", !0),
                    g.responseBody ? (p(), w("div", qd, [
                      e[48] || (e[48] = u("b", null, "Response:", -1)),
                      e[49] || (e[49] = Y()),
                      u("code", null, v(g.responseBody), 1)
                    ])) : _("", !0),
                    g.error ? (p(), w("div", $d, [
                      e[50] || (e[50] = u("b", null, "Error:", -1)),
                      Y(" " + v(g.error), 1)
                    ])) : _("", !0)
                  ])) : _("", !0)
                ], 64);
              }), 128)),
              s.networkLogs.length === 0 ? (p(), w("div", Ag, "기록된 요청이 없습니다")) : _("", !0)
            ])
          ])) : _("", !0),
          s.activeTab === "state" ? (p(), w(V, { key: 3 }, [
            u("div", eg, [
              e[52] || (e[52] = u("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              u("div", tg, [
                (p(!0), w(V, null, rA(((f = s.context) == null ? void 0 : f.mutationLog) || [], (g, m) => (p(), w("div", {
                  key: m,
                  class: "log-item"
                }, [
                  u("span", rg, v(g.time), 1),
                  u("span", sg, v(g.type), 1),
                  g.payload !== null ? (p(), w("span", ng, v(n.formatPayload(g.payload)), 1)) : _("", !0)
                ]))), 128)),
                (C = (B = s.context) == null ? void 0 : B.mutationLog) != null && C.length ? _("", !0) : (p(), w("div", ig, "기록된 mutation이 없습니다"))
              ])
            ]),
            u("div", og, [
              e[54] || (e[54] = u("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              u("div", ag, [
                (p(!0), w(V, null, rA(((Q = s.context) == null ? void 0 : Q.routeHistory) || [], (g, m) => (p(), w("div", {
                  key: m,
                  class: "route-item"
                }, [
                  u("span", lg, v(g.time), 1),
                  u("span", cg, v(g.from), 1),
                  e[53] || (e[53] = u("span", { class: "route-arrow" }, "→", -1)),
                  u("span", fg, v(g.to), 1)
                ]))), 128)),
                (L = (U = s.context) == null ? void 0 : U.routeHistory) != null && L.length ? _("", !0) : (p(), w("div", ug, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (y = s.context) != null && y.storage && Object.keys(s.context.storage).length ? (p(), w("div", Bg, [
              e[55] || (e[55] = u("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              u("div", dg, [
                (p(!0), w(V, null, rA(s.context.storage, (g, m) => (p(), w("div", {
                  key: m,
                  class: "env-row"
                }, [
                  u("span", null, v(m), 1),
                  u("span", null, v(g), 1)
                ]))), 128))
              ])
            ])) : _("", !0),
            (b = s.context) != null && b.cesiumPerf ? (p(), w("div", gg, [
              e[61] || (e[61] = u("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              u("div", hg, [
                u("div", pg, [
                  e[56] || (e[56] = u("span", null, "Primitives", -1)),
                  u("span", null, v(s.context.cesiumPerf.primitives), 1)
                ]),
                u("div", wg, [
                  e[57] || (e[57] = u("span", null, "Tiles Loaded", -1)),
                  u("span", null, v(s.context.cesiumPerf.tilesLoaded), 1)
                ]),
                u("div", Qg, [
                  e[58] || (e[58] = u("span", null, "Max Screen Space Error", -1)),
                  u("span", null, v(s.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                u("div", Cg, [
                  e[59] || (e[59] = u("span", null, "Shadows", -1)),
                  u("span", null, v(s.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                u("div", vg, [
                  e[60] || (e[60] = u("span", null, "MSAA Samples", -1)),
                  u("span", null, v(s.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : _("", !0)
          ], 64)) : _("", !0),
          s.activeTab === "env" ? (p(), w(V, { key: 4 }, [
            s.context ? (p(), w("div", Fg, [
              s.context.user ? (p(), w("div", bg, [
                e[66] || (e[66] = u("div", { class: "env-group-title" }, "사용자", -1)),
                u("div", mg, [
                  e[63] || (e[63] = u("span", null, "아이디", -1)),
                  u("span", null, v(s.context.user.username), 1)
                ]),
                s.context.user.roles.length ? (p(), w("div", yg, [
                  e[64] || (e[64] = u("span", null, "권한", -1)),
                  u("span", null, v(s.context.user.roles.join(", ")), 1)
                ])) : _("", !0),
                s.context.user.exp ? (p(), w("div", xg, [
                  e[65] || (e[65] = u("span", null, "토큰 만료", -1)),
                  u("span", null, v(s.context.user.exp), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", Eg, [
                e[72] || (e[72] = u("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                u("div", Hg, [
                  e[67] || (e[67] = u("span", null, "상단 탭", -1)),
                  u("span", null, v(s.context.menus.headerName), 1)
                ]),
                u("div", Ig, [
                  e[68] || (e[68] = u("span", null, "하위 메뉴", -1)),
                  u("span", null, v(s.context.menus.subMenuName), 1)
                ]),
                u("div", _g, [
                  e[69] || (e[69] = u("span", null, "좌측 메뉴", -1)),
                  u("span", null, v(n.joinOrNone(s.context.menus.leftMenus)), 1)
                ]),
                u("div", Lg, [
                  e[70] || (e[70] = u("span", null, "열린 패널", -1)),
                  u("span", null, v(n.joinOrNone(s.context.menus.openPanels)), 1)
                ]),
                u("div", Sg, [
                  e[71] || (e[71] = u("span", null, "활성 도구", -1)),
                  u("span", null, v(n.joinOrNone(s.context.menus.activeTools)), 1)
                ])
              ]),
              u("div", Kg, [
                e[75] || (e[75] = u("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                u("div", Tg, [
                  e[73] || (e[73] = u("span", null, "지도 타입", -1)),
                  u("span", null, v(s.context.activeData.mapType), 1)
                ]),
                u("div", Dg, [
                  e[74] || (e[74] = u("span", null, "지형", -1)),
                  u("span", null, v(s.context.activeData.terrain || "기본"), 1)
                ]),
                u("div", kg, [
                  u("span", null, "데이터셋 (" + v(s.context.activeData.datasets.length) + ")", 1),
                  u("span", Og, [
                    s.context.activeData.datasets.length ? _("", !0) : (p(), w("span", Mg, "없음")),
                    (p(!0), w(V, null, rA(s.context.activeData.datasets, (g) => (p(), w("span", {
                      key: g.layerId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ]),
                u("div", Rg, [
                  u("span", null, "3D 타일 (" + v(s.context.activeData.threeDTiles.length) + ")", 1),
                  u("span", Ng, [
                    s.context.activeData.threeDTiles.length ? _("", !0) : (p(), w("span", Vg, "없음")),
                    (p(!0), w(V, null, rA(s.context.activeData.threeDTiles, (g) => (p(), w("span", {
                      key: g.threeDTilesId || g.sourceId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ]),
                s.context.activeData.autoPlacement.length ? (p(), w("div", Gg, [
                  u("span", null, "배치안 (" + v(s.context.activeData.autoPlacement.length) + ")", 1),
                  u("span", Pg, [
                    (p(!0), w(V, null, rA(s.context.activeData.autoPlacement, (g) => (p(), w("span", {
                      key: g.sourceId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ])) : _("", !0),
                s.context.activeData.topicMaps.length ? (p(), w("div", Jg, [
                  u("span", null, "주제도 (" + v(s.context.activeData.topicMaps.length) + ")", 1),
                  u("span", Xg, [
                    (p(!0), w(V, null, rA(s.context.activeData.topicMaps, (g) => (p(), w("span", {
                      key: g.key,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ])) : _("", !0)
              ]),
              u("div", Wg, [
                e[76] || (e[76] = u("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                u("div", Yg, [
                  (p(!0), w(V, null, rA(s.context.recentEvents.slice(0, 30), (g, m) => (p(), w("div", {
                    key: m,
                    class: "event-item"
                  }, [
                    u("span", jg, v(g.time), 1),
                    u("span", Zg, v(g.type), 1)
                  ]))), 128)),
                  s.context.recentEvents.length ? _("", !0) : (p(), w("div", zg, "기록된 이벤트 없음"))
                ])
              ]),
              s.context.camera ? (p(), w("div", qg, [
                e[81] || (e[81] = u("div", { class: "env-group-title" }, "카메라 위치", -1)),
                u("div", $g, [
                  e[77] || (e[77] = u("span", null, "경도", -1)),
                  u("span", null, v(s.context.camera.longitude), 1)
                ]),
                u("div", Ah, [
                  e[78] || (e[78] = u("span", null, "위도", -1)),
                  u("span", null, v(s.context.camera.latitude), 1)
                ]),
                u("div", eh, [
                  e[79] || (e[79] = u("span", null, "높이 (m)", -1)),
                  u("span", null, v(s.context.camera.height), 1)
                ]),
                u("div", th, [
                  e[80] || (e[80] = u("span", null, "Heading / Pitch", -1)),
                  u("span", null, v(s.context.camera.heading) + "° / " + v(s.context.camera.pitch) + "°", 1)
                ])
              ])) : _("", !0),
              u("div", rh, [
                e[87] || (e[87] = u("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                u("div", sh, [
                  e[82] || (e[82] = u("span", null, "일시", -1)),
                  u("span", null, v(s.context.datetime), 1)
                ]),
                u("div", nh, [
                  e[83] || (e[83] = u("span", null, "해상도", -1)),
                  u("span", null, v(s.context.screen.resolution) + " · 뷰포트 " + v(s.context.screen.viewport), 1)
                ]),
                s.context.memory ? (p(), w("div", ih, [
                  e[84] || (e[84] = u("span", null, "JS 힙 메모리", -1)),
                  u("span", null, v(s.context.memory.usedMB) + "MB / " + v(s.context.memory.limitMB) + "MB", 1)
                ])) : _("", !0),
                s.context.connection ? (p(), w("div", oh, [
                  e[85] || (e[85] = u("span", null, "네트워크", -1)),
                  u("span", null, v(s.context.connection.effectiveType) + " · " + v(s.context.connection.downlink) + "Mbps", 1)
                ])) : _("", !0),
                u("div", ah, [
                  e[86] || (e[86] = u("span", null, "언어", -1)),
                  u("span", null, v(s.context.browser.language), 1)
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
            onClick: e[20] || (e[20] = (...g) => n.openViewer && n.openViewer(...g))
          }, "저장 목록")) : _("", !0),
          u("button", {
            class: "bug-btn-cancel",
            onClick: e[21] || (e[21] = (...g) => n.close && n.close(...g))
          }, "취소"),
          u("button", {
            class: "bug-btn-copy",
            onClick: e[22] || (e[22] = (...g) => n.copyToClipboard && n.copyToClipboard(...g)),
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
            Y(" " + v(s.copyStatus), 1)
          ], 8, ch),
          n.serverEnabled ? (p(), w("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: e[23] || (e[23] = (...g) => n.saveToServer && n.saveToServer(...g)),
            disabled: s.isSaving || !s.screenshotUrl
          }, [
            s.isSaving ? (p(), w("span", uh)) : _("", !0),
            Y(" " + v(s.saveStatus), 1)
          ], 8, fh)) : _("", !0),
          u("button", {
            class: "bug-btn-download",
            onClick: e[24] || (e[24] = (...g) => n.download && n.download(...g)),
            disabled: !s.screenshotUrl
          }, " 다운로드 ", 8, Bh)
        ])
      ])
    ], 32)) : _("", !0)
  ]);
}
const gh = /* @__PURE__ */ Si(TB, [["render", dh], ["styles", [SB]], ["__scopeId", "data-v-a39d1232"]]), hh = ".brv-projects[data-v-fa8495fd]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-fa8495fd]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-fa8495fd]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-fa8495fd]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-fa8495fd]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-fa8495fd]{margin:0!important}.brv-ai__tools[data-v-fa8495fd]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-fa8495fd]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-fa8495fd]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-fa8495fd]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-fa8495fd]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-fa8495fd]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-fa8495fd]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-fa8495fd]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-kg[data-v-fa8495fd]{margin:8px 0 4px;font-size:11px}.brv-kg summary[data-v-fa8495fd]{cursor:pointer;color:#aab}.brv-kg__wrap[data-v-fa8495fd]{overflow-x:auto;margin-top:6px;padding-bottom:4px}.brv-kg__svg[data-v-fa8495fd]{display:block;font-family:inherit}.brv-kg__col[data-v-fa8495fd]{font-size:10px;fill:#889}.brv-kg__label[data-v-fa8495fd]{font-size:11px;fill:#e6ebf5;pointer-events:none}.brv-kg__node rect[data-v-fa8495fd]{stroke:#ffffff1f;stroke-width:1;transition:opacity .15s}.brv-kg__node--hit rect[data-v-fa8495fd]{stroke:#f2d35b;stroke-width:1.5}.brv-kg__node--dim[data-v-fa8495fd]{opacity:.25}.brv-kg__edge[data-v-fa8495fd]{fill:none;stroke:#aab4c859;stroke-width:1;transition:opacity .15s}.brv-kg__edge--contains[data-v-fa8495fd]{stroke:#e6ebf580}.brv-kg__edge--calls[data-v-fa8495fd]{stroke:#ef476f99}.brv-kg__edge--reads[data-v-fa8495fd],.brv-kg__edge--writes[data-v-fa8495fd]{stroke:#ffb7038c}.brv-kg__edge--navigates[data-v-fa8495fd]{stroke:#06d6a099}.brv-kg__edge--dim[data-v-fa8495fd]{opacity:.12}.brv-shots[data-v-fa8495fd]{margin:8px 0 6px}.brv-shots__title[data-v-fa8495fd]{font-size:11px;color:#aab;margin-bottom:4px}.brv-shots__strip[data-v-fa8495fd]{display:flex;gap:8px;overflow-x:auto;padding-bottom:4px}.brv-shots__item[data-v-fa8495fd]{margin:0;flex:0 0 auto;width:150px;cursor:zoom-in}.brv-shots__item img[data-v-fa8495fd],.brv-shots__ph[data-v-fa8495fd]{width:150px;height:88px;object-fit:cover;object-position:top;border:1px solid rgba(255,255,255,.18);border-radius:4px;background:#111;display:block}.brv-shots__ph[data-v-fa8495fd]{color:#666;text-align:center;line-height:88px}.brv-shots__item figcaption[data-v-fa8495fd]{font-size:10px;color:#99a;margin-top:2px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-shots__big[data-v-fa8495fd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:100000;background:#000000d9;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:zoom-out;gap:8px}.brv-shots__big img[data-v-fa8495fd]{max-width:94vw;max-height:86vh;border:1px solid rgba(255,255,255,.25);border-radius:4px}.brv-shots__bigcap[data-v-fa8495fd]{color:#ddd;font-size:12px}.brv-ai__pr[data-v-fa8495fd]{font-weight:600}.brv-ai__branch[data-v-fa8495fd]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-fa8495fd]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-fa8495fd]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-fa8495fd]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-fa8495fd]{flex:1;margin:0}.brv-chat__btns[data-v-fa8495fd]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-fa8495fd]{white-space:nowrap}.brv-chat__input[data-v-fa8495fd]{font-family:inherit}.brv-chat__text[data-v-fa8495fd]{color:#d0d6de}.brv-chat__msg--user .brv-chat__text[data-v-fa8495fd]{color:#e6ebf2}.brv-notice[data-v-fa8495fd]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-fa8495fd]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-fa8495fd]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-fa8495fd]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-fa8495fd],.brv-log-list[data-v-fa8495fd],.brv-net-detail[data-v-fa8495fd],.brv-text[data-v-fa8495fd]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-fa8495fd]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-fa8495fd]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-fa8495fd]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-fa8495fd]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-fa8495fd]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-fa8495fd]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-fa8495fd]:hover{color:#fff}.brv-body[data-v-fa8495fd]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-fa8495fd]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-fa8495fd]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-fa8495fd]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-fa8495fd]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-fa8495fd]:hover{background:#ffffff12}.brv-problem[data-v-fa8495fd]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-fa8495fd]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-fa8495fd]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-fa8495fd]:hover{color:#e74c3c}.brv-badge[data-v-fa8495fd]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-badge--tool[data-v-fa8495fd]{background:#aaaabe40;color:#ccd}.brv-sev--critical[data-v-fa8495fd]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-fa8495fd]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-fa8495fd]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-fa8495fd]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-fa8495fd]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-fa8495fd]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-fa8495fd]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-fa8495fd]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-fa8495fd]{background:#7888992e;color:#89a}.brv-status-control[data-v-fa8495fd]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-fa8495fd]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-fa8495fd]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-fa8495fd]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-fa8495fd]{width:11px;height:11px;border-width:2px}.brv-back[data-v-fa8495fd]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-fa8495fd]:hover{color:#fff}.brv-screenshot[data-v-fa8495fd]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-fa8495fd]{margin-bottom:16px}.brv-fix[data-v-fa8495fd]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-fa8495fd]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-fa8495fd]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-fa8495fd]{background:#e0f2fe;color:#075985}.brv-fix--merged[data-v-fa8495fd]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-fa8495fd]{background:#fee2e2;color:#991b1b}.brv-link[data-v-fa8495fd]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-fa8495fd]{margin-top:6px}.brv-fix-actions[data-v-fa8495fd]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-fa8495fd]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-fa8495fd]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-fa8495fd]{background:transparent;color:#2563eb}.brv-hint[data-v-fa8495fd]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-fa8495fd]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-fa8495fd]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-fa8495fd]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-fa8495fd]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-fa8495fd]{color:inherit}.brv-suggest[data-v-fa8495fd]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-fa8495fd]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-fa8495fd]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-fa8495fd]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-fa8495fd]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-fa8495fd]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-fa8495fd]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-fa8495fd]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-fa8495fd]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-fa8495fd]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-fa8495fd]{color:#1e5bb8}.brv-chat__text[data-v-fa8495fd]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-fa8495fd]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-fa8495fd]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-fa8495fd]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-fa8495fd]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-fa8495fd]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-fa8495fd]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-fa8495fd]{margin-bottom:8px}.brv-field-label[data-v-fa8495fd]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-fa8495fd]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:pre-wrap;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-fa8495fd]{display:flex;gap:4px}.brv-log-tab[data-v-fa8495fd]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-fa8495fd]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-fa8495fd]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-fa8495fd]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-fa8495fd]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-fa8495fd]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-fa8495fd]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-fa8495fd]:hover{background:#ffffff0f}.brv-filter-error[data-v-fa8495fd]{color:#c06060}.brv-filter-warn[data-v-fa8495fd]{color:#b09040}.brv-filter-log[data-v-fa8495fd]{color:#589}.brv-log-list[data-v-fa8495fd]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-fa8495fd]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-fa8495fd]:hover{background:#ffffff0a}.brv-log-item[data-v-fa8495fd]:last-child{border-bottom:none}.brv-log-time[data-v-fa8495fd]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-fa8495fd]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-fa8495fd]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-fa8495fd]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-fa8495fd]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-fa8495fd]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-fa8495fd]{color:#8ac;font-weight:600}.brv-log--error[data-v-fa8495fd]{color:#e87070}.brv-log--warn[data-v-fa8495fd]{color:#d4a84b}.brv-log--info[data-v-fa8495fd]{color:#a8b8c8}.brv-log-empty[data-v-fa8495fd]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-fa8495fd]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-fa8495fd]:hover{background:#ffffff0a}.brv-net-err[data-v-fa8495fd]{background:#e74c3c0d}.brv-net-status[data-v-fa8495fd]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-fa8495fd]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-fa8495fd]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-fa8495fd],.st-5xx[data-v-fa8495fd]{color:#e87070}.st-4xx[data-v-fa8495fd]{color:#d4a84b}.st-3xx[data-v-fa8495fd]{color:#8ac}.st-2xx[data-v-fa8495fd]{color:#6c8}.brv-net-detail[data-v-fa8495fd]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-fa8495fd]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-fa8495fd .7s linear infinite}@keyframes brv-spin-fa8495fd{to{transform:rotate(360deg)}}", ph = {
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
    /** 관련 부분 그래프를 층(열)으로 배치한 SVG 좌표 - 열: 화면·메뉴 / 기능 / 파일 / API / 백엔드 / 테이블 */
    kgLayout() {
      var C;
      const A = this.kg;
      if (!((C = A == null ? void 0 : A.nodes) != null && C.length)) return null;
      const e = [{ layers: [0, 1, 2], title: "화면·메뉴" }, { layers: [3], title: "기능" }, { layers: [4], title: "구현 파일" }, { layers: [5], title: "API" }, { layers: [6], title: "백엔드" }, { layers: [7], title: "테이블" }], t = 168, r = 30, s = 22, n = 26, i = e.map((Q) => A.nodes.filter((U) => Q.layers.includes(U.layer))).map((Q, U) => ({ ...e[U], ns: Q })).filter((Q) => Q.ns.length), o = [], a = [];
      let c = 8;
      for (const Q of i)
        a.push({ layer: Q.layers[0], x: c, title: Q.title }), Q.ns.sort((U, L) => L.hit - U.hit || (L.score || 0) - (U.score || 0)), Q.ns.forEach((U, L) => {
          const y = U.label.length > 22 ? U.label.slice(0, 21) + "…" : U.label;
          o.push({ ...U, x: c, y: s + L * r, w: t - n, h: 20, short: y });
        }), c += t;
      const l = new Map(o.map((Q) => [Q.id, Q])), f = [];
      for (const Q of A.edges) {
        const U = l.get(Q.from), L = l.get(Q.to);
        if (!U || !L || U === L) continue;
        const [y, b] = U.x <= L.x ? [U, L] : [L, U], g = y.x + y.w, m = y.y + y.h / 2, T = b.x, S = b.y + b.h / 2, X = y.x === b.x ? `M${g},${m} C${g + 18},${m} ${T + y.w + 18},${S} ${T + y.w},${S}` : `M${g},${m} C${(g + T) / 2},${m} ${(g + T) / 2},${S} ${T},${S}`;
        f.push({ d: X, rel: Q.rel, from: Q.from, to: Q.to });
      }
      const B = s + Math.max(...i.map((Q) => Q.ns.length)) * r + 4;
      return { nodes: o, edges: f, cols: a, w: c + 4, h: B };
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
    kgColor(A) {
      return { module: "#6b5b1f", screen: "#1f5e4f", menu: "#1f4a6b", feature: "#334c66", component: "#4a3466", store: "#6b4a2a", util: "#3d4450", api: "#6b2a3a", service: "#6b3f2a", table: "#5e4a1f" }[A] || "#3a4050";
    },
    kgNbr(A) {
      var e;
      return !!((e = this.kg) != null && e.edges.some((t) => t.from === this.kgHover && t.to === A || t.to === this.kgHover && t.from === A));
    },
    async loadKnowledge(A) {
      var e, t, r;
      if (this.kg = null, !!((t = (e = this.kit) == null ? void 0 : e.api) != null && t.knowledge))
        try {
          const s = await this.kit.api.knowledge(A);
          this.selected === A && ((r = s == null ? void 0 : s.nodes) != null && r.length) && (this.kg = s);
        } catch {
        }
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
        if (this.detail = await this.kit.api.get(A) ?? null, this.loadKnowledge(A), this.detail) {
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
}, yh = ["onClick"], xh = { class: "brv-body" }, Eh = {
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
}, Mh = ["src"], Rh = ["src", "alt"], Nh = { class: "brv-shots__bigcap" }, Vh = { class: "brv-section" }, Gh = { class: "brv-row" }, Ph = { class: "brv-row" }, Jh = { class: "brv-status-control" }, Xh = {
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
  class: "brv-kg",
  open: ""
}, hp = { class: "brv-kg__wrap" }, pp = ["viewBox"], wp = ["x"], Qp = ["d"], Cp = ["transform", "onMouseenter"], vp = ["width", "height", "fill"], Up = {
  x: "6",
  y: "14",
  class: "brv-kg__label"
}, Fp = {
  key: 3,
  class: "brv-shots"
}, bp = { class: "brv-shots__title" }, mp = { class: "brv-suggest__hint" }, yp = { class: "brv-shots__strip" }, xp = ["onClick"], Ep = ["src", "alt"], Hp = {
  key: 1,
  class: "brv-shots__ph"
}, Ip = ["open"], _p = { class: "brv-ai__count" }, Lp = {
  key: 5,
  class: "brv-suggest"
}, Sp = { class: "brv-suggest__text brv-selectable" }, Kp = ["disabled", "onClick"], Tp = { class: "brv-chat" }, Dp = { class: "brv-chat__who" }, kp = { class: "brv-chat__text brv-selectable" }, Op = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, Mp = {
  key: 1,
  class: "brv-chat__compose"
}, Rp = ["disabled"], Np = { class: "brv-chat__btns" }, Vp = ["disabled"], Gp = ["disabled"], Pp = {
  key: 2,
  class: "brv-ai__hint"
}, Jp = {
  key: 2,
  class: "brv-section"
}, Xp = {
  key: 0,
  class: "brv-field"
}, Wp = { class: "brv-text brv-selectable" }, Yp = {
  key: 1,
  class: "brv-field"
}, jp = { class: "brv-text brv-selectable" }, Zp = {
  key: 2,
  class: "brv-field"
}, zp = { class: "brv-text brv-selectable" }, qp = {
  key: 3,
  class: "brv-section"
}, $p = {
  key: 0,
  class: "brv-row"
}, Aw = { class: "brv-selectable" }, ew = {
  key: 1,
  class: "brv-row"
}, tw = { class: "brv-selectable" }, rw = {
  key: 2,
  class: "brv-row"
}, sw = { class: "brv-selectable" }, nw = {
  key: 3,
  class: "brv-row"
}, iw = { class: "brv-selectable" }, ow = {
  key: 4,
  class: "brv-row"
}, aw = { class: "brv-selectable" }, lw = { class: "brv-section" }, cw = { class: "brv-label-row" }, fw = { class: "brv-log-tabs" }, uw = ["onClick"], Bw = { class: "brv-log-filters" }, dw = { class: "brv-filter-chip brv-filter-error" }, gw = { class: "brv-filter-chip brv-filter-warn" }, hw = { class: "brv-filter-chip brv-filter-log" }, pw = { class: "brv-log-list" }, ww = ["onClick"], Qw = { class: "brv-log-time brv-selectable" }, Cw = { class: "brv-log-lv" }, vw = {
  key: 0,
  class: "brv-log-empty"
}, Uw = { class: "brv-log-filters" }, Fw = { class: "brv-filter-chip brv-filter-error" }, bw = { class: "brv-filter-chip brv-filter-warn" }, mw = { class: "brv-filter-chip brv-filter-log" }, yw = { class: "brv-log-list" }, xw = ["onClick"], Ew = { class: "brv-log-time brv-selectable" }, Hw = { class: "brv-log-lv" }, Iw = { class: "brv-log-logger brv-selectable" }, _w = {
  key: 0,
  class: "brv-log-empty"
}, Lw = { class: "brv-log-filters" }, Sw = { class: "brv-filter-chip brv-filter-error" }, Kw = { class: "brv-filter-chip brv-filter-log" }, Tw = { class: "brv-log-list" }, Dw = ["onClick"], kw = { class: "brv-net-method brv-selectable" }, Ow = { class: "brv-net-dur brv-selectable" }, Mw = { class: "brv-log-time brv-selectable" }, Rw = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Nw = { key: 0 }, Vw = { key: 1 }, Gw = { key: 2 }, Pw = {
  key: 3,
  class: "brv-log--error"
}, Jw = {
  key: 0,
  class: "brv-log-empty"
}, Xw = {
  key: 3,
  class: "brv-log-list"
}, Ww = ["onClick"], Yw = { class: "brv-log-time brv-selectable" }, jw = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, Zw = {
  key: 0,
  class: "brv-log-empty"
};
function zw(A, e, t, r, s, n) {
  var i, o, a, c;
  return p(), w("div", Ch, [
    s.isOpen ? (p(), w("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: e[21] || (e[21] = (l) => s.backdropPressed = l.target === l.currentTarget),
      onClick: e[22] || (e[22] = jt((l) => s.backdropPressed && n.close(), ["self"]))
    }, [
      u("div", vh, [
        u("div", Uh, [
          u("span", Fh, [
            e[23] || (e[23] = Y(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), w("span", bh, v(n.hotkey), 1)) : _("", !0)
          ]),
          n.viewProjects.length > 1 ? (p(), w("span", mh, [
            (p(!0), w(V, null, rA(n.viewProjects, (l) => (p(), w("button", {
              key: l.key,
              class: q({ "brv-projects__on": s.project === l.key }),
              onClick: (f) => n.switchProject(l.key)
            }, v(l.label), 11, yh))), 128))
          ])) : _("", !0),
          u("button", {
            class: "brv-close",
            onClick: e[0] || (e[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        s.notice ? (p(), w("div", {
          key: 0,
          class: q(["brv-notice", `brv-notice--${s.notice.type}`])
        }, [
          u("b", null, v(s.notice.title), 1),
          Y(" " + v(s.notice.message), 1)
        ], 2)) : _("", !0),
        u("div", xh, [
          s.selected ? (p(), w(V, { key: 1 }, [
            u("button", {
              class: "brv-back",
              onClick: e[1] || (e[1] = (l) => s.selected = null)
            }, "← 목록"),
            s.detailLoading ? (p(), w("div", kh, [...e[25] || (e[25] = [
              u("span", { class: "brv-spin" }, null, -1),
              Y(" 불러오는 중... ", -1)
            ])])) : s.detail ? (p(), w(V, { key: 1 }, [
              s.detail.screenshot ? (p(), w("div", Oh, [
                e[26] || (e[26] = u("div", { class: "brv-label" }, "화면 캡처", -1)),
                u("img", {
                  src: s.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, Mh)
              ])) : _("", !0),
              s.bigShot ? (p(), w("div", {
                key: 1,
                class: "brv-shots__big",
                onClick: e[2] || (e[2] = (l) => s.bigShot = null)
              }, [
                u("img", {
                  src: s.shotUrls[s.bigShot.file],
                  alt: s.bigShot.name
                }, null, 8, Rh),
                u("div", Nh, [
                  Y(v(s.bigShot.name) + " · " + v(s.bigShot.label) + " ", 1),
                  e[27] || (e[27] = u("span", { class: "brv-suggest__hint" }, "(눌러서 닫기)", -1))
                ])
              ])) : _("", !0),
              u("div", Vh, [
                e[32] || (e[32] = u("div", { class: "brv-label" }, "기본 정보", -1)),
                u("div", Gh, [
                  e[28] || (e[28] = u("span", null, "심각도", -1)),
                  u("span", {
                    class: q(["brv-badge", `brv-sev--${(i = s.detail.severity) == null ? void 0 : i.toLowerCase()}`])
                  }, v(s.detail.severity), 3)
                ]),
                u("div", Ph, [
                  e[29] || (e[29] = u("span", null, "상태", -1)),
                  u("span", Jh, [
                    s.statusSaving ? (p(), w("span", Xh)) : _("", !0),
                    u("select", {
                      class: q(["brv-status-select", `brv-st--${(s.detail.status || "OPEN").toLowerCase()}`]),
                      value: s.detail.status || "OPEN",
                      disabled: s.statusSaving,
                      onChange: e[3] || (e[3] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (p(!0), w(V, null, rA(s.STATUSES, (l) => (p(), w("option", {
                        key: l.value,
                        value: l.value
                      }, v(l.label), 9, Yh))), 128))
                    ], 42, Wh)
                  ])
                ]),
                u("div", jh, [
                  e[30] || (e[30] = u("span", null, "보고자", -1)),
                  u("span", Zh, v(s.detail.reporter), 1)
                ]),
                u("div", zh, [
                  e[31] || (e[31] = u("span", null, "일시", -1)),
                  u("span", qh, v(n.formatDate(s.detail.insertDate)), 1)
                ])
              ]),
              u("div", $h, [
                u("div", Ap, [
                  e[34] || (e[34] = u("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  u("span", {
                    class: q(["brv-fix", `brv-fix--${(s.detail.fixStatus || "none").toLowerCase()}`])
                  }, v(n.fixLabel(s.detail.fixStatus)), 3),
                  s.fixBusy || n.fixInProgress ? (p(), w("span", ep)) : _("", !0),
                  n.fixInProgress && n.fixElapsed ? (p(), w("span", tp, v(n.fixElapsed), 1)) : n.deployPending ? (p(), w("span", rp, [...e[33] || (e[33] = [
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
                !s.detail.fixStatus && s.detail.tool ? (p(), w("div", op, "버그 신고 도구 자체의 문제로 접수됐습니다. 앱 코드 수정 대상이 아니라 운영자가 도구 저장소에서 처리합니다.")) : !s.detail.fixStatus && !n.fixable ? (p(), w("div", ap, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : s.detail.fixStatus ? (p(), w(V, { key: 3 }, [
                  s.detail.fixPrUrl || s.detail.fixBranch ? (p(), w("div", fp, [
                    s.detail.fixPrUrl ? (p(), w("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: s.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + v(n.prNumber), 9, up)) : _("", !0),
                    s.detail.fixBranch ? (p(), w("span", Bp, v(s.detail.fixBranch), 1)) : _("", !0)
                  ])) : _("", !0),
                  s.detail.fixSummary ? (p(), w("div", dp, v(s.detail.fixSummary), 1)) : _("", !0),
                  n.kgLayout ? (p(), w("details", gp, [
                    e[36] || (e[36] = u("summary", null, [
                      Y("관련 기능·파일 "),
                      u("span", { class: "brv-suggest__hint" }, "지식 그래프에서 이 신고와 이어진 부분 · 노란 테두리 = 신고 내용과 직접 맞는 것")
                    ], -1)),
                    u("div", hp, [
                      (p(), w("svg", {
                        viewBox: `0 0 ${n.kgLayout.w} ${n.kgLayout.h}`,
                        style: br({ width: n.kgLayout.w + "px", height: n.kgLayout.h + "px" }),
                        class: "brv-kg__svg"
                      }, [
                        (p(!0), w(V, null, rA(n.kgLayout.cols, (l) => (p(), w("text", {
                          key: "c" + l.layer,
                          x: l.x,
                          y: "12",
                          class: "brv-kg__col"
                        }, v(l.title), 9, wp))), 128)),
                        (p(!0), w(V, null, rA(n.kgLayout.edges, (l, f) => (p(), w("path", {
                          key: "e" + f,
                          d: l.d,
                          class: q(["brv-kg__edge", "brv-kg__edge--" + l.rel, { "brv-kg__edge--dim": s.kgHover && l.from !== s.kgHover && l.to !== s.kgHover }])
                        }, null, 10, Qp))), 128)),
                        (p(!0), w(V, null, rA(n.kgLayout.nodes, (l) => (p(), w("g", {
                          key: l.id,
                          transform: `translate(${l.x},${l.y})`,
                          class: q(["brv-kg__node", { "brv-kg__node--hit": l.hit, "brv-kg__node--dim": s.kgHover && s.kgHover !== l.id && !n.kgNbr(l.id) }]),
                          onMouseenter: (f) => s.kgHover = l.id,
                          onMouseleave: e[7] || (e[7] = (f) => s.kgHover = null)
                        }, [
                          u("title", null, v(l.label) + v(l.path ? `
` + l.path : "") + v(l.route ? `
` + l.route : "") + v(l.desc ? `
` + l.desc : ""), 1),
                          u("rect", {
                            width: l.w,
                            height: l.h,
                            rx: "4",
                            fill: n.kgColor(l.type)
                          }, null, 8, vp),
                          u("text", Up, v(l.short), 1)
                        ], 42, Cp))), 128))
                      ], 12, pp))
                    ])
                  ])) : _("", !0),
                  n.fixShots.length ? (p(), w("div", Fp, [
                    u("div", bp, [
                      e[37] || (e[37] = Y("화면 확인 ", -1)),
                      u("span", mp, v(n.fixShots[n.fixShots.length - 1].label), 1)
                    ]),
                    u("div", yp, [
                      (p(!0), w(V, null, rA(n.fixShots, (l) => (p(), w("figure", {
                        key: l.file,
                        class: "brv-shots__item",
                        onClick: (f) => n.openShot(l)
                      }, [
                        s.shotUrls[l.file] ? (p(), w("img", {
                          key: 0,
                          src: s.shotUrls[l.file],
                          alt: l.name
                        }, null, 8, Ep)) : (p(), w("div", Hp, "…")),
                        u("figcaption", null, v(l.name.replace(/\.png$/i, "")), 1)
                      ], 8, xp))), 128))
                    ])
                  ])) : _("", !0),
                  s.detail.fixLog ? (p(), w("details", {
                    key: 4,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    u("summary", null, [
                      e[38] || (e[38] = Y("진행 로그 ", -1)),
                      u("span", _p, v(n.logLineCount) + "줄", 1)
                    ]),
                    u("pre", {
                      ref: "fixLogPre",
                      class: "brv-selectable"
                    }, v(s.detail.fixLog), 513)
                  ], 8, Ip)) : _("", !0),
                  n.fixSuggestions.length ? (p(), w("div", Lp, [
                    e[39] || (e[39] = u("div", { class: "brv-suggest__title" }, [
                      Y("추천 개선 "),
                      u("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (p(!0), w(V, null, rA(n.fixSuggestions, (l, f) => (p(), w("div", {
                      key: f,
                      class: "brv-suggest__item"
                    }, [
                      u("span", Sp, v(l), 1),
                      n.fixable ? (p(), w("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: s.fixBusy || n.fixInProgress,
                        onClick: (B) => n.runSuggestion(l)
                      }, "실행", 8, Kp)) : _("", !0)
                    ]))), 128))
                  ])) : _("", !0),
                  u("div", Tp, [
                    (p(!0), w(V, null, rA(n.fixChat, (l, f) => (p(), w("div", {
                      key: f,
                      class: q(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      u("span", Dp, v(l.role === "user" ? "나" : "AI"), 1),
                      u("div", kp, v(l.text), 1)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), w("div", Op, [...e[40] || (e[40] = [
                      u("span", { class: "brv-chat__who" }, "AI", -1),
                      u("div", { class: "brv-chat__text" }, [
                        u("span", { class: "brv-spin brv-spin--sm" }),
                        Y(" 생각 중…")
                      ], -1)
                    ])])) : _("", !0),
                    n.fixable ? (p(), w("div", Mp, [
                      yA(u("textarea", {
                        "onUpdate:modelValue": e[8] || (e[8] = (l) => s.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: s.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          e[9] || (e[9] = xo(jt((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          e[10] || (e[10] = xo(jt((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, Rp), [
                        [os, s.chatInput]
                      ]),
                      u("div", Np, [
                        u("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[11] || (e[11] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, Vp),
                        u("button", {
                          class: "brv-fix-btn",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[12] || (e[12] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, Gp)
                      ])
                    ])) : _("", !0),
                    n.fixable ? (p(), w("div", Pp, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : _("", !0)
                  ])
                ], 64)) : (p(), w("div", lp, [
                  u("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: s.fixBusy,
                    onClick: e[6] || (e[6] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, cp),
                  e[35] || (e[35] = u("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              s.detail.problem || s.detail.reproSteps || s.detail.expectedResult ? (p(), w("div", Jp, [
                e[44] || (e[44] = u("div", { class: "brv-label" }, "내용", -1)),
                s.detail.problem ? (p(), w("div", Xp, [
                  e[41] || (e[41] = u("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  u("div", Wp, v(s.detail.problem), 1)
                ])) : _("", !0),
                s.detail.reproSteps ? (p(), w("div", Yp, [
                  e[42] || (e[42] = u("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  u("div", jp, v(s.detail.reproSteps), 1)
                ])) : _("", !0),
                s.detail.expectedResult ? (p(), w("div", Zp, [
                  e[43] || (e[43] = u("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  u("div", zp, v(s.detail.expectedResult), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              n.parsedContext ? (p(), w("div", qp, [
                e[50] || (e[50] = u("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), w("div", $p, [
                  e[45] || (e[45] = u("span", null, "카메라", -1)),
                  u("span", Aw, v(n.parsedContext.camera.longitude) + "°, " + v(n.parsedContext.camera.latitude) + "° · 고도 " + v(n.parsedContext.camera.height) + "m · H" + v(n.parsedContext.camera.heading) + "° P" + v(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : _("", !0),
                (o = n.parsedContext.menus) != null && o.header ? (p(), w("div", ew, [
                  e[46] || (e[46] = u("span", null, "상단 탭", -1)),
                  u("span", tw, v(n.parsedContext.menus.header), 1)
                ])) : _("", !0),
                n.parsedContext.activeData ? (p(), w("div", rw, [
                  e[47] || (e[47] = u("span", null, "데이터셋", -1)),
                  u("span", sw, v(((a = n.parsedContext.activeData.datasets) == null ? void 0 : a.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : _("", !0),
                (c = n.parsedContext.activeData) != null && c.terrain ? (p(), w("div", nw, [
                  e[48] || (e[48] = u("span", null, "지형", -1)),
                  u("span", iw, v(n.parsedContext.activeData.terrain), 1)
                ])) : _("", !0),
                n.parsedContext.datetime ? (p(), w("div", ow, [
                  e[49] || (e[49] = u("span", null, "발생 시각", -1)),
                  u("span", aw, v(n.parsedContext.datetime), 1)
                ])) : _("", !0)
              ])) : _("", !0),
              u("div", lw, [
                u("div", cw, [
                  e[51] || (e[51] = u("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  u("div", fw, [
                    (p(!0), w(V, null, rA(n.logTabs, (l) => (p(), w("button", {
                      key: l.id,
                      class: q(["brv-log-tab", { active: s.logTab === l.id }]),
                      onClick: (f) => s.logTab = l.id
                    }, [
                      Y(v(l.label) + " ", 1),
                      l.count ? (p(), w("span", {
                        key: 0,
                        class: q(["brv-log-tab-count", l.countClass])
                      }, v(l.count), 3)) : _("", !0)
                    ], 10, uw))), 128))
                  ])
                ]),
                s.logTab === "front" ? (p(), w(V, { key: 0 }, [
                  u("div", Bw, [
                    u("label", dw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[13] || (e[13] = (l) => s.showFE.error = l)
                      }, null, 512), [
                        [GA, s.showFE.error]
                      ]),
                      Y(" 오류 (" + v(n.countFE("error")) + ") ", 1)
                    ]),
                    u("label", gw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[14] || (e[14] = (l) => s.showFE.warn = l)
                      }, null, 512), [
                        [GA, s.showFE.warn]
                      ]),
                      Y(" 경고 (" + v(n.countFE("warn")) + ") ", 1)
                    ]),
                    u("label", hw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[15] || (e[15] = (l) => s.showFE.log = l)
                      }, null, 512), [
                        [GA, s.showFE.log]
                      ]),
                      Y(" 로그 (" + v(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  u("div", pw, [
                    (p(!0), w(V, null, rA(n.filteredFrontLogs, (l, f) => {
                      var B;
                      return p(), w("div", {
                        key: f,
                        class: q(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (C) => n.toggleExpand("f" + f)
                      }, [
                        u("span", Qw, v((B = l.time) == null ? void 0 : B.slice(11, 23)), 1),
                        u("span", Cw, v(l.level), 1),
                        u("span", {
                          class: q(["brv-log-msg brv-selectable", { expanded: s.expanded.has("f" + f) }])
                        }, v(l.message), 3)
                      ], 10, ww);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), w("div", vw, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "back" ? (p(), w(V, { key: 1 }, [
                  u("div", Uw, [
                    u("label", Fw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[16] || (e[16] = (l) => s.showBE.error = l)
                      }, null, 512), [
                        [GA, s.showBE.error]
                      ]),
                      Y(" ERROR (" + v(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    u("label", bw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[17] || (e[17] = (l) => s.showBE.warn = l)
                      }, null, 512), [
                        [GA, s.showBE.warn]
                      ]),
                      Y(" WARN (" + v(n.countBE("WARN")) + ") ", 1)
                    ]),
                    u("label", mw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[18] || (e[18] = (l) => s.showBE.info = l)
                      }, null, 512), [
                        [GA, s.showBE.info]
                      ]),
                      Y(" INFO (" + v(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  u("div", yw, [
                    (p(!0), w(V, null, rA(n.filteredBackLogs, (l, f) => {
                      var B, C;
                      return p(), w("div", {
                        key: f,
                        class: q(["brv-log-item", `brv-log--${(B = l.level) == null ? void 0 : B.toLowerCase()}`]),
                        onClick: (Q) => n.toggleExpand("b" + f)
                      }, [
                        u("span", Ew, v((C = l.time) == null ? void 0 : C.slice(11, 23)), 1),
                        u("span", Hw, v(l.level), 1),
                        u("span", Iw, v(n.shortLogger(l.logger)), 1),
                        u("span", {
                          class: q(["brv-log-msg brv-selectable", { expanded: s.expanded.has("b" + f) }])
                        }, v(l.message), 3)
                      ], 10, xw);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), w("div", _w, "표시할 로그 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "net" ? (p(), w(V, { key: 2 }, [
                  u("div", Lw, [
                    u("label", Sw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[19] || (e[19] = (l) => s.showNet.error = l)
                      }, null, 512), [
                        [GA, s.showNet.error]
                      ]),
                      Y(" 에러 (" + v(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    u("label", Kw, [
                      yA(u("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[20] || (e[20] = (l) => s.showNet.ok = l)
                      }, null, 512), [
                        [GA, s.showNet.ok]
                      ]),
                      Y(" 성공 (" + v(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  u("div", Tw, [
                    (p(!0), w(V, null, rA(n.filteredNetLogs, (l, f) => {
                      var B;
                      return p(), w("div", {
                        key: f,
                        class: q(["brv-net-item", n.netClass(l)]),
                        onClick: (C) => n.toggleExpand("n" + f)
                      }, [
                        u("span", {
                          class: q(["brv-net-status", n.statusClass(l.status)])
                        }, v(l.status || "ERR"), 3),
                        u("span", kw, v(l.method), 1),
                        u("span", {
                          class: q(["brv-log-msg brv-selectable", { expanded: s.expanded.has("n" + f) }])
                        }, v(l.url), 3),
                        u("span", Ow, v(l.duration) + "ms", 1),
                        u("span", Mw, v((B = l.time) == null ? void 0 : B.slice(11, 19)), 1)
                      ], 10, Dw);
                    }), 128)),
                    (p(!0), w(V, null, rA(n.filteredNetLogs, (l, f) => (p(), w(V, {
                      key: "d" + f
                    }, [
                      s.expanded.has("n" + f) ? (p(), w("div", Rw, [
                        l.params ? (p(), w("div", Nw, [
                          e[52] || (e[52] = u("b", null, "Params:", -1)),
                          Y(" " + v(l.params), 1)
                        ])) : _("", !0),
                        l.requestBody ? (p(), w("div", Vw, [
                          e[53] || (e[53] = u("b", null, "Request:", -1)),
                          Y(" " + v(l.requestBody), 1)
                        ])) : _("", !0),
                        l.responseBody ? (p(), w("div", Gw, [
                          e[54] || (e[54] = u("b", null, "Response:", -1)),
                          Y(" " + v(l.responseBody), 1)
                        ])) : _("", !0),
                        l.error ? (p(), w("div", Pw, [
                          e[55] || (e[55] = u("b", null, "Error:", -1)),
                          Y(" " + v(l.error), 1)
                        ])) : _("", !0)
                      ])) : _("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), w("div", Jw, "표시할 요청 없음")) : _("", !0)
                  ])
                ], 64)) : _("", !0),
                s.logTab === "mutation" ? (p(), w("div", Xw, [
                  (p(!0), w(V, null, rA(n.parsedMutationLog, (l, f) => (p(), w("div", {
                    key: f,
                    class: "brv-log-item",
                    onClick: (B) => n.toggleExpand("m" + f)
                  }, [
                    u("span", Yw, v(l.time), 1),
                    u("span", {
                      class: q(["brv-log-msg brv-mutation brv-selectable", { expanded: s.expanded.has("m" + f) }])
                    }, v(l.type), 3),
                    l.payload !== null ? (p(), w("span", jw, v(n.formatPayload(l.payload)), 1)) : _("", !0)
                  ], 8, Ww))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), w("div", Zw, "기록된 mutation 없음")) : _("", !0)
                ])) : _("", !0)
              ])
            ], 64)) : _("", !0)
          ], 64)) : (p(), w(V, { key: 0 }, [
            s.loading ? (p(), w("div", Eh, [...e[24] || (e[24] = [
              u("span", { class: "brv-spin" }, null, -1),
              Y(" 불러오는 중... ", -1)
            ])])) : s.list.length === 0 ? (p(), w("div", Hh, "저장된 리포트가 없습니다.")) : (p(), w("div", Ih, [
              (p(!0), w(V, null, rA(s.list, (l) => {
                var f;
                return p(), w("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (B) => n.openDetail(l.bugReportId)
                }, [
                  u("span", {
                    class: q(["brv-badge", `brv-sev--${(f = l.severity) == null ? void 0 : f.toLowerCase()}`])
                  }, v(l.severity), 3),
                  u("span", {
                    class: q(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, v(n.statusLabel(l.status)), 3),
                  l.tool ? (p(), w("span", Lh, "도구")) : _("", !0),
                  u("span", Sh, v(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (p(), w("span", {
                    key: 1,
                    class: q(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, v(n.fixShort(l.fixStatus)), 11, Kh)) : _("", !0),
                  u("span", Th, v(l.reporter) + " · " + v(n.formatDate(l.insertDate)), 1),
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
const qw = /* @__PURE__ */ Si(Qh, [["render", zw], ["styles", [hh]], ["__scopeId", "data-v-fa8495fd"]]);
function dn({ endpoint: A, project: e, apiKey: t, user: r, adminKey: s }) {
  const n = A ? `${String(A).replace(/\/+$/, "")}/p/${e}` : "", i = !!n;
  async function o(a, c, l, { query: f, blob: B } = {}) {
    if (!i) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const C = { Accept: "application/json" };
    l !== void 0 && (C["Content-Type"] = "application/json"), t && (C["X-Bugfix-Key"] = t), s && (C["X-Bugfix-Admin"] = s);
    const Q = typeof r == "function" ? r() : r;
    Q && (C["X-Bugfix-User"] = String(Q));
    const U = f ? "?" + new URLSearchParams(f).toString() : "", L = await fetch(n + c + U, { method: a, headers: C, body: l === void 0 ? void 0 : JSON.stringify(l) });
    if (B) {
      if (!L.ok) throw Object.assign(new Error(`HTTP ${L.status}`), { status: L.status });
      return URL.createObjectURL(await L.blob());
    }
    if (L.status === 204) return null;
    const y = await L.text();
    let b = null;
    try {
      b = y ? JSON.parse(y) : null;
    } catch {
    }
    if (!L.ok) {
      const g = new Error((b == null ? void 0 : b.message) || `HTTP ${L.status}`);
      throw g.status = L.status, g;
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
    /** 이 신고와 관련된 지식 그래프 부분 { nodes, edges, available } */
    knowledge: (a) => o("GET", `/reports/${a}/knowledge`),
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
function Tr(A, e, t) {
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
}, $w = function(A) {
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
}, Lo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", AQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Dr = 0; Dr < Lo.length; Dr++)
  AQ[Lo.charCodeAt(Dr)] = Dr;
var So = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var kr = 0; kr < So.length; kr++)
  Zt[So.charCodeAt(kr)] = kr;
var eQ = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = Zt[A.charCodeAt(r)], i = Zt[A.charCodeAt(r + 1)], o = Zt[A.charCodeAt(r + 2)], a = Zt[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, tQ = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, rQ = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ht = 5, Ki = 11, gn = 2, sQ = Ki - ht, Nl = 65536 >> ht, nQ = 1 << ht, hn = nQ - 1, iQ = 1024 >> ht, oQ = Nl + iQ, aQ = oQ, lQ = 32, cQ = aQ + lQ, fQ = 65536 >> Ki, uQ = 1 << sQ, BQ = uQ - 1, Ko = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, dQ = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, gQ = function(A, e) {
  var t = eQ(A), r = Array.isArray(t) ? rQ(t) : new Uint32Array(t), s = Array.isArray(t) ? tQ(t) : new Uint16Array(t), n = 24, i = Ko(s, n / 2, r[4] / 2), o = r[5] === 2 ? Ko(s, (n + r[4]) / 2) : dQ(r, Math.ceil((n + r[4]) / 4));
  return new hQ(r[0], r[1], r[2], r[3], i, o);
}, hQ = (
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
          return t = cQ - fQ + (e >> Ki), t = this.index[t], t += e >> ht & BQ, t = this.index[t], t = (t << gn) + (e & hn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), To = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", pQ = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Or = 0; Or < To.length; Or++)
  pQ[To.charCodeAt(Or)] = Or;
var wQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Do = 50, QQ = 1, Vl = 2, Gl = 3, CQ = 4, vQ = 5, ko = 7, Pl = 8, Oo = 9, Ze = 10, Yn = 11, Mo = 12, jn = 13, UQ = 14, zt = 15, Zn = 16, Mr = 17, Vt = 18, FQ = 19, Ro = 20, zn = 21, Gt = 22, pn = 23, Qt = 24, ZA = 25, qt = 26, $t = 27, Ct = 28, bQ = 29, ct = 30, mQ = 31, Rr = 32, Nr = 33, qn = 34, $n = 35, Ai = 36, Cr = 37, ei = 38, as = 39, ls = 40, wn = 41, Jl = 42, yQ = 43, xQ = [9001, 65288], Xl = "!", $ = "×", Vr = "÷", ti = gQ(wQ), _e = [ct, Ai], ri = [QQ, Vl, Gl, vQ], Wl = [Ze, Pl], No = [$t, qt], EQ = ri.concat(Wl), Vo = [ei, as, ls, qn, $n], HQ = [zt, jn], IQ = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], s = [];
  return A.forEach(function(n, i) {
    var o = ti.get(n);
    if (o > Do ? (s.push(!0), o -= Do) : s.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), t.push(Zn);
    if (o === CQ || o === Yn) {
      if (i === 0)
        return r.push(i), t.push(ct);
      var a = t[i - 1];
      return EQ.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(ct));
    }
    if (r.push(i), o === mQ)
      return t.push(e === "strict" ? zn : Cr);
    if (o === Jl || o === bQ)
      return t.push(ct);
    if (o === yQ)
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
}, _Q = function(A, e, t, r, s) {
  if (t[r] === 0)
    return $;
  var n = r - 1;
  if (Array.isArray(s) && s[n] === !0)
    return $;
  var i = n - 1, o = n + 1, a = e[n], c = i >= 0 ? e[i] : 0, l = e[o];
  if (a === Vl && l === Gl)
    return $;
  if (ri.indexOf(a) !== -1)
    return Xl;
  if (ri.indexOf(l) !== -1 || Wl.indexOf(l) !== -1)
    return $;
  if (Go(n, e) === Pl)
    return Vr;
  if (ti.get(A[n]) === Yn || (a === Rr || a === Nr) && ti.get(A[o]) === Yn || a === ko || l === ko || a === Oo || [Ze, jn, zt].indexOf(a) === -1 && l === Oo || [Mr, Vt, FQ, Qt, Ct].indexOf(l) !== -1 || Go(n, e) === Gt || Qn(pn, Gt, n, e) || Qn([Mr, Vt], zn, n, e) || Qn(Mo, Mo, n, e))
    return $;
  if (a === Ze)
    return Vr;
  if (a === pn || l === pn)
    return $;
  if (l === Zn || a === Zn)
    return Vr;
  if ([jn, zt, zn].indexOf(l) !== -1 || a === UQ || c === Ai && HQ.indexOf(a) !== -1 || a === Ct && l === Ai || l === Ro || _e.indexOf(l) !== -1 && a === ZA || _e.indexOf(a) !== -1 && l === ZA || a === $t && [Cr, Rr, Nr].indexOf(l) !== -1 || [Cr, Rr, Nr].indexOf(a) !== -1 && l === qt || _e.indexOf(a) !== -1 && No.indexOf(l) !== -1 || No.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [$t, qt].indexOf(a) !== -1 && (l === ZA || [Gt, zt].indexOf(l) !== -1 && e[o + 1] === ZA) || // ( OP | HY ) × NU
  [Gt, zt].indexOf(a) !== -1 && l === ZA || // NU ×	(NU | SY | IS)
  a === ZA && [ZA, Ct, Qt].indexOf(l) !== -1)
    return $;
  if ([ZA, Ct, Qt, Mr, Vt].indexOf(l) !== -1)
    for (var f = n; f >= 0; ) {
      var B = e[f];
      if (B === ZA)
        return $;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if ([$t, qt].indexOf(l) !== -1)
    for (var f = [Mr, Vt].indexOf(a) !== -1 ? i : n; f >= 0; ) {
      var B = e[f];
      if (B === ZA)
        return $;
      if ([Ct, Qt].indexOf(B) !== -1)
        f--;
      else
        break;
    }
  if (ei === a && [ei, as, qn, $n].indexOf(l) !== -1 || [as, qn].indexOf(a) !== -1 && [as, ls].indexOf(l) !== -1 || [ls, $n].indexOf(a) !== -1 && l === ls || Vo.indexOf(a) !== -1 && [Ro, qt].indexOf(l) !== -1 || Vo.indexOf(l) !== -1 && a === $t || _e.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || a === Qt && _e.indexOf(l) !== -1 || _e.concat(ZA).indexOf(a) !== -1 && l === Gt && xQ.indexOf(A[o]) === -1 || _e.concat(ZA).indexOf(l) !== -1 && a === Vt)
    return $;
  if (a === wn && l === wn) {
    for (var C = t[n], Q = 1; C > 0 && (C--, e[C] === wn); )
      Q++;
    if (Q % 2 !== 0)
      return $;
  }
  return a === Rr && l === Nr ? $ : Vr;
}, LQ = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = IQ(A, e.lineBreak), r = t[0], s = t[1], n = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (s = s.map(function(o) {
    return [ZA, ct, Jl].indexOf(o) !== -1 ? Cr : o;
  }));
  var i = e.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && A[a] >= 19968 && A[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, SQ = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.codePoints = e, this.required = t === Xl, this.start = r, this.end = s;
    }
    return A.prototype.slice = function() {
      return CA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), KQ = function(A, e) {
  var t = Ps(A), r = LQ(t, e), s = r[0], n = r[1], i = r[2], o = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = $; c < o && (l = _Q(t, n, s, ++c, i)) === $; )
        ;
      if (l !== $ || c === o) {
        var f = new SQ(t, l, a, c);
        return a = c, { value: f, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, TQ = 1, DQ = 2, xr = 4, Po = 8, Cs = 10, Jo = 47, lr = 92, kQ = 9, OQ = 32, Gr = 34, Pt = 61, MQ = 35, RQ = 36, NQ = 37, Pr = 39, Jr = 40, Jt = 41, VQ = 95, WA = 45, GQ = 33, PQ = 60, JQ = 62, XQ = 64, WQ = 91, YQ = 93, jQ = 61, ZQ = 123, Xr = 63, zQ = 125, Xo = 124, qQ = 126, $Q = 128, Wo = 65533, Cn = 42, Bt = 43, AC = 44, eC = 58, tC = 59, vr = 46, rC = 0, sC = 8, nC = 11, iC = 14, oC = 31, aC = 127, Qe = -1, Yl = 48, jl = 97, Zl = 101, lC = 102, cC = 117, fC = 122, zl = 65, ql = 69, $l = 70, uC = 85, BC = 90, kA = function(A) {
  return A >= Yl && A <= 57;
}, dC = function(A) {
  return A >= 55296 && A <= 57343;
}, vt = function(A) {
  return kA(A) || A >= zl && A <= $l || A >= jl && A <= lC;
}, gC = function(A) {
  return A >= jl && A <= fC;
}, hC = function(A) {
  return A >= zl && A <= BC;
}, pC = function(A) {
  return gC(A) || hC(A);
}, wC = function(A) {
  return A >= $Q;
}, Wr = function(A) {
  return A === Cs || A === kQ || A === OQ;
}, vs = function(A) {
  return pC(A) || wC(A) || A === VQ;
}, Yo = function(A) {
  return vs(A) || kA(A) || A === WA;
}, QC = function(A) {
  return A >= rC && A <= sC || A === nC || A >= iC && A <= oC || A === aC;
}, je = function(A, e) {
  return A !== lr ? !1 : e !== Cs;
}, Yr = function(A, e, t) {
  return A === WA ? vs(e) || je(e, t) : vs(A) ? !0 : !!(A === lr && je(A, e));
}, vn = function(A, e, t) {
  return A === Bt || A === WA ? kA(e) ? !0 : e === vr && kA(t) : kA(A === vr ? e : A);
}, CC = function(A) {
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
}, vC = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, UC = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, FC = {
  type: 4
  /* COMMA_TOKEN */
}, bC = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, mC = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, yC = {
  type: 21
  /* COLUMN_TOKEN */
}, xC = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, EC = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, HC = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, IC = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, _C = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, jr = {
  type: 23
  /* BAD_URL_TOKEN */
}, LC = {
  type: 1
  /* BAD_STRING_TOKEN */
}, SC = {
  type: 25
  /* CDO_TOKEN */
}, KC = {
  type: 24
  /* CDC_TOKEN */
}, TC = {
  type: 26
  /* COLON_TOKEN */
}, DC = {
  type: 27
  /* SEMICOLON_TOKEN */
}, kC = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, OC = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, MC = {
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
        case Gr:
          return this.consumeStringToken(Gr);
        case MQ:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (Yo(t) || je(r, s)) {
            var n = Yr(t, r, s) ? DQ : TQ, i = this.consumeName();
            return { type: 5, value: i, flags: n };
          }
          break;
        case RQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), bC;
          break;
        case Pr:
          return this.consumeStringToken(Pr);
        case Jr:
          return vC;
        case Jt:
          return UC;
        case Cn:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), _C;
          break;
        case Bt:
          if (vn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case AC:
          return FC;
        case WA:
          var o = e, a = this.peekCodePoint(0), c = this.peekCodePoint(1);
          if (vn(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Yr(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === WA && c === JQ)
            return this.consumeCodePoint(), this.consumeCodePoint(), KC;
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
        case eC:
          return TC;
        case tC:
          return DC;
        case PQ:
          if (this.peekCodePoint(0) === GQ && this.peekCodePoint(1) === WA && this.peekCodePoint(2) === WA)
            return this.consumeCodePoint(), this.consumeCodePoint(), SC;
          break;
        case XQ:
          var f = this.peekCodePoint(0), B = this.peekCodePoint(1), C = this.peekCodePoint(2);
          if (Yr(f, B, C)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case WQ:
          return kC;
        case lr:
          if (je(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case YQ:
          return OC;
        case jQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), mC;
          break;
        case ZQ:
          return HC;
        case zQ:
          return IC;
        case cC:
        case uC:
          var Q = this.peekCodePoint(0), U = this.peekCodePoint(1);
          return Q === Bt && (vt(U) || U === Xr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Xo:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), xC;
          if (this.peekCodePoint(0) === Xo)
            return this.consumeCodePoint(), yC;
          break;
        case qQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), EC;
          break;
        case Qe:
          return si;
      }
      return Wr(e) ? (this.consumeWhiteSpace(), MC) : kA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : vs(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: CA(e) };
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
      for (var r = !1; t === Xr && e.length < 6; )
        e.push(t), t = this.consumeCodePoint(), r = !0;
      if (r) {
        var s = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Xr ? Yl : a;
        })), 16), n = parseInt(CA.apply(void 0, e.map(function(a) {
          return a === Xr ? $l : a;
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
      return e.toLowerCase() === "url" && this.peekCodePoint(0) === Jr ? (this.consumeCodePoint(), this.consumeUrlToken()) : this.peekCodePoint(0) === Jr ? (this.consumeCodePoint(), { type: 19, value: e }) : { type: 20, value: e };
    }, A.prototype.consumeUrlToken = function() {
      var e = [];
      if (this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe)
        return { type: 22, value: "" };
      var t = this.peekCodePoint(0);
      if (t === Pr || t === Gr) {
        var r = this.consumeStringToken(this.consumeCodePoint());
        return r.type === 0 && (this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Jt) ? (this.consumeCodePoint(), { type: 22, value: r.value }) : (this.consumeBadUrlRemnants(), jr);
      }
      for (; ; ) {
        var s = this.consumeCodePoint();
        if (s === Qe || s === Jt)
          return { type: 22, value: CA.apply(void 0, e) };
        if (Wr(s))
          return this.consumeWhiteSpace(), this.peekCodePoint(0) === Qe || this.peekCodePoint(0) === Jt ? (this.consumeCodePoint(), { type: 22, value: CA.apply(void 0, e) }) : (this.consumeBadUrlRemnants(), jr);
        if (s === Gr || s === Pr || s === Jr || QC(s))
          return this.consumeBadUrlRemnants(), jr;
        if (s === lr)
          if (je(s, this.peekCodePoint(0)))
            e.push(this.consumeEscapedCodePoint());
          else
            return this.consumeBadUrlRemnants(), jr;
        else
          e.push(s);
      }
    }, A.prototype.consumeWhiteSpace = function() {
      for (; Wr(this.peekCodePoint(0)); )
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
        if (s === Cs)
          return this._value.splice(0, r), LC;
        if (s === lr) {
          var n = this._value[r + 1];
          n !== Qe && n !== void 0 && (n === Cs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : je(s, n) && (t += this.consumeStringSlice(r), t += CA(this.consumeEscapedCodePoint()), r = -1));
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
      return [CC(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], s = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Yr(s, n, i)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return s === NQ ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (vt(e)) {
        for (var t = CA(e); vt(this.peekCodePoint(0)) && t.length < 6; )
          t += CA(this.consumeCodePoint());
        Wr(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || dC(r) || r > 1114111 ? Wo : r;
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
        if (r.type === 32 || NC(r, e))
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
), Er = function(A) {
  return A.type === 15;
}, kt = function(A) {
  return A.type === 17;
}, cA = function(A) {
  return A.type === 20;
}, RC = function(A) {
  return A.type === 0;
}, ni = function(A, e) {
  return cA(A) && A.value === e;
}, tc = function(A) {
  return A.type !== 31;
}, Tt = function(A) {
  return A.type !== 31 && A.type !== 4;
}, xe = function(A) {
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
}, NC = function(A, e) {
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
  if (Er(A))
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
      var t = VC[e.name];
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
  var f = c <= 0.5 ? c * (a + 1) : c + a - c * a, B = c * 2 - f, C = Un(B, f, o + 1 / 3), Q = Un(B, f, o), U = Un(B, f, o - 1 / 3);
  return qe(C * 255, Q * 255, U * 255, l);
}, VC = {
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
}, GC = {
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
}, PC = {
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
      for (var f = i - c, B = s[c - 1], C = (l - B) / (f + 1), Q = 1; Q <= f; Q++)
        s[c + Q - 1] = C * Q;
      c = null;
    }
  }
  return A.map(function(U, L) {
    var y = U.color;
    return { color: y, stop: Math.max(Math.min(1, s[L] / e), 0) };
  });
}, JC = function(A, e, t) {
  var r = e / 2, s = t / 2, n = gA(A[0], e) - r, i = s - gA(A[1], t);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, XC = function(A, e, t) {
  var r = typeof A == "number" ? A : JC(A, e, t), s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), n = e / 2, i = t / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
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
}, WC = function(A, e, t, r, s) {
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
}, YC = function(A, e) {
  var t = se(180), r = [];
  return xe(e).forEach(function(s, n) {
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
}, Zr = function(A, e) {
  var t = se(180), r = [];
  return xe(e).forEach(function(s, n) {
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
}, jC = function(A, e) {
  var t = se(180), r = [], s = 1, n = 0, i = 3, o = [];
  return xe(e).forEach(function(a, c) {
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
          var f = et.parse(A, B[1]), C = B[0];
          kt(C) && r.push({
            stop: { type: 16, number: C.number * 100, flags: C.flags },
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
}, cc = "closest-side", fc = "farthest-side", uc = "closest-corner", Bc = "farthest-corner", dc = "circle", gc = "ellipse", hc = "cover", pc = "contain", ZC = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return xe(e).forEach(function(i, o) {
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
}, zr = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return xe(e).forEach(function(i, o) {
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
}, zC = function(A) {
  return A.type === 1;
}, qC = function(A) {
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
function $C(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!wc[A.name]);
}
var wc = {
  "linear-gradient": YC,
  "-moz-linear-gradient": Zr,
  "-ms-linear-gradient": Zr,
  "-o-linear-gradient": Zr,
  "-webkit-linear-gradient": Zr,
  "radial-gradient": ZC,
  "-moz-radial-gradient": zr,
  "-ms-radial-gradient": zr,
  "-o-radial-gradient": zr,
  "-webkit-radial-gradient": zr,
  "-webkit-gradient": jC
}, Av = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Tt(r) && $C(r);
    }).map(function(r) {
      return Di.parse(A, r);
    });
  }
}, ev = {
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
}, tv = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return xe(e).map(function(t) {
      return t.filter(bA);
    }).map(rc);
  }
}, rv = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return xe(e).map(function(t) {
      return t.filter(cA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(sv);
  }
}, sv = function(A) {
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
var nv = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return xe(e).map(function(t) {
      return t.filter(iv);
    });
  }
}, iv = function(A) {
  return cA(A) || bA(A);
}, Ws = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, ov = Ws("top"), av = Ws("right"), lv = Ws("bottom"), cv = Ws("left"), Ys = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return rc(t.filter(bA));
    }
  };
}, fv = Ys("top-left"), uv = Ys("top-right"), Bv = Ys("bottom-right"), dv = Ys("bottom-left"), js = function(A) {
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
}, gv = js("top"), hv = js("right"), pv = js("bottom"), wv = js("left"), Zs = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return Er(t) ? t.number : 0;
    }
  };
}, Qv = Zs("top"), Cv = Zs("right"), vv = Zs("bottom"), Uv = Zs("left"), Fv = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, bv = {
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
}, mv = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(cA).reduce(
      function(t, r) {
        return t | yv(r.value);
      },
      0
      /* NONE */
    );
  }
}, yv = function(A) {
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
}, xv = {
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
}, Ev = {
  name: "letter-spacing",
  initialValue: "0",
  prefix: !1,
  type: 0,
  parse: function(A, e) {
    return e.type === 20 && e.value === "normal" ? 0 : e.type === 17 || e.type === 15 ? e.number : 0;
  }
}, Us;
(function(A) {
  A.NORMAL = "normal", A.STRICT = "strict";
})(Us || (Us = {}));
var Hv = {
  name: "line-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "strict":
        return Us.STRICT;
      case "normal":
      default:
        return Us.NORMAL;
    }
  }
}, Iv = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Aa = function(A, e) {
  return cA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : bA(A) ? gA(A, e) : e;
}, _v = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Di.parse(A, e);
  }
}, Lv = {
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
}, Sv = zs("top"), Kv = zs("right"), Tv = zs("bottom"), Dv = zs("left"), kv = {
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
}, Ov = {
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
}, Mv = qs("top"), Rv = qs("right"), Nv = qs("bottom"), Vv = qs("left"), Gv = {
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
}, Pv = {
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
}, Jv = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : xe(e).map(function(t) {
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
}, Xv = {
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
}, Wv = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = Zv[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, Yv = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, jv = function(A) {
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
}, Zv = {
  matrix: Yv,
  matrix3d: jv
}, ea = {
  type: 16,
  number: 50,
  flags: xr
}, zv = [ea, ea], qv = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(bA);
    return t.length !== 2 ? zv : [t[0], t[1]];
  }
}, $v = {
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
var A0 = {
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
}, e0 = {
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
}, t0 = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return kt(e) ? e.number : 1;
  }
}, r0 = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, s0 = {
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
}, n0 = {
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
}, i0 = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, o0 = {
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
}, a0 = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(cA).map(function(t) {
      return t.value;
    });
  }
}, l0 = {
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
}, xA = function(A, e) {
  return (A & e) !== 0;
}, c0 = {
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
}, f0 = {
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
}, u0 = {
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
}, B0 = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(Er).map(function(t) {
      return Qc.parse(A, t);
    });
  }
}, d0 = {
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
    var r = [], s = e.filter(RC);
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
}, g0 = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : xe(e).map(function(t) {
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
}, h0 = {
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
}, p0 = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, w0 = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Er(e) ? e.number : 0;
  }
}, Q0 = (
  /** @class */
  function() {
    function A(e, t) {
      var r, s;
      this.animationDuration = R(e, B0, t.animationDuration), this.backgroundClip = R(e, GC, t.backgroundClip), this.backgroundColor = R(e, PC, t.backgroundColor), this.backgroundImage = R(e, Av, t.backgroundImage), this.backgroundOrigin = R(e, ev, t.backgroundOrigin), this.backgroundPosition = R(e, tv, t.backgroundPosition), this.backgroundRepeat = R(e, rv, t.backgroundRepeat), this.backgroundSize = R(e, nv, t.backgroundSize), this.borderTopColor = R(e, ov, t.borderTopColor), this.borderRightColor = R(e, av, t.borderRightColor), this.borderBottomColor = R(e, lv, t.borderBottomColor), this.borderLeftColor = R(e, cv, t.borderLeftColor), this.borderTopLeftRadius = R(e, fv, t.borderTopLeftRadius), this.borderTopRightRadius = R(e, uv, t.borderTopRightRadius), this.borderBottomRightRadius = R(e, Bv, t.borderBottomRightRadius), this.borderBottomLeftRadius = R(e, dv, t.borderBottomLeftRadius), this.borderTopStyle = R(e, gv, t.borderTopStyle), this.borderRightStyle = R(e, hv, t.borderRightStyle), this.borderBottomStyle = R(e, pv, t.borderBottomStyle), this.borderLeftStyle = R(e, wv, t.borderLeftStyle), this.borderTopWidth = R(e, Qv, t.borderTopWidth), this.borderRightWidth = R(e, Cv, t.borderRightWidth), this.borderBottomWidth = R(e, vv, t.borderBottomWidth), this.borderLeftWidth = R(e, Uv, t.borderLeftWidth), this.boxShadow = R(e, g0, t.boxShadow), this.color = R(e, Fv, t.color), this.direction = R(e, bv, t.direction), this.display = R(e, mv, t.display), this.float = R(e, xv, t.cssFloat), this.fontFamily = R(e, n0, t.fontFamily), this.fontSize = R(e, i0, t.fontSize), this.fontStyle = R(e, l0, t.fontStyle), this.fontVariant = R(e, a0, t.fontVariant), this.fontWeight = R(e, o0, t.fontWeight), this.letterSpacing = R(e, Ev, t.letterSpacing), this.lineBreak = R(e, Hv, t.lineBreak), this.lineHeight = R(e, Iv, t.lineHeight), this.listStyleImage = R(e, _v, t.listStyleImage), this.listStylePosition = R(e, Lv, t.listStylePosition), this.listStyleType = R(e, ii, t.listStyleType), this.marginTop = R(e, Sv, t.marginTop), this.marginRight = R(e, Kv, t.marginRight), this.marginBottom = R(e, Tv, t.marginBottom), this.marginLeft = R(e, Dv, t.marginLeft), this.opacity = R(e, t0, t.opacity);
      var n = R(e, kv, t.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = R(e, Ov, t.overflowWrap), this.paddingTop = R(e, Mv, t.paddingTop), this.paddingRight = R(e, Rv, t.paddingRight), this.paddingBottom = R(e, Nv, t.paddingBottom), this.paddingLeft = R(e, Vv, t.paddingLeft), this.paintOrder = R(e, h0, t.paintOrder), this.position = R(e, Pv, t.position), this.textAlign = R(e, Gv, t.textAlign), this.textDecorationColor = R(e, r0, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = R(e, s0, (s = t.textDecorationLine) !== null && s !== void 0 ? s : t.textDecoration), this.textShadow = R(e, Jv, t.textShadow), this.textTransform = R(e, Xv, t.textTransform), this.transform = R(e, Wv, t.transform), this.transformOrigin = R(e, qv, t.transformOrigin), this.visibility = R(e, $v, t.visibility), this.webkitTextStrokeColor = R(e, p0, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = R(e, w0, t.webkitTextStrokeWidth), this.wordBreak = R(e, A0, t.wordBreak), this.zIndex = R(e, e0, t.zIndex);
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
      return xA(
        this.display,
        4
        /* INLINE */
      ) || xA(
        this.display,
        33554432
        /* INLINE_BLOCK */
      ) || xA(
        this.display,
        268435456
        /* INLINE_FLEX */
      ) || xA(
        this.display,
        536870912
        /* INLINE_GRID */
      ) || xA(
        this.display,
        67108864
        /* INLINE_LIST_ITEM */
      ) || xA(
        this.display,
        134217728
        /* INLINE_TABLE */
      );
    }, A;
  }()
), C0 = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = R(e, c0, t.content), this.quotes = R(e, d0, t.quotes);
    }
    return A;
  }()
), ra = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = R(e, f0, t.counterIncrement), this.counterReset = R(e, u0, t.counterReset);
    }
    return A;
  }()
), R = function(A, e, t) {
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
}, v0 = "data-html2canvas-debug", U0 = function(A) {
  var e = A.getAttribute(v0);
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
  var t = U0(A);
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
      this.styles = new Q0(e, window.getComputedStyle(t, null)), ci(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Gs(this.context, t), oi(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), F0 = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qr = 0; qr < sa.length; qr++)
  er[sa.charCodeAt(qr)] = qr;
var b0 = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = er[A.charCodeAt(r)], i = er[A.charCodeAt(r + 1)], o = er[A.charCodeAt(r + 2)], a = er[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, m0 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, y0 = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, pt = 5, ki = 11, Fn = 2, x0 = ki - pt, Cc = 65536 >> pt, E0 = 1 << pt, bn = E0 - 1, H0 = 1024 >> pt, I0 = Cc + H0, _0 = I0, L0 = 32, S0 = _0 + L0, K0 = 65536 >> ki, T0 = 1 << x0, D0 = T0 - 1, na = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, k0 = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, O0 = function(A, e) {
  var t = b0(A), r = Array.isArray(t) ? y0(t) : new Uint32Array(t), s = Array.isArray(t) ? m0(t) : new Uint16Array(t), n = 24, i = na(s, n / 2, r[4] / 2), o = r[5] === 2 ? na(s, (n + r[4]) / 2) : k0(r, Math.ceil((n + r[4]) / 4));
  return new M0(r[0], r[1], r[2], r[3], i, o);
}, M0 = (
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
          return t = S0 - K0 + (e >> ki), t = this.index[t], t += e >> pt & D0, t = this.index[t], t = (t << Fn) + (e & bn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R0 = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var $r = 0; $r < ia.length; $r++)
  R0[ia.charCodeAt($r)] = $r;
var N0 = 1, mn = 2, yn = 3, oa = 4, aa = 5, V0 = 7, la = 8, xn = 9, En = 10, ca = 11, fa = 12, ua = 13, Ba = 14, Hn = 15, G0 = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var n = A.charCodeAt(t++);
      (n & 64512) === 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, P0 = function() {
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
}, J0 = O0(F0), te = "×", In = "÷", X0 = function(A) {
  return J0.get(A);
}, W0 = function(A, e, t) {
  var r = t - 2, s = e[r], n = e[t - 1], i = e[t];
  if (n === mn && i === yn)
    return te;
  if (n === mn || n === yn || n === oa || i === mn || i === yn || i === oa)
    return In;
  if (n === la && [la, xn, ca, fa].indexOf(i) !== -1 || (n === ca || n === xn) && (i === xn || i === En) || (n === fa || n === En) && i === En || i === ua || i === aa || i === V0 || n === N0)
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
}, Y0 = function(A) {
  var e = G0(A), t = e.length, r = 0, s = 0, n = e.map(X0);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = te; r < t && (i = W0(e, n, ++r)) === te; )
        ;
      if (i !== te || r === t) {
        var o = P0.apply(null, e.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, j0 = function(A) {
  for (var e = Y0(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Z0 = function(A) {
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
}, z0 = function(A) {
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
}, q0 = function() {
  return typeof new Image().crossOrigin < "u";
}, $0 = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, AU = function(A) {
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
}, eU = function(A) {
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
    var A = Z0(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && z0(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = AU(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? eU(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = q0();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = $0();
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
), tU = function(A, e, t, r) {
  var s = nU(e, t), n = [], i = 0;
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
        n.push(new ur(o, rU(A, r))), r = f;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, rU = function(A, e) {
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
  return j0(A);
}, sU = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return oU(A, e);
}, nU = function(A, e) {
  return e.letterSpacing !== 0 ? Oi(A) : sU(A, e);
}, iU = [32, 160, 4961, 65792, 65793, 4153, 4241], oU = function(A, e) {
  for (var t = KQ(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], s, n = function() {
    if (s.value) {
      var i = s.value.slice(), o = Ps(i), a = "";
      o.forEach(function(c) {
        iU.indexOf(c) === -1 ? a += CA(c) : (a.length && r.push(a), r.push(CA(c)), a = "");
      }), a.length && r.push(a);
    }
  }; !(s = t.next()).done; )
    n();
  return r;
}, aU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = lU(t.data, r.textTransform), this.textBounds = tU(e, this.text, r, t);
    }
    return A;
  }()
), lU = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(cU, fU);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, cU = /(^|\s|:|-|\(|\))([a-z])/g, fU = function(A, e, t) {
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
), uU = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], BU = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], dU = function(A) {
  return A.width > A.height ? new Ge(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ge(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, gU = function(A) {
  var e = A.type === hU ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Fs = "checkbox", bs = "radio", hU = "password", pa = 707406591, Mi = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      switch (s.type = r.type.toLowerCase(), s.checked = r.checked, s.value = gU(r), (s.type === Fs || s.type === bs) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = dU(s.bounds)), s.type) {
        case Fs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = uU;
          break;
        case bs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = BU;
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
), yc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(Ee)
), xc = (
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
), pU = ["OL", "UL", "MENU"], cs = function(A, e, t, r) {
  for (var s = e.firstChild, n = void 0; s; s = n)
    if (n = s.nextSibling, Ic(s) && s.data.trim().length > 0)
      t.textNodes.push(new aU(A, s, t.styles));
    else if (Ht(s))
      if (Kc(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(o) {
          return cs(A, o, t, r);
        });
      else {
        var i = Ec(A, s);
        i.styles.isVisible() && (wU(s, i, r) ? i.flags |= 4 : QU(i.styles) && (i.flags |= 2), pU.indexOf(s.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), s.slot, s.shadowRoot ? cs(A, s.shadowRoot, i, r) : !ms(s) && !_c(s) && !ys(s) && cs(A, s, i, r));
      }
}, Ec = function(A, e) {
  return fi(e) ? new vc(A, e) : Lc(e) ? new Uc(A, e) : _c(e) ? new Fc(A, e) : CU(e) ? new bc(A, e) : vU(e) ? new li(A, e) : UU(e) ? new Mi(A, e) : ys(e) ? new mc(A, e) : ms(e) ? new yc(A, e) : Sc(e) ? new xc(A, e) : new Ee(A, e);
}, Hc = function(A, e) {
  var t = Ec(A, e);
  return t.flags |= 4, cs(A, e, t, t), t;
}, wU = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Ri(A) && t.styles.isTransparent();
}, QU = function(A) {
  return A.isPositioned() || A.isFloating();
}, Ic = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Ht = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, ci = function(A) {
  return Ht(A) && typeof A.style < "u" && !fs(A);
}, fs = function(A) {
  return typeof A.className == "object";
}, CU = function(A) {
  return A.tagName === "LI";
}, vU = function(A) {
  return A.tagName === "OL";
}, UU = function(A) {
  return A.tagName === "INPUT";
}, FU = function(A) {
  return A.tagName === "HTML";
}, _c = function(A) {
  return A.tagName === "svg";
}, Ri = function(A) {
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
}, bU = function(A) {
  return A.tagName === "SCRIPT";
}, ms = function(A) {
  return A.tagName === "TEXTAREA";
}, ys = function(A) {
  return A.tagName === "SELECT";
}, Kc = function(A) {
  return A.tagName === "SLOT";
}, Ca = function(A) {
  return A.tagName.indexOf("-") > 0;
}, mU = (
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
}, yU = {
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
}, xU = {
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
}, xt = 1, Xe = 2, We = 4, tr = 8, Le = function(A, e, t, r, s, n) {
  if (A < -9999 || A > 9999)
    return Ur(A, 4, s.length > 0);
  var i = Math.abs(A), o = s;
  if (i === 0)
    return e[0] + o;
  for (var a = 0; i > 0 && a <= 4; a++) {
    var c = i % 10;
    c === 0 && xA(n, xt) && o !== "" ? o = e[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && xA(n, Xe) || c === 1 && a === 1 && xA(n, We) && A > 100 || c === 1 && a > 1 && xA(n, tr) ? o = e[c] + (a > 0 ? t[a - 1] : "") + o : c === 1 && a > 0 && (o = t[a - 1] + o), i = Math.floor(i / 10);
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
      return Le(A, "零壹貳參肆伍陸柒捌玖", ba, "負", s, xt | Xe | We | tr);
    case 42:
      return Le(A, "零一二三四五六七八九", Fa, "负", s, Xe | We | tr);
    case 41:
      return Le(A, "零壹贰叁肆伍陆柒捌玖", ba, "负", s, xt | Xe | We | tr);
    case 26:
      return Le(A, "〇一二三四五六七八九", "十百千万", ma, s, 0);
    case 25:
      return Le(A, "零壱弐参四伍六七八九", "拾百千万", ma, s, xt | Xe | We);
    case 31:
      return Le(A, "영일이삼사오육칠팔구", "십백천만", _n, n, xt | Xe | We);
    case 33:
      return Le(A, "零一二三四五六七八九", "十百千萬", _n, n, 0);
    case 32:
      return Le(A, "零壹貳參四五六七八九", "拾百千", _n, n, xt | Xe | We);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return Ut(A, 1, 19999, xU, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return Ut(A, 1, 10999, yU, 3, r);
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
}, Dc = "data-html2canvas-ignore", ya = (
  /** @class */
  function() {
    function A(e, t, r) {
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new mU(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, s = EU(e, t);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, o = s.contentWindow, a = o.document, c = _U(s).then(function() {
        return VA(r, void 0, void 0, function() {
          var l, f;
          return DA(this, function(B) {
            switch (B.label) {
              case 0:
                return this.scrolledElements.forEach(TU), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), l = this.options.onclone, f = this.clonedReferenceElement, typeof f > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                B.sent(), B.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, IU(a)] : [3, 4];
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
      return a.open(), a.write(SU(document.doctype) + "<html></html>"), KU(this.referenceElement.ownerDocument, n, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
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
      (!Ht(t) || !bU(t) && !t.hasAttribute(Dc) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ht(t) || !Qa(t)) && e.appendChild(this.cloneNode(t, r));
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
      if (r && Ht(e) && (ci(e) || fs(e))) {
        var s = this.createElementClone(e);
        s.style.transitionProperty = "none";
        var n = r.getComputedStyle(e), i = r.getComputedStyle(e, ":before"), o = r.getComputedStyle(e, ":after");
        this.referenceElement === e && ci(s) && (this.clonedReferenceElement = s), Ri(s) && OU(s);
        var a = this.counters.parse(new ra(this.context, n)), c = this.resolvePseudoContent(e, s, i, Br.BEFORE);
        Ca(e) && (t = !0), wa(e) || this.cloneChildNodes(e, s, t), c && s.insertBefore(c, s.firstChild);
        var l = this.resolvePseudoContent(e, s, o, Br.AFTER);
        return l && s.appendChild(l), this.counters.pop(a), (n && (this.options.copyStyles || fs(e)) && !Sc(e) || t) && Ln(n, s), (e.scrollTop !== 0 || e.scrollLeft !== 0) && this.scrolledElements.push([s, e.scrollLeft, e.scrollTop]), (ms(e) || ys(e)) && (ms(s) || ys(s)) && (s.value = e.value), s;
      }
      return e.cloneNode(!1);
    }, A.prototype.resolvePseudoContent = function(e, t, r, s) {
      var n = this;
      if (r) {
        var i = r.content, o = t.ownerDocument;
        if (!(!o || !i || i === "none" || i === "-moz-alt-content" || r.display === "none")) {
          this.counters.parse(new ra(this.context, r));
          var a = new C0(this.context, r), c = o.createElement("html2canvaspseudoelement");
          Ln(r, c), a.content.forEach(function(f) {
            if (f.type === 0)
              c.appendChild(o.createTextNode(f.value));
            else if (f.type === 22) {
              var B = o.createElement("img");
              B.src = f.value, B.style.opacity = "1", c.appendChild(B);
            } else if (f.type === 18) {
              if (f.name === "attr") {
                var C = f.values.filter(cA);
                C.length && c.appendChild(o.createTextNode(e.getAttribute(C[0].value) || ""));
              } else if (f.name === "counter") {
                var Q = f.values.filter(Tt), U = Q[0], L = Q[1];
                if (U && cA(U)) {
                  var y = n.counters.getCounterValue(U.value), b = L && cA(L) ? ii.parse(n.context, L.value) : 3;
                  c.appendChild(o.createTextNode(Ur(y, b, !1)));
                }
              } else if (f.name === "counters") {
                var g = f.values.filter(Tt), U = g[0], m = g[1], L = g[2];
                if (U && cA(U)) {
                  var T = n.counters.getCounterValues(U.value), S = L && cA(L) ? ii.parse(n.context, L.value) : 3, X = m && m.type === 0 ? m.value : "", Z = T.map(function(UA) {
                    return Ur(UA, S, !1);
                  }).join(X);
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
          return fs(t) ? t.className.baseValue += l : t.className += l, c;
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
var EU = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Dc, "true"), A.body.appendChild(t), t;
}, HU = function(A) {
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
}, IU = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(HU));
}, _U = function(A) {
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
}, LU = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ln = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    LU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, SU = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, KU = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, TU = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, DU = ":before", kU = ":after", ui = "___html2canvas___pseudoelement_before", Bi = "___html2canvas___pseudoelement_after", xa = `{
    content: "" !important;
    display: none !important;
}`, OU = function(A) {
  MU(A, "." + ui + DU + xa + `
         .` + Bi + kU + xa);
}, MU = function(A, e) {
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
), RU = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Kn(e) || PU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
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
                }, l.onerror = c, (JU(n) || r) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(function() {
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
), NU = /^data:image\/svg\+xml/i, VU = /^data:image\/.*;base64,/i, GU = /^data:image\/.*/i, PU = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !XU(A);
}, Sn = function(A) {
  return GU.test(A);
}, JU = function(A) {
  return VU.test(A);
}, Kn = function(A) {
  return A.substr(0, 4) === "blob";
}, XU = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || NU.test(A);
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
}, As = (
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
}, WU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, s = Ar(t.borderTopLeftRadius, r.width, r.height), n = s[0], i = s[1], o = Ar(t.borderTopRightRadius, r.width, r.height), a = o[0], c = o[1], l = Ar(t.borderBottomRightRadius, r.width, r.height), f = l[0], B = l[1], C = Ar(t.borderBottomLeftRadius, r.width, r.height), Q = C[0], U = C[1], L = [];
      L.push((n + a) / r.width), L.push((Q + f) / r.width), L.push((i + U) / r.height), L.push((c + B) / r.height);
      var y = Math.max.apply(Math, L);
      y > 1 && (n /= y, i /= y, a /= y, c /= y, f /= y, B /= y, Q /= y, U /= y);
      var b = r.width - a, g = r.height - B, m = r.width - f, T = r.height - U, S = t.borderTopWidth, X = t.borderRightWidth, Z = t.borderBottomWidth, G = t.borderLeftWidth, oA = gA(t.paddingTop, e.bounds.width), UA = gA(t.paddingRight, e.bounds.width), EA = gA(t.paddingBottom, e.bounds.width), eA = gA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + G / 3, r.top + S / 3, n - G / 3, i - S / 3, iA.TOP_LEFT) : new O(r.left + G / 3, r.top + S / 3), this.topRightBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + b, r.top + S / 3, a - X / 3, c - S / 3, iA.TOP_RIGHT) : new O(r.left + r.width - X / 3, r.top + S / 3), this.bottomRightBorderDoubleOuterBox = f > 0 || B > 0 ? hA(r.left + m, r.top + g, f - X / 3, B - Z / 3, iA.BOTTOM_RIGHT) : new O(r.left + r.width - X / 3, r.top + r.height - Z / 3), this.bottomLeftBorderDoubleOuterBox = Q > 0 || U > 0 ? hA(r.left + G / 3, r.top + T, Q - G / 3, U - Z / 3, iA.BOTTOM_LEFT) : new O(r.left + G / 3, r.top + r.height - Z / 3), this.topLeftBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + G * 2 / 3, r.top + S * 2 / 3, n - G * 2 / 3, i - S * 2 / 3, iA.TOP_LEFT) : new O(r.left + G * 2 / 3, r.top + S * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + b, r.top + S * 2 / 3, a - X * 2 / 3, c - S * 2 / 3, iA.TOP_RIGHT) : new O(r.left + r.width - X * 2 / 3, r.top + S * 2 / 3), this.bottomRightBorderDoubleInnerBox = f > 0 || B > 0 ? hA(r.left + m, r.top + g, f - X * 2 / 3, B - Z * 2 / 3, iA.BOTTOM_RIGHT) : new O(r.left + r.width - X * 2 / 3, r.top + r.height - Z * 2 / 3), this.bottomLeftBorderDoubleInnerBox = Q > 0 || U > 0 ? hA(r.left + G * 2 / 3, r.top + T, Q - G * 2 / 3, U - Z * 2 / 3, iA.BOTTOM_LEFT) : new O(r.left + G * 2 / 3, r.top + r.height - Z * 2 / 3), this.topLeftBorderStroke = n > 0 || i > 0 ? hA(r.left + G / 2, r.top + S / 2, n - G / 2, i - S / 2, iA.TOP_LEFT) : new O(r.left + G / 2, r.top + S / 2), this.topRightBorderStroke = n > 0 || i > 0 ? hA(r.left + b, r.top + S / 2, a - X / 2, c - S / 2, iA.TOP_RIGHT) : new O(r.left + r.width - X / 2, r.top + S / 2), this.bottomRightBorderStroke = f > 0 || B > 0 ? hA(r.left + m, r.top + g, f - X / 2, B - Z / 2, iA.BOTTOM_RIGHT) : new O(r.left + r.width - X / 2, r.top + r.height - Z / 2), this.bottomLeftBorderStroke = Q > 0 || U > 0 ? hA(r.left + G / 2, r.top + T, Q - G / 2, U - Z / 2, iA.BOTTOM_LEFT) : new O(r.left + G / 2, r.top + r.height - Z / 2), this.topLeftBorderBox = n > 0 || i > 0 ? hA(r.left, r.top, n, i, iA.TOP_LEFT) : new O(r.left, r.top), this.topRightBorderBox = a > 0 || c > 0 ? hA(r.left + b, r.top, a, c, iA.TOP_RIGHT) : new O(r.left + r.width, r.top), this.bottomRightBorderBox = f > 0 || B > 0 ? hA(r.left + m, r.top + g, f, B, iA.BOTTOM_RIGHT) : new O(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = Q > 0 || U > 0 ? hA(r.left, r.top + T, Q, U, iA.BOTTOM_LEFT) : new O(r.left, r.top + r.height), this.topLeftPaddingBox = n > 0 || i > 0 ? hA(r.left + G, r.top + S, Math.max(0, n - G), Math.max(0, i - S), iA.TOP_LEFT) : new O(r.left + G, r.top + S), this.topRightPaddingBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width - X), r.top + S, b > r.width + X ? 0 : Math.max(0, a - X), Math.max(0, c - S), iA.TOP_RIGHT) : new O(r.left + r.width - X, r.top + S), this.bottomRightPaddingBox = f > 0 || B > 0 ? hA(r.left + Math.min(m, r.width - G), r.top + Math.min(g, r.height - Z), Math.max(0, f - X), Math.max(0, B - Z), iA.BOTTOM_RIGHT) : new O(r.left + r.width - X, r.top + r.height - Z), this.bottomLeftPaddingBox = Q > 0 || U > 0 ? hA(r.left + G, r.top + Math.min(T, r.height - Z), Math.max(0, Q - G), Math.max(0, U - Z), iA.BOTTOM_LEFT) : new O(r.left + G, r.top + r.height - Z), this.topLeftContentBox = n > 0 || i > 0 ? hA(r.left + G + eA, r.top + S + oA, Math.max(0, n - (G + eA)), Math.max(0, i - (S + oA)), iA.TOP_LEFT) : new O(r.left + G + eA, r.top + S + oA), this.topRightContentBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width + G + eA), r.top + S + oA, b > r.width + G + eA ? 0 : a - G + eA, c - (S + oA), iA.TOP_RIGHT) : new O(r.left + r.width - (X + UA), r.top + S + oA), this.bottomRightContentBox = f > 0 || B > 0 ? hA(r.left + Math.min(m, r.width - (G + eA)), r.top + Math.min(g, r.height + S + oA), Math.max(0, f - (X + UA)), B - (Z + EA), iA.BOTTOM_RIGHT) : new O(r.left + r.width - (X + UA), r.top + r.height - (Z + EA)), this.bottomLeftContentBox = Q > 0 || U > 0 ? hA(r.left + G + eA, r.top + T, Math.max(0, Q - (G + eA)), U - (Z + EA), iA.BOTTOM_LEFT) : new O(r.left + G + eA, r.top + r.height - (Z + EA));
    }
    return A;
  }()
), iA;
(function(A) {
  A[A.TOP_LEFT = 0] = "TOP_LEFT", A[A.TOP_RIGHT = 1] = "TOP_RIGHT", A[A.BOTTOM_RIGHT = 2] = "BOTTOM_RIGHT", A[A.BOTTOM_LEFT = 3] = "BOTTOM_LEFT";
})(iA || (iA = {}));
var hA = function(A, e, t, r, s) {
  var n = 4 * ((Math.sqrt(2) - 1) / 3), i = t * n, o = r * n, a = A + t, c = e + r;
  switch (s) {
    case iA.TOP_LEFT:
      return new As(new O(A, c), new O(A, c - o), new O(a - i, e), new O(a, e));
    case iA.TOP_RIGHT:
      return new As(new O(A, e), new O(A + i, e), new O(a, c - o), new O(a, c));
    case iA.BOTTOM_RIGHT:
      return new As(new O(a, e), new O(a, e + o), new O(A + i, c), new O(A, c));
    case iA.BOTTOM_LEFT:
    default:
      return new As(new O(a, c), new O(a - i, c), new O(A, e + o), new O(A, e));
  }
}, xs = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, YU = function(A) {
  return [
    A.topLeftContentBox,
    A.topRightContentBox,
    A.bottomRightContentBox,
    A.bottomLeftContentBox
  ];
}, Es = function(A) {
  return [
    A.topLeftPaddingBox,
    A.topRightPaddingBox,
    A.bottomRightPaddingBox,
    A.bottomLeftPaddingBox
  ];
}, jU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.offsetX = e, this.offsetY = t, this.matrix = r, this.type = 0, this.target = 6;
    }
    return A;
  }()
), es = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.path = e, this.target = t, this.type = 1;
    }
    return A;
  }()
), ZU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), zU = function(A) {
  return A.type === 0;
}, Oc = function(A) {
  return A.type === 1;
}, qU = function(A) {
  return A.type === 2;
}, Ea = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, $U = function(A, e, t, r, s) {
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
}, Mc = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.element = e, this.inlineLevel = [], this.nonInlineLevel = [], this.negativeZIndex = [], this.zeroOrAutoZIndexOrTransformedOrOpacity = [], this.positiveZIndex = [], this.nonPositionedFloats = [], this.nonPositionedInlineLevel = [];
    }
    return A;
  }()
), Rc = (
  /** @class */
  function() {
    function A(e, t) {
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new WU(this.container), this.container.styles.opacity < 1 && this.effects.push(new ZU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new jU(r, s, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = xs(this.curves), o = Es(this.curves);
        Ea(i, o) ? this.effects.push(new es(
          i,
          6
          /* CONTENT */
        )) : (this.effects.push(new es(
          i,
          2
          /* BACKGROUND_BORDERS */
        )), this.effects.push(new es(
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
            var i = xs(r.curves), o = Es(r.curves);
            Ea(i, o) || s.unshift(new es(
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
        return xA(a.target, e);
      });
    }, A;
  }()
), di = function(A, e, t, r) {
  A.container.elements.forEach(function(s) {
    var n = xA(
      s.flags,
      4
      /* CREATES_REAL_STACKING_CONTEXT */
    ), i = xA(
      s.flags,
      2
      /* CREATES_STACKING_CONTEXT */
    ), o = new Rc(s, A);
    xA(
      s.styles.display,
      2048
      /* LIST_ITEM */
    ) && r.push(o);
    var a = xA(
      s.flags,
      8
      /* IS_LIST_OWNER */
    ) ? [] : r;
    if (n || i) {
      var c = n || s.styles.isPositioned() ? t : e, l = new Mc(o);
      if (s.styles.isPositioned() || s.styles.opacity < 1 || s.styles.isTransformed()) {
        var f = s.styles.zIndex.order;
        if (f < 0) {
          var B = 0;
          c.negativeZIndex.some(function(Q, U) {
            return f > Q.element.container.styles.zIndex.order ? (B = U, !1) : B > 0;
          }), c.negativeZIndex.splice(B, 0, l);
        } else if (f > 0) {
          var C = 0;
          c.positiveZIndex.some(function(Q, U) {
            return f >= Q.element.container.styles.zIndex.order ? (C = U + 1, !1) : C > 0;
          }), c.positiveZIndex.splice(C, 0, l);
        } else
          c.zeroOrAutoZIndexOrTransformedOrOpacity.push(l);
      } else
        s.styles.isFloating() ? c.nonPositionedFloats.push(l) : c.nonPositionedInlineLevel.push(l);
      di(o, l, n ? l : t, a);
    } else
      s.styles.isInlineLevel() ? e.inlineLevel.push(o) : e.nonInlineLevel.push(o), di(o, e, t, a);
    xA(
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
}, AF = function(A) {
  var e = new Rc(A, null), t = new Mc(e), r = [];
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
}, eF = function(A, e) {
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
}, tF = function(A, e) {
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
}, rF = function(A, e) {
  switch (e) {
    case 0:
      return ts(A.topLeftBorderStroke, A.topRightBorderStroke);
    case 1:
      return ts(A.topRightBorderStroke, A.bottomRightBorderStroke);
    case 2:
      return ts(A.bottomRightBorderStroke, A.bottomLeftBorderStroke);
    case 3:
    default:
      return ts(A.bottomLeftBorderStroke, A.topLeftBorderStroke);
  }
}, ts = function(A, e) {
  var t = [];
  return re(A) ? t.push(A.subdivide(0.5, !1)) : t.push(A), re(e) ? t.push(e.subdivide(0.5, !0)) : t.push(e), t;
}, ne = function(A, e, t, r) {
  var s = [];
  return re(A) ? s.push(A.subdivide(0.5, !1)) : s.push(A), re(t) ? s.push(t.subdivide(0.5, !0)) : s.push(t), re(r) ? s.push(r.subdivide(0.5, !0).reverse()) : s.push(r), re(e) ? s.push(e.subdivide(0.5, !1).reverse()) : s.push(e), s;
}, Vc = function(A) {
  var e = A.bounds, t = A.styles;
  return e.add(t.borderLeftWidth, t.borderTopWidth, -(t.borderRightWidth + t.borderLeftWidth), -(t.borderTopWidth + t.borderBottomWidth));
}, Hs = function(A) {
  var e = A.styles, t = A.bounds, r = gA(e.paddingLeft, t.width), s = gA(e.paddingRight, t.width), n = gA(e.paddingTop, t.width), i = gA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + s), -(e.borderTopWidth + e.borderBottomWidth + n + i));
}, sF = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Hs(e) : Vc(e);
}, nF = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? Hs(e) : Vc(e);
}, Tn = function(A, e, t) {
  var r = sF(Et(A.styles.backgroundOrigin, e), A), s = nF(Et(A.styles.backgroundClip, e), A), n = iF(Et(A.styles.backgroundSize, e), t, r), i = n[0], o = n[1], a = Ar(Et(A.styles.backgroundPosition, e), r.width - i, r.height - o), c = oF(Et(A.styles.backgroundRepeat, e), a, n, r, s), l = Math.round(r.left + a[0]), f = Math.round(r.top + a[1]);
  return [c, l, f, i, o];
}, bt = function(A) {
  return cA(A) && A.value === Lt.AUTO;
}, rs = function(A) {
  return typeof A == "number";
}, iF = function(A, e, t) {
  var r = e[0], s = e[1], n = e[2], i = A[0], o = A[1];
  if (!i)
    return [0, 0];
  if (bA(i) && o && bA(o))
    return [gA(i, t.width), gA(o, t.height)];
  var a = rs(n);
  if (cA(i) && (i.value === Lt.CONTAIN || i.value === Lt.COVER)) {
    if (rs(n)) {
      var c = t.width / t.height;
      return c < n != (i.value === Lt.COVER) ? [t.width, t.width / n] : [t.height * n, t.height];
    }
    return [t.width, t.height];
  }
  var l = rs(r), f = rs(s), B = l || f;
  if (bt(i) && (!o || bt(o))) {
    if (l && f)
      return [r, s];
    if (!a && !B)
      return [t.width, t.height];
    if (B && a) {
      var C = l ? r : s * n, Q = f ? s : r / n;
      return [C, Q];
    }
    var U = l ? r : t.width, L = f ? s : t.height;
    return [U, L];
  }
  if (a) {
    var y = 0, b = 0;
    return bA(i) ? y = gA(i, t.width) : bA(o) && (b = gA(o, t.height)), bt(i) ? y = b * n : (!o || bt(o)) && (b = y / n), [y, b];
  }
  var g = null, m = null;
  if (bA(i) ? g = gA(i, t.width) : o && bA(o) && (m = gA(o, t.height)), g !== null && (!o || bt(o)) && (m = l && f ? g / r * s : t.height), m !== null && bt(i) && (g = l && f ? m / s * r : t.width), g !== null && m !== null)
    return [g, m];
  throw new Error("Unable to calculate background-size for element");
}, Et = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, oF = function(A, e, t, r, s) {
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
}, aF = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ia = "Hidden Text", lF = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = aF, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Ia)), r.appendChild(n), r.appendChild(s);
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
), cF = 1e4, fF = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s._activeEffects = [], s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), r.canvas || (s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px"), s.fontMetrics = new lF(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), s;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(s) {
        return r.applyEffect(s);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), qU(t) && (this.ctx.globalAlpha = t.opacity), zU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Oc(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
              if (xA(
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
      }).join(""), s = hF(t.fontFamily).join(", "), n = Er(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, n, s].join(" "),
        s,
        n
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return VA(this, void 0, void 0, function() {
        var s, n, i, o, a, c, l, f, B = this;
        return DA(this, function(C) {
          return s = this.createFontStyle(r), n = s[0], i = s[1], o = s[2], this.ctx.font = n, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, o), c = a.baseline, l = a.middle, f = r.paintOrder, t.textBounds.forEach(function(Q) {
            f.forEach(function(U) {
              switch (U) {
                case 0:
                  B.ctx.fillStyle = IA(r.color), B.renderTextWithLetterSpacing(Q, r.letterSpacing, c);
                  var L = r.textShadow;
                  L.length && Q.text.trim().length && (L.slice(0).reverse().forEach(function(y) {
                    B.ctx.shadowColor = IA(y.color), B.ctx.shadowOffsetX = y.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = y.offsetY.number * B.options.scale, B.ctx.shadowBlur = y.blur.number, B.renderTextWithLetterSpacing(Q, r.letterSpacing, c);
                  }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), r.textDecorationLine.length && (B.ctx.fillStyle = IA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(y) {
                    switch (y) {
                      case 1:
                        B.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top + c), Q.bounds.width, 1);
                        break;
                      case 2:
                        B.ctx.fillRect(Q.bounds.left, Math.round(Q.bounds.top), Q.bounds.width, 1);
                        break;
                      case 3:
                        B.ctx.fillRect(Q.bounds.left, Math.ceil(Q.bounds.top + l), Q.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && Q.text.trim().length && (B.ctx.strokeStyle = IA(r.webkitTextStrokeColor), B.ctx.lineWidth = r.webkitTextStrokeWidth, B.ctx.lineJoin = window.chrome ? "miter" : "round", B.ctx.strokeText(Q.text, Q.bounds.left, Q.bounds.top + c)), B.ctx.strokeStyle = "", B.ctx.lineWidth = 0, B.ctx.lineJoin = "miter";
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
        var n = Hs(t), i = Es(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, t.intrinsicWidth, t.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, b, b, c, l, f, B, m, C, Q, T, U, L, y, b, g, m, T;
        return DA(this, function(S) {
          switch (S.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, s = t.curves, n = r.styles, i = 0, o = r.textNodes, S.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [4, this.renderTextNode(a, n)]) : [3, 4];
            case 2:
              S.sent(), S.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof vc)) return [3, 8];
              S.label = 5;
            case 5:
              return S.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return b = S.sent(), this.renderReplacedElement(r, s, b), [3, 8];
            case 7:
              return S.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Uc && this.renderReplacedElement(r, s, r.canvas), !(r instanceof Fc)) return [3, 12];
              S.label = 9;
            case 9:
              return S.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return b = S.sent(), this.renderReplacedElement(r, s, b), [3, 12];
            case 11:
              return S.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof xc && r.tree ? (c = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, c.render(r.tree)]) : [3, 14];
            case 13:
              l = S.sent(), r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), S.label = 14;
            case 14:
              if (r instanceof Mi && (f = Math.min(r.bounds.width, r.bounds.height), r.type === Fs ? r.checked && (this.ctx.save(), this.path([
                new O(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79),
                new O(r.bounds.left + f * 0.16, r.bounds.top + f * 0.5549),
                new O(r.bounds.left + f * 0.27347, r.bounds.top + f * 0.44071),
                new O(r.bounds.left + f * 0.39694, r.bounds.top + f * 0.5649),
                new O(r.bounds.left + f * 0.72983, r.bounds.top + f * 0.23),
                new O(r.bounds.left + f * 0.84, r.bounds.top + f * 0.34085),
                new O(r.bounds.left + f * 0.39363, r.bounds.top + f * 0.79)
              ]), this.ctx.fillStyle = IA(pa), this.ctx.fill(), this.ctx.restore()) : r.type === bs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + f / 2, r.bounds.top + f / 2, f / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = IA(pa), this.ctx.fill(), this.ctx.restore())), uF(r) && r.value.length) {
                switch (B = this.createFontStyle(n), m = B[0], C = B[1], Q = this.fontMetrics.getMetrics(m, C).baseline, this.ctx.font = m, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = dF(r.styles.textAlign), T = Hs(r), U = 0, r.styles.textAlign) {
                  case 1:
                    U += T.width / 2;
                    break;
                  case 2:
                    U += T.width;
                    break;
                }
                L = T.add(U, 0, 0, -T.height / 2 + 1), this.ctx.save(), this.path([
                  new O(T.left, T.top),
                  new O(T.left + T.width, T.top),
                  new O(T.left + T.width, T.top + T.height),
                  new O(T.left, T.top + T.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new ur(r.value, L), n.letterSpacing, Q), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!xA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (y = r.styles.listStyleImage, y.type !== 0) return [3, 18];
              b = void 0, g = y.url, S.label = 15;
            case 15:
              return S.trys.push([15, 17, , 18]), [4, this.context.cache.match(g)];
            case 16:
              return b = S.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [3, 18];
            case 17:
              return S.sent(), this.context.logger.error("Error loading list-style-image " + g), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (m = this.createFontStyle(n)[0], this.ctx.font = m, this.ctx.fillStyle = IA(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", T = new Ge(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Aa(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new ur(t.listValue, T), n.letterSpacing, Aa(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), S.label = 20;
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
        var r, s, y, n, i, y, o, a, y, c, l, y, f, B, y, C, Q, y, U, L, y;
        return DA(this, function(b) {
          switch (b.label) {
            case 0:
              if (xA(
                t.element.container.flags,
                16
                /* DEBUG_RENDER */
              ))
                debugger;
              return [4, this.renderNodeBackgroundAndBorders(t.element)];
            case 1:
              b.sent(), r = 0, s = t.negativeZIndex, b.label = 2;
            case 2:
              return r < s.length ? (y = s[r], [4, this.renderStack(y)]) : [3, 5];
            case 3:
              b.sent(), b.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              b.sent(), n = 0, i = t.nonInlineLevel, b.label = 7;
            case 7:
              return n < i.length ? (y = i[n], [4, this.renderNode(y)]) : [3, 10];
            case 8:
              b.sent(), b.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, b.label = 11;
            case 11:
              return o < a.length ? (y = a[o], [4, this.renderStack(y)]) : [3, 14];
            case 12:
              b.sent(), b.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              c = 0, l = t.nonPositionedInlineLevel, b.label = 15;
            case 15:
              return c < l.length ? (y = l[c], [4, this.renderStack(y)]) : [3, 18];
            case 16:
              b.sent(), b.label = 17;
            case 17:
              return c++, [3, 15];
            case 18:
              f = 0, B = t.inlineLevel, b.label = 19;
            case 19:
              return f < B.length ? (y = B[f], [4, this.renderNode(y)]) : [3, 22];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return f++, [3, 19];
            case 22:
              C = 0, Q = t.zeroOrAutoZIndexOrTransformedOrOpacity, b.label = 23;
            case 23:
              return C < Q.length ? (y = Q[C], [4, this.renderStack(y)]) : [3, 26];
            case 24:
              b.sent(), b.label = 25;
            case 25:
              return C++, [3, 23];
            case 26:
              U = 0, L = t.positiveZIndex, b.label = 27;
            case 27:
              return U < L.length ? (y = L[U], [4, this.renderStack(y)]) : [3, 30];
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
                var f, B, C, oA, nA, z, eA, wA, Z, Q, oA, nA, z, eA, wA, U, L, y, b, g, m, T, S, X, Z, G, oA, UA, EA, eA, wA, ie, nA, z, AA, HA, YA, RA, mA, Ae, He, oe;
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
                      return f && (C = Tn(t, r, [
                        f.width,
                        f.height,
                        f.width / f.height
                      ]), oA = C[0], nA = C[1], z = C[2], eA = C[3], wA = C[4], Z = n.ctx.createPattern(n.resizeImage(f, eA, wA), "repeat"), n.renderRepeat(oA, Z, nA, z)), [3, 6];
                    case 5:
                      zC(l) ? (Q = Tn(t, r, [null, null, null]), oA = Q[0], nA = Q[1], z = Q[2], eA = Q[3], wA = Q[4], U = XC(l.angle, eA, wA), L = U[0], y = U[1], b = U[2], g = U[3], m = U[4], T = document.createElement("canvas"), T.width = eA, T.height = wA, S = T.getContext("2d"), X = S.createLinearGradient(y, g, b, m), qo(l.stops, L).forEach(function(de) {
                        return X.addColorStop(de.stop, IA(de.color));
                      }), S.fillStyle = X, S.fillRect(0, 0, eA, wA), eA > 0 && wA > 0 && (Z = n.ctx.createPattern(T, "repeat"), n.renderRepeat(oA, Z, nA, z))) : qC(l) && (G = Tn(t, r, [
                        null,
                        null,
                        null
                      ]), oA = G[0], UA = G[1], EA = G[2], eA = G[3], wA = G[4], ie = l.position.length === 0 ? [Ti] : l.position, nA = gA(ie[0], eA), z = gA(ie[ie.length - 1], wA), AA = WC(l, nA, z, eA, wA), HA = AA[0], YA = AA[1], HA > 0 && YA > 0 && (RA = n.ctx.createRadialGradient(UA + nA, EA + z, 0, UA + nA, EA + z, HA), qo(l.stops, HA * 2).forEach(function(de) {
                        return RA.addColorStop(de.stop, IA(de.color));
                      }), n.path(oA), n.ctx.fillStyle = RA, HA !== YA ? (mA = t.bounds.left + 0.5 * t.bounds.width, Ae = t.bounds.top + 0.5 * t.bounds.height, He = YA / HA, oe = 1 / He, n.ctx.save(), n.ctx.translate(mA, Ae), n.ctx.transform(1, 0, 0, He, 0, 0), n.ctx.translate(-mA, -Ae), n.ctx.fillRect(UA, oe * (EA - Ae) + Ae, eA, wA * oe), n.ctx.restore()) : n.ctx.fill())), ee.label = 6;
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
              return i = eF(n, s), this.path(i), this.ctx.fillStyle = IA(t), this.ctx.fill(), o = tF(n, s), this.path(o), this.ctx.fill(), [
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
              ], i = BF(Et(r.backgroundClip, 0), t.curves), s || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), tt(r.backgroundColor) || (this.ctx.fillStyle = IA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              B.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(C) {
                f.ctx.save();
                var Q = xs(t.curves), U = C.inset ? 0 : cF, L = $U(Q, -U + (C.inset ? 1 : -1) * C.spread.number, (C.inset ? 1 : -1) * C.spread.number, C.spread.number * (C.inset ? -2 : 2), C.spread.number * (C.inset ? -2 : 2));
                C.inset ? (f.path(Q), f.ctx.clip(), f.mask(L)) : (f.mask(Q), f.ctx.clip(), f.path(L)), f.ctx.shadowOffsetX = C.offsetX.number + U, f.ctx.shadowOffsetY = C.offsetY.number, f.ctx.shadowColor = IA(C.color), f.ctx.shadowBlur = C.blur.number, f.ctx.fillStyle = C.inset ? IA(C.color) : "rgba(0,0,0,1)", f.ctx.fill(), f.ctx.restore();
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
        var o, a, c, l, f, B, C, Q, U, L, y, b, g, m, T, S, T, S;
        return DA(this, function(X) {
          return this.ctx.save(), o = rF(n, s), a = Ha(n, s), i === 2 && (this.path(a), this.ctx.clip()), re(a[0]) ? (c = a[0].start.x, l = a[0].start.y) : (c = a[0].x, l = a[0].y), re(a[1]) ? (f = a[1].end.x, B = a[1].end.y) : (f = a[1].x, B = a[1].y), s === 0 || s === 2 ? C = Math.abs(c - f) : C = Math.abs(l - B), this.ctx.beginPath(), i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), Q = r < 3 ? r * 3 : r * 2, U = r < 3 ? r * 2 : r, i === 3 && (Q = r, U = r), L = !0, C <= Q * 2 ? L = !1 : C <= Q * 2 + U ? (y = C / (2 * Q + U), Q *= y, U *= y) : (b = Math.floor((C + U) / (Q + U)), g = (C - b * Q) / (b - 1), m = (C - (b + 1) * Q) / b, U = m <= 0 || Math.abs(U - g) < Math.abs(U - m) ? g : m), L && (i === 3 ? this.ctx.setLineDash([0, Q + U]) : this.ctx.setLineDash([Q, U])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = IA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (re(a[0]) && (T = a[3], S = a[0], this.ctx.beginPath(), this.formatPath([new O(T.end.x, T.end.y), new O(S.start.x, S.start.y)]), this.ctx.stroke()), re(a[1]) && (T = a[1], S = a[2], this.ctx.beginPath(), this.formatPath([new O(T.end.x, T.end.y), new O(S.start.x, S.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = AF(t), [4, this.renderStack(r)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), uF = function(A) {
  return A instanceof yc || A instanceof mc ? !0 : A instanceof Mi && A.type !== bs && A.type !== Fs;
}, BF = function(A, e) {
  switch (A) {
    case 0:
      return xs(e);
    case 2:
      return YU(e);
    case 1:
    default:
      return Es(e);
  }
}, dF = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, gF = ["-apple-system", "system-ui"], hF = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return gF.indexOf(e) === -1;
  }) : A;
}, pF = (
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
              return r = ai(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, wF(r)];
            case 1:
              return s = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = IA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), wF = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, QF = (
  /** @class */
  function() {
    function A(e) {
      var t = e.id, r = e.enabled;
      this.id = t, this.enabled = r, this.start = Date.now();
    }
    return A.prototype.debug = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.debug == "function" ? console.debug.apply(console, Tr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.getTime = function() {
      return Date.now() - this.start;
    }, A.prototype.info = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && typeof window < "u" && window.console && typeof console.info == "function" && console.info.apply(console, Tr([this.id, this.getTime() + "ms"], e));
    }, A.prototype.warn = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.warn == "function" ? console.warn.apply(console, Tr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.prototype.error = function() {
      for (var e = [], t = 0; t < arguments.length; t++)
        e[t] = arguments[t];
      this.enabled && (typeof window < "u" && window.console && typeof console.error == "function" ? console.error.apply(console, Tr([this.id, this.getTime() + "ms"], e)) : this.info.apply(this, e));
    }, A.instances = {}, A;
  }()
), CF = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new QF({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new RU(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), vF = function(A, e) {
  return e === void 0 && (e = {}), UF(A, e);
};
typeof window < "u" && kc.setContext(window);
var UF = function(A, e) {
  return VA(void 0, void 0, void 0, function() {
    var t, r, s, n, i, o, a, c, l, f, B, C, Q, U, L, y, b, g, m, T, X, S, X, Z, G, oA, UA, EA, eA, wA, ie, nA, z, AA, HA, YA, RA, mA, Ae, He;
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
            imageTimeout: (G = e.imageTimeout) !== null && G !== void 0 ? G : 15e3,
            proxy: e.proxy,
            useCORS: (oA = e.useCORS) !== null && oA !== void 0 ? oA : !1
          }, n = Wn({ logging: (UA = e.logging) !== null && UA !== void 0 ? UA : !0, cache: e.cache }, s), i = {
            windowWidth: (EA = e.windowWidth) !== null && EA !== void 0 ? EA : r.innerWidth,
            windowHeight: (eA = e.windowHeight) !== null && eA !== void 0 ? eA : r.innerHeight,
            scrollX: (wA = e.scrollX) !== null && wA !== void 0 ? wA : r.pageXOffset,
            scrollY: (ie = e.scrollY) !== null && ie !== void 0 ? ie : r.pageYOffset
          }, o = new Ge(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new CF(n, o), c = (nA = e.foreignObjectRendering) !== null && nA !== void 0 ? nA : !1, l = {
            allowTaint: (z = e.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), f = new ya(a, A, l), B = f.clonedReferenceElement, B ? [4, f.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return C = oe.sent(), Q = Ri(B) || FU(B) ? $w(B.ownerDocument) : Gs(a, B), U = Q.width, L = Q.height, y = Q.left, b = Q.top, g = FF(a, B, e.backgroundColor), m = {
            canvas: e.canvas,
            backgroundColor: g,
            scale: (HA = (AA = e.scale) !== null && AA !== void 0 ? AA : r.devicePixelRatio) !== null && HA !== void 0 ? HA : 1,
            x: ((YA = e.x) !== null && YA !== void 0 ? YA : 0) + y,
            y: ((RA = e.y) !== null && RA !== void 0 ? RA : 0) + b,
            width: (mA = e.width) !== null && mA !== void 0 ? mA : Math.ceil(U),
            height: (Ae = e.height) !== null && Ae !== void 0 ? Ae : Math.ceil(L)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), X = new pF(a, m), [4, X.render(B)]) : [3, 3];
        case 2:
          return T = oe.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + y + "," + b + " with size " + U + "x" + L + " using computed rendering"), a.logger.debug("Starting DOM parsing"), S = Hc(a, B), g === S.styles.backgroundColor && (S.styles.backgroundColor = Oe.TRANSPARENT), a.logger.debug("Starting renderer for element at " + m.x + "," + m.y + " with size " + m.width + "x" + m.height), X = new fF(a, m), [4, X.render(S)];
        case 4:
          T = oe.sent(), oe.label = 5;
        case 5:
          return (!((He = e.removeContainer) !== null && He !== void 0) || He) && (ya.destroy(C) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, T];
      }
    });
  });
}, FF = function(A, e, t) {
  var r = e.ownerDocument, s = r.documentElement ? cr(A, getComputedStyle(r.documentElement).backgroundColor) : Oe.TRANSPARENT, n = r.body ? cr(A, getComputedStyle(r.body).backgroundColor) : Oe.TRANSPARENT, i = typeof t == "string" ? cr(A, t) : t === null ? Oe.TRANSPARENT : 4294967295;
  return e === r.documentElement ? tt(s) ? tt(n) ? i : n : s : i;
};
async function bF(A = {}) {
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
  }).filter(Boolean), n = new Set(r), i = A.ignore || [], o = await vF(document.body, {
    useCORS: !0,
    allowTaint: !0,
    backgroundColor: null,
    scale: 1,
    width: e,
    height: t,
    ignoreElements: (f) => {
      var B;
      return n.has(f) || f.tagName && f.tagName.toLowerCase().startsWith("bugfix-") || (B = A.ignoreElement) != null && B.call(A, f) ? !0 : i.some((C) => {
        var Q;
        try {
          return (Q = f.matches) == null ? void 0 : Q.call(f, C);
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
      const C = new Image();
      C.onload = () => {
        c.drawImage(C, 0, 0, e, t), B();
      }, C.onerror = B, C.src = f;
    });
  return c.drawImage(o, 0, 0), a.toDataURL("image/png");
}
const mt = (A, e = 2) => String(A).padStart(e, "0");
function fe(A = !1) {
  const e = /* @__PURE__ */ new Date(), t = `${mt(e.getHours())}:${mt(e.getMinutes())}:${mt(e.getSeconds())}.${mt(e.getMilliseconds(), 3)}`;
  return A ? `${e.getFullYear()}-${mt(e.getMonth() + 1)}-${mt(e.getDate())} ${t}` : t;
}
function Hr(A) {
  const e = [];
  return { push(t) {
    e.push(t), e.length > A && e.shift();
  }, get: () => [...e] };
}
const mF = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function yF(A) {
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
function xF({ max: A = 200, silent: e = mF } = {}) {
  const t = Hr(A);
  for (const r of ["log", "warn", "error"]) {
    const s = console[r].bind(console);
    console[r] = (...n) => {
      const i = n.map(yF).join(" ");
      e.some((o) => o.test(i)) || (t.push({ level: r, time: fe(!0), message: i }), s(...n));
    };
  }
  return window.addEventListener("error", (r) => t.push({ level: "error", time: fe(!0), message: `[GlobalError] ${r.message} (${r.filename}:${r.lineno})` })), window.addEventListener("unhandledrejection", (r) => {
    const s = r.reason instanceof Error ? r.reason.message : String(r.reason);
    t.push({ level: "error", time: fe(!0), message: `[UnhandledRejection] ${s}` });
  }), t.get;
}
const EF = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, HF = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
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
  return EF.test(A || "") || HF.test(t) ? "[masked]" : gi(e);
}
function IF({ max: A = 50, axios: e = [], fetch: t = !1, xhr: r = !1, ignore: s = [] } = {}) {
  const n = Hr(A), i = (o) => s.some((a) => a instanceof RegExp ? a.test(o) : String(o).includes(a));
  for (const o of e) {
    const a = o != null && o.interceptors ? o : o == null ? void 0 : o.instance, c = (o == null ? void 0 : o.label) || "axios";
    a != null && a.interceptors && (a.interceptors.request.use((l) => (l._bk = { t0: Date.now(), time: fe(!0) }, l), (l) => Promise.reject(l)), a.interceptors.response.use((l) => {
      var B;
      const f = l.config._bk || {};
      return i(l.config.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (B = l.config.method) == null ? void 0 : B.toUpperCase(), url: l.config.url, params: gi(l.config.params), requestBody: Je(l.config.url, l.config.data), status: l.status, responseBody: Je(l.config.url, l.data), error: null }), l;
    }, (l) => {
      var B, C, Q, U, L, y, b, g, m, T, S;
      const f = ((B = l.config) == null ? void 0 : B._bk) || {};
      return i((C = l.config) == null ? void 0 : C.url) || n.push({ server: c, time: f.time, duration: f.t0 ? Date.now() - f.t0 : null, method: (U = (Q = l.config) == null ? void 0 : Q.method) == null ? void 0 : U.toUpperCase(), url: (L = l.config) == null ? void 0 : L.url, params: gi((y = l.config) == null ? void 0 : y.params), requestBody: Je((b = l.config) == null ? void 0 : b.url, (g = l.config) == null ? void 0 : g.data), status: ((m = l.response) == null ? void 0 : m.status) ?? "ERR", responseBody: Je((T = l.config) == null ? void 0 : T.url, (S = l.response) == null ? void 0 : S.data), error: l.message }), Promise.reject(l);
    }));
  }
  if (t && window.fetch) {
    const o = window.fetch.bind(window);
    window.fetch = async (a, c = {}) => {
      const l = typeof a == "string" ? a : a == null ? void 0 : a.url, f = Date.now(), B = fe(!0), C = (c.method || typeof a != "string" && (a == null ? void 0 : a.method) || "GET").toUpperCase();
      try {
        const Q = await o(a, c);
        return i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: C, url: l, params: null, requestBody: Je(l, c.body), status: Q.status, responseBody: null, error: null }), Q;
      } catch (Q) {
        throw i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - f, method: C, url: l, params: null, requestBody: Je(l, c.body), status: "ERR", responseBody: null, error: Q.message }), Q;
      }
    };
  }
  if (r && window.XMLHttpRequest) {
    const o = XMLHttpRequest.prototype, a = o.open, c = o.send;
    o.open = function(l, f, ...B) {
      return this._bk = { method: String(l).toUpperCase(), url: f }, a.call(this, l, f, ...B);
    }, o.send = function(l) {
      const f = this._bk || {}, B = Date.now(), C = fe(!0);
      return this.addEventListener("loadend", () => {
        i(f.url) || n.push({ server: "xhr", time: C, duration: Date.now() - B, method: f.method, url: f.url, params: null, requestBody: Je(f.url, l), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Je(f.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), c.call(this, l);
    };
  }
  return n.get;
}
function _F(A) {
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
function LF(A, { max: e = 100 } = {}) {
  const t = Hr(e);
  return A.subscribe((r) => t.push({ time: fe(), type: r.type, payload: _F(r.payload) })), t.get;
}
function SF(A, { max: e = 20 } = {}) {
  const t = Hr(e);
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
function KF(A, { max: e = 80, skip: t = [] } = {}) {
  const r = Hr(e), s = new Set(t), n = A.emit.bind(A);
  return A.emit = (i, o) => (s.has(i) || r.push({ time: fe(), type: i }), n(i, o)), r.get;
}
function MF() {
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
function RF(A) {
  return {
    subscribe: (e) => A.subscribe((t, r) => {
      const s = Object.keys(t).filter((n) => t[n] !== (r == null ? void 0 : r[n]));
      e({ type: `set(${s.join(",") || "?"})`, payload: Object.fromEntries(s.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function TF(A) {
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
function DF(A = {}) {
  var l;
  const e = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...A }, t = e.interceptors || {}, r = t.console === !1 ? Xt : xF(t.console === !0 ? {} : t.console), s = t.network ? IF(t.network) : Xt, n = t.mutation ? LF(t.mutation) : Xt, i = t.router ? SF(t.router === !0 ? null : t.router) : Xt, o = t.events ? KF(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Xt, a = ((l = e.projects) != null && l.length ? e.projects : [{ key: e.project, label: e.project }]).map((f) => typeof f == "string" ? { key: f, label: f } : f), c = {
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
      const B = a.find((C) => C.key === f);
      B && (c.project = B.key, c.api = dn({ ...e, project: B.key, apiKey: B.apiKey ?? e.apiKey, adminKey: e.adminKey }));
    },
    getLogs: r,
    getNetwork: s,
    getMutations: n,
    getRoutes: i,
    getEvents: o,
    captureScreen: (f = {}) => {
      var B;
      return bF({ ...e.capture || {}, ...f, ignore: [...((B = e.capture) == null ? void 0 : B.ignore) || [], ...f.ignore || []] });
    },
    captureContext: () => TF(c),
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
      var f, B, C, Q;
      return ((B = (f = c._els.modal) == null ? void 0 : f.open) == null ? void 0 : B.call(f)) ?? ((Q = (C = c._open) == null ? void 0 : C.report) == null ? void 0 : Q.call(C));
    },
    openViewer: (f) => {
      var B, C, Q, U;
      return ((C = (B = c._els.viewer) == null ? void 0 : B.open) == null ? void 0 : C.call(B, f)) ?? ((U = (Q = c._open) == null ? void 0 : Q.viewer) == null ? void 0 : U.call(Q, f));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(f, B) {
      c._open[f] = B;
    }
  };
  if (e.hotkeys) {
    const f = (B, C) => {
      if (!C) return !1;
      const Q = C.split("+").map((L) => L.trim().toLowerCase()), U = Q.pop();
      return B.key.toLowerCase() === U && Q.includes("shift") === B.shiftKey && Q.includes("ctrl") === B.ctrlKey && Q.includes("alt") === B.altKey && Q.includes("meta") === B.metaKey;
    };
    window.addEventListener("keydown", (B) => {
      f(B, e.hotkeys.report) ? (B.preventDefault(), c.openReport()) : f(B, e.hotkeys.viewer) && (B.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function kF() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ bo(gh)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ bo(qw));
}
kF();
function NF(A = {}) {
  if (typeof window > "u") return null;
  if (window.bugfixKit) return window.bugfixKit;
  const e = () => window.__bugfix || {}, t = A.restBase ? String(A.restBase).replace(/\/+$/, "") : "", r = DF({
    endpoint: A.endpoint || "/bugfix",
    project: A.project || "app",
    apiKey: A.apiKey || "",
    user: () => {
      var s, n;
      try {
        return ((n = (s = e()).user) == null ? void 0 : n.call(s)) ?? "anonymous";
      } catch {
        return "anonymous";
      }
    },
    context: () => {
      var s, n;
      try {
        return ((n = (s = e()).context) == null ? void 0 : n.call(s)) ?? {};
      } catch {
        return {};
      }
    },
    capture: {
      // 화면에 보이는 큰 캔버스(지도·3D)를 배경으로 깐다. WebGL 이 preserveDrawingBuffer 없이 그리면 beforeCapture 로 한 프레임 다시 그린다
      canvases: () => [...document.querySelectorAll("canvas")].filter((s) => s.width > 200 && s.height > 200 && s.getClientRects().length).sort((s, n) => n.width * n.height - s.width * s.height).slice(0, 2),
      beforeCapture: () => {
        var s, n;
        try {
          (n = (s = e()).beforeCapture) == null || n.call(s);
        } catch {
        }
      }
    },
    // 백엔드 어댑터(bugfix-adapter)의 최근 로그 끝점 - REST 경로를 알 때만
    backendLogs: t ? async () => {
      const s = await fetch(`${t}/debug/recent-logs?level=INFO&limit=300`);
      if (!s.ok) return [];
      const n = await s.json();
      return Array.isArray(n) ? n : (n == null ? void 0 : n.content) ?? [];
    } : void 0,
    interceptors: { console: !0, network: { fetch: !0, xhr: !0 }, router: !0, mutation: e().mutation },
    hotkeys: { report: "Shift+F9", viewer: "Shift+F10" },
    ...e().options || {}
  }).mount();
  return window.bugfixKit = r, r;
}
export {
  NF as autoMount,
  DF as createBugfix,
  MF as reduxMiddleware,
  RF as zustandSource
};
