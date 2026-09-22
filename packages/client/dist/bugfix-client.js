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
const BA = {}, ut = [], Fe = () => {
}, _a = () => !1, Hs = (A) => A.charCodeAt(0) === 111 && A.charCodeAt(1) === 110 && // uppercase letter
(A.charCodeAt(2) > 122 || A.charCodeAt(2) < 97), Is = (A) => A.startsWith("onUpdate:"), vA = Object.assign, pi = (A, e) => {
  const t = A.indexOf(e);
  t > -1 && A.splice(t, 1);
}, Pc = Object.prototype.hasOwnProperty, rA = (A, e) => Pc.call(A, e), J = Array.isArray, $e = (A) => Fr(A) === "[object Map]", St = (A) => Fr(A) === "[object Set]", Ji = (A) => Fr(A) === "[object Date]", Y = (A) => typeof A == "function", pA = (A) => typeof A == "string", me = (A) => typeof A == "symbol", cA = (A) => A !== null && typeof A == "object", La = (A) => (cA(A) || Y(A)) && Y(A.then) && Y(A.catch), Sa = Object.prototype.toString, Fr = (A) => Sa.call(A), Jc = (A) => Fr(A).slice(8, -1), _s = (A) => Fr(A) === "[object Object]", wi = (A) => pA(A) && A !== "NaN" && A[0] !== "-" && "" + parseInt(A, 10) === A, rr = /* @__PURE__ */ hi(
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
  } else if (pA(A) || cA(A))
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
  else if (cA(A))
    for (const t in A)
      A[t] && (e += t + " ");
  return e.trim();
}
const qc = "itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly", $c = /* @__PURE__ */ hi(qc);
function Ta(A) {
  return !!A || A === "";
}
function Au(A, e, t) {
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
function eu(A, e, t) {
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
  return r || s ? r && s ? A.getTime() === e.getTime() : !1 : (r = me(A), s = me(e), r || s ? A === e : (r = J(A), s = J(e), r || s ? r && s ? ji(A, e, t, Au) : !1 : (r = cA(A), s = cA(e), r || s ? !r || !s ? !1 : ji(A, e, t, eu) : String(A) === String(e))));
}
function Da(A, e) {
  return A.findIndex((t) => Dt(t, e));
}
const ka = (A) => !!(A && A.__v_isRef === !0), v = (A) => pA(A) ? A : A == null ? "" : J(A) || cA(A) && (A.toString === Sa || !Y(A.toString)) ? ka(A) ? v(A.value) : JSON.stringify(A, Oa, 2) : String(A), Oa = (A, e) => ka(e) ? Oa(A, e.value) : $e(e) ? {
  [`Map(${e.size})`]: [...e.entries()].reduce(
    (t, [r, s], n) => (t[en(r, n) + " =>"] = s, t),
    {}
  )
} : St(e) ? {
  [`Set(${e.size})`]: [...e.values()].map((t) => en(t))
} : me(e) ? en(e) : cA(e) && !J(e) && !_s(e) ? String(e) : e, en = (A, e = "") => {
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
class tu {
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
function ru() {
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
    r.version === -1 ? (r === t && (t = s), Ui(r), su(r)) : e = r, r.dep.activeLink = r.prevActiveLink, r.prevActiveLink = void 0, r = s;
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
function su(A) {
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
class nu {
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
      t = this.activeLink = new nu(dA, this), dA.deps ? (t.prevDep = dA.depsTail, dA.depsTail.nextDep = t, dA.depsTail = t) : dA.deps = dA.depsTail = t, Wa(t);
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
      i.forEach((u, B) => {
        (B === "length" || B === gr || !me(B) && B >= l) && o(u);
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
  return e === A || (OA(e, "iterate", gr), /* @__PURE__ */ ce(A)) ? e : /* @__PURE__ */ Ne(A) ? /* @__PURE__ */ At(A) ? e.map((t) => rt(ye(t))) : e.map(rt) : e.map(ye);
}
function Ds(A) {
  return OA(A = /* @__PURE__ */ aA(A), "iterate", gr), A;
}
function ve(A, e) {
  return /* @__PURE__ */ Ne(A) ? rt(/* @__PURE__ */ At(A) ? ye(e) : e) : ye(e);
}
const iu = {
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
const ou = Array.prototype;
function Ie(A, e, t, r, s, n) {
  const i = Ds(A), o = i !== A && !/* @__PURE__ */ ce(A), a = i[e];
  if (a !== ou[e]) {
    const u = a.apply(A, n);
    return o ? ye(u) : u;
  }
  let c = t;
  i !== A && (o ? c = function(u, B) {
    return t.call(this, ve(A, u), B, A);
  } : t.length > 2 && (c = function(u, B) {
    return t.call(this, u, B, A);
  }));
  const l = a.call(i, c, r);
  return o && s ? s(l) : l;
}
function zi(A, e, t, r) {
  const s = Ds(A), n = s !== A && !/* @__PURE__ */ ce(A);
  let i = t, o = !1;
  s !== A && (n ? (o = r.length === 0, i = function(c, l, u) {
    return o && (o = !1, c = ve(A, c)), t.call(this, c, ve(A, l), u, A);
  }) : t.length > 3 && (i = function(c, l, u) {
    return t.call(this, c, l, u, A);
  }));
  const a = s[e](i, ...r);
  return o ? ve(A, a) : a;
}
function sn(A, e, t) {
  const r = /* @__PURE__ */ aA(A);
  OA(r, "iterate", gr);
  const s = r[e](...t);
  return (s === -1 || s === !1) && /* @__PURE__ */ yi(t[0]) ? (t[0] = /* @__PURE__ */ aA(t[0]), r[e](...t)) : s;
}
function Mt(A, e, t = []) {
  Re(), Ci();
  const r = (/* @__PURE__ */ aA(A))[e].apply(A, t);
  return vi(), Me(), r;
}
const au = /* @__PURE__ */ hi("__proto__,__v_isRef,__isVue"), Ya = new Set(
  /* @__PURE__ */ Object.getOwnPropertyNames(Symbol).filter((A) => A !== "arguments" && A !== "caller").map((A) => Symbol[A]).filter(me)
);
function lu(A) {
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
      return r === (s ? n ? Qu : $a : n ? qa : za).get(e) || // receiver is not the reactive proxy, but has the same prototype
      // this means the receiver is a user proxy of the reactive proxy
      Object.getPrototypeOf(e) === Object.getPrototypeOf(r) ? e : void 0;
    const i = J(e);
    if (!s) {
      let a;
      if (i && (a = iu[t]))
        return a;
      if (t === "hasOwnProperty")
        return lu;
    }
    const o = Reflect.get(
      e,
      t,
      // if this is a proxy wrapping a ref, return methods using the raw ref
      // as receiver so that we don't have to call `toRaw` on the ref in all
      // its class methods
      /* @__PURE__ */ PA(e) ? e : r
    );
    if ((me(t) ? Ya.has(t) : au(t)) || (s || OA(e, "get", t), n))
      return o;
    if (/* @__PURE__ */ PA(o)) {
      const a = i && wi(t) ? o : o.value;
      return s && cA(a) ? /* @__PURE__ */ Mn(a) : a;
    }
    return cA(o) ? s ? /* @__PURE__ */ Mn(o) : /* @__PURE__ */ bi(o) : o;
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
      if (!/* @__PURE__ */ ce(r) && !/* @__PURE__ */ Ne(r) && (n = /* @__PURE__ */ aA(n), r = /* @__PURE__ */ aA(r)), !i && /* @__PURE__ */ PA(n) && !/* @__PURE__ */ PA(r))
        return c || (n.value = r), !0;
    }
    const o = i ? Number(t) < e.length : rA(e, t), a = Reflect.set(
      e,
      t,
      r,
      /* @__PURE__ */ PA(e) ? e : s
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
class cu extends ja {
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
const uu = /* @__PURE__ */ new Za(), fu = /* @__PURE__ */ new cu(), Bu = /* @__PURE__ */ new Za(!0);
const Rn = (A) => A, Hr = (A) => Reflect.getPrototypeOf(A);
function du(A, e, t) {
  return function(...r) {
    const s = this.__v_raw, n = /* @__PURE__ */ aA(s), i = $e(n), o = A === "entries" || A === Symbol.iterator && i, a = A === "keys" && i, c = s[A](...r), l = t ? Rn : e ? rt : ye;
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
          const { value: u, done: B } = c.next();
          return B ? { value: u, done: B } : {
            value: o ? [l(u[0]), l(u[1])] : l(u),
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
function gu(A, e) {
  const t = {
    get(s) {
      const n = this.__v_raw, i = /* @__PURE__ */ aA(n), o = /* @__PURE__ */ aA(s);
      A || (Te(s, o) && OA(i, "get", s), OA(i, "get", o));
      const { has: a } = Hr(i), c = e ? Rn : A ? rt : ye;
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
      const i = this, o = i.__v_raw, a = /* @__PURE__ */ aA(o), c = e ? Rn : A ? rt : ye;
      return !A && OA(a, "iterate", dt), o.forEach((l, u) => s.call(n, c(l), c(u), i));
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
    t[s] = du(s, A, e);
  }), t;
}
function Fi(A, e) {
  const t = gu(A, e);
  return (r, s, n) => s === "__v_isReactive" ? !A : s === "__v_isReadonly" ? A : s === "__v_raw" ? r : Reflect.get(
    rA(t, s) && s in r ? t : r,
    s,
    n
  );
}
const hu = {
  get: /* @__PURE__ */ Fi(!1, !1)
}, pu = {
  get: /* @__PURE__ */ Fi(!1, !0)
}, wu = {
  get: /* @__PURE__ */ Fi(!0, !1)
};
const za = /* @__PURE__ */ new WeakMap(), qa = /* @__PURE__ */ new WeakMap(), $a = /* @__PURE__ */ new WeakMap(), Qu = /* @__PURE__ */ new WeakMap();
function Cu(A) {
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
    uu,
    hu,
    za
  );
}
// @__NO_SIDE_EFFECTS__
function vu(A) {
  return mi(
    A,
    !1,
    Bu,
    pu,
    qa
  );
}
// @__NO_SIDE_EFFECTS__
function Mn(A) {
  return mi(
    A,
    !0,
    fu,
    wu,
    $a
  );
}
function mi(A, e, t, r, s) {
  if (!cA(A) || A.__v_raw && !(e && A.__v_isReactive) || A.__v_skip || !Object.isExtensible(A))
    return A;
  const n = s.get(A);
  if (n)
    return n;
  const i = Cu(Jc(A));
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
function aA(A) {
  const e = A && A.__v_raw;
  return e ? /* @__PURE__ */ aA(e) : A;
}
function Uu(A) {
  return !rA(A, "__v_skip") && Object.isExtensible(A) && Ka(A, "__v_skip", !0), A;
}
const ye = (A) => cA(A) ? /* @__PURE__ */ bi(A) : A, rt = (A) => cA(A) ? /* @__PURE__ */ Mn(A) : A;
// @__NO_SIDE_EFFECTS__
function PA(A) {
  return A ? A.__v_isRef === !0 : !1;
}
function Al(A) {
  return /* @__PURE__ */ PA(A) ? A.value : A;
}
const Fu = {
  get: (A, e, t) => e === "__v_raw" ? A : Al(Reflect.get(A, e, t)),
  set: (A, e, t, r) => {
    const s = A[e];
    return /* @__PURE__ */ PA(s) && !/* @__PURE__ */ PA(t) ? (s.value = t, !0) : Reflect.set(A, e, t, r);
  }
};
function el(A) {
  return /* @__PURE__ */ At(A) ? A : new Proxy(A, Fu);
}
class bu {
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
function mu(A, e, t = !1) {
  let r, s;
  return Y(A) ? r = A : (r = A.get, s = A.set), new bu(r, s, t);
}
const _r = {}, us = /* @__PURE__ */ new WeakMap();
let at;
function yu(A, e = !1, t = at) {
  if (t) {
    let r = us.get(t);
    r || us.set(t, r = []), r.push(A);
  }
}
function Eu(A, e, t = BA) {
  const { immediate: r, deep: s, once: n, scheduler: i, augmentJob: o, call: a } = t, c = (H) => s ? H : /* @__PURE__ */ ce(H) || s === !1 || s === 0 ? ke(H, 1) : ke(H);
  let l, u, B, Q, C = !1, U = !1;
  if (/* @__PURE__ */ PA(A) ? (u = () => A.value, C = /* @__PURE__ */ ce(A)) : /* @__PURE__ */ At(A) ? (u = () => c(A), C = !0) : J(A) ? (U = !0, C = A.some((H) => /* @__PURE__ */ At(H) || /* @__PURE__ */ ce(H)), u = () => A.map((H) => {
    if (/* @__PURE__ */ PA(H))
      return H.value;
    if (/* @__PURE__ */ At(H))
      return c(H);
    if (Y(H))
      return a ? a(H, 2) : H();
  })) : Y(A) ? e ? u = a ? () => a(A, 2) : A : u = () => {
    if (B) {
      Re();
      try {
        B();
      } finally {
        Me();
      }
    }
    const H = at;
    at = l;
    try {
      return a ? a(A, 3, [Q]) : A(Q);
    } finally {
      at = H;
    }
  } : u = Fe, e && s) {
    const H = u, k = s === !0 ? 1 / 0 : s;
    u = () => ke(H(), k);
  }
  const T = ru(), g = () => {
    l.stop(), T && T.active && pi(T.effects, l);
  };
  if (n && e) {
    const H = e;
    e = (...k) => {
      const _ = H(...k);
      return g(), _;
    };
  }
  let b = U ? new Array(A.length).fill(_r) : _r;
  const M = (H) => {
    if (!(!(l.flags & 1) || !l.dirty && !H))
      if (e) {
        const k = l.run();
        if (H || s || C || (U ? k.some((_, W) => Te(_, b[W])) : Te(k, b))) {
          B && B();
          const _ = at;
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
            at = _;
          }
        }
      } else
        l.run();
  };
  return o && o(M), l = new Ra(u), l.scheduler = i ? () => i(M, !1) : M, Q = (H) => yu(H, !1, l), B = l.onStop = () => {
    const H = us.get(l);
    if (H) {
      if (a)
        a(H, 4);
      else
        for (const k of H) k();
      us.delete(l);
    }
  }, e ? r ? M(!0) : b = l.run() : i ? i(M.bind(null, !0), !0) : l.run(), g.pause = l.pause.bind(l), g.resume = l.resume.bind(l), g.stop = g, g;
}
function ke(A, e = 1 / 0, t) {
  if (e <= 0 || !cA(A) || A.__v_skip || (t = t || /* @__PURE__ */ new Map(), (t.get(A) || 0) >= e))
    return A;
  if (t.set(A, e), e--, /* @__PURE__ */ PA(A))
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
function fe(A, e, t, r) {
  if (Y(A)) {
    const s = br(A, e, t, r);
    return s && La(s) && s.catch((n) => {
      ks(n, e, t);
    }), s;
  }
  if (J(A)) {
    const s = [];
    for (let n = 0; n < A.length; n++)
      s.push(fe(A[n], e, t, r));
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
        for (let u = 0; u < l.length; u++)
          if (l[u](A, a, c) === !1)
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
  xu(A, t, s, r, i);
}
function xu(A, e, t, r = !0, s = !1) {
  if (s)
    throw A;
  console.error(A);
}
const GA = [];
let Ce = -1;
const It = [];
let Ye = null, yt = 0;
const tl = /* @__PURE__ */ Promise.resolve();
let fs = null;
function rl(A) {
  const e = fs || tl;
  return A ? e.then(this ? A.bind(this) : A) : e;
}
function Hu(A) {
  let e = Ce + 1, t = GA.length;
  for (; e < t; ) {
    const r = e + t >>> 1, s = GA[r], n = hr(s);
    n < A || n === A && s.flags & 2 ? e = r + 1 : t = r;
  }
  return e;
}
function Ei(A) {
  if (!(A.flags & 1)) {
    const e = hr(A), t = GA[GA.length - 1];
    !t || // fast path when the job id is larger than the tail
    !(A.flags & 2) && e >= hr(t) ? GA.push(A) : GA.splice(Hu(e), 0, A), A.flags |= 1, sl();
  }
}
function sl() {
  fs || (fs = tl.then(il));
}
function Iu(A) {
  if (!J(A))
    Ye && A.id === -1 ? Ye.splice(yt + 1, 0, A) : A.flags & 1 || (It.push(A), A.flags |= 1);
  else
    for (let e = 0; e < A.length; e++)
      It.push(A[e]);
  sl();
}
function qi(A, e, t = Ce + 1) {
  for (; t < GA.length; t++) {
    const r = GA[t];
    if (r && r.flags & 2) {
      if (A && r.id !== A.uid)
        continue;
      GA.splice(t, 1), t--, r.flags & 4 && (r.flags &= -2), r(), r.flags & 4 || (r.flags &= -2);
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
    for (Ce = 0; Ce < GA.length; Ce++) {
      const e = GA[Ce];
      e && !(e.flags & 8) && (e.flags & 4 && (e.flags &= -2), br(
        e,
        e.i,
        e.i ? 15 : 14
      ), e.flags & 4 || (e.flags &= -2));
    }
  } finally {
    for (; Ce < GA.length; Ce++) {
      const e = GA[Ce];
      e && (e.flags &= -2);
    }
    Ce = -1, GA.length = 0, nl(), fs = null, (GA.length || It.length) && il();
  }
}
let qA = null, ol = null;
function Bs(A) {
  const e = qA;
  return qA = A, ol = A && A.type.__scopeId || null, e;
}
function _u(A, e = qA, t) {
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
function IA(A, e) {
  if (qA === null)
    return A;
  const t = Vs(qA), r = A.dirs || (A.dirs = []);
  for (let s = 0; s < e.length; s++) {
    let [n, i, o, a = BA] = e[s];
    n && (Y(n) && (n = {
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
    a && (Re(), fe(a, t, 8, [
      A.el,
      o,
      A,
      e
    ]), Me());
  }
}
function Lu(A, e) {
  if (RA) {
    let t = RA.provides;
    const r = RA.parent && RA.parent.provides;
    r === t && (t = RA.provides = Object.create(r)), t[A] = e;
  }
}
function ss(A, e, t = !1) {
  const r = Kf();
  if (r || _t) {
    let s = _t ? _t._context.provides : r ? r.parent == null || r.ce ? r.vnode.appContext && r.vnode.appContext.provides : r.parent.provides : void 0;
    if (s && A in s)
      return s[A];
    if (arguments.length > 1)
      return t && Y(e) ? e.call(r && r.proxy) : e;
  }
}
const Su = /* @__PURE__ */ Symbol.for("v-scx"), Ku = () => ss(Su);
function nn(A, e, t) {
  return al(A, e, t);
}
function al(A, e, t = BA) {
  const { immediate: r, deep: s, flush: n, once: i } = t, o = vA({}, t), a = e && r || !e && n !== "post";
  let c;
  if (Qr) {
    if (n === "sync") {
      const Q = Ku();
      c = Q.__watcherHandles || (Q.__watcherHandles = []);
    } else if (!a) {
      const Q = () => {
      };
      return Q.stop = Fe, Q.resume = Fe, Q.pause = Fe, Q;
    }
  }
  const l = RA;
  o.call = (Q, C, U) => fe(Q, l, C, U);
  let u = !1;
  n === "post" ? o.scheduler = (Q) => {
    JA(Q, l && l.suspense);
  } : n !== "sync" && (u = !0, o.scheduler = (Q, C) => {
    C ? Q() : Ei(Q);
  }), o.augmentJob = (Q) => {
    e && (Q.flags |= 4), u && (Q.flags |= 2, l && (Q.id = l.uid, Q.i = l));
  };
  const B = Eu(A, e, o);
  return Qr && (c ? c.push(B) : a && B()), B;
}
function Tu(A, e, t) {
  const r = this.proxy, s = pA(A) ? A.includes(".") ? ll(r, A) : () => r[A] : A.bind(r, r);
  let n;
  Y(e) ? n = e : (n = e.handler, t = e);
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
const Du = /* @__PURE__ */ Symbol("_vte"), Os = (A) => A.__isTeleport, on = /* @__PURE__ */ Symbol("_leaveCb");
function ku(A) {
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
    return Os(A.type) && A.children ? ku(A.children) : A;
  if (A.component)
    return A.component.subTree;
  const { shapeFlag: e, children: t } = A;
  if (t) {
    if (e & 16)
      return t[0];
    if (e & 32 && Y(t.default))
      return t.default();
  }
}
function xi(A, e) {
  if (A.shapeFlag & 6 && A.component) {
    A.transition = e;
    const t = A.component.subTree;
    xi(
      Os(t.type) && cl(t) || t,
      e
    );
  } else A.shapeFlag & 128 ? (A.ssContent.transition = e.clone(A.ssContent), A.ssFallback.transition = e.clone(A.ssFallback)) : A.transition = e;
}
// @__NO_SIDE_EFFECTS__
function Ou(A, e) {
  return Y(A) ? (
    // #8236: extend call and options.name access are considered side-effects
    // by Rollup, so we have to wrap it in a pure-annotated IIFE.
    vA({ name: A.name }, e, { setup: A })
  ) : A;
}
function ul(A) {
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
      (U, T) => ir(
        U,
        e && (J(e) ? e[T] : e),
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
  const n = r.shapeFlag & 4 ? Vs(r.component) : r.el, i = s ? null : n, { i: o, r: a } = A, c = e && e.r, l = o.refs === BA ? o.refs = {} : o.refs, u = o.setupState, B = /* @__PURE__ */ aA(u), Q = u === BA ? _a : (U) => $i(l, U) ? !1 : rA(B, U), C = (U, T) => !(T && $i(l, T));
  if (c != null && c !== a) {
    if (Ao(e), pA(c))
      l[c] = null, Q(c) && (u[c] = null);
    else if (/* @__PURE__ */ PA(c)) {
      const U = e;
      C(c, U.k) && (c.value = null), U.k && (l[U.k] = null);
    }
  }
  if (Y(a))
    br(a, o, 12, [i, l]);
  else {
    const U = pA(a), T = /* @__PURE__ */ PA(a);
    if (U || T) {
      const g = () => {
        if (A.f) {
          const b = U ? Q(a) ? u[a] : l[a] : C() || !A.k ? a.value : l[A.k];
          if (s)
            J(b) && pi(b, n);
          else if (J(b))
            b.includes(n) || b.push(n);
          else if (U)
            l[a] = [n], Q(a) && (u[a] = l[a]);
          else {
            const M = [n];
            C(a, A.k) && (a.value = M), A.k && (l[A.k] = M);
          }
        } else U ? (l[a] = i, Q(a) && (u[a] = i)) : T && (C(a, A.k) && (a.value = i), A.k && (l[A.k] = i));
      };
      if (i) {
        const b = () => {
          g(), ds.delete(A);
        };
        b.id = -1, ds.set(A, b), JA(b, t);
      } else
        Ao(A), g();
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
function Ru(A, e) {
  fl(A, "a", e);
}
function Mu(A, e) {
  fl(A, "da", e);
}
function fl(A, e, t = RA) {
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
      Hi(s.parent.vnode) && Nu(r, e, t, s), s = s.parent;
  }
}
function Nu(A, e, t, r) {
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
      const o = mr(t), a = fe(e, t, A, i);
      return o(), Me(), a;
    });
    return r ? s.unshift(n) : s.push(n), n;
  }
}
const Pe = (A) => (e, t = RA) => {
  (!Qr || A === "sp") && Rs(A, (...r) => e(...r), t);
}, Vu = Pe("bm"), Gu = Pe("m"), Pu = Pe(
  "bu"
), Ju = Pe("u"), Xu = Pe(
  "bum"
), Bl = Pe("um"), Wu = Pe(
  "sp"
), Yu = Pe("rtg"), ju = Pe("rtc");
function Zu(A, e = RA) {
  Rs("ec", A, e);
}
const zu = "components";
function qu(A, e) {
  return Af(zu, A, !0, e) || A;
}
const $u = /* @__PURE__ */ Symbol.for("v-ndc");
function Af(A, e, t = !0, r = !1) {
  const s = qA || RA;
  if (s) {
    const n = s.type;
    {
      const o = Rf(
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
function fA(A, e, t, r) {
  let s;
  const n = t, i = J(A);
  if (i || pA(A)) {
    const o = i && /* @__PURE__ */ At(A);
    let a = !1, c = !1;
    o && (a = !/* @__PURE__ */ ce(A), c = /* @__PURE__ */ Ne(A), A = Ds(A)), s = new Array(A.length);
    for (let l = 0, u = A.length; l < u; l++)
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
  } else if (cA(A))
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
      Ei(A.update);
    }),
    $nextTick: (A) => A.n || (A.n = rl.bind(A.proxy)),
    $watch: (A) => Tu.bind(A)
  })
), an = (A, e) => A !== BA && !A.__isScriptSetup && rA(A, e), ef = {
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
    let l, u;
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
      u = a.config.globalProperties, rA(u, e)
    )
      return u[e];
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
function tf(A) {
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
    beforeMount: u,
    mounted: B,
    beforeUpdate: Q,
    updated: C,
    activated: U,
    deactivated: T,
    beforeDestroy: g,
    beforeUnmount: b,
    destroyed: M,
    unmounted: H,
    render: k,
    renderTracked: _,
    renderTriggered: W,
    errorCaptured: j,
    serverPrefetch: V,
    // public API
    expose: iA,
    inheritAttrs: UA,
    // assets
    components: EA,
    directives: eA,
    filters: wA
  } = e;
  if (c && rf(c, r, null), i)
    for (const z in i) {
      const AA = i[z];
      Y(AA) && (r[z] = AA.bind(t));
    }
  if (s) {
    const z = s.call(t, t);
    cA(z) && (A.data = /* @__PURE__ */ bi(z));
  }
  if (Vn = !0, n)
    for (const z in n) {
      const AA = n[z], xA = Y(AA) ? AA.bind(t, t) : Y(AA.get) ? AA.get.bind(t, t) : Fe, YA = !Y(AA) && Y(AA.set) ? AA.set.bind(t) : Fe, MA = Nf({
        get: xA,
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
    const z = Y(a) ? a.call(t) : a;
    Reflect.ownKeys(z).forEach((AA) => {
      Lu(AA, z[AA]);
    });
  }
  l && ro(l, A, "c");
  function sA(z, AA) {
    J(AA) ? AA.forEach((xA) => z(xA.bind(t))) : AA && z(AA.bind(t));
  }
  if (sA(Vu, u), sA(Gu, B), sA(Pu, Q), sA(Ju, C), sA(Ru, U), sA(Mu, T), sA(Zu, j), sA(ju, _), sA(Yu, W), sA(Xu, b), sA(Bl, H), sA(Wu, V), J(iA))
    if (iA.length) {
      const z = A.exposed || (A.exposed = {});
      iA.forEach((AA) => {
        Object.defineProperty(z, AA, {
          get: () => t[AA],
          set: (xA) => t[AA] = xA,
          enumerable: !0
        });
      });
    } else A.exposed || (A.exposed = {});
  k && A.render === Fe && (A.render = k), UA != null && (A.inheritAttrs = UA), EA && (A.components = EA), eA && (A.directives = eA), V && ul(A);
}
function rf(A, e, t = Fe) {
  J(A) && (A = Gn(A));
  for (const r in A) {
    const s = A[r];
    let n;
    cA(s) ? "default" in s ? n = ss(
      s.from || r,
      s.default,
      !0
    ) : n = ss(s.from || r) : n = ss(s), /* @__PURE__ */ PA(n) ? Object.defineProperty(e, r, {
      enumerable: !0,
      configurable: !0,
      get: () => n.value,
      set: (i) => n.value = i
    }) : e[r] = n;
  }
}
function ro(A, e, t) {
  fe(
    J(A) ? A.map((r) => r.bind(e.proxy)) : A.bind(e.proxy),
    e,
    t
  );
}
function dl(A, e, t, r) {
  let s = r.includes(".") ? ll(t, r) : () => t[r];
  if (pA(A)) {
    const n = e[A];
    Y(n) && nn(s, n);
  } else if (Y(A))
    nn(s, A.bind(t));
  else if (cA(A))
    if (J(A))
      A.forEach((n) => dl(n, e, t, r));
    else {
      const n = Y(A.handler) ? A.handler.bind(t) : e[A.handler];
      Y(n) && nn(s, n, A);
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
  ), gs(a, e, i)), cA(e) && n.set(e, a), a;
}
function gs(A, e, t, r = !1) {
  const { mixins: s, extends: n } = e;
  n && gs(A, n, t, !0), s && s.forEach(
    (i) => gs(A, i, t, !0)
  );
  for (const i in e)
    if (!(r && i === "expose")) {
      const o = sf[i] || t && t[i];
      A[i] = o ? o(A[i], e[i]) : e[i];
    }
  return A;
}
const sf = {
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
  watch: of,
  // provide / inject
  provide: so,
  inject: nf
};
function so(A, e) {
  return e ? A ? function() {
    return vA(
      Y(A) ? A.call(this, this) : A,
      Y(e) ? e.call(this, this) : e
    );
  } : e : A;
}
function nf(A, e) {
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
function of(A, e) {
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
let af = 0;
function lf(A, e) {
  return function(r, s = null) {
    Y(r) || (r = vA({}, r)), s != null && !cA(s) && (s = null);
    const n = hl(), i = /* @__PURE__ */ new WeakSet(), o = [];
    let a = !1;
    const c = n.app = {
      _uid: af++,
      _component: r,
      _props: s,
      _container: null,
      _context: n,
      _instance: null,
      version: Vf,
      get config() {
        return n.config;
      },
      set config(l) {
      },
      use(l, ...u) {
        return i.has(l) || (l && Y(l.install) ? (i.add(l), l.install(c, ...u)) : Y(l) && (i.add(l), l(c, ...u))), c;
      },
      mixin(l) {
        return n.mixins.includes(l) || n.mixins.push(l), c;
      },
      component(l, u) {
        return u ? (n.components[l] = u, c) : n.components[l];
      },
      directive(l, u) {
        return u ? (n.directives[l] = u, c) : n.directives[l];
      },
      mount(l, u, B) {
        if (!a) {
          const Q = c._ceVNode || be(r, s);
          return Q.appContext = n, B === !0 ? B = "svg" : B === !1 && (B = void 0), A(Q, l, B), a = !0, c._container = l, l.__vue_app__ = c, Vs(Q.component);
        }
      },
      onUnmount(l) {
        o.push(l);
      },
      unmount() {
        a && (fe(
          o,
          c._instance,
          16
        ), A(null, c._container), delete c._container.__vue_app__);
      },
      provide(l, u) {
        return n.provides[l] = u, c;
      },
      runWithContext(l) {
        const u = _t;
        _t = c;
        try {
          return l();
        } finally {
          _t = u;
        }
      }
    };
    return c;
  };
}
let _t = null;
const cf = (A, e) => e === "modelValue" || e === "model-value" ? A.modelModifiers : A[`${e}Modifiers`] || A[`${_A(e)}Modifiers`] || A[`${zA(e)}Modifiers`];
function uf(A, e, ...t) {
  if (A.isUnmounted) return;
  const r = A.vnode.props || BA;
  let s = t;
  const n = e.startsWith("update:"), i = n && cf(r, e.slice(7));
  i && (i.trim && (s = t.map((l) => pA(l) ? l.trim() : l)), i.number && (s = s.map(Qi)));
  let o, a = r[o = An(e)] || // also try camelCase event handler (#2249)
  r[o = An(_A(e))];
  !a && n && (a = r[o = An(zA(e))]), a && fe(
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
    A.emitted[o] = !0, fe(
      c,
      A,
      6,
      s
    );
  }
}
const ff = /* @__PURE__ */ new WeakMap();
function pl(A, e, t = !1) {
  const r = t ? ff : e.emitsCache, s = r.get(A);
  if (s !== void 0)
    return s;
  const n = A.emits;
  let i = {}, o = !1;
  if (!Y(A)) {
    const a = (c) => {
      const l = pl(c, e, !0);
      l && (o = !0, vA(i, l));
    };
    !t && e.mixins.length && e.mixins.forEach(a), A.extends && a(A.extends), A.mixins && A.mixins.forEach(a);
  }
  return !n && !o ? (cA(A) && r.set(A, null), null) : (J(n) ? n.forEach((a) => i[a] = null) : vA(i, n), cA(A) && r.set(A, i), i);
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
    props: u,
    data: B,
    setupState: Q,
    ctx: C,
    inheritAttrs: U
  } = A, T = Bs(A);
  let g, b;
  try {
    if (t.shapeFlag & 4) {
      const H = s || r, k = H;
      g = Ue(
        c.call(
          k,
          H,
          l,
          u,
          Q,
          B,
          C
        )
      ), b = o;
    } else {
      const H = e;
      g = Ue(
        H.length > 1 ? H(
          u,
          { attrs: o, slots: i, emit: a }
        ) : H(
          u,
          null
        )
      ), b = e.props ? o : Bf(o);
    }
  } catch (H) {
    gt.length = 0, ks(H, A, 1), g = be(Ve);
  }
  let M = g;
  if (b && U !== !1) {
    const H = Object.keys(b), { shapeFlag: k } = M;
    H.length && k & 7 && (n && H.some(Is) && (b = df(
      b,
      n
    )), M = Kt(M, b, !1, !0));
  }
  if (t.dirs && (M = Kt(M, null, !1, !0), M.dirs = M.dirs ? M.dirs.concat(t.dirs) : t.dirs), t.transition) {
    const H = Os(M.type) && cl(M) || M;
    xi(H, t.transition);
  }
  return g = M, Bs(T), g;
}
const Bf = (A) => {
  let e;
  for (const t in A)
    (t === "class" || t === "style" || Hs(t)) && ((e || (e = {}))[t] = A[t]);
  return e;
}, df = (A, e) => {
  const t = {};
  for (const r in A)
    (!Is(r) || !(r.slice(9) in e)) && (t[r] = A[r]);
  return t;
};
function gf(A, e, t) {
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
      for (let u = 0; u < l.length; u++) {
        const B = l[u];
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
  return t === "style" && cA(r) && cA(s) ? !Dt(r, s) : r !== s;
}
function hf({ vnode: A, parent: e, suspense: t }, r) {
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
function pf(A, e, t, r = !1) {
  const s = {}, n = Cl();
  A.propsDefaults = /* @__PURE__ */ Object.create(null), Ul(A, e, s, n);
  for (const i in A.propsOptions[0])
    i in s || (s[i] = void 0);
  t ? A.props = r ? s : /* @__PURE__ */ vu(s) : A.type.props ? A.props = s : A.props = n, A.attrs = n;
}
function wf(A, e, t, r) {
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
      for (let u = 0; u < l.length; u++) {
        let B = l[u];
        if (Ms(A.emitsOptions, B))
          continue;
        const Q = e[B];
        if (a)
          if (rA(n, B))
            Q !== n[B] && (n[B] = Q, c = !0);
          else {
            const C = _A(B);
            s[C] = Pn(
              a,
              o,
              C,
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
    for (const u in o)
      (!e || // for camelCase
      !rA(e, u) && // it's possible the original props was passed in as kebab-case
      // and converted to camelCase (#955)
      ((l = zA(u)) === u || !rA(e, l))) && (a ? t && // for camelCase
      (t[u] !== void 0 || // for kebab-case
      t[l] !== void 0) && (s[u] = Pn(
        a,
        o,
        u,
        void 0,
        A,
        !0
      )) : delete s[u]);
    if (n !== o)
      for (const u in n)
        (!e || !rA(e, u)) && (delete n[u], c = !0);
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
      const u = n[l];
      t[u] = Pn(
        s,
        a,
        u,
        c[u],
        A,
        !rA(c, u)
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
      if (i.type !== Function && !i.skipFactory && Y(a)) {
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
const Qf = /* @__PURE__ */ new WeakMap();
function Fl(A, e, t = !1) {
  const r = t ? Qf : e.propsCache, s = r.get(A);
  if (s)
    return s;
  const n = A.props, i = {}, o = [];
  let a = !1;
  if (!Y(A)) {
    const l = (u) => {
      a = !0;
      const [B, Q] = Fl(u, e, !0);
      vA(i, B), Q && o.push(...Q);
    };
    !t && e.mixins.length && e.mixins.forEach(l), A.extends && l(A.extends), A.mixins && A.mixins.forEach(l);
  }
  if (!n && !a)
    return cA(A) && r.set(A, ut), ut;
  if (J(n))
    for (let l = 0; l < n.length; l++) {
      const u = _A(n[l]);
      ao(u) && (i[u] = BA);
    }
  else if (n)
    for (const l in n) {
      const u = _A(l);
      if (ao(u)) {
        const B = n[l], Q = i[u] = J(B) || Y(B) ? { type: B } : vA({}, B), C = Q.type;
        let U = !1, T = !0;
        if (J(C))
          for (let g = 0; g < C.length; ++g) {
            const b = C[g], M = Y(b) && b.name;
            if (M === "Boolean") {
              U = !0;
              break;
            } else M === "String" && (T = !1);
          }
        else
          U = Y(C) && C.name === "Boolean";
        Q[
          0
          /* shouldCast */
        ] = U, Q[
          1
          /* shouldCastTrue */
        ] = T, (U || rA(Q, "default")) && o.push(u);
      }
    }
  const c = [i, o];
  return cA(A) && r.set(A, c), c;
}
function ao(A) {
  return A[0] !== "$" && !rr(A);
}
const Ii = (A) => A === "_" || A === "_ctx" || A === "$stable", _i = (A) => J(A) ? A.map(Ue) : [Ue(A)], Cf = (A, e, t) => {
  if (e._n)
    return e;
  const r = _u((...s) => _i(e(...s)), t);
  return r._c = !1, r;
}, bl = (A, e, t) => {
  const r = A._ctx;
  for (const s in A) {
    if (Ii(s)) continue;
    const n = A[s];
    if (Y(n))
      e[s] = Cf(s, n, r);
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
}, vf = (A, e, t) => {
  const r = A.slots = Cl();
  if (A.vnode.shapeFlag & 32) {
    const s = e._;
    s ? (yl(r, e, t), t && Ka(r, "_", s, !0)) : bl(e, r);
  } else e && ml(A, e);
}, Uf = (A, e, t) => {
  const { vnode: r, slots: s } = A;
  let n = !0, i = BA;
  if (r.shapeFlag & 32) {
    const o = e._;
    o ? t && o === 1 ? n = !1 : yl(s, e, t) : (n = !e.$stable, bl(e, s)), i = e;
  } else e && (ml(A, e), i = { default: 1 });
  if (n)
    for (const o in s)
      !Ii(o) && i[o] == null && delete s[o];
}, JA = Ef;
function Ff(A) {
  return bf(A);
}
function bf(A, e) {
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
    parentNode: u,
    nextSibling: B,
    setScopeId: Q = Fe,
    insertStaticContent: C
  } = A, U = (d, h, F, x = null, m = null, E = null, K = void 0, S = null, L = !!h.dynamicChildren) => {
    if (d === h)
      return;
    d && !Nt(d, h) && (x = de(d), mA(d, m, E, !0), d = null), h.patchFlag === -2 && (L = !1, h.dynamicChildren = null), h.dynamicChildren && d && d.dynamicChildren && d.dynamicChildren.hasOnce && (h.dynamicChildren === ut && (h.dynamicChildren = []), h.dynamicChildren.hasOnce = !0);
    const { type: y, ref: G, shapeFlag: O } = h;
    switch (y) {
      case Ns:
        T(d, h, F, x);
        break;
      case Ve:
        g(d, h, F, x);
        break;
      case cn:
        d == null && b(h, F, x, K);
        break;
      case P:
        EA(
          d,
          h,
          F,
          x,
          m,
          E,
          K,
          S,
          L
        );
        break;
      default:
        O & 1 ? k(
          d,
          h,
          F,
          x,
          m,
          E,
          K,
          S,
          L
        ) : O & 6 ? eA(
          d,
          h,
          F,
          x,
          m,
          E,
          K,
          S,
          L
        ) : (O & 64 || O & 128) && y.process(
          d,
          h,
          F,
          x,
          m,
          E,
          K,
          S,
          L,
          Ot
        );
    }
    G != null && m ? ir(G, d && d.ref, E, h || d, !h) : G == null && d && d.ref != null && ir(d.ref, null, E, d, !0);
  }, T = (d, h, F, x) => {
    if (d == null)
      r(
        h.el = o(h.children),
        F,
        x
      );
    else {
      const m = h.el = d.el;
      h.children !== d.children && c(m, h.children);
    }
  }, g = (d, h, F, x) => {
    d == null ? r(
      h.el = a(h.children || ""),
      F,
      x
    ) : h.el = d.el;
  }, b = (d, h, F, x) => {
    [d.el, d.anchor] = C(
      d.children,
      h,
      F,
      x,
      d.el,
      d.anchor
    );
  }, M = ({ el: d, anchor: h }, F, x) => {
    let m;
    for (; d && d !== h; )
      m = B(d), r(d, F, x), d = m;
    r(h, F, x);
  }, H = ({ el: d, anchor: h }) => {
    let F;
    for (; d && d !== h; )
      F = B(d), s(d), d = F;
    s(h);
  }, k = (d, h, F, x, m, E, K, S, L) => {
    if (h.type === "svg" ? K = "svg" : h.type === "math" && (K = "mathml"), d == null)
      _(
        h,
        F,
        x,
        m,
        E,
        K,
        S,
        L
      );
    else {
      const y = d.el && d.el._isVueCE ? d.el : null;
      try {
        y && y._beginPatch(), V(
          d,
          h,
          m,
          E,
          K,
          S,
          L
        );
      } finally {
        y && y._endPatch();
      }
    }
  }, _ = (d, h, F, x, m, E, K, S) => {
    let L, y;
    const { props: G, shapeFlag: O, transition: N, dirs: X } = d;
    if (L = d.el = i(
      d.type,
      E,
      G && G.is,
      G
    ), O & 8 ? l(L, d.children) : O & 16 && j(
      d.children,
      L,
      null,
      x,
      m,
      ln(d, E),
      K,
      S
    ), X && nt(d, null, x, "created"), W(L, d, d.scopeId, K, x), G) {
      for (const uA in G)
        uA !== "value" && !rr(uA) && n(L, uA, null, G[uA], E, x);
      "value" in G && n(L, "value", null, G.value, E), (y = G.onVnodeBeforeMount) && we(y, x, d);
    }
    X && nt(d, null, x, "beforeMount");
    const tA = mf(m, N);
    tA && N.beforeEnter(L), r(L, h, F), ((y = G && G.onVnodeMounted) || tA || X) && JA(() => {
      try {
        y && we(y, x, d), tA && N.enter(L), X && nt(d, null, x, "mounted");
      } finally {
      }
    }, m);
  }, W = (d, h, F, x, m) => {
    if (F && Q(d, F), x)
      for (let E = 0; E < x.length; E++)
        Q(d, x[E]);
    if (m) {
      let E = m.subTree;
      if (h === E || Il(E.type) && (E.ssContent === h || E.ssFallback === h)) {
        const K = m.vnode;
        W(
          d,
          K,
          K.scopeId,
          K.slotScopeIds,
          m.parent
        );
      }
    }
  }, j = (d, h, F, x, m, E, K, S, L = 0) => {
    for (let y = L; y < d.length; y++) {
      const G = d[y] = S ? Ke(d[y]) : Ue(d[y]);
      U(
        null,
        G,
        h,
        F,
        x,
        m,
        E,
        K,
        S
      );
    }
  }, V = (d, h, F, x, m, E, K) => {
    const S = h.el = d.el;
    let { patchFlag: L, dynamicChildren: y, dirs: G } = h;
    L |= d.patchFlag & 16;
    const O = d.props || BA, N = h.props || BA;
    let X;
    if (F && it(F, !1), (X = N.onVnodeBeforeUpdate) && we(X, F, h, d), G && nt(h, d, F, "beforeUpdate"), F && it(F, !0), // #6385 the old vnode may be a user-wrapped non-isomorphic block
    // Force full diff when block metadata is unstable.
    y && (!d.dynamicChildren || d.dynamicChildren.length !== y.length) && (L = 0, K = !1, y = null), (O.innerHTML && N.innerHTML == null || O.textContent && N.textContent == null) && l(S, ""), y ? iA(
      d.dynamicChildren,
      y,
      S,
      F,
      x,
      ln(h, m),
      E
    ) : K || AA(
      d,
      h,
      S,
      null,
      F,
      x,
      ln(h, m),
      E,
      !1
    ), L > 0) {
      if (L & 16)
        UA(S, O, N, F, m);
      else if (L & 2 && O.class !== N.class && n(S, "class", null, N.class, m), L & 4 && n(S, "style", O.style, N.style, m), L & 8) {
        const tA = h.dynamicProps;
        for (let uA = 0; uA < tA.length; uA++) {
          const oA = tA[uA], FA = O[oA], LA = N[oA];
          (LA !== FA || oA === "value") && n(S, oA, FA, LA, m, F);
        }
      }
      L & 1 && d.children !== h.children && l(S, h.children);
    } else !K && y == null && UA(S, O, N, F, m);
    ((X = N.onVnodeUpdated) || G) && JA(() => {
      X && we(X, F, h, d), G && nt(h, d, F, "updated");
    }, x);
  }, iA = (d, h, F, x, m, E, K) => {
    for (let S = 0; S < h.length; S++) {
      const L = d[S], y = h[S], G = (
        // oldVNode may be an errored async setup() component inside Suspense
        // which will not have a mounted element
        L.el && // - In the case of a Fragment, we need to provide the actual parent
        // of the Fragment itself so it can move its children.
        (L.type === P || // - In the case of different nodes, there is going to be a replacement
        // which also requires the correct parent container
        !Nt(L, y) || // - In the case of a component, it could contain anything.
        L.shapeFlag & 198) ? u(L.el) : (
          // In other cases, the parent container is not actually used so we
          // just pass the block element here to avoid a DOM parentNode call.
          F
        )
      );
      U(
        L,
        y,
        G,
        null,
        x,
        m,
        E,
        K,
        !0
      );
    }
  }, UA = (d, h, F, x, m) => {
    if (h !== F) {
      if (h !== BA)
        for (const E in h)
          !rr(E) && !(E in F) && n(
            d,
            E,
            h[E],
            null,
            m,
            x
          );
      for (const E in F) {
        if (rr(E)) continue;
        const K = F[E], S = h[E];
        K !== S && E !== "value" && n(d, E, S, K, m, x);
      }
      "value" in F && n(d, "value", h.value, F.value, m);
    }
  }, EA = (d, h, F, x, m, E, K, S, L) => {
    const y = h.el = d ? d.el : o(""), G = h.anchor = d ? d.anchor : o("");
    let { patchFlag: O, dynamicChildren: N, slotScopeIds: X } = h;
    X && (S = S ? S.concat(X) : X), d == null ? (r(y, F, x), r(G, F, x), j(
      // #10007
      // such fragment like `<></>` will be compiled into
      // a fragment which doesn't have a children.
      // In this case fallback to an empty array
      h.children || [],
      F,
      G,
      m,
      E,
      K,
      S,
      L
    )) : O > 0 && O & 64 && N && // #2715 the previous fragment could've been a BAILed one as a result
    // of renderSlot() with no valid children
    d.dynamicChildren && d.dynamicChildren.length === N.length ? (iA(
      d.dynamicChildren,
      N,
      F,
      m,
      E,
      K,
      S
    ), // #2080 if the stable fragment has a key, it's a <template v-for> that may
    //  get moved around. Make sure all root level vnodes inherit el.
    // #2134 or if it's a component root, it may also get moved around
    // as the component is being moved.
    (h.key != null || m && h === m.subTree) && El(
      d,
      h,
      !0
      /* shallow */
    )) : AA(
      d,
      h,
      F,
      G,
      m,
      E,
      K,
      S,
      L
    );
  }, eA = (d, h, F, x, m, E, K, S, L) => {
    h.slotScopeIds = S, d == null ? h.shapeFlag & 512 ? m.ctx.activate(
      h,
      F,
      x,
      K,
      L
    ) : wA(
      h,
      F,
      x,
      m,
      E,
      K,
      L
    ) : ie(d, h, L);
  }, wA = (d, h, F, x, m, E, K) => {
    const S = d.component = Sf(
      d,
      x,
      m
    );
    if (Hi(d) && (S.ctx.renderer = Ot), Tf(S, !1, K), S.asyncDep) {
      if (m && m.registerDep(S, sA, K), !d.el) {
        const L = S.subTree = be(Ve);
        g(null, L, h, F), d.placeholder = L.el;
      }
    } else
      sA(
        S,
        d,
        h,
        F,
        m,
        E,
        K
      );
  }, ie = (d, h, F) => {
    const x = h.component = d.component;
    if (gf(d, h, F))
      if (x.asyncDep && !x.asyncResolved) {
        h.el = d.el, z(x, h, F);
        return;
      } else
        x.next = h, x.update();
    else
      h.el = d.el, x.vnode = h;
  }, sA = (d, h, F, x, m, E, K) => {
    const S = () => {
      if (d.isMounted) {
        let { next: O, bu: N, u: X, parent: tA, vnode: uA } = d;
        {
          const he = xl(d);
          if (he) {
            O && (O.el = uA.el, z(d, O, K)), he.asyncDep.then(() => {
              JA(() => {
                d.isUnmounted || y();
              }, m);
            });
            return;
          }
        }
        let oA = O, FA;
        it(d, !1), O ? (O.el = uA.el, z(d, O, K)) : O = uA, N && rs(N), (FA = O.props && O.props.onVnodeBeforeUpdate) && we(FA, tA, O, uA), it(d, !0);
        const LA = io(d), ge = d.subTree;
        d.subTree = LA, U(
          ge,
          LA,
          // parent may have changed if it's in a teleport
          u(ge.el),
          // anchor may have changed if it's in a fragment
          de(ge),
          d,
          m,
          E
        ), O.el = LA.el, oA === null && hf(d, LA.el), X && JA(X, m), (FA = O.props && O.props.onVnodeUpdated) && JA(
          () => we(FA, tA, O, uA),
          m
        );
      } else {
        let O;
        const { el: N, props: X } = h, { bm: tA, m: uA, parent: oA, root: FA, type: LA } = d, ge = or(h);
        it(d, !1), tA && rs(tA), !ge && (O = X && X.onVnodeBeforeMount) && we(O, oA, h), it(d, !0);
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
            x,
            d,
            m,
            E
          ), h.el = he.el;
        }
        if (uA && JA(uA, m), !ge && (O = X && X.onVnodeMounted)) {
          const he = h;
          JA(
            () => we(O, oA, he),
            m
          );
        }
        (h.shapeFlag & 256 || oA && or(oA.vnode) && oA.vnode.shapeFlag & 256) && d.a && JA(d.a, m), d.isMounted = !0, h = F = x = null;
      }
    };
    d.scope.on();
    const L = d.effect = new Ra(S);
    d.scope.off();
    const y = d.update = L.run.bind(L), G = d.job = L.runIfDirty.bind(L);
    G.i = d, G.id = d.uid, L.scheduler = () => Ei(G), it(d, !0), y();
  }, z = (d, h, F) => {
    h.component = d;
    const x = d.vnode.props;
    d.vnode = h, d.next = null, wf(d, h.props, x, F), Uf(d, h.children, F), Re(), qi(d), Me();
  }, AA = (d, h, F, x, m, E, K, S, L = !1) => {
    const y = d && d.children, G = d ? d.shapeFlag : 0, O = h.children, { patchFlag: N, shapeFlag: X } = h;
    if (N > 0) {
      if (N & 128) {
        YA(
          y,
          O,
          F,
          x,
          m,
          E,
          K,
          S,
          L
        );
        return;
      } else if (N & 256) {
        xA(
          y,
          O,
          F,
          x,
          m,
          E,
          K,
          S,
          L
        );
        return;
      }
    }
    X & 8 ? (G & 16 && ee(y, m, E), O !== y && l(F, O)) : G & 16 ? X & 16 ? YA(
      y,
      O,
      F,
      x,
      m,
      E,
      K,
      S,
      L
    ) : ee(y, m, E, !0) : (G & 8 && l(F, ""), X & 16 && j(
      O,
      F,
      x,
      m,
      E,
      K,
      S,
      L
    ));
  }, xA = (d, h, F, x, m, E, K, S, L) => {
    d = d || ut, h = h || ut;
    const y = d.length, G = h.length, O = Math.min(y, G);
    let N;
    for (N = 0; N < O; N++) {
      const X = h[N] = L ? Ke(h[N]) : Ue(h[N]);
      U(
        d[N],
        X,
        F,
        null,
        m,
        E,
        K,
        S,
        L
      );
    }
    y > G ? ee(
      d,
      m,
      E,
      !0,
      !1,
      O
    ) : j(
      h,
      F,
      x,
      m,
      E,
      K,
      S,
      L,
      O
    );
  }, YA = (d, h, F, x, m, E, K, S, L) => {
    let y = 0;
    const G = h.length;
    let O = d.length - 1, N = G - 1;
    for (; y <= O && y <= N; ) {
      const X = d[y], tA = h[y] = L ? Ke(h[y]) : Ue(h[y]);
      if (Nt(X, tA))
        U(
          X,
          tA,
          F,
          null,
          m,
          E,
          K,
          S,
          L
        );
      else
        break;
      y++;
    }
    for (; y <= O && y <= N; ) {
      const X = d[O], tA = h[N] = L ? Ke(h[N]) : Ue(h[N]);
      if (Nt(X, tA))
        U(
          X,
          tA,
          F,
          null,
          m,
          E,
          K,
          S,
          L
        );
      else
        break;
      O--, N--;
    }
    if (y > O) {
      if (y <= N) {
        const X = N + 1, tA = X < G ? h[X].el : x;
        for (; y <= N; )
          U(
            null,
            h[y] = L ? Ke(h[y]) : Ue(h[y]),
            F,
            tA,
            m,
            E,
            K,
            S,
            L
          ), y++;
      }
    } else if (y > N)
      for (; y <= O; )
        mA(d[y], m, E, !0), y++;
    else {
      const X = y, tA = y, uA = /* @__PURE__ */ new Map();
      for (y = tA; y <= N; y++) {
        const jA = h[y] = L ? Ke(h[y]) : Ue(h[y]);
        jA.key != null && uA.set(jA.key, y);
      }
      let oA, FA = 0;
      const LA = N - tA + 1;
      let ge = !1, he = 0;
      const Rt = new Array(LA);
      for (y = 0; y < LA; y++) Rt[y] = 0;
      for (y = X; y <= O; y++) {
        const jA = d[y];
        if (FA >= LA) {
          mA(jA, m, E, !0);
          continue;
        }
        let pe;
        if (jA.key != null)
          pe = uA.get(jA.key);
        else
          for (oA = tA; oA <= N; oA++)
            if (Rt[oA - tA] === 0 && Nt(jA, h[oA])) {
              pe = oA;
              break;
            }
        pe === void 0 ? mA(jA, m, E, !0) : (Rt[pe - tA] = y + 1, pe >= he ? he = pe : ge = !0, U(
          jA,
          h[pe],
          F,
          null,
          m,
          E,
          K,
          S,
          L
        ), FA++);
      }
      const Vi = ge ? yf(Rt) : ut;
      for (oA = Vi.length - 1, y = LA - 1; y >= 0; y--) {
        const jA = tA + y, pe = h[jA], Gi = h[jA + 1], Pi = jA + 1 < G ? (
          // #13559, #14173 fallback to el placeholder for unresolved async component
          Gi.el || Hl(Gi)
        ) : x;
        Rt[y] === 0 ? U(
          null,
          pe,
          F,
          Pi,
          m,
          E,
          K,
          S,
          L
        ) : ge && (oA < 0 || y !== Vi[oA] ? MA(pe, F, Pi, 2) : oA--);
      }
    }
  }, MA = (d, h, F, x, m = null) => {
    const { el: E, type: K, transition: S, children: L, shapeFlag: y } = d;
    if (y & 6) {
      MA(d.component.subTree, h, F, x);
      return;
    }
    if (y & 128) {
      d.suspense.move(h, F, x);
      return;
    }
    if (y & 64) {
      K.move(d, h, F, Ot);
      return;
    }
    if (K === P) {
      r(E, h, F);
      for (let O = 0; O < L.length; O++)
        MA(L[O], h, F, x);
      r(d.anchor, h, F);
      return;
    }
    if (K === cn) {
      M(d, h, F);
      return;
    }
    if (x !== 2 && y & 1 && S)
      if (x === 0)
        S.persisted && !E[on] ? r(E, h, F) : (S.beforeEnter(E), r(E, h, F), JA(() => S.enter(E), m));
      else {
        const { leave: O, delayLeave: N, afterLeave: X } = S, tA = () => {
          d.ctx.isUnmounted ? s(E) : r(E, h, F);
        }, uA = () => {
          const oA = E._isLeaving || !!E[on];
          E._isLeaving && E[on](
            !0
            /* cancelled */
          ), S.persisted && !oA ? tA() : O(E, () => {
            tA(), X && X();
          });
        };
        N ? N(E, tA, uA) : uA();
      }
    else
      r(E, h, F);
  }, mA = (d, h, F, x = !1, m = !1) => {
    const {
      type: E,
      props: K,
      ref: S,
      children: L,
      dynamicChildren: y,
      shapeFlag: G,
      patchFlag: O,
      dirs: N,
      cacheIndex: X,
      memo: tA
    } = d;
    if ((O === -2 || y && y.hasOnce) && (m = !1), S != null && (Re(), ir(S, null, F, d, !0), Me()), X != null && (!d.ctx || d.ctx === h) && (h.renderCache[X] = void 0), G & 256) {
      h.ctx.deactivate(d);
      return;
    }
    const uA = G & 1 && N, oA = !or(d);
    let FA;
    if (oA && (FA = K && K.onVnodeBeforeUnmount) && we(FA, h, d), G & 6)
      oe(d.component, F, x);
    else {
      if (G & 128) {
        d.suspense.unmount(F, x);
        return;
      }
      uA && nt(d, null, h, "beforeUnmount"), G & 64 ? d.type.remove(
        d,
        h,
        F,
        Ot,
        x
      ) : y && // #5154
      // when v-once is used inside a block, setBlockTracking(-1) marks the
      // parent block with hasOnce: true
      // so that it doesn't take the fast path during unmount - otherwise
      // components nested in v-once are never unmounted.
      !y.hasOnce && // #1153: fast path should not be taken for non-stable (v-for) fragments
      (E !== P || O > 0 && O & 64) ? ee(
        y,
        h,
        F,
        !1,
        !0
      ) : (E === P && O & 384 || !m && G & 16) && ee(L, h, F), x && Ae(d);
    }
    const LA = tA != null && X == null;
    (oA && (FA = K && K.onVnodeUnmounted) || uA || LA) && JA(() => {
      FA && we(FA, h, d), uA && nt(d, null, h, "unmounted"), LA && (d.el = null);
    }, F);
  }, Ae = (d) => {
    const { type: h, el: F, anchor: x, transition: m } = d;
    if (h === P) {
      He(F, x);
      return;
    }
    if (h === cn) {
      H(d), m && !m.persisted && m.afterLeave && m.afterLeave();
      return;
    }
    const E = () => {
      s(F), m && !m.persisted && m.afterLeave && m.afterLeave();
    };
    if (d.shapeFlag & 1 && m && !m.persisted) {
      const { leave: K, delayLeave: S } = m, L = () => K(F, E);
      S ? S(d.el, E, L) : L();
    } else
      E();
  }, He = (d, h) => {
    let F;
    for (; d !== h; )
      F = B(d), s(d), d = F;
    s(h);
  }, oe = (d, h, F) => {
    const { bum: x, scope: m, job: E, subTree: K, um: S, m: L, a: y } = d;
    lo(L), lo(y), x && rs(x), m.stop(), E ? (E.flags |= 8, mA(K, d, h, F)) : d.vnode.el && K && (K.transition = d.vnode.transition, mA(K, d, h, F)), S && JA(S, h), JA(() => {
      d.isUnmounted = !0;
    }, h);
  }, ee = (d, h, F, x = !1, m = !1, E = 0) => {
    for (let K = E; K < d.length; K++)
      mA(d[K], h, F, x, m);
  }, de = (d) => {
    if (d.shapeFlag & 6)
      return de(d.component.subTree);
    if (d.shapeFlag & 128)
      return d.suspense.next();
    const h = B(d.anchor || d.el), F = h && h[Du];
    return F ? B(F) : h;
  };
  let $s = !1;
  const Ni = (d, h, F) => {
    let x;
    d == null ? h._vnode && (mA(h._vnode, null, null, !0), x = h._vnode.component) : U(
      h._vnode || null,
      d,
      h,
      null,
      null,
      null,
      F
    ), h._vnode = d, $s || ($s = !0, qi(x), nl(), $s = !1);
  }, Ot = {
    p: U,
    um: mA,
    m: MA,
    r: Ae,
    mt: wA,
    mc: j,
    pc: AA,
    pbc: iA,
    n: de,
    o: A
  };
  return {
    render: Ni,
    hydrate: void 0,
    createApp: lf(Ni)
  };
}
function ln({ type: A, props: e }, t) {
  return t === "svg" && A === "foreignObject" || t === "mathml" && A === "annotation-xml" && e && e.encoding && e.encoding.includes("html") ? void 0 : t;
}
function it({ effect: A, job: e }, t) {
  t ? (A.flags |= 32, e.flags |= 4) : (A.flags &= -33, e.flags &= -5);
}
function mf(A, e) {
  return (!A || A && !A.pendingBranch) && e && !e.persisted;
}
function El(A, e, t = !1) {
  const r = A.children, s = e.children;
  if (J(r) && J(s))
    for (let n = 0; n < r.length; n++) {
      const i = r[n];
      let o = s[n];
      o.shapeFlag & 1 && !o.dynamicChildren && ((o.patchFlag <= 0 || o.patchFlag === 32) && (o = s[n] = Ke(s[n]), o.el = i.el), !t && o.patchFlag !== -2 && El(i, o)), o.type === Ns && (o.patchFlag === -1 && (o = s[n] = Ke(o)), o.el = i.el), o.type === Ve && !o.el && (o.el = i.el);
    }
}
function yf(A) {
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
function xl(A) {
  const e = A.subTree.component;
  if (e)
    return e.asyncDep && !e.asyncResolved ? e : xl(e);
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
function Ef(A, e) {
  e && e.pendingBranch ? J(A) ? e.effects.push(...A) : e.effects.push(A) : Iu(A);
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
  return A.dynamicChildren = pr > 0 ? $A || ut : null, _l(), pr > 0 && $A && $A.push(A), A;
}
function w(A, e, t, r, s, n) {
  return Ll(
    f(
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
}) => (typeof A == "number" && (A = "" + A), A != null ? pA(A) || /* @__PURE__ */ PA(A) || Y(A) ? { i: qA, r: A, k: e, f: !!t } : A : null);
function f(A, e = null, t = null, r = 0, s = null, n = A === P ? 0 : 1, i = !1, o = !1) {
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
const be = xf;
function xf(A, e = null, t = null, r = 0, s = null, n = !1) {
  if ((!A || A === $u) && (A = Ve), Kl(A)) {
    const o = Kt(
      A,
      e,
      !0
      /* mergeRef: true */
    );
    return t && hs(o, t), pr > 0 && !n && $A && (o.shapeFlag & 6 ? $A[$A.indexOf(A)] = o : $A.push(o)), o.patchFlag = -2, o;
  }
  if (Mf(A) && (A = A.__vccOpts), e) {
    e = Hf(e);
    let { class: o, style: a } = e;
    o && !pA(o) && (e.class = $(o)), cA(a) && (/* @__PURE__ */ yi(a) && !J(a) && (a = vA({}, a)), e.style = Ts(a));
  }
  const i = pA(A) ? 1 : Il(A) ? 128 : Os(A) ? 64 : cA(A) ? 4 : Y(A) ? 2 : 0;
  return f(
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
function Hf(A) {
  return A ? /* @__PURE__ */ yi(A) || vl(A) ? vA({}, A) : A : null;
}
function Kt(A, e, t = !1, r = !1) {
  const { props: s, ref: n, patchFlag: i, children: o, transition: a } = A, c = e ? If(s || {}, e) : s, l = {
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
  return a && r && xi(
    l,
    a.clone(l)
  ), l;
}
function Z(A = " ", e = 0) {
  return be(Ns, null, A, e);
}
function I(A = "", e = !1) {
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
  else if (Y(e)) {
    if (r & 65) {
      hs(A, { default: e });
      return;
    }
    e = { default: e, _ctx: qA }, t = 32;
  } else
    e = String(e), r & 64 ? (t = 16, e = [Z(e)]) : t = 8;
  A.children = e, A.shapeFlag |= t;
}
function If(...A) {
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
  fe(A, e, 7, [
    t,
    r
  ]);
}
const _f = hl();
let Lf = 0;
function Sf(A, e, t) {
  const r = A.type, s = (e ? e.appContext : A.appContext) || _f, n = {
    uid: Lf++,
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
    scope: new tu(
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
  return n.ctx = { _: n }, n.root = e ? e.root : n, n.emit = uf.bind(null, n), A.ce && A.ce(n), n;
}
let RA = null;
const Kf = () => RA || qA;
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
}, uo = () => {
  RA && RA.scope.off(), ps(null);
};
function Dl(A) {
  return A.vnode.shapeFlag & 4;
}
let Qr = !1;
function Tf(A, e = !1, t = !1) {
  e && wr(e);
  const { props: r, children: s } = A.vnode, n = Dl(A);
  pf(A, r, n, e), vf(A, s, t || e);
  const i = n ? Df(A, e) : void 0;
  return e && wr(!1), i;
}
function Df(A, e) {
  const t = A.type;
  A.accessCache = /* @__PURE__ */ Object.create(null), A.proxy = new Proxy(A.ctx, ef);
  const { setup: r } = t;
  if (r) {
    Re();
    const s = A.setupContext = r.length > 1 ? Of(A) : null, n = mr(A), i = br(
      r,
      A,
      0,
      [
        A.props,
        s
      ]
    ), o = La(i);
    if (Me(), n(), (o || A.sp) && !or(A) && ul(A), o) {
      if (i.then(uo, uo), e)
        return i.then((a) => {
          wr(!0);
          try {
            fo(A, a, e);
          } finally {
            wr(!1);
          }
        }).catch((a) => {
          ks(a, A, 0);
        });
      A.asyncDep = i;
    } else
      fo(A, i);
  } else
    kl(A);
}
function fo(A, e, t) {
  Y(e) ? A.type.__ssrInlineRender ? A.ssrRender = e : A.render = e : cA(e) && (A.setupState = el(e)), kl(A);
}
function kl(A, e, t) {
  const r = A.type;
  A.render || (A.render = r.render || Fe);
  {
    const s = mr(A);
    Re();
    try {
      tf(A);
    } finally {
      Me(), s();
    }
  }
}
const kf = {
  get(A, e) {
    return OA(A, "get", ""), A[e];
  }
};
function Of(A) {
  const e = (t) => {
    A.exposed = t || {};
  };
  return {
    attrs: new Proxy(A.attrs, kf),
    slots: A.slots,
    emit: A.emit,
    expose: e
  };
}
function Vs(A) {
  return A.exposed ? A.exposeProxy || (A.exposeProxy = new Proxy(el(Uu(A.exposed)), {
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
function Rf(A, e = !0) {
  return Y(A) ? A.displayName || A.name : A.name || e && A.__name;
}
function Mf(A) {
  return Y(A) && "__vccOpts" in A;
}
const Nf = (A, e) => /* @__PURE__ */ mu(A, e, Qr), Vf = "3.5.43";
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
const Ol = Jn ? (A) => Jn.createHTML(A) : (A) => A, Gf = "http://www.w3.org/2000/svg", Pf = "http://www.w3.org/1998/Math/MathML", Se = typeof document < "u" ? document : null, go = Se && /* @__PURE__ */ Se.createElement("template"), Jf = {
  insert: (A, e, t) => {
    e.insertBefore(A, t || null);
  },
  remove: (A) => {
    const e = A.parentNode;
    e && e.removeChild(A);
  },
  createElement: (A, e, t, r) => {
    const s = e === "svg" ? Se.createElementNS(Gf, A) : e === "mathml" ? Se.createElementNS(Pf, A) : t ? Se.createElement(A, { is: t }) : Se.createElement(A);
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
}, Xf = /* @__PURE__ */ Symbol("_vtc");
function Wf(A, e, t) {
  const r = A[Xf];
  r && (e = (e ? [e, ...r] : [...r]).join(" ")), e == null ? A.removeAttribute("class") : t ? A.setAttribute("class", e) : A.className = e;
}
const ho = /* @__PURE__ */ Symbol("_vod"), Yf = /* @__PURE__ */ Symbol("_vsh"), jf = /* @__PURE__ */ Symbol(""), Zf = /(?:^|;)\s*display\s*:/;
function zf(A, e, t) {
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
      o != null ? $f(
        A,
        i,
        !pA(e) && e ? e[i] : void 0,
        o
      ) || Yt(r, i, o) : Yt(r, i, "");
    }
  } else if (s) {
    if (e !== t) {
      const i = r[jf];
      i && (t += ";" + i), r.cssText = t, n = Zf.test(t);
    }
  } else e && A.removeAttribute("style");
  ho in A && (A[ho] = n ? r.display : "", A[Yf] && (r.display = "none"));
}
const Lr = /\s*!important$/;
function Yt(A, e, t) {
  if (J(t))
    t.forEach((r) => Yt(A, e, r));
  else if (t == null && (t = ""), e.startsWith("--"))
    Lr.test(t) ? A.setProperty(e, t.replace(Lr, ""), "important") : A.setProperty(e, t);
  else {
    const r = qf(A, e);
    Lr.test(t) ? A.setProperty(
      zA(r),
      t.replace(Lr, ""),
      "important"
    ) : A[r] = t;
  }
}
const po = ["Webkit", "Moz", "ms"], un = {};
function qf(A, e) {
  const t = un[e];
  if (t)
    return t;
  let r = _A(e);
  if (r !== "filter" && r in A)
    return un[e] = r;
  r = Ss(r);
  for (let s = 0; s < po.length; s++) {
    const n = po[s] + r;
    if (n in A)
      return un[e] = n;
  }
  return e;
}
function $f(A, e, t, r) {
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
let fn = 0;
const nB = /* @__PURE__ */ Promise.resolve(), iB = () => fn || (nB.then(() => fn = 0), fn = Date.now());
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
        c && fe(
          c,
          e,
          5,
          o
        );
      }
    } else
      fe(
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
  e === "class" ? Wf(A, r, i) : e === "style" ? zf(A, t, r) : Hs(e) ? Is(e) || eB(A, e, t, r, n) : (e[0] === "." ? (e = e.slice(1), !0) : e[0] === "^" ? (e = e.slice(1), !1) : lB(A, e, r, i)) ? (Co(A, e, r), !A.tagName.includes("-") && (e === "value" || e === "checked" || e === "selected") && Qo(A, e, r, i, n, e !== "value")) : /* #11081 force set props for possible async custom element */ A._isVueCE && // #12408 check if it's declared prop or it's async custom element
  (cB(A, e) || // @ts-expect-error _def is private
  A._def.__asyncLoader && (/[A-Z]/.test(e) || !pA(r))) ? Co(A, _A(e), r, n, e) : (e === "true-value" ? A._trueValue = r : e === "false-value" && (A._falseValue = r), Qo(A, e, r, i));
};
function lB(A, e, t, r) {
  if (r)
    return !!(e === "innerHTML" || e === "textContent" || e in A && Uo(e) && Y(t));
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
  let r = /* @__PURE__ */ Ou(A, e);
  _s(r) && (r = vA({}, r, e));
  class s extends Li {
    constructor(i) {
      super(r, i, t);
    }
  }
  return s.def = r, s;
}
const uB = typeof HTMLElement < "u" ? HTMLElement : class {
};
class Li extends uB {
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
            let u;
            for (; u = l.nextNode(); )
              u.setAttribute(c, "");
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
function fB(A) {
  A.target.composing = !0;
}
function mo(A) {
  const e = A.target;
  e.composing && (e.composing = !1, e.dispatchEvent(new Event("input")));
}
const ft = /* @__PURE__ */ Symbol("_assign"), Sr = /* @__PURE__ */ Symbol("_initialValue");
function Bn(A, e, t) {
  return e && (A = A.trim()), t && (A = Qi(A)), A;
}
const is = {
  created(A, { modifiers: { lazy: e, trim: t, number: r } }, s) {
    A.parentNode && (A.type === "text" ? A[Sr] = A.defaultValue.replace(/[\r\n]/g, "") : A.type === "textarea" && (A[Sr] = A.defaultValue.replace(/\r\n?/g, `
`))), A[ft] = ws(s);
    const n = r || s.props && s.props.type === "number";
    lt(A, e ? "change" : "input", (i) => {
      i.target.composing || A[ft](Bn(A.value, t, n));
    }), (t || n) && lt(A, "change", () => {
      A.value = Bn(A.value, t, n);
    }), e || (lt(A, "compositionstart", fB), lt(A, "compositionend", mo), lt(A, "change", mo));
  },
  // set value on mounted so it's after min/max for type="range"
  mounted(A, { value: e, modifiers: { trim: t, number: r } }) {
    const s = e ?? "", n = A[Sr];
    delete A[Sr], n !== void 0 && (A.type === "text" || A.type === "textarea") && A.value !== n ? A[ft](Bn(A.value, t, r)) : A.value = s;
  },
  beforeUpdate(A, { value: e, oldValue: t, modifiers: { lazy: r, trim: s, number: n } }, i) {
    if (A[ft] = ws(i), A.composing) return;
    const o = (n || A.type === "number") && !/^0\d/.test(A.value) ? Qi(A.value) : A.value, a = e ?? "";
    if (o === a)
      return;
    const c = A.getRootNode();
    (c instanceof Document || c instanceof ShadowRoot) && c.activeElement === A && A.type !== "range" && (r && e === t || s && A.value.trim() === a) || (A.value = a);
  }
}, XA = {
  // #4096 array checkboxes need to be deep traversed
  deep: !0,
  created(A, e, t) {
    A[ft] = ws(t), lt(A, "change", () => {
      const r = A._modelValue, s = BB(A), n = A.checked, i = A[ft];
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
  mounted: yo,
  beforeUpdate(A, e, t) {
    A[ft] = ws(t), yo(A, e, t);
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
}, Eo = (A, e) => {
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
}, pB = /* @__PURE__ */ vA({ patchProp: aB }, Jf);
let xo;
function Ml() {
  return xo || (xo = Ff(pB));
}
const wB = (...A) => {
  Ml().render(...A);
}, Ho = (...A) => {
  const e = Ml().createApp(...A), { mount: t } = e;
  return e.mount = (r) => {
    const s = CB(r);
    if (!s) return;
    const n = e._component;
    !Y(n) && !n.render && !n.template && (n.template = s.innerHTML), s.nodeType === 1 && (s.textContent = "");
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
}, bB = { class: "bse-overlay" }, mB = { class: "bse-toolbar" }, yB = ["onClick"], EB = ["title", "onClick"], xB = ["disabled"], HB = ["disabled"], IB = { class: "bse-stage" };
function _B(A, e, t, r, s, n) {
  return p(), w("div", bB, [
    f("div", mB, [
      (p(!0), w(P, null, fA(s.tools, (i) => (p(), w("button", {
        key: i.id,
        class: $(["bse-btn", { active: s.tool === i.id }]),
        onClick: (o) => s.tool = i.id
      }, v(i.label), 11, yB))), 128)),
      e[8] || (e[8] = f("span", { class: "bse-sep" }, null, -1)),
      (p(!0), w(P, null, fA(s.colors, (i) => (p(), w("button", {
        key: i,
        class: $(["bse-color", { active: s.color === i }]),
        style: Ts({ background: i }),
        title: i,
        onClick: (o) => s.color = i
      }, null, 14, EB))), 128)),
      e[9] || (e[9] = f("span", { class: "bse-sep" }, null, -1)),
      f("button", {
        class: "bse-btn",
        disabled: !s.shapes.length,
        onClick: e[0] || (e[0] = (...i) => n.undo && n.undo(...i))
      }, "되돌리기", 8, xB),
      f("button", {
        class: "bse-btn",
        disabled: !s.shapes.length,
        onClick: e[1] || (e[1] = (...i) => n.clearAll && n.clearAll(...i))
      }, "모두 지우기", 8, HB),
      e[10] || (e[10] = f("span", { class: "bse-spacer" }, null, -1)),
      f("button", {
        class: "bse-btn",
        onClick: e[2] || (e[2] = (i) => A.$emit("cancel"))
      }, "취소"),
      f("button", {
        class: "bse-btn bse-btn--apply",
        onClick: e[3] || (e[3] = (...i) => n.apply && n.apply(...i))
      }, "적용")
    ]),
    f("div", IB, [
      f("canvas", {
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
const LB = /* @__PURE__ */ Si(FB, [["render", _B], ["styles", [vB]], ["__scopeId", "data-v-e3f0b15c"]]), SB = '.bug-target-tool[data-v-eb1adf0b]{margin-left:10px;margin-right:12px;font-size:11px;color:#aab;display:inline-flex;align-items:center;gap:4px;cursor:pointer;white-space:nowrap}.bug-target-tool input[data-v-eb1adf0b]{margin:0}.bug-target[data-v-eb1adf0b]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.bug-target button[data-v-eb1adf0b]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.bug-target button+button[data-v-eb1adf0b]{border-left:1px solid rgba(255,255,255,.18)}.bug-target__on[data-v-eb1adf0b]{background:#88aaff47;color:#fff}.screenshot-hint[data-v-eb1adf0b]{margin-top:4px;font-size:11px!important;color:#7f8a99!important}.bug-report-overlay[data-v-eb1adf0b]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:9100;background:#0000008c;display:flex;align-items:center;justify-content:center}.bug-report-modal[data-v-eb1adf0b]{width:640px;max-width:calc(100vw - 32px);max-height:90vh;background:var(--popup-bg, #1e1e2e);border-radius:10px;box-shadow:0 8px 32px #0009;display:flex;flex-direction:column;overflow:hidden}.bug-report-header[data-v-eb1adf0b]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid var(--primary-color, #3a3a5c);flex-shrink:0}.bug-report-title[data-v-eb1adf0b]{font-size:14px;font-weight:500;color:var(--text, #e0e0e0)}.bug-report-shortcut[data-v-eb1adf0b]{font-size:10px;font-weight:400;color:#666;margin-left:6px;background:#ffffff0f;border:1px solid rgba(255,255,255,.1);border-radius:4px;padding:1px 5px;letter-spacing:.03em}.bug-report-close[data-v-eb1adf0b]{background:none;border:none;color:#aaa;font-size:16px;cursor:pointer;line-height:1;padding:4px 6px}.bug-report-close[data-v-eb1adf0b]:hover{color:#fff}.bug-report-tabs[data-v-eb1adf0b]{display:flex;border-bottom:1px solid rgba(255,255,255,.07);flex-shrink:0}.bug-tab[data-v-eb1adf0b]{padding:8px 16px;font-size:12px;color:#888;background:none;border:none;cursor:pointer;position:relative;display:flex;align-items:center;gap:5px;transition:color .15s}.bug-tab[data-v-eb1adf0b]:hover{color:#ccc}.bug-tab.active[data-v-eb1adf0b]{color:var(--text, #e0e0e0)}.bug-tab.active[data-v-eb1adf0b]:after{content:"";position:absolute;bottom:-1px;left:0;right:0;height:2px;background:var(--primary-color, #6060cc)}.bug-tab-badge[data-v-eb1adf0b]{background:#c03030;color:#fff;border-radius:10px;font-size:10px;padding:0 5px;min-width:16px;text-align:center}.bug-report-body[data-v-eb1adf0b]{padding:14px 16px;overflow-y:auto;flex:1;display:flex;flex-direction:column;gap:14px}.bug-report-section[data-v-eb1adf0b]{display:flex;flex-direction:column;gap:6px}.bug-report-label[data-v-eb1adf0b]{font-size:11px;color:var(--text-sub, #9090a0);text-transform:uppercase;letter-spacing:.05em;display:flex;align-items:center;gap:10px}.screenshot-wrap[data-v-eb1adf0b]{border-radius:6px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#111;max-height:180px;display:flex;align-items:center;justify-content:center}.screenshot-img[data-v-eb1adf0b]{width:100%;max-height:180px;object-fit:contain;display:block}.screenshot-placeholder[data-v-eb1adf0b]{color:#555;font-size:13px;padding:24px}.bug-report-textarea[data-v-eb1adf0b]{width:100%;background:#ffffff0d;border:1px solid rgba(255,255,255,.1);border-radius:6px;color:var(--text, #e0e0e0);font-size:13px;padding:8px 10px;resize:vertical;box-sizing:border-box;font-family:inherit}.bug-report-textarea[data-v-eb1adf0b]::placeholder{color:#555}.bug-report-textarea[data-v-eb1adf0b]:focus{outline:none;border-color:var(--primary-color, #5555aa)}.included-chips[data-v-eb1adf0b]{display:flex;flex-wrap:wrap;gap:6px}.chip[data-v-eb1adf0b]{font-size:11px;padding:3px 8px;border-radius:12px;background:#ffffff12;color:#bbb;border:1px solid rgba(255,255,255,.1)}.log-filter-group[data-v-eb1adf0b]{display:flex;gap:8px;margin-left:auto}.log-filter-chip[data-v-eb1adf0b]{font-size:11px;display:flex;align-items:center;gap:3px;cursor:pointer;color:#888}.log-filter-chip input[data-v-eb1adf0b]{cursor:pointer}.log-filter-chip.error[data-v-eb1adf0b]{color:#e06060}.log-filter-chip.warn[data-v-eb1adf0b]{color:#c8a040}.log-filter-chip.log[data-v-eb1adf0b]{color:#6080b0}.log-list[data-v-eb1adf0b]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:340px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.log-item[data-v-eb1adf0b]{display:flex;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.log-item[data-v-eb1adf0b]:last-child{border-bottom:none}.log-item--error[data-v-eb1adf0b]{background:#c83c3c14}.log-item--warn[data-v-eb1adf0b]{background:#c8a02814}.log-time[data-v-eb1adf0b]{color:#555;flex-shrink:0}.log-badge-lv[data-v-eb1adf0b]{flex-shrink:0;width:36px;font-weight:700}.log-item--error .log-badge-lv[data-v-eb1adf0b]{color:#e06060}.log-item--warn .log-badge-lv[data-v-eb1adf0b]{color:#c8a040}.log-item--log .log-badge-lv[data-v-eb1adf0b]{color:#6080b0}.log-msg[data-v-eb1adf0b]{color:#bbb;word-break:break-all;white-space:pre-wrap}.log-empty[data-v-eb1adf0b]{padding:16px;color:#555;text-align:center;font-size:12px}.net-list[data-v-eb1adf0b]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:360px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.net-item[data-v-eb1adf0b]{display:flex;align-items:center;gap:6px;padding:4px 8px;border-bottom:1px solid rgba(255,255,255,.04);cursor:pointer}.net-item[data-v-eb1adf0b]:hover{background:#ffffff0a}.net-item[data-v-eb1adf0b]:last-child{border-bottom:none}.net-item--error[data-v-eb1adf0b]{background:#c83c3c12}.net-status[data-v-eb1adf0b]{flex-shrink:0;width:36px;font-weight:700;text-align:center;border-radius:3px;padding:1px 0;font-size:10px}.net-status.status-2xx[data-v-eb1adf0b]{color:#60c860}.net-status.status-3xx[data-v-eb1adf0b]{color:#c8c040}.net-status.status-4xx[data-v-eb1adf0b]{color:#e08040}.net-status.status-5xx[data-v-eb1adf0b],.net-status.status-err[data-v-eb1adf0b]{color:#e06060}.net-method[data-v-eb1adf0b]{flex-shrink:0;width:42px;color:#88c;font-weight:700}.net-url[data-v-eb1adf0b]{flex:1;color:#ccc;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.net-dur[data-v-eb1adf0b]{flex-shrink:0;color:#777;width:52px;text-align:right}.net-time[data-v-eb1adf0b]{flex-shrink:0;color:#555;width:56px;text-align:right}.net-detail[data-v-eb1adf0b]{background:#0006;padding:6px 12px;border-bottom:1px solid rgba(255,255,255,.06);color:#aaa;font-size:10px;display:flex;flex-direction:column;gap:4px}.net-detail code[data-v-eb1adf0b]{display:block;white-space:pre-wrap;word-break:break-all;color:#89b;margin-top:2px}.net-error-msg[data-v-eb1adf0b]{color:#e06060}.env-group[data-v-eb1adf0b]{background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;overflow:hidden}.env-group+.env-group[data-v-eb1adf0b]{margin-top:8px}.env-group-title[data-v-eb1adf0b]{font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:#666;padding:5px 10px;background:#ffffff0a;border-bottom:1px solid rgba(255,255,255,.06)}.env-row[data-v-eb1adf0b]{display:flex;justify-content:space-between;padding:4px 10px;font-size:11px;font-family:Courier New,monospace;border-bottom:1px solid rgba(255,255,255,.04)}.env-row[data-v-eb1adf0b]:last-child{border-bottom:none}.env-row span[data-v-eb1adf0b]:first-child{color:#777;flex-shrink:0;margin-right:12px}.env-row span[data-v-eb1adf0b]:last-child{color:#ccc;text-align:right;word-break:break-all}.chip--ok[data-v-eb1adf0b]{border-color:#3cb43c66;color:#80e080}.chip--err[data-v-eb1adf0b]{border-color:#c83c3c66;color:#e08080}.log-source-toggle[data-v-eb1adf0b]{display:flex;gap:0;border:1px solid rgba(255,255,255,.12);border-radius:6px;overflow:hidden;flex-shrink:0;align-self:flex-start}.log-src-btn[data-v-eb1adf0b]{padding:5px 16px;font-size:12px;background:transparent;border:none;color:#777;cursor:pointer;display:flex;align-items:center;gap:5px;transition:background .15s,color .15s}.log-src-btn+.log-src-btn[data-v-eb1adf0b]{border-left:1px solid rgba(255,255,255,.12)}.log-src-btn.active[data-v-eb1adf0b]{background:#6464c833;color:#ccc}.log-src-btn[data-v-eb1adf0b]:hover:not(.active){background:#ffffff0d}.log-src-spin[data-v-eb1adf0b]{animation:spin-eb1adf0b 1s linear infinite;display:inline-block}.log-src-err[data-v-eb1adf0b]{color:#e06060;font-weight:700}@keyframes spin-eb1adf0b{to{transform:rotate(360deg)}}.log-logger[data-v-eb1adf0b]{flex-shrink:0;max-width:140px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#668;margin-right:4px}.log-empty--error[data-v-eb1adf0b]{color:#e06060}.event-list[data-v-eb1adf0b]{border:1px solid rgba(255,255,255,.08);border-radius:4px;background:#00000040;max-height:180px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.event-item[data-v-eb1adf0b]{display:flex;gap:10px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.event-item[data-v-eb1adf0b]:last-child{border-bottom:none}.event-time[data-v-eb1adf0b]{color:#555;flex-shrink:0}.event-type[data-v-eb1adf0b]{color:#9ad}.env-list[data-v-eb1adf0b]{display:flex;flex-wrap:wrap;gap:4px;justify-content:flex-end}.env-tag[data-v-eb1adf0b]{background:#6478c826;border:1px solid rgba(100,120,200,.25);border-radius:3px;padding:1px 6px;font-size:10px;color:#aac}.severity-group[data-v-eb1adf0b]{display:flex;gap:6px}.severity-btn[data-v-eb1adf0b]{padding:4px 12px;font-size:11px;border-radius:12px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#777;cursor:pointer;transition:background .15s,color .15s,border-color .15s}.severity-btn[data-v-eb1adf0b]:hover{color:#ccc}.severity-btn--critical.active[data-v-eb1adf0b]{background:#b41e1e4d;border-color:#b01e1e;color:#f08080}.severity-btn--high.active[data-v-eb1adf0b]{background:#c864144d;border-color:#c86414;color:#f0a060}.severity-btn--medium.active[data-v-eb1adf0b]{background:#b4a0144d;border-color:#b4a014;color:#e0d060}.severity-btn--low.active[data-v-eb1adf0b]{background:#28783c4d;border-color:#287840;color:#80d090}.mutation-type[data-v-eb1adf0b]{flex-shrink:0;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;color:#88c;font-weight:700;margin-right:4px}.mutation-payload[data-v-eb1adf0b]{color:#79a;font-size:10px}.route-list[data-v-eb1adf0b]{border:1px solid rgba(255,255,255,.08);border-radius:6px;background:#0000004d;max-height:200px;overflow-y:auto;font-size:11px;font-family:Courier New,monospace}.route-item[data-v-eb1adf0b]{display:flex;align-items:center;gap:6px;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.04)}.route-item[data-v-eb1adf0b]:last-child{border-bottom:none}.route-from[data-v-eb1adf0b]{color:#888;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:180px}.route-arrow[data-v-eb1adf0b]{color:#555;flex-shrink:0}.route-to[data-v-eb1adf0b]{color:#aac;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;flex:1}.bug-btn-copy[data-v-eb1adf0b]{padding:7px 14px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:12px;cursor:pointer;display:flex;align-items:center;gap:5px;margin-right:auto;transition:background .15s,color .15s}.bug-btn-copy[data-v-eb1adf0b]:hover:not(:disabled){background:#ffffff12;color:#fff}.bug-btn-copy[data-v-eb1adf0b]:disabled{opacity:.4;cursor:default}.bug-btn-sm[data-v-eb1adf0b]{font-size:11px;padding:2px 8px;border-radius:4px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;cursor:pointer}.bug-btn-sm[data-v-eb1adf0b]:hover:not(:disabled){background:#ffffff14}.bug-btn-sm[data-v-eb1adf0b]:disabled{opacity:.4;cursor:default}.bug-report-footer[data-v-eb1adf0b]{display:flex;justify-content:flex-end;gap:8px;padding:12px 16px;border-top:1px solid rgba(255,255,255,.06);flex-shrink:0}.bug-btn-cancel[data-v-eb1adf0b]{padding:7px 16px;border-radius:6px;border:1px solid rgba(255,255,255,.15);background:transparent;color:#aaa;font-size:13px;cursor:pointer}.bug-btn-cancel[data-v-eb1adf0b]:hover{background:#ffffff12}.bug-btn-download[data-v-eb1adf0b]{padding:7px 18px;border-radius:6px;border:none;background:#c03030;color:#fff;font-size:13px;font-weight:500;cursor:pointer}.bug-btn-download[data-v-eb1adf0b]:hover:not(:disabled){background:#d04040}.bug-btn-download[data-v-eb1adf0b]:disabled{opacity:.4;cursor:default}.bug-capture-overlay[data-v-eb1adf0b]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99999;display:flex;align-items:center;justify-content:center;background:#00000073;-webkit-backdrop-filter:blur(2px);backdrop-filter:blur(2px)}.bug-capture-spinner[data-v-eb1adf0b]{display:flex;align-items:center;gap:10px;background:#141c28eb;border:1px solid rgba(255,255,255,.1);border-radius:10px;padding:16px 24px;color:#a8c0d8;font-size:13px;letter-spacing:.3px}.bug-capture-spin[data-v-eb1adf0b]{display:inline-block;width:16px;height:16px;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:bug-spin-eb1adf0b .7s linear infinite;flex-shrink:0}@keyframes bug-spin-eb1adf0b{to{transform:rotate(360deg)}}.bug-btn-save[data-v-eb1adf0b]{display:inline-flex;align-items:center;gap:5px;padding:5px 12px;border-radius:5px;border:1px solid rgba(46,204,113,.4);background:#2ecc711a;color:#2ecc71;font-size:11px;cursor:pointer;transition:background .15s}.bug-btn-save[data-v-eb1adf0b]:hover:not(:disabled){background:#2ecc7133}.bug-btn-save[data-v-eb1adf0b]:disabled{opacity:.5;cursor:default}.bug-btn-list[data-v-eb1adf0b]{padding:5px 10px;border-radius:5px;border:1px solid rgba(255,255,255,.1);background:#ffffff0a;color:#789;font-size:11px;cursor:pointer;margin-right:auto}.bug-btn-list[data-v-eb1adf0b]:hover{background:#ffffff14;color:#abc}', KB = [
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
    toolProject() {
      return this.projects.find((A) => {
        var e;
        return ((e = this.info[A.key]) == null ? void 0 : e.canFix) === !1;
      }) || null;
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
      }), this.problemDesc = "", this.reproSteps = "", this.expectedResult = "", this.severity = "MEDIUM", this.screenshotUrl = null, this.activeTab = "basic", this.expandedNet = null, this.logSource = "front", this.allLogs = ((s = this.kit) == null ? void 0 : s.getLogs()) ?? [], this.networkLogs = ((n = this.kit) == null ? void 0 : n.getNetwork()) ?? [], this.backendLogs = [], this.backendLogsState = "idle", this.isCapturing = !0, await this.$nextTick();
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
}, GB = ["onClick"], PB = ["title"], JB = ["checked"], XB = { class: "bug-report-tabs" }, WB = ["onClick"], YB = {
  key: 0,
  class: "bug-tab-badge"
}, jB = { class: "bug-report-body" }, ZB = { class: "bug-report-section" }, zB = { class: "bug-report-label" }, qB = ["disabled"], $B = ["disabled"], Ad = ["src"], ed = {
  key: 1,
  class: "screenshot-placeholder"
}, td = { class: "bug-report-section" }, rd = { class: "severity-group" }, sd = ["onClick"], nd = { class: "bug-report-section" }, id = { class: "bug-report-section" }, od = { class: "bug-report-section" }, ad = { class: "bug-report-section" }, ld = { class: "included-chips" }, cd = { class: "chip" }, ud = { class: "chip" }, fd = {
  key: 0,
  class: "chip"
}, Bd = {
  key: 1,
  class: "chip"
}, dd = { class: "log-source-toggle" }, gd = {
  key: 0,
  class: "log-src-spin"
}, hd = {
  key: 1,
  class: "log-src-err"
}, pd = {
  key: 0,
  class: "bug-report-section"
}, wd = { class: "bug-report-label" }, Qd = { class: "log-filter-group" }, Cd = { class: "log-filter-chip error" }, vd = { class: "log-filter-chip warn" }, Ud = { class: "log-filter-chip log" }, Fd = { class: "log-list" }, bd = { class: "log-time" }, md = { class: "log-badge-lv" }, yd = { class: "log-msg" }, Ed = {
  key: 0,
  class: "log-empty"
}, xd = {
  key: 1,
  class: "bug-report-section"
}, Hd = { class: "bug-report-label" }, Id = { class: "log-filter-group" }, _d = { class: "log-filter-chip error" }, Ld = { class: "log-filter-chip warn" }, Sd = { class: "log-filter-chip log" }, Kd = {
  key: 0,
  class: "log-empty"
}, Td = {
  key: 1,
  class: "log-empty"
}, Dd = {
  key: 2,
  class: "log-empty log-empty--error"
}, kd = {
  key: 3,
  class: "log-list"
}, Od = { class: "log-time" }, Rd = { class: "log-badge-lv" }, Md = { class: "log-logger" }, Nd = { class: "log-msg" }, Vd = {
  key: 0,
  class: "log-empty"
}, Gd = {
  key: 2,
  class: "bug-report-section"
}, Pd = { class: "net-list" }, Jd = ["onClick"], Xd = { class: "net-method" }, Wd = { class: "net-url" }, Yd = { class: "net-dur" }, jd = { class: "net-time" }, Zd = {
  key: 0,
  class: "net-detail"
}, zd = { key: 0 }, qd = { key: 1 }, $d = { key: 2 }, Ag = {
  key: 3,
  class: "net-error-msg"
}, eg = {
  key: 0,
  class: "log-empty"
}, tg = { class: "bug-report-section" }, rg = { class: "log-list" }, sg = { class: "log-time" }, ng = { class: "mutation-type" }, ig = {
  key: 0,
  class: "log-msg mutation-payload"
}, og = {
  key: 0,
  class: "log-empty"
}, ag = { class: "bug-report-section" }, lg = { class: "route-list" }, cg = { class: "log-time" }, ug = { class: "route-from" }, fg = { class: "route-to" }, Bg = {
  key: 0,
  class: "log-empty"
}, dg = {
  key: 0,
  class: "bug-report-section"
}, gg = { class: "env-group" }, hg = {
  key: 1,
  class: "bug-report-section"
}, pg = { class: "env-group" }, wg = { class: "env-row" }, Qg = { class: "env-row" }, Cg = { class: "env-row" }, vg = { class: "env-row" }, Ug = { class: "env-row" }, Fg = {
  key: 0,
  class: "bug-report-section"
}, bg = {
  key: 1,
  class: "bug-report-section"
}, mg = {
  key: 0,
  class: "env-group"
}, yg = { class: "env-row" }, Eg = {
  key: 0,
  class: "env-row"
}, xg = {
  key: 1,
  class: "env-row"
}, Hg = { class: "env-group" }, Ig = { class: "env-row" }, _g = { class: "env-row" }, Lg = { class: "env-row" }, Sg = { class: "env-row" }, Kg = { class: "env-row" }, Tg = { class: "env-group" }, Dg = { class: "env-row" }, kg = { class: "env-row" }, Og = { class: "env-row" }, Rg = { class: "env-list" }, Mg = { key: 0 }, Ng = { class: "env-row" }, Vg = { class: "env-list" }, Gg = { key: 0 }, Pg = {
  key: 0,
  class: "env-row"
}, Jg = { class: "env-list" }, Xg = {
  key: 1,
  class: "env-row"
}, Wg = { class: "env-list" }, Yg = { class: "env-group" }, jg = { class: "event-list" }, Zg = { class: "event-time" }, zg = { class: "event-type" }, qg = {
  key: 0,
  class: "log-empty"
}, $g = {
  key: 1,
  class: "env-group"
}, Ah = { class: "env-row" }, eh = { class: "env-row" }, th = { class: "env-row" }, rh = { class: "env-row" }, sh = { class: "env-group" }, nh = { class: "env-row" }, ih = { class: "env-row" }, oh = {
  key: 0,
  class: "env-row"
}, ah = {
  key: 1,
  class: "env-row"
}, lh = { class: "env-row" }, ch = { class: "bug-report-footer" }, uh = ["disabled", "title"], fh = ["disabled"], Bh = {
  key: 0,
  class: "bug-capture-spin",
  style: { width: "11px", height: "11px", "border-width": "2px" }
}, dh = ["disabled"];
function gh(A, e, t, r, s, n) {
  var o, a, c, l, u, B, Q, C, U, T;
  const i = qu("ScreenshotEditor");
  return p(), w("div", DB, [
    s.isCapturing && !s.isOpen ? (p(), w("div", kB, [...e[27] || (e[27] = [
      f("div", { class: "bug-capture-spinner" }, [
        f("span", { class: "bug-capture-spin" }),
        Z(" 화면 캡처 중... ")
      ], -1)
    ])])) : I("", !0),
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
      }, null, 8, ["src", "onApply"])) : I("", !0),
      f("div", OB, [
        f("div", RB, [
          f("span", MB, [
            e[28] || (e[28] = Z("버그 신고 ", -1)),
            n.hotkey ? (p(), w("span", NB, v(n.hotkey), 1)) : I("", !0)
          ]),
          n.appProjects.length > 1 ? (p(), w("span", VB, [
            (p(!0), w(P, null, fA(n.appProjects, (g) => (p(), w("button", {
              key: g.key,
              class: $({ "bug-target__on": s.project === g.key }),
              onClick: (b) => n.setProject(g.key)
            }, v(g.label), 11, GB))), 128))
          ])) : I("", !0),
          n.toolProject ? (p(), w("label", {
            key: 1,
            class: "bug-target-tool",
            title: `${n.toolProject.label} 쪽으로 신고합니다 (운영자가 처리)`
          }, [
            f("input", {
              type: "checkbox",
              checked: s.project === n.toolProject.key,
              onChange: e[1] || (e[1] = (g) => {
                var b;
                return n.setProject(g.target.checked ? n.toolProject.key : (b = n.appProjects[0]) == null ? void 0 : b.key);
              })
            }, null, 40, JB),
            Z(" " + v(n.toolProject.label) + " 문제 ", 1)
          ], 8, PB)) : I("", !0),
          f("button", {
            class: "bug-report-close",
            onClick: e[2] || (e[2] = (...g) => n.close && n.close(...g))
          }, "✕")
        ]),
        f("div", XB, [
          (p(!0), w(P, null, fA(n.tabs, (g) => (p(), w("button", {
            key: g.id,
            class: $(["bug-tab", { active: s.activeTab === g.id }]),
            onClick: (b) => s.activeTab = g.id
          }, [
            Z(v(g.label) + " ", 1),
            g.badge ? (p(), w("span", YB, v(g.badge), 1)) : I("", !0)
          ], 10, WB))), 128))
        ]),
        f("div", jB, [
          s.activeTab === "basic" ? (p(), w(P, { key: 0 }, [
            f("div", ZB, [
              f("div", zB, [
                e[29] || (e[29] = Z(" 화면 캡처 ", -1)),
                f("button", {
                  class: "bug-btn-sm",
                  onClick: e[3] || (e[3] = (...g) => n.recapture && n.recapture(...g)),
                  disabled: s.isCapturing
                }, v(s.isCapturing ? "캡처 중..." : "다시 찍기"), 9, qB),
                f("button", {
                  class: "bug-btn-sm",
                  onClick: e[4] || (e[4] = (g) => s.isEditingShot = !0),
                  disabled: !s.screenshotUrl
                }, "그리기·표시", 8, $B),
                f("button", {
                  class: "bug-btn-sm",
                  onClick: e[5] || (e[5] = (g) => A.$refs.shotFile.click())
                }, "이미지 불러오기"),
                f("input", {
                  ref: "shotFile",
                  type: "file",
                  accept: "image/*",
                  hidden: "",
                  onChange: e[6] || (e[6] = (...g) => n.onShotFile && n.onShotFile(...g))
                }, null, 544)
              ]),
              f("div", {
                class: $(["screenshot-wrap", { "screenshot-wrap--editable": s.screenshotUrl }]),
                title: "클릭해서 그리기·표시",
                onClick: e[7] || (e[7] = (g) => s.screenshotUrl && (s.isEditingShot = !0))
              }, [
                s.screenshotUrl ? (p(), w("img", {
                  key: 0,
                  src: s.screenshotUrl,
                  class: "screenshot-img",
                  alt: "screenshot"
                }, null, 8, Ad)) : (p(), w("div", ed, "캡처 중..."))
              ], 2),
              e[30] || (e[30] = f("div", { class: "screenshot-hint" }, "이미지를 붙여넣기(Ctrl+V)해도 캡처 대신 쓸 수 있습니다.", -1))
            ]),
            f("div", td, [
              e[31] || (e[31] = f("div", { class: "bug-report-label" }, "심각도", -1)),
              f("div", rd, [
                (p(!0), w(P, null, fA(s.severityOptions, (g) => (p(), w("button", {
                  key: g.value,
                  class: $(["severity-btn", `severity-btn--${g.value.toLowerCase()}`, { active: s.severity === g.value }]),
                  onClick: (b) => s.severity = g.value
                }, v(g.label), 11, sd))), 128))
              ])
            ]),
            f("div", nd, [
              e[32] || (e[32] = f("div", { class: "bug-report-label" }, "문제 상황", -1)),
              IA(f("textarea", {
                "onUpdate:modelValue": e[8] || (e[8] = (g) => s.problemDesc = g),
                class: "bug-report-textarea",
                placeholder: "어떤 문제가 발생했나요?",
                rows: "2"
              }, null, 512), [
                [is, s.problemDesc]
              ])
            ]),
            f("div", id, [
              e[33] || (e[33] = f("div", { class: "bug-report-label" }, "재현 단계", -1)),
              IA(f("textarea", {
                "onUpdate:modelValue": e[9] || (e[9] = (g) => s.reproSteps = g),
                class: "bug-report-textarea",
                placeholder: `1. …
2. …
3. …`,
                rows: "3"
              }, null, 512), [
                [is, s.reproSteps]
              ])
            ]),
            f("div", od, [
              e[34] || (e[34] = f("div", { class: "bug-report-label" }, "기대 결과", -1)),
              IA(f("textarea", {
                "onUpdate:modelValue": e[10] || (e[10] = (g) => s.expectedResult = g),
                class: "bug-report-textarea",
                placeholder: "어떻게 동작해야 하나요?",
                rows: "2"
              }, null, 512), [
                [is, s.expectedResult]
              ])
            ]),
            f("div", ad, [
              e[38] || (e[38] = f("div", { class: "bug-report-label" }, "다운로드에 포함되는 정보", -1)),
              f("div", ld, [
                e[35] || (e[35] = f("span", { class: "chip" }, "📸 스크린샷", -1)),
                e[36] || (e[36] = f("span", { class: "chip" }, "🌐 환경 정보", -1)),
                f("span", cd, "📡 네트워크 요청 (" + v(s.networkLogs.length) + "건)", 1),
                f("span", ud, "📋 프론트 로그 (" + v(s.allLogs.length) + "건)", 1),
                f("span", {
                  class: $(["chip", s.backendLogsState === "ok" ? "chip--ok" : s.backendLogsState === "error" ? "chip--err" : ""])
                }, " 🖥 백엔드 로그 (" + v(s.backendLogsState === "ok" ? s.backendLogs.length + "건" : s.backendLogsState === "loading" ? "로딩 중" : s.backendLogsState === "skipped" ? "프론트 에러로 판단, 미수집" : s.backendLogsState === "error" ? "조회 실패" : "대기") + ") ", 3),
                (o = s.context) != null && o.camera ? (p(), w("span", fd, "📍 카메라 위치")) : I("", !0),
                e[37] || (e[37] = f("span", { class: "chip" }, "🗂 앱 상태", -1)),
                (a = s.context) != null && a.user ? (p(), w("span", Bd, "👤 " + v(s.context.user.username), 1)) : I("", !0)
              ])
            ])
          ], 64)) : I("", !0),
          s.activeTab === "logs" ? (p(), w(P, { key: 1 }, [
            f("div", dd, [
              f("button", {
                class: $(["log-src-btn", { active: s.logSource === "front" }]),
                onClick: e[11] || (e[11] = (g) => s.logSource = "front")
              }, " 프론트엔드 ", 2),
              f("button", {
                class: $(["log-src-btn", { active: s.logSource === "backend" }]),
                onClick: e[12] || (e[12] = (g) => s.logSource = "backend")
              }, [
                e[39] || (e[39] = Z(" 백엔드 ", -1)),
                s.backendLogsState === "loading" ? (p(), w("span", gd, "⟳")) : s.backendLogsState === "error" ? (p(), w("span", hd, "!")) : I("", !0)
              ], 2)
            ]),
            s.logSource === "front" ? (p(), w("div", pd, [
              f("div", wd, [
                e[40] || (e[40] = Z(" 프론트엔드 콘솔 로그 ", -1)),
                f("div", Qd, [
                  f("label", Cd, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[13] || (e[13] = (g) => s.showError = g)
                    }, null, 512), [
                      [XA, s.showError]
                    ]),
                    Z(" 오류 (" + v(n.countByLevel("error")) + ")", 1)
                  ]),
                  f("label", vd, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[14] || (e[14] = (g) => s.showWarn = g)
                    }, null, 512), [
                      [XA, s.showWarn]
                    ]),
                    Z(" 경고 (" + v(n.countByLevel("warn")) + ")", 1)
                  ]),
                  f("label", Ud, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[15] || (e[15] = (g) => s.showLog = g)
                    }, null, 512), [
                      [XA, s.showLog]
                    ]),
                    Z(" 로그 (" + v(n.countByLevel("log")) + ")", 1)
                  ])
                ])
              ]),
              f("div", Fd, [
                (p(!0), w(P, null, fA(n.filteredLogs, (g, b) => (p(), w("div", {
                  key: b,
                  class: $(["log-item", `log-item--${g.level}`])
                }, [
                  f("span", bd, v(g.time.slice(11)), 1),
                  f("span", md, v(g.level), 1),
                  f("span", yd, v(g.message), 1)
                ], 2))), 128)),
                n.filteredLogs.length === 0 ? (p(), w("div", Ed, "표시할 로그가 없습니다")) : I("", !0)
              ])
            ])) : I("", !0),
            s.logSource === "backend" ? (p(), w("div", xd, [
              f("div", Hd, [
                e[41] || (e[41] = Z(" 백엔드 서버 로그 ", -1)),
                f("div", Id, [
                  f("label", _d, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[16] || (e[16] = (g) => s.showBEError = g)
                    }, null, 512), [
                      [XA, s.showBEError]
                    ]),
                    Z(" ERROR (" + v(n.countBackendByLevel("ERROR")) + ")", 1)
                  ]),
                  f("label", Ld, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[17] || (e[17] = (g) => s.showBEWarn = g)
                    }, null, 512), [
                      [XA, s.showBEWarn]
                    ]),
                    Z(" WARN (" + v(n.countBackendByLevel("WARN")) + ")", 1)
                  ]),
                  f("label", Sd, [
                    IA(f("input", {
                      type: "checkbox",
                      "onUpdate:modelValue": e[18] || (e[18] = (g) => s.showBEInfo = g)
                    }, null, 512), [
                      [XA, s.showBEInfo]
                    ]),
                    Z(" INFO (" + v(n.countBackendByLevel("INFO")) + ")", 1)
                  ])
                ])
              ]),
              s.backendLogsState === "loading" ? (p(), w("div", Kd, "백엔드 로그 가져오는 중...")) : s.backendLogsState === "skipped" ? (p(), w("div", Td, [
                e[42] || (e[42] = Z(" 네트워크 오류 없음 — 프론트엔드 에러로 판단하여 미수집 ", -1)),
                f("button", {
                  class: "bug-btn-sm",
                  style: { "margin-top": "8px" },
                  onClick: e[19] || (e[19] = (...g) => n.fetchBackendLogs && n.fetchBackendLogs(...g))
                }, "그래도 가져오기")
              ])) : s.backendLogsState === "error" ? (p(), w("div", Dd, "백엔드 로그 조회 실패 (인증 확인)")) : (p(), w("div", kd, [
                (p(!0), w(P, null, fA(n.filteredBackendLogs, (g, b) => (p(), w("div", {
                  key: b,
                  class: $(["log-item", `log-item--${g.level.toLowerCase()}`])
                }, [
                  f("span", Od, v(g.time.slice(11)), 1),
                  f("span", Rd, v(g.level), 1),
                  f("span", Md, v(g.logger), 1),
                  f("span", Nd, v(g.message), 1)
                ], 2))), 128)),
                n.filteredBackendLogs.length === 0 ? (p(), w("div", Vd, "표시할 로그가 없습니다")) : I("", !0)
              ]))
            ])) : I("", !0)
          ], 64)) : I("", !0),
          s.activeTab === "network" ? (p(), w("div", Gd, [
            e[50] || (e[50] = f("div", { class: "bug-report-label" }, "최근 API 요청 (최대 50건, 최신순)", -1)),
            f("div", Pd, [
              (p(!0), w(P, null, fA(n.reversedNetwork, (g, b) => {
                var M;
                return p(), w(P, { key: b }, [
                  f("div", {
                    class: $(["net-item", g.error || g.status >= 400 ? "net-item--error" : ""]),
                    onClick: (H) => n.toggleNetDetail(b)
                  }, [
                    f("span", {
                      class: $(["net-status", n.statusClass(g.status)])
                    }, v(g.status), 3),
                    f("span", Xd, v(g.method), 1),
                    f("span", Wd, v(g.url), 1),
                    f("span", Yd, v(g.duration) + "ms", 1),
                    f("span", jd, v((M = g.time) == null ? void 0 : M.slice(11, 19)), 1)
                  ], 10, Jd),
                  s.expandedNet === b ? (p(), w("div", Zd, [
                    g.params ? (p(), w("div", zd, [
                      e[43] || (e[43] = f("b", null, "Params:", -1)),
                      e[44] || (e[44] = Z()),
                      f("code", null, v(g.params), 1)
                    ])) : I("", !0),
                    g.requestBody ? (p(), w("div", qd, [
                      e[45] || (e[45] = f("b", null, "Request:", -1)),
                      e[46] || (e[46] = Z()),
                      f("code", null, v(g.requestBody), 1)
                    ])) : I("", !0),
                    g.responseBody ? (p(), w("div", $d, [
                      e[47] || (e[47] = f("b", null, "Response:", -1)),
                      e[48] || (e[48] = Z()),
                      f("code", null, v(g.responseBody), 1)
                    ])) : I("", !0),
                    g.error ? (p(), w("div", Ag, [
                      e[49] || (e[49] = f("b", null, "Error:", -1)),
                      Z(" " + v(g.error), 1)
                    ])) : I("", !0)
                  ])) : I("", !0)
                ], 64);
              }), 128)),
              s.networkLogs.length === 0 ? (p(), w("div", eg, "기록된 요청이 없습니다")) : I("", !0)
            ])
          ])) : I("", !0),
          s.activeTab === "state" ? (p(), w(P, { key: 3 }, [
            f("div", tg, [
              e[51] || (e[51] = f("div", { class: "bug-report-label" }, "Vuex Mutation 이력 (최신순, 최대 100건)", -1)),
              f("div", rg, [
                (p(!0), w(P, null, fA(((c = s.context) == null ? void 0 : c.mutationLog) || [], (g, b) => (p(), w("div", {
                  key: b,
                  class: "log-item"
                }, [
                  f("span", sg, v(g.time), 1),
                  f("span", ng, v(g.type), 1),
                  g.payload !== null ? (p(), w("span", ig, v(n.formatPayload(g.payload)), 1)) : I("", !0)
                ]))), 128)),
                (u = (l = s.context) == null ? void 0 : l.mutationLog) != null && u.length ? I("", !0) : (p(), w("div", og, "기록된 mutation이 없습니다"))
              ])
            ]),
            f("div", ag, [
              e[53] || (e[53] = f("div", { class: "bug-report-label" }, "라우터 이력", -1)),
              f("div", lg, [
                (p(!0), w(P, null, fA(((B = s.context) == null ? void 0 : B.routeHistory) || [], (g, b) => (p(), w("div", {
                  key: b,
                  class: "route-item"
                }, [
                  f("span", cg, v(g.time), 1),
                  f("span", ug, v(g.from), 1),
                  e[52] || (e[52] = f("span", { class: "route-arrow" }, "→", -1)),
                  f("span", fg, v(g.to), 1)
                ]))), 128)),
                (C = (Q = s.context) == null ? void 0 : Q.routeHistory) != null && C.length ? I("", !0) : (p(), w("div", Bg, "기록된 라우터 이력이 없습니다"))
              ])
            ]),
            (U = s.context) != null && U.storage && Object.keys(s.context.storage).length ? (p(), w("div", dg, [
              e[54] || (e[54] = f("div", { class: "bug-report-label" }, "localStorage (민감 키 제외)", -1)),
              f("div", gg, [
                (p(!0), w(P, null, fA(s.context.storage, (g, b) => (p(), w("div", {
                  key: b,
                  class: "env-row"
                }, [
                  f("span", null, v(b), 1),
                  f("span", null, v(g), 1)
                ]))), 128))
              ])
            ])) : I("", !0),
            (T = s.context) != null && T.cesiumPerf ? (p(), w("div", hg, [
              e[60] || (e[60] = f("div", { class: "bug-report-label" }, "Cesium 성능 지표", -1)),
              f("div", pg, [
                f("div", wg, [
                  e[55] || (e[55] = f("span", null, "Primitives", -1)),
                  f("span", null, v(s.context.cesiumPerf.primitives), 1)
                ]),
                f("div", Qg, [
                  e[56] || (e[56] = f("span", null, "Tiles Loaded", -1)),
                  f("span", null, v(s.context.cesiumPerf.tilesLoaded), 1)
                ]),
                f("div", Cg, [
                  e[57] || (e[57] = f("span", null, "Max Screen Space Error", -1)),
                  f("span", null, v(s.context.cesiumPerf.maximumScreenSpaceError), 1)
                ]),
                f("div", vg, [
                  e[58] || (e[58] = f("span", null, "Shadows", -1)),
                  f("span", null, v(s.context.cesiumPerf.shadowsEnabled ? "활성" : "비활성"), 1)
                ]),
                f("div", Ug, [
                  e[59] || (e[59] = f("span", null, "MSAA Samples", -1)),
                  f("span", null, v(s.context.cesiumPerf.msaaSamples), 1)
                ])
              ])
            ])) : I("", !0)
          ], 64)) : I("", !0),
          s.activeTab === "env" ? (p(), w(P, { key: 4 }, [
            s.context ? (p(), w("div", bg, [
              s.context.user ? (p(), w("div", mg, [
                e[65] || (e[65] = f("div", { class: "env-group-title" }, "사용자", -1)),
                f("div", yg, [
                  e[62] || (e[62] = f("span", null, "아이디", -1)),
                  f("span", null, v(s.context.user.username), 1)
                ]),
                s.context.user.roles.length ? (p(), w("div", Eg, [
                  e[63] || (e[63] = f("span", null, "권한", -1)),
                  f("span", null, v(s.context.user.roles.join(", ")), 1)
                ])) : I("", !0),
                s.context.user.exp ? (p(), w("div", xg, [
                  e[64] || (e[64] = f("span", null, "토큰 만료", -1)),
                  f("span", null, v(s.context.user.exp), 1)
                ])) : I("", !0)
              ])) : I("", !0),
              f("div", Hg, [
                e[71] || (e[71] = f("div", { class: "env-group-title" }, "메뉴 상태", -1)),
                f("div", Ig, [
                  e[66] || (e[66] = f("span", null, "상단 탭", -1)),
                  f("span", null, v(s.context.menus.headerName), 1)
                ]),
                f("div", _g, [
                  e[67] || (e[67] = f("span", null, "하위 메뉴", -1)),
                  f("span", null, v(s.context.menus.subMenuName), 1)
                ]),
                f("div", Lg, [
                  e[68] || (e[68] = f("span", null, "좌측 메뉴", -1)),
                  f("span", null, v(n.joinOrNone(s.context.menus.leftMenus)), 1)
                ]),
                f("div", Sg, [
                  e[69] || (e[69] = f("span", null, "열린 패널", -1)),
                  f("span", null, v(n.joinOrNone(s.context.menus.openPanels)), 1)
                ]),
                f("div", Kg, [
                  e[70] || (e[70] = f("span", null, "활성 도구", -1)),
                  f("span", null, v(n.joinOrNone(s.context.menus.activeTools)), 1)
                ])
              ]),
              f("div", Tg, [
                e[74] || (e[74] = f("div", { class: "env-group-title" }, "표시 중인 데이터", -1)),
                f("div", Dg, [
                  e[72] || (e[72] = f("span", null, "지도 타입", -1)),
                  f("span", null, v(s.context.activeData.mapType), 1)
                ]),
                f("div", kg, [
                  e[73] || (e[73] = f("span", null, "지형", -1)),
                  f("span", null, v(s.context.activeData.terrain || "기본"), 1)
                ]),
                f("div", Og, [
                  f("span", null, "데이터셋 (" + v(s.context.activeData.datasets.length) + ")", 1),
                  f("span", Rg, [
                    s.context.activeData.datasets.length ? I("", !0) : (p(), w("span", Mg, "없음")),
                    (p(!0), w(P, null, fA(s.context.activeData.datasets, (g) => (p(), w("span", {
                      key: g.layerId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ]),
                f("div", Ng, [
                  f("span", null, "3D 타일 (" + v(s.context.activeData.threeDTiles.length) + ")", 1),
                  f("span", Vg, [
                    s.context.activeData.threeDTiles.length ? I("", !0) : (p(), w("span", Gg, "없음")),
                    (p(!0), w(P, null, fA(s.context.activeData.threeDTiles, (g) => (p(), w("span", {
                      key: g.threeDTilesId || g.sourceId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ]),
                s.context.activeData.autoPlacement.length ? (p(), w("div", Pg, [
                  f("span", null, "배치안 (" + v(s.context.activeData.autoPlacement.length) + ")", 1),
                  f("span", Jg, [
                    (p(!0), w(P, null, fA(s.context.activeData.autoPlacement, (g) => (p(), w("span", {
                      key: g.sourceId,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ])) : I("", !0),
                s.context.activeData.topicMaps.length ? (p(), w("div", Xg, [
                  f("span", null, "주제도 (" + v(s.context.activeData.topicMaps.length) + ")", 1),
                  f("span", Wg, [
                    (p(!0), w(P, null, fA(s.context.activeData.topicMaps, (g) => (p(), w("span", {
                      key: g.key,
                      class: "env-tag"
                    }, v(g._displayName), 1))), 128))
                  ])
                ])) : I("", !0)
              ]),
              f("div", Yg, [
                e[75] || (e[75] = f("div", { class: "env-group-title" }, "최근 이벤트 (최신순)", -1)),
                f("div", jg, [
                  (p(!0), w(P, null, fA(s.context.recentEvents.slice(0, 30), (g, b) => (p(), w("div", {
                    key: b,
                    class: "event-item"
                  }, [
                    f("span", Zg, v(g.time), 1),
                    f("span", zg, v(g.type), 1)
                  ]))), 128)),
                  s.context.recentEvents.length ? I("", !0) : (p(), w("div", qg, "기록된 이벤트 없음"))
                ])
              ]),
              s.context.camera ? (p(), w("div", $g, [
                e[80] || (e[80] = f("div", { class: "env-group-title" }, "카메라 위치", -1)),
                f("div", Ah, [
                  e[76] || (e[76] = f("span", null, "경도", -1)),
                  f("span", null, v(s.context.camera.longitude), 1)
                ]),
                f("div", eh, [
                  e[77] || (e[77] = f("span", null, "위도", -1)),
                  f("span", null, v(s.context.camera.latitude), 1)
                ]),
                f("div", th, [
                  e[78] || (e[78] = f("span", null, "높이 (m)", -1)),
                  f("span", null, v(s.context.camera.height), 1)
                ]),
                f("div", rh, [
                  e[79] || (e[79] = f("span", null, "Heading / Pitch", -1)),
                  f("span", null, v(s.context.camera.heading) + "° / " + v(s.context.camera.pitch) + "°", 1)
                ])
              ])) : I("", !0),
              f("div", sh, [
                e[86] || (e[86] = f("div", { class: "env-group-title" }, "브라우저 / 화면", -1)),
                f("div", nh, [
                  e[81] || (e[81] = f("span", null, "일시", -1)),
                  f("span", null, v(s.context.datetime), 1)
                ]),
                f("div", ih, [
                  e[82] || (e[82] = f("span", null, "해상도", -1)),
                  f("span", null, v(s.context.screen.resolution) + " · 뷰포트 " + v(s.context.screen.viewport), 1)
                ]),
                s.context.memory ? (p(), w("div", oh, [
                  e[83] || (e[83] = f("span", null, "JS 힙 메모리", -1)),
                  f("span", null, v(s.context.memory.usedMB) + "MB / " + v(s.context.memory.limitMB) + "MB", 1)
                ])) : I("", !0),
                s.context.connection ? (p(), w("div", ah, [
                  e[84] || (e[84] = f("span", null, "네트워크", -1)),
                  f("span", null, v(s.context.connection.effectiveType) + " · " + v(s.context.connection.downlink) + "Mbps", 1)
                ])) : I("", !0),
                f("div", lh, [
                  e[85] || (e[85] = f("span", null, "언어", -1)),
                  f("span", null, v(s.context.browser.language), 1)
                ])
              ])
            ])) : (p(), w("div", Fg, [...e[61] || (e[61] = [
              f("div", { class: "log-empty log-empty--error" }, "컨텍스트 수집에 실패했습니다 (콘솔 확인)", -1)
            ])]))
          ], 64)) : I("", !0)
        ]),
        f("div", ch, [
          n.serverEnabled ? (p(), w("button", {
            key: 0,
            class: "bug-btn-list",
            onClick: e[20] || (e[20] = (...g) => n.openViewer && n.openViewer(...g))
          }, "저장 목록")) : I("", !0),
          f("button", {
            class: "bug-btn-cancel",
            onClick: e[21] || (e[21] = (...g) => n.close && n.close(...g))
          }, "취소"),
          f("button", {
            class: "bug-btn-copy",
            onClick: e[22] || (e[22] = (...g) => n.copyToClipboard && n.copyToClipboard(...g)),
            disabled: !s.screenshotUrl,
            title: s.copyStatus
          }, [
            e[87] || (e[87] = f("svg", {
              width: "14",
              height: "14",
              viewBox: "0 0 24 24",
              fill: "none",
              stroke: "currentColor",
              "stroke-width": "2"
            }, [
              f("rect", {
                x: "9",
                y: "9",
                width: "13",
                height: "13",
                rx: "2"
              }),
              f("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
            ], -1)),
            Z(" " + v(s.copyStatus), 1)
          ], 8, uh),
          n.serverEnabled ? (p(), w("button", {
            key: 1,
            class: "bug-btn-save",
            onClick: e[23] || (e[23] = (...g) => n.saveToServer && n.saveToServer(...g)),
            disabled: s.isSaving || !s.screenshotUrl
          }, [
            s.isSaving ? (p(), w("span", Bh)) : I("", !0),
            Z(" " + v(s.saveStatus), 1)
          ], 8, fh)) : I("", !0),
          f("button", {
            class: "bug-btn-download",
            onClick: e[24] || (e[24] = (...g) => n.download && n.download(...g)),
            disabled: !s.screenshotUrl
          }, " 다운로드 ", 8, dh)
        ])
      ])
    ], 32)) : I("", !0)
  ]);
}
const hh = /* @__PURE__ */ Si(TB, [["render", gh], ["styles", [SB]], ["__scopeId", "data-v-eb1adf0b"]]), ph = ".brv-projects[data-v-d9691c69]{margin-left:auto;margin-right:12px;display:inline-flex;border:1px solid rgba(255,255,255,.18);border-radius:6px;overflow:hidden}.brv-projects button[data-v-d9691c69]{border:0;padding:4px 11px;font-size:11px;background:transparent;color:#aab;cursor:pointer}.brv-projects button+button[data-v-d9691c69]{border-left:1px solid rgba(255,255,255,.18)}.brv-projects__on[data-v-d9691c69]{background:#88aaff47;color:#fff}.brv-ai__head[data-v-d9691c69]{display:flex;align-items:center;gap:8px;margin-bottom:8px}.brv-ai__title[data-v-d9691c69]{margin:0!important}.brv-ai__tools[data-v-d9691c69]{margin-left:auto;display:inline-flex;gap:6px}.brv-ai__tool[data-v-d9691c69]{font-size:11px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.18);background:transparent;color:#aab;cursor:pointer}.brv-ai__tool[data-v-d9691c69]:hover:not(:disabled){background:#ffffff14;color:#fff}.brv-ai__tool[data-v-d9691c69]:disabled{opacity:.4;cursor:default}.brv-ai__start[data-v-d9691c69]{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding:6px 0 2px}.brv-fix-btn--lg[data-v-d9691c69]{padding:9px 18px;font-size:13px}.brv-ai__hint[data-v-d9691c69]{font-size:11px;color:#8898aa;line-height:1.5;margin-top:6px}.brv-ai__meta[data-v-d9691c69]{display:flex;gap:10px;align-items:center;font-size:12px;margin-bottom:6px}.brv-ai__pr[data-v-d9691c69]{font-weight:600}.brv-ai__branch[data-v-d9691c69]{color:#8898aa;font-family:ui-monospace,Menlo,Consolas,monospace;font-size:11px}.brv-ai__summary[data-v-d9691c69]{font-size:12px;line-height:1.55;padding:8px 10px;background:#ffffff0d;border-radius:6px;margin-bottom:8px}.brv-ai__count[data-v-d9691c69]{font-weight:400;color:#778;margin-left:4px;font-size:11px}.brv-chat__compose[data-v-d9691c69]{display:flex;gap:8px;align-items:stretch;margin-top:8px}.brv-chat__compose .brv-chat__input[data-v-d9691c69]{flex:1;margin:0}.brv-chat__btns[data-v-d9691c69]{display:flex;flex-direction:column;gap:6px;justify-content:center}.brv-chat__btns .brv-fix-btn[data-v-d9691c69]{white-space:nowrap}.brv-chat__input[data-v-d9691c69]{font-family:inherit}.brv-chat__text[data-v-d9691c69]{color:#d0d6de}.brv-chat__msg--user .brv-chat__text[data-v-d9691c69]{color:#e6ebf2}.brv-notice[data-v-d9691c69]{margin:0 16px;padding:8px 12px;border-radius:6px;font-size:12px;background:#eef4ff;color:#1e3a8a}.brv-notice--error[data-v-d9691c69]{background:#fdecec;color:#8a1c1c}.brv-notice--success[data-v-d9691c69]{background:#e9f8ee;color:#14532d}.brv-modal[data-v-d9691c69]{-webkit-user-select:none;user-select:none}.brv-selectable[data-v-d9691c69],.brv-log-list[data-v-d9691c69],.brv-net-detail[data-v-d9691c69],.brv-text[data-v-d9691c69]{-webkit-user-select:text;user-select:text;cursor:text}.brv-overlay[data-v-d9691c69]{position:fixed;top:0;right:0;bottom:0;left:0;z-index:99998;background:#00000080;display:flex;align-items:center;justify-content:center}.brv-modal[data-v-d9691c69]{background:#141c28;border:1px solid rgba(255,255,255,.1);border-radius:10px;width:700px;max-width:96vw;max-height:84vh;display:flex;flex-direction:column;overflow:hidden}.brv-header[data-v-d9691c69]{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(255,255,255,.08);flex-shrink:0}.brv-title[data-v-d9691c69]{font-size:13px;font-weight:600;color:#c8d8e8}.brv-shortcut[data-v-d9691c69]{font-size:10px;font-weight:400;color:#456;margin-left:6px}.brv-close[data-v-d9691c69]{background:none;border:none;color:#789;cursor:pointer;font-size:14px}.brv-close[data-v-d9691c69]:hover{color:#fff}.brv-body[data-v-d9691c69]{flex:1;overflow-y:auto;padding:12px 16px}.brv-loading[data-v-d9691c69]{display:flex;align-items:center;gap:8px;color:#8ac;font-size:12px;padding:16px 0}.brv-empty[data-v-d9691c69]{color:#567;font-size:12px;padding:16px 0;text-align:center}.brv-list[data-v-d9691c69]{display:flex;flex-direction:column;gap:6px}.brv-item[data-v-d9691c69]{display:flex;align-items:center;gap:8px;padding:8px 10px;background:#ffffff08;border:1px solid rgba(255,255,255,.07);border-radius:6px;cursor:pointer;transition:background .15s}.brv-item[data-v-d9691c69]:hover{background:#ffffff12}.brv-problem[data-v-d9691c69]{flex:1;font-size:12px;color:#c8d8e8;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-meta[data-v-d9691c69]{font-size:10px;color:#567;white-space:nowrap}.brv-del[data-v-d9691c69]{background:none;border:none;color:#456;cursor:pointer;font-size:11px;padding:2px 4px}.brv-del[data-v-d9691c69]:hover{color:#e74c3c}.brv-badge[data-v-d9691c69]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;background:#ffffff14;color:#abc}.brv-sev--critical[data-v-d9691c69]{background:#e74c3c40;color:#e74c3c}.brv-sev--high[data-v-d9691c69]{background:#e67e2240;color:#e6802e}.brv-sev--medium[data-v-d9691c69]{background:#f1c40f33;color:#f1c40f}.brv-sev--low[data-v-d9691c69]{background:#2ecc7133;color:#2ecc71}.brv-status[data-v-d9691c69]{font-size:10px;font-weight:600;padding:2px 7px;border-radius:4px;white-space:nowrap;flex-shrink:0}.brv-st--open[data-v-d9691c69]{background:#88aaff2e;color:#8af}.brv-st--in_progress[data-v-d9691c69]{background:#f1c40f2e;color:#f1c40f}.brv-st--resolved[data-v-d9691c69]{background:#2ecc7133;color:#2ecc71}.brv-st--closed[data-v-d9691c69]{background:#7888992e;color:#89a}.brv-status-control[data-v-d9691c69]{display:flex;align-items:center;gap:6px}.brv-status-select[data-v-d9691c69]{font-size:11px;font-weight:600;padding:3px 8px;border-radius:4px;cursor:pointer;background:#ffffff0f;border:1px solid rgba(255,255,255,.12);color:#c8d8e8}.brv-status-select[data-v-d9691c69]:disabled{opacity:.5;cursor:default}.brv-status-select option[data-v-d9691c69]{background:#141c28;color:#c8d8e8}.brv-spin--sm[data-v-d9691c69]{width:11px;height:11px;border-width:2px}.brv-back[data-v-d9691c69]{background:none;border:none;color:#8ac;cursor:pointer;font-size:11px;padding:0 0 10px;display:block}.brv-back[data-v-d9691c69]:hover{color:#fff}.brv-screenshot[data-v-d9691c69]{width:100%;border-radius:6px;border:1px solid rgba(255,255,255,.08);margin-top:4px}.brv-section[data-v-d9691c69]{margin-bottom:16px}.brv-fix[data-v-d9691c69]{display:inline-block;padding:1px 7px;border-radius:10px;font-size:11px;background:#e9eef3;color:#445}.brv-fix--queued[data-v-d9691c69]{background:#fff3cd;color:#7a5a00}.brv-fix--running[data-v-d9691c69]{background:#dbeafe;color:#1e3a8a}.brv-fix--pr_opened[data-v-d9691c69]{background:#e0f2fe;color:#075985}.brv-fix--merged[data-v-d9691c69]{background:#dcfce7;color:#166534}.brv-fix--failed[data-v-d9691c69]{background:#fee2e2;color:#991b1b}.brv-link[data-v-d9691c69]{color:#2563eb;text-decoration:underline;word-break:break-all}.brv-fix-summary[data-v-d9691c69]{margin-top:6px}.brv-fix-actions[data-v-d9691c69]{display:flex;gap:6px;margin-top:8px}.brv-fix-btn[data-v-d9691c69]{padding:6px 12px;border:1px solid #2563eb;border-radius:6px;background:#2563eb;color:#fff;font-size:12px;cursor:pointer}.brv-fix-btn[data-v-d9691c69]:disabled{opacity:.55;cursor:default}.brv-fix-btn--ghost[data-v-d9691c69]{background:transparent;color:#2563eb}.brv-hint[data-v-d9691c69]{margin-top:6px;font-size:11px;color:#667;line-height:1.5}.brv-fix-elapsed[data-v-d9691c69]{margin-left:6px;font-size:11px;color:#667}.brv-fix-log[data-v-d9691c69]{margin-top:8px;font-size:11px}.brv-fix-log summary[data-v-d9691c69]{cursor:pointer;color:#445}.brv-fix-log pre[data-v-d9691c69]{margin:6px 0 0;max-height:260px;overflow:auto;padding:8px;background:#1f2530;color:#d8dee6;border-radius:6px;white-space:pre-wrap;word-break:break-all;font-size:11px;line-height:1.45;font-family:ui-monospace,Menlo,Consolas,monospace}.brv-fix-summary[data-v-d9691c69]{color:inherit}.brv-suggest[data-v-d9691c69]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-suggest__title[data-v-d9691c69]{font-size:12px;font-weight:600;color:#334;margin-bottom:4px}.brv-suggest__hint[data-v-d9691c69]{margin-left:6px;font-size:11px;font-weight:400;color:#778}.brv-suggest__item[data-v-d9691c69]{display:flex;align-items:flex-start;gap:8px;padding:5px 0;font-size:12px;line-height:1.5}.brv-suggest__item+.brv-suggest__item[data-v-d9691c69]{border-top:1px solid #eef1f4}.brv-suggest__text[data-v-d9691c69]{flex:1;color:#d0d6de}.brv-suggest__run[data-v-d9691c69]{flex-shrink:0;padding:3px 10px;font-size:11px}.brv-chat[data-v-d9691c69]{margin-top:10px;border-top:1px dashed #c9d0d8;padding-top:8px}.brv-chat__msg[data-v-d9691c69]{margin:6px 0;font-size:12px}.brv-chat__who[data-v-d9691c69]{display:inline-block;min-width:44px;font-size:11px;color:#667}.brv-chat__msg--user .brv-chat__who[data-v-d9691c69]{color:#1e5bb8}.brv-chat__text[data-v-d9691c69]{display:inline-block;max-width:calc(100% - 52px);vertical-align:top;white-space:pre-wrap;word-break:break-word;line-height:1.5}.brv-chat__input[data-v-d9691c69]{width:100%;box-sizing:border-box;margin-top:6px;padding:6px 8px;font-size:12px;border:1px solid #c9d0d8;border-radius:6px;resize:vertical;color:inherit;background:transparent}.brv-label[data-v-d9691c69]{font-size:10px;color:#567;font-weight:600;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px}.brv-label-row[data-v-d9691c69]{display:flex;align-items:center;justify-content:space-between;margin-bottom:6px}.brv-row[data-v-d9691c69]{display:flex;justify-content:space-between;align-items:flex-start;gap:8px;font-size:11px;color:#a8b8c8;padding:4px 0;border-bottom:1px solid rgba(255,255,255,.04)}.brv-row>span[data-v-d9691c69]:first-child{color:#567;flex-shrink:0}.brv-row>span[data-v-d9691c69]:last-child{text-align:right;word-break:break-all}.brv-field[data-v-d9691c69]{margin-bottom:8px}.brv-field-label[data-v-d9691c69]{font-size:10px;color:#456;margin-bottom:3px}.brv-text[data-v-d9691c69]{font-size:11px;color:#c8d8e8;line-height:1.6;white-space:pre-wrap;background:#0003;padding:8px;border-radius:4px}.brv-log-tabs[data-v-d9691c69]{display:flex;gap:4px}.brv-log-tab[data-v-d9691c69]{display:flex;align-items:center;gap:4px;padding:3px 9px;border-radius:4px;border:1px solid rgba(255,255,255,.08);background:#ffffff08;color:#678;font-size:11px;cursor:pointer;transition:background .15s}.brv-log-tab[data-v-d9691c69]:hover{background:#ffffff12;color:#abc}.brv-log-tab.active[data-v-d9691c69]{background:#88aaff1f;border-color:#88aaff4d;color:#8af}.brv-log-tab-count[data-v-d9691c69]{font-size:9px;font-weight:700;padding:1px 4px;border-radius:8px;background:#e74c3c4d;color:#e87070}.brv-cnt-err[data-v-d9691c69]{background:#e74c3c4d;color:#e87070}.brv-log-filters[data-v-d9691c69]{display:flex;gap:6px;margin-bottom:6px;flex-wrap:wrap}.brv-filter-chip[data-v-d9691c69]{display:flex;align-items:center;gap:4px;font-size:10px;color:#678;cursor:pointer;padding:2px 6px;border-radius:4px;border:1px solid rgba(255,255,255,.06);background:#ffffff05}.brv-filter-chip[data-v-d9691c69]:hover{background:#ffffff0f}.brv-filter-error[data-v-d9691c69]{color:#c06060}.brv-filter-warn[data-v-d9691c69]{color:#b09040}.brv-filter-log[data-v-d9691c69]{color:#589}.brv-log-list[data-v-d9691c69]{max-height:220px;overflow-y:auto;background:#00000040;border-radius:5px;border:1px solid rgba(255,255,255,.05);font-family:Consolas,Menlo,monospace}.brv-log-item[data-v-d9691c69]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer}.brv-log-item[data-v-d9691c69]:hover{background:#ffffff0a}.brv-log-item[data-v-d9691c69]:last-child{border-bottom:none}.brv-log-time[data-v-d9691c69]{color:#456;flex-shrink:0;font-size:10px;padding-top:1px}.brv-log-lv[data-v-d9691c69]{font-weight:700;flex-shrink:0;width:38px;font-size:10px;padding-top:1px}.brv-log-logger[data-v-d9691c69]{color:#578;flex-shrink:0;max-width:120px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:10px;padding-top:1px}.brv-log-msg[data-v-d9691c69]{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.brv-log-msg.expanded[data-v-d9691c69]{white-space:pre-wrap;overflow:visible}.brv-log-payload[data-v-d9691c69]{color:#567;font-size:10px;max-width:160px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;padding-top:1px}.brv-mutation[data-v-d9691c69]{color:#8ac;font-weight:600}.brv-log--error[data-v-d9691c69]{color:#e87070}.brv-log--warn[data-v-d9691c69]{color:#d4a84b}.brv-log--info[data-v-d9691c69]{color:#a8b8c8}.brv-log-empty[data-v-d9691c69]{padding:12px 8px;color:#456;font-size:11px;text-align:center}.brv-net-item[data-v-d9691c69]{display:flex;gap:6px;align-items:flex-start;font-size:10.5px;color:#a8b8c8;padding:3px 8px;border-bottom:1px solid rgba(255,255,255,.03);cursor:pointer;font-family:Consolas,Menlo,monospace}.brv-net-item[data-v-d9691c69]:hover{background:#ffffff0a}.brv-net-err[data-v-d9691c69]{background:#e74c3c0d}.brv-net-status[data-v-d9691c69]{font-weight:700;flex-shrink:0;width:32px;font-size:10px;padding-top:1px}.brv-net-method[data-v-d9691c69]{flex-shrink:0;width:36px;color:#8ac;font-size:10px;padding-top:1px}.brv-net-dur[data-v-d9691c69]{flex-shrink:0;color:#456;font-size:10px;padding-top:1px}.st-err[data-v-d9691c69],.st-5xx[data-v-d9691c69]{color:#e87070}.st-4xx[data-v-d9691c69]{color:#d4a84b}.st-3xx[data-v-d9691c69]{color:#8ac}.st-2xx[data-v-d9691c69]{color:#6c8}.brv-net-detail[data-v-d9691c69]{padding:6px 12px;font-size:10px;color:#89a;background:#0000004d;border-bottom:1px solid rgba(255,255,255,.03);word-break:break-all;white-space:pre-wrap;line-height:1.6;font-family:Consolas,Menlo,monospace}.brv-spin[data-v-d9691c69]{display:inline-block;width:13px;height:13px;flex-shrink:0;border:2px solid rgba(136,170,255,.3);border-top-color:#8af;border-radius:50%;animation:brv-spin-d9691c69 .7s linear infinite}@keyframes brv-spin-d9691c69{to{transform:rotate(360deg)}}", wh = {
  none: "요청 전",
  QUEUED: "대기 중",
  RUNNING: "AI 가 고치는 중",
  PR_OPENED: "PR 올라옴 · 병합 안 됨(로그 확인)",
  MERGED: "병합 완료",
  FAILED: "실패 · 진행 로그 확인"
}, Qh = { QUEUED: "대기", RUNNING: "수정중", PR_OPENED: "PR", MERGED: "병합", FAILED: "실패" }, _o = [
  { value: "OPEN", label: "접수" },
  { value: "IN_PROGRESS", label: "진행중" },
  { value: "RESOLVED", label: "해결" },
  { value: "CLOSED", label: "보류" }
], Ch = {
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
      return wh[A || "none"] || A;
    },
    fixShort(A) {
      return Qh[A] || A;
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
}, vh = { class: "bugfix-root" }, Uh = { class: "brv-modal" }, Fh = { class: "brv-header" }, bh = { class: "brv-title" }, mh = {
  key: 0,
  class: "brv-shortcut"
}, yh = {
  key: 0,
  class: "brv-projects"
}, Eh = ["onClick"], xh = { class: "brv-body" }, Hh = {
  key: 0,
  class: "brv-loading"
}, Ih = {
  key: 1,
  class: "brv-empty"
}, _h = {
  key: 2,
  class: "brv-list"
}, Lh = ["onClick"], Sh = { class: "brv-problem" }, Kh = ["title"], Th = { class: "brv-meta" }, Dh = ["onClick"], kh = {
  key: 0,
  class: "brv-loading"
}, Oh = {
  key: 0,
  class: "brv-section"
}, Rh = ["src"], Mh = { class: "brv-section" }, Nh = { class: "brv-row" }, Vh = { class: "brv-row" }, Gh = { class: "brv-status-control" }, Ph = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Jh = ["value", "disabled"], Xh = ["value"], Wh = { class: "brv-row" }, Yh = { class: "brv-selectable" }, jh = { class: "brv-row" }, Zh = { class: "brv-selectable" }, zh = { class: "brv-section brv-ai" }, qh = { class: "brv-ai__head" }, $h = {
  key: 0,
  class: "brv-spin brv-spin--sm"
}, Ap = {
  key: 1,
  class: "brv-fix-elapsed"
}, ep = {
  key: 2,
  class: "brv-fix-elapsed"
}, tp = {
  key: 3,
  class: "brv-ai__tools"
}, rp = ["disabled"], sp = ["disabled"], np = {
  key: 0,
  class: "brv-ai__hint"
}, ip = {
  key: 1,
  class: "brv-ai__start"
}, op = ["disabled"], ap = {
  key: 0,
  class: "brv-ai__meta"
}, lp = ["href"], cp = {
  key: 1,
  class: "brv-ai__branch brv-selectable"
}, up = {
  key: 1,
  class: "brv-ai__summary brv-selectable"
}, fp = ["open"], Bp = { class: "brv-ai__count" }, dp = {
  key: 3,
  class: "brv-suggest"
}, gp = { class: "brv-suggest__text brv-selectable" }, hp = ["disabled", "onClick"], pp = { class: "brv-chat" }, wp = { class: "brv-chat__who" }, Qp = { class: "brv-chat__text brv-selectable" }, Cp = {
  key: 0,
  class: "brv-chat__msg brv-chat__msg--assistant"
}, vp = {
  key: 1,
  class: "brv-chat__compose"
}, Up = ["disabled"], Fp = { class: "brv-chat__btns" }, bp = ["disabled"], mp = ["disabled"], yp = {
  key: 2,
  class: "brv-ai__hint"
}, Ep = {
  key: 1,
  class: "brv-section"
}, xp = {
  key: 0,
  class: "brv-field"
}, Hp = { class: "brv-text brv-selectable" }, Ip = {
  key: 1,
  class: "brv-field"
}, _p = { class: "brv-text brv-selectable" }, Lp = {
  key: 2,
  class: "brv-field"
}, Sp = { class: "brv-text brv-selectable" }, Kp = {
  key: 2,
  class: "brv-section"
}, Tp = {
  key: 0,
  class: "brv-row"
}, Dp = { class: "brv-selectable" }, kp = {
  key: 1,
  class: "brv-row"
}, Op = { class: "brv-selectable" }, Rp = {
  key: 2,
  class: "brv-row"
}, Mp = { class: "brv-selectable" }, Np = {
  key: 3,
  class: "brv-row"
}, Vp = { class: "brv-selectable" }, Gp = {
  key: 4,
  class: "brv-row"
}, Pp = { class: "brv-selectable" }, Jp = { class: "brv-section" }, Xp = { class: "brv-label-row" }, Wp = { class: "brv-log-tabs" }, Yp = ["onClick"], jp = { class: "brv-log-filters" }, Zp = { class: "brv-filter-chip brv-filter-error" }, zp = { class: "brv-filter-chip brv-filter-warn" }, qp = { class: "brv-filter-chip brv-filter-log" }, $p = { class: "brv-log-list" }, Aw = ["onClick"], ew = { class: "brv-log-time brv-selectable" }, tw = { class: "brv-log-lv" }, rw = {
  key: 0,
  class: "brv-log-empty"
}, sw = { class: "brv-log-filters" }, nw = { class: "brv-filter-chip brv-filter-error" }, iw = { class: "brv-filter-chip brv-filter-warn" }, ow = { class: "brv-filter-chip brv-filter-log" }, aw = { class: "brv-log-list" }, lw = ["onClick"], cw = { class: "brv-log-time brv-selectable" }, uw = { class: "brv-log-lv" }, fw = { class: "brv-log-logger brv-selectable" }, Bw = {
  key: 0,
  class: "brv-log-empty"
}, dw = { class: "brv-log-filters" }, gw = { class: "brv-filter-chip brv-filter-error" }, hw = { class: "brv-filter-chip brv-filter-log" }, pw = { class: "brv-log-list" }, ww = ["onClick"], Qw = { class: "brv-net-method brv-selectable" }, Cw = { class: "brv-net-dur brv-selectable" }, vw = { class: "brv-log-time brv-selectable" }, Uw = {
  key: 0,
  class: "brv-net-detail brv-selectable"
}, Fw = { key: 0 }, bw = { key: 1 }, mw = { key: 2 }, yw = {
  key: 3,
  class: "brv-log--error"
}, Ew = {
  key: 0,
  class: "brv-log-empty"
}, xw = {
  key: 3,
  class: "brv-log-list"
}, Hw = ["onClick"], Iw = { class: "brv-log-time brv-selectable" }, _w = {
  key: 0,
  class: "brv-log-payload brv-selectable"
}, Lw = {
  key: 0,
  class: "brv-log-empty"
};
function Sw(A, e, t, r, s, n) {
  var i, o, a, c;
  return p(), w("div", vh, [
    s.isOpen ? (p(), w("div", {
      key: 0,
      class: "brv-overlay",
      onMousedown: e[19] || (e[19] = (l) => s.backdropPressed = l.target === l.currentTarget),
      onClick: e[20] || (e[20] = jt((l) => s.backdropPressed && n.close(), ["self"]))
    }, [
      f("div", Uh, [
        f("div", Fh, [
          f("span", bh, [
            e[21] || (e[21] = Z(" 저장된 버그 리포트 ", -1)),
            n.hotkey ? (p(), w("span", mh, v(n.hotkey), 1)) : I("", !0)
          ]),
          n.viewProjects.length > 1 ? (p(), w("span", yh, [
            (p(!0), w(P, null, fA(n.viewProjects, (l) => (p(), w("button", {
              key: l.key,
              class: $({ "brv-projects__on": s.project === l.key }),
              onClick: (u) => n.switchProject(l.key)
            }, v(l.label), 11, Eh))), 128))
          ])) : I("", !0),
          f("button", {
            class: "brv-close",
            onClick: e[0] || (e[0] = (...l) => n.close && n.close(...l))
          }, "✕")
        ]),
        s.notice ? (p(), w("div", {
          key: 0,
          class: $(["brv-notice", `brv-notice--${s.notice.type}`])
        }, [
          f("b", null, v(s.notice.title), 1),
          Z(" " + v(s.notice.message), 1)
        ], 2)) : I("", !0),
        f("div", xh, [
          s.selected ? (p(), w(P, { key: 1 }, [
            f("button", {
              class: "brv-back",
              onClick: e[1] || (e[1] = (l) => s.selected = null)
            }, "← 목록"),
            s.detailLoading ? (p(), w("div", kh, [...e[23] || (e[23] = [
              f("span", { class: "brv-spin" }, null, -1),
              Z(" 불러오는 중... ", -1)
            ])])) : s.detail ? (p(), w(P, { key: 1 }, [
              s.detail.screenshot ? (p(), w("div", Oh, [
                e[24] || (e[24] = f("div", { class: "brv-label" }, "화면 캡처", -1)),
                f("img", {
                  src: s.detail.screenshot,
                  class: "brv-screenshot",
                  alt: "screenshot"
                }, null, 8, Rh)
              ])) : I("", !0),
              f("div", Mh, [
                e[29] || (e[29] = f("div", { class: "brv-label" }, "기본 정보", -1)),
                f("div", Nh, [
                  e[25] || (e[25] = f("span", null, "심각도", -1)),
                  f("span", {
                    class: $(["brv-badge", `brv-sev--${(i = s.detail.severity) == null ? void 0 : i.toLowerCase()}`])
                  }, v(s.detail.severity), 3)
                ]),
                f("div", Vh, [
                  e[26] || (e[26] = f("span", null, "상태", -1)),
                  f("span", Gh, [
                    s.statusSaving ? (p(), w("span", Ph)) : I("", !0),
                    f("select", {
                      class: $(["brv-status-select", `brv-st--${(s.detail.status || "OPEN").toLowerCase()}`]),
                      value: s.detail.status || "OPEN",
                      disabled: s.statusSaving,
                      onChange: e[2] || (e[2] = (l) => n.changeStatus(l.target.value))
                    }, [
                      (p(!0), w(P, null, fA(s.STATUSES, (l) => (p(), w("option", {
                        key: l.value,
                        value: l.value
                      }, v(l.label), 9, Xh))), 128))
                    ], 42, Jh)
                  ])
                ]),
                f("div", Wh, [
                  e[27] || (e[27] = f("span", null, "보고자", -1)),
                  f("span", Yh, v(s.detail.reporter), 1)
                ]),
                f("div", jh, [
                  e[28] || (e[28] = f("span", null, "일시", -1)),
                  f("span", Zh, v(n.formatDate(s.detail.insertDate)), 1)
                ])
              ]),
              f("div", zh, [
                f("div", qh, [
                  e[31] || (e[31] = f("span", { class: "brv-label brv-ai__title" }, "AI 자동 수정", -1)),
                  f("span", {
                    class: $(["brv-fix", `brv-fix--${(s.detail.fixStatus || "none").toLowerCase()}`])
                  }, v(n.fixLabel(s.detail.fixStatus)), 3),
                  s.fixBusy || n.fixInProgress ? (p(), w("span", $h)) : I("", !0),
                  n.fixInProgress && n.fixElapsed ? (p(), w("span", Ap, v(n.fixElapsed), 1)) : n.deployPending ? (p(), w("span", ep, [...e[30] || (e[30] = [
                    f("span", { class: "brv-spin brv-spin--sm" }, null, -1),
                    Z(" 배포 중", -1)
                  ])])) : I("", !0),
                  s.detail.fixStatus && s.canFix ? (p(), w("span", tp, [
                    f("button", {
                      class: "brv-ai__tool",
                      disabled: s.fixBusy,
                      onClick: e[3] || (e[3] = (...l) => n.refreshDetail && n.refreshDetail(...l)),
                      title: "상태·로그 다시 읽기 (PR 이 열려 있으면 GitHub 와 맞춤)"
                    }, "새로고침", 8, rp),
                    f("button", {
                      class: "brv-ai__tool",
                      disabled: s.fixBusy || n.fixInProgress,
                      onClick: e[4] || (e[4] = (...l) => n.requestFix && n.requestFix(...l)),
                      title: "앞선 대화·수정을 잇지 않고 원인 조사부터 새로 고칩니다"
                    }, "처음부터 다시", 8, sp)
                  ])) : I("", !0)
                ]),
                !s.detail.fixStatus && !s.canFix ? (p(), w("div", np, "이 프로젝트의 수정은 운영자가 관리 콘솔에서 진행합니다. 신고는 접수됐습니다.")) : s.detail.fixStatus ? (p(), w(P, { key: 2 }, [
                  s.detail.fixPrUrl || s.detail.fixBranch ? (p(), w("div", ap, [
                    s.detail.fixPrUrl ? (p(), w("a", {
                      key: 0,
                      class: "brv-link brv-ai__pr",
                      href: s.detail.fixPrUrl,
                      target: "_blank",
                      rel: "noopener"
                    }, "PR #" + v(n.prNumber), 9, lp)) : I("", !0),
                    s.detail.fixBranch ? (p(), w("span", cp, v(s.detail.fixBranch), 1)) : I("", !0)
                  ])) : I("", !0),
                  s.detail.fixSummary ? (p(), w("div", up, v(s.detail.fixSummary), 1)) : I("", !0),
                  s.detail.fixLog ? (p(), w("details", {
                    key: 2,
                    class: "brv-fix-log",
                    open: n.fixInProgress || n.deployPending
                  }, [
                    f("summary", null, [
                      e[33] || (e[33] = Z("진행 로그 ", -1)),
                      f("span", Bp, v(n.logLineCount) + "줄", 1)
                    ]),
                    f("pre", {
                      ref: "fixLogPre",
                      class: "brv-selectable"
                    }, v(s.detail.fixLog), 513)
                  ], 8, fp)) : I("", !0),
                  n.fixSuggestions.length ? (p(), w("div", dp, [
                    e[34] || (e[34] = f("div", { class: "brv-suggest__title" }, [
                      Z("추천 개선 "),
                      f("span", { class: "brv-suggest__hint" }, "실행을 누르면 그 내용으로 이어서 고칩니다")
                    ], -1)),
                    (p(!0), w(P, null, fA(n.fixSuggestions, (l, u) => (p(), w("div", {
                      key: u,
                      class: "brv-suggest__item"
                    }, [
                      f("span", gp, v(l), 1),
                      s.canFix ? (p(), w("button", {
                        key: 0,
                        class: "brv-fix-btn brv-fix-btn--ghost brv-suggest__run",
                        disabled: s.fixBusy || n.fixInProgress,
                        onClick: (B) => n.runSuggestion(l)
                      }, "실행", 8, hp)) : I("", !0)
                    ]))), 128))
                  ])) : I("", !0),
                  f("div", pp, [
                    (p(!0), w(P, null, fA(n.fixChat, (l, u) => (p(), w("div", {
                      key: u,
                      class: $(["brv-chat__msg", `brv-chat__msg--${l.role}`])
                    }, [
                      f("span", wp, v(l.role === "user" ? "나" : "AI"), 1),
                      f("div", Qp, v(l.text), 1)
                    ], 2))), 128)),
                    n.fixInProgress && n.fixChat.length && n.fixChat[n.fixChat.length - 1].role === "user" ? (p(), w("div", Cp, [...e[35] || (e[35] = [
                      f("span", { class: "brv-chat__who" }, "AI", -1),
                      f("div", { class: "brv-chat__text" }, [
                        f("span", { class: "brv-spin brv-spin--sm" }),
                        Z(" 생각 중…")
                      ], -1)
                    ])])) : I("", !0),
                    s.canFix ? (p(), w("div", vp, [
                      IA(f("textarea", {
                        "onUpdate:modelValue": e[6] || (e[6] = (l) => s.chatInput = l),
                        class: "brv-chat__input",
                        rows: "2",
                        disabled: s.fixBusy || n.fixInProgress,
                        placeholder: "질문: 왜 이렇게 고쳤어?   수정 요청: 라이트 테마에서도 맞게 고쳐줘",
                        onKeydown: [
                          e[7] || (e[7] = Eo(jt((l) => n.sendChat("ask"), ["ctrl", "prevent"]), ["enter"])),
                          e[8] || (e[8] = Eo(jt((l) => n.sendChat("ask"), ["meta", "prevent"]), ["enter"]))
                        ]
                      }, null, 40, Up), [
                        [is, s.chatInput]
                      ]),
                      f("div", Fp, [
                        f("button", {
                          class: "brv-fix-btn brv-fix-btn--ghost",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[9] || (e[9] = (l) => n.sendChat("ask")),
                          title: "코드는 바꾸지 않고 답만 합니다 (Ctrl+Enter)"
                        }, "질문", 8, bp),
                        f("button", {
                          class: "brv-fix-btn",
                          disabled: s.fixBusy || n.fixInProgress || !s.chatInput.trim(),
                          onClick: e[10] || (e[10] = (l) => n.sendChat("change")),
                          title: "앞서 고친 내용에 이어서 고치고 검증 → PR → 병합까지"
                        }, "수정 요청", 8, mp)
                      ])
                    ])) : I("", !0),
                    s.canFix ? (p(), w("div", yp, "질문은 코드를 바꾸지 않고 답만, 수정 요청은 이어서 고쳐 검증·PR·병합까지 진행합니다.")) : I("", !0)
                  ])
                ], 64)) : (p(), w("div", ip, [
                  f("button", {
                    class: "brv-fix-btn brv-fix-btn--lg",
                    disabled: s.fixBusy,
                    onClick: e[5] || (e[5] = (...l) => n.requestFix && n.requestFix(...l))
                  }, "AI 에게 수정 요청", 8, op),
                  e[32] || (e[32] = f("span", { class: "brv-ai__hint" }, "서버의 AI 가 원인을 찾아 고치고 검증 → PR → 병합 → 배포까지 자동으로 진행합니다. 진행 상황은 여기에 실시간으로 표시됩니다.", -1))
                ]))
              ]),
              s.detail.problem || s.detail.reproSteps || s.detail.expectedResult ? (p(), w("div", Ep, [
                e[39] || (e[39] = f("div", { class: "brv-label" }, "내용", -1)),
                s.detail.problem ? (p(), w("div", xp, [
                  e[36] || (e[36] = f("div", { class: "brv-field-label" }, "문제 상황", -1)),
                  f("div", Hp, v(s.detail.problem), 1)
                ])) : I("", !0),
                s.detail.reproSteps ? (p(), w("div", Ip, [
                  e[37] || (e[37] = f("div", { class: "brv-field-label" }, "재현 단계", -1)),
                  f("div", _p, v(s.detail.reproSteps), 1)
                ])) : I("", !0),
                s.detail.expectedResult ? (p(), w("div", Lp, [
                  e[38] || (e[38] = f("div", { class: "brv-field-label" }, "기대 결과", -1)),
                  f("div", Sp, v(s.detail.expectedResult), 1)
                ])) : I("", !0)
              ])) : I("", !0),
              n.parsedContext ? (p(), w("div", Kp, [
                e[45] || (e[45] = f("div", { class: "brv-label" }, "컨텍스트", -1)),
                n.parsedContext.camera ? (p(), w("div", Tp, [
                  e[40] || (e[40] = f("span", null, "카메라", -1)),
                  f("span", Dp, v(n.parsedContext.camera.longitude) + "°, " + v(n.parsedContext.camera.latitude) + "° · 고도 " + v(n.parsedContext.camera.height) + "m · H" + v(n.parsedContext.camera.heading) + "° P" + v(n.parsedContext.camera.pitch) + "° ", 1)
                ])) : I("", !0),
                (o = n.parsedContext.menus) != null && o.header ? (p(), w("div", kp, [
                  e[41] || (e[41] = f("span", null, "상단 탭", -1)),
                  f("span", Op, v(n.parsedContext.menus.header), 1)
                ])) : I("", !0),
                n.parsedContext.activeData ? (p(), w("div", Rp, [
                  e[42] || (e[42] = f("span", null, "데이터셋", -1)),
                  f("span", Mp, v(((a = n.parsedContext.activeData.datasets) == null ? void 0 : a.map((l) => l._displayName).join(", ")) || "없음"), 1)
                ])) : I("", !0),
                (c = n.parsedContext.activeData) != null && c.terrain ? (p(), w("div", Np, [
                  e[43] || (e[43] = f("span", null, "지형", -1)),
                  f("span", Vp, v(n.parsedContext.activeData.terrain), 1)
                ])) : I("", !0),
                n.parsedContext.datetime ? (p(), w("div", Gp, [
                  e[44] || (e[44] = f("span", null, "발생 시각", -1)),
                  f("span", Pp, v(n.parsedContext.datetime), 1)
                ])) : I("", !0)
              ])) : I("", !0),
              f("div", Jp, [
                f("div", Xp, [
                  e[46] || (e[46] = f("div", {
                    class: "brv-label",
                    style: { "margin-bottom": "0" }
                  }, "로그", -1)),
                  f("div", Wp, [
                    (p(!0), w(P, null, fA(n.logTabs, (l) => (p(), w("button", {
                      key: l.id,
                      class: $(["brv-log-tab", { active: s.logTab === l.id }]),
                      onClick: (u) => s.logTab = l.id
                    }, [
                      Z(v(l.label) + " ", 1),
                      l.count ? (p(), w("span", {
                        key: 0,
                        class: $(["brv-log-tab-count", l.countClass])
                      }, v(l.count), 3)) : I("", !0)
                    ], 10, Yp))), 128))
                  ])
                ]),
                s.logTab === "front" ? (p(), w(P, { key: 0 }, [
                  f("div", jp, [
                    f("label", Zp, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[11] || (e[11] = (l) => s.showFE.error = l)
                      }, null, 512), [
                        [XA, s.showFE.error]
                      ]),
                      Z(" 오류 (" + v(n.countFE("error")) + ") ", 1)
                    ]),
                    f("label", zp, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[12] || (e[12] = (l) => s.showFE.warn = l)
                      }, null, 512), [
                        [XA, s.showFE.warn]
                      ]),
                      Z(" 경고 (" + v(n.countFE("warn")) + ") ", 1)
                    ]),
                    f("label", qp, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[13] || (e[13] = (l) => s.showFE.log = l)
                      }, null, 512), [
                        [XA, s.showFE.log]
                      ]),
                      Z(" 로그 (" + v(n.countFE("log")) + ") ", 1)
                    ])
                  ]),
                  f("div", $p, [
                    (p(!0), w(P, null, fA(n.filteredFrontLogs, (l, u) => {
                      var B;
                      return p(), w("div", {
                        key: u,
                        class: $(["brv-log-item", `brv-log--${l.level}`]),
                        onClick: (Q) => n.toggleExpand("f" + u)
                      }, [
                        f("span", ew, v((B = l.time) == null ? void 0 : B.slice(11, 23)), 1),
                        f("span", tw, v(l.level), 1),
                        f("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("f" + u) }])
                        }, v(l.message), 3)
                      ], 10, Aw);
                    }), 128)),
                    n.filteredFrontLogs.length === 0 ? (p(), w("div", rw, "표시할 로그 없음")) : I("", !0)
                  ])
                ], 64)) : I("", !0),
                s.logTab === "back" ? (p(), w(P, { key: 1 }, [
                  f("div", sw, [
                    f("label", nw, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[14] || (e[14] = (l) => s.showBE.error = l)
                      }, null, 512), [
                        [XA, s.showBE.error]
                      ]),
                      Z(" ERROR (" + v(n.countBE("ERROR")) + ") ", 1)
                    ]),
                    f("label", iw, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[15] || (e[15] = (l) => s.showBE.warn = l)
                      }, null, 512), [
                        [XA, s.showBE.warn]
                      ]),
                      Z(" WARN (" + v(n.countBE("WARN")) + ") ", 1)
                    ]),
                    f("label", ow, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[16] || (e[16] = (l) => s.showBE.info = l)
                      }, null, 512), [
                        [XA, s.showBE.info]
                      ]),
                      Z(" INFO (" + v(n.countBE("INFO")) + ") ", 1)
                    ])
                  ]),
                  f("div", aw, [
                    (p(!0), w(P, null, fA(n.filteredBackLogs, (l, u) => {
                      var B, Q;
                      return p(), w("div", {
                        key: u,
                        class: $(["brv-log-item", `brv-log--${(B = l.level) == null ? void 0 : B.toLowerCase()}`]),
                        onClick: (C) => n.toggleExpand("b" + u)
                      }, [
                        f("span", cw, v((Q = l.time) == null ? void 0 : Q.slice(11, 23)), 1),
                        f("span", uw, v(l.level), 1),
                        f("span", fw, v(n.shortLogger(l.logger)), 1),
                        f("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("b" + u) }])
                        }, v(l.message), 3)
                      ], 10, lw);
                    }), 128)),
                    n.filteredBackLogs.length === 0 ? (p(), w("div", Bw, "표시할 로그 없음")) : I("", !0)
                  ])
                ], 64)) : I("", !0),
                s.logTab === "net" ? (p(), w(P, { key: 2 }, [
                  f("div", dw, [
                    f("label", gw, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[17] || (e[17] = (l) => s.showNet.error = l)
                      }, null, 512), [
                        [XA, s.showNet.error]
                      ]),
                      Z(" 에러 (" + v(n.networkLogs.filter((l) => l.error || l.status >= 400).length) + ") ", 1)
                    ]),
                    f("label", hw, [
                      IA(f("input", {
                        type: "checkbox",
                        "onUpdate:modelValue": e[18] || (e[18] = (l) => s.showNet.ok = l)
                      }, null, 512), [
                        [XA, s.showNet.ok]
                      ]),
                      Z(" 성공 (" + v(n.networkLogs.filter((l) => !l.error && l.status < 400).length) + ") ", 1)
                    ])
                  ]),
                  f("div", pw, [
                    (p(!0), w(P, null, fA(n.filteredNetLogs, (l, u) => {
                      var B;
                      return p(), w("div", {
                        key: u,
                        class: $(["brv-net-item", n.netClass(l)]),
                        onClick: (Q) => n.toggleExpand("n" + u)
                      }, [
                        f("span", {
                          class: $(["brv-net-status", n.statusClass(l.status)])
                        }, v(l.status || "ERR"), 3),
                        f("span", Qw, v(l.method), 1),
                        f("span", {
                          class: $(["brv-log-msg brv-selectable", { expanded: s.expanded.has("n" + u) }])
                        }, v(l.url), 3),
                        f("span", Cw, v(l.duration) + "ms", 1),
                        f("span", vw, v((B = l.time) == null ? void 0 : B.slice(11, 19)), 1)
                      ], 10, ww);
                    }), 128)),
                    (p(!0), w(P, null, fA(n.filteredNetLogs, (l, u) => (p(), w(P, {
                      key: "d" + u
                    }, [
                      s.expanded.has("n" + u) ? (p(), w("div", Uw, [
                        l.params ? (p(), w("div", Fw, [
                          e[47] || (e[47] = f("b", null, "Params:", -1)),
                          Z(" " + v(l.params), 1)
                        ])) : I("", !0),
                        l.requestBody ? (p(), w("div", bw, [
                          e[48] || (e[48] = f("b", null, "Request:", -1)),
                          Z(" " + v(l.requestBody), 1)
                        ])) : I("", !0),
                        l.responseBody ? (p(), w("div", mw, [
                          e[49] || (e[49] = f("b", null, "Response:", -1)),
                          Z(" " + v(l.responseBody), 1)
                        ])) : I("", !0),
                        l.error ? (p(), w("div", yw, [
                          e[50] || (e[50] = f("b", null, "Error:", -1)),
                          Z(" " + v(l.error), 1)
                        ])) : I("", !0)
                      ])) : I("", !0)
                    ], 64))), 128)),
                    n.filteredNetLogs.length === 0 ? (p(), w("div", Ew, "표시할 요청 없음")) : I("", !0)
                  ])
                ], 64)) : I("", !0),
                s.logTab === "mutation" ? (p(), w("div", xw, [
                  (p(!0), w(P, null, fA(n.parsedMutationLog, (l, u) => (p(), w("div", {
                    key: u,
                    class: "brv-log-item",
                    onClick: (B) => n.toggleExpand("m" + u)
                  }, [
                    f("span", Iw, v(l.time), 1),
                    f("span", {
                      class: $(["brv-log-msg brv-mutation brv-selectable", { expanded: s.expanded.has("m" + u) }])
                    }, v(l.type), 3),
                    l.payload !== null ? (p(), w("span", _w, v(n.formatPayload(l.payload)), 1)) : I("", !0)
                  ], 8, Hw))), 128)),
                  n.parsedMutationLog.length === 0 ? (p(), w("div", Lw, "기록된 mutation 없음")) : I("", !0)
                ])) : I("", !0)
              ])
            ], 64)) : I("", !0)
          ], 64)) : (p(), w(P, { key: 0 }, [
            s.loading ? (p(), w("div", Hh, [...e[22] || (e[22] = [
              f("span", { class: "brv-spin" }, null, -1),
              Z(" 불러오는 중... ", -1)
            ])])) : s.list.length === 0 ? (p(), w("div", Ih, "저장된 리포트가 없습니다.")) : (p(), w("div", _h, [
              (p(!0), w(P, null, fA(s.list, (l) => {
                var u;
                return p(), w("div", {
                  key: l.bugReportId,
                  class: "brv-item",
                  onClick: (B) => n.openDetail(l.bugReportId)
                }, [
                  f("span", {
                    class: $(["brv-badge", `brv-sev--${(u = l.severity) == null ? void 0 : u.toLowerCase()}`])
                  }, v(l.severity), 3),
                  f("span", {
                    class: $(["brv-status", `brv-st--${(l.status || "OPEN").toLowerCase()}`])
                  }, v(n.statusLabel(l.status)), 3),
                  f("span", Sh, v(l.problem || "(내용 없음)"), 1),
                  l.fixStatus ? (p(), w("span", {
                    key: 0,
                    class: $(["brv-fix", `brv-fix--${l.fixStatus.toLowerCase()}`]),
                    title: n.fixLabel(l.fixStatus)
                  }, v(n.fixShort(l.fixStatus)), 11, Kh)) : I("", !0),
                  f("span", Th, v(l.reporter) + " · " + v(n.formatDate(l.insertDate)), 1),
                  f("button", {
                    class: "brv-del",
                    onClick: jt((B) => n.deleteReport(l.bugReportId), ["stop"]),
                    title: "삭제"
                  }, "✕", 8, Dh)
                ], 8, Lh);
              }), 128))
            ]))
          ], 64))
        ])
      ])
    ], 32)) : I("", !0)
  ]);
}
const Kw = /* @__PURE__ */ Si(Ch, [["render", Sw], ["styles", [ph]], ["__scopeId", "data-v-d9691c69"]]);
function dn({ endpoint: A, project: e, apiKey: t, user: r, adminKey: s }) {
  const n = A ? `${String(A).replace(/\/+$/, "")}/p/${e}` : "", i = !!n;
  async function o(a, c, l, { query: u } = {}) {
    if (!i) throw new Error("버그 리포트 서버가 설정되지 않았습니다(endpoint).");
    const B = { Accept: "application/json" };
    l !== void 0 && (B["Content-Type"] = "application/json"), t && (B["X-Bugfix-Key"] = t), s && (B["X-Bugfix-Admin"] = s);
    const Q = typeof r == "function" ? r() : r;
    Q && (B["X-Bugfix-User"] = String(Q));
    const C = u ? "?" + new URLSearchParams(u).toString() : "", U = await fetch(n + c + C, { method: a, headers: B, body: l === void 0 ? void 0 : JSON.stringify(l) });
    if (U.status === 204) return null;
    const T = await U.text();
    let g = null;
    try {
      g = T ? JSON.parse(T) : null;
    } catch {
    }
    if (!U.ok) {
      const b = new Error((g == null ? void 0 : g.message) || `HTTP ${U.status}`);
      throw b.status = U.status, b;
    }
    return (g == null ? void 0 : g.content) ?? g;
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
    fixSync: (a) => o("POST", `/reports/${a}/fix-sync`)
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
      } catch (u) {
        i(u);
      }
    }
    function a(l) {
      try {
        c(r.throw(l));
      } catch (u) {
        i(u);
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
}, Tw = function(A) {
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
}, Lo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Dw = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Tr = 0; Tr < Lo.length; Tr++)
  Dw[Lo.charCodeAt(Tr)] = Tr;
var So = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Zt = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var Dr = 0; Dr < So.length; Dr++)
  Zt[So.charCodeAt(Dr)] = Dr;
var kw = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = Zt[A.charCodeAt(r)], i = Zt[A.charCodeAt(r + 1)], o = Zt[A.charCodeAt(r + 2)], a = Zt[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, Ow = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, Rw = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, ht = 5, Ki = 11, gn = 2, Mw = Ki - ht, Nl = 65536 >> ht, Nw = 1 << ht, hn = Nw - 1, Vw = 1024 >> ht, Gw = Nl + Vw, Pw = Gw, Jw = 32, Xw = Pw + Jw, Ww = 65536 >> Ki, Yw = 1 << Mw, jw = Yw - 1, Ko = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Zw = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, zw = function(A, e) {
  var t = kw(A), r = Array.isArray(t) ? Rw(t) : new Uint32Array(t), s = Array.isArray(t) ? Ow(t) : new Uint16Array(t), n = 24, i = Ko(s, n / 2, r[4] / 2), o = r[5] === 2 ? Ko(s, (n + r[4]) / 2) : Zw(r, Math.ceil((n + r[4]) / 4));
  return new qw(r[0], r[1], r[2], r[3], i, o);
}, qw = (
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
          return t = Xw - Ww + (e >> Ki), t = this.index[t], t += e >> ht & jw, t = this.index[t], t = (t << gn) + (e & hn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), To = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", $w = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var kr = 0; kr < To.length; kr++)
  $w[To.charCodeAt(kr)] = kr;
var AQ = "KwAAAAAAAAAACA4AUD0AADAgAAACAAAAAAAIABAAGABAAEgAUABYAGAAaABgAGgAYgBqAF8AZwBgAGgAcQB5AHUAfQCFAI0AlQCdAKIAqgCyALoAYABoAGAAaABgAGgAwgDKAGAAaADGAM4A0wDbAOEA6QDxAPkAAQEJAQ8BFwF1AH0AHAEkASwBNAE6AUIBQQFJAVEBWQFhAWgBcAF4ATAAgAGGAY4BlQGXAZ8BpwGvAbUBvQHFAc0B0wHbAeMB6wHxAfkBAQIJAvEBEQIZAiECKQIxAjgCQAJGAk4CVgJeAmQCbAJ0AnwCgQKJApECmQKgAqgCsAK4ArwCxAIwAMwC0wLbAjAA4wLrAvMC+AIAAwcDDwMwABcDHQMlAy0DNQN1AD0DQQNJA0kDSQNRA1EDVwNZA1kDdQB1AGEDdQBpA20DdQN1AHsDdQCBA4kDkQN1AHUAmQOhA3UAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AKYDrgN1AHUAtgO+A8YDzgPWAxcD3gPjA+sD8wN1AHUA+wMDBAkEdQANBBUEHQQlBCoEFwMyBDgEYABABBcDSARQBFgEYARoBDAAcAQzAXgEgASIBJAEdQCXBHUAnwSnBK4EtgS6BMIEyAR1AHUAdQB1AHUAdQCVANAEYABgAGAAYABgAGAAYABgANgEYADcBOQEYADsBPQE/AQEBQwFFAUcBSQFLAU0BWQEPAVEBUsFUwVbBWAAYgVgAGoFcgV6BYIFigWRBWAAmQWfBaYFYABgAGAAYABgAKoFYACxBbAFuQW6BcEFwQXHBcEFwQXPBdMF2wXjBeoF8gX6BQIGCgYSBhoGIgYqBjIGOgZgAD4GRgZMBmAAUwZaBmAAYABgAGAAYABgAGAAYABgAGAAYABgAGIGYABpBnAGYABgAGAAYABgAGAAYABgAGAAYAB4Bn8GhQZgAGAAYAB1AHcDFQSLBmAAYABgAJMGdQA9A3UAmwajBqsGqwaVALMGuwbDBjAAywbSBtIG1QbSBtIG0gbSBtIG0gbdBuMG6wbzBvsGAwcLBxMHAwcbByMHJwcsBywHMQcsB9IGOAdAB0gHTgfSBkgHVgfSBtIG0gbSBtIG0gbSBtIG0gbSBiwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdgAGAALAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAdbB2MHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB2kH0gZwB64EdQB1AHUAdQB1AHUAdQB1AHUHfQdgAIUHjQd1AHUAlQedB2AAYAClB6sHYACzB7YHvgfGB3UAzgfWBzMB3gfmB1EB7gf1B/0HlQENAQUIDQh1ABUIHQglCBcDLQg1CD0IRQhNCEEDUwh1AHUAdQBbCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIaQhjCGQIZQhmCGcIaAhpCGMIZAhlCGYIZwhoCGkIYwhkCGUIZghnCGgIcAh3CHoIMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIgggwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAALAcsBywHLAcsBywHLAcsBywHLAcsB4oILAcsB44I0gaWCJ4Ipgh1AHUAqgiyCHUAdQB1AHUAdQB1AHUAdQB1AHUAtwh8AXUAvwh1AMUIyQjRCNkI4AjoCHUAdQB1AO4I9gj+CAYJDgkTCS0HGwkjCYIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiCCIIIggiAAIAAAAFAAYABgAGIAXwBgAHEAdQBFAJUAogCyAKAAYABgAEIA4ABGANMA4QDxAMEBDwE1AFwBLAE6AQEBUQF4QkhCmEKoQrhCgAHIQsAB0MLAAcABwAHAAeDC6ABoAHDCwMMAAcABwAHAAdDDGMMAAcAB6MM4wwjDWMNow3jDaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAGgAaABoAEjDqABWw6bDqABpg6gAaABoAHcDvwOPA+gAaABfA/8DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DvwO/A78DpcPAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcAB9cPKwkyCToJMAB1AHUAdQBCCUoJTQl1AFUJXAljCWcJawkwADAAMAAwAHMJdQB2CX4JdQCECYoJjgmWCXUAngkwAGAAYABxAHUApgn3A64JtAl1ALkJdQDACTAAMAAwADAAdQB1AHUAdQB1AHUAdQB1AHUAowYNBMUIMAAwADAAMADICcsJ0wnZCRUE4QkwAOkJ8An4CTAAMAB1AAAKvwh1AAgKDwoXCh8KdQAwACcKLgp1ADYKqAmICT4KRgowADAAdQB1AE4KMAB1AFYKdQBeCnUAZQowADAAMAAwADAAMAAwADAAMAAVBHUAbQowADAAdQC5CXUKMAAwAHwBxAijBogEMgF9CoQKiASMCpQKmgqIBKIKqgquCogEDQG2Cr4KxgrLCjAAMADTCtsKCgHjCusK8Qr5CgELMAAwADAAMAB1AIsECQsRC3UANAEZCzAAMAAwADAAMAB1ACELKQswAHUANAExCzkLdQBBC0kLMABRC1kLMAAwADAAMAAwADAAdQBhCzAAMAAwAGAAYABpC3ELdwt/CzAAMACHC4sLkwubC58Lpwt1AK4Ltgt1APsDMAAwADAAMAAwADAAMAAwAL4LwwvLC9IL1wvdCzAAMADlC+kL8Qv5C/8LSQswADAAMAAwADAAMAAwADAAMAAHDDAAMAAwADAAMAAODBYMHgx1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1ACYMMAAwADAAdQB1AHUALgx1AHUAdQB1AHUAdQA2DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AD4MdQBGDHUAdQB1AHUAdQB1AEkMdQB1AHUAdQB1AFAMMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQBYDHUAdQB1AF8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUA+wMVBGcMMAAwAHwBbwx1AHcMfwyHDI8MMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAYABgAJcMMAAwADAAdQB1AJ8MlQClDDAAMACtDCwHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsB7UMLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHdQB1AHUAdQB1AHUAdQB1AHUAdQB1AHUAdQB1AA0EMAC9DDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAsBywHLAcsBywHLAcsBywHLQcwAMEMyAwsBywHLAcsBywHLAcsBywHLAcsBywHzAwwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwAHUAdQB1ANQM2QzhDDAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMABgAGAAYABgAGAAYABgAOkMYADxDGAA+AwADQYNYABhCWAAYAAODTAAMAAwADAAFg1gAGAAHg37AzAAMAAwADAAYABgACYNYAAsDTQNPA1gAEMNPg1LDWAAYABgAGAAYABgAGAAYABgAGAAUg1aDYsGVglhDV0NcQBnDW0NdQ15DWAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAlQCBDZUAiA2PDZcNMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAnw2nDTAAMAAwADAAMAAwAHUArw23DTAAMAAwADAAMAAwADAAMAAwADAAMAB1AL8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAB1AHUAdQB1AHUAdQDHDTAAYABgAM8NMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA1w11ANwNMAAwAD0B5A0wADAAMAAwADAAMADsDfQN/A0EDgwOFA4wABsOMAAwADAAMAAwADAAMAAwANIG0gbSBtIG0gbSBtIG0gYjDigOwQUuDsEFMw7SBjoO0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGQg5KDlIOVg7SBtIGXg5lDm0OdQ7SBtIGfQ6EDooOjQ6UDtIGmg6hDtIG0gaoDqwO0ga0DrwO0gZgAGAAYADEDmAAYAAkBtIGzA5gANIOYADaDokO0gbSBt8O5w7SBu8O0gb1DvwO0gZgAGAAxA7SBtIG0gbSBtIGYABgAGAAYAAED2AAsAUMD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHJA8sBywHLAcsBywHLAccDywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywPLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAc0D9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAccD9IG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIGFA8sBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHLAcsBywHPA/SBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gbSBtIG0gYUD0QPlQCVAJUAMAAwADAAMACVAJUAlQCVAJUAlQCVAEwPMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAA//8EAAQABAAEAAQABAAEAAQABAANAAMAAQABAAIABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQACgATABcAHgAbABoAHgAXABYAEgAeABsAGAAPABgAHABLAEsASwBLAEsASwBLAEsASwBLABgAGAAeAB4AHgATAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABYAGwASAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWAA0AEQAeAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAFAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJABYAGgAbABsAGwAeAB0AHQAeAE8AFwAeAA0AHgAeABoAGwBPAE8ADgBQAB0AHQAdAE8ATwAXAE8ATwBPABYAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AHgAeAFAATwBAAE8ATwBPAEAATwBQAFAATwBQAB4AHgAeAB4AHgAeAB0AHQAdAB0AHgAdAB4ADgBQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgBQAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAJAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAkACQAJAAkACQAJAAkABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAFAAHgAeAB4AKwArAFAAUABQAFAAGABQACsAKwArACsAHgAeAFAAHgBQAFAAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUAAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAYAA0AKwArAB4AHgAbACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAB4ABAAEAB4ABAAEABMABAArACsAKwArACsAKwArACsAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAKwArACsAKwBWAFYAVgBWAB4AHgArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AGgAaABoAGAAYAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQAEwAEACsAEwATAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABLAEsASwBLAEsASwBLAEsASwBLABoAGQAZAB4AUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQABMAUAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABABQAFAABAAEAB4ABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUAAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAFAABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQAUABQAB4AHgAYABMAUAArACsABAAbABsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAFAABAAEAAQABAAEAFAABAAEAAQAUAAEAAQABAAEAAQAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArACsAHgArAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAUAAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEAA0ADQBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUAArACsAKwBQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABABQACsAKwArACsAKwArACsAKwAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUAAaABoAUABQAFAAUABQAEwAHgAbAFAAHgAEACsAKwAEAAQABAArAFAAUABQAFAAUABQACsAKwArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQACsAUABQACsAKwAEACsABAAEAAQABAAEACsAKwArACsABAAEACsAKwAEAAQABAArACsAKwAEACsAKwArACsAKwArACsAUABQAFAAUAArAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLAAQABABQAFAAUAAEAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsAKwAEAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAArACsAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AGwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAKwArACsAKwArAAQABAAEACsAKwArACsAUABQACsAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAAQAUAArAFAAUABQAFAAUABQACsAKwArAFAAUABQACsAUABQAFAAUAArACsAKwBQAFAAKwBQACsAUABQACsAKwArAFAAUAArACsAKwBQAFAAUAArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArAAQABAAEAAQABAArACsAKwAEAAQABAArAAQABAAEAAQAKwArAFAAKwArACsAKwArACsABAArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAHgAeAB4AHgAeAB4AGwAeACsAKwArACsAKwAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAUABQAFAAKwArACsAKwArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwAOAFAAUABQAFAAUABQAFAAHgBQAAQABAAEAA4AUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAKwArAAQAUAAEAAQABAAEAAQABAAEACsABAAEAAQAKwAEAAQABAAEACsAKwArACsAKwArACsABAAEACsAKwArACsAKwArACsAUAArAFAAUAAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAFAABAAEAAQABAAEAAQABAArAAQABAAEACsABAAEAAQABABQAB4AKwArACsAKwBQAFAAUAAEAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQABoAUABQAFAAUABQAFAAKwAEAAQABAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQACsAUAArACsAUABQAFAAUABQAFAAUAArACsAKwAEACsAKwArACsABAAEAAQABAAEAAQAKwAEACsABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArAAQABAAeACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAXAAqACoAKgAqACoAKgAqACsAKwArACsAGwBcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAeAEsASwBLAEsASwBLAEsASwBLAEsADQANACsAKwArACsAKwBcAFwAKwBcACsAXABcAFwAXABcACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAXAArAFwAXABcAFwAXABcAFwAXABcAFwAKgBcAFwAKgAqACoAKgAqACoAKgAqACoAXAArACsAXABcAFwAXABcACsAXAArACoAKgAqACoAKgAqACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwBcAFwAXABcAFAADgAOAA4ADgAeAA4ADgAJAA4ADgANAAkAEwATABMAEwATAAkAHgATAB4AHgAeAAQABAAeAB4AHgAeAB4AHgBLAEsASwBLAEsASwBLAEsASwBLAFAAUABQAFAAUABQAFAAUABQAFAADQAEAB4ABAAeAAQAFgARABYAEQAEAAQAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQADQAEAAQABAAEAAQADQAEAAQAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAA0ADQAeAB4AHgAeAB4AHgAEAB4AHgAeAB4AHgAeACsAHgAeAA4ADgANAA4AHgAeAB4AHgAeAAkACQArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgBcAEsASwBLAEsASwBLAEsASwBLAEsADQANAB4AHgAeAB4AXABcAFwAXABcAFwAKgAqACoAKgBcAFwAXABcACoAKgAqAFwAKgAqACoAXABcACoAKgAqACoAKgAqACoAXABcAFwAKgAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKgAqAFwAKgBLAEsASwBLAEsASwBLAEsASwBLACoAKgAqACoAKgAqAFAAUABQAFAAUABQACsAUAArACsAKwArACsAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAKwBQACsAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsABAAEAAQAHgANAB4AHgAeAB4AHgAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUAArACsADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAWABEAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQANAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAANAA0AKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUAArAAQABAArACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqAA0ADQAVAFwADQAeAA0AGwBcACoAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwAeAB4AEwATAA0ADQAOAB4AEwATAB4ABAAEAAQACQArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAHgArACsAKwATABMASwBLAEsASwBLAEsASwBLAEsASwBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAXABcAFwAXABcACsAKwArACsAKwArACsAKwArACsAKwBcAFwAXABcAFwAXABcAFwAXABcAFwAXAArACsAKwArAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAXAArACsAKwAqACoAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAArACsAHgAeAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcACoAKgAqACoAKgAqACoAKgAqACoAKwAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKwArAAQASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACoAKgAqACoAKgAqACoAXAAqACoAKgAqACoAKgArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABABQAFAAUABQAFAAUABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwANAA0AHgANAA0ADQANAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAEAAQABAAEAAQAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwAeAB4AHgAeAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArAA0ADQANAA0ADQBLAEsASwBLAEsASwBLAEsASwBLACsAKwArAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAA0ADQBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUAAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArAAQABAAEAB4ABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAAQAUABQAFAAUABQAFAABABQAFAABAAEAAQAUAArACsAKwArACsABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQACsAUAArAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAFAAUABQACsAHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQACsAKwAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQACsAHgAeAB4AHgAeAB4AHgAOAB4AKwANAA0ADQANAA0ADQANAAkADQANAA0ACAAEAAsABAAEAA0ACQANAA0ADAAdAB0AHgAXABcAFgAXABcAFwAWABcAHQAdAB4AHgAUABQAFAANAAEAAQAEAAQABAAEAAQACQAaABoAGgAaABoAGgAaABoAHgAXABcAHQAVABUAHgAeAB4AHgAeAB4AGAAWABEAFQAVABUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ADQAeAA0ADQANAA0AHgANAA0ADQAHAB4AHgAeAB4AKwAEAAQABAAEAAQABAAEAAQABAAEAFAAUAArACsATwBQAFAAUABQAFAAHgAeAB4AFgARAE8AUABPAE8ATwBPAFAAUABQAFAAUAAeAB4AHgAWABEAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArABsAGwAbABsAGwAbABsAGgAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGgAbABsAGwAbABoAGwAbABoAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbABsAGwAbAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAHgAeAFAAGgAeAB0AHgBQAB4AGgAeAB4AHgAeAB4AHgAeAB4AHgBPAB4AUAAbAB4AHgBQAFAAUABQAFAAHgAeAB4AHQAdAB4AUAAeAFAAHgBQAB4AUABPAFAAUAAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAHgBQAFAAUABQAE8ATwBQAFAAUABQAFAATwBQAFAATwBQAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAUABQAFAATwBPAE8ATwBPAE8ATwBPAE8ATwBQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABPAB4AHgArACsAKwArAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHQAdAB4AHgAeAB0AHQAeAB4AHQAeAB4AHgAdAB4AHQAbABsAHgAdAB4AHgAeAB4AHQAeAB4AHQAdAB0AHQAeAB4AHQAeAB0AHgAdAB0AHQAdAB0AHQAeAB0AHgAeAB4AHgAeAB0AHQAdAB0AHgAeAB4AHgAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB4AHgAeAB0AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAeAB0AHQAdAB0AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAdAB4AHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAWABEAHgAeAB4AHgAeAB4AHQAeAB4AHgAeAB4AHgAeACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAWABEAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAFAAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAeAB4AHQAdAB0AHQAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB0AHQAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB0AHQAeAB4AHQAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AHQAdAB0AHgAeAB0AHgAeAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlAB4AHQAdAB4AHgAdAB4AHgAeAB4AHQAdAB4AHgAeAB4AJQAlAB0AHQAlAB4AJQAlACUAIAAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAeAB4AHgAeAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHgAdAB0AHQAeAB0AJQAdAB0AHgAdAB0AHgAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHQAdAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAdAB0AHQAdACUAHgAlACUAJQAdACUAJQAdAB0AHQAlACUAHQAdACUAHQAdACUAJQAlAB4AHQAeAB4AHgAeAB0AHQAlAB0AHQAdAB0AHQAdACUAJQAlACUAJQAdACUAJQAgACUAHQAdACUAJQAlACUAJQAlACUAJQAeAB4AHgAlACUAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB0AHgAeAB4AFwAXABcAFwAXABcAHgATABMAJQAeAB4AHgAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARABYAEQAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAWABEAFgARABYAEQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAWABEAFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AFgARAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAdAB0AHQAdAB0AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAFAAUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAEAAQABAAeAB4AKwArACsAKwArABMADQANAA0AUAATAA0AUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUAANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAA0ADQANAA0ADQANAA0ADQAeAA0AFgANAB4AHgAXABcAHgAeABcAFwAWABEAFgARABYAEQAWABEADQANAA0ADQATAFAADQANAB4ADQANAB4AHgAeAB4AHgAMAAwADQANAA0AHgANAA0AFgANAA0ADQANAA0ADQANAA0AHgANAB4ADQANAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArACsAKwArACsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArAA0AEQARACUAJQBHAFcAVwAWABEAFgARABYAEQAWABEAFgARACUAJQAWABEAFgARABYAEQAWABEAFQAWABEAEQAlAFcAVwBXAFcAVwBXAFcAVwBXAAQABAAEAAQABAAEACUAVwBXAFcAVwA2ACUAJQBXAFcAVwBHAEcAJQAlACUAKwBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBRAFcAUQBXAFEAVwBXAFcAVwBXAFcAUQBXAFcAVwBXAFcAVwBRAFEAKwArAAQABAAVABUARwBHAFcAFQBRAFcAUQBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFEAVwBRAFcAUQBXAFcAVwBXAFcAVwBRAFcAVwBXAFcAVwBXAFEAUQBXAFcAVwBXABUAUQBHAEcAVwArACsAKwArACsAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwAlACUAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACsAKwArACsAKwArACsAKwArACsAKwArAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAUQBRAFEAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBPAE8ATwBPAE8ATwBPAE8AJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADQATAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABLAEsASwBLAEsASwBLAEsASwBLAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAABAAEAAQABAAeAAQABAAEAAQABAAEAAQABAAEAAQAHgBQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUABQAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAeAA0ADQANAA0ADQArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AUAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAB4AHgAeAB4AHgAeAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AUABQAFAAUABQAFAAUABQAFAAUABQAAQAUABQAFAABABQAFAAUABQAAQAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAeAB4AHgAeAAQAKwArACsAUABQAFAAUABQAFAAHgAeABoAHgArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAADgAOABMAEwArACsAKwArACsAKwArACsABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwANAA0ASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUAAeAB4AHgBQAA4AUABQAAQAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArAB4AWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYAFgAWABYACsAKwArAAQAHgAeAB4AHgAeAB4ADQANAA0AHgAeAB4AHgArAFAASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArAB4AHgBcAFwAXABcAFwAKgBcAFwAXABcAFwAXABcAFwAXABcAEsASwBLAEsASwBLAEsASwBLAEsAXABcAFwAXABcACsAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAFAAUABQAAQAUABQAFAAUABQAFAAUABQAAQABAArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAHgANAA0ADQBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKgAqACoAXAAqACoAKgBcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXAAqAFwAKgAqACoAXABcACoAKgBcAFwAXABcAFwAKgAqAFwAKgBcACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFwAXABcACoAKgBQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAA0ADQBQAFAAUAAEAAQAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQADQAEAAQAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAVABVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBUAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVAFUAVQBVACsAKwArACsAKwArACsAKwArACsAKwArAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAWQBZAFkAKwArACsAKwBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAWgBaAFoAKwArACsAKwAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYABgAGAAYAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAKwArACsAKwArAFYABABWAFYAVgBWAFYAVgBWAFYAVgBWAB4AVgBWAFYAVgBWAFYAVgBWAFYAVgBWAFYAVgArAFYAVgBWAFYAVgArAFYAKwBWAFYAKwBWAFYAKwBWAFYAVgBWAFYAVgBWAFYAVgBWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAEQAWAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAaAB4AKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAGAARABEAGAAYABMAEwAWABEAFAArACsAKwArACsAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACUAJQAlACUAJQAWABEAFgARABYAEQAWABEAFgARABYAEQAlACUAFgARACUAJQAlACUAJQAlACUAEQAlABEAKwAVABUAEwATACUAFgARABYAEQAWABEAJQAlACUAJQAlACUAJQAlACsAJQAbABoAJQArACsAKwArAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAcAKwATACUAJQAbABoAJQAlABYAEQAlACUAEQAlABEAJQBXAFcAVwBXAFcAVwBXAFcAVwBXABUAFQAlACUAJQATACUAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXABYAJQARACUAJQAlAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAWACUAEQAlABYAEQARABYAEQARABUAVwBRAFEAUQBRAFEAUQBRAFEAUQBRAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAEcARwArACsAVwBXAFcAVwBXAFcAKwArAFcAVwBXAFcAVwBXACsAKwBXAFcAVwBXAFcAVwArACsAVwBXAFcAKwArACsAGgAbACUAJQAlABsAGwArAB4AHgAeAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwAEAAQABAAQAB0AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsADQANAA0AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAA0AUABQAFAAUAArACsAKwArAFAAUABQAFAAUABQAFAAUAANAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwArAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwBQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwANAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAB4AUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAUABQAFAAUABQAAQABAAEACsABAAEACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAKwBQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAA0ADQANAA0ADQANAA0ADQAeACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAArACsAKwArAFAAUABQAFAAUAANAA0ADQANAA0ADQAUACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsADQANAA0ADQANAA0ADQBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAB4AHgAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArAAQABAANACsAKwBQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAB4AHgAeAB4AHgArACsAKwArACsAKwAEAAQABAAEAAQABAAEAA0ADQAeAB4AHgAeAB4AKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwAeACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEACsASwBLAEsASwBLAEsASwBLAEsASwANAA0ADQANAFAABAAEAFAAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAeAA4AUAArACsAKwArACsAKwArACsAKwAEAFAAUABQAFAADQANAB4ADQAEAAQABAAEAB4ABAAEAEsASwBLAEsASwBLAEsASwBLAEsAUAAOAFAADQANAA0AKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAANAA0AHgANAA0AHgAEACsAUABQAFAAUABQAFAAUAArAFAAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAA0AKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsABAAEAAQABAArAFAAUABQAFAAUABQAFAAUAArACsAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQACsABAAEAFAABAAEAAQABAAEAAQABAArACsABAAEACsAKwAEAAQABAArACsAUAArACsAKwArACsAKwAEACsAKwArACsAKwBQAFAAUABQAFAABAAEACsAKwAEAAQABAAEAAQABAAEACsAKwArAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsABAAEAAQABAAEAAQABABQAFAAUABQAA0ADQANAA0AHgBLAEsASwBLAEsASwBLAEsASwBLAA0ADQArAB4ABABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAFAAUAAeAFAAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABAAEAAQADgANAA0AEwATAB4AHgAeAA0ADQANAA0ADQANAA0ADQANAA0ADQANAA0ADQANAFAAUABQAFAABAAEACsAKwAEAA0ADQAeAFAAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAFAAKwArACsAKwArACsAKwBLAEsASwBLAEsASwBLAEsASwBLACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAXABcAFwAKwArACoAKgAqACoAKgAqACoAKgAqACoAKgAqACoAKgAqACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBcAFwADQANAA0AKgBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAKwArAFAAKwArAFAAUABQAFAAUABQAFAAUAArAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQAKwAEAAQAKwArAAQABAAEAAQAUAAEAFAABAAEAA0ADQANACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAArACsABAAEAAQABAAEAAQABABQAA4AUAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAABAAEAAQABAAEAAQABAAEAAQABABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAFAABAAEAAQABAAOAB4ADQANAA0ADQAOAB4ABAArACsAKwArACsAKwArACsAUAAEAAQABAAEAAQABAAEAAQABAAEAAQAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAA0ADQANAFAADgAOAA4ADQANACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAEAAQABAAEACsABAAEAAQABAAEAAQABAAEAFAADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAOABMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQACsAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAArACsAKwAEACsABAAEACsABAAEAAQABAAEAAQABABQAAQAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAUABQAFAAUABQAFAAKwBQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAUAArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAABAAEAAQABAAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAaABoAGgAaAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArAA0AUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsADQANAA0ADQANACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABIAEgAQwBDAEMAUABQAFAAUABDAFAAUABQAEgAQwBIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAASABDAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwAJAAkACQAJAAkACQAJABYAEQArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABIAEMAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwANAA0AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArAAQABAAEAAQABAANACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEAA0ADQANAB4AHgAeAB4AHgAeAFAAUABQAFAADQAeACsAKwArACsAKwArACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAANAA0AHgAeACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwAEAFAABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwAEAAQABAAEAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAARwBHABUARwAJACsAKwArACsAKwArACsAKwArACsAKwAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUQBRAFEAKwArACsAKwArACsAKwArACsAKwArACsAKwBRAFEAUQBRACsAKwArACsAKwArACsAKwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUAArACsAHgAEAAQADQAEAAQABAAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAAQABAAEAAQABAAeAB4AHgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAB4AHgAEAAQABAAEAAQABAAEAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4ABAAEAAQAHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwArACsAKwArACsAKwArACsAKwArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAKwArAFAAKwArAFAAUAArACsAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACsAUAArAFAAUABQAFAAUABQAFAAKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwBQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAHgAeAFAAUABQAFAAUAArAFAAKwArACsAUABQAFAAUABQAFAAUAArAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAB4AHgAeAB4AHgAeAB4AHgAeACsAKwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAEsASwBLAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAeAB4AHgAeAB4AHgAeAB4ABAAeAB4AHgAeAB4AHgAeAB4AHgAeAAQAHgAeAA0ADQANAA0AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQAKwAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArAAQABAAEAAQABAAEAAQAKwAEAAQAKwAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwAEAAQABAAEAAQABAAEAFAAUABQAFAAUABQAFAAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwBQAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArABsAUABQAFAAUABQACsAKwBQAFAAUABQAFAAUABQAFAAUAAEAAQABAAEAAQABAAEACsAKwArACsAKwArACsAKwArAB4AHgAeAB4ABAAEAAQABAAEAAQABABQACsAKwArACsASwBLAEsASwBLAEsASwBLAEsASwArACsAKwArABYAFgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAGgBQAFAAUAAaAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAeAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQACsAKwBQAFAAUABQACsAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUAArACsAKwArACsAKwBQACsAKwArACsAUAArAFAAKwBQACsAUABQAFAAKwBQAFAAKwBQACsAKwBQACsAUAArAFAAKwBQACsAUAArAFAAUAArAFAAKwArAFAAUABQAFAAKwBQAFAAUABQAFAAUABQACsAUABQAFAAUAArAFAAUABQAFAAKwBQACsAUABQAFAAUABQAFAAUABQAFAAUAArAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAArACsAKwArACsAUABQAFAAKwBQAFAAUABQAFAAKwBQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwAeAB4AKwArACsAKwArACsAKwArACsAKwArACsAKwArAE8ATwBPAE8ATwBPAE8ATwBPAE8ATwBPAE8AJQAlACUAHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHgAeAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB4AHgAeACUAJQAlAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAdAB0AHQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAKQApACkAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAlACUAJQAlACUAHgAlACUAJQAlACUAIAAgACAAJQAlACAAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACEAIQAhACEAIQAlACUAIAAgACUAJQAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlACUAIAAlACUAJQAlACAAIAAgACUAIAAgACAAJQAlACUAJQAlACUAJQAgACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAlAB4AJQAeACUAJQAlACUAJQAgACUAJQAlACUAHgAlAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAgACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACAAIAAgACAAIAAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeABcAFwAXABUAFQAVAB4AHgAeAB4AJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAgACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlACUAJQAeAB4AHgAeAB4AHgAeAB4AHgAeACUAJQAlACUAJQAlAB4AHgAeAB4AHgAeAB4AHgAlACUAJQAlACUAJQAlACUAHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAgACUAJQAgACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAJQAlACUAJQAlACUAIAAlACUAJQAlACUAJQAlACUAJQAgACAAIAAgACAAIAAgACAAIAAgACUAJQAgACAAIAAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACAAIAAlACAAIAAlACAAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAgACAAIAAlACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAJQAlAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AKwAeAB4AHgAeAB4AHgAeAB4AHgAeAB4AHgArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAEsASwBLAEsASwBLAEsASwBLAEsAKwArACsAKwArACsAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwArAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwAlACUAJQAlACUAJQAlACUAJQAlACUAVwBXACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQBXAFcAVwBXAFcAVwBXAFcAVwBXAFcAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAJQAlACUAKwAEACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArACsAKwArAA==", Do = 50, eQ = 1, Vl = 2, Gl = 3, tQ = 4, rQ = 5, ko = 7, Pl = 8, Oo = 9, Ze = 10, Yn = 11, Ro = 12, jn = 13, sQ = 14, zt = 15, Zn = 16, Or = 17, Vt = 18, nQ = 19, Mo = 20, zn = 21, Gt = 22, pn = 23, Qt = 24, ZA = 25, qt = 26, $t = 27, Ct = 28, iQ = 29, ct = 30, oQ = 31, Rr = 32, Mr = 33, qn = 34, $n = 35, Ai = 36, Cr = 37, ei = 38, os = 39, as = 40, wn = 41, Jl = 42, aQ = 43, lQ = [9001, 65288], Xl = "!", q = "×", Nr = "÷", ti = zw(AQ), _e = [ct, Ai], ri = [eQ, Vl, Gl, rQ], Wl = [Ze, Pl], No = [$t, qt], cQ = ri.concat(Wl), Vo = [ei, os, as, qn, $n], uQ = [zt, jn], fQ = function(A, e) {
  e === void 0 && (e = "strict");
  var t = [], r = [], s = [];
  return A.forEach(function(n, i) {
    var o = ti.get(n);
    if (o > Do ? (s.push(!0), o -= Do) : s.push(!1), ["normal", "auto", "loose"].indexOf(e) !== -1 && [8208, 8211, 12316, 12448].indexOf(n) !== -1)
      return r.push(i), t.push(Zn);
    if (o === tQ || o === Yn) {
      if (i === 0)
        return r.push(i), t.push(ct);
      var a = t[i - 1];
      return cQ.indexOf(a) === -1 ? (r.push(r[i - 1]), t.push(a)) : (r.push(i), t.push(ct));
    }
    if (r.push(i), o === oQ)
      return t.push(e === "strict" ? zn : Cr);
    if (o === Jl || o === iQ)
      return t.push(ct);
    if (o === aQ)
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
}, BQ = function(A, e, t, r, s) {
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
  if (ti.get(A[n]) === Yn || (a === Rr || a === Mr) && ti.get(A[o]) === Yn || a === ko || l === ko || a === Oo || [Ze, jn, zt].indexOf(a) === -1 && l === Oo || [Or, Vt, nQ, Qt, Ct].indexOf(l) !== -1 || Go(n, e) === Gt || Qn(pn, Gt, n, e) || Qn([Or, Vt], zn, n, e) || Qn(Ro, Ro, n, e))
    return q;
  if (a === Ze)
    return Nr;
  if (a === pn || l === pn)
    return q;
  if (l === Zn || a === Zn)
    return Nr;
  if ([jn, zt, zn].indexOf(l) !== -1 || a === sQ || c === Ai && uQ.indexOf(a) !== -1 || a === Ct && l === Ai || l === Mo || _e.indexOf(l) !== -1 && a === ZA || _e.indexOf(a) !== -1 && l === ZA || a === $t && [Cr, Rr, Mr].indexOf(l) !== -1 || [Cr, Rr, Mr].indexOf(a) !== -1 && l === qt || _e.indexOf(a) !== -1 && No.indexOf(l) !== -1 || No.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || // (PR | PO) × ( OP | HY )? NU
  [$t, qt].indexOf(a) !== -1 && (l === ZA || [Gt, zt].indexOf(l) !== -1 && e[o + 1] === ZA) || // ( OP | HY ) × NU
  [Gt, zt].indexOf(a) !== -1 && l === ZA || // NU ×	(NU | SY | IS)
  a === ZA && [ZA, Ct, Qt].indexOf(l) !== -1)
    return q;
  if ([ZA, Ct, Qt, Or, Vt].indexOf(l) !== -1)
    for (var u = n; u >= 0; ) {
      var B = e[u];
      if (B === ZA)
        return q;
      if ([Ct, Qt].indexOf(B) !== -1)
        u--;
      else
        break;
    }
  if ([$t, qt].indexOf(l) !== -1)
    for (var u = [Or, Vt].indexOf(a) !== -1 ? i : n; u >= 0; ) {
      var B = e[u];
      if (B === ZA)
        return q;
      if ([Ct, Qt].indexOf(B) !== -1)
        u--;
      else
        break;
    }
  if (ei === a && [ei, os, qn, $n].indexOf(l) !== -1 || [os, qn].indexOf(a) !== -1 && [os, as].indexOf(l) !== -1 || [as, $n].indexOf(a) !== -1 && l === as || Vo.indexOf(a) !== -1 && [Mo, qt].indexOf(l) !== -1 || Vo.indexOf(l) !== -1 && a === $t || _e.indexOf(a) !== -1 && _e.indexOf(l) !== -1 || a === Qt && _e.indexOf(l) !== -1 || _e.concat(ZA).indexOf(a) !== -1 && l === Gt && lQ.indexOf(A[o]) === -1 || _e.concat(ZA).indexOf(l) !== -1 && a === Vt)
    return q;
  if (a === wn && l === wn) {
    for (var Q = t[n], C = 1; Q > 0 && (Q--, e[Q] === wn); )
      C++;
    if (C % 2 !== 0)
      return q;
  }
  return a === Rr && l === Mr ? q : Nr;
}, dQ = function(A, e) {
  e || (e = { lineBreak: "normal", wordBreak: "normal" });
  var t = fQ(A, e.lineBreak), r = t[0], s = t[1], n = t[2];
  (e.wordBreak === "break-all" || e.wordBreak === "break-word") && (s = s.map(function(o) {
    return [ZA, ct, Jl].indexOf(o) !== -1 ? Cr : o;
  }));
  var i = e.wordBreak === "keep-all" ? n.map(function(o, a) {
    return o && A[a] >= 19968 && A[a] <= 40959;
  }) : void 0;
  return [r, s, i];
}, gQ = (
  /** @class */
  function() {
    function A(e, t, r, s) {
      this.codePoints = e, this.required = t === Xl, this.start = r, this.end = s;
    }
    return A.prototype.slice = function() {
      return CA.apply(void 0, this.codePoints.slice(this.start, this.end));
    }, A;
  }()
), hQ = function(A, e) {
  var t = Ps(A), r = dQ(t, e), s = r[0], n = r[1], i = r[2], o = t.length, a = 0, c = 0;
  return {
    next: function() {
      if (c >= o)
        return { done: !0, value: null };
      for (var l = q; c < o && (l = BQ(t, n, s, ++c, i)) === q; )
        ;
      if (l !== q || c === o) {
        var u = new gQ(t, l, a, c);
        return a = c, { value: u, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, pQ = 1, wQ = 2, yr = 4, Po = 8, Qs = 10, Jo = 47, lr = 92, QQ = 9, CQ = 32, Vr = 34, Pt = 61, vQ = 35, UQ = 36, FQ = 37, Gr = 39, Pr = 40, Jt = 41, bQ = 95, WA = 45, mQ = 33, yQ = 60, EQ = 62, xQ = 64, HQ = 91, IQ = 93, _Q = 61, LQ = 123, Jr = 63, SQ = 125, Xo = 124, KQ = 126, TQ = 128, Wo = 65533, Cn = 42, Bt = 43, DQ = 44, kQ = 58, OQ = 59, vr = 46, RQ = 0, MQ = 8, NQ = 11, VQ = 14, GQ = 31, PQ = 127, Qe = -1, Yl = 48, jl = 97, Zl = 101, JQ = 102, XQ = 117, WQ = 122, zl = 65, ql = 69, $l = 70, YQ = 85, jQ = 90, kA = function(A) {
  return A >= Yl && A <= 57;
}, ZQ = function(A) {
  return A >= 55296 && A <= 57343;
}, vt = function(A) {
  return kA(A) || A >= zl && A <= $l || A >= jl && A <= JQ;
}, zQ = function(A) {
  return A >= jl && A <= WQ;
}, qQ = function(A) {
  return A >= zl && A <= jQ;
}, $Q = function(A) {
  return zQ(A) || qQ(A);
}, AC = function(A) {
  return A >= TQ;
}, Xr = function(A) {
  return A === Qs || A === QQ || A === CQ;
}, Cs = function(A) {
  return $Q(A) || AC(A) || A === bQ;
}, Yo = function(A) {
  return Cs(A) || kA(A) || A === WA;
}, eC = function(A) {
  return A >= RQ && A <= MQ || A === NQ || A >= VQ && A <= GQ || A === PQ;
}, je = function(A, e) {
  return A !== lr ? !1 : e !== Qs;
}, Wr = function(A, e, t) {
  return A === WA ? Cs(e) || je(e, t) : Cs(A) ? !0 : !!(A === lr && je(A, e));
}, vn = function(A, e, t) {
  return A === Bt || A === WA ? kA(e) ? !0 : e === vr && kA(t) : kA(A === vr ? e : A);
}, tC = function(A) {
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
}, rC = {
  type: 2
  /* LEFT_PARENTHESIS_TOKEN */
}, sC = {
  type: 3
  /* RIGHT_PARENTHESIS_TOKEN */
}, nC = {
  type: 4
  /* COMMA_TOKEN */
}, iC = {
  type: 13
  /* SUFFIX_MATCH_TOKEN */
}, oC = {
  type: 8
  /* PREFIX_MATCH_TOKEN */
}, aC = {
  type: 21
  /* COLUMN_TOKEN */
}, lC = {
  type: 9
  /* DASH_MATCH_TOKEN */
}, cC = {
  type: 10
  /* INCLUDE_MATCH_TOKEN */
}, uC = {
  type: 11
  /* LEFT_CURLY_BRACKET_TOKEN */
}, fC = {
  type: 12
  /* RIGHT_CURLY_BRACKET_TOKEN */
}, BC = {
  type: 14
  /* SUBSTRING_MATCH_TOKEN */
}, Yr = {
  type: 23
  /* BAD_URL_TOKEN */
}, dC = {
  type: 1
  /* BAD_STRING_TOKEN */
}, gC = {
  type: 25
  /* CDO_TOKEN */
}, hC = {
  type: 24
  /* CDC_TOKEN */
}, pC = {
  type: 26
  /* COLON_TOKEN */
}, wC = {
  type: 27
  /* SEMICOLON_TOKEN */
}, QC = {
  type: 28
  /* LEFT_SQUARE_BRACKET_TOKEN */
}, CC = {
  type: 29
  /* RIGHT_SQUARE_BRACKET_TOKEN */
}, vC = {
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
        case vQ:
          var t = this.peekCodePoint(0), r = this.peekCodePoint(1), s = this.peekCodePoint(2);
          if (Yo(t) || je(r, s)) {
            var n = Wr(t, r, s) ? wQ : pQ, i = this.consumeName();
            return { type: 5, value: i, flags: n };
          }
          break;
        case UQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), iC;
          break;
        case Gr:
          return this.consumeStringToken(Gr);
        case Pr:
          return rC;
        case Jt:
          return sC;
        case Cn:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), BC;
          break;
        case Bt:
          if (vn(e, this.peekCodePoint(0), this.peekCodePoint(1)))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          break;
        case DQ:
          return nC;
        case WA:
          var o = e, a = this.peekCodePoint(0), c = this.peekCodePoint(1);
          if (vn(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeNumericToken();
          if (Wr(o, a, c))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          if (a === WA && c === EQ)
            return this.consumeCodePoint(), this.consumeCodePoint(), hC;
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
        case kQ:
          return pC;
        case OQ:
          return wC;
        case yQ:
          if (this.peekCodePoint(0) === mQ && this.peekCodePoint(1) === WA && this.peekCodePoint(2) === WA)
            return this.consumeCodePoint(), this.consumeCodePoint(), gC;
          break;
        case xQ:
          var u = this.peekCodePoint(0), B = this.peekCodePoint(1), Q = this.peekCodePoint(2);
          if (Wr(u, B, Q)) {
            var i = this.consumeName();
            return { type: 7, value: i };
          }
          break;
        case HQ:
          return QC;
        case lr:
          if (je(e, this.peekCodePoint(0)))
            return this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
          break;
        case IQ:
          return CC;
        case _Q:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), oC;
          break;
        case LQ:
          return uC;
        case SQ:
          return fC;
        case XQ:
        case YQ:
          var C = this.peekCodePoint(0), U = this.peekCodePoint(1);
          return C === Bt && (vt(U) || U === Jr) && (this.consumeCodePoint(), this.consumeUnicodeRangeToken()), this.reconsumeCodePoint(e), this.consumeIdentLikeToken();
        case Xo:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), lC;
          if (this.peekCodePoint(0) === Xo)
            return this.consumeCodePoint(), aC;
          break;
        case KQ:
          if (this.peekCodePoint(0) === Pt)
            return this.consumeCodePoint(), cC;
          break;
        case Qe:
          return si;
      }
      return Xr(e) ? (this.consumeWhiteSpace(), vC) : kA(e) ? (this.reconsumeCodePoint(e), this.consumeNumericToken()) : Cs(e) ? (this.reconsumeCodePoint(e), this.consumeIdentLikeToken()) : { type: 6, value: CA(e) };
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
        if (s === Vr || s === Gr || s === Pr || eC(s))
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
          return this._value.splice(0, r), dC;
        if (s === lr) {
          var n = this._value[r + 1];
          n !== Qe && n !== void 0 && (n === Qs ? (t += this.consumeStringSlice(r), r = -1, this._value.shift()) : je(s, n) && (t += this.consumeStringSlice(r), t += CA(this.consumeEscapedCodePoint()), r = -1));
        }
        r++;
      } while (!0);
    }, A.prototype.consumeNumber = function() {
      var e = [], t = yr, r = this.peekCodePoint(0);
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
      return [tC(e), t];
    }, A.prototype.consumeNumericToken = function() {
      var e = this.consumeNumber(), t = e[0], r = e[1], s = this.peekCodePoint(0), n = this.peekCodePoint(1), i = this.peekCodePoint(2);
      if (Wr(s, n, i)) {
        var o = this.consumeName();
        return { type: 15, number: t, flags: r, unit: o };
      }
      return s === FQ ? (this.consumeCodePoint(), { type: 16, number: t, flags: r }) : { type: 17, number: t, flags: r };
    }, A.prototype.consumeEscapedCodePoint = function() {
      var e = this.consumeCodePoint();
      if (vt(e)) {
        for (var t = CA(e); vt(this.peekCodePoint(0)) && t.length < 6; )
          t += CA(this.consumeCodePoint());
        Xr(this.peekCodePoint(0)) && this.consumeCodePoint();
        var r = parseInt(t, 16);
        return r === 0 || ZQ(r) || r > 1114111 ? Wo : r;
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
        if (r.type === 32 || FC(r, e))
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
}, lA = function(A) {
  return A.type === 20;
}, UC = function(A) {
  return A.type === 0;
}, ni = function(A, e) {
  return lA(A) && A.value === e;
}, tc = function(A) {
  return A.type !== 31;
}, Tt = function(A) {
  return A.type !== 31 && A.type !== 4;
}, Ee = function(A) {
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
}, FC = function(A, e) {
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
  flags: yr
}, Ti = {
  type: 16,
  number: 50,
  flags: yr
}, ze = {
  type: 16,
  number: 100,
  flags: yr
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
  var e = A.filter(lA).map(function(t) {
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
      var t = bC[e.name];
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
}, HA = function(A) {
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
  var u = c <= 0.5 ? c * (a + 1) : c + a - c * a, B = c * 2 - u, Q = Un(B, u, o + 1 / 3), C = Un(B, u, o), U = Un(B, u, o - 1 / 3);
  return qe(Q * 255, C * 255, U * 255, l);
}, bC = {
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
}, mC = {
  name: "background-clip",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (lA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, yC = {
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
      for (var u = i - c, B = s[c - 1], Q = (l - B) / (u + 1), C = 1; C <= u; C++)
        s[c + C - 1] = Q * C;
      c = null;
    }
  }
  return A.map(function(U, T) {
    var g = U.color;
    return { color: g, stop: Math.max(Math.min(1, s[T] / e), 0) };
  });
}, EC = function(A, e, t) {
  var r = e / 2, s = t / 2, n = gA(A[0], e) - r, i = s - gA(A[1], t);
  return (Math.atan2(i, n) + Math.PI * 2) % (Math.PI * 2);
}, xC = function(A, e, t) {
  var r = typeof A == "number" ? A : EC(A, e, t), s = Math.abs(e * Math.sin(r)) + Math.abs(t * Math.cos(r)), n = e / 2, i = t / 2, o = s / 2, a = Math.sin(r - Math.PI / 2) * o, c = Math.cos(r - Math.PI / 2) * o;
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
}, HC = function(A, e, t, r, s) {
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
        var o = Math.max(Math.abs(t), Math.abs(t - s)) / Math.max(Math.abs(e), Math.abs(e - r)), u = $o(r, s, e, t, !1), c = u[0], l = u[1];
        n = ae(c - e, (l - t) / o), i = o * n;
      }
      break;
  }
  return Array.isArray(A.size) && (n = gA(A.size[0], r), i = A.size.length === 2 ? gA(A.size[1], s) : n), [n, i];
}, IC = function(A, e) {
  var t = se(180), r = [];
  return Ee(e).forEach(function(s, n) {
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
  return Ee(e).forEach(function(s, n) {
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
}, _C = function(A, e) {
  var t = se(180), r = [], s = 1, n = 0, i = 3, o = [];
  return Ee(e).forEach(function(a, c) {
    var l = a[0];
    if (c === 0) {
      if (lA(l) && l.value === "linear") {
        s = 1;
        return;
      } else if (lA(l) && l.value === "radial") {
        s = 2;
        return;
      }
    }
    if (l.type === 18) {
      if (l.name === "from") {
        var u = et.parse(A, l.values[0]);
        r.push({ stop: TA, color: u });
      } else if (l.name === "to") {
        var u = et.parse(A, l.values[0]);
        r.push({ stop: ze, color: u });
      } else if (l.name === "color-stop") {
        var B = l.values.filter(Tt);
        if (B.length === 2) {
          var u = et.parse(A, B[1]), Q = B[0];
          kt(Q) && r.push({
            stop: { type: 16, number: Q.number * 100, flags: Q.flags },
            color: u
          });
        }
      }
    }
  }), s === 1 ? {
    angle: (t + se(180)) % se(360),
    stops: r,
    type: s
  } : { size: i, shape: n, stops: r, position: o, type: s };
}, cc = "closest-side", uc = "farthest-side", fc = "closest-corner", Bc = "farthest-corner", dc = "circle", gc = "ellipse", hc = "cover", pc = "contain", LC = function(A, e) {
  var t = 0, r = 3, s = [], n = [];
  return Ee(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0) {
      var c = !1;
      a = i.reduce(function(u, B) {
        if (c)
          if (lA(B))
            switch (B.value) {
              case "center":
                return n.push(Ti), u;
              case "top":
              case "left":
                return n.push(TA), u;
              case "right":
              case "bottom":
                return n.push(ze), u;
            }
          else (bA(B) || st(B)) && n.push(B);
        else if (lA(B))
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
            case uc:
              return r = 1, !1;
            case pc:
            case fc:
              return r = 2, !1;
            case Bc:
              return r = 3, !1;
          }
        else if (st(B) || bA(B))
          return Array.isArray(r) || (r = []), r.push(B), !1;
        return u;
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
  return Ee(e).forEach(function(i, o) {
    var a = !0;
    if (o === 0 ? a = i.reduce(function(l, u) {
      if (lA(u))
        switch (u.value) {
          case "center":
            return n.push(Ti), !1;
          case "top":
          case "left":
            return n.push(TA), !1;
          case "right":
          case "bottom":
            return n.push(ze), !1;
        }
      else if (bA(u) || st(u))
        return n.push(u), !1;
      return l;
    }, a) : o === 1 && (a = i.reduce(function(l, u) {
      if (lA(u))
        switch (u.value) {
          case dc:
            return t = 0, !1;
          case gc:
            return t = 1, !1;
          case pc:
          case cc:
            return r = 0, !1;
          case uc:
            return r = 1, !1;
          case fc:
            return r = 2, !1;
          case hc:
          case Bc:
            return r = 3, !1;
        }
      else if (st(u) || bA(u))
        return Array.isArray(r) || (r = []), r.push(u), !1;
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
}, SC = function(A) {
  return A.type === 1;
}, KC = function(A) {
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
function TC(A) {
  return !(A.type === 20 && A.value === "none") && (A.type !== 18 || !!wc[A.name]);
}
var wc = {
  "linear-gradient": IC,
  "-moz-linear-gradient": jr,
  "-ms-linear-gradient": jr,
  "-o-linear-gradient": jr,
  "-webkit-linear-gradient": jr,
  "radial-gradient": LC,
  "-moz-radial-gradient": Zr,
  "-ms-radial-gradient": Zr,
  "-o-radial-gradient": Zr,
  "-webkit-radial-gradient": Zr,
  "-webkit-gradient": _C
}, DC = {
  name: "background-image",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    var t = e[0];
    return t.type === 20 && t.value === "none" ? [] : e.filter(function(r) {
      return Tt(r) && TC(r);
    }).map(function(r) {
      return Di.parse(A, r);
    });
  }
}, kC = {
  name: "background-origin",
  initialValue: "border-box",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.map(function(t) {
      if (lA(t))
        switch (t.value) {
          case "padding-box":
            return 1;
          case "content-box":
            return 2;
        }
      return 0;
    });
  }
}, OC = {
  name: "background-position",
  initialValue: "0% 0%",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return Ee(e).map(function(t) {
      return t.filter(bA);
    }).map(rc);
  }
}, RC = {
  name: "background-repeat",
  initialValue: "repeat",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return Ee(e).map(function(t) {
      return t.filter(lA).map(function(r) {
        return r.value;
      }).join(" ");
    }).map(MC);
  }
}, MC = function(A) {
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
var NC = {
  name: "background-size",
  initialValue: "0",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return Ee(e).map(function(t) {
      return t.filter(VC);
    });
  }
}, VC = function(A) {
  return lA(A) || bA(A);
}, Ws = function(A) {
  return {
    name: "border-" + A + "-color",
    initialValue: "transparent",
    prefix: !1,
    type: 3,
    format: "color"
  };
}, GC = Ws("top"), PC = Ws("right"), JC = Ws("bottom"), XC = Ws("left"), Ys = function(A) {
  return {
    name: "border-radius-" + A,
    initialValue: "0 0",
    prefix: !1,
    type: 1,
    parse: function(e, t) {
      return rc(t.filter(bA));
    }
  };
}, WC = Ys("top-left"), YC = Ys("top-right"), jC = Ys("bottom-right"), ZC = Ys("bottom-left"), js = function(A) {
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
}, zC = js("top"), qC = js("right"), $C = js("bottom"), A0 = js("left"), Zs = function(A) {
  return {
    name: "border-" + A + "-width",
    initialValue: "0",
    type: 0,
    prefix: !1,
    parse: function(e, t) {
      return Er(t) ? t.number : 0;
    }
  };
}, e0 = Zs("top"), t0 = Zs("right"), r0 = Zs("bottom"), s0 = Zs("left"), n0 = {
  name: "color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, i0 = {
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
}, o0 = {
  name: "display",
  initialValue: "inline-block",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(lA).reduce(
      function(t, r) {
        return t | a0(r.value);
      },
      0
      /* NONE */
    );
  }
}, a0 = function(A) {
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
}, l0 = {
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
}, c0 = {
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
var u0 = {
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
}, f0 = {
  name: "line-height",
  initialValue: "normal",
  prefix: !1,
  type: 4
  /* TOKEN_VALUE */
}, Aa = function(A, e) {
  return lA(A) && A.value === "normal" ? 1.2 * e : A.type === 17 ? e * A.number : bA(A) ? gA(A, e) : e;
}, B0 = {
  name: "list-style-image",
  initialValue: "none",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return e.type === 20 && e.value === "none" ? null : Di.parse(A, e);
  }
}, d0 = {
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
}, g0 = zs("top"), h0 = zs("right"), p0 = zs("bottom"), w0 = zs("left"), Q0 = {
  name: "overflow",
  initialValue: "visible",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(lA).map(function(t) {
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
}, C0 = {
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
}, v0 = qs("top"), U0 = qs("right"), F0 = qs("bottom"), b0 = qs("left"), m0 = {
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
}, y0 = {
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
}, E0 = {
  name: "text-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : Ee(e).map(function(t) {
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
}, x0 = {
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
}, H0 = {
  name: "transform",
  initialValue: "none",
  prefix: !0,
  type: 0,
  parse: function(A, e) {
    if (e.type === 20 && e.value === "none")
      return null;
    if (e.type === 18) {
      var t = L0[e.name];
      if (typeof t > "u")
        throw new Error('Attempting to parse an unsupported transform function "' + e.name + '"');
      return t(e.values);
    }
    return null;
  }
}, I0 = function(A) {
  var e = A.filter(function(t) {
    return t.type === 17;
  }).map(function(t) {
    return t.number;
  });
  return e.length === 6 ? e : null;
}, _0 = function(A) {
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
}, L0 = {
  matrix: I0,
  matrix3d: _0
}, ea = {
  type: 16,
  number: 50,
  flags: yr
}, S0 = [ea, ea], K0 = {
  name: "transform-origin",
  initialValue: "50% 50%",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    var t = e.filter(bA);
    return t.length !== 2 ? S0 : [t[0], t[1]];
  }
}, T0 = {
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
}, ur;
(function(A) {
  A.NORMAL = "normal", A.BREAK_ALL = "break-all", A.KEEP_ALL = "keep-all";
})(ur || (ur = {}));
var D0 = {
  name: "word-break",
  initialValue: "normal",
  prefix: !1,
  type: 2,
  parse: function(A, e) {
    switch (e) {
      case "break-all":
        return ur.BREAK_ALL;
      case "keep-all":
        return ur.KEEP_ALL;
      case "normal":
      default:
        return ur.NORMAL;
    }
  }
}, k0 = {
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
}, O0 = {
  name: "opacity",
  initialValue: "1",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return kt(e) ? e.number : 1;
  }
}, R0 = {
  name: "text-decoration-color",
  initialValue: "transparent",
  prefix: !1,
  type: 3,
  format: "color"
}, M0 = {
  name: "text-decoration-line",
  initialValue: "none",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(lA).map(function(t) {
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
}, N0 = {
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
}, V0 = {
  name: "font-size",
  initialValue: "0",
  prefix: !1,
  type: 3,
  format: "length"
}, G0 = {
  name: "font-weight",
  initialValue: "normal",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    if (kt(e))
      return e.number;
    if (lA(e))
      switch (e.value) {
        case "bold":
          return 700;
        case "normal":
        default:
          return 400;
      }
    return 400;
  }
}, P0 = {
  name: "font-variant",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.filter(lA).map(function(t) {
      return t.value;
    });
  }
}, J0 = {
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
}, X0 = {
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
}, W0 = {
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
}, Y0 = {
  name: "counter-reset",
  initialValue: "none",
  prefix: !0,
  type: 1,
  parse: function(A, e) {
    if (e.length === 0)
      return [];
    for (var t = [], r = e.filter(tc), s = 0; s < r.length; s++) {
      var n = r[s], i = r[s + 1];
      if (lA(n) && n.value !== "none") {
        var o = i && kt(i) ? i.number : 0;
        t.push({ counter: n.value, reset: o });
      }
    }
    return t;
  }
}, j0 = {
  name: "duration",
  initialValue: "0s",
  prefix: !1,
  type: 1,
  parse: function(A, e) {
    return e.filter(Er).map(function(t) {
      return Qc.parse(A, t);
    });
  }
}, Z0 = {
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
    var r = [], s = e.filter(UC);
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
}, z0 = {
  name: "box-shadow",
  initialValue: "none",
  type: 1,
  prefix: !1,
  parse: function(A, e) {
    return e.length === 1 && ni(e[0], "none") ? [] : Ee(e).map(function(t) {
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
}, q0 = {
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
    return e.filter(lA).forEach(function(s) {
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
}, $0 = {
  name: "-webkit-text-stroke-color",
  initialValue: "currentcolor",
  prefix: !1,
  type: 3,
  format: "color"
}, Av = {
  name: "-webkit-text-stroke-width",
  initialValue: "0",
  type: 0,
  prefix: !1,
  parse: function(A, e) {
    return Er(e) ? e.number : 0;
  }
}, ev = (
  /** @class */
  function() {
    function A(e, t) {
      var r, s;
      this.animationDuration = R(e, j0, t.animationDuration), this.backgroundClip = R(e, mC, t.backgroundClip), this.backgroundColor = R(e, yC, t.backgroundColor), this.backgroundImage = R(e, DC, t.backgroundImage), this.backgroundOrigin = R(e, kC, t.backgroundOrigin), this.backgroundPosition = R(e, OC, t.backgroundPosition), this.backgroundRepeat = R(e, RC, t.backgroundRepeat), this.backgroundSize = R(e, NC, t.backgroundSize), this.borderTopColor = R(e, GC, t.borderTopColor), this.borderRightColor = R(e, PC, t.borderRightColor), this.borderBottomColor = R(e, JC, t.borderBottomColor), this.borderLeftColor = R(e, XC, t.borderLeftColor), this.borderTopLeftRadius = R(e, WC, t.borderTopLeftRadius), this.borderTopRightRadius = R(e, YC, t.borderTopRightRadius), this.borderBottomRightRadius = R(e, jC, t.borderBottomRightRadius), this.borderBottomLeftRadius = R(e, ZC, t.borderBottomLeftRadius), this.borderTopStyle = R(e, zC, t.borderTopStyle), this.borderRightStyle = R(e, qC, t.borderRightStyle), this.borderBottomStyle = R(e, $C, t.borderBottomStyle), this.borderLeftStyle = R(e, A0, t.borderLeftStyle), this.borderTopWidth = R(e, e0, t.borderTopWidth), this.borderRightWidth = R(e, t0, t.borderRightWidth), this.borderBottomWidth = R(e, r0, t.borderBottomWidth), this.borderLeftWidth = R(e, s0, t.borderLeftWidth), this.boxShadow = R(e, z0, t.boxShadow), this.color = R(e, n0, t.color), this.direction = R(e, i0, t.direction), this.display = R(e, o0, t.display), this.float = R(e, l0, t.cssFloat), this.fontFamily = R(e, N0, t.fontFamily), this.fontSize = R(e, V0, t.fontSize), this.fontStyle = R(e, J0, t.fontStyle), this.fontVariant = R(e, P0, t.fontVariant), this.fontWeight = R(e, G0, t.fontWeight), this.letterSpacing = R(e, c0, t.letterSpacing), this.lineBreak = R(e, u0, t.lineBreak), this.lineHeight = R(e, f0, t.lineHeight), this.listStyleImage = R(e, B0, t.listStyleImage), this.listStylePosition = R(e, d0, t.listStylePosition), this.listStyleType = R(e, ii, t.listStyleType), this.marginTop = R(e, g0, t.marginTop), this.marginRight = R(e, h0, t.marginRight), this.marginBottom = R(e, p0, t.marginBottom), this.marginLeft = R(e, w0, t.marginLeft), this.opacity = R(e, O0, t.opacity);
      var n = R(e, Q0, t.overflow);
      this.overflowX = n[0], this.overflowY = n[n.length > 1 ? 1 : 0], this.overflowWrap = R(e, C0, t.overflowWrap), this.paddingTop = R(e, v0, t.paddingTop), this.paddingRight = R(e, U0, t.paddingRight), this.paddingBottom = R(e, F0, t.paddingBottom), this.paddingLeft = R(e, b0, t.paddingLeft), this.paintOrder = R(e, q0, t.paintOrder), this.position = R(e, y0, t.position), this.textAlign = R(e, m0, t.textAlign), this.textDecorationColor = R(e, R0, (r = t.textDecorationColor) !== null && r !== void 0 ? r : t.color), this.textDecorationLine = R(e, M0, (s = t.textDecorationLine) !== null && s !== void 0 ? s : t.textDecoration), this.textShadow = R(e, E0, t.textShadow), this.textTransform = R(e, x0, t.textTransform), this.transform = R(e, H0, t.transform), this.transformOrigin = R(e, K0, t.transformOrigin), this.visibility = R(e, T0, t.visibility), this.webkitTextStrokeColor = R(e, $0, t.webkitTextStrokeColor), this.webkitTextStrokeWidth = R(e, Av, t.webkitTextStrokeWidth), this.wordBreak = R(e, D0, t.wordBreak), this.zIndex = R(e, k0, t.zIndex);
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
), tv = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.content = R(e, X0, t.content), this.quotes = R(e, Z0, t.quotes);
    }
    return A;
  }()
), ra = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.counterIncrement = R(e, W0, t.counterIncrement), this.counterReset = R(e, Y0, t.counterReset);
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
      return e.parse(A, lA(i) ? i.value : e.initialValue);
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
}, rv = "data-html2canvas-debug", sv = function(A) {
  var e = A.getAttribute(rv);
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
  var t = sv(A);
  return t === 1 || e === t;
}, xe = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      if (this.context = e, this.textNodes = [], this.elements = [], this.flags = 0, oi(
        t,
        3
        /* PARSE */
      ))
        debugger;
      this.styles = new ev(e, window.getComputedStyle(t, null)), ci(t) && (this.styles.animationDuration.some(function(r) {
        return r > 0;
      }) && (t.style.animationDuration = "0s"), this.styles.transform !== null && (t.style.transform = "none")), this.bounds = Gs(this.context, t), oi(
        t,
        4
        /* RENDER */
      ) && (this.flags |= 16);
    }
    return A;
  }()
), nv = "AAAAAAAAAAAAEA4AGBkAAFAaAAACAAAAAAAIABAAGAAwADgACAAQAAgAEAAIABAACAAQAAgAEAAIABAACAAQAAgAEAAIABAAQABIAEQATAAIABAACAAQAAgAEAAIABAAVABcAAgAEAAIABAACAAQAGAAaABwAHgAgACIAI4AlgAIABAAmwCjAKgAsAC2AL4AvQDFAMoA0gBPAVYBWgEIAAgACACMANoAYgFkAWwBdAF8AX0BhQGNAZUBlgGeAaMBlQGWAasBswF8AbsBwwF0AcsBYwHTAQgA2wG/AOMBdAF8AekB8QF0AfkB+wHiAHQBfAEIAAMC5gQIAAsCEgIIAAgAFgIeAggAIgIpAggAMQI5AkACygEIAAgASAJQAlgCYAIIAAgACAAKBQoFCgUTBRMFGQUrBSsFCAAIAAgACAAIAAgACAAIAAgACABdAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABoAmgCrwGvAQgAbgJ2AggAHgEIAAgACADnAXsCCAAIAAgAgwIIAAgACAAIAAgACACKAggAkQKZAggAPADJAAgAoQKkAqwCsgK6AsICCADJAggA0AIIAAgACAAIANYC3gIIAAgACAAIAAgACABAAOYCCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAkASoB+QIEAAgACAA8AEMCCABCBQgACABJBVAFCAAIAAgACAAIAAgACAAIAAgACABTBVoFCAAIAFoFCABfBWUFCAAIAAgACAAIAAgAbQUIAAgACAAIAAgACABzBXsFfQWFBYoFigWKBZEFigWKBYoFmAWfBaYFrgWxBbkFCAAIAAgACAAIAAgACAAIAAgACAAIAMEFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAMgFCADQBQgACAAIAAgACAAIAAgACAAIAAgACAAIAO4CCAAIAAgAiQAIAAgACABAAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAD0AggACAD8AggACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIANYFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAMDvwAIAAgAJAIIAAgACAAIAAgACAAIAAgACwMTAwgACAB9BOsEGwMjAwgAKwMyAwsFYgE3A/MEPwMIAEUDTQNRAwgAWQOsAGEDCAAIAAgACAAIAAgACABpAzQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFOgU0BTUFNgU3BTgFOQU6BTQFNQU2BTcFOAU5BToFNAU1BTYFNwU4BTkFIQUoBSwFCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABtAwgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABMAEwACAAIAAgACAAIABgACAAIAAgACAC/AAgACAAyAQgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACAAIAAwAAgACAAIAAgACAAIAAgACAAIAAAARABIAAgACAAIABQASAAIAAgAIABwAEAAjgCIABsAqAC2AL0AigDQAtwC+IJIQqVAZUBWQqVAZUBlQGVAZUBlQGrC5UBlQGVAZUBlQGVAZUBlQGVAXsKlQGVAbAK6wsrDGUMpQzlDJUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAZUBlQGVAfAKAAuZA64AtwCJALoC6ADwAAgAuACgA/oEpgO6AqsD+AAIAAgAswMIAAgACAAIAIkAuwP5AfsBwwPLAwgACAAIAAgACADRA9kDCAAIAOED6QMIAAgACAAIAAgACADuA/YDCAAIAP4DyQAIAAgABgQIAAgAXQAOBAgACAAIAAgACAAIABMECAAIAAgACAAIAAgACAD8AAQBCAAIAAgAGgQiBCoECAExBAgAEAEIAAgACAAIAAgACAAIAAgACAAIAAgACAA4BAgACABABEYECAAIAAgATAQYAQgAVAQIAAgACAAIAAgACAAIAAgACAAIAFoECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAOQEIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAB+BAcACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAEABhgSMBAgACAAIAAgAlAQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAwAEAAQABAADAAMAAwADAAQABAAEAAQABAAEAAQABHATAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAdQMIAAgACAAIAAgACAAIAMkACAAIAAgAfQMIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACACFA4kDCAAIAAgACAAIAOcBCAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAIcDCAAIAAgACAAIAAgACAAIAAgACAAIAJEDCAAIAAgACADFAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABgBAgAZgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAbAQCBXIECAAIAHkECAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACABAAJwEQACjBKoEsgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAC6BMIECAAIAAgACAAIAAgACABmBAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAxwQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAGYECAAIAAgAzgQIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBd0FXwUIAOIF6gXxBYoF3gT5BQAGCAaKBYoFigWKBYoFigWKBYoFigWKBYoFigXWBIoFigWKBYoFigWKBYoFigWKBYsFEAaKBYoFigWKBYoFigWKBRQGCACKBYoFigWKBQgACAAIANEECAAIABgGigUgBggAJgYIAC4GMwaKBYoF0wQ3Bj4GigWKBYoFigWKBYoFigWKBYoFigWKBYoFigUIAAgACAAIAAgACAAIAAgAigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWKBYoFigWLBf///////wQABAAEAAQABAAEAAQABAAEAAQAAwAEAAQAAgAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAQADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUAAAAFAAUAAAAFAAUAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUAAQAAAAUABQAFAAUABQAFAAAAAAAFAAUAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAFAAUAAQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAAABwAHAAcAAAAHAAcABwAFAAEAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAcABwAFAAUAAAAAAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAAAAQABAAAAAAAAAAAAAAAFAAUABQAFAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAHAAcAAAAHAAcAAAAAAAUABQAHAAUAAQAHAAEABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwABAAUABQAFAAUAAAAAAAAAAAAAAAEAAQABAAEAAQABAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABQANAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAEAAQABAAEAAQABAAEAAQABAAEAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAABQAHAAUABQAFAAAAAAAAAAcABQAFAAUABQAFAAQABAAEAAQABAAEAAQABAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAEAAQABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUAAAAFAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAUAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAcABwAFAAcABwAAAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUABwAHAAUABQAFAAUAAAAAAAcABwAAAAAABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAABQAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAAAAAAAAAAABQAFAAAAAAAFAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAFAAUABQAFAAUAAAAFAAUABwAAAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABwAFAAUABQAFAAAAAAAHAAcAAAAAAAcABwAFAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAAAAAAAAAHAAcABwAAAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAABQAHAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAUABQAFAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAHAAcABQAHAAcAAAAFAAcABwAAAAcABwAFAAUAAAAAAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAFAAcABwAFAAUABQAAAAUAAAAHAAcABwAHAAcABwAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAHAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAABwAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAUAAAAFAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABwAFAAUABQAFAAUAAAAFAAUAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABwAFAAUABQAFAAUABQAAAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABQAFAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABQAFAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAHAAUABQAFAAUABQAFAAUABwAHAAcABwAHAAcABwAHAAUABwAHAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABwAHAAcABwAFAAUABwAHAAcAAAAAAAAAAAAHAAcABQAHAAcABwAHAAcABwAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAcABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAUABQAFAAUABQAFAAUAAAAFAAAABQAAAAAABQAFAAUABQAFAAUABQAFAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAFAAUAAAAAAAUABQAFAAUABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABwAFAAcABwAHAAcABwAFAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAUABQAFAAUABwAHAAUABQAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABQAFAAcABwAHAAUABwAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAcABQAFAAUABQAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAAAAAABwAFAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAAAAAAAAAFAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAUABQAHAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAUABQAFAAUABQAHAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAcABwAFAAUABQAFAAcABwAFAAUABwAHAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAFAAcABwAFAAUABwAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAFAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAFAAUABQAAAAAABQAFAAAAAAAAAAAAAAAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAcABwAAAAAAAAAAAAAABwAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAcABwAFAAcABwAAAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAFAAUABQAAAAUABQAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABwAFAAUABQAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAUABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAHAAcABQAHAAUABQAAAAAAAAAAAAAAAAAFAAAABwAHAAcABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAHAAcABwAAAAAABwAHAAAAAAAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABwAHAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAFAAUABwAFAAcABwAFAAcABQAFAAcABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAHAAcABQAFAAUABQAAAAAABwAHAAcABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAHAAUABQAFAAUABQAFAAUABQAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABwAFAAcABwAFAAUABQAFAAUABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAcABwAFAAUABQAFAAcABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAUABQAFAAUABQAHAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAFAAUABQAFAAAAAAAFAAUABwAHAAcABwAFAAAAAAAAAAcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABwAHAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAcABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUAAAAHAAUABQAFAAUABQAFAAUABwAFAAUABwAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUAAAAAAAAABQAAAAUABQAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAHAAcABwAHAAcAAAAFAAUAAAAHAAcABQAHAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAAAAUABQAFAAAAAAAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAFAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAFAAUABQAAAAAABQAFAAUABQAFAAUABQAAAAUABQAAAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFAAUABQAFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABQAFAAUABQAFAAUABQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAFAAUABQAFAAUADgAOAA4ADgAOAA4ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAA8ADwAPAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAcABwAHAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAgACAAIAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAMAAwADAAMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkACQAJAAkAAAAAAAAAAAAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAKAAoACgAAAAAAAAAAAAsADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwACwAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAMAAwADAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAADgAOAA4AAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAAAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4AAAAOAAAAAAAAAAAAAAAAAA4AAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAAAAAAAAAAAA4AAAAOAAAAAAAAAAAADgAOAA4AAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAA4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4AAAAAAA4ADgAOAA4ADgAOAA4ADgAOAAAADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4ADgAOAAAAAAAAAAAAAAAAAAAAAAAAAAAADgAOAA4ADgAOAA4AAAAAAAAAAAAAAAAAAAAAAA4ADgAOAA4ADgAOAA4ADgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAOAA4ADgAOAA4ADgAAAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4ADgAOAA4AAAAAAAAAAAA=", sa = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", er = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var zr = 0; zr < sa.length; zr++)
  er[sa.charCodeAt(zr)] = zr;
var iv = function(A) {
  var e = A.length * 0.75, t = A.length, r, s = 0, n, i, o, a;
  A[A.length - 1] === "=" && (e--, A[A.length - 2] === "=" && e--);
  var c = typeof ArrayBuffer < "u" && typeof Uint8Array < "u" && typeof Uint8Array.prototype.slice < "u" ? new ArrayBuffer(e) : new Array(e), l = Array.isArray(c) ? c : new Uint8Array(c);
  for (r = 0; r < t; r += 4)
    n = er[A.charCodeAt(r)], i = er[A.charCodeAt(r + 1)], o = er[A.charCodeAt(r + 2)], a = er[A.charCodeAt(r + 3)], l[s++] = n << 2 | i >> 4, l[s++] = (i & 15) << 4 | o >> 2, l[s++] = (o & 3) << 6 | a & 63;
  return c;
}, ov = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 2)
    t.push(A[r + 1] << 8 | A[r]);
  return t;
}, av = function(A) {
  for (var e = A.length, t = [], r = 0; r < e; r += 4)
    t.push(A[r + 3] << 24 | A[r + 2] << 16 | A[r + 1] << 8 | A[r]);
  return t;
}, pt = 5, ki = 11, Fn = 2, lv = ki - pt, Cc = 65536 >> pt, cv = 1 << pt, bn = cv - 1, uv = 1024 >> pt, fv = Cc + uv, Bv = fv, dv = 32, gv = Bv + dv, hv = 65536 >> ki, pv = 1 << lv, wv = pv - 1, na = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint16Array(Array.prototype.slice.call(A, e, t));
}, Qv = function(A, e, t) {
  return A.slice ? A.slice(e, t) : new Uint32Array(Array.prototype.slice.call(A, e, t));
}, Cv = function(A, e) {
  var t = iv(A), r = Array.isArray(t) ? av(t) : new Uint32Array(t), s = Array.isArray(t) ? ov(t) : new Uint16Array(t), n = 24, i = na(s, n / 2, r[4] / 2), o = r[5] === 2 ? na(s, (n + r[4]) / 2) : Qv(r, Math.ceil((n + r[4]) / 4));
  return new vv(r[0], r[1], r[2], r[3], i, o);
}, vv = (
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
          return t = gv - hv + (e >> ki), t = this.index[t], t += e >> pt & wv, t = this.index[t], t = (t << Fn) + (e & bn), this.data[t];
        if (e <= 1114111)
          return this.data[this.highValueIndex];
      }
      return this.errorValue;
    }, A;
  }()
), ia = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Uv = typeof Uint8Array > "u" ? [] : new Uint8Array(256);
for (var qr = 0; qr < ia.length; qr++)
  Uv[ia.charCodeAt(qr)] = qr;
var Fv = 1, mn = 2, yn = 3, oa = 4, aa = 5, bv = 7, la = 8, En = 9, xn = 10, ca = 11, ua = 12, fa = 13, Ba = 14, Hn = 15, mv = function(A) {
  for (var e = [], t = 0, r = A.length; t < r; ) {
    var s = A.charCodeAt(t++);
    if (s >= 55296 && s <= 56319 && t < r) {
      var n = A.charCodeAt(t++);
      (n & 64512) === 56320 ? e.push(((s & 1023) << 10) + (n & 1023) + 65536) : (e.push(s), t--);
    } else
      e.push(s);
  }
  return e;
}, yv = function() {
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
}, Ev = Cv(nv), te = "×", In = "÷", xv = function(A) {
  return Ev.get(A);
}, Hv = function(A, e, t) {
  var r = t - 2, s = e[r], n = e[t - 1], i = e[t];
  if (n === mn && i === yn)
    return te;
  if (n === mn || n === yn || n === oa || i === mn || i === yn || i === oa)
    return In;
  if (n === la && [la, En, ca, ua].indexOf(i) !== -1 || (n === ca || n === En) && (i === En || i === xn) || (n === ua || n === xn) && i === xn || i === fa || i === aa || i === bv || n === Fv)
    return te;
  if (n === fa && i === Ba) {
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
}, Iv = function(A) {
  var e = mv(A), t = e.length, r = 0, s = 0, n = e.map(xv);
  return {
    next: function() {
      if (r >= t)
        return { done: !0, value: null };
      for (var i = te; r < t && (i = Hv(e, n, ++r)) === te; )
        ;
      if (i !== te || r === t) {
        var o = yv.apply(null, e.slice(s, r));
        return s = r, { value: o, done: !1 };
      }
      return { done: !0, value: null };
    }
  };
}, _v = function(A) {
  for (var e = Iv(A), t = [], r; !(r = e.next()).done; )
    r.value && t.push(r.value.slice());
  return t;
}, Lv = function(A) {
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
}, Sv = function(A) {
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
    var u = l.x > i.x || l.y > i.y;
    return i = l, c === 0 ? !0 : u;
  });
  return A.body.removeChild(e), o;
}, Kv = function() {
  return typeof new Image().crossOrigin < "u";
}, Tv = function() {
  return typeof new XMLHttpRequest().responseType == "string";
}, Dv = function(A) {
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
}, kv = function(A) {
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
    var A = Lv(document);
    return Object.defineProperty(KA, "SUPPORT_RANGE_BOUNDS", { value: A }), A;
  },
  get SUPPORT_WORD_BREAKING() {
    var A = KA.SUPPORT_RANGE_BOUNDS && Sv(document);
    return Object.defineProperty(KA, "SUPPORT_WORD_BREAKING", { value: A }), A;
  },
  get SUPPORT_SVG_DRAWING() {
    var A = Dv(document);
    return Object.defineProperty(KA, "SUPPORT_SVG_DRAWING", { value: A }), A;
  },
  get SUPPORT_FOREIGNOBJECT_DRAWING() {
    var A = typeof Array.from == "function" && typeof window.fetch == "function" ? kv(document) : Promise.resolve(!1);
    return Object.defineProperty(KA, "SUPPORT_FOREIGNOBJECT_DRAWING", { value: A }), A;
  },
  get SUPPORT_CORS_IMAGES() {
    var A = Kv();
    return Object.defineProperty(KA, "SUPPORT_CORS_IMAGES", { value: A }), A;
  },
  get SUPPORT_RESPONSE_TYPE() {
    var A = Tv();
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
}, fr = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t) {
      this.text = e, this.bounds = t;
    }
    return A;
  }()
), Ov = function(A, e, t, r) {
  var s = Nv(e, t), n = [], i = 0;
  return s.forEach(function(o) {
    if (t.textDecorationLine.length || o.trim().length > 0)
      if (KA.SUPPORT_RANGE_BOUNDS) {
        var a = ha(r, i, o.length).getClientRects();
        if (a.length > 1) {
          var c = Oi(o), l = 0;
          c.forEach(function(B) {
            n.push(new fr(B, Ge.fromDOMRectList(A, ha(r, l + i, B.length).getClientRects()))), l += B.length;
          });
        } else
          n.push(new fr(o, Ge.fromDOMRectList(A, a)));
      } else {
        var u = r.splitText(o.length);
        n.push(new fr(o, Rv(A, r))), r = u;
      }
    else KA.SUPPORT_RANGE_BOUNDS || (r = r.splitText(o.length));
    i += o.length;
  }), n;
}, Rv = function(A, e) {
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
  return _v(A);
}, Mv = function(A, e) {
  if (KA.SUPPORT_NATIVE_TEXT_SEGMENTATION) {
    var t = new Intl.Segmenter(void 0, {
      granularity: "word"
    });
    return Array.from(t.segment(A)).map(function(r) {
      return r.segment;
    });
  }
  return Gv(A, e);
}, Nv = function(A, e) {
  return e.letterSpacing !== 0 ? Oi(A) : Mv(A, e);
}, Vv = [32, 160, 4961, 65792, 65793, 4153, 4241], Gv = function(A, e) {
  for (var t = hQ(A, {
    lineBreak: e.lineBreak,
    wordBreak: e.overflowWrap === "break-word" ? "break-word" : e.wordBreak
  }), r = [], s, n = function() {
    if (s.value) {
      var i = s.value.slice(), o = Ps(i), a = "";
      o.forEach(function(c) {
        Vv.indexOf(c) === -1 ? a += CA(c) : (a.length && r.push(a), r.push(CA(c)), a = "");
      }), a.length && r.push(a);
    }
  }; !(s = t.next()).done; )
    n();
  return r;
}, Pv = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e, t, r) {
      this.text = Jv(t.data, r.textTransform), this.textBounds = Ov(e, this.text, r, t);
    }
    return A;
  }()
), Jv = function(A, e) {
  switch (e) {
    case 1:
      return A.toLowerCase();
    case 3:
      return A.replace(Xv, Wv);
    case 2:
      return A.toUpperCase();
    default:
      return A;
  }
}, Xv = /(^|\s|:|-|\(|\))([a-z])/g, Wv = function(A, e, t) {
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
  }(xe)
), Uc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.canvas = r, s.intrinsicWidth = r.width, s.intrinsicHeight = r.height, s;
    }
    return e;
  }(xe)
), Fc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = new XMLSerializer(), i = Gs(t, r);
      return r.setAttribute("width", i.width + "px"), r.setAttribute("height", i.height + "px"), s.svg = "data:image/svg+xml," + encodeURIComponent(n.serializeToString(r)), s.intrinsicWidth = r.width.baseVal.value, s.intrinsicHeight = r.height.baseVal.value, s.context.cache.addImage(s.svg), s;
    }
    return e;
  }(xe)
), bc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(xe)
), li = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.start = r.start, s.reversed = typeof r.reversed == "boolean" && r.reversed === !0, s;
    }
    return e;
  }(xe)
), Yv = [
  {
    type: 15,
    flags: 0,
    unit: "px",
    number: 3
  }
], jv = [
  {
    type: 16,
    flags: 0,
    number: 50
  }
], Zv = function(A) {
  return A.width > A.height ? new Ge(A.left + (A.width - A.height) / 2, A.top, A.height, A.height) : A.width < A.height ? new Ge(A.left, A.top + (A.height - A.width) / 2, A.width, A.width) : A;
}, zv = function(A) {
  var e = A.type === qv ? new Array(A.value.length + 1).join("•") : A.value;
  return e.length === 0 ? A.placeholder || "" : e;
}, Us = "checkbox", Fs = "radio", qv = "password", pa = 707406591, Ri = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      switch (s.type = r.type.toLowerCase(), s.checked = r.checked, s.value = zv(r), (s.type === Us || s.type === Fs) && (s.styles.backgroundColor = 3739148031, s.styles.borderTopColor = s.styles.borderRightColor = s.styles.borderBottomColor = s.styles.borderLeftColor = 2779096575, s.styles.borderTopWidth = s.styles.borderRightWidth = s.styles.borderBottomWidth = s.styles.borderLeftWidth = 1, s.styles.borderTopStyle = s.styles.borderRightStyle = s.styles.borderBottomStyle = s.styles.borderLeftStyle = 1, s.styles.backgroundClip = [
        0
        /* BORDER_BOX */
      ], s.styles.backgroundOrigin = [
        0
        /* BORDER_BOX */
      ], s.bounds = Zv(s.bounds)), s.type) {
        case Us:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = Yv;
          break;
        case Fs:
          s.styles.borderTopRightRadius = s.styles.borderTopLeftRadius = s.styles.borderBottomRightRadius = s.styles.borderBottomLeftRadius = jv;
          break;
      }
      return s;
    }
    return e;
  }(xe)
), mc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this, n = r.options[r.selectedIndex || 0];
      return s.value = n && n.text || "", s;
    }
    return e;
  }(xe)
), yc = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s.value = r.value, s;
    }
    return e;
  }(xe)
), Ec = (
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
  }(xe)
), $v = ["OL", "UL", "MENU"], ls = function(A, e, t, r) {
  for (var s = e.firstChild, n = void 0; s; s = n)
    if (n = s.nextSibling, Ic(s) && s.data.trim().length > 0)
      t.textNodes.push(new Pv(A, s, t.styles));
    else if (Ht(s))
      if (Kc(s) && s.assignedNodes)
        s.assignedNodes().forEach(function(o) {
          return ls(A, o, t, r);
        });
      else {
        var i = xc(A, s);
        i.styles.isVisible() && (AU(s, i, r) ? i.flags |= 4 : eU(i.styles) && (i.flags |= 2), $v.indexOf(s.tagName) !== -1 && (i.flags |= 8), t.elements.push(i), s.slot, s.shadowRoot ? ls(A, s.shadowRoot, i, r) : !bs(s) && !_c(s) && !ms(s) && ls(A, s, i, r));
      }
}, xc = function(A, e) {
  return ui(e) ? new vc(A, e) : Lc(e) ? new Uc(A, e) : _c(e) ? new Fc(A, e) : tU(e) ? new bc(A, e) : rU(e) ? new li(A, e) : sU(e) ? new Ri(A, e) : ms(e) ? new mc(A, e) : bs(e) ? new yc(A, e) : Sc(e) ? new Ec(A, e) : new xe(A, e);
}, Hc = function(A, e) {
  var t = xc(A, e);
  return t.flags |= 4, ls(A, e, t, t), t;
}, AU = function(A, e, t) {
  return e.styles.isPositionedWithZIndex() || e.styles.opacity < 1 || e.styles.isTransformed() || Mi(A) && t.styles.isTransparent();
}, eU = function(A) {
  return A.isPositioned() || A.isFloating();
}, Ic = function(A) {
  return A.nodeType === Node.TEXT_NODE;
}, Ht = function(A) {
  return A.nodeType === Node.ELEMENT_NODE;
}, ci = function(A) {
  return Ht(A) && typeof A.style < "u" && !cs(A);
}, cs = function(A) {
  return typeof A.className == "object";
}, tU = function(A) {
  return A.tagName === "LI";
}, rU = function(A) {
  return A.tagName === "OL";
}, sU = function(A) {
  return A.tagName === "INPUT";
}, nU = function(A) {
  return A.tagName === "HTML";
}, _c = function(A) {
  return A.tagName === "svg";
}, Mi = function(A) {
  return A.tagName === "BODY";
}, Lc = function(A) {
  return A.tagName === "CANVAS";
}, wa = function(A) {
  return A.tagName === "VIDEO";
}, ui = function(A) {
  return A.tagName === "IMG";
}, Sc = function(A) {
  return A.tagName === "IFRAME";
}, Qa = function(A) {
  return A.tagName === "STYLE";
}, iU = function(A) {
  return A.tagName === "SCRIPT";
}, bs = function(A) {
  return A.tagName === "TEXTAREA";
}, ms = function(A) {
  return A.tagName === "SELECT";
}, Kc = function(A) {
  return A.tagName === "SLOT";
}, Ca = function(A) {
  return A.tagName.indexOf("-") > 0;
}, oU = (
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
}, aU = {
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
}, lU = {
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
}, Et = 1, Xe = 2, We = 4, tr = 8, Le = function(A, e, t, r, s, n) {
  if (A < -9999 || A > 9999)
    return Ur(A, 4, s.length > 0);
  var i = Math.abs(A), o = s;
  if (i === 0)
    return e[0] + o;
  for (var a = 0; i > 0 && a <= 4; a++) {
    var c = i % 10;
    c === 0 && yA(n, Et) && o !== "" ? o = e[c] + o : c > 1 || c === 1 && a === 0 || c === 1 && a === 1 && yA(n, Xe) || c === 1 && a === 1 && yA(n, We) && A > 100 || c === 1 && a > 1 && yA(n, tr) ? o = e[c] + (a > 0 ? t[a - 1] : "") + o : c === 1 && a > 0 && (o = t[a - 1] + o), i = Math.floor(i / 10);
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
      return Le(A, "零壹貳參肆伍陸柒捌玖", ba, "負", s, Et | Xe | We | tr);
    case 42:
      return Le(A, "零一二三四五六七八九", Fa, "负", s, Xe | We | tr);
    case 41:
      return Le(A, "零壹贰叁肆伍陆柒捌玖", ba, "负", s, Et | Xe | We | tr);
    case 26:
      return Le(A, "〇一二三四五六七八九", "十百千万", ma, s, 0);
    case 25:
      return Le(A, "零壱弐参四伍六七八九", "拾百千万", ma, s, Et | Xe | We);
    case 31:
      return Le(A, "영일이삼사오육칠팔구", "십백천만", _n, n, Et | Xe | We);
    case 33:
      return Le(A, "零一二三四五六七八九", "十百千萬", _n, n, 0);
    case 32:
      return Le(A, "零壹貳參四五六七八九", "拾百千", _n, n, Et | Xe | We);
    case 18:
      return QA(A, 2406, 2415, !0, r);
    case 20:
      return Ut(A, 1, 19999, lU, 3, r);
    case 21:
      return QA(A, 2790, 2799, !0, r);
    case 22:
      return QA(A, 2662, 2671, !0, r);
    case 22:
      return Ut(A, 1, 10999, aU, 3, r);
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
      if (this.context = e, this.options = r, this.scrolledElements = [], this.referenceElement = t, this.counters = new oU(), this.quoteDepth = 0, !t.ownerDocument)
        throw new Error("Cloned element does not have an owner document");
      this.documentElement = this.cloneNode(t.ownerDocument.documentElement, !1);
    }
    return A.prototype.toIFrame = function(e, t) {
      var r = this, s = cU(e, t);
      if (!s.contentWindow)
        return Promise.reject("Unable to find iframe window");
      var n = e.defaultView.pageXOffset, i = e.defaultView.pageYOffset, o = s.contentWindow, a = o.document, c = BU(s).then(function() {
        return VA(r, void 0, void 0, function() {
          var l, u;
          return DA(this, function(B) {
            switch (B.label) {
              case 0:
                return this.scrolledElements.forEach(pU), o && (o.scrollTo(t.left, t.top), /(iPad|iPhone|iPod)/g.test(navigator.userAgent) && (o.scrollY !== t.top || o.scrollX !== t.left) && (this.context.logger.warn("Unable to restore scroll position for cloned document"), this.context.windowBounds = this.context.windowBounds.add(o.scrollX - t.left, o.scrollY - t.top, 0, 0))), l = this.options.onclone, u = this.clonedReferenceElement, typeof u > "u" ? [2, Promise.reject("Error finding the " + this.referenceElement.nodeName + " in the cloned document")] : a.fonts && a.fonts.ready ? [4, a.fonts.ready] : [3, 2];
              case 1:
                B.sent(), B.label = 2;
              case 2:
                return /(AppleWebKit)/g.test(navigator.userAgent) ? [4, fU(a)] : [3, 4];
              case 3:
                B.sent(), B.label = 4;
              case 4:
                return typeof l == "function" ? [2, Promise.resolve().then(function() {
                  return l(a, u);
                }).then(function() {
                  return s;
                })] : [2, s];
            }
          });
        });
      });
      return a.open(), a.write(gU(document.doctype) + "<html></html>"), hU(this.referenceElement.ownerDocument, n, i), a.replaceChild(a.adoptNode(this.documentElement), a.documentElement), a.close(), c;
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
      return ui(t) && (ui(e) && e.currentSrc && e.currentSrc !== e.src && (t.src = e.currentSrc, t.srcset = ""), t.loading === "lazy" && (t.loading = "eager")), Ca(t) ? this.createCustomElementClone(t) : t;
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
      (!Ht(t) || !iU(t) && !t.hasAttribute(Dc) && (typeof this.options.ignoreElements != "function" || !this.options.ignoreElements(t))) && (!this.options.copyStyles || !Ht(t) || !Qa(t)) && e.appendChild(this.cloneNode(t, r));
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
        this.referenceElement === e && ci(s) && (this.clonedReferenceElement = s), Mi(s) && CU(s);
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
          var a = new tv(this.context, r), c = o.createElement("html2canvaspseudoelement");
          Ln(r, c), a.content.forEach(function(u) {
            if (u.type === 0)
              c.appendChild(o.createTextNode(u.value));
            else if (u.type === 22) {
              var B = o.createElement("img");
              B.src = u.value, B.style.opacity = "1", c.appendChild(B);
            } else if (u.type === 18) {
              if (u.name === "attr") {
                var Q = u.values.filter(lA);
                Q.length && c.appendChild(o.createTextNode(e.getAttribute(Q[0].value) || ""));
              } else if (u.name === "counter") {
                var C = u.values.filter(Tt), U = C[0], T = C[1];
                if (U && lA(U)) {
                  var g = n.counters.getCounterValue(U.value), b = T && lA(T) ? ii.parse(n.context, T.value) : 3;
                  c.appendChild(o.createTextNode(Ur(g, b, !1)));
                }
              } else if (u.name === "counters") {
                var M = u.values.filter(Tt), U = M[0], H = M[1], T = M[2];
                if (U && lA(U)) {
                  var k = n.counters.getCounterValues(U.value), _ = T && lA(T) ? ii.parse(n.context, T.value) : 3, W = H && H.type === 0 ? H.value : "", j = k.map(function(UA) {
                    return Ur(UA, _, !1);
                  }).join(W);
                  c.appendChild(o.createTextNode(j));
                }
              }
            } else if (u.type === 20)
              switch (u.value) {
                case "open-quote":
                  c.appendChild(o.createTextNode(ta(a.quotes, n.quoteDepth++, !0)));
                  break;
                case "close-quote":
                  c.appendChild(o.createTextNode(ta(a.quotes, --n.quoteDepth, !1)));
                  break;
                default:
                  c.appendChild(o.createTextNode(u.value));
              }
          }), c.className = fi + " " + Bi;
          var l = s === Br.BEFORE ? " " + fi : " " + Bi;
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
var cU = function(A, e) {
  var t = A.createElement("iframe");
  return t.className = "html2canvas-container", t.style.visibility = "hidden", t.style.position = "fixed", t.style.left = "-10000px", t.style.top = "0px", t.style.border = "0", t.width = e.width.toString(), t.height = e.height.toString(), t.scrolling = "no", t.setAttribute(Dc, "true"), A.body.appendChild(t), t;
}, uU = function(A) {
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
}, fU = function(A) {
  return Promise.all([].slice.call(A.images, 0).map(uU));
}, BU = function(A) {
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
}, dU = [
  "all",
  "d",
  "content"
  // Safari shows pseudoelements if content is set
], Ln = function(A, e) {
  for (var t = A.length - 1; t >= 0; t--) {
    var r = A.item(t);
    dU.indexOf(r) === -1 && e.style.setProperty(r, A.getPropertyValue(r));
  }
  return e;
}, gU = function(A) {
  var e = "";
  return A && (e += "<!DOCTYPE ", A.name && (e += A.name), A.internalSubset && (e += A.internalSubset), A.publicId && (e += '"' + A.publicId + '"'), A.systemId && (e += '"' + A.systemId + '"'), e += ">"), e;
}, hU = function(A, e, t) {
  A && A.defaultView && (e !== A.defaultView.pageXOffset || t !== A.defaultView.pageYOffset) && A.defaultView.scrollTo(e, t);
}, pU = function(A) {
  var e = A[0], t = A[1], r = A[2];
  e.scrollLeft = t, e.scrollTop = r;
}, wU = ":before", QU = ":after", fi = "___html2canvas___pseudoelement_before", Bi = "___html2canvas___pseudoelement_after", Ea = `{
    content: "" !important;
    display: none !important;
}`, CU = function(A) {
  vU(A, "." + fi + wU + Ea + `
         .` + Bi + QU + Ea);
}, vU = function(A, e) {
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
), UU = (
  /** @class */
  function() {
    function A(e, t) {
      this.context = e, this._options = t, this._cache = {};
    }
    return A.prototype.addImage = function(e) {
      var t = Promise.resolve();
      return this.has(e) || (Kn(e) || yU(e)) && (this._cache[e] = this.loadImage(e)).catch(function() {
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
                }, l.onerror = c, (EU(n) || r) && (l.crossOrigin = "anonymous"), l.src = n, l.complete === !0 && setTimeout(function() {
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
              var u = new FileReader();
              u.addEventListener("load", function() {
                return n(u.result);
              }, !1), u.addEventListener("error", function(B) {
                return i(B);
              }, !1), u.readAsDataURL(a.response);
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
), FU = /^data:image\/svg\+xml/i, bU = /^data:image\/.*;base64,/i, mU = /^data:image\/.*/i, yU = function(A) {
  return KA.SUPPORT_SVG_DRAWING || !xU(A);
}, Sn = function(A) {
  return mU.test(A);
}, EU = function(A) {
  return bU.test(A);
}, Kn = function(A) {
  return A.substr(0, 4) === "blob";
}, xU = function(A) {
  return A.substr(-3).toLowerCase() === "svg" || FU.test(A);
}, D = (
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
  return new D(A.x + (e.x - A.x) * t, A.y + (e.y - A.y) * t);
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
}, HU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      var t = e.styles, r = e.bounds, s = Ar(t.borderTopLeftRadius, r.width, r.height), n = s[0], i = s[1], o = Ar(t.borderTopRightRadius, r.width, r.height), a = o[0], c = o[1], l = Ar(t.borderBottomRightRadius, r.width, r.height), u = l[0], B = l[1], Q = Ar(t.borderBottomLeftRadius, r.width, r.height), C = Q[0], U = Q[1], T = [];
      T.push((n + a) / r.width), T.push((C + u) / r.width), T.push((i + U) / r.height), T.push((c + B) / r.height);
      var g = Math.max.apply(Math, T);
      g > 1 && (n /= g, i /= g, a /= g, c /= g, u /= g, B /= g, C /= g, U /= g);
      var b = r.width - a, M = r.height - B, H = r.width - u, k = r.height - U, _ = t.borderTopWidth, W = t.borderRightWidth, j = t.borderBottomWidth, V = t.borderLeftWidth, iA = gA(t.paddingTop, e.bounds.width), UA = gA(t.paddingRight, e.bounds.width), EA = gA(t.paddingBottom, e.bounds.width), eA = gA(t.paddingLeft, e.bounds.width);
      this.topLeftBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + V / 3, r.top + _ / 3, n - V / 3, i - _ / 3, nA.TOP_LEFT) : new D(r.left + V / 3, r.top + _ / 3), this.topRightBorderDoubleOuterBox = n > 0 || i > 0 ? hA(r.left + b, r.top + _ / 3, a - W / 3, c - _ / 3, nA.TOP_RIGHT) : new D(r.left + r.width - W / 3, r.top + _ / 3), this.bottomRightBorderDoubleOuterBox = u > 0 || B > 0 ? hA(r.left + H, r.top + M, u - W / 3, B - j / 3, nA.BOTTOM_RIGHT) : new D(r.left + r.width - W / 3, r.top + r.height - j / 3), this.bottomLeftBorderDoubleOuterBox = C > 0 || U > 0 ? hA(r.left + V / 3, r.top + k, C - V / 3, U - j / 3, nA.BOTTOM_LEFT) : new D(r.left + V / 3, r.top + r.height - j / 3), this.topLeftBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + V * 2 / 3, r.top + _ * 2 / 3, n - V * 2 / 3, i - _ * 2 / 3, nA.TOP_LEFT) : new D(r.left + V * 2 / 3, r.top + _ * 2 / 3), this.topRightBorderDoubleInnerBox = n > 0 || i > 0 ? hA(r.left + b, r.top + _ * 2 / 3, a - W * 2 / 3, c - _ * 2 / 3, nA.TOP_RIGHT) : new D(r.left + r.width - W * 2 / 3, r.top + _ * 2 / 3), this.bottomRightBorderDoubleInnerBox = u > 0 || B > 0 ? hA(r.left + H, r.top + M, u - W * 2 / 3, B - j * 2 / 3, nA.BOTTOM_RIGHT) : new D(r.left + r.width - W * 2 / 3, r.top + r.height - j * 2 / 3), this.bottomLeftBorderDoubleInnerBox = C > 0 || U > 0 ? hA(r.left + V * 2 / 3, r.top + k, C - V * 2 / 3, U - j * 2 / 3, nA.BOTTOM_LEFT) : new D(r.left + V * 2 / 3, r.top + r.height - j * 2 / 3), this.topLeftBorderStroke = n > 0 || i > 0 ? hA(r.left + V / 2, r.top + _ / 2, n - V / 2, i - _ / 2, nA.TOP_LEFT) : new D(r.left + V / 2, r.top + _ / 2), this.topRightBorderStroke = n > 0 || i > 0 ? hA(r.left + b, r.top + _ / 2, a - W / 2, c - _ / 2, nA.TOP_RIGHT) : new D(r.left + r.width - W / 2, r.top + _ / 2), this.bottomRightBorderStroke = u > 0 || B > 0 ? hA(r.left + H, r.top + M, u - W / 2, B - j / 2, nA.BOTTOM_RIGHT) : new D(r.left + r.width - W / 2, r.top + r.height - j / 2), this.bottomLeftBorderStroke = C > 0 || U > 0 ? hA(r.left + V / 2, r.top + k, C - V / 2, U - j / 2, nA.BOTTOM_LEFT) : new D(r.left + V / 2, r.top + r.height - j / 2), this.topLeftBorderBox = n > 0 || i > 0 ? hA(r.left, r.top, n, i, nA.TOP_LEFT) : new D(r.left, r.top), this.topRightBorderBox = a > 0 || c > 0 ? hA(r.left + b, r.top, a, c, nA.TOP_RIGHT) : new D(r.left + r.width, r.top), this.bottomRightBorderBox = u > 0 || B > 0 ? hA(r.left + H, r.top + M, u, B, nA.BOTTOM_RIGHT) : new D(r.left + r.width, r.top + r.height), this.bottomLeftBorderBox = C > 0 || U > 0 ? hA(r.left, r.top + k, C, U, nA.BOTTOM_LEFT) : new D(r.left, r.top + r.height), this.topLeftPaddingBox = n > 0 || i > 0 ? hA(r.left + V, r.top + _, Math.max(0, n - V), Math.max(0, i - _), nA.TOP_LEFT) : new D(r.left + V, r.top + _), this.topRightPaddingBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width - W), r.top + _, b > r.width + W ? 0 : Math.max(0, a - W), Math.max(0, c - _), nA.TOP_RIGHT) : new D(r.left + r.width - W, r.top + _), this.bottomRightPaddingBox = u > 0 || B > 0 ? hA(r.left + Math.min(H, r.width - V), r.top + Math.min(M, r.height - j), Math.max(0, u - W), Math.max(0, B - j), nA.BOTTOM_RIGHT) : new D(r.left + r.width - W, r.top + r.height - j), this.bottomLeftPaddingBox = C > 0 || U > 0 ? hA(r.left + V, r.top + Math.min(k, r.height - j), Math.max(0, C - V), Math.max(0, U - j), nA.BOTTOM_LEFT) : new D(r.left + V, r.top + r.height - j), this.topLeftContentBox = n > 0 || i > 0 ? hA(r.left + V + eA, r.top + _ + iA, Math.max(0, n - (V + eA)), Math.max(0, i - (_ + iA)), nA.TOP_LEFT) : new D(r.left + V + eA, r.top + _ + iA), this.topRightContentBox = a > 0 || c > 0 ? hA(r.left + Math.min(b, r.width + V + eA), r.top + _ + iA, b > r.width + V + eA ? 0 : a - V + eA, c - (_ + iA), nA.TOP_RIGHT) : new D(r.left + r.width - (W + UA), r.top + _ + iA), this.bottomRightContentBox = u > 0 || B > 0 ? hA(r.left + Math.min(H, r.width - (V + eA)), r.top + Math.min(M, r.height + _ + iA), Math.max(0, u - (W + UA)), B - (j + EA), nA.BOTTOM_RIGHT) : new D(r.left + r.width - (W + UA), r.top + r.height - (j + EA)), this.bottomLeftContentBox = C > 0 || U > 0 ? hA(r.left + V + eA, r.top + k, Math.max(0, C - (V + eA)), U - (j + EA), nA.BOTTOM_LEFT) : new D(r.left + V + eA, r.top + r.height - (j + EA));
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
      return new $r(new D(A, c), new D(A, c - o), new D(a - i, e), new D(a, e));
    case nA.TOP_RIGHT:
      return new $r(new D(A, e), new D(A + i, e), new D(a, c - o), new D(a, c));
    case nA.BOTTOM_RIGHT:
      return new $r(new D(a, e), new D(a, e + o), new D(A + i, c), new D(A, c));
    case nA.BOTTOM_LEFT:
    default:
      return new $r(new D(a, c), new D(a - i, c), new D(A, e + o), new D(A, e));
  }
}, ys = function(A) {
  return [A.topLeftBorderBox, A.topRightBorderBox, A.bottomRightBorderBox, A.bottomLeftBorderBox];
}, IU = function(A) {
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
}, _U = (
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
), LU = (
  /** @class */
  /* @__PURE__ */ function() {
    function A(e) {
      this.opacity = e, this.type = 2, this.target = 6;
    }
    return A;
  }()
), SU = function(A) {
  return A.type === 0;
}, Oc = function(A) {
  return A.type === 1;
}, KU = function(A) {
  return A.type === 2;
}, xa = function(A, e) {
  return A.length === e.length ? A.some(function(t, r) {
    return t === e[r];
  }) : !1;
}, TU = function(A, e, t, r, s) {
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
      if (this.container = e, this.parent = t, this.effects = [], this.curves = new HU(this.container), this.container.styles.opacity < 1 && this.effects.push(new LU(this.container.styles.opacity)), this.container.styles.transform !== null) {
        var r = this.container.bounds.left + this.container.styles.transformOrigin[0].number, s = this.container.bounds.top + this.container.styles.transformOrigin[1].number, n = this.container.styles.transform;
        this.effects.push(new _U(r, s, n));
      }
      if (this.container.styles.overflowX !== 0) {
        var i = ys(this.curves), o = Es(this.curves);
        xa(i, o) ? this.effects.push(new As(
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
            var i = ys(r.curves), o = Es(r.curves);
            xa(i, o) || s.unshift(new As(
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
        var u = s.styles.zIndex.order;
        if (u < 0) {
          var B = 0;
          c.negativeZIndex.some(function(C, U) {
            return u > C.element.container.styles.zIndex.order ? (B = U, !1) : B > 0;
          }), c.negativeZIndex.splice(B, 0, l);
        } else if (u > 0) {
          var Q = 0;
          c.positiveZIndex.some(function(C, U) {
            return u >= C.element.container.styles.zIndex.order ? (Q = U + 1, !1) : Q > 0;
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
}, DU = function(A) {
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
}, kU = function(A, e) {
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
}, OU = function(A, e) {
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
}, RU = function(A, e) {
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
}, xs = function(A) {
  var e = A.styles, t = A.bounds, r = gA(e.paddingLeft, t.width), s = gA(e.paddingRight, t.width), n = gA(e.paddingTop, t.width), i = gA(e.paddingBottom, t.width);
  return t.add(r + e.borderLeftWidth, n + e.borderTopWidth, -(e.borderRightWidth + e.borderLeftWidth + r + s), -(e.borderTopWidth + e.borderBottomWidth + n + i));
}, MU = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? xs(e) : Vc(e);
}, NU = function(A, e) {
  return A === 0 ? e.bounds : A === 2 ? xs(e) : Vc(e);
}, Tn = function(A, e, t) {
  var r = MU(xt(A.styles.backgroundOrigin, e), A), s = NU(xt(A.styles.backgroundClip, e), A), n = VU(xt(A.styles.backgroundSize, e), t, r), i = n[0], o = n[1], a = Ar(xt(A.styles.backgroundPosition, e), r.width - i, r.height - o), c = GU(xt(A.styles.backgroundRepeat, e), a, n, r, s), l = Math.round(r.left + a[0]), u = Math.round(r.top + a[1]);
  return [c, l, u, i, o];
}, bt = function(A) {
  return lA(A) && A.value === Lt.AUTO;
}, ts = function(A) {
  return typeof A == "number";
}, VU = function(A, e, t) {
  var r = e[0], s = e[1], n = e[2], i = A[0], o = A[1];
  if (!i)
    return [0, 0];
  if (bA(i) && o && bA(o))
    return [gA(i, t.width), gA(o, t.height)];
  var a = ts(n);
  if (lA(i) && (i.value === Lt.CONTAIN || i.value === Lt.COVER)) {
    if (ts(n)) {
      var c = t.width / t.height;
      return c < n != (i.value === Lt.COVER) ? [t.width, t.width / n] : [t.height * n, t.height];
    }
    return [t.width, t.height];
  }
  var l = ts(r), u = ts(s), B = l || u;
  if (bt(i) && (!o || bt(o))) {
    if (l && u)
      return [r, s];
    if (!a && !B)
      return [t.width, t.height];
    if (B && a) {
      var Q = l ? r : s * n, C = u ? s : r / n;
      return [Q, C];
    }
    var U = l ? r : t.width, T = u ? s : t.height;
    return [U, T];
  }
  if (a) {
    var g = 0, b = 0;
    return bA(i) ? g = gA(i, t.width) : bA(o) && (b = gA(o, t.height)), bt(i) ? g = b * n : (!o || bt(o)) && (b = g / n), [g, b];
  }
  var M = null, H = null;
  if (bA(i) ? M = gA(i, t.width) : o && bA(o) && (H = gA(o, t.height)), M !== null && (!o || bt(o)) && (H = l && u ? M / r * s : t.height), H !== null && bt(i) && (M = l && u ? H / s * r : t.width), M !== null && H !== null)
    return [M, H];
  throw new Error("Unable to calculate background-size for element");
}, xt = function(A, e) {
  var t = A[e];
  return typeof t > "u" ? A[0] : t;
}, GU = function(A, e, t, r, s) {
  var n = e[0], i = e[1], o = t[0], a = t[1];
  switch (A) {
    case 2:
      return [
        new D(Math.round(r.left), Math.round(r.top + i)),
        new D(Math.round(r.left + r.width), Math.round(r.top + i)),
        new D(Math.round(r.left + r.width), Math.round(a + r.top + i)),
        new D(Math.round(r.left), Math.round(a + r.top + i))
      ];
    case 3:
      return [
        new D(Math.round(r.left + n), Math.round(r.top)),
        new D(Math.round(r.left + n + o), Math.round(r.top)),
        new D(Math.round(r.left + n + o), Math.round(r.height + r.top)),
        new D(Math.round(r.left + n), Math.round(r.height + r.top))
      ];
    case 1:
      return [
        new D(Math.round(r.left + n), Math.round(r.top + i)),
        new D(Math.round(r.left + n + o), Math.round(r.top + i)),
        new D(Math.round(r.left + n + o), Math.round(r.top + i + a)),
        new D(Math.round(r.left + n), Math.round(r.top + i + a))
      ];
    default:
      return [
        new D(Math.round(s.left), Math.round(s.top)),
        new D(Math.round(s.left + s.width), Math.round(s.top)),
        new D(Math.round(s.left + s.width), Math.round(s.height + s.top)),
        new D(Math.round(s.left), Math.round(s.height + s.top))
      ];
  }
}, PU = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7", Ia = "Hidden Text", JU = (
  /** @class */
  function() {
    function A(e) {
      this._data = {}, this._document = e;
    }
    return A.prototype.parseMetrics = function(e, t) {
      var r = this._document.createElement("div"), s = this._document.createElement("img"), n = this._document.createElement("span"), i = this._document.body;
      r.style.visibility = "hidden", r.style.fontFamily = e, r.style.fontSize = t, r.style.margin = "0", r.style.padding = "0", r.style.whiteSpace = "nowrap", i.appendChild(r), s.src = PU, s.width = 1, s.height = 1, s.style.margin = "0", s.style.padding = "0", s.style.verticalAlign = "baseline", n.style.fontFamily = e, n.style.fontSize = t, n.style.margin = "0", n.style.padding = "0", n.appendChild(this._document.createTextNode(Ia)), r.appendChild(n), r.appendChild(s);
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
), XU = 1e4, WU = (
  /** @class */
  function(A) {
    Be(e, A);
    function e(t, r) {
      var s = A.call(this, t, r) || this;
      return s._activeEffects = [], s.canvas = r.canvas ? r.canvas : document.createElement("canvas"), s.ctx = s.canvas.getContext("2d"), r.canvas || (s.canvas.width = Math.floor(r.width * r.scale), s.canvas.height = Math.floor(r.height * r.scale), s.canvas.style.width = r.width + "px", s.canvas.style.height = r.height + "px"), s.fontMetrics = new JU(document), s.ctx.scale(s.options.scale, s.options.scale), s.ctx.translate(-r.x, -r.y), s.ctx.textBaseline = "bottom", s._activeEffects = [], s.context.logger.debug("Canvas renderer initialized (" + r.width + "x" + r.height + ") with scale " + r.scale), s;
    }
    return e.prototype.applyEffects = function(t) {
      for (var r = this; this._activeEffects.length; )
        this.popEffect();
      t.forEach(function(s) {
        return r.applyEffect(s);
      });
    }, e.prototype.applyEffect = function(t) {
      this.ctx.save(), KU(t) && (this.ctx.globalAlpha = t.opacity), SU(t) && (this.ctx.translate(t.offsetX, t.offsetY), this.ctx.transform(t.matrix[0], t.matrix[1], t.matrix[2], t.matrix[3], t.matrix[4], t.matrix[5]), this.ctx.translate(-t.offsetX, -t.offsetY)), Oc(t) && (this.path(t.path), this.ctx.clip()), this._activeEffects.push(t);
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
      }).join(""), s = qU(t.fontFamily).join(", "), n = Er(t.fontSize) ? "" + t.fontSize.number + t.fontSize.unit : t.fontSize.number + "px";
      return [
        [t.fontStyle, r, t.fontWeight, n, s].join(" "),
        s,
        n
      ];
    }, e.prototype.renderTextNode = function(t, r) {
      return VA(this, void 0, void 0, function() {
        var s, n, i, o, a, c, l, u, B = this;
        return DA(this, function(Q) {
          return s = this.createFontStyle(r), n = s[0], i = s[1], o = s[2], this.ctx.font = n, this.ctx.direction = r.direction === 1 ? "rtl" : "ltr", this.ctx.textAlign = "left", this.ctx.textBaseline = "alphabetic", a = this.fontMetrics.getMetrics(i, o), c = a.baseline, l = a.middle, u = r.paintOrder, t.textBounds.forEach(function(C) {
            u.forEach(function(U) {
              switch (U) {
                case 0:
                  B.ctx.fillStyle = HA(r.color), B.renderTextWithLetterSpacing(C, r.letterSpacing, c);
                  var T = r.textShadow;
                  T.length && C.text.trim().length && (T.slice(0).reverse().forEach(function(g) {
                    B.ctx.shadowColor = HA(g.color), B.ctx.shadowOffsetX = g.offsetX.number * B.options.scale, B.ctx.shadowOffsetY = g.offsetY.number * B.options.scale, B.ctx.shadowBlur = g.blur.number, B.renderTextWithLetterSpacing(C, r.letterSpacing, c);
                  }), B.ctx.shadowColor = "", B.ctx.shadowOffsetX = 0, B.ctx.shadowOffsetY = 0, B.ctx.shadowBlur = 0), r.textDecorationLine.length && (B.ctx.fillStyle = HA(r.textDecorationColor || r.color), r.textDecorationLine.forEach(function(g) {
                    switch (g) {
                      case 1:
                        B.ctx.fillRect(C.bounds.left, Math.round(C.bounds.top + c), C.bounds.width, 1);
                        break;
                      case 2:
                        B.ctx.fillRect(C.bounds.left, Math.round(C.bounds.top), C.bounds.width, 1);
                        break;
                      case 3:
                        B.ctx.fillRect(C.bounds.left, Math.ceil(C.bounds.top + l), C.bounds.width, 1);
                        break;
                    }
                  }));
                  break;
                case 1:
                  r.webkitTextStrokeWidth && C.text.trim().length && (B.ctx.strokeStyle = HA(r.webkitTextStrokeColor), B.ctx.lineWidth = r.webkitTextStrokeWidth, B.ctx.lineJoin = window.chrome ? "miter" : "round", B.ctx.strokeText(C.text, C.bounds.left, C.bounds.top + c)), B.ctx.strokeStyle = "", B.ctx.lineWidth = 0, B.ctx.lineJoin = "miter";
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
        var n = xs(t), i = Es(r);
        this.path(i), this.ctx.save(), this.ctx.clip(), this.ctx.drawImage(s, 0, 0, t.intrinsicWidth, t.intrinsicHeight, n.left, n.top, n.width, n.height), this.ctx.restore();
      }
    }, e.prototype.renderNodeContent = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, b, b, c, l, u, B, H, Q, C, k, U, T, g, b, M, H, k;
        return DA(this, function(_) {
          switch (_.label) {
            case 0:
              this.applyEffects(t.getEffects(
                4
                /* CONTENT */
              )), r = t.container, s = t.curves, n = r.styles, i = 0, o = r.textNodes, _.label = 1;
            case 1:
              return i < o.length ? (a = o[i], [4, this.renderTextNode(a, n)]) : [3, 4];
            case 2:
              _.sent(), _.label = 3;
            case 3:
              return i++, [3, 1];
            case 4:
              if (!(r instanceof vc)) return [3, 8];
              _.label = 5;
            case 5:
              return _.trys.push([5, 7, , 8]), [4, this.context.cache.match(r.src)];
            case 6:
              return b = _.sent(), this.renderReplacedElement(r, s, b), [3, 8];
            case 7:
              return _.sent(), this.context.logger.error("Error loading image " + r.src), [3, 8];
            case 8:
              if (r instanceof Uc && this.renderReplacedElement(r, s, r.canvas), !(r instanceof Fc)) return [3, 12];
              _.label = 9;
            case 9:
              return _.trys.push([9, 11, , 12]), [4, this.context.cache.match(r.svg)];
            case 10:
              return b = _.sent(), this.renderReplacedElement(r, s, b), [3, 12];
            case 11:
              return _.sent(), this.context.logger.error("Error loading svg " + r.svg.substring(0, 255)), [3, 12];
            case 12:
              return r instanceof Ec && r.tree ? (c = new e(this.context, {
                scale: this.options.scale,
                backgroundColor: r.backgroundColor,
                x: 0,
                y: 0,
                width: r.width,
                height: r.height
              }), [4, c.render(r.tree)]) : [3, 14];
            case 13:
              l = _.sent(), r.width && r.height && this.ctx.drawImage(l, 0, 0, r.width, r.height, r.bounds.left, r.bounds.top, r.bounds.width, r.bounds.height), _.label = 14;
            case 14:
              if (r instanceof Ri && (u = Math.min(r.bounds.width, r.bounds.height), r.type === Us ? r.checked && (this.ctx.save(), this.path([
                new D(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79),
                new D(r.bounds.left + u * 0.16, r.bounds.top + u * 0.5549),
                new D(r.bounds.left + u * 0.27347, r.bounds.top + u * 0.44071),
                new D(r.bounds.left + u * 0.39694, r.bounds.top + u * 0.5649),
                new D(r.bounds.left + u * 0.72983, r.bounds.top + u * 0.23),
                new D(r.bounds.left + u * 0.84, r.bounds.top + u * 0.34085),
                new D(r.bounds.left + u * 0.39363, r.bounds.top + u * 0.79)
              ]), this.ctx.fillStyle = HA(pa), this.ctx.fill(), this.ctx.restore()) : r.type === Fs && r.checked && (this.ctx.save(), this.ctx.beginPath(), this.ctx.arc(r.bounds.left + u / 2, r.bounds.top + u / 2, u / 4, 0, Math.PI * 2, !0), this.ctx.fillStyle = HA(pa), this.ctx.fill(), this.ctx.restore())), YU(r) && r.value.length) {
                switch (B = this.createFontStyle(n), H = B[0], Q = B[1], C = this.fontMetrics.getMetrics(H, Q).baseline, this.ctx.font = H, this.ctx.fillStyle = HA(n.color), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = ZU(r.styles.textAlign), k = xs(r), U = 0, r.styles.textAlign) {
                  case 1:
                    U += k.width / 2;
                    break;
                  case 2:
                    U += k.width;
                    break;
                }
                T = k.add(U, 0, 0, -k.height / 2 + 1), this.ctx.save(), this.path([
                  new D(k.left, k.top),
                  new D(k.left + k.width, k.top),
                  new D(k.left + k.width, k.top + k.height),
                  new D(k.left, k.top + k.height)
                ]), this.ctx.clip(), this.renderTextWithLetterSpacing(new fr(r.value, T), n.letterSpacing, C), this.ctx.restore(), this.ctx.textBaseline = "alphabetic", this.ctx.textAlign = "left";
              }
              if (!yA(
                r.styles.display,
                2048
                /* LIST_ITEM */
              )) return [3, 20];
              if (r.styles.listStyleImage === null) return [3, 19];
              if (g = r.styles.listStyleImage, g.type !== 0) return [3, 18];
              b = void 0, M = g.url, _.label = 15;
            case 15:
              return _.trys.push([15, 17, , 18]), [4, this.context.cache.match(M)];
            case 16:
              return b = _.sent(), this.ctx.drawImage(b, r.bounds.left - (b.width + 10), r.bounds.top), [3, 18];
            case 17:
              return _.sent(), this.context.logger.error("Error loading list-style-image " + M), [3, 18];
            case 18:
              return [3, 20];
            case 19:
              t.listValue && r.styles.listStyleType !== -1 && (H = this.createFontStyle(n)[0], this.ctx.font = H, this.ctx.fillStyle = HA(n.color), this.ctx.textBaseline = "middle", this.ctx.textAlign = "right", k = new Ge(r.bounds.left, r.bounds.top + gA(r.styles.paddingTop, r.bounds.width), r.bounds.width, Aa(n.lineHeight, n.fontSize.number) / 2 + 1), this.renderTextWithLetterSpacing(new fr(t.listValue, k), n.letterSpacing, Aa(n.lineHeight, n.fontSize.number) / 2 + 2), this.ctx.textBaseline = "bottom", this.ctx.textAlign = "left"), _.label = 20;
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
        var r, s, g, n, i, g, o, a, g, c, l, g, u, B, g, Q, C, g, U, T, g;
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
              return r < s.length ? (g = s[r], [4, this.renderStack(g)]) : [3, 5];
            case 3:
              b.sent(), b.label = 4;
            case 4:
              return r++, [3, 2];
            case 5:
              return [4, this.renderNodeContent(t.element)];
            case 6:
              b.sent(), n = 0, i = t.nonInlineLevel, b.label = 7;
            case 7:
              return n < i.length ? (g = i[n], [4, this.renderNode(g)]) : [3, 10];
            case 8:
              b.sent(), b.label = 9;
            case 9:
              return n++, [3, 7];
            case 10:
              o = 0, a = t.nonPositionedFloats, b.label = 11;
            case 11:
              return o < a.length ? (g = a[o], [4, this.renderStack(g)]) : [3, 14];
            case 12:
              b.sent(), b.label = 13;
            case 13:
              return o++, [3, 11];
            case 14:
              c = 0, l = t.nonPositionedInlineLevel, b.label = 15;
            case 15:
              return c < l.length ? (g = l[c], [4, this.renderStack(g)]) : [3, 18];
            case 16:
              b.sent(), b.label = 17;
            case 17:
              return c++, [3, 15];
            case 18:
              u = 0, B = t.inlineLevel, b.label = 19;
            case 19:
              return u < B.length ? (g = B[u], [4, this.renderNode(g)]) : [3, 22];
            case 20:
              b.sent(), b.label = 21;
            case 21:
              return u++, [3, 19];
            case 22:
              Q = 0, C = t.zeroOrAutoZIndexOrTransformedOrOpacity, b.label = 23;
            case 23:
              return Q < C.length ? (g = C[Q], [4, this.renderStack(g)]) : [3, 26];
            case 24:
              b.sent(), b.label = 25;
            case 25:
              return Q++, [3, 23];
            case 26:
              U = 0, T = t.positiveZIndex, b.label = 27;
            case 27:
              return U < T.length ? (g = T[U], [4, this.renderStack(g)]) : [3, 30];
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
                var u, B, Q, iA, sA, z, eA, wA, j, C, iA, sA, z, eA, wA, U, T, g, b, M, H, k, _, W, j, V, iA, UA, EA, eA, wA, ie, sA, z, AA, xA, YA, MA, mA, Ae, He, oe;
                return DA(this, function(ee) {
                  switch (ee.label) {
                    case 0:
                      if (l.type !== 0) return [3, 5];
                      u = void 0, B = l.url, ee.label = 1;
                    case 1:
                      return ee.trys.push([1, 3, , 4]), [4, n.context.cache.match(B)];
                    case 2:
                      return u = ee.sent(), [3, 4];
                    case 3:
                      return ee.sent(), n.context.logger.error("Error loading background-image " + B), [3, 4];
                    case 4:
                      return u && (Q = Tn(t, r, [
                        u.width,
                        u.height,
                        u.width / u.height
                      ]), iA = Q[0], sA = Q[1], z = Q[2], eA = Q[3], wA = Q[4], j = n.ctx.createPattern(n.resizeImage(u, eA, wA), "repeat"), n.renderRepeat(iA, j, sA, z)), [3, 6];
                    case 5:
                      SC(l) ? (C = Tn(t, r, [null, null, null]), iA = C[0], sA = C[1], z = C[2], eA = C[3], wA = C[4], U = xC(l.angle, eA, wA), T = U[0], g = U[1], b = U[2], M = U[3], H = U[4], k = document.createElement("canvas"), k.width = eA, k.height = wA, _ = k.getContext("2d"), W = _.createLinearGradient(g, M, b, H), qo(l.stops, T).forEach(function(de) {
                        return W.addColorStop(de.stop, HA(de.color));
                      }), _.fillStyle = W, _.fillRect(0, 0, eA, wA), eA > 0 && wA > 0 && (j = n.ctx.createPattern(k, "repeat"), n.renderRepeat(iA, j, sA, z))) : KC(l) && (V = Tn(t, r, [
                        null,
                        null,
                        null
                      ]), iA = V[0], UA = V[1], EA = V[2], eA = V[3], wA = V[4], ie = l.position.length === 0 ? [Ti] : l.position, sA = gA(ie[0], eA), z = gA(ie[ie.length - 1], wA), AA = HC(l, sA, z, eA, wA), xA = AA[0], YA = AA[1], xA > 0 && YA > 0 && (MA = n.ctx.createRadialGradient(UA + sA, EA + z, 0, UA + sA, EA + z, xA), qo(l.stops, xA * 2).forEach(function(de) {
                        return MA.addColorStop(de.stop, HA(de.color));
                      }), n.path(iA), n.ctx.fillStyle = MA, xA !== YA ? (mA = t.bounds.left + 0.5 * t.bounds.width, Ae = t.bounds.top + 0.5 * t.bounds.height, He = YA / xA, oe = 1 / He, n.ctx.save(), n.ctx.translate(mA, Ae), n.ctx.transform(1, 0, 0, He, 0, 0), n.ctx.translate(-mA, -Ae), n.ctx.fillRect(UA, oe * (EA - Ae) + Ae, eA, wA * oe), n.ctx.restore()) : n.ctx.fill())), ee.label = 6;
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
          return this.path(Ha(s, r)), this.ctx.fillStyle = HA(t), this.ctx.fill(), [
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
              return i = kU(n, s), this.path(i), this.ctx.fillStyle = HA(t), this.ctx.fill(), o = OU(n, s), this.path(o), this.ctx.fill(), [
                2
                /*return*/
              ];
          }
        });
      });
    }, e.prototype.renderNodeBackgroundAndBorders = function(t) {
      return VA(this, void 0, void 0, function() {
        var r, s, n, i, o, a, c, l, u = this;
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
              ], i = jU(xt(r.backgroundClip, 0), t.curves), s || r.boxShadow.length ? (this.ctx.save(), this.path(i), this.ctx.clip(), tt(r.backgroundColor) || (this.ctx.fillStyle = HA(r.backgroundColor), this.ctx.fill()), [4, this.renderBackgroundImage(t.container)]) : [3, 2];
            case 1:
              B.sent(), this.ctx.restore(), r.boxShadow.slice(0).reverse().forEach(function(Q) {
                u.ctx.save();
                var C = ys(t.curves), U = Q.inset ? 0 : XU, T = TU(C, -U + (Q.inset ? 1 : -1) * Q.spread.number, (Q.inset ? 1 : -1) * Q.spread.number, Q.spread.number * (Q.inset ? -2 : 2), Q.spread.number * (Q.inset ? -2 : 2));
                Q.inset ? (u.path(C), u.ctx.clip(), u.mask(T)) : (u.mask(C), u.ctx.clip(), u.path(T)), u.ctx.shadowOffsetX = Q.offsetX.number + U, u.ctx.shadowOffsetY = Q.offsetY.number, u.ctx.shadowColor = HA(Q.color), u.ctx.shadowBlur = Q.blur.number, u.ctx.fillStyle = Q.inset ? HA(Q.color) : "rgba(0,0,0,1)", u.ctx.fill(), u.ctx.restore();
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
        var o, a, c, l, u, B, Q, C, U, T, g, b, M, H, k, _, k, _;
        return DA(this, function(W) {
          return this.ctx.save(), o = RU(n, s), a = Ha(n, s), i === 2 && (this.path(a), this.ctx.clip()), re(a[0]) ? (c = a[0].start.x, l = a[0].start.y) : (c = a[0].x, l = a[0].y), re(a[1]) ? (u = a[1].end.x, B = a[1].end.y) : (u = a[1].x, B = a[1].y), s === 0 || s === 2 ? Q = Math.abs(c - u) : Q = Math.abs(l - B), this.ctx.beginPath(), i === 3 ? this.formatPath(o) : this.formatPath(a.slice(0, 2)), C = r < 3 ? r * 3 : r * 2, U = r < 3 ? r * 2 : r, i === 3 && (C = r, U = r), T = !0, Q <= C * 2 ? T = !1 : Q <= C * 2 + U ? (g = Q / (2 * C + U), C *= g, U *= g) : (b = Math.floor((Q + U) / (C + U)), M = (Q - b * C) / (b - 1), H = (Q - (b + 1) * C) / b, U = H <= 0 || Math.abs(U - M) < Math.abs(U - H) ? M : H), T && (i === 3 ? this.ctx.setLineDash([0, C + U]) : this.ctx.setLineDash([C, U])), i === 3 ? (this.ctx.lineCap = "round", this.ctx.lineWidth = r) : this.ctx.lineWidth = r * 2 + 1.1, this.ctx.strokeStyle = HA(t), this.ctx.stroke(), this.ctx.setLineDash([]), i === 2 && (re(a[0]) && (k = a[3], _ = a[0], this.ctx.beginPath(), this.formatPath([new D(k.end.x, k.end.y), new D(_.start.x, _.start.y)]), this.ctx.stroke()), re(a[1]) && (k = a[1], _ = a[2], this.ctx.beginPath(), this.formatPath([new D(k.end.x, k.end.y), new D(_.start.x, _.start.y)]), this.ctx.stroke())), this.ctx.restore(), [
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
              return this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(this.options.x, this.options.y, this.options.width, this.options.height)), r = DU(t), [4, this.renderStack(r)];
            case 1:
              return s.sent(), this.applyEffects([]), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), YU = function(A) {
  return A instanceof yc || A instanceof mc ? !0 : A instanceof Ri && A.type !== Fs && A.type !== Us;
}, jU = function(A, e) {
  switch (A) {
    case 0:
      return ys(e);
    case 2:
      return IU(e);
    case 1:
    default:
      return Es(e);
  }
}, ZU = function(A) {
  switch (A) {
    case 1:
      return "center";
    case 2:
      return "right";
    case 0:
    default:
      return "left";
  }
}, zU = ["-apple-system", "system-ui"], qU = function(A) {
  return /iPhone OS 15_(0|1)/.test(window.navigator.userAgent) ? A.filter(function(e) {
    return zU.indexOf(e) === -1;
  }) : A;
}, $U = (
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
              return r = ai(this.options.width * this.options.scale, this.options.height * this.options.scale, this.options.scale, this.options.scale, t), [4, AF(r)];
            case 1:
              return s = n.sent(), this.options.backgroundColor && (this.ctx.fillStyle = HA(this.options.backgroundColor), this.ctx.fillRect(0, 0, this.options.width * this.options.scale, this.options.height * this.options.scale)), this.ctx.drawImage(s, -this.options.x * this.options.scale, -this.options.y * this.options.scale), [2, this.canvas];
          }
        });
      });
    }, e;
  }(Gc)
), AF = function(A) {
  return new Promise(function(e, t) {
    var r = new Image();
    r.onload = function() {
      e(r);
    }, r.onerror = t, r.src = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(new XMLSerializer().serializeToString(A));
  });
}, eF = (
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
), tF = (
  /** @class */
  function() {
    function A(e, t) {
      var r;
      this.windowBounds = t, this.instanceName = "#" + A.instanceCount++, this.logger = new eF({ id: this.instanceName, enabled: e.logging }), this.cache = (r = e.cache) !== null && r !== void 0 ? r : new UU(this, e);
    }
    return A.instanceCount = 1, A;
  }()
), rF = function(A, e) {
  return e === void 0 && (e = {}), sF(A, e);
};
typeof window < "u" && kc.setContext(window);
var sF = function(A, e) {
  return VA(void 0, void 0, void 0, function() {
    var t, r, s, n, i, o, a, c, l, u, B, Q, C, U, T, g, b, M, H, k, W, _, W, j, V, iA, UA, EA, eA, wA, ie, sA, z, AA, xA, YA, MA, mA, Ae, He;
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
            allowTaint: (j = e.allowTaint) !== null && j !== void 0 ? j : !1,
            imageTimeout: (V = e.imageTimeout) !== null && V !== void 0 ? V : 15e3,
            proxy: e.proxy,
            useCORS: (iA = e.useCORS) !== null && iA !== void 0 ? iA : !1
          }, n = Wn({ logging: (UA = e.logging) !== null && UA !== void 0 ? UA : !0, cache: e.cache }, s), i = {
            windowWidth: (EA = e.windowWidth) !== null && EA !== void 0 ? EA : r.innerWidth,
            windowHeight: (eA = e.windowHeight) !== null && eA !== void 0 ? eA : r.innerHeight,
            scrollX: (wA = e.scrollX) !== null && wA !== void 0 ? wA : r.pageXOffset,
            scrollY: (ie = e.scrollY) !== null && ie !== void 0 ? ie : r.pageYOffset
          }, o = new Ge(i.scrollX, i.scrollY, i.windowWidth, i.windowHeight), a = new tF(n, o), c = (sA = e.foreignObjectRendering) !== null && sA !== void 0 ? sA : !1, l = {
            allowTaint: (z = e.allowTaint) !== null && z !== void 0 ? z : !1,
            onclone: e.onclone,
            ignoreElements: e.ignoreElements,
            inlineImages: c,
            copyStyles: c
          }, a.logger.debug("Starting document clone with size " + o.width + "x" + o.height + " scrolled to " + -o.left + "," + -o.top), u = new ya(a, A, l), B = u.clonedReferenceElement, B ? [4, u.toIFrame(t, o)] : [2, Promise.reject("Unable to find element in cloned iframe")];
        case 1:
          return Q = oe.sent(), C = Mi(B) || nU(B) ? Tw(B.ownerDocument) : Gs(a, B), U = C.width, T = C.height, g = C.left, b = C.top, M = nF(a, B, e.backgroundColor), H = {
            canvas: e.canvas,
            backgroundColor: M,
            scale: (xA = (AA = e.scale) !== null && AA !== void 0 ? AA : r.devicePixelRatio) !== null && xA !== void 0 ? xA : 1,
            x: ((YA = e.x) !== null && YA !== void 0 ? YA : 0) + g,
            y: ((MA = e.y) !== null && MA !== void 0 ? MA : 0) + b,
            width: (mA = e.width) !== null && mA !== void 0 ? mA : Math.ceil(U),
            height: (Ae = e.height) !== null && Ae !== void 0 ? Ae : Math.ceil(T)
          }, c ? (a.logger.debug("Document cloned, using foreign object rendering"), W = new $U(a, H), [4, W.render(B)]) : [3, 3];
        case 2:
          return k = oe.sent(), [3, 5];
        case 3:
          return a.logger.debug("Document cloned, element located at " + g + "," + b + " with size " + U + "x" + T + " using computed rendering"), a.logger.debug("Starting DOM parsing"), _ = Hc(a, B), M === _.styles.backgroundColor && (_.styles.backgroundColor = Oe.TRANSPARENT), a.logger.debug("Starting renderer for element at " + H.x + "," + H.y + " with size " + H.width + "x" + H.height), W = new WU(a, H), [4, W.render(_)];
        case 4:
          k = oe.sent(), oe.label = 5;
        case 5:
          return (!((He = e.removeContainer) !== null && He !== void 0) || He) && (ya.destroy(Q) || a.logger.error("Cannot detach cloned iframe as it is not in the DOM anymore")), a.logger.debug("Finished rendering"), [2, k];
      }
    });
  });
}, nF = function(A, e, t) {
  var r = e.ownerDocument, s = r.documentElement ? cr(A, getComputedStyle(r.documentElement).backgroundColor) : Oe.TRANSPARENT, n = r.body ? cr(A, getComputedStyle(r.body).backgroundColor) : Oe.TRANSPARENT, i = typeof t == "string" ? cr(A, t) : t === null ? Oe.TRANSPARENT : 4294967295;
  return e === r.documentElement ? tt(s) ? tt(n) ? i : n : s : i;
};
async function iF(A = {}) {
  var l;
  const e = window.innerWidth, t = window.innerHeight;
  try {
    (l = A.beforeCapture) == null || l.call(A);
  } catch {
  }
  const r = (() => {
    var u;
    try {
      return (((u = A.canvases) == null ? void 0 : u.call(A)) || []).filter(Boolean);
    } catch {
      return [];
    }
  })(), s = r.map((u) => {
    try {
      return u.toDataURL("image/png");
    } catch {
      return null;
    }
  }).filter(Boolean), n = new Set(r), i = A.ignore || [], o = await rF(document.body, {
    useCORS: !0,
    allowTaint: !0,
    backgroundColor: null,
    scale: 1,
    width: e,
    height: t,
    ignoreElements: (u) => {
      var B;
      return n.has(u) || u.tagName && u.tagName.toLowerCase().startsWith("bugfix-") || (B = A.ignoreElement) != null && B.call(A, u) ? !0 : i.some((Q) => {
        var C;
        try {
          return (C = u.matches) == null ? void 0 : C.call(u, Q);
        } catch {
          return !1;
        }
      });
    }
  }), a = document.createElement("canvas");
  a.width = e, a.height = t;
  const c = a.getContext("2d");
  for (const u of s)
    await new Promise((B) => {
      const Q = new Image();
      Q.onload = () => {
        c.drawImage(Q, 0, 0, e, t), B();
      }, Q.onerror = B, Q.src = u;
    });
  return c.drawImage(o, 0, 0), a.toDataURL("image/png");
}
const mt = (A, e = 2) => String(A).padStart(e, "0");
function ue(A = !1) {
  const e = /* @__PURE__ */ new Date(), t = `${mt(e.getHours())}:${mt(e.getMinutes())}:${mt(e.getSeconds())}.${mt(e.getMilliseconds(), 3)}`;
  return A ? `${e.getFullYear()}-${mt(e.getMonth() + 1)}-${mt(e.getDate())} ${t}` : t;
}
function xr(A) {
  const e = [];
  return { push(t) {
    e.push(t), e.length > A && e.shift();
  }, get: () => [...e] };
}
const oF = [/Failed to obtain terrain tile/, /Mesh buffer doesn't exist/];
function aF(A) {
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
function lF({ max: A = 200, silent: e = oF } = {}) {
  const t = xr(A);
  for (const r of ["log", "warn", "error"]) {
    const s = console[r].bind(console);
    console[r] = (...n) => {
      const i = n.map(aF).join(" ");
      e.some((o) => o.test(i)) || (t.push({ level: r, time: ue(!0), message: i }), s(...n));
    };
  }
  return window.addEventListener("error", (r) => t.push({ level: "error", time: ue(!0), message: `[GlobalError] ${r.message} (${r.filename}:${r.lineno})` })), window.addEventListener("unhandledrejection", (r) => {
    const s = r.reason instanceof Error ? r.reason.message : String(r.reason);
    t.push({ level: "error", time: ue(!0), message: `[UnhandledRejection] ${s}` });
  }), t.get;
}
const cF = /\/(auth|oauth|token|login|sign|password|temp-password|users\/find-password)/i, uF = /"?(password|passwd|pwd|secret|token|authorization|refresh_token|access_token)"?\s*[:=]/i;
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
  return cF.test(A || "") || uF.test(t) ? "[masked]" : gi(e);
}
function fF({ max: A = 50, axios: e = [], fetch: t = !1, xhr: r = !1, ignore: s = [] } = {}) {
  const n = xr(A), i = (o) => s.some((a) => a instanceof RegExp ? a.test(o) : String(o).includes(a));
  for (const o of e) {
    const a = o != null && o.interceptors ? o : o == null ? void 0 : o.instance, c = (o == null ? void 0 : o.label) || "axios";
    a != null && a.interceptors && (a.interceptors.request.use((l) => (l._bk = { t0: Date.now(), time: ue(!0) }, l), (l) => Promise.reject(l)), a.interceptors.response.use((l) => {
      var B;
      const u = l.config._bk || {};
      return i(l.config.url) || n.push({ server: c, time: u.time, duration: u.t0 ? Date.now() - u.t0 : null, method: (B = l.config.method) == null ? void 0 : B.toUpperCase(), url: l.config.url, params: gi(l.config.params), requestBody: Je(l.config.url, l.config.data), status: l.status, responseBody: Je(l.config.url, l.data), error: null }), l;
    }, (l) => {
      var B, Q, C, U, T, g, b, M, H, k, _;
      const u = ((B = l.config) == null ? void 0 : B._bk) || {};
      return i((Q = l.config) == null ? void 0 : Q.url) || n.push({ server: c, time: u.time, duration: u.t0 ? Date.now() - u.t0 : null, method: (U = (C = l.config) == null ? void 0 : C.method) == null ? void 0 : U.toUpperCase(), url: (T = l.config) == null ? void 0 : T.url, params: gi((g = l.config) == null ? void 0 : g.params), requestBody: Je((b = l.config) == null ? void 0 : b.url, (M = l.config) == null ? void 0 : M.data), status: ((H = l.response) == null ? void 0 : H.status) ?? "ERR", responseBody: Je((k = l.config) == null ? void 0 : k.url, (_ = l.response) == null ? void 0 : _.data), error: l.message }), Promise.reject(l);
    }));
  }
  if (t && window.fetch) {
    const o = window.fetch.bind(window);
    window.fetch = async (a, c = {}) => {
      const l = typeof a == "string" ? a : a == null ? void 0 : a.url, u = Date.now(), B = ue(!0), Q = (c.method || typeof a != "string" && (a == null ? void 0 : a.method) || "GET").toUpperCase();
      try {
        const C = await o(a, c);
        return i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - u, method: Q, url: l, params: null, requestBody: Je(l, c.body), status: C.status, responseBody: null, error: null }), C;
      } catch (C) {
        throw i(l) || n.push({ server: "fetch", time: B, duration: Date.now() - u, method: Q, url: l, params: null, requestBody: Je(l, c.body), status: "ERR", responseBody: null, error: C.message }), C;
      }
    };
  }
  if (r && window.XMLHttpRequest) {
    const o = XMLHttpRequest.prototype, a = o.open, c = o.send;
    o.open = function(l, u, ...B) {
      return this._bk = { method: String(l).toUpperCase(), url: u }, a.call(this, l, u, ...B);
    }, o.send = function(l) {
      const u = this._bk || {}, B = Date.now(), Q = ue(!0);
      return this.addEventListener("loadend", () => {
        i(u.url) || n.push({ server: "xhr", time: Q, duration: Date.now() - B, method: u.method, url: u.url, params: null, requestBody: Je(u.url, l), status: this.status || "ERR", responseBody: this.responseType === "" || this.responseType === "text" ? Je(u.url, this.responseText) : null, error: this.status ? null : "network error" });
      }), c.call(this, l);
    };
  }
  return n.get;
}
function BF(A) {
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
function dF(A, { max: e = 100 } = {}) {
  const t = xr(e);
  return A.subscribe((r) => t.push({ time: ue(), type: r.type, payload: BF(r.payload) })), t.get;
}
function gF(A, { max: e = 20 } = {}) {
  const t = xr(e);
  if (A && typeof A.afterEach == "function")
    A.afterEach((r, s) => t.push({ time: ue(), from: s.fullPath || "(초기)", to: r.fullPath, name: String(r.name ?? "") }));
  else {
    let r = location.pathname + location.search + location.hash;
    const s = () => {
      const n = location.pathname + location.search + location.hash;
      n !== r && (t.push({ time: ue(), from: r, to: n, name: "" }), r = n);
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
function hF(A, { max: e = 80, skip: t = [] } = {}) {
  const r = xr(e), s = new Set(t), n = A.emit.bind(A);
  return A.emit = (i, o) => (s.has(i) || r.push({ time: ue(), type: i }), n(i, o)), r.get;
}
function vF() {
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
function UF(A) {
  return {
    subscribe: (e) => A.subscribe((t, r) => {
      const s = Object.keys(t).filter((n) => t[n] !== (r == null ? void 0 : r[n]));
      e({ type: `set(${s.join(",") || "?"})`, payload: Object.fromEntries(s.slice(0, 5).map((n) => [n, t[n]])) });
    })
  };
}
function pF(A) {
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
      if (o.some((u) => c.toLowerCase().includes(u))) continue;
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
    datetime: ue(!0),
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
function wF(A = {}) {
  var l;
  const e = { project: "default", hotkeys: { report: "Shift+F9", viewer: "Shift+F10" }, interceptors: { console: !0 }, ...A }, t = e.interceptors || {}, r = t.console === !1 ? Xt : lF(t.console === !0 ? {} : t.console), s = t.network ? fF(t.network) : Xt, n = t.mutation ? dF(t.mutation) : Xt, i = t.router ? gF(t.router === !0 ? null : t.router) : Xt, o = t.events ? hF(t.events.emitter || t.events, t.events.emitter ? t.events : {}) : Xt, a = ((l = e.projects) != null && l.length ? e.projects : [{ key: e.project, label: e.project }]).map((u) => typeof u == "string" ? { key: u, label: u } : u), c = {
    options: e,
    projects: a,
    project: a[0].key,
    api: dn({ ...e, project: a[0].key, apiKey: a[0].apiKey ?? e.apiKey, adminKey: e.adminKey }),
    /** 프로젝트별 서버 정보(/info: canFix 등) - 한 번 받아 캐시. 서버가 없으면 전부 canFix=true 로 */
    _info: {},
    async projectInfo() {
      for (const u of a)
        if (!c._info[u.key])
          try {
            c._info[u.key] = await dn({ ...e, project: u.key, apiKey: u.apiKey ?? e.apiKey, adminKey: e.adminKey }).info();
          } catch {
            c._info[u.key] = { canFix: !0, fixFrom: "app" };
          }
      return c._info;
    },
    /** 신고·조회 대상 프로젝트 바꾸기 (모달·뷰어의 선택 상자가 부른다) */
    setProject(u) {
      const B = a.find((Q) => Q.key === u);
      B && (c.project = B.key, c.api = dn({ ...e, project: B.key, apiKey: B.apiKey ?? e.apiKey, adminKey: e.adminKey }));
    },
    getLogs: r,
    getNetwork: s,
    getMutations: n,
    getRoutes: i,
    getEvents: o,
    captureScreen: (u = {}) => {
      var B;
      return iF({ ...e.capture || {}, ...u, ignore: [...((B = e.capture) == null ? void 0 : B.ignore) || [], ...u.ignore || []] });
    },
    captureContext: () => pF(c),
    fetchBackendLogs: async () => e.backendLogs ? await e.backendLogs() : null,
    notify: (u) => {
      e.notify ? e.notify(u) : c._listeners.forEach((B) => B(u));
    },
    _listeners: /* @__PURE__ */ new Set(),
    onNotify(u) {
      return c._listeners.add(u), () => c._listeners.delete(u);
    },
    _els: {},
    /** Web Component 빌드에서: 두 엘리먼트를 body 에 붙이고 kit 을 넘긴다 */
    mount() {
      if (c._els.modal) return c;
      const u = document.createElement("bugfix-report-modal"), B = document.createElement("bugfix-viewer");
      return u.kit = c, B.kit = c, document.body.append(u, B), c._els = { modal: u, viewer: B }, c;
    },
    openReport: () => {
      var u, B, Q, C;
      return ((B = (u = c._els.modal) == null ? void 0 : u.open) == null ? void 0 : B.call(u)) ?? ((C = (Q = c._open) == null ? void 0 : Q.report) == null ? void 0 : C.call(Q));
    },
    openViewer: (u) => {
      var B, Q, C, U;
      return ((Q = (B = c._els.viewer) == null ? void 0 : B.open) == null ? void 0 : Q.call(B, u)) ?? ((U = (C = c._open) == null ? void 0 : C.viewer) == null ? void 0 : U.call(C, u));
    },
    /** Vue 컴포넌트를 직접 쓰는 앱이 open 함수를 등록한다 */
    _open: {},
    register(u, B) {
      c._open[u] = B;
    }
  };
  if (e.hotkeys) {
    const u = (B, Q) => {
      if (!Q) return !1;
      const C = Q.split("+").map((T) => T.trim().toLowerCase()), U = C.pop();
      return B.key.toLowerCase() === U && C.includes("shift") === B.shiftKey && C.includes("ctrl") === B.ctrlKey && C.includes("alt") === B.altKey && C.includes("meta") === B.metaKey;
    };
    window.addEventListener("keydown", (B) => {
      u(B, e.hotkeys.report) ? (B.preventDefault(), c.openReport()) : u(B, e.hotkeys.viewer) && (B.preventDefault(), c.openViewer());
    });
  }
  return c;
}
function QF() {
  customElements.get("bugfix-report-modal") || customElements.define("bugfix-report-modal", /* @__PURE__ */ bo(hh)), customElements.get("bugfix-viewer") || customElements.define("bugfix-viewer", /* @__PURE__ */ bo(Kw));
}
QF();
function FF(A) {
  return wF(A).mount();
}
export {
  iF as captureScreen,
  wF as createBugfix,
  FF as install,
  vF as reduxMiddleware,
  QF as register,
  UF as zustandSource
};
